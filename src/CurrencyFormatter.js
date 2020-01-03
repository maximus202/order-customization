import React from 'react';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class CurrencyFormatter extends React.Component {
    render() {
        return (
            <>
                {USCurrencyFormat.format(this.props.amount)}
            </>
        )
    }
}

export default CurrencyFormatter;