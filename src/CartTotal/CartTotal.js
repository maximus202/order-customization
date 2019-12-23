import React from 'react';

class CartTotal extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {'USCurrencyFormat.format(total)'}
                </div>
            </div>
        )
    }
}

export default CartTotal;