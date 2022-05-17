const OPENAI_API_KEY = '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';

const Form = () => {
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
    console.log(responseData);

    const answer = responseData.choices[0].text;
    const answerFormatted = answer.trim().replace('?', "");
    console.log(answerFormatted);
  };
    
  const submitHandler = async (event) => {
    event.preventDefault();

    const prompt = event.target[0].value;
    const timeStamp = event.timeStamp;
    
    fetchOpenaiAPI(prompt);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="question-input">
        Ever had a question for AI? Now is your chance to ask! Enter your
        question below.
      </label>
      <input
        type="text"
        id="question-input"
        placeholder="Do androids dream of electric sheep?"
      />
      <button>Ask</button>
    </form>
  );
};

export default Form;