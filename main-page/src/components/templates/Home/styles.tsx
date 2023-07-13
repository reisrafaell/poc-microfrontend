import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  background-color: #d5d5d3;

  form {
    border: 2px solid #000;
    width: 30rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    gap: 2rem;
    padding: 2rem;
    box-sizing: border-box;
  }
  input,
  button {
    height: 2rem;
  }
`;
