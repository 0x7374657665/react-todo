import React from "react";

export default class EditTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text
    };
  }

  handleTextChange = event => this.setState({ text: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    this.props.onFinishEdit(this.state.text);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleTextChange}
        />
      </form>
    );
  }
}
