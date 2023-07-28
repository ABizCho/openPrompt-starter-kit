import { styled } from '@mui/material/styles';
import MuiToggleButton from '@mui/material/ToggleButton';

export const PlainToggleButton = styled(MuiToggleButton)(({ theme }) => ({
  // 기본
  backgroundColor: 'transparent',
  color: theme.palette.grey[400],
  fontSize: '16px',
  border: 'none',

  // 선택 스타일 오버라이드
  '&.Mui-selected': {
    backgroundColor: 'transparent',
    color: theme.palette.common.white,
  },

  // 선택 중 호버 스타일 오버라이드
  '&.Mui-selected:hover': {
    backgroundColor: 'transparent',
  },

  '&:hover': {},
}));
