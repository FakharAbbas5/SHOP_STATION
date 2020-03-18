import styled from "styled-components";

const Button = styled.button`
  text-transform: capitalize;
  background: transparent;
  font-size: 1.4rem;
  border: 0.05rem solid var(--mainBlue);
  min-width: 100px;
  border-color: ${props =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: ${props => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  min-width: ${props => (props.add ? "300px" : "100px")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5 ease-in-out;
  font-family: "Lobster";
  &:hover {
    background: ${props =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue);
  }

  &:focus {
    outline: none;
  }
`;

export default Button;
