import moment from 'moment';

//Get Visible Expenses
export default (articles, { text, sortBy, startDate, endDate }) => {
    return articles.filter((article) => {
        /*         const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
                const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate; */
        const createdAtMoment = moment(article.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = article.title.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => { //così facendo li ordino in ordine temporale!!!!
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        }
        return 1
    })
};