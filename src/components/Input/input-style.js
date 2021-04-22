import styled from 'styled-components';

const StyledLabel = styled.label`
    color: ${props => props.theme.colors.black.quaternaryBlack};
    font-size: ${props => props.theme.fontSizes.sizeThree};
    text-align: center;
    margin-bottom: 10px;
`;

const StyledInput = styled.input`
    width: 446px;
    margin: 0 auto;
    margin-bottom: 40px;
    font-size: ${props => props.theme.fontSizes.sizeThree};
    padding: 10px;
    text-align: center;
    border: 3px solid ${props => props.theme.colors.purple.tertiaryPurple};
    border-radius: 9px;

    &:focus {
        background-color: ${props => props.theme.colors.black.primaryBlack};
        outline: none;
    }
`;

const StyledTextarea = styled.textarea`
    width: 446px;
    margin: 0 auto;
    margin-bottom: 40px;
    font-size: ${props => props.theme.fontSizes.sizeThree};
    padding: 10px;
    border: 3px solid ${props => props.theme.colors.purple.tertiaryPurple};
    border-radius: 9px;

    &:focus {
        background-color: ${props => props.theme.colors.black.primaryBlack};
        outline: none;
    }
`;

export { StyledLabel, StyledInput, StyledTextarea };