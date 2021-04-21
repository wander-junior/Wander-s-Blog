import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const FormTitle = styled.h1`
    font-size: ${props => props.theme.fontSizes.sizeFive};
    text-align: center;
    margin-bottom: 60px;
`;

export { StyledForm, FormTitle };