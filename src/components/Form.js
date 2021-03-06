import { useContext } from 'react';
import { QuestionListContext } from '../store/question-list-context';
import styles from './Form.module.css';

// API key updated: 2022-05-18
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

    const selectValue = document.getElementById('question-select').value;
    const inputValue = event.target[0].value;
    let prompt;

    if (selectValue !== "No, thanks. I'll ask my own question") {
      prompt = selectValue;
    } else {
      prompt = inputValue;
    }

    const timeStamp = event.timeStamp;

    const responseData = await fetchOpenaiAPI(prompt);
    const answer = responseData.choices[0].text;
    const answerFormatted = answer.trim().replace('?', '');

    const question = {
      prompt: prompt,
      answer: answerFormatted,
      timeStamp: timeStamp,
    };

    questionListCtx.addQuestion(question);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles['question-box']}>
        <label htmlFor="question-input">
          Ever had a question for AI? Now is your chance to ask! Enter your
          question below.
        </label>
        <textarea
          id="question-input"
          rows="5"
          columns="40"
          placeholder="Type your question here"
          className="border-radius-15 font-space-mono"
        />
      </div>
      <div className={styles['question-box']}>
        <label htmlFor="question-select">
          Or choose one of the AI's favourite questions to get the ball rolling.
        </label>
        <select
          id="question-select"
          className="border-radius-10 font-space-mono"
        >
          <option value="No, thanks. I'll ask my own question">
            No, thanks. I'll ask my own question
          </option>
          <option value="Do androids dream of electric sheep">
            Do androids dream of electric sheep?
          </option>
          <option value="Can you boogie">Can you boogie?</option>
        </select>
      </div>
      <button
        className={`border-radius-10 font-space-mono ${styles.ask}`}
      >
        Ask
      </button>
    </form>
  );
};

export default Form;
