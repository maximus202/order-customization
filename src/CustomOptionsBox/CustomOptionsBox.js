import React from 'react';
import CustomIndividualSelections from '../CustomIndividualSelections/CustomIndividualSelections';

class CustomOptionsBox extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <form className="main__form">
                    <h2>Customize your laptop</h2>
                    <CustomIndividualSelections
                        selectedFeatures={this.props.selectedFeatures}
                        featuresAvailable={this.props.featuresAvailable} />
                </form>
            </div >
        );
    }
}

export default CustomOptionsBox;