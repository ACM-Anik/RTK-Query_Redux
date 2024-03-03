import PostCard from "../components/layouts/PostCard";
import { useGetPostByIdQuery, useGetPostsQuery } from "../redux/features/api/baseApi";
import { useForm } from "react-hook-form";

const Feed = () => {

    // const { data: posts, isLoading, isError, error } = useGetPostsQuery(); //* Returns an object

    const { data: post, isLoading, isError, error } = useGetPostByIdQuery(1);

    if (isLoading) {
        return <p className="text-center my-auto text-8xl text-zinc-300">Loading...</p>
    }

    if (!isLoading && isError) {
        return <p className="text-8xl text-zinc-300">Something went wrong!</p>
    }

    // console.log('iserror', isError);
    // console.log('error', error);

    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }


    return (
        <div>
            <h1 className="text-center text-5xl my-6">Feed</h1>
            <div className="flex flex-col gap-3">
                {/* {posts?.map((post) => <PostCard key={post.id} post={post}></PostCard>)} */}
                <PostCard key={post.id} post={post}></PostCard>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <input className="" defaultValue="test" {...register("example")} /> */}

                    <input className="" {...register("exampleRequired", { required: true })} />

                    {/* {errors.exampleRequired && <span>This field is required</span>} */}

                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}

export default Feed;
