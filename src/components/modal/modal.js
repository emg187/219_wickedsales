import React, {Component} from "react";
import "./modal.scss";

class Modal extends Component {
    render(){
        const {children, defaultAction, defaultActionText="Okay", isOpen, secondaryAction=null, secondaryActionText="Cancel"} = this.props

        if (this.props.isOpen){
            return (
                <div className="ws-modal">
                    <div className="ws-modal-content">
                        {children}

                        <div className="ws-modal-actions center">
                            <button className="btn btn-large purple" onClick={defaultAction}>{defaultActionText}</button>
                            {
                                secondaryAction?<button className="btn btn-large purple" onClick={secondaryAction}>{secondaryActionText}</button>
                                :null
                            }
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    }
}

export default Modal;
