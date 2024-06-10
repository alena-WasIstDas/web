import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoList from '../TodoList';

test('TodoList renders correctly', () => {
  render(<TodoList />);
  
  const headerText = screen.getByText('Список дел');
  const inputElement = screen.getByPlaceholderText('Введите свои дела');
  const createButton = screen.getByText('Создать');
  const clearButton = screen.getByText('Очистить все');

  expect(headerText).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
  expect(createButton).toBeInTheDocument();
  expect(clearButton).toBeInTheDocument();
});

test('Add task to the TodoList', () => {
  render(<TodoList />);
  
  const inputElement = screen.getByPlaceholderText('Введите свои дела');
  const createButton = screen.getByText('Создать');

  fireEvent.change(inputElement, { target: { value: 'Test Task' } });
  fireEvent.click(createButton);

  const taskText = screen.getByText('Test Task');
  expect(taskText).toBeInTheDocument();
});

test('Clear all tasks from the TodoList', () => {
  render(<TodoList />);
  
  const inputElement = screen.getByPlaceholderText('Введите свои дела');
  const createButton = screen.getByText('Создать');
  const clearButton = screen.getByText('Очистить все');

  fireEvent.change(inputElement, { target: { value: 'Test Task' } });
  fireEvent.click(createButton);

  const taskText = screen.getByText('Test Task');
  expect(taskText).toBeInTheDocument();

  fireEvent.click(clearButton);

  const taskElements = screen.queryAllByRole('listitem');
  expect(taskElements).toHaveLength(0);
});
