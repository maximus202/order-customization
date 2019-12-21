import React from 'react';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class CustomSelections extends React.Component {
    render() {
        const options = Object.keys(this.props.optionsAvailable).map((option, idx) => {
            //Callback function being ran is storing feature-id in featureHash
            const optionHash = option + '-' + idx;
            //Callback function then takes each feature category and runs another callback function
            const options = this.props.optionsAvailable[option].map(item => {
                //callback function takes each item in the category and creates
                //itemHash variable which is a slug string of the item.
                const itemHash = slugify(JSON.stringify(item));
                return (
                    //Div holds every individual item with key = itemHash
                    //radio button is placed in div for the item
                    //id of radio button is itemHash
                    //name att is slug version of feature category name
                    //checked att happens when the item name is equal to name
                    //of selected feature in state.
                    //When change happens in input, callback function calls
                    //updateFeature(feature, item) in App.js
                    //Label contains the itemHash to identify the item and inside,
                    //The name of the item and item cost formatted into US currency.
                    <div key={itemHash} className="option__item">
                        <input
                            type="radio"
                            id={itemHash}
                            className="option__option"
                            name={slugify(option)}
                            checked={item.name === this.props.selectedOption[option].name}
                            onChange={e => this.updateOption(option, item)}
                        />
                        <label htmlFor={itemHash} className="option__label">
                            {item.name} ({USCurrencyFormat.format(item.cost)})
                        </label>
                    </div>
                );
            });

            //Fieldset for each category and product options displayed
            return (
                <fieldset className="option" key={optionHash} >
                    <legend className="option__name">
                        <h3>{option}</h3>
                    </legend>
                    {options}
                </fieldset>
            );
        });
    }
}

export default CustomSelections;