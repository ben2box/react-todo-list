import {useState} from 'react';

export default function TabsNav({ handleShowAll, handleShowComplete, handleShowIncomplete}){
    const [isActive, setIsActive] = useState('all');

    const handleShowAllClick = (() => {
      handleShowAll()
      setIsActive('all')
    })

    const handleShowCompleteClick = (() => {
      handleShowComplete()
      setIsActive('complete')
    })
    const handleShowIncompleteClick = (() =>{
      handleShowIncomplete() 
      setIsActive('incomplete')
    })


  return (  
    <nav>
      <div className="nav nav-tabs" id="nav-tab" role="tablist">
        <button className={isActive === 'all' ? "nav-link active" : "nav-link"} id='nav-all-tab' onClick={handleShowAllClick}>All</button>
        <button className={isActive === 'complete' ? "nav-link active" : "nav-link"} id='nav-complete-tab' onClick={handleShowCompleteClick}>Complete</button>
        <button className={isActive === 'incomplete' ? "nav-link active" : "nav-link"} id="nav-incomplete-tab" onClick={handleShowIncompleteClick}>Incomplete</button>
      </div>
    </nav>
  );
}