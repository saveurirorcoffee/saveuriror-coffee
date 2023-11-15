import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Children } from 'react';

const AdminTemplate = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('auth') != 1) {
            navigate('/admin/login');
        }

        const intervalId = setInterval(() => {
            localStorage.removeItem('auth');
            window.location.reload();
        }, 3600000);

        return () => clearInterval(intervalId);
    }, [])

    return (
        <div>
            <AppBar position="absolute" style={{ zIndex: 1 }}>
                <Toolbar>
                    <Typography variant="h5">Dashboard Admin</Typography>
                </Toolbar>
            </AppBar>
            <div className="row w-100">
                <div className="col-2">
                    <Drawer variant="permanent" className='position-fixed'>
                        <List className='bg-dark text-white h-100 pt-5'>
                            <ListItem className='mt-4' button component={Link} to="/admin/dashboard">
                                <ListItemText primary="Upload Image" />
                            </ListItem>
                            <ListItem button component={Link} to="/admin/change-password">
                                <ListItemText primary="Change Password" />
                            </ListItem>
                            <ListItem button component={Link} to="/admin/logout">
                                <ListItemText primary="Keluar" />
                            </ListItem>
                        </List>
                    </Drawer>
                </div>
                <div className="col-10 pt-5">
                    {Children.map(children, child =>
                        <div>
                            {child}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}


export default AdminTemplate;