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

	render() {
		return (
			<form onSubmit={this.props.submitHandler}>
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
