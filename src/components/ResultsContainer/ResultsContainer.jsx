import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultsContainer.css';

const ResultsContainer = ({ suggestedNames }) => {
    const suggestedNamesJsx = suggestedNames.map((suggestion) => {
        return <NameCard key={suggestion} name={suggestion} />;
    });

    return <div className='results-container'>{suggestedNamesJsx}</div>;
};

export default ResultsContainer;
