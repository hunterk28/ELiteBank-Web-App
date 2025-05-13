export default function Card (props) {
    return(
        <>
            <div className="icon">{props.icon? <props.icon />:null}</div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </>
    )

}