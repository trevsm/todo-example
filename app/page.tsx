"use client";

import { TodoInput } from "./components/TodoInput";
import { useTodos } from "./hooks/useTodos";
import { TodoItem } from "./components/TodoItem";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

export default function Home() {
  const { todos, addTodo, toggleTodo, deleteTodo, remainingCount, totalCount } =
    useTodos();

  return (
    <div className="container max-w-2xl py-12 mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Todo App</CardTitle>
          <CardDescription>
            Stay organized and get things done
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <TodoInput onAdd={addTodo} />

          {totalCount === 0 ? (
            <p className="text-center text-sm text-muted-foreground py-8">
              No todos yet. Add one above to get started!
            </p>
          ) : (
            <>
              <div className="space-y-2">
                {todos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                  />
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground">
                {remainingCount} of {totalCount} tasks remaining
              </p>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
