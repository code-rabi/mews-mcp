import { Tool } from '../base.js';
import { mewsRequest } from '../../utils/http.js';

interface AddTaskParams {
  Name: string;
  Description?: string;
  DepartmentId?: string;
  ServiceOrderId?: string;
  DeadlineUtc?: string;
  Type?: string;
  State?: string;
}

interface Task {
  Id: string;
  Name: string;
  Description?: string;
  Type?: string;
  State: string;
  DepartmentId?: string;
  ServiceOrderId?: string;
  CreatedUtc: string;
  DeadlineUtc?: string;
  CreatorId?: string;
  AssigneeId?: string;
}

interface AddTaskResponse {
  Task: Task;
}

export const addTaskTool: Tool = {
  name: 'addTask',
  description: 'Adds a new task to the enterprise, optionally to a specified department',
  inputSchema: {
    type: 'object',
    properties: {
      Name: {
        type: 'string',
        description: 'Task name or title'
      },
      Description: {
        type: 'string',
        description: 'Detailed task description'
      },
      DepartmentId: {
        type: 'string',
        description: 'Department ID to assign the task to'
      },
      ServiceOrderId: {
        type: 'string',
        description: 'Service order ID (reservation or product service order) to associate with'
      },
      DeadlineUtc: {
        type: 'string',
        description: 'Task deadline (ISO 8601)'
      },
      Type: {
        type: 'string',
        description: 'Task type or category'
      },
      State: {
        type: 'string',
        description: 'Initial task state (defaults to Open)'
      }
    },
    required: ['Name']
  },

  async execute(config: any, args: AddTaskParams) {
    try {
      // Validate deadline is in the future if provided
      if (args.DeadlineUtc) {
        const deadline = new Date(args.DeadlineUtc);
        const now = new Date();
        
        if (deadline <= now) {
          throw new Error('Deadline must be in the future');
        }
      }

      // Validate required fields
      if (!args.Name || args.Name.trim().length === 0) {
        throw new Error('Task name is required and cannot be empty');
      }

      const response = await mewsRequest<AddTaskParams, AddTaskResponse>(
        config,
        '/api/connector/v1/tasks/add',
        args
      );

      const task = response.Task;

      return {
        content: [{
          type: 'text',
          text: `✅ **Task Created Successfully**\n\n` +
            `📋 **${task.Name}**\n` +
            `   Task ID: ${task.Id}\n` +
            `   State: ${task.State}\n` +
            `   Created: ${new Date(task.CreatedUtc).toLocaleString()}\n` +
            `   Department: ${task.DepartmentId || 'Not assigned'}\n` +
            `   Service Order: ${task.ServiceOrderId || 'None'}\n` +
            `   Type: ${task.Type || 'Not specified'}\n` +
            `   Deadline: ${task.DeadlineUtc ? new Date(task.DeadlineUtc).toLocaleString() : 'Not set'}\n` +
            `   Description: ${task.Description || 'No description'}\n\n` +
            `The task has been created and is ready for assignment and tracking.`
        }]
      };
    } catch (error) {
      return {
        content: [{
          type: 'text',
          text: `Error creating task: ${error instanceof Error ? error.message : 'Unknown error occurred'}`
        }]
      };
    }
  }
}; 