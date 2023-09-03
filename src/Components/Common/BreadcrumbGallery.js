import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { BreadcrumbItem, Col, Row } from 'reactstrap';

import { useDispatch, useSelector } from 'react-redux';
import { removeAllSelectedGalleryImage } from '../../store/action/galleryAction';

function BreadcrumbGallery({ breadcrumbItem, maintitle, title, setmodal_fullscreen }) {
  const dispatch = useDispatch();
  const { selectedImages } = useSelector((state) => state.galleryReducer);

  return (
    <Row className="align-items-center">
      <Col sm={6}>
        <div className="page-title-box">
          <h4 className="font-size-18">{breadcrumbItem}</h4>
          <ol className="breadcrumb mb-0">
            {maintitle ? (
              <BreadcrumbItem>
                <Link to="/#">{maintitle}</Link>
              </BreadcrumbItem>
            ) : (
              ''
            )}

            {title && (
              <BreadcrumbItem>
                <Link to="/#">{title}</Link>
              </BreadcrumbItem>
            )}

            <BreadcrumbItem active>{breadcrumbItem}</BreadcrumbItem>
          </ol>
        </div>
      </Col>
      <Col sm={6}>
        <div className="d-flex justify-content-between align-items-center">
          <div></div>

          <div>
            <button
              type="button"
              className="btn btn-primary waves-effect waves-light"
              onClick={() => setmodal_fullscreen(true)}
              style={{ height: '40px' }}
            >
              Upload Files
            </button>

            {selectedImages.length > 0 && (
              <button
                type="button"
                className="btn btn-danger waves-effect waves-light mx-2"
                onClick={() => {
                  dispatch(removeAllSelectedGalleryImage());
                }}
                style={{ height: '40px' }}
              >
                <i className="fas fa-remove"></i> Clear All
              </button>
            )}
          </div>
        </div>
      </Col>
    </Row>
  );
}

BreadcrumbGallery.propTypes = {
  breadcrumbItem: PropTypes.string,
  title: PropTypes.string,
};

export default BreadcrumbGallery;
