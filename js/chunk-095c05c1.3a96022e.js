(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-095c05c1"],{"0b40":function(e,t,a){},"0ff3":function(e,t,a){},"2c01":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n={class:"row"},s={class:"col-md-12"};function o(e,t,a,o,b,r){const l=Object(c["R"])("CandidateAppliesTable"),d=Object(c["R"])("Layout");return Object(c["I"])(),Object(c["k"])(d,null,{default:Object(c["eb"])(()=>[Object(c["n"])("div",n,[Object(c["n"])("div",s,[Object(c["q"])(l,{columns:b.columns,data:r.getApplies},null,8,["columns","data"])])])]),_:1})}var b=a("32e9");const r={key:0},l={key:0},d={key:1},i={key:2},u=Object(c["p"])("Sent"),j=Object(c["p"])("Received"),O=Object(c["p"])("Accepted"),v=Object(c["p"])("Rejected"),p=["href"];function f(e,t,a,n,s,o){const b=Object(c["R"])("a-select-option"),f=Object(c["R"])("a-select"),m=Object(c["R"])("solution-outlined"),y=Object(c["R"])("a-button"),g=Object(c["R"])("a-table");return Object(c["I"])(),Object(c["k"])(g,{columns:a.columns,"data-source":a.data},{headerCell:Object(c["eb"])(({column:e})=>["firstName"===e.key?(Object(c["I"])(),Object(c["m"])("span",r," First Name ")):Object(c["l"])("",!0)]),bodyCell:Object(c["eb"])(({column:e,record:t})=>["firstName"===e.key?(Object(c["I"])(),Object(c["m"])("p",l,Object(c["U"])(t.firstName),1)):"contactNumber"===e.key?(Object(c["I"])(),Object(c["m"])("p",d,Object(c["U"])(t.contactNumber),1)):"address"===e.key?(Object(c["I"])(),Object(c["m"])("p",i,Object(c["U"])(t.address),1)):"status"===e.key?(Object(c["I"])(),Object(c["k"])(f,{key:3,ref:"select",value:t.status,"onUpdate:value":e=>t.status=e,style:{width:"100%"},onChange:o.handleChange},{default:Object(c["eb"])(()=>[Object(c["q"])(b,{value:"sent"},{default:Object(c["eb"])(()=>[u]),_:1}),Object(c["q"])(b,{value:"received"},{default:Object(c["eb"])(()=>[j]),_:1}),Object(c["q"])(b,{value:"accepted"},{default:Object(c["eb"])(()=>[O]),_:1}),Object(c["q"])(b,{value:"rejected"},{default:Object(c["eb"])(()=>[v]),_:1})]),_:2},1032,["value","onUpdate:value","onChange"])):"cv"===e.key?(Object(c["I"])(),Object(c["m"])("a",{key:4,href:t.candidateCV,target:"_blank"},[Object(c["q"])(y,{type:"primary",shape:"circle",class:"mx-1"},{icon:Object(c["eb"])(()=>[Object(c["q"])(m)]),_:1})],8,p)):Object(c["l"])("",!0)]),_:1},8,["columns","data-source"])}var m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M688 264c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48zm-8 136H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM480 544H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-48 308H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm356.8-74.4c29-26.3 47.2-64.3 47.2-106.6 0-79.5-64.5-144-144-144s-144 64.5-144 144c0 42.3 18.2 80.3 47.2 106.6-57 32.5-96.2 92.7-99.2 162.1-.2 4.5 3.5 8.3 8 8.3h48.1c4.2 0 7.7-3.3 8-7.6C564 871.2 621.7 816 692 816s128 55.2 131.9 124.4c.2 4.2 3.7 7.6 8 7.6H880c4.6 0 8.2-3.8 8-8.3-2.9-69.5-42.2-129.6-99.2-162.1zM692 591c44.2 0 80 35.8 80 80s-35.8 80-80 80-80-35.8-80-80 35.8-80 80-80z"}}]},name:"solution",theme:"outlined"},y=m,g=a("b3f0");function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},c=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(c=c.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),c.forEach((function(t){k(e,t,a[t])}))}return e}function k(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var I=function(e,t){var a=h({},e,t.attrs);return Object(c["q"])(g["a"],h({},a,{icon:y}),null)};I.displayName="SolutionOutlined",I.inheritAttrs=!1;var _=I,q={name:"CandidateAppliesTable",props:["columns","data"],components:{SolutionOutlined:_},methods:{handleChange(e){let t={jobId:this.data[0].jobId,candidateEmail:this.data[0].candidateEmail,status:e};this.$store.dispatch("updateStatusApply",t)}}},w=(a("5e5b"),a("6b0d")),N=a.n(w);const x=N()(q,[["render",f]]);var C=x;const R=[{name:"First Name",dataIndex:"firstName",key:"firstName"},{title:"Contact Number",dataIndex:"contactNumber",key:"contactNumber"},{title:"Address",dataIndex:"address",key:"address"},{title:"Status",key:"status",dataIndex:"status"},{title:"CV",key:"cv",dataIndex:"cv"}];var A={name:"CandidateApplies",components:{Layout:b["a"],CandidateAppliesTable:C},data(){return{applies:[],columns:R}},computed:{getApplies(){return this.applies}},created(){this.$store.dispatch("getCandidateApplies",this.$route.params.id).then(e=>{this.applies=e})}};const P=N()(A,[["render",o]]);t["default"]=P},"32e9":function(e,t,a){"use strict";var c=a("7a23");const n={class:"container",style:{"flex-grow":"1"}};function s(e,t,a,s,o,b){const r=Object(c["R"])("NavbarPage"),l=Object(c["R"])("FooterPage");return Object(c["I"])(),Object(c["m"])(c["b"],null,[Object(c["q"])(r),Object(c["n"])("div",n,[Object(c["Q"])(e.$slots,"default",{},void 0,!0)]),Object(c["q"])(l)],64)}const o={class:"container-fluid"},b=Object(c["o"])('<div class="row" data-v-71410280><div class="col-md-12" data-v-71410280><footer data-v-71410280><div class="row justify-content-around mb-0 pt-5 mx-4" data-v-71410280><div class="col-md-12 d-flex justify-content-between" data-v-71410280><ul class="list-unstyled mt-md-3 mt-5" data-v-71410280><li data-v-71410280>Job Portal</li><li class="social" data-v-71410280><span data-v-71410280><i class="fa fa-facebook" aria-hidden="true" data-v-71410280></i></span> <span data-v-71410280><i class="fa fa-instagram" aria-hidden="true" data-v-71410280></i></span> <span data-v-71410280><i class="fa fa-twitter" aria-hidden="true" data-v-71410280></i></span></li></ul><ul class="list-unstyled my-xl-4 my-md-3" data-v-71410280><li data-v-71410280>Copyright</li><li data-v-71410280>Ⓒ Job Portal 2022</li></ul></div></div><div class="row justify-content-center px-3 py-3 pt-5" data-v-71410280><div class="col text-center" data-v-71410280><p class="mb-0" data-v-71410280>“I never dreamed about success. I worked for it.” — Estee Lauder</p></div></div></footer></div></div>',1),r=[b];function l(e,t,a,n,s,b){return Object(c["I"])(),Object(c["m"])("div",o,r)}var d={name:"FooterPage"},i=(a("71a5"),a("6b0d")),u=a.n(i);const j=u()(d,[["render",l],["__scopeId","data-v-71410280"]]);var O=j;const v={class:"container-fluid"},p={class:"row bg-light"},f={class:"col-md-12"},m={class:"navbar navbar-expand-lg navbar-light bg-light navbar__custom"},y=Object(c["p"])("Home"),g=Object(c["n"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["n"])("span",{class:"navbar-toggler-icon"})],-1),h={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},k={class:"navbar-nav",style:{"margin-left":"auto"}},I={style:{margin:"0px 25px"}},_=Object(c["p"])(" Profile "),q={key:0},w=Object(c["p"])(" Manage Jobs "),N={key:1},x=Object(c["p"])(" Job Offers "),C=Object(c["p"])(" Jobs Applied "),R={key:0,class:"d-flex"},A=Object(c["p"])("Register"),P=Object(c["p"])("Sign In");function S(e,t,a,n,s,o){const b=Object(c["R"])("router-link"),r=Object(c["R"])("DownOutlined"),l=Object(c["R"])("a-menu-item"),d=Object(c["R"])("a-menu-divider"),i=Object(c["R"])("a-menu"),u=Object(c["R"])("a-dropdown");return Object(c["I"])(),Object(c["m"])("div",v,[Object(c["n"])("div",p,[Object(c["n"])("div",f,[Object(c["n"])("nav",m,[Object(c["q"])(b,{class:"navbar-brand",to:"/"},{default:Object(c["eb"])(()=>[y]),_:1}),g,Object(c["n"])("div",h,[Object(c["n"])("div",k,[Object(c["n"])("div",I,[e.userInfo?(Object(c["I"])(),Object(c["k"])(u,{key:0},{overlay:Object(c["eb"])(()=>[Object(c["q"])(i,null,{default:Object(c["eb"])(()=>[Object(c["q"])(l,{key:"0"},{default:Object(c["eb"])(()=>[Object(c["q"])(b,{rel:"noopener noreferrer",to:"/profile"},{default:Object(c["eb"])(()=>[_]),_:1})]),_:1}),"employer"==e.userInfo.type?(Object(c["I"])(),Object(c["m"])("div",q,[Object(c["q"])(l,{key:"1"},{default:Object(c["eb"])(()=>[Object(c["q"])(b,{rel:"noopener noreferrer",to:"/manage-jobs"},{default:Object(c["eb"])(()=>[w]),_:1})]),_:1})])):(Object(c["I"])(),Object(c["m"])("div",N,[Object(c["q"])(l,{key:"1"},{default:Object(c["eb"])(()=>[Object(c["q"])(b,{rel:"noopener noreferrer",to:"/jobs"},{default:Object(c["eb"])(()=>[x]),_:1})]),_:1}),Object(c["q"])(l,{key:"1"},{default:Object(c["eb"])(()=>[Object(c["q"])(b,{rel:"noopener noreferrer",to:"/jobs-applied"},{default:Object(c["eb"])(()=>[C]),_:1})]),_:1})])),Object(c["q"])(d),Object(c["q"])(l,{key:"3"},{default:Object(c["eb"])(()=>[Object(c["n"])("a",{onClick:t[1]||(t[1]=(...e)=>o.logout&&o.logout(...e))},"Logout")]),_:1})]),_:1})]),default:Object(c["eb"])(()=>{var a;return[Object(c["n"])("a",{class:"ant-dropdown-link",onClick:t[0]||(t[0]=Object(c["gb"])(()=>{},["prevent"]))},[Object(c["p"])(Object(c["U"])(null===(a=e.userInfo)||void 0===a?void 0:a.surname)+" ",1),Object(c["q"])(r)])]}),_:1})):Object(c["l"])("",!0)]),e.userInfo?Object(c["l"])("",!0):(Object(c["I"])(),Object(c["m"])("div",R,[Object(c["q"])(b,{class:"nav-item nav-link",to:"/register"},{default:Object(c["eb"])(()=>[A]),_:1}),Object(c["q"])(b,{class:"nav-item nav-link",to:"/login"},{default:Object(c["eb"])(()=>[P]),_:1})]))])])])])])])}var H=a("5502"),J=a("35c8"),M=(a("f9f2"),{name:"Navbar",components:{DownOutlined:J["a"]},methods:{logout(){this.$store.dispatch("logout").then(()=>{this.$router.push("/")})}},computed:{...Object(H["b"])({user:"get_user",userInfo:"get_user_info"})},mounted(){}});a("d778");const z=u()(M,[["render",S]]);var U=z,$={name:"Layout",components:{FooterPage:O,NavbarPage:U}};a("f84a");const F=u()($,[["render",s],["__scopeId","data-v-47063d2e"]]);t["a"]=F},3871:function(e,t,a){},"5e5b":function(e,t,a){"use strict";a("8c8f")},"71a5":function(e,t,a){"use strict";a("3871")},"8c8f":function(e,t,a){},d778:function(e,t,a){"use strict";a("0b40")},f84a:function(e,t,a){"use strict";a("0ff3")}}]);
//# sourceMappingURL=chunk-095c05c1.3a96022e.js.map