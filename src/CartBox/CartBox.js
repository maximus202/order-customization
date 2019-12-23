import React from 'react';
import CartSummary from '../CartSummary/CartSummary';

class CartBox extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h2>Your cart</h2>
                <CartSummary
                    selectedFeatures={this.props.selectedFeatures} />
                {'summary'}
            </div>
        )
    }
}

export default CartBox;