export default function Stories(){
    const stories= [
        {user: {name:"9gag", img:"./images/users/9gag 1.png"}},
        {user: {name:"barked", img:"./images/users/barked 1.png"}},
        {user: {name:"filomoderno", img:"./images/users/filomoderna 1.png"}},
        {user: {name:"memeriagoumert", img:"./images/users/memeriagourmet 1.png"}},
        {user: {name:"9gag", img:"./images/users/9gag 1.png"}},
        {user: {name:"barked", img:"./images/users/barked 1.png"}},
        {user: {name:"filomoderno", img:"./images/users/filomoderna 1.png"}},
        {user: {name:"memeriagoumert", img:"./images/users/memeriagourmet 1.png"}},
        {user: {name:"memeriagoumert", img:"./images/users/memeriagourmet 1.png"}},
        {user: {name:"9gag", img:"./images/users/9gag 1.png"}},
        {user: {name:"barked", img:"./images/users/barked 1.png"}},
        {user: {name:"filomoderno", img:"./images/users/filomoderna 1.png"}},
        {user: {name:"memeriagoumert", img:"./images/users/memeriagourmet 1.png"}},
    ]

    return(
        <div className="stories">
            {stories.map((s) => <Story img ={s.user.img} name= {s.user.name}/>)}
            <div className="pointer">
            <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Story(props){
    return(
        <div className="story"> 
            <div className="image">
                <img src={props.img}/>
            </div>
            <div className="user">
                <p>{props.name}</p>
            </div>
        
        </div>
    )
}
