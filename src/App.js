import React, { Component } from 'react';
import './App.css';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import CustomOptionsBox from './CustomOptionsBox/CustomOptionsBox';
import CartBox from './CartBox/CartBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //State with initial defaults
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    };
  }

  //Sets new option that is selected
  updateOption = (option, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[option] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    //Takes care of rendering each indiviudal option (form input) and 
    //calling the updateFeature function to update state when clicked
    /*const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
      });
    });*/

    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];
    });

    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    //Holds skeleton of app and cart total
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <CustomOptionsBox
            selectedFeatures={this.state.selected}
            featuresAvailable={this.props.features} />
          <section className="main__summary">
            <CartBox
              selectedFeatures={this.state.selected} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
