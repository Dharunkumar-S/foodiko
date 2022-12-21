"use strict";(self.webpackChunkfoodiko=self.webpackChunkfoodiko||[]).push([[378],{4378:function(n,c,e){e.r(c),e.d(c,{default:function(){return v}});var s=e(885),t=e(2791),i=e(3321),a=e(5403),r=e(2982),l=e(433),o=e(7383),d=e(7247),u=e(6438),h=e(184),m=function(n){var c=n.items,e=(0,t.useContext)(u.A),s=e.cart,i=e.setCart;return(0,h.jsxs)("div",{className:"item",children:[(0,h.jsx)("div",{className:"img-cont",children:(0,h.jsx)("img",{src:c.imgsrc,alt:c.name,loading:"lazy"})}),(0,h.jsxs)("div",{className:"i-namerating",children:[(0,h.jsx)("div",{className:"i-name",children:c.name}),(0,h.jsxs)("div",{className:"i-rating",children:[(0,h.jsx)("div",{children:c.rating}),(0,h.jsx)("div",{children:(0,h.jsx)(l.Z,{sx:{color:"white",fontSize:16,marginTop:"1px"}})})]})]}),(0,h.jsx)("div",{className:"i-time",children:(0,h.jsx)("span",{})}),(0,h.jsx)("hr",{}),(0,h.jsxs)("div",{className:"i-pricecart",children:[(0,h.jsxs)("div",{className:"i-price",children:[(0,h.jsx)("span",{children:"\u20b9"}),c.price]}),(0,h.jsx)("div",{className:"i-cart",title:"Add/Remove",children:s.includes(c)?(0,h.jsx)(d.Z,{className:"i-cart1 i-cartdel",sx:{fontSize:30},onClick:function(){i(s.filter((function(n){return n.id!==c.id})))}}):(0,h.jsx)(o.Z,{className:"i-cart1",sx:{fontSize:30},onClick:function(){i([].concat((0,r.Z)(s),[c]))}})})]})]})},x=e(2588),f=e(1087),v=function(){var n=(0,t.useContext)(u.A).cart,c=(0,t.useState)(""),e=(0,s.Z)(c,2),r=e[0],l=e[1],o=(0,t.useState)(""),d=(0,s.Z)(o,2),v=d[0],j=d[1],N=(0,t.useState)(""),k=(0,s.Z)(N,2),C=k[0],b=k[1],p=document.querySelectorAll(".btn");p.forEach((function(n){n.addEventListener("click",(function(n){!function(n){p.forEach((function(n){n.classList.remove("clicked")})),n.target.classList.add("clicked")}(n)}))}));var g=document.querySelectorAll(".btn1");return g.forEach((function(n){n.addEventListener("click",(function(n){!function(n){g.forEach((function(n){n.classList.remove("clicked")})),n.target.classList.add("clicked")}(n)}))})),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"cont1",children:[(0,h.jsxs)("div",{className:"search1",children:[(0,h.jsx)("span",{className:"search-icon",children:(0,h.jsx)(a.Z,{sx:{fontSize:30}})}),(0,h.jsx)("input",{type:"text",placeholder:"Search",className:"search",onChange:function(n){return l(n.target.value)}})]}),(0,h.jsxs)("div",{className:"options",children:[(0,h.jsxs)("div",{className:"filter1",children:[(0,h.jsx)("button",{className:"btn clicked",onClick:function(){return j("")},children:"All"}),(0,h.jsx)("button",{className:"btn ",onClick:function(){return j("Breakfast")},children:"Breakfast"}),(0,h.jsx)("button",{className:"btn ",onClick:function(){return j("Lunch")},children:"Lunch"}),(0,h.jsx)("button",{className:"btn ",onClick:function(){return j("Dinner")},children:"Dinner"}),(0,h.jsx)("button",{className:"btn ",onClick:function(){return j("Snacks & Drinks")},children:"Snacks & Drinks"}),(0,h.jsx)("button",{className:"btn ",onClick:function(){return j("Ice creams")},children:"Ice creams"})]}),(0,h.jsxs)("div",{className:"filter2",children:[(0,h.jsx)("button",{className:"btn1 clicked",onClick:function(){return b("")},children:"Veg & Non-Veg"}),(0,h.jsx)("button",{className:"btn1 ",onClick:function(){return b("veg1")},children:"Veg"}),(0,h.jsx)("button",{className:"btn1 ",onClick:function(){return b("non veg")},children:"Non-Veg"})]})]}),(0,h.jsx)("div",{className:"cont",children:(0,h.jsx)("div",{className:"item-cont",children:i&&i.filter((function(n){return n.name.toLowerCase().includes(r.toLowerCase().trim())&&n.time.toLowerCase().includes(v.toLowerCase().trim())&&n.dish.toLowerCase().includes(C.toLowerCase().trim())})).map((function(n){return(0,h.jsx)(m,{items:n},n.id)}))})})]}),(0,h.jsxs)("div",{className:"h-cparent",children:[(0,h.jsx)("div",{className:"livecount",children:n.length}),(0,h.jsx)("div",{className:"h-cart-count1",children:(0,h.jsx)("div",{className:"h-cart-count",children:(0,h.jsx)(f.rU,{to:"/cart",children:(0,h.jsx)(x.Z,{className:"h-ccount"})})})})]})]})}},7383:function(n,c,e){var s=e(4836);c.Z=void 0;var t=s(e(5649)),i=e(184),a=(0,t.default)((0,i.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V8c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"}),"AddBoxRounded");c.Z=a},2588:function(n,c,e){var s=e(4836);c.Z=void 0;var t=s(e(5649)),i=e(184),a=(0,t.default)((0,i.jsx)("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"}),"ShoppingCart");c.Z=a},433:function(n,c,e){var s=e(4836);c.Z=void 0;var t=s(e(5649)),i=e(184),a=(0,t.default)((0,i.jsx)("path",{d:"m14.43 10-1.47-4.84c-.29-.95-1.63-.95-1.91 0L9.57 10H5.12c-.97 0-1.37 1.25-.58 1.81l3.64 2.6-1.43 4.61c-.29.93.79 1.68 1.56 1.09l3.69-2.8 3.69 2.81c.77.59 1.85-.16 1.56-1.09l-1.43-4.61 3.64-2.6c.79-.57.39-1.81-.58-1.81h-4.45z"}),"StarRateRounded");c.Z=a}}]);
//# sourceMappingURL=378.34909947.chunk.js.map