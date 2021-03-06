import { FETCH_BLOGS, SET_DISPLAY_ITEM_COUNT, SET_SORT_BY_FIELD, SET_FILTER, SET_LIKES, SET_LIKED_ITEMS } from '../actions/types';

const initialState = {
  allItems: [],
  items: [],
  filterByAuthor: '',
  filterByCategory: '',
  sortBy: '',
  sortOrder: '',
  itemsToDisplay: 0,
  likedItems: []
}

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_BLOGS:
      return {
        ...state,
        items: [...action.payload],
        allItems: [...action.payload]
      }
    case SET_DISPLAY_ITEM_COUNT:
      return {
        ...state,
        itemsToDisplay: action.payload
      }
    case SET_SORT_BY_FIELD:
      const sorterItems = [...state.items];
      if (action.payload.sortBy) {
        sorterItems.sort((a, b) => {
          if (action.payload.sortBy === 'published_date') {
            if (action.payload.sortOrder === 'asc') {
              return a[action.payload.sortBy] - b[action.payload.sortBy];
            } else {
              return b[action.payload.sortBy] - a[action.payload.sortBy];
            }
          } else {
            if (action.payload.sortOrder === 'asc') {
              return a[action.payload.sortBy].localeCompare(b[action.payload.sortBy]);
            } else {
              return b[action.payload.sortBy].localeCompare(a[action.payload.sortBy]);
            }
          }
        });
      }
      return {
        ...state,
        items: sorterItems,
        sortBy: action.payload.sortBy,
        sortOrder: action.payload.sortOrder
      }
    case SET_FILTER:
      let filteredItems = [...state.allItems];
      let { filterByAuthor, filterByCategory } = state;
      if (action.payload.field === 'author') {
        filterByAuthor = action.payload.filterText;
        filteredItems = filteredItems.filter((item) => {
          return item[action.payload.field].toLowerCase().includes(action.payload.filterText.toLowerCase());
        });

        if (filterByCategory) {
          filteredItems = filteredItems.filter((item) => {
            return item.category.toLowerCase().includes(filterByCategory.toLowerCase());
          });
        }
      } else if (action.payload.field === 'category') {
        filterByCategory = action.payload.filterText;
        filteredItems = filteredItems.filter((item) => {
          return item[action.payload.field].toLowerCase().includes(action.payload.filterText.toLowerCase());
        });

        if (filterByAuthor) {
          filteredItems = filteredItems.filter((item) => {
            return item.author.toLowerCase().includes(filterByAuthor.toLowerCase());
          });
        }
      }
      return {
        ...state,
        items: filteredItems,
        filterByAuthor,
        filterByCategory,
      }
    case SET_LIKES:
      const likedItems = [...state.likedItems];
      let newLikedItem = false;
      const items = [...state.items].map(item => {
        if (action.payload.id === item.id && !likedItems.includes(action.payload.id)) {
          item.likes = action.payload.likes;
          newLikedItem = true;
        }
        return item;
      });
      const allItems = [...state.allItems].map(item => {
        if (action.payload.id === item.id && !likedItems.includes(action.payload.id)) {
          item.likes = action.payload.likes;
          newLikedItem = true;
        }
        return item;
      });
      if (newLikedItem) {
        likedItems.push(action.payload.id);
      }

      return {
        ...state,
        items,
        allItems,
        likedItems
      }
    default:
      return state;
  }
}