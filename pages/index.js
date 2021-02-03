import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';
import Link from 'next/link'
import fs from 'fs';


export default class Home extends Component {
  render() {
    let { title, cats } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          <ul>

          {this.props.slugs.map(slug => {
            return (
              <li key={slug}>

                <Link href={slug}><a>{slug}</a></Link>
              </li>
            )
          })}
          </ul>
          <HomeContent />
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article>
      </>
    )
  }
}

export const getStaticProps = async () => {
  const files = fs.readdirSync('_posts/blog')

  return {
    props: {
      slugs: files.map(filename => filename.replace(".md", ""))
    }
  }
}