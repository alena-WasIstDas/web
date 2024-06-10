import React from 'react';

interface TodoItemProps {
  task: string;
  completed: boolean;
  onDelete: () => void;
  onToggle: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, completed, onDelete, onToggle }) => {
  return (
    <li className={completed ? 'checked' : ''} onClick={onToggle}>
      <input type="checkbox" checked={completed} readOnly />
      <span>{task}</span>
      <span className="close" onClick={onDelete}>&times;</span>
    </li>
  );
};

export default TodoItem;
