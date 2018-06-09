const initialState = {
    summonerName: 'BobiWan Kenobi93'
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOG_IN':
            return {
                summonerName: action.type
            };
        default:
            return state;
    }
}