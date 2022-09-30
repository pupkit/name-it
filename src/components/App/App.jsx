import React from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            headerText: 'Name it!',
            headerExpanded: true,
        };
    }

    handleInputChange = (searchString) => {
        this.setState({
            ...this.state,
            headerExpanded: !searchString,
        });
        // console.log(!searchString);
    };

    render() {
        return (
            <>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText}
                />
                <SearchBox onInputChange={this.handleInputChange} />
            </>
        );
    }
}

export default App;
