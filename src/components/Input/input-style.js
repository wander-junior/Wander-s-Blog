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
    border: 3px solid ${props => props.theme.colors.purple.primaryPurple};
    border-radius: 9px;

    &:focus {
        background-color: ${props => props.theme.colors.black.primaryBlack};
        border-color: ${props => props.theme.colors.purple.tertiaryPurple};
        outline: none;
    }

    transition: .2s border-color;
`;

const StyledTextarea = styled.textarea`
    width: 446px;
    margin: 0 auto;
    margin-bottom: 40px;
    font-size: ${props => props.theme.fontSizes.sizeThree};
    padding: 10px;
    border: 3px solid ${props => props.theme.colors.purple.primaryPurple};
    border-radius: 9px;

    &:focus {
        background-color: ${props => props.theme.colors.black.primaryBlack};
        border-color: ${props => props.theme.colors.purple.tertiaryPurple};
        outline: none;
    }
    transition: border-color .2s;
`;

export { StyledLabel, StyledInput, StyledTextarea };