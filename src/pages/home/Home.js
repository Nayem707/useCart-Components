import { useEffect, useState } from "react";

import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { useThemeHook } from "../../exmple/context/global/ThemProvider";

import SearchFilter from "react-filter-search";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  const [theme] = useThemeHook();
  const [searchInput, setSearchInput] = useState("");
  const [productData, setProductData] = useState([]);

  function getResponse() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
      });
  }

  useEffect(() => {
    getResponse();
  }, []);

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col xs={10} md={7} xl={4} lg={5} className="mb-5 mx-auto text-center">
          <h1 className={theme ? "text-light my-5" : "text-black my-5"}>
            Search Products
          </h1>
          <InputGroup className="mb-3">
            <InputGroup.Text
              className={
                theme
                  ? "bg-black text-dark-primary"
                  : "bg-light text-light-primary"
              }>
              <BiSearch size="1.5rem" />
            </InputGroup.Text>
            <FormControl
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </InputGroup>
        </Col>
        <SearchFilter
          value={searchInput}
          data={productData}
          renderResults={(results) => (
            <Row className="justify-content-center">
              {results.map((item, i) => (
                <ProductCard data={item} key={i} />
              ))}
            </Row>
          )}
        />
      </Row>
    </Container>
  );
};

export default Home;
