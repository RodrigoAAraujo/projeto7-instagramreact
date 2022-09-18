import User from "./user"
import Sugestions from "./sugestions"
import React from "react"


export default function Sidebar() {
    return (
        <div className="sidebar">
            <User/>
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