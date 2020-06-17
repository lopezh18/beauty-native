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

const MEDIA_DECORATOR = '@media';

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
