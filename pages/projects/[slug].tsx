import React from "react";

export default function ProjectPage() {
  return <div>ProjectPage</div>;
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "my-first-project" } }],
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
