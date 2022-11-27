import React, { FunctionComponent } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import * as styles from './index.module.scss';

const IndexPage: FunctionComponent<PageProps> = () => {
  return (
    <main>
      <h1 className={styles.header}>Hello world!</h1>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return <title>Home Page</title>;
};
