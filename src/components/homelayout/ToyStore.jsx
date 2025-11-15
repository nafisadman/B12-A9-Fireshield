import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import ToyItem from './ToyItem';

const ToyStore = () => {
    const data = useLoaderData();
    // const [news, setNews] = useState([]);

    console.log("Ami data :(", data);
    return (
        <div>
            {
                data.map(toy => 
                    <ToyItem></ToyItem>
                )
            }
        </div>
    );
};

export default ToyStore;