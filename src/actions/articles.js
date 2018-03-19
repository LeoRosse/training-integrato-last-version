import uuid from 'uuid';
import database from '../firebase/firebase';

//ADD_ARTICLE
export const addExpense = (article) => ({
    type: 'ADD_ARTICLE',
    article
});

export const startAddArticle = (articleData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid; //per aggiungere expense private!! da agggiungere al database.ref
        const {
        title = '',
            note = '',
            createdAt = 0
      } = articleData;
        const article = { title, note, createdAt };

        return database.ref(`users/${uid}/articles`).push(article).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...article
            }));
        });
    };
};

//REMOVE_EXPENSE
export const removeArticle = ({ id } = {}) => ({
    type: 'REMOVE_ARTICLE',
    id
});

export const startRemoveArticle = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/articles/${id}`).remove().then(() => {
            dispatch(removeArticle({ id }));
        })
    }
};

//EDIT_EXPENSE
export const editArticle = (id, updates) => ({
    type: 'EDIT_ARTICLE',
    id,
    updates
});

export const startEditArticle = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/articles/${id}`).update(updates).then(() => {
            dispatch(editArticle(id, updates));
        })
    }
}

//SET_EXPENSES
export const setArticles = (articles) => ({
    type: 'SET_ARTICLES',
    articles
});

export const startSetArticles = () => {
    return (dispatch, getState) => { //così sto chiamando il metodo asincronicamente
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/articles`) //così sono dentro firebase
            .once('value').then((snapshot) => { //adesso sono nel success case
                const articles = [];
                snapshot.forEach((childSnapshot) => {
                    articles.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });
                dispatch(setArticles(articles));
            })
    }
};