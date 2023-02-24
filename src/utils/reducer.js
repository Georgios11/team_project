const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            const country = action.payload.country;
            return { ...state, countries: [...state.countries, country] };
        case 'DELETE':
            const id = action.payload.id;
            return { ...state, countries: [...state.filter((e) => e.id !== id)] };
        case 'UPDATE':
            // update to be done
            return 3;
        default:
            return false;
    }
};

export default reducer;
