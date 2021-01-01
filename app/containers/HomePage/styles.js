import styled from 'styled-components';

const StyledHomePage = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 100px 0;

  .box {
    width: 200px;
    height: 200px;
    border: 5px solid #333;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: none;
    padding: 0;
    cursor: grabbing;
    &:focus {
      outline: none;
    }
  }

  .green {
    background-color: green;
  }

  .red {
    background-color: red;
  }
`;

export default StyledHomePage;
