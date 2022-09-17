import User from "./user"
import Sugestions from "./sugestions"
import React, { useState } from "react"


export default function Sidebar() {
    const InitialUserInfo = { name: "InitialName", username: "InitialUserName", image: "/images/users/catanacomics 1.png" }
    const [UserInfo, setUser] = useState(InitialUserInfo)

    return (
        <div className="sidebar">
            <User name={UserInfo.name} username={UserInfo.username} image={UserInfo.image} />
            <Sugestions />

            <p className="copyright">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                Ter mos • Localizações • Contas mais relevantes • Hashtags •
                Idioma
            </p>
            <p className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </p>
        </div>
    )
}