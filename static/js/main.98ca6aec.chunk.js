(this.webpackJsonphomepage2=this.webpackJsonphomepage2||[]).push([[0],[,function(e,n,t){e.exports={menuButton:"MenuButton_menuButton__3zo8U",line1:"MenuButton_line1__3vWBL",line1_close:"MenuButton_line1_close__zs-n_",line1_open:"MenuButton_line1_open__6GuAQ",line2:"MenuButton_line2__ua058",line2_close:"MenuButton_line2_close__2uMca",line2_open:"MenuButton_line2_open__w1UvF",line3:"MenuButton_line3__FD_JQ",line3_close:"MenuButton_line3_close__1t6Q4",line3_open:"MenuButton_line3_open__Bj0bW",line_closeHover:"MenuButton_line_closeHover__3iNf1",line_openHover:"MenuButton_line_openHover__3nHPa"}},function(e,n,t){e.exports={heading:"Resume_heading__3WW3a",download:"Resume_download__eeO_e",resumeBlock:"Resume_resumeBlock__9ku-5",resumeBlock_invisible:"Resume_resumeBlock_invisible__3K99D",resumeBlock_visible:"Resume_resumeBlock_visible__X4Pqe",divider:"Resume_divider__oaaC-"}},function(e,n,t){e.exports={message:"Connect_message__2IQlu",icons:"Connect_icons__1nN0M",icon:"Connect_icon__DuF5F",iconEntrance:"Connect_iconEntrance__lFzkm",iconHoverOut:"Connect_iconHoverOut__1vwUW",iconHoverIn:"Connect_iconHoverIn__3nNeU"}},function(e,n,t){e.exports={menuItem:"MenuItem_menuItem__nP0id",menuItem_notVisible:"MenuItem_menuItem_notVisible__2QmDU",menuItem_visible:"MenuItem_menuItem_visible__2NY0G",underline:"MenuItem_underline__3fC0r",underline_show:"MenuItem_underline_show__1sARD",underline_hide:"MenuItem_underline_hide__1QENE",underline_animate:"MenuItem_underline_animate__3pWlr",underlineAnimate:"MenuItem_underlineAnimate__3YL8R"}},,,,,function(e,n,t){e.exports={overlay:"Menu_overlay__38Hq3",overlay_open:"Menu_overlay_open__1Exig",overlay_close:"Menu_overlay_close__3B6-k",sidebar:"Menu_sidebar__3FQxd",sidebar_open:"Menu_sidebar_open__3Ov5L",sidebar_close:"Menu_sidebar_close__2nIBT",footer:"Menu_footer__1V1h4",footerFadeIn:"Menu_footerFadeIn__3RTYq"}},function(e,n,t){e.exports={project:"Projects_project__1Wymc",project_invisible:"Projects_project_invisible__3slCg",project_visible:"Projects_project_visible__3I8BT",image_container:"Projects_image_container__2jca1",image:"Projects_image__OJLBA",image_invisible:"Projects_image_invisible__3NSe7",image_visible:"Projects_image_visible__2-y9h",name:"Projects_name__3EFVL"}},function(e,n,t){e.exports={message:"AboutMe_message__3ixyC",headshot:"AboutMe_headshot__1ltYE",headshotHide:"AboutMe_headshotHide__2DhUU",headshotShow:"AboutMe_headshotShow__3z-0P",link:"AboutMe_link__3H83l",fadeOut:"AboutMe_fadeOut__TGZ8_"}},function(e,n,t){e.exports={backgroundAnimations:"BackgroundAnimations_backgroundAnimations__3S0It",backgroundAnimationsEnter:"BackgroundAnimations_backgroundAnimationsEnter__aAfpL",backgroundAnimation1:"BackgroundAnimations_backgroundAnimation1__2S3MK",backgroundAnimation2:"BackgroundAnimations_backgroundAnimation2__W3qKn",backgroundAnimation3:"BackgroundAnimations_backgroundAnimation3__1hVbt",backgroundAnimation4:"BackgroundAnimations_backgroundAnimation4__13Mgi",backgroundAnimation5:"BackgroundAnimations_backgroundAnimation5__32BzQ",backgroundAnimation6:"BackgroundAnimations_backgroundAnimation6__uVmyJ",backgroundAnimation7:"BackgroundAnimations_backgroundAnimation7__3BaVM",backgroundAnimation8:"BackgroundAnimations_backgroundAnimation8__3gT0j"}},,,,function(e,n,t){e.exports={pageViewContainer:"MainContainer_pageViewContainer__25f_t",pageViewFadeIn:"MainContainer_pageViewFadeIn__2giTE",pageTitle:"MainContainer_pageTitle__2Q845",pageTitleFadeIn:"MainContainer_pageTitleFadeIn__2HpeP"}},,,,,function(e,n,t){e.exports=t.p+"static/media/wedding1crop2.5e6575f8.jpg"},function(e,n,t){e.exports=t.p+"static/media/ticTacGrow.f7f94ab4.jpg"},function(e,n,t){e.exports=t.p+"static/media/virtualBank.7b629565.jpg"},function(e,n,t){e.exports=t.p+"static/media/riskDiceRoller.50ed39c3.jpg"},function(e,n,t){e.exports=t.p+"static/media/scoreboard.d5ec9b7b.jpg"},function(e,n,t){e.exports=t.p+"static/media/youtubePlaylist.0ca8f805.png"},function(e,n,t){e.exports=t.p+"static/media/NeilSolomon_resume_Aug2020.03e57e03.pdf"},,,,,function(e,n,t){e.exports=t(41)},,,,,function(e,n,t){},function(e,n,t){},,,function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),o=t(20),l=t.n(o),s=(t(37),t(38),t(30)),r=t(5),c=t(6),m=t(8),u=t(7),d=t(16),_=t.n(d),p=t(9),g=t.n(p),v=t(4),h=t.n(v),b=function(e){Object(m.a)(t,e);var n=Object(u.a)(t);function t(){var e;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=n.call.apply(n,[this].concat(i))).componentDidMount=function(){e.menuItem=document.getElementById("menuItem"+e.props.name),e.menuItem.classList.add(h.a.menuItem),e.menuItem.classList.add(h.a.menuItem_notVisible),e.underline=document.getElementById("menuItem"+e.props.name+"Underline"),e.underline.classList.add(h.a.underline),e.underline.classList.add(h.a.underline_hide)},e.componentWillUnmount=function(){clearTimeout(e.enterTimeout),clearTimeout(e.exitTimeout1),clearTimeout(e.exitTimeout2)},e.componentDidUpdate=function(n,t){e.props.menuVisible&&!n.menuVisible?(e.menuItem.classList.remove(h.a.menuItem_visible),e.menuItem.classList.add(h.a.menuItem_notVisible),e.enterTimeout=setTimeout((function(){e.menuItem.classList.remove(h.a.menuItem_notVisible),e.menuItem.classList.add(h.a.menuItem_visible)}),150+150*e.props.index)):!e.props.menuVisible&&n.menuVisible&&(e.menuItem.classList.remove(h.a.menuItem_visible),e.menuItem.classList.add(h.a.menuItem_notVisible))},e.menuItemClick=function(){e.underline.classList.add(h.a.underline_animate),e.exitTimeout1=setTimeout((function(){e.props.changePageView(e.props.index)}),500),e.exitTimeout2=setTimeout((function(){e.underline.classList.remove(h.a.underline_animate),e.underline.classList.remove(h.a.underline_show),e.underline.classList.add(h.a.underline_hide)}),1e3)},e.menuItemHoverIn=function(){e.underline.classList.remove(h.a.underline_hide),e.underline.classList.add(h.a.underline_show)},e.menuItemHoverOut=function(){e.underline.classList.remove(h.a.underline_show),e.underline.classList.add(h.a.underline_hide)},e}return Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"menuItem"+this.props.name,onClick:this.menuItemClick,onMouseEnter:this.menuItemHoverIn,onMouseLeave:this.menuItemHoverOut},this.props.name,i.a.createElement("div",{id:"menuItem"+this.props.name+"Underline"}))}}]),t}(i.a.Component),f=function(e){Object(m.a)(t,e);var n=Object(u.a)(t);function t(){var e;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=n.call.apply(n,[this].concat(i))).componentDidMount=function(){e.overlay=document.getElementById("Menu_overlay"),e.overlay.classList.add(g.a.overlay),e.overlay.classList.add(g.a.overlay_close),e.sidebar=document.getElementById("Menu_sidebar"),e.sidebar.classList.add(g.a.sidebar),e.sidebar.classList.add(g.a.sidebar_close)},e.componentDidUpdate=function(n,t){e.props.visible?(e.overlay.classList.remove(g.a.overlay_close),e.overlay.classList.add(g.a.overlay_open),e.sidebar.classList.remove(g.a.sidebar_close),e.sidebar.classList.add(g.a.sidebar_open)):(e.overlay.classList.remove(g.a.overlay_open),e.overlay.classList.add(g.a.overlay_close),e.sidebar.classList.remove(g.a.sidebar_open),e.sidebar.classList.add(g.a.sidebar_close))},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"Menu_overlay",onClick:this.props.closeMenu}),i.a.createElement("div",{id:"Menu_sidebar"},i.a.createElement("div",{style:{height:100}}),this.props.pageViews.map((function(n,t){return i.a.createElement(b,{key:n.name+t,name:n.name,index:t,menuVisible:e.props.visible,changePageView:e.props.changePageView})})),i.a.createElement("div",{key:"sidebarFooter"+this.props.visible,className:g.a.footer},"\xa92020 Neil Solomon")))}}]),t}(i.a.Component),E=t(1),w=t.n(E),L=function(e){Object(m.a)(t,e);var n=Object(u.a)(t);function t(e){var a;return Object(r.a)(this,t),(a=n.call(this,e)).componentDidMount=function(){a.line1=document.getElementById("menuButton_line1"),a.line1.classList.add(w.a.line1),a.line1.classList.add(w.a.line1_close),a.line2=document.getElementById("menuButton_line2"),a.line2.classList.add(w.a.line2),a.line2.classList.add(w.a.line2_close),a.line3=document.getElementById("menuButton_line3"),a.line3.classList.add(w.a.line3),a.line3.classList.add(w.a.line3_close)},a.componentDidUpdate=function(){a.props.menuVisible?(a.line1.classList.remove(w.a.line1_close),a.line1.classList.add(w.a.line1_open),a.line2.classList.remove(w.a.line2_close),a.line2.classList.add(w.a.line2_open),a.line3.classList.remove(w.a.line3_close),a.line3.classList.add(w.a.line3_open)):(a.line1.classList.remove(w.a.line1_open),a.line1.classList.add(w.a.line1_close),a.line2.classList.remove(w.a.line2_open),a.line2.classList.add(w.a.line2_close),a.line3.classList.remove(w.a.line3_open),a.line3.classList.add(w.a.line3_close))},a.buttonHoverIn=function(){a.props.menuVisible?(a.line1.classList.remove(w.a.line_closeHover),a.line2.classList.remove(w.a.line_closeHover),a.line3.classList.remove(w.a.line_closeHover),a.line1.classList.add(w.a.line_openHover),a.line2.classList.add(w.a.line_openHover),a.line3.classList.add(w.a.line_openHover)):(a.line1.classList.remove(w.a.line_openHover),a.line2.classList.remove(w.a.line_openHover),a.line3.classList.remove(w.a.line_openHover),a.line1.classList.add(w.a.line_closeHover),a.line2.classList.add(w.a.line_closeHover),a.line3.classList.add(w.a.line_closeHover))},a.buttonHoverOut=function(){a.props.menuVisible?(a.line1.classList.remove(w.a.line_openHover),a.line2.classList.remove(w.a.line_openHover),a.line3.classList.remove(w.a.line_openHover)):(a.line1.classList.remove(w.a.line_closeHover),a.line2.classList.remove(w.a.line_closeHover),a.line3.classList.remove(w.a.line_closeHover))},a.buttonClick=function(){a.line1.classList.remove(w.a.line_openHover),a.line2.classList.remove(w.a.line_openHover),a.line3.classList.remove(w.a.line_openHover),a.line1.classList.remove(w.a.line_closeHover),a.line2.classList.remove(w.a.line_closeHover),a.line3.classList.remove(w.a.line_closeHover),a.props.toggleMenu()},a.state={},a}return Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:w.a.menuButton,onClick:this.buttonClick,onMouseEnter:this.buttonHoverIn,onMouseLeave:this.buttonHoverOut},i.a.createElement("div",{id:"menuButton_line1"}),i.a.createElement("div",{id:"menuButton_line2"}),i.a.createElement("div",{id:"menuButton_line3"}))}}]),t}(i.a.Component),k=t(11),I=t.n(k),y=t(21),B=t.n(y),j=function(e){Object(m.a)(t,e);var n=Object(u.a)(t);function t(){var e;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=n.call.apply(n,[this].concat(i))).componentDidMount=function(){e.headshot=document.getElementById("AboutMe_headshot"),e.headshot.classList.add(I.a.headshot),e.headshot.classList.add(I.a.headshotHide),e.container=document.getElementById("AboutMe_container")},e.componentWillUnmount=function(){clearTimeout(e.fadeOutTimeout),clearTimeout(e.resetContainerClassTimeout)},e.showHeadshot=function(){e.headshot.classList.remove(I.a.headshotHide),e.headshot.classList.add(I.a.headshotShow)},e.changePageView=function(n){e.container.classList.add(I.a.fadeOut),e.fadeOutTimeout=setTimeout((function(){e.props.changePageView(n)}),250),e.resetContainerClassTimeout=setTimeout((function(){e.container.classList.remove(I.a.fadeOut)}),500)},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:"AboutMe_container"},i.a.createElement("div",{style:{height:300}},i.a.createElement("img",{id:"AboutMe_headshot",src:B.a,onLoad:this.showHeadshot,alt:"headshot"})),i.a.createElement("div",{className:I.a.message},i.a.createElement("div",{style:{marginBottom:15}},"Hello!"),i.a.createElement("div",null,"I am Neil Solomon, a student majoring in Computer Engineering and working in software development in New York City. Most of my experience has been with web development using React and Django, and I also have programming experience with C++, C, and Java. When I'm not busy studying or working I love building beautiful, interactive web applications and enhancing my algorithmic problem-solving skiils on sites like LeetCode and HackRank. Please check out examples of some of my"," ",i.a.createElement("span",{onClick:function(){return e.changePageView(1)},className:I.a.link},"Projects"),", take a look at my"," ",i.a.createElement("span",{onClick:function(){return e.changePageView(2)},className:I.a.link},"Resume"),", and"," ",i.a.createElement("span",{onClick:function(){return e.changePageView(3)},className:I.a.link},"Connect")," ","with me online."),i.a.createElement("div",{style:{marginTop:15}},"Thanks for visiting!")))}}]),t}(i.a.Component),V=t(17),A=t(10),M=t.n(A),T=t(22),C=t.n(T),O=t(23),H=t.n(O),x=t(24),N=t.n(x),P=t(25),R=t.n(P),D=t(26),S=t.n(D),F=function(e){Object(m.a)(t,e);var n=Object(u.a)(t);function t(e){var a;return Object(r.a)(this,t),(a=n.call(this,e)).componentDidMount=function(){a.projectElements=[],a.projectImageElements=[];var e,n=Object(V.a)(a.projects);try{for(n.s();!(e=n.n()).done;){var t=e.value;a.projectElements.push(document.getElementById("project_"+t.name)),a.projectElements[a.projectElements.length-1].classList.add(M.a.project),a.projectElements[a.projectElements.length-1].classList.add(M.a.project_invisible),a.projectImageElements.push(document.getElementById("image_"+t.name)),a.projectImageElements[a.projectImageElements.length-1].classList.add(M.a.image),a.projectImageElements[a.projectImageElements.length-1].classList.add(M.a.image_invisible)}}catch(i){n.e(i)}finally{n.f()}document.getElementById("pageViewContainer").addEventListener("scroll",(function(){return a.updateElementsInView()})),a.updateElementsInView()},a.componentWillUnmount=function(){for(var e in document.getElementById("pageViewContainer").removeEventListener("scroll",(function(){return a.updateElementsInView()})),a.projectTimeouts)clearTimeout(e)},a.updateElementsInView=function(){var e,n=0,t=Object(V.a)(a.projectElements);try{var i=function(){var t=e.value;t.classList[1]===M.a.project_invisible&&t.getBoundingClientRect().top<.85*window.innerHeight&&(a.projectTimeouts.push(setTimeout((function(){t.classList.remove(M.a.project_invisible),t.classList.add(M.a.project_visible)}),n)),n+=1e3)};for(t.s();!(e=t.n()).done;)i()}catch(o){t.e(o)}finally{t.f()}},a.makeImageVisible=function(e){a.projectImageElements[e].classList.remove(M.a.image_invisible),a.projectImageElements[e].classList.add(M.a.image_visible)},a.state={},a.projectTimeouts=[],a.projects=[{name:"Tic-Tac-Grow",description:"Original game Tic-Tac-Grow adds an exciting twist to the classic game by randomly adding a new cell to the board after each player takes their turn. Choose how many X's or O's in a row it takes to win and how big you want the board to grow.",image:C.a,url:"https://neil-solomon.github.io/score_keeper/#/TicTacGrow"},{name:"Scoreboard",description:"An interactive scoreboard for keeping score during your favorite games. Featuring colorful icons for each player and a live chart of scoring progression. Turn score-keeping from a tedious chore to a fun and exciting part of game night!",image:R.a,url:"https://neil-solomon.github.io/score_keeper/#/Scoreboard"},{name:"Virtual Bank",description:"Use the Virtual Bank to keep track of all of the money for all of the players in your game. Whether you have lost your Monopoly money or run out of Poker chips, the Virtual Bank makes it so you never have to make change or do math again!",image:H.a,url:"https://neil-solomon.github.io/score_keeper/#/VirtualBank"},{name:"YouTube Playlist",description:"An attractive playlist for YouTube videos utilizing the YouTube Data API.",image:S.a,url:"https://neil-solomon.github.io/csc212-music-playlist/"},{name:"Risk Dice Roller",description:"The Risk Dice Roller will save you from rolling dice for hours on end. Featuring win probabilites calculated by running 1,000's of simulations, a live chart of the state of the armies as the battle progresses, and a uniform distribution of dice roll probabilities.",image:N.a,url:"https://neil-solomon.github.io/score_keeper/#/RiskDiceRoller"}],a}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,this.projects.map((function(n,t){return i.a.createElement("div",{key:"project_"+n.name,id:"project_"+n.name},i.a.createElement("a",{href:n.url,target:"blank"},i.a.createElement("div",{className:M.a.image_container},i.a.createElement("img",{id:"image_"+n.name,onLoad:function(){return e.makeImageVisible(t)},src:n.image,alt:n.name}))),i.a.createElement("a",{href:n.url,target:"blank"},i.a.createElement("div",{className:M.a.name},n.name)),i.a.createElement("div",{className:M.a.description},n.description))})))}}]),t}(i.a.Component),U=t(43),G=t(2),W=t.n(G),J=t(27),Q=t.n(J),Y=function(e){Object(m.a)(t,e);var n=Object(u.a)(t);function t(){var e;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=n.call.apply(n,[this].concat(i))).componentDidMount=function(){e.education=document.getElementById("Resume_education"),e.education.classList.add(W.a.resumeBlock),e.education.classList.add(W.a.resumeBlock_invisible),e.expertise=document.getElementById("Resume_expertise"),e.expertise.classList.add(W.a.resumeBlock),e.expertise.classList.add(W.a.resumeBlock_invisible),e.experience=document.getElementById("Resume_experience"),e.experience.classList.add(W.a.resumeBlock),e.experience.classList.add(W.a.resumeBlock_invisible),e.affiliations=document.getElementById("Resume_affiliations"),e.affiliations.classList.add(W.a.resumeBlock),e.affiliations.classList.add(W.a.resumeBlock_invisible),document.getElementById("pageViewContainer").addEventListener("scroll",(function(){return e.updateElementsInView()})),e.updateElementsInView()},e.componentWillUnmount=function(){document.getElementById("pageViewContainer").removeEventListener("scroll",(function(){return e.updateElementsInView()})),clearTimeout(e.educationTimeout),clearTimeout(e.expertiseTimeout),clearTimeout(e.experienceTimeout),clearTimeout(e.affiliationsTimeout)},e.updateElementsInView=function(){var n=0;e.experience.classList[1]===W.a.resumeBlock_invisible&&e.experience.getBoundingClientRect().top<.8*window.innerHeight&&(e.experienceTimeout=setTimeout((function(){e.experience.classList.remove(W.a.resumeBlock_invisible),e.experience.classList.add(W.a.resumeBlock_visible)}),n),n+=1e3),e.education.classList[1]===W.a.resumeBlock_invisible&&e.education.getBoundingClientRect().top<.8*window.innerHeight&&(e.educationTimeout=setTimeout((function(){e.education.classList.remove(W.a.resumeBlock_invisible),e.education.classList.add(W.a.resumeBlock_visible)}),n),n+=1e3),e.expertise.classList[1]===W.a.resumeBlock_invisible&&e.expertise.getBoundingClientRect().top<.8*window.innerHeight&&(e.expertiseTimeout=setTimeout((function(){e.expertise.classList.remove(W.a.resumeBlock_invisible),e.expertise.classList.add(W.a.resumeBlock_visible)}),n),n+=1e3),e.affiliations.classList[1]===W.a.resumeBlock_invisible&&e.affiliations.getBoundingClientRect().top<.8*window.innerHeight&&(e.affiliationsTimeout=setTimeout((function(){e.affiliations.classList.remove(W.a.resumeBlock_invisible),e.affiliations.classList.add(W.a.resumeBlock_visible)}),n),n+=1e3)},e.downloadResume=function(){var e=document.createElement("a");e.setAttribute("href",Q.a),e.setAttribute("download","NeilSolomon_resume_June2020"),e.style.visibility="hidden",document.body.appendChild(e),e.click(),document.body.removeChild(e)},e}return Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"Resume_experience"},i.a.createElement("div",{className:W.a.divider,style:{marginTop:50}}),i.a.createElement("div",{className:W.a.heading,style:{marginTop:50}},"EXPERIENCE"),i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement("strong",null,"GAL Manufacturing, LLC")),i.a.createElement("div",null,"R&D Software Technician: August 2019 - Present"),i.a.createElement("ul",{style:{marginLeft:-50}},i.a.createElement("li",null,"Developed the new Galileo web app which displays real-time data from the GAL elevator controller and facilitates easy set-up and diagnostics of an elevator system."),i.a.createElement("li",null,"Utilized React to create a responsive, intuitive, and fast-rendering UI for the Galileo web app."),i.a.createElement("li",null,"Created custom UI components and implemented efficient data parsing algorithms to improve the rendering speed of the Galileo web app by 200%."),i.a.createElement("li",null,"Implemented Django framework to provide a robust database for the Galileo web app, as well as a custom API to securely transfer data to and from the GAL elevator controller."),i.a.createElement("li",null,"Built a desktop app using PyQt which allows users to easily set-up and troubleshoot their Galileo web app installation.")),i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement("strong",null,"GAL Manufacturing, LLC")),i.a.createElement("div",null,"R&D Software Intern: June 2019 - August 2019"),i.a.createElement("ul",{style:{marginLeft:-50}},i.a.createElement("li",null,"Developed and presented a prototype of the new GALileo web app to company executives, showcasing live communication between the app and the GALaxy elevator controller."),i.a.createElement("li",null,"Assisted in documentation of software team processes including GALaxy simulator set-up and testing, and software version control.")),i.a.createElement("div",{className:W.a.divider})),i.a.createElement("div",{id:"Resume_education",style:{marginTop:50}},i.a.createElement("div",{className:W.a.heading},"EDUCATION"),i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement("strong",null,"The City College of New York")),i.a.createElement("div",null,"Bachelors of Engineering, Computer Engineering: June 2021."),i.a.createElement("table",{align:"center"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",{style:{width:400}},i.a.createElement("ul",{style:{marginLeft:-25}},i.a.createElement("li",null,"Data Structures"),i.a.createElement("li",null,"Intro to Computing (C++)"),i.a.createElement("li",null,"Programming for EE (C++)"),i.a.createElement("li",null,"Operating Systems"),i.a.createElement("li",null,"Discrete Mathematics"),i.a.createElement("li",null,"Calculus I, II, III, & IV"),i.a.createElement("li",null,"Analysis (MATLAB)"))),i.a.createElement("td",{style:{width:400}},i.a.createElement("ul",{style:{marginLeft:-25}},i.a.createElement("li",null,"Algorithms"),i.a.createElement("li",null,"C++ for Engineers"),i.a.createElement("li",null,"Software Design (Java)"),i.a.createElement("li",null,"Assembly Language"),i.a.createElement("li",null,"Linear Algebra"),i.a.createElement("li",null,"Intro to Probability"),i.a.createElement("li",null,"Integrated Circuit Design")))))),i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement("strong",null,"CodePath")),i.a.createElement("div",null,"Advanced Software Engineering: Summer 2021."),i.a.createElement("ul",{style:{marginLeft:-25}},i.a.createElement("li",null,"Selected for a competitive 12-week course taught by software industry professionals covering the use of data structures and algorithm design techniques to solve challenging algorithmic questions.")),i.a.createElement("div",{className:W.a.divider})),i.a.createElement("div",{id:"Resume_expertise"},i.a.createElement("div",{className:W.a.heading},"EXPERTISE"),i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement("strong",null,"Programming Languages")),i.a.createElement("div",null,"Proficient in Python, Javascript, HTML, CSS, and C++. Familiar with Java, C, Bash, SQL, and MATLAB."),i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement("strong",null,"Technical Skills")),i.a.createElement("div",null,"React, Django, PyQt, and Git."),i.a.createElement("div",{className:W.a.divider})),i.a.createElement("div",{id:"Resume_affiliations",style:{marginBottom:100}},i.a.createElement("div",{className:W.a.heading},"AFFILIATIONS"),i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement("strong",null,"National Society of Black Engineers")),i.a.createElement("div",null,"Member, 2017 - Present"),i.a.createElement("div",{className:W.a.divider})),i.a.createElement("div",{className:W.a.download,onClick:this.downloadResume},"Download PDF ",i.a.createElement(U.a,null)))}}]),t}(i.a.Component),z=t(3),q=t.n(z),X=t(44),K=t(45),Z=t(42),$=function(e){Object(m.a)(t,e);var n=Object(u.a)(t);function t(){var e;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=n.call.apply(n,[this].concat(i))).componentDidMount=function(){e.emailIcon=document.getElementById("emailIcon"),e.emailIcon.classList.add(q.a.icon),e.emailIcon.classList.add(q.a.iconHoverOut),e.emailEntranceTimeout=setTimeout((function(){e.emailIcon.classList.add(q.a.iconEntrance)}),500),e.linkedinIcon=document.getElementById("linkedinIcon"),e.linkedinIcon.classList.add(q.a.icon),e.linkedinIcon.classList.add(q.a.iconHoverOut),e.linkedinEntranceTimeout=setTimeout((function(){e.linkedinIcon.classList.add(q.a.iconEntrance)}),1e3),e.githubIcon=document.getElementById("githubIcon"),e.githubIcon.classList.add(q.a.icon),e.githubIcon.classList.add(q.a.iconHoverOut),e.githubEntranceTimeout=setTimeout((function(){e.githubIcon.classList.add(q.a.iconEntrance)}),1500)},e.componentWillUnmount=function(){clearTimeout(e.emailEntranceTimeout),clearTimeout(e.linkedinEntranceTimeout),clearTimeout(e.githubEntranceTimeout)},e.hoverIn=function(n){switch(console.log(n),n){case 0:e.emailIcon.classList.remove(q.a.iconHoverOut),e.emailIcon.classList.add(q.a.iconHoverIn);break;case 1:e.linkedinIcon.classList.remove(q.a.iconHoverOut),e.linkedinIcon.classList.add(q.a.iconHoverIn);break;case 2:e.githubIcon.classList.remove(q.a.iconHoverOut),e.githubIcon.classList.add(q.a.iconHoverIn)}},e.hoverOut=function(n){switch(console.log(n),n){case 0:e.emailIcon.classList.remove(q.a.iconHoverIn),e.emailIcon.classList.add(q.a.iconHoverOut);break;case 1:e.linkedinIcon.classList.remove(q.a.iconHoverIn),e.linkedinIcon.classList.add(q.a.iconHoverOut);break;case 2:e.githubIcon.classList.remove(q.a.iconHoverIn),e.githubIcon.classList.add(q.a.iconHoverOut)}},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:q.a.message},"Please shoot me an email and connect with me on LinkedIn! Also, check out the source code for all of my projects on Github."),i.a.createElement("div",{className:q.a.icons},i.a.createElement("div",{id:"emailIcon",style:{left:Math.min(600,.9*window.innerWidth)/7*1}},i.a.createElement("a",{href:"mailto:neilsolomon89@gmail.com"},i.a.createElement(X.a,{onMouseEnter:function(){return e.hoverIn(0)},onMouseLeave:function(){return e.hoverOut(0)}}))),i.a.createElement("div",{id:"linkedinIcon",style:{left:Math.min(600,.9*window.innerWidth)/7*3}},i.a.createElement("a",{href:"https://www.linkedin.com/in/neil-solomon/",target:"blank"},i.a.createElement(K.a,{onMouseEnter:function(){return e.hoverIn(1)},onMouseLeave:function(){return e.hoverOut(1)}}))),i.a.createElement("div",{id:"githubIcon",style:{left:Math.min(600,.9*window.innerWidth)/7*5}},i.a.createElement("a",{href:"https://github.com/neil-solomon",target:"blank"},i.a.createElement(Z.a,{onMouseEnter:function(){return e.hoverIn(2)},onMouseLeave:function(){return e.hoverOut(2)}})))))}}]),t}(i.a.Component),ee=t(12),ne=t.n(ee),te=function(e){Object(m.a)(t,e);var n=Object(u.a)(t);function t(){return Object(r.a)(this,t),n.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:ne.a.backgroundAnimations},i.a.createElement("div",{className:ne.a.backgroundAnimation1}),i.a.createElement("div",{className:ne.a.backgroundAnimation2}),i.a.createElement("div",{className:ne.a.backgroundAnimation3}),i.a.createElement("div",{className:ne.a.backgroundAnimation4}),i.a.createElement("div",{className:ne.a.backgroundAnimation5}),i.a.createElement("div",{className:ne.a.backgroundAnimation6}),i.a.createElement("div",{className:ne.a.backgroundAnimation7}),i.a.createElement("div",{className:ne.a.backgroundAnimation8}))}}]),t}(i.a.Component),ae=function(e){Object(m.a)(t,e);var n=Object(u.a)(t);function t(){var e;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=n.call.apply(n,[this].concat(i))).state={menuVisible:!1,pageViews:[{name:"About Me",inView:!0},{name:"Projects",inView:!1},{name:"Resume",inView:!1},{name:"Connect",inView:!1}]},e.toggleMenu=function(){e.setState({menuVisible:!e.state.menuVisible})},e.openMenu=function(){e.setState({menuVisible:!0})},e.closeMenu=function(){e.setState({menuVisible:!1})},e.changePageView=function(n){for(var t=Object(s.a)(e.state.pageViews),a=0;a<t.length;++a)t[a].inView=a===n;e.setState({pageViews:t,menuVisible:!1})},e}return Object(c.a)(t,[{key:"render",value:function(){return console.log(this.state.pageViews),i.a.createElement("div",{style:{overflow:"hidden"}},i.a.createElement(te,null),i.a.createElement(L,{toggleMenu:this.toggleMenu,menuVisible:this.state.menuVisible}),window.innerWidth>900&&i.a.createElement("div",{className:_.a.pageTitle,key:"pageTitle"+JSON.stringify(this.state.pageViews)},this.state.pageViews[0].inView&&i.a.createElement(i.a.Fragment,null,"About Me"),this.state.pageViews[1].inView&&i.a.createElement(i.a.Fragment,null,"Projects"),this.state.pageViews[2].inView&&i.a.createElement(i.a.Fragment,null,"Resume"),this.state.pageViews[3].inView&&i.a.createElement(i.a.Fragment,null,"Connect")),i.a.createElement(f,{visible:this.state.menuVisible,closeMenu:this.closeMenu,pageViews:this.state.pageViews,changePageView:this.changePageView}),i.a.createElement("div",{className:_.a.pageViewContainer,key:"pageViewContainer"+JSON.stringify(this.state.pageViews),id:"pageViewContainer"},this.state.pageViews[0].inView&&i.a.createElement(j,{changePageView:this.changePageView}),this.state.pageViews[1].inView&&i.a.createElement(F,null),this.state.pageViews[2].inView&&i.a.createElement(Y,null),this.state.pageViews[3].inView&&i.a.createElement($,null)))}}]),t}(i.a.Component);function ie(){return i.a.createElement(ae,null)}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[32,1,2]]]);
//# sourceMappingURL=main.98ca6aec.chunk.js.map