import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
  Body,
} from '@nestjs/common';

// Mocked Sample Data
import { Data } from './data';

@Controller('api/v1')
export class AppController {
  @Get('todos')
  getAllTodo(): any {
    return Data;
  }

  @Get('todo/:id')
  getTodoById(@Param('id') params: string): string {
    console.log(params);

    return `Fetch single todo with ID - ${params}`;
  }

  @Post('todo')
  CreateTodo(@Body() body: string) {
    console.log(body);

    return 'Create new todo';
  }

  @Put('todo/:id')
  EditTodoById(@Param('id') params: string): string {
    return `Edit todo with ID - ${params}`;
  }

  @Delete('todo/:id')
  DeleteTodoById(@Param('id') params: string): string {
    return `Delete todo with ID - ${params}`;
  }
}
