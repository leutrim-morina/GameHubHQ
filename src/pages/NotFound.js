import React from 'react'

function Nofound() {
  return (
    <div className="mx-auto mt-5 p-5">
      <img className="mx-auto d-flex " src="https://upload.wikimedia.org/wikipedia/commons/1/11/Blue_question_mark_icon.svg" alt="404notfounded" />
      <h2 className="text-center ">404 - Page not found</h2>
      <br /><p className="text-center">Sorry, the page you are looking for doesn't exist. <br /><a href="/">Go back to homepage.</a></p>
    </div>
    
  );
}

export default Nofound