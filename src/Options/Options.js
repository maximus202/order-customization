import React from 'react';
import Option from '../Option/Option';

class Options extends React.Component {
    render() {
        const feature = this.props.feature;
        const optionsList = this.props.featuresAvailable[this.props.feature].map((option, index) => {
            return <Option
                key={index}
                feature={feature}
                option={option}
                handleUpdate={this.props.handleUpdate}
                selectedFeatures={this.props.selectedFeatures}
                featuresAvailable={this.props.featuresAvailable} />
        })
        return (
            <div>
                <h3>{this.props.feature}</h3>
                {optionsList}
            </div>
        );
    }
}

export default Options;