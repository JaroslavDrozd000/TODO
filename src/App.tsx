import './app.css';
import { Header, TodoList } from './components';
import { useAppContext } from './hooks';

function App() {
  const { todos } = useAppContext();

  return (
    <div className='app-container'>
      <Header />
      <div className='app-todo-container'>
        {/* TODOS */}
        {todos.map((todo) => (
          <TodoList key={todo.heading} {...todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
