import { useContext } from 'react';
import { QuestionListContext } from '../store/question-list-context';
import styles from './Question.module.css';

const Question = (props) => {
  const questionListCtx = useContext(QuestionListContext);
  
  const clickHandler = () => {
    questionListCtx.removeQuestion(props.id);
  };

  return (
    <div className={`border-radius-15 ${styles.question}`} onClick={clickHandler}>
      <div className={styles.prompt}>&#x1f435; Question: {props.prompt}</div>
      <div className={styles.answer}>&#x1f916; Answer: {props.answer}</div>
    </div>
  );
};

export default Question;
