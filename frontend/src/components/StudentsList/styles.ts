import styled from '@emotion/styled';

export const Container = styled.div`
max-width: 1430px;
background: #292A2B;
margin: 1.625rem auto;
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

export const List = styled.div`
padding: 0 20px;
`

export const Controlls = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 2px solid #202122;
padding: 20px 0;
`

export const FilterButton = styled.button`
color: #f7f7f7;
font-size: 16px;
background-color: #1E1E1F;
border: none;
padding: 6px 10px;
`