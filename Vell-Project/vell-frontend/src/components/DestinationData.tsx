import { Component, ReactNode } from "react";

import "./styles/Destination.css";
class DestinationData extends Component<{
  heading: string;
  text: string;
  img1: string;
  img2: string;
  className: string;
}> {
  render(): ReactNode {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img src={this.props.img1}></img>
          <img src={this.props.img2}></img>
        </div>
      </div>
    );
  }
}
export default DestinationData;
