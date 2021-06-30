import * as React from 'react'

import { graphql } from 'gatsby';

import Layout from "../components/Layout"
import BlogDetails from '../components/BlogDetails';
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"

import { Container, DefaultGrid } from '../../GlobalStyle'
import { 
    PostTitle, 
    StyledDate, 
    StyledImage, 
    CoverImage, 
    BlogContainer, 
    TagList, 
    Tags, 
    TagItem, 
    BlogContent 
} from './blogPost-style';

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            date
            body {
                raw
                references {
                    __typename
                    ... on ContentfulAsset {
                        contentful_id
                        title
                        file {
                            url
                        }
                    }
            }

            }
            cover {
                file {
                    url
                }
            }
            tags
        }
    }
`;

export default function blogPost({ pageContext, data }) {
    const { slug } = pageContext;
    const { title, body, date, cover, tags } = data.contentfulBlogPost;
    
    const getLang = ((slug) => {
        if(slug.slice(0, 3) === 'en/') return 'en';
        else return 'pt'
    });

    const getDate = ((date, lang) => {
        const dateObject = new Date(date);
        const year = dateObject.getFullYear();
        const month = dateObject.getMonth() + 1;
        const day = dateObject.getDay();
        if (lang === 'pt') return `${day}/${month}/${year}`; 
        else return `${month}/${day}/${year}`;
    })

    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: node => {
                const assetData = node.data.target;
                console.log(assetData);
                return (
                    <StyledImage src={assetData.file.url} alt={assetData.title}/>
                )
            }
        },
    }

    return (
        <Layout lang={getLang(slug)}>
            <Container>
                <DefaultGrid>
                    <BlogContainer>
                        <PostTitle>{title}</PostTitle>
                        <StyledDate>{getDate(date, getLang(slug))}</StyledDate>
                        <CoverImage src={cover.file.url} style={{maxWidth: '100%'}}/>
                        <BlogContent>{renderRichText(body, options)}</BlogContent>
                        <Tags>
                        <span>TAGS: </span>
                        <TagList>
                            {tags.map((tag) => {
                                return (
                                    <TagItem>{" " + tag.toUpperCase()}</TagItem>
                                    )
                                })}
                        </TagList>
                        </Tags>                       
                    </BlogContainer>
                    <BlogDetails lang={getLang(slug)} />
                </DefaultGrid>
            </Container>
        </Layout>
    )
}