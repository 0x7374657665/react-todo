import React from "react";

export default class Todo extends React.Component {
	render() {
		const { todo, checkHandler } = this.props;
		return (
			<div
				style={
					todo.done
						? {
								textDecoration: "line-through",
								color: "lightGray"
						  }
						: { textDecoration: "none" }
				}
			>
				<input
					type="checkbox"
					checked={todo.done}
					onChange={() => checkHandler(todo)}
				/>
				{todo.text}
			</div>
		);
	}
}
