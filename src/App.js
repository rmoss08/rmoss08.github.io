import Form from "./components/Form";
import QuestionListContextProvider from "./store/question-list-context";

function App() {
  return (
    <QuestionListContextProvider>
      <h1>&#x1f916; AI Q&A</h1>
      <Form />
      <ul>DIV LIST</ul>
    </QuestionListContextProvider>
  );
}

export default App;
