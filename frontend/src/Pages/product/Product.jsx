import React, { useState } from "react";
import {
  getProducts,
  deleteProduct,
  createProduct,
} from "../../conection/product";
import useListAPI from "../../hooks/useListAPI";
import TableComponent from "../../components/Tables/Table";
import Swal from "sweetalert2";
import moment from "moment";

import { useForm } from "react-hook-form";

// boostrap
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

const Product = () => {
  // modal
  const [show, setShow] = useState(false);
  const { data, getData } = useListAPI({ getFunction: getProducts });

  // form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await createProduct(data);
    getData();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        deleteProduct(id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        getData();
      }
    });
  };

  const columns = React.useMemo(() => [
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
          accessor: (d) => {
            return moment(d.expiration_date).format("DD/MM/YYYY");
          },
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
  ]);

  const form_input = [
    { name: "name", type: "text", placeholder: "Product name", label: "Name" },
    {
      name: "description",
      type: "text",
      placeholder: "Product description",
      label: "Description",
    },
    {
      name: "existence",
      type: "number",
      placeholder: "Product existence",
      label: "Existence",
    },
    {
      name: "expiration_date",
      type: "date",
      placeholder: "Product expiration date",
      label: "Expiration date",
    },
    {
      name: "supplier",
      type: "text",
      placeholder: "Product supplier",
      label: "Supplier",
    },
    {
      name: "nit_supplier",
      type: "text",
      placeholder: "Product nit supplier",
      label: "Nit supplier",
    },
    {
      name: "quantity",
      type: "number",
      placeholder: "Product quantity",
      label: "Quantity",
    },
    {
      name: "price_cost",
      type: "number",
      placeholder: "Product price cost",
      label: "Price cost",
    },
    {
      name: "price_sale",
      type: "number",
      placeholder: "Product price sale",
      label: "Price sale",
    },
  ];
  return (
    <div style={{ padding: "30px" }}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Product</Modal.Title>
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
        Add Product
      </Button>
      <TableComponent columns={columns} data={data} />
    </div>
  );
};

export default Product;
