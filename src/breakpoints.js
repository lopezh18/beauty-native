export const deviceSizes = {
  mobileS: 400,
  mobileL: 500,
  tabletXS: 610,
  tabletS: 680,
  tablet: 780,
  laptop: 969,
  desktop: 970,
  desktopL: 1295,
};

export const materialUiBreakpoints = {
  xs: 600,
  sm: 960,
  md: 1280,
  lg: 1920,
};

const MEDIA_DECORATOR = '@media';

export const materialUiMediaQueries = {
  xs: `${MEDIA_DECORATOR} (max-width: ${materialUiBreakpoints.xs}px)`,
  sm: `${MEDIA_DECORATOR} (max-width: ${materialUiBreakpoints.sm}px)`,
  md: `${MEDIA_DECORATOR} (max-width: ${materialUiBreakpoints.md}px)`,
  lg: `${MEDIA_DECORATOR} (max-width: ${materialUiBreakpoints.lg}px)`,
};

export const mediaQueriesByDevice = {
  mobileS: `${MEDIA_DECORATOR} (max-width: ${deviceSizes.mobileS}px)`,
  mobile: `${MEDIA_DECORATOR} (max-width: ${deviceSizes.mobileL}px)`,
  tabletXS: `${MEDIA_DECORATOR} (max-width: ${deviceSizes.tabletXS}px)`,
  tabletS: `${MEDIA_DECORATOR} (max-width: ${deviceSizes.tabletS}px)`,
  tablet: `${MEDIA_DECORATOR} (max-width: ${deviceSizes.tablet}px)`,
  laptop: `${MEDIA_DECORATOR} (max-width: ${deviceSizes.laptop}px)`,
  desktopL: `${MEDIA_DECORATOR} (max-width: ${deviceSizes.desktopL}px)`,
  desktop: `${MEDIA_DECORATOR} (max-width: ${deviceSizes.desktop}px)`,
};
