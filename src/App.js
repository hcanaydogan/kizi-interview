import React from 'react';
import Banner from './components/banner'
import logo from './kizi-logo.png';
import './App.scss';

function App() {
  return (
    <div className="app theme-orange">
      <header className="d-flex">
        <div className="logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="d-flex justify-content-between align-items-center w-100 p-2">
          <nav className="d-flex justify-content-between">
            <a href="#" className="d-flex align-items-center"><i className="fa fa-home"></i>HOME</a>
            <a href="#collections" className="d-none d-md-flex align-items-center"><i className="fa fa-th-large"></i>COLLECTIONS<i className="fa fa-angle-down"></i></a>
          </nav>
          <div className="user-menu d-flex align-items-center">
            <button className="tc-bg form-control login-btn"><i className="fa fa-user-o"></i>Login</button>
            <div className="d-none d-md-block">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="SEARCH" />
                <div className="input-group-append">
                  <button className="tc-bg"><i className="fa fa-search"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        Main
      </main>
      {/* <Banner /> */}
    </div>
  );
}

export default App;
