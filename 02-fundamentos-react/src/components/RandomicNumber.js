import React from 'react';

export default function RandomicNumber(props) {

    const { min, max } = props;

    const random = parseInt(Math.random() * (max - min)) + min;

    return (
        <h1>{random}</h1>
    );
};