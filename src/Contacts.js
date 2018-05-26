import React, { Component } from 'react';
import { object } from 'prop-types';
import Contact from './Contact';
import map from 'lodash/map';

class Contacts extends Component {
	render() {
		const { contacts } = this.props;
		return (
			<center>
				<h1>Listado de contactos</h1>
				{map(contacts, (contact, key) => <Contact key={key} contact={contact} />)}
			</center>
		);
	}
}

Contacts.propTypes = {
	contacts: object,
};

export default Contacts;
