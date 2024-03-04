const PostCard = ({ post }) => {
    // const {userId, id, title, body} = post;
    // console.log(post);

    return (
        <div className="bg-zinc-800 rounded-lg p-10 mx-10">
            <div>
                <p className="text-xs">UserId: {post?.userId}</p>
                <p className="text-xs">Id: {post?.id}</p>
            </div>
            <h2 className="text-2xl uppercase my-2">{post?.title}</h2>
            <p className="text-zinc-300">{post?.body}</p>
        </div>
    )
}

export default PostCard;
