import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import palette from '@/styles/mui/palette';

export type BackButtonVariant = 'outlined' | 'fill';

interface BackButtonProps {
  variant?: BackButtonVariant;
}

export const BackButton: React.FC<BackButtonProps> = ({ variant = 'fill' }) => {
  const navigate = useNavigate();

  return (
    <IconButton
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: variant === 'outlined' ? '1px solid white' : '1px solid black',
        borderRadius: '100%',
        backgroundColor:
          variant === 'fill' ? palette.black.main : 'transparent',
        padding: '8px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        '&:hover': {
          backgroundColor:
            variant === 'fill' ? palette.grey[600] : palette.grey[300],
        },
        '& .MuiSvgIcon-root': {
          width: '20px',
          height: '20px',
          color: 'white',
        },
      }}
      onClick={() => navigate(-1)}
    >
      <ArrowBackIcon />
    </IconButton>
  );
};
