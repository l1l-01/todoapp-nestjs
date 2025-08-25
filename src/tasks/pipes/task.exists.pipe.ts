import { Injectable, NotFoundException, PipeTransform } from '@nestjs/common';
import { TasksService } from '../tasks.service';

@Injectable()
export class TaskExistsPipe implements PipeTransform {
  constructor(private readonly taskService: TasksService) {}

  async transform(value: number) {
    const task = await this.taskService.findOne(value);
    if (!task) {
      throw new NotFoundException(`Task with id ${value} not found`);
    }
    return value;
  }
}
