import React from "react";
import Todo from "./components/Todo";
import TodoModel from "./models/TodoModel";
import { getArrayWithItemReplaced } from "./util/stateUtils";
import TodoInput from "./components/TodoInput";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				new TodoModel("this"),
				new TodoModel("that"),
				new TodoModel("the other thing")
			]
		};
	}

	toggleDone = todo => {
		const todoIndex = this.state.todos.indexOf(todo);
		const updatedTodo = todo.getToggledTodo();
		const todos = getArrayWithItemReplaced(
			this.state.todos,
			updatedTodo,
			todoIndex
		);
		this.setState({ todos });
	};

	render() {
		return (
			<div>
				<h1>TODO:</h1>
				<ul style={{ listStyle: "none" }}>
					{this.state.todos.map(todo => (
						<li key={todo.id}>
							<Todo todo={todo} checkHandler={this.toggleDone} />
						</li>
					))}
					<li>
						<TodoInput submitHandler={console.log} />
					</li>
				</ul>
			</div>
		);
	}
}
