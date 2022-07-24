import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Home({ data }) {
  console.log(data);

  return (
    <Layout>
      <section>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
      </section>
    </Layout>
  );
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;
