import React from "react";
import Button from "../UI/button/Button";

const ButtonGroup = ({ todoFilter }) => {
  return (
    <div>
      <Button onClick={() => todoFilter("All")} cls="btn_create">
        Все
      </Button>
      <Button onClick={() => todoFilter("Completed")} cls="btn_create">
        Выполненные
      </Button>
      <Button onClick={() => todoFilter("Uncompleted")} cls="btn_create">
        Невыполненные
      </Button>
      <Button onClick={() => todoFilter("Liked")} cls="btn_create">
        Избранные
      </Button>
      <Button onClick={() => todoFilter("Deleted")} cls="btn_create">
        Удаленные
      </Button>
    </div>
  );
};

export default ButtonGroup;
