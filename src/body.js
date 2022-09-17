import Stories from "./stories.js"
import Posts from "./posts.js"
import Sidebar from "./sidebar.js"

export default function Body(){
    return(
        <main>
            <div className="feed">
                <Stories/>
                <Posts/>
            </div>
            <Sidebar/>
        </main>
    )
}