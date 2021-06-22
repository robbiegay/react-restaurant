(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(7),i=a.n(s),r=(a(13),a(14),a(17),a(1)),c=a(2),o=a(4),m=a(3),d=a(5),u=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).restFirstName=["Robbie's","Hometown","Local","Pretty Decent","Organic"],a.restSecondName=["Yummy Stuff","Inventions","Food","Plates","Experience","Snacks","Express"],a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"randomName",value:function(){var e=Math.floor(5*Math.random()),t=Math.floor(7*Math.random());return l.a.createElement("h1",{className:"text-primary"},this.restFirstName[e]," ",this.restSecondName[t])}},{key:"randomHours",value:function(){var e=6+Math.floor(5*Math.random()),t=Math.floor(6*Math.random());return l.a.createElement("h2",null,"Hours: ",e,"am \u2013 ",e-t,"pm")}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.randomName(),l.a.createElement("h2",{className:"text-secondary"},"348 E. Main St., Lexington, KY"),this.randomHours())}}]),t}(l.a.Component),h=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},this.props.mealTitle),l.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},this.props.mealPrice),l.a.createElement("p",{className:"card-text"},this.props.mealDescription)))}}]),t}(l.a.Component),p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={menuItems:"Generic Food"},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"getMenuItems",value:function(){for(var e=[],t=this,a=0;a<2;a++)fetch("https://entree-f18.herokuapp.com/v1/menu/12").then((function(a){a.json().then((function(a){for(var n in a.menu_items)e.push(a.menu_items[n]);if(24===e.length){localStorage.setItem("menu",JSON.stringify(e));try{t.setState({menuItems:JSON.parse(window.localStorage.menu)})}catch(l){console.log("Error parsing JSON: ".concat(l))}}}))}))}},{key:"componentDidMount",value:function(){if(window.localStorage.length)try{this.setState({menuItems:JSON.parse(window.localStorage.menu)})}catch(e){console.log("Error parsing JSON: ".concat(e))}else this.getMenuItems()}},{key:"setPrice",value:function(e){return"$".concat(Math.ceil(5*Math.random())+[5,10,15][e])}},{key:"getText",value:function(e,t){if("Generic Food"!==this.state.menuItems){var a=this.state.menuItems[t].description.split(" ");if("title"===e)return a[0]+" "+a[1][0].toUpperCase()+a[1].slice(1);var n=a[0].length+1,l=this.state.menuItems[t].description.slice(n);return l[0].toUpperCase()+l.slice(1)}}},{key:"genItem",value:function(e,t){return l.a.createElement(h,{mealTitle:this.getText("title",e),mealPrice:this.setPrice(t),mealDescription:this.getText("des",e)})}},{key:"render",value:function(){return window.localStorage.length?l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",{className:"nav nav-pills nav-justified mb-3",id:"pills-tab",role:"tablist"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active",id:"apps-tab","data-toggle":"pill",href:"#pills-apps",role:"tab","aria-controls":"pills-apps","aria-selected":"true"},"Appetizers")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",id:"lunch-tab","data-toggle":"pill",href:"#pills-lunch",role:"tab","aria-controls":"pills-lunch","aria-selected":"false"},"Lunch")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",id:"snacks-tab","data-toggle":"pill",href:"#pills-snacks",role:"tab","aria-controls":"pills-snacks","aria-selected":"false"},"Snacks")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",id:"dinner-tab","data-toggle":"pill",href:"#pills-dinner",role:"tab","aria-controls":"pills-dinner","aria-selected":"false"},"Dinner")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",id:"secondDinner-tab","data-toggle":"pill",href:"#pills-secondDinner",role:"tab","aria-controls":"pills-secondDinner","aria-selected":"false"},"Second Dinner"))),l.a.createElement("div",{className:"tab-content",id:"pills-tabContent"},l.a.createElement("div",{className:"tab-pane fade show active",id:"pills-apps",role:"tabpanel","aria-labelledby":"apps-tab"},this.genItem(0,0),this.genItem(1,0),this.genItem(2,0),this.genItem(3,1),this.genItem(4,0)),l.a.createElement("div",{className:"tab-pane fade",id:"pills-lunch",role:"tabpanel","aria-labelledby":"lunch-tab"},this.genItem(5,1),this.genItem(6,1),this.genItem(7,2),this.genItem(8,1),this.genItem(9,2),this.genItem(10,1)),l.a.createElement("div",{className:"tab-pane fade",id:"pills-snacks",role:"tabpanel","aria-labelledby":"snacks-tab"},this.genItem(11,0),this.genItem(12,0),this.genItem(13,1),this.genItem(14,0),this.genItem(15,0)),l.a.createElement("div",{className:"tab-pane fade",id:"pills-dinner",role:"tabpanel","aria-labelledby":"dinner-tab"},this.genItem(16,2),this.genItem(17,1),this.genItem(18,2),this.genItem(19,2)),l.a.createElement("div",{className:"tab-pane fade",id:"pills-secondDinner",role:"tabpanel","aria-labelledby":"secondDinner-tab"},this.genItem(20,1),this.genItem(21,2),this.genItem(22,2),this.genItem(23,2)))):l.a.createElement("div",null,"loading...")}}]),t}(l.a.Component),b=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-0 col-sm-0 col-md-1 col-lg-2"}),l.a.createElement("div",{className:"col-12 col-sm-12 col-md-10 col-lg-8 text-center"},l.a.createElement(u,null),l.a.createElement(p,null)),l.a.createElement("div",{className:"col-0 col-sm-0 col-md-1 col-lg-2"}))))}}]),t}(l.a.Component);a(18);var g=function(){return l.a.createElement(b,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(19)}},[[8,1,2]]]);
//# sourceMappingURL=main.907b1528.chunk.js.map