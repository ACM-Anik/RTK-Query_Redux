import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Feed from "../pages/Feed";
// import PostCard from "../components/layouts/PostCard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                index: true,
                element: <Feed></Feed>,
            },
            // {
            //     index: true,
            //     element: <PostCard></PostCard>,
            // },
        ]
    }
]);

export default router;