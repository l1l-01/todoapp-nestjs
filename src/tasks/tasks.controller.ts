import {
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { Task } from './entities/task.entity';
import { TasksService } from './tasks.service';
import { Get, Post, Put, Delete, Body, Render } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskExistsPipe } from './pipes/task.exists.pipe';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  @Render('index')
  async findAll(): Promise<{ tasks: Task[] }> {
    const tasks: Task[] = await this.taskService.findAll();
    return { tasks };
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe, TaskExistsPipe) id: number,
  ): Promise<Task> {
    return this.taskService.findOne(id);
  }

  @Post()
  async create(@Body() createTaskData: CreateTaskDto): Promise<Task> {
    return this.taskService.create(createTaskData);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe, TaskExistsPipe) id: number,
    @Body() updateTaskdata: UpdateTaskDto,
  ): Promise<Task> {
    return this.taskService.update(id, updateTaskdata);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(
    @Param('id', ParseIntPipe, TaskExistsPipe) id: number,
  ): Promise<void> {
    await this.taskService.remove(id);
  }
}
