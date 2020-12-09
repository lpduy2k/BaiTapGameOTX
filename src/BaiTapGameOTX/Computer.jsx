import React, { Component } from 'react'
import {connect} from 'react-redux'

class Computer extends Component {
    render() {
        let keyframe = `@keyframes randomItem${Date.now()} {
            0% {top: 0;}
            25% {top: 30px;}
            50% {top: 0px;}
            75% {top: -5px;}
            100% {top: 0;}
          }`
        return (
            <div className="text-center player">
                <style>
                    {keyframe}
                </style>
                <div className="theThink">
                    <img style={{position:'absolute',animation:`randomItem${Date.now()} 0.5s`}} width="60" height="60" src={this.props.computer.hinhAnh} alt={this.props.computer.hinhAnh}/>
                </div>
                <div className="speech-bubble"></div>
                <img style={{width:140,height:140}} src="./img/playerComputer.png" alt="./img/playerComputer.png"/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        computer: state.stateBaiTapGameOTX.computer
    }
}

export default connect(mapStateToProps)(Computer)