import React, { Component } from 'react'
import {connect} from 'react-redux'

class ThongTin extends Component {
    render() {
        const {ketQua, soBanThang, soBanChoi} = this.props
        return (
            <div>
                <div className="display-4 text-danger mb-3">{ketQua}</div>
                <h1 className="text-success">Số bàn thắng: <span className="text-primary">{soBanThang}</span></h1>
                <h1 className="text-warning">Số bàn chơi: <span className="text-danger">{soBanChoi}</span></h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ketQua: state.stateBaiTapGameOTX.ketQua,
        soBanThang: state.stateBaiTapGameOTX.soBanThang,
        soBanChoi: state.stateBaiTapGameOTX.soBanChoi,
    }
}

export default connect(mapStateToProps)(ThongTin)
