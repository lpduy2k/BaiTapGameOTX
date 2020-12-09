const stateDefault = {
    mangDatCuoc: [
        {ma: 'keo', hinhAnh: './img/keo.png', datCuoc: true},
        {ma: 'bua', hinhAnh: './img/bua.png', datCuoc: false},
        {ma: 'bao', hinhAnh: './img/bao.png', datCuoc: false},
    ],
    ketQua: "END GAME",
    soBanThang: 0,
    soBanChoi: 0,
    computer: {ma: 'keo', hinhAnh: './img/keo.png'}
}

export const BaiTapGameOTXReducer = (state = stateDefault, action)=>{
    switch(action.type){
        case 'CHON_OTX': {
            let mangCuocUpdate = [...state.mangDatCuoc];
            mangCuocUpdate = mangCuocUpdate.map((item, index)=>{
                if(item.ma === action.maCuoc){
                    return {...item,datCuoc: true}
                }
                return {...item,datCuoc: false}
            })
            state.mangDatCuoc = mangCuocUpdate
            return {...state}
        }
        case 'RAN_DOM': {
            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
            state.computer = quanCuocNgauNhien;
            return {...state}
        }
        case 'END_GAME': {
            let player = state.mangDatCuoc.find(item => item.datCuoc);
            let computer = state.computer;
            switch(player.ma){
                case 'keo': 
                    if(computer.ma === 'keo'){
                        state.ketQua = 'Ngang kèo >.<';
                    }else if(computer.ma === 'bua'){
                        state.ketQua = 'Thua rồi T.T';
                    }else{
                        state.ketQua = 'Winnn ^.^';
                        state.soBanThang += 1;
                    }
                ; break;
                case 'bua': 
                    if(computer.ma === 'bua'){
                        state.ketQua = 'Ngang kèo >.<';
                    }else if(computer.ma === 'bao'){
                        state.ketQua = 'Thua rồi T.T';
                    }else{
                        state.ketQua = 'Winnn ^.^';
                        state.soBanThang += 1;
                    }
                ; break;
                case 'bao': 
                    if(computer.ma === 'bao'){
                        state.ketQua = 'Ngang kèo >.<';
                    }else if(computer.ma === 'keo'){
                        state.ketQua = 'Thua rồi T.T';
                    }else{
                        state.ketQua = 'Winnn ^.^';
                        state.soBanThang += 1;
                    }
                ; break;
                default : state.ketQua = 'Winnn ^.^';
                state.soBanThang += 1;
            }
            state.soBanChoi += 1;
            return {...state}
        }
        default: return {...state}   
    }
}