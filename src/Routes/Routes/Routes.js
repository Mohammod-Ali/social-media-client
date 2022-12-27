import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import About from "../../Pages/About/About"
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login"
import Media from "../../Pages/Media/Media"
import Message from "../../Pages/Message/Message"
import SignUp from "../../Pages/SignUp/SignUp"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/media',
                element: <Media></Media>
            },
            {
                path: '/message',
                element: <Message></Message>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
])