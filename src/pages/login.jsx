import { useState } from "react"
import axios from "axios";
import { Paper, TextField, Button, Grid } from '@mui/material';
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [users, setUsername] = useState();
    const [passwd, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const getUsers = await axios.get('https://654caa8a77200d6ba8592f20.mockapi.io/admins');
        const { username, password } = getUsers.data[0]
        if (users == username && passwd == password) {
            localStorage.setItem('auth', 1);
            swal('200 Successfully', 'successfully Login', 'success');
            navigate('/admin/dashboard')
        } else {
            swal('401 Unauthorized', 'please check your username or password', 'error');
        }
    }

    return (
        <Grid container>
            <Grid item md={6}>
                <img style={{ width: "100%", height: "100vh", objectFit: "cover" }} src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </Grid>
            <Grid item md={6} xs={12}>
                <Paper elevation={3} style={{ padding: '11.65rem 2.5rem' }}>
                    <h2 className='text-center mb-4'>Masuk</h2>
                    <form method='POST' onSubmit={handleSubmit}>
                        <Grid container>
                            <Grid item xs={12}>
                                <TextField
                                    label="Username"
                                    onChange={(e) => setUsername(e.target.value)}
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    type="text"
                                />
                            </Grid>
                            <Grid className="mt-3" item xs={12}>
                                <TextField
                                    label="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    type="password"
                                />
                            </Grid>
                        </Grid>
                        <div className='text-end mt-5'>
                            <Button type="submit" variant="contained" color="primary">
                                Masuk
                            </Button>
                        </div>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Login