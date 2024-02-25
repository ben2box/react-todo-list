import './App.css';
import TodoList from './Components/TodoList.js';

// TODO: Top Container function with h1; Input Field + Button Div
function TopContainer(){
  return (
    <div className='topContainer container-fluid'>
      <h1>TODO LIST</h1>
      <TodoList />
    </div>
  )
}







export default function App() {
  return (
    <div className="App">
      <TopContainer />
      
      
    </div>
  );
}