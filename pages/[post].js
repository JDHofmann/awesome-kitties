import React from 'react'
import fs from 'fs';
import path from 'path'
import matter from 'gray-matter'

const Post = ({content, title}) => {
    return (
        <div>
            <h1>{title}</h1>
            {content}
        </div>
    )
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync('_posts/blog')
    // console.log(files)
    const paths = files.map( filename => ({
        params: {
            post: filename.replace(".md", "")
        }
    }) )
    // console.log(paths)

    return {
        paths,
        fallback: false 
    }
}

export const getStaticProps =  async ({params: {post}}) => {

    const markdowWithMetaData = fs.readFileSync(path.join("_posts/blog", post + ".md")).toString()

    const parsedMarkdown = matter(markdowWithMetaData)

    // console.log(parsedMarkdown.data)

    return {
        props: {
            content: parsedMarkdown.content,
            title: parsedMarkdown.data.title
        }
    }
}

export default Post;