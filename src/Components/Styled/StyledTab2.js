import { Box, Stack, styled } from '@mui/material';

const StyledTab = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  width: '135px',
  height: '40px',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '20px',
  background: '#F5F5F5',
  border: '1px solid transparent',
  cursor: 'pointer',
  borderRadius: '6px',
  transition: '150ms ease',

  '&:hover': {
    borderColor: theme.palette.primary.main,
  },

  '&.active': {
    background: 'rgba(94, 151, 169, 0.1)',
    color: theme.palette.primary.main,
  },
}));

const sizeProps = {
  small: {
    width: 'auto',
    fontWeight: '500',
    fontSize: '12px',
    height: '27px',
    padding: '0 12px',
  },
};

function TabItem({ tab, onSelect, isActive, size }) {
  return (
    <StyledTab
      sx={size ? sizeProps[size] : undefined}
      className={isActive ? 'active' : ''}
      onClick={(event) => {
        event.stopPropagation();
        onSelect(tab?.value);
      }}
    >
      {tab?.label}
    </StyledTab>
  );
}

export default function StyledTabs2({ options, onChange, value, size }) {
  return (
    <Stack direction="row" alignItems="center" gap={size === 'small' ? 2 : 4}>
      {options?.map((tab) => (
        <TabItem key={tab?.value} tab={tab} isActive={value === tab.value} onSelect={onChange} size={size} />
      ))}
    </Stack>
  );
}
