import { Add } from '@mui/icons-material';
import { Box, Button, ClickAwayListener, Stack, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import StyledChip from '../Styled/StyledChips';
import StyledInput from '../Styled/StyledInput';

export default function Taglist({
  items,
  onDelete,
  onAdd,
  addButtonLabel,
  itemSx,
  listContainerSx,
  buttonSx,
  inputSx,
  type = 'number',
  ...props
}) {
  const [showAdd, setShowAdd] = useState(false);
  const [newItem, setNewItem] = useState('');
  const inputRef = useRef();
  console.log('items', items);
  return (
    <Box {...props}>
      <Stack direction="row" gap={4} sx={listContainerSx} flexWrap="wrap">
        {items.map((item, index, array) => (
          <StyledChip
            key={item}
            label={item}
            sx={itemSx}
            onDelete={() => {
              onDelete(item, index, array);
            }}
          />
        ))}
        {showAdd && (
          <ClickAwayListener
            onClickAway={() => {
              if (showAdd) {
                setShowAdd(false);
                setNewItem('');
              }
            }}
          >
            <StyledInput
              ref={inputRef}
              type={type}
              value={newItem}
              sx={{
                width: '90px',
                '& input': {
                  fontSize: '13px',
                  height: 'auto',
                  textAlign: 'center',
                },
                ...(inputSx || {}),
              }}
              onChange={(e) => {
                setNewItem(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  if (onAdd(newItem)) {
                    setNewItem('');
                    setShowAdd(false);
                  }
                  setNewItem('');
                }
              }}
            />
          </ClickAwayListener>
        )}
        {items?.length < 1 && !showAdd && (
          <Box pt={2} pb={2}>
            <Typography variant="body3">No Categories Added</Typography>
          </Box>
        )}
      </Stack>
      <Button
        disableRipple
        color="primary"
        variant="text"
        startIcon={<Add />}
        sx={{
          fontSize: '14px',
          lineHeight: '17px',

          ...(buttonSx || {}),
        }}
        onClick={() => {
          setShowAdd(true);
          setTimeout(() => {
            inputRef?.current?.querySelector('input')?.focus();
          }, 10);
        }}
      >
        {addButtonLabel}
      </Button>
    </Box>
  );
}
