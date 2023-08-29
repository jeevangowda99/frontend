import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button color='error' variant="text">Text</Button>
      <Button color='success' variant="contained">Contained</Button>
      <Button  color='warning'  variant="outlined">Outlined</Button>

      <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
      <Button variant='outlined' endIcon={<ArrowCircleUpIcon />}>simple</Button>

    </Stack>
  );
}
