import type { MewsAuthConfig } from '../types/auth.js';

export type MewsResponse<T = unknown> = T;

/**
 * Simple POST request to Mews API with authentication in body
 */
export async function mewsRequest<B = Record<string, unknown>, R = unknown>(
  config: MewsAuthConfig,
  endpoint: string,
  data: B
): Promise<MewsResponse<R>> {
  const url = `${config.baseUrl}${endpoint}`;
  
  const body = {
    ClientToken: config.clientToken,
    AccessToken: config.accessToken,
    Client: config.client,
    ...data,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Mews API request failed: ${response.status} ${response.statusText}. ${errorText}`);
    }

    // Handle empty responses
    const contentLength = response.headers.get('content-length');
    if (contentLength === '0') {
      return {} as MewsResponse<R>;
    }

    const result = await response.json();
    return result as MewsResponse<R>;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Mews API request failed: ${error.message}`);
    }
    throw new Error('Unknown error occurred during Mews API request');
  }
} 