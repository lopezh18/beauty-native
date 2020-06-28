import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import AsyncRender from '../../components/AsyncRender';
import Blog from '../../components/Blog';
import { fetchBlog } from './actions';
import { selectBlogData, selectError, selectLoading } from './selectors';

class BlogContainer extends Component {
  componentDidMount() {
    const { fetchBlogData } = this.props
    fetchBlogData();
  }

  render() {
    const {
      blogs,
      error,
      loading,
    } = this.props;
    return (
      <AsyncRender
        asyncData={blogs}
        component={Blog}
        error={error}
        loading={loading}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  blogs: selectBlogData,
  error: selectError,
  loading: selectLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchBlogData: props => dispatch(fetchBlog())
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);
