import * as React from 'react';
import Layout from '../components/layout';
import ImageGallery from '../components/ImageGallery';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page" siteName="Bikash Moktan">
      <ImageGallery />
    </Layout>
  );
}

export const Head = () => <title>Home Page</title>;

export default IndexPage;
