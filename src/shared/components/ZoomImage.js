import React, { Fragment, useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { Portal, Backdrop, withStyles } from "@material-ui/core";
import ScrollbarSize from "@material-ui/core/Tabs/ScrollbarSize";
import classNames from "classnames";

const styles = (theme) => ({
  backdrop: {
    zIndex: theme.zIndex.modal,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  portalImgInnerWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  portalImg: {
    objectFit: "contain",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  zoomedOutImage: {
    cursor: "pointer",
  },
});

function ZoomImage(props) {
  const { alt, src, zoomedImgProps, classes, className, ...rest } = props;
  const [zoomedIn, setZoomedIn] = useState(false);
  const [scrollbarSize, setScrollbarSize] = useState(null);

  const zoomIn = useCallback(() => {
    setZoomedIn(true);
  }, [setZoomedIn]);

  const zoomOut = useCallback(() => {
    setZoomedIn(false);
  }, [setZoomedIn]);


  return (
    <Fragment>
      <ScrollbarSize onChange={setScrollbarSize}></ScrollbarSize>
      {zoomedIn && (
        <Portal>
          <Backdrop
            open={zoomedIn}
            className={classes.backdrop}
            onClick={zoomOut}
          ></Backdrop>
          <div onClick={zoomOut} className={classes.portalImgWrapper}>
            <div className={classes.portalImgInnerWrapper}>
              <img
                alt={alt}
                src={src}
                className={classes.portalImg}
                {...zoomedImgProps}
              ></img>
            </div>
          </div>
        </Portal>
      )}
      <img
        alt={alt}
        src={src}
        onClick={zoomIn}
        className={classNames(className, classes.zoomedOutImage)}
        {...rest}
      ></img>
    </Fragment>
  );
}

ZoomImage.propTypes = {
  classes: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  zoomedImgProps: PropTypes.object,
  className: PropTypes.string,
};

export default withStyles(styles, { withTheme: true })(ZoomImage);