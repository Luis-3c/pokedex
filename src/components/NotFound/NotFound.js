import React from 'react';
import './NotFound.css';

const NotFound = ({error}) => {
    return (
        <div className="container">
            <div className="not-found">
            <section className="code">
                404
            </section>
            <section className="text">
                {error}
            </section>
        </div>
        </div>
    );
};

export default NotFound;