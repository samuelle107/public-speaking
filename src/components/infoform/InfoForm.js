import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button, Form } from 'react-bootstrap';

export default class InfoForm extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleChange = this.handleChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.sendToFirebase = this.sendToFirebase.bind(this);
        this.state = {
            value: '',
            name: '',
            buttonDisabled: false,
        };
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 0) return 'success';
        return null;
    }

    getNameValidationState() {
        const length = this.state.name.length;
        if (length > 0) return 'success';
        return null;
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value })
    }

    sendToFirebase() {
        if(this.state.value.length > 0 && this.state.name.length > 0) {
            this.props.database.ref('students/' + this.state.name).set({
                message: this.state.value,
            });
            this.setState({buttonDisabled: true});
            alert('Thank you for your submission, ' + this.state.name + '!');
        } else {
            alert('Please enter an input.')
        }
    }

    render() {
        return (
            <Form>
                <FormGroup controlId="formInlineName" validationState={this.getNameValidationState()} >
                    <ControlLabel>Name</ControlLabel>{' '}
                    <FormControl
                        type="text"
                        value={this.state.name}
                        placeholder="Name"
                        onChange={this.handleNameChange}
                    />
                </FormGroup>{' '}
                <FormGroup controlId="formInlineEmail" validationState={this.getValidationState()}>
                    <ControlLabel>Message</ControlLabel>{' '}
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder='Write a short message'
                        onChange={this.handleChange}
                    />
                </FormGroup>{' '}
                <Button type="button" onClick={this.sendToFirebase} disabled={this.state.buttonDisabled}>Submit</Button>
            </Form>
        );
    }
}
