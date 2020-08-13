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
        //this.getBannerContent()
        // TODO remove and enable getbanner
        this.setBannercontent({
            "collection_title": "Racing Games",
            "game_title": "City Car Stunt 2",
            "image_url":"https://www.pcgamesn.com/wp-content/uploads/legacy/The_Best_Racing_Games_on_PC.JPG",
            "text": "The adventure continues with City Car Stunt 2! Select your car, your car's skin and buckle up because these super sportscars are on fire! Use your arrow keys to ride around the city and perform extreme stunts before your time runs out to successfully finish the race. You can test your agility in these races solo or you can grab a friend to make it more challenging. You can also select the Free Driving option to practice your stunts before the race."
          })
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