import { BoxProps, SxProps } from '@mui/material';
import { Theme } from '@mui/system';

export interface IBoxOmitted extends Omit<BoxProps, 'sx'> {
  sx?: SxProps<Theme>;
}
