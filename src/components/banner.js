import React from "react"
import '../assets/css/banner.scss'

class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collectionTitle: '',
            gameTitle: '',
            imgUrl: '',
            desc: ''
        }
    }
    componentDidMount(){
        this.getBannerContent()
    }

    fetchFeaturedCollection(){
        return fetch('https://triodor.free.beeceptor.com/api/v1/collections/featured')
            .then(response => response.json())
    }

    getBannerContent(){
        this.fetchFeaturedCollection().then(data =>
            this.setBannercontent(data)
        );
    }

    setBannercontent({collection_title, game_title, image_url, text}){
        this.setState({
            collectionTitle: collection_title,
            gameTitle: game_title,
            imgUrl: image_url,
            desc: text
        });
    }
    render(){
        const {collectionTitle, gameTitle, imgUrl, desc} = this.state
        return (
            <div id="banner">
                <div id="banner-desc">
                    <div>{collectionTitle}</div>
                    <div>{gameTitle}</div>
                    <div>{desc}</div>
                    <a href="#allgames">
                        View All {collectionTitle}
                        <i className="fa fa-angle-right"></i>
                    </a>
                </div>
                <div id="banner-img" style={{backgroundImage: `url(${imgUrl})`}}>
                </div>
            </div>
        )
    }
}

export default Banner