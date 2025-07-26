import React from 'react';
import HabitItem from './HabitItem';
import { Habit } from '../types/habit';
import { List, Typography, Box } from '@mui/material';

interface HabitListProps {
  habits: Habit[];
  toggleHabitCompletion: (id: number) => void;
}

const HabitList: React.FC<HabitListProps> = ({ habits, toggleHabitCompletion }) => {
  if (habits.length === 0) {
    return (
      <Box sx={{ mt: 2, mb: 2 }}>
        <Typography align="center" color="text.secondary">
          ¡Agrega tu primer hábito para comenzar!
        </Typography>
      </Box>
    );
  }
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: 2, p: 0 }}>
      {habits.map(habit => (
        <HabitItem
          key={habit.id}
          id={habit.id}
          name={habit.name}
          completed={habit.completed}
          onToggle={toggleHabitCompletion}
        />
      ))}
    </List>
  );
};

export default HabitList;