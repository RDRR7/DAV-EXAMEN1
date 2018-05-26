import React, { Component } from 'react';
import { object } from 'prop-types';
// import { database } from './firebase';

class Contact extends Component {
	// contactsRef = database.ref('/contacts');

	handleRemove = event => {
		event.preventDefault();
		// this.contactsRef.remove(this.contact);
		// this.props.contact.remove();
	};

	render() {
		const { name, email, phone_number, twitter } = this.props.contact;
		return (
			<article>
				{name} - {email} - {phone_number} - {twitter}
				<button onClick={this.handleRemove}>X</button>
			</article>
		);
	}
}

Contact.propTypes = {
	contact: object,
};

export default Contact;
