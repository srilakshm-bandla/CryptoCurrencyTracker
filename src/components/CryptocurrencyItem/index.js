// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {itemDetails} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = itemDetails
  return (
    <li className="currency-list-item">
      <div className="logo-name-container">
        <img
          src={currencyLogo}
          alt={currencyName}
          className="currency-item-image"
        />
        <p className="cname">{currencyName}</p>
      </div>
      <div className="currency-sub-container">
        <p className="currency-usd">{usdValue}</p>
        <p className="currency-usd">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
