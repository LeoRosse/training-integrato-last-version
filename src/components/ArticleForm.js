import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ArticleForm extends React.Component {
    constructor(props) {
        //così facendo sto settando contemporaneamente il form per l'add e l'edit... 
        super(props);
        this.state = {
            title: props.article ? props.article.title : '',
            note: props.article ? props.article.note : '',
            createdAt: props.article ? moment(props.article.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({
            title
        }));
    };

    onNoteChange = (e) => {
        e.persist();
        this.setState(() => ({ note: e.target.value }))
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
    }
    
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.title || !this.state.note) {
            // Set error state equal to 'Please provide description and amount.'
            this.setState(() => ({ error: 'Please provide title and amount.' }))
        } else {
            //clear the error
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                title: this.state.title,
                createdAt: this.state.createdAt.valueOf(), //per rappresentarlo in millisecondi, js lavora così
                note: this.state.note
            });
        }
    };
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input
                    type="text"
                    placeholder="Title"
                    autoFocus //questo feature punta subito il selettore quando si visita la pagina in questo input!
                    className="text-input"
                    value={this.state.title}
                    onChange={this.onTitleChange}
                />
                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false} //questo fa si che ogni giorno nel calendario sia selezionabile
                />
                <textarea
                    className="textarea"
                    placeholder="Add a note for your expense (optional)"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                >
                </textarea>
                <div>
                    <button className="button">Save Article</button>
                </div>
            </form>
        )
    }
}