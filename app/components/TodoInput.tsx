"use client";

import { useState, KeyboardEvent } from "react";
import { Box, TextField, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

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
    <Box sx={{ display: "flex", gap: 1.5 }}>
      <TextField
        fullWidth
        label="Add a new todo"
        variant="outlined"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="What needs to be done?"
        size="small"
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
          },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        startIcon={<AddIcon />}
        size="small"
        sx={{
          minWidth: 100,
          px: 2,
          fontWeight: 500,
        }}
      >
        Add
      </Button>
    </Box>
  );
}
