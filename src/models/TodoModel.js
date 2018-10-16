let _todoId = 0;
const generateTodoId = () => ++_todoId;

export default class TodoModel {
  constructor(text = "") {
    this.text = text;
    this.done = false;
    this.id = generateTodoId();
  }

  getToggledTodo() {
    const newTodo = new TodoModel(this.text);
    newTodo.done = !this.done;
    return newTodo;
  }
}
