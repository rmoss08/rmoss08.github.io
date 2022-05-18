const Question = (props) => {
  return (
    <div>
      <div>&#x1f435; Question: {props.prompt}</div>
      <div>&#x1f916; Answer: {props.answer}</div>
    </div>
  );
};

export default Question;
