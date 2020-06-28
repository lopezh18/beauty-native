import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchBlogs } from './apiCalls';
import { FETCH_BLOG } from './constants';
import { fetchBlogFailure, fetchBlogSuccess } from './actions';

function* fetchBlogResults() {
  try {
    const { items } = yield call(fetchBlogs);
    const blogData = items.map(({ content, id, title}) => {
      const blogObject = { content, id, title };
      const contentArr = content.split('>');
      const hasThumbnail = contentArr[0].search('img');
      if(hasThumbnail === 1) {
        blogObject.thumbnail = contentArr[0];
      }
      return (blogObject)
    });
    yield put(fetchBlogSuccess(blogData))
  } catch(err) {
    console.log('error in saga');
  }
}

export function* fetchBlog() {
  yield takeLatest(FETCH_BLOG, fetchBlogResults)
};
