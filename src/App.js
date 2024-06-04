import React, {
	useState
}
from 'react';
import './App.css';

const FormExample = () => {

	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');

	// Event handlers to update state variables
	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleSurnameChange = (event) => {
		setSurname(event.target.value);
	};


	const handleSubmit = (event) => {
		// Prevent default form submission
		event.preventDefault();
    alert("submitted Successfully")
	
		console.log('Name:', name);
		console.log('surname:', surname);
	};

	return (
		<div className="form-container">
			<h2>Input Form</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Name:</label>
					<input
						type="text"
						value={name}
						onChange={handleNameChange}required
					/>
				</div>
				<div className="form-group">
					<label>surname:</label>
					<input
						type="text"
						value={surname}
						onChange={handleSurnameChange} required
					/>
				</div>
				<input type="submit" value="Submit"></input>
				{/* <button type="submit">Submit</button> */}
			</form>
		</div>
	);
};

export default FormExample;
