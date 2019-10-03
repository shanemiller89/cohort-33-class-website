import React, { Component } from 'react'
import NavBar from "./components/blocks/NavBar"
import NavDropDown from "./components/blocks/NavDropDown"
import Home from "./components/blocks/Home"
import Developers from "./components/blocks/Developers"
import Technologies from "./components/blocks/Technologies"
import Thanks from "./components/blocks/Thanks"
import Footer from "./components/blocks/Footer"
import scrollToComponent from 'react-scroll-to-component';
import './styles/mediaqueries.css'

class C33Website extends Component {

    state = {
        open: false
    }

    //Enables display for modals (Not applicable on mobile or tablet devices)
    openModal = id => {
        document.getElementById(id).style.display = "block"
    }

    //Disables display for modals (Not applicable on mobile or tablet devices)
    closeModalFromButton = id => {
        document.getElementById(id).style.display = "none"
    }

    //Toggles display for extended bio (Only applicable on mobile or tablet devices)
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

    //Closes burger menu when screen width exceeds 810px
    updateDimensions() {
        if (this.state.open === true && window.innerWidth > 810) {
            this.setState({ open: false });
        }
    }

    //Toggles burger menu icon open or closed
    handleClick = () => {
        this.setState({
            open: !this.state.open
        });
    }

    //Toggles burger menu visible (open) or hidden (closed)
    handleDropDown = () => {
        this.setState({
            navDropDown: !this.state.navDropDown
        });
    }

    //Handles scrolling for navigation
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
                <Footer ref={(section) => { this.Footer = section; }} />
            </div>
        )
    }
}

export default C33Website