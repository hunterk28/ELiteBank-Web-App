export default function StatCard (props) {
    return(
        <>
            <props.icon />
            <div>
                <span>{props.title}</span>
                <h3>{props.info}</h3>
            </div>
        </>
    )

}