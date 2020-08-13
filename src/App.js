import React from 'react';
import Banner from './components/banner'
import Header from "./components/header"
import './App.scss';

class App extends React.Component {
  constructor(props){
    super(props)
    this.themes = [
      {themeClass: "theme-orange", name: "Orange"},
      {themeClass: "theme-blue", name: "Blue"},
      {themeClass: "theme-green", name: "Green"},
    ]
    this.state = {
      currentThemeClass: 'theme-orange'
    }
  }
  changeTheme = (themeClass) => {
    this.setState({
      currentThemeClass: themeClass
    });
  }
  render(){
    const { currentThemeClass } = this.state;
    return (
      <div className={"app " + currentThemeClass}>
        <Header changeTheme={this.changeTheme} themes={this.themes} />
        <main>
          Main
        {/* <Banner /> */}
        </main>
      </div>
    );
  }
}

export default App;

