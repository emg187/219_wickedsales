import React, {Component} from "react";
import "./modal.scss";

class Modal extends Component {
    render(){
        if (this.props.isOpen){
            return (
                <div className="ws-modal">
                    <div className="ws-modal-content">
                        {this.props.children}

                        <div className="we-modal-actions center">
                            <button className="btn btn-large purple" onClick={this.props.close}>Okay</button>
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    }
}

export default Modal;
