import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Moment from 'react-moment';
import {
  Container,
  Row,
  Col,
  Image,
  ButtonToolbar,
  Button
} from 'react-bootstrap';

import { fetchBlogs, setDisplayItemCount, setLikes } from '../actions/blogActions';
import { PAGE_SIZE } from './Blogs';
import BlogItem, { DATE_FORMAT } from './BlogItem';

class BlogDetails extends Component {

  componentDidMount() {
    if (!this.props.allItems || !this.props.allItems.length) {
      this.props.setDisplayItemCount(PAGE_SIZE);
      this.props.fetchBlogs();
    }
  }

  handleBlogClick = id => {
    this.props.history.push(`/blog/${id}`);
  }

  handleLikeClick = () => {
    const {id, likes} = this.props.currItem;
    this.props.setLikes(id, (likes + 1));
  }

  render() {
    const { currItem, similarItems } = this.props;
    if (!currItem.id) {
      return <Row>
        <Col>
          <div className="text-center mt-5">
            Article not found. Go to <Link to="/">Home</Link>
          </div>
        </Col>
      </Row>
    }

    const blogItems = [];
    if (similarItems && similarItems.length > 0) {
      for (var i = 0; i < similarItems.length; i++) {
        blogItems.push(<BlogItem key={`blog-${i}`} item={similarItems[i]} handleClick={this.handleBlogClick} />);
      }
    }
    return (
      <div>
        <div className="blog-item-image-container" style={{ backgroundImage: `url(${currItem.imgs.large})` }}>
          <Image src={currItem.imgs.large} fluid />
        </div>
        <Container>
          <Row className="mt-3 mb-5">
            <Col xs={12} sm={9}>
              <h4>{currItem.title}</h4>
              <div className="clearfix">
                <div className="text-muted font-italic float-right">Published on:  <Moment format={DATE_FORMAT}>{currItem.published_date}</Moment></div>
              </div>
              <hr />
              <div>{currItem.description}</div>
              <hr />
              <div className="clearfix mb-3">
                <div className="float-left text-muted" style={{ padding: '.375rem .75rem' }}>
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
                  {currItem.likes} likes
                </div>
                <div className="float-right">
                  <span className="d-inline-block">Liked the Articale? Hit like button</span>
                  <ButtonToolbar className="d-inline-block ml-2">
                    <Button
                      variant="primary"
                      className="like-btn"
                      onClick={this.handleLikeClick}
                    >
                      <svg
                        className="bi bi-heart-fill mr-1"
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
                      Like
                    </Button>
                  </ButtonToolbar>
                </div>
              </div>
            </Col>
            <Col>
              <Image src="/add_placeholder.png" fluid />
            </Col>
          </Row>
          {blogItems.length && (
            <Row className="blogs-title-container mb-5 mt-4">
              <Col>
                <h2 className="blogs-title-text mt-1">Similer Articales</h2>
              </Col>
            </Row>
          )}
          {blogItems.length && (
            <Row>
              <Col>
                {blogItems}
              </Col>
            </Row>
          )}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const currItem = state.blogs.allItems.find(item => Number(item.id) === Number(ownProps.match.params.id)) || {};
  let similarItems = [];
  if (currItem.id) {
    similarItems = state.blogs.allItems.filter(item => item.category === currItem.category && item.id !== currItem.id);
  }
  return {
    allItems: state.blogs.allItems,
    similarItems,
    currItem
  }
};

const mapDispatchToProps = { fetchBlogs, setDisplayItemCount, setLikes };

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetails);
