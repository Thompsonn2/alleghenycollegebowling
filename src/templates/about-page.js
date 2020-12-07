import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query AboutQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
			html
			excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
  }
`
const AboutPage = ({ data }) => {
	const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

	return (
		<Layout className="page">
			
			<SEO
				title={frontmatter.title}
				description={excerpt}
			/>
			
			<div className="wrapper">
				<h1>{frontmatter.title}</h1>
				<article dangerouslySetInnerHTML={{ __html: html }} />
			</div>
			<div class = "CK">
				<img src = "/assets/Karnick_Cam_2019.jpg" alt = ""/>
				<div class = "CKInfo">
					Cam Karnik, President 	<br></br>
					Major: Psycology		<br></br>
					Hometown: Lorain, Ohio	<br></br>
					Highscore: ####			<br></br>
				</div>
			</div>

		</Layout>
	)
}

export default AboutPage