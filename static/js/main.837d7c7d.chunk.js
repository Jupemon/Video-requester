(this["webpackJsonpvideo-requester"]=this["webpackJsonpvideo-requester"]||[]).push([[0],{29:function(e,t,a){e.exports=a(45)},35:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),o=a.n(c),l=(a(34),a(35),a(27)),s=a(9),i=a(3),u=a(4),d=a(6),p=a(5),m=a(7),f=a(46),h=a(11),v=a.n(h),g=a(16),E=a(26),b=function(e){return r.a.createElement(E.GoogleLogin,{disabled:e.isLoading,clientId:"98482845921-f04ihoooddtbgl0fjapqc782bo3s6kdp.apps.googleusercontent.com",buttonText:e.isLoading?"Loading...":"Login",onSuccess:function(t){e.logIn(t)},onFailure:function(){e.logInFailure()},cookiePolicy:"single_host_origin"})},y=(a(37),a(47)),O=a(48),j=a(49),q=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!1,errorMessage:"",data:!1},a.fetchData=function(){var e=Object(g.a)(v.a.mark((function e(t){var n,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isLoading:!0}),n=t.tokenId,e.next=4,fetch("".concat("https://requstenator-server.herokuapp.com","/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token_id:n})});case 4:if(200!==(r=e.sent).status&&201!==r.status){e.next=13;break}return e.next=8,r.json();case 8:c=e.sent,window.localStorage.setItem("token_id",n),a.props.loadProfile(c),e.next=14;break;case 13:a.setState({errorMessage:"Couldn't sign in"});case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.errorMessage,a=e.isLoading,n=e.data;return n?n?r.a.createElement("div",null):void 0:r.a.createElement("div",{className:"Content"},r.a.createElement(f.a,null,r.a.createElement(y.a,null,r.a.createElement("h1",{style:{fontSize:"85px"},className:"display-4"},"Vregs"),r.a.createElement("p",{className:"lead"},"Allows youtubers to get video requests and sell custom video content"),r.a.createElement("hr",{className:"my-4"}),r.a.createElement(b,{isLoading:a,logInFailure:this.logInFailure,logIn:this.fetchData}),r.a.createElement("p",{style:{color:"red"}},t)),r.a.createElement(O.a,null,r.a.createElement(j.a,null,r.a.createElement("div",{className:"box-1"},r.a.createElement("i",{style:{marginBottom:"25px"},className:"fas fa-user-plus fa-4x"}),r.a.createElement("h1",{className:"display-4"},"1. Sign in"),r.a.createElement("p",{className:"lead"},"Setup your account by signing in with your youtube/google account"))),r.a.createElement(j.a,null,r.a.createElement("div",{className:"box-2"},r.a.createElement("i",{style:{marginBottom:"25px"},className:"fas fa-upload fa-4x"}),r.a.createElement("h1",{className:"display-4"},"2. Setup your account"),r.a.createElement("p",{className:"lead"},"Setup your account and start accepting custom video requests"))),r.a.createElement(j.a,null,r.a.createElement("div",{className:"box-3"},r.a.createElement("i",{style:{marginBottom:"25px"},className:"fas fa-dollar-sign fa-4x"}),r.a.createElement("h1",{className:"display-4"},"3. Gain revenue"),r.a.createElement("p",{className:"lead"},"Fullfill custom video requests and gain revenue"))))))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.video_price,a=e.currency;return r.a.createElement("div",null,r.a.createElement("b",null,t," ",a)," | Edit Price")}}]),t}(n.Component),w=a(53),x=(a(38),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onboarding_completed,a=e.google_consent,n=e.token_id;return a?t?null:r.a.createElement("div",{className:"setup-profile"},r.a.createElement(y.a,null,r.a.createElement("h1",null,"Integrade stripe"),r.a.createElement("p",null,"Follow the instructions given here to create a stripe onboarding account, this will allow you to collect payments from you viewers"),r.a.createElement("p",null,r.a.createElement(w.a,{href:"".concat("https://requstenator-server.herokuapp.com","/handle-onboarding/").concat(n),variant:"primary"},"Integrade stripe")))):r.a.createElement("div",{className:"setup-profile"},r.a.createElement(y.a,null,r.a.createElement("h1",null,"Google consent"),r.a.createElement("p",null,"Click The button to give consent to the application access to your youtube account."),r.a.createElement("p",null,r.a.createElement(w.a,{href:"".concat("https://requstenator-server.herokuapp.com","/handle-consent/").concat(n),variant:"primary"},"Google Consent"))))}}]),t}(n.Component)),S=(n.Component,function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.profile,t=e.channel_name,a=e.user_id,n=e.onboarding_completed,c=e.google_consent,o=e.video_price,l=e.currency;console.log("PROOOOOOPS",this.props.profile);var s=window.localStorage.getItem("token_id");return r.a.createElement("div",null,r.a.createElement(x,{onboarding_completed:n,google_consent:c,token_id:s}),r.a.createElement(y.a,null,r.a.createElement("h1",null,"Hello, ",t),r.a.createElement("hr",null),r.a.createElement("p",null,"People can now request custom youtube videos from you using this shareable ",r.a.createElement("a",{target:"blank",href:"http://localhost:3000/viewprofile/".concat(a)},"link")),r.a.createElement("p",null,"the price for leaving a custom video request is currently : ",r.a.createElement(k,{video_price:o,currency:l}))))}}]),t}(n.Component)),I=a(52),R=(a(39),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={placeHolder:"Enter a youtube URL",input:"",loading:!1,file:""},a.sendRequest=function(){var e=Object(g.a)(v.a.mark((function e(t){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0}),e.next=3,fetch("".concat("https://requstenator-server.herokuapp.com","/fulfillvideorequest"),{method:"POST",body:t});case 3:if(200!==(n=e.sent).status){e.next=12;break}return e.next=7,n.json();case 7:r=e.sent,a.setState({loading:!1}),a.props.updateRequests(r),e.next=13;break;case 12:a.setState({input:"",placeHolder:"Something went wrong",loading:!1});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleClick=function(){var e=a.props.requestId,t=window.localStorage.getItem("token_id"),n=new FormData;n.append("video",a.state.file),n.append("name","JOHNSON"),n.append("requestId",e),n.append("token_id",t),a.sendRequest(n)},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=(t.input,t.placeHolder,t.loading);return a?r.a.createElement("div",null,r.a.createElement(w.a,{disabled:!0},"Loading...")):r.a.createElement("div",null,r.a.createElement(w.a,{disabled:a,onClick:function(){e.props.cancel()},variant:"danger"},"Cancel"),r.a.createElement(w.a,{disabled:a,variant:"success",onClick:function(){e.handleClick()}},"Fulfill"),r.a.createElement("input",{disabled:a,type:"file",id:"video",onChange:function(t){e.setState({file:t.target.files[0]})}}))}}]),t}(n.Component)),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={error:"",loading:!1,rejected:!1},a.fetchData=function(){var e=Object(g.a)(v.a.mark((function e(t,n){var r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0}),e.next=3,fetch("".concat("https://requstenator-server.herokuapp.com","/rejectvideorequest"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token_id:t,requestId:n})});case 3:if(200!==(r=e.sent).status){e.next=12;break}return a.setState({loading:!1}),e.next=8,r.json();case 8:c=e.sent,a.props.updateRequests(c),e.next=13;break;case 12:a.setState({loading:!1,error:"Failed to update"});case 13:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a.handleClick=function(){var e=window.localStorage.getItem("token_id"),t=a.props.requestId;a.fetchData(e,t)},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.loading,n=t.rejected;return a?r.a.createElement(w.a,{disabled:!0,variant:"warning"},"Loading"):n?r.a.createElement("div",null,"Rejected"):r.a.createElement("div",null,r.a.createElement("div",null,"Are you sure?"),r.a.createElement(w.a,{onClick:function(){e.handleClick()},variant:"success"},"Yes"),r.a.createElement(w.a,{onClick:function(){e.props.cancel()},variant:"danger"},"Cancel"))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={accepted:void 0},a.cancel=function(){a.setState({accepted:void 0})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state.accepted;return!0===t?r.a.createElement(R,{updateRequests:this.props.updateRequests,cancel:this.cancel,requestId:this.props.requestId}):!1===t?r.a.createElement(C,{updateRequests:this.props.updateRequests,cancel:this.cancel,requestId:this.props.requestId}):r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(w.a,{onClick:function(){e.setState({accepted:!1})},variant:"danger"},"Reject"),r.a.createElement(w.a,{onClick:function(){e.setState({accepted:!0})},variant:"success"},"Accept"))}}]),t}(n.Component),T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={},a.loadPlayer=function(){a.setState({loading:!1});var e=a.props,t=e.videoId,n=e.requestId;a.player=new window.YT.Player("youtube-player-".concat(n),{height:"390",width:"390",videoId:t,events:{onReady:a.onPlayerReady}})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.loadPlayer()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"youtube-player-".concat(this.props.requestId)}))}}]),t}(n.Component),L=function(e){var t=e.status;return r.a.createElement("div",{className:"status"},t.toUpperCase())},_=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).setBackground=function(e){return"pending"===e?"warning":"rejected"===e?"danger":"fulfilled"===e?"success":"uploading"===e?"info":"failed"===e?"dark":void 0};var n=a.props.data,r=n.status,c=n.video;return a.state={status:r,videoId:c},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.title,a=e.description,n=e.requester,c=e.request_id,o=this.props.viewOnly,l=this.state,s=l.status,i=l.videoId;return r.a.createElement(I.a,{bg:this.setBackground(s)},r.a.createElement(I.a.Body,null,i?r.a.createElement(T,{requestId:c,videoId:i}):r.a.createElement(L,{status:s}),r.a.createElement(I.a.Text,null,"FROM : ",n),r.a.createElement(I.a.Title,null,t),r.a.createElement(I.a.Text,null,a),o||"pending"!==s?null:r.a.createElement(N,{updateRequests:this.props.updateRequests,requestId:c})))}}]),t}(n.Component),P=function(e){var t=e.status,a=t.pending,n=t.fulfilled,c=t.rejected,o=t.uploading,l=t.failed,s=t.total;return r.a.createElement(I.a,{style:{width:"25rem"}},r.a.createElement(I.a.Body,null,r.a.createElement(I.a.Title,null,"Videorequests"),r.a.createElement(I.a.Text,null,"TOTAL ".concat(s," / ").concat(10)),r.a.createElement(I.a.Text,null,"PENDING ".concat(a)),r.a.createElement(I.a.Text,null,"FULFILLED ".concat(n)),r.a.createElement(I.a.Text,null,"REJECTED ".concat(c)),r.a.createElement(I.a.Text,null,"UPLOADING ".concat(o)),r.a.createElement(I.a.Text,null,"FAILED ".concat(l))))},A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={errorMessage:"",youtubeLoaded:!1},a.youtubeLoaded=function(){a.setState({youtubeLoaded:!0})},a.loadYoutubeScripts=function(){var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t),window.onYouTubeIframeAPIReady=a.youtubeLoaded},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.loadYoutubeScripts()}},{key:"render",value:function(){var e=this,t=this.props,a=t.viewOnly,n=t.videoRequests,c=n.requests,o=n.status;return console.log(n,"THESE"),this.state.youtubeLoaded?r.a.createElement(O.a,null,r.a.createElement(j.a,null,r.a.createElement(P,{status:o})),c.map((function(t){return r.a.createElement(j.a,{key:t.request_id,style:{marginBottom:"20px"}},r.a.createElement(_,{updateRequests:e.props.updateRequests,viewOnly:a,data:t}))}))):r.a.createElement("div",null,"Loading")}}]),t}(n.Component),M=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={profile:!1},a.loadProfile=function(e){a.setState({profile:e})},a.updateRequests=function(e){var t=a.state.profile;t.videoRequests=e,a.setState({profile:t})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.profile,t=e.videoRequests,a=e.user_id;return e?r.a.createElement(f.a,null,r.a.createElement(S,{profile:e}),r.a.createElement(A,{updateRequests:this.updateRequests,videoRequests:t,userId:a})):r.a.createElement(f.a,null,r.a.createElement(q,{loadProfile:this.loadProfile}))}}]),t}(n.Component),D=function(){return r.a.createElement("div",null,"Page Not found")},F=a(50),B=a(51),H=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={infoMessage:"",loading:!1,requester:"",title:"",description:""},a.sendVideoRequest=function(){var e=Object(g.a)(v.a.mark((function e(t){var n,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://requstenator-server.herokuapp.com","/handle-checkout"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:if(n=e.sent,a.clearInput(),201!==n.status){e.next=13;break}return e.next=8,n.json();case 8:c=e.sent,a.setState({loading:!1,infoMessage:"New videorequest added"}),a.props.updateRequests(c),e.next=22;break;case 13:if(200!==n.status){e.next=21;break}return e.next=16,n.json();case 16:r=e.sent,window.Stripe("pk_test_DOEkIFRqbKXBqWg0ykobHYQP00nEaxN5cb").redirectToCheckout({sessionId:r}),e.next=22;break;case 21:throw"Fetch failed";case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(0),console.log(e.t0,"ERROR HERE"),a.setState({loading:!1,infoMessage:"Something went wrong"});case 28:case"end":return e.stop()}}),e,null,[[0,24]])})));return function(t){return e.apply(this,arguments)}}(),a.clearInput=function(){a.setState({requester:"",title:"",description:""})},a.validateInput=function(){var e=a.state,t=e.title,n=e.description;return t.length>0&&n.length>0},a.handleClick=function(){var e=a.props.userId,t=a.state,n=t.title,r=t.description,c=t.requester;if(a.validateInput()){var o={requester:c,title:n,description:r,user_id:Number.parseInt(e)};a.setState({loading:!0}),a.sendVideoRequest(o)}else a.setState({infoMessage:"Invalid input"})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.videoPrice,n=t.currency,c=this.state,o=c.loading,l=c.title,s=c.description,i=c.requester,u=c.infoMessage;return r.a.createElement(y.a,null,r.a.createElement(O.a,null,r.a.createElement(j.a,null,r.a.createElement("h1",null,"Request a custom video :"),r.a.createElement("p",null,"You can support ",r.a.createElement("b",null,"Jupemon")," by requesting a custom youtube video from him for ",r.a.createElement("b",null,a," ",n))),r.a.createElement(j.a,null,r.a.createElement(F.a,{className:"mb-3"},r.a.createElement(F.a.Append,null,r.a.createElement(F.a.Text,{id:"basic-addon2"},"Requester")),r.a.createElement("input",{type:"text",placeholder:"Enter your name/username",disabled:o,onChange:function(t){e.setState({requester:t.target.value})},value:i,maxLength:"25"})),r.a.createElement(F.a,{className:"mb-3"},r.a.createElement(F.a.Append,null,r.a.createElement(F.a.Text,{id:"basic-addon2"},"Title")),r.a.createElement("input",{type:"text",placeholder:"Title for your request",disabled:o,onChange:function(t){e.setState({title:t.target.value})},value:l,maxLength:"25"})),r.a.createElement(F.a,null,r.a.createElement(F.a.Prepend,null,r.a.createElement(F.a.Text,null,"Description")),r.a.createElement("textarea",{placeholder:"Describe the custom video you would like..",type:"textarea",disabled:o,onChange:function(t){e.setState({description:t.target.value})},value:s,maxLength:"250"})),r.a.createElement(F.a,null,r.a.createElement(F.a.Prepend,null,r.a.createElement(w.a,{onClick:function(){e.handleClick()},disabled:o,variant:"outline-secondary"},o?r.a.createElement(B.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):"Request"),r.a.createElement("p",null,u))))))}}]),t}(n.Component),J=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,videoRequests:!1,errorMessage:""},a.getUserId=function(e){return e.split("viewprofile/")[1]},a.fetchVideoRequests=function(){var e=Object(g.a)(v.a.mark((function e(t){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://requstenator-server.herokuapp.com","/videorequests/").concat(t));case 3:if(200!==(n=e.sent).status){e.next=11;break}return e.next=7,n.json();case 7:r=e.sent,a.setState({videoRequests:r,loading:!1}),e.next=12;break;case 11:a.setState({error:!0,errorMessage:"Profile doesn't exist",loading:!1});case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),a.setState({error:!0,errorMessage:"Could not get profile",loading:!1});case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),a.updateRequests=function(e){a.setState({videoRequests:e})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.getUserId(window.location.href);this.fetchVideoRequests(e)}},{key:"render",value:function(){var e=this.getUserId(window.location.href),t=this.state,a=t.videoRequests,n=t.loading,c=t.errorMessage;if(n)return r.a.createElement("div",null,"Loading");if(a){var o=a.videoPrice,l=a.currency;return r.a.createElement(f.a,null,r.a.createElement(H,{updateRequests:this.updateRequests,userId:e,currency:l,videoPrice:o}),r.a.createElement(A,{updateRequests:this.updateRequests,viewOnly:!0,videoRequests:a}))}return r.a.createElement("div",null,c)}}]),t}(n.Component);var U=function(){return r.a.createElement(l.a,{basename:"/video-requester"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(M,null)),r.a.createElement(s.a,{path:"/viewprofile"},r.a.createElement(J,null)),r.a.createElement(s.a,{component:D})))};o.a.render(r.a.createElement(U,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.837d7c7d.chunk.js.map