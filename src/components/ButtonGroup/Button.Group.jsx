import React from "react";
import Button from "../UI/button/Button";

const ButtonGroup = ({ todoFilter }) => {
  return (
    <div>
      <Button onClick={() => todoFilter("All")} cls="btn_select">
        Все
      </Button>
      <Button onClick={() => todoFilter("Completed")} cls="btn_select">
        Выполненные
      </Button>
      <Button onClick={() => todoFilter("Uncompleted")} cls="btn_select">
        Невыполненные
      </Button>
      <Button onClick={() => todoFilter("Liked")} cls="btn_select">
        Избранные
      </Button>
      <Button onClick={() => todoFilter("Deleted")} cls="btn_create">
        Удаленные
      </Button>
    </div>
  );
};

export default ButtonGroup;
