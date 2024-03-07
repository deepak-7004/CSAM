import { Box, Button, Container, FormLabel, TextareaAutosize, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

interface User {
  name: string;
  email: string;
  description: string;
}

const FormComponent: React.FC = () => {
  const [user, setUser] = useState<User>({ name: '', email: '', description: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission logic, e.g., send data to server or update state
    console.log('User Submitted:', user);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Add User
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '1em' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3' }}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              name="name"
              value={user.name}
              size="medium"
              onChange={handleChange}
            />
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              type="email"
              value={user.email}
              size="medium"
              onChange={handleChange}
            />
            <FormLabel htmlFor="description">Description</FormLabel>
            <TextareaAutosize
              id="description"
              name="description"
              minRows={3}
              placeholder="Enter a brief description"
              style={{ width: '100%', padding: '10px' }}
              value={user.description}
              onChange={handleChange}
            />
          </Box>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Add User
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default FormComponent;
