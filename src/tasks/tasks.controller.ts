import { Controller, Param, ParseIntPipe } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { TasksService } from './tasks.service';
import { Get, Post, Body } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskExistsPipe } from './pipes/task.exists.pipe';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  async findAll(): Promise<Task[]> {
    return this.taskService.findAll();
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
}
