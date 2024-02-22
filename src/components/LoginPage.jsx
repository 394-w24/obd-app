import React, { useState } from 'react';
import { signInWithGoogle, signOut } from '../utilities/firebase';
import { Button, TextField, Checkbox, FormControlLabel, Link, Paper, Box, Typography, Divider } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    try {
      await signInWithGoogle();
      // Navigate to the NavPage after successful login
      navigate('/navpage'); // Replace '/navpage' with the actual path you want to navigate to
    } catch (error) {
      // Handle errors here, such as displaying a notification to the user
      console.error(error);
    }
  };
  

  const loginWithEmail = () => {
    // Here you should call your sign-in method for email/password authentication
    // For example: signInWithEmail(email, password);
  };

  const logout = () => {
    signOut();
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, maxWidth: 400, margin: 'auto', marginTop: 5 }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button 
          variant="contained" 
          startIcon={<GoogleIcon />} 
          onClick={loginWithGoogle}
          sx={{ marginBottom: 2 }}
        >
          Log In with Google
        </Button>
        <Typography variant="subtitle1">Or</Typography>
        <TextField 
          label="Email" 
          variant="outlined" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          fullWidth 
          margin="normal"
        />
        <TextField 
          label="Password" 
          type="password" 
          variant="outlined" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          fullWidth 
          margin="normal"
        />
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" marginY={2}>
          <FormControlLabel
            control={<Checkbox name="remember" color="primary" />}
            label="Remember for 30 days"
          />
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Box>
        <Button 
          variant="contained" 
          onClick={loginWithEmail} 
          fullWidth 
          sx={{ marginBottom: 2 }}
        >
          Log In
        </Button>
        <Divider sx={{ width: '100%', my: 2 }} />
        <Button 
          variant="text" 
          fullWidth 
          onClick={logout}
        >
          Don't have an account? Sign Up
        </Button>
      </Box>
    </Paper>
  );
}

export default LoginPage;
