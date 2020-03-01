import React, { Component } from 'react'
import Header from './Header'
import '../css/Index.css'
export class IndexTopSection extends Component {

    componentDidMount() {
        let phrase = ["boo", "who"]
        let on = true;
        const vLine = this.refs.flashing
        const entireTextDOM = this.refs.changingText
        console.log("hi")
        console.log(entireTextDOM.innerHTML)
        //console.log(endMarker)
        setInterval(() => {
            let endMarker = entireTextDOM.innerHTML.search("<span")

            if (on) {
                vLine.style = "display: none;"
                on = false;
            } else {
                vLine.style = "display: inline;"
                on = true
            }
        }, 500)
    }

    render() {
        return (
            <div className="topSection">
                <Header />
                <div className="changingText" >
                    <p style = {changeText} ref = "changingText" >Add Some Text here <span ref="flashing">|</span></p>
                </div>
            </div>
        )
    }
}
const changeText = {
    fontSize : '2rem',
    fontWeight: '1000'
}


export default IndexTopSection

