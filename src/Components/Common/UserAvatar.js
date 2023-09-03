import { Avatar, Stack, Typography } from '@mui/material';

export default function UserAvatar({
  imgUrl,
  imgAlt,
  imgStyle,
  imgFallbackCharacter,
  name,
  subTitle,
  subTitleProps,
  titleProps,
}) {
  return (
    <Stack direction="row" alignItems="center" gap={5}>
      <Avatar alt={imgAlt} src={imgUrl} variant={imgStyle} sx={{ width: 36, height: 36 }}>
        {imgFallbackCharacter || name?.charAt(0)}
      </Avatar>
      <Stack gap={1.5} flex={1}>
        <Typography variant="body4" component="p" {...titleProps}>
          {name}
        </Typography>
        {subTitle && (
          <Typography
            variant="body4"
            {...subTitleProps}
            sx={{
              fontSize: '13px',
              lineHeight: '15px',
              color: '#737373',
              ...subTitleProps?.sx,
            }}
          >
            {subTitle}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
}
