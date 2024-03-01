import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ background: 'black' }}>
                    <img src={logo} alt="logo" style={{ width: '50px', height: '50px' }} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component={Link}
                            to="/"
                            sx={{
                                m: 2,
                                color: 'inherit',
                                textDecoration: 'none',

                            }}
                        >
                            Music Player
                        </Typography>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
