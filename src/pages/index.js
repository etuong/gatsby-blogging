import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";

export default function Home({ data }) {
  const { title, description } = data.metadata.siteMetadata;
  const projects = data.projects.nodes;

  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Layout>
        <div className="">
          <div className="mainheading">
            <h1 className="sitetitle">{title}</h1>
            <p className="lead">{description}</p>
          </div>

          <section className="featured-posts">
            <div className="section-title">
              <h2>
                <span>Featured</span>
              </h2>
            </div>

            <div className="card-columns listfeaturedtag">
              {projects.map((project) => (
                <div className="card" key={project.id}>
                  <div className="row">
                    <div className="col-md-5 wrapthumbnail">
                      <Link
                        to={"/projects/" + project.frontmatter.slug}
                        key={project.id}
                      >
                        <GatsbyImage
                          image={
                            project.frontmatter.thumb.childImageSharp
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
                            to={"/projects/" + project.frontmatter.slug}
                            key={project.id}
                          >
                            {project.frontmatter.title}
                          </Link>
                        </h2>
                        <h4 className="card-text">
                          This is a longer card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </h4>
                        <div className="metafooter">
                          <div className="wrapfooter">
                            <span className="author-meta">
                              <span className="post-date">
                                {project.frontmatter.date}
                              </span>
                              <span className="post-read">6 min read</span>
                            </span>
                          </div>
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
              {projects.map((project) => (
                <div className="card" key={project.id}>
                  <Link
                    to={"/projects/" + project.frontmatter.slug}
                    key={project.id}
                  >
                    <GatsbyImage
                      image={
                        project.frontmatter.thumb.childImageSharp
                          .gatsbyImageData
                      }
                      alt=""
                    />
                  </Link>
                  <div className="card-block">
                    <h2 className="card-title">
                      <Link
                        to={"/projects/" + project.frontmatter.slug}
                        key={project.id}
                      >
                        {project.frontmatter.title}
                      </Link>
                    </h2>
                    <h4 className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </h4>
                    <div className="metafooter">
                      <div className="wrapfooter">
                        <span className="author-meta">
                          <span className="post-date">
                            {project.frontmatter.date}
                          </span>
                          <span className="post-read">6 min read</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Layout>
    </React.Fragment>
  );
}

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
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
