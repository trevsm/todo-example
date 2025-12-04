"use client";

import { useState, KeyboardEvent } from "react";
import { Plus } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface TodoInputProps {
  onAdd: (text: string) => boolean;
}

export function TodoInput({ onAdd }: TodoInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (onAdd(inputValue)) {
      setInputValue("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="flex gap-3">
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="What needs to be done?"
        className="flex-1 h-10 rounded-lg"
      />
      <Button
        onClick={handleSubmit}
        className="h-10 px-4 rounded-lg font-medium"
      >
        <Plus className="mr-2 h-4 w-4" />
        Add
      </Button>
    </div>
  );
}
