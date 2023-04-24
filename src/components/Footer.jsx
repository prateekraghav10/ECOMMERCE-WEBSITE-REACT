import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="footer-section">
          <h4>Connect with Us</h4>
          <ul className="social-icons">
            <li>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>1234 Main Street, Anytown USA 12345</p>
          <p>Phone: 555-555-5555</p>
          <p>Email: info@example.com</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: #2a3950;
  color: #fff;
  padding: 20px;
  text-align: center;

  .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .footer-section {
    flex: 1;
    margin: 10px;

    h4 {
      margin-bottom: 10px;
    }

    ul.social-icons {
      list-style: none;
      padding: 0;
      display: flex;

      li {
        margin-right: 10px;

        a {
          color: #fff;

          &:hover {
            color: #aaa;
          }

          i {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
`;

export { Footer };
