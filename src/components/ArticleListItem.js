import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral'

const ArticleListItem = ({ id, title, createdAt }) => (
    <Link className="list-item" to={`/edit/${id}`} >
        <div className="list-item-content">
            <h3 className="list-item__title">{title}</h3>
            <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
        </div>
    </Link>

)

export default ArticleListItem;

