import React, { Component } from 'react';
import { database } from './firebase';
import NewContact from './NewContact';
import Contacts from './Contacts';

class App extends Component {
	state = {
		contacts: null,
	};

	contactsRef = database.ref('/contacts');

	componentDidMount() {
		this.contactsRef.on('value', snapshot => {
			this.setState({
				contacts: snapshot.val(),
			});
		});
	}

	render() {
		const { contacts } = this.state;

		return (
			<div>
				<NewContact />
				<Contacts contacts={contacts} />
			</div>
		);
	}
}

export default App;
