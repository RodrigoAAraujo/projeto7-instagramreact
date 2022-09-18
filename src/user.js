import React, {useState} from "react";

export default function User(){

    const InitialUserInfo = {name: "InitialName", username: "InitialUserName", image: "/images/users/catanacomics 1.png"}
    const [UserInfo, setUser] = useState(InitialUserInfo)

    function changeImage(){
        setUser( UserInfo => ({
            name: UserInfo.name,
            username: UserInfo.username,
            image: prompt("Troque sua imagem de perfil")
        }))
    }

    function chanceUserName(){
        let valueUserName = prompt("Coloque o nome de usuário:")
        let valueName = prompt ("Coloques seu nome:")
        setUser( UserInfo => ({
            name: valueName,
            username: valueUserName,
            image: UserInfo.image
        }))
    }

    return (    
        <div className="user">
            <img onClick={() => changeImage()} src={UserInfo.image}/>
            <h2 className="text">
                <strong>{UserInfo.username}</strong>
                <span>
                    {UserInfo.name}
                    <ion-icon name="pencil" onClick={()=> chanceUserName()}></ion-icon>
                </span>
            </h2>
        </div>
    )
}