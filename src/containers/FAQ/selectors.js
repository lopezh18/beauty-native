import { createSelector } from 'reselect';

const selectFaq = state => state.faq;

export const selectFaqData = createSelector(
  [selectFaq],
  faqData => faqData.questions
);
