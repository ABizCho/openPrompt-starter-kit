import React from 'react';
import { keyframes, styled } from '@mui/system';
import BackgroundBasic from './BackgroundBasic';
import { IBackgroundProps } from './types';

const rotate = keyframes`
  0% {
    transform: translateY(-50%) rotate(0deg);
  }
  100% {
    transform: translateY(-50%) rotate(360deg);
  }
`;

const moveLeft = keyframes`
  0% {
    left: 70%;
    top: 60%;
  }
  100% {
    left: -100%;
    top: 50%;
  }
`;

const AnimatedSymbol = styled('img')({
  position: 'fixed',
  top: '70%',
  left: '70%',
  width: '1000px',
  height: '100%',
  filter: 'blur(15px)',
  transform: 'translateY(-50%)',
  animation: `${rotate} 240s linear infinite, ${moveLeft} 180s linear infinite`,
  zIndex: -1,
});

const BackgroundAnimation: React.FC<IBackgroundProps> = ({
  children,
  color = 'default',
  sx,
}) => {
  return (
    <BackgroundBasic color={color} sx={sx}>
      <AnimatedSymbol src="/imgs/symbolGradient.svg" />
      {children}
    </BackgroundBasic>
  );
};

export default BackgroundAnimation;
