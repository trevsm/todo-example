"use client";

import { TodoInput } from "./components/TodoInput";
import { useTodos } from "./hooks/useTodos";
import { TodoItem } from "./components/TodoItem";

export default function Home() {
  const { todos, addTodo, toggleTodo, deleteTodo, remainingCount, totalCount } =
    useTodos();

  return (
    <div className="max-w-xl mx-auto mt-8 mb-16 px-4">
      <h1 className="text-3xl font-medium text-center text-foreground mb-6">
        Todo App
      </h1>

      {/* Todo Input */}
      <div className="mb-4 p-4 rounded-lg bg-card border border-border shadow-sm">
        <TodoInput onAdd={addTodo} />
      </div>

      {totalCount === 0 ? (
        <div className="p-6 text-center rounded-lg bg-card border border-border shadow-sm">
          <p className="text-sm text-muted-foreground">
            No todos yet. Add one above to get started!
          </p>
        </div>
      ) : (
        <>
          {/* Todo List */}
          <div className="flex flex-col gap-1">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </div>

          {/* Todo Stats */}
          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">
              {remainingCount} of {totalCount} tasks remaining
            </p>
          </div>
        </>
      )}
    </div>
  );
}
