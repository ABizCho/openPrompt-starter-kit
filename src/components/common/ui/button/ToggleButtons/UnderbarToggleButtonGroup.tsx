import { Box, ToggleButtonGroup, useTheme } from '@mui/material'; // useTheme을 임포트합니다.
import { useEffect, useRef, useState } from 'react';
import { PlainToggleButton } from './PlainToggleButton';

export type ContentType = string;

interface UnderbarToggleButtonGroupProps {
  buttons: {
    value: ContentType;
    label: string;
  }[];
  refs: Record<ContentType, React.RefObject<HTMLButtonElement>>;
  selectedValue: ContentType;
  onChange: (value: ContentType) => void;
}

const UnderbarToggleButtonGroup: React.FC<UnderbarToggleButtonGroupProps> = ({
  buttons,
  refs,
  selectedValue,
  onChange,
}) => {
  const [underlineStyle, setUnderlineStyle] = useState({});
  const theme = useTheme();

  useEffect(() => {
    const activeRef = refs[selectedValue];
    if (activeRef && activeRef.current) {
      const rect = activeRef.current.getBoundingClientRect();
      const parentRect = (
        activeRef.current.parentElement as HTMLElement
      ).getBoundingClientRect();
      setUnderlineStyle({
        position: 'absolute',
        left: rect.left - parentRect.left + 4,
        width: rect.width - 8,
        bottom: '5px',
        height: '2px',
        backgroundColor: theme.palette.primary.main,
        transition: '0.3s',
      });
    }
  }, [selectedValue, theme]);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newContent: ContentType,
  ) => {
    if (newContent !== selectedValue) {
      onChange(newContent);
    }
  };

  return (
    <Box position="relative">
      <ToggleButtonGroup
        color="primary"
        value={selectedValue}
        exclusive
        onChange={handleChange}
        aria-label="Content Type"
        sx={{ gap: '70px', border: 'none' }}
      >
        {buttons.map((button) => (
          <PlainToggleButton
            key={button.value}
            ref={refs[button.value as ContentType]}
            disableRipple
            value={button.value}
          >
            {button.label}
          </PlainToggleButton>
        ))}
      </ToggleButtonGroup>
      <Box sx={underlineStyle}></Box>
    </Box>
  );
};

export default UnderbarToggleButtonGroup;
