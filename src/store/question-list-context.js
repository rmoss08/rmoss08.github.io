import { createContext, useState } from 'react';

export const QuestionListContext = createContext({
  questionList: [],
  addQuestion: (question) => {},
  removeQuestion: (question) => {},
});

const QuestionListContextProvider = (props) => {
  const [questionList, setQuestionList] = useState([]);

  const addQuestion = (addedQuestion) => {
    const newList = [...questionList, addedQuestion];
    setQuestionList(newList);
  };

  const removeQuestion = (removedQuestion) => {
    const newList = questionList.filter(
      (question) => question !== removedQuestion
    );
    setQuestionList(newList);
  };

  const contextValue = {
    questionList: questionList,
    addQuestion: addQuestion,
    removeQuestion: removeQuestion,
  };

  return (
    <QuestionListContext.Provider value={contextValue}>
      {props.children}
    </QuestionListContext.Provider>
  );
};

export default QuestionListContextProvider;
