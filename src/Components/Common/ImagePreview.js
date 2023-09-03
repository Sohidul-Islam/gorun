import Close from '@mui/icons-material/Close';
import { Box, CircularProgress, IconButton, Stack } from '@mui/material';

// third party
import { useState } from 'react';

const uploadProgressSx = {
  position: 'absolute',
  top: '0px',
  left: '0px',
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  backdropFilter: 'blur(20px)',
  overflow: 'hidden',
  transition: 'all 200ms ease',
};

const hiddenSx = {
  visibility: 'hidden',
  opactiy: '0',
  pointerEvents: 'none',
};

const deleteButtonSx = {
  position: 'absolute',
  left: 'auto',
  right: '0',
  top: '0',
  transform: 'translate(50%, -50%)',
  border: '1px solid #e6ebf1',
  background: '#fff',
  borderRadius: '50%',
  width: '24px',
  height: '24px',

  '&:hover': {
    background: '#fff',
  },
};

const imageSx = {
  height: '60px',
  width: '60px',
  objectFit: 'cover',
  borderRadius: '50%',
};

export default function ImagePreview({ progress, files, readOnly }) {
  const [render, setRender] = useState(false);

  const deletePhoto = (fileIndex, files) => {
    files.splice(fileIndex, 1);
    setRender((v) => !v);
  };

  return (
    <Stack direction="row" spacing={2}>
      {files.map((file, index) => (
        <Stack
          sx={{ position: 'relative' }}
          key={file?.preview}
          border={1}
          borderColor="#e6ebf1"
          borderRadius={2}
          justifyContent="center"
          alignItems="center"
          padding={1}
        >
          <IconButton
            color="primary"
            sx={{ ...deleteButtonSx, ...(readOnly && { pointerEvents: 'none' }) }}
            disabled={(progress && progress < 100) || undefined}
            onClick={() => {
              if (readOnly) {
                return;
              }
              deletePhoto(index, files);
              setRender(!render);
            }}
          >
            <Close style={{ fontSize: '14px', color: '#5E97A9' }} />
          </IconButton>

          <img style={imageSx} src={file?.preview} alt="" />
          <Box sx={progress && progress < 100 ? uploadProgressSx : { ...uploadProgressSx, ...hiddenSx }}>
            <CircularProgress variant="determinate" value={progress} />
          </Box>
        </Stack>
      ))}
    </Stack>
  );
}
