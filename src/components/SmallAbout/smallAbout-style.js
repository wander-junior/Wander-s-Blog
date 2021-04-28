import styled from "styled-components";

const SmallAboutContainer = styled.div`
    text-align: center;
    color: ${props => props.theme.colors.black.quaternaryBlack};
    font-size: ${props => props.theme.fontSizes.sizeTwo}
`;

const InfoBox = styled.div`
    border: 1px solid ${props => props.theme.colors.black.secondaryBlack};
    padding: 40px 20px;
`;

const StyledTitle = styled.h2`
    &:after {
        content: '';
        background: ${props => props.theme.colors.purple.secondaryPurple};
        display: block;
        width: 68px;
        height: 1px;
        margin: 0 auto;
    }
`;

const StyledParagraph = styled.p`
    margin-top: 20px;
    margin-bottom: 20px;
`;

const StyledLink = styled.a`
    color: ${props => props.theme.colors.purple.primaryPurple};

    &:hover {
        color: ${props => props.theme.colors.purple.tertiaryPurple};
    }

    transition: color .2s;
`;

export {SmallAboutContainer, InfoBox, StyledTitle, StyledParagraph, StyledLink};