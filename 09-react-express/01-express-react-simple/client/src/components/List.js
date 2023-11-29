import React, { useEffect, useState } from 'react';

let List = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchItems = async () => {
            setItems(await fetch('/cities')
                        .then(resp => resp.json())
                        .then(data => data));
        }
        fetchItems();
    }, []);    
    return (
        <div>
            <h2>List of Cities</h2>
            {(items.length) ? (
                <div>
                    {items.map((item, key) => <div key={key}>{item}</div>
                    )}
                </div>
            ) : (
                <div><h4>No items found</h4></div>
            )
            }
        </div>
    )
}

export default List;