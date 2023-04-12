// Write your code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getCurrenciesData()
  }

  getCurrenciesData = async () => {
    const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'

    const response = await fetch(apiUrl)

    const data = await response.json()
    console.log(data)

    this.setState({
      currencyList: data.map(eachItem => ({
        id: eachItem.id,
        currencyLogo: eachItem.currency_logo,
        currencyName: eachItem.currency_name,
        euroValue: eachItem.euro_value,
        usdValue: eachItem.usd_value,
      })),
      isLoading: false,
    })
  }

  renderCryptocurrenciesList = () => {
    const {currencyList} = this.state
    return <CryptocurrenciesList currencyList={currencyList} />
  }

  renderLoader = () => (
    <div data-testid="loader" className="ring-loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="crypto-currency-tracker-container">
        {isLoading ? this.renderLoader() : this.renderCryptocurrenciesList()}
      </div>
    )
  }
}
export default CryptocurrencyTracker
