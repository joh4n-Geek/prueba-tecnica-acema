import { AuthContext } from "../../auth/context/AuthContext";

const Home = () => {
    const { user } = useContext(AuthContext);

    return (
        <>
        <div>
            <h1>Bienvenido!</h1>
        </div>
        </>
    )
};

export default Home;