import React, { Component } from 'react'

class NavDropDown extends Component {

    //Calls scrolling function from parent container
    handleNav = page => {
        this.props.navScroll(page)
        this.props.handleClick()
    }

    render() {
        return (
            <div className="navDropDown">
                <div className="navDropDownItem" onClick={() => this.handleNav("home")}><span></span>Home</div>
                <div className="navDropDownItem" onClick={() => this.handleNav("developers")}>Developers</div>
                <div className="navDropDownItem" onClick={() => this.handleNav("technologies")}>Technologies</div>
                <div className="navDropDownItem" onClick={() => this.handleNav("thanks")}>Thanks</div>
            </div>
        )
    }
}

export default NavDropDown