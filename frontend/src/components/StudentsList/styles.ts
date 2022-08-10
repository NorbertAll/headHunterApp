import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1430px;

  margin: 1.625rem auto;
`

export const ContentContainer = styled.main`
  background: #292A2B;
`

export const Tabs = styled.div`
display: flex;
border-bottom: 2px solid #202122;
`;

export const Tab = styled.div<{ activeTab: boolean }>`
  cursor: pointer;
  font-size: 18px;
  padding: 1.375rem 2.125rem;
  border: 1px solid transparent;
  border-bottom: ${(props) =>
    props.activeTab ? '3px solid #e02735' : '3px solid transparent'};
`;

export const SearchContainer = styled.div`
  position: relative;
  /* without specified height container has 0px height */
  min-height: 2.375rem;
  display: flex;
  align-items: center;
  @media (max-width: 576px) {
    width: 100%;
    margin-bottom: .5rem;
  }

  .icon, .input {
    position: absolute;
    left: 0;
  }
  .icon {
    z-index: 100;
  }

  .input {
    padding: 9px;
    padding-left: 40px;
    background: #1E1E1F;
    border: none;
    min-width: 22.8125rem;
    font-size: 1rem;
    color: #666666;
    border-bottom: 1px solid transparent;

    @media (max-width: 576px) {
      min-width: 100%;
    }
    
    &::placeholder {
      color: #666666;
      font-size: 1rem;
    }

    &:focus {
      outline: none;
      border-bottom: 1px solid #e02735;
    }
  }
  
  .icon {
    color: #666666;
    left: 6px;
  }
`

export const ListContainer = styled.div`
  padding: 0 20px;
`

export const Controlls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #202122;
  padding: 20px 0;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`

export const ActionButton = styled.button<{color?: 'primary' | 'secondary'}>`
  cursor: pointer;
  color: #f7f7f7;
  font-size: 16px;
  background-color: ${props => {
    switch (props.color) {
      case 'primary':
        return '#e02735'
      case 'secondary':
        return '#1E1E1F'
      default:
        return '#e02735'
    }
  }
  };
  border: none;
  padding: 10px;
`

export const PaginationContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  label {
    color: #F7F7F7;
  }
  select {
    padding: 4px 2px;
    border: none;
    margin: 0 .5rem;
  }
  .pages-number {
    color: #F7F7F7;
    margin: 0 .5rem;
  }
  .select-pages {
    display: flex;
  }
  .pages-buttons {
    display: flex;
    align-items: center;
  }
  .change-page-button {
    cursor: pointer;
    height: 1.625rem;
    width: 1.625rem;
    border: none;
    background: #CFCFCF;
    margin: 0 .5rem;
    position: relative;
  }

  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

