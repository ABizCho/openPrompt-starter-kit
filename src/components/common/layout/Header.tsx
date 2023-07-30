import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  Container,
  Button,
  Tooltip,
  MenuItem,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

import RouterMeta from '@/lib/RouterMeta';
import palette from '@/styles/mui/palette';

const settings = {
  mypage: '마이페이지',
  something: '뭔가뭔가',
  logout: '로그아웃',
};

const ResponsiveAppBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        top: '0',
        paddingY: '2px',
        paddingTop: '5px',
        backgroundColor: 'rgba(80, 80, 80, 0.4)',
        backdropFilter: 'blur(5px)',
        boxShadow: 'none',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, marginLeft: '30px' }}>
            <NavLink to={'/'}>
              <img src={'/imgs/logo/coffeee-logo-white.png'} alt="home" />
            </NavLink>
          </Box>
          <Box
            sx={{ display: { xs: 'none', md: 'flex' }, marginRight: '100px' }}
          >
            {Object.keys(RouterMeta).map((router) => {
              if (!RouterMeta[router].isShow) {
                return;
              }
              return (
                <Button
                  disableRipple
                  key={router}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <NavLink
                    to={RouterMeta[router].path}
                    style={({ isActive }) => ({
                      color: isActive ? 'white' : 'rgba(255,255,255,0.5)',
                    })}
                  >
                    <Typography>{RouterMeta[router].name}</Typography>
                  </NavLink>
                </Button>
              );
            })}
            <Box sx={{ flexGrow: 0, marginLeft: '10px' }}>
              <Tooltip title="Open settings">
                <Button
                  disableRipple
                  onClick={handleOpenUserMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <Typography>{`USER 님`}</Typography>
                </Button>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {Object.entries(settings).map(([key, value]) => (
                  <MenuItem key={key} onClick={handleCloseUserMenu}>
                    <NavLink
                      to={`/${key}`}
                      style={{ color: palette.grey[400], fontSize: '14px' }}
                    >
                      <Typography textAlign="center">{value}</Typography>
                    </NavLink>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
