import React, { Component } from 'react';
import './App.css';
import FormsPage from './Form';
import Web3 from 'web3';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import * as providerActionCreator from './actions-provider';

class App extends Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   const { actions } = this.props

  //   if (typeof window.web3 != 'undefined') {
  //     const currentProvider = window.web3.currentProvider
  //     const web3Provider = new Web3(currentProvider)
  //     actions.provider.setProvider(web3Provider)
  //   }
  // }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to dPanc</h1>
        </header>
        <p className="App-intro">
          dPanc is a tool that allows individuals with Type 1 Diabetes
          to be able to gain more insight around their own data.
        </p>

        <FormsPage />

      </div>
    );
  }
}

// function mapDispatchtoProps(dispatch) {
//   return{
//     actions: {
//       providers: bindActionCreators (providerActionCreator, dispatch)
//     }
//   }
// }

// export default connect(null, mapDispatchtoProps) (App);

export default App;
