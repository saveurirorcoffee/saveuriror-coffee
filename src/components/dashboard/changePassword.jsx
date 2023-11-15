import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const [newUsername, setNewUsername] = useState();
  const [newPassword, setNewPassword] = useState();
  const navigate = useNavigate();

  const changeUsernamePassword = async (e) => {
    e.preventDefault();
    try {
      const changeUserPassword = await axios.put('https://654caa8a77200d6ba8592f20.mockapi.io/admins/1', {
        username: newUsername,
        password: newPassword
      })
      if(changeUserPassword){
        localStorage.removeItem('auth');
        swal('201 Successfully Updated', 'Username dan Password Berhasil Diupdate', 'success');
        navigate('/admin/login')
      }
    } catch (error) {
      swal('205 Cannot Update', error.message, 'error');      
    }
  }

    return (
        <Container maxWidth="xl" className='mt-5'>
        <Typography variant="h4" align="center" gutterBottom>
          Change Username And Password
        </Typography>
        <form onSubmit={changeUsernamePassword}>
           <TextField
            fullWidth
            label="New Username"
            type="text"
            variant="outlined"
            className='mb-4'
            onChange={(e) => {setNewUsername(e.target.value)}}
          />
          <TextField
            fullWidth
            label="New Password"
            type="password"
            variant="outlined"
            className='mb-4'
            onChange={(e) => {setNewPassword(e.target.value)}}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
          >
            Change Password and Username
          </Button>
        </form>
      </Container>
    )
}

export default ChangePassword