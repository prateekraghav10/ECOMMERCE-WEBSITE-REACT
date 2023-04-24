import { Link } from "react-router-dom";
import styled from "styled-components";

const CategoryNavbar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/">All Categories</Link>
        </li>
        <li>
          <Link to="/electronics">Electronics</Link>
        </li>
        <li>
          <Link to="/mens-clothing">Men's Clothing</Link>
        </li>
        <li>
          <Link to="/womens-clothing">Women's Clothing</Link>
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: center;
  padding : 20px;

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-right: 1rem;
  }

  a {
    color: #fff;
    text-decoration: none;
    padding: 0.5rem;
  }

  a:hover {
    text-decoration: underline;
  }
`;
export default CategoryNavbar;