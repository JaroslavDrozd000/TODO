import { createContext, ReactNode, useEffect, useState } from 'react';
import { ITodoList } from '../utils/interfaces/interface';
import { useGetTodos } from '../hooks';
import { STATUS_ENUM } from '../utils/enums/enums';

export interface IAppContext {
  todos: ITodoList[];
  setTodos: (todos: ITodoList[]) => void;
  todoTitleSearch: string;
  setTodoTitleSearch: (todoTitleSearch: string) => void;
  reload: boolean;
  setReload: (reload: boolean) => void;
}

export const AppContext = createContext<IAppContext | null>(null);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [todoTitleSearch, setTodoTitleSearch] = useState<string>('');
  const [reload, setReload] = useState<boolean>(false);
  const [todos, setTodos] = useState<ITodoList[]>([
    {
      heading: 'To do',
      buttonLabel: 'Start',
      status: STATUS_ENUM.toDo,
      todos: [],
    },
    {
      heading: 'In progress',
      buttonLabel: 'Dokončiť',
      status: STATUS_ENUM.inProgress,
      todos: [],
    },
    {
      heading: 'Done',
      buttonLabel: 'Odznova',
      status: STATUS_ENUM.done,
      todos: [],
    },
  ]);

  const getTodos = useGetTodos();

  useEffect(() => {
    (async () => {
      try {
        // Get todos
        const todos = await getTodos();

        // Separate todos by status
        const todoItems = todos.filter(
          (todo) => todo.status === STATUS_ENUM.toDo
        );
        const inProgressItems = todos.filter(
          (todo) => todo.status === STATUS_ENUM.inProgress
        );
        const doneItems = todos.filter(
          (todo) => todo.status === STATUS_ENUM.done
        );

        // Update the todos state
        setTodos([
          {
            heading: 'To do',
            buttonLabel: 'Start',
            status: STATUS_ENUM.toDo,
            todos: todoItems,
          },
          {
            heading: 'In progress',
            buttonLabel: 'Dokončiť',
            status: STATUS_ENUM.inProgress,
            todos: inProgressItems,
          },
          {
            heading: 'Done',
            buttonLabel: 'Odznova',
            status: STATUS_ENUM.done,
            todos: doneItems,
          },
        ]);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [reload]);

  return (
    <AppContext.Provider
      value={{
        todos,
        setTodos,
        todoTitleSearch,
        setTodoTitleSearch,
        reload,
        setReload,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
