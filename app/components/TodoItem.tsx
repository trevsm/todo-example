"use client";

import { Trash2 } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import type { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md border border-border transition-all duration-150",
        "hover:bg-accent/50 hover:-translate-y-px hover:shadow-md",
        todo.completed ? "bg-accent/30" : "bg-card"
      )}
    >
      <Checkbox
        checked={todo.completed}
        onCheckedChange={() => onToggle(todo.id)}
        className="mr-1"
      />
      <span
        className={cn(
          "flex-1",
          todo.completed
            ? "line-through text-muted-foreground"
            : "text-foreground font-medium"
        )}
      >
        {todo.text}
      </span>
      <Button
        aria-label="delete"
        onClick={() => onDelete(todo.id)}
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-destructive hover:bg-destructive/10 hover:text-destructive"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}
