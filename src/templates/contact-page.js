import React from "react"
import { graphql } from "gatsby"
import {RiSendPlane2Line} from "react-icons/ri";

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query ContactQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
			html
			excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Contact = ({data}) => {
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return  (
    <Layout className="contact-page">
      <SEO 
        title={frontmatter.title}
        description={frontmatter.title + " " + site.siteMetadata.title}
      />
      <div className="wrapper">
        <h1>{frontmatter.title}</h1>
        <div className="description" dangerouslySetInnerHTML={{ __html: html }} />
        <form className="contact-form" action="/thanks" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Name<input type="text" name="name" required /></label>   
          </p>
          <p>
            <label>Email<input type="email" name="email" required /></label>
          </p>
          <p>
            <label>Box #<input type="box" name="box" required /></label>
          </p>
          <p>
            <label>Year in School<input type="year" name="year" required /></label>   
          </p>
          <p>
            <label>Cellphone Number<input type="number" name="number" required /></label>
          </p>
          <p>
            <label>Birth Date<input type="DOB" name="DOB" required /></label>
          </p>
          <p>
            <label>Any Medical Allergies or Medical Conditions<textarea name="MI" required ></textarea></label>
          </p>
          <p>
            <label>Other<input type="Other" name="Other"/></label>
          </p>
          <p>
            <label>Date<input type="Date" name="Date" required /></label>
          </p>
          <h2>Emergency Contact Information</h2>
          <p>
            <label>Name<input type="Name" name="Name" required /></label>
          </p>
          <p>
            <label>Relationship<input type="Relation" name="Relation" required /></label>
          </p>
          <p>
            <label>Cellphone Number<input type="number" name="number" required /></label>
          </p>
          <p>
            <label>Homephone Number<input type="Hnumber" name="Hnumber" required /></label>
          </p>
          <p className="text-align-right">
            <button className="button" type="submit">Register <span className="icon -right"><RiSendPlane2Line/></span></button>
          </p>
          
        </form>
      </div>

    </Layout>
  )
}

export default Contact