import styled from 'styled-components';

const ServiceSection = () => {
  return (
    <Wrapper>
      <Service>
        <ServiceIcon className="fas fa-truck"></ServiceIcon>
        <ServiceTitle>Free Shipping</ServiceTitle>
        <ServiceText>Get free shipping on all orders over Rs 1000</ServiceText>
      </Service>
      <Service>
        <ServiceIcon className="fas fa-dollar-sign"></ServiceIcon>
        <ServiceTitle>Money Back Guarantee</ServiceTitle>
        <ServiceText>Get your money back if you're not satisfied</ServiceText>
      </Service>
      <Service>
        <ServiceIcon className="fas fa-headset"></ServiceIcon>
        <ServiceTitle>24/7 Customer Support</ServiceTitle>
        <ServiceText>Our support team is always available to help you</ServiceText>
      </Service>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2a3950;
  border-bottom: 1px solid white;
  padding: 60px 0;
`;

const Service = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 30px;
  text-align: center;
`;

const ServiceIcon = styled.i`
  font-size: 48px;
  margin-bottom: 20px;
  color: #2a3950;
`;

const ServiceTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: bold;
  color: #fff;
`;

const ServiceText = styled.p`
  font-size: 18px;
  color: #eee;
`;

export default ServiceSection;
