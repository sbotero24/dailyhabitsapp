import React, { useState } from 'react';
import HabitList from './components/HabitList';
import AddHabitForm from './components/AddHabitForm';
import { Habit } from './types/habit';
import './styles/App.css';
import { Container, Typography, Paper, Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#28a745' },
    background: { default: '#f4f4f4' },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: { fontSize: '2.2rem', fontWeight: 700 },
  },
});

const App: React.FC = () => {
  const [habits, setHabits] = useState<Habit[]>([]);

  const addHabit = (name: string) => {
    const newHabit: Habit = {
      id: Date.now(),
      name,
      completed: false,
    };
    setHabits([...habits, newHabit]);
  };

  const toggleHabitCompletion = (id: number) => {
    setHabits(habits.map(habit =>
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    ));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Box mt={4} mb={2}>
          <Typography variant="h1" align="center" color="primary" gutterBottom>
            Daily Habits
          </Typography>
        </Box>
        <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, borderRadius: 4, mb: 4 }}>
          <AddHabitForm onAddHabit={addHabit} />
          <HabitList habits={habits} toggleHabitCompletion={toggleHabitCompletion} />
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default App;