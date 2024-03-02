import PostCard from "../components/layouts/PostCard";
import { useGetPostsQuery } from "../redux/features/api/baseApi";

const Feed = () => {

    const { data: posts, isLoading, isError, error } = useGetPostsQuery(); //* Returns an object

    if(isLoading) {
         return <p className="text-9xl text-zinc-600">Loading...</p>
    }

    return (
        <div>
            <h1 className="text-center text-5xl">Feed</h1>
            <div className="flex flex-col justify-center items-center">
                {posts?.map(post => <PostCard key={post.id} post={post}></PostCard>)}
                
            </div>
        </div>
    )
}

export default Feed;
