const PostCard = (post) => {
    const { userId, id, title, body } = post.post;

    return (
        <div className="bg-zinc-700 rounded-lg p-6 mx-10">
            <p className="text-xl">UserId: {userId}</p>
            <p className="text-xl">Id: {id}</p>
            <p className="text-xl">Title: {title}</p>
            <p className="">Body: {body}</p>
        </div>
    )
}

export default PostCard;
