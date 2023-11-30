// tasks.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Task } from './task.interface';
import { CreateTaskDto } from './create-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const createdTask = new this.taskModel(createTaskDto);
    return createdTask.save();
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async findByAssignee(assignee: string): Promise<Task[]> {
    return this.taskModel.find({ assignee }).exec();
  }

  async update(id: string, task: Task): Promise<Task> {
    const updatedTask = await this.taskModel.findByIdAndUpdate(id, task,{ new: true });
    
    if (!updatedTask) {
      throw new NotFoundException(`task with ID ${id} not found`);
    }

    return updatedTask;
  }
}
