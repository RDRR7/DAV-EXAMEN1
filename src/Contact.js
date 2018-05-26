import React, { Component } from 'react';
import { string } from 'prop-types';

class Contact extends Component {
	render() {
		const { name, email, phone_number, twitter } = this.props;
		return (
			<article>
				{name}-{email}-{phone_number}-{twitter}
			</article>
		);
	}
}

Contact.propTypes = {
	name: string,
	email: string,
	phone_number: string,
	twitter: string,
};

export default Contact;
