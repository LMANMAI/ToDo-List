import styled from "@emotion/styled";

export const FormTaskContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

export const Form = styled.form`
  width: 100%;
  @media (min-width: 768px) {
    width: fit-content;
  }
`;
export const Input = styled.input`
  width: 100%;
  margin-bottom: 0.5rem;
  border: none;
  background-color: #f2f2f2;
  border-radius: 35px;
  padding: 0.5rem;
  padding-left: 1rem;
  outline: none;
  &::placeholder {
    padding: 1rem;
  }
  @media (min-width: 768px) {
    // width: 20%;
  }
`;
export const InputSearch = styled.input`
  width: 100%;
  border: none;
  padding: 0.6rem;
  border-radius: 35px;
  color: white;
  background-color: #f02d7b;
  outline: none;
  cursor: pointer;
  @media (min-width: 768px) {
    // width: 20%;
  }
`;
export const Description = styled.div`
  padding: 0.2rem;
  text-align: center;
  margin: 0.2rem 0;
`;
