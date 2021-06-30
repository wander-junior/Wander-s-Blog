import styled from "styled-components";

const PostTitle = styled.h1`
    text-align: center;
    font-size: ${props => props.theme.fontSizes.sizeFive};
    font-weight: bold;
`;

const StyledDate = styled.p`
    text-align: center;
    margin: 18px 0;
    color: ${props => props.theme.colors.black.tertiaryBlack};
    font-size: ${props => props.theme.fontSizes.sizeOne};
`;

const StyledImage = styled.img`
    max-width: 100%;
`;

const CoverImage = styled.img`
    max-width: 100%;
    margin-bottom: 20px;
`

const BlogContainer = styled.main`
    color: ${props => props.theme.colors.black.quartenaryBlack};
    font-size: ${props => props.theme.fontSizes.sizeThree};
    line-height: 1.4;
`;

const Tags = styled.div`
    display: flex;
    color: ${props => props.theme.colors.black.tertiaryBlack};
`;

const TagList = styled.ul`
    display: flex;
    white-space: pre-wrap;
`;

const TagItem = styled.li`
    &:hover {
        color: ${props => props.theme.colors.purple.primaryPurple};
        cursor: pointer;
    }
    &::after {
        content: ', ';
        color: ${props => props.theme.colors.black.tertiaryBlack};
    }

    &:last-child {
        &::after {
            content: '';
        }
    }

    transition: color .2s linear;
`;

const BlogContent = styled.section`
    p {
        font-size: ${props => props.theme.fontSizes.sizeThree};
        margin-bottom: 10px;
    }

    h2 { 
        font-size: ${props => props.theme.fontSizes.sizeFour};
        font-weight: bold;
        margin: 10px 0;
    }

    p code {
        font-family: 'Roboto Mono', monospace;
        font-size: ${props => props.theme.fontSizes.sizeThree};
        display: inline-block;
        width: 100%;
        background-color: ${props => props.theme.colors.black.secondaryBlack};
        border-radius: 4px;
        padding: 5px 10px;
        white-space: pre-wrap;
    }
`;

export { PostTitle, StyledDate, StyledImage, CoverImage, BlogContainer, TagList, Tags, TagItem, BlogContent };