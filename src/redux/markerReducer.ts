import { PayloadAction, createSlice } from "@reduxjs/toolkit"


export interface IMarkerState {
    lat: number;
    long: number;
    title: string;
    description: string;
    id: string
}

interface IMarkers {
    markers: IMarkerState[]
}


const initialState: IMarkers = {
    markers: []

}

const markerSlice = createSlice({
    name: "markerSlice",
    reducers: {
        addMarker: (state, action: PayloadAction<IMarkerState>) => {
            state.markers.push(action.payload);
        }
    },
    initialState,
})

export const { addMarker } = markerSlice.actions;
export default markerSlice.reducer;