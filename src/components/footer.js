import React from 'react'
import '../assets/css/footer.scss'

class Footer extends React.Component {
    constructor(props){
        super(props)
        this.footerLinks = [
            { name: 'PRIVACY', url: '#privacy'},
            { name: 'CONTACT', url: '#contact'},
            { name: 'ABOUT', url: '#about'},
        ]
    }
    render() {
        return (
            <footer>
                <div id="footer-nav">
                    {this.footerLinks.map(l => {
                        return <a key={l.name} href={l.url}>{l.name}</a>
                    })}
                </div>
                <div id="social-links">
                    <ul></ul>
                </div>
            </footer>
        )
    }
}

export default Footer