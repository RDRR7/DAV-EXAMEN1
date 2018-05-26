import React, { Component } from 'react';
import { object } from 'prop-types';
import { database } from './firebase';

class NewContact extends Component {
	state = {
		name: '',
		email: '',
		phone_number: '',
		twitter: '',
	};

	contactsRef = database.ref('/contacts');

	handleSubmit = event => {
		event.preventDefault();
		this.contactsRef.push({
			name: this.state.name,
			email: this.state.email,
			phone_number: this.state.phone_number,
			twitter: this.state.phone_number,
		});
	};

	render() {
		const { name, email, phone_number, twitter } = this.state;

		return (
			<form>
				<input type="text" value={name} onChange={event => this.setState({ name: event.target.value })} />
				<input type="text" value={email} onChange={event => this.setState({ email: event.target.value })} />
				<input
					type="text"
					value={phone_number}
					onChange={event => this.setState({ phone_number: event.target.value })}
				/>
				<input type="text" value={twitter} onChange={event => this.setState({ twitter: event.target.value })} />
				<button onClick={this.handleSubmit} disabled={!name && !email && !phone_number && !twitter}>
					Submit
				</button>
			</form>
		);
	}
}

NewContact.propTypes = {
	contactsRef: object,
};

export default NewContact;
