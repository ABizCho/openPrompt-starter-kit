import React, { CSSProperties, ReactNode } from 'react';
import BackgroundBasic from './BackgroundBasic';
import { IBackgroundProps, ISubBackgroundProps } from './types';

const styles = {
  gradientBackground: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    backgroundImage: 'url(/imgs/gradient.jpg)',
  },
};

const BackgroundGradient: React.FC<ISubBackgroundProps> = ({
  children,
  sx,
}) => {
  return (
    <BackgroundBasic sx={{ ...styles.gradientBackground, ...sx }}>
      {children}
    </BackgroundBasic>
  );
};

export default BackgroundGradient;
