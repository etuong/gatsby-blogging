import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import "../styles/global.scss";
import "../styles/bootstrap.min.css";
import Navbar from "./Navbar";

export default function Layout({ children }) {
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
    <div className="container">
      <Navbar />
      {children}
      {/* <footer className="footer">
        <p className="pull-right">{copyright}</p>
      </footer> */}
    </div>
  );
}
