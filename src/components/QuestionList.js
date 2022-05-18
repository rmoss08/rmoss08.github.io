import { useCallback, useContext, useEffect } from 'react';
import { QuestionListContext } from '../store/question-list-context';
import Question from './Question';
import styles from './QuestionList.module.css';

const TEST_LIST = [
  { prompt: '3rd', answer: 'abc', timeStamp: 23 },
  { prompt: '1st', answer: 'abc', timeStamp: 1 },
  { prompt: '2nd', answer: 'abc', timeStamp: 14 },
];

const QuestionList = () => {
  const questionListCtx = useContext(QuestionListContext);

  const questionList = TEST_LIST;
  // const questionList = questionListCtx.questionList;
  const sortedQuestionList = questionList.sort((a, b) => {
    if (a.timeStamp > b.timeStamp) {
      return 1;
    } else if (a.timeStamp === b.timeStamp) {
      return 0;
    } else {
      return -1;
    }
  });

  const questionComponents = sortedQuestionList.map((question) => (
    <Question key={question.timeStamp} prompt={question.prompt} answer={question.answer} />
    ));
  
  return <ul className={styles.list}>{questionComponents}</ul>;
};

export default QuestionList;
