import {
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { Task } from './entities/task.entity';
import { TasksService } from './tasks.service';
import {
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Body,
  Render,
  Res,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskExistsPipe } from './pipes/task.exists.pipe';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Response } from 'express';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  @Render('index')
  async findAll(): Promise<{
    tasks: Task[];
    totalTasks: number;
    completedTasksTotal: number;
    incompleteTasksTotal: number;
  }> {
    const tasks: Task[] = await this.taskService.findAll();
    const totalTasks: number = await this.taskService.getTasksTotal();
    const completedTasksTotal: number =
      await this.taskService.getCompletedTasksTotal();
    const incompleteTasksTotal: number =
      await this.taskService.getIncompletedTasksTotal();
    return { tasks, totalTasks, completedTasksTotal, incompleteTasksTotal };
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe, TaskExistsPipe) id: number,
  ): Promise<Task> {
    return this.taskService.findOne(id);
  }

  @Post()
  async create(@Body() createTaskData: CreateTaskDto, @Res() res: Response) {
    await this.taskService.create(createTaskData);
    res.redirect('/tasks');
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe, TaskExistsPipe) id: number,
    @Body() updateTaskdata: UpdateTaskDto,
  ): Promise<Task> {
    return this.taskService.update(id, updateTaskdata);
  }

  @Patch(':id')
  async markAsCompleted(
    @Param('id', ParseIntPipe, TaskExistsPipe) id: number,
    @Res() res: Response,
  ) {
    await this.taskService.markAsCompleted(id);
    res.redirect('/tasks');
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(
    @Param('id', ParseIntPipe, TaskExistsPipe) id: number,
    @Res() res: Response,
  ) {
    await this.taskService.remove(id);
    return res.redirect('/tasks');
  }
}
