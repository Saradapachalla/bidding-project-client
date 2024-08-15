import styled from "styled-components";

export const JobAddWrapper = styled.div`
  @media (min-width: 960px) {
    position: relative;
    display: inline-block;
    width: calc(60% - 2px);
    margin: 0 24px 16px;
    border: 1px solid rgba(5, 5, 5, 0.06);
    border-radius: 8px;
    padding: 20px;
  }

  .formHeader {
    min-height: 38px;
    padding: 0 12px;
    font-size: 18px;
    font-weight: 700;
  }

  .buttonsSpan {
    display: flex;
  }

  .mrt {
    margin-right: 20px;
  }
`;
