import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  ButtonToolbar,
  Button
} from 'react-bootstrap';

import { fetchBlogs, setDisplayItemCount, setSortBy, setFilterBy } from '../actions/blogActions';
import BlogItem from './BlogItem';

export const PAGE_SIZE = 4;

const getSortByText = (sortBy) => {
  switch (sortBy) {
    case 'author':
      return 'Author';
    case 'category':
      return 'Category';
    case 'published_date':
      return 'Published Date';
    default:
      return 'Sort By'
  }
}

class Blogs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      author: props.filterByAuthor || '',
      category: props.filterByCategory || ''
    };
  }

  componentDidMount() {
    if (!this.props.allItems || !this.props.allItems.length) {
      this.props.setDisplayItemCount(PAGE_SIZE);
      this.props.fetchBlogs();
    }
  }

  loadMoreArticles = () => {
    const { itemsToDisplay } = this.props;
    this.props.setDisplayItemCount((itemsToDisplay + PAGE_SIZE));
  }

  sortBy = (field) => {
    const { sortBy, sortOrder } = this.props;
    const { setDisplayItemCount, setSortBy } = this.props;
    setDisplayItemCount(PAGE_SIZE);
    let fieldOrder = 'asc';
    if (sortBy === field && sortOrder === 'asc') {
      fieldOrder = 'desc';
    }
    setSortBy(field, fieldOrder);
  }

  handleFilterByChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    const { setDisplayItemCount, setFilterBy } = this.props;
    setDisplayItemCount(PAGE_SIZE);
    setFilterBy(event.target.name, event.target.value);
  }

  handleBlogClick = id => {
    this.props.history.push(`/blog/${id}`);
  }

  render() {
    const { blogs, itemsToDisplay, sortBy } = this.props;
    const blogItems = [];
    if (blogs && blogs.length > 0) {
      for (var i = 0; i < blogs.length; i++) {
        blogItems.push(<BlogItem key={`blog-${i}`} item={blogs[i]} handleClick={this.handleBlogClick}/>);
        if ((i + 1) === itemsToDisplay) {
          break;
        }
      }
    }
    return (
      <Container>
        <Navbar expand="lg" className="blogs-title-container mb-5 mt-4">
          <Navbar.Brand>
            <h2 className="blogs-title-text">Blogs</h2>
          </Navbar.Brand>
          <Navbar.Collapse className="show">
            <Form inline className="ml-auto">
              <FormControl type="text"
                placeholder="Filter by Author"
                className="mr-sm-2"
                onChange={this.handleFilterByChange}
                name='author'
                value={this.state.author}
              />
              <FormControl type="text"
                placeholder="Filter by Category"
                className="mr-sm-2"
                onChange={this.handleFilterByChange} 
                name='category'
                value={this.state.category}
              />
            </Form>
            <Nav>
              <NavDropdown title={getSortByText(sortBy)}>
                <NavDropdown.Item onClick={() => this.sortBy('author')}>Author</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.sortBy('category')}>Category</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.sortBy('published_date')}>Published Date</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Row>
          <Col>
            {(blogs && blogs.length > 0) ? blogItems : 'No blog found.'}
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            {(blogs && blogs.length > 0 && itemsToDisplay < blogs.length) ? (
              <ButtonToolbar>
                <Button
                  variant="outline-secondary"
                  className="mx-auto d-block"
                  onClick={this.loadMoreArticles}
                >
                  More Articles
                </Button>
              </ButtonToolbar>
            ) : null}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  allItems: state.blogs.allItems,
  blogs: state.blogs.items,
  itemsToDisplay: state.blogs.itemsToDisplay,
  sortBy: state.blogs.sortBy,
  sortOrder: state.blogs.sortOrder,
  filterByAuthor: state.blogs.filterByAuthor,
  filterByCategory: state.blogs.filterByCategory,
});

const mapDispatchToProps = { fetchBlogs, setDisplayItemCount, setSortBy, setFilterBy };

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);