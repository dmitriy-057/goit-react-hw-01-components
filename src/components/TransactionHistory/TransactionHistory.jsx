import PropTypes from 'prop-types'
import css from './TransactionHistory.module.css'
export const TransactionHistory = ({transactions}) => {
    return <table className={css.transactionTable}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
    {transactions.map(({id, type,amount, currency}) => <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td className={css.currency}>{currency}</td>
      </tr>)}
    </tbody>
  </table>
}

TransactionHistory.PropType = {items: PropTypes.arrayOf(PropTypes.exact({
    type: PropTypes.string,
    amount: PropTypes.string,
    currency:PropTypes.string
}))}