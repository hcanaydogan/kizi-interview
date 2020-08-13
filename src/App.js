import React from 'react';
import Banner from './components/banner'
import logo from './kizi-logo.png';
import './App.scss';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      themes: [
        {themeClass: "theme-orange", name: "Orange"},
        {themeClass: "theme-blue", name: "Blue"},
        {themeClass: "theme-green", name: "Green"},
      ],
      currentThemeClass: "theme-orange"
    }
  }
  changeTheme(themeClass){
    this.setState({
      currentThemeClass: themeClass
    });
  }
  render(){
    const {themes, currentThemeClass} = this.state;
    return (
      <div className={"app " + currentThemeClass}>
        <header className="d-flex">
          <div className="logo-container">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="d-flex justify-content-between align-items-center w-100 p-2">
            <nav className="d-flex justify-content-between">
              <a href="#" className="d-flex align-items-center theme-list">
                <i className="fa fa-edit"></i>
                THEME
                <ul>
                  {themes.map(t => {
                    return <li key={t.name} onClick={() => this.changeTheme(t.themeClass)}>{t.name}</li>
                  })}
                </ul>
              </a>
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
}

export default App;
