export const userLogin = (email, password) => {
    try {
        const result = {
            email,
            password
        };
        console.log("Usuario: ", result);
        const { email } = result;

        return {
            ok: true,
            email,
        };
    } catch (error) {
        return {
            ok: false,
            errorMessage: "Ha ocurrido un error inesperado",
        };
    }
};