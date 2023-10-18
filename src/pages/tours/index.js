import * as React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import TourDemo01 from './demo-01/index'

const TourPage = () => {
  return (
    <Layout pageTitle="Tour Examples">
      <TourDemo01 />
    </Layout>
  );
};

export const Head = () => <Seo title="Tour Examples" />;

export default TourPage;
