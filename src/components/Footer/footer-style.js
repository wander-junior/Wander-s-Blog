import styled from "styled-components";

const LinksBackground = styled.div`
    background-color: ${props => props.theme.colors.purple.primaryPurple};
`;

const LinkName = styled.span`
    font-size: ${props => props.theme.fontSizes.sizeFour};
    padding-left: 10px;
`;

const SocialLink = styled.a`
    color: ${props => props.theme.colors.purple.tertiaryPurple};
    text-decoration: none;
    display: flex;
    align-items: center;
    margin: 40px 30px;

    &:hover {
        color: ${props => props.theme.colors.black.quaternaryBlack};
    }

    transition: color .2s linear;

`;

const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledFooter = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 235px;
`;

export { LinksBackground, LinkName, SocialLink, SocialLinks, StyledFooter };