// 7.12 리액트-리덕스 사용하기
import './App.css';
// import './components/redux_exercise';
import CounterContainer from './components/CounterContainer';
import TodoContainer from './components/TodosContainer';


function App() {
  return (
    <div className="App">
      <CounterContainer/>
      <hr/>
      <TodoContainer/>
    </div>
  );
}

export default App;
