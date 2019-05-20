import React, { Component } from 'react'
import NavBar from "./components/blocks/NavBar"
import NavDropDown from "./components/blocks/NavDropDown"
import Home from "./components/blocks/Home"
import Developers from "./components/blocks/Developers"
import Technologies from "./components/blocks/Technologies"
import Thanks from "./components/blocks/Thanks"
import scrollToComponent from 'react-scroll-to-component';

class C30Website extends Component {

    state = {
        highlight: "home",
        open: false
    }

    handleClick = () => {
        this.setState({
            open: !this.state.open
        });
    }

    handleDropDown = () => {
        this.setState({
            navDropDown: !this.state.navDropDown
        });
    }

    setHighlight = text => {
        this.setState({ highlight: text })
    }

    navScroll = (pageName) => {
        if (pageName === "home") {
            scrollToComponent(this.Home, { offset: 0, align: 'middle', duration: 500, ease: 'inCirc' });
        }
        if (pageName === "developers") {
            scrollToComponent(this.Developers, { offset: 0, align: 'middle', duration: 500, ease: 'inCirc' });
        }
        if (pageName === "technologies") {
            scrollToComponent(this.Technologies, { offset: 0, align: 'middle', duration: 500, ease: 'inCirc' });
        }
        if (pageName === "thanks") {
            scrollToComponent(this.Thanks, { offset: 0, align: 'middle', duration: 500, ease: 'inCirc' });
        }
    }

    render() {
        return (
            <div className="masterContainer">
                <div className="navBarFix"></div>
                <NavBar open={this.state.open} handleClick={this.handleClick} highlight={this.state.highlight} setHighlight={this.setHighlight} navScroll={this.navScroll} />
                <div className={
                    this.state.open ?
                        "navDropDownContainer navOpen" :
                        "navDropDownContainer"
                }>
                    <NavDropDown setHighlight={this.setHighlight} navScroll={this.navScroll} handleClick={this.handleClick} />
                </div>
                <Home ref={(section) => { this.Home = section; }} />
                <Developers ref={(section) => { this.Developers = section; }} />
                <Technologies ref={(section) => { this.Technologies = section; }} />
                <Thanks ref={(section) => { this.Thanks = section; }} />
            </div>
        )
    }
}

export default C30Website