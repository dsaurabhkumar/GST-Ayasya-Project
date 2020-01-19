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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
export default ModalComponent
