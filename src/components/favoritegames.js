
import React from "react"
import _ from 'lodash'
import '../assets/css/favoritegames.scss'
import gameIcon from '../assets/game_icon.svg';
/**
 * TODO slider functionality and fallback image of games
 */
class FavoriteGames extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            favoriteGames: []
        }
    }

    componentDidMount(){
        this.setFavoriteGames()
        /// console.log(_.debounce)
        /// console.log(this.listNode.scrollWidth, this.listNode.clientWidth)
    }

    fetchFavoriteGames(){
        return fetch('https://triodor.free.beeceptor.com/api/v1/games/favorites')
            .then(response => response.json())
    }

    setFavoriteGames(){
        this.fetchFavoriteGames()
            .then(data =>{
                    this.setState({
                        favoriteGames: data
                })
            })
            .catch(e => console.log(e))
    }

    updateList(){}

    render() {
        const { favoriteGames } = this.state
        return (
            <div  id="favorite-games">
                <div id="favorite-games-header">
                    <label>Favorite Games</label>
                    <div id="favorite-games-nav">
                        <div id="favorite-games-nav-indicator"></div>
                        <div id="favorite-games-nav-btns">
                            <div className=""><i className="fa fa-angle-left"></i></div>
                            <div className=""><i className="fa fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>
                <div id="favorite-games-list" ref={elm => this.listNode = elm}>
                    {favoriteGames.map(g => {
                        return <div key={g.title} style={{backgroundImage: `url(${g.image}), url(${gameIcon})`}} className="game-item" title={g.title}><span>{g.title}</span></div>
                    })}
                </div>
            </div>
        );
    }
}

export default FavoriteGames
