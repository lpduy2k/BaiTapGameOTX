import React, { Component } from 'react'
import './BaiTapGameOTX.css'
import Computer from './Computer'
import Player from './Player'
import ThongTin from './ThongTin'
import {connect} from 'react-redux'

class BaiTapGameOTX extends Component {
    render() {
        return (
            <div className="gameOTX">
                <div className="row text-center mt-5">
                    <div className="col-4">
                        <Player />  
                    </div>
                    <div className="col-4">
                        <ThongTin />
                        <button onClick={() => {this.props.playGame()}} className="btn btn-success mt-3">Play game</button>
                    </div>
                    <div className="col-4">
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            let count = 0;
            let randomComputerItem = setInterval(() =>{
                dispatch({
                    type:'RAN_DOM'
                })
                count ++;
                if(count >= 30){
                    clearInterval(randomComputerItem)
                    dispatch({
                        type: 'END_GAME',
                    })
                }
            },100)
        }
    }
}

export default connect(null,mapDispatchToProps)(BaiTapGameOTX)