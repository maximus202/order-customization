import React from 'react';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class Option extends React.Component {
    render() {
        const feature = this.props.feature;
        const item = this.props.option;
        return (
            <div>
                <input
                    type="radio"
                    id={this.props.option.name}
                    className="feature__option"
                    name={slugify(this.props.option.name)}
                    checked={this.props.option.name === this.props.selectedFeatures[feature].name}
                    onChange={this.props.handleUpdate}
                />
                <label htmlFor={this.props.option.name} className="feature__label">
                    {this.props.option.name} ({USCurrencyFormat.format(this.props.option.cost)})
                </label>
            </div>
        )
    }
}

export default Option;