export default function TabsNav({ handleShowAll, handleShowComplete, handleShowIncomplete}){

    const handleShowAllClick = () => handleShowAll()
    const handleShowCompleteClick = () => handleShowComplete()
    const handleShowIncompleteClick = () => handleShowIncomplete()

  return (  
    <nav>
      <div className="nav nav-tabs" id="nav-tab" role="tablist">
        <button className="nav-link active" id='nav-all-tab' onClick={handleShowAllClick}>All</button>
        <button className="nav-link" id='nav-complete-tab' onClick={handleShowCompleteClick}>Complete</button>
        <button className="nav-link" id="nav-incomplete-tab" onClick={handleShowIncompleteClick}>Incomplete</button>
      </div>
    </nav>
  );
}