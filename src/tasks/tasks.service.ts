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

  async updateStatus(id: string, status: string): Promise<Task> {
    return this.taskModel.findByIdAndUpdate(id, { status }, { new: true }).exec();
  }
}
