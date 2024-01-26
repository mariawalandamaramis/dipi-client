import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
// import { redirect } from "react-router-dom";

const loginSlice2 = createSlice({
    name: 'login',
    initialState: {
        login: [], // dibuat array biar bisa ngecek apakah udh ada data loginnya / blm 
        msgIncorret : []
    },

    reducers: {
        userLogin(state, action) {
            state.login = action.payload
        },
        incorretData(state, action) {
            state.msgIncorret = action.payload
        },
        resetIncorretData(state) {
            state.msgIncorret = [];
          },
    }
})

export const { userLogin, incorretData, resetIncorretData } = loginSlice2.actions

export const postUserLogin = (loginData) => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData)
        })

        if (response.ok) {
            const responData = await response.json()
            //alert(`login berhasil : ${JSON.stringify(responData)}`)

            const responJson = JSON.stringify(responData)
            // console.log(responJson)

            // dispatch(userLogin(responData))

            Cookies.set('responLogin', responJson)

            const cook = Cookies.get('responLogin')
            const goGlobal = JSON.parse(cook)

            // console.log(goGlobal)

            dispatch(userLogin(goGlobal))
            

            // alert('berhasil')



            // return redirect('/')
            

            // const userToken = responData.token
            // Cookies.set('token', userToken, {expires: 1})
        } else {
            const erroData = await response.json()
            const msgError = JSON.stringify(erroData)
            const msgErr = JSON.parse(msgError)
            console.log(msgErr)
            //dispatch(incorretData(msgErr))
            //alert("Gagal login: " + msgErr.message)
        }
    } catch (error) {
        alert('eror di poastUSerlogin')
    }
}


export default loginSlice2.reducer