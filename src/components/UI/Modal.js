import React, { Component } from 'react';
import Backdrop from './Backdrop';

class Modal extends Component {

    render() {
        return (
        <div>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
            <div
                className="modal"
                style={{
                    transform: this.props.show ? 'translate(-50%, -50%)' : 'translateY(-200vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                {this.props.children}
            </div>
        </div>)
    }
}

export default Modal;