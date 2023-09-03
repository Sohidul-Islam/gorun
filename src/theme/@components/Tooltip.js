export default function Tooltip() {
  return {
    styleOverrides: {
      popper: {
        zIndex: 1200,
      },
      tooltip: {
        fontSize: '12px',
        lineHeight: '20px',
        fontWeight: '400',
        fontFamily: 'Inter',
        color: '#fff',
        backgroundColor: '#404040',
        maxWidth: '200px',
      },
      arrow: {
        '&::before': {
          backgroundColor: '#404040',
        },
      },
    },
  };
}
