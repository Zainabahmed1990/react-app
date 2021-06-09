import React from 'react';
import './DisplayEmployee.css';
function DisplayEmployee(props) {
	const { id, name, salary, gender } = props;
	return (
		<div className="card">
			<div className="id">{id}</div>
			<div className="name">{name}</div>
			<div className="salary">${salary.toFixed(2)}</div>
			<div className="gender">{gender}</div>
		</div>
	);
}

export default DisplayEmployee;
