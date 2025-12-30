const apiUrl = "https://randomuser.me/api/?results=100";

export const getUserByEmail = async (email, password) => {
    try {
        const response = await fetch(apiUrl);
        const { data } = await response.json();
        console.log(data);
        // return data.filter(user => user. === email);
    } catch (error) {
        console.error("Error consultando el usuario");
    }
};