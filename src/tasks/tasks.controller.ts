// tasks.controller.ts
import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

import { CreateTaskDto } from './create-task.dto';
import { Task } from './task.interface';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto[]): Promise<Task[]> {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get('assignee/:assignee')
  findByAssignee(@Param('assignee') assignee: string): Promise<Task[]> {
    return this.tasksService.findByAssignee(assignee);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() task:Task): Promise<Task> {
    return this.tasksService.update(id, task);
  }
 
}
