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
        open: false
    }

    openModal = id => {
        document.getElementById(id).style.display = "block"
    }

    showBio = (id, buttonId, infoContainerId, reelThemInId) => {
        document.getElementById(id).classList.toggle("hidden")
        document.getElementById(reelThemInId).classList.toggle("hidden")
        document.getElementById(infoContainerId).classList.toggle("infoContainerFix")
        if (document.getElementById(buttonId).innerHTML === "Read Bio") {
            document.getElementById(buttonId).innerHTML = "Close"
        }
        else {
            document.getElementById(buttonId).innerHTML = "Read Bio"
        }
    }

    closeModalFromButton = id => {
        document.getElementById(id).style.display = "none"
    }

    updateDimensions() {
        if (this.state.open === true && window.innerWidth > 810) {
            this.setState({ open: false });
        }
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

    navScroll = (pageName) => {
        if (pageName === "home") {
            scrollToComponent(this.Home, { offset: 0, align: 'middle', duration: 500, ease: 'inCirc' });
        }
        if (pageName === "developers") {
            scrollToComponent(this.Developers, { offset: 10, align: 'top', duration: 500, ease: 'inCirc' });
        }
        if (pageName === "technologies") {
            scrollToComponent(this.Technologies, { offset: 10, align: 'top', duration: 500, ease: 'inCirc' });
        }
        if (pageName === "thanks") {
            scrollToComponent(this.Thanks, { offset: 10, align: 'top', duration: 500, ease: 'inCirc' });
        }
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
        window.onclick = function (event) {
            if (event.target.id.split("-")[0] === "modal") {
                document.getElementById(event.target.id).style.display = "none";
            }
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
                <Developers ref={(section) => { this.Developers = section; }} showBio={this.showBio} openModal={this.openModal} closeModalFromButton={this.closeModalFromButton} />
                <Technologies ref={(section) => { this.Technologies = section; }} />
                <Thanks ref={(section) => { this.Thanks = section; }} />
            </div>
        )
    }
}

export default C30Website