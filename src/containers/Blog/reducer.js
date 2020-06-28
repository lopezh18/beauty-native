import {
  FETCH_BLOG,
  FETCH_BLOG_FAILURE,
  FETCH_BLOG_SUCCESS,
} from './constants';

const INITIAL_STATE = {
  blogData: [],
  error: false,
  loading: false,
};

const blogReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_BLOG:
      return {
        ...state,
        loading: true,
      }
    case FETCH_BLOG_SUCCESS:
      return {
        ...state,
        blogData: action.payload,
        loading: false,
      };
    case FETCH_BLOG_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      }
    default:
      return state;
  }
}

export default blogReducer;
