import pxToRem from "../helpers/pxToRem";

const Typography = (theme) => ({
  h1: {
    [theme.breakpoints.up("xs")]: {
      fontWeight: 600,
      fontSize: `${pxToRem(36)}rem`,
      lineHeight: 1.1,
      letterSpacing: "0px",
      color: theme.palette.text.primary,
    },

    [theme.breakpoints.up("lg")]: {
      fontWeight: 700,
      fontSize: `${pxToRem(36)}rem`,
    },

    [theme.breakpoints.up("xl")]: {
      fontWeight: 700,
      fontSize: `${pxToRem(42)}rem`,
    },
  },

  h2: {
    [theme.breakpoints.up("xs")]: {
      fontWeight: 600,
      fontSize: `${pxToRem(32)}rem`,
      lineHeight: 1.1,
      letterSpacing: "0px",
      color: theme.palette.text.primary,
    },

    [theme.breakpoints.up("lg")]: {
      fontWeight: 700,
      fontSize: `${pxToRem(26)}rem`,
    },

    [theme.breakpoints.up("xl")]: {
      fontWeight: 600,
      fontSize: `${pxToRem(32)}rem`,
    },
  },

  h3: {
    fontWeight: 600,
    fontSize: `${pxToRem(24)}rem`,
    lineHeight: 1.1,
    letterSpacing: "0px",
    color: theme.palette.text.primary,
  },

  h4: {
    fontWeight: 600,
    fontSize: `${pxToRem(20)}rem`,
    lineHeight: `${pxToRem(24)}rem`,
    letterSpacing: "0px",
    color: theme.palette.text.primary,
  },

  h5: {
    fontWeight: 500,
    fontSize: `${pxToRem(18)}rem`,
    lineHeight: `${pxToRem(28)}rem`,
    letterSpacing: "-2%",
    color: theme.palette.text.primary,
  },

  h6: {
    fontWeight: 500,
    fontSize: `${pxToRem(16)}rem`,
    lineHeight: `${pxToRem(28)}rem`,
    letterSpacing: "-2%",
  },

  body1: {
    lineHeight: `${pxToRem(24)}rem`,
    fontSize: `${pxToRem(16)}rem`,
    letterSpacing: "0px",
    fontWeight: 400,

    [theme.breakpoints.up("lg")]: {
      lineHeight: `${pxToRem(24)}rem`,
      fontSize: `${pxToRem(16)}rem`,
    },

    [theme.breakpoints.up("xl")]: {
      lineHeight: `${pxToRem(24)}rem`,
      fontSize: `${pxToRem(16)}rem`,
    },
  },

  body2: {
    fontWeight: 500,
    fontSize: `${pxToRem(14)}rem`,
    lineHeight: `${pxToRem(17)}rem`,
    letterSpacing: "0px",
  },

  body3: {
    fontWeight: 400,
    fontSize: `${pxToRem(13)}rem`,
    lineHeight: `${pxToRem(21)}rem`,
    color: "#B5B5C3!important",

    [theme.breakpoints.up("lg")]: {
      fontSize: `${pxToRem(13)}rem`,
      lineHeight: `${pxToRem(21)}rem`,
    },

    [theme.breakpoints.up("xl")]: {
      fontSize: `${pxToRem(13)}rem`,
      lineHeight: `${pxToRem(21)}rem`,
    },
  },

  body4: {
    fontWeight: 500,
    fontSize: `${pxToRem(15)}rem`,
    lineHeight: `${pxToRem(18)}rem`,
    letterSpacing: "0px",
    display: "block",
  },
});

export default Typography;
