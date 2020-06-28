import { questions } from './data';

const INITIAL_STATE = {
  questions
};

const faqReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default faqReducer;
