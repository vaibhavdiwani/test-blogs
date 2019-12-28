import { FETCH_BLOGS, SET_DISPLAY_ITEM_COUNT, SET_SORT_BY_FIELD, SET_FILTER, SET_LIKES } from './types';

function fetchBlogs() {
  return (dispatch) => {
    fetch(`${process.env.PUBLIC_URL}/blogs.json`)
      .then(res => res.json())
      .then(blogs => dispatch({
        type: FETCH_BLOGS,
        payload: blogs
      }));
  }
}

function setDisplayItemCount(count) {
  return {
    type: SET_DISPLAY_ITEM_COUNT,
    payload: count
  }
}

function setSortBy(sortBy, sortOrder) {
  return {
    type: SET_SORT_BY_FIELD,
    payload: {
      sortBy, 
      sortOrder
    }
  }
}

function setFilterBy(field, filterText) {
  return {
    type: SET_FILTER,
    payload: {
      field, 
      filterText
    }    
  }
}

function setLikes(id, likes) {
  return {
    type: SET_LIKES,
    payload: {
      id,
      likes
    }    
  }
}

export { fetchBlogs, setDisplayItemCount, setSortBy, setFilterBy, setLikes };