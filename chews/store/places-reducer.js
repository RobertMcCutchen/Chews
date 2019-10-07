import { ADD_PLACE } from './places-actions';

const initialState = {
    places: []
};

export default Reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLACE:
            console.log('places-reducer')
            console.log(action.coord)
            return {
                ...places,
                places: state.places.concat(action.coord),
            }
        default:
            return state;
        }
};