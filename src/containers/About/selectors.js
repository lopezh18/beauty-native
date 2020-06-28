import { createSelector } from 'reselect';

const selectAbout = state => state.about;

export const selectAboutData = createSelector(
  [selectAbout],
  aboutData => aboutData.contentData
);
