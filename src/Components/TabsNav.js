export default function TabsNav({ handleFilterCompleteTodos, handleFilterIncompleteTodos}){

    const handleFilterCompleteClick = () => handleFilterCompleteTodos()
    const handleFilterIncompleteClick = () => handleFilterIncompleteTodos()

  return (  
    <nav>
      <div className="nav nav-tabs" id="nav-tab" role="tablist">
        <button className="nav-link active" id='nav-all-tab'>All</button>
        <button className="nav-link" id='nav-complete-tab' onClick={handleFilterCompleteClick} >Complete</button>
        <button className="nav-link" id="nav-incomplete-tab" onClick={handleFilterIncompleteClick}>Incomplete</button>
      </div>
    </nav>
  );
}