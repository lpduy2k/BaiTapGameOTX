import React, { Component } from 'react'
import {connect} from 'react-redux'

class Player extends Component {
    render() {
        return (
            <div className="text-center player">
                <div className="theThink">
                    <img width="60" height="60" src={this.props.mangDatCuoc.find(item => item.datCuoc).hinhAnh} alt={this.props.mangDatCuoc.find(item => item.datCuoc).hinhAnh}/>
                </div>
                <div className="speech-bubble"></div>
                <img style={{width:140,height:140}} src="./img/player.png" alt="./img/player.png"/>
                <div className="row">
                    {this.props.mangDatCuoc.map((item,index)=>{
                        let border = {};
                        if(item.datCuoc){
                            border = {border:'3px solid orange'}
                        }
                        return <div className="col-4" key={index}>
                        <button onClick={()=>{this.props.datCuoc(item.ma)}} style={border} className="btnClick">
                            <img width="40" height="40" src={item.hinhAnh} alt={item.hinhAnh}/>
                        </button>
                    </div>
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangDatCuoc: state.stateBaiTapGameOTX.mangDatCuoc
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (maCuoc) => {
            dispatch({
                type: 'CHON_OTX',
                maCuoc
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player)
