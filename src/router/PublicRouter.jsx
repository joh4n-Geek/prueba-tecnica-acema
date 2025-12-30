import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";

const PublicRouter = ({ children }) => {
    const { isLogged } = useContext(AuthContext);

    return !isLogged ? children : children;
};

export default PublicRouter;