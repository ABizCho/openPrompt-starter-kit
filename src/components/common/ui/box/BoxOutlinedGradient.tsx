import { Box, BoxProps } from '@mui/material';
import { SxProps, Theme } from '@mui/system';
import palette from '@/styles/mui/palette';
import theme from '@/styles/mui/theme';
import { IBoxOmitted } from './types';

const BoxOutlinedGradient: React.FC<IBoxOmitted> = ({
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
        border: 'solid 1px transparent',
        borderImageSource: `linear-gradient(to right, #fff, ${palette.primary.main})`,
        borderImageSlice: 1,
        //유저가 mui식으로 정의한 스타일 커스텀 허용
        padding: '20px',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default BoxOutlinedGradient;
