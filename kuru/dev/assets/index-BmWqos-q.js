(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const gd="modulepreload",_d=function(i,t){return new URL(i,t).href},kc={},xd=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){let c=function(h){return Promise.all(h.map(f=>Promise.resolve(f).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");s=c(e.map(h=>{if(h=_d(h,n),h in kc)return;kc[h]=!0;const f=h.endsWith(".css"),u=f?'[rel="stylesheet"]':"";if(n)for(let m=a.length-1;m>=0;m--){const x=a[m];if(x.href===h&&(!f||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${u}`))return;const d=document.createElement("link");if(d.rel=f?"stylesheet":gd,f||(d.as="script"),d.crossOrigin="",d.href=h,l&&d.setAttribute("nonce",l),document.head.appendChild(d),f)return new Promise((m,x)=>{d.addEventListener("load",m),d.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})},ku=[{id:"city",name:"Old Quarter",ground:"#56765c",verge:"#76946c",road:"#52605b",trees:"#346c4d",sky:"#a5bba8",water:"#418d88",corruption:.2,wind:0,edge:"flat",barriers:["carpile","collapsed","rubblewall"]},{id:"forest",name:"Whispering Forest",ground:"#458456",verge:"#76a55f",road:"#aa946a",trees:"#196747",sky:"#93b69d",water:"#358f82",corruption:.34,wind:1,edge:"flat",barriers:["pit","logs","thicket"]},{id:"village",name:"Hollow Village",ground:"#81915e",verge:"#acb279",road:"#777365",trees:"#437d51",sky:"#bec39d",water:"#478c82",corruption:.55,wind:.15,edge:"flat",barriers:["collapsed","rubblewall","carpile"]},{id:"glade",name:"Sunlit Glade",ground:"#69aa61",verge:"#aed17b",road:"#b8a372",trees:"#448757",sky:"#c5d5a1",water:"#43ad9b",corruption:.07,wind:1,edge:"flat",barriers:["thicket","logs","thicket"],open:!0},{id:"coast",name:"Saltwater Reach",ground:"#cfb780",verge:"#ead1a0",road:"#bba174",trees:"#49966c",sky:"#b2d7cb",water:"#249d9a",corruption:.16,wind:1,edge:"sink",barriers:["water","rockfall","water"]},{id:"desert",name:"The Ochre Expanse",ground:"#c68b4e",verge:"#e3ad63",road:"#a97448",trees:"#76804f",sky:"#d9b789",water:"#379b94",corruption:.38,wind:1,edge:"dune",barriers:["dune","rockfall","dune"],open:!0},{id:"cliff",name:"Broken Coast",ground:"#768a72",verge:"#a6aa7a",road:"#9e936f",trees:"#42796b",sky:"#aabdaf",water:"#258e90",corruption:.64,wind:1,edge:"sink",barriers:["rockfall","pit","water"]},{id:"mountain",name:"Pale Ridge",ground:"#718b7e",verge:"#a4b0a0",road:"#a59d83",trees:"#31635d",sky:"#b0c4be",water:"#397f8b",corruption:.42,wind:1,edge:"rise",barriers:["cliff","rockfall"]},{id:"marsh",name:"Drowned Fen",ground:"#5f8058",verge:"#8aa069",road:"#8f7f5c",trees:"#4e7350",sky:"#a6b9a2",water:"#3d8579",corruption:.4,wind:1,edge:"sink",barriers:["water","mud","logs"]},{id:"burned",name:"Ashen Wood",ground:"#5e544b",verge:"#857462",road:"#8d7a60",trees:"#3b3632",sky:"#c3ab95",water:"#4a7c74",corruption:.5,wind:1,edge:"flat",barriers:["logs","pit","rockfall"]},{id:"canyon",name:"Red Mesa",ground:"#b9683f",verge:"#d48d59",road:"#c69a69",trees:"#7d7d4a",sky:"#e2b691",water:"#3d8f8c",corruption:.3,wind:1,edge:"rise",barriers:["cliff","rockfall"]},{id:"tundra",name:"White Hollow",ground:"#c3d3d3",verge:"#e3ece9",road:"#9aa4a0",trees:"#3b665f",sky:"#cddde0",water:"#69a5b6",corruption:.25,wind:1,edge:"ice",barriers:["icewall","crevasse"]},{id:"farmland",name:"Amber Fields",ground:"#8ea655",verge:"#c4b665",road:"#a98f5f",trees:"#4f8a4c",sky:"#d5d6a6",water:"#4a9a8e",corruption:.2,wind:.55,edge:"flat",barriers:["hedge","haywall","hedge","ditch"],open:!0},{id:"industrial",name:"Rust Works",ground:"#6f6b5d",verge:"#8f8773",road:"#585c5c",trees:"#5b6b4f",sky:"#b4ac9d",water:"#4d7a76",corruption:.6,wind:.45,edge:"flat",barriers:["containers","carpile","rubblewall"]}],cn=Object.fromEntries(ku.map((i,t)=>[i.id,{...i,index:t,palette:{ground:i.ground,verge:i.verge,road:i.road,trees:i.trees,sky:i.sky,water:i.water}}])),Bu=ku.slice(1).map(i=>i.id),yd=Bu.filter(i=>i!=="village"),ui=new Set(["city","village"]),er={carpile:{radius:2.1},rubblewall:{radius:2},collapsed:{box:[2.3,2.2]},containers:{box:[1.35,3.1]},pit:{radius:2.3,hole:!0},logs:{box:[1.1,2.6]},thicket:{radius:2.1},water:{radius:3.2,hole:!0},mud:{radius:2.6,hole:!0},rockfall:{radius:2.2},cliff:{box:[2.2,2.3]},dune:{radius:3.3},crevasse:{radius:2.4,hole:!0},icewall:{box:[1.4,2.2]},hedge:{box:[1.1,2.1]},haywall:{radius:1.8},ditch:{radius:2.5,hole:!0}};function ne(i,t=1){let e=((i|0)^Math.imul(t|0,374761393))>>>0;return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}const je=(i,t,e)=>{const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)},Bc=(i,t,e=8)=>{const n=Math.max(e-Math.abs(i-t),0)/e;return Math.max(i,t)+n*n*e/4},zu=(i,t,e,n)=>{let s=i.get(t);return s===void 0&&(i.size>=e&&i.delete(i.keys().next().value),s=n(),i.set(t,s)),s},vd=new Map,Md=700;let Vi=null;function Ql(i,t,e){if(Vi&&Vi.seed===i&&Vi.legLength===t&&Vi.leg===e)return Vi.value;const n=zu(vd,`${i}|${t}|${e}`,256,()=>bd(i,t,e));return Vi={seed:i,legLength:t,leg:e,value:n},n}function bd(i,t,e){const n=t>=Md,s=Math.min(1,t/(n?2700:450)),r=Bu.filter(p=>n||p!=="village");for(let p=r.length-1;p>0;p--){const M=Math.floor(ne(p*31+7,i)*(p+1));[r[p],r[M]]=[r[M],r[p]]}const a=p=>n?ne(p*613+3,i)<.5?3:4:p===0||ne(p*613+3,i)<.55?1:2,o=a(e);let l=0;for(let p=0;p<e;p++)l+=a(p);const c=n?e?Math.max(100,200*s):Math.max(200,400*s):e?Math.max(60*s,t*.13):Math.max(120*s,t*.27),h=n?Math.max(80,t*.055):Math.max(Math.min(72,t*.4),t*.16),f=e*t,u=(t-c-h)/o,d=[{id:e?r[(l-1)%r.length]:"city",start:f,end:f+c,refuge:!0}];for(let p=0;p<o;p++)d.push({id:r[(l+p)%r.length],start:f+c+u*p,end:p===o-1?f+t-h:f+c+u*(p+1)});d.push({id:r[(l+o-1)%r.length],start:f+t-h,end:f+t,refuge:!0});const m=[];for(let p=1;p<=o;p++)ui.has(d[p].id)||m.push({i:p,roll:ne(e*7907+p*1543+5*389,i)});m.sort((p,M)=>p.roll-M.roll);const g=m.filter((p,M)=>M===0||n&&M===1&&p.roll<.45).map(({i:p})=>{const M=d[p],y=M.end-M.start,_=v=>ne(e*7907+p*1543+v*389,i),w=yd.filter(v=>v!==M.id&&v!==d[p-1].id&&v!==d[p+1].id),E=n?Math.min(y*.8,260+_(10)*80):Math.min(y*.84,190),A=Math.min(1,E/(n?260:90)),D=M.start+(y-E)*(.25+_(11)*.5);return{id:`fork-${i}-${e}-${p}`,start:D,end:D+E,side:_(6)<.5?-1:1,width:(n?25+_(8)*20:18+_(8)*6)*A,biome:w[Math.floor(_(9)*w.length)],main:M.id}});return{segments:d,forks:g}}function tc(i,t,e){const n=Math.max(100,e),s=Math.max(0,i)/n,r=Math.floor(s),a=Ql(t,n,r),o=a.segments,l=Math.max(0,i);let c=0;for(;c<o.length-1&&l>=o[c].end;)c++;return{layout:a,index:c,leg:r,L:n}}function Sd(i=1,t=0,e=2700){return Ql(i,Math.max(100,e),t).segments.map(n=>({...n}))}function Hu(i,t,e,n){const{layout:s,index:r}=tc(i,t,e),a=s.segments,o=a[r],l=n(o),c=r>0?n(a[r-1]):0,h=r<a.length-1?n(a[r+1]):0,f=Math.min(150,.45*(o.end-o.start));let u=l;return l>c&&i<o.start+f&&(u=c+(l-c)*je(o.start,o.start+f,i)),h<l&&i>o.end-f&&(u=l+(h-l)*je(o.end-f,o.end,i)),u}const wd=(i,t,e)=>Hu(i,t,e,n=>n.refuge?0:cn[n.id].wind),Ed=new Set(["coast","cliff"]),Gu=(i,t=1,e=2700)=>Hu(i,t,e,n=>!n.refuge&&Ed.has(n.id)?1:0);function Td(i,t,e){const n=wd(i,t,e);if(n<=0)return 0;const s=t%997*.7,r=.0165+.0045*Math.cos(i*.0047+s),a=i*.0165+.957*Math.sin(i*.0047+s)+s*2.3,o=Math.min(30,.41/r)*(.58+.42*Math.sin(i*.0029+s*1.9)**2),l=.06+.025*Math.cos(i*.013+s*1.3),c=i*.06+1.923*Math.sin(i*.013+s*1.3)+s*.9,h=Math.min(12,.44/l)*(.65+.35*Math.sin(i*.0071+s*.4)**2);return n*(o*Math.sin(a)+h*Math.sin(c))}const qa=2,zc=12,Hc=.6,Ad=new Map;let ks=null;function ja(i,t,e){(!ks||ks.seed!==t||ks.legLength!==e)&&(ks={seed:t,legLength:e,values:zu(Ad,`${t}|${e}`,24,()=>[0])});const n=ks.values,s=Math.max(0,Math.min(i,6e4))/qa;for(;n.length<=s+1;){const o=n.length-1,l=n[o],c=Math.max(-Hc,Math.min(Hc,(Td(o*qa+zc,t,e)-l)/zc));n.push(l+c*qa)}const r=Math.floor(s),a=s-r;return n[r]+(n[r+1]-n[r])*a}function Cd(i,t,e){return i>-4?(ja(i-4,t,e)+2*ja(i,t,e)+ja(i+4,t,e))/4:0}function Qt(i,t=1,e=2700){return Math.sin(i*.017+t*.3)*2.7+Math.sin(i*.043+t)*.8+Cd(i,t,e)}function ec(i=1,t=0,e=1/0,n=2700){const s=Math.max(100,n),r=[];for(let a=Math.max(0,Math.floor(t/s));a<=Math.floor(Math.max(0,Math.min(e,s*400))/s);a++)for(const o of Ql(i,s,a).forks)o.end>t&&o.start<e&&r.push(o);return r}function ka(i,t=1,e=2700){const{layout:n}=tc(i,t,e);return n.forks.find(s=>i>=s.start&&i<s.end)||null}function on(i,t){return!i||t<=i.start||t>=i.end?0:i.side*i.width*Math.sin(Math.PI*(t-i.start)/(i.end-i.start))**2}function nr(i,t=1,e=2700,n=35,s,r=1/0){const a=Math.max(i,Math.min(i+n,r)),o=ka(i,t,e),l=Qt(i,t,e),c=o&&s!==void 0&&Math.abs(s-l-on(o,i))<Math.abs(s-l);return{x:Qt(a,t,e)+(c?on(o,a):0),y:a,branch:!!c}}function ke(i,t=1,e=2700,n,s=!1){let r=i;if(n!==void 0){const l=t%997,c=je(5,28,Math.abs(n-Qt(i,t,e)))*(s?.45:1)+(s?.55:0);c>0&&(r+=c*(Math.sin(n*.061+l)*9+Math.sin(n*.17+l*2)*4+Math.sin(n*.43+l*3)*2))}const{layout:a,index:o}=tc(r,t,e);if(n!==void 0){const l=ka(i,t,e);if(l){const c=Math.abs(on(l,i)),h=(n-Qt(i,t,e))*l.side;if(c>3&&h>c*.5+2)return l.biome}}return a.segments[o].id}const qo=(i,t,e)=>Math.max(0,Math.min(.85,i.corruption+.06*Math.sin(t*.061+e*3)));function mn(i,t=1,e=2700,n){const s=cn[ke(i,t,e,n,n!==void 0)];return{...s,corruption:qo(s,i,t),routeLeg:Math.floor(Math.max(0,i)/Math.max(100,e))}}function gn(i,t=1,e=2700){const n=mn(i,t,e),s=ui.has(n.id),r=s&&ne(Math.floor(i/9)*67,t)<(n.id==="village"?.42:.22);return n.id==="industrial"?{kind:ne(Math.floor(i/9)*67,t)<.55?"asphalt":"earth",width:4.4,urban:!1,broken:!0}:{kind:s&&!r?"asphalt":s?"earth":"dirt",width:s?6.1:2.45+Math.sin(i*.087+t)*.25,urban:s,broken:r}}function ir(i=1,t,e=6){return{minX:-120,maxX:120,minY:0,maxY:(t===void 0?i:t*e)+18}}function Ze(i,t=1,e=2700){const n=Qt(i,t,e),s=t%1009,r=(u,d,m)=>.5+.5*(.62*Math.sin(i*u+s*m)+.38*Math.sin(i*d+s*m*1.7+1.3)),a=u=>3.6*Math.sin(i*.093+s*u)+2.4*Math.sin(i*.231+s*u*2.3+2),o=nc(i,e)*8;let l=33+27*r(.0107,.0291,.71)+a(.37)+o,c=33+27*r(.0089,.0337,1.37)+a(.83)+o;const h=Gu(i,t,e);h>0&&(l+=(19+a(.37)*.5-l)*h);const f=ka(i,t,e);if(f){const u=Math.abs(on(f,i))+21+6*r(.05,.021,2.1);f.side>0?c=Bc(c,u):l=Bc(l,u)}return{minX:Math.max(-118,n-l),maxX:Math.min(118,n+c)}}const $e={step:2.4,thickness:1.4,offset:.5,overlap:.3,slip:.7,minLength:.5,fill:1.3};function sr(i,t,e,n,s,r=7){let a=1/0,o=-1/0;for(let l=0;l<r;l++){const c=Ze(r>1?n+(s-n)*l/(r-1):n,i,t),h=e<0?c.minX:c.maxX;a=Math.min(a,h),o=Math.max(o,h)}return{lo:a,hi:o}}const Rd=(i,t,e,n,s)=>{const r=sr(i,t,e,n,s);return e>0?r.hi+$e.offset:r.lo-$e.offset};function Pd(i,t,e,n){const{step:s,thickness:r,overlap:a,slip:o,minLength:l}=$e,c=ir(i,t).maxY,h=[];for(let f=Math.max(-1,Math.floor((e-8)/s));f<=Math.min(Math.ceil((n+8)/s),Math.floor(c/s)+1);f++)for(const u of[-1,1]){const d=(m,x,g)=>{const p=m-a,M=x+a,y=sr(i,t,u,p,M);if(y.hi-y.lo>o&&x-m>l*2){const D=(m+x)/2;d(m,D,`${g}a`),d(D,x,`${g}b`);return}const _=u>0?y.hi+$e.offset:y.lo-$e.offset,w=_+u*r/2,E=r/2,A=(M-p)/2;h.push({id:`edge-${i}-${u}-${f}${g}`,x:w,y:(p+M)/2,type:"edgewall",radius:Math.hypot(E,A),collision:{kind:"box",halfX:E,halfY:A},width:r,depth:A*2,obstacle:!0,blocksShots:!1,invisible:!0,side:u,scale:1,rotation:0,biome:ke(Math.max(0,(p+M)/2),i,t)})};d(f*s,(f+1)*s,"")}for(const[f,u,d]of[["start",-.5,0],["end",c+$e.offset,c]]){const m=Ze(d,i,t),x=r/2,g=f==="start"?u-x:u+x;if(g+x<e||g-x>=n)continue;const p=m.minX-r,M=m.maxX+r,y=Math.ceil((M-p)/4.6);for(let _=0;_<y;_++){const w=p+(M-p)*_/y,E=p+(M-p)*(_+1)/y,A=(E-w)/2+a;h.push({id:`edge-${i}-${f}-${_}`,x:(w+E)/2,y:g,type:"edgewall",radius:Math.hypot(A,x),collision:{kind:"box",halfX:A,halfY:x},width:A*2,depth:r,obstacle:!0,blocksShots:!1,invisible:!0,side:0,cap:f,scale:1,rotation:0,biome:ke(Math.max(0,d),i,t)})}}return h}const oe={before:64,after:8,clear:20,gate:12,gateHalf:5};function nc(i,t){const e=Math.max(100,t),n=Math.round(i/e);if(n<1)return 0;const s=i-n*e;return je(-80,-64,s)*(1-je(oe.after,oe.after+16,s))}function Nn(i,t=1,e=2700){const n=Math.max(100,e),s=Math.round(i/n),r=s*n;if(s<1||i<r-oe.before||i>r+oe.after)return null;const a=r+oe.gate;return{checkpointY:r,minY:r-oe.before,maxY:r+oe.after,centerY:r-oe.before/2,x:Qt(i,t,e),clear:oe.clear,gateY:a,gateX:Qt(a,t,e),gateHalf:oe.gateHalf,biome:ke(r-1,t,e)}}const fi={columns:58,cell:6,row:4,width:348,seaLevel:-.42},Dd=new Set(["mountain","cliff","canyon"]),Ir=new Map,Bs=new Map,jo=new Map;function Gc(i,t,e,n){const s=Math.round(t*4)*8192+Math.round((i+800)*4);let r=jo.get(s);return r||(r=cn[ke(t,e,n,i)],jo.set(s,r)),r}let Vc="";function Vu(i,t,e){const n=ka(i,t,e);return{roads:ic(t,i-30,i+30,e).filter(s=>Math.abs(i-s.y)<=s.width/2+16),center:Qt(i,t,e),branch:n?on(n,i):null,bounds:Ze(i,t,e),plaza:nc(i,e)}}function Ld(i,t,e,n,s=Vu(t,e,n)){let r=0;for(const f of s.roads){const u=Math.max(0,Math.abs(t-f.y)-f.width/2-1,f.minX-6-i,i-f.maxX-6);r=Math.max(r,1-je(0,10,u))}s.plaza&&(r=Math.max(r,s.plaza*(1-je(oe.clear+9,oe.clear+19,Math.abs(i-s.center)))));const a=Math.min(Math.abs(i-s.center),s.branch===null?1/0:Math.abs(i-s.center-s.branch)),o=r>=1?0:Math.max(0,a-13),l=Gc(i,t,e,n),c=Math.max(s.bounds.minX-i,i-s.bounds.maxX);let h=-.1;if(!o)h=-.025;else{const f=[[0,0],[0,0],[-6,0],[fi.cell,0],[0,-2*fi.row],[0,2*fi.row]].map(([g,p])=>g||p?Gc(i+g,t+p,e,n):l),u=f.filter(g=>Dd.has(g.id)).length/6,d=f.filter(g=>g.edge==="sink").length/6,m=1-r,x=1-d*(1-je(4,28,-c));if(u>0){const g=e%997;let p=.62*Math.sin(i*.1+t*.043+g)+.38*Math.sin(i*.061-t*.071+g*1.7);const M=f.filter(y=>y.id==="mountain").length/6;M&&(p+=M*.45*(1-2*Math.abs(Math.sin(i*.047+t*.031+g*.6))-p)),h+=u*p*Math.min(3.2,o*.16)*x*m}u<1&&(h+=(1-u)*Math.sin(i*.5+t*.12)*Math.min(["tundra","desert"].includes(l.id)?.8:.42,o*.04)*(l.edge==="sink"?je(2,8,-c):1)*m)}return l.edge==="rise"&&c>-10&&(h+=(Math.max(h,-.1)-h)*je(-10,-1,c)),c>-3&&(l.edge==="rise"?h+=je(-1,6,c)*(5.5+2*Math.sin(t*.07+i*.05)):l.edge==="ice"?h+=je(-1,5,c)*(2.8+.8*Math.sin(t*.09)):l.edge==="dune"?h+=je(-2,10,c)*(2.6+1.3*Math.sin(t*.045+i*.03)):l.edge==="sink"&&(h=Math.min(h,-.1)-je(-1,4,c)*1.5)),h}function Ks(i,t,e=1,n=2700){const s=`${e}|${n}`;(Vc!==s||Ir.size>12e4)&&(Ir.clear(),Bs.clear(),jo.clear(),Vc=s);const r=Math.round(t*4)*8192+Math.round((i+800)*4);let a=Ir.get(r);if(a!==void 0)return a;let o=Bs.get(t);return o||(Bs.size>4e3&&Bs.clear(),o=Vu(t,e,n),Bs.set(t,o)),a=Ld(i,t,e,n,o),Ir.set(r,a),a}function Ca(i,t,e=1,n=2700){const{columns:s,cell:r,row:a,width:o}=fi,l=Math.max(0,Math.min(s-1,Math.floor((i+o/2)/r))),c=-o/2+l*r,h=Math.floor(t/a)*a,f=Math.max(0,Math.min(1,(i-c)/r)),u=Math.max(0,Math.min(1,(t-h)/a)),d=Ks(c,h,e,n),m=Ks(c+r,h,e,n),x=Ks(c,h+a,e,n),g=Ks(c+r,h+a,e,n);return f+u<=1?d+f*(m-d)+u*(x-d):g+(1-f)*(x-g)+(1-u)*(m-g)}function Ko(i,t,e,n=1,s=2700,r=1){let a=1/0,o=-1/0;const l=Ca(i,t,n,s);for(let c=0;c<=2;c++)for(let h=0;h<(c?8:1);h++){const f=h*Math.PI/4+c*.39,u=e*c/2,d=i+Math.cos(f)*u/r,m=t+Math.sin(f)*u*r;let x=c?Ca(d,m,n,s):l;if(x<fi.seaLevel){const g=Ze(m,n,s);Math.max(g.minX-d,d-g.maxX)>-1.6&&(x=fi.seaLevel)}a=Math.min(a,x),o=Math.max(o,x)}return{min:a,max:o,center:l,relief:o-a}}const Ra={maxRelief:.42,bank:.5},Id=new Set(["water","ditch","pool"]);function Nd(i,t,e,n,s){const r=(d,m)=>Ca(d,m,e,n),a=[i,t];let o=r(i,t),l=0,c=0,h=0,f=0,u="length";for(let d=0;d<22;d++){const m=(r(i+1.5,t)-r(i-1.5,t))/3,x=(r(i,t+1.5)-r(i,t-1.5))/3,g=Math.hypot(m,x);if(g<.05){u="flat";break}const p=d?.45:0;l=l*p-m/g*(1-p),c=c*p-x/g*(1-p);const M=Math.hypot(l,c)||1,y=i+l/M*1.2,_=t+c/M*1.2,w=r(y,_);if(w>o-.004){u="flat";break}if(s(y,_)){u="blocked";break}f+=o-w,h+=1.2,i=y,t=_,o=w,a.push(i,t)}return{path:a,length:h,drop:f,ended:u,x:i,y:t}}function ic(i,t,e,n=2700){const s=[];for(let r=Math.floor(t/36);r<=Math.ceil(e/36);r++){const a=r*36;if(a<36||a<t||a>=e)continue;const o=mn(a,i,n),l=ui.has(o.id);if(ne(r*503+81,i)>(l?.58:.15))continue;const c=l?66+ne(r*503+82,i)*32:78+ne(r*503+82,i)*27,h=Qt(a,i,n),f=Ze(a,i,n);s.push({id:`road-${i}-${r}`,y:a,minX:Math.max(h-c,f.minX+2),maxX:Math.min(h+c,f.maxX-2),width:l?5.4:2.8,urban:l,kind:l?"asphalt":"dirt"})}return s}function Ud(i,t,e,n=2700){const s=[];for(let a=Math.max(0,Math.floor((t-21)/82.5));a<=Math.ceil((e-21)/82.5);a++){const o=a*82.5+21;o<t||o>=e||s.push({id:`supply-${a}`,x:Qt(o,i,n)+((a+i)%2?-1:1)*4.6,y:o,type:a%3===0?"locker":"crate"})}return s}const Od=new Set(Object.keys(er).filter(i=>er[i].hole)),Fd={container:[1.2,2.9],barn:[3.2,4.2],pipes:[.75,3.2]},kd={barn:.72,mesa:1.1,tank:.9},Wc={marsh:"reeds",tundra:"drift",farmland:"crops",desert:"scrub",canyon:"scrub",glade:"flowers"};function Bd(i,t,e){switch(i){case"city":case"village":return t>.7?"car":t>.25?"rubble":"tree";case"desert":return t>.53?"rock":t>.25?"cactus":"scrub";case"coast":return t>.88?"pool":t>.55?"rock":t>.25?"palm":"scrub";case"cliff":return t>.88?"pool":t>.8?"mountain":t>.4?"rock":"pine";case"mountain":return t>.85?"mountain":t>.79?"pool":t>.4?"rock":"pine";case"glade":return t>.7?"tree":t>.3?"flowers":"scrub";case"marsh":return t>.76?"deadtree":t>.46?"reeds":t>.3?"pool":t>.2?"tree":"scrub";case"burned":return t>.45?"charred":t>.33?"embers":t>.22?"rock":"scrub";case"canyon":return t>.93?"arch":t>.76?"mesa":t>.45?"rock":t>.2?"scrub":"cactus";case"tundra":return t>.52?"snowpine":t>.4?"ice":t>.3?"rock":"drift";case"farmland":return t>.86?"haystack":t>.78?"tree":t>.72?"barn":t>.48?"fence":"crops";case"industrial":return t>.82?"tank":t>.73?"chimney":t>.55?"container":t>.42?"pipes":t>.28?"car":"rubble";default:return t<.14?"rock":e(11)<.35?"pine":"tree"}}const Nr=new Set(["scrub","flowers","rubble","reeds","pool","stream","embers","drift","fence","crops","arch"]),zd={mountain:5,car:1.06,rock:1.4,rubble:1.1,mesa:2.1,tank:2,chimney:.9,ice:.85,haystack:1,pool:1.5,crops:1.6,fence:1.2,arch:3.2,embers:.7,drift:1.1,reeds:.7,deadtree:.45,charred:.45};function Wu(i,t,e,n=2700,s,r){const a=s===void 0&&r===void 0,o=C=>{if(!a)return[s,r];const I=Ze(C,i,n);return[I.minX-16,I.maxX+16]},l=[],c=ic(i,t-40,e+40,n),h=ec(i,t-40,e+40,n),f=C=>h.find(I=>C>I.start&&C<I.end),u=C=>Qt(C,i,n),d=(C,I,U)=>Math.abs(C-u(I))<gn(I,i,n).width/2+U+.9,m=(C,I,U)=>{const N=f(I);return!!N&&Math.abs(C-u(I)-on(N,I))<gn(I,i,n).width/2+.1+U+.9},x=(C,I,U,N=U)=>c.some(F=>I+N+.8>=F.y-F.width/2&&I-N-.8<=F.y+F.width/2&&C+U>=F.minX&&C-U<=F.maxX),g=(C,I,U,N=U)=>[-N,-N/2,0,N/2,N].some(F=>d(C,I+F,U)||m(C,I+F,U))||x(C,I,U,N),p=C=>{if(C.y<t||C.y>=e)return;const[I,U]=o(C.y);C.x>=I&&C.x<U&&l.push(C)},M=(C,I,U,N=U)=>{const F=Math.abs(C-u(I))-U,X=Math.round(I/Math.max(100,n))*Math.max(100,n);return X>0&&F<oe.clear&&I+N>X-oe.before&&I-N<X+oe.after?!0:I-N<22&&I+N>-60&&(F<12||C>u(I)&&F<46)},y=Ud(i,t-90,e+90,n),_=[],w=[];for(let C=Math.floor((t-60)/36);C<=Math.floor((e+60)/36);C++){const I=C*36+18,U=mn(I,i,n);if(!ui.has(U.id))continue;const N=gn(I,i,n).width/2,F={"-1":-1/0,1:-1/0};for(let X=0;X<4;X++)for(const z of[-1,1]){const V=C*301+(X*2+(z>0?1:0))*19,st=(.85+ne(V+76,i)*.45)*1.65*2,et=(U.id==="village"?3:2.1)*st,ct=(U.id==="village"?3:2.2)*st,yt=Math.max(18+X*28,N+5+et,F[z]+3+et),Ht=u(I)+z*yt,Ft={id:`building-${i}-${C}-${X}-${z}`,x:Ht,y:I,type:"building",scale:st,rotation:0,width:et*2,depth:ct*2,radius:Math.hypot(et,ct),collision:{kind:"box",halfX:et,halfY:ct},obstacle:!0,corrupted:ne(V+95,i)<U.corruption*.75,variant:Math.floor(ne(V+133,i)*4),biome:U.id};ke(I,i,n,Ht,!0)===U.id&&!g(Ht,I,et,ct)&&!M(Ht,I,et,ct)&&!y.some(K=>Math.abs(K.x-Ht)<et+1.7&&Math.abs(K.y-I)<ct+1.7)&&(_.push(Ft),p(Ft),F[z]=yt+et)}}const E=(C,I,U)=>_.some(N=>Math.abs(C-N.x)<N.width/2+U+.45&&Math.abs(I-N.y)<N.depth/2+U+.45),A=C=>{const I=C*18+9,U=z=>ne(C*301+z*19,i),N=[];if(C%2===0||U(70)>.55){const z=I-3;N.push({id:`loot-${i}-${C}`,x:u(z)+(U(71)>.5?1:-1)*(4.2+U(72)*1.2),y:z,type:C%5===0?"locker":C%7===0?"lootbox":"crate",radius:.725,obstacle:!1,scale:1.25,rotation:U(73)*.7})}const F=I+2,X=f(F);return X&&Math.abs(on(X,F))>10&&C%2===1&&N.push({id:`fork-loot-${i}-${C}`,x:u(F)+on(X,F)+(U(74)>.5?1:-1)*3.3,y:F,type:U(75)<.3?"lootbox":"crate",radius:.725,obstacle:!1,scale:1.25,rotation:U(76)*.7}),N.filter(z=>!E(z.x,z.y,1.2))},D=[...y];for(let C=Math.floor((t-30)/18);C<=Math.floor((e+30)/18);C++)D.push(...A(C));const v=(C,I,U)=>D.some(N=>Math.hypot(N.x-C,N.y-I)<U+1.4);for(let C=Math.floor(t/18);C<=Math.floor(e/18);C++){const I=C*18+9,U=Ze(I,i,n),[N,F]=o(I);for(let V=-8;V<8;V++)for(let st=0;st<2;st++){const et=Q=>ne(C*1709+(V+8)*131+st*43+Q*19,i),ct=V*20+2+et(1)*16,yt=C*18+2+et(2)*14;if(ct<N-14||ct>F+14)continue;const Ht=Math.max(U.minX-ct,ct-U.maxX);if(Ht>-4&&Ht<4.5||Ht>0&&st===1&&et(12)<.5)continue;const Ft=cn[ke(yt,i,n,ct,!0)],K=qo(Ft,yt,i);if(Ht>3&&["sink"].includes(Ft.edge)&&et(13)<.85)continue;let J=Bd(Ft.id,et(3),et);["mountain","mesa","barn","arch","tank"].includes(J)&&Math.abs(ct-u(yt))<20&&(J="rock");const mt=(.85+et(4)*.45)*(["scrub","flowers","reeds","crops","fence","drift","pool"].includes(J)?1.25:1.42)*(kd[J]||1),xt=Fd[J],_t=xt?xt[0]*mt:0,Nt=xt?xt[1]*mt:0,Gt=xt?Math.hypot(_t,Nt):(zd[J]??.55)*mt;if(xt?g(ct,yt,_t,Nt)||E(ct,yt,Math.max(_t,Nt)):g(ct,yt,Gt)||E(ct,yt,Gt))continue;let L=null;if(J==="pool"){const Q=Ko(ct,yt,Gt*1.05,i,n);if(Q.relief<=Ra.maxRelief)L={lift:Q.max-Q.center};else{const $=Nd(ct,yt,i,n,(tt,gt)=>g(tt,gt,1.3)||E(tt,gt,1.2));if($.length<6||$.drop<.6)continue;if(J="stream",L={path:$.path,width:.75+et(14)*.55,length:$.length,drop:$.drop},$.ended==="flat"){const tt=Ko($.x,$.y,1.7,i,n);tt.relief<=Ra.maxRelief&&!g($.x,$.y,1.7)&&(L.pool={x:$.x,y:$.y,scale:1.1,lift:tt.max-tt.center})}}}if(!Nr.has(J)&&v(ct,yt,xt?Math.max(_t,Nt):Gt)||!Nr.has(J)&&(ui.has(Ft.id)||ui.has(ke(yt,i,n)))&&Math.abs(ct-u(yt))-(xt?_t:Gt)<gn(yt,i,n).width/2+4||(!Nr.has(J)||J==="arch")&&M(ct,yt,xt?_t:Gt,xt?Nt:Gt))continue;const nt={id:`p-${i}-${C}-${V}-${st}`,x:ct,y:yt,type:J,scale:mt,rotation:xt||J==="arch"?et(6)<.5?0:Math.PI:et(6)*Math.PI*2,radius:Gt,obstacle:!Nr.has(J),corrupted:et(5)<K*.75,variant:Math.floor(et(7)*4),smoke:J==="rubble"&&et(8)<.5||J==="chimney",fire:J==="rubble"&&et(9)<.4||J==="embers",biome:Ft.id};if(L&&Object.assign(nt,L,J==="stream"?{rotation:0,scale:1,radius:.6}:{}),xt&&Object.assign(nt,{width:_t*2,depth:Nt*2,collision:{kind:"box",halfX:_t,halfY:Nt}}),J==="arch"){const Q=[-1,1].map($=>({x:ct+$*2.6*mt,y:yt}));if(Q.some($=>g($.x,$.y,.9*mt)||v($.x,$.y,.9*mt)))continue;Q.forEach(($,tt)=>p({id:`${nt.id}-leg${tt}`,x:$.x,y:$.y,type:"archleg",scale:mt,rotation:0,radius:.9*mt,obstacle:!0,biome:Ft.id}))}p(nt)}const X=V=>ne(C*301+V*19,i),z=mn(I,i,n);ui.has(z.id)&&C%3===0&&!v(u(I)-4.5,I,.28)&&!Nn(I,i,n)&&p({id:`pole-${i}-${C}`,x:u(I)-4.5,y:I,type:"pole",radius:.28,obstacle:!1,scale:1.42,rotation:0,biome:z.id});for(const V of A(C))p({...V,biome:ke(V.y,i,n,V.x)});C%4===1&&p({id:`sign-${i}-${C}`,x:u(I)+4.1,y:I,type:"sign",radius:.25,obstacle:!1,scale:1.3,rotation:0,biome:z.id});for(let V=-8;V<8;V++){const st=C*18+ne(C*601+V*43,i)*18,et=V*20+ne(C*503+V*67,i)*20;if(et<Math.max(U.minX-10,N-4)||et>Math.min(U.maxX+10,F+4))continue;const ct=cn[ke(st,i,n,et,!0)];let yt=ne(C*111+V,i)<qo(ct,st,i)*.8?"growth":"grass";yt==="grass"&&Wc[ct.id]&&X(210+V)<.55&&!g(et,st,2.5)&&(yt=Wc[ct.id]),p({id:`ground-${i}-${C}-${V}`,x:et,y:st,type:yt,radius:0,obstacle:!1,scale:.8+X(170+V)*1.1,rotation:X(190+V)*6.28,corrupted:!1,biome:ct.id})}}for(const C of h){for(const[U,N]of[["split",C.start+3],["join",C.end-3]]){const F=u(N)+on(C,N)+C.side*(gn(N,i,n).width/2+2.4);p({id:`${C.id}-${U}-sign`,x:F,y:N,type:"forksign",radius:.3,obstacle:!1,scale:2.3,rotation:0,variant:C.side>0?1:0,side:C.side,end:U,biome:C.biome})}const I=C.end-C.start;for(let U=7;U<Math.min(56,I*.35);U+=7)for(const N of[C.start+U,C.end-U]){const F=u(N)+on(C,N);for(const X of[-1,1]){const z=F+X*C.side*2.9;X<0&&Math.abs(on(C,N))<9||d(z,N,.4)||p({id:`${C.id}-lantern-${Math.round(N)}-${X}`,x:z,y:N,type:"lantern",radius:.25,obstacle:!1,scale:1.5,rotation:0,biome:C.biome})}}for(const U of[.2,.8]){const N=C.start+(C.end-C.start)*U,F=on(C,N);Math.abs(F)>9&&!v(u(N)+F/2,N,.9)&&!g(u(N)+F/2,N,.9)&&p({id:`${C.id}-cairn-${U}`,x:u(N)+F/2,y:N,type:"cairn",radius:.7,obstacle:!0,scale:1.3,rotation:U*9,biome:ke(N,i,n,u(N)+F/2)})}}for(let C=Math.ceil((t-4)/8);C<=Math.floor((e+4)/8);C++){const I=C*8+4,U=Nn(I,i,n);if(U)for(const N of[-1,1])p({id:`plaza-${i}-${C}-${N}`,x:u(I)+N*(oe.clear+1.2),y:I,type:U.biome==="city"?"planter":"plazarim",radius:.8,obstacle:!1,scale:1.2,rotation:0,variant:(C+N+4)%4,biome:U.biome})}const b=Math.max(100,n);for(let C=Math.max(1,Math.floor((t-20)/b));C<=Math.ceil((e+20)/b);C++){const I=C*b+oe.gate,U=u(I),N=Ze(I,i,n),F=ke(C*b-1,i,n),X=ne(C*59+3,i)<.5?-1:1,z=U+X*11,V=I+14;!g(z,V,2.2,2)&&!v(z,V,2.2)&&p({id:`outpost-${i}-${C}`,x:z,y:V,type:"outpost",radius:Math.hypot(1.9,1.7),collision:{kind:"box",halfX:1.9,halfY:1.7},width:3.8,depth:3.4,obstacle:!0,scale:1.1,rotation:0,biome:F});for(const st of[-1,1]){p({id:`gate-${i}-${C}-${st}-pillar`,x:U+st*(oe.gateHalf+.9),y:I,type:"gatepillar",radius:.9,obstacle:!0,scale:1,rotation:0,biome:F});const et=st<0?N.minX-6:N.maxX+6;for(let ct=0,yt=U+st*(oe.gateHalf+1.8+2.3);st*(et-yt)>-2.3;ct++,yt+=st*4.6)w.push({x:yt,y:I,width:4.6,depth:1.8}),p({id:`gate-${i}-${C}-${st}-${ct}`,x:yt,y:I+(ne(C*97+ct*13+st,i)-.5)*.6,type:"gatewall",radius:Math.hypot(2.3,.9),collision:{kind:"box",halfX:2.3,halfY:.9},width:4.6,depth:1.8,obstacle:!0,blocksShots:!0,scale:1,rotation:0,variant:Math.floor(ne(C*97+ct*13+st*5,i)*4),biome:F})}}const P=Gd(i,t,e,n,c,_,g,p,o,v);for(const C of Pd(i,n,t,e))p(C);return Hd(i,t,e,n,[..._,...w,...P],p),l}const Ce={length:4.6,thickness:.6,band:[-.8,1.4]};function Hd(i,t,e,n,s,r){const a=ir(i,n).maxY,o=s.map(l=>l.collision?{x:l.x,y:l.y,hx:l.collision.halfX,hy:l.collision.halfY}:l.width?{x:l.x,y:l.y,hx:l.width/2,hy:l.depth/2}:{x:l.x,y:l.y,hx:l.radius,hy:l.radius});for(let l=Math.max(-1,Math.floor((t-4)/Ce.length));l<=Math.min(Math.ceil((e+4)/Ce.length),Math.floor(a/Ce.length)+1);l++)for(const c of[-1,1]){const h=l*Ce.length,f=h+Ce.length,u=(h+f)/2;if(u<t||u>=e)continue;let d=0;for(let y=0;y<5;y++){const _=h+Ce.length*(y+.5)/5,w=Ze(_,i,n),E=c<0?w.minX:w.maxX,A=Math.min(E+c*Ce.band[0],E+c*Ce.band[1]),D=Math.max(E+c*Ce.band[0],E+c*Ce.band[1]);o.some(v=>Math.abs(v.y-_)<=v.hy+.3&&v.x+v.hx>=A&&v.x-v.hx<=D)||d++}if(d<1)continue;const m=sr(i,n,c,h,h,1),x=sr(i,n,c,f,f,1),g=sr(i,n,c,u,u,1),p=c<0?g.lo:g.hi,M=(c<0?x.lo-m.lo:x.hi-m.hi)/Ce.length;r({id:`fence-${i}-${c}-${l}`,x:p+c*($e.offset+Ce.thickness/2+.05),y:u,type:"edgefence",radius:0,width:Ce.thickness,depth:Ce.length,obstacle:!1,scale:1,rotation:-Math.atan(M),variant:Math.floor(ne(l*71+c*13,i)*4),side:c,biome:ke(u,i,n,p+c*2,!0)})}for(const[l,c]of[["start",-.5-Ce.thickness/2-.05],["end",a+$e.offset+Ce.thickness/2+.05]]){if(c<t||c>=e)continue;const h=Ze(Math.max(0,Math.min(a,c)),i,n),f=h.minX-$e.thickness,u=h.maxX+$e.thickness,d=Math.ceil((u-f)/(Ce.length-.2));for(let m=0;m<d;m++)r({id:`fence-${i}-${l}-${m}`,x:f+(u-f)*(m+.5)/d,y:c,type:"edgefence",radius:0,width:Ce.length,depth:Ce.thickness,obstacle:!1,scale:1,rotation:Math.PI/2,variant:(m+1)%4,side:0,cap:l,biome:ke(Math.max(0,c),i,n)})}}function Gd(i,t,e,n,s,r,a,o,l,c){const f=[];for(let u=Math.floor((t-8)/3.2);u<=Math.ceil((e+8)/3.2);u++)for(const d of[-1,1]){const m=d>0?7919:0,x=V=>ne(u*6151+m+V*101,i);let g=u;for(;g>u-9&&ne(g*3571+m+29,i)>.2;)g--;const p=g,M=(()=>{let V=u+1;for(;V<g+9&&ne(V*3571+m+29,i)>.2;)V++;return V-g})(),y=V=>ne(p*911+m+V*53,i),_=(u-g+.5)/M,w=u*3.2+(x(1)-.5)*1.6,E=Ze(w,i,n),A=d<0?E.minX:E.maxX,[D,v]=l(w);if(A<D-20||A>v+20)continue;const b=cn[ke(w,i,n,A+d*2,!0)],P=s.find(V=>Math.abs(V.y-w)<V.width/2+3.5);let C=b.barriers[Math.floor(y(1)*b.barriers.length)];x(2)<.18&&(C=b.barriers[Math.floor(x(3)*b.barriers.length)]),P&&ui.has(b.id)&&(C="carpile"),d<0&&Gu(w,i,n)>.5&&(C="water");const U=!(nc(w,n)>0)&&!P&&y(4)<.3?(4+y(5)*6)*Math.sin(Math.PI*_):0,N=.8+y(6)*.45,F=y(2)*2+x(4)*1.2+U,X=!U&&!P&&!b.open&&y(7)<.35&&x(8)<.3,z=Math.max(X||b.open?2:1,1+(y(3)<.7?1:0)+(x(5)<.3?1:0)+(U>4?1:0));for(let V=X?1:0;V<z;V++){const st=it=>{const ot=er[it],Ut=!ot.box,kt=N*(Ut?.7+x(6+V)*.65:.85+x(6+V)*.4)*(V?1.08:1),R=ot.box?ot.box[0]*kt:0,S=ot.box?ot.box[1]*kt:0,B=ot.box?R:ot.radius*kt,Y=w+(V%2?3.2*.5:0)+(x(9+V)-.5)*(Ut?2.6:1.2),rt=U>4&&V===z-1?U-B:null,Z=rt!==null?-rt:V===0?B*(.35+x(12)*.45)-F:B*(.6+V*1.25)+1+x(13+V)*2.2-U*.5;let At=A+d*(Z+(Ut?(x(20+V)-.5)*B*.9:0));const pt=ot.box?S:B;for(const Tt of s)Math.abs(Tt.y-Y)<Tt.width/2+pt+.9&&(d>0&&At-B<Tt.maxX+.1&&(At=Tt.maxX+.1+B),d<0&&At+B>Tt.minX-.1&&(At=Tt.minX-.1-B));return{kind:it,spec:ot,loose:Ut,size:kt,halfX:R,halfY:S,reach:B,x:At,y:Y,halfSpanY:pt}},et=({x:it,y:ot,reach:Ut,halfSpanY:kt})=>{if(a(it,ot,Ut,kt)||c(it,ot,Ut)||r.some(B=>Math.abs(it-B.x)<B.width/2+.5&&Math.abs(ot-B.y)<B.depth/2+.5))return null;const[R,S]=[it,ot];for(const B of r){const Y=Math.abs(it-B.x)-B.width/2-Ut,rt=Math.abs(ot-B.y)-B.depth/2-kt;rt<0&&Y>0&&Y<3?it+=Math.sign(B.x-it)*(Y+.4):Y<0&&rt>0&&rt<3&&(ot+=Math.sign(B.y-ot)*(rt+.4))}return a(it,ot,Ut,kt)&&([it,ot]=[R,S]),{x:it,y:ot}};let ct=st(b.open&&V===0&&er[C].hole?b.barriers[0]:C),yt=et(ct),Ht=0;if(yt&&Id.has(ct.kind)){const it=Ko(yt.x,yt.y,ct.reach*(ct.kind==="ditch"?1.3:1.05),i,n);it.relief>Ra.maxRelief?(ct=st(b.barriers.find(ot=>!er[ot].hole)||"rockfall"),yt=et(ct)):Ht=it.max-it.center}if(!yt)continue;const{kind:Ft,spec:K,size:J,halfX:mt,halfY:xt,reach:_t}=ct,{x:Nt,y:Gt}=yt,L={id:`bar-${i}-${u}-${d}-${V}`,x:Nt,y:Gt,type:Ft,scale:J,rotation:K.box?(x(14)<.5?0:Math.PI)+(x(19)-.5)*(Ft==="logs"?.55:.3):x(14)*Math.PI*2,radius:K.box?Math.hypot(mt,xt):_t,obstacle:!0,barrier:!0,blocksShots:!Od.has(Ft),side:d,variant:Math.floor(x(15)*4),biome:b.id,corrupted:!1};K.box&&Object.assign(L,{width:mt*2,depth:xt*2,collision:{kind:"box",halfX:mt,halfY:xt}}),Ht&&(L.lift=Ht),Ft==="carpile"&&(L.fire=x(16)<.4,L.smoke=L.fire||x(17)<.35,L.effectHeight=1.2),Ft==="logs"&&b.id==="burned"&&(L.charred=!0,L.fire=x(18)<.2);const nt=K.box?mt:_t,Q=K.box?xt:_t,$=Rd(i,n,d,Gt-Q-$e.step*.7,Gt+Q+$e.step*.7),tt=d*(Nt-d*nt-$)>=0,gt=d*($-(Nt+d*nt));if(tt)L.obstacle=!1;else if(gt<$e.fill){const it=Nt+d*(K.box?nt*.5:0),ot=Math.abs($+d*$e.thickness*.5-it)/2,Ut=K.box?xt:_t*.7;o({id:`${L.id}-fill`,x:(it+$+d*$e.thickness*.5)/2,y:Gt,type:"edgewall",radius:Math.hypot(ot,Ut),collision:{kind:"box",halfX:ot,halfY:Ut},width:ot*2,depth:Ut*2,obstacle:!0,blocksShots:!1,invisible:!0,side:d,scale:1,rotation:0,biome:b.id})}f.push(L),o(L)}}return f}const Vd=.85,Ka=15;function sc(i,t={}){const e=typeof i=="string"?ee[i]:i;if(!e?.range)return{min:0,max:0};const{min:n,max:s}=e.range;return{min:n,max:t.rapid>0?Math.max(n+4,Math.round(s*Vd*100)/100):s}}function Ur(i,t={}){return sc(i,t).max}const ee=Object.freeze(Object.fromEntries(Object.entries({sidearm:{id:"sidearm",name:"Courier sidearm",shortName:"SIDEARM",color:"#ffe6aa",range:{min:0,max:15},ammo:1/0,damage:18,cooldown:.46,pellets:1,spread:0,projectileSpeed:41,radius:.2},scattergun:{id:"scattergun",name:"Scattergun",shortName:"SCATTERGUN",color:"#ffad6c",range:{min:0,max:12},ammo:36,damage:11,cooldown:.84,pellets:5,spread:.36,projectileSpeed:36,radius:.22},rifle:{id:"rifle",name:"Burst rifle",shortName:"BURST RIFLE",color:"#a8ffe1",range:{min:12,max:30},ammo:60,damage:15,cooldown:.57,pellets:3,spread:.055,projectileSpeed:51,radius:.17},arc:{id:"arc",name:"Arc launcher",shortName:"ARC LAUNCHER",color:"#c5b3ff",range:{min:24,max:50},ammo:16,damage:58,cooldown:1.38,pellets:1,spread:0,projectileSpeed:30,radius:.35,splash:5.2}}).map(([i,t])=>[i,Object.freeze({...t,range:Object.freeze({...t.range})})]))),hr=3,Wd=.5,Ja=5;function Xu(i){const t=ee[i];return{name:t.name,damage:t.damage*t.pellets,rate:Math.round(100*t.pellets/t.cooldown)/100,range:{...t.range},cooldown:t.cooldown,ammo:t.ammo}}function Xd(i,t={}){const e=sc(i,t);return(e.min+e.max)/2}const $d=Object.freeze([{contact:1,damage:1,pack:0,ambush:0,spawn:1,maxEnemies:10,runner:.1,dogs:0,guardianHp:1,guardianDamage:12,aggression:1,signatureEvery:4,minionCap:6,reward:1,heal:20,healChance:.24},{contact:1.25,damage:1.12,pack:0,ambush:0,spawn:.96,maxEnemies:16,runner:.12,dogs:.03,guardianHp:1.05,guardianDamage:16,aggression:1.06,signatureEvery:3,minionCap:6,reward:.96,heal:19,healChance:.23},{contact:1.5,damage:1.18,pack:1,ambush:1,spawn:.92,maxEnemies:22,runner:.15,dogs:.06,guardianHp:1.1,guardianDamage:22,aggression:1.12,signatureEvery:3,minionCap:6,reward:.92,heal:18,healChance:.22},{contact:1.75,damage:1.25,pack:1,ambush:2,spawn:.88,maxEnemies:28,runner:.18,dogs:.09,guardianHp:1.15,guardianDamage:26,aggression:1.18,signatureEvery:2,minionCap:6,reward:.88,heal:17,healChance:.21},{contact:2,damage:1.32,pack:1,ambush:2,spawn:.84,maxEnemies:32,runner:.21,dogs:.12,guardianHp:1.2,guardianDamage:30,aggression:1.24,signatureEvery:2,minionCap:4,reward:.85,heal:16,healChance:.2},{contact:2.3,damage:1.4,pack:2,ambush:3,spawn:.8,maxEnemies:36,runner:.24,dogs:.15,guardianHp:1.25,guardianDamage:34,aggression:1.3,signatureEvery:2,minionCap:4,reward:.82,heal:15,healChance:.19}].map(i=>Object.freeze(i))),pn={walker:{hp:36,radius:.95,speed:6.3,damage:11,attackDelay:1.2},dog:{hp:28,radius:.65,speed:12.5,damage:9,attackDelay:1.05},brute:{hp:135,radius:1.65,speed:2.8,damage:15,attackDelay:1.65},boss:{hp:410,radius:2.9,speed:3.3,damage:22,attackDelay:3.2}},Qn={dog:{windup:.6,life:.5,speed:17,reach:15,cooldown:2.4,spread:2.2,first:1.2},walker:{windup:.8,life:.5,speed:15,reach:12,cooldown:2.8,spread:2.2,first:1.6}},Wi={life:1.1,speed:8.2},Xc={dog:.5,walker:.5,brute:.125,boss:.0625},Xi={speed:11.5,near:6,far:18,stamina:2,cooldown:4},$c=[[0,.785,.9],[.785,1.3,.1]],Yd=600,qd=5,jd=15,Yc=80*Math.PI/180,$i=Object.freeze({rapid:10,power:10,speed:8}),zs=30,Kd={dog:.07,walker:.1,brute:.25},Jd=.3,Zd=3,Ue=.48,ti=.8,Or={share:.35,cooldown:.8,overlap:.8},Qd=.25,qc={count:3,radius:8},Vn={count:4,radius:6,time:2,cooldown:6,rate:.6},tp=Object.freeze({sidearm:25,rifle:35,scattergun:40,arc:55}),ep=1.15,np=60,Za=10,vi={share:.35,max:2.4,turn:1.6,hold:1.2,spread:1.4,road:18},ip=.3,sp=.3,Yi=1e-7,rc=i=>$d[ds(i)],qi=i=>rc(i).heal,Qa=i=>rc(i).healChance,rp=["The Tollkeeper","Rootbound","The Undertow","The Hollow Sun","The Cairn","The Last Warden"],Hs=Object.freeze(["toll","root","tide","sun","cairn","warden"]),jc=Object.freeze({toll:[{kind:"burst",windup:1.4,radius:7,inner:0,text:"tolls its bell · get clear of the ring"}],root:[{kind:"line",windup:1.2,length:24,width:3.2,text:"drives roots along the ground · step off the red line"}],tide:[{kind:"sweep",windup:1.25,radius:11,arc:.96,text:"raises a wave · get out of the red fan"}],sun:[{kind:"burst",windup:1.3,radius:10.5,inner:4.5,text:"flares · hug it inside the ring or run past the edge"}],cairn:[{kind:"rockfall",windup:1.2,radius:2.6,text:"brings down rocks · leave the red circles"}],warden:[{kind:"line",windup:1.15,length:26,width:3.4,text:"drives roots along the ground · step off the red line"},{kind:"sweep",windup:1.2,radius:11.5,arc:1,text:"raises a wave · get out of the red fan"},{kind:"rockfall",windup:1.15,radius:2.7,text:"brings down rocks · leave the red circles"},{kind:"burst",windup:1.25,radius:10.5,inner:4.5,text:"flares · hug it inside the ring or run past the edge"}]}),ap=["charge","slam","line","sweep","burst","rockfall"],Fr={x:.781,y:.625},kr={x:-.625,y:.781},Kc=Object.freeze({side:17,ahead:46,behind:34}),op=2.5,Jc=2,Zc=4,to={life:12,stall:1,deaf:4},ji={cos:.92,share:.55,stall:.25,scan:12,past:1.1},Qc={hold:5,metres:1},lp=1,$u=30,th=`Rest restores +${$u} health, up to 100`,eh=4,Br={distance:150,gap:10,trim:2,block:3},eo={after:4,rate:.2,step:1},Ki=Object.freeze({warning:1.2,lull:4}),zr={ahead:35,near:40,offRoad:12,back:10},no={turns:[20,32,44,56,68],free:.7,gain:.12},cp=["sidearm","scattergun"],nh=1,ur=3,Yu=Object.freeze({journey:Object.freeze([900,1350,1800,2250,2700,3150]),express:Object.freeze([150,225,300,375,450,525])}),mi=(i,t)=>Yu[i==="express"?"express":"journey"][ds(t)],qu=i=>i==="express"?450:2700,ac=i=>i==="express"?300:1800,ju=i=>i.legLength??(i.routeVersion===2?qu(i.pace):i.routeVersion===ur?mi(i.pace,i.leg):ac(i.pace)),hp=i=>i.routeVersion===ur?mi(i.pace,i.leg):i.routeVersion===2?qu(i.pace):ac(i.pace),up=i=>Math.round(i/Math.max(2,Math.round(i/Yd))),io=Math.PI*2,pe=(i,t,e)=>Math.max(t,Math.min(e,i)),ds=i=>pe(Math.floor(i)||0,0,5),Se=(i,t)=>Math.hypot(i.x-t.x,i.y-t.y),Re=i=>JSON.parse(JSON.stringify(i)),Pt=i=>typeof i=="number"&&Number.isFinite(i);function fp(i){if(typeof i=="number"&&Number.isFinite(i))return i>>>0||1;let t=2166136261;for(const e of String(i??"kuru"))t=Math.imul(t^e.charCodeAt(0),16777619);return t>>>0||1}function Jo(i,t,e,n,s,r,a){const o=e-i,l=n-t,c=i-s,h=t-r,f=c*c+h*h-a*a;if(f<=0)return 0;const u=o*o+l*l;if(!u)return null;const d=c*o+h*l,m=d*d-u*f;if(m<0)return null;const x=(-d-Math.sqrt(m))/u;return x>=0&&x<=1?x:null}function dp(i,t,e,n,s,r){let a=0,o=1;for(const[l,c,h,f]of[[i,e-i,s.x,s.collision.halfX+r],[t,n-t,s.y,s.collision.halfY+r]]){if(Math.abs(c)<1e-10){if(Math.abs(l-h)>f)return null;continue}const u=(h-f-l)/c,d=(h+f-l)/c;if(a=Math.max(a,Math.min(u,d)),o=Math.min(o,Math.max(u,d)),a>o)return null}return a}const ps=i=>i.obstacle!==!1&&i.radius>0&&!["crate","locker","lootbox","ammo"].includes(i.type),so=(i,t,e,n)=>i.collision?.kind==="box"?Math.abs(t-i.x)<i.collision.halfX+n&&Math.abs(e-i.y)<i.collision.halfY+n:Math.hypot(t-i.x,e-i.y)<i.radius+n,ih=i=>ps(i)&&!(i.type==="edgewall"&&i.side&&!String(i.id).endsWith("-fill")),sh=i=>ps(i)&&i.blocksShots!==!1,Gs=(i,t,e,n,s,r)=>s.collision?.kind==="box"?dp(i,t,e,n,s,r):Jo(i,t,e,n,s.x,s.y,s.radius+r);function pp(i){if(i.combatVersion!==1){for(const t of i.enemies){const e=pe(t.hp/t.maxHp,0,1);t.type!=="boss"&&(t.maxHp=pn[t.type].hp*(1+i.leg*.045)),t.hp=t.maxHp*e,t.damage=pn[t.type].damage+(t.type==="boss"?i.leg*4:0)}i.combatVersion=1}i.worldVersion=1}function pa(i){const t=Re(i),e=ju(t),n=mi(t.pace,t.leg),s=n/e,r=o=>{const l=o.y;o.y*=s,o.x+=Qt(o.y,t.seed,n)-Qt(l,t.seed,e)},a=(o,l,c)=>{const h={x:o,y:l},f={x:o+Math.sin(c),y:l+Math.cos(c)};return r(h),r(f),Math.atan2(f.x-h.x,f.y-h.y)};if(s!==1){const o=new Map(t.crateHealth||[]);for(const c of t.crates)c.hp>0&&c.hp<30&&o.set(c.id,c.hp);const l=t.player;Pt(l.aimAngle)&&(l.aimAngle=a(l.x,l.y,l.aimAngle)),r(l);for(const c of["enemies","projectiles","drops","crates"])for(const h of t[c]){const{x:f,y:u}=h;Pt(h.angle)&&(h.angle=a(f,u,h.angle)),h.telegraph&&(h.telegraph.angle=a(f,u,h.telegraph.angle),Pt(h.telegraph.x)&&Pt(h.telegraph.y)&&r(h.telegraph)),h.charge&&(h.charge.angle=a(f,u,h.charge.angle)),r(h),c==="enemies"&&(h.radius=pn[h.type].radius)}t.crateHealth=[...o],t.crates=[]}return t.routeVersion=ur,t.legLength=n,pp(t),Ku(t),t.checkpoint&&(t.checkpoint=pa(t.checkpoint)),t.guardianCheckpoint&&(t.guardianCheckpoint=pa(t.guardianCheckpoint)),t.waypointCheckpoint&&(t.waypointCheckpoint=pa(t.waypointCheckpoint)),t}function Ku(i){if(Array.isArray(i.weaponSlots))return;const t=(Array.isArray(i.weapons)?i.weapons:[]).filter(e=>e!=="sidearm"&&ee[e]);i.weaponSlots=ga(["sidearm",...[...new Set(t)].slice(-2)]).map(Ju),!i.weaponSlots.some(e=>e?.id===i.player?.weapon)&&i.player&&(i.player.weapon="sidearm")}function ma(i){const t=ee[i];return{id:i,ammo:t.ammo,maxAmmo:t.ammo,cooldown:0,cooldownMax:t.cooldown}}function ga(i){const t=[...new Set(i)].filter(e=>ee[e]).slice(0,hr);return Array.from({length:hr},(e,n)=>t[n]?ma(t[n]):null)}const Ju=i=>i&&{...i,ammo:Pt(i.ammo)?i.ammo:null,maxAmmo:Pt(i.maxAmmo)?i.maxAmmo:null},mp=i=>i&&{id:i.id,ammo:i.ammo??1/0,maxAmmo:i.maxAmmo??1/0,cooldown:pe(i.cooldown||0,0,5),cooldownMax:Pt(i.cooldownMax)&&i.cooldownMax>0?i.cooldownMax:ee[i.id].cooldown},gp=i=>Array.isArray(i)&&i.length===hr&&i[0]?.id==="sidearm"&&new Set(i.filter(Boolean).map(t=>t.id)).size===i.filter(Boolean).length&&i.every(t=>t===null||t&&typeof t=="object"&&ee[t.id]&&(ee[t.id].ammo===1/0?t.ammo===null&&t.maxAmmo===null:Number.isInteger(t.ammo)&&t.maxAmmo===ee[t.id].ammo&&t.ammo>=0&&t.ammo<=t.maxAmmo)&&Pt(t.cooldown)&&t.cooldown>=0&&t.cooldown<=5&&Pt(t.cooldownMax)&&t.cooldownMax>0&&t.cooldownMax<=5);class Je{constructor({seed:t=Date.now(),saved:e=null,pace:n="journey"}={}){if(e&&!Je.validateSave(e))throw new Error("This checkpoint cannot be read. Its save data is incomplete or from a different version.");e&&(e=pa(e)),this.seed=fp(e?.seed??t),this.pace=e?.pace??(n==="express"?"express":"journey"),this.speed=9,this.totalLegs=6,this.mode="playing",this.player={x:Qt(0,this.seed,this.legLength),y:0,hp:100,maxHp:100,shield:0,angle:0,aimAngle:0,lastShotAt:null,movingSpeed:0,velocity:{x:0,y:0},weapon:"sidearm",blocked:!1,hurtFlash:0,panic:0,panicCooldown:0},this.enemies=[],this.projectiles=[],this.drops=[],this.effects=[],this.crates=[],this.events=[],this.elapsed=0,this.leg=0,this.progress=0,this.kills=0,this.combo=0,this.weaponSlots=ga(cp),this.weaponOffer=null,this.cardOpen=!1,this.view={...Kc},this.buffs={rapid:0,power:0,speed:0},this.cargo=100,this._boss=null,this.checkpointCount=0,this._rngState=this.seed,this._nextId=1,this._legElapsed=0,this._spawnClock=5,this._fireClock=0,this._comboClock=0,this._hurtClock=0,this._bossSpawned=!1,this._bossDefeated=!1,this._bossReinforcementClock=0,this._bossWave=0,this._quietCycle=-1,this._destroyedCrates=new Set,this._knownCrates=new Set,this._crateHealth=new Map,this._cratesOpened=0,this._emptyCrates=0,this._noticeClock=0,this.refugeReport=null,this._blockedClock=0,this._blockedNotified=!1,this._props=[],this._propsY=-1/0,this._lastEncounter=-1,this._checkpointSnapshot=null,this._guardianSnapshot=null,this._waypointSnapshot=null,this._waypointK=0,this._ambushQueue=[],this._gateClock=0,this._beaconMissed=!1,this._guardianFails=0,this._holdClock=0,this._holdStart=null,this._stuck=!1,this._graceClock=eh,this._frontier=this.player.y,this._lingerClock=0,this._encounterAt=-1/0,this._minionCall=null,this._bossLull=0,this._slideSide=0,this._refreshWorld(),this._checkpointSnapshot=this._snapshot(),e&&(this._restore(e),this._checkpointSnapshot=Re(e.checkpoint||this._snapshot()),this._guardianSnapshot=e.guardianCheckpoint?Re(e.guardianCheckpoint):null,this._waypointSnapshot=e.waypointCheckpoint?Re(e.waypointCheckpoint):null,this._refreshWorld(!0),this._freshStart()),this._updateObjective()}get boss(){return this._boss&&this._boss.hp>0&&this.enemies.includes(this._boss)?this._boss:null}set boss(t){this._boss=t}_random(){this._rngState=this._rngState+1831565813>>>0;let t=this._rngState;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}_id(){return this._nextId++}get legLength(){return this._legLengthOverride??mi(this.pace,this.leg)}set legLength(t){this._legLengthOverride=Pt(t)&&t>=100?t:null}get legLengths(){return Yu[this.pace]}legStart(t=this.leg){return ds(t)*mi(this.pace,t)}_routeBefore(t){return this.legLengths.slice(0,pe(Math.floor(t)||0,0,this.totalLegs)).reduce((e,n)=>e+n,0)}get routeLength(){return this._routeBefore(this.totalLegs)}get waypointSpacing(){return up(this.legLength)}get weapons(){return this.weaponSlots.filter(Boolean).map(t=>t.id)}set weapons(t){const e=new Map(this.weaponSlots.filter(Boolean).map(n=>[n.id,n]));this.weaponSlots=ga(t).map(n=>n&&(e.get(n.id)??n))}_slotOf(t){return this.weaponSlots.findIndex(e=>e?.id===t)}_armed(t){const e=this.weaponSlots[this._slotOf(t)];return!!e&&e.ammo>0}get difficulty(){return rc(this.leg)}get maxEnemies(){return this.difficulty.maxEnemies}_alive(){return this.enemies.filter(t=>t.hp>0).length}_event(t,e,n={}){this.events.push({type:t,text:e,...n}),this.events.length>48&&this.events.splice(0,this.events.length-48)}_effect(t,e,n,s=.45,r={}){this.effects.push({id:this._id(),type:t,x:e,y:n,life:s,maxLife:s,...r})}_refreshWorld(t=!1){if(this.biome=mn(this.player.y,this.seed,this.legLength,this.player.x),!t&&Math.abs(this.player.y-this._propsY)<30)return;this._propsY=this.player.y,this._props=Wu(this.seed,this.player.y-85,this.player.y+105,this.legLength)||[];for(const h of this.crates)h.hp>0&&h.hp<30&&this._crateHealth.set(h.id,h.hp);this.crates=this.crates.filter(h=>Math.abs(h.y-this.player.y)<115&&!this._destroyedCrates.has(h.id));const e=new Set(this.crates.map(h=>h.id)),n=h=>h>this._propsY-75&&h<this._propsY+90;for(const h of this._props){if(!["crate","locker","lootbox","ammo"].includes(h.type)||e.has(h.id)||this._destroyedCrates.has(h.id)||h.y<2||!n(h.y))continue;this._knownCrates.add(h.id),e.add(h.id);const f=this._reachablePoint(h.x,h.y,1,(u,d)=>Math.hypot(u-this.player.x,d-this.player.y)>=3.5);this.crates.push({id:h.id,x:f.x,y:f.y,radius:h.radius||.8,hp:this._crateHealth.get(h.id)??30,maxHp:30,type:h.type})}const s=this.checkpointY-(this.pace==="express"?50:60),r=`medcache-${this.leg}`,a=s-30;if(!this._bossSpawned&&!e.has(r)&&!this._destroyedCrates.has(r)&&a>this.leg*this.legLength+20&&n(a)){const h=this._reachablePoint(Qt(a,this.seed,this.legLength)+4.5,a,1,(f,u)=>Math.hypot(f-this.player.x,u-this.player.y)>=3.5);this._knownCrates.add(r),e.add(r),this.crates.push({id:r,x:h.x,y:h.y,radius:.8,hp:this._crateHealth.get(r)??30,maxHp:30,type:"locker",medkit:!0})}const o=82.5,l=Math.floor((this.player.y-70)/o),c=Math.ceil((this.player.y+90)/o);for(let h=Math.max(0,l);h<=c;h++){const f=`supply-${h}`;if(e.has(f)||this._destroyedCrates.has(f))continue;const u=h*o+21;if(!n(u))continue;const d=(h+this.seed)%2?-1:1;this._knownCrates.add(f),e.add(f);const m=this._reachablePoint(Qt(u,this.seed,this.legLength)+d*4.6,u,1,(x,g)=>Math.hypot(x-this.player.x,g-this.player.y)>=3.5);this.crates.push({id:f,x:m.x,y:m.y,radius:.8,hp:this._crateHealth.get(f)??30,maxHp:30,type:h%3===0?"locker":"crate"})}}_corridor(t){const e=ir(this.seed,this.legLength,this.totalLegs),n=Ze(t,this.seed,this.legLength);return{minX:Math.max(n.minX,e.minX),maxX:Math.min(n.maxX,e.maxX),minY:e.minY,maxY:e.maxY}}_reachable(t,e,n=.9){const s=this._corridor(e);return t<s.minX+n||t>s.maxX-n||e<s.minY||e>s.maxY?!1:!this._props.some(r=>ps(r)&&so(r,t,e,n))}_reachablePoint(t,e,n=.9,s=null,r=!1){const a=(l,c)=>this._reachable(l,c,n)&&(!s||s(l,c));if(a(t,e))return{x:t,y:e};for(let l=.8;l<=(r?48:32);l+=.8){const c=Math.max(8,Math.ceil(l*2.4));for(let h=0;h<c;h++){const f=(h/c+l*.37)*io,u=t+Math.sin(f)*l,d=e+Math.cos(f)*l;if(a(u,d))return{x:u,y:d}}}if(r)return null;const o=this._corridor(e);return{x:pe(Qt(e,this.seed,this.legLength),o.minX,o.maxX),y:pe(e,o.minY,o.maxY)}}_arenaSpot(t){const e=Nn(t-1,this.seed,this.legLength);if(e){const s=pe(this.player.y+30,e.minY+14,t-14);for(const r of[0,-6,6,-12,12]){const a=Qt(s,this.seed,this.legLength)+r;if(this._reachable(a,s,3))return{x:a,y:s}}}let n=null;for(let s=20;s<=36;s+=4){const r=Math.min(t-4,this.player.y+s);for(const a of[0,-8,8,-16,16]){const o=Qt(r,this.seed,this.legLength)+a;if(!this._reachable(o,r,3))continue;const c=this._props.filter(h=>ps(h)&&so(h,o,r,12)).length*10+Math.abs(a)*.3+(s-20)*.2;(!n||c<n.cost)&&(n={x:o,y:r,cost:c})}}return n?{x:n.x,y:n.y}:this._reachablePoint(this.player.x,Math.min(t-4,this.player.y+18),2)}_takeGuardianSnapshot(t){const e=this._snapshot();e.player.y=Math.max(t,this.leg*this.legLength),e.player.x=Qt(e.player.y,this.seed,this.legLength),e.player.hp=e.player.maxHp,e.player.velocity={x:0,y:0},e.player.movingSpeed=0,e.progress=pe((e.player.y-this.leg*this.legLength)/this.legLength,0,1),e.enemies=[],e.projectiles=[],this._guardianSnapshot=e}_easing(){return this._guardianFails>=2?3:this._guardianFails>=1?2:0}get canRetryGuardian(){return!!this._guardianSnapshot&&this.mode==="dead"}_blockedAt(t,e,n,s=!1){return this._props.some(r=>(s?ih(r):ps(r))&&so(r,t,e,n))}_solidsNear(t,e,n,s=!1){const r=[];for(const a of this._props){if(!(s?ih(a):ps(a)))continue;const o=a.collision?.kind==="box";Math.abs(a.x-t)<(o?a.collision.halfX:a.radius)+n&&Math.abs(a.y-e)<(o?a.collision.halfY:a.radius)+n&&r.push(a)}return r}static _pushOut(t,e,n,s){if(t.collision?.kind==="box"){const c=e-t.x,h=n-t.y,f=t.collision.halfX+s-Math.abs(c),u=t.collision.halfY+s-Math.abs(h);return f<=Yi||u<=Yi?null:f<u?{x:(c<0?-1:1)*f,y:0}:{x:0,y:(h<0?-1:1)*u}}const r=e-t.x,a=n-t.y,o=Math.hypot(r,a),l=t.radius+s;return o>=l-Yi?null:o<1e-6?{x:l,y:0}:{x:r/o*(l-o),y:a/o*(l-o)}}_moveBody(t,e,n,s,r=!1){const a={collided:!1,barrier:!1,gate:!1};if(!e&&!n)return a;const o=this._solidsNear(t.x+e/2,t.y+n/2,s+(Math.abs(e)+Math.abs(n))/2+.1,r);if(!o.length)return t.x+=e,t.y+=n,a;const l=m=>{a.collided=!0,m.barrier&&(a.barrier=!0),(m.type==="gatewall"||m.type==="gatepillar")&&(a.gate=!0)},c={x:t.x,y:t.y},h=!o.some(m=>Je._pushOut(m,c.x,c.y,s));let f=c;const u=(m,x)=>{const g={x:c.x,y:c.y};f=g;for(const[p,M,y]of[["x","y",m],["y","x",x]]){if(!y)continue;let _=g[p]+y;for(const w of o){if(w.collision?.kind!=="box")continue;const E=(p==="x"?w.collision.halfX:w.collision.halfY)+s,A=(p==="x"?w.collision.halfY:w.collision.halfX)+s;if(Math.abs(g[M]-w[M])>=A-Yi)continue;const D=g[p]-w[p];Math.abs(D)<E-Yi||(y>0&&D<0&&_>w[p]-E?(_=w[p]-E,l(w)):y<0&&D>0&&_<w[p]+E&&(_=w[p]+E,l(w)))}g[p]=_}for(let p=0;p<4;p++){let M=!1;for(const y of o){const _=Je._pushOut(y,g.x,g.y,s);_&&(l(y),g.x+=_.x,g.y+=_.y,M=!0)}if(!M)return g}return o.some(p=>Je._pushOut(p,g.x,g.y,s))?null:g};let d=u(e,n);return!d&&h&&(d=e&&n&&(u(e,0)||u(0,n))||c),d||(d=h?c:f),t.x=d.x,t.y=d.y,a}_walkEnemy(t,e,n,s,r){const a=Math.hypot(e,n)||1;let o=Math.atan2(e,n);t.detour&&(o+=t.detour.side*1.1,t.detour.life-=r,t.detour.life<=0&&(t.detour=null));const l=Math.sin(o)*s*r,c=Math.cos(o)*s*r,h={x:t.x,y:t.y},{collided:f}=this._moveBody(t,l,c,t.radius*ti);t.detour&&f&&(t.detour.life=Math.max(t.detour.life,.5));const u=Math.hypot(t.x-h.x,t.y-h.y);return t.snag=u<s*r*.35?(t.snag||0)+r:Math.max(0,(t.snag||0)-r),t.snag>.4&&!t.detour&&(t.detourSide??=this._random()<.5?-1:1,t.detour={side:t.detourSide,life:3},t.snag=0),a}_lungeAim(t,e){const n=this.player.velocity;let s=e.life*.5,r=this.player.x,a=this.player.y;for(let o=0;o<6;o++)r=this.player.x+n.x*(e.windup+s),a=this.player.y+n.y*(e.windup+s),s=Math.hypot(r-t.x,a-t.y)/e.speed;return{angle:Math.atan2(r-t.x,a-t.y),ok:s<=e.life*.96,reach:Math.hypot(r-t.x,a-t.y)}}_lineClear(t,e,n=.2,s=0){const r=Math.hypot(e.x-t.x,e.y-t.y),a=Math.min(t.x,e.x),o=Math.max(t.x,e.x),l=Math.min(t.y,e.y),c=Math.max(t.y,e.y);for(const h of this._props){if(!sh(h))continue;const f=(h.collision?.halfX??h.radius)+n,u=(h.collision?.halfY??h.radius)+n;if(h.x+f<a||h.x-f>o||h.y+u<l||h.y-u>c)continue;const d=Gs(t.x,t.y,e.x,e.y,h,n);if(d!==null&&d*r<r-s)return!1}return!0}_updateRunner(t,e,n){return t.sprintCooldown>0?(t.sprintCooldown=Math.max(0,t.sprintCooldown-n),t.sprintCooldown===0&&(t.sprintLeft=Xi.stamina),!1):e<Xi.near||e>Xi.far||!this._lineClear(t,this.player)?!1:(t.sprintLeft-=n,t.sprintLeft<=0?(t.sprintCooldown=Xi.cooldown,!1):(t.sprinting=!0,!0))}update(t,e={x:0,y:0}){if(this.mode!=="playing"){this._stopPlayerMotion();return}if(this.cardOpen){this._stopPlayerMotion();return}if(!Pt(t)||t<=0)return;let n=Math.min(t,.35);for(;n>0;){const s=Math.min(n,.03333333333333333);if(this._step(s,e),n-=s,this.mode!=="playing"||this.cardOpen)break}}_step(t,e){this.elapsed+=t,this._legElapsed+=t,this._fireClock-=t,this._hurtClock=Math.max(0,this._hurtClock-t),this._graceClock=Math.max(0,this._graceClock-t),this._bossLull=Math.max(0,this._bossLull-t),this.player.hurtFlash=Math.max(0,(this.player.hurtFlash||0)-t),this.player.panic=Math.max(0,(this.player.panic||0)-t),this.player.panicCooldown=Math.max(0,(this.player.panicCooldown||0)-t),this._comboClock-=t,this._comboClock<=0&&(this.combo=0);for(const p of Object.keys(this.buffs))this.buffs[p]=Math.max(0,this.buffs[p]-t);for(const p of this.weaponSlots)p&&(p.cooldown=Math.max(0,p.cooldown-t));this._tickOffer(t);for(const p of this.effects)p.life-=t;this.effects=this.effects.filter(p=>p.life>0).slice(-150);let n=Pt(e.x)?e.x:0,s=Pt(e.y)?e.y:0;const r=Math.hypot(n,s);r>1&&(n/=r,s/=r);const a=this.buffs.speed>0?1.25:1,o=this.player.x,l=this.player.y,c=this._movePlayer(n*this.speed*a*t,s*this.speed*(s<0?a:1)*t),h=ir(this.seed,this.legLength,this.totalLegs);this.player.y=pe(this.player.y,h.minY,h.maxY),this._gateClock=Math.max(0,this._gateClock-t),this._noticeClock=Math.max(0,this._noticeClock-t);let f=this._touchedGate&&s>.3;if(this._bossSpawned){const p=Nn(this.checkpointY-1,this.seed,this.legLength),M=p?p.gateY-.5:this.checkpointY+jd;if(this.player.y>M){const y=this.player.y;this.player.y=Math.min(y,Math.max(l,M)),this.player.y<y&&(f=!0)}}const u=this.boss;f&&u&&this._gateClock<=0&&(this._gateClock=Zc,this._event("guardianGate",`Defeat ${u.name||"the guardian"} to open the gate`,{guardian:u.name}));const d=this._corridor(this.player.y),m=this._touchedEdge||this.player.x<d.minX||this.player.x>d.maxX;this.player.x=pe(this.player.x,d.minX,d.maxX),this._blockedAt(this.player.x,this.player.y,Ue-.01,!0)&&!this._blockedAt(o,l,Ue-.01,!0)&&(this.player.x=o,this.player.y=l);const x=Math.hypot(this.player.x-o,this.player.y-l)/t;if(this.player.velocity=r>.06?{x:(this.player.x-o)/t,y:(this.player.y-l)/t}:{x:0,y:0},this.player.movingSpeed=r>.06?x:0,this.player.blocked=(c||m)&&r>.06&&x<.15,r>.06){if(this._holdStart??={x:this.player.x,y:this.player.y},this._holdClock+=t,this._holdClock>=4){const M=Math.hypot(this.player.x-this._holdStart.x,this.player.y-this._holdStart.y)<3;if(M&&!this._stuck){const y=this.guideArrow,_=this.guideTarget;this._event("stuck",`Stuck? The route is ${y} · drag around the obstacle`,{arrow:y,target:{x:_.x,y:_.y}})}this._stuck=M,this._holdClock=0,this._holdStart={x:this.player.x,y:this.player.y}}}else this._holdClock=0,this._holdStart=null;if(this._stuck&&r>.06&&Math.hypot(this.player.x-(this._holdStart?.x??this.player.x),this.player.y-(this._holdStart?.y??this.player.y))>3&&(this._stuck=!1),this.player.blocked?(this._blockedClock+=t,this._blockedClock>=1&&!this._blockedNotified&&(this._blockedNotified=!0,m||this._touchedBarrier?this._event("blocked","No way through · head back toward the road",{edge:!0}):this._event("blocked","Path blocked · drag sideways around the obstacle"))):(this._blockedClock=0,r>.06&&x>=.15&&(this._blockedNotified=!1)),r>.06&&x>.15&&(this.player.angle=Math.atan2(this.player.velocity.x,this.player.velocity.y)),this._refreshWorld(),this.progress=pe((this.player.y-this.leg*this.legLength)/this.legLength,0,1),this.player.y>this._frontier+eo.step?(this._frontier=this.player.y,this._lingerClock=0):this._lingerClock+=t,this._updatePacing(t),this._updateEnemies(t),this.mode!=="playing")return;this._updatePanic(),this._autoFire(),this._updateProjectiles(t),this._openTouchedCrates(),this._collectDrops(t);const g=this._heading();this.enemies=this.enemies.filter(p=>p.hp>0&&(p.type==="boss"||Se(p,this.player)<100&&this._alongAcross(p.x,p.y,g).along>-45)),this.boss=this.enemies.find(p=>p.type==="boss"&&p.hp>0)||null,this.progress>=1&&this._bossDefeated?this._reachCheckpoint():(this._watchBeacon(),this._watchWaypoint()),this._updateObjective()}_watchWaypoint(){if(this.pace!=="journey"||this._bossSpawned||this.mode!=="playing")return;const t=Math.floor((this.player.y-this.leg*this.legLength)/this.waypointSpacing);if(t<1||t<=this._waypointK&&this._waypointSnapshot)return;this._waypointK=t;const e=this._snapshot();e.enemies=[],e.projectiles=[],e.ambushQueue=[],e.player.hp=Math.max(e.player.hp,60),e.player.velocity={x:0,y:0},e.player.movingSpeed=0,e.spawnClock=Math.max(e.spawnClock,4),this._waypointSnapshot=e,this._event("waypoint","Waypoint saved · a fall here restarts from this spot")}get canRetryWaypoint(){return!!this._waypointSnapshot&&!this._guardianSnapshot&&this.mode==="dead"}retryWaypoint(){if(!this._waypointSnapshot)return!1;const t=this.kills,e=this.weaponSlots;return this._restore(Re(this._waypointSnapshot)),this.kills=Math.max(this.kills,t),this._keepLoadout(e),this.player.hp=this.player.maxHp,this._guardianSnapshot=null,this.events=[],this._refreshWorld(!0),this._hurtClock=2,this._freshStart(),this._event("retry","Back at your last waypoint. The road ahead is as you left it."),!0}_watchBeacon(){const t=this.player.x-Qt(this.checkpointY,this.seed,this.legLength);if(this.player.y>this.checkpointY+20||this.player.y>this.checkpointY-30&&Math.abs(t)>20){if(this._beaconMissed||this.boss)return;this._beaconMissed=!0,this._event("beaconMissed","Refuge behind you · follow the arrow")}else(this.checkpointDistance<15||this.player.y<this.checkpointY-30)&&(this._beaconMissed=!1)}_movePlayer(t,e){const n={x:this.player.x,y:this.player.y},{collided:s,barrier:r,gate:a}=this._moveBody(this.player,t,e,Ue,!0);this._touchedBarrier=r,this._touchedGate=a;const o=this._corridor(this.player.y),l=pe(this.player.x,o.minX,o.maxX);return this._touchedEdge=l!==this.player.x,this._touchedEdge&&(this._blockedAt(l,this.player.y,Ue-.01,!0)&&!this._blockedAt(n.x,n.y,Ue-.01,!0)?(this.player.x=n.x,this.player.y=n.y):this.player.x=l),s&&Math.hypot(this.player.x-n.x,this.player.y-n.y)<Math.hypot(t,e)*ji.stall&&!this._glide(n,t,e)&&this._headOnSlide(t,e),s}_courierMove(t,e,n){const s={x:t.x,y:t.y};this._moveBody(s,e,n,Ue,!0);const r=this._corridor(s.y),a=pe(s.x,r.minX,r.maxX);return a!==s.x&&this._blockedAt(a,s.y,Ue-.01,!0)?null:(s.x=a,s)}_glide(t,e,n){const s=Math.hypot(e,n);if(s<1e-4)return!1;const r=e/s,a=n/s,o=Math.atan2(r,a),l=(this.player.x-t.x)*r+(this.player.y-t.y)*a;this._slideSide&&Math.abs(Math.atan2(Math.sin(o-(this._slideHeading??o)),Math.cos(o-(this._slideHeading??o))))>.5&&(this._slideSide=0);const c=Math.sign(Qt(t.y,this.seed,this.legLength)-t.x)||1,h=this._slideSide||(Math.cos(o)*c>=0?1:-1);for(const f of no.turns){const u=f*Math.PI/180,d=s*Math.cos(u);let m=null;for(const x of[h,-h]){const g=o+x*u,p=Math.sin(g),M=Math.cos(g),y=this._courierMove(t,p*d,M*d);if(!y)continue;const _=y.x-t.x,w=y.y-t.y,E=_*p+w*M,A=_*r+w*a;E>=d*no.free&&A>=Math.max(s*no.gain,l+1e-6)&&(!m||A>m.gain+1e-9)&&(m={end:y,gain:A,side:x})}if(m)return this.player.x=m.end.x,this.player.y=m.end.y,this._slideSide=m.side,this._slideHeading=o,!0}return!1}_headOnSlide(t,e){const n=this.player,s=Math.hypot(t,e);if(s<1e-4)return;const r=t/s,a=e/s,o=(l,c)=>{const h=this._corridor(c);return l>=h.minX&&l<=h.maxX&&!this._blockedAt(l,c,Ue-.02,!0)};for(const l of this._solidsNear(n.x,n.y,Ue+.12,!0)){if(["edgewall","gatewall","gatepillar"].includes(l.type))continue;let c;if(l.collision?.kind==="box"){const g=n.x-l.x,p=n.y-l.y,M=l.collision.halfX+Ue,y=l.collision.halfY+Ue,_=Math.abs(g)-M,w=Math.abs(p)-y;if(_>.1||w>.1)continue;c=_>w?{x:Math.sign(g)||1,y:0}:{x:0,y:Math.sign(p)||1}}else{const g=n.x-l.x,p=n.y-l.y,M=Math.hypot(g,p)||1;if(M>l.radius+Ue+.1)continue;c={x:g/M,y:p/M}}if(-(r*c.x+a*c.y)<ji.cos)continue;const h=Qt(n.y,this.seed,this.legLength)-n.x,f=[1,-1].map(g=>{const p={x:c.y*g,y:-c.x*g};for(let M=.5;M<=ji.scan;M+=.5){const y=n.x+p.x*M,_=n.y+p.y*M;if(!o(y,_))return null;if(o(y-c.x*ji.past,_-c.y*ji.past))return{tangent:p,along:M}}return null}).filter(Boolean);if(!f.length)continue;const u=g=>r*g.tangent.x+a*g.tangent.y;f.sort((g,p)=>g.along-p.along||u(p)-u(g)||p.tangent.x*h-g.tangent.x*h);const{tangent:d}=f[0],m=(r*d.x+a*d.y)*s,x=Math.max(0,s*ji.share-m);x>0&&this._moveBody(n,d.x*x,d.y*x,Ue,!0);return}}_stopPlayerMotion(){this.player.movingSpeed=0,this.player.velocity={x:0,y:0}}_updatePacing(t){const e=(this.leg+1)*this.legLength,n=this.pace==="express"?50:60;if(!this._bossSpawned&&this.player.y>=e-n){this._takeGuardianSnapshot(e-n-5),this._bossSpawned=!0,this._ambushQueue=[],this.enemies=this.enemies.filter(x=>x.hp>0).sort((x,g)=>Se(x,this.player)-Se(g,this.player)).slice(0,5);const d=this._arenaSpot(e),m=this._spawnEnemy("boss",d.x,d.y);m.name=rp[this.leg],m.variant=Hs[this.leg],m.maxHp=m.hp=Math.round(((this.pace==="express"?520:680)+this.leg*130)*this.difficulty.guardianHp),m.damage=this.difficulty.guardianDamage,m.attackClock=1.8,m.chargeClock=.65,this.boss=m,this._bossWave=0,this._bossReinforcementClock=this.pace==="express"?13:14,this._spawnPack(Math.max(2,(this.leg<2?3:4+Math.min(2,Math.floor(this.leg/2)))-Math.ceil(this._easing()/2)),!0,{mixed:!0,escort:!0,brutes:this.leg>=1}),this._event("boss",`${m.name} blocks the checkpoint. Keep moving when it winds up.`),this._effect("warning",m.x,m.y,2,{radius:7});return}if(this._bossSpawned){if(this._bossDefeated||!this.enemies.some(g=>g.type==="boss"&&g.hp>0)){this._minionCall=null;return}const d=this.enemies.find(g=>g.type==="boss"&&g.hp>0);if(this._minionCall){if(this._minionCall.life-=t,Object.assign(this._minionCall,{x:d.x,y:d.y}),this._minionCall.life>0)return;const g=this._minionCall;this._minionCall=null;const p=this._spawnPack(Math.min(g.count,this._minionRoom()),!0,{mixed:!0,escort:!0,call:!0});p>0&&this.leg<2&&this._addDrop({x:this.player.x+4,y:this.player.y+5,type:"heal",amount:qi(this.leg),life:60}),this._bossReinforcementClock=this.pace==="express"?13:14,this._bossLull=Ki.lull,p>0&&(this._bossWave++,this._event("ambush",`${d.name||"The guardian"}'s guards arrive. Keep a path open.`,{count:p,wave:this._bossWave,reinforcements:!0,lull:Ki.lull}));return}if(this._bossReinforcementClock=Math.max(0,this._bossReinforcementClock-t),this._bossReinforcementClock>0)return;if(d.hp<d.maxHp*.5){this._bossReinforcementClock=2;return}const m=Math.max(2,(this.leg<2?2:4)-Math.ceil(this._easing()/2)),x=Math.min(m,this._minionRoom(),this.maxEnemies-this._alive());if(this.enemies.filter(g=>g.hp>0&&g.type!=="boss").length>=7||x<Math.min(2,m)){this._bossReinforcementClock=3;return}if(d.telegraph||d.charge){this._bossReinforcementClock=.3;return}this._minionCall={life:Ki.warning,maxLife:Ki.warning,count:x,guardian:d.name,guardianId:d.id,x:d.x,y:d.y},this._effect("warning",d.x,d.y,Ki.warning,{radius:9,minionCall:!0,telegraphOf:d.id}),this._event("minionCall",`${d.name||"The guardian"} calls its minions · ${x} incoming`,{count:x,warning:Ki.warning,guardian:d.name,variant:d.variant});return}for(const d of this._ambushQueue)d.delay-=t;this._ambushQueue.length&&this._ambushQueue[0].delay<=0&&this._alive()<this.maxEnemies&&this._spawnPack(this._ambushQueue.shift().count,!0,{swarm:!0});const s=this._lingerClock>eo.after;if(this._stuck&&(this._spawnClock=Math.max(this._spawnClock,1)),this._spawnClock-=t*(s?eo.rate:1),this.enemies.filter(d=>d.hp>0&&(d.idle>3||d.detour)).length>=4&&this._spawnClock<=0&&(this._spawnClock=3),this._legElapsed<4.5||this._spawnClock>0||this._alive()>=this.maxEnemies)return;const r=this.pace==="express"?35:100,a=Math.floor(this._legElapsed/r),o=this._legElapsed%r/r;if(o>.65){this._spawnClock=this.pace==="express"?4:7,this._quietCycle!==a&&!this.enemies.some(d=>d.hp>0&&Se(d,this.player)<45)&&(this._quietCycle=a,this._event("quiet","A little breathing room. Search the roadside for supplies."));return}const c=this.player.y-this.leg*this.legLength<Math.min(Br.distance,this.legLength/3),h=!c||this._legElapsed-this._encounterAt>=Br.gap&&!this._ambushQueue.length&&this._aliveTagged("roadblock")<2&&this._aliveTagged("swarm")<2,f=o>.35&&o<.6&&this._lastEncounter!==a&&!s&&h,u=this.difficulty;if(f){this._lastEncounter=a,this._encounterAt=this._legElapsed;const d=Math.max(3,6+Math.floor(this._random()*2)+u.ambush-(c?Br.trim:0)),m=Math.ceil(d/qd),x=Array.from({length:m},(p,M)=>Math.floor(d/m)+(M<d%m?1:0)),g=this._spawnPack(x[0],!0,{swarm:!0});for(let p=1;p<m;p++)this._ambushQueue.push({delay:p*4.5,count:x[p]});this._event("ambush","Movement in the brush. A swarm is closing in!",{count:g,total:d,waves:m}),this._spawnClock=(this.pace==="express"?6:9)+(m-1)*4.5}else{const d=this._random(),m=3+Math.floor(this._random()*2)+u.pack;if(d<.12)this._spawnPack(m,!1,{flank:!0});else if(d<.34&&h){const x=this._spawnPack(Math.min(4+Math.floor(u.pack/2),c?Br.block:1/0,m),!1,{block:!0});x>0&&(this._encounterAt=this._legElapsed,this._event("roadblock","Infected are blocking the road ahead.",{count:x}))}else this._spawnPack(c&&d<.34?Math.max(2,m-1):m);this._spawnClock=((this.pace==="express"?3.5:5.3)+this._random()*2)*u.spawn}}_aliveTagged(t){return this.enemies.filter(e=>e.hp>0&&e[t]).length}_minionRoom(){return Math.max(0,this.difficulty.minionCap-this._aliveTagged("bossCall"))}get minionCall(){return this._minionCall?{...this._minionCall}:null}get spawnGrace(){return this._graceClock}_spawnAngle(){let t=this._random();const[e,n]=$c.find(([,,r])=>(t-=r)<0)||$c[0],s=e+(n-e)*this._random();return this._random()<.5?-s:s}_heading(){const t=Qt(this.player.y,this.seed,this.legLength);return Math.atan2(Qt(this.player.y+20,this.seed,this.legLength)-t,20)}_alongAcross(t,e,n=this._heading()){const s=t-this.player.x,r=e-this.player.y;return{along:s*Math.sin(n)+r*Math.cos(n),across:s*Math.cos(n)-r*Math.sin(n)}}_offScreenAhead(t,e){const{along:n,across:s}=this._alongAcross(t,e);return Math.abs(Math.atan2(s,n))<=Yc&&(n>=30||Math.abs(s)>=18)&&Math.hypot(n,s)>=30}_spawnPoint(t,e,n,s,r){for(let c=0;c<8;c++){const h=c?e+(this._random()-.5)*.7:e,f=c?n+(this._random()-.5)*6:n,u=t.x+Math.sin(h)*f,d=t.y+Math.cos(h)*f;if(this._reachable(u,d,s)&&r(u,d))return{x:u,y:d}}const a=t.y+Math.cos(e)*n,o=this._corridor(a),l=pe(t.x+Math.sin(e)*n,o.minX+s+1,o.maxX-s-1);return this._reachablePoint(l,a,s,r,!0)}_spawnPack(t,e=!1,{mixed:n=!1,escort:s=!1,brutes:r=!1,flank:a=!1,block:o=!1,swarm:l=!1,call:c=!1}={}){const h=Math.max(0,this.maxEnemies-this._alive());let f=Math.max(0,Math.min(Math.floor(t),h,!s&&this.player.y-this.leg*this.legLength<40?2:1/0));const u=e?3:1,d=this._heading(),m=Array.from({length:u},()=>d+(a?(this._random()<.5?-1:1)*(.75+this._random()*.35):o?(this._random()-.5)*.3:this._spawnAngle())),x=!s&&this.player.y-this.leg*this.legLength<40,g=s?2:x?0:1;let p=0;const M=s&&this.boss,y=r?["walker","dog","walker","dog","brute"]:["walker","dog"];for(let _=0;_<f;_++){const w=this._random(),E=(e?.5:.28)+this.difficulty.dogs;let A=n?y[_%y.length]:w<E||a&&w<Math.max(.5,E)?"dog":w>.9-this.leg*.01&&!a?"brute":"walker";A==="brute"&&p>=g&&(A="walker"),A==="brute"&&p++;const D=(this._random()-.5)*.3,v=pn[A].radius;let b;if(M){const C=(I,U)=>{const{along:N,across:F}=this._alongAcross(I,U,d);return N>=4&&Math.abs(Math.atan2(F,N))<=Yc&&Math.hypot(N,F)>=14&&(N>=24||Math.abs(F)>=16)};b=this._spawnPoint(this.boss,this._random()*io,8+this._random()*6,v,C)}else{const C=m[_%u]+D,I=pe(31/Math.max(.3,Math.cos(C-d)),a?36:34,46)+this._random()*5+(o?4:0);b=this._spawnPoint(this.player,C,I,v,(U,N)=>this._offScreenAhead(U,N))}const P=b&&this._spawnEnemy(A,b.x,b.y);if(!P){f--;continue}P.spawnGrace=.9,o&&(P.hold=!0,P.roadblock=!0,P.post={x:P.x,y:P.y}),l&&(P.swarm=!0),c&&(P.bossCall=!0),s&&(P.bossEscort=!0,P.alert=Za),_%Math.max(1,Math.ceil(f/3))===0&&this._effect("warning",P.x,P.y,.9,{radius:e?4:2.5})}return f}_spawnEnemy(t,e,n){if(this._alive()>=this.maxEnemies)return null;const s=pn[t]||pn.walker;if(this._blockedAt(e,n,s.radius*ti)){const l=this._reachablePoint(e,n,s.radius*ti,null,!0);if(!l)return null;({x:e,y:n}=l)}const r=1+this.leg*.045,a=t==="boss"?s.damage:Math.round(s.damage*this.difficulty.damage),o={id:this._id(),x:e,y:n,type:t,hp:s.hp*r,maxHp:s.hp*r,radius:s.radius,speed:s.speed,damage:a,angle:0,attackClock:.75+this._random(),chargeClock:t==="boss"?3:Qn[t]?Qn[t].first+this._random()*2:0,telegraph:null,sprinting:!1};return t==="walker"&&this._random()<this.difficulty.runner&&(o.runner=!0,o.sprintLeft=Xi.stamina,o.sprintCooldown=0),o.rng=Math.floor(this._random()*4294967296)>>>0,t==="boss"&&(o.alert=Za),this.enemies.push(o),o}_enemyRandom(t){t.rng=(t.rng??t.id*2654435761^this.seed)+1831565813>>>0;let e=t.rng;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}_laneLength(t,e,n){const s=t.radius*ti,r=t.x+Math.sin(e)*n,a=t.y+Math.cos(e)*n;let o=1;for(const l of this._solidsNear((t.x+r)/2,(t.y+a)/2,s+n/2+.1)){const c=Gs(t.x,t.y,r,a,l,s-Yi);c!==null&&c<o&&(o=c)}return Math.max(0,o*n)}_wander(t,e,n=null){t.wanderClock=(t.wanderClock??0)-e,(t.wanderClock<=0||!Pt(t.wanderAngle))&&(t.wanderAngle=(Pt(t.wanderAngle)?t.wanderAngle:this._enemyRandom(t)*io)+(this._enemyRandom(t)-.5)*vi.turn,t.wanderClock=vi.hold+this._enemyRandom(t)*vi.spread);let s=Math.sin(t.wanderAngle),r=Math.cos(t.wanderAngle);const a=n??{x:Qt(t.y,this.seed,this.legLength),y:t.y},o=a.x-t.x,l=a.y-t.y,c=Math.hypot(o,l),h=n?pe(c/6,0,1.5):pe((c-4)/vi.road,0,1);c>.01&&(s+=o/c*h,r+=l/c*h);const f=Math.min(t.speed*vi.share,vi.max),u={x:t.x,y:t.y};this._walkEnemy(t,s,r,f,e),Math.hypot(t.x-u.x,t.y-u.y)<f*e*.35&&(t.wanderClock=0),t.angle=Math.atan2(s,r)}_noise(t,e,n){for(const s of this.enemies){const r=Math.hypot(s.x-t,s.y-e);s.hp<=0||s.type==="boss"||s.alert>0||s.deaf>0||r>n||(s.heard?Object.assign(s.heard,{x:t,y:e},Math.hypot(s.heard.x-t,s.heard.y-e)>3?{via:null,best:r}:{}):s.heard={x:t,y:e,life:to.life,stall:0,best:r,via:null},s.hold=!1)}}_cornerWaypoint(t,e){const n=t.radius*ti,s=e.x-t.x,r=e.y-t.y,a=Math.hypot(s,r);if(a<.5)return null;const o=Math.min(a,8),l=t.x+s/a*o,c=t.y+r/a*o;let h=null,f=1/0;for(const x of this._solidsNear((t.x+l)/2,(t.y+c)/2,n+o/2+.3)){const g=Gs(t.x,t.y,l,c,x,n+.05);g!==null&&g<f&&(f=g,h=x)}if(!h)return null;const u=n+.9,d=h.collision?.kind==="box"?[[1,1],[1,-1],[-1,1],[-1,-1]].map(([x,g])=>({x:h.x+x*(h.collision.halfX+u),y:h.y+g*(h.collision.halfY+u)})):[1,-1].map(x=>({x:h.x+r/a*x*(h.radius+u),y:h.y-s/a*x*(h.radius+u)}));let m=null;for(const x of d){const g=this._corridor(x.y);if(x.x<g.minX+n||x.x>g.maxX-n||this._blockedAt(x.x,x.y,n)||Gs(t.x,t.y,x.x,x.y,h,n*.9)!==null)continue;const p=Math.hypot(x.x-t.x,x.y-t.y)+Math.hypot(e.x-x.x,e.y-x.y);(!m||p<m.cost)&&(m={x:x.x,y:x.y,cost:p})}return m&&{x:m.x,y:m.y}}_followHeard(t,e){const n=t.heard;if(n.life-=e,Math.hypot(n.x-t.x,n.y-t.y)<2.5||n.life<=0){t.heard=null;return}n.via&&Math.hypot(n.via.x-t.x,n.via.y-t.y)<.4&&(n.via=null,n.best=Math.hypot(n.x-t.x,n.y-t.y));const s=n.via??n,r=s.x-t.x,a=s.y-t.y;this._walkEnemy(t,r,a,t.speed,e),t.angle=Math.atan2(r,a);const o=Math.hypot(s.x-t.x,s.y-t.y);if(o<(n.best??1/0)-.2?(n.best=o,n.stall=0):n.stall=(n.stall||0)+e,!n.via&&(n.stall>.25||t.snag>.2)){const l=this._cornerWaypoint(t,n);l&&(n.via=l,n.best=Math.hypot(l.x-t.x,l.y-t.y),t.detour=null)}n.stall>=to.stall&&(t.heard=null,t.deaf=to.deaf,t.wanderAngle=Math.atan2(-r,-a),t.wanderClock=vi.hold)}_updateEnemies(t){for(const e of this.enemies){if(e.hp<=0)continue;const n=e.spawnGrace>0;n&&(e.spawnGrace=Math.max(0,e.spawnGrace-t));const s=n||this._graceClock>0||e.type==="boss"&&(this._minionCall||this._bossLull>0);e.phaseShield&&(e.phaseShield=Math.max(0,e.phaseShield-t)),e.deaf&&(e.deaf=Math.max(0,e.deaf-t));const r=e.radius*ti;if(e.knock){const u=Math.min(t,e.knock.life);this._moveBody(e,e.knock.x*u,e.knock.y*u,r),e.knock.life-=t,e.knock.life<=0&&(e.knock=null)}e.attackClock-=t,e.contactClock=Math.max(0,(e.contactClock||0)-t),e.sprinting=!1;const a=this.player.x-e.x,o=this.player.y-e.y,l=Math.hypot(a,o)||.001;if(!s&&!e.contactClock&&l<(e.radius+Ue)*Or.overlap&&this._hurt(this._contactDamage(e),e)&&(e.contactClock=Or.cooldown),this.mode!=="playing")return;e.sightClock=(e.sightClock??0)-t,e.sightClock<=0&&(e.sightClock=.25,e.sees=l<np&&this._lineClear(e,this.player)),e.type==="boss"||e.bossEscort||e.sees&&!e.hold?(e.alert=Za,e.heard=null):e.alert=Math.max(0,(e.alert||0)-t);const c=e.alert>0;if(c&&(e.angle=Math.atan2(a,o)),!e.hold&&e.type!=="boss"&&!e.bossEscort&&(e.anchor??={x:e.x,y:e.y},Math.hypot(e.x-e.anchor.x,e.y-e.anchor.y)>6&&(e.anchor={x:e.x,y:e.y},e.idle=0),c&&l<(e.bestGap??1/0)-.5?(e.bestGap=l,e.idle=0,e.anchor={x:e.x,y:e.y}):e.idle=(e.idle||0)+t,c||delete e.bestGap,e.idle>8&&(l>24||!this._lineClear(e,this.player,.25,e.radius)))){e.hp=0;continue}if(e.hold&&(l<=13||e.hp<e.maxHp)&&(e.hold=!1),e.telegraph){const u=e.telegraph;if(u.life-=t,u.kind==="charge"&&u.maxLife-u.life>ip&&u.life>0){const d=Math.min(e.speed*sp,2)*t;this._moveBody(e,Math.sin(u.angle)*d,Math.cos(u.angle)*d,r),u.length=this._laneLength(e,u.angle,u.reach??u.length)}if(u.life<=0){if(u.kind==="charge")e.charge={life:Qn[e.type]?.life??Wi.life,angle:u.angle,left:u.length??(Qn[e.type]??Wi).life*(Qn[e.type]??Wi).speed};else{for(const d of Je._telegraphAreas(u,e))this._effect("slam",d.x,d.y,.6,{radius:d.radius,...u.kind!=="slam"?{signature:u.kind}:{}});Je.inTelegraph(u,e,this.player)&&this._hurt(e.damage,e)}e.telegraph=null,e.attackClock=e.type==="boss"?(e.hp<e.maxHp*.45?1.9:pn.boss.attackDelay)/this.difficulty.aggression:pn[e.type].attackDelay}continue}if(e.charge){const u=Pt(e.charge.left)?e.charge.left:1/0,d=Math.min(Math.min(e.charge.life,t)*(Qn[e.type]?.speed??Wi.speed),u),m=this._moveBody(e,Math.sin(e.charge.angle)*d,Math.cos(e.charge.angle)*d,r);e.charge.life-=t,Pt(e.charge.left)&&(e.charge.left=Math.max(0,e.charge.left-d)),Se(e,this.player)<e.radius+.7&&this._hurt(e.damage,e),(e.charge.life<=0||m.collided||e.charge.left<=1e-6)&&(e.charge=null,this._effect("slam",e.x,e.y,.5,{radius:Qn[e.type]?1.6:3}));continue}if(!c){const u=!!e.heard;e.heard&&this._followHeard(e,t),!e.heard&&!u&&this._wander(e,t,e.hold?e.post??null:null),this._separate(e);continue}const h=Qn[e.type];if(!s&&(e.type==="boss"||h)){e.chargeClock-=t;const u=h&&e.chargeClock<=0&&l<h.reach?this._lungeAim(e,h):null;if(e.chargeClock<=0&&(h?u?.ok:l>3&&l<25)){const d=e.type==="boss"?this._guardianMove(e):"charge",m=d==="slam",x=(h??Wi).life*(h??Wi).speed,g=h?u.angle:e.angle,p=d!=="charge"?x:this._laneLength(e,g,x);if(p<Math.min(x,h?u.reach:l)-.5-e.radius)e.chargeClock=.4;else{if(e.attackNumber=(e.attackNumber||0)+1,d==="signature"){this._signature(e);continue}if(m){e.telegraph={kind:"slam",life:1.3,maxLife:1.3,x:this.player.x,y:this.player.y+(this.progress<1?3:0),radius:5.2,angle:e.angle},e.chargeClock=(e.hp<e.maxHp*.45?2.4:3.8)/this.difficulty.aggression,this._effect("warning",e.telegraph.x,e.telegraph.y,1.3,{radius:5.2}),this._event("telegraph","Corruption is surfacing underfoot. Move out of the red circle!");continue}const M=h?h.windup:1.15;e.telegraph={kind:"charge",life:M,maxLife:M,angle:g,radius:h?.8:2.5,reach:x,length:p},e.chargeClock=h?h.cooldown+this._random()*h.spread:(e.hp<e.maxHp*.45?2.4:3.8)/this.difficulty.aggression,e.type==="boss"&&this._event("telegraph",`${e.name||"The Warden"} is charging. Sidestep the red line.`);continue}}}const f=e.type==="boss"?4.5:e.radius+.8;if(!h&&!s&&l<f&&e.attackClock<=0){const u=e.type==="boss"?.85:.8;e.telegraph={kind:"slam",life:u,maxLife:u,radius:f,angle:e.angle}}else if(l>e.radius+.5){const u=e.runner&&this._updateRunner(e,l,t)?Xi.speed:e.type==="boss"&&l>35?this.speed:e.speed;let d=a,m=o;if(h){const x=Math.min(1.4,l/(u+this.speed));d=this.player.x+this.player.velocity.x*x-e.x,m=this.player.y+this.player.velocity.y*x-e.y}this._walkEnemy(e,d,m,Math.min(u,(l-e.radius-.5)/t),t)}this._separate(e)}}_guardianMove(t){const e=t.attackNumber||0,n=this.difficulty.signatureEvery;return e%n===n-1?"signature":(e-Math.floor(e/n))%2===1?"slam":"charge"}_signature(t){const e=jc[t.variant]??jc[Hs[ds(this.leg)]],n=e[(t.signatureCount||0)%e.length];t.signatureCount=(t.signatureCount||0)+1;const s=this.player,r=Math.atan2(s.x-t.x,s.y-t.y),a={kind:n.kind,life:n.windup,maxLife:n.windup,angle:r,x:t.x,y:t.y,radius:n.radius??n.width/2,signature:!0};if(n.kind==="line")Object.assign(a,{length:n.length,width:n.width});else if(n.kind==="sweep")a.arc=n.arc;else if(n.kind==="burst")a.inner=n.inner;else if(n.kind==="rockfall"){const o=Math.min(8,Math.hypot(s.velocity.x,s.velocity.y)*.9),l=o>.5?Math.atan2(s.velocity.x,s.velocity.y):r,c=(t.signatureCount%2?1:-1)*4.6;a.points=[{x:s.x,y:s.y},{x:s.x+Math.sin(l)*Math.max(o,4.5),y:s.y+Math.cos(l)*Math.max(o,4.5)},{x:s.x+Math.cos(r)*c,y:s.y-Math.sin(r)*c}],a.x=a.points[0].x,a.y=a.points[0].y}t.telegraph=a,t.chargeClock=(t.hp<t.maxHp*.45?2.4:3.8)/this.difficulty.aggression;for(const o of Je._telegraphAreas(a,t))this._effect("warning",o.x,o.y,n.windup,{radius:o.radius,signature:n.kind,telegraphOf:t.id});this._event("telegraph",`${t.name||"The guardian"} ${n.text}`,{signature:n.kind,variant:t.variant})}static _telegraphAreas(t,e){const n=t.x??e.x,s=t.y??e.y;return t.kind==="line"?[.15,.4,.65,.9].map(r=>({x:n+Math.sin(t.angle)*t.length*r,y:s+Math.cos(t.angle)*t.length*r,radius:t.width/2+.4})):t.kind==="sweep"?[-.6,0,.6].map(r=>({x:n+Math.sin(t.angle+t.arc*r)*t.radius*.62,y:s+Math.cos(t.angle+t.arc*r)*t.radius*.62,radius:t.radius*.36})):t.kind==="rockfall"?t.points.map(r=>({x:r.x,y:r.y,radius:t.radius})):[{x:n,y:s,radius:t.radius}]}static inTelegraph(t,e,n){const s=t.x??e.x,r=t.y??e.y,a=Ue,o=n.x-s,l=n.y-r,c=Math.hypot(o,l);switch(t.kind){case"line":{const h=o*Math.sin(t.angle)+l*Math.cos(t.angle),f=o*Math.cos(t.angle)-l*Math.sin(t.angle);return h>=-a&&h<=t.length+a&&Math.abs(f)<t.width/2+a}case"sweep":{if(c>t.radius+a)return!1;if(c<(e.radius||0)+a)return!0;const h=Math.atan2(Math.sin(Math.atan2(o,l)-t.angle),Math.cos(Math.atan2(o,l)-t.angle));return Math.abs(h)<=t.arc+Math.asin(Math.min(1,a/c))}case"burst":return c<t.radius+a&&c>(t.inner||0)-a;case"rockfall":return t.points.some(h=>Math.hypot(n.x-h.x,n.y-h.y)<t.radius+a);default:return c<t.radius+.45}}_contactDamage(t){return t.type==="boss"?Math.round(t.damage*Or.share):Math.round((pn[t.type]??pn.walker).damage*Or.share*this.difficulty.contact)}_separate(t){for(const e of this.enemies){if(e.id<=t.id||e.hp<=0)continue;const n=t.x-e.x,s=t.y-e.y,r=Math.hypot(n,s)||.001,a=(t.radius+e.radius)*.9;if(r<a){const o=Math.min(.08,(a-r)/2);this._moveBody(t,n/r*o,s/r*o,t.radius*ti),this._moveBody(e,-n/r*o,-s/r*o,e.radius*ti)}}}_inView(t){const e=t.x-this.player.x,n=t.y-this.player.y,s=t.radius||0,r=this.view||Kc,a=e*Fr.x+n*Fr.y,o=e*kr.x+n*kr.y;return Math.abs(a)-s<=r.side&&o-s<=r.ahead&&-o-s<=r.behind}_edge(t){return Math.max(0,Se(t,this.player)-(t.radius||0))}_fits(t,e){const n=sc(t,this.buffs),s=this._edge(e);return s>=n.min&&s<=n.max}_centreGap(t,e){return Math.abs(this._edge(e)-Xd(t,this.buffs))}_chooseWeapon(t,e=this.enemies){const n=this.weapons.filter(o=>this._armed(o)&&this._fits(o,t)).map(o=>({id:o,gap:this._centreGap(o,t)}));if(!n.length)return this._armed("sidearm")&&this._edge(t)<=Ka?"sidearm":null;const s=Math.min(...n.map(o=>o.gap));let r=null,a=-1/0;for(const{id:o,gap:l}of n){if(l>s+lp)continue;const c=this._weaponScore(o,t,e);c>a&&(r=o,a=c)}return r}_flight(t){return t==="sidearm"?Math.max(Ur(t,this.buffs),Ka):Ur(t,this.buffs)}_weaponScore(t,e,n=this.enemies){const s=ee[t],r=Se(e,this.player),a=n.filter(h=>h.hp>0&&Se(h,e)<6).length,o=e.maxHp*(Xc[e.type]??.5);let l=1;t==="scattergun"?l=pe((e.radius*1.7+1.2)/Math.max(1,r*s.spread),.6,s.pellets):t==="rifle"?l=2.35:t==="arc"&&(l=e.radius>=1?1.45:.85);let c=Math.min(s.damage*l,o)/s.cooldown;return t==="scattergun"&&(c*=a>2?1+.3*Math.min(a-1,4):1,r>10&&(c*=.6)),e.hp<s.damage&&t!=="sidearm"&&(c*=.7),r<4&&t==="sidearm"&&(c*=.75),c}_holdWeapon(t,e,n){const s=this.player.weapon;if(s===e||!this._armed(s))return{target:t,weaponId:e};const r=this.elapsed-(this.player.weaponSince??-1/0),a=c=>this._fits(s,c);if(a(t)){if(r<Qc.hold||!n.includes(t))return{target:t,weaponId:s};const c=this._centreGap(e,t)<=this._centreGap(s,t)-Qc.metres;return{target:t,weaponId:c?e:s}}const o=Se(t,this.player),l=t.type!=="boss"&&n.includes(t)&&(o<4.5||t.telegraph&&o<9);return r<op&&!l?{target:n.find(h=>h!==t&&a(h))??null,weaponId:s}:{target:t,weaponId:e}}_autoFire(){if(this._fireClock>0)return;const t=this.weapons.filter(m=>this._armed(m));if(!t.length)return;const e=Math.max(...t.map(m=>m==="sidearm"?Ka:Ur(m,this.buffs))),n=this.enemies.filter(m=>m.hp>0&&Se(m,this.player)<=e+m.radius&&this._inView(m)&&this._lineClear(this.player,m,.25,m.radius*.8));n.sort((m,x)=>{const g=p=>{const M=Se(p,this.player);let y=M/(p.type==="dog"?1.25:1)-(p.telegraph?5:0);return p.type==="boss"?y-=25:(M<4.5||p.telegraph&&M<9)&&(y-=40),y};return g(m)-g(x)});let s=null,r;for(const m of n)if(r=this._chooseWeapon(m,n),r){s=m;break}if(!n.length&&this._armed("sidearm")&&(s=this.crates.filter(m=>m.hp>0&&Se(m,this.player)<12&&this._lineClear(this.player,m,.25,(m.radius||.8)*.8)).sort((m,x)=>Se(m,this.player)-Se(x,this.player))[0],r="sidearm"),!s||!r||({target:s,weaponId:r}=this._holdWeapon(s,r,n),!s))return;r!==this.player.weapon&&(this.player.weaponSince=this.elapsed);const a=ee[r],o=this._flight(r),l=Math.atan2(s.x-this.player.x,s.y-this.player.y);this.player.weapon=r,this.player.aimAngle=l;const h=(this.enemies.filter(m=>m.hp>0&&Se(m,this.player)<qc.radius).length>=qc.count?Math.min(a.cooldown,ee.sidearm.cooldown):a.cooldown)*(this.buffs.rapid>0?.58:1)*(this.player.panic>0?Vn.rate:1);this._fireClock=Math.max(this._fireClock,-1/30)+h;const f=this._slotOf(r),u=this.weaponSlots[f];u&&(u.cooldown=u.cooldownMax=h,Pt(u.ammo)&&(u.ammo=Math.max(0,u.ammo-1),u.ammo===0&&this._event("weaponEmpty",`${a.name} is out of ammo`,{id:r,slot:f})));const d=this._id();for(let m=0;m<a.pellets;m++){const x=a.pellets>1?(m/(a.pellets-1)-.5)*a.spread:0;this.projectiles.push({id:this._id(),x:this.player.x+Math.sin(l)*.65,y:this.player.y+Math.cos(l)*.65,angle:l+x,weapon:r,rangeRemaining:o-.65,life:(o-.65)/a.projectileSpeed,damage:a.damage*(this.buffs.power>0?1.55:1),radius:a.radius,shotId:d})}this.player.lastShotAt=this.elapsed,this._noise(this.player.x,this.player.y,tp[r]*(this.buffs.power>0?ep:1)),this._effect("muzzle",this.player.x+Math.sin(l)*.7,this.player.y+Math.cos(l)*.7,.1,{color:a.color}),this._event("shot","",{weapon:r})}_updatePanic(){const t=this.player;t.panic>0||t.panicCooldown>0||this.enemies.filter(e=>e.hp>0&&Se(e,t)<Vn.radius).length<Vn.count||(t.panic=Vn.time,t.panicCooldown=Vn.time+Vn.cooldown,this._event("panic","Panic fire · surrounded, shooting faster"))}_openCrate(t){t.hp=0,this._destroyedCrates.add(t.id),this._crateHealth.delete(t.id);const e=this._cratesOpened<Zd;this._cratesOpened++,t.medkit?this._addDrop({x:t.x,y:t.y,type:"heal",amount:qi(this.leg)+8,life:150}):e||this._emptyCrates>=Jc||this._random()<Jd*this.difficulty.reward?(this._emptyCrates=0,this._dropLoot(t.x,t.y)):this._emptyCrates++,this._effect("crate",t.x,t.y,.7)}_openTouchedCrates(){for(const t of this.crates)t.hp>0&&Se(t,this.player)<(t.radius||.8)+Ue&&this._openCrate(t);this.crates=this.crates.filter(t=>t.hp>0)}_updateProjectiles(t){for(const e of this.projectiles){const n=ee[e.weapon],s=e.x,r=e.y,a=Math.min(t,Math.max(0,e.life),(e.rangeRemaining??e.life*n.projectileSpeed)/n.projectileSpeed);if(a<=0){e.life=0;continue}const o=n.projectileSpeed*a,l=s+Math.sin(e.angle)*o,c=r+Math.cos(e.angle)*o;let h=null;const f=(m,x,g)=>{g!==null&&(!h||g<h.t)&&(h={kind:m,entity:x,t:g})};for(const m of this._props){if(!sh(m))continue;const x=(m.collision?.halfX??m.radius)+e.radius,g=(m.collision?.halfY??m.radius)+e.radius;m.x+x<Math.min(s,l)||m.x-x>Math.max(s,l)||m.y+g<Math.min(r,c)||m.y-g>Math.max(r,c)||f("solid",m,Gs(s,r,l,c,m,e.radius))}for(const m of this.crates)m.hp>0&&f("crate",m,Jo(s,r,l,c,m.x,m.y,(m.radius||.8)+e.radius));for(const m of this.enemies)m.hp>0&&f("enemy",m,Jo(s,r,l,c,m.x,m.y,m.radius+e.radius));const u=h?.t??1;if(e.x=s+(l-s)*u,e.y=r+(c-r)*u,e.rangeRemaining=Math.max(0,(e.rangeRemaining??e.life*n.projectileSpeed)-o*u),e.life=Math.max(0,e.life-t),!h)continue;e.life=0;const d=h.entity;n.splash&&this._effect("arc",e.x,e.y,.55,{radius:n.splash,color:n.color}),h.kind==="enemy"?this._damageEnemy(d,e.damage,e.shotId??e.id):h.kind==="crate"?(d.hp-=e.damage,d.hp>0&&this._crateHealth.set(d.id,d.hp),this._effect("hit",d.x,d.y,.2,{color:"#efc983"}),d.hp<=0&&this._openCrate(d)):this._effect("hit",e.x,e.y,.2,{color:"#afbeb0",radius:.4})}this.projectiles=this.projectiles.filter(e=>e.life>0),this.crates=this.crates.filter(e=>e.hp>0)}_damageEnemy(t,e,n=null){if(!(t.hp<=0)){if(t.phaseShield>0){this._effect("hit",t.x,t.y,.16,{radius:t.radius,color:"#c5b3ff"});return}if(n!==null){const s=t.shotLog||=[];let r=s.find(a=>a[0]===n);if(r||(r=[n,0],s.push(r),s.length>6&&s.shift()),e=Math.min(e,Math.max(0,t.maxHp*(Xc[t.type]??.5)-r[1])),r[1]+=e,e<=0){this._effect("hit",t.x,t.y,.16,{radius:t.radius});return}}t.hp-=e,t.hp<1e-6&&(t.hp=0),this._effect("hit",t.x,t.y,.22,{damage:Math.round(e),radius:t.radius}),t.type==="boss"&&t.hp>0&&t.hp<=t.maxHp*.5&&!t.phaseTriggered&&(t.phaseTriggered=!0,t.phaseShield=1.4,t.charge=null,t.telegraph={kind:"slam",life:1.4,maxLife:1.4,x:this.player.x,y:this.player.y+(this.progress<1?3:0),radius:6.2,angle:t.angle},this._effect("warning",t.telegraph.x,t.telegraph.y,1.4,{radius:6.2}),this._event("telegraph","The Warden is drawing on the corruption. Get clear of the red circle.")),!(t.hp>0)&&(this.kills++,this.combo++,this._comboClock=4.5,this._effect("death",t.x,t.y,.75,{radius:t.radius}),t.type==="boss"?(this._bossDefeated=!0,this._bossReinforcementClock=0,this.boss=null,this._dropLoot(t.x,t.y,!0),this._addDrop({x:t.x+1.5,y:t.y,type:"heal",amount:Math.round(qi(this.leg)*1.25),life:120}),this._event("bossDefeated","The path is clear. Reach the checkpoint beacon.")):this._random()<(Kd[t.type]??.07)*this.difficulty.reward*(this.player.hp<35?2.2:this.player.hp<50?1.5:1)&&this._dropLoot(t.x,t.y))}}_addDrop(t){const e=this._reachablePoint(t.x,t.y,.9);this.drops.push({id:this._id(),...t,x:e.x,y:e.y})}_dropLoot(t,e,n=!1){const s=Object.keys(ee).filter(h=>h!=="sidearm"),r=this._random(),a=this.player.hp<35?Math.max(.6,Qa(this.leg)):this.player.hp<50?Math.max(.45,Qa(this.leg)):Qa(this.leg),o=Math.min(.999,r/(1-a)),l=r>=1-a?"heal":o<.14?"shield":o<.42?"rapid":o<.72?"power":"speed",c=n===!0?.6:typeof n=="number"?n:.13;s.length&&r<c?this._addDrop({x:t,y:e,type:"weapon",weapon:s[Math.floor(this._random()*s.length)],life:120}):this._addDrop({x:t,y:e,type:l,...l==="heal"?{amount:qi(this.leg)}:{},life:90})}_gainBuff(t){const e=Object.keys(this.buffs).filter(n=>n!==t&&this.buffs[n]>0).sort((n,s)=>this.buffs[n]-this.buffs[s]);!(this.buffs[t]>0)&&e.length>=2&&(this.buffs[e[0]]=0),this.buffs[t]=Math.max(this.buffs[t],$i[t])}_collectDrops(t){for(const e of this.drops){const n=Se(e,this.player);n>14&&(e.life-=t);const s=e.type==="weapon"&&this.weaponOffer&&this._slotOf(e.weapon)<0,r=!s&&!(e.type==="heal"&&this.player.hp>this.player.maxHp-4)&&!(e.type==="shield"&&this.player.shield>=zs-2);if(e.collectable=r,n<6.5&&r){const o=Math.min(n,t*(4+(6.5-n)*2));e.x+=(this.player.x-e.x)/(n||1)*o,e.y+=(this.player.y-e.y)/(n||1)*o}if(Se(e,this.player)>1.5)continue;if(!r){if(s)continue;this._noticeClock<=0&&(this._noticeClock=Zc,this._event("supplySaved",e.type==="heal"?"Full health — medkit saved":"Shield full — cell saved",{drop:e.type}));continue}e.life=0;const a={x:e.x,y:e.y};if(e.type==="weapon")this._slotOf(e.weapon)>=0?this._addAmmo(e.weapon,a):this._offerWeapon(e.weapon,a);else if(e.type==="heal"){const o=e.amount??qi(this.leg),l=Math.min(o,this.player.maxHp-this.player.hp);this.player.hp+=l,this._event("pickup",`Medkit · +${Math.round(l)} health`,{drop:e.type,...a,target:"health",amount:l})}else if(e.type==="shield"){const o=this.player.shield;this.player.shield=Math.min(zs,this.player.shield+14),this._event("pickup","Shield cell · +14 protection",{drop:e.type,...a,target:"shield",amount:this.player.shield-o})}else{this._gainBuff(e.type);const o={rapid:"Overdrive · faster fire",power:"Charged rounds · increased damage",speed:"Fleetfoot · move faster"}[e.type];this._event("pickup",o,{drop:e.type,...a,target:`buff:${e.type}`,amount:$i[e.type]})}this._effect("pickup",this.player.x,this.player.y,.75,{drop:e.type})}this.drops=this.drops.filter(e=>e.life>0&&Se(e,this.player)<130)}_addAmmo(t,e){const n=this._slotOf(t),s=this.weaponSlots[n],r=s.ammo;Pt(s.ammo)&&(s.ammo=Math.min(s.maxAmmo,s.ammo+Math.round(s.maxAmmo*Wd)));const a=Pt(r)?s.ammo-r:0;this._event("pickup",`${ee[t].name} · +${a} ammo`,{drop:"weapon",weapon:t,...e,target:`weapon:${n}`,amount:a})}_offerWeapon(t,e){const n=ee[t],s=this.weaponSlots.findIndex(r=>!r);this.weaponOffer={id:t,x:e.x,y:e.y,full:s<0,slot:s<0?null:s,life:Ja,maxLife:Ja,stats:Xu(t)},this._effect("pickup",this.player.x,this.player.y,.75,{drop:"weapon"}),this._event("weaponOffer",`${n.name} found · tap it to take it`,{id:t,full:s<0,slot:this.weaponOffer.slot,x:e.x,y:e.y,life:Ja})}_tickOffer(t){const e=this.weaponOffer;e&&(e.life=Math.max(0,e.life-t),e.life<=0&&this._leaveOffer(!0))}_leaveOffer(t){const e=this.weaponOffer;this.weaponOffer=null,this.cardOpen=!1,this._event("weaponDiscarded",`${ee[e.id].name} left behind`,{id:e.id,expired:t,x:e.x,y:e.y})}openCard(){return this.cardOpen=!0,this._stopPlayerMotion(),!0}closeCard(){this.cardOpen=!1}acceptWeapon(t){const e=this.weaponOffer;if(!e||!Number.isInteger(t)||t<0||t>=hr)return!1;const n=this.weaponSlots[t];return n?.id==="sidearm"?!1:(this.weaponSlots[t]=ma(e.id),n&&this.player.weapon===n.id&&(this.player.weapon="sidearm"),this.weaponOffer=null,this.cardOpen=!1,this._event("weaponAccepted",`${ee[e.id].name} acquired. Auto-switching enabled.`,{id:e.id,slot:t,replaced:n?.id??null,x:e.x,y:e.y}),!0)}discardWeapon(){return this.weaponOffer?(this._leaveOffer(!1),!0):!1}_hurt(t,e){if(this._hurtClock>0||this.mode!=="playing"||this.qaGodMode||this._graceClock>0&&e)return!1;const n=Math.min(this.player.shield,t);this.player.shield-=n;const s=t-n;if(this.player.hp=Math.max(0,this.player.hp-s),this.cargo=Math.max(0,this.cargo-Math.ceil(s*.2)),this._hurtClock=.75,this.player.hurtFlash=Qd,this._effect("hurt",this.player.x,this.player.y,.55),this._event("hurt",s>0?"Hit! Keep moving to evade the next attack.":"Shield absorbed the hit."),e&&e.type!=="boss"){const r=Se(e,this.player)||1;e.knock={x:(e.x-this.player.x)/r*3.2,y:(e.y-this.player.y)/r*3.2,life:.25}}return this.player.hp<=0&&(this.mode="dead",this._stopPlayerMotion(),this._event("dead","The route took its toll. Your last checkpoint is safe.")),!0}_reachCheckpoint(){if(this.checkpointCount=this.leg+1,this.weaponOffer){const a=this.weaponOffer;this.weaponSlots.findIndex(l=>!l)>=0?(this.weaponOffer=null,this.cardOpen=!1,this.drops.push({id:this._id(),x:a.x,y:a.y,type:"weapon",weapon:a.id,life:1})):this._leaveOffer(!1)}for(const a of this.drops)if(a.type==="weapon"&&this._slotOf(a.weapon)<0&&Se(a,this.player)<40){const o=this.weaponSlots.findIndex(l=>!l);if(o<0)continue;this.weaponSlots[o]=ma(a.weapon),this._event("pickup",`${ee[a.weapon].name} acquired. Auto-switching enabled.`,{drop:"weapon",weapon:a.weapon,x:a.x,y:a.y,target:`weapon:${o}`,amount:ee[a.weapon].ammo})}this.drops=[];const t=Math.round(this.player.hp),e=Math.round(this.cargo);this.player.hp=Math.min(this.player.maxHp,t+$u),this.player.shield=Math.min(zs,Math.max(15,this.player.shield)),this.buffs={rapid:0,power:0,speed:0};for(const a of this.weaponSlots)a&&Object.assign(a,{ammo:a.maxAmmo,cooldown:0});this._guardianSnapshot=null,this._waypointSnapshot=null,this._guardianFails=0,this.cargo=Math.max(85,this.cargo);const n={hpBefore:t,hpAfter:this.player.hp,healed:this.player.hp-t,rule:th,parcelBefore:e,parcelAfter:Math.round(this.cargo)};this.refugeReport=n,this.enemies=[],this.projectiles=[],this.effects=[],this.boss=null,this.mode=this.leg===this.totalLegs-1?"complete":"checkpoint",this._stopPlayerMotion(),this._updateObjective(),this._checkpointSnapshot=this._snapshot();const s=n.hpAfter>n.hpBefore?`Health ${n.hpBefore} → ${n.hpAfter} (${th.toLowerCase()})`:`Health ${n.hpAfter} (full)`,r=n.parcelAfter>n.parcelBefore?`parcel patched to 85% (was ${n.parcelBefore}%)`:`parcel intact at ${n.parcelAfter}%`;this._event(this.mode==="complete"?"complete":"checkpoint",this.mode==="complete"?"Delivery received. You brought something worth saving.":`Checkpoint secured · ${s} · ${r}. Your route can be saved here.`,n)}continueJourney(){if(this.mode!=="checkpoint")return!1;const t={length:this.legLength,end:(this.leg+1)*this.legLength};return this.leg++,this._enterLeg(t),this.mode="playing",this._stopPlayerMotion(),this.progress=0,this._legElapsed=0,this._spawnClock=4.5,this._ambushQueue=[],this._waypointSnapshot=null,this._waypointK=0,this._bossSpawned=!1,this._bossDefeated=!1,this._bossReinforcementClock=0,this._bossWave=0,this._quietCycle=-1,this._lastEncounter=-1,this._fireClock=0,this._hurtClock=1.5,this.player.blocked=!1,this._blockedClock=0,this._blockedNotified=!1,this._freshStart(),this._updateObjective(),this._event("continue",`Leg ${this.leg+1} of ${this.totalLegs}. Follow the route toward the next beacon.`),!0}_enterLeg(t){const e=this.leg*this.legLength;if(Math.abs(e-t.end)<1e-9)return;const n=e+(this.player.y-t.end),s=this.player.x+Qt(n,this.seed,this.legLength)-Qt(this.player.y,this.seed,t.length);Object.assign(this.player,{x:s,y:n}),this._frontier=n,this.crates=[],this.drops=[],this._refreshWorld(!0);const r=this._reachablePoint(this.player.x,this.player.y,Ue+.1);Object.assign(this.player,r),this.crates=[],this._refreshWorld(!0)}retryCheckpoint(){if(!this._checkpointSnapshot)return!1;const t=Re(this._checkpointSnapshot),e=this.kills;return this._restore(t),this.kills=Math.max(this.kills,e),this.player.hp=this.player.maxHp,this.events=[],this._refreshWorld(!0),this.mode==="checkpoint"&&this.continueJourney(),this._hurtClock=2,this._freshStart(),this._event("retry","Back on the route. Your checkpoint supplies are restored."),!0}retryGuardian(){if(!this._guardianSnapshot)return!1;const t=this.kills,e=this.weaponSlots;return this._restore(Re(this._guardianSnapshot)),this.kills=Math.max(this.kills,t),this._keepLoadout(e),this.player.hp=this.player.maxHp,this._guardianFails++,this.events=[],this._refreshWorld(!0),this._hurtClock=2,this._freshStart(),this._event("retry","Back at the guardian's gate. Your progress on this leg is kept."),!0}_keepLoadout(t){const e=new Map(this.weaponSlots.filter(Boolean).map(n=>[n.id,n.ammo]));this.weaponSlots=t.map(n=>n&&{...n,ammo:Math.max(n.ammo,e.get(n.id)??0),cooldown:0}),this._slotOf(this.player.weapon)<0&&(this.player.weapon="sidearm")}_freshStart(){this._graceClock=eh,this._frontier=this.player.y,this._lingerClock=0,this._encounterAt=-1/0,this._minionCall=null,this._bossLull=0}qaStartLeg(t){return t=ds(t),!t||this.mode!=="playing"?!1:(this.leg=t-1,this.weaponOffer=null,this.cardOpen=!1,this.checkpointCount=t,this.player.y=t*this.legLength,this.player.x=Qt(this.player.y,this.seed,this.legLength),Object.assign(this.player,{hp:this.player.maxHp,shield:15,velocity:{x:0,y:0},movingSpeed:0,weapon:"sidearm"}),this.weaponSlots=ga(t>=3?["sidearm","rifle","arc"]:["sidearm","scattergun","rifle"]),this.cargo=85,this.enemies=[],this.projectiles=[],this.drops=[],this.effects=[],this._ambushQueue=[],this._bossSpawned=!0,this._bossDefeated=!0,this.boss=null,this._guardianSnapshot=null,this._waypointSnapshot=null,this._guardianFails=0,this.mode="checkpoint",this.refugeReport=null,this._refreshWorld(!0),this._checkpointSnapshot=this._snapshot(),this.events=[],this.continueJourney())}qaSetWeapon(t,e){if(!Number.isInteger(t)||t<1||t>=hr||e!==null&&(!ee[e]||e==="sidearm")||e!==null&&this._slotOf(e)>=0&&this._slotOf(e)!==t)return!1;const n=this.weaponSlots[t];return n?.id===e||(this.weaponSlots[t]=e===null?null:ma(e),n&&this.player.weapon===n.id&&(this.player.weapon="sidearm"),this.weaponOffer&&this.weaponOffer.id===e&&(this.weaponOffer=null)),!0}qaRefillAmmo(t=null){let e=0;return this.weaponSlots.forEach((n,s)=>{!n||t!==null&&t!==s||(Object.assign(n,{ammo:n.maxAmmo,cooldown:0}),e++)}),e}qaSetHealth(t){return this.mode!=="playing"||!Pt(t)?!1:(this.player.hp=pe(Math.round(t),0,this.player.maxHp),this.player.hp<=0&&(this.mode="dead",this._stopPlayerMotion(),this._event("dead","The route took its toll. Your last checkpoint is safe.")),!0)}qaSetCargo(t){return Pt(t)?(this.cargo=pe(Math.round(t),0,100),!0):!1}qaSetShield(t){return Pt(t)?(this.player.shield=pe(Math.round(t),0,zs),!0):!1}qaSetBuff(t,e){if(!(t in $i)||!Pt(e))return!1;if(e=pe(e,0,60),e>0&&!(this.buffs[t]>0)){const n=Object.keys(this.buffs).filter(s=>s!==t&&this.buffs[s]>0).sort((s,r)=>this.buffs[s]-this.buffs[r]);n.length>=2&&(this.buffs[n[0]]=0)}return this.buffs[t]=e,!0}qaSpawnDrop(t,e=null){if(this.mode!=="playing")return!1;const n={x:this.player.x+.4,y:this.player.y+.4};if(t==="weapon"){if(!ee[e]||e==="sidearm")return!1;this._addDrop({...n,type:t,weapon:e,life:60})}else if(t==="heal")this._addDrop({...n,type:t,amount:qi(this.leg),life:60});else if(t==="shield"||t in $i)this._addDrop({...n,type:t,life:60});else return!1;return!0}qaJumpBeforeGuardian(){if(this.mode!=="playing")return!1;const t=this.pace==="express"?50:60;return this._qaMoveTo((this.leg+1)*this.legLength-t-8),this._bossSpawned=!1,this._bossDefeated=!1,this._bossWave=0,this._bossReinforcementClock=0,this._guardianSnapshot=null,this._guardianFails=0,this._refreshWorld(!0),this._updateObjective(),!0}qaJumpBeforeRefuge(){return this.mode!=="playing"?!1:(this._qaMoveTo(this.checkpointY-25),this._bossSpawned=!0,this._bossDefeated=!0,this._bossWave=0,this._bossReinforcementClock=0,this._guardianSnapshot=null,this._refreshWorld(!0),this._updateObjective(),!0)}_qaMoveTo(t){this.weaponOffer=null,this.cardOpen=!1,this.enemies=[],this.projectiles=[],this.drops=[],this.effects=[],this._ambushQueue=[],this._minionCall=null,this.boss=null,this._waypointSnapshot=null,this.player.y=Math.max(t,this.leg*this.legLength+1),this.player.x=Qt(this.player.y,this.seed,this.legLength),this._stopPlayerMotion(),this._refreshWorld(!0),Object.assign(this.player,this._reachablePoint(this.player.x,this.player.y,Ue+.1)),this.progress=pe((this.player.y-this.leg*this.legLength)/this.legLength,0,1),this._waypointK=Math.max(0,Math.floor((this.player.y-this.leg*this.legLength)/this.waypointSpacing)),this._freshStart(),this._hurtClock=1.5,this.events=[]}_progressSave(t){return t?{...Re(t),checkpoint:Re(this._checkpointSnapshot),...this._guardianSnapshot?{guardianCheckpoint:Re(this._guardianSnapshot)}:{},...this._waypointSnapshot?{waypointCheckpoint:Re(this._waypointSnapshot)}:{}}:null}guardianSave(){return this._progressSave(this._guardianSnapshot)}waypointSave(){return this._progressSave(this._waypointSnapshot)}_updateObjective(){this.mode==="complete"?this.objective="Delivery complete · the outpost is waiting":this.mode==="checkpoint"?this.objective=`Checkpoint ${this.checkpointCount} secured · take a breath`:this.mode==="dead"?this.objective="Return to your last checkpoint":this.boss?this.objective=`Clear ${this.boss.name} · dodge the red warnings`:this._bossDefeated?this.objective=`Path clear · ${this.checkpointDistance} m to the checkpoint beacon`:this.objective=`Follow the beacon · ${this.checkpointDistance} m to checkpoint`}get guideTarget(){const t=this.player,e=[this.seed,this.legLength],n={x:Qt(this.checkpointY,...e),y:this.checkpointY},s=Nn(t.y,...e);if(Math.hypot(n.x-t.x,n.y-t.y)<zr.near||s&&s.checkpointY===this.checkpointY||t.y>=this.checkpointY)return{...n,beacon:!0,branch:!1};const r=nr(t.y,...e,0,t.x,this.checkpointY),a=nr(t.y,...e,Math.abs(t.x-r.x)>zr.offRoad?zr.back:zr.ahead,t.x,this.checkpointY);return{x:a.x,y:a.y,beacon:!1,branch:a.branch}}get guideArrow(){const t=this.guideTarget,e=t.x-this.player.x,n=t.y-this.player.y,s=e*Fr.x+n*Fr.y,r=e*kr.x+n*kr.y;return Math.abs(s)>Math.abs(r)?s>0?"→":"←":r>0?"↑":"↓"}get beaconArrow(){return this.guideArrow}get checkpointDistance(){return Math.round(Math.hypot(this.player.x-Qt(this.checkpointY,this.seed,this.legLength),this.player.y-this.checkpointY))}get distanceRemaining(){return this.mode==="complete"?0:this.checkpointDistance+this.routeLength-this._routeBefore(this.leg+1)}get nextCheckpointTime(){return Math.ceil(this.checkpointDistance/this.speed)}get deliveryProgress(){return pe((this._routeBefore(this.leg)+this.player.y-this.leg*this.legLength)/this.routeLength,0,1)}get checkpointY(){return(this.leg+1)*this.legLength}_snapshot(){return Re({version:nh,routeVersion:ur,combatVersion:1,worldVersion:1,legLength:this.legLength,seed:this.seed,pace:this.pace,mode:this.mode,player:this.player,elapsed:this.elapsed,leg:this.leg,progress:this.progress,kills:this.kills,combo:this.combo,weapons:this.weapons,weaponSlots:this.weaponSlots.map(Ju),buffs:this.buffs,cargo:this.cargo,checkpointCount:this.checkpointCount,enemies:this.enemies,drops:this.drops,crates:this.crates,projectiles:this.projectiles,rngState:this._rngState,nextId:this._nextId,legElapsed:this._legElapsed,spawnClock:this._spawnClock,fireClock:this._fireClock,comboClock:this._comboClock,bossSpawned:this._bossSpawned,bossDefeated:this._bossDefeated,bossReinforcementClock:this._bossReinforcementClock,bossWave:this._bossWave,quietCycle:this._quietCycle,destroyedCrates:[...this._destroyedCrates],knownCrates:[...this._knownCrates],crateHealth:[...this._crateHealth],cratesOpened:this._cratesOpened,emptyCrates:this._emptyCrates,refugeReport:this.refugeReport,lastEncounter:this._lastEncounter,ambushQueue:this._ambushQueue})}serialize(){return{...this._snapshot(),checkpoint:Re(this._checkpointSnapshot),...this._guardianSnapshot?{guardianCheckpoint:Re(this._guardianSnapshot)}:{},...this._waypointSnapshot?{waypointCheckpoint:Re(this._waypointSnapshot)}:{}}}_restore(t){for(const e of["mode","player","elapsed","leg","progress","kills","combo","buffs","cargo","checkpointCount","enemies","drops","crates","projectiles"])this[e]=Re(t[e]);Array.isArray(t.weaponSlots)||Ku(t=Re(t)),this.weaponSlots=t.weaponSlots.map(mp),this.weaponOffer=null,this.cardOpen=!1,this._slotOf(this.player.weapon)<0&&(this.player.weapon="sidearm"),this._rngState=t.rngState,this._nextId=t.nextId,this._legElapsed=t.legElapsed,this._spawnClock=t.spawnClock,this._fireClock=t.fireClock,this._comboClock=t.comboClock,this._bossSpawned=t.bossSpawned,this._bossDefeated=t.bossDefeated,this._bossReinforcementClock=t.bossReinforcementClock??(t.bossSpawned&&!t.bossDefeated?this.pace==="express"?10:14:0),this._bossWave=t.bossWave??0,this._quietCycle=t.quietCycle??-1;for(const e of this.enemies)e.speed=pn[e.type].speed;for(const e of this.projectiles)e.rangeRemaining??=Math.max(0,Math.min(Ur(e.weapon,this.buffs),e.life*ee[e.weapon].projectileSpeed)),e.life=Math.min(e.life,e.rangeRemaining/ee[e.weapon].projectileSpeed);this._lastEncounter=t.lastEncounter,this._ambushQueue=Re(t.ambushQueue||[]),this._waypointK=Math.max(0,Math.floor((this.player.y-this.leg*this.legLength)/this.waypointSpacing)),this._destroyedCrates=new Set(t.destroyedCrates),this._knownCrates=new Set(t.knownCrates),this._crateHealth=new Map(t.crateHealth||[]),this._cratesOpened=t.cratesOpened??this._destroyedCrates.size,this._emptyCrates=t.emptyCrates??0,this.refugeReport=t.refugeReport?Re(t.refugeReport):null,this._noticeClock=0;for(const e of this.enemies)e.type==="boss"&&!Hs.includes(e.variant)&&(e.variant=Hs[ds(this.leg)]);for(const e of this.crates)e.hp>0&&e.hp<30&&this._crateHealth.set(e.id,e.hp);this.player.shield=Math.min(this.player.shield,zs),this.mode==="checkpoint"&&(this.buffs={rapid:0,power:0,speed:0});for(const e of Object.keys($i))this.buffs[e]=Math.min(this.buffs[e],$i[e]);this._beaconMissed=!1,this.player.blocked=!!this.player.blocked,Pt(this.player.aimAngle)||(this.player.aimAngle=this.player.angle),this.player.lastShotAt??=null,this.player.hurtFlash=0,this.player.panic=Pt(this.player.panic)?pe(this.player.panic,0,Vn.time):0,this.player.panicCooldown=Pt(this.player.panicCooldown)?pe(this.player.panicCooldown,0,Vn.time+Vn.cooldown):0,this._stopPlayerMotion(),this._blockedClock=0,this._blockedNotified=!1,this.effects=[],this.boss=this.enemies.find(e=>e.type==="boss"&&e.hp>0)||null,this._updateObjective()}static validateSave(t){const e=s=>{if(!s||typeof s!="object"||s.version!==nh||!Pt(s.seed)||!["journey","express"].includes(s.pace)||s.routeVersion!==void 0&&![1,2,ur].includes(s.routeVersion)||s.combatVersion!==void 0&&s.combatVersion!==1||s.worldVersion!==void 0&&s.worldVersion!==1||!Number.isInteger(s.leg)||s.leg<0||s.leg>5)return!1;const r=ju(s);if(r!==hp(s)||!["playing","checkpoint","dead","complete"].includes(s.mode))return!1;const a=s.player;if(!a||!["x","y","hp","maxHp","shield","angle"].every(c=>Pt(a[c]))||!ee[a.weapon]||a.blocked!==void 0&&typeof a.blocked!="boolean"||a.aimAngle!==void 0&&!Pt(a.aimAngle)||a.movingSpeed!==void 0&&(!Pt(a.movingSpeed)||a.movingSpeed<0)||a.velocity!==void 0&&(!a.velocity||!Pt(a.velocity.x)||!Pt(a.velocity.y))||a.lastShotAt!==void 0&&a.lastShotAt!==null&&(!Pt(a.lastShotAt)||a.lastShotAt<0||a.lastShotAt>s.elapsed))return!1;const o=r/ac(s.pace);if(a.hp<0||a.hp>a.maxHp||a.maxHp!==100||a.shield<0||a.shield>70||Math.abs(a.x)>1e3||a.y<0||a.y>6*r+12*o)return!1;if(s.worldVersion===1){const c=ir(s.seed,r);if(a.x<c.minX||a.x>c.maxX||a.y<c.minY||a.y>c.maxY)return!1}else if(a.y<Math.max(0,s.leg*r-22*o)||a.y>(s.leg+1)*r+12*o)return!1;if(s.weaponSlots!==void 0){if(!gp(s.weaponSlots)||!s.weaponSlots.some(c=>c?.id===a.weapon))return!1}else if(!Array.isArray(s.weapons)||s.weapons.length<1||s.weapons.length>4||!s.weapons.every(c=>ee[c])||!s.weapons.includes("sidearm"))return!1;return!(!s.buffs||!["rapid","power","speed"].every(c=>Pt(s.buffs[c])&&s.buffs[c]>=0&&s.buffs[c]<=40)||!["elapsed","progress","kills","combo","cargo","checkpointCount","rngState","nextId","legElapsed","spawnClock","fireClock","comboClock","lastEncounter"].every(c=>Pt(s[c]))||s.cargo<0||s.cargo>100||s.progress<0||s.progress>1||s.elapsed<0||s.elapsed>1e7||s.checkpointCount<0||s.checkpointCount>6||!Number.isInteger(s.rngState)||s.rngState<0||s.rngState>4294967295||!Number.isInteger(s.nextId)||s.nextId<1||s.nextId>1e9||s.mode==="checkpoint"&&(s.leg===5||s.checkpointCount!==s.leg+1||!s.bossDefeated)||s.mode==="complete"&&(s.leg!==5||s.checkpointCount!==6||!s.bossDefeated)||typeof s.bossSpawned!="boolean"||typeof s.bossDefeated!="boolean"||s.bossReinforcementClock!==void 0&&(!Pt(s.bossReinforcementClock)||s.bossReinforcementClock<0||s.bossReinforcementClock>14)||s.bossWave!==void 0&&(!Number.isInteger(s.bossWave)||s.bossWave<0||s.bossWave>1e6)||s.quietCycle!==void 0&&(!Number.isInteger(s.quietCycle)||s.quietCycle<-1)||!["enemies","drops","crates","projectiles"].every(c=>Array.isArray(s[c])&&s[c].length<500&&s[c].every(h=>h&&["x","y"].every(f=>Pt(h[f]))))||!s.enemies.every(c=>pn[c.type]&&["hp","maxHp","radius","speed","damage","angle","attackClock","chargeClock"].every(h=>Pt(c[h]))&&c.maxHp>0&&c.maxHp<=5e3&&c.radius>0&&c.radius<=5&&c.speed>=0&&c.speed<=15&&c.damage>=0&&c.damage<=100&&(c.phaseShield===void 0||Pt(c.phaseShield)&&c.phaseShield>=0&&c.phaseShield<=2)&&(!c.telegraph||["life","maxLife","radius","angle"].every(h=>Pt(c.telegraph[h]))&&(c.telegraph.x===void 0||Pt(c.telegraph.x))&&(c.telegraph.y===void 0||Pt(c.telegraph.y)))&&(!c.charge||Pt(c.charge.life)&&Pt(c.charge.angle)))||!s.projectiles.every(c=>ee[c.weapon]&&["angle","life","damage","radius"].every(h=>Pt(c[h])))||!s.projectiles.every(c=>c.rangeRemaining===void 0||Pt(c.rangeRemaining)&&c.rangeRemaining>=0&&c.rangeRemaining<=60)||!s.enemies.every(c=>c.spawnGrace===void 0||Pt(c.spawnGrace)&&c.spawnGrace>=0&&c.spawnGrace<=1.5)||!s.enemies.every(c=>c.bossEscort===void 0||typeof c.bossEscort=="boolean")||!s.drops.every(c=>["heal","shield","rapid","power","speed","weapon"].includes(c.type)&&Pt(c.life)&&(c.amount===void 0||Pt(c.amount)&&c.amount>=0&&c.amount<=100)&&(c.type!=="weapon"||ee[c.weapon]))||!s.crates.every(c=>Pt(c.hp)&&Pt(c.radius))||!["destroyedCrates","knownCrates"].every(c=>Array.isArray(s[c])&&s[c].length<1e4&&s[c].every(h=>typeof h=="string"||Pt(h)))||s.cratesOpened!==void 0&&(!Number.isInteger(s.cratesOpened)||s.cratesOpened<0||s.cratesOpened>1e6)||s.emptyCrates!==void 0&&(!Number.isInteger(s.emptyCrates)||s.emptyCrates<0||s.emptyCrates>Jc)||s.refugeReport!==void 0&&s.refugeReport!==null&&(typeof s.refugeReport!="object"||!["hpBefore","hpAfter","parcelBefore","parcelAfter"].every(c=>Pt(s.refugeReport[c])&&s.refugeReport[c]>=0&&s.refugeReport[c]<=100))||a.weaponSince!==void 0&&!Pt(a.weaponSince)||!s.enemies.every(c=>(c.variant===void 0||Hs.includes(c.variant))&&(!c.telegraph||(c.telegraph.kind===void 0||ap.includes(c.telegraph.kind))&&["length","width","arc","inner"].every(h=>c.telegraph[h]===void 0||Pt(c.telegraph[h])&&c.telegraph[h]>=0&&c.telegraph[h]<=60)&&(c.telegraph.points===void 0||Array.isArray(c.telegraph.points)&&c.telegraph.points.length<=6&&c.telegraph.points.every(h=>h&&Pt(h.x)&&Pt(h.y))))&&(!c.heard||Pt(c.heard.x)&&Pt(c.heard.y)&&Pt(c.heard.life)))||!s.drops.every(c=>c.collectable===void 0||typeof c.collectable=="boolean")||s.crateHealth!==void 0&&(!Array.isArray(s.crateHealth)||s.crateHealth.length>=1e4||!s.crateHealth.every(c=>Array.isArray(c)&&c.length===2&&(typeof c[0]=="string"||Pt(c[0]))&&Pt(c[1])&&c[1]>0&&c[1]<=30)))},n=s=>!s||!s.checkpoint&&!s.guardianCheckpoint&&!s.waypointCheckpoint&&e(s)&&s.seed===t.seed&&s.pace===t.pace;try{return e(t)&&n(t.checkpoint)&&n(t.guardianCheckpoint)&&n(t.waypointCheckpoint)}catch{return!1}}}const oc="180",_p=0,rh=1,xp=2,Zu=1,Qu=2,jn=3,Jn=0,Qe=1,Sn=2,di=0,ys=1,ah=2,oh=3,lh=4,yp=5,Pi=100,vp=101,Mp=102,bp=103,Sp=104,wp=200,Ep=201,Tp=202,Ap=203,Zo=204,Qo=205,Cp=206,Rp=207,Pp=208,Dp=209,Lp=210,Ip=211,Np=212,Up=213,Op=214,tl=0,el=1,nl=2,Ss=3,il=4,sl=5,Pa=6,rl=7,tf=0,Fp=1,kp=2,pi=0,Bp=1,zp=2,Hp=3,ef=4,Gp=5,Vp=6,Wp=7,nf=300,ws=301,Es=302,al=303,ol=304,Ba=306,ll=1e3,Ni=1001,cl=1002,hn=1003,Xp=1004,Hr=1005,Un=1006,ro=1007,Ui=1008,kn=1009,sf=1010,rf=1011,fr=1012,lc=1013,Fi=1014,On=1015,Cr=1016,cc=1017,hc=1018,dr=1020,af=35902,of=35899,lf=1021,cf=1022,En=1023,pr=1026,mr=1027,uc=1028,fc=1029,hf=1030,dc=1031,pc=1033,_a=33776,xa=33777,ya=33778,va=33779,hl=35840,ul=35841,fl=35842,dl=35843,pl=36196,ml=37492,gl=37496,_l=37808,xl=37809,yl=37810,vl=37811,Ml=37812,bl=37813,Sl=37814,wl=37815,El=37816,Tl=37817,Al=37818,Cl=37819,Rl=37820,Pl=37821,Dl=36492,Ll=36494,Il=36495,Nl=36283,Ul=36284,Ol=36285,Fl=36286,$p=3200,Yp=3201,uf=0,qp=1,ci="",ln="srgb",Ts="srgb-linear",Da="linear",ue="srgb",Ji=7680,ch=519,jp=512,Kp=513,Jp=514,ff=515,Zp=516,Qp=517,tm=518,em=519,hh=35044,uh=35048,fh="300 es",Fn=2e3,La=2001;class Ls{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dh=1234567;const rr=Math.PI/180,gr=180/Math.PI;function zi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Jt(i,t,e){return Math.max(t,Math.min(e,i))}function mc(i,t){return(i%t+t)%t}function nm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function im(i,t,e){return i!==t?(e-i)/(t-i):0}function ar(i,t,e){return(1-e)*i+e*t}function sm(i,t,e,n){return ar(i,t,1-Math.exp(-e*n))}function rm(i,t=1){return t-Math.abs(mc(i,t*2)-t)}function am(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function om(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function lm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function cm(i,t){return i+Math.random()*(t-i)}function hm(i){return i*(.5-Math.random())}function um(i){i!==void 0&&(dh=i);let t=dh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function fm(i){return i*rr}function dm(i){return i*gr}function pm(i){return(i&i-1)===0&&i!==0}function mm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function gm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _m(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),u=a((t-n)/2),d=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*f,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function We(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ao={DEG2RAD:rr,RAD2DEG:gr,generateUUID:zi,clamp:Jt,euclideanModulo:mc,mapLinear:nm,inverseLerp:im,lerp:ar,damp:sm,pingpong:rm,smoothstep:am,smootherstep:om,randInt:lm,randFloat:cm,randFloatSpread:hm,seededRandom:um,degToRad:fm,radToDeg:dm,isPowerOfTwo:pm,ceilPowerOfTwo:mm,floorPowerOfTwo:gm,setQuaternionFromProperEuler:_m,normalize:We,denormalize:fs};class Mt{constructor(t=0,e=0){Mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Is{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3];const u=r[a+0],d=r[a+1],m=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=u,t[e+1]=d,t[e+2]=m,t[e+3]=x;return}if(f!==x||l!==u||c!==d||h!==m){let g=1-o;const p=l*u+c*d+h*m+f*x,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const w=Math.sqrt(y),E=Math.atan2(w,p*M);g=Math.sin(g*E)/w,o=Math.sin(o*E)/w}const _=o*M;if(l=l*g+u*_,c=c*g+d*_,h=h*g+m*_,f=f*g+x*_,g===1-o){const w=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=w,c*=w,h*=w,f*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],m=r[a+3];return t[e]=o*m+h*f+l*d-c*u,t[e+1]=l*m+h*u+c*f-o*d,t[e+2]=c*m+h*d+o*u-l*f,t[e+3]=h*m-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ph.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ph.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return oo.copy(this).projectOnVector(t),this.sub(oo)}reflect(t){return this.sub(oo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oo=new O,ph=new Is;class qt{constructor(t,e,n,s,r,a,o,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],m=n[8],x=s[0],g=s[3],p=s[6],M=s[1],y=s[4],_=s[7],w=s[2],E=s[5],A=s[8];return r[0]=a*x+o*M+l*w,r[3]=a*g+o*y+l*E,r[6]=a*p+o*_+l*A,r[1]=c*x+h*M+f*w,r[4]=c*g+h*y+f*E,r[7]=c*p+h*_+f*A,r[2]=u*x+d*M+m*w,r[5]=u*g+d*y+m*E,r[8]=u*p+d*_+m*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,m=e*f+n*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=f*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(lo.makeScale(t,e)),this}rotate(t){return this.premultiply(lo.makeRotation(-t)),this}translate(t,e){return this.premultiply(lo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const lo=new qt;function df(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ia(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xm(){const i=Ia("canvas");return i.style.display="block",i}const mh={};function _r(i){i in mh||(mh[i]=!0,console.warn(i))}function ym(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const gh=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_h=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vm(){const i={enabled:!0,workingColorSpace:Ts,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ue&&(s.r=Kn(s.r),s.g=Kn(s.g),s.b=Kn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ue&&(s.r=vs(s.r),s.g=vs(s.g),s.b=vs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ci?Da:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return _r("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return _r("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ts]:{primaries:t,whitePoint:n,transfer:Da,toXYZ:gh,fromXYZ:_h,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:gh,fromXYZ:_h,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),i}const re=vm();function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Zi;class Mm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Zi===void 0&&(Zi=Ia("canvas")),Zi.width=t.width,Zi.height=t.height;const s=Zi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Zi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ia("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Kn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kn(e[n]/255)*255):e[n]=Kn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bm=0;class gc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=zi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(co(s[a].image)):r.push(co(s[a]))}else r=co(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function co(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sm=0;const ho=new O;class Ye extends Ls{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=Ni,s=Ni,r=Un,a=Ui,o=En,l=kn,c=Ye.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=zi(),this.name="",this.source=new gc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ho).x}get height(){return this.source.getSize(ho).y}get depth(){return this.source.getSize(ho).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ll:t.x=t.x-Math.floor(t.x);break;case Ni:t.x=t.x<0?0:1;break;case cl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ll:t.y=t.y-Math.floor(t.y);break;case Ni:t.y=t.y<0?0:1;break;case cl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=nf;Ye.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,s=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,_=(d+1)/2,w=(p+1)/2,E=(h+u)/4,A=(f+x)/4,D=(m+g)/4;return y>_&&y>w?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=A/n):_>w?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=D/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=A/r,s=D/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(f-x)/M,this.z=(u-h)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wm extends Ls{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Ye(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new gc(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends wm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class pf extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Em extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hi{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gr.copy(n.boundingBox)),Gr.applyMatrix4(t.matrixWorld),this.union(Gr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vs),Vr.subVectors(this.max,Vs),Qi.subVectors(t.a,Vs),ts.subVectors(t.b,Vs),es.subVectors(t.c,Vs),ei.subVectors(ts,Qi),ni.subVectors(es,ts),Mi.subVectors(Qi,es);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-Mi.z,Mi.y,ei.z,0,-ei.x,ni.z,0,-ni.x,Mi.z,0,-Mi.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-Mi.y,Mi.x,0];return!uo(e,Qi,ts,es,Vr)||(e=[1,0,0,0,1,0,0,0,1],!uo(e,Qi,ts,es,Vr))?!1:(Wr.crossVectors(ei,ni),e=[Wr.x,Wr.y,Wr.z],uo(e,Qi,ts,es,Vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Wn=[new O,new O,new O,new O,new O,new O,new O,new O],xn=new O,Gr=new Hi,Qi=new O,ts=new O,es=new O,ei=new O,ni=new O,Mi=new O,Vs=new O,Vr=new O,Wr=new O,bi=new O;function uo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){bi.fromArray(i,r);const o=s.x*Math.abs(bi.x)+s.y*Math.abs(bi.y)+s.z*Math.abs(bi.z),l=t.dot(bi),c=e.dot(bi),h=n.dot(bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Tm=new Hi,Ws=new O,fo=new O;class Rr{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Tm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);const e=Ws.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ws,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add(fo)),this.expandByPoint(Ws.copy(t.center).sub(fo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Xn=new O,po=new O,Xr=new O,ii=new O,mo=new O,$r=new O,go=new O;class mf{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){po.copy(t).add(e).multiplyScalar(.5),Xr.copy(e).sub(t).normalize(),ii.copy(this.origin).sub(po);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Xr),o=ii.dot(this.direction),l=-ii.dot(Xr),c=ii.lengthSq(),h=Math.abs(1-a*a);let f,u,d,m;if(h>0)if(f=a*l-o,u=a*o-l,m=r*h,f>=0)if(u>=-m)if(u<=m){const x=1/h;f*=x,u*=x,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(po).addScaledVector(Xr,u),d}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);const n=Xn.dot(this.direction),s=Xn.dot(Xn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,n,s,r){mo.subVectors(e,t),$r.subVectors(n,t),go.crossVectors(mo,$r);let a=this.direction.dot(go),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ii.subVectors(this.origin,t);const l=o*this.direction.dot($r.crossVectors(ii,$r));if(l<0)return null;const c=o*this.direction.dot(mo.cross(ii));if(c<0||l+c>a)return null;const h=-o*ii.dot(go);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,s,r,a,o,l,c,h,f,u,d,m,x,g){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,u,d,m,x,g)}set(t,e,n,s,r,a,o,l,c,h,f,u,d,m,x,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ns.setFromMatrixColumn(t,0).length(),r=1/ns.setFromMatrixColumn(t,1).length(),a=1/ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=a*h,d=a*f,m=o*h,x=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+m*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=m+d*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,m=c*h,x=c*f;e[0]=u+x*o,e[4]=m*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-m,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,m=c*h,x=c*f;e[0]=u-x*o,e[4]=-a*f,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,d=a*f,m=o*h,x=o*f;e[0]=l*h,e[4]=m*c-d,e[8]=u*c+x,e[1]=l*f,e[5]=x*c+u,e[9]=d*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,d=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=x-u*f,e[8]=m*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+m,e[10]=u-x*f}else if(t.order==="XZY"){const u=a*l,d=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+x,e[5]=a*h,e[9]=d*f-m,e[2]=m*f-d,e[6]=o*h,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Am,t,Cm)}lookAt(t,e,n){const s=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),si.crossVectors(n,sn),si.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),si.crossVectors(n,sn)),si.normalize(),Yr.crossVectors(sn,si),s[0]=si.x,s[4]=Yr.x,s[8]=sn.x,s[1]=si.y,s[5]=Yr.y,s[9]=sn.y,s[2]=si.z,s[6]=Yr.z,s[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],M=n[3],y=n[7],_=n[11],w=n[15],E=s[0],A=s[4],D=s[8],v=s[12],b=s[1],P=s[5],C=s[9],I=s[13],U=s[2],N=s[6],F=s[10],X=s[14],z=s[3],V=s[7],st=s[11],et=s[15];return r[0]=a*E+o*b+l*U+c*z,r[4]=a*A+o*P+l*N+c*V,r[8]=a*D+o*C+l*F+c*st,r[12]=a*v+o*I+l*X+c*et,r[1]=h*E+f*b+u*U+d*z,r[5]=h*A+f*P+u*N+d*V,r[9]=h*D+f*C+u*F+d*st,r[13]=h*v+f*I+u*X+d*et,r[2]=m*E+x*b+g*U+p*z,r[6]=m*A+x*P+g*N+p*V,r[10]=m*D+x*C+g*F+p*st,r[14]=m*v+x*I+g*X+p*et,r[3]=M*E+y*b+_*U+w*z,r[7]=M*A+y*P+_*N+w*V,r[11]=M*D+y*C+_*F+w*st,r[15]=M*v+y*I+_*X+w*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*l*f-s*c*f-r*o*u+n*c*u+s*o*d-n*l*d)+x*(+e*l*d-e*c*u+r*a*u-s*a*d+s*c*h-r*l*h)+g*(+e*c*f-e*o*d-r*a*f+n*a*d+r*o*h-n*c*h)+p*(-s*o*h-e*l*f+e*o*u+s*a*f-n*a*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],m=t[12],x=t[13],g=t[14],p=t[15],M=f*g*c-x*u*c+x*l*d-o*g*d-f*l*p+o*u*p,y=m*u*c-h*g*c-m*l*d+a*g*d+h*l*p-a*u*p,_=h*x*c-m*f*c+m*o*d-a*x*d-h*o*p+a*f*p,w=m*f*l-h*x*l-m*o*u+a*x*u+h*o*g-a*f*g,E=e*M+n*y+s*_+r*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=M*A,t[1]=(x*u*r-f*g*r-x*s*d+n*g*d+f*s*p-n*u*p)*A,t[2]=(o*g*r-x*l*r+x*s*c-n*g*c-o*s*p+n*l*p)*A,t[3]=(f*l*r-o*u*r-f*s*c+n*u*c+o*s*d-n*l*d)*A,t[4]=y*A,t[5]=(h*g*r-m*u*r+m*s*d-e*g*d-h*s*p+e*u*p)*A,t[6]=(m*l*r-a*g*r-m*s*c+e*g*c+a*s*p-e*l*p)*A,t[7]=(a*u*r-h*l*r+h*s*c-e*u*c-a*s*d+e*l*d)*A,t[8]=_*A,t[9]=(m*f*r-h*x*r-m*n*d+e*x*d+h*n*p-e*f*p)*A,t[10]=(a*x*r-m*o*r+m*n*c-e*x*c-a*n*p+e*o*p)*A,t[11]=(h*o*r-a*f*r-h*n*c+e*f*c+a*n*d-e*o*d)*A,t[12]=w*A,t[13]=(h*x*s-m*f*s+m*n*u-e*x*u-h*n*g+e*f*g)*A,t[14]=(m*o*s-a*x*s-m*n*l+e*x*l+a*n*g-e*o*g)*A,t[15]=(a*f*s-h*o*s+h*n*l-e*f*l-a*n*u+e*o*u)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,m=r*f,x=a*h,g=a*f,p=o*f,M=l*c,y=l*h,_=l*f,w=n.x,E=n.y,A=n.z;return s[0]=(1-(x+p))*w,s[1]=(d+_)*w,s[2]=(m-y)*w,s[3]=0,s[4]=(d-_)*E,s[5]=(1-(u+p))*E,s[6]=(g+M)*E,s[7]=0,s[8]=(m+y)*A,s[9]=(g-M)*A,s[10]=(1-(u+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ns.set(s[0],s[1],s[2]).length();const a=ns.set(s[4],s[5],s[6]).length(),o=ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],yn.copy(this);const c=1/r,h=1/a,f=1/o;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=f,yn.elements[9]*=f,yn.elements[10]*=f,e.setFromRotationMatrix(yn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Fn,l=!1){const c=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let m,x;if(l)m=r/(a-r),x=a*r/(a-r);else if(o===Fn)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===La)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Fn,l=!1){const c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s);let m,x;if(l)m=1/(a-r),x=a/(a-r);else if(o===Fn)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===La)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ns=new O,yn=new ce,Am=new O(0,0,0),Cm=new O(1,1,1),si=new O,Yr=new O,sn=new O,xh=new ce,yh=new Is;class Bn{constructor(t=0,e=0,n=0,s=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yh.setFromEuler(this),this.setFromQuaternion(yh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class _c{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rm=0;const vh=new O,is=new Is,$n=new ce,qr=new O,Xs=new O,Pm=new O,Dm=new Is,Mh=new O(1,0,0),bh=new O(0,1,0),Sh=new O(0,0,1),wh={type:"added"},Lm={type:"removed"},ss={type:"childadded",child:null},_o={type:"childremoved",child:null};class Be extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Be.DEFAULT_UP.clone();const t=new O,e=new Bn,n=new Is,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new qt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(Mh,t)}rotateY(t){return this.rotateOnAxis(bh,t)}rotateZ(t){return this.rotateOnAxis(Sh,t)}translateOnAxis(t,e){return vh.copy(t).applyQuaternion(this.quaternion),this.position.add(vh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mh,t)}translateY(t){return this.translateOnAxis(bh,t)}translateZ(t){return this.translateOnAxis(Sh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qr.copy(t):qr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Xs,qr,this.up):$n.lookAt(qr,Xs,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),is.setFromRotationMatrix($n),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wh),ss.child=t,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lm),_o.child=t,this.dispatchEvent(_o),_o.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wh),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,Pm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,Dm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Be.DEFAULT_UP=new O(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new O,Yn=new O,xo=new O,qn=new O,rs=new O,as=new O,Eh=new O,yo=new O,vo=new O,Mo=new O,bo=new xe,So=new xe,wo=new xe;class wn{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vn.subVectors(s,e),Yn.subVectors(n,e),xo.subVectors(t,e);const a=vn.dot(vn),o=vn.dot(Yn),l=vn.dot(xo),c=Yn.dot(Yn),h=Yn.dot(xo),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qn.x),l.addScaledVector(a,qn.y),l.addScaledVector(o,qn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return bo.setScalar(0),So.setScalar(0),wo.setScalar(0),bo.fromBufferAttribute(t,e),So.fromBufferAttribute(t,n),wo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(bo,r.x),a.addScaledVector(So,r.y),a.addScaledVector(wo,r.z),a}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),Yn.subVectors(t,e),vn.cross(Yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),vn.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return wn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;rs.subVectors(s,n),as.subVectors(r,n),yo.subVectors(t,n);const l=rs.dot(yo),c=as.dot(yo);if(l<=0&&c<=0)return e.copy(n);vo.subVectors(t,s);const h=rs.dot(vo),f=as.dot(vo);if(h>=0&&f<=h)return e.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(rs,a);Mo.subVectors(t,r);const d=rs.dot(Mo),m=as.dot(Mo);if(m>=0&&d<=m)return e.copy(r);const x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(as,o);const g=h*m-d*f;if(g<=0&&f-h>=0&&d-m>=0)return Eh.subVectors(r,s),o=(f-h)/(f-h+(d-m)),e.copy(s).addScaledVector(Eh,o);const p=1/(g+x+u);return a=x*p,o=u*p,e.copy(n).addScaledVector(rs,a).addScaledVector(as,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},jr={h:0,s:0,l:0};function Eo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=mc(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Eo(a,r,t+1/3),this.g=Eo(a,r,t),this.b=Eo(a,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=ln){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){const n=gf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return re.workingToColorSpace(He.copy(this),t),Math.round(Jt(He.r*255,0,255))*65536+Math.round(Jt(He.g*255,0,255))*256+Math.round(Jt(He.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(He.copy(this),e);const n=He.r,s=He.g,r=He.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=ln){re.workingToColorSpace(He.copy(this),t);const e=He.r,n=He.g,s=He.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(jr);const n=ar(ri.h,jr.h,e),s=ar(ri.s,jr.s,e),r=ar(ri.l,jr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new jt;jt.NAMES=gf;let Im=0;class Pr extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=ys,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zo,this.blendDst=Qo,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zo&&(n.blendSrc=this.blendSrc),this.blendDst!==Qo&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ch&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class hi extends Pr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new O,Kr=new Mt;let Nm=0;class Tn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hh,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Kr.fromBufferAttribute(this,e),Kr.applyMatrix3(t),this.setXY(e,Kr.x,Kr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fs(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fs(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fs(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hh&&(t.usage=this.usage),t}}class _f extends Tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class xf extends Tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ie extends Tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Um=0;const dn=new ce,To=new Be,os=new O,rn=new Hi,$s=new Hi,Oe=new O;class Pe extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(df(t)?xf:_f)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return To.lookAt(t),To.updateMatrix(),this.applyMatrix4(To.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ie(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];$s.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(rn.min,$s.min),rn.expandByPoint(Oe),Oe.addVectors(rn.max,$s.max),rn.expandByPoint(Oe)):(rn.expandByPoint($s.min),rn.expandByPoint($s.max))}rn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Oe.fromBufferAttribute(o,c),l&&(os.fromBufferAttribute(t,c),Oe.add(os)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new O,l[D]=new O;const c=new O,h=new O,f=new O,u=new Mt,d=new Mt,m=new Mt,x=new O,g=new O;function p(D,v,b){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,v),f.fromBufferAttribute(n,b),u.fromBufferAttribute(r,D),d.fromBufferAttribute(r,v),m.fromBufferAttribute(r,b),h.sub(c),f.sub(c),d.sub(u),m.sub(u);const P=1/(d.x*m.y-m.x*d.y);isFinite(P)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(P),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(P),o[D].add(x),o[v].add(x),o[b].add(x),l[D].add(g),l[v].add(g),l[b].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let D=0,v=M.length;D<v;++D){const b=M[D],P=b.start,C=b.count;for(let I=P,U=P+C;I<U;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const y=new O,_=new O,w=new O,E=new O;function A(D){w.fromBufferAttribute(s,D),E.copy(w);const v=o[D];y.copy(v),y.sub(w.multiplyScalar(w.dot(v))).normalize(),_.crossVectors(E,v);const P=_.dot(l[D])<0?-1:1;a.setXYZW(D,y.x,y.y,y.z,P)}for(let D=0,v=M.length;D<v;++D){const b=M[D],P=b.start,C=b.count;for(let I=P,U=P+C;I<U;I+=3)A(t.getX(I+0)),A(t.getX(I+1)),A(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,h=new O,f=new O;if(t)for(let u=0,d=t.count;u<d;u+=3){const m=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let d=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let p=0;p<h;p++)u[m++]=c[d++]}return new Tn(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Th=new ce,Si=new mf,Jr=new Rr,Ah=new O,Zr=new O,Qr=new O,ta=new O,Ao=new O,ea=new O,Ch=new O,na=new O;class le extends Be{constructor(t=new Pe,e=new hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ea.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(Ao.fromBufferAttribute(f,t),a?ea.addScaledVector(Ao,h):ea.addScaledVector(Ao.sub(e),h))}e.add(ea)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(r),Si.copy(t.ray).recast(t.near),!(Jr.containsPoint(Si.origin)===!1&&(Si.intersectSphere(Jr,Ah)===null||Si.origin.distanceToSquared(Ah)>(t.far-t.near)**2))&&(Th.copy(r).invert(),Si.copy(t.ray).applyMatrix4(Th),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Si)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){const g=u[m],p=a[g.materialIndex],M=Math.max(g.start,d.start),y=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let _=M,w=y;_<w;_+=3){const E=o.getX(_),A=o.getX(_+1),D=o.getX(_+2);s=ia(this,p,t,n,c,h,f,E,A,D),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const M=o.getX(g),y=o.getX(g+1),_=o.getX(g+2);s=ia(this,a,t,n,c,h,f,M,y,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){const g=u[m],p=a[g.materialIndex],M=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let _=M,w=y;_<w;_+=3){const E=_,A=_+1,D=_+2;s=ia(this,p,t,n,c,h,f,E,A,D),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const M=g,y=g+1,_=g+2;s=ia(this,a,t,n,c,h,f,M,y,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Om(i,t,e,n,s,r,a,o){let l;if(t.side===Qe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Jn,o),l===null)return null;na.copy(o),na.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(na);return c<e.near||c>e.far?null:{distance:c,point:na.clone(),object:i}}function ia(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Zr),i.getVertexPosition(l,Qr),i.getVertexPosition(c,ta);const h=Om(i,t,e,n,Zr,Qr,ta,Ch);if(h){const f=new O;wn.getBarycoord(Ch,Zr,Qr,ta,f),s&&(h.uv=wn.getInterpolatedAttribute(s,o,l,c,f,new Mt)),r&&(h.uv1=wn.getInterpolatedAttribute(r,o,l,c,f,new Mt)),a&&(h.normal=wn.getInterpolatedAttribute(a,o,l,c,f,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new O,materialIndex:0};wn.getNormal(Zr,Qr,ta,u.normal),h.face=u,h.barycoord=f}return h}class gi extends Pe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,d=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(f,2));function m(x,g,p,M,y,_,w,E,A,D,v){const b=_/A,P=w/D,C=_/2,I=w/2,U=E/2,N=A+1,F=D+1;let X=0,z=0;const V=new O;for(let st=0;st<F;st++){const et=st*P-I;for(let ct=0;ct<N;ct++){const yt=ct*b-C;V[x]=yt*M,V[g]=et*y,V[p]=U,c.push(V.x,V.y,V.z),V[x]=0,V[g]=0,V[p]=E>0?1:-1,h.push(V.x,V.y,V.z),f.push(ct/A),f.push(1-st/D),X+=1}}for(let st=0;st<D;st++)for(let et=0;et<A;et++){const ct=u+et+N*st,yt=u+et+N*(st+1),Ht=u+(et+1)+N*(st+1),Ft=u+(et+1)+N*st;l.push(ct,yt,Ft),l.push(yt,Ht,Ft),z+=6}o.addGroup(d,z,v),d+=z,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function As(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Xe(i){const t={};for(let e=0;e<i.length;e++){const n=As(i[e]);for(const s in n)t[s]=n[s]}return t}function Fm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function yf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const km={clone:As,merge:Xe};var Bm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends Pr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bm,this.fragmentShader=zm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=Fm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class vf extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ai=new O,Rh=new Mt,Ph=new Mt;class _n extends vf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=gr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ai.x,ai.y).multiplyScalar(-t/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-t/ai.z)}getViewSize(t,e){return this.getViewBounds(t,Rh,Ph),e.subVectors(Ph,Rh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(rr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ls=-90,cs=1;class Hm extends Be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(ls,cs,t,e);s.layers=this.layers,this.add(s);const r=new _n(ls,cs,t,e);r.layers=this.layers,this.add(r);const a=new _n(ls,cs,t,e);a.layers=this.layers,this.add(a);const o=new _n(ls,cs,t,e);o.layers=this.layers,this.add(o);const l=new _n(ls,cs,t,e);l.layers=this.layers,this.add(l);const c=new _n(ls,cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===La)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Mf extends Ye{constructor(t=[],e=ws,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gm extends ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Mf(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new gi(5,5,5),r=new _i({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:di});r.uniforms.tEquirect.value=e;const a=new le(s,r),o=e.minFilter;return e.minFilter===Ui&&(e.minFilter=Un),new Hm(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class Zt extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vm={type:"move"};class Co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class xc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new jt(t),this.near=e,this.far=n}clone(){return new xc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class bf extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Wm extends Ye{constructor(t=null,e=1,n=1,s,r,a,o,l,c=hn,h=hn,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dh extends Tn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const hs=new ce,Lh=new ce,sa=[],Ih=new Hi,Xm=new ce,Ys=new le,qs=new Rr;class ra extends le{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Dh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Xm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),Ih.copy(t.boundingBox).applyMatrix4(hs),this.boundingBox.union(Ih)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),qs.copy(t.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),t.ray.intersectsSphere(qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hs),Lh.multiplyMatrices(n,hs),Ys.matrixWorld=Lh,Ys.raycast(t,sa);for(let a=0,o=sa.length;a<o;a++){const l=sa[a];l.instanceId=r,l.object=this,e.push(l)}sa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Dh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wm(new Float32Array(s*this.count),s,this.count,uc,On));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ro=new O,$m=new O,Ym=new qt;class Ci{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ro.subVectors(n,e).cross($m.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ro),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ym.getNormalMatrix(t),s=this.coplanarPoint(Ro).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new Rr,qm=new Mt(.5,.5),aa=new O;class yc{constructor(t=new Ci,e=new Ci,n=new Ci,s=new Ci,r=new Ci,a=new Ci){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],m=r[8],x=r[9],g=r[10],p=r[11],M=r[12],y=r[13],_=r[14],w=r[15];if(s[0].setComponents(c-a,d-h,p-m,w-M).normalize(),s[1].setComponents(c+a,d+h,p+m,w+M).normalize(),s[2].setComponents(c+o,d+f,p+x,w+y).normalize(),s[3].setComponents(c-o,d-f,p-x,w-y).normalize(),n)s[4].setComponents(l,u,g,_).normalize(),s[5].setComponents(c-l,d-u,p-g,w-_).normalize();else if(s[4].setComponents(c-l,d-u,p-g,w-_).normalize(),e===Fn)s[5].setComponents(c+l,d+u,p+g,w+_).normalize();else if(e===La)s[5].setComponents(l,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(t){wi.center.set(0,0,0);const e=qm.distanceTo(t.center);return wi.radius=.7071067811865476+e,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(aa.x=s.normal.x>0?t.max.x:t.min.x,aa.y=s.normal.y>0?t.max.y:t.min.y,aa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(aa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sf extends Ye{constructor(t,e,n=Fi,s,r,a,o=hn,l=hn,c,h=pr,f=1){if(h!==pr&&h!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class wf extends Ye{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Na extends Pe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new O,h=new Mt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=n+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(o,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Na(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ns extends Pe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],d=[];let m=0;const x=[],g=n/2;let p=0;M(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ie(f,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(d,2));function M(){const _=new O,w=new O;let E=0;const A=(e-t)/n;for(let D=0;D<=r;D++){const v=[],b=D/r,P=b*(e-t)+t;for(let C=0;C<=s;C++){const I=C/s,U=I*l+o,N=Math.sin(U),F=Math.cos(U);w.x=P*N,w.y=-b*n+g,w.z=P*F,f.push(w.x,w.y,w.z),_.set(N,A,F).normalize(),u.push(_.x,_.y,_.z),d.push(I,1-b),v.push(m++)}x.push(v)}for(let D=0;D<s;D++)for(let v=0;v<r;v++){const b=x[v][D],P=x[v+1][D],C=x[v+1][D+1],I=x[v][D+1];(t>0||v!==0)&&(h.push(b,P,I),E+=3),(e>0||v!==r-1)&&(h.push(P,C,I),E+=3)}c.addGroup(p,E,0),p+=E}function y(_){const w=m,E=new Mt,A=new O;let D=0;const v=_===!0?t:e,b=_===!0?1:-1;for(let C=1;C<=s;C++)f.push(0,g*b,0),u.push(0,b,0),d.push(.5,.5),m++;const P=m;for(let C=0;C<=s;C++){const U=C/s*l+o,N=Math.cos(U),F=Math.sin(U);A.x=v*F,A.y=g*b,A.z=v*N,f.push(A.x,A.y,A.z),u.push(0,b,0),E.x=N*.5+.5,E.y=F*.5*b+.5,d.push(E.x,E.y),m++}for(let C=0;C<s;C++){const I=w+C,U=P+C;_===!0?h.push(U,U+1,I):h.push(U+1,U,I),D+=3}c.addGroup(p,D,_===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ns(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vc extends Ns{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new vc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mc extends Pe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const y=new O,_=new O,w=new O;for(let E=0;E<e.length;E+=3)d(e[E+0],y),d(e[E+1],_),d(e[E+2],w),l(y,_,w,M)}function l(M,y,_,w){const E=w+1,A=[];for(let D=0;D<=E;D++){A[D]=[];const v=M.clone().lerp(_,D/E),b=y.clone().lerp(_,D/E),P=E-D;for(let C=0;C<=P;C++)C===0&&D===E?A[D][C]=v:A[D][C]=v.clone().lerp(b,C/P)}for(let D=0;D<E;D++)for(let v=0;v<2*(E-D)-1;v++){const b=Math.floor(v/2);v%2===0?(u(A[D][b+1]),u(A[D+1][b]),u(A[D][b])):(u(A[D][b+1]),u(A[D+1][b+1]),u(A[D+1][b]))}}function c(M){const y=new O;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(M),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){const M=new O;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];const _=g(M)/2/Math.PI+.5,w=p(M)/Math.PI+.5;a.push(_,1-w)}m(),f()}function f(){for(let M=0;M<a.length;M+=6){const y=a[M+0],_=a[M+2],w=a[M+4],E=Math.max(y,_,w),A=Math.min(y,_,w);E>.9&&A<.1&&(y<.2&&(a[M+0]+=1),_<.2&&(a[M+2]+=1),w<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function d(M,y){const _=M*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function m(){const M=new O,y=new O,_=new O,w=new O,E=new Mt,A=new Mt,D=new Mt;for(let v=0,b=0;v<r.length;v+=9,b+=6){M.set(r[v+0],r[v+1],r[v+2]),y.set(r[v+3],r[v+4],r[v+5]),_.set(r[v+6],r[v+7],r[v+8]),E.set(a[b+0],a[b+1]),A.set(a[b+2],a[b+3]),D.set(a[b+4],a[b+5]),w.copy(M).add(y).add(_).divideScalar(3);const P=g(w);x(E,b+0,M,P),x(A,b+2,y,P),x(D,b+4,_,P)}}function x(M,y,_,w){w<0&&M.x===1&&(a[y]=M.x-1),_.x===0&&_.z===0&&(a[y]=w/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mc(t.vertices,t.indices,t.radius,t.details)}}class Hn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Mt:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new O,s=[],r=[],a=[],o=new O,l=new ce;for(let d=0;d<=t;d++){const m=d/t;s[d]=this.getTangentAt(m,new O)}r[0]=new O,a[0]=new O;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Jt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Jt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class bc extends Hn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Mt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class jm extends bc{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Sc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const oa=new O,Po=new Sc,Do=new Sc,Lo=new Sc;class Km extends Hn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(oa.subVectors(s[0],s[1]).add(s[0]),c=oa);const f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(oa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=oa),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Po.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,x,g),Do.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,x,g),Lo.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(Po.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Do.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Lo.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Po.calc(l),Do.calc(l),Lo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Nh(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Jm(i,t){const e=1-i;return e*e*t}function Zm(i,t){return 2*(1-i)*i*t}function Qm(i,t){return i*i*t}function or(i,t,e,n){return Jm(i,t)+Zm(i,e)+Qm(i,n)}function t0(i,t){const e=1-i;return e*e*e*t}function e0(i,t){const e=1-i;return 3*e*e*i*t}function n0(i,t){return 3*(1-i)*i*i*t}function i0(i,t){return i*i*i*t}function lr(i,t,e,n,s){return t0(i,t)+e0(i,e)+n0(i,n)+i0(i,s)}class Ef extends Hn{constructor(t=new Mt,e=new Mt,n=new Mt,s=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Mt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(lr(t,s.x,r.x,a.x,o.x),lr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class s0 extends Hn{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(lr(t,s.x,r.x,a.x,o.x),lr(t,s.y,r.y,a.y,o.y),lr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Tf extends Hn{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class r0 extends Hn{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Af extends Hn{constructor(t=new Mt,e=new Mt,n=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Mt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(or(t,s.x,r.x,a.x),or(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class a0 extends Hn{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(or(t,s.x,r.x,a.x),or(t,s.y,r.y,a.y),or(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cf extends Hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Nh(o,l.x,c.x,h.x,f.x),Nh(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Mt().fromArray(s))}return this}}var kl=Object.freeze({__proto__:null,ArcCurve:jm,CatmullRomCurve3:Km,CubicBezierCurve:Ef,CubicBezierCurve3:s0,EllipseCurve:bc,LineCurve:Tf,LineCurve3:r0,QuadraticBezierCurve:Af,QuadraticBezierCurve3:a0,SplineCurve:Cf});class o0 extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new kl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new kl[s.type]().fromJSON(s))}return this}}class Uh extends o0{constructor(t){super(),this.type="Path",this.currentPoint=new Mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Tf(this.currentPoint.clone(),new Mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Af(this.currentPoint.clone(),new Mt(t,e),new Mt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Ef(this.currentPoint.clone(),new Mt(t,e),new Mt(n,s),new Mt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Cf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new bc(t,e,n,s,r,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Bl extends Uh{constructor(t){super(t),this.uuid=zi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Uh().fromJSON(s))}return this}}function l0(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Rf(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=d0(i,t,r,e)),i.length>80*e){o=1/0,l=1/0;let h=-1/0,f=-1/0;for(let u=e;u<s;u+=e){const d=i[u],m=i[u+1];d<o&&(o=d),m<l&&(l=m),d>h&&(h=d),m>f&&(f=m)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return xr(r,a,e,o,l,c,0),a}function Rf(i,t,e,n,s){let r;if(s===w0(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Oh(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Oh(a/n|0,i[a],i[a+1],r);return r&&Cs(r,r.next)&&(vr(r),r=r.next),r}function Bi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Cs(e,e.next)||Me(e.prev,e,e.next)===0)){if(vr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function xr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&x0(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?h0(i,n,s,r):c0(i)){t.push(l.i,i.i,c.i),vr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=u0(Bi(i),t),xr(i,t,e,n,s,r,2)):a===2&&f0(i,t,e,n,s,r):xr(Bi(i),t,e,n,s,r,1);break}}}function c0(i){const t=i.prev,e=i,n=i.next;if(Me(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c);let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&Js(s,o,r,l,a,c,m.x,m.y)&&Me(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function h0(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Me(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),m=Math.min(h,f,u),x=Math.max(o,l,c),g=Math.max(h,f,u),p=zl(d,m,t,e,n),M=zl(x,g,t,e,n);let y=i.prevZ,_=i.nextZ;for(;y&&y.z>=p&&_&&_.z<=M;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&Js(o,h,l,f,c,u,y.x,y.y)&&Me(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&Js(o,h,l,f,c,u,_.x,_.y)&&Me(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&Js(o,h,l,f,c,u,y.x,y.y)&&Me(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=M;){if(_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&Js(o,h,l,f,c,u,_.x,_.y)&&Me(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function u0(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Cs(n,s)&&Df(n,e,e.next,s)&&yr(n,s)&&yr(s,n)&&(t.push(n.i,e.i,s.i),vr(e),vr(e.next),e=i=s),e=e.next}while(e!==i);return Bi(e)}function f0(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&M0(a,o)){let l=Lf(a,o);a=Bi(a,a.next),l=Bi(l,l.next),xr(a,t,e,n,s,r,0),xr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function d0(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Rf(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(v0(c))}s.sort(p0);for(let r=0;r<s.length;r++)e=m0(s[r],e);return e}function p0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function m0(i,t){const e=g0(i,t);if(!e)return t;const n=Lf(e,i);return Bi(n,n.next),Bi(e,e.next)}function g0(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(Cs(i,e))return e;do{if(Cs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Pf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);yr(e,i)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&_0(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function _0(i,t){return Me(i.prev,i,t.prev)<0&&Me(t.next,i,i.next)<0}function x0(i,t,e,n){let s=i;do s.z===0&&(s.z=zl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,y0(s)}function y0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function zl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function v0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Pf(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Js(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Pf(i,t,e,n,s,r,a,o)}function M0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!b0(i,t)&&(yr(i,t)&&yr(t,i)&&S0(i,t)&&(Me(i.prev,i,t.prev)||Me(i,t.prev,t))||Cs(i,t)&&Me(i.prev,i,i.next)>0&&Me(t.prev,t,t.next)>0)}function Me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Cs(i,t){return i.x===t.x&&i.y===t.y}function Df(i,t,e,n){const s=ca(Me(i,t,e)),r=ca(Me(i,t,n)),a=ca(Me(e,n,i)),o=ca(Me(e,n,t));return!!(s!==r&&a!==o||s===0&&la(i,e,t)||r===0&&la(i,n,t)||a===0&&la(e,i,n)||o===0&&la(e,t,n))}function la(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ca(i){return i>0?1:i<0?-1:0}function b0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Df(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function yr(i,t){return Me(i.prev,i,i.next)<0?Me(i,t,i.next)>=0&&Me(i,i.prev,t)>=0:Me(i,t,i.prev)<0||Me(i,i.next,t)<0}function S0(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Lf(i,t){const e=Hl(i.i,i.x,i.y),n=Hl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Oh(i,t,e,n){const s=Hl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function vr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Hl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function w0(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class E0{static triangulate(t,e,n=2){return l0(t,e,n)}}class ms{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ms.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Fh(t),kh(n,t);let a=t.length;e.forEach(Fh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,kh(n,e[l]);const o=E0.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Fh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function kh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ua extends Pe{constructor(t=new Bl([new Mt(.5,.5),new Mt(-.5,.5),new Mt(-.5,-.5),new Mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new ie(s,3)),this.setAttribute("uv",new ie(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:T0;let y,_=!1,w,E,A,D;p&&(y=p.getSpacedPoints(h),_=!0,u=!1,w=p.computeFrenetFrames(h,!1),E=new O,A=new O,D=new O),u||(g=0,d=0,m=0,x=0);const v=o.extractPoints(c);let b=v.shape;const P=v.holes;if(!ms.isClockWise(b)){b=b.reverse();for(let nt=0,Q=P.length;nt<Q;nt++){const $=P[nt];ms.isClockWise($)&&(P[nt]=$.reverse())}}function I(nt){const $=10000000000000001e-36;let tt=nt[0];for(let gt=1;gt<=nt.length;gt++){const it=gt%nt.length,ot=nt[it],Ut=ot.x-tt.x,kt=ot.y-tt.y,R=Ut*Ut+kt*kt,S=Math.max(Math.abs(ot.x),Math.abs(ot.y),Math.abs(tt.x),Math.abs(tt.y)),B=$*S*S;if(R<=B){nt.splice(it,1),gt--;continue}tt=ot}}I(b),P.forEach(I);const U=P.length,N=b;for(let nt=0;nt<U;nt++){const Q=P[nt];b=b.concat(Q)}function F(nt,Q,$){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(Q,$)}const X=b.length;function z(nt,Q,$){let tt,gt,it;const ot=nt.x-Q.x,Ut=nt.y-Q.y,kt=$.x-nt.x,R=$.y-nt.y,S=ot*ot+Ut*Ut,B=ot*R-Ut*kt;if(Math.abs(B)>Number.EPSILON){const Y=Math.sqrt(S),rt=Math.sqrt(kt*kt+R*R),Z=Q.x-Ut/Y,At=Q.y+ot/Y,pt=$.x-R/rt,Tt=$.y+kt/rt,Lt=((pt-Z)*R-(Tt-At)*kt)/(ot*R-Ut*kt);tt=Z+ot*Lt-nt.x,gt=At+Ut*Lt-nt.y;const ht=tt*tt+gt*gt;if(ht<=2)return new Mt(tt,gt);it=Math.sqrt(ht/2)}else{let Y=!1;ot>Number.EPSILON?kt>Number.EPSILON&&(Y=!0):ot<-Number.EPSILON?kt<-Number.EPSILON&&(Y=!0):Math.sign(Ut)===Math.sign(R)&&(Y=!0),Y?(tt=-Ut,gt=ot,it=Math.sqrt(S)):(tt=ot,gt=Ut,it=Math.sqrt(S/2))}return new Mt(tt/it,gt/it)}const V=[];for(let nt=0,Q=N.length,$=Q-1,tt=nt+1;nt<Q;nt++,$++,tt++)$===Q&&($=0),tt===Q&&(tt=0),V[nt]=z(N[nt],N[$],N[tt]);const st=[];let et,ct=V.concat();for(let nt=0,Q=U;nt<Q;nt++){const $=P[nt];et=[];for(let tt=0,gt=$.length,it=gt-1,ot=tt+1;tt<gt;tt++,it++,ot++)it===gt&&(it=0),ot===gt&&(ot=0),et[tt]=z($[tt],$[it],$[ot]);st.push(et),ct=ct.concat(et)}let yt;if(g===0)yt=ms.triangulateShape(N,P);else{const nt=[],Q=[];for(let $=0;$<g;$++){const tt=$/g,gt=d*Math.cos(tt*Math.PI/2),it=m*Math.sin(tt*Math.PI/2)+x;for(let ot=0,Ut=N.length;ot<Ut;ot++){const kt=F(N[ot],V[ot],it);xt(kt.x,kt.y,-gt),tt===0&&nt.push(kt)}for(let ot=0,Ut=U;ot<Ut;ot++){const kt=P[ot];et=st[ot];const R=[];for(let S=0,B=kt.length;S<B;S++){const Y=F(kt[S],et[S],it);xt(Y.x,Y.y,-gt),tt===0&&R.push(Y)}tt===0&&Q.push(R)}}yt=ms.triangulateShape(nt,Q)}const Ht=yt.length,Ft=m+x;for(let nt=0;nt<X;nt++){const Q=u?F(b[nt],ct[nt],Ft):b[nt];_?(A.copy(w.normals[0]).multiplyScalar(Q.x),E.copy(w.binormals[0]).multiplyScalar(Q.y),D.copy(y[0]).add(A).add(E),xt(D.x,D.y,D.z)):xt(Q.x,Q.y,0)}for(let nt=1;nt<=h;nt++)for(let Q=0;Q<X;Q++){const $=u?F(b[Q],ct[Q],Ft):b[Q];_?(A.copy(w.normals[nt]).multiplyScalar($.x),E.copy(w.binormals[nt]).multiplyScalar($.y),D.copy(y[nt]).add(A).add(E),xt(D.x,D.y,D.z)):xt($.x,$.y,f/h*nt)}for(let nt=g-1;nt>=0;nt--){const Q=nt/g,$=d*Math.cos(Q*Math.PI/2),tt=m*Math.sin(Q*Math.PI/2)+x;for(let gt=0,it=N.length;gt<it;gt++){const ot=F(N[gt],V[gt],tt);xt(ot.x,ot.y,f+$)}for(let gt=0,it=P.length;gt<it;gt++){const ot=P[gt];et=st[gt];for(let Ut=0,kt=ot.length;Ut<kt;Ut++){const R=F(ot[Ut],et[Ut],tt);_?xt(R.x,R.y+y[h-1].y,y[h-1].x+$):xt(R.x,R.y,f+$)}}}K(),J();function K(){const nt=s.length/3;if(u){let Q=0,$=X*Q;for(let tt=0;tt<Ht;tt++){const gt=yt[tt];_t(gt[2]+$,gt[1]+$,gt[0]+$)}Q=h+g*2,$=X*Q;for(let tt=0;tt<Ht;tt++){const gt=yt[tt];_t(gt[0]+$,gt[1]+$,gt[2]+$)}}else{for(let Q=0;Q<Ht;Q++){const $=yt[Q];_t($[2],$[1],$[0])}for(let Q=0;Q<Ht;Q++){const $=yt[Q];_t($[0]+X*h,$[1]+X*h,$[2]+X*h)}}n.addGroup(nt,s.length/3-nt,0)}function J(){const nt=s.length/3;let Q=0;mt(N,Q),Q+=N.length;for(let $=0,tt=P.length;$<tt;$++){const gt=P[$];mt(gt,Q),Q+=gt.length}n.addGroup(nt,s.length/3-nt,1)}function mt(nt,Q){let $=nt.length;for(;--$>=0;){const tt=$;let gt=$-1;gt<0&&(gt=nt.length-1);for(let it=0,ot=h+g*2;it<ot;it++){const Ut=X*it,kt=X*(it+1),R=Q+tt+Ut,S=Q+gt+Ut,B=Q+gt+kt,Y=Q+tt+kt;Nt(R,S,B,Y)}}}function xt(nt,Q,$){l.push(nt),l.push(Q),l.push($)}function _t(nt,Q,$){Gt(nt),Gt(Q),Gt($);const tt=s.length/3,gt=M.generateTopUV(n,s,tt-3,tt-2,tt-1);L(gt[0]),L(gt[1]),L(gt[2])}function Nt(nt,Q,$,tt){Gt(nt),Gt(Q),Gt(tt),Gt(Q),Gt($),Gt(tt);const gt=s.length/3,it=M.generateSideWallUV(n,s,gt-6,gt-3,gt-2,gt-1);L(it[0]),L(it[1]),L(it[3]),L(it[1]),L(it[2]),L(it[3])}function Gt(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function L(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return A0(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new kl[s.type]().fromJSON(s)),new Ua(n,t.options)}}const T0={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Mt(r,a),new Mt(o,l),new Mt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],m=t[s*3+2],x=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Mt(a,1-l),new Mt(c,1-f),new Mt(u,1-m),new Mt(x,1-p)]:[new Mt(o,1-l),new Mt(h,1-f),new Mt(d,1-m),new Mt(g,1-p)]}};function A0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Mr extends Mc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Mr(t.radius,t.detail)}}class za extends Pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,d=[],m=[],x=[],g=[];for(let p=0;p<h;p++){const M=p*u-a;for(let y=0;y<c;y++){const _=y*f-r;m.push(_,-M,0),x.push(0,0,1),g.push(y/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const y=M+c*p,_=M+c*(p+1),w=M+1+c*(p+1),E=M+1+c*p;d.push(y,_,E),d.push(_,w,E)}this.setIndex(d),this.setAttribute("position",new ie(m,3)),this.setAttribute("normal",new ie(x,3)),this.setAttribute("uv",new ie(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new za(t.width,t.height,t.widthSegments,t.heightSegments)}}class cr extends Pe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let f=t;const u=(e-t)/s,d=new O,m=new Mt;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){const p=r+g/n*a;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}f+=u}for(let x=0;x<s;x++){const g=x*(n+1);for(let p=0;p<n;p++){const M=p+g,y=M,_=M+n+1,w=M+n+2,E=M+1;o.push(y,_,E),o.push(_,w,E)}}this.setIndex(o),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class wc extends Pe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new O,f=new O,u=new O;for(let d=0;d<=n;d++)for(let m=0;m<=s;m++){const x=m/s*r,g=d/n*Math.PI*2;f.x=(t+e*Math.cos(g))*Math.cos(x),f.y=(t+e*Math.cos(g))*Math.sin(x),f.z=e*Math.sin(g),o.push(f.x,f.y,f.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(m/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=s;m++){const x=(s+1)*d+m-1,g=(s+1)*(d-1)+m-1,p=(s+1)*(d-1)+m,M=(s+1)*d+m;a.push(x,g,M),a.push(g,p,M)}this.setIndex(a),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ma extends Pr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uf,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class C0 extends Pr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$p,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class R0 extends Pr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class If extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Nf extends If{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Io=new ce,Bh=new O,zh=new O;class P0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yc,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Bh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bh),zh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zh),e.updateMatrixWorld(),Io.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Io)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ec extends vf{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class D0 extends P0{constructor(){super(new Ec(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gl extends If{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new D0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class L0 extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Hh=new ce;class I0{constructor(t,e,n=0,s=1/0){this.ray=new mf(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new _c,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Hh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hh),this}intersectObject(t,e=!0,n=[]){return Vl(t,this,n,e),n.sort(Gh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Vl(t[s],this,n,e);return n.sort(Gh),n}}function Gh(i,t){return i.distance-t.distance}function Vl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Vl(r[a],t,e,!0)}}function Vh(i,t,e,n){const s=N0(n);switch(e){case lf:return i*t;case uc:return i*t/s.components*s.byteLength;case fc:return i*t/s.components*s.byteLength;case hf:return i*t*2/s.components*s.byteLength;case dc:return i*t*2/s.components*s.byteLength;case cf:return i*t*3/s.components*s.byteLength;case En:return i*t*4/s.components*s.byteLength;case pc:return i*t*4/s.components*s.byteLength;case _a:case xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ya:case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ul:case dl:return Math.max(i,16)*Math.max(t,8)/4;case hl:case fl:return Math.max(i,8)*Math.max(t,8)/2;case pl:case ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case gl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _l:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case yl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case vl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case bl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case wl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case El:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Al:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Rl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Pl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Dl:case Ll:case Il:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Nl:case Ul:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ol:case Fl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function N0(i){switch(i){case kn:case sf:return{byteLength:1,components:1};case fr:case rf:case Cr:return{byteLength:2,components:1};case cc:case hc:return{byteLength:2,components:4};case Fi:case lc:case On:return{byteLength:4,components:1};case af:case of:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oc);function Uf(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function U0(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){const m=f[u],x=f[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){const x=f[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var O0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,F0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,k0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,B0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,H0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,G0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,V0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,W0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,X0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Y0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,q0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,j0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,K0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ng=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ig=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ag=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,og=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ug=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fg="gl_FragColor = linearToOutputTexel( gl_FragColor );",dg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_g=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Eg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ag=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Cg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Rg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ig=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ng=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ug=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Og=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$g=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,t_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,e_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,s_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,r_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,l_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,u_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,f_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,d_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,g_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,__=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,x_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,y_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,v_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,M_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,b_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,S_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,E_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,R_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,P_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,D_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,L_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,I_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,N_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const U_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,G_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,V_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,W_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,X_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,q_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,K_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ex=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ix=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ax=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ox=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ux=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,px=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:O0,alphahash_pars_fragment:F0,alphamap_fragment:k0,alphamap_pars_fragment:B0,alphatest_fragment:z0,alphatest_pars_fragment:H0,aomap_fragment:G0,aomap_pars_fragment:V0,batching_pars_vertex:W0,batching_vertex:X0,begin_vertex:$0,beginnormal_vertex:Y0,bsdfs:q0,iridescence_fragment:j0,bumpmap_pars_fragment:K0,clipping_planes_fragment:J0,clipping_planes_pars_fragment:Z0,clipping_planes_pars_vertex:Q0,clipping_planes_vertex:tg,color_fragment:eg,color_pars_fragment:ng,color_pars_vertex:ig,color_vertex:sg,common:rg,cube_uv_reflection_fragment:ag,defaultnormal_vertex:og,displacementmap_pars_vertex:lg,displacementmap_vertex:cg,emissivemap_fragment:hg,emissivemap_pars_fragment:ug,colorspace_fragment:fg,colorspace_pars_fragment:dg,envmap_fragment:pg,envmap_common_pars_fragment:mg,envmap_pars_fragment:gg,envmap_pars_vertex:_g,envmap_physical_pars_fragment:Cg,envmap_vertex:xg,fog_vertex:yg,fog_pars_vertex:vg,fog_fragment:Mg,fog_pars_fragment:bg,gradientmap_pars_fragment:Sg,lightmap_pars_fragment:wg,lights_lambert_fragment:Eg,lights_lambert_pars_fragment:Tg,lights_pars_begin:Ag,lights_toon_fragment:Rg,lights_toon_pars_fragment:Pg,lights_phong_fragment:Dg,lights_phong_pars_fragment:Lg,lights_physical_fragment:Ig,lights_physical_pars_fragment:Ng,lights_fragment_begin:Ug,lights_fragment_maps:Og,lights_fragment_end:Fg,logdepthbuf_fragment:kg,logdepthbuf_pars_fragment:Bg,logdepthbuf_pars_vertex:zg,logdepthbuf_vertex:Hg,map_fragment:Gg,map_pars_fragment:Vg,map_particle_fragment:Wg,map_particle_pars_fragment:Xg,metalnessmap_fragment:$g,metalnessmap_pars_fragment:Yg,morphinstance_vertex:qg,morphcolor_vertex:jg,morphnormal_vertex:Kg,morphtarget_pars_vertex:Jg,morphtarget_vertex:Zg,normal_fragment_begin:Qg,normal_fragment_maps:t_,normal_pars_fragment:e_,normal_pars_vertex:n_,normal_vertex:i_,normalmap_pars_fragment:s_,clearcoat_normal_fragment_begin:r_,clearcoat_normal_fragment_maps:a_,clearcoat_pars_fragment:o_,iridescence_pars_fragment:l_,opaque_fragment:c_,packing:h_,premultiplied_alpha_fragment:u_,project_vertex:f_,dithering_fragment:d_,dithering_pars_fragment:p_,roughnessmap_fragment:m_,roughnessmap_pars_fragment:g_,shadowmap_pars_fragment:__,shadowmap_pars_vertex:x_,shadowmap_vertex:y_,shadowmask_pars_fragment:v_,skinbase_vertex:M_,skinning_pars_vertex:b_,skinning_vertex:S_,skinnormal_vertex:w_,specularmap_fragment:E_,specularmap_pars_fragment:T_,tonemapping_fragment:A_,tonemapping_pars_fragment:C_,transmission_fragment:R_,transmission_pars_fragment:P_,uv_pars_fragment:D_,uv_pars_vertex:L_,uv_vertex:I_,worldpos_vertex:N_,background_vert:U_,background_frag:O_,backgroundCube_vert:F_,backgroundCube_frag:k_,cube_vert:B_,cube_frag:z_,depth_vert:H_,depth_frag:G_,distanceRGBA_vert:V_,distanceRGBA_frag:W_,equirect_vert:X_,equirect_frag:$_,linedashed_vert:Y_,linedashed_frag:q_,meshbasic_vert:j_,meshbasic_frag:K_,meshlambert_vert:J_,meshlambert_frag:Z_,meshmatcap_vert:Q_,meshmatcap_frag:tx,meshnormal_vert:ex,meshnormal_frag:nx,meshphong_vert:ix,meshphong_frag:sx,meshphysical_vert:rx,meshphysical_frag:ax,meshtoon_vert:ox,meshtoon_frag:lx,points_vert:cx,points_frag:hx,shadow_vert:ux,shadow_frag:fx,sprite_vert:dx,sprite_frag:px},bt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},In={basic:{uniforms:Xe([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Xe([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Xe([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Xe([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Xe([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Xe([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Xe([bt.points,bt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Xe([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Xe([bt.common,bt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Xe([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Xe([bt.sprite,bt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:Xe([bt.common,bt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:Xe([bt.lights,bt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};In.physical={uniforms:Xe([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const ha={r:0,b:0,g:0},Ei=new Bn,mx=new ce;function gx(i,t,e,n,s,r,a){const o=new jt(0);let l=r===!0?0:1,c,h,f=null,u=0,d=null;function m(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_)),_}function x(y){let _=!1;const w=m(y);w===null?p(o,l):w&&w.isColor&&(p(w,1),_=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,_){const w=m(_);w&&(w.isCubeTexture||w.mapping===Ba)?(h===void 0&&(h=new le(new gi(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:As(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ei.copy(_.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(mx.makeRotationFromEuler(Ei)),h.material.toneMapped=re.getTransfer(w.colorSpace)!==ue,(f!==w||u!==w.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=w,u=w.version,d=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new le(new za(2,2),new _i({name:"BackgroundMaterial",uniforms:As(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=re.getTransfer(w.colorSpace)!==ue,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||u!==w.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=w,u=w.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,_){y.getRGB(ha,yf(i)),n.buffers.color.setClear(ha.r,ha.g,ha.b,_,a)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:x,addToRenderList:g,dispose:M}}function _x(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(b,P,C,I,U){let N=!1;const F=f(I,C,P);r!==F&&(r=F,c(r.object)),N=d(b,I,C,U),N&&m(b,I,C,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,_(b,P,C,I),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function f(b,P,C){const I=C.wireframe===!0;let U=n[b.id];U===void 0&&(U={},n[b.id]=U);let N=U[P.id];N===void 0&&(N={},U[P.id]=N);let F=N[I];return F===void 0&&(F=u(l()),N[I]=F),F}function u(b){const P=[],C=[],I=[];for(let U=0;U<e;U++)P[U]=0,C[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:C,attributeDivisors:I,object:b,attributes:{},index:null}}function d(b,P,C,I){const U=r.attributes,N=P.attributes;let F=0;const X=C.getAttributes();for(const z in X)if(X[z].location>=0){const st=U[z];let et=N[z];if(et===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(et=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(et=b.instanceColor)),st===void 0||st.attribute!==et||et&&st.data!==et.data)return!0;F++}return r.attributesNum!==F||r.index!==I}function m(b,P,C,I){const U={},N=P.attributes;let F=0;const X=C.getAttributes();for(const z in X)if(X[z].location>=0){let st=N[z];st===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(st=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(st=b.instanceColor));const et={};et.attribute=st,st&&st.data&&(et.data=st.data),U[z]=et,F++}r.attributes=U,r.attributesNum=F,r.index=I}function x(){const b=r.newAttributes;for(let P=0,C=b.length;P<C;P++)b[P]=0}function g(b){p(b,0)}function p(b,P){const C=r.newAttributes,I=r.enabledAttributes,U=r.attributeDivisors;C[b]=1,I[b]===0&&(i.enableVertexAttribArray(b),I[b]=1),U[b]!==P&&(i.vertexAttribDivisor(b,P),U[b]=P)}function M(){const b=r.newAttributes,P=r.enabledAttributes;for(let C=0,I=P.length;C<I;C++)P[C]!==b[C]&&(i.disableVertexAttribArray(C),P[C]=0)}function y(b,P,C,I,U,N,F){F===!0?i.vertexAttribIPointer(b,P,C,U,N):i.vertexAttribPointer(b,P,C,I,U,N)}function _(b,P,C,I){x();const U=I.attributes,N=C.getAttributes(),F=P.defaultAttributeValues;for(const X in N){const z=N[X];if(z.location>=0){let V=U[X];if(V===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(V=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(V=b.instanceColor)),V!==void 0){const st=V.normalized,et=V.itemSize,ct=t.get(V);if(ct===void 0)continue;const yt=ct.buffer,Ht=ct.type,Ft=ct.bytesPerElement,K=Ht===i.INT||Ht===i.UNSIGNED_INT||V.gpuType===lc;if(V.isInterleavedBufferAttribute){const J=V.data,mt=J.stride,xt=V.offset;if(J.isInstancedInterleavedBuffer){for(let _t=0;_t<z.locationSize;_t++)p(z.location+_t,J.meshPerAttribute);b.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let _t=0;_t<z.locationSize;_t++)g(z.location+_t);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let _t=0;_t<z.locationSize;_t++)y(z.location+_t,et/z.locationSize,Ht,st,mt*Ft,(xt+et/z.locationSize*_t)*Ft,K)}else{if(V.isInstancedBufferAttribute){for(let J=0;J<z.locationSize;J++)p(z.location+J,V.meshPerAttribute);b.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let J=0;J<z.locationSize;J++)g(z.location+J);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let J=0;J<z.locationSize;J++)y(z.location+J,et/z.locationSize,Ht,st,et*Ft,et/z.locationSize*J*Ft,K)}}else if(F!==void 0){const st=F[X];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(z.location,st);break;case 3:i.vertexAttrib3fv(z.location,st);break;case 4:i.vertexAttrib4fv(z.location,st);break;default:i.vertexAttrib1fv(z.location,st)}}}}M()}function w(){D();for(const b in n){const P=n[b];for(const C in P){const I=P[C];for(const U in I)h(I[U].object),delete I[U];delete P[C]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;const P=n[b.id];for(const C in P){const I=P[C];for(const U in I)h(I[U].object),delete I[U];delete P[C]}delete n[b.id]}function A(b){for(const P in n){const C=n[P];if(C[b.id]===void 0)continue;const I=C[b.id];for(const U in I)h(I[U].object),delete I[U];delete C[b.id]}}function D(){v(),a=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:v,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function xx(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function o(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let d=0;for(let m=0;m<f;m++)d+=h[m];e.update(d,n,1)}function l(c,h,f,u){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)a(c[m],h[m],u[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let m=0;for(let x=0;x<f;x++)m+=h[x]*u[x];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function yx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==En&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const D=A===Cr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==kn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==On&&!D)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:w,maxSamples:E}}function vx(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Ci,o=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const m=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{const M=r?0:n,y=M*4;let _=p.clippingState||null;l.value=_,_=h(m,u,y,d);for(let w=0;w!==y;++w)_[w]=e[w];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,m){const x=f!==null?f.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const p=d+x*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,_=d;y!==x;++y,_+=4)a.copy(f[y]).applyMatrix4(M,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Mx(i){let t=new WeakMap;function e(a,o){return o===al?a.mapping=ws:o===ol&&(a.mapping=Es),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===al||o===ol)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Gm(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const gs=4,Wh=[.125,.215,.35,.446,.526,.582],Di=20,No=new Ec,Xh=new jt;let Uo=null,Oo=0,Fo=0,ko=!1;const Ri=(1+Math.sqrt(5))/2,us=1/Ri,$h=[new O(-Ri,us,0),new O(Ri,us,0),new O(-us,0,Ri),new O(us,0,Ri),new O(0,Ri,-us),new O(0,Ri,us),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],bx=new O;class Yh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=bx}=r;Uo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Uo,Oo,Fo),this._renderer.xr.enabled=ko,t.scissorTest=!1,ua(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ws||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Uo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Cr,format:En,colorSpace:Ts,depthBuffer:!1},s=qh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sx(r)),this._blurMaterial=wx(r,t,e)}return s}_compileMaterial(t){const e=new le(this._lodPlanes[0],t);this._renderer.compile(e,No)}_sceneToCubeUV(t,e,n,s,r){const l=new _n(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Xh),f.toneMapping=pi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));const x=new hi({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),g=new le(new gi,x);let p=!1;const M=t.background;M?M.isColor&&(x.color.copy(M),t.background=null,p=!0):(x.color.copy(Xh),p=!0);for(let y=0;y<6;y++){const _=y%3;_===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):_===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));const w=this._cubeSize;ua(s,_*w,y>2?w:0,w,w),f.setRenderTarget(s),p&&f.render(g,l),f.render(t,l)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=d,f.autoClear=u,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ws||t.mapping===Es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new le(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ua(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,No)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=$h[(s-r-1)%$h.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new le(this._lodPlanes[s],c),u=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Di-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):Di;g>Di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Di}`);const p=[];let M=0;for(let A=0;A<Di;++A){const D=A/x,v=Math.exp(-D*D/2);p.push(v),A===0?M+=v:A<g&&(M+=2*v)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:y}=this;u.dTheta.value=m,u.mipInt.value=y-n;const _=this._sizeLods[s],w=3*_*(s>y-gs?s-y+gs:0),E=4*(this._cubeSize-_);ua(e,w,E,3*_,2*_),l.setRenderTarget(e),l.render(f,No)}}function Sx(i){const t=[],e=[],n=[];let s=i;const r=i-gs+1+Wh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-gs?l=Wh[a-i+gs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,m=6,x=3,g=2,p=1,M=new Float32Array(x*m*d),y=new Float32Array(g*m*d),_=new Float32Array(p*m*d);for(let E=0;E<d;E++){const A=E%3*2/3-1,D=E>2?0:-1,v=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];M.set(v,x*m*E),y.set(u,g*m*E);const b=[E,E,E,E,E,E];_.set(b,p*m*E)}const w=new Pe;w.setAttribute("position",new Tn(M,x)),w.setAttribute("uv",new Tn(y,g)),w.setAttribute("faceIndex",new Tn(_,p)),t.push(w),s>gs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function qh(i,t,e){const n=new ki(i,t,e);return n.texture.mapping=Ba,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ua(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function wx(i,t,e){const n=new Float32Array(Di),s=new O(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function jh(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Kh(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Tc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ex(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===al||l===ol,h=l===ws||l===Es;if(c||h){let f=t.get(o);const u=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new Yh(i)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Yh(i)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Tx(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&_r("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ax(i,t,e,n){const s={},r=new WeakMap;function a(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete s[u.id];const d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const d in u)t.update(u[d],i.ARRAY_BUFFER)}function c(f){const u=[],d=f.index,m=f.attributes.position;let x=0;if(d!==null){const M=d.array;x=d.version;for(let y=0,_=M.length;y<_;y+=3){const w=M[y+0],E=M[y+1],A=M[y+2];u.push(w,E,E,A,A,w)}}else if(m!==void 0){const M=m.array;x=m.version;for(let y=0,_=M.length/3-1;y<_;y+=3){const w=y+0,E=y+1,A=y+2;u.push(w,E,E,A,A,w)}}else return;const g=new(df(u)?xf:_f)(u,1);g.version=x;const p=r.get(f);p&&t.remove(p),r.set(f,g)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Cx(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),e.update(d,n,1)}function c(u,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,u*a,m),e.update(d,n,m))}function h(u,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,n,1)}function f(u,d,m,x){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)c(u[p]/a,d[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,u,0,x,0,m);let p=0;for(let M=0;M<m;M++)p+=d[M]*x[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Rx(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Px(i,t,e){const n=new WeakMap,s=new xe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let v=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",v)};u!==void 0&&u.texture.dispose();const d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let y=0;d===!0&&(y=1),m===!0&&(y=2),x===!0&&(y=3);let _=o.attributes.position.count*y,w=1;_>t.maxTextureSize&&(w=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const E=new Float32Array(_*w*4*f),A=new pf(E,_,w,f);A.type=On,A.needsUpdate=!0;const D=y*4;for(let b=0;b<f;b++){const P=g[b],C=p[b],I=M[b],U=_*w*4*b;for(let N=0;N<P.count;N++){const F=N*D;d===!0&&(s.fromBufferAttribute(P,N),E[U+F+0]=s.x,E[U+F+1]=s.y,E[U+F+2]=s.z,E[U+F+3]=0),m===!0&&(s.fromBufferAttribute(C,N),E[U+F+4]=s.x,E[U+F+5]=s.y,E[U+F+6]=s.z,E[U+F+7]=0),x===!0&&(s.fromBufferAttribute(I,N),E[U+F+8]=s.x,E[U+F+9]=s.y,E[U+F+10]=s.z,E[U+F+11]=I.itemSize===4?s.w:1)}}u={count:f,texture:A,size:new Mt(_,w)},n.set(o,u),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];const m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Dx(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Of=new Ye,Jh=new Sf(1,1),Ff=new pf,kf=new Em,Bf=new Mf,Zh=[],Qh=[],tu=new Float32Array(16),eu=new Float32Array(9),nu=new Float32Array(4);function Us(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Zh[s];if(r===void 0&&(r=new Float32Array(s),Zh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ha(i,t){let e=Qh[t];e===void 0&&(e=new Int32Array(t),Qh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Lx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ix(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function Nx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function Ux(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function Ox(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ie(e,n))return;nu.set(n),i.uniformMatrix2fv(this.addr,!1,nu),Ne(e,n)}}function Fx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ie(e,n))return;eu.set(n),i.uniformMatrix3fv(this.addr,!1,eu),Ne(e,n)}}function kx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ie(e,n))return;tu.set(n),i.uniformMatrix4fv(this.addr,!1,tu),Ne(e,n)}}function Bx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function zx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function Hx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function Gx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function Vx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Wx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function Xx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function $x(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function Yx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Jh.compareFunction=ff,r=Jh):r=Of,e.setTexture2D(t||r,s)}function qx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||kf,s)}function jx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Bf,s)}function Kx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ff,s)}function Jx(i){switch(i){case 5126:return Lx;case 35664:return Ix;case 35665:return Nx;case 35666:return Ux;case 35674:return Ox;case 35675:return Fx;case 35676:return kx;case 5124:case 35670:return Bx;case 35667:case 35671:return zx;case 35668:case 35672:return Hx;case 35669:case 35673:return Gx;case 5125:return Vx;case 36294:return Wx;case 36295:return Xx;case 36296:return $x;case 35678:case 36198:case 36298:case 36306:case 35682:return Yx;case 35679:case 36299:case 36307:return qx;case 35680:case 36300:case 36308:case 36293:return jx;case 36289:case 36303:case 36311:case 36292:return Kx}}function Zx(i,t){i.uniform1fv(this.addr,t)}function Qx(i,t){const e=Us(t,this.size,2);i.uniform2fv(this.addr,e)}function ty(i,t){const e=Us(t,this.size,3);i.uniform3fv(this.addr,e)}function ey(i,t){const e=Us(t,this.size,4);i.uniform4fv(this.addr,e)}function ny(i,t){const e=Us(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function iy(i,t){const e=Us(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function sy(i,t){const e=Us(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ry(i,t){i.uniform1iv(this.addr,t)}function ay(i,t){i.uniform2iv(this.addr,t)}function oy(i,t){i.uniform3iv(this.addr,t)}function ly(i,t){i.uniform4iv(this.addr,t)}function cy(i,t){i.uniform1uiv(this.addr,t)}function hy(i,t){i.uniform2uiv(this.addr,t)}function uy(i,t){i.uniform3uiv(this.addr,t)}function fy(i,t){i.uniform4uiv(this.addr,t)}function dy(i,t,e){const n=this.cache,s=t.length,r=Ha(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Of,r[a])}function py(i,t,e){const n=this.cache,s=t.length,r=Ha(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||kf,r[a])}function my(i,t,e){const n=this.cache,s=t.length,r=Ha(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Bf,r[a])}function gy(i,t,e){const n=this.cache,s=t.length,r=Ha(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ff,r[a])}function _y(i){switch(i){case 5126:return Zx;case 35664:return Qx;case 35665:return ty;case 35666:return ey;case 35674:return ny;case 35675:return iy;case 35676:return sy;case 5124:case 35670:return ry;case 35667:case 35671:return ay;case 35668:case 35672:return oy;case 35669:case 35673:return ly;case 5125:return cy;case 36294:return hy;case 36295:return uy;case 36296:return fy;case 35678:case 36198:case 36298:case 36306:case 35682:return dy;case 35679:case 36299:case 36307:return py;case 35680:case 36300:case 36308:case 36293:return my;case 36289:case 36303:case 36311:case 36292:return gy}}class xy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Jx(e.type)}}class yy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_y(e.type)}}class vy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Bo=/(\w+)(\])?(\[|\.)?/g;function iu(i,t){i.seq.push(t),i.map[t.id]=t}function My(i,t,e){const n=i.name,s=n.length;for(Bo.lastIndex=0;;){const r=Bo.exec(n),a=Bo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){iu(e,c===void 0?new xy(o,i,t):new yy(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new vy(o),iu(e,f)),e=f}}}class ba{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);My(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function su(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const by=37297;let Sy=0;function wy(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const ru=new qt;function Ey(i){re._getMatrix(ru,re.workingColorSpace,i);const t=`mat3( ${ru.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case Da:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function au(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+wy(i.getShaderSource(t),o)}else return r}function Ty(i,t){const e=Ey(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ay(i,t){let e;switch(t){case Bp:e="Linear";break;case zp:e="Reinhard";break;case Hp:e="Cineon";break;case ef:e="ACESFilmic";break;case Vp:e="AgX";break;case Wp:e="Neutral";break;case Gp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fa=new O;function Cy(){re.getLuminanceCoefficients(fa);const i=fa.x.toFixed(4),t=fa.y.toFixed(4),e=fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ry(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function Py(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Dy(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Zs(i){return i!==""}function ou(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ly=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wl(i){return i.replace(Ly,Ny)}const Iy=new Map;function Ny(i,t){let e=Kt[t];if(e===void 0){const n=Iy.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Wl(e)}const Uy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cu(i){return i.replace(Uy,Oy)}function Oy(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Fy(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Qu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jn&&(t="SHADOWMAP_TYPE_VSM"),t}function ky(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ws:case Es:t="ENVMAP_TYPE_CUBE";break;case Ba:t="ENVMAP_TYPE_CUBE_UV";break}return t}function By(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Es&&(t="ENVMAP_MODE_REFRACTION"),t}function zy(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tf:t="ENVMAP_BLENDING_MULTIPLY";break;case Fp:t="ENVMAP_BLENDING_MIX";break;case kp:t="ENVMAP_BLENDING_ADD";break}return t}function Hy(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Gy(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Fy(e),c=ky(e),h=By(e),f=zy(e),u=Hy(e),d=Ry(e),m=Py(r),x=s.createProgram();let g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Zs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Zs).join(`
`),p.length>0&&(p+=`
`)):(g=[hu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),p=[hu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pi?"#define TONE_MAPPING":"",e.toneMapping!==pi?Kt.tonemapping_pars_fragment:"",e.toneMapping!==pi?Ay("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,Ty("linearToOutputTexel",e.outputColorSpace),Cy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zs).join(`
`)),a=Wl(a),a=ou(a,e),a=lu(a,e),o=Wl(o),o=ou(o,e),o=lu(o,e),a=cu(a),o=cu(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+g+a,_=M+p+o,w=su(s,s.VERTEX_SHADER,y),E=su(s,s.FRAGMENT_SHADER,_);s.attachShader(x,w),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(P){if(i.debug.checkShaderErrors){const C=s.getProgramInfoLog(x)||"",I=s.getShaderInfoLog(w)||"",U=s.getShaderInfoLog(E)||"",N=C.trim(),F=I.trim(),X=U.trim();let z=!0,V=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,E);else{const st=au(s,w,"vertex"),et=au(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+st+`
`+et)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||X==="")&&(V=!1);V&&(P.diagnostics={runnable:z,programLog:N,vertexShader:{log:F,prefix:g},fragmentShader:{log:X,prefix:p}})}s.deleteShader(w),s.deleteShader(E),D=new ba(s,x),v=Dy(s,x)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let v;this.getAttributes=function(){return v===void 0&&A(this),v};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,by)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sy++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=E,this}let Vy=0;class Wy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Xy(t),e.set(t,n)),n}}class Xy{constructor(t){this.id=Vy++,this.code=t,this.usedTimes=0}}function $y(i,t,e,n,s,r,a){const o=new _c,l=new Wy,c=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures;let d=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return c.add(v),v===0?"uv":`uv${v}`}function g(v,b,P,C,I){const U=C.fog,N=I.geometry,F=v.isMeshStandardMaterial?C.environment:null,X=(v.isMeshStandardMaterial?e:t).get(v.envMap||F),z=X&&X.mapping===Ba?X.image.height:null,V=m[v.type];v.precision!==null&&(d=s.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const st=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,et=st!==void 0?st.length:0;let ct=0;N.morphAttributes.position!==void 0&&(ct=1),N.morphAttributes.normal!==void 0&&(ct=2),N.morphAttributes.color!==void 0&&(ct=3);let yt,Ht,Ft,K;if(V){const ae=In[V];yt=ae.vertexShader,Ht=ae.fragmentShader}else yt=v.vertexShader,Ht=v.fragmentShader,l.update(v),Ft=l.getVertexShaderID(v),K=l.getFragmentShaderID(v);const J=i.getRenderTarget(),mt=i.state.buffers.depth.getReversed(),xt=I.isInstancedMesh===!0,_t=I.isBatchedMesh===!0,Nt=!!v.map,Gt=!!v.matcap,L=!!X,nt=!!v.aoMap,Q=!!v.lightMap,$=!!v.bumpMap,tt=!!v.normalMap,gt=!!v.displacementMap,it=!!v.emissiveMap,ot=!!v.metalnessMap,Ut=!!v.roughnessMap,kt=v.anisotropy>0,R=v.clearcoat>0,S=v.dispersion>0,B=v.iridescence>0,Y=v.sheen>0,rt=v.transmission>0,Z=kt&&!!v.anisotropyMap,At=R&&!!v.clearcoatMap,pt=R&&!!v.clearcoatNormalMap,Tt=R&&!!v.clearcoatRoughnessMap,Lt=B&&!!v.iridescenceMap,ht=B&&!!v.iridescenceThicknessMap,Et=Y&&!!v.sheenColorMap,Wt=Y&&!!v.sheenRoughnessMap,Ot=!!v.specularMap,St=!!v.specularColorMap,Yt=!!v.specularIntensityMap,k=rt&&!!v.transmissionMap,dt=rt&&!!v.thicknessMap,vt=!!v.gradientMap,Rt=!!v.alphaMap,ut=v.alphaTest>0,at=!!v.alphaHash,It=!!v.extensions;let $t=pi;v.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&($t=i.toneMapping);const de={shaderID:V,shaderType:v.type,shaderName:v.name,vertexShader:yt,fragmentShader:Ht,defines:v.defines,customVertexShaderID:Ft,customFragmentShaderID:K,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:_t,batchingColor:_t&&I._colorsTexture!==null,instancing:xt,instancingColor:xt&&I.instanceColor!==null,instancingMorph:xt&&I.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ts,alphaToCoverage:!!v.alphaToCoverage,map:Nt,matcap:Gt,envMap:L,envMapMode:L&&X.mapping,envMapCubeUVHeight:z,aoMap:nt,lightMap:Q,bumpMap:$,normalMap:tt,displacementMap:u&&gt,emissiveMap:it,normalMapObjectSpace:tt&&v.normalMapType===qp,normalMapTangentSpace:tt&&v.normalMapType===uf,metalnessMap:ot,roughnessMap:Ut,anisotropy:kt,anisotropyMap:Z,clearcoat:R,clearcoatMap:At,clearcoatNormalMap:pt,clearcoatRoughnessMap:Tt,dispersion:S,iridescence:B,iridescenceMap:Lt,iridescenceThicknessMap:ht,sheen:Y,sheenColorMap:Et,sheenRoughnessMap:Wt,specularMap:Ot,specularColorMap:St,specularIntensityMap:Yt,transmission:rt,transmissionMap:k,thicknessMap:dt,gradientMap:vt,opaque:v.transparent===!1&&v.blending===ys&&v.alphaToCoverage===!1,alphaMap:Rt,alphaTest:ut,alphaHash:at,combine:v.combine,mapUv:Nt&&x(v.map.channel),aoMapUv:nt&&x(v.aoMap.channel),lightMapUv:Q&&x(v.lightMap.channel),bumpMapUv:$&&x(v.bumpMap.channel),normalMapUv:tt&&x(v.normalMap.channel),displacementMapUv:gt&&x(v.displacementMap.channel),emissiveMapUv:it&&x(v.emissiveMap.channel),metalnessMapUv:ot&&x(v.metalnessMap.channel),roughnessMapUv:Ut&&x(v.roughnessMap.channel),anisotropyMapUv:Z&&x(v.anisotropyMap.channel),clearcoatMapUv:At&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:pt&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&x(v.sheenRoughnessMap.channel),specularMapUv:Ot&&x(v.specularMap.channel),specularColorMapUv:St&&x(v.specularColorMap.channel),specularIntensityMapUv:Yt&&x(v.specularIntensityMap.channel),transmissionMapUv:k&&x(v.transmissionMap.channel),thicknessMapUv:dt&&x(v.thicknessMap.channel),alphaMapUv:Rt&&x(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(tt||kt),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(Nt||Rt),fog:!!U,useFog:v.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:mt,skinning:I.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:ct,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:$t,decodeVideoTexture:Nt&&v.map.isVideoTexture===!0&&re.getTransfer(v.map.colorSpace)===ue,decodeVideoTextureEmissive:it&&v.emissiveMap.isVideoTexture===!0&&re.getTransfer(v.emissiveMap.colorSpace)===ue,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Sn,flipSided:v.side===Qe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:It&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&v.extensions.multiDraw===!0||_t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return de.vertexUv1s=c.has(1),de.vertexUv2s=c.has(2),de.vertexUv3s=c.has(3),c.clear(),de}function p(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)b.push(P),b.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(M(b,v),y(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function M(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function y(v,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),v.push(o.mask)}function _(v){const b=m[v.type];let P;if(b){const C=In[b];P=km.clone(C.uniforms)}else P=v.uniforms;return P}function w(v,b){let P;for(let C=0,I=h.length;C<I;C++){const U=h[C];if(U.cacheKey===b){P=U,++P.usedTimes;break}}return P===void 0&&(P=new Gy(i,b,v,r),h.push(P)),P}function E(v){if(--v.usedTimes===0){const b=h.indexOf(v);h[b]=h[h.length-1],h.pop(),v.destroy()}}function A(v){l.remove(v)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:w,releaseProgram:E,releaseShaderCache:A,programs:h,dispose:D}}function Yy(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function qy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function uu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function fu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,u,d,m,x,g){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:m,renderOrder:f.renderOrder,z:x,group:g},i[t]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=m,p.renderOrder=f.renderOrder,p.z=x,p.group=g),t++,p}function o(f,u,d,m,x,g){const p=a(f,u,d,m,x,g);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(f,u,d,m,x,g){const p=a(f,u,d,m,x,g);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(f,u){e.length>1&&e.sort(f||qy),n.length>1&&n.sort(u||uu),s.length>1&&s.sort(u||uu)}function h(){for(let f=t,u=i.length;f<u;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function jy(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new fu,i.set(n,[a])):s>=r.length?(a=new fu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ky(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new jt};break;case"SpotLight":e={position:new O,direction:new O,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function Jy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Zy=0;function Qy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function tv(i){const t=new Ky,e=Jy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const s=new O,r=new ce,a=new ce;function o(c){let h=0,f=0,u=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,M=0,y=0,_=0,w=0,E=0,A=0;c.sort(Qy);for(let v=0,b=c.length;v<b;v++){const P=c[v],C=P.color,I=P.intensity,U=P.distance,N=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=C.r*I,f+=C.g*I,u+=C.b*I;else if(P.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(P.sh.coefficients[F],I);A++}else if(P.isDirectionalLight){const F=t.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const X=P.shadow,z=e.get(P);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,n.directionalShadow[d]=z,n.directionalShadowMap[d]=N,n.directionalShadowMatrix[d]=P.shadow.matrix,M++}n.directional[d]=F,d++}else if(P.isSpotLight){const F=t.get(P);F.position.setFromMatrixPosition(P.matrixWorld),F.color.copy(C).multiplyScalar(I),F.distance=U,F.coneCos=Math.cos(P.angle),F.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),F.decay=P.decay,n.spot[x]=F;const X=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,X.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[x]=X.matrix,P.castShadow){const z=e.get(P);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=N,_++}x++}else if(P.isRectAreaLight){const F=t.get(P);F.color.copy(C).multiplyScalar(I),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=F,g++}else if(P.isPointLight){const F=t.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),F.distance=P.distance,F.decay=P.decay,P.castShadow){const X=P.shadow,z=e.get(P);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,z.shadowCameraNear=X.camera.near,z.shadowCameraFar=X.camera.far,n.pointShadow[m]=z,n.pointShadowMap[m]=N,n.pointShadowMatrix[m]=P.shadow.matrix,y++}n.point[m]=F,m++}else if(P.isHemisphereLight){const F=t.get(P);F.skyColor.copy(P.color).multiplyScalar(I),F.groundColor.copy(P.groundColor).multiplyScalar(I),n.hemi[p]=F,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const D=n.hash;(D.directionalLength!==d||D.pointLength!==m||D.spotLength!==x||D.rectAreaLength!==g||D.hemiLength!==p||D.numDirectionalShadows!==M||D.numPointShadows!==y||D.numSpotShadows!==_||D.numSpotMaps!==w||D.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+w-E,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,D.directionalLength=d,D.pointLength=m,D.spotLength=x,D.rectAreaLength=g,D.hemiLength=p,D.numDirectionalShadows=M,D.numPointShadows=y,D.numSpotShadows=_,D.numSpotMaps=w,D.numLightProbes=A,n.version=Zy++)}function l(c,h){let f=0,u=0,d=0,m=0,x=0;const g=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const y=c[p];if(y.isDirectionalLight){const _=n.directional[f];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(y.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),d++}else if(y.isRectAreaLight){const _=n.rectArea[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const _=n.point[u];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:n}}function du(i){const t=new tv(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function ev(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new du(i),t.set(s,[o])):r>=a.length?(o=new du(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const nv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sv(i,t,e){let n=new yc;const s=new Mt,r=new Mt,a=new xe,o=new C0({depthPacking:Yp}),l=new R0,c={},h=e.maxTextureSize,f={[Jn]:Qe,[Qe]:Jn,[Sn]:Sn},u=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:nv,fragmentShader:iv}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const m=new Pe;m.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new le(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zu;let p=this.type;this.render=function(E,A,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const v=i.getRenderTarget(),b=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),C=i.state;C.setBlending(di),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const I=p!==jn&&this.type===jn,U=p===jn&&this.type!==jn;for(let N=0,F=E.length;N<F;N++){const X=E[N],z=X.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const V=z.getFrameExtents();if(s.multiply(V),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,z.mapSize.y=r.y)),z.map===null||I===!0||U===!0){const et=this.type!==jn?{minFilter:hn,magFilter:hn}:{};z.map!==null&&z.map.dispose(),z.map=new ki(s.x,s.y,et),z.map.texture.name=X.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const st=z.getViewportCount();for(let et=0;et<st;et++){const ct=z.getViewport(et);a.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),C.viewport(a),z.updateMatrices(X,et),n=z.getFrustum(),_(A,D,z.camera,X,this.type)}z.isPointLightShadow!==!0&&this.type===jn&&M(z,D),z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(v,b,P)};function M(E,A){const D=t.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ki(s.x,s.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,D,u,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,D,d,x,null)}function y(E,A,D,v){let b=null;const P=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)b=P;else if(b=D.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const C=b.uuid,I=A.uuid;let U=c[C];U===void 0&&(U={},c[C]=U);let N=U[I];N===void 0&&(N=b.clone(),U[I]=N,A.addEventListener("dispose",w)),b=N}if(b.visible=A.visible,b.wireframe=A.wireframe,v===jn?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:f[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const C=i.properties.get(b);C.light=D}return b}function _(E,A,D,v,b){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===jn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);const I=t.update(E),U=E.material;if(Array.isArray(U)){const N=I.groups;for(let F=0,X=N.length;F<X;F++){const z=N[F],V=U[z.materialIndex];if(V&&V.visible){const st=y(E,V,v,b);E.onBeforeShadow(i,E,A,D,I,st,z),i.renderBufferDirect(D,null,I,st,E,z),E.onAfterShadow(i,E,A,D,I,st,z)}}}else if(U.visible){const N=y(E,U,v,b);E.onBeforeShadow(i,E,A,D,I,N,null),i.renderBufferDirect(D,null,I,N,E,null),E.onAfterShadow(i,E,A,D,I,N,null)}}const C=E.children;for(let I=0,U=C.length;I<U;I++)_(C[I],A,D,v,b)}function w(E){E.target.removeEventListener("dispose",w);for(const D in c){const v=c[D],b=E.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}const rv={[tl]:el,[nl]:Pa,[il]:rl,[Ss]:sl,[el]:tl,[Pa]:nl,[rl]:il,[sl]:Ss};function av(i,t){function e(){let k=!1;const dt=new xe;let vt=null;const Rt=new xe(0,0,0,0);return{setMask:function(ut){vt!==ut&&!k&&(i.colorMask(ut,ut,ut,ut),vt=ut)},setLocked:function(ut){k=ut},setClear:function(ut,at,It,$t,de){de===!0&&(ut*=$t,at*=$t,It*=$t),dt.set(ut,at,It,$t),Rt.equals(dt)===!1&&(i.clearColor(ut,at,It,$t),Rt.copy(dt))},reset:function(){k=!1,vt=null,Rt.set(-1,0,0,0)}}}function n(){let k=!1,dt=!1,vt=null,Rt=null,ut=null;return{setReversed:function(at){if(dt!==at){const It=t.get("EXT_clip_control");at?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),dt=at;const $t=ut;ut=null,this.setClear($t)}},getReversed:function(){return dt},setTest:function(at){at?J(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(at){vt!==at&&!k&&(i.depthMask(at),vt=at)},setFunc:function(at){if(dt&&(at=rv[at]),Rt!==at){switch(at){case tl:i.depthFunc(i.NEVER);break;case el:i.depthFunc(i.ALWAYS);break;case nl:i.depthFunc(i.LESS);break;case Ss:i.depthFunc(i.LEQUAL);break;case il:i.depthFunc(i.EQUAL);break;case sl:i.depthFunc(i.GEQUAL);break;case Pa:i.depthFunc(i.GREATER);break;case rl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Rt=at}},setLocked:function(at){k=at},setClear:function(at){ut!==at&&(dt&&(at=1-at),i.clearDepth(at),ut=at)},reset:function(){k=!1,vt=null,Rt=null,ut=null,dt=!1}}}function s(){let k=!1,dt=null,vt=null,Rt=null,ut=null,at=null,It=null,$t=null,de=null;return{setTest:function(ae){k||(ae?J(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(ae){dt!==ae&&!k&&(i.stencilMask(ae),dt=ae)},setFunc:function(ae,Gn,Pn){(vt!==ae||Rt!==Gn||ut!==Pn)&&(i.stencilFunc(ae,Gn,Pn),vt=ae,Rt=Gn,ut=Pn)},setOp:function(ae,Gn,Pn){(at!==ae||It!==Gn||$t!==Pn)&&(i.stencilOp(ae,Gn,Pn),at=ae,It=Gn,$t=Pn)},setLocked:function(ae){k=ae},setClear:function(ae){de!==ae&&(i.clearStencil(ae),de=ae)},reset:function(){k=!1,dt=null,vt=null,Rt=null,ut=null,at=null,It=null,$t=null,de=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},f={},u=new WeakMap,d=[],m=null,x=!1,g=null,p=null,M=null,y=null,_=null,w=null,E=null,A=new jt(0,0,0),D=0,v=!1,b=null,P=null,C=null,I=null,U=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,X=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(z)[1]),F=X>=1):z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),F=X>=2);let V=null,st={};const et=i.getParameter(i.SCISSOR_BOX),ct=i.getParameter(i.VIEWPORT),yt=new xe().fromArray(et),Ht=new xe().fromArray(ct);function Ft(k,dt,vt,Rt){const ut=new Uint8Array(4),at=i.createTexture();i.bindTexture(k,at),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<vt;It++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,Rt,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(dt+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return at}const K={};K[i.TEXTURE_2D]=Ft(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=Ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=Ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=Ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(Ss),$(!1),tt(rh),J(i.CULL_FACE),nt(di);function J(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function mt(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function xt(k,dt){return f[k]!==dt?(i.bindFramebuffer(k,dt),f[k]=dt,k===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=dt),k===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function _t(k,dt){let vt=d,Rt=!1;if(k){vt=u.get(dt),vt===void 0&&(vt=[],u.set(dt,vt));const ut=k.textures;if(vt.length!==ut.length||vt[0]!==i.COLOR_ATTACHMENT0){for(let at=0,It=ut.length;at<It;at++)vt[at]=i.COLOR_ATTACHMENT0+at;vt.length=ut.length,Rt=!0}}else vt[0]!==i.BACK&&(vt[0]=i.BACK,Rt=!0);Rt&&i.drawBuffers(vt)}function Nt(k){return m!==k?(i.useProgram(k),m=k,!0):!1}const Gt={[Pi]:i.FUNC_ADD,[vp]:i.FUNC_SUBTRACT,[Mp]:i.FUNC_REVERSE_SUBTRACT};Gt[bp]=i.MIN,Gt[Sp]=i.MAX;const L={[wp]:i.ZERO,[Ep]:i.ONE,[Tp]:i.SRC_COLOR,[Zo]:i.SRC_ALPHA,[Lp]:i.SRC_ALPHA_SATURATE,[Pp]:i.DST_COLOR,[Cp]:i.DST_ALPHA,[Ap]:i.ONE_MINUS_SRC_COLOR,[Qo]:i.ONE_MINUS_SRC_ALPHA,[Dp]:i.ONE_MINUS_DST_COLOR,[Rp]:i.ONE_MINUS_DST_ALPHA,[Ip]:i.CONSTANT_COLOR,[Np]:i.ONE_MINUS_CONSTANT_COLOR,[Up]:i.CONSTANT_ALPHA,[Op]:i.ONE_MINUS_CONSTANT_ALPHA};function nt(k,dt,vt,Rt,ut,at,It,$t,de,ae){if(k===di){x===!0&&(mt(i.BLEND),x=!1);return}if(x===!1&&(J(i.BLEND),x=!0),k!==yp){if(k!==g||ae!==v){if((p!==Pi||_!==Pi)&&(i.blendEquation(i.FUNC_ADD),p=Pi,_=Pi),ae)switch(k){case ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ah:i.blendFunc(i.ONE,i.ONE);break;case oh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ah:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case oh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}M=null,y=null,w=null,E=null,A.set(0,0,0),D=0,g=k,v=ae}return}ut=ut||dt,at=at||vt,It=It||Rt,(dt!==p||ut!==_)&&(i.blendEquationSeparate(Gt[dt],Gt[ut]),p=dt,_=ut),(vt!==M||Rt!==y||at!==w||It!==E)&&(i.blendFuncSeparate(L[vt],L[Rt],L[at],L[It]),M=vt,y=Rt,w=at,E=It),($t.equals(A)===!1||de!==D)&&(i.blendColor($t.r,$t.g,$t.b,de),A.copy($t),D=de),g=k,v=!1}function Q(k,dt){k.side===Sn?mt(i.CULL_FACE):J(i.CULL_FACE);let vt=k.side===Qe;dt&&(vt=!vt),$(vt),k.blending===ys&&k.transparent===!1?nt(di):nt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);const Rt=k.stencilWrite;o.setTest(Rt),Rt&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),it(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function $(k){b!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),b=k)}function tt(k){k!==_p?(J(i.CULL_FACE),k!==P&&(k===rh?i.cullFace(i.BACK):k===xp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),P=k}function gt(k){k!==C&&(F&&i.lineWidth(k),C=k)}function it(k,dt,vt){k?(J(i.POLYGON_OFFSET_FILL),(I!==dt||U!==vt)&&(i.polygonOffset(dt,vt),I=dt,U=vt)):mt(i.POLYGON_OFFSET_FILL)}function ot(k){k?J(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function Ut(k){k===void 0&&(k=i.TEXTURE0+N-1),V!==k&&(i.activeTexture(k),V=k)}function kt(k,dt,vt){vt===void 0&&(V===null?vt=i.TEXTURE0+N-1:vt=V);let Rt=st[vt];Rt===void 0&&(Rt={type:void 0,texture:void 0},st[vt]=Rt),(Rt.type!==k||Rt.texture!==dt)&&(V!==vt&&(i.activeTexture(vt),V=vt),i.bindTexture(k,dt||K[k]),Rt.type=k,Rt.texture=dt)}function R(){const k=st[V];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Y(){try{i.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function rt(){try{i.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(){try{i.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pt(){try{i.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(){try{i.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Lt(){try{i.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ht(){try{i.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Et(k){yt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),yt.copy(k))}function Wt(k){Ht.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Ht.copy(k))}function Ot(k,dt){let vt=c.get(dt);vt===void 0&&(vt=new WeakMap,c.set(dt,vt));let Rt=vt.get(k);Rt===void 0&&(Rt=i.getUniformBlockIndex(dt,k.name),vt.set(k,Rt))}function St(k,dt){const Rt=c.get(dt).get(k);l.get(dt)!==Rt&&(i.uniformBlockBinding(dt,Rt,k.__bindingPointIndex),l.set(dt,Rt))}function Yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},V=null,st={},f={},u=new WeakMap,d=[],m=null,x=!1,g=null,p=null,M=null,y=null,_=null,w=null,E=null,A=new jt(0,0,0),D=0,v=!1,b=null,P=null,C=null,I=null,U=null,yt.set(0,0,i.canvas.width,i.canvas.height),Ht.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:mt,bindFramebuffer:xt,drawBuffers:_t,useProgram:Nt,setBlending:nt,setMaterial:Q,setFlipSided:$,setCullFace:tt,setLineWidth:gt,setPolygonOffset:it,setScissorTest:ot,activeTexture:Ut,bindTexture:kt,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:B,texImage2D:Lt,texImage3D:ht,updateUBOMapping:Ot,uniformBlockBinding:St,texStorage2D:pt,texStorage3D:Tt,texSubImage2D:Y,texSubImage3D:rt,compressedTexSubImage2D:Z,compressedTexSubImage3D:At,scissor:Et,viewport:Wt,reset:Yt}}function ov(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,S){return d?new OffscreenCanvas(R,S):Ia("canvas")}function x(R,S,B){let Y=1;const rt=kt(R);if((rt.width>B||rt.height>B)&&(Y=B/Math.max(rt.width,rt.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(Y*rt.width),At=Math.floor(Y*rt.height);f===void 0&&(f=m(Z,At));const pt=S?m(Z,At):f;return pt.width=Z,pt.height=At,pt.getContext("2d").drawImage(R,0,0,Z,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+Z+"x"+At+")."),pt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,S,B,Y,rt=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=S;if(S===i.RED&&(B===i.FLOAT&&(Z=i.R32F),B===i.HALF_FLOAT&&(Z=i.R16F),B===i.UNSIGNED_BYTE&&(Z=i.R8)),S===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.R8UI),B===i.UNSIGNED_SHORT&&(Z=i.R16UI),B===i.UNSIGNED_INT&&(Z=i.R32UI),B===i.BYTE&&(Z=i.R8I),B===i.SHORT&&(Z=i.R16I),B===i.INT&&(Z=i.R32I)),S===i.RG&&(B===i.FLOAT&&(Z=i.RG32F),B===i.HALF_FLOAT&&(Z=i.RG16F),B===i.UNSIGNED_BYTE&&(Z=i.RG8)),S===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RG8UI),B===i.UNSIGNED_SHORT&&(Z=i.RG16UI),B===i.UNSIGNED_INT&&(Z=i.RG32UI),B===i.BYTE&&(Z=i.RG8I),B===i.SHORT&&(Z=i.RG16I),B===i.INT&&(Z=i.RG32I)),S===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),B===i.UNSIGNED_INT&&(Z=i.RGB32UI),B===i.BYTE&&(Z=i.RGB8I),B===i.SHORT&&(Z=i.RGB16I),B===i.INT&&(Z=i.RGB32I)),S===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),B===i.UNSIGNED_INT&&(Z=i.RGBA32UI),B===i.BYTE&&(Z=i.RGBA8I),B===i.SHORT&&(Z=i.RGBA16I),B===i.INT&&(Z=i.RGBA32I)),S===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),S===i.RGBA){const At=rt?Da:re.getTransfer(Y);B===i.FLOAT&&(Z=i.RGBA32F),B===i.HALF_FLOAT&&(Z=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Z=At===ue?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(R,S){let B;return R?S===null||S===Fi||S===dr?B=i.DEPTH24_STENCIL8:S===On?B=i.DEPTH32F_STENCIL8:S===fr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Fi||S===dr?B=i.DEPTH_COMPONENT24:S===On?B=i.DEPTH_COMPONENT32F:S===fr&&(B=i.DEPTH_COMPONENT16),B}function w(R,S){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==hn&&R.minFilter!==Un?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function E(R){const S=R.target;S.removeEventListener("dispose",E),D(S),S.isVideoTexture&&h.delete(S)}function A(R){const S=R.target;S.removeEventListener("dispose",A),b(S)}function D(R){const S=n.get(R);if(S.__webglInit===void 0)return;const B=R.source,Y=u.get(B);if(Y){const rt=Y[S.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&v(R),Object.keys(Y).length===0&&u.delete(B)}n.remove(R)}function v(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const B=R.source,Y=u.get(B);delete Y[S.__cacheKey],a.memory.textures--}function b(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let rt=0;rt<S.__webglFramebuffer[Y].length;rt++)i.deleteFramebuffer(S.__webglFramebuffer[Y][rt]);else i.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)i.deleteFramebuffer(S.__webglFramebuffer[Y]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=R.textures;for(let Y=0,rt=B.length;Y<rt;Y++){const Z=n.get(B[Y]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(B[Y])}n.remove(R)}let P=0;function C(){P=0}function I(){const R=P;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),P+=1,R}function U(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function N(R,S){const B=n.get(R);if(R.isVideoTexture&&ot(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(B,R,S);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+S)}function F(R,S){const B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){K(B,R,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+S)}function X(R,S){const B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){K(B,R,S);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+S)}function z(R,S){const B=n.get(R);if(R.version>0&&B.__version!==R.version){J(B,R,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+S)}const V={[ll]:i.REPEAT,[Ni]:i.CLAMP_TO_EDGE,[cl]:i.MIRRORED_REPEAT},st={[hn]:i.NEAREST,[Xp]:i.NEAREST_MIPMAP_NEAREST,[Hr]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[ro]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},et={[jp]:i.NEVER,[em]:i.ALWAYS,[Kp]:i.LESS,[ff]:i.LEQUAL,[Jp]:i.EQUAL,[tm]:i.GEQUAL,[Zp]:i.GREATER,[Qp]:i.NOTEQUAL};function ct(R,S){if(S.type===On&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Un||S.magFilter===ro||S.magFilter===Hr||S.magFilter===Ui||S.minFilter===Un||S.minFilter===ro||S.minFilter===Hr||S.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,V[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,V[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,V[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,st[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,st[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,et[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===hn||S.minFilter!==Hr&&S.minFilter!==Ui||S.type===On&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function yt(R,S){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",E));const Y=S.source;let rt=u.get(Y);rt===void 0&&(rt={},u.set(Y,rt));const Z=U(S);if(Z!==R.__cacheKey){rt[Z]===void 0&&(rt[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),rt[Z].usedTimes++;const At=rt[R.__cacheKey];At!==void 0&&(rt[R.__cacheKey].usedTimes--,At.usedTimes===0&&v(S)),R.__cacheKey=Z,R.__webglTexture=rt[Z].texture}return B}function Ht(R,S,B){return Math.floor(Math.floor(R/B)/S)}function Ft(R,S,B,Y){const Z=R.updateRanges;if(Z.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,B,Y,S.data);else{Z.sort((ht,Et)=>ht.start-Et.start);let At=0;for(let ht=1;ht<Z.length;ht++){const Et=Z[At],Wt=Z[ht],Ot=Et.start+Et.count,St=Ht(Wt.start,S.width,4),Yt=Ht(Et.start,S.width,4);Wt.start<=Ot+1&&St===Yt&&Ht(Wt.start+Wt.count-1,S.width,4)===St?Et.count=Math.max(Et.count,Wt.start+Wt.count-Et.start):(++At,Z[At]=Wt)}Z.length=At+1;const pt=i.getParameter(i.UNPACK_ROW_LENGTH),Tt=i.getParameter(i.UNPACK_SKIP_PIXELS),Lt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let ht=0,Et=Z.length;ht<Et;ht++){const Wt=Z[ht],Ot=Math.floor(Wt.start/4),St=Math.ceil(Wt.count/4),Yt=Ot%S.width,k=Math.floor(Ot/S.width),dt=St,vt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Yt),i.pixelStorei(i.UNPACK_SKIP_ROWS,k),e.texSubImage2D(i.TEXTURE_2D,0,Yt,k,dt,vt,B,Y,S.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,pt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Tt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Lt)}}function K(R,S,B){let Y=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=i.TEXTURE_3D);const rt=yt(R,S),Z=S.source;e.bindTexture(Y,R.__webglTexture,i.TEXTURE0+B);const At=n.get(Z);if(Z.version!==At.__version||rt===!0){e.activeTexture(i.TEXTURE0+B);const pt=re.getPrimaries(re.workingColorSpace),Tt=S.colorSpace===ci?null:re.getPrimaries(S.colorSpace),Lt=S.colorSpace===ci||pt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let ht=x(S.image,!1,s.maxTextureSize);ht=Ut(S,ht);const Et=r.convert(S.format,S.colorSpace),Wt=r.convert(S.type);let Ot=y(S.internalFormat,Et,Wt,S.colorSpace,S.isVideoTexture);ct(Y,S);let St;const Yt=S.mipmaps,k=S.isVideoTexture!==!0,dt=At.__version===void 0||rt===!0,vt=Z.dataReady,Rt=w(S,ht);if(S.isDepthTexture)Ot=_(S.format===mr,S.type),dt&&(k?e.texStorage2D(i.TEXTURE_2D,1,Ot,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,Ot,ht.width,ht.height,0,Et,Wt,null));else if(S.isDataTexture)if(Yt.length>0){k&&dt&&e.texStorage2D(i.TEXTURE_2D,Rt,Ot,Yt[0].width,Yt[0].height);for(let ut=0,at=Yt.length;ut<at;ut++)St=Yt[ut],k?vt&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,St.width,St.height,Et,Wt,St.data):e.texImage2D(i.TEXTURE_2D,ut,Ot,St.width,St.height,0,Et,Wt,St.data);S.generateMipmaps=!1}else k?(dt&&e.texStorage2D(i.TEXTURE_2D,Rt,Ot,ht.width,ht.height),vt&&Ft(S,ht,Et,Wt)):e.texImage2D(i.TEXTURE_2D,0,Ot,ht.width,ht.height,0,Et,Wt,ht.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){k&&dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,Ot,Yt[0].width,Yt[0].height,ht.depth);for(let ut=0,at=Yt.length;ut<at;ut++)if(St=Yt[ut],S.format!==En)if(Et!==null)if(k){if(vt)if(S.layerUpdates.size>0){const It=Vh(St.width,St.height,S.format,S.type);for(const $t of S.layerUpdates){const de=St.data.subarray($t*It/St.data.BYTES_PER_ELEMENT,($t+1)*It/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,$t,St.width,St.height,1,Et,de)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,St.width,St.height,ht.depth,Et,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,Ot,St.width,St.height,ht.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?vt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,St.width,St.height,ht.depth,Et,Wt,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,Ot,St.width,St.height,ht.depth,0,Et,Wt,St.data)}else{k&&dt&&e.texStorage2D(i.TEXTURE_2D,Rt,Ot,Yt[0].width,Yt[0].height);for(let ut=0,at=Yt.length;ut<at;ut++)St=Yt[ut],S.format!==En?Et!==null?k?vt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,St.width,St.height,Et,St.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,Ot,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?vt&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,St.width,St.height,Et,Wt,St.data):e.texImage2D(i.TEXTURE_2D,ut,Ot,St.width,St.height,0,Et,Wt,St.data)}else if(S.isDataArrayTexture)if(k){if(dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,Ot,ht.width,ht.height,ht.depth),vt)if(S.layerUpdates.size>0){const ut=Vh(ht.width,ht.height,S.format,S.type);for(const at of S.layerUpdates){const It=ht.data.subarray(at*ut/ht.data.BYTES_PER_ELEMENT,(at+1)*ut/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,at,ht.width,ht.height,1,Et,Wt,It)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Et,Wt,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,ht.width,ht.height,ht.depth,0,Et,Wt,ht.data);else if(S.isData3DTexture)k?(dt&&e.texStorage3D(i.TEXTURE_3D,Rt,Ot,ht.width,ht.height,ht.depth),vt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Et,Wt,ht.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,ht.width,ht.height,ht.depth,0,Et,Wt,ht.data);else if(S.isFramebufferTexture){if(dt)if(k)e.texStorage2D(i.TEXTURE_2D,Rt,Ot,ht.width,ht.height);else{let ut=ht.width,at=ht.height;for(let It=0;It<Rt;It++)e.texImage2D(i.TEXTURE_2D,It,Ot,ut,at,0,Et,Wt,null),ut>>=1,at>>=1}}else if(Yt.length>0){if(k&&dt){const ut=kt(Yt[0]);e.texStorage2D(i.TEXTURE_2D,Rt,Ot,ut.width,ut.height)}for(let ut=0,at=Yt.length;ut<at;ut++)St=Yt[ut],k?vt&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Et,Wt,St):e.texImage2D(i.TEXTURE_2D,ut,Ot,Et,Wt,St);S.generateMipmaps=!1}else if(k){if(dt){const ut=kt(ht);e.texStorage2D(i.TEXTURE_2D,Rt,Ot,ut.width,ut.height)}vt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Wt,ht)}else e.texImage2D(i.TEXTURE_2D,0,Ot,Et,Wt,ht);g(S)&&p(Y),At.__version=Z.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function J(R,S,B){if(S.image.length!==6)return;const Y=yt(R,S),rt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+B);const Z=n.get(rt);if(rt.version!==Z.__version||Y===!0){e.activeTexture(i.TEXTURE0+B);const At=re.getPrimaries(re.workingColorSpace),pt=S.colorSpace===ci?null:re.getPrimaries(S.colorSpace),Tt=S.colorSpace===ci||At===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Lt=S.isCompressedTexture||S.image[0].isCompressedTexture,ht=S.image[0]&&S.image[0].isDataTexture,Et=[];for(let at=0;at<6;at++)!Lt&&!ht?Et[at]=x(S.image[at],!0,s.maxCubemapSize):Et[at]=ht?S.image[at].image:S.image[at],Et[at]=Ut(S,Et[at]);const Wt=Et[0],Ot=r.convert(S.format,S.colorSpace),St=r.convert(S.type),Yt=y(S.internalFormat,Ot,St,S.colorSpace),k=S.isVideoTexture!==!0,dt=Z.__version===void 0||Y===!0,vt=rt.dataReady;let Rt=w(S,Wt);ct(i.TEXTURE_CUBE_MAP,S);let ut;if(Lt){k&&dt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,Yt,Wt.width,Wt.height);for(let at=0;at<6;at++){ut=Et[at].mipmaps;for(let It=0;It<ut.length;It++){const $t=ut[It];S.format!==En?Ot!==null?k?vt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,It,0,0,$t.width,$t.height,Ot,$t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,It,Yt,$t.width,$t.height,0,$t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,It,0,0,$t.width,$t.height,Ot,St,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,It,Yt,$t.width,$t.height,0,Ot,St,$t.data)}}}else{if(ut=S.mipmaps,k&&dt){ut.length>0&&Rt++;const at=kt(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,Yt,at.width,at.height)}for(let at=0;at<6;at++)if(ht){k?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Et[at].width,Et[at].height,Ot,St,Et[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Yt,Et[at].width,Et[at].height,0,Ot,St,Et[at].data);for(let It=0;It<ut.length;It++){const de=ut[It].image[at].image;k?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,It+1,0,0,de.width,de.height,Ot,St,de.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,It+1,Yt,de.width,de.height,0,Ot,St,de.data)}}else{k?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Ot,St,Et[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Yt,Ot,St,Et[at]);for(let It=0;It<ut.length;It++){const $t=ut[It];k?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,It+1,0,0,Ot,St,$t.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,It+1,Yt,Ot,St,$t.image[at])}}}g(S)&&p(i.TEXTURE_CUBE_MAP),Z.__version=rt.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function mt(R,S,B,Y,rt,Z){const At=r.convert(B.format,B.colorSpace),pt=r.convert(B.type),Tt=y(B.internalFormat,At,pt,B.colorSpace),Lt=n.get(S),ht=n.get(B);if(ht.__renderTarget=S,!Lt.__hasExternalTextures){const Et=Math.max(1,S.width>>Z),Wt=Math.max(1,S.height>>Z);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,Z,Tt,Et,Wt,S.depth,0,At,pt,null):e.texImage2D(rt,Z,Tt,Et,Wt,0,At,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),it(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,rt,ht.__webglTexture,0,gt(S)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,rt,ht.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(R,S,B){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){const Y=S.depthTexture,rt=Y&&Y.isDepthTexture?Y.type:null,Z=_(S.stencilBuffer,rt),At=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=gt(S);it(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,Z,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,Z,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Z,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,R)}else{const Y=S.textures;for(let rt=0;rt<Y.length;rt++){const Z=Y[rt],At=r.convert(Z.format,Z.colorSpace),pt=r.convert(Z.type),Tt=y(Z.internalFormat,At,pt,Z.colorSpace),Lt=gt(S);B&&it(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,Tt,S.width,S.height):it(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,Tt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(S.depthTexture);Y.__renderTarget=S,(!Y.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),N(S.depthTexture,0);const rt=Y.__webglTexture,Z=gt(S);if(S.depthTexture.format===pr)it(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(S.depthTexture.format===mr)it(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Nt(R){const S=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const Y=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){const rt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",rt)};Y.addEventListener("dispose",rt),S.__depthDisposeCallback=rt}S.__boundDepthTexture=Y}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const Y=R.texture.mipmaps;Y&&Y.length>0?_t(S.__webglFramebuffer[0],R):_t(S.__webglFramebuffer,R)}else if(B){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=i.createRenderbuffer(),xt(S.__webglDepthbuffer[Y],R,!1);else{const rt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,Z)}}else{const Y=R.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),xt(S.__webglDepthbuffer,R,!1);else{const rt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,Z)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(R,S,B){const Y=n.get(R);S!==void 0&&mt(Y.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Nt(R)}function L(R){const S=R.texture,B=n.get(R),Y=n.get(S);R.addEventListener("dispose",A);const rt=R.textures,Z=R.isWebGLCubeRenderTarget===!0,At=rt.length>1;if(At||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=S.version,a.memory.textures++),Z){B.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[pt]=[];for(let Tt=0;Tt<S.mipmaps.length;Tt++)B.__webglFramebuffer[pt][Tt]=i.createFramebuffer()}else B.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let pt=0;pt<S.mipmaps.length;pt++)B.__webglFramebuffer[pt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(At)for(let pt=0,Tt=rt.length;pt<Tt;pt++){const Lt=n.get(rt[pt]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&it(R)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let pt=0;pt<rt.length;pt++){const Tt=rt[pt];B.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[pt]);const Lt=r.convert(Tt.format,Tt.colorSpace),ht=r.convert(Tt.type),Et=y(Tt.internalFormat,Lt,ht,Tt.colorSpace,R.isXRRenderTarget===!0),Wt=gt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,Et,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,B.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),xt(B.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),ct(i.TEXTURE_CUBE_MAP,S);for(let pt=0;pt<6;pt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)mt(B.__webglFramebuffer[pt][Tt],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Tt);else mt(B.__webglFramebuffer[pt],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);g(S)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let pt=0,Tt=rt.length;pt<Tt;pt++){const Lt=rt[pt],ht=n.get(Lt);let Et=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Et=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,ht.__webglTexture),ct(Et,Lt),mt(B.__webglFramebuffer,R,Lt,i.COLOR_ATTACHMENT0+pt,Et,0),g(Lt)&&p(Et)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,Y.__webglTexture),ct(pt,S),S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)mt(B.__webglFramebuffer[Tt],R,S,i.COLOR_ATTACHMENT0,pt,Tt);else mt(B.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,pt,0);g(S)&&p(pt),e.unbindTexture()}R.depthBuffer&&Nt(R)}function nt(R){const S=R.textures;for(let B=0,Y=S.length;B<Y;B++){const rt=S[B];if(g(rt)){const Z=M(R),At=n.get(rt).__webglTexture;e.bindTexture(Z,At),p(Z),e.unbindTexture()}}}const Q=[],$=[];function tt(R){if(R.samples>0){if(it(R)===!1){const S=R.textures,B=R.width,Y=R.height;let rt=i.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(R),pt=S.length>1;if(pt)for(let Lt=0;Lt<S.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);const Tt=R.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Lt=0;Lt<S.length;Lt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[Lt]);const ht=n.get(S[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ht,0)}i.blitFramebuffer(0,0,B,Y,0,0,B,Y,rt,i.NEAREST),l===!0&&(Q.length=0,$.length=0,Q.push(i.COLOR_ATTACHMENT0+Lt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Q.push(Z),$.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let Lt=0;Lt<S.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,At.__webglColorRenderbuffer[Lt]);const ht=n.get(S[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function gt(R){return Math.min(s.maxSamples,R.samples)}function it(R){const S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ot(R){const S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Ut(R,S){const B=R.colorSpace,Y=R.format,rt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Ts&&B!==ci&&(re.getTransfer(B)===ue?(Y!==En||rt!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function kt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=C,this.setTexture2D=N,this.setTexture2DArray=F,this.setTexture3D=X,this.setTextureCube=z,this.rebindTextures=Gt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=it}function lv(i,t){function e(n,s=ci){let r;const a=re.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===cc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===af)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===of)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===sf)return i.BYTE;if(n===rf)return i.SHORT;if(n===fr)return i.UNSIGNED_SHORT;if(n===lc)return i.INT;if(n===Fi)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===Cr)return i.HALF_FLOAT;if(n===lf)return i.ALPHA;if(n===cf)return i.RGB;if(n===En)return i.RGBA;if(n===pr)return i.DEPTH_COMPONENT;if(n===mr)return i.DEPTH_STENCIL;if(n===uc)return i.RED;if(n===fc)return i.RED_INTEGER;if(n===hf)return i.RG;if(n===dc)return i.RG_INTEGER;if(n===pc)return i.RGBA_INTEGER;if(n===_a||n===xa||n===ya||n===va)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hl||n===ul||n===fl||n===dl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pl||n===ml||n===gl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pl||n===ml)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===gl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_l||n===xl||n===yl||n===vl||n===Ml||n===bl||n===Sl||n===wl||n===El||n===Tl||n===Al||n===Cl||n===Rl||n===Pl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_l)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ml)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===El)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Tl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Al)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Dl||n===Ll||n===Il)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Dl)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nl||n===Ul||n===Ol||n===Fl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Nl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ul)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ol)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===dr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const cv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class uv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new wf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new _i({vertexShader:cv,fragmentShader:hv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new le(new za(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fv extends Ls{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null;const x=typeof XRWebGLBinding<"u",g=new uv,p={},M=e.getContextAttributes();let y=null,_=null;const w=[],E=[],A=new Mt;let D=null;const v=new _n;v.viewport=new xe;const b=new _n;b.viewport=new xe;const P=[v,b],C=new L0;let I=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let J=w[K];return J===void 0&&(J=new Co,w[K]=J),J.getTargetRaySpace()},this.getControllerGrip=function(K){let J=w[K];return J===void 0&&(J=new Co,w[K]=J),J.getGripSpace()},this.getHand=function(K){let J=w[K];return J===void 0&&(J=new Co,w[K]=J),J.getHandSpace()};function N(K){const J=E.indexOf(K.inputSource);if(J===-1)return;const mt=w[J];mt!==void 0&&(mt.update(K.inputSource,K.frame,c||a),mt.dispatchEvent({type:K.type,data:K.inputSource}))}function F(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",X);for(let K=0;K<w.length;K++){const J=E[K];J!==null&&(E[K]=null,w[K].disconnect(J))}I=null,U=null,g.reset();for(const K in p)delete p[K];t.setRenderTarget(y),d=null,u=null,f=null,s=null,_=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",F),s.addEventListener("inputsourceschange",X),M.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,xt=null,_t=null;M.depth&&(_t=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=M.stencil?mr:pr,xt=M.stencil?dr:Fi);const Nt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Nt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new ki(u.textureWidth,u.textureHeight,{format:En,type:kn,depthTexture:new Sf(u.textureWidth,u.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const mt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new ki(d.framebufferWidth,d.framebufferHeight,{format:En,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ft.setContext(s),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X(K){for(let J=0;J<K.removed.length;J++){const mt=K.removed[J],xt=E.indexOf(mt);xt>=0&&(E[xt]=null,w[xt].disconnect(mt))}for(let J=0;J<K.added.length;J++){const mt=K.added[J];let xt=E.indexOf(mt);if(xt===-1){for(let Nt=0;Nt<w.length;Nt++)if(Nt>=E.length){E.push(mt),xt=Nt;break}else if(E[Nt]===null){E[Nt]=mt,xt=Nt;break}if(xt===-1)break}const _t=w[xt];_t&&_t.connect(mt)}}const z=new O,V=new O;function st(K,J,mt){z.setFromMatrixPosition(J.matrixWorld),V.setFromMatrixPosition(mt.matrixWorld);const xt=z.distanceTo(V),_t=J.projectionMatrix.elements,Nt=mt.projectionMatrix.elements,Gt=_t[14]/(_t[10]-1),L=_t[14]/(_t[10]+1),nt=(_t[9]+1)/_t[5],Q=(_t[9]-1)/_t[5],$=(_t[8]-1)/_t[0],tt=(Nt[8]+1)/Nt[0],gt=Gt*$,it=Gt*tt,ot=xt/(-$+tt),Ut=ot*-$;if(J.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ut),K.translateZ(ot),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),_t[10]===-1)K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const kt=Gt+ot,R=L+ot,S=gt-Ut,B=it+(xt-Ut),Y=nt*L/R*kt,rt=Q*L/R*kt;K.projectionMatrix.makePerspective(S,B,Y,rt,kt,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function et(K,J){J===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(J.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let J=K.near,mt=K.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(mt=g.depthFar)),C.near=b.near=v.near=J,C.far=b.far=v.far=mt,(I!==C.near||U!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),I=C.near,U=C.far),C.layers.mask=K.layers.mask|6,v.layers.mask=C.layers.mask&3,b.layers.mask=C.layers.mask&5;const xt=K.parent,_t=C.cameras;et(C,xt);for(let Nt=0;Nt<_t.length;Nt++)et(_t[Nt],xt);_t.length===2?st(C,v,b):C.projectionMatrix.copy(v.projectionMatrix),ct(K,C,xt)};function ct(K,J,mt){mt===null?K.matrix.copy(J.matrixWorld):(K.matrix.copy(mt.matrixWorld),K.matrix.invert(),K.matrix.multiply(J.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=gr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(C)},this.getCameraTexture=function(K){return p[K]};let yt=null;function Ht(K,J){if(h=J.getViewerPose(c||a),m=J,h!==null){const mt=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let xt=!1;mt.length!==C.cameras.length&&(C.cameras.length=0,xt=!0);for(let L=0;L<mt.length;L++){const nt=mt[L];let Q=null;if(d!==null)Q=d.getViewport(nt);else{const tt=f.getViewSubImage(u,nt);Q=tt.viewport,L===0&&(t.setRenderTargetTextures(_,tt.colorTexture,tt.depthStencilTexture),t.setRenderTarget(_))}let $=P[L];$===void 0&&($=new _n,$.layers.enable(L),$.viewport=new xe,P[L]=$),$.matrix.fromArray(nt.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(nt.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(Q.x,Q.y,Q.width,Q.height),L===0&&(C.matrix.copy($.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),xt===!0&&C.cameras.push($)}const _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();const L=f.getDepthInformation(mt[0]);L&&L.isValid&&L.texture&&g.init(L,s.renderState)}if(_t&&_t.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let L=0;L<mt.length;L++){const nt=mt[L].camera;if(nt){let Q=p[nt];Q||(Q=new wf,p[nt]=Q);const $=f.getCameraImage(nt);Q.sourceTexture=$}}}}for(let mt=0;mt<w.length;mt++){const xt=E[mt],_t=w[mt];xt!==null&&_t!==void 0&&_t.update(xt,J,c||a)}yt&&yt(K,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),m=null}const Ft=new Uf;Ft.setAnimationLoop(Ht),this.setAnimationLoop=function(K){yt=K},this.dispose=function(){}}}const Ti=new Bn,dv=new ce;function pv(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,yf(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,M,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Qe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Qe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=t.get(p),y=M.envMap,_=M.envMapRotation;y&&(g.envMap.value=y,Ti.copy(_),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),g.envMapRotation.value.setFromMatrix4(dv.makeRotationFromEuler(Ti)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qe&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function mv(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const _=y.program;n.uniformBlockBinding(M,_)}function c(M,y){let _=s[M.id];_===void 0&&(m(M),_=h(M),s[M.id]=_,M.addEventListener("dispose",g));const w=y.program;n.updateUBOMapping(M,w);const E=t.render.frame;r[M.id]!==E&&(u(M),r[M.id]=E)}function h(M){const y=f();M.__bindingPointIndex=y;const _=i.createBuffer(),w=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,w,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const y=s[M.id],_=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,A=_.length;E<A;E++){const D=Array.isArray(_[E])?_[E]:[_[E]];for(let v=0,b=D.length;v<b;v++){const P=D[v];if(d(P,E,v,w)===!0){const C=P.__offset,I=Array.isArray(P.value)?P.value:[P.value];let U=0;for(let N=0;N<I.length;N++){const F=I[N],X=x(F);typeof F=="number"||typeof F=="boolean"?(P.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,C+U,P.__data)):F.isMatrix3?(P.__data[0]=F.elements[0],P.__data[1]=F.elements[1],P.__data[2]=F.elements[2],P.__data[3]=0,P.__data[4]=F.elements[3],P.__data[5]=F.elements[4],P.__data[6]=F.elements[5],P.__data[7]=0,P.__data[8]=F.elements[6],P.__data[9]=F.elements[7],P.__data[10]=F.elements[8],P.__data[11]=0):(F.toArray(P.__data,U),U+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,y,_,w){const E=M.value,A=y+"_"+_;if(w[A]===void 0)return typeof E=="number"||typeof E=="boolean"?w[A]=E:w[A]=E.clone(),!0;{const D=w[A];if(typeof E=="number"||typeof E=="boolean"){if(D!==E)return w[A]=E,!0}else if(D.equals(E)===!1)return D.copy(E),!0}return!1}function m(M){const y=M.uniforms;let _=0;const w=16;for(let A=0,D=y.length;A<D;A++){const v=Array.isArray(y[A])?y[A]:[y[A]];for(let b=0,P=v.length;b<P;b++){const C=v[b],I=Array.isArray(C.value)?C.value:[C.value];for(let U=0,N=I.length;U<N;U++){const F=I[U],X=x(F),z=_%w,V=z%X.boundary,st=z+V;_+=V,st!==0&&w-st<X.storage&&(_+=w-st),C.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=_,_+=X.storage}}}const E=_%w;return E>0&&(_+=w-E),M.__size=_,M.__cache={},this}function x(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function g(M){const y=M.target;y.removeEventListener("dispose",g);const _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class zf{constructor(t={}){const{canvas:e=xm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),x=new Int32Array(4);let g=null,p=null;const M=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let w=!1;this._outputColorSpace=ln;let E=0,A=0,D=null,v=-1,b=null;const P=new xe,C=new xe;let I=null;const U=new jt(0);let N=0,F=e.width,X=e.height,z=1,V=null,st=null;const et=new xe(0,0,F,X),ct=new xe(0,0,F,X);let yt=!1;const Ht=new yc;let Ft=!1,K=!1;const J=new ce,mt=new O,xt=new xe,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function Gt(){return D===null?z:1}let L=n;function nt(T,H){return e.getContext(T,H)}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${oc}`),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",ut,!1),L===null){const H="webgl2";if(L=nt(H,T),L===null)throw nt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Q,$,tt,gt,it,ot,Ut,kt,R,S,B,Y,rt,Z,At,pt,Tt,Lt,ht,Et,Wt,Ot,St,Yt;function k(){Q=new Tx(L),Q.init(),Ot=new lv(L,Q),$=new yx(L,Q,t,Ot),tt=new av(L,Q),$.reversedDepthBuffer&&u&&tt.buffers.depth.setReversed(!0),gt=new Rx(L),it=new Yy,ot=new ov(L,Q,tt,it,$,Ot,gt),Ut=new Mx(_),kt=new Ex(_),R=new U0(L),St=new _x(L,R),S=new Ax(L,R,gt,St),B=new Dx(L,S,R,gt),ht=new Px(L,$,ot),pt=new vx(it),Y=new $y(_,Ut,kt,Q,$,St,pt),rt=new pv(_,it),Z=new jy,At=new ev(Q),Lt=new gx(_,Ut,kt,tt,B,d,l),Tt=new sv(_,B,$),Yt=new mv(L,gt,$,tt),Et=new xx(L,Q,gt),Wt=new Cx(L,Q,gt),gt.programs=Y.programs,_.capabilities=$,_.extensions=Q,_.properties=it,_.renderLists=Z,_.shadowMap=Tt,_.state=tt,_.info=gt}k();const dt=new fv(_,L);this.xr=dt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=Q.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Q.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(F,X,!1))},this.getSize=function(T){return T.set(F,X)},this.setSize=function(T,H,q=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=T,X=H,e.width=Math.floor(T*z),e.height=Math.floor(H*z),q===!0&&(e.style.width=T+"px",e.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(F*z,X*z).floor()},this.setDrawingBufferSize=function(T,H,q){F=T,X=H,z=q,e.width=Math.floor(T*q),e.height=Math.floor(H*q),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(et)},this.setViewport=function(T,H,q,j){T.isVector4?et.set(T.x,T.y,T.z,T.w):et.set(T,H,q,j),tt.viewport(P.copy(et).multiplyScalar(z).round())},this.getScissor=function(T){return T.copy(ct)},this.setScissor=function(T,H,q,j){T.isVector4?ct.set(T.x,T.y,T.z,T.w):ct.set(T,H,q,j),tt.scissor(C.copy(ct).multiplyScalar(z).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(T){tt.setScissorTest(yt=T)},this.setOpaqueSort=function(T){V=T},this.setTransparentSort=function(T){st=T},this.getClearColor=function(T){return T.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(T=!0,H=!0,q=!0){let j=0;if(T){let W=!1;if(D!==null){const ft=D.texture.format;W=ft===pc||ft===dc||ft===fc}if(W){const ft=D.texture.type,wt=ft===kn||ft===Fi||ft===fr||ft===dr||ft===cc||ft===hc,Dt=Lt.getClearColor(),Ct=Lt.getClearAlpha(),Vt=Dt.r,Xt=Dt.g,Bt=Dt.b;wt?(m[0]=Vt,m[1]=Xt,m[2]=Bt,m[3]=Ct,L.clearBufferuiv(L.COLOR,0,m)):(x[0]=Vt,x[1]=Xt,x[2]=Bt,x[3]=Ct,L.clearBufferiv(L.COLOR,0,x))}else j|=L.COLOR_BUFFER_BIT}H&&(j|=L.DEPTH_BUFFER_BIT),q&&(j|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),Lt.dispose(),Z.dispose(),At.dispose(),it.dispose(),Ut.dispose(),kt.dispose(),B.dispose(),St.dispose(),Yt.dispose(),Y.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",Pn),dt.removeEventListener("sessionend",Lc),xi.stop()};function vt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const T=gt.autoReset,H=Tt.enabled,q=Tt.autoUpdate,j=Tt.needsUpdate,W=Tt.type;k(),gt.autoReset=T,Tt.enabled=H,Tt.autoUpdate=q,Tt.needsUpdate=j,Tt.type=W}function ut(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function at(T){const H=T.target;H.removeEventListener("dispose",at),It(H)}function It(T){$t(T),it.remove(T)}function $t(T){const H=it.get(T).programs;H!==void 0&&(H.forEach(function(q){Y.releaseProgram(q)}),T.isShaderMaterial&&Y.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,q,j,W,ft){H===null&&(H=_t);const wt=W.isMesh&&W.matrixWorld.determinant()<0,Dt=hd(T,H,q,j,W);tt.setMaterial(j,wt);let Ct=q.index,Vt=1;if(j.wireframe===!0){if(Ct=S.getWireframeAttribute(q),Ct===void 0)return;Vt=2}const Xt=q.drawRange,Bt=q.attributes.position;let te=Xt.start*Vt,he=(Xt.start+Xt.count)*Vt;ft!==null&&(te=Math.max(te,ft.start*Vt),he=Math.min(he,(ft.start+ft.count)*Vt)),Ct!==null?(te=Math.max(te,0),he=Math.min(he,Ct.count)):Bt!=null&&(te=Math.max(te,0),he=Math.min(he,Bt.count));const be=he-te;if(be<0||be===1/0)return;St.setup(W,j,Dt,q,Ct);let ge,fe=Et;if(Ct!==null&&(ge=R.get(Ct),fe=Wt,fe.setIndex(ge)),W.isMesh)j.wireframe===!0?(tt.setLineWidth(j.wireframeLinewidth*Gt()),fe.setMode(L.LINES)):fe.setMode(L.TRIANGLES);else if(W.isLine){let zt=j.linewidth;zt===void 0&&(zt=1),tt.setLineWidth(zt*Gt()),W.isLineSegments?fe.setMode(L.LINES):W.isLineLoop?fe.setMode(L.LINE_LOOP):fe.setMode(L.LINE_STRIP)}else W.isPoints?fe.setMode(L.POINTS):W.isSprite&&fe.setMode(L.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)_r("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))fe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const zt=W._multiDrawStarts,ye=W._multiDrawCounts,se=W._multiDrawCount,en=Ct?R.get(Ct).bytesPerElement:1,Gi=it.get(j).currentProgram.getUniforms();for(let nn=0;nn<se;nn++)Gi.setValue(L,"_gl_DrawID",nn),fe.render(zt[nn]/en,ye[nn])}else if(W.isInstancedMesh)fe.renderInstances(te,be,W.count);else if(q.isInstancedBufferGeometry){const zt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ye=Math.min(q.instanceCount,zt);fe.renderInstances(te,be,ye)}else fe.render(te,be)};function de(T,H,q){T.transparent===!0&&T.side===Sn&&T.forceSinglePass===!1?(T.side=Qe,T.needsUpdate=!0,Lr(T,H,q),T.side=Jn,T.needsUpdate=!0,Lr(T,H,q),T.side=Sn):Lr(T,H,q)}this.compile=function(T,H,q=null){q===null&&(q=T),p=At.get(q),p.init(H),y.push(p),q.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),T!==q&&T.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const j=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ft=W.material;if(ft)if(Array.isArray(ft))for(let wt=0;wt<ft.length;wt++){const Dt=ft[wt];de(Dt,q,W),j.add(Dt)}else de(ft,q,W),j.add(ft)}),p=y.pop(),j},this.compileAsync=function(T,H,q=null){const j=this.compile(T,H,q);return new Promise(W=>{function ft(){if(j.forEach(function(wt){it.get(wt).currentProgram.isReady()&&j.delete(wt)}),j.size===0){W(T);return}setTimeout(ft,10)}Q.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let ae=null;function Gn(T){ae&&ae(T)}function Pn(){xi.stop()}function Lc(){xi.start()}const xi=new Uf;xi.setAnimationLoop(Gn),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(T){ae=T,dt.setAnimationLoop(T),T===null?xi.stop():xi.start()},dt.addEventListener("sessionstart",Pn),dt.addEventListener("sessionend",Lc),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(H),H=dt.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,H,D),p=At.get(T,y.length),p.init(H),y.push(p),J.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Ht.setFromProjectionMatrix(J,Fn,H.reversedDepth),K=this.localClippingEnabled,Ft=pt.init(this.clippingPlanes,K),g=Z.get(T,M.length),g.init(),M.push(g),dt.enabled===!0&&dt.isPresenting===!0){const ft=_.xr.getDepthSensingMesh();ft!==null&&$a(ft,H,-1/0,_.sortObjects)}$a(T,H,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(V,st),Nt=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,Nt&&Lt.addToRenderList(g,T),this.info.render.frame++,Ft===!0&&pt.beginShadows();const q=p.state.shadowsArray;Tt.render(q,T,H),Ft===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=g.opaque,W=g.transmissive;if(p.setupLights(),H.isArrayCamera){const ft=H.cameras;if(W.length>0)for(let wt=0,Dt=ft.length;wt<Dt;wt++){const Ct=ft[wt];Nc(j,W,T,Ct)}Nt&&Lt.render(T);for(let wt=0,Dt=ft.length;wt<Dt;wt++){const Ct=ft[wt];Ic(g,T,Ct,Ct.viewport)}}else W.length>0&&Nc(j,W,T,H),Nt&&Lt.render(T),Ic(g,T,H);D!==null&&A===0&&(ot.updateMultisampleRenderTarget(D),ot.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(_,T,H),St.resetDefaultState(),v=-1,b=null,y.pop(),y.length>0?(p=y[y.length-1],Ft===!0&&pt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function $a(T,H,q,j){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ht.intersectsSprite(T)){j&&xt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(J);const wt=B.update(T),Dt=T.material;Dt.visible&&g.push(T,wt,Dt,q,xt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ht.intersectsObject(T))){const wt=B.update(T),Dt=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),xt.copy(T.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),xt.copy(wt.boundingSphere.center)),xt.applyMatrix4(T.matrixWorld).applyMatrix4(J)),Array.isArray(Dt)){const Ct=wt.groups;for(let Vt=0,Xt=Ct.length;Vt<Xt;Vt++){const Bt=Ct[Vt],te=Dt[Bt.materialIndex];te&&te.visible&&g.push(T,wt,te,q,xt.z,Bt)}}else Dt.visible&&g.push(T,wt,Dt,q,xt.z,null)}}const ft=T.children;for(let wt=0,Dt=ft.length;wt<Dt;wt++)$a(ft[wt],H,q,j)}function Ic(T,H,q,j){const W=T.opaque,ft=T.transmissive,wt=T.transparent;p.setupLightsView(q),Ft===!0&&pt.setGlobalState(_.clippingPlanes,q),j&&tt.viewport(P.copy(j)),W.length>0&&Dr(W,H,q),ft.length>0&&Dr(ft,H,q),wt.length>0&&Dr(wt,H,q),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function Nc(T,H,q,j){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new ki(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Cr:kn,minFilter:Ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const ft=p.state.transmissionRenderTarget[j.id],wt=j.viewport||P;ft.setSize(wt.z*_.transmissionResolutionScale,wt.w*_.transmissionResolutionScale);const Dt=_.getRenderTarget(),Ct=_.getActiveCubeFace(),Vt=_.getActiveMipmapLevel();_.setRenderTarget(ft),_.getClearColor(U),N=_.getClearAlpha(),N<1&&_.setClearColor(16777215,.5),_.clear(),Nt&&Lt.render(q);const Xt=_.toneMapping;_.toneMapping=pi;const Bt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),Ft===!0&&pt.setGlobalState(_.clippingPlanes,j),Dr(T,q,j),ot.updateMultisampleRenderTarget(ft),ot.updateRenderTargetMipmap(ft),Q.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let he=0,be=H.length;he<be;he++){const ge=H[he],fe=ge.object,zt=ge.geometry,ye=ge.material,se=ge.group;if(ye.side===Sn&&fe.layers.test(j.layers)){const en=ye.side;ye.side=Qe,ye.needsUpdate=!0,Uc(fe,q,j,zt,ye,se),ye.side=en,ye.needsUpdate=!0,te=!0}}te===!0&&(ot.updateMultisampleRenderTarget(ft),ot.updateRenderTargetMipmap(ft))}_.setRenderTarget(Dt,Ct,Vt),_.setClearColor(U,N),Bt!==void 0&&(j.viewport=Bt),_.toneMapping=Xt}function Dr(T,H,q){const j=H.isScene===!0?H.overrideMaterial:null;for(let W=0,ft=T.length;W<ft;W++){const wt=T[W],Dt=wt.object,Ct=wt.geometry,Vt=wt.group;let Xt=wt.material;Xt.allowOverride===!0&&j!==null&&(Xt=j),Dt.layers.test(q.layers)&&Uc(Dt,H,q,Ct,Xt,Vt)}}function Uc(T,H,q,j,W,ft){T.onBeforeRender(_,H,q,j,W,ft),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(_,H,q,j,T,ft),W.transparent===!0&&W.side===Sn&&W.forceSinglePass===!1?(W.side=Qe,W.needsUpdate=!0,_.renderBufferDirect(q,H,j,W,T,ft),W.side=Jn,W.needsUpdate=!0,_.renderBufferDirect(q,H,j,W,T,ft),W.side=Sn):_.renderBufferDirect(q,H,j,W,T,ft),T.onAfterRender(_,H,q,j,W,ft)}function Lr(T,H,q){H.isScene!==!0&&(H=_t);const j=it.get(T),W=p.state.lights,ft=p.state.shadowsArray,wt=W.state.version,Dt=Y.getParameters(T,W.state,ft,H,q),Ct=Y.getProgramCacheKey(Dt);let Vt=j.programs;j.environment=T.isMeshStandardMaterial?H.environment:null,j.fog=H.fog,j.envMap=(T.isMeshStandardMaterial?kt:Ut).get(T.envMap||j.environment),j.envMapRotation=j.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,Vt===void 0&&(T.addEventListener("dispose",at),Vt=new Map,j.programs=Vt);let Xt=Vt.get(Ct);if(Xt!==void 0){if(j.currentProgram===Xt&&j.lightsStateVersion===wt)return Fc(T,Dt),Xt}else Dt.uniforms=Y.getUniforms(T),T.onBeforeCompile(Dt,_),Xt=Y.acquireProgram(Dt,Ct),Vt.set(Ct,Xt),j.uniforms=Dt.uniforms;const Bt=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Bt.clippingPlanes=pt.uniform),Fc(T,Dt),j.needsLights=fd(T),j.lightsStateVersion=wt,j.needsLights&&(Bt.ambientLightColor.value=W.state.ambient,Bt.lightProbe.value=W.state.probe,Bt.directionalLights.value=W.state.directional,Bt.directionalLightShadows.value=W.state.directionalShadow,Bt.spotLights.value=W.state.spot,Bt.spotLightShadows.value=W.state.spotShadow,Bt.rectAreaLights.value=W.state.rectArea,Bt.ltc_1.value=W.state.rectAreaLTC1,Bt.ltc_2.value=W.state.rectAreaLTC2,Bt.pointLights.value=W.state.point,Bt.pointLightShadows.value=W.state.pointShadow,Bt.hemisphereLights.value=W.state.hemi,Bt.directionalShadowMap.value=W.state.directionalShadowMap,Bt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Bt.spotShadowMap.value=W.state.spotShadowMap,Bt.spotLightMatrix.value=W.state.spotLightMatrix,Bt.spotLightMap.value=W.state.spotLightMap,Bt.pointShadowMap.value=W.state.pointShadowMap,Bt.pointShadowMatrix.value=W.state.pointShadowMatrix),j.currentProgram=Xt,j.uniformsList=null,Xt}function Oc(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=ba.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function Fc(T,H){const q=it.get(T);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function hd(T,H,q,j,W){H.isScene!==!0&&(H=_t),ot.resetTextureUnits();const ft=H.fog,wt=j.isMeshStandardMaterial?H.environment:null,Dt=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ts,Ct=(j.isMeshStandardMaterial?kt:Ut).get(j.envMap||wt),Vt=j.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Xt=!!q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Bt=!!q.morphAttributes.position,te=!!q.morphAttributes.normal,he=!!q.morphAttributes.color;let be=pi;j.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(be=_.toneMapping);const ge=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,fe=ge!==void 0?ge.length:0,zt=it.get(j),ye=p.state.lights;if(Ft===!0&&(K===!0||T!==b)){const Ve=T===b&&j.id===v;pt.setState(j,T,Ve)}let se=!1;j.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==ye.state.version||zt.outputColorSpace!==Dt||W.isBatchedMesh&&zt.batching===!1||!W.isBatchedMesh&&zt.batching===!0||W.isBatchedMesh&&zt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&zt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&zt.instancing===!1||!W.isInstancedMesh&&zt.instancing===!0||W.isSkinnedMesh&&zt.skinning===!1||!W.isSkinnedMesh&&zt.skinning===!0||W.isInstancedMesh&&zt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&zt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&zt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&zt.instancingMorph===!1&&W.morphTexture!==null||zt.envMap!==Ct||j.fog===!0&&zt.fog!==ft||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==pt.numPlanes||zt.numIntersection!==pt.numIntersection)||zt.vertexAlphas!==Vt||zt.vertexTangents!==Xt||zt.morphTargets!==Bt||zt.morphNormals!==te||zt.morphColors!==he||zt.toneMapping!==be||zt.morphTargetsCount!==fe)&&(se=!0):(se=!0,zt.__version=j.version);let en=zt.currentProgram;se===!0&&(en=Lr(j,H,W));let Gi=!1,nn=!1,Fs=!1;const ve=en.getUniforms(),un=zt.uniforms;if(tt.useProgram(en.program)&&(Gi=!0,nn=!0,Fs=!0),j.id!==v&&(v=j.id,nn=!0),Gi||b!==T){tt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ve.setValue(L,"projectionMatrix",T.projectionMatrix),ve.setValue(L,"viewMatrix",T.matrixWorldInverse);const qe=ve.map.cameraPosition;qe!==void 0&&qe.setValue(L,mt.setFromMatrixPosition(T.matrixWorld)),$.logarithmicDepthBuffer&&ve.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ve.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,nn=!0,Fs=!0)}if(W.isSkinnedMesh){ve.setOptional(L,W,"bindMatrix"),ve.setOptional(L,W,"bindMatrixInverse");const Ve=W.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),ve.setValue(L,"boneTexture",Ve.boneTexture,ot))}W.isBatchedMesh&&(ve.setOptional(L,W,"batchingTexture"),ve.setValue(L,"batchingTexture",W._matricesTexture,ot),ve.setOptional(L,W,"batchingIdTexture"),ve.setValue(L,"batchingIdTexture",W._indirectTexture,ot),ve.setOptional(L,W,"batchingColorTexture"),W._colorsTexture!==null&&ve.setValue(L,"batchingColorTexture",W._colorsTexture,ot));const fn=q.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&ht.update(W,q,en),(nn||zt.receiveShadow!==W.receiveShadow)&&(zt.receiveShadow=W.receiveShadow,ve.setValue(L,"receiveShadow",W.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(un.envMap.value=Ct,un.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&H.environment!==null&&(un.envMapIntensity.value=H.environmentIntensity),nn&&(ve.setValue(L,"toneMappingExposure",_.toneMappingExposure),zt.needsLights&&ud(un,Fs),ft&&j.fog===!0&&rt.refreshFogUniforms(un,ft),rt.refreshMaterialUniforms(un,j,z,X,p.state.transmissionRenderTarget[T.id]),ba.upload(L,Oc(zt),un,ot)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ba.upload(L,Oc(zt),un,ot),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ve.setValue(L,"center",W.center),ve.setValue(L,"modelViewMatrix",W.modelViewMatrix),ve.setValue(L,"normalMatrix",W.normalMatrix),ve.setValue(L,"modelMatrix",W.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Ve=j.uniformsGroups;for(let qe=0,Ya=Ve.length;qe<Ya;qe++){const yi=Ve[qe];Yt.update(yi,en),Yt.bind(yi,en)}}return en}function ud(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function fd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,H,q){const j=it.get(T);j.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),it.get(T.texture).__webglTexture=H,it.get(T.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:q,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,H){const q=it.get(T);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0};const dd=L.createFramebuffer();this.setRenderTarget=function(T,H=0,q=0){D=T,E=H,A=q;let j=!0,W=null,ft=!1,wt=!1;if(T){const Ct=it.get(T);if(Ct.__useDefaultFramebuffer!==void 0)tt.bindFramebuffer(L.FRAMEBUFFER,null),j=!1;else if(Ct.__webglFramebuffer===void 0)ot.setupRenderTarget(T);else if(Ct.__hasExternalTextures)ot.rebindTextures(T,it.get(T.texture).__webglTexture,it.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Bt=T.depthTexture;if(Ct.__boundDepthTexture!==Bt){if(Bt!==null&&it.has(Bt)&&(T.width!==Bt.image.width||T.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(T)}}const Vt=T.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(wt=!0);const Xt=it.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Xt[H])?W=Xt[H][q]:W=Xt[H],ft=!0):T.samples>0&&ot.useMultisampledRTT(T)===!1?W=it.get(T).__webglMultisampledFramebuffer:Array.isArray(Xt)?W=Xt[q]:W=Xt,P.copy(T.viewport),C.copy(T.scissor),I=T.scissorTest}else P.copy(et).multiplyScalar(z).floor(),C.copy(ct).multiplyScalar(z).floor(),I=yt;if(q!==0&&(W=dd),tt.bindFramebuffer(L.FRAMEBUFFER,W)&&j&&tt.drawBuffers(T,W),tt.viewport(P),tt.scissor(C),tt.setScissorTest(I),ft){const Ct=it.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ct.__webglTexture,q)}else if(wt){const Ct=H;for(let Vt=0;Vt<T.textures.length;Vt++){const Xt=it.get(T.textures[Vt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Vt,Xt.__webglTexture,q,Ct)}}else if(T!==null&&q!==0){const Ct=it.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ct.__webglTexture,q)}v=-1},this.readRenderTargetPixels=function(T,H,q,j,W,ft,wt,Dt=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=it.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&wt!==void 0&&(Ct=Ct[wt]),Ct){tt.bindFramebuffer(L.FRAMEBUFFER,Ct);try{const Vt=T.textures[Dt],Xt=Vt.format,Bt=Vt.type;if(!$.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-j&&q>=0&&q<=T.height-W&&(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Dt),L.readPixels(H,q,j,W,Ot.convert(Xt),Ot.convert(Bt),ft))}finally{const Vt=D!==null?it.get(D).__webglFramebuffer:null;tt.bindFramebuffer(L.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(T,H,q,j,W,ft,wt,Dt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=it.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&wt!==void 0&&(Ct=Ct[wt]),Ct)if(H>=0&&H<=T.width-j&&q>=0&&q<=T.height-W){tt.bindFramebuffer(L.FRAMEBUFFER,Ct);const Vt=T.textures[Dt],Xt=Vt.format,Bt=Vt.type;if(!$.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const te=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,te),L.bufferData(L.PIXEL_PACK_BUFFER,ft.byteLength,L.STREAM_READ),T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Dt),L.readPixels(H,q,j,W,Ot.convert(Xt),Ot.convert(Bt),0);const he=D!==null?it.get(D).__webglFramebuffer:null;tt.bindFramebuffer(L.FRAMEBUFFER,he);const be=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ym(L,be,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,te),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ft),L.deleteBuffer(te),L.deleteSync(be),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,H=null,q=0){const j=Math.pow(2,-q),W=Math.floor(T.image.width*j),ft=Math.floor(T.image.height*j),wt=H!==null?H.x:0,Dt=H!==null?H.y:0;ot.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,wt,Dt,W,ft),tt.unbindTexture()};const pd=L.createFramebuffer(),md=L.createFramebuffer();this.copyTextureToTexture=function(T,H,q=null,j=null,W=0,ft=null){ft===null&&(W!==0?(_r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ft=W,W=0):ft=0);let wt,Dt,Ct,Vt,Xt,Bt,te,he,be;const ge=T.isCompressedTexture?T.mipmaps[ft]:T.image;if(q!==null)wt=q.max.x-q.min.x,Dt=q.max.y-q.min.y,Ct=q.isBox3?q.max.z-q.min.z:1,Vt=q.min.x,Xt=q.min.y,Bt=q.isBox3?q.min.z:0;else{const fn=Math.pow(2,-W);wt=Math.floor(ge.width*fn),Dt=Math.floor(ge.height*fn),T.isDataArrayTexture?Ct=ge.depth:T.isData3DTexture?Ct=Math.floor(ge.depth*fn):Ct=1,Vt=0,Xt=0,Bt=0}j!==null?(te=j.x,he=j.y,be=j.z):(te=0,he=0,be=0);const fe=Ot.convert(H.format),zt=Ot.convert(H.type);let ye;H.isData3DTexture?(ot.setTexture3D(H,0),ye=L.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(ot.setTexture2DArray(H,0),ye=L.TEXTURE_2D_ARRAY):(ot.setTexture2D(H,0),ye=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);const se=L.getParameter(L.UNPACK_ROW_LENGTH),en=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Gi=L.getParameter(L.UNPACK_SKIP_PIXELS),nn=L.getParameter(L.UNPACK_SKIP_ROWS),Fs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ge.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ge.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Vt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Xt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Bt);const ve=T.isDataArrayTexture||T.isData3DTexture,un=H.isDataArrayTexture||H.isData3DTexture;if(T.isDepthTexture){const fn=it.get(T),Ve=it.get(H),qe=it.get(fn.__renderTarget),Ya=it.get(Ve.__renderTarget);tt.bindFramebuffer(L.READ_FRAMEBUFFER,qe.__webglFramebuffer),tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ya.__webglFramebuffer);for(let yi=0;yi<Ct;yi++)ve&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,it.get(T).__webglTexture,W,Bt+yi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,it.get(H).__webglTexture,ft,be+yi)),L.blitFramebuffer(Vt,Xt,wt,Dt,te,he,wt,Dt,L.DEPTH_BUFFER_BIT,L.NEAREST);tt.bindFramebuffer(L.READ_FRAMEBUFFER,null),tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(W!==0||T.isRenderTargetTexture||it.has(T)){const fn=it.get(T),Ve=it.get(H);tt.bindFramebuffer(L.READ_FRAMEBUFFER,pd),tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,md);for(let qe=0;qe<Ct;qe++)ve?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,fn.__webglTexture,W,Bt+qe):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,fn.__webglTexture,W),un?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ve.__webglTexture,ft,be+qe):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ve.__webglTexture,ft),W!==0?L.blitFramebuffer(Vt,Xt,wt,Dt,te,he,wt,Dt,L.COLOR_BUFFER_BIT,L.NEAREST):un?L.copyTexSubImage3D(ye,ft,te,he,be+qe,Vt,Xt,wt,Dt):L.copyTexSubImage2D(ye,ft,te,he,Vt,Xt,wt,Dt);tt.bindFramebuffer(L.READ_FRAMEBUFFER,null),tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else un?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(ye,ft,te,he,be,wt,Dt,Ct,fe,zt,ge.data):H.isCompressedArrayTexture?L.compressedTexSubImage3D(ye,ft,te,he,be,wt,Dt,Ct,fe,ge.data):L.texSubImage3D(ye,ft,te,he,be,wt,Dt,Ct,fe,zt,ge):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ft,te,he,wt,Dt,fe,zt,ge.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ft,te,he,ge.width,ge.height,fe,ge.data):L.texSubImage2D(L.TEXTURE_2D,ft,te,he,wt,Dt,fe,zt,ge);L.pixelStorei(L.UNPACK_ROW_LENGTH,se),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,en),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Gi),L.pixelStorei(L.UNPACK_SKIP_ROWS,nn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Fs),ft===0&&H.generateMipmaps&&L.generateMipmap(ye),tt.unbindTexture()},this.initRenderTarget=function(T){it.get(T).__webglFramebuffer===void 0&&ot.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ot.setTextureCube(T,0):T.isData3DTexture?ot.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ot.setTexture2DArray(T,0):ot.setTexture2D(T,0),tt.unbindTexture()},this.resetState=function(){E=0,A=0,D=null,tt.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}const pu=i=>Math.atan2(Math.sin(i),Math.cos(i));class gv{constructor(){this.delay=.5,this.duration=.5,this.owner=null,this.angle=0,this.remaining=0,this.shotAt=null,this.time=0}update(t,e){const n=t.angle||0;(t!==this.owner||e<this.time)&&(this.owner=t,this.angle=n,this.remaining=0,this.shotAt=null,this.time=e);const s=this.time;this.time=e;const r=Number.isFinite(t.lastShotAt)?t.lastShotAt:null;if(r!==this.shotAt){this.shotAt=r,this.remaining=0;const a=e-r;if(r!==null&&a>=0&&a<this.delay+this.duration){this.angle=t.aimAngle??n;const o=Math.max(0,a-this.delay);return this.remaining=this.duration-o,this.angle+=pu(n-this.angle)*o/this.duration,this.angle}}if(this.remaining>0){const a=Math.max(0,e-Math.max(s,this.shotAt+this.delay)),o=Math.min(a,this.remaining);this.angle+=pu(n-this.angle)*o/this.remaining,this.remaining=Math.max(0,this.remaining-o),this.remaining<1e-9&&(this.remaining=0)}return this.remaining===0&&(this.angle=n),this.angle}}const zo=new O(0,1,0),Sa=new O(20,29,25),_v=Sa.clone().normalize(),Ho=[48,92],mu={behind:75,ahead:85,low:-10,high:40},Ai={radius:8.3,fightRadius:5.1,fights:3,height:1.15,margin:.5,range:14},gu={full:2,max:6},_u=.3,Fe={red:"#ff4339",dark:"#2b0d10"},Dn={fill:"#e0263f",edge:"#2a0b14",grow:.09,bias:.35,minTop:2.4,hold:.25,interval:.12,heights:{dog:1.6,walker:2.8,brute:5,boss:8.5},rays:[.12,.5,.92]},xu=new Set(["crate","locker","lootbox"]),xv=34*Math.PI/180,yv=new Set(["mountain","cliff","canyon"]),vv={desert:"#a29c74",canyon:"#b0905e",tundra:"#d3dedc",burned:"#6d6255",marsh:"#6f8c58",farmland:"#a9ab5c",industrial:"#7f7d66",coast:"#9fa477"},Go={desert:"#a98670",canyon:"#b0603f",tundra:"#a9b6b8",burned:"#5f5852",coast:"#9a9a88",industrial:"#7d7a70"},Ln={city:{wall:["#a0a491","#8d9a8c","#b5ad97","#9a8f7e"],cap:"#c2b49d",top:"#b7a679"},stone:{wall:["#8f9688","#a7ab98","#7f877c"],cap:"#6f7f6a",top:"#5f7f5a"},sand:{wall:["#c98c5c","#d8b47c","#b97a4c"],cap:"#e2c08a",top:"#a86a42"},ice:{wall:["#bfe3ea","#d9f0f3","#a5d3df"],cap:"#f2f6f4",top:"#eef4f2"},timber:{wall:["#6b5a44","#7d6a4f"],cap:"#4a3d30",timber:!0}};for(const[i,t]of Object.entries({village:"city",industrial:"city",forest:"stone",glade:"stone",mountain:"stone",cliff:"stone",desert:"sand",canyon:"sand",tundra:"ice",marsh:"timber",burned:"timber",farmland:"timber",coast:"timber"}))Ln[i]=Ln[t];const Mv={forest:"stone",glade:"stone",mountain:"stone",cliff:"stone",coast:"post",desert:"block",canyon:"block",tundra:"ice",marsh:"reeds",burned:"stump",farmland:"hay",industrial:"barrel"},Vo={city:"#8b8f7d",village:"#8f8f78",forest:"#857e5e",glade:"#a29a6a",coast:"#e2d6b4",desert:"#d8b47c",cliff:"#9aa196",mountain:"#a3a99c",marsh:"#8a7352",burned:"#5e5650",canyon:"#c48a5c",tundra:"#e4ecee",farmland:"#b6a46c",industrial:"#7f7c72"},yu={mountain:["#8b988b","#a6ad99","#76857c","#e9efe8"],cliff:["#7f8c84","#98a397","#6c7a70","#5d7d64"],canyon:["#b0603f","#c9774a","#9c4e33","#8a8a4a"],desert:["#b98a5c","#d0a06a","#a6784e"],tundra:["#9fb0b4","#b9c8cb","#8a9ca0","#f2f6f4"]},Wo=new Map,Qs=i=>(Wo.has(i)||Wo.set(i,new jt(i)),Wo.get(i)),vu=(i,t,e)=>{const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)},js=i=>`#${Qs(i).clone().multiplyScalar(.78).getHexString()}`,bv={bark:"#635c4b"},Sv=Object.freeze(["tollkeeper","rootbound","undertow","ochre","cairn","warden"]),wv=[[/toll|city|departure/,"tollkeeper"],[/root|forest|glass/,"rootbound"],[/tide|coast|silent/,"undertow"],[/ochre|sun|desert|sunken|canyon|mesa/,"ochre"],[/cairn|mountain|high|ridge|tundra/,"cairn"],[/warden|outpost|last|lantern/,"warden"]],Mu={toll:"tollkeeper",root:"rootbound",tide:"undertow",sun:"ochre",cairn:"cairn",warden:"warden"};function Ev(...i){for(const t of i){if(t==null||t==="")continue;const e=String(t).toLowerCase();if(Mu[e])return Mu[e];if(/undertow/.test(e))return"undertow";for(const[n,s]of wv)if(n.test(e))return s}return null}const bu={default:{body:"#9a4b57",head:"#ceb2a1",back:"#713f4a",spike:["#d69088","#e2b4a0"]},tollkeeper:{body:"#7d7f86",head:"#c4c2b8",back:"#4d5059",spike:["#b9b7ad","#d8c58f"]},rootbound:{body:"#4f7a45",head:"#a9b983",back:"#35502f",spike:["#7a5a38","#5f8a47"]},undertow:{body:"#2f8088",head:"#8cc6bd",back:"#1f5a66",spike:["#5ec0b4","#3b98a0"]},ochre:{body:"#c0803c",head:"#e6c690",back:"#99602c",spike:["#e0b070","#c88a4a"]},cairn:{body:"#79838a",head:"#c9d0cf",back:"#555f68",spike:["#aeb8bb","#e8eeee"]},warden:{body:"#4a3f58",head:"#b9a9c4",back:"#2f2840",spike:["#e8964a","#8a7aa0"]}},Su=Object.freeze({heal:{symbol:"+",color:"#ed615a",name:"Medical kit"},shield:{symbol:"◇",color:"#60bfe3",name:"Shield"},rapid:{symbol:"≋",color:"#efa840",name:"Rapid fire"},power:{symbol:"ϟ",color:"#aa78ee",name:"Power cell"},speed:{symbol:"»",color:"#f1ce65",name:"Fleetfoot"},weapon:{symbol:"⌁",color:"#e5d8b1",name:"Weapon"}});function Tv(i,t){const e=i.attributes.position,n=e.count/3,s=new Float32Array(n*3),r=new Float32Array(n*3),a=new Map,o=new O,l=new O,c=new O;for(let u=0;u<n;u++){o.fromBufferAttribute(e,u*3),l.fromBufferAttribute(e,u*3+1),c.fromBufferAttribute(e,u*3+2),c.sub(l),l.sub(o),l.cross(c),s.set([l.x,l.y,l.z],u*3),l.normalize(),r.set([l.x,l.y,l.z],u*3);for(let d=0;d<3;d++){const m=`${e.getX(u*3+d).toFixed(3)},${e.getY(u*3+d).toFixed(3)},${e.getZ(u*3+d).toFixed(3)}`;a.has(m)||a.set(m,[]),a.get(m).push(u*3+d)}}const h=new Float32Array(n*9),f=Math.cos(t);for(const u of a.values())for(const d of u){const m=Math.floor(d/3);let x=0,g=0,p=0;for(const y of u){const _=Math.floor(y/3);r[_*3]*r[m*3]+r[_*3+1]*r[m*3+1]+r[_*3+2]*r[m*3+2]>=f&&(x+=s[_*3],g+=s[_*3+1],p+=s[_*3+2])}const M=Math.hypot(x,g,p)||1;h.set([x/M,g/M,p/M],d*3)}return i.setAttribute("normal",new ie(h,3)),i}function Av(){const i=[[1,-.5],[.66,-.08],[.3,.26]],t=7,e=[],n=o=>{const l=Math.sin(o*127.1+311.7)*43758.5453;return l-Math.floor(l)};i.forEach(([o,l],c)=>{for(let h=0;h<t;h++){const f=(h+c%2*.5+(n(h+c*7)-.5)*.5)*Math.PI*2/t,u=o*(.84+n(h*3+c*11)*.32);e.push(new O(Math.cos(f)*u,l+(c?(n(h*5+c)-.5)*.1:0),Math.sin(f)*u))}});const s=new O(.06,.5,-.04),r=[];for(let o=0;o<i.length;o++)for(let l=0;l<t;l++){const c=e[o*t+l],h=e[o*t+(l+1)%t];if(o===i.length-1){r.push(c,s,h);continue}const f=e[(o+1)*t+l],u=e[(o+1)*t+(l+1)%t];r.push(c,f,h,h,f,u)}const a=new Pe().setFromPoints(r);return Tv(a,42*Math.PI/180)}class Cv{constructor(t){this.canvas=t;try{this.renderer=new zf({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch(r){throw new Error(`Kuru needs a browser with WebGL enabled to show its world. ${r.message}`)}this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.outputColorSpace=ln,this.renderer.toneMapping=ef,this.renderer.toneMappingExposure=.94,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Qu,this.scene=new bf,this.scene.background=new jt("#c2d1c4"),this.scene.fog=new xc("#c2d1c4",...Ho),this.camera=new Ec(-15,15,28,-28,.1,160),this.cameraScale=1,this.sceneBox=mu,this.silhouetteBias={value:0},this.camera.up.copy(zo),this.scene.add(new Nf("#dcebdd","#344d3e",1.5));const e=new Gl("#fff2da",2.3);e.position.set(-18,36,12),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),Object.assign(e.shadow.camera,{left:-30,right:30,top:38,bottom:-25,near:1,far:100}),e.shadow.normalBias=.065,e.shadow.bias=-12e-5,this.scene.add(e,e.target),this.sun=e,this.materials=new Map,this.geometries={box:new gi(1,1,1),cylinder:new Ns(1,1,1,7),cone:new vc(1,1,7),ico:new Mr(1,0),sphere:new Mr(1,1),circle:new Na(1,32),ring:new cr(.87,1,40)};const n=new Bl;n.moveTo(-.35,.3);for(const[r,a]of[[0,.45],[.35,.3],[.29,-.13],[0,-.45],[-.29,-.13]])n.lineTo(r,a);n.closePath(),this.geometries.shield=new Ua(n,{depth:.12,bevelEnabled:!1}),this.geometries.shield.translate(0,0,-.06);const s=new Bl;s.moveTo(.02,.37);for(const[r,a]of[[-.22,-.035],[-.035,-.035],[-.08,-.37],[.23,.065],[.035,.065]])s.lineTo(r,a);s.closePath(),this.geometries.bolt=new Ua(s,{depth:.04,bevelEnabled:!1}),this.chunks=new Map,this.entities=new Map,this.transients=new Map,this.time=0,this.gaitPhase=0,this.walkBlend=0,this.courierFacing=new gv,this.seed=null,this.legLength=null,this.focus=new O,this.tempVector=new O,this.player=this.makeCourier(),this.scene.add(this.player),this.courierOutline=this.makeCourierOutline(),this.scene.add(this.courierOutline),this.initHurtTint(),this.occlusionRay=new I0,this.occlusionHits=[],this.nextOcclusionCheck=0,this.playerShadow=this.disc("#253c39",.18,.78),this.scene.add(this.playerShadow),this.deliveryBeacon=this.makeBeacon(),this.scene.add(this.deliveryBeacon),this.enemyCapacity=96,this.enemyBatches=new Map,this.initializeEnemyBatches(),this.resize(t.clientWidth||390,t.clientHeight||800)}material(t,e={}){const n=`${t}-${e.emissive||""}-${e.opacity??1}-${e.basic||!1}-${e.overlay||!1}${e.smooth?"-smooth":""}`;if(!this.materials.has(n)){const s=e.basic?hi:Ma,r={color:t,transparent:e.opacity!==void 0&&e.opacity<1,opacity:e.opacity??1,side:e.double?Sn:Jn};e.basic||Object.assign(r,{roughness:1,flatShading:!e.smooth,emissive:e.emissive||"#000000",emissiveIntensity:e.emissive?.65:0}),e.overlay&&Object.assign(r,{depthTest:!1,depthWrite:!1,toneMapped:!1});const a=new s(r);a.userData.overlay=!!e.overlay,this.materials.set(n,a)}return this.materials.get(n)}mesh(t,e,n,s,r,a,o=1,l=1,c=1,h={}){e==="peak"&&(this.geometries.peak??=Av());const f=new le(this.geometries[e],this.material(n,h));return f.position.set(s,r,a),f.scale.set(o,l,c),f.castShadow=!h.basic&&l>.2,f.receiveShadow=!h.basic,t.add(f),f}disc(t,e,n){const s=new le(this.geometries.circle,this.material(t,{basic:!0,opacity:e}));return s.rotation.x=-Math.PI/2,s.scale.setScalar(n),s.position.y=.045,s}makeCourier(){const t=new Zt,e=new Zt;t.add(e);const n=new Zt;e.add(n),this.mesh(n,"cone","#e99042",-.025,.7,0,.39,.38,.35);const s=[];for(const c of[-1,1]){const h=new Zt;h.position.set(.025,.67,c*.19),n.add(h),this.mesh(h,"box","#263f43",0,-.16,0,.21,.32,.21);const f=new Zt;f.position.y=-.32,h.add(f),this.mesh(f,"cylinder","#486168",0,0,0,.115,.21,.115).rotation.x=Math.PI/2,this.mesh(f,"box","#304c51",0,-.15,0,.18,.3,.19);const u=new Zt;u.position.y=-.3,f.add(u),this.mesh(u,"box","#283332",.1,-.015,0,.38,.13,.25),this.mesh(u,"box","#a7966d",.1,-.063,0,.39,.035,.26),s.push({hip:h,knee:f,ankle:u})}const r=new Zt;r.position.y=.78,e.add(r),this.mesh(r,"cylinder","#d97732",0,.22,0,.34,.66,.33),this.mesh(r,"box","#eabc77",.25,.21,-.16,.13,.28,.035),this.mesh(r,"sphere","#d9ad83",.05,.76,0,.28,.29,.26),this.mesh(r,"cylinder","#294c42",.025,.96,0,.3,.15,.29),this.mesh(r,"box","#3c6955",.16,.92,0,.5,.07,.56),this.mesh(r,"box","#eee1b5",.299,.77,-.11,.025,.08,.09),this.mesh(r,"box","#a55e36",-.35,.28,0,.31,.74,.64),this.mesh(r,"box","#e3b468",-.52,.37,0,.1,.17,.47),this.mesh(r,"box","#ede0ae",-.53,.07,0,.035,.23,.27),this.mesh(r,"box","#895b39",-.55,-.06,0,.12,.1,.66);const a=[];for(const c of[-1,1]){const h=new Zt;h.position.set(.045,.48,c*.34),r.add(h),this.mesh(h,"box","#e29a50",.015,-.16,0,.18,.33,.18),this.mesh(h,"box","#e1a568",.15,-.31,0,.36,.15,.16),this.mesh(h,"sphere","#ddb68b",.34,-.31,0,.1,.1,.095),a.push(h)}const o=new Zt;o.position.set(.61,.18,.26),r.add(o),this.mesh(o,"box","#274740",0,0,0,.74,.15,.15),this.mesh(o,"box","#d9b775",.02,.03,0,.28,.08,.19),this.mesh(o,"cylinder","#273532",.41,0,0,.075,.28,.075).rotation.z=Math.PI/2;const l=new le(this.geometries.ring,this.material("#f5db97",{basic:!0,opacity:.7}));return l.rotation.x=-Math.PI/2,l.position.y=.06,l.scale.setScalar(.79),t.add(l),t.userData.body=e,t.userData.upper=r,t.userData.legs=s,t.userData.arms=a,t.userData.gun=o,t.userData.ring=l,t.scale.setScalar(1.46),t}makeEnemy(t="walker",e=.6,n=null){const s=new Zt,r=t==="boss",a=t==="dog"||t==="hound",o=t==="brute"||t==="tank"||r,l=new Zt;s.add(l);const c=r?bu[n]||bu.default:null,h=r?c.body:o?"#ac5760":"#cf726d";if(a){this.mesh(l,"box","#904b54",0,.45,0,1,.48,.4),this.mesh(l,"ico","#d07471",.55,.65,0,.35,.28,.26);for(const y of[-.35,.35])for(const _ of[-.2,.2])this.mesh(l,"box","#603d48",y,.22,_,.13,.4,.12);this.mesh(l,"cone","#693e4b",.55,.94,-.15,.12,.3,.1),this.mesh(l,"cone","#693e4b",.55,.94,.15,.12,.3,.1),this.mesh(l,"box","#f4b5a1",.83,.7,.15,.03,.08,.07,{emissive:"#ed937c"}),s.scale.setScalar(1.2)}else{if(this.mesh(l,"ico",h,0,.92,0,.44,.59,.4),this.mesh(l,"ico",r?c.head:o?"#ceb2a1":"#ba8f84",.04,1.54,0,.28,.32,.27),this.mesh(l,"box","#683f47",.04,.3,-.19,.19,.6,.19),this.mesh(l,"box","#683f47",.04,.3,.19,.19,.6,.19),this.mesh(l,"box",h,.19,.91,-.45,.24,.71,.23).rotation.z=-.48,this.mesh(l,"box",h,.19,.91,.45,.24,.71,.23).rotation.z=-.48,this.mesh(l,"ico","#f08b86",-.1,1.36,-.27,.19,.24,.22),this.mesh(l,"box","#fad0a5",.292,1.58,-.13,.025,.08,.07,{emissive:"#f08b86"}),this.mesh(l,"box","#fad0a5",.292,1.58,.13,.025,.08,.07,{emissive:"#f08b86"}),o)if(this.mesh(l,"ico",r?c.back:"#713f4a",-.16,1.03,0,.64,.71,.6),r&&n)this.addGuardianParts(l,n,c);else for(let y=0;y<5;y++)this.mesh(l,"cone",r?c.spike[y%2]:y%2?"#d69088":"#e2b4a0",-.24+y%2*.3,1.7+y%3*.16,(y-2)*.2,.17,.48,.17).rotation.z=-.25;s.scale.setScalar(r?3.65:o?2.19:1.46)}const f=this.disc("#322f35",.19,a?.7:.6);s.add(f);const u=this.makeWarningRing();u.visible=!1,s.add(u);const d=new le(this.geometries.warnDisc,this.warningMaterial(Fe.red,.26,10));d.rotation.x=-Math.PI/2,d.visible=!1,s.add(d);const m=this.makeWarningLane();m.visible=!1,s.add(m),s.userData.body=l,s.userData.telegraph=u,s.userData.warningFill=d,s.userData.charge=m;const x=new le(this.geometries.ring,this.material("#f4796f",{basic:!0,opacity:.45}));x.rotation.x=-Math.PI/2,x.position.y=.07/s.scale.y,x.scale.setScalar((e||.7)*1.35/s.scale.x),x.visible=!1,s.add(x),s.userData.arrival=x;const g=new Zt;g.position.y=a?1.32:o?2.34:2.1,g.scale.setScalar(1/s.scale.x);const p=r?2.6:o?1.9:1.45;this.mesh(g,"box","#18342e",0,0,0,p+.14,.25,.03,{basic:!0,overlay:!0});const M=this.mesh(g,"box","#b9e88b",0,0,.025,p,.13,.035,{basic:!0,overlay:!0});return g.userData.fill=M,g.userData.width=p,s.add(g),s.userData.health=g,s.userData.type=t,s.userData.model=r?`boss:${n||""}`:t,s}addGuardianParts(t,e,n){const s=(...r)=>this.mesh(t,...r);if(e==="tollkeeper"){for(const r of[-.78,.78])s("box","#5b5e66",.5,.8,r,.2,1.6,.2),s("box","#d8c58f",.5,1.66,r,.28,.12,.28);for(let r=0;r<5;r++)s("box",r%2?"#e8e0c4":"#c4453c",.5,1.28,-.62+r*.31,.1,.16,.32);s("box","#3d3f47",.38,1.9,0,.5,.12,1.3),s("box","#3d3f47",-.2,1.95,0,.4,.2,.9),s("cylinder","#4a3a2a",.5,1.85,.78,.03,.4,.03),s("box","#ffcf6a",.5,1.52,.78,.2,.26,.2,{emissive:"#ffb23e"}),s("cone","#3d3f47",.5,1.72,.78,.26,.16,.26)}else if(e==="rootbound"){for(let r=0;r<6;r++){const a=r%2?1:-1;s("cone",r%3?"#6a4a2e":"#4b3a26",-.1+r%3*.1,1.75+r%3*.2,a*(.2+r*.06),.1,.85+r%3*.2,.1).rotation.set(a*.55,0,-.25+r*.06)}for(let r=0;r<5;r++)s("cone","#5a4028",-.55-r*.08,.18,(r-2)*.32,.14,.75,.14).rotation.set((r-2)*.22,0,1.25);for(const[r,a,o]of[[-.1,2.35,-.5],[.05,2.5,.45],[-.3,2.15,.05],[.1,1.95,-.2]])s("ico","#6fa34f",r,a,o,.24,.2,.24);s("ico","#3f6a3a",-.1,.62,.52,.28,.16,.26)}else if(e==="undertow"){s("ico","#2a6f78",-.28,1.45,0,.88,.62,.8),s("ico","#3b98a0",-.3,1.8,0,.6,.36,.56);for(let r=0;r<4;r++)s("box","#78d0c4",-.28-r*.12+(r>1?.2:0),1.95-Math.abs(r-1.5)*.15,0,.09,.1,.8-Math.abs(r-1.5)*.18);for(const[r,a]of[[.1,-.5],[-.5,.45],[-.2,.62],[-.55,-.4]])s("cone","#d8e8d4",r,1.3,a,.09,.18,.09);for(let r=0;r<5;r++)s("box","#2f6a55",-.5,.55,(r-2)*.22,.06,.5+r%2*.2,.08)}else if(e==="ochre"){for(let r=0;r<4;r++)s("box",r%2?"#d99a52":"#b8763a",-.18-r*.02,1.15+r*.26,(r-1.5)*.02,.62-r*.06,.22,1.1-r*.16).rotation.z=-.12;for(const r of[-.62,.62])s("box","#d9a460",.05,1.25,r,.36,.2,.3);s("cylinder","#f2d18a",-.6,1.45,0,.9,.06,.9,{emissive:"#e8b052"}).rotation.z=Math.PI/2;for(let r=0;r<5;r++)s("cone","#e0b070",-.6,1.45+Math.sin(r*1.26)*.55,Math.cos(r*1.26)*.55,.1,.24,.1).rotation.x=r*1.26-Math.PI/2}else if(e==="cairn"){[["#6c777e",1,.55],["#8a959a",1.5,.45],["#a4adb0",1.95,.36],["#c9d0cf",2.3,.26]].forEach(([r,a,o],l)=>s("ico",r,-.25+l%2*.12,a,l%2?.1:-.1,o*1.4,.28,o*1.4));for(const r of[-.6,.6])s("ico","#8a959a",.05,1.3,r,.3,.34,.3)}else if(e==="warden"){for(const r of[-.6,.6])s("box","#2f2840",0,1.45,r,.5,.24,.36);for(let r=0;r<5;r++)s("cone",r%2?"#e8964a":"#8a7aa0",-.2+r%2*.25,1.8+r%3*.2,(r-2)*.2,.17,.55,.17,r%2?{emissive:"#e8964a"}:{}).rotation.z=-.25;s("box","#ffcf6a",.3,1.1,0,.1,.22,.22,{emissive:"#ffb23e"})}}initializeEnemyBatches(){this.silhouetteBatches=new Map,this.silhouetteMaterials={edge:this.makeSilhouetteMaterial(Dn.edge,Dn.grow),fill:this.makeSilhouetteMaterial(Dn.fill,0)};for(const t of["walker","dog","brute","boss",...Sv.map(e=>`boss:${e}`)]){const e=t.startsWith("boss:")?this.makeEnemy("boss",.6,t.slice(5)):this.makeEnemy(t),n=new Map,s=new Map;e.traverse(r=>{if(!r.isMesh)return;const a=`${r.geometry.uuid}/${r.material.uuid}`,o=(n.get(a)||0)+1;n.set(a,o);let l=this.enemyBatches.get(a);if(l||(l={geometry:r.geometry,material:r.material,maxParts:1,castShadow:!1,receiveShadow:!1,used:0,mesh:null},this.enemyBatches.set(a,l)),l.maxParts=Math.max(l.maxParts,o),l.castShadow||=r.castShadow,l.receiveShadow||=r.receiveShadow,!r.material.isMeshStandardMaterial)return;const c=(s.get(r.geometry.uuid)||0)+1;s.set(r.geometry.uuid,c);let h=this.silhouetteBatches.get(r.geometry.uuid);h||(h={geometry:r.geometry,maxParts:1,used:0,fill:null,edge:null},this.silhouetteBatches.set(r.geometry.uuid,h)),h.maxParts=Math.max(h.maxParts,c)})}this.resizeEnemyBatches(this.enemyCapacity)}makeSilhouetteMaterial(t,e,n=!1){const s=new hi({color:t,depthTest:!0,depthFunc:Pa,depthWrite:!1,toneMapped:!1,fog:!1});return s.onBeforeCompile=r=>{r.uniforms.silhouetteBias=this.silhouetteBias,r.vertexShader=`uniform float silhouetteBias;
`+r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
          ${e?`transformed += sign(position) * ${e.toFixed(4)} / vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));`:""}`).replace("#include <project_vertex>",`#include <project_vertex>
 gl_Position.z -= silhouetteBias;`),n&&(r.fragmentShader=r.fragmentShader.replace("void main() {",`void main() {
 if (mod(floor(gl_FragCoord.x) + floor(gl_FragCoord.y), 2.) < .5) discard;`))},s.customProgramCacheKey=()=>`silhouette-${e}-${n}`,s}warningMaterial(t,e,n,s=!1){this.warningMaterials||=new Map;const r=`${t}-${e}-${n}-${s}`;if(!this.warningMaterials.has(r)){const a=s?this.makeSilhouetteMaterial(t,0,!0):new hi({color:t,transparent:!0,opacity:e,depthWrite:!1,toneMapped:!1});a.userData.renderOrder=n,this.warningMaterials.set(r,a)}return this.warningMaterials.get(r)}isSignatureShape(t){return!!t&&["burst","line","sweep","rockfall"].includes(t.kind)&&(t.signature===!0||t.kind!=="burst"||Number.isFinite(t.inner))}sectorGeometry(t,e,n,s,r=40){const a=[],o=[];for(let c=0;c<=r;c++){const h=n+(s-n)*c/r;a.push(Math.cos(h)*t,0,-Math.sin(h)*t,Math.cos(h)*e,0,-Math.sin(h)*e),c<r&&o.push(2*c,2*c+1,2*c+2,2*c+1,2*c+3,2*c+2)}const l=new Pe;return l.setAttribute("position",new ie(a,3)),l.setIndex(o),l.computeVertexNormals(),l}buildSignature(t){const e=new Zt,n=Math.PI*2,s=(o,l,c,h,f,u=e)=>{const d=new le(o,this.warningMaterial(l,c,h));return d.renderOrder=h,d.position.y=f,u.add(d),d},r=(o,l,c=0,h=n)=>{const f=this.sectorGeometry(Math.max(0,o-.12),l+.12,c,h,64),u=this.sectorGeometry(o,l,c,h,64);s(f,Fe.dark,.62,11,.02),s(u,Fe.red,.94,12,.03)},a=t.radius||3;if(t.kind==="burst"){const o=t.inner||0;s(this.sectorGeometry(o,a,0,n,64),Fe.red,.28,10,.01),r(a-.5,a),o>0&&(r(o,o+.4),s(this.sectorGeometry(0,o-.1,0,n,48),"#dff2d2",.14,9,.005))}else if(t.kind==="line"){const o=t.length||24,l=t.width||3.2,c=this.makeWarningLane();c.position.x=o/2,c.scale.set(o,1,l);for(const h of c.userData.bars)h.cap?(h.mesh.scale.x=h.width/o,h.mesh.position.x=.5-h.mesh.scale.x/2):(h.mesh.scale.z=h.width/l,h.mesh.position.z=h.side*(.5-h.mesh.scale.z/2+(h.dark?.03:0)));e.add(c)}else if(t.kind==="sweep"){const o=t.arc||.96;s(this.sectorGeometry(0,a,-o,o,48),Fe.red,.28,10,.01),r(a-.5,a,-o,o);for(const l of[-1,1]){const c=s(new gi(1,.02,.5),Fe.red,.94,12,.03);c.scale.x=a,c.position.set(Math.cos(o)*a/2,.03,-l*Math.sin(o)*a/2),c.rotation.y=l*o}}else e.userData.rocks=(t.points||[t]).map(()=>{const o=new Zt;return s(this.sectorGeometry(0,a,0,n,40),Fe.red,.28,10,.01,o),s(this.sectorGeometry(a-.45-.12,a+.12,0,n,40),Fe.dark,.62,11,.02,o),s(this.sectorGeometry(a-.45,a,0,n,40),Fe.red,.94,12,.03,o),e.add(o),o});return e}syncSignature(t,e){const n=t.telegraph,s=`sig-${t.id}`,r=[n.kind,n.inner,n.radius,n.length,n.width,n.arc,n.points?.length].join("|");let a=this.entities.get(s);(!a||a.userData.signature!==r)&&(a&&this.scene.remove(a),a=this.buildSignature(n),a.userData.signature=r,this.entities.set(s,a),this.scene.add(a));const o=(l,c)=>this.terrainHeight(l,c,e.seed,e.legLength)+.075;if(n.kind==="rockfall"){a.position.set(0,0,0),a.rotation.y=0;const l=n.points||[n];a.userData.rocks.forEach((c,h)=>{const f=l[h]||l[0];c.position.set(f.x,o(f.x,f.y),-f.y)})}else{const l=n.x??t.x,c=n.y??t.y;a.position.set(l,o(l,c),-c),a.rotation.y=Math.PI/2-(n.angle||0)}}makeWarningRing(){const t=new Zt;this.geometries.warnRing||=new cr(.72,1,48),this.geometries.warnRingEdge||=new cr(.64,1.09,48),this.geometries.warnDisc||=new Na(1,48);const e=(n,s,r)=>{const a=new le(n,s);a.rotation.x=-Math.PI/2,a.position.y=r,t.add(a)};return e(this.geometries.warnRingEdge,this.warningMaterial(Fe.dark,.62,11),.004),e(this.geometries.warnRing,this.warningMaterial(Fe.red,.94,12),.008),e(this.geometries.warnRing,this.warningMaterial(Fe.red,1,-4,!0),.008),e(this.geometries.warnDisc,this.warningMaterial(Fe.red,1,-4,!0),.006),t}makeWarningLane(){const t=new Zt,e=[],n=[],s=(r,a,o,l,c,h)=>{const f=this.mesh(t,"box",r,0,c,0,1,.02,1,{basic:!0});f.material=this.warningMaterial(r,a,o,l),f.castShadow=f.receiveShadow=!1,h?e.push({mesh:f,...h}):n.push(f)};for(const r of[!1,!0]){s(Fe.red,.3,r?-4:10,r,.02);for(const a of[-1,1])s(Fe.dark,.62,r?-4:11,r,.03,{side:a,width:.36,dark:!0}),s(Fe.red,.94,r?-4:12,r,.04,{side:a,width:.2});s(Fe.dark,.62,r?-4:11,r,.03,{cap:!0,width:.36}),s(Fe.red,.94,r?-4:12,r,.04,{cap:!0,width:.2})}return t.userData.bars=e,t.userData.fills=n,t}resizeEnemyBatches(t){this.enemyCapacity=t;for(const e of this.enemyBatches.values()){e.mesh&&(this.scene.remove(e.mesh),e.mesh.dispose());const n=new ra(e.geometry,e.material,t*e.maxParts);n.instanceMatrix.setUsage(uh),n.count=0,n.visible=!1,n.frustumCulled=!1,n.renderOrder=e.material.userData.renderOrder??(e.material.userData.overlay?30:0),n.castShadow=e.castShadow,n.receiveShadow=e.receiveShadow,this.scene.add(n),e.mesh=n}for(const e of this.silhouetteBatches.values()){for(const n of[e.edge,e.fill])n&&(this.scene.remove(n),n.dispose());e.fill=new ra(e.geometry,this.silhouetteMaterials.fill,t*e.maxParts),e.edge=new ra(e.geometry,this.silhouetteMaterials.edge,t*e.maxParts),e.edge.instanceMatrix=e.fill.instanceMatrix,e.fill.instanceMatrix.setUsage(uh),e.edge.renderOrder=-3,e.fill.renderOrder=-2;for(const n of[e.edge,e.fill])n.count=0,n.visible=!1,n.frustumCulled=!1,this.scene.add(n)}}batchEnemy(t){t.updateMatrixWorld(!0);const e=t.userData.occluded;t.traverseVisible(n=>{if(!n.isMesh)return;const s=this.enemyBatches.get(`${n.geometry.uuid}/${n.material.uuid}`);if(!s||s.used>=s.mesh.instanceMatrix.count)return;s.mesh.setMatrixAt(s.used++,n.matrixWorld);const r=e&&n.material.isMeshStandardMaterial&&this.silhouetteBatches.get(n.geometry.uuid);r&&r.used<r.fill.instanceMatrix.count&&r.fill.setMatrixAt(r.used++,n.matrixWorld)})}finishEnemyBatches(){for(const t of this.enemyBatches.values())t.mesh.count=t.used,t.mesh.visible=t.used>0,t.used&&(t.mesh.instanceMatrix.clearUpdateRanges(),t.mesh.instanceMatrix.addUpdateRange(0,t.used*16),t.mesh.instanceMatrix.needsUpdate=!0);for(const t of this.silhouetteBatches.values())t.fill.count=t.edge.count=t.used,t.fill.visible=t.edge.visible=t.used>0,t.used&&(t.fill.instanceMatrix.clearUpdateRanges(),t.fill.instanceMatrix.addUpdateRange(0,t.used*16),t.fill.instanceMatrix.needsUpdate=!0)}chunkOccluders(t){if(t.userData.occluders)return t.userData.occluders;const e=[],n=new ce;return t.updateMatrixWorld(!0),t.traverse(s=>{if(!s.isInstancedMesh)return;s.geometry.boundingBox||s.geometry.computeBoundingBox();const{min:r,max:a}=s.geometry.boundingBox;for(let o=0;o<s.count;o++){s.getMatrixAt(o,n),n.premultiply(s.matrixWorld);const l=n.elements;let c=1/0,h=1/0,f=1/0,u=-1/0,d=-1/0,m=-1/0;for(let x=0;x<8;x++){const g=x&1?a.x:r.x,p=x&2?a.y:r.y,M=x&4?a.z:r.z,y=l[0]*g+l[4]*p+l[8]*M+l[12],_=l[1]*g+l[5]*p+l[9]*M+l[13],w=l[2]*g+l[6]*p+l[10]*M+l[14];y<c&&(c=y),y>u&&(u=y),_<h&&(h=_),_>d&&(d=_),w<f&&(f=w),w>m&&(m=w)}d>=Dn.minTop&&d-h>=1&&Math.min(u-c,m-f)>=.35&&Math.max(u-c,m-f)>=1&&e.push(c,h,f,u,d,m)}}),t.userData.occluders=new Float32Array(e)}enemyOccluded(t,e){const{x:n,y:s,z:r}=_v,a=Dn.heights[t.userData.type]||2.8,o=t.position.x,l=t.position.z;for(const c of this.chunks?.values()||[]){const h=this.chunkOccluders(c);for(let f=0;f<h.length;f+=6){const u=Math.max(0,(h[f]-e-o)/n,(h[f+2]-e-l)/r),d=Math.min(90,(h[f+3]+e-o)/n,(h[f+5]+e-l)/r);if(!(u>=d))for(const m of Dn.rays){const x=t.position.y+a*m;if(Math.max(u,(h[f+1]-x)/s)<Math.min(d,(h[f+4]-x)/s))return!0}}}return!1}updateEnemyOcclusion(t,e){const n=t.userData;this.time>=(n.nextOcclusion??0)&&(n.nextOcclusion=this.time+Dn.interval*(1+ne(n.occlusionPhase,7)*.4),this.enemyOccluded(t,e)&&(n.occludedUntil=this.time+Dn.hold)),n.occluded=this.time<(n.occludedUntil??0)}makeCourierOutline(){const t=new Zt,e=this.player.userData.body.clone(!0),n=this.player.userData.body.clone(!0);this.outlineMaterial=new hi({color:"#ffae35",depthTest:!1,depthWrite:!1,toneMapped:!1}),this.outlineEdgeMaterial=new hi({color:"#132d29",depthTest:!1,depthWrite:!1,toneMapped:!1});const s=[];this.player.userData.body.traverse(a=>s.push(a)),this.outlinePose=[];let r=0;return e.traverse(a=>{this.outlinePose.push([s[r++],a]),a.isMesh&&(a.material=this.outlineMaterial,a.castShadow=!1,a.receiveShadow=!1,a.renderOrder=21)}),r=0,n.traverse(a=>{this.outlinePose.push([s[r++],a]),a.isMesh&&(a.material=this.outlineEdgeMaterial,a.userData.occlusionEdge=!0,a.castShadow=!1,a.receiveShadow=!1,a.renderOrder=20)}),t.add(n),t.add(e),t.visible=!1,t}initHurtTint(){const t=new Map;this.hurtParts=[],this.player.userData.body.traverse(e=>{if(!(!e.isMesh||!e.material||e.material.isMeshBasicMaterial)){if(!t.has(e.material)){const n=e.material.clone();n.userData.base={color:n.color.clone(),emissive:n.emissive.clone(),intensity:n.emissiveIntensity},t.set(e.material,n),this.hurtParts.push(n)}e.material=t.get(e.material)}}),this.hurtColor=new jt("#e0322a"),this.hurtAmount=0,this.hurtTimer=0,this.hurtSeen=0}updateHurtTint(t,e=0){const n=Number.isFinite(t.hurtFlash)?t.hurtFlash:0;n>this.hurtSeen+1e-4&&(this.hurtTimer=_u),this.hurtSeen=n,this.hurtTimer=Math.max(0,this.hurtTimer-Math.max(0,e));const s=this.hurtTimer/_u,r=s<=0?0:Math.min(1,s*1.6);if(r!==this.hurtAmount){this.hurtAmount=r;for(const a of this.hurtParts){const o=a.userData.base;a.color.copy(o.color).lerp(this.hurtColor,r*.58),a.emissive.copy(o.emissive).lerp(this.hurtColor,r*.22),a.emissiveIntensity=o.intensity}}}animateCourier(t,e,n,s){this.updateHurtTint(t,n);const r=Math.min(1,Math.max(0,e)/3);this.walkBlend+=(r-this.walkBlend)*(1-Math.exp(-Math.max(0,n)*12)),e>.08&&n>0&&(this.gaitPhase+=n*(3.4+Math.min(12,e)*.95));const a=this.walkBlend;this.player.rotation.y=Math.PI/2-(t.angle||0);const o=this.player.userData.body,l=this.player.userData.upper;l.rotation.y=(t.angle||0)-this.courierFacing.update(t,s),l.rotation.z=Math.sin(this.gaitPhase)*.025*a,o.position.y=Math.abs(Math.sin(this.gaitPhase))*.023*a+Math.sin(this.time*2)*.005*(1-a),this.player.userData.legs.forEach((c,h)=>{const f=(this.gaitPhase+h*Math.PI)%(Math.PI*2),u=f<Math.PI,d=-Math.cos(f)*.225*a,x=.67-(.09+(u?Math.sin(f)*.145:0)*a-o.position.y),g=.32,p=.3,M=-Math.acos(ao.clamp((d*d+x*x-g*g-p*p)/(2*g*p),-1,1)),y=Math.atan2(d,x)-Math.atan2(p*Math.sin(M),g+p*Math.cos(M));c.hip.rotation.z=y,c.knee.rotation.z=M,c.ankle.rotation.z=-(y+M)+(u?-.12*Math.sin(f)*a:0)}),this.player.userData.arms[0].rotation.z=-.08+Math.sin(this.gaitPhase+Math.PI)*.28*a,this.player.userData.arms[1].rotation.z=-.08+Math.sin(this.gaitPhase)*.1*a,this.player.userData.gun.rotation.z=Math.sin(this.gaitPhase)*.035*a}xrayMaterial(t){this.xrayMaterials||=new Map,this.xrayUniforms||={xrayCenters:{value:Array.from({length:4},()=>new xe)}};let e=this.xrayMaterials.get(t);return e||(e=t.clone(),e.userData.xray=!0,e.onBeforeCompile=n=>{n.uniforms.xrayCenters=this.xrayUniforms.xrayCenters,n.vertexShader=`varying float vXrayY;
`+n.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
        #ifdef USE_INSTANCING
        vXrayY = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).y;
        #else
        vXrayY = (modelMatrix * vec4(transformed, 1.0)).y;
        #endif`),n.fragmentShader=`varying float vXrayY;
        uniform vec4 xrayCenters[4];
        const float xrayBayer[16] = float[16](0., 8., 2., 10., 12., 4., 14., 6., 3., 11., 1., 9., 15., 7., 13., 5.);
        `+n.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        {
          vec3 xv = -vViewPosition;
          float cut = 0.;
          for (int i = 0; i < 4; i++) {
            vec4 c = xrayCenters[i];
            if (c.w > 0.) cut = max(cut, step(c.z + ${Ai.margin.toFixed(2)}, xv.z) * (1. - smoothstep(c.w * .4, c.w, length(xv.xy - c.xy))));
          }
          ivec2 q = ivec2(mod(gl_FragCoord.xy, 4.));
          if (vXrayY > ${Ai.height.toFixed(2)} && cut > (xrayBayer[q.x + q.y * 4] + .5) / 16.) discard;
        }`)},e.customProgramCacheKey=()=>"xray",this.xrayMaterials.set(t,e),e)}applyXray(t){t.userData.xray||(t.userData.xray=!0,t.traverse(e=>{const n=e.material;e.isInstancedMesh&&n.isMeshStandardMaterial&&!n.vertexColors&&!n.transparent&&(e.material=this.xrayMaterial(n))}))}updateXray(){this.xrayUniforms||={xrayCenters:{value:Array.from({length:4},()=>new xe)}};const t=this.xrayUniforms.xrayCenters.value,e=this.camera.matrixWorldInverse;let n=0;if(this.xrayEnabled===!1)for(const a of t)a.set(0,0,0,0);if(this.xrayEnabled===!1)return;const s=(a,o,l,c)=>{const h=this.tempVector.set(a,o,l).applyMatrix4(e);t[n++].set(h.x,h.y,h.z,c)};s(this.player.position.x,this.player.position.y+1.05*this.player.scale.y,this.player.position.z,Ai.radius);const r=[];for(const[a,o]of this.entities){if(!o.userData.occluded||!a.startsWith("enemy-"))continue;const l=Math.hypot(o.position.x-this.player.position.x,o.position.z-this.player.position.z);l<Ai.range&&r.push([l,o])}r.sort((a,o)=>a[0]-o[0]);for(const[,a]of r.slice(0,Ai.fights))s(a.position.x,a.position.y+Dn.heights[a.userData.type]*.5,a.position.z,Ai.fightRadius*(a.userData.type==="boss"?1.8:a.userData.type==="brute"?1.3:1));for(;n<t.length;n++)t[n].set(0,0,0,0)}updateCourierVisibility(){if(this.time>=this.nextOcclusionCheck){this.nextOcclusionCheck=this.time+1/6;const t=this.player.position.clone();t.y+=1.05*this.player.scale.y;const e=t.clone().project(this.camera);this.occlusionRay.setFromCamera({x:e.x,y:e.y},this.camera),this.occlusionRay.far=Math.max(0,this.occlusionRay.ray.origin.distanceTo(t)-.25),this.scene.updateMatrixWorld(!0);let n=!1;for(const s of this.chunks.values())if(this.occlusionHits.length=0,this.occlusionRay.intersectObject(s,!0,this.occlusionHits),this.occlusionHits.some(r=>!(this.xrayEnabled!==!1&&r.object.material?.userData.xray&&r.point.y>Ai.height))){n=!0;break}this.courierHidden=n}if(this.courierOutline.visible=!!this.courierHidden,this.outlineMaterial.color.set("#ffae35").lerp(this.outlineHurtColor||=new jt("#ff2a2a"),Math.min(1,this.hurtAmount*1.4)),!!this.courierOutline.visible){this.courierOutline.position.copy(this.player.position),this.courierOutline.rotation.copy(this.player.rotation),this.courierOutline.scale.copy(this.player.scale);for(const[t,e]of this.outlinePose)e.position.copy(t.position),e.rotation.copy(t.rotation),e.scale.copy(t.scale),e.userData.occlusionEdge&&e.scale.multiplyScalar(1.2)}}makeProp(t,e){const n=new Zt,s=t.corrupted?"#494748":bv.bark,r=t.corrupted?"#697166":e.trees,a=t.variant||0;switch(t.type){case"tree":case"pine":case"palm":{const o=t.type==="palm";if(this.mesh(n,"cylinder",s,0,1.15,0,.16,2.3,.16),o)for(let l=0;l<6;l++){const c=this.mesh(n,"ico",r,Math.cos(l*1.047)*.82,2.6,Math.sin(l*1.047)*.82,1.2,.2,.4);c.rotation.y=-l*1.047}else t.type==="pine"||a===1?(this.mesh(n,"cone",r,0,2.35,0,1.18,2.4,1.18),this.mesh(n,"cone",t.corrupted?"#545e59":"#739383",0,3.15,0,.88,1.85,.88)):(this.mesh(n,"ico",r,0,2.72,0,1.4,1.33,1.2),this.mesh(n,"ico",t.corrupted?"#7b796a":"#82a687",.65,3,.23,.82,.91,.81),this.mesh(n,"ico",r,-.65,2.43,-.35,.93,.92,.93));t.corrupted&&this.addGrowth(n,0,0,.8);break}case"building":{const o=e.id==="village",l=o?2.4+a*.3:3.3+a*.65,c=["#b5b397","#a0ac99","#c2b49d","#8d9a8c"][a];if(this.mesh(n,"box",c,0,l/2,0,3.9,l,3.2),this.mesh(n,"box","#68796f",0,.19,0,4.06,.38,3.37),o){const h=this.mesh(n,"cone",a%2?"#826e62":"#738279",0,l+.65,0,3.25,1.3,2.55);h.rotation.y=Math.PI/4,this.mesh(n,"box","#56695e",.7,l+.65,.4,.35,1.6,.35)}else this.mesh(n,"box","#d2c6a7",0,l+.06,0,4.13,.17,3.43),this.mesh(n,"box","#697b71",-.9,l+.35,-.5,1.07,.62,.8),this.mesh(n,"cylinder","#8a9385",.87,l+.5,.2,.43,.85,.43),this.mesh(n,"box","#525f59",.9,l+.97,.2,.96,.13,.96),this.mesh(n,"box","#b7b99c",0,l+.21,-1.57,4.02,.29,.14),this.mesh(n,"box","#b7b99c",-1.97,l+.21,0,.14,.29,3.32);for(let h=0;h<Math.floor(l/1.5);h++){for(let f=0;f<3;f++)this.mesh(n,"box","#526f6a",-1.15+f*1.13,1.1+h*1.45,1.615,.62,.72,.025),this.mesh(n,"box","#c1c09f",-1.15+f*1.13,.7+h*1.45,1.66,.77,.12,.14);for(let f=0;f<2;f++)this.mesh(n,"box","#526f6a",1.965,1.1+h*1.45,-.82+f*1.5,.025,.72,.6)}this.mesh(n,"box","#394f43",0,.78,1.64,.75,1.56,.05),this.mesh(n,"box","#998d70",0,.08,1.89,1.04,.16,.66),t.corrupted&&(this.addGrowth(n,1.75,.01,1.5),this.mesh(n,"box","#484e4b",-.4,l*.7,1.635,.08,l*.65,.045).rotation.z=.31);break}case"car":{this.mesh(n,"box",a%2?"#9b7f69":"#889b91",0,.46,0,1.8,.56,.95),this.mesh(n,"box","#719086",-.13,.89,0,1.02,.51,.86),this.mesh(n,"box","#4f6865",-.13,.98,.435,.82,.29,.022),this.mesh(n,"box","#4f6865",-.13,.98,-.435,.82,.29,.022);for(const o of[-.59,.59])for(const l of[-.47,.47])this.mesh(n,"cylinder","#364847",o,.24,l,.24,.12,.24).rotation.x=Math.PI/2;this.mesh(n,"box","#d1c497",.92,.52,0,.06,.15,.64),this.mesh(n,"box","#735a4f",-.44,.75,.45,.5,.05,.11);break}case"mountain":{const o=yu[e.id]||yu.mountain,l={smooth:!0},c=5.5+a*1.2;this.mesh(n,"peak",o[0],0,c/2-.2,0,4.6,c,4.4,l).rotation.y=a*.7,this.mesh(n,"peak",o[1],1.7,c*.3,.9,3.1,c*.62,2.9,l).rotation.y=.4+a,this.mesh(n,"peak",o[2],-1.6,c*.25,-1,2.8,c*.5,2.7,l).rotation.y=1.1;for(let h=0;h<2;h++)this.mesh(n,"ico",o[h+1],Math.cos(h*2.6+a)*3.7,.35,Math.sin(h*2.6+a)*3.5,1-h*.2,.6,.85).rotation.y=h+a;o[3]&&(this.mesh(n,"peak",o[3],.05,c*.8,-.04,1.85,c*.42,1.78,l).rotation.y=a*.7);break}case"rubble":{for(let o=0;o<5;o++){const l=this.mesh(n,o%2?"box":"ico",["#8c9181","#717c72","#a39e85"][o%3],Math.cos(o*2.4)*.55,.15+o%2*.12,Math.sin(o*2.4)*.48,.35+o%3*.13,.26+o%2*.15,.38);l.rotation.y=o*.9,l.rotation.z=o*.23}this.mesh(n,"box","#685c4a",.1,.23,-.35,1.65,.1,.13).rotation.y=.37;break}case"rock":{this.mesh(n,"ico",Go[e.id]||"#849084",0,.55,0,1.3,.92,1.1),this.mesh(n,"ico",e.id==="tundra"?"#eef3f1":"#aab09b",-.68,.32,.44,.66,.5,.66),t.corrupted&&this.addGrowth(n,.6,.3,.4);break}case"cactus":{this.mesh(n,"cylinder","#788d73",0,1.08,0,.22,2.1,.22),this.mesh(n,"cylinder","#879b7a",-.42,1.1,0,.15,.95,.15),this.mesh(n,"box","#788d73",-.24,.7,0,.58,.25,.25),this.mesh(n,"cylinder","#879b7a",.42,1.55,0,.15,.76,.15),this.mesh(n,"box","#788d73",.25,1.24,0,.56,.22,.25);break}case"pole":{this.mesh(n,"cylinder","#746c59",0,2.1,0,.075,4.2,.075),this.mesh(n,"box","#596860",0,3.9,0,1.52,.12,.14),this.mesh(n,"box","#d0c29f",-.5,4.06,0,.14,.22,.14),this.mesh(n,"box","#d0c29f",.5,4.06,0,.14,.22,.14);for(let o=0;o<4;o++){const l=this.mesh(n,"box","#4f6056",-.5,3.65+Math.abs(o-1.5)*.23,-4.5-o*9,.035,.035,9.1);l.rotation.x=(o<2?1:-1)*.05}break}case"sign":{this.mesh(n,"box","#7d7a61",0,.83,0,.08,1.66,.1),this.mesh(n,"box","#c6b784",0,1.6,0,.85,.47,.12),this.mesh(n,"box","#596e61",.04,1.6,.075,.39,.075,.018),this.mesh(n,"box","#596e61",.2,1.6,.078,.12,.2,.018).rotation.z=-.75;break}case"carpile":{const o=["#5b4a43","#6f5446","#4c4a47","#7d5b45"];this.mesh(n,"ico","#3a3633",0,.05,0,2.2,.12,1.9);for(let l=0;l<3;l++){const c=new Zt,h=l*2.1+a,f=l===2;c.position.set(Math.cos(h)*(f?.2:.85),f?.9:0,Math.sin(h)*(f?.2:.85)),c.rotation.set(f?.3:0,h*1.3,f?.22:l?.1:-.08),this.mesh(c,"box",o[(l+a)%4],0,.42,0,1.9,.55,1),this.mesh(c,"box","#3d3a38",-.15,.85,0,1.05,.42,.9);for(const u of[-.6,.6])this.mesh(c,"cylinder","#262828",u,.22,.5,.23,.14,.23).rotation.x=Math.PI/2;n.add(c)}this.mesh(n,"cylinder","#262828",1.35,.2,-1.05,.36,.4,.36);break}case"collapsed":{const o=["#a0a491","#8d9a8c","#b5ad97","#9a8f7e"][a];this.mesh(n,"box",o,-1.4,1.6,-.2,.5,3.2,3.6),this.mesh(n,"box",o,.2,1.1,-1.9,2.9,2.2,.45),this.mesh(n,"box",o,.9,.55,1.6,1.4,1.1,.4).rotation.y=.3,this.mesh(n,"box","#3b4a45",-1.13,2.1,-.6,.05,.7,.6);const l=this.mesh(n,"box","#7f857a",.4,.95,.1,3.1,.3,3.3);l.rotation.z=.52;for(let c=0;c<5;c++)this.mesh(n,c%2?"box":"ico",["#717c72","#8c9181","#a39e85"][c%3],Math.cos(c*1.9)*1.7,.25,Math.sin(c*1.9)*1.6,.5+c%3*.2,.4,.5).rotation.y=c;for(let c=0;c<3;c++)this.mesh(n,"box","#5a4a40",-1.2+c*.25,3.35,-.8+c*.5,.04,.5,.04).rotation.z=.3-c*.25;break}case"rubblewall":{for(let o=0;o<7;o++)this.mesh(n,o%2?"box":"ico",["#8c9181","#717c72","#a39e85"][o%3],Math.cos(o*2.4)*(o?1.2:0),o?.45:.95,Math.sin(o*2.4)*(o?1.1:0),.9+o%3*.3,o?.7:1.2,.9).rotation.set(o*.3,o*.9,o*.2);this.mesh(n,"box","#c2b49d",.3,.45,1.5,1.8,.9,.45).rotation.y=.4,this.mesh(n,"box","#685c4a",-.2,1.2,.1,2.6,.12,.14).rotation.set(.3,.6,.25);break}case"containers":case"container":{const o=["#b0563f","#3f7a8a","#c49a3a","#5f7f4f"],l=t.type==="containers"&&a%2?2:1;for(let c=0;c<l;c++){const h=new Zt;h.position.y=c*2.5,h.rotation.y=c*.09,this.mesh(h,"box",o[(a+c*3)%4],0,1.25,0,2.4,2.45,5.9);for(const f of[-1.9,-.65,.65,1.9])this.mesh(h,"box","#3d4744",0,1.25,f,2.46,2.2,.07);this.mesh(h,"box","#e1d2a8",0,1.3,2.97,1.5,.4,.04),n.add(h)}break}case"pit":case"crevasse":case"mud":case"water":case"ditch":case"pool":{const o={pit:2.3,crevasse:2.4,mud:2.6,water:3.2,ditch:2.5,pool:1.5}[t.type],l=t.type==="crevasse"||t.type==="ditch"?1.25:1,c={pit:e.id==="cliff"?"#141a1c":"#211c18",crevasse:"#21405a",mud:"#4b3b2b",water:e.water,ditch:e.water,pool:e.water}[t.type],h={pit:e.id==="burned"?"#4a4038":"#6b5a45",crevasse:"#e6f1f2",mud:"#6a5640",water:"#7c8a63",ditch:"#6b5a45",pool:"#6d7a52"}[t.type];["water","ditch","pool"].includes(t.type)?this.mesh(n,"cylinder",h,0,-.5/2+.025,0,o*1.02/l,Ra.bank+.05,o*1.02*l).castShadow=!1:this.mesh(n,"cylinder",h,0,.025,0,o*1.02/l,.05,o*1.02*l),this.mesh(n,"cylinder",c,0,.05,0,o*.86/l,.05,o*.86*l),(t.type==="pit"||t.type==="crevasse")&&this.mesh(n,"cylinder",t.type==="pit"?"#0f0d0c":"#152b3d",0,.07,0,o*.55/l,.05,o*.6*l);const f=t.type==="pool"?3:7;for(let u=0;u<f;u++){const d=u*6.28/f+a,m=Math.cos(d)*o*.95/l,x=Math.sin(d)*o*.95*l;t.type==="crevasse"?this.mesh(n,"cone",u%2?"#d9eef2":"#bfe0ea",m,.35,x,.3,.8+u%3*.3,.3).rotation.z=Math.cos(d)*.5:["water","ditch","pool"].includes(t.type)&&u%2?this.mesh(n,"cone","#869a5a",m,.45,x,.09,.9,.09):this.mesh(n,"ico",h,m,.12,x,.45,.25,.4).rotation.y=d}if(t.type==="mud")for(let u=0;u<3;u++)this.mesh(n,"ico","#5d4a37",(u-1)*.7,.08,u%2*.6,.18,.1,.18);if(t.type==="pit"&&e.id==="burned")for(let u=0;u<3;u++)this.mesh(n,"box","#f08a3c",(u-1)*.6,.1,(u%2-.5)*.7,.16,.06,.16,{emissive:"#e0602a"});break}case"logs":{const o=t.charred?"#2e2a28":"#6b5a44",l=t.charred?"#4a3a32":"#b39a6c";for(const[c,h,f]of[[-.5,.45,0],[.5,.45,.3],[0,1.2,-.2]])this.mesh(n,"cylinder",o,c,h,f,.45,4.9,.45).rotation.x=Math.PI/2,this.mesh(n,"cylinder",l,c,h,f+2.46,.4,.04,.4).rotation.x=Math.PI/2;if(this.mesh(n,"ico",t.charred?"#3a3330":"#5e5444",-.4,.9,-2.5,.9,1.1,.3),this.mesh(n,"box",o,.9,.9,-.6,.12,.12,1.4).rotation.set(.4,.5,.6),t.charred)for(let c=0;c<3;c++)this.mesh(n,"box","#f08a3c",-.3+c*.35,.92,-1+c*.9,.14,.05,.14,{emissive:"#e0602a"});else this.mesh(n,"ico","#4d7a45",.5,.85,1.2,.5,.15,.9);break}case"thicket":{const o=e.id==="burned"?"#3a3632":"#2f5a3c";for(let l=0;l<5;l++)this.mesh(n,"ico",l%2?o:e.trees,Math.cos(l*1.3)*(l?1.1:0),.9+l%2*.35,Math.sin(l*1.3)*(l?1:0),1.15-l%2*.15,1.1+l%3*.3,1.05);for(let l=0;l<7;l++)this.mesh(n,"cone","#6a4a3a",Math.cos(l*.9)*1.7,.9+l%3*.4,Math.sin(l*.9)*1.6,.08,.9,.08).rotation.set(Math.sin(l*.9)*1.1,0,-Math.cos(l*.9)*1.1);for(let l=0;l<3;l++)this.mesh(n,"ico","#c25a54",Math.cos(l*2.1)*.9,1.75,Math.sin(l*2.1)*.8,.12,.12,.12);break}case"rockfall":{const o=Go[e.id]||"#849084";for(const[l,c,h,f]of[[0,.9,0,1.4],[1.2,.55,.8,1],[-1.1,.5,.9,.85],[.6,.45,-1.2,.9],[-.9,.4,-.9,.7],[.2,1.9,.3,.7]])this.mesh(n,"ico",f<.8?e.id==="tundra"?"#eef3f1":"#aab09b":o,l,c,h,f,f*.82,f*.95).rotation.set(l,h,c);break}case"cliff":{const o=e.id==="canyon",l={smooth:!0},c=o?["#a9583a","#c9774a","#9c4e33","#c06a42"]:["#7f8c84","#98a397","#8a978c","#a3ad9f"],h=4.4+a*.7;this.mesh(n,"peak",c[a%2?2:0],-.25,h/2,-.3,2.5,h,2.6,l).rotation.y=a*1.3,this.mesh(n,"peak",c[1],.9,h*.34,.95,1.9,h*.68,1.9,l).rotation.y=2+a,a%2===0&&(this.mesh(n,"peak",o?"#8a8a4a":e.id==="mountain"?"#e3e8e0":"#5d7d64",-.22,h*.9,-.28,.9,h*.22,.95,l).rotation.y=a*1.3),this.mesh(n,"ico",c[3],1.7,.45,-1.4,1,.7,.85).rotation.y=a;break}case"dune":{this.mesh(n,"ico",e.verge,0,0,0,3.4,1.9,3.1),this.mesh(n,"ico","#efc27a",.9,.55,-.6,1.9,1.5,1.6),this.mesh(n,"cone","#a29c74",-2.2,.3,1.8,.14,.6,.14);break}case"icewall":{const o=["#bfe3ea","#a5d3df","#d9f0f3"];for(let l=0;l<4;l++)this.mesh(n,"box",o[l%3],(l%2-.5)*.5,.7+Math.floor(l/2)*1.35,(l<2?l-.5:l-2.5)*2.1,2.6-Math.floor(l/2)*.5,1.4,2.2).rotation.y=(l-1.5)*.15;this.mesh(n,"box","#f2f6f4",0,2.8,0,1.9,.2,3.8),this.mesh(n,"cone","#d9f0f3",.9,3.2,1,.3,1.1,.3);break}case"hedge":{for(let o=0;o<4;o++){const l=-1.55+o*1.03+(o%2?.12:-.08),c=1+(o+a)%3*.14;this.mesh(n,"ico",["#3f6e3c","#4f8048","#467640"][(o+a)%3],(o%2-.5)*.25,.82*c,l,1.12*c,.95*c,.85*c).rotation.y=o*1.7+a}this.mesh(n,"ico","#5a8a4e",.2,1.55,-.4+a*.2,.6,.4,.7),this.mesh(n,"cylinder","#7d6a4f",-1.05,.55,1.75,.07,1.1,.07).rotation.z=.12;break}case"haywall":{for(const[o,l,c]of[[-.75,.72,0],[.75,.72,0],[0,1.95,.1]])this.mesh(n,"cylinder","#d6b25a",o,l,c,.72,1.3,.72).rotation.x=Math.PI/2,this.mesh(n,"cylinder","#e8cb7a",o,l,c+.66,.55,.03,.55).rotation.x=Math.PI/2;this.mesh(n,"box","#8a7352",0,.06,1.2,2.4,.12,.7);break}case"deadtree":{this.mesh(n,"cylinder","#5e5a4c",0,1.5,0,.16,3,.16),this.mesh(n,"box","#5e5a4c",.35,2.4,0,.09,1.1,.09).rotation.z=-.7,this.mesh(n,"box","#5e5a4c",-.3,2.8,.1,.08,.9,.08).rotation.z=.8,this.mesh(n,"box","#6f7f5a",.55,2.3,0,.05,.5,.05);break}case"reeds":{for(let o=0;o<5;o++){const l=Math.cos(o*2.3)*.35,c=Math.sin(o*2.3)*.3,h=.9+o%3*.25;this.mesh(n,"cone",o%2?"#8a9a5a":"#a0a866",l,h/2,c,.07,h,.07),o%2===0&&this.mesh(n,"box","#6a4a32",l,h+.05,c,.07,.22,.07)}break}case"charred":{this.mesh(n,"cylinder","#2e2a28",0,1.7,0,.27,3.4,.27),this.mesh(n,"cone","#2e2a28",0,3.75,0,.22,.7,.22),this.mesh(n,"box","#2e2a28",.45,2.5,0,.12,1.3,.12).rotation.z=-.75,this.mesh(n,"box","#3a3330",-.4,3,.1,.1,1,.1).rotation.z=.8,this.mesh(n,"ico","#3a3330",0,.08,0,1,.16,.9);for(const o of[1.2,2.3])this.mesh(n,"box","#f08a3c",.12,o,.26,.1,.3,.04,{emissive:"#e0602a"});break}case"embers":{this.mesh(n,"ico","#4a4440",0,.03,0,.8,.06,.7);for(let o=0;o<3;o++)this.mesh(n,"ico","#ef8a3c",(o-1)*.3,.08,o%2*.25,.1,.07,.1,{emissive:"#e0602a"});break}case"mesa":{const o=["#b0603f","#c9774a","#9c4e33"];this.mesh(n,"box",o[0],0,1.3,0,3.8,2.6,3.6).rotation.y=.2,this.mesh(n,"box",o[1],.1,3.3,0,3.2,1.6,3.1).rotation.y=-.15,this.mesh(n,"box",o[2],-.1,4.6,.1,2.8,1.1,2.7).rotation.y=.3,this.mesh(n,"box","#8a8a4a",-.1,5.2,.1,2.6,.12,2.5).rotation.y=.3,this.mesh(n,"ico",o[1],1.9,.4,1.5,.8,.6,.7);break}case"arch":{for(const o of[-1,1])this.mesh(n,"box","#b0603f",o*2.6,1.9,0,1.4,3.8,1.5).rotation.y=o*.1,this.mesh(n,"ico","#9c4e33",o*2.8,.4,.4,.8,.5,.7);this.mesh(n,"box","#c9774a",0,4.25,0,7,1.1,1.5),this.mesh(n,"box","#8a8a4a",0,4.85,0,6,.12,1.3);break}case"archleg":break;case"forksign":{this.mesh(n,"cylinder","#7d6a4f",0,1.25,0,.09,2.5,.09),this.mesh(n,"ico","#8f9688",0,.18,0,.45,.3,.45),this.mesh(n,"box",e.ground,(a?1:-1)*.42,1.05,0,.72,.95,.06),this.mesh(n,"box",e.trees,(a?1:-1)*.42,.62,0,.72,.14,.07),this.mesh(n,"box","#eddfb1",(a?1:-1)*.42,1.55,0,.8,.08,.08),this.mesh(n,"cone","#ef9f60",0,2.75,0,.14,.32,.14);for(const[o,l,c]of[[0,"#eddfb1",2.25],[(a?-1:1)*.75,"#ef9f60",1.75]]){const h=new Zt;h.position.y=c,h.rotation.y=o,this.mesh(h,"box",l,0,0,-.5,.1,.34,1.15),this.mesh(h,"cone",l,0,0,-1.25,.3,.4,.1).rotation.x=-Math.PI/2,n.add(h)}break}case"cairn":{for(let o=0;o<4;o++)this.mesh(n,"ico",o%2?"#a7ab98":"#8f9688",o%2*.08,.22+o*.32,0,.62-o*.12,.24,.55-o*.1).rotation.y=o;this.mesh(n,"box","#7d6a4f",.05,1.6,0,.05,.9,.05),this.mesh(n,"box","#ef9f60",.25,1.9,0,.4,.22,.03);break}case"lantern":{this.mesh(n,"cylinder","#5b4a3c",0,.8,0,.06,1.6,.06),this.mesh(n,"box","#5b4a3c",.14,1.58,0,.34,.05,.05),this.mesh(n,"box","#ffd27a",.28,1.4,0,.16,.22,.16,{emissive:"#f1b44f"}),this.mesh(n,"box","#3c3a36",.28,1.54,0,.22,.05,.22),this.mesh(n,"box",e.ground,-.18,1.32,0,.3,.2,.02);break}case"gatepillar":{const o=Ln[e.id]||Ln.city;if(o.timber)for(const[l,c]of[[-.4,-.4],[.4,-.4],[-.4,.4],[.4,.4]])this.mesh(n,"cylinder",o.wall[0],l,2.4,c,.32,4.8,.32),this.mesh(n,"cone",o.wall[1],l,5.05,c,.32,.5,.32);else this.mesh(n,"box",o.wall[0],0,2.2,0,1.6,4.4,1.6),this.mesh(n,"box",o.cap,0,4.5,0,1.9,.3,1.9),this.mesh(n,"box",o.wall[1],0,.25,0,1.9,.5,1.9);this.mesh(n,"box","#ffd27a",0,4.95,0,.3,.4,.3,{emissive:"#f1b44f"}),this.mesh(n,"box","#d76465",0,3.3,.85,1.1,1.4,.04);break}case"edgefence":{const o=Ln[e.id]||Ln.city,l=o.wall[a%o.wall.length];if(o.timber){for(let c=0;c<5;c++)this.mesh(n,"cylinder",o.wall[c%2],0,.72+c%2*.1,-2+c,.12,1.45+c%2*.2,.12),this.mesh(n,"cone",o.cap,0,1.55+c%2*.2,-2+c,.12,.26,.12);for(const c of[.5,1])this.mesh(n,"box",o.cap,0,c,0,.1,.12,4.6);for(const c of[-1,1])this.mesh(n,"box","#ef9f60",c*.06,.75,-1+a*.5,.04,.42,.5).rotation.x=.5}else if(o===Ln.city){this.mesh(n,"box",l,0,.55,-1.15,.55,1.1,2.2).rotation.y=.04,this.mesh(n,"box",o.wall[(a+1)%4],.04,.4,1.2,.55,.8,2.1).rotation.set(.05,-.05,0);for(let c=0;c<3;c++)this.mesh(n,"ico",["#8c9181","#717c72","#a39e85"][(c+a)%3],(c%2-.5)*.7,.15,-1.7+c*1.6,.45,.32,.5).rotation.y=c+a;for(const c of[-1,1])this.mesh(n,"box","#ef9f60",c*.285,.7,-1.2,.02,.18,.5).rotation.x=.6}else{const c=o===Ln.ice,h=c?"#e4eeec":js(e.verge),f=[-1.55,.05,1.5];this.mesh(n,"ico",h,0,.12,0,1.05,.62,2.95).rotation.y=(a-1.5)*.03;for(let u=0;u<3;u++){if((u+a)%4===3)continue;const d=.55+(u*2+a)%3*.17,m=((u+a)%2-.5)*.3,x=f[u]+((a+u)%3-1)*.25;c?this.mesh(n,"cone",u%2?"#cfeaf0":"#a9d6e2",m,.55+d*.45,x,.3,d*1.6,.3).rotation.set(.2*(u-1),0,(u%2-.5)*.4):this.mesh(n,"ico",o.wall[(u+a)%o.wall.length],m,.42+d*.38,x,d*1.05,d*.82,d*.95).rotation.set(u,a+u*2,u*.5)}if(!c)for(let u=0;u<2;u++)this.mesh(n,"cone",e.trees,(u-.5)*.5,.78,-.8+u*1.7+a*.1,.1,.5,.1)}break}case"gatewall":{const o=Ln[e.id]||Ln.city,l=o.wall[a%o.wall.length];if(o.timber){for(let c=0;c<6;c++)this.mesh(n,"cylinder",o.wall[(c+a)%2],-1.95+c*.78,1.1+c%3*.12,0,.36,2.2+c%3*.25,.36),this.mesh(n,"cone",o.cap,-1.95+c*.78,2.45+c%3*.25,0,.36,.5,.36);this.mesh(n,"box",o.cap,0,1.4,.38,4.6,.16,.1)}else this.mesh(n,"box",l,0,.75,0,4.5,1.5,1.1),this.mesh(n,"box",o.cap,0,1.55,0,4.6,.14,1.2),this.mesh(n,"ico",o.top,-1.05+a*.1,1.72,.05,1.35,.26,.52).rotation.y=.06*(a-1.5),this.mesh(n,"ico",o.wall[(a+1)%o.wall.length],1.2,1.7,-.08,.95,.22,.48).rotation.y=-.1;for(let c=0;c<3;c++)this.mesh(n,"box","#ef9f60",-1.4+c*1.4,.75,.58,.5,.18,.02).rotation.z=.6;break}case"planter":case"plazarim":{const o=t.type==="planter"?"planter":Mv[e.id]||"planter";if(o==="planter")this.mesh(n,"box","#8d8a78",0,.25,0,.9,.5,.9),this.mesh(n,"ico","#5f8a55",0,.62,0,.48,.32,.46);else if(o==="stone")this.mesh(n,"box","#9aa196",0,1.1,0,.8,2.2,.6).rotation.z=(a-1.5)*.08,this.mesh(n,"ico","#5f7f5a",0,2.2,0,.45,.14,.35),this.mesh(n,"ico","#8f9688",.5,.2,.3,.4,.3,.35);else if(o==="post")this.mesh(n,"cylinder","#8a7352",0,.8,0,.2,1.6,.2),this.mesh(n,"cylinder","#e8dcc0",0,1.2,0,.24,.12,.24),this.mesh(n,"ico","#d76465",.35,.25,0,.25,.25,.25);else if(o==="block")this.mesh(n,"box",e.id==="canyon"?"#b0603f":"#c98c5c",0,.45,0,1.2,.9,.9).rotation.y=a*.3,this.mesh(n,"box",e.id==="canyon"?"#c9774a":"#d8b47c",.1,1.1,0,.8,.45,.7).rotation.y=-a*.2;else if(o==="ice")this.mesh(n,"cone","#cfeaf0",0,.8,0,.4,1.6,.4).rotation.z=.1,this.mesh(n,"cone","#a9d6e2",.4,.45,.2,.26,.9,.26).rotation.z=-.3;else if(o==="reeds"){this.mesh(n,"cylinder","#8a7352",0,.6,0,.12,1.2,.12);for(let l=0;l<4;l++)this.mesh(n,"cone","#a0a866",Math.cos(l*1.6)*.3,.55,Math.sin(l*1.6)*.3,.07,1.1,.07)}else o==="stump"?(this.mesh(n,"cylinder","#2e2a28",0,.45,0,.45,.9,.45),this.mesh(n,"box","#f08a3c",.1,.9,.1,.2,.05,.2,{emissive:"#e0602a"})):o==="hay"?this.mesh(n,"cylinder","#d6b25a",0,.62,0,.62,1.1,.62).rotation.x=Math.PI/2:(this.mesh(n,"cylinder",a%2?"#9c705b":"#5f7f4f",0,.55,0,.42,1.1,.42),this.mesh(n,"cylinder","#3d4744",0,1.12,0,.44,.06,.44));break}case"outpost":{this.mesh(n,"box","#c2b49d",0,1.1,0,3.4,2.2,3);for(const o of[-1,1])this.mesh(n,"box",e.trees,o*.95,2.75,0,2.2,.18,3.4).rotation.z=-o*.6;this.mesh(n,"box","#5a4a40",0,.9,1.51,.8,1.8,.04),this.mesh(n,"box","#ffd27a",.9,1.5,1.52,.45,.4,.03,{emissive:"#f1b44f"}),this.mesh(n,"cylinder","#7d6a4f",-1.9,2,1.2,.06,4,.06),this.mesh(n,"box","#ef9f60",-1.55,3.6,1.2,.7,.45,.03),this.mesh(n,"box","#8a7352",1.4,.35,-1.9,1,.7,.8);break}case"snowpine":{this.mesh(n,"cylinder",s,0,1.15,0,.16,2.3,.16),this.mesh(n,"cone","#2f5f55",0,2.35,0,1.18,2.4,1.18),this.mesh(n,"cone","#eef4f2",0,2.75,0,.95,1.1,.95),this.mesh(n,"cone","#3b6b60",0,3.25,0,.8,1.6,.8),this.mesh(n,"cone","#eef4f2",0,3.75,0,.45,.7,.45);break}case"ice":{for(let o=0;o<4;o++)this.mesh(n,"cone",o%2?"#cfeaf0":"#a9d6e2",Math.cos(o*1.7)*.4,.55+o%3*.2,Math.sin(o*1.7)*.35,.28,1.1+o%3*.4,.28).rotation.set(Math.sin(o*1.7)*.3,0,-Math.cos(o*1.7)*.3);break}case"drift":this.mesh(n,"ico","#eef3f1",0,0,0,1.1,.38,.9);break;case"haystack":{a%2?(this.mesh(n,"cylinder","#d6b25a",0,.7,0,.7,1.2,.7).rotation.x=Math.PI/2,this.mesh(n,"cylinder","#e8cb7a",0,.7,.61,.55,.03,.55).rotation.x=Math.PI/2):(this.mesh(n,"cylinder","#d6b25a",0,.55,0,.9,1.1,.9),this.mesh(n,"cone","#e2c070",0,1.5,0,.95,.9,.95));break}case"barn":{const o=a%2?"#a8483a":"#b85a40";this.mesh(n,"box",o,0,1.6,0,6.2,3.2,8.2);for(const l of[-1,1])this.mesh(n,"box","#5b4a44",l*1.65,3.9,0,3.7,.22,8.6).rotation.z=-l*.62;this.mesh(n,"box","#e8dcc0",0,1.3,4.11,2.4,2.6,.05),this.mesh(n,"box",o,0,1.3,4.14,2.1,2.3,.04);for(const l of[-.78,.78])this.mesh(n,"box","#e8dcc0",0,1.3,4.16,2.9,.14,.03).rotation.z=l;break}case"fence":{for(const o of[-1.1,0,1.1])this.mesh(n,"box","#8a7352",o,.45,0,.12,.9,.12);for(const o of[.35,.7])this.mesh(n,"box","#a08660",0,o,0,2.4,.08,.06);break}case"crops":{this.mesh(n,"box","#7a6440",0,.02,0,3.2,.04,2.8);for(let o=0;o<4;o++)this.mesh(n,"box",a%2?"#d4b14a":"#7ea24a",0,.2,-1.05+o*.7,3,.32,.28);break}case"tank":{this.mesh(n,"cylinder","#9c968a",0,1.6,0,2,3.2,2),this.mesh(n,"cone","#868276",0,3.55,0,2.05,.7,2.05),this.mesh(n,"cylinder","#9c705b",0,1.1,0,2.04,.35,2.04),this.mesh(n,"box","#5b6360",1.95,1.8,.4,.1,3.6,.3);break}case"chimney":{this.mesh(n,"cylinder","#8a5a48",0,3.4,0,.75,6.8,.75);for(const o of[1.6,4.2,6.5])this.mesh(n,"cylinder","#6e4a3c",0,o,0,.8,.25,.8);this.mesh(n,"box","#6f6b5d",0,.3,0,2,.6,2);break}case"pipes":{for(const o of[-.32,.32])this.mesh(n,"cylinder","#7d8a86",o,1.05,0,.3,6.4,.3).rotation.x=Math.PI/2;for(const o of[-2.4,0,2.4]){this.mesh(n,"box","#5b6360",0,.45,o,1.3,.9,.2);for(const l of[-.32,.32])this.mesh(n,"cylinder","#9c705b",l,1.05,o,.36,.12,.36).rotation.x=Math.PI/2}break}case"crate":case"locker":case"lootbox":{const o=t.type==="locker",l=o?1.5:.82;this.mesh(n,"box",o?"#83948b":"#b49868",0,l/2,0,1.04,l,.81),this.mesh(n,"box","#dfcb91",0,l+.03,0,1.1,.12,.87),this.mesh(n,"box","#dcc991",0,l*.5,.42,.84,.1,.035),this.mesh(n,"box","#5c6e60",.23,l*.65,.45,.12,.18,.07),this.mesh(n,"box","#dddda7",-.17,l*.65,.45,.25,.27,.02,{emissive:"#9f985f"});break}case"growth":this.addGrowth(n,0,0,1);break;case"flowers":case"grass":case"scrub":{for(let o=0;o<3;o++){const l=(o-1)*.25,c=this.mesh(n,"cone",vv[e.id]||"#7e9a74",l,.2,o%2*.25,.13,.41,.1);c.rotation.z=(o-1)*.18,t.type==="flowers"&&this.mesh(n,"ico",["#efe1b4","#e2b094","#c4ccab"][o],l,.44,o%2*.25,.13,.065,.13)}t.type==="scrub"&&this.mesh(n,"ico",e.trees,0,.3,0,.68,.38,.57);break}}return n.position.set(t.x,this.terrainHeight(t.x,t.y,this.seed??1,this.legLength??2700),-t.y),n.rotation.y=t.rotation||0,n.scale.setScalar(t.scale||1),n}makeRubbleEffect(t,e,n){const s=new Zt,r=t.effectHeight??(t.type==="chimney"?6.6:0);if(s.position.set(t.x,this.terrainHeight(t.x,t.y,e,n)+r*(t.scale||1),-t.y),s.userData.prop=t,s.userData.smoke=[],s.userData.flame=[],s.scale.setScalar(t.scale||1),t.smoke)for(let a=0;a<3;a++){const o=this.mesh(s,"ico","#394342",0,.65+a*.38,0,.36,.3,.36,{basic:!0,opacity:.55});s.userData.smoke.push(o)}if(t.fire)for(let a=0;a<3;a++){const o=this.mesh(s,"cone",a%2?"#ffd079":"#e6983d",(a-1)*.23,.48,0,.22,.6,.2,{basic:!0});s.userData.flame.push(o)}return s}animateRubbleEffect(t,e){const n=t.userData.prop;t.visible=Math.abs(n.x-e.x)<30&&Math.abs(n.y-e.y)<45,t.visible&&(t.userData.smoke.forEach((s,r)=>{const a=(this.time*.4+r/3+ne(Math.floor(n.x*13+n.y),this.seed))%1;s.position.set(a*.6+Math.sin(this.time+r)*.1,.45+a*2.6,0),s.scale.setScalar(.35+a*.65)}),t.userData.flame.forEach((s,r)=>{s.scale.y=.65+Math.sin(this.time*9+r*2+n.x)*.2,s.position.y=.22+s.scale.y/2}))}addGrowth(t,e,n,s){const r=this.mesh(t,"ico","#39463e",e,n+.03,0,1.08*s,.09,.94*s);r.rotation.y=.4;for(let a=0;a<3;a++){const o=e+(a-1)*.35*s;this.mesh(t,"cylinder","#57414b",o,n+.24*s,a%2*.3,.055*s,.5*s,.055*s),this.mesh(t,"ico",a%2?"#f08079":"#d45169",o,n+.5*s,a%2*.3,.28*s,.14*s,.25*s)}for(let a=0;a<4;a++){const o=this.mesh(t,"box","#4b4947",e+Math.cos(a*1.6)*.53,n+.05,Math.sin(a*1.6)*.6,.075,.09,1.35*s);o.rotation.y=a*1.6}}makeGate(){const t=new Zt,e=[];for(const n of[-1,1]){const s=new Zt;s.position.x=n*oe.gateHalf;const r=-n;for(let a=0;a<4;a++)this.mesh(s,"box","#6b5a44",r*(.45+a*1.2),1.35,0,.2,2.7,.25);for(const a of[.6,1.6,2.4])this.mesh(s,"box","#8a7352",r*oe.gateHalf/2,a,.05,oe.gateHalf-.1,.26,.14);this.mesh(s,"box","#6b5a44",r*oe.gateHalf/2,1.5,.12,oe.gateHalf*1.1,.2,.1).rotation.z=r*.42;for(let a=0;a<5;a++)this.mesh(s,"cone","#4a3d30",r*(.4+a*1.05),2.95,0,.16,.5,.16);this.mesh(s,"box","#d76465",r*oe.gateHalf*.55,1.9,.16,1.5,.9,.03),t.add(s),e.push(s)}return t.userData.doors=e,t.userData.open=0,t}syncGate(t){const e=t.legLength||2700,n=t.seed??1;this.gate||(this.gate=this.makeGate(),this.scene.add(this.gate));const s=Math.max(1,Math.round((t.player.y-oe.gate)/e)),r=s*e+oe.gate;if(this.gate.visible=Math.abs(t.player.y-r)<110,!this.gate.visible)return;const a=Qt(r,n,e);this.gate.position.set(a,this.terrainHeight(a,r,n,e),-r);const o=s*e===t.checkpointY&&!t._bossDefeated,l=this.gate.userData.open=Math.max(0,Math.min(1,this.gate.userData.open+(o?-.04:.02))),[c,h]=this.gate.userData.doors;c.rotation.y=l*1.45,h.rotation.y=-l*1.45}makeBeacon(){const t=new Zt,e=new le(this.geometries.ring,this.material("#f6db95",{basic:!0,opacity:.65}));return e.rotation.x=-Math.PI/2,e.scale.setScalar(2.15),e.position.y=.07,t.add(e),this.mesh(t,"cylinder","#dcc898",0,1.6,0,.075,3.2,.075),this.mesh(t,"box","#f2d99b",.54,2.75,0,1.12,.68,.045,{emissive:"#b19658"}),this.mesh(t,"box","#5a776b",.51,2.75,.025,.14,.38,.01),this.mesh(t,"box","#5a776b",.51,2.75,.028,.38,.14,.01),this.mesh(t,"box","#9e936e",0,.18,0,.5,.36,.5),t.userData.ring=e,t}terrainSample(t,e,n,s){return(this.terrainSeed!==n||this.terrainLegLength!==s)&&(this.groundTones=new Map,this.terrainSeed=n,this.terrainLegLength=s),Ks(t,e,n,s)}groundTone(t,e,n,s,r){const a=-n,o=Math.round(a*4)*8192+Math.round((t+800)*4);(this.terrainSeed!==s||this.terrainLegLength!==r)&&this.terrainSample(t,a,s,r),this.groundTones.size>8e4&&this.groundTones.clear();let l=this.groundTones.get(o);if(!l){l=Qs(cn[ke(a,s,r,t,!0)].ground).clone().multiplyScalar(2);for(const[c,h]of[[0,5],[0,-5],[0,10],[0,-10],[7,0],[-7,0]])l.add(Qs(cn[ke(a+h,s,r,t+c,!0)].ground));l.multiplyScalar(1/8),this.groundTones.set(o,l)}return l}terrainGeometry(t,e,n,s){const r=fi.columns,a=6,o=fi.width,l=r+1,c=(e-t)/a,h=[],f=[],u=[],d=[],m=[],x=[];for(let N=-1;N<=a+1;N++)for(let F=0;F<=r;F++){const X=(F/r-.5)*o,z=t+c*N,V=N>=0&&N<=a;h.push(X),f.push(z),u.push(this.terrainSample(X,z,n,s)),d.push(V?this.groundTone(X,0,-z,n,s):null),m.push(V?cn[ke(z,n,s,X,!0)]:null),x.push(V&&yv.has(m.at(-1).id))}const g=r*(a+2)*2,p=new Float32Array(g*3),M=new Float32Array(g*3),y=new Int32Array(g*3),_=new Int32Array(h.length*6),w=new Uint8Array(h.length);let E=0;for(let N=0;N<a+2;N++)for(let F=0;F<r;F++)for(let X=0;X<2;X++,E++){const z=N*l+F,V=X?z+1:z,st=X?z+l+1:z+1,et=z+l,ct=h[st]-h[V],yt=u[st]-u[V],Ht=f[V]-f[st],Ft=h[et]-h[V],K=u[et]-u[V],J=f[V]-f[et],mt=yt*J-Ht*K,xt=Ht*Ft-ct*J,_t=ct*K-yt*Ft,Nt=Math.hypot(mt,xt,_t)||1;p[E*3]=mt,p[E*3+1]=xt,p[E*3+2]=_t,M[E*3]=mt/Nt,M[E*3+1]=xt/Nt,M[E*3+2]=_t/Nt,y[E*3]=V,y[E*3+1]=st,y[E*3+2]=et;for(const Gt of[V,st,et])_[Gt*6+w[Gt]++]=E}const A=r*a*2,D=new Float32Array(A*9),v=new Float32Array(A*9),b=new Float32Array(A*9),P=new jt,C=Math.cos(xv);let I=0;for(let N=r*2;N<r*2*(a+1);N++){const F=y[N*3],X=y[N*3+1],z=y[N*3+2],V=Math.floor(N/2)%r,st=Math.floor(N/2/r)-1,et=(u[F]+u[X]+u[z])/3,ct=m[F];let yt=null;ct.edge==="rise"&&et>1.4?yt=ct.id==="canyon"?et>4.2?"#c9774a":"#a9583a":et>4.2?"#a3ad9f":"#7f8c84":ct.edge==="ice"&&et>.7?yt=et>2.2?"#eef4f3":"#cfe3e8":ct.edge==="dune"&&et>.7?yt=ct.verge:ct.edge==="sink"&&et<-.45&&(yt="#58664c");const Ht=x[F]||x[X]||x[z]||!!yt&&ct.edge!=="sink";yt?P.copy(Qs(yt)):P.copy(d[F]).add(d[X]).add(d[z]).multiplyScalar(1/3);const Ft=ne(V*23+st*113+Math.floor(t),n);P.multiplyScalar(Ht?.95+Ft*.1:.88+Ft*.24);const K=M[N*3],J=M[N*3+1],mt=M[N*3+2];for(let xt=0;xt<3;xt++){const _t=y[N*3+xt];D[I]=h[_t],D[I+1]=u[_t],D[I+2]=-f[_t],v[I]=P.r,v[I+1]=P.g,v[I+2]=P.b;let Nt=K,Gt=J,L=mt;if(Ht){Nt=Gt=L=0;for(let Q=0;Q<w[_t];Q++){const $=_[_t*6+Q];M[$*3]*K+M[$*3+1]*J+M[$*3+2]*mt>=C&&(Nt+=p[$*3],Gt+=p[$*3+1],L+=p[$*3+2])}const nt=Math.hypot(Nt,Gt,L)||1;Nt/=nt,Gt/=nt,L/=nt}b[I]=Nt,b[I+1]=Gt,b[I+2]=L,I+=3}}const U=new Pe;return U.setAttribute("position",new ie(D,3)),U.setAttribute("color",new ie(v,3)),U.setAttribute("normal",new ie(b,3)),U}terrainHeight(t,e,n,s){return Ca(t,e,n,s)}stripGeometry(t,e,n,s=.015,r=null){const a=[];for(let l=t;l<e-.01;l+=3){const c=Math.min(e,l+3);if(r&&!r(l+1.5))continue;const[h,f]=n(l),[u,d]=n(c);a.push(h,s,-l,f,s,-l,u,s,-c,f,s,-l,d,s,-c,u,s,-c)}const o=new Pe;return o.setAttribute("position",new ie(a,3)),o.computeVertexNormals(),o}roadGeometry(t,e,n,s=6,r=0,a=null,o=c=>Qt(c,n,this.legLength??2700),l=.015){const c=h=>(typeof s=="function"?s(h):s)/2;return this.stripGeometry(t,e,h=>{const f=o(h)+r;return[f-c(h),f+c(h)]},l,a)}propTemplate(t,e){const n=`${t.type}|${t.variant||0}|${e.id}|${t.corrupted?1:0}|${t.charred?1:0}`;this.templates??=new Map;let s=this.templates.get(n);if(!s){const r=this.makeProp({...t,x:0,y:0,rotation:0,scale:1},e);r.position.set(0,0,0),r.updateMatrixWorld(!0),s=[],r.traverse(a=>{a.isMesh&&s.push({geometry:a.geometry,material:a.material,matrix:a.matrixWorld.clone(),shadow:a.castShadow})}),this.templates.set(n,s)}return s}placeProp(t,e,n,s){const r=new ce().compose(this.tempVector.set(t.x,this.terrainHeight(t.x,t.y,n,s)+(t.lift||0),-t.y),new Is().setFromAxisAngle(zo,t.rotation||0),new O().setScalar(t.scale||1));return[this.propTemplate(t,e),r]}bakeStatic(t,e,n=[]){t.updateMatrixWorld(!0);const s=new Map,r=(a,o)=>{const l=`${a.uuid}/${o.uuid}`;return s.has(l)||s.set(l,{geometry:a,material:o,matrices:[],shadow:!1}),s.get(l)};t.traverse(a=>{if(!a.isMesh)return;const o=r(a.geometry,a.material);o.matrices.push(a.matrixWorld.clone()),o.shadow||=a.castShadow});for(const[a,o]of n)for(const l of a){const c=r(l.geometry,l.material);c.matrices.push(new ce().multiplyMatrices(o,l.matrix)),c.shadow||=l.shadow}for(const a of s.values()){const o=new ra(a.geometry,a.material,a.matrices.length);a.matrices.forEach((l,c)=>o.setMatrixAt(c,l)),o.castShadow=a.shadow,o.receiveShadow=!0,e.add(o)}}makeChunk(t,e,n,s=0){const r=t*24,a=r+24,o=mn(r+12,e,n),l=_=>Qt(_,e,n),c=new Zt,h=new Ma({vertexColors:!0,roughness:1}),f=new le(this.terrainGeometry(r,a,e,n),h);f.receiveShadow=!0,c.add(f);const u=["city","village"].includes(o.id),d=new Zt;c.userData.band=s,c.userData.ambientEffects=[];const m=(_,w,E=0)=>{if(!_.attributes.position.count){_.dispose();return}const A=new le(_,this.material(w));A.position.y=E,A.receiveShadow=!0,c.add(A)};for(const _ of["asphalt","earth","dirt"])m(this.roadGeometry(r,a,e,w=>gn(w,e,n).width,0,w=>gn(w,e,n).kind===_,l),_==="earth"?"#96865a":o.road);for(const _ of ec(e,r,a,n)){const w=Math.max(r,Math.min(a,(_.start+_.end)/2)),E=mn(w,e,n).road,A=v=>l(v)+on(_,v);m(this.roadGeometry(r,a,e,v=>gn(v,e,n).width+.2,0,v=>v>_.start&&v<_.end,A,.011),E);for(const v of[-1,1])m(this.roadGeometry(r,a,e,.24,v*.6,b=>b>_.start+3&&b<_.end-3,A,.02),js(E));const D=v=>v>_.start&&v<_.start+30||v>_.end-30&&v<_.end;m(this.stripGeometry(r,a,v=>[Math.min(l(v),A(v)),Math.max(l(v),A(v))],.012,D),js(E));for(let v=Math.ceil((_.start+8)/7)*7;v<Math.min(a,_.start+36);v+=7){if(v<r)continue;const b=Math.atan((A(v+1)-A(v-1))/2);for(const P of[-.6,.6]){const C=this.mesh(d,"box","#eddfb1",A(v)+Math.sin(b)*.3+P*.45,.03,-v+.25,.16,.02,1.1);C.rotation.y=P-b}}}for(const _ of[-1,1])m(this.roadGeometry(r,a,e,.24,_*.6,w=>gn(w,e,n).kind==="dirt",l,.02),js(o.road));const x=Nn(r,e,n)||Nn(a,e,n)||Nn((r+a)/2,e,n),g=x&&Vo[x.biome]||Vo.city;m(this.roadGeometry(r,a,e,oe.clear*2+3,0,_=>!!Nn(_,e,n),l,.008),g);for(let _=Math.ceil(r/6)*6;_<a;_+=6)if(Nn(_,e,n))for(const w of[-1,1])this.mesh(d,"box",js(g),l(_)+w*(oe.clear/2+3),.014,-_,oe.clear-4,.012,.12);if(u)for(const _ of[-1,1])m(this.roadGeometry(r,a,e,.7,_*3.5,w=>gn(w,e,n).kind==="asphalt"&&ne(Math.floor(w/6)*13,e)>.25,l),"#939d7b",.025);const p=new Map;for(const _ of[-1,1])for(let w=r;w<a-.01;w+=3){const E=w+1.5,A=Ze(E,e,n),D=_<0?A.minX:A.maxX,v=mn(E,e,n,D+_*6);v.edge==="sink"&&(p.has(v.water)||p.set(v.water,[]),p.get(v.water).push([w,_]))}for(const[_,w]of p){const E=[];for(const[D,v]of w){const b=Math.min(a,D+3),P=F=>{const X=Ze(F,e,n);return v<0?[X.minX-75,X.minX-1.1]:[X.maxX+1.1,X.maxX+75]},[C,I]=P(D),[U,N]=P(b);E.push(C,-.42,-D,I,-.42,-D,U,-.42,-b,I,-.42,-D,N,-.42,-b,U,-.42,-b)}const A=new Pe;A.setAttribute("position",new ie(E,3)),A.computeVertexNormals(),m(A,_)}for(let _=Math.ceil(r/6)*6;_<a;_+=6){const w=gn(_,e,n),E=A=>ne(Math.floor(_/6)*47+A,e);if(w.kind==="asphalt"){if(E(1)>.25){const v=this.mesh(d,"box","#adaf86",l(_),.037,-_,.1,.019,.8+E(2));v.rotation.y=Math.atan((l(_+1)-l(_-1))/2)}const A=(E(3)-.5)*Math.min(3.8,w.width-2.3),D=this.mesh(d,"ico",E(4)>.5?"#3a4b42":"#6b7661",l(_)+A,.031,-_-1.5,.35+E(5)*.75,.025,.5+E(6)*.6);D.rotation.y=E(7)*6.28;for(let v=0;v<3;v++){const b=this.mesh(d,"box","#34473d",l(_)+A+v*.23,.043,-_+v*.31,.035,.017,.65);b.rotation.y=v%2?-.66:.5}if(w.urban)for(let v=0;v<2;v++)this.mesh(d,"ico","#81916d",l(_)+(v?-1:1)*3.4,.08,-_+E(8+v)*2,.18,.12,.21)}else if(w.urban)for(const A of[-1,1]){this.mesh(d,"ico","#677852",l(_)+A*2.2,.026,-_,1,.035,1.65);const D=this.mesh(d,"box","#4a5a4d",l(_)+A*2.5,.026,-_-1,1.1,.035,1.2);D.rotation.y=A*.2}}for(const _ of ic(e,r-3,a+3,n)){const w=Math.max(r,_.y-_.width/2),E=Math.min(a,_.y+_.width/2);if(w>=E)continue;const A=_.maxX-_.minX;if(this.mesh(d,"box",_.urban?"#56635c":"#aa946a",(_.minX+_.maxX)/2,.018,-(w+E)/2,A,.018,E-w),_.urban)for(const D of[-1,1]){const v=_.y+D*(_.width/2+.37);v>=r&&v<a&&this.mesh(d,"box","#939d7b",(_.minX+_.maxX)/2,.032,-v,A,.04,.7)}}const M=[],y=[];for(const _ of Wu(e,r,a,n,s*32-58,s*32+58))if(_.type!=="edgewall"){if(_.type==="stream"){y.push(_);continue}if(xu.has(_.type)||M.push(this.placeProp(_,cn[_.biome]||mn(_.y,e,n),e,n)),(_.smoke||_.fire)&&c.userData.ambientEffects.length<10){const w=this.makeRubbleEffect(_,e,n);c.add(w),c.userData.ambientEffects.push(w)}}if(t===0){for(const _ of[-1,1])this.mesh(d,"box","#727c6a",l(5)+_*3.7,1.35,-5,.6,2.7,.72),this.mesh(d,"box","#c9ba8d",l(5)+_*3.7,2.75,-5,.84,.18,.92),this.mesh(d,"box","#f1d596",l(5)+_*3.7,2.12,-4.6,.26,.35,.04,{emissive:"#ae884c"});this.mesh(d,"box","#677465",l(5),3.32,-5,8.1,.52,.64),this.mesh(d,"box","#dece9b",l(5),3.31,-4.66,2.75,.31,.025);for(let _=-2;_<=2;_++)this.mesh(d,"box","#577765",l(5)+_*.34,3.31,-4.64,.1,.18,.02)}return y.length&&c.add(this.makeStreams(y,d,M,e,n)),this.bakeStatic(d,c,M),c.userData.ownedMaterials=[h],c}makeStreams(t,e,n,s,r){const a=[],o=[],l=new jt,c=Qs("#dcefe9"),h=new jt,f=(m,x)=>this.terrainHeight(m,x,s,r);for(const m of t){const x=cn[m.biome]||mn(m.y,s,r);l.set(x.water);const g=Go[x.id]||"#8f9688",p=m.path,M=[];for(let E=0;E+3<p.length;E+=2){const A=p[E],D=p[E+1],v=p[E+2],b=p[E+3],P=Math.max(1,Math.ceil(Math.hypot(v-A,b-D)/.8));for(let C=E?1:0;C<=P;C++)M.push([A+(v-A)*C/P,D+(b-D)*C/P])}let y=0,_=null;const w=M.map(([E,A],D)=>{const[v,b]=M[Math.max(0,D-1)],[P,C]=M[Math.min(M.length-1,D+1)],I=P-v,U=C-b,N=Math.hypot(I,U)||1,F=-U/N,X=I/N;_&&(y+=Math.hypot(E-_[0],A-_[1])),_=[E,A];const z=m.width*(.4+.6*vu(0,3,y)+y*.01)/2,V=Math.max(f(E,A),f(E+F*z,A+X*z),f(E-F*z,A-X*z))+.06;return{x:E,y:A,nx:F,ny:X,half:z,level:V,travelled:y}});for(let E=0;E+1<w.length;E++){const A=w[E],D=w[E+1],v=Math.max(.2,D.travelled-A.travelled);h.copy(l).lerp(c,vu(.22,.62,(A.level-D.level)/v)*.85);const b=[[A,1],[A,-1],[D,1],[A,-1],[D,-1],[D,1]];for(const[P,C]of b)a.push(P.x+P.nx*P.half*C,P.level,-(P.y+P.ny*P.half*C)),o.push(h.r,h.g,h.b)}w.forEach((E,A)=>{if(A%3!==1)return;const D=A/3%2<1?1:-1,v=.22+ne(A*31+Math.round(m.y),s)*.2,b=E.x+E.nx*(E.half+.25)*D,P=E.y+E.ny*(E.half+.25)*D;this.mesh(e,"ico",g,b,f(b,P)+v*.3,-P,v*1.2,v*.7,v).rotation.y=A});for(let E=0;E<3;E++){const A=E*2.1+m.y,D=m.x+Math.cos(A)*.7,v=m.y+Math.sin(A)*.7;this.mesh(e,"ico",g,D,f(D,v)+.15,-v,.5-E*.08,.35,.45).rotation.y=A}m.pool&&n.push(this.placeProp({id:`${m.id}-pool`,type:"pool",x:m.pool.x,y:m.pool.y,scale:m.pool.scale,lift:m.pool.lift,rotation:0,variant:0,biome:x.id},x,s,r))}const u=new Pe;u.setAttribute("position",new ie(a,3)),u.setAttribute("color",new ie(o,3)),u.computeVertexNormals(),this.streamMaterial??=new Ma({vertexColors:!0,roughness:.55,flatShading:!0,side:Sn}),this.materials.has("stream")||this.materials.set("stream",this.streamMaterial);const d=new le(u,this.streamMaterial);return d.receiveShadow=!0,d}removeChunk(t){this.scene.remove(t),t.traverse(e=>{e.isInstancedMesh&&e.dispose(),e.isMesh&&!Object.values(this.geometries).includes(e.geometry)&&e.geometry.dispose()});for(const e of t.userData.ownedMaterials||[])e.dispose()}resize(t,e){this.width=Math.max(1,t),this.height=Math.max(1,e);const n=this.width/this.height,s=n<.8?28:Math.min(47,29*n);this.camera.left=-s/2,this.camera.right=s/2,this.camera.top=s/n/2,this.camera.bottom=-s/n/2,this.fitDepthRange(),this.renderer.setSize(this.width,this.height,!1)}fitDepthRange(){const t=Sa.length(),e=Sa.clone().negate().divideScalar(t),n=new O().crossVectors(e,zo).normalize(),s=new O().crossVectors(n,e),{behind:r,ahead:a,low:o,high:l}=mu;let c=1/0,h=-1/0;const f=8;for(let d=0;d<=f;d++)for(let m=0;m<=f;m++){const x=ao.lerp(this.camera.left,this.camera.right,d/f),g=ao.lerp(this.camera.bottom,this.camera.top,m/f),p=g*s.y,M=-(x*n.z+g*s.z),y=Math.max((l-p)/e.y,(-r-M)/-e.z),_=Math.min((o-p)/e.y,(a-M)/-e.z);y>=_||(c=Math.min(c,y),h=Math.max(h,_))}const u=Math.max(t,2-c);this.cameraScale=u/t,this.camera.near=u+c-1,this.camera.far=u+h+1,this.camera.updateProjectionMatrix(),this.scene.fog.near=Ho[0]+u-t,this.scene.fog.far=Ho[1]+u-t,this.silhouetteBias.value=Dn.bias*2/(this.camera.far-this.camera.near)}screenDirectionToWorld(t,e){const n=new O(0,0,.5).unproject(this.camera),s=new O(t/Math.max(1,this.width)*2,-e/Math.max(1,this.height)*2,.5).unproject(this.camera),r=new O;this.camera.getWorldDirection(r);const a=n.addScaledVector(r,-n.y/r.y),o=s.addScaledVector(r,-s.y/r.y),l=o.x-a.x,c=-(o.z-a.z),h=Math.hypot(l,c);return h>1e-6?{x:l/h,y:c/h}:{x:0,y:0}}screenToWorld(t,e){return this.screenDirectionToWorld(t,e)}screenPosition(t,e){const n=new O(t,0,-e).project(this.camera);return{x:n.x,y:n.y}}worldToScreen(t,e,n=0){const s=this.terrainHeight(t,e,this.seed??1,this.legLength??2700),r=new O(t,s+n,-e).project(this.camera);return{x:(r.x+1)/2*this.width,y:(1-r.y)/2*this.height}}bearingTo(t,e){const n=this.player.position.clone().project(this.camera),s=new O(t,0,-e).project(this.camera),r=(s.x-n.x)*this.width/2,a=-(s.y-n.y)*this.height/2,o=Math.hypot(r,a);return o>1e-6?{x:r/o,y:a/o}:{x:0,y:0}}syncEntities(t){const e=new Set,n=(t.enemies||[]).filter(r=>r.hp>0),s=new Map(n.filter(r=>r.telegraph?.kind==="charge").map(r=>[Math.hypot(r.x-t.player.x,r.y-t.player.y),r]).sort((r,a)=>r[0]-a[0]).map(([,r],a)=>[r,a]));n.length>this.enemyCapacity&&this.resizeEnemyBatches(Math.ceil(n.length/32)*32);for(const r of this.enemyBatches.values())r.used=0;for(const r of this.silhouetteBatches?.values()||[])r.used=0;for(const r of n){const a=`enemy-${r.id}`;e.add(a);let o=this.entities.get(a);const l=r.type==="boss"?Ev(r.variant,t.boss?.id===r.id?t.boss?.variant:null,r.name,r.biome,t.boss?.name,t.biome?.id):null,c=r.type==="boss"?`boss:${l||""}`:r.type;(!o||o.userData.model!==c)&&(o&&this.scene.remove(o),o=this.makeEnemy(r.type,r.radius,l),this.entities.set(a,o)),o.position.set(r.x,this.terrainHeight(r.x,r.y,t.seed,t.legLength)+.035,-r.y);const h=r.telegraph?.angle??r.charge?.angle??r.angle??Math.atan2(t.player.x-r.x,t.player.y-r.y);o.rotation.y=Math.PI/2-h;const f=Number.isFinite(Number(r.id))?Number(r.id):String(r.id).length*1.37,u=!!r.runner,d=!!r.sprinting;o.position.y+=Math.sin(this.time*(d?15:7)+f)*(d?.06:.035);const m=o.userData.body;m.rotation.z=u?-(d?.34:.12):0,m.scale.set(u?.88:1,u?1.06:1,u?.88:1),o.userData.occlusionPhase??=Math.floor(f*97),this.updateEnemyOcclusion(o,Math.max(.4,r.radius||.7)),o.userData.arrival.visible=r.spawnGrace>0;const x=o.userData.telegraph,g=o.userData.charge,p=o.userData.warningFill,M=r.telegraph,y=M?.kind,_=this.isSignatureShape(M),w=!!M&&!_&&(y==="charge"||y==="root"||y==="wave"||!["burst","ring","slam","circle","pulse"].includes(y)&&Number.isFinite(M.length)&&M.length>0&&!M.radius);x.visible=!!M&&!w&&!_,p.visible=x.visible;const E=r.type==="boss"||y!=="charge"?0:s.get(r)??0,A=E<gu.full;if(g.visible=w&&(y!=="charge"||E<gu.max),r.telegraph){const b=r.telegraph.radius||(r.radius||1)*2.5,P=(r.telegraph.x??r.x)-r.x,C=-((r.telegraph.y??r.y)-r.y),I=Math.cos(o.rotation.y),U=Math.sin(o.rotation.y),N=this.terrainHeight(r.telegraph.x??r.x,r.telegraph.y??r.y,t.seed,t.legLength)+.075;x.position.set((P*I-C*U)/o.scale.x,(N-o.position.y)/o.scale.x,(P*U+C*I)/o.scale.x),p.position.copy(x.position),x.scale.setScalar(b/o.scale.x),p.scale.setScalar(b/o.scale.x);const F=r.telegraph.length??(r.type==="dog"?5.9:14.7),X=y==="charge"||!w?(r.radius||.7)*2+.7:Math.max(1.4,r.telegraph.width??(y==="wave"?(r.telegraph.radius||2.5)*2:2.2)),z=F/o.scale.x;y==="charge"||!w?g.position.set(z/2,0,0):g.position.set(x.position.x+z/2,x.position.y,x.position.z),g.scale.set(z,1,X/o.scale.x);for(const V of g.userData.fills)V.visible=A;for(const V of g.userData.bars){V.mesh.visible=A||!V.dark;const st=A?1:.6;if(V.cap){V.mesh.scale.x=V.width*st/F,V.mesh.position.x=.5-V.mesh.scale.x/2;continue}V.mesh.scale.z=V.width*st/X,V.mesh.position.z=V.side*(.5-V.mesh.scale.z/2+(V.dark?.03:0))}}const D=o.userData.health,v=Math.max(0,Math.min(1,r.hp/(r.maxHp||r.hp||1)));D.quaternion.copy(o.quaternion).invert().multiply(this.camera.quaternion),D.userData.fill.scale.x=D.userData.width*v,D.userData.fill.position.x=-D.userData.width*(1-v)/2,this.batchEnemy(o)}this.finishEnemyBatches();for(const r of n)this.isSignatureShape(r.telegraph)&&(e.add(`sig-${r.id}`),this.syncSignature(r,t));for(const r of t.crates||[]){if(r.hp<=0)continue;const a=`crate-${r.id}`;e.add(a);let o=this.entities.get(a);o||(o=this.makeProp({...r,scale:r.scale||(r.radius||.725)/.58,type:xu.has(r.type)?r.type:"crate"},mn(r.y,t.seed,t.legLength)),this.entities.set(a,o),this.scene.add(o)),o.position.y=this.terrainHeight(r.x,r.y,t.seed,t.legLength)+.035}for(const[r,a]of this.entities)e.has(r)||(this.scene.remove(a),this.entities.delete(r))}dimDrop(t,e){t.userData.dimmed!==e&&(t.userData.dimmed=e,this.dimCache||=new Map,t.traverse(n=>{if(!n.isMesh||!n.material)return;if(n.userData.baseMaterial||=n.material,!e){n.material=n.userData.baseMaterial;return}const s=n.userData.baseMaterial;if(!this.dimCache.has(s)){const r=s.clone(),a={};r.color.getHSL(a),r.color.setHSL(a.h,a.s*.12,a.l*.72),r.emissive&&r.emissive.setScalar(0),r.transparent=!0,r.opacity=(s.opacity??1)*.5,r.depthWrite=!1,this.dimCache.set(s,r)}n.material=this.dimCache.get(s)}),t.userData.item&&t.userData.item.scale.setScalar(e?.85:1))}makeDrop(t){const e=new Zt,n=t.type==="health"?"heal":t.type,s=Su[n]||Su.weapon,r=s.color,a=this.disc(r,.24,.74);e.add(a);const o=new le(this.geometries.ring,this.material(r,{basic:!0,opacity:.62}));o.rotation.x=-Math.PI/2,o.position.y=.07,o.scale.setScalar(.62),e.add(o);const l=new Zt;e.add(l);const c={emissive:r};if(n==="heal"){this.mesh(l,"box",r,0,.82,0,.7,.53,.47,c),this.mesh(l,"box","#8d3c39",0,1.145,0,.45,.075,.15);for(const h of[-.2,.2])this.mesh(l,"box","#8d3c39",h,1.08,0,.07,.16,.15);for(const h of[-.246,.246])this.mesh(l,"box","#fff0cf",0,.82,h,.13,.35,.025,{basic:!0}),this.mesh(l,"box","#fff0cf",0,.82,h,.36,.13,.026,{basic:!0})}else if(n==="shield")this.mesh(l,"shield","#245f83",0,.88,0,1.1,1.1,1.1,c),this.mesh(l,"shield",r,0,.88,.087,.84,.84,.5,c),this.mesh(l,"box","#dcf6ee",0,.91,.135,.065,.45,.028,{basic:!0}),this.mesh(l,"box","#dcf6ee",0,.98,.137,.31,.065,.028,{basic:!0});else if(n==="rapid"){for(const h of[-.22,0,.22])this.mesh(l,"cylinder","#b77931",h,.81,0,.095,.54,.095,c),this.mesh(l,"cone","#f6d58f",h,1.13,0,.093,.16,.093,c),this.mesh(l,"cylinder","#f4c768",h,.55,0,.11,.075,.11);this.mesh(l,"box","#584b39",0,.72,0,.72,.13,.19),this.mesh(l,"bolt","#ffe7a4",0,.85,.15,.7,.7,1,{basic:!0})}else if(n==="power"){this.mesh(l,"cylinder","#624789",0,.89,0,.225,.69,.225),this.mesh(l,"cylinder",r,0,.9,0,.18,.59,.18,c);for(const h of[.56,.76,1.03,1.23])this.mesh(l,"cylinder","#d6a4fa",0,h,0,.23,.055,.23,c);this.mesh(l,"ico","#e7c6ff",0,1.33,0,.12,.12,.12,c),this.mesh(l,"bolt","#eedcff",0,.88,.243,.62,.62,1,{basic:!0})}else if(n==="speed"){this.mesh(l,"box","#a6803d",-.12,.86,0,.31,.48,.32),this.mesh(l,"box",r,.11,.62,0,.7,.25,.37,c),this.mesh(l,"box","#ede4bd",.11,.5,0,.74,.085,.4);for(let h=0;h<3;h++){const f=this.mesh(l,"cone","#ffe8a0",-.32-h*.13,1.04+h*.045,0,.09,.5-h*.04,.09,c);f.rotation.z=-.8-h*.08}this.mesh(l,"box","#f4df8c",-.105,1.08,0,.34,.07,.36)}else{this.mesh(l,"box","#94744a",0,.56,0,.83,.32,.49),this.mesh(l,"box","#d2bb7b",0,.76,0,.87,.075,.53);for(const u of[-.25,.25])this.mesh(l,"box","#4d675a",u,.56,0,.075,.35,.52);const h=t.weapon||"rifle",f=h==="arc"?"#ba88ed":h==="scattergun"?"#df985a":h==="sidearm"?"#e0c486":"#6bc0a1";if(this.mesh(l,"box",f,-.02,1.02,0,h==="sidearm"?.49:.72,.17,.19,{emissive:f}),this.mesh(l,"box","#344e45",-.12,.85,0,.15,.29,.16),h==="arc")this.mesh(l,"ico","#d5b2ff",.38,1.02,0,.19,.19,.19,{emissive:"#b48bec"}),this.mesh(l,"cylinder","#684b8e",.39,1.02,0,.22,.24,.22).rotation.z=Math.PI/2;else{const u=h==="sidearm"?.3:h==="scattergun"?.75:.81;for(const d of h==="scattergun"?[-.075,.075]:[0])this.mesh(l,"cylinder","#dde0b8",.37+u/4,1.02,d,.06,u,.06).rotation.z=Math.PI/2;h==="rifle"&&this.mesh(l,"box","#9ccfb3",-.05,1.15,0,.32,.09,.09),h==="scattergun"&&this.mesh(l,"box","#8e5937",-.46,1.02,0,.28,.2,.19)}}return l.scale.setScalar(1.3),e.userData.item=l,e.userData.style=s,e}syncTransients(t){const e=new Set;for(const n of t.drops||[]){const s=`drop-${n.id}`;e.add(s);let r=this.transients.get(s);r||(r=this.makeDrop(n),this.transients.set(s,r),this.scene.add(r)),r.position.set(n.x,this.terrainHeight(n.x,n.y,t.seed,t.legLength)+.035,-n.y),this.dimDrop(r,n.collectable===!1),r.userData.item.rotation.y=this.time*1.5,r.userData.item.position.y=Math.sin(this.time*3+n.x)*.13}for(const n of t.projectiles||[]){const s=`bullet-${n.id}`;e.add(s);let r=this.transients.get(s);r||(r=new Zt,this.mesh(r,"box",n.weapon==="arc"?"#c5b3ff":"#f9e8b3",0,.96,0,n.weapon==="arc"?.58:.68,.055,.075,{basic:!0}),this.mesh(r,"ico","#fff3c2",.34,.96,0,.07,.08,.08,{basic:!0}),this.transients.set(s,r),this.scene.add(r)),r.position.set(n.x,this.terrainHeight(n.x,n.y,t.seed,t.legLength)+.035,-n.y),r.rotation.y=Math.PI/2-(n.angle||0)}for(const n of t.effects||[]){if(n.type==="warning"&&n.signature)continue;const s=`fx-${n.id}`;e.add(s);let r=this.transients.get(s);const a=n.type==="explosion"||n.type==="death"||n.type==="burst"||n.type==="crate",o=["slam","arc","warning","pickup","hurt"].includes(n.type);if(!r){if(r=new Zt,o){const c=new le(this.geometries.ring,this.material(n.color||(n.type==="pickup"?"#f0d99b":"#e99080"),{basic:!0,opacity:.6}));c.rotation.x=-Math.PI/2,c.position.y=.09,r.add(c),r.userData.wave=c}for(let c=0;c<(a?7:4);c++){const h=this.mesh(r,"ico",n.color||(n.type==="muzzle"?"#fff0b3":c%2?"#e7b58c":"#d87574"),Math.cos(c*2.3)*.3,.5+c*.09,Math.sin(c*2.3)*.3,.15,.15,.15,{basic:!0});h.userData.offset=new O(Math.cos(c*2.3),.5+c*.14,Math.sin(c*2.3))}this.transients.set(s,r),this.scene.add(r),r.userData.created=this.time}r.position.set(n.x,this.terrainHeight(n.x,n.y,t.seed,t.legLength)+.035,-n.y);const l=this.time-r.userData.created;r.userData.wave&&r.userData.wave.scale.setScalar((n.radius||1.5)*Math.min(1,.25+l*2.5)),r.children.forEach(c=>{c.userData.offset&&(c.position.copy(c.userData.offset).multiplyScalar(.25+l*(a?4:2)),n.type==="muzzle"&&(c.position.y+=.9),c.position.y-=l*l*2,c.scale.setScalar(Math.max(.015,.17-l*.2)))})}for(const[n,s]of this.transients)e.has(n)||(this.scene.remove(s),this.transients.delete(n))}render(t,e=.016){if(!t?.player)return;this.time+=Math.min(.08,e||.016);const n=t.player,s=t.seed??1,r=t.legLength||2700;if(this.seed!==s||this.legLength!==r){for(const w of this.chunks.values())this.removeChunk(w);this.chunks.clear();for(const w of this.entities.values())this.scene.remove(w);this.entities.clear();for(const w of this.transients.values())this.scene.remove(w);this.transients.clear(),this.seed=s,this.legLength=r,this.focus.set(n.x-6.4,0,-n.y-8),this.previousPlayer={x:n.x,y:n.y},this.courierOutline.visible=!1,this.nextOcclusionCheck=this.time}const a=Math.floor((n.y-39)/24),o=Math.floor((n.y+65)/24),l=Math.round(n.x/32);for(const[w,E]of this.chunks)E.userData.band!==l&&(this.removeChunk(E),this.chunks.delete(w));for(let w=a;w<=o;w++){if(this.chunks.has(w))continue;const E=this.makeChunk(w,s,r,l);this.chunks.set(w,E),this.scene.add(E)}for(const[w,E]of this.chunks)(w<a||w>o)&&(this.removeChunk(E),this.chunks.delete(w));const c=mn(n.y,s,r,n.x),h=new jt(c.sky);this.scene.background.lerp(h,.012),this.scene.fog.color.copy(this.scene.background);const f=this.height<700?4.5:0,u=this.guardianPan||={x:0,z:0};let d=0,m=0;const x=t.boss&&t.boss.hp>0?t.boss:null;if(x&&Number.isFinite(x.x)&&Number.isFinite(x.y)){d=(x.x-n.x)/2,m=-(x.y-n.y)/2;const w=Math.min(8,(this.camera.right-this.camera.left)*.27),E=Math.hypot(d,m);E>w&&(d*=w/E,m*=w/E)}const g=1-Math.exp(-Math.min(.1,e)*2.5);u.x+=(d-u.x)*g,u.z+=(m-u.z)*g,this.focus.lerp(this.tempVector.set(n.x-6.4+f*.62+u.x,0,-n.y-8+f*.78+u.z),1-Math.exp(-e*8)),this.camera.position.copy(this.focus).add(this.tempVector.copy(Sa).multiplyScalar(this.cameraScale));for(const w of this.chunks.values())w.renderOrder=-10,this.applyXray(w);this.camera.lookAt(this.focus),this.camera.updateMatrixWorld(),this.sun.position.set(n.x-18,36,-n.y+12),this.sun.target.position.set(n.x,0,-n.y),this.sun.target.updateMatrixWorld();const p=this.terrainHeight(n.x,n.y,s,r)+.035;this.player.position.set(n.x,p,-n.y);const M=Number.isFinite(n.movingSpeed)?n.movingSpeed:Math.hypot(n.x-(this.previousPlayer?.x??n.x),n.y-(this.previousPlayer?.y??n.y))/Math.max(.01,e);this.previousPlayer={x:n.x,y:n.y},this.animateCourier(n,M,e,t.elapsed||0),this.player.userData.ring.visible=!!n.shield,this.playerShadow.position.set(n.x,p+.01,-n.y),this.updateCourierVisibility(),this.updateXray();for(const w of this.chunks.values())for(const E of w.userData.ambientEffects||[])this.animateRubbleEffect(E,n);this.syncEntities(t),this.syncTransients(t),this.syncGate(t);const y=t.checkpointY??((t.leg||0)+1)*r,_=Math.min(y,n.y+23);this.deliveryBeacon.position.set(Qt(_,s,r),0,-_),this.deliveryBeacon.visible=y-n.y<25,this.deliveryBeacon.userData.ring.scale.setScalar(2.03+Math.sin(this.time*2)*.13),this.renderer.render(this.scene,this.camera)}dispose(){for(const t of this.chunks.values())this.removeChunk(t);for(const t of this.enemyBatches.values())t.mesh.dispose();for(const t of this.silhouetteBatches.values())t.fill.dispose();for(const t of Object.values(this.silhouetteMaterials))t.dispose();for(const t of[...this.xrayMaterials?.values()||[],...this.warningMaterials?.values()||[]])t.dispose();for(const t of Object.values(this.geometries))t.dispose();for(const t of this.materials.values())t.dispose();this.outlineMaterial.dispose(),this.outlineEdgeMaterial.dispose(),this.renderer.dispose()}}const wu=.5;class Rv{constructor(t=!0){this.enabled=t,this.paused=!1,this.context=null,this.voices=0,this.limits=new Map,this.lastFootfall=null,this.birdClock=10,this.stats={shots:0,footsteps:0,pickups:0,impacts:0,breaks:0,warnings:0}}async start(){if(!this.context){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.context=new t({latencyHint:"interactive"}),this.master=this.context.createGain(),this.master.gain.value=this.enabled?.58:0;const e=this.context.createDynamicsCompressor();e.threshold.value=-14,e.knee.value=12,e.ratio.value=5,e.attack.value=.003,e.release.value=.18,this.master.connect(e),this.analyser=this.context.createAnalyser(),this.analyser.fftSize=2048,e.connect(this.analyser),this.analyser.connect(this.context.destination),this.effects=this.context.createGain(),this.effects.gain.value=this.paused?0:1,this.effects.connect(this.master),this.noiseBuffer=this.context.createBuffer(1,this.context.sampleRate*2,this.context.sampleRate);const n=this.noiseBuffer.getChannelData(0);for(let a=0;a<n.length;a++)n[a]=Math.random()*2-1;const s=this.context.createBufferSource();s.buffer=this.noiseBuffer,s.loop=!0;const r=this.context.createBiquadFilter();r.type="lowpass",r.frequency.value=420,this.windFilter=r,this.ambient=this.context.createGain(),this.ambient.gain.value=this.paused?.015:.055,s.connect(r),r.connect(this.ambient),this.ambient.connect(this.master),s.start()}await this.context.resume().catch(()=>{})}setEnabled(t){this.enabled=t,t&&this.start().catch(()=>{}),this.master&&this.master.gain.setTargetAtTime(t?.58:0,this.context.currentTime,.025)}setPaused(t){this.paused=t,this.lastFootfall=null,this.context&&(this.effects.gain.setTargetAtTime(t?0:1,this.context.currentTime,.035),this.ambient.gain.setTargetAtTime(t?.015:.055,this.context.currentTime,.3))}ready(){return this.enabled&&!this.paused&&this.context?.state==="running"&&this.voices<48}allow(t,e){const n=this.context.currentTime;return n-(this.limits.get(t)??-1/0)<e?!1:(this.limits.set(t,n),!0)}tone(t,e,n="sine",s=.2,r=t,a=0){if(!this.ready())return;const o=this.context.currentTime+a,l=this.context.createOscillator(),c=this.context.createGain();l.type=n,l.frequency.setValueAtTime(t,o),l.frequency.exponentialRampToValueAtTime(Math.max(20,r),o+e),c.gain.setValueAtTime(1e-4,o),c.gain.linearRampToValueAtTime(s,o+Math.min(.006,e/3)),c.gain.exponentialRampToValueAtTime(1e-4,o+e),l.connect(c),c.connect(this.effects),this.voices++,l.onended=()=>{l.disconnect(),c.disconnect(),this.voices--},l.start(o),l.stop(o+e+.01)}noise(t,e,n=1400,s="lowpass",r=0){if(!this.ready())return;const a=this.context.currentTime+r,o=this.context.createBufferSource(),l=this.context.createBiquadFilter(),c=this.context.createGain();o.buffer=this.noiseBuffer,l.type=s,l.frequency.value=n,l.Q.value=.7,c.gain.setValueAtTime(1e-4,a),c.gain.linearRampToValueAtTime(e,a+.003),c.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(l),l.connect(c),c.connect(this.effects),this.voices++,o.onended=()=>{o.disconnect(),l.disconnect(),c.disconnect(),this.voices--},o.start(a,Math.random()*.8),o.stop(a+t+.01)}event(t,e="sidearm",n={}){if(this.ready())if(t==="shot"&&this.allow("shot",.05))if(this.stats.shots++,e==="scattergun")this.noise(.19,.65,1700),this.tone(130,.23,"sine",.65,36),this.noise(.045,.38,3300,"highpass");else if(e==="rifle")for(const s of[0,.065,.13])this.noise(.055,.4,3200,"bandpass",s),this.tone(185,.075,"triangle",.34,55,s);else e==="arc"?(this.tone(290,.085,"sawtooth",.13,1200),this.tone(95,.28,"sine",.65,28,.035),this.tone(1050,.3,"sine",.18,190,.055),this.noise(.2,.32,2100,"bandpass",.035)):(this.noise(.065,.5,2900),this.tone(210,.09,"triangle",.36,55),this.tone(840,.025,"sine",.12,520));else if(t==="pickup"){this.stats.pickups++;const s={heal:[523,659,784],shield:[440,660,880],rapid:[780,980,1175],power:[330,495,660],speed:[660,880,1320],weapon:[392,587,784]};(s[n.drop]||s.weapon).forEach((r,a)=>this.tone(r,.18,"sine",.25,r,a*.055))}else if(t==="hurt")this.noise(.15,.26,630),this.tone(120,.23,"triangle",.38,42);else if(t==="boss"||t==="ambush"){this.stats.warnings++,this.tone(70,.85,"sawtooth",.18,42),this.tone(105,.7,"sine",.45,58),this.noise(.65,.3,330,"bandpass");for(const s of[0,.22,.44])this.tone(440,.12,"triangle",.18,420,s)}else t==="telegraph"&&this.allow("warning",.25)?(this.stats.warnings++,this.tone(165,.35,"triangle",.25,370),this.noise(.3,.17,440,"bandpass")):t==="checkpoint"||t==="complete"?[392,494,587,784].forEach((s,r)=>this.tone(s,.65,"sine",.24,s,r*.13)):t==="dead"&&[220,165,110].forEach((s,r)=>this.tone(s,.42,"sine",.3,s*.8,r*.18))}effect(t){this.ready()&&(t.type==="hit"&&this.allow("impact",.045)?(this.stats.impacts++,this.noise(.065,.19,t.radius>1.2?600:1700,"bandpass"),this.tone(150,.055,"triangle",.12,60)):t.type==="crate"?(this.stats.breaks++,this.noise(.22,.47,1900),this.tone(280,.12,"triangle",.25,70),this.tone(790,.16,"sine",.12,700,.025)):t.type==="death"&&this.allow("death",.06)?(this.noise(.14,.26,570,"bandpass"),this.tone(115,.17,"triangle",.18,48)):(t.type==="slam"||t.type==="arc")&&this.allow("blast",.12)&&(this.noise(.3,.5,950),this.tone(95,.32,"sine",.55,26)))}update(t,{movingSpeed:e=0,gaitPhase:n=0,biome:s,surface:r="dirt"}={}){if(!this.ready()){this.lastFootfall=null;return}const a=Math.floor(n/Math.PI);if(e>.6&&this.lastFootfall!==null&&a!==this.lastFootfall){this.stats.footsteps++;const o=r==="asphalt";this.noise(o?.055:.095,(o?.23:.19)*wu,o?1700:2400,o?"bandpass":"lowpass"),this.tone(o?130:85,.065,"sine",.16*wu,45)}this.lastFootfall=e>.6?a:null,this.birdClock-=t,this.birdClock<=0&&["glade","coast","forest","farmland"].includes(s?.id)?(this.birdClock=10+Math.random()*13,this.tone(1800,.12,"sine",.035,2400),this.tone(2200,.1,"sine",.03,1600,.14)):this.birdClock<=0&&s?.id==="marsh"?(this.birdClock=7+Math.random()*9,this.tone(160,.14,"triangle",.05,110),this.tone(150,.12,"triangle",.04,105,.2)):this.birdClock<=0&&s?.id==="industrial"&&(this.birdClock=12+Math.random()*14,this.tone(320,.9,"sawtooth",.012,270)),this.windFilter&&s&&this.windFilter.frequency.setTargetAtTime(["coast","cliff","mountain","tundra","canyon"].includes(s.id)?780:s.id==="burned"?300:420,this.context.currentTime,1)}}const Ac=Object.freeze({sidearm:"#e0c486",scattergun:"#df985a",rifle:"#6bc0a1",arc:"#ba88ed"}),an="#344e45",wa="#dde0b8",Eu="#8e5937",Pv="#22332c";function Ga(i,t){return new Ma({color:i,roughness:1,metalness:0,flatShading:!0,emissive:t||"#000000",emissiveIntensity:t?.55:0})}function me(i,t,e,n,s,r,a,o,l={}){const c=new le(new gi(r,a,o),Ga(t,l.emissive));return c.position.set(e,n,s),l.rz&&(c.rotation.z=l.rz),i.add(c),c}function oi(i,t,e,n,s,r,a,o={}){const l=new le(new Ns(r,o.tip??r,a,o.sides??6),Ga(t,o.emissive));return l.rotation.z=Math.PI/2,l.position.set(e,n,s),i.add(l),l}const Dv={sidearm(i,t){me(i,t,.05,.16,0,.95,.24,.24),me(i,"#b89a62",.05,.3,0,.8,.05,.2),me(i,an,-.05,-.02,0,.8,.14,.22),oi(i,wa,.62,.17,0,.07,.26),me(i,an,-.3,-.32,0,.26,.56,.22,{rz:-.28}),me(i,Pv,-.31,-.33,0,.2,.4,.24,{rz:-.28}),me(i,an,.02,-.17,0,.26,.05,.1),me(i,an,.14,-.13,0,.05,.12,.1)},scattergun(i,t){me(i,t,-.1,.05,0,.78,.3,.28);for(const e of[-.08,.08])oi(i,wa,.72,.14,e,.075,1);me(i,Eu,.62,-.06,0,.5,.16,.26),me(i,Eu,-.78,-.02,0,.62,.24,.22,{rz:.2}),me(i,"#6f4329",-1.08,-.08,0,.1,.36,.24,{rz:.2}),me(i,an,-.2,-.24,0,.16,.34,.2,{rz:-.3}),me(i,"#f0c27c",-.1,.22,0,.4,.04,.2)},rifle(i,t){me(i,t,0,.06,0,1.1,.28,.24),me(i,"#4c9a7e",0,-.06,0,1.1,.06,.25),oi(i,wa,.88,.1,0,.055,.7),oi(i,"#9ccfb3",.82,.1,0,.09,.18),oi(i,"#9ccfb3",.05,.33,0,.075,.5,{tip:.09}),me(i,an,.05,.23,0,.1,.07,.1),me(i,an,.18,-.28,0,.2,.44,.18,{rz:.18}),me(i,an,-.28,-.24,0,.14,.32,.18,{rz:-.3}),me(i,an,-.82,0,0,.56,.26,.2,{rz:.1})},arc(i,t){me(i,t,-.2,0,0,1,.38,.34),me(i,"#d7b6ff",-.2,.22,0,.8,.06,.26),oi(i,"#684b8e",.42,0,0,.24,.3,{sides:8});for(const n of[-.45,-.25,-.05])oi(i,"#8c6bc0",n,0,0,.21,.05,{sides:8});const e=new le(new Mr(.22,0),Ga("#d5b2ff","#b48bec"));e.position.set(.72,0,0),e.userData.spin=!0,i.add(e),me(i,an,-.35,-.33,0,.16,.34,.2,{rz:-.3}),me(i,an,-.85,.02,0,.32,.3,.26)}};function Lv(i,t){me(i,t,0,.05,0,1,.26,.24),oi(i,wa,.72,.08,0,.06,.5),me(i,an,-.25,-.24,0,.16,.34,.2,{rz:-.3}),me(i,an,-.7,0,0,.4,.22,.2)}function Iv(i){const t=new Zt;return(Dv[i]||Lv)(t,Ac[i]||"#e5d8b1"),t.userData.weapon=i,t}class Nv{constructor(){this.canvas=document.createElement("canvas"),this.canvas.className="weapon-preview-canvas",this.canvas.setAttribute("aria-hidden","true"),this.renderer=new zf({canvas:this.canvas,antialias:!0,alpha:!0}),this.renderer.setClearColor(0,0),this.scene=new bf,this.camera=new _n(28,2,.1,30),this.camera.position.set(0,1.1,4.4),this.camera.lookAt(0,-.05,0),this.scene.add(new Nf("#dcebdd","#344d3e",1.7));const t=new Gl("#fff2da",2.4);t.position.set(2.5,4,3),this.scene.add(t);const e=new Gl("#efc687",.9);e.position.set(-3,1.5,-2),this.scene.add(e),this.pad=new le(new Ns(1.05,1.15,.08,9),Ga("#2a3d33")),this.pad.position.y=-.62,this.scene.add(this.pad),this.ring=new le(new wc(1.1,.025,4,9),new hi({color:"#efc687",transparent:!0,opacity:.7})),this.ring.rotation.x=Math.PI/2,this.ring.position.y=-.57,this.scene.add(this.ring),this.holder=new Zt,this.scene.add(this.holder),this.models=new Map,this.frame=0,this.spin=0,this.last=0}show(t,e){this.stop(),t.append(this.canvas),this.models.has(e)||this.models.set(e,Iv(e)),this.holder.clear(),this.model=this.models.get(e),this.holder.add(this.model),this.ring.material.color.set(Ac[e]||"#efc687"),this.spin=-.6,this.last=performance.now();const n=s=>{this.frame=requestAnimationFrame(n),this.draw(s)};this.frame=requestAnimationFrame(n),this.draw(this.last)}draw(t){const e=Math.max(1,this.canvas.clientWidth),n=Math.max(1,this.canvas.clientHeight),s=Math.min(2,window.devicePixelRatio||1);(this.canvas.width!==Math.round(e*s)||this.canvas.height!==Math.round(n*s))&&(this.renderer.setPixelRatio(s),this.renderer.setSize(e,n,!1),this.camera.aspect=e/n,this.camera.position.z=4.4*Math.max(1,1.9/this.camera.aspect),this.camera.lookAt(0,-.05,0),this.camera.updateProjectionMatrix());const r=Math.min(.05,Math.max(0,(t-this.last)/1e3));this.last=t,this.spin+=r*.9,this.holder.rotation.set(.18,this.spin,0),this.holder.position.y=Math.sin(t/600)*.05,this.model?.traverse(a=>{a.userData.spin&&(a.rotation.y+=r*2)}),this.renderer.render(this.scene,this.camera)}stop(){cancelAnimationFrame(this.frame),this.frame=0,this.canvas.remove()}get running(){return!!this.frame}}const Ms=3,Xo=600,Uv=500,Ov=new Set(["telegraph","blocked","panic","minionCall","beaconMissed","guardianGate","hurt","ambush","roadblock","boss"]),Fv=/\bred\b|sidestep|get clear|get out|step off|leave the red|blocked|no way through|panic|minions|behind you|to open the gate|surrounded/i,Hf="#12291f",we=(i,t,e="")=>`<polygon points="${i}" fill="${t}"${e}/>`,Ae=(i,t,e,n,s)=>`<rect x="${i}" y="${t}" width="${e}" height="${n}" fill="${s}"/>`,Gf=(i,t,e)=>`<svg viewBox="${i}" ${e?`role="img" aria-label="${e}"`:'aria-hidden="true"'} stroke="${Hf}" stroke-width="1.1" stroke-linejoin="round">${t}</svg>`,kv={sidearm:i=>we("9,6 31,6 32,8 32,12 9,12",i)+we("9,10 32,10 32,12 9,12","#00000033",' stroke="none"')+Ae(32,7.5,5,3,"#dde0b8")+we("11,12 18,12 16,20 9,20","#344e45")+we("18,12 22,12 22,15 18,15","none"),scattergun:i=>we("1,10 12,8 12,14 3,18","#8e5937")+Ae(12,7,13,7,i)+Ae(25,6.6,13,2.4,"#dde0b8")+Ae(25,9.4,13,2.4,"#dde0b8")+Ae(26,12,8,3,"#8e5937")+we("14,14 19,14 17,20 12,20","#344e45"),rifle:i=>we("1,9 10,8 10,15 2,17","#344e45")+Ae(10,8,19,6,i)+Ae(10,12,19,2,"#00000030")+Ae(29,9.6,9,2.2,"#dde0b8")+Ae(12,3.6,10,2.8,"#9ccfb3")+we("17,14 22,14 21,21 16,21","#344e45"),arc:i=>Ae(5,7,20,9,i)+Ae(5,13,20,3,"#00000030")+Ae(23,5,5,13,"#684b8e")+we("33,6.5 37.5,9 37.5,14 33,16.5 28.5,14 28.5,9","#d5b2ff")+we("33,6.5 37.5,9 33,11.5 28.5,9","#f0e2ff",' stroke="none"')+we("9,16 14,16 13,21 8,21","#344e45")},Bv=i=>Ae(8,8,22,6,i)+Ae(30,9.6,7,2.4,"#dde0b8")+we("11,14 16,14 15,20 10,20","#344e45")+we("2,9 8,8 8,14 3,16","#344e45"),br=i=>Ac[i]||ee[i]?.color||"#e5d8b1",Sr=i=>ee[i]?.shortName||String(i||"").toUpperCase();function li(i,t=""){return Gf("0 0 40 24",(kv[i]||Bv)(br(i)),t)}const Tu={heal:()=>Ae(4,6,16,13,"#ed615a")+Ae(8,3.5,8,3,"#8d3c39")+'<path d="M12 9v7M8.5 12.5h7" stroke="#fff0cf" stroke-width="2.4" stroke-linecap="square"/>',shield:()=>we("12,2.5 20,6 19,14 12,21.5 5,14 4,6","#60bfe3")+we("12,2.5 20,6 19,14 12,21.5","#245f8355",' stroke="none"')+'<path d="M12 7.5v9M8.5 11h7" stroke="#dcf6ee" stroke-width="1.8"/>',rapid:()=>[5,10.5,16].map(i=>we(`${i},8 ${i+1.75},4 ${i+3.5},8`,"#f6d58f")+Ae(i,8,3.5,10,"#efa840")).join("")+Ae(3.5,17,17,3,"#584b39"),power:()=>Ae(7,4,10,17,"#aa78ee")+Ae(9,2,6,2,"#d6a4fa")+we("13,7 9,13 12,13 11,18 15,11 12,11","#eedcff",' stroke="none"'),speed:()=>we("3,7 9,12 3,17 6,12","#f1ce65")+we("10,7 16,12 10,17 13,12","#f1ce65")+we("17,7 22,12 17,17 20,12","#ffe8a0"),parcel:()=>we("12,3 21,7 21,17 12,21 3,17 3,7","#c7a46a")+we("3,7 12,11 21,7 12,3","#e2c48d")+`<path d="M12 11v10" stroke="${Hf}" stroke-width="1"/>`};function zv(i){return Gf("0 0 24 24",(Tu[i==="health"?"heal":i]||Tu.parcel)())}function bs(i){if(!i)return Array(Ms).fill(null);if(Array.isArray(i.weaponSlots))return Array.from({length:Ms},(e,n)=>i.weaponSlots[n]||null);const t=Number.isFinite(i._fireClock)?i._fireClock:0;return Array.from({length:Ms},(e,n)=>{const s=i.weapons?.[n];if(!s)return null;const r=ee[s]?.cooldown||1;return{id:s,ammo:1/0,maxAmmo:1/0,cooldown:s===i.player?.weapon?Math.max(0,Math.min(r,t)):0,cooldownMax:r}})}function Vf(i){if(!i)return 0;if(!Number.isFinite(i.ammo))return 1;const t=Number.isFinite(i.maxAmmo)&&i.maxAmmo>0?i.maxAmmo:Math.max(1,i.ammo);return Math.max(0,Math.min(1,i.ammo/t))}function Hv(i){return!i||!(i.cooldown>0)||!(i.cooldownMax>0)?0:Math.max(0,Math.min(1,i.cooldown/i.cooldownMax))}const Gv=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2;class Vv{constructor(){this.context={},this.slotEls=[],this.shown=[],this.overrides=new Map,this.recentFlights=new Map,this.messageTones=new Map,this.active={id:"",at:-1e9},this.flights=0,this.pending=null}configure(t){Object.assign(this.context,t);const{bar:e}=this.context;if(e&&!this.slotEls.length)for(let n=0;n<Ms;n++){const s=document.createElement("button");s.type="button",s.className="weapon-slot empty",s.dataset.slot=String(n),s.addEventListener("click",r=>{r.stopPropagation(),this.context.onSlotTap?.(n)}),s.innerHTML='<span class="slot-icon"></span><i class="slot-cool"></i><i class="slot-ammo"><b></b></i>',e.append(s),this.slotEls.push(s),this.shown.push({id:null,ammo:-1,cooldown:-1,cls:""})}}reset(){this.overrides.clear(),this.recentFlights.clear(),this.messageTones.clear(),this.active={id:"",at:-1e9},this.context.layer?.replaceChildren(),this.flights=0,this.pending=null}onEvent(t){if(t?.type)if(t.text&&this.messageTones.set(t.text,Ov.has(t.type)?"danger":"info"),t.type==="pickup")this.flyPickup(t);else if(t.type==="weaponOffer")this.offerArrives(t);else if(t.type==="weaponAccepted"){const e=Number(t.slot),n=this.pending;if(n){const s=n.centre(),r=n.slot===e&&!t.replaced;this.removePending(),r?(this.recentFlights.set(`weapon:${e}`,performance.now()),this.update(this.context.game?.()),this.bump(this.slotEls[e])):this.weaponArrives(e,t.id,null,t.replaced||null,s)}else if(!this.recentlyFlew(`weapon:${e}`)){const s=this.context.game?.()?.player;this.weaponArrives(e,t.id,{x:t.x??s?.x??0,y:t.y??s?.y??0},t.replaced||null)}}else t.type==="weaponDiscarded"&&this.leavePending()}endEvents(){this.messageTones.clear()}toneFor(t){return this.messageTones.get(t)||(Fv.test(t)?"danger":"info")}recentlyFlew(t,e=900){return performance.now()-(this.recentFlights.get(t)??-1e9)<e}update(t){if(!this.slotEls.length||!t)return;const e=bs(t),n=performance.now(),s=t.player?.weapon||"";s!==this.active.id&&n-this.active.at>=Uv&&(this.active={id:s,at:n});for(let r=0;r<Ms;r++){const a=this.slotEls[r],o=this.shown[r],l=this.overrides.get(r);let c=e[r];l?.showId&&(c={...c||{},id:l.showId});const h=c?.id??null,f=!!l?.hide;h!==o.id&&(a.querySelector(".slot-icon").innerHTML=h?li(h):"",a.style.setProperty("--wc",h?br(h):"#e5d8b1"),a.setAttribute("aria-label",h?Sr(h):"Empty weapon slot"),o.id=h);const u=Vf(c),d=l?0:Hv(c);Math.abs(u-o.ammo)>.004&&(a.style.setProperty("--ammo",u.toFixed(3)),o.ammo=u),(Math.abs(d-o.cooldown)>.004||d===0&&o.cooldown!==0)&&(a.style.setProperty("--cd",d.toFixed(3)),o.cooldown=d);const m=!!c&&!Number.isFinite(c.ammo),x=["weapon-slot",!h||f?"empty":"",h&&!f?"tappable":"",h&&!f&&h===this.active.id?"active":"",m?"infinite":"",h&&!m&&u<=0?"dry":h&&!m&&u<.25?"low":"",l?.vanish?"vanish":"",f&&!l?.vanish?"incoming":""].filter(Boolean).join(" ");if(x!==o.cls){const g=a.classList.contains("hud-bump");a.className=x+(g?" hud-bump":""),a.tabIndex=h&&!f?0:-1,o.cls=x}}this.syncPending(t)}pendingSpot(t){const{shell:e,bar:n}=this.context;if(!e)return null;const s=e.getBoundingClientRect(),r=Number.isInteger(t)?this.slotEls[t]:null;if(r){const o=r.getBoundingClientRect();return{x:o.left+o.width/2-s.left,y:o.top+o.height/2-s.top,size:o.width+8}}const a=(n||this.slotEls.at(-1))?.getBoundingClientRect();return a?{x:a.right-22-s.left,y:a.bottom+30-s.top,size:44}:{x:s.width-40,y:140,size:44}}createPending(t,e=!1){const{layer:n}=this.context;if(!n)return null;const s=document.createElement("button");s.type="button",s.className=`offer-pending${t.slot===null||t.slot===void 0?" beside":""}${e?" incoming":""}`,s.style.setProperty("--wc",br(t.id)),s.setAttribute("aria-label",`${ee[t.id]?.name||Sr(t.id)} found: tap to look before it is left behind`),s.innerHTML=`<svg class="offer-ring" viewBox="0 0 44 44" aria-hidden="true"><circle class="ring-track" cx="22" cy="22" r="20"/><circle class="ring-fill" cx="22" cy="22" r="20" pathLength="100"/></svg><span class="slot-icon">${li(t.id)}</span>`,s.addEventListener("click",a=>{a.stopPropagation(),this.context.onOfferTap?.()}),n.append(s);const r={el:s,offer:t,id:t.id,slot:Number.isInteger(t.slot)?t.slot:null,leaving:!1,centre:()=>{const a=this.pendingSpot(r.slot);return a?{x:a.x,y:a.y}:null}};return this.pending=r,this.placePending(),r}placePending(){const t=this.pending;if(!t)return;const e=this.pendingSpot(t.slot);e&&(t.el.style.left=`${e.x.toFixed(1)}px`,t.el.style.top=`${e.y.toFixed(1)}px`,t.el.style.setProperty("--size",`${Math.round(e.size)}px`))}offerArrives(t){const e=this.context.game?.(),n=e?.weaponOffer;if(!n||n.id!==t.id)return;this.pending&&this.removePending();const s=this.createPending(n,!0);if(!s)return;const r=s.slot===null?"offer":`weapon:${s.slot}`;this.fly({icon:li(n.id),from:this.screenPoint(t.x??n.x,t.y??n.y),target:r,weapon:!0,onLand:()=>{this.pending===s&&s.el.classList.remove("incoming")}})}syncPending(t){const e=t?.weaponOffer,n=this.pending;if(!e){n&&!n.leaving&&!t?.events?.some(o=>o.type==="weaponAccepted"||o.type==="weaponDiscarded")&&this.removePending();return}(!n||n.offer!==e&&n.id!==e.id)&&(n&&this.removePending(),this.createPending(e,!1));const s=this.pending;if(!s)return;s.offer=e,this.placePending();const r=e.maxLife>0?e.maxLife:5,a=Math.max(0,Math.min(1,1-e.life/r));Math.abs(a-(s.progress??-1))>.002&&(s.progress=a,s.el.style.setProperty("--p",a.toFixed(3)),s.el.querySelector(".ring-fill").style.strokeDashoffset=(100-a*100).toFixed(2),s.el.classList.toggle("urgent",e.life<=1.5))}removePending(){this.pending?.el.remove(),this.pending=null}leavePending(){const t=this.pending;if(!t||t.leaving)return;t.leaving=!0;const e=this.pendingSpot(t.slot);t.el.classList.add("leaving"),e&&this.puffAt(e.x,e.y),setTimeout(()=>{t.el.remove(),this.pending===t&&(this.pending=null)},380)}bump(t){t&&(t.classList.remove("hud-bump"),t.offsetWidth,t.classList.add("hud-bump"),setTimeout(()=>t.classList.remove("hud-bump"),420))}screenPoint(t,e){const{renderer:n}=this.context,s=this.context.game?.(),r=Number.isFinite(t)?t:s?.player?.x??0,a=Number.isFinite(e)?e:s?.player?.y??0,o=n?.worldToScreen?.(r,a,1.1);if(o&&Number.isFinite(o.x)&&Number.isFinite(o.y))return o;const l=this.context.shell?.getBoundingClientRect();return{x:(l?.width||0)/2,y:(l?.height||0)*.55}}targetFor(t){let e=typeof t.target=="string"?t.target:"";if(!e){const n=t.drop==="health"?"heal":t.drop;if(n==="heal")e="health";else if(n==="shield")e="shield";else if(n==="parcel")e="parcel";else if(["rapid","power","speed"].includes(n))e=`buff:${n}`;else if(n==="weapon"||n==="ammo"){const s=bs(this.context.game?.()),r=t.weapon||t.id;e=`weapon:${Math.max(0,s.findIndex(o=>o?.id===r))}`}}return e}targetElement(t){const e=s=>document.querySelector(s);if(t==="health")return e("#hp-bar")?.parentElement;if(t==="parcel")return e("#cargo-bar")?.parentElement;if(t.startsWith("weapon:"))return this.slotEls[Number(t.slice(7))]||this.slotEls[0];if(t==="offer")return this.pending?.el||this.context.bar;const n=t==="shield"?"shield":t.startsWith("buff:")?t.slice(5):"";return n&&e(`#buffs [data-buff="${n}"]`)||(n==="shield"?e("#hp-bar")?.parentElement:e("#buffs:not(:empty)"))||e(".route-hud")}flyPickup(t){const e=this.targetFor(t);if(!e||e.startsWith("weapon:")&&this.recentlyFlew(e))return;this.context.refresh?.();let n;if(e.startsWith("weapon:")){const s=bs(this.context.game?.());n=li(t.weapon||t.id||s[Number(e.slice(7))]?.id)}else n=zv(e.startsWith("buff:")?e.slice(5):e==="health"?"heal":e);this.fly({icon:n,from:this.screenPoint(t.x,t.y),target:e,weapon:e.startsWith("weapon:")})}fly({icon:t,from:e,target:n,delay:s=0,weapon:r=!1,onLand:a}){const{layer:o,shell:l}=this.context,c=this.targetElement(n);if(!o||!l)return a?.(),null;this.recentFlights.set(n,performance.now());const h=l.getBoundingClientRect(),f=c?.getBoundingClientRect(),u=f?{x:f.left+f.width/2-h.left,y:f.top+f.height/2-h.top}:{x:h.width/2,y:20},d=document.createElement("div");d.className=`fly-icon${r?" weapon":""}`,d.dataset.target=n,d.innerHTML=t,o.append(d),this.flights++;const m=Math.min(150,Math.hypot(u.x-e.x,u.y-e.y)*.4+30),x={x:(e.x+u.x)/2+(u.x<e.x?40:-40),y:Math.min(e.y,u.y)-m},g=[];for(let y=0;y<=16;y++){const _=Gv(y/16),w=1-_,E=w*w*e.x+2*w*_*x.x+_*_*u.x,A=w*w*e.y+2*w*_*x.y+_*_*u.y,D=1.25-.55*_+Math.sin(Math.PI*_)*.25;g.push({transform:`translate(${E.toFixed(1)}px,${A.toFixed(1)}px) translate(-50%,-50%) scale(${D.toFixed(3)})`,opacity:y===0?0:y===16?.85:1,offset:y/16})}d.style.transform=g[0].transform;const p=()=>{d.isConnected&&(d.remove(),this.flights--,c&&(c.classList.remove("hud-bump"),c.offsetWidth,c.classList.add("hud-bump"),setTimeout(()=>c.classList.remove("hud-bump"),420)),a?.())};let M=null;return d.animate?(M=d.animate(g,{duration:Xo,delay:s,easing:"linear",fill:"both"}),M.onfinish=p,M.oncancel=p):setTimeout(p,Xo+s),setTimeout(()=>{M?.playState!=="paused"&&p()},Xo+s+2e3),d}weaponArrives(t,e,n,s=null,r=null){const a=Math.max(0,Math.min(Ms-1,Number(t)||0)),o=r||this.screenPoint(n?.x,n?.y);this.recentFlights.set(`weapon:${a}`,performance.now());const l=()=>{this.overrides.delete(a),this.update(this.context.game?.())};s?(this.overrides.set(a,{showId:s,vanish:!0}),this.puff(a),setTimeout(()=>{this.overrides.get(a)?.vanish&&this.overrides.set(a,{hide:!0})},330),this.fly({icon:li(e),from:o,target:`weapon:${a}`,delay:260,weapon:!0,onLand:l})):(this.overrides.set(a,{hide:!0}),this.fly({icon:li(e),from:o,target:`weapon:${a}`,weapon:!0,onLand:l})),this.update(this.context.game?.())}puff(t){const{shell:e}=this.context,n=this.slotEls[t];if(!e||!n)return null;const s=e.getBoundingClientRect(),r=n.getBoundingClientRect();return this.puffAt(r.left+r.width/2-s.left,r.top+r.height/2-s.top)}puffAt(t,e){const{layer:n}=this.context;if(!n)return null;const s=document.createElement("div");s.className="puff",s.style.left=`${t}px`,s.style.top=`${e}px`;for(let r=0;r<8;r++){const a=r/8*Math.PI*2+r%2*.3,o=16+r%3*6,l=document.createElement("i");l.style.setProperty("--dx",`${(Math.cos(a)*o).toFixed(1)}px`),l.style.setProperty("--dy",`${(Math.sin(a)*o-6).toFixed(1)}px`),l.style.animationDelay=`${r%3*30}ms`,s.append(l)}return n.append(s),setTimeout(()=>s.remove(),900),s}}const Zn=new Vv,lt=i=>document.getElementById(i),Va="kuru.delivery.v1",Wf="kuru.preferences.v1",wr=["Northgate refuge","Glasswood station","Saltwater depot","Ochre shelter","Pale Ridge post","The Lantern"];let Ke={sound:!0,leftHand:!1};try{Ke={...Ke,...JSON.parse(localStorage.getItem(Wf)||"{}")}}catch{}const An=new Rv(Ke.sound);let Ge,G,_s,De=!1,tn=!1,Xf="journey",Xl=0,$o=0,$l,Au,Cn="",Ee=null,zn="";const Mn=new Set,_e={active:!1,id:null,originX:0,originY:0,x:0,y:0},Li={x:0,y:0};let Yl=new Set,Cu=-1e6;const Ea={changed:"",shown:"",pending:"",since:0,seenX:0,seenY:0,lastX:0,lastY:0},Ru=new Set,Pu={rapid:"RAPID FIRE · faster fire, shorter reach",power:"OVERCHARGE · more damage per shot",speed:"QUICKSTEP · move faster",shield:"SHIELD · absorbs damage"},$f={rapid:["≋","#efa840","RAPID FIRE"],power:["ϟ","#aa78ee","OVERCHARGE"],speed:["»","#f1ce65","QUICKSTEP"],shield:["◇","#60bfe3","SHIELD"]};let Yf="",Wa=Le,Oa=null,Er=null,xs={leg:1,seed:null,pace:null},qf=null;function jf(){try{const i=localStorage.getItem(Va);if(!i)return null;let t=JSON.parse(i);if(t&&!Je.validateSave(t)){for(const e of["guardianCheckpoint","waypointCheckpoint","checkpoint"])if(t[e]&&Je.validateSave(t[e])){const n=e==="checkpoint"?void 0:t.checkpoint&&Je.validateSave(t.checkpoint)?t.checkpoint:void 0;t={...t[e],...n?{checkpoint:n}:{}};break}}return!Je.validateSave(t)||t.mode==="complete"?(zn="The previous checkpoint could not be read. You can start a fresh delivery.",null):t}catch{return zn="Saved progress is unavailable in this browser. Keep this tab open to continue your delivery.",null}}function Wv(){try{const i=G.serialize();return localStorage.setItem(Va,JSON.stringify(i)),Ee=i,zn="",!0}catch{return zn="This browser could not save your checkpoint. Keep this tab open to preserve your journey.",!1}}function Du(i){const t=i==="waypoint"?G.waypointSave():G.guardianSave();if(t)try{localStorage.setItem(Va,JSON.stringify(t)),Ee=t,zn=""}catch{}}function Lu(){try{localStorage.setItem(Wf,JSON.stringify(Ke))}catch{}}function Kf(){const i=lt("resume-button"),t=lt("begin-button");if(i.classList.toggle("hidden",!Ee),!Ee){t.className="primary-button",t.firstChild.textContent="BEGIN DELIVERY ";return}const e=Ee.leg??0,n=mi(Ee.pace,e);let s=Math.max(0,(e+1)*n-(Ee.player?.y??0));for(let l=e+1;l<6;l++)s+=mi(Ee.pace,l);const r=s>=1e3?`${(s/1e3).toFixed(1)} KM`:`${Math.round(s/10)*10} M`;i.className="primary-button";const a=l=>l&&Math.abs(l.player.y-Ee.player.y)<.01&&l.leg===Ee.leg,o=a(Ee.guardianCheckpoint)?"AT THE GUARDIAN GATE":a(Ee.waypointCheckpoint)?"AT A WAYPOINT":`${r} TO GO`;i.innerHTML=`RESUME · ${o} · LEG ${Math.min(6,(Ee.leg??0)+1)} OF 6 <span>→</span>`,t.className="text-button",t.firstChild.textContent="START A NEW DELIVERY ",t.parentNode.insertBefore(i,t)}function Jf(){lt("save-notice").textContent=zn,lt("save-notice").classList.toggle("hidden",!zn)}function Xa(i){const t=Math.max(0,Math.floor(i));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}let Ta=null;function Zf(i,t,e){i.classList.remove("info","danger","area","hidden");for(const n of t.split(" "))i.classList.add(n);i.style.setProperty("--d",`${e}ms`),i.style.animation="none",i.offsetWidth,i.style.animation=""}function bn(i,t=3600,e=!1){const n=e===!0,s=typeof e=="string"?e:n?"info area":Zn.toneFor(i);if(!lt("encounter").classList.contains("hidden")){n||(Ta=[i,t,s]);return}clearTimeout($l),lt("toast").textContent=i,Zf(lt("toast"),s,t),$l=setTimeout(()=>lt("toast").classList.add("hidden"),t)}function tr(i){clearTimeout(Au),clearTimeout($l),lt("toast").classList.add("hidden"),lt("encounter-text").textContent=i,Zf(lt("encounter"),"danger",4200),Au=setTimeout(()=>{if(lt("encounter").classList.add("hidden"),Ta){const[t,e,n]=Ta;Ta=null,bn(t,e,n)}},4200)}function Os(){Mn.clear(),_e.active=!1,_e.id=null,_e.x=_e.y=0,Li.x=Li.y=0,lt("joystick").classList.remove("active"),lt("stick-knob").style.transform="",Cc()}function Cc(){lt("joystick").style.left=Ke.leftHand?"30%":"70%",lt("joystick").style.top="79%"}function Fa(i){tn=i,Os(),An.setPaused(i)}function Le(){Rc(),lt("modal").classList.add("hidden"),G?.closeCard?.(),De&&G.mode==="playing"&&Fa(!1)}function Rc(){Oa?.stop(),lt("modal").classList.remove("weapon-modal"),Er=null}function Rn(i,t,e,n){Wa=Le,Rc(),Os(),De&&Fa(!0),lt("modal-eyebrow").textContent=i,lt("modal-title").textContent=t,lt("modal-content").innerHTML=e,lt("modal-actions").replaceChildren();for(const[s,r,a=!1]of n){const o=document.createElement("button");if(o.className=a?"primary-button":"secondary-button",o.textContent=s,a){const l=document.createElement("span");l.textContent="↗",o.append(l)}o.onclick=r,lt("modal-actions").append(o)}lt("modal").classList.remove("hidden"),lt("modal").scrollTop=0,document.querySelector(".modal-panel").scrollTop=0,lt("modal-content").scrollTop=0,setTimeout(()=>lt("modal-actions").querySelector("button")?.focus({preventScroll:!0}),0)}function Qf(){const i=De&&tn&&G?.mode==="playing";Rn("COURIER’S FIELD GUIDE","A way through.",`<ul class="guide-list">
    <li><span>◎</span><div><b>One thumb. Any direction.</b><br>Drag in the lower part of the screen to move. Release to stop. Explore beyond the city to the map edge; the arrow points back to your next refuge. On a computer, use WASD or arrow keys.</div></li>
    <li><span>⌁</span><div><b>You move. Your gear handles the rest.</b><br>Your courier chooses weapons and fires automatically. Single shots reach farther; rapid fire and volleys have shorter range. Move closer to bring more firepower into play. There’s no ammunition to manage.</div></li>
    <li><span>≋</span><div><b>Boost chips.</b><br>Icons under the route name show active boosts: ≋ rapid fire, ϟ overcharge, » quickstep, ◇ shield. The number is seconds left (shield points).</div></li>
    <li><span>◇</span><div><b>Take the road less empty.</b><br>Approach lockers and crates to shoot them open. Walk over glowing drops for weapons, health, shields and temporary upgrades.</div></li>
    <li><span>!</span><div><b>Keep moving when it turns red.</b><br>Fast packs and large swarms can surround you. Dodge red warning lanes and rings. Health bars show each threat’s strength. No enemy falls to a single shot: dogs and walkers take two or three, brutes eight or more and guardians sixteen or more. Every pellet of one trigger pull counts as one shot, and each bullet stops at its first target or solid obstacle, including Arc rounds.</div></li>
    <li><span>↗</span><div><b>Make it to the next light.</b><br>Defeat the guardian, evade its minions, then return to the refuge beacon. Checkpoints heal you, patch your parcel up to 85% and save your loadout on this browser. You can leave there and return later. Death returns you to the last checkpoint.</div></li>
  </ul>`,[["GOT IT",i?Rs:Le,!0]]),Wa=i?Rs:Le}function Xv(){const i=G.leg||0,t=44,e=3,n=9,s=36,r=h=>mi(G.pace,h),a=(h,f)=>n+h*(t+e)+Math.max(0,Math.min(1,(f-h*r(h))/r(h)))*t;let o="",l=0;for(let h=0;h<wr.length;h++){const f=r(h);for(const m of Sd(G.seed,h,f)){const x=cn[m.id].ground,g=a(h,m.start),p=a(h,m.end);o+=`<rect x="${g.toFixed(1)}" y="${s-4}" width="${(p-g).toFixed(1)}" height="8" fill="${x}"/>`}for(const m of ec(G.seed,h*f,(h+1)*f,f)){l++;const x=a(h,m.start),g=a(h,m.end),p=m.side*15,M=cn[m.biome].ground;o+=`<path d="M${x.toFixed(1)} ${s} Q${((x+g)/2).toFixed(1)} ${s+p*2} ${g.toFixed(1)} ${s}" fill="none" stroke="#12291f" stroke-width="4.5" stroke-linecap="round"/><path d="M${x.toFixed(1)} ${s} Q${((x+g)/2).toFixed(1)} ${s+p*2} ${g.toFixed(1)} ${s}" fill="none" stroke="${M}" stroke-width="2.5" stroke-linecap="round"/>`}const u=n+h*(t+e)+t,d=h<i;o+=`<circle cx="${u}" cy="${s}" r="4.5" fill="${d?"#efc687":"#172823"}" stroke="#efc687" stroke-width="1.2"/><text x="${u-t/2}" y="${s+29}" text-anchor="middle" fill="${h===i?"#efc687":"#f3f0df99"}" font-size="7" font-family="IBM Plex Mono, monospace" letter-spacing="1">0${h+1}</text>`}const c=a(i,G.player.y);return o+=`<path d="M${c.toFixed(1)} ${s-7} l-5 -10 h10 Z" fill="#efc687" stroke="#12291f" stroke-width="1"/>`,`<svg class="route-strip" viewBox="0 0 300 ${s+36}" role="img" aria-label="Route strip: six legs, ${l} forks that rejoin the main road, you are on leg ${i+1}">${o}</svg><p class="strip-note">ARCS ARE FORKS THROUGH ANOTHER ENVIRONMENT · THEY REJOIN THE ROAD · ▼ YOU</p>`}function td(){const i=G.waypointSpacing||600,t=G.player.y-G.legStart(),e=Math.max(0,Math.ceil(G.checkpointY-G.player.y));if(G.pace==="journey"&&!G._bossSpawned){const n=(Math.floor(t/i)+1)*i-t;if(n<e-80)return`NEXT SAVE · ${Math.ceil(n)} M (WAYPOINT) · REFUGE ${e} M`}return`NEXT SAVE · THE REFUGE, ${e} M AHEAD`}function $v(){const i=G?.leg||0,t=wr.map((e,n)=>`<li class="${n===i?"current":""}"><span class="stop-number">0${n+1}</span><div><b>${e}</b><small>${n<i?"CHECKPOINT SECURED":n===i?G._bossDefeated?"CURRENT DESTINATION · PATH CLEAR":"CURRENT DESTINATION · GUARDIAN AHEAD":n===5?"DELIVERY DESTINATION":"SAFEHOUSE · GUARDIAN AHEAD"}</small></div><span class="stop-state">${n<i?"✓":n===i?"↗":"○"}</span></li>`).join("");Rn("DISPATCH 001 · MEDICAL SUPPLIES","Six lights ahead.",`<p>From District 08 to The Lantern. Each leg passes through reclaimed streets, forests, forgotten villages, coast, desert and high country.</p><p class="save-note">${td()}</p>${Xv()}<ol class="route-list">${t}</ol><p class="save-note">${G.pace==="express"?"FIELD TEST · About 11–15 minutes total. Refuges roughly every two minutes.":"THE JOURNEY · About 35–45 minutes in all. Refuges are roughly 6–8 minutes apart, with a waypoint save every 600 m."}</p>`,[["BACK TO THE ROAD",Le,!0]])}function Rs(){!De||G.mode!=="playing"||(Rn("TAKE A BREATH","The road can wait.",`<p>Your delivery is paused. ${G.pace==="journey"?`${td().replace("NEXT SAVE · ","Next save: ").toLowerCase().replace(/^./,i=>i.toUpperCase())}. `:""}${Ee?`Your last saved stop is checkpoint ${Ee.checkpointCount||"departure"}.`:"Your first checkpoint is still ahead."} Progress after a checkpoint stays in this tab until the next safehouse.</p><div class="settings-row"><span>Soundscape</span><button id="sound-toggle">${Ke.sound?"ON":"OFF"}</button></div><div class="settings-row"><span>Thumb position</span><button id="hand-toggle">${Ke.leftHand?"LEFT":"RIGHT"}</button></div><div class="stats-grid"><div>${Xa(G.elapsed)}<small>ON THE ROAD</small></div><div>${G.kills}<small>INFECTED CLEARED</small></div></div>`,[["CONTINUE DELIVERY",Le,!0],["FIELD GUIDE",Qf],["RETURN TO DISPATCH",()=>Yv()]]),lt("sound-toggle").onclick=()=>{Ke.sound=!Ke.sound,An.setEnabled(Ke.sound),Lu(),lt("sound-toggle").textContent=Ke.sound?"ON":"OFF"},lt("hand-toggle").onclick=()=>{Ke.leftHand=!Ke.leftHand,Cc(),Lu(),lt("hand-toggle").textContent=Ke.leftHand?"LEFT":"RIGHT"})}function Yv(){Rn("RETURN TO DISPATCH","Leave the road?","<p>Your last checkpoint will remain saved. Travel since that checkpoint will be lost if you start a new delivery or close this tab.</p>",[["STAY ON THE ROAD",Le,!0],["RETURN TO DISPATCH",Oi]])}function Oi(){De=!1,tn=!1,Cn="",Os(),Rc(),Zn.reset(),lt("modal").classList.add("hidden"),lt("hud").classList.add("hidden"),lt("intro").classList.remove("hidden"),Ee=jf(),Kf(),Jf(),An.setPaused(!0)}function qv(){const i={...G.refugeReport||{}};Number.isFinite(i.hpBefore)&&Number.isFinite(G.player.hp)&&(i.hpAfter=G.player.hp);const t=(n,s,r)=>Number.isFinite(s)&&Number.isFinite(r)?`<b>${n} ${Math.round(s)}${n==="Parcel"?"%":""} → ${Math.round(r)}${n==="Parcel"?"%":""}</b>`:"",e=[t("Courier",i.hpBefore,i.hpAfter),t("Parcel",i.parcelBefore,i.parcelAfter)].filter(Boolean);return e.length?e.join(" · "):"Your courier is patched up and the parcel is patched"}function jv(){const i=Yf||G.refugeReport?.rule||G.refugeReport?.healRule||G.refugeReport?.healText||G.healRule||"";return i?`<p class="heal-rule">${Pc(String(i))}</p>`:""}function ed(){const i=Wv();Rn(`CHECKPOINT 0${G.checkpointCount} · ${wr[G.leg].toUpperCase()}`,"A little shelter.",`<p>The guardian is gone. ${qv()}. The next stretch of road is waiting.</p>${jv()}<div class="stats-grid"><div>${Xa(G.elapsed)}<small>ON THE ROAD</small></div><div>${G.kills}<small>INFECTED CLEARED</small></div><div>${bs(G).filter(Boolean).length}<small>WEAPONS CARRIED</small></div><div>0${G.checkpointCount}<small>SAFEHOUSES SECURED</small></div></div><p class="save-note">${i?"✓ Checkpoint saved on this browser. You can close the tab and resume here later.":zn}</p>`,[["CONTINUE DELIVERY",()=>{G.continueJourney(),Cn="",Le(),bn(`Next refuge: ${wr[G.leg]}`)},!0],["REST & RETURN TO DISPATCH",Oi]])}function Kv(){const i=G.canRetryGuardian,t=G.canRetryWaypoint,e=G.checkpointCount?`checkpoint ${G.checkpointCount}`:"District 08",n=i?`<p>The guardian won this round. You can <b>retry at its gate</b>, about 35 m short of it with this stretch of road behind you and full health, or go back to your last refuge (${e}) and walk the leg again.</p>`:t?`<p>The road took its toll. You can <b>retry from your last waypoint</b>, saved at even stretches along each leg (every retry starts at full health), or go back to your last refuge (${e}) and walk the whole leg again.</p>`:`<p>The road took its toll. Your supplies and route up to ${e} are safe. Try a different line through the danger.</p>`,s=()=>{G.retryCheckpoint(),Cn="",Le()},r=i?[["RETRY AT THE GUARDIAN",()=>{G.retryGuardian(),Cn="",Le()},!0],["BACK TO LAST REFUGE",s],["RETURN TO DISPATCH",Oi]]:t?[["RETRY FROM WAYPOINT",()=>{G.retryWaypoint(),Cn="",Le()},!0],["BACK TO LAST REFUGE",s],["RETURN TO DISPATCH",Oi]]:[["RETURN TO LAST CHECKPOINT",s,!0],["RETURN TO DISPATCH",Oi]];Rn("THE COURIER NETWORK","Not the end.",`${n}<div class="stats-grid"><div>${Xa(G.elapsed)}<small>ON THE ROAD</small></div><div>${G.kills}<small>INFECTED CLEARED</small></div></div>`,r)}function Jv(){try{localStorage.removeItem(Va)}catch{}Ee=null,Rn("DISPATCH 001 · RECEIVED","You kept a light on.",`<p>The Lantern received your medical supplies. Somewhere behind those walls, someone has another tomorrow.</p><div class="stats-grid"><div>${Xa(G.elapsed)}<small>DELIVERY TIME</small></div><div>${G.kills}<small>INFECTED CLEARED</small></div><div>${Math.round(G.cargo)}%<small>PARCEL CONDITION</small></div><div>${bs(G).filter(Boolean).length}<small>WEAPONS RECOVERED</small></div></div><p class="save-note">${G.pace==="express"?"FIELD TEST COMPLETE · Try The Journey for the full travel pace.":"DELIVERY COMPLETE · Every new dispatch generates a different route."}</p>`,[["ANOTHER DELIVERY",Oi,!0]])}const ql=i=>Math.max(0,Math.min(1,Number(i)||0)),Iu=50,Zv=1.6;function Qv(i,t){const e=Xu(i);t||={};const n=t.range&&Number.isFinite(t.range.max)?t.range:e.range;return{damage:t.damage??e.damage,rate:t.rate??e.rate,range:{min:Math.max(0,n.min||0),max:n.max},cooldown:t.cooldown??e.cooldown}}function da(i,t,e=!1){return`<div class="stat-row${e?" scaled":""}"><span>${i}</span>${t}</div>`}function Yo(i,t="",e=""){return`<i class="stat-bar${t}"${e?` role="img" aria-label="${e}"`:""}><b style="width:${Math.round(ql(i)*100)}%"></b></i>`}function Nu(i,t){return`<span class="range-scale"><span>${i}</span><span>${t}</span></span>`}function t1(i,t){const e=Qv(i,t),n=ql(e.range.min/Iu),s=ql(e.range.max/Iu);return[da("DAMAGE",Yo(e.damage/60,"",`Damage ${Math.round(e.damage)} per shot`)),da("FIRE RATE",Yo(e.rate/6,"",`${e.rate} rounds per second`)),da("RANGE",`<span class="stat-cell"><i class="range-track" role="img" aria-label="Range ${Math.round(e.range.min)} to ${Math.round(e.range.max)} metres"><b style="left:${(n*100).toFixed(0)}%;width:${(Math.max(.04,s-n)*100).toFixed(0)}%"></b></i>${Nu("NEAR","FAR")}</span>`,!0),da("COOLDOWN",`<span class="stat-cell">${Yo(1-e.cooldown/Zv," cooldown",`${e.cooldown} seconds between shots`)}${Nu("LONG","SHORT")}</span>`,!0)].join("")}function jl(i,t,e="",n=""){return`<div class="offer" style="--wc:${br(i)}"><div id="offer-stage" class="offer-stage"></div><div class="offer-stats">${t1(i,t)}</div>${e?`<p class="offer-note">${e}</p>`:""}${n}</div>`}function e1(i,t,e){const n=t.map((s,r)=>s?`<button class="slot-choice" data-slot="${r}" style="--wc:${br(s.id)}" ${s.id==="sidearm"?'disabled aria-label="Sidearm, always kept"':`aria-label="Swap out ${Sr(s.id)}"`}><span class="slot-icon">${li(s.id)}</span><b>${Sr(s.id)}</b><i class="slot-ammo${Number.isFinite(s.ammo)?"":" infinite"}"><b style="width:${Math.round(Vf(s)*100)}%"></b></i><small>${s.id==="sidearm"?"ALWAYS KEPT":"SWAP OUT"}</small></button>`:"").join("");return e?jl(i.id,i.stats,"All three slots are full. Tap a weapon to swap it out, or leave this one behind.",`<div class="slot-choices">${n}</div>`):jl(i.id,i.stats,"It goes into your free slot. Your courier still picks the right weapon for each threat.")}function nd(i){try{Oa??=new Nv,Oa.show(lt("offer-stage"),i)}catch{lt("offer-stage").innerHTML=li(i),lt("offer-stage").classList.add("flat")}}function Kl(){const i=G?.weaponOffer;if(!De||!i||Er||G.mode!=="playing"||!lt("modal").classList.contains("hidden"))return!1;const t=bs(G),e=t.findIndex(o=>!o),n=e<0,s=i.stats?.name||ee[i.id]?.name||Sr(i.id),r=o=>{if(!G.weaponOffer)return Le();G.acceptWeapon(o),Le(),Ar()},a=()=>{G.weaponOffer&&G.discardWeapon(),Le(),Ar()};G.openCard(),Rn(n?"NEW WEAPON · ALL SLOTS FULL":"NEW WEAPON FOUND",s,e1(i,t,n),n?[["LEAVE IT",a]]:[["TAKE",()=>r(e),!0],["LEAVE IT",a]]),Er=i,lt("modal").classList.add("weapon-modal"),Wa=n?a:()=>r(e);for(const o of lt("modal-content").querySelectorAll(".slot-choice"))o.onclick=()=>r(Number(o.dataset.slot));return nd(i.id),!0}function Uu(i){if(!De||tn||G?.mode!=="playing"||!lt("modal").classList.contains("hidden"))return!1;const t=G.weaponSlots?.[i];if(!t)return G.weaponOffer?.slot===i?Kl():!1;const e=ee[t.id].range;return G.openCard(),Rn(`SLOT ${i+1} · ${t.id==="sidearm"?"ALWAYS CARRIED":"CARRIED"}`,ee[t.id].name,jl(t.id,null,`Auto-select fires it at targets ${e.min}–${e.max} m away.`),[["CLOSE",Le,!0]]),lt("modal").classList.add("weapon-modal"),nd(t.id),!0}let Jl="";function id(){if(!G||!Ge?.screenPosition)return;const i=G.player,t=Ge.screenPosition(i.x,i.y),e=Ge.screenPosition(i.x+.781,i.y+.625),n=Ge.screenPosition(i.x-.625,i.y+.781),s=Math.abs(e.x-t.x),r=n.y-t.y;if(!(s>1e-6)||!(r>1e-6))return;const a=3,o={side:(1-Math.abs(t.x))/s+a,ahead:(1-t.y)/r+a,behind:(1+t.y)/r+a};if(![o.side,o.ahead,o.behind].every(Number.isFinite))return;const l=[o.side,o.ahead,o.behind].map(c=>c.toFixed(1)).join();l!==Jl&&(Jl=l,G.view=o)}async function Tr(i=null){try{An.start().catch(()=>{}),G=new Je({saved:i,seed:xs.seed??Date.now()%1e6,pace:xs.pace??Xf}),!i&&xs.leg>1&&G.qaStartLeg(xs.leg-1),Aa&&qf?.(G),Yl.clear(),Zn.reset(),Jl="",id(),De=!0,tn=!1,Cn="",Os(),lt("intro").classList.add("hidden"),lt("hud").classList.remove("hidden"),lt("modal").classList.add("hidden"),lt("toast").classList.add("hidden"),lt("encounter").classList.add("hidden"),An.setPaused(!1),Ii(),bn(i?"Checkpoint restored. The road is waiting.":"Drag to move. Follow the road north."),G.mode==="checkpoint"&&(Cn="checkpoint",ed())}catch(t){Rn("COURIER NOTICE","A route interrupted.",`<p>${Pc(t.message)}</p>`,[["BACK TO DISPATCH",Oi,!0]])}}function Pc(i){const t=document.createElement("div");return t.textContent=i,t.innerHTML}function sd(i){Xf=i;for(const[t,e]of[["journey-mode","journey"],["express-mode","express"]])lt(t).classList.toggle("selected",i===e),lt(t).setAttribute("aria-pressed",String(i===e))}lt("journey-mode").onclick=()=>sd("journey");lt("express-mode").onclick=()=>sd("express");lt("begin-button").onclick=()=>{Ee?Rn("A DELIVERY IS ALREADY SAVED","Start a new route?","<p>A new dispatch will replace your saved checkpoint when you reach its first safehouse.</p>",[["BEGIN NEW DELIVERY",()=>Tr(),!0],["KEEP SAVED DELIVERY",Le]]):Tr()};lt("resume-button").onclick=()=>Tr(Ee);lt("pause-button").onclick=Rs;lt("map-button").onclick=$v;lt("intro-guide").onclick=Qf;const Ps=lt("touch-layer");Ps.addEventListener("pointerdown",i=>{if(!De||tn||G.mode!=="playing"||_e.active)return;i.preventDefault(),An.start().catch(()=>{});const t=lt("game-shell").getBoundingClientRect();_e.active=!0,_e.id=i.pointerId,_e.originX=i.clientX,_e.originY=i.clientY,_e.x=_e.y=0,Ps.setPointerCapture(i.pointerId),lt("joystick").style.left=`${i.clientX-t.left}px`,lt("joystick").style.top=`${i.clientY-t.top}px`,lt("joystick").classList.add("active")});Ps.addEventListener("pointermove",i=>{if(!_e.active||i.pointerId!==_e.id)return;const t=i.clientX-_e.originX,e=i.clientY-_e.originY,n=Math.hypot(t,e),s=Math.min(n,45)/(n||1);_e.x=t*s/45,_e.y=e*s/45,lt("stick-knob").style.transform=`translate(${_e.x*32}px,${_e.y*32}px)`});function Dc(i){i.pointerId===_e.id&&Os()}Ps.addEventListener("pointerup",Dc);Ps.addEventListener("pointercancel",Dc);Ps.addEventListener("lostpointercapture",Dc);window.addEventListener("keydown",i=>{if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","a","s","d","W","A","S","D"].includes(i.key)&&De&&lt("modal").classList.contains("hidden")&&i.preventDefault(),i.key==="Escape"){lt("modal").classList.contains("hidden")?De&&Rs():(!De||G.mode==="playing")&&Wa();return}De&&!tn&&Mn.add(i.key.toLowerCase())});window.addEventListener("keyup",i=>Mn.delete(i.key.toLowerCase()));window.addEventListener("blur",()=>{Os(),De&&!tn&&G.mode==="playing"&&Rs()});document.addEventListener("visibilitychange",()=>{document.hidden&&De&&!tn&&G.mode==="playing"&&Rs(),Xl=performance.now()});lt("modal").addEventListener("keydown",i=>{if(i.key!=="Tab")return;const t=[...lt("modal").querySelectorAll("button")];if(!t.length)return;const e=t[0],n=t.at(-1);i.shiftKey&&document.activeElement===e?(i.preventDefault(),n.focus()):!i.shiftKey&&document.activeElement===n&&(i.preventDefault(),e.focus())});function n1(){const i=G.biome?.name||"District 08",t=Ea,e=G.player;return(!t.shown||Math.hypot(e.x-t.lastX,e.y-t.lastY)>30)&&(t.shown=i,t.pending="",t.seenX=e.x,t.seenY=e.y),t.lastX=e.x,t.lastY=e.y,i===t.shown?(t.pending="",t.seenX=e.x,t.seenY=e.y):(t.pending!==i&&(t.pending=i,t.since=G.elapsed),G.elapsed-t.since>=3&&G.elapsed-(t.changedAt??-1e9)>=8&&Math.hypot(e.x-t.seenX,e.y-t.seenY)>=15&&(t.shown=t.changed=i,t.changedAt=G.elapsed,t.pending="",t.seenX=e.x,t.seenY=e.y)),t.shown}function rd(i){const t=G.guideTarget;if(t&&Number.isFinite(t.x)&&Number.isFinite(t.y))return t;const e=G.player,n=[G.seed,G.legLength],s=nr(e.y,...n,0,e.x,G.checkpointY);return Math.abs(e.x-s.x)>12?nr(e.y,...n,10,e.x,G.checkpointY):G.checkpointY-e.y<40?{x:i,y:G.checkpointY}:nr(e.y,...n,35,e.x,G.checkpointY)}function i1(i,t){const e=lt("beacon-edge"),n=lt("game-shell").getBoundingClientRect(),s=Ge.screenPosition?.(i,G.checkpointY),r=Ge.screenPosition?.(G.player.x,G.player.y);if(!s||!r||G.boss||G.mode!=="playing"){e.classList.add("hidden");return}const a=A=>document.querySelector(A).getBoundingClientRect(),o=a(".route-row").bottom-n.top+8,l=a(".combat-strip").top-n.top-10,c={left:22,right:n.width-22,top:o+14,bottom:l-14},h=A=>[(A.x+1)/2*n.width,(1-A.y)/2*n.height],[f,u]=h(r),[d,m]=h(s);if(d>c.left&&d<c.right&&m>c.top&&m<c.bottom){e.classList.add("hidden");return}const x=rd(i),g=Ge.screenPosition(x.x,x.y),[p,M]=h(g),y=p-f,_=M-u;let w=1/0;if(y>0?w=Math.min(w,(c.right-f)/y):y<0&&(w=Math.min(w,(c.left-f)/y)),_>0?w=Math.min(w,(c.bottom-u)/_):_<0&&(w=Math.min(w,(c.top-u)/_)),!Number.isFinite(w)){e.classList.add("hidden");return}lt("beacon-edge-arrow").style.rotate=`${Math.atan2(y,-_)}rad`,lt("beacon-edge-label").textContent=`REFUGE ${t} M`,e.classList.remove("hidden");const E=e.offsetWidth/2+4;e.style.left=`${Math.max(E,Math.min(n.width-E,f+y*w))}px`,e.style.top=`${u+_*w}px`}function Ii(){lt("hp-value").textContent=Math.ceil(G.player.hp),lt("hp-bar").style.width=`${Math.max(0,G.player.hp/G.player.maxHp)*100}%`,lt("cargo-value").textContent=`${Math.round(G.cargo)}%`;const i=G.cargo<30;lt("cargo-warn").classList.toggle("hidden",!i),lt("cargo-bar").parentElement.classList.toggle("fragile",i),lt("cargo-bar").style.width=`${G.cargo}%`;const t=n1();if(lt("biome-name").textContent=`To ${wr[G.leg]}`,lt("biome-tag").textContent=t,lt("objective").textContent=G.boss?"Dodge red warnings":G._bossDefeated?"Path clear · to beacon":"Follow the road",Ea.changed){const c=Ea.changed;Ea.changed="",!G.boss&&G.mode==="playing"&&performance.now()-Cu>6e3&&(Cu=performance.now(),bn(`Entering ${c}`,2400,!0))}lt("leg-label").textContent=`0${G.leg+1} / 06`,lt("progress-bar").style.width=`${G.progress*100}%`;const e=Qt(G.checkpointY,G.seed,G.legLength),n=Math.ceil(Math.hypot(e-G.player.x,G.checkpointY-G.player.y)),s=G.boss?"GUARDIAN AHEAD · CLEAR THE PATH":`<span class="next-word">NEXT </span>SAFEHOUSE · ${n} M`;lt("checkpoint-label").innerHTML!==s&&(lt("checkpoint-label").innerHTML=s),Zn.update(G),lt("kills-value").innerHTML=`${G.kills} <small>INFECTED</small>`,lt("boss-hud").classList.toggle("hidden",!G.boss),lt("hud").classList.toggle("boss-active",!!G.boss),G.boss&&(lt("boss-name").textContent=G.boss.name?.toUpperCase()||"GUARDIAN",lt("boss-bar").style.width=`${Math.max(0,G.boss.hp/G.boss.maxHp)*100}%`);const r=Object.entries(G.buffs).filter(([,c])=>c>0).map(([c,h])=>[c,h]);G.player.shield>0&&r.push(["shield",G.player.shield]);const a=!!G.player.panic;document.querySelector(".route-hud").classList.toggle("has-buffs",r.length>0||a),lt("buffs").innerHTML=r.map(([c,h])=>{const[f,u,d]=$f[c];return`<span role="img" data-buff="${c}" style="--c:${u}" title="${d} · ${Math.ceil(h)}" aria-label="${d}, ${Math.ceil(h)} ${c==="shield"?"points":"seconds"} left"><b aria-hidden="true">${f}</b>${Math.ceil(h)}</span>`}).join("")+(a?'<span class="panic-chip" role="img" aria-label="Panic fire active" style="--c:#ff8a6b"><b aria-hidden="true">!</b>PANIC FIRE</span>':""),i1(e,n);const o=rd(e),l=Ge.bearingTo?.(o.x,o.y);l&&(lt("beacon-arrow").style.rotate=`${Math.atan2(l.x,-l.y)}rad`)}const Ou=new Set;function Ar(){for(const i of G.events.splice(0))Zn.onEvent(i),(i.type==="weaponOffer"||i.type==="weaponAccepted"||i.type==="weaponDiscarded"||i.type==="weaponEmpty")&&bn(i.text,2200),i.type==="weaponAccepted"&&An.event("pickup",i.id,{...i,drop:"weapon"}),i.type==="telegraph"&&i.signature&&!Ou.has(`${i.variant}:${i.signature}`)&&(Ou.add(`${i.variant}:${i.signature}`),bn(i.text,2600)),An.event(i.type,i.weapon||G.player.weapon,i),["pickup","quiet","bossDefeated","retry","beaconMissed","guardianGate","waypoint","stuck","supplySaved"].includes(i.type)&&bn(i.type==="pickup"&&Pu[i.drop]&&!Ru.has(i.drop)?(Ru.add(i.drop),`${$f[i.drop][0]} ${Pu[i.drop]}`):i.type==="pickup"&&i.drop==="rapid"?"Rapid fire · more shots, shorter reach":i.text),i.type==="checkpoint"&&(i.rule||i.healRule)&&(Yf=i.rule||i.healRule),i.type==="blocked"&&bn(i.text,2500),i.type==="panic"&&bn(i.text,1600),i.type==="boss"&&(tr(`${G.boss?.name?.toUpperCase()||"GUARDIAN"} AHEAD`),Du("guardian")),i.type==="waypoint"&&Du("waypoint"),i.type==="roadblock"&&tr("ROADBLOCK AHEAD"),i.type==="minionCall"&&(tr("THE GUARDIAN CALLS ITS MINIONS"),bn(i.text,2200)),i.type==="ambush"&&!i.reinforcements&&tr("SWARM APPROACHING"),i.type==="hurt"&&(lt("damage-flash").classList.add("hit"),setTimeout(()=>lt("damage-flash").classList.remove("hit"),200),navigator.vibrate&&navigator.vibrate(25));for(const i of G.effects)Yl.has(i.id)||An.effect(i);Yl=new Set(G.effects.map(i=>i.id))}const Aa=!0,Ds=new URLSearchParams(location.search);let Zl=Math.max(1,Math.min(30,Math.round(Number(Ds.get("speed"))||1)));const ad=/^[1-6]$/.test(Ds.get("leg")||"")?Number(Ds.get("leg")):1,od=/^\d{1,9}$/.test(Ds.get("seed")||"")?Number(Ds.get("seed")):null,ld={express:"express",field:"express",journey:"journey"}[Ds.get("pace")]??null;xs={leg:ad,seed:od,pace:ld};function cd(i){requestAnimationFrame(cd);const t=Math.min(.05,Math.max(0,(i-(Xl||i))/1e3));if(Xl=i,De){if(!tn&&G.mode==="playing"){let e=_e.active?_e.x:(Mn.has("d")||Mn.has("arrowright")?1:0)-(Mn.has("a")||Mn.has("arrowleft")?1:0),n=_e.active?_e.y:(Mn.has("s")||Mn.has("arrowdown")?1:0)-(Mn.has("w")||Mn.has("arrowup")?1:0);const s=Math.min(1,Math.hypot(e,n));if(s>.07){lt("joystick").classList.add("hint-done");const r=Ge.screenDirectionToWorld(e,n);Li.x=r.x*s,Li.y=r.y*s}else Li.x=Li.y=0;for(let r=0;r<Zl&&G.mode==="playing";r++)G.update(t,Li),Ar();Zn.endEvents()}Er&&G.weaponOffer?.id!==Er.id&&Le(),Zn.update(G),Ge.render(G,tn?0:t),!tn&&G.mode==="playing"&&An.update(t,{movingSpeed:G.player.movingSpeed||0,gaitPhase:Ge.gaitPhase||0,biome:G.biome,surface:gn(G.player.y,G.seed,G.legLength).kind}),$o+=t,$o>.1&&($o=0,Ii(),id()),G.mode!=="playing"&&Cn!==G.mode&&(Cn=G.mode,G.mode==="checkpoint"?ed():G.mode==="dead"?Kv():G.mode==="complete"&&Jv())}else _s.elapsed+=t,Ge.render(_s,t)}function Fu(){const i=lt("game-shell").getBoundingClientRect();Ge?.resize(i.width,i.height)}try{Ge=new Cv(lt("world")),_s=new Je({seed:724,pace:"journey"}),_s.player.y=22,_s.player.x=0,_s.enemies=[{id:"preview1",x:5,y:36,hp:42,maxHp:42,radius:.7,type:"walker",angle:2.4},{id:"preview2",x:-7,y:48,hp:42,maxHp:42,radius:.7,type:"walker",angle:.6}],Ee=jf(),Kf(),Jf(),Cc(),Fu(),new ResizeObserver(Fu).observe(lt("game-shell")),Zn.configure({shell:lt("game-shell"),bar:lt("weapon-bar"),layer:lt("fx-layer"),renderer:Ge,game:()=>G,refresh:()=>{De&&Ii()},onOfferTap:()=>Kl(),onSlotTap:i=>Uu(i)}),lt("boot").classList.add("hidden"),requestAnimationFrame(cd),zn&&document.querySelector(".control-note").setAttribute("title",zn),Aa&&(window.__kuruHud={hud:Zn,showWeaponOffer:Kl,showWeaponCard:Uu,displayToast:bn,displayEncounter:tr,get preview(){return Oa}}),Aa&&(window.__kuru={get game(){return G},get paused(){return tn},get renderer(){return Ge},get sound(){return An},begin:Tr,updateHUD:Ii,setPaused:Fa,get savedData(){return Ee},qa:{leg:ad,seed:od,pace:ld},startLeg(i){const t=G?.qaStartLeg(i-1);return Cn="",Ii(),t},get weaponSlots(){return G?.weaponSlots},get weaponOffer(){return G?.weaponOffer},dropWeapon(i){return!G||!ee[i]||i==="sidearm"?!1:(G.drops.push({id:`qa-${i}-${G.elapsed}`,x:G.player.x+.4,y:G.player.y+.4,type:"weapon",weapon:i,life:60}),!0)},acceptWeapon(i){const t=G?.acceptWeapon(i);return t&&(Le(),Ar()),t},discardWeapon(){const i=G?.discardWeapon();return i&&(Le(),Ar()),i}}),Aa&&xd(async()=>{const{mountQaMenu:i}=await import("./qa-menu-eDbh1FOc.js");return{mountQaMenu:i}},[],import.meta.url).then(({mountQaMenu:i})=>i({shell:lt("game-shell"),hud:lt("hud"),game:()=>G,started:()=>De,paused:()=>tn,setPaused:Fa,updateHUD:Ii,dropWeapon:t=>window.__kuru.dropWeapon(t),jumpLeg(t){if(!De||!G)return!1;if(t===1)return xs={leg:1,seed:G.seed,pace:G.pace},Tr(),!0;const e=G.qaStartLeg(t-1);return Cn="",Ii(),e},get speed(){return Zl},set speed(t){Zl=Math.max(1,Math.min(30,Math.round(t)||1))},onGame(t){qf=t,G&&t(G)}})).catch(i=>console.error("QA menu failed to load",i))}catch(i){lt("boot").innerHTML=`<span class="boot-mark">↗</span><b>YOUR BROWSER NEEDS WEBGL</b><span>Try a recent Chrome, Safari, Firefox or Edge.</span><span>${Pc(i.message)}</span>`,console.error(i)}export{$i as B,zs as S,hr as W,ee as a};
