import React from 'react';
import Banner from './components/banner'
import Header from "./components/header"
import Footer from "./components/footer"
import FavoriteGames from "./components/favoritegames"
import AllGames from "./components/allgames"

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
      <div id="app" className={currentThemeClass}>
        <Header changeTheme={this.changeTheme} themes={this.themes} />
        <main>
          <Banner />
          <FavoriteGames />
          {/* <AllGames /> */}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

