import { West } from '@mui/icons-material';
import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import BreadCrumbs from './BreadCrumb2';
import PageButton from './PageButton';

export default function PageTop({
  breadcrumbItems,
  backTo,
  backButtonLabel,
  onAdd,
  onAddDisabled,
  addButtonLabel,
  title,
  titleSx,
  subtitle,
  isBreadCrumbsTitleShow,
  breadCrumbsTitle,
  tag,
  ...rest
}) {
  const theme = useTheme();

  return (
    <Box pt={9} pb={7.5} {...rest}>
      {(backButtonLabel || addButtonLabel) && (
        <Stack direction="row" alignItems="center" justifyContent="space-between" pb={3.5}>
          {backButtonLabel && <PageButton label={backButtonLabel} to={backTo} startIcon={<West />} />}
          {addButtonLabel && (
            <Button
              color="primary"
              variant="contained"
              sx={{
                borderRadius: '8px',
                padding: '11px 30px',
              }}
              disabled={onAddDisabled}
              onClick={onAdd}
            >
              {addButtonLabel}
            </Button>
          )}
        </Stack>
      )}
      {breadcrumbItems && (
        <BreadCrumbs
          isBreadCrumbsTitleShow={isBreadCrumbsTitleShow}
          breadCrumbsTitle={breadCrumbsTitle}
          items={breadcrumbItems}
          sx={{
            pb: subtitle ? 2 : 0,
          }}
        />
      )}
      {title && (
        <>
          <Stack direction="row" alignItems="center" gap={3}>
            <Typography variant="h4" color={theme.palette.text.primary} sx={titleSx}>
              {title}
            </Typography>
            {tag && tag}
          </Stack>
          {subtitle && <Typography variant="body3">{subtitle}</Typography>}
        </>
      )}
    </Box>
  );
}
