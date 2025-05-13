export default function TableCostumerAccounts (props) {
  
    const status = props.status==="active"? "active":"inactive";
  
      return (
            <tr>
                <td>{props.accountNumber}</td>
                <td>{props.holderName}</td>
                <td>{props.type}</td>
                <td>{props.openDate}</td>
                <td className={`status-${status}`}>{props.status}</td>
                <td>${props.balance}</td>
                <td>
                <button className="action-btn view">View</button>
                <button className="action-btn edit">Edit</button>
                </td>
            </tr>
      )
  }