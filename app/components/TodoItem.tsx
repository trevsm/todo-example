"use client";

import { IconButton, Checkbox, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import type { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <StyledTodoItem
      sx={{
        backgroundColor: todo.completed
          ? "action.selected"
          : "background.paper",
      }}
    >
      <Checkbox
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        color="primary"
        size="small"
        sx={{ mr: 0.75 }}
      />
      <Typography
        sx={{
          flex: 1,
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? "text.secondary" : "text.primary",
          fontWeight: todo.completed ? 400 : 500,
        }}
      >
        {todo.text}
      </Typography>
      <IconButton
        aria-label="delete"
        onClick={() => onDelete(todo.id)}
        color="error"
        size="small"
        sx={{
          ml: 1,
          "&:hover": {
            backgroundColor: "error.light",
            color: "white",
          },
        }}
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    </StyledTodoItem>
  );
}

const StyledTodoItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1, 1.5),
  marginBottom: theme.spacing(0.5),
  borderRadius: "6px",
  border: "1px solid",
  borderColor: theme.palette.divider,
  transition: "all 0.15s ease",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    transform: "translateY(-1px)",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
}));
