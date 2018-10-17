import React from "react";

export default class TodoInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todoText: ""
		};
	}

	textChangeHandler = event => {
		this.setState({ todoText: event.target.value });
	};

	onFormSubmit = event => {
		event.preventDefault();
		this.props.onInput(this.state.todoText);
		this.setState({ todoText: "" });
	};

	render() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<input
					type="text"
					value={this.state.todoText}
					onChange={this.textChangeHandler}
					placeholder="next thing to do..."
				/>
			</form>
		);
	}
}
