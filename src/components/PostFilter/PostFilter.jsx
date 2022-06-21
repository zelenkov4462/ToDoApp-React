import React from "react";
import Input from "../UI/input/Input";
import Select from "../UI/select/Select";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <Input
        cls="postForm__input"
        placeholder="Поиск..."
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <Select
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
          { value: "isChecked", name: "По выполнению" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
