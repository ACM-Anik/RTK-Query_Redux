const PostCard = ({post}) => {
    // const {userId, id, title, body} = post;
    // console.log(post);

    return (
        <div className="bg-zinc-800 rounded-lg p-10 mx-10">
            <p className="text-xl">UserId: {post?.userId}</p>
            <p className="text-xl">Id: {post?.id}</p>
            <h2 className="text-xl">{post?.title}</h2>
            <p className="">Body: {post?.body}</p>
        </div>
    )
}

export default PostCard;
