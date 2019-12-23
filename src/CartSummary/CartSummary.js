import React from 'react';
import CartTotal from '../CartTotal/CartTotal';

class CartSummary extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <div className="summary__option" key={'featureHash'}>
                    <div className="summary__option__label">{'feature'} </div>
                    <div className="summary__option__value">{'selectedOption.name'}</div>
                    <div className="summary__option__cost">
                        {'USCurrencyFormat.format(selectedOption.cost)'}
                    </div>
                </div>
                <CartTotal
                    selectedFeatures={this.props.selectedFeatures} />
            </div>
        )
    }
}

export default CartSummary;