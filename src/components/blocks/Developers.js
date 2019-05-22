import React, { Component } from 'react'
import cohort from "../../data/Cohort.js"
import DeveloperCard from "../DeveloperCard"

class Developers extends Component {

    render() {
        return (
            <div id="developers" className="developers">
                <h1 className="darkBgTitle">Developers</h1>

                <div className="developerCardContainer">
                    {
                        cohort.map(developer => {
                            return <DeveloperCard openModal={this.props.openModal} closeModalFromButton={this.props.closeModalFromButton} key={developer.id} info={developer} />
                        })
                    }
                </div>

            </div>
        )
    }
}

export default Developers