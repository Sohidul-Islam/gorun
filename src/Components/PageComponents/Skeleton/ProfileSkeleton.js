import { Box, Skeleton, Stack } from '@mui/material';
import React from 'react';

export default function ProfileSkeleton({ children }) {
  return (
    <Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            lg: '1fr 300px',
            md: '1fr',
          },
          paddingTop: '20px',
        }}
      >
        <Box paddingRight="50px">
          <Stack flexDirection="row" gap="21px">
            <Skeleton variant="circular" width={100} height={100} />
            <Stack justifyContent="center" sx={{ marginTop: '10px' }} gap={2.5}>
              <Skeleton variant="rectangle" width={200} height={20} />
              <Skeleton variant="rectangle" width={200} height={20} />
              <Skeleton variant="rectangle" width={200} height={20} />
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" sx={{ marginTop: '45px' }} gap={5}>
            <Skeleton variant="rectangle" width={150} height={40} />
            <Skeleton variant="rectangle" width={150} height={40} />
            <Skeleton variant="rectangle" width={150} height={40} />
          </Stack>
          {children}
        </Box>
        <Stack
          direction="row"
          justifyContent="flex-start"
          paddingLeft="50px"
          sx={{ display: { md: 'none', lg: 'flex' } }}
        >
          <Stack flexDirection="column" gap="30px">
            <Skeleton variant="rectangular" width={200} height={80} sx={{ marginBottom: '30px' }} />
            <Skeleton variant="rectangular" width={200} height={80} sx={{ marginBottom: '30px' }} />
            <Skeleton variant="rectangular" width={200} height={80} sx={{ marginBottom: '30px' }} />
            <Skeleton variant="rectangular" width={200} height={80} sx={{ marginBottom: '30px' }} />
            <Skeleton variant="rectangular" width={200} height={80} sx={{ marginBottom: '30px' }} />
            <Skeleton variant="rectangular" width={200} height={80} sx={{ marginBottom: '30px' }} />
            <Skeleton variant="rectangular" width={200} height={80} sx={{ marginBottom: '30px' }} />
            <Skeleton variant="rectangular" width={200} height={80} sx={{ marginBottom: '30px' }} />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
