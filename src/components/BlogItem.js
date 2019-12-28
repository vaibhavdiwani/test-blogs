import React from 'react';
import Moment from 'react-moment';
import {
  Row,
  Col,
  Card,
  Image,
} from 'react-bootstrap';

export const DATE_FORMAT = 'DD/MM/YYYY';

function BlogItem(props) {
  return (
    <Row className="blog-item-container mb-4" onClick={() => props.handleClick(props.item.id)}>
      <Col xs={8}>
        <Card>
          <Card.Body>
            <Card.Text as="div" className="clearfix">
              <div className="float-left mr-2 font-italic">
                <Moment format={DATE_FORMAT}>{props.item.published_date}</Moment>
              </div>
              <div className="float-left font-weight-bold">{props.item.category}</div>
              <div className="float-right text-muted">
                <svg
                  className="bi bi-heart-fill"
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M10 3.314C14.438-1.248 25.534 6.735 10 17-5.534 6.736 5.562-1.248 10 3.314z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {props.item.likes}
              </div>
            </Card.Text>
            <Card.Title>{props.item.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-truncate">{props.item.description}</Card.Subtitle>
            <Card.Text as="div">
              <div>
                <span className="mr-1">By</span>
                <span className="font-italic font-weight-bold">{props.item.author}</span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={4}>
        <Image src={props.item.imgs.thumb} rounded fluid />
      </Col>
    </Row>
  );
}

export default (BlogItem);