import { createSlice } from "@reduxjs/toolkit";


    const initialState = {
        origin: null,
        destination: null,
        travelTimeInformation:null,
    }

    export const navSlice = createSlice({
        name: "nav",
        initialState,
        reducer:{
            setOrigion:(state,action)=>{
                state.origion = action.payload;

            },
            setDesination:(state,action)=>{
                state.destination = action.payload;

            },
            setTravelTimeInformation:(state,action)=>{
                state.travelTimeInformation = action.payload;

            },
        },
    });

    export const {setOrigion,setDesination,
        setTravelTimeInformation} = navSlice.actions;

        // Selectors

        export const SelectOrigion = (state)=> state.nav.origin;
        export const SelectDestination = (state)=> state.nav.destination;
        export const SelectTravelTimeInformation = (state)=> state.nav.travelTimeInformation;

        export default navSlice.reducer;

        
