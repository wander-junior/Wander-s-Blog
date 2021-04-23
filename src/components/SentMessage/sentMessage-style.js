import styled from 'styled-components';

const StyledSuccess = styled.div`
    text-align: center;
    color: ${props => props.theme.colors.others.green};
`;

const StyledFailure = styled.div`
    text-align: center;
    color: ${props => props.theme.colors.others.red};    
`;

const StyledTitle = styled.h1`
    font-size: ${props => props.theme.fontSizes.sizeFive};
    font-weight: bold;
    margin-bottom: 40px;
`;

const StyledParagraph = styled.p`
    font-size: ${props => props.theme.fontSizes.sizeThree};
`;

export { StyledSuccess, StyledFailure, StyledTitle, StyledParagraph }