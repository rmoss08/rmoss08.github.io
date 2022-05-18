import Form from "./components/Form";
import QuestionList from "./components/QuestionList";
import QuestionListContextProvider from "./store/question-list-context";

function App() {
  return (
    <QuestionListContextProvider>
      <div className="wrapper">
        <h1>&#x1f916;AI Q&A</h1>
        <Form />
        <QuestionList />
      </div>
    </QuestionListContextProvider>
  );
}

export default App;
