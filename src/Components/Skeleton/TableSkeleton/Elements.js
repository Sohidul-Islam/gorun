import { Skeleton, Stack } from '@mui/material';

export function AvatarSkeleton() {
  return (
    <Stack alignItems="center" direction="row" gap={3} flex={1}>
      <Skeleton height={36} width={36} />
      <Skeleton height={18} width={100} />
    </Stack>
  );
}

export function Text() {
  return <Skeleton height={18} width={100} />;
}

export function Status() {
  return <Skeleton height={40} width={100} />;
}
