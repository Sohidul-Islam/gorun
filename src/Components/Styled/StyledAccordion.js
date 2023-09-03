import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Stack, useTheme } from '@mui/material';

const disabledSx = {
  pointerEvents: 'none',
  opacity: '.6',
};

export default function StyledAccordion({ isOpen, onChange, children, disabled, Title, sx, ...props }) {
  const theme = useTheme();
  return (
    <Accordion
      sx={{
        borderBottom: '1px solid #EEEEEE',

        '&:before': {
          display: 'none',
        },
        ...sx,
        ...(disabled && disabledSx),
      }}
      expanded={isOpen}
      onChange={(e, closed) => {
        if (onChange) onChange(closed);
      }}
      {...props}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        sx={{
          padding: '0',

          '& .MuiSvgIcon-root': {
            color: theme.palette.text.primary,
          },

          '& .MuiAccordionSummary-content': {
            marginTop: '19px',
            marginBottom: '26px',
          },
        }}
      >
        <Stack direction="row" alignItems="center" gap={2.5}>
          {Title}
        </Stack>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          paddingBottom: '30px',
        }}
      >
        {children}
      </AccordionDetails>
    </Accordion>
  );
}
