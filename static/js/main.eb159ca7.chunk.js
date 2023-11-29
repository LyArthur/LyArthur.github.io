(this["webpackJsonpreact-frontend-dev-portfolio"]=this["webpackJsonpreact-frontend-dev-portfolio"]||[]).push([[0],{39:function(e,a,t){},40:function(e,a,t){},43:function(e,a,t){e.exports=t(60)},48:function(e,a,t){},49:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(12),l=t.n(r),c=(t(48),t(5)),s=t(6),o=t(8),m=t(9),d=t(32),u=t.n(d),p=(t(49),t(25)),f=t(34),h=t(36),g=t.n(h),E=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).titles=[],e.state={checked:"dark"===localStorage.theme},e.onThemeSwitchChange=e.onThemeSwitchChange.bind(Object(p.a)(e)),e}return Object(s.a)(t,[{key:"onThemeSwitchChange",value:function(e){this.setState({checked:e}),localStorage.theme="dark"===localStorage.theme?"light":"dark",this.setTheme()}},{key:"setTheme",value:function(){var e=document.body,a="dark"===e.getAttribute("data-theme")?"light":"dark";e.setAttribute("data-theme",a)}},{key:"render",value:function(){var e=this;if(this.props.sharedData)var a=this.props.sharedData.name;this.props.resumeBasicInfo&&(this.titles=this.props.resumeBasicInfo.titles.map((function(e){return[e.toUpperCase(),1500]})).flat());var t=i.a.memo((function(){return i.a.createElement(f.a,{className:"title-styles",steps:e.titles,loop:50})}),(function(e,a){return!0}));return i.a.createElement("header",{id:"home",style:{height:window.innerHeight-140,display:"block"}},i.a.createElement("div",{className:"row aligner",style:{height:"100%"}},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",null,i.a.createElement("span",{className:"iconify header-icon","data-icon":"la:laptop-code","data-inline":"false"}),i.a.createElement("br",null),i.a.createElement("h1",{className:"mb-0"},i.a.createElement(f.a,{steps:[a],wrapper:"p"})),i.a.createElement("div",{className:"title-container"},i.a.createElement(t,null)),i.a.createElement(g.a,{checked:this.state.checked,onChange:this.onThemeSwitchChange,offColor:"#baaa80",onColor:"#353535",className:"react-switch mx-auto",width:90,height:40,uncheckedIcon:i.a.createElement("span",{className:"iconify","data-icon":"noto-v1:sun-with-face","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"15px",color:"#353239"}}),checkedIcon:i.a.createElement("span",{className:"iconify","data-icon":"twemoji:owl","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"15px",color:"#353239"}}),id:"icon-switch"})))))}}]),t}(n.Component),y=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("footer",null,i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"copyright py-4 text-center"},i.a.createElement("div",{className:"container"},"Copyright \xa9"," | ",this.props.sharedBasicInfo?this.props.sharedBasicInfo.name:"???"))))}}]),t}(n.Component),v=t(4),b=t(18),w=t(1),N={position:"relative",display:"flex",minHeight:"60vh",width:"calc(100vw - 50px)",touchAction:"none"};function x(e){var a=Object(b.d)({id:e.id}).setNodeRef;return i.a.createElement("div",{ref:a,style:Object(w.a)({},N)},e.children)}var j=i.a.createElement("p",null,"Cliquez ",i.a.createElement("a",{href:"/Cv_Arthur_LY.pdf",target:"_blank"},"ici")," pour voir mon CV !"),k=i.a.createElement("p",null,"Click ",i.a.createElement("a",{href:"/Cv_Arthur_LY.pdf",target:"_blank"},"here")," to see my CV !");function S(e){var a=e.id,t=e.styles,n=e.title,r=e.content,l=e.language,c=Object(b.c)({id:a}),s=c.attributes,o=c.listeners,m=c.setNodeRef,d=c.transform,u=d?{transform:"translate3d(".concat(d.x,"px, ").concat(d.y,"px, 0)")}:{},p={height:"31px",touchAction:"none"};return window.innerWidth<1169?i.a.createElement("div",Object.assign({ref:m,style:Object(w.a)(Object(w.a)(Object(w.a)({},u),p),t),id:"card-"+a},o,s),i.a.createElement("div",{className:"card",onClick:function(){localStorage["z-index"]=parseInt(localStorage["z-index"])+1,document.querySelector("#card-"+a).style.zIndex=localStorage["z-index"]},style:{touchAction:"none"}},i.a.createElement("div",{className:"card-header",style:{touchAction:"none"}},i.a.createElement("span",{className:"iconify red","data-icon":"emojione:red-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify green","data-icon":"twemoji:green-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"})),i.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"132%",lineHeight:"200%",touchAction:"none"}},i.a.createElement("br",null),i.a.createElement("span",{className:"wave"},n),i.a.createElement("br",null),i.a.createElement("span",null,i.a.createElement("p",null,r),2===a?"fr"===l?j:k:null),i.a.createElement("br",null)))):i.a.createElement("div",{ref:m,style:Object(w.a)(Object(w.a)(Object(w.a)({},u),p),t),id:"card-"+a},i.a.createElement("div",{className:"card",onClick:function(){localStorage["z-index"]=parseInt(localStorage["z-index"])+1,document.querySelector("#card-"+a).style.zIndex=localStorage["z-index"]}},i.a.createElement("div",Object.assign({className:"card-header"},o,s,{style:{touchAction:"none"}}),i.a.createElement("span",{className:"iconify red","data-icon":"emojione:red-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify green","data-icon":"twemoji:green-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"})),i.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"132%",lineHeight:"200%"}},i.a.createElement("br",null),i.a.createElement("span",{className:"wave"},n),i.a.createElement("br",null),i.a.createElement("span",null,i.a.createElement("p",null,r),2===a?"fr"===l?j:k:null),i.a.createElement("br",null))))}var I=t(37);function O(){Array.from(document.getElementsByClassName("card")).forEach((function(e){var a=window.getComputedStyle(e.parentElement),t=parseInt(a.getPropertyValue("left")),n=parseInt(a.getPropertyValue("width")),i=parseInt(a.getPropertyValue("top"));t+n+50-window.innerWidth>0&&(e.parentElement.style.left=t-n-(t+25-window.innerWidth)+"px",localStorage[e.parentElement.id+"-x"]=t-n-(t+25-window.innerWidth)),i<0&&(e.parentElement.style.top="0px",localStorage[e.parentElement.id+"-y"]=0)}))}var C=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t)}(b.b);function _(e,a){return Math.floor(Math.random()*(a-e+1)+e)}function A(e){var a=e.datas,t=Object(b.f)(Object(b.e)(C)),r=Object(n.useState)(a),l=Object(v.a)(r,2),c=l[0],s=l[1];if(Object(n.useEffect)((function(){a&&s(a),O()}),[a]),a){return i.a.createElement(b.a,{onDragEnd:function(e){var a=c.find((function(a){return a.id===e.active.id}));localStorage["card-"+a.id+"-x"]=parseInt(localStorage["card-"+a.id+"-x"])+e.delta.x,localStorage["card-"+a.id+"-y"]=parseInt(localStorage["card-"+a.id+"-y"])+e.delta.y;var t=c.map((function(e){return e.id===a.id?a:e}));s(t)},modifiers:[I.a],onDragStart:function(e){var a=c.find((function(a){return a.id===e.active.id}));localStorage["z-index"]=parseInt(localStorage["z-index"])+1,document.querySelector("#card-"+a.id).style.zIndex=localStorage["z-index"]},autoScroll:!1,sensors:t},i.a.createElement(x,{id:"dropable"},i.a.createElement("i",{className:"fa-solid fa-arrow-rotate-right",style:{position:"absolute",right:"5vw",fontSize:"3rem",rotate:"-90deg",zIndex:"10000",cursor:"pointer"},onClick:function(){Array.from(document.getElementsByClassName("card")).forEach((function(e){e.style.display="block";var a=_(25,window.innerWidth-parseInt(window.getComputedStyle(e).getPropertyValue("width"))-25),t=_(0,.4*window.innerHeight);console.log(a,t),e.parentElement.style.left=a+"px",localStorage[e.parentElement.id+"-x"]=a,e.parentElement.style.top=t+"px",localStorage[e.parentElement.id+"-y"]=t}))}}),a.map((function(e){return void 0===localStorage["card-"+e.id+"-x"]&&(localStorage["card-"+e.id+"-x"]=_(25,window.innerWidth-25)),void 0===localStorage["card-"+e.id+"-y"]&&(localStorage["card-"+e.id+"-y"]=_(0,.4*window.innerHeight)),i.a.createElement(S,{styles:{position:"absolute",left:"".concat(localStorage["card-"+e.id+"-x"],"px"),top:"".concat(localStorage["card-"+e.id+"-y"],"px")},key:e.id,id:e.id,title:e.description_header,content:e.description,language:e.language})}))))}return null}C.activators=[{eventName:"onPointerDown",handler:function(e){var a=e.nativeEvent;return!function(e){if(["circle"].includes(e.tagName.toLowerCase()))return!0;return!1}(a.target)||(a.target.parentElement.classList.contains("red")&&(a.target.closest(".card").style.display="none"),!1)}}];var L=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.sharedBasicInfo)var e=this.props.sharedBasicInfo;if(this.props.resumeBasicInfo)var a=this.props.resumeBasicInfo.section_name.about;return i.a.createElement("section",{id:"about"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{style:{color:"black"}},i.a.createElement("span",null,a)),i.a.createElement("div",{className:"row center mx-auto mb-5"},i.a.createElement("div",{className:"col-md-8 center tab"},i.a.createElement("div",{className:"col-md-10"},i.a.createElement(A,{datas:e}))),i.a.createElement("div",{className:"col-md-10"}))))}}]),t}(n.Component),z=t(31),B=(t(56),t(33)),D=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.resumeExperience&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.experience,a=this.props.resumeExperience.map((function(e,a){var t=e.technologies;if(e.mainTech)var n=e.mainTech.map((function(e,a){return i.a.createElement(B.a,{pill:!0,className:"main-badge mr-2 mb-2",key:a},e)}));if(t)var r=t.map((function(e,a){return i.a.createElement(B.a,{pill:!0,className:"experience-badge mr-2 mb-2",key:a},e)}));return i.a.createElement(z.VerticalTimelineElement,{position:"fa fa-briefcase"===e.icon?"right":"left",className:"vertical-timeline-element--work",date:e.years,iconStyle:{background:"fa fa-briefcase"===e.icon?"#0a6ab6":"#b51249",color:"#fff",textAlign:"center"},icon:i.a.createElement("i",{className:"fab ".concat(e.icon," experience-icon")}),key:a},i.a.createElement("div",{style:{textAlign:"left",marginBottom:"4px"}},n),i.a.createElement("h3",{className:"vertical-timeline-element-title",style:{textAlign:"left"}},e.title),i.a.createElement("h4",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left"}},e.company),i.a.createElement("h5",{style:{marginTop:"15px"}},e.description),i.a.createElement("div",{style:{textAlign:"left",marginTop:"15px",overflow:"hidden"}},r))}));return i.a.createElement("section",{id:"resume",className:"pb-5"},i.a.createElement("div",{className:"col-md-12 mx-auto"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{className:"section-title",style:{color:"black"}},i.a.createElement("span",{className:"text-black",style:{textAlign:"center"}},e)))),i.a.createElement("div",{className:"col-md-8 mx-auto"},i.a.createElement(z.VerticalTimeline,null,a,i.a.createElement(z.VerticalTimelineElement,{iconStyle:{background:"#324191",color:"#fff",textAlign:"center"},icon:i.a.createElement("i",{className:"fa fa-user mx-auto experience-icon"})}))))}}]),t}(n.Component),$=t(63),T=t(38),P=t.n(T),W=t(39),M=t.n(W),V=t(40),H=t.n(V),R=(t(57),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.technologies,a=this.props.data.images,t=this.props.data.title,n=this.props.data.description,r=this.props.data.url;if(this.props.data.technologies){var l=e.map((function(e,a){return i.a.createElement("li",{className:"list-inline-item mx-3",key:a},i.a.createElement("span",null,i.a.createElement("div",{className:"text-center"},i.a.createElement("i",{className:e.class,style:{fontSize:"300%"}},i.a.createElement("p",{className:"text-center",style:{fontSize:"30%"}},e.name)))))}));if(this.props.data.images)var c=a.map((function(e,a){return i.a.createElement("div",{key:a,"data-src":e})}))}}return i.a.createElement($.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"modal-inside"}),i.a.createElement("span",{onClick:this.props.onHide,className:"modal-close"},i.a.createElement("i",{className:"fas fa-times fa-3x close-icon"})),i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"col-md-10 mx-auto",style:{paddingBottom:"50px"}},i.a.createElement("div",{className:"slider-tab"},i.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"emojione:red-circle","data-inline":"false",style:{marginLeft:"5px"}})," ","\xa0"," ",i.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:green-circle","data-inline":"false"})),i.a.createElement(P.a,{cssModule:[M.a,H.a],animation:"scaleOutAnimation",className:"slider-image"},c)),i.a.createElement("div",{className:"col-md-10 mx-auto"},i.a.createElement("h3",{style:{padding:"5px 5px 0 5px"}},t,r?i.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"link-href"},i.a.createElement("i",{className:"fas fa-external-link-alt",style:{marginLeft:"10px"}})):null),i.a.createElement("p",{className:"modal-description"},n),i.a.createElement("div",{className:"col-md-12 text-center"},i.a.createElement("ul",{className:"list-inline mx-auto"},l)))))}}]),t}(n.Component)),q=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={deps:{},detailsModalShow:!1},n}return Object(s.a)(t,[{key:"render",value:function(){var e=this;if(this.props.resumeProjects&&this.props.resumeBasicInfo)var a=this.props.resumeBasicInfo.section_name.projects,t=this.props.resumeProjects.map((function(a){return i.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4",key:a.title,style:{cursor:"pointer"}},i.a.createElement("span",{className:"portfolio-item d-block"},i.a.createElement("div",{className:"foto",onClick:function(){return t=a,void e.setState({detailsModalShow:!0,deps:t});var t}},i.a.createElement("div",null,i.a.createElement("img",{src:a.images[0],alt:"projectImages",height:"230",style:{marginBottom:0,paddingBottom:0,position:"relative"}}),i.a.createElement("span",{className:"project-date"},a.startDate),i.a.createElement("br",null),i.a.createElement("p",{className:"project-title-settings mt-3"},a.title)))))}));return i.a.createElement("section",{id:"portfolio"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{className:"section-title",style:{color:"black"}},i.a.createElement("span",null,a)),i.a.createElement("div",{className:"col-md-12 mx-auto"},i.a.createElement("div",{className:"row mx-auto"},t)),i.a.createElement(R,{show:this.state.detailsModalShow,onHide:function(){return e.setState({detailsModalShow:!1})},data:this.state.deps})))}}]),t}(n.Component),Z=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.sharedSkills&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.skills,a=this.props.sharedSkills.icons.map((function(e,a){return i.a.createElement("li",{className:"list-inline-item mx-3",key:a},i.a.createElement("span",null,i.a.createElement("div",{className:"text-center skills-tile"},i.a.createElement("i",{className:e.class,style:{fontSize:"220%"}},i.a.createElement("p",{className:"text-center",style:{fontSize:"30%",marginTop:"4px"}},e.name)))))}));return i.a.createElement("section",{id:"skills"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{className:"section-title"},i.a.createElement("span",{className:"text-white"},e))),i.a.createElement("div",{className:"col-md-12 text-center"},i.a.createElement("ul",{className:"list-inline mx-auto skill-icon"},a))))}}]),t}(n.Component),F=t(42),U=function(){var e=Object(n.useRef)();return i.a.createElement("div",{className:"contact-container"},i.a.createElement("form",{ref:e,onSubmit:function(a){a.preventDefault();e.current.submit.disabled=!0,e.current.submit.style.cursor="not-allowed",/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e.current.email.value)?F.a.sendForm("service_ihkfivr","template_4bj6r8k",e.current,"lsN6WThGlV0hYHzTI").then((function(a){e.current.name.value="",e.current.email.value="",e.current.message.value="",alert("Le message a bien \xe9t\xe9 envoy\xe9 !"),e.current.submit.disabled=!1,e.current.submit.style.cursor="pointer"}),(function(a){alert("il y a eu un probl\xe8me"),e.current.submit.disabled=!1,e.current.submit.style.cursor="pointer"})):(alert("il y a eu un probl\xe8me"),e.current.submit.disabled=!1,e.current.submit.style.cursor="pointer")},className:"contact-form"},i.a.createElement("div",{className:"input_container name"},i.a.createElement("label",{className:"input_label",htmlFor:"name_field"},"fr"===localStorage.language?"Nom":"Name"),i.a.createElement("input",{placeholder:"Nom",title:"Inpit title",name:"name",type:"text",className:"input_field",id:"name_field",required:!0})),i.a.createElement("div",{className:"input_container email"},i.a.createElement("label",{className:"input_label",htmlFor:"email_field"},"Email"),i.a.createElement("input",{placeholder:"nom@mail.com",title:"Inpit title",name:"email",type:"text",className:"input_field",id:"email_field",required:!0})),i.a.createElement("div",{className:"input_container message"},i.a.createElement("label",{className:"input_label",htmlFor:"message_field"},"Message"),i.a.createElement("textarea",{placeholder:"Message..",title:"Inpit title",name:"message",className:"input_field",id:"message_field",required:!0})),i.a.createElement("input",{className:"submit",name:"submit",type:"submit",value:"Submit"})))},Y=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={name:"",mail:"",object:"",message:""},n}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.resumeContact&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.contact,a=this.props.resumeContact.icons.map((function(e,a){return i.a.createElement("li",{className:"list-inline-item mx-3",key:a},i.a.createElement("span",null,i.a.createElement("a",{className:"social-tile",href:e.url},i.a.createElement("div",{className:"text-center contact-tile"},i.a.createElement("i",{className:e.class,style:{fontSize:"300%"}})))))}));return i.a.createElement("section",{id:"contact"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{className:"section-title"},i.a.createElement("span",{className:"text-white"},e))),i.a.createElement("div",{className:"col-md-12"},i.a.createElement(U,null)),i.a.createElement("div",{className:"col-md-12"},i.a.createElement("ul",{className:"list-inline mx-auto skill-icon"},a))))}}]),t}(n.Component),J=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this)).state={foo:"bar",resumeData:{},sharedData:{}},n}return Object(s.a)(t,[{key:"applyPickedLanguage",value:function(e,a){this.swapCurrentlyActiveLanguage(a),document.documentElement.lang=e;var t=document.documentElement.lang===window.$primaryLanguage?"res_primaryLanguage.json":"res_secondaryLanguage.json";this.loadResumeFromPath(t)}},{key:"swapCurrentlyActiveLanguage",value:function(e){var a=e===window.$primaryLanguageIconId?window.$secondaryLanguageIconId:window.$primaryLanguageIconId;document.getElementById(e).removeAttribute("filter","brightness(40%)"),document.getElementById(a).setAttribute("filter","brightness(40%)")}},{key:"componentDidMount",value:function(){this.loadSharedData(),"fr"===localStorage.language?this.applyPickedLanguage(window.$primaryLanguage,window.$primaryLanguageIconId):this.applyPickedLanguage(window.$secondaryLanguage,window.$secondaryLanguageIconId)}},{key:"loadResumeFromPath",value:function(e){u.a.ajax({url:e,dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){alert(t)}})}},{key:"loadSharedData",value:function(){u.a.ajax({url:"portfolio_shared_data.json",dataType:"json",cache:!1,success:function(e){this.setState({sharedData:e}),document.title="".concat(this.state.sharedData.basic_info.name)}.bind(this),error:function(e,a,t){alert(t)}})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(E,{sharedData:this.state.sharedData.basic_info,resumeBasicInfo:this.state.resumeData.basic_info}),i.a.createElement("div",{className:"col-md-12 mx-auto text-center language"},i.a.createElement("div",{onClick:function(){localStorage.language="fr",e.applyPickedLanguage(window.$primaryLanguage,window.$primaryLanguageIconId)},style:{display:"inline"}},i.a.createElement("span",{className:"iconify language-icon mr-5","data-icon":"twemoji-flag-for-flag-france","data-inline":"false",id:window.$primaryLanguageIconId})),i.a.createElement("div",{onClick:function(){localStorage.language="en",e.applyPickedLanguage(window.$secondaryLanguage,window.$secondaryLanguageIconId)},style:{display:"inline"}},i.a.createElement("span",{className:"iconify language-icon","data-icon":"twemoji-flag-for-flag-united-kingdom","data-inline":"false",id:window.$secondaryLanguageIconId}))),i.a.createElement(L,{resumeBasicInfo:this.state.resumeData.basic_info,sharedBasicInfo:this.state.resumeData.about}),i.a.createElement(q,{resumeProjects:this.state.resumeData.projects,resumeBasicInfo:this.state.resumeData.basic_info}),i.a.createElement(Z,{sharedSkills:this.state.sharedData.skills,resumeBasicInfo:this.state.resumeData.basic_info}),i.a.createElement(D,{resumeExperience:this.state.resumeData.experience,resumeBasicInfo:this.state.resumeData.basic_info}),i.a.createElement(Y,{resumeContact:this.state.sharedData.contact,resumeBasicInfo:this.state.resumeData.basic_info}),i.a.createElement(y,{sharedBasicInfo:this.state.sharedData.basic_info}))}}]),t}(n.Component),G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(59);if(window.$primaryLanguage="fr",window.$secondaryLanguage="en",window.$primaryLanguageIconId="primary-lang-icon",window.$secondaryLanguageIconId="secondary-lang-icon",localStorage.theme){if("dark"===localStorage.theme){localStorage.theme="dark";document.body.setAttribute("data-theme",localStorage.theme)}}else localStorage.theme="light";localStorage["z-index"]=1,void 0===localStorage.language&&(localStorage.language="fr"),window.addEventListener("resize",O),l.a.render(i.a.createElement(J,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");G?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):K(a,e)}))}}()}},[[43,1,2]]]);
//# sourceMappingURL=main.eb159ca7.chunk.js.map