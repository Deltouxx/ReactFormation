import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = () => (
  <div className={styles.Footer} data-testid="Footer">
     <span className={styles.orchestre} >Fait par Michel et son Orchestre</span> 
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
