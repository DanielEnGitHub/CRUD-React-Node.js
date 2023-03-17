import React from "react";
import { getCategories, deleteCategories } from "../../conection/category";
import TableComponent from "../../components/Tables/Table";
import useListAPI from "../../hooks/useListAPI";
import Swal from 'sweetalert2';

const Category = () => {
  const { data, getData } = useListAPI({ getFunction: getCategories });

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
        deleteCategories(id)
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
            accessor: "category",
          },
          {
            Header: "Description",
            accessor: "description",
          },
          {
            Header: "Actions",
            accessor: (d) => {
              return (
                <a href>
                  <i
                    onClick={() => swalDelete(d.CategoryID)}
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

export default Category;
