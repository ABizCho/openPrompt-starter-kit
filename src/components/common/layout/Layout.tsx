import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          width: '100%',
          minHeight: '100%',
          marginTop: '-80px',
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
