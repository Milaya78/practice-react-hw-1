import TransactionHistoryItem from "../TransactionHistoryIten/TransactionHistoryItem";

const TransactionHistory = ({ items }) => {
  console.log(items);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <TransactionHistoryItem
                key={item.id}
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
