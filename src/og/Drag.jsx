import React, { Component } from "react";

export default class Drag extends Component {
  render() {
    state = {
      tasks: [
        { name: "Learn Angular", category: "wip", bgcolor: "yellow" },
        { name: "React", category: "wip", bgcolor: "pink" },
        { name: "Vue", category: "complete", bgcolor: "skyblue" },
      ],
    };
    return <div>drag and drop</div>;
  }
}
