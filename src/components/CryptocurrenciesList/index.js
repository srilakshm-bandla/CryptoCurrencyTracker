// Write your JS code here

import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptoCurrencyHeader = () => (
    <div className="list-head-container">
      <p className="coin-type">Coin Type</p>
      <div className="list-head-container">
        <p className="coin-type grow usd-v">USD</p>
        <p className="coin-type grow usd-v">EURO</p>
      </div>
    </div>
  )

  renderCryptoCurrenciesListView = () => {
    const {currencyList} = this.props
    console.log(currencyList)
    return (
      <div className="list-box-container">
        {this.renderCryptoCurrencyHeader()}
        <ul className="currency-list-container">
          {currencyList.map(each => (
            <CryptocurrencyItem key={each.id} itemDetails={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1 className="crypto-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="currency-image"
        />
        {this.renderCryptoCurrenciesListView()}
      </div>
    )
  }
}

export default CryptocurrenciesList
