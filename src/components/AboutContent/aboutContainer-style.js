import styled from "styled-components";

const AboutTitle = styled.h1`
    text-align: center;
    font-size: ${props => props.theme.fontSizes.sizeFive};
    color: ${props => props.theme.colors.black.quaternaryBlack};
    margin-bottom: 20px;
`;

const AboutText = styled.p`
    text-align: center;
    font-size: ${props => props.theme.fontSizes.sizeThree};
    color: ${props => props.theme.colors.black.quaternaryBlack};
    margin-bottom: 20px;
    line-height: 140%;
`;

const LabelLink = styled.p`
    color: ${props => props.theme.colors.black.quaternaryBlack};
    text-align: center;
    margin-bottom: 6px;
    @media (max-width: 770px) {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        &:last-child {
            margin-bottom: 0px;
        }
    };
`;

const StyledLink = styled.a`
    color: ${props => props.theme.colors.purple.primaryPurple};
    &:hover {
        color: ${props => props.theme.colors.purple.tertiaryPurple};
    }
    transition: color .2s linear;
`;

export { AboutTitle, AboutText, LabelLink, StyledLink }