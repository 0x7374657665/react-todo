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

	createTodo = newTodoText => {
		const newTodo = new TodoModel(newTodoText);
		this.setState({ todos: [...this.state.todos, newTodo] });
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
					<li style={{ marginTop: "0.5em" }}>
						<TodoInput onInput={this.createTodo} />
					</li>
				</ul>
			</div>
		);
	}
}
