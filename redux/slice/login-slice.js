import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        responLogin : {},
        messageErro : {}
    },

    reducers: {

        // ini untuk test aja, jgn dipake buat get inputan
        getResponInput(state, action) {
            state.responLogin = action.payload
        },

        responMessage(state,action) {
            state.messageErro = action.payload
        }
    }
})

export const postInputToAPI = (data) => async (dispatch) => {
    try {
        const postRespon = await fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })

        if (postRespon.ok) {
            const responAPI = await postRespon.json();
            const convertResponAPI = JSON.stringify(responAPI)
            const convertParseResponAPI = JSON.parse(convertResponAPI)
            Cookies.set('responLogin', convertResponAPI)
            dispatch(getResponInput(convertParseResponAPI))

        } else {
            const responAPIerr = await postRespon.json();
            const convertResponAPIerr = JSON.stringify(responAPIerr);
            const convertParseResponAPIerr = JSON.parse(convertResponAPIerr)

            dispatch(responMessage(convertParseResponAPIerr))
        }


    } catch(error) {
        alert('error ga bisa fetch API')
    }
}

export default loginSlice.reducer
export const { getResponInput, responMessage } = loginSlice.actions