export default function Navbar() {
    return (
        <header>
            <div className="container">

                <div className="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div className="separador"></div>
                    <img src="./images/logo 1.png" />
                </div>

                <div className="search">
                    <input placeholder="Pesquisar"></input>
                </div>

                <div className="icons">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>

                <Mobile/>
            </div>
        </header>
    )
}

function Mobile() {
    return (
        <div className="mobile">
            <div className="icons-mobile">
                <ion-icon name="logo-instagram"></ion-icon>
                <img src="./images/logo 1.png" />
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>

            <div className="bottom-mobile">
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </div>
    )
}