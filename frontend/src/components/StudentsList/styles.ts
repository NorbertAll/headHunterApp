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

export const ListContainer = styled.div`
  padding: 0 20px;
`

export const Controlls = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #202122;
  padding: 20px 0;
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
  display: flex;
  justify-content: flex-end;
`