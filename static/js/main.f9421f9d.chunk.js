(this["webpackJsonpwacho-bs-react"]=this["webpackJsonpwacho-bs-react"]||[]).push([[0],{126:function(e,a,t){},127:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(8),o=t.n(i),s=t(13),l=t(31),c=t(140),d=t(141);function m(){return r.a.createElement(c.a,{bg:"dark",variant:"dark",expand:"md",sticky:"top"},r.a.createElement(s.b,{to:"/"},r.a.createElement(c.a.Brand,null,"Wines N\u2019 Roses")),r.a.createElement(c.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(c.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(d.a,{className:"mr-auto"},r.a.createElement(d.a.Link,{href:"#about-me"},"About Me"),r.a.createElement(d.a.Link,{href:"#wines"},"Wines"),r.a.createElement(d.a.Link,{href:"#my-team"},"My Team"),r.a.createElement(d.a.Link,{href:"#philosophy"},"Philosophy"),r.a.createElement(d.a.Link,{href:"#sociology"},"Sociology"),r.a.createElement(d.a.Link,{href:"#my-dream"},"My Dream"),r.a.createElement(d.a.Link,{href:"#contact"},"Contact"))))}var u=t(9),h=t.n(u),p=t(24),g=t(25),f=t(28),y=t(26),b=t(29),E=t(27),v=t(55),w=t(56),k=t(131),x=t(143),N=t(142),S=t(132),T=t(130),z=t(137),W=t(71),P=t(129),I=function(){return function(e){var a,t;return h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://wacho-bs-react-be.herokuapp.com",n.next=3,h.a.awrap(fetch("https://wacho-bs-react-be.herokuapp.com/products"));case 3:return a=n.sent,n.next=6,h.a.awrap(a.json());case 6:t=n.sent,console.log("Testing with checkout"),e({type:"LOAD_PRODUCTS",payload:t});case 9:case"end":return n.stop()}}))}},F=function(e){function a(){return Object(p.a)(this,a),Object(f.a)(this,Object(y.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){var e,a=this,t=null,n=0;return this.props.products&&this.props.products.productsFromServer&&(t=this.props.products.productsFromServer,n=this.props.products.amountToCharge,e=this.props.loadProducts),r.a.createElement("div",{id:"checkout"},r.a.createElement(x.a,{style:{width:"350px"}},r.a.createElement(x.a.Header,null,"Cart Total"),r.a.createElement(x.a.Body,null,r.a.createElement(P.a,{hover:!0,borderless:!0,size:"sm"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{onClick:function(){return a.props.loadProducts()}},"Subtotal: "),r.a.createElement("td",null,"\u20ac"," ",Number.parseFloat(n).toFixed(2).toString())),r.a.createElement("tr",null,r.a.createElement("td",null,"Shipping: "),r.a.createElement("td",null,"\u20ac 5.90")),r.a.createElement("tr",null,r.a.createElement("td",null,"Total"),r.a.createElement("td",null,r.a.createElement(T.a,{variant:"info"},"\u20ac"," ",Number.parseFloat(n+5.9).toFixed(2).toString()))))))),r.a.createElement("hr",null),r.a.createElement(x.a,{style:{width:"350px"},className:"mb-4"},r.a.createElement(x.a.Body,{className:"p-0 m-2 text-center"},r.a.createElement(W.PayPalButton,{createOrder:function(e,a){var r=[];return t.filter((function(e){return e.qty>0})).map((function(e){return r.push({_id:e._id,title:e.title,qty:e.qty})})),a.order.create({purchase_units:[{amount:{value:Number.parseFloat(n+5.9).toFixed(2).toString()}}]})},onApprove:function(a,r){return r.order.capture().then((function(r){var i;return h.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return alert("Transaction completed by "+r.payer.name.given_name),i=[],t.filter((function(e){return e.qty>0})).map((function(e){return i.push({_id:e._id,title:e.title,qty:e.qty})})),"https://wacho-bs-react-be.herokuapp.com",o.next=6,h.a.awrap(fetch("https://wacho-bs-react-be.herokuapp.com/purchases",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({orderID:a.orderID,totalAmount:n,products:i,captureDetail:r})}));case 6:return o.next=8,h.a.awrap(e());case 8:console.log("after loading");case 9:case"end":return o.stop()}}))}))}}))))}}]),a}(n.Component),C=Object(E.b)((function(e){return e}),(function(e){return{loadProducts:function(){return e(I())}}}))(F),O=t(72),j=t.n(O),D=t(139);var B=Object(E.b)((function(e){return{showProductToast:e.products.showProductToast}}),(function(e){return{hideProductToast:function(){return e({type:"HIDE_PRODUCT_TOAST"})}}}))((function(e){var a=e.propsForToast,t=e.showProductToast,n=e.hideProductToast,i=a.image,o=a.message,s=a.title,l=a.qty;return r.a.createElement(D.a,{show:t,onClose:function(){return n()},delay:2e3,autohide:!0,"aria-live":"polite","aria-atomic":"true",style:{zIndex:1,position:"fixed",bottom:"10px",left:"10px",minHeight:"100px",minWidth:"300px"}},r.a.createElement(D.a.Header,null,r.a.createElement("img",{src:i,style:{width:"30px"},className:"rounded mr-2",alt:""}),r.a.createElement("strong",{className:"mr-auto"},s),r.a.createElement("small",null,"Quantity: ",l)),r.a.createElement(D.a.Body,null,o))})),A=function(e){function a(e){var t;return Object(p.a)(this,a),(t=Object(f.a)(this,Object(y.a)(a).call(this,e))).handleShowProductDetail=function(e){t.setState({showProductDetail:!0,selectedProduct:t.props.products.find((function(a){return a._id===e}))})},t.handleCloseProductDetail=function(){t.setState({showProductDetail:!1})},t.componentDidMount=function(){return h.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.awrap(t.props.loadProducts());case 2:case"end":return e.stop()}}))},t.state={showProductDetail:!1,propsForToast:{image:null,message:null,title:null,qty:0},selectedProduct:{}},t}return Object(b.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.selectedProduct,n=a.propsForToast,i=this.props,o=i.increaseQty,s=i.decreaseQty,l=i.products,c=i.fetchInProgress,d=i.amountToCharge;return r.a.createElement("div",{id:"wines"},c?r.a.createElement("div",{className:"d-flex justify-content-center align-items-center",style:{height:"50vh"}},r.a.createElement(j.a,{type:"Puff",color:"#00BFFF",height:100,width:100})):r.a.createElement("section",{className:"container-fluid mb-3"},r.a.createElement(B,{propsForToast:n}),r.a.createElement("div",{className:"row wine-products d-flex justify-content-center bg-white pt-4"},l&&l.map((function(a){return r.a.createElement("div",{key:a._id,className:"px-2 pb-2"},r.a.createElement(k.a,{variant:"outline-info",block:!0,className:"rounded-pill my-2",onClick:function(){return e.handleShowProductDetail(a._id)}},a.title),r.a.createElement(x.a,{style:{width:"180px"}},r.a.createElement("div",{className:"ml-auto"},a.qty>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{overlay:r.a.createElement(S.a,{id:"tooltip-disabled"},0===a.inventory?"Last available item added to cart":"Increase Quantity")},r.a.createElement("span",{className:"d-inline-block"},r.a.createElement(k.a,{variant:"outline-info",size:"sm",disabled:0===a.inventory,onClick:function(){o(a._id),e.setState({propsForToast:{image:a.image,message:"".concat(a.title," added to cart!"),title:a.title,qty:a.qty}})},className:"rounded-circle m-2"},r.a.createElement(v.a,{icon:w.c})))),r.a.createElement(N.a,{overlay:r.a.createElement(S.a,{id:"tooltip-disabled"},"Decrease Quantity")},r.a.createElement("span",{className:"d-inline-block"},r.a.createElement(k.a,{variant:"outline-info",size:"sm",onClick:function(){s(a._id),e.setState({propsForToast:{image:a.image,message:"".concat(a.title," removed from cart!"),title:a.title,qty:a.qty}})},className:"rounded-circle m-2"},r.a.createElement(v.a,{icon:w.b}))))),0===a.qty&&r.a.createElement(N.a,{overlay:r.a.createElement(S.a,{id:"tooltip-disabled"},0===a.inventory?"Out of stock":"Add to Cart")},r.a.createElement("span",{className:"d-inline-block"},r.a.createElement(k.a,{variant:"outline-info",size:"sm",disabled:0===a.inventory,onClick:function(){o(a._id),e.setState({propsForToast:{image:a.image,message:"".concat(a.title," added to cart!"),title:a.title,qty:a.qty}})},className:"rounded-circle m-2"},r.a.createElement(v.a,{icon:w.a}))))),r.a.createElement(x.a.Img,{variant:"top",src:a.image}),r.a.createElement(x.a.Body,null),r.a.createElement(x.a.Footer,{className:"px-2 text-center"},r.a.createElement("div",{className:"border border-info rounded-pill mb-2"},"\u20ac ",parseFloat(a.price).toFixed(2)," ",a.qty>0&&r.a.createElement("span",null," ","x ",a.qty," ="," ",r.a.createElement(T.a,{pill:!0,variant:"info"},"\u20ac"," ",(parseFloat(a.price)*parseFloat(a.qty)).toFixed(2)))),r.a.createElement("div",{className:"border border-info rounded-pill"},"In-stock: ",a.inventory))),r.a.createElement("hr",null))})),d>0&&r.a.createElement(C,null))),r.a.createElement(z.a,{show:this.state.showProductDetail,onHide:this.handleCloseProductDetail,centered:!0,size:"xl",scrollable:!0},r.a.createElement(z.a.Header,{closeButton:!0},r.a.createElement(z.a.Title,null,t.title)),r.a.createElement(z.a.Body,null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("img",{src:t.image,className:"card-img",alt:"Rice pitcher"})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{id:"variety",className:"list-group-item"},"Variety: ",t.variety),r.a.createElement("li",{id:"color",className:"list-group-item"},"Color: ",t.color),r.a.createElement("li",{id:"aroma",className:"list-group-item"},"Aroma: ",t.aroma),r.a.createElement("li",{id:"taste",className:"list-group-item"},"The taste is ",t.taste)),r.a.createElement("p",{id:"description",className:"card-text"},t.description),r.a.createElement("p",{className:"card-text"},r.a.createElement("small",{id:"alcohol",className:"text-muted"},"Alcohol: ",t.alcohol))))))),r.a.createElement(z.a.Footer,null)))}}]),a}(n.Component),q=Object(E.b)((function(e){return{products:e.products.productsFromServer,fetchInProgress:e.products.fetchInProgress,amountToCharge:e.products.amountToCharge}}),(function(e){return{loadProducts:function(){return e((function(e){var a,t;return h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,h.a.awrap(fetch("https://wacho-bs-react-be.herokuapp.com/products"));case 3:return a=n.sent,n.next=6,h.a.awrap(a.json());case 6:t=n.sent,e({type:"LOAD_PRODUCTS",payload:t});case 8:case"end":return n.stop()}}))}))},increaseQty:function(a){return e(function(e){return{type:"INCREASE_QTY",payload:e}}(a))},decreaseQty:function(a){return e(function(e){return{type:"DECREASE_QTY",payload:e}}(a))}}}))(A),G=t(75),_=t.n(G);function H(e){return r.a.createElement("div",{className:"handwritten shadow-lg p-3 my-5 bg-white rounded text-center display-4"},e.text)}function M(e){var a=e.img,t=e.heading;return r.a.createElement("div",{className:"vh-100 d-flex parallax justify-content-center align-items-center",style:{backgroundImage:"url("+a+")"}},r.a.createElement("h2",{className:"bg-dark text-white rounded-pill py-2 px-4"},t))}function R(e){var a=e.section,t=a.heading,n=a.paragraph1,i=a.paragraph2,o=a.bannarText;return r.a.createElement("div",{id:"philosophy"},r.a.createElement(M,{img:_.a,heading:t}),r.a.createElement("section",{className:"container py-3",id:"philosophy"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-sm-4 m-auto"},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Tacuin_Automne03.jpg/800px-Tacuin_Automne03.jpg",alt:"Hautain",style:{width:"100%"},className:"img-thumbnail rounded"})),r.a.createElement("div",{className:"col-12 col-sm-8 m-auto"},r.a.createElement("p",null,n),r.a.createElement("p",null,i)))),r.a.createElement(H,{text:o}))}var L=t(76),K=t.n(L);function U(e){var a=e.section,t=a.heading,n=a.paragraph1,i=a.paragraph2,o=a.paragraph3,s=a.paragraph4,l=a.paragraph5;return r.a.createElement("div",{id:"sociology"},r.a.createElement(M,{img:K.a,heading:t}),r.a.createElement("section",{className:"container py-3"},r.a.createElement("p",null,n),r.a.createElement("p",null,i),r.a.createElement("p",null,o),r.a.createElement("p",null,s),r.a.createElement("p",null,l)))}function V(){return r.a.createElement("footer",{className:"text-white bg-dark py-4",id:"contact"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row vh-100 d-flex justify-content-around align-items-center"},r.a.createElement("div",{className:"col-12 col-lg-6"},r.a.createElement("iframe",{title:"Google-Maps",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.2591076019726!2d11.58549961505705!3d48.12452636004989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf7a6ae41f0f%3A0x83fe7076b2716f86!2sRegerpl.%205%2C%2081541%20M%C3%BCnchen!5e0!3m2!1sen!2sde!4v1573644873814!5m2!1sen!2sde",width:"100%",height:"450",frameBorder:"0",style:{border:0},allowFullScreen:""})),r.a.createElement("div",{className:"col-12 col-lg-6"},r.a.createElement("div",{className:"row pb-2"},r.a.createElement("div",{className:"col-1"},r.a.createElement("i",{className:"fa fa-map-marker text-light"})),r.a.createElement("div",{className:"col-11"},r.a.createElement("p",{className:"text-light"},"Goldenes Vlies M.M.M.",r.a.createElement("br",null),"Regerplatz 5, 81541 Munich Germany"))),r.a.createElement("div",{className:"row pb-2"},r.a.createElement("div",{className:"col-1"},r.a.createElement("i",{className:"fa fa-envelope text-light"})),r.a.createElement("div",{className:"col-11"},r.a.createElement("a",{href:"mailto:goldenes.vlies.mmm@gmail.com",className:"text-light"},"goldenes.vlies.mmm@gmail.com"),r.a.createElement("br",null),r.a.createElement("a",{href:"mailto:office@vignehautain.com",className:"text-light"},"office@vignehautain.com"))),r.a.createElement("div",{className:"row pb-2"},r.a.createElement("div",{className:"col-1"},r.a.createElement("i",{className:"fa fa-phone text-light"})),r.a.createElement("div",{className:"col-11"},r.a.createElement("address",null,r.a.createElement("a",{href:"tel:+4917669521145",className:"text-light"},"+49-176-69521145")),r.a.createElement(s.b,{to:"/admin"},"Admin Access")))))))}var J=t(77),Q=t.n(J),Y=(t(125),t(133)),Z=t(134),X=t(79),$=t(135),ee=t(136),ae=t(78),te=t.n(ae);function ne(e){var a=e.section,t=a.paragraph1,n=a.paragraph2,i=a.paragraph3,o=a.paragraph4,s=a.paragraph5;return r.a.createElement(Y.a,{id:"about-me"},r.a.createElement(Z.a,{className:"d-flex justify-content-center mx-0"},r.a.createElement(X.a,{xs:"12",md:"4",className:"pb-3 text-center"},r.a.createElement($.a,{src:te.a,style:{width:"100%",maxWidth:"300px"},roundedCircle:!0})),r.a.createElement(X.a,{xs:"12",md:"8",className:"pb-3"},r.a.createElement(ee.a,null,r.a.createElement(ee.a.Item,null,t),r.a.createElement(ee.a.Item,null,n),r.a.createElement(ee.a.Item,null,i),r.a.createElement(ee.a.Item,null,o),r.a.createElement(ee.a.Item,null,s)))))}var re=t(81),ie=t.n(re);function oe(e){var a=e.section,t=a.heading,n=a.paragraph1,i=a.paragraph2,o=a.paragraph3,s=a.paragraph4;return r.a.createElement("div",{id:"my-dream"},r.a.createElement(M,{img:ie.a,heading:t}),r.a.createElement("section",{className:"container py-3"},r.a.createElement("p",null,n),r.a.createElement("p",null,i),r.a.createElement("p",null,o),r.a.createElement("p",null,s)))}function se(e){var a=e.section,t=a.heading,n=a.paataBokeria,i=a.ivaneNareklishvili,o=a.daliborOsi\u010dka,s=a.eugeniWunsch,l=a.faizanBardai;return r.a.createElement("section",{id:"my-team"},r.a.createElement(H,{text:t}),r.a.createElement(Y.a,{fluid:!0},r.a.createElement("div",{className:"row mb-4 d-flex justify-content-center"},[n,i,o,s,l].map((function(e){return r.a.createElement(x.a,{className:"col mb-2 mr-2",style:{minWidth:"250px",maxWidth:"250px"}},r.a.createElement(x.a.Body,null,r.a.createElement(x.a.Title,null,e.name),r.a.createElement(x.a.Text,null,e.about)))})))))}function le(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.a,{htmlAttributes:{lang:e.lang}}),r.a.createElement(m,null),r.a.createElement(ne,{section:e.content.aboutMe}),r.a.createElement(H,{text:"Be smart, just drink the best and fuck the rest!"}),r.a.createElement(q,null),r.a.createElement(se,{section:e.content.myTeam}),r.a.createElement(R,{section:e.content.philosophySection}),r.a.createElement(U,{section:e.content.sociologySection}),r.a.createElement(oe,{section:e.content.myDream}),r.a.createElement(V,null))}var ce=t(80),de=t(138),me=function(e){function a(e){var t;return Object(p.a)(this,a),(t=Object(f.a)(this,Object(y.a)(a).call(this,e))).handleChange=function(e){t.setState({quantity:e.target.value})},t.handleSubmit=function(e){e.preventDefault();var a=t.state,n=a.inventory,r=a._id,i=a.quantity;n=(n=parseInt(n)+parseInt(i)).toString();try{fetch("https://wacho-bs-react-be.herokuapp.com/products",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:r,inventory:n})}).then((function(e){return e.json()})).then((function(e){t.setState({quantity:"",inventory:n})}))}catch(o){alert("Something went wrong!")}},t.state=t.props.product,t}return Object(b.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.title,n=a.image,i=a.inventory,o=a.quantity;return r.a.createElement(Z.a,null,r.a.createElement("div",{className:"col-4 px-0 mb-2"},r.a.createElement($.a,{style:{width:"100%"},src:n,rounded:!0})),r.a.createElement("div",{className:"col-8 px-0 mb-2"},r.a.createElement(x.a,null,r.a.createElement(x.a.Body,null,r.a.createElement(x.a.Title,null,t)),r.a.createElement(ee.a,{className:"list-group-flush"},r.a.createElement(ce.a,null,"Current Inventory: ",i),r.a.createElement(ce.a,null,r.a.createElement(de.a,{onSubmit:function(a){e.handleSubmit(a)}},r.a.createElement(de.a.Group,null,r.a.createElement(Z.a,null,r.a.createElement(X.a,{xs:12,className:"mb-2"},r.a.createElement(de.a.Control,{onChange:this.handleChange,value:o,type:"number",min:"1",max:"20",required:!0,placeholder:"New Stock"})),r.a.createElement(X.a,{xs:12},r.a.createElement(k.a,{type:"submit",block:!0,variant:"outline-info"},"Update"))),r.a.createElement(T.a,{className:"my-2",style:{width:"100%"},pill:!0,variant:"info"},"This will add to current inventory"))))))))}},{key:"componentDidMount",value:function(){this.setState({quantity:""})}}]),a}(n.Component),ue=function(e){function a(e){var t;return Object(p.a)(this,a),(t=Object(f.a)(this,Object(y.a)(a).call(this,e))).componentDidMount=function(){var e,a;return h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://wacho-bs-react-be.herokuapp.com",n.next=3,h.a.awrap(fetch("https://wacho-bs-react-be.herokuapp.com/products"));case 3:return e=n.sent,n.next=6,h.a.awrap(e.json());case 6:a=n.sent,t.setState({products:a});case 8:case"end":return n.stop()}}))},t.state={},t}return Object(b.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){var e=this.state.products;return r.a.createElement(Y.a,{className:"my-2"},r.a.createElement("div",{className:"row"},e&&e.map((function(e){return r.a.createElement("div",{key:e._id,className:"col-6"},r.a.createElement(me,{product:e}))}))))}}]),a}(n.Component),he=t(82),pe=t.n(he);var ge=t(83),fe=t(84),ye=t(35),be=t(85),Ee=t(57),ve=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ye.d,we=Object(ye.c)({products:function(){var e,a,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=t.productsFromServer;switch(n.type){case"LOAD_PRODUCTS":return{productsFromServer:n.payload,fetchInProgress:!1,showProductToast:!1};case"INCREASE_QTY":return(e=r.find((function(e){return e._id===n.payload}))).qty++,e.inventory--,a=r.reduce((function(e,a){return e+a.price*a.qty}),0),Object(Ee.a)({},t,{productsFromServer:r,amountToCharge:a,showProductToast:!0});case"DECREASE_QTY":return(e=r.find((function(e){return e._id===n.payload}))).qty--,e.inventory++,a=r.reduce((function(e,a){return e+a.price*a.qty}),0),Object(Ee.a)({},t,{productsFromServer:r,amountToCharge:a,showProductToast:!0});case"HIDE_PRODUCT_TOAST":return Object(Ee.a)({},t,{showProductToast:!1});default:return t}}}),ke=Object(ye.e)(we,{products:{fetchInProgress:!0,showProductToast:!1}},ve(Object(ye.a)(be.a)));t(126);o.a.render(r.a.createElement(E.a,{store:ke},r.a.createElement(s.a,null,r.a.createElement(s.a,{basename:"/wacho-bs-react"},r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/admin",component:ue}),r.a.createElement(l.a,{path:"/en",exact:!0},r.a.createElement(le,{lang:"en",content:ge})),r.a.createElement(l.a,{path:"/de",exact:!0},r.a.createElement(le,{lang:"de",content:fe})),r.a.createElement(l.a,{path:"/",exact:!0},r.a.createElement((function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"overlay"}),r.a.createElement("video",{playsInline:"playsinline",autoPlay:"autoplay",muted:"muted",loop:"loop"},r.a.createElement("source",{src:pe.a,type:"video/mp4"})),r.a.createElement("div",{className:"container h-100"},r.a.createElement("div",{className:"d-flex h-100 text-center align-items-center"},r.a.createElement("div",{className:"w-100 text-white"},r.a.createElement("h1",{className:"display-3"},"Hautain Wine"),r.a.createElement("p",{className:"lead mb-0"},"Epic | Ethic | Exceptional | Estraordinary | Exclusive"),r.a.createElement("div",{className:"my-4"},r.a.createElement(s.b,{to:"/en"},r.a.createElement(k.a,{style:{minWidth:"80px",maxWidth:"400px",width:"200px"},className:"mx-2 mb-4",size:"lg",variant:"outline-primary"},"English")),r.a.createElement(s.b,{to:"/de"},r.a.createElement(k.a,{style:{minWidth:"80px",maxWidth:"400px",width:"200px"},className:"mx-2 mb-4",size:"lg",variant:"outline-primary"},"Deutsch")))))))}),null)),r.a.createElement(l.a,{component:function(){return r.a.createElement("div",{id:"notfound"},r.a.createElement("div",{class:"notfound"},r.a.createElement("div",{class:"notfound-404"},r.a.createElement("h1",null,"Oops!"),r.a.createElement("h2",null,"404 - The Page can't be found")),r.a.createElement(s.b,{to:"/"},"Go TO Homepage")))}}))))),document.getElementById("root"))},75:function(e,a,t){e.exports=t.p+"static/media/philosophy.fa68be64.jpg"},76:function(e,a,t){e.exports=t.p+"static/media/sociology.d71a8e1e.jpg"},78:function(e,a,t){e.exports=t.p+"static/media/aboutMeImg.09f4b4ec.jpg"},81:function(e,a,t){e.exports=t.p+"static/media/myDreamImg.ad029bf8.jpg"},82:function(e,a,t){e.exports=t.p+"static/media/header-loop.f3bd3584.mp4"},83:function(e){e.exports=JSON.parse('{"philosophySection":{"heading":"Philosophy","paragraph1":"Wines and Colors is a concept project with a focus on some of the smaller names of the wine industry, working hard to find the more interesting bottles being produced by boutique, ecological and start-up winemakers from Eastern and Western Europe. Here you\'ll find wines that are made ecologically and biodynamically, as well the famed \'orange wine,\' a revival of an old form of winemaking that\u2019s attracting growing interest at home and abroad. For this the grapes are kept macerating much longer than usual, giving the resulting liquid its distinctive colour and complex taste. If you\u2019d like to know more, stop by Wines and Colors and pick up a bottle or two.","paragraph2":"We consider nowadays wines as monetary compromise with philosophy and sense of wine. And follow to concept that wine and wine drinking is real connection with God and Galaxy throw vineyard, environment, planet and human beings. We with you find eco- and biodynamic (by Rudolf Steiner and his teacher Helena Blavatsky, lived in Tbilisi), wine from mountains and trees (technology named Hautain), qvevri (clay pots, amphores) wines, wines from grapes dived into the sea, ancient and old technology made wines and a lot of others.","bannarText":"Our motto is Come Back to Wine as Wine"},"sociologySection":{"heading":"Sociology","paragraph1":"I consider sociology as science about transition from reality to ideal and to the opposite side. Sociology is not that easy to define, so a sociology of wine could mean many things. This is, from my perspective, goodness. It presents opportunities. I want to share those opportunities. I would like lots of people to contribute.","paragraph2":"First and foremost, sociology is about society. This might seem a bit simplistic, but it is in fact not. There is one problem. Today, many others are ready to throw society out of the discussion. It seems like society is out of fashion.","paragraph3":"In many types of sociological arguments, society denotes a relational, dynamic product of the continuing production of sense, purpose, unity, and meaning. If that sounds pretty academic, it is, since it was written by one. Nowadays, I would simply say: Society, community, family or friendship gives meaning to your life. This is a fact. Reflecting upon how each got its place in your life, how it evolved, is not only interesting, but essential.","paragraph4":"Astonishingly, a beverage like wine plays into this in interesting ways. Let me give an example of socialization. Traditional sociological perspectives include describing the process of socialization into societies, groups and organizations.","paragraph5":"In the case of wine, one could imagine investigating sub-groups within existing societal boundaries, such as Hispanics in America, and check how their relationship to wine has evolved. The focus would be on how wine is understood among this group. I would look into the cultural and historical context. I would look into families and the way wine is talked about. I would look at recent trends. I would look at the marketing of wine to Hispanics, or lack thereof."},"aboutMe":{"heading":"About me","paragraph1":"The founder of concept project and creative leader is me, Vakhtang de Maskhulia.","paragraph2":"Known with nick names as Vahoo and Homo Cryptos, former presidential spokesman, prominent TV-journalist, sociologist and producer. Visionnaire, caviste and connaisseur. Member of Tired hedonists Club.","paragraph3":"Part time gentleman, posthedonist and global village resident.","paragraph4":"Follow Karma Kagyu lineage of Buddhism.","paragraph5":"Founder of non - govermental circle of WWF - World Wide F(Friends, Fathers and others names beginned with F.)","paragraph6":"Communicate with people read minimum 3 books (Ulysses by James Joyce, Gravity\u2019s Rainbow by Thomas Pynchon, Shantaram by Gregory David Roberts) and joined Wines and Colors - white, orange, rose and read."},"myDream":{"heading":"My dream","paragraph1":"The culture of the vineyard in haughty is a cultural method known since Antiquity. This way of doing things was particularly used by the Greeks, the Scythians and the Romans.","paragraph2":"The vine is married to a tree which serves as its tutor. Its branches cling to the branches and rise in height. This technique of associated cultures combining tree and vine, incites and forces the latter to rise in height to emerge from a less luminous soil. Become a guardian, the pruned tree allows other cereal, vegetable or fodder productions under its thinned foliage (principle of the joualle). Because initially, the conduct of the vineyard in haughty aimed to increase agricultural production, by multiplying crops in the same place1.","paragraph3":"This ancient technique was described by Columelle and Pliny the Elder (coltura promiscua), as well as by Ibn al-Awwam, the Andalusian agronomist of the 11th century. It was long practiced in Picardy2. In Mediterranean countries, the vines have traditionally been kept high by pruned trees, haughty.","paragraph4":"Nowadays, the haughty of living wood have mostly been replaced by stakes or stumps of dead wood. There are nevertheless the last vestiges of French haughty people in Haute-Savoie, on the shores of Lake Geneva, and in the Pyrenean foothills. And this form of culture is maintained and even gradually regains its letters of nobility in Portugal, Italy and Crete within the framework of high quality organic farming."},"myTeam":{"heading":"It is Great global distributed high level professionals.","paataBokeria":{"name":"Paata Bokeria","about":"Czech lawyer and Vintner"},"ivaneNareklishvili":{"name":"Ivane Nareklishvili","about":"His family has been making magic wines in clay pots (qvevri) since 1850"},"daliborOsi\u010dka":{"name":"Dalibor Osi\u010dka","about":"Brilliant moravian winemaker"},"eugeniWunsch":{"name":"Eugeni Wunsch","about":"German lawyer supporting smart wine contracts"},"faizanBardai":{"name":"Faizan Bardai","about":"Super-programmer and crazy of cricket"}}}')},84:function(e){e.exports=JSON.parse('{"philosophySection":{"heading":"Philosophie","paragraph1":"Wines and Colors ist ein Konzeptprojekt, das sich auf einige der kleineren Namen der Weinindustrie konzentriert und sich intensiv darum bem\xfcht, die interessanteren Flaschen zu finden, die von Boutique-, \xd6ko- und Start-up-Winzern aus Ost- und Westeuropa hergestellt werden. Hier finden Sie Weine, die \xf6kologisch und biodynamisch hergestellt werden, sowie den ber\xfchmten \\"Orangenwein\\", eine Wiederbelebung einer alten Form der Weinherstellung, die im In- und Ausland auf wachsendes Interesse st\xf6\xdft. Dazu werden die Trauben viel l\xe4nger als gew\xf6hnlich mazeriert, wodurch die resultierende Fl\xfcssigkeit ihre unverwechselbare Farbe und ihren komplexen Geschmack erh\xe4lt. Wenn Sie mehr wissen m\xf6chten, schauen Sie bei Wines and Colors vorbei und holen Sie sich ein oder zwei Flaschen.","paragraph2":"Wir betrachten Weine heutzutage als monet\xe4ren Kompromiss mit Philosophie und Sinn f\xfcr Wein. Und folgen Sie dem Konzept, dass Wein und Weintrinken eine echte Verbindung zwischen Gott und Galaxis, Weinberg, Umwelt, Planeten und Menschen sind. Wir bei Ihnen finden \xd6ko- und Biodynamik (von Rudolf Steiner und seiner in Tiflis lebenden Lehrerin Helena Blavatsky), Wein aus Bergen und B\xe4umen (Technologie namens Hautain), Qvevri-Weine (Tont\xf6pfe, Amphoren), Weine aus ins Meer getauchten Trauben , alte und alte Technologie machte Weine und viele andere.","bannarText":"Unser Motto lautet: Come Back to Wine as Wine"},"sociologySection":{"heading":"Soziologie","paragraph1":"Ich betrachte Soziologie als Wissenschaft \xfcber den \xdcbergang von der Realit\xe4t zum Ideal und zur Gegenseite. Soziologie ist nicht so einfach zu definieren, daher k\xf6nnte eine Soziologie des Weins viele Dinge bedeuten. Dies ist aus meiner Sicht G\xfcte. Es bietet M\xf6glichkeiten. Ich m\xf6chte diese M\xf6glichkeiten teilen. Ich m\xf6chte, dass viele Leute dazu beitragen.","paragraph2":"In erster Linie geht es in der Soziologie um die Gesellschaft. Das mag ein bisschen simpel erscheinen, ist es aber in der Tat nicht. Es gibt ein Problem. Heute sind viele andere bereit, die Gesellschaft aus der Diskussion zu werfen. Es scheint, als sei die Gesellschaft aus der Mode gekommen.","paragraph3":"In vielen Arten von soziologischen Argumenten bezeichnet die Gesellschaft ein relationales, dynamisches Produkt der fortgesetzten Produktion von Sinn, Zweck, Einheit und Bedeutung. Wenn das ziemlich akademisch klingt, ist es das, da es von einem geschrieben wurde. Heutzutage w\xfcrde ich einfach sagen: Gesellschaft, Gemeinschaft, Familie oder Freundschaft geben Ihrem Leben einen Sinn. Das ist ein Fakt. Es ist nicht nur interessant, dar\xfcber nachzudenken, wie jeder seinen Platz in Ihrem Leben bekommen hat, wie er sich entwickelt hat, sondern auch wichtig.","paragraph4":"Erstaunlicherweise spielt ein Getr\xe4nk wie Wein auf interessante Weise eine Rolle. Lassen Sie mich ein Beispiel f\xfcr die Sozialisation geben. Zu den traditionellen soziologischen Perspektiven geh\xf6rt die Beschreibung des Sozialisationsprozesses in Gesellschaften, Gruppen und Organisationen.","paragraph5":"Im Fall von Wein k\xf6nnte man sich vorstellen, Untergruppen innerhalb bestehender gesellschaftlicher Grenzen, wie z. B. Hispanics in Amerika, zu untersuchen und zu \xfcberpr\xfcfen, wie sich ihre Beziehung zum Wein entwickelt hat. Der Fokus w\xfcrde darauf liegen, wie Wein in dieser Gruppe verstanden wird. Ich w\xfcrde in den kulturellen und historischen Kontext schauen. Ich w\xfcrde mich um Familien k\xfcmmern und die Art und Weise, wie \xfcber Wein gesprochen wird. Ich w\xfcrde mir die j\xfcngsten Trends ansehen. Ich w\xfcrde mir die Vermarktung von Wein f\xfcr Hispanics ansehen, oder das Fehlen davon."},"aboutMe":{"heading":"\xdcber mich","paragraph1":"Der Gr\xfcnder des Konzeptprojekts und Creative Director bin ich, Vakhtang de Maskhulia.","paragraph2":"Bekannt unter Spitznamen wie Vahoo und Homo Cryptos, ehemaliger Sprecher des Pr\xe4sidenten, prominenter Fernsehjournalist, Soziologe und Produzent. Visionnaire, Caviste und connaisseur.","paragraph3":"Mitglied im Club der m\xfcden Hedonisten.","paragraph4":"Teilzeit-Lord, Post-Hedonist und globaler Dorfbewohner.","paragraph5":"Folgen Sie der Karma Kagyu Linie des Buddhismus. Gr\xfcnder des WWF Non-State Circle - World Wide F (Freunde, V\xe4ter-Fathers und andere Namen, beginnend mit F.)","paragraph6":"Kommunizieren Sie mit Menschen, lesen Sie mindestens 3 B\xfccher (Ulysses von James Joyce, Gravity\'s Rainbow von Thomas Pynchon, Shantaram von Gregory David Roberts) und schlie\xdfen Sie sich Wines and Colours - white, orange, rose und read an."},"myDream":{"heading":"Mein traum","paragraph1":"Die Kultur des Weinbergs im Hochm\xfctigen ist eine seit der Antike bekannte Kulturmethode. Diese Vorgehensweise wurde besonders von den Griechen, den Skythen und den R\xf6mern angewendet.","paragraph2":"Die Rebe ist mit einem Baum verheiratet, der ihr Nachhilfelehrer ist. Seine Zweige h\xe4ngen an den Zweigen und steigen in die H\xf6he. Diese Technik assoziierter Kulturen, bei der Baum und Rebe kombiniert werden, regt letztere an und zwingt sie dazu, sich zu erh\xf6hen, um aus einem weniger leuchtenden Boden hervorzugehen. Werden Sie ein W\xe4chter, der beschnittene Baum erlaubt andere Getreide-, Gem\xfcse- oder Futtermittelproduktionen unter seinem verd\xfcnnten Laub (Prinzip der Joualle). Denn zun\xe4chst zielte die F\xfchrung des Weinbergs in hochm\xfctiger Weise auf eine Steigerung der landwirtschaftlichen Produktion ab, indem die Ernten am selben Ort vervielfacht wurden.","paragraph3":"Diese alte Technik wurde von Columelle und Plinius dem \xc4lteren (coltura promiscua) sowie von Ibn al-Awwam, dem andalusischen Agronomen des 11. Jahrhunderts, beschrieben. Es wurde lange in der Picardie ge\xfcbt. In den Mittelmeerl\xe4ndern wurden die Reben traditionell von hochm\xfctigen, beschnittenen B\xe4umen hochgehalten.","paragraph4":"Heutzutage wurden die hochm\xfctigen lebenden H\xf6lzer gr\xf6\xdftenteils durch Pf\xe4hle oder Totholzst\xfcmpfe ersetzt. Dennoch gibt es in Haute-Savoie, am Ufer des Genfersees und in den Ausl\xe4ufern der Pyren\xe4en die letzten \xdcberreste hochm\xfctiger Franzosen. Und diese Form der Kultur wird beibehalten und gewinnt im Rahmen eines qualitativ hochwertigen \xf6kologischen Landbaus in Portugal, Italien und Kreta sogar allm\xe4hlich wieder an Adel."},"myTeam":{"heading":"Es handelt sich um weltweit verteilte hochrangige Experten.","paataBokeria":{"name":"Paata Bokeria","about":"tschechischer Anwalt und Winzer"},"ivaneNareklishvili":{"name":"Ivane Nareklishvili","about":"seine Familie stellt seit 1850 magische Weine in Tont\xf6pfen her"},"daliborOsi\u010dka":{"name":"Dalibor Osi\u010dka","about":"brillanter m\xe4hrischer Winzer"},"eugeniWunsch":{"name":"Eugeni Wunsch","about":"deutscher rechtsanwalt, unterst\xfctzte smart wine vertr\xe4ge"},"faizanBardai":{"name":"Faizan Bardai","about":"Superprogrammierer und Cricketverr\xfcckter"}}}')},86:function(e,a,t){e.exports=t(127)}},[[86,1,2]]]);
//# sourceMappingURL=main.f9421f9d.chunk.js.map