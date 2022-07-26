import { graphql, useStaticQuery } from "gatsby";
import "katex/dist/katex.min.css";
import React from "react";
import "../styles/bootstrap.min.css";
import "../styles/global.scss";
import Navbar from "./Navbar";

export default function Layout({ children, fullHeight }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `);
  const { copyright } = data.site.siteMetadata;

  return (
    <div className={`container ${fullHeight ? "layout" : ""}`}>
      <Navbar />
      <main>{children}</main>
      <footer className="footer">
        <p className="pull-right">{copyright}</p>
      </footer>
    </div>
  );
}
