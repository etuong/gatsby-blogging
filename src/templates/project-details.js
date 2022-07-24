import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark;
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div>
          <GatsbyImage image={featuredImg.childImageSharp.gatsbyImageData} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }}
        />
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
