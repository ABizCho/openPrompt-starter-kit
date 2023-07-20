import { NavLink } from 'react-router-dom';

import { Stack, Typography } from '@mui/material';
import RouterMeta from '@/lib/RouterMeta';

const Header = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ backgroundColor: '#cccccc', p: '20px 10px' }}
    >
      <Typography>LOGO</Typography>
      <Stack gap="10px" direction="row" alignItems="center">
        {Object.keys(RouterMeta).map((key) => {
          const { name, path, isShow } = RouterMeta[key];

          if (isShow)
            return (
              <NavLink key={path} to={path}>
                {name}
              </NavLink>
            );
        })}
      </Stack>
    </Stack>
  );
};

export default Header;
