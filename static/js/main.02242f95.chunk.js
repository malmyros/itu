(this.webpackJsonpitu=this.webpackJsonpitu||[]).push([[0],{15:function(e,t,a){e.exports=a(25)},20:function(e,t,a){},22:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(9),c=a.n(o),s=(a(20),a(10)),i=a(11),l=a(13),m=a(14),u=(a(21),a(22),a(27)),h=a(28),d=a(29),f=a(30),p=a(31),E=a(12),v=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onLoadData=function(){var e=n.state,t=e.term,a=e.offset,r=e.limit;fetch("https://itunes.apple.com/search?term=".concat(t,"&entity=musicArtist,album,musicTrack&offset=").concat(a,"&limit=").concat(r),{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){n.setState({results:n.state.results.concat(e.results),offset:n.state.offset+25,limit:n.state.limit+25})}))},n.onChangeTerm=function(e){n.setState({term:e.target.value})},n.onSearch=function(){n.setState({results:[],offset:0,limit:25},(function(){return n.onLoadData()}))},n.state={results:[],term:"U2",offset:0,limit:25},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.onLoadData()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,{color:"light",light:!0,expand:"md"},r.a.createElement(h.a,{href:"/"},"Itunes"),r.a.createElement(d.a,{value:this.state.term||"",onChange:this.onChangeTerm}),r.a.createElement(f.a,{color:"secondary",onClick:this.onSearch},"Search")),r.a.createElement(p.a,null,r.a.createElement("ul",null,r.a.createElement(E.a,{dataLength:this.state.results.length,next:this.onLoadData,hasMore:!0,loader:r.a.createElement("h4",null,"Loading...")},this.state.results.map((function(e,t){return r.a.createElement("li",{key:"result-".concat(t)},r.a.createElement("img",{alt:e.trackName,src:e.artworkUrl100}),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"track-name"},e.trackName),r.a.createElement("div",{className:"artist-name"},e.artistName),r.a.createElement("div",{className:"genre"},e.primaryGenreName),r.a.createElement("div",{className:"release-date"},e.releaseDate),r.a.createElement("audio",{src:e.previewUrl,controls:!0},"Your browser does not support the audio element.")))}))))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.02242f95.chunk.js.map