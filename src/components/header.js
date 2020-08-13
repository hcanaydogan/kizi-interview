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
        //this.setCategories()
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
                <div className="logo-container">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="d-flex justify-content-between align-items-center w-100 h-100">
                    <nav className="d-flex justify-content-between align-items-center h-100">
                        <a href="#" className="d-flex align-items-center theme-list">
                            <i className="fa fa-edit"></i>
                            THEME
                            <ul>
                                {themes.map(t => {
                                    return <li key={t.name} onClick={() => changeTheme(t.themeClass)}>{t.name}</li>
                                })}
                            </ul>
                        </a>
                        <Categories categories={mock_categories/* categories */} />
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
        )
    }
}

export default Header

const mock_categories = [{"title":"Skill","url":"https://test.kizi.com/skill","icon":"http://s3.amazonaws.com/kizicom-dev/system/static/thumbs/collections/2.svg?1564053313","position":26},{"title":"Puzzle","url":"https://test.kizi.com/puzzle","icon":"http://s3.amazonaws.com/kizicom-dev/system/static/thumbs/collections/3.svg?1564053687","position":6},{"title":"Action","url":"https://test.kizi.com/action-arcade","icon":"http://s3.amazonaws.com/kizicom-dev/system/static/thumbs/collections/5.svg?1564052958","position":1},{"title":"Strategy","url":"https://test.kizi.com/strategy","icon":"http://s3.amazonaws.com/kizicom-dev/system/static/thumbs/collections/6.svg?1564053659","position":9},{"title":"Dress up","url":"https://test.kizi.com/dress-up","icon":"http://s3.amazonaws.com/kizicom-dev/system/static/thumbs/collections/12.svg?1564053285","position":17},{"title":"Management","url":"https://test.kizi.com/management","icon":"http://s3.amazonaws.com/kizicom-dev/system/static/thumbs/collections/17.svg?1564053238","position":23},{"title":"Racing","url":"https://test.kizi.com/racing","icon":"http://s3.amazonaws.com/kizicom-dev/system/static/thumbs/collections/25.svg?1564053436","position":7},{"title":"Food","url":"https://test.kizi.com/food","icon":"http://s3.amazonaws.com/kizicom-dev/system/static/thumbs/collections/113.svg?1564053173","position":19},{"title":"Alien","url":"https://test.kizi.com/alien","icon":"http://s3.amazonaws.com/kizicom-dev/system/static/thumbs/collections/116.svg?1564052924","position":12},{"title":"Bubble Shooter","url":"https://test.kizi.com/bubble-shooter","icon":"http://s3.amazonaws.com/kizicom-dev/system/static/thumbs/collections/118.svg?1564052774","position":14},{"title":"Multiplayer","url":"https://test.kizi.com/multiplayer-games","icon":"http://s3.amazonaws.com/kizicom-dev/system/static/thumbs/collections/119.svg?1564053721","position":5},{"title":"Mahjong","url":"https://test.kizi.com/mahjong","icon":"http://s3.amazonaws.com/kizicom-dev/system/static/thumbs/collections/123.svg?1564054003","position":21},{"title":"Parking","url":"https://test.kizi.com/parking","icon":"http://s3.amazonaws.com/kizicom-dev/system/static/thumbs/collections/124.svg?1564054016","position":25},{"title":"Card","url":"https://test.kizi.com/card-games","icon":"http://s3.amazonaws.com/kizicom-dev/system/static/thumbs/collections/126.svg?1564054037","position":15},{"title":"Cooking","url":"https://test.kizi.com/cooking","icon":"http://s3.amazonaws.com/kizicom-dev/system/static/thumbs/collections/128.svg?1564054053","position":16},{"title":"Sports","url":"https://test.kizi.com/sports","icon":"http://s3.amazonaws.com/kizicom-dev/system/static/thumbs/collections/129.svg?1564054067","position":27},{"title":"Animal","url":"https://test.kizi.com/animal","icon":"http://s3.amazonaws.com/kizicom-dev/system/static/thumbs/collections/130.svg?1564052557","position":13},{"title":"Adventure","url":"https://test.kizi.com/adventure","icon":"http://s3.amazonaws.com/kizicom-dev/system/static/thumbs/collections/131.svg?1564052459","position":11},{"title":"Make Over","url":"https://test.kizi.com/make-over","icon":"http://s3.amazonaws.com/kizicom-dev/system/static/thumbs/collections/133.svg?1564054096","position":22},{"title":"Tower Defense","url":"https://test.kizi.com/tower-defense","icon":"http://s3.amazonaws.com/kizicom-dev/system/static/thumbs/collections/134.svg?1564054119","position":28},{"title":"Girls","url":"https://test.kizi.com/girls","icon":"http://s3.amazonaws.com/kizicom-dev/system/static/thumbs/collections/135.svg?1564054145","position":4},{"title":"Car","url":"https://test.kizi.com/cars","icon":"http://s3.amazonaws.com/kizicom-dev/system/static/thumbs/collections/151.svg?1564056119","position":2},{"title":"Shooting","url":"https://test.kizi.com/shooting","icon":"http://s3.amazonaws.com/kizicom-dev/system/static/thumbs/collections/152.svg?1564056137","position":8},{"title":"IO","url":"https://test.kizi.com/io","icon":"http://s3.amazonaws.com/kizicom-dev/system/static/thumbs/collections/153.svg?1564657198","position":3},{"title":"Gun","url":"https://test.kizi.com/gun","icon":"http://s3.amazonaws.com/kizicom-dev/system/static/thumbs/collections/158.svg?1564657544","position":20},{"title":"Fighting","url":"https://test.kizi.com/fighting","icon":"http://s3.amazonaws.com/kizicom-dev/system/static/thumbs/collections/159.svg?1564657436","position":18},{"title":"2 Player","url":"https://test.kizi.com/2-player","icon":"http://s3.amazonaws.com/kizicom-dev/system/static/thumbs/collections/160.svg?1564657567","position":10},{"title":"Math","url":"https://test.kizi.com/math","icon":"http://s3.amazonaws.com/kizicom-dev/system/static/thumbs/collections/162.svg?1564657611","position":24},{"title":"Christmas","url":"https://test.kizi.com/christmas","icon":"http://s3.amazonaws.com/kizicom-dev/system/static/thumbs/collections/226.svg?1571319361","position":29}]