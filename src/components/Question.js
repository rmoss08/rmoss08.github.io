const Question = () => {
    const question = {prompt, response, timeStamp};

    return <div>
        <div>{question.prompt}</div>
        <div>{question.response}</div>
    </div>;
};

export default Question;