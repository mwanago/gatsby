import React, { FunctionComponent } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Link } from 'gatsby';

const AboutPage: FunctionComponent<PageProps> = () => {
  return (
    <main>
      <h1>About me page</h1>
      <Link to="/">Go to the main page</Link>
    </main>
  );
};

export default AboutPage;

export const Head: HeadFC = () => {
  return <title>About me</title>;
};
