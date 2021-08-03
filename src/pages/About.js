import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="page-container">
      <h2>Start2impact - React project</h2>
      <p>
        My name is Omar Manganese and I've created this web app as a project for
        the start2impact web development course to become a full-stack
        developer. <br />
        <br />
        You can find the details at the{" "}
        <a href="https://github.com/OmarManganese/searching-books">
          Github repository of this project.
        </a>
      </p>
      <Link to="/">Back Home</Link>
    </div>
  );
}
