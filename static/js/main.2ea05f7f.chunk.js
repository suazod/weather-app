(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{24:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(0),c=a.n(n),s=a(12),i=a.n(s),l=(a(24),a(13)),h=a(14),d=a(15),o=a(8),j=a(18),m=a(17),y=a.p+"static/media/weather-app-bg_1.0a73005a.png",u=a(35),b=a(36),x=a(16),p=a(37),O=a(38),w=a(34);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var v=n.createElement("defs",null,n.createElement("line",{id:"ray",x1:-5,x2:5}),n.createElement("clipPath",{id:"cp"},n.createElement("rect",{x:-200,y:-150,width:400,height:150}))),N=n.createElement("line",{id:"line",x1:-76,x2:76}),F=n.createElement("g",{id:"sun",clipPath:"url(#cp)"},n.createElement("g",{id:"mover"},n.createElement("circle",{id:"main",r:50}),n.createElement("g",{id:"eyes"},n.createElement("circle",{r:3,cx:-13}),n.createElement("circle",{r:3,cx:13})),n.createElement("g",{id:"rays"},n.createElement("use",{xlinkHref:"#ray",transform:"rotate(315) translate(70)"}),n.createElement("use",{xlinkHref:"#ray",transform:"rotate(270) translate(70)"}),n.createElement("use",{xlinkHref:"#ray",transform:"rotate(225) translate(70)"}),n.createElement("use",{xlinkHref:"#ray",transform:"rotate(180) translate(70)"}),n.createElement("use",{xlinkHref:"#ray",transform:"rotate(135) translate(70)"}),n.createElement("use",{xlinkHref:"#ray",transform:"rotate(90) translate(70)"}),n.createElement("use",{xlinkHref:"#ray",transform:"rotate(45) translate(70)"}),n.createElement("use",{xlinkHref:"#ray",transform:"rotate(0) translate(70)"}))));function S(e,t){var a=e.title,r=e.titleId,c=g(e,["title","titleId"]);return n.createElement("svg",f({id:"sun",viewBox:"-200 -150 400 300",ref:t,"aria-labelledby":r},c),a?n.createElement("title",{id:r},a):null,v,N,F)}var C=n.forwardRef(S),W=(a.p,a(7)),E=a.n(W);var T=function(){return Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col",children:Object(r.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Sorry city not found. Please try again."})})})})},D=function(e){Object(j.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(h.a)(this,a),(r=t.call(this,e)).state={error:!1,isLoaded:!1,isChecked:!0,units:"imperial",lat:"32.779167",lon:"-96.808891",currentWeatherLocationCity:"Dallas",currentWeatherLocationState:"TX",currentWeather:"",currentWeatherDesc:"",currentWeatherDate:"",currentWeatherIcon:"",searchCity:"",searchState:"",currentWeatherWind:"",dayOne:"",dayOneIcon:"",dayOneDay:"",dayTwo:"",dayTwoIcon:"",dayTwoDay:"",dayThree:"",dayThreeIcon:"",dayThreeDay:"",dayFour:"",dayFourIcon:"",dayFourDay:"",dayFive:"",dayFiveIcon:"",dayFiveDay:""},r.handleUnitChange=r.handleUnitChange.bind(Object(o.a)(r)),r.handleSearchBy=r.handleSearchBy.bind(Object(o.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(o.a)(r)),r}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.showWeather(this.state.units,this.state.lat,this.state.lon)}},{key:"handleUnitChange",value:function(e){e.target.checked?this.showWeather("imperial",this.state.lat,this.state.lon):this.showWeather("metric",this.state.lat,this.state.lon),this.setState({isChecked:e.target.checked,units:e.target.checked?"imperial":"metric"})}},{key:"showWeather",value:function(e,t,a){var r=this;this.setState({isLoaded:!1}),fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t,"&lon=").concat(a,"&units=").concat(e,"&exclude=hourly,minutely,alerts&appid=").concat("db990b6b2811f59e9a71a690f6f31b3f"),{method:"GET",headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=e;r.setState({currentWeather:parseFloat(t.current.temp).toFixed(),currentWeatherDesc:t.current.weather[0].description,currentWeatherDate:E.a.unix(t.current.dt).format("dddd, MMM Do, YYYY"),currentWeatherWind:parseFloat(t.current.wind_speed).toFixed(),currentWeatherIcon:t.current.weather[0].icon,dayOne:parseFloat(t.daily[0].temp.max).toFixed(),dayOneIcon:t.daily[0].weather[0].icon,dayOneDay:E.a.unix(t.daily[0].dt).format("ddd"),dayTwo:parseFloat(t.daily[1].temp.max).toFixed(),dayTwoIcon:t.daily[1].weather[0].icon,dayTwoDay:E.a.unix(t.daily[1].dt).format("ddd"),dayThree:parseFloat(t.daily[2].temp.max).toFixed(),dayThreeIcon:t.daily[2].weather[0].icon,dayThreeDay:E.a.unix(t.daily[2].dt).format("ddd"),dayFour:parseFloat(t.daily[3].temp.max).toFixed(),dayFourIcon:t.daily[3].weather[0].icon,dayFourDay:E.a.unix(t.daily[3].dt).format("ddd"),dayFive:parseFloat(t.daily[4].temp.max).toFixed(),dayFiveIcon:t.daily[4].weather[0].icon,dayFiveDay:E.a.unix(t.daily[4].dt).format("ddd"),isLoaded:!0})}))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("https://api.openweathermap.org/geo/1.0/direct?q=".concat(this.state.searchCity,",").concat(this.state.searchState,",us&appid=").concat("db990b6b2811f59e9a71a690f6f31b3f"),{method:"GET",headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){var a=e;a.length>0&&"US"===a[0].country?(t.setState({lat:a[0].lat,lon:a[0].lon,currentWeatherLocationCity:a[0].name,currentWeatherLocationState:a[0].state,searchCity:"",searchState:"",error:!1}),t.showWeather(t.state.units,a[0].lat,a[0].lon)):t.setState({error:!0,searchCity:"",searchState:""})}))}},{key:"handleSearchBy",value:function(e){var t=e.target.name;this.setState(Object(l.a)({},t,e.target.value))}},{key:"render",value:function(){return Object(r.jsx)("div",{className:"weather-container",children:Object(r.jsxs)("div",{className:"weather-inner",children:[Object(r.jsx)(C,{}),Object(r.jsxs)("div",{className:"current-weather",children:[Object(r.jsxs)("span",{className:"current-weather-location",children:[Object(r.jsx)(w.a,{}),this.state.currentWeatherLocationCity,", ",this.state.currentWeatherLocationState]}),Object(r.jsx)("span",{className:"current-weather-date",children:this.state.currentWeatherDate})]}),Object(r.jsxs)("div",{className:"weather-inner-widget",children:[Object(r.jsxs)("div",{className:"current-weather-info",children:[Object(r.jsxs)("div",{className:"current-weather-information",children:[Object(r.jsxs)("span",{className:"current-weather-info-degree",children:[this.state.currentWeather,Object(r.jsx)("span",{children:"\xb0"})]}),Object(r.jsx)("span",{className:"current-weather-info-icon",children:Object(r.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(this.state.currentWeatherIcon,".png"),alt:"weather icon"})}),Object(r.jsxs)("span",{className:"current-weather-info-text",children:[Object(r.jsx)("span",{children:this.state.currentWeatherDesc})," ",Object(r.jsxs)("span",{children:[this.state.currentWeatherWind," mph"]})]})]}),Object(r.jsx)("div",{className:"weather-toggle",children:Object(r.jsxs)("label",{className:"switch",children:[Object(r.jsx)("input",{type:"checkbox",id:"togBtn",onChange:this.handleUnitChange,checked:this.state.isChecked}),Object(r.jsx)("div",{className:"slider round",children:Object(r.jsx)("span",{className:"celci"})})]})})]}),Object(r.jsx)("img",{className:"weather-bg-img",src:y,alt:"weather app"}),Object(r.jsx)("div",{className:"forecast-container",children:Object(r.jsx)(u.a,{children:Object(r.jsxs)(b.a,{children:[Object(r.jsxs)(x.a,{className:"day-one",children:[Object(r.jsx)("div",{className:"weather-day",children:this.state.dayOneDay}),Object(r.jsx)("div",{className:"weather-icon",children:Object(r.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(this.state.dayOneIcon,".png"),alt:"weather icon"})}),Object(r.jsxs)("div",{className:"weather-degree",children:[this.state.dayOne,Object(r.jsx)("span",{children:"\xb0"})]})]}),Object(r.jsxs)(x.a,{className:"day-two",children:[Object(r.jsx)("div",{className:"weather-day",children:this.state.dayTwoDay}),Object(r.jsx)("div",{className:"weather-icon",children:Object(r.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(this.state.dayTwoIcon,".png"),alt:"weather icon"})}),Object(r.jsxs)("div",{className:"weather-degree",children:[this.state.dayTwo,Object(r.jsx)("span",{children:"\xb0"})]})]}),Object(r.jsxs)(x.a,{className:"day-three",children:[Object(r.jsx)("div",{className:"weather-day",children:this.state.dayThreeDay}),Object(r.jsx)("div",{className:"weather-icon",children:Object(r.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(this.state.dayThreeIcon,".png"),alt:"weather icon"})}),Object(r.jsxs)("div",{className:"weather-degree",children:[this.state.dayThree,Object(r.jsx)("span",{children:"\xb0"})]})]}),Object(r.jsxs)(x.a,{className:"day-four",children:[Object(r.jsx)("div",{className:"weather-day",children:this.state.dayFourDay}),Object(r.jsx)("div",{className:"weather-icon",children:Object(r.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(this.state.dayFourIcon,".png"),alt:"weather icon"})}),Object(r.jsxs)("div",{className:"weather-degree",children:[this.state.dayFour,Object(r.jsx)("span",{children:"\xb0"})]})]}),Object(r.jsxs)(x.a,{className:"day-five",children:[Object(r.jsx)("div",{className:"weather-day",children:this.state.dayFiveDay}),Object(r.jsx)("div",{className:"weather-icon",children:Object(r.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(this.state.dayFiveIcon,".png"),alt:"weather icon"})}),Object(r.jsxs)("div",{className:"weather-degree",children:[this.state.dayFive,Object(r.jsx)("span",{children:"\xb0"})]})]})]})})})]}),Object(r.jsx)("div",{className:"search-form",children:Object(r.jsx)(p.a,{onSubmit:this.handleSubmit,children:Object(r.jsxs)(p.a.Row,{className:"justify-content-md-center",children:[Object(r.jsxs)(x.a,{xs:"auto",children:[Object(r.jsx)(p.a.Label,{htmlFor:"byCity",srOnly:!0,children:"City"}),Object(r.jsx)(p.a.Control,{className:"mb-2",id:"byCity",name:"searchCity",placeholder:"City",value:this.state.searchCity,onChange:this.handleSearchBy,required:!0}),Object(r.jsx)(p.a.Text,{className:"text-muted",children:"Example: Houston"})]}),Object(r.jsxs)(x.a,{xs:"auto",children:[Object(r.jsx)(p.a.Label,{htmlFor:"byState",srOnly:!0,children:"State"}),Object(r.jsx)(p.a.Control,{className:"mb-2",id:"byState",placeholder:"State",name:"searchState",value:this.state.searchState,onChange:this.handleSearchBy,required:!0}),Object(r.jsx)(p.a.Text,{className:"text-muted",children:"Example: TX"})]}),Object(r.jsxs)(x.a,{xs:"auto",children:[Object(r.jsxs)(O.a,{type:"submit",className:"mb-2",children:[Object(r.jsx)(w.a,{})," Change location"]}),Object(r.jsx)(p.a.Text,{className:"text-muted",children:"U.S. cities only"})]})]})})}),this.state.error?Object(r.jsx)(T,{}):null]})})}}]),a}(n.Component);a(29),a(30);var k=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(D,{})})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,39)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(k,{})}),document.getElementById("root")),I()}},[[31,1,2]]]);
//# sourceMappingURL=main.2ea05f7f.chunk.js.map