(this.webpackJsonphomepage2=this.webpackJsonphomepage2||[]).push([[0],[,function(e,n,t){e.exports={menuButton:"MenuButton_menuButton__3zo8U",line1:"MenuButton_line1__3vWBL",line1_close:"MenuButton_line1_close__zs-n_",line1_open:"MenuButton_line1_open__6GuAQ",line2:"MenuButton_line2__ua058",line2_close:"MenuButton_line2_close__2uMca",line2_open:"MenuButton_line2_open__w1UvF",line3:"MenuButton_line3__FD_JQ",line3_close:"MenuButton_line3_close__1t6Q4",line3_open:"MenuButton_line3_open__Bj0bW",line_closeHover:"MenuButton_line_closeHover__3iNf1",line_openHover:"MenuButton_line_openHover__3nHPa"}},function(e,n,t){e.exports={heading:"Resume_heading__3WW3a",download:"Resume_download__eeO_e",resumeBlock:"Resume_resumeBlock__9ku-5",resumeBlock_invisible:"Resume_resumeBlock_invisible__3K99D",resumeBlock_visible:"Resume_resumeBlock_visible__X4Pqe",divider:"Resume_divider__oaaC-"}},function(e,n,t){e.exports={message:"Connect_message__2IQlu",icons:"Connect_icons__1nN0M",icon:"Connect_icon__DuF5F",iconEntrance:"Connect_iconEntrance__lFzkm",iconHoverOut:"Connect_iconHoverOut__1vwUW",iconHoverIn:"Connect_iconHoverIn__3nNeU"}},function(e,n,t){e.exports={menuItem:"MenuItem_menuItem__nP0id",menuItem_notVisible:"MenuItem_menuItem_notVisible__2QmDU",menuItem_visible:"MenuItem_menuItem_visible__2NY0G",underline:"MenuItem_underline__3fC0r",underline_show:"MenuItem_underline_show__1sARD",underline_hide:"MenuItem_underline_hide__1QENE",underline_animate:"MenuItem_underline_animate__3pWlr",underlineAnimate:"MenuItem_underlineAnimate__3YL8R"}},,,,,function(e,n,t){e.exports={overlay:"Menu_overlay__38Hq3",overlay_open:"Menu_overlay_open__1Exig",overlay_close:"Menu_overlay_close__3B6-k",sidebar:"Menu_sidebar__3FQxd",sidebar_open:"Menu_sidebar_open__3Ov5L",sidebar_close:"Menu_sidebar_close__2nIBT",footer:"Menu_footer__1V1h4",footerFadeIn:"Menu_footerFadeIn__3RTYq"}},function(e,n,t){e.exports={backgroundAnimations:"BackgroundAnimations_backgroundAnimations__3S0It",backgroundAnimationsEnter:"BackgroundAnimations_backgroundAnimationsEnter__aAfpL",backgroundAnimation1:"BackgroundAnimations_backgroundAnimation1__2S3MK",backgroundAnimation2:"BackgroundAnimations_backgroundAnimation2__W3qKn",backgroundAnimation3:"BackgroundAnimations_backgroundAnimation3__1hVbt",backgroundAnimation4:"BackgroundAnimations_backgroundAnimation4__13Mgi",backgroundAnimation5:"BackgroundAnimations_backgroundAnimation5__32BzQ",backgroundAnimation6:"BackgroundAnimations_backgroundAnimation6__uVmyJ",backgroundAnimation7:"BackgroundAnimations_backgroundAnimation7__3BaVM",backgroundAnimation8:"BackgroundAnimations_backgroundAnimation8__3gT0j",backgroundAnimation9:"BackgroundAnimations_backgroundAnimation9__290xW",backgroundAnimation10:"BackgroundAnimations_backgroundAnimation10__Q61R6",backgroundAnimation11:"BackgroundAnimations_backgroundAnimation11__C5Pac",backgroundAnimation12:"BackgroundAnimations_backgroundAnimation12__3YJ6G"}},function(e,n,t){e.exports={project:"Projects_project__1Wymc",project_invisible:"Projects_project_invisible__3slCg",project_visible:"Projects_project_visible__3I8BT",image:"Projects_image__OJLBA",image_invisible:"Projects_image_invisible__3NSe7",image_visible:"Projects_image_visible__2-y9h",name:"Projects_name__3EFVL"}},,function(e,n,t){e.exports={message:"AboutMe_message__3ixyC",headshot:"AboutMe_headshot__1ltYE",headshotHide:"AboutMe_headshotHide__2DhUU",headshotShow:"AboutMe_headshotShow__3z-0P"}},,,,,,,function(e,n,t){e.exports={pageViewContainer:"MainContainer_pageViewContainer__25f_t",pageViewFadeIn:"MainContainer_pageViewFadeIn__2giTE"}},function(e,n,t){e.exports=t.p+"static/media/wedding1crop2.5e6575f8.jpg"},function(e,n,t){e.exports=t.p+"static/media/ticTacGrow.f7f94ab4.jpg"},function(e,n,t){e.exports=t.p+"static/media/virtualBank.7b629565.jpg"},function(e,n,t){e.exports=t.p+"static/media/riskDiceRoller.50ed39c3.jpg"},function(e,n,t){e.exports=t.p+"static/media/scoreboard.d5ec9b7b.jpg"},function(e,n,t){e.exports=t.p+"static/media/youtubePlaylist.0ca8f805.png"},function(e,n,t){e.exports=t.p+"static/media/NeilSolomon_resume_June2020.c9b9839a.pdf"},,,,,function(e,n,t){e.exports=t(41)},,,,,function(e,n,t){},function(e,n,t){},,,function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),o=t(19),l=t.n(o),s=(t(37),t(38),t(30)),r=t(5),c=t(6),u=t(8),m=t(7),d=t(20),_=t.n(d),v=t(9),g=t.n(v),p=t(4),h=t.n(p),b=function(e){Object(u.a)(t,e);var n=Object(m.a)(t);function t(){var e;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=n.call.apply(n,[this].concat(i))).componentDidMount=function(){e.menuItem=document.getElementById("menuItem"+e.props.name),e.menuItem.classList.add(h.a.menuItem),e.menuItem.classList.add(h.a.menuItem_notVisible),e.underline=document.getElementById("menuItem"+e.props.name+"Underline"),e.underline.classList.add(h.a.underline),e.underline.classList.add(h.a.underline_hide)},e.componentWillUnmount=function(){clearTimeout(e.enterTimeout),clearTimeout(e.exitTimeout1),clearTimeout(e.exitTimeout2)},e.componentDidUpdate=function(n,t){e.props.menuVisible&&!n.menuVisible?(e.menuItem.classList.remove(h.a.menuItem_visible),e.menuItem.classList.add(h.a.menuItem_notVisible),e.enterTimeout=setTimeout((function(){e.menuItem.classList.remove(h.a.menuItem_notVisible),e.menuItem.classList.add(h.a.menuItem_visible)}),150+150*e.props.index)):!e.props.menuVisible&&n.menuVisible&&(e.menuItem.classList.remove(h.a.menuItem_visible),e.menuItem.classList.add(h.a.menuItem_notVisible))},e.menuItemClick=function(){e.underline.classList.add(h.a.underline_animate),e.exitTimeout1=setTimeout((function(){e.props.changePageView(e.props.index)}),500),e.exitTimeout2=setTimeout((function(){e.underline.classList.remove(h.a.underline_animate),e.underline.classList.remove(h.a.underline_show),e.underline.classList.add(h.a.underline_hide)}),1e3)},e.menuItemHoverIn=function(){e.underline.classList.remove(h.a.underline_hide),e.underline.classList.add(h.a.underline_show)},e.menuItemHoverOut=function(){e.underline.classList.remove(h.a.underline_show),e.underline.classList.add(h.a.underline_hide)},e}return Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"menuItem"+this.props.name,onClick:this.menuItemClick,onMouseEnter:this.menuItemHoverIn,onMouseLeave:this.menuItemHoverOut},this.props.name,i.a.createElement("div",{id:"menuItem"+this.props.name+"Underline"}))}}]),t}(i.a.Component),E=function(e){Object(u.a)(t,e);var n=Object(m.a)(t);function t(){var e;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=n.call.apply(n,[this].concat(i))).componentDidMount=function(){e.overlay=document.getElementById("Menu_overlay"),e.overlay.classList.add(g.a.overlay),e.overlay.classList.add(g.a.overlay_close),e.sidebar=document.getElementById("Menu_sidebar"),e.sidebar.classList.add(g.a.sidebar),e.sidebar.classList.add(g.a.sidebar_close)},e.componentDidUpdate=function(n,t){e.props.visible?(e.overlay.classList.remove(g.a.overlay_close),e.overlay.classList.add(g.a.overlay_open),e.sidebar.classList.remove(g.a.sidebar_close),e.sidebar.classList.add(g.a.sidebar_open)):(e.overlay.classList.remove(g.a.overlay_open),e.overlay.classList.add(g.a.overlay_close),e.sidebar.classList.remove(g.a.sidebar_open),e.sidebar.classList.add(g.a.sidebar_close))},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"Menu_overlay",onClick:this.props.closeMenu}),i.a.createElement("div",{id:"Menu_sidebar"},i.a.createElement("div",{style:{height:100}}),this.props.pageViews.map((function(n,t){return i.a.createElement(b,{key:n.name+t,name:n.name,index:t,menuVisible:e.props.visible,changePageView:e.props.changePageView})})),i.a.createElement("div",{key:"sidebarFooter"+this.props.visible,className:g.a.footer},"\xa92020 Neil Solomon")))}}]),t}(i.a.Component),f=t(1),k=t.n(f),L=function(e){Object(u.a)(t,e);var n=Object(m.a)(t);function t(e){var a;return Object(r.a)(this,t),(a=n.call(this,e)).componentDidMount=function(){a.line1=document.getElementById("menuButton_line1"),a.line1.classList.add(k.a.line1),a.line1.classList.add(k.a.line1_close),a.line2=document.getElementById("menuButton_line2"),a.line2.classList.add(k.a.line2),a.line2.classList.add(k.a.line2_close),a.line3=document.getElementById("menuButton_line3"),a.line3.classList.add(k.a.line3),a.line3.classList.add(k.a.line3_close)},a.componentDidUpdate=function(){a.props.menuVisible?(a.line1.classList.remove(k.a.line1_close),a.line1.classList.add(k.a.line1_open),a.line2.classList.remove(k.a.line2_close),a.line2.classList.add(k.a.line2_open),a.line3.classList.remove(k.a.line3_close),a.line3.classList.add(k.a.line3_open)):(a.line1.classList.remove(k.a.line1_open),a.line1.classList.add(k.a.line1_close),a.line2.classList.remove(k.a.line2_open),a.line2.classList.add(k.a.line2_close),a.line3.classList.remove(k.a.line3_open),a.line3.classList.add(k.a.line3_close))},a.buttonHoverIn=function(){a.props.menuVisible?(a.line1.classList.add(k.a.line_openHover),a.line2.classList.add(k.a.line_openHover),a.line3.classList.add(k.a.line_openHover),a.line1.classList.remove(k.a.line_closeHover),a.line2.classList.remove(k.a.line_closeHover),a.line3.classList.remove(k.a.line_closeHover)):(a.line1.classList.remove(k.a.line_openHover),a.line2.classList.remove(k.a.line_openHover),a.line3.classList.remove(k.a.line_openHover),a.line1.classList.add(k.a.line_closeHover),a.line2.classList.add(k.a.line_closeHover),a.line3.classList.add(k.a.line_closeHover))},a.buttonHoverOut=function(){a.props.menuVisible?(a.line1.classList.remove(k.a.line_openHover),a.line2.classList.remove(k.a.line_openHover),a.line3.classList.remove(k.a.line_openHover)):(a.line1.classList.remove(k.a.line_closeHover),a.line2.classList.remove(k.a.line_closeHover),a.line3.classList.remove(k.a.line_closeHover))},a.buttonClick=function(){a.line1.classList.remove(k.a.line_openHover),a.line2.classList.remove(k.a.line_openHover),a.line3.classList.remove(k.a.line_openHover),a.line1.classList.remove(k.a.line_closeHover),a.line2.classList.remove(k.a.line_closeHover),a.line3.classList.remove(k.a.line_closeHover),a.props.toggleMenu()},a.state={},a}return Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:k.a.menuButton,onClick:this.buttonClick,onMouseEnter:this.buttonHoverIn,onMouseLeave:this.buttonHoverOut},i.a.createElement("div",{id:"menuButton_line1"}),i.a.createElement("div",{id:"menuButton_line2"}),i.a.createElement("div",{id:"menuButton_line3"}))}}]),t}(i.a.Component),I=t(13),w=t.n(I),y=t(21),B=t.n(y),A=function(e){Object(u.a)(t,e);var n=Object(m.a)(t);function t(){var e;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=n.call.apply(n,[this].concat(i))).componentDidMount=function(){e.headshot=document.getElementById("AboutMe_headshot"),e.headshot.classList.add(w.a.headshot),e.headshot.classList.add(w.a.headshotHide)},e.showHeadshot=function(){e.headshot.classList.remove(w.a.headshotHide),e.headshot.classList.add(w.a.headshotShow)},e}return Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{height:300}},i.a.createElement("img",{id:"AboutMe_headshot",src:B.a,onLoad:this.showHeadshot,alt:"headshot"})),i.a.createElement("div",{className:w.a.message},i.a.createElement("div",null,"Hello!"),i.a.createElement("div",null,"I am a student majoring in Computer Engineering and working part-time in software development. I have experience with C++, Python, and Javascript and I love creating interactive web pages using React. Check out my portfolio for examples of my projects!")))}}]),t}(i.a.Component),j=t(16),M=t(11),V=t.n(M),T=t(22),C=t.n(T),H=t(23),O=t.n(H),x=t(24),N=t.n(x),R=t(25),P=t.n(R),D=t(26),S=t.n(D),U=function(e){Object(u.a)(t,e);var n=Object(m.a)(t);function t(e){var a;return Object(r.a)(this,t),(a=n.call(this,e)).componentDidMount=function(){a.projectElements=[],a.projectImageElements=[];var e,n=Object(j.a)(a.projects);try{for(n.s();!(e=n.n()).done;){var t=e.value;a.projectElements.push(document.getElementById("project_"+t.name)),a.projectElements[a.projectElements.length-1].classList.add(V.a.project),a.projectElements[a.projectElements.length-1].classList.add(V.a.project_invisible),a.projectImageElements.push(document.getElementById("image_"+t.name)),a.projectImageElements[a.projectImageElements.length-1].classList.add(V.a.image),a.projectImageElements[a.projectImageElements.length-1].classList.add(V.a.image_invisible)}}catch(i){n.e(i)}finally{n.f()}document.getElementById("pageViewContainer").addEventListener("scroll",(function(){return a.updateElementsInView()})),a.updateElementsInView()},a.componentWillUnmount=function(){for(var e in document.getElementById("pageViewContainer").removeEventListener("scroll",(function(){return a.updateElementsInView()})),a.projectTimeouts)clearTimeout(e)},a.updateElementsInView=function(){var e,n=0,t=Object(j.a)(a.projectElements);try{var i=function(){var t=e.value;t.classList[1]===V.a.project_invisible&&t.getBoundingClientRect().top<.8*window.innerHeight&&(a.projectTimeouts.push(setTimeout((function(){t.classList.remove(V.a.project_invisible),t.classList.add(V.a.project_visible)}),n)),n+=1e3)};for(t.s();!(e=t.n()).done;)i()}catch(o){t.e(o)}finally{t.f()}},a.makeImageVisible=function(e){a.projectImageElements[e].classList.remove(V.a.image_invisible),a.projectImageElements[e].classList.add(V.a.image_visible)},a.state={},a.projectTimeouts=[],a.projects=[{name:"Tic-Tac-Grow",description:"Original game Tic-Tac-Grow adds an exciting twist to the classic game by randomly adding a new cell to the board after each player takes their turn. Choose how many X's or O's in a row it takes to win and how big you want the board to grow.",image:C.a,url:"https://neil-solomon.github.io/score_keeper/#/TicTacGrow"},{name:"Scoreboard",description:"An interactive scoreboard for keeping score during your favorite games. Featuring colorful icons for each player and a live chart of scoring progression. Turn score-keeping from a tedious chore to a fun and exciting part of game night!",image:P.a,url:"https://neil-solomon.github.io/score_keeper/#/Scoreboard"},{name:"Virtual Bank",description:"Use the Virtual Bank to keep track of all of the money for all of the players in your game. Whether you have lost your Monopoly money or run out of Poker chips, the Virtual Bank makes it so you never have to make change or do math again!",image:O.a,url:"https://neil-solomon.github.io/score_keeper/#/VirtualBank"},{name:"YouTube Playlist",description:"An attractive playlist for YouTube videos utilizing the YouTube Data API.",image:S.a,url:"https://neil-solomon.github.io/csc212-music-playlist/"},{name:"Risk Dice Roller",description:"The Risk Dice Roller will save you from rolling dice for hours on end. Featuring win probabilites calculated by running 1,000's of simulations, a live chart of the state of the armies as the battle progresses, and a uniform distribution of dice roll probabilities.",image:N.a,url:"https://neil-solomon.github.io/score_keeper/#/RiskDiceRoller"}],a}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,this.projects.map((function(n,t){return i.a.createElement("div",{key:"project_"+n.name,id:"project_"+n.name},i.a.createElement("a",{href:n.url,target:"blank"},i.a.createElement("div",{style:{height:"calc(.47*min(600px, 90vw))"}},i.a.createElement("img",{id:"image_"+n.name,onLoad:function(){return e.makeImageVisible(t)},src:n.image,alt:n.name}))),i.a.createElement("a",{href:n.url,target:"blank"},i.a.createElement("div",{className:V.a.name},n.name)),i.a.createElement("div",{className:V.a.description},n.description))})))}}]),t}(i.a.Component),F=t(43),G=t(2),W=t.n(G),q=t(27),J=t.n(q),Q=function(e){Object(u.a)(t,e);var n=Object(m.a)(t);function t(){var e;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=n.call.apply(n,[this].concat(i))).componentDidMount=function(){e.education=document.getElementById("Resume_education"),e.education.classList.add(W.a.resumeBlock),e.education.classList.add(W.a.resumeBlock_invisible),e.coursework=document.getElementById("Resume_coursework"),e.coursework.classList.add(W.a.resumeBlock),e.coursework.classList.add(W.a.resumeBlock_invisible),e.qualifications=document.getElementById("Resume_qualifications"),e.qualifications.classList.add(W.a.resumeBlock),e.qualifications.classList.add(W.a.resumeBlock_invisible),e.experience=document.getElementById("Resume_experience"),e.experience.classList.add(W.a.resumeBlock),e.experience.classList.add(W.a.resumeBlock_invisible),e.affiliations=document.getElementById("Resume_affiliations"),e.affiliations.classList.add(W.a.resumeBlock),e.affiliations.classList.add(W.a.resumeBlock_invisible),document.getElementById("pageViewContainer").addEventListener("scroll",(function(){return e.updateElementsInView()})),e.updateElementsInView()},e.componentWillUnmount=function(){document.getElementById("pageViewContainer").removeEventListener("scroll",(function(){return e.updateElementsInView()})),clearTimeout(e.educationTimeout),clearTimeout(e.courseworkTimeout),clearTimeout(e.qualificationsTimeout),clearTimeout(e.experienceTimeout),clearTimeout(e.affiliationsTimeout)},e.updateElementsInView=function(){var n=0;e.education.classList[1]===W.a.resumeBlock_invisible&&e.education.getBoundingClientRect().top<.8*window.innerHeight&&(e.educationTimeout=setTimeout((function(){e.education.classList.remove(W.a.resumeBlock_invisible),e.education.classList.add(W.a.resumeBlock_visible)}),n),n+=1e3),e.coursework.classList[1]===W.a.resumeBlock_invisible&&e.coursework.getBoundingClientRect().top<.8*window.innerHeight&&(e.courseworkTimeout=setTimeout((function(){e.coursework.classList.remove(W.a.resumeBlock_invisible),e.coursework.classList.add(W.a.resumeBlock_visible)}),n),n+=1e3),e.qualifications.classList[1]===W.a.resumeBlock_invisible&&e.qualifications.getBoundingClientRect().top<.8*window.innerHeight&&(e.qualificationsTimeout=setTimeout((function(){e.qualifications.classList.remove(W.a.resumeBlock_invisible),e.qualifications.classList.add(W.a.resumeBlock_visible)}),n),n+=1e3),e.experience.classList[1]===W.a.resumeBlock_invisible&&e.experience.getBoundingClientRect().top<.8*window.innerHeight&&(e.experienceTimeout=setTimeout((function(){e.experience.classList.remove(W.a.resumeBlock_invisible),e.experience.classList.add(W.a.resumeBlock_visible)}),n),n+=1e3),e.affiliations.classList[1]===W.a.resumeBlock_invisible&&e.affiliations.getBoundingClientRect().top<.8*window.innerHeight&&(e.affiliationsTimeout=setTimeout((function(){e.affiliations.classList.remove(W.a.resumeBlock_invisible),e.affiliations.classList.add(W.a.resumeBlock_visible)}),n),n+=1e3)},e.downloadResume=function(){var e=document.createElement("a");e.setAttribute("href",J.a),e.setAttribute("download","NeilSolomon_resume_June2020"),e.style.visibility="hidden",document.body.appendChild(e),e.click(),document.body.removeChild(e)},e}return Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:W.a.download,onClick:this.downloadResume},"Download PDF ",i.a.createElement(F.a,null)),i.a.createElement("div",{id:"Resume_education",style:{marginTop:50}},i.a.createElement("div",{className:W.a.heading},"EDUCATION"),i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement("strong",null,"City College of the City University of New York")),i.a.createElement("div",null,"Bachelors of Engineering, Computer Engineering: June 2021."),i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement("strong",null,"LaGuardia Community College of the City University of New York")),i.a.createElement("div",null,"\u2003Associate in Science, Electrical Engineering: June 2018."),i.a.createElement("div",{className:W.a.divider})),i.a.createElement("div",{id:"Resume_coursework"},i.a.createElement("div",{className:W.a.heading},"COURSEWORK"),i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement("strong",null,"Completed"),i.a.createElement("table",{align:"center"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",{style:{width:250,height:0}}),i.a.createElement("td",{style:{width:250,height:0}})),i.a.createElement("tr",null,i.a.createElement("td",null,"Data Structures"),i.a.createElement("td",null,"Introduction to C++")),i.a.createElement("tr",null,i.a.createElement("td",null,"C++ for Engineers"),i.a.createElement("td",null,"Programming for EE (C++)")),i.a.createElement("tr",null,i.a.createElement("td",null,"Assembly Programming"),i.a.createElement("td",null,"Discrete Mathematics")),i.a.createElement("tr",null,i.a.createElement("td",null,"Linear Algebra"),i.a.createElement("td",null,"Calculus I, II, III")),i.a.createElement("tr",null,i.a.createElement("td",null,"Digital Integrated Circuits"),i.a.createElement("td",null,"Computer Aided Analysis (MATLAB)"))))),i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement("strong",null,"In Progress"),i.a.createElement("table",{align:"center"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",{style:{width:250,height:0}}),i.a.createElement("td",{style:{width:250,height:0}})),i.a.createElement("tr",null,i.a.createElement("td",null,"Algorithms"),i.a.createElement("td",null,"Operating Systems")),i.a.createElement("tr",null,i.a.createElement("td",null,"Software Design"),i.a.createElement("td",null,"Linear Systems Analysis"))))),i.a.createElement("div",{className:W.a.divider})),i.a.createElement("div",{id:"Resume_qualifications"},i.a.createElement("div",{className:W.a.heading},"QUALIFICATIONS"),i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement("strong",null,"Programming Languages")),i.a.createElement("div",null,"Proficient in C++, Python, and JavaScript. Basic experience with MATLAB, Bash, and SQL."),i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement("strong",null,"Technical Skills")),i.a.createElement("div",null,"React, Django, and Git."),i.a.createElement("div",{className:W.a.divider})),i.a.createElement("div",{id:"Resume_experience"},i.a.createElement("div",{className:W.a.heading},"EXPERIENCE"),i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement("strong",null,"GAL Manufacturing, LLC")),i.a.createElement("div",null,i.a.createElement("i",null,"R&D Software Technician, August 2019 - Present")),i.a.createElement("ul",{style:{marginLeft:-50}},i.a.createElement("li",null,"Used React framework for development of the GALileo web app with a focus on displaying real-time data from the GALaxy elevator controller."),i.a.createElement("li",null,"Used Django framework to provide a robust database to transfer and save data from the GALaxy elevator controller to the GALileo web app."),i.a.createElement("li",null,"Applied principles of object-oriented and functional programming in Python and C to improve the speed and maintainability of GALaxy code.")),i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement("strong",null,"GAL Manufacturing, LLC")),i.a.createElement("div",null,i.a.createElement("i",null,"R&D Software Intern, June 2018 - August 2018")),i.a.createElement("ul",{style:{marginLeft:-50}},i.a.createElement("li",null,"Developed back-end code to facilitate communication between the GALaxy elevator controller and the new GALileo web app."),i.a.createElement("li",null,"Presented the new GALileo web app to company executives, showcasing live communication between the GALileo web app and GALaxy elevator controller."),i.a.createElement("li",null,"Assisted in documentation of software team processes including GALaxy simulator set-up and testing, and software version control.")),i.a.createElement("div",{className:W.a.divider})),i.a.createElement("div",{id:"Resume_affiliations",style:{marginBottom:300}},i.a.createElement("div",{className:W.a.heading},"AFFILIATIONS"),i.a.createElement("div",null,i.a.createElement("strong",null,"National Society of Black Engineers")),i.a.createElement("div",null,"Member, 2017 - Present"),i.a.createElement("div",{className:W.a.divider})))}}]),t}(i.a.Component),Y=t(3),z=t.n(Y),K=t(44),X=t(45),$=t(42),Z=function(e){Object(u.a)(t,e);var n=Object(m.a)(t);function t(){var e;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=n.call.apply(n,[this].concat(i))).componentDidMount=function(){e.emailIcon=document.getElementById("emailIcon"),e.emailIcon.classList.add(z.a.icon),e.emailIcon.classList.add(z.a.iconHoverOut),e.emailEntranceTimeout=setTimeout((function(){e.emailIcon.classList.add(z.a.iconEntrance)}),500),e.linkedinIcon=document.getElementById("linkedinIcon"),e.linkedinIcon.classList.add(z.a.icon),e.linkedinIcon.classList.add(z.a.iconHoverOut),e.linkedinEntranceTimeout=setTimeout((function(){e.linkedinIcon.classList.add(z.a.iconEntrance)}),1e3),e.githubIcon=document.getElementById("githubIcon"),e.githubIcon.classList.add(z.a.icon),e.githubIcon.classList.add(z.a.iconHoverOut),e.githubEntranceTimeout=setTimeout((function(){e.githubIcon.classList.add(z.a.iconEntrance)}),1500)},e.componentWillUnmount=function(){clearTimeout(e.emailEntranceTimeout),clearTimeout(e.linkedinEntranceTimeout),clearTimeout(e.githubEntranceTimeout)},e.hoverIn=function(n){switch(console.log(n),n){case 0:e.emailIcon.classList.remove(z.a.iconHoverOut),e.emailIcon.classList.add(z.a.iconHoverIn);break;case 1:e.linkedinIcon.classList.remove(z.a.iconHoverOut),e.linkedinIcon.classList.add(z.a.iconHoverIn);break;case 2:e.githubIcon.classList.remove(z.a.iconHoverOut),e.githubIcon.classList.add(z.a.iconHoverIn)}},e.hoverOut=function(n){switch(console.log(n),n){case 0:e.emailIcon.classList.remove(z.a.iconHoverIn),e.emailIcon.classList.add(z.a.iconHoverOut);break;case 1:e.linkedinIcon.classList.remove(z.a.iconHoverIn),e.linkedinIcon.classList.add(z.a.iconHoverOut);break;case 2:e.githubIcon.classList.remove(z.a.iconHoverIn),e.githubIcon.classList.add(z.a.iconHoverOut)}},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:z.a.message},"Please shoot me an email and connect with me on LinkedIn! Also, check out the source code for all of my projects on Github."),i.a.createElement("div",{className:z.a.icons},i.a.createElement("div",{id:"emailIcon",style:{left:Math.min(600,.9*window.innerWidth)/7*1}},i.a.createElement("a",{href:"mailto:neilsolomon89@gmail.com"},i.a.createElement(K.a,{onMouseEnter:function(){return e.hoverIn(0)},onMouseLeave:function(){return e.hoverOut(0)}}))),i.a.createElement("div",{id:"linkedinIcon",style:{left:Math.min(600,.9*window.innerWidth)/7*3}},i.a.createElement("a",{href:"https://www.linkedin.com/in/neil-solomon/",target:"blank"},i.a.createElement(X.a,{onMouseEnter:function(){return e.hoverIn(1)},onMouseLeave:function(){return e.hoverOut(1)}}))),i.a.createElement("div",{id:"githubIcon",style:{left:Math.min(600,.9*window.innerWidth)/7*5}},i.a.createElement("a",{href:"https://github.com/neil-solomon",target:"blank"},i.a.createElement($.a,{onMouseEnter:function(){return e.hoverIn(2)},onMouseLeave:function(){return e.hoverOut(2)}})))))}}]),t}(i.a.Component),ee=t(10),ne=t.n(ee),te=function(e){Object(u.a)(t,e);var n=Object(m.a)(t);function t(){return Object(r.a)(this,t),n.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:ne.a.backgroundAnimations},i.a.createElement("div",{className:ne.a.backgroundAnimation1}),i.a.createElement("div",{className:ne.a.backgroundAnimation2}),i.a.createElement("div",{className:ne.a.backgroundAnimation3}),i.a.createElement("div",{className:ne.a.backgroundAnimation4}),i.a.createElement("div",{className:ne.a.backgroundAnimation5}),i.a.createElement("div",{className:ne.a.backgroundAnimation6}),i.a.createElement("div",{className:ne.a.backgroundAnimation7}),i.a.createElement("div",{className:ne.a.backgroundAnimation8}),i.a.createElement("div",{className:ne.a.backgroundAnimation9}),i.a.createElement("div",{className:ne.a.backgroundAnimation10}),i.a.createElement("div",{className:ne.a.backgroundAnimation11}),i.a.createElement("div",{className:ne.a.backgroundAnimation12}))}}]),t}(i.a.Component),ae=function(e){Object(u.a)(t,e);var n=Object(m.a)(t);function t(){var e;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=n.call.apply(n,[this].concat(i))).state={menuVisible:!1,pageViews:[{name:"About Me",inView:!0},{name:"Projects",inView:!1},{name:"Resume",inView:!1},{name:"Connect",inView:!1}]},e.toggleMenu=function(){e.setState({menuVisible:!e.state.menuVisible})},e.openMenu=function(){e.setState({menuVisible:!0})},e.closeMenu=function(){e.setState({menuVisible:!1})},e.changePageView=function(n){for(var t=Object(s.a)(e.state.pageViews),a=0;a<t.length;++a)t[a].inView=a===n;e.setState({pageViews:t,menuVisible:!1})},e}return Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{overflow:"hidden"}},i.a.createElement(te,null),i.a.createElement(L,{toggleMenu:this.toggleMenu,menuVisible:this.state.menuVisible}),i.a.createElement(E,{visible:this.state.menuVisible,closeMenu:this.closeMenu,pageViews:this.state.pageViews,changePageView:this.changePageView}),i.a.createElement("div",{className:_.a.pageViewContainer,key:JSON.stringify(this.state.pageViews),id:"pageViewContainer"},this.state.pageViews[0].inView&&i.a.createElement(A,null),this.state.pageViews[1].inView&&i.a.createElement(U,null),this.state.pageViews[2].inView&&i.a.createElement(Q,null),this.state.pageViews[3].inView&&i.a.createElement(Z,null)))}}]),t}(i.a.Component);function ie(){return i.a.createElement(ae,null)}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[32,1,2]]]);
//# sourceMappingURL=main.2b2e7fc4.chunk.js.map