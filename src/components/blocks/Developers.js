import React, { Component } from 'react'
import cohort from "../../data/Cohort.js"
import DeveloperCard from "../DeveloperCard"
import { isMobile } from 'react-device-detect'
import '../../styles/Developers.css'
import '../../styles/DeveloperImages.css'

class Developers extends Component {

    render() {
        return (
            <div id="developers" className="developers">
                <h1 className="darkBgTitle">Developers</h1>

                {
                    //Checks device type and renders appropriate card (Modal on desktop, bio extension on mobile)
                    (!isMobile) ?
                        <div className="developerCardContainer">
                            {
                                cohort.sort(function (a, b) {
                                    var nameA = a.lastName.toLowerCase(), nameB = b.lastName.toLowerCase();
                                    if (nameA < nameB)
                                        return -1
                                    if (nameA > nameB)
                                        return 1
                                    return 0
                                }).map(developer => {
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