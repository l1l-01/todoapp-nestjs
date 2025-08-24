import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty({ message: 'Task title cannot be empty' })
  @IsString({ message: 'Task title must be a string' })
  @MinLength(3, { message: 'Task title must be at least 3 characters long' })
  @MaxLength(100, {
    message: 'Task title cannot be longer than 100 characters',
  })
  name: string;

  @IsNotEmpty({ message: 'Task completed cannot be empty' })
  @IsBoolean({ message: 'Task completed must be a boolean' })
  completed: boolean;
}
