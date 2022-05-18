import { useContext } from "react";
import { QuestionListContext } from "../store/question-list-context";
import styles from './Form.module.css';

const OPENAI_API_KEY = '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';

const Form = () => {
  const questionListCtx = useContext(QuestionListContext);

  const fetchOpenaiAPI = async (prompt) => {
    const requestData = {
      prompt: prompt,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };
  
    const response = await fetch(
      'https://api.openai.com/v1/engines/text-curie-001/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify(requestData),
      }
    );
    const responseData = await response.json();
    
    return responseData;
  };
  
  const submitHandler = async (event) => {
    event.preventDefault();
    
    const prompt = event.target[0].value;
    const timeStamp = event.timeStamp;
    
    // const responseData = await fetchOpenaiAPI(prompt);
    // const answer = responseData.choices[0].text;
    // const answerFormatted = answer.trim().replace('?', "");

    // const question = {
    //   prompt: prompt,
    //   answer: answerFormatted,
    //   timeStamp: timeStamp
    // }
    const question = {
      prompt: 'abc',
      answer: 'def',
      timeStamp: timeStamp
    }

    questionListCtx.addQuestion(question);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="question-input">
        Ever had a question for AI? Now is your chance to ask! Enter your
        question below.
      </label>
      <textarea
        id="question-input"
        rows='5'
        columns='40'
        placeholder="Do androids dream of electric sheep?"
        className="border-radius-15"
      />
      <button className={styles.ask}>Ask</button>
    </form>
  );
};

export default Form;
