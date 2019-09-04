import React from "react";
import classNames from "classnames";

class TextComponent extends React.Component {
  createMarkup(markup) {
    return {__html: markup};
  }

  render() {
    const {
      text
    } = this.props;

    return (
      <span dangerouslySetInnerHTML={this.createMarkup(text)}></span>
    );
  }
}
export default TextComponent;