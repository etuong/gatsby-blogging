import { graphql, useStaticQuery } from "gatsby";
import "katex/dist/katex.min.css";
import React from "react";
import "../styles/bootstrap.min.css";
import "../styles/global.scss";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";

export default function Layout({ children, fullHeight, title }) {
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
      <Helmet>
        <title>{title}</title>
        <script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js"
          integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <Navbar />
      <main>{children}</main>
      <footer className="footer">
        <p>{copyright}</p>
      </footer>
    </div>
  );
}
