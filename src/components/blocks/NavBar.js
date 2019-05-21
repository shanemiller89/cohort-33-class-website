import React, { Component } from 'react'
import logo from "../../images/logo.png"
import HamburgerMenu from 'react-hamburger-menu'
import Scrollspy from 'react-scrollspy'


class NavBar extends Component {

    handleNav = page => {
        this.props.navScroll(page)
    }

    render() {
        return (
            <div className="navBar">
                <div className="logoAndText"><div><img src={logo} alt="NSS Logo" width="50px" /></div><div className="logoText"><strong>Cohort 30</strong><span className="demoText"> | Demo Day June 21</span></div></div>

                <div className="navTextBox">
                    <Scrollspy componentTag={'span'} items={['home', 'developers', 'technologies', 'thanks']} currentClassName="highlight">
                    <span className="navText" onClick={() => this.handleNav("home")}>Home</span>
                    <span className="navText" onClick={() => this.handleNav("developers")}>Developers</span>
                    <span className="navText" onClick={() => this.handleNav("technologies")}>Technologies</span>
                    <span className="navText" onClick={() => this.handleNav("thanks")}>Thanks</span>
                    </Scrollspy>
                </div>

                <div className="hamburger">
                    <HamburgerMenu
                        isOpen={this.props.open}
                        menuClicked={this.props.handleClick.bind(this)}
                        width={18}
                        height={15}
                        strokeWidth={3}
                        rotate={0}
                        color='white'
                        borderRadius={0}
                        animationDuration={0.5}
                    />
                </div>
            </div>
        )
    }
}

export default NavBar