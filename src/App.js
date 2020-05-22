import React from 'react'
import { fetchBillionaires } from './api'

function BillionaireList(props) {
  return (
    <ol>
      {props.billionaires.map((person) => {
        return (
          <div key={person.id}>
            <li>😀 {person.name}</li>{' '}
            <ul>
              <li>
                💰 มูลค่าทรัพย์สินทั้งหมด{' '}
                {`${person.totalAsset} ${person.assetUnit}`}
              </li>
              <li>🏛 ธุรกิจ {person.businessType}</li>
            </ul>
            <br />
          </div>
        )
      })}
    </ol>
  )
}
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
        <BillionaireList billionaires={this.state.billionaires} />
      </div>
    )
  }
}