import { createContext, ReactNode, useState } from 'react';
import { ITodoList } from '../utils/interfaces/interface';
import { done, inProgress, toDo } from '../constants/todo';

export interface IAppContext {
  todos: ITodoList[];
  setTodos: (todos: ITodoList[]) => void;
}

export const AppContext = createContext<IAppContext | null>(null);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<ITodoList[]>([
    {
      heading: 'To do',
      buttonLabel: 'Start',
      todos: toDo,
    },
    {
      heading: 'In progress',
      buttonLabel: 'Dokončiť',
      todos: inProgress,
    },
    {
      heading: 'Done',
      buttonLabel: 'Odznova',
      todos: done,
    },
  ]);

  return (
    <AppContext.Provider value={{ todos, setTodos }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
