import { TaskStatus } from '../tasks.model';

export interface UpdateTaskDto {
  title: string;
  description: string;
  status: TaskStatus;
}
