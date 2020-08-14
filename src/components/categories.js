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
        return (
            <a href="#categories" id="categories" className="d-none d-md-flex align-items-center h-100">
                <i className="fa fa-th-large"></i>
                CATEGORIES
                <i id="icon-angle" className="fa"></i>
                <ul>
                    {categories.map(c => {
                        return (
                            <li className="d-flex align-items-center" key={c.position} onClick={() => this.gotToUrl(c.url)}>
                                <img src={c.icon} alt={c.title} onError={(e) => {
                                    e.target.src=gameIcon;
                                }}/>
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