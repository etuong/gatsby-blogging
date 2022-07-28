import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Home({ data }) {
  const { title, description } = data.metadata.siteMetadata;
  const projects = data.projects.nodes;
  const travels = data.travels.nodes;

  return (
    <React.Fragment>
      <Layout title={title}>
        <div className="mainheading">
          <h1 className="sitetitle">{title}</h1>
          <p className="lead">{description}</p>
        </div>

        <section className="featured-posts">
          <div className="section-title">
            <h2>
              <span>Projects</span>
            </h2>
          </div>

          <div className="card-columns listfeaturedtag">
            {projects.map((project) => (
              <div className="card" key={project.id}>
                <div className="row">
                  <div className="col-md-5 wrapthumbnail">
                    <Link
                      to={"/blogs/" + project.frontmatter.slug}
                      key={project.id}
                    >
                      <GatsbyImage
                        image={
                          project.frontmatter.featuredImg.childImageSharp
                            .gatsbyImageData
                        }
                        alt=""
                      />
                    </Link>
                  </div>

                  <div className="col-md-7">
                    <div className="card-block">
                      <h2 className="card-title">
                        <Link
                          to={"/blogs/" + project.frontmatter.slug}
                          key={project.id}
                        >
                          {project.frontmatter.title}
                        </Link>
                      </h2>
                      <h4 className="card-text">
                        {project.frontmatter.description.substring(0, 200)}...
                      </h4>
                      <div className="wrapfooter">
                        <span className="author-meta">
                          <span className="post-date"></span>
                          <span className="post-read">
                            {project.frontmatter.readTime} min read
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="recent-posts">
          <div className="section-title">
            <h2>
              <span>Travels</span>
            </h2>
          </div>

          <div className="card-columns listrecent">
            {travels.map((travel) => (
              <div className="card" key={travel.id}>
                <Link to={"/blogs/" + travel.frontmatter.slug} key={travel.id}>
                  <GatsbyImage
                    image={
                      travel.frontmatter.featuredImg.childImageSharp
                        .gatsbyImageData
                    }
                    alt=""
                  />
                </Link>
                <div className="card-block">
                  <h2 className="card-title">
                    <Link
                      to={"/blogs/" + travel.frontmatter.slug}
                      key={travel.id}
                    >
                      {travel.frontmatter.title}
                    </Link>
                  </h2>
                  <h4 className="card-text">
                    {travel.frontmatter.description.substring(0, 200)}...
                  </h4>
                  <div className="wrapfooter">
                    <span className="author-meta">
                      <span className="post-date"></span>
                      <span className="post-read">
                        {travel.frontmatter.readTime} min read
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </React.Fragment>
  );
}

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fileAbsolutePath: { regex: "/(projects)/" } }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          description
          readTime
          featuredImg {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
        id
      }
    }
    travels: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fileAbsolutePath: { regex: "/(travels)/" } }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          description
          readTime
          featuredImg {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
        id
      }
    }
    metadata: site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
