import { PayloadAction, createSlice } from "@reduxjs/toolkit";




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
    initialState,
    reducers: {
        addMarker: (state, action: PayloadAction<IMarkerState>) => {
            state.markers.push(action.payload);
        },
        updateMarker: (state, action: PayloadAction<IMarkerState>) => {

            const updatedItem = state.markers.filter((i) => i.id == action.payload.id)
            state.markers.splice(updatedItem, 1, action.payload);
        },
        deleteMarker: (state, action) => {
            state.markers = state.markers.filter((i) => i.id !== action.payload);

        }

    },
})

export const { addMarker, updateMarker, deleteMarker } = markerSlice.actions;
export default markerSlice.reducer;