export const ADD_PLACE = 'ADD_PLACE';

export const addPlace = (coord) => {
    console.log('places-actions')
    console.log(coord)
    return { type: ADD_PLACE, coord: coord };
};