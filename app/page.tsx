"use client";

import { Container, Typography, Box } from "@mui/material";
import { TodoInput } from "./components/TodoInput";
import { useTodos } from "./hooks/useTodos";
import { TodoItem } from "./components/TodoItem";

export default function Home() {
  const { todos, addTodo, toggleTodo, deleteTodo, remainingCount, totalCount } =
    useTodos();

  return (
    <Container maxWidth="sm" sx={{ mt: 2, mb: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          textAlign: "center",
          fontWeight: 500,
          color: "text.primary",
          mb: 2,
        }}
      >
        Todo App
      </Typography>

      {/* Todo Input */}
      <Box
        sx={{
          mb: 2,
          p: 2,
          borderRadius: "8px",
          backgroundColor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <TodoInput onAdd={addTodo} />
      </Box>

      {totalCount === 0 ? (
        <Box
          sx={{
            p: 3,
            textAlign: "center",
            borderRadius: "8px",
            backgroundColor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography variant="body2" color="text.secondary" fontWeight={400}>
            No todos yet. Add one above to get started!
          </Typography>
        </Box>
      ) : (
        <>
          {/* Todo List */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </Box>

          {/* Todo Stats */}
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Typography variant="body2" color="text.secondary" fontWeight={400}>
              {remainingCount} of {totalCount} tasks remaining
            </Typography>
          </Box>
        </>
      )}
    </Container>
  );
}
