/**
 * Wrapper for all the mobile screens
 */

import styled from 'styled-components';

const ViewWrapper = styled.section`
  min-width: 100%;
  max-width: 100%;
  margin-top: ${(props) => props.marginTop ? props.marginTop : 'auto'};
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  padding: ${(props) => props.padding ? props.padding : '30px 0px'};
  margin-bottom: ${(props) => props.marginBottom ? props.marginBottom : '0px'};
  box-sizing: border-box;
`;

export default ViewWrapper;
