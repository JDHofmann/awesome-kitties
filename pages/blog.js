import Head from "next/head"
import { Component } from 'react'
import { attributes } from '_posts/blog/2021-01-30-test-blog.md';

export default class Blog extends Component {
  render() {
    let { title } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          {/* <BlogContent /> */}
          {/* <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul> */}
        </article>
      </>
    )
  }
}