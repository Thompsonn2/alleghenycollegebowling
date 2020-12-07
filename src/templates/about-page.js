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
				<img src = "/assets/Karnick_Cam_2019.jpg" alt = "CKPicture" align = "left"/>
				<div class = "CKInfo">
					<ul>
						<li>Cam Karnik, President</li>
						<li>Major: Psycology</li>
						<li>Hometown: Lorain, Ohio</li>
						<li>Highscore: ####</li>
					</ul>
				</div>
			</div>

		</Layout>
	)
}

export default AboutPage