import React from "react";

class TwitterMessage extends React.Component {
  state = {
        message: '',
        count: this.props.maxChars
    }


  handleChange = (event) => {
      this.setState({
          message: event.target.value,
          count: this.state.count - 1

      })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleChange} />
        <div>{this.state.count}</div>
      </div>
    );
  }
}

export default TwitterMessage;
