import React from 'react';

class CustomSelections2 extends React.Component {
    render() {
        console.log(this.props);
        return (
            <fieldset className="feature" key={'this.props.featureHash'}>
                <legend className="feature__name">
                    <h3>{'this.props.feature'}</h3>
                </legend>
                {'this.props.options'}
            </fieldset>
        );
    };
}

export default CustomSelections2;