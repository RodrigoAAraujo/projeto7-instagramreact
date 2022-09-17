export default function User(props){
    return (    
        <div className="user">
            <img src={props.image}/>
            <h2 className="text">
                <strong>{props.username}</strong>
                <span>
                    {props.name}
                    <ion-icon name="pencil" ></ion-icon>
                </span>
            </h2>
        </div>
    )
}