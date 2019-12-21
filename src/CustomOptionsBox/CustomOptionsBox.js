import React from 'react';
import CustomSelections from '../CustomSelections/CustomSelections';

class CustomOptionsBox extends React.Component {
    render() {
        console.log(this.props)
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <CustomSelections selectedOption={this.props.selectedOption} optionsAvailable={this.props.optionsAvailable} />
            </form>
        );
    }
}

export default CustomOptionsBox;