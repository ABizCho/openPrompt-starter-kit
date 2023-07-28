import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import palette from '@/styles/mui/palette';

export type BackButtonVariant = 'outlined' | 'fill';

interface BackButtonProps {
  variant?: BackButtonVariant;
}

export const BackButton: React.FC<BackButtonProps> = ({ variant = 'fill' }) => {
  const navigate = useNavigate();

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const styles = {
    button: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: variant === 'outlined' ? '1px solid white' : '1px solid black',
      borderRadius: '100%',
      backgroundColor:
        variant === 'fill'
          ? hovered
            ? palette.grey[600]
            : 'black'
          : hovered
          ? palette.grey[300]
          : 'transparent',
      padding: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    icon: {
      width: '20px',
      height: '20px',
      color: 'white',
    },
  };

  return (
    <div
      style={styles.button}
      onClick={() => navigate(-1)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ArrowBackIcon style={styles.icon} />
    </div>
  );
};
