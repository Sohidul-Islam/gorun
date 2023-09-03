export default function Button() {
  return {
    defaultProps: {
      disableElevation: true,
    },

    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '24px',
        borderRadius: '30px',
        padding: '12px 30px',
        textTransform: 'none',

        '&.Mui-disabled': {
          opacity: '0.3',

          ...(ownerState.variant === 'text' && {
            color: `${theme.palette[ownerState.color].main}`,
          }),

          ...(ownerState.variant === 'contained' && {
            color: `#fff!important`,
            background: `${theme.palette[ownerState.color].main}`,
          }),

          ...(ownerState.variant === 'outlined' && {
            color: `${theme.palette[ownerState.color].main}`,
            borderColor: `${theme.palette[ownerState.color].main}`,
          }),
        },

        ...(ownerState.size === 'small' && {
          fontSize: '14px',
          lineHeight: '24px',
          padding: '6px 16px',
          gap: '4px',

          '& .MuiButton-startIcon': {
            marginRight: 0,
          },
        }),
      }),

      text: {
        padding: '0',
        background: 'transparent',

        '&:hover': {
          background: 'transparent',
        },
      },
    },
  };
}
