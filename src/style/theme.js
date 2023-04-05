import { spacing } from './utils';

export const BREAKPOINTS = {
  extraSmall: 320,
  mobile: 576,
  tablet: 768,
  laptop: 992,
  desktop: 1200,
};

export const ZINDEX = {
  base: 100,
  modal: 200,
  spinner: 300,
};

const PRIMARY_PALETTE = {
  red: '#7f0102',
};

const SECONDARY_PALETTE = {
  moon: '#999999',
  snow: '#F4F4F4',
  black: 'black',
};

const ALERT_PALETTE = {
  error: '#E74C3C',
  success: '#2ECC71',
  warning: '#F1C40F',
};

export const theme = {
  palette: {
    background: SECONDARY_PALETTE.black,
    title: SECONDARY_PALETTE.moon,
    text: SECONDARY_PALETTE.snow,
    button: {
      background: PRIMARY_PALETTE.moon,
      border: SECONDARY_PALETTE.snow,
      text: SECONDARY_PALETTE.black,
    },
    alert: {
      error: ALERT_PALETTE.error,
      success: ALERT_PALETTE.success,
      warning: ALERT_PALETTE.warning,
    },
  },
  mediaquery: {
    mobile: `@media (max-width: ${BREAKPOINTS.tablet}px)`,
    tablet: `@media (min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.desktop}px)`,
    desktop: `@media (min-width: ${BREAKPOINTS.desktop}px)`,
  },
  typography: {
    fonts: {
      bold: 'movie-projectsrcassets\fontsRaleway-Bold.ttf',
      italic: 'movie-projectsrcassets\fontsRaleway-Italic.ttf',
      regular: 'movie-projectsrcassets\fontsRaleway-Regular.ttf',
      semibold: '.movie-projectsrcassets\fontsRaleway-SemiBold.ttf',
    },
  },
  spacing,
};
