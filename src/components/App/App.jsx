import React from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            headerText: 'Name it!',
            headerExpanded: true,
            suggestedNames: [],
        };
    }

    handleInputChange = (searchString) => {
        this.setState({
            ...this.state,
            headerExpanded: !searchString,
            suggestedNames: searchString ? name(searchString) : [],
        });
    };

    render() {
        return (
            <>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText}
                />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </>
        );
    }
}

export default App;
