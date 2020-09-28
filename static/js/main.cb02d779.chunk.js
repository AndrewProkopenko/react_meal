(this["webpackJsonpreact-meal"]=this["webpackJsonpreact-meal"]||[]).push([[0],{35:function(e,t,a){e.exports=a(64)},40:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),s=(a(40),a(41),a(29)),o=a(30),i=a(34),m=a(33),u=r.a.createContext(),p=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={categories:[],searchString:"",searchResponse:[],isEmptySearchAnswer:!1,randomMeal:{},listCategories:{},listAreas:{},favorites:[]},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(u.Provider,{value:{categories:this.state.categories,searchResponse:this.state.searchResponse,searchString:this.state.searchString,isEmptySearchAnswer:this.state.isEmptySearchAnswer,randomMeal:this.state.randomMeal,listCategories:this.state.listCategories,listAreas:this.state.listAreas,favorites:this.state.favorites,setCategories:function(t){e.setState({categories:t})},setSearchResponse:function(t){e.setState({searchResponse:t})},setSearchString:function(t){e.setState({searchString:t})},setIsEmptySearchAnswer:function(t){e.setState({isEmptySearchAnswer:t})},setRandomMeal:function(t){e.setState({randomMeal:t})},setListCategories:function(t){e.setState({listCategories:t})},setListAreas:function(t){e.setState({listAreas:t})},hendlerFavorites:function(t,a){var n=!1,r=e.state.favorites.slice();e.state.favorites.length>0?(e.state.favorites.forEach((function(e){e.idMeal===a&&(n=!0)})),n?(r=r.filter((function(e){return e.idMeal!==a})),e.setState({favorites:r})):(r.push(t),e.setState({favorites:r}))):(r.push(t),e.setState({favorites:r}));var c=r.slice();c=JSON.stringify(c),localStorage.setItem("react_meal_favorites",c)},setFavoritesFromStorage:function(){var t=localStorage.getItem("react_meal_favorites");(t=JSON.parse(t))&&e.setState({favorites:t})}}},this.props.children)}}]),a}(n.Component),f=a(1),E=a.n(f),d=a(9),v=a(3),h=a(4);var C=function(e){var t=e.isFavorite?"favorite":"unfavorite";return r.a.useEffect((function(){})),r.a.createElement("div",{className:"single-meal row"},r.a.createElement("div",{className:"col-12 col-lg-3"},e.isFavoriteView||e.isHomeView?r.a.createElement(h.b,{to:"/meal/".concat(e.id)},r.a.createElement("div",{className:"img",style:{backgroundImage:"url(".concat(e.thumb,")")}})):r.a.createElement("h4",null,r.a.createElement("div",{className:"img",style:{backgroundImage:"url(".concat(e.thumb,")")}}))),r.a.createElement("div",{className:"col-12 col-lg-9"},r.a.createElement("div",{className:"pl-lg-3 mt-4 mt-lg-0"},r.a.createElement("div",{className:"d-flex justify-content-between"},e.isFavoriteView||e.isHomeView?r.a.createElement(h.b,{to:"/meal/".concat(e.id)},r.a.createElement("h4",null,e.title)):r.a.createElement("h4",null,e.title),r.a.createElement("div",{className:"btn  btn-favorite ".concat(t),onClick:function(){e.hendlerFavorites(e.meal,e.id)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd"},r.a.createElement("path",{d:"M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"})))),function(){if(!e.isFavoriteView)return r.a.createElement(r.a.Fragment,null,e.category&&r.a.createElement("div",{className:"link"},"Category:",r.a.createElement(h.b,{to:"/category/".concat(e.category)},e.category)),e.area&&r.a.createElement("div",{className:"link"},"Area:",r.a.createElement(h.b,{to:"/area/".concat(e.area)},e.area)))}(),function(){if(!e.isFavoriteView)return e.isHomeView?void 0:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"description"},e.description),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-8 col-lg-6"},function(){var t=[],a=[];if(0!==e.meal.length)for(var n=1;n<=20;n++){var c="strIngredient"+n,l="strMeasure"+n;""!==e.meal[c]&&null!==e.meal[c]&&(t.push(e.meal[c]),a.push(e.meal[l]))}return r.a.createElement("table",{className:"table table-striped table-hover "},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Ingredients"),r.a.createElement("th",{scope:"col"},"Measure "))),r.a.createElement("tbody",null,t.map((function(e,n){return r.a.createElement("tr",{key:n},r.a.createElement("td",null,t[n]),r.a.createElement("td",null,a[n]))}))))}())))}())))};var g=function(e){var t=r.a.useState(!1),a=Object(v.a)(t,2),c=a[0],l=a[1],s=Object(n.useContext)(u);return Object(n.useEffect)((function(){s.favorites.find((function(t){return t.idMeal===e.meal.idMeal}))?l(!0):l(!1)})),r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{thumb:e.meal.strMealThumb,title:e.meal.strMeal,category:e.meal.strCategory,area:e.meal.strArea,description:e.meal.strInstructions,meal:e.meal,id:e.meal.idMeal,hendlerFavorites:s.hendlerFavorites,isFavorite:c,isHomeView:e.isHomeView,isFavoriteView:e.isFavoriteView}))};var b=function(e){var t=e.value,a=e.isHide?"hide-item":"show-item";return e.data?r.a.createElement("div",null,r.a.createElement("ol",null,e.data.map&&e.data.map((function(e,n){return r.a.createElement("li",{key:n,className:a},r.a.createElement(h.b,{to:"/area/".concat(e[t])},e[t]))})))):""};var y=function(e){var t=Object(n.useContext)(u),a=Object(n.useState)(!0),c=Object(v.a)(a,2),l=c[0],s=c[1],o=Object(n.useState)(!0),i=Object(v.a)(o,2),m=i[0],p=i[1],f=Object(n.useState)("More"),E=Object(v.a)(f,2),d=E[0],C=E[1],y=Object(n.useState)("More"),w=Object(v.a)(y,2),N=w[0],S=w[1];function x(e){"category"===e&&("More"===d?C("Less"):d=C("More"),s(!l)),"area"===e&&(S("More"===N?"Less":"More"),p(!m))}return r.a.createElement("div",{className:"container container-styled container-home"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-lg-6"},r.a.createElement("div",{className:"container-home-wrapper"},r.a.createElement("div",{className:"container-home-header"},r.a.createElement("h5",null,"Don't know what to cook? ",r.a.createElement("br",null)," Random Meal for You!"),r.a.createElement("div",{className:"btn  btn-favorite btn-update",onClick:e.updateRandom},r.a.createElement("svg",{viewBox:"0 0 477.867 477.867"},r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M409.6,0c-9.426,0-17.067,7.641-17.067,17.067v62.344C304.667-5.656,164.478-3.386,79.411,84.479\r c-40.09,41.409-62.455,96.818-62.344,154.454c0,9.426,7.641,17.067,17.067,17.067S51.2,248.359,51.2,238.933\r c0.021-103.682,84.088-187.717,187.771-187.696c52.657,0.01,102.888,22.135,138.442,60.976l-75.605,25.207\r c-8.954,2.979-13.799,12.652-10.82,21.606s12.652,13.799,21.606,10.82l102.4-34.133c6.99-2.328,11.697-8.88,11.674-16.247v-102.4\r C426.667,7.641,419.026,0,409.6,0z"}))),r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M443.733,221.867c-9.426,0-17.067,7.641-17.067,17.067c-0.021,103.682-84.088,187.717-187.771,187.696\r c-52.657-0.01-102.888-22.135-138.442-60.976l75.605-25.207c8.954-2.979,13.799-12.652,10.82-21.606\r c-2.979-8.954-12.652-13.799-21.606-10.82l-102.4,34.133c-6.99,2.328-11.697,8.88-11.674,16.247v102.4\r c0,9.426,7.641,17.067,17.067,17.067s17.067-7.641,17.067-17.067v-62.345c87.866,85.067,228.056,82.798,313.122-5.068\r c40.09-41.409,62.455-96.818,62.344-154.454C460.8,229.508,453.159,221.867,443.733,221.867z"})))))),r.a.createElement("div",null,r.a.createElement(g,{meal:t.randomMeal,isHomeView:!0}),r.a.createElement(h.b,{className:"btn btn-primary px-5  w-400 ",to:"/meal/".concat(t.randomMeal.idMeal)},"Read More")))),r.a.createElement("div",{className:"col-12 col-lg-6"},r.a.createElement("div",{className:"item short-list"},r.a.createElement("h5",null,"List of \u0421ategories"),r.a.createElement(b,{data:t.listCategories,value:"strCategory",isHide:l}),r.a.createElement("button",{className:"btn btn-primary btn-more",onClick:function(){x("category")}},d)),r.a.createElement("div",{className:"item short-list"},r.a.createElement("h5",null,"List of Areas"),r.a.createElement(b,{data:t.listAreas,value:"strArea",isHide:m}),r.a.createElement("button",{className:"btn btn-primary btn-more",onClick:function(){x("area")}},N)))))},w=a(32),N=a.n(w).a.create({baseURL:"https://www.themealdb.com/api/json/v1/1"});N.interceptors.response.use((function(e){return e.data?e.data:e}),(function(e){return Promise.reject(e.response.data)}));var S=N,x=function(){var e=Object(d.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S.get("/categories.php"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S.get("/list.php?a=list"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(d.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S.get("/list.php?c=list"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(d.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S.get("/filter.php?c=".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(d.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S.get("/filter.php?a=".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S.get("/lookup.php?i=".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(d.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S.get("/search.php?s=".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(d.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S.get("/random.php"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var L=function(e){return r.a.createElement(h.b,{to:"".concat(e.link),className:"".concat(e.className," row")},e.thumb&&r.a.createElement("div",{className:"col col-sm-auto"},r.a.createElement("div",{className:"img",style:{backgroundImage:"url(".concat(e.thumb,")")}})),r.a.createElement("div",{className:"col text-cont"},e.name&&r.a.createElement("h5",null,e.name),e.desc&&r.a.createElement("p",null,e.desc)))};var V=function(e){var t=r.a.useState([]),a=Object(v.a)(t,2),c=a[0],l=a[1],s=Object(n.useContext)(u);return Object(n.useEffect)((function(){s.categories.length>0?l(s.categories):x().then((function(e){l(e.categories),s.setCategories(e.categories)}))}),[]),r.a.createElement("div",{className:"container container-styled "},r.a.createElement("h3",null,"Categories"),r.a.createElement("div",{className:"row"},r.a.createElement("div",null,c.length>0&&c.map((function(e){return r.a.createElement("div",{className:"col",key:e.idCategory},r.a.createElement(L,{id:e.idCategory,name:e.strCategory,desc:e.strCategoryDescription,thumb:e.strCategoryThumb,link:"/category/".concat(e.strCategory),className:"container-category"}))})))))};var R=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){0===a.length&&O().then((function(e){c(e.meals)}))})),r.a.createElement("div",{className:"container container-styled container-areas "},r.a.createElement("h3",null,"Areas"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(b,{data:a,value:"strArea"}))))};var B=function(e){var t=Object(n.useContext)(u);return r.a.createElement("div",{className:"container container-styled "},r.a.createElement("h3",null,"Favorites"),r.a.createElement("div",{className:"row flex-wrap"},t.favorites.length>0?t.favorites.map((function(e){return r.a.createElement("div",{className:"col-12 list-meals",key:e.idMeal},r.a.createElement(g,{meal:e,isFavoriteView:!0}))})):r.a.createElement("h5",{className:"text-center mt-3"},"You don't have any favorites")))};var D=function(e){var t=Object(n.useState)([]),a=Object(v.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){M(e.match.params.category).then((function(e){l(e.meals)}))}),[]),r.a.createElement("div",{className:"container container-styled "},r.a.createElement("h3",null,e.match.params.category),r.a.createElement("div",{className:"row"},c.length>0&&c.map((function(e){return r.a.createElement("div",{className:"col-6 col-md-4 col-lg-3",key:e.idMeal},r.a.createElement(L,{id:e.idMeal,name:e.strMeal,thumb:e.strMealThumb,className:"container-meals",link:"/meal/".concat(e.idMeal)}))}))))};var _=function(e){var t=Object(n.useState)([]),a=Object(v.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){A(e.match.params.area).then((function(e){l(e.meals)}))}),[]),r.a.createElement("div",{className:"container container-styled "},r.a.createElement("h3",null,e.match.params.area),r.a.createElement("div",{className:"row"},c.length>0&&c.map((function(e){return r.a.createElement("div",{className:"col-6 col-md-4 col-lg-3",key:e.idMeal},r.a.createElement(L,{id:e.idMeal,name:e.strMeal,thumb:e.strMealThumb,className:"container-meals",link:"/meal/".concat(e.idMeal)}))}))))};var U=function(e){var t=Object(n.useState)([]),a=Object(v.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){k(e.match.params.id).then((function(e){l(e.meals[0])}))}),[]),r.a.createElement("div",{className:"container container-styled "},r.a.createElement(g,{meal:c}))},I=a(2);var G=function(e){var t,a=Object(n.useState)(""),c=Object(v.a)(a,2),l=c[0],s=c[1],o=Object(n.useState)(!1),i=Object(v.a)(o,2),m=i[0],p=i[1],f=Object(n.useState)(!0),E=Object(v.a)(f,2),d=E[0],h=E[1],C=Object(n.useContext)(u);return Object(n.useEffect)((function(){t=l}),[]),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),C.setSearchString(l),H(l).then((function(e){null==e.meals?(C.setSearchResponse([]),C.setIsEmptySearchAnswer(!0)):(C.setSearchResponse(e.meals),C.setIsEmptySearchAnswer(!1)),p(!1)})),p(!0)},className:"d-flex search-form"},r.a.createElement("input",{type:"search",placeholder:"Search","aria-label":"Search",value:t,onChange:function(e){s(e.target.value),e.target.value.length>2?h(!1):h(!0),p(!1)},minLength:"3"}),r.a.createElement("button",{className:"btn btn-secondary",type:"submit",disabled:d},"Search"),m&&r.a.createElement(I.a,{to:"/search/".concat(l)}))};var Z=function(e){var t=Object(n.useContext)(u);return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("div",{className:"container"},r.a.createElement(h.b,{className:"navbar-brand",to:"/"},r.a.createElement("svg",{width:"85",height:"25",viewBox:"0 0 85 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M28.7728 10.656C29.1249 10.212 29.4589 9.786 29.7746 9.378C30.1024 8.958 30.4181 8.544 30.7217 8.136C31.0253 7.716 31.3228 7.296 31.6142 6.876C31.9178 6.444 32.2274 5.994 32.5432 5.526H35.6761C35.166 6.234 34.6743 6.906 34.2007 7.542C33.7271 8.178 33.2535 8.802 32.78 9.414C32.3064 10.014 31.8207 10.614 31.3228 11.214C30.8249 11.814 30.2967 12.432 29.7381 13.068L28.536 18H25.6945L26.8967 13.068C26.3867 11.796 25.9252 10.554 25.5124 9.342C25.0995 8.13 24.7109 6.858 24.3467 5.526H27.3703C27.5645 6.39 27.7771 7.236 28.0078 8.064C28.2385 8.892 28.4935 9.756 28.7728 10.656Z",fill:"url(#paint0_linear)"}),r.a.createElement("path",{d:"M43.5363 8.532L42.2431 13.914C42.0731 14.598 42.0245 15.288 42.0974 15.984C42.1702 16.668 42.3099 17.28 42.5163 17.82L40.0938 18.162C39.9602 17.898 39.8327 17.604 39.7113 17.28C39.3713 17.544 38.9888 17.766 38.5638 17.946C38.1388 18.126 37.6652 18.216 37.143 18.216C36.4266 18.216 35.8437 18.09 35.3944 17.838C34.9573 17.574 34.6294 17.232 34.4109 16.812C34.1923 16.38 34.0709 15.888 34.0466 15.336C34.0344 14.784 34.1012 14.22 34.2469 13.644L35.4855 8.532H38.1995L36.9791 13.608C36.9184 13.872 36.8637 14.142 36.8152 14.418C36.7787 14.694 36.7787 14.952 36.8152 15.192C36.8516 15.42 36.9427 15.612 37.0884 15.768C37.2462 15.912 37.4891 15.984 37.817 15.984C38.0963 15.984 38.3513 15.936 38.582 15.84C38.8248 15.732 39.0798 15.552 39.347 15.3C39.3713 15 39.4077 14.688 39.4563 14.364C39.517 14.028 39.5777 13.722 39.6384 13.446L40.8223 8.532H43.5363Z",fill:"url(#paint1_linear)"}),r.a.createElement("path",{d:"M46.2877 8.964C46.4941 8.904 46.7127 8.838 46.9434 8.766C47.1863 8.682 47.4534 8.61 47.7448 8.55C48.0484 8.478 48.3823 8.424 48.7466 8.388C49.1231 8.34 49.5541 8.316 50.0399 8.316C50.6227 8.316 51.1024 8.388 51.4788 8.532C51.8674 8.676 52.2195 8.892 52.5352 9.18C52.9845 8.928 53.4278 8.724 53.8649 8.568C54.3142 8.4 54.8363 8.316 55.4313 8.316C56.0021 8.316 56.4878 8.394 56.8885 8.55C57.3014 8.694 57.6414 8.91 57.9085 9.198C58.1757 9.474 58.3699 9.81 58.4914 10.206C58.6128 10.59 58.6735 11.016 58.6735 11.484C58.6735 11.7 58.6553 11.928 58.6189 12.168C58.5946 12.408 58.5521 12.648 58.4914 12.888L57.2528 18H54.5388L55.741 12.996C55.7774 12.828 55.8138 12.642 55.8503 12.438C55.8988 12.222 55.9231 12.012 55.9231 11.808C55.9231 11.472 55.8442 11.184 55.6863 10.944C55.5285 10.692 55.2188 10.566 54.7574 10.566C54.5024 10.566 54.2595 10.614 54.0288 10.71C53.7981 10.794 53.5917 10.884 53.4095 10.98C53.4338 11.076 53.446 11.166 53.446 11.25C53.446 11.334 53.446 11.412 53.446 11.484C53.446 11.7 53.4277 11.928 53.3913 12.168C53.367 12.408 53.3245 12.648 53.2638 12.888L52.0252 18H49.3113L50.5134 12.996C50.5499 12.828 50.5863 12.642 50.6227 12.438C50.6713 12.222 50.6956 12.012 50.6956 11.808C50.6956 11.472 50.6167 11.184 50.4588 10.944C50.3009 10.692 49.9913 10.566 49.5299 10.566C49.3356 10.566 49.1716 10.578 49.0381 10.602C48.9045 10.614 48.7466 10.638 48.5645 10.674L46.7977 18H44.0837L46.2877 8.964Z",fill:"url(#paint2_linear)"}),r.a.createElement("path",{d:"M61.6917 8.964C61.8981 8.904 62.1167 8.838 62.3474 8.766C62.5903 8.682 62.8574 8.61 63.1489 8.55C63.4524 8.478 63.7864 8.424 64.1507 8.388C64.5271 8.34 64.9582 8.316 65.4439 8.316C66.0268 8.316 66.5064 8.388 66.8828 8.532C67.2714 8.676 67.6236 8.892 67.9393 9.18C68.3886 8.928 68.8318 8.724 69.2689 8.568C69.7182 8.4 70.2404 8.316 70.8354 8.316C71.4061 8.316 71.8918 8.394 72.2925 8.55C72.7054 8.694 73.0454 8.91 73.3125 9.198C73.5797 9.474 73.774 9.81 73.8954 10.206C74.0168 10.59 74.0775 11.016 74.0775 11.484C74.0775 11.7 74.0593 11.928 74.0229 12.168C73.9986 12.408 73.9561 12.648 73.8954 12.888L72.6568 18H69.9429L71.145 12.996C71.1814 12.828 71.2179 12.642 71.2543 12.438C71.3029 12.222 71.3272 12.012 71.3272 11.808C71.3272 11.472 71.2482 11.184 71.0904 10.944C70.9325 10.692 70.6229 10.566 70.1614 10.566C69.9064 10.566 69.6636 10.614 69.4329 10.71C69.2021 10.794 68.9957 10.884 68.8136 10.98C68.8378 11.076 68.85 11.166 68.85 11.25C68.85 11.334 68.85 11.412 68.85 11.484C68.85 11.7 68.8318 11.928 68.7953 12.168C68.7711 12.408 68.7286 12.648 68.6678 12.888L67.4293 18H64.7153L65.9175 12.996C65.9539 12.828 65.9903 12.642 66.0267 12.438C66.0753 12.222 66.0996 12.012 66.0996 11.808C66.0996 11.472 66.0207 11.184 65.8628 10.944C65.705 10.692 65.3953 10.566 64.9339 10.566C64.7396 10.566 64.5757 10.578 64.4421 10.602C64.3085 10.614 64.1507 10.638 63.9685 10.674L62.2017 18H59.4878L61.6917 8.964Z",fill:"url(#paint3_linear)"}),r.a.createElement("path",{d:"M84.9326 8.532C84.5926 9.444 84.2466 10.296 83.8944 11.088C83.5544 11.88 83.1962 12.636 82.8198 13.356C82.4433 14.064 82.0548 14.742 81.654 15.39C81.2533 16.038 80.8283 16.68 80.379 17.316C80.0512 17.784 79.7112 18.258 79.359 18.738C79.0069 19.218 78.6122 19.65 78.1751 20.034C77.7501 20.418 77.2704 20.73 76.7361 20.97C76.214 21.21 75.6068 21.33 74.9147 21.33C74.4897 21.33 74.1254 21.288 73.8218 21.204C73.5183 21.132 73.2329 21.03 72.9658 20.898L73.7854 18.792C74.0283 18.888 74.2468 18.96 74.4411 19.008C74.6354 19.068 74.8722 19.098 75.1515 19.098C75.5765 19.098 75.9772 18.96 76.3536 18.684C76.7422 18.42 77.064 18.06 77.319 17.604C77.0033 16.404 76.7119 15.06 76.4447 13.572C76.1897 12.084 76.0136 10.404 75.9165 8.532H78.7033C78.7154 9 78.7397 9.516 78.7762 10.08C78.8126 10.644 78.8551 11.214 78.9037 11.79C78.9522 12.354 79.0069 12.906 79.0676 13.446C79.1283 13.986 79.1951 14.472 79.268 14.904C79.8508 14.04 80.3608 13.08 80.798 12.024C81.2473 10.968 81.6662 9.804 82.0548 8.532H84.9326Z",fill:"url(#paint4_linear)"}),r.a.createElement("path",{d:"M0 0V8C0 8.82843 0.679574 9.5 1.51787 9.5H2.52979V24.5H4.55361V9.5H5.56553C6.40383 9.5 7.0834 8.82843 7.0834 8V0H6.07149V8C6.07149 8.27614 5.84496 8.5 5.56553 8.5H5.13185V0H4.11994V8.5H3.1803V0H2.16839V8.5H1.51787C1.23844 8.5 1.01191 8.27614 1.01191 8V0H0Z",fill:"url(#paint5_linear)"}),r.a.createElement("path",{d:"M16.6966 9.84248C18.4424 9.28742 19.7323 7.3298 19.7323 5C19.7323 2.23858 17.9201 0 15.6847 0C13.4492 0 11.637 2.23858 11.637 5C11.637 7.3298 12.927 9.28742 14.6728 9.84248V24.5H16.6966V9.84248Z",fill:"url(#paint6_linear)"}),r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"paint0_linear",x1:"42.4663",y1:"0",x2:"42.4663",y2:"24.5",gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{offset:"0.015625",stopColor:"#AA91BD"}),r.a.createElement("stop",{offset:"0.520833",stopColor:"#EBE8ED"}),r.a.createElement("stop",{offset:"1",stopColor:"#AF96C4"})),r.a.createElement("linearGradient",{id:"paint1_linear",x1:"42.4663",y1:"0",x2:"42.4663",y2:"24.5",gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{offset:"0.015625",stopColor:"#AA91BD"}),r.a.createElement("stop",{offset:"0.520833",stopColor:"#EBE8ED"}),r.a.createElement("stop",{offset:"1",stopColor:"#AF96C4"})),r.a.createElement("linearGradient",{id:"paint2_linear",x1:"42.4663",y1:"0",x2:"42.4663",y2:"24.5",gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{offset:"0.015625",stopColor:"#AA91BD"}),r.a.createElement("stop",{offset:"0.520833",stopColor:"#EBE8ED"}),r.a.createElement("stop",{offset:"1",stopColor:"#AF96C4"})),r.a.createElement("linearGradient",{id:"paint3_linear",x1:"42.4663",y1:"0",x2:"42.4663",y2:"24.5",gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{offset:"0.015625",stopColor:"#AA91BD"}),r.a.createElement("stop",{offset:"0.520833",stopColor:"#EBE8ED"}),r.a.createElement("stop",{offset:"1",stopColor:"#AF96C4"})),r.a.createElement("linearGradient",{id:"paint4_linear",x1:"42.4663",y1:"0",x2:"42.4663",y2:"24.5",gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{offset:"0.015625",stopColor:"#AA91BD"}),r.a.createElement("stop",{offset:"0.520833",stopColor:"#EBE8ED"}),r.a.createElement("stop",{offset:"1",stopColor:"#AF96C4"})),r.a.createElement("linearGradient",{id:"paint5_linear",x1:"42.4663",y1:"0",x2:"42.4663",y2:"24.5",gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{offset:"0.015625",stopColor:"#AA91BD"}),r.a.createElement("stop",{offset:"0.520833",stopColor:"#EBE8ED"}),r.a.createElement("stop",{offset:"1",stopColor:"#AF96C4"})),r.a.createElement("linearGradient",{id:"paint6_linear",x1:"42.4663",y1:"0",x2:"42.4663",y2:"24.5",gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{offset:"0.015625",stopColor:"#AA91BD"}),r.a.createElement("stop",{offset:"0.520833",stopColor:"#EBE8ED"}),r.a.createElement("stop",{offset:"1",stopColor:"#AF96C4"}))))),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mx-auto mb-2 mb-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.b,{exact:!0,className:"nav-link","aria-current":"page",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.b,{exact:!0,className:"nav-link","aria-current":"page",to:"/categories"},"Categories")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.b,{exact:!0,className:"nav-link","aria-current":"page",to:"/areas"},"Areas")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.b,{exact:!0,className:"nav-link","aria-current":"page",to:"/favorites"},"Favorites(",t.favorites.length,")"))),r.a.createElement("div",{className:"search-header"},r.a.createElement(G,null)))))};var T=function(e){var t=Object(n.useContext)(u),a=t.searchString?'Search result for "'.concat(t.searchString,'" '):"Search";return r.a.createElement("div",{className:"container container-styled search-container"},r.a.createElement("h3",null," ",a," "),r.a.createElement(G,{isContained:!0}),r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",null,t.searchResponse.length>0&&t.searchResponse.map((function(e){return r.a.createElement("div",{className:"col",key:e.idMeal},r.a.createElement(L,{id:e.idMeal,name:e.strMeal,thumb:e.strMealThumb,link:"/meal/".concat(e.idMeal),className:"container-category"}))})),t.isEmptySearchAnswer&&r.a.createElement("h4",{className:"text-center mt-4"},"Ooops, Nothing Found"))))};var J=function(e){Object(n.useEffect)((function(){console.log("fetchData"),F().then((function(e){t.setRandomMeal(e.meals[0])})),j().then((function(e){t.setListCategories(e.meals)})),O().then((function(e){t.setListAreas(e.meals)})),t.setFavoritesFromStorage()}),[]);var t=Object(n.useContext)(u);function a(){return(a=Object(d.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F().then((function(e){t.setRandomMeal(e.meals[0])}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(h.a,null,r.a.createElement(Z,null),r.a.createElement(I.d,null,r.a.createElement(I.b,{exact:!0,path:"/categories",component:V}),r.a.createElement(I.b,{exact:!0,path:"/category/:category",component:D}),r.a.createElement(I.b,{exact:!0,path:"/areas",component:R}),r.a.createElement(I.b,{exact:!0,path:"/area/:area",component:_}),r.a.createElement(I.b,{exact:!0,path:"/meal/:id",component:U}),r.a.createElement(I.b,{exact:!0,path:"/search",component:T}),r.a.createElement(I.b,{exact:!0,path:"/search/:search",component:T}),r.a.createElement(I.b,{exact:!0,path:"/favorites"},r.a.createElement(B,{context:e.context})),r.a.createElement(I.b,{path:"/"},r.a.createElement(y,{updateRandom:function(){return a.apply(this,arguments)}}))))};var z=function(){return r.a.createElement(u.Consumer,null,(function(e){return r.a.createElement(J,{context:e})}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null,r.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.cb02d779.chunk.js.map