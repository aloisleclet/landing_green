import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';
import Footer from './Footer';
import SideBar from './Sidebar';
import picOg from '../assets/images/landscapes/mouflons.jpg';


class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true,
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children, fullMenu } = this.props;
    const { isPreloaded } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Regroupement d\'artistes, paysans, militants de l\'environnement le 12 juillet 2020 au plan d\'eau des iscles  (05), L\'action se poursuivra par la diffusion d\'un reportage sur l\'événement'},
                { name: 'keywords', content: 'paysan militant militants environnement plan d\'eau des iscles (05) reportage evenement' },
                { name: 'og:title', content: 'Regroupement d\'artistes, paysans et militants de l\'environnement' },
                { name: 'og:description', content: 'Regroupement d\'artistes, paysans, militants de l\'environnement le 12 juillet 2020 au plan d\'eau des iscles (05), L\'action se poursuivra par la diffusion d\'un reportage sur l\'événement'},
                { name: 'og:image', content: picOg },
                { name: 'og:url', content: 'https://tesriensanslaterre.com' },
                { name: 'og:type', content: 'article' },
                { name: 'og:locale', content: 'fr_FR' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <div
              className={isPreloaded ? ' main-body  is-preload' : ' main-body'}
            >
              <div id="page-wrapper">
                <SideBar fullMenu={fullMenu} />
                {children}
                <Footer />
              </div>
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
