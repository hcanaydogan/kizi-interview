import React from 'react'
import Categories from "./categories"
import logo from '../assets/kizi-logo.png';
import '../assets/css/header.scss'

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            categories: []
        }
    }
    componentDidMount(){
        this.setCategories()
    }
    fetchCategories(){
        return fetch('https://triodor.free.beeceptor.com/api/v1/collections')
            .then(response => response.json())
    }
    setCategories(){
        this.fetchCategories()
            .then(data =>{
                    this.setState({
                        categories: data.sort((c1, c2) => c1.position - c2.position)
                })
            })
            .catch(e => console.log(e))
    }
    render(){
        const { categories} = this.state;
        const { themes, changeTheme } = this.props
        return (
            <header className="d-flex">
                <div id="logo-container">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="d-flex justify-content-between align-items-center w-100 h-100">
                    <nav className="d-flex justify-content-between align-items-center h-100">
                        <a href="#" id="theme-list" className="d-flex align-items-center">
                            <i className="fa fa-edit"></i>
                            THEME
                            <ul>
                                {themes.map(t => {
                                    return <li key={t.name} onClick={() => changeTheme(t.themeClass)}>{t.name}</li>
                                })}
                            </ul>
                        </a>
                        <Categories categories={categories} />
                    </nav>
                    <div id="user-menu" className="d-flex align-items-center">
                        <button id="login-btn" className="form-control"><i className="fa fa-user-o"></i>Login</button>
                        <div className="d-none d-md-block">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="SEARCH" />
                                <div className="input-group-append">
                                    <button><i className="fa fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header
