(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const sh=[{id:"city",name:"Old Quarter",ground:"#56765c",verge:"#76946c",road:"#52605b",trees:"#346c4d",sky:"#a5bba8",water:"#418d88",corruption:.2,wind:0,edge:"flat",barriers:["carpile","collapsed","rubblewall"]},{id:"forest",name:"Whispering Forest",ground:"#458456",verge:"#76a55f",road:"#aa946a",trees:"#196747",sky:"#93b69d",water:"#358f82",corruption:.34,wind:1,edge:"flat",barriers:["pit","logs","thicket"]},{id:"village",name:"Hollow Village",ground:"#81915e",verge:"#acb279",road:"#777365",trees:"#437d51",sky:"#bec39d",water:"#478c82",corruption:.55,wind:.15,edge:"flat",barriers:["collapsed","rubblewall","carpile"]},{id:"glade",name:"Sunlit Glade",ground:"#69aa61",verge:"#aed17b",road:"#b8a372",trees:"#448757",sky:"#c5d5a1",water:"#43ad9b",corruption:.07,wind:1,edge:"flat",barriers:["thicket","logs","thicket"],open:!0},{id:"coast",name:"Saltwater Reach",ground:"#cfb780",verge:"#ead1a0",road:"#bba174",trees:"#49966c",sky:"#b2d7cb",water:"#249d9a",corruption:.16,wind:1,edge:"sink",barriers:["water","rockfall","water"]},{id:"desert",name:"The Ochre Expanse",ground:"#c68b4e",verge:"#e3ad63",road:"#a97448",trees:"#76804f",sky:"#d9b789",water:"#379b94",corruption:.38,wind:1,edge:"dune",barriers:["dune","rockfall","dune"],open:!0},{id:"cliff",name:"Broken Coast",ground:"#768a72",verge:"#a6aa7a",road:"#9e936f",trees:"#42796b",sky:"#aabdaf",water:"#258e90",corruption:.64,wind:1,edge:"sink",barriers:["rockfall","pit","water"]},{id:"mountain",name:"Pale Ridge",ground:"#718b7e",verge:"#a4b0a0",road:"#a59d83",trees:"#31635d",sky:"#b0c4be",water:"#397f8b",corruption:.42,wind:1,edge:"rise",barriers:["cliff","rockfall"]},{id:"marsh",name:"Drowned Fen",ground:"#5f8058",verge:"#8aa069",road:"#8f7f5c",trees:"#4e7350",sky:"#a6b9a2",water:"#3d8579",corruption:.4,wind:1,edge:"sink",barriers:["water","mud","logs"]},{id:"burned",name:"Ashen Wood",ground:"#5e544b",verge:"#857462",road:"#8d7a60",trees:"#3b3632",sky:"#c3ab95",water:"#4a7c74",corruption:.5,wind:1,edge:"flat",barriers:["logs","pit","rockfall"]},{id:"canyon",name:"Red Mesa",ground:"#b9683f",verge:"#d48d59",road:"#c69a69",trees:"#7d7d4a",sky:"#e2b691",water:"#3d8f8c",corruption:.3,wind:1,edge:"rise",barriers:["cliff","rockfall"]},{id:"tundra",name:"White Hollow",ground:"#c3d3d3",verge:"#e3ece9",road:"#9aa4a0",trees:"#3b665f",sky:"#cddde0",water:"#69a5b6",corruption:.25,wind:1,edge:"ice",barriers:["icewall","crevasse"]},{id:"farmland",name:"Amber Fields",ground:"#8ea655",verge:"#c4b665",road:"#a98f5f",trees:"#4f8a4c",sky:"#d5d6a6",water:"#4a9a8e",corruption:.2,wind:.55,edge:"flat",barriers:["hedge","haywall","hedge","ditch"],open:!0},{id:"industrial",name:"Rust Works",ground:"#6f6b5d",verge:"#8f8773",road:"#585c5c",trees:"#5b6b4f",sky:"#b4ac9d",water:"#4d7a76",corruption:.6,wind:.45,edge:"flat",barriers:["containers","carpile","rubblewall"]}],tn=Object.fromEntries(sh.map((i,t)=>[i.id,{...i,index:t,palette:{ground:i.ground,verge:i.verge,road:i.road,trees:i.trees,sky:i.sky,water:i.water}}])),rh=sh.slice(1).map(i=>i.id),_u=rh.filter(i=>i!=="village"),$n=new Set(["city","village"]),Dr={carpile:{radius:2.1},rubblewall:{radius:2},collapsed:{box:[2.3,2.2]},containers:{box:[1.35,3.1]},pit:{radius:2.3,hole:!0},logs:{box:[1.1,2.6]},thicket:{radius:2.1},water:{radius:3.2,hole:!0},mud:{radius:2.6,hole:!0},rockfall:{radius:2.2},cliff:{box:[2.2,2.3]},dune:{radius:3.3},crevasse:{radius:2.4,hole:!0},icewall:{box:[1.4,2.2]},hedge:{box:[1.1,2.1]},haywall:{radius:1.8},ditch:{radius:2.5,hole:!0}};function ne(i,t=1){let e=((i|0)^Math.imul(t|0,374761393))>>>0;return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}const Ts=(i,t,e)=>{const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)},bc=(i,t,e=8)=>{const n=Math.max(e-Math.abs(i-t),0)/e;return Math.max(i,t)+n*n*e/4},ah=(i,t,e,n)=>{let s=i.get(t);return s===void 0&&(i.size>=e&&i.delete(i.keys().next().value),s=n(),i.set(t,s)),s},xu=new Map;let Si=null;function Go(i,t,e){if(Si&&Si.seed===i&&Si.legLength===t&&Si.leg===e)return Si.value;const n=ah(xu,`${i}|${t}|${e}`,256,()=>vu(i,t,e));return Si={seed:i,legLength:t,leg:e,value:n},n}function vu(i,t,e){const n=t>=1500,s=rh.filter(m=>n||m!=="village");for(let m=s.length-1;m>0;m--){const p=Math.floor(ne(m*31+7,i)*(m+1));[s[m],s[p]]=[s[p],s[m]]}const r=m=>n?ne(m*613+3,i)<.5?3:4:m===0||ne(m*613+3,i)<.55?1:2,a=r(e);let o=0;for(let m=0;m<e;m++)o+=r(m);const c=n?e?200:400:e?Math.max(60,t*.13):Math.max(120,t*.27),l=n?t*.055:Math.max(72,t*.16),h=e*t,u=(t-c-l)/a,f=[{id:e?s[(o-1)%s.length]:"city",start:h,end:h+c,refuge:!0}];for(let m=0;m<a;m++)f.push({id:s[(o+m)%s.length],start:h+c+u*m,end:m===a-1?h+t-l:h+c+u*(m+1)});f.push({id:s[(o+a-1)%s.length],start:h+t-l,end:h+t,refuge:!0});const d=[];for(let m=1;m<=a;m++)$n.has(f[m].id)||d.push({i:m,roll:ne(e*7907+m*1543+5*389,i)});d.sort((m,p)=>m.roll-p.roll);const v=d.filter((m,p)=>p===0||n&&p===1&&m.roll<.45).map(({i:m})=>{const p=f[m],w=p.end-p.start,x=P=>ne(e*7907+m*1543+P*389,i),y=_u.filter(P=>P!==p.id&&P!==f[m-1].id&&P!==f[m+1].id),A=n?Math.min(w*.8,260+x(10)*80):Math.min(w*.84,190),T=p.start+(w-A)*(.25+x(11)*.5);return{id:`fork-${i}-${e}-${m}`,start:T,end:T+A,side:x(6)<.5?-1:1,width:n?25+x(8)*20:18+x(8)*6,biome:y[Math.floor(x(9)*y.length)],main:p.id}});return{segments:f,forks:v}}function Wo(i,t,e){const n=Math.max(100,e),s=Math.max(0,i)/n,r=Math.floor(s),a=Go(t,n,r),o=a.segments,c=Math.max(0,i);let l=0;for(;l<o.length-1&&c>=o[l].end;)l++;return{layout:a,index:l,leg:r,L:n}}function yu(i=1,t=0,e=2700){return Go(i,Math.max(100,e),t).segments.map(n=>({...n}))}function oh(i,t,e,n){const{layout:s,index:r}=Wo(i,t,e),a=s.segments,o=a[r],c=n(o),l=r>0?n(a[r-1]):0,h=r<a.length-1?n(a[r+1]):0,u=Math.min(150,.45*(o.end-o.start));let f=c;return c>l&&i<o.start+u&&(f=l+(c-l)*Ts(o.start,o.start+u,i)),h<c&&i>o.end-u&&(f=c+(h-c)*Ts(o.end-u,o.end,i)),f}const Mu=(i,t,e)=>oh(i,t,e,n=>n.refuge?0:tn[n.id].wind),bu=new Set(["coast","cliff"]),ch=(i,t=1,e=2700)=>oh(i,t,e,n=>!n.refuge&&bu.has(n.id)?1:0);function Su(i,t,e){const n=Mu(i,t,e);if(n<=0)return 0;const s=t%997*.7,r=.0165+.0045*Math.cos(i*.0047+s),a=i*.0165+.957*Math.sin(i*.0047+s)+s*2.3,o=Math.min(30,.41/r)*(.58+.42*Math.sin(i*.0029+s*1.9)**2),c=.06+.025*Math.cos(i*.013+s*1.3),l=i*.06+1.923*Math.sin(i*.013+s*1.3)+s*.9,h=Math.min(12,.44/c)*(.65+.35*Math.sin(i*.0071+s*.4)**2);return n*(o*Math.sin(a)+h*Math.sin(l))}const Kr=2,Sc=12,Ec=.6,Eu=new Map;let os=null;function Jr(i,t,e){(!os||os.seed!==t||os.legLength!==e)&&(os={seed:t,legLength:e,values:ah(Eu,`${t}|${e}`,24,()=>[0])});const n=os.values,s=Math.max(0,Math.min(i,6e4))/Kr;for(;n.length<=s+1;){const o=n.length-1,c=n[o],l=Math.max(-Ec,Math.min(Ec,(Su(o*Kr+Sc,t,e)-c)/Sc));n.push(c+l*Kr)}const r=Math.floor(s),a=s-r;return n[r]+(n[r+1]-n[r])*a}function wu(i,t,e){return i>-4?(Jr(i-4,t,e)+2*Jr(i,t,e)+Jr(i+4,t,e))/4:0}function se(i,t=1,e=2700){return Math.sin(i*.017+t*.3)*2.7+Math.sin(i*.043+t)*.8+wu(i,t,e)}function Xo(i=1,t=0,e=1/0,n=2700){const s=Math.max(100,n),r=[];for(let a=Math.max(0,Math.floor(t/s));a<=Math.floor(Math.max(0,Math.min(e,s*400))/s);a++)for(const o of Go(i,s,a).forks)o.end>t&&o.start<e&&r.push(o);return r}function zr(i,t=1,e=2700){const{layout:n}=Wo(i,t,e);return n.forks.find(s=>i>=s.start&&i<s.end)||null}function Ye(i,t){return!i||t<=i.start||t>=i.end?0:i.side*i.width*Math.sin(Math.PI*(t-i.start)/(i.end-i.start))**2}function Zr(i,t=1,e=2700,n=35,s,r=1/0){const a=Math.max(i,Math.min(i+n,r)),o=zr(i,t,e),c=se(i,t,e),l=o&&s!==void 0&&Math.abs(s-c-Ye(o,i))<Math.abs(s-c);return{x:se(a,t,e)+(l?Ye(o,a):0),y:a,branch:!!l}}function Oe(i,t=1,e=2700,n,s=!1){let r=i;if(n!==void 0){const c=t%997,l=Ts(5,28,Math.abs(n-se(i,t,e)))*(s?.45:1)+(s?.55:0);l>0&&(r+=l*(Math.sin(n*.061+c)*9+Math.sin(n*.17+c*2)*4+Math.sin(n*.43+c*3)*2))}const{layout:a,index:o}=Wo(r,t,e);if(n!==void 0){const c=zr(i,t,e);if(c){const l=Math.abs(Ye(c,i)),h=(n-se(i,t,e))*c.side;if(l>3&&h>l*.5+2)return c.biome}}return a.segments[o].id}const Ga=(i,t,e)=>Math.max(0,Math.min(.85,i.corruption+.06*Math.sin(t*.061+e*3)));function cn(i,t=1,e=2700,n){const s=tn[Oe(i,t,e,n,n!==void 0)];return{...s,corruption:Ga(s,i,t),routeLeg:Math.floor(Math.max(0,i)/Math.max(100,e))}}function Qe(i,t=1,e=2700){const n=cn(i,t,e),s=$n.has(n.id),r=s&&ne(Math.floor(i/9)*67,t)<(n.id==="village"?.42:.22);return n.id==="industrial"?{kind:ne(Math.floor(i/9)*67,t)<.55?"asphalt":"earth",width:4.4,urban:!1,broken:!0}:{kind:s&&!r?"asphalt":s?"earth":"dirt",width:s?6.1:2.45+Math.sin(i*.087+t)*.25,urban:s,broken:r}}function jr(i=1,t,e=6){return{minX:-120,maxX:120,minY:0,maxY:(t===void 0?i:t*e)+18}}function Nn(i,t=1,e=2700){const n=se(i,t,e),s=t%1009,r=(f,d,g)=>.5+.5*(.62*Math.sin(i*f+s*g)+.38*Math.sin(i*d+s*g*1.7+1.3)),a=f=>3.6*Math.sin(i*.093+s*f)+2.4*Math.sin(i*.231+s*f*2.3+2),o=lh(i,e)*8;let c=33+27*r(.0107,.0291,.71)+a(.37)+o,l=33+27*r(.0089,.0337,1.37)+a(.83)+o;const h=ch(i,t,e);h>0&&(c+=(19+a(.37)*.5-c)*h);const u=zr(i,t,e);if(u){const f=Math.abs(Ye(u,i))+21+6*r(.05,.021,2.1);u.side>0?l=bc(l,f):c=bc(c,f)}return{minX:Math.max(-118,n-c),maxX:Math.min(118,n+l)}}const re={before:64,after:8,clear:20,gate:12,gateHalf:5};function lh(i,t){const e=Math.max(100,t),n=Math.round(i/e);if(n<1)return 0;const s=i-n*e;return Ts(-80,-64,s)*(1-Ts(re.after,re.after+16,s))}function gn(i,t=1,e=2700){const n=Math.max(100,e),s=Math.round(i/n),r=s*n;if(s<1||i<r-re.before||i>r+re.after)return null;const a=r+re.gate;return{checkpointY:r,minY:r-re.before,maxY:r+re.after,centerY:r-re.before/2,x:se(i,t,e),clear:re.clear,gateY:a,gateX:se(a,t,e),gateHalf:re.gateHalf,biome:Oe(r-1,t,e)}}function Wa(i,t,e,n=2700){const s=[];for(let r=Math.floor(t/36);r<=Math.ceil(e/36);r++){const a=r*36;if(a<36||a<t||a>=e)continue;const o=cn(a,i,n),c=$n.has(o.id);if(ne(r*503+81,i)>(c?.58:.15))continue;const l=c?66+ne(r*503+82,i)*32:78+ne(r*503+82,i)*27,h=se(a,i,n),u=Nn(a,i,n);s.push({id:`road-${i}-${r}`,y:a,minX:Math.max(h-l,u.minX+2),maxX:Math.min(h+l,u.maxX-2),width:c?5.4:2.8,urban:c,kind:c?"asphalt":"dirt"})}return s}function Tu(i,t,e,n=2700){const s=[];for(let a=Math.max(0,Math.floor((t-21)/82.5));a<=Math.ceil((e-21)/82.5);a++){const o=a*82.5+21;o<t||o>=e||s.push({id:`supply-${a}`,x:se(o,i,n)+((a+i)%2?-1:1)*4.6,y:o,type:a%3===0?"locker":"crate"})}return s}const Au=new Set(Object.keys(Dr).filter(i=>Dr[i].hole)),Cu={container:[1.2,2.9],barn:[3.2,4.2],pipes:[.75,3.2]},Ru={barn:.72,mesa:1.1,tank:.9},wc={marsh:"reeds",tundra:"drift",farmland:"crops",desert:"scrub",canyon:"scrub",glade:"flowers"};function Pu(i,t,e){switch(i){case"city":case"village":return t>.7?"car":t>.25?"rubble":"tree";case"desert":return t>.53?"rock":t>.25?"cactus":"scrub";case"coast":return t>.88?"pool":t>.55?"rock":t>.25?"palm":"scrub";case"cliff":return t>.88?"pool":t>.8?"mountain":t>.4?"rock":"pine";case"mountain":return t>.85?"mountain":t>.4?"rock":"pine";case"glade":return t>.7?"tree":t>.3?"flowers":"scrub";case"marsh":return t>.76?"deadtree":t>.46?"reeds":t>.3?"pool":t>.2?"tree":"scrub";case"burned":return t>.45?"charred":t>.33?"embers":t>.22?"rock":"scrub";case"canyon":return t>.93?"arch":t>.76?"mesa":t>.45?"rock":t>.2?"scrub":"cactus";case"tundra":return t>.52?"snowpine":t>.4?"ice":t>.3?"rock":"drift";case"farmland":return t>.86?"haystack":t>.78?"tree":t>.72?"barn":t>.48?"fence":"crops";case"industrial":return t>.82?"tank":t>.73?"chimney":t>.55?"container":t>.42?"pipes":t>.28?"car":"rubble";default:return t<.14?"rock":e(11)<.35?"pine":"tree"}}const Gs=new Set(["scrub","flowers","rubble","reeds","pool","embers","drift","fence","crops","arch"]),Du={mountain:5,car:1.06,rock:1.4,rubble:1.1,mesa:2.1,tank:2,chimney:.9,ice:.85,haystack:1,pool:1.5,crops:1.6,fence:1.2,arch:3.2,embers:.7,drift:1.1,reeds:.7,deadtree:.45,charred:.45};function hh(i,t,e,n=2700,s,r){const a=s===void 0&&r===void 0,o=_=>{if(!a)return[s,r];const E=Nn(_,i,n);return[E.minX-16,E.maxX+16]},c=[],l=Wa(i,t-40,e+40,n),h=Xo(i,t-40,e+40,n),u=_=>h.find(E=>_>E.start&&_<E.end),f=_=>se(_,i,n),d=(_,E,L)=>Math.abs(_-f(E))<Qe(E,i,n).width/2+L+.9,g=(_,E,L)=>{const I=u(E);return!!I&&Math.abs(_-f(E)-Ye(I,E))<Qe(E,i,n).width/2+.1+L+.9},v=(_,E,L,I=L)=>l.some(B=>E+I+.8>=B.y-B.width/2&&E-I-.8<=B.y+B.width/2&&_+L>=B.minX&&_-L<=B.maxX),m=(_,E,L,I=L)=>[-I,-I/2,0,I/2,I].some(B=>d(_,E+B,L)||g(_,E+B,L))||v(_,E,L,I),p=_=>{if(_.y<t||_.y>=e)return;const[E,L]=o(_.y);_.x>=E&&_.x<L&&c.push(_)},w=(_,E,L,I=L)=>{const B=Math.abs(_-f(E))-L,H=Math.round(E/Math.max(100,n))*Math.max(100,n);return H>0&&B<re.clear&&E+I>H-re.before&&E-I<H+re.after?!0:E-I<22&&E+I>-60&&(B<12||_>f(E)&&B<46)},x=Tu(i,t-90,e+90,n),y=[];for(let _=Math.floor((t-60)/36);_<=Math.floor((e+60)/36);_++){const E=_*36+18,L=cn(E,i,n);if(!$n.has(L.id))continue;const I=Qe(E,i,n).width/2,B={"-1":-1/0,1:-1/0};for(let H=0;H<4;H++)for(const V of[-1,1]){const G=_*301+(H*2+(V>0?1:0))*19,F=(.85+ne(G+76,i)*.45)*1.65*2,Z=(L.id==="village"?3:2.1)*F,Q=(L.id==="village"?3:2.2)*F,rt=Math.max(18+H*28,I+5+Z,B[V]+3+Z),Lt=f(E)+V*rt,Ft={id:`building-${i}-${_}-${H}-${V}`,x:Lt,y:E,type:"building",scale:F,rotation:0,width:Z*2,depth:Q*2,radius:Math.hypot(Z,Q),collision:{kind:"box",halfX:Z,halfY:Q},obstacle:!0,corrupted:ne(G+95,i)<L.corruption*.75,variant:Math.floor(ne(G+133,i)*4),biome:L.id};Oe(E,i,n,Lt,!0)===L.id&&!m(Lt,E,Z,Q)&&!w(Lt,E,Z,Q)&&!x.some($t=>Math.abs($t.x-Lt)<Z+1.7&&Math.abs($t.y-E)<Q+1.7)&&(y.push(Ft),p(Ft),B[V]=rt+Z)}}const A=(_,E,L)=>y.some(I=>Math.abs(_-I.x)<I.width/2+L+.45&&Math.abs(E-I.y)<I.depth/2+L+.45),T=_=>{const E=_*18+9,L=V=>ne(_*301+V*19,i),I=[];if(_%2===0||L(70)>.55){const V=E-3;I.push({id:`loot-${i}-${_}`,x:f(V)+(L(71)>.5?1:-1)*(4.2+L(72)*1.2),y:V,type:_%5===0?"locker":_%7===0?"lootbox":"crate",radius:.725,obstacle:!1,scale:1.25,rotation:L(73)*.7})}const B=E+2,H=u(B);return H&&Math.abs(Ye(H,B))>10&&_%2===1&&I.push({id:`fork-loot-${i}-${_}`,x:f(B)+Ye(H,B)+(L(74)>.5?1:-1)*3.3,y:B,type:L(75)<.3?"lootbox":"crate",radius:.725,obstacle:!1,scale:1.25,rotation:L(76)*.7}),I.filter(V=>!A(V.x,V.y,1.2))},P=[...x];for(let _=Math.floor((t-30)/18);_<=Math.floor((e+30)/18);_++)P.push(...T(_));const R=(_,E,L)=>P.some(I=>Math.hypot(I.x-_,I.y-E)<L+1.4);for(let _=Math.floor(t/18);_<=Math.floor(e/18);_++){const E=_*18+9,L=Nn(E,i,n),[I,B]=o(E);for(let G=-8;G<8;G++)for(let F=0;F<2;F++){const Z=jt=>ne(_*1709+(G+8)*131+F*43+jt*19,i),Q=G*20+2+Z(1)*16,rt=_*18+2+Z(2)*14;if(Q<I-14||Q>B+14)continue;const Lt=Math.max(L.minX-Q,Q-L.maxX);if(Lt>-4&&Lt<4.5||Lt>0&&F===1&&Z(12)<.5)continue;const Ft=tn[Oe(rt,i,n,Q,!0)],$t=Ga(Ft,rt,i);if(Lt>3&&["sink"].includes(Ft.edge)&&Z(13)<.85)continue;let Et=Pu(Ft.id,Z(3),Z);["mountain","mesa","barn","arch","tank"].includes(Et)&&Math.abs(Q-f(rt))<20&&(Et="rock");const Y=(.85+Z(4)*.45)*(["scrub","flowers","reeds","crops","fence","drift","pool"].includes(Et)?1.25:1.42)*(Ru[Et]||1),tt=Cu[Et],xt=tt?tt[0]*Y:0,gt=tt?tt[1]*Y:0,yt=tt?Math.hypot(xt,gt):(Du[Et]??.55)*Y;if((tt?m(Q,rt,xt,gt)||A(Q,rt,Math.max(xt,gt)):m(Q,rt,yt)||A(Q,rt,yt))||!Gs.has(Et)&&R(Q,rt,tt?Math.max(xt,gt):yt)||!Gs.has(Et)&&($n.has(Ft.id)||$n.has(Oe(rt,i,n)))&&Math.abs(Q-f(rt))-(tt?xt:yt)<Qe(rt,i,n).width/2+4||(!Gs.has(Et)||Et==="arch")&&w(Q,rt,tt?xt:yt,tt?gt:yt))continue;const Gt={id:`p-${i}-${_}-${G}-${F}`,x:Q,y:rt,type:Et,scale:Y,rotation:tt||Et==="arch"?Z(6)<.5?0:Math.PI:Z(6)*Math.PI*2,radius:yt,obstacle:!Gs.has(Et),corrupted:Z(5)<$t*.75,variant:Math.floor(Z(7)*4),smoke:Et==="rubble"&&Z(8)<.5||Et==="chimney",fire:Et==="rubble"&&Z(9)<.4||Et==="embers",biome:Ft.id};if(tt&&Object.assign(Gt,{width:xt*2,depth:gt*2,collision:{kind:"box",halfX:xt,halfY:gt}}),Et==="arch"){const jt=[-1,1].map(D=>({x:Q+D*2.6*Y,y:rt}));if(jt.some(D=>m(D.x,D.y,.9*Y)||R(D.x,D.y,.9*Y)))continue;jt.forEach((D,K)=>p({id:`${Gt.id}-leg${K}`,x:D.x,y:D.y,type:"archleg",scale:Y,rotation:0,radius:.9*Y,obstacle:!0,biome:Ft.id}))}p(Gt)}const H=G=>ne(_*301+G*19,i),V=cn(E,i,n);$n.has(V.id)&&_%3===0&&!R(f(E)-4.5,E,.28)&&!gn(E,i,n)&&p({id:`pole-${i}-${_}`,x:f(E)-4.5,y:E,type:"pole",radius:.28,obstacle:!1,scale:1.42,rotation:0,biome:V.id});for(const G of T(_))p({...G,biome:Oe(G.y,i,n,G.x)});_%4===1&&p({id:`sign-${i}-${_}`,x:f(E)+4.1,y:E,type:"sign",radius:.25,obstacle:!1,scale:1.3,rotation:0,biome:V.id});for(let G=-8;G<8;G++){const F=_*18+ne(_*601+G*43,i)*18,Z=G*20+ne(_*503+G*67,i)*20;if(Z<Math.max(L.minX-10,I-4)||Z>Math.min(L.maxX+10,B+4))continue;const Q=tn[Oe(F,i,n,Z,!0)];let rt=ne(_*111+G,i)<Ga(Q,F,i)*.8?"growth":"grass";rt==="grass"&&wc[Q.id]&&H(210+G)<.55&&!m(Z,F,2.5)&&(rt=wc[Q.id]),p({id:`ground-${i}-${_}-${G}`,x:Z,y:F,type:rt,radius:0,obstacle:!1,scale:.8+H(170+G)*1.1,rotation:H(190+G)*6.28,corrupted:!1,biome:Q.id})}}for(const _ of h){for(const[L,I]of[["split",_.start+3],["join",_.end-3]]){const B=f(I)+Ye(_,I)+_.side*(Qe(I,i,n).width/2+2.4);p({id:`${_.id}-${L}-sign`,x:B,y:I,type:"forksign",radius:.3,obstacle:!1,scale:2.3,rotation:0,variant:_.side>0?1:0,side:_.side,end:L,biome:_.biome})}const E=_.end-_.start;for(let L=7;L<Math.min(56,E*.35);L+=7)for(const I of[_.start+L,_.end-L]){const B=f(I)+Ye(_,I);for(const H of[-1,1]){const V=B+H*_.side*2.9;H<0&&Math.abs(Ye(_,I))<9||d(V,I,.4)||p({id:`${_.id}-lantern-${Math.round(I)}-${H}`,x:V,y:I,type:"lantern",radius:.25,obstacle:!1,scale:1.5,rotation:0,biome:_.biome})}}for(const L of[.2,.8]){const I=_.start+(_.end-_.start)*L,B=Ye(_,I);Math.abs(B)>9&&!R(f(I)+B/2,I,.9)&&!m(f(I)+B/2,I,.9)&&p({id:`${_.id}-cairn-${L}`,x:f(I)+B/2,y:I,type:"cairn",radius:.7,obstacle:!0,scale:1.3,rotation:L*9,biome:Oe(I,i,n,f(I)+B/2)})}}for(let _=Math.ceil((t-4)/8);_<=Math.floor((e+4)/8);_++){const E=_*8+4,L=gn(E,i,n);if(L)for(const I of[-1,1])p({id:`plaza-${i}-${_}-${I}`,x:f(E)+I*(re.clear+1.2),y:E,type:L.biome==="city"?"planter":"plazarim",radius:.8,obstacle:!1,scale:1.2,rotation:0,variant:(_+I+4)%4,biome:L.biome})}const b=Math.max(100,n);for(let _=Math.max(1,Math.floor((t-20)/b));_<=Math.ceil((e+20)/b);_++){const E=_*b+re.gate,L=f(E),I=Nn(E,i,n),B=Oe(_*b-1,i,n),H=ne(_*59+3,i)<.5?-1:1,V=L+H*11,G=E+14;!m(V,G,2.2,2)&&!R(V,G,2.2)&&p({id:`outpost-${i}-${_}`,x:V,y:G,type:"outpost",radius:Math.hypot(1.9,1.7),collision:{kind:"box",halfX:1.9,halfY:1.7},width:3.8,depth:3.4,obstacle:!0,scale:1.1,rotation:0,biome:B});for(const F of[-1,1]){p({id:`gate-${i}-${_}-${F}-pillar`,x:L+F*(re.gateHalf+.9),y:E,type:"gatepillar",radius:.9,obstacle:!0,scale:1,rotation:0,biome:B});const Z=F<0?I.minX-6:I.maxX+6;for(let Q=0,rt=L+F*(re.gateHalf+1.8+2.3);F*(Z-rt)>-2.3;Q++,rt+=F*4.6)p({id:`gate-${i}-${_}-${F}-${Q}`,x:rt,y:E+(ne(_*97+Q*13+F,i)-.5)*.6,type:"gatewall",radius:Math.hypot(2.3,.9),collision:{kind:"box",halfX:2.3,halfY:.9},width:4.6,depth:1.8,obstacle:!0,blocksShots:!0,scale:1,rotation:0,variant:Math.floor(ne(_*97+Q*13+F*5,i)*4),biome:B})}}return Lu(i,t,e,n,l,y,m,p,o,R),c}function Lu(i,t,e,n,s,r,a,o,c,l){for(let u=Math.floor((t-8)/3.2);u<=Math.ceil((e+8)/3.2);u++)for(const f of[-1,1]){const d=f>0?7919:0,g=F=>ne(u*6151+d+F*101,i);let v=u;for(;v>u-9&&ne(v*3571+d+29,i)>.2;)v--;const m=v,p=(()=>{let F=u+1;for(;F<v+9&&ne(F*3571+d+29,i)>.2;)F++;return F-v})(),w=F=>ne(m*911+d+F*53,i),x=(u-v+.5)/p,y=u*3.2+(g(1)-.5)*1.6,A=Nn(y,i,n),T=f<0?A.minX:A.maxX,[P,R]=c(y);if(T<P-20||T>R+20)continue;const b=tn[Oe(y,i,n,T+f*2,!0)],_=s.find(F=>Math.abs(F.y-y)<F.width/2+3.5);let E=b.barriers[Math.floor(w(1)*b.barriers.length)];g(2)<.18&&(E=b.barriers[Math.floor(g(3)*b.barriers.length)]),_&&$n.has(b.id)&&(E="carpile"),f<0&&ch(y,i,n)>.5&&(E="water");const I=!(lh(y,n)>0)&&!_&&w(4)<.3?(4+w(5)*6)*Math.sin(Math.PI*x):0,B=.8+w(6)*.45,H=w(2)*2+g(4)*1.2+I,V=!I&&!_&&!b.open&&w(7)<.35&&g(8)<.3,G=Math.max(V||b.open?2:1,1+(w(3)<.7?1:0)+(g(5)<.3?1:0)+(I>4?1:0));for(let F=V?1:0;F<G;F++){const Z=b.open&&F===0&&Dr[E].hole?b.barriers[0]:E,Q=Dr[Z],rt=!Q.box,Lt=B*(rt?.7+g(6+F)*.65:.85+g(6+F)*.4)*(F?1.08:1),Ft=Q.box?Q.box[0]*Lt:0,$t=Q.box?Q.box[1]*Lt:0,Et=Q.box?Ft:Q.radius*Lt;let Y=y+(F%2?3.2*.5:0)+(g(9+F)-.5)*(rt?2.6:1.2);const tt=I>4&&F===G-1?I-Et:null,xt=tt!==null?-tt:F===0?Et*(.35+g(12)*.45)-H:Et*(.6+F*1.25)+1+g(13+F)*2.2-I*.5;let gt=T+f*(xt+(rt?(g(20+F)-.5)*Et*.9:0));const yt=Q.box?$t:Et;for(const K of s)Math.abs(K.y-Y)<K.width/2+yt+.9&&(f>0&&gt-Et<K.maxX+.1&&(gt=K.maxX+.1+Et),f<0&&gt+Et>K.minX-.1&&(gt=K.minX-.1-Et));if(a(gt,Y,Et,yt)||l(gt,Y,Et)||r.some(K=>Math.abs(gt-K.x)<K.width/2+.5&&Math.abs(Y-K.y)<K.depth/2+.5))continue;const[Gt,jt]=[gt,Y];for(const K of r){const et=Math.abs(gt-K.x)-K.width/2-Et,j=Math.abs(Y-K.y)-K.depth/2-yt;j<0&&et>0&&et<3?gt+=Math.sign(K.x-gt)*(et+.4):et<0&&j>0&&j<3&&(Y+=Math.sign(K.y-Y)*(j+.4))}a(gt,Y,Et,yt)&&([gt,Y]=[Gt,jt]);const D={id:`bar-${i}-${u}-${f}-${F}`,x:gt,y:Y,type:Z,scale:Lt,rotation:Q.box?(g(14)<.5?0:Math.PI)+(g(19)-.5)*(Z==="logs"?.55:.3):g(14)*Math.PI*2,radius:Q.box?Math.hypot(Ft,$t):Et,obstacle:!0,barrier:!0,blocksShots:!Au.has(Z),side:f,variant:Math.floor(g(15)*4),biome:b.id,corrupted:!1};Q.box&&Object.assign(D,{width:Ft*2,depth:$t*2,collision:{kind:"box",halfX:Ft,halfY:$t}}),Z==="carpile"&&(D.fire=g(16)<.4,D.smoke=D.fire||g(17)<.35,D.effectHeight=1.2),Z==="logs"&&b.id==="burned"&&(D.charred=!0,D.fire=g(18)<.2),o(D)}}}function ms(i,t={}){const e=typeof i=="string"?We[i]:i;if(!e)return 0;const n=e.cooldown*(t.rapid>0?.58:1),s=e.pellets/n;return Math.round(Math.max(7,Math.min(30,32/Math.sqrt(s)))*100)/100}const We=Object.freeze(Object.fromEntries(Object.entries({sidearm:{id:"sidearm",name:"Courier sidearm",shortName:"SIDEARM",color:"#ffe6aa",range:24,damage:18,cooldown:.46,pellets:1,spread:0,projectileSpeed:41,radius:.2},scattergun:{id:"scattergun",name:"Scattergun",shortName:"SCATTERGUN",color:"#ffad6c",range:13,damage:11,cooldown:.84,pellets:5,spread:.36,projectileSpeed:36,radius:.22},rifle:{id:"rifle",name:"Burst rifle",shortName:"BURST RIFLE",color:"#a8ffe1",range:30,damage:15,cooldown:.57,pellets:3,spread:.055,projectileSpeed:51,radius:.17},arc:{id:"arc",name:"Arc launcher",shortName:"ARC LAUNCHER",color:"#c5b3ff",range:23,damage:58,cooldown:1.38,pellets:1,spread:0,projectileSpeed:26,radius:.35,splash:5.2}}).map(([i,t])=>[i,{...t,range:ms(t)}]))),Ws=72,Un={walker:{hp:36,radius:.95,speed:6.3,damage:11,attackDelay:1.2},dog:{hp:28,radius:.65,speed:12.5,damage:9,attackDelay:1.05},brute:{hp:135,radius:1.65,speed:2.8,damage:15,attackDelay:1.65},boss:{hp:410,radius:2.9,speed:3.3,damage:22,attackDelay:3.2}},Ei={dog:{windup:.6,life:.5,speed:17,reach:15,cooldown:2.4,spread:2.2,first:1.2},walker:{windup:.8,life:.5,speed:15,reach:12,cooldown:2.8,spread:2.2,first:1.6}},Xs={life:1.1,speed:8.2},Tc={dog:.5,walker:.5,brute:.125,boss:.0625},ti={chance:.1,speed:11.5,near:6,far:18,stamina:2,cooldown:4},Ac=[[0,.785,.9],[.785,1.3,.1]],Cc=600,Iu=9,Uu=15,Rc=80*Math.PI/180,Qr={rapid:10,power:10,speed:8},Ys=30,Nu={dog:.07,walker:.1,brute:.25},Fu=.12,cs=i=>[20,19,18,17,16,15][fh(i)],ta=i=>.24-fh(i)*.01,Ou=["The Tollkeeper","Rootbound","The Undertow","The Hollow Sun","The Cairn","The Last Warden"],ku=["sidearm","scattergun"],Pc=1,vs=2,ys=i=>i==="express"?450:2700,Mr=i=>i==="express"?300:1800,uh=i=>i.legLength??(i.routeVersion===vs?ys(i.pace):Mr(i.pace)),Dc=Math.PI*2,Xe=(i,t,e)=>Math.max(t,Math.min(e,i)),fh=i=>Xe(Math.floor(i)||0,0,5),we=(i,t)=>Math.hypot(i.x-t.x,i.y-t.y),Te=i=>JSON.parse(JSON.stringify(i)),Zt=i=>typeof i=="number"&&Number.isFinite(i);function Bu(i){if(typeof i=="number"&&Number.isFinite(i))return i>>>0||1;let t=2166136261;for(const e of String(i??"kuru"))t=Math.imul(t^e.charCodeAt(0),16777619);return t>>>0||1}function Xa(i,t,e,n,s,r,a){const o=e-i,c=n-t,l=i-s,h=t-r,u=l*l+h*h-a*a;if(u<=0)return 0;const f=o*o+c*c;if(!f)return null;const d=l*o+h*c,g=d*d-f*u;if(g<0)return null;const v=(-d-Math.sqrt(g))/f;return v>=0&&v<=1?v:null}function zu(i,t,e,n,s,r){let a=0,o=1;for(const[c,l,h,u]of[[i,e-i,s.x,s.collision.halfX+r],[t,n-t,s.y,s.collision.halfY+r]]){if(Math.abs(l)<1e-10){if(Math.abs(c-h)>u)return null;continue}const f=(h-u-c)/l,d=(h+u-c)/l;if(a=Math.max(a,Math.min(f,d)),o=Math.min(o,Math.max(f,d)),a>o)return null}return a}const gs=i=>i.obstacle!==!1&&i.radius>0&&!["crate","locker","lootbox","ammo"].includes(i.type),ea=(i,t,e,n)=>i.collision?.kind==="box"?Math.abs(t-i.x)<i.collision.halfX+n&&Math.abs(e-i.y)<i.collision.halfY+n:Math.hypot(t-i.x,e-i.y)<i.radius+n,Lc=i=>gs(i)&&i.blocksShots!==!1,Ic=(i,t,e,n,s,r)=>s.collision?.kind==="box"?zu(i,t,e,n,s,r):Xa(i,t,e,n,s.x,s.y,s.radius+r);function Hu(i){if(i.combatVersion!==1){for(const t of i.enemies){const e=Xe(t.hp/t.maxHp,0,1);t.type!=="boss"&&(t.maxHp=Un[t.type].hp*(1+i.leg*.045)),t.hp=t.maxHp*e,t.damage=Un[t.type].damage+(t.type==="boss"?i.leg*4:0)}i.combatVersion=1}i.worldVersion=1}function br(i){const t=Te(i),e=uh(t),n=ys(t.pace),s=n/e,r=o=>{const c=o.y;o.y*=s,o.x+=se(o.y,t.seed,n)-se(c,t.seed,e)},a=(o,c,l)=>{const h={x:o,y:c},u={x:o+Math.sin(l),y:c+Math.cos(l)};return r(h),r(u),Math.atan2(u.x-h.x,u.y-h.y)};if(s!==1){const o=new Map(t.crateHealth||[]);for(const l of t.crates)l.hp>0&&l.hp<30&&o.set(l.id,l.hp);const c=t.player;Zt(c.aimAngle)&&(c.aimAngle=a(c.x,c.y,c.aimAngle)),r(c);for(const l of["enemies","projectiles","drops","crates"])for(const h of t[l]){const{x:u,y:f}=h;Zt(h.angle)&&(h.angle=a(u,f,h.angle)),h.telegraph&&(h.telegraph.angle=a(u,f,h.telegraph.angle),Zt(h.telegraph.x)&&Zt(h.telegraph.y)&&r(h.telegraph)),h.charge&&(h.charge.angle=a(u,f,h.charge.angle)),r(h),l==="enemies"&&(h.radius=Un[h.type].radius)}t.crateHealth=[...o],t.crates=[]}return t.routeVersion=vs,t.legLength=n,Hu(t),t.checkpoint&&(t.checkpoint=br(t.checkpoint)),t.guardianCheckpoint&&(t.guardianCheckpoint=br(t.guardianCheckpoint)),t.waypointCheckpoint&&(t.waypointCheckpoint=br(t.waypointCheckpoint)),t}class qn{constructor({seed:t=Date.now(),saved:e=null,pace:n="journey"}={}){if(e&&!qn.validateSave(e))throw new Error("This checkpoint cannot be read. Its save data is incomplete or from a different version.");e&&(e=br(e)),this.seed=Bu(e?.seed??t),this.pace=e?.pace??(n==="express"?"express":"journey"),this.legLength=ys(this.pace),this.speed=9,this.totalLegs=6,this.mode="playing",this.player={x:se(0,this.seed,this.legLength),y:0,hp:100,maxHp:100,shield:0,angle:0,aimAngle:0,lastShotAt:null,movingSpeed:0,velocity:{x:0,y:0},weapon:"sidearm",blocked:!1},this.enemies=[],this.projectiles=[],this.drops=[],this.effects=[],this.crates=[],this.events=[],this.elapsed=0,this.leg=0,this.progress=0,this.kills=0,this.combo=0,this.weapons=[...ku],this.buffs={rapid:0,power:0,speed:0},this.cargo=100,this._boss=null,this.checkpointCount=0,this._rngState=this.seed,this._nextId=1,this._legElapsed=0,this._spawnClock=5,this._fireClock=0,this._comboClock=0,this._hurtClock=0,this._bossSpawned=!1,this._bossDefeated=!1,this._bossReinforcementClock=0,this._bossWave=0,this._quietCycle=-1,this._destroyedCrates=new Set,this._knownCrates=new Set,this._crateHealth=new Map,this._blockedClock=0,this._blockedNotified=!1,this._props=[],this._propsY=-1/0,this._lastEncounter=-1,this._checkpointSnapshot=null,this._guardianSnapshot=null,this._waypointSnapshot=null,this._waypointK=0,this._ambushQueue=[],this._gateClock=0,this._beaconMissed=!1,this._guardianFails=0,this._holdClock=0,this._holdStart=null,this._stuck=!1,this._refreshWorld(),this._checkpointSnapshot=this._snapshot(),e&&(this._restore(e),this._checkpointSnapshot=Te(e.checkpoint||this._snapshot()),this._guardianSnapshot=e.guardianCheckpoint?Te(e.guardianCheckpoint):null,this._waypointSnapshot=e.waypointCheckpoint?Te(e.waypointCheckpoint):null,this._refreshWorld(!0)),this._updateObjective()}get boss(){return this._boss&&this._boss.hp>0&&this.enemies.includes(this._boss)?this._boss:null}set boss(t){this._boss=t}_random(){this._rngState=this._rngState+1831565813>>>0;let t=this._rngState;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}_id(){return this._nextId++}_event(t,e,n={}){this.events.push({type:t,text:e,...n}),this.events.length>48&&this.events.splice(0,this.events.length-48)}_effect(t,e,n,s=.45,r={}){this.effects.push({id:this._id(),type:t,x:e,y:n,life:s,maxLife:s,...r})}_refreshWorld(t=!1){if(this.biome=cn(this.player.y,this.seed,this.legLength,this.player.x),!t&&Math.abs(this.player.y-this._propsY)<30)return;this._propsY=this.player.y,this._props=hh(this.seed,this.player.y-85,this.player.y+105,this.legLength)||[];for(const h of this.crates)h.hp>0&&h.hp<30&&this._crateHealth.set(h.id,h.hp);this.crates=this.crates.filter(h=>Math.abs(h.y-this.player.y)<115&&!this._destroyedCrates.has(h.id));const e=new Set(this.crates.map(h=>h.id)),n=h=>h>this._propsY-75&&h<this._propsY+90;for(const h of this._props){if(!["crate","locker","lootbox","ammo"].includes(h.type)||e.has(h.id)||this._destroyedCrates.has(h.id)||h.y<2||!n(h.y))continue;this._knownCrates.add(h.id),e.add(h.id);const u=this._reachablePoint(h.x,h.y,1,(f,d)=>Math.hypot(f-this.player.x,d-this.player.y)>=3.5);this.crates.push({id:h.id,x:u.x,y:u.y,radius:h.radius||.8,hp:this._crateHealth.get(h.id)??30,maxHp:30,type:h.type})}const s=this.checkpointY-(this.pace==="express"?50:60),r=`medcache-${this.leg}`,a=s-30;if(!this._bossSpawned&&!e.has(r)&&!this._destroyedCrates.has(r)&&a>this.leg*this.legLength+20&&n(a)){const h=this._reachablePoint(se(a,this.seed,this.legLength)+4.5,a,1,(u,f)=>Math.hypot(u-this.player.x,f-this.player.y)>=3.5);this._knownCrates.add(r),e.add(r),this.crates.push({id:r,x:h.x,y:h.y,radius:.8,hp:this._crateHealth.get(r)??30,maxHp:30,type:"locker",medkit:!0})}const o=82.5,c=Math.floor((this.player.y-70)/o),l=Math.ceil((this.player.y+90)/o);for(let h=Math.max(0,c);h<=l;h++){const u=`supply-${h}`;if(e.has(u)||this._destroyedCrates.has(u))continue;const f=h*o+21;if(!n(f))continue;const d=(h+this.seed)%2?-1:1;this._knownCrates.add(u),e.add(u);const g=this._reachablePoint(se(f,this.seed,this.legLength)+d*4.6,f,1,(v,m)=>Math.hypot(v-this.player.x,m-this.player.y)>=3.5);this.crates.push({id:u,x:g.x,y:g.y,radius:.8,hp:this._crateHealth.get(u)??30,maxHp:30,type:h%3===0?"locker":"crate"})}}_corridor(t){const e=jr(this.seed,this.legLength,this.totalLegs),n=Nn(t,this.seed,this.legLength);return{minX:Math.max(n.minX,e.minX),maxX:Math.min(n.maxX,e.maxX),minY:e.minY,maxY:e.maxY}}_reachable(t,e,n=.9){const s=this._corridor(e);return t<s.minX+n||t>s.maxX-n||e<s.minY||e>s.maxY?!1:!this._props.some(r=>gs(r)&&ea(r,t,e,n))}_reachablePoint(t,e,n=.9,s=null,r=!1){const a=(c,l)=>this._reachable(c,l,n)&&(!s||s(c,l));if(a(t,e))return{x:t,y:e};for(let c=.8;c<=(r?48:32);c+=.8){const l=Math.max(8,Math.ceil(c*2.4));for(let h=0;h<l;h++){const u=(h/l+c*.37)*Dc,f=t+Math.sin(u)*c,d=e+Math.cos(u)*c;if(a(f,d))return{x:f,y:d}}}if(r)return null;const o=this._corridor(e);return{x:Xe(se(e,this.seed,this.legLength),o.minX,o.maxX),y:Xe(e,o.minY,o.maxY)}}_arenaSpot(t){const e=gn(t-1,this.seed,this.legLength);if(e){const s=Xe(this.player.y+30,e.minY+14,t-14);for(const r of[0,-6,6,-12,12]){const a=se(s,this.seed,this.legLength)+r;if(this._reachable(a,s,3))return{x:a,y:s}}}let n=null;for(let s=20;s<=36;s+=4){const r=Math.min(t-4,this.player.y+s);for(const a of[0,-8,8,-16,16]){const o=se(r,this.seed,this.legLength)+a;if(!this._reachable(o,r,3))continue;const l=this._props.filter(h=>gs(h)&&ea(h,o,r,12)).length*10+Math.abs(a)*.3+(s-20)*.2;(!n||l<n.cost)&&(n={x:o,y:r,cost:l})}}return n?{x:n.x,y:n.y}:this._reachablePoint(this.player.x,Math.min(t-4,this.player.y+18),2)}_takeGuardianSnapshot(t){const e=this._snapshot();e.player.y=Math.max(t,this.leg*this.legLength),e.player.x=se(e.player.y,this.seed,this.legLength),e.player.hp=e.player.maxHp,e.player.velocity={x:0,y:0},e.player.movingSpeed=0,e.progress=Xe((e.player.y-this.leg*this.legLength)/this.legLength,0,1),e.enemies=[],e.projectiles=[],this._guardianSnapshot=e}_easing(){return this._guardianFails>=2?3:this._guardianFails>=1?2:0}get canRetryGuardian(){return!!this._guardianSnapshot&&this.mode==="dead"}_blockedAt(t,e,n){return this._props.some(s=>gs(s)&&ea(s,t,e,n))}_walkEnemy(t,e,n,s,r){const a=Math.hypot(e,n)||1;let o=Math.atan2(e,n);t.detour&&(o+=t.detour.side*1.1,t.detour.life-=r,t.detour.life<=0&&(t.detour=null));const c=Math.sin(o)*s*r,l=Math.cos(o)*s*r,h=t.radius*.7,u={x:t.x,y:t.y};this._blockedAt(t.x+c,t.y,h)||(t.x+=c),this._blockedAt(t.x,t.y+l,h)||(t.y+=l);const f=Math.hypot(t.x-u.x,t.y-u.y);return t.snag=f<s*r*.35?(t.snag||0)+r:Math.max(0,(t.snag||0)-r),t.snag>.4&&!t.detour&&(t.detourSide??=this._random()<.5?-1:1,t.detour={side:t.detourSide,life:3},t.snag=0),a}_lungeAim(t,e){const n=this.player.velocity;let s=e.life*.5,r=this.player.x,a=this.player.y;for(let o=0;o<6;o++)r=this.player.x+n.x*(e.windup+s),a=this.player.y+n.y*(e.windup+s),s=Math.hypot(r-t.x,a-t.y)/e.speed;return{angle:Math.atan2(r-t.x,a-t.y),ok:s<=e.life*.96}}_lineClear(t,e,n=.2,s=0){const r=Math.hypot(e.x-t.x,e.y-t.y),a=Math.min(t.x,e.x),o=Math.max(t.x,e.x),c=Math.min(t.y,e.y),l=Math.max(t.y,e.y);for(const h of this._props){if(!Lc(h))continue;const u=(h.collision?.halfX??h.radius)+n,f=(h.collision?.halfY??h.radius)+n;if(h.x+u<a||h.x-u>o||h.y+f<c||h.y-f>l)continue;const d=Ic(t.x,t.y,e.x,e.y,h,n);if(d!==null&&d*r<r-s)return!1}return!0}_updateRunner(t,e,n){return t.sprintCooldown>0?(t.sprintCooldown=Math.max(0,t.sprintCooldown-n),t.sprintCooldown===0&&(t.sprintLeft=ti.stamina),!1):e<ti.near||e>ti.far||!this._lineClear(t,this.player)?!1:(t.sprintLeft-=n,t.sprintLeft<=0?(t.sprintCooldown=ti.cooldown,!1):(t.sprinting=!0,!0))}update(t,e={x:0,y:0}){if(this.mode!=="playing"){this._stopPlayerMotion();return}if(!Zt(t)||t<=0)return;let n=Math.min(t,.35);for(;n>0;){const s=Math.min(n,.03333333333333333);if(this._step(s,e),n-=s,this.mode!=="playing")break}}_step(t,e){this.elapsed+=t,this._legElapsed+=t,this._fireClock-=t,this._hurtClock=Math.max(0,this._hurtClock-t),this._comboClock-=t,this._comboClock<=0&&(this.combo=0);for(const v of Object.keys(this.buffs))this.buffs[v]=Math.max(0,this.buffs[v]-t);for(const v of this.effects)v.life-=t;this.effects=this.effects.filter(v=>v.life>0).slice(-150);let n=Zt(e.x)?e.x:0,s=Zt(e.y)?e.y:0;const r=Math.hypot(n,s);r>1&&(n/=r,s/=r);const a=this.buffs.speed>0?1.25:1,o=this.player.x,c=this.player.y,l=this._movePlayer(n*this.speed*a*t,s*this.speed*(s<0?a:1)*t),h=jr(this.seed,this.legLength,this.totalLegs);if(this.player.y=Xe(this.player.y,h.minY,h.maxY),this._gateClock=Math.max(0,this._gateClock-t),this._bossSpawned){const v=gn(this.checkpointY-1,this.seed,this.legLength),m=v?v.gateY-.5:this.checkpointY+Uu;if(this.player.y>m){const p=this.player.y;this.player.y=Math.min(p,Math.max(c,m)),this.player.y<p&&this._gateClock<=0&&(this._gateClock=6,this._event("guardianGate","The guardian bars the way · defeat it to pass"))}}const u=this._corridor(this.player.y),f=this.player.x<u.minX||this.player.x>u.maxX;this.player.x=Xe(this.player.x,u.minX,u.maxX);const d=Math.hypot(this.player.x-o,this.player.y-c)/t;if(this.player.velocity=r>.06?{x:(this.player.x-o)/t,y:(this.player.y-c)/t}:{x:0,y:0},this.player.movingSpeed=r>.06?d:0,this.player.blocked=(l||f)&&r>.06&&d<.15,r>.06){if(this._holdStart??={x:this.player.x,y:this.player.y},this._holdClock+=t,this._holdClock>=4){const m=Math.hypot(this.player.x-this._holdStart.x,this.player.y-this._holdStart.y)<3;if(m&&!this._stuck){const p=se(this.player.y,this.seed,this.legLength);this._event("stuck",`Stuck? Head back to the road ${p<this.player.x?"←":"→"}`)}this._stuck=m,this._holdClock=0,this._holdStart={x:this.player.x,y:this.player.y}}}else this._holdClock=0,this._holdStart=null;if(this._stuck&&r>.06&&Math.hypot(this.player.x-(this._holdStart?.x??this.player.x),this.player.y-(this._holdStart?.y??this.player.y))>3&&(this._stuck=!1),this.player.blocked?(this._blockedClock+=t,this._blockedClock>=1&&!this._blockedNotified&&(this._blockedNotified=!0,f||this._touchedBarrier?this._event("blocked","No way through · head back toward the road",{edge:!0}):this._event("blocked","Path blocked · drag sideways around the obstacle"))):(this._blockedClock=0,r>.06&&d>=.15&&(this._blockedNotified=!1)),r>.06&&d>.15&&(this.player.angle=Math.atan2(this.player.velocity.x,this.player.velocity.y)),this._refreshWorld(),this.progress=Xe((this.player.y-this.leg*this.legLength)/this.legLength,0,1),this._updatePacing(t),this._updateEnemies(t),this.mode!=="playing")return;this._autoFire(),this._updateProjectiles(t),this._collectDrops(t);const g=this._heading();this.enemies=this.enemies.filter(v=>v.hp>0&&(v.type==="boss"||we(v,this.player)<100&&this._alongAcross(v.x,v.y,g).along>-45)),this.boss=this.enemies.find(v=>v.type==="boss"&&v.hp>0)||null,this.progress>=1&&this._bossDefeated&&(this.pace==="express"||this._legElapsed>=300)?this._reachCheckpoint():(this._watchBeacon(),this._watchWaypoint()),this._updateObjective()}_watchWaypoint(){if(this.pace!=="journey"||this._bossSpawned||this.mode!=="playing")return;const t=Math.floor((this.player.y-this.leg*this.legLength)/Cc);if(t<1||t<=this._waypointK&&this._waypointSnapshot)return;this._waypointK=t;const e=this._snapshot();e.enemies=[],e.projectiles=[],e.ambushQueue=[],e.player.hp=Math.max(e.player.hp,60),e.player.velocity={x:0,y:0},e.player.movingSpeed=0,e.spawnClock=Math.max(e.spawnClock,4),this._waypointSnapshot=e,this._event("waypoint","Waypoint saved · a fall here restarts from this spot")}get canRetryWaypoint(){return!!this._waypointSnapshot&&!this._guardianSnapshot&&this.mode==="dead"}retryWaypoint(){if(!this._waypointSnapshot)return!1;const t=this.kills,e=[...this.weapons];this._restore(Te(this._waypointSnapshot)),this.kills=Math.max(this.kills,t);for(const n of e)this.weapons.includes(n)||this.weapons.push(n);return this._guardianSnapshot=null,this.events=[],this._refreshWorld(!0),this._hurtClock=2,this._event("retry","Back at your last waypoint. The road ahead is as you left it."),!0}_watchBeacon(){const t=this.player.x-se(this.checkpointY,this.seed,this.legLength);if(this.player.y>this.checkpointY+20||this.player.y>this.checkpointY-30&&Math.abs(t)>20){if(this._beaconMissed||this.boss)return;this._beaconMissed=!0,this._event("beaconMissed","Refuge behind you · follow the arrow")}else(this.checkpointDistance<15||this.player.y<this.checkpointY-30)&&(this._beaconMissed=!1)}_movePlayer(t,e){let n=!1;this._touchedBarrier=!1;const s=(r,a)=>{const o=this.player[r]-a;for(const c of this._props){if(!gs(c))continue;if(c.collision?.kind==="box"){const d=this.player.x-c.x,g=this.player.y-c.y,v=c.collision.halfX+.48,m=c.collision.halfY+.48;if(Math.abs(d)>=v||Math.abs(g)>=m)continue;n=!0,c.barrier&&(this._touchedBarrier=!0);const p=o-c[r]<0?-1:1;(a||(r==="x"?v-Math.abs(d)<m-Math.abs(g):m-Math.abs(g)<=v-Math.abs(d)))&&(this.player[r]=c[r]+p*(r==="x"?v:m));continue}const l=c.radius+.48,h=this.player.x-c.x,u=this.player.y-c.y,f=Math.hypot(h,u);f>=l||(n=!0,c.barrier&&(this._touchedBarrier=!0),f<.001?this.player.x+=l:(this.player.x=c.x+h/f*l,this.player.y=c.y+u/f*l))}};return this.player.x+=t,s("x",t),this.player.y+=e,s("y",e),n}_stopPlayerMotion(){this.player.movingSpeed=0,this.player.velocity={x:0,y:0}}_updatePacing(t){const e=(this.leg+1)*this.legLength,n=this.pace==="express"?50:60;if(!this._bossSpawned&&this.player.y>=e-n){this._takeGuardianSnapshot(e-n-5),this._bossSpawned=!0,this._ambushQueue=[],this.enemies=this.enemies.filter(f=>f.hp>0).sort((f,d)=>we(f,this.player)-we(d,this.player)).slice(0,10);const h=this._arenaSpot(e),u=this._spawnEnemy("boss",h.x,h.y);u.name=Ou[this.leg],u.maxHp=u.hp=(this.pace==="express"?520:680)+this.leg*130,u.damage=(this.leg<2?12:18)+this.leg*3,u.attackClock=1.8,u.chargeClock=.65,this.boss=u,this._bossWave=0,this._bossReinforcementClock=this.pace==="express"?13:14,this._spawnPack(Math.max(4,(this.leg<2?5+this.leg:8+Math.min(4,this.leg))-this._easing()),!0,{mixed:!0,escort:!0,brutes:this.leg>=1}),this._event("boss",`${u.name} blocks the checkpoint. Keep moving when it winds up.`),this._effect("warning",u.x,u.y,2,{radius:7});return}if(this._bossSpawned){if(this._bossDefeated||!this.enemies.some(u=>u.type==="boss"&&u.hp>0))return;this._bossReinforcementClock=Math.max(0,this._bossReinforcementClock-t);const h=this.enemies.find(u=>u.type==="boss"&&u.hp>0);if(this._bossReinforcementClock<=0&&h.hp<h.maxHp*.5&&(this._bossReinforcementClock=2),this._bossReinforcementClock<=0&&this.enemies.filter(u=>u.hp>0&&u.type!=="boss").length>=14&&(this._bossReinforcementClock=3),this._bossReinforcementClock<=0){const u=this._spawnPack(Math.max(3,(this.leg<2?3+this.leg:5+Math.min(2,this.leg))-this._easing()),!0,{mixed:!0,escort:!0});u>0&&this.leg<2&&this._addDrop({x:this.player.x+4,y:this.player.y+5,type:"heal",amount:cs(this.leg),life:60}),this._bossReinforcementClock=this.pace==="express"?13:14,u>0&&(this._bossWave++,this._event("ambush","The Warden calls its guards. Keep a path open.",{count:u,wave:this._bossWave,reinforcements:!0}))}return}for(const h of this._ambushQueue)h.delay-=t;if(this._ambushQueue.length&&this._ambushQueue[0].delay<=0&&this.enemies.filter(h=>h.hp>0).length<Ws&&this._spawnPack(this._ambushQueue.shift().count,!0),this._stuck&&(this._spawnClock=Math.max(this._spawnClock,1)),this._spawnClock-=t,this.enemies.filter(h=>h.hp>0&&(h.idle>3||h.detour)).length>=8&&this._spawnClock<=0&&(this._spawnClock=3),this._legElapsed<4.5||this._spawnClock>0||this.enemies.filter(h=>h.hp>0).length>=Ws)return;const s=this.pace==="express"?35:100,r=Math.floor(this._legElapsed/s),a=this._legElapsed%s/s;if(a>.65){this._spawnClock=this.pace==="express"?4:7,this._quietCycle!==r&&!this.enemies.some(h=>h.hp>0&&we(h,this.player)<45)&&(this._quietCycle=r,this._event("quiet","A little breathing room. Search the roadside for supplies."));return}const c=a>.35&&a<.48&&this._lastEncounter!==r,l=this.leg+this.progress;if(c){this._lastEncounter=r;const h=12+Math.floor(this._random()*4)+Math.round(l*.9),u=Math.ceil(h/Iu),f=Array.from({length:u},(g,v)=>Math.floor(h/u)+(v<h%u?1:0)),d=this._spawnPack(f[0],!0);for(let g=1;g<u;g++)this._ambushQueue.push({delay:g*4.5,count:f[g]});this._event("ambush","Movement in the brush. A swarm is closing in!",{count:d,total:h,waves:u}),this._spawnClock=(this.pace==="express"?6:9)+(u-1)*4.5}else{const h=this._random(),u=5+Math.floor(this._random()*4)+Math.floor(l/5);if(h<.12)this._spawnPack(u,!1,{flank:!0});else if(h<.34){const f=this._spawnPack(Math.min(8,u),!1,{block:!0});f>0&&this._event("roadblock","Infected are blocking the road ahead.",{count:f})}else this._spawnPack(u);this._spawnClock=(this.pace==="express"?3.5:5.3)-l*(this.pace==="express"?.04:.05)+this._random()*2}}_spawnAngle(){let t=this._random();const[e,n]=Ac.find(([,,r])=>(t-=r)<0)||Ac[0],s=e+(n-e)*this._random();return this._random()<.5?-s:s}_heading(){const t=se(this.player.y,this.seed,this.legLength);return Math.atan2(se(this.player.y+20,this.seed,this.legLength)-t,20)}_alongAcross(t,e,n=this._heading()){const s=t-this.player.x,r=e-this.player.y;return{along:s*Math.sin(n)+r*Math.cos(n),across:s*Math.cos(n)-r*Math.sin(n)}}_offScreenAhead(t,e){const{along:n,across:s}=this._alongAcross(t,e);return Math.abs(Math.atan2(s,n))<=Rc&&(n>=30||Math.abs(s)>=18)&&Math.hypot(n,s)>=30}_spawnPoint(t,e,n,s,r){for(let l=0;l<8;l++){const h=l?e+(this._random()-.5)*.7:e,u=l?n+(this._random()-.5)*6:n,f=t.x+Math.sin(h)*u,d=t.y+Math.cos(h)*u;if(this._reachable(f,d,s)&&r(f,d))return{x:f,y:d}}const a=t.y+Math.cos(e)*n,o=this._corridor(a),c=Xe(t.x+Math.sin(e)*n,o.minX+s+1,o.maxX-s-1);return this._reachablePoint(c,a,s,r,!0)}_spawnPack(t,e=!1,{mixed:n=!1,escort:s=!1,brutes:r=!1,flank:a=!1,block:o=!1}={}){const c=Math.max(0,Ws-this.enemies.filter(w=>w.hp>0).length);let l=Math.max(0,Math.min(Math.floor(t),c,!s&&this.player.y-this.leg*this.legLength<40?4:1/0));const h=e?3:1,u=this._heading(),f=Array.from({length:h},()=>u+(a?(this._random()<.5?-1:1)*(.75+this._random()*.35):o?(this._random()-.5)*.3:this._spawnAngle())),d=!s&&this.player.y-this.leg*this.legLength<40,g=s?2:d?0:1;let v=0;const m=s&&this.boss,p=r?["walker","dog","walker","dog","brute"]:["walker","dog"];for(let w=0;w<l;w++){const x=this._random();let y=n?p[w%p.length]:x<(e?.5:.28)||a&&x<.5?"dog":x>.9-this.leg*.01&&!a?"brute":"walker";y==="brute"&&v>=g&&(y="walker"),y==="brute"&&v++;const A=(this._random()-.5)*.3,T=Un[y].radius;let P;if(m){const b=(_,E)=>{const{along:L,across:I}=this._alongAcross(_,E,u);return L>=4&&Math.abs(Math.atan2(I,L))<=Rc&&Math.hypot(L,I)>=14&&(L>=24||Math.abs(I)>=16)};P=this._spawnPoint(this.boss,this._random()*Dc,8+this._random()*6,T,b)}else{const b=f[w%h]+A,_=Xe(31/Math.max(.3,Math.cos(b-u)),a?36:34,46)+this._random()*5+(o?4:0);P=this._spawnPoint(this.player,b,_,T,(E,L)=>this._offScreenAhead(E,L))}const R=P&&this._spawnEnemy(y,P.x,P.y);if(!R){l--;continue}R.spawnGrace=.9,o&&(R.hold=!0),s&&(R.bossEscort=!0),w%Math.max(1,Math.ceil(l/3))===0&&this._effect("warning",R.x,R.y,.9,{radius:e?4:2.5})}return l}_spawnEnemy(t,e,n){if(this.enemies.filter(o=>o.hp>0).length>=Ws)return null;const s=Un[t]||Un.walker,r=1+this.leg*.045,a={id:this._id(),x:e,y:n,type:t,hp:s.hp*r,maxHp:s.hp*r,radius:s.radius,speed:s.speed,damage:s.damage,angle:0,attackClock:.75+this._random(),chargeClock:t==="boss"?3:Ei[t]?Ei[t].first+this._random()*2:0,telegraph:null,sprinting:!1};return t==="walker"&&this._random()<ti.chance&&(a.runner=!0,a.sprintLeft=ti.stamina,a.sprintCooldown=0),this.enemies.push(a),a}_updateEnemies(t){for(const e of this.enemies){if(e.hp<=0)continue;if(e.spawnGrace>0){e.spawnGrace=Math.max(0,e.spawnGrace-t);continue}if(e.phaseShield&&(e.phaseShield=Math.max(0,e.phaseShield-t)),e.knock){const c=Math.min(t,e.knock.life);e.x+=e.knock.x*c,e.y+=e.knock.y*c,e.knock.life-=t,e.knock.life<=0&&(e.knock=null)}e.attackClock-=t,e.sprinting=!1;const n=this.player.x-e.x,s=this.player.y-e.y,r=Math.hypot(n,s)||.001;if(e.angle=Math.atan2(n,s),!e.hold&&e.type!=="boss"&&!e.bossEscort&&(e.anchor??={x:e.x,y:e.y},Math.hypot(e.x-e.anchor.x,e.y-e.anchor.y)>6&&(e.anchor={x:e.x,y:e.y},e.idle=0),r<(e.bestGap??1/0)-.5?(e.bestGap=r,e.idle=0,e.anchor={x:e.x,y:e.y}):e.idle=(e.idle||0)+t,e.idle>8&&(r>24||!this._lineClear(e,this.player,.25,e.radius)))){e.hp=0;continue}if(e.hold){if(r>13&&e.hp>=e.maxHp)continue;e.hold=!1}if(e.telegraph){if(e.telegraph.life-=t,e.telegraph.life<=0){const c=e.telegraph;if(c.kind==="charge")e.charge={life:Ei[e.type]?.life??Xs.life,angle:c.angle};else{const l={x:c.x??e.x,y:c.y??e.y};this._effect("slam",l.x,l.y,.6,{radius:c.radius}),we(l,this.player)<c.radius+.45&&this._hurt(e.damage,e)}e.telegraph=null,e.attackClock=e.type==="boss"&&e.hp<e.maxHp*.45?1.9:Un[e.type].attackDelay}continue}if(e.charge){const c=Math.min(e.charge.life,t)*(Ei[e.type]?.speed??Xs.speed);e.x+=Math.sin(e.charge.angle)*c,e.y+=Math.cos(e.charge.angle)*c,e.charge.life-=t,we(e,this.player)<e.radius+.7&&this._hurt(e.damage,e),e.charge.life<=0&&(e.charge=null,this._effect("slam",e.x,e.y,.5,{radius:Ei[e.type]?1.6:3}));continue}const a=Ei[e.type];if(e.type==="boss"||a){e.chargeClock-=t;const c=a&&e.chargeClock<=0&&r<a.reach?this._lungeAim(e,a):null;if(e.chargeClock<=0&&(a?c?.ok:r>3&&r<25)){if(e.attackNumber=(e.attackNumber||0)+1,e.type==="boss"&&e.attackNumber%2===0){e.telegraph={kind:"slam",life:1.3,maxLife:1.3,x:this.player.x,y:this.player.y+(this.progress<1?3:0),radius:5.2,angle:e.angle},e.chargeClock=e.hp<e.maxHp*.45?2.4:3.8,this._effect("warning",e.telegraph.x,e.telegraph.y,1.3,{radius:5.2}),this._event("telegraph","Corruption is surfacing underfoot. Move out of the red circle!");continue}const l=a?a.windup:1.15;e.telegraph={kind:"charge",life:l,maxLife:l,angle:a?c.angle:e.angle,radius:a?.8:2.5},e.telegraph.length=(a??Xs).life*(a??Xs).speed,e.chargeClock=a?a.cooldown+this._random()*a.spread:e.hp<e.maxHp*.45?2.4:3.8,e.type==="boss"&&this._event("telegraph",`${e.name||"The Warden"} is charging. Sidestep the red line.`);continue}}const o=e.type==="boss"?4.5:e.radius+.8;if(!a&&r<o&&e.attackClock<=0){const c=e.type==="boss"?.85:.8;e.telegraph={kind:"slam",life:c,maxLife:c,radius:o,angle:e.angle}}else if(r>e.radius+.5){const c=e.runner&&this._updateRunner(e,r,t)?ti.speed:e.type==="boss"&&r>35?this.speed:e.speed;let l=n,h=s;if(a&&!e.hold){const u=Math.min(1.4,r/(c+this.speed));l=this.player.x+this.player.velocity.x*u-e.x,h=this.player.y+this.player.velocity.y*u-e.y}this._walkEnemy(e,l,h,c,t)}for(const c of this.enemies){if(c.id<=e.id||c.hp<=0)continue;const l=e.x-c.x,h=e.y-c.y,u=Math.hypot(l,h)||.001,f=(e.radius+c.radius)*.9;if(u<f){const d=Math.min(.08,(f-u)/2);e.x+=l/u*d,e.y+=h/u*d,c.x-=l/u*d,c.y-=h/u*d}}}}_chooseWeapon(t,e=this.enemies){const n=we(t,this.player),s=e.filter(o=>o.hp>0&&we(o,t)<6).length;let r=null,a=-1/0;for(const o of this.weapons){const c=We[o];if(!c||n>ms(c,this.buffs)+t.radius)continue;const l=t.maxHp*(Tc[t.type]??.5);let h=1;o==="scattergun"?h=Xe((t.radius*1.7+1.2)/Math.max(1,n*c.spread),.6,c.pellets):o==="rifle"?h=2.35:o==="arc"&&(h=t.radius>=1?1.45:.85);let u=Math.min(c.damage*h,l)/c.cooldown;o==="scattergun"&&(u*=s>2?1+.3*Math.min(s-1,4):1,n>10&&(u*=.6)),t.hp<c.damage&&o!=="sidearm"&&(u*=.7),n<4&&o==="sidearm"&&(u*=.75),u>a&&(r=o,a=u)}return r}_autoFire(){if(this._fireClock>0)return;const t=Math.max(...this.weapons.map(l=>ms(l,this.buffs))),e=this.enemies.filter(l=>l.hp>0&&we(l,this.player)<t+l.radius&&this._lineClear(this.player,l,.25,l.radius*.8));e.sort((l,h)=>{const u=f=>{const d=we(f,this.player);let g=d/(f.type==="dog"?1.25:1)-(f.telegraph?5:0);return f.type==="boss"?g-=25:(d<4.5||f.telegraph&&d<9)&&(g-=40),g};return u(l)-u(h)});let n=e[0],s;if(n?s=this._chooseWeapon(n,e):(n=this.crates.filter(l=>l.hp>0&&we(l,this.player)<12&&this._lineClear(this.player,l,.25,(l.radius||.8)*.8)).sort((l,h)=>we(l,this.player)-we(h,this.player))[0],s="sidearm"),!n||!s)return;const r=We[s],a=ms(r,this.buffs),o=Math.atan2(n.x-this.player.x,n.y-this.player.y);this.player.weapon=s,this.player.aimAngle=o,this._fireClock=r.cooldown*(this.buffs.rapid>0?.58:1);const c=this._id();for(let l=0;l<r.pellets;l++){const h=r.pellets>1?(l/(r.pellets-1)-.5)*r.spread:0;this.projectiles.push({id:this._id(),x:this.player.x+Math.sin(o)*.65,y:this.player.y+Math.cos(o)*.65,angle:o+h,weapon:s,rangeRemaining:a-.65,life:(a-.65)/r.projectileSpeed,damage:r.damage*(this.buffs.power>0?1.55:1),radius:r.radius,shotId:c})}this.player.lastShotAt=this.elapsed,this._effect("muzzle",this.player.x+Math.sin(o)*.7,this.player.y+Math.cos(o)*.7,.1,{color:r.color}),this._event("shot","",{weapon:s})}_updateProjectiles(t){for(const e of this.projectiles){const n=We[e.weapon],s=e.x,r=e.y,a=Math.min(t,Math.max(0,e.life),(e.rangeRemaining??e.life*n.projectileSpeed)/n.projectileSpeed);if(a<=0){e.life=0;continue}const o=n.projectileSpeed*a,c=s+Math.sin(e.angle)*o,l=r+Math.cos(e.angle)*o;let h=null;const u=(g,v,m)=>{m!==null&&(!h||m<h.t)&&(h={kind:g,entity:v,t:m})};for(const g of this._props){if(!Lc(g))continue;const v=(g.collision?.halfX??g.radius)+e.radius,m=(g.collision?.halfY??g.radius)+e.radius;g.x+v<Math.min(s,c)||g.x-v>Math.max(s,c)||g.y+m<Math.min(r,l)||g.y-m>Math.max(r,l)||u("solid",g,Ic(s,r,c,l,g,e.radius))}for(const g of this.crates)g.hp>0&&u("crate",g,Xa(s,r,c,l,g.x,g.y,(g.radius||.8)+e.radius));for(const g of this.enemies)g.hp>0&&u("enemy",g,Xa(s,r,c,l,g.x,g.y,g.radius+e.radius));const f=h?.t??1;if(e.x=s+(c-s)*f,e.y=r+(l-r)*f,e.rangeRemaining=Math.max(0,(e.rangeRemaining??e.life*n.projectileSpeed)-o*f),e.life=Math.max(0,e.life-t),!h)continue;e.life=0;const d=h.entity;n.splash&&this._effect("arc",e.x,e.y,.55,{radius:n.splash,color:n.color}),h.kind==="enemy"?this._damageEnemy(d,e.damage,e.shotId??e.id):h.kind==="crate"?(d.hp-=e.damage,d.hp>0&&this._crateHealth.set(d.id,d.hp),this._effect("hit",d.x,d.y,.2,{color:"#efc983"}),d.hp<=0&&(this._destroyedCrates.add(d.id),this._crateHealth.delete(d.id),d.medkit?this._addDrop({x:d.x,y:d.y,type:"heal",amount:cs(this.leg)+8,life:150}):this._random()<Fu&&this._dropLoot(d.x,d.y),this._effect("crate",d.x,d.y,.7))):this._effect("hit",e.x,e.y,.2,{color:"#afbeb0",radius:.4})}this.projectiles=this.projectiles.filter(e=>e.life>0),this.crates=this.crates.filter(e=>e.hp>0)}_damageEnemy(t,e,n=null){if(!(t.hp<=0)){if(t.phaseShield>0){this._effect("hit",t.x,t.y,.16,{radius:t.radius,color:"#c5b3ff"});return}if(n!==null){const s=t.shotLog||=[];let r=s.find(a=>a[0]===n);if(r||(r=[n,0],s.push(r),s.length>6&&s.shift()),e=Math.min(e,Math.max(0,t.maxHp*(Tc[t.type]??.5)-r[1])),r[1]+=e,e<=0){this._effect("hit",t.x,t.y,.16,{radius:t.radius});return}}t.hp-=e,t.hp<1e-6&&(t.hp=0),this._effect("hit",t.x,t.y,.22,{damage:Math.round(e),radius:t.radius}),t.type==="boss"&&t.hp>0&&t.hp<=t.maxHp*.5&&!t.phaseTriggered&&(t.phaseTriggered=!0,t.phaseShield=1.4,t.charge=null,t.telegraph={kind:"slam",life:1.4,maxLife:1.4,x:this.player.x,y:this.player.y+(this.progress<1?3:0),radius:6.2,angle:t.angle},this._effect("warning",t.telegraph.x,t.telegraph.y,1.4,{radius:6.2}),this._event("telegraph","The Warden is drawing on the corruption. Get clear of the red circle.")),!(t.hp>0)&&(this.kills++,this.combo++,this._comboClock=4.5,this._effect("death",t.x,t.y,.75,{radius:t.radius}),t.type==="boss"?(this._bossDefeated=!0,this._bossReinforcementClock=0,this.boss=null,this._dropLoot(t.x,t.y,!0),this._addDrop({x:t.x+1.5,y:t.y,type:"heal",amount:Math.round(cs(this.leg)*1.25),life:120}),this._event("bossDefeated","The path is clear. Reach the checkpoint beacon.")):this._random()<(Nu[t.type]??.07)*(this.player.hp<35?2.2:this.player.hp<50?1.5:1)&&this._dropLoot(t.x,t.y))}}_addDrop(t){const e=this._reachablePoint(t.x,t.y,.9);this.drops.push({id:this._id(),...t,x:e.x,y:e.y})}_dropLoot(t,e,n=!1){const s=Object.keys(We).filter(h=>!this.weapons.includes(h)),r=this._random(),a=this.player.hp<35?Math.max(.6,ta(this.leg)):this.player.hp<50?Math.max(.45,ta(this.leg)):ta(this.leg),o=Math.min(.999,r/(1-a)),c=r>=1-a?"heal":o<.14?"shield":o<.42?"rapid":o<.72?"power":"speed",l=n===!0?.6:typeof n=="number"?n:.13;s.length&&r<l?this._addDrop({x:t,y:e,type:"weapon",weapon:s[Math.floor(this._random()*s.length)],life:120}):this._addDrop({x:t,y:e,type:c,...c==="heal"?{amount:cs(this.leg)}:{},life:90})}_gainBuff(t){const e=Object.keys(this.buffs).filter(n=>n!==t&&this.buffs[n]>0).sort((n,s)=>this.buffs[n]-this.buffs[s]);!(this.buffs[t]>0)&&e.length>=2&&(this.buffs[e[0]]=0),this.buffs[t]=Math.max(this.buffs[t],Qr[t])}_collectDrops(t){for(const e of this.drops){const n=we(e,this.player);n>14&&(e.life-=t);const s=!(e.type==="heal"&&this.player.hp>this.player.maxHp-4)&&!(e.type==="shield"&&this.player.shield>=Ys-2);if(n<6.5&&s){const r=Math.min(n,t*(4+(6.5-n)*2));e.x+=(this.player.x-e.x)/(n||1)*r,e.y+=(this.player.y-e.y)/(n||1)*r}if(!(we(e,this.player)>1.5)&&s){if(e.life=0,e.type==="weapon")this.weapons.includes(e.weapon)?this._gainBuff("power"):this.weapons.push(e.weapon),this._event("pickup",`${We[e.weapon].name} acquired. Auto-switching enabled.`,{drop:e.type});else if(e.type==="heal"){const r=e.amount??cs(this.leg),a=Math.min(r,this.player.maxHp-this.player.hp);this.player.hp+=a,this._event("pickup",`Medkit · +${Math.round(a)} health`,{drop:e.type})}else if(e.type==="shield")this.player.shield=Math.min(Ys,this.player.shield+14),this._event("pickup","Shield cell · +14 protection",{drop:e.type});else{this._gainBuff(e.type);const r={rapid:"Overdrive · faster fire",power:"Charged rounds · increased damage",speed:"Fleetfoot · move faster"}[e.type];this._event("pickup",r,{drop:e.type})}this._effect("pickup",this.player.x,this.player.y,.75,{drop:e.type})}}this.drops=this.drops.filter(e=>e.life>0&&we(e,this.player)<130)}_hurt(t,e){if(this._hurtClock>0||this.mode!=="playing")return;const n=Math.min(this.player.shield,t);this.player.shield-=n;const s=t-n;if(this.player.hp=Math.max(0,this.player.hp-s),this.cargo=Math.max(0,this.cargo-Math.ceil(s*.2)),this._hurtClock=.75,this._effect("hurt",this.player.x,this.player.y,.55),this._event("hurt",s>0?"Hit! Keep moving to evade the next attack.":"Shield absorbed the hit."),e&&e.type!=="boss"){const r=we(e,this.player)||1;e.knock={x:(e.x-this.player.x)/r*3.2,y:(e.y-this.player.y)/r*3.2,life:.25}}this.player.hp<=0&&(this.mode="dead",this._stopPlayerMotion(),this._event("dead","The route took its toll. Your last checkpoint is safe."))}_reachCheckpoint(){this.checkpointCount=this.leg+1,this.player.hp=this.player.maxHp,this.player.shield=Math.min(Ys,Math.max(15,this.player.shield)),this.buffs={rapid:0,power:0,speed:0},this._guardianSnapshot=null,this._waypointSnapshot=null,this._guardianFails=0,this.cargo=Math.max(85,this.cargo),this.enemies=[],this.projectiles=[],this.effects=[],this.boss=null,this.mode=this.leg===this.totalLegs-1?"complete":"checkpoint",this._stopPlayerMotion(),this._updateObjective(),this._checkpointSnapshot=this._snapshot(),this._event(this.mode==="complete"?"complete":"checkpoint",this.mode==="complete"?"Delivery received. You brought something worth saving.":"Checkpoint secured. Health restored and cargo repaired. Your route can be saved here.")}continueJourney(){return this.mode!=="checkpoint"?!1:(this.leg++,this.mode="playing",this._stopPlayerMotion(),this.progress=0,this._legElapsed=0,this._spawnClock=4.5,this._ambushQueue=[],this._waypointSnapshot=null,this._waypointK=0,this._bossSpawned=!1,this._bossDefeated=!1,this._bossReinforcementClock=0,this._bossWave=0,this._quietCycle=-1,this._lastEncounter=-1,this._fireClock=0,this._hurtClock=1.5,this.player.blocked=!1,this._blockedClock=0,this._blockedNotified=!1,this._updateObjective(),this._event("continue",`Leg ${this.leg+1} of ${this.totalLegs}. Follow the route toward the next beacon.`),!0)}retryCheckpoint(){if(!this._checkpointSnapshot)return!1;const t=Te(this._checkpointSnapshot);return this._restore(t),this.events=[],this._refreshWorld(!0),this.mode==="checkpoint"&&this.continueJourney(),this._hurtClock=2,this._event("retry","Back on the route. Your checkpoint supplies are restored."),!0}retryGuardian(){if(!this._guardianSnapshot)return!1;const t=this.kills,e=[...this.weapons];this._restore(Te(this._guardianSnapshot)),this.kills=Math.max(this.kills,t);for(const n of e)this.weapons.includes(n)||this.weapons.push(n);return this.player.hp=this.player.maxHp,this._guardianFails++,this.events=[],this._refreshWorld(!0),this._hurtClock=2,this._event("retry","Back at the guardian's gate. Your progress on this leg is kept."),!0}_progressSave(t){return t?{...Te(t),checkpoint:Te(this._checkpointSnapshot),...this._guardianSnapshot?{guardianCheckpoint:Te(this._guardianSnapshot)}:{},...this._waypointSnapshot?{waypointCheckpoint:Te(this._waypointSnapshot)}:{}}:null}guardianSave(){return this._progressSave(this._guardianSnapshot)}waypointSave(){return this._progressSave(this._waypointSnapshot)}_updateObjective(){this.mode==="complete"?this.objective="Delivery complete · the outpost is waiting":this.mode==="checkpoint"?this.objective=`Checkpoint ${this.checkpointCount} secured · take a breath`:this.mode==="dead"?this.objective="Return to your last checkpoint":this.boss?this.objective=`Clear ${this.boss.name} · dodge the red warnings`:this._bossDefeated?this.objective=`Path clear · ${this.checkpointDistance} m to the checkpoint beacon`:this.objective=`Follow the beacon · ${this.checkpointDistance} m to checkpoint`}get checkpointDistance(){return Math.round(Math.hypot(this.player.x-se(this.checkpointY,this.seed,this.legLength),this.player.y-this.checkpointY))}get distanceRemaining(){return this.mode==="complete"?0:this.checkpointDistance+(this.totalLegs-this.leg-1)*this.legLength}get nextCheckpointTime(){return Math.ceil(this.checkpointDistance/this.speed)}get deliveryProgress(){return Xe(this.player.y/(this.totalLegs*this.legLength),0,1)}get checkpointY(){return(this.leg+1)*this.legLength}_snapshot(){return Te({version:Pc,routeVersion:vs,combatVersion:1,worldVersion:1,legLength:this.legLength,seed:this.seed,pace:this.pace,mode:this.mode,player:this.player,elapsed:this.elapsed,leg:this.leg,progress:this.progress,kills:this.kills,combo:this.combo,weapons:this.weapons,buffs:this.buffs,cargo:this.cargo,checkpointCount:this.checkpointCount,enemies:this.enemies,drops:this.drops,crates:this.crates,projectiles:this.projectiles,rngState:this._rngState,nextId:this._nextId,legElapsed:this._legElapsed,spawnClock:this._spawnClock,fireClock:this._fireClock,comboClock:this._comboClock,bossSpawned:this._bossSpawned,bossDefeated:this._bossDefeated,bossReinforcementClock:this._bossReinforcementClock,bossWave:this._bossWave,quietCycle:this._quietCycle,destroyedCrates:[...this._destroyedCrates],knownCrates:[...this._knownCrates],crateHealth:[...this._crateHealth],lastEncounter:this._lastEncounter,ambushQueue:this._ambushQueue})}serialize(){return{...this._snapshot(),checkpoint:Te(this._checkpointSnapshot),...this._guardianSnapshot?{guardianCheckpoint:Te(this._guardianSnapshot)}:{},...this._waypointSnapshot?{waypointCheckpoint:Te(this._waypointSnapshot)}:{}}}_restore(t){for(const e of["mode","player","elapsed","leg","progress","kills","combo","weapons","buffs","cargo","checkpointCount","enemies","drops","crates","projectiles"])this[e]=Te(t[e]);this._rngState=t.rngState,this._nextId=t.nextId,this._legElapsed=t.legElapsed,this._spawnClock=t.spawnClock,this._fireClock=t.fireClock,this._comboClock=t.comboClock,this._bossSpawned=t.bossSpawned,this._bossDefeated=t.bossDefeated,this._bossReinforcementClock=t.bossReinforcementClock??(t.bossSpawned&&!t.bossDefeated?this.pace==="express"?10:14:0),this._bossWave=t.bossWave??0,this._quietCycle=t.quietCycle??-1;for(const e of this.enemies)e.speed=Un[e.type].speed;for(const e of this.projectiles)e.rangeRemaining??=Math.max(0,Math.min(ms(e.weapon,this.buffs),e.life*We[e.weapon].projectileSpeed)),e.life=Math.min(e.life,e.rangeRemaining/We[e.weapon].projectileSpeed);this._lastEncounter=t.lastEncounter,this._ambushQueue=Te(t.ambushQueue||[]),this._waypointK=Math.max(0,Math.floor((this.player.y-this.leg*this.legLength)/Cc)),this._destroyedCrates=new Set(t.destroyedCrates),this._knownCrates=new Set(t.knownCrates),this._crateHealth=new Map(t.crateHealth||[]);for(const e of this.crates)e.hp>0&&e.hp<30&&this._crateHealth.set(e.id,e.hp);this.player.shield=Math.min(this.player.shield,Ys),this.mode==="checkpoint"&&(this.buffs={rapid:0,power:0,speed:0});for(const e of Object.keys(Qr))this.buffs[e]=Math.min(this.buffs[e],Qr[e]);this._beaconMissed=!1,this.player.blocked=!!this.player.blocked,Zt(this.player.aimAngle)||(this.player.aimAngle=this.player.angle),this.player.lastShotAt??=null,this._stopPlayerMotion(),this._blockedClock=0,this._blockedNotified=!1,this.effects=[],this.boss=this.enemies.find(e=>e.type==="boss"&&e.hp>0)||null,this._updateObjective()}static validateSave(t){const e=s=>{if(!s||typeof s!="object"||s.version!==Pc||!Zt(s.seed)||!["journey","express"].includes(s.pace)||s.routeVersion!==void 0&&![1,vs].includes(s.routeVersion)||s.combatVersion!==void 0&&s.combatVersion!==1||s.worldVersion!==void 0&&s.worldVersion!==1)return!1;const r=uh(s);if(![Mr(s.pace),ys(s.pace)].includes(r)||s.routeVersion===vs&&r!==ys(s.pace)||s.routeVersion===1&&r!==Mr(s.pace)||!["playing","checkpoint","dead","complete"].includes(s.mode)||!Number.isInteger(s.leg)||s.leg<0||s.leg>5)return!1;const a=s.player;if(!a||!["x","y","hp","maxHp","shield","angle"].every(l=>Zt(a[l]))||!We[a.weapon]||a.blocked!==void 0&&typeof a.blocked!="boolean"||a.aimAngle!==void 0&&!Zt(a.aimAngle)||a.movingSpeed!==void 0&&(!Zt(a.movingSpeed)||a.movingSpeed<0)||a.velocity!==void 0&&(!a.velocity||!Zt(a.velocity.x)||!Zt(a.velocity.y))||a.lastShotAt!==void 0&&a.lastShotAt!==null&&(!Zt(a.lastShotAt)||a.lastShotAt<0||a.lastShotAt>s.elapsed))return!1;const o=r/Mr(s.pace);if(a.hp<0||a.hp>a.maxHp||a.maxHp!==100||a.shield<0||a.shield>70||Math.abs(a.x)>1e3||a.y<0||a.y>6*r+12*o)return!1;if(s.worldVersion===1){const l=jr(s.seed,r);if(a.x<l.minX||a.x>l.maxX||a.y<l.minY||a.y>l.maxY)return!1}else if(a.y<Math.max(0,s.leg*r-22*o)||a.y>(s.leg+1)*r+12*o)return!1;return!(!Array.isArray(s.weapons)||s.weapons.length<1||s.weapons.length>4||!s.weapons.every(l=>We[l])||!s.weapons.includes("sidearm")||!s.buffs||!["rapid","power","speed"].every(l=>Zt(s.buffs[l])&&s.buffs[l]>=0&&s.buffs[l]<=40)||!["elapsed","progress","kills","combo","cargo","checkpointCount","rngState","nextId","legElapsed","spawnClock","fireClock","comboClock","lastEncounter"].every(l=>Zt(s[l]))||s.cargo<0||s.cargo>100||s.progress<0||s.progress>1||s.elapsed<0||s.elapsed>1e7||s.checkpointCount<0||s.checkpointCount>6||!Number.isInteger(s.rngState)||s.rngState<0||s.rngState>4294967295||!Number.isInteger(s.nextId)||s.nextId<1||s.nextId>1e9||s.mode==="checkpoint"&&(s.leg===5||s.checkpointCount!==s.leg+1||!s.bossDefeated)||s.mode==="complete"&&(s.leg!==5||s.checkpointCount!==6||!s.bossDefeated)||typeof s.bossSpawned!="boolean"||typeof s.bossDefeated!="boolean"||s.bossReinforcementClock!==void 0&&(!Zt(s.bossReinforcementClock)||s.bossReinforcementClock<0||s.bossReinforcementClock>14)||s.bossWave!==void 0&&(!Number.isInteger(s.bossWave)||s.bossWave<0||s.bossWave>1e6)||s.quietCycle!==void 0&&(!Number.isInteger(s.quietCycle)||s.quietCycle<-1)||!["enemies","drops","crates","projectiles"].every(l=>Array.isArray(s[l])&&s[l].length<500&&s[l].every(h=>h&&["x","y"].every(u=>Zt(h[u]))))||!s.enemies.every(l=>Un[l.type]&&["hp","maxHp","radius","speed","damage","angle","attackClock","chargeClock"].every(h=>Zt(l[h]))&&l.maxHp>0&&l.maxHp<=5e3&&l.radius>0&&l.radius<=5&&l.speed>=0&&l.speed<=15&&l.damage>=0&&l.damage<=100&&(l.phaseShield===void 0||Zt(l.phaseShield)&&l.phaseShield>=0&&l.phaseShield<=2)&&(!l.telegraph||["life","maxLife","radius","angle"].every(h=>Zt(l.telegraph[h]))&&(l.telegraph.x===void 0||Zt(l.telegraph.x))&&(l.telegraph.y===void 0||Zt(l.telegraph.y)))&&(!l.charge||Zt(l.charge.life)&&Zt(l.charge.angle)))||!s.projectiles.every(l=>We[l.weapon]&&["angle","life","damage","radius"].every(h=>Zt(l[h])))||!s.projectiles.every(l=>l.rangeRemaining===void 0||Zt(l.rangeRemaining)&&l.rangeRemaining>=0&&l.rangeRemaining<=30)||!s.enemies.every(l=>l.spawnGrace===void 0||Zt(l.spawnGrace)&&l.spawnGrace>=0&&l.spawnGrace<=1.5)||!s.enemies.every(l=>l.bossEscort===void 0||typeof l.bossEscort=="boolean")||!s.drops.every(l=>["heal","shield","rapid","power","speed","weapon"].includes(l.type)&&Zt(l.life)&&(l.amount===void 0||Zt(l.amount)&&l.amount>=0&&l.amount<=100)&&(l.type!=="weapon"||We[l.weapon]))||!s.crates.every(l=>Zt(l.hp)&&Zt(l.radius))||!["destroyedCrates","knownCrates"].every(l=>Array.isArray(s[l])&&s[l].length<1e4&&s[l].every(h=>typeof h=="string"||Zt(h)))||s.crateHealth!==void 0&&(!Array.isArray(s.crateHealth)||s.crateHealth.length>=1e4||!s.crateHealth.every(l=>Array.isArray(l)&&l.length===2&&(typeof l[0]=="string"||Zt(l[0]))&&Zt(l[1])&&l[1]>0&&l[1]<=30)))},n=s=>!s||!s.checkpoint&&!s.guardianCheckpoint&&!s.waypointCheckpoint&&e(s)&&s.seed===t.seed&&s.pace===t.pace;try{return e(t)&&n(t.checkpoint)&&n(t.guardianCheckpoint)&&n(t.waypointCheckpoint)}catch{return!1}}}const Yo="180",Vu=0,Uc=1,Gu=2,dh=1,ph=2,In=3,kn=0,Be=1,xn=2,Kn=0,Xi=1,Nc=2,Fc=3,Oc=4,Wu=5,hi=100,Xu=101,Yu=102,$u=103,qu=104,Ku=200,Ju=201,Zu=202,ju=203,Ya=204,$a=205,Qu=206,tf=207,ef=208,nf=209,sf=210,rf=211,af=212,of=213,cf=214,qa=0,Ka=1,Ja=2,$i=3,Za=4,ja=5,Lr=6,Qa=7,mh=0,lf=1,hf=2,Jn=0,uf=1,ff=2,df=3,gh=4,pf=5,mf=6,gf=7,_h=300,qi=301,Ki=302,to=303,eo=304,Hr=306,no=1e3,pi=1001,io=1002,qe=1003,_f=1004,$s=1005,vn=1006,na=1007,mi=1008,bn=1009,xh=1010,vh=1011,As=1012,$o=1013,_i=1014,yn=1015,ks=1016,qo=1017,Ko=1018,Cs=1020,yh=35902,Mh=35899,bh=1021,Sh=1022,un=1023,Rs=1026,Ps=1027,Jo=1028,Zo=1029,Eh=1030,jo=1031,Qo=1033,Sr=33776,Er=33777,wr=33778,Tr=33779,so=35840,ro=35841,ao=35842,oo=35843,co=36196,lo=37492,ho=37496,uo=37808,fo=37809,po=37810,mo=37811,go=37812,_o=37813,xo=37814,vo=37815,yo=37816,Mo=37817,bo=37818,So=37819,Eo=37820,wo=37821,To=36492,Ao=36494,Co=36495,Ro=36283,Po=36284,Do=36285,Lo=36286,xf=3200,vf=3201,wh=0,yf=1,Yn="",$e="srgb",Ji="srgb-linear",Ir="linear",ce="srgb",wi=7680,kc=519,Mf=512,bf=513,Sf=514,Th=515,Ef=516,wf=517,Tf=518,Af=519,Bc=35044,zc=35048,Hc="300 es",Mn=2e3,Ur=2001;class es{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vc=1234567;const Ms=Math.PI/180,Ds=180/Math.PI;function yi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function qt(i,t,e){return Math.max(t,Math.min(e,i))}function tc(i,t){return(i%t+t)%t}function Cf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Rf(i,t,e){return i!==t?(e-i)/(t-i):0}function bs(i,t,e){return(1-e)*i+e*t}function Pf(i,t,e,n){return bs(i,t,1-Math.exp(-e*n))}function Df(i,t=1){return t-Math.abs(tc(i,t*2)-t)}function Lf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function If(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Uf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Nf(i,t){return i+Math.random()*(t-i)}function Ff(i){return i*(.5-Math.random())}function Of(i){i!==void 0&&(Vc=i);let t=Vc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kf(i){return i*Ms}function Bf(i){return i*Ds}function zf(i){return(i&i-1)===0&&i!==0}function Hf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Vf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gf(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),d=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*u,c*f,o*l);break;case"YZY":i.set(c*f,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*f,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*d,o*l);break;case"YXY":i.set(c*d,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function De(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ia={DEG2RAD:Ms,RAD2DEG:Ds,generateUUID:yi,clamp:qt,euclideanModulo:tc,mapLinear:Cf,inverseLerp:Rf,lerp:bs,damp:Pf,pingpong:Df,smoothstep:Lf,smootherstep:If,randInt:Uf,randFloat:Nf,randFloatSpread:Ff,seededRandom:Of,degToRad:kf,radToDeg:Bf,isPowerOfTwo:zf,ceilPowerOfTwo:Hf,floorPowerOfTwo:Vf,setQuaternionFromProperEuler:Gf,normalize:De,denormalize:zi};class _t{constructor(t=0,e=0){_t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ns{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==f||l!==d||h!==g){let m=1-o;const p=c*f+l*d+h*g+u*v,w=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const A=Math.sqrt(x),T=Math.atan2(A,p*w);m=Math.sin(m*T)/A,o=Math.sin(o*T)/A}const y=o*w;if(c=c*m+f*y,l=l*m+d*y,h=h*m+g*y,u=u*m+v*y,m===1-o){const A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-o*d,t[e+2]=l*g+h*d+o*f-c*u,t[e+3]=h*g-o*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return sa.copy(this).projectOnVector(t),this.sub(sa)}reflect(t){return this.sub(sa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sa=new U,Gc=new ns;class Xt{constructor(t,e,n,s,r,a,o,c,l){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],v=s[0],m=s[3],p=s[6],w=s[1],x=s[4],y=s[7],A=s[2],T=s[5],P=s[8];return r[0]=a*v+o*w+c*A,r[3]=a*m+o*x+c*T,r[6]=a*p+o*y+c*P,r[1]=l*v+h*w+u*A,r[4]=l*m+h*x+u*T,r[7]=l*p+h*y+u*P,r[2]=f*v+d*w+g*A,r[5]=f*m+d*x+g*T,r[8]=f*p+d*y+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*r,d=l*r-a*c,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*l-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=f*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=d*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ra.makeScale(t,e)),this}rotate(t){return this.premultiply(ra.makeRotation(-t)),this}translate(t,e){return this.premultiply(ra.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ra=new Xt;function Ah(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wf(){const i=Nr("canvas");return i.style.display="block",i}const Wc={};function Ls(i){i in Wc||(Wc[i]=!0,console.warn(i))}function Xf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Xc=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yc=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yf(){const i={enabled:!0,workingColorSpace:Ji,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ce&&(s.r=Fn(s.r),s.g=Fn(s.g),s.b=Fn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ce&&(s.r=Yi(s.r),s.g=Yi(s.g),s.b=Yi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yn?Ir:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ls("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ls("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ji]:{primaries:t,whitePoint:n,transfer:Ir,toXYZ:Xc,fromXYZ:Yc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:n,transfer:ce,toXYZ:Xc,fromXYZ:Yc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),i}const ee=Yf();function Fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ti;class $f{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ti===void 0&&(Ti=Nr("canvas")),Ti.width=t.width,Ti.height=t.height;const s=Ti.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ti}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Nr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Fn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fn(e[n]/255)*255):e[n]=Fn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qf=0;class ec{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=yi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(aa(s[a].image)):r.push(aa(s[a]))}else r=aa(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function aa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$f.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kf=0;const oa=new U;class Ie extends es{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=pi,s=pi,r=vn,a=mi,o=un,c=bn,l=Ie.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=yi(),this.name="",this.source=new ec(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(oa).x}get height(){return this.source.getSize(oa).y}get depth(){return this.source.getSize(oa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_h)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case no:t.x=t.x-Math.floor(t.x);break;case pi:t.x=t.x<0?0:1;break;case io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case no:t.y=t.y-Math.floor(t.y);break;case pi:t.y=t.y<0?0:1;break;case io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=_h;Ie.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,y=(d+1)/2,A=(p+1)/2,T=(h+f)/4,P=(u+v)/4,R=(g+m)/4;return x>y&&x>A?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=P/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=R/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=P/r,s=R/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-v)/w,this.z=(f-h)/w,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jf extends es{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Ie(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ec(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends Jf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ch extends Ie{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zf extends Ie{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mi{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,sn):sn.fromBufferAttribute(r,a),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox)),qs.applyMatrix4(t.matrixWorld),this.union(qs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ls),Ks.subVectors(this.max,ls),Ai.subVectors(t.a,ls),Ci.subVectors(t.b,ls),Ri.subVectors(t.c,ls),zn.subVectors(Ci,Ai),Hn.subVectors(Ri,Ci),ei.subVectors(Ai,Ri);let e=[0,-zn.z,zn.y,0,-Hn.z,Hn.y,0,-ei.z,ei.y,zn.z,0,-zn.x,Hn.z,0,-Hn.x,ei.z,0,-ei.x,-zn.y,zn.x,0,-Hn.y,Hn.x,0,-ei.y,ei.x,0];return!ca(e,Ai,Ci,Ri,Ks)||(e=[1,0,0,0,1,0,0,0,1],!ca(e,Ai,Ci,Ri,Ks))?!1:(Js.crossVectors(zn,Hn),e=[Js.x,Js.y,Js.z],ca(e,Ai,Ci,Ri,Ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Cn=[new U,new U,new U,new U,new U,new U,new U,new U],sn=new U,qs=new Mi,Ai=new U,Ci=new U,Ri=new U,zn=new U,Hn=new U,ei=new U,ls=new U,Ks=new U,Js=new U,ni=new U;function ca(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ni.fromArray(i,r);const o=s.x*Math.abs(ni.x)+s.y*Math.abs(ni.y)+s.z*Math.abs(ni.z),c=t.dot(ni),l=e.dot(ni),h=n.dot(ni);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const jf=new Mi,hs=new U,la=new U;class Bs{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):jf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hs.subVectors(t,this.center);const e=hs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(hs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(la.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hs.copy(t.center).add(la)),this.expandByPoint(hs.copy(t.center).sub(la))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Rn=new U,ha=new U,Zs=new U,Vn=new U,ua=new U,js=new U,fa=new U;class Rh{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ha.copy(t).add(e).multiplyScalar(.5),Zs.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(ha);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Zs),o=Vn.dot(this.direction),c=-Vn.dot(Zs),l=Vn.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*c-o,f=a*o-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ha).addScaledVector(Zs,f),d}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);const n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,n,s,r){ua.subVectors(e,t),js.subVectors(n,t),fa.crossVectors(ua,js);let a=this.direction.dot(fa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vn.subVectors(this.origin,t);const c=o*this.direction.dot(js.crossVectors(Vn,js));if(c<0)return null;const l=o*this.direction.dot(ua.cross(Vn));if(l<0||c+l>a)return null;const h=-o*Vn.dot(fa);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,s,r,a,o,c,l,h,u,f,d,g,v,m){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,f,d,g,v,m)}set(t,e,n,s,r,a,o,c,l,h,u,f,d,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Pi.setFromMatrixColumn(t,0).length(),r=1/Pi.setFromMatrixColumn(t,1).length(),a=1/Pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,d=a*u,g=o*h,v=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-v*l,e[9]=-o*c,e[2]=v-f*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,g=l*h,v=l*u;e[0]=f+v*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=v+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,g=l*h,v=l*u;e[0]=f-v*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=v-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,d=a*u,g=o*h,v=o*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+v,e[1]=c*u,e[5]=v*l+f,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,d=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-v*u}else if(t.order==="XZY"){const f=a*c,d=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+v,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qf,t,td)}lookAt(t,e,n){const s=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Gn.crossVectors(n,Ve),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Gn.crossVectors(n,Ve)),Gn.normalize(),Qs.crossVectors(Ve,Gn),s[0]=Gn.x,s[4]=Qs.x,s[8]=Ve.x,s[1]=Gn.y,s[5]=Qs.y,s[9]=Ve.y,s[2]=Gn.z,s[6]=Qs.z,s[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],w=n[3],x=n[7],y=n[11],A=n[15],T=s[0],P=s[4],R=s[8],b=s[12],_=s[1],E=s[5],L=s[9],I=s[13],B=s[2],H=s[6],V=s[10],G=s[14],F=s[3],Z=s[7],Q=s[11],rt=s[15];return r[0]=a*T+o*_+c*B+l*F,r[4]=a*P+o*E+c*H+l*Z,r[8]=a*R+o*L+c*V+l*Q,r[12]=a*b+o*I+c*G+l*rt,r[1]=h*T+u*_+f*B+d*F,r[5]=h*P+u*E+f*H+d*Z,r[9]=h*R+u*L+f*V+d*Q,r[13]=h*b+u*I+f*G+d*rt,r[2]=g*T+v*_+m*B+p*F,r[6]=g*P+v*E+m*H+p*Z,r[10]=g*R+v*L+m*V+p*Q,r[14]=g*b+v*I+m*G+p*rt,r[3]=w*T+x*_+y*B+A*F,r[7]=w*P+x*E+y*H+A*Z,r[11]=w*R+x*L+y*V+A*Q,r[15]=w*b+x*I+y*G+A*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*o*f+n*l*f+s*o*d-n*c*d)+v*(+e*c*d-e*l*f+r*a*f-s*a*d+s*l*h-r*c*h)+m*(+e*l*u-e*o*d-r*a*u+n*a*d+r*o*h-n*l*h)+p*(-s*o*h-e*c*u+e*o*f+s*a*u-n*a*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],w=u*m*l-v*f*l+v*c*d-o*m*d-u*c*p+o*f*p,x=g*f*l-h*m*l-g*c*d+a*m*d+h*c*p-a*f*p,y=h*v*l-g*u*l+g*o*d-a*v*d-h*o*p+a*u*p,A=g*u*c-h*v*c-g*o*f+a*v*f+h*o*m-a*u*m,T=e*w+n*x+s*y+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/T;return t[0]=w*P,t[1]=(v*f*r-u*m*r-v*s*d+n*m*d+u*s*p-n*f*p)*P,t[2]=(o*m*r-v*c*r+v*s*l-n*m*l-o*s*p+n*c*p)*P,t[3]=(u*c*r-o*f*r-u*s*l+n*f*l+o*s*d-n*c*d)*P,t[4]=x*P,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*P,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*p-e*c*p)*P,t[7]=(a*f*r-h*c*r+h*s*l-e*f*l-a*s*d+e*c*d)*P,t[8]=y*P,t[9]=(g*u*r-h*v*r-g*n*d+e*v*d+h*n*p-e*u*p)*P,t[10]=(a*v*r-g*o*r+g*n*l-e*v*l-a*n*p+e*o*p)*P,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*d-e*o*d)*P,t[12]=A*P,t[13]=(h*v*s-g*u*s+g*n*f-e*v*f-h*n*m+e*u*m)*P,t[14]=(g*o*s-a*v*s-g*n*c+e*v*c+a*n*m-e*o*m)*P,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*f+e*o*f)*P,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,f=r*l,d=r*h,g=r*u,v=a*h,m=a*u,p=o*u,w=c*l,x=c*h,y=c*u,A=n.x,T=n.y,P=n.z;return s[0]=(1-(v+p))*A,s[1]=(d+y)*A,s[2]=(g-x)*A,s[3]=0,s[4]=(d-y)*T,s[5]=(1-(f+p))*T,s[6]=(m+w)*T,s[7]=0,s[8]=(g+x)*P,s[9]=(m-w)*P,s[10]=(1-(f+v))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Pi.set(s[0],s[1],s[2]).length();const a=Pi.set(s[4],s[5],s[6]).length(),o=Pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],rn.copy(this);const l=1/r,h=1/a,u=1/o;return rn.elements[0]*=l,rn.elements[1]*=l,rn.elements[2]*=l,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,e.setFromRotationMatrix(rn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Mn,c=!1){const l=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let g,v;if(c)g=r/(a-r),v=a*r/(a-r);else if(o===Mn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Ur)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Mn,c=!1){const l=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s);let g,v;if(c)g=1/(a-r),v=a/(a-r);else if(o===Mn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Ur)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Pi=new U,rn=new ae,Qf=new U(0,0,0),td=new U(1,1,1),Gn=new U,Qs=new U,Ve=new U,$c=new ae,qc=new ns;class Sn{constructor(t=0,e=0,n=0,s=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $c.makeRotationFromQuaternion(t),this.setFromRotationMatrix($c,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qc.setFromEuler(this),this.setFromQuaternion(qc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class nc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ed=0;const Kc=new U,Di=new ns,Pn=new ae,tr=new U,us=new U,nd=new U,id=new ns,Jc=new U(1,0,0),Zc=new U(0,1,0),jc=new U(0,0,1),Qc={type:"added"},sd={type:"removed"},Li={type:"childadded",child:null},da={type:"childremoved",child:null};class Ae extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new U,e=new Sn,n=new ns,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Xt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.multiply(Di),this}rotateOnWorldAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.premultiply(Di),this}rotateX(t){return this.rotateOnAxis(Jc,t)}rotateY(t){return this.rotateOnAxis(Zc,t)}rotateZ(t){return this.rotateOnAxis(jc,t)}translateOnAxis(t,e){return Kc.copy(t).applyQuaternion(this.quaternion),this.position.add(Kc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jc,t)}translateY(t){return this.translateOnAxis(Zc,t)}translateZ(t){return this.translateOnAxis(jc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?tr.copy(t):tr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(us,tr,this.up):Pn.lookAt(tr,us,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Di.setFromRotationMatrix(Pn),this.quaternion.premultiply(Di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qc),Li.child=t,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sd),da.child=t,this.dispatchEvent(da),da.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qc),Li.child=t,this.dispatchEvent(Li),Li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,t,nd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,id,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ae.DEFAULT_UP=new U(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new U,Dn=new U,pa=new U,Ln=new U,Ii=new U,Ui=new U,tl=new U,ma=new U,ga=new U,_a=new U,xa=new pe,va=new pe,ya=new pe;class hn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),an.subVectors(t,e),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){an.subVectors(s,e),Dn.subVectors(n,e),pa.subVectors(t,e);const a=an.dot(an),o=an.dot(Dn),c=an.dot(pa),l=Dn.dot(Dn),h=Dn.dot(pa),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ln.x),c.addScaledVector(a,Ln.y),c.addScaledVector(o,Ln.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return xa.setScalar(0),va.setScalar(0),ya.setScalar(0),xa.fromBufferAttribute(t,e),va.fromBufferAttribute(t,n),ya.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(xa,r.x),a.addScaledVector(va,r.y),a.addScaledVector(ya,r.z),a}static isFrontFacing(t,e,n,s){return an.subVectors(n,e),Dn.subVectors(t,e),an.cross(Dn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),an.cross(Dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ii.subVectors(s,n),Ui.subVectors(r,n),ma.subVectors(t,n);const c=Ii.dot(ma),l=Ui.dot(ma);if(c<=0&&l<=0)return e.copy(n);ga.subVectors(t,s);const h=Ii.dot(ga),u=Ui.dot(ga);if(h>=0&&u<=h)return e.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Ii,a);_a.subVectors(t,r);const d=Ii.dot(_a),g=Ui.dot(_a);if(g>=0&&d<=g)return e.copy(r);const v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Ui,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return tl.subVectors(r,s),o=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(tl,o);const p=1/(m+v+f);return a=v*p,o=f*p,e.copy(n).addScaledVector(Ii,a).addScaledVector(Ui,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},er={h:0,s:0,l:0};function Ma(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=tc(t,1),e=qt(e,0,1),n=qt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ma(a,r,t+1/3),this.g=Ma(a,r,t),this.b=Ma(a,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=$e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const n=Ph[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fn(t.r),this.g=Fn(t.g),this.b=Fn(t.b),this}copyLinearToSRGB(t){return this.r=Yi(t.r),this.g=Yi(t.g),this.b=Yi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return ee.workingToColorSpace(Re.copy(this),t),Math.round(qt(Re.r*255,0,255))*65536+Math.round(qt(Re.g*255,0,255))*256+Math.round(qt(Re.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Re.copy(this),e);const n=Re.r,s=Re.g,r=Re.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=$e){ee.workingToColorSpace(Re.copy(this),t);const e=Re.r,n=Re.g,s=Re.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(er);const n=bs(Wn.h,er.h,e),s=bs(Wn.s,er.s,e),r=bs(Wn.l,er.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new Kt;Kt.NAMES=Ph;let rd=0;class zs extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=Xi,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ya,this.blendDst=$a,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ya&&(n.blendSrc=this.blendSrc),this.blendDst!==$a&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ui extends zs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new U,nr=new _t;let ad=0;class dn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ad++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Bc,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)nr.fromBufferAttribute(this,e),nr.applyMatrix3(t),this.setXY(e,nr.x,nr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=zi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zi(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zi(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zi(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Bc&&(t.usage=this.usage),t}}class Dh extends dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Lh extends dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fe extends dn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let od=0;const Ze=new ae,ba=new Ae,Ni=new U,Ge=new Mi,fs=new Mi,Ee=new U;class Ue extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ah(t)?Lh:Dh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return ba.lookAt(t),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fe(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ge.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];fs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(Ge.min,fs.min),Ge.expandByPoint(Ee),Ee.addVectors(Ge.max,fs.max),Ge.expandByPoint(Ee)):(Ge.expandByPoint(fs.min),Ge.expandByPoint(fs.max))}Ge.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ee));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ee.fromBufferAttribute(o,l),c&&(Ni.fromBufferAttribute(t,l),Ee.add(Ni)),s=Math.max(s,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<n.count;R++)o[R]=new U,c[R]=new U;const l=new U,h=new U,u=new U,f=new _t,d=new _t,g=new _t,v=new U,m=new U;function p(R,b,_){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,_),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,_),h.sub(l),u.sub(l),d.sub(f),g.sub(f);const E=1/(d.x*g.y-g.x*d.y);isFinite(E)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(E),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(E),o[R].add(v),o[b].add(v),o[_].add(v),c[R].add(m),c[b].add(m),c[_].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let R=0,b=w.length;R<b;++R){const _=w[R],E=_.start,L=_.count;for(let I=E,B=E+L;I<B;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const x=new U,y=new U,A=new U,T=new U;function P(R){A.fromBufferAttribute(s,R),T.copy(A);const b=o[R];x.copy(b),x.sub(A.multiplyScalar(A.dot(b))).normalize(),y.crossVectors(T,b);const E=y.dot(c[R])<0?-1:1;a.setXYZW(R,x.x,x.y,x.z,E)}for(let R=0,b=w.length;R<b;++R){const _=w[R],E=_.start,L=_.count;for(let I=E,B=E+L;I<B;I+=3)P(t.getX(I+0)),P(t.getX(I+1)),P(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,h=new U,u=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new dn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ue,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const el=new ae,ii=new Rh,ir=new Bs,nl=new U,sr=new U,rr=new U,ar=new U,Sa=new U,or=new U,il=new U,cr=new U;class ve extends Ae{constructor(t=new Ue,e=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){or.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Sa.fromBufferAttribute(u,t),a?or.addScaledVector(Sa,h):or.addScaledVector(Sa.sub(e),h))}e.add(or)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(r),ii.copy(t.ray).recast(t.near),!(ir.containsPoint(ii.origin)===!1&&(ii.intersectSphere(ir,nl)===null||ii.origin.distanceToSquared(nl)>(t.far-t.near)**2))&&(el.copy(r).invert(),ii.copy(t.ray).applyMatrix4(el),!(n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ii)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],w=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=w,A=x;y<A;y+=3){const T=o.getX(y),P=o.getX(y+1),R=o.getX(y+2);s=lr(this,p,t,n,l,h,u,T,P,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const w=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);s=lr(this,a,t,n,l,h,u,w,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],w=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=w,A=x;y<A;y+=3){const T=y,P=y+1,R=y+2;s=lr(this,p,t,n,l,h,u,T,P,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const w=m,x=m+1,y=m+2;s=lr(this,a,t,n,l,h,u,w,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function cd(i,t,e,n,s,r,a,o){let c;if(t.side===Be?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===kn,o),c===null)return null;cr.copy(o),cr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(cr);return l<e.near||l>e.far?null:{distance:l,point:cr.clone(),object:i}}function lr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,sr),i.getVertexPosition(c,rr),i.getVertexPosition(l,ar);const h=cd(i,t,e,n,sr,rr,ar,il);if(h){const u=new U;hn.getBarycoord(il,sr,rr,ar,u),s&&(h.uv=hn.getInterpolatedAttribute(s,o,c,l,u,new _t)),r&&(h.uv1=hn.getInterpolatedAttribute(r,o,c,l,u,new _t)),a&&(h.normal=hn.getInterpolatedAttribute(a,o,c,l,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new U,materialIndex:0};hn.getNormal(sr,rr,ar,f.normal),h.face=f,h.barycoord=u}return h}class is extends Ue{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2));function g(v,m,p,w,x,y,A,T,P,R,b){const _=y/P,E=A/R,L=y/2,I=A/2,B=T/2,H=P+1,V=R+1;let G=0,F=0;const Z=new U;for(let Q=0;Q<V;Q++){const rt=Q*E-I;for(let Lt=0;Lt<H;Lt++){const Ft=Lt*_-L;Z[v]=Ft*w,Z[m]=rt*x,Z[p]=B,l.push(Z.x,Z.y,Z.z),Z[v]=0,Z[m]=0,Z[p]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(Lt/P),u.push(1-Q/R),G+=1}}for(let Q=0;Q<R;Q++)for(let rt=0;rt<P;rt++){const Lt=f+rt+H*Q,Ft=f+rt+H*(Q+1),$t=f+(rt+1)+H*(Q+1),Et=f+(rt+1)+H*Q;c.push(Lt,Ft,Et),c.push(Ft,$t,Et),F+=6}o.addGroup(d,F,b),d+=F,f+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Le(i){const t={};for(let e=0;e<i.length;e++){const n=Zi(i[e]);for(const s in n)t[s]=n[s]}return t}function ld(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ih(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const hd={clone:Zi,merge:Le};var ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends zs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ud,this.fragmentShader=fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=ld(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Uh extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new U,sl=new _t,rl=new _t;class ln extends Uh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ds*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z)}getViewSize(t,e){return this.getViewBounds(t,sl,rl),e.subVectors(rl,sl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ms*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Fi=-90,Oi=1;class dd extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(Fi,Oi,t,e);s.layers=this.layers,this.add(s);const r=new ln(Fi,Oi,t,e);r.layers=this.layers,this.add(r);const a=new ln(Fi,Oi,t,e);a.layers=this.layers,this.add(a);const o=new ln(Fi,Oi,t,e);o.layers=this.layers,this.add(o);const c=new ln(Fi,Oi,t,e);c.layers=this.layers,this.add(c);const l=new ln(Fi,Oi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Nh extends Ie{constructor(t=[],e=qi,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class pd extends xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Nh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new is(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:Kn});r.uniforms.tEquirect.value=e;const a=new ve(s,r),o=e.minFilter;return e.minFilter===mi&&(e.minFilter=vn),new dd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class Qt extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const md={type:"move"};class Ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(md)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class ic{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=n}clone(){return new ic(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class gd extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class _d extends Ie{constructor(t=null,e=1,n=1,s,r,a,o,c,l=qe,h=qe,u,f){super(null,a,o,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class al extends dn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ki=new ae,ol=new ae,hr=[],cl=new Mi,xd=new ae,ds=new ve,ps=new Bs;class ur extends ve{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new al(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,xd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ki),cl.copy(t.boundingBox).applyMatrix4(ki),this.boundingBox.union(cl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ki),ps.copy(t.boundingSphere).applyMatrix4(ki),this.boundingSphere.union(ps)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ds.geometry=this.geometry,ds.material=this.material,ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ps.copy(this.boundingSphere),ps.applyMatrix4(n),t.ray.intersectsSphere(ps)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ki),ol.multiplyMatrices(n,ki),ds.matrixWorld=ol,ds.raycast(t,hr);for(let a=0,o=hr.length;a<o;a++){const c=hr[a];c.instanceId=r,c.object=this,e.push(c)}hr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new al(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new _d(new Float32Array(s*this.count),s,this.count,Jo,yn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const wa=new U,vd=new U,yd=new Xt;class ci{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=wa.subVectors(n,e).cross(vd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(wa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||yd.getNormalMatrix(t),s=this.coplanarPoint(wa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const si=new Bs,Md=new _t(.5,.5),fr=new U;class sc{constructor(t=new ci,e=new ci,n=new ci,s=new ci,r=new ci,a=new ci){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],v=r[9],m=r[10],p=r[11],w=r[12],x=r[13],y=r[14],A=r[15];if(s[0].setComponents(l-a,d-h,p-g,A-w).normalize(),s[1].setComponents(l+a,d+h,p+g,A+w).normalize(),s[2].setComponents(l+o,d+u,p+v,A+x).normalize(),s[3].setComponents(l-o,d-u,p-v,A-x).normalize(),n)s[4].setComponents(c,f,m,y).normalize(),s[5].setComponents(l-c,d-f,p-m,A-y).normalize();else if(s[4].setComponents(l-c,d-f,p-m,A-y).normalize(),e===Mn)s[5].setComponents(l+c,d+f,p+m,A+y).normalize();else if(e===Ur)s[5].setComponents(c,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(t){si.center.set(0,0,0);const e=Md.distanceTo(t.center);return si.radius=.7071067811865476+e,si.applyMatrix4(t.matrixWorld),this.intersectsSphere(si)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(fr.x=s.normal.x>0?t.max.x:t.min.x,fr.y=s.normal.y>0?t.max.y:t.min.y,fr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fh extends Ie{constructor(t,e,n=_i,s,r,a,o=qe,c=qe,l,h=Rs,u=1){if(h!==Rs&&h!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ec(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Oh extends Ie{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Fr extends Ue{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new U,h=new _t;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(o,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Vr extends Ue{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const v=[],m=n/2;let p=0;w(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(f,3)),this.setAttribute("uv",new fe(d,2));function w(){const y=new U,A=new U;let T=0;const P=(e-t)/n;for(let R=0;R<=r;R++){const b=[],_=R/r,E=_*(e-t)+t;for(let L=0;L<=s;L++){const I=L/s,B=I*c+o,H=Math.sin(B),V=Math.cos(B);A.x=E*H,A.y=-_*n+m,A.z=E*V,u.push(A.x,A.y,A.z),y.set(H,P,V).normalize(),f.push(y.x,y.y,y.z),d.push(I,1-_),b.push(g++)}v.push(b)}for(let R=0;R<s;R++)for(let b=0;b<r;b++){const _=v[b][R],E=v[b+1][R],L=v[b+1][R+1],I=v[b][R+1];(t>0||b!==0)&&(h.push(_,E,I),T+=3),(e>0||b!==r-1)&&(h.push(E,L,I),T+=3)}l.addGroup(p,T,0),p+=T}function x(y){const A=g,T=new _t,P=new U;let R=0;const b=y===!0?t:e,_=y===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,m*_,0),f.push(0,_,0),d.push(.5,.5),g++;const E=g;for(let L=0;L<=s;L++){const B=L/s*c+o,H=Math.cos(B),V=Math.sin(B);P.x=b*V,P.y=m*_,P.z=b*H,u.push(P.x,P.y,P.z),f.push(0,_,0),T.x=H*.5+.5,T.y=V*.5*_+.5,d.push(T.x,T.y),g++}for(let L=0;L<s;L++){const I=A+L,B=E+L;y===!0?h.push(B,B+1,I):h.push(B+1,B,I),R+=3}l.addGroup(p,R,y===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class rc extends Vr{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new rc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ac extends Ue{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(w){const x=new U,y=new U,A=new U;for(let T=0;T<e.length;T+=3)d(e[T+0],x),d(e[T+1],y),d(e[T+2],A),c(x,y,A,w)}function c(w,x,y,A){const T=A+1,P=[];for(let R=0;R<=T;R++){P[R]=[];const b=w.clone().lerp(y,R/T),_=x.clone().lerp(y,R/T),E=T-R;for(let L=0;L<=E;L++)L===0&&R===T?P[R][L]=b:P[R][L]=b.clone().lerp(_,L/E)}for(let R=0;R<T;R++)for(let b=0;b<2*(T-R)-1;b++){const _=Math.floor(b/2);b%2===0?(f(P[R][_+1]),f(P[R+1][_]),f(P[R][_])):(f(P[R][_+1]),f(P[R+1][_+1]),f(P[R+1][_]))}}function l(w){const x=new U;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(w),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){const w=new U;for(let x=0;x<r.length;x+=3){w.x=r[x+0],w.y=r[x+1],w.z=r[x+2];const y=m(w)/2/Math.PI+.5,A=p(w)/Math.PI+.5;a.push(y,1-A)}g(),u()}function u(){for(let w=0;w<a.length;w+=6){const x=a[w+0],y=a[w+2],A=a[w+4],T=Math.max(x,y,A),P=Math.min(x,y,A);T>.9&&P<.1&&(x<.2&&(a[w+0]+=1),y<.2&&(a[w+2]+=1),A<.2&&(a[w+4]+=1))}}function f(w){r.push(w.x,w.y,w.z)}function d(w,x){const y=w*3;x.x=t[y+0],x.y=t[y+1],x.z=t[y+2]}function g(){const w=new U,x=new U,y=new U,A=new U,T=new _t,P=new _t,R=new _t;for(let b=0,_=0;b<r.length;b+=9,_+=6){w.set(r[b+0],r[b+1],r[b+2]),x.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),T.set(a[_+0],a[_+1]),P.set(a[_+2],a[_+3]),R.set(a[_+4],a[_+5]),A.copy(w).add(x).add(y).divideScalar(3);const E=m(A);v(T,_+0,w,E),v(P,_+2,x,E),v(R,_+4,y,E)}}function v(w,x,y,A){A<0&&w.x===1&&(a[x]=w.x-1),y.x===0&&y.z===0&&(a[x]=A/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ac(t.vertices,t.indices,t.radius,t.details)}}class Tn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new _t:new U);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new U,s=[],r=[],a=[],o=new U,c=new ae;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new U)}r[0]=new U,a[0]=new U;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(qt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(qt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class oc extends Tn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new _t){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class bd extends oc{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function cc(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const dr=new U,Ta=new cc,Aa=new cc,Ca=new cc;class Sd extends Tn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(dr.subVectors(s[0],s[1]).add(s[0]),l=dr);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(dr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=dr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Ta.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,v,m),Aa.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,v,m),Ca.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Ta.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Aa.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Ca.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Ta.calc(c),Aa.calc(c),Ca.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ll(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Ed(i,t){const e=1-i;return e*e*t}function wd(i,t){return 2*(1-i)*i*t}function Td(i,t){return i*i*t}function Ss(i,t,e,n){return Ed(i,t)+wd(i,e)+Td(i,n)}function Ad(i,t){const e=1-i;return e*e*e*t}function Cd(i,t){const e=1-i;return 3*e*e*i*t}function Rd(i,t){return 3*(1-i)*i*i*t}function Pd(i,t){return i*i*i*t}function Es(i,t,e,n,s){return Ad(i,t)+Cd(i,e)+Rd(i,n)+Pd(i,s)}class kh extends Tn{constructor(t=new _t,e=new _t,n=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new _t){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Es(t,s.x,r.x,a.x,o.x),Es(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Dd extends Tn{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Es(t,s.x,r.x,a.x,o.x),Es(t,s.y,r.y,a.y,o.y),Es(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Bh extends Tn{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ld extends Tn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zh extends Tn{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ss(t,s.x,r.x,a.x),Ss(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Id extends Tn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ss(t,s.x,r.x,a.x),Ss(t,s.y,r.y,a.y),Ss(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hh extends Tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(ll(o,c.x,l.x,h.x,u.x),ll(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new _t().fromArray(s))}return this}}var Io=Object.freeze({__proto__:null,ArcCurve:bd,CatmullRomCurve3:Sd,CubicBezierCurve:kh,CubicBezierCurve3:Dd,EllipseCurve:oc,LineCurve:Bh,LineCurve3:Ld,QuadraticBezierCurve:zh,QuadraticBezierCurve3:Id,SplineCurve:Hh});class Ud extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Io[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Io[s.type]().fromJSON(s))}return this}}class hl extends Ud{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Bh(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new zh(this.currentPoint.clone(),new _t(t,e),new _t(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new kh(this.currentPoint.clone(),new _t(t,e),new _t(n,s),new _t(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Hh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const l=new oc(t,e,n,s,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Uo extends hl{constructor(t){super(t),this.uuid=yi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new hl().fromJSON(s))}return this}}function Nd(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Vh(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=zd(i,t,r,e)),i.length>80*e){o=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=e;f<s;f+=e){const d=i[f],g=i[f+1];d<o&&(o=d),g<c&&(c=g),d>h&&(h=d),g>u&&(u=g)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return Is(r,a,e,o,c,l,0),a}function Vh(i,t,e,n,s){let r;if(s===Zd(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=ul(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=ul(a/n|0,i[a],i[a+1],r);return r&&ji(r,r.next)&&(Ns(r),r=r.next),r}function vi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ji(e,e.next)||_e(e.prev,e,e.next)===0)){if(Ns(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Is(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Xd(i,n,s,r);let o=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?Od(i,n,s,r):Fd(i)){t.push(c.i,i.i,l.i),Ns(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=kd(vi(i),t),Is(i,t,e,n,s,r,2)):a===2&&Bd(i,t,e,n,s,r):Is(vi(i),t,e,n,s,r,1);break}}}function Fd(i){const t=i.prev,e=i,n=i.next;if(_e(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=Math.min(s,r,a),u=Math.min(o,c,l),f=Math.max(s,r,a),d=Math.max(o,c,l);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&_s(s,o,r,c,a,l,g.x,g.y)&&_e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Od(i,t,e,n){const s=i.prev,r=i,a=i.next;if(_e(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,f=a.y,d=Math.min(o,c,l),g=Math.min(h,u,f),v=Math.max(o,c,l),m=Math.max(h,u,f),p=No(d,g,t,e,n),w=No(v,m,t,e,n);let x=i.prevZ,y=i.nextZ;for(;x&&x.z>=p&&y&&y.z<=w;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&_s(o,h,c,u,l,f,x.x,x.y)&&_e(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=d&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&_s(o,h,c,u,l,f,y.x,y.y)&&_e(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&_s(o,h,c,u,l,f,x.x,x.y)&&_e(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=w;){if(y.x>=d&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&_s(o,h,c,u,l,f,y.x,y.y)&&_e(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function kd(i,t){let e=i;do{const n=e.prev,s=e.next.next;!ji(n,s)&&Wh(n,e,e.next,s)&&Us(n,s)&&Us(s,n)&&(t.push(n.i,e.i,s.i),Ns(e),Ns(e.next),e=i=s),e=e.next}while(e!==i);return vi(e)}function Bd(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&qd(a,o)){let c=Xh(a,o);a=vi(a,a.next),c=vi(c,c.next),Is(a,t,e,n,s,r,0),Is(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function zd(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=Vh(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push($d(l))}s.sort(Hd);for(let r=0;r<s.length;r++)e=Vd(s[r],e);return e}function Hd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Vd(i,t){const e=Gd(i,t);if(!e)return t;const n=Xh(e,i);return vi(n,n.next),vi(e,e.next)}function Gd(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(ji(i,e))return e;do{if(ji(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,c=a.x,l=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Gh(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);Us(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Wd(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Wd(i,t){return _e(i.prev,i,t.prev)<0&&_e(t.next,i,i.next)<0}function Xd(i,t,e,n){let s=i;do s.z===0&&(s.z=No(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Yd(s)}function Yd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function No(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function $d(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Gh(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function _s(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Gh(i,t,e,n,s,r,a,o)}function qd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Kd(i,t)&&(Us(i,t)&&Us(t,i)&&Jd(i,t)&&(_e(i.prev,i,t.prev)||_e(i,t.prev,t))||ji(i,t)&&_e(i.prev,i,i.next)>0&&_e(t.prev,t,t.next)>0)}function _e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ji(i,t){return i.x===t.x&&i.y===t.y}function Wh(i,t,e,n){const s=mr(_e(i,t,e)),r=mr(_e(i,t,n)),a=mr(_e(e,n,i)),o=mr(_e(e,n,t));return!!(s!==r&&a!==o||s===0&&pr(i,e,t)||r===0&&pr(i,n,t)||a===0&&pr(e,i,n)||o===0&&pr(e,t,n))}function pr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function mr(i){return i>0?1:i<0?-1:0}function Kd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Wh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Us(i,t){return _e(i.prev,i,i.next)<0?_e(i,t,i.next)>=0&&_e(i,i.prev,t)>=0:_e(i,t,i.prev)<0||_e(i,i.next,t)<0}function Jd(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Xh(i,t){const e=Fo(i.i,i.x,i.y),n=Fo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ul(i,t,e,n){const s=Fo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ns(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fo(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zd(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class jd{static triangulate(t,e,n=2){return Nd(t,e,n)}}class Hi{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Hi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];fl(t),dl(n,t);let a=t.length;e.forEach(fl);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,dl(n,e[c]);const o=jd.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function fl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function dl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Or extends Ue{constructor(t=new Uo([new _t(.5,.5),new _t(-.5,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new fe(s,3)),this.setAttribute("uv",new fe(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:Qd;let x,y=!1,A,T,P,R;p&&(x=p.getSpacedPoints(h),y=!0,f=!1,A=p.computeFrenetFrames(h,!1),T=new U,P=new U,R=new U),f||(m=0,d=0,g=0,v=0);const b=o.extractPoints(l);let _=b.shape;const E=b.holes;if(!Hi.isClockWise(_)){_=_.reverse();for(let K=0,et=E.length;K<et;K++){const j=E[K];Hi.isClockWise(j)&&(E[K]=j.reverse())}}function I(K){const j=10000000000000001e-36;let nt=K[0];for(let dt=1;dt<=K.length;dt++){const at=dt%K.length,pt=K[at],Ht=pt.x-nt.x,zt=pt.y-nt.y,C=Ht*Ht+zt*zt,M=Math.max(Math.abs(pt.x),Math.abs(pt.y),Math.abs(nt.x),Math.abs(nt.y)),z=j*M*M;if(C<=z){K.splice(at,1),dt--;continue}nt=pt}}I(_),E.forEach(I);const B=E.length,H=_;for(let K=0;K<B;K++){const et=E[K];_=_.concat(et)}function V(K,et,j){return et||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(et,j)}const G=_.length;function F(K,et,j){let nt,dt,at;const pt=K.x-et.x,Ht=K.y-et.y,zt=j.x-K.x,C=j.y-K.y,M=pt*pt+Ht*Ht,z=pt*C-Ht*zt;if(Math.abs(z)>Number.EPSILON){const $=Math.sqrt(M),st=Math.sqrt(zt*zt+C*C),q=et.x-Ht/$,Dt=et.y+pt/$,ft=j.x-C/st,Ct=j.y+zt/st,Rt=((ft-q)*C-(Ct-Dt)*zt)/(pt*C-Ht*zt);nt=q+pt*Rt-K.x,dt=Dt+Ht*Rt-K.y;const ot=nt*nt+dt*dt;if(ot<=2)return new _t(nt,dt);at=Math.sqrt(ot/2)}else{let $=!1;pt>Number.EPSILON?zt>Number.EPSILON&&($=!0):pt<-Number.EPSILON?zt<-Number.EPSILON&&($=!0):Math.sign(Ht)===Math.sign(C)&&($=!0),$?(nt=-Ht,dt=pt,at=Math.sqrt(M)):(nt=pt,dt=Ht,at=Math.sqrt(M/2))}return new _t(nt/at,dt/at)}const Z=[];for(let K=0,et=H.length,j=et-1,nt=K+1;K<et;K++,j++,nt++)j===et&&(j=0),nt===et&&(nt=0),Z[K]=F(H[K],H[j],H[nt]);const Q=[];let rt,Lt=Z.concat();for(let K=0,et=B;K<et;K++){const j=E[K];rt=[];for(let nt=0,dt=j.length,at=dt-1,pt=nt+1;nt<dt;nt++,at++,pt++)at===dt&&(at=0),pt===dt&&(pt=0),rt[nt]=F(j[nt],j[at],j[pt]);Q.push(rt),Lt=Lt.concat(rt)}let Ft;if(m===0)Ft=Hi.triangulateShape(H,E);else{const K=[],et=[];for(let j=0;j<m;j++){const nt=j/m,dt=d*Math.cos(nt*Math.PI/2),at=g*Math.sin(nt*Math.PI/2)+v;for(let pt=0,Ht=H.length;pt<Ht;pt++){const zt=V(H[pt],Z[pt],at);gt(zt.x,zt.y,-dt),nt===0&&K.push(zt)}for(let pt=0,Ht=B;pt<Ht;pt++){const zt=E[pt];rt=Q[pt];const C=[];for(let M=0,z=zt.length;M<z;M++){const $=V(zt[M],rt[M],at);gt($.x,$.y,-dt),nt===0&&C.push($)}nt===0&&et.push(C)}}Ft=Hi.triangulateShape(K,et)}const $t=Ft.length,Et=g+v;for(let K=0;K<G;K++){const et=f?V(_[K],Lt[K],Et):_[K];y?(P.copy(A.normals[0]).multiplyScalar(et.x),T.copy(A.binormals[0]).multiplyScalar(et.y),R.copy(x[0]).add(P).add(T),gt(R.x,R.y,R.z)):gt(et.x,et.y,0)}for(let K=1;K<=h;K++)for(let et=0;et<G;et++){const j=f?V(_[et],Lt[et],Et):_[et];y?(P.copy(A.normals[K]).multiplyScalar(j.x),T.copy(A.binormals[K]).multiplyScalar(j.y),R.copy(x[K]).add(P).add(T),gt(R.x,R.y,R.z)):gt(j.x,j.y,u/h*K)}for(let K=m-1;K>=0;K--){const et=K/m,j=d*Math.cos(et*Math.PI/2),nt=g*Math.sin(et*Math.PI/2)+v;for(let dt=0,at=H.length;dt<at;dt++){const pt=V(H[dt],Z[dt],nt);gt(pt.x,pt.y,u+j)}for(let dt=0,at=E.length;dt<at;dt++){const pt=E[dt];rt=Q[dt];for(let Ht=0,zt=pt.length;Ht<zt;Ht++){const C=V(pt[Ht],rt[Ht],nt);y?gt(C.x,C.y+x[h-1].y,x[h-1].x+j):gt(C.x,C.y,u+j)}}}Y(),tt();function Y(){const K=s.length/3;if(f){let et=0,j=G*et;for(let nt=0;nt<$t;nt++){const dt=Ft[nt];yt(dt[2]+j,dt[1]+j,dt[0]+j)}et=h+m*2,j=G*et;for(let nt=0;nt<$t;nt++){const dt=Ft[nt];yt(dt[0]+j,dt[1]+j,dt[2]+j)}}else{for(let et=0;et<$t;et++){const j=Ft[et];yt(j[2],j[1],j[0])}for(let et=0;et<$t;et++){const j=Ft[et];yt(j[0]+G*h,j[1]+G*h,j[2]+G*h)}}n.addGroup(K,s.length/3-K,0)}function tt(){const K=s.length/3;let et=0;xt(H,et),et+=H.length;for(let j=0,nt=E.length;j<nt;j++){const dt=E[j];xt(dt,et),et+=dt.length}n.addGroup(K,s.length/3-K,1)}function xt(K,et){let j=K.length;for(;--j>=0;){const nt=j;let dt=j-1;dt<0&&(dt=K.length-1);for(let at=0,pt=h+m*2;at<pt;at++){const Ht=G*at,zt=G*(at+1),C=et+nt+Ht,M=et+dt+Ht,z=et+dt+zt,$=et+nt+zt;Gt(C,M,z,$)}}}function gt(K,et,j){c.push(K),c.push(et),c.push(j)}function yt(K,et,j){jt(K),jt(et),jt(j);const nt=s.length/3,dt=w.generateTopUV(n,s,nt-3,nt-2,nt-1);D(dt[0]),D(dt[1]),D(dt[2])}function Gt(K,et,j,nt){jt(K),jt(et),jt(nt),jt(et),jt(j),jt(nt);const dt=s.length/3,at=w.generateSideWallUV(n,s,dt-6,dt-3,dt-2,dt-1);D(at[0]),D(at[1]),D(at[3]),D(at[1]),D(at[2]),D(at[3])}function jt(K){s.push(c[K*3+0]),s.push(c[K*3+1]),s.push(c[K*3+2])}function D(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return tp(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Io[s.type]().fromJSON(s)),new Or(n,t.options)}}const Qd={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new _t(r,a),new _t(o,c),new _t(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new _t(a,1-c),new _t(l,1-u),new _t(f,1-g),new _t(v,1-p)]:[new _t(o,1-c),new _t(h,1-u),new _t(d,1-g),new _t(m,1-p)]}};function tp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class kr extends ac{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new kr(t.radius,t.detail)}}class Gr extends Ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,f=e/c,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const w=p*f-a;for(let x=0;x<l;x++){const y=x*u-r;g.push(y,-w,0),v.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<o;w++){const x=w+l*p,y=w+l*(p+1),A=w+1+l*(p+1),T=w+1+l*p;d.push(x,y,T),d.push(y,A,T)}this.setIndex(d),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(v,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gr(t.width,t.height,t.widthSegments,t.heightSegments)}}class ws extends Ue{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let u=t;const f=(e-t)/s,d=new U,g=new _t;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const p=r+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let v=0;v<s;v++){const m=v*(n+1);for(let p=0;p<n;p++){const w=p+m,x=w,y=w+n+1,A=w+n+2,T=w+1;o.push(x,y,T),o.push(y,A,T)}}this.setIndex(o),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ws(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class pl extends zs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wh,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ep extends zs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class np extends zs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Yh extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ip extends Yh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ra=new ae,ml=new U,gl=new U;class sp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sc,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ml.setFromMatrixPosition(t.matrixWorld),e.position.copy(ml),gl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gl),e.updateMatrixWorld(),Ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ra)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class lc extends Uh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class rp extends sp{constructor(){super(new lc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ap extends Yh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new rp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class op extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const _l=new ae;class cp{constructor(t,e,n=0,s=1/0){this.ray=new Rh(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new nc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return _l.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_l),this}intersectObject(t,e=!0,n=[]){return Oo(t,this,n,e),n.sort(xl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Oo(t[s],this,n,e);return n.sort(xl),n}}function xl(i,t){return i.distance-t.distance}function Oo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Oo(r[a],t,e,!0)}}function vl(i,t,e,n){const s=lp(n);switch(e){case bh:return i*t;case Jo:return i*t/s.components*s.byteLength;case Zo:return i*t/s.components*s.byteLength;case Eh:return i*t*2/s.components*s.byteLength;case jo:return i*t*2/s.components*s.byteLength;case Sh:return i*t*3/s.components*s.byteLength;case un:return i*t*4/s.components*s.byteLength;case Qo:return i*t*4/s.components*s.byteLength;case Sr:case Er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wr:case Tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ro:case oo:return Math.max(i,16)*Math.max(t,8)/4;case so:case ao:return Math.max(i,8)*Math.max(t,8)/2;case co:case lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case po:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case mo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case go:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case _o:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case xo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case vo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case yo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case bo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case So:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Eo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case wo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case To:case Ao:case Co:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ro:case Po:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Do:case Lo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function lp(i){switch(i){case bn:case xh:return{byteLength:1,components:1};case As:case vh:case ks:return{byteLength:2,components:1};case qo:case Ko:return{byteLength:2,components:4};case _i:case $o:case yn:return{byteLength:4,components:1};case yh:case Mh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yo);function $h(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function hp(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const v=u[d];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var up=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fp=`#ifdef USE_ALPHAHASH
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
#endif`,dp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_p=`#ifdef USE_AOMAP
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
#endif`,xp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vp=`#ifdef USE_BATCHING
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
#endif`,yp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ep=`#ifdef USE_IRIDESCENCE
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
#endif`,wp=`#ifdef USE_BUMPMAP
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
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Up=`#define PI 3.141592653589793
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
} // validated`,Np=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fp=`vec3 transformedNormal = objectNormal;
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
#endif`,Op=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,Yp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$p=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jp=`#ifdef USE_GRADIENTMAP
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
}`,Qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nm=`uniform bool receiveShadow;
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
#endif`,im=`#ifdef USE_ENVMAP
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
#endif`,sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,am=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cm=`PhysicalMaterial material;
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
#endif`,lm=`struct PhysicalMaterial {
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
}`,hm=`
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
#endif`,um=`#if defined( RE_IndirectDiffuse )
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
#endif`,fm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_m=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ym=`#if defined( USE_POINTS_UV )
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
#endif`,Mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Em=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tm=`#ifdef USE_MORPHTARGETS
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
#endif`,Am=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Im=`#ifdef USE_NORMALMAP
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
#endif`,Um=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Om=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,km=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Km=`float getShadowMask() {
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
}`,Jm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zm=`#ifdef USE_SKINNING
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
#endif`,jm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qm=`#ifdef USE_SKINNING
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
#endif`,t0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,s0=`#ifdef USE_TRANSMISSION
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
#endif`,r0=`#ifdef USE_TRANSMISSION
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
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const h0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u0=`uniform sampler2D t2D;
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
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g0=`#include <common>
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
}`,_0=`#if DEPTH_PACKING == 3200
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
}`,x0=`#define DISTANCE
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
}`,v0=`#define DISTANCE
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
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`uniform float scale;
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
}`,S0=`uniform vec3 diffuse;
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
}`,E0=`#include <common>
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
}`,w0=`uniform vec3 diffuse;
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
}`,T0=`#define LAMBERT
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
}`,A0=`#define LAMBERT
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
}`,C0=`#define MATCAP
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
}`,R0=`#define MATCAP
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
}`,P0=`#define NORMAL
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
}`,D0=`#define NORMAL
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
}`,L0=`#define PHONG
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
}`,I0=`#define PHONG
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
}`,U0=`#define STANDARD
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
}`,N0=`#define STANDARD
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
}`,F0=`#define TOON
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
}`,O0=`#define TOON
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
}`,k0=`uniform float size;
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
}`,B0=`uniform vec3 diffuse;
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
}`,z0=`#include <common>
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
}`,H0=`uniform vec3 color;
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
}`,V0=`uniform float rotation;
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
}`,G0=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:up,alphahash_pars_fragment:fp,alphamap_fragment:dp,alphamap_pars_fragment:pp,alphatest_fragment:mp,alphatest_pars_fragment:gp,aomap_fragment:_p,aomap_pars_fragment:xp,batching_pars_vertex:vp,batching_vertex:yp,begin_vertex:Mp,beginnormal_vertex:bp,bsdfs:Sp,iridescence_fragment:Ep,bumpmap_pars_fragment:wp,clipping_planes_fragment:Tp,clipping_planes_pars_fragment:Ap,clipping_planes_pars_vertex:Cp,clipping_planes_vertex:Rp,color_fragment:Pp,color_pars_fragment:Dp,color_pars_vertex:Lp,color_vertex:Ip,common:Up,cube_uv_reflection_fragment:Np,defaultnormal_vertex:Fp,displacementmap_pars_vertex:Op,displacementmap_vertex:kp,emissivemap_fragment:Bp,emissivemap_pars_fragment:zp,colorspace_fragment:Hp,colorspace_pars_fragment:Vp,envmap_fragment:Gp,envmap_common_pars_fragment:Wp,envmap_pars_fragment:Xp,envmap_pars_vertex:Yp,envmap_physical_pars_fragment:im,envmap_vertex:$p,fog_vertex:qp,fog_pars_vertex:Kp,fog_fragment:Jp,fog_pars_fragment:Zp,gradientmap_pars_fragment:jp,lightmap_pars_fragment:Qp,lights_lambert_fragment:tm,lights_lambert_pars_fragment:em,lights_pars_begin:nm,lights_toon_fragment:sm,lights_toon_pars_fragment:rm,lights_phong_fragment:am,lights_phong_pars_fragment:om,lights_physical_fragment:cm,lights_physical_pars_fragment:lm,lights_fragment_begin:hm,lights_fragment_maps:um,lights_fragment_end:fm,logdepthbuf_fragment:dm,logdepthbuf_pars_fragment:pm,logdepthbuf_pars_vertex:mm,logdepthbuf_vertex:gm,map_fragment:_m,map_pars_fragment:xm,map_particle_fragment:vm,map_particle_pars_fragment:ym,metalnessmap_fragment:Mm,metalnessmap_pars_fragment:bm,morphinstance_vertex:Sm,morphcolor_vertex:Em,morphnormal_vertex:wm,morphtarget_pars_vertex:Tm,morphtarget_vertex:Am,normal_fragment_begin:Cm,normal_fragment_maps:Rm,normal_pars_fragment:Pm,normal_pars_vertex:Dm,normal_vertex:Lm,normalmap_pars_fragment:Im,clearcoat_normal_fragment_begin:Um,clearcoat_normal_fragment_maps:Nm,clearcoat_pars_fragment:Fm,iridescence_pars_fragment:Om,opaque_fragment:km,packing:Bm,premultiplied_alpha_fragment:zm,project_vertex:Hm,dithering_fragment:Vm,dithering_pars_fragment:Gm,roughnessmap_fragment:Wm,roughnessmap_pars_fragment:Xm,shadowmap_pars_fragment:Ym,shadowmap_pars_vertex:$m,shadowmap_vertex:qm,shadowmask_pars_fragment:Km,skinbase_vertex:Jm,skinning_pars_vertex:Zm,skinning_vertex:jm,skinnormal_vertex:Qm,specularmap_fragment:t0,specularmap_pars_fragment:e0,tonemapping_fragment:n0,tonemapping_pars_fragment:i0,transmission_fragment:s0,transmission_pars_fragment:r0,uv_pars_fragment:a0,uv_pars_vertex:o0,uv_vertex:c0,worldpos_vertex:l0,background_vert:h0,background_frag:u0,backgroundCube_vert:f0,backgroundCube_frag:d0,cube_vert:p0,cube_frag:m0,depth_vert:g0,depth_frag:_0,distanceRGBA_vert:x0,distanceRGBA_frag:v0,equirect_vert:y0,equirect_frag:M0,linedashed_vert:b0,linedashed_frag:S0,meshbasic_vert:E0,meshbasic_frag:w0,meshlambert_vert:T0,meshlambert_frag:A0,meshmatcap_vert:C0,meshmatcap_frag:R0,meshnormal_vert:P0,meshnormal_frag:D0,meshphong_vert:L0,meshphong_frag:I0,meshphysical_vert:U0,meshphysical_frag:N0,meshtoon_vert:F0,meshtoon_frag:O0,points_vert:k0,points_frag:B0,shadow_vert:z0,shadow_frag:H0,sprite_vert:V0,sprite_frag:G0},vt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},_n={basic:{uniforms:Le([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Le([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Le([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Le([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Le([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Le([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Le([vt.points,vt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Le([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Le([vt.common,vt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Le([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Le([vt.sprite,vt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Le([vt.common,vt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Le([vt.lights,vt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};_n.physical={uniforms:Le([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const gr={r:0,b:0,g:0},ri=new Sn,W0=new ae;function X0(i,t,e,n,s,r,a){const o=new Kt(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function v(x){let y=!1;const A=g(x);A===null?p(o,c):A&&A.isColor&&(p(A,1),y=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,y){const A=g(y);A&&(A.isCubeTexture||A.mapping===Hr)?(h===void 0&&(h=new ve(new is(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:Zi(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ri.copy(y.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(W0.makeRotationFromEuler(ri)),h.material.toneMapped=ee.getTransfer(A.colorSpace)!==ce,(u!==A||f!==A.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,d=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new ve(new Gr(2,2),new Zn({name:"BackgroundMaterial",uniforms:Zi(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ee.getTransfer(A.colorSpace)!==ce,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=A,f=A.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,y){x.getRGB(gr,Ih(i)),n.buffers.color.setClear(gr.r,gr.g,gr.b,y,a)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(o,c)},render:v,addToRenderList:m,dispose:w}}function Y0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(_,E,L,I,B){let H=!1;const V=u(I,L,E);r!==V&&(r=V,l(r.object)),H=d(_,I,L,B),H&&g(_,I,L,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,y(_,E,L,I),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,E,L){const I=L.wireframe===!0;let B=n[_.id];B===void 0&&(B={},n[_.id]=B);let H=B[E.id];H===void 0&&(H={},B[E.id]=H);let V=H[I];return V===void 0&&(V=f(c()),H[I]=V),V}function f(_){const E=[],L=[],I=[];for(let B=0;B<e;B++)E[B]=0,L[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:L,attributeDivisors:I,object:_,attributes:{},index:null}}function d(_,E,L,I){const B=r.attributes,H=E.attributes;let V=0;const G=L.getAttributes();for(const F in G)if(G[F].location>=0){const Q=B[F];let rt=H[F];if(rt===void 0&&(F==="instanceMatrix"&&_.instanceMatrix&&(rt=_.instanceMatrix),F==="instanceColor"&&_.instanceColor&&(rt=_.instanceColor)),Q===void 0||Q.attribute!==rt||rt&&Q.data!==rt.data)return!0;V++}return r.attributesNum!==V||r.index!==I}function g(_,E,L,I){const B={},H=E.attributes;let V=0;const G=L.getAttributes();for(const F in G)if(G[F].location>=0){let Q=H[F];Q===void 0&&(F==="instanceMatrix"&&_.instanceMatrix&&(Q=_.instanceMatrix),F==="instanceColor"&&_.instanceColor&&(Q=_.instanceColor));const rt={};rt.attribute=Q,Q&&Q.data&&(rt.data=Q.data),B[F]=rt,V++}r.attributes=B,r.attributesNum=V,r.index=I}function v(){const _=r.newAttributes;for(let E=0,L=_.length;E<L;E++)_[E]=0}function m(_){p(_,0)}function p(_,E){const L=r.newAttributes,I=r.enabledAttributes,B=r.attributeDivisors;L[_]=1,I[_]===0&&(i.enableVertexAttribArray(_),I[_]=1),B[_]!==E&&(i.vertexAttribDivisor(_,E),B[_]=E)}function w(){const _=r.newAttributes,E=r.enabledAttributes;for(let L=0,I=E.length;L<I;L++)E[L]!==_[L]&&(i.disableVertexAttribArray(L),E[L]=0)}function x(_,E,L,I,B,H,V){V===!0?i.vertexAttribIPointer(_,E,L,B,H):i.vertexAttribPointer(_,E,L,I,B,H)}function y(_,E,L,I){v();const B=I.attributes,H=L.getAttributes(),V=E.defaultAttributeValues;for(const G in H){const F=H[G];if(F.location>=0){let Z=B[G];if(Z===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(Z=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(Z=_.instanceColor)),Z!==void 0){const Q=Z.normalized,rt=Z.itemSize,Lt=t.get(Z);if(Lt===void 0)continue;const Ft=Lt.buffer,$t=Lt.type,Et=Lt.bytesPerElement,Y=$t===i.INT||$t===i.UNSIGNED_INT||Z.gpuType===$o;if(Z.isInterleavedBufferAttribute){const tt=Z.data,xt=tt.stride,gt=Z.offset;if(tt.isInstancedInterleavedBuffer){for(let yt=0;yt<F.locationSize;yt++)p(F.location+yt,tt.meshPerAttribute);_.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let yt=0;yt<F.locationSize;yt++)m(F.location+yt);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let yt=0;yt<F.locationSize;yt++)x(F.location+yt,rt/F.locationSize,$t,Q,xt*Et,(gt+rt/F.locationSize*yt)*Et,Y)}else{if(Z.isInstancedBufferAttribute){for(let tt=0;tt<F.locationSize;tt++)p(F.location+tt,Z.meshPerAttribute);_.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let tt=0;tt<F.locationSize;tt++)m(F.location+tt);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let tt=0;tt<F.locationSize;tt++)x(F.location+tt,rt/F.locationSize,$t,Q,rt*Et,rt/F.locationSize*tt*Et,Y)}}else if(V!==void 0){const Q=V[G];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(F.location,Q);break;case 3:i.vertexAttrib3fv(F.location,Q);break;case 4:i.vertexAttrib4fv(F.location,Q);break;default:i.vertexAttrib1fv(F.location,Q)}}}}w()}function A(){R();for(const _ in n){const E=n[_];for(const L in E){const I=E[L];for(const B in I)h(I[B].object),delete I[B];delete E[L]}delete n[_]}}function T(_){if(n[_.id]===void 0)return;const E=n[_.id];for(const L in E){const I=E[L];for(const B in I)h(I[B].object),delete I[B];delete E[L]}delete n[_.id]}function P(_){for(const E in n){const L=n[E];if(L[_.id]===void 0)continue;const I=L[_.id];for(const B in I)h(I[B].object),delete I[B];delete L[_.id]}}function R(){b(),a=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function $0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function q0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==un&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const R=P===ks&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==bn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==yn&&!R)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:A,maxSamples:T}}function K0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ci,o=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const w=r?0:n,x=w*4;let y=p.clippingState||null;c.value=y,y=h(g,f,x,d);for(let A=0;A!==x;++A)y[A]=e[A];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=d+v*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=d;x!==v;++x,y+=4)a.copy(u[x]).applyMatrix4(w,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function J0(i){let t=new WeakMap;function e(a,o){return o===to?a.mapping=qi:o===eo&&(a.mapping=Ki),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===to||o===eo)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new pd(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Vi=4,yl=[.125,.215,.35,.446,.526,.582],fi=20,Pa=new lc,Ml=new Kt;let Da=null,La=0,Ia=0,Ua=!1;const li=(1+Math.sqrt(5))/2,Bi=1/li,bl=[new U(-li,Bi,0),new U(li,Bi,0),new U(-Bi,0,li),new U(Bi,0,li),new U(0,li,-Bi),new U(0,li,Bi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Z0=new U;class Sl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Z0}=r;Da=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Da,La,Ia),this._renderer.xr.enabled=Ua,t.scissorTest=!1,_r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===Ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Da=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:ks,format:un,colorSpace:Ji,depthBuffer:!1},s=El(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=El(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=j0(r)),this._blurMaterial=Q0(r,t,e)}return s}_compileMaterial(t){const e=new ve(this._lodPlanes[0],t);this._renderer.compile(e,Pa)}_sceneToCubeUV(t,e,n,s,r){const c=new ln(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Ml),u.toneMapping=Jn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const v=new ui({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),m=new ve(new is,v);let p=!1;const w=t.background;w?w.isColor&&(v.color.copy(w),t.background=null,p=!0):(v.color.copy(Ml),p=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[x],r.y,r.z)):y===1?(c.up.set(0,0,l[x]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[x],r.z)):(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[x]));const A=this._cubeSize;_r(s,y*A,x>2?A:0,A,A),u.setRenderTarget(s),p&&u.render(m,c),u.render(t,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=w}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===qi||t.mapping===Ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ve(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;_r(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Pa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=bl[(s-r-1)%bl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ve(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*fi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):fi;m>fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fi}`);const p=[];let w=0;for(let P=0;P<fi;++P){const R=P/v,b=Math.exp(-R*R/2);p.push(b),P===0?w+=b:P<m&&(w+=2*b)}for(let P=0;P<p.length;P++)p[P]=p[P]/w;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const y=this._sizeLods[s],A=3*y*(s>x-Vi?s-x+Vi:0),T=4*(this._cubeSize-y);_r(e,A,T,3*y,2*y),c.setRenderTarget(e),c.render(u,Pa)}}function j0(i){const t=[],e=[],n=[];let s=i;const r=i-Vi+1+yl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Vi?c=yl[a-i+Vi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,p=1,w=new Float32Array(v*g*d),x=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let T=0;T<d;T++){const P=T%3*2/3-1,R=T>2?0:-1,b=[P,R,0,P+2/3,R,0,P+2/3,R+1,0,P,R,0,P+2/3,R+1,0,P,R+1,0];w.set(b,v*g*T),x.set(f,m*g*T);const _=[T,T,T,T,T,T];y.set(_,p*g*T)}const A=new Ue;A.setAttribute("position",new dn(w,v)),A.setAttribute("uv",new dn(x,m)),A.setAttribute("faceIndex",new dn(y,p)),t.push(A),s>Vi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function El(i,t,e){const n=new xi(i,t,e);return n.texture.mapping=Hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _r(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Q0(i,t,e){const n=new Float32Array(fi),s=new U(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hc(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function wl(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Tl(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function hc(){return`

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
	`}function tg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===to||c===eo,h=c===qi||c===Ki;if(l||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Sl(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Sl(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function eg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ls("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ng(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)t.update(f[d],i.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,g=u.attributes.position;let v=0;if(d!==null){const w=d.array;v=d.version;for(let x=0,y=w.length;x<y;x+=3){const A=w[x+0],T=w[x+1],P=w[x+2];f.push(A,T,T,P,P,A)}}else if(g!==void 0){const w=g.array;v=g.version;for(let x=0,y=w.length/3-1;x<y;x+=3){const A=x+0,T=x+1,P=x+2;f.push(A,T,T,P,P,A)}}else return;const m=new(Ah(f)?Lh:Dh)(f,1);m.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function ig(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*a,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,g);let p=0;for(let w=0;w<g;w++)p+=d[w]*v[w];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function sg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function rg(i,t,e){const n=new WeakMap,s=new pe;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let _=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var d=_;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let A=o.attributes.position.count*y,T=1;A>t.maxTextureSize&&(T=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const P=new Float32Array(A*T*4*u),R=new Ch(P,A,T,u);R.type=yn,R.needsUpdate=!0;const b=y*4;for(let E=0;E<u;E++){const L=p[E],I=w[E],B=x[E],H=A*T*4*E;for(let V=0;V<L.count;V++){const G=V*b;g===!0&&(s.fromBufferAttribute(L,V),P[H+G+0]=s.x,P[H+G+1]=s.y,P[H+G+2]=s.z,P[H+G+3]=0),v===!0&&(s.fromBufferAttribute(I,V),P[H+G+4]=s.x,P[H+G+5]=s.y,P[H+G+6]=s.z,P[H+G+7]=0),m===!0&&(s.fromBufferAttribute(B,V),P[H+G+8]=s.x,P[H+G+9]=s.y,P[H+G+10]=s.z,P[H+G+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new _t(A,T)},n.set(o,f),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function ag(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}const qh=new Ie,Al=new Fh(1,1),Kh=new Ch,Jh=new Zf,Zh=new Nh,Cl=[],Rl=[],Pl=new Float32Array(16),Dl=new Float32Array(9),Ll=new Float32Array(4);function ss(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Cl[s];if(r===void 0&&(r=new Float32Array(s),Cl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Se(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Wr(i,t){let e=Rl[t];e===void 0&&(e=new Int32Array(t),Rl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function og(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),Se(e,t)}}function lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),Se(e,t)}}function hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),Se(e,t)}}function ug(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(be(e,n))return;Ll.set(n),i.uniformMatrix2fv(this.addr,!1,Ll),Se(e,n)}}function fg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(be(e,n))return;Dl.set(n),i.uniformMatrix3fv(this.addr,!1,Dl),Se(e,n)}}function dg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(be(e,n))return;Pl.set(n),i.uniformMatrix4fv(this.addr,!1,Pl),Se(e,n)}}function pg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),Se(e,t)}}function gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),Se(e,t)}}function _g(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),Se(e,t)}}function xg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),Se(e,t)}}function yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),Se(e,t)}}function Mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),Se(e,t)}}function bg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Al.compareFunction=Th,r=Al):r=qh,e.setTexture2D(t||r,s)}function Sg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Jh,s)}function Eg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Zh,s)}function wg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Kh,s)}function Tg(i){switch(i){case 5126:return og;case 35664:return cg;case 35665:return lg;case 35666:return hg;case 35674:return ug;case 35675:return fg;case 35676:return dg;case 5124:case 35670:return pg;case 35667:case 35671:return mg;case 35668:case 35672:return gg;case 35669:case 35673:return _g;case 5125:return xg;case 36294:return vg;case 36295:return yg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return Sg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return wg}}function Ag(i,t){i.uniform1fv(this.addr,t)}function Cg(i,t){const e=ss(t,this.size,2);i.uniform2fv(this.addr,e)}function Rg(i,t){const e=ss(t,this.size,3);i.uniform3fv(this.addr,e)}function Pg(i,t){const e=ss(t,this.size,4);i.uniform4fv(this.addr,e)}function Dg(i,t){const e=ss(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Lg(i,t){const e=ss(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ig(i,t){const e=ss(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ug(i,t){i.uniform1iv(this.addr,t)}function Ng(i,t){i.uniform2iv(this.addr,t)}function Fg(i,t){i.uniform3iv(this.addr,t)}function Og(i,t){i.uniform4iv(this.addr,t)}function kg(i,t){i.uniform1uiv(this.addr,t)}function Bg(i,t){i.uniform2uiv(this.addr,t)}function zg(i,t){i.uniform3uiv(this.addr,t)}function Hg(i,t){i.uniform4uiv(this.addr,t)}function Vg(i,t,e){const n=this.cache,s=t.length,r=Wr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||qh,r[a])}function Gg(i,t,e){const n=this.cache,s=t.length,r=Wr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Jh,r[a])}function Wg(i,t,e){const n=this.cache,s=t.length,r=Wr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Zh,r[a])}function Xg(i,t,e){const n=this.cache,s=t.length,r=Wr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Kh,r[a])}function Yg(i){switch(i){case 5126:return Ag;case 35664:return Cg;case 35665:return Rg;case 35666:return Pg;case 35674:return Dg;case 35675:return Lg;case 35676:return Ig;case 5124:case 35670:return Ug;case 35667:case 35671:return Ng;case 35668:case 35672:return Fg;case 35669:case 35673:return Og;case 5125:return kg;case 36294:return Bg;case 36295:return zg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Vg;case 35679:case 36299:case 36307:return Gg;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return Xg}}class $g{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Tg(e.type)}}class qg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yg(e.type)}}class Kg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Na=/(\w+)(\])?(\[|\.)?/g;function Il(i,t){i.seq.push(t),i.map[t.id]=t}function Jg(i,t,e){const n=i.name,s=n.length;for(Na.lastIndex=0;;){const r=Na.exec(n),a=Na.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Il(e,l===void 0?new $g(o,i,t):new qg(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Kg(o),Il(e,u)),e=u}}}class Ar{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Jg(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Ul(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Zg=37297;let jg=0;function Qg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Nl=new Xt;function t_(i){ee._getMatrix(Nl,ee.workingColorSpace,i);const t=`mat3( ${Nl.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case Ir:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Fl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Qg(i.getShaderSource(t),o)}else return r}function e_(i,t){const e=t_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function n_(i,t){let e;switch(t){case uf:e="Linear";break;case ff:e="Reinhard";break;case df:e="Cineon";break;case gh:e="ACESFilmic";break;case mf:e="AgX";break;case gf:e="Neutral";break;case pf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const xr=new U;function i_(){ee.getLuminanceCoefficients(xr);const i=xr.x.toFixed(4),t=xr.y.toFixed(4),e=xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xs).join(`
`)}function r_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function a_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function xs(i){return i!==""}function Ol(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const o_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ko(i){return i.replace(o_,l_)}const c_=new Map;function l_(i,t){let e=Yt[t];if(e===void 0){const n=c_.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ko(e)}const h_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bl(i){return i.replace(h_,u_)}function u_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function f_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===dh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ph?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===In&&(t="SHADOWMAP_TYPE_VSM"),t}function d_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qi:case Ki:t="ENVMAP_TYPE_CUBE";break;case Hr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function p_(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ki&&(t="ENVMAP_MODE_REFRACTION"),t}function m_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case mh:t="ENVMAP_BLENDING_MULTIPLY";break;case lf:t="ENVMAP_BLENDING_MIX";break;case hf:t="ENVMAP_BLENDING_ADD";break}return t}function g_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function __(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=f_(e),l=d_(e),h=p_(e),u=m_(e),f=g_(e),d=s_(e),g=r_(r),v=s.createProgram();let m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xs).join(`
`),p.length>0&&(p+=`
`)):(m=[zl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),p=[zl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Jn?n_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,e_("linearToOutputTexel",e.outputColorSpace),i_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xs).join(`
`)),a=ko(a),a=Ol(a,e),a=kl(a,e),o=ko(o),o=Ol(o,e),o=kl(o,e),a=Bl(a),o=Bl(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=w+m+a,y=w+p+o,A=Ul(s,s.VERTEX_SHADER,x),T=Ul(s,s.FRAGMENT_SHADER,y);s.attachShader(v,A),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(E){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(v)||"",I=s.getShaderInfoLog(A)||"",B=s.getShaderInfoLog(T)||"",H=L.trim(),V=I.trim(),G=B.trim();let F=!0,Z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,A,T);else{const Q=Fl(s,A,"vertex"),rt=Fl(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+H+`
`+Q+`
`+rt)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(V===""||G==="")&&(Z=!1);Z&&(E.diagnostics={runnable:F,programLog:H,vertexShader:{log:V,prefix:m},fragmentShader:{log:G,prefix:p}})}s.deleteShader(A),s.deleteShader(T),R=new Ar(s,v),b=a_(s,v)}let R;this.getUniforms=function(){return R===void 0&&P(this),R};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,Zg)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=T,this}let x_=0;class v_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new y_(t),e.set(t,n)),n}}class y_{constructor(t){this.id=x_++,this.code=t,this.usedTimes=0}}function M_(i,t,e,n,s,r,a){const o=new nc,c=new v_,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,_,E,L,I){const B=L.fog,H=I.geometry,V=b.isMeshStandardMaterial?L.environment:null,G=(b.isMeshStandardMaterial?e:t).get(b.envMap||V),F=G&&G.mapping===Hr?G.image.height:null,Z=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const Q=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,rt=Q!==void 0?Q.length:0;let Lt=0;H.morphAttributes.position!==void 0&&(Lt=1),H.morphAttributes.normal!==void 0&&(Lt=2),H.morphAttributes.color!==void 0&&(Lt=3);let Ft,$t,Et,Y;if(Z){const ie=_n[Z];Ft=ie.vertexShader,$t=ie.fragmentShader}else Ft=b.vertexShader,$t=b.fragmentShader,c.update(b),Et=c.getVertexShaderID(b),Y=c.getFragmentShaderID(b);const tt=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),gt=I.isInstancedMesh===!0,yt=I.isBatchedMesh===!0,Gt=!!b.map,jt=!!b.matcap,D=!!G,K=!!b.aoMap,et=!!b.lightMap,j=!!b.bumpMap,nt=!!b.normalMap,dt=!!b.displacementMap,at=!!b.emissiveMap,pt=!!b.metalnessMap,Ht=!!b.roughnessMap,zt=b.anisotropy>0,C=b.clearcoat>0,M=b.dispersion>0,z=b.iridescence>0,$=b.sheen>0,st=b.transmission>0,q=zt&&!!b.anisotropyMap,Dt=C&&!!b.clearcoatMap,ft=C&&!!b.clearcoatNormalMap,Ct=C&&!!b.clearcoatRoughnessMap,Rt=z&&!!b.iridescenceMap,ot=z&&!!b.iridescenceThicknessMap,St=$&&!!b.sheenColorMap,kt=$&&!!b.sheenRoughnessMap,It=!!b.specularMap,Mt=!!b.specularColorMap,Wt=!!b.specularIntensityMap,N=st&&!!b.transmissionMap,ht=st&&!!b.thicknessMap,mt=!!b.gradientMap,Tt=!!b.alphaMap,ct=b.alphaTest>0,it=!!b.alphaHash,Pt=!!b.extensions;let Vt=Jn;b.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Vt=i.toneMapping);const he={shaderID:Z,shaderType:b.type,shaderName:b.name,vertexShader:Ft,fragmentShader:$t,defines:b.defines,customVertexShaderID:Et,customFragmentShaderID:Y,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:yt,batchingColor:yt&&I._colorsTexture!==null,instancing:gt,instancingColor:gt&&I.instanceColor!==null,instancingMorph:gt&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Ji,alphaToCoverage:!!b.alphaToCoverage,map:Gt,matcap:jt,envMap:D,envMapMode:D&&G.mapping,envMapCubeUVHeight:F,aoMap:K,lightMap:et,bumpMap:j,normalMap:nt,displacementMap:f&&dt,emissiveMap:at,normalMapObjectSpace:nt&&b.normalMapType===yf,normalMapTangentSpace:nt&&b.normalMapType===wh,metalnessMap:pt,roughnessMap:Ht,anisotropy:zt,anisotropyMap:q,clearcoat:C,clearcoatMap:Dt,clearcoatNormalMap:ft,clearcoatRoughnessMap:Ct,dispersion:M,iridescence:z,iridescenceMap:Rt,iridescenceThicknessMap:ot,sheen:$,sheenColorMap:St,sheenRoughnessMap:kt,specularMap:It,specularColorMap:Mt,specularIntensityMap:Wt,transmission:st,transmissionMap:N,thicknessMap:ht,gradientMap:mt,opaque:b.transparent===!1&&b.blending===Xi&&b.alphaToCoverage===!1,alphaMap:Tt,alphaTest:ct,alphaHash:it,combine:b.combine,mapUv:Gt&&v(b.map.channel),aoMapUv:K&&v(b.aoMap.channel),lightMapUv:et&&v(b.lightMap.channel),bumpMapUv:j&&v(b.bumpMap.channel),normalMapUv:nt&&v(b.normalMap.channel),displacementMapUv:dt&&v(b.displacementMap.channel),emissiveMapUv:at&&v(b.emissiveMap.channel),metalnessMapUv:pt&&v(b.metalnessMap.channel),roughnessMapUv:Ht&&v(b.roughnessMap.channel),anisotropyMapUv:q&&v(b.anisotropyMap.channel),clearcoatMapUv:Dt&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ft&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:St&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:kt&&v(b.sheenRoughnessMap.channel),specularMapUv:It&&v(b.specularMap.channel),specularColorMapUv:Mt&&v(b.specularColorMap.channel),specularIntensityMapUv:Wt&&v(b.specularIntensityMap.channel),transmissionMapUv:N&&v(b.transmissionMap.channel),thicknessMapUv:ht&&v(b.thicknessMap.channel),alphaMapUv:Tt&&v(b.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(nt||zt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!H.attributes.uv&&(Gt||Tt),fog:!!B,useFog:b.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xt,skinning:I.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:Lt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vt,decodeVideoTexture:Gt&&b.map.isVideoTexture===!0&&ee.getTransfer(b.map.colorSpace)===ce,decodeVideoTextureEmissive:at&&b.emissiveMap.isVideoTexture===!0&&ee.getTransfer(b.emissiveMap.colorSpace)===ce,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===xn,flipSided:b.side===Be,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Pt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&b.extensions.multiDraw===!0||yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return he.vertexUv1s=l.has(1),he.vertexUv2s=l.has(2),he.vertexUv3s=l.has(3),l.clear(),he}function p(b){const _=[];if(b.shaderID?_.push(b.shaderID):(_.push(b.customVertexShaderID),_.push(b.customFragmentShaderID)),b.defines!==void 0)for(const E in b.defines)_.push(E),_.push(b.defines[E]);return b.isRawShaderMaterial===!1&&(w(_,b),x(_,b),_.push(i.outputColorSpace)),_.push(b.customProgramCacheKey),_.join()}function w(b,_){b.push(_.precision),b.push(_.outputColorSpace),b.push(_.envMapMode),b.push(_.envMapCubeUVHeight),b.push(_.mapUv),b.push(_.alphaMapUv),b.push(_.lightMapUv),b.push(_.aoMapUv),b.push(_.bumpMapUv),b.push(_.normalMapUv),b.push(_.displacementMapUv),b.push(_.emissiveMapUv),b.push(_.metalnessMapUv),b.push(_.roughnessMapUv),b.push(_.anisotropyMapUv),b.push(_.clearcoatMapUv),b.push(_.clearcoatNormalMapUv),b.push(_.clearcoatRoughnessMapUv),b.push(_.iridescenceMapUv),b.push(_.iridescenceThicknessMapUv),b.push(_.sheenColorMapUv),b.push(_.sheenRoughnessMapUv),b.push(_.specularMapUv),b.push(_.specularColorMapUv),b.push(_.specularIntensityMapUv),b.push(_.transmissionMapUv),b.push(_.thicknessMapUv),b.push(_.combine),b.push(_.fogExp2),b.push(_.sizeAttenuation),b.push(_.morphTargetsCount),b.push(_.morphAttributeCount),b.push(_.numDirLights),b.push(_.numPointLights),b.push(_.numSpotLights),b.push(_.numSpotLightMaps),b.push(_.numHemiLights),b.push(_.numRectAreaLights),b.push(_.numDirLightShadows),b.push(_.numPointLightShadows),b.push(_.numSpotLightShadows),b.push(_.numSpotLightShadowsWithMaps),b.push(_.numLightProbes),b.push(_.shadowMapType),b.push(_.toneMapping),b.push(_.numClippingPlanes),b.push(_.numClipIntersection),b.push(_.depthPacking)}function x(b,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),_.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),b.push(o.mask)}function y(b){const _=g[b.type];let E;if(_){const L=_n[_];E=hd.clone(L.uniforms)}else E=b.uniforms;return E}function A(b,_){let E;for(let L=0,I=h.length;L<I;L++){const B=h[L];if(B.cacheKey===_){E=B,++E.usedTimes;break}}return E===void 0&&(E=new __(i,_,b,r),h.push(E)),E}function T(b){if(--b.usedTimes===0){const _=h.indexOf(b);h[_]=h[h.length-1],h.pop(),b.destroy()}}function P(b){c.remove(b)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:A,releaseProgram:T,releaseShaderCache:P,programs:h,dispose:R}}function b_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function S_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Hl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Vl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,d,g,v,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function o(u,f,d,g,v,m){const p=a(u,f,d,g,v,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,g,v,m){const p=a(u,f,d,g,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||S_),n.length>1&&n.sort(f||Hl),s.length>1&&s.sort(f||Hl)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function E_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Vl,i.set(n,[a])):s>=r.length?(a=new Vl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function w_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Kt};break;case"SpotLight":e={position:new U,direction:new U,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function T_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let A_=0;function C_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function R_(i){const t=new w_,e=T_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const s=new U,r=new ae,a=new ae;function o(l){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,w=0,x=0,y=0,A=0,T=0,P=0;l.sort(C_);for(let b=0,_=l.length;b<_;b++){const E=l[b],L=E.color,I=E.intensity,B=E.distance,H=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=L.r*I,u+=L.g*I,f+=L.b*I;else if(E.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(E.sh.coefficients[V],I);P++}else if(E.isDirectionalLight){const V=t.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const G=E.shadow,F=e.get(E);F.shadowIntensity=G.intensity,F.shadowBias=G.bias,F.shadowNormalBias=G.normalBias,F.shadowRadius=G.radius,F.shadowMapSize=G.mapSize,n.directionalShadow[d]=F,n.directionalShadowMap[d]=H,n.directionalShadowMatrix[d]=E.shadow.matrix,w++}n.directional[d]=V,d++}else if(E.isSpotLight){const V=t.get(E);V.position.setFromMatrixPosition(E.matrixWorld),V.color.copy(L).multiplyScalar(I),V.distance=B,V.coneCos=Math.cos(E.angle),V.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),V.decay=E.decay,n.spot[v]=V;const G=E.shadow;if(E.map&&(n.spotLightMap[A]=E.map,A++,G.updateMatrices(E),E.castShadow&&T++),n.spotLightMatrix[v]=G.matrix,E.castShadow){const F=e.get(E);F.shadowIntensity=G.intensity,F.shadowBias=G.bias,F.shadowNormalBias=G.normalBias,F.shadowRadius=G.radius,F.shadowMapSize=G.mapSize,n.spotShadow[v]=F,n.spotShadowMap[v]=H,y++}v++}else if(E.isRectAreaLight){const V=t.get(E);V.color.copy(L).multiplyScalar(I),V.halfWidth.set(E.width*.5,0,0),V.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=V,m++}else if(E.isPointLight){const V=t.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),V.distance=E.distance,V.decay=E.decay,E.castShadow){const G=E.shadow,F=e.get(E);F.shadowIntensity=G.intensity,F.shadowBias=G.bias,F.shadowNormalBias=G.normalBias,F.shadowRadius=G.radius,F.shadowMapSize=G.mapSize,F.shadowCameraNear=G.camera.near,F.shadowCameraFar=G.camera.far,n.pointShadow[g]=F,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=E.shadow.matrix,x++}n.point[g]=V,g++}else if(E.isHemisphereLight){const V=t.get(E);V.skyColor.copy(E.color).multiplyScalar(I),V.groundColor.copy(E.groundColor).multiplyScalar(I),n.hemi[p]=V,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==w||R.numPointShadows!==x||R.numSpotShadows!==y||R.numSpotMaps!==A||R.numLightProbes!==P)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,R.directionalLength=d,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=w,R.numPointShadows=x,R.numSpotShadows=y,R.numSpotMaps=A,R.numLightProbes=P,n.version=A_++)}function c(l,h){let u=0,f=0,d=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const x=l[p];if(x.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(x.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function Gl(i){const t=new R_(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function P_(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Gl(i),t.set(s,[o])):r>=a.length?(o=new Gl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const D_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L_=`uniform sampler2D shadow_pass;
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
}`;function I_(i,t,e){let n=new sc;const s=new _t,r=new _t,a=new pe,o=new ep({depthPacking:vf}),c=new np,l={},h=e.maxTextureSize,u={[kn]:Be,[Be]:kn,[xn]:xn},f=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:D_,fragmentShader:L_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ue;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ve(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dh;let p=this.type;this.render=function(T,P,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const b=i.getRenderTarget(),_=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Kn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const I=p!==In&&this.type===In,B=p===In&&this.type!==In;for(let H=0,V=T.length;H<V;H++){const G=T[H],F=G.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const Z=F.getFrameExtents();if(s.multiply(Z),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,F.mapSize.y=r.y)),F.map===null||I===!0||B===!0){const rt=this.type!==In?{minFilter:qe,magFilter:qe}:{};F.map!==null&&F.map.dispose(),F.map=new xi(s.x,s.y,rt),F.map.texture.name=G.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const Q=F.getViewportCount();for(let rt=0;rt<Q;rt++){const Lt=F.getViewport(rt);a.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),L.viewport(a),F.updateMatrices(G,rt),n=F.getFrustum(),y(P,R,F.camera,G,this.type)}F.isPointLightShadow!==!0&&this.type===In&&w(F,R),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,_,E)};function w(T,P){const R=t.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new xi(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,R,f,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,R,d,v,null)}function x(T,P,R,b){let _=null;const E=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(E!==void 0)_=E;else if(_=R.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const L=_.uuid,I=P.uuid;let B=l[L];B===void 0&&(B={},l[L]=B);let H=B[I];H===void 0&&(H=_.clone(),B[I]=H,P.addEventListener("dispose",A)),_=H}if(_.visible=P.visible,_.wireframe=P.wireframe,b===In?_.side=P.shadowSide!==null?P.shadowSide:P.side:_.side=P.shadowSide!==null?P.shadowSide:u[P.side],_.alphaMap=P.alphaMap,_.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,_.map=P.map,_.clipShadows=P.clipShadows,_.clippingPlanes=P.clippingPlanes,_.clipIntersection=P.clipIntersection,_.displacementMap=P.displacementMap,_.displacementScale=P.displacementScale,_.displacementBias=P.displacementBias,_.wireframeLinewidth=P.wireframeLinewidth,_.linewidth=P.linewidth,R.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const L=i.properties.get(_);L.light=R}return _}function y(T,P,R,b,_){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===In)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const I=t.update(T),B=T.material;if(Array.isArray(B)){const H=I.groups;for(let V=0,G=H.length;V<G;V++){const F=H[V],Z=B[F.materialIndex];if(Z&&Z.visible){const Q=x(T,Z,b,_);T.onBeforeShadow(i,T,P,R,I,Q,F),i.renderBufferDirect(R,null,I,Q,T,F),T.onAfterShadow(i,T,P,R,I,Q,F)}}}else if(B.visible){const H=x(T,B,b,_);T.onBeforeShadow(i,T,P,R,I,H,null),i.renderBufferDirect(R,null,I,H,T,null),T.onAfterShadow(i,T,P,R,I,H,null)}}const L=T.children;for(let I=0,B=L.length;I<B;I++)y(L[I],P,R,b,_)}function A(T){T.target.removeEventListener("dispose",A);for(const R in l){const b=l[R],_=T.target.uuid;_ in b&&(b[_].dispose(),delete b[_])}}}const U_={[qa]:Ka,[Ja]:Lr,[Za]:Qa,[$i]:ja,[Ka]:qa,[Lr]:Ja,[Qa]:Za,[ja]:$i};function N_(i,t){function e(){let N=!1;const ht=new pe;let mt=null;const Tt=new pe(0,0,0,0);return{setMask:function(ct){mt!==ct&&!N&&(i.colorMask(ct,ct,ct,ct),mt=ct)},setLocked:function(ct){N=ct},setClear:function(ct,it,Pt,Vt,he){he===!0&&(ct*=Vt,it*=Vt,Pt*=Vt),ht.set(ct,it,Pt,Vt),Tt.equals(ht)===!1&&(i.clearColor(ct,it,Pt,Vt),Tt.copy(ht))},reset:function(){N=!1,mt=null,Tt.set(-1,0,0,0)}}}function n(){let N=!1,ht=!1,mt=null,Tt=null,ct=null;return{setReversed:function(it){if(ht!==it){const Pt=t.get("EXT_clip_control");it?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),ht=it;const Vt=ct;ct=null,this.setClear(Vt)}},getReversed:function(){return ht},setTest:function(it){it?tt(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(it){mt!==it&&!N&&(i.depthMask(it),mt=it)},setFunc:function(it){if(ht&&(it=U_[it]),Tt!==it){switch(it){case qa:i.depthFunc(i.NEVER);break;case Ka:i.depthFunc(i.ALWAYS);break;case Ja:i.depthFunc(i.LESS);break;case $i:i.depthFunc(i.LEQUAL);break;case Za:i.depthFunc(i.EQUAL);break;case ja:i.depthFunc(i.GEQUAL);break;case Lr:i.depthFunc(i.GREATER);break;case Qa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=it}},setLocked:function(it){N=it},setClear:function(it){ct!==it&&(ht&&(it=1-it),i.clearDepth(it),ct=it)},reset:function(){N=!1,mt=null,Tt=null,ct=null,ht=!1}}}function s(){let N=!1,ht=null,mt=null,Tt=null,ct=null,it=null,Pt=null,Vt=null,he=null;return{setTest:function(ie){N||(ie?tt(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(ie){ht!==ie&&!N&&(i.stencilMask(ie),ht=ie)},setFunc:function(ie,An,pn){(mt!==ie||Tt!==An||ct!==pn)&&(i.stencilFunc(ie,An,pn),mt=ie,Tt=An,ct=pn)},setOp:function(ie,An,pn){(it!==ie||Pt!==An||Vt!==pn)&&(i.stencilOp(ie,An,pn),it=ie,Pt=An,Vt=pn)},setLocked:function(ie){N=ie},setClear:function(ie){he!==ie&&(i.clearStencil(ie),he=ie)},reset:function(){N=!1,ht=null,mt=null,Tt=null,ct=null,it=null,Pt=null,Vt=null,he=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,w=null,x=null,y=null,A=null,T=null,P=new Kt(0,0,0),R=0,b=!1,_=null,E=null,L=null,I=null,B=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,G=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(F)[1]),V=G>=1):F.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),V=G>=2);let Z=null,Q={};const rt=i.getParameter(i.SCISSOR_BOX),Lt=i.getParameter(i.VIEWPORT),Ft=new pe().fromArray(rt),$t=new pe().fromArray(Lt);function Et(N,ht,mt,Tt){const ct=new Uint8Array(4),it=i.createTexture();i.bindTexture(N,it),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<mt;Pt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(ht+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return it}const Y={};Y[i.TEXTURE_2D]=Et(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(i.DEPTH_TEST),a.setFunc($i),j(!1),nt(Uc),tt(i.CULL_FACE),K(Kn);function tt(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function xt(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function gt(N,ht){return u[N]!==ht?(i.bindFramebuffer(N,ht),u[N]=ht,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ht),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function yt(N,ht){let mt=d,Tt=!1;if(N){mt=f.get(ht),mt===void 0&&(mt=[],f.set(ht,mt));const ct=N.textures;if(mt.length!==ct.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let it=0,Pt=ct.length;it<Pt;it++)mt[it]=i.COLOR_ATTACHMENT0+it;mt.length=ct.length,Tt=!0}}else mt[0]!==i.BACK&&(mt[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(mt)}function Gt(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const jt={[hi]:i.FUNC_ADD,[Xu]:i.FUNC_SUBTRACT,[Yu]:i.FUNC_REVERSE_SUBTRACT};jt[$u]=i.MIN,jt[qu]=i.MAX;const D={[Ku]:i.ZERO,[Ju]:i.ONE,[Zu]:i.SRC_COLOR,[Ya]:i.SRC_ALPHA,[sf]:i.SRC_ALPHA_SATURATE,[ef]:i.DST_COLOR,[Qu]:i.DST_ALPHA,[ju]:i.ONE_MINUS_SRC_COLOR,[$a]:i.ONE_MINUS_SRC_ALPHA,[nf]:i.ONE_MINUS_DST_COLOR,[tf]:i.ONE_MINUS_DST_ALPHA,[rf]:i.CONSTANT_COLOR,[af]:i.ONE_MINUS_CONSTANT_COLOR,[of]:i.CONSTANT_ALPHA,[cf]:i.ONE_MINUS_CONSTANT_ALPHA};function K(N,ht,mt,Tt,ct,it,Pt,Vt,he,ie){if(N===Kn){v===!0&&(xt(i.BLEND),v=!1);return}if(v===!1&&(tt(i.BLEND),v=!0),N!==Wu){if(N!==m||ie!==b){if((p!==hi||y!==hi)&&(i.blendEquation(i.FUNC_ADD),p=hi,y=hi),ie)switch(N){case Xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nc:i.blendFunc(i.ONE,i.ONE);break;case Fc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Fc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}w=null,x=null,A=null,T=null,P.set(0,0,0),R=0,m=N,b=ie}return}ct=ct||ht,it=it||mt,Pt=Pt||Tt,(ht!==p||ct!==y)&&(i.blendEquationSeparate(jt[ht],jt[ct]),p=ht,y=ct),(mt!==w||Tt!==x||it!==A||Pt!==T)&&(i.blendFuncSeparate(D[mt],D[Tt],D[it],D[Pt]),w=mt,x=Tt,A=it,T=Pt),(Vt.equals(P)===!1||he!==R)&&(i.blendColor(Vt.r,Vt.g,Vt.b,he),P.copy(Vt),R=he),m=N,b=!1}function et(N,ht){N.side===xn?xt(i.CULL_FACE):tt(i.CULL_FACE);let mt=N.side===Be;ht&&(mt=!mt),j(mt),N.blending===Xi&&N.transparent===!1?K(Kn):K(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const Tt=N.stencilWrite;o.setTest(Tt),Tt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),at(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function j(N){_!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),_=N)}function nt(N){N!==Vu?(tt(i.CULL_FACE),N!==E&&(N===Uc?i.cullFace(i.BACK):N===Gu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),E=N}function dt(N){N!==L&&(V&&i.lineWidth(N),L=N)}function at(N,ht,mt){N?(tt(i.POLYGON_OFFSET_FILL),(I!==ht||B!==mt)&&(i.polygonOffset(ht,mt),I=ht,B=mt)):xt(i.POLYGON_OFFSET_FILL)}function pt(N){N?tt(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function Ht(N){N===void 0&&(N=i.TEXTURE0+H-1),Z!==N&&(i.activeTexture(N),Z=N)}function zt(N,ht,mt){mt===void 0&&(Z===null?mt=i.TEXTURE0+H-1:mt=Z);let Tt=Q[mt];Tt===void 0&&(Tt={type:void 0,texture:void 0},Q[mt]=Tt),(Tt.type!==N||Tt.texture!==ht)&&(Z!==mt&&(i.activeTexture(mt),Z=mt),i.bindTexture(N,ht||Y[N]),Tt.type=N,Tt.texture=ht)}function C(){const N=Q[Z];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Dt(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ct(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(N){Ft.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Ft.copy(N))}function kt(N){$t.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),$t.copy(N))}function It(N,ht){let mt=l.get(ht);mt===void 0&&(mt=new WeakMap,l.set(ht,mt));let Tt=mt.get(N);Tt===void 0&&(Tt=i.getUniformBlockIndex(ht,N.name),mt.set(N,Tt))}function Mt(N,ht){const Tt=l.get(ht).get(N);c.get(ht)!==Tt&&(i.uniformBlockBinding(ht,Tt,N.__bindingPointIndex),c.set(ht,Tt))}function Wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Z=null,Q={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,w=null,x=null,y=null,A=null,T=null,P=new Kt(0,0,0),R=0,b=!1,_=null,E=null,L=null,I=null,B=null,Ft.set(0,0,i.canvas.width,i.canvas.height),$t.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:xt,bindFramebuffer:gt,drawBuffers:yt,useProgram:Gt,setBlending:K,setMaterial:et,setFlipSided:j,setCullFace:nt,setLineWidth:dt,setPolygonOffset:at,setScissorTest:pt,activeTexture:Ht,bindTexture:zt,unbindTexture:C,compressedTexImage2D:M,compressedTexImage3D:z,texImage2D:Rt,texImage3D:ot,updateUBOMapping:It,uniformBlockBinding:Mt,texStorage2D:ft,texStorage3D:Ct,texSubImage2D:$,texSubImage3D:st,compressedTexSubImage2D:q,compressedTexSubImage3D:Dt,scissor:St,viewport:kt,reset:Wt}}function F_(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new _t,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return d?new OffscreenCanvas(C,M):Nr("canvas")}function v(C,M,z){let $=1;const st=zt(C);if((st.width>z||st.height>z)&&($=z/Math.max(st.width,st.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const q=Math.floor($*st.width),Dt=Math.floor($*st.height);u===void 0&&(u=g(q,Dt));const ft=M?g(q,Dt):u;return ft.width=q,ft.height=Dt,ft.getContext("2d").drawImage(C,0,0,q,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+q+"x"+Dt+")."),ft}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(C,M,z,$,st=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=M;if(M===i.RED&&(z===i.FLOAT&&(q=i.R32F),z===i.HALF_FLOAT&&(q=i.R16F),z===i.UNSIGNED_BYTE&&(q=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(q=i.R8UI),z===i.UNSIGNED_SHORT&&(q=i.R16UI),z===i.UNSIGNED_INT&&(q=i.R32UI),z===i.BYTE&&(q=i.R8I),z===i.SHORT&&(q=i.R16I),z===i.INT&&(q=i.R32I)),M===i.RG&&(z===i.FLOAT&&(q=i.RG32F),z===i.HALF_FLOAT&&(q=i.RG16F),z===i.UNSIGNED_BYTE&&(q=i.RG8)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(q=i.RG8UI),z===i.UNSIGNED_SHORT&&(q=i.RG16UI),z===i.UNSIGNED_INT&&(q=i.RG32UI),z===i.BYTE&&(q=i.RG8I),z===i.SHORT&&(q=i.RG16I),z===i.INT&&(q=i.RG32I)),M===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(q=i.RGB8UI),z===i.UNSIGNED_SHORT&&(q=i.RGB16UI),z===i.UNSIGNED_INT&&(q=i.RGB32UI),z===i.BYTE&&(q=i.RGB8I),z===i.SHORT&&(q=i.RGB16I),z===i.INT&&(q=i.RGB32I)),M===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),z===i.UNSIGNED_INT&&(q=i.RGBA32UI),z===i.BYTE&&(q=i.RGBA8I),z===i.SHORT&&(q=i.RGBA16I),z===i.INT&&(q=i.RGBA32I)),M===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),M===i.RGBA){const Dt=st?Ir:ee.getTransfer($);z===i.FLOAT&&(q=i.RGBA32F),z===i.HALF_FLOAT&&(q=i.RGBA16F),z===i.UNSIGNED_BYTE&&(q=Dt===ce?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function y(C,M){let z;return C?M===null||M===_i||M===Cs?z=i.DEPTH24_STENCIL8:M===yn?z=i.DEPTH32F_STENCIL8:M===As&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===_i||M===Cs?z=i.DEPTH_COMPONENT24:M===yn?z=i.DEPTH_COMPONENT32F:M===As&&(z=i.DEPTH_COMPONENT16),z}function A(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==qe&&C.minFilter!==vn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function T(C){const M=C.target;M.removeEventListener("dispose",T),R(M),M.isVideoTexture&&h.delete(M)}function P(C){const M=C.target;M.removeEventListener("dispose",P),_(M)}function R(C){const M=n.get(C);if(M.__webglInit===void 0)return;const z=C.source,$=f.get(z);if($){const st=$[M.__cacheKey];st.usedTimes--,st.usedTimes===0&&b(C),Object.keys($).length===0&&f.delete(z)}n.remove(C)}function b(C){const M=n.get(C);i.deleteTexture(M.__webglTexture);const z=C.source,$=f.get(z);delete $[M.__cacheKey],a.memory.textures--}function _(C){const M=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let st=0;st<M.__webglFramebuffer[$].length;st++)i.deleteFramebuffer(M.__webglFramebuffer[$][st]);else i.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)i.deleteFramebuffer(M.__webglFramebuffer[$]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=C.textures;for(let $=0,st=z.length;$<st;$++){const q=n.get(z[$]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(z[$])}n.remove(C)}let E=0;function L(){E=0}function I(){const C=E;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),E+=1,C}function B(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function H(C,M){const z=n.get(C);if(C.isVideoTexture&&pt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){const $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,C,M);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function V(C,M){const z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Y(z,C,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function G(C,M){const z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Y(z,C,M);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function F(C,M){const z=n.get(C);if(C.version>0&&z.__version!==C.version){tt(z,C,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}const Z={[no]:i.REPEAT,[pi]:i.CLAMP_TO_EDGE,[io]:i.MIRRORED_REPEAT},Q={[qe]:i.NEAREST,[_f]:i.NEAREST_MIPMAP_NEAREST,[$s]:i.NEAREST_MIPMAP_LINEAR,[vn]:i.LINEAR,[na]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},rt={[Mf]:i.NEVER,[Af]:i.ALWAYS,[bf]:i.LESS,[Th]:i.LEQUAL,[Sf]:i.EQUAL,[Tf]:i.GEQUAL,[Ef]:i.GREATER,[wf]:i.NOTEQUAL};function Lt(C,M){if(M.type===yn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===vn||M.magFilter===na||M.magFilter===$s||M.magFilter===mi||M.minFilter===vn||M.minFilter===na||M.minFilter===$s||M.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Z[M.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Z[M.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Z[M.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Q[M.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Q[M.minFilter]),M.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,rt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===qe||M.minFilter!==$s&&M.minFilter!==mi||M.type===yn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ft(C,M){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",T));const $=M.source;let st=f.get($);st===void 0&&(st={},f.set($,st));const q=B(M);if(q!==C.__cacheKey){st[q]===void 0&&(st[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),st[q].usedTimes++;const Dt=st[C.__cacheKey];Dt!==void 0&&(st[C.__cacheKey].usedTimes--,Dt.usedTimes===0&&b(M)),C.__cacheKey=q,C.__webglTexture=st[q].texture}return z}function $t(C,M,z){return Math.floor(Math.floor(C/z)/M)}function Et(C,M,z,$){const q=C.updateRanges;if(q.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,z,$,M.data);else{q.sort((ot,St)=>ot.start-St.start);let Dt=0;for(let ot=1;ot<q.length;ot++){const St=q[Dt],kt=q[ot],It=St.start+St.count,Mt=$t(kt.start,M.width,4),Wt=$t(St.start,M.width,4);kt.start<=It+1&&Mt===Wt&&$t(kt.start+kt.count-1,M.width,4)===Mt?St.count=Math.max(St.count,kt.start+kt.count-St.start):(++Dt,q[Dt]=kt)}q.length=Dt+1;const ft=i.getParameter(i.UNPACK_ROW_LENGTH),Ct=i.getParameter(i.UNPACK_SKIP_PIXELS),Rt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let ot=0,St=q.length;ot<St;ot++){const kt=q[ot],It=Math.floor(kt.start/4),Mt=Math.ceil(kt.count/4),Wt=It%M.width,N=Math.floor(It/M.width),ht=Mt,mt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Wt),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,Wt,N,ht,mt,z,$,M.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ft),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ct),i.pixelStorei(i.UNPACK_SKIP_ROWS,Rt)}}function Y(C,M,z){let $=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=i.TEXTURE_3D);const st=Ft(C,M),q=M.source;e.bindTexture($,C.__webglTexture,i.TEXTURE0+z);const Dt=n.get(q);if(q.version!==Dt.__version||st===!0){e.activeTexture(i.TEXTURE0+z);const ft=ee.getPrimaries(ee.workingColorSpace),Ct=M.colorSpace===Yn?null:ee.getPrimaries(M.colorSpace),Rt=M.colorSpace===Yn||ft===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let ot=v(M.image,!1,s.maxTextureSize);ot=Ht(M,ot);const St=r.convert(M.format,M.colorSpace),kt=r.convert(M.type);let It=x(M.internalFormat,St,kt,M.colorSpace,M.isVideoTexture);Lt($,M);let Mt;const Wt=M.mipmaps,N=M.isVideoTexture!==!0,ht=Dt.__version===void 0||st===!0,mt=q.dataReady,Tt=A(M,ot);if(M.isDepthTexture)It=y(M.format===Ps,M.type),ht&&(N?e.texStorage2D(i.TEXTURE_2D,1,It,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,It,ot.width,ot.height,0,St,kt,null));else if(M.isDataTexture)if(Wt.length>0){N&&ht&&e.texStorage2D(i.TEXTURE_2D,Tt,It,Wt[0].width,Wt[0].height);for(let ct=0,it=Wt.length;ct<it;ct++)Mt=Wt[ct],N?mt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Mt.width,Mt.height,St,kt,Mt.data):e.texImage2D(i.TEXTURE_2D,ct,It,Mt.width,Mt.height,0,St,kt,Mt.data);M.generateMipmaps=!1}else N?(ht&&e.texStorage2D(i.TEXTURE_2D,Tt,It,ot.width,ot.height),mt&&Et(M,ot,St,kt)):e.texImage2D(i.TEXTURE_2D,0,It,ot.width,ot.height,0,St,kt,ot.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){N&&ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,It,Wt[0].width,Wt[0].height,ot.depth);for(let ct=0,it=Wt.length;ct<it;ct++)if(Mt=Wt[ct],M.format!==un)if(St!==null)if(N){if(mt)if(M.layerUpdates.size>0){const Pt=vl(Mt.width,Mt.height,M.format,M.type);for(const Vt of M.layerUpdates){const he=Mt.data.subarray(Vt*Pt/Mt.data.BYTES_PER_ELEMENT,(Vt+1)*Pt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,Vt,Mt.width,Mt.height,1,St,he)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Mt.width,Mt.height,ot.depth,St,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,It,Mt.width,Mt.height,ot.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?mt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Mt.width,Mt.height,ot.depth,St,kt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,It,Mt.width,Mt.height,ot.depth,0,St,kt,Mt.data)}else{N&&ht&&e.texStorage2D(i.TEXTURE_2D,Tt,It,Wt[0].width,Wt[0].height);for(let ct=0,it=Wt.length;ct<it;ct++)Mt=Wt[ct],M.format!==un?St!==null?N?mt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,Mt.width,Mt.height,St,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,It,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?mt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Mt.width,Mt.height,St,kt,Mt.data):e.texImage2D(i.TEXTURE_2D,ct,It,Mt.width,Mt.height,0,St,kt,Mt.data)}else if(M.isDataArrayTexture)if(N){if(ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,It,ot.width,ot.height,ot.depth),mt)if(M.layerUpdates.size>0){const ct=vl(ot.width,ot.height,M.format,M.type);for(const it of M.layerUpdates){const Pt=ot.data.subarray(it*ct/ot.data.BYTES_PER_ELEMENT,(it+1)*ct/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,it,ot.width,ot.height,1,St,kt,Pt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,St,kt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,ot.width,ot.height,ot.depth,0,St,kt,ot.data);else if(M.isData3DTexture)N?(ht&&e.texStorage3D(i.TEXTURE_3D,Tt,It,ot.width,ot.height,ot.depth),mt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,St,kt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,It,ot.width,ot.height,ot.depth,0,St,kt,ot.data);else if(M.isFramebufferTexture){if(ht)if(N)e.texStorage2D(i.TEXTURE_2D,Tt,It,ot.width,ot.height);else{let ct=ot.width,it=ot.height;for(let Pt=0;Pt<Tt;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,It,ct,it,0,St,kt,null),ct>>=1,it>>=1}}else if(Wt.length>0){if(N&&ht){const ct=zt(Wt[0]);e.texStorage2D(i.TEXTURE_2D,Tt,It,ct.width,ct.height)}for(let ct=0,it=Wt.length;ct<it;ct++)Mt=Wt[ct],N?mt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,St,kt,Mt):e.texImage2D(i.TEXTURE_2D,ct,It,St,kt,Mt);M.generateMipmaps=!1}else if(N){if(ht){const ct=zt(ot);e.texStorage2D(i.TEXTURE_2D,Tt,It,ct.width,ct.height)}mt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,kt,ot)}else e.texImage2D(i.TEXTURE_2D,0,It,St,kt,ot);m(M)&&p($),Dt.__version=q.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function tt(C,M,z){if(M.image.length!==6)return;const $=Ft(C,M),st=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+z);const q=n.get(st);if(st.version!==q.__version||$===!0){e.activeTexture(i.TEXTURE0+z);const Dt=ee.getPrimaries(ee.workingColorSpace),ft=M.colorSpace===Yn?null:ee.getPrimaries(M.colorSpace),Ct=M.colorSpace===Yn||Dt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const Rt=M.isCompressedTexture||M.image[0].isCompressedTexture,ot=M.image[0]&&M.image[0].isDataTexture,St=[];for(let it=0;it<6;it++)!Rt&&!ot?St[it]=v(M.image[it],!0,s.maxCubemapSize):St[it]=ot?M.image[it].image:M.image[it],St[it]=Ht(M,St[it]);const kt=St[0],It=r.convert(M.format,M.colorSpace),Mt=r.convert(M.type),Wt=x(M.internalFormat,It,Mt,M.colorSpace),N=M.isVideoTexture!==!0,ht=q.__version===void 0||$===!0,mt=st.dataReady;let Tt=A(M,kt);Lt(i.TEXTURE_CUBE_MAP,M);let ct;if(Rt){N&&ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Wt,kt.width,kt.height);for(let it=0;it<6;it++){ct=St[it].mipmaps;for(let Pt=0;Pt<ct.length;Pt++){const Vt=ct[Pt];M.format!==un?It!==null?N?mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt,0,0,Vt.width,Vt.height,It,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt,Wt,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt,0,0,Vt.width,Vt.height,It,Mt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt,Wt,Vt.width,Vt.height,0,It,Mt,Vt.data)}}}else{if(ct=M.mipmaps,N&&ht){ct.length>0&&Tt++;const it=zt(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Wt,it.width,it.height)}for(let it=0;it<6;it++)if(ot){N?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,St[it].width,St[it].height,It,Mt,St[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Wt,St[it].width,St[it].height,0,It,Mt,St[it].data);for(let Pt=0;Pt<ct.length;Pt++){const he=ct[Pt].image[it].image;N?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt+1,0,0,he.width,he.height,It,Mt,he.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt+1,Wt,he.width,he.height,0,It,Mt,he.data)}}else{N?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,It,Mt,St[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Wt,It,Mt,St[it]);for(let Pt=0;Pt<ct.length;Pt++){const Vt=ct[Pt];N?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt+1,0,0,It,Mt,Vt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt+1,Wt,It,Mt,Vt.image[it])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),q.__version=st.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function xt(C,M,z,$,st,q){const Dt=r.convert(z.format,z.colorSpace),ft=r.convert(z.type),Ct=x(z.internalFormat,Dt,ft,z.colorSpace),Rt=n.get(M),ot=n.get(z);if(ot.__renderTarget=M,!Rt.__hasExternalTextures){const St=Math.max(1,M.width>>q),kt=Math.max(1,M.height>>q);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,q,Ct,St,kt,M.depth,0,Dt,ft,null):e.texImage2D(st,q,Ct,St,kt,0,Dt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),at(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,st,ot.__webglTexture,0,dt(M)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,st,ot.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(C,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),M.depthBuffer){const $=M.depthTexture,st=$&&$.isDepthTexture?$.type:null,q=y(M.stencilBuffer,st),Dt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=dt(M);at(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,q,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,q,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,q,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Dt,i.RENDERBUFFER,C)}else{const $=M.textures;for(let st=0;st<$.length;st++){const q=$[st],Dt=r.convert(q.format,q.colorSpace),ft=r.convert(q.type),Ct=x(q.internalFormat,Dt,ft,q.colorSpace),Rt=dt(M);z&&at(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,Ct,M.width,M.height):at(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt,Ct,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Ct,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function yt(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(M.depthTexture);$.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H(M.depthTexture,0);const st=$.__webglTexture,q=dt(M);if(M.depthTexture.format===Rs)at(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(M.depthTexture.format===Ps)at(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Gt(C){const M=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){const st=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",st)};$.addEventListener("dispose",st),M.__depthDisposeCallback=st}M.__boundDepthTexture=$}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const $=C.texture.mipmaps;$&&$.length>0?yt(M.__webglFramebuffer[0],C):yt(M.__webglFramebuffer,C)}else if(z){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=i.createRenderbuffer(),gt(M.__webglDepthbuffer[$],C,!1);else{const st=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,q)}}else{const $=C.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),gt(M.__webglDepthbuffer,C,!1);else{const st=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,q)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(C,M,z){const $=n.get(C);M!==void 0&&xt($.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Gt(C)}function D(C){const M=C.texture,z=n.get(C),$=n.get(M);C.addEventListener("dispose",P);const st=C.textures,q=C.isWebGLCubeRenderTarget===!0,Dt=st.length>1;if(Dt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=M.version,a.memory.textures++),q){z.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[ft]=[];for(let Ct=0;Ct<M.mipmaps.length;Ct++)z.__webglFramebuffer[ft][Ct]=i.createFramebuffer()}else z.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let ft=0;ft<M.mipmaps.length;ft++)z.__webglFramebuffer[ft]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Dt)for(let ft=0,Ct=st.length;ft<Ct;ft++){const Rt=n.get(st[ft]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&at(C)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ft=0;ft<st.length;ft++){const Ct=st[ft];z.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ft]);const Rt=r.convert(Ct.format,Ct.colorSpace),ot=r.convert(Ct.type),St=x(Ct.internalFormat,Rt,ot,Ct.colorSpace,C.isXRRenderTarget===!0),kt=dt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,St,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,z.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Lt(i.TEXTURE_CUBE_MAP,M);for(let ft=0;ft<6;ft++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ct=0;Ct<M.mipmaps.length;Ct++)xt(z.__webglFramebuffer[ft][Ct],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ct);else xt(z.__webglFramebuffer[ft],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(M)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let ft=0,Ct=st.length;ft<Ct;ft++){const Rt=st[ft],ot=n.get(Rt);let St=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(St=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,ot.__webglTexture),Lt(St,Rt),xt(z.__webglFramebuffer,C,Rt,i.COLOR_ATTACHMENT0+ft,St,0),m(Rt)&&p(St)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ft=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,$.__webglTexture),Lt(ft,M),M.mipmaps&&M.mipmaps.length>0)for(let Ct=0;Ct<M.mipmaps.length;Ct++)xt(z.__webglFramebuffer[Ct],C,M,i.COLOR_ATTACHMENT0,ft,Ct);else xt(z.__webglFramebuffer,C,M,i.COLOR_ATTACHMENT0,ft,0);m(M)&&p(ft),e.unbindTexture()}C.depthBuffer&&Gt(C)}function K(C){const M=C.textures;for(let z=0,$=M.length;z<$;z++){const st=M[z];if(m(st)){const q=w(C),Dt=n.get(st).__webglTexture;e.bindTexture(q,Dt),p(q),e.unbindTexture()}}}const et=[],j=[];function nt(C){if(C.samples>0){if(at(C)===!1){const M=C.textures,z=C.width,$=C.height;let st=i.COLOR_BUFFER_BIT;const q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=n.get(C),ft=M.length>1;if(ft)for(let Rt=0;Rt<M.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer);const Ct=C.texture.mipmaps;Ct&&Ct.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Rt=0;Rt<M.length;Rt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[Rt]);const ot=n.get(M[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,z,$,0,0,z,$,st,i.NEAREST),c===!0&&(et.length=0,j.length=0,et.push(i.COLOR_ATTACHMENT0+Rt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(et.push(q),j.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,j)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let Rt=0;Rt<M.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[Rt]);const ot=n.get(M[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const M=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function dt(C){return Math.min(s.maxSamples,C.samples)}function at(C){const M=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function pt(C){const M=a.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function Ht(C,M){const z=C.colorSpace,$=C.format,st=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Ji&&z!==Yn&&(ee.getTransfer(z)===ce?($!==un||st!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function zt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=L,this.setTexture2D=H,this.setTexture2DArray=V,this.setTexture3D=G,this.setTextureCube=F,this.rebindTextures=jt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=at}function O_(i,t){function e(n,s=Yn){let r;const a=ee.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===qo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ko)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===xh)return i.BYTE;if(n===vh)return i.SHORT;if(n===As)return i.UNSIGNED_SHORT;if(n===$o)return i.INT;if(n===_i)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===ks)return i.HALF_FLOAT;if(n===bh)return i.ALPHA;if(n===Sh)return i.RGB;if(n===un)return i.RGBA;if(n===Rs)return i.DEPTH_COMPONENT;if(n===Ps)return i.DEPTH_STENCIL;if(n===Jo)return i.RED;if(n===Zo)return i.RED_INTEGER;if(n===Eh)return i.RG;if(n===jo)return i.RG_INTEGER;if(n===Qo)return i.RGBA_INTEGER;if(n===Sr||n===Er||n===wr||n===Tr)if(a===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===so||n===ro||n===ao||n===oo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===so)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ro)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ao)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===co||n===lo||n===ho)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===co||n===lo)return a===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ho)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===xo||n===vo||n===yo||n===Mo||n===bo||n===So||n===Eo||n===wo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===uo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===po)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===go)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_o)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===So)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Eo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===To||n===Ao||n===Co)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===To)return a===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ao)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Co)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ro||n===Po||n===Do||n===Lo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ro)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Po)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Do)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const k_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B_=`
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

}`;class z_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Oh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Zn({vertexShader:k_,fragmentShader:B_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ve(new Gr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H_ extends es{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const v=typeof XRWebGLBinding<"u",m=new z_,p={},w=e.getContextAttributes();let x=null,y=null;const A=[],T=[],P=new _t;let R=null;const b=new ln;b.viewport=new pe;const _=new ln;_.viewport=new pe;const E=[b,_],L=new op;let I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=A[Y];return tt===void 0&&(tt=new Ea,A[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=A[Y];return tt===void 0&&(tt=new Ea,A[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=A[Y];return tt===void 0&&(tt=new Ea,A[Y]=tt),tt.getHandSpace()};function H(Y){const tt=T.indexOf(Y.inputSource);if(tt===-1)return;const xt=A[tt];xt!==void 0&&(xt.update(Y.inputSource,Y.frame,l||a),xt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",G);for(let Y=0;Y<A.length;Y++){const tt=T[Y];tt!==null&&(T[Y]=null,A[Y].disconnect(tt))}I=null,B=null,m.reset();for(const Y in p)delete p[Y];t.setRenderTarget(x),d=null,f=null,u=null,s=null,y=null,Et.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",V),s.addEventListener("inputsourceschange",G),w.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,gt=null,yt=null;w.depth&&(yt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=w.stencil?Ps:Rs,gt=w.stencil?Cs:_i);const Gt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Gt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new xi(f.textureWidth,f.textureHeight,{format:un,type:bn,depthTexture:new Fh(f.textureWidth,f.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const xt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new xi(d.framebufferWidth,d.framebufferHeight,{format:un,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Et.setContext(s),Et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(Y){for(let tt=0;tt<Y.removed.length;tt++){const xt=Y.removed[tt],gt=T.indexOf(xt);gt>=0&&(T[gt]=null,A[gt].disconnect(xt))}for(let tt=0;tt<Y.added.length;tt++){const xt=Y.added[tt];let gt=T.indexOf(xt);if(gt===-1){for(let Gt=0;Gt<A.length;Gt++)if(Gt>=T.length){T.push(xt),gt=Gt;break}else if(T[Gt]===null){T[Gt]=xt,gt=Gt;break}if(gt===-1)break}const yt=A[gt];yt&&yt.connect(xt)}}const F=new U,Z=new U;function Q(Y,tt,xt){F.setFromMatrixPosition(tt.matrixWorld),Z.setFromMatrixPosition(xt.matrixWorld);const gt=F.distanceTo(Z),yt=tt.projectionMatrix.elements,Gt=xt.projectionMatrix.elements,jt=yt[14]/(yt[10]-1),D=yt[14]/(yt[10]+1),K=(yt[9]+1)/yt[5],et=(yt[9]-1)/yt[5],j=(yt[8]-1)/yt[0],nt=(Gt[8]+1)/Gt[0],dt=jt*j,at=jt*nt,pt=gt/(-j+nt),Ht=pt*-j;if(tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ht),Y.translateZ(pt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),yt[10]===-1)Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const zt=jt+pt,C=D+pt,M=dt-Ht,z=at+(gt-Ht),$=K*D/C*zt,st=et*D/C*zt;Y.projectionMatrix.makePerspective(M,z,$,st,zt,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function rt(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let tt=Y.near,xt=Y.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),L.near=_.near=b.near=tt,L.far=_.far=b.far=xt,(I!==L.near||B!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),I=L.near,B=L.far),L.layers.mask=Y.layers.mask|6,b.layers.mask=L.layers.mask&3,_.layers.mask=L.layers.mask&5;const gt=Y.parent,yt=L.cameras;rt(L,gt);for(let Gt=0;Gt<yt.length;Gt++)rt(yt[Gt],gt);yt.length===2?Q(L,b,_):L.projectionMatrix.copy(b.projectionMatrix),Lt(Y,L,gt)};function Lt(Y,tt,xt){xt===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(xt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ds*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(Y){return p[Y]};let Ft=null;function $t(Y,tt){if(h=tt.getViewerPose(l||a),g=tt,h!==null){const xt=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let gt=!1;xt.length!==L.cameras.length&&(L.cameras.length=0,gt=!0);for(let D=0;D<xt.length;D++){const K=xt[D];let et=null;if(d!==null)et=d.getViewport(K);else{const nt=u.getViewSubImage(f,K);et=nt.viewport,D===0&&(t.setRenderTargetTextures(y,nt.colorTexture,nt.depthStencilTexture),t.setRenderTarget(y))}let j=E[D];j===void 0&&(j=new ln,j.layers.enable(D),j.viewport=new pe,E[D]=j),j.matrix.fromArray(K.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(K.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(et.x,et.y,et.width,et.height),D===0&&(L.matrix.copy(j.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),gt===!0&&L.cameras.push(j)}const yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const D=u.getDepthInformation(xt[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(yt&&yt.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let D=0;D<xt.length;D++){const K=xt[D].camera;if(K){let et=p[K];et||(et=new Oh,p[K]=et);const j=u.getCameraImage(K);et.sourceTexture=j}}}}for(let xt=0;xt<A.length;xt++){const gt=T[xt],yt=A[xt];gt!==null&&yt!==void 0&&yt.update(gt,tt,l||a)}Ft&&Ft(Y,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const Et=new $h;Et.setAnimationLoop($t),this.setAnimationLoop=function(Y){Ft=Y},this.dispose=function(){}}}const ai=new Sn,V_=new ae;function G_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ih(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,w,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Be&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Be&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=t.get(p),x=w.envMap,y=w.envMapRotation;x&&(m.envMap.value=x,ai.copy(y),ai.x*=-1,ai.y*=-1,ai.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),m.envMapRotation.value.setFromMatrix4(V_.makeRotationFromEuler(ai)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Be&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function W_(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,x){const y=x.program;n.uniformBlockBinding(w,y)}function l(w,x){let y=s[w.id];y===void 0&&(g(w),y=h(w),s[w.id]=y,w.addEventListener("dispose",m));const A=x.program;n.updateUBOMapping(w,A);const T=t.render.frame;r[w.id]!==T&&(f(w),r[w.id]=T)}function h(w){const x=u();w.__bindingPointIndex=x;const y=i.createBuffer(),A=w.__size,T=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,A,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const x=s[w.id],y=w.uniforms,A=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,P=y.length;T<P;T++){const R=Array.isArray(y[T])?y[T]:[y[T]];for(let b=0,_=R.length;b<_;b++){const E=R[b];if(d(E,T,b,A)===!0){const L=E.__offset,I=Array.isArray(E.value)?E.value:[E.value];let B=0;for(let H=0;H<I.length;H++){const V=I[H],G=v(V);typeof V=="number"||typeof V=="boolean"?(E.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,L+B,E.__data)):V.isMatrix3?(E.__data[0]=V.elements[0],E.__data[1]=V.elements[1],E.__data[2]=V.elements[2],E.__data[3]=0,E.__data[4]=V.elements[3],E.__data[5]=V.elements[4],E.__data[6]=V.elements[5],E.__data[7]=0,E.__data[8]=V.elements[6],E.__data[9]=V.elements[7],E.__data[10]=V.elements[8],E.__data[11]=0):(V.toArray(E.__data,B),B+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(w,x,y,A){const T=w.value,P=x+"_"+y;if(A[P]===void 0)return typeof T=="number"||typeof T=="boolean"?A[P]=T:A[P]=T.clone(),!0;{const R=A[P];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return A[P]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function g(w){const x=w.uniforms;let y=0;const A=16;for(let P=0,R=x.length;P<R;P++){const b=Array.isArray(x[P])?x[P]:[x[P]];for(let _=0,E=b.length;_<E;_++){const L=b[_],I=Array.isArray(L.value)?L.value:[L.value];for(let B=0,H=I.length;B<H;B++){const V=I[B],G=v(V),F=y%A,Z=F%G.boundary,Q=F+Z;y+=Z,Q!==0&&A-Q<G.storage&&(y+=A-Q),L.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=G.storage}}}const T=y%A;return T>0&&(y+=A-T),w.__size=y,w.__cache={},this}function v(w){const x={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function m(w){const x=w.target;x.removeEventListener("dispose",m);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class X_{constructor(t={}){const{canvas:e=Wf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const w=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let A=!1;this._outputColorSpace=$e;let T=0,P=0,R=null,b=-1,_=null;const E=new pe,L=new pe;let I=null;const B=new Kt(0);let H=0,V=e.width,G=e.height,F=1,Z=null,Q=null;const rt=new pe(0,0,V,G),Lt=new pe(0,0,V,G);let Ft=!1;const $t=new sc;let Et=!1,Y=!1;const tt=new ae,xt=new U,gt=new pe,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function jt(){return R===null?F:1}let D=n;function K(S,O){return e.getContext(S,O)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Yo}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",ct,!1),D===null){const O="webgl2";if(D=K(O,S),D===null)throw K(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let et,j,nt,dt,at,pt,Ht,zt,C,M,z,$,st,q,Dt,ft,Ct,Rt,ot,St,kt,It,Mt,Wt;function N(){et=new eg(D),et.init(),It=new O_(D,et),j=new q0(D,et,t,It),nt=new N_(D,et),j.reversedDepthBuffer&&f&&nt.buffers.depth.setReversed(!0),dt=new sg(D),at=new b_,pt=new F_(D,et,nt,at,j,It,dt),Ht=new J0(y),zt=new tg(y),C=new hp(D),Mt=new Y0(D,C),M=new ng(D,C,dt,Mt),z=new ag(D,M,C,dt),ot=new rg(D,j,pt),ft=new K0(at),$=new M_(y,Ht,zt,et,j,Mt,ft),st=new G_(y,at),q=new E_,Dt=new P_(et),Rt=new X0(y,Ht,zt,nt,z,d,c),Ct=new I_(y,z,j),Wt=new W_(D,dt,j,nt),St=new $0(D,et,dt),kt=new ig(D,et,dt),dt.programs=$.programs,y.capabilities=j,y.extensions=et,y.properties=at,y.renderLists=q,y.shadowMap=Ct,y.state=nt,y.info=dt}N();const ht=new H_(y,D);this.xr=ht,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=et.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=et.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(S){S!==void 0&&(F=S,this.setSize(V,G,!1))},this.getSize=function(S){return S.set(V,G)},this.setSize=function(S,O,W=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=S,G=O,e.width=Math.floor(S*F),e.height=Math.floor(O*F),W===!0&&(e.style.width=S+"px",e.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(V*F,G*F).floor()},this.setDrawingBufferSize=function(S,O,W){V=S,G=O,F=W,e.width=Math.floor(S*W),e.height=Math.floor(O*W),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(E)},this.getViewport=function(S){return S.copy(rt)},this.setViewport=function(S,O,W,X){S.isVector4?rt.set(S.x,S.y,S.z,S.w):rt.set(S,O,W,X),nt.viewport(E.copy(rt).multiplyScalar(F).round())},this.getScissor=function(S){return S.copy(Lt)},this.setScissor=function(S,O,W,X){S.isVector4?Lt.set(S.x,S.y,S.z,S.w):Lt.set(S,O,W,X),nt.scissor(L.copy(Lt).multiplyScalar(F).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(S){nt.setScissorTest(Ft=S)},this.setOpaqueSort=function(S){Z=S},this.setTransparentSort=function(S){Q=S},this.getClearColor=function(S){return S.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(S=!0,O=!0,W=!0){let X=0;if(S){let k=!1;if(R!==null){const lt=R.texture.format;k=lt===Qo||lt===jo||lt===Zo}if(k){const lt=R.texture.type,bt=lt===bn||lt===_i||lt===As||lt===Cs||lt===qo||lt===Ko,At=Rt.getClearColor(),wt=Rt.getClearAlpha(),Ot=At.r,Bt=At.g,Ut=At.b;bt?(g[0]=Ot,g[1]=Bt,g[2]=Ut,g[3]=wt,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=Ot,v[1]=Bt,v[2]=Ut,v[3]=wt,D.clearBufferiv(D.COLOR,0,v))}else X|=D.COLOR_BUFFER_BIT}O&&(X|=D.DEPTH_BUFFER_BIT),W&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),Rt.dispose(),q.dispose(),Dt.dispose(),at.dispose(),Ht.dispose(),zt.dispose(),z.dispose(),Mt.dispose(),Wt.dispose(),$.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",pn),ht.removeEventListener("sessionend",gc),jn.stop()};function mt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const S=dt.autoReset,O=Ct.enabled,W=Ct.autoUpdate,X=Ct.needsUpdate,k=Ct.type;N(),dt.autoReset=S,Ct.enabled=O,Ct.autoUpdate=W,Ct.needsUpdate=X,Ct.type=k}function ct(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function it(S){const O=S.target;O.removeEventListener("dispose",it),Pt(O)}function Pt(S){Vt(S),at.remove(S)}function Vt(S){const O=at.get(S).programs;O!==void 0&&(O.forEach(function(W){$.releaseProgram(W)}),S.isShaderMaterial&&$.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,W,X,k,lt){O===null&&(O=yt);const bt=k.isMesh&&k.matrixWorld.determinant()<0,At=uu(S,O,W,X,k);nt.setMaterial(X,bt);let wt=W.index,Ot=1;if(X.wireframe===!0){if(wt=M.getWireframeAttribute(W),wt===void 0)return;Ot=2}const Bt=W.drawRange,Ut=W.attributes.position;let Jt=Bt.start*Ot,oe=(Bt.start+Bt.count)*Ot;lt!==null&&(Jt=Math.max(Jt,lt.start*Ot),oe=Math.min(oe,(lt.start+lt.count)*Ot)),wt!==null?(Jt=Math.max(Jt,0),oe=Math.min(oe,wt.count)):Ut!=null&&(Jt=Math.max(Jt,0),oe=Math.min(oe,Ut.count));const xe=oe-Jt;if(xe<0||xe===1/0)return;Mt.setup(k,X,At,W,wt);let ue,le=St;if(wt!==null&&(ue=C.get(wt),le=kt,le.setIndex(ue)),k.isMesh)X.wireframe===!0?(nt.setLineWidth(X.wireframeLinewidth*jt()),le.setMode(D.LINES)):le.setMode(D.TRIANGLES);else if(k.isLine){let Nt=X.linewidth;Nt===void 0&&(Nt=1),nt.setLineWidth(Nt*jt()),k.isLineSegments?le.setMode(D.LINES):k.isLineLoop?le.setMode(D.LINE_LOOP):le.setMode(D.LINE_STRIP)}else k.isPoints?le.setMode(D.POINTS):k.isSprite&&le.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Ls("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),le.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))le.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Nt=k._multiDrawStarts,me=k._multiDrawCounts,te=k._multiDrawCount,ze=wt?C.get(wt).bytesPerElement:1,bi=at.get(X).currentProgram.getUniforms();for(let He=0;He<te;He++)bi.setValue(D,"_gl_DrawID",He),le.render(Nt[He]/ze,me[He])}else if(k.isInstancedMesh)le.renderInstances(Jt,xe,k.count);else if(W.isInstancedBufferGeometry){const Nt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,me=Math.min(W.instanceCount,Nt);le.renderInstances(Jt,xe,me)}else le.render(Jt,xe)};function he(S,O,W){S.transparent===!0&&S.side===xn&&S.forceSinglePass===!1?(S.side=Be,S.needsUpdate=!0,Vs(S,O,W),S.side=kn,S.needsUpdate=!0,Vs(S,O,W),S.side=xn):Vs(S,O,W)}this.compile=function(S,O,W=null){W===null&&(W=S),p=Dt.get(W),p.init(O),x.push(p),W.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),S!==W&&S.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const X=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const lt=k.material;if(lt)if(Array.isArray(lt))for(let bt=0;bt<lt.length;bt++){const At=lt[bt];he(At,W,k),X.add(At)}else he(lt,W,k),X.add(lt)}),p=x.pop(),X},this.compileAsync=function(S,O,W=null){const X=this.compile(S,O,W);return new Promise(k=>{function lt(){if(X.forEach(function(bt){at.get(bt).currentProgram.isReady()&&X.delete(bt)}),X.size===0){k(S);return}setTimeout(lt,10)}et.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let ie=null;function An(S){ie&&ie(S)}function pn(){jn.stop()}function gc(){jn.start()}const jn=new $h;jn.setAnimationLoop(An),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(S){ie=S,ht.setAnimationLoop(S),S===null?jn.stop():jn.start()},ht.addEventListener("sessionstart",pn),ht.addEventListener("sessionend",gc),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(O),O=ht.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,O,R),p=Dt.get(S,x.length),p.init(O),x.push(p),tt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),$t.setFromProjectionMatrix(tt,Mn,O.reversedDepth),Y=this.localClippingEnabled,Et=ft.init(this.clippingPlanes,Y),m=q.get(S,w.length),m.init(),w.push(m),ht.enabled===!0&&ht.isPresenting===!0){const lt=y.xr.getDepthSensingMesh();lt!==null&&$r(lt,O,-1/0,y.sortObjects)}$r(S,O,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(Z,Q),Gt=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,Gt&&Rt.addToRenderList(m,S),this.info.render.frame++,Et===!0&&ft.beginShadows();const W=p.state.shadowsArray;Ct.render(W,S,O),Et===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,k=m.transmissive;if(p.setupLights(),O.isArrayCamera){const lt=O.cameras;if(k.length>0)for(let bt=0,At=lt.length;bt<At;bt++){const wt=lt[bt];xc(X,k,S,wt)}Gt&&Rt.render(S);for(let bt=0,At=lt.length;bt<At;bt++){const wt=lt[bt];_c(m,S,wt,wt.viewport)}}else k.length>0&&xc(X,k,S,O),Gt&&Rt.render(S),_c(m,S,O);R!==null&&P===0&&(pt.updateMultisampleRenderTarget(R),pt.updateRenderTargetMipmap(R)),S.isScene===!0&&S.onAfterRender(y,S,O),Mt.resetDefaultState(),b=-1,_=null,x.pop(),x.length>0?(p=x[x.length-1],Et===!0&&ft.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function $r(S,O,W,X){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||$t.intersectsSprite(S)){X&&gt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(tt);const bt=z.update(S),At=S.material;At.visible&&m.push(S,bt,At,W,gt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||$t.intersectsObject(S))){const bt=z.update(S),At=S.material;if(X&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),gt.copy(S.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),gt.copy(bt.boundingSphere.center)),gt.applyMatrix4(S.matrixWorld).applyMatrix4(tt)),Array.isArray(At)){const wt=bt.groups;for(let Ot=0,Bt=wt.length;Ot<Bt;Ot++){const Ut=wt[Ot],Jt=At[Ut.materialIndex];Jt&&Jt.visible&&m.push(S,bt,Jt,W,gt.z,Ut)}}else At.visible&&m.push(S,bt,At,W,gt.z,null)}}const lt=S.children;for(let bt=0,At=lt.length;bt<At;bt++)$r(lt[bt],O,W,X)}function _c(S,O,W,X){const k=S.opaque,lt=S.transmissive,bt=S.transparent;p.setupLightsView(W),Et===!0&&ft.setGlobalState(y.clippingPlanes,W),X&&nt.viewport(E.copy(X)),k.length>0&&Hs(k,O,W),lt.length>0&&Hs(lt,O,W),bt.length>0&&Hs(bt,O,W),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function xc(S,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new xi(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?ks:bn,minFilter:mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const lt=p.state.transmissionRenderTarget[X.id],bt=X.viewport||E;lt.setSize(bt.z*y.transmissionResolutionScale,bt.w*y.transmissionResolutionScale);const At=y.getRenderTarget(),wt=y.getActiveCubeFace(),Ot=y.getActiveMipmapLevel();y.setRenderTarget(lt),y.getClearColor(B),H=y.getClearAlpha(),H<1&&y.setClearColor(16777215,.5),y.clear(),Gt&&Rt.render(W);const Bt=y.toneMapping;y.toneMapping=Jn;const Ut=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),Et===!0&&ft.setGlobalState(y.clippingPlanes,X),Hs(S,W,X),pt.updateMultisampleRenderTarget(lt),pt.updateRenderTargetMipmap(lt),et.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let oe=0,xe=O.length;oe<xe;oe++){const ue=O[oe],le=ue.object,Nt=ue.geometry,me=ue.material,te=ue.group;if(me.side===xn&&le.layers.test(X.layers)){const ze=me.side;me.side=Be,me.needsUpdate=!0,vc(le,W,X,Nt,me,te),me.side=ze,me.needsUpdate=!0,Jt=!0}}Jt===!0&&(pt.updateMultisampleRenderTarget(lt),pt.updateRenderTargetMipmap(lt))}y.setRenderTarget(At,wt,Ot),y.setClearColor(B,H),Ut!==void 0&&(X.viewport=Ut),y.toneMapping=Bt}function Hs(S,O,W){const X=O.isScene===!0?O.overrideMaterial:null;for(let k=0,lt=S.length;k<lt;k++){const bt=S[k],At=bt.object,wt=bt.geometry,Ot=bt.group;let Bt=bt.material;Bt.allowOverride===!0&&X!==null&&(Bt=X),At.layers.test(W.layers)&&vc(At,O,W,wt,Bt,Ot)}}function vc(S,O,W,X,k,lt){S.onBeforeRender(y,O,W,X,k,lt),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(y,O,W,X,S,lt),k.transparent===!0&&k.side===xn&&k.forceSinglePass===!1?(k.side=Be,k.needsUpdate=!0,y.renderBufferDirect(W,O,X,k,S,lt),k.side=kn,k.needsUpdate=!0,y.renderBufferDirect(W,O,X,k,S,lt),k.side=xn):y.renderBufferDirect(W,O,X,k,S,lt),S.onAfterRender(y,O,W,X,k,lt)}function Vs(S,O,W){O.isScene!==!0&&(O=yt);const X=at.get(S),k=p.state.lights,lt=p.state.shadowsArray,bt=k.state.version,At=$.getParameters(S,k.state,lt,O,W),wt=$.getProgramCacheKey(At);let Ot=X.programs;X.environment=S.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(S.isMeshStandardMaterial?zt:Ht).get(S.envMap||X.environment),X.envMapRotation=X.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,Ot===void 0&&(S.addEventListener("dispose",it),Ot=new Map,X.programs=Ot);let Bt=Ot.get(wt);if(Bt!==void 0){if(X.currentProgram===Bt&&X.lightsStateVersion===bt)return Mc(S,At),Bt}else At.uniforms=$.getUniforms(S),S.onBeforeCompile(At,y),Bt=$.acquireProgram(At,wt),Ot.set(wt,Bt),X.uniforms=At.uniforms;const Ut=X.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ut.clippingPlanes=ft.uniform),Mc(S,At),X.needsLights=du(S),X.lightsStateVersion=bt,X.needsLights&&(Ut.ambientLightColor.value=k.state.ambient,Ut.lightProbe.value=k.state.probe,Ut.directionalLights.value=k.state.directional,Ut.directionalLightShadows.value=k.state.directionalShadow,Ut.spotLights.value=k.state.spot,Ut.spotLightShadows.value=k.state.spotShadow,Ut.rectAreaLights.value=k.state.rectArea,Ut.ltc_1.value=k.state.rectAreaLTC1,Ut.ltc_2.value=k.state.rectAreaLTC2,Ut.pointLights.value=k.state.point,Ut.pointLightShadows.value=k.state.pointShadow,Ut.hemisphereLights.value=k.state.hemi,Ut.directionalShadowMap.value=k.state.directionalShadowMap,Ut.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ut.spotShadowMap.value=k.state.spotShadowMap,Ut.spotLightMatrix.value=k.state.spotLightMatrix,Ut.spotLightMap.value=k.state.spotLightMap,Ut.pointShadowMap.value=k.state.pointShadowMap,Ut.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=Bt,X.uniformsList=null,Bt}function yc(S){if(S.uniformsList===null){const O=S.currentProgram.getUniforms();S.uniformsList=Ar.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function Mc(S,O){const W=at.get(S);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function uu(S,O,W,X,k){O.isScene!==!0&&(O=yt),pt.resetTextureUnits();const lt=O.fog,bt=X.isMeshStandardMaterial?O.environment:null,At=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ji,wt=(X.isMeshStandardMaterial?zt:Ht).get(X.envMap||bt),Ot=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Bt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ut=!!W.morphAttributes.position,Jt=!!W.morphAttributes.normal,oe=!!W.morphAttributes.color;let xe=Jn;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(xe=y.toneMapping);const ue=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,le=ue!==void 0?ue.length:0,Nt=at.get(X),me=p.state.lights;if(Et===!0&&(Y===!0||S!==_)){const Pe=S===_&&X.id===b;ft.setState(X,S,Pe)}let te=!1;X.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==me.state.version||Nt.outputColorSpace!==At||k.isBatchedMesh&&Nt.batching===!1||!k.isBatchedMesh&&Nt.batching===!0||k.isBatchedMesh&&Nt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Nt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Nt.instancing===!1||!k.isInstancedMesh&&Nt.instancing===!0||k.isSkinnedMesh&&Nt.skinning===!1||!k.isSkinnedMesh&&Nt.skinning===!0||k.isInstancedMesh&&Nt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Nt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Nt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Nt.instancingMorph===!1&&k.morphTexture!==null||Nt.envMap!==wt||X.fog===!0&&Nt.fog!==lt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==ft.numPlanes||Nt.numIntersection!==ft.numIntersection)||Nt.vertexAlphas!==Ot||Nt.vertexTangents!==Bt||Nt.morphTargets!==Ut||Nt.morphNormals!==Jt||Nt.morphColors!==oe||Nt.toneMapping!==xe||Nt.morphTargetsCount!==le)&&(te=!0):(te=!0,Nt.__version=X.version);let ze=Nt.currentProgram;te===!0&&(ze=Vs(X,O,k));let bi=!1,He=!1,as=!1;const ge=ze.getUniforms(),Ke=Nt.uniforms;if(nt.useProgram(ze.program)&&(bi=!0,He=!0,as=!0),X.id!==b&&(b=X.id,He=!0),bi||_!==S){nt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ge.setValue(D,"projectionMatrix",S.projectionMatrix),ge.setValue(D,"viewMatrix",S.matrixWorldInverse);const Ne=ge.map.cameraPosition;Ne!==void 0&&Ne.setValue(D,xt.setFromMatrixPosition(S.matrixWorld)),j.logarithmicDepthBuffer&&ge.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ge.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),_!==S&&(_=S,He=!0,as=!0)}if(k.isSkinnedMesh){ge.setOptional(D,k,"bindMatrix"),ge.setOptional(D,k,"bindMatrixInverse");const Pe=k.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),ge.setValue(D,"boneTexture",Pe.boneTexture,pt))}k.isBatchedMesh&&(ge.setOptional(D,k,"batchingTexture"),ge.setValue(D,"batchingTexture",k._matricesTexture,pt),ge.setOptional(D,k,"batchingIdTexture"),ge.setValue(D,"batchingIdTexture",k._indirectTexture,pt),ge.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&ge.setValue(D,"batchingColorTexture",k._colorsTexture,pt));const Je=W.morphAttributes;if((Je.position!==void 0||Je.normal!==void 0||Je.color!==void 0)&&ot.update(k,W,ze),(He||Nt.receiveShadow!==k.receiveShadow)&&(Nt.receiveShadow=k.receiveShadow,ge.setValue(D,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ke.envMap.value=wt,Ke.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(Ke.envMapIntensity.value=O.environmentIntensity),He&&(ge.setValue(D,"toneMappingExposure",y.toneMappingExposure),Nt.needsLights&&fu(Ke,as),lt&&X.fog===!0&&st.refreshFogUniforms(Ke,lt),st.refreshMaterialUniforms(Ke,X,F,G,p.state.transmissionRenderTarget[S.id]),Ar.upload(D,yc(Nt),Ke,pt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ar.upload(D,yc(Nt),Ke,pt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ge.setValue(D,"center",k.center),ge.setValue(D,"modelViewMatrix",k.modelViewMatrix),ge.setValue(D,"normalMatrix",k.normalMatrix),ge.setValue(D,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Pe=X.uniformsGroups;for(let Ne=0,qr=Pe.length;Ne<qr;Ne++){const Qn=Pe[Ne];Wt.update(Qn,ze),Wt.bind(Qn,ze)}}return ze}function fu(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function du(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,O,W){const X=at.get(S);X.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),at.get(S.texture).__webglTexture=O,at.get(S.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,O){const W=at.get(S);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};const pu=D.createFramebuffer();this.setRenderTarget=function(S,O=0,W=0){R=S,T=O,P=W;let X=!0,k=null,lt=!1,bt=!1;if(S){const wt=at.get(S);if(wt.__useDefaultFramebuffer!==void 0)nt.bindFramebuffer(D.FRAMEBUFFER,null),X=!1;else if(wt.__webglFramebuffer===void 0)pt.setupRenderTarget(S);else if(wt.__hasExternalTextures)pt.rebindTextures(S,at.get(S.texture).__webglTexture,at.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ut=S.depthTexture;if(wt.__boundDepthTexture!==Ut){if(Ut!==null&&at.has(Ut)&&(S.width!==Ut.image.width||S.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");pt.setupDepthRenderbuffer(S)}}const Ot=S.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(bt=!0);const Bt=at.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Bt[O])?k=Bt[O][W]:k=Bt[O],lt=!0):S.samples>0&&pt.useMultisampledRTT(S)===!1?k=at.get(S).__webglMultisampledFramebuffer:Array.isArray(Bt)?k=Bt[W]:k=Bt,E.copy(S.viewport),L.copy(S.scissor),I=S.scissorTest}else E.copy(rt).multiplyScalar(F).floor(),L.copy(Lt).multiplyScalar(F).floor(),I=Ft;if(W!==0&&(k=pu),nt.bindFramebuffer(D.FRAMEBUFFER,k)&&X&&nt.drawBuffers(S,k),nt.viewport(E),nt.scissor(L),nt.setScissorTest(I),lt){const wt=at.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,wt.__webglTexture,W)}else if(bt){const wt=O;for(let Ot=0;Ot<S.textures.length;Ot++){const Bt=at.get(S.textures[Ot]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ot,Bt.__webglTexture,W,wt)}}else if(S!==null&&W!==0){const wt=at.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,wt.__webglTexture,W)}b=-1},this.readRenderTargetPixels=function(S,O,W,X,k,lt,bt,At=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=at.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&bt!==void 0&&(wt=wt[bt]),wt){nt.bindFramebuffer(D.FRAMEBUFFER,wt);try{const Ot=S.textures[At],Bt=Ot.format,Ut=Ot.type;if(!j.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-X&&W>=0&&W<=S.height-k&&(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+At),D.readPixels(O,W,X,k,It.convert(Bt),It.convert(Ut),lt))}finally{const Ot=R!==null?at.get(R).__webglFramebuffer:null;nt.bindFramebuffer(D.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(S,O,W,X,k,lt,bt,At=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=at.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&bt!==void 0&&(wt=wt[bt]),wt)if(O>=0&&O<=S.width-X&&W>=0&&W<=S.height-k){nt.bindFramebuffer(D.FRAMEBUFFER,wt);const Ot=S.textures[At],Bt=Ot.format,Ut=Ot.type;if(!j.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Jt),D.bufferData(D.PIXEL_PACK_BUFFER,lt.byteLength,D.STREAM_READ),S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+At),D.readPixels(O,W,X,k,It.convert(Bt),It.convert(Ut),0);const oe=R!==null?at.get(R).__webglFramebuffer:null;nt.bindFramebuffer(D.FRAMEBUFFER,oe);const xe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Xf(D,xe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Jt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,lt),D.deleteBuffer(Jt),D.deleteSync(xe),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,O=null,W=0){const X=Math.pow(2,-W),k=Math.floor(S.image.width*X),lt=Math.floor(S.image.height*X),bt=O!==null?O.x:0,At=O!==null?O.y:0;pt.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,bt,At,k,lt),nt.unbindTexture()};const mu=D.createFramebuffer(),gu=D.createFramebuffer();this.copyTextureToTexture=function(S,O,W=null,X=null,k=0,lt=null){lt===null&&(k!==0?(Ls("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),lt=k,k=0):lt=0);let bt,At,wt,Ot,Bt,Ut,Jt,oe,xe;const ue=S.isCompressedTexture?S.mipmaps[lt]:S.image;if(W!==null)bt=W.max.x-W.min.x,At=W.max.y-W.min.y,wt=W.isBox3?W.max.z-W.min.z:1,Ot=W.min.x,Bt=W.min.y,Ut=W.isBox3?W.min.z:0;else{const Je=Math.pow(2,-k);bt=Math.floor(ue.width*Je),At=Math.floor(ue.height*Je),S.isDataArrayTexture?wt=ue.depth:S.isData3DTexture?wt=Math.floor(ue.depth*Je):wt=1,Ot=0,Bt=0,Ut=0}X!==null?(Jt=X.x,oe=X.y,xe=X.z):(Jt=0,oe=0,xe=0);const le=It.convert(O.format),Nt=It.convert(O.type);let me;O.isData3DTexture?(pt.setTexture3D(O,0),me=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(pt.setTexture2DArray(O,0),me=D.TEXTURE_2D_ARRAY):(pt.setTexture2D(O,0),me=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const te=D.getParameter(D.UNPACK_ROW_LENGTH),ze=D.getParameter(D.UNPACK_IMAGE_HEIGHT),bi=D.getParameter(D.UNPACK_SKIP_PIXELS),He=D.getParameter(D.UNPACK_SKIP_ROWS),as=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ue.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ue.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ot),D.pixelStorei(D.UNPACK_SKIP_ROWS,Bt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ut);const ge=S.isDataArrayTexture||S.isData3DTexture,Ke=O.isDataArrayTexture||O.isData3DTexture;if(S.isDepthTexture){const Je=at.get(S),Pe=at.get(O),Ne=at.get(Je.__renderTarget),qr=at.get(Pe.__renderTarget);nt.bindFramebuffer(D.READ_FRAMEBUFFER,Ne.__webglFramebuffer),nt.bindFramebuffer(D.DRAW_FRAMEBUFFER,qr.__webglFramebuffer);for(let Qn=0;Qn<wt;Qn++)ge&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,at.get(S).__webglTexture,k,Ut+Qn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,at.get(O).__webglTexture,lt,xe+Qn)),D.blitFramebuffer(Ot,Bt,bt,At,Jt,oe,bt,At,D.DEPTH_BUFFER_BIT,D.NEAREST);nt.bindFramebuffer(D.READ_FRAMEBUFFER,null),nt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||S.isRenderTargetTexture||at.has(S)){const Je=at.get(S),Pe=at.get(O);nt.bindFramebuffer(D.READ_FRAMEBUFFER,mu),nt.bindFramebuffer(D.DRAW_FRAMEBUFFER,gu);for(let Ne=0;Ne<wt;Ne++)ge?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Je.__webglTexture,k,Ut+Ne):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Je.__webglTexture,k),Ke?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pe.__webglTexture,lt,xe+Ne):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Pe.__webglTexture,lt),k!==0?D.blitFramebuffer(Ot,Bt,bt,At,Jt,oe,bt,At,D.COLOR_BUFFER_BIT,D.NEAREST):Ke?D.copyTexSubImage3D(me,lt,Jt,oe,xe+Ne,Ot,Bt,bt,At):D.copyTexSubImage2D(me,lt,Jt,oe,Ot,Bt,bt,At);nt.bindFramebuffer(D.READ_FRAMEBUFFER,null),nt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ke?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(me,lt,Jt,oe,xe,bt,At,wt,le,Nt,ue.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(me,lt,Jt,oe,xe,bt,At,wt,le,ue.data):D.texSubImage3D(me,lt,Jt,oe,xe,bt,At,wt,le,Nt,ue):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,lt,Jt,oe,bt,At,le,Nt,ue.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,lt,Jt,oe,ue.width,ue.height,le,ue.data):D.texSubImage2D(D.TEXTURE_2D,lt,Jt,oe,bt,At,le,Nt,ue);D.pixelStorei(D.UNPACK_ROW_LENGTH,te),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ze),D.pixelStorei(D.UNPACK_SKIP_PIXELS,bi),D.pixelStorei(D.UNPACK_SKIP_ROWS,He),D.pixelStorei(D.UNPACK_SKIP_IMAGES,as),lt===0&&O.generateMipmaps&&D.generateMipmap(me),nt.unbindTexture()},this.initRenderTarget=function(S){at.get(S).__webglFramebuffer===void 0&&pt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?pt.setTextureCube(S,0):S.isData3DTexture?pt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?pt.setTexture2DArray(S,0):pt.setTexture2D(S,0),nt.unbindTexture()},this.resetState=function(){T=0,P=0,R=null,nt.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}const Wl=i=>Math.atan2(Math.sin(i),Math.cos(i));class Y_{constructor(){this.delay=.5,this.duration=.5,this.owner=null,this.angle=0,this.remaining=0,this.shotAt=null,this.time=0}update(t,e){const n=t.angle||0;(t!==this.owner||e<this.time)&&(this.owner=t,this.angle=n,this.remaining=0,this.shotAt=null,this.time=e);const s=this.time;this.time=e;const r=Number.isFinite(t.lastShotAt)?t.lastShotAt:null;if(r!==this.shotAt){this.shotAt=r,this.remaining=0;const a=e-r;if(r!==null&&a>=0&&a<this.delay+this.duration){this.angle=t.aimAngle??n;const o=Math.max(0,a-this.delay);return this.remaining=this.duration-o,this.angle+=Wl(n-this.angle)*o/this.duration,this.angle}}if(this.remaining>0){const a=Math.max(0,e-Math.max(s,this.shotAt+this.delay)),o=Math.min(a,this.remaining);this.angle+=Wl(n-this.angle)*o/this.remaining,this.remaining=Math.max(0,this.remaining-o),this.remaining<1e-9&&(this.remaining=0)}return this.remaining===0&&(this.angle=n),this.angle}}const Fa=new U(0,1,0),Cr=new U(20,29,25),$_=Cr.clone().normalize(),Oa=[48,92],Xl={behind:75,ahead:85,low:-10,high:40},oi={radius:5.2,fightRadius:3.2,fights:3,height:1.15,margin:.5,range:14},Yl={full:2,max:6},mn={red:"#ff4339",dark:"#2b0d10"},je={fill:"#e0263f",edge:"#2a0b14",grow:.09,bias:.35,minTop:2.4,hold:.25,interval:.12,body:{dog:[.9,.9],walker:[.9,1.4],brute:[1.8,2.4],boss:[3.6,4.2]},heights:{dog:1.6,walker:2.8,brute:5,boss:8.5},rays:[.12,.5,.92]},$l=new Set(["crate","locker","lootbox"]),Bo=58,ka=Bo*6,q_={desert:"#a29c74",canyon:"#b0905e",tundra:"#d3dedc",burned:"#6d6255",marsh:"#6f8c58",farmland:"#a9ab5c",industrial:"#7f7d66",coast:"#9fa477"},ql={desert:"#a98670",canyon:"#b0603f",tundra:"#a9b6b8",burned:"#5f5852",coast:"#9a9a88",industrial:"#7d7a70"},Gi={city:{wall:["#a0a491","#8d9a8c","#b5ad97","#9a8f7e"],cap:"#c2b49d",top:"#b7a679"},stone:{wall:["#8f9688","#a7ab98","#7f877c"],cap:"#6f7f6a",top:"#5f7f5a"},sand:{wall:["#c98c5c","#d8b47c","#b97a4c"],cap:"#e2c08a",top:"#a86a42"},ice:{wall:["#bfe3ea","#d9f0f3","#a5d3df"],cap:"#f2f6f4",top:"#eef4f2"},timber:{wall:["#6b5a44","#7d6a4f"],cap:"#4a3d30",timber:!0}};for(const[i,t]of Object.entries({village:"city",industrial:"city",forest:"stone",glade:"stone",mountain:"stone",cliff:"stone",desert:"sand",canyon:"sand",tundra:"ice",marsh:"timber",burned:"timber",farmland:"timber",coast:"timber"}))Gi[i]=Gi[t];const K_={forest:"stone",glade:"stone",mountain:"stone",cliff:"stone",coast:"post",desert:"block",canyon:"block",tundra:"ice",marsh:"reeds",burned:"stump",farmland:"hay",industrial:"barrel"},Ba={city:"#8b8f7d",village:"#8f8f78",forest:"#857e5e",glade:"#a29a6a",coast:"#e2d6b4",desert:"#d8b47c",cliff:"#9aa196",mountain:"#a3a99c",marsh:"#8a7352",burned:"#5e5650",canyon:"#c48a5c",tundra:"#e4ecee",farmland:"#b6a46c",industrial:"#7f7c72"},Kl={mountain:["#8b988b","#a6ad99","#76857c","#e9efe8"],cliff:["#7f8c84","#98a397","#6c7a70","#5d7d64"],canyon:["#b0603f","#c9774a","#9c4e33","#8a8a4a"],desert:["#b98a5c","#d0a06a","#a6784e"],tundra:["#9fb0b4","#b9c8cb","#8a9ca0","#f2f6f4"]},za=new Map,Rr=i=>(za.has(i)||za.set(i,new Kt(i)),za.get(i)),vr=(i,t,e)=>{const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)},yr=i=>`#${Rr(i).clone().multiplyScalar(.78).getHexString()}`,J_={bark:"#635c4b"},Jl=Object.freeze({heal:{symbol:"+",color:"#ed615a",name:"Medical kit"},shield:{symbol:"◇",color:"#60bfe3",name:"Shield"},rapid:{symbol:"≋",color:"#efa840",name:"Rapid fire"},power:{symbol:"ϟ",color:"#aa78ee",name:"Power cell"},speed:{symbol:"»",color:"#f1ce65",name:"Fleetfoot"},weapon:{symbol:"⌁",color:"#e5d8b1",name:"Weapon"}});class Z_{constructor(t){this.canvas=t;try{this.renderer=new X_({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch(r){throw new Error(`Kuru needs a browser with WebGL enabled to show its world. ${r.message}`)}this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.outputColorSpace=$e,this.renderer.toneMapping=gh,this.renderer.toneMappingExposure=.94,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ph,this.scene=new gd,this.scene.background=new Kt("#c2d1c4"),this.scene.fog=new ic("#c2d1c4",...Oa),this.camera=new lc(-15,15,28,-28,.1,160),this.cameraScale=1,this.sceneBox=Xl,this.silhouetteBias={value:0},this.camera.up.copy(Fa),this.scene.add(new ip("#dcebdd","#344d3e",1.5));const e=new ap("#fff2da",2.3);e.position.set(-18,36,12),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),Object.assign(e.shadow.camera,{left:-30,right:30,top:38,bottom:-25,near:1,far:100}),e.shadow.normalBias=.065,e.shadow.bias=-12e-5,this.scene.add(e,e.target),this.sun=e,this.materials=new Map,this.geometries={box:new is(1,1,1),cylinder:new Vr(1,1,1,7),cone:new rc(1,1,7),ico:new kr(1,0),sphere:new kr(1,1),circle:new Fr(1,32),ring:new ws(.87,1,40)};const n=new Uo;n.moveTo(-.35,.3);for(const[r,a]of[[0,.45],[.35,.3],[.29,-.13],[0,-.45],[-.29,-.13]])n.lineTo(r,a);n.closePath(),this.geometries.shield=new Or(n,{depth:.12,bevelEnabled:!1}),this.geometries.shield.translate(0,0,-.06);const s=new Uo;s.moveTo(.02,.37);for(const[r,a]of[[-.22,-.035],[-.035,-.035],[-.08,-.37],[.23,.065],[.035,.065]])s.lineTo(r,a);s.closePath(),this.geometries.bolt=new Or(s,{depth:.04,bevelEnabled:!1}),this.chunks=new Map,this.entities=new Map,this.transients=new Map,this.time=0,this.gaitPhase=0,this.walkBlend=0,this.courierFacing=new Y_,this.seed=null,this.legLength=null,this.focus=new U,this.tempVector=new U,this.player=this.makeCourier(),this.scene.add(this.player),this.courierOutline=this.makeCourierOutline(),this.scene.add(this.courierOutline),this.occlusionRay=new cp,this.occlusionHits=[],this.nextOcclusionCheck=0,this.playerShadow=this.disc("#253c39",.18,.78),this.scene.add(this.playerShadow),this.deliveryBeacon=this.makeBeacon(),this.scene.add(this.deliveryBeacon),this.enemyCapacity=96,this.enemyBatches=new Map,this.initializeEnemyBatches(),this.resize(t.clientWidth||390,t.clientHeight||800)}material(t,e={}){const n=`${t}-${e.emissive||""}-${e.opacity??1}-${e.basic||!1}-${e.overlay||!1}`;if(!this.materials.has(n)){const s=e.basic?ui:pl,r={color:t,transparent:e.opacity!==void 0&&e.opacity<1,opacity:e.opacity??1,side:e.double?xn:kn};e.basic||Object.assign(r,{roughness:1,flatShading:!0,emissive:e.emissive||"#000000",emissiveIntensity:e.emissive?.65:0}),e.overlay&&Object.assign(r,{depthTest:!1,depthWrite:!1,toneMapped:!1});const a=new s(r);a.userData.overlay=!!e.overlay,this.materials.set(n,a)}return this.materials.get(n)}mesh(t,e,n,s,r,a,o=1,c=1,l=1,h={}){const u=new ve(this.geometries[e],this.material(n,h));return u.position.set(s,r,a),u.scale.set(o,c,l),u.castShadow=!h.basic&&c>.2,u.receiveShadow=!h.basic,t.add(u),u}disc(t,e,n){const s=new ve(this.geometries.circle,this.material(t,{basic:!0,opacity:e}));return s.rotation.x=-Math.PI/2,s.scale.setScalar(n),s.position.y=.045,s}makeCourier(){const t=new Qt,e=new Qt;t.add(e);const n=new Qt;e.add(n),this.mesh(n,"cone","#e99042",-.025,.7,0,.39,.38,.35);const s=[];for(const l of[-1,1]){const h=new Qt;h.position.set(.025,.67,l*.19),n.add(h),this.mesh(h,"box","#263f43",0,-.16,0,.21,.32,.21);const u=new Qt;u.position.y=-.32,h.add(u),this.mesh(u,"cylinder","#486168",0,0,0,.115,.21,.115).rotation.x=Math.PI/2,this.mesh(u,"box","#304c51",0,-.15,0,.18,.3,.19);const f=new Qt;f.position.y=-.3,u.add(f),this.mesh(f,"box","#283332",.1,-.015,0,.38,.13,.25),this.mesh(f,"box","#a7966d",.1,-.063,0,.39,.035,.26),s.push({hip:h,knee:u,ankle:f})}const r=new Qt;r.position.y=.78,e.add(r),this.mesh(r,"cylinder","#d97732",0,.22,0,.34,.66,.33),this.mesh(r,"box","#eabc77",.25,.21,-.16,.13,.28,.035),this.mesh(r,"sphere","#d9ad83",.05,.76,0,.28,.29,.26),this.mesh(r,"cylinder","#294c42",.025,.96,0,.3,.15,.29),this.mesh(r,"box","#3c6955",.16,.92,0,.5,.07,.56),this.mesh(r,"box","#eee1b5",.299,.77,-.11,.025,.08,.09),this.mesh(r,"box","#a55e36",-.35,.28,0,.31,.74,.64),this.mesh(r,"box","#e3b468",-.52,.37,0,.1,.17,.47),this.mesh(r,"box","#ede0ae",-.53,.07,0,.035,.23,.27),this.mesh(r,"box","#895b39",-.55,-.06,0,.12,.1,.66);const a=[];for(const l of[-1,1]){const h=new Qt;h.position.set(.045,.48,l*.34),r.add(h),this.mesh(h,"box","#e29a50",.015,-.16,0,.18,.33,.18),this.mesh(h,"box","#e1a568",.15,-.31,0,.36,.15,.16),this.mesh(h,"sphere","#ddb68b",.34,-.31,0,.1,.1,.095),a.push(h)}const o=new Qt;o.position.set(.61,.18,.26),r.add(o),this.mesh(o,"box","#274740",0,0,0,.74,.15,.15),this.mesh(o,"box","#d9b775",.02,.03,0,.28,.08,.19),this.mesh(o,"cylinder","#273532",.41,0,0,.075,.28,.075).rotation.z=Math.PI/2;const c=new ve(this.geometries.ring,this.material("#f5db97",{basic:!0,opacity:.7}));return c.rotation.x=-Math.PI/2,c.position.y=.06,c.scale.setScalar(.79),t.add(c),t.userData.body=e,t.userData.upper=r,t.userData.legs=s,t.userData.arms=a,t.userData.gun=o,t.userData.ring=c,t.scale.setScalar(1.46),t}makeEnemy(t="walker",e=.6){const n=new Qt,s=t==="boss",r=t==="dog"||t==="hound",a=t==="brute"||t==="tank"||s,o=new Qt;n.add(o);const c=s?"#9a4b57":a?"#ac5760":"#cf726d";if(r){this.mesh(o,"box","#904b54",0,.45,0,1,.48,.4),this.mesh(o,"ico","#d07471",.55,.65,0,.35,.28,.26);for(const p of[-.35,.35])for(const w of[-.2,.2])this.mesh(o,"box","#603d48",p,.22,w,.13,.4,.12);this.mesh(o,"cone","#693e4b",.55,.94,-.15,.12,.3,.1),this.mesh(o,"cone","#693e4b",.55,.94,.15,.12,.3,.1),this.mesh(o,"box","#f4b5a1",.83,.7,.15,.03,.08,.07,{emissive:"#ed937c"}),n.scale.setScalar(1.2)}else{if(this.mesh(o,"ico",c,0,.92,0,.44,.59,.4),this.mesh(o,"ico",a?"#ceb2a1":"#ba8f84",.04,1.54,0,.28,.32,.27),this.mesh(o,"box","#683f47",.04,.3,-.19,.19,.6,.19),this.mesh(o,"box","#683f47",.04,.3,.19,.19,.6,.19),this.mesh(o,"box",c,.19,.91,-.45,.24,.71,.23).rotation.z=-.48,this.mesh(o,"box",c,.19,.91,.45,.24,.71,.23).rotation.z=-.48,this.mesh(o,"ico","#f08b86",-.1,1.36,-.27,.19,.24,.22),this.mesh(o,"box","#fad0a5",.292,1.58,-.13,.025,.08,.07,{emissive:"#f08b86"}),this.mesh(o,"box","#fad0a5",.292,1.58,.13,.025,.08,.07,{emissive:"#f08b86"}),a){this.mesh(o,"ico","#713f4a",-.16,1.03,0,.64,.71,.6);for(let p=0;p<5;p++)this.mesh(o,"cone",p%2?"#d69088":"#e2b4a0",-.24+p%2*.3,1.7+p%3*.16,(p-2)*.2,.17,.48,.17).rotation.z=-.25}n.scale.setScalar(s?3.65:a?2.19:1.46)}const l=this.disc("#322f35",.19,r?.7:.6);n.add(l);const h=this.makeWarningRing();h.visible=!1,n.add(h);const u=new ve(this.geometries.warnDisc,this.warningMaterial(mn.red,.26,10));u.rotation.x=-Math.PI/2,u.visible=!1,n.add(u);const f=this.makeWarningLane();f.visible=!1,n.add(f),n.userData.body=o,n.userData.telegraph=h,n.userData.warningFill=u,n.userData.charge=f;const d=new ve(this.geometries.ring,this.material("#f4796f",{basic:!0,opacity:.45}));d.rotation.x=-Math.PI/2,d.position.y=.07/n.scale.y,d.scale.setScalar((e||.7)*1.35/n.scale.x),d.visible=!1,n.add(d),n.userData.arrival=d;const g=new Qt;g.position.y=r?1.32:a?2.34:2.1,g.scale.setScalar(1/n.scale.x);const v=s?2.6:a?1.9:1.45;this.mesh(g,"box","#18342e",0,0,0,v+.14,.25,.03,{basic:!0,overlay:!0});const m=this.mesh(g,"box","#b9e88b",0,0,.025,v,.13,.035,{basic:!0,overlay:!0});return g.userData.fill=m,g.userData.width=v,n.add(g),n.userData.health=g,n.userData.type=t,n}initializeEnemyBatches(){this.silhouetteBatches=new Map,this.silhouetteMaterials={edge:this.makeSilhouetteMaterial(je.edge,je.grow),fill:this.makeSilhouetteMaterial(je.fill,0)};for(const t of["walker","dog","brute","boss"]){const e=this.makeEnemy(t),n=new Map,s=new Map;e.traverse(r=>{if(!r.isMesh)return;const a=`${r.geometry.uuid}/${r.material.uuid}`,o=(n.get(a)||0)+1;n.set(a,o);let c=this.enemyBatches.get(a);if(c||(c={geometry:r.geometry,material:r.material,maxParts:1,castShadow:!1,receiveShadow:!1,used:0,mesh:null},this.enemyBatches.set(a,c)),c.maxParts=Math.max(c.maxParts,o),c.castShadow||=r.castShadow,c.receiveShadow||=r.receiveShadow,!r.material.isMeshStandardMaterial)return;const l=(s.get(r.geometry.uuid)||0)+1;s.set(r.geometry.uuid,l);let h=this.silhouetteBatches.get(r.geometry.uuid);h||(h={geometry:r.geometry,maxParts:1,used:0,fill:null,edge:null},this.silhouetteBatches.set(r.geometry.uuid,h)),h.maxParts=Math.max(h.maxParts,l)})}this.resizeEnemyBatches(this.enemyCapacity)}makeSilhouetteMaterial(t,e,n=!1){const s=new ui({color:t,depthTest:!0,depthFunc:Lr,depthWrite:!1,toneMapped:!1,fog:!1});return s.onBeforeCompile=r=>{r.uniforms.silhouetteBias=this.silhouetteBias,r.vertexShader=`uniform float silhouetteBias;
`+r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
          ${e?`transformed += sign(position) * ${e.toFixed(4)} / vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));`:""}`).replace("#include <project_vertex>",`#include <project_vertex>
 gl_Position.z -= silhouetteBias;`),n&&(r.fragmentShader=r.fragmentShader.replace("void main() {",`void main() {
 if (mod(floor(gl_FragCoord.x) + floor(gl_FragCoord.y), 2.) < .5) discard;`))},s.customProgramCacheKey=()=>`silhouette-${e}-${n}`,s}warningMaterial(t,e,n,s=!1){this.warningMaterials||=new Map;const r=`${t}-${e}-${n}-${s}`;if(!this.warningMaterials.has(r)){const a=s?this.makeSilhouetteMaterial(t,0,!0):new ui({color:t,transparent:!0,opacity:e,depthWrite:!1,toneMapped:!1});a.userData.renderOrder=n,this.warningMaterials.set(r,a)}return this.warningMaterials.get(r)}makeWarningRing(){const t=new Qt;this.geometries.warnRing||=new ws(.72,1,48),this.geometries.warnRingEdge||=new ws(.64,1.09,48),this.geometries.warnDisc||=new Fr(1,48);const e=(n,s,r)=>{const a=new ve(n,s);a.rotation.x=-Math.PI/2,a.position.y=r,t.add(a)};return e(this.geometries.warnRingEdge,this.warningMaterial(mn.dark,.62,11),.004),e(this.geometries.warnRing,this.warningMaterial(mn.red,.94,12),.008),e(this.geometries.warnRing,this.warningMaterial(mn.red,1,-4,!0),.008),e(this.geometries.warnDisc,this.warningMaterial(mn.red,1,-4,!0),.006),t}makeWarningLane(){const t=new Qt,e=[],n=[],s=(r,a,o,c,l,h)=>{const u=this.mesh(t,"box",r,0,l,0,1,.02,1,{basic:!0});u.material=this.warningMaterial(r,a,o,c),u.castShadow=u.receiveShadow=!1,h?e.push({mesh:u,...h}):n.push(u)};for(const r of[!1,!0]){s(mn.red,.3,r?-4:10,r,.02);for(const a of[-1,1])s(mn.dark,.62,r?-4:11,r,.03,{side:a,width:.36,dark:!0}),s(mn.red,.94,r?-4:12,r,.04,{side:a,width:.2});s(mn.dark,.62,r?-4:11,r,.03,{cap:!0,width:.36}),s(mn.red,.94,r?-4:12,r,.04,{cap:!0,width:.2})}return t.userData.bars=e,t.userData.fills=n,t}resizeEnemyBatches(t){this.enemyCapacity=t;for(const e of this.enemyBatches.values()){e.mesh&&(this.scene.remove(e.mesh),e.mesh.dispose());const n=new ur(e.geometry,e.material,t*e.maxParts);n.instanceMatrix.setUsage(zc),n.count=0,n.visible=!1,n.frustumCulled=!1,n.renderOrder=e.material.userData.renderOrder??(e.material.userData.overlay?30:0),n.castShadow=e.castShadow,n.receiveShadow=e.receiveShadow,this.scene.add(n),e.mesh=n}for(const e of this.silhouetteBatches.values()){for(const n of[e.edge,e.fill])n&&(this.scene.remove(n),n.dispose());e.fill=new ur(e.geometry,this.silhouetteMaterials.fill,t*e.maxParts),e.edge=new ur(e.geometry,this.silhouetteMaterials.edge,t*e.maxParts),e.edge.instanceMatrix=e.fill.instanceMatrix,e.fill.instanceMatrix.setUsage(zc),e.edge.renderOrder=-3,e.fill.renderOrder=-2;for(const n of[e.edge,e.fill])n.count=0,n.visible=!1,n.frustumCulled=!1,this.scene.add(n)}}batchEnemy(t){t.updateMatrixWorld(!0);const e=t.userData.occluded;t.traverseVisible(n=>{if(!n.isMesh)return;const s=this.enemyBatches.get(`${n.geometry.uuid}/${n.material.uuid}`);if(!s||s.used>=s.mesh.instanceMatrix.count)return;s.mesh.setMatrixAt(s.used++,n.matrixWorld);const r=e&&n.material.isMeshStandardMaterial&&this.silhouetteBatches.get(n.geometry.uuid);r&&r.used<r.fill.instanceMatrix.count&&r.fill.setMatrixAt(r.used++,n.matrixWorld)})}finishEnemyBatches(){for(const t of this.enemyBatches.values())t.mesh.count=t.used,t.mesh.visible=t.used>0,t.used&&(t.mesh.instanceMatrix.clearUpdateRanges(),t.mesh.instanceMatrix.addUpdateRange(0,t.used*16),t.mesh.instanceMatrix.needsUpdate=!0);for(const t of this.silhouetteBatches.values())t.fill.count=t.edge.count=t.used,t.fill.visible=t.edge.visible=t.used>0,t.used&&(t.fill.instanceMatrix.clearUpdateRanges(),t.fill.instanceMatrix.addUpdateRange(0,t.used*16),t.fill.instanceMatrix.needsUpdate=!0)}chunkOccluders(t){if(t.userData.occluders)return t.userData.occluders;const e=[],n=new ae;return t.updateMatrixWorld(!0),t.traverse(s=>{if(!s.isInstancedMesh)return;s.geometry.boundingBox||s.geometry.computeBoundingBox();const{min:r,max:a}=s.geometry.boundingBox;for(let o=0;o<s.count;o++){s.getMatrixAt(o,n),n.premultiply(s.matrixWorld);const c=n.elements;let l=1/0,h=1/0,u=1/0,f=-1/0,d=-1/0,g=-1/0;for(let v=0;v<8;v++){const m=v&1?a.x:r.x,p=v&2?a.y:r.y,w=v&4?a.z:r.z,x=c[0]*m+c[4]*p+c[8]*w+c[12],y=c[1]*m+c[5]*p+c[9]*w+c[13],A=c[2]*m+c[6]*p+c[10]*w+c[14];x<l&&(l=x),x>f&&(f=x),y<h&&(h=y),y>d&&(d=y),A<u&&(u=A),A>g&&(g=A)}d>=je.minTop&&d-h>=1&&Math.min(f-l,g-u)>=.35&&Math.max(f-l,g-u)>=1&&e.push(l,h,u,f,d,g)}}),t.userData.occluders=new Float32Array(e)}enemyOccluded(t,e){const{x:n,y:s,z:r}=$_,a=je.heights[t.userData.type]||2.8,o=t.position.x,c=t.position.z;for(const l of this.chunks?.values()||[]){const h=this.chunkOccluders(l);for(let u=0;u<h.length;u+=6){const f=Math.max(0,(h[u]-e-o)/n,(h[u+2]-e-c)/r),d=Math.min(90,(h[u+3]+e-o)/n,(h[u+5]+e-c)/r);if(!(f>=d))for(const g of je.rays){const v=t.position.y+a*g;if(Math.max(f,(h[u+1]-v)/s)<Math.min(d,(h[u+4]-v)/s))return!0}}}return!1}updateEnemyOcclusion(t,e){const n=t.userData;this.time>=(n.nextOcclusion??0)&&(n.nextOcclusion=this.time+je.interval*(1+ne(n.occlusionPhase,7)*.4),this.enemyOccluded(t,e)&&(n.occludedUntil=this.time+je.hold)),n.occluded=this.time<(n.occludedUntil??0)}makeCourierOutline(){const t=new Qt,e=this.player.userData.body.clone(!0),n=this.player.userData.body.clone(!0);this.outlineMaterial=new ui({color:"#ffae35",depthTest:!1,depthWrite:!1,toneMapped:!1}),this.outlineEdgeMaterial=new ui({color:"#132d29",depthTest:!1,depthWrite:!1,toneMapped:!1});const s=[];this.player.userData.body.traverse(a=>s.push(a)),this.outlinePose=[];let r=0;return e.traverse(a=>{this.outlinePose.push([s[r++],a]),a.isMesh&&(a.material=this.outlineMaterial,a.castShadow=!1,a.receiveShadow=!1,a.renderOrder=21)}),r=0,n.traverse(a=>{this.outlinePose.push([s[r++],a]),a.isMesh&&(a.material=this.outlineEdgeMaterial,a.userData.occlusionEdge=!0,a.castShadow=!1,a.receiveShadow=!1,a.renderOrder=20)}),t.add(n),t.add(e),t.visible=!1,t}animateCourier(t,e,n,s){const r=Math.min(1,Math.max(0,e)/3);this.walkBlend+=(r-this.walkBlend)*(1-Math.exp(-Math.max(0,n)*12)),e>.08&&n>0&&(this.gaitPhase+=n*(3.4+Math.min(12,e)*.95));const a=this.walkBlend;this.player.rotation.y=Math.PI/2-(t.angle||0);const o=this.player.userData.body,c=this.player.userData.upper;c.rotation.y=(t.angle||0)-this.courierFacing.update(t,s),c.rotation.z=Math.sin(this.gaitPhase)*.025*a,o.position.y=Math.abs(Math.sin(this.gaitPhase))*.023*a+Math.sin(this.time*2)*.005*(1-a),this.player.userData.legs.forEach((l,h)=>{const u=(this.gaitPhase+h*Math.PI)%(Math.PI*2),f=u<Math.PI,d=-Math.cos(u)*.225*a,v=.67-(.09+(f?Math.sin(u)*.145:0)*a-o.position.y),m=.32,p=.3,w=-Math.acos(ia.clamp((d*d+v*v-m*m-p*p)/(2*m*p),-1,1)),x=Math.atan2(d,v)-Math.atan2(p*Math.sin(w),m+p*Math.cos(w));l.hip.rotation.z=x,l.knee.rotation.z=w,l.ankle.rotation.z=-(x+w)+(f?-.12*Math.sin(u)*a:0)}),this.player.userData.arms[0].rotation.z=-.08+Math.sin(this.gaitPhase+Math.PI)*.28*a,this.player.userData.arms[1].rotation.z=-.08+Math.sin(this.gaitPhase)*.1*a,this.player.userData.gun.rotation.z=Math.sin(this.gaitPhase)*.035*a}xrayMaterial(t){this.xrayMaterials||=new Map,this.xrayUniforms||={xrayCenters:{value:Array.from({length:4},()=>new pe)}};let e=this.xrayMaterials.get(t);return e||(e=t.clone(),e.userData.xray=!0,e.onBeforeCompile=n=>{n.uniforms.xrayCenters=this.xrayUniforms.xrayCenters,n.vertexShader=`varying float vXrayY;
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
            if (c.w > 0.) cut = max(cut, step(c.z + ${oi.margin.toFixed(2)}, xv.z) * (1. - smoothstep(c.w * .65, c.w, length(xv.xy - c.xy))));
          }
          ivec2 q = ivec2(mod(gl_FragCoord.xy, 4.));
          if (vXrayY > ${oi.height.toFixed(2)} && cut > (xrayBayer[q.x + q.y * 4] + .5) / 16.) discard;
        }`)},e.customProgramCacheKey=()=>"xray",this.xrayMaterials.set(t,e),e)}applyXray(t){t.userData.xray||(t.userData.xray=!0,t.traverse(e=>{const n=e.material;e.isInstancedMesh&&n.isMeshStandardMaterial&&!n.vertexColors&&!n.transparent&&(e.material=this.xrayMaterial(n))}))}updateXray(){this.xrayUniforms||={xrayCenters:{value:Array.from({length:4},()=>new pe)}};const t=this.xrayUniforms.xrayCenters.value,e=this.camera.matrixWorldInverse;let n=0;if(this.xrayEnabled===!1)for(const a of t)a.set(0,0,0,0);if(this.xrayEnabled===!1)return;const s=(a,o,c,l)=>{const h=this.tempVector.set(a,o,c).applyMatrix4(e);t[n++].set(h.x,h.y,h.z,l)};s(this.player.position.x,this.player.position.y+1.05*this.player.scale.y,this.player.position.z,oi.radius);const r=[];for(const[a,o]of this.entities){if(!o.userData.occluded||!a.startsWith("enemy-"))continue;const c=Math.hypot(o.position.x-this.player.position.x,o.position.z-this.player.position.z);c<oi.range&&r.push([c,o])}r.sort((a,o)=>a[0]-o[0]);for(const[,a]of r.slice(0,oi.fights))s(a.position.x,a.position.y+je.heights[a.userData.type]*.5,a.position.z,oi.fightRadius*(a.userData.type==="boss"?1.8:a.userData.type==="brute"?1.3:1));for(;n<t.length;n++)t[n].set(0,0,0,0)}updateCourierVisibility(){if(this.time>=this.nextOcclusionCheck){this.nextOcclusionCheck=this.time+1/6;const n=this.player.position.clone();n.y+=1.05*this.player.scale.y;const s=n.clone().project(this.camera);this.occlusionRay.setFromCamera({x:s.x,y:s.y},this.camera),this.occlusionRay.far=Math.max(0,this.occlusionRay.ray.origin.distanceTo(n)-.25),this.scene.updateMatrixWorld(!0);let r=!1;for(const a of this.chunks.values())if(this.occlusionHits.length=0,this.occlusionRay.intersectObject(a,!0,this.occlusionHits),this.occlusionHits.some(o=>!(this.xrayEnabled!==!1&&o.object.material?.userData.xray&&o.point.y>oi.height))){r=!0;break}this.courierHidden=r}const t=this.camera.matrixWorldInverse,e=this.tempVector.set(this.player.position.x,this.player.position.y+1.05*this.player.scale.y,this.player.position.z).applyMatrix4(t);this.crowdVector||=new U;for(const[n,s]of this.entities){if(!n.startsWith("enemy-"))continue;const r=je.body[s.userData.type]||je.body.walker,a=this.crowdVector.set(s.position.x,s.position.y+r[1]*.45,s.position.z).applyMatrix4(t);if(Math.abs(a.x-e.x)<r[0]+.5&&Math.abs(a.y-e.y)<r[1]+.6&&a.z+r[0]>e.z-.3){this.crowdedUntil=this.time+.2;break}}if(this.courierOutline.visible=!!this.courierHidden||this.time<(this.crowdedUntil??0),!!this.courierOutline.visible){this.courierOutline.position.copy(this.player.position),this.courierOutline.rotation.copy(this.player.rotation),this.courierOutline.scale.copy(this.player.scale);for(const[n,s]of this.outlinePose)s.position.copy(n.position),s.rotation.copy(n.rotation),s.scale.copy(n.scale),s.userData.occlusionEdge&&s.scale.multiplyScalar(1.2)}}makeProp(t,e){const n=new Qt,s=t.corrupted?"#494748":J_.bark,r=t.corrupted?"#697166":e.trees,a=t.variant||0;switch(t.type){case"tree":case"pine":case"palm":{const o=t.type==="palm";if(this.mesh(n,"cylinder",s,0,1.15,0,.16,2.3,.16),o)for(let c=0;c<6;c++){const l=this.mesh(n,"ico",r,Math.cos(c*1.047)*.82,2.6,Math.sin(c*1.047)*.82,1.2,.2,.4);l.rotation.y=-c*1.047}else t.type==="pine"||a===1?(this.mesh(n,"cone",r,0,2.35,0,1.18,2.4,1.18),this.mesh(n,"cone",t.corrupted?"#545e59":"#739383",0,3.15,0,.88,1.85,.88)):(this.mesh(n,"ico",r,0,2.72,0,1.4,1.33,1.2),this.mesh(n,"ico",t.corrupted?"#7b796a":"#82a687",.65,3,.23,.82,.91,.81),this.mesh(n,"ico",r,-.65,2.43,-.35,.93,.92,.93));t.corrupted&&this.addGrowth(n,0,0,.8);break}case"building":{const o=e.id==="village",c=o?2.4+a*.3:3.3+a*.65,l=["#b5b397","#a0ac99","#c2b49d","#8d9a8c"][a];if(this.mesh(n,"box",l,0,c/2,0,3.9,c,3.2),this.mesh(n,"box","#68796f",0,.19,0,4.06,.38,3.37),o){const h=this.mesh(n,"cone",a%2?"#826e62":"#738279",0,c+.65,0,3.25,1.3,2.55);h.rotation.y=Math.PI/4,this.mesh(n,"box","#56695e",.7,c+.65,.4,.35,1.6,.35)}else this.mesh(n,"box","#d2c6a7",0,c+.06,0,4.13,.17,3.43),this.mesh(n,"box","#697b71",-.9,c+.35,-.5,1.07,.62,.8),this.mesh(n,"cylinder","#8a9385",.87,c+.5,.2,.43,.85,.43),this.mesh(n,"box","#525f59",.9,c+.97,.2,.96,.13,.96),this.mesh(n,"box","#b7b99c",0,c+.21,-1.57,4.02,.29,.14),this.mesh(n,"box","#b7b99c",-1.97,c+.21,0,.14,.29,3.32);for(let h=0;h<Math.floor(c/1.5);h++){for(let u=0;u<3;u++)this.mesh(n,"box","#526f6a",-1.15+u*1.13,1.1+h*1.45,1.615,.62,.72,.025),this.mesh(n,"box","#c1c09f",-1.15+u*1.13,.7+h*1.45,1.66,.77,.12,.14);for(let u=0;u<2;u++)this.mesh(n,"box","#526f6a",1.965,1.1+h*1.45,-.82+u*1.5,.025,.72,.6)}this.mesh(n,"box","#394f43",0,.78,1.64,.75,1.56,.05),this.mesh(n,"box","#998d70",0,.08,1.89,1.04,.16,.66),t.corrupted&&(this.addGrowth(n,1.75,.01,1.5),this.mesh(n,"box","#484e4b",-.4,c*.7,1.635,.08,c*.65,.045).rotation.z=.31);break}case"car":{this.mesh(n,"box",a%2?"#9b7f69":"#889b91",0,.46,0,1.8,.56,.95),this.mesh(n,"box","#719086",-.13,.89,0,1.02,.51,.86),this.mesh(n,"box","#4f6865",-.13,.98,.435,.82,.29,.022),this.mesh(n,"box","#4f6865",-.13,.98,-.435,.82,.29,.022);for(const o of[-.59,.59])for(const c of[-.47,.47])this.mesh(n,"cylinder","#364847",o,.24,c,.24,.12,.24).rotation.x=Math.PI/2;this.mesh(n,"box","#d1c497",.92,.52,0,.06,.15,.64),this.mesh(n,"box","#735a4f",-.44,.75,.45,.5,.05,.11);break}case"mountain":{const o=Kl[e.id]||Kl.mountain,c=5.5+a*1.2,l=this.mesh(n,"cone",o[0],0,c/2-.2,0,4.6,c,4.4);l.rotation.y=a*.7,this.mesh(n,"cone",o[1],1.6,c*.32,.9,3,c*.62,2.8).rotation.y=.4,this.mesh(n,"cone",o[2],-1.5,c*.26,-1,2.7,c*.5,2.6).rotation.y=1.1,this.mesh(n,"cone",o[1],-.4,c*.42,1.6,2.2,c*.7,2).rotation.set(.12,2,-.1);for(let h=0;h<5;h++)this.mesh(n,"ico",o[h%3],Math.cos(h*1.3)*3.6,.35,Math.sin(h*1.3)*3.4,.7+h%2*.3,.5,.6).rotation.y=h;o[3]&&(this.mesh(n,"cone",o[3],0,c*.82,0,1.75,c*.38,1.7).rotation.y=a*.7);break}case"rubble":{for(let o=0;o<5;o++){const c=this.mesh(n,o%2?"box":"ico",["#8c9181","#717c72","#a39e85"][o%3],Math.cos(o*2.4)*.55,.15+o%2*.12,Math.sin(o*2.4)*.48,.35+o%3*.13,.26+o%2*.15,.38);c.rotation.y=o*.9,c.rotation.z=o*.23}this.mesh(n,"box","#685c4a",.1,.23,-.35,1.65,.1,.13).rotation.y=.37;break}case"rock":{this.mesh(n,"ico",ql[e.id]||"#849084",0,.55,0,1.3,.92,1.1),this.mesh(n,"ico",e.id==="tundra"?"#eef3f1":"#aab09b",-.68,.32,.44,.66,.5,.66),t.corrupted&&this.addGrowth(n,.6,.3,.4);break}case"cactus":{this.mesh(n,"cylinder","#788d73",0,1.08,0,.22,2.1,.22),this.mesh(n,"cylinder","#879b7a",-.42,1.1,0,.15,.95,.15),this.mesh(n,"box","#788d73",-.24,.7,0,.58,.25,.25),this.mesh(n,"cylinder","#879b7a",.42,1.55,0,.15,.76,.15),this.mesh(n,"box","#788d73",.25,1.24,0,.56,.22,.25);break}case"pole":{this.mesh(n,"cylinder","#746c59",0,2.1,0,.075,4.2,.075),this.mesh(n,"box","#596860",0,3.9,0,1.52,.12,.14),this.mesh(n,"box","#d0c29f",-.5,4.06,0,.14,.22,.14),this.mesh(n,"box","#d0c29f",.5,4.06,0,.14,.22,.14);for(let o=0;o<4;o++){const c=this.mesh(n,"box","#4f6056",-.5,3.65+Math.abs(o-1.5)*.23,-4.5-o*9,.035,.035,9.1);c.rotation.x=(o<2?1:-1)*.05}break}case"sign":{this.mesh(n,"box","#7d7a61",0,.83,0,.08,1.66,.1),this.mesh(n,"box","#c6b784",0,1.6,0,.85,.47,.12),this.mesh(n,"box","#596e61",.04,1.6,.075,.39,.075,.018),this.mesh(n,"box","#596e61",.2,1.6,.078,.12,.2,.018).rotation.z=-.75;break}case"carpile":{const o=["#5b4a43","#6f5446","#4c4a47","#7d5b45"];this.mesh(n,"ico","#3a3633",0,.05,0,2.2,.12,1.9);for(let c=0;c<3;c++){const l=new Qt,h=c*2.1+a,u=c===2;l.position.set(Math.cos(h)*(u?.2:.85),u?.9:0,Math.sin(h)*(u?.2:.85)),l.rotation.set(u?.3:0,h*1.3,u?.22:c?.1:-.08),this.mesh(l,"box",o[(c+a)%4],0,.42,0,1.9,.55,1),this.mesh(l,"box","#3d3a38",-.15,.85,0,1.05,.42,.9);for(const f of[-.6,.6])this.mesh(l,"cylinder","#262828",f,.22,.5,.23,.14,.23).rotation.x=Math.PI/2;n.add(l)}this.mesh(n,"cylinder","#262828",1.35,.2,-1.05,.36,.4,.36);break}case"collapsed":{const o=["#a0a491","#8d9a8c","#b5ad97","#9a8f7e"][a];this.mesh(n,"box",o,-1.4,1.6,-.2,.5,3.2,3.6),this.mesh(n,"box",o,.2,1.1,-1.9,2.9,2.2,.45),this.mesh(n,"box",o,.9,.55,1.6,1.4,1.1,.4).rotation.y=.3,this.mesh(n,"box","#3b4a45",-1.13,2.1,-.6,.05,.7,.6);const c=this.mesh(n,"box","#7f857a",.4,.95,.1,3.1,.3,3.3);c.rotation.z=.52;for(let l=0;l<5;l++)this.mesh(n,l%2?"box":"ico",["#717c72","#8c9181","#a39e85"][l%3],Math.cos(l*1.9)*1.7,.25,Math.sin(l*1.9)*1.6,.5+l%3*.2,.4,.5).rotation.y=l;for(let l=0;l<3;l++)this.mesh(n,"box","#5a4a40",-1.2+l*.25,3.35,-.8+l*.5,.04,.5,.04).rotation.z=.3-l*.25;break}case"rubblewall":{for(let o=0;o<7;o++)this.mesh(n,o%2?"box":"ico",["#8c9181","#717c72","#a39e85"][o%3],Math.cos(o*2.4)*(o?1.2:0),o?.45:.95,Math.sin(o*2.4)*(o?1.1:0),.9+o%3*.3,o?.7:1.2,.9).rotation.set(o*.3,o*.9,o*.2);this.mesh(n,"box","#c2b49d",.3,.45,1.5,1.8,.9,.45).rotation.y=.4,this.mesh(n,"box","#685c4a",-.2,1.2,.1,2.6,.12,.14).rotation.set(.3,.6,.25);break}case"containers":case"container":{const o=["#b0563f","#3f7a8a","#c49a3a","#5f7f4f"],c=t.type==="containers"&&a%2?2:1;for(let l=0;l<c;l++){const h=new Qt;h.position.y=l*2.5,h.rotation.y=l*.09,this.mesh(h,"box",o[(a+l*3)%4],0,1.25,0,2.4,2.45,5.9);for(const u of[-1.9,-.65,.65,1.9])this.mesh(h,"box","#3d4744",0,1.25,u,2.46,2.2,.07);this.mesh(h,"box","#e1d2a8",0,1.3,2.97,1.5,.4,.04),n.add(h)}break}case"pit":case"crevasse":case"mud":case"water":case"ditch":case"pool":{const o={pit:2.3,crevasse:2.4,mud:2.6,water:3.2,ditch:2.5,pool:1.5}[t.type],c=t.type==="crevasse"||t.type==="ditch"?1.25:1,l={pit:e.id==="cliff"?"#141a1c":"#211c18",crevasse:"#21405a",mud:"#4b3b2b",water:e.water,ditch:e.water,pool:e.water}[t.type],h={pit:e.id==="burned"?"#4a4038":"#6b5a45",crevasse:"#e6f1f2",mud:"#6a5640",water:"#7c8a63",ditch:"#6b5a45",pool:"#6d7a52"}[t.type];this.mesh(n,"cylinder",h,0,.025,0,o*1.02/c,.05,o*1.02*c),this.mesh(n,"cylinder",l,0,.05,0,o*.86/c,.05,o*.86*c),(t.type==="pit"||t.type==="crevasse")&&this.mesh(n,"cylinder",t.type==="pit"?"#0f0d0c":"#152b3d",0,.07,0,o*.55/c,.05,o*.6*c);const u=t.type==="pool"?3:7;for(let f=0;f<u;f++){const d=f*6.28/u+a,g=Math.cos(d)*o*.95/c,v=Math.sin(d)*o*.95*c;t.type==="crevasse"?this.mesh(n,"cone",f%2?"#d9eef2":"#bfe0ea",g,.35,v,.3,.8+f%3*.3,.3).rotation.z=Math.cos(d)*.5:["water","ditch","pool"].includes(t.type)&&f%2?this.mesh(n,"cone","#869a5a",g,.45,v,.09,.9,.09):this.mesh(n,"ico",h,g,.12,v,.45,.25,.4).rotation.y=d}if(t.type==="mud")for(let f=0;f<3;f++)this.mesh(n,"ico","#5d4a37",(f-1)*.7,.08,f%2*.6,.18,.1,.18);if(t.type==="pit"&&e.id==="burned")for(let f=0;f<3;f++)this.mesh(n,"box","#f08a3c",(f-1)*.6,.1,(f%2-.5)*.7,.16,.06,.16,{emissive:"#e0602a"});break}case"logs":{const o=t.charred?"#2e2a28":"#6b5a44",c=t.charred?"#4a3a32":"#b39a6c";for(const[l,h,u]of[[-.5,.45,0],[.5,.45,.3],[0,1.2,-.2]])this.mesh(n,"cylinder",o,l,h,u,.45,4.9,.45).rotation.x=Math.PI/2,this.mesh(n,"cylinder",c,l,h,u+2.46,.4,.04,.4).rotation.x=Math.PI/2;if(this.mesh(n,"ico",t.charred?"#3a3330":"#5e5444",-.4,.9,-2.5,.9,1.1,.3),this.mesh(n,"box",o,.9,.9,-.6,.12,.12,1.4).rotation.set(.4,.5,.6),t.charred)for(let l=0;l<3;l++)this.mesh(n,"box","#f08a3c",-.3+l*.35,.92,-1+l*.9,.14,.05,.14,{emissive:"#e0602a"});else this.mesh(n,"ico","#4d7a45",.5,.85,1.2,.5,.15,.9);break}case"thicket":{const o=e.id==="burned"?"#3a3632":"#2f5a3c";for(let c=0;c<5;c++)this.mesh(n,"ico",c%2?o:e.trees,Math.cos(c*1.3)*(c?1.1:0),.9+c%2*.35,Math.sin(c*1.3)*(c?1:0),1.15-c%2*.15,1.1+c%3*.3,1.05);for(let c=0;c<7;c++)this.mesh(n,"cone","#6a4a3a",Math.cos(c*.9)*1.7,.9+c%3*.4,Math.sin(c*.9)*1.6,.08,.9,.08).rotation.set(Math.sin(c*.9)*1.1,0,-Math.cos(c*.9)*1.1);for(let c=0;c<3;c++)this.mesh(n,"ico","#c25a54",Math.cos(c*2.1)*.9,1.75,Math.sin(c*2.1)*.8,.12,.12,.12);break}case"rockfall":{const o=ql[e.id]||"#849084";for(const[c,l,h,u]of[[0,.9,0,1.4],[1.2,.55,.8,1],[-1.1,.5,.9,.85],[.6,.45,-1.2,.9],[-.9,.4,-.9,.7],[.2,1.9,.3,.7]])this.mesh(n,"ico",u<.8?e.id==="tundra"?"#eef3f1":"#aab09b":o,c,l,h,u,u*.82,u*.95).rotation.set(c,h,l);break}case"cliff":{const o=e.id==="canyon",c=o?["#a9583a","#c9774a","#9c4e33","#c06a42"]:["#7f8c84","#98a397","#8a978c","#a3ad9f"],l=4.4+a*.7;for(let h=0;h<4;h++){const u=this.mesh(n,"box",c[h],(h%2-.5)*.35,l*(h+.5)/4,(h%3-1)*.3,4.5-h*.45,l/4+.05,4.6-h*.35);u.rotation.y=(h-1.5)*.12}this.mesh(n,"ico",o?"#8a8a4a":e.id==="mountain"?"#e3e8e0":"#5d7d64",0,l+.05,0,1.6,.25,1.6),this.mesh(n,"ico",c[1],1.8,.5,1.6,.9,.7,.8);break}case"dune":{this.mesh(n,"ico",e.verge,0,0,0,3.4,1.9,3.1),this.mesh(n,"ico","#efc27a",.9,.55,-.6,1.9,1.5,1.6),this.mesh(n,"cone","#a29c74",-2.2,.3,1.8,.14,.6,.14);break}case"icewall":{const o=["#bfe3ea","#a5d3df","#d9f0f3"];for(let c=0;c<4;c++)this.mesh(n,"box",o[c%3],(c%2-.5)*.5,.7+Math.floor(c/2)*1.35,(c<2?c-.5:c-2.5)*2.1,2.6-Math.floor(c/2)*.5,1.4,2.2).rotation.y=(c-1.5)*.15;this.mesh(n,"box","#f2f6f4",0,2.8,0,1.9,.2,3.8),this.mesh(n,"cone","#d9f0f3",.9,3.2,1,.3,1.1,.3);break}case"hedge":{this.mesh(n,"box","#3f6e3c",0,.95,0,2.1,1.9,4.3);for(let o=0;o<4;o++)this.mesh(n,"ico",o%2?"#4f8048":"#467640",(o%2-.5)*.6,1.95,-1.6+o*1.07,.8,.5,.7);this.mesh(n,"box","#7d6a4f",-1.15,.6,1.8,.12,1.2,.12);break}case"haywall":{for(const[o,c,l]of[[-.75,.72,0],[.75,.72,0],[0,1.95,.1]])this.mesh(n,"cylinder","#d6b25a",o,c,l,.72,1.3,.72).rotation.x=Math.PI/2,this.mesh(n,"cylinder","#e8cb7a",o,c,l+.66,.55,.03,.55).rotation.x=Math.PI/2;this.mesh(n,"box","#8a7352",0,.06,1.2,2.4,.12,.7);break}case"deadtree":{this.mesh(n,"cylinder","#5e5a4c",0,1.5,0,.16,3,.16),this.mesh(n,"box","#5e5a4c",.35,2.4,0,.09,1.1,.09).rotation.z=-.7,this.mesh(n,"box","#5e5a4c",-.3,2.8,.1,.08,.9,.08).rotation.z=.8,this.mesh(n,"box","#6f7f5a",.55,2.3,0,.05,.5,.05);break}case"reeds":{for(let o=0;o<5;o++){const c=Math.cos(o*2.3)*.35,l=Math.sin(o*2.3)*.3,h=.9+o%3*.25;this.mesh(n,"cone",o%2?"#8a9a5a":"#a0a866",c,h/2,l,.07,h,.07),o%2===0&&this.mesh(n,"box","#6a4a32",c,h+.05,l,.07,.22,.07)}break}case"charred":{this.mesh(n,"cylinder","#2e2a28",0,1.7,0,.27,3.4,.27),this.mesh(n,"cone","#2e2a28",0,3.75,0,.22,.7,.22),this.mesh(n,"box","#2e2a28",.45,2.5,0,.12,1.3,.12).rotation.z=-.75,this.mesh(n,"box","#3a3330",-.4,3,.1,.1,1,.1).rotation.z=.8,this.mesh(n,"ico","#3a3330",0,.08,0,1,.16,.9);for(const o of[1.2,2.3])this.mesh(n,"box","#f08a3c",.12,o,.26,.1,.3,.04,{emissive:"#e0602a"});break}case"embers":{this.mesh(n,"ico","#4a4440",0,.03,0,.8,.06,.7);for(let o=0;o<3;o++)this.mesh(n,"ico","#ef8a3c",(o-1)*.3,.08,o%2*.25,.1,.07,.1,{emissive:"#e0602a"});break}case"mesa":{const o=["#b0603f","#c9774a","#9c4e33"];this.mesh(n,"box",o[0],0,1.3,0,3.8,2.6,3.6).rotation.y=.2,this.mesh(n,"box",o[1],.1,3.3,0,3.2,1.6,3.1).rotation.y=-.15,this.mesh(n,"box",o[2],-.1,4.6,.1,2.8,1.1,2.7).rotation.y=.3,this.mesh(n,"box","#8a8a4a",-.1,5.2,.1,2.6,.12,2.5).rotation.y=.3,this.mesh(n,"ico",o[1],1.9,.4,1.5,.8,.6,.7);break}case"arch":{for(const o of[-1,1])this.mesh(n,"box","#b0603f",o*2.6,1.9,0,1.4,3.8,1.5).rotation.y=o*.1,this.mesh(n,"ico","#9c4e33",o*2.8,.4,.4,.8,.5,.7);this.mesh(n,"box","#c9774a",0,4.25,0,7,1.1,1.5),this.mesh(n,"box","#8a8a4a",0,4.85,0,6,.12,1.3);break}case"archleg":break;case"forksign":{this.mesh(n,"cylinder","#7d6a4f",0,1.25,0,.09,2.5,.09),this.mesh(n,"ico","#8f9688",0,.18,0,.45,.3,.45),this.mesh(n,"box",e.ground,(a?1:-1)*.42,1.05,0,.72,.95,.06),this.mesh(n,"box",e.trees,(a?1:-1)*.42,.62,0,.72,.14,.07),this.mesh(n,"box","#eddfb1",(a?1:-1)*.42,1.55,0,.8,.08,.08),this.mesh(n,"cone","#ef9f60",0,2.75,0,.14,.32,.14);for(const[o,c,l]of[[0,"#eddfb1",2.25],[(a?-1:1)*.75,"#ef9f60",1.75]]){const h=new Qt;h.position.y=l,h.rotation.y=o,this.mesh(h,"box",c,0,0,-.5,.1,.34,1.15),this.mesh(h,"cone",c,0,0,-1.25,.3,.4,.1).rotation.x=-Math.PI/2,n.add(h)}break}case"cairn":{for(let o=0;o<4;o++)this.mesh(n,"ico",o%2?"#a7ab98":"#8f9688",o%2*.08,.22+o*.32,0,.62-o*.12,.24,.55-o*.1).rotation.y=o;this.mesh(n,"box","#7d6a4f",.05,1.6,0,.05,.9,.05),this.mesh(n,"box","#ef9f60",.25,1.9,0,.4,.22,.03);break}case"lantern":{this.mesh(n,"cylinder","#5b4a3c",0,.8,0,.06,1.6,.06),this.mesh(n,"box","#5b4a3c",.14,1.58,0,.34,.05,.05),this.mesh(n,"box","#ffd27a",.28,1.4,0,.16,.22,.16,{emissive:"#f1b44f"}),this.mesh(n,"box","#3c3a36",.28,1.54,0,.22,.05,.22),this.mesh(n,"box",e.ground,-.18,1.32,0,.3,.2,.02);break}case"gatepillar":{const o=Gi[e.id]||Gi.city;if(o.timber)for(const[c,l]of[[-.4,-.4],[.4,-.4],[-.4,.4],[.4,.4]])this.mesh(n,"cylinder",o.wall[0],c,2.4,l,.32,4.8,.32),this.mesh(n,"cone",o.wall[1],c,5.05,l,.32,.5,.32);else this.mesh(n,"box",o.wall[0],0,2.2,0,1.6,4.4,1.6),this.mesh(n,"box",o.cap,0,4.5,0,1.9,.3,1.9),this.mesh(n,"box",o.wall[1],0,.25,0,1.9,.5,1.9);this.mesh(n,"box","#ffd27a",0,4.95,0,.3,.4,.3,{emissive:"#f1b44f"}),this.mesh(n,"box","#d76465",0,3.3,.85,1.1,1.4,.04);break}case"gatewall":{const o=Gi[e.id]||Gi.city,c=o.wall[a%o.wall.length];if(o.timber){for(let l=0;l<6;l++)this.mesh(n,"cylinder",o.wall[(l+a)%2],-1.95+l*.78,1.1+l%3*.12,0,.36,2.2+l%3*.25,.36),this.mesh(n,"cone",o.cap,-1.95+l*.78,2.45+l%3*.25,0,.36,.5,.36);this.mesh(n,"box",o.cap,0,1.4,.38,4.6,.16,.1)}else{this.mesh(n,"box",c,0,.75,0,4.5,1.5,1.1),this.mesh(n,"box",o.cap,0,1.55,0,4.6,.14,1.2);for(let l=0;l<4;l++)this.mesh(n,"ico",o.top,-1.6+l*1.05,1.85,(l%2-.5)*.3,.5,.26,.34)}for(let l=0;l<3;l++)this.mesh(n,"box","#ef9f60",-1.4+l*1.4,.75,.58,.5,.18,.02).rotation.z=.6;break}case"planter":case"plazarim":{const o=t.type==="planter"?"planter":K_[e.id]||"planter";if(o==="planter")this.mesh(n,"box","#8d8a78",0,.25,0,.9,.5,.9),this.mesh(n,"ico","#5f8a55",0,.62,0,.48,.32,.46);else if(o==="stone")this.mesh(n,"box","#9aa196",0,1.1,0,.8,2.2,.6).rotation.z=(a-1.5)*.08,this.mesh(n,"ico","#5f7f5a",0,2.2,0,.45,.14,.35),this.mesh(n,"ico","#8f9688",.5,.2,.3,.4,.3,.35);else if(o==="post")this.mesh(n,"cylinder","#8a7352",0,.8,0,.2,1.6,.2),this.mesh(n,"cylinder","#e8dcc0",0,1.2,0,.24,.12,.24),this.mesh(n,"ico","#d76465",.35,.25,0,.25,.25,.25);else if(o==="block")this.mesh(n,"box",e.id==="canyon"?"#b0603f":"#c98c5c",0,.45,0,1.2,.9,.9).rotation.y=a*.3,this.mesh(n,"box",e.id==="canyon"?"#c9774a":"#d8b47c",.1,1.1,0,.8,.45,.7).rotation.y=-a*.2;else if(o==="ice")this.mesh(n,"cone","#cfeaf0",0,.8,0,.4,1.6,.4).rotation.z=.1,this.mesh(n,"cone","#a9d6e2",.4,.45,.2,.26,.9,.26).rotation.z=-.3;else if(o==="reeds"){this.mesh(n,"cylinder","#8a7352",0,.6,0,.12,1.2,.12);for(let c=0;c<4;c++)this.mesh(n,"cone","#a0a866",Math.cos(c*1.6)*.3,.55,Math.sin(c*1.6)*.3,.07,1.1,.07)}else o==="stump"?(this.mesh(n,"cylinder","#2e2a28",0,.45,0,.45,.9,.45),this.mesh(n,"box","#f08a3c",.1,.9,.1,.2,.05,.2,{emissive:"#e0602a"})):o==="hay"?this.mesh(n,"cylinder","#d6b25a",0,.62,0,.62,1.1,.62).rotation.x=Math.PI/2:(this.mesh(n,"cylinder",a%2?"#9c705b":"#5f7f4f",0,.55,0,.42,1.1,.42),this.mesh(n,"cylinder","#3d4744",0,1.12,0,.44,.06,.44));break}case"outpost":{this.mesh(n,"box","#c2b49d",0,1.1,0,3.4,2.2,3);for(const o of[-1,1])this.mesh(n,"box",e.trees,o*.95,2.75,0,2.2,.18,3.4).rotation.z=-o*.6;this.mesh(n,"box","#5a4a40",0,.9,1.51,.8,1.8,.04),this.mesh(n,"box","#ffd27a",.9,1.5,1.52,.45,.4,.03,{emissive:"#f1b44f"}),this.mesh(n,"cylinder","#7d6a4f",-1.9,2,1.2,.06,4,.06),this.mesh(n,"box","#ef9f60",-1.55,3.6,1.2,.7,.45,.03),this.mesh(n,"box","#8a7352",1.4,.35,-1.9,1,.7,.8);break}case"snowpine":{this.mesh(n,"cylinder",s,0,1.15,0,.16,2.3,.16),this.mesh(n,"cone","#2f5f55",0,2.35,0,1.18,2.4,1.18),this.mesh(n,"cone","#eef4f2",0,2.75,0,.95,1.1,.95),this.mesh(n,"cone","#3b6b60",0,3.25,0,.8,1.6,.8),this.mesh(n,"cone","#eef4f2",0,3.75,0,.45,.7,.45);break}case"ice":{for(let o=0;o<4;o++)this.mesh(n,"cone",o%2?"#cfeaf0":"#a9d6e2",Math.cos(o*1.7)*.4,.55+o%3*.2,Math.sin(o*1.7)*.35,.28,1.1+o%3*.4,.28).rotation.set(Math.sin(o*1.7)*.3,0,-Math.cos(o*1.7)*.3);break}case"drift":this.mesh(n,"ico","#eef3f1",0,0,0,1.1,.38,.9);break;case"haystack":{a%2?(this.mesh(n,"cylinder","#d6b25a",0,.7,0,.7,1.2,.7).rotation.x=Math.PI/2,this.mesh(n,"cylinder","#e8cb7a",0,.7,.61,.55,.03,.55).rotation.x=Math.PI/2):(this.mesh(n,"cylinder","#d6b25a",0,.55,0,.9,1.1,.9),this.mesh(n,"cone","#e2c070",0,1.5,0,.95,.9,.95));break}case"barn":{const o=a%2?"#a8483a":"#b85a40";this.mesh(n,"box",o,0,1.6,0,6.2,3.2,8.2);for(const c of[-1,1])this.mesh(n,"box","#5b4a44",c*1.65,3.9,0,3.7,.22,8.6).rotation.z=-c*.62;this.mesh(n,"box","#e8dcc0",0,1.3,4.11,2.4,2.6,.05),this.mesh(n,"box",o,0,1.3,4.14,2.1,2.3,.04);for(const c of[-.78,.78])this.mesh(n,"box","#e8dcc0",0,1.3,4.16,2.9,.14,.03).rotation.z=c;break}case"fence":{for(const o of[-1.1,0,1.1])this.mesh(n,"box","#8a7352",o,.45,0,.12,.9,.12);for(const o of[.35,.7])this.mesh(n,"box","#a08660",0,o,0,2.4,.08,.06);break}case"crops":{this.mesh(n,"box","#7a6440",0,.02,0,3.2,.04,2.8);for(let o=0;o<4;o++)this.mesh(n,"box",a%2?"#d4b14a":"#7ea24a",0,.2,-1.05+o*.7,3,.32,.28);break}case"tank":{this.mesh(n,"cylinder","#9c968a",0,1.6,0,2,3.2,2),this.mesh(n,"cone","#868276",0,3.55,0,2.05,.7,2.05),this.mesh(n,"cylinder","#9c705b",0,1.1,0,2.04,.35,2.04),this.mesh(n,"box","#5b6360",1.95,1.8,.4,.1,3.6,.3);break}case"chimney":{this.mesh(n,"cylinder","#8a5a48",0,3.4,0,.75,6.8,.75);for(const o of[1.6,4.2,6.5])this.mesh(n,"cylinder","#6e4a3c",0,o,0,.8,.25,.8);this.mesh(n,"box","#6f6b5d",0,.3,0,2,.6,2);break}case"pipes":{for(const o of[-.32,.32])this.mesh(n,"cylinder","#7d8a86",o,1.05,0,.3,6.4,.3).rotation.x=Math.PI/2;for(const o of[-2.4,0,2.4]){this.mesh(n,"box","#5b6360",0,.45,o,1.3,.9,.2);for(const c of[-.32,.32])this.mesh(n,"cylinder","#9c705b",c,1.05,o,.36,.12,.36).rotation.x=Math.PI/2}break}case"crate":case"locker":case"lootbox":{const o=t.type==="locker",c=o?1.5:.82;this.mesh(n,"box",o?"#83948b":"#b49868",0,c/2,0,1.04,c,.81),this.mesh(n,"box","#dfcb91",0,c+.03,0,1.1,.12,.87),this.mesh(n,"box","#dcc991",0,c*.5,.42,.84,.1,.035),this.mesh(n,"box","#5c6e60",.23,c*.65,.45,.12,.18,.07),this.mesh(n,"box","#dddda7",-.17,c*.65,.45,.25,.27,.02,{emissive:"#9f985f"});break}case"growth":this.addGrowth(n,0,0,1);break;case"flowers":case"grass":case"scrub":{for(let o=0;o<3;o++){const c=(o-1)*.25,l=this.mesh(n,"cone",q_[e.id]||"#7e9a74",c,.2,o%2*.25,.13,.41,.1);l.rotation.z=(o-1)*.18,t.type==="flowers"&&this.mesh(n,"ico",["#efe1b4","#e2b094","#c4ccab"][o],c,.44,o%2*.25,.13,.065,.13)}t.type==="scrub"&&this.mesh(n,"ico",e.trees,0,.3,0,.68,.38,.57);break}}return n.position.set(t.x,this.terrainHeight(t.x,t.y,this.seed??1,this.legLength??2700),-t.y),n.rotation.y=t.rotation||0,n.scale.setScalar(t.scale||1),n}makeRubbleEffect(t,e,n){const s=new Qt,r=t.effectHeight??(t.type==="chimney"?6.6:0);if(s.position.set(t.x,this.terrainHeight(t.x,t.y,e,n)+r*(t.scale||1),-t.y),s.userData.prop=t,s.userData.smoke=[],s.userData.flame=[],s.scale.setScalar(t.scale||1),t.smoke)for(let a=0;a<3;a++){const o=this.mesh(s,"ico","#394342",0,.65+a*.38,0,.36,.3,.36,{basic:!0,opacity:.55});s.userData.smoke.push(o)}if(t.fire)for(let a=0;a<3;a++){const o=this.mesh(s,"cone",a%2?"#ffd079":"#e6983d",(a-1)*.23,.48,0,.22,.6,.2,{basic:!0});s.userData.flame.push(o)}return s}animateRubbleEffect(t,e){const n=t.userData.prop;t.visible=Math.abs(n.x-e.x)<30&&Math.abs(n.y-e.y)<45,t.visible&&(t.userData.smoke.forEach((s,r)=>{const a=(this.time*.4+r/3+ne(Math.floor(n.x*13+n.y),this.seed))%1;s.position.set(a*.6+Math.sin(this.time+r)*.1,.45+a*2.6,0),s.scale.setScalar(.35+a*.65)}),t.userData.flame.forEach((s,r)=>{s.scale.y=.65+Math.sin(this.time*9+r*2+n.x)*.2,s.position.y=.22+s.scale.y/2}))}addGrowth(t,e,n,s){const r=this.mesh(t,"ico","#39463e",e,n+.03,0,1.08*s,.09,.94*s);r.rotation.y=.4;for(let a=0;a<3;a++){const o=e+(a-1)*.35*s;this.mesh(t,"cylinder","#57414b",o,n+.24*s,a%2*.3,.055*s,.5*s,.055*s),this.mesh(t,"ico",a%2?"#f08079":"#d45169",o,n+.5*s,a%2*.3,.28*s,.14*s,.25*s)}for(let a=0;a<4;a++){const o=this.mesh(t,"box","#4b4947",e+Math.cos(a*1.6)*.53,n+.05,Math.sin(a*1.6)*.6,.075,.09,1.35*s);o.rotation.y=a*1.6}}makeGate(){const t=new Qt,e=[];for(const n of[-1,1]){const s=new Qt;s.position.x=n*re.gateHalf;const r=-n;for(let a=0;a<4;a++)this.mesh(s,"box","#6b5a44",r*(.45+a*1.2),1.35,0,.2,2.7,.25);for(const a of[.6,1.6,2.4])this.mesh(s,"box","#8a7352",r*re.gateHalf/2,a,.05,re.gateHalf-.1,.26,.14);this.mesh(s,"box","#6b5a44",r*re.gateHalf/2,1.5,.12,re.gateHalf*1.1,.2,.1).rotation.z=r*.42;for(let a=0;a<5;a++)this.mesh(s,"cone","#4a3d30",r*(.4+a*1.05),2.95,0,.16,.5,.16);this.mesh(s,"box","#d76465",r*re.gateHalf*.55,1.9,.16,1.5,.9,.03),t.add(s),e.push(s)}return t.userData.doors=e,t.userData.open=0,t}syncGate(t){const e=t.legLength||2700,n=t.seed??1;this.gate||(this.gate=this.makeGate(),this.scene.add(this.gate));const s=Math.max(1,Math.round((t.player.y-re.gate)/e)),r=s*e+re.gate;if(this.gate.visible=Math.abs(t.player.y-r)<110,!this.gate.visible)return;const a=se(r,n,e);this.gate.position.set(a,this.terrainHeight(a,r,n,e),-r);const o=s*e===t.checkpointY&&!t._bossDefeated,c=this.gate.userData.open=Math.max(0,Math.min(1,this.gate.userData.open+(o?-.04:.02))),[l,h]=this.gate.userData.doors;l.rotation.y=c*1.45,h.rotation.y=-c*1.45}makeBeacon(){const t=new Qt,e=new ve(this.geometries.ring,this.material("#f6db95",{basic:!0,opacity:.65}));return e.rotation.x=-Math.PI/2,e.scale.setScalar(2.15),e.position.y=.07,t.add(e),this.mesh(t,"cylinder","#dcc898",0,1.6,0,.075,3.2,.075),this.mesh(t,"box","#f2d99b",.54,2.75,0,1.12,.68,.045,{emissive:"#b19658"}),this.mesh(t,"box","#5a776b",.51,2.75,.025,.14,.38,.01),this.mesh(t,"box","#5a776b",.51,2.75,.028,.38,.14,.01),this.mesh(t,"box","#9e936e",0,.18,0,.5,.36,.5),t.userData.ring=e,t}terrainSample(t,e,n,s){(this.terrainSeed!==n||this.terrainLegLength!==s||this.terrainCache.size>8e4)&&(this.terrainCache=new Map,this.terrainRows=new Map,this.groundTones=new Map,this.terrainSeed=n,this.terrainLegLength=s);const r=Math.round(e*4)*8192+Math.round((t+800)*4);let a=this.terrainCache.get(r);if(a!==void 0)return a;let o=this.terrainRows.get(e);if(!o){this.terrainRows.size>4e3&&this.terrainRows.clear();const g=zr(e,n,s);o={roads:Wa(n,e-10,e+10,s).filter(v=>Math.abs(e-v.y)<=v.width/2+5),center:se(e,n,s),branch:g?Ye(g,e):null,bounds:Nn(e,n,s),plaza:[-4,0,4].some(v=>gn(e+v,n,s))},this.terrainRows.set(e,o)}const c=o.roads.some(g=>t>=g.minX-6&&t<=g.maxX+6)||o.plaza&&Math.abs(t-o.center)<re.clear+9,l=Math.min(Math.abs(t-o.center),o.branch===null?1/0:Math.abs(t-o.center-o.branch)),h=c?0:Math.max(0,l-13),u=tn[Oe(e,n,s,t)],f=["mountain","cliff","canyon"].includes(u.id);a=h?(f?Math.sin(t*.35+e*.03)*Math.min(3.2,h*.16):Math.sin(t*.5+e*.12)*Math.min(["tundra","desert"].includes(u.id)?.8:.42,h*.04))-.1:-.025;const d=Math.max(o.bounds.minX-t,t-o.bounds.maxX);return d>-3&&(u.edge==="rise"?a=Math.max(a,-.1)+vr(-1,6,d)*(5.5+2*Math.sin(e*.07+t*.05)):u.edge==="ice"?a+=vr(-1,5,d)*(2.8+.8*Math.sin(e*.09)):u.edge==="dune"?a+=vr(-2,10,d)*(2.6+1.3*Math.sin(e*.045+t*.03)):u.edge==="sink"&&(a=Math.min(a,-.1)-vr(-1,4,d)*1.5)),this.terrainCache.set(r,a),a}groundTone(t,e,n,s,r){const a=-n,o=Math.round(a*4)*8192+Math.round((t+800)*4);(this.terrainSeed!==s||this.terrainLegLength!==r)&&this.terrainSample(t,a,s,r),this.groundTones.size>8e4&&this.groundTones.clear();let c=this.groundTones.get(o);if(!c){c=Rr(tn[Oe(a,s,r,t,!0)].ground).clone().multiplyScalar(2);for(const[l,h]of[[0,5],[0,-5],[0,10],[0,-10],[7,0],[-7,0]])c.add(Rr(tn[Oe(a+h,s,r,t+l,!0)].ground));c.multiplyScalar(1/8),this.groundTones.set(o,c)}return c}terrainGeometry(t,e,n,s){const r=Bo,a=6,o=ka,c=r+1,l=[],h=[],u=[],f=[],d=[];for(let x=0;x<=a;x++)for(let y=0;y<=r;y++){const A=(y/r-.5)*o,T=t+(e-t)*x/a;l.push(A),h.push(T),u.push(this.terrainSample(A,T,n,s)),f.push(this.groundTone(A,0,-T,n,s)),d.push(tn[Oe(T,n,s,A,!0)])}const g=new Float32Array(r*a*18),v=new Float32Array(r*a*18),m=new Kt;let p=0;for(let x=0;x<a;x++)for(let y=0;y<r;y++){const A=[x*c+y,x*c+y+1,(x+1)*c+y,(x+1)*c+y+1];for(const T of[[0,1,2],[1,3,2]]){const P=A[T[0]],R=A[T[1]],b=A[T[2]],_=(u[P]+u[R]+u[b])/3,E=d[P];let L=null;E.edge==="rise"&&_>1.4?L=E.id==="canyon"?_>4.2?"#c9774a":"#a9583a":_>4.2?"#a3ad9f":"#7f8c84":E.edge==="ice"&&_>.7?L=_>2.2?"#eef4f3":"#cfe3e8":E.edge==="dune"&&_>.7?L=E.verge:E.edge==="sink"&&_<-.45&&(L="#58664c"),L?m.copy(Rr(L)):m.copy(f[P]).add(f[R]).add(f[b]).multiplyScalar(1/3),m.multiplyScalar(.88+ne(y*23+x*113+Math.floor(t),n)*.24);for(const I of[P,R,b])g[p]=l[I],g[p+1]=u[I],g[p+2]=-h[I],v[p]=m.r,v[p+1]=m.g,v[p+2]=m.b,p+=3}}const w=new Ue;return w.setAttribute("position",new fe(g,3)),w.setAttribute("color",new fe(v,3)),w.computeVertexNormals(),w}terrainHeight(t,e,n,s){const r=Math.floor(e/24)*24,a=Math.max(0,Math.min(Bo-1,Math.floor((t+ka/2)/6))),o=Math.max(0,Math.min(5,Math.floor((e-r)/4))),c=-ka/2+a*6,l=r+o*4,h=Math.max(0,Math.min(1,(t-c)/6)),u=Math.max(0,Math.min(1,(e-l)/4)),f=(p,w)=>this.terrainSample(p,w,n,s),d=f(c,l),g=f(c+6,l),v=f(c,l+4),m=f(c+6,l+4);return h+u<=1?d+h*(g-d)+u*(v-d):m+(1-h)*(v-m)+(1-u)*(g-m)}stripGeometry(t,e,n,s=.015,r=null){const a=[];for(let c=t;c<e-.01;c+=3){const l=Math.min(e,c+3);if(r&&!r(c+1.5))continue;const[h,u]=n(c),[f,d]=n(l);a.push(h,s,-c,u,s,-c,f,s,-l,u,s,-c,d,s,-l,f,s,-l)}const o=new Ue;return o.setAttribute("position",new fe(a,3)),o.computeVertexNormals(),o}roadGeometry(t,e,n,s=6,r=0,a=null,o=l=>se(l,n,this.legLength??2700),c=.015){const l=h=>(typeof s=="function"?s(h):s)/2;return this.stripGeometry(t,e,h=>{const u=o(h)+r;return[u-l(h),u+l(h)]},c,a)}propTemplate(t,e){const n=`${t.type}|${t.variant||0}|${e.id}|${t.corrupted?1:0}|${t.charred?1:0}`;this.templates??=new Map;let s=this.templates.get(n);if(!s){const r=this.makeProp({...t,x:0,y:0,rotation:0,scale:1},e);r.position.set(0,0,0),r.updateMatrixWorld(!0),s=[],r.traverse(a=>{a.isMesh&&s.push({geometry:a.geometry,material:a.material,matrix:a.matrixWorld.clone(),shadow:a.castShadow})}),this.templates.set(n,s)}return s}placeProp(t,e,n,s){const r=new ae().compose(this.tempVector.set(t.x,this.terrainHeight(t.x,t.y,n,s),-t.y),new ns().setFromAxisAngle(Fa,t.rotation||0),new U().setScalar(t.scale||1));return[this.propTemplate(t,e),r]}bakeStatic(t,e,n=[]){t.updateMatrixWorld(!0);const s=new Map,r=(a,o)=>{const c=`${a.uuid}/${o.uuid}`;return s.has(c)||s.set(c,{geometry:a,material:o,matrices:[],shadow:!1}),s.get(c)};t.traverse(a=>{if(!a.isMesh)return;const o=r(a.geometry,a.material);o.matrices.push(a.matrixWorld.clone()),o.shadow||=a.castShadow});for(const[a,o]of n)for(const c of a){const l=r(c.geometry,c.material);l.matrices.push(new ae().multiplyMatrices(o,c.matrix)),l.shadow||=c.shadow}for(const a of s.values()){const o=new ur(a.geometry,a.material,a.matrices.length);a.matrices.forEach((c,l)=>o.setMatrixAt(l,c)),o.castShadow=a.shadow,o.receiveShadow=!0,e.add(o)}}makeChunk(t,e,n,s=0){const r=t*24,a=r+24,o=cn(r+12,e,n),c=x=>se(x,e,n),l=new Qt,h=new pl({vertexColors:!0,roughness:1,flatShading:!0}),u=new ve(this.terrainGeometry(r,a,e,n),h);u.receiveShadow=!0,l.add(u);const f=["city","village"].includes(o.id),d=new Qt;l.userData.band=s,l.userData.ambientEffects=[];const g=(x,y,A=0)=>{if(!x.attributes.position.count){x.dispose();return}const T=new ve(x,this.material(y));T.position.y=A,T.receiveShadow=!0,l.add(T)};for(const x of["asphalt","earth","dirt"])g(this.roadGeometry(r,a,e,y=>Qe(y,e,n).width,0,y=>Qe(y,e,n).kind===x,c),x==="earth"?"#96865a":o.road);for(const x of Xo(e,r,a,n)){const y=Math.max(r,Math.min(a,(x.start+x.end)/2)),A=cn(y,e,n).road,T=R=>c(R)+Ye(x,R);g(this.roadGeometry(r,a,e,R=>Qe(R,e,n).width+.2,0,R=>R>x.start&&R<x.end,T,.011),A);for(const R of[-1,1])g(this.roadGeometry(r,a,e,.24,R*.6,b=>b>x.start+3&&b<x.end-3,T,.02),yr(A));const P=R=>R>x.start&&R<x.start+30||R>x.end-30&&R<x.end;g(this.stripGeometry(r,a,R=>[Math.min(c(R),T(R)),Math.max(c(R),T(R))],.012,P),yr(A));for(let R=Math.ceil((x.start+8)/7)*7;R<Math.min(a,x.start+36);R+=7){if(R<r)continue;const b=Math.atan((T(R+1)-T(R-1))/2);for(const _ of[-.6,.6]){const E=this.mesh(d,"box","#eddfb1",T(R)+Math.sin(b)*.3+_*.45,.03,-R+.25,.16,.02,1.1);E.rotation.y=_-b}}}for(const x of[-1,1])g(this.roadGeometry(r,a,e,.24,x*.6,y=>Qe(y,e,n).kind==="dirt",c,.02),yr(o.road));const v=gn(r,e,n)||gn(a,e,n)||gn((r+a)/2,e,n),m=v&&Ba[v.biome]||Ba.city;g(this.roadGeometry(r,a,e,re.clear*2+3,0,x=>!!gn(x,e,n),c,.008),m);for(let x=Math.ceil(r/6)*6;x<a;x+=6)if(gn(x,e,n))for(const y of[-1,1])this.mesh(d,"box",yr(m),c(x)+y*(re.clear/2+3),.014,-x,re.clear-4,.012,.12);if(f)for(const x of[-1,1])g(this.roadGeometry(r,a,e,.7,x*3.5,y=>Qe(y,e,n).kind==="asphalt"&&ne(Math.floor(y/6)*13,e)>.25,c),"#939d7b",.025);const p=new Map;for(const x of[-1,1])for(let y=r;y<a-.01;y+=3){const A=y+1.5,T=Nn(A,e,n),P=x<0?T.minX:T.maxX,R=cn(A,e,n,P+x*6);R.edge==="sink"&&(p.has(R.water)||p.set(R.water,[]),p.get(R.water).push([y,x]))}for(const[x,y]of p){const A=[];for(const[P,R]of y){const b=Math.min(a,P+3),_=H=>{const V=Nn(H,e,n);return R<0?[V.minX-75,V.minX-1.1]:[V.maxX+1.1,V.maxX+75]},[E,L]=_(P),[I,B]=_(b);A.push(E,-.42,-P,L,-.42,-P,I,-.42,-b,L,-.42,-P,B,-.42,-b,I,-.42,-b)}const T=new Ue;T.setAttribute("position",new fe(A,3)),T.computeVertexNormals(),g(T,x)}for(let x=Math.ceil(r/6)*6;x<a;x+=6){const y=Qe(x,e,n),A=T=>ne(Math.floor(x/6)*47+T,e);if(y.kind==="asphalt"){if(A(1)>.25){const R=this.mesh(d,"box","#adaf86",c(x),.037,-x,.1,.019,.8+A(2));R.rotation.y=Math.atan((c(x+1)-c(x-1))/2)}const T=(A(3)-.5)*Math.min(3.8,y.width-2.3),P=this.mesh(d,"ico",A(4)>.5?"#3a4b42":"#6b7661",c(x)+T,.031,-x-1.5,.35+A(5)*.75,.025,.5+A(6)*.6);P.rotation.y=A(7)*6.28;for(let R=0;R<3;R++){const b=this.mesh(d,"box","#34473d",c(x)+T+R*.23,.043,-x+R*.31,.035,.017,.65);b.rotation.y=R%2?-.66:.5}if(y.urban)for(let R=0;R<2;R++)this.mesh(d,"ico","#81916d",c(x)+(R?-1:1)*3.4,.08,-x+A(8+R)*2,.18,.12,.21)}else if(y.urban)for(const T of[-1,1]){this.mesh(d,"ico","#677852",c(x)+T*2.2,.026,-x,1,.035,1.65);const P=this.mesh(d,"box","#4a5a4d",c(x)+T*2.5,.026,-x-1,1.1,.035,1.2);P.rotation.y=T*.2}}for(const x of Wa(e,r-3,a+3,n)){const y=Math.max(r,x.y-x.width/2),A=Math.min(a,x.y+x.width/2);if(y>=A)continue;const T=x.maxX-x.minX;if(this.mesh(d,"box",x.urban?"#56635c":"#aa946a",(x.minX+x.maxX)/2,.018,-(y+A)/2,T,.018,A-y),x.urban)for(const P of[-1,1]){const R=x.y+P*(x.width/2+.37);R>=r&&R<a&&this.mesh(d,"box","#939d7b",(x.minX+x.maxX)/2,.032,-R,T,.04,.7)}}const w=[];for(const x of hh(e,r,a,n,s*32-58,s*32+58))if($l.has(x.type)||w.push(this.placeProp(x,tn[x.biome]||cn(x.y,e,n),e,n)),(x.smoke||x.fire)&&l.userData.ambientEffects.length<10){const y=this.makeRubbleEffect(x,e,n);l.add(y),l.userData.ambientEffects.push(y)}if(t===0){for(const x of[-1,1])this.mesh(d,"box","#727c6a",c(5)+x*3.7,1.35,-5,.6,2.7,.72),this.mesh(d,"box","#c9ba8d",c(5)+x*3.7,2.75,-5,.84,.18,.92),this.mesh(d,"box","#f1d596",c(5)+x*3.7,2.12,-4.6,.26,.35,.04,{emissive:"#ae884c"});this.mesh(d,"box","#677465",c(5),3.32,-5,8.1,.52,.64),this.mesh(d,"box","#dece9b",c(5),3.31,-4.66,2.75,.31,.025);for(let x=-2;x<=2;x++)this.mesh(d,"box","#577765",c(5)+x*.34,3.31,-4.64,.1,.18,.02)}return this.bakeStatic(d,l,w),l.userData.ownedMaterials=[h],l}removeChunk(t){this.scene.remove(t),t.traverse(e=>{e.isInstancedMesh&&e.dispose(),e.isMesh&&!Object.values(this.geometries).includes(e.geometry)&&e.geometry.dispose()});for(const e of t.userData.ownedMaterials||[])e.dispose()}resize(t,e){this.width=Math.max(1,t),this.height=Math.max(1,e);const n=this.width/this.height,s=n<.8?28:Math.min(47,29*n);this.camera.left=-s/2,this.camera.right=s/2,this.camera.top=s/n/2,this.camera.bottom=-s/n/2,this.fitDepthRange(),this.renderer.setSize(this.width,this.height,!1)}fitDepthRange(){const t=Cr.length(),e=Cr.clone().negate().divideScalar(t),n=new U().crossVectors(e,Fa).normalize(),s=new U().crossVectors(n,e),{behind:r,ahead:a,low:o,high:c}=Xl;let l=1/0,h=-1/0;const u=8;for(let d=0;d<=u;d++)for(let g=0;g<=u;g++){const v=ia.lerp(this.camera.left,this.camera.right,d/u),m=ia.lerp(this.camera.bottom,this.camera.top,g/u),p=m*s.y,w=-(v*n.z+m*s.z),x=Math.max((c-p)/e.y,(-r-w)/-e.z),y=Math.min((o-p)/e.y,(a-w)/-e.z);x>=y||(l=Math.min(l,x),h=Math.max(h,y))}const f=Math.max(t,2-l);this.cameraScale=f/t,this.camera.near=f+l-1,this.camera.far=f+h+1,this.camera.updateProjectionMatrix(),this.scene.fog.near=Oa[0]+f-t,this.scene.fog.far=Oa[1]+f-t,this.silhouetteBias.value=je.bias*2/(this.camera.far-this.camera.near)}screenDirectionToWorld(t,e){const n=new U(0,0,.5).unproject(this.camera),s=new U(t/Math.max(1,this.width)*2,-e/Math.max(1,this.height)*2,.5).unproject(this.camera),r=new U;this.camera.getWorldDirection(r);const a=n.addScaledVector(r,-n.y/r.y),o=s.addScaledVector(r,-s.y/r.y),c=o.x-a.x,l=-(o.z-a.z),h=Math.hypot(c,l);return h>1e-6?{x:c/h,y:l/h}:{x:0,y:0}}screenToWorld(t,e){return this.screenDirectionToWorld(t,e)}screenPosition(t,e){const n=new U(t,0,-e).project(this.camera);return{x:n.x,y:n.y}}bearingTo(t,e){const n=this.player.position.clone().project(this.camera),s=new U(t,0,-e).project(this.camera),r=(s.x-n.x)*this.width/2,a=-(s.y-n.y)*this.height/2,o=Math.hypot(r,a);return o>1e-6?{x:r/o,y:a/o}:{x:0,y:0}}syncEntities(t){const e=new Set,n=(t.enemies||[]).filter(r=>r.hp>0),s=new Map(n.filter(r=>r.telegraph?.kind==="charge").map(r=>[Math.hypot(r.x-t.player.x,r.y-t.player.y),r]).sort((r,a)=>r[0]-a[0]).map(([,r],a)=>[r,a]));n.length>this.enemyCapacity&&this.resizeEnemyBatches(Math.ceil(n.length/32)*32);for(const r of this.enemyBatches.values())r.used=0;for(const r of this.silhouetteBatches?.values()||[])r.used=0;for(const r of n){const a=`enemy-${r.id}`;e.add(a);let o=this.entities.get(a);(!o||o.userData.type!==r.type)&&(o&&this.scene.remove(o),o=this.makeEnemy(r.type,r.radius),this.entities.set(a,o)),o.position.set(r.x,this.terrainHeight(r.x,r.y,t.seed,t.legLength)+.035,-r.y);const c=r.telegraph?.angle??r.charge?.angle??r.angle??Math.atan2(t.player.x-r.x,t.player.y-r.y);o.rotation.y=Math.PI/2-c;const l=Number.isFinite(Number(r.id))?Number(r.id):String(r.id).length*1.37,h=!!r.runner,u=!!r.sprinting;o.position.y+=Math.sin(this.time*(u?15:7)+l)*(u?.06:.035);const f=o.userData.body;f.rotation.z=h?-(u?.34:.12):0,f.scale.set(h?.88:1,h?1.06:1,h?.88:1),o.userData.occlusionPhase??=Math.floor(l*97),this.updateEnemyOcclusion(o,Math.max(.4,r.radius||.7)),o.userData.arrival.visible=r.spawnGrace>0;const d=o.userData.telegraph,g=o.userData.charge,v=o.userData.warningFill;d.visible=!!(r.telegraph&&r.telegraph.kind!=="charge"),v.visible=d.visible;const m=r.type==="boss"?0:s.get(r)??0,p=m<Yl.full;if(g.visible=r.telegraph?.kind==="charge"&&m<Yl.max,r.telegraph){const y=r.telegraph.radius||(r.radius||1)*2.5,A=(r.telegraph.x??r.x)-r.x,T=-((r.telegraph.y??r.y)-r.y),P=Math.cos(o.rotation.y),R=Math.sin(o.rotation.y),b=this.terrainHeight(r.telegraph.x??r.x,r.telegraph.y??r.y,t.seed,t.legLength)+.075;d.position.set((A*P-T*R)/o.scale.x,(b-o.position.y)/o.scale.x,(A*R+T*P)/o.scale.x),v.position.copy(d.position),d.scale.setScalar(y/o.scale.x),v.scale.setScalar(y/o.scale.x);const _=r.telegraph.length??(r.type==="dog"?5.9:14.7),E=(r.radius||.7)*2+.7,L=_/o.scale.x;g.position.x=L/2,g.scale.set(L,1,E/o.scale.x);for(const I of g.userData.fills)I.visible=p;for(const I of g.userData.bars){I.mesh.visible=p||!I.dark;const B=p?1:.6;if(I.cap){I.mesh.scale.x=I.width*B/_,I.mesh.position.x=.5-I.mesh.scale.x/2;continue}I.mesh.scale.z=I.width*B/E,I.mesh.position.z=I.side*(.5-I.mesh.scale.z/2+(I.dark?.03:0))}}const w=o.userData.health,x=Math.max(0,Math.min(1,r.hp/(r.maxHp||r.hp||1)));w.quaternion.copy(o.quaternion).invert().multiply(this.camera.quaternion),w.userData.fill.scale.x=w.userData.width*x,w.userData.fill.position.x=-w.userData.width*(1-x)/2,this.batchEnemy(o)}this.finishEnemyBatches();for(const r of t.crates||[]){if(r.hp<=0)continue;const a=`crate-${r.id}`;e.add(a);let o=this.entities.get(a);o||(o=this.makeProp({...r,scale:r.scale||(r.radius||.725)/.58,type:$l.has(r.type)?r.type:"crate"},cn(r.y,t.seed,t.legLength)),this.entities.set(a,o),this.scene.add(o)),o.position.y=this.terrainHeight(r.x,r.y,t.seed,t.legLength)+.035}for(const[r,a]of this.entities)e.has(r)||(this.scene.remove(a),this.entities.delete(r))}makeDrop(t){const e=new Qt,n=t.type==="health"?"heal":t.type,s=Jl[n]||Jl.weapon,r=s.color,a=this.disc(r,.24,.74);e.add(a);const o=new ve(this.geometries.ring,this.material(r,{basic:!0,opacity:.62}));o.rotation.x=-Math.PI/2,o.position.y=.07,o.scale.setScalar(.62),e.add(o);const c=new Qt;e.add(c);const l={emissive:r};if(n==="heal"){this.mesh(c,"box",r,0,.82,0,.7,.53,.47,l),this.mesh(c,"box","#8d3c39",0,1.145,0,.45,.075,.15);for(const h of[-.2,.2])this.mesh(c,"box","#8d3c39",h,1.08,0,.07,.16,.15);for(const h of[-.246,.246])this.mesh(c,"box","#fff0cf",0,.82,h,.13,.35,.025,{basic:!0}),this.mesh(c,"box","#fff0cf",0,.82,h,.36,.13,.026,{basic:!0})}else if(n==="shield")this.mesh(c,"shield","#245f83",0,.88,0,1.1,1.1,1.1,l),this.mesh(c,"shield",r,0,.88,.087,.84,.84,.5,l),this.mesh(c,"box","#dcf6ee",0,.91,.135,.065,.45,.028,{basic:!0}),this.mesh(c,"box","#dcf6ee",0,.98,.137,.31,.065,.028,{basic:!0});else if(n==="rapid"){for(const h of[-.22,0,.22])this.mesh(c,"cylinder","#b77931",h,.81,0,.095,.54,.095,l),this.mesh(c,"cone","#f6d58f",h,1.13,0,.093,.16,.093,l),this.mesh(c,"cylinder","#f4c768",h,.55,0,.11,.075,.11);this.mesh(c,"box","#584b39",0,.72,0,.72,.13,.19),this.mesh(c,"bolt","#ffe7a4",0,.85,.15,.7,.7,1,{basic:!0})}else if(n==="power"){this.mesh(c,"cylinder","#624789",0,.89,0,.225,.69,.225),this.mesh(c,"cylinder",r,0,.9,0,.18,.59,.18,l);for(const h of[.56,.76,1.03,1.23])this.mesh(c,"cylinder","#d6a4fa",0,h,0,.23,.055,.23,l);this.mesh(c,"ico","#e7c6ff",0,1.33,0,.12,.12,.12,l),this.mesh(c,"bolt","#eedcff",0,.88,.243,.62,.62,1,{basic:!0})}else if(n==="speed"){this.mesh(c,"box","#a6803d",-.12,.86,0,.31,.48,.32),this.mesh(c,"box",r,.11,.62,0,.7,.25,.37,l),this.mesh(c,"box","#ede4bd",.11,.5,0,.74,.085,.4);for(let h=0;h<3;h++){const u=this.mesh(c,"cone","#ffe8a0",-.32-h*.13,1.04+h*.045,0,.09,.5-h*.04,.09,l);u.rotation.z=-.8-h*.08}this.mesh(c,"box","#f4df8c",-.105,1.08,0,.34,.07,.36)}else{this.mesh(c,"box","#94744a",0,.56,0,.83,.32,.49),this.mesh(c,"box","#d2bb7b",0,.76,0,.87,.075,.53);for(const f of[-.25,.25])this.mesh(c,"box","#4d675a",f,.56,0,.075,.35,.52);const h=t.weapon||"rifle",u=h==="arc"?"#ba88ed":h==="scattergun"?"#df985a":h==="sidearm"?"#e0c486":"#6bc0a1";if(this.mesh(c,"box",u,-.02,1.02,0,h==="sidearm"?.49:.72,.17,.19,{emissive:u}),this.mesh(c,"box","#344e45",-.12,.85,0,.15,.29,.16),h==="arc")this.mesh(c,"ico","#d5b2ff",.38,1.02,0,.19,.19,.19,{emissive:"#b48bec"}),this.mesh(c,"cylinder","#684b8e",.39,1.02,0,.22,.24,.22).rotation.z=Math.PI/2;else{const f=h==="sidearm"?.3:h==="scattergun"?.75:.81;for(const d of h==="scattergun"?[-.075,.075]:[0])this.mesh(c,"cylinder","#dde0b8",.37+f/4,1.02,d,.06,f,.06).rotation.z=Math.PI/2;h==="rifle"&&this.mesh(c,"box","#9ccfb3",-.05,1.15,0,.32,.09,.09),h==="scattergun"&&this.mesh(c,"box","#8e5937",-.46,1.02,0,.28,.2,.19)}}return c.scale.setScalar(1.3),e.userData.item=c,e.userData.style=s,e}syncTransients(t){const e=new Set;for(const n of t.drops||[]){const s=`drop-${n.id}`;e.add(s);let r=this.transients.get(s);r||(r=this.makeDrop(n),this.transients.set(s,r),this.scene.add(r)),r.position.set(n.x,this.terrainHeight(n.x,n.y,t.seed,t.legLength)+.035,-n.y),r.userData.item.rotation.y=this.time*1.5,r.userData.item.position.y=Math.sin(this.time*3+n.x)*.13}for(const n of t.projectiles||[]){const s=`bullet-${n.id}`;e.add(s);let r=this.transients.get(s);r||(r=new Qt,this.mesh(r,"box",n.weapon==="arc"?"#c5b3ff":"#f9e8b3",0,.96,0,n.weapon==="arc"?.58:.68,.055,.075,{basic:!0}),this.mesh(r,"ico","#fff3c2",.34,.96,0,.07,.08,.08,{basic:!0}),this.transients.set(s,r),this.scene.add(r)),r.position.set(n.x,this.terrainHeight(n.x,n.y,t.seed,t.legLength)+.035,-n.y),r.rotation.y=Math.PI/2-(n.angle||0)}for(const n of t.effects||[]){const s=`fx-${n.id}`;e.add(s);let r=this.transients.get(s);const a=n.type==="explosion"||n.type==="death"||n.type==="burst"||n.type==="crate",o=["slam","arc","warning","pickup","hurt"].includes(n.type);if(!r){if(r=new Qt,o){const l=new ve(this.geometries.ring,this.material(n.color||(n.type==="pickup"?"#f0d99b":"#e99080"),{basic:!0,opacity:.6}));l.rotation.x=-Math.PI/2,l.position.y=.09,r.add(l),r.userData.wave=l}for(let l=0;l<(a?7:4);l++){const h=this.mesh(r,"ico",n.color||(n.type==="muzzle"?"#fff0b3":l%2?"#e7b58c":"#d87574"),Math.cos(l*2.3)*.3,.5+l*.09,Math.sin(l*2.3)*.3,.15,.15,.15,{basic:!0});h.userData.offset=new U(Math.cos(l*2.3),.5+l*.14,Math.sin(l*2.3))}this.transients.set(s,r),this.scene.add(r),r.userData.created=this.time}r.position.set(n.x,this.terrainHeight(n.x,n.y,t.seed,t.legLength)+.035,-n.y);const c=this.time-r.userData.created;r.userData.wave&&r.userData.wave.scale.setScalar((n.radius||1.5)*Math.min(1,.25+c*2.5)),r.children.forEach(l=>{l.userData.offset&&(l.position.copy(l.userData.offset).multiplyScalar(.25+c*(a?4:2)),n.type==="muzzle"&&(l.position.y+=.9),l.position.y-=c*c*2,l.scale.setScalar(Math.max(.015,.17-c*.2)))})}for(const[n,s]of this.transients)e.has(n)||(this.scene.remove(s),this.transients.delete(n))}render(t,e=.016){if(!t?.player)return;this.time+=Math.min(.08,e||.016);const n=t.player,s=t.seed??1,r=t.legLength||2700;if(this.seed!==s||this.legLength!==r){for(const m of this.chunks.values())this.removeChunk(m);this.chunks.clear();for(const m of this.entities.values())this.scene.remove(m);this.entities.clear();for(const m of this.transients.values())this.scene.remove(m);this.transients.clear(),this.seed=s,this.legLength=r,this.focus.set(n.x-6.4,0,-n.y-8),this.previousPlayer={x:n.x,y:n.y},this.courierOutline.visible=!1,this.nextOcclusionCheck=this.time}const a=Math.floor((n.y-39)/24),o=Math.floor((n.y+65)/24),c=Math.round(n.x/32);for(const[m,p]of this.chunks)p.userData.band!==c&&(this.removeChunk(p),this.chunks.delete(m));for(let m=a;m<=o;m++){if(this.chunks.has(m))continue;const p=this.makeChunk(m,s,r,c);this.chunks.set(m,p),this.scene.add(p)}for(const[m,p]of this.chunks)(m<a||m>o)&&(this.removeChunk(p),this.chunks.delete(m));const l=cn(n.y,s,r,n.x),h=new Kt(l.sky);this.scene.background.lerp(h,.012),this.scene.fog.color.copy(this.scene.background);const u=this.height<700?4.5:0;this.focus.lerp(this.tempVector.set(n.x-6.4+u*.62,0,-n.y-8+u*.78),1-Math.exp(-e*8)),this.camera.position.copy(this.focus).add(this.tempVector.copy(Cr).multiplyScalar(this.cameraScale));for(const m of this.chunks.values())m.renderOrder=-10,this.applyXray(m);this.camera.lookAt(this.focus),this.camera.updateMatrixWorld(),this.sun.position.set(n.x-18,36,-n.y+12),this.sun.target.position.set(n.x,0,-n.y),this.sun.target.updateMatrixWorld();const f=this.terrainHeight(n.x,n.y,s,r)+.035;this.player.position.set(n.x,f,-n.y);const d=Number.isFinite(n.movingSpeed)?n.movingSpeed:Math.hypot(n.x-(this.previousPlayer?.x??n.x),n.y-(this.previousPlayer?.y??n.y))/Math.max(.01,e);this.previousPlayer={x:n.x,y:n.y},this.animateCourier(n,d,e,t.elapsed||0),this.player.userData.ring.visible=!!n.shield,this.playerShadow.position.set(n.x,f+.01,-n.y),this.updateCourierVisibility(),this.updateXray();for(const m of this.chunks.values())for(const p of m.userData.ambientEffects||[])this.animateRubbleEffect(p,n);this.syncEntities(t),this.syncTransients(t),this.syncGate(t);const g=t.checkpointY??((t.leg||0)+1)*r,v=Math.min(g,n.y+23);this.deliveryBeacon.position.set(se(v,s,r),0,-v),this.deliveryBeacon.visible=g-n.y<25,this.deliveryBeacon.userData.ring.scale.setScalar(2.03+Math.sin(this.time*2)*.13),this.renderer.render(this.scene,this.camera)}dispose(){for(const t of this.chunks.values())this.removeChunk(t);for(const t of this.enemyBatches.values())t.mesh.dispose();for(const t of this.silhouetteBatches.values())t.fill.dispose();for(const t of Object.values(this.silhouetteMaterials))t.dispose();for(const t of[...this.xrayMaterials?.values()||[],...this.warningMaterials?.values()||[]])t.dispose();for(const t of Object.values(this.geometries))t.dispose();for(const t of this.materials.values())t.dispose();this.outlineMaterial.dispose(),this.outlineEdgeMaterial.dispose(),this.renderer.dispose()}}class j_{constructor(t=!0){this.enabled=t,this.paused=!1,this.context=null,this.voices=0,this.limits=new Map,this.lastFootfall=null,this.birdClock=10,this.stats={shots:0,footsteps:0,pickups:0,impacts:0,breaks:0,warnings:0}}async start(){if(!this.context){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.context=new t({latencyHint:"interactive"}),this.master=this.context.createGain(),this.master.gain.value=this.enabled?.58:0;const e=this.context.createDynamicsCompressor();e.threshold.value=-14,e.knee.value=12,e.ratio.value=5,e.attack.value=.003,e.release.value=.18,this.master.connect(e),this.analyser=this.context.createAnalyser(),this.analyser.fftSize=2048,e.connect(this.analyser),this.analyser.connect(this.context.destination),this.effects=this.context.createGain(),this.effects.gain.value=this.paused?0:1,this.effects.connect(this.master),this.noiseBuffer=this.context.createBuffer(1,this.context.sampleRate*2,this.context.sampleRate);const n=this.noiseBuffer.getChannelData(0);for(let a=0;a<n.length;a++)n[a]=Math.random()*2-1;const s=this.context.createBufferSource();s.buffer=this.noiseBuffer,s.loop=!0;const r=this.context.createBiquadFilter();r.type="lowpass",r.frequency.value=420,this.windFilter=r,this.ambient=this.context.createGain(),this.ambient.gain.value=this.paused?.015:.055,s.connect(r),r.connect(this.ambient),this.ambient.connect(this.master),s.start()}await this.context.resume().catch(()=>{})}setEnabled(t){this.enabled=t,t&&this.start().catch(()=>{}),this.master&&this.master.gain.setTargetAtTime(t?.58:0,this.context.currentTime,.025)}setPaused(t){this.paused=t,this.lastFootfall=null,this.context&&(this.effects.gain.setTargetAtTime(t?0:1,this.context.currentTime,.035),this.ambient.gain.setTargetAtTime(t?.015:.055,this.context.currentTime,.3))}ready(){return this.enabled&&!this.paused&&this.context?.state==="running"&&this.voices<48}allow(t,e){const n=this.context.currentTime;return n-(this.limits.get(t)??-1/0)<e?!1:(this.limits.set(t,n),!0)}tone(t,e,n="sine",s=.2,r=t,a=0){if(!this.ready())return;const o=this.context.currentTime+a,c=this.context.createOscillator(),l=this.context.createGain();c.type=n,c.frequency.setValueAtTime(t,o),c.frequency.exponentialRampToValueAtTime(Math.max(20,r),o+e),l.gain.setValueAtTime(1e-4,o),l.gain.linearRampToValueAtTime(s,o+Math.min(.006,e/3)),l.gain.exponentialRampToValueAtTime(1e-4,o+e),c.connect(l),l.connect(this.effects),this.voices++,c.onended=()=>{c.disconnect(),l.disconnect(),this.voices--},c.start(o),c.stop(o+e+.01)}noise(t,e,n=1400,s="lowpass",r=0){if(!this.ready())return;const a=this.context.currentTime+r,o=this.context.createBufferSource(),c=this.context.createBiquadFilter(),l=this.context.createGain();o.buffer=this.noiseBuffer,c.type=s,c.frequency.value=n,c.Q.value=.7,l.gain.setValueAtTime(1e-4,a),l.gain.linearRampToValueAtTime(e,a+.003),l.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(c),c.connect(l),l.connect(this.effects),this.voices++,o.onended=()=>{o.disconnect(),c.disconnect(),l.disconnect(),this.voices--},o.start(a,Math.random()*.8),o.stop(a+t+.01)}event(t,e="sidearm",n={}){if(this.ready())if(t==="shot"&&this.allow("shot",.05))if(this.stats.shots++,e==="scattergun")this.noise(.19,.65,1700),this.tone(130,.23,"sine",.65,36),this.noise(.045,.38,3300,"highpass");else if(e==="rifle")for(const s of[0,.065,.13])this.noise(.055,.4,3200,"bandpass",s),this.tone(185,.075,"triangle",.34,55,s);else e==="arc"?(this.tone(290,.085,"sawtooth",.13,1200),this.tone(95,.28,"sine",.65,28,.035),this.tone(1050,.3,"sine",.18,190,.055),this.noise(.2,.32,2100,"bandpass",.035)):(this.noise(.065,.5,2900),this.tone(210,.09,"triangle",.36,55),this.tone(840,.025,"sine",.12,520));else if(t==="pickup"){this.stats.pickups++;const s={heal:[523,659,784],shield:[440,660,880],rapid:[780,980,1175],power:[330,495,660],speed:[660,880,1320],weapon:[392,587,784]};(s[n.drop]||s.weapon).forEach((r,a)=>this.tone(r,.18,"sine",.25,r,a*.055))}else if(t==="hurt")this.noise(.15,.26,630),this.tone(120,.23,"triangle",.38,42);else if(t==="boss"||t==="ambush"){this.stats.warnings++,this.tone(70,.85,"sawtooth",.18,42),this.tone(105,.7,"sine",.45,58),this.noise(.65,.3,330,"bandpass");for(const s of[0,.22,.44])this.tone(440,.12,"triangle",.18,420,s)}else t==="telegraph"&&this.allow("warning",.25)?(this.stats.warnings++,this.tone(165,.35,"triangle",.25,370),this.noise(.3,.17,440,"bandpass")):t==="checkpoint"||t==="complete"?[392,494,587,784].forEach((s,r)=>this.tone(s,.65,"sine",.24,s,r*.13)):t==="dead"&&[220,165,110].forEach((s,r)=>this.tone(s,.42,"sine",.3,s*.8,r*.18))}effect(t){this.ready()&&(t.type==="hit"&&this.allow("impact",.045)?(this.stats.impacts++,this.noise(.065,.19,t.radius>1.2?600:1700,"bandpass"),this.tone(150,.055,"triangle",.12,60)):t.type==="crate"?(this.stats.breaks++,this.noise(.22,.47,1900),this.tone(280,.12,"triangle",.25,70),this.tone(790,.16,"sine",.12,700,.025)):t.type==="death"&&this.allow("death",.06)?(this.noise(.14,.26,570,"bandpass"),this.tone(115,.17,"triangle",.18,48)):(t.type==="slam"||t.type==="arc")&&this.allow("blast",.12)&&(this.noise(.3,.5,950),this.tone(95,.32,"sine",.55,26)))}update(t,{movingSpeed:e=0,gaitPhase:n=0,biome:s,surface:r="dirt"}={}){if(!this.ready()){this.lastFootfall=null;return}const a=Math.floor(n/Math.PI);if(e>.6&&this.lastFootfall!==null&&a!==this.lastFootfall){this.stats.footsteps++;const o=r==="asphalt";this.noise(o?.055:.095,o?.23:.19,o?1700:2400,o?"bandpass":"lowpass"),this.tone(o?130:85,.065,"sine",.16,45)}this.lastFootfall=e>.6?a:null,this.birdClock-=t,this.birdClock<=0&&["glade","coast","forest","farmland"].includes(s?.id)?(this.birdClock=10+Math.random()*13,this.tone(1800,.12,"sine",.035,2400),this.tone(2200,.1,"sine",.03,1600,.14)):this.birdClock<=0&&s?.id==="marsh"?(this.birdClock=7+Math.random()*9,this.tone(160,.14,"triangle",.05,110),this.tone(150,.12,"triangle",.04,105,.2)):this.birdClock<=0&&s?.id==="industrial"&&(this.birdClock=12+Math.random()*14,this.tone(320,.9,"sawtooth",.012,270)),this.windFilter&&s&&this.windFilter.frequency.setTargetAtTime(["coast","cliff","mountain","tundra","canyon"].includes(s.id)?780:s.id==="burned"?300:420,this.context.currentTime,1)}}const ut=i=>document.getElementById(i),Xr="kuru.delivery.v1",jh="kuru.preferences.v1",Fs=["Northgate refuge","Glasswood station","Saltwater depot","Ochre shelter","Pale Ridge post","The Lantern"];let Fe={sound:!0,leftHand:!1};try{Fe={...Fe,...JSON.parse(localStorage.getItem(jh)||"{}")}}catch{}const En=new j_(Fe.sound);let fn,J,Wi,ke=!1,en=!1,Qh="journey",zo=0,Ha=0,Ho,Zl,On="",Me=null,wn="";const on=new Set,de={active:!1,id:null,originX:0,originY:0,x:0,y:0},di={x:0,y:0};let Vo=new Set,jl=0;const Q_={shown:"",pending:"",since:0,seenX:0,seenY:0,lastX:0,lastY:0},Ql=new Set,th={rapid:"RAPID FIRE · faster fire, shorter reach",power:"OVERCHARGE · more damage per shot",speed:"QUICKSTEP · move faster",shield:"SHIELD · absorbs damage"},tu={rapid:["≋","#efa840","RAPID FIRE"],power:["ϟ","#aa78ee","OVERCHARGE"],speed:["»","#f1ce65","QUICKSTEP"],shield:["◇","#60bfe3","SHIELD"]};let uc=nn;function eu(){try{const i=localStorage.getItem(Xr);if(!i)return null;let t=JSON.parse(i);if(t&&!qn.validateSave(t)){for(const e of["guardianCheckpoint","waypointCheckpoint","checkpoint"])if(t[e]&&qn.validateSave(t[e])){const n=e==="checkpoint"?void 0:t.checkpoint&&qn.validateSave(t.checkpoint)?t.checkpoint:void 0;t={...t[e],...n?{checkpoint:n}:{}};break}}return!qn.validateSave(t)||t.mode==="complete"?(wn="The previous checkpoint could not be read. You can start a fresh delivery.",null):t}catch{return wn="Saved progress is unavailable in this browser. Keep this tab open to continue your delivery.",null}}function tx(){try{const i=J.serialize();return localStorage.setItem(Xr,JSON.stringify(i)),Me=i,wn="",!0}catch{return wn="This browser could not save your checkpoint. Keep this tab open to preserve your journey.",!1}}function eh(i){const t=i==="waypoint"?J.waypointSave():J.guardianSave();if(t)try{localStorage.setItem(Xr,JSON.stringify(t)),Me=t,wn=""}catch{}}function nh(){try{localStorage.setItem(jh,JSON.stringify(Fe))}catch{}}function nu(){const i=ut("resume-button"),t=ut("begin-button");if(i.classList.toggle("hidden",!Me),!Me){t.className="primary-button",t.firstChild.textContent="BEGIN DELIVERY ";return}const e=Me.legLength??(Me.pace==="express"?450:2700),n=Math.max(0,6*e-(Me.player?.y??0)),s=n>=1e3?`${(n/1e3).toFixed(1)} KM`:`${Math.round(n/10)*10} M`;i.className="primary-button";const r=o=>o&&Math.abs(o.player.y-Me.player.y)<.01&&o.leg===Me.leg,a=r(Me.guardianCheckpoint)?"AT THE GUARDIAN GATE":r(Me.waypointCheckpoint)?"AT A WAYPOINT":`${s} TO GO`;i.innerHTML=`RESUME · ${a} · LEG ${Math.min(6,(Me.leg??0)+1)} OF 6 <span>→</span>`,t.className="text-button",t.firstChild.textContent="START A NEW DELIVERY ",t.parentNode.insertBefore(i,t)}function iu(){ut("save-notice").textContent=wn,ut("save-notice").classList.toggle("hidden",!wn)}function Yr(i){const t=Math.max(0,Math.floor(i));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}let Pr=null;function Os(i,t=3600){if(!ut("encounter").classList.contains("hidden")){Pr=[i,t];return}clearTimeout(Ho),ut("toast").textContent=i,ut("toast").classList.remove("hidden"),Ho=setTimeout(()=>ut("toast").classList.add("hidden"),t)}function Va(i){clearTimeout(Zl),clearTimeout(Ho),ut("toast").classList.add("hidden"),ut("encounter-text").textContent=i,ut("encounter").classList.remove("hidden"),Zl=setTimeout(()=>{if(ut("encounter").classList.add("hidden"),Pr){const[t,e]=Pr;Pr=null,Os(t,e)}},4200)}function rs(){on.clear(),de.active=!1,de.id=null,de.x=de.y=0,di.x=di.y=0,ut("joystick").classList.remove("active"),ut("stick-knob").style.transform="",fc()}function fc(){ut("joystick").style.left=Fe.leftHand?"30%":"70%",ut("joystick").style.top="79%"}function dc(i){en=i,rs(),En.setPaused(i)}function nn(){ut("modal").classList.add("hidden"),ke&&J.mode==="playing"&&dc(!1)}function Bn(i,t,e,n){uc=nn,rs(),ke&&dc(!0),ut("modal-eyebrow").textContent=i,ut("modal-title").textContent=t,ut("modal-content").innerHTML=e,ut("modal-actions").replaceChildren();for(const[s,r,a=!1]of n){const o=document.createElement("button");if(o.className=a?"primary-button":"secondary-button",o.textContent=s,a){const c=document.createElement("span");c.textContent="↗",o.append(c)}o.onclick=r,ut("modal-actions").append(o)}ut("modal").classList.remove("hidden"),ut("modal").scrollTop=0,document.querySelector(".modal-panel").scrollTop=0,ut("modal-content").scrollTop=0,setTimeout(()=>ut("modal-actions").querySelector("button")?.focus({preventScroll:!0}),0)}function su(){const i=ke&&en&&J?.mode==="playing";Bn("COURIER’S FIELD GUIDE","A way through.",`<ul class="guide-list">
    <li><span>◎</span><div><b>One thumb. Any direction.</b><br>Drag in the lower part of the screen to move. Release to stop. Explore beyond the city to the map edge; the arrow points back to your next refuge. On a computer, use WASD or arrow keys.</div></li>
    <li><span>⌁</span><div><b>You move. Your gear handles the rest.</b><br>Your courier chooses weapons and fires automatically. Single shots reach farther; rapid fire and volleys have shorter range. Move closer to bring more firepower into play. There’s no ammunition to manage.</div></li>
    <li><span>≋</span><div><b>Boost chips.</b><br>Icons under the route name show active boosts: ≋ rapid fire, ϟ overcharge, » quickstep, ◇ shield. The number is seconds left (shield points).</div></li>
    <li><span>◇</span><div><b>Take the road less empty.</b><br>Approach lockers and crates to shoot them open. Walk over glowing drops for weapons, health, shields and temporary upgrades.</div></li>
    <li><span>!</span><div><b>Keep moving when it turns red.</b><br>Fast packs and large swarms can surround you. Dodge red warning lanes and rings. Health bars show each threat’s strength. No enemy falls to a single shot: dogs and walkers take two or three, brutes eight or more and guardians sixteen or more. Every pellet of one trigger pull counts as one shot, and each bullet stops at its first target or solid obstacle, including Arc rounds.</div></li>
    <li><span>↗</span><div><b>Make it to the next light.</b><br>Defeat the guardian, evade its minions, then return to the refuge beacon. Checkpoints restore health, repair your parcel and save your loadout on this browser. You can leave there and return later. Death returns you to the last checkpoint.</div></li>
  </ul>`,[["GOT IT",i?Qi:nn,!0]]),uc=i?Qi:nn}function ex(){const i=J.legLength,t=J.leg||0,e=44,n=3,s=9,r=36,a=(h,u)=>s+h*(e+n)+Math.max(0,Math.min(1,(u-h*i)/i))*e;let o="",c=0;for(let h=0;h<Fs.length;h++){for(const d of yu(J.seed,h,i)){const g=tn[d.id].ground,v=a(h,d.start),m=a(h,d.end);o+=`<rect x="${v.toFixed(1)}" y="${r-4}" width="${(m-v).toFixed(1)}" height="8" fill="${g}"/>`}for(const d of Xo(J.seed,h*i,(h+1)*i,i)){c++;const g=a(h,d.start),v=a(h,d.end),m=d.side*15,p=tn[d.biome].ground;o+=`<path d="M${g.toFixed(1)} ${r} Q${((g+v)/2).toFixed(1)} ${r+m*2} ${v.toFixed(1)} ${r}" fill="none" stroke="#12291f" stroke-width="4.5" stroke-linecap="round"/><path d="M${g.toFixed(1)} ${r} Q${((g+v)/2).toFixed(1)} ${r+m*2} ${v.toFixed(1)} ${r}" fill="none" stroke="${p}" stroke-width="2.5" stroke-linecap="round"/>`}const u=s+h*(e+n)+e,f=h<t;o+=`<circle cx="${u}" cy="${r}" r="4.5" fill="${f?"#efc687":"#172823"}" stroke="#efc687" stroke-width="1.2"/><text x="${u-e/2}" y="${r+29}" text-anchor="middle" fill="${h===t?"#efc687":"#f3f0df99"}" font-size="7" font-family="IBM Plex Mono, monospace" letter-spacing="1">0${h+1}</text>`}const l=a(t,J.player.y);return o+=`<path d="M${l.toFixed(1)} ${r-7} l-5 -10 h10 Z" fill="#efc687" stroke="#12291f" stroke-width="1"/>`,`<svg class="route-strip" viewBox="0 0 300 ${r+36}" role="img" aria-label="Route strip: six legs, ${c} forks that rejoin the main road, you are on leg ${t+1}">${o}</svg><p class="strip-note">ARCS ARE FORKS THROUGH ANOTHER ENVIRONMENT · THEY REJOIN THE ROAD · ▼ YOU</p>`}function ru(){const i=J.player.y-J.leg*J.legLength,t=Math.max(0,Math.ceil(J.checkpointY-J.player.y));if(J.pace==="journey"&&!J._bossSpawned){const e=(Math.floor(i/600)+1)*600-i;if(e<t-80)return`NEXT SAVE · ${Math.ceil(e)} M (WAYPOINT) · REFUGE ${t} M`}return`NEXT SAVE · THE REFUGE, ${t} M AHEAD`}function nx(){const i=J?.leg||0,t=Fs.map((e,n)=>`<li class="${n===i?"current":""}"><span class="stop-number">0${n+1}</span><div><b>${e}</b><small>${n<i?"CHECKPOINT SECURED":n===i?J._bossDefeated?"CURRENT DESTINATION · PATH CLEAR":"CURRENT DESTINATION · GUARDIAN AHEAD":n===5?"DELIVERY DESTINATION":"SAFEHOUSE · GUARDIAN AHEAD"}</small></div><span class="stop-state">${n<i?"✓":n===i?"↗":"○"}</span></li>`).join("");Bn("DISPATCH 001 · MEDICAL SUPPLIES","Six lights ahead.",`<p>From District 08 to The Lantern. Each leg passes through reclaimed streets, forests, forgotten villages, coast, desert and high country.</p><p class="save-note">${ru()}</p>${ex()}<ol class="route-list">${t}</ol><p class="save-note">${J.pace==="express"?"FIELD TEST · About 11–15 minutes total. Refuges roughly every two minutes.":"THE JOURNEY · About 35–45 minutes in all. Refuges are roughly 6–8 minutes apart, with a waypoint save every 600 m."}</p>`,[["BACK TO THE ROAD",nn,!0]])}function Qi(){!ke||J.mode!=="playing"||(Bn("TAKE A BREATH","The road can wait.",`<p>Your delivery is paused. ${J.pace==="journey"?`${ru().replace("NEXT SAVE · ","Next save: ").toLowerCase().replace(/^./,i=>i.toUpperCase())}. `:""}${Me?`Your last saved stop is checkpoint ${Me.checkpointCount||"departure"}.`:"Your first checkpoint is still ahead."} Progress after a checkpoint stays in this tab until the next safehouse.</p><div class="settings-row"><span>Soundscape</span><button id="sound-toggle">${Fe.sound?"ON":"OFF"}</button></div><div class="settings-row"><span>Thumb position</span><button id="hand-toggle">${Fe.leftHand?"LEFT":"RIGHT"}</button></div><div class="stats-grid"><div>${Yr(J.elapsed)}<small>ON THE ROAD</small></div><div>${J.kills}<small>INFECTED CLEARED</small></div></div>`,[["CONTINUE DELIVERY",nn,!0],["FIELD GUIDE",su],["RETURN TO DISPATCH",()=>ix()]]),ut("sound-toggle").onclick=()=>{Fe.sound=!Fe.sound,En.setEnabled(Fe.sound),nh(),ut("sound-toggle").textContent=Fe.sound?"ON":"OFF"},ut("hand-toggle").onclick=()=>{Fe.leftHand=!Fe.leftHand,fc(),nh(),ut("hand-toggle").textContent=Fe.leftHand?"LEFT":"RIGHT"})}function ix(){Bn("RETURN TO DISPATCH","Leave the road?","<p>Your last checkpoint will remain saved. Travel since that checkpoint will be lost if you start a new delivery or close this tab.</p>",[["STAY ON THE ROAD",nn,!0],["RETURN TO DISPATCH",gi]])}function gi(){ke=!1,en=!1,On="",rs(),ut("modal").classList.add("hidden"),ut("hud").classList.add("hidden"),ut("intro").classList.remove("hidden"),Me=eu(),nu(),iu(),En.setPaused(!0)}function au(){const i=tx();Bn(`CHECKPOINT 0${J.checkpointCount} · ${Fs[J.leg].toUpperCase()}`,"A little shelter.",`<p>The guardian is gone. Your health is restored, the parcel is repaired, and the next stretch of road is waiting.</p><div class="stats-grid"><div>${Yr(J.elapsed)}<small>ON THE ROAD</small></div><div>${J.kills}<small>INFECTED CLEARED</small></div><div>${J.weapons.length}<small>WEAPONS CARRIED</small></div><div>0${J.checkpointCount}<small>SAFEHOUSES SECURED</small></div></div><p class="save-note">${i?"✓ Checkpoint saved on this browser. You can close the tab and resume here later.":wn}</p>`,[["CONTINUE DELIVERY",()=>{J.continueJourney(),On="",nn(),Os(`Next refuge: ${Fs[J.leg]}`)},!0],["REST & RETURN TO DISPATCH",gi]])}function sx(){const i=J.canRetryGuardian,t=J.canRetryWaypoint,e=J.checkpointCount?`checkpoint ${J.checkpointCount}`:"District 08",n=i?`<p>The guardian won this round. You can <b>retry at its gate</b>, about 35 m short of it with this stretch of road behind you and full health, or go back to your last refuge (${e}) and walk the leg again.</p>`:t?`<p>The road took its toll. You can <b>retry from your last waypoint</b>, saved about every 600 m with at least 60% health, or go back to your last refuge (${e}) and walk the whole leg again.</p>`:`<p>The road took its toll. Your supplies and route up to ${e} are safe. Try a different line through the danger.</p>`,s=()=>{J.retryCheckpoint(),On="",nn()},r=i?[["RETRY AT THE GUARDIAN",()=>{J.retryGuardian(),On="",nn()},!0],["BACK TO LAST REFUGE",s],["RETURN TO DISPATCH",gi]]:t?[["RETRY FROM WAYPOINT",()=>{J.retryWaypoint(),On="",nn()},!0],["BACK TO LAST REFUGE",s],["RETURN TO DISPATCH",gi]]:[["RETURN TO LAST CHECKPOINT",s,!0],["RETURN TO DISPATCH",gi]];Bn("THE COURIER NETWORK","Not the end.",`${n}<div class="stats-grid"><div>${Yr(J.elapsed)}<small>ON THE ROAD</small></div><div>${J.kills}<small>INFECTED CLEARED</small></div></div>`,r)}function rx(){try{localStorage.removeItem(Xr)}catch{}Me=null,Bn("DISPATCH 001 · RECEIVED","You kept a light on.",`<p>The Lantern received your medical supplies. Somewhere behind those walls, someone has another tomorrow.</p><div class="stats-grid"><div>${Yr(J.elapsed)}<small>DELIVERY TIME</small></div><div>${J.kills}<small>INFECTED CLEARED</small></div><div>${Math.round(J.cargo)}%<small>PARCEL CONDITION</small></div><div>${J.weapons.length}<small>WEAPONS RECOVERED</small></div></div><p class="save-note">${J.pace==="express"?"FIELD TEST COMPLETE · Try The Journey for the full travel pace.":"DELIVERY COMPLETE · Every new dispatch generates a different route."}</p>`,[["ANOTHER DELIVERY",gi,!0]])}async function Br(i=null){try{En.start().catch(()=>{}),J=new qn({saved:i,seed:Date.now()%1e6,pace:Qh}),Vo.clear(),ke=!0,en=!1,On="",rs(),ut("intro").classList.add("hidden"),ut("hud").classList.remove("hidden"),ut("modal").classList.add("hidden"),ut("toast").classList.add("hidden"),ut("encounter").classList.add("hidden"),En.setPaused(!1),mc(),Os(i?"Checkpoint restored. The road is waiting.":"Drag to move. Follow the road north."),J.mode==="checkpoint"&&(On="checkpoint",au())}catch(t){Bn("COURIER NOTICE","A route interrupted.",`<p>${ou(t.message)}</p>`,[["BACK TO DISPATCH",gi,!0]])}}function ou(i){const t=document.createElement("div");return t.textContent=i,t.innerHTML}function cu(i){Qh=i;for(const[t,e]of[["journey-mode","journey"],["express-mode","express"]])ut(t).classList.toggle("selected",i===e),ut(t).setAttribute("aria-pressed",String(i===e))}ut("journey-mode").onclick=()=>cu("journey");ut("express-mode").onclick=()=>cu("express");ut("begin-button").onclick=()=>{Me?Bn("A DELIVERY IS ALREADY SAVED","Start a new route?","<p>A new dispatch will replace your saved checkpoint when you reach its first safehouse.</p>",[["BEGIN NEW DELIVERY",()=>Br(),!0],["KEEP SAVED DELIVERY",nn]]):Br()};ut("resume-button").onclick=()=>Br(Me);ut("pause-button").onclick=Qi;ut("map-button").onclick=nx;ut("intro-guide").onclick=su;const ts=ut("touch-layer");ts.addEventListener("pointerdown",i=>{if(!ke||en||J.mode!=="playing"||de.active)return;i.preventDefault(),En.start().catch(()=>{});const t=ut("game-shell").getBoundingClientRect();de.active=!0,de.id=i.pointerId,de.originX=i.clientX,de.originY=i.clientY,de.x=de.y=0,ts.setPointerCapture(i.pointerId),ut("joystick").style.left=`${i.clientX-t.left}px`,ut("joystick").style.top=`${i.clientY-t.top}px`,ut("joystick").classList.add("active")});ts.addEventListener("pointermove",i=>{if(!de.active||i.pointerId!==de.id)return;const t=i.clientX-de.originX,e=i.clientY-de.originY,n=Math.hypot(t,e),s=Math.min(n,45)/(n||1);de.x=t*s/45,de.y=e*s/45,ut("stick-knob").style.transform=`translate(${de.x*32}px,${de.y*32}px)`});function pc(i){i.pointerId===de.id&&rs()}ts.addEventListener("pointerup",pc);ts.addEventListener("pointercancel",pc);ts.addEventListener("lostpointercapture",pc);window.addEventListener("keydown",i=>{if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","a","s","d","W","A","S","D"].includes(i.key)&&ke&&ut("modal").classList.contains("hidden")&&i.preventDefault(),i.key==="Escape"){ut("modal").classList.contains("hidden")?ke&&Qi():(!ke||J.mode==="playing")&&uc();return}ke&&!en&&on.add(i.key.toLowerCase())});window.addEventListener("keyup",i=>on.delete(i.key.toLowerCase()));window.addEventListener("blur",()=>{rs(),ke&&!en&&J.mode==="playing"&&Qi()});document.addEventListener("visibilitychange",()=>{document.hidden&&ke&&!en&&J.mode==="playing"&&Qi(),zo=performance.now()});ut("modal").addEventListener("keydown",i=>{if(i.key!=="Tab")return;const t=[...ut("modal").querySelectorAll("button")];if(!t.length)return;const e=t[0],n=t.at(-1);i.shiftKey&&document.activeElement===e?(i.preventDefault(),n.focus()):!i.shiftKey&&document.activeElement===n&&(i.preventDefault(),e.focus())});function ax(){const i=J.biome?.name||"District 08",t=Q_,e=J.player;return(!t.shown||Math.hypot(e.x-t.lastX,e.y-t.lastY)>30)&&(t.shown=i,t.pending="",t.seenX=e.x,t.seenY=e.y),t.lastX=e.x,t.lastY=e.y,i===t.shown?(t.pending="",t.seenX=e.x,t.seenY=e.y):(t.pending!==i&&(t.pending=i,t.since=J.elapsed),J.elapsed-t.since>=1.5&&Math.hypot(e.x-t.seenX,e.y-t.seenY)>=10&&(t.shown=i,t.pending="",t.seenX=e.x,t.seenY=e.y)),t.shown}function lu(i){const t=J.player,e=[J.seed,J.legLength],n=Zr(t.y,...e,0,t.x,J.checkpointY);return Math.abs(t.x-n.x)>12?Zr(t.y,...e,10,t.x,J.checkpointY):J.checkpointY-t.y<40?{x:i,y:J.checkpointY}:Zr(t.y,...e,35,t.x,J.checkpointY)}function ox(i,t){const e=ut("beacon-edge"),n=ut("game-shell").getBoundingClientRect(),s=fn.screenPosition?.(i,J.checkpointY),r=fn.screenPosition?.(J.player.x,J.player.y);if(!s||!r||J.boss||J.mode!=="playing"){e.classList.add("hidden");return}const a=P=>document.querySelector(P).getBoundingClientRect(),o=Math.max(a(".route-progress").bottom,a(".notices").bottom)-n.top+8,c=a(".combat-strip").top-n.top-10,l={left:22,right:n.width-22,top:o+14,bottom:c-14},h=P=>[(P.x+1)/2*n.width,(1-P.y)/2*n.height],[u,f]=h(r),[d,g]=h(s);if(d>l.left&&d<l.right&&g>l.top&&g<l.bottom){e.classList.add("hidden");return}const v=lu(i),m=fn.screenPosition(v.x,v.y),[p,w]=h(m),x=p-u,y=w-f;let A=1/0;if(x>0?A=Math.min(A,(l.right-u)/x):x<0&&(A=Math.min(A,(l.left-u)/x)),y>0?A=Math.min(A,(l.bottom-f)/y):y<0&&(A=Math.min(A,(l.top-f)/y)),!Number.isFinite(A)){e.classList.add("hidden");return}ut("beacon-edge-arrow").style.rotate=`${Math.atan2(x,-y)}rad`,ut("beacon-edge-label").textContent=`REFUGE ${t} M`,e.classList.remove("hidden");const T=e.offsetWidth/2+4;e.style.left=`${Math.max(T,Math.min(n.width-T,u+x*A))}px`,e.style.top=`${f+y*A}px`}function mc(){ut("hp-value").textContent=Math.ceil(J.player.hp),ut("hp-bar").style.width=`${Math.max(0,J.player.hp/J.player.maxHp)*100}%`,ut("cargo-value").textContent=`${Math.round(J.cargo)}%`,ut("cargo-bar").style.width=`${J.cargo}%`,ut("biome-name").textContent=ax(),ut("objective").textContent=J.boss?"Dodge red warnings":J._bossDefeated?"Path clear · reach the beacon":`To ${Fs[J.leg]}`,ut("leg-label").textContent=`0${J.leg+1} / 06`,ut("progress-bar").style.width=`${J.progress*100}%`;const i=se(J.checkpointY,J.seed,J.legLength),t=Math.ceil(Math.hypot(i-J.player.x,J.checkpointY-J.player.y));ut("checkpoint-label").textContent=J.boss?"GUARDIAN AHEAD · CLEAR THE PATH":`NEXT SAFEHOUSE · ${t} M`,ut("weapon-name").textContent=We[J.player.weapon]?.shortName||"SIDEARM";const e={sidearm:"LONGER REACH",scattergun:"CLOSE THREATS",rifle:"CLOSE BURSTS",arc:"HEAVY TARGETS"},n=J.buffs.rapid>0?"RAPID · SHORTER REACH":e[J.player.weapon]||"AUTO SELECT";ut("weapon-status").innerHTML=`<i></i> ${J.buffs.rapid>0?n:`${n} · AUTO FIRE`}`,ut("kills-value").innerHTML=`${J.kills} <small>INFECTED</small>`,ut("boss-hud").classList.toggle("hidden",!J.boss),ut("hud").classList.toggle("boss-active",!!J.boss),J.boss&&(ut("boss-name").textContent=J.boss.name?.toUpperCase()||"GUARDIAN",ut("boss-bar").style.width=`${Math.max(0,J.boss.hp/J.boss.maxHp)*100}%`);const s=Object.entries(J.buffs).filter(([,o])=>o>0).map(([o,c])=>[o,c]);J.player.shield>0&&s.push(["shield",J.player.shield]),document.querySelector(".route-hud").classList.toggle("has-buffs",s.length>0),ut("buffs").innerHTML=s.map(([o,c])=>{const[l,h,u]=tu[o];return`<span role="img" style="--c:${h}" title="${u} · ${Math.ceil(c)}" aria-label="${u}, ${Math.ceil(c)} ${o==="shield"?"points":"seconds"} left"><b aria-hidden="true">${l}</b>${Math.ceil(c)}</span>`}).join(""),ox(i,t);const r=lu(i),a=fn.bearingTo?.(r.x,r.y);a&&(ut("beacon-arrow").style.rotate=`${Math.atan2(a.x,-a.y)}rad`)}function cx(){for(const i of J.events.splice(0))En.event(i.type,i.weapon||J.player.weapon,i),["pickup","quiet","bossDefeated","retry","beaconMissed","guardianGate","waypoint","stuck"].includes(i.type)&&Os(i.type==="pickup"&&th[i.drop]&&!Ql.has(i.drop)?(Ql.add(i.drop),`${tu[i.drop][0]} ${th[i.drop]}`):i.type==="pickup"&&i.drop==="rapid"?"Rapid fire · more shots, shorter reach":i.text),i.type==="blocked"&&Os(i.text,2500),i.type==="boss"&&(Va(`${J.boss?.name?.toUpperCase()||"GUARDIAN"} AHEAD`),eh("guardian")),i.type==="waypoint"&&eh("waypoint"),i.type==="roadblock"&&Va("ROADBLOCK AHEAD"),i.type==="ambush"&&Va(i.reinforcements?"THE GUARDIAN CALLS ITS MINIONS":"SWARM APPROACHING"),i.type==="hurt"&&(ut("damage-flash").classList.add("hit"),setTimeout(()=>ut("damage-flash").classList.remove("hit"),200),navigator.vibrate&&navigator.vibrate(25));for(const i of J.effects)Vo.has(i.id)||En.effect(i);Vo=new Set(J.effects.map(i=>i.id))}function hu(i){requestAnimationFrame(hu);const t=Math.min(.05,Math.max(0,(i-(zo||i))/1e3));if(zo=i,ke){if(!en&&J.mode==="playing"){let e=de.active?de.x:(on.has("d")||on.has("arrowright")?1:0)-(on.has("a")||on.has("arrowleft")?1:0),n=de.active?de.y:(on.has("s")||on.has("arrowdown")?1:0)-(on.has("w")||on.has("arrowup")?1:0);const s=Math.min(1,Math.hypot(e,n));if(s>.07){jl+=t,jl>3&&ut("joystick").classList.add("hint-done");const r=fn.screenDirectionToWorld(e,n);di.x=r.x*s,di.y=r.y*s}else di.x=di.y=0;J.update(t,di),cx()}fn.render(J,en?0:t),!en&&J.mode==="playing"&&En.update(t,{movingSpeed:J.player.movingSpeed||0,gaitPhase:fn.gaitPhase||0,biome:J.biome,surface:Qe(J.player.y,J.seed,J.legLength).kind}),Ha+=t,Ha>.1&&(Ha=0,mc()),J.mode!=="playing"&&On!==J.mode&&(On=J.mode,J.mode==="checkpoint"?au():J.mode==="dead"?sx():J.mode==="complete"&&rx())}else Wi.elapsed+=t,fn.render(Wi,t)}function ih(){const i=ut("game-shell").getBoundingClientRect();fn?.resize(i.width,i.height)}try{fn=new Z_(ut("world")),Wi=new qn({seed:724,pace:"journey"}),Wi.player.y=22,Wi.player.x=0,Wi.enemies=[{id:"preview1",x:5,y:36,hp:42,maxHp:42,radius:.7,type:"walker",angle:2.4},{id:"preview2",x:-7,y:48,hp:42,maxHp:42,radius:.7,type:"walker",angle:.6}],Me=eu(),nu(),iu(),fc(),ih(),new ResizeObserver(ih).observe(ut("game-shell")),ut("boot").classList.add("hidden"),requestAnimationFrame(hu),wn&&document.querySelector(".control-note").setAttribute("title",wn),new URLSearchParams(location.search).has("qa")&&(window.__kuru={get game(){return J},get paused(){return en},get renderer(){return fn},get sound(){return En},begin:Br,updateHUD:mc,setPaused:dc,get savedData(){return Me}})}catch(i){ut("boot").innerHTML=`<span class="boot-mark">↗</span><b>YOUR BROWSER NEEDS WEBGL</b><span>Try a recent Chrome, Safari, Firefox or Edge.</span><span>${ou(i.message)}</span>`,console.error(i)}
