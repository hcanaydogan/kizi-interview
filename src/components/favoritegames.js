
import React from "react"
import _ from 'lodash'
import '../assets/css/favoritegames.scss'

class FavoriteGames extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            favoriteGames: []
        }
    }

    componentDidMount(){
        //this.setFavoriteGames()
        console.log(_.debounce)
        //TODO REMOVE
        this.setState({favoriteGames: favorite_games}, () => {console.log(this.listNode.scrollWidth, this.listNode.clientWidth)})
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
                        return <div key={g.title} style={{backgroundImage: `url(${g.image})`}} className="game-item" title={g.title}><span>{g.title}</span></div>
                    })}
                </div>
            </div>
        );
    }
}

export default FavoriteGames

var favorite_games = [{"title":"King of Thieves King of Thieves King of Thieves","permalink":"king-of-thieves","image":"http://s3.amazonaws.com/yepi.com-staging/kizi/system/static/thumbs/wide/1838/original_king460.jpg?1556203291"},{"title":"Greedy Gods","permalink":"greedy-gods","image":"http://s3.amazonaws.com/yepi.com-staging/kizi/system/static/thumbs/wide/1840/original_460gg.jpg?1556203297"},{"title":"First Snow","permalink":"first-snow","image":"http://s3.amazonaws.com/yepi.com-staging/kizi/system/static/thumbs/wide/1840/original_460gg.jpg?1556203297"},{"title":"Pie.ai","permalink":"pieai","image":"http://s3.amazonaws.com/yepi.com-staging/kizi/system/static/thumbs/wide/1846/original_pie460.jpg?1556203308"}]//,{"title":"Paper Dash","permalink":"paper-dash","image":"http://s3.amazonaws.com/yepi.com-staging/kizi/system/static/thumbs/wide/1847/original_pd460.jpg?1556203313"},{"title":"Viking Workout","permalink":"viking-workout","image":"http://s3.amazonaws.com/yepi.com-staging/kizi/system/static/thumbs/wide/1850/original_vw_460.jpg?1556203319"},{"title":"TankWars.io","permalink":"tankwarsio","image":"http://s3.amazonaws.com/yepi.com-staging/kizi/system/static/thumbs/wide/1853/original_tw460.jpg?1556203326"},{"title":"Baby Clinic","permalink":"baby-clinic","image":"http://s3.amazonaws.com/yepi.com-staging/kizi/system/static/thumbs/wide/1854/original_bc460.jpg?1556203330"},{"title":"Toon Shooters 2 ","permalink":"toon-shooters-2","image":"http://s3.amazonaws.com/yepi.com-staging/kizi/system/static/thumbs/wide/1869/original_ts2_460.jpg?1556203352"},{"title":"One More Flight","permalink":"one-more-flight","image":"http://s3.amazonaws.com/yepi.com-staging/kizi/system/static/thumbs/wide/1870/original_1flight460.jpg?1556203358"},{"title":"Zombies Can't Jump 2","permalink":"zombies-cant-jump-2","image":"http://s3.amazonaws.com/yepi.com-staging/kizi/system/static/thumbs/wide/1871/original_image460x220.jpg?1556203363"},{"title":"Zombie Derby","permalink":"zombie-derby","image":"http://s3.amazonaws.com/yepi.com-staging/kizi/system/static/thumbs/wide/1875/original_zd460.jpg?1556203369"},{"title":"Drift Rally Champion","permalink":"drift-rally-champion","image":"http://s3.amazonaws.com/yepi.com-staging/kizi/system/static/thumbs/wide/1882/original_DRC460.jpg?1556203379"},{"title":"Hex Blocks Puzzle","permalink":"hex-blocks-puzzle","image":"http://s3.amazonaws.com/yepi.com-staging/kizi/system/static/thumbs/wide/1897/original_460x220-1.png?1556203392"},{"title":"NoBrakes.io","permalink":"nobrakesio","image":"http://s3.amazonaws.com/yepi.com-staging/kizi/system/static/thumbs/wide/5209/original_nobreaks460.jpg?1556203761"}]