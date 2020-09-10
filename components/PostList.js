import Link from 'next/link'
import getAllPostPreviews from '../getAllPostPreview'

// const posts = getAllPostPreviews()

export default function PostList({posts}) {
  if (posts === 'undefined') return null

  return (
    <div>
      {!posts && <div>No posts!</div>}
      <ul>
        {posts &&
          posts.map((post) => {
            return (
              <li key={post.slug}>
                <Link href={{ pathname: `/post/${post.slug}` }}>
                  <a>{post.frontmatter.title}</a>
                </Link>
              </li>
            )
          })}
      </ul>
      <style jsx>{`
      ul {
        list-style: none;
      }
      `}

      </style>
    </div>
  )
}