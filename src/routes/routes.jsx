import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Feed from "../pages/Feed";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                index: true,
                element: <Feed></Feed>,
            },
        ]
    }
]);

export default router;