import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

export default function Navbar() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 30)
        }
      }
    }
  `);

  return (
    <React.Fragment>
      <nav className="navbar navbar-toggleable-md navbar-light bg-white fixed-top mediumnavigation">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="container" style={{ paddingBottom: 0 }}>
          <Link to="/" className="nav-brand">
            <GatsbyImage
              image={data.file.childImageSharp.gatsbyImageData}
              alt=""
            />
          </Link>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" activeClassName="active">
                  Stories
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" activeClassName="active">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
