import React from "react";
import { getProducts, deleteProduct } from "../../conection/product";
import useListAPI from "../../hooks/useListAPI";
import TableComponent from "../../components/Tables/Table";
import Swal from 'sweetalert2';

const Product = () => {
  const { data, getData } = useListAPI({ getFunction: getProducts });
  
  const swalDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        getData();
      }
    })
  }

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
            accessor: (d) => {
              return (
                <a href>
                  <i
                    onClick={() => swalDelete(d.ProductID)}
                    className="fa fa-trash"
                    aria-hidden="true"
                  ></i>
                </a>
              );
            },
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
