import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark;
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter;

  return (
    <Layout title={title}>
      <div className="row">
        <div className="col-md-12 col-xs-12">
          <div className="mainheading">
            <h1 className="posttitle">{title}</h1>
          </div>

          <GatsbyImage
            className="featured-image img-fluid"
            image={featuredImg.childImageSharp.gatsbyImageData}
            alt=""
          />

          <div className="article-post">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>

          <div className="after-post-tags">
            <ul className="tags">
              {stack &&
                stack
                  .split(", ")
                  .map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetails;

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;
