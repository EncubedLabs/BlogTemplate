import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Tag = ({ tag }) => {
  return (
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
      #{tag}
    </span>
  )
}

const Tags = ({ tags }) => {
  const tagArray = tags.split(",")

  return (
    <div className="px-6 py-4">
      {tagArray.map(t => (
        <Tag tag={t.trim()} key={t} />
      ))}
    </div>
  )
}

const PostThumbnail = ({ node }) => {
  const {
    frontmatter: { title, date, header, tags, slug, category },
  } = node
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <Link to={`/${category}/${slug.toLowerCase()}`}>
        {header && header.src && (
          <Img
            className="w-full h-24"
            fluid={header.src.childImageSharp.fluid}
          />
        )}
        <div className="mx-6 mt-3">
          <h3 className="font-bold">{title}</h3>
          <div className="text-xs text-gray-500 mb-2 mt-1">{date}</div>
          <p className="text-gray-700 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <Tags tags={tags} />
      </Link>
    </div>
  )
}

export default PostThumbnail
