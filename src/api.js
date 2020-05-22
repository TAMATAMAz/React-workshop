import axios from 'axios'

export const fetchBillionaires = async () => {
  try {
    const billionaires = (
      await axios.get('https://v11v9.sse.codesandbox.io/billionaires')
    ).data
    console.log(billionaires)

    return billionaires
  } catch (err) {}
}
