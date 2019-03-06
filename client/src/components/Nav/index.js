import React from 'react';
import './style.css';

class Nav extends React.Component {

    componentDidMount = () => {
        //Initialize the nav bar
        window.$('.sidenav').sidenav();
    };
    
    render() {
        return (
            <div className="reactNav">
                <div className="navbar-fixed">

                    <nav className="white">
                        <div className="nav-wrapper">
                            <a href="/" className="brand-logo"><i className="bookLogo"></i> Book Search</a>
                            <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li><a href="/">Search</a></li>
                                <li><a href="/saved">Saved</a></li>
                            </ul>
                        </div>
                    </nav>

                </div>

                <ul className="sidenav" id="mobile-demo">
                    <li><a href="/">Search</a></li>
                    <li><a href="/saved">Saved</a></li>
                </ul>

            </div>
        );
    }
}



export default Nav;
