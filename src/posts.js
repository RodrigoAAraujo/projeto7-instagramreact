export default function Posts(){

    const posts = [
        {sentUser :{image: "./images/users/respondeai 1.png", name:"GomesGastro"}, postImage:"./images/posts/amongus.png", 
        commentUser :{image: "./images/users/9gag 1.png", name:"Leonidas o Rei da Macedônia" }, likes:"1234"},

        {sentUser :{image: "./images/users/respondeai 1.png", name:"meowed"}, postImage:"./images/posts/dog 1.png", 
        commentUser :{image: "./images/users/9gag 1.png", name:"Leonidas" }, likes:"365"},

        {sentUser :{image: "./images/users/wawawiwacomicsa 1.png", name:"GomesGago"}, postImage:"./images/posts/gato-telefone 1.png", 
        commentUser :{image: "./images/users/respondeai 1.png", name:"Leonidas mais uma vez" }, likes:"12456"},

        {sentUser :{image: "./images/users/9gag 1.png", name:"Irmão do Gomes"}, postImage:"/images/posts/gato-telefone 1.png", 
        commentUser :{image: "./images/users/9gag 1.png", name:"Leonidas de Novo" }, likes:"152"},
    ]

    return(
        <div>
            {posts.map((p) => 
            <Post 
                userImage={p.sentUser.image}
                username={p.sentUser.name}
                postImg={p.postImage}
                commentUserImage={p.commentUser.image}
                commentUserName={p.commentUser.name}
                likes= {p.likes}
            />)}
        </div>
    )

}

function Post(props){
    return(
        <div className="post">

            <div className="top">
                <div className="user">
                    <img src={props.userImage}/>
                    <h1>{props.username}</h1>
                </div>
                <div className="actions">
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </div>
            </div>

            <div className="content">
                <img src={props.postImg}/>
            </div>

            <div className="bottom">
                <div className="actions">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon name="bookmark-outline"></ion-icon>                
                </div>
                <div className="likes">
                    <img src={props.commentUserImage}/>
                    <p>
                        Curtido por <strong>{props.commentUserName} </strong> 
                        e <strong>outras {props.likes - 1} pessoas</strong>
                    </p>
                </div>
            </div>

        </div>
    )

}