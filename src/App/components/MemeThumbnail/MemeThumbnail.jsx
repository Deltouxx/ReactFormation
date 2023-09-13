import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./MemeThumbnail.module.css";
import { changeCurrent } from "../../store/current";

const memeThumbnailInitialState = {};
const MemeThumbnail = (props) => {
  return (
    <div className={styles.MemeThumbnail} data-testid="MemeThumbnail">
      MemeThumbnail Component
    </div>
  );
};

MemeThumbnail.propTypes = {};

MemeThumbnail.defaultProps = {};

export default MemeThumbnail;
export const MemeThumbnailStoredDatas=(props)=>{

  const dispatch = useDispatch();
  const images = useSelector((s) => s.ressources.images);
  const memes = useSelector((s) => s.ressources.memes);
  return <MemeThumbnail {...props} memes={memes} images={images} onMemeClick={(id)=>{
    dispatch(changeCurrent( memes.find(m=>m.id===id)));
  }}/>
}