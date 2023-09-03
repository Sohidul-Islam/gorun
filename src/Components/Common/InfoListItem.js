import { Stack, Typography, styled } from '@mui/material';

export default function InfoListItem({
  icon: Icon,
  title,
  isFirst,
  containerSx,
  titleSx,
  dotColor,
  link,
  linkOpenBlank,
}) {
  return (
    <StyledInfoItem
      className={`${isFirst ? 'first-info' : ''}`}
      sx={{
        '&::before': {
          backgroundColor: dotColor || 'text.primary',
        },
        ...containerSx,
      }}
    >
      {Icon && <Icon />}
      <Typography variant="h4" fontWeight={500} sx={titleSx}>
        {link ? (
          <a href={link} target={linkOpenBlank ? '_blank' : '_self'} rel="noreferrer">
            {title}
          </a>
        ) : (
          title
        )}
      </Typography>
    </StyledInfoItem>
  );
}

const StyledInfoItem = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '6px',
  position: 'relative',
  padding: '0 20px',

  '&::before': {
    content: "''",
    position: 'absolute',
    width: '5px',
    height: '5px',
    borderRadius: '50%',
    backgroundColor: 'text.primary',
    display: 'block',
    left: '0px',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },

  '&.first-info': {
    paddingLeft: 0,

    '&::before': {
      display: 'none',
    },
  },

  '& a': {
    color: 'inherit',
  },
}));
