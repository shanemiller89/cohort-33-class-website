import React, { Component } from 'react'
import technologies from '../../data/Technologies';

class Technologies extends Component {

    render() {
        return (
            <div id="technologies" className="technologies">
                <h1 className="lightBgTitle">Technologies</h1>

                <div className="technologyCardContainer">
                    {
                        technologies.map((technology, i) => {
                            return <a key={i} className="technologyCard" href={technology.link} target="_blank" rel="noopener noreferrer">
                                <div className={technology.className + " technologyImage"}></div>
                                <div className="technologyText">{technology.name}</div>
                            </a>
                        })
                    }
                </div>

            </div>
        )
    }
}

export default Technologies