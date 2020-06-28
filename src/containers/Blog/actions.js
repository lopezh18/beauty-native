import {
  FETCH_BLOG,
  FETCH_BLOG_FAILURE,
  FETCH_BLOG_SUCCESS,
} from './constants';

export const fetchBlog = () => ({
  type: FETCH_BLOG,
});

export const fetchBlogFailure = () => ({
  type: FETCH_BLOG_FAILURE,
});

export const fetchBlogSuccess = (payload) => ({
  type: FETCH_BLOG_SUCCESS,
  payload,
});
