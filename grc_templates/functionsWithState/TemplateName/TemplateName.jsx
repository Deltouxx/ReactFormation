import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateName.module.css';

const templateNameInitialState={};

const TemplateName = (props) => {

  useEffect(() => {
 console.log('montage de Template')

  return () => {
    second
  }
}, [])

const [state, setState] = useState(second)


  return(
  <div className={styles.TemplateName} data-testid="TemplateName">
    TemplateName Component
  </div>);

};

TemplateName.propTypes = {};

TemplateName.defaultProps = {};

export default TemplateName;
