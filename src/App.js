import React, { Component } from 'react';
import DisplayEmployee from './DisplayEmployee';
import './App.css';
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			name: null,
			salary: null,
			gender: 'Male'
		};
	}

	addEmployee(name, salary, gender) {
		if (name === null) return;
		if (salary === null) return;
		if (isNaN(salary)) return;
		this.setState({
			data: [
				...this.state.data,
				{
					name,
					salary,
					gender
				}
			]
		});
	}

	render() {
		const { data, name, salary, gender } = this.state;
		return (
			<div className="App">
				<h1>Employee</h1>
				<div className="form">
					<div className="row">
						<label className="label">Name</label>
						<input
							type="text"
							name="name"
							onChange={(e) => this.setState({ name: e.target.value })}
							autoComplete="off"
						/>
					</div>
					<div className="row">
						<label className="label">Salary</label>
						<input
							type="text"
							name="salary"
							onChange={(e) => this.setState({ salary: Number(e.target.value) })}
							autoComplete="off"
						/>
					</div>
					<div className="row">
						<label className="label">Gender</label>
						<select name="gender" onChange={(e) => this.setState({ gender: e.target.value })}>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
						</select>
					</div>
					<div className="row">
						<input
							type="submit"
							value="Save"
							className="button"
							onClick={() => this.addEmployee(name, salary, gender)}
						/>
					</div>
				</div>
				<div className="container">
					{data.map((employee, index) => (
						<DisplayEmployee id={index + 1} name={employee.name} salary={employee.salary} gender={employee.gender} />
					))}
				</div>
				<div style={{ marginTop: 20 }}>Total Employee: {data.length}</div>
			</div>
		);
	}
}
