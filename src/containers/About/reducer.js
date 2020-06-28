import { contentDetails, featuredData } from './details';

const INITIAL_STATE = {
  contentData: {
    contentDetails,
    featuredData,
  }
};

const aboutReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default: 
      return state;
  }
};

export default aboutReducer;