import './SearchBox.css';
import React from 'react';

export default class SearchBox extends React.Component {
    constructor(props) {
        super();
        this.handleInputChange = props.onInputChange;
    }
    render = () => {
        return (
            <div className='search-container'>
                <input
                    placeholder='Type keywords'
                    className='search-input'
                    onChange={(event) =>
                        this.handleInputChange(event.target.value)
                    }
                />
            </div>
        );
    };
}
