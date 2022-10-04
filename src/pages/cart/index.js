import React from "react";
import { Button, Container, Col, Row, Table } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { useThemeHook } from "../../exmple/context/global/ThemProvider";
import { BsCartCheck, BsCartX, BsTrash } from "react-icons/bs";

const Cart = () => {
  const [theme] = useThemeHook();
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  return (
    <Container className="py-4 mt-5">
      <h2
        className={`${
          theme ? "text-light" : "text-light-primary"
        } py-5 text-center`}>
        {isEmpty ? "Your Cart is Emty" : "The Cart"}
      </h2>
      <Row className="justify-content-center">
        <Table responsive="sm" striped bordered hover>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className="img-shirt-2">
                      <div className="p-5">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="img-fluid shirt-2"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <h6
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "14rem",
                      }}>
                      {item.title}
                    </h6>
                  </td>
                  <td>${item.price}</td>
                  <td>Quantity({item.quantity})</td>
                  <td>
                    <Button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                      className="ms-2">
                      -
                    </Button>
                    <Button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                      className="ms-2">
                      +
                    </Button>
                    <Button
                      onClick={() => removeItem(item.id)}
                      variant="danger"
                      className="ms-2">
                      <BsTrash size="1.3rem" />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {!isEmpty && (
          <Row style={{ position: "fixed", bottom: 0 }} className="bg-light">
            <Col className="py-lg-1">
              <h2>Rs.${cartTotal}</h2>
            </Col>
            <Col className="pt-2" md={4}>
              <Button
                className="ms-2"
                variant="danger"
                onClick={() => emptyCart()}>
                <BsCartX size="1.3rem" />
                Clear Cart
              </Button>
              <Button className="ms-2" variant="success">
                <BsCartCheck size="1.3rem" />
                Chekout
              </Button>
            </Col>
          </Row>
        )}
      </Row>
    </Container>
  );
};

export default Cart;
