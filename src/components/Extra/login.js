import React, { Fragment } from "react";
import ReactDOM from "react-dom";
const modalRoot = document.getElementById("root");

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }
  handleClick = () => {
    this.setState((currentState) => ({
      showModal: !currentState.showModal,
    }));
  };

  render() {
    const modal = this.state.showModal ? (
      <DialogByUsingPortals>
        <div className="overlay" />
        <div className="modal">
          hi all <button onClick={this.handleClick}> close </button>{" "}
        </div>{" "}
      </DialogByUsingPortals>
    ) : null;

    return (
      <Fragment>
        <button onClick={this.handleClick}> show modal </button> {modal}{" "}
      </Fragment>
    );
  }
}
export default Login;

class DialogByUsingPortals extends React.Component {
  constructor(props) {
    super(props);

    this.el = document.createElement("div");
  }
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
