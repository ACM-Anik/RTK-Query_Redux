import { useForm } from "react-hook-form";
import PostCard from "../components/layouts/PostCard";
import { useGetPostByIdQuery, useGetPostsQuery, useSetPostMutation } from "../redux/features/api/baseApi";

const Feed = () => {
    const { register, handleSubmit } = useForm();

    // const { data: posts, isLoading, isError, error } = useGetPostsQuery(); //* Returns an object

    const { data: post, isLoading, isError, error } = useGetPostByIdQuery(1);

    const [setPost, {data: postData}] = useSetPostMutation(); // Array-->[function, object] returned by mutation


    const onSubmit = (data) => {
        setPost(data);
    };

    console.log(postData);

    if (isLoading) {
        return <p className="text-center m-auto text-8xl text-zinc-300">Loading...</p>
    };

    if (!isLoading && isError) {
        return <p className="text-center m-auto text-8xl text-zinc-300">Something went wrong!</p>
    };


    return (
        <div>
            <h1 className="text-center text-5xl my-6">Feed</h1>
            <div className="flex flex-col gap-3">
                <form className="flex gap-3 m-10" onSubmit={handleSubmit(onSubmit)}>

                    <input className="w-full text-zinc-300 bg-zinc-800 rounded-md" type="text" {...register("post", { required: true })} />

                    <button type="submit" className="bg-zinc-800 text-lg p-3 border border-zinc-300 rounded-md">Post</button>
                </form>

                {/* {posts?.map((post) => <PostCard key={post.id} post={post}></PostCard>)} */}
                <PostCard key={post.id} post={post}></PostCard>
            </div>
        </div>
    )
}

export default Feed;
