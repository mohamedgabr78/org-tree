import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Task from "./Task";
import { dummy_data } from "../org-chart/dummy-data";
let toDo = [
  {
    id: "1",
    list: ["1", "2", "3", "4", "5"],
  },
];
let onDragEnd = (result) => {
  if (!result.destination) {
    return;
  }
  let sourceIdx = parseInt(result.source.index);
  let destIdx = parseInt(result.destination.index);
  let draggedLink = toDo[0].list[sourceIdx];
  let newList = toDo[0].list.slice();
  newList.splice(sourceIdx, 1);
  newList.splice(destIdx, 0, draggedLink);
  toDo[0].list = newList;
};
function Container() {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Task toDo={toDo[0]} />
    </DragDropContext>
  );
}

export default Container;
