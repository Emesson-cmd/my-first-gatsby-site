import * as React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import TourDemo04 from './demo-04/index';
import { demoContainer, navLinks, navItems, navItemSelected } from './index.module.css';

const TourPage = () => {
  const [selected, setSelected] = React.useState(0);
  const navLinkItems = [ 'Demo 04'];
  const demoList = [, <TourDemo04 />];

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
