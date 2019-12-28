(this.webpackJsonpforbes_coe=this.webpackJsonpforbes_coe||[]).push([[0],{70:function(e,t,a){e.exports=a(88)},87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),n=a(22),o=a.n(n),s=a(23),i=a(24),c=a(29),m=a(25),u=a(30),d=a(28),p=a(45),h=a(18),y=a(57),f=a(14),g=a(52),b=a(58),E=a.n(b),v=a(59),B=a(21),C=a(31),k="FETCH_BLOGS",O="SET_DISPLAY_ITEM_COUNT",I="SET_SORT_BY_FIELD",N="SET_FILTER",j="SET_LIKES",x={allItems:[],items:[],filterByAuthor:"",filterByCategory:"",sortBy:"",sortOrder:"",itemsToDisplay:0},w=Object(f.c)({blogs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case k:return Object(C.a)({},e,{items:Object(B.a)(t.payload),allItems:Object(B.a)(t.payload)});case O:return Object(C.a)({},e,{itemsToDisplay:t.payload});case I:var a=Object(B.a)(e.items);return t.payload.sortBy&&a.sort((function(e,a){return"published_date"===t.payload.sortBy?"asc"===t.payload.sortOrder?e[t.payload.sortBy]-a[t.payload.sortBy]:a[t.payload.sortBy]-e[t.payload.sortBy]:"asc"===t.payload.sortOrder?e[t.payload.sortBy].localeCompare(a[t.payload.sortBy]):a[t.payload.sortBy].localeCompare(e[t.payload.sortBy])})),Object(C.a)({},e,{items:a,sortBy:t.payload.sortBy,sortOrder:t.payload.sortOrder});case N:var l=Object(B.a)(e.allItems),r=e.filterByAuthor,n=e.filterByCategory;return"author"===t.payload.field?(r=t.payload.filterText,l=l.filter((function(e){return e[t.payload.field].toLowerCase().includes(t.payload.filterText.toLowerCase())}))):"category"===t.payload.field&&(n=t.payload.filterText,l=l.filter((function(e){return e[t.payload.field].toLowerCase().includes(t.payload.filterText.toLowerCase())}))),Object(C.a)({},e,{items:l,filterByAuthor:r,filterByCategory:n});case j:var o=Object(B.a)(e.items).map((function(e){return t.payload.id===e.id&&(e.likes=t.payload.likes),e})),s=Object(B.a)(e.allItems).map((function(e){return t.payload.id===e.id&&(e.likes=t.payload.likes),e}));return Object(C.a)({},e,{items:o,allItems:s});default:return e}}}),T=[v.a],D={key:"root",storage:E.a},A=Object(g.a)(D,w),_=Object(f.d)(A,{},f.a.apply(void 0,T)),L={store:_,persistor:Object(g.b)(_)},S=a(37),M=a(92),F=a(95),R=a(96),Y=a(63),P=a(97),z=a(94),H=a(90),G=a(61),J=a(93),K=a(68);function U(){return function(e){fetch("".concat("/test-blogs","/blogs.json")).then((function(e){return e.json()})).then((function(t){return e({type:k,payload:t})}))}}function q(e){return{type:O,payload:e}}var Q=a(38),V=a.n(Q),W=a(98),X=a(91),Z="DD/MM/YYYY";var $=function(e){return r.a.createElement(H.a,{className:"blog-item-container mb-4",onClick:function(){return e.handleClick(e.item.id)}},r.a.createElement(G.a,{xs:8},r.a.createElement(W.a,null,r.a.createElement(W.a.Body,null,r.a.createElement(W.a.Text,{as:"div",className:"clearfix"},r.a.createElement("div",{className:"float-left mr-2 font-italic"},r.a.createElement(V.a,{format:Z},e.item.published_date)),r.a.createElement("div",{className:"float-left font-weight-bold"},e.item.category),r.a.createElement("div",{className:"float-right text-muted"},r.a.createElement("svg",{className:"bi bi-heart-fill",width:"1.2em",height:"1.2em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M10 3.314C14.438-1.248 25.534 6.735 10 17-5.534 6.736 5.562-1.248 10 3.314z",clipRule:"evenodd"})),e.item.likes)),r.a.createElement(W.a.Title,null,e.item.title),r.a.createElement(W.a.Subtitle,{className:"mb-2 text-muted text-truncate"},e.item.description),r.a.createElement(W.a.Text,{as:"div"},r.a.createElement("div",null,r.a.createElement("span",{className:"mr-1"},"By"),r.a.createElement("span",{className:"font-italic font-weight-bold"},e.item.author)))))),r.a.createElement(G.a,{xs:4},r.a.createElement(X.a,{src:e.item.imgs.thumb,rounded:!0,fluid:!0})))},ee=4,te=function(e){switch(e){case"author":return"Author";case"category":return"Category";case"published_date":return"Published Date";default:return"Sort By"}},ae=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).loadMoreArticles=function(){var e=a.props.itemsToDisplay;a.props.setDisplayItemCount(e+ee)},a.sortBy=function(e){var t=a.props,l=t.sortBy,r=t.sortOrder,n=a.props,o=n.setDisplayItemCount,s=n.setSortBy;o(ee);var i="asc";l===e&&"asc"===r&&(i="desc"),s(e,i)},a.handleFilterByChange=function(e){a.setState(Object(S.a)({},e.target.name,e.target.value));var t=a.props,l=t.setDisplayItemCount,r=t.setFilterBy;l(ee),r(e.target.name,e.target.value)},a.handleBlogClick=function(e){a.props.history.push("/blog/".concat(e))},a.state={author:e.filterByAuthor||"",category:e.filterByCategory||""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.allItems&&this.props.allItems.length||(this.props.setDisplayItemCount(ee),this.props.fetchBlogs())}},{key:"render",value:function(){var e=this,t=this.props,a=t.blogs,l=t.itemsToDisplay,n=t.sortBy,o=[];if(a&&a.length>0)for(var s=0;s<a.length&&(o.push(r.a.createElement($,{key:"blog-".concat(s),item:a[s],handleClick:this.handleBlogClick})),s+1!==l);s++);return r.a.createElement(M.a,null,r.a.createElement(F.a,{expand:"lg",className:"blogs-title-container mb-5 mt-4"},r.a.createElement(F.a.Brand,null,r.a.createElement("h2",{className:"blogs-title-text"},"Blogs")),r.a.createElement(F.a.Collapse,{className:"show"},r.a.createElement(R.a,{inline:!0,className:"ml-auto"},r.a.createElement(Y.a,{type:"text",placeholder:"Filter by Author",className:"mr-sm-2",onChange:this.handleFilterByChange,name:"author",value:this.state.author}),r.a.createElement(Y.a,{type:"text",placeholder:"Filter by Category",className:"mr-sm-2",onChange:this.handleFilterByChange,name:"category",value:this.state.category})),r.a.createElement(P.a,null,r.a.createElement(z.a,{title:te(n)},r.a.createElement(z.a.Item,{onClick:function(){return e.sortBy("author")}},"Author"),r.a.createElement(z.a.Item,{onClick:function(){return e.sortBy("category")}},"Category"),r.a.createElement(z.a.Item,{onClick:function(){return e.sortBy("published_date")}},"Published Date"))))),r.a.createElement(H.a,null,r.a.createElement(G.a,null,a&&a.length>0?o:"No blog found.")),r.a.createElement(H.a,{className:"mb-3"},r.a.createElement(G.a,null,a&&a.length>0&&l<a.length?r.a.createElement(J.a,null,r.a.createElement(K.a,{variant:"outline-secondary",className:"mx-auto d-block",onClick:this.loadMoreArticles},"More Articles")):null)))}}]),t}(l.Component),le={fetchBlogs:U,setDisplayItemCount:q,setSortBy:function(e,t){return{type:I,payload:{sortBy:e,sortOrder:t}}},setFilterBy:function(e,t){return{type:N,payload:{field:e,filterText:t}}}},re=Object(d.b)((function(e){return{allItems:e.blogs.allItems,blogs:e.blogs.items,itemsToDisplay:e.blogs.itemsToDisplay,sortBy:e.blogs.sortBy,sortOrder:e.blogs.sortOrder,filterByAuthor:e.blogs.filterByAuthor,filterByCategory:e.blogs.filterByCategory}}),le)(ae),ne=function(e){function t(){var e,a;Object(s.a)(this,t);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleBlogClick=function(e){a.props.history.push("/blog/".concat(e))},a.handleLikeClick=function(){var e=a.props.currItem,t=e.id,l=e.likes;a.props.setLikes(t,l+1)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.allItems&&this.props.allItems.length||(this.props.setDisplayItemCount(ee),this.props.fetchBlogs())}},{key:"render",value:function(){var e=this.props,t=e.currItem,a=e.similarItems;if(!t.id)return r.a.createElement(H.a,null,r.a.createElement(G.a,null,r.a.createElement("div",{className:"text-center mt-5"},"Article not found. Go to ",r.a.createElement(p.b,{to:"/"},"Home"))));var l=[];if(a&&a.length>0)for(var n=0;n<a.length;n++)l.push(r.a.createElement($,{key:"blog-".concat(n),item:a[n],handleClick:this.handleBlogClick}));return r.a.createElement("div",null,r.a.createElement("div",{className:"blog-item-image-container",style:{backgroundImage:"url(".concat(t.imgs.large,")")}},r.a.createElement(X.a,{src:t.imgs.large,fluid:!0})),r.a.createElement(M.a,null,r.a.createElement(H.a,{className:"mt-3 mb-5"},r.a.createElement(G.a,{xs:12,sm:9},r.a.createElement("h4",null,t.title),r.a.createElement("div",{className:"clearfix"},r.a.createElement("div",{className:"text-muted font-italic float-right"},"Published on:  ",r.a.createElement(V.a,{format:Z},t.published_date))),r.a.createElement("hr",null),r.a.createElement("div",null,t.description),r.a.createElement("hr",null),r.a.createElement("div",{className:"clearfix mb-3"},r.a.createElement("div",{className:"float-left text-muted",style:{padding:".375rem .75rem"}},r.a.createElement("svg",{className:"bi bi-heart-fill",width:"1.2em",height:"1.2em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M10 3.314C14.438-1.248 25.534 6.735 10 17-5.534 6.736 5.562-1.248 10 3.314z",clipRule:"evenodd"})),t.likes," likes"),r.a.createElement("div",{className:"float-right"},r.a.createElement("span",{className:"d-inline-block"},"Liked the Articale? Hit like button"),r.a.createElement(J.a,{className:"d-inline-block ml-2"},r.a.createElement(K.a,{variant:"primary",className:"like-btn",onClick:this.handleLikeClick},r.a.createElement("svg",{className:"bi bi-heart-fill mr-1",width:"1.2em",height:"1.2em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M10 3.314C14.438-1.248 25.534 6.735 10 17-5.534 6.736 5.562-1.248 10 3.314z",clipRule:"evenodd"})),"Like"))))),r.a.createElement(G.a,null,r.a.createElement(X.a,{src:"/add_placeholder.png",fluid:!0}))),l.length&&r.a.createElement(H.a,{className:"blogs-title-container mb-5 mt-4"},r.a.createElement(G.a,null,r.a.createElement("h2",{className:"blogs-title-text mt-1"},"Similer Articales"))),l.length&&r.a.createElement(H.a,null,r.a.createElement(G.a,null,l))))}}]),t}(l.Component),oe={fetchBlogs:U,setDisplayItemCount:q,setLikes:function(e,t){return{type:j,payload:{id:e,likes:t}}}},se=Object(d.b)((function(e,t){var a=e.blogs.allItems.find((function(e){return Number(e.id)===Number(t.match.params.id)}))||{},l=[];return a.id&&(l=e.blogs.allItems.filter((function(e){return e.category===a.category&&e.id!==a.id}))),{allItems:e.blogs.allItems,similarItems:l,currItem:a}}),oe)(ne),ie=(a(86),a(87),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{store:L.store},r.a.createElement(y.a,{loading:null,persistor:L.persistor},r.a.createElement(p.a,null,r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/blog/:id",component:se}),r.a.createElement(h.a,{path:"/",component:re})))))}}]),t}(l.Component));o.a.render(r.a.createElement(ie,null),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.92bece99.chunk.js.map