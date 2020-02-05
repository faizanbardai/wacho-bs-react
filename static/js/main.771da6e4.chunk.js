(this["webpackJsonpwacho-bs-react"]=this["webpackJsonpwacho-bs-react"]||[]).push([[0],{128:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),o=a.n(i),s=a(15),l=a(33),c=a(143),m=a(131),d=a(140);function u(){return r.a.createElement(c.a,{bg:"dark",variant:"dark",expand:"md",sticky:"top"},r.a.createElement(s.b,{to:"/"},r.a.createElement(c.a.Brand,null,"Wines N\u2019 Roses")),r.a.createElement(c.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(c.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(m.a,{className:"mr-auto"},r.a.createElement(d.a,{title:"About",id:"basic-nav-dropdown"},r.a.createElement(d.a.Item,{href:"#philosophy"},"Philosophy"),r.a.createElement(d.a.Item,{href:"#sociology"},"Sociology"),r.a.createElement(d.a.Item,{href:"#my-dream"},"My Dream"),r.a.createElement(d.a.Item,{href:"#about-me"},"About Me"),r.a.createElement(d.a.Item,{href:"#my-team"},"My team")),r.a.createElement(m.a.Link,{href:"#contact"},"Contact"))))}var h=a(11),p=a.n(h),g=a(26),f=a(27),E=a(30),y=a(28),b=a(31),v=a(29),w=a(43),x=a(44),k=a(145),N=a(144),S=a(134),T=a(75),I=a(133),F=a(139),P=a(77),C=a(78),W=a(132),O=function(){return function(e){var t,a;return p.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://wacho-bs-react-be.herokuapp.com",n.next=3,p.a.awrap(fetch("https://wacho-bs-react-be.herokuapp.com/products"));case 3:return t=n.sent,n.next=6,p.a.awrap(t.json());case 6:a=n.sent,console.log("Testing with checkout"),e({type:"LOAD_PRODUCTS",payload:a});case 9:case"end":return n.stop()}}))}},j=function(e){function t(){return Object(g.a)(this,t),Object(E.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e,t=this,a=null,n=0;return this.props.products&&this.props.products.productsFromServer&&(a=this.props.products.productsFromServer,n=this.props.products.amountToCharge,e=this.props.loadProducts),r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{xs:12,md:4,className:"my-2"},r.a.createElement(k.a,null,r.a.createElement(k.a.Header,null,"Cart Total"),r.a.createElement(k.a.Body,null,r.a.createElement(W.a,{hover:!0,borderless:!0,size:"sm"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{onClick:function(){return t.props.loadProducts()}},"Subtotal:"," "),r.a.createElement("td",null,"\u20ac"," ",Number.parseFloat(n).toFixed(2).toString())),r.a.createElement("tr",null,r.a.createElement("td",null,"Shipping: "),r.a.createElement("td",null,"\u20ac 5.90")),r.a.createElement("tr",null,r.a.createElement("td",null,"Total"),r.a.createElement("td",null,r.a.createElement(I.a,{variant:"info"},"\u20ac"," ",Number.parseFloat(n+5.9).toFixed(2).toString())))))))),r.a.createElement(C.a,{xs:12,md:4},r.a.createElement(k.a,null,r.a.createElement(k.a.Body,{className:"p-0 m-2 text-center"},r.a.createElement(P.PayPalButton,{createOrder:function(e,t){var r=[];return a.filter((function(e){return e.qty>0})).map((function(e){return r.push({_id:e._id,title:e.title,qty:e.qty})})),t.order.create({purchase_units:[{amount:{value:Number.parseFloat(n+5.9).toFixed(2).toString()}}]})},onApprove:function(t,r){return r.order.capture().then((function(r){var i;return p.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return alert("Transaction completed by "+r.payer.name.given_name),i=[],a.filter((function(e){return e.qty>0})).map((function(e){return i.push({_id:e._id,title:e.title,qty:e.qty})})),"https://wacho-bs-react-be.herokuapp.com",o.next=6,p.a.awrap(fetch("https://wacho-bs-react-be.herokuapp.com/purchases",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({orderID:t.orderID,totalAmount:n,products:i,captureDetail:r})}));case 6:return o.next=8,p.a.awrap(e());case 8:console.log("after loading");case 9:case"end":return o.stop()}}))}))}})))))}}]),t}(n.Component),z=Object(v.b)((function(e){return e}),(function(e){return{loadProducts:function(){return e(O())}}}))(j),D=a(79),_=a.n(D),q=a(142);var A=Object(v.b)((function(e){return{showProductToast:e.products.showProductToast}}),(function(e){return{hideProductToast:function(){return e({type:"HIDE_PRODUCT_TOAST"})}}}))((function(e){var t=e.propsForToast,a=e.showProductToast,n=e.hideProductToast,i=t.image,o=t.message,s=t.title,l=t.qty;return r.a.createElement(q.a,{show:a,onClose:function(){return n()},delay:2e3,autohide:!0,"aria-live":"polite","aria-atomic":"true",style:{zIndex:1,position:"fixed",bottom:"10px",left:"10px",minHeight:"100px",minWidth:"300px"}},r.a.createElement(q.a.Header,null,r.a.createElement("img",{src:i,style:{width:"30px"},className:"rounded mr-2",alt:""}),r.a.createElement("strong",{className:"mr-auto"},s),r.a.createElement("small",null,"Quantity: ",l)),r.a.createElement(q.a.Body,null,o))})),B=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(E.a)(this,Object(y.a)(t).call(this,e))).handleShowProductDetail=function(e){a.setState({showProductDetail:!0,selectedProduct:a.props.products.find((function(t){return t._id===e}))})},a.handleCloseProductDetail=function(){a.setState({showProductDetail:!1})},a.componentDidMount=function(){return p.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.awrap(a.props.loadProducts());case 2:case"end":return e.stop()}}))},a.state={showProductDetail:!1,propsForToast:{image:null,message:null,title:null,qty:0},selectedProduct:{}},a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.selectedProduct,n=t.propsForToast,i=this.props,o=i.increaseQty,s=i.decreaseQty,l=i.products,c=i.fetchInProgress,m=i.amountToCharge;return r.a.createElement(r.a.Fragment,null,c?r.a.createElement("div",{className:"d-flex justify-content-center align-items-center",style:{height:"50vh"}},r.a.createElement(_.a,{type:"Puff",color:"#00BFFF",height:100,width:100})):r.a.createElement("section",{className:"container-fluid mb-3"},r.a.createElement(A,{propsForToast:n}),r.a.createElement("div",{className:"row wine-products d-flex justify-content-center"},l&&l.map((function(t){return r.a.createElement("div",{key:t._id,className:"col-6 col-md-3 pb-2"},r.a.createElement(k.a,null,r.a.createElement("div",{className:"ml-auto"},t.qty>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{overlay:r.a.createElement(S.a,{id:"tooltip-disabled"},0===t.inventory?"Last available item added to cart":"Increase Quantity")},r.a.createElement("span",{className:"d-inline-block"},r.a.createElement(T.a,{variant:"outline-info",size:"sm",disabled:0===t.inventory,onClick:function(){o(t._id),e.setState({propsForToast:{image:t.image,message:"".concat(t.title," added to cart!"),title:t.title,qty:t.qty}})},className:"rounded-circle m-2"},r.a.createElement(w.a,{icon:x.c})))),r.a.createElement(N.a,{overlay:r.a.createElement(S.a,{id:"tooltip-disabled"},"Decrease Quantity")},r.a.createElement("span",{className:"d-inline-block"},r.a.createElement(T.a,{variant:"outline-info",size:"sm",onClick:function(){s(t._id),e.setState({propsForToast:{image:t.image,message:"".concat(t.title," removed from cart!"),title:t.title,qty:t.qty}})},className:"rounded-circle m-2"},r.a.createElement(w.a,{icon:x.b}))))),0===t.qty&&r.a.createElement(N.a,{overlay:r.a.createElement(S.a,{id:"tooltip-disabled"},0===t.inventory?"Out of stock":"Add to Cart")},r.a.createElement("span",{className:"d-inline-block"},r.a.createElement(T.a,{variant:"outline-info",size:"sm",disabled:0===t.inventory,onClick:function(){o(t._id),e.setState({propsForToast:{image:t.image,message:"".concat(t.title," added to cart!"),title:t.title,qty:t.qty}})},className:"rounded-circle m-2"},r.a.createElement(w.a,{icon:x.a}))))),r.a.createElement(k.a.Img,{variant:"top",src:t.image}),r.a.createElement(k.a.Body,null,r.a.createElement(T.a,{variant:"outline-info",block:!0,className:"rounded-pill",onClick:function(){return e.handleShowProductDetail(t._id)}},t.title)),r.a.createElement(k.a.Footer,{className:"px-2 text-center"},r.a.createElement("div",{className:"border border-info rounded-pill mb-2"},"\u20ac ",parseFloat(t.price).toFixed(2)," ",t.qty>0&&r.a.createElement("span",null," ","x ",t.qty," ="," ",r.a.createElement(I.a,{pill:!0,variant:"info"},"\u20ac"," ",(parseFloat(t.price)*parseFloat(t.qty)).toFixed(2)))),r.a.createElement("div",{className:"border border-info rounded-pill"},"In-stock: ",t.inventory))))})),m>0&&r.a.createElement(z,null))),r.a.createElement(F.a,{show:this.state.showProductDetail,onHide:this.handleCloseProductDetail,centered:!0,size:"xl",scrollable:!0},r.a.createElement(F.a.Header,{closeButton:!0},r.a.createElement(F.a.Title,null,a.title)),r.a.createElement(F.a.Body,null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("img",{src:a.image,className:"card-img",alt:"Rice pitcher"})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{id:"variety",className:"list-group-item"},"Variety: ",a.variety),r.a.createElement("li",{id:"color",className:"list-group-item"},"Color: ",a.color),r.a.createElement("li",{id:"aroma",className:"list-group-item"},"Aroma: ",a.aroma),r.a.createElement("li",{id:"taste",className:"list-group-item"},"The taste is ",a.taste)),r.a.createElement("p",{id:"description",className:"card-text"},a.description),r.a.createElement("p",{className:"card-text"},r.a.createElement("small",{id:"alcohol",className:"text-muted"},"Alcohol: ",a.alcohol))))))),r.a.createElement(F.a.Footer,null)))}}]),t}(n.Component),G=Object(v.b)((function(e){return{products:e.products.productsFromServer,fetchInProgress:e.products.fetchInProgress,amountToCharge:e.products.amountToCharge}}),(function(e){return{loadProducts:function(){return e((function(e){var t,a;return p.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,p.a.awrap(fetch("https://wacho-bs-react-be.herokuapp.com/products"));case 3:return t=n.sent,n.next=6,p.a.awrap(t.json());case 6:a=n.sent,e({type:"LOAD_PRODUCTS",payload:a});case 8:case"end":return n.stop()}}))}))},increaseQty:function(t){return e(function(e){return{type:"INCREASE_QTY",payload:e}}(t))},decreaseQty:function(t){return e(function(e){return{type:"DECREASE_QTY",payload:e}}(t))}}}))(B),M=a(80),H=a.n(M);function R(e){return r.a.createElement("div",{className:"handwritten shadow-lg p-3 my-5 bg-white rounded text-center display-4"},e.text)}function L(e){var t=e.section,a=t.heading,n=t.paragraph1,i=t.paragraph2,o=t.bannarText;return r.a.createElement("div",{id:"philosophy"},r.a.createElement("div",{className:"vh-100 d-flex parallax justify-content-center align-items-center",style:{backgroundImage:"url("+H.a+")"}},r.a.createElement("h2",{className:"text-white"},a)),r.a.createElement("section",{className:"container py-3",id:"philosophy"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-sm-4 m-auto"},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Tacuin_Automne03.jpg/800px-Tacuin_Automne03.jpg",alt:"Hautain",style:{width:"100%"},className:"img-thumbnail rounded"})),r.a.createElement("div",{className:"col-12 col-sm-8 m-auto"},r.a.createElement("p",null,n),r.a.createElement("p",null,i)))),r.a.createElement(R,{text:o}))}var U=a(81),V=a.n(U);function Q(e){var t=e.section,a=t.heading,n=t.paragraph1,i=t.paragraph2,o=t.paragraph3,s=t.paragraph4,l=t.paragraph5;return r.a.createElement("div",{id:"sociology"},r.a.createElement("div",{className:"vh-100 d-flex parallax justify-content-center align-items-center",style:{backgroundImage:"url("+V.a+")"}},r.a.createElement("h2",{className:"text-white"},a)),r.a.createElement("section",{className:"container py-3"},r.a.createElement("p",null,n),r.a.createElement("p",null,i),r.a.createElement("p",null,o),r.a.createElement("p",null,s),r.a.createElement("p",null,l)))}function K(){return r.a.createElement("footer",{className:"text-white bg-dark py-4",id:"contact"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row vh-100 d-flex justify-content-around align-items-center"},r.a.createElement("div",{className:"col-12 col-lg-6"},r.a.createElement("iframe",{title:"Google-Maps",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.2591076019726!2d11.58549961505705!3d48.12452636004989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf7a6ae41f0f%3A0x83fe7076b2716f86!2sRegerpl.%205%2C%2081541%20M%C3%BCnchen!5e0!3m2!1sen!2sde!4v1573644873814!5m2!1sen!2sde",width:"100%",height:"450",frameBorder:"0",style:{border:0},allowFullScreen:""})),r.a.createElement("div",{className:"col-12 col-lg-6"},r.a.createElement("div",{className:"row pb-2"},r.a.createElement("div",{className:"col-1"},r.a.createElement("i",{className:"fa fa-map-marker text-light"})),r.a.createElement("div",{className:"col-11"},r.a.createElement("p",{className:"text-light"},"Goldenes Vlies M.M.M.",r.a.createElement("br",null),"Regerplatz 5, 81541 Munich Germany"))),r.a.createElement("div",{className:"row pb-2"},r.a.createElement("div",{className:"col-1"},r.a.createElement("i",{className:"fa fa-envelope text-light"})),r.a.createElement("div",{className:"col-11"},r.a.createElement("a",{href:"mailto:goldenes.vlies.mmm@gmail.com",className:"text-light"},"goldenes.vlies.mmm@gmail.com"),r.a.createElement("br",null),r.a.createElement("a",{href:"mailto:office@vignehautain.com",className:"text-light"},"office@vignehautain.com"))),r.a.createElement("div",{className:"row pb-2"},r.a.createElement("div",{className:"col-1"},r.a.createElement("i",{className:"fa fa-phone text-light"})),r.a.createElement("div",{className:"col-11"},r.a.createElement("address",null,r.a.createElement("a",{href:"tel:+4917669521145",className:"text-light"},"+49-176-69521145")),r.a.createElement(s.b,{to:"/admin"},"Admin Access")))))))}var J=a(82),Y=a.n(J),X=(a(127),a(135)),Z=a(136),$=a(137),ee=a(138),te=a(83),ae=a.n(te);function ne(e){var t=e.section,a=t.paragraph1,n=t.paragraph2,i=t.paragraph3,o=t.paragraph4,s=t.paragraph5;return r.a.createElement(X.a,{id:"about-me",style:{padding:"60px 0"}},r.a.createElement(Z.a,{className:"d-flex justify-content-center mx-0"},r.a.createElement(C.a,{xs:"12",md:"4",className:"pb-3 text-center"},r.a.createElement($.a,{src:ae.a,style:{width:"100%",maxWidth:"300px"},roundedCircle:!0})),r.a.createElement(C.a,{xs:"12",md:"8",className:"pb-3"},r.a.createElement(ee.a,null,r.a.createElement(ee.a.Item,null,a),r.a.createElement(ee.a.Item,null,n),r.a.createElement(ee.a.Item,null,i),r.a.createElement(ee.a.Item,null,o),r.a.createElement(ee.a.Item,null,s)))))}function re(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.a,{htmlAttributes:{lang:e.lang}}),r.a.createElement(u,null),r.a.createElement(R,{text:"Be smart, just drink the best and fuck the rest!"}),r.a.createElement(G,null),r.a.createElement(L,{section:e.content.philosophySection}),r.a.createElement(Q,{section:e.content.sociologySection}),r.a.createElement(ne,{section:e.content.aboutMe}),r.a.createElement(K,null))}var ie=a(84),oe=a(141),se=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(E.a)(this,Object(y.a)(t).call(this,e))).handleChange=function(e){a.setState({quantity:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.inventory,r=t._id,i=t.quantity;n=(n=parseInt(n)+parseInt(i)).toString();try{fetch("https://wacho-bs-react-be.herokuapp.com/products",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:r,inventory:n})}).then((function(e){return e.json()})).then((function(e){a.setState({quantity:"",inventory:n})}))}catch(o){alert("Something went wrong!")}},a.state=a.props.product,a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.title,n=t.image,i=t.inventory,o=t.quantity;return r.a.createElement(Z.a,null,r.a.createElement("div",{className:"col-4 px-0 mb-2"},r.a.createElement($.a,{style:{width:"100%"},src:n,rounded:!0})),r.a.createElement("div",{className:"col-8 px-0 mb-2"},r.a.createElement(k.a,null,r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,a)),r.a.createElement(ee.a,{className:"list-group-flush"},r.a.createElement(ie.a,null,"Current Inventory: ",i),r.a.createElement(ie.a,null,r.a.createElement(oe.a,{onSubmit:function(t){e.handleSubmit(t)}},r.a.createElement(oe.a.Group,null,r.a.createElement(Z.a,null,r.a.createElement(C.a,{xs:12,className:"mb-2"},r.a.createElement(oe.a.Control,{onChange:this.handleChange,value:o,type:"number",min:"1",max:"20",required:!0,placeholder:"New Stock"})),r.a.createElement(C.a,{xs:12},r.a.createElement(T.a,{type:"submit",block:!0,variant:"outline-info"},"Update"))),r.a.createElement(I.a,{className:"my-2",style:{width:"100%"},pill:!0,variant:"info"},"This will add to current inventory"))))))))}},{key:"componentDidMount",value:function(){this.setState({quantity:""})}}]),t}(n.Component),le=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(E.a)(this,Object(y.a)(t).call(this,e))).componentDidMount=function(){var e,t;return p.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://wacho-bs-react-be.herokuapp.com",n.next=3,p.a.awrap(fetch("https://wacho-bs-react-be.herokuapp.com/products"));case 3:return e=n.sent,n.next=6,p.a.awrap(e.json());case 6:t=n.sent,a.setState({products:t});case 8:case"end":return n.stop()}}))},a.state={},a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.state.products;return r.a.createElement(X.a,{className:"my-2"},r.a.createElement("div",{className:"row"},e&&e.map((function(e){return r.a.createElement("div",{key:e._id,className:"col-6"},r.a.createElement(se,{product:e}))}))))}}]),t}(n.Component),ce=a(85),me=a.n(ce);var de=a(86),ue=a(87),he=a(38),pe=a(88),ge=a(63),fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||he.d,Ee=Object(he.c)({products:function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=a.productsFromServer;switch(n.type){case"LOAD_PRODUCTS":return{productsFromServer:n.payload,fetchInProgress:!1,showProductToast:!1};case"INCREASE_QTY":return(e=r.find((function(e){return e._id===n.payload}))).qty++,e.inventory--,t=r.reduce((function(e,t){return e+t.price*t.qty}),0),Object(ge.a)({},a,{productsFromServer:r,amountToCharge:t,showProductToast:!0});case"DECREASE_QTY":return(e=r.find((function(e){return e._id===n.payload}))).qty--,e.inventory++,t=r.reduce((function(e,t){return e+t.price*t.qty}),0),Object(ge.a)({},a,{productsFromServer:r,amountToCharge:t,showProductToast:!0});case"HIDE_PRODUCT_TOAST":return Object(ge.a)({},a,{showProductToast:!1});default:return a}}}),ye=Object(he.e)(Ee,{products:{fetchInProgress:!0,showProductToast:!1}},fe(Object(he.a)(pe.a)));a(128);o.a.render(r.a.createElement(v.a,{store:ye},r.a.createElement(s.a,null,r.a.createElement(s.a,{basename:"/wacho-bs-react"},r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/admin",component:le}),r.a.createElement(l.a,{path:"/en",exact:!0},r.a.createElement(re,{lang:"en",content:de})),r.a.createElement(l.a,{path:"/de",exact:!0},r.a.createElement(re,{lang:"de",content:ue})),r.a.createElement(l.a,{path:"/",exact:!0},r.a.createElement((function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"overlay"}),r.a.createElement("video",{playsInline:"playsinline",autoPlay:"autoplay",muted:"muted",loop:"loop"},r.a.createElement("source",{src:me.a,type:"video/mp4"})),r.a.createElement("div",{className:"container h-100"},r.a.createElement("div",{className:"d-flex h-100 text-center align-items-center"},r.a.createElement("div",{className:"w-100 text-white"},r.a.createElement("div",{className:"display-4"},r.a.createElement(w.a,{icon:x.d})),r.a.createElement("h1",{className:"display-3"},"Hautain Wine"),r.a.createElement("p",{className:"lead mb-0"},"Epic | Ethic | Exceptional | Estraordinary | Exclusive"),r.a.createElement("div",{className:"my-4"},r.a.createElement(s.b,{to:"/en"},r.a.createElement(T.a,{style:{minWidth:"80px",maxWidth:"400px",width:"200px"},className:"mx-2 mb-4",size:"lg",variant:"outline-primary"},"English")),r.a.createElement(s.b,{to:"/de"},r.a.createElement(T.a,{style:{minWidth:"80px",maxWidth:"400px",width:"200px"},className:"mx-2 mb-4",size:"lg",variant:"outline-primary"},"Deutsch")))))))}),null)),r.a.createElement(l.a,{component:function(){return r.a.createElement("div",{id:"notfound"},r.a.createElement("div",{class:"notfound"},r.a.createElement("div",{class:"notfound-404"},r.a.createElement("h1",null,"Oops!"),r.a.createElement("h2",null,"404 - The Page can't be found")),r.a.createElement(s.b,{to:"/"},"Go TO Homepage")))}}))))),document.getElementById("root"))},80:function(e,t,a){e.exports=a.p+"static/media/philosophy.fa68be64.jpg"},81:function(e,t,a){e.exports=a.p+"static/media/sociology.d71a8e1e.jpg"},83:function(e,t,a){e.exports=a.p+"static/media/aboutMeImg.09f4b4ec.jpg"},85:function(e,t,a){e.exports=a.p+"static/media/header-loop.f3bd3584.mp4"},86:function(e){e.exports=JSON.parse('{"philosophySection":{"heading":"Philosophy","paragraph1":"Wines and Colors is a concept project with a focus on some of the smaller names of the wine industry, working hard to find the more interesting bottles being produced by boutique, ecological and start-up winemakers from Eastern and Western Europe. Here you\'ll find wines that are made ecologically and biodynamically, as well the famed \'orange wine,\' a revival of an old form of winemaking that\u2019s attracting growing interest at home and abroad. For this the grapes are kept macerating much longer than usual, giving the resulting liquid its distinctive colour and complex taste. If you\u2019d like to know more, stop by Wines and Colors and pick up a bottle or two.","paragraph2":"We consider nowadays wines as monetary compromise with philosophy and sense of wine. And follow to concept that wine and wine drinking is real connection with God and Galaxy throw vineyard, environment, planet and human beings. We with you find eco- and biodynamic (by Rudolf Steiner and his teacher Helena Blavatsky, lived in Tbilisi), wine from mountains and trees (technology named Hautain), qvevri (clay pots, amphores) wines, wines from grapes dived into the sea, ancient and old technology made wines and a lot of others.","bannarText":"Our motto is Come Back to Wine as Wine"},"sociologySection":{"heading":"Sociology","paragraph1":"I consider sociology as science about transition from reality to ideal and to the opposite side. Sociology is not that easy to define, so a sociology of wine could mean many things. This is, from my perspective, goodness. It presents opportunities. I want to share those opportunities. I would like lots of people to contribute.","paragraph2":"First and foremost, sociology is about society. This might seem a bit simplistic, but it is in fact not. There is one problem. Today, many others are ready to throw society out of the discussion. It seems like society is out of fashion.","paragraph3":"In many types of sociological arguments, society denotes a relational, dynamic product of the continuing production of sense, purpose, unity, and meaning. If that sounds pretty academic, it is, since it was written by one. Nowadays, I would simply say: Society, community, family or friendship gives meaning to your life. This is a fact. Reflecting upon how each got its place in your life, how it evolved, is not only interesting, but essential.","paragraph4":"Astonishingly, a beverage like wine plays into this in interesting ways. Let me give an example of socialization. Traditional sociological perspectives include describing the process of socialization into societies, groups and organizations.","paragraph5":"In the case of wine, one could imagine investigating sub-groups within existing societal boundaries, such as Hispanics in America, and check how their relationship to wine has evolved. The focus would be on how wine is understood among this group. I would look into the cultural and historical context. I would look into families and the way wine is talked about. I would look at recent trends. I would look at the marketing of wine to Hispanics, or lack thereof."},"aboutMe":{"heading":"About me","paragraph1":"The founder of concept project and creative leader is me, Vakhtang de Maskhulia.","paragraph2":"Known with nick names as Vahoo and Homo Cryptos, former presidential spokesman, prominent TV-journalist, sociologist and producer. Visionnaire, caviste and connaisseur. Member of Tired hedonists Club.","paragraph3":"Part time gentleman, posthedonist and global village resident.","paragraph4":"Follow Karma Kagyu lineage of Buddhism.","paragraph5":"Founder of non - govermental circle of WWF - World Wide F(Friends, Fathers and others names beginned with F.)","paragraph6":"Communicate with people read minimum 3 books (Ulysses by James Joyce, Gravity\u2019s Rainbow by Thomas Pynchon, Shantaram by Gregory David Roberts) and joined Wines and Colors - white, orange, rose and read."}}')},87:function(e){e.exports=JSON.parse('{"philosophySection":{"heading":"Philosophie","paragraph1":"Wines and Colors ist ein Konzeptprojekt, das sich auf einige der kleineren Namen der Weinindustrie konzentriert und sich intensiv darum bem\xfcht, die interessanteren Flaschen zu finden, die von Boutique-, \xd6ko- und Start-up-Winzern aus Ost- und Westeuropa hergestellt werden. Hier finden Sie Weine, die \xf6kologisch und biodynamisch hergestellt werden, sowie den ber\xfchmten \\"Orangenwein\\", eine Wiederbelebung einer alten Form der Weinherstellung, die im In- und Ausland auf wachsendes Interesse st\xf6\xdft. Dazu werden die Trauben viel l\xe4nger als gew\xf6hnlich mazeriert, wodurch die resultierende Fl\xfcssigkeit ihre unverwechselbare Farbe und ihren komplexen Geschmack erh\xe4lt. Wenn Sie mehr wissen m\xf6chten, schauen Sie bei Wines and Colors vorbei und holen Sie sich ein oder zwei Flaschen.","paragraph2":"Wir betrachten Weine heutzutage als monet\xe4ren Kompromiss mit Philosophie und Sinn f\xfcr Wein. Und folgen Sie dem Konzept, dass Wein und Weintrinken eine echte Verbindung zwischen Gott und Galaxis, Weinberg, Umwelt, Planeten und Menschen sind. Wir bei Ihnen finden \xd6ko- und Biodynamik (von Rudolf Steiner und seiner in Tiflis lebenden Lehrerin Helena Blavatsky), Wein aus Bergen und B\xe4umen (Technologie namens Hautain), Qvevri-Weine (Tont\xf6pfe, Amphoren), Weine aus ins Meer getauchten Trauben , alte und alte Technologie machte Weine und viele andere.","bannarText":"Unser Motto lautet: Come Back to Wine as Wine"},"sociologySection":{"heading":"Soziologie","paragraph1":"Ich betrachte Soziologie als Wissenschaft \xfcber den \xdcbergang von der Realit\xe4t zum Ideal und zur Gegenseite. Soziologie ist nicht so einfach zu definieren, daher k\xf6nnte eine Soziologie des Weins viele Dinge bedeuten. Dies ist aus meiner Sicht G\xfcte. Es bietet M\xf6glichkeiten. Ich m\xf6chte diese M\xf6glichkeiten teilen. Ich m\xf6chte, dass viele Leute dazu beitragen.","paragraph2":"In erster Linie geht es in der Soziologie um die Gesellschaft. Das mag ein bisschen simpel erscheinen, ist es aber in der Tat nicht. Es gibt ein Problem. Heute sind viele andere bereit, die Gesellschaft aus der Diskussion zu werfen. Es scheint, als sei die Gesellschaft aus der Mode gekommen.","paragraph3":"In vielen Arten von soziologischen Argumenten bezeichnet die Gesellschaft ein relationales, dynamisches Produkt der fortgesetzten Produktion von Sinn, Zweck, Einheit und Bedeutung. Wenn das ziemlich akademisch klingt, ist es das, da es von einem geschrieben wurde. Heutzutage w\xfcrde ich einfach sagen: Gesellschaft, Gemeinschaft, Familie oder Freundschaft geben Ihrem Leben einen Sinn. Das ist ein Fakt. Es ist nicht nur interessant, dar\xfcber nachzudenken, wie jeder seinen Platz in Ihrem Leben bekommen hat, wie er sich entwickelt hat, sondern auch wichtig.","paragraph4":"Erstaunlicherweise spielt ein Getr\xe4nk wie Wein auf interessante Weise eine Rolle. Lassen Sie mich ein Beispiel f\xfcr die Sozialisation geben. Zu den traditionellen soziologischen Perspektiven geh\xf6rt die Beschreibung des Sozialisationsprozesses in Gesellschaften, Gruppen und Organisationen.","paragraph5":"Im Fall von Wein k\xf6nnte man sich vorstellen, Untergruppen innerhalb bestehender gesellschaftlicher Grenzen, wie z. B. Hispanics in Amerika, zu untersuchen und zu \xfcberpr\xfcfen, wie sich ihre Beziehung zum Wein entwickelt hat. Der Fokus w\xfcrde darauf liegen, wie Wein in dieser Gruppe verstanden wird. Ich w\xfcrde in den kulturellen und historischen Kontext schauen. Ich w\xfcrde mich um Familien k\xfcmmern und die Art und Weise, wie \xfcber Wein gesprochen wird. Ich w\xfcrde mir die j\xfcngsten Trends ansehen. Ich w\xfcrde mir die Vermarktung von Wein f\xfcr Hispanics ansehen, oder das Fehlen davon."},"aboutMe":{"heading":"\xdcber mich","paragraph1":"Der Gr\xfcnder des Konzeptprojekts und Creative Director bin ich, Vakhtang de Maskhulia.","paragraph2":"Bekannt unter Spitznamen wie Vahoo und Homo Cryptos, ehemaliger Sprecher des Pr\xe4sidenten, prominenter Fernsehjournalist, Soziologe und Produzent. Visionnaire, Caviste und connaisseur.","paragraph3":"Mitglied im Club der m\xfcden Hedonisten.","paragraph4":"Teilzeit-Lord, Post-Hedonist und globaler Dorfbewohner.","paragraph5":"Folgen Sie der Karma Kagyu Linie des Buddhismus. Gr\xfcnder des WWF Non-State Circle - World Wide F (Freunde, V\xe4ter-Fathers und andere Namen, beginnend mit F.)","paragraph6":"Kommunizieren Sie mit Menschen, lesen Sie mindestens 3 B\xfccher (Ulysses von James Joyce, Gravity\'s Rainbow von Thomas Pynchon, Shantaram von Gregory David Roberts) und schlie\xdfen Sie sich Wines and Colours - white, orange, rose und read an."}}')},89:function(e,t,a){e.exports=a(129)}},[[89,1,2]]]);
//# sourceMappingURL=main.771da6e4.chunk.js.map