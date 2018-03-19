import { firebase, auth } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = ({ email, password }) => {
    return () => {
        return auth.signInWithEmailAndPassword(email, password);
    };
};

export const logout = () => ({
    type: 'LOGOUT',
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};