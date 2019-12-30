import React from 'react';
import Features from '../Features/Features';

class CustomFeaturesBox extends React.Component {
    render() {
        return (
            <div>
                <h2>Customize your laptop</h2>
                <form>
                    <Features
                        selectedFeatures={this.props.selectedFeatures}
                        featuresAvailable={this.props.featuresAvailable}
                        handleUpdate={this.props.handleUpdate} />
                </form>
            </div >
        );
    }
}

export default CustomFeaturesBox;