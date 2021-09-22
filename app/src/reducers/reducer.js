
// reducer must exist if it is in index.js and all that.
const initialState = {
    person: {
        name: {
            first: "Audrey",
            last: "Gabriel"
        },
        shows: {
            disney: "Bluey",
            looneytoons: "Bugs Bunny"
        }
    },        
    isFetching: false,
    error: 'This is an error in reducer...'
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


