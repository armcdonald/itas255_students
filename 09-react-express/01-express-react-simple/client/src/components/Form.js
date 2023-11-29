import React, { useEffect, useState } from 'react';

const Form = () => {
    const [sports, setSports] = useState([]);

    useEffect(() => {
        const fetchSports = async () => {
           setSports((await fetch('/sports')
                        .then(resp => resp.json())
                        .then(data => data)).sort());
        }
        fetchSports();
    }, []);  

    const submitSport = async e => {
        await fetch('/sports', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({"newSport": (document.querySelector('#sportToAdd').value) })
        }
        );
        e.preventDefault();
    }

    return(
        <div>
            <h2>Favourite Sports</h2>
            {sports.map((sport, key) => <div key={key}>{sport}</div>)}
            <br/>
            <form onSubmit={submitSport}>
                <input type="text" placeholder="New Sport Name" width="30" id="sportToAdd" />
                <input type="submit" value="Add Sport" />
            </form>

        </div>
    )
}

export default Form;
