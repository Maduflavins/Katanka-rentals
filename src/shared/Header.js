import React from 'react';

export function Header (){
  return(
      <nav className="navbar navbar-dark navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="">The Katanka Project</a>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2 bwm-search" type="search" placeholder="Check 'Galadimawa'" aria-label="Search">
              </input>
              <button className="btn btn-outline-sucess my-2 my-sm-0 btn-bwm-search" type="submit">Search</button>
            </form>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup">
            <span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto">
                <a  className="nav-item nav-link active" href="">Login <span className="sr-only">(current)</span></a>
                <a  className="nav-item nav-link" href="">Register</a>

              </div>

            </div>

          </div>

      </nav>

  )
}
