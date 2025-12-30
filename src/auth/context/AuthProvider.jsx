import { AuthContext } from "./AuthContext";
import { useReducer } from "react";
import { authReducer } from "../reducer/authReducer";
import { authTypes} from "../types/authTypes";
import { userLogin} from "../../helpers/login";

const initialState = {
    isLogged: false,
};

const initialize = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        isLogged: !!user,
        user
    };
};

export const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(
        authReducer,
        initialState,
        initialize
    );

    const loginUser = (email = "", password = "") => {
        const { ok, id, photo, name, errorMessage } = userLogin(email, password);

        if (!ok) {
            dispatch({ type: authTypes.error, payload: { errorMessage }});
            return false;
        }

        const payload = { id, photo, name, email };
        const action = {
            type: authTypes.login,
            payload,
        };
        localStorage.setItem("user", JSON.stringify(payload));
        dispatch(action);

        return true;
    };

    return (
        <AuthContext.Provider
            value={{
                ...authState,
                loginUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};