import React from 'react';
import Options from '../Options/Options';

class Features extends React.Component {
    render() {
        const featureList = Object.keys(this.props.featuresAvailable).map((feature, index) => {
            return <Options
                key={index}
                feature={feature}
                handleUpdate={this.props.handleUpdate}
                selectedFeatures={this.props.selectedFeatures}
                featuresAvailable={this.props.featuresAvailable} />
        })
        return (
            <fieldset>
                <legend>Features Available</legend>
                {featureList}
            </fieldset>
        )
    }
}

export default Features;