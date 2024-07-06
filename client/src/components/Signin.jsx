import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate(); 

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   const obj = {
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   };
  //   console.log(obj)
  //   // Check for valid sign-in credentials, and if they are correct, redirect to the dashboard
  //   const isValidCredentials = true; // Replace with your authentication logic
  //   localStorage.setItem("token",JSON.stringify(obj))
  //   if (isValidCredentials) {
  //     navigate('/'); // Redirect to the dashboard
  //     window.location.reload();
  //   }
  // };


  const [loginData, setLoginData] = React.useState({email : '', password : ''});

  const handleSubmit = async(ev) => {
    console.log('entered', loginData);
    ev.preventDefault();
    const response = await fetch('http://localhost:5000/fms/signin', {method : 'POST', headers : {'Content-Type' : 'application/json'}, body : JSON.stringify({ email : loginData.email, password : loginData.password})});
    const jsonData = await response.json();
    if (jsonData.sucess){
        localStorage.setItem("userID", `${jsonData.userData._id}`)
        navigate('/dashboard');
    }
    console.log('res is ',jsonData);
    // if (!jsonData.success){
    //     alert('please enter valid values');
    // }else{
    //     //navigate('/signin');
    // }

     console.log(loginData);
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex : 999999
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={loginData.email}
              onChange={(e) => setLoginData({...loginData, email : e.target.value})}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={loginData.password}
              onChange={(e) => setLoginData({...loginData, password : e.target.value})}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              {/* <Grid item xs>
                <Link href="/Forgot" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}