import { LABEL_ENUM, PRIORITY_ENUM } from '../enums/enums';

export interface ITodoList {
  heading: string;
  buttonLabel: string;
  todos: ITodoItem[];
}

export interface ITodoItem {
  id: string;
  status: string;
  title: string;
  description: string;
  priority: PRIORITY_ENUM;
  label: LABEL_ENUM;
}
