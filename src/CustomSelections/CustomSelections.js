import React from 'react';
import CustomIndividualSelections from '../CustomIndividualSelections/CustomIndividualSelections';

class CustomSelections extends React.Component {
    render() {
        return (
            <div>
                <CustomIndividualSelections
                    selectedFeatures={this.props.selectedFeatures}
                    featuresAvailable={this.props.featuresAvailable} />
            </div>
        );
    };
}

export default CustomSelections;