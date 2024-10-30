import { LabelEnum, PriorityEnum } from '../enums/enums';

export interface ITodoList {
  heading: string;
  buttonLabel: string;
  todos: ITodoItem[];
}

export interface ITodoItem {
  title: string;
  description: string;
  priority: PriorityEnum;
  label: LabelEnum;
}
