import { Box, TextField, StandardTextFieldProps } from '@mui/material';

interface CustomTextFieldProps extends StandardTextFieldProps {
  Icon: React.ElementType;
  label: string;
  placeholder: string;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  Icon,
  label,
  placeholder,
  ...otherProps
}) => {
  return (
    <Box position="relative" display="flex" alignItems="center">
      <Icon
        sx={{
          color: 'white',
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      />
      <TextField
        label={label}
        placeholder={placeholder}
        {...otherProps}
        variant="standard"
        sx={{
          width: '100%', // 필요에 따라 조정 가능
          paddingLeft: '2rem', // 아이콘의 너비에 따라 조정 가능
        }}
      />
    </Box>
  );
};

export default CustomTextField;
