const initialState = {
    person: {
        name: {
            first: "Audrey",
            last: "Gabriel"
        },
        shows: {
            disney: "Bluey",
            looneytoons: "Big Bunny"
        }
    },        
    isFetching: false,
    error: 'This is an error is reducer...'
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};