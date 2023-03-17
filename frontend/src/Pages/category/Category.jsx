import React, { useState } from "react";
import {
  getCategories,
  deleteCategories,
  createCategory,
} from "../../conection/category";
import TableComponent from "../../components/Tables/Table";
import useListAPI from "../../hooks/useListAPI";
import Swal from "sweetalert2";
// boostrap
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

import { useForm } from "react-hook-form";

const Category = () => {
  const { data, getData } = useListAPI({ getFunction: getCategories });

  // modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const swalDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCategories(id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        getData();
      }
    });
  };

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

  const onSubmit = async (data) => {
    await createCategory(data);
    getData();
  };

  const form_input = [
    {
      name: "category",
      type: "text",
      placeholder: "Category name",
      label: "Name",
    },
    {
      name: "description",
      type: "text",
      placeholder: "Product description",
      label: "Description",
    },
  ];

  return (
    <div style={{ padding: "30px" }}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Category</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            {/* form */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {form_input.map((input) => {
                return (
                  <div key={input.name}>
                    <Form.Label style={{ marginLeft: "10px" }}>
                      {input.label}
                    </Form.Label>
                    <Form.Control
                      style={{ marginBottom: "10px" }}
                      type={input.type}
                      placeholder={input.placeholder}
                      name={input.name}
                      {...register(input.name)}
                    />
                  </div>
                );
              })}
            </Form.Group>
            {/* errors will return when field validation fails  */}
            {/* {errors.name && <span>This field is required</span>} */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
      <Button
        style={{ marginBottom: "2px" }}
        onClick={() => handleShow()}
        variant="primary"
      >
        Add Category
      </Button>
      <TableComponent columns={columns} data={data} />
    </div>
  );
};

export default Category;
