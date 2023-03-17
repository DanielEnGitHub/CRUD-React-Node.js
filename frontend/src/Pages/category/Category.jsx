import React, { useEffect, useState } from "react";
import { getCategories } from "../../conection/category";
import TableComponent from "../../components/Tables/Table";

const Category = () => {
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

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await getCategories();
      setData(response);
    };
    getData();
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <TableComponent columns={columns} data={data} />
    </div>
  );
};

export default Category;
