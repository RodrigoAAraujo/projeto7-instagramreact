import React, { useState } from "react"

export default function Posts() {

    const posts = [
        {
            id: 1, sentUser: { image: "./images/users/respondeai 1.png", name: "GomesGastro" }, postImage: "./images/posts/amongus.png",
            commentUser: { image: "./images/users/9gag 1.png", name: "Leonidas o Rei da Macedônia" }, likes: "1234"
        },
    
        {
            id: 2, sentUser: { image: "./images/users/respondeai 1.png", name: "meowed" }, postImage: "./images/posts/dog 1.png",
            commentUser: { image: "./images/users/9gag 1.png", name: "Leonidas" }, likes: "365"
        },
    
        {
            id: 3, sentUser: { image: "./images/users/wawawiwacomicsa 1.png", name: "GomesGago" }, postImage: "./images/posts/gato-telefone 1.png",
            commentUser: { image: "./images/users/respondeai 1.png", name: "Leonidas mais uma vez" }, likes: "12456"
        },
    
        {
            id: 4, sentUser: { image: "./images/users/9gag 1.png", name: "Irmão do Gomes" }, postImage: "/images/posts/gato-telefone 1.png",
            commentUser: { image: "./images/users/9gag 1.png", name: "Leonidas de Novo" }, likes: "152"
        },
    ]

    return (
        <div>
            {posts.map((p) =>
                <Post
                    id={p.id}
                    userImage={p.sentUser.image}
                    username={p.sentUser.name}
                    postImg={p.postImage}
                    commentUserImage={p.commentUser.image}
                    commentUserName={p.commentUser.name}
                    likes={p.likes}
                    saved={p.saved}
                    liked={p.liked}
                />)}
        </div>
    )

}

function Post(props) {
    const [liked,setLike] = useState(false)
    const [saved,setSave] = useState(false)

    function like(){
        if (liked){
            setLike(false)
        }else{
            setLike(true)
        }
    }

    function save(){
        if (saved){
            setSave(false)
        }else{
            setSave(true)
        }
    }

    return (
        <div className={(liked && saved) ? "liked post saved" : 
            (saved) ? "saved post" : (liked) ? "liked post" : "post"}>

            <div className="top">
                <div className="user">
                    <img src={props.userImage} />
                    <h1>{props.username}</h1>
                </div>

                <div className="actions">
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </div>
            </div>

            <div className="content">
                <img src={props.postImg} />
            </div>

            <div className="bottom">

                <div className="actions">
                    <div>
                        <div className="like" onClick={() => like()}>
                            <ion-icon name="heart"></ion-icon>
                            <ion-icon name="heart-outline"></ion-icon>
                        </div>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div className="save" onClick={() => save()}>
                        <ion-icon name="bookmark"></ion-icon>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="likes">
                    <img src={props.commentUserImage} />
                    <p>
                        Curtido por <strong>{props.commentUserName} </strong>
                        e <strong>outras {(liked) ? Number(props.likes)+1 : props.likes} pessoas</strong>
                    </p>
                </div>
            </div>

        </div>
    )

}