import { Fragment, useContext, useEffect } from 'react';
import { QuestionListContext } from '../store/question-list-context';
import Question from './Question';
import styles from './QuestionList.module.css';

const QuestionList = () => {
  const questionListCtx = useContext(QuestionListContext);

  let questionComponents;

  const questionList = questionListCtx.questionList;

  const sortedQuestionList = questionList.sort((a, b) => {
    if (a.timeStamp > b.timeStamp) {
      return -1;
    } else if (a.timeStamp === b.timeStamp) {
      return 0;
    } else {
      return 1;
    }
  });

  questionComponents = sortedQuestionList.map((question) => (
    <Question
      key={question.timeStamp}
      id={question.timeStamp}
      prompt={question.prompt}
      answer={question.answer}
    />
  ));

  let paragraphComponent;

  if (sortedQuestionList.length > 0) {
    paragraphComponent = <p>Regret asking that? Simply click to remove &#128578;</p>;
  }

  return (
    <Fragment>
      <ul className={`border-radius-15 ${styles.list}`}>
        {questionComponents}
      </ul>
      {paragraphComponent}
    </Fragment>
  );
};

export default QuestionList;
