import React from 'react'
import '../assets/css/footer.scss'

class Footer extends React.Component {
    constructor(props){
        super(props)
        this.footerLinks = [
            { name: 'PRIVACY', url: '#privacy'},
            { name: 'CONTACT', url: '#contact'},
            { name: 'ABOUT', url: '#about'}
        ];
        this.socialLinks = [
            { iconClass: 'fa fa-facebook', url: '#facebook'},
            { iconClass: 'fa fa-twitter', url: '#twitter'},
            { iconClass: 'fa fa-instagram', url: '#instagram'}
        ];
    }
    render() {
        return (
            <footer>
                <div id="footer-nav" className="d-flex justify-content-between align-items-center">
                    <div id="info-links">
                        {this.footerLinks.map(l => {
                            return <a key={l.name} href={l.url}>{l.name}</a>
                        })}
                    </div>
                    <div id="social-links" className="d-flex">
                        {this.socialLinks.map((s, i) => {
                            return <a key={i} href={s.url} className="d-flex justify-content-center align-items-center"><i className={s.iconClass}></i></a>
                        })}
                    </div>
                </div>
                <div id="footer-policy">
                    <p>2020 Kizi.com <a href="#terms">Site Terms of Service</a><a href="#policy">Privacy Policy.</a></p>
                    <p>Kizi ® may use cookies to improve the use of our websites. A "cookie" is a small file that websites often store on a user's computer. Storage of cookies on your system provides an easy and convenient method for us to personalize your experience on our websites.</p>
                </div>
            </footer>
        )
    }
}

export default Footer