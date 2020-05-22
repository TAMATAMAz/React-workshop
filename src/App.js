import React from 'react'
import { fetchBillionaires } from './api'

export default class App extends React.Component {
  state = {
    billionaires: [],
  }

  async componentDidMount() {
    this.setState({
      billionaires: await fetchBillionaires(),
    })
  }

  render() {
    return (
      <div>
        <ol>
          {this.state.billionaires.map((person) => {
            return (
              <React.Fragment key={person.id}>
                <li>🤴🏻 {person.name}</li>{' '}
                <ul>
                  <li>
                    💰 มูลค่าทรัพย์สินทั้งหมด{' '}
                    {`${person.totalAsset} ${person.assetUnit}`}
                  </li>
                  <li>🏛 ธุรกิจ {person.businessType}</li>
                </ul>
                <br />
              </React.Fragment>
            )
          })}
        </ol>
      </div>
    )
  }
}