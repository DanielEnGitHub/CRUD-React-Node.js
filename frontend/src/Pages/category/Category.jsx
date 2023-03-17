import React from "react";
import { getCategories } from "../../conection/category";
import TableComponent from "../../components/Tables/Table";
import useListAPI from "../../hooks/useListAPI";

const Category = () => {
  const { data } = useListAPI({ getFunction: getCategories });
  const columns = React.useMemo(
    () => [
      {
        Header: "Category",
        columns: [
          {
            Header: "Name",
            accessor: "category",
          },
          {
            Header: "Description",
            accessor: "description",
          },
          {
            Header: "Actions",
            accessor: "CategoryID",
          },
        ],
      },
    ],
    []
  );

  return (
    <div style={{ padding: "30px" }}>
      <TableComponent columns={columns} data={data} />
    </div>
  );
};

export default Category;
