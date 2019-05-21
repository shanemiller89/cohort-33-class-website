import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class DeveloperCard extends Component {

    render() {
        return (
            <div id={"developerCard-" + this.props.info.id} className="developerCard">
                <div className={this.props.info.firstName + "-" + this.props.info.lastName + " imageHolder"}></div>
                <div className="infoContainer">
                    <h3>{this.props.info.firstName + " " + this.props.info.lastName}</h3>
                    <p>{this.props.info.reelThemIn}</p>
                    <div className="iconAndButtonSection">
                        <div className="cardIconRow">
                            <a href={this.props.info.portfolio} target={'_blank'}><FontAwesomeIcon size={'2x'} icon={faGlobe} /></a>
                            <a href={this.props.info.github} target={'_blank'}><FontAwesomeIcon size={'2x'} icon={faGithub} /></a>
                            <a href={this.props.info.linkedIn} target={'_blank'}><FontAwesomeIcon size={'2x'} icon={faLinkedin} /></a>
                            <a href={"mailto: " + this.props.info.email} target={'_blank'}><FontAwesomeIcon size={'2x'} icon={faEnvelope} /></a>
                        </div>
                        <div className="modalButton">Learn More</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeveloperCard