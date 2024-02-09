import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        responRegister: {},
    },

    reducers: {
        getResponInput(state, action) {
            state.responRegister = action.payload
        }
    }
})

export const postRegister = (data) => async (dispacth) => {
    try {
        const postRegister = await fetch('https://nice-cowboy-boots-pike.cyclic.app/users/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })


        const responRegisterAPI = await postRegister.json()
        const convertResponString = JSON.stringify(responRegisterAPI)
        const convertResponParse = JSON.parse(convertResponString)

        dispacth(getResponInput(convertResponParse))

    } catch (error) {
        alert('error ga bisa fetch API')
    }
}

export default registerSlice.reducer
export const { getResponInput } = registerSlice.actions