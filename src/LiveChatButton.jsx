import React, { Component } from "react";
import "./css/LiveChatButton.css";
import LiveChat from "react-livechat";

export default class LiveChatButton extends Component {
  show() {
    window.LC_API.open_chat_window();
  }
  render() {
    const { license, group } = this.props;
    return (
      <div>
        <div id="livechat_button" onClick={this.show}></div>
        <LiveChat license={license} group={group} />
      </div>
    );
  }
}
