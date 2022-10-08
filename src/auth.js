import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const auth = getAuth();
export const register = async (email, password) => {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    return user;
}

export default auth;