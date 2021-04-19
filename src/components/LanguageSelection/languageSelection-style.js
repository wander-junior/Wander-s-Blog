import styled from "styled-components";
import { Link } from 'gatsby';
import * as React from "react";

const LanguageSelectionContainer = styled.div`
    font-size: ${props => props.theme.fontSizes.sizeFour};
    margin-top: 60px;
`;

const Languages = styled.p`
    text-align: center;
    color: ${props => props.theme.colors.black.tertiaryBlack};
    margin-bottom: 10px;
`;

const IntText = styled.p`
    text-align: center;
    color: ${props => props.theme.colors.black.quaternaryBlack};
    margin-bottom: 5px;
`;

const StyledLink = styled(props => <Link {...props} />)`
    text-decoration: none;
    color: ${props => props.theme.colors.purple.primaryPurple};
    &:hover {
        color: ${props => props.theme.colors.purple.tertiaryPurple};
    }
    transition: color .2s;
`;

export { Languages, IntText, StyledLink, LanguageSelectionContainer };