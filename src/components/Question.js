import styles from './Question.module.css';

const Question = (props) => {
  return (
    <div className={styles.question}>
      <div className={styles.prompt}>&#x1f435; Question: {props.prompt}</div>
      <div className={styles.answer}>&#x1f916; Answer: {props.answer}</div>
    </div>
  );
};

export default Question;
