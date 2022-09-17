export default function Sugestions(){

    const UserList = [
        {username:"9gag", image : "./images/users/9gag 1.png"},
        {username:"barked", image : "./images/users/barked 1.png"},
        {username:"catanomics", image : "./images/users/catanacomics 1.png"},
        {username:"filomoderna", image : "./images/users/filomoderna 1.png"},
        {username:"memeriagourmet", image : "./images/users/memeriagourmet 1.png"},
        {username:"respondeai", image : "./images/users/respondeai 1.png"},
        {username:"meowed", image : "./images/users/meowed 1.png"},
        {username:"nathan", image : "./images/users/nathanwpylestrangeplanet 1.png"},
    ]

    return(
        <div  className="sugestions">
            <div className="title"> 
                <p>Sugestões para você</p>
                <a><strong>Ver tudo</strong></a>
            </div>
            {UserList.map((u) => <Sugestion 
                username={u.username} 
                image={u.image}
            />)}
        </div>
    )
}

function Sugestion(props){
    return(
        <div className="sugestion">
            <div className="user">
                <img src={props.image}/>
                <div className="text">
                    <h1>{props.username}</h1>
                    <p>Segue você</p>
                </div>
            </div>
            <div className="follow">
                <p>Seguir</p>
            </div>
        </div>
    )

}
