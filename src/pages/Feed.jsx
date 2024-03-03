import PostCard from "../components/layouts/PostCard";
import { useGetPostsQuery } from "../redux/features/api/baseApi";

const Feed = () => {

    const { data: posts, isLoading, isError, error } = useGetPostsQuery(); //* Returns an object

    if (isLoading) {
        return <p className="text-center my-auto text-8xl text-zinc-800">Loading...</p>
    }

    console.log('posts', posts);
    console.log('iserror', isError);
    console.log('error', error);

    return (
        <div className="bg-zinc-300">
            <h1 className="text-center text-5xl">Feed</h1>
            <div className="flex flex-col gap-3 justify-center items-center">
                {posts?.map((post) => <PostCard key={post.id} post={post}></PostCard>)}
            </div>
        </div>
    )
}

export default Feed;
