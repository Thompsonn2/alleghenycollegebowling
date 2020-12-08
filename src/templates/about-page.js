import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../assets/scss/style.scss"

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
				<img src = "/assets/Karnick_Cam_2019.jpg" alt = ""/>
				<p>
					Cam Karnik, President 	<br></br>
					Major: Psycology		<br></br>
					Hometown: Lorain, OH	<br></br>
					Highscore: 273			<br></br>
				</p>

				<img src = "/assets/Thompson_Nolan_2019.jpg" alt = ""/>
				<p>
					Nolan Thompson, Vice President 	<br></br>
					Major: Computer Science and Economics		<br></br>
					Hometown: McMurray, PA	<br></br>
					Highscore: 230			<br></br>
				</p>

				<img src = "/assets/Heckert_Brett_2021.jpeg" alt = ""/>
				<p>
					Brett Heckert, Treasurer 	<br></br>
					Major: Economics		<br></br>
					Hometown: Wexford, PA	<br></br>
					Highscore: 213			<br></br>
				</p>

				<img src = "/assets/DuBois_Dalton_2019.jpg" alt = ""/>
				<p>
					Dalton DuBois 	<br></br>
					Major: Environmental Science		<br></br>
					Hometown: Bemus Point, NY	<br></br>
					Highscore: 211			<br></br>
				</p>
			</div>			
		</Layout>
		

	)
}

export default AboutPage