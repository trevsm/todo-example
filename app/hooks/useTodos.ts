"use client";

import { useState, useCallback } from "react";
import type { Todo } from "../types/todo";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = useCallback((text: string) => {
    if (text.trim() !== "") {
      const newTodo: Todo = {
        id: Date.now(),
        text: text.trim(),
        completed: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      return true;
    }
    return false;
  }, []);

  const toggleTodo = useCallback((id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  const completedCount = todos.filter((t) => t.completed).length;
  const remainingCount = todos.length - completedCount;

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    completedCount,
    remainingCount,
    totalCount: todos.length,
  };
}
