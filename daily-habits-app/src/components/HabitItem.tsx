import React from 'react';
import { ListItem, ListItemIcon, Checkbox, ListItemText, IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

interface HabitItemProps {
  id: number;
  name: string;
  completed: boolean;
  onToggle: (id: number) => void;
}

const HabitItem: React.FC<HabitItemProps> = ({ id, name, completed, onToggle }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={() => onToggle(id)} aria-label="toggle habit">
          {completed ? <CheckCircleIcon color="success" /> : <RadioButtonUncheckedIcon color="disabled" />}
        </IconButton>
      }
      disablePadding
      sx={{
        borderBottom: '1px solid #e0e0e0',
        bgcolor: completed ? '#f0f7fa' : 'background.paper',
        transition: 'background 0.2s',
      }}
    >
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={completed}
          tabIndex={-1}
          disableRipple
          color="success"
          onChange={() => onToggle(id)}
        />
      </ListItemIcon>
      <ListItemText
        primary={name}
        primaryTypographyProps={{
          sx: {
            textDecoration: completed ? 'line-through' : 'none',
            color: completed ? 'text.secondary' : 'text.primary',
            fontWeight: 500,
            fontSize: { xs: '1rem', sm: '1.1rem' },
          },
        }}
      />
    </ListItem>
  );
};

export default HabitItem;