import React from 'react';
import './ModalComponent.css';
import { Button, Modal } from 'react-bootstrap';

class ModalComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            show: false
        }
    }

    handleModal = event => {
        this.setState({
            show: !this.state.show
        })
    }

    render(){
        return(
            <span>
                <Button onClick={this.handleModal}>Configure</Button>
                <Modal show={this.state.show} onHide={this.handleModal}>
                    <Modal.Header closeButton className="closeBtn"></Modal.Header>
                    
                    <Modal.Body>
                        {this.props.children}
                    </Modal.Body>
                   
                    {/* <Modal.Footer>
                        <Button onClick={this.handleModal}>Submit</Button>
                    </Modal.Footer> */}
                </Modal>
            </span>
        )
    }
}
export default ModalComponent
