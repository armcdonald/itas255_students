import { useEffect, useState } from 'react';

const Form = () => {
    const [sports, setSports] = useState([]);

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