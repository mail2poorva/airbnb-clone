(this["webpackJsonpairbnb-clone"]=this["webpackJsonpairbnb-clone"]||[]).push([[0],{128:function(e,t,i){},129:function(e,t,i){},130:function(e,t,i){},131:function(e,t,i){},132:function(e,t,i){},134:function(e,t,i){"use strict";i.r(t);var s=i(0),n=i.n(s),a=i(29),c=i.n(a),r=(i(92),i(28)),o=i(7),h=(i(93),i(37)),d=(i(94),i(150)),l=(i(95),i(96),i(97),i(58),i(78)),j=i(79),b=i.n(j),p=i(1);var m=function(){var e=Object(o.f)(),t=Object(s.useState)(new Date),i=Object(h.a)(t,2),n=i[0],a=i[1],c=Object(s.useState)(new Date),r=Object(h.a)(c,2),j=r[0],m=r[1],x={startDate:n,endDate:j,key:"selection"};return Object(p.jsxs)("div",{className:"search",children:[Object(p.jsx)(l.DateRangePicker,{ranges:[x],onChange:function(e){a(e.selection.startDate),m(e.selection.endDate)}}),Object(p.jsxs)("h2",{children:["Number of guests ",Object(p.jsx)(b.a,{})]}),Object(p.jsx)("input",{min:0,defaultValue:2,type:"number"}),Object(p.jsx)(d.a,{variant:"outlined",onClick:function(){return e.push("/search")},children:"Search Airbnb"})]})};var x=function(){var e=Object(o.f)(),t=Object(s.useState)(!1),i=Object(h.a)(t,2),n=i[0],a=i[1];return Object(p.jsxs)("div",{className:"banner",children:[Object(p.jsxs)("div",{className:"banner-search",children:[Object(p.jsx)(d.a,{variant:"outlined",className:"banner-search-btn",onClick:function(){return a(!n)},children:n?"Hide":"Search Dates"}),n&&Object(p.jsx)(m,{})]}),Object(p.jsxs)("div",{className:"banner-info",children:[Object(p.jsx)("h1",{children:"Get out and stretch your imagination"}),Object(p.jsx)("h5",{children:"Plan a different kind of getaway to uncover the hidden gems near you."}),Object(p.jsx)(d.a,{variant:"outlined",onClick:function(){return e.push("/search")},children:"Explore Nearby"})]})]})};i(128);var u=function(e){var t=e.src,i=e.title,s=e.description,n=e.price;return Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("img",{src:t,alt:""}),Object(p.jsxs)("div",{className:"card-info",children:[Object(p.jsx)("h2",{children:i}),Object(p.jsx)("h4",{children:s}),Object(p.jsx)("h3",{children:n})]})]})};var f=function(){return Object(p.jsxs)("div",{className:"home",children:[Object(p.jsx)(x,{}),Object(p.jsxs)("div",{className:"home_section",children:[Object(p.jsx)(u,{src:"https://images.unsplash.com/photo-1541086095944-f4b5412d3666?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",title:"Online Experiences",description:"Unique Activities we can do together,led by a world of hosts"}),Object(p.jsx)(u,{src:"https://images.unsplash.com/photo-1574653340053-2a0b120429a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",title:"Unique Stays",description:"Spaces that are more than just a place to sleep"}),Object(p.jsx)(u,{src:"https://images.unsplash.com/photo-1563019880-9b2ea5d89a12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",title:"Entire Homes",description:"Comfortable private places,with rooms for friends or family."})]}),Object(p.jsxs)("div",{className:"home_section",children:[Object(p.jsx)(u,{src:"https://images.unsplash.com/photo-1606021511779-aae22948af3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc3RhdXJhbnR8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",title:"3 Bedroom FLat in Bournemouth",description:"Superhost with a stunning view of beachside in Sunny Bournemouth",price:"$130/night"}),Object(p.jsx)(u,{src:"https://images.unsplash.com/photo-1560348113-efa5a5d23820?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHJlc3RhdXJhbnR8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",title:"Penthouse in London",description:"Enjoy the amazing sights of London with this stunning penthouse",price:"$350/night"}),Object(p.jsx)(u,{src:"https://images.unsplash.com/photo-1532360007308-dae5348c77c9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHJlc3RhdXJhbnR8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",title:"1 Bedroom Apartment",description:"Superhost with great amenties and a fabulous shopping complex nearby",price:"$70/night"})]})]})},g=i.p+"static/media/logo.e4424517.png",O=(i(129),i(80)),v=i.n(O),w=i(81),M=i.n(w),y=i(82),N=i.n(y),D=i(83),H=i.n(D);var W=function(){return Object(p.jsxs)("div",{className:"header",children:[Object(p.jsx)(r.b,{to:"/",children:Object(p.jsx)("img",{src:g,className:"header-img"})}),Object(p.jsxs)("div",{className:"header-center",children:[Object(p.jsx)("input",{type:"text"}),Object(p.jsx)(v.a,{})]}),Object(p.jsxs)("div",{className:"header-right",children:[Object(p.jsx)("p",{children:"Become a host"}),Object(p.jsx)(M.a,{}),Object(p.jsx)(N.a,{}),Object(p.jsx)(H.a,{})]})]})};i(130);var A=function(){return Object(p.jsxs)("div",{className:"footer",children:[Object(p.jsx)("p",{children:"\xa9 2020 Airbnb clone! No rights reserved - this is a demo!"}),Object(p.jsx)("p",{children:"\u2027Privacy \u2027 Terms \u2027 Sitemap \u2027Company Details"})]})},F=(i(131),i(132),i(84)),P=i.n(F),B=i(85),S=i.n(B);var k=function(e){var t=e.img,i=e.location,s=e.title,n=e.description,a=e.star,c=e.price,r=e.total;return Object(p.jsxs)("div",{className:"searchResult",children:[Object(p.jsx)("img",{src:t}),Object(p.jsx)(P.a,{className:"searchResult-heart"}),Object(p.jsxs)("div",{className:"searchResult-info",children:[Object(p.jsxs)("div",{className:"searchResult-info-top",children:[Object(p.jsx)("p",{children:i}),Object(p.jsx)("h1",{children:s}),Object(p.jsx)("p",{children:"______"}),Object(p.jsx)("p",{children:n})]}),Object(p.jsxs)("div",{className:"searchResult-info-bottom",children:[Object(p.jsxs)("div",{className:"searchResult-stars",children:[Object(p.jsx)(S.a,{className:"searchResult-stars-icon"}),Object(p.jsx)("p",{children:Object(p.jsx)("strong",{children:a})})]}),Object(p.jsxs)("div",{className:"searchResult-price",children:[Object(p.jsx)("h2",{children:c}),Object(p.jsx)("p",{children:r})]})]})]})]})};var L=function(){return Object(p.jsxs)("div",{className:"searchPage",children:[Object(p.jsxs)("div",{className:"searchPage-info",children:[Object(p.jsx)("p",{children:"62 stays \u2027 26 august to 30 august \u2027 2guest"}),Object(p.jsx)("h1",{children:"Stays nearby"}),Object(p.jsx)(d.a,{variant:"outlined",children:"Cancellation Flexibility"}),Object(p.jsx)(d.a,{variant:"outlined",children:"Type of place"}),Object(p.jsx)(d.a,{variant:"outlined",children:"Price"}),Object(p.jsx)(d.a,{variant:"outlined",children:"Rooms and beds"}),Object(p.jsx)(d.a,{variant:"outlined",children:"More filters"})]}),Object(p.jsx)(k,{img:"https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",location:"Private room in the center of London",title:"Stay at this spacious Edwardian House",description:"1guest \u2027 1 bedroom \u2027 1 bed \u2027 1.5 shared bathrooms \u2027 Wifi \u2027 Kitchen \u2027 Free Parking \u2027 Washing Machine ",star:4.73,price:"$30 / night",total:"$117 total"}),Object(p.jsx)(k,{img:"https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",location:"Private room incenter of London",title:"Stay at this spaciousEdwardian House",description:"1 guest \xb7 1 bedroom \xb7 1 bed \xb7 1.5 sharedbthrooms Wifi \xb7 Kitchen \xb7 Free parking \xb7 Washing Machine",star:4.73,price:"\xa330 / night",total:"$117 total"}),Object(p.jsx)(k,{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU",location:"Private room incenter of London",title:"Stay at this spaciousEdwardian House",description:"1 guest 1bedroom 1 bed 1.5 sharedbthrooms Wifi Kitchen .Free parking Washing Machine",star:4.73,price:"\xa330 / night",total:"\xa3117 total"}),Object(p.jsx)(k,{img:"https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg",location:"Private room incenter of London",title:"Independant luxurystudio apartment",description:"2_guestbedroom1 bed.31.5 sharedbthrooms Wifi Kitchen",star:4.3,price:"\xa340/ night",total:"\xa3157 total"}),Object(p.jsx)(k,{img:"https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg",location:"Private roomcenter of London",title:"London StudioApartments",description:"4 guest 4bedroom 4 bed 2 bathrooms. Free parking. WashingMachine",star:3.8,price:"\xa335 / night",total:"\xa3207 total"}),Object(p.jsx)(k,{img:"https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",location:"Private room incenter of London",title:"30 mins to OxfordStreet, Excel London",description:"1 guest . 1bedroom 1 bed 1.5 sharedbthrooms \u2022 Wifi Kitchen.Free parking Washing Machine",star:4.1,price:"\xa355 / night",total:"\xa3320 total"}),Object(p.jsx)(k,{img:"https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250, h_1500, c_limit/airbnb-plus-london.jpg",location:"Private room incenter of London",title:"Spacious PeacefulModern Bedroom",description:"3 guest 1 bedroom 1 bed 1.5 sharedbthrooms Wifi Free parkingDry Cleaning",star:5,price:"\xa360/ night",total:"\xa3450 total"}),Object(p.jsx)(k,{img:"https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937",location:"Private room in center of London",title:"The Blue Room In London",description:"2 guest 1 bedroom 1 bed 1.5 sharedbthrooms Wifi. WashingMachine",star:4.23,price:"\xa365 / night",total:"\xa3480 total"}),Object(p.jsx)(k,{img:"https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp",location:"Private room incenter of London",title:"5 Star Luxury Apartment",description:"3 guest  1bedroom 1 bed 1.5 sharedbthrooms Wifi Kitchen.Free parking Washing Machine",star:3.85,price:"\xa390/ night",total:"\xa3650 total"})]})};var R=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"appName",children:Object(p.jsxs)(r.a,{children:[Object(p.jsx)(W,{}),Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{path:"/search",children:Object(p.jsx)(L,{})}),Object(p.jsx)(o.a,{path:"/",children:Object(p.jsx)(f,{})})]}),Object(p.jsx)(A,{})]})})})};c.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(R,{})}),document.getElementById("root"))},92:function(e,t,i){},93:function(e,t,i){},94:function(e,t,i){},95:function(e,t,i){}},[[134,1,2]]]);
//# sourceMappingURL=main.e2622581.chunk.js.map