import styled from "styled-components";

const TextStyled = styled.p`
  font-weight: 300;
  font-size: 24px;
`;
function Text(props) {
  return (
    <TextStyled>
      {props.text}
      {props.val}
    </TextStyled>
  );
}
export default Text;
