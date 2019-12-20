import React from 'react';

class CustomSelections extends React.Component {
    render() {
        //Object.key takes the features in index.js and returns array the object's 
        //own enumerable property names. .Map() runs a function on each feature.
        const features = Object.keys(this.props.features).map((feature, idx) => {
            //Callback function being ran is storing feature-id in featureHash
            const featureHash = feature + '-' + idx;
            //Callback function then takes each feature category and runs another callback function
            const options = this.props.features[feature].map(item => {
                //callback function takes each item in the category and creates
                //itemHash variable which is a slug string of the item.
                const itemHash = slugify(JSON.stringify(item));
                return (
                    //Div holds every individual item with key = itemHash
                    //radio button is placed in div for the item
                    //id of radio button is itemHash
                    //name att is slug version of feature category name
                    //
                    <div key={itemHash} className="feature__item">
                        <input
                            type="radio"
                            id={itemHash}
                            className="feature__option"
                            name={slugify(feature)}
                            checked={item.name === this.state.selected[feature].name}
                            onChange={e => this.updateFeature(feature, item)}
                        />
                        <label htmlFor={itemHash} className="feature__label">
                            {item.name} ({USCurrencyFormat.format(item.cost)})
                        </label>
                    </div>
                );
            });

            //Fieldset for each category and product options displayed
            return (
                <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                        <h3>{feature}</h3>
                    </legend>
                    {options}
                </fieldset>
            );
        });
    }
}

export default CustomSelections;