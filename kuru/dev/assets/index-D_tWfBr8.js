(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const Yh=[{id:"city",name:"Old Quarter",ground:"#56765c",verge:"#76946c",road:"#52605b",trees:"#346c4d",sky:"#a5bba8",water:"#418d88",corruption:.2,wind:0,edge:"flat",barriers:["carpile","collapsed","rubblewall"]},{id:"forest",name:"Whispering Forest",ground:"#458456",verge:"#76a55f",road:"#aa946a",trees:"#196747",sky:"#93b69d",water:"#358f82",corruption:.34,wind:1,edge:"flat",barriers:["pit","logs","thicket"]},{id:"village",name:"Hollow Village",ground:"#81915e",verge:"#acb279",road:"#777365",trees:"#437d51",sky:"#bec39d",water:"#478c82",corruption:.55,wind:.15,edge:"flat",barriers:["collapsed","rubblewall","carpile"]},{id:"glade",name:"Sunlit Glade",ground:"#69aa61",verge:"#aed17b",road:"#b8a372",trees:"#448757",sky:"#c5d5a1",water:"#43ad9b",corruption:.07,wind:1,edge:"flat",barriers:["thicket","logs","thicket"],open:!0},{id:"coast",name:"Saltwater Reach",ground:"#cfb780",verge:"#ead1a0",road:"#bba174",trees:"#49966c",sky:"#b2d7cb",water:"#249d9a",corruption:.16,wind:1,edge:"sink",barriers:["water","rockfall","water"]},{id:"desert",name:"The Ochre Expanse",ground:"#c68b4e",verge:"#e3ad63",road:"#a97448",trees:"#76804f",sky:"#d9b789",water:"#379b94",corruption:.38,wind:1,edge:"dune",barriers:["dune","rockfall","dune"],open:!0},{id:"cliff",name:"Broken Coast",ground:"#768a72",verge:"#a6aa7a",road:"#9e936f",trees:"#42796b",sky:"#aabdaf",water:"#258e90",corruption:.64,wind:1,edge:"sink",barriers:["rockfall","pit","water"]},{id:"mountain",name:"Pale Ridge",ground:"#718b7e",verge:"#a4b0a0",road:"#a59d83",trees:"#31635d",sky:"#b0c4be",water:"#397f8b",corruption:.42,wind:1,edge:"rise",barriers:["cliff","rockfall"]},{id:"marsh",name:"Drowned Fen",ground:"#5f8058",verge:"#8aa069",road:"#8f7f5c",trees:"#4e7350",sky:"#a6b9a2",water:"#3d8579",corruption:.4,wind:1,edge:"sink",barriers:["water","mud","logs"]},{id:"burned",name:"Ashen Wood",ground:"#5e544b",verge:"#857462",road:"#8d7a60",trees:"#3b3632",sky:"#c3ab95",water:"#4a7c74",corruption:.5,wind:1,edge:"flat",barriers:["logs","pit","rockfall"]},{id:"canyon",name:"Red Mesa",ground:"#b9683f",verge:"#d48d59",road:"#c69a69",trees:"#7d7d4a",sky:"#e2b691",water:"#3d8f8c",corruption:.3,wind:1,edge:"rise",barriers:["cliff","rockfall"]},{id:"tundra",name:"White Hollow",ground:"#c3d3d3",verge:"#e3ece9",road:"#9aa4a0",trees:"#3b665f",sky:"#cddde0",water:"#69a5b6",corruption:.25,wind:1,edge:"ice",barriers:["icewall","crevasse"]},{id:"farmland",name:"Amber Fields",ground:"#8ea655",verge:"#c4b665",road:"#a98f5f",trees:"#4f8a4c",sky:"#d5d6a6",water:"#4a9a8e",corruption:.2,wind:.55,edge:"flat",barriers:["hedge","haywall","hedge","ditch"],open:!0},{id:"industrial",name:"Rust Works",ground:"#6f6b5d",verge:"#8f8773",road:"#585c5c",trees:"#5b6b4f",sky:"#b4ac9d",water:"#4d7a76",corruption:.6,wind:.45,edge:"flat",barriers:["containers","carpile","rubblewall"]}],on=Object.fromEntries(Yh.map((s,t)=>[s.id,{...s,index:t,palette:{ground:s.ground,verge:s.verge,road:s.road,trees:s.trees,sky:s.sky,water:s.water}}])),$h=Yh.slice(1).map(s=>s.id),cf=$h.filter(s=>s!=="village"),ni=new Set(["city","village"]),Qr={carpile:{radius:2.1},rubblewall:{radius:2},collapsed:{box:[2.3,2.2]},containers:{box:[1.35,3.1]},pit:{radius:2.3,hole:!0},logs:{box:[1.1,2.6]},thicket:{radius:2.1},water:{radius:3.2,hole:!0},mud:{radius:2.6,hole:!0},rockfall:{radius:2.2},cliff:{box:[2.2,2.3]},dune:{radius:3.3},crevasse:{radius:2.4,hole:!0},icewall:{box:[1.4,2.2]},hedge:{box:[1.1,2.1]},haywall:{radius:1.8},ditch:{radius:2.5,hole:!0}};function ne(s,t=1){let e=((s|0)^Math.imul(t|0,374761393))>>>0;return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}const Vs=(s,t,e)=>{const n=Math.max(0,Math.min(1,(e-s)/(t-s)));return n*n*(3-2*n)},jc=(s,t,e=8)=>{const n=Math.max(e-Math.abs(s-t),0)/e;return Math.max(s,t)+n*n*e/4},qh=(s,t,e,n)=>{let i=s.get(t);return i===void 0&&(s.size>=e&&s.delete(s.keys().next().value),i=n(),s.set(t,i)),i},lf=new Map;let Ii=null;function gc(s,t,e){if(Ii&&Ii.seed===s&&Ii.legLength===t&&Ii.leg===e)return Ii.value;const n=qh(lf,`${s}|${t}|${e}`,256,()=>hf(s,t,e));return Ii={seed:s,legLength:t,leg:e,value:n},n}function hf(s,t,e){const n=t>=1500,i=$h.filter(m=>n||m!=="village");for(let m=i.length-1;m>0;m--){const p=Math.floor(ne(m*31+7,s)*(m+1));[i[m],i[p]]=[i[p],i[m]]}const r=m=>n?ne(m*613+3,s)<.5?3:4:m===0||ne(m*613+3,s)<.55?1:2,a=r(e);let o=0;for(let m=0;m<e;m++)o+=r(m);const c=n?e?200:400:e?Math.max(60,t*.13):Math.max(120,t*.27),l=n?t*.055:Math.max(72,t*.16),h=e*t,u=(t-c-l)/a,f=[{id:e?i[(o-1)%i.length]:"city",start:h,end:h+c,refuge:!0}];for(let m=0;m<a;m++)f.push({id:i[(o+m)%i.length],start:h+c+u*m,end:m===a-1?h+t-l:h+c+u*(m+1)});f.push({id:i[(o+a-1)%i.length],start:h+t-l,end:h+t,refuge:!0});const d=[];for(let m=1;m<=a;m++)ni.has(f[m].id)||d.push({i:m,roll:ne(e*7907+m*1543+5*389,s)});d.sort((m,p)=>m.roll-p.roll);const _=d.filter((m,p)=>p===0||n&&p===1&&m.roll<.45).map(({i:m})=>{const p=f[m],E=p.end-p.start,x=C=>ne(e*7907+m*1543+C*389,s),y=cf.filter(C=>C!==p.id&&C!==f[m-1].id&&C!==f[m+1].id),b=n?Math.min(E*.8,260+x(10)*80):Math.min(E*.84,190),T=p.start+(E-b)*(.25+x(11)*.5);return{id:`fork-${s}-${e}-${m}`,start:T,end:T+b,side:x(6)<.5?-1:1,width:n?25+x(8)*20:18+x(8)*6,biome:y[Math.floor(x(9)*y.length)],main:p.id}});return{segments:f,forks:_}}function _c(s,t,e){const n=Math.max(100,e),i=Math.max(0,s)/n,r=Math.floor(i),a=gc(t,n,r),o=a.segments,c=Math.max(0,s);let l=0;for(;l<o.length-1&&c>=o[l].end;)l++;return{layout:a,index:l,leg:r,L:n}}function uf(s=1,t=0,e=2700){return gc(s,Math.max(100,e),t).segments.map(n=>({...n}))}function Kh(s,t,e,n){const{layout:i,index:r}=_c(s,t,e),a=i.segments,o=a[r],c=n(o),l=r>0?n(a[r-1]):0,h=r<a.length-1?n(a[r+1]):0,u=Math.min(150,.45*(o.end-o.start));let f=c;return c>l&&s<o.start+u&&(f=l+(c-l)*Vs(o.start,o.start+u,s)),h<c&&s>o.end-u&&(f=c+(h-c)*Vs(o.end-u,o.end,s)),f}const ff=(s,t,e)=>Kh(s,t,e,n=>n.refuge?0:on[n.id].wind),df=new Set(["coast","cliff"]),jh=(s,t=1,e=2700)=>Kh(s,t,e,n=>!n.refuge&&df.has(n.id)?1:0);function pf(s,t,e){const n=ff(s,t,e);if(n<=0)return 0;const i=t%997*.7,r=.0165+.0045*Math.cos(s*.0047+i),a=s*.0165+.957*Math.sin(s*.0047+i)+i*2.3,o=Math.min(30,.41/r)*(.58+.42*Math.sin(s*.0029+i*1.9)**2),c=.06+.025*Math.cos(s*.013+i*1.3),l=s*.06+1.923*Math.sin(s*.013+i*1.3)+i*.9,h=Math.min(12,.44/c)*(.65+.35*Math.sin(s*.0071+i*.4)**2);return n*(o*Math.sin(a)+h*Math.sin(l))}const xa=2,Jc=12,Zc=.6,mf=new Map;let Ms=null;function ya(s,t,e){(!Ms||Ms.seed!==t||Ms.legLength!==e)&&(Ms={seed:t,legLength:e,values:qh(mf,`${t}|${e}`,24,()=>[0])});const n=Ms.values,i=Math.max(0,Math.min(s,6e4))/xa;for(;n.length<=i+1;){const o=n.length-1,c=n[o],l=Math.max(-Zc,Math.min(Zc,(pf(o*xa+Jc,t,e)-c)/Jc));n.push(c+l*xa)}const r=Math.floor(i),a=i-r;return n[r]+(n[r+1]-n[r])*a}function gf(s,t,e){return s>-4?(ya(s-4,t,e)+2*ya(s,t,e)+ya(s+4,t,e))/4:0}function te(s,t=1,e=2700){return Math.sin(s*.017+t*.3)*2.7+Math.sin(s*.043+t)*.8+gf(s,t,e)}function xc(s=1,t=0,e=1/0,n=2700){const i=Math.max(100,n),r=[];for(let a=Math.max(0,Math.floor(t/i));a<=Math.floor(Math.max(0,Math.min(e,i*400))/i);a++)for(const o of gc(s,i,a).forks)o.end>t&&o.start<e&&r.push(o);return r}function la(s,t=1,e=2700){const{layout:n}=_c(s,t,e);return n.forks.find(i=>s>=i.start&&s<i.end)||null}function Je(s,t){return!s||t<=s.start||t>=s.end?0:s.side*s.width*Math.sin(Math.PI*(t-s.start)/(s.end-s.start))**2}function Is(s,t=1,e=2700,n=35,i,r=1/0){const a=Math.max(s,Math.min(s+n,r)),o=la(s,t,e),c=te(s,t,e),l=o&&i!==void 0&&Math.abs(i-c-Je(o,s))<Math.abs(i-c);return{x:te(a,t,e)+(l?Je(o,a):0),y:a,branch:!!l}}function Pe(s,t=1,e=2700,n,i=!1){let r=s;if(n!==void 0){const c=t%997,l=Vs(5,28,Math.abs(n-te(s,t,e)))*(i?.45:1)+(i?.55:0);l>0&&(r+=l*(Math.sin(n*.061+c)*9+Math.sin(n*.17+c*2)*4+Math.sin(n*.43+c*3)*2))}const{layout:a,index:o}=_c(r,t,e);if(n!==void 0){const c=la(s,t,e);if(c){const l=Math.abs(Je(c,s)),h=(n-te(s,t,e))*c.side;if(l>3&&h>l*.5+2)return c.biome}}return a.segments[o].id}const go=(s,t,e)=>Math.max(0,Math.min(.85,s.corruption+.06*Math.sin(t*.061+e*3)));function pn(s,t=1,e=2700,n){const i=on[Pe(s,t,e,n,n!==void 0)];return{...i,corruption:go(i,s,t),routeLeg:Math.floor(Math.max(0,s)/Math.max(100,e))}}function an(s,t=1,e=2700){const n=pn(s,t,e),i=ni.has(n.id),r=i&&ne(Math.floor(s/9)*67,t)<(n.id==="village"?.42:.22);return n.id==="industrial"?{kind:ne(Math.floor(s/9)*67,t)<.55?"asphalt":"earth",width:4.4,urban:!1,broken:!0}:{kind:i&&!r?"asphalt":i?"earth":"dirt",width:i?6.1:2.45+Math.sin(s*.087+t)*.25,urban:i,broken:r}}function Us(s=1,t,e=6){return{minX:-120,maxX:120,minY:0,maxY:(t===void 0?s:t*e)+18}}function Qe(s,t=1,e=2700){const n=te(s,t,e),i=t%1009,r=(f,d,g)=>.5+.5*(.62*Math.sin(s*f+i*g)+.38*Math.sin(s*d+i*g*1.7+1.3)),a=f=>3.6*Math.sin(s*.093+i*f)+2.4*Math.sin(s*.231+i*f*2.3+2),o=Jh(s,e)*8;let c=33+27*r(.0107,.0291,.71)+a(.37)+o,l=33+27*r(.0089,.0337,1.37)+a(.83)+o;const h=jh(s,t,e);h>0&&(c+=(19+a(.37)*.5-c)*h);const u=la(s,t,e);if(u){const f=Math.abs(Je(u,s))+21+6*r(.05,.021,2.1);u.side>0?l=jc(l,f):c=jc(c,f)}return{minX:Math.max(-118,n-c),maxX:Math.min(118,n+l)}}const ze={step:2.4,thickness:1.4,offset:.5,overlap:.3,slip:.7,minLength:.5,fill:1.3};function Ns(s,t,e,n,i,r=7){let a=1/0,o=-1/0;for(let c=0;c<r;c++){const l=Qe(r>1?n+(i-n)*c/(r-1):n,s,t),h=e<0?l.minX:l.maxX;a=Math.min(a,h),o=Math.max(o,h)}return{lo:a,hi:o}}const _f=(s,t,e,n,i)=>{const r=Ns(s,t,e,n,i);return e>0?r.hi+ze.offset:r.lo-ze.offset};function xf(s,t,e,n){const{step:i,thickness:r,overlap:a,slip:o,minLength:c}=ze,l=Us(s,t).maxY,h=[];for(let u=Math.max(-1,Math.floor((e-8)/i));u<=Math.min(Math.ceil((n+8)/i),Math.floor(l/i)+1);u++)for(const f of[-1,1]){const d=(g,_,m)=>{const p=g-a,E=_+a,x=Ns(s,t,f,p,E);if(x.hi-x.lo>o&&_-g>c*2){const P=(g+_)/2;d(g,P,`${m}a`),d(P,_,`${m}b`);return}const y=f>0?x.hi+ze.offset:x.lo-ze.offset,b=y+f*r/2,T=r/2,C=(E-p)/2;h.push({id:`edge-${s}-${f}-${u}${m}`,x:b,y:(p+E)/2,type:"edgewall",radius:Math.hypot(T,C),collision:{kind:"box",halfX:T,halfY:C},width:r,depth:C*2,obstacle:!0,blocksShots:!1,invisible:!0,side:f,scale:1,rotation:0,biome:Pe(Math.max(0,(p+E)/2),s,t)})};d(u*i,(u+1)*i,"")}for(const[u,f,d]of[["start",-.5,0],["end",l+ze.offset,l]]){const g=Qe(d,s,t),_=r/2,m=u==="start"?f-_:f+_;if(m+_<e||m-_>=n)continue;const p=g.minX-r,E=g.maxX+r,x=Math.ceil((E-p)/4.6);for(let y=0;y<x;y++){const b=p+(E-p)*y/x,T=p+(E-p)*(y+1)/x,C=(T-b)/2+a;h.push({id:`edge-${s}-${u}-${y}`,x:(b+T)/2,y:m,type:"edgewall",radius:Math.hypot(C,_),collision:{kind:"box",halfX:C,halfY:_},width:C*2,depth:r,obstacle:!0,blocksShots:!1,invisible:!0,side:0,cap:u,scale:1,rotation:0,biome:Pe(Math.max(0,d),s,t)})}}return h}const re={before:64,after:8,clear:20,gate:12,gateHalf:5};function Jh(s,t){const e=Math.max(100,t),n=Math.round(s/e);if(n<1)return 0;const i=s-n*e;return Vs(-80,-64,i)*(1-Vs(re.after,re.after+16,i))}function mn(s,t=1,e=2700){const n=Math.max(100,e),i=Math.round(s/n),r=i*n;if(i<1||s<r-re.before||s>r+re.after)return null;const a=r+re.gate;return{checkpointY:r,minY:r-re.before,maxY:r+re.after,centerY:r-re.before/2,x:te(s,t,e),clear:re.clear,gateY:a,gateX:te(a,t,e),gateHalf:re.gateHalf,biome:Pe(r-1,t,e)}}function _o(s,t,e,n=2700){const i=[];for(let r=Math.floor(t/36);r<=Math.ceil(e/36);r++){const a=r*36;if(a<36||a<t||a>=e)continue;const o=pn(a,s,n),c=ni.has(o.id);if(ne(r*503+81,s)>(c?.58:.15))continue;const l=c?66+ne(r*503+82,s)*32:78+ne(r*503+82,s)*27,h=te(a,s,n),u=Qe(a,s,n);i.push({id:`road-${s}-${r}`,y:a,minX:Math.max(h-l,u.minX+2),maxX:Math.min(h+l,u.maxX-2),width:c?5.4:2.8,urban:c,kind:c?"asphalt":"dirt"})}return i}function yf(s,t,e,n=2700){const i=[];for(let a=Math.max(0,Math.floor((t-21)/82.5));a<=Math.ceil((e-21)/82.5);a++){const o=a*82.5+21;o<t||o>=e||i.push({id:`supply-${a}`,x:te(o,s,n)+((a+s)%2?-1:1)*4.6,y:o,type:a%3===0?"locker":"crate"})}return i}const vf=new Set(Object.keys(Qr).filter(s=>Qr[s].hole)),Mf={container:[1.2,2.9],barn:[3.2,4.2],pipes:[.75,3.2]},bf={barn:.72,mesa:1.1,tank:.9},Qc={marsh:"reeds",tundra:"drift",farmland:"crops",desert:"scrub",canyon:"scrub",glade:"flowers"};function Sf(s,t,e){switch(s){case"city":case"village":return t>.7?"car":t>.25?"rubble":"tree";case"desert":return t>.53?"rock":t>.25?"cactus":"scrub";case"coast":return t>.88?"pool":t>.55?"rock":t>.25?"palm":"scrub";case"cliff":return t>.88?"pool":t>.8?"mountain":t>.4?"rock":"pine";case"mountain":return t>.85?"mountain":t>.4?"rock":"pine";case"glade":return t>.7?"tree":t>.3?"flowers":"scrub";case"marsh":return t>.76?"deadtree":t>.46?"reeds":t>.3?"pool":t>.2?"tree":"scrub";case"burned":return t>.45?"charred":t>.33?"embers":t>.22?"rock":"scrub";case"canyon":return t>.93?"arch":t>.76?"mesa":t>.45?"rock":t>.2?"scrub":"cactus";case"tundra":return t>.52?"snowpine":t>.4?"ice":t>.3?"rock":"drift";case"farmland":return t>.86?"haystack":t>.78?"tree":t>.72?"barn":t>.48?"fence":"crops";case"industrial":return t>.82?"tank":t>.73?"chimney":t>.55?"container":t>.42?"pipes":t>.28?"car":"rubble";default:return t<.14?"rock":e(11)<.35?"pine":"tree"}}const ar=new Set(["scrub","flowers","rubble","reeds","pool","embers","drift","fence","crops","arch"]),Ef={mountain:5,car:1.06,rock:1.4,rubble:1.1,mesa:2.1,tank:2,chimney:.9,ice:.85,haystack:1,pool:1.5,crops:1.6,fence:1.2,arch:3.2,embers:.7,drift:1.1,reeds:.7,deadtree:.45,charred:.45};function Zh(s,t,e,n=2700,i,r){const a=i===void 0&&r===void 0,o=A=>{if(!a)return[i,r];const I=Qe(A,s,n);return[I.minX-16,I.maxX+16]},c=[],l=_o(s,t-40,e+40,n),h=xc(s,t-40,e+40,n),u=A=>h.find(I=>A>I.start&&A<I.end),f=A=>te(A,s,n),d=(A,I,N)=>Math.abs(A-f(I))<an(I,s,n).width/2+N+.9,g=(A,I,N)=>{const U=u(I);return!!U&&Math.abs(A-f(I)-Je(U,I))<an(I,s,n).width/2+.1+N+.9},_=(A,I,N,U=N)=>l.some(O=>I+U+.8>=O.y-O.width/2&&I-U-.8<=O.y+O.width/2&&A+N>=O.minX&&A-N<=O.maxX),m=(A,I,N,U=N)=>[-U,-U/2,0,U/2,U].some(O=>d(A,I+O,N)||g(A,I+O,N))||_(A,I,N,U),p=A=>{if(A.y<t||A.y>=e)return;const[I,N]=o(A.y);A.x>=I&&A.x<N&&c.push(A)},E=(A,I,N,U=N)=>{const O=Math.abs(A-f(I))-N,$=Math.round(I/Math.max(100,n))*Math.max(100,n);return $>0&&O<re.clear&&I+U>$-re.before&&I-U<$+re.after?!0:I-U<22&&I+U>-60&&(O<12||A>f(I)&&O<46)},x=yf(s,t-90,e+90,n),y=[],b=[];for(let A=Math.floor((t-60)/36);A<=Math.floor((e+60)/36);A++){const I=A*36+18,N=pn(I,s,n);if(!ni.has(N.id))continue;const U=an(I,s,n).width/2,O={"-1":-1/0,1:-1/0};for(let $=0;$<4;$++)for(const G of[-1,1]){const V=A*301+($*2+(G>0?1:0))*19,st=(.85+ne(V+76,s)*.45)*1.65*2,nt=(N.id==="village"?3:2.1)*st,gt=(N.id==="village"?3:2.2)*st,wt=Math.max(18+$*28,U+5+nt,O[G]+3+nt),Wt=f(I)+G*wt,Ot={id:`building-${s}-${A}-${$}-${G}`,x:Wt,y:I,type:"building",scale:st,rotation:0,width:nt*2,depth:gt*2,radius:Math.hypot(nt,gt),collision:{kind:"box",halfX:nt,halfY:gt},obstacle:!0,corrupted:ne(V+95,s)<N.corruption*.75,variant:Math.floor(ne(V+133,s)*4),biome:N.id};Pe(I,s,n,Wt,!0)===N.id&&!m(Wt,I,nt,gt)&&!E(Wt,I,nt,gt)&&!x.some(q=>Math.abs(q.x-Wt)<nt+1.7&&Math.abs(q.y-I)<gt+1.7)&&(y.push(Ot),p(Ot),O[G]=wt+nt)}}const T=(A,I,N)=>y.some(U=>Math.abs(A-U.x)<U.width/2+N+.45&&Math.abs(I-U.y)<U.depth/2+N+.45),C=A=>{const I=A*18+9,N=G=>ne(A*301+G*19,s),U=[];if(A%2===0||N(70)>.55){const G=I-3;U.push({id:`loot-${s}-${A}`,x:f(G)+(N(71)>.5?1:-1)*(4.2+N(72)*1.2),y:G,type:A%5===0?"locker":A%7===0?"lootbox":"crate",radius:.725,obstacle:!1,scale:1.25,rotation:N(73)*.7})}const O=I+2,$=u(O);return $&&Math.abs(Je($,O))>10&&A%2===1&&U.push({id:`fork-loot-${s}-${A}`,x:f(O)+Je($,O)+(N(74)>.5?1:-1)*3.3,y:O,type:N(75)<.3?"lootbox":"crate",radius:.725,obstacle:!1,scale:1.25,rotation:N(76)*.7}),U.filter(G=>!T(G.x,G.y,1.2))},P=[...x];for(let A=Math.floor((t-30)/18);A<=Math.floor((e+30)/18);A++)P.push(...C(A));const S=(A,I,N)=>P.some(U=>Math.hypot(U.x-A,U.y-I)<N+1.4);for(let A=Math.floor(t/18);A<=Math.floor(e/18);A++){const I=A*18+9,N=Qe(I,s,n),[U,O]=o(I);for(let V=-8;V<8;V++)for(let st=0;st<2;st++){const nt=tt=>ne(A*1709+(V+8)*131+st*43+tt*19,s),gt=V*20+2+nt(1)*16,wt=A*18+2+nt(2)*14;if(gt<U-14||gt>O+14)continue;const Wt=Math.max(N.minX-gt,gt-N.maxX);if(Wt>-4&&Wt<4.5||Wt>0&&st===1&&nt(12)<.5)continue;const Ot=on[Pe(wt,s,n,gt,!0)],q=go(Ot,wt,s);if(Wt>3&&["sink"].includes(Ot.edge)&&nt(13)<.85)continue;let K=Sf(Ot.id,nt(3),nt);["mountain","mesa","barn","arch","tank"].includes(K)&&Math.abs(gt-f(wt))<20&&(K="rock");const yt=(.85+nt(4)*.45)*(["scrub","flowers","reeds","crops","fence","drift","pool"].includes(K)?1.25:1.42)*(bf[K]||1),Et=Mf[K],dt=Et?Et[0]*yt:0,zt=Et?Et[1]*yt:0,Jt=Et?Math.hypot(dt,zt):(Ef[K]??.55)*yt;if((Et?m(gt,wt,dt,zt)||T(gt,wt,Math.max(dt,zt)):m(gt,wt,Jt)||T(gt,wt,Jt))||!ar.has(K)&&S(gt,wt,Et?Math.max(dt,zt):Jt)||!ar.has(K)&&(ni.has(Ot.id)||ni.has(Pe(wt,s,n)))&&Math.abs(gt-f(wt))-(Et?dt:Jt)<an(wt,s,n).width/2+4||(!ar.has(K)||K==="arch")&&E(gt,wt,Et?dt:Jt,Et?zt:Jt))continue;const L={id:`p-${s}-${A}-${V}-${st}`,x:gt,y:wt,type:K,scale:yt,rotation:Et||K==="arch"?nt(6)<.5?0:Math.PI:nt(6)*Math.PI*2,radius:Jt,obstacle:!ar.has(K),corrupted:nt(5)<q*.75,variant:Math.floor(nt(7)*4),smoke:K==="rubble"&&nt(8)<.5||K==="chimney",fire:K==="rubble"&&nt(9)<.4||K==="embers",biome:Ot.id};if(Et&&Object.assign(L,{width:dt*2,depth:zt*2,collision:{kind:"box",halfX:dt,halfY:zt}}),K==="arch"){const tt=[-1,1].map(Z=>({x:gt+Z*2.6*yt,y:wt}));if(tt.some(Z=>m(Z.x,Z.y,.9*yt)||S(Z.x,Z.y,.9*yt)))continue;tt.forEach((Z,et)=>p({id:`${L.id}-leg${et}`,x:Z.x,y:Z.y,type:"archleg",scale:yt,rotation:0,radius:.9*yt,obstacle:!0,biome:Ot.id}))}p(L)}const $=V=>ne(A*301+V*19,s),G=pn(I,s,n);ni.has(G.id)&&A%3===0&&!S(f(I)-4.5,I,.28)&&!mn(I,s,n)&&p({id:`pole-${s}-${A}`,x:f(I)-4.5,y:I,type:"pole",radius:.28,obstacle:!1,scale:1.42,rotation:0,biome:G.id});for(const V of C(A))p({...V,biome:Pe(V.y,s,n,V.x)});A%4===1&&p({id:`sign-${s}-${A}`,x:f(I)+4.1,y:I,type:"sign",radius:.25,obstacle:!1,scale:1.3,rotation:0,biome:G.id});for(let V=-8;V<8;V++){const st=A*18+ne(A*601+V*43,s)*18,nt=V*20+ne(A*503+V*67,s)*20;if(nt<Math.max(N.minX-10,U-4)||nt>Math.min(N.maxX+10,O+4))continue;const gt=on[Pe(st,s,n,nt,!0)];let wt=ne(A*111+V,s)<go(gt,st,s)*.8?"growth":"grass";wt==="grass"&&Qc[gt.id]&&$(210+V)<.55&&!m(nt,st,2.5)&&(wt=Qc[gt.id]),p({id:`ground-${s}-${A}-${V}`,x:nt,y:st,type:wt,radius:0,obstacle:!1,scale:.8+$(170+V)*1.1,rotation:$(190+V)*6.28,corrupted:!1,biome:gt.id})}}for(const A of h){for(const[N,U]of[["split",A.start+3],["join",A.end-3]]){const O=f(U)+Je(A,U)+A.side*(an(U,s,n).width/2+2.4);p({id:`${A.id}-${N}-sign`,x:O,y:U,type:"forksign",radius:.3,obstacle:!1,scale:2.3,rotation:0,variant:A.side>0?1:0,side:A.side,end:N,biome:A.biome})}const I=A.end-A.start;for(let N=7;N<Math.min(56,I*.35);N+=7)for(const U of[A.start+N,A.end-N]){const O=f(U)+Je(A,U);for(const $ of[-1,1]){const G=O+$*A.side*2.9;$<0&&Math.abs(Je(A,U))<9||d(G,U,.4)||p({id:`${A.id}-lantern-${Math.round(U)}-${$}`,x:G,y:U,type:"lantern",radius:.25,obstacle:!1,scale:1.5,rotation:0,biome:A.biome})}}for(const N of[.2,.8]){const U=A.start+(A.end-A.start)*N,O=Je(A,U);Math.abs(O)>9&&!S(f(U)+O/2,U,.9)&&!m(f(U)+O/2,U,.9)&&p({id:`${A.id}-cairn-${N}`,x:f(U)+O/2,y:U,type:"cairn",radius:.7,obstacle:!0,scale:1.3,rotation:N*9,biome:Pe(U,s,n,f(U)+O/2)})}}for(let A=Math.ceil((t-4)/8);A<=Math.floor((e+4)/8);A++){const I=A*8+4,N=mn(I,s,n);if(N)for(const U of[-1,1])p({id:`plaza-${s}-${A}-${U}`,x:f(I)+U*(re.clear+1.2),y:I,type:N.biome==="city"?"planter":"plazarim",radius:.8,obstacle:!1,scale:1.2,rotation:0,variant:(A+U+4)%4,biome:N.biome})}const M=Math.max(100,n);for(let A=Math.max(1,Math.floor((t-20)/M));A<=Math.ceil((e+20)/M);A++){const I=A*M+re.gate,N=f(I),U=Qe(I,s,n),O=Pe(A*M-1,s,n),$=ne(A*59+3,s)<.5?-1:1,G=N+$*11,V=I+14;!m(G,V,2.2,2)&&!S(G,V,2.2)&&p({id:`outpost-${s}-${A}`,x:G,y:V,type:"outpost",radius:Math.hypot(1.9,1.7),collision:{kind:"box",halfX:1.9,halfY:1.7},width:3.8,depth:3.4,obstacle:!0,scale:1.1,rotation:0,biome:O});for(const st of[-1,1]){p({id:`gate-${s}-${A}-${st}-pillar`,x:N+st*(re.gateHalf+.9),y:I,type:"gatepillar",radius:.9,obstacle:!0,scale:1,rotation:0,biome:O});const nt=st<0?U.minX-6:U.maxX+6;for(let gt=0,wt=N+st*(re.gateHalf+1.8+2.3);st*(nt-wt)>-2.3;gt++,wt+=st*4.6)b.push({x:wt,y:I,width:4.6,depth:1.8}),p({id:`gate-${s}-${A}-${st}-${gt}`,x:wt,y:I+(ne(A*97+gt*13+st,s)-.5)*.6,type:"gatewall",radius:Math.hypot(2.3,.9),collision:{kind:"box",halfX:2.3,halfY:.9},width:4.6,depth:1.8,obstacle:!0,blocksShots:!0,scale:1,rotation:0,variant:Math.floor(ne(A*97+gt*13+st*5,s)*4),biome:O})}}const D=Tf(s,t,e,n,l,y,m,p,o,S);for(const A of xf(s,n,t,e))p(A);return wf(s,t,e,n,[...y,...b,...D],p),c}const Se={length:4.6,thickness:.6,band:[-.8,1.4]};function wf(s,t,e,n,i,r){const a=Us(s,n).maxY,o=i.map(c=>c.collision?{x:c.x,y:c.y,hx:c.collision.halfX,hy:c.collision.halfY}:c.width?{x:c.x,y:c.y,hx:c.width/2,hy:c.depth/2}:{x:c.x,y:c.y,hx:c.radius,hy:c.radius});for(let c=Math.max(-1,Math.floor((t-4)/Se.length));c<=Math.min(Math.ceil((e+4)/Se.length),Math.floor(a/Se.length)+1);c++)for(const l of[-1,1]){const h=c*Se.length,u=h+Se.length,f=(h+u)/2;if(f<t||f>=e)continue;let d=0;for(let x=0;x<5;x++){const y=h+Se.length*(x+.5)/5,b=Qe(y,s,n),T=l<0?b.minX:b.maxX,C=Math.min(T+l*Se.band[0],T+l*Se.band[1]),P=Math.max(T+l*Se.band[0],T+l*Se.band[1]);o.some(S=>Math.abs(S.y-y)<=S.hy+.3&&S.x+S.hx>=C&&S.x-S.hx<=P)||d++}if(d<1)continue;const g=Ns(s,n,l,h,h,1),_=Ns(s,n,l,u,u,1),m=Ns(s,n,l,f,f,1),p=l<0?m.lo:m.hi,E=(l<0?_.lo-g.lo:_.hi-g.hi)/Se.length;r({id:`fence-${s}-${l}-${c}`,x:p+l*(ze.offset+Se.thickness/2+.05),y:f,type:"edgefence",radius:0,width:Se.thickness,depth:Se.length,obstacle:!1,scale:1,rotation:-Math.atan(E),variant:Math.floor(ne(c*71+l*13,s)*4),side:l,biome:Pe(f,s,n,p+l*2,!0)})}for(const[c,l]of[["start",-.5-Se.thickness/2-.05],["end",a+ze.offset+Se.thickness/2+.05]]){if(l<t||l>=e)continue;const h=Qe(Math.max(0,Math.min(a,l)),s,n),u=h.minX-ze.thickness,f=h.maxX+ze.thickness,d=Math.ceil((f-u)/(Se.length-.2));for(let g=0;g<d;g++)r({id:`fence-${s}-${c}-${g}`,x:u+(f-u)*(g+.5)/d,y:l,type:"edgefence",radius:0,width:Se.length,depth:Se.thickness,obstacle:!1,scale:1,rotation:Math.PI/2,variant:(g+1)%4,side:0,cap:c,biome:Pe(Math.max(0,l),s,n)})}}function Tf(s,t,e,n,i,r,a,o,c,l){const u=[];for(let f=Math.floor((t-8)/3.2);f<=Math.ceil((e+8)/3.2);f++)for(const d of[-1,1]){const g=d>0?7919:0,_=V=>ne(f*6151+g+V*101,s);let m=f;for(;m>f-9&&ne(m*3571+g+29,s)>.2;)m--;const p=m,E=(()=>{let V=f+1;for(;V<m+9&&ne(V*3571+g+29,s)>.2;)V++;return V-m})(),x=V=>ne(p*911+g+V*53,s),y=(f-m+.5)/E,b=f*3.2+(_(1)-.5)*1.6,T=Qe(b,s,n),C=d<0?T.minX:T.maxX,[P,S]=c(b);if(C<P-20||C>S+20)continue;const M=on[Pe(b,s,n,C+d*2,!0)],D=i.find(V=>Math.abs(V.y-b)<V.width/2+3.5);let A=M.barriers[Math.floor(x(1)*M.barriers.length)];_(2)<.18&&(A=M.barriers[Math.floor(_(3)*M.barriers.length)]),D&&ni.has(M.id)&&(A="carpile"),d<0&&jh(b,s,n)>.5&&(A="water");const N=!(Jh(b,n)>0)&&!D&&x(4)<.3?(4+x(5)*6)*Math.sin(Math.PI*y):0,U=.8+x(6)*.45,O=x(2)*2+_(4)*1.2+N,$=!N&&!D&&!M.open&&x(7)<.35&&_(8)<.3,G=Math.max($||M.open?2:1,1+(x(3)<.7?1:0)+(_(5)<.3?1:0)+(N>4?1:0));for(let V=$?1:0;V<G;V++){const st=M.open&&V===0&&Qr[A].hole?M.barriers[0]:A,nt=Qr[st],gt=!nt.box,wt=U*(gt?.7+_(6+V)*.65:.85+_(6+V)*.4)*(V?1.08:1),Wt=nt.box?nt.box[0]*wt:0,Ot=nt.box?nt.box[1]*wt:0,q=nt.box?Wt:nt.radius*wt;let K=b+(V%2?3.2*.5:0)+(_(9+V)-.5)*(gt?2.6:1.2);const yt=N>4&&V===G-1?N-q:null,Et=yt!==null?-yt:V===0?q*(.35+_(12)*.45)-O:q*(.6+V*1.25)+1+_(13+V)*2.2-N*.5;let dt=C+d*(Et+(gt?(_(20+V)-.5)*q*.9:0));const zt=nt.box?Ot:q;for(const rt of i)Math.abs(rt.y-K)<rt.width/2+zt+.9&&(d>0&&dt-q<rt.maxX+.1&&(dt=rt.maxX+.1+q),d<0&&dt+q>rt.minX-.1&&(dt=rt.minX-.1-q));if(a(dt,K,q,zt)||l(dt,K,q)||r.some(rt=>Math.abs(dt-rt.x)<rt.width/2+.5&&Math.abs(K-rt.y)<rt.depth/2+.5))continue;const[Jt,L]=[dt,K];for(const rt of r){const Ft=Math.abs(dt-rt.x)-rt.width/2-q,Ut=Math.abs(K-rt.y)-rt.depth/2-zt;Ut<0&&Ft>0&&Ft<3?dt+=Math.sign(rt.x-dt)*(Ft+.4):Ft<0&&Ut>0&&Ut<3&&(K+=Math.sign(rt.y-K)*(Ut+.4))}a(dt,K,q,zt)&&([dt,K]=[Jt,L]);const tt={id:`bar-${s}-${f}-${d}-${V}`,x:dt,y:K,type:st,scale:wt,rotation:nt.box?(_(14)<.5?0:Math.PI)+(_(19)-.5)*(st==="logs"?.55:.3):_(14)*Math.PI*2,radius:nt.box?Math.hypot(Wt,Ot):q,obstacle:!0,barrier:!0,blocksShots:!vf.has(st),side:d,variant:Math.floor(_(15)*4),biome:M.id,corrupted:!1};nt.box&&Object.assign(tt,{width:Wt*2,depth:Ot*2,collision:{kind:"box",halfX:Wt,halfY:Ot}}),st==="carpile"&&(tt.fire=_(16)<.4,tt.smoke=tt.fire||_(17)<.35,tt.effectHeight=1.2),st==="logs"&&M.id==="burned"&&(tt.charred=!0,tt.fire=_(18)<.2);const Z=nt.box?Wt:q,et=nt.box?Ot:q,Q=_f(s,n,d,K-et-ze.step*.7,K+et+ze.step*.7),mt=d*(dt-d*Z-Q)>=0,ot=d*(Q-(dt+d*Z));if(mt)tt.obstacle=!1;else if(ot<ze.fill){const rt=dt+d*(nt.box?Z*.5:0),Ft=Math.abs(Q+d*ze.thickness*.5-rt)/2,Ut=nt.box?Ot:q*.7;o({id:`${tt.id}-fill`,x:(rt+Q+d*ze.thickness*.5)/2,y:K,type:"edgewall",radius:Math.hypot(Ft,Ut),collision:{kind:"box",halfX:Ft,halfY:Ut},width:Ft*2,depth:Ut*2,obstacle:!0,blocksShots:!1,invisible:!0,side:d,scale:1,rotation:0,biome:M.id})}u.push(tt),o(tt)}}return u}function ts(s,t={}){const e=typeof s=="string"?Ne[s]:s;if(!e)return 0;const n=e.cooldown*(t.rapid>0?.58:1),i=e.pellets/n;return Math.round(Math.max(7,Math.min(30,32/Math.sqrt(i)))*100)/100}const Ne=Object.freeze(Object.fromEntries(Object.entries({sidearm:{id:"sidearm",name:"Courier sidearm",shortName:"SIDEARM",color:"#ffe6aa",range:24,damage:18,cooldown:.46,pellets:1,spread:0,projectileSpeed:41,radius:.2},scattergun:{id:"scattergun",name:"Scattergun",shortName:"SCATTERGUN",color:"#ffad6c",range:13,damage:11,cooldown:.84,pellets:5,spread:.36,projectileSpeed:36,radius:.22},rifle:{id:"rifle",name:"Burst rifle",shortName:"BURST RIFLE",color:"#a8ffe1",range:30,damage:15,cooldown:.57,pellets:3,spread:.055,projectileSpeed:51,radius:.17},arc:{id:"arc",name:"Arc launcher",shortName:"ARC LAUNCHER",color:"#c5b3ff",range:23,damage:58,cooldown:1.38,pellets:1,spread:0,projectileSpeed:26,radius:.35,splash:5.2}}).map(([s,t])=>[s,{...t,range:ts(t)}]))),Af=Object.freeze([{contact:1,damage:1,pack:0,ambush:0,spawn:1,maxEnemies:10,runner:.1,dogs:0,guardianHp:1,guardianDamage:12,aggression:1,signatureEvery:4,minionCap:6,reward:1,heal:20,healChance:.24},{contact:1.25,damage:1.12,pack:0,ambush:0,spawn:.96,maxEnemies:16,runner:.12,dogs:.03,guardianHp:1.05,guardianDamage:16,aggression:1.06,signatureEvery:3,minionCap:6,reward:.96,heal:19,healChance:.23},{contact:1.5,damage:1.18,pack:1,ambush:1,spawn:.92,maxEnemies:22,runner:.15,dogs:.06,guardianHp:1.1,guardianDamage:22,aggression:1.12,signatureEvery:3,minionCap:6,reward:.92,heal:18,healChance:.22},{contact:1.75,damage:1.25,pack:1,ambush:2,spawn:.88,maxEnemies:28,runner:.18,dogs:.09,guardianHp:1.15,guardianDamage:26,aggression:1.18,signatureEvery:2,minionCap:6,reward:.88,heal:17,healChance:.21},{contact:2,damage:1.32,pack:1,ambush:2,spawn:.84,maxEnemies:32,runner:.21,dogs:.12,guardianHp:1.2,guardianDamage:30,aggression:1.24,signatureEvery:2,minionCap:4,reward:.85,heal:16,healChance:.2},{contact:2.3,damage:1.4,pack:2,ambush:3,spawn:.8,maxEnemies:36,runner:.24,dogs:.15,guardianHp:1.25,guardianDamage:34,aggression:1.3,signatureEvery:2,minionCap:4,reward:.82,heal:15,healChance:.19}].map(s=>Object.freeze(s))),rn={walker:{hp:36,radius:.95,speed:6.3,damage:11,attackDelay:1.2},dog:{hp:28,radius:.65,speed:12.5,damage:9,attackDelay:1.05},brute:{hp:135,radius:1.65,speed:2.8,damage:15,attackDelay:1.65},boss:{hp:410,radius:2.9,speed:3.3,damage:22,attackDelay:3.2}},Yn={dog:{windup:.6,life:.5,speed:17,reach:15,cooldown:2.4,spread:2.2,first:1.2},walker:{windup:.8,life:.5,speed:15,reach:12,cooldown:2.8,spread:2.2,first:1.6}},Ui={life:1.1,speed:8.2},tl={dog:.5,walker:.5,brute:.125,boss:.0625},Ni={speed:11.5,near:6,far:18,stamina:2,cooldown:4},el=[[0,.785,.9],[.785,1.3,.1]],nl=600,Cf=5,Rf=15,il=80*Math.PI/180,va={rapid:10,power:10,speed:8},or=30,Pf={dog:.07,walker:.1,brute:.25},Df=.3,Lf=3,Le=.48,$n=.8,cr={share:.35,cooldown:.8,overlap:.8},If=.25,sl={count:3,radius:8},Nn={count:4,radius:6,time:2,cooldown:6,rate:.6},Uf=Object.freeze({sidearm:25,rifle:35,scattergun:40,arc:55}),Nf=1.15,Ff=60,Ma=10,ci={share:.35,max:2.4,turn:1.6,hold:1.2,spread:1.4,road:18},kf=.3,Of=.3,Fi=1e-7,yc=s=>Af[Gr(s)],bs=s=>yc(s).heal,ba=s=>yc(s).healChance,Bf=["The Tollkeeper","Rootbound","The Undertow","The Hollow Sun","The Cairn","The Last Warden"],Ss=Object.freeze(["toll","root","tide","sun","cairn","warden"]),rl=Object.freeze({toll:[{kind:"burst",windup:1.4,radius:7,inner:0,text:"tolls its bell · get clear of the ring"}],root:[{kind:"line",windup:1.2,length:24,width:3.2,text:"drives roots along the ground · step off the red line"}],tide:[{kind:"sweep",windup:1.25,radius:11,arc:.96,text:"raises a wave · get out of the red fan"}],sun:[{kind:"burst",windup:1.3,radius:10.5,inner:4.5,text:"flares · hug it inside the ring or run past the edge"}],cairn:[{kind:"rockfall",windup:1.2,radius:2.6,text:"brings down rocks · leave the red circles"}],warden:[{kind:"line",windup:1.15,length:26,width:3.4,text:"drives roots along the ground · step off the red line"},{kind:"sweep",windup:1.2,radius:11.5,arc:1,text:"raises a wave · get out of the red fan"},{kind:"rockfall",windup:1.15,radius:2.7,text:"brings down rocks · leave the red circles"},{kind:"burst",windup:1.25,radius:10.5,inner:4.5,text:"flares · hug it inside the ring or run past the edge"}]}),zf=["charge","slam","line","sweep","burst","rockfall"],al={x:.781,y:.625},ol={x:-.625,y:.781},Hf=2.5,cl=2,ll=4,Sa={life:12,stall:1,deaf:4},ki={cos:.92,share:.55,stall:.25,scan:12,past:1.1},hl={hold:5,margin:1.25},Qh=30,ul=`Rest restores +${Qh} health, up to 100`,fl=4,lr={distance:150,gap:10,trim:2,block:3},Ea={after:4,rate:.2,step:1},Oi=Object.freeze({warning:1.2,lull:4}),hr={ahead:35,near:40,offRoad:12,back:10},wa={turns:[20,32,44,56,68],free:.7,gain:.12},dl=["sidearm","scattergun"],pl=1,Fs=2,ks=s=>s==="express"?450:2700,Hr=s=>s==="express"?300:1800,tu=s=>s.legLength??(s.routeVersion===Fs?ks(s.pace):Hr(s.pace)),Ta=Math.PI*2,Ee=(s,t,e)=>Math.max(t,Math.min(e,s)),Gr=s=>Ee(Math.floor(s)||0,0,5),ve=(s,t)=>Math.hypot(s.x-t.x,s.y-t.y),Re=s=>JSON.parse(JSON.stringify(s)),Bt=s=>typeof s=="number"&&Number.isFinite(s);function Gf(s){if(typeof s=="number"&&Number.isFinite(s))return s>>>0||1;let t=2166136261;for(const e of String(s??"kuru"))t=Math.imul(t^e.charCodeAt(0),16777619);return t>>>0||1}function xo(s,t,e,n,i,r,a){const o=e-s,c=n-t,l=s-i,h=t-r,u=l*l+h*h-a*a;if(u<=0)return 0;const f=o*o+c*c;if(!f)return null;const d=l*o+h*c,g=d*d-f*u;if(g<0)return null;const _=(-d-Math.sqrt(g))/f;return _>=0&&_<=1?_:null}function Vf(s,t,e,n,i,r){let a=0,o=1;for(const[c,l,h,u]of[[s,e-s,i.x,i.collision.halfX+r],[t,n-t,i.y,i.collision.halfY+r]]){if(Math.abs(l)<1e-10){if(Math.abs(c-h)>u)return null;continue}const f=(h-u-c)/l,d=(h+u-c)/l;if(a=Math.max(a,Math.min(f,d)),o=Math.min(o,Math.max(f,d)),a>o)return null}return a}const ns=s=>s.obstacle!==!1&&s.radius>0&&!["crate","locker","lootbox","ammo"].includes(s.type),Aa=(s,t,e,n)=>s.collision?.kind==="box"?Math.abs(t-s.x)<s.collision.halfX+n&&Math.abs(e-s.y)<s.collision.halfY+n:Math.hypot(t-s.x,e-s.y)<s.radius+n,ml=s=>ns(s)&&!(s.type==="edgewall"&&s.side&&!String(s.id).endsWith("-fill")),gl=s=>ns(s)&&s.blocksShots!==!1,Es=(s,t,e,n,i,r)=>i.collision?.kind==="box"?Vf(s,t,e,n,i,r):xo(s,t,e,n,i.x,i.y,i.radius+r);function Wf(s){if(s.combatVersion!==1){for(const t of s.enemies){const e=Ee(t.hp/t.maxHp,0,1);t.type!=="boss"&&(t.maxHp=rn[t.type].hp*(1+s.leg*.045)),t.hp=t.maxHp*e,t.damage=rn[t.type].damage+(t.type==="boss"?s.leg*4:0)}s.combatVersion=1}s.worldVersion=1}function Vr(s){const t=Re(s),e=tu(t),n=ks(t.pace),i=n/e,r=o=>{const c=o.y;o.y*=i,o.x+=te(o.y,t.seed,n)-te(c,t.seed,e)},a=(o,c,l)=>{const h={x:o,y:c},u={x:o+Math.sin(l),y:c+Math.cos(l)};return r(h),r(u),Math.atan2(u.x-h.x,u.y-h.y)};if(i!==1){const o=new Map(t.crateHealth||[]);for(const l of t.crates)l.hp>0&&l.hp<30&&o.set(l.id,l.hp);const c=t.player;Bt(c.aimAngle)&&(c.aimAngle=a(c.x,c.y,c.aimAngle)),r(c);for(const l of["enemies","projectiles","drops","crates"])for(const h of t[l]){const{x:u,y:f}=h;Bt(h.angle)&&(h.angle=a(u,f,h.angle)),h.telegraph&&(h.telegraph.angle=a(u,f,h.telegraph.angle),Bt(h.telegraph.x)&&Bt(h.telegraph.y)&&r(h.telegraph)),h.charge&&(h.charge.angle=a(u,f,h.charge.angle)),r(h),l==="enemies"&&(h.radius=rn[h.type].radius)}t.crateHealth=[...o],t.crates=[]}return t.routeVersion=Fs,t.legLength=n,Wf(t),t.checkpoint&&(t.checkpoint=Vr(t.checkpoint)),t.guardianCheckpoint&&(t.guardianCheckpoint=Vr(t.guardianCheckpoint)),t.waypointCheckpoint&&(t.waypointCheckpoint=Vr(t.waypointCheckpoint)),t}class We{constructor({seed:t=Date.now(),saved:e=null,pace:n="journey"}={}){if(e&&!We.validateSave(e))throw new Error("This checkpoint cannot be read. Its save data is incomplete or from a different version.");e&&(e=Vr(e)),this.seed=Gf(e?.seed??t),this.pace=e?.pace??(n==="express"?"express":"journey"),this.legLength=ks(this.pace),this.speed=9,this.totalLegs=6,this.mode="playing",this.player={x:te(0,this.seed,this.legLength),y:0,hp:100,maxHp:100,shield:0,angle:0,aimAngle:0,lastShotAt:null,movingSpeed:0,velocity:{x:0,y:0},weapon:"sidearm",blocked:!1,hurtFlash:0,panic:0,panicCooldown:0},this.enemies=[],this.projectiles=[],this.drops=[],this.effects=[],this.crates=[],this.events=[],this.elapsed=0,this.leg=0,this.progress=0,this.kills=0,this.combo=0,this.weapons=[...dl],this.buffs={rapid:0,power:0,speed:0},this.cargo=100,this._boss=null,this.checkpointCount=0,this._rngState=this.seed,this._nextId=1,this._legElapsed=0,this._spawnClock=5,this._fireClock=0,this._comboClock=0,this._hurtClock=0,this._bossSpawned=!1,this._bossDefeated=!1,this._bossReinforcementClock=0,this._bossWave=0,this._quietCycle=-1,this._destroyedCrates=new Set,this._knownCrates=new Set,this._crateHealth=new Map,this._cratesOpened=0,this._emptyCrates=0,this._noticeClock=0,this.refugeReport=null,this._blockedClock=0,this._blockedNotified=!1,this._props=[],this._propsY=-1/0,this._lastEncounter=-1,this._checkpointSnapshot=null,this._guardianSnapshot=null,this._waypointSnapshot=null,this._waypointK=0,this._ambushQueue=[],this._gateClock=0,this._beaconMissed=!1,this._guardianFails=0,this._holdClock=0,this._holdStart=null,this._stuck=!1,this._graceClock=fl,this._frontier=this.player.y,this._lingerClock=0,this._encounterAt=-1/0,this._minionCall=null,this._bossLull=0,this._slideSide=0,this._refreshWorld(),this._checkpointSnapshot=this._snapshot(),e&&(this._restore(e),this._checkpointSnapshot=Re(e.checkpoint||this._snapshot()),this._guardianSnapshot=e.guardianCheckpoint?Re(e.guardianCheckpoint):null,this._waypointSnapshot=e.waypointCheckpoint?Re(e.waypointCheckpoint):null,this._refreshWorld(!0),this._freshStart()),this._updateObjective()}get boss(){return this._boss&&this._boss.hp>0&&this.enemies.includes(this._boss)?this._boss:null}set boss(t){this._boss=t}_random(){this._rngState=this._rngState+1831565813>>>0;let t=this._rngState;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}_id(){return this._nextId++}get difficulty(){return yc(this.leg)}get maxEnemies(){return this.difficulty.maxEnemies}_alive(){return this.enemies.filter(t=>t.hp>0).length}_event(t,e,n={}){this.events.push({type:t,text:e,...n}),this.events.length>48&&this.events.splice(0,this.events.length-48)}_effect(t,e,n,i=.45,r={}){this.effects.push({id:this._id(),type:t,x:e,y:n,life:i,maxLife:i,...r})}_refreshWorld(t=!1){if(this.biome=pn(this.player.y,this.seed,this.legLength,this.player.x),!t&&Math.abs(this.player.y-this._propsY)<30)return;this._propsY=this.player.y,this._props=Zh(this.seed,this.player.y-85,this.player.y+105,this.legLength)||[];for(const h of this.crates)h.hp>0&&h.hp<30&&this._crateHealth.set(h.id,h.hp);this.crates=this.crates.filter(h=>Math.abs(h.y-this.player.y)<115&&!this._destroyedCrates.has(h.id));const e=new Set(this.crates.map(h=>h.id)),n=h=>h>this._propsY-75&&h<this._propsY+90;for(const h of this._props){if(!["crate","locker","lootbox","ammo"].includes(h.type)||e.has(h.id)||this._destroyedCrates.has(h.id)||h.y<2||!n(h.y))continue;this._knownCrates.add(h.id),e.add(h.id);const u=this._reachablePoint(h.x,h.y,1,(f,d)=>Math.hypot(f-this.player.x,d-this.player.y)>=3.5);this.crates.push({id:h.id,x:u.x,y:u.y,radius:h.radius||.8,hp:this._crateHealth.get(h.id)??30,maxHp:30,type:h.type})}const i=this.checkpointY-(this.pace==="express"?50:60),r=`medcache-${this.leg}`,a=i-30;if(!this._bossSpawned&&!e.has(r)&&!this._destroyedCrates.has(r)&&a>this.leg*this.legLength+20&&n(a)){const h=this._reachablePoint(te(a,this.seed,this.legLength)+4.5,a,1,(u,f)=>Math.hypot(u-this.player.x,f-this.player.y)>=3.5);this._knownCrates.add(r),e.add(r),this.crates.push({id:r,x:h.x,y:h.y,radius:.8,hp:this._crateHealth.get(r)??30,maxHp:30,type:"locker",medkit:!0})}const o=82.5,c=Math.floor((this.player.y-70)/o),l=Math.ceil((this.player.y+90)/o);for(let h=Math.max(0,c);h<=l;h++){const u=`supply-${h}`;if(e.has(u)||this._destroyedCrates.has(u))continue;const f=h*o+21;if(!n(f))continue;const d=(h+this.seed)%2?-1:1;this._knownCrates.add(u),e.add(u);const g=this._reachablePoint(te(f,this.seed,this.legLength)+d*4.6,f,1,(_,m)=>Math.hypot(_-this.player.x,m-this.player.y)>=3.5);this.crates.push({id:u,x:g.x,y:g.y,radius:.8,hp:this._crateHealth.get(u)??30,maxHp:30,type:h%3===0?"locker":"crate"})}}_corridor(t){const e=Us(this.seed,this.legLength,this.totalLegs),n=Qe(t,this.seed,this.legLength);return{minX:Math.max(n.minX,e.minX),maxX:Math.min(n.maxX,e.maxX),minY:e.minY,maxY:e.maxY}}_reachable(t,e,n=.9){const i=this._corridor(e);return t<i.minX+n||t>i.maxX-n||e<i.minY||e>i.maxY?!1:!this._props.some(r=>ns(r)&&Aa(r,t,e,n))}_reachablePoint(t,e,n=.9,i=null,r=!1){const a=(c,l)=>this._reachable(c,l,n)&&(!i||i(c,l));if(a(t,e))return{x:t,y:e};for(let c=.8;c<=(r?48:32);c+=.8){const l=Math.max(8,Math.ceil(c*2.4));for(let h=0;h<l;h++){const u=(h/l+c*.37)*Ta,f=t+Math.sin(u)*c,d=e+Math.cos(u)*c;if(a(f,d))return{x:f,y:d}}}if(r)return null;const o=this._corridor(e);return{x:Ee(te(e,this.seed,this.legLength),o.minX,o.maxX),y:Ee(e,o.minY,o.maxY)}}_arenaSpot(t){const e=mn(t-1,this.seed,this.legLength);if(e){const i=Ee(this.player.y+30,e.minY+14,t-14);for(const r of[0,-6,6,-12,12]){const a=te(i,this.seed,this.legLength)+r;if(this._reachable(a,i,3))return{x:a,y:i}}}let n=null;for(let i=20;i<=36;i+=4){const r=Math.min(t-4,this.player.y+i);for(const a of[0,-8,8,-16,16]){const o=te(r,this.seed,this.legLength)+a;if(!this._reachable(o,r,3))continue;const l=this._props.filter(h=>ns(h)&&Aa(h,o,r,12)).length*10+Math.abs(a)*.3+(i-20)*.2;(!n||l<n.cost)&&(n={x:o,y:r,cost:l})}}return n?{x:n.x,y:n.y}:this._reachablePoint(this.player.x,Math.min(t-4,this.player.y+18),2)}_takeGuardianSnapshot(t){const e=this._snapshot();e.player.y=Math.max(t,this.leg*this.legLength),e.player.x=te(e.player.y,this.seed,this.legLength),e.player.hp=e.player.maxHp,e.player.velocity={x:0,y:0},e.player.movingSpeed=0,e.progress=Ee((e.player.y-this.leg*this.legLength)/this.legLength,0,1),e.enemies=[],e.projectiles=[],this._guardianSnapshot=e}_easing(){return this._guardianFails>=2?3:this._guardianFails>=1?2:0}get canRetryGuardian(){return!!this._guardianSnapshot&&this.mode==="dead"}_blockedAt(t,e,n,i=!1){return this._props.some(r=>(i?ml(r):ns(r))&&Aa(r,t,e,n))}_solidsNear(t,e,n,i=!1){const r=[];for(const a of this._props){if(!(i?ml(a):ns(a)))continue;const o=a.collision?.kind==="box";Math.abs(a.x-t)<(o?a.collision.halfX:a.radius)+n&&Math.abs(a.y-e)<(o?a.collision.halfY:a.radius)+n&&r.push(a)}return r}static _pushOut(t,e,n,i){if(t.collision?.kind==="box"){const l=e-t.x,h=n-t.y,u=t.collision.halfX+i-Math.abs(l),f=t.collision.halfY+i-Math.abs(h);return u<=Fi||f<=Fi?null:u<f?{x:(l<0?-1:1)*u,y:0}:{x:0,y:(h<0?-1:1)*f}}const r=e-t.x,a=n-t.y,o=Math.hypot(r,a),c=t.radius+i;return o>=c-Fi?null:o<1e-6?{x:c,y:0}:{x:r/o*(c-o),y:a/o*(c-o)}}_moveBody(t,e,n,i,r=!1){const a={collided:!1,barrier:!1,gate:!1};if(!e&&!n)return a;const o=this._solidsNear(t.x+e/2,t.y+n/2,i+(Math.abs(e)+Math.abs(n))/2+.1,r);if(!o.length)return t.x+=e,t.y+=n,a;const c=g=>{a.collided=!0,g.barrier&&(a.barrier=!0),(g.type==="gatewall"||g.type==="gatepillar")&&(a.gate=!0)},l={x:t.x,y:t.y},h=!o.some(g=>We._pushOut(g,l.x,l.y,i));let u=l;const f=(g,_)=>{const m={x:l.x,y:l.y};u=m;for(const[p,E,x]of[["x","y",g],["y","x",_]]){if(!x)continue;let y=m[p]+x;for(const b of o){if(b.collision?.kind!=="box")continue;const T=(p==="x"?b.collision.halfX:b.collision.halfY)+i,C=(p==="x"?b.collision.halfY:b.collision.halfX)+i;if(Math.abs(m[E]-b[E])>=C-Fi)continue;const P=m[p]-b[p];Math.abs(P)<T-Fi||(x>0&&P<0&&y>b[p]-T?(y=b[p]-T,c(b)):x<0&&P>0&&y<b[p]+T&&(y=b[p]+T,c(b)))}m[p]=y}for(let p=0;p<4;p++){let E=!1;for(const x of o){const y=We._pushOut(x,m.x,m.y,i);y&&(c(x),m.x+=y.x,m.y+=y.y,E=!0)}if(!E)return m}return o.some(p=>We._pushOut(p,m.x,m.y,i))?null:m};let d=f(e,n);return!d&&h&&(d=e&&n&&(f(e,0)||f(0,n))||l),d||(d=h?l:u),t.x=d.x,t.y=d.y,a}_walkEnemy(t,e,n,i,r){const a=Math.hypot(e,n)||1;let o=Math.atan2(e,n);t.detour&&(o+=t.detour.side*1.1,t.detour.life-=r,t.detour.life<=0&&(t.detour=null));const c=Math.sin(o)*i*r,l=Math.cos(o)*i*r,h={x:t.x,y:t.y},{collided:u}=this._moveBody(t,c,l,t.radius*$n);t.detour&&u&&(t.detour.life=Math.max(t.detour.life,.5));const f=Math.hypot(t.x-h.x,t.y-h.y);return t.snag=f<i*r*.35?(t.snag||0)+r:Math.max(0,(t.snag||0)-r),t.snag>.4&&!t.detour&&(t.detourSide??=this._random()<.5?-1:1,t.detour={side:t.detourSide,life:3},t.snag=0),a}_lungeAim(t,e){const n=this.player.velocity;let i=e.life*.5,r=this.player.x,a=this.player.y;for(let o=0;o<6;o++)r=this.player.x+n.x*(e.windup+i),a=this.player.y+n.y*(e.windup+i),i=Math.hypot(r-t.x,a-t.y)/e.speed;return{angle:Math.atan2(r-t.x,a-t.y),ok:i<=e.life*.96,reach:Math.hypot(r-t.x,a-t.y)}}_lineClear(t,e,n=.2,i=0){const r=Math.hypot(e.x-t.x,e.y-t.y),a=Math.min(t.x,e.x),o=Math.max(t.x,e.x),c=Math.min(t.y,e.y),l=Math.max(t.y,e.y);for(const h of this._props){if(!gl(h))continue;const u=(h.collision?.halfX??h.radius)+n,f=(h.collision?.halfY??h.radius)+n;if(h.x+u<a||h.x-u>o||h.y+f<c||h.y-f>l)continue;const d=Es(t.x,t.y,e.x,e.y,h,n);if(d!==null&&d*r<r-i)return!1}return!0}_updateRunner(t,e,n){return t.sprintCooldown>0?(t.sprintCooldown=Math.max(0,t.sprintCooldown-n),t.sprintCooldown===0&&(t.sprintLeft=Ni.stamina),!1):e<Ni.near||e>Ni.far||!this._lineClear(t,this.player)?!1:(t.sprintLeft-=n,t.sprintLeft<=0?(t.sprintCooldown=Ni.cooldown,!1):(t.sprinting=!0,!0))}update(t,e={x:0,y:0}){if(this.mode!=="playing"){this._stopPlayerMotion();return}if(!Bt(t)||t<=0)return;let n=Math.min(t,.35);for(;n>0;){const i=Math.min(n,.03333333333333333);if(this._step(i,e),n-=i,this.mode!=="playing")break}}_step(t,e){this.elapsed+=t,this._legElapsed+=t,this._fireClock-=t,this._hurtClock=Math.max(0,this._hurtClock-t),this._graceClock=Math.max(0,this._graceClock-t),this._bossLull=Math.max(0,this._bossLull-t),this.player.hurtFlash=Math.max(0,(this.player.hurtFlash||0)-t),this.player.panic=Math.max(0,(this.player.panic||0)-t),this.player.panicCooldown=Math.max(0,(this.player.panicCooldown||0)-t),this._comboClock-=t,this._comboClock<=0&&(this.combo=0);for(const p of Object.keys(this.buffs))this.buffs[p]=Math.max(0,this.buffs[p]-t);for(const p of this.effects)p.life-=t;this.effects=this.effects.filter(p=>p.life>0).slice(-150);let n=Bt(e.x)?e.x:0,i=Bt(e.y)?e.y:0;const r=Math.hypot(n,i);r>1&&(n/=r,i/=r);const a=this.buffs.speed>0?1.25:1,o=this.player.x,c=this.player.y,l=this._movePlayer(n*this.speed*a*t,i*this.speed*(i<0?a:1)*t),h=Us(this.seed,this.legLength,this.totalLegs);this.player.y=Ee(this.player.y,h.minY,h.maxY),this._gateClock=Math.max(0,this._gateClock-t),this._noticeClock=Math.max(0,this._noticeClock-t);let u=this._touchedGate&&i>.3;if(this._bossSpawned){const p=mn(this.checkpointY-1,this.seed,this.legLength),E=p?p.gateY-.5:this.checkpointY+Rf;if(this.player.y>E){const x=this.player.y;this.player.y=Math.min(x,Math.max(c,E)),this.player.y<x&&(u=!0)}}const f=this.boss;u&&f&&this._gateClock<=0&&(this._gateClock=ll,this._event("guardianGate",`Defeat ${f.name||"the guardian"} to open the gate`,{guardian:f.name}));const d=this._corridor(this.player.y),g=this._touchedEdge||this.player.x<d.minX||this.player.x>d.maxX;this.player.x=Ee(this.player.x,d.minX,d.maxX),this._blockedAt(this.player.x,this.player.y,Le-.01,!0)&&!this._blockedAt(o,c,Le-.01,!0)&&(this.player.x=o,this.player.y=c);const _=Math.hypot(this.player.x-o,this.player.y-c)/t;if(this.player.velocity=r>.06?{x:(this.player.x-o)/t,y:(this.player.y-c)/t}:{x:0,y:0},this.player.movingSpeed=r>.06?_:0,this.player.blocked=(l||g)&&r>.06&&_<.15,r>.06){if(this._holdStart??={x:this.player.x,y:this.player.y},this._holdClock+=t,this._holdClock>=4){const E=Math.hypot(this.player.x-this._holdStart.x,this.player.y-this._holdStart.y)<3;if(E&&!this._stuck){const x=this.guideArrow,y=this.guideTarget;this._event("stuck",`Stuck? The route is ${x} · drag around the obstacle`,{arrow:x,target:{x:y.x,y:y.y}})}this._stuck=E,this._holdClock=0,this._holdStart={x:this.player.x,y:this.player.y}}}else this._holdClock=0,this._holdStart=null;if(this._stuck&&r>.06&&Math.hypot(this.player.x-(this._holdStart?.x??this.player.x),this.player.y-(this._holdStart?.y??this.player.y))>3&&(this._stuck=!1),this.player.blocked?(this._blockedClock+=t,this._blockedClock>=1&&!this._blockedNotified&&(this._blockedNotified=!0,g||this._touchedBarrier?this._event("blocked","No way through · head back toward the road",{edge:!0}):this._event("blocked","Path blocked · drag sideways around the obstacle"))):(this._blockedClock=0,r>.06&&_>=.15&&(this._blockedNotified=!1)),r>.06&&_>.15&&(this.player.angle=Math.atan2(this.player.velocity.x,this.player.velocity.y)),this._refreshWorld(),this.progress=Ee((this.player.y-this.leg*this.legLength)/this.legLength,0,1),this.player.y>this._frontier+Ea.step?(this._frontier=this.player.y,this._lingerClock=0):this._lingerClock+=t,this._updatePacing(t),this._updateEnemies(t),this.mode!=="playing")return;this._updatePanic(),this._autoFire(),this._updateProjectiles(t),this._openTouchedCrates(),this._collectDrops(t);const m=this._heading();this.enemies=this.enemies.filter(p=>p.hp>0&&(p.type==="boss"||ve(p,this.player)<100&&this._alongAcross(p.x,p.y,m).along>-45)),this.boss=this.enemies.find(p=>p.type==="boss"&&p.hp>0)||null,this.progress>=1&&this._bossDefeated&&(this.pace==="express"||this._legElapsed>=300)?this._reachCheckpoint():(this._watchBeacon(),this._watchWaypoint()),this._updateObjective()}_watchWaypoint(){if(this.pace!=="journey"||this._bossSpawned||this.mode!=="playing")return;const t=Math.floor((this.player.y-this.leg*this.legLength)/nl);if(t<1||t<=this._waypointK&&this._waypointSnapshot)return;this._waypointK=t;const e=this._snapshot();e.enemies=[],e.projectiles=[],e.ambushQueue=[],e.player.hp=Math.max(e.player.hp,60),e.player.velocity={x:0,y:0},e.player.movingSpeed=0,e.spawnClock=Math.max(e.spawnClock,4),this._waypointSnapshot=e,this._event("waypoint","Waypoint saved · a fall here restarts from this spot")}get canRetryWaypoint(){return!!this._waypointSnapshot&&!this._guardianSnapshot&&this.mode==="dead"}retryWaypoint(){if(!this._waypointSnapshot)return!1;const t=this.kills,e=[...this.weapons];this._restore(Re(this._waypointSnapshot)),this.kills=Math.max(this.kills,t);for(const n of e)this.weapons.includes(n)||this.weapons.push(n);return this.player.hp=this.player.maxHp,this._guardianSnapshot=null,this.events=[],this._refreshWorld(!0),this._hurtClock=2,this._freshStart(),this._event("retry","Back at your last waypoint. The road ahead is as you left it."),!0}_watchBeacon(){const t=this.player.x-te(this.checkpointY,this.seed,this.legLength);if(this.player.y>this.checkpointY+20||this.player.y>this.checkpointY-30&&Math.abs(t)>20){if(this._beaconMissed||this.boss)return;this._beaconMissed=!0,this._event("beaconMissed","Refuge behind you · follow the arrow")}else(this.checkpointDistance<15||this.player.y<this.checkpointY-30)&&(this._beaconMissed=!1)}_movePlayer(t,e){const n={x:this.player.x,y:this.player.y},{collided:i,barrier:r,gate:a}=this._moveBody(this.player,t,e,Le,!0);this._touchedBarrier=r,this._touchedGate=a;const o=this._corridor(this.player.y),c=Ee(this.player.x,o.minX,o.maxX);return this._touchedEdge=c!==this.player.x,this._touchedEdge&&(this._blockedAt(c,this.player.y,Le-.01,!0)&&!this._blockedAt(n.x,n.y,Le-.01,!0)?(this.player.x=n.x,this.player.y=n.y):this.player.x=c),i&&Math.hypot(this.player.x-n.x,this.player.y-n.y)<Math.hypot(t,e)*ki.stall&&!this._glide(n,t,e)&&this._headOnSlide(t,e),i}_courierMove(t,e,n){const i={x:t.x,y:t.y};this._moveBody(i,e,n,Le,!0);const r=this._corridor(i.y),a=Ee(i.x,r.minX,r.maxX);return a!==i.x&&this._blockedAt(a,i.y,Le-.01,!0)?null:(i.x=a,i)}_glide(t,e,n){const i=Math.hypot(e,n);if(i<1e-4)return!1;const r=e/i,a=n/i,o=Math.atan2(r,a),c=(this.player.x-t.x)*r+(this.player.y-t.y)*a;this._slideSide&&Math.abs(Math.atan2(Math.sin(o-(this._slideHeading??o)),Math.cos(o-(this._slideHeading??o))))>.5&&(this._slideSide=0);const l=Math.sign(te(t.y,this.seed,this.legLength)-t.x)||1,h=this._slideSide||(Math.cos(o)*l>=0?1:-1);for(const u of wa.turns){const f=u*Math.PI/180,d=i*Math.cos(f);let g=null;for(const _ of[h,-h]){const m=o+_*f,p=Math.sin(m),E=Math.cos(m),x=this._courierMove(t,p*d,E*d);if(!x)continue;const y=x.x-t.x,b=x.y-t.y,T=y*p+b*E,C=y*r+b*a;T>=d*wa.free&&C>=Math.max(i*wa.gain,c+1e-6)&&(!g||C>g.gain+1e-9)&&(g={end:x,gain:C,side:_})}if(g)return this.player.x=g.end.x,this.player.y=g.end.y,this._slideSide=g.side,this._slideHeading=o,!0}return!1}_headOnSlide(t,e){const n=this.player,i=Math.hypot(t,e);if(i<1e-4)return;const r=t/i,a=e/i,o=(c,l)=>{const h=this._corridor(l);return c>=h.minX&&c<=h.maxX&&!this._blockedAt(c,l,Le-.02,!0)};for(const c of this._solidsNear(n.x,n.y,Le+.12,!0)){if(["edgewall","gatewall","gatepillar"].includes(c.type))continue;let l;if(c.collision?.kind==="box"){const m=n.x-c.x,p=n.y-c.y,E=c.collision.halfX+Le,x=c.collision.halfY+Le,y=Math.abs(m)-E,b=Math.abs(p)-x;if(y>.1||b>.1)continue;l=y>b?{x:Math.sign(m)||1,y:0}:{x:0,y:Math.sign(p)||1}}else{const m=n.x-c.x,p=n.y-c.y,E=Math.hypot(m,p)||1;if(E>c.radius+Le+.1)continue;l={x:m/E,y:p/E}}if(-(r*l.x+a*l.y)<ki.cos)continue;const h=te(n.y,this.seed,this.legLength)-n.x,u=[1,-1].map(m=>{const p={x:l.y*m,y:-l.x*m};for(let E=.5;E<=ki.scan;E+=.5){const x=n.x+p.x*E,y=n.y+p.y*E;if(!o(x,y))return null;if(o(x-l.x*ki.past,y-l.y*ki.past))return{tangent:p,along:E}}return null}).filter(Boolean);if(!u.length)continue;const f=m=>r*m.tangent.x+a*m.tangent.y;u.sort((m,p)=>m.along-p.along||f(p)-f(m)||p.tangent.x*h-m.tangent.x*h);const{tangent:d}=u[0],g=(r*d.x+a*d.y)*i,_=Math.max(0,i*ki.share-g);_>0&&this._moveBody(n,d.x*_,d.y*_,Le,!0);return}}_stopPlayerMotion(){this.player.movingSpeed=0,this.player.velocity={x:0,y:0}}_updatePacing(t){const e=(this.leg+1)*this.legLength,n=this.pace==="express"?50:60;if(!this._bossSpawned&&this.player.y>=e-n){this._takeGuardianSnapshot(e-n-5),this._bossSpawned=!0,this._ambushQueue=[],this.enemies=this.enemies.filter(_=>_.hp>0).sort((_,m)=>ve(_,this.player)-ve(m,this.player)).slice(0,5);const d=this._arenaSpot(e),g=this._spawnEnemy("boss",d.x,d.y);g.name=Bf[this.leg],g.variant=Ss[this.leg],g.maxHp=g.hp=Math.round(((this.pace==="express"?520:680)+this.leg*130)*this.difficulty.guardianHp),g.damage=this.difficulty.guardianDamage,g.attackClock=1.8,g.chargeClock=.65,this.boss=g,this._bossWave=0,this._bossReinforcementClock=this.pace==="express"?13:14,this._spawnPack(Math.max(2,(this.leg<2?3:4+Math.min(2,Math.floor(this.leg/2)))-Math.ceil(this._easing()/2)),!0,{mixed:!0,escort:!0,brutes:this.leg>=1}),this._event("boss",`${g.name} blocks the checkpoint. Keep moving when it winds up.`),this._effect("warning",g.x,g.y,2,{radius:7});return}if(this._bossSpawned){if(this._bossDefeated||!this.enemies.some(m=>m.type==="boss"&&m.hp>0)){this._minionCall=null;return}const d=this.enemies.find(m=>m.type==="boss"&&m.hp>0);if(this._minionCall){if(this._minionCall.life-=t,Object.assign(this._minionCall,{x:d.x,y:d.y}),this._minionCall.life>0)return;const m=this._minionCall;this._minionCall=null;const p=this._spawnPack(Math.min(m.count,this._minionRoom()),!0,{mixed:!0,escort:!0,call:!0});p>0&&this.leg<2&&this._addDrop({x:this.player.x+4,y:this.player.y+5,type:"heal",amount:bs(this.leg),life:60}),this._bossReinforcementClock=this.pace==="express"?13:14,this._bossLull=Oi.lull,p>0&&(this._bossWave++,this._event("ambush",`${d.name||"The guardian"}'s guards arrive. Keep a path open.`,{count:p,wave:this._bossWave,reinforcements:!0,lull:Oi.lull}));return}if(this._bossReinforcementClock=Math.max(0,this._bossReinforcementClock-t),this._bossReinforcementClock>0)return;if(d.hp<d.maxHp*.5){this._bossReinforcementClock=2;return}const g=Math.max(2,(this.leg<2?2:4)-Math.ceil(this._easing()/2)),_=Math.min(g,this._minionRoom(),this.maxEnemies-this._alive());if(this.enemies.filter(m=>m.hp>0&&m.type!=="boss").length>=7||_<Math.min(2,g)){this._bossReinforcementClock=3;return}if(d.telegraph||d.charge){this._bossReinforcementClock=.3;return}this._minionCall={life:Oi.warning,maxLife:Oi.warning,count:_,guardian:d.name,guardianId:d.id,x:d.x,y:d.y},this._effect("warning",d.x,d.y,Oi.warning,{radius:9,minionCall:!0,telegraphOf:d.id}),this._event("minionCall",`${d.name||"The guardian"} calls its minions · ${_} incoming`,{count:_,warning:Oi.warning,guardian:d.name,variant:d.variant});return}for(const d of this._ambushQueue)d.delay-=t;this._ambushQueue.length&&this._ambushQueue[0].delay<=0&&this._alive()<this.maxEnemies&&this._spawnPack(this._ambushQueue.shift().count,!0,{swarm:!0});const i=this._lingerClock>Ea.after;if(this._stuck&&(this._spawnClock=Math.max(this._spawnClock,1)),this._spawnClock-=t*(i?Ea.rate:1),this.enemies.filter(d=>d.hp>0&&(d.idle>3||d.detour)).length>=4&&this._spawnClock<=0&&(this._spawnClock=3),this._legElapsed<4.5||this._spawnClock>0||this._alive()>=this.maxEnemies)return;const r=this.pace==="express"?35:100,a=Math.floor(this._legElapsed/r),o=this._legElapsed%r/r;if(o>.65){this._spawnClock=this.pace==="express"?4:7,this._quietCycle!==a&&!this.enemies.some(d=>d.hp>0&&ve(d,this.player)<45)&&(this._quietCycle=a,this._event("quiet","A little breathing room. Search the roadside for supplies."));return}const l=this.player.y-this.leg*this.legLength<lr.distance,h=!l||this._legElapsed-this._encounterAt>=lr.gap&&!this._ambushQueue.length&&this._aliveTagged("roadblock")<2&&this._aliveTagged("swarm")<2,u=o>.35&&o<.6&&this._lastEncounter!==a&&!i&&h,f=this.difficulty;if(u){this._lastEncounter=a,this._encounterAt=this._legElapsed;const d=Math.max(3,6+Math.floor(this._random()*2)+f.ambush-(l?lr.trim:0)),g=Math.ceil(d/Cf),_=Array.from({length:g},(p,E)=>Math.floor(d/g)+(E<d%g?1:0)),m=this._spawnPack(_[0],!0,{swarm:!0});for(let p=1;p<g;p++)this._ambushQueue.push({delay:p*4.5,count:_[p]});this._event("ambush","Movement in the brush. A swarm is closing in!",{count:m,total:d,waves:g}),this._spawnClock=(this.pace==="express"?6:9)+(g-1)*4.5}else{const d=this._random(),g=3+Math.floor(this._random()*2)+f.pack;if(d<.12)this._spawnPack(g,!1,{flank:!0});else if(d<.34&&h){const _=this._spawnPack(Math.min(4+Math.floor(f.pack/2),l?lr.block:1/0,g),!1,{block:!0});_>0&&(this._encounterAt=this._legElapsed,this._event("roadblock","Infected are blocking the road ahead.",{count:_}))}else this._spawnPack(l&&d<.34?Math.max(2,g-1):g);this._spawnClock=((this.pace==="express"?3.5:5.3)+this._random()*2)*f.spawn}}_aliveTagged(t){return this.enemies.filter(e=>e.hp>0&&e[t]).length}_minionRoom(){return Math.max(0,this.difficulty.minionCap-this._aliveTagged("bossCall"))}get minionCall(){return this._minionCall?{...this._minionCall}:null}get spawnGrace(){return this._graceClock}_spawnAngle(){let t=this._random();const[e,n]=el.find(([,,r])=>(t-=r)<0)||el[0],i=e+(n-e)*this._random();return this._random()<.5?-i:i}_heading(){const t=te(this.player.y,this.seed,this.legLength);return Math.atan2(te(this.player.y+20,this.seed,this.legLength)-t,20)}_alongAcross(t,e,n=this._heading()){const i=t-this.player.x,r=e-this.player.y;return{along:i*Math.sin(n)+r*Math.cos(n),across:i*Math.cos(n)-r*Math.sin(n)}}_offScreenAhead(t,e){const{along:n,across:i}=this._alongAcross(t,e);return Math.abs(Math.atan2(i,n))<=il&&(n>=30||Math.abs(i)>=18)&&Math.hypot(n,i)>=30}_spawnPoint(t,e,n,i,r){for(let l=0;l<8;l++){const h=l?e+(this._random()-.5)*.7:e,u=l?n+(this._random()-.5)*6:n,f=t.x+Math.sin(h)*u,d=t.y+Math.cos(h)*u;if(this._reachable(f,d,i)&&r(f,d))return{x:f,y:d}}const a=t.y+Math.cos(e)*n,o=this._corridor(a),c=Ee(t.x+Math.sin(e)*n,o.minX+i+1,o.maxX-i-1);return this._reachablePoint(c,a,i,r,!0)}_spawnPack(t,e=!1,{mixed:n=!1,escort:i=!1,brutes:r=!1,flank:a=!1,block:o=!1,swarm:c=!1,call:l=!1}={}){const h=Math.max(0,this.maxEnemies-this._alive());let u=Math.max(0,Math.min(Math.floor(t),h,!i&&this.player.y-this.leg*this.legLength<40?2:1/0));const f=e?3:1,d=this._heading(),g=Array.from({length:f},()=>d+(a?(this._random()<.5?-1:1)*(.75+this._random()*.35):o?(this._random()-.5)*.3:this._spawnAngle())),_=!i&&this.player.y-this.leg*this.legLength<40,m=i?2:_?0:1;let p=0;const E=i&&this.boss,x=r?["walker","dog","walker","dog","brute"]:["walker","dog"];for(let y=0;y<u;y++){const b=this._random(),T=(e?.5:.28)+this.difficulty.dogs;let C=n?x[y%x.length]:b<T||a&&b<Math.max(.5,T)?"dog":b>.9-this.leg*.01&&!a?"brute":"walker";C==="brute"&&p>=m&&(C="walker"),C==="brute"&&p++;const P=(this._random()-.5)*.3,S=rn[C].radius;let M;if(E){const A=(I,N)=>{const{along:U,across:O}=this._alongAcross(I,N,d);return U>=4&&Math.abs(Math.atan2(O,U))<=il&&Math.hypot(U,O)>=14&&(U>=24||Math.abs(O)>=16)};M=this._spawnPoint(this.boss,this._random()*Ta,8+this._random()*6,S,A)}else{const A=g[y%f]+P,I=Ee(31/Math.max(.3,Math.cos(A-d)),a?36:34,46)+this._random()*5+(o?4:0);M=this._spawnPoint(this.player,A,I,S,(N,U)=>this._offScreenAhead(N,U))}const D=M&&this._spawnEnemy(C,M.x,M.y);if(!D){u--;continue}D.spawnGrace=.9,o&&(D.hold=!0,D.roadblock=!0,D.post={x:D.x,y:D.y}),c&&(D.swarm=!0),l&&(D.bossCall=!0),i&&(D.bossEscort=!0,D.alert=Ma),y%Math.max(1,Math.ceil(u/3))===0&&this._effect("warning",D.x,D.y,.9,{radius:e?4:2.5})}return u}_spawnEnemy(t,e,n){if(this._alive()>=this.maxEnemies)return null;const i=rn[t]||rn.walker;if(this._blockedAt(e,n,i.radius*$n)){const c=this._reachablePoint(e,n,i.radius*$n,null,!0);if(!c)return null;({x:e,y:n}=c)}const r=1+this.leg*.045,a=t==="boss"?i.damage:Math.round(i.damage*this.difficulty.damage),o={id:this._id(),x:e,y:n,type:t,hp:i.hp*r,maxHp:i.hp*r,radius:i.radius,speed:i.speed,damage:a,angle:0,attackClock:.75+this._random(),chargeClock:t==="boss"?3:Yn[t]?Yn[t].first+this._random()*2:0,telegraph:null,sprinting:!1};return t==="walker"&&this._random()<this.difficulty.runner&&(o.runner=!0,o.sprintLeft=Ni.stamina,o.sprintCooldown=0),o.rng=Math.floor(this._random()*4294967296)>>>0,t==="boss"&&(o.alert=Ma),this.enemies.push(o),o}_enemyRandom(t){t.rng=(t.rng??t.id*2654435761^this.seed)+1831565813>>>0;let e=t.rng;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}_laneLength(t,e,n){const i=t.radius*$n,r=t.x+Math.sin(e)*n,a=t.y+Math.cos(e)*n;let o=1;for(const c of this._solidsNear((t.x+r)/2,(t.y+a)/2,i+n/2+.1)){const l=Es(t.x,t.y,r,a,c,i-Fi);l!==null&&l<o&&(o=l)}return Math.max(0,o*n)}_wander(t,e,n=null){t.wanderClock=(t.wanderClock??0)-e,(t.wanderClock<=0||!Bt(t.wanderAngle))&&(t.wanderAngle=(Bt(t.wanderAngle)?t.wanderAngle:this._enemyRandom(t)*Ta)+(this._enemyRandom(t)-.5)*ci.turn,t.wanderClock=ci.hold+this._enemyRandom(t)*ci.spread);let i=Math.sin(t.wanderAngle),r=Math.cos(t.wanderAngle);const a=n??{x:te(t.y,this.seed,this.legLength),y:t.y},o=a.x-t.x,c=a.y-t.y,l=Math.hypot(o,c),h=n?Ee(l/6,0,1.5):Ee((l-4)/ci.road,0,1);l>.01&&(i+=o/l*h,r+=c/l*h);const u=Math.min(t.speed*ci.share,ci.max),f={x:t.x,y:t.y};this._walkEnemy(t,i,r,u,e),Math.hypot(t.x-f.x,t.y-f.y)<u*e*.35&&(t.wanderClock=0),t.angle=Math.atan2(i,r)}_noise(t,e,n){for(const i of this.enemies){const r=Math.hypot(i.x-t,i.y-e);i.hp<=0||i.type==="boss"||i.alert>0||i.deaf>0||r>n||(i.heard?Object.assign(i.heard,{x:t,y:e},Math.hypot(i.heard.x-t,i.heard.y-e)>3?{via:null,best:r}:{}):i.heard={x:t,y:e,life:Sa.life,stall:0,best:r,via:null},i.hold=!1)}}_cornerWaypoint(t,e){const n=t.radius*$n,i=e.x-t.x,r=e.y-t.y,a=Math.hypot(i,r);if(a<.5)return null;const o=Math.min(a,8),c=t.x+i/a*o,l=t.y+r/a*o;let h=null,u=1/0;for(const _ of this._solidsNear((t.x+c)/2,(t.y+l)/2,n+o/2+.3)){const m=Es(t.x,t.y,c,l,_,n+.05);m!==null&&m<u&&(u=m,h=_)}if(!h)return null;const f=n+.9,d=h.collision?.kind==="box"?[[1,1],[1,-1],[-1,1],[-1,-1]].map(([_,m])=>({x:h.x+_*(h.collision.halfX+f),y:h.y+m*(h.collision.halfY+f)})):[1,-1].map(_=>({x:h.x+r/a*_*(h.radius+f),y:h.y-i/a*_*(h.radius+f)}));let g=null;for(const _ of d){const m=this._corridor(_.y);if(_.x<m.minX+n||_.x>m.maxX-n||this._blockedAt(_.x,_.y,n)||Es(t.x,t.y,_.x,_.y,h,n*.9)!==null)continue;const p=Math.hypot(_.x-t.x,_.y-t.y)+Math.hypot(e.x-_.x,e.y-_.y);(!g||p<g.cost)&&(g={x:_.x,y:_.y,cost:p})}return g&&{x:g.x,y:g.y}}_followHeard(t,e){const n=t.heard;if(n.life-=e,Math.hypot(n.x-t.x,n.y-t.y)<2.5||n.life<=0){t.heard=null;return}n.via&&Math.hypot(n.via.x-t.x,n.via.y-t.y)<.4&&(n.via=null,n.best=Math.hypot(n.x-t.x,n.y-t.y));const i=n.via??n,r=i.x-t.x,a=i.y-t.y;this._walkEnemy(t,r,a,t.speed,e),t.angle=Math.atan2(r,a);const o=Math.hypot(i.x-t.x,i.y-t.y);if(o<(n.best??1/0)-.2?(n.best=o,n.stall=0):n.stall=(n.stall||0)+e,!n.via&&(n.stall>.25||t.snag>.2)){const c=this._cornerWaypoint(t,n);c&&(n.via=c,n.best=Math.hypot(c.x-t.x,c.y-t.y),t.detour=null)}n.stall>=Sa.stall&&(t.heard=null,t.deaf=Sa.deaf,t.wanderAngle=Math.atan2(-r,-a),t.wanderClock=ci.hold)}_updateEnemies(t){for(const e of this.enemies){if(e.hp<=0)continue;const n=e.spawnGrace>0;n&&(e.spawnGrace=Math.max(0,e.spawnGrace-t));const i=n||this._graceClock>0||e.type==="boss"&&(this._minionCall||this._bossLull>0);e.phaseShield&&(e.phaseShield=Math.max(0,e.phaseShield-t)),e.deaf&&(e.deaf=Math.max(0,e.deaf-t));const r=e.radius*$n;if(e.knock){const f=Math.min(t,e.knock.life);this._moveBody(e,e.knock.x*f,e.knock.y*f,r),e.knock.life-=t,e.knock.life<=0&&(e.knock=null)}e.attackClock-=t,e.contactClock=Math.max(0,(e.contactClock||0)-t),e.sprinting=!1;const a=this.player.x-e.x,o=this.player.y-e.y,c=Math.hypot(a,o)||.001;if(!i&&!e.contactClock&&c<(e.radius+Le)*cr.overlap&&this._hurt(this._contactDamage(e),e)&&(e.contactClock=cr.cooldown),this.mode!=="playing")return;e.sightClock=(e.sightClock??0)-t,e.sightClock<=0&&(e.sightClock=.25,e.sees=c<Ff&&this._lineClear(e,this.player)),e.type==="boss"||e.bossEscort||e.sees&&!e.hold?(e.alert=Ma,e.heard=null):e.alert=Math.max(0,(e.alert||0)-t);const l=e.alert>0;if(l&&(e.angle=Math.atan2(a,o)),!e.hold&&e.type!=="boss"&&!e.bossEscort&&(e.anchor??={x:e.x,y:e.y},Math.hypot(e.x-e.anchor.x,e.y-e.anchor.y)>6&&(e.anchor={x:e.x,y:e.y},e.idle=0),l&&c<(e.bestGap??1/0)-.5?(e.bestGap=c,e.idle=0,e.anchor={x:e.x,y:e.y}):e.idle=(e.idle||0)+t,l||delete e.bestGap,e.idle>8&&(c>24||!this._lineClear(e,this.player,.25,e.radius)))){e.hp=0;continue}if(e.hold&&(c<=13||e.hp<e.maxHp)&&(e.hold=!1),e.telegraph){const f=e.telegraph;if(f.life-=t,f.kind==="charge"&&f.maxLife-f.life>kf&&f.life>0){const d=Math.min(e.speed*Of,2)*t;this._moveBody(e,Math.sin(f.angle)*d,Math.cos(f.angle)*d,r),f.length=this._laneLength(e,f.angle,f.reach??f.length)}if(f.life<=0){if(f.kind==="charge")e.charge={life:Yn[e.type]?.life??Ui.life,angle:f.angle,left:f.length??(Yn[e.type]??Ui).life*(Yn[e.type]??Ui).speed};else{for(const d of We._telegraphAreas(f,e))this._effect("slam",d.x,d.y,.6,{radius:d.radius,...f.kind!=="slam"?{signature:f.kind}:{}});We.inTelegraph(f,e,this.player)&&this._hurt(e.damage,e)}e.telegraph=null,e.attackClock=e.type==="boss"?(e.hp<e.maxHp*.45?1.9:rn.boss.attackDelay)/this.difficulty.aggression:rn[e.type].attackDelay}continue}if(e.charge){const f=Bt(e.charge.left)?e.charge.left:1/0,d=Math.min(Math.min(e.charge.life,t)*(Yn[e.type]?.speed??Ui.speed),f),g=this._moveBody(e,Math.sin(e.charge.angle)*d,Math.cos(e.charge.angle)*d,r);e.charge.life-=t,Bt(e.charge.left)&&(e.charge.left=Math.max(0,e.charge.left-d)),ve(e,this.player)<e.radius+.7&&this._hurt(e.damage,e),(e.charge.life<=0||g.collided||e.charge.left<=1e-6)&&(e.charge=null,this._effect("slam",e.x,e.y,.5,{radius:Yn[e.type]?1.6:3}));continue}if(!l){const f=!!e.heard;e.heard&&this._followHeard(e,t),!e.heard&&!f&&this._wander(e,t,e.hold?e.post??null:null),this._separate(e);continue}const h=Yn[e.type];if(!i&&(e.type==="boss"||h)){e.chargeClock-=t;const f=h&&e.chargeClock<=0&&c<h.reach?this._lungeAim(e,h):null;if(e.chargeClock<=0&&(h?f?.ok:c>3&&c<25)){const d=e.type==="boss"?this._guardianMove(e):"charge",g=d==="slam",_=(h??Ui).life*(h??Ui).speed,m=h?f.angle:e.angle,p=d!=="charge"?_:this._laneLength(e,m,_);if(p<Math.min(_,h?f.reach:c)-.5-e.radius)e.chargeClock=.4;else{if(e.attackNumber=(e.attackNumber||0)+1,d==="signature"){this._signature(e);continue}if(g){e.telegraph={kind:"slam",life:1.3,maxLife:1.3,x:this.player.x,y:this.player.y+(this.progress<1?3:0),radius:5.2,angle:e.angle},e.chargeClock=(e.hp<e.maxHp*.45?2.4:3.8)/this.difficulty.aggression,this._effect("warning",e.telegraph.x,e.telegraph.y,1.3,{radius:5.2}),this._event("telegraph","Corruption is surfacing underfoot. Move out of the red circle!");continue}const E=h?h.windup:1.15;e.telegraph={kind:"charge",life:E,maxLife:E,angle:m,radius:h?.8:2.5,reach:_,length:p},e.chargeClock=h?h.cooldown+this._random()*h.spread:(e.hp<e.maxHp*.45?2.4:3.8)/this.difficulty.aggression,e.type==="boss"&&this._event("telegraph",`${e.name||"The Warden"} is charging. Sidestep the red line.`);continue}}}const u=e.type==="boss"?4.5:e.radius+.8;if(!h&&!i&&c<u&&e.attackClock<=0){const f=e.type==="boss"?.85:.8;e.telegraph={kind:"slam",life:f,maxLife:f,radius:u,angle:e.angle}}else if(c>e.radius+.5){const f=e.runner&&this._updateRunner(e,c,t)?Ni.speed:e.type==="boss"&&c>35?this.speed:e.speed;let d=a,g=o;if(h){const _=Math.min(1.4,c/(f+this.speed));d=this.player.x+this.player.velocity.x*_-e.x,g=this.player.y+this.player.velocity.y*_-e.y}this._walkEnemy(e,d,g,Math.min(f,(c-e.radius-.5)/t),t)}this._separate(e)}}_guardianMove(t){const e=t.attackNumber||0,n=this.difficulty.signatureEvery;return e%n===n-1?"signature":(e-Math.floor(e/n))%2===1?"slam":"charge"}_signature(t){const e=rl[t.variant]??rl[Ss[Gr(this.leg)]],n=e[(t.signatureCount||0)%e.length];t.signatureCount=(t.signatureCount||0)+1;const i=this.player,r=Math.atan2(i.x-t.x,i.y-t.y),a={kind:n.kind,life:n.windup,maxLife:n.windup,angle:r,x:t.x,y:t.y,radius:n.radius??n.width/2,signature:!0};if(n.kind==="line")Object.assign(a,{length:n.length,width:n.width});else if(n.kind==="sweep")a.arc=n.arc;else if(n.kind==="burst")a.inner=n.inner;else if(n.kind==="rockfall"){const o=Math.min(8,Math.hypot(i.velocity.x,i.velocity.y)*.9),c=o>.5?Math.atan2(i.velocity.x,i.velocity.y):r,l=(t.signatureCount%2?1:-1)*4.6;a.points=[{x:i.x,y:i.y},{x:i.x+Math.sin(c)*Math.max(o,4.5),y:i.y+Math.cos(c)*Math.max(o,4.5)},{x:i.x+Math.cos(r)*l,y:i.y-Math.sin(r)*l}],a.x=a.points[0].x,a.y=a.points[0].y}t.telegraph=a,t.chargeClock=(t.hp<t.maxHp*.45?2.4:3.8)/this.difficulty.aggression;for(const o of We._telegraphAreas(a,t))this._effect("warning",o.x,o.y,n.windup,{radius:o.radius,signature:n.kind,telegraphOf:t.id});this._event("telegraph",`${t.name||"The guardian"} ${n.text}`,{signature:n.kind,variant:t.variant})}static _telegraphAreas(t,e){const n=t.x??e.x,i=t.y??e.y;return t.kind==="line"?[.15,.4,.65,.9].map(r=>({x:n+Math.sin(t.angle)*t.length*r,y:i+Math.cos(t.angle)*t.length*r,radius:t.width/2+.4})):t.kind==="sweep"?[-.6,0,.6].map(r=>({x:n+Math.sin(t.angle+t.arc*r)*t.radius*.62,y:i+Math.cos(t.angle+t.arc*r)*t.radius*.62,radius:t.radius*.36})):t.kind==="rockfall"?t.points.map(r=>({x:r.x,y:r.y,radius:t.radius})):[{x:n,y:i,radius:t.radius}]}static inTelegraph(t,e,n){const i=t.x??e.x,r=t.y??e.y,a=Le,o=n.x-i,c=n.y-r,l=Math.hypot(o,c);switch(t.kind){case"line":{const h=o*Math.sin(t.angle)+c*Math.cos(t.angle),u=o*Math.cos(t.angle)-c*Math.sin(t.angle);return h>=-a&&h<=t.length+a&&Math.abs(u)<t.width/2+a}case"sweep":{if(l>t.radius+a)return!1;if(l<(e.radius||0)+a)return!0;const h=Math.atan2(Math.sin(Math.atan2(o,c)-t.angle),Math.cos(Math.atan2(o,c)-t.angle));return Math.abs(h)<=t.arc+Math.asin(Math.min(1,a/l))}case"burst":return l<t.radius+a&&l>(t.inner||0)-a;case"rockfall":return t.points.some(h=>Math.hypot(n.x-h.x,n.y-h.y)<t.radius+a);default:return l<t.radius+.45}}_contactDamage(t){return t.type==="boss"?Math.round(t.damage*cr.share):Math.round((rn[t.type]??rn.walker).damage*cr.share*this.difficulty.contact)}_separate(t){for(const e of this.enemies){if(e.id<=t.id||e.hp<=0)continue;const n=t.x-e.x,i=t.y-e.y,r=Math.hypot(n,i)||.001,a=(t.radius+e.radius)*.9;if(r<a){const o=Math.min(.08,(a-r)/2);this._moveBody(t,n/r*o,i/r*o,t.radius*$n),this._moveBody(e,-n/r*o,-i/r*o,e.radius*$n)}}}_chooseWeapon(t,e=this.enemies){let n=null,i=-1/0;for(const r of this.weapons){const a=Ne[r];if(!a||ve(t,this.player)>ts(a,this.buffs)+t.radius)continue;const o=this._weaponScore(r,t,e);o>i&&(n=r,i=o)}return n}_weaponScore(t,e,n=this.enemies){const i=Ne[t],r=ve(e,this.player),a=n.filter(h=>h.hp>0&&ve(h,e)<6).length,o=e.maxHp*(tl[e.type]??.5);let c=1;t==="scattergun"?c=Ee((e.radius*1.7+1.2)/Math.max(1,r*i.spread),.6,i.pellets):t==="rifle"?c=2.35:t==="arc"&&(c=e.radius>=1?1.45:.85);let l=Math.min(i.damage*c,o)/i.cooldown;return t==="scattergun"&&(l*=a>2?1+.3*Math.min(a-1,4):1,r>10&&(l*=.6)),e.hp<i.damage&&t!=="sidearm"&&(l*=.7),r<4&&t==="sidearm"&&(l*=.75),l}_holdWeapon(t,e,n){const i=this.player.weapon;if(i===e||!this.weapons.includes(i))return{target:t,weaponId:e};const r=this.elapsed-(this.player.weaponSince??-1/0),a=o=>ve(o,this.player)<=ts(i,this.buffs)+(o.radius||.8);if(a(t)){if(r<hl.hold||!n.includes(t))return{target:t,weaponId:i};const o=this._weaponScore(e,t,n)>=this._weaponScore(i,t,n)*hl.margin;return{target:t,weaponId:o?e:i}}return r<Hf?{target:n.find(c=>c!==t&&a(c))??null,weaponId:i}:{target:t,weaponId:e}}_autoFire(){if(this._fireClock>0)return;const t=Math.max(...this.weapons.map(u=>ts(u,this.buffs))),e=this.enemies.filter(u=>u.hp>0&&ve(u,this.player)<t+u.radius&&this._lineClear(this.player,u,.25,u.radius*.8));e.sort((u,f)=>{const d=g=>{const _=ve(g,this.player);let m=_/(g.type==="dog"?1.25:1)-(g.telegraph?5:0);return g.type==="boss"?m-=25:(_<4.5||g.telegraph&&_<9)&&(m-=40),m};return d(u)-d(f)});let n=e[0],i;if(n?i=this._chooseWeapon(n,e):(n=this.crates.filter(u=>u.hp>0&&ve(u,this.player)<12&&this._lineClear(this.player,u,.25,(u.radius||.8)*.8)).sort((u,f)=>ve(u,this.player)-ve(f,this.player))[0],i="sidearm"),!n||!i||({target:n,weaponId:i}=this._holdWeapon(n,i,e),!n))return;i!==this.player.weapon&&(this.player.weaponSince=this.elapsed);const r=Ne[i],a=ts(r,this.buffs),o=Math.atan2(n.x-this.player.x,n.y-this.player.y);this.player.weapon=i,this.player.aimAngle=o;const l=(this.enemies.filter(u=>u.hp>0&&ve(u,this.player)<sl.radius).length>=sl.count?Math.min(r.cooldown,Ne.sidearm.cooldown):r.cooldown)*(this.buffs.rapid>0?.58:1)*(this.player.panic>0?Nn.rate:1);this._fireClock=Math.max(this._fireClock,-1/30)+l;const h=this._id();for(let u=0;u<r.pellets;u++){const f=r.pellets>1?(u/(r.pellets-1)-.5)*r.spread:0;this.projectiles.push({id:this._id(),x:this.player.x+Math.sin(o)*.65,y:this.player.y+Math.cos(o)*.65,angle:o+f,weapon:i,rangeRemaining:a-.65,life:(a-.65)/r.projectileSpeed,damage:r.damage*(this.buffs.power>0?1.55:1),radius:r.radius,shotId:h})}this.player.lastShotAt=this.elapsed,this._noise(this.player.x,this.player.y,Uf[i]*(this.buffs.power>0?Nf:1)),this._effect("muzzle",this.player.x+Math.sin(o)*.7,this.player.y+Math.cos(o)*.7,.1,{color:r.color}),this._event("shot","",{weapon:i})}_updatePanic(){const t=this.player;t.panic>0||t.panicCooldown>0||this.enemies.filter(e=>e.hp>0&&ve(e,t)<Nn.radius).length<Nn.count||(t.panic=Nn.time,t.panicCooldown=Nn.time+Nn.cooldown,this._event("panic","Panic fire · surrounded, shooting faster"))}_openCrate(t){t.hp=0,this._destroyedCrates.add(t.id),this._crateHealth.delete(t.id);const e=this._cratesOpened<Lf;this._cratesOpened++,t.medkit?this._addDrop({x:t.x,y:t.y,type:"heal",amount:bs(this.leg)+8,life:150}):e||this._emptyCrates>=cl||this._random()<Df*this.difficulty.reward?(this._emptyCrates=0,this._dropLoot(t.x,t.y)):this._emptyCrates++,this._effect("crate",t.x,t.y,.7)}_openTouchedCrates(){for(const t of this.crates)t.hp>0&&ve(t,this.player)<(t.radius||.8)+Le&&this._openCrate(t);this.crates=this.crates.filter(t=>t.hp>0)}_updateProjectiles(t){for(const e of this.projectiles){const n=Ne[e.weapon],i=e.x,r=e.y,a=Math.min(t,Math.max(0,e.life),(e.rangeRemaining??e.life*n.projectileSpeed)/n.projectileSpeed);if(a<=0){e.life=0;continue}const o=n.projectileSpeed*a,c=i+Math.sin(e.angle)*o,l=r+Math.cos(e.angle)*o;let h=null;const u=(g,_,m)=>{m!==null&&(!h||m<h.t)&&(h={kind:g,entity:_,t:m})};for(const g of this._props){if(!gl(g))continue;const _=(g.collision?.halfX??g.radius)+e.radius,m=(g.collision?.halfY??g.radius)+e.radius;g.x+_<Math.min(i,c)||g.x-_>Math.max(i,c)||g.y+m<Math.min(r,l)||g.y-m>Math.max(r,l)||u("solid",g,Es(i,r,c,l,g,e.radius))}for(const g of this.crates)g.hp>0&&u("crate",g,xo(i,r,c,l,g.x,g.y,(g.radius||.8)+e.radius));for(const g of this.enemies)g.hp>0&&u("enemy",g,xo(i,r,c,l,g.x,g.y,g.radius+e.radius));const f=h?.t??1;if(e.x=i+(c-i)*f,e.y=r+(l-r)*f,e.rangeRemaining=Math.max(0,(e.rangeRemaining??e.life*n.projectileSpeed)-o*f),e.life=Math.max(0,e.life-t),!h)continue;e.life=0;const d=h.entity;n.splash&&this._effect("arc",e.x,e.y,.55,{radius:n.splash,color:n.color}),h.kind==="enemy"?this._damageEnemy(d,e.damage,e.shotId??e.id):h.kind==="crate"?(d.hp-=e.damage,d.hp>0&&this._crateHealth.set(d.id,d.hp),this._effect("hit",d.x,d.y,.2,{color:"#efc983"}),d.hp<=0&&this._openCrate(d)):this._effect("hit",e.x,e.y,.2,{color:"#afbeb0",radius:.4})}this.projectiles=this.projectiles.filter(e=>e.life>0),this.crates=this.crates.filter(e=>e.hp>0)}_damageEnemy(t,e,n=null){if(!(t.hp<=0)){if(t.phaseShield>0){this._effect("hit",t.x,t.y,.16,{radius:t.radius,color:"#c5b3ff"});return}if(n!==null){const i=t.shotLog||=[];let r=i.find(a=>a[0]===n);if(r||(r=[n,0],i.push(r),i.length>6&&i.shift()),e=Math.min(e,Math.max(0,t.maxHp*(tl[t.type]??.5)-r[1])),r[1]+=e,e<=0){this._effect("hit",t.x,t.y,.16,{radius:t.radius});return}}t.hp-=e,t.hp<1e-6&&(t.hp=0),this._effect("hit",t.x,t.y,.22,{damage:Math.round(e),radius:t.radius}),t.type==="boss"&&t.hp>0&&t.hp<=t.maxHp*.5&&!t.phaseTriggered&&(t.phaseTriggered=!0,t.phaseShield=1.4,t.charge=null,t.telegraph={kind:"slam",life:1.4,maxLife:1.4,x:this.player.x,y:this.player.y+(this.progress<1?3:0),radius:6.2,angle:t.angle},this._effect("warning",t.telegraph.x,t.telegraph.y,1.4,{radius:6.2}),this._event("telegraph","The Warden is drawing on the corruption. Get clear of the red circle.")),!(t.hp>0)&&(this.kills++,this.combo++,this._comboClock=4.5,this._effect("death",t.x,t.y,.75,{radius:t.radius}),t.type==="boss"?(this._bossDefeated=!0,this._bossReinforcementClock=0,this.boss=null,this._dropLoot(t.x,t.y,!0),this._addDrop({x:t.x+1.5,y:t.y,type:"heal",amount:Math.round(bs(this.leg)*1.25),life:120}),this._event("bossDefeated","The path is clear. Reach the checkpoint beacon.")):this._random()<(Pf[t.type]??.07)*this.difficulty.reward*(this.player.hp<35?2.2:this.player.hp<50?1.5:1)&&this._dropLoot(t.x,t.y))}}_addDrop(t){const e=this._reachablePoint(t.x,t.y,.9);this.drops.push({id:this._id(),...t,x:e.x,y:e.y})}_dropLoot(t,e,n=!1){const i=Object.keys(Ne).filter(h=>!this.weapons.includes(h)),r=this._random(),a=this.player.hp<35?Math.max(.6,ba(this.leg)):this.player.hp<50?Math.max(.45,ba(this.leg)):ba(this.leg),o=Math.min(.999,r/(1-a)),c=r>=1-a?"heal":o<.14?"shield":o<.42?"rapid":o<.72?"power":"speed",l=n===!0?.6:typeof n=="number"?n:.13;i.length&&r<l?this._addDrop({x:t,y:e,type:"weapon",weapon:i[Math.floor(this._random()*i.length)],life:120}):this._addDrop({x:t,y:e,type:c,...c==="heal"?{amount:bs(this.leg)}:{},life:90})}_gainBuff(t){const e=Object.keys(this.buffs).filter(n=>n!==t&&this.buffs[n]>0).sort((n,i)=>this.buffs[n]-this.buffs[i]);!(this.buffs[t]>0)&&e.length>=2&&(this.buffs[e[0]]=0),this.buffs[t]=Math.max(this.buffs[t],va[t])}_collectDrops(t){for(const e of this.drops){const n=ve(e,this.player);n>14&&(e.life-=t);const i=!(e.type==="heal"&&this.player.hp>this.player.maxHp-4)&&!(e.type==="shield"&&this.player.shield>=or-2);if(e.collectable=i,n<6.5&&i){const r=Math.min(n,t*(4+(6.5-n)*2));e.x+=(this.player.x-e.x)/(n||1)*r,e.y+=(this.player.y-e.y)/(n||1)*r}if(!(ve(e,this.player)>1.5)){if(!i){this._noticeClock<=0&&(this._noticeClock=ll,this._event("supplySaved",e.type==="heal"?"Full health — medkit saved":"Shield full — cell saved",{drop:e.type}));continue}if(e.life=0,e.type==="weapon")this.weapons.includes(e.weapon)?this._gainBuff("power"):this.weapons.push(e.weapon),this._event("pickup",`${Ne[e.weapon].name} acquired. Auto-switching enabled.`,{drop:e.type});else if(e.type==="heal"){const r=e.amount??bs(this.leg),a=Math.min(r,this.player.maxHp-this.player.hp);this.player.hp+=a,this._event("pickup",`Medkit · +${Math.round(a)} health`,{drop:e.type})}else if(e.type==="shield")this.player.shield=Math.min(or,this.player.shield+14),this._event("pickup","Shield cell · +14 protection",{drop:e.type});else{this._gainBuff(e.type);const r={rapid:"Overdrive · faster fire",power:"Charged rounds · increased damage",speed:"Fleetfoot · move faster"}[e.type];this._event("pickup",r,{drop:e.type})}this._effect("pickup",this.player.x,this.player.y,.75,{drop:e.type})}}this.drops=this.drops.filter(e=>e.life>0&&ve(e,this.player)<130)}_hurt(t,e){if(this._hurtClock>0||this.mode!=="playing"||this._graceClock>0&&e)return!1;const n=Math.min(this.player.shield,t);this.player.shield-=n;const i=t-n;if(this.player.hp=Math.max(0,this.player.hp-i),this.cargo=Math.max(0,this.cargo-Math.ceil(i*.2)),this._hurtClock=.75,this.player.hurtFlash=If,this._effect("hurt",this.player.x,this.player.y,.55),this._event("hurt",i>0?"Hit! Keep moving to evade the next attack.":"Shield absorbed the hit."),e&&e.type!=="boss"){const r=ve(e,this.player)||1;e.knock={x:(e.x-this.player.x)/r*3.2,y:(e.y-this.player.y)/r*3.2,life:.25}}return this.player.hp<=0&&(this.mode="dead",this._stopPlayerMotion(),this._event("dead","The route took its toll. Your last checkpoint is safe.")),!0}_reachCheckpoint(){this.checkpointCount=this.leg+1;for(const a of this.drops)a.type==="weapon"&&!this.weapons.includes(a.weapon)&&ve(a,this.player)<40&&(this.weapons.push(a.weapon),this._event("pickup",`${Ne[a.weapon].name} acquired. Auto-switching enabled.`,{drop:"weapon"}));this.drops=[];const t=Math.round(this.player.hp),e=Math.round(this.cargo);this.player.hp=Math.min(this.player.maxHp,t+Qh),this.player.shield=Math.min(or,Math.max(15,this.player.shield)),this.buffs={rapid:0,power:0,speed:0},this._guardianSnapshot=null,this._waypointSnapshot=null,this._guardianFails=0,this.cargo=Math.max(85,this.cargo);const n={hpBefore:t,hpAfter:this.player.hp,healed:this.player.hp-t,rule:ul,parcelBefore:e,parcelAfter:Math.round(this.cargo)};this.refugeReport=n,this.enemies=[],this.projectiles=[],this.effects=[],this.boss=null,this.mode=this.leg===this.totalLegs-1?"complete":"checkpoint",this._stopPlayerMotion(),this._updateObjective(),this._checkpointSnapshot=this._snapshot();const i=n.hpAfter>n.hpBefore?`Health ${n.hpBefore} → ${n.hpAfter} (${ul.toLowerCase()})`:`Health ${n.hpAfter} (full)`,r=n.parcelAfter>n.parcelBefore?`parcel patched to 85% (was ${n.parcelBefore}%)`:`parcel intact at ${n.parcelAfter}%`;this._event(this.mode==="complete"?"complete":"checkpoint",this.mode==="complete"?"Delivery received. You brought something worth saving.":`Checkpoint secured · ${i} · ${r}. Your route can be saved here.`,n)}continueJourney(){return this.mode!=="checkpoint"?!1:(this.leg++,this.mode="playing",this._stopPlayerMotion(),this.progress=0,this._legElapsed=0,this._spawnClock=4.5,this._ambushQueue=[],this._waypointSnapshot=null,this._waypointK=0,this._bossSpawned=!1,this._bossDefeated=!1,this._bossReinforcementClock=0,this._bossWave=0,this._quietCycle=-1,this._lastEncounter=-1,this._fireClock=0,this._hurtClock=1.5,this.player.blocked=!1,this._blockedClock=0,this._blockedNotified=!1,this._freshStart(),this._updateObjective(),this._event("continue",`Leg ${this.leg+1} of ${this.totalLegs}. Follow the route toward the next beacon.`),!0)}retryCheckpoint(){if(!this._checkpointSnapshot)return!1;const t=Re(this._checkpointSnapshot),e=this.kills;return this._restore(t),this.kills=Math.max(this.kills,e),this.player.hp=this.player.maxHp,this.events=[],this._refreshWorld(!0),this.mode==="checkpoint"&&this.continueJourney(),this._hurtClock=2,this._freshStart(),this._event("retry","Back on the route. Your checkpoint supplies are restored."),!0}retryGuardian(){if(!this._guardianSnapshot)return!1;const t=this.kills,e=[...this.weapons];this._restore(Re(this._guardianSnapshot)),this.kills=Math.max(this.kills,t);for(const n of e)this.weapons.includes(n)||this.weapons.push(n);return this.player.hp=this.player.maxHp,this._guardianFails++,this.events=[],this._refreshWorld(!0),this._hurtClock=2,this._freshStart(),this._event("retry","Back at the guardian's gate. Your progress on this leg is kept."),!0}_freshStart(){this._graceClock=fl,this._frontier=this.player.y,this._lingerClock=0,this._encounterAt=-1/0,this._minionCall=null,this._bossLull=0}qaStartLeg(t){return t=Gr(t),!t||this.mode!=="playing"?!1:(this.leg=t-1,this.checkpointCount=t,this.player.y=t*this.legLength,this.player.x=te(this.player.y,this.seed,this.legLength),Object.assign(this.player,{hp:this.player.maxHp,shield:15,velocity:{x:0,y:0},movingSpeed:0,weapon:"sidearm"}),this.weapons=[...dl,...t>=1?["rifle"]:[],...t>=3?["arc"]:[]],this.cargo=85,this.enemies=[],this.projectiles=[],this.drops=[],this.effects=[],this._ambushQueue=[],this._bossSpawned=!0,this._bossDefeated=!0,this.boss=null,this.mode="checkpoint",this.refugeReport=null,this._refreshWorld(!0),this._checkpointSnapshot=this._snapshot(),this.events=[],this.continueJourney())}_progressSave(t){return t?{...Re(t),checkpoint:Re(this._checkpointSnapshot),...this._guardianSnapshot?{guardianCheckpoint:Re(this._guardianSnapshot)}:{},...this._waypointSnapshot?{waypointCheckpoint:Re(this._waypointSnapshot)}:{}}:null}guardianSave(){return this._progressSave(this._guardianSnapshot)}waypointSave(){return this._progressSave(this._waypointSnapshot)}_updateObjective(){this.mode==="complete"?this.objective="Delivery complete · the outpost is waiting":this.mode==="checkpoint"?this.objective=`Checkpoint ${this.checkpointCount} secured · take a breath`:this.mode==="dead"?this.objective="Return to your last checkpoint":this.boss?this.objective=`Clear ${this.boss.name} · dodge the red warnings`:this._bossDefeated?this.objective=`Path clear · ${this.checkpointDistance} m to the checkpoint beacon`:this.objective=`Follow the beacon · ${this.checkpointDistance} m to checkpoint`}get guideTarget(){const t=this.player,e=[this.seed,this.legLength],n={x:te(this.checkpointY,...e),y:this.checkpointY},i=mn(t.y,...e);if(Math.hypot(n.x-t.x,n.y-t.y)<hr.near||i&&i.checkpointY===this.checkpointY||t.y>=this.checkpointY)return{...n,beacon:!0,branch:!1};const r=Is(t.y,...e,0,t.x,this.checkpointY),a=Is(t.y,...e,Math.abs(t.x-r.x)>hr.offRoad?hr.back:hr.ahead,t.x,this.checkpointY);return{x:a.x,y:a.y,beacon:!1,branch:a.branch}}get guideArrow(){const t=this.guideTarget,e=t.x-this.player.x,n=t.y-this.player.y,i=e*al.x+n*al.y,r=e*ol.x+n*ol.y;return Math.abs(i)>Math.abs(r)?i>0?"→":"←":r>0?"↑":"↓"}get beaconArrow(){return this.guideArrow}get checkpointDistance(){return Math.round(Math.hypot(this.player.x-te(this.checkpointY,this.seed,this.legLength),this.player.y-this.checkpointY))}get distanceRemaining(){return this.mode==="complete"?0:this.checkpointDistance+(this.totalLegs-this.leg-1)*this.legLength}get nextCheckpointTime(){return Math.ceil(this.checkpointDistance/this.speed)}get deliveryProgress(){return Ee(this.player.y/(this.totalLegs*this.legLength),0,1)}get checkpointY(){return(this.leg+1)*this.legLength}_snapshot(){return Re({version:pl,routeVersion:Fs,combatVersion:1,worldVersion:1,legLength:this.legLength,seed:this.seed,pace:this.pace,mode:this.mode,player:this.player,elapsed:this.elapsed,leg:this.leg,progress:this.progress,kills:this.kills,combo:this.combo,weapons:this.weapons,buffs:this.buffs,cargo:this.cargo,checkpointCount:this.checkpointCount,enemies:this.enemies,drops:this.drops,crates:this.crates,projectiles:this.projectiles,rngState:this._rngState,nextId:this._nextId,legElapsed:this._legElapsed,spawnClock:this._spawnClock,fireClock:this._fireClock,comboClock:this._comboClock,bossSpawned:this._bossSpawned,bossDefeated:this._bossDefeated,bossReinforcementClock:this._bossReinforcementClock,bossWave:this._bossWave,quietCycle:this._quietCycle,destroyedCrates:[...this._destroyedCrates],knownCrates:[...this._knownCrates],crateHealth:[...this._crateHealth],cratesOpened:this._cratesOpened,emptyCrates:this._emptyCrates,refugeReport:this.refugeReport,lastEncounter:this._lastEncounter,ambushQueue:this._ambushQueue})}serialize(){return{...this._snapshot(),checkpoint:Re(this._checkpointSnapshot),...this._guardianSnapshot?{guardianCheckpoint:Re(this._guardianSnapshot)}:{},...this._waypointSnapshot?{waypointCheckpoint:Re(this._waypointSnapshot)}:{}}}_restore(t){for(const e of["mode","player","elapsed","leg","progress","kills","combo","weapons","buffs","cargo","checkpointCount","enemies","drops","crates","projectiles"])this[e]=Re(t[e]);this._rngState=t.rngState,this._nextId=t.nextId,this._legElapsed=t.legElapsed,this._spawnClock=t.spawnClock,this._fireClock=t.fireClock,this._comboClock=t.comboClock,this._bossSpawned=t.bossSpawned,this._bossDefeated=t.bossDefeated,this._bossReinforcementClock=t.bossReinforcementClock??(t.bossSpawned&&!t.bossDefeated?this.pace==="express"?10:14:0),this._bossWave=t.bossWave??0,this._quietCycle=t.quietCycle??-1;for(const e of this.enemies)e.speed=rn[e.type].speed;for(const e of this.projectiles)e.rangeRemaining??=Math.max(0,Math.min(ts(e.weapon,this.buffs),e.life*Ne[e.weapon].projectileSpeed)),e.life=Math.min(e.life,e.rangeRemaining/Ne[e.weapon].projectileSpeed);this._lastEncounter=t.lastEncounter,this._ambushQueue=Re(t.ambushQueue||[]),this._waypointK=Math.max(0,Math.floor((this.player.y-this.leg*this.legLength)/nl)),this._destroyedCrates=new Set(t.destroyedCrates),this._knownCrates=new Set(t.knownCrates),this._crateHealth=new Map(t.crateHealth||[]),this._cratesOpened=t.cratesOpened??this._destroyedCrates.size,this._emptyCrates=t.emptyCrates??0,this.refugeReport=t.refugeReport?Re(t.refugeReport):null,this._noticeClock=0;for(const e of this.enemies)e.type==="boss"&&!Ss.includes(e.variant)&&(e.variant=Ss[Gr(this.leg)]);for(const e of this.crates)e.hp>0&&e.hp<30&&this._crateHealth.set(e.id,e.hp);this.player.shield=Math.min(this.player.shield,or),this.mode==="checkpoint"&&(this.buffs={rapid:0,power:0,speed:0});for(const e of Object.keys(va))this.buffs[e]=Math.min(this.buffs[e],va[e]);this._beaconMissed=!1,this.player.blocked=!!this.player.blocked,Bt(this.player.aimAngle)||(this.player.aimAngle=this.player.angle),this.player.lastShotAt??=null,this.player.hurtFlash=0,this.player.panic=Bt(this.player.panic)?Ee(this.player.panic,0,Nn.time):0,this.player.panicCooldown=Bt(this.player.panicCooldown)?Ee(this.player.panicCooldown,0,Nn.time+Nn.cooldown):0,this._stopPlayerMotion(),this._blockedClock=0,this._blockedNotified=!1,this.effects=[],this.boss=this.enemies.find(e=>e.type==="boss"&&e.hp>0)||null,this._updateObjective()}static validateSave(t){const e=i=>{if(!i||typeof i!="object"||i.version!==pl||!Bt(i.seed)||!["journey","express"].includes(i.pace)||i.routeVersion!==void 0&&![1,Fs].includes(i.routeVersion)||i.combatVersion!==void 0&&i.combatVersion!==1||i.worldVersion!==void 0&&i.worldVersion!==1)return!1;const r=tu(i);if(![Hr(i.pace),ks(i.pace)].includes(r)||i.routeVersion===Fs&&r!==ks(i.pace)||i.routeVersion===1&&r!==Hr(i.pace)||!["playing","checkpoint","dead","complete"].includes(i.mode)||!Number.isInteger(i.leg)||i.leg<0||i.leg>5)return!1;const a=i.player;if(!a||!["x","y","hp","maxHp","shield","angle"].every(l=>Bt(a[l]))||!Ne[a.weapon]||a.blocked!==void 0&&typeof a.blocked!="boolean"||a.aimAngle!==void 0&&!Bt(a.aimAngle)||a.movingSpeed!==void 0&&(!Bt(a.movingSpeed)||a.movingSpeed<0)||a.velocity!==void 0&&(!a.velocity||!Bt(a.velocity.x)||!Bt(a.velocity.y))||a.lastShotAt!==void 0&&a.lastShotAt!==null&&(!Bt(a.lastShotAt)||a.lastShotAt<0||a.lastShotAt>i.elapsed))return!1;const o=r/Hr(i.pace);if(a.hp<0||a.hp>a.maxHp||a.maxHp!==100||a.shield<0||a.shield>70||Math.abs(a.x)>1e3||a.y<0||a.y>6*r+12*o)return!1;if(i.worldVersion===1){const l=Us(i.seed,r);if(a.x<l.minX||a.x>l.maxX||a.y<l.minY||a.y>l.maxY)return!1}else if(a.y<Math.max(0,i.leg*r-22*o)||a.y>(i.leg+1)*r+12*o)return!1;return!(!Array.isArray(i.weapons)||i.weapons.length<1||i.weapons.length>4||!i.weapons.every(l=>Ne[l])||!i.weapons.includes("sidearm")||!i.buffs||!["rapid","power","speed"].every(l=>Bt(i.buffs[l])&&i.buffs[l]>=0&&i.buffs[l]<=40)||!["elapsed","progress","kills","combo","cargo","checkpointCount","rngState","nextId","legElapsed","spawnClock","fireClock","comboClock","lastEncounter"].every(l=>Bt(i[l]))||i.cargo<0||i.cargo>100||i.progress<0||i.progress>1||i.elapsed<0||i.elapsed>1e7||i.checkpointCount<0||i.checkpointCount>6||!Number.isInteger(i.rngState)||i.rngState<0||i.rngState>4294967295||!Number.isInteger(i.nextId)||i.nextId<1||i.nextId>1e9||i.mode==="checkpoint"&&(i.leg===5||i.checkpointCount!==i.leg+1||!i.bossDefeated)||i.mode==="complete"&&(i.leg!==5||i.checkpointCount!==6||!i.bossDefeated)||typeof i.bossSpawned!="boolean"||typeof i.bossDefeated!="boolean"||i.bossReinforcementClock!==void 0&&(!Bt(i.bossReinforcementClock)||i.bossReinforcementClock<0||i.bossReinforcementClock>14)||i.bossWave!==void 0&&(!Number.isInteger(i.bossWave)||i.bossWave<0||i.bossWave>1e6)||i.quietCycle!==void 0&&(!Number.isInteger(i.quietCycle)||i.quietCycle<-1)||!["enemies","drops","crates","projectiles"].every(l=>Array.isArray(i[l])&&i[l].length<500&&i[l].every(h=>h&&["x","y"].every(u=>Bt(h[u]))))||!i.enemies.every(l=>rn[l.type]&&["hp","maxHp","radius","speed","damage","angle","attackClock","chargeClock"].every(h=>Bt(l[h]))&&l.maxHp>0&&l.maxHp<=5e3&&l.radius>0&&l.radius<=5&&l.speed>=0&&l.speed<=15&&l.damage>=0&&l.damage<=100&&(l.phaseShield===void 0||Bt(l.phaseShield)&&l.phaseShield>=0&&l.phaseShield<=2)&&(!l.telegraph||["life","maxLife","radius","angle"].every(h=>Bt(l.telegraph[h]))&&(l.telegraph.x===void 0||Bt(l.telegraph.x))&&(l.telegraph.y===void 0||Bt(l.telegraph.y)))&&(!l.charge||Bt(l.charge.life)&&Bt(l.charge.angle)))||!i.projectiles.every(l=>Ne[l.weapon]&&["angle","life","damage","radius"].every(h=>Bt(l[h])))||!i.projectiles.every(l=>l.rangeRemaining===void 0||Bt(l.rangeRemaining)&&l.rangeRemaining>=0&&l.rangeRemaining<=30)||!i.enemies.every(l=>l.spawnGrace===void 0||Bt(l.spawnGrace)&&l.spawnGrace>=0&&l.spawnGrace<=1.5)||!i.enemies.every(l=>l.bossEscort===void 0||typeof l.bossEscort=="boolean")||!i.drops.every(l=>["heal","shield","rapid","power","speed","weapon"].includes(l.type)&&Bt(l.life)&&(l.amount===void 0||Bt(l.amount)&&l.amount>=0&&l.amount<=100)&&(l.type!=="weapon"||Ne[l.weapon]))||!i.crates.every(l=>Bt(l.hp)&&Bt(l.radius))||!["destroyedCrates","knownCrates"].every(l=>Array.isArray(i[l])&&i[l].length<1e4&&i[l].every(h=>typeof h=="string"||Bt(h)))||i.cratesOpened!==void 0&&(!Number.isInteger(i.cratesOpened)||i.cratesOpened<0||i.cratesOpened>1e6)||i.emptyCrates!==void 0&&(!Number.isInteger(i.emptyCrates)||i.emptyCrates<0||i.emptyCrates>cl)||i.refugeReport!==void 0&&i.refugeReport!==null&&(typeof i.refugeReport!="object"||!["hpBefore","hpAfter","parcelBefore","parcelAfter"].every(l=>Bt(i.refugeReport[l])&&i.refugeReport[l]>=0&&i.refugeReport[l]<=100))||a.weaponSince!==void 0&&!Bt(a.weaponSince)||!i.enemies.every(l=>(l.variant===void 0||Ss.includes(l.variant))&&(!l.telegraph||(l.telegraph.kind===void 0||zf.includes(l.telegraph.kind))&&["length","width","arc","inner"].every(h=>l.telegraph[h]===void 0||Bt(l.telegraph[h])&&l.telegraph[h]>=0&&l.telegraph[h]<=60)&&(l.telegraph.points===void 0||Array.isArray(l.telegraph.points)&&l.telegraph.points.length<=6&&l.telegraph.points.every(h=>h&&Bt(h.x)&&Bt(h.y))))&&(!l.heard||Bt(l.heard.x)&&Bt(l.heard.y)&&Bt(l.heard.life)))||!i.drops.every(l=>l.collectable===void 0||typeof l.collectable=="boolean")||i.crateHealth!==void 0&&(!Array.isArray(i.crateHealth)||i.crateHealth.length>=1e4||!i.crateHealth.every(l=>Array.isArray(l)&&l.length===2&&(typeof l[0]=="string"||Bt(l[0]))&&Bt(l[1])&&l[1]>0&&l[1]<=30)))},n=i=>!i||!i.checkpoint&&!i.guardianCheckpoint&&!i.waypointCheckpoint&&e(i)&&i.seed===t.seed&&i.pace===t.pace;try{return e(t)&&n(t.checkpoint)&&n(t.guardianCheckpoint)&&n(t.waypointCheckpoint)}catch{return!1}}}const vc="180",Xf=0,_l=1,Yf=2,eu=1,nu=2,Hn=3,Wn=0,Ye=1,En=2,ii=0,as=1,xl=2,yl=3,vl=4,$f=5,xi=100,qf=101,Kf=102,jf=103,Jf=104,Zf=200,Qf=201,td=202,ed=203,yo=204,vo=205,nd=206,id=207,sd=208,rd=209,ad=210,od=211,cd=212,ld=213,hd=214,Mo=0,bo=1,So=2,cs=3,Eo=4,wo=5,ta=6,To=7,iu=0,ud=1,fd=2,si=0,dd=1,pd=2,md=3,su=4,gd=5,_d=6,xd=7,ru=300,ls=301,hs=302,Ao=303,Co=304,ha=306,Ro=1e3,bi=1001,Po=1002,tn=1003,yd=1004,ur=1005,wn=1006,Ca=1007,Si=1008,Rn=1009,au=1010,ou=1011,Ws=1012,Mc=1013,wi=1014,Tn=1015,tr=1016,bc=1017,Sc=1018,Xs=1020,cu=35902,lu=35899,hu=1021,uu=1022,xn=1023,Ys=1026,$s=1027,Ec=1028,wc=1029,fu=1030,Tc=1031,Ac=1033,Wr=33776,Xr=33777,Yr=33778,$r=33779,Do=35840,Lo=35841,Io=35842,Uo=35843,No=36196,Fo=37492,ko=37496,Oo=37808,Bo=37809,zo=37810,Ho=37811,Go=37812,Vo=37813,Wo=37814,Xo=37815,Yo=37816,$o=37817,qo=37818,Ko=37819,jo=37820,Jo=37821,Zo=36492,Qo=36494,tc=36495,ec=36283,nc=36284,ic=36285,sc=36286,vd=3200,Md=3201,du=0,bd=1,ei="",Ze="srgb",us="srgb-linear",ea="linear",ce="srgb",Bi=7680,Ml=519,Sd=512,Ed=513,wd=514,pu=515,Td=516,Ad=517,Cd=518,Rd=519,bl=35044,Sl=35048,El="300 es",An=2e3,na=2001;class gs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wl=1234567;const Os=Math.PI/180,qs=180/Math.PI;function Pi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[s&255]+Ie[s>>8&255]+Ie[s>>16&255]+Ie[s>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function jt(s,t,e){return Math.max(t,Math.min(e,s))}function Cc(s,t){return(s%t+t)%t}function Pd(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Dd(s,t,e){return s!==t?(e-s)/(t-s):0}function Bs(s,t,e){return(1-e)*s+e*t}function Ld(s,t,e,n){return Bs(s,t,1-Math.exp(-e*n))}function Id(s,t=1){return t-Math.abs(Cc(s,t*2)-t)}function Ud(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Nd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Fd(s,t){return s+Math.floor(Math.random()*(t-s+1))}function kd(s,t){return s+Math.random()*(t-s)}function Od(s){return s*(.5-Math.random())}function Bd(s){s!==void 0&&(wl=s);let t=wl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function zd(s){return s*Os}function Hd(s){return s*qs}function Gd(s){return(s&s-1)===0&&s!==0}function Vd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Wd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Xd(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),d=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,c*u,c*f,o*l);break;case"YZY":s.set(c*f,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*f,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*d,o*l);break;case"YXY":s.set(c*d,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function es(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Oe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ra={DEG2RAD:Os,RAD2DEG:qs,generateUUID:Pi,clamp:jt,euclideanModulo:Cc,mapLinear:Pd,inverseLerp:Dd,lerp:Bs,damp:Ld,pingpong:Id,smoothstep:Ud,smootherstep:Nd,randInt:Fd,randFloat:kd,randFloatSpread:Od,seededRandom:Bd,degToRad:zd,radToDeg:Hd,isPowerOfTwo:Gd,ceilPowerOfTwo:Vd,floorPowerOfTwo:Wd,setQuaternionFromProperEuler:Xd,normalize:Oe,denormalize:es};class xt{constructor(t=0,e=0){xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _s{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==d||h!==g){let m=1-o;const p=c*f+l*d+h*g+u*_,E=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const b=Math.sqrt(x),T=Math.atan2(b,p*E);m=Math.sin(m*T)/b,o=Math.sin(o*T)/b}const y=o*E;if(c=c*m+f*y,l=l*m+d*y,h=h*m+g*y,u=u*m+_*y,m===1-o){const b=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=b,l*=b,h*=b,u*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-o*d,t[e+2]=l*g+h*d+o*f-c*u,t[e+3]=h*g-o*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),f=c(n/2),d=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+l)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Pa.copy(this).projectOnVector(t),this.sub(Pa)}reflect(t){return this.sub(Pa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pa=new F,Tl=new _s;class $t{constructor(t,e,n,i,r,a,o,c,l){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],E=i[1],x=i[4],y=i[7],b=i[2],T=i[5],C=i[8];return r[0]=a*_+o*E+c*b,r[3]=a*m+o*x+c*T,r[6]=a*p+o*y+c*C,r[1]=l*_+h*E+u*b,r[4]=l*m+h*x+u*T,r[7]=l*p+h*y+u*C,r[2]=f*_+d*E+g*b,r[5]=f*m+d*x+g*T,r[8]=f*p+d*y+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*r,d=l*r-a*c,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=f*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-o*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Da.makeScale(t,e)),this}rotate(t){return this.premultiply(Da.makeRotation(-t)),this}translate(t,e){return this.premultiply(Da.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Da=new $t;function mu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ia(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yd(){const s=ia("canvas");return s.style.display="block",s}const Al={};function Ks(s){s in Al||(Al[s]=!0,console.warn(s))}function $d(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Cl=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rl=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qd(){const s={enabled:!0,workingColorSpace:us,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ce&&(i.r=Vn(i.r),i.g=Vn(i.g),i.b=Vn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ce&&(i.r=os(i.r),i.g=os(i.g),i.b=os(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ei?ea:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ks("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ks("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[us]:{primaries:t,whitePoint:n,transfer:ea,toXYZ:Cl,fromXYZ:Rl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:t,whitePoint:n,transfer:ce,toXYZ:Cl,fromXYZ:Rl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}}),s}const ie=qd();function Vn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function os(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let zi;class Kd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{zi===void 0&&(zi=ia("canvas")),zi.width=t.width,zi.height=t.height;const i=zi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=zi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ia("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Vn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vn(e[n]/255)*255):e[n]=Vn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jd=0;class Rc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Pi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(La(i[a].image)):r.push(La(i[a]))}else r=La(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function La(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Kd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jd=0;const Ia=new F;class He extends gs{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=bi,i=bi,r=wn,a=Si,o=xn,c=Rn,l=He.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Pi(),this.name="",this.source=new Rc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ia).x}get height(){return this.source.getSize(Ia).y}get depth(){return this.source.getSize(Ia).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ru)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ro:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case Po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ro:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case Po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=ru;He.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,i=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,y=(d+1)/2,b=(p+1)/2,T=(h+f)/4,C=(u+_)/4,P=(g+m)/4;return x>y&&x>b?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=T/n,r=C/n):y>b?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=T/i,r=P/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=C/r,i=P/r),this.set(n,i,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(f-h)/E,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zd extends gs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new He(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Rc(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends Zd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class gu extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qd extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Di{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,hn):hn.fromBufferAttribute(r,a),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fr.copy(n.boundingBox)),fr.applyMatrix4(t.matrixWorld),this.union(fr)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ws),dr.subVectors(this.max,ws),Hi.subVectors(t.a,ws),Gi.subVectors(t.b,ws),Vi.subVectors(t.c,ws),qn.subVectors(Gi,Hi),Kn.subVectors(Vi,Gi),li.subVectors(Hi,Vi);let e=[0,-qn.z,qn.y,0,-Kn.z,Kn.y,0,-li.z,li.y,qn.z,0,-qn.x,Kn.z,0,-Kn.x,li.z,0,-li.x,-qn.y,qn.x,0,-Kn.y,Kn.x,0,-li.y,li.x,0];return!Ua(e,Hi,Gi,Vi,dr)||(e=[1,0,0,0,1,0,0,0,1],!Ua(e,Hi,Gi,Vi,dr))?!1:(pr.crossVectors(qn,Kn),e=[pr.x,pr.y,pr.z],Ua(e,Hi,Gi,Vi,dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Fn=[new F,new F,new F,new F,new F,new F,new F,new F],hn=new F,fr=new Di,Hi=new F,Gi=new F,Vi=new F,qn=new F,Kn=new F,li=new F,ws=new F,dr=new F,pr=new F,hi=new F;function Ua(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){hi.fromArray(s,r);const o=i.x*Math.abs(hi.x)+i.y*Math.abs(hi.y)+i.z*Math.abs(hi.z),c=t.dot(hi),l=e.dot(hi),h=n.dot(hi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const tp=new Di,Ts=new F,Na=new F;class er{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):tp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ts.subVectors(t,this.center);const e=Ts.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ts,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ts.copy(t.center).add(Na)),this.expandByPoint(Ts.copy(t.center).sub(Na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const kn=new F,Fa=new F,mr=new F,jn=new F,ka=new F,gr=new F,Oa=new F;class _u{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Fa.copy(t).add(e).multiplyScalar(.5),mr.copy(e).sub(t).normalize(),jn.copy(this.origin).sub(Fa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(mr),o=jn.dot(this.direction),c=-jn.dot(mr),l=jn.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*c-o,f=a*o-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Fa).addScaledVector(mr,f),d}intersectSphere(t,e){kn.subVectors(t.center,this.origin);const n=kn.dot(this.direction),i=kn.dot(kn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,i,r){ka.subVectors(e,t),gr.subVectors(n,t),Oa.crossVectors(ka,gr);let a=this.direction.dot(Oa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;jn.subVectors(this.origin,t);const c=o*this.direction.dot(gr.crossVectors(jn,gr));if(c<0)return null;const l=o*this.direction.dot(ka.cross(jn));if(l<0||c+l>a)return null;const h=-o*jn.dot(Oa);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,i,r,a,o,c,l,h,u,f,d,g,_,m){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,u,f,d,g,_,m)}set(t,e,n,i,r,a,o,c,l,h,u,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Wi.setFromMatrixColumn(t,0).length(),r=1/Wi.setFromMatrixColumn(t,1).length(),a=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,d=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-_*l,e[9]=-o*c,e[2]=_-f*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f+_*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=_+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,d=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,d=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=a*c,d=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ep,t,np)}lookAt(t,e,n){const i=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Jn.crossVectors(n,Ke),Jn.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Jn.crossVectors(n,Ke)),Jn.normalize(),_r.crossVectors(Ke,Jn),i[0]=Jn.x,i[4]=_r.x,i[8]=Ke.x,i[1]=Jn.y,i[5]=_r.y,i[9]=Ke.y,i[2]=Jn.z,i[6]=_r.z,i[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],x=n[7],y=n[11],b=n[15],T=i[0],C=i[4],P=i[8],S=i[12],M=i[1],D=i[5],A=i[9],I=i[13],N=i[2],U=i[6],O=i[10],$=i[14],G=i[3],V=i[7],st=i[11],nt=i[15];return r[0]=a*T+o*M+c*N+l*G,r[4]=a*C+o*D+c*U+l*V,r[8]=a*P+o*A+c*O+l*st,r[12]=a*S+o*I+c*$+l*nt,r[1]=h*T+u*M+f*N+d*G,r[5]=h*C+u*D+f*U+d*V,r[9]=h*P+u*A+f*O+d*st,r[13]=h*S+u*I+f*$+d*nt,r[2]=g*T+_*M+m*N+p*G,r[6]=g*C+_*D+m*U+p*V,r[10]=g*P+_*A+m*O+p*st,r[14]=g*S+_*I+m*$+p*nt,r[3]=E*T+x*M+y*N+b*G,r[7]=E*C+x*D+y*U+b*V,r[11]=E*P+x*A+y*O+b*st,r[15]=E*S+x*I+y*$+b*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-i*l*u-r*o*f+n*l*f+i*o*d-n*c*d)+_*(+e*c*d-e*l*f+r*a*f-i*a*d+i*l*h-r*c*h)+m*(+e*l*u-e*o*d-r*a*u+n*a*d+r*o*h-n*l*h)+p*(-i*o*h-e*c*u+e*o*f+i*a*u-n*a*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],E=u*m*l-_*f*l+_*c*d-o*m*d-u*c*p+o*f*p,x=g*f*l-h*m*l-g*c*d+a*m*d+h*c*p-a*f*p,y=h*_*l-g*u*l+g*o*d-a*_*d-h*o*p+a*u*p,b=g*u*c-h*_*c-g*o*f+a*_*f+h*o*m-a*u*m,T=e*E+n*x+i*y+r*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=E*C,t[1]=(_*f*r-u*m*r-_*i*d+n*m*d+u*i*p-n*f*p)*C,t[2]=(o*m*r-_*c*r+_*i*l-n*m*l-o*i*p+n*c*p)*C,t[3]=(u*c*r-o*f*r-u*i*l+n*f*l+o*i*d-n*c*d)*C,t[4]=x*C,t[5]=(h*m*r-g*f*r+g*i*d-e*m*d-h*i*p+e*f*p)*C,t[6]=(g*c*r-a*m*r-g*i*l+e*m*l+a*i*p-e*c*p)*C,t[7]=(a*f*r-h*c*r+h*i*l-e*f*l-a*i*d+e*c*d)*C,t[8]=y*C,t[9]=(g*u*r-h*_*r-g*n*d+e*_*d+h*n*p-e*u*p)*C,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*p+e*o*p)*C,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*d-e*o*d)*C,t[12]=b*C,t[13]=(h*_*i-g*u*i+g*n*f-e*_*f-h*n*m+e*u*m)*C,t[14]=(g*o*i-a*_*i-g*n*c+e*_*c+a*n*m-e*o*m)*C,t[15]=(a*u*i-h*o*i+h*n*c-e*u*c-a*n*f+e*o*f)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,f=r*l,d=r*h,g=r*u,_=a*h,m=a*u,p=o*u,E=c*l,x=c*h,y=c*u,b=n.x,T=n.y,C=n.z;return i[0]=(1-(_+p))*b,i[1]=(d+y)*b,i[2]=(g-x)*b,i[3]=0,i[4]=(d-y)*T,i[5]=(1-(f+p))*T,i[6]=(m+E)*T,i[7]=0,i[8]=(g+x)*C,i[9]=(m-E)*C,i[10]=(1-(f+_))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Wi.set(i[0],i[1],i[2]).length();const a=Wi.set(i[4],i[5],i[6]).length(),o=Wi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],un.copy(this);const l=1/r,h=1/a,u=1/o;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,e.setFromRotationMatrix(un),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=An,c=!1){const l=this.elements,h=2*r/(e-t),u=2*r/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i);let g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===An)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===na)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=An,c=!1){const l=this.elements,h=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),d=-(n+i)/(n-i);let g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===An)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===na)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Wi=new F,un=new ae,ep=new F(0,0,0),np=new F(1,1,1),Jn=new F,_r=new F,Ke=new F,Pl=new ae,Dl=new _s;class Pn{constructor(t=0,e=0,n=0,i=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Dl.setFromEuler(this),this.setFromQuaternion(Dl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class Pc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ip=0;const Ll=new F,Xi=new _s,On=new ae,xr=new F,As=new F,sp=new F,rp=new _s,Il=new F(1,0,0),Ul=new F(0,1,0),Nl=new F(0,0,1),Fl={type:"added"},ap={type:"removed"},Yi={type:"childadded",child:null},Ba={type:"childremoved",child:null};class De extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new F,e=new Pn,n=new _s,i=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ae},normalMatrix:{value:new $t}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.premultiply(Xi),this}rotateX(t){return this.rotateOnAxis(Il,t)}rotateY(t){return this.rotateOnAxis(Ul,t)}rotateZ(t){return this.rotateOnAxis(Nl,t)}translateOnAxis(t,e){return Ll.copy(t).applyQuaternion(this.quaternion),this.position.add(Ll.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Il,t)}translateY(t){return this.translateOnAxis(Ul,t)}translateZ(t){return this.translateOnAxis(Nl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xr.copy(t):xr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(As,xr,this.up):On.lookAt(xr,As,this.up),this.quaternion.setFromRotationMatrix(On),i&&(On.extractRotation(i.matrixWorld),Xi.setFromRotationMatrix(On),this.quaternion.premultiply(Xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fl),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ap),Ba.child=t,this.dispatchEvent(Ba),Ba.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fl),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,t,sp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,rp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}De.DEFAULT_UP=new F(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new F,Bn=new F,za=new F,zn=new F,$i=new F,qi=new F,kl=new F,Ha=new F,Ga=new F,Va=new F,Wa=new pe,Xa=new pe,Ya=new pe;class _n{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),fn.subVectors(t,e),i.cross(fn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){fn.subVectors(i,e),Bn.subVectors(n,e),za.subVectors(t,e);const a=fn.dot(fn),o=fn.dot(Bn),c=fn.dot(za),l=Bn.dot(Bn),h=Bn.dot(za),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,zn.x),c.addScaledVector(a,zn.y),c.addScaledVector(o,zn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return Wa.setScalar(0),Xa.setScalar(0),Ya.setScalar(0),Wa.fromBufferAttribute(t,e),Xa.fromBufferAttribute(t,n),Ya.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Wa,r.x),a.addScaledVector(Xa,r.y),a.addScaledVector(Ya,r.z),a}static isFrontFacing(t,e,n,i){return fn.subVectors(n,e),Bn.subVectors(t,e),fn.cross(Bn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),fn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return _n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return _n.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return _n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;$i.subVectors(i,n),qi.subVectors(r,n),Ha.subVectors(t,n);const c=$i.dot(Ha),l=qi.dot(Ha);if(c<=0&&l<=0)return e.copy(n);Ga.subVectors(t,i);const h=$i.dot(Ga),u=qi.dot(Ga);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector($i,a);Va.subVectors(t,r);const d=$i.dot(Va),g=qi.dot(Va);if(g>=0&&d<=g)return e.copy(r);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(qi,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return kl.subVectors(r,i),o=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(kl,o);const p=1/(m+_+f);return a=_*p,o=f*p,e.copy(n).addScaledVector($i,a).addScaledVector(qi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},yr={h:0,s:0,l:0};function $a(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ie.workingColorSpace){if(t=Cc(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=$a(a,r,t+1/3),this.g=$a(a,r,t),this.b=$a(a,r,t-1/3)}return ie.colorSpaceToWorking(this,i),this}setStyle(t,e=Ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){const n=xu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}copyLinearToSRGB(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return ie.workingToColorSpace(Ue.copy(this),t),Math.round(jt(Ue.r*255,0,255))*65536+Math.round(jt(Ue.g*255,0,255))*256+Math.round(jt(Ue.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(Ue.copy(this),e);const n=Ue.r,i=Ue.g,r=Ue.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=Ze){ie.workingToColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,i=Ue.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(yr);const n=Bs(Zn.h,yr.h,e),i=Bs(Zn.s,yr.s,e),r=Bs(Zn.l,yr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new Kt;Kt.NAMES=xu;let op=0;class nr extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=as,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yo,this.blendDst=vo,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ml,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yo&&(n.blendSrc=this.blendSrc),this.blendDst!==vo&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ml&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class yi extends nr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new F,vr=new xt;let cp=0;class vn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bl,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vr.fromBufferAttribute(this,e),vr.applyMatrix3(t),this.setXY(e,vr.x,vr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=es(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=es(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=es(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=es(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=es(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),i=Oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),i=Oe(i,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bl&&(t.usage=this.usage),t}}class yu extends vn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class vu extends vn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ue extends vn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let lp=0;const sn=new ae,qa=new De,Ki=new F,je=new Di,Cs=new Di,Ae=new F;class Fe extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mu(t)?vu:yu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return qa.lookAt(t),qa.updateMatrix(),this.applyMatrix4(qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ue(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new er);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Cs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(je.min,Cs.min),je.expandByPoint(Ae),Ae.addVectors(je.max,Cs.max),je.expandByPoint(Ae)):(je.expandByPoint(Cs.min),je.expandByPoint(Cs.max))}je.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ae.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ae));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ae.fromBufferAttribute(o,l),c&&(Ki.fromBufferAttribute(t,l),Ae.add(Ki)),i=Math.max(i,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new F,c[P]=new F;const l=new F,h=new F,u=new F,f=new xt,d=new xt,g=new xt,_=new F,m=new F;function p(P,S,M){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),d.sub(f),g.sub(f);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(D),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(D),o[P].add(_),o[S].add(_),o[M].add(_),c[P].add(m),c[S].add(m),c[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let P=0,S=E.length;P<S;++P){const M=E[P],D=M.start,A=M.count;for(let I=D,N=D+A;I<N;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const x=new F,y=new F,b=new F,T=new F;function C(P){b.fromBufferAttribute(i,P),T.copy(b);const S=o[P];x.copy(S),x.sub(b.multiplyScalar(b.dot(S))).normalize(),y.crossVectors(T,S);const D=y.dot(c[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,D)}for(let P=0,S=E.length;P<S;++P){const M=E[P],D=M.start,A=M.count;for(let I=D,N=D+A;I<N;I+=3)C(t.getX(I+0)),C(t.getX(I+1)),C(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new F,r=new F,a=new F,o=new F,c=new F,l=new F,h=new F,u=new F;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new vn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fe,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ol=new ae,ui=new _u,Mr=new er,Bl=new F,br=new F,Sr=new F,Er=new F,Ka=new F,wr=new F,zl=new F,Tr=new F;class _e extends De{constructor(t=new Fe,e=new yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){wr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Ka.fromBufferAttribute(u,t),a?wr.addScaledVector(Ka,h):wr.addScaledVector(Ka.sub(e),h))}e.add(wr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(r),ui.copy(t.ray).recast(t.near),!(Mr.containsPoint(ui.origin)===!1&&(ui.intersectSphere(Mr,Bl)===null||ui.origin.distanceToSquared(Bl)>(t.far-t.near)**2))&&(Ol.copy(r).invert(),ui.copy(t.ray).applyMatrix4(Ol),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ui)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=E,b=x;y<b;y+=3){const T=o.getX(y),C=o.getX(y+1),P=o.getX(y+2);i=Ar(this,p,t,n,l,h,u,T,C,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);i=Ar(this,a,t,n,l,h,u,E,x,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=E,b=x;y<b;y+=3){const T=y,C=y+1,P=y+2;i=Ar(this,p,t,n,l,h,u,T,C,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=m,x=m+1,y=m+2;i=Ar(this,a,t,n,l,h,u,E,x,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function hp(s,t,e,n,i,r,a,o){let c;if(t.side===Ye?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===Wn,o),c===null)return null;Tr.copy(o),Tr.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Tr);return l<e.near||l>e.far?null:{distance:l,point:Tr.clone(),object:s}}function Ar(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,br),s.getVertexPosition(c,Sr),s.getVertexPosition(l,Er);const h=hp(s,t,e,n,br,Sr,Er,zl);if(h){const u=new F;_n.getBarycoord(zl,br,Sr,Er,u),i&&(h.uv=_n.getInterpolatedAttribute(i,o,c,l,u,new xt)),r&&(h.uv1=_n.getInterpolatedAttribute(r,o,c,l,u,new xt)),a&&(h.normal=_n.getInterpolatedAttribute(a,o,c,l,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new F,materialIndex:0};_n.getNormal(br,Sr,Er,f.normal),h.face=f,h.barycoord=u}return h}class Ai extends Fe{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(u,2));function g(_,m,p,E,x,y,b,T,C,P,S){const M=y/C,D=b/P,A=y/2,I=b/2,N=T/2,U=C+1,O=P+1;let $=0,G=0;const V=new F;for(let st=0;st<O;st++){const nt=st*D-I;for(let gt=0;gt<U;gt++){const wt=gt*M-A;V[_]=wt*E,V[m]=nt*x,V[p]=N,l.push(V.x,V.y,V.z),V[_]=0,V[m]=0,V[p]=T>0?1:-1,h.push(V.x,V.y,V.z),u.push(gt/C),u.push(1-st/P),$+=1}}for(let st=0;st<P;st++)for(let nt=0;nt<C;nt++){const gt=f+nt+U*st,wt=f+nt+U*(st+1),Wt=f+(nt+1)+U*(st+1),Ot=f+(nt+1)+U*st;c.push(gt,wt,Ot),c.push(wt,Wt,Ot),G+=6}o.addGroup(d,G,S),d+=G,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function fs(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Be(s){const t={};for(let e=0;e<s.length;e++){const n=fs(s[e]);for(const i in n)t[i]=n[i]}return t}function up(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Mu(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const fp={clone:fs,merge:Be};var dp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends nr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dp,this.fragmentShader=pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fs(t.uniforms),this.uniformsGroups=up(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class bu extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new F,Hl=new xt,Gl=new xt;class gn extends bu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,Hl,Gl),e.subVectors(Gl,Hl)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Os*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ji=-90,Ji=1;class mp extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new gn(ji,Ji,t,e);i.layers=this.layers,this.add(i);const r=new gn(ji,Ji,t,e);r.layers=this.layers,this.add(r);const a=new gn(ji,Ji,t,e);a.layers=this.layers,this.add(a);const o=new gn(ji,Ji,t,e);o.layers=this.layers,this.add(o);const c=new gn(ji,Ji,t,e);c.layers=this.layers,this.add(c);const l=new gn(ji,Ji,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===na)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Su extends He{constructor(t=[],e=ls,n,i,r,a,o,c,l,h){super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gp extends Ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Su(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ai(5,5,5),r=new ri({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:ii});r.uniforms.tEquirect.value=e;const a=new _e(i,r),o=e.minFilter;return e.minFilter===Si&&(e.minFilter=wn),new mp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}class Qt extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _p={type:"move"};class ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_p)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Dc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=n}clone(){return new Dc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class xp extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class yp extends He{constructor(t=null,e=1,n=1,i,r,a,o,c,l=tn,h=tn,u,f){super(null,a,o,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vl extends vn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Zi=new ae,Wl=new ae,Cr=[],Xl=new Di,vp=new ae,Rs=new _e,Ps=new er;class Rr extends _e{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Vl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,vp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zi),Xl.copy(t.boundingBox).applyMatrix4(Zi),this.boundingBox.union(Xl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new er),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zi),Ps.copy(t.boundingSphere).applyMatrix4(Zi),this.boundingSphere.union(Ps)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Rs.geometry=this.geometry,Rs.material=this.material,Rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ps.copy(this.boundingSphere),Ps.applyMatrix4(n),t.ray.intersectsSphere(Ps)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Zi),Wl.multiplyMatrices(n,Zi),Rs.matrixWorld=Wl,Rs.raycast(t,Cr);for(let a=0,o=Cr.length;a<o;a++){const c=Cr[a];c.instanceId=r,c.object=this,e.push(c)}Cr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Vl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new yp(new Float32Array(i*this.count),i,this.count,Ec,Tn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ja=new F,Mp=new F,bp=new $t;class gi{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ja.subVectors(n,e).cross(Mp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ja),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||bp.getNormalMatrix(t),i=this.coplanarPoint(Ja).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new er,Sp=new xt(.5,.5),Pr=new F;class Lc{constructor(t=new gi,e=new gi,n=new gi,i=new gi,r=new gi,a=new gi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An,n=!1){const i=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],E=r[12],x=r[13],y=r[14],b=r[15];if(i[0].setComponents(l-a,d-h,p-g,b-E).normalize(),i[1].setComponents(l+a,d+h,p+g,b+E).normalize(),i[2].setComponents(l+o,d+u,p+_,b+x).normalize(),i[3].setComponents(l-o,d-u,p-_,b-x).normalize(),n)i[4].setComponents(c,f,m,y).normalize(),i[5].setComponents(l-c,d-f,p-m,b-y).normalize();else if(i[4].setComponents(l-c,d-f,p-m,b-y).normalize(),e===An)i[5].setComponents(l+c,d+f,p+m,b+y).normalize();else if(e===na)i[5].setComponents(c,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){fi.center.set(0,0,0);const e=Sp.distanceTo(t.center);return fi.radius=.7071067811865476+e,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Pr.x=i.normal.x>0?t.max.x:t.min.x,Pr.y=i.normal.y>0?t.max.y:t.min.y,Pr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Eu extends He{constructor(t,e,n=wi,i,r,a,o=tn,c=tn,l,h=Ys,u=1){if(h!==Ys&&h!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Rc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class wu extends He{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class sa extends Fe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new F,h=new xt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*i;l.x=t*Math.cos(d),l.y=t*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(o,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sa(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ua extends Fe{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;E(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ue(u,3)),this.setAttribute("normal",new ue(f,3)),this.setAttribute("uv",new ue(d,2));function E(){const y=new F,b=new F;let T=0;const C=(e-t)/n;for(let P=0;P<=r;P++){const S=[],M=P/r,D=M*(e-t)+t;for(let A=0;A<=i;A++){const I=A/i,N=I*c+o,U=Math.sin(N),O=Math.cos(N);b.x=D*U,b.y=-M*n+m,b.z=D*O,u.push(b.x,b.y,b.z),y.set(U,C,O).normalize(),f.push(y.x,y.y,y.z),d.push(I,1-M),S.push(g++)}_.push(S)}for(let P=0;P<i;P++)for(let S=0;S<r;S++){const M=_[S][P],D=_[S+1][P],A=_[S+1][P+1],I=_[S][P+1];(t>0||S!==0)&&(h.push(M,D,I),T+=3),(e>0||S!==r-1)&&(h.push(D,A,I),T+=3)}l.addGroup(p,T,0),p+=T}function x(y){const b=g,T=new xt,C=new F;let P=0;const S=y===!0?t:e,M=y===!0?1:-1;for(let A=1;A<=i;A++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;const D=g;for(let A=0;A<=i;A++){const N=A/i*c+o,U=Math.cos(N),O=Math.sin(N);C.x=S*O,C.y=m*M,C.z=S*U,u.push(C.x,C.y,C.z),f.push(0,M,0),T.x=U*.5+.5,T.y=O*.5*M+.5,d.push(T.x,T.y),g++}for(let A=0;A<i;A++){const I=b+A,N=D+A;y===!0?h.push(N,N+1,I):h.push(N+1,N,I),P+=3}l.addGroup(p,P,y===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ua(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ic extends ua{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ic(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Uc extends Fe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new ue(r,3)),this.setAttribute("normal",new ue(r.slice(),3)),this.setAttribute("uv",new ue(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const x=new F,y=new F,b=new F;for(let T=0;T<e.length;T+=3)d(e[T+0],x),d(e[T+1],y),d(e[T+2],b),c(x,y,b,E)}function c(E,x,y,b){const T=b+1,C=[];for(let P=0;P<=T;P++){C[P]=[];const S=E.clone().lerp(y,P/T),M=x.clone().lerp(y,P/T),D=T-P;for(let A=0;A<=D;A++)A===0&&P===T?C[P][A]=S:C[P][A]=S.clone().lerp(M,A/D)}for(let P=0;P<T;P++)for(let S=0;S<2*(T-P)-1;S++){const M=Math.floor(S/2);S%2===0?(f(C[P][M+1]),f(C[P+1][M]),f(C[P][M])):(f(C[P][M+1]),f(C[P+1][M+1]),f(C[P+1][M]))}}function l(E){const x=new F;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(E),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){const E=new F;for(let x=0;x<r.length;x+=3){E.x=r[x+0],E.y=r[x+1],E.z=r[x+2];const y=m(E)/2/Math.PI+.5,b=p(E)/Math.PI+.5;a.push(y,1-b)}g(),u()}function u(){for(let E=0;E<a.length;E+=6){const x=a[E+0],y=a[E+2],b=a[E+4],T=Math.max(x,y,b),C=Math.min(x,y,b);T>.9&&C<.1&&(x<.2&&(a[E+0]+=1),y<.2&&(a[E+2]+=1),b<.2&&(a[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function d(E,x){const y=E*3;x.x=t[y+0],x.y=t[y+1],x.z=t[y+2]}function g(){const E=new F,x=new F,y=new F,b=new F,T=new xt,C=new xt,P=new xt;for(let S=0,M=0;S<r.length;S+=9,M+=6){E.set(r[S+0],r[S+1],r[S+2]),x.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),T.set(a[M+0],a[M+1]),C.set(a[M+2],a[M+3]),P.set(a[M+4],a[M+5]),b.copy(E).add(x).add(y).divideScalar(3);const D=m(b);_(T,M+0,E,D),_(C,M+2,x,D),_(P,M+4,y,D)}}function _(E,x,y,b){b<0&&E.x===1&&(a[x]=E.x-1),y.x===0&&y.z===0&&(a[x]=b/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uc(t.vertices,t.indices,t.radius,t.details)}}class In{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=e||(a.isVector2?new xt:new F);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new F,i=[],r=[],a=[],o=new F,c=new ae;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new F)}r[0]=new F,a[0]=new F;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(jt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(jt(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Nc extends In{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new xt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ep extends Nc{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Fc(){let s=0,t=0,e=0,n=0;function i(r,a,o,c){s=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const Dr=new F,Za=new Fc,Qa=new Fc,to=new Fc;class wp extends In{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new F){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(Dr.subVectors(i[0],i[1]).add(i[0]),l=Dr);const u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Dr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Dr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Za.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,m),Qa.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,m),to.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Za.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Qa.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),to.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Za.calc(c),Qa.calc(c),to.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new F().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Yl(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,c=s*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*s+e}function Tp(s,t){const e=1-s;return e*e*t}function Ap(s,t){return 2*(1-s)*s*t}function Cp(s,t){return s*s*t}function zs(s,t,e,n){return Tp(s,t)+Ap(s,e)+Cp(s,n)}function Rp(s,t){const e=1-s;return e*e*e*t}function Pp(s,t){const e=1-s;return 3*e*e*s*t}function Dp(s,t){return 3*(1-s)*s*s*t}function Lp(s,t){return s*s*s*t}function Hs(s,t,e,n,i){return Rp(s,t)+Pp(s,e)+Dp(s,n)+Lp(s,i)}class Tu extends In{constructor(t=new xt,e=new xt,n=new xt,i=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new xt){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hs(t,i.x,r.x,a.x,o.x),Hs(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ip extends In{constructor(t=new F,e=new F,n=new F,i=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new F){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hs(t,i.x,r.x,a.x,o.x),Hs(t,i.y,r.y,a.y,o.y),Hs(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Au extends In{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Up extends In{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cu extends In{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(zs(t,i.x,r.x,a.x),zs(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Np extends In{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(zs(t,i.x,r.x,a.x),zs(t,i.y,r.y,a.y),zs(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ru extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Yl(o,c.x,l.x,h.x,u.x),Yl(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new xt().fromArray(i))}return this}}var rc=Object.freeze({__proto__:null,ArcCurve:Ep,CatmullRomCurve3:wp,CubicBezierCurve:Tu,CubicBezierCurve3:Ip,EllipseCurve:Nc,LineCurve:Au,LineCurve3:Up,QuadraticBezierCurve:Cu,QuadraticBezierCurve3:Np,SplineCurve:Ru});class Fp extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new rc[i.type]().fromJSON(i))}return this}}class $l extends Fp{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Au(this.currentPoint.clone(),new xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Cu(this.currentPoint.clone(),new xt(t,e),new xt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new Tu(this.currentPoint.clone(),new xt(t,e),new xt(n,i),new xt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ru(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,a,o,c),this}absellipse(t,e,n,i,r,a,o,c){const l=new Nc(t,e,n,i,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ac extends $l{constructor(t){super(t),this.uuid=Pi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new $l().fromJSON(i))}return this}}function kp(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Pu(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=Gp(s,t,r,e)),s.length>80*e){o=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=e;f<i;f+=e){const d=s[f],g=s[f+1];d<o&&(o=d),g<c&&(c=g),d>h&&(h=d),g>u&&(u=g)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return js(r,a,e,o,c,l,0),a}function Pu(s,t,e,n,i){let r;if(i===Qp(s,t,e,n)>0)for(let a=t;a<e;a+=n)r=ql(a/n|0,s[a],s[a+1],r);else for(let a=e-n;a>=t;a-=n)r=ql(a/n|0,s[a],s[a+1],r);return r&&ds(r,r.next)&&(Zs(r),r=r.next),r}function Ci(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(ds(e,e.next)||xe(e.prev,e,e.next)===0)){if(Zs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function js(s,t,e,n,i,r,a){if(!s)return;!a&&r&&$p(s,n,i,r);let o=s;for(;s.prev!==s.next;){const c=s.prev,l=s.next;if(r?Bp(s,n,i,r):Op(s)){t.push(c.i,s.i,l.i),Zs(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=zp(Ci(s),t),js(s,t,e,n,i,r,2)):a===2&&Hp(s,t,e,n,i,r):js(Ci(s),t,e,n,i,r,1);break}}}function Op(s){const t=s.prev,e=s,n=s.next;if(xe(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=Math.min(i,r,a),u=Math.min(o,c,l),f=Math.max(i,r,a),d=Math.max(o,c,l);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Ds(i,o,r,c,a,l,g.x,g.y)&&xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Bp(s,t,e,n){const i=s.prev,r=s,a=s.next;if(xe(i,r,a)>=0)return!1;const o=i.x,c=r.x,l=a.x,h=i.y,u=r.y,f=a.y,d=Math.min(o,c,l),g=Math.min(h,u,f),_=Math.max(o,c,l),m=Math.max(h,u,f),p=oc(d,g,t,e,n),E=oc(_,m,t,e,n);let x=s.prevZ,y=s.nextZ;for(;x&&x.z>=p&&y&&y.z<=E;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&Ds(o,h,c,u,l,f,x.x,x.y)&&xe(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&Ds(o,h,c,u,l,f,y.x,y.y)&&xe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&Ds(o,h,c,u,l,f,x.x,x.y)&&xe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=E;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&Ds(o,h,c,u,l,f,y.x,y.y)&&xe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function zp(s,t){let e=s;do{const n=e.prev,i=e.next.next;!ds(n,i)&&Lu(n,e,e.next,i)&&Js(n,i)&&Js(i,n)&&(t.push(n.i,e.i,i.i),Zs(e),Zs(e.next),e=s=i),e=e.next}while(e!==s);return Ci(e)}function Hp(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&jp(a,o)){let c=Iu(a,o);a=Ci(a,a.next),c=Ci(c,c.next),js(a,t,e,n,i,r,0),js(c,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Gp(s,t,e,n){const i=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,c=r<a-1?t[r+1]*n:s.length,l=Pu(s,o,c,n,!1);l===l.next&&(l.steiner=!0),i.push(Kp(l))}i.sort(Vp);for(let r=0;r<i.length;r++)e=Wp(i[r],e);return e}function Vp(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Wp(s,t){const e=Xp(s,t);if(!e)return t;const n=Iu(e,s);return Ci(n,n.next),Ci(e,e.next)}function Xp(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,a;if(ds(s,e))return e;do{if(ds(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,c=a.x,l=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Du(i<l?n:r,i,c,l,i<l?r:n,i,e.x,e.y)){const u=Math.abs(i-e.y)/(n-e.x);Js(e,s)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Yp(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Yp(s,t){return xe(s.prev,s,t.prev)<0&&xe(t.next,s,s.next)<0}function $p(s,t,e,n){let i=s;do i.z===0&&(i.z=oc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,qp(i)}function qp(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,e*=2}while(t>1);return s}function oc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Kp(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Du(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function Ds(s,t,e,n,i,r,a,o){return!(s===a&&t===o)&&Du(s,t,e,n,i,r,a,o)}function jp(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Jp(s,t)&&(Js(s,t)&&Js(t,s)&&Zp(s,t)&&(xe(s.prev,s,t.prev)||xe(s,t.prev,t))||ds(s,t)&&xe(s.prev,s,s.next)>0&&xe(t.prev,t,t.next)>0)}function xe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ds(s,t){return s.x===t.x&&s.y===t.y}function Lu(s,t,e,n){const i=Ir(xe(s,t,e)),r=Ir(xe(s,t,n)),a=Ir(xe(e,n,s)),o=Ir(xe(e,n,t));return!!(i!==r&&a!==o||i===0&&Lr(s,e,t)||r===0&&Lr(s,n,t)||a===0&&Lr(e,s,n)||o===0&&Lr(e,t,n))}function Lr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ir(s){return s>0?1:s<0?-1:0}function Jp(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Lu(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Js(s,t){return xe(s.prev,s,s.next)<0?xe(s,t,s.next)>=0&&xe(s,s.prev,t)>=0:xe(s,t,s.prev)<0||xe(s,s.next,t)<0}function Zp(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Iu(s,t){const e=cc(s.i,s.x,s.y),n=cc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ql(s,t,e,n){const i=cc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Zs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function cc(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Qp(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class tm{static triangulate(t,e,n=2){return kp(t,e,n)}}class is{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return is.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Kl(t),jl(n,t);let a=t.length;e.forEach(Kl);for(let c=0;c<e.length;c++)i.push(a),a+=e[c].length,jl(n,e[c]);const o=tm.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Kl(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function jl(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class ra extends Fe{constructor(t=new ac([new xt(.5,.5),new xt(-.5,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new ue(i,3)),this.setAttribute("uv",new ue(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:em;let x,y=!1,b,T,C,P;p&&(x=p.getSpacedPoints(h),y=!0,f=!1,b=p.computeFrenetFrames(h,!1),T=new F,C=new F,P=new F),f||(m=0,d=0,g=0,_=0);const S=o.extractPoints(l);let M=S.shape;const D=S.holes;if(!is.isClockWise(M)){M=M.reverse();for(let tt=0,Z=D.length;tt<Z;tt++){const et=D[tt];is.isClockWise(et)&&(D[tt]=et.reverse())}}function I(tt){const et=10000000000000001e-36;let Q=tt[0];for(let mt=1;mt<=tt.length;mt++){const ot=mt%tt.length,rt=tt[ot],Ft=rt.x-Q.x,Ut=rt.y-Q.y,R=Ft*Ft+Ut*Ut,v=Math.max(Math.abs(rt.x),Math.abs(rt.y),Math.abs(Q.x),Math.abs(Q.y)),H=et*v*v;if(R<=H){tt.splice(ot,1),mt--;continue}Q=rt}}I(M),D.forEach(I);const N=D.length,U=M;for(let tt=0;tt<N;tt++){const Z=D[tt];M=M.concat(Z)}function O(tt,Z,et){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(Z,et)}const $=M.length;function G(tt,Z,et){let Q,mt,ot;const rt=tt.x-Z.x,Ft=tt.y-Z.y,Ut=et.x-tt.x,R=et.y-tt.y,v=rt*rt+Ft*Ft,H=rt*R-Ft*Ut;if(Math.abs(H)>Number.EPSILON){const j=Math.sqrt(v),at=Math.sqrt(Ut*Ut+R*R),J=Z.x-Ft/j,Lt=Z.y+rt/j,pt=et.x-R/at,Rt=et.y+Ut/at,Pt=((pt-J)*R-(Rt-Lt)*Ut)/(rt*R-Ft*Ut);Q=J+rt*Pt-tt.x,mt=Lt+Ft*Pt-tt.y;const ct=Q*Q+mt*mt;if(ct<=2)return new xt(Q,mt);ot=Math.sqrt(ct/2)}else{let j=!1;rt>Number.EPSILON?Ut>Number.EPSILON&&(j=!0):rt<-Number.EPSILON?Ut<-Number.EPSILON&&(j=!0):Math.sign(Ft)===Math.sign(R)&&(j=!0),j?(Q=-Ft,mt=rt,ot=Math.sqrt(v)):(Q=rt,mt=Ft,ot=Math.sqrt(v/2))}return new xt(Q/ot,mt/ot)}const V=[];for(let tt=0,Z=U.length,et=Z-1,Q=tt+1;tt<Z;tt++,et++,Q++)et===Z&&(et=0),Q===Z&&(Q=0),V[tt]=G(U[tt],U[et],U[Q]);const st=[];let nt,gt=V.concat();for(let tt=0,Z=N;tt<Z;tt++){const et=D[tt];nt=[];for(let Q=0,mt=et.length,ot=mt-1,rt=Q+1;Q<mt;Q++,ot++,rt++)ot===mt&&(ot=0),rt===mt&&(rt=0),nt[Q]=G(et[Q],et[ot],et[rt]);st.push(nt),gt=gt.concat(nt)}let wt;if(m===0)wt=is.triangulateShape(U,D);else{const tt=[],Z=[];for(let et=0;et<m;et++){const Q=et/m,mt=d*Math.cos(Q*Math.PI/2),ot=g*Math.sin(Q*Math.PI/2)+_;for(let rt=0,Ft=U.length;rt<Ft;rt++){const Ut=O(U[rt],V[rt],ot);Et(Ut.x,Ut.y,-mt),Q===0&&tt.push(Ut)}for(let rt=0,Ft=N;rt<Ft;rt++){const Ut=D[rt];nt=st[rt];const R=[];for(let v=0,H=Ut.length;v<H;v++){const j=O(Ut[v],nt[v],ot);Et(j.x,j.y,-mt),Q===0&&R.push(j)}Q===0&&Z.push(R)}}wt=is.triangulateShape(tt,Z)}const Wt=wt.length,Ot=g+_;for(let tt=0;tt<$;tt++){const Z=f?O(M[tt],gt[tt],Ot):M[tt];y?(C.copy(b.normals[0]).multiplyScalar(Z.x),T.copy(b.binormals[0]).multiplyScalar(Z.y),P.copy(x[0]).add(C).add(T),Et(P.x,P.y,P.z)):Et(Z.x,Z.y,0)}for(let tt=1;tt<=h;tt++)for(let Z=0;Z<$;Z++){const et=f?O(M[Z],gt[Z],Ot):M[Z];y?(C.copy(b.normals[tt]).multiplyScalar(et.x),T.copy(b.binormals[tt]).multiplyScalar(et.y),P.copy(x[tt]).add(C).add(T),Et(P.x,P.y,P.z)):Et(et.x,et.y,u/h*tt)}for(let tt=m-1;tt>=0;tt--){const Z=tt/m,et=d*Math.cos(Z*Math.PI/2),Q=g*Math.sin(Z*Math.PI/2)+_;for(let mt=0,ot=U.length;mt<ot;mt++){const rt=O(U[mt],V[mt],Q);Et(rt.x,rt.y,u+et)}for(let mt=0,ot=D.length;mt<ot;mt++){const rt=D[mt];nt=st[mt];for(let Ft=0,Ut=rt.length;Ft<Ut;Ft++){const R=O(rt[Ft],nt[Ft],Q);y?Et(R.x,R.y+x[h-1].y,x[h-1].x+et):Et(R.x,R.y,u+et)}}}q(),K();function q(){const tt=i.length/3;if(f){let Z=0,et=$*Z;for(let Q=0;Q<Wt;Q++){const mt=wt[Q];dt(mt[2]+et,mt[1]+et,mt[0]+et)}Z=h+m*2,et=$*Z;for(let Q=0;Q<Wt;Q++){const mt=wt[Q];dt(mt[0]+et,mt[1]+et,mt[2]+et)}}else{for(let Z=0;Z<Wt;Z++){const et=wt[Z];dt(et[2],et[1],et[0])}for(let Z=0;Z<Wt;Z++){const et=wt[Z];dt(et[0]+$*h,et[1]+$*h,et[2]+$*h)}}n.addGroup(tt,i.length/3-tt,0)}function K(){const tt=i.length/3;let Z=0;yt(U,Z),Z+=U.length;for(let et=0,Q=D.length;et<Q;et++){const mt=D[et];yt(mt,Z),Z+=mt.length}n.addGroup(tt,i.length/3-tt,1)}function yt(tt,Z){let et=tt.length;for(;--et>=0;){const Q=et;let mt=et-1;mt<0&&(mt=tt.length-1);for(let ot=0,rt=h+m*2;ot<rt;ot++){const Ft=$*ot,Ut=$*(ot+1),R=Z+Q+Ft,v=Z+mt+Ft,H=Z+mt+Ut,j=Z+Q+Ut;zt(R,v,H,j)}}}function Et(tt,Z,et){c.push(tt),c.push(Z),c.push(et)}function dt(tt,Z,et){Jt(tt),Jt(Z),Jt(et);const Q=i.length/3,mt=E.generateTopUV(n,i,Q-3,Q-2,Q-1);L(mt[0]),L(mt[1]),L(mt[2])}function zt(tt,Z,et,Q){Jt(tt),Jt(Z),Jt(Q),Jt(Z),Jt(et),Jt(Q);const mt=i.length/3,ot=E.generateSideWallUV(n,i,mt-6,mt-3,mt-2,mt-1);L(ot[0]),L(ot[1]),L(ot[3]),L(ot[1]),L(ot[2]),L(ot[3])}function Jt(tt){i.push(c[tt*3+0]),i.push(c[tt*3+1]),i.push(c[tt*3+2])}function L(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return nm(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new rc[i.type]().fromJSON(i)),new ra(n,t.options)}}const em={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new xt(r,a),new xt(o,c),new xt(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],g=t[i*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new xt(a,1-c),new xt(l,1-u),new xt(f,1-g),new xt(_,1-p)]:[new xt(o,1-c),new xt(h,1-u),new xt(d,1-g),new xt(m,1-p)]}};function nm(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class aa extends Uc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new aa(t.radius,t.detail)}}class fa extends Fe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=t/o,f=e/c,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const E=p*f-a;for(let x=0;x<l;x++){const y=x*u-r;g.push(y,-E,0),_.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<o;E++){const x=E+l*p,y=E+l*(p+1),b=E+1+l*(p+1),T=E+1+l*p;d.push(x,y,T),d.push(y,b,T)}this.setIndex(d),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fa(t.width,t.height,t.widthSegments,t.heightSegments)}}class Gs extends Fe{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let u=t;const f=(e-t)/i,d=new F,g=new xt;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const E=p+m,x=E,y=E+n+1,b=E+n+2,T=E+1;o.push(x,y,T),o.push(y,b,T)}}this.setIndex(o),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(l,3)),this.setAttribute("uv",new ue(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gs(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Jl extends nr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=du,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class im extends nr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sm extends nr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Uu extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class rm extends Uu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const eo=new ae,Zl=new F,Ql=new F;class am{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lc,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Zl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zl),Ql.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ql),e.updateMatrixWorld(),eo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eo,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(eo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class kc extends bu{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class om extends am{constructor(){super(new kc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cm extends Uu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new om}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class lm extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const th=new ae;class hm{constructor(t,e,n=0,i=1/0){this.ray=new _u(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Pc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return th.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(th),this}intersectObject(t,e=!0,n=[]){return lc(t,this,n,e),n.sort(eh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)lc(t[i],this,n,e);return n.sort(eh),n}}function eh(s,t){return s.distance-t.distance}function lc(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)lc(r[a],t,e,!0)}}function nh(s,t,e,n){const i=um(n);switch(e){case hu:return s*t;case Ec:return s*t/i.components*i.byteLength;case wc:return s*t/i.components*i.byteLength;case fu:return s*t*2/i.components*i.byteLength;case Tc:return s*t*2/i.components*i.byteLength;case uu:return s*t*3/i.components*i.byteLength;case xn:return s*t*4/i.components*i.byteLength;case Ac:return s*t*4/i.components*i.byteLength;case Wr:case Xr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Yr:case $r:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Lo:case Uo:return Math.max(s,16)*Math.max(t,8)/4;case Do:case Io:return Math.max(s,8)*Math.max(t,8)/2;case No:case Fo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ko:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case zo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Go:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Yo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case $o:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case qo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ko:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case jo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Jo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Zo:case Qo:case tc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ec:case nc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ic:case sc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function um(s){switch(s){case Rn:case au:return{byteLength:1,components:1};case Ws:case ou:case tr:return{byteLength:2,components:1};case bc:case Sc:return{byteLength:2,components:4};case wi:case Mc:case Tn:return{byteLength:4,components:1};case cu:case lu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vc);function Nu(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function fm(s){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var dm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pm=`#ifdef USE_ALPHAHASH
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
#endif`,mm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_m=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ym=`#ifdef USE_AOMAP
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
#endif`,vm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mm=`#ifdef USE_BATCHING
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
#endif`,bm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tm=`#ifdef USE_IRIDESCENCE
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
#endif`,Am=`#ifdef USE_BUMPMAP
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
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fm=`#define PI 3.141592653589793
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
} // validated`,km=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Om=`vec3 transformedNormal = objectNormal;
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
#endif`,Bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xm=`#ifdef USE_ENVMAP
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
#endif`,Ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$m=`#ifdef USE_ENVMAP
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
#endif`,qm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t0=`#ifdef USE_GRADIENTMAP
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
}`,e0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s0=`uniform bool receiveShadow;
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
#endif`,r0=`#ifdef USE_ENVMAP
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
#endif`,a0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h0=`PhysicalMaterial material;
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
#endif`,u0=`struct PhysicalMaterial {
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
}`,f0=`
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
#endif`,d0=`#if defined( RE_IndirectDiffuse )
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
#endif`,p0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,m0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,b0=`#if defined( USE_POINTS_UV )
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
#endif`,S0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C0=`#ifdef USE_MORPHTARGETS
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
#endif`,R0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,D0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,L0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,N0=`#ifdef USE_NORMALMAP
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
#endif`,F0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,G0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,J0=`float getShadowMask() {
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
}`,Z0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q0=`#ifdef USE_SKINNING
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
#endif`,tg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eg=`#ifdef USE_SKINNING
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
#endif`,ng=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ig=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ag=`#ifdef USE_TRANSMISSION
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
#endif`,og=`#ifdef USE_TRANSMISSION
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
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ug=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dg=`uniform sampler2D t2D;
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
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`#include <common>
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
}`,yg=`#if DEPTH_PACKING == 3200
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
}`,vg=`#define DISTANCE
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
}`,Mg=`#define DISTANCE
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
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`uniform float scale;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Tg=`#include <common>
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Cg=`#define LAMBERT
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
}`,Rg=`#define LAMBERT
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
}`,Pg=`#define MATCAP
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
}`,Dg=`#define MATCAP
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
}`,Lg=`#define NORMAL
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
}`,Ig=`#define NORMAL
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
}`,Ug=`#define PHONG
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
}`,Ng=`#define PHONG
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
}`,Fg=`#define STANDARD
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
}`,kg=`#define STANDARD
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
}`,Og=`#define TOON
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
}`,Bg=`#define TOON
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
}`,zg=`uniform float size;
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
}`,Hg=`uniform vec3 diffuse;
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
}`,Gg=`#include <common>
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
}`,Vg=`uniform vec3 color;
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
}`,Wg=`uniform float rotation;
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
}`,Xg=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:dm,alphahash_pars_fragment:pm,alphamap_fragment:mm,alphamap_pars_fragment:gm,alphatest_fragment:_m,alphatest_pars_fragment:xm,aomap_fragment:ym,aomap_pars_fragment:vm,batching_pars_vertex:Mm,batching_vertex:bm,begin_vertex:Sm,beginnormal_vertex:Em,bsdfs:wm,iridescence_fragment:Tm,bumpmap_pars_fragment:Am,clipping_planes_fragment:Cm,clipping_planes_pars_fragment:Rm,clipping_planes_pars_vertex:Pm,clipping_planes_vertex:Dm,color_fragment:Lm,color_pars_fragment:Im,color_pars_vertex:Um,color_vertex:Nm,common:Fm,cube_uv_reflection_fragment:km,defaultnormal_vertex:Om,displacementmap_pars_vertex:Bm,displacementmap_vertex:zm,emissivemap_fragment:Hm,emissivemap_pars_fragment:Gm,colorspace_fragment:Vm,colorspace_pars_fragment:Wm,envmap_fragment:Xm,envmap_common_pars_fragment:Ym,envmap_pars_fragment:$m,envmap_pars_vertex:qm,envmap_physical_pars_fragment:r0,envmap_vertex:Km,fog_vertex:jm,fog_pars_vertex:Jm,fog_fragment:Zm,fog_pars_fragment:Qm,gradientmap_pars_fragment:t0,lightmap_pars_fragment:e0,lights_lambert_fragment:n0,lights_lambert_pars_fragment:i0,lights_pars_begin:s0,lights_toon_fragment:a0,lights_toon_pars_fragment:o0,lights_phong_fragment:c0,lights_phong_pars_fragment:l0,lights_physical_fragment:h0,lights_physical_pars_fragment:u0,lights_fragment_begin:f0,lights_fragment_maps:d0,lights_fragment_end:p0,logdepthbuf_fragment:m0,logdepthbuf_pars_fragment:g0,logdepthbuf_pars_vertex:_0,logdepthbuf_vertex:x0,map_fragment:y0,map_pars_fragment:v0,map_particle_fragment:M0,map_particle_pars_fragment:b0,metalnessmap_fragment:S0,metalnessmap_pars_fragment:E0,morphinstance_vertex:w0,morphcolor_vertex:T0,morphnormal_vertex:A0,morphtarget_pars_vertex:C0,morphtarget_vertex:R0,normal_fragment_begin:P0,normal_fragment_maps:D0,normal_pars_fragment:L0,normal_pars_vertex:I0,normal_vertex:U0,normalmap_pars_fragment:N0,clearcoat_normal_fragment_begin:F0,clearcoat_normal_fragment_maps:k0,clearcoat_pars_fragment:O0,iridescence_pars_fragment:B0,opaque_fragment:z0,packing:H0,premultiplied_alpha_fragment:G0,project_vertex:V0,dithering_fragment:W0,dithering_pars_fragment:X0,roughnessmap_fragment:Y0,roughnessmap_pars_fragment:$0,shadowmap_pars_fragment:q0,shadowmap_pars_vertex:K0,shadowmap_vertex:j0,shadowmask_pars_fragment:J0,skinbase_vertex:Z0,skinning_pars_vertex:Q0,skinning_vertex:tg,skinnormal_vertex:eg,specularmap_fragment:ng,specularmap_pars_fragment:ig,tonemapping_fragment:sg,tonemapping_pars_fragment:rg,transmission_fragment:ag,transmission_pars_fragment:og,uv_pars_fragment:cg,uv_pars_vertex:lg,uv_vertex:hg,worldpos_vertex:ug,background_vert:fg,background_frag:dg,backgroundCube_vert:pg,backgroundCube_frag:mg,cube_vert:gg,cube_frag:_g,depth_vert:xg,depth_frag:yg,distanceRGBA_vert:vg,distanceRGBA_frag:Mg,equirect_vert:bg,equirect_frag:Sg,linedashed_vert:Eg,linedashed_frag:wg,meshbasic_vert:Tg,meshbasic_frag:Ag,meshlambert_vert:Cg,meshlambert_frag:Rg,meshmatcap_vert:Pg,meshmatcap_frag:Dg,meshnormal_vert:Lg,meshnormal_frag:Ig,meshphong_vert:Ug,meshphong_frag:Ng,meshphysical_vert:Fg,meshphysical_frag:kg,meshtoon_vert:Og,meshtoon_frag:Bg,points_vert:zg,points_frag:Hg,shadow_vert:Gg,shadow_frag:Vg,sprite_vert:Wg,sprite_frag:Xg},vt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Sn={basic:{uniforms:Be([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Be([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Be([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Be([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Be([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Be([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Be([vt.points,vt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Be([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Be([vt.common,vt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Be([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Be([vt.sprite,vt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Be([vt.common,vt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Be([vt.lights,vt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Sn.physical={uniforms:Be([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const Ur={r:0,b:0,g:0},di=new Pn,Yg=new ae;function $g(s,t,e,n,i,r,a){const o=new Kt(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function _(x){let y=!1;const b=g(x);b===null?p(o,c):b&&b.isColor&&(p(b,1),y=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,y){const b=g(y);b&&(b.isCubeTexture||b.mapping===ha)?(h===void 0&&(h=new _e(new Ai(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:fs(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),di.copy(y.backgroundRotation),di.x*=-1,di.y*=-1,di.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Yg.makeRotationFromEuler(di)),h.material.toneMapped=ie.getTransfer(b.colorSpace)!==ce,(u!==b||f!==b.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,d=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new _e(new fa(2,2),new ri({name:"BackgroundMaterial",uniforms:fs(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ie.getTransfer(b.colorSpace)!==ce,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,d=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,y){x.getRGB(Ur,Mu(s)),n.buffers.color.setClear(Ur.r,Ur.g,Ur.b,y,a)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(o,c)},render:_,addToRenderList:m,dispose:E}}function qg(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(M,D,A,I,N){let U=!1;const O=u(I,A,D);r!==O&&(r=O,l(r.object)),U=d(M,I,A,N),U&&g(M,I,A,N),N!==null&&t.update(N,s.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,y(M,D,A,I),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,D,A){const I=A.wireframe===!0;let N=n[M.id];N===void 0&&(N={},n[M.id]=N);let U=N[D.id];U===void 0&&(U={},N[D.id]=U);let O=U[I];return O===void 0&&(O=f(c()),U[I]=O),O}function f(M){const D=[],A=[],I=[];for(let N=0;N<e;N++)D[N]=0,A[N]=0,I[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:A,attributeDivisors:I,object:M,attributes:{},index:null}}function d(M,D,A,I){const N=r.attributes,U=D.attributes;let O=0;const $=A.getAttributes();for(const G in $)if($[G].location>=0){const st=N[G];let nt=U[G];if(nt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(nt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(nt=M.instanceColor)),st===void 0||st.attribute!==nt||nt&&st.data!==nt.data)return!0;O++}return r.attributesNum!==O||r.index!==I}function g(M,D,A,I){const N={},U=D.attributes;let O=0;const $=A.getAttributes();for(const G in $)if($[G].location>=0){let st=U[G];st===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(st=M.instanceColor));const nt={};nt.attribute=st,st&&st.data&&(nt.data=st.data),N[G]=nt,O++}r.attributes=N,r.attributesNum=O,r.index=I}function _(){const M=r.newAttributes;for(let D=0,A=M.length;D<A;D++)M[D]=0}function m(M){p(M,0)}function p(M,D){const A=r.newAttributes,I=r.enabledAttributes,N=r.attributeDivisors;A[M]=1,I[M]===0&&(s.enableVertexAttribArray(M),I[M]=1),N[M]!==D&&(s.vertexAttribDivisor(M,D),N[M]=D)}function E(){const M=r.newAttributes,D=r.enabledAttributes;for(let A=0,I=D.length;A<I;A++)D[A]!==M[A]&&(s.disableVertexAttribArray(A),D[A]=0)}function x(M,D,A,I,N,U,O){O===!0?s.vertexAttribIPointer(M,D,A,N,U):s.vertexAttribPointer(M,D,A,I,N,U)}function y(M,D,A,I){_();const N=I.attributes,U=A.getAttributes(),O=D.defaultAttributeValues;for(const $ in U){const G=U[$];if(G.location>=0){let V=N[$];if(V===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(V=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(V=M.instanceColor)),V!==void 0){const st=V.normalized,nt=V.itemSize,gt=t.get(V);if(gt===void 0)continue;const wt=gt.buffer,Wt=gt.type,Ot=gt.bytesPerElement,q=Wt===s.INT||Wt===s.UNSIGNED_INT||V.gpuType===Mc;if(V.isInterleavedBufferAttribute){const K=V.data,yt=K.stride,Et=V.offset;if(K.isInstancedInterleavedBuffer){for(let dt=0;dt<G.locationSize;dt++)p(G.location+dt,K.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let dt=0;dt<G.locationSize;dt++)m(G.location+dt);s.bindBuffer(s.ARRAY_BUFFER,wt);for(let dt=0;dt<G.locationSize;dt++)x(G.location+dt,nt/G.locationSize,Wt,st,yt*Ot,(Et+nt/G.locationSize*dt)*Ot,q)}else{if(V.isInstancedBufferAttribute){for(let K=0;K<G.locationSize;K++)p(G.location+K,V.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let K=0;K<G.locationSize;K++)m(G.location+K);s.bindBuffer(s.ARRAY_BUFFER,wt);for(let K=0;K<G.locationSize;K++)x(G.location+K,nt/G.locationSize,Wt,st,nt*Ot,nt/G.locationSize*K*Ot,q)}}else if(O!==void 0){const st=O[$];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(G.location,st);break;case 3:s.vertexAttrib3fv(G.location,st);break;case 4:s.vertexAttrib4fv(G.location,st);break;default:s.vertexAttrib1fv(G.location,st)}}}}E()}function b(){P();for(const M in n){const D=n[M];for(const A in D){const I=D[A];for(const N in I)h(I[N].object),delete I[N];delete D[A]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const A in D){const I=D[A];for(const N in I)h(I[N].object),delete I[N];delete D[A]}delete n[M.id]}function C(M){for(const D in n){const A=n[D];if(A[M.id]===void 0)continue;const I=A[M.id];for(const N in I)h(I[N].object),delete I[N];delete A[M.id]}}function P(){S(),a=!0,r!==i&&(r=i,l(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function Kg(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function jg(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==xn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const P=C===tr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Rn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Tn&&!P)}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:b,maxSamples:T}}function Jg(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new gi,o=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const E=r?0:n,x=E*4;let y=p.clippingState||null;c.value=y,y=h(g,f,x,d);for(let b=0;b!==x;++b)y[b]=e[b];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=d;x!==_;++x,y+=4)a.copy(u[x]).applyMatrix4(E,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Zg(s){let t=new WeakMap;function e(a,o){return o===Ao?a.mapping=ls:o===Co&&(a.mapping=hs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ao||o===Co)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new gp(c.height);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ss=4,ih=[.125,.215,.35,.446,.526,.582],vi=20,no=new kc,sh=new Kt;let io=null,so=0,ro=0,ao=!1;const _i=(1+Math.sqrt(5))/2,Qi=1/_i,rh=[new F(-_i,Qi,0),new F(_i,Qi,0),new F(-Qi,0,_i),new F(Qi,0,_i),new F(0,_i,-Qi),new F(0,_i,Qi),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Qg=new F;class ah{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:o=Qg}=r;io=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(io,so,ro),this._renderer.xr.enabled=ao,t.scissorTest=!1,Nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ls||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),io=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:tr,format:xn,colorSpace:us,depthBuffer:!1},i=oh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=t_(r)),this._blurMaterial=e_(r,t,e)}return i}_compileMaterial(t){const e=new _e(this._lodPlanes[0],t);this._renderer.compile(e,no)}_sceneToCubeUV(t,e,n,i,r){const c=new gn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(sh),u.toneMapping=si,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const _=new yi({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),m=new _e(new Ai,_);let p=!1;const E=t.background;E?E.isColor&&(_.color.copy(E),t.background=null,p=!0):(_.color.copy(sh),p=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[x],r.y,r.z)):y===1?(c.up.set(0,0,l[x]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[x],r.z)):(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[x]));const b=this._cubeSize;Nr(i,y*b,x>2?b:0,b,b),u.setRenderTarget(i),p&&u.render(m,c),u.render(t,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=E}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ls||t.mapping===hs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ch());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new _e(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Nr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,no)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=rh[(i-r-1)%rh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new _e(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*vi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):vi;m>vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);const p=[];let E=0;for(let C=0;C<vi;++C){const P=C/_,S=Math.exp(-P*P/2);p.push(S),C===0?E+=S:C<m&&(E+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const y=this._sizeLods[i],b=3*y*(i>x-ss?i-x+ss:0),T=4*(this._cubeSize-y);Nr(e,b,T,3*y,2*y),c.setRenderTarget(e),c.render(u,no)}}function t_(s){const t=[],e=[],n=[];let i=s;const r=s-ss+1+ih.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-ss?c=ih[a-s+ss-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*d),x=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let T=0;T<d;T++){const C=T%3*2/3-1,P=T>2?0:-1,S=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];E.set(S,_*g*T),x.set(f,m*g*T);const M=[T,T,T,T,T,T];y.set(M,p*g*T)}const b=new Fe;b.setAttribute("position",new vn(E,_)),b.setAttribute("uv",new vn(x,m)),b.setAttribute("faceIndex",new vn(y,p)),t.push(b),i>ss&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function oh(s,t,e){const n=new Ti(s,t,e);return n.texture.mapping=ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Nr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function e_(s,t,e){const n=new Float32Array(vi),i=new F(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function ch(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function lh(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Oc(){return`

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
	`}function n_(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ao||c===Co,h=c===ls||c===hs;if(l||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new ah(s)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return l&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new ah(s)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function i_(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ks("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function s_(s,t,e,n){const i={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)t.update(f[d],s.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const E=d.array;_=d.version;for(let x=0,y=E.length;x<y;x+=3){const b=E[x+0],T=E[x+1],C=E[x+2];f.push(b,T,T,C,C,b)}}else if(g!==void 0){const E=g.array;_=g.version;for(let x=0,y=E.length/3-1;x<y;x+=3){const b=x+0,T=x+1,C=x+2;f.push(b,T,T,C,C,b)}}else return;const m=new(mu(f)?vu:yu)(f,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function r_(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*a),e.update(d,n,1)}function l(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*a,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=d[E]*_[E];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function a_(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function o_(s,t,e){const n=new WeakMap,i=new pe;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let M=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let b=o.attributes.position.count*y,T=1;b>t.maxTextureSize&&(T=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const C=new Float32Array(b*T*4*u),P=new gu(C,b,T,u);P.type=Tn,P.needsUpdate=!0;const S=y*4;for(let D=0;D<u;D++){const A=p[D],I=E[D],N=x[D],U=b*T*4*D;for(let O=0;O<A.count;O++){const $=O*S;g===!0&&(i.fromBufferAttribute(A,O),C[U+$+0]=i.x,C[U+$+1]=i.y,C[U+$+2]=i.z,C[U+$+3]=0),_===!0&&(i.fromBufferAttribute(I,O),C[U+$+4]=i.x,C[U+$+5]=i.y,C[U+$+6]=i.z,C[U+$+7]=0),m===!0&&(i.fromBufferAttribute(N,O),C[U+$+8]=i.x,C[U+$+9]=i.y,C[U+$+10]=i.z,C[U+$+11]=N.itemSize===4?i.w:1)}}f={count:u,texture:P,size:new xt(b,T)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function c_(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}const Fu=new He,hh=new Eu(1,1),ku=new gu,Ou=new Qd,Bu=new Su,uh=[],fh=[],dh=new Float32Array(16),ph=new Float32Array(9),mh=new Float32Array(4);function xs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=uh[i];if(r===void 0&&(r=new Float32Array(i),uh[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function we(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Te(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function da(s,t){let e=fh[t];e===void 0&&(e=new Int32Array(t),fh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function l_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function h_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2fv(this.addr,t),Te(e,t)}}function u_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;s.uniform3fv(this.addr,t),Te(e,t)}}function f_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4fv(this.addr,t),Te(e,t)}}function d_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;mh.set(n),s.uniformMatrix2fv(this.addr,!1,mh),Te(e,n)}}function p_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;ph.set(n),s.uniformMatrix3fv(this.addr,!1,ph),Te(e,n)}}function m_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;dh.set(n),s.uniformMatrix4fv(this.addr,!1,dh),Te(e,n)}}function g_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function __(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2iv(this.addr,t),Te(e,t)}}function x_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;s.uniform3iv(this.addr,t),Te(e,t)}}function y_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4iv(this.addr,t),Te(e,t)}}function v_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function M_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2uiv(this.addr,t),Te(e,t)}}function b_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;s.uniform3uiv(this.addr,t),Te(e,t)}}function S_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4uiv(this.addr,t),Te(e,t)}}function E_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(hh.compareFunction=pu,r=hh):r=Fu,e.setTexture2D(t||r,i)}function w_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ou,i)}function T_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Bu,i)}function A_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ku,i)}function C_(s){switch(s){case 5126:return l_;case 35664:return h_;case 35665:return u_;case 35666:return f_;case 35674:return d_;case 35675:return p_;case 35676:return m_;case 5124:case 35670:return g_;case 35667:case 35671:return __;case 35668:case 35672:return x_;case 35669:case 35673:return y_;case 5125:return v_;case 36294:return M_;case 36295:return b_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return E_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return T_;case 36289:case 36303:case 36311:case 36292:return A_}}function R_(s,t){s.uniform1fv(this.addr,t)}function P_(s,t){const e=xs(t,this.size,2);s.uniform2fv(this.addr,e)}function D_(s,t){const e=xs(t,this.size,3);s.uniform3fv(this.addr,e)}function L_(s,t){const e=xs(t,this.size,4);s.uniform4fv(this.addr,e)}function I_(s,t){const e=xs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function U_(s,t){const e=xs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function N_(s,t){const e=xs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function F_(s,t){s.uniform1iv(this.addr,t)}function k_(s,t){s.uniform2iv(this.addr,t)}function O_(s,t){s.uniform3iv(this.addr,t)}function B_(s,t){s.uniform4iv(this.addr,t)}function z_(s,t){s.uniform1uiv(this.addr,t)}function H_(s,t){s.uniform2uiv(this.addr,t)}function G_(s,t){s.uniform3uiv(this.addr,t)}function V_(s,t){s.uniform4uiv(this.addr,t)}function W_(s,t,e){const n=this.cache,i=t.length,r=da(e,i);we(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Fu,r[a])}function X_(s,t,e){const n=this.cache,i=t.length,r=da(e,i);we(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Ou,r[a])}function Y_(s,t,e){const n=this.cache,i=t.length,r=da(e,i);we(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Bu,r[a])}function $_(s,t,e){const n=this.cache,i=t.length,r=da(e,i);we(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||ku,r[a])}function q_(s){switch(s){case 5126:return R_;case 35664:return P_;case 35665:return D_;case 35666:return L_;case 35674:return I_;case 35675:return U_;case 35676:return N_;case 5124:case 35670:return F_;case 35667:case 35671:return k_;case 35668:case 35672:return O_;case 35669:case 35673:return B_;case 5125:return z_;case 36294:return H_;case 36295:return G_;case 36296:return V_;case 35678:case 36198:case 36298:case 36306:case 35682:return W_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return Y_;case 36289:case 36303:case 36311:case 36292:return $_}}class K_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=C_(e.type)}}class j_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=q_(e.type)}}class J_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const oo=/(\w+)(\])?(\[|\.)?/g;function gh(s,t){s.seq.push(t),s.map[t.id]=t}function Z_(s,t,e){const n=s.name,i=n.length;for(oo.lastIndex=0;;){const r=oo.exec(n),a=oo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){gh(e,l===void 0?new K_(o,s,t):new j_(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new J_(o),gh(e,u)),e=u}}}class qr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Z_(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function _h(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Q_=37297;let tx=0;function ex(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const xh=new $t;function nx(s){ie._getMatrix(xh,ie.workingColorSpace,s);const t=`mat3( ${xh.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(s)){case ea:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function yh(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+ex(s.getShaderSource(t),o)}else return r}function ix(s,t){const e=nx(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function sx(s,t){let e;switch(t){case dd:e="Linear";break;case pd:e="Reinhard";break;case md:e="Cineon";break;case su:e="ACESFilmic";break;case _d:e="AgX";break;case xd:e="Neutral";break;case gd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Fr=new F;function rx(){ie.getLuminanceCoefficients(Fr);const s=Fr.x.toFixed(4),t=Fr.y.toFixed(4),e=Fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ax(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function ox(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cx(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ls(s){return s!==""}function vh(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lx=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(s){return s.replace(lx,ux)}const hx=new Map;function ux(s,t){let e=qt[t];if(e===void 0){const n=hx.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return hc(e)}const fx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bh(s){return s.replace(fx,dx)}function dx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Sh(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function px(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===eu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===nu?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function mx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ls:case hs:t="ENVMAP_TYPE_CUBE";break;case ha:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gx(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===hs&&(t="ENVMAP_MODE_REFRACTION"),t}function _x(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case iu:t="ENVMAP_BLENDING_MULTIPLY";break;case ud:t="ENVMAP_BLENDING_MIX";break;case fd:t="ENVMAP_BLENDING_ADD";break}return t}function xx(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function yx(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=px(e),l=mx(e),h=gx(e),u=_x(e),f=xx(e),d=ax(e),g=ox(r),_=i.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ls).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ls).join(`
`),p.length>0&&(p+=`
`)):(m=[Sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),p=[Sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?qt.tonemapping_pars_fragment:"",e.toneMapping!==si?sx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,ix("linearToOutputTexel",e.outputColorSpace),rx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ls).join(`
`)),a=hc(a),a=vh(a,e),a=Mh(a,e),o=hc(o),o=vh(o,e),o=Mh(o,e),a=bh(a),o=bh(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===El?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===El?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=E+m+a,y=E+p+o,b=_h(i,i.VERTEX_SHADER,x),T=_h(i,i.FRAGMENT_SHADER,y);i.attachShader(_,b),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(D){if(s.debug.checkShaderErrors){const A=i.getProgramInfoLog(_)||"",I=i.getShaderInfoLog(b)||"",N=i.getShaderInfoLog(T)||"",U=A.trim(),O=I.trim(),$=N.trim();let G=!0,V=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,b,T);else{const st=yh(i,b,"vertex"),nt=yh(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+U+`
`+st+`
`+nt)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(O===""||$==="")&&(V=!1);V&&(D.diagnostics={runnable:G,programLog:U,vertexShader:{log:O,prefix:m},fragmentShader:{log:$,prefix:p}})}i.deleteShader(b),i.deleteShader(T),P=new qr(i,_),S=cx(i,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,Q_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=T,this}let vx=0;class Mx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new bx(t),e.set(t,n)),n}}class bx{constructor(t){this.id=vx++,this.code=t,this.usedTimes=0}}function Sx(s,t,e,n,i,r,a){const o=new Pc,c=new Mx,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,D,A,I){const N=A.fog,U=I.geometry,O=S.isMeshStandardMaterial?A.environment:null,$=(S.isMeshStandardMaterial?e:t).get(S.envMap||O),G=$&&$.mapping===ha?$.image.height:null,V=g[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const st=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,nt=st!==void 0?st.length:0;let gt=0;U.morphAttributes.position!==void 0&&(gt=1),U.morphAttributes.normal!==void 0&&(gt=2),U.morphAttributes.color!==void 0&&(gt=3);let wt,Wt,Ot,q;if(V){const se=Sn[V];wt=se.vertexShader,Wt=se.fragmentShader}else wt=S.vertexShader,Wt=S.fragmentShader,c.update(S),Ot=c.getVertexShaderID(S),q=c.getFragmentShaderID(S);const K=s.getRenderTarget(),yt=s.state.buffers.depth.getReversed(),Et=I.isInstancedMesh===!0,dt=I.isBatchedMesh===!0,zt=!!S.map,Jt=!!S.matcap,L=!!$,tt=!!S.aoMap,Z=!!S.lightMap,et=!!S.bumpMap,Q=!!S.normalMap,mt=!!S.displacementMap,ot=!!S.emissiveMap,rt=!!S.metalnessMap,Ft=!!S.roughnessMap,Ut=S.anisotropy>0,R=S.clearcoat>0,v=S.dispersion>0,H=S.iridescence>0,j=S.sheen>0,at=S.transmission>0,J=Ut&&!!S.anisotropyMap,Lt=R&&!!S.clearcoatMap,pt=R&&!!S.clearcoatNormalMap,Rt=R&&!!S.clearcoatRoughnessMap,Pt=H&&!!S.iridescenceMap,ct=H&&!!S.iridescenceThicknessMap,St=j&&!!S.sheenColorMap,Gt=j&&!!S.sheenRoughnessMap,It=!!S.specularMap,Mt=!!S.specularColorMap,Yt=!!S.specularIntensityMap,k=at&&!!S.transmissionMap,ft=at&&!!S.thicknessMap,_t=!!S.gradientMap,At=!!S.alphaMap,lt=S.alphaTest>0,it=!!S.alphaHash,Dt=!!S.extensions;let Xt=si;S.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Xt=s.toneMapping);const he={shaderID:V,shaderType:S.type,shaderName:S.name,vertexShader:wt,fragmentShader:Wt,defines:S.defines,customVertexShaderID:Ot,customFragmentShaderID:q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:dt,batchingColor:dt&&I._colorsTexture!==null,instancing:Et,instancingColor:Et&&I.instanceColor!==null,instancingMorph:Et&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?s.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:us,alphaToCoverage:!!S.alphaToCoverage,map:zt,matcap:Jt,envMap:L,envMapMode:L&&$.mapping,envMapCubeUVHeight:G,aoMap:tt,lightMap:Z,bumpMap:et,normalMap:Q,displacementMap:f&&mt,emissiveMap:ot,normalMapObjectSpace:Q&&S.normalMapType===bd,normalMapTangentSpace:Q&&S.normalMapType===du,metalnessMap:rt,roughnessMap:Ft,anisotropy:Ut,anisotropyMap:J,clearcoat:R,clearcoatMap:Lt,clearcoatNormalMap:pt,clearcoatRoughnessMap:Rt,dispersion:v,iridescence:H,iridescenceMap:Pt,iridescenceThicknessMap:ct,sheen:j,sheenColorMap:St,sheenRoughnessMap:Gt,specularMap:It,specularColorMap:Mt,specularIntensityMap:Yt,transmission:at,transmissionMap:k,thicknessMap:ft,gradientMap:_t,opaque:S.transparent===!1&&S.blending===as&&S.alphaToCoverage===!1,alphaMap:At,alphaTest:lt,alphaHash:it,combine:S.combine,mapUv:zt&&_(S.map.channel),aoMapUv:tt&&_(S.aoMap.channel),lightMapUv:Z&&_(S.lightMap.channel),bumpMapUv:et&&_(S.bumpMap.channel),normalMapUv:Q&&_(S.normalMap.channel),displacementMapUv:mt&&_(S.displacementMap.channel),emissiveMapUv:ot&&_(S.emissiveMap.channel),metalnessMapUv:rt&&_(S.metalnessMap.channel),roughnessMapUv:Ft&&_(S.roughnessMap.channel),anisotropyMapUv:J&&_(S.anisotropyMap.channel),clearcoatMapUv:Lt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:pt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:St&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&_(S.sheenRoughnessMap.channel),specularMapUv:It&&_(S.specularMap.channel),specularColorMapUv:Mt&&_(S.specularColorMap.channel),specularIntensityMapUv:Yt&&_(S.specularIntensityMap.channel),transmissionMapUv:k&&_(S.transmissionMap.channel),thicknessMapUv:ft&&_(S.thicknessMap.channel),alphaMapUv:At&&_(S.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Q||Ut),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!U.attributes.uv&&(zt||At),fog:!!N,useFog:S.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:yt,skinning:I.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:gt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:Xt,decodeVideoTexture:zt&&S.map.isVideoTexture===!0&&ie.getTransfer(S.map.colorSpace)===ce,decodeVideoTextureEmissive:ot&&S.emissiveMap.isVideoTexture===!0&&ie.getTransfer(S.emissiveMap.colorSpace)===ce,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===En,flipSided:S.side===Ye,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Dt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&S.extensions.multiDraw===!0||dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return he.vertexUv1s=l.has(1),he.vertexUv2s=l.has(2),he.vertexUv3s=l.has(3),l.clear(),he}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)M.push(D),M.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(E(M,S),x(M,S),M.push(s.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function E(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){const M=g[S.type];let D;if(M){const A=Sn[M];D=fp.clone(A.uniforms)}else D=S.uniforms;return D}function b(S,M){let D;for(let A=0,I=h.length;A<I;A++){const N=h[A];if(N.cacheKey===M){D=N,++D.usedTimes;break}}return D===void 0&&(D=new yx(s,M,S,r),h.push(D)),D}function T(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function C(S){c.remove(S)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:b,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:P}}function Ex(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function wx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Eh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function wh(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,d,g,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function c(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||wx),n.length>1&&n.sort(f||Eh),i.length>1&&i.sort(f||Eh)}function h(){for(let u=t,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function Tx(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new wh,s.set(n,[a])):i>=r.length?(a=new wh,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Ax(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Kt};break;case"SpotLight":e={position:new F,direction:new F,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new F,halfWidth:new F,halfHeight:new F};break}return s[t.id]=e,e}}}function Cx(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Rx=0;function Px(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Dx(s){const t=new Ax,e=Cx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);const i=new F,r=new ae,a=new ae;function o(l){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,E=0,x=0,y=0,b=0,T=0,C=0;l.sort(Px);for(let S=0,M=l.length;S<M;S++){const D=l[S],A=D.color,I=D.intensity,N=D.distance,U=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=A.r*I,u+=A.g*I,f+=A.b*I;else if(D.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(D.sh.coefficients[O],I);C++}else if(D.isDirectionalLight){const O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const $=D.shadow,G=e.get(D);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=U,n.directionalShadowMatrix[d]=D.shadow.matrix,E++}n.directional[d]=O,d++}else if(D.isSpotLight){const O=t.get(D);O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy(A).multiplyScalar(I),O.distance=N,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,n.spot[_]=O;const $=D.shadow;if(D.map&&(n.spotLightMap[b]=D.map,b++,$.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[_]=$.matrix,D.castShadow){const G=e.get(D);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=U,y++}_++}else if(D.isRectAreaLight){const O=t.get(D);O.color.copy(A).multiplyScalar(I),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=O,m++}else if(D.isPointLight){const O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),O.distance=D.distance,O.decay=D.decay,D.castShadow){const $=D.shadow,G=e.get(D);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,G.shadowCameraNear=$.camera.near,G.shadowCameraFar=$.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=D.shadow.matrix,x++}n.point[g]=O,g++}else if(D.isHemisphereLight){const O=t.get(D);O.skyColor.copy(D.color).multiplyScalar(I),O.groundColor.copy(D.groundColor).multiplyScalar(I),n.hemi[p]=O,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==E||P.numPointShadows!==x||P.numSpotShadows!==y||P.numSpotMaps!==b||P.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+b-T,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,P.directionalLength=d,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=E,P.numPointShadows=x,P.numSpotShadows=y,P.numSpotMaps=b,P.numLightProbes=C,n.version=Rx++)}function c(l,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const x=l[p];if(x.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(x.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Th(s){const t=new Dx(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Lx(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Th(s),t.set(i,[o])):r>=a.length?(o=new Th(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Ix=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ux=`uniform sampler2D shadow_pass;
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
}`;function Nx(s,t,e){let n=new Lc;const i=new xt,r=new xt,a=new pe,o=new im({depthPacking:Md}),c=new sm,l={},h=e.maxTextureSize,u={[Wn]:Ye,[Ye]:Wn,[En]:En},f=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:Ix,fragmentShader:Ux}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Fe;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _e(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eu;let p=this.type;this.render=function(T,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=s.getRenderTarget(),M=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),A=s.state;A.setBlending(ii),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);const I=p!==Hn&&this.type===Hn,N=p===Hn&&this.type!==Hn;for(let U=0,O=T.length;U<O;U++){const $=T[U],G=$.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const V=G.getFrameExtents();if(i.multiply(V),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/V.x),i.x=r.x*V.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/V.y),i.y=r.y*V.y,G.mapSize.y=r.y)),G.map===null||I===!0||N===!0){const nt=this.type!==Hn?{minFilter:tn,magFilter:tn}:{};G.map!==null&&G.map.dispose(),G.map=new Ti(i.x,i.y,nt),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const st=G.getViewportCount();for(let nt=0;nt<st;nt++){const gt=G.getViewport(nt);a.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),A.viewport(a),G.updateMatrices($,nt),n=G.getFrustum(),y(C,P,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===Hn&&E(G,P),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,M,D)};function E(T,C){const P=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ti(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(C,null,P,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(C,null,P,d,_,null)}function x(T,C,P,S){let M=null;const D=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)M=D;else if(M=P.isPointLight===!0?c:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const A=M.uuid,I=C.uuid;let N=l[A];N===void 0&&(N={},l[A]=N);let U=N[I];U===void 0&&(U=M.clone(),N[I]=U,C.addEventListener("dispose",b)),M=U}if(M.visible=C.visible,M.wireframe=C.wireframe,S===Hn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const A=s.properties.get(M);A.light=P}return M}function y(T,C,P,S,M){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Hn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const I=t.update(T),N=T.material;if(Array.isArray(N)){const U=I.groups;for(let O=0,$=U.length;O<$;O++){const G=U[O],V=N[G.materialIndex];if(V&&V.visible){const st=x(T,V,S,M);T.onBeforeShadow(s,T,C,P,I,st,G),s.renderBufferDirect(P,null,I,st,T,G),T.onAfterShadow(s,T,C,P,I,st,G)}}}else if(N.visible){const U=x(T,N,S,M);T.onBeforeShadow(s,T,C,P,I,U,null),s.renderBufferDirect(P,null,I,U,T,null),T.onAfterShadow(s,T,C,P,I,U,null)}}const A=T.children;for(let I=0,N=A.length;I<N;I++)y(A[I],C,P,S,M)}function b(T){T.target.removeEventListener("dispose",b);for(const P in l){const S=l[P],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Fx={[Mo]:bo,[So]:ta,[Eo]:To,[cs]:wo,[bo]:Mo,[ta]:So,[To]:Eo,[wo]:cs};function kx(s,t){function e(){let k=!1;const ft=new pe;let _t=null;const At=new pe(0,0,0,0);return{setMask:function(lt){_t!==lt&&!k&&(s.colorMask(lt,lt,lt,lt),_t=lt)},setLocked:function(lt){k=lt},setClear:function(lt,it,Dt,Xt,he){he===!0&&(lt*=Xt,it*=Xt,Dt*=Xt),ft.set(lt,it,Dt,Xt),At.equals(ft)===!1&&(s.clearColor(lt,it,Dt,Xt),At.copy(ft))},reset:function(){k=!1,_t=null,At.set(-1,0,0,0)}}}function n(){let k=!1,ft=!1,_t=null,At=null,lt=null;return{setReversed:function(it){if(ft!==it){const Dt=t.get("EXT_clip_control");it?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),ft=it;const Xt=lt;lt=null,this.setClear(Xt)}},getReversed:function(){return ft},setTest:function(it){it?K(s.DEPTH_TEST):yt(s.DEPTH_TEST)},setMask:function(it){_t!==it&&!k&&(s.depthMask(it),_t=it)},setFunc:function(it){if(ft&&(it=Fx[it]),At!==it){switch(it){case Mo:s.depthFunc(s.NEVER);break;case bo:s.depthFunc(s.ALWAYS);break;case So:s.depthFunc(s.LESS);break;case cs:s.depthFunc(s.LEQUAL);break;case Eo:s.depthFunc(s.EQUAL);break;case wo:s.depthFunc(s.GEQUAL);break;case ta:s.depthFunc(s.GREATER);break;case To:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}At=it}},setLocked:function(it){k=it},setClear:function(it){lt!==it&&(ft&&(it=1-it),s.clearDepth(it),lt=it)},reset:function(){k=!1,_t=null,At=null,lt=null,ft=!1}}}function i(){let k=!1,ft=null,_t=null,At=null,lt=null,it=null,Dt=null,Xt=null,he=null;return{setTest:function(se){k||(se?K(s.STENCIL_TEST):yt(s.STENCIL_TEST))},setMask:function(se){ft!==se&&!k&&(s.stencilMask(se),ft=se)},setFunc:function(se,Un,Mn){(_t!==se||At!==Un||lt!==Mn)&&(s.stencilFunc(se,Un,Mn),_t=se,At=Un,lt=Mn)},setOp:function(se,Un,Mn){(it!==se||Dt!==Un||Xt!==Mn)&&(s.stencilOp(se,Un,Mn),it=se,Dt=Un,Xt=Mn)},setLocked:function(se){k=se},setClear:function(se){he!==se&&(s.clearStencil(se),he=se)},reset:function(){k=!1,ft=null,_t=null,At=null,lt=null,it=null,Dt=null,Xt=null,he=null}}}const r=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,x=null,y=null,b=null,T=null,C=new Kt(0,0,0),P=0,S=!1,M=null,D=null,A=null,I=null,N=null;const U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,$=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(G)[1]),O=$>=1):G.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),O=$>=2);let V=null,st={};const nt=s.getParameter(s.SCISSOR_BOX),gt=s.getParameter(s.VIEWPORT),wt=new pe().fromArray(nt),Wt=new pe().fromArray(gt);function Ot(k,ft,_t,At){const lt=new Uint8Array(4),it=s.createTexture();s.bindTexture(k,it),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Dt=0;Dt<_t;Dt++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(ft,0,s.RGBA,1,1,At,0,s.RGBA,s.UNSIGNED_BYTE,lt):s.texImage2D(ft+Dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,lt);return it}const q={};q[s.TEXTURE_2D]=Ot(s.TEXTURE_2D,s.TEXTURE_2D,1),q[s.TEXTURE_CUBE_MAP]=Ot(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[s.TEXTURE_2D_ARRAY]=Ot(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),q[s.TEXTURE_3D]=Ot(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(s.DEPTH_TEST),a.setFunc(cs),et(!1),Q(_l),K(s.CULL_FACE),tt(ii);function K(k){h[k]!==!0&&(s.enable(k),h[k]=!0)}function yt(k){h[k]!==!1&&(s.disable(k),h[k]=!1)}function Et(k,ft){return u[k]!==ft?(s.bindFramebuffer(k,ft),u[k]=ft,k===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ft),k===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ft),!0):!1}function dt(k,ft){let _t=d,At=!1;if(k){_t=f.get(ft),_t===void 0&&(_t=[],f.set(ft,_t));const lt=k.textures;if(_t.length!==lt.length||_t[0]!==s.COLOR_ATTACHMENT0){for(let it=0,Dt=lt.length;it<Dt;it++)_t[it]=s.COLOR_ATTACHMENT0+it;_t.length=lt.length,At=!0}}else _t[0]!==s.BACK&&(_t[0]=s.BACK,At=!0);At&&s.drawBuffers(_t)}function zt(k){return g!==k?(s.useProgram(k),g=k,!0):!1}const Jt={[xi]:s.FUNC_ADD,[qf]:s.FUNC_SUBTRACT,[Kf]:s.FUNC_REVERSE_SUBTRACT};Jt[jf]=s.MIN,Jt[Jf]=s.MAX;const L={[Zf]:s.ZERO,[Qf]:s.ONE,[td]:s.SRC_COLOR,[yo]:s.SRC_ALPHA,[ad]:s.SRC_ALPHA_SATURATE,[sd]:s.DST_COLOR,[nd]:s.DST_ALPHA,[ed]:s.ONE_MINUS_SRC_COLOR,[vo]:s.ONE_MINUS_SRC_ALPHA,[rd]:s.ONE_MINUS_DST_COLOR,[id]:s.ONE_MINUS_DST_ALPHA,[od]:s.CONSTANT_COLOR,[cd]:s.ONE_MINUS_CONSTANT_COLOR,[ld]:s.CONSTANT_ALPHA,[hd]:s.ONE_MINUS_CONSTANT_ALPHA};function tt(k,ft,_t,At,lt,it,Dt,Xt,he,se){if(k===ii){_===!0&&(yt(s.BLEND),_=!1);return}if(_===!1&&(K(s.BLEND),_=!0),k!==$f){if(k!==m||se!==S){if((p!==xi||y!==xi)&&(s.blendEquation(s.FUNC_ADD),p=xi,y=xi),se)switch(k){case as:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xl:s.blendFunc(s.ONE,s.ONE);break;case yl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case as:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case yl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}E=null,x=null,b=null,T=null,C.set(0,0,0),P=0,m=k,S=se}return}lt=lt||ft,it=it||_t,Dt=Dt||At,(ft!==p||lt!==y)&&(s.blendEquationSeparate(Jt[ft],Jt[lt]),p=ft,y=lt),(_t!==E||At!==x||it!==b||Dt!==T)&&(s.blendFuncSeparate(L[_t],L[At],L[it],L[Dt]),E=_t,x=At,b=it,T=Dt),(Xt.equals(C)===!1||he!==P)&&(s.blendColor(Xt.r,Xt.g,Xt.b,he),C.copy(Xt),P=he),m=k,S=!1}function Z(k,ft){k.side===En?yt(s.CULL_FACE):K(s.CULL_FACE);let _t=k.side===Ye;ft&&(_t=!_t),et(_t),k.blending===as&&k.transparent===!1?tt(ii):tt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);const At=k.stencilWrite;o.setTest(At),At&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ot(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?K(s.SAMPLE_ALPHA_TO_COVERAGE):yt(s.SAMPLE_ALPHA_TO_COVERAGE)}function et(k){M!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),M=k)}function Q(k){k!==Xf?(K(s.CULL_FACE),k!==D&&(k===_l?s.cullFace(s.BACK):k===Yf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):yt(s.CULL_FACE),D=k}function mt(k){k!==A&&(O&&s.lineWidth(k),A=k)}function ot(k,ft,_t){k?(K(s.POLYGON_OFFSET_FILL),(I!==ft||N!==_t)&&(s.polygonOffset(ft,_t),I=ft,N=_t)):yt(s.POLYGON_OFFSET_FILL)}function rt(k){k?K(s.SCISSOR_TEST):yt(s.SCISSOR_TEST)}function Ft(k){k===void 0&&(k=s.TEXTURE0+U-1),V!==k&&(s.activeTexture(k),V=k)}function Ut(k,ft,_t){_t===void 0&&(V===null?_t=s.TEXTURE0+U-1:_t=V);let At=st[_t];At===void 0&&(At={type:void 0,texture:void 0},st[_t]=At),(At.type!==k||At.texture!==ft)&&(V!==_t&&(s.activeTexture(_t),V=_t),s.bindTexture(k,ft||q[k]),At.type=k,At.texture=ft)}function R(){const k=st[V];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function v(){try{s.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function H(){try{s.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function j(){try{s.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function at(){try{s.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{s.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Lt(){try{s.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pt(){try{s.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{s.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{s.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ct(){try{s.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(k){wt.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),wt.copy(k))}function Gt(k){Wt.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Wt.copy(k))}function It(k,ft){let _t=l.get(ft);_t===void 0&&(_t=new WeakMap,l.set(ft,_t));let At=_t.get(k);At===void 0&&(At=s.getUniformBlockIndex(ft,k.name),_t.set(k,At))}function Mt(k,ft){const At=l.get(ft).get(k);c.get(ft)!==At&&(s.uniformBlockBinding(ft,At,k.__bindingPointIndex),c.set(ft,At))}function Yt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},V=null,st={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,x=null,y=null,b=null,T=null,C=new Kt(0,0,0),P=0,S=!1,M=null,D=null,A=null,I=null,N=null,wt.set(0,0,s.canvas.width,s.canvas.height),Wt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:yt,bindFramebuffer:Et,drawBuffers:dt,useProgram:zt,setBlending:tt,setMaterial:Z,setFlipSided:et,setCullFace:Q,setLineWidth:mt,setPolygonOffset:ot,setScissorTest:rt,activeTexture:Ft,bindTexture:Ut,unbindTexture:R,compressedTexImage2D:v,compressedTexImage3D:H,texImage2D:Pt,texImage3D:ct,updateUBOMapping:It,uniformBlockBinding:Mt,texStorage2D:pt,texStorage3D:Rt,texSubImage2D:j,texSubImage3D:at,compressedTexSubImage2D:J,compressedTexSubImage3D:Lt,scissor:St,viewport:Gt,reset:Yt}}function Ox(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,v){return d?new OffscreenCanvas(R,v):ia("canvas")}function _(R,v,H){let j=1;const at=Ut(R);if((at.width>H||at.height>H)&&(j=H/Math.max(at.width,at.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(j*at.width),Lt=Math.floor(j*at.height);u===void 0&&(u=g(J,Lt));const pt=v?g(J,Lt):u;return pt.width=J,pt.height=Lt,pt.getContext("2d").drawImage(R,0,0,J,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+J+"x"+Lt+")."),pt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(R,v,H,j,at=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=v;if(v===s.RED&&(H===s.FLOAT&&(J=s.R32F),H===s.HALF_FLOAT&&(J=s.R16F),H===s.UNSIGNED_BYTE&&(J=s.R8)),v===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(J=s.R8UI),H===s.UNSIGNED_SHORT&&(J=s.R16UI),H===s.UNSIGNED_INT&&(J=s.R32UI),H===s.BYTE&&(J=s.R8I),H===s.SHORT&&(J=s.R16I),H===s.INT&&(J=s.R32I)),v===s.RG&&(H===s.FLOAT&&(J=s.RG32F),H===s.HALF_FLOAT&&(J=s.RG16F),H===s.UNSIGNED_BYTE&&(J=s.RG8)),v===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(J=s.RG8UI),H===s.UNSIGNED_SHORT&&(J=s.RG16UI),H===s.UNSIGNED_INT&&(J=s.RG32UI),H===s.BYTE&&(J=s.RG8I),H===s.SHORT&&(J=s.RG16I),H===s.INT&&(J=s.RG32I)),v===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(J=s.RGB8UI),H===s.UNSIGNED_SHORT&&(J=s.RGB16UI),H===s.UNSIGNED_INT&&(J=s.RGB32UI),H===s.BYTE&&(J=s.RGB8I),H===s.SHORT&&(J=s.RGB16I),H===s.INT&&(J=s.RGB32I)),v===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),H===s.UNSIGNED_INT&&(J=s.RGBA32UI),H===s.BYTE&&(J=s.RGBA8I),H===s.SHORT&&(J=s.RGBA16I),H===s.INT&&(J=s.RGBA32I)),v===s.RGB&&(H===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(J=s.R11F_G11F_B10F)),v===s.RGBA){const Lt=at?ea:ie.getTransfer(j);H===s.FLOAT&&(J=s.RGBA32F),H===s.HALF_FLOAT&&(J=s.RGBA16F),H===s.UNSIGNED_BYTE&&(J=Lt===ce?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function y(R,v){let H;return R?v===null||v===wi||v===Xs?H=s.DEPTH24_STENCIL8:v===Tn?H=s.DEPTH32F_STENCIL8:v===Ws&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===wi||v===Xs?H=s.DEPTH_COMPONENT24:v===Tn?H=s.DEPTH_COMPONENT32F:v===Ws&&(H=s.DEPTH_COMPONENT16),H}function b(R,v){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==tn&&R.minFilter!==wn?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function T(R){const v=R.target;v.removeEventListener("dispose",T),P(v),v.isVideoTexture&&h.delete(v)}function C(R){const v=R.target;v.removeEventListener("dispose",C),M(v)}function P(R){const v=n.get(R);if(v.__webglInit===void 0)return;const H=R.source,j=f.get(H);if(j){const at=j[v.__cacheKey];at.usedTimes--,at.usedTimes===0&&S(R),Object.keys(j).length===0&&f.delete(H)}n.remove(R)}function S(R){const v=n.get(R);s.deleteTexture(v.__webglTexture);const H=R.source,j=f.get(H);delete j[v.__cacheKey],a.memory.textures--}function M(R){const v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let at=0;at<v.__webglFramebuffer[j].length;at++)s.deleteFramebuffer(v.__webglFramebuffer[j][at]);else s.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)s.deleteFramebuffer(v.__webglFramebuffer[j]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const H=R.textures;for(let j=0,at=H.length;j<at;j++){const J=n.get(H[j]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(H[j])}n.remove(R)}let D=0;function A(){D=0}function I(){const R=D;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),D+=1,R}function N(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function U(R,v){const H=n.get(R);if(R.isVideoTexture&&rt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){const j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(H,R,v);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+v)}function O(R,v){const H=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){q(H,R,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+v)}function $(R,v){const H=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){q(H,R,v);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+v)}function G(R,v){const H=n.get(R);if(R.version>0&&H.__version!==R.version){K(H,R,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+v)}const V={[Ro]:s.REPEAT,[bi]:s.CLAMP_TO_EDGE,[Po]:s.MIRRORED_REPEAT},st={[tn]:s.NEAREST,[yd]:s.NEAREST_MIPMAP_NEAREST,[ur]:s.NEAREST_MIPMAP_LINEAR,[wn]:s.LINEAR,[Ca]:s.LINEAR_MIPMAP_NEAREST,[Si]:s.LINEAR_MIPMAP_LINEAR},nt={[Sd]:s.NEVER,[Rd]:s.ALWAYS,[Ed]:s.LESS,[pu]:s.LEQUAL,[wd]:s.EQUAL,[Cd]:s.GEQUAL,[Td]:s.GREATER,[Ad]:s.NOTEQUAL};function gt(R,v){if(v.type===Tn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===wn||v.magFilter===Ca||v.magFilter===ur||v.magFilter===Si||v.minFilter===wn||v.minFilter===Ca||v.minFilter===ur||v.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,V[v.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,V[v.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,V[v.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,st[v.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,st[v.minFilter]),v.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,nt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===tn||v.minFilter!==ur&&v.minFilter!==Si||v.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function wt(R,v){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",T));const j=v.source;let at=f.get(j);at===void 0&&(at={},f.set(j,at));const J=N(v);if(J!==R.__cacheKey){at[J]===void 0&&(at[J]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),at[J].usedTimes++;const Lt=at[R.__cacheKey];Lt!==void 0&&(at[R.__cacheKey].usedTimes--,Lt.usedTimes===0&&S(v)),R.__cacheKey=J,R.__webglTexture=at[J].texture}return H}function Wt(R,v,H){return Math.floor(Math.floor(R/H)/v)}function Ot(R,v,H,j){const J=R.updateRanges;if(J.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,H,j,v.data);else{J.sort((ct,St)=>ct.start-St.start);let Lt=0;for(let ct=1;ct<J.length;ct++){const St=J[Lt],Gt=J[ct],It=St.start+St.count,Mt=Wt(Gt.start,v.width,4),Yt=Wt(St.start,v.width,4);Gt.start<=It+1&&Mt===Yt&&Wt(Gt.start+Gt.count-1,v.width,4)===Mt?St.count=Math.max(St.count,Gt.start+Gt.count-St.start):(++Lt,J[Lt]=Gt)}J.length=Lt+1;const pt=s.getParameter(s.UNPACK_ROW_LENGTH),Rt=s.getParameter(s.UNPACK_SKIP_PIXELS),Pt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let ct=0,St=J.length;ct<St;ct++){const Gt=J[ct],It=Math.floor(Gt.start/4),Mt=Math.ceil(Gt.count/4),Yt=It%v.width,k=Math.floor(It/v.width),ft=Mt,_t=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Yt),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),e.texSubImage2D(s.TEXTURE_2D,0,Yt,k,ft,_t,H,j,v.data)}R.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,pt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Rt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Pt)}}function q(R,v,H){let j=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=s.TEXTURE_3D);const at=wt(R,v),J=v.source;e.bindTexture(j,R.__webglTexture,s.TEXTURE0+H);const Lt=n.get(J);if(J.version!==Lt.__version||at===!0){e.activeTexture(s.TEXTURE0+H);const pt=ie.getPrimaries(ie.workingColorSpace),Rt=v.colorSpace===ei?null:ie.getPrimaries(v.colorSpace),Pt=v.colorSpace===ei||pt===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let ct=_(v.image,!1,i.maxTextureSize);ct=Ft(v,ct);const St=r.convert(v.format,v.colorSpace),Gt=r.convert(v.type);let It=x(v.internalFormat,St,Gt,v.colorSpace,v.isVideoTexture);gt(j,v);let Mt;const Yt=v.mipmaps,k=v.isVideoTexture!==!0,ft=Lt.__version===void 0||at===!0,_t=J.dataReady,At=b(v,ct);if(v.isDepthTexture)It=y(v.format===$s,v.type),ft&&(k?e.texStorage2D(s.TEXTURE_2D,1,It,ct.width,ct.height):e.texImage2D(s.TEXTURE_2D,0,It,ct.width,ct.height,0,St,Gt,null));else if(v.isDataTexture)if(Yt.length>0){k&&ft&&e.texStorage2D(s.TEXTURE_2D,At,It,Yt[0].width,Yt[0].height);for(let lt=0,it=Yt.length;lt<it;lt++)Mt=Yt[lt],k?_t&&e.texSubImage2D(s.TEXTURE_2D,lt,0,0,Mt.width,Mt.height,St,Gt,Mt.data):e.texImage2D(s.TEXTURE_2D,lt,It,Mt.width,Mt.height,0,St,Gt,Mt.data);v.generateMipmaps=!1}else k?(ft&&e.texStorage2D(s.TEXTURE_2D,At,It,ct.width,ct.height),_t&&Ot(v,ct,St,Gt)):e.texImage2D(s.TEXTURE_2D,0,It,ct.width,ct.height,0,St,Gt,ct.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){k&&ft&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,It,Yt[0].width,Yt[0].height,ct.depth);for(let lt=0,it=Yt.length;lt<it;lt++)if(Mt=Yt[lt],v.format!==xn)if(St!==null)if(k){if(_t)if(v.layerUpdates.size>0){const Dt=nh(Mt.width,Mt.height,v.format,v.type);for(const Xt of v.layerUpdates){const he=Mt.data.subarray(Xt*Dt/Mt.data.BYTES_PER_ELEMENT,(Xt+1)*Dt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,Xt,Mt.width,Mt.height,1,St,he)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,0,Mt.width,Mt.height,ct.depth,St,Mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,lt,It,Mt.width,Mt.height,ct.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?_t&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,0,Mt.width,Mt.height,ct.depth,St,Gt,Mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,lt,It,Mt.width,Mt.height,ct.depth,0,St,Gt,Mt.data)}else{k&&ft&&e.texStorage2D(s.TEXTURE_2D,At,It,Yt[0].width,Yt[0].height);for(let lt=0,it=Yt.length;lt<it;lt++)Mt=Yt[lt],v.format!==xn?St!==null?k?_t&&e.compressedTexSubImage2D(s.TEXTURE_2D,lt,0,0,Mt.width,Mt.height,St,Mt.data):e.compressedTexImage2D(s.TEXTURE_2D,lt,It,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?_t&&e.texSubImage2D(s.TEXTURE_2D,lt,0,0,Mt.width,Mt.height,St,Gt,Mt.data):e.texImage2D(s.TEXTURE_2D,lt,It,Mt.width,Mt.height,0,St,Gt,Mt.data)}else if(v.isDataArrayTexture)if(k){if(ft&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,It,ct.width,ct.height,ct.depth),_t)if(v.layerUpdates.size>0){const lt=nh(ct.width,ct.height,v.format,v.type);for(const it of v.layerUpdates){const Dt=ct.data.subarray(it*lt/ct.data.BYTES_PER_ELEMENT,(it+1)*lt/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,it,ct.width,ct.height,1,St,Gt,Dt)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,St,Gt,ct.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,It,ct.width,ct.height,ct.depth,0,St,Gt,ct.data);else if(v.isData3DTexture)k?(ft&&e.texStorage3D(s.TEXTURE_3D,At,It,ct.width,ct.height,ct.depth),_t&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,St,Gt,ct.data)):e.texImage3D(s.TEXTURE_3D,0,It,ct.width,ct.height,ct.depth,0,St,Gt,ct.data);else if(v.isFramebufferTexture){if(ft)if(k)e.texStorage2D(s.TEXTURE_2D,At,It,ct.width,ct.height);else{let lt=ct.width,it=ct.height;for(let Dt=0;Dt<At;Dt++)e.texImage2D(s.TEXTURE_2D,Dt,It,lt,it,0,St,Gt,null),lt>>=1,it>>=1}}else if(Yt.length>0){if(k&&ft){const lt=Ut(Yt[0]);e.texStorage2D(s.TEXTURE_2D,At,It,lt.width,lt.height)}for(let lt=0,it=Yt.length;lt<it;lt++)Mt=Yt[lt],k?_t&&e.texSubImage2D(s.TEXTURE_2D,lt,0,0,St,Gt,Mt):e.texImage2D(s.TEXTURE_2D,lt,It,St,Gt,Mt);v.generateMipmaps=!1}else if(k){if(ft){const lt=Ut(ct);e.texStorage2D(s.TEXTURE_2D,At,It,lt.width,lt.height)}_t&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,St,Gt,ct)}else e.texImage2D(s.TEXTURE_2D,0,It,St,Gt,ct);m(v)&&p(j),Lt.__version=J.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function K(R,v,H){if(v.image.length!==6)return;const j=wt(R,v),at=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+H);const J=n.get(at);if(at.version!==J.__version||j===!0){e.activeTexture(s.TEXTURE0+H);const Lt=ie.getPrimaries(ie.workingColorSpace),pt=v.colorSpace===ei?null:ie.getPrimaries(v.colorSpace),Rt=v.colorSpace===ei||Lt===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const Pt=v.isCompressedTexture||v.image[0].isCompressedTexture,ct=v.image[0]&&v.image[0].isDataTexture,St=[];for(let it=0;it<6;it++)!Pt&&!ct?St[it]=_(v.image[it],!0,i.maxCubemapSize):St[it]=ct?v.image[it].image:v.image[it],St[it]=Ft(v,St[it]);const Gt=St[0],It=r.convert(v.format,v.colorSpace),Mt=r.convert(v.type),Yt=x(v.internalFormat,It,Mt,v.colorSpace),k=v.isVideoTexture!==!0,ft=J.__version===void 0||j===!0,_t=at.dataReady;let At=b(v,Gt);gt(s.TEXTURE_CUBE_MAP,v);let lt;if(Pt){k&&ft&&e.texStorage2D(s.TEXTURE_CUBE_MAP,At,Yt,Gt.width,Gt.height);for(let it=0;it<6;it++){lt=St[it].mipmaps;for(let Dt=0;Dt<lt.length;Dt++){const Xt=lt[Dt];v.format!==xn?It!==null?k?_t&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Dt,0,0,Xt.width,Xt.height,It,Xt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Dt,Yt,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?_t&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Dt,0,0,Xt.width,Xt.height,It,Mt,Xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Dt,Yt,Xt.width,Xt.height,0,It,Mt,Xt.data)}}}else{if(lt=v.mipmaps,k&&ft){lt.length>0&&At++;const it=Ut(St[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,At,Yt,it.width,it.height)}for(let it=0;it<6;it++)if(ct){k?_t&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,St[it].width,St[it].height,It,Mt,St[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Yt,St[it].width,St[it].height,0,It,Mt,St[it].data);for(let Dt=0;Dt<lt.length;Dt++){const he=lt[Dt].image[it].image;k?_t&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Dt+1,0,0,he.width,he.height,It,Mt,he.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Dt+1,Yt,he.width,he.height,0,It,Mt,he.data)}}else{k?_t&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,It,Mt,St[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Yt,It,Mt,St[it]);for(let Dt=0;Dt<lt.length;Dt++){const Xt=lt[Dt];k?_t&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Dt+1,0,0,It,Mt,Xt.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Dt+1,Yt,It,Mt,Xt.image[it])}}}m(v)&&p(s.TEXTURE_CUBE_MAP),J.__version=at.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function yt(R,v,H,j,at,J){const Lt=r.convert(H.format,H.colorSpace),pt=r.convert(H.type),Rt=x(H.internalFormat,Lt,pt,H.colorSpace),Pt=n.get(v),ct=n.get(H);if(ct.__renderTarget=v,!Pt.__hasExternalTextures){const St=Math.max(1,v.width>>J),Gt=Math.max(1,v.height>>J);at===s.TEXTURE_3D||at===s.TEXTURE_2D_ARRAY?e.texImage3D(at,J,Rt,St,Gt,v.depth,0,Lt,pt,null):e.texImage2D(at,J,Rt,St,Gt,0,Lt,pt,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),ot(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,at,ct.__webglTexture,0,mt(v)):(at===s.TEXTURE_2D||at>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,at,ct.__webglTexture,J),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Et(R,v,H){if(s.bindRenderbuffer(s.RENDERBUFFER,R),v.depthBuffer){const j=v.depthTexture,at=j&&j.isDepthTexture?j.type:null,J=y(v.stencilBuffer,at),Lt=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=mt(v);ot(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,J,v.width,v.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,J,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,J,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Lt,s.RENDERBUFFER,R)}else{const j=v.textures;for(let at=0;at<j.length;at++){const J=j[at],Lt=r.convert(J.format,J.colorSpace),pt=r.convert(J.type),Rt=x(J.internalFormat,Lt,pt,J.colorSpace),Pt=mt(v);H&&ot(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt,Rt,v.width,v.height):ot(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pt,Rt,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Rt,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function dt(R,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(v.depthTexture);j.__renderTarget=v,(!j.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),U(v.depthTexture,0);const at=j.__webglTexture,J=mt(v);if(v.depthTexture.format===Ys)ot(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,at,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,at,0);else if(v.depthTexture.format===$s)ot(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,at,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function zt(R){const v=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),j){const at=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,j.removeEventListener("dispose",at)};j.addEventListener("dispose",at),v.__depthDisposeCallback=at}v.__boundDepthTexture=j}if(R.depthTexture&&!v.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const j=R.texture.mipmaps;j&&j.length>0?dt(v.__webglFramebuffer[0],R):dt(v.__webglFramebuffer,R)}else if(H){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]===void 0)v.__webglDepthbuffer[j]=s.createRenderbuffer(),Et(v.__webglDepthbuffer[j],R,!1);else{const at=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,at,s.RENDERBUFFER,J)}}else{const j=R.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),Et(v.__webglDepthbuffer,R,!1);else{const at=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,at,s.RENDERBUFFER,J)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Jt(R,v,H){const j=n.get(R);v!==void 0&&yt(j.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&zt(R)}function L(R){const v=R.texture,H=n.get(R),j=n.get(v);R.addEventListener("dispose",C);const at=R.textures,J=R.isWebGLCubeRenderTarget===!0,Lt=at.length>1;if(Lt||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=v.version,a.memory.textures++),J){H.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[pt]=[];for(let Rt=0;Rt<v.mipmaps.length;Rt++)H.__webglFramebuffer[pt][Rt]=s.createFramebuffer()}else H.__webglFramebuffer[pt]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let pt=0;pt<v.mipmaps.length;pt++)H.__webglFramebuffer[pt]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(Lt)for(let pt=0,Rt=at.length;pt<Rt;pt++){const Pt=n.get(at[pt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&ot(R)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let pt=0;pt<at.length;pt++){const Rt=at[pt];H.__webglColorRenderbuffer[pt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[pt]);const Pt=r.convert(Rt.format,Rt.colorSpace),ct=r.convert(Rt.type),St=x(Rt.internalFormat,Pt,ct,Rt.colorSpace,R.isXRRenderTarget===!0),Gt=mt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt,St,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,H.__webglColorRenderbuffer[pt])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),Et(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),gt(s.TEXTURE_CUBE_MAP,v);for(let pt=0;pt<6;pt++)if(v.mipmaps&&v.mipmaps.length>0)for(let Rt=0;Rt<v.mipmaps.length;Rt++)yt(H.__webglFramebuffer[pt][Rt],R,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Rt);else yt(H.__webglFramebuffer[pt],R,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(v)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let pt=0,Rt=at.length;pt<Rt;pt++){const Pt=at[pt],ct=n.get(Pt);let St=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(St=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(St,ct.__webglTexture),gt(St,Pt),yt(H.__webglFramebuffer,R,Pt,s.COLOR_ATTACHMENT0+pt,St,0),m(Pt)&&p(St)}e.unbindTexture()}else{let pt=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(pt,j.__webglTexture),gt(pt,v),v.mipmaps&&v.mipmaps.length>0)for(let Rt=0;Rt<v.mipmaps.length;Rt++)yt(H.__webglFramebuffer[Rt],R,v,s.COLOR_ATTACHMENT0,pt,Rt);else yt(H.__webglFramebuffer,R,v,s.COLOR_ATTACHMENT0,pt,0);m(v)&&p(pt),e.unbindTexture()}R.depthBuffer&&zt(R)}function tt(R){const v=R.textures;for(let H=0,j=v.length;H<j;H++){const at=v[H];if(m(at)){const J=E(R),Lt=n.get(at).__webglTexture;e.bindTexture(J,Lt),p(J),e.unbindTexture()}}}const Z=[],et=[];function Q(R){if(R.samples>0){if(ot(R)===!1){const v=R.textures,H=R.width,j=R.height;let at=s.COLOR_BUFFER_BIT;const J=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Lt=n.get(R),pt=v.length>1;if(pt)for(let Pt=0;Pt<v.length;Pt++)e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);const Rt=R.texture.mipmaps;Rt&&Rt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Pt=0;Pt<v.length;Pt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(at|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(at|=s.STENCIL_BUFFER_BIT)),pt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Lt.__webglColorRenderbuffer[Pt]);const ct=n.get(v[Pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ct,0)}s.blitFramebuffer(0,0,H,j,0,0,H,j,at,s.NEAREST),c===!0&&(Z.length=0,et.length=0,Z.push(s.COLOR_ATTACHMENT0+Pt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Z.push(J),et.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,et)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Z))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pt)for(let Pt=0;Pt<v.length;Pt++){e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.RENDERBUFFER,Lt.__webglColorRenderbuffer[Pt]);const ct=n.get(v[Pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.TEXTURE_2D,ct,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const v=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function mt(R){return Math.min(i.maxSamples,R.samples)}function ot(R){const v=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function rt(R){const v=a.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function Ft(R,v){const H=R.colorSpace,j=R.format,at=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==us&&H!==ei&&(ie.getTransfer(H)===ce?(j!==xn||at!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),v}function Ut(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=A,this.setTexture2D=U,this.setTexture2DArray=O,this.setTexture3D=$,this.setTextureCube=G,this.rebindTextures=Jt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=ot}function Bx(s,t){function e(n,i=ei){let r;const a=ie.getTransfer(i);if(n===Rn)return s.UNSIGNED_BYTE;if(n===bc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Sc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===cu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===lu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===au)return s.BYTE;if(n===ou)return s.SHORT;if(n===Ws)return s.UNSIGNED_SHORT;if(n===Mc)return s.INT;if(n===wi)return s.UNSIGNED_INT;if(n===Tn)return s.FLOAT;if(n===tr)return s.HALF_FLOAT;if(n===hu)return s.ALPHA;if(n===uu)return s.RGB;if(n===xn)return s.RGBA;if(n===Ys)return s.DEPTH_COMPONENT;if(n===$s)return s.DEPTH_STENCIL;if(n===Ec)return s.RED;if(n===wc)return s.RED_INTEGER;if(n===fu)return s.RG;if(n===Tc)return s.RG_INTEGER;if(n===Ac)return s.RGBA_INTEGER;if(n===Wr||n===Xr||n===Yr||n===$r)if(a===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Do||n===Lo||n===Io||n===Uo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Do)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===No||n===Fo||n===ko)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===No||n===Fo)return a===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ko)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Oo||n===Bo||n===zo||n===Ho||n===Go||n===Vo||n===Wo||n===Xo||n===Yo||n===$o||n===qo||n===Ko||n===jo||n===Jo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Oo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ho)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Go)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$o)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ko)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zo||n===Qo||n===tc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Zo)return a===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ec||n===nc||n===ic||n===sc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ec)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ic)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hx=`
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

}`;class Gx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new wu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ri({vertexShader:zx,fragmentShader:Hx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _e(new fa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vx extends gs{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Gx,p={},E=e.getContextAttributes();let x=null,y=null;const b=[],T=[],C=new xt;let P=null;const S=new gn;S.viewport=new pe;const M=new gn;M.viewport=new pe;const D=[S,M],A=new lm;let I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=b[q];return K===void 0&&(K=new ja,b[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=b[q];return K===void 0&&(K=new ja,b[q]=K),K.getGripSpace()},this.getHand=function(q){let K=b[q];return K===void 0&&(K=new ja,b[q]=K),K.getHandSpace()};function U(q){const K=T.indexOf(q.inputSource);if(K===-1)return;const yt=b[K];yt!==void 0&&(yt.update(q.inputSource,q.frame,l||a),yt.dispatchEvent({type:q.type,data:q.inputSource}))}function O(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",$);for(let q=0;q<b.length;q++){const K=T[q];K!==null&&(T[q]=null,b[q].disconnect(K))}I=null,N=null,m.reset();for(const q in p)delete p[q];t.setRenderTarget(x),d=null,f=null,u=null,i=null,y=null,Ot.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(x=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",O),i.addEventListener("inputsourceschange",$),E.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Et=null,dt=null;E.depth&&(dt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=E.stencil?$s:Ys,Et=E.stencil?Xs:wi);const zt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(zt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Ti(f.textureWidth,f.textureHeight,{format:xn,type:Rn,depthTexture:new Eu(f.textureWidth,f.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const yt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,yt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Ti(d.framebufferWidth,d.framebufferHeight,{format:xn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ot.setContext(i),Ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(q){for(let K=0;K<q.removed.length;K++){const yt=q.removed[K],Et=T.indexOf(yt);Et>=0&&(T[Et]=null,b[Et].disconnect(yt))}for(let K=0;K<q.added.length;K++){const yt=q.added[K];let Et=T.indexOf(yt);if(Et===-1){for(let zt=0;zt<b.length;zt++)if(zt>=T.length){T.push(yt),Et=zt;break}else if(T[zt]===null){T[zt]=yt,Et=zt;break}if(Et===-1)break}const dt=b[Et];dt&&dt.connect(yt)}}const G=new F,V=new F;function st(q,K,yt){G.setFromMatrixPosition(K.matrixWorld),V.setFromMatrixPosition(yt.matrixWorld);const Et=G.distanceTo(V),dt=K.projectionMatrix.elements,zt=yt.projectionMatrix.elements,Jt=dt[14]/(dt[10]-1),L=dt[14]/(dt[10]+1),tt=(dt[9]+1)/dt[5],Z=(dt[9]-1)/dt[5],et=(dt[8]-1)/dt[0],Q=(zt[8]+1)/zt[0],mt=Jt*et,ot=Jt*Q,rt=Et/(-et+Q),Ft=rt*-et;if(K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ft),q.translateZ(rt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),dt[10]===-1)q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Ut=Jt+rt,R=L+rt,v=mt-Ft,H=ot+(Et-Ft),j=tt*L/R*Ut,at=Z*L/R*Ut;q.projectionMatrix.makePerspective(v,H,j,at,Ut,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function nt(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let K=q.near,yt=q.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(yt=m.depthFar)),A.near=M.near=S.near=K,A.far=M.far=S.far=yt,(I!==A.near||N!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),I=A.near,N=A.far),A.layers.mask=q.layers.mask|6,S.layers.mask=A.layers.mask&3,M.layers.mask=A.layers.mask&5;const Et=q.parent,dt=A.cameras;nt(A,Et);for(let zt=0;zt<dt.length;zt++)nt(dt[zt],Et);dt.length===2?st(A,S,M):A.projectionMatrix.copy(S.projectionMatrix),gt(q,A,Et)};function gt(q,K,yt){yt===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(yt.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=qs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(A)},this.getCameraTexture=function(q){return p[q]};let wt=null;function Wt(q,K){if(h=K.getViewerPose(l||a),g=K,h!==null){const yt=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Et=!1;yt.length!==A.cameras.length&&(A.cameras.length=0,Et=!0);for(let L=0;L<yt.length;L++){const tt=yt[L];let Z=null;if(d!==null)Z=d.getViewport(tt);else{const Q=u.getViewSubImage(f,tt);Z=Q.viewport,L===0&&(t.setRenderTargetTextures(y,Q.colorTexture,Q.depthStencilTexture),t.setRenderTarget(y))}let et=D[L];et===void 0&&(et=new gn,et.layers.enable(L),et.viewport=new pe,D[L]=et),et.matrix.fromArray(tt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(tt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(Z.x,Z.y,Z.width,Z.height),L===0&&(A.matrix.copy(et.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Et===!0&&A.cameras.push(et)}const dt=i.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const L=u.getDepthInformation(yt[0]);L&&L.isValid&&L.texture&&m.init(L,i.renderState)}if(dt&&dt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let L=0;L<yt.length;L++){const tt=yt[L].camera;if(tt){let Z=p[tt];Z||(Z=new wu,p[tt]=Z);const et=u.getCameraImage(tt);Z.sourceTexture=et}}}}for(let yt=0;yt<b.length;yt++){const Et=T[yt],dt=b[yt];Et!==null&&dt!==void 0&&dt.update(Et,K,l||a)}wt&&wt(q,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const Ot=new Nu;Ot.setAnimationLoop(Wt),this.setAnimationLoop=function(q){wt=q},this.dispose=function(){}}}const pi=new Pn,Wx=new ae;function Xx(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Mu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,E,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,E,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ye&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ye&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),x=E.envMap,y=E.envMapRotation;x&&(m.envMap.value=x,pi.copy(y),pi.x*=-1,pi.y*=-1,pi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),m.envMapRotation.value.setFromMatrix4(Wx.makeRotationFromEuler(pi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ye&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Yx(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,x){const y=x.program;n.uniformBlockBinding(E,y)}function l(E,x){let y=i[E.id];y===void 0&&(g(E),y=h(E),i[E.id]=y,E.addEventListener("dispose",m));const b=x.program;n.updateUBOMapping(E,b);const T=t.render.frame;r[E.id]!==T&&(f(E),r[E.id]=T)}function h(E){const x=u();E.__bindingPointIndex=x;const y=s.createBuffer(),b=E.__size,T=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,b,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const x=i[E.id],y=E.uniforms,b=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let T=0,C=y.length;T<C;T++){const P=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,M=P.length;S<M;S++){const D=P[S];if(d(D,T,S,b)===!0){const A=D.__offset,I=Array.isArray(D.value)?D.value:[D.value];let N=0;for(let U=0;U<I.length;U++){const O=I[U],$=_(O);typeof O=="number"||typeof O=="boolean"?(D.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,A+N,D.__data)):O.isMatrix3?(D.__data[0]=O.elements[0],D.__data[1]=O.elements[1],D.__data[2]=O.elements[2],D.__data[3]=0,D.__data[4]=O.elements[3],D.__data[5]=O.elements[4],D.__data[6]=O.elements[5],D.__data[7]=0,D.__data[8]=O.elements[6],D.__data[9]=O.elements[7],D.__data[10]=O.elements[8],D.__data[11]=0):(O.toArray(D.__data,N),N+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,A,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(E,x,y,b){const T=E.value,C=x+"_"+y;if(b[C]===void 0)return typeof T=="number"||typeof T=="boolean"?b[C]=T:b[C]=T.clone(),!0;{const P=b[C];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return b[C]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(E){const x=E.uniforms;let y=0;const b=16;for(let C=0,P=x.length;C<P;C++){const S=Array.isArray(x[C])?x[C]:[x[C]];for(let M=0,D=S.length;M<D;M++){const A=S[M],I=Array.isArray(A.value)?A.value:[A.value];for(let N=0,U=I.length;N<U;N++){const O=I[N],$=_(O),G=y%b,V=G%$.boundary,st=G+V;y+=V,st!==0&&b-st<$.storage&&(y+=b-st),A.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=y,y+=$.storage}}}const T=y%b;return T>0&&(y+=b-T),E.__size=y,E.__cache={},this}function _(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function m(E){const x=E.target;x.removeEventListener("dispose",m);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const E in i)s.deleteBuffer(i[E]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}class $x{constructor(t={}){const{canvas:e=Yd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let b=!1;this._outputColorSpace=Ze;let T=0,C=0,P=null,S=-1,M=null;const D=new pe,A=new pe;let I=null;const N=new Kt(0);let U=0,O=e.width,$=e.height,G=1,V=null,st=null;const nt=new pe(0,0,O,$),gt=new pe(0,0,O,$);let wt=!1;const Wt=new Lc;let Ot=!1,q=!1;const K=new ae,yt=new F,Et=new pe,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function Jt(){return P===null?G:1}let L=n;function tt(w,B){return e.getContext(w,B)}try{const w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vc}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",lt,!1),L===null){const B="webgl2";if(L=tt(B,w),L===null)throw tt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Z,et,Q,mt,ot,rt,Ft,Ut,R,v,H,j,at,J,Lt,pt,Rt,Pt,ct,St,Gt,It,Mt,Yt;function k(){Z=new i_(L),Z.init(),It=new Bx(L,Z),et=new jg(L,Z,t,It),Q=new kx(L,Z),et.reversedDepthBuffer&&f&&Q.buffers.depth.setReversed(!0),mt=new a_(L),ot=new Ex,rt=new Ox(L,Z,Q,ot,et,It,mt),Ft=new Zg(y),Ut=new n_(y),R=new fm(L),Mt=new qg(L,R),v=new s_(L,R,mt,Mt),H=new c_(L,v,R,mt),ct=new o_(L,et,rt),pt=new Jg(ot),j=new Sx(y,Ft,Ut,Z,et,Mt,pt),at=new Xx(y,ot),J=new Tx,Lt=new Lx(Z),Pt=new $g(y,Ft,Ut,Q,H,d,c),Rt=new Nx(y,H,et),Yt=new Yx(L,mt,et,Q),St=new Kg(L,Z,mt),Gt=new r_(L,Z,mt),mt.programs=j.programs,y.capabilities=et,y.extensions=Z,y.properties=ot,y.renderLists=J,y.shadowMap=Rt,y.state=Q,y.info=mt}k();const ft=new Vx(y,L);this.xr=ft,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=Z.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Z.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(O,$,!1))},this.getSize=function(w){return w.set(O,$)},this.setSize=function(w,B,W=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,$=B,e.width=Math.floor(w*G),e.height=Math.floor(B*G),W===!0&&(e.style.width=w+"px",e.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(O*G,$*G).floor()},this.setDrawingBufferSize=function(w,B,W){O=w,$=B,G=W,e.width=Math.floor(w*W),e.height=Math.floor(B*W),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(nt)},this.setViewport=function(w,B,W,X){w.isVector4?nt.set(w.x,w.y,w.z,w.w):nt.set(w,B,W,X),Q.viewport(D.copy(nt).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(gt)},this.setScissor=function(w,B,W,X){w.isVector4?gt.set(w.x,w.y,w.z,w.w):gt.set(w,B,W,X),Q.scissor(A.copy(gt).multiplyScalar(G).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(w){Q.setScissorTest(wt=w)},this.setOpaqueSort=function(w){V=w},this.setTransparentSort=function(w){st=w},this.getClearColor=function(w){return w.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(w=!0,B=!0,W=!0){let X=0;if(w){let z=!1;if(P!==null){const ut=P.texture.format;z=ut===Ac||ut===Tc||ut===wc}if(z){const ut=P.texture.type,bt=ut===Rn||ut===wi||ut===Ws||ut===Xs||ut===bc||ut===Sc,Ct=Pt.getClearColor(),Tt=Pt.getClearAlpha(),Ht=Ct.r,Vt=Ct.g,Nt=Ct.b;bt?(g[0]=Ht,g[1]=Vt,g[2]=Nt,g[3]=Tt,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Ht,_[1]=Vt,_[2]=Nt,_[3]=Tt,L.clearBufferiv(L.COLOR,0,_))}else X|=L.COLOR_BUFFER_BIT}B&&(X|=L.DEPTH_BUFFER_BIT),W&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),Pt.dispose(),J.dispose(),Lt.dispose(),ot.dispose(),Ft.dispose(),Ut.dispose(),H.dispose(),Mt.dispose(),Yt.dispose(),j.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",Mn),ft.removeEventListener("sessionend",Wc),ai.stop()};function _t(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const w=mt.autoReset,B=Rt.enabled,W=Rt.autoUpdate,X=Rt.needsUpdate,z=Rt.type;k(),mt.autoReset=w,Rt.enabled=B,Rt.autoUpdate=W,Rt.needsUpdate=X,Rt.type=z}function lt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function it(w){const B=w.target;B.removeEventListener("dispose",it),Dt(B)}function Dt(w){Xt(w),ot.remove(w)}function Xt(w){const B=ot.get(w).programs;B!==void 0&&(B.forEach(function(W){j.releaseProgram(W)}),w.isShaderMaterial&&j.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,W,X,z,ut){B===null&&(B=dt);const bt=z.isMesh&&z.matrixWorld.determinant()<0,Ct=ef(w,B,W,X,z);Q.setMaterial(X,bt);let Tt=W.index,Ht=1;if(X.wireframe===!0){if(Tt=v.getWireframeAttribute(W),Tt===void 0)return;Ht=2}const Vt=W.drawRange,Nt=W.attributes.position;let Zt=Vt.start*Ht,oe=(Vt.start+Vt.count)*Ht;ut!==null&&(Zt=Math.max(Zt,ut.start*Ht),oe=Math.min(oe,(ut.start+ut.count)*Ht)),Tt!==null?(Zt=Math.max(Zt,0),oe=Math.min(oe,Tt.count)):Nt!=null&&(Zt=Math.max(Zt,0),oe=Math.min(oe,Nt.count));const ye=oe-Zt;if(ye<0||ye===1/0)return;Mt.setup(z,X,Ct,W,Tt);let fe,le=St;if(Tt!==null&&(fe=R.get(Tt),le=Gt,le.setIndex(fe)),z.isMesh)X.wireframe===!0?(Q.setLineWidth(X.wireframeLinewidth*Jt()),le.setMode(L.LINES)):le.setMode(L.TRIANGLES);else if(z.isLine){let kt=X.linewidth;kt===void 0&&(kt=1),Q.setLineWidth(kt*Jt()),z.isLineSegments?le.setMode(L.LINES):z.isLineLoop?le.setMode(L.LINE_LOOP):le.setMode(L.LINE_STRIP)}else z.isPoints?le.setMode(L.POINTS):z.isSprite&&le.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Ks("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),le.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))le.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const kt=z._multiDrawStarts,me=z._multiDrawCounts,ee=z._multiDrawCount,$e=Tt?R.get(Tt).bytesPerElement:1,Li=ot.get(X).currentProgram.getUniforms();for(let qe=0;qe<ee;qe++)Li.setValue(L,"_gl_DrawID",qe),le.render(kt[qe]/$e,me[qe])}else if(z.isInstancedMesh)le.renderInstances(Zt,ye,z.count);else if(W.isInstancedBufferGeometry){const kt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,me=Math.min(W.instanceCount,kt);le.renderInstances(Zt,ye,me)}else le.render(Zt,ye)};function he(w,B,W){w.transparent===!0&&w.side===En&&w.forceSinglePass===!1?(w.side=Ye,w.needsUpdate=!0,rr(w,B,W),w.side=Wn,w.needsUpdate=!0,rr(w,B,W),w.side=En):rr(w,B,W)}this.compile=function(w,B,W=null){W===null&&(W=w),p=Lt.get(W),p.init(B),x.push(p),W.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),w!==W&&w.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const X=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ut=z.material;if(ut)if(Array.isArray(ut))for(let bt=0;bt<ut.length;bt++){const Ct=ut[bt];he(Ct,W,z),X.add(Ct)}else he(ut,W,z),X.add(ut)}),p=x.pop(),X},this.compileAsync=function(w,B,W=null){const X=this.compile(w,B,W);return new Promise(z=>{function ut(){if(X.forEach(function(bt){ot.get(bt).currentProgram.isReady()&&X.delete(bt)}),X.size===0){z(w);return}setTimeout(ut,10)}Z.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let se=null;function Un(w){se&&se(w)}function Mn(){ai.stop()}function Wc(){ai.start()}const ai=new Nu;ai.setAnimationLoop(Un),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(w){se=w,ft.setAnimationLoop(w),w===null?ai.stop():ai.start()},ft.addEventListener("sessionstart",Mn),ft.addEventListener("sessionend",Wc),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(B),B=ft.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,B,P),p=Lt.get(w,x.length),p.init(B),x.push(p),K.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Wt.setFromProjectionMatrix(K,An,B.reversedDepth),q=this.localClippingEnabled,Ot=pt.init(this.clippingPlanes,q),m=J.get(w,E.length),m.init(),E.push(m),ft.enabled===!0&&ft.isPresenting===!0){const ut=y.xr.getDepthSensingMesh();ut!==null&&ga(ut,B,-1/0,y.sortObjects)}ga(w,B,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(V,st),zt=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,zt&&Pt.addToRenderList(m,w),this.info.render.frame++,Ot===!0&&pt.beginShadows();const W=p.state.shadowsArray;Rt.render(W,w,B),Ot===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,z=m.transmissive;if(p.setupLights(),B.isArrayCamera){const ut=B.cameras;if(z.length>0)for(let bt=0,Ct=ut.length;bt<Ct;bt++){const Tt=ut[bt];Yc(X,z,w,Tt)}zt&&Pt.render(w);for(let bt=0,Ct=ut.length;bt<Ct;bt++){const Tt=ut[bt];Xc(m,w,Tt,Tt.viewport)}}else z.length>0&&Yc(X,z,w,B),zt&&Pt.render(w),Xc(m,w,B);P!==null&&C===0&&(rt.updateMultisampleRenderTarget(P),rt.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(y,w,B),Mt.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],Ot===!0&&pt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function ga(w,B,W,X){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Wt.intersectsSprite(w)){X&&Et.setFromMatrixPosition(w.matrixWorld).applyMatrix4(K);const bt=H.update(w),Ct=w.material;Ct.visible&&m.push(w,bt,Ct,W,Et.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Wt.intersectsObject(w))){const bt=H.update(w),Ct=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Et.copy(w.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Et.copy(bt.boundingSphere.center)),Et.applyMatrix4(w.matrixWorld).applyMatrix4(K)),Array.isArray(Ct)){const Tt=bt.groups;for(let Ht=0,Vt=Tt.length;Ht<Vt;Ht++){const Nt=Tt[Ht],Zt=Ct[Nt.materialIndex];Zt&&Zt.visible&&m.push(w,bt,Zt,W,Et.z,Nt)}}else Ct.visible&&m.push(w,bt,Ct,W,Et.z,null)}}const ut=w.children;for(let bt=0,Ct=ut.length;bt<Ct;bt++)ga(ut[bt],B,W,X)}function Xc(w,B,W,X){const z=w.opaque,ut=w.transmissive,bt=w.transparent;p.setupLightsView(W),Ot===!0&&pt.setGlobalState(y.clippingPlanes,W),X&&Q.viewport(D.copy(X)),z.length>0&&sr(z,B,W),ut.length>0&&sr(ut,B,W),bt.length>0&&sr(bt,B,W),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Yc(w,B,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Ti(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?tr:Rn,minFilter:Si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const ut=p.state.transmissionRenderTarget[X.id],bt=X.viewport||D;ut.setSize(bt.z*y.transmissionResolutionScale,bt.w*y.transmissionResolutionScale);const Ct=y.getRenderTarget(),Tt=y.getActiveCubeFace(),Ht=y.getActiveMipmapLevel();y.setRenderTarget(ut),y.getClearColor(N),U=y.getClearAlpha(),U<1&&y.setClearColor(16777215,.5),y.clear(),zt&&Pt.render(W);const Vt=y.toneMapping;y.toneMapping=si;const Nt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),Ot===!0&&pt.setGlobalState(y.clippingPlanes,X),sr(w,W,X),rt.updateMultisampleRenderTarget(ut),rt.updateRenderTargetMipmap(ut),Z.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let oe=0,ye=B.length;oe<ye;oe++){const fe=B[oe],le=fe.object,kt=fe.geometry,me=fe.material,ee=fe.group;if(me.side===En&&le.layers.test(X.layers)){const $e=me.side;me.side=Ye,me.needsUpdate=!0,$c(le,W,X,kt,me,ee),me.side=$e,me.needsUpdate=!0,Zt=!0}}Zt===!0&&(rt.updateMultisampleRenderTarget(ut),rt.updateRenderTargetMipmap(ut))}y.setRenderTarget(Ct,Tt,Ht),y.setClearColor(N,U),Nt!==void 0&&(X.viewport=Nt),y.toneMapping=Vt}function sr(w,B,W){const X=B.isScene===!0?B.overrideMaterial:null;for(let z=0,ut=w.length;z<ut;z++){const bt=w[z],Ct=bt.object,Tt=bt.geometry,Ht=bt.group;let Vt=bt.material;Vt.allowOverride===!0&&X!==null&&(Vt=X),Ct.layers.test(W.layers)&&$c(Ct,B,W,Tt,Vt,Ht)}}function $c(w,B,W,X,z,ut){w.onBeforeRender(y,B,W,X,z,ut),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(y,B,W,X,w,ut),z.transparent===!0&&z.side===En&&z.forceSinglePass===!1?(z.side=Ye,z.needsUpdate=!0,y.renderBufferDirect(W,B,X,z,w,ut),z.side=Wn,z.needsUpdate=!0,y.renderBufferDirect(W,B,X,z,w,ut),z.side=En):y.renderBufferDirect(W,B,X,z,w,ut),w.onAfterRender(y,B,W,X,z,ut)}function rr(w,B,W){B.isScene!==!0&&(B=dt);const X=ot.get(w),z=p.state.lights,ut=p.state.shadowsArray,bt=z.state.version,Ct=j.getParameters(w,z.state,ut,B,W),Tt=j.getProgramCacheKey(Ct);let Ht=X.programs;X.environment=w.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(w.isMeshStandardMaterial?Ut:Ft).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Ht===void 0&&(w.addEventListener("dispose",it),Ht=new Map,X.programs=Ht);let Vt=Ht.get(Tt);if(Vt!==void 0){if(X.currentProgram===Vt&&X.lightsStateVersion===bt)return Kc(w,Ct),Vt}else Ct.uniforms=j.getUniforms(w),w.onBeforeCompile(Ct,y),Vt=j.acquireProgram(Ct,Tt),Ht.set(Tt,Vt),X.uniforms=Ct.uniforms;const Nt=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Nt.clippingPlanes=pt.uniform),Kc(w,Ct),X.needsLights=sf(w),X.lightsStateVersion=bt,X.needsLights&&(Nt.ambientLightColor.value=z.state.ambient,Nt.lightProbe.value=z.state.probe,Nt.directionalLights.value=z.state.directional,Nt.directionalLightShadows.value=z.state.directionalShadow,Nt.spotLights.value=z.state.spot,Nt.spotLightShadows.value=z.state.spotShadow,Nt.rectAreaLights.value=z.state.rectArea,Nt.ltc_1.value=z.state.rectAreaLTC1,Nt.ltc_2.value=z.state.rectAreaLTC2,Nt.pointLights.value=z.state.point,Nt.pointLightShadows.value=z.state.pointShadow,Nt.hemisphereLights.value=z.state.hemi,Nt.directionalShadowMap.value=z.state.directionalShadowMap,Nt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Nt.spotShadowMap.value=z.state.spotShadowMap,Nt.spotLightMatrix.value=z.state.spotLightMatrix,Nt.spotLightMap.value=z.state.spotLightMap,Nt.pointShadowMap.value=z.state.pointShadowMap,Nt.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=Vt,X.uniformsList=null,Vt}function qc(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=qr.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function Kc(w,B){const W=ot.get(w);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function ef(w,B,W,X,z){B.isScene!==!0&&(B=dt),rt.resetTextureUnits();const ut=B.fog,bt=X.isMeshStandardMaterial?B.environment:null,Ct=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:us,Tt=(X.isMeshStandardMaterial?Ut:Ft).get(X.envMap||bt),Ht=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Vt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Nt=!!W.morphAttributes.position,Zt=!!W.morphAttributes.normal,oe=!!W.morphAttributes.color;let ye=si;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ye=y.toneMapping);const fe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,le=fe!==void 0?fe.length:0,kt=ot.get(X),me=p.state.lights;if(Ot===!0&&(q===!0||w!==M)){const ke=w===M&&X.id===S;pt.setState(X,w,ke)}let ee=!1;X.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==me.state.version||kt.outputColorSpace!==Ct||z.isBatchedMesh&&kt.batching===!1||!z.isBatchedMesh&&kt.batching===!0||z.isBatchedMesh&&kt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&kt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&kt.instancing===!1||!z.isInstancedMesh&&kt.instancing===!0||z.isSkinnedMesh&&kt.skinning===!1||!z.isSkinnedMesh&&kt.skinning===!0||z.isInstancedMesh&&kt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&kt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&kt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&kt.instancingMorph===!1&&z.morphTexture!==null||kt.envMap!==Tt||X.fog===!0&&kt.fog!==ut||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==pt.numPlanes||kt.numIntersection!==pt.numIntersection)||kt.vertexAlphas!==Ht||kt.vertexTangents!==Vt||kt.morphTargets!==Nt||kt.morphNormals!==Zt||kt.morphColors!==oe||kt.toneMapping!==ye||kt.morphTargetsCount!==le)&&(ee=!0):(ee=!0,kt.__version=X.version);let $e=kt.currentProgram;ee===!0&&($e=rr(X,B,z));let Li=!1,qe=!1,vs=!1;const ge=$e.getUniforms(),en=kt.uniforms;if(Q.useProgram($e.program)&&(Li=!0,qe=!0,vs=!0),X.id!==S&&(S=X.id,qe=!0),Li||M!==w){Q.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ge.setValue(L,"projectionMatrix",w.projectionMatrix),ge.setValue(L,"viewMatrix",w.matrixWorldInverse);const Ge=ge.map.cameraPosition;Ge!==void 0&&Ge.setValue(L,yt.setFromMatrixPosition(w.matrixWorld)),et.logarithmicDepthBuffer&&ge.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ge.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,qe=!0,vs=!0)}if(z.isSkinnedMesh){ge.setOptional(L,z,"bindMatrix"),ge.setOptional(L,z,"bindMatrixInverse");const ke=z.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),ge.setValue(L,"boneTexture",ke.boneTexture,rt))}z.isBatchedMesh&&(ge.setOptional(L,z,"batchingTexture"),ge.setValue(L,"batchingTexture",z._matricesTexture,rt),ge.setOptional(L,z,"batchingIdTexture"),ge.setValue(L,"batchingIdTexture",z._indirectTexture,rt),ge.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&ge.setValue(L,"batchingColorTexture",z._colorsTexture,rt));const nn=W.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&ct.update(z,W,$e),(qe||kt.receiveShadow!==z.receiveShadow)&&(kt.receiveShadow=z.receiveShadow,ge.setValue(L,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(en.envMap.value=Tt,en.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&(en.envMapIntensity.value=B.environmentIntensity),qe&&(ge.setValue(L,"toneMappingExposure",y.toneMappingExposure),kt.needsLights&&nf(en,vs),ut&&X.fog===!0&&at.refreshFogUniforms(en,ut),at.refreshMaterialUniforms(en,X,G,$,p.state.transmissionRenderTarget[w.id]),qr.upload(L,qc(kt),en,rt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(qr.upload(L,qc(kt),en,rt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ge.setValue(L,"center",z.center),ge.setValue(L,"modelViewMatrix",z.modelViewMatrix),ge.setValue(L,"normalMatrix",z.normalMatrix),ge.setValue(L,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const ke=X.uniformsGroups;for(let Ge=0,_a=ke.length;Ge<_a;Ge++){const oi=ke[Ge];Yt.update(oi,$e),Yt.bind(oi,$e)}}return $e}function nf(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function sf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,B,W){const X=ot.get(w);X.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),ot.get(w.texture).__webglTexture=B,ot.get(w.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,B){const W=ot.get(w);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0};const rf=L.createFramebuffer();this.setRenderTarget=function(w,B=0,W=0){P=w,T=B,C=W;let X=!0,z=null,ut=!1,bt=!1;if(w){const Tt=ot.get(w);if(Tt.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(L.FRAMEBUFFER,null),X=!1;else if(Tt.__webglFramebuffer===void 0)rt.setupRenderTarget(w);else if(Tt.__hasExternalTextures)rt.rebindTextures(w,ot.get(w.texture).__webglTexture,ot.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Nt=w.depthTexture;if(Tt.__boundDepthTexture!==Nt){if(Nt!==null&&ot.has(Nt)&&(w.width!==Nt.image.width||w.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(w)}}const Ht=w.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(bt=!0);const Vt=ot.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Vt[B])?z=Vt[B][W]:z=Vt[B],ut=!0):w.samples>0&&rt.useMultisampledRTT(w)===!1?z=ot.get(w).__webglMultisampledFramebuffer:Array.isArray(Vt)?z=Vt[W]:z=Vt,D.copy(w.viewport),A.copy(w.scissor),I=w.scissorTest}else D.copy(nt).multiplyScalar(G).floor(),A.copy(gt).multiplyScalar(G).floor(),I=wt;if(W!==0&&(z=rf),Q.bindFramebuffer(L.FRAMEBUFFER,z)&&X&&Q.drawBuffers(w,z),Q.viewport(D),Q.scissor(A),Q.setScissorTest(I),ut){const Tt=ot.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,Tt.__webglTexture,W)}else if(bt){const Tt=B;for(let Ht=0;Ht<w.textures.length;Ht++){const Vt=ot.get(w.textures[Ht]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ht,Vt.__webglTexture,W,Tt)}}else if(w!==null&&W!==0){const Tt=ot.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Tt.__webglTexture,W)}S=-1},this.readRenderTargetPixels=function(w,B,W,X,z,ut,bt,Ct=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=ot.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&bt!==void 0&&(Tt=Tt[bt]),Tt){Q.bindFramebuffer(L.FRAMEBUFFER,Tt);try{const Ht=w.textures[Ct],Vt=Ht.format,Nt=Ht.type;if(!et.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-X&&W>=0&&W<=w.height-z&&(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ct),L.readPixels(B,W,X,z,It.convert(Vt),It.convert(Nt),ut))}finally{const Ht=P!==null?ot.get(P).__webglFramebuffer:null;Q.bindFramebuffer(L.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(w,B,W,X,z,ut,bt,Ct=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=ot.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&bt!==void 0&&(Tt=Tt[bt]),Tt)if(B>=0&&B<=w.width-X&&W>=0&&W<=w.height-z){Q.bindFramebuffer(L.FRAMEBUFFER,Tt);const Ht=w.textures[Ct],Vt=Ht.format,Nt=Ht.type;if(!et.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Zt),L.bufferData(L.PIXEL_PACK_BUFFER,ut.byteLength,L.STREAM_READ),w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ct),L.readPixels(B,W,X,z,It.convert(Vt),It.convert(Nt),0);const oe=P!==null?ot.get(P).__webglFramebuffer:null;Q.bindFramebuffer(L.FRAMEBUFFER,oe);const ye=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await $d(L,ye,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Zt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ut),L.deleteBuffer(Zt),L.deleteSync(ye),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,B=null,W=0){const X=Math.pow(2,-W),z=Math.floor(w.image.width*X),ut=Math.floor(w.image.height*X),bt=B!==null?B.x:0,Ct=B!==null?B.y:0;rt.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,bt,Ct,z,ut),Q.unbindTexture()};const af=L.createFramebuffer(),of=L.createFramebuffer();this.copyTextureToTexture=function(w,B,W=null,X=null,z=0,ut=null){ut===null&&(z!==0?(Ks("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ut=z,z=0):ut=0);let bt,Ct,Tt,Ht,Vt,Nt,Zt,oe,ye;const fe=w.isCompressedTexture?w.mipmaps[ut]:w.image;if(W!==null)bt=W.max.x-W.min.x,Ct=W.max.y-W.min.y,Tt=W.isBox3?W.max.z-W.min.z:1,Ht=W.min.x,Vt=W.min.y,Nt=W.isBox3?W.min.z:0;else{const nn=Math.pow(2,-z);bt=Math.floor(fe.width*nn),Ct=Math.floor(fe.height*nn),w.isDataArrayTexture?Tt=fe.depth:w.isData3DTexture?Tt=Math.floor(fe.depth*nn):Tt=1,Ht=0,Vt=0,Nt=0}X!==null?(Zt=X.x,oe=X.y,ye=X.z):(Zt=0,oe=0,ye=0);const le=It.convert(B.format),kt=It.convert(B.type);let me;B.isData3DTexture?(rt.setTexture3D(B,0),me=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(rt.setTexture2DArray(B,0),me=L.TEXTURE_2D_ARRAY):(rt.setTexture2D(B,0),me=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const ee=L.getParameter(L.UNPACK_ROW_LENGTH),$e=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Li=L.getParameter(L.UNPACK_SKIP_PIXELS),qe=L.getParameter(L.UNPACK_SKIP_ROWS),vs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,fe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,fe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ht),L.pixelStorei(L.UNPACK_SKIP_ROWS,Vt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Nt);const ge=w.isDataArrayTexture||w.isData3DTexture,en=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){const nn=ot.get(w),ke=ot.get(B),Ge=ot.get(nn.__renderTarget),_a=ot.get(ke.__renderTarget);Q.bindFramebuffer(L.READ_FRAMEBUFFER,Ge.__webglFramebuffer),Q.bindFramebuffer(L.DRAW_FRAMEBUFFER,_a.__webglFramebuffer);for(let oi=0;oi<Tt;oi++)ge&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ot.get(w).__webglTexture,z,Nt+oi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ot.get(B).__webglTexture,ut,ye+oi)),L.blitFramebuffer(Ht,Vt,bt,Ct,Zt,oe,bt,Ct,L.DEPTH_BUFFER_BIT,L.NEAREST);Q.bindFramebuffer(L.READ_FRAMEBUFFER,null),Q.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||w.isRenderTargetTexture||ot.has(w)){const nn=ot.get(w),ke=ot.get(B);Q.bindFramebuffer(L.READ_FRAMEBUFFER,af),Q.bindFramebuffer(L.DRAW_FRAMEBUFFER,of);for(let Ge=0;Ge<Tt;Ge++)ge?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,nn.__webglTexture,z,Nt+Ge):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,nn.__webglTexture,z),en?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ke.__webglTexture,ut,ye+Ge):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ke.__webglTexture,ut),z!==0?L.blitFramebuffer(Ht,Vt,bt,Ct,Zt,oe,bt,Ct,L.COLOR_BUFFER_BIT,L.NEAREST):en?L.copyTexSubImage3D(me,ut,Zt,oe,ye+Ge,Ht,Vt,bt,Ct):L.copyTexSubImage2D(me,ut,Zt,oe,Ht,Vt,bt,Ct);Q.bindFramebuffer(L.READ_FRAMEBUFFER,null),Q.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else en?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(me,ut,Zt,oe,ye,bt,Ct,Tt,le,kt,fe.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(me,ut,Zt,oe,ye,bt,Ct,Tt,le,fe.data):L.texSubImage3D(me,ut,Zt,oe,ye,bt,Ct,Tt,le,kt,fe):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ut,Zt,oe,bt,Ct,le,kt,fe.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ut,Zt,oe,fe.width,fe.height,le,fe.data):L.texSubImage2D(L.TEXTURE_2D,ut,Zt,oe,bt,Ct,le,kt,fe);L.pixelStorei(L.UNPACK_ROW_LENGTH,ee),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,$e),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Li),L.pixelStorei(L.UNPACK_SKIP_ROWS,qe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,vs),ut===0&&B.generateMipmaps&&L.generateMipmap(me),Q.unbindTexture()},this.initRenderTarget=function(w){ot.get(w).__webglFramebuffer===void 0&&rt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?rt.setTextureCube(w,0):w.isData3DTexture?rt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?rt.setTexture2DArray(w,0):rt.setTexture2D(w,0),Q.unbindTexture()},this.resetState=function(){T=0,C=0,P=null,Q.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}const Ah=s=>Math.atan2(Math.sin(s),Math.cos(s));class qx{constructor(){this.delay=.5,this.duration=.5,this.owner=null,this.angle=0,this.remaining=0,this.shotAt=null,this.time=0}update(t,e){const n=t.angle||0;(t!==this.owner||e<this.time)&&(this.owner=t,this.angle=n,this.remaining=0,this.shotAt=null,this.time=e);const i=this.time;this.time=e;const r=Number.isFinite(t.lastShotAt)?t.lastShotAt:null;if(r!==this.shotAt){this.shotAt=r,this.remaining=0;const a=e-r;if(r!==null&&a>=0&&a<this.delay+this.duration){this.angle=t.aimAngle??n;const o=Math.max(0,a-this.delay);return this.remaining=this.duration-o,this.angle+=Ah(n-this.angle)*o/this.duration,this.angle}}if(this.remaining>0){const a=Math.max(0,e-Math.max(i,this.shotAt+this.delay)),o=Math.min(a,this.remaining);this.angle+=Ah(n-this.angle)*o/this.remaining,this.remaining=Math.max(0,this.remaining-o),this.remaining<1e-9&&(this.remaining=0)}return this.remaining===0&&(this.angle=n),this.angle}}const co=new F(0,1,0),Kr=new F(20,29,25),Kx=Kr.clone().normalize(),lo=[48,92],Ch={behind:75,ahead:85,low:-10,high:40},mi={radius:8.3,fightRadius:5.1,fights:3,height:1.15,margin:.5,range:14},Rh={full:2,max:6},Ph=.3,Ce={red:"#ff4339",dark:"#2b0d10"},bn={fill:"#e0263f",edge:"#2a0b14",grow:.09,bias:.35,minTop:2.4,hold:.25,interval:.12,heights:{dog:1.6,walker:2.8,brute:5,boss:8.5},rays:[.12,.5,.92]},Dh=new Set(["crate","locker","lootbox"]),uc=58,ho=uc*6,jx={desert:"#a29c74",canyon:"#b0905e",tundra:"#d3dedc",burned:"#6d6255",marsh:"#6f8c58",farmland:"#a9ab5c",industrial:"#7f7d66",coast:"#9fa477"},Lh={desert:"#a98670",canyon:"#b0603f",tundra:"#a9b6b8",burned:"#5f5852",coast:"#9a9a88",industrial:"#7d7a70"},ti={city:{wall:["#a0a491","#8d9a8c","#b5ad97","#9a8f7e"],cap:"#c2b49d",top:"#b7a679"},stone:{wall:["#8f9688","#a7ab98","#7f877c"],cap:"#6f7f6a",top:"#5f7f5a"},sand:{wall:["#c98c5c","#d8b47c","#b97a4c"],cap:"#e2c08a",top:"#a86a42"},ice:{wall:["#bfe3ea","#d9f0f3","#a5d3df"],cap:"#f2f6f4",top:"#eef4f2"},timber:{wall:["#6b5a44","#7d6a4f"],cap:"#4a3d30",timber:!0}};for(const[s,t]of Object.entries({village:"city",industrial:"city",forest:"stone",glade:"stone",mountain:"stone",cliff:"stone",desert:"sand",canyon:"sand",tundra:"ice",marsh:"timber",burned:"timber",farmland:"timber",coast:"timber"}))ti[s]=ti[t];const Jx={forest:"stone",glade:"stone",mountain:"stone",cliff:"stone",coast:"post",desert:"block",canyon:"block",tundra:"ice",marsh:"reeds",burned:"stump",farmland:"hay",industrial:"barrel"},uo={city:"#8b8f7d",village:"#8f8f78",forest:"#857e5e",glade:"#a29a6a",coast:"#e2d6b4",desert:"#d8b47c",cliff:"#9aa196",mountain:"#a3a99c",marsh:"#8a7352",burned:"#5e5650",canyon:"#c48a5c",tundra:"#e4ecee",farmland:"#b6a46c",industrial:"#7f7c72"},Ih={mountain:["#8b988b","#a6ad99","#76857c","#e9efe8"],cliff:["#7f8c84","#98a397","#6c7a70","#5d7d64"],canyon:["#b0603f","#c9774a","#9c4e33","#8a8a4a"],desert:["#b98a5c","#d0a06a","#a6784e"],tundra:["#9fb0b4","#b9c8cb","#8a9ca0","#f2f6f4"]},fo=new Map,jr=s=>(fo.has(s)||fo.set(s,new Kt(s)),fo.get(s)),kr=(s,t,e)=>{const n=Math.max(0,Math.min(1,(e-s)/(t-s)));return n*n*(3-2*n)},Or=s=>`#${jr(s).clone().multiplyScalar(.78).getHexString()}`,Zx={bark:"#635c4b"},Qx=Object.freeze(["tollkeeper","rootbound","undertow","ochre","cairn","warden"]),ty=[[/toll|city|departure/,"tollkeeper"],[/root|forest|glass/,"rootbound"],[/tide|coast|silent/,"undertow"],[/ochre|sun|desert|sunken|canyon|mesa/,"ochre"],[/cairn|mountain|high|ridge|tundra/,"cairn"],[/warden|outpost|last|lantern/,"warden"]],Uh={toll:"tollkeeper",root:"rootbound",tide:"undertow",sun:"ochre",cairn:"cairn",warden:"warden"};function ey(...s){for(const t of s){if(t==null||t==="")continue;const e=String(t).toLowerCase();if(Uh[e])return Uh[e];if(/undertow/.test(e))return"undertow";for(const[n,i]of ty)if(n.test(e))return i}return null}const Nh={default:{body:"#9a4b57",head:"#ceb2a1",back:"#713f4a",spike:["#d69088","#e2b4a0"]},tollkeeper:{body:"#7d7f86",head:"#c4c2b8",back:"#4d5059",spike:["#b9b7ad","#d8c58f"]},rootbound:{body:"#4f7a45",head:"#a9b983",back:"#35502f",spike:["#7a5a38","#5f8a47"]},undertow:{body:"#2f8088",head:"#8cc6bd",back:"#1f5a66",spike:["#5ec0b4","#3b98a0"]},ochre:{body:"#c0803c",head:"#e6c690",back:"#99602c",spike:["#e0b070","#c88a4a"]},cairn:{body:"#79838a",head:"#c9d0cf",back:"#555f68",spike:["#aeb8bb","#e8eeee"]},warden:{body:"#4a3f58",head:"#b9a9c4",back:"#2f2840",spike:["#e8964a","#8a7aa0"]}},Fh=Object.freeze({heal:{symbol:"+",color:"#ed615a",name:"Medical kit"},shield:{symbol:"◇",color:"#60bfe3",name:"Shield"},rapid:{symbol:"≋",color:"#efa840",name:"Rapid fire"},power:{symbol:"ϟ",color:"#aa78ee",name:"Power cell"},speed:{symbol:"»",color:"#f1ce65",name:"Fleetfoot"},weapon:{symbol:"⌁",color:"#e5d8b1",name:"Weapon"}});class ny{constructor(t){this.canvas=t;try{this.renderer=new $x({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch(r){throw new Error(`Kuru needs a browser with WebGL enabled to show its world. ${r.message}`)}this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.outputColorSpace=Ze,this.renderer.toneMapping=su,this.renderer.toneMappingExposure=.94,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=nu,this.scene=new xp,this.scene.background=new Kt("#c2d1c4"),this.scene.fog=new Dc("#c2d1c4",...lo),this.camera=new kc(-15,15,28,-28,.1,160),this.cameraScale=1,this.sceneBox=Ch,this.silhouetteBias={value:0},this.camera.up.copy(co),this.scene.add(new rm("#dcebdd","#344d3e",1.5));const e=new cm("#fff2da",2.3);e.position.set(-18,36,12),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),Object.assign(e.shadow.camera,{left:-30,right:30,top:38,bottom:-25,near:1,far:100}),e.shadow.normalBias=.065,e.shadow.bias=-12e-5,this.scene.add(e,e.target),this.sun=e,this.materials=new Map,this.geometries={box:new Ai(1,1,1),cylinder:new ua(1,1,1,7),cone:new Ic(1,1,7),ico:new aa(1,0),sphere:new aa(1,1),circle:new sa(1,32),ring:new Gs(.87,1,40)};const n=new ac;n.moveTo(-.35,.3);for(const[r,a]of[[0,.45],[.35,.3],[.29,-.13],[0,-.45],[-.29,-.13]])n.lineTo(r,a);n.closePath(),this.geometries.shield=new ra(n,{depth:.12,bevelEnabled:!1}),this.geometries.shield.translate(0,0,-.06);const i=new ac;i.moveTo(.02,.37);for(const[r,a]of[[-.22,-.035],[-.035,-.035],[-.08,-.37],[.23,.065],[.035,.065]])i.lineTo(r,a);i.closePath(),this.geometries.bolt=new ra(i,{depth:.04,bevelEnabled:!1}),this.chunks=new Map,this.entities=new Map,this.transients=new Map,this.time=0,this.gaitPhase=0,this.walkBlend=0,this.courierFacing=new qx,this.seed=null,this.legLength=null,this.focus=new F,this.tempVector=new F,this.player=this.makeCourier(),this.scene.add(this.player),this.courierOutline=this.makeCourierOutline(),this.scene.add(this.courierOutline),this.initHurtTint(),this.occlusionRay=new hm,this.occlusionHits=[],this.nextOcclusionCheck=0,this.playerShadow=this.disc("#253c39",.18,.78),this.scene.add(this.playerShadow),this.deliveryBeacon=this.makeBeacon(),this.scene.add(this.deliveryBeacon),this.enemyCapacity=96,this.enemyBatches=new Map,this.initializeEnemyBatches(),this.resize(t.clientWidth||390,t.clientHeight||800)}material(t,e={}){const n=`${t}-${e.emissive||""}-${e.opacity??1}-${e.basic||!1}-${e.overlay||!1}`;if(!this.materials.has(n)){const i=e.basic?yi:Jl,r={color:t,transparent:e.opacity!==void 0&&e.opacity<1,opacity:e.opacity??1,side:e.double?En:Wn};e.basic||Object.assign(r,{roughness:1,flatShading:!0,emissive:e.emissive||"#000000",emissiveIntensity:e.emissive?.65:0}),e.overlay&&Object.assign(r,{depthTest:!1,depthWrite:!1,toneMapped:!1});const a=new i(r);a.userData.overlay=!!e.overlay,this.materials.set(n,a)}return this.materials.get(n)}mesh(t,e,n,i,r,a,o=1,c=1,l=1,h={}){const u=new _e(this.geometries[e],this.material(n,h));return u.position.set(i,r,a),u.scale.set(o,c,l),u.castShadow=!h.basic&&c>.2,u.receiveShadow=!h.basic,t.add(u),u}disc(t,e,n){const i=new _e(this.geometries.circle,this.material(t,{basic:!0,opacity:e}));return i.rotation.x=-Math.PI/2,i.scale.setScalar(n),i.position.y=.045,i}makeCourier(){const t=new Qt,e=new Qt;t.add(e);const n=new Qt;e.add(n),this.mesh(n,"cone","#e99042",-.025,.7,0,.39,.38,.35);const i=[];for(const l of[-1,1]){const h=new Qt;h.position.set(.025,.67,l*.19),n.add(h),this.mesh(h,"box","#263f43",0,-.16,0,.21,.32,.21);const u=new Qt;u.position.y=-.32,h.add(u),this.mesh(u,"cylinder","#486168",0,0,0,.115,.21,.115).rotation.x=Math.PI/2,this.mesh(u,"box","#304c51",0,-.15,0,.18,.3,.19);const f=new Qt;f.position.y=-.3,u.add(f),this.mesh(f,"box","#283332",.1,-.015,0,.38,.13,.25),this.mesh(f,"box","#a7966d",.1,-.063,0,.39,.035,.26),i.push({hip:h,knee:u,ankle:f})}const r=new Qt;r.position.y=.78,e.add(r),this.mesh(r,"cylinder","#d97732",0,.22,0,.34,.66,.33),this.mesh(r,"box","#eabc77",.25,.21,-.16,.13,.28,.035),this.mesh(r,"sphere","#d9ad83",.05,.76,0,.28,.29,.26),this.mesh(r,"cylinder","#294c42",.025,.96,0,.3,.15,.29),this.mesh(r,"box","#3c6955",.16,.92,0,.5,.07,.56),this.mesh(r,"box","#eee1b5",.299,.77,-.11,.025,.08,.09),this.mesh(r,"box","#a55e36",-.35,.28,0,.31,.74,.64),this.mesh(r,"box","#e3b468",-.52,.37,0,.1,.17,.47),this.mesh(r,"box","#ede0ae",-.53,.07,0,.035,.23,.27),this.mesh(r,"box","#895b39",-.55,-.06,0,.12,.1,.66);const a=[];for(const l of[-1,1]){const h=new Qt;h.position.set(.045,.48,l*.34),r.add(h),this.mesh(h,"box","#e29a50",.015,-.16,0,.18,.33,.18),this.mesh(h,"box","#e1a568",.15,-.31,0,.36,.15,.16),this.mesh(h,"sphere","#ddb68b",.34,-.31,0,.1,.1,.095),a.push(h)}const o=new Qt;o.position.set(.61,.18,.26),r.add(o),this.mesh(o,"box","#274740",0,0,0,.74,.15,.15),this.mesh(o,"box","#d9b775",.02,.03,0,.28,.08,.19),this.mesh(o,"cylinder","#273532",.41,0,0,.075,.28,.075).rotation.z=Math.PI/2;const c=new _e(this.geometries.ring,this.material("#f5db97",{basic:!0,opacity:.7}));return c.rotation.x=-Math.PI/2,c.position.y=.06,c.scale.setScalar(.79),t.add(c),t.userData.body=e,t.userData.upper=r,t.userData.legs=i,t.userData.arms=a,t.userData.gun=o,t.userData.ring=c,t.scale.setScalar(1.46),t}makeEnemy(t="walker",e=.6,n=null){const i=new Qt,r=t==="boss",a=t==="dog"||t==="hound",o=t==="brute"||t==="tank"||r,c=new Qt;i.add(c);const l=r?Nh[n]||Nh.default:null,h=r?l.body:o?"#ac5760":"#cf726d";if(a){this.mesh(c,"box","#904b54",0,.45,0,1,.48,.4),this.mesh(c,"ico","#d07471",.55,.65,0,.35,.28,.26);for(const x of[-.35,.35])for(const y of[-.2,.2])this.mesh(c,"box","#603d48",x,.22,y,.13,.4,.12);this.mesh(c,"cone","#693e4b",.55,.94,-.15,.12,.3,.1),this.mesh(c,"cone","#693e4b",.55,.94,.15,.12,.3,.1),this.mesh(c,"box","#f4b5a1",.83,.7,.15,.03,.08,.07,{emissive:"#ed937c"}),i.scale.setScalar(1.2)}else{if(this.mesh(c,"ico",h,0,.92,0,.44,.59,.4),this.mesh(c,"ico",r?l.head:o?"#ceb2a1":"#ba8f84",.04,1.54,0,.28,.32,.27),this.mesh(c,"box","#683f47",.04,.3,-.19,.19,.6,.19),this.mesh(c,"box","#683f47",.04,.3,.19,.19,.6,.19),this.mesh(c,"box",h,.19,.91,-.45,.24,.71,.23).rotation.z=-.48,this.mesh(c,"box",h,.19,.91,.45,.24,.71,.23).rotation.z=-.48,this.mesh(c,"ico","#f08b86",-.1,1.36,-.27,.19,.24,.22),this.mesh(c,"box","#fad0a5",.292,1.58,-.13,.025,.08,.07,{emissive:"#f08b86"}),this.mesh(c,"box","#fad0a5",.292,1.58,.13,.025,.08,.07,{emissive:"#f08b86"}),o)if(this.mesh(c,"ico",r?l.back:"#713f4a",-.16,1.03,0,.64,.71,.6),r&&n)this.addGuardianParts(c,n,l);else for(let x=0;x<5;x++)this.mesh(c,"cone",r?l.spike[x%2]:x%2?"#d69088":"#e2b4a0",-.24+x%2*.3,1.7+x%3*.16,(x-2)*.2,.17,.48,.17).rotation.z=-.25;i.scale.setScalar(r?3.65:o?2.19:1.46)}const u=this.disc("#322f35",.19,a?.7:.6);i.add(u);const f=this.makeWarningRing();f.visible=!1,i.add(f);const d=new _e(this.geometries.warnDisc,this.warningMaterial(Ce.red,.26,10));d.rotation.x=-Math.PI/2,d.visible=!1,i.add(d);const g=this.makeWarningLane();g.visible=!1,i.add(g),i.userData.body=c,i.userData.telegraph=f,i.userData.warningFill=d,i.userData.charge=g;const _=new _e(this.geometries.ring,this.material("#f4796f",{basic:!0,opacity:.45}));_.rotation.x=-Math.PI/2,_.position.y=.07/i.scale.y,_.scale.setScalar((e||.7)*1.35/i.scale.x),_.visible=!1,i.add(_),i.userData.arrival=_;const m=new Qt;m.position.y=a?1.32:o?2.34:2.1,m.scale.setScalar(1/i.scale.x);const p=r?2.6:o?1.9:1.45;this.mesh(m,"box","#18342e",0,0,0,p+.14,.25,.03,{basic:!0,overlay:!0});const E=this.mesh(m,"box","#b9e88b",0,0,.025,p,.13,.035,{basic:!0,overlay:!0});return m.userData.fill=E,m.userData.width=p,i.add(m),i.userData.health=m,i.userData.type=t,i.userData.model=r?`boss:${n||""}`:t,i}addGuardianParts(t,e,n){const i=(...r)=>this.mesh(t,...r);if(e==="tollkeeper"){for(const r of[-.78,.78])i("box","#5b5e66",.5,.8,r,.2,1.6,.2),i("box","#d8c58f",.5,1.66,r,.28,.12,.28);for(let r=0;r<5;r++)i("box",r%2?"#e8e0c4":"#c4453c",.5,1.28,-.62+r*.31,.1,.16,.32);i("box","#3d3f47",.38,1.9,0,.5,.12,1.3),i("box","#3d3f47",-.2,1.95,0,.4,.2,.9),i("cylinder","#4a3a2a",.5,1.85,.78,.03,.4,.03),i("box","#ffcf6a",.5,1.52,.78,.2,.26,.2,{emissive:"#ffb23e"}),i("cone","#3d3f47",.5,1.72,.78,.26,.16,.26)}else if(e==="rootbound"){for(let r=0;r<6;r++){const a=r%2?1:-1;i("cone",r%3?"#6a4a2e":"#4b3a26",-.1+r%3*.1,1.75+r%3*.2,a*(.2+r*.06),.1,.85+r%3*.2,.1).rotation.set(a*.55,0,-.25+r*.06)}for(let r=0;r<5;r++)i("cone","#5a4028",-.55-r*.08,.18,(r-2)*.32,.14,.75,.14).rotation.set((r-2)*.22,0,1.25);for(const[r,a,o]of[[-.1,2.35,-.5],[.05,2.5,.45],[-.3,2.15,.05],[.1,1.95,-.2]])i("ico","#6fa34f",r,a,o,.24,.2,.24);i("ico","#3f6a3a",-.1,.62,.52,.28,.16,.26)}else if(e==="undertow"){i("ico","#2a6f78",-.28,1.45,0,.88,.62,.8),i("ico","#3b98a0",-.3,1.8,0,.6,.36,.56);for(let r=0;r<4;r++)i("box","#78d0c4",-.28-r*.12+(r>1?.2:0),1.95-Math.abs(r-1.5)*.15,0,.09,.1,.8-Math.abs(r-1.5)*.18);for(const[r,a]of[[.1,-.5],[-.5,.45],[-.2,.62],[-.55,-.4]])i("cone","#d8e8d4",r,1.3,a,.09,.18,.09);for(let r=0;r<5;r++)i("box","#2f6a55",-.5,.55,(r-2)*.22,.06,.5+r%2*.2,.08)}else if(e==="ochre"){for(let r=0;r<4;r++)i("box",r%2?"#d99a52":"#b8763a",-.18-r*.02,1.15+r*.26,(r-1.5)*.02,.62-r*.06,.22,1.1-r*.16).rotation.z=-.12;for(const r of[-.62,.62])i("box","#d9a460",.05,1.25,r,.36,.2,.3);i("cylinder","#f2d18a",-.6,1.45,0,.9,.06,.9,{emissive:"#e8b052"}).rotation.z=Math.PI/2;for(let r=0;r<5;r++)i("cone","#e0b070",-.6,1.45+Math.sin(r*1.26)*.55,Math.cos(r*1.26)*.55,.1,.24,.1).rotation.x=r*1.26-Math.PI/2}else if(e==="cairn"){[["#6c777e",1,.55],["#8a959a",1.5,.45],["#a4adb0",1.95,.36],["#c9d0cf",2.3,.26]].forEach(([r,a,o],c)=>i("ico",r,-.25+c%2*.12,a,c%2?.1:-.1,o*1.4,.28,o*1.4));for(const r of[-.6,.6])i("ico","#8a959a",.05,1.3,r,.3,.34,.3)}else if(e==="warden"){for(const r of[-.6,.6])i("box","#2f2840",0,1.45,r,.5,.24,.36);for(let r=0;r<5;r++)i("cone",r%2?"#e8964a":"#8a7aa0",-.2+r%2*.25,1.8+r%3*.2,(r-2)*.2,.17,.55,.17,r%2?{emissive:"#e8964a"}:{}).rotation.z=-.25;i("box","#ffcf6a",.3,1.1,0,.1,.22,.22,{emissive:"#ffb23e"})}}initializeEnemyBatches(){this.silhouetteBatches=new Map,this.silhouetteMaterials={edge:this.makeSilhouetteMaterial(bn.edge,bn.grow),fill:this.makeSilhouetteMaterial(bn.fill,0)};for(const t of["walker","dog","brute","boss",...Qx.map(e=>`boss:${e}`)]){const e=t.startsWith("boss:")?this.makeEnemy("boss",.6,t.slice(5)):this.makeEnemy(t),n=new Map,i=new Map;e.traverse(r=>{if(!r.isMesh)return;const a=`${r.geometry.uuid}/${r.material.uuid}`,o=(n.get(a)||0)+1;n.set(a,o);let c=this.enemyBatches.get(a);if(c||(c={geometry:r.geometry,material:r.material,maxParts:1,castShadow:!1,receiveShadow:!1,used:0,mesh:null},this.enemyBatches.set(a,c)),c.maxParts=Math.max(c.maxParts,o),c.castShadow||=r.castShadow,c.receiveShadow||=r.receiveShadow,!r.material.isMeshStandardMaterial)return;const l=(i.get(r.geometry.uuid)||0)+1;i.set(r.geometry.uuid,l);let h=this.silhouetteBatches.get(r.geometry.uuid);h||(h={geometry:r.geometry,maxParts:1,used:0,fill:null,edge:null},this.silhouetteBatches.set(r.geometry.uuid,h)),h.maxParts=Math.max(h.maxParts,l)})}this.resizeEnemyBatches(this.enemyCapacity)}makeSilhouetteMaterial(t,e,n=!1){const i=new yi({color:t,depthTest:!0,depthFunc:ta,depthWrite:!1,toneMapped:!1,fog:!1});return i.onBeforeCompile=r=>{r.uniforms.silhouetteBias=this.silhouetteBias,r.vertexShader=`uniform float silhouetteBias;
`+r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
          ${e?`transformed += sign(position) * ${e.toFixed(4)} / vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));`:""}`).replace("#include <project_vertex>",`#include <project_vertex>
 gl_Position.z -= silhouetteBias;`),n&&(r.fragmentShader=r.fragmentShader.replace("void main() {",`void main() {
 if (mod(floor(gl_FragCoord.x) + floor(gl_FragCoord.y), 2.) < .5) discard;`))},i.customProgramCacheKey=()=>`silhouette-${e}-${n}`,i}warningMaterial(t,e,n,i=!1){this.warningMaterials||=new Map;const r=`${t}-${e}-${n}-${i}`;if(!this.warningMaterials.has(r)){const a=i?this.makeSilhouetteMaterial(t,0,!0):new yi({color:t,transparent:!0,opacity:e,depthWrite:!1,toneMapped:!1});a.userData.renderOrder=n,this.warningMaterials.set(r,a)}return this.warningMaterials.get(r)}isSignatureShape(t){return!!t&&["burst","line","sweep","rockfall"].includes(t.kind)&&(t.signature===!0||t.kind!=="burst"||Number.isFinite(t.inner))}sectorGeometry(t,e,n,i,r=40){const a=[],o=[];for(let l=0;l<=r;l++){const h=n+(i-n)*l/r;a.push(Math.cos(h)*t,0,-Math.sin(h)*t,Math.cos(h)*e,0,-Math.sin(h)*e),l<r&&o.push(2*l,2*l+1,2*l+2,2*l+1,2*l+3,2*l+2)}const c=new Fe;return c.setAttribute("position",new ue(a,3)),c.setIndex(o),c.computeVertexNormals(),c}buildSignature(t){const e=new Qt,n=Math.PI*2,i=(o,c,l,h,u,f=e)=>{const d=new _e(o,this.warningMaterial(c,l,h));return d.renderOrder=h,d.position.y=u,f.add(d),d},r=(o,c,l=0,h=n)=>{const u=this.sectorGeometry(Math.max(0,o-.12),c+.12,l,h,64),f=this.sectorGeometry(o,c,l,h,64);i(u,Ce.dark,.62,11,.02),i(f,Ce.red,.94,12,.03)},a=t.radius||3;if(t.kind==="burst"){const o=t.inner||0;i(this.sectorGeometry(o,a,0,n,64),Ce.red,.28,10,.01),r(a-.5,a),o>0&&(r(o,o+.4),i(this.sectorGeometry(0,o-.1,0,n,48),"#dff2d2",.14,9,.005))}else if(t.kind==="line"){const o=t.length||24,c=t.width||3.2,l=this.makeWarningLane();l.position.x=o/2,l.scale.set(o,1,c);for(const h of l.userData.bars)h.cap?(h.mesh.scale.x=h.width/o,h.mesh.position.x=.5-h.mesh.scale.x/2):(h.mesh.scale.z=h.width/c,h.mesh.position.z=h.side*(.5-h.mesh.scale.z/2+(h.dark?.03:0)));e.add(l)}else if(t.kind==="sweep"){const o=t.arc||.96;i(this.sectorGeometry(0,a,-o,o,48),Ce.red,.28,10,.01),r(a-.5,a,-o,o);for(const c of[-1,1]){const l=i(new Ai(1,.02,.5),Ce.red,.94,12,.03);l.scale.x=a,l.position.set(Math.cos(o)*a/2,.03,-c*Math.sin(o)*a/2),l.rotation.y=c*o}}else e.userData.rocks=(t.points||[t]).map(()=>{const o=new Qt;return i(this.sectorGeometry(0,a,0,n,40),Ce.red,.28,10,.01,o),i(this.sectorGeometry(a-.45-.12,a+.12,0,n,40),Ce.dark,.62,11,.02,o),i(this.sectorGeometry(a-.45,a,0,n,40),Ce.red,.94,12,.03,o),e.add(o),o});return e}syncSignature(t,e){const n=t.telegraph,i=`sig-${t.id}`,r=[n.kind,n.inner,n.radius,n.length,n.width,n.arc,n.points?.length].join("|");let a=this.entities.get(i);(!a||a.userData.signature!==r)&&(a&&this.scene.remove(a),a=this.buildSignature(n),a.userData.signature=r,this.entities.set(i,a),this.scene.add(a));const o=(c,l)=>this.terrainHeight(c,l,e.seed,e.legLength)+.075;if(n.kind==="rockfall"){a.position.set(0,0,0),a.rotation.y=0;const c=n.points||[n];a.userData.rocks.forEach((l,h)=>{const u=c[h]||c[0];l.position.set(u.x,o(u.x,u.y),-u.y)})}else{const c=n.x??t.x,l=n.y??t.y;a.position.set(c,o(c,l),-l),a.rotation.y=Math.PI/2-(n.angle||0)}}makeWarningRing(){const t=new Qt;this.geometries.warnRing||=new Gs(.72,1,48),this.geometries.warnRingEdge||=new Gs(.64,1.09,48),this.geometries.warnDisc||=new sa(1,48);const e=(n,i,r)=>{const a=new _e(n,i);a.rotation.x=-Math.PI/2,a.position.y=r,t.add(a)};return e(this.geometries.warnRingEdge,this.warningMaterial(Ce.dark,.62,11),.004),e(this.geometries.warnRing,this.warningMaterial(Ce.red,.94,12),.008),e(this.geometries.warnRing,this.warningMaterial(Ce.red,1,-4,!0),.008),e(this.geometries.warnDisc,this.warningMaterial(Ce.red,1,-4,!0),.006),t}makeWarningLane(){const t=new Qt,e=[],n=[],i=(r,a,o,c,l,h)=>{const u=this.mesh(t,"box",r,0,l,0,1,.02,1,{basic:!0});u.material=this.warningMaterial(r,a,o,c),u.castShadow=u.receiveShadow=!1,h?e.push({mesh:u,...h}):n.push(u)};for(const r of[!1,!0]){i(Ce.red,.3,r?-4:10,r,.02);for(const a of[-1,1])i(Ce.dark,.62,r?-4:11,r,.03,{side:a,width:.36,dark:!0}),i(Ce.red,.94,r?-4:12,r,.04,{side:a,width:.2});i(Ce.dark,.62,r?-4:11,r,.03,{cap:!0,width:.36}),i(Ce.red,.94,r?-4:12,r,.04,{cap:!0,width:.2})}return t.userData.bars=e,t.userData.fills=n,t}resizeEnemyBatches(t){this.enemyCapacity=t;for(const e of this.enemyBatches.values()){e.mesh&&(this.scene.remove(e.mesh),e.mesh.dispose());const n=new Rr(e.geometry,e.material,t*e.maxParts);n.instanceMatrix.setUsage(Sl),n.count=0,n.visible=!1,n.frustumCulled=!1,n.renderOrder=e.material.userData.renderOrder??(e.material.userData.overlay?30:0),n.castShadow=e.castShadow,n.receiveShadow=e.receiveShadow,this.scene.add(n),e.mesh=n}for(const e of this.silhouetteBatches.values()){for(const n of[e.edge,e.fill])n&&(this.scene.remove(n),n.dispose());e.fill=new Rr(e.geometry,this.silhouetteMaterials.fill,t*e.maxParts),e.edge=new Rr(e.geometry,this.silhouetteMaterials.edge,t*e.maxParts),e.edge.instanceMatrix=e.fill.instanceMatrix,e.fill.instanceMatrix.setUsage(Sl),e.edge.renderOrder=-3,e.fill.renderOrder=-2;for(const n of[e.edge,e.fill])n.count=0,n.visible=!1,n.frustumCulled=!1,this.scene.add(n)}}batchEnemy(t){t.updateMatrixWorld(!0);const e=t.userData.occluded;t.traverseVisible(n=>{if(!n.isMesh)return;const i=this.enemyBatches.get(`${n.geometry.uuid}/${n.material.uuid}`);if(!i||i.used>=i.mesh.instanceMatrix.count)return;i.mesh.setMatrixAt(i.used++,n.matrixWorld);const r=e&&n.material.isMeshStandardMaterial&&this.silhouetteBatches.get(n.geometry.uuid);r&&r.used<r.fill.instanceMatrix.count&&r.fill.setMatrixAt(r.used++,n.matrixWorld)})}finishEnemyBatches(){for(const t of this.enemyBatches.values())t.mesh.count=t.used,t.mesh.visible=t.used>0,t.used&&(t.mesh.instanceMatrix.clearUpdateRanges(),t.mesh.instanceMatrix.addUpdateRange(0,t.used*16),t.mesh.instanceMatrix.needsUpdate=!0);for(const t of this.silhouetteBatches.values())t.fill.count=t.edge.count=t.used,t.fill.visible=t.edge.visible=t.used>0,t.used&&(t.fill.instanceMatrix.clearUpdateRanges(),t.fill.instanceMatrix.addUpdateRange(0,t.used*16),t.fill.instanceMatrix.needsUpdate=!0)}chunkOccluders(t){if(t.userData.occluders)return t.userData.occluders;const e=[],n=new ae;return t.updateMatrixWorld(!0),t.traverse(i=>{if(!i.isInstancedMesh)return;i.geometry.boundingBox||i.geometry.computeBoundingBox();const{min:r,max:a}=i.geometry.boundingBox;for(let o=0;o<i.count;o++){i.getMatrixAt(o,n),n.premultiply(i.matrixWorld);const c=n.elements;let l=1/0,h=1/0,u=1/0,f=-1/0,d=-1/0,g=-1/0;for(let _=0;_<8;_++){const m=_&1?a.x:r.x,p=_&2?a.y:r.y,E=_&4?a.z:r.z,x=c[0]*m+c[4]*p+c[8]*E+c[12],y=c[1]*m+c[5]*p+c[9]*E+c[13],b=c[2]*m+c[6]*p+c[10]*E+c[14];x<l&&(l=x),x>f&&(f=x),y<h&&(h=y),y>d&&(d=y),b<u&&(u=b),b>g&&(g=b)}d>=bn.minTop&&d-h>=1&&Math.min(f-l,g-u)>=.35&&Math.max(f-l,g-u)>=1&&e.push(l,h,u,f,d,g)}}),t.userData.occluders=new Float32Array(e)}enemyOccluded(t,e){const{x:n,y:i,z:r}=Kx,a=bn.heights[t.userData.type]||2.8,o=t.position.x,c=t.position.z;for(const l of this.chunks?.values()||[]){const h=this.chunkOccluders(l);for(let u=0;u<h.length;u+=6){const f=Math.max(0,(h[u]-e-o)/n,(h[u+2]-e-c)/r),d=Math.min(90,(h[u+3]+e-o)/n,(h[u+5]+e-c)/r);if(!(f>=d))for(const g of bn.rays){const _=t.position.y+a*g;if(Math.max(f,(h[u+1]-_)/i)<Math.min(d,(h[u+4]-_)/i))return!0}}}return!1}updateEnemyOcclusion(t,e){const n=t.userData;this.time>=(n.nextOcclusion??0)&&(n.nextOcclusion=this.time+bn.interval*(1+ne(n.occlusionPhase,7)*.4),this.enemyOccluded(t,e)&&(n.occludedUntil=this.time+bn.hold)),n.occluded=this.time<(n.occludedUntil??0)}makeCourierOutline(){const t=new Qt,e=this.player.userData.body.clone(!0),n=this.player.userData.body.clone(!0);this.outlineMaterial=new yi({color:"#ffae35",depthTest:!1,depthWrite:!1,toneMapped:!1}),this.outlineEdgeMaterial=new yi({color:"#132d29",depthTest:!1,depthWrite:!1,toneMapped:!1});const i=[];this.player.userData.body.traverse(a=>i.push(a)),this.outlinePose=[];let r=0;return e.traverse(a=>{this.outlinePose.push([i[r++],a]),a.isMesh&&(a.material=this.outlineMaterial,a.castShadow=!1,a.receiveShadow=!1,a.renderOrder=21)}),r=0,n.traverse(a=>{this.outlinePose.push([i[r++],a]),a.isMesh&&(a.material=this.outlineEdgeMaterial,a.userData.occlusionEdge=!0,a.castShadow=!1,a.receiveShadow=!1,a.renderOrder=20)}),t.add(n),t.add(e),t.visible=!1,t}initHurtTint(){const t=new Map;this.hurtParts=[],this.player.userData.body.traverse(e=>{if(!(!e.isMesh||!e.material||e.material.isMeshBasicMaterial)){if(!t.has(e.material)){const n=e.material.clone();n.userData.base={color:n.color.clone(),emissive:n.emissive.clone(),intensity:n.emissiveIntensity},t.set(e.material,n),this.hurtParts.push(n)}e.material=t.get(e.material)}}),this.hurtColor=new Kt("#e0322a"),this.hurtAmount=0,this.hurtTimer=0,this.hurtSeen=0}updateHurtTint(t,e=0){const n=Number.isFinite(t.hurtFlash)?t.hurtFlash:0;n>this.hurtSeen+1e-4&&(this.hurtTimer=Ph),this.hurtSeen=n,this.hurtTimer=Math.max(0,this.hurtTimer-Math.max(0,e));const i=this.hurtTimer/Ph,r=i<=0?0:Math.min(1,i*1.6);if(r!==this.hurtAmount){this.hurtAmount=r;for(const a of this.hurtParts){const o=a.userData.base;a.color.copy(o.color).lerp(this.hurtColor,r*.58),a.emissive.copy(o.emissive).lerp(this.hurtColor,r*.22),a.emissiveIntensity=o.intensity}}}animateCourier(t,e,n,i){this.updateHurtTint(t,n);const r=Math.min(1,Math.max(0,e)/3);this.walkBlend+=(r-this.walkBlend)*(1-Math.exp(-Math.max(0,n)*12)),e>.08&&n>0&&(this.gaitPhase+=n*(3.4+Math.min(12,e)*.95));const a=this.walkBlend;this.player.rotation.y=Math.PI/2-(t.angle||0);const o=this.player.userData.body,c=this.player.userData.upper;c.rotation.y=(t.angle||0)-this.courierFacing.update(t,i),c.rotation.z=Math.sin(this.gaitPhase)*.025*a,o.position.y=Math.abs(Math.sin(this.gaitPhase))*.023*a+Math.sin(this.time*2)*.005*(1-a),this.player.userData.legs.forEach((l,h)=>{const u=(this.gaitPhase+h*Math.PI)%(Math.PI*2),f=u<Math.PI,d=-Math.cos(u)*.225*a,_=.67-(.09+(f?Math.sin(u)*.145:0)*a-o.position.y),m=.32,p=.3,E=-Math.acos(Ra.clamp((d*d+_*_-m*m-p*p)/(2*m*p),-1,1)),x=Math.atan2(d,_)-Math.atan2(p*Math.sin(E),m+p*Math.cos(E));l.hip.rotation.z=x,l.knee.rotation.z=E,l.ankle.rotation.z=-(x+E)+(f?-.12*Math.sin(u)*a:0)}),this.player.userData.arms[0].rotation.z=-.08+Math.sin(this.gaitPhase+Math.PI)*.28*a,this.player.userData.arms[1].rotation.z=-.08+Math.sin(this.gaitPhase)*.1*a,this.player.userData.gun.rotation.z=Math.sin(this.gaitPhase)*.035*a}xrayMaterial(t){this.xrayMaterials||=new Map,this.xrayUniforms||={xrayCenters:{value:Array.from({length:4},()=>new pe)}};let e=this.xrayMaterials.get(t);return e||(e=t.clone(),e.userData.xray=!0,e.onBeforeCompile=n=>{n.uniforms.xrayCenters=this.xrayUniforms.xrayCenters,n.vertexShader=`varying float vXrayY;
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
            if (c.w > 0.) cut = max(cut, step(c.z + ${mi.margin.toFixed(2)}, xv.z) * (1. - smoothstep(c.w * .4, c.w, length(xv.xy - c.xy))));
          }
          ivec2 q = ivec2(mod(gl_FragCoord.xy, 4.));
          if (vXrayY > ${mi.height.toFixed(2)} && cut > (xrayBayer[q.x + q.y * 4] + .5) / 16.) discard;
        }`)},e.customProgramCacheKey=()=>"xray",this.xrayMaterials.set(t,e),e)}applyXray(t){t.userData.xray||(t.userData.xray=!0,t.traverse(e=>{const n=e.material;e.isInstancedMesh&&n.isMeshStandardMaterial&&!n.vertexColors&&!n.transparent&&(e.material=this.xrayMaterial(n))}))}updateXray(){this.xrayUniforms||={xrayCenters:{value:Array.from({length:4},()=>new pe)}};const t=this.xrayUniforms.xrayCenters.value,e=this.camera.matrixWorldInverse;let n=0;if(this.xrayEnabled===!1)for(const a of t)a.set(0,0,0,0);if(this.xrayEnabled===!1)return;const i=(a,o,c,l)=>{const h=this.tempVector.set(a,o,c).applyMatrix4(e);t[n++].set(h.x,h.y,h.z,l)};i(this.player.position.x,this.player.position.y+1.05*this.player.scale.y,this.player.position.z,mi.radius);const r=[];for(const[a,o]of this.entities){if(!o.userData.occluded||!a.startsWith("enemy-"))continue;const c=Math.hypot(o.position.x-this.player.position.x,o.position.z-this.player.position.z);c<mi.range&&r.push([c,o])}r.sort((a,o)=>a[0]-o[0]);for(const[,a]of r.slice(0,mi.fights))i(a.position.x,a.position.y+bn.heights[a.userData.type]*.5,a.position.z,mi.fightRadius*(a.userData.type==="boss"?1.8:a.userData.type==="brute"?1.3:1));for(;n<t.length;n++)t[n].set(0,0,0,0)}updateCourierVisibility(){if(this.time>=this.nextOcclusionCheck){this.nextOcclusionCheck=this.time+1/6;const t=this.player.position.clone();t.y+=1.05*this.player.scale.y;const e=t.clone().project(this.camera);this.occlusionRay.setFromCamera({x:e.x,y:e.y},this.camera),this.occlusionRay.far=Math.max(0,this.occlusionRay.ray.origin.distanceTo(t)-.25),this.scene.updateMatrixWorld(!0);let n=!1;for(const i of this.chunks.values())if(this.occlusionHits.length=0,this.occlusionRay.intersectObject(i,!0,this.occlusionHits),this.occlusionHits.some(r=>!(this.xrayEnabled!==!1&&r.object.material?.userData.xray&&r.point.y>mi.height))){n=!0;break}this.courierHidden=n}if(this.courierOutline.visible=!!this.courierHidden,this.outlineMaterial.color.set("#ffae35").lerp(this.outlineHurtColor||=new Kt("#ff2a2a"),Math.min(1,this.hurtAmount*1.4)),!!this.courierOutline.visible){this.courierOutline.position.copy(this.player.position),this.courierOutline.rotation.copy(this.player.rotation),this.courierOutline.scale.copy(this.player.scale);for(const[t,e]of this.outlinePose)e.position.copy(t.position),e.rotation.copy(t.rotation),e.scale.copy(t.scale),e.userData.occlusionEdge&&e.scale.multiplyScalar(1.2)}}makeProp(t,e){const n=new Qt,i=t.corrupted?"#494748":Zx.bark,r=t.corrupted?"#697166":e.trees,a=t.variant||0;switch(t.type){case"tree":case"pine":case"palm":{const o=t.type==="palm";if(this.mesh(n,"cylinder",i,0,1.15,0,.16,2.3,.16),o)for(let c=0;c<6;c++){const l=this.mesh(n,"ico",r,Math.cos(c*1.047)*.82,2.6,Math.sin(c*1.047)*.82,1.2,.2,.4);l.rotation.y=-c*1.047}else t.type==="pine"||a===1?(this.mesh(n,"cone",r,0,2.35,0,1.18,2.4,1.18),this.mesh(n,"cone",t.corrupted?"#545e59":"#739383",0,3.15,0,.88,1.85,.88)):(this.mesh(n,"ico",r,0,2.72,0,1.4,1.33,1.2),this.mesh(n,"ico",t.corrupted?"#7b796a":"#82a687",.65,3,.23,.82,.91,.81),this.mesh(n,"ico",r,-.65,2.43,-.35,.93,.92,.93));t.corrupted&&this.addGrowth(n,0,0,.8);break}case"building":{const o=e.id==="village",c=o?2.4+a*.3:3.3+a*.65,l=["#b5b397","#a0ac99","#c2b49d","#8d9a8c"][a];if(this.mesh(n,"box",l,0,c/2,0,3.9,c,3.2),this.mesh(n,"box","#68796f",0,.19,0,4.06,.38,3.37),o){const h=this.mesh(n,"cone",a%2?"#826e62":"#738279",0,c+.65,0,3.25,1.3,2.55);h.rotation.y=Math.PI/4,this.mesh(n,"box","#56695e",.7,c+.65,.4,.35,1.6,.35)}else this.mesh(n,"box","#d2c6a7",0,c+.06,0,4.13,.17,3.43),this.mesh(n,"box","#697b71",-.9,c+.35,-.5,1.07,.62,.8),this.mesh(n,"cylinder","#8a9385",.87,c+.5,.2,.43,.85,.43),this.mesh(n,"box","#525f59",.9,c+.97,.2,.96,.13,.96),this.mesh(n,"box","#b7b99c",0,c+.21,-1.57,4.02,.29,.14),this.mesh(n,"box","#b7b99c",-1.97,c+.21,0,.14,.29,3.32);for(let h=0;h<Math.floor(c/1.5);h++){for(let u=0;u<3;u++)this.mesh(n,"box","#526f6a",-1.15+u*1.13,1.1+h*1.45,1.615,.62,.72,.025),this.mesh(n,"box","#c1c09f",-1.15+u*1.13,.7+h*1.45,1.66,.77,.12,.14);for(let u=0;u<2;u++)this.mesh(n,"box","#526f6a",1.965,1.1+h*1.45,-.82+u*1.5,.025,.72,.6)}this.mesh(n,"box","#394f43",0,.78,1.64,.75,1.56,.05),this.mesh(n,"box","#998d70",0,.08,1.89,1.04,.16,.66),t.corrupted&&(this.addGrowth(n,1.75,.01,1.5),this.mesh(n,"box","#484e4b",-.4,c*.7,1.635,.08,c*.65,.045).rotation.z=.31);break}case"car":{this.mesh(n,"box",a%2?"#9b7f69":"#889b91",0,.46,0,1.8,.56,.95),this.mesh(n,"box","#719086",-.13,.89,0,1.02,.51,.86),this.mesh(n,"box","#4f6865",-.13,.98,.435,.82,.29,.022),this.mesh(n,"box","#4f6865",-.13,.98,-.435,.82,.29,.022);for(const o of[-.59,.59])for(const c of[-.47,.47])this.mesh(n,"cylinder","#364847",o,.24,c,.24,.12,.24).rotation.x=Math.PI/2;this.mesh(n,"box","#d1c497",.92,.52,0,.06,.15,.64),this.mesh(n,"box","#735a4f",-.44,.75,.45,.5,.05,.11);break}case"mountain":{const o=Ih[e.id]||Ih.mountain,c=5.5+a*1.2,l=this.mesh(n,"cone",o[0],0,c/2-.2,0,4.6,c,4.4);l.rotation.y=a*.7,this.mesh(n,"cone",o[1],1.6,c*.32,.9,3,c*.62,2.8).rotation.y=.4,this.mesh(n,"cone",o[2],-1.5,c*.26,-1,2.7,c*.5,2.6).rotation.y=1.1,this.mesh(n,"cone",o[1],-.4,c*.42,1.6,2.2,c*.7,2).rotation.set(.12,2,-.1);for(let h=0;h<5;h++)this.mesh(n,"ico",o[h%3],Math.cos(h*1.3)*3.6,.35,Math.sin(h*1.3)*3.4,.7+h%2*.3,.5,.6).rotation.y=h;o[3]&&(this.mesh(n,"cone",o[3],0,c*.82,0,1.75,c*.38,1.7).rotation.y=a*.7);break}case"rubble":{for(let o=0;o<5;o++){const c=this.mesh(n,o%2?"box":"ico",["#8c9181","#717c72","#a39e85"][o%3],Math.cos(o*2.4)*.55,.15+o%2*.12,Math.sin(o*2.4)*.48,.35+o%3*.13,.26+o%2*.15,.38);c.rotation.y=o*.9,c.rotation.z=o*.23}this.mesh(n,"box","#685c4a",.1,.23,-.35,1.65,.1,.13).rotation.y=.37;break}case"rock":{this.mesh(n,"ico",Lh[e.id]||"#849084",0,.55,0,1.3,.92,1.1),this.mesh(n,"ico",e.id==="tundra"?"#eef3f1":"#aab09b",-.68,.32,.44,.66,.5,.66),t.corrupted&&this.addGrowth(n,.6,.3,.4);break}case"cactus":{this.mesh(n,"cylinder","#788d73",0,1.08,0,.22,2.1,.22),this.mesh(n,"cylinder","#879b7a",-.42,1.1,0,.15,.95,.15),this.mesh(n,"box","#788d73",-.24,.7,0,.58,.25,.25),this.mesh(n,"cylinder","#879b7a",.42,1.55,0,.15,.76,.15),this.mesh(n,"box","#788d73",.25,1.24,0,.56,.22,.25);break}case"pole":{this.mesh(n,"cylinder","#746c59",0,2.1,0,.075,4.2,.075),this.mesh(n,"box","#596860",0,3.9,0,1.52,.12,.14),this.mesh(n,"box","#d0c29f",-.5,4.06,0,.14,.22,.14),this.mesh(n,"box","#d0c29f",.5,4.06,0,.14,.22,.14);for(let o=0;o<4;o++){const c=this.mesh(n,"box","#4f6056",-.5,3.65+Math.abs(o-1.5)*.23,-4.5-o*9,.035,.035,9.1);c.rotation.x=(o<2?1:-1)*.05}break}case"sign":{this.mesh(n,"box","#7d7a61",0,.83,0,.08,1.66,.1),this.mesh(n,"box","#c6b784",0,1.6,0,.85,.47,.12),this.mesh(n,"box","#596e61",.04,1.6,.075,.39,.075,.018),this.mesh(n,"box","#596e61",.2,1.6,.078,.12,.2,.018).rotation.z=-.75;break}case"carpile":{const o=["#5b4a43","#6f5446","#4c4a47","#7d5b45"];this.mesh(n,"ico","#3a3633",0,.05,0,2.2,.12,1.9);for(let c=0;c<3;c++){const l=new Qt,h=c*2.1+a,u=c===2;l.position.set(Math.cos(h)*(u?.2:.85),u?.9:0,Math.sin(h)*(u?.2:.85)),l.rotation.set(u?.3:0,h*1.3,u?.22:c?.1:-.08),this.mesh(l,"box",o[(c+a)%4],0,.42,0,1.9,.55,1),this.mesh(l,"box","#3d3a38",-.15,.85,0,1.05,.42,.9);for(const f of[-.6,.6])this.mesh(l,"cylinder","#262828",f,.22,.5,.23,.14,.23).rotation.x=Math.PI/2;n.add(l)}this.mesh(n,"cylinder","#262828",1.35,.2,-1.05,.36,.4,.36);break}case"collapsed":{const o=["#a0a491","#8d9a8c","#b5ad97","#9a8f7e"][a];this.mesh(n,"box",o,-1.4,1.6,-.2,.5,3.2,3.6),this.mesh(n,"box",o,.2,1.1,-1.9,2.9,2.2,.45),this.mesh(n,"box",o,.9,.55,1.6,1.4,1.1,.4).rotation.y=.3,this.mesh(n,"box","#3b4a45",-1.13,2.1,-.6,.05,.7,.6);const c=this.mesh(n,"box","#7f857a",.4,.95,.1,3.1,.3,3.3);c.rotation.z=.52;for(let l=0;l<5;l++)this.mesh(n,l%2?"box":"ico",["#717c72","#8c9181","#a39e85"][l%3],Math.cos(l*1.9)*1.7,.25,Math.sin(l*1.9)*1.6,.5+l%3*.2,.4,.5).rotation.y=l;for(let l=0;l<3;l++)this.mesh(n,"box","#5a4a40",-1.2+l*.25,3.35,-.8+l*.5,.04,.5,.04).rotation.z=.3-l*.25;break}case"rubblewall":{for(let o=0;o<7;o++)this.mesh(n,o%2?"box":"ico",["#8c9181","#717c72","#a39e85"][o%3],Math.cos(o*2.4)*(o?1.2:0),o?.45:.95,Math.sin(o*2.4)*(o?1.1:0),.9+o%3*.3,o?.7:1.2,.9).rotation.set(o*.3,o*.9,o*.2);this.mesh(n,"box","#c2b49d",.3,.45,1.5,1.8,.9,.45).rotation.y=.4,this.mesh(n,"box","#685c4a",-.2,1.2,.1,2.6,.12,.14).rotation.set(.3,.6,.25);break}case"containers":case"container":{const o=["#b0563f","#3f7a8a","#c49a3a","#5f7f4f"],c=t.type==="containers"&&a%2?2:1;for(let l=0;l<c;l++){const h=new Qt;h.position.y=l*2.5,h.rotation.y=l*.09,this.mesh(h,"box",o[(a+l*3)%4],0,1.25,0,2.4,2.45,5.9);for(const u of[-1.9,-.65,.65,1.9])this.mesh(h,"box","#3d4744",0,1.25,u,2.46,2.2,.07);this.mesh(h,"box","#e1d2a8",0,1.3,2.97,1.5,.4,.04),n.add(h)}break}case"pit":case"crevasse":case"mud":case"water":case"ditch":case"pool":{const o={pit:2.3,crevasse:2.4,mud:2.6,water:3.2,ditch:2.5,pool:1.5}[t.type],c=t.type==="crevasse"||t.type==="ditch"?1.25:1,l={pit:e.id==="cliff"?"#141a1c":"#211c18",crevasse:"#21405a",mud:"#4b3b2b",water:e.water,ditch:e.water,pool:e.water}[t.type],h={pit:e.id==="burned"?"#4a4038":"#6b5a45",crevasse:"#e6f1f2",mud:"#6a5640",water:"#7c8a63",ditch:"#6b5a45",pool:"#6d7a52"}[t.type];this.mesh(n,"cylinder",h,0,.025,0,o*1.02/c,.05,o*1.02*c),this.mesh(n,"cylinder",l,0,.05,0,o*.86/c,.05,o*.86*c),(t.type==="pit"||t.type==="crevasse")&&this.mesh(n,"cylinder",t.type==="pit"?"#0f0d0c":"#152b3d",0,.07,0,o*.55/c,.05,o*.6*c);const u=t.type==="pool"?3:7;for(let f=0;f<u;f++){const d=f*6.28/u+a,g=Math.cos(d)*o*.95/c,_=Math.sin(d)*o*.95*c;t.type==="crevasse"?this.mesh(n,"cone",f%2?"#d9eef2":"#bfe0ea",g,.35,_,.3,.8+f%3*.3,.3).rotation.z=Math.cos(d)*.5:["water","ditch","pool"].includes(t.type)&&f%2?this.mesh(n,"cone","#869a5a",g,.45,_,.09,.9,.09):this.mesh(n,"ico",h,g,.12,_,.45,.25,.4).rotation.y=d}if(t.type==="mud")for(let f=0;f<3;f++)this.mesh(n,"ico","#5d4a37",(f-1)*.7,.08,f%2*.6,.18,.1,.18);if(t.type==="pit"&&e.id==="burned")for(let f=0;f<3;f++)this.mesh(n,"box","#f08a3c",(f-1)*.6,.1,(f%2-.5)*.7,.16,.06,.16,{emissive:"#e0602a"});break}case"logs":{const o=t.charred?"#2e2a28":"#6b5a44",c=t.charred?"#4a3a32":"#b39a6c";for(const[l,h,u]of[[-.5,.45,0],[.5,.45,.3],[0,1.2,-.2]])this.mesh(n,"cylinder",o,l,h,u,.45,4.9,.45).rotation.x=Math.PI/2,this.mesh(n,"cylinder",c,l,h,u+2.46,.4,.04,.4).rotation.x=Math.PI/2;if(this.mesh(n,"ico",t.charred?"#3a3330":"#5e5444",-.4,.9,-2.5,.9,1.1,.3),this.mesh(n,"box",o,.9,.9,-.6,.12,.12,1.4).rotation.set(.4,.5,.6),t.charred)for(let l=0;l<3;l++)this.mesh(n,"box","#f08a3c",-.3+l*.35,.92,-1+l*.9,.14,.05,.14,{emissive:"#e0602a"});else this.mesh(n,"ico","#4d7a45",.5,.85,1.2,.5,.15,.9);break}case"thicket":{const o=e.id==="burned"?"#3a3632":"#2f5a3c";for(let c=0;c<5;c++)this.mesh(n,"ico",c%2?o:e.trees,Math.cos(c*1.3)*(c?1.1:0),.9+c%2*.35,Math.sin(c*1.3)*(c?1:0),1.15-c%2*.15,1.1+c%3*.3,1.05);for(let c=0;c<7;c++)this.mesh(n,"cone","#6a4a3a",Math.cos(c*.9)*1.7,.9+c%3*.4,Math.sin(c*.9)*1.6,.08,.9,.08).rotation.set(Math.sin(c*.9)*1.1,0,-Math.cos(c*.9)*1.1);for(let c=0;c<3;c++)this.mesh(n,"ico","#c25a54",Math.cos(c*2.1)*.9,1.75,Math.sin(c*2.1)*.8,.12,.12,.12);break}case"rockfall":{const o=Lh[e.id]||"#849084";for(const[c,l,h,u]of[[0,.9,0,1.4],[1.2,.55,.8,1],[-1.1,.5,.9,.85],[.6,.45,-1.2,.9],[-.9,.4,-.9,.7],[.2,1.9,.3,.7]])this.mesh(n,"ico",u<.8?e.id==="tundra"?"#eef3f1":"#aab09b":o,c,l,h,u,u*.82,u*.95).rotation.set(c,h,l);break}case"cliff":{const o=e.id==="canyon",c=o?["#a9583a","#c9774a","#9c4e33","#c06a42"]:["#7f8c84","#98a397","#8a978c","#a3ad9f"],l=4.4+a*.7;for(let h=0;h<4;h++){const u=this.mesh(n,"box",c[h],(h%2-.5)*.35,l*(h+.5)/4,(h%3-1)*.3,4.5-h*.45,l/4+.05,4.6-h*.35);u.rotation.y=(h-1.5)*.12}this.mesh(n,"ico",o?"#8a8a4a":e.id==="mountain"?"#e3e8e0":"#5d7d64",0,l+.05,0,1.6,.25,1.6),this.mesh(n,"ico",c[1],1.8,.5,1.6,.9,.7,.8);break}case"dune":{this.mesh(n,"ico",e.verge,0,0,0,3.4,1.9,3.1),this.mesh(n,"ico","#efc27a",.9,.55,-.6,1.9,1.5,1.6),this.mesh(n,"cone","#a29c74",-2.2,.3,1.8,.14,.6,.14);break}case"icewall":{const o=["#bfe3ea","#a5d3df","#d9f0f3"];for(let c=0;c<4;c++)this.mesh(n,"box",o[c%3],(c%2-.5)*.5,.7+Math.floor(c/2)*1.35,(c<2?c-.5:c-2.5)*2.1,2.6-Math.floor(c/2)*.5,1.4,2.2).rotation.y=(c-1.5)*.15;this.mesh(n,"box","#f2f6f4",0,2.8,0,1.9,.2,3.8),this.mesh(n,"cone","#d9f0f3",.9,3.2,1,.3,1.1,.3);break}case"hedge":{this.mesh(n,"box","#3f6e3c",0,.95,0,2.1,1.9,4.3);for(let o=0;o<4;o++)this.mesh(n,"ico",o%2?"#4f8048":"#467640",(o%2-.5)*.6,1.95,-1.6+o*1.07,.8,.5,.7);this.mesh(n,"box","#7d6a4f",-1.15,.6,1.8,.12,1.2,.12);break}case"haywall":{for(const[o,c,l]of[[-.75,.72,0],[.75,.72,0],[0,1.95,.1]])this.mesh(n,"cylinder","#d6b25a",o,c,l,.72,1.3,.72).rotation.x=Math.PI/2,this.mesh(n,"cylinder","#e8cb7a",o,c,l+.66,.55,.03,.55).rotation.x=Math.PI/2;this.mesh(n,"box","#8a7352",0,.06,1.2,2.4,.12,.7);break}case"deadtree":{this.mesh(n,"cylinder","#5e5a4c",0,1.5,0,.16,3,.16),this.mesh(n,"box","#5e5a4c",.35,2.4,0,.09,1.1,.09).rotation.z=-.7,this.mesh(n,"box","#5e5a4c",-.3,2.8,.1,.08,.9,.08).rotation.z=.8,this.mesh(n,"box","#6f7f5a",.55,2.3,0,.05,.5,.05);break}case"reeds":{for(let o=0;o<5;o++){const c=Math.cos(o*2.3)*.35,l=Math.sin(o*2.3)*.3,h=.9+o%3*.25;this.mesh(n,"cone",o%2?"#8a9a5a":"#a0a866",c,h/2,l,.07,h,.07),o%2===0&&this.mesh(n,"box","#6a4a32",c,h+.05,l,.07,.22,.07)}break}case"charred":{this.mesh(n,"cylinder","#2e2a28",0,1.7,0,.27,3.4,.27),this.mesh(n,"cone","#2e2a28",0,3.75,0,.22,.7,.22),this.mesh(n,"box","#2e2a28",.45,2.5,0,.12,1.3,.12).rotation.z=-.75,this.mesh(n,"box","#3a3330",-.4,3,.1,.1,1,.1).rotation.z=.8,this.mesh(n,"ico","#3a3330",0,.08,0,1,.16,.9);for(const o of[1.2,2.3])this.mesh(n,"box","#f08a3c",.12,o,.26,.1,.3,.04,{emissive:"#e0602a"});break}case"embers":{this.mesh(n,"ico","#4a4440",0,.03,0,.8,.06,.7);for(let o=0;o<3;o++)this.mesh(n,"ico","#ef8a3c",(o-1)*.3,.08,o%2*.25,.1,.07,.1,{emissive:"#e0602a"});break}case"mesa":{const o=["#b0603f","#c9774a","#9c4e33"];this.mesh(n,"box",o[0],0,1.3,0,3.8,2.6,3.6).rotation.y=.2,this.mesh(n,"box",o[1],.1,3.3,0,3.2,1.6,3.1).rotation.y=-.15,this.mesh(n,"box",o[2],-.1,4.6,.1,2.8,1.1,2.7).rotation.y=.3,this.mesh(n,"box","#8a8a4a",-.1,5.2,.1,2.6,.12,2.5).rotation.y=.3,this.mesh(n,"ico",o[1],1.9,.4,1.5,.8,.6,.7);break}case"arch":{for(const o of[-1,1])this.mesh(n,"box","#b0603f",o*2.6,1.9,0,1.4,3.8,1.5).rotation.y=o*.1,this.mesh(n,"ico","#9c4e33",o*2.8,.4,.4,.8,.5,.7);this.mesh(n,"box","#c9774a",0,4.25,0,7,1.1,1.5),this.mesh(n,"box","#8a8a4a",0,4.85,0,6,.12,1.3);break}case"archleg":break;case"forksign":{this.mesh(n,"cylinder","#7d6a4f",0,1.25,0,.09,2.5,.09),this.mesh(n,"ico","#8f9688",0,.18,0,.45,.3,.45),this.mesh(n,"box",e.ground,(a?1:-1)*.42,1.05,0,.72,.95,.06),this.mesh(n,"box",e.trees,(a?1:-1)*.42,.62,0,.72,.14,.07),this.mesh(n,"box","#eddfb1",(a?1:-1)*.42,1.55,0,.8,.08,.08),this.mesh(n,"cone","#ef9f60",0,2.75,0,.14,.32,.14);for(const[o,c,l]of[[0,"#eddfb1",2.25],[(a?-1:1)*.75,"#ef9f60",1.75]]){const h=new Qt;h.position.y=l,h.rotation.y=o,this.mesh(h,"box",c,0,0,-.5,.1,.34,1.15),this.mesh(h,"cone",c,0,0,-1.25,.3,.4,.1).rotation.x=-Math.PI/2,n.add(h)}break}case"cairn":{for(let o=0;o<4;o++)this.mesh(n,"ico",o%2?"#a7ab98":"#8f9688",o%2*.08,.22+o*.32,0,.62-o*.12,.24,.55-o*.1).rotation.y=o;this.mesh(n,"box","#7d6a4f",.05,1.6,0,.05,.9,.05),this.mesh(n,"box","#ef9f60",.25,1.9,0,.4,.22,.03);break}case"lantern":{this.mesh(n,"cylinder","#5b4a3c",0,.8,0,.06,1.6,.06),this.mesh(n,"box","#5b4a3c",.14,1.58,0,.34,.05,.05),this.mesh(n,"box","#ffd27a",.28,1.4,0,.16,.22,.16,{emissive:"#f1b44f"}),this.mesh(n,"box","#3c3a36",.28,1.54,0,.22,.05,.22),this.mesh(n,"box",e.ground,-.18,1.32,0,.3,.2,.02);break}case"gatepillar":{const o=ti[e.id]||ti.city;if(o.timber)for(const[c,l]of[[-.4,-.4],[.4,-.4],[-.4,.4],[.4,.4]])this.mesh(n,"cylinder",o.wall[0],c,2.4,l,.32,4.8,.32),this.mesh(n,"cone",o.wall[1],c,5.05,l,.32,.5,.32);else this.mesh(n,"box",o.wall[0],0,2.2,0,1.6,4.4,1.6),this.mesh(n,"box",o.cap,0,4.5,0,1.9,.3,1.9),this.mesh(n,"box",o.wall[1],0,.25,0,1.9,.5,1.9);this.mesh(n,"box","#ffd27a",0,4.95,0,.3,.4,.3,{emissive:"#f1b44f"}),this.mesh(n,"box","#d76465",0,3.3,.85,1.1,1.4,.04);break}case"edgefence":{const o=ti[e.id]||ti.city,c=o.wall[a%o.wall.length];if(o.timber){for(let l=0;l<5;l++)this.mesh(n,"cylinder",o.wall[l%2],0,.72+l%2*.1,-2+l,.12,1.45+l%2*.2,.12),this.mesh(n,"cone",o.cap,0,1.55+l%2*.2,-2+l,.12,.26,.12);for(const l of[.5,1])this.mesh(n,"box",o.cap,0,l,0,.1,.12,4.6);for(const l of[-1,1])this.mesh(n,"box","#ef9f60",l*.06,.75,-1+a*.5,.04,.42,.5).rotation.x=.5}else{this.mesh(n,"box",c,0,.5,0,.6,1,4.6),this.mesh(n,"box",o.cap,0,1.06,0,.72,.14,4.7);for(let l=0;l<4;l++)this.mesh(n,"ico",o.top,0,1.28,-1.6+l*1.05,.3,.22,.4);for(const l of[-1,1])for(let h=0;h<3;h++)this.mesh(n,"box","#ef9f60",l*.31,.55,-1.4+h*1.4,.02,.18,.5).rotation.x=.6}break}case"gatewall":{const o=ti[e.id]||ti.city,c=o.wall[a%o.wall.length];if(o.timber){for(let l=0;l<6;l++)this.mesh(n,"cylinder",o.wall[(l+a)%2],-1.95+l*.78,1.1+l%3*.12,0,.36,2.2+l%3*.25,.36),this.mesh(n,"cone",o.cap,-1.95+l*.78,2.45+l%3*.25,0,.36,.5,.36);this.mesh(n,"box",o.cap,0,1.4,.38,4.6,.16,.1)}else{this.mesh(n,"box",c,0,.75,0,4.5,1.5,1.1),this.mesh(n,"box",o.cap,0,1.55,0,4.6,.14,1.2);for(let l=0;l<4;l++)this.mesh(n,"ico",o.top,-1.6+l*1.05,1.85,(l%2-.5)*.3,.5,.26,.34)}for(let l=0;l<3;l++)this.mesh(n,"box","#ef9f60",-1.4+l*1.4,.75,.58,.5,.18,.02).rotation.z=.6;break}case"planter":case"plazarim":{const o=t.type==="planter"?"planter":Jx[e.id]||"planter";if(o==="planter")this.mesh(n,"box","#8d8a78",0,.25,0,.9,.5,.9),this.mesh(n,"ico","#5f8a55",0,.62,0,.48,.32,.46);else if(o==="stone")this.mesh(n,"box","#9aa196",0,1.1,0,.8,2.2,.6).rotation.z=(a-1.5)*.08,this.mesh(n,"ico","#5f7f5a",0,2.2,0,.45,.14,.35),this.mesh(n,"ico","#8f9688",.5,.2,.3,.4,.3,.35);else if(o==="post")this.mesh(n,"cylinder","#8a7352",0,.8,0,.2,1.6,.2),this.mesh(n,"cylinder","#e8dcc0",0,1.2,0,.24,.12,.24),this.mesh(n,"ico","#d76465",.35,.25,0,.25,.25,.25);else if(o==="block")this.mesh(n,"box",e.id==="canyon"?"#b0603f":"#c98c5c",0,.45,0,1.2,.9,.9).rotation.y=a*.3,this.mesh(n,"box",e.id==="canyon"?"#c9774a":"#d8b47c",.1,1.1,0,.8,.45,.7).rotation.y=-a*.2;else if(o==="ice")this.mesh(n,"cone","#cfeaf0",0,.8,0,.4,1.6,.4).rotation.z=.1,this.mesh(n,"cone","#a9d6e2",.4,.45,.2,.26,.9,.26).rotation.z=-.3;else if(o==="reeds"){this.mesh(n,"cylinder","#8a7352",0,.6,0,.12,1.2,.12);for(let c=0;c<4;c++)this.mesh(n,"cone","#a0a866",Math.cos(c*1.6)*.3,.55,Math.sin(c*1.6)*.3,.07,1.1,.07)}else o==="stump"?(this.mesh(n,"cylinder","#2e2a28",0,.45,0,.45,.9,.45),this.mesh(n,"box","#f08a3c",.1,.9,.1,.2,.05,.2,{emissive:"#e0602a"})):o==="hay"?this.mesh(n,"cylinder","#d6b25a",0,.62,0,.62,1.1,.62).rotation.x=Math.PI/2:(this.mesh(n,"cylinder",a%2?"#9c705b":"#5f7f4f",0,.55,0,.42,1.1,.42),this.mesh(n,"cylinder","#3d4744",0,1.12,0,.44,.06,.44));break}case"outpost":{this.mesh(n,"box","#c2b49d",0,1.1,0,3.4,2.2,3);for(const o of[-1,1])this.mesh(n,"box",e.trees,o*.95,2.75,0,2.2,.18,3.4).rotation.z=-o*.6;this.mesh(n,"box","#5a4a40",0,.9,1.51,.8,1.8,.04),this.mesh(n,"box","#ffd27a",.9,1.5,1.52,.45,.4,.03,{emissive:"#f1b44f"}),this.mesh(n,"cylinder","#7d6a4f",-1.9,2,1.2,.06,4,.06),this.mesh(n,"box","#ef9f60",-1.55,3.6,1.2,.7,.45,.03),this.mesh(n,"box","#8a7352",1.4,.35,-1.9,1,.7,.8);break}case"snowpine":{this.mesh(n,"cylinder",i,0,1.15,0,.16,2.3,.16),this.mesh(n,"cone","#2f5f55",0,2.35,0,1.18,2.4,1.18),this.mesh(n,"cone","#eef4f2",0,2.75,0,.95,1.1,.95),this.mesh(n,"cone","#3b6b60",0,3.25,0,.8,1.6,.8),this.mesh(n,"cone","#eef4f2",0,3.75,0,.45,.7,.45);break}case"ice":{for(let o=0;o<4;o++)this.mesh(n,"cone",o%2?"#cfeaf0":"#a9d6e2",Math.cos(o*1.7)*.4,.55+o%3*.2,Math.sin(o*1.7)*.35,.28,1.1+o%3*.4,.28).rotation.set(Math.sin(o*1.7)*.3,0,-Math.cos(o*1.7)*.3);break}case"drift":this.mesh(n,"ico","#eef3f1",0,0,0,1.1,.38,.9);break;case"haystack":{a%2?(this.mesh(n,"cylinder","#d6b25a",0,.7,0,.7,1.2,.7).rotation.x=Math.PI/2,this.mesh(n,"cylinder","#e8cb7a",0,.7,.61,.55,.03,.55).rotation.x=Math.PI/2):(this.mesh(n,"cylinder","#d6b25a",0,.55,0,.9,1.1,.9),this.mesh(n,"cone","#e2c070",0,1.5,0,.95,.9,.95));break}case"barn":{const o=a%2?"#a8483a":"#b85a40";this.mesh(n,"box",o,0,1.6,0,6.2,3.2,8.2);for(const c of[-1,1])this.mesh(n,"box","#5b4a44",c*1.65,3.9,0,3.7,.22,8.6).rotation.z=-c*.62;this.mesh(n,"box","#e8dcc0",0,1.3,4.11,2.4,2.6,.05),this.mesh(n,"box",o,0,1.3,4.14,2.1,2.3,.04);for(const c of[-.78,.78])this.mesh(n,"box","#e8dcc0",0,1.3,4.16,2.9,.14,.03).rotation.z=c;break}case"fence":{for(const o of[-1.1,0,1.1])this.mesh(n,"box","#8a7352",o,.45,0,.12,.9,.12);for(const o of[.35,.7])this.mesh(n,"box","#a08660",0,o,0,2.4,.08,.06);break}case"crops":{this.mesh(n,"box","#7a6440",0,.02,0,3.2,.04,2.8);for(let o=0;o<4;o++)this.mesh(n,"box",a%2?"#d4b14a":"#7ea24a",0,.2,-1.05+o*.7,3,.32,.28);break}case"tank":{this.mesh(n,"cylinder","#9c968a",0,1.6,0,2,3.2,2),this.mesh(n,"cone","#868276",0,3.55,0,2.05,.7,2.05),this.mesh(n,"cylinder","#9c705b",0,1.1,0,2.04,.35,2.04),this.mesh(n,"box","#5b6360",1.95,1.8,.4,.1,3.6,.3);break}case"chimney":{this.mesh(n,"cylinder","#8a5a48",0,3.4,0,.75,6.8,.75);for(const o of[1.6,4.2,6.5])this.mesh(n,"cylinder","#6e4a3c",0,o,0,.8,.25,.8);this.mesh(n,"box","#6f6b5d",0,.3,0,2,.6,2);break}case"pipes":{for(const o of[-.32,.32])this.mesh(n,"cylinder","#7d8a86",o,1.05,0,.3,6.4,.3).rotation.x=Math.PI/2;for(const o of[-2.4,0,2.4]){this.mesh(n,"box","#5b6360",0,.45,o,1.3,.9,.2);for(const c of[-.32,.32])this.mesh(n,"cylinder","#9c705b",c,1.05,o,.36,.12,.36).rotation.x=Math.PI/2}break}case"crate":case"locker":case"lootbox":{const o=t.type==="locker",c=o?1.5:.82;this.mesh(n,"box",o?"#83948b":"#b49868",0,c/2,0,1.04,c,.81),this.mesh(n,"box","#dfcb91",0,c+.03,0,1.1,.12,.87),this.mesh(n,"box","#dcc991",0,c*.5,.42,.84,.1,.035),this.mesh(n,"box","#5c6e60",.23,c*.65,.45,.12,.18,.07),this.mesh(n,"box","#dddda7",-.17,c*.65,.45,.25,.27,.02,{emissive:"#9f985f"});break}case"growth":this.addGrowth(n,0,0,1);break;case"flowers":case"grass":case"scrub":{for(let o=0;o<3;o++){const c=(o-1)*.25,l=this.mesh(n,"cone",jx[e.id]||"#7e9a74",c,.2,o%2*.25,.13,.41,.1);l.rotation.z=(o-1)*.18,t.type==="flowers"&&this.mesh(n,"ico",["#efe1b4","#e2b094","#c4ccab"][o],c,.44,o%2*.25,.13,.065,.13)}t.type==="scrub"&&this.mesh(n,"ico",e.trees,0,.3,0,.68,.38,.57);break}}return n.position.set(t.x,this.terrainHeight(t.x,t.y,this.seed??1,this.legLength??2700),-t.y),n.rotation.y=t.rotation||0,n.scale.setScalar(t.scale||1),n}makeRubbleEffect(t,e,n){const i=new Qt,r=t.effectHeight??(t.type==="chimney"?6.6:0);if(i.position.set(t.x,this.terrainHeight(t.x,t.y,e,n)+r*(t.scale||1),-t.y),i.userData.prop=t,i.userData.smoke=[],i.userData.flame=[],i.scale.setScalar(t.scale||1),t.smoke)for(let a=0;a<3;a++){const o=this.mesh(i,"ico","#394342",0,.65+a*.38,0,.36,.3,.36,{basic:!0,opacity:.55});i.userData.smoke.push(o)}if(t.fire)for(let a=0;a<3;a++){const o=this.mesh(i,"cone",a%2?"#ffd079":"#e6983d",(a-1)*.23,.48,0,.22,.6,.2,{basic:!0});i.userData.flame.push(o)}return i}animateRubbleEffect(t,e){const n=t.userData.prop;t.visible=Math.abs(n.x-e.x)<30&&Math.abs(n.y-e.y)<45,t.visible&&(t.userData.smoke.forEach((i,r)=>{const a=(this.time*.4+r/3+ne(Math.floor(n.x*13+n.y),this.seed))%1;i.position.set(a*.6+Math.sin(this.time+r)*.1,.45+a*2.6,0),i.scale.setScalar(.35+a*.65)}),t.userData.flame.forEach((i,r)=>{i.scale.y=.65+Math.sin(this.time*9+r*2+n.x)*.2,i.position.y=.22+i.scale.y/2}))}addGrowth(t,e,n,i){const r=this.mesh(t,"ico","#39463e",e,n+.03,0,1.08*i,.09,.94*i);r.rotation.y=.4;for(let a=0;a<3;a++){const o=e+(a-1)*.35*i;this.mesh(t,"cylinder","#57414b",o,n+.24*i,a%2*.3,.055*i,.5*i,.055*i),this.mesh(t,"ico",a%2?"#f08079":"#d45169",o,n+.5*i,a%2*.3,.28*i,.14*i,.25*i)}for(let a=0;a<4;a++){const o=this.mesh(t,"box","#4b4947",e+Math.cos(a*1.6)*.53,n+.05,Math.sin(a*1.6)*.6,.075,.09,1.35*i);o.rotation.y=a*1.6}}makeGate(){const t=new Qt,e=[];for(const n of[-1,1]){const i=new Qt;i.position.x=n*re.gateHalf;const r=-n;for(let a=0;a<4;a++)this.mesh(i,"box","#6b5a44",r*(.45+a*1.2),1.35,0,.2,2.7,.25);for(const a of[.6,1.6,2.4])this.mesh(i,"box","#8a7352",r*re.gateHalf/2,a,.05,re.gateHalf-.1,.26,.14);this.mesh(i,"box","#6b5a44",r*re.gateHalf/2,1.5,.12,re.gateHalf*1.1,.2,.1).rotation.z=r*.42;for(let a=0;a<5;a++)this.mesh(i,"cone","#4a3d30",r*(.4+a*1.05),2.95,0,.16,.5,.16);this.mesh(i,"box","#d76465",r*re.gateHalf*.55,1.9,.16,1.5,.9,.03),t.add(i),e.push(i)}return t.userData.doors=e,t.userData.open=0,t}syncGate(t){const e=t.legLength||2700,n=t.seed??1;this.gate||(this.gate=this.makeGate(),this.scene.add(this.gate));const i=Math.max(1,Math.round((t.player.y-re.gate)/e)),r=i*e+re.gate;if(this.gate.visible=Math.abs(t.player.y-r)<110,!this.gate.visible)return;const a=te(r,n,e);this.gate.position.set(a,this.terrainHeight(a,r,n,e),-r);const o=i*e===t.checkpointY&&!t._bossDefeated,c=this.gate.userData.open=Math.max(0,Math.min(1,this.gate.userData.open+(o?-.04:.02))),[l,h]=this.gate.userData.doors;l.rotation.y=c*1.45,h.rotation.y=-c*1.45}makeBeacon(){const t=new Qt,e=new _e(this.geometries.ring,this.material("#f6db95",{basic:!0,opacity:.65}));return e.rotation.x=-Math.PI/2,e.scale.setScalar(2.15),e.position.y=.07,t.add(e),this.mesh(t,"cylinder","#dcc898",0,1.6,0,.075,3.2,.075),this.mesh(t,"box","#f2d99b",.54,2.75,0,1.12,.68,.045,{emissive:"#b19658"}),this.mesh(t,"box","#5a776b",.51,2.75,.025,.14,.38,.01),this.mesh(t,"box","#5a776b",.51,2.75,.028,.38,.14,.01),this.mesh(t,"box","#9e936e",0,.18,0,.5,.36,.5),t.userData.ring=e,t}terrainSample(t,e,n,i){(this.terrainSeed!==n||this.terrainLegLength!==i||this.terrainCache.size>8e4)&&(this.terrainCache=new Map,this.terrainRows=new Map,this.groundTones=new Map,this.terrainSeed=n,this.terrainLegLength=i);const r=Math.round(e*4)*8192+Math.round((t+800)*4);let a=this.terrainCache.get(r);if(a!==void 0)return a;let o=this.terrainRows.get(e);if(!o){this.terrainRows.size>4e3&&this.terrainRows.clear();const g=la(e,n,i);o={roads:_o(n,e-10,e+10,i).filter(_=>Math.abs(e-_.y)<=_.width/2+5),center:te(e,n,i),branch:g?Je(g,e):null,bounds:Qe(e,n,i),plaza:[-4,0,4].some(_=>mn(e+_,n,i))},this.terrainRows.set(e,o)}const c=o.roads.some(g=>t>=g.minX-6&&t<=g.maxX+6)||o.plaza&&Math.abs(t-o.center)<re.clear+9,l=Math.min(Math.abs(t-o.center),o.branch===null?1/0:Math.abs(t-o.center-o.branch)),h=c?0:Math.max(0,l-13),u=on[Pe(e,n,i,t)],f=["mountain","cliff","canyon"].includes(u.id);a=h?(f?Math.sin(t*.35+e*.03)*Math.min(3.2,h*.16):Math.sin(t*.5+e*.12)*Math.min(["tundra","desert"].includes(u.id)?.8:.42,h*.04))-.1:-.025;const d=Math.max(o.bounds.minX-t,t-o.bounds.maxX);return d>-3&&(u.edge==="rise"?a=Math.max(a,-.1)+kr(-1,6,d)*(5.5+2*Math.sin(e*.07+t*.05)):u.edge==="ice"?a+=kr(-1,5,d)*(2.8+.8*Math.sin(e*.09)):u.edge==="dune"?a+=kr(-2,10,d)*(2.6+1.3*Math.sin(e*.045+t*.03)):u.edge==="sink"&&(a=Math.min(a,-.1)-kr(-1,4,d)*1.5)),this.terrainCache.set(r,a),a}groundTone(t,e,n,i,r){const a=-n,o=Math.round(a*4)*8192+Math.round((t+800)*4);(this.terrainSeed!==i||this.terrainLegLength!==r)&&this.terrainSample(t,a,i,r),this.groundTones.size>8e4&&this.groundTones.clear();let c=this.groundTones.get(o);if(!c){c=jr(on[Pe(a,i,r,t,!0)].ground).clone().multiplyScalar(2);for(const[l,h]of[[0,5],[0,-5],[0,10],[0,-10],[7,0],[-7,0]])c.add(jr(on[Pe(a+h,i,r,t+l,!0)].ground));c.multiplyScalar(1/8),this.groundTones.set(o,c)}return c}terrainGeometry(t,e,n,i){const r=uc,a=6,o=ho,c=r+1,l=[],h=[],u=[],f=[],d=[];for(let x=0;x<=a;x++)for(let y=0;y<=r;y++){const b=(y/r-.5)*o,T=t+(e-t)*x/a;l.push(b),h.push(T),u.push(this.terrainSample(b,T,n,i)),f.push(this.groundTone(b,0,-T,n,i)),d.push(on[Pe(T,n,i,b,!0)])}const g=new Float32Array(r*a*18),_=new Float32Array(r*a*18),m=new Kt;let p=0;for(let x=0;x<a;x++)for(let y=0;y<r;y++){const b=[x*c+y,x*c+y+1,(x+1)*c+y,(x+1)*c+y+1];for(const T of[[0,1,2],[1,3,2]]){const C=b[T[0]],P=b[T[1]],S=b[T[2]],M=(u[C]+u[P]+u[S])/3,D=d[C];let A=null;D.edge==="rise"&&M>1.4?A=D.id==="canyon"?M>4.2?"#c9774a":"#a9583a":M>4.2?"#a3ad9f":"#7f8c84":D.edge==="ice"&&M>.7?A=M>2.2?"#eef4f3":"#cfe3e8":D.edge==="dune"&&M>.7?A=D.verge:D.edge==="sink"&&M<-.45&&(A="#58664c"),A?m.copy(jr(A)):m.copy(f[C]).add(f[P]).add(f[S]).multiplyScalar(1/3),m.multiplyScalar(.88+ne(y*23+x*113+Math.floor(t),n)*.24);for(const I of[C,P,S])g[p]=l[I],g[p+1]=u[I],g[p+2]=-h[I],_[p]=m.r,_[p+1]=m.g,_[p+2]=m.b,p+=3}}const E=new Fe;return E.setAttribute("position",new ue(g,3)),E.setAttribute("color",new ue(_,3)),E.computeVertexNormals(),E}terrainHeight(t,e,n,i){const r=Math.floor(e/24)*24,a=Math.max(0,Math.min(uc-1,Math.floor((t+ho/2)/6))),o=Math.max(0,Math.min(5,Math.floor((e-r)/4))),c=-ho/2+a*6,l=r+o*4,h=Math.max(0,Math.min(1,(t-c)/6)),u=Math.max(0,Math.min(1,(e-l)/4)),f=(p,E)=>this.terrainSample(p,E,n,i),d=f(c,l),g=f(c+6,l),_=f(c,l+4),m=f(c+6,l+4);return h+u<=1?d+h*(g-d)+u*(_-d):m+(1-h)*(_-m)+(1-u)*(g-m)}stripGeometry(t,e,n,i=.015,r=null){const a=[];for(let c=t;c<e-.01;c+=3){const l=Math.min(e,c+3);if(r&&!r(c+1.5))continue;const[h,u]=n(c),[f,d]=n(l);a.push(h,i,-c,u,i,-c,f,i,-l,u,i,-c,d,i,-l,f,i,-l)}const o=new Fe;return o.setAttribute("position",new ue(a,3)),o.computeVertexNormals(),o}roadGeometry(t,e,n,i=6,r=0,a=null,o=l=>te(l,n,this.legLength??2700),c=.015){const l=h=>(typeof i=="function"?i(h):i)/2;return this.stripGeometry(t,e,h=>{const u=o(h)+r;return[u-l(h),u+l(h)]},c,a)}propTemplate(t,e){const n=`${t.type}|${t.variant||0}|${e.id}|${t.corrupted?1:0}|${t.charred?1:0}`;this.templates??=new Map;let i=this.templates.get(n);if(!i){const r=this.makeProp({...t,x:0,y:0,rotation:0,scale:1},e);r.position.set(0,0,0),r.updateMatrixWorld(!0),i=[],r.traverse(a=>{a.isMesh&&i.push({geometry:a.geometry,material:a.material,matrix:a.matrixWorld.clone(),shadow:a.castShadow})}),this.templates.set(n,i)}return i}placeProp(t,e,n,i){const r=new ae().compose(this.tempVector.set(t.x,this.terrainHeight(t.x,t.y,n,i),-t.y),new _s().setFromAxisAngle(co,t.rotation||0),new F().setScalar(t.scale||1));return[this.propTemplate(t,e),r]}bakeStatic(t,e,n=[]){t.updateMatrixWorld(!0);const i=new Map,r=(a,o)=>{const c=`${a.uuid}/${o.uuid}`;return i.has(c)||i.set(c,{geometry:a,material:o,matrices:[],shadow:!1}),i.get(c)};t.traverse(a=>{if(!a.isMesh)return;const o=r(a.geometry,a.material);o.matrices.push(a.matrixWorld.clone()),o.shadow||=a.castShadow});for(const[a,o]of n)for(const c of a){const l=r(c.geometry,c.material);l.matrices.push(new ae().multiplyMatrices(o,c.matrix)),l.shadow||=c.shadow}for(const a of i.values()){const o=new Rr(a.geometry,a.material,a.matrices.length);a.matrices.forEach((c,l)=>o.setMatrixAt(l,c)),o.castShadow=a.shadow,o.receiveShadow=!0,e.add(o)}}makeChunk(t,e,n,i=0){const r=t*24,a=r+24,o=pn(r+12,e,n),c=x=>te(x,e,n),l=new Qt,h=new Jl({vertexColors:!0,roughness:1,flatShading:!0}),u=new _e(this.terrainGeometry(r,a,e,n),h);u.receiveShadow=!0,l.add(u);const f=["city","village"].includes(o.id),d=new Qt;l.userData.band=i,l.userData.ambientEffects=[];const g=(x,y,b=0)=>{if(!x.attributes.position.count){x.dispose();return}const T=new _e(x,this.material(y));T.position.y=b,T.receiveShadow=!0,l.add(T)};for(const x of["asphalt","earth","dirt"])g(this.roadGeometry(r,a,e,y=>an(y,e,n).width,0,y=>an(y,e,n).kind===x,c),x==="earth"?"#96865a":o.road);for(const x of xc(e,r,a,n)){const y=Math.max(r,Math.min(a,(x.start+x.end)/2)),b=pn(y,e,n).road,T=P=>c(P)+Je(x,P);g(this.roadGeometry(r,a,e,P=>an(P,e,n).width+.2,0,P=>P>x.start&&P<x.end,T,.011),b);for(const P of[-1,1])g(this.roadGeometry(r,a,e,.24,P*.6,S=>S>x.start+3&&S<x.end-3,T,.02),Or(b));const C=P=>P>x.start&&P<x.start+30||P>x.end-30&&P<x.end;g(this.stripGeometry(r,a,P=>[Math.min(c(P),T(P)),Math.max(c(P),T(P))],.012,C),Or(b));for(let P=Math.ceil((x.start+8)/7)*7;P<Math.min(a,x.start+36);P+=7){if(P<r)continue;const S=Math.atan((T(P+1)-T(P-1))/2);for(const M of[-.6,.6]){const D=this.mesh(d,"box","#eddfb1",T(P)+Math.sin(S)*.3+M*.45,.03,-P+.25,.16,.02,1.1);D.rotation.y=M-S}}}for(const x of[-1,1])g(this.roadGeometry(r,a,e,.24,x*.6,y=>an(y,e,n).kind==="dirt",c,.02),Or(o.road));const _=mn(r,e,n)||mn(a,e,n)||mn((r+a)/2,e,n),m=_&&uo[_.biome]||uo.city;g(this.roadGeometry(r,a,e,re.clear*2+3,0,x=>!!mn(x,e,n),c,.008),m);for(let x=Math.ceil(r/6)*6;x<a;x+=6)if(mn(x,e,n))for(const y of[-1,1])this.mesh(d,"box",Or(m),c(x)+y*(re.clear/2+3),.014,-x,re.clear-4,.012,.12);if(f)for(const x of[-1,1])g(this.roadGeometry(r,a,e,.7,x*3.5,y=>an(y,e,n).kind==="asphalt"&&ne(Math.floor(y/6)*13,e)>.25,c),"#939d7b",.025);const p=new Map;for(const x of[-1,1])for(let y=r;y<a-.01;y+=3){const b=y+1.5,T=Qe(b,e,n),C=x<0?T.minX:T.maxX,P=pn(b,e,n,C+x*6);P.edge==="sink"&&(p.has(P.water)||p.set(P.water,[]),p.get(P.water).push([y,x]))}for(const[x,y]of p){const b=[];for(const[C,P]of y){const S=Math.min(a,C+3),M=U=>{const O=Qe(U,e,n);return P<0?[O.minX-75,O.minX-1.1]:[O.maxX+1.1,O.maxX+75]},[D,A]=M(C),[I,N]=M(S);b.push(D,-.42,-C,A,-.42,-C,I,-.42,-S,A,-.42,-C,N,-.42,-S,I,-.42,-S)}const T=new Fe;T.setAttribute("position",new ue(b,3)),T.computeVertexNormals(),g(T,x)}for(let x=Math.ceil(r/6)*6;x<a;x+=6){const y=an(x,e,n),b=T=>ne(Math.floor(x/6)*47+T,e);if(y.kind==="asphalt"){if(b(1)>.25){const P=this.mesh(d,"box","#adaf86",c(x),.037,-x,.1,.019,.8+b(2));P.rotation.y=Math.atan((c(x+1)-c(x-1))/2)}const T=(b(3)-.5)*Math.min(3.8,y.width-2.3),C=this.mesh(d,"ico",b(4)>.5?"#3a4b42":"#6b7661",c(x)+T,.031,-x-1.5,.35+b(5)*.75,.025,.5+b(6)*.6);C.rotation.y=b(7)*6.28;for(let P=0;P<3;P++){const S=this.mesh(d,"box","#34473d",c(x)+T+P*.23,.043,-x+P*.31,.035,.017,.65);S.rotation.y=P%2?-.66:.5}if(y.urban)for(let P=0;P<2;P++)this.mesh(d,"ico","#81916d",c(x)+(P?-1:1)*3.4,.08,-x+b(8+P)*2,.18,.12,.21)}else if(y.urban)for(const T of[-1,1]){this.mesh(d,"ico","#677852",c(x)+T*2.2,.026,-x,1,.035,1.65);const C=this.mesh(d,"box","#4a5a4d",c(x)+T*2.5,.026,-x-1,1.1,.035,1.2);C.rotation.y=T*.2}}for(const x of _o(e,r-3,a+3,n)){const y=Math.max(r,x.y-x.width/2),b=Math.min(a,x.y+x.width/2);if(y>=b)continue;const T=x.maxX-x.minX;if(this.mesh(d,"box",x.urban?"#56635c":"#aa946a",(x.minX+x.maxX)/2,.018,-(y+b)/2,T,.018,b-y),x.urban)for(const C of[-1,1]){const P=x.y+C*(x.width/2+.37);P>=r&&P<a&&this.mesh(d,"box","#939d7b",(x.minX+x.maxX)/2,.032,-P,T,.04,.7)}}const E=[];for(const x of Zh(e,r,a,n,i*32-58,i*32+58))if(x.type!=="edgewall"&&(Dh.has(x.type)||E.push(this.placeProp(x,on[x.biome]||pn(x.y,e,n),e,n)),(x.smoke||x.fire)&&l.userData.ambientEffects.length<10)){const y=this.makeRubbleEffect(x,e,n);l.add(y),l.userData.ambientEffects.push(y)}if(t===0){for(const x of[-1,1])this.mesh(d,"box","#727c6a",c(5)+x*3.7,1.35,-5,.6,2.7,.72),this.mesh(d,"box","#c9ba8d",c(5)+x*3.7,2.75,-5,.84,.18,.92),this.mesh(d,"box","#f1d596",c(5)+x*3.7,2.12,-4.6,.26,.35,.04,{emissive:"#ae884c"});this.mesh(d,"box","#677465",c(5),3.32,-5,8.1,.52,.64),this.mesh(d,"box","#dece9b",c(5),3.31,-4.66,2.75,.31,.025);for(let x=-2;x<=2;x++)this.mesh(d,"box","#577765",c(5)+x*.34,3.31,-4.64,.1,.18,.02)}return this.bakeStatic(d,l,E),l.userData.ownedMaterials=[h],l}removeChunk(t){this.scene.remove(t),t.traverse(e=>{e.isInstancedMesh&&e.dispose(),e.isMesh&&!Object.values(this.geometries).includes(e.geometry)&&e.geometry.dispose()});for(const e of t.userData.ownedMaterials||[])e.dispose()}resize(t,e){this.width=Math.max(1,t),this.height=Math.max(1,e);const n=this.width/this.height,i=n<.8?28:Math.min(47,29*n);this.camera.left=-i/2,this.camera.right=i/2,this.camera.top=i/n/2,this.camera.bottom=-i/n/2,this.fitDepthRange(),this.renderer.setSize(this.width,this.height,!1)}fitDepthRange(){const t=Kr.length(),e=Kr.clone().negate().divideScalar(t),n=new F().crossVectors(e,co).normalize(),i=new F().crossVectors(n,e),{behind:r,ahead:a,low:o,high:c}=Ch;let l=1/0,h=-1/0;const u=8;for(let d=0;d<=u;d++)for(let g=0;g<=u;g++){const _=Ra.lerp(this.camera.left,this.camera.right,d/u),m=Ra.lerp(this.camera.bottom,this.camera.top,g/u),p=m*i.y,E=-(_*n.z+m*i.z),x=Math.max((c-p)/e.y,(-r-E)/-e.z),y=Math.min((o-p)/e.y,(a-E)/-e.z);x>=y||(l=Math.min(l,x),h=Math.max(h,y))}const f=Math.max(t,2-l);this.cameraScale=f/t,this.camera.near=f+l-1,this.camera.far=f+h+1,this.camera.updateProjectionMatrix(),this.scene.fog.near=lo[0]+f-t,this.scene.fog.far=lo[1]+f-t,this.silhouetteBias.value=bn.bias*2/(this.camera.far-this.camera.near)}screenDirectionToWorld(t,e){const n=new F(0,0,.5).unproject(this.camera),i=new F(t/Math.max(1,this.width)*2,-e/Math.max(1,this.height)*2,.5).unproject(this.camera),r=new F;this.camera.getWorldDirection(r);const a=n.addScaledVector(r,-n.y/r.y),o=i.addScaledVector(r,-i.y/r.y),c=o.x-a.x,l=-(o.z-a.z),h=Math.hypot(c,l);return h>1e-6?{x:c/h,y:l/h}:{x:0,y:0}}screenToWorld(t,e){return this.screenDirectionToWorld(t,e)}screenPosition(t,e){const n=new F(t,0,-e).project(this.camera);return{x:n.x,y:n.y}}bearingTo(t,e){const n=this.player.position.clone().project(this.camera),i=new F(t,0,-e).project(this.camera),r=(i.x-n.x)*this.width/2,a=-(i.y-n.y)*this.height/2,o=Math.hypot(r,a);return o>1e-6?{x:r/o,y:a/o}:{x:0,y:0}}syncEntities(t){const e=new Set,n=(t.enemies||[]).filter(r=>r.hp>0),i=new Map(n.filter(r=>r.telegraph?.kind==="charge").map(r=>[Math.hypot(r.x-t.player.x,r.y-t.player.y),r]).sort((r,a)=>r[0]-a[0]).map(([,r],a)=>[r,a]));n.length>this.enemyCapacity&&this.resizeEnemyBatches(Math.ceil(n.length/32)*32);for(const r of this.enemyBatches.values())r.used=0;for(const r of this.silhouetteBatches?.values()||[])r.used=0;for(const r of n){const a=`enemy-${r.id}`;e.add(a);let o=this.entities.get(a);const c=r.type==="boss"?ey(r.variant,t.boss?.id===r.id?t.boss?.variant:null,r.name,r.biome,t.boss?.name,t.biome?.id):null,l=r.type==="boss"?`boss:${c||""}`:r.type;(!o||o.userData.model!==l)&&(o&&this.scene.remove(o),o=this.makeEnemy(r.type,r.radius,c),this.entities.set(a,o)),o.position.set(r.x,this.terrainHeight(r.x,r.y,t.seed,t.legLength)+.035,-r.y);const h=r.telegraph?.angle??r.charge?.angle??r.angle??Math.atan2(t.player.x-r.x,t.player.y-r.y);o.rotation.y=Math.PI/2-h;const u=Number.isFinite(Number(r.id))?Number(r.id):String(r.id).length*1.37,f=!!r.runner,d=!!r.sprinting;o.position.y+=Math.sin(this.time*(d?15:7)+u)*(d?.06:.035);const g=o.userData.body;g.rotation.z=f?-(d?.34:.12):0,g.scale.set(f?.88:1,f?1.06:1,f?.88:1),o.userData.occlusionPhase??=Math.floor(u*97),this.updateEnemyOcclusion(o,Math.max(.4,r.radius||.7)),o.userData.arrival.visible=r.spawnGrace>0;const _=o.userData.telegraph,m=o.userData.charge,p=o.userData.warningFill,E=r.telegraph,x=E?.kind,y=this.isSignatureShape(E),b=!!E&&!y&&(x==="charge"||x==="root"||x==="wave"||!["burst","ring","slam","circle","pulse"].includes(x)&&Number.isFinite(E.length)&&E.length>0&&!E.radius);_.visible=!!E&&!b&&!y,p.visible=_.visible;const T=r.type==="boss"||x!=="charge"?0:i.get(r)??0,C=T<Rh.full;if(m.visible=b&&(x!=="charge"||T<Rh.max),r.telegraph){const M=r.telegraph.radius||(r.radius||1)*2.5,D=(r.telegraph.x??r.x)-r.x,A=-((r.telegraph.y??r.y)-r.y),I=Math.cos(o.rotation.y),N=Math.sin(o.rotation.y),U=this.terrainHeight(r.telegraph.x??r.x,r.telegraph.y??r.y,t.seed,t.legLength)+.075;_.position.set((D*I-A*N)/o.scale.x,(U-o.position.y)/o.scale.x,(D*N+A*I)/o.scale.x),p.position.copy(_.position),_.scale.setScalar(M/o.scale.x),p.scale.setScalar(M/o.scale.x);const O=r.telegraph.length??(r.type==="dog"?5.9:14.7),$=x==="charge"||!b?(r.radius||.7)*2+.7:Math.max(1.4,r.telegraph.width??(x==="wave"?(r.telegraph.radius||2.5)*2:2.2)),G=O/o.scale.x;x==="charge"||!b?m.position.set(G/2,0,0):m.position.set(_.position.x+G/2,_.position.y,_.position.z),m.scale.set(G,1,$/o.scale.x);for(const V of m.userData.fills)V.visible=C;for(const V of m.userData.bars){V.mesh.visible=C||!V.dark;const st=C?1:.6;if(V.cap){V.mesh.scale.x=V.width*st/O,V.mesh.position.x=.5-V.mesh.scale.x/2;continue}V.mesh.scale.z=V.width*st/$,V.mesh.position.z=V.side*(.5-V.mesh.scale.z/2+(V.dark?.03:0))}}const P=o.userData.health,S=Math.max(0,Math.min(1,r.hp/(r.maxHp||r.hp||1)));P.quaternion.copy(o.quaternion).invert().multiply(this.camera.quaternion),P.userData.fill.scale.x=P.userData.width*S,P.userData.fill.position.x=-P.userData.width*(1-S)/2,this.batchEnemy(o)}this.finishEnemyBatches();for(const r of n)this.isSignatureShape(r.telegraph)&&(e.add(`sig-${r.id}`),this.syncSignature(r,t));for(const r of t.crates||[]){if(r.hp<=0)continue;const a=`crate-${r.id}`;e.add(a);let o=this.entities.get(a);o||(o=this.makeProp({...r,scale:r.scale||(r.radius||.725)/.58,type:Dh.has(r.type)?r.type:"crate"},pn(r.y,t.seed,t.legLength)),this.entities.set(a,o),this.scene.add(o)),o.position.y=this.terrainHeight(r.x,r.y,t.seed,t.legLength)+.035}for(const[r,a]of this.entities)e.has(r)||(this.scene.remove(a),this.entities.delete(r))}dimDrop(t,e){t.userData.dimmed!==e&&(t.userData.dimmed=e,this.dimCache||=new Map,t.traverse(n=>{if(!n.isMesh||!n.material)return;if(n.userData.baseMaterial||=n.material,!e){n.material=n.userData.baseMaterial;return}const i=n.userData.baseMaterial;if(!this.dimCache.has(i)){const r=i.clone(),a={};r.color.getHSL(a),r.color.setHSL(a.h,a.s*.12,a.l*.72),r.emissive&&r.emissive.setScalar(0),r.transparent=!0,r.opacity=(i.opacity??1)*.5,r.depthWrite=!1,this.dimCache.set(i,r)}n.material=this.dimCache.get(i)}),t.userData.item&&t.userData.item.scale.setScalar(e?.85:1))}makeDrop(t){const e=new Qt,n=t.type==="health"?"heal":t.type,i=Fh[n]||Fh.weapon,r=i.color,a=this.disc(r,.24,.74);e.add(a);const o=new _e(this.geometries.ring,this.material(r,{basic:!0,opacity:.62}));o.rotation.x=-Math.PI/2,o.position.y=.07,o.scale.setScalar(.62),e.add(o);const c=new Qt;e.add(c);const l={emissive:r};if(n==="heal"){this.mesh(c,"box",r,0,.82,0,.7,.53,.47,l),this.mesh(c,"box","#8d3c39",0,1.145,0,.45,.075,.15);for(const h of[-.2,.2])this.mesh(c,"box","#8d3c39",h,1.08,0,.07,.16,.15);for(const h of[-.246,.246])this.mesh(c,"box","#fff0cf",0,.82,h,.13,.35,.025,{basic:!0}),this.mesh(c,"box","#fff0cf",0,.82,h,.36,.13,.026,{basic:!0})}else if(n==="shield")this.mesh(c,"shield","#245f83",0,.88,0,1.1,1.1,1.1,l),this.mesh(c,"shield",r,0,.88,.087,.84,.84,.5,l),this.mesh(c,"box","#dcf6ee",0,.91,.135,.065,.45,.028,{basic:!0}),this.mesh(c,"box","#dcf6ee",0,.98,.137,.31,.065,.028,{basic:!0});else if(n==="rapid"){for(const h of[-.22,0,.22])this.mesh(c,"cylinder","#b77931",h,.81,0,.095,.54,.095,l),this.mesh(c,"cone","#f6d58f",h,1.13,0,.093,.16,.093,l),this.mesh(c,"cylinder","#f4c768",h,.55,0,.11,.075,.11);this.mesh(c,"box","#584b39",0,.72,0,.72,.13,.19),this.mesh(c,"bolt","#ffe7a4",0,.85,.15,.7,.7,1,{basic:!0})}else if(n==="power"){this.mesh(c,"cylinder","#624789",0,.89,0,.225,.69,.225),this.mesh(c,"cylinder",r,0,.9,0,.18,.59,.18,l);for(const h of[.56,.76,1.03,1.23])this.mesh(c,"cylinder","#d6a4fa",0,h,0,.23,.055,.23,l);this.mesh(c,"ico","#e7c6ff",0,1.33,0,.12,.12,.12,l),this.mesh(c,"bolt","#eedcff",0,.88,.243,.62,.62,1,{basic:!0})}else if(n==="speed"){this.mesh(c,"box","#a6803d",-.12,.86,0,.31,.48,.32),this.mesh(c,"box",r,.11,.62,0,.7,.25,.37,l),this.mesh(c,"box","#ede4bd",.11,.5,0,.74,.085,.4);for(let h=0;h<3;h++){const u=this.mesh(c,"cone","#ffe8a0",-.32-h*.13,1.04+h*.045,0,.09,.5-h*.04,.09,l);u.rotation.z=-.8-h*.08}this.mesh(c,"box","#f4df8c",-.105,1.08,0,.34,.07,.36)}else{this.mesh(c,"box","#94744a",0,.56,0,.83,.32,.49),this.mesh(c,"box","#d2bb7b",0,.76,0,.87,.075,.53);for(const f of[-.25,.25])this.mesh(c,"box","#4d675a",f,.56,0,.075,.35,.52);const h=t.weapon||"rifle",u=h==="arc"?"#ba88ed":h==="scattergun"?"#df985a":h==="sidearm"?"#e0c486":"#6bc0a1";if(this.mesh(c,"box",u,-.02,1.02,0,h==="sidearm"?.49:.72,.17,.19,{emissive:u}),this.mesh(c,"box","#344e45",-.12,.85,0,.15,.29,.16),h==="arc")this.mesh(c,"ico","#d5b2ff",.38,1.02,0,.19,.19,.19,{emissive:"#b48bec"}),this.mesh(c,"cylinder","#684b8e",.39,1.02,0,.22,.24,.22).rotation.z=Math.PI/2;else{const f=h==="sidearm"?.3:h==="scattergun"?.75:.81;for(const d of h==="scattergun"?[-.075,.075]:[0])this.mesh(c,"cylinder","#dde0b8",.37+f/4,1.02,d,.06,f,.06).rotation.z=Math.PI/2;h==="rifle"&&this.mesh(c,"box","#9ccfb3",-.05,1.15,0,.32,.09,.09),h==="scattergun"&&this.mesh(c,"box","#8e5937",-.46,1.02,0,.28,.2,.19)}}return c.scale.setScalar(1.3),e.userData.item=c,e.userData.style=i,e}syncTransients(t){const e=new Set;for(const n of t.drops||[]){const i=`drop-${n.id}`;e.add(i);let r=this.transients.get(i);r||(r=this.makeDrop(n),this.transients.set(i,r),this.scene.add(r)),r.position.set(n.x,this.terrainHeight(n.x,n.y,t.seed,t.legLength)+.035,-n.y),this.dimDrop(r,n.collectable===!1),r.userData.item.rotation.y=this.time*1.5,r.userData.item.position.y=Math.sin(this.time*3+n.x)*.13}for(const n of t.projectiles||[]){const i=`bullet-${n.id}`;e.add(i);let r=this.transients.get(i);r||(r=new Qt,this.mesh(r,"box",n.weapon==="arc"?"#c5b3ff":"#f9e8b3",0,.96,0,n.weapon==="arc"?.58:.68,.055,.075,{basic:!0}),this.mesh(r,"ico","#fff3c2",.34,.96,0,.07,.08,.08,{basic:!0}),this.transients.set(i,r),this.scene.add(r)),r.position.set(n.x,this.terrainHeight(n.x,n.y,t.seed,t.legLength)+.035,-n.y),r.rotation.y=Math.PI/2-(n.angle||0)}for(const n of t.effects||[]){if(n.type==="warning"&&n.signature)continue;const i=`fx-${n.id}`;e.add(i);let r=this.transients.get(i);const a=n.type==="explosion"||n.type==="death"||n.type==="burst"||n.type==="crate",o=["slam","arc","warning","pickup","hurt"].includes(n.type);if(!r){if(r=new Qt,o){const l=new _e(this.geometries.ring,this.material(n.color||(n.type==="pickup"?"#f0d99b":"#e99080"),{basic:!0,opacity:.6}));l.rotation.x=-Math.PI/2,l.position.y=.09,r.add(l),r.userData.wave=l}for(let l=0;l<(a?7:4);l++){const h=this.mesh(r,"ico",n.color||(n.type==="muzzle"?"#fff0b3":l%2?"#e7b58c":"#d87574"),Math.cos(l*2.3)*.3,.5+l*.09,Math.sin(l*2.3)*.3,.15,.15,.15,{basic:!0});h.userData.offset=new F(Math.cos(l*2.3),.5+l*.14,Math.sin(l*2.3))}this.transients.set(i,r),this.scene.add(r),r.userData.created=this.time}r.position.set(n.x,this.terrainHeight(n.x,n.y,t.seed,t.legLength)+.035,-n.y);const c=this.time-r.userData.created;r.userData.wave&&r.userData.wave.scale.setScalar((n.radius||1.5)*Math.min(1,.25+c*2.5)),r.children.forEach(l=>{l.userData.offset&&(l.position.copy(l.userData.offset).multiplyScalar(.25+c*(a?4:2)),n.type==="muzzle"&&(l.position.y+=.9),l.position.y-=c*c*2,l.scale.setScalar(Math.max(.015,.17-c*.2)))})}for(const[n,i]of this.transients)e.has(n)||(this.scene.remove(i),this.transients.delete(n))}render(t,e=.016){if(!t?.player)return;this.time+=Math.min(.08,e||.016);const n=t.player,i=t.seed??1,r=t.legLength||2700;if(this.seed!==i||this.legLength!==r){for(const b of this.chunks.values())this.removeChunk(b);this.chunks.clear();for(const b of this.entities.values())this.scene.remove(b);this.entities.clear();for(const b of this.transients.values())this.scene.remove(b);this.transients.clear(),this.seed=i,this.legLength=r,this.focus.set(n.x-6.4,0,-n.y-8),this.previousPlayer={x:n.x,y:n.y},this.courierOutline.visible=!1,this.nextOcclusionCheck=this.time}const a=Math.floor((n.y-39)/24),o=Math.floor((n.y+65)/24),c=Math.round(n.x/32);for(const[b,T]of this.chunks)T.userData.band!==c&&(this.removeChunk(T),this.chunks.delete(b));for(let b=a;b<=o;b++){if(this.chunks.has(b))continue;const T=this.makeChunk(b,i,r,c);this.chunks.set(b,T),this.scene.add(T)}for(const[b,T]of this.chunks)(b<a||b>o)&&(this.removeChunk(T),this.chunks.delete(b));const l=pn(n.y,i,r,n.x),h=new Kt(l.sky);this.scene.background.lerp(h,.012),this.scene.fog.color.copy(this.scene.background);const u=this.height<700?4.5:0,f=this.guardianPan||={x:0,z:0};let d=0,g=0;const _=t.boss&&t.boss.hp>0?t.boss:null;if(_&&Number.isFinite(_.x)&&Number.isFinite(_.y)){d=(_.x-n.x)/2,g=-(_.y-n.y)/2;const b=Math.min(8,(this.camera.right-this.camera.left)*.27),T=Math.hypot(d,g);T>b&&(d*=b/T,g*=b/T)}const m=1-Math.exp(-Math.min(.1,e)*2.5);f.x+=(d-f.x)*m,f.z+=(g-f.z)*m,this.focus.lerp(this.tempVector.set(n.x-6.4+u*.62+f.x,0,-n.y-8+u*.78+f.z),1-Math.exp(-e*8)),this.camera.position.copy(this.focus).add(this.tempVector.copy(Kr).multiplyScalar(this.cameraScale));for(const b of this.chunks.values())b.renderOrder=-10,this.applyXray(b);this.camera.lookAt(this.focus),this.camera.updateMatrixWorld(),this.sun.position.set(n.x-18,36,-n.y+12),this.sun.target.position.set(n.x,0,-n.y),this.sun.target.updateMatrixWorld();const p=this.terrainHeight(n.x,n.y,i,r)+.035;this.player.position.set(n.x,p,-n.y);const E=Number.isFinite(n.movingSpeed)?n.movingSpeed:Math.hypot(n.x-(this.previousPlayer?.x??n.x),n.y-(this.previousPlayer?.y??n.y))/Math.max(.01,e);this.previousPlayer={x:n.x,y:n.y},this.animateCourier(n,E,e,t.elapsed||0),this.player.userData.ring.visible=!!n.shield,this.playerShadow.position.set(n.x,p+.01,-n.y),this.updateCourierVisibility(),this.updateXray();for(const b of this.chunks.values())for(const T of b.userData.ambientEffects||[])this.animateRubbleEffect(T,n);this.syncEntities(t),this.syncTransients(t),this.syncGate(t);const x=t.checkpointY??((t.leg||0)+1)*r,y=Math.min(x,n.y+23);this.deliveryBeacon.position.set(te(y,i,r),0,-y),this.deliveryBeacon.visible=x-n.y<25,this.deliveryBeacon.userData.ring.scale.setScalar(2.03+Math.sin(this.time*2)*.13),this.renderer.render(this.scene,this.camera)}dispose(){for(const t of this.chunks.values())this.removeChunk(t);for(const t of this.enemyBatches.values())t.mesh.dispose();for(const t of this.silhouetteBatches.values())t.fill.dispose();for(const t of Object.values(this.silhouetteMaterials))t.dispose();for(const t of[...this.xrayMaterials?.values()||[],...this.warningMaterials?.values()||[]])t.dispose();for(const t of Object.values(this.geometries))t.dispose();for(const t of this.materials.values())t.dispose();this.outlineMaterial.dispose(),this.outlineEdgeMaterial.dispose(),this.renderer.dispose()}}class iy{constructor(t=!0){this.enabled=t,this.paused=!1,this.context=null,this.voices=0,this.limits=new Map,this.lastFootfall=null,this.birdClock=10,this.stats={shots:0,footsteps:0,pickups:0,impacts:0,breaks:0,warnings:0}}async start(){if(!this.context){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.context=new t({latencyHint:"interactive"}),this.master=this.context.createGain(),this.master.gain.value=this.enabled?.58:0;const e=this.context.createDynamicsCompressor();e.threshold.value=-14,e.knee.value=12,e.ratio.value=5,e.attack.value=.003,e.release.value=.18,this.master.connect(e),this.analyser=this.context.createAnalyser(),this.analyser.fftSize=2048,e.connect(this.analyser),this.analyser.connect(this.context.destination),this.effects=this.context.createGain(),this.effects.gain.value=this.paused?0:1,this.effects.connect(this.master),this.noiseBuffer=this.context.createBuffer(1,this.context.sampleRate*2,this.context.sampleRate);const n=this.noiseBuffer.getChannelData(0);for(let a=0;a<n.length;a++)n[a]=Math.random()*2-1;const i=this.context.createBufferSource();i.buffer=this.noiseBuffer,i.loop=!0;const r=this.context.createBiquadFilter();r.type="lowpass",r.frequency.value=420,this.windFilter=r,this.ambient=this.context.createGain(),this.ambient.gain.value=this.paused?.015:.055,i.connect(r),r.connect(this.ambient),this.ambient.connect(this.master),i.start()}await this.context.resume().catch(()=>{})}setEnabled(t){this.enabled=t,t&&this.start().catch(()=>{}),this.master&&this.master.gain.setTargetAtTime(t?.58:0,this.context.currentTime,.025)}setPaused(t){this.paused=t,this.lastFootfall=null,this.context&&(this.effects.gain.setTargetAtTime(t?0:1,this.context.currentTime,.035),this.ambient.gain.setTargetAtTime(t?.015:.055,this.context.currentTime,.3))}ready(){return this.enabled&&!this.paused&&this.context?.state==="running"&&this.voices<48}allow(t,e){const n=this.context.currentTime;return n-(this.limits.get(t)??-1/0)<e?!1:(this.limits.set(t,n),!0)}tone(t,e,n="sine",i=.2,r=t,a=0){if(!this.ready())return;const o=this.context.currentTime+a,c=this.context.createOscillator(),l=this.context.createGain();c.type=n,c.frequency.setValueAtTime(t,o),c.frequency.exponentialRampToValueAtTime(Math.max(20,r),o+e),l.gain.setValueAtTime(1e-4,o),l.gain.linearRampToValueAtTime(i,o+Math.min(.006,e/3)),l.gain.exponentialRampToValueAtTime(1e-4,o+e),c.connect(l),l.connect(this.effects),this.voices++,c.onended=()=>{c.disconnect(),l.disconnect(),this.voices--},c.start(o),c.stop(o+e+.01)}noise(t,e,n=1400,i="lowpass",r=0){if(!this.ready())return;const a=this.context.currentTime+r,o=this.context.createBufferSource(),c=this.context.createBiquadFilter(),l=this.context.createGain();o.buffer=this.noiseBuffer,c.type=i,c.frequency.value=n,c.Q.value=.7,l.gain.setValueAtTime(1e-4,a),l.gain.linearRampToValueAtTime(e,a+.003),l.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(c),c.connect(l),l.connect(this.effects),this.voices++,o.onended=()=>{o.disconnect(),c.disconnect(),l.disconnect(),this.voices--},o.start(a,Math.random()*.8),o.stop(a+t+.01)}event(t,e="sidearm",n={}){if(this.ready())if(t==="shot"&&this.allow("shot",.05))if(this.stats.shots++,e==="scattergun")this.noise(.19,.65,1700),this.tone(130,.23,"sine",.65,36),this.noise(.045,.38,3300,"highpass");else if(e==="rifle")for(const i of[0,.065,.13])this.noise(.055,.4,3200,"bandpass",i),this.tone(185,.075,"triangle",.34,55,i);else e==="arc"?(this.tone(290,.085,"sawtooth",.13,1200),this.tone(95,.28,"sine",.65,28,.035),this.tone(1050,.3,"sine",.18,190,.055),this.noise(.2,.32,2100,"bandpass",.035)):(this.noise(.065,.5,2900),this.tone(210,.09,"triangle",.36,55),this.tone(840,.025,"sine",.12,520));else if(t==="pickup"){this.stats.pickups++;const i={heal:[523,659,784],shield:[440,660,880],rapid:[780,980,1175],power:[330,495,660],speed:[660,880,1320],weapon:[392,587,784]};(i[n.drop]||i.weapon).forEach((r,a)=>this.tone(r,.18,"sine",.25,r,a*.055))}else if(t==="hurt")this.noise(.15,.26,630),this.tone(120,.23,"triangle",.38,42);else if(t==="boss"||t==="ambush"){this.stats.warnings++,this.tone(70,.85,"sawtooth",.18,42),this.tone(105,.7,"sine",.45,58),this.noise(.65,.3,330,"bandpass");for(const i of[0,.22,.44])this.tone(440,.12,"triangle",.18,420,i)}else t==="telegraph"&&this.allow("warning",.25)?(this.stats.warnings++,this.tone(165,.35,"triangle",.25,370),this.noise(.3,.17,440,"bandpass")):t==="checkpoint"||t==="complete"?[392,494,587,784].forEach((i,r)=>this.tone(i,.65,"sine",.24,i,r*.13)):t==="dead"&&[220,165,110].forEach((i,r)=>this.tone(i,.42,"sine",.3,i*.8,r*.18))}effect(t){this.ready()&&(t.type==="hit"&&this.allow("impact",.045)?(this.stats.impacts++,this.noise(.065,.19,t.radius>1.2?600:1700,"bandpass"),this.tone(150,.055,"triangle",.12,60)):t.type==="crate"?(this.stats.breaks++,this.noise(.22,.47,1900),this.tone(280,.12,"triangle",.25,70),this.tone(790,.16,"sine",.12,700,.025)):t.type==="death"&&this.allow("death",.06)?(this.noise(.14,.26,570,"bandpass"),this.tone(115,.17,"triangle",.18,48)):(t.type==="slam"||t.type==="arc")&&this.allow("blast",.12)&&(this.noise(.3,.5,950),this.tone(95,.32,"sine",.55,26)))}update(t,{movingSpeed:e=0,gaitPhase:n=0,biome:i,surface:r="dirt"}={}){if(!this.ready()){this.lastFootfall=null;return}const a=Math.floor(n/Math.PI);if(e>.6&&this.lastFootfall!==null&&a!==this.lastFootfall){this.stats.footsteps++;const o=r==="asphalt";this.noise(o?.055:.095,o?.23:.19,o?1700:2400,o?"bandpass":"lowpass"),this.tone(o?130:85,.065,"sine",.16,45)}this.lastFootfall=e>.6?a:null,this.birdClock-=t,this.birdClock<=0&&["glade","coast","forest","farmland"].includes(i?.id)?(this.birdClock=10+Math.random()*13,this.tone(1800,.12,"sine",.035,2400),this.tone(2200,.1,"sine",.03,1600,.14)):this.birdClock<=0&&i?.id==="marsh"?(this.birdClock=7+Math.random()*9,this.tone(160,.14,"triangle",.05,110),this.tone(150,.12,"triangle",.04,105,.2)):this.birdClock<=0&&i?.id==="industrial"&&(this.birdClock=12+Math.random()*14,this.tone(320,.9,"sawtooth",.012,270)),this.windFilter&&i&&this.windFilter.frequency.setTargetAtTime(["coast","cliff","mountain","tundra","canyon"].includes(i.id)?780:i.id==="burned"?300:420,this.context.currentTime,1)}}const ht=s=>document.getElementById(s),pa="kuru.delivery.v1",zu="kuru.preferences.v1",Qs=["Northgate refuge","Glasswood station","Saltwater depot","Ochre shelter","Pale Ridge post","The Lantern"];let Ve={sound:!0,leftHand:!1};try{Ve={...Ve,...JSON.parse(localStorage.getItem(zu)||"{}")}}catch{}const Dn=new iy(Ve.sound);let yn,Y,rs,Xe=!1,cn=!1,Hu="journey",fc=0,po=0,dc,kh,Cn="",be=null,Ln="";const dn=new Set,de={active:!1,id:null,originX:0,originY:0,x:0,y:0},Mi={x:0,y:0};let pc=new Set,Oh=-1e6,mo="",Br="",Bh=0;const Jr={changed:"",shown:"",pending:"",since:0,seenX:0,seenY:0,lastX:0,lastY:0},zh=new Set,Hh={rapid:"RAPID FIRE · faster fire, shorter reach",power:"OVERCHARGE · more damage per shot",speed:"QUICKSTEP · move faster",shield:"SHIELD · absorbs damage"},Gu={rapid:["≋","#efa840","RAPID FIRE"],power:["ϟ","#aa78ee","OVERCHARGE"],speed:["»","#f1ce65","QUICKSTEP"],shield:["◇","#60bfe3","SHIELD"]};let Vu="",Bc=ln;function Wu(){try{const s=localStorage.getItem(pa);if(!s)return null;let t=JSON.parse(s);if(t&&!We.validateSave(t)){for(const e of["guardianCheckpoint","waypointCheckpoint","checkpoint"])if(t[e]&&We.validateSave(t[e])){const n=e==="checkpoint"?void 0:t.checkpoint&&We.validateSave(t.checkpoint)?t.checkpoint:void 0;t={...t[e],...n?{checkpoint:n}:{}};break}}return!We.validateSave(t)||t.mode==="complete"?(Ln="The previous checkpoint could not be read. You can start a fresh delivery.",null):t}catch{return Ln="Saved progress is unavailable in this browser. Keep this tab open to continue your delivery.",null}}function sy(){try{const s=Y.serialize();return localStorage.setItem(pa,JSON.stringify(s)),be=s,Ln="",!0}catch{return Ln="This browser could not save your checkpoint. Keep this tab open to preserve your journey.",!1}}function Gh(s){const t=s==="waypoint"?Y.waypointSave():Y.guardianSave();if(t)try{localStorage.setItem(pa,JSON.stringify(t)),be=t,Ln=""}catch{}}function Vh(){try{localStorage.setItem(zu,JSON.stringify(Ve))}catch{}}function Xu(){const s=ht("resume-button"),t=ht("begin-button");if(s.classList.toggle("hidden",!be),!be){t.className="primary-button",t.firstChild.textContent="BEGIN DELIVERY ";return}const e=be.legLength??(be.pace==="express"?450:2700),n=Math.max(0,6*e-(be.player?.y??0)),i=n>=1e3?`${(n/1e3).toFixed(1)} KM`:`${Math.round(n/10)*10} M`;s.className="primary-button";const r=o=>o&&Math.abs(o.player.y-be.player.y)<.01&&o.leg===be.leg,a=r(be.guardianCheckpoint)?"AT THE GUARDIAN GATE":r(be.waypointCheckpoint)?"AT A WAYPOINT":`${i} TO GO`;s.innerHTML=`RESUME · ${a} · LEG ${Math.min(6,(be.leg??0)+1)} OF 6 <span>→</span>`,t.className="text-button",t.firstChild.textContent="START A NEW DELIVERY ",t.parentNode.insertBefore(s,t)}function Yu(){ht("save-notice").textContent=Ln,ht("save-notice").classList.toggle("hidden",!Ln)}function ma(s){const t=Math.max(0,Math.floor(s));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}let Zr=null;function Gn(s,t=3600,e=!1){if(!ht("encounter").classList.contains("hidden")){e||(Zr=[s,t]);return}clearTimeout(dc),ht("toast").classList.toggle("area",e),ht("toast").textContent=s,ht("toast").classList.remove("hidden"),dc=setTimeout(()=>ht("toast").classList.add("hidden"),t)}function zr(s){clearTimeout(kh),clearTimeout(dc),ht("toast").classList.add("hidden"),ht("encounter-text").textContent=s,ht("encounter").classList.remove("hidden"),kh=setTimeout(()=>{if(ht("encounter").classList.add("hidden"),Zr){const[t,e]=Zr;Zr=null,Gn(t,e)}},4200)}function ys(){dn.clear(),de.active=!1,de.id=null,de.x=de.y=0,Mi.x=Mi.y=0,ht("joystick").classList.remove("active"),ht("stick-knob").style.transform="",zc()}function zc(){ht("joystick").style.left=Ve.leftHand?"30%":"70%",ht("joystick").style.top="79%"}function Hc(s){cn=s,ys(),Dn.setPaused(s)}function ln(){ht("modal").classList.add("hidden"),Xe&&Y.mode==="playing"&&Hc(!1)}function Xn(s,t,e,n){Bc=ln,ys(),Xe&&Hc(!0),ht("modal-eyebrow").textContent=s,ht("modal-title").textContent=t,ht("modal-content").innerHTML=e,ht("modal-actions").replaceChildren();for(const[i,r,a=!1]of n){const o=document.createElement("button");if(o.className=a?"primary-button":"secondary-button",o.textContent=i,a){const c=document.createElement("span");c.textContent="↗",o.append(c)}o.onclick=r,ht("modal-actions").append(o)}ht("modal").classList.remove("hidden"),ht("modal").scrollTop=0,document.querySelector(".modal-panel").scrollTop=0,ht("modal-content").scrollTop=0,setTimeout(()=>ht("modal-actions").querySelector("button")?.focus({preventScroll:!0}),0)}function $u(){const s=Xe&&cn&&Y?.mode==="playing";Xn("COURIER’S FIELD GUIDE","A way through.",`<ul class="guide-list">
    <li><span>◎</span><div><b>One thumb. Any direction.</b><br>Drag in the lower part of the screen to move. Release to stop. Explore beyond the city to the map edge; the arrow points back to your next refuge. On a computer, use WASD or arrow keys.</div></li>
    <li><span>⌁</span><div><b>You move. Your gear handles the rest.</b><br>Your courier chooses weapons and fires automatically. Single shots reach farther; rapid fire and volleys have shorter range. Move closer to bring more firepower into play. There’s no ammunition to manage.</div></li>
    <li><span>≋</span><div><b>Boost chips.</b><br>Icons under the route name show active boosts: ≋ rapid fire, ϟ overcharge, » quickstep, ◇ shield. The number is seconds left (shield points).</div></li>
    <li><span>◇</span><div><b>Take the road less empty.</b><br>Approach lockers and crates to shoot them open. Walk over glowing drops for weapons, health, shields and temporary upgrades.</div></li>
    <li><span>!</span><div><b>Keep moving when it turns red.</b><br>Fast packs and large swarms can surround you. Dodge red warning lanes and rings. Health bars show each threat’s strength. No enemy falls to a single shot: dogs and walkers take two or three, brutes eight or more and guardians sixteen or more. Every pellet of one trigger pull counts as one shot, and each bullet stops at its first target or solid obstacle, including Arc rounds.</div></li>
    <li><span>↗</span><div><b>Make it to the next light.</b><br>Defeat the guardian, evade its minions, then return to the refuge beacon. Checkpoints heal you, patch your parcel up to 85% and save your loadout on this browser. You can leave there and return later. Death returns you to the last checkpoint.</div></li>
  </ul>`,[["GOT IT",s?ps:ln,!0]]),Bc=s?ps:ln}function ry(){const s=Y.legLength,t=Y.leg||0,e=44,n=3,i=9,r=36,a=(h,u)=>i+h*(e+n)+Math.max(0,Math.min(1,(u-h*s)/s))*e;let o="",c=0;for(let h=0;h<Qs.length;h++){for(const d of uf(Y.seed,h,s)){const g=on[d.id].ground,_=a(h,d.start),m=a(h,d.end);o+=`<rect x="${_.toFixed(1)}" y="${r-4}" width="${(m-_).toFixed(1)}" height="8" fill="${g}"/>`}for(const d of xc(Y.seed,h*s,(h+1)*s,s)){c++;const g=a(h,d.start),_=a(h,d.end),m=d.side*15,p=on[d.biome].ground;o+=`<path d="M${g.toFixed(1)} ${r} Q${((g+_)/2).toFixed(1)} ${r+m*2} ${_.toFixed(1)} ${r}" fill="none" stroke="#12291f" stroke-width="4.5" stroke-linecap="round"/><path d="M${g.toFixed(1)} ${r} Q${((g+_)/2).toFixed(1)} ${r+m*2} ${_.toFixed(1)} ${r}" fill="none" stroke="${p}" stroke-width="2.5" stroke-linecap="round"/>`}const u=i+h*(e+n)+e,f=h<t;o+=`<circle cx="${u}" cy="${r}" r="4.5" fill="${f?"#efc687":"#172823"}" stroke="#efc687" stroke-width="1.2"/><text x="${u-e/2}" y="${r+29}" text-anchor="middle" fill="${h===t?"#efc687":"#f3f0df99"}" font-size="7" font-family="IBM Plex Mono, monospace" letter-spacing="1">0${h+1}</text>`}const l=a(t,Y.player.y);return o+=`<path d="M${l.toFixed(1)} ${r-7} l-5 -10 h10 Z" fill="#efc687" stroke="#12291f" stroke-width="1"/>`,`<svg class="route-strip" viewBox="0 0 300 ${r+36}" role="img" aria-label="Route strip: six legs, ${c} forks that rejoin the main road, you are on leg ${t+1}">${o}</svg><p class="strip-note">ARCS ARE FORKS THROUGH ANOTHER ENVIRONMENT · THEY REJOIN THE ROAD · ▼ YOU</p>`}function qu(){const s=Y.player.y-Y.leg*Y.legLength,t=Math.max(0,Math.ceil(Y.checkpointY-Y.player.y));if(Y.pace==="journey"&&!Y._bossSpawned){const e=(Math.floor(s/600)+1)*600-s;if(e<t-80)return`NEXT SAVE · ${Math.ceil(e)} M (WAYPOINT) · REFUGE ${t} M`}return`NEXT SAVE · THE REFUGE, ${t} M AHEAD`}function ay(){const s=Y?.leg||0,t=Qs.map((e,n)=>`<li class="${n===s?"current":""}"><span class="stop-number">0${n+1}</span><div><b>${e}</b><small>${n<s?"CHECKPOINT SECURED":n===s?Y._bossDefeated?"CURRENT DESTINATION · PATH CLEAR":"CURRENT DESTINATION · GUARDIAN AHEAD":n===5?"DELIVERY DESTINATION":"SAFEHOUSE · GUARDIAN AHEAD"}</small></div><span class="stop-state">${n<s?"✓":n===s?"↗":"○"}</span></li>`).join("");Xn("DISPATCH 001 · MEDICAL SUPPLIES","Six lights ahead.",`<p>From District 08 to The Lantern. Each leg passes through reclaimed streets, forests, forgotten villages, coast, desert and high country.</p><p class="save-note">${qu()}</p>${ry()}<ol class="route-list">${t}</ol><p class="save-note">${Y.pace==="express"?"FIELD TEST · About 11–15 minutes total. Refuges roughly every two minutes.":"THE JOURNEY · About 35–45 minutes in all. Refuges are roughly 6–8 minutes apart, with a waypoint save every 600 m."}</p>`,[["BACK TO THE ROAD",ln,!0]])}function ps(){!Xe||Y.mode!=="playing"||(Xn("TAKE A BREATH","The road can wait.",`<p>Your delivery is paused. ${Y.pace==="journey"?`${qu().replace("NEXT SAVE · ","Next save: ").toLowerCase().replace(/^./,s=>s.toUpperCase())}. `:""}${be?`Your last saved stop is checkpoint ${be.checkpointCount||"departure"}.`:"Your first checkpoint is still ahead."} Progress after a checkpoint stays in this tab until the next safehouse.</p><div class="settings-row"><span>Soundscape</span><button id="sound-toggle">${Ve.sound?"ON":"OFF"}</button></div><div class="settings-row"><span>Thumb position</span><button id="hand-toggle">${Ve.leftHand?"LEFT":"RIGHT"}</button></div><div class="stats-grid"><div>${ma(Y.elapsed)}<small>ON THE ROAD</small></div><div>${Y.kills}<small>INFECTED CLEARED</small></div></div>`,[["CONTINUE DELIVERY",ln,!0],["FIELD GUIDE",$u],["RETURN TO DISPATCH",()=>oy()]]),ht("sound-toggle").onclick=()=>{Ve.sound=!Ve.sound,Dn.setEnabled(Ve.sound),Vh(),ht("sound-toggle").textContent=Ve.sound?"ON":"OFF"},ht("hand-toggle").onclick=()=>{Ve.leftHand=!Ve.leftHand,zc(),Vh(),ht("hand-toggle").textContent=Ve.leftHand?"LEFT":"RIGHT"})}function oy(){Xn("RETURN TO DISPATCH","Leave the road?","<p>Your last checkpoint will remain saved. Travel since that checkpoint will be lost if you start a new delivery or close this tab.</p>",[["STAY ON THE ROAD",ln,!0],["RETURN TO DISPATCH",Ei]])}function Ei(){Xe=!1,cn=!1,Cn="",ys(),ht("modal").classList.add("hidden"),ht("hud").classList.add("hidden"),ht("intro").classList.remove("hidden"),be=Wu(),Xu(),Yu(),Dn.setPaused(!0)}function cy(){const s={...Y.refugeReport||{}};Number.isFinite(s.hpBefore)&&Number.isFinite(Y.player.hp)&&(s.hpAfter=Y.player.hp);const t=(n,i,r)=>Number.isFinite(i)&&Number.isFinite(r)?`<b>${n} ${Math.round(i)}${n==="Parcel"?"%":""} → ${Math.round(r)}${n==="Parcel"?"%":""}</b>`:"",e=[t("Courier",s.hpBefore,s.hpAfter),t("Parcel",s.parcelBefore,s.parcelAfter)].filter(Boolean);return e.length?e.join(" · "):"Your courier is patched up and the parcel is patched"}function ly(){const s=Vu||Y.refugeReport?.rule||Y.refugeReport?.healRule||Y.refugeReport?.healText||Y.healRule||"";return s?`<p class="heal-rule">${Gc(String(s))}</p>`:""}function Ku(){const s=sy();Xn(`CHECKPOINT 0${Y.checkpointCount} · ${Qs[Y.leg].toUpperCase()}`,"A little shelter.",`<p>The guardian is gone. ${cy()}. The next stretch of road is waiting.</p>${ly()}<div class="stats-grid"><div>${ma(Y.elapsed)}<small>ON THE ROAD</small></div><div>${Y.kills}<small>INFECTED CLEARED</small></div><div>${Y.weapons.length}<small>WEAPONS CARRIED</small></div><div>0${Y.checkpointCount}<small>SAFEHOUSES SECURED</small></div></div><p class="save-note">${s?"✓ Checkpoint saved on this browser. You can close the tab and resume here later.":Ln}</p>`,[["CONTINUE DELIVERY",()=>{Y.continueJourney(),Cn="",ln(),Gn(`Next refuge: ${Qs[Y.leg]}`)},!0],["REST & RETURN TO DISPATCH",Ei]])}function hy(){const s=Y.canRetryGuardian,t=Y.canRetryWaypoint,e=Y.checkpointCount?`checkpoint ${Y.checkpointCount}`:"District 08",n=s?`<p>The guardian won this round. You can <b>retry at its gate</b>, about 35 m short of it with this stretch of road behind you and full health, or go back to your last refuge (${e}) and walk the leg again.</p>`:t?`<p>The road took its toll. You can <b>retry from your last waypoint</b>, saved about every 600 m (every retry starts at full health), or go back to your last refuge (${e}) and walk the whole leg again.</p>`:`<p>The road took its toll. Your supplies and route up to ${e} are safe. Try a different line through the danger.</p>`,i=()=>{Y.retryCheckpoint(),Cn="",ln()},r=s?[["RETRY AT THE GUARDIAN",()=>{Y.retryGuardian(),Cn="",ln()},!0],["BACK TO LAST REFUGE",i],["RETURN TO DISPATCH",Ei]]:t?[["RETRY FROM WAYPOINT",()=>{Y.retryWaypoint(),Cn="",ln()},!0],["BACK TO LAST REFUGE",i],["RETURN TO DISPATCH",Ei]]:[["RETURN TO LAST CHECKPOINT",i,!0],["RETURN TO DISPATCH",Ei]];Xn("THE COURIER NETWORK","Not the end.",`${n}<div class="stats-grid"><div>${ma(Y.elapsed)}<small>ON THE ROAD</small></div><div>${Y.kills}<small>INFECTED CLEARED</small></div></div>`,r)}function uy(){try{localStorage.removeItem(pa)}catch{}be=null,Xn("DISPATCH 001 · RECEIVED","You kept a light on.",`<p>The Lantern received your medical supplies. Somewhere behind those walls, someone has another tomorrow.</p><div class="stats-grid"><div>${ma(Y.elapsed)}<small>DELIVERY TIME</small></div><div>${Y.kills}<small>INFECTED CLEARED</small></div><div>${Math.round(Y.cargo)}%<small>PARCEL CONDITION</small></div><div>${Y.weapons.length}<small>WEAPONS RECOVERED</small></div></div><p class="save-note">${Y.pace==="express"?"FIELD TEST COMPLETE · Try The Journey for the full travel pace.":"DELIVERY COMPLETE · Every new dispatch generates a different route."}</p>`,[["ANOTHER DELIVERY",Ei,!0]])}async function oa(s=null){try{Dn.start().catch(()=>{}),Y=new We({saved:s,seed:Zu??Date.now()%1e6,pace:Qu??Hu}),!s&&mc>1&&Y.qaStartLeg(mc-1),pc.clear(),Xe=!0,cn=!1,Cn="",ys(),ht("intro").classList.add("hidden"),ht("hud").classList.remove("hidden"),ht("modal").classList.add("hidden"),ht("toast").classList.add("hidden"),ht("encounter").classList.add("hidden"),Dn.setPaused(!1),ca(),Gn(s?"Checkpoint restored. The road is waiting.":"Drag to move. Follow the road north."),Y.mode==="checkpoint"&&(Cn="checkpoint",Ku())}catch(t){Xn("COURIER NOTICE","A route interrupted.",`<p>${Gc(t.message)}</p>`,[["BACK TO DISPATCH",Ei,!0]])}}function Gc(s){const t=document.createElement("div");return t.textContent=s,t.innerHTML}function ju(s){Hu=s;for(const[t,e]of[["journey-mode","journey"],["express-mode","express"]])ht(t).classList.toggle("selected",s===e),ht(t).setAttribute("aria-pressed",String(s===e))}ht("journey-mode").onclick=()=>ju("journey");ht("express-mode").onclick=()=>ju("express");ht("begin-button").onclick=()=>{be?Xn("A DELIVERY IS ALREADY SAVED","Start a new route?","<p>A new dispatch will replace your saved checkpoint when you reach its first safehouse.</p>",[["BEGIN NEW DELIVERY",()=>oa(),!0],["KEEP SAVED DELIVERY",ln]]):oa()};ht("resume-button").onclick=()=>oa(be);ht("pause-button").onclick=ps;ht("map-button").onclick=ay;ht("intro-guide").onclick=$u;const ms=ht("touch-layer");ms.addEventListener("pointerdown",s=>{if(!Xe||cn||Y.mode!=="playing"||de.active)return;s.preventDefault(),Dn.start().catch(()=>{});const t=ht("game-shell").getBoundingClientRect();de.active=!0,de.id=s.pointerId,de.originX=s.clientX,de.originY=s.clientY,de.x=de.y=0,ms.setPointerCapture(s.pointerId),ht("joystick").style.left=`${s.clientX-t.left}px`,ht("joystick").style.top=`${s.clientY-t.top}px`,ht("joystick").classList.add("active")});ms.addEventListener("pointermove",s=>{if(!de.active||s.pointerId!==de.id)return;const t=s.clientX-de.originX,e=s.clientY-de.originY,n=Math.hypot(t,e),i=Math.min(n,45)/(n||1);de.x=t*i/45,de.y=e*i/45,ht("stick-knob").style.transform=`translate(${de.x*32}px,${de.y*32}px)`});function Vc(s){s.pointerId===de.id&&ys()}ms.addEventListener("pointerup",Vc);ms.addEventListener("pointercancel",Vc);ms.addEventListener("lostpointercapture",Vc);window.addEventListener("keydown",s=>{if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","a","s","d","W","A","S","D"].includes(s.key)&&Xe&&ht("modal").classList.contains("hidden")&&s.preventDefault(),s.key==="Escape"){ht("modal").classList.contains("hidden")?Xe&&ps():(!Xe||Y.mode==="playing")&&Bc();return}Xe&&!cn&&dn.add(s.key.toLowerCase())});window.addEventListener("keyup",s=>dn.delete(s.key.toLowerCase()));window.addEventListener("blur",()=>{ys(),Xe&&!cn&&Y.mode==="playing"&&ps()});document.addEventListener("visibilitychange",()=>{document.hidden&&Xe&&!cn&&Y.mode==="playing"&&ps(),fc=performance.now()});ht("modal").addEventListener("keydown",s=>{if(s.key!=="Tab")return;const t=[...ht("modal").querySelectorAll("button")];if(!t.length)return;const e=t[0],n=t.at(-1);s.shiftKey&&document.activeElement===e?(s.preventDefault(),n.focus()):!s.shiftKey&&document.activeElement===n&&(s.preventDefault(),e.focus())});function fy(){const s=Y.biome?.name||"District 08",t=Jr,e=Y.player;return(!t.shown||Math.hypot(e.x-t.lastX,e.y-t.lastY)>30)&&(t.shown=s,t.pending="",t.seenX=e.x,t.seenY=e.y),t.lastX=e.x,t.lastY=e.y,s===t.shown?(t.pending="",t.seenX=e.x,t.seenY=e.y):(t.pending!==s&&(t.pending=s,t.since=Y.elapsed),Y.elapsed-t.since>=3&&Y.elapsed-(t.changedAt??-1e9)>=8&&Math.hypot(e.x-t.seenX,e.y-t.seenY)>=15&&(t.shown=t.changed=s,t.changedAt=Y.elapsed,t.pending="",t.seenX=e.x,t.seenY=e.y)),t.shown}function Ju(s){const t=Y.guideTarget;if(t&&Number.isFinite(t.x)&&Number.isFinite(t.y))return t;const e=Y.player,n=[Y.seed,Y.legLength],i=Is(e.y,...n,0,e.x,Y.checkpointY);return Math.abs(e.x-i.x)>12?Is(e.y,...n,10,e.x,Y.checkpointY):Y.checkpointY-e.y<40?{x:s,y:Y.checkpointY}:Is(e.y,...n,35,e.x,Y.checkpointY)}function dy(s,t){const e=ht("beacon-edge"),n=ht("game-shell").getBoundingClientRect(),i=yn.screenPosition?.(s,Y.checkpointY),r=yn.screenPosition?.(Y.player.x,Y.player.y);if(!i||!r||Y.boss||Y.mode!=="playing"){e.classList.add("hidden");return}const a=C=>document.querySelector(C).getBoundingClientRect(),o=Math.max(a(".route-progress").bottom,a(".notices").bottom)-n.top+8,c=a(".combat-strip").top-n.top-10,l={left:22,right:n.width-22,top:o+14,bottom:c-14},h=C=>[(C.x+1)/2*n.width,(1-C.y)/2*n.height],[u,f]=h(r),[d,g]=h(i);if(d>l.left&&d<l.right&&g>l.top&&g<l.bottom){e.classList.add("hidden");return}const _=Ju(s),m=yn.screenPosition(_.x,_.y),[p,E]=h(m),x=p-u,y=E-f;let b=1/0;if(x>0?b=Math.min(b,(l.right-u)/x):x<0&&(b=Math.min(b,(l.left-u)/x)),y>0?b=Math.min(b,(l.bottom-f)/y):y<0&&(b=Math.min(b,(l.top-f)/y)),!Number.isFinite(b)){e.classList.add("hidden");return}ht("beacon-edge-arrow").style.rotate=`${Math.atan2(x,-y)}rad`,ht("beacon-edge-label").textContent=`REFUGE ${t} M`,e.classList.remove("hidden");const T=e.offsetWidth/2+4;e.style.left=`${Math.max(T,Math.min(n.width-T,u+x*b))}px`,e.style.top=`${f+y*b}px`}function ca(){ht("hp-value").textContent=Math.ceil(Y.player.hp),ht("hp-bar").style.width=`${Math.max(0,Y.player.hp/Y.player.maxHp)*100}%`,ht("cargo-value").textContent=`${Math.round(Y.cargo)}%`;const s=Y.cargo<30;ht("cargo-warn").classList.toggle("hidden",!s),ht("cargo-bar").parentElement.classList.toggle("fragile",s),ht("cargo-bar").style.width=`${Y.cargo}%`;const t=fy();if(ht("biome-name").textContent=`To ${Qs[Y.leg]}`,ht("biome-tag").textContent=t,ht("objective").textContent=Y.boss?"Dodge red warnings":Y._bossDefeated?"Path clear · to beacon":"Follow the road",Jr.changed){const d=Jr.changed;Jr.changed="",!Y.boss&&Y.mode==="playing"&&performance.now()-Oh>6e3&&(Oh=performance.now(),Gn(`Entering ${d}`,2400,!0))}ht("leg-label").textContent=`0${Y.leg+1} / 06`,ht("progress-bar").style.width=`${Y.progress*100}%`;const e=te(Y.checkpointY,Y.seed,Y.legLength),n=Math.ceil(Math.hypot(e-Y.player.x,Y.checkpointY-Y.player.y));ht("checkpoint-label").textContent=Y.boss?"GUARDIAN AHEAD · CLEAR THE PATH":`NEXT SAFEHOUSE · ${n} M`;const i=performance.now();(!Br||i-Bh>=1e3)&&(Br!==Y.player.weapon&&(Bh=i),Br=Y.player.weapon);const r=Br,a=Ne[r]?.shortName||"SIDEARM";if(mo&&mo!==a){const d=document.querySelector(".combat-strip");d.classList.remove("swap"),d.offsetWidth,d.classList.add("swap")}mo=a,ht("weapon-name").textContent=a;const o={sidearm:"LONGER REACH",scattergun:"CLOSE THREATS",rifle:"CLOSE BURSTS",arc:"HEAVY TARGETS"},c=Y.buffs.rapid>0?"RAPID · SHORTER REACH":o[r]||"AUTO SELECT";ht("weapon-status").innerHTML=`<i></i> ${Y.buffs.rapid>0?c:`${c} · AUTO FIRE`}`,ht("kills-value").innerHTML=`${Y.kills} <small>INFECTED</small>`,ht("boss-hud").classList.toggle("hidden",!Y.boss),ht("hud").classList.toggle("boss-active",!!Y.boss),Y.boss&&(ht("boss-name").textContent=Y.boss.name?.toUpperCase()||"GUARDIAN",ht("boss-bar").style.width=`${Math.max(0,Y.boss.hp/Y.boss.maxHp)*100}%`);const l=Object.entries(Y.buffs).filter(([,d])=>d>0).map(([d,g])=>[d,g]);Y.player.shield>0&&l.push(["shield",Y.player.shield]);const h=!!Y.player.panic;document.querySelector(".route-hud").classList.toggle("has-buffs",l.length>0||h),ht("buffs").innerHTML=l.map(([d,g])=>{const[_,m,p]=Gu[d];return`<span role="img" style="--c:${m}" title="${p} · ${Math.ceil(g)}" aria-label="${p}, ${Math.ceil(g)} ${d==="shield"?"points":"seconds"} left"><b aria-hidden="true">${_}</b>${Math.ceil(g)}</span>`}).join("")+(h?'<span class="panic-chip" role="img" aria-label="Panic fire active" style="--c:#ff8a6b"><b aria-hidden="true">!</b>PANIC FIRE</span>':""),dy(e,n);const u=Ju(e),f=yn.bearingTo?.(u.x,u.y);f&&(ht("beacon-arrow").style.rotate=`${Math.atan2(f.x,-f.y)}rad`)}const Wh=new Set;function py(){for(const s of Y.events.splice(0))s.type==="telegraph"&&s.signature&&!Wh.has(`${s.variant}:${s.signature}`)&&(Wh.add(`${s.variant}:${s.signature}`),Gn(s.text,2600)),Dn.event(s.type,s.weapon||Y.player.weapon,s),["pickup","quiet","bossDefeated","retry","beaconMissed","guardianGate","waypoint","stuck","supplySaved"].includes(s.type)&&Gn(s.type==="pickup"&&Hh[s.drop]&&!zh.has(s.drop)?(zh.add(s.drop),`${Gu[s.drop][0]} ${Hh[s.drop]}`):s.type==="pickup"&&s.drop==="rapid"?"Rapid fire · more shots, shorter reach":s.text),s.type==="checkpoint"&&(s.rule||s.healRule)&&(Vu=s.rule||s.healRule),s.type==="blocked"&&Gn(s.text,2500),s.type==="panic"&&Gn(s.text,1600),s.type==="boss"&&(zr(`${Y.boss?.name?.toUpperCase()||"GUARDIAN"} AHEAD`),Gh("guardian")),s.type==="waypoint"&&Gh("waypoint"),s.type==="roadblock"&&zr("ROADBLOCK AHEAD"),s.type==="minionCall"&&(zr("THE GUARDIAN CALLS ITS MINIONS"),Gn(s.text,2200)),s.type==="ambush"&&!s.reinforcements&&zr("SWARM APPROACHING"),s.type==="hurt"&&(ht("damage-flash").classList.add("hit"),setTimeout(()=>ht("damage-flash").classList.remove("hit"),200),navigator.vibrate&&navigator.vibrate(25));for(const s of Y.effects)pc.has(s.id)||Dn.effect(s);pc=new Set(Y.effects.map(s=>s.id))}const Ri=new URLSearchParams(location.search),ir=Ri.has("qa"),my=ir?Math.max(1,Math.min(30,Math.round(Number(Ri.get("speed"))||1))):1,mc=ir&&/^[1-6]$/.test(Ri.get("leg")||"")?Number(Ri.get("leg")):1,Zu=ir&&/^\d{1,9}$/.test(Ri.get("seed")||"")?Number(Ri.get("seed")):null,Qu=ir?{express:"express",field:"express",journey:"journey"}[Ri.get("pace")]??null:null;function tf(s){requestAnimationFrame(tf);const t=Math.min(.05,Math.max(0,(s-(fc||s))/1e3));if(fc=s,Xe){if(!cn&&Y.mode==="playing"){let e=de.active?de.x:(dn.has("d")||dn.has("arrowright")?1:0)-(dn.has("a")||dn.has("arrowleft")?1:0),n=de.active?de.y:(dn.has("s")||dn.has("arrowdown")?1:0)-(dn.has("w")||dn.has("arrowup")?1:0);const i=Math.min(1,Math.hypot(e,n));if(i>.07){ht("joystick").classList.add("hint-done");const r=yn.screenDirectionToWorld(e,n);Mi.x=r.x*i,Mi.y=r.y*i}else Mi.x=Mi.y=0;for(let r=0;r<my&&Y.mode==="playing";r++)Y.update(t,Mi),py()}yn.render(Y,cn?0:t),!cn&&Y.mode==="playing"&&Dn.update(t,{movingSpeed:Y.player.movingSpeed||0,gaitPhase:yn.gaitPhase||0,biome:Y.biome,surface:an(Y.player.y,Y.seed,Y.legLength).kind}),po+=t,po>.1&&(po=0,ca()),Y.mode!=="playing"&&Cn!==Y.mode&&(Cn=Y.mode,Y.mode==="checkpoint"?Ku():Y.mode==="dead"?hy():Y.mode==="complete"&&uy())}else rs.elapsed+=t,yn.render(rs,t)}function Xh(){const s=ht("game-shell").getBoundingClientRect();yn?.resize(s.width,s.height)}try{yn=new ny(ht("world")),rs=new We({seed:724,pace:"journey"}),rs.player.y=22,rs.player.x=0,rs.enemies=[{id:"preview1",x:5,y:36,hp:42,maxHp:42,radius:.7,type:"walker",angle:2.4},{id:"preview2",x:-7,y:48,hp:42,maxHp:42,radius:.7,type:"walker",angle:.6}],be=Wu(),Xu(),Yu(),zc(),Xh(),new ResizeObserver(Xh).observe(ht("game-shell")),ht("boot").classList.add("hidden"),requestAnimationFrame(tf),Ln&&document.querySelector(".control-note").setAttribute("title",Ln),ir&&(window.__kuru={get game(){return Y},get paused(){return cn},get renderer(){return yn},get sound(){return Dn},begin:oa,updateHUD:ca,setPaused:Hc,get savedData(){return be},qa:{leg:mc,seed:Zu,pace:Qu},startLeg(s){const t=Y?.qaStartLeg(s-1);return Cn="",ca(),t}})}catch(s){ht("boot").innerHTML=`<span class="boot-mark">↗</span><b>YOUR BROWSER NEEDS WEBGL</b><span>Try a recent Chrome, Safari, Firefox or Edge.</span><span>${Gc(s.message)}</span>`,console.error(s)}
