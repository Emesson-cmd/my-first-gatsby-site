import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import TourDemo01 from './demo-01/index';
import TourDemo02 from './demo-02/index';
import TourDemo03 from './demo-03/index';
import { demoContainer, navLinks, navItems, navItemSelected } from './index.module.css';

const TourPage = () => {
  const [selected, setSelected] = React.useState(0);
  const navLinkItems = ['Demo 01', 'Demo 02', 'Demo 03'];
  const demoList = [<TourDemo01 />, <TourDemo02 />, <TourDemo03 />];

  return (
    <Layout pageTitle="Tour Examples">
      <div>
        <ul className={navLinks}>
          {navLinkItems.map((item, index) => (
            <li
              key={item}
              className={`${navItems} ${index === selected && navItemSelected}`}
              onClick={() => setSelected(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className={demoContainer}>{demoList[selected]}</div>
    </Layout>
  );
};

export const Head = () => <Seo title="Tour Examples" />;

export default TourPage;
