const PostCard = (post) => {
const {userId, id, title, body} = post.post;

    return (
        <div className="bg-blue-300 p-6 mx-10">
            <h1>PostCard</h1>
            <div>
                <p>UserId: {userId}</p>
                <p>Id: {id}</p>
                <p>Title: {title}</p>
                <p>Body: {body}</p>
            </div>
        </div>
    )
}

export default PostCard;
