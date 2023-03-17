import React from "react";
import { getProducts } from "../../conection/product";
import useListAPI from "../../hooks/useListAPI";
import TableComponent from "../../components/Tables/Table";

const Product = () => {
  const { data } = useListAPI({ getFunction: getProducts });

  const columns = React.useMemo(
    () => [
      {
        Header: "Category",
        columns: [
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "Description",
            accessor: "description",
          },
          {
            Header: "Existence",
            accessor: "existence",
          },
          {
            Header: "Date expiration",
            accessor: "expiration_date",
          },
          {
            Header: "PriceCost",
            accessor: "price_cost",
          },
          {
            Header: "PriceSale",
            accessor: "price_sale",
          },
          {
            Header: "Actions",
            accessor: "ProductID",
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

export default Product;
