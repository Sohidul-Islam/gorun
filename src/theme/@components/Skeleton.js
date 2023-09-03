export default function Skeleton() {
  return {
    defaultProps: {
      animation: 'pulse',
    },
    styleOverrides: {
      root: {
        background: 'rgba(54, 54, 54, 0.05)!important',
        transform: 'none',
      },
    },
  };
}
