(this["webpackJsonpwacho-bs-react"]=this["webpackJsonpwacho-bs-react"]||[]).push([[0],{51:function(e,t,a){e.exports=a.p+"static/media/header-loop.f3bd3584.mp4"},61:function(e,t,a){e.exports=a.p+"static/media/p1.6f5bf8f3.jpg"},62:function(e,t,a){e.exports=a.p+"static/media/p2.e9f95fde.jpg"},63:function(e,t,a){e.exports=a.p+"static/media/p3.43fd4378.jpg"},64:function(e,t,a){e.exports=a.p+"static/media/p4.c0d39414.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/p5.af08f417.jpg"},66:function(e,t,a){e.exports=a.p+"static/media/parallax1.433a88c8.jpg"},71:function(e,t,a){e.exports=a(86)},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(30),l=a.n(i),c=a(10),o=a(11),s=a(13),m=a(12),d=a(14),u=a(68),h=a(20),p=a(51),f=a.n(p),v=a(26),g=a(27);function E(){return r.a.createElement("header",null,r.a.createElement("div",{className:"overlay"}),r.a.createElement("video",{playsInline:"playsinline",autoPlay:"autoplay",muted:"muted",loop:"loop"},r.a.createElement("source",{src:f.a,type:"video/mp4"})),r.a.createElement("div",{className:"container h-100"},r.a.createElement("div",{className:"d-flex h-100 text-center align-items-center"},r.a.createElement("div",{className:"w-100 text-white"},r.a.createElement("div",{className:"display-4",id:"playPauseIcon"},r.a.createElement(v.a,{icon:g.d})),r.a.createElement("h1",{className:"display-3"},"Hautain Wine"),r.a.createElement("p",{className:"lead mb-0"},"Epic | Ethic | Exceptional | Estraordinary | Exclusive")))))}var b=a(97),y=a(88),w=a(95),k=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,{bg:"dark",variant:"dark",expand:"md"},r.a.createElement(b.a.Brand,{href:"/"},"Wines N\u2019 Roses"),r.a.createElement(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(b.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(y.a,{className:"mr-auto"},r.a.createElement(y.a.Link,{href:"#products"},"Products"),r.a.createElement(w.a,{title:"About",id:"basic-nav-dropdown"},r.a.createElement(w.a.Item,{href:"#philosophy"},"Philosophy"),r.a.createElement(w.a.Item,{href:"#sociology"},"Sociology"),r.a.createElement(w.a.Item,{href:"#my-dream"},"My Dream"),r.a.createElement(w.a.Item,{href:"#about-me"},"About Me"),r.a.createElement(w.a.Item,{href:"#my-team"},"My team")),r.a.createElement(y.a.Link,{href:"#contact"},"Contact"))))}}]),t}(n.Component),N=a(98),x=a(58),j=a(90),O=a(59),C=a(60),S=a(89),T=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.amountToCharge;return(r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{xs:12,md:4,className:"my-2"},r.a.createElement(N.a,null,r.a.createElement(N.a.Header,null,"Cart Total"),r.a.createElement(N.a.Body,null,r.a.createElement(S.a,{hover:!0,borderless:!0,size:"sm"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Subtotal: "),r.a.createElement("td",null,"\u20ac"," ",Number.parseFloat(e).toFixed(2).toString())),r.a.createElement("tr",null,r.a.createElement("td",null,"Shipping: "),r.a.createElement("td",null,"\u20ac 5.90")),r.a.createElement("tr",null,r.a.createElement("td",null,"Total"),r.a.createElement("td",null,r.a.createElement(j.a,{variant:"info"},"\u20ac"," ",Number.parseFloat(e+5.9).toFixed(2).toString())))))))),r.a.createElement(C.a,{xs:12,md:4},r.a.createElement(N.a,null,r.a.createElement(N.a.Body,{className:"p-0 m-2 text-center"},r.a.createElement(O.PayPalButton,{createOrder:function(t,a){return a.order.create({purchase_units:[{amount:{value:Number.parseFloat(e+5.9).toFixed(2).toString()}}]})},onApprove:function(e,t){return t.order.capture().then((function(e){alert("Transaction completed by "+e.payer.name.given_name)}))}}))))))}}]),t}(n.Component),W=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.products,a=e.addProductToCart,n=e.increaseQty,i=e.decreaseQty,l=e.productsInCart,c=e.amountToCharge;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"products",className:"handwritten shadow-lg p-3 my-5 bg-white rounded text-center display-4"},"Be smart, just drink the best and fuck the rest!"),r.a.createElement("section",{className:"container mb-3"},r.a.createElement("div",{className:"row wine-products d-flex justify-content-center"},t.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-6 col-md-3 pb-2"},r.a.createElement(N.a,null,r.a.createElement("div",{className:"ml-auto"},e.qty>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){n(e.id)},className:"btn btn-outline-info btn-sm rounded-circle m-2"},r.a.createElement(v.a,{icon:g.c})),r.a.createElement("button",{onClick:function(){i(e.id)},className:"btn btn-outline-info btn-sm rounded-circle m-2"},r.a.createElement(v.a,{icon:g.b}))),0===e.qty&&r.a.createElement("button",{onClick:function(){a(e.id)},className:"btn btn-outline-info btn-sm rounded-circle m-2"},r.a.createElement(v.a,{icon:g.a}))),r.a.createElement(N.a.Img,{variant:"top",src:e.image}),r.a.createElement(N.a.Body,null,r.a.createElement(x.a,{variant:"outline-info",block:!0,className:"rounded-pill"},e.title)),r.a.createElement(N.a.Footer,{className:"px-2 text-center"},r.a.createElement("div",{className:"border border-info rounded-pill"},"\u20ac ",e.price," ",e.qty>0&&r.a.createElement("span",null," ","x ",e.qty," ="," ",r.a.createElement(j.a,{pill:!0,variant:"info"},"\u20ac ",e.price*e.qty))))))})),c>0&&r.a.createElement(T,{amountToCharge:c,productsInCart:l}))))}}]),t}(n.Component),I=a(61),q=a.n(I),F=a(62),P=a.n(F),G=a(63),B=a.n(G),M=a(64),z=a.n(M),H=a(65),A=a.n(H);function K(){return r.a.createElement("footer",{className:"text-white bg-dark py-4",id:"contact"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row vh-100 d-flex justify-content-around align-items-center"},r.a.createElement("div",{className:"col-12 col-lg-6"},r.a.createElement("iframe",{title:"Google-Maps",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.2591076019726!2d11.58549961505705!3d48.12452636004989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf7a6ae41f0f%3A0x83fe7076b2716f86!2sRegerpl.%205%2C%2081541%20M%C3%BCnchen!5e0!3m2!1sen!2sde!4v1573644873814!5m2!1sen!2sde",width:"100%",height:"450",frameBorder:"0",style:{border:0},allowFullScreen:""})),r.a.createElement("div",{className:"col-12 col-lg-6"},r.a.createElement("div",{className:"row pb-2"},r.a.createElement("div",{className:"col-1"},r.a.createElement("i",{className:"fa fa-map-marker text-light"})),r.a.createElement("div",{className:"col-11"},r.a.createElement("p",{className:"text-light"},"Goldenes Vlies M.M.M.",r.a.createElement("br",null),"Regerplatz, 5 81541 Munich Germany"))),r.a.createElement("div",{className:"row pb-2"},r.a.createElement("div",{className:"col-1"},r.a.createElement("i",{className:"fa fa-envelope text-light"})),r.a.createElement("div",{className:"col-11"},r.a.createElement("a",{href:"mailto:goldenes.vlies.mmm@gmail.com",className:"text-light"},"goldenes.vlies.mmm@gmail.com"),r.a.createElement("br",null),r.a.createElement("a",{href:"mailto:office@vignehautain.com",className:"text-light"},"office@vignehautain.com"))),r.a.createElement("div",{className:"row pb-2"},r.a.createElement("div",{className:"col-1"},r.a.createElement("i",{className:"fa fa-phone text-light"})),r.a.createElement("div",{className:"col-11"},r.a.createElement("address",null,r.a.createElement("a",{href:"tel:+4917669521145",className:"text-light"},"+49-176-69521145"))))))))}var Q=a(66),R=a.n(Q);function D(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"vh-100 d-flex parallax justify-content-center align-items-center",style:{backgroundImage:"url("+R.a+")"}},r.a.createElement("h2",{className:"text-white"},"PHILOSOPHY")),r.a.createElement("section",{className:"container py-3",id:"philosophy"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-sm-4 m-auto"},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Tacuin_Automne03.jpg/800px-Tacuin_Automne03.jpg",alt:"Hautain",style:{width:"100%"},className:"img-thumbnail rounded"})),r.a.createElement("div",{className:"col-12 col-sm-8 m-auto"},"en"===e.lang?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Wines and Colors is a concept project with a focus on some of the smaller names of the wine industry, working hard to find the more interesting bottles being produced by boutique, ecological and start-up winemakers from Eastern and Western Europe. Here you'll find wines that are made ecologically and biodynamically, as well the famed 'orange wine,' a revival of an old form of winemaking that\u2019s attracting growing interest at home and abroad. For this the grapes are kept macerating much longer than usual, giving the resulting liquid its distinctive colour and complex taste. If you\u2019d like to know more, stop by Wines and Colors and pick up a bottle or two."),r.a.createElement("p",null,"We consider nowadays wines as monetary compromise with philosophy and sense of wine. And follow to concept that wine and wine drinking is real connection with God and Galaxy throw vineyard, environment, planet and human beings. We with you find eco- and biodynamic (by Rudolf Steiner and his teacher Helena Blavatsky, lived in Tbilisi), wine from mountains and trees (technology named Hautain), qvevri (clay pots, amphores) wines, wines from grapes dived into the sea, ancient and old technology made wines and a lot of others.")):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,'Wines and Colors ist ein Konzeptprojekt, das sich auf einige der kleineren Namen der Weinindustrie konzentriert und sich intensiv darum bem\xfcht, die interessanteren Flaschen zu finden, die von Boutique-, \xd6ko- und Start-up-Winzern aus Ost- und Westeuropa hergestellt werden. Hier finden Sie Weine, die \xf6kologisch und biodynamisch hergestellt werden, sowie den ber\xfchmten "Orangenwein", eine Wiederbelebung einer alten Form der Weinherstellung, die im In- und Ausland auf wachsendes Interesse st\xf6\xdft. Dazu werden die Trauben viel l\xe4nger als gew\xf6hnlich mazeriert, wodurch die resultierende Fl\xfcssigkeit ihre unverwechselbare Farbe und ihren komplexen Geschmack erh\xe4lt. Wenn Sie mehr wissen m\xf6chten, schauen Sie bei Wines and Colors vorbei und holen Sie sich ein oder zwei Flaschen.'),r.a.createElement("p",null,"Wir betrachten Weine heutzutage als monet\xe4ren Kompromiss mit Philosophie und Sinn f\xfcr Wein. Und folgen Sie dem Konzept, dass Wein und Weintrinken eine echte Verbindung zwischen Gott und Galaxis, Weinberg, Umwelt, Planeten und Menschen sind. Wir bei Ihnen finden \xd6ko- und Biodynamik (von Rudolf Steiner und seiner in Tiflis lebenden Lehrerin Helena Blavatsky), Wein aus Bergen und B\xe4umen (Technologie namens Hautain), Qvevri-Weine (Tont\xf6pfe, Amphoren), Weine aus ins Meer getauchten Trauben , alte und alte Technologie machte Weine und viele andere."))))))}var _=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).addProductToCart=function(e){var t=a.state.products;t.find((function(t){return t.id===e})).qty++,a.updateTotal(),a.setState({products:t})},a.increaseQty=function(e){var t=a.state.products;t.find((function(t){return t.id===e})).qty++,a.updateTotal(),a.setState({products:t})},a.decreaseQty=function(e){var t=a.state.products;t.find((function(t){return t.id===e})).qty--,a.updateTotal(),a.setState({products:t})},a.updateTotal=function(){var e=a.state.products.reduce((function(e,t){return e+t.price*t.qty}),0);a.setState({amountToCharge:e})},a.state={amountToCharge:0,lang:"en",products:[{id:"p001",price:1.99,qty:0,title:"Rice Pitcher",image:q.a,variety:"Rkatsiteli",color:"Dark brown with golden color",aroma:"Meadow flowers",taste:"soft",alcohol:"13%",description:'"Rkatsiteli Pitcher" - Made from the ancient Georgian grape variety Rkatsiteli, built on strict sharing of ancestral traditions with whole chacha (clover, grains). After fermentation, we will leave for 4-5 months in our unadulterated pitcher. Dark brown with golden hues. The tones of honey, flowers and roasted walnuts change dynamically, giving it fullness and elegance.'},{id:"p002",price:2.99,qty:0,title:"Green pitcher",image:P.a,variety:"Green",color:"Beige, green",aroma:"Ripe fruit and various stems",taste:"full and velvety",alcohol:"13%",description:'"Green pitcher" comes from the grape variety "Kakhuri Green" grown in Kakheti. Has a light greenish tint. After fermentation we will lose 4-5 months in our uninvolved pitcher. The aroma and taste of the ripe fruit and the different dried fruits are felt, which blend well with each other when tasting. Is complete and velvety.'},{id:"p003",price:3.99,qty:0,title:"Pitcher pitcher",image:B.a,variety:"Khikhvi",color:"Green tint, golden",aroma:"Meadow flowers",taste:"ripe fruit, velvety",alcohol:"13%",description:'"Khikhvi Qvevri" is made from the ancient Khikhvi grape variety. Has a golden-green tint. After fermentation we will lose 4-5 months in our uninvolved pitcher. It is distinguished by the delicate floral aroma, the aroma of the ripe fruit and the taste, it is delicate and velvety. It has high antioxidant healing properties.'},{id:"p004",price:4.99,qty:0,title:"Kiss the pitcher",image:z.a,variety:"Kiss",color:"Dark brown",aroma:"gentle fruity and fruity aroma",taste:"harmonious, soft",alcohol:"13%",description:'"Kiss Qvevri" is made from the ancient Georgian grape variety Qissi. Grapes selected on the grape are pitched 4-5 with careful patronage. It has a dark brown color.'},{id:"p005",price:5.99,qty:0,title:"Saperavi pitcher",image:A.a,variety:"Saperavi",color:"Purple, dark pomegranate",aroma:"cherry, blackberry, forest berry, plum",taste:"cherries, berries, blackberries",alcohol:"13%",description:'"Saperavi pitcher" is made from the ancient Georgian vine variety Saperavi, cultivated in Kakheti. It is characterized by dark pomegranate, violet color.'}]},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.products,a=e.amountToCharge,n=e.lang;return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(k,null),r.a.createElement(W,{products:t,addProductToCart:this.addProductToCart,increaseQty:this.increaseQty,decreaseQty:this.decreaseQty,amountToCharge:a}),r.a.createElement(D,{lang:n}),r.a.createElement(K,null))}}]),t}(n.Component),L=a(42),U=a.n(L),J=a(94),V=a(91),Y=a(92),X=a(93),Z=a(67),$=a(96),ee=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState({quantity:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.inventory,r=t._id,i=t.quantity;n=(n=parseInt(n)+parseInt(i)).toString();console.log({_id:r,inventory:n});try{fetch("https://wacho-bs-react-be.herokuapp.com/products",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:r,inventory:n})}).then((function(e){return e.json()})).then((function(e){a.setState({quantity:"",inventory:n})}))}catch(l){alert("Something went wrong!")}},a.state=a.props.product,a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.title,n=t.image,i=t.inventory,l=t.quantity;return r.a.createElement(V.a,null,r.a.createElement("div",{className:"col-4 px-0 mb-2"},r.a.createElement(Y.a,{style:{width:"100%"},src:n,rounded:!0})),r.a.createElement("div",{className:"col-8 px-0 mb-2"},r.a.createElement(N.a,null,r.a.createElement(N.a.Body,null,r.a.createElement(N.a.Title,null,a)),r.a.createElement(X.a,{className:"list-group-flush"},r.a.createElement(Z.a,null,"Current Inventory: ",i),r.a.createElement(Z.a,null,r.a.createElement($.a,{onSubmit:function(t){e.handleSubmit(t)}},r.a.createElement($.a.Group,null,r.a.createElement(V.a,null,r.a.createElement(C.a,{xs:12,className:"mb-2"},r.a.createElement($.a.Control,{onChange:this.handleChange,value:l,type:"number",min:"1",max:"20",required:!0,placeholder:"New Stock"})),r.a.createElement(C.a,{xs:12},r.a.createElement(x.a,{type:"submit",block:!0,variant:"outline-info"},"Update"))),r.a.createElement(j.a,{className:"my-2",style:{width:"100%"},pill:!0,variant:"info"},"This will add to current inventory"))))))))}},{key:"componentDidMount",value:function(){this.setState({quantity:""})}}]),t}(n.Component),te=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){var e,t;return U.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://wacho-bs-react-be.herokuapp.com",n.next=3,U.a.awrap(fetch("https://wacho-bs-react-be.herokuapp.com/products"));case 3:return e=n.sent,n.next=6,U.a.awrap(e.json());case 6:t=n.sent,a.setState({products:t});case 8:case"end":return n.stop()}}))},a.state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.products;return r.a.createElement(J.a,{className:"my-2"},r.a.createElement("div",{className:"row"},e&&e.map((function(e){return r.a.createElement("div",{key:e._id,className:"col-6"},r.a.createElement(ee,{product:e}))}))))}}]),t}(n.Component),ae=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/admin"},r.a.createElement(te,null)),r.a.createElement(h.a,{path:"/"},r.a.createElement(_,null)))))}}]),t}(n.Component);l.a.render(r.a.createElement(ae,null),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.10907be9.chunk.js.map