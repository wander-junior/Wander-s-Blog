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

const StyledButton = styled.button`
    border: 3px solid ${props => props.theme.colors.purple.primaryPurple};
    border-radius: 9px;
    color: ${props => props.theme.colors.purple.primaryPurple};
    background-color: ${props => props.theme.colors.black.primaryBlack};
    width: 100px;
    height: 50px;
    margin: 0 auto;
    font-size: ${props => props.theme.fontSizes.sizeThree};

    &:hover {
        border-color: ${props => props.theme.colors.purple.tertiaryPurple};
        color: ${props => props.theme.colors.purple.tertiaryPurple};
        cursor: pointer;
    }

    transition: border-color .2s, color .2s;
`;

export { StyledForm, FormTitle, StyledButton };