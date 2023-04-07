import styled from 'styled-components';

const StyledButton = styled.button`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #e50914;
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 6vw;

  &:hover {
    background-color: #b2070f;
  }

  &:active {
    background-color: #b2070f;
    transform: translateY(1px);
  }
`;

const Button = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;