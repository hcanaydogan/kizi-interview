
import React from "react"
import _ from 'lodash'
import '../assets/css/allgames.scss'
import gameIcon from '../assets/game_icon.svg';
/**
 * TODO slider functionality and fallback image of games
 */
class AllGames extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allGames: games_,
            totalPages: 10,
            currentPage: 1
        }
    }

    componentDidMount(){
        //this.fetchGamesByPage(1)
    }

    fetchGamesByPage(page){
        return fetch(`https://triodor.free.beeceptor.com/api/v1/games?page=${page}`)
            .then(response => response.json())
            .then(data => console.log(data))
    }

    setGames(){

    }
    getPaginationButtons(totalPages){
        let pagination = [];
        for(let i = 1; i <= totalPages; i++){
            pagination.push(
                <div key={i} className="page-btn">{i}</div>
            )
        }
        return pagination;
    }
    render() {
        const { allGames, totalPages } = this.state
        return (
            <div id ="all-games">
                <label>All Games</label>
                <div id="all-games-list">
                    <div id="all-games-page">
                        {allGames.map(g => {
                            return (
                                <div className="game-item">
                                    <img src={g.image} alt={g.title} onerror={() => {
                                        this.onerror=null;
                                        this.src=gameIcon;
                                    }}/>
                                    <label>{g.title}</label>
                                </div>
                            )
                        })}
                    </div>
                    <div id="all-games-pagination">
                        <div className="page-btn">Back</div>
                        {this.getPaginationButtons()}
                        <div className="page-btn">Next</div>
                        <div className="page-btn">Last</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AllGames

var games_ = [
    {
    "title": "Car Eats Car 2: Mad Dreams",
    "image": "http://s3.amazonaws.com/yepi.com-staging/kizi/system/static/thumbs/tile_thumb/979/thumb150_150_150_Untitled-3.jpg?1556200966",
    "permalink": "car-eats-car-2-mad-dreams"
    },
    {
    "title": "Wolf Simulator",
    "image": "http://s3.amazonaws.com/yepi.com-staging/kizi/system/static/thumbs/tile_thumb/5351/thumb150_8e232638d9ee4483a1151b23d51a4da8-512x512.jpg?1556203832",
    "permalink": "wolf-simulator"
    },
    {
    "title": "Adam and Eve: Cut the Ropes",
    "image": "http://s3.amazonaws.com/yepi.com-staging/kizi/system/static/thumbs/tile_thumb/5588/thumb150_adam-and-eve-cut-the-ropes.jpg?1569321190",
    "permalink": "adam-and-eve-cut-the-ropes"
    },
    {
    "title": "Road Of Rampage",
    "image": "http://s3.amazonaws.com/yepi.com-staging/kizi/system/static/thumbs/tile_thumb/5603/thumb150_c8fb23af908042cebfcc882263ba7353-512x512.jpg?1559457878",
    "permalink": "road-of-rampage"
    },
    {
    "title": "Tribs.io",
    "image": "http://s3.amazonaws.com/yepi.com-staging/kizi/system/static/thumbs/tile_thumb/5268/thumb150_925e5d07858a4cd2a5b49a2fc23e2cb7.jpg.jpg?1556203796",
    "permalink": "tribsio"
    },
    {
    "title": "Color Bump 3D",
    "image": "http://s3.amazonaws.com/yepi.com-staging/kizi/system/static/thumbs/tile_thumb/5455/thumb150_31730d01666641989414fb0c0baccb66-512x512.jpg?1556203877",
    "permalink": "color-bump-3d"
    },
    {
    "title": "Commando 2",
    "image": "http://s3.amazonaws.com/yepi.com-staging/kizi/system/static/thumbs/tile_thumb/258/thumb150_81.jpg?1556199075",
    "permalink": "commando-2"
    },
    {
    "title": "Knighttron",
    "image": "http://s3.amazonaws.com/yepi.com-staging/kizi/system/static/thumbs/tile_thumb/1500/thumb150_icon_150x150.jpg?1556202293",
    "permalink": "knighttron"
    },
    {
    "title": "Stickman Maverick",
    "image": "http://s3.amazonaws.com/yepi.com-staging/kizi/system/static/thumbs/tile_thumb/6174/thumb150_stickman-maverick-kizi.jpg?1578558215",
    "permalink": "stickman-maverick"
    }
    ]