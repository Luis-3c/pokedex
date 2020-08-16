import React, { useState, useEffect } from 'react';
import { getCount } from '../services/PokeAPI';

const Home = () => {
    const [count, setCount] = useState();

    useEffect(()=>{
        getCount().then(res=>{
            setCount(res);
        })
    }, []);
    
    return (
            <div className="home">
                <h1>Total:</h1>
                <section className="count">
                    {count ? count : '...'}
                </section>
                <h1>Pokemon</h1>
            </div>
    );
};

export default Home;