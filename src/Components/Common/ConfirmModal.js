import { Box, Button, Modal, Paper, Stack, Typography } from '@mui/material';

export default function ConfirmModal({ isOpen, blurClose, onConfirm, onCancel, message, sx, loading }) {
  return (
    <Modal
      open={isOpen}
      onClose={() => {
        if (blurClose) {
          onCancel();
        }
      }}
      sx={{
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper sx={sx}>
        <Box padding={5}>
          <Typography variant="h3" mb={10}>
            {message}
          </Typography>
          <Stack direction="row" spacing={2} mt={3}>
            <Button variant="outlined" onClick={onCancel}>
              Cancel
            </Button>
            <Button variant="contained" onClick={onConfirm} disabled={loading}>
              Confirm
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Modal>
  );
}
