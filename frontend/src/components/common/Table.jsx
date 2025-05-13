export default function Table (props) {

  const type = props.amountType === "positive" ? "positive" : "negative";

  const status = props.status==="completed"? "completed":props.status==="failed"? "failed":"pending";

    return (
        <tr>
            <td>{props.time}</td>
            <td>{props.account.number} ({props.account.holder})</td>
            <td>{props.type}</td>
            <td className={`amount-${type}`}>{props.amount}</td>
            <td className={`status-${status}`}>{props.status}</td>
        </tr>
    )
}