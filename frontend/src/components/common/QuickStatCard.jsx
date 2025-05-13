export default function QuickStatCard (props) {
    let trend=""
    if (props.trend==="up")
        trend="up";
    else if (props.trend==="down")
        trend="down";
    else if (props.trend==="neutral")
        trend="neutral";
    else if (props.trend==="critical")
        trend="critical";
    return(
        <div className="dashboard-card small">
            <div className="card-header">
                <h3><props.icon /> {props.title}</h3>
            </div>
            <div className="card-content">
                <h2>{props.value}</h2>
                <span className={`stat-${trend}`}>{props.description}</span>
            </div>
        </div>
    )

}