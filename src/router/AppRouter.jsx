import { Navigate, Route, Routes } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import Login from "../auth/pages/Login";
import Home from "../components/home/Home";

const AppRouter = () => {
    return (
        <Routes>
            <Route
            path="/"
            element={
                <Navigate
                to={"/login"}
                ></Navigate>
            }
            ></Route>
            <Route
            path="/login"
            element={
                <PublicRouter>
                    <Login></Login>
                </PublicRouter>
            }
            ></Route>
            <Route
            path="/home"
            element={
                <PrivateRouter>
                    <Home></Home>
                </PrivateRouter>
            }
            ></Route>
        </Routes>
    )
};

export default AppRouter;