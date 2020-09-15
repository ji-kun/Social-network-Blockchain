import React , { Component }from 'react';
import Identicon from 'identicon.js';

class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-dark fixed-top bg-primary flex-md-nowrap shadow p-8">
            <a
                className="navbar-brand col-sm-6 col-md-4 mr-0"
                href="http://www.dappuniversity.com/bootcamp"
                target="_blank"
                rel="noopener noreferrer"
            >
                KunjiTwitter
            </a>
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
                <small className="text-white">
                    <small id = "account">{this.props.account}</small>
                </small>
                { this.props.account ?
                    <img className="ml-2 " width="30" height = "30" 
                        src={`data: image/png;base64,${new Identicon(this.props.account, 30).toString()}`} 
                    />
                :   <span></span>
                 }
            </li>
            </nav>
        );
    }
}

export default Navbar;