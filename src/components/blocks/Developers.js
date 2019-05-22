import React, { Component } from 'react'
import cohort from "../../data/Cohort.js"
import DeveloperCard from "../DeveloperCard"
import { isMobile } from 'react-device-detect';

class Developers extends Component {

    render() {
        return (
            <div id="developers" className="developers">
                <h1 className="darkBgTitle">Developers</h1>

                {
                    (!isMobile) ?
                        <div className="developerCardContainer">
                            {
                                cohort.map(developer => {
                                    return <DeveloperCard showBio={this.props.showBio} openModal={this.props.openModal} closeModalFromButton={this.props.closeModalFromButton} key={developer.id} info={developer} />
                                })
                            }
                        </div> :
                        <div className="developerCardContainer cardContainerMobile">
                            {
                                cohort.map(developer => {
                                    return <DeveloperCard showBio={this.props.showBio} openModal={this.props.openModal} closeModalFromButton={this.props.closeModalFromButton} key={developer.id} info={developer} />
                                })
                            }
                        </div>

                }

            </div>
        )
    }
}

export default Developers