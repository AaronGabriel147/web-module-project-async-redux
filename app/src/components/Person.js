import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const Person = (props) => {
    const { person, isFetching, error } = props;
    useEffect(() => {
    });


    console.log(person)

    if(error) {
        return <h2>We got an error: {error}</h2>;
    }
    if (isFetching) {
        return <h2>Fetching person for ya!</h2>
    }

    return (
        <>
            <div>
                <h2>Say hi to {person.name.first} {person.name.last}</h2>
            </div>
            <button>Get new person</button>
        </>
    );

    const mapStateToProps = state => {
        return {
            person: state.person,
            isFetching: state.isFetching,
            error: state.error
        }
    }
}

export default connect(mapStateToProps)(Person);