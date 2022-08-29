import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  padding: 0.25rem;
  align-items: center;
  span {
    padding: 0.25rem;
    color: #161b22;
    line-height: 1.375rem;
    font: 500 1.5rem 'Raleway', sans-serif;
  }
`;

export const Title = styled.label`
  padding: 1rem;
  color: #161b22;
  line-height: 1.375rem;
  font: 700 1.75rem 'Raleway', sans-serif;
`;
