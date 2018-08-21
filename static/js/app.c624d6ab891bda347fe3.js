webpackJsonp([1],{DGOK:function(t,e){},EpVa:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={name:"App",data:function(){return{title:"Your Logo",show:!1}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(t){var e=this.getScrollPercent();this.show=e>12},getScrollPercent:function(){var t=document.documentElement,e=document.body,a="scrollTop",s="scrollHeight";return(t[a]||e[a])/((t[s]||e[s])-t.clientHeight)*100}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view"),t._v(" "),t.show?a("transition",{attrs:{name:"fade"}},[a("v-card-text",{staticStyle:{height:"100px"}},[a("v-btn",{attrs:{fixed:"",dark:"",fab:"",bottom:"",right:"",color:"blue"},on:{click:function(e){t.$vuetify.goTo("#home")}}},[a("v-icon",[t._v("keyboard_arrow_up")])],1)],1)],1):t._e()],1)},staticRenderFns:[]};var n=a("VU/8")(i,r,!1,function(t){a("EpVa")},null,null).exports,l=a("/ocq"),c=a("3EgV"),v=a.n(c),o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{light:""}},[a("v-toolbar",{staticClass:"white elevation-5",attrs:{fixed:"",flat:"",height:"65%",id:"toolbar-title"}},[a("div",{staticClass:"logo"},[a("img",{staticClass:"logo-img",attrs:{src:"static/assets/logo.png",alt:"Auckland Reliever 24/7"}})]),t._v(" "),a("v-spacer"),t._v(" "),a("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[a("v-btn",{staticClass:"menu-item",attrs:{flat:""},on:{click:function(e){t.$vuetify.goTo("#home",t.options)}}},[t._v("Home")]),t._v(" "),a("v-btn",{staticClass:"menu-item",attrs:{flat:""},on:{click:function(e){t.$vuetify.goTo("#reliever",t.options)}}},[t._v("Reliever Information")]),t._v(" "),a("v-btn",{staticClass:"menu-item",attrs:{flat:""},on:{click:function(e){t.$vuetify.goTo("#centre",t.options)}}},[t._v("Centre")]),t._v(" "),a("v-btn",{staticClass:"menu-item",attrs:{flat:""},on:{click:function(e){t.$vuetify.goTo("#vacancies",t.options)}}},[t._v("Vacancies")]),t._v(" "),a("v-btn",{staticClass:"menu-item",attrs:{flat:""},on:{click:function(e){t.$vuetify.goTo("#contact",t.options)}}},[t._v("Contact")])],1)],1),t._v(" "),a("v-content",[a("section",{attrs:{id:"home"}},[a("v-parallax",{attrs:{src:"./static/assets/hero_5.jpg",height:"750"}},[a("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[a("div",{staticStyle:{"margin-top":"100px"}},[a("h1",{staticClass:"blue-text shadow-close-heavy mb-3 display-headline text-xs-center"},[a("span",{staticClass:"orange-text"},[t._v("A")]),t._v("uckland \n            "),a("span",{staticClass:"orange-text"},[t._v("R")]),t._v("eliever \n            "),a("span",{staticClass:"orange-text"},[t._v("A")]),t._v("gency")]),t._v(" "),a("v-flex",[a("h1",{staticClass:"orange-text shadow-text mb-5 display-2 text-xs-center",attrs:{id:""}},[t._v("Fast "),a("em",{staticClass:"blue-text"},[t._v("&")]),t._v(" Save")])]),t._v(" "),a("h1",{staticClass:"blue-text headline mb-3 text-xs-center"},[t._v("A "),a("span",{staticClass:"orange-text"},[t._v("24/7")]),t._v(" service ")]),t._v(" "),a("v-flex",[a("h1",{staticClass:"orange-text shadow-text mb-5 display-2 text-xs-center",attrs:{id:""}},[t._v("0212 24"),a("span",{staticClass:"blue-text"},[t._v("/")]),t._v("7 123")])]),t._v(" "),a("v-flex",{staticClass:"text-xs-center"},[a("p",{staticClass:"scroll-down"},[a("a",{staticClass:"animate",attrs:{href:"#"},on:{click:function(e){t.$vuetify.goTo("#reliever",t.options)}}},[t._v("More")])])])],1)])],1)],1),t._v(" "),a("section",[a("v-layout",{staticClass:"my-5",attrs:{column:"",wrap:"","align-center":""}},[a("v-flex",{staticClass:"my-3",attrs:{xs12:"",sm4:""}},[a("div",{staticClass:"text-xs-center"},[a("h2",{staticClass:"headline"},[t._v("Our Services")])])]),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[a("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-space-around":""}},[a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-card",{staticClass:"elevation-3 transparent",attrs:{height:"340px"}},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v("access_time")])],1),t._v(" "),a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline text-xs-center"},[t._v("A 24/7 Service (0212 247 123)")])]),t._v(" "),a("v-card-text",[t._v("\n                    Auckland Reliever is an agency that provides relievers to childcare and afterschool care centres all over Auckland.\n                  ")]),t._v(" "),a("v-card-text",[t._v("\n                    Auckland Reliever prides itself on: Child protection and Health and safety. Please contact us if you need to view our full list of policies.\n                  ")])],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-card",{staticClass:"elevation-3 transparent",attrs:{height:"340px"}},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v("flash_on")])],1),t._v(" "),a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline"},[t._v("Professional Recruitment ")])]),t._v(" "),a("v-card-text",[t._v("\n                    Recruit and train teachers, both qualified and unqualified quarterly \n                  ")]),t._v(" "),a("v-card-text",[t._v("  \n                    Bring the best experience for children at your childcare and afterschool care centres with Art & Craft activities, fun learning games and more.\n                  ")])],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-card",{staticClass:"elevation-3 transparent",attrs:{height:"340px"}},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v("attach_money")])],1),t._v(" "),a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline text-xs-center"},[t._v("Lowest Cost")])]),t._v(" "),a("v-card-text",[t._v("\n                    Guarantee the lowest cost paid with quality teachers in the fastest time\n                  ")]),t._v(" "),a("v-card-text",[t._v("\n                    We fairly pay to our relievers. \n                   ")])],1)],1)],1)],1)],1)],1)],1),t._v(" "),a("section",{attrs:{id:"reliever"}},[a("v-parallax",{attrs:{src:"./static/assets/section_2.jpg",height:"720"}},[a("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[a("div",{staticClass:"text-xs-center"},[a("h1",{staticClass:"blue-text shadow-close-heavy mb-5 display-headline"},[a("span",{staticClass:"orange-text"},[t._v("R")]),t._v("eliever \n                "),a("span",{staticClass:"orange-text"},[t._v("I")]),t._v("nformation\n            ")]),t._v(" "),a("p",{staticClass:"scroll-down"},[a("a",{staticClass:"animate",attrs:{href:"#"},on:{click:function(e){t.$vuetify.goTo("#centre",t.options)}}},[t._v("More")])])])])],1)],1),t._v(" "),a("section",[a("v-layout",{staticClass:"my-5",attrs:{column:"",wrap:"","align-center":""}},[a("v-flex",{staticClass:"my-3",attrs:{xs12:"",sm4:""}},[a("div",{staticClass:"text-xs-center"},[a("h3",{},[t._v("As a unqualified teacher, you are trained to support childcare centers and after schools")]),t._v(" "),a("h3",{},[t._v("As a qualified reliever, you need to provide us your valid teacher registration numbers and relevant qualification")])])]),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[a("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-space-around":""}},[a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-card",{staticClass:"elevation-3 transparent",attrs:{height:"460px"}},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v("child_care")])],1),t._v(" "),a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline text-xs-center"},[t._v("How to become a reliever")])]),t._v(" "),a("v-card-text",[t._v("\n                    Contact us at any time for an interview. \n                  ")]),t._v(" "),a("v-card-text",[t._v("\n                    Choose the best time and place that suits your needs.\n                  ")]),t._v(" "),a("v-card-text",[t._v("\n                    You get paid weekly and choose where and when you would like to work\n                  ")]),t._v(" "),a("v-card-text",[t._v("\n                    Flexible time and well-paid \n                  ")])],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-card",{staticClass:"elevation-3 transparent",attrs:{height:"460px"}},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v("sentiment_satisfied_alt")])],1),t._v(" "),a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline"},[t._v("How to work as a reliever")])]),t._v(" "),a("v-card-text",[t._v("\n                    We will contact and send you information needed for the shift.\n                  ")]),t._v(" "),a("v-card-text",[t._v("\n                      You can choose the shift and the location you prefer.\n                  ")]),t._v(" "),a("v-card-text",[t._v("\n                    Support teachers in the centre with activities when necessary.\n                  ")]),t._v(" "),a("v-card-text",[t._v("\n                    No stress, No responsibilies to take home after the shift.\n                  ")]),t._v(" "),a("v-card-text",[t._v("\n                    Have a lot fun with children in the centre.\n                  ")])],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-card",{staticClass:"elevation-3 transparent",attrs:{height:"460px"}},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v("format_align_justify")])],1),t._v(" "),a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline text-xs-center"},[t._v("How to get paid")])]),t._v(" "),a("v-card-text",[t._v("\n                      Sign and send out the sign-in sheets for the shift by one of the authorities workers in the centre by mail every Friday of the current week. \n                  ")]),t._v(" "),a("v-card-text",[t._v("\n                    Download the timesheet "),a("a",{attrs:{href:"static/assets/timesheet.docx"}},[t._v("here ")])]),t._v(" "),a("v-card-text",[t._v("  \n                      Weekly payment will be received on every Wednesday of the following week \n                  ")])],1)],1)],1)],1)],1)],1)],1),t._v(" "),a("section",{attrs:{id:"centre"}},[a("v-parallax",{attrs:{src:"./static/assets/centre.jpg",height:"720"}},[a("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[a("div",{staticClass:"text-xs-center"},[a("h1",{staticClass:"blue-text shadow-close-heavy mb-5 display-headline "},[a("span",{staticClass:"orange-text"},[t._v("C")]),t._v("entre \n              "),a("span",{staticClass:"orange-text"},[t._v("I")]),t._v("nformation\n            ")]),t._v(" "),a("p",{staticClass:"scroll-down"},[a("a",{staticClass:"animate",attrs:{href:"#"},on:{click:function(e){t.$vuetify.goTo("#vacancies",t.options)}}},[t._v("More")])])])])],1)],1),t._v(" "),a("section",[a("v-layout",{staticClass:"my-5",attrs:{column:"",wrap:"","align-center":""}},[a("v-flex",{staticClass:"my-3",attrs:{xs12:"",sm4:""}},[a("div",{staticClass:"text-xs-center"},[a("h3",{},[t._v("Auckland Reliever Agency is a 24/7 service. You can contact us at any time.")]),t._v(" "),a("h3",{},[t._v("Auckland Reliever Agency guarantees the lowest cost and fast delivery with quality relief teachers")])])]),t._v(" "),a("v-flex",{staticClass:"my-3",attrs:{xs12:"",sm4:""}},[a("div",{staticClass:"text-xs-center"},[a("h2",{staticClass:"headline"},[t._v("Our Teachers")])])]),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-card",{staticClass:"elevation-3 transparent"},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v("gamepad")])],1),t._v(" "),a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline text-xs-center"},[t._v("Dynamic")])]),t._v(" "),a("v-card-text",[t._v("\n                    They love to sing songs for children such as: 5 little cupcakes, Slippery fish, one little finger, Family fingers,…They can either take mat time if needed\n                  ")]),t._v(" "),a("v-card-media",{attrs:{src:"static/assets/dynamic.jpg",height:"250px"}})],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-card",{staticClass:"elevation-3 transparent"},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v("flash_on")])],1),t._v(" "),a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline"},[t._v("Active")])]),t._v(" "),a("v-card-text",[t._v("\n                      They know how to play fun learning games with children like: Duck Duck Goose, Jack in the box, Sandy boys Sandy girls, Bug under the rug, fishing game, roll roll balls,…. \n                  ")]),t._v(" "),a("v-card-media",{attrs:{src:"static/assets/active.jpg",height:"250px"}})],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-card",{staticClass:"elevation-3 transparent"},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v("color_lens")])],1),t._v(" "),a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline text-xs-center"},[t._v("Creative")])]),t._v(" "),a("v-card-text",[t._v("\n                      They know how make cute art and craft activities with kids like making telescopes by cellophane paper, making a cute snake from milk lids or a lady bugs from recycle paper,… \n                  ")]),t._v(" "),a("v-card-media",{attrs:{src:"static/assets/art.png",height:"250px"}})],1)],1)],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-container",{attrs:{"grid-list-md":"",fluid:""}},[a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-card",{staticClass:"elevation-3 transparent",attrs:{height:"260px"}},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v("work")])],1),t._v(" "),a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline"},[t._v("How to work with us")])]),t._v(" "),a("v-card-text",[t._v("\n                      Call or message us at 0212 247 123. We will get back to you immediately \n                      "),a("br"),t._v("\n                      Simple contract signing and easy to work with our exceptional transferring teachers free policy. We invoice you once a month\n                      \n                  ")])],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-card",{staticClass:"elevation-3 transparent",attrs:{height:"260px"}},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v("extension")])],1),t._v(" "),a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline text-xs-center"},[t._v("How to work with our relief teachers")])]),t._v(" "),a("v-card-text",[t._v("\n                      Please let them know your centres' policy on their first shift \n                      "),a("br"),t._v("\n                      Please sign out their signing timesheet for their shift \n                  ")])],1)],1)],1)],1)],1)],1)],1),t._v(" "),a("section",{attrs:{id:"vacancies"}},[a("v-parallax",{attrs:{src:"./static/assets/vacancies.jpg",height:"720"}},[a("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[a("div",{staticClass:"text-xs-center"},[a("h1",{staticClass:"blue-text shadow-close-heavy mb-5 display-headline text-xs-center "},[a("span",{staticClass:"orange-text"},[t._v("W")]),t._v("e are \n              "),a("span",{staticClass:"orange-text hiring"},[t._v("Hiring")])]),t._v(" "),a("p",{staticClass:"scroll-down"},[a("a",{staticClass:"animate",attrs:{href:"#"},on:{click:function(e){t.$vuetify.goTo("#contact",t.options)}}},[t._v("More")])])])])],1)],1),t._v(" "),a("section",[a("v-layout",{staticClass:"my-5",attrs:{column:"",wrap:"","align-center":""}},[a("v-flex",{staticClass:"my-3",attrs:{xs12:"",sm4:""}},[a("div",{staticClass:"text-xs-center"},[a("h2",{staticClass:"headline"},[t._v("Requirements for teachers")]),t._v(" "),a("em",{staticClass:"headline"},[t._v("We are recruiting both qualified and unqualified teachers")])])]),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-card",{staticClass:"elevation-3 transparent"},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v("how_to_reg")])],1),t._v(" "),a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline"},[t._v("Unqualified Teachers")])]),t._v(" "),a("v-card-text",[t._v("\n                      Love children and have abilities to play with children all day\n                  ")]),t._v(" "),a("v-card-text",[t._v("\n                      We will train you to become a quality relief teachers for children with songs, games and necessary skills \n                  ")])],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-card",{staticClass:"elevation-3 transparent",attrs:{height:"275"}},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-icon",{staticClass:"blue--text text--lighten-2",attrs:{"x-large":""}},[t._v("card_membership")])],1),t._v(" "),a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline text-xs-center"},[t._v("Qualified Teachers")])]),t._v(" "),a("v-card-text",[t._v("\n                      Love children and have abilities to play with children all day \n                  ")]),t._v(" "),a("v-card-text",[t._v("\n                      Holding relevant qualifications and teacher registration numbers  \n                  ")])],1)],1)],1)],1)],1)],1)],1),t._v(" "),a("section",{attrs:{id:"contact"}},[a("v-container",{attrs:{"grid-list-xl":""}},[a("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",md12:""}},[a("v-card",{staticClass:"elevation-3 transparent"},[a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline"},[t._v("Contact us")])]),t._v(" "),a("v-list",{staticClass:"transparent"},[a("v-list-tile",[a("v-list-tile-action",[a("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v("map")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[a("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"https://www.google.com/maps/place/872+Mount+Eden+Rd,+Three+Kings,+Auckland+1024/"}},[t._v(" 872B Mt Eden Road – Three kings")])])],1)],1),t._v(" "),a("v-list-tile",[a("v-list-tile-action",[a("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v("place")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v("Auckland 1024, New Zealand")])],1)],1),t._v(" "),a("v-list-tile",[a("v-list-tile-action",[a("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v("phone")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v("0212-247-123")])],1)],1),t._v(" "),a("v-list-tile",[a("v-list-tile-action",[a("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v("email")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[a("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"mailto:aucklandreliever@gmail.com"}},[t._v("aucklandreliever@gmail.com")])])],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),a("v-footer",{staticClass:"blue darken-2"},[a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("v-flex",{attrs:{xs12:""}})],1)],1)],1)],1)},staticRenderFns:[]};var d=a("VU/8")({data:function(){return{title:"Your Logo",duration:1e3,offset:-50,easing:"easeInOutCubic",show:!1,drawer:null,items:[{title:"Home",icon:"dashboard"},{title:"About",icon:"question_answer"}]}},computed:{options:function(){return{duration:this.duration,offset:this.offset,easing:this.easing}}}},o,!1,function(t){a("DGOK")},"data-v-50551805",null).exports;s.default.use(l.a),s.default.use(v.a);var x=new l.a({routes:[{path:"/",name:"Home",component:d}]});s.default.config.productionTip=!1,new s.default({el:"#app",router:x,components:{App:n},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.c624d6ab891bda347fe3.js.map