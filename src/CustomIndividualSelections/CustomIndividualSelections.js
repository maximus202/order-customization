import React from 'react';
import slugify from 'slugify';
import CustomSelections2 from '../CustomSelections2/CustomSelections2';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class CustomIndividualSelections extends React.Component {
    render() {
        const { selectedFeatures } = this.props
        const features = Object.keys(this.props.featuresAvailable).map(
            (category, idx) => {
                const categoryHash = category + '-' + idx;
                const itemOptions = this.props.featuresAvailable[category].map(item => {
                    const itemHash = slugify(JSON.stringify(item));
                    const featuresAvailable = Object.keys(
                        this.props.featuresAvailable
                    ).map((feature, idx) => (
                        <div key={itemHash} className="feature__item">
                            <input
                                type="radio"
                                id={itemHash}
                                className="feature__option"
                                name={slugify(feature)}
                                checked={item.name === selectedFeatures[feature].name}
                                onChange={e => this.updateFeature(feature, item)}
                            />
                            <label htmlFor={itemHash} className="feature__label">
                                {item.name} ({USCurrencyFormat.format(item.cost)})
                            </label>
                        </div>
                    ));
                });
            }
        )
        return (
            <fieldset className="feature" key={'categoryHash'}>
                <legend className="feature__name">
                    <h3>{'this.props.feature'}</h3>
                </legend>
                {'this.props.options'}
            </fieldset>
        )
    }
}

export default CustomIndividualSelections;