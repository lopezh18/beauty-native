import { createSelector } from 'reselect';

const selectBlogs = state => state.blogs;

export const selectBlogData = createSelector(
  [selectBlogs],
  (state) => state.blogData
);
export const selectLoading = createSelector(
  [selectBlogs],
  (state) => state.loading
);

export const selectError = createSelector(
  [selectBlogs],
  (state) => state.error
);

