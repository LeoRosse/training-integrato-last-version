//Default State
const articlesReducerDefaultState = [];

//Expenses Reducer
const articlesReducer = (state = articlesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_ARTICLE':

            return [...state, action.article];//SPREAD OPERATOR
        case 'REMOVE_ARTICLE':
            return state.filter(({ id }) =>
                id !== action.id //mi ritorna true o false, quindi qua gli sto dicendo di ritornarmi false tutte le volte che l'id da cancellare è diverso dall'id che trova durante il filtraggio
            );
        case 'EDIT_ARTICLE':
            return state.map((article) => {
                if (article.id === action.id) {
                    return {
                        ...article,
                        ...action.updates // voglio sovrascrivere tutto così, quello che gli passo sotto
                    }
                }
                else { return article };
            });
        case 'SET_ARTICLES':
            return action.articles;
        default:
            return state;
    }
};

export default articlesReducer;