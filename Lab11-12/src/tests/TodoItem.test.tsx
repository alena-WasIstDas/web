import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoItem from './TodoItem';

test('TodoItem renders correctly', () => {
  const onDeleteMock = jest.fn();
  const onToggleMock = jest.fn();

  render(<TodoItem task="Test Task" completed={false} onDelete={onDeleteMock} onToggle={onToggleMock} />);

  const checkbox = screen.getByRole('checkbox');
  const taskText = screen.getByText('Test Task');
  const closeButton = screen.getByText('×');

  expect(checkbox).toBeInTheDocument();
  expect(taskText).toBeInTheDocument();
  expect(closeButton).toBeInTheDocument();
});

test('TodoItem calls onDelete when close button is clicked', () => {
  const onDeleteMock = jest.fn();
  const onToggleMock = jest.fn();

  render(<TodoItem task="Test Task" completed={false} onDelete={onDeleteMock} onToggle={onToggleMock} />);

  const closeButton = screen.getByText('×');
  fireEvent.click(closeButton);

  expect(onDeleteMock).toHaveBeenCalled();
});

test('TodoItem calls onToggle when checkbox is clicked', () => {
  const onDeleteMock = jest.fn();
  const onToggleMock = jest.fn();

  render(<TodoItem task="Test Task" completed={false} onDelete={onDeleteMock} onToggle={onToggleMock} />);

  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);

  expect(onToggleMock).toHaveBeenCalled();
});
