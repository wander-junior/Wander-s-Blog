import { Link } from 'gatsby';
import styled from 'styled-components';
import React from 'react';

const StyledLink = styled(props => <Link {...props} />)`
    font-size: ${props => props.theme.fontSizes.sizetwo};
    color: ${props => props.theme.colors.black.tertiaryBlack};
    text-decoration: none;
    margin-right: 30px;
    &:hover {
        color: ${props => props.theme.colors.purple.primaryPurple};
    }
    transition: color .2s ease;
`;

const StyledMenu = styled.ul`
    margin: 20px 0;
    display: flex;
`;

const SearchItem = styled.li `
    margin-left: auto;
    &:hover {
        cursor: pointer;
        color: ${props => props.theme.colors.purple.primaryPurple};
    }
    transition: color .2s ease;
`;

const StyledHeader = styled.header`
    &:after {
        content: '';
        display: block;
        width: 100vw;
        height: 1px;
        margin: 0 auto;
        background: ${props => props.theme.colors.black.tertiaryBlack};
    }
`;

export { StyledLink, StyledMenu, SearchItem, StyledHeader };