import React from 'react';
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
            <div>
                <Button onClick={this.handleModal}>Click Me</Button>
                <Modal show={this.state.show} onHide={this.handleModal}>
                    <Modal.Header closeButton>Modal Header</Modal.Header>
                    <Modal.Body>
                        {this.props.children}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleModal}>Ok</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
export default ModalComponent