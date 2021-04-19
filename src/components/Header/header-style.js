import { Link } from 'gatsby';
import styled from 'styled-components';
import * as React from "react";

const StyledLink = styled(props => <Link {...props} />)`
    font-size: ${props => props.theme.fontSizes.sizetwo};
    color: ${props => props.theme.colors.black.quaternaryBlack};
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
        background: ${props => props.theme.colors.black.quaternaryBlack};
    }

    margin-bottom: 60px;
`;

const SearchInput = styled.input`
    visibility: ${props => props.isSearchVisible ? 'hidden' : 'visible'};
    opacity:  ${props => props.isSearchVisible ? '0' : '1'};
    transition: all .2s linear;
    padding: 14px;
    border: 1px solid ${props => props.theme.colors.black.quaternaryBlack};
    position: absolute;
    top: 60px;
    right: calc((100% - 959px) / 2);

    @media (max-width: 960px) {
        right: calc((100% - 768px) / 2);
    }

    @media (max-width: 770px) {
        right: calc((100% - 300px) / 2);
    }
`;

export { StyledLink, StyledMenu, SearchItem, StyledHeader, SearchInput };