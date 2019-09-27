export default (state = [], {type, payload}) => {
    switch (type) {
        case 'WEAPON_CREATE':
            return [...state, payload];
        case 'WEAPON_DELETE':
            return [...state, payload];
        case 'WEAPON_UPDATE':
            return [...state, payload];
        default:
            return state;
    }
};

