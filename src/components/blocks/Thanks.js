import React, { Component } from 'react'

class Thanks extends Component {

    render() {
        return (
            <div id="thanks" className="thanks">
                <h1 className="darkBgTitle">Thanks</h1>
                <div className="thanksText">


                    A shared experience is always powerful, but with the right guidance it can be life changing,
                    and for that we'd like to say thank you.<br /><br />

                    <div style={{ fontWeight: "bold", textAlign: "center", color: "white" }}>To our instructors...</div><br />

                    Steve Brownlee: Thank you for being our guide on this fantastic and crazy journey. Your absolute
                    dedication to student centered learning, and unequivocal growth mindset pushed us all that much
                    closer to the kind of developers and learners we want to be. Without your leadership
                    (and let's be honest, dad jokes) our experience wouldn't have been
                    half as meaningful.<br /><br />

                    To Meg Ducharme, Jenna Solis, Kimmy Bird, and Madi Peper: Having someone in our corner who has
                    experienced the kinds of challenges we face has been absolutely invaluable. Each and every one
                    of you took time, patience, and pains to make sure we got the support we needed, and were ready
                    to take on the next problem. It takes a village, and that's exactly what you are.
                    Thank you so much.<br /><br />

                    <div style={{ fontWeight: "bold", textAlign: "center", color: "white" }}>To the whole NSS team...</div><br />

                    Thank you doesn't quite cover it. Your tireless support of students and devotion to mission
                    is what keeps the lights on! You have all come together to create something magical and unique
                    in NSS, and we strive to give back to the tech community even a fraction of
                    what you give every day.<br /><br />

                    <div style={{ fontWeight: "bold", textAlign: "center", color: "white" }}>And Finally to John Wark...</div><br />

                    Thank you so much for seeing an opportunity in us, and in Nashville. There is a lot of
                    'you can't' in the world, and all it takes is one person saying 'you can' to initiate change.
                    We are all richer for the experience we've had at NSS, and we can't wait to see what's next!
                </div>
            </div>
        )
    }
}

export default Thanks