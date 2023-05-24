import React from 'react'

function Nav() {
  return (
    <>
    <nav className="navbar navbar-expand-lg " id="Navid">
    <div className="container-fluid m-3">
        <a className="navbar-brand fs-3 text-light" href="/">GameHubHQ</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
     </button>
        <div className="collapse navbar-collapse d-flex justify-content-end " id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active fs-5 text-light" aria-current="page" href="/">Home</a>
             </li>
          <li className="nav-item">
           <a className="nav-link fs-5 p-2 text-light" href="/games">Explore All Games</a>
         </li>
         <li className="nav-item">
           <a className="nav-link fs-5 p-2 text-light" href="/about">About</a>
         </li>
         <li className="nav-item">
               <a className="nav-link fs-5 p-2 text-light" href="/faq">FAQ</a>
          </li>
         </ul>
     </div>
     </div>
    </nav>
    </>
  )
}

export default Nav