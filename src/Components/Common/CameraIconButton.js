import { IconButton } from '@mui/material';
import { ReactComponent as CameraIcon } from '../../assets/icons/camera.svg';

export default function CameraIconButton({ onFileSelect, sx, ...props }) {
  return (
    <IconButton
      sx={{
        backgroundColor: '#E4E6EB',
        width: '38px',
        height: '38px',
        padding: '9px 9px 11px 9px',
        '&:hover': {
          backgroundColor: 'background.secondaryHover',
        },

        '&.Mui-disabled': {
          backgroundColor: '#E4E6EB',
        },

        ...(sx || {}),
      }}
      color="text.primary"
      aria-label="upload picture"
      component="label"
      {...props}
    >
      <input hidden accept=".jpg,.jpeg,.png" type="file" onChange={onFileSelect} />
      <CameraIcon />
    </IconButton>
  );
}
