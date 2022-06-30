import React from 'react';
import './Element.css'
import PropTypes from 'prop-types';

export default function Element({
    name,
    atomicNumber,
    flameColor,
    showProcedures
}) {

    Element.propTypes = {
        name: PropTypes.string.isRequired,
        atomicNumber: PropTypes.number.isRequired,
        flameColor: PropTypes.string.isRequired,
        showProcedures: PropTypes.func.isRequired
    }
    
    return (
        <button onClick={() => showProcedures()} className={flameColor}>{name} - {atomicNumber}</button>
    )
}

