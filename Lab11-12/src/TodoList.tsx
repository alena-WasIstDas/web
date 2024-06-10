import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleToggleTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index] = newTasks[index] + ' (completed)';
    setTasks(newTasks);
  };

  return (
    <div>
      <div className="header">
        <center><h1>Список дел</h1></center>
        <form onSubmit={(e) => { e.preventDefault(); handleAddTask(); }}>
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Введите свои дела" />
          <button type="submit">Создать</button>
          <button type="button" onClick={() => setTasks([])}>Очистить все</button>
        </form>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            completed={false}
            onDelete={() => handleDeleteTask(index)}
            onToggle={() => handleToggleTask(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
