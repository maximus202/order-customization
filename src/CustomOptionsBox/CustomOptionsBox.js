import React from 'react';
import CustomSelections from '../CustomSelections/CustomSelections';

class CustomOptionsBox extends React.Component {
    render() {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <CustomSelections selectedOption={this.props.selected} optionsAvailable={this.props.features} />
            </form>
        );
    }
}

export default CustomOptionsBox;