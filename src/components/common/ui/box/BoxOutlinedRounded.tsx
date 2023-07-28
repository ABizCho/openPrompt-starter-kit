import { Box } from '@mui/material';
import theme from '@/styles/mui/theme';
import palette from '@/styles/mui/palette';
import { IBoxOmitted } from './types';

const BoxOutlinedRounded: React.FC<IBoxOmitted> = ({
  children,
  sx,
  ...otherProps
}) => {
  return (
    <Box
      {...otherProps}
      sx={{
        width: '100%',
        height: '100%',
        fontfamily: theme.typography.fontFamily,
        color: palette.white,
        backgroundColor: 'rgba(60, 60, 60, 0.4)',
        border: 'solid 1px #fff',

        borderRadius: '1rem',
        padding: '20px',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default BoxOutlinedRounded;
