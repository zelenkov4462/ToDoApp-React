import React from "react";
import Input from "../UI/input/Input";
import Select from "../UI/select/Select";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <h1>Фильтрация</h1>

      <Input
        cls="postForm__input"
        placeholder="Поиск..."
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <h1>Сортировка</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "15px 0",
        }}
      >
        <Select
          value={filter.sort}
          onChange={(selectedSort) =>
            setFilter({ ...filter, sort: selectedSort })
          }
          defaultValue="Сортировка"
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
      </div>
    </div>
  );
};

export default PostFilter;
