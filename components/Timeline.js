import Post from "./Post";


function Timeline() {
    return (
        <ul className="p-4 lg:p-8 bg-gray-100 text-gray-800">
            <li>
                <Post/>
            </li>
            <li>
                <Post/>
            </li>
            <li>
                <Post/>
            </li>
            <li>
                <Post/>
            </li>
        </ul>
    )
}

export default Timeline;
