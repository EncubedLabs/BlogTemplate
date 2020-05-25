import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image/withIEPolyfill"
import PostThumbnail from "../components/postThumbnail"

const CategoryItems = ({ category }) => {
  return (
    <>
      <h2 className="mt-6 mb-2">{category.fieldValue}</h2>
      <ul className="list-none flex justify-start">
        {category.nodes.map(n => (
          <li key={n.id} className="w-1/4 px-2">
            <PostThumbnail node={n} />
          </li>
        ))}
      </ul>
    </>
  )
}

const IndexPage = ({ data }) => {
  console.log(data)

  const {
    allMarkdownRemark: { group },
    headerImage,
  } = data

  return (
    <Layout>
      <SEO title="Home" />
      <div className="w-full flex flex-col items-center">
        <div className="w-full overflow-hidden object-cover h-16 sm:h-32 md:h-56 lg:h-84">
          <Img
            className="w-full object-cover sm:-top-24 md:-top-32 lg:-top-72"
            fluid={headerImage.childImageSharp.fluid}
          />
        </div>
        <div className="max-w-4xl">
          <h1>THIS IS THE HOME</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum
            suspendisse ultrices gravida dictum. Consequat semper viverra nam
            libero justo. At urna condimentum mattis pellentesque id. Nec
            tincidunt praesent semper feugiat nibh sed pulvinar proin. Neque
            laoreet suspendisse interdum consectetur libero. Mattis molestie a
            iaculis at. Magna fringilla urna porttitor rhoncus dolor purus. Vel
            risus commodo viverra maecenas. Libero volutpat sed cras ornare arcu
            dui. Magna ac placerat vestibulum lectus mauris ultrices. Nunc sed
            id semper risus in hendrerit gravida rutrum. Vitae proin sagittis
            nisl rhoncus mattis rhoncus urna neque. Nisi lacus sed viverra
            tellus in hac. Vel fringilla est ullamcorper eget nulla facilisi
            etiam.
          </p>
          <ul className="list-none">
            {group.map(g => (
              <li key={g.fieldValue}>
                <CategoryItems category={g} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    headerImage: file(
      relativePath: { eq: "2018/06/MVIMG_20180216_062912-02-1.jpeg" }
    ) {
      childImageSharp {
        fluid(maxHeight: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark {
      group(field: frontmatter___category, limit: 3) {
        fieldValue
        totalCount
        nodes {
          id
          frontmatter {
            date(formatString: "MMM, DD YYYY")
            title
            tags
            slug
            category
            header {
              src {
                childImageSharp {
                  fluid(maxHeight: 200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
