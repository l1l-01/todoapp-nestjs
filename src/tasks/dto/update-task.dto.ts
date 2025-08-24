import {
  IsOptional,
  IsString,
  MinLength,
  MaxLength,
  IsBoolean,
} from 'class-validator';

export class UpdateTaskDto {
  @IsOptional()
  @IsString({ message: 'Name must be a string' })
  @MinLength(3, { message: 'Task title must be at least 3 characters long' })
  @MaxLength(100, {
    message: 'Task title cannot be longer than 100 characters',
  })
  name: string;

  @IsOptional()
  @IsBoolean({ message: 'Task completed must be a boolean' })
  completed: boolean;
}
