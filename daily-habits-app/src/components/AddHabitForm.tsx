import React, { useState } from 'react';
import { Box, TextField, Button, InputAdornment } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const AddHabitForm: React.FC<{ onAddHabit: (habitName: string) => void }> = ({ onAddHabit }) => {
  const [habitName, setHabitName] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (habitName.trim()) {
      onAddHabit(habitName);
      setHabitName('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, mb: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
      <TextField
        fullWidth
        variant="outlined"
        label="Nuevo hábito"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="Ej: Beber agua, Meditar..."
        required
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <AddCircleIcon color="primary" />
            </InputAdornment>
          ),
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        size="large"
        sx={{ minWidth: 140, fontWeight: 600 }}
      >
        Agregar
      </Button>
    </Box>
  );
};

export default AddHabitForm;