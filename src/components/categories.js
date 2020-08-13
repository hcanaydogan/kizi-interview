import React from "react"
import gameIcon from '../assets/game_icon.svg';
class Categories extends React.Component {
    constructor(props) {
        super(props)

    }
    gotToUrl(url) {
        window.open(url)
    }
    render() {
        const categories = this.props.categories || []
        console.log(categories)
        return (
            <a href="#categories" className="d-none d-md-flex align-items-center h-100 categories">
                <i className="fa fa-th-large"></i>
                CATEGORIES
                <i className="fa fa-angle-down"></i>
                <ul className="d-flex flex-wrap">
                    {categories.map(c => {
                        return (
                            <li className="d-flex align-items-center" key={c.position} onClick={() => this.gotToUrl(c.url)}>
                                <object data={gameIcon} type="image/png">
                                    <img src={c.icon} alt="Stack Overflow logo and icons and such" />
                                </object>
                                    {c.title.toUpperCase()}
                            </li>
                        )
                    })}
                </ul>
            </a>
        );
    }
}

export default Categories