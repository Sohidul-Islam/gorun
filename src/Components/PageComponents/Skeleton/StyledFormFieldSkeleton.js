import { Skeleton, Stack } from '@mui/material';

export default function FormFieldSkeleton({ type }) {
  return (
    <Stack
      gap={2}
      sx={{
        paddingTop: '20px',
        paddingBottom: '20px',
      }}
    >
      <Skeleton variant="rounded" height={16} width={150} />
      {type === 'input' && <Skeleton width="100%" height={50} />}
      {type === 'textarea' && <Skeleton width="100%" height={100} />}
    </Stack>
  );
}
