(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const yc="180",Ef=0,cl=1,Tf=2,nu=1,Af=2,ri=3,Ci=0,dn=1,Oe=2,Ti=0,Cs=1,qi=2,ll=3,hl=4,Cf=5,Hi=100,Rf=101,Pf=102,If=103,Lf=104,Df=200,zf=201,Uf=202,Nf=203,Ta=204,Aa=205,Ff=206,kf=207,Of=208,Bf=209,Hf=210,Gf=211,Vf=212,Wf=213,Xf=214,Ca=0,Ra=1,Pa=2,zs=3,Ia=4,La=5,pr=6,Da=7,bc=0,qf=1,Yf=2,ai=0,$f=1,jf=2,Kf=3,Zf=4,Jf=5,Qf=6,t0=7,iu=300,Us=301,Ns=302,za=303,Ua=304,Uo=306,mr=1e3,Vi=1001,Na=1002,wn=1003,e0=1004,Or=1005,qn=1006,Wo=1007,Wi=1008,jn=1009,su=1010,ru=1011,gr=1012,Sc=1013,ji=1014,Yn=1015,Ir=1016,wc=1017,Ec=1018,xr=1020,ou=35902,au=35899,cu=1021,lu=1022,On=1023,_r=1026,vr=1027,Tc=1028,Ac=1029,hu=1030,Cc=1031,Rc=1033,yo=33776,bo=33777,So=33778,wo=33779,Fa=35840,ka=35841,Oa=35842,Ba=35843,Ha=36196,Ga=37492,Va=37496,Wa=37808,Xa=37809,qa=37810,Ya=37811,$a=37812,ja=37813,Ka=37814,Za=37815,Ja=37816,Qa=37817,tc=37818,ec=37819,nc=37820,ic=37821,sc=36492,rc=36494,oc=36495,ac=36283,cc=36284,lc=36285,hc=36286,n0=3200,i0=3201,uu=0,s0=1,Mi="",sn="srgb",Fs="srgb-linear",Ro="linear",ve="srgb",is=7680,ul=519,r0=512,o0=513,a0=514,fu=515,c0=516,l0=517,h0=518,u0=519,fl=35044,Rs=35048,dl="300 es",$n=2e3,Po=2001;class Hs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pl=1234567;const or=Math.PI/180,Mr=180/Math.PI;function Qi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function ae(i,t,e){return Math.max(t,Math.min(e,i))}function Pc(i,t){return(i%t+t)%t}function f0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function d0(i,t,e){return i!==t?(e-i)/(t-i):0}function ar(i,t,e){return(1-e)*i+e*t}function p0(i,t,e,n){return ar(i,t,1-Math.exp(-e*n))}function m0(i,t=1){return t-Math.abs(Pc(i,t*2)-t)}function g0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function x0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function _0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function v0(i,t){return i+Math.random()*(t-i)}function M0(i){return i*(.5-Math.random())}function y0(i){i!==void 0&&(pl=i);let t=pl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function b0(i){return i*or}function S0(i){return i*Mr}function w0(i){return(i&i-1)===0&&i!==0}function E0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function T0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function A0(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),f=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),h=r((n-t)/2),p=o((n-t)/2);switch(s){case"XYX":i.set(a*f,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*f,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*f,a*l);break;case"XZX":i.set(a*f,c*p,c*h,a*l);break;case"YXY":i.set(c*h,a*f,c*p,a*l);break;case"ZYZ":i.set(c*p,c*h,a*f,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ys(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Cn={DEG2RAD:or,RAD2DEG:Mr,generateUUID:Qi,clamp:ae,euclideanModulo:Pc,mapLinear:f0,inverseLerp:d0,lerp:ar,damp:p0,pingpong:m0,smoothstep:g0,smootherstep:x0,randInt:_0,randFloat:v0,randFloatSpread:M0,seededRandom:y0,degToRad:b0,radToDeg:S0,isPowerOfTwo:w0,ceilPowerOfTwo:E0,floorPowerOfTwo:T0,setQuaternionFromProperEuler:A0,normalize:cn,denormalize:ys};class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ui{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],f=n[s+2],u=n[s+3];const d=r[o+0],h=r[o+1],p=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=f,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=h,t[e+2]=p,t[e+3]=x;return}if(u!==x||c!==d||l!==h||f!==p){let g=1-a;const m=c*d+l*h+f*p+u*x,v=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const w=Math.sqrt(_),T=Math.atan2(w,m*v);g=Math.sin(g*T)/w,a=Math.sin(a*T)/w}const M=a*v;if(c=c*g+d*M,l=l*g+h*M,f=f*g+p*M,u=u*g+x*M,g===1-a){const w=1/Math.sqrt(c*c+l*l+f*f+u*u);c*=w,l*=w,f*=w,u*=w}}t[e]=c,t[e+1]=l,t[e+2]=f,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],f=n[s+3],u=r[o],d=r[o+1],h=r[o+2],p=r[o+3];return t[e]=a*p+f*u+c*h-l*d,t[e+1]=c*p+f*d+l*u-a*h,t[e+2]=l*p+f*h+a*d-c*u,t[e+3]=f*p-a*u-c*d-l*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),f=a(s/2),u=a(r/2),d=c(n/2),h=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=d*f*u+l*h*p,this._y=l*h*u-d*f*p,this._z=l*f*p+d*h*u,this._w=l*f*u-d*h*p;break;case"YXZ":this._x=d*f*u+l*h*p,this._y=l*h*u-d*f*p,this._z=l*f*p-d*h*u,this._w=l*f*u+d*h*p;break;case"ZXY":this._x=d*f*u-l*h*p,this._y=l*h*u+d*f*p,this._z=l*f*p+d*h*u,this._w=l*f*u-d*h*p;break;case"ZYX":this._x=d*f*u-l*h*p,this._y=l*h*u+d*f*p,this._z=l*f*p-d*h*u,this._w=l*f*u+d*h*p;break;case"YZX":this._x=d*f*u+l*h*p,this._y=l*h*u+d*f*p,this._z=l*f*p-d*h*u,this._w=l*f*u-d*h*p;break;case"XZY":this._x=d*f*u-l*h*p,this._y=l*h*u-d*f*p,this._z=l*f*p+d*h*u,this._w=l*f*u+d*h*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],f=e[6],u=e[10],d=n+a+u;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(f-c)*h,this._y=(r-l)*h,this._z=(o-s)*h}else if(n>a&&n>u){const h=2*Math.sqrt(1+n-a-u);this._w=(f-c)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+l)/h}else if(a>u){const h=2*Math.sqrt(1+a-n-u);this._w=(r-l)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(c+f)/h}else{const h=2*Math.sqrt(1+u-n-a);this._w=(o-s)/h,this._x=(r+l)/h,this._y=(c+f)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,f=e._w;return this._x=n*f+o*a+s*l-r*c,this._y=s*f+o*c+r*a-n*l,this._z=r*f+o*l+n*c-s*a,this._w=o*f-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const h=1-e;return this._w=h*o+e*this._w,this._x=h*n+e*this._x,this._y=h*s+e*this._y,this._z=h*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),f=Math.atan2(l,a),u=Math.sin((1-e)*f)/l,d=Math.sin(e*f)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,n=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ml.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ml.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),f=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*f,this.y=n+c*f+a*l-r*u,this.z=s+c*u+r*f-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xo.copy(this).projectOnVector(t),this.sub(Xo)}reflect(t){return this.sub(Xo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xo=new z,ml=new ui;class ee{constructor(t,e,n,s,r,o,a,c,l){ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const f=this.elements;return f[0]=t,f[1]=s,f[2]=a,f[3]=e,f[4]=r,f[5]=c,f[6]=n,f[7]=o,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],f=n[4],u=n[7],d=n[2],h=n[5],p=n[8],x=s[0],g=s[3],m=s[6],v=s[1],_=s[4],M=s[7],w=s[2],T=s[5],A=s[8];return r[0]=o*x+a*v+c*w,r[3]=o*g+a*_+c*T,r[6]=o*m+a*M+c*A,r[1]=l*x+f*v+u*w,r[4]=l*g+f*_+u*T,r[7]=l*m+f*M+u*A,r[2]=d*x+h*v+p*w,r[5]=d*g+h*_+p*T,r[8]=d*m+h*M+p*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],f=t[8];return e*o*f-e*a*l-n*r*f+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],f=t[8],u=f*o-a*l,d=a*c-f*r,h=l*r-o*c,p=e*u+n*d+s*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return t[0]=u*x,t[1]=(s*l-f*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(f*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=h*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(qo.makeScale(t,e)),this}rotate(t){return this.premultiply(qo.makeRotation(-t)),this}translate(t,e){return this.premultiply(qo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qo=new ee;function du(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Io(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function C0(){const i=Io("canvas");return i.style.display="block",i}const gl={};function yr(i){i in gl||(gl[i]=!0,console.warn(i))}function R0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const xl=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_l=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function P0(){const i={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ve&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ve&&(s.r=Ps(s.r),s.g=Ps(s.g),s.b=Ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mi?Ro:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return yr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return yr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fs]:{primaries:t,whitePoint:n,transfer:Ro,toXYZ:xl,fromXYZ:_l,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:t,whitePoint:n,transfer:ve,toXYZ:xl,fromXYZ:_l,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),i}const ge=P0();function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ss;class I0{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ss===void 0&&(ss=Io("canvas")),ss.width=t.width,ss.height=t.height;const s=ss.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ss}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Io("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ci(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ci(e[n]/255)*255):e[n]=ci(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let L0=0;class Ic{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=Qi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Yo(s[o].image)):r.push(Yo(s[o]))}else r=Yo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Yo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?I0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let D0=0;const $o=new z;class rn extends Hs{constructor(t=rn.DEFAULT_IMAGE,e=rn.DEFAULT_MAPPING,n=Vi,s=Vi,r=qn,o=Wi,a=On,c=jn,l=rn.DEFAULT_ANISOTROPY,f=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Qi(),this.name="",this.source=new Ic(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($o).x}get height(){return this.source.getSize($o).y}get depth(){return this.source.getSize($o).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==iu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mr:t.x=t.x-Math.floor(t.x);break;case Vi:t.x=t.x<0?0:1;break;case Na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mr:t.y=t.y-Math.floor(t.y);break;case Vi:t.y=t.y<0?0:1;break;case Na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=iu;rn.DEFAULT_ANISOTROPY=1;class Be{constructor(t=0,e=0,n=0,s=1){Be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],f=c[4],u=c[8],d=c[1],h=c[5],p=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(f-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(f+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(l+h+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,M=(h+1)/2,w=(m+1)/2,T=(f+d)/4,A=(u+x)/4,C=(p+g)/4;return _>M&&_>w?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=A/n):M>w?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=C/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=A/r,s=C/r),this.set(n,s,r,e),this}let v=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(d-f)*(d-f));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(u-x)/v,this.z=(d-f)/v,this.w=Math.acos((l+h+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class z0 extends Hs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new rn(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:qn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ic(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends z0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class pu extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class U0 extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ts{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(t.matrixWorld),this.expandByPoint(zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Br.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Br.copy(n.boundingBox)),Br.applyMatrix4(t.matrixWorld),this.union(Br)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),Hr.subVectors(this.max,js),rs.subVectors(t.a,js),os.subVectors(t.b,js),as.subVectors(t.c,js),fi.subVectors(os,rs),di.subVectors(as,os),Di.subVectors(rs,as);let e=[0,-fi.z,fi.y,0,-di.z,di.y,0,-Di.z,Di.y,fi.z,0,-fi.x,di.z,0,-di.x,Di.z,0,-Di.x,-fi.y,fi.x,0,-di.y,di.x,0,-Di.y,Di.x,0];return!jo(e,rs,os,as,Hr)||(e=[1,0,0,0,1,0,0,0,1],!jo(e,rs,os,as,Hr))?!1:(Gr.crossVectors(fi,di),e=[Gr.x,Gr.y,Gr.z],jo(e,rs,os,as,Hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Qn=[new z,new z,new z,new z,new z,new z,new z,new z],zn=new z,Br=new ts,rs=new z,os=new z,as=new z,fi=new z,di=new z,Di=new z,js=new z,Hr=new z,Gr=new z,zi=new z;function jo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){zi.fromArray(i,r);const a=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),c=t.dot(zi),l=e.dot(zi),f=n.dot(zi);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>a)return!1}return!0}const N0=new ts,Ks=new z,Ko=new z;class Lr{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):N0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ks.subVectors(t,this.center);const e=Ks.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ks,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ko.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ks.copy(t.center).add(Ko)),this.expandByPoint(Ks.copy(t.center).sub(Ko))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ti=new z,Zo=new z,Vr=new z,pi=new z,Jo=new z,Wr=new z,Qo=new z;class F0{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Zo.copy(t).add(e).multiplyScalar(.5),Vr.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(Zo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Vr),a=pi.dot(this.direction),c=-pi.dot(Vr),l=pi.lengthSq(),f=Math.abs(1-o*o);let u,d,h,p;if(f>0)if(u=o*c-a,d=o*a-c,p=r*f,u>=0)if(d>=-p)if(d<=p){const x=1/f;u*=x,d*=x,h=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),h=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),h=-u*u+d*(d+2*c)+l;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),h=-u*u+d*(d+2*c)+l):d<=p?(u=0,d=Math.min(Math.max(-r,-c),r),h=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),h=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),h=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Zo).addScaledVector(Vr,d),h}intersectSphere(t,e){ti.subVectors(t.center,this.origin);const n=ti.dot(this.direction),s=ti.dot(ti)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),f>=0?(r=(t.min.y-d.y)*f,o=(t.max.y-d.y)*f):(r=(t.max.y-d.y)*f,o=(t.min.y-d.y)*f),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,s,r){Jo.subVectors(e,t),Wr.subVectors(n,t),Qo.crossVectors(Jo,Wr);let o=this.direction.dot(Qo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,t);const c=a*this.direction.dot(Wr.crossVectors(pi,Wr));if(c<0)return null;const l=a*this.direction.dot(Jo.cross(pi));if(l<0||c+l>o)return null;const f=-a*pi.dot(Qo);return f<0?null:this.at(f/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,n,s,r,o,a,c,l,f,u,d,h,p,x,g){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,f,u,d,h,p,x,g)}set(t,e,n,s,r,o,a,c,l,f,u,d,h,p,x,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=f,m[10]=u,m[14]=d,m[3]=h,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/cs.setFromMatrixColumn(t,0).length(),r=1/cs.setFromMatrixColumn(t,1).length(),o=1/cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),f=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*f,h=o*u,p=a*f,x=a*u;e[0]=c*f,e[4]=-c*u,e[8]=l,e[1]=h+p*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=p+h*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*f,h=c*u,p=l*f,x=l*u;e[0]=d+x*a,e[4]=p*a-h,e[8]=o*l,e[1]=o*u,e[5]=o*f,e[9]=-a,e[2]=h*a-p,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*f,h=c*u,p=l*f,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=p+h*a,e[1]=h+p*a,e[5]=o*f,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*f,h=o*u,p=a*f,x=a*u;e[0]=c*f,e[4]=p*l-h,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=h*l-p,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,h=o*l,p=a*c,x=a*l;e[0]=c*f,e[4]=x-d*u,e[8]=p*u+h,e[1]=u,e[5]=o*f,e[9]=-a*f,e[2]=-l*f,e[6]=h*u+p,e[10]=d-x*u}else if(t.order==="XZY"){const d=o*c,h=o*l,p=a*c,x=a*l;e[0]=c*f,e[4]=-u,e[8]=l*f,e[1]=d*u+x,e[5]=o*f,e[9]=h*u-p,e[2]=p*u-h,e[6]=a*f,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(k0,t,O0)}lookAt(t,e,n){const s=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),mi.crossVectors(n,Mn),mi.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),mi.crossVectors(n,Mn)),mi.normalize(),Xr.crossVectors(Mn,mi),s[0]=mi.x,s[4]=Xr.x,s[8]=Mn.x,s[1]=mi.y,s[5]=Xr.y,s[9]=Mn.y,s[2]=mi.z,s[6]=Xr.z,s[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],f=n[1],u=n[5],d=n[9],h=n[13],p=n[2],x=n[6],g=n[10],m=n[14],v=n[3],_=n[7],M=n[11],w=n[15],T=s[0],A=s[4],C=s[8],b=s[12],y=s[1],D=s[5],N=s[9],Y=s[13],q=s[2],V=s[6],Z=s[10],ct=s[14],K=s[3],mt=s[7],xt=s[11],_t=s[15];return r[0]=o*T+a*y+c*q+l*K,r[4]=o*A+a*D+c*V+l*mt,r[8]=o*C+a*N+c*Z+l*xt,r[12]=o*b+a*Y+c*ct+l*_t,r[1]=f*T+u*y+d*q+h*K,r[5]=f*A+u*D+d*V+h*mt,r[9]=f*C+u*N+d*Z+h*xt,r[13]=f*b+u*Y+d*ct+h*_t,r[2]=p*T+x*y+g*q+m*K,r[6]=p*A+x*D+g*V+m*mt,r[10]=p*C+x*N+g*Z+m*xt,r[14]=p*b+x*Y+g*ct+m*_t,r[3]=v*T+_*y+M*q+w*K,r[7]=v*A+_*D+M*V+w*mt,r[11]=v*C+_*N+M*Z+w*xt,r[15]=v*b+_*Y+M*ct+w*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],f=t[2],u=t[6],d=t[10],h=t[14],p=t[3],x=t[7],g=t[11],m=t[15];return p*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*h-n*c*h)+x*(+e*c*h-e*l*d+r*o*d-s*o*h+s*l*f-r*c*f)+g*(+e*l*u-e*a*h-r*o*u+n*o*h+r*a*f-n*l*f)+m*(-s*a*f-e*c*u+e*a*d+s*o*u-n*o*d+n*c*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],f=t[8],u=t[9],d=t[10],h=t[11],p=t[12],x=t[13],g=t[14],m=t[15],v=u*g*l-x*d*l+x*c*h-a*g*h-u*c*m+a*d*m,_=p*d*l-f*g*l-p*c*h+o*g*h+f*c*m-o*d*m,M=f*x*l-p*u*l+p*a*h-o*x*h-f*a*m+o*u*m,w=p*u*c-f*x*c-p*a*d+o*x*d+f*a*g-o*u*g,T=e*v+n*_+s*M+r*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=v*A,t[1]=(x*d*r-u*g*r-x*s*h+n*g*h+u*s*m-n*d*m)*A,t[2]=(a*g*r-x*c*r+x*s*l-n*g*l-a*s*m+n*c*m)*A,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*h-n*c*h)*A,t[4]=_*A,t[5]=(f*g*r-p*d*r+p*s*h-e*g*h-f*s*m+e*d*m)*A,t[6]=(p*c*r-o*g*r-p*s*l+e*g*l+o*s*m-e*c*m)*A,t[7]=(o*d*r-f*c*r+f*s*l-e*d*l-o*s*h+e*c*h)*A,t[8]=M*A,t[9]=(p*u*r-f*x*r-p*n*h+e*x*h+f*n*m-e*u*m)*A,t[10]=(o*x*r-p*a*r+p*n*l-e*x*l-o*n*m+e*a*m)*A,t[11]=(f*a*r-o*u*r-f*n*l+e*u*l+o*n*h-e*a*h)*A,t[12]=w*A,t[13]=(f*x*s-p*u*s+p*n*d-e*x*d-f*n*g+e*u*g)*A,t[14]=(p*a*s-o*x*s-p*n*c+e*x*c+o*n*g-e*a*g)*A,t[15]=(o*u*s-f*a*s+f*n*c-e*u*c-o*n*d+e*a*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,f=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,f*a+n,f*c-s*o,0,l*c-s*a,f*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,f=o+o,u=a+a,d=r*l,h=r*f,p=r*u,x=o*f,g=o*u,m=a*u,v=c*l,_=c*f,M=c*u,w=n.x,T=n.y,A=n.z;return s[0]=(1-(x+m))*w,s[1]=(h+M)*w,s[2]=(p-_)*w,s[3]=0,s[4]=(h-M)*T,s[5]=(1-(d+m))*T,s[6]=(g+v)*T,s[7]=0,s[8]=(p+_)*A,s[9]=(g-v)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=cs.set(s[0],s[1],s[2]).length();const o=cs.set(s[4],s[5],s[6]).length(),a=cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Un.copy(this);const l=1/r,f=1/o,u=1/a;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=f,Un.elements[5]*=f,Un.elements[6]*=f,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,e.setFromRotationMatrix(Un),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=$n,c=!1){const l=this.elements,f=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),h=(n+s)/(n-s);let p,x;if(c)p=r/(o-r),x=o*r/(o-r);else if(a===$n)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Po)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=$n,c=!1){const l=this.elements,f=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),h=-(n+s)/(n-s);let p,x;if(c)p=1/(o-r),x=o/(o-r);else if(a===$n)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Po)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const cs=new z,Un=new fe,k0=new z(0,0,0),O0=new z(1,1,1),mi=new z,Xr=new z,Mn=new z,vl=new fe,Ml=new ui;class En{constructor(t=0,e=0,n=0,s=En.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],f=s[9],u=s[2],d=s[6],h=s[10];switch(e){case"XYZ":this._y=Math.asin(ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ml.setFromEuler(this),this.setFromQuaternion(Ml,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class mu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let B0=0;const yl=new z,ls=new ui,ei=new fe,qr=new z,Zs=new z,H0=new z,G0=new ui,bl=new z(1,0,0),Sl=new z(0,1,0),wl=new z(0,0,1),El={type:"added"},V0={type:"removed"},hs={type:"childadded",child:null},ta={type:"childremoved",child:null};class tn extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const t=new z,e=new En,n=new ui,s=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new ee}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.multiply(ls),this}rotateOnWorldAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.premultiply(ls),this}rotateX(t){return this.rotateOnAxis(bl,t)}rotateY(t){return this.rotateOnAxis(Sl,t)}rotateZ(t){return this.rotateOnAxis(wl,t)}translateOnAxis(t,e){return yl.copy(t).applyQuaternion(this.quaternion),this.position.add(yl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bl,t)}translateY(t){return this.translateOnAxis(Sl,t)}translateZ(t){return this.translateOnAxis(wl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qr.copy(t):qr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Zs,qr,this.up):ei.lookAt(qr,Zs,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),ls.setFromRotationMatrix(ei),this.quaternion.premultiply(ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(El),hs.child=t,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(V0),ta.child=t,this.dispatchEvent(ta),ta.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(El),hs.child=t,this.dispatchEvent(hs),hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,t,H0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,G0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),f=o(t.images),u=o(t.shapes),d=o(t.skeletons),h=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){const c=[];for(const l in a){const f=a[l];delete f.metadata,c.push(f)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}tn.DEFAULT_UP=new z(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new z,ni=new z,ea=new z,ii=new z,us=new z,fs=new z,Tl=new z,na=new z,ia=new z,sa=new z,ra=new Be,oa=new Be,aa=new Be;class kn{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Nn.subVectors(t,e),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Nn.subVectors(s,e),ni.subVectors(n,e),ea.subVectors(t,e);const o=Nn.dot(Nn),a=Nn.dot(ni),c=Nn.dot(ea),l=ni.dot(ni),f=ni.dot(ea),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,h=(l*c-a*f)*d,p=(o*f-a*c)*d;return r.set(1-h-p,p,h)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ii.x),c.addScaledVector(o,ii.y),c.addScaledVector(a,ii.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return ra.setScalar(0),oa.setScalar(0),aa.setScalar(0),ra.fromBufferAttribute(t,e),oa.fromBufferAttribute(t,n),aa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ra,r.x),o.addScaledVector(oa,r.y),o.addScaledVector(aa,r.z),o}static isFrontFacing(t,e,n,s){return Nn.subVectors(n,e),ni.subVectors(t,e),Nn.cross(ni).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Nn.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return kn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return kn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return kn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return kn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return kn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;us.subVectors(s,n),fs.subVectors(r,n),na.subVectors(t,n);const c=us.dot(na),l=fs.dot(na);if(c<=0&&l<=0)return e.copy(n);ia.subVectors(t,s);const f=us.dot(ia),u=fs.dot(ia);if(f>=0&&u<=f)return e.copy(s);const d=c*u-f*l;if(d<=0&&c>=0&&f<=0)return o=c/(c-f),e.copy(n).addScaledVector(us,o);sa.subVectors(t,r);const h=us.dot(sa),p=fs.dot(sa);if(p>=0&&h<=p)return e.copy(r);const x=h*l-c*p;if(x<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(fs,a);const g=f*p-h*u;if(g<=0&&u-f>=0&&h-p>=0)return Tl.subVectors(r,s),a=(u-f)/(u-f+(h-p)),e.copy(s).addScaledVector(Tl,a);const m=1/(g+x+d);return o=x*m,a=d*m,e.copy(n).addScaledVector(us,o).addScaledVector(fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function ca(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ge.workingColorSpace){if(t=Pc(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ca(o,r,t+1/3),this.g=ca(o,r,t),this.b=ca(o,r,t-1/3)}return ge.colorSpaceToWorking(this,s),this}setStyle(t,e=sn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=sn){const n=gu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return ge.workingToColorSpace(nn.copy(this),t),Math.round(ae(nn.r*255,0,255))*65536+Math.round(ae(nn.g*255,0,255))*256+Math.round(ae(nn.b*255,0,255))}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace(nn.copy(this),e);const n=nn.r,s=nn.g,r=nn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const f=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=f<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=f,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=sn){ge.workingToColorSpace(nn.copy(this),t);const e=nn.r,n=nn.g,s=nn.b;return t!==sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(Yr);const n=ar(gi.h,Yr.h,e),s=ar(gi.s,Yr.s,e),r=ar(gi.l,Yr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Ft;Ft.NAMES=gu;let W0=0;class Dr extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=Cs,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ta,this.blendDst=Aa,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ul,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ta&&(n.blendSrc=this.blendSrc),this.blendDst!==Aa&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ul&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class xe extends Dr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const We=new z,$r=new Lt;let X0=0;class Ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:X0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fl,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$r.fromBufferAttribute(this,e),$r.applyMatrix3(t),this.setXY(e,$r.x,$r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ys(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ys(e,this.array)),e}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ys(e,this.array)),e}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ys(e,this.array)),e}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ys(e,this.array)),e}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fl&&(t.usage=this.usage),t}}class xu extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class _u extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class le extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let q0=0;const Rn=new fe,la=new tn,ds=new z,yn=new ts,Js=new ts,je=new z;class Fe extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(du(t)?_u:xu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return la.lookAt(t),la.updateMatrix(),this.applyMatrix4(la.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new le(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Js.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(yn.min,Js.min),yn.expandByPoint(je),je.addVectors(yn.max,Js.max),yn.expandByPoint(je)):(yn.expandByPoint(Js.min),yn.expandByPoint(Js.max))}yn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(je));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,f=a.count;l<f;l++)je.fromBufferAttribute(a,l),c&&(ds.fromBufferAttribute(t,l),je.add(ds)),s=Math.max(s,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new z,c[C]=new z;const l=new z,f=new z,u=new z,d=new Lt,h=new Lt,p=new Lt,x=new z,g=new z;function m(C,b,y){l.fromBufferAttribute(n,C),f.fromBufferAttribute(n,b),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,C),h.fromBufferAttribute(r,b),p.fromBufferAttribute(r,y),f.sub(l),u.sub(l),h.sub(d),p.sub(d);const D=1/(h.x*p.y-p.x*h.y);isFinite(D)&&(x.copy(f).multiplyScalar(p.y).addScaledVector(u,-h.y).multiplyScalar(D),g.copy(u).multiplyScalar(h.x).addScaledVector(f,-p.x).multiplyScalar(D),a[C].add(x),a[b].add(x),a[y].add(x),c[C].add(g),c[b].add(g),c[y].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let C=0,b=v.length;C<b;++C){const y=v[C],D=y.start,N=y.count;for(let Y=D,q=D+N;Y<q;Y+=3)m(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const _=new z,M=new z,w=new z,T=new z;function A(C){w.fromBufferAttribute(s,C),T.copy(w);const b=a[C];_.copy(b),_.sub(w.multiplyScalar(w.dot(b))).normalize(),M.crossVectors(T,b);const D=M.dot(c[C])<0?-1:1;o.setXYZW(C,_.x,_.y,_.z,D)}for(let C=0,b=v.length;C<b;++C){const y=v[C],D=y.start,N=y.count;for(let Y=D,q=D+N;Y<q;Y+=3)A(t.getX(Y+0)),A(t.getX(Y+1)),A(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const s=new z,r=new z,o=new z,a=new z,c=new z,l=new z,f=new z,u=new z;if(t)for(let d=0,h=t.count;d<h;d+=3){const p=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),f.subVectors(o,r),u.subVectors(s,r),f.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(f),c.add(f),l.add(f),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,h=e.count;d<h;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),f.subVectors(o,r),u.subVectors(s,r),f.cross(u),n.setXYZ(d+0,f.x,f.y,f.z),n.setXYZ(d+1,f.x,f.y,f.z),n.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,c){const l=a.array,f=a.itemSize,u=a.normalized,d=new l.constructor(c.length*f);let h=0,p=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?h=c[x]*a.data.stride+a.offset:h=c[x]*f;for(let m=0;m<f;m++)d[p++]=l[h++]}return new Ve(d,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fe,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let f=0,u=l.length;f<u;f++){const d=l[f],h=t(d,n);c.push(h)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let u=0,d=l.length;u<d;u++){const h=l[u];f.push(h.toJSON(t.data))}f.length>0&&(s[c]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const f=s[l];this.setAttribute(l,f.clone(e))}const r=t.morphAttributes;for(const l in r){const f=[],u=r[l];for(let d=0,h=u.length;d<h;d++)f.push(u[d].clone(e));this.morphAttributes[l]=f}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,f=o.length;l<f;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Al=new fe,Ui=new F0,jr=new Lr,Cl=new z,Kr=new z,Zr=new z,Jr=new z,ha=new z,Qr=new z,Rl=new z,to=new z;class se extends tn{constructor(t=new Fe,e=new xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Qr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const f=a[c],u=r[c];f!==0&&(ha.fromBufferAttribute(u,t),o?Qr.addScaledVector(ha,f):Qr.addScaledVector(ha.sub(e),f))}e.add(Qr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(r),Ui.copy(t.ray).recast(t.near),!(jr.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(jr,Cl)===null||Ui.origin.distanceToSquared(Cl)>(t.far-t.near)**2))&&(Al.copy(r).invert(),Ui.copy(t.ray).applyMatrix4(Al),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ui)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,f=r.attributes.uv1,u=r.attributes.normal,d=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){const g=d[p],m=o[g.materialIndex],v=Math.max(g.start,h.start),_=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let M=v,w=_;M<w;M+=3){const T=a.getX(M),A=a.getX(M+1),C=a.getX(M+2);s=eo(this,m,t,n,l,f,u,T,A,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let g=p,m=x;g<m;g+=3){const v=a.getX(g),_=a.getX(g+1),M=a.getX(g+2);s=eo(this,o,t,n,l,f,u,v,_,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){const g=d[p],m=o[g.materialIndex],v=Math.max(g.start,h.start),_=Math.min(c.count,Math.min(g.start+g.count,h.start+h.count));for(let M=v,w=_;M<w;M+=3){const T=M,A=M+1,C=M+2;s=eo(this,m,t,n,l,f,u,T,A,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,h.start),x=Math.min(c.count,h.start+h.count);for(let g=p,m=x;g<m;g+=3){const v=g,_=g+1,M=g+2;s=eo(this,o,t,n,l,f,u,v,_,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Y0(i,t,e,n,s,r,o,a){let c;if(t.side===dn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Ci,a),c===null)return null;to.copy(a),to.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(to);return l<e.near||l>e.far?null:{distance:l,point:to.clone(),object:i}}function eo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Kr),i.getVertexPosition(c,Zr),i.getVertexPosition(l,Jr);const f=Y0(i,t,e,n,Kr,Zr,Jr,Rl);if(f){const u=new z;kn.getBarycoord(Rl,Kr,Zr,Jr,u),s&&(f.uv=kn.getInterpolatedAttribute(s,a,c,l,u,new Lt)),r&&(f.uv1=kn.getInterpolatedAttribute(r,a,c,l,u,new Lt)),o&&(f.normal=kn.getInterpolatedAttribute(o,a,c,l,u,new z),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new z,materialIndex:0};kn.getNormal(Kr,Zr,Jr,d.normal),f.face=d,f.barycoord=u}return f}class Ii extends Fe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],f=[],u=[];let d=0,h=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(f,3)),this.setAttribute("uv",new le(u,2));function p(x,g,m,v,_,M,w,T,A,C,b){const y=M/A,D=w/C,N=M/2,Y=w/2,q=T/2,V=A+1,Z=C+1;let ct=0,K=0;const mt=new z;for(let xt=0;xt<Z;xt++){const _t=xt*D-Y;for(let Dt=0;Dt<V;Dt++){const ne=Dt*y-N;mt[x]=ne*v,mt[g]=_t*_,mt[m]=q,l.push(mt.x,mt.y,mt.z),mt[x]=0,mt[g]=0,mt[m]=T>0?1:-1,f.push(mt.x,mt.y,mt.z),u.push(Dt/A),u.push(1-xt/C),ct+=1}}for(let xt=0;xt<C;xt++)for(let _t=0;_t<A;_t++){const Dt=d+_t+V*xt,ne=d+_t+V*(xt+1),re=d+(_t+1)+V*(xt+1),oe=d+(_t+1)+V*xt;c.push(Dt,ne,oe),c.push(ne,re,oe),K+=6}a.addGroup(h,K,b),h+=K,d+=ct}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ii(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ks(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ln(i){const t={};for(let e=0;e<i.length;e++){const n=ks(i[e]);for(const s in n)t[s]=n[s]}return t}function $0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function vu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}const j0={clone:ks,merge:ln};var K0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Z0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends Dr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=K0,this.fragmentShader=Z0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ks(t.uniforms),this.uniformsGroups=$0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Mu extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new z,Pl=new Lt,Il=new Lt;class In extends Mu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Mr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xi.x,xi.y).multiplyScalar(-t/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-t/xi.z)}getViewSize(t,e){return this.getViewBounds(t,Pl,Il),e.subVectors(Il,Pl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(or*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ps=-90,ms=1;class J0 extends tn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new In(ps,ms,t,e);s.layers=this.layers,this.add(s);const r=new In(ps,ms,t,e);r.layers=this.layers,this.add(r);const o=new In(ps,ms,t,e);o.layers=this.layers,this.add(o);const a=new In(ps,ms,t,e);a.layers=this.layers,this.add(a);const c=new In(ps,ms,t,e);c.layers=this.layers,this.add(c);const l=new In(ps,ms,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===$n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Po)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,f]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,f),t.setRenderTarget(u,d,h),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class yu extends rn{constructor(t=[],e=Us,n,s,r,o,a,c,l,f){super(t,e,n,s,r,o,a,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Q0 extends Ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new yu(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ii(5,5,5),r=new Ri({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:Ti});r.uniforms.tEquirect.value=e;const o=new se(s,r),a=e.minFilter;return e.minFilter===Wi&&(e.minFilter=qn),new J0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class hn extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const td={type:"move"};class ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),m=this._getHandJoint(l,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const f=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=f.position.distanceTo(u.position),h=.02,p=.005;l.inputState.pinching&&d>h+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=h-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(td)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new hn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Lc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ft(t),this.near=e,this.far=n}clone(){return new Lc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ll extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ed extends rn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=wn,f=wn,u,d){super(null,o,a,c,l,f,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uc extends Ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const gs=new fe,Dl=new fe,no=[],zl=new ts,nd=new fe,Qs=new se,tr=new Lr;class yi extends se{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new uc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,nd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ts),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gs),zl.copy(t.boundingBox).applyMatrix4(gs),this.boundingBox.union(zl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Lr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gs),tr.copy(t.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(tr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Qs.geometry=this.geometry,Qs.material=this.material,Qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(n),t.ray.intersectsSphere(tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gs),Dl.multiplyMatrices(n,gs),Qs.matrixWorld=Dl,Qs.raycast(t,no);for(let o=0,a=no.length;o<a;o++){const c=no[o];c.instanceId=r,c.object=this,e.push(c)}no.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new uc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ed(new Float32Array(s*this.count),s,this.count,Tc,Yn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const fa=new z,id=new z,sd=new ee;class Oi{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=fa.subVectors(n,e).cross(id.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(fa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||sd.getNormalMatrix(t),s=this.coplanarPoint(fa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Lr,rd=new Lt(.5,.5),io=new z;class Dc{constructor(t=new Oi,e=new Oi,n=new Oi,s=new Oi,r=new Oi,o=new Oi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$n,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],f=r[4],u=r[5],d=r[6],h=r[7],p=r[8],x=r[9],g=r[10],m=r[11],v=r[12],_=r[13],M=r[14],w=r[15];if(s[0].setComponents(l-o,h-f,m-p,w-v).normalize(),s[1].setComponents(l+o,h+f,m+p,w+v).normalize(),s[2].setComponents(l+a,h+u,m+x,w+_).normalize(),s[3].setComponents(l-a,h-u,m-x,w-_).normalize(),n)s[4].setComponents(c,d,g,M).normalize(),s[5].setComponents(l-c,h-d,m-g,w-M).normalize();else if(s[4].setComponents(l-c,h-d,m-g,w-M).normalize(),e===$n)s[5].setComponents(l+c,h+d,m+g,w+M).normalize();else if(e===Po)s[5].setComponents(c,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(t){Ni.center.set(0,0,0);const e=rd.distanceTo(t.center);return Ni.radius=.7071067811865476+e,Ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(io.x=s.normal.x>0?t.max.x:t.min.x,io.y=s.normal.y>0?t.max.y:t.min.y,io.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(io)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zc extends rn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bu extends rn{constructor(t,e,n=ji,s,r,o,a=wn,c=wn,l,f=_r,u=1){if(f!==_r&&f!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,o,a,c,f,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ic(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Su extends rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Gs extends Fe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new z,f=new Lt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const h=n+u/e*s;l.x=t*Math.cos(h),l.y=t*Math.sin(h),o.push(l.x,l.y,l.z),a.push(0,0,1),f.x=(o[d]/t+1)/2,f.y=(o[d+1]/t+1)/2,c.push(f.x,f.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(a,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Bn extends Fe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const f=[],u=[],d=[],h=[];let p=0;const x=[],g=n/2;let m=0;v(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(f),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(h,2));function v(){const M=new z,w=new z;let T=0;const A=(e-t)/n;for(let C=0;C<=r;C++){const b=[],y=C/r,D=y*(e-t)+t;for(let N=0;N<=s;N++){const Y=N/s,q=Y*c+a,V=Math.sin(q),Z=Math.cos(q);w.x=D*V,w.y=-y*n+g,w.z=D*Z,u.push(w.x,w.y,w.z),M.set(V,A,Z).normalize(),d.push(M.x,M.y,M.z),h.push(Y,1-y),b.push(p++)}x.push(b)}for(let C=0;C<s;C++)for(let b=0;b<r;b++){const y=x[b][C],D=x[b+1][C],N=x[b+1][C+1],Y=x[b][C+1];(t>0||b!==0)&&(f.push(y,D,Y),T+=3),(e>0||b!==r-1)&&(f.push(D,N,Y),T+=3)}l.addGroup(m,T,0),m+=T}function _(M){const w=p,T=new Lt,A=new z;let C=0;const b=M===!0?t:e,y=M===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,g*y,0),d.push(0,y,0),h.push(.5,.5),p++;const D=p;for(let N=0;N<=s;N++){const q=N/s*c+a,V=Math.cos(q),Z=Math.sin(q);A.x=b*Z,A.y=g*y,A.z=b*V,u.push(A.x,A.y,A.z),d.push(0,y,0),T.x=V*.5+.5,T.y=Z*.5*y+.5,h.push(T.x,T.y),p++}for(let N=0;N<s;N++){const Y=w+N,q=D+N;M===!0?f.push(q,q+1,Y):f.push(q+1,q,Y),C+=3}l.addGroup(m,C,M===!0?1:2),m+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class bi extends Bn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new bi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vs extends Fe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),f(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const _=new z,M=new z,w=new z;for(let T=0;T<e.length;T+=3)h(e[T+0],_),h(e[T+1],M),h(e[T+2],w),c(_,M,w,v)}function c(v,_,M,w){const T=w+1,A=[];for(let C=0;C<=T;C++){A[C]=[];const b=v.clone().lerp(M,C/T),y=_.clone().lerp(M,C/T),D=T-C;for(let N=0;N<=D;N++)N===0&&C===T?A[C][N]=b:A[C][N]=b.clone().lerp(y,N/D)}for(let C=0;C<T;C++)for(let b=0;b<2*(T-C)-1;b++){const y=Math.floor(b/2);b%2===0?(d(A[C][y+1]),d(A[C+1][y]),d(A[C][y])):(d(A[C][y+1]),d(A[C+1][y+1]),d(A[C+1][y]))}}function l(v){const _=new z;for(let M=0;M<r.length;M+=3)_.x=r[M+0],_.y=r[M+1],_.z=r[M+2],_.normalize().multiplyScalar(v),r[M+0]=_.x,r[M+1]=_.y,r[M+2]=_.z}function f(){const v=new z;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];const M=g(v)/2/Math.PI+.5,w=m(v)/Math.PI+.5;o.push(M,1-w)}p(),u()}function u(){for(let v=0;v<o.length;v+=6){const _=o[v+0],M=o[v+2],w=o[v+4],T=Math.max(_,M,w),A=Math.min(_,M,w);T>.9&&A<.1&&(_<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),w<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function h(v,_){const M=v*3;_.x=t[M+0],_.y=t[M+1],_.z=t[M+2]}function p(){const v=new z,_=new z,M=new z,w=new z,T=new Lt,A=new Lt,C=new Lt;for(let b=0,y=0;b<r.length;b+=9,y+=6){v.set(r[b+0],r[b+1],r[b+2]),_.set(r[b+3],r[b+4],r[b+5]),M.set(r[b+6],r[b+7],r[b+8]),T.set(o[y+0],o[y+1]),A.set(o[y+2],o[y+3]),C.set(o[y+4],o[y+5]),w.copy(v).add(_).add(M).divideScalar(3);const D=g(w);x(T,y+0,v,D),x(A,y+2,_,D),x(C,y+4,M,D)}}function x(v,_,M,w){w<0&&v.x===1&&(o[_]=v.x-1),M.x===0&&M.z===0&&(o[_]=w/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vs(t.vertices,t.indices,t.radius,t.details)}}class Uc extends Vs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Uc(t.radius,t.detail)}}class Kn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const f=n[s],d=n[s+1]-f,h=(o-f)/d;return(s+h)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Lt:new z);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new z,s=[],r=[],o=[],a=new z,c=new fe;for(let h=0;h<=t;h++){const p=h/t;s[h]=this.getTangentAt(p,new z)}r[0]=new z,o[0]=new z;let l=Number.MAX_VALUE;const f=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);f<=l&&(l=f,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=t;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(ae(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(c.makeRotationAxis(a,p))}o[h].crossVectors(s[h],r[h])}if(e===!0){let h=Math.acos(ae(r[0].dot(r[t]),-1,1));h/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(h=-h);for(let p=1;p<=t;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],h*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Nc extends Kn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Lt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,h=l-this.aY;c=d*f-h*u+this.aX,l=d*u+h*f+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class od extends Nc{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Fc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,f,u){let d=(o-r)/l-(a-r)/(l+f)+(a-o)/f,h=(a-o)/f-(c-o)/(f+u)+(c-a)/u;d*=f,h*=f,s(o,a,d,h)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const so=new z,da=new Fc,pa=new Fc,ma=new Fc;class ad extends Kn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new z){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,f;this.closed||a>0?l=s[(a-1)%r]:(so.subVectors(s[0],s[1]).add(s[0]),l=so);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?f=s[(a+2)%r]:(so.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=so),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(u),h),x=Math.pow(u.distanceToSquared(d),h),g=Math.pow(d.distanceToSquared(f),h);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),da.initNonuniformCatmullRom(l.x,u.x,d.x,f.x,p,x,g),pa.initNonuniformCatmullRom(l.y,u.y,d.y,f.y,p,x,g),ma.initNonuniformCatmullRom(l.z,u.z,d.z,f.z,p,x,g)}else this.curveType==="catmullrom"&&(da.initCatmullRom(l.x,u.x,d.x,f.x,this.tension),pa.initCatmullRom(l.y,u.y,d.y,f.y,this.tension),ma.initCatmullRom(l.z,u.z,d.z,f.z,this.tension));return n.set(da.calc(c),pa.calc(c),ma.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ul(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function cd(i,t){const e=1-i;return e*e*t}function ld(i,t){return 2*(1-i)*i*t}function hd(i,t){return i*i*t}function cr(i,t,e,n){return cd(i,t)+ld(i,e)+hd(i,n)}function ud(i,t){const e=1-i;return e*e*e*t}function fd(i,t){const e=1-i;return 3*e*e*i*t}function dd(i,t){return 3*(1-i)*i*i*t}function pd(i,t){return i*i*i*t}function lr(i,t,e,n,s){return ud(i,t)+fd(i,e)+dd(i,n)+pd(i,s)}class wu extends Kn{constructor(t=new Lt,e=new Lt,n=new Lt,s=new Lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Lt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(lr(t,s.x,r.x,o.x,a.x),lr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class md extends Kn{constructor(t=new z,e=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new z){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(lr(t,s.x,r.x,o.x,a.x),lr(t,s.y,r.y,o.y,a.y),lr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Eu extends Kn{constructor(t=new Lt,e=new Lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gd extends Kn{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tu extends Kn{constructor(t=new Lt,e=new Lt,n=new Lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Lt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(cr(t,s.x,r.x,o.x),cr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xd extends Kn{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(cr(t,s.x,r.x,o.x),cr(t,s.y,r.y,o.y),cr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Au extends Kn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Lt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],f=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Ul(a,c.x,l.x,f.x,u.x),Ul(a,c.y,l.y,f.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Lt().fromArray(s))}return this}}var Nl=Object.freeze({__proto__:null,ArcCurve:od,CatmullRomCurve3:ad,CubicBezierCurve:wu,CubicBezierCurve3:md,EllipseCurve:Nc,LineCurve:Eu,LineCurve3:gd,QuadraticBezierCurve:Tu,QuadraticBezierCurve3:xd,SplineCurve:Au});class _d extends Kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const f=c[l];n&&n.equals(f)||(e.push(f),n=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Nl[s.type]().fromJSON(s))}return this}}class Fl extends _d{constructor(t){super(),this.type="Path",this.currentPoint=new Lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Eu(this.currentPoint.clone(),new Lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Tu(this.currentPoint.clone(),new Lt(t,e),new Lt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new wu(this.currentPoint.clone(),new Lt(t,e),new Lt(n,s),new Lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Au(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+l,e+f,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Nc(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const f=l.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Cu extends Fl{constructor(t){super(t),this.uuid=Qi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Fl().fromJSON(s))}return this}}function vd(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Ru(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=wd(i,t,r,e)),i.length>80*e){a=1/0,c=1/0;let f=-1/0,u=-1/0;for(let d=e;d<s;d+=e){const h=i[d],p=i[d+1];h<a&&(a=h),p<c&&(c=p),h>f&&(f=h),p>u&&(u=p)}l=Math.max(f-a,u-c),l=l!==0?32767/l:0}return br(r,o,e,a,c,l,0),o}function Ru(i,t,e,n,s){let r;if(s===Ud(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=kl(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=kl(o/n|0,i[o],i[o+1],r);return r&&Os(r,r.next)&&(wr(r),r=r.next),r}function Zi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Os(e,e.next)||Ue(e.prev,e,e.next)===0)){if(wr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function br(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Rd(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?yd(i,n,s,r):Md(i)){t.push(c.i,i.i,l.i),wr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=bd(Zi(i),t),br(i,t,e,n,s,r,2)):o===2&&Sd(i,t,e,n,s,r):br(Zi(i),t,e,n,s,r,1);break}}}function Md(i){const t=i.prev,e=i,n=i.next;if(Ue(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,f=Math.min(s,r,o),u=Math.min(a,c,l),d=Math.max(s,r,o),h=Math.max(a,c,l);let p=n.next;for(;p!==t;){if(p.x>=f&&p.x<=d&&p.y>=u&&p.y<=h&&sr(s,a,r,c,o,l,p.x,p.y)&&Ue(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function yd(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Ue(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,f=s.y,u=r.y,d=o.y,h=Math.min(a,c,l),p=Math.min(f,u,d),x=Math.max(a,c,l),g=Math.max(f,u,d),m=fc(h,p,t,e,n),v=fc(x,g,t,e,n);let _=i.prevZ,M=i.nextZ;for(;_&&_.z>=m&&M&&M.z<=v;){if(_.x>=h&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&sr(a,f,c,u,l,d,_.x,_.y)&&Ue(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=h&&M.x<=x&&M.y>=p&&M.y<=g&&M!==s&&M!==o&&sr(a,f,c,u,l,d,M.x,M.y)&&Ue(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=m;){if(_.x>=h&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&sr(a,f,c,u,l,d,_.x,_.y)&&Ue(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=v;){if(M.x>=h&&M.x<=x&&M.y>=p&&M.y<=g&&M!==s&&M!==o&&sr(a,f,c,u,l,d,M.x,M.y)&&Ue(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function bd(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Os(n,s)&&Iu(n,e,e.next,s)&&Sr(n,s)&&Sr(s,n)&&(t.push(n.i,e.i,s.i),wr(e),wr(e.next),e=i=s),e=e.next}while(e!==i);return Zi(e)}function Sd(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ld(o,a)){let c=Lu(o,a);o=Zi(o,o.next),c=Zi(c,c.next),br(o,t,e,n,s,r,0),br(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function wd(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Ru(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Id(l))}s.sort(Ed);for(let r=0;r<s.length;r++)e=Td(s[r],e);return e}function Ed(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Td(i,t){const e=Ad(i,t);if(!e)return t;const n=Lu(e,i);return Zi(n,n.next),Zi(e,e.next)}function Ad(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Os(i,e))return e;do{if(Os(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let f=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Pu(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);Sr(e,i)&&(u<f||u===f&&(e.x>o.x||e.x===o.x&&Cd(o,e)))&&(o=e,f=u)}e=e.next}while(e!==a);return o}function Cd(i,t){return Ue(i.prev,i,t.prev)<0&&Ue(t.next,i,i.next)<0}function Rd(i,t,e,n){let s=i;do s.z===0&&(s.z=fc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Pd(s)}function Pd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function fc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Id(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Pu(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function sr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Pu(i,t,e,n,s,r,o,a)}function Ld(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Dd(i,t)&&(Sr(i,t)&&Sr(t,i)&&zd(i,t)&&(Ue(i.prev,i,t.prev)||Ue(i,t.prev,t))||Os(i,t)&&Ue(i.prev,i,i.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Os(i,t){return i.x===t.x&&i.y===t.y}function Iu(i,t,e,n){const s=oo(Ue(i,t,e)),r=oo(Ue(i,t,n)),o=oo(Ue(e,n,i)),a=oo(Ue(e,n,t));return!!(s!==r&&o!==a||s===0&&ro(i,e,t)||r===0&&ro(i,n,t)||o===0&&ro(e,i,n)||a===0&&ro(e,t,n))}function ro(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function oo(i){return i>0?1:i<0?-1:0}function Dd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Iu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Sr(i,t){return Ue(i.prev,i,i.next)<0?Ue(i,t,i.next)>=0&&Ue(i,i.prev,t)>=0:Ue(i,t,i.prev)<0||Ue(i,i.next,t)<0}function zd(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Lu(i,t){const e=dc(i.i,i.x,i.y),n=dc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function kl(i,t,e,n){const s=dc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function wr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function dc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ud(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Nd{static triangulate(t,e,n=2){return vd(t,e,n)}}class hr{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return hr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Ol(t),Bl(n,t);let o=t.length;e.forEach(Ol);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Bl(n,e[c]);const a=Nd.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Ol(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Bl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Er extends Vs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Er(t.radius,t.detail)}}class Bs extends Vs{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Bs(t.radius,t.detail)}}class Ln extends Fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,f=c+1,u=t/a,d=e/c,h=[],p=[],x=[],g=[];for(let m=0;m<f;m++){const v=m*d-o;for(let _=0;_<l;_++){const M=_*u-r;p.push(M,-v,0),x.push(0,0,1),g.push(_/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<a;v++){const _=v+l*m,M=v+l*(m+1),w=v+1+l*(m+1),T=v+1+l*m;h.push(_,M,T),h.push(M,w,T)}this.setIndex(h),this.setAttribute("position",new le(p,3)),this.setAttribute("normal",new le(x,3)),this.setAttribute("uv",new le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ln(t.width,t.height,t.widthSegments,t.heightSegments)}}class Si extends Fe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],f=[];let u=t;const d=(e-t)/s,h=new z,p=new Lt;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){const m=r+g/n*o;h.x=u*Math.cos(m),h.y=u*Math.sin(m),c.push(h.x,h.y,h.z),l.push(0,0,1),p.x=(h.x/e+1)/2,p.y=(h.y/e+1)/2,f.push(p.x,p.y)}u+=d}for(let x=0;x<s;x++){const g=x*(n+1);for(let m=0;m<n;m++){const v=m+g,_=v,M=v+n+1,w=v+n+2,T=v+1;a.push(_,M,T),a.push(M,w,T)}}this.setIndex(a),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Si(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class kc extends Fe{constructor(t=new Cu([new Lt(0,.5),new Lt(-.5,-.5),new Lt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let f=0;f<t.length;f++)l(t[f]),this.addGroup(a,c,f),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new le(s,3)),this.setAttribute("normal",new le(r,3)),this.setAttribute("uv",new le(o,2));function l(f){const u=s.length/3,d=f.extractPoints(e);let h=d.shape;const p=d.holes;hr.isClockWise(h)===!1&&(h=h.reverse());for(let g=0,m=p.length;g<m;g++){const v=p[g];hr.isClockWise(v)===!0&&(p[g]=v.reverse())}const x=hr.triangulateShape(h,p);for(let g=0,m=p.length;g<m;g++){const v=p[g];h=h.concat(v)}for(let g=0,m=h.length;g<m;g++){const v=h[g];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let g=0,m=x.length;g<m;g++){const v=x[g],_=v[0]+u,M=v[1]+u,w=v[2]+u;n.push(_,M,w),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Fd(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new kc(n,t.curveSegments)}}function Fd(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Ai extends Fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const f=[],u=new z,d=new z,h=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){const v=[],_=m/n;let M=0;m===0&&o===0?M=.5/e:m===n&&c===Math.PI&&(M=-.5/e);for(let w=0;w<=e;w++){const T=w/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+_*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(T+M,1-_),v.push(l++)}f.push(v)}for(let m=0;m<n;m++)for(let v=0;v<e;v++){const _=f[m][v+1],M=f[m][v],w=f[m+1][v],T=f[m+1][v+1];(m!==0||o>0)&&h.push(_,M,T),(m!==n-1||c<Math.PI)&&h.push(M,w,T)}this.setIndex(h),this.setAttribute("position",new le(p,3)),this.setAttribute("normal",new le(x,3)),this.setAttribute("uv",new le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Oc extends Vs{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Oc(t.radius,t.detail)}}class ur extends Fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],f=new z,u=new z,d=new z;for(let h=0;h<=n;h++)for(let p=0;p<=s;p++){const x=p/s*r,g=h/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),f.x=t*Math.cos(x),f.y=t*Math.sin(x),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),l.push(p/s),l.push(h/n)}for(let h=1;h<=n;h++)for(let p=1;p<=s;p++){const x=(s+1)*h+p-1,g=(s+1)*(h-1)+p-1,m=(s+1)*(h-1)+p,v=(s+1)*h+p;o.push(x,g,v),o.push(g,m,v)}this.setIndex(o),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ur(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Eo extends Dr{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uu,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class kd extends Dr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=n0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Od extends Dr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Du extends tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Hl extends Du{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ga=new fe,Gl=new z,Vl=new z;class Bd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dc,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Gl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Gl),Vl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vl),e.updateMatrixWorld(),ga.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ga,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ga)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class zu extends Mu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Hd extends Bd{constructor(){super(new zu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wl extends Du{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new Hd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Gd extends In{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Xl(i,t,e,n){const s=Vd(n);switch(e){case cu:return i*t;case Tc:return i*t/s.components*s.byteLength;case Ac:return i*t/s.components*s.byteLength;case hu:return i*t*2/s.components*s.byteLength;case Cc:return i*t*2/s.components*s.byteLength;case lu:return i*t*3/s.components*s.byteLength;case On:return i*t*4/s.components*s.byteLength;case Rc:return i*t*4/s.components*s.byteLength;case yo:case bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case So:case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ka:case Ba:return Math.max(i,16)*Math.max(t,8)/4;case Fa:case Oa:return Math.max(i,8)*Math.max(t,8)/2;case Ha:case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Za:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case tc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case nc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ic:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case sc:case rc:case oc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ac:case cc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case lc:case hc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vd(i){switch(i){case jn:case su:return{byteLength:1,components:1};case gr:case ru:case Ir:return{byteLength:2,components:1};case wc:case Ec:return{byteLength:2,components:4};case ji:case Sc:case Yn:return{byteLength:4,components:1};case ou:case au:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yc);function Uu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Wd(i){const t=new WeakMap;function e(a,c){const l=a.array,f=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,f),a.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const f=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,f);else{u.sort((h,p)=>h.start-p.start);let d=0;for(let h=1;h<u.length;h++){const p=u[d],x=u[h];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let h=0,p=u.length;h<p;h++){const x=u[h];i.bufferSubData(l,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Xd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qd=`#ifdef USE_ALPHAHASH
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
#endif`,Yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zd=`#ifdef USE_AOMAP
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
#endif`,Jd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qd=`#ifdef USE_BATCHING
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
#endif`,tp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,np=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ip=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sp=`#ifdef USE_IRIDESCENCE
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
#endif`,rp=`#ifdef USE_BUMPMAP
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
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pp=`#define PI 3.141592653589793
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
} // validated`,mp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gp=`vec3 transformedNormal = objectNormal;
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
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",bp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sp=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ep=`#ifdef USE_ENVMAP
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
#endif`,Tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
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
#endif`,Cp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lp=`#ifdef USE_GRADIENTMAP
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
}`,Dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Np=`uniform bool receiveShadow;
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
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gp=`PhysicalMaterial material;
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
#endif`,Vp=`struct PhysicalMaterial {
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
}`,Wp=`
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
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
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
#endif`,qp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$p=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tm=`#if defined( USE_POINTS_UV )
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
#endif`,em=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,im=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`#ifdef USE_MORPHTARGETS
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
#endif`,am=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dm=`#ifdef USE_NORMALMAP
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
#endif`,pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rm=`float getShadowMask() {
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
}`,Pm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Im=`#ifdef USE_SKINNING
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
#endif`,Lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dm=`#ifdef USE_SKINNING
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
#endif`,zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,km=`#ifdef USE_TRANSMISSION
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
#endif`,Om=`#ifdef USE_TRANSMISSION
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xm=`uniform sampler2D t2D;
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`#include <common>
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
}`,Zm=`#if DEPTH_PACKING == 3200
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
}`,Jm=`#define DISTANCE
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
}`,Qm=`#define DISTANCE
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
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`uniform float scale;
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
}`,ig=`uniform vec3 diffuse;
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
}`,sg=`#include <common>
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
}`,rg=`uniform vec3 diffuse;
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
}`,og=`#define LAMBERT
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
}`,ag=`#define LAMBERT
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
}`,cg=`#define MATCAP
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
}`,lg=`#define MATCAP
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
}`,hg=`#define NORMAL
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
}`,ug=`#define NORMAL
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
}`,fg=`#define PHONG
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
}`,dg=`#define PHONG
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
}`,pg=`#define STANDARD
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
}`,mg=`#define STANDARD
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
}`,gg=`#define TOON
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
}`,xg=`#define TOON
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
}`,_g=`uniform float size;
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
}`,vg=`uniform vec3 diffuse;
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
}`,Mg=`#include <common>
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
}`,yg=`uniform vec3 color;
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
}`,bg=`uniform float rotation;
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
}`,Sg=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:Xd,alphahash_pars_fragment:qd,alphamap_fragment:Yd,alphamap_pars_fragment:$d,alphatest_fragment:jd,alphatest_pars_fragment:Kd,aomap_fragment:Zd,aomap_pars_fragment:Jd,batching_pars_vertex:Qd,batching_vertex:tp,begin_vertex:ep,beginnormal_vertex:np,bsdfs:ip,iridescence_fragment:sp,bumpmap_pars_fragment:rp,clipping_planes_fragment:op,clipping_planes_pars_fragment:ap,clipping_planes_pars_vertex:cp,clipping_planes_vertex:lp,color_fragment:hp,color_pars_fragment:up,color_pars_vertex:fp,color_vertex:dp,common:pp,cube_uv_reflection_fragment:mp,defaultnormal_vertex:gp,displacementmap_pars_vertex:xp,displacementmap_vertex:_p,emissivemap_fragment:vp,emissivemap_pars_fragment:Mp,colorspace_fragment:yp,colorspace_pars_fragment:bp,envmap_fragment:Sp,envmap_common_pars_fragment:wp,envmap_pars_fragment:Ep,envmap_pars_vertex:Tp,envmap_physical_pars_fragment:Fp,envmap_vertex:Ap,fog_vertex:Cp,fog_pars_vertex:Rp,fog_fragment:Pp,fog_pars_fragment:Ip,gradientmap_pars_fragment:Lp,lightmap_pars_fragment:Dp,lights_lambert_fragment:zp,lights_lambert_pars_fragment:Up,lights_pars_begin:Np,lights_toon_fragment:kp,lights_toon_pars_fragment:Op,lights_phong_fragment:Bp,lights_phong_pars_fragment:Hp,lights_physical_fragment:Gp,lights_physical_pars_fragment:Vp,lights_fragment_begin:Wp,lights_fragment_maps:Xp,lights_fragment_end:qp,logdepthbuf_fragment:Yp,logdepthbuf_pars_fragment:$p,logdepthbuf_pars_vertex:jp,logdepthbuf_vertex:Kp,map_fragment:Zp,map_pars_fragment:Jp,map_particle_fragment:Qp,map_particle_pars_fragment:tm,metalnessmap_fragment:em,metalnessmap_pars_fragment:nm,morphinstance_vertex:im,morphcolor_vertex:sm,morphnormal_vertex:rm,morphtarget_pars_vertex:om,morphtarget_vertex:am,normal_fragment_begin:cm,normal_fragment_maps:lm,normal_pars_fragment:hm,normal_pars_vertex:um,normal_vertex:fm,normalmap_pars_fragment:dm,clearcoat_normal_fragment_begin:pm,clearcoat_normal_fragment_maps:mm,clearcoat_pars_fragment:gm,iridescence_pars_fragment:xm,opaque_fragment:_m,packing:vm,premultiplied_alpha_fragment:Mm,project_vertex:ym,dithering_fragment:bm,dithering_pars_fragment:Sm,roughnessmap_fragment:wm,roughnessmap_pars_fragment:Em,shadowmap_pars_fragment:Tm,shadowmap_pars_vertex:Am,shadowmap_vertex:Cm,shadowmask_pars_fragment:Rm,skinbase_vertex:Pm,skinning_pars_vertex:Im,skinning_vertex:Lm,skinnormal_vertex:Dm,specularmap_fragment:zm,specularmap_pars_fragment:Um,tonemapping_fragment:Nm,tonemapping_pars_fragment:Fm,transmission_fragment:km,transmission_pars_fragment:Om,uv_pars_fragment:Bm,uv_pars_vertex:Hm,uv_vertex:Gm,worldpos_vertex:Vm,background_vert:Wm,background_frag:Xm,backgroundCube_vert:qm,backgroundCube_frag:Ym,cube_vert:$m,cube_frag:jm,depth_vert:Km,depth_frag:Zm,distanceRGBA_vert:Jm,distanceRGBA_frag:Qm,equirect_vert:tg,equirect_frag:eg,linedashed_vert:ng,linedashed_frag:ig,meshbasic_vert:sg,meshbasic_frag:rg,meshlambert_vert:og,meshlambert_frag:ag,meshmatcap_vert:cg,meshmatcap_frag:lg,meshnormal_vert:hg,meshnormal_frag:ug,meshphong_vert:fg,meshphong_frag:dg,meshphysical_vert:pg,meshphysical_frag:mg,meshtoon_vert:gg,meshtoon_frag:xg,points_vert:_g,points_frag:vg,shadow_vert:Mg,shadow_frag:yg,sprite_vert:bg,sprite_frag:Sg},Pt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Wn={basic:{uniforms:ln([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:ln([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:ln([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:ln([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:ln([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:ln([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:ln([Pt.points,Pt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:ln([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:ln([Pt.common,Pt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:ln([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:ln([Pt.sprite,Pt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:ln([Pt.common,Pt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:ln([Pt.lights,Pt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};Wn.physical={uniforms:ln([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};const ao={r:0,b:0,g:0},Fi=new En,wg=new fe;function Eg(i,t,e,n,s,r,o){const a=new Ft(0);let c=r===!0?0:1,l,f,u=null,d=0,h=null;function p(_){let M=_.isScene===!0?_.background:null;return M&&M.isTexture&&(M=(_.backgroundBlurriness>0?e:t).get(M)),M}function x(_){let M=!1;const w=p(_);w===null?m(a,c):w&&w.isColor&&(m(w,1),M=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(_,M){const w=p(M);w&&(w.isCubeTexture||w.mapping===Uo)?(f===void 0&&(f=new se(new Ii(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:ks(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(T,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),Fi.copy(M.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),f.material.uniforms.envMap.value=w,f.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(wg.makeRotationFromEuler(Fi)),f.material.toneMapped=ge.getTransfer(w.colorSpace)!==ve,(u!==w||d!==w.version||h!==i.toneMapping)&&(f.material.needsUpdate=!0,u=w,d=w.version,h=i.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new se(new Ln(2,2),new Ri({name:"BackgroundMaterial",uniforms:ks(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ge.getTransfer(w.colorSpace)!==ve,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=w,d=w.version,h=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,M){_.getRGB(ao,vu(i)),n.buffers.color.setClear(ao.r,ao.g,ao.b,M,o)}function v(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),c=M,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,m(a,c)},render:x,addToRenderList:g,dispose:v}}function Tg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,D,N,Y,q){let V=!1;const Z=u(Y,N,D);r!==Z&&(r=Z,l(r.object)),V=h(y,Y,N,q),V&&p(y,Y,N,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,M(y,D,N,Y),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function f(y){return i.deleteVertexArray(y)}function u(y,D,N){const Y=N.wireframe===!0;let q=n[y.id];q===void 0&&(q={},n[y.id]=q);let V=q[D.id];V===void 0&&(V={},q[D.id]=V);let Z=V[Y];return Z===void 0&&(Z=d(c()),V[Y]=Z),Z}function d(y){const D=[],N=[],Y=[];for(let q=0;q<e;q++)D[q]=0,N[q]=0,Y[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:Y,object:y,attributes:{},index:null}}function h(y,D,N,Y){const q=r.attributes,V=D.attributes;let Z=0;const ct=N.getAttributes();for(const K in ct)if(ct[K].location>=0){const xt=q[K];let _t=V[K];if(_t===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(_t=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(_t=y.instanceColor)),xt===void 0||xt.attribute!==_t||_t&&xt.data!==_t.data)return!0;Z++}return r.attributesNum!==Z||r.index!==Y}function p(y,D,N,Y){const q={},V=D.attributes;let Z=0;const ct=N.getAttributes();for(const K in ct)if(ct[K].location>=0){let xt=V[K];xt===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(xt=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(xt=y.instanceColor));const _t={};_t.attribute=xt,xt&&xt.data&&(_t.data=xt.data),q[K]=_t,Z++}r.attributes=q,r.attributesNum=Z,r.index=Y}function x(){const y=r.newAttributes;for(let D=0,N=y.length;D<N;D++)y[D]=0}function g(y){m(y,0)}function m(y,D){const N=r.newAttributes,Y=r.enabledAttributes,q=r.attributeDivisors;N[y]=1,Y[y]===0&&(i.enableVertexAttribArray(y),Y[y]=1),q[y]!==D&&(i.vertexAttribDivisor(y,D),q[y]=D)}function v(){const y=r.newAttributes,D=r.enabledAttributes;for(let N=0,Y=D.length;N<Y;N++)D[N]!==y[N]&&(i.disableVertexAttribArray(N),D[N]=0)}function _(y,D,N,Y,q,V,Z){Z===!0?i.vertexAttribIPointer(y,D,N,q,V):i.vertexAttribPointer(y,D,N,Y,q,V)}function M(y,D,N,Y){x();const q=Y.attributes,V=N.getAttributes(),Z=D.defaultAttributeValues;for(const ct in V){const K=V[ct];if(K.location>=0){let mt=q[ct];if(mt===void 0&&(ct==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),ct==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor)),mt!==void 0){const xt=mt.normalized,_t=mt.itemSize,Dt=t.get(mt);if(Dt===void 0)continue;const ne=Dt.buffer,re=Dt.type,oe=Dt.bytesPerElement,ft=re===i.INT||re===i.UNSIGNED_INT||mt.gpuType===Sc;if(mt.isInterleavedBufferAttribute){const U=mt.data,R=U.stride,$=mt.offset;if(U.isInstancedInterleavedBuffer){for(let ut=0;ut<K.locationSize;ut++)m(K.location+ut,U.meshPerAttribute);y.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let ut=0;ut<K.locationSize;ut++)g(K.location+ut);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let ut=0;ut<K.locationSize;ut++)_(K.location+ut,_t/K.locationSize,re,xt,R*oe,($+_t/K.locationSize*ut)*oe,ft)}else{if(mt.isInstancedBufferAttribute){for(let U=0;U<K.locationSize;U++)m(K.location+U,mt.meshPerAttribute);y.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let U=0;U<K.locationSize;U++)g(K.location+U);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let U=0;U<K.locationSize;U++)_(K.location+U,_t/K.locationSize,re,xt,_t*oe,_t/K.locationSize*U*oe,ft)}}else if(Z!==void 0){const xt=Z[ct];if(xt!==void 0)switch(xt.length){case 2:i.vertexAttrib2fv(K.location,xt);break;case 3:i.vertexAttrib3fv(K.location,xt);break;case 4:i.vertexAttrib4fv(K.location,xt);break;default:i.vertexAttrib1fv(K.location,xt)}}}}v()}function w(){C();for(const y in n){const D=n[y];for(const N in D){const Y=D[N];for(const q in Y)f(Y[q].object),delete Y[q];delete D[N]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const D=n[y.id];for(const N in D){const Y=D[N];for(const q in Y)f(Y[q].object),delete Y[q];delete D[N]}delete n[y.id]}function A(y){for(const D in n){const N=n[D];if(N[y.id]===void 0)continue;const Y=N[y.id];for(const q in Y)f(Y[q].object),delete Y[q];delete N[y.id]}}function C(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function Ag(i,t,e){let n;function s(l){n=l}function r(l,f){i.drawArrays(n,l,f),e.update(f,n,1)}function o(l,f,u){u!==0&&(i.drawArraysInstanced(n,l,f,u),e.update(f,n,u))}function a(l,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,f,0,u);let h=0;for(let p=0;p<u;p++)h+=f[p];e.update(h,n,1)}function c(l,f,u,d){if(u===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<l.length;p++)o(l[p],f[p],d[p]);else{h.multiDrawArraysInstancedWEBGL(n,l,0,f,0,d,0,u);let p=0;for(let x=0;x<u;x++)p+=f[x]*d[x];e.update(p,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Cg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==On&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===Ir&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==jn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Yn&&!C)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const f=c(l);f!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=p>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:w,maxSamples:T}}function Rg(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Oi,a=new ee,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const h=u.length!==0||d||n!==0||s;return s=d,n=u.length,h},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=f(u,d,0)},this.setState=function(u,d,h){const p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||r&&!g)r?f(null):l();else{const v=r?0:n,_=v*4;let M=m.clippingState||null;c.value=M,M=f(p,d,_,h);for(let w=0;w!==_;++w)M[w]=e[w];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(u,d,h,p){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=c.value,p!==!0||g===null){const m=h+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,M=h;_!==x;++_,M+=4)o.copy(u[_]).applyMatrix4(v,a),o.normal.toArray(g,M),g[M+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Pg(i){let t=new WeakMap;function e(o,a){return a===za?o.mapping=Us:a===Ua&&(o.mapping=Ns),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===za||a===Ua)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Q0(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ws=4,ql=[.125,.215,.35,.446,.526,.582],Gi=20,xa=new zu,Yl=new Ft;let _a=null,va=0,Ma=0,ya=!1;const Bi=(1+Math.sqrt(5))/2,xs=1/Bi,$l=[new z(-Bi,xs,0),new z(Bi,xs,0),new z(-xs,0,Bi),new z(xs,0,Bi),new z(0,Bi,-xs),new z(0,Bi,xs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],Ig=new z;class jl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Ig}=r;_a=this._renderer.getRenderTarget(),va=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_a,va,Ma),this._renderer.xr.enabled=ya,t.scissorTest=!1,co(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Us||t.mapping===Ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_a=this._renderer.getRenderTarget(),va=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:Ir,format:On,colorSpace:Fs,depthBuffer:!1},s=Kl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lg(r)),this._blurMaterial=Dg(r,t,e)}return s}_compileMaterial(t){const e=new se(this._lodPlanes[0],t);this._renderer.compile(e,xa)}_sceneToCubeUV(t,e,n,s,r){const c=new In(90,1,e,n),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Yl),u.toneMapping=ai,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const x=new xe({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),g=new se(new Ii,x);let m=!1;const v=t.background;v?v.isColor&&(x.color.copy(v),t.background=null,m=!0):(x.color.copy(Yl),m=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+f[_],r.y,r.z)):M===1?(c.up.set(0,0,l[_]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+f[_],r.z)):(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+f[_]));const w=this._cubeSize;co(s,M*w,_>2?w:0,w,w),u.setRenderTarget(s),m&&u.render(g,c),u.render(t,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Us||t.mapping===Ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new se(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;co(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,xa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$l[(s-r-1)%$l.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,u=new se(this._lodPlanes[s],l),d=l.uniforms,h=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Gi-1),x=r/p,g=isFinite(r)?1+Math.floor(f*x):Gi;g>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Gi}`);const m=[];let v=0;for(let A=0;A<Gi;++A){const C=A/x,b=Math.exp(-C*C/2);m.push(b),A===0?v+=b:A<g&&(v+=2*b)}for(let A=0;A<m.length;A++)m[A]=m[A]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=p,d.mipInt.value=_-n;const M=this._sizeLods[s],w=3*M*(s>_-ws?s-_+ws:0),T=4*(this._cubeSize-M);co(e,w,T,3*M,2*M),c.setRenderTarget(e),c.render(u,xa)}}function Lg(i){const t=[],e=[],n=[];let s=i;const r=i-ws+1+ql.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ws?c=ql[o-i+ws-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),f=-l,u=1+l,d=[f,f,u,f,u,u,f,f,u,u,f,u],h=6,p=6,x=3,g=2,m=1,v=new Float32Array(x*p*h),_=new Float32Array(g*p*h),M=new Float32Array(m*p*h);for(let T=0;T<h;T++){const A=T%3*2/3-1,C=T>2?0:-1,b=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];v.set(b,x*p*T),_.set(d,g*p*T);const y=[T,T,T,T,T,T];M.set(y,m*p*T)}const w=new Fe;w.setAttribute("position",new Ve(v,x)),w.setAttribute("uv",new Ve(_,g)),w.setAttribute("faceIndex",new Ve(M,m)),t.push(w),s>ws&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Kl(i,t,e){const n=new Ki(i,t,e);return n.texture.mapping=Uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function co(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Dg(i,t,e){const n=new Float32Array(Gi),s=new z(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Zl(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Jl(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Bc(){return`

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
	`}function zg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===za||c===Ua,f=c===Us||c===Ns;if(l||f){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new jl(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const h=a.image;return l&&h&&h.height>0||f&&h&&s(h)?(e===null&&(e=new jl(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let f=0;f<l;f++)a[f]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ug(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&yr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ng(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const p in d.attributes)t.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];const h=r.get(d);h&&(t.remove(h),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const h in d)t.update(d[h],i.ARRAY_BUFFER)}function l(u){const d=[],h=u.index,p=u.attributes.position;let x=0;if(h!==null){const v=h.array;x=h.version;for(let _=0,M=v.length;_<M;_+=3){const w=v[_+0],T=v[_+1],A=v[_+2];d.push(w,T,T,A,A,w)}}else if(p!==void 0){const v=p.array;x=p.version;for(let _=0,M=v.length/3-1;_<M;_+=3){const w=_+0,T=_+1,A=_+2;d.push(w,T,T,A,A,w)}}else return;const g=new(du(d)?_u:xu)(d,1);g.version=x;const m=r.get(u);m&&t.remove(m),r.set(u,g)}function f(u){const d=r.get(u);if(d){const h=u.index;h!==null&&d.version<h.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:f}}function Fg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,h){i.drawElements(n,h,r,d*o),e.update(h,n,1)}function l(d,h,p){p!==0&&(i.drawElementsInstanced(n,h,r,d*o,p),e.update(h,n,p))}function f(d,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=h[m];e.update(g,n,1)}function u(d,h,p,x){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)l(d[m]/o,h[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(n,h,0,r,d,0,x,0,p);let m=0;for(let v=0;v<p;v++)m+=h[v]*x[v];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=f,this.renderMultiDrawInstances=u}function kg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Og(i,t,e){const n=new WeakMap,s=new Be;function r(o,a,c){const l=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=f!==void 0?f.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let y=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var h=y;d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let M=0;p===!0&&(M=1),x===!0&&(M=2),g===!0&&(M=3);let w=a.attributes.position.count*M,T=1;w>t.maxTextureSize&&(T=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const A=new Float32Array(w*T*4*u),C=new pu(A,w,T,u);C.type=Yn,C.needsUpdate=!0;const b=M*4;for(let D=0;D<u;D++){const N=m[D],Y=v[D],q=_[D],V=w*T*4*D;for(let Z=0;Z<N.count;Z++){const ct=Z*b;p===!0&&(s.fromBufferAttribute(N,Z),A[V+ct+0]=s.x,A[V+ct+1]=s.y,A[V+ct+2]=s.z,A[V+ct+3]=0),x===!0&&(s.fromBufferAttribute(Y,Z),A[V+ct+4]=s.x,A[V+ct+5]=s.y,A[V+ct+6]=s.z,A[V+ct+7]=0),g===!0&&(s.fromBufferAttribute(q,Z),A[V+ct+8]=s.x,A[V+ct+9]=s.y,A[V+ct+10]=s.z,A[V+ct+11]=q.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new Lt(w,T)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];const x=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Bg(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,f=c.geometry,u=t.get(c,f);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const Nu=new rn,Ql=new bu(1,1),Fu=new pu,ku=new U0,Ou=new yu,th=[],eh=[],nh=new Float32Array(16),ih=new Float32Array(9),sh=new Float32Array(4);function Ws(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=th[s];if(r===void 0&&(r=new Float32Array(s),th[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function $e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function No(i,t){let e=eh[t];e===void 0&&(e=new Int32Array(t),eh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Hg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2fv(this.addr,t),$e(e,t)}}function Vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;i.uniform3fv(this.addr,t),$e(e,t)}}function Wg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4fv(this.addr,t),$e(e,t)}}function Xg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(Ye(e,n))return;sh.set(n),i.uniformMatrix2fv(this.addr,!1,sh),$e(e,n)}}function qg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(Ye(e,n))return;ih.set(n),i.uniformMatrix3fv(this.addr,!1,ih),$e(e,n)}}function Yg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(Ye(e,n))return;nh.set(n),i.uniformMatrix4fv(this.addr,!1,nh),$e(e,n)}}function $g(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function jg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2iv(this.addr,t),$e(e,t)}}function Kg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3iv(this.addr,t),$e(e,t)}}function Zg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4iv(this.addr,t),$e(e,t)}}function Jg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Qg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2uiv(this.addr,t),$e(e,t)}}function tx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3uiv(this.addr,t),$e(e,t)}}function ex(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4uiv(this.addr,t),$e(e,t)}}function nx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ql.compareFunction=fu,r=Ql):r=Nu,e.setTexture2D(t||r,s)}function ix(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ku,s)}function sx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ou,s)}function rx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Fu,s)}function ox(i){switch(i){case 5126:return Hg;case 35664:return Gg;case 35665:return Vg;case 35666:return Wg;case 35674:return Xg;case 35675:return qg;case 35676:return Yg;case 5124:case 35670:return $g;case 35667:case 35671:return jg;case 35668:case 35672:return Kg;case 35669:case 35673:return Zg;case 5125:return Jg;case 36294:return Qg;case 36295:return tx;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return nx;case 35679:case 36299:case 36307:return ix;case 35680:case 36300:case 36308:case 36293:return sx;case 36289:case 36303:case 36311:case 36292:return rx}}function ax(i,t){i.uniform1fv(this.addr,t)}function cx(i,t){const e=Ws(t,this.size,2);i.uniform2fv(this.addr,e)}function lx(i,t){const e=Ws(t,this.size,3);i.uniform3fv(this.addr,e)}function hx(i,t){const e=Ws(t,this.size,4);i.uniform4fv(this.addr,e)}function ux(i,t){const e=Ws(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function fx(i,t){const e=Ws(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function dx(i,t){const e=Ws(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function px(i,t){i.uniform1iv(this.addr,t)}function mx(i,t){i.uniform2iv(this.addr,t)}function gx(i,t){i.uniform3iv(this.addr,t)}function xx(i,t){i.uniform4iv(this.addr,t)}function _x(i,t){i.uniform1uiv(this.addr,t)}function vx(i,t){i.uniform2uiv(this.addr,t)}function Mx(i,t){i.uniform3uiv(this.addr,t)}function yx(i,t){i.uniform4uiv(this.addr,t)}function bx(i,t,e){const n=this.cache,s=t.length,r=No(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Nu,r[o])}function Sx(i,t,e){const n=this.cache,s=t.length,r=No(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ku,r[o])}function wx(i,t,e){const n=this.cache,s=t.length,r=No(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ou,r[o])}function Ex(i,t,e){const n=this.cache,s=t.length,r=No(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Fu,r[o])}function Tx(i){switch(i){case 5126:return ax;case 35664:return cx;case 35665:return lx;case 35666:return hx;case 35674:return ux;case 35675:return fx;case 35676:return dx;case 5124:case 35670:return px;case 35667:case 35671:return mx;case 35668:case 35672:return gx;case 35669:case 35673:return xx;case 5125:return _x;case 36294:return vx;case 36295:return Mx;case 36296:return yx;case 35678:case 36198:case 36298:case 36306:case 35682:return bx;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return Ex}}class Ax{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ox(e.type)}}class Cx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tx(e.type)}}class Rx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ba=/(\w+)(\])?(\[|\.)?/g;function rh(i,t){i.seq.push(t),i.map[t.id]=t}function Px(i,t,e){const n=i.name,s=n.length;for(ba.lastIndex=0;;){const r=ba.exec(n),o=ba.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){rh(e,l===void 0?new Ax(a,i,t):new Cx(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Rx(a),rh(e,u)),e=u}}}class To{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Px(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function oh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Ix=37297;let Lx=0;function Dx(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const ah=new ee;function zx(i){ge._getMatrix(ah,ge.workingColorSpace,i);const t=`mat3( ${ah.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(i)){case Ro:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ch(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Dx(i.getShaderSource(t),a)}else return r}function Ux(i,t){const e=zx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Nx(i,t){let e;switch(t){case $f:e="Linear";break;case jf:e="Reinhard";break;case Kf:e="Cineon";break;case Zf:e="ACESFilmic";break;case Qf:e="AgX";break;case t0:e="Neutral";break;case Jf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const lo=new z;function Fx(){ge.getLuminanceCoefficients(lo);const i=lo.x.toFixed(4),t=lo.y.toFixed(4),e=lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function Ox(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Bx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function rr(i){return i!==""}function lh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function pc(i){return i.replace(Hx,Vx)}const Gx=new Map;function Vx(i,t){let e=ie[t];if(e===void 0){const n=Gx.get(t);if(n!==void 0)e=ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return pc(e)}const Wx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uh(i){return i.replace(Wx,Xx)}function Xx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function qx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===nu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Af?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ri&&(t="SHADOWMAP_TYPE_VSM"),t}function Yx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Us:case Ns:t="ENVMAP_TYPE_CUBE";break;case Uo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $x(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ns&&(t="ENVMAP_MODE_REFRACTION"),t}function jx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case bc:t="ENVMAP_BLENDING_MULTIPLY";break;case qf:t="ENVMAP_BLENDING_MIX";break;case Yf:t="ENVMAP_BLENDING_ADD";break}return t}function Kx(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Zx(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=qx(e),l=Yx(e),f=$x(e),u=jx(e),d=Kx(e),h=kx(e),p=Ox(r),x=s.createProgram();let g,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(rr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(rr).join(`
`),m.length>0&&(m+=`
`)):(g=[fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),m=[fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+f:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?ie.tonemapping_pars_fragment:"",e.toneMapping!==ai?Nx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,Ux("linearToOutputTexel",e.outputColorSpace),Fx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rr).join(`
`)),o=pc(o),o=lh(o,e),o=hh(o,e),a=pc(a),a=lh(a,e),a=hh(a,e),o=uh(o),a=uh(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=v+g+o,M=v+m+a,w=oh(s,s.VERTEX_SHADER,_),T=oh(s,s.FRAGMENT_SHADER,M);s.attachShader(x,w),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(D){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(x)||"",Y=s.getShaderInfoLog(w)||"",q=s.getShaderInfoLog(T)||"",V=N.trim(),Z=Y.trim(),ct=q.trim();let K=!0,mt=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,T);else{const xt=ch(s,w,"vertex"),_t=ch(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+xt+`
`+_t)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(Z===""||ct==="")&&(mt=!1);mt&&(D.diagnostics={runnable:K,programLog:V,vertexShader:{log:Z,prefix:g},fragmentShader:{log:ct,prefix:m}})}s.deleteShader(w),s.deleteShader(T),C=new To(s,x),b=Bx(s,x)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,Ix)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Lx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=T,this}let Jx=0;class Qx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new t1(t),e.set(t,n)),n}}class t1{constructor(t){this.id=Jx++,this.code=t,this.usedTimes=0}}function e1(i,t,e,n,s,r,o){const a=new mu,c=new Qx,l=new Set,f=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let h=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function g(b,y,D,N,Y){const q=N.fog,V=Y.geometry,Z=b.isMeshStandardMaterial?N.environment:null,ct=(b.isMeshStandardMaterial?e:t).get(b.envMap||Z),K=ct&&ct.mapping===Uo?ct.image.height:null,mt=p[b.type];b.precision!==null&&(h=s.getMaxPrecision(b.precision),h!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));const xt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,_t=xt!==void 0?xt.length:0;let Dt=0;V.morphAttributes.position!==void 0&&(Dt=1),V.morphAttributes.normal!==void 0&&(Dt=2),V.morphAttributes.color!==void 0&&(Dt=3);let ne,re,oe,ft;if(mt){const Qt=Wn[mt];ne=Qt.vertexShader,re=Qt.fragmentShader}else ne=b.vertexShader,re=b.fragmentShader,c.update(b),oe=c.getVertexShaderID(b),ft=c.getFragmentShaderID(b);const U=i.getRenderTarget(),R=i.state.buffers.depth.getReversed(),$=Y.isInstancedMesh===!0,ut=Y.isBatchedMesh===!0,Tt=!!b.map,Ut=!!b.matcap,I=!!ct,Vt=!!b.aoMap,Rt=!!b.lightMap,At=!!b.bumpMap,j=!!b.normalMap,vt=!!b.displacementMap,Mt=!!b.emissiveMap,Nt=!!b.metalnessMap,ce=!!b.roughnessMap,de=b.anisotropy>0,P=b.clearcoat>0,S=b.dispersion>0,X=b.iridescence>0,lt=b.sheen>0,dt=b.transmission>0,ot=de&&!!b.anisotropyMap,Gt=P&&!!b.clearcoatMap,St=P&&!!b.clearcoatNormalMap,kt=P&&!!b.clearcoatRoughnessMap,Ht=X&&!!b.iridescenceMap,yt=X&&!!b.iridescenceThicknessMap,W=lt&&!!b.sheenColorMap,F=lt&&!!b.sheenRoughnessMap,ht=!!b.specularMap,rt=!!b.specularColorMap,pt=!!b.specularIntensityMap,L=dt&&!!b.transmissionMap,J=dt&&!!b.thicknessMap,it=!!b.gradientMap,gt=!!b.alphaMap,at=b.alphaTest>0,st=!!b.alphaHash,wt=!!b.extensions;let Ot=ai;b.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Ot=i.toneMapping);const Zt={shaderID:mt,shaderType:b.type,shaderName:b.name,vertexShader:ne,fragmentShader:re,defines:b.defines,customVertexShaderID:oe,customFragmentShaderID:ft,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:ut,batchingColor:ut&&Y._colorsTexture!==null,instancing:$,instancingColor:$&&Y.instanceColor!==null,instancingMorph:$&&Y.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:U===null?i.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Fs,alphaToCoverage:!!b.alphaToCoverage,map:Tt,matcap:Ut,envMap:I,envMapMode:I&&ct.mapping,envMapCubeUVHeight:K,aoMap:Vt,lightMap:Rt,bumpMap:At,normalMap:j,displacementMap:d&&vt,emissiveMap:Mt,normalMapObjectSpace:j&&b.normalMapType===s0,normalMapTangentSpace:j&&b.normalMapType===uu,metalnessMap:Nt,roughnessMap:ce,anisotropy:de,anisotropyMap:ot,clearcoat:P,clearcoatMap:Gt,clearcoatNormalMap:St,clearcoatRoughnessMap:kt,dispersion:S,iridescence:X,iridescenceMap:Ht,iridescenceThicknessMap:yt,sheen:lt,sheenColorMap:W,sheenRoughnessMap:F,specularMap:ht,specularColorMap:rt,specularIntensityMap:pt,transmission:dt,transmissionMap:L,thicknessMap:J,gradientMap:it,opaque:b.transparent===!1&&b.blending===Cs&&b.alphaToCoverage===!1,alphaMap:gt,alphaTest:at,alphaHash:st,combine:b.combine,mapUv:Tt&&x(b.map.channel),aoMapUv:Vt&&x(b.aoMap.channel),lightMapUv:Rt&&x(b.lightMap.channel),bumpMapUv:At&&x(b.bumpMap.channel),normalMapUv:j&&x(b.normalMap.channel),displacementMapUv:vt&&x(b.displacementMap.channel),emissiveMapUv:Mt&&x(b.emissiveMap.channel),metalnessMapUv:Nt&&x(b.metalnessMap.channel),roughnessMapUv:ce&&x(b.roughnessMap.channel),anisotropyMapUv:ot&&x(b.anisotropyMap.channel),clearcoatMapUv:Gt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:St&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:W&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:F&&x(b.sheenRoughnessMap.channel),specularMapUv:ht&&x(b.specularMap.channel),specularColorMapUv:rt&&x(b.specularColorMap.channel),specularIntensityMapUv:pt&&x(b.specularIntensityMap.channel),transmissionMapUv:L&&x(b.transmissionMap.channel),thicknessMapUv:J&&x(b.thicknessMap.channel),alphaMapUv:gt&&x(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(j||de),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!V.attributes.uv&&(Tt||gt),fog:!!q,useFog:b.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:R,skinning:Y.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Dt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Tt&&b.map.isVideoTexture===!0&&ge.getTransfer(b.map.colorSpace)===ve,decodeVideoTextureEmissive:Mt&&b.emissiveMap.isVideoTexture===!0&&ge.getTransfer(b.emissiveMap.colorSpace)===ve,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Oe,flipSided:b.side===dn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:wt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&b.extensions.multiDraw===!0||ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Zt.vertexUv1s=l.has(1),Zt.vertexUv2s=l.has(2),Zt.vertexUv3s=l.has(3),l.clear(),Zt}function m(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)y.push(D),y.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(v(y,b),_(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function v(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function _(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),b.push(a.mask)}function M(b){const y=p[b.type];let D;if(y){const N=Wn[y];D=j0.clone(N.uniforms)}else D=b.uniforms;return D}function w(b,y){let D;for(let N=0,Y=f.length;N<Y;N++){const q=f[N];if(q.cacheKey===y){D=q,++D.usedTimes;break}}return D===void 0&&(D=new Zx(i,y,b,r),f.push(D)),D}function T(b){if(--b.usedTimes===0){const y=f.indexOf(b);f[y]=f[f.length-1],f.pop(),b.destroy()}}function A(b){c.remove(b)}function C(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:M,acquireProgram:w,releaseProgram:T,releaseShaderCache:A,programs:f,dispose:C}}function n1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function i1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function dh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ph(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,h,p,x,g){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:h,groupOrder:p,renderOrder:u.renderOrder,z:x,group:g},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=h,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=g),t++,m}function a(u,d,h,p,x,g){const m=o(u,d,h,p,x,g);h.transmission>0?n.push(m):h.transparent===!0?s.push(m):e.push(m)}function c(u,d,h,p,x,g){const m=o(u,d,h,p,x,g);h.transmission>0?n.unshift(m):h.transparent===!0?s.unshift(m):e.unshift(m)}function l(u,d){e.length>1&&e.sort(u||i1),n.length>1&&n.sort(d||dh),s.length>1&&s.sort(d||dh)}function f(){for(let u=t,d=i.length;u<d;u++){const h=i[u];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:f,sort:l}}function s1(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new ph,i.set(n,[o])):s>=r.length?(o=new ph,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function r1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Ft};break;case"SpotLight":e={position:new z,direction:new z,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function o1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let a1=0;function c1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function l1(i){const t=new r1,e=o1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);const s=new z,r=new fe,o=new fe;function a(l){let f=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let h=0,p=0,x=0,g=0,m=0,v=0,_=0,M=0,w=0,T=0,A=0;l.sort(c1);for(let b=0,y=l.length;b<y;b++){const D=l[b],N=D.color,Y=D.intensity,q=D.distance,V=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=N.r*Y,u+=N.g*Y,d+=N.b*Y;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(D.sh.coefficients[Z],Y);A++}else if(D.isDirectionalLight){const Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ct=D.shadow,K=e.get(D);K.shadowIntensity=ct.intensity,K.shadowBias=ct.bias,K.shadowNormalBias=ct.normalBias,K.shadowRadius=ct.radius,K.shadowMapSize=ct.mapSize,n.directionalShadow[h]=K,n.directionalShadowMap[h]=V,n.directionalShadowMatrix[h]=D.shadow.matrix,v++}n.directional[h]=Z,h++}else if(D.isSpotLight){const Z=t.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(N).multiplyScalar(Y),Z.distance=q,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,n.spot[x]=Z;const ct=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,ct.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[x]=ct.matrix,D.castShadow){const K=e.get(D);K.shadowIntensity=ct.intensity,K.shadowBias=ct.bias,K.shadowNormalBias=ct.normalBias,K.shadowRadius=ct.radius,K.shadowMapSize=ct.mapSize,n.spotShadow[x]=K,n.spotShadowMap[x]=V,M++}x++}else if(D.isRectAreaLight){const Z=t.get(D);Z.color.copy(N).multiplyScalar(Y),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=Z,g++}else if(D.isPointLight){const Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const ct=D.shadow,K=e.get(D);K.shadowIntensity=ct.intensity,K.shadowBias=ct.bias,K.shadowNormalBias=ct.normalBias,K.shadowRadius=ct.radius,K.shadowMapSize=ct.mapSize,K.shadowCameraNear=ct.camera.near,K.shadowCameraFar=ct.camera.far,n.pointShadow[p]=K,n.pointShadowMap[p]=V,n.pointShadowMatrix[p]=D.shadow.matrix,_++}n.point[p]=Z,p++}else if(D.isHemisphereLight){const Z=t.get(D);Z.skyColor.copy(D.color).multiplyScalar(Y),Z.groundColor.copy(D.groundColor).multiplyScalar(Y),n.hemi[m]=Z,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==h||C.pointLength!==p||C.spotLength!==x||C.rectAreaLength!==g||C.hemiLength!==m||C.numDirectionalShadows!==v||C.numPointShadows!==_||C.numSpotShadows!==M||C.numSpotMaps!==w||C.numLightProbes!==A)&&(n.directional.length=h,n.spot.length=x,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=M+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,C.directionalLength=h,C.pointLength=p,C.spotLength=x,C.rectAreaLength=g,C.hemiLength=m,C.numDirectionalShadows=v,C.numPointShadows=_,C.numSpotShadows=M,C.numSpotMaps=w,C.numLightProbes=A,n.version=a1++)}function c(l,f){let u=0,d=0,h=0,p=0,x=0;const g=f.matrixWorldInverse;for(let m=0,v=l.length;m<v;m++){const _=l[m];if(_.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),u++}else if(_.isSpotLight){const M=n.spot[h];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),h++}else if(_.isRectAreaLight){const M=n.rectArea[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),p++}else if(_.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function mh(i){const t=new l1(i),e=[],n=[];function s(f){l.camera=f,e.length=0,n.length=0}function r(f){e.push(f)}function o(f){n.push(f)}function a(){t.setup(e)}function c(f){t.setupView(e,f)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function h1(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new mh(i),t.set(s,[a])):r>=o.length?(a=new mh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const u1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f1=`uniform sampler2D shadow_pass;
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
}`;function d1(i,t,e){let n=new Dc;const s=new Lt,r=new Lt,o=new Be,a=new kd({depthPacking:i0}),c=new Od,l={},f=e.maxTextureSize,u={[Ci]:dn,[dn]:Ci,[Oe]:Oe},d=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:u1,fragmentShader:f1}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const p=new Fe;p.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new se(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nu;let m=this.type;this.render=function(T,A,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const b=i.getRenderTarget(),y=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Ti),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const Y=m!==ri&&this.type===ri,q=m===ri&&this.type!==ri;for(let V=0,Z=T.length;V<Z;V++){const ct=T[V],K=ct.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ct,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const mt=K.getFrameExtents();if(s.multiply(mt),r.copy(K.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/mt.x),s.x=r.x*mt.x,K.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/mt.y),s.y=r.y*mt.y,K.mapSize.y=r.y)),K.map===null||Y===!0||q===!0){const _t=this.type!==ri?{minFilter:wn,magFilter:wn}:{};K.map!==null&&K.map.dispose(),K.map=new Ki(s.x,s.y,_t),K.map.texture.name=ct.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const xt=K.getViewportCount();for(let _t=0;_t<xt;_t++){const Dt=K.getViewport(_t);o.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),N.viewport(o),K.updateMatrices(ct,_t),n=K.getFrustum(),M(A,C,K.camera,ct,this.type)}K.isPointLightShadow!==!0&&this.type===ri&&v(K,C),K.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(b,y,D)};function v(T,A){const C=t.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ki(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,C,d,x,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,C,h,x,null)}function _(T,A,C,b){let y=null;const D=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)y=D;else if(y=C.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const N=y.uuid,Y=A.uuid;let q=l[N];q===void 0&&(q={},l[N]=q);let V=q[Y];V===void 0&&(V=y.clone(),q[Y]=V,A.addEventListener("dispose",w)),y=V}if(y.visible=A.visible,y.wireframe=A.wireframe,b===ri?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=i.properties.get(y);N.light=C}return y}function M(T,A,C,b,y){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===ri)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const Y=t.update(T),q=T.material;if(Array.isArray(q)){const V=Y.groups;for(let Z=0,ct=V.length;Z<ct;Z++){const K=V[Z],mt=q[K.materialIndex];if(mt&&mt.visible){const xt=_(T,mt,b,y);T.onBeforeShadow(i,T,A,C,Y,xt,K),i.renderBufferDirect(C,null,Y,xt,T,K),T.onAfterShadow(i,T,A,C,Y,xt,K)}}}else if(q.visible){const V=_(T,q,b,y);T.onBeforeShadow(i,T,A,C,Y,V,null),i.renderBufferDirect(C,null,Y,V,T,null),T.onAfterShadow(i,T,A,C,Y,V,null)}}const N=T.children;for(let Y=0,q=N.length;Y<q;Y++)M(N[Y],A,C,b,y)}function w(T){T.target.removeEventListener("dispose",w);for(const C in l){const b=l[C],y=T.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const p1={[Ca]:Ra,[Pa]:pr,[Ia]:Da,[zs]:La,[Ra]:Ca,[pr]:Pa,[Da]:Ia,[La]:zs};function m1(i,t){function e(){let L=!1;const J=new Be;let it=null;const gt=new Be(0,0,0,0);return{setMask:function(at){it!==at&&!L&&(i.colorMask(at,at,at,at),it=at)},setLocked:function(at){L=at},setClear:function(at,st,wt,Ot,Zt){Zt===!0&&(at*=Ot,st*=Ot,wt*=Ot),J.set(at,st,wt,Ot),gt.equals(J)===!1&&(i.clearColor(at,st,wt,Ot),gt.copy(J))},reset:function(){L=!1,it=null,gt.set(-1,0,0,0)}}}function n(){let L=!1,J=!1,it=null,gt=null,at=null;return{setReversed:function(st){if(J!==st){const wt=t.get("EXT_clip_control");st?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),J=st;const Ot=at;at=null,this.setClear(Ot)}},getReversed:function(){return J},setTest:function(st){st?U(i.DEPTH_TEST):R(i.DEPTH_TEST)},setMask:function(st){it!==st&&!L&&(i.depthMask(st),it=st)},setFunc:function(st){if(J&&(st=p1[st]),gt!==st){switch(st){case Ca:i.depthFunc(i.NEVER);break;case Ra:i.depthFunc(i.ALWAYS);break;case Pa:i.depthFunc(i.LESS);break;case zs:i.depthFunc(i.LEQUAL);break;case Ia:i.depthFunc(i.EQUAL);break;case La:i.depthFunc(i.GEQUAL);break;case pr:i.depthFunc(i.GREATER);break;case Da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=st}},setLocked:function(st){L=st},setClear:function(st){at!==st&&(J&&(st=1-st),i.clearDepth(st),at=st)},reset:function(){L=!1,it=null,gt=null,at=null,J=!1}}}function s(){let L=!1,J=null,it=null,gt=null,at=null,st=null,wt=null,Ot=null,Zt=null;return{setTest:function(Qt){L||(Qt?U(i.STENCIL_TEST):R(i.STENCIL_TEST))},setMask:function(Qt){J!==Qt&&!L&&(i.stencilMask(Qt),J=Qt)},setFunc:function(Qt,we,ye){(it!==Qt||gt!==we||at!==ye)&&(i.stencilFunc(Qt,we,ye),it=Qt,gt=we,at=ye)},setOp:function(Qt,we,ye){(st!==Qt||wt!==we||Ot!==ye)&&(i.stencilOp(Qt,we,ye),st=Qt,wt=we,Ot=ye)},setLocked:function(Qt){L=Qt},setClear:function(Qt){Zt!==Qt&&(i.clearStencil(Qt),Zt=Qt)},reset:function(){L=!1,J=null,it=null,gt=null,at=null,st=null,wt=null,Ot=null,Zt=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let f={},u={},d=new WeakMap,h=[],p=null,x=!1,g=null,m=null,v=null,_=null,M=null,w=null,T=null,A=new Ft(0,0,0),C=0,b=!1,y=null,D=null,N=null,Y=null,q=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ct=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(K)[1]),Z=ct>=1):K.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Z=ct>=2);let mt=null,xt={};const _t=i.getParameter(i.SCISSOR_BOX),Dt=i.getParameter(i.VIEWPORT),ne=new Be().fromArray(_t),re=new Be().fromArray(Dt);function oe(L,J,it,gt){const at=new Uint8Array(4),st=i.createTexture();i.bindTexture(L,st),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let wt=0;wt<it;wt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(J+wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return st}const ft={};ft[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),ft[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ft[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),U(i.DEPTH_TEST),o.setFunc(zs),At(!1),j(cl),U(i.CULL_FACE),Vt(Ti);function U(L){f[L]!==!0&&(i.enable(L),f[L]=!0)}function R(L){f[L]!==!1&&(i.disable(L),f[L]=!1)}function $(L,J){return u[L]!==J?(i.bindFramebuffer(L,J),u[L]=J,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=J),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=J),!0):!1}function ut(L,J){let it=h,gt=!1;if(L){it=d.get(J),it===void 0&&(it=[],d.set(J,it));const at=L.textures;if(it.length!==at.length||it[0]!==i.COLOR_ATTACHMENT0){for(let st=0,wt=at.length;st<wt;st++)it[st]=i.COLOR_ATTACHMENT0+st;it.length=at.length,gt=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,gt=!0);gt&&i.drawBuffers(it)}function Tt(L){return p!==L?(i.useProgram(L),p=L,!0):!1}const Ut={[Hi]:i.FUNC_ADD,[Rf]:i.FUNC_SUBTRACT,[Pf]:i.FUNC_REVERSE_SUBTRACT};Ut[If]=i.MIN,Ut[Lf]=i.MAX;const I={[Df]:i.ZERO,[zf]:i.ONE,[Uf]:i.SRC_COLOR,[Ta]:i.SRC_ALPHA,[Hf]:i.SRC_ALPHA_SATURATE,[Of]:i.DST_COLOR,[Ff]:i.DST_ALPHA,[Nf]:i.ONE_MINUS_SRC_COLOR,[Aa]:i.ONE_MINUS_SRC_ALPHA,[Bf]:i.ONE_MINUS_DST_COLOR,[kf]:i.ONE_MINUS_DST_ALPHA,[Gf]:i.CONSTANT_COLOR,[Vf]:i.ONE_MINUS_CONSTANT_COLOR,[Wf]:i.CONSTANT_ALPHA,[Xf]:i.ONE_MINUS_CONSTANT_ALPHA};function Vt(L,J,it,gt,at,st,wt,Ot,Zt,Qt){if(L===Ti){x===!0&&(R(i.BLEND),x=!1);return}if(x===!1&&(U(i.BLEND),x=!0),L!==Cf){if(L!==g||Qt!==b){if((m!==Hi||M!==Hi)&&(i.blendEquation(i.FUNC_ADD),m=Hi,M=Hi),Qt)switch(L){case Cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qi:i.blendFunc(i.ONE,i.ONE);break;case ll:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ll:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,_=null,w=null,T=null,A.set(0,0,0),C=0,g=L,b=Qt}return}at=at||J,st=st||it,wt=wt||gt,(J!==m||at!==M)&&(i.blendEquationSeparate(Ut[J],Ut[at]),m=J,M=at),(it!==v||gt!==_||st!==w||wt!==T)&&(i.blendFuncSeparate(I[it],I[gt],I[st],I[wt]),v=it,_=gt,w=st,T=wt),(Ot.equals(A)===!1||Zt!==C)&&(i.blendColor(Ot.r,Ot.g,Ot.b,Zt),A.copy(Ot),C=Zt),g=L,b=!1}function Rt(L,J){L.side===Oe?R(i.CULL_FACE):U(i.CULL_FACE);let it=L.side===dn;J&&(it=!it),At(it),L.blending===Cs&&L.transparent===!1?Vt(Ti):Vt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const gt=L.stencilWrite;a.setTest(gt),gt&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Mt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?U(i.SAMPLE_ALPHA_TO_COVERAGE):R(i.SAMPLE_ALPHA_TO_COVERAGE)}function At(L){y!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),y=L)}function j(L){L!==Ef?(U(i.CULL_FACE),L!==D&&(L===cl?i.cullFace(i.BACK):L===Tf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):R(i.CULL_FACE),D=L}function vt(L){L!==N&&(Z&&i.lineWidth(L),N=L)}function Mt(L,J,it){L?(U(i.POLYGON_OFFSET_FILL),(Y!==J||q!==it)&&(i.polygonOffset(J,it),Y=J,q=it)):R(i.POLYGON_OFFSET_FILL)}function Nt(L){L?U(i.SCISSOR_TEST):R(i.SCISSOR_TEST)}function ce(L){L===void 0&&(L=i.TEXTURE0+V-1),mt!==L&&(i.activeTexture(L),mt=L)}function de(L,J,it){it===void 0&&(mt===null?it=i.TEXTURE0+V-1:it=mt);let gt=xt[it];gt===void 0&&(gt={type:void 0,texture:void 0},xt[it]=gt),(gt.type!==L||gt.texture!==J)&&(mt!==it&&(i.activeTexture(it),mt=it),i.bindTexture(L,J||ft[L]),gt.type=L,gt.texture=J)}function P(){const L=xt[mt];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Gt(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function kt(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ht(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(L){ne.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ne.copy(L))}function F(L){re.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),re.copy(L))}function ht(L,J){let it=l.get(J);it===void 0&&(it=new WeakMap,l.set(J,it));let gt=it.get(L);gt===void 0&&(gt=i.getUniformBlockIndex(J,L.name),it.set(L,gt))}function rt(L,J){const gt=l.get(J).get(L);c.get(J)!==gt&&(i.uniformBlockBinding(J,gt,L.__bindingPointIndex),c.set(J,gt))}function pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},mt=null,xt={},u={},d=new WeakMap,h=[],p=null,x=!1,g=null,m=null,v=null,_=null,M=null,w=null,T=null,A=new Ft(0,0,0),C=0,b=!1,y=null,D=null,N=null,Y=null,q=null,ne.set(0,0,i.canvas.width,i.canvas.height),re.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:U,disable:R,bindFramebuffer:$,drawBuffers:ut,useProgram:Tt,setBlending:Vt,setMaterial:Rt,setFlipSided:At,setCullFace:j,setLineWidth:vt,setPolygonOffset:Mt,setScissorTest:Nt,activeTexture:ce,bindTexture:de,unbindTexture:P,compressedTexImage2D:S,compressedTexImage3D:X,texImage2D:Ht,texImage3D:yt,updateUBOMapping:ht,uniformBlockBinding:rt,texStorage2D:St,texStorage3D:kt,texSubImage2D:lt,texSubImage3D:dt,compressedTexSubImage2D:ot,compressedTexSubImage3D:Gt,scissor:W,viewport:F,reset:pt}}function g1(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Lt,f=new WeakMap;let u;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,S){return h?new OffscreenCanvas(P,S):Io("canvas")}function x(P,S,X){let lt=1;const dt=de(P);if((dt.width>X||dt.height>X)&&(lt=X/Math.max(dt.width,dt.height)),lt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ot=Math.floor(lt*dt.width),Gt=Math.floor(lt*dt.height);u===void 0&&(u=p(ot,Gt));const St=S?p(ot,Gt):u;return St.width=ot,St.height=Gt,St.getContext("2d").drawImage(P,0,0,ot,Gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+ot+"x"+Gt+")."),St}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),P;return P}function g(P){return P.generateMipmaps}function m(P){i.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(P,S,X,lt,dt=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ot=S;if(S===i.RED&&(X===i.FLOAT&&(ot=i.R32F),X===i.HALF_FLOAT&&(ot=i.R16F),X===i.UNSIGNED_BYTE&&(ot=i.R8)),S===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ot=i.R8UI),X===i.UNSIGNED_SHORT&&(ot=i.R16UI),X===i.UNSIGNED_INT&&(ot=i.R32UI),X===i.BYTE&&(ot=i.R8I),X===i.SHORT&&(ot=i.R16I),X===i.INT&&(ot=i.R32I)),S===i.RG&&(X===i.FLOAT&&(ot=i.RG32F),X===i.HALF_FLOAT&&(ot=i.RG16F),X===i.UNSIGNED_BYTE&&(ot=i.RG8)),S===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ot=i.RG8UI),X===i.UNSIGNED_SHORT&&(ot=i.RG16UI),X===i.UNSIGNED_INT&&(ot=i.RG32UI),X===i.BYTE&&(ot=i.RG8I),X===i.SHORT&&(ot=i.RG16I),X===i.INT&&(ot=i.RG32I)),S===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(ot=i.RGB8UI),X===i.UNSIGNED_SHORT&&(ot=i.RGB16UI),X===i.UNSIGNED_INT&&(ot=i.RGB32UI),X===i.BYTE&&(ot=i.RGB8I),X===i.SHORT&&(ot=i.RGB16I),X===i.INT&&(ot=i.RGB32I)),S===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(ot=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(ot=i.RGBA16UI),X===i.UNSIGNED_INT&&(ot=i.RGBA32UI),X===i.BYTE&&(ot=i.RGBA8I),X===i.SHORT&&(ot=i.RGBA16I),X===i.INT&&(ot=i.RGBA32I)),S===i.RGB&&(X===i.UNSIGNED_INT_5_9_9_9_REV&&(ot=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(ot=i.R11F_G11F_B10F)),S===i.RGBA){const Gt=dt?Ro:ge.getTransfer(lt);X===i.FLOAT&&(ot=i.RGBA32F),X===i.HALF_FLOAT&&(ot=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ot=Gt===ve?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function M(P,S){let X;return P?S===null||S===ji||S===xr?X=i.DEPTH24_STENCIL8:S===Yn?X=i.DEPTH32F_STENCIL8:S===gr&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ji||S===xr?X=i.DEPTH_COMPONENT24:S===Yn?X=i.DEPTH_COMPONENT32F:S===gr&&(X=i.DEPTH_COMPONENT16),X}function w(P,S){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==wn&&P.minFilter!==qn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function T(P){const S=P.target;S.removeEventListener("dispose",T),C(S),S.isVideoTexture&&f.delete(S)}function A(P){const S=P.target;S.removeEventListener("dispose",A),y(S)}function C(P){const S=n.get(P);if(S.__webglInit===void 0)return;const X=P.source,lt=d.get(X);if(lt){const dt=lt[S.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&b(P),Object.keys(lt).length===0&&d.delete(X)}n.remove(P)}function b(P){const S=n.get(P);i.deleteTexture(S.__webglTexture);const X=P.source,lt=d.get(X);delete lt[S.__cacheKey],o.memory.textures--}function y(P){const S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(S.__webglFramebuffer[lt]))for(let dt=0;dt<S.__webglFramebuffer[lt].length;dt++)i.deleteFramebuffer(S.__webglFramebuffer[lt][dt]);else i.deleteFramebuffer(S.__webglFramebuffer[lt]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[lt])}else{if(Array.isArray(S.__webglFramebuffer))for(let lt=0;lt<S.__webglFramebuffer.length;lt++)i.deleteFramebuffer(S.__webglFramebuffer[lt]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let lt=0;lt<S.__webglColorRenderbuffer.length;lt++)S.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[lt]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const X=P.textures;for(let lt=0,dt=X.length;lt<dt;lt++){const ot=n.get(X[lt]);ot.__webglTexture&&(i.deleteTexture(ot.__webglTexture),o.memory.textures--),n.remove(X[lt])}n.remove(P)}let D=0;function N(){D=0}function Y(){const P=D;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),D+=1,P}function q(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function V(P,S){const X=n.get(P);if(P.isVideoTexture&&Nt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&X.__version!==P.version){const lt=P.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(X,P,S);return}}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+S)}function Z(P,S){const X=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){ft(X,P,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+S)}function ct(P,S){const X=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){ft(X,P,S);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+S)}function K(P,S){const X=n.get(P);if(P.version>0&&X.__version!==P.version){U(X,P,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+S)}const mt={[mr]:i.REPEAT,[Vi]:i.CLAMP_TO_EDGE,[Na]:i.MIRRORED_REPEAT},xt={[wn]:i.NEAREST,[e0]:i.NEAREST_MIPMAP_NEAREST,[Or]:i.NEAREST_MIPMAP_LINEAR,[qn]:i.LINEAR,[Wo]:i.LINEAR_MIPMAP_NEAREST,[Wi]:i.LINEAR_MIPMAP_LINEAR},_t={[r0]:i.NEVER,[u0]:i.ALWAYS,[o0]:i.LESS,[fu]:i.LEQUAL,[a0]:i.EQUAL,[h0]:i.GEQUAL,[c0]:i.GREATER,[l0]:i.NOTEQUAL};function Dt(P,S){if(S.type===Yn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===qn||S.magFilter===Wo||S.magFilter===Or||S.magFilter===Wi||S.minFilter===qn||S.minFilter===Wo||S.minFilter===Or||S.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,mt[S.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,mt[S.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,mt[S.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,xt[S.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,xt[S.minFilter]),S.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,_t[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===wn||S.minFilter!==Or&&S.minFilter!==Wi||S.type===Yn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ne(P,S){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",T));const lt=S.source;let dt=d.get(lt);dt===void 0&&(dt={},d.set(lt,dt));const ot=q(S);if(ot!==P.__cacheKey){dt[ot]===void 0&&(dt[ot]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),dt[ot].usedTimes++;const Gt=dt[P.__cacheKey];Gt!==void 0&&(dt[P.__cacheKey].usedTimes--,Gt.usedTimes===0&&b(S)),P.__cacheKey=ot,P.__webglTexture=dt[ot].texture}return X}function re(P,S,X){return Math.floor(Math.floor(P/X)/S)}function oe(P,S,X,lt){const ot=P.updateRanges;if(ot.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,X,lt,S.data);else{ot.sort((yt,W)=>yt.start-W.start);let Gt=0;for(let yt=1;yt<ot.length;yt++){const W=ot[Gt],F=ot[yt],ht=W.start+W.count,rt=re(F.start,S.width,4),pt=re(W.start,S.width,4);F.start<=ht+1&&rt===pt&&re(F.start+F.count-1,S.width,4)===rt?W.count=Math.max(W.count,F.start+F.count-W.start):(++Gt,ot[Gt]=F)}ot.length=Gt+1;const St=i.getParameter(i.UNPACK_ROW_LENGTH),kt=i.getParameter(i.UNPACK_SKIP_PIXELS),Ht=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let yt=0,W=ot.length;yt<W;yt++){const F=ot[yt],ht=Math.floor(F.start/4),rt=Math.ceil(F.count/4),pt=ht%S.width,L=Math.floor(ht/S.width),J=rt,it=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,pt),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),e.texSubImage2D(i.TEXTURE_2D,0,pt,L,J,it,X,lt,S.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,St),i.pixelStorei(i.UNPACK_SKIP_PIXELS,kt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ht)}}function ft(P,S,X){let lt=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(lt=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(lt=i.TEXTURE_3D);const dt=ne(P,S),ot=S.source;e.bindTexture(lt,P.__webglTexture,i.TEXTURE0+X);const Gt=n.get(ot);if(ot.version!==Gt.__version||dt===!0){e.activeTexture(i.TEXTURE0+X);const St=ge.getPrimaries(ge.workingColorSpace),kt=S.colorSpace===Mi?null:ge.getPrimaries(S.colorSpace),Ht=S.colorSpace===Mi||St===kt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let yt=x(S.image,!1,s.maxTextureSize);yt=ce(S,yt);const W=r.convert(S.format,S.colorSpace),F=r.convert(S.type);let ht=_(S.internalFormat,W,F,S.colorSpace,S.isVideoTexture);Dt(lt,S);let rt;const pt=S.mipmaps,L=S.isVideoTexture!==!0,J=Gt.__version===void 0||dt===!0,it=ot.dataReady,gt=w(S,yt);if(S.isDepthTexture)ht=M(S.format===vr,S.type),J&&(L?e.texStorage2D(i.TEXTURE_2D,1,ht,yt.width,yt.height):e.texImage2D(i.TEXTURE_2D,0,ht,yt.width,yt.height,0,W,F,null));else if(S.isDataTexture)if(pt.length>0){L&&J&&e.texStorage2D(i.TEXTURE_2D,gt,ht,pt[0].width,pt[0].height);for(let at=0,st=pt.length;at<st;at++)rt=pt[at],L?it&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,rt.width,rt.height,W,F,rt.data):e.texImage2D(i.TEXTURE_2D,at,ht,rt.width,rt.height,0,W,F,rt.data);S.generateMipmaps=!1}else L?(J&&e.texStorage2D(i.TEXTURE_2D,gt,ht,yt.width,yt.height),it&&oe(S,yt,W,F)):e.texImage2D(i.TEXTURE_2D,0,ht,yt.width,yt.height,0,W,F,yt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){L&&J&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,ht,pt[0].width,pt[0].height,yt.depth);for(let at=0,st=pt.length;at<st;at++)if(rt=pt[at],S.format!==On)if(W!==null)if(L){if(it)if(S.layerUpdates.size>0){const wt=Xl(rt.width,rt.height,S.format,S.type);for(const Ot of S.layerUpdates){const Zt=rt.data.subarray(Ot*wt/rt.data.BYTES_PER_ELEMENT,(Ot+1)*wt/rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,Ot,rt.width,rt.height,1,W,Zt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,rt.width,rt.height,yt.depth,W,rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,ht,rt.width,rt.height,yt.depth,0,rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?it&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,rt.width,rt.height,yt.depth,W,F,rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,ht,rt.width,rt.height,yt.depth,0,W,F,rt.data)}else{L&&J&&e.texStorage2D(i.TEXTURE_2D,gt,ht,pt[0].width,pt[0].height);for(let at=0,st=pt.length;at<st;at++)rt=pt[at],S.format!==On?W!==null?L?it&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,rt.width,rt.height,W,rt.data):e.compressedTexImage2D(i.TEXTURE_2D,at,ht,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?it&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,rt.width,rt.height,W,F,rt.data):e.texImage2D(i.TEXTURE_2D,at,ht,rt.width,rt.height,0,W,F,rt.data)}else if(S.isDataArrayTexture)if(L){if(J&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,ht,yt.width,yt.height,yt.depth),it)if(S.layerUpdates.size>0){const at=Xl(yt.width,yt.height,S.format,S.type);for(const st of S.layerUpdates){const wt=yt.data.subarray(st*at/yt.data.BYTES_PER_ELEMENT,(st+1)*at/yt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,yt.width,yt.height,1,W,F,wt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,W,F,yt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ht,yt.width,yt.height,yt.depth,0,W,F,yt.data);else if(S.isData3DTexture)L?(J&&e.texStorage3D(i.TEXTURE_3D,gt,ht,yt.width,yt.height,yt.depth),it&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,W,F,yt.data)):e.texImage3D(i.TEXTURE_3D,0,ht,yt.width,yt.height,yt.depth,0,W,F,yt.data);else if(S.isFramebufferTexture){if(J)if(L)e.texStorage2D(i.TEXTURE_2D,gt,ht,yt.width,yt.height);else{let at=yt.width,st=yt.height;for(let wt=0;wt<gt;wt++)e.texImage2D(i.TEXTURE_2D,wt,ht,at,st,0,W,F,null),at>>=1,st>>=1}}else if(pt.length>0){if(L&&J){const at=de(pt[0]);e.texStorage2D(i.TEXTURE_2D,gt,ht,at.width,at.height)}for(let at=0,st=pt.length;at<st;at++)rt=pt[at],L?it&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,W,F,rt):e.texImage2D(i.TEXTURE_2D,at,ht,W,F,rt);S.generateMipmaps=!1}else if(L){if(J){const at=de(yt);e.texStorage2D(i.TEXTURE_2D,gt,ht,at.width,at.height)}it&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,W,F,yt)}else e.texImage2D(i.TEXTURE_2D,0,ht,W,F,yt);g(S)&&m(lt),Gt.__version=ot.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function U(P,S,X){if(S.image.length!==6)return;const lt=ne(P,S),dt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+X);const ot=n.get(dt);if(dt.version!==ot.__version||lt===!0){e.activeTexture(i.TEXTURE0+X);const Gt=ge.getPrimaries(ge.workingColorSpace),St=S.colorSpace===Mi?null:ge.getPrimaries(S.colorSpace),kt=S.colorSpace===Mi||Gt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const Ht=S.isCompressedTexture||S.image[0].isCompressedTexture,yt=S.image[0]&&S.image[0].isDataTexture,W=[];for(let st=0;st<6;st++)!Ht&&!yt?W[st]=x(S.image[st],!0,s.maxCubemapSize):W[st]=yt?S.image[st].image:S.image[st],W[st]=ce(S,W[st]);const F=W[0],ht=r.convert(S.format,S.colorSpace),rt=r.convert(S.type),pt=_(S.internalFormat,ht,rt,S.colorSpace),L=S.isVideoTexture!==!0,J=ot.__version===void 0||lt===!0,it=dt.dataReady;let gt=w(S,F);Dt(i.TEXTURE_CUBE_MAP,S);let at;if(Ht){L&&J&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,pt,F.width,F.height);for(let st=0;st<6;st++){at=W[st].mipmaps;for(let wt=0;wt<at.length;wt++){const Ot=at[wt];S.format!==On?ht!==null?L?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt,0,0,Ot.width,Ot.height,ht,Ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt,pt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt,0,0,Ot.width,Ot.height,ht,rt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt,pt,Ot.width,Ot.height,0,ht,rt,Ot.data)}}}else{if(at=S.mipmaps,L&&J){at.length>0&&gt++;const st=de(W[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,pt,st.width,st.height)}for(let st=0;st<6;st++)if(yt){L?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,W[st].width,W[st].height,ht,rt,W[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,pt,W[st].width,W[st].height,0,ht,rt,W[st].data);for(let wt=0;wt<at.length;wt++){const Zt=at[wt].image[st].image;L?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt+1,0,0,Zt.width,Zt.height,ht,rt,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt+1,pt,Zt.width,Zt.height,0,ht,rt,Zt.data)}}else{L?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,ht,rt,W[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,pt,ht,rt,W[st]);for(let wt=0;wt<at.length;wt++){const Ot=at[wt];L?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt+1,0,0,ht,rt,Ot.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt+1,pt,ht,rt,Ot.image[st])}}}g(S)&&m(i.TEXTURE_CUBE_MAP),ot.__version=dt.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function R(P,S,X,lt,dt,ot){const Gt=r.convert(X.format,X.colorSpace),St=r.convert(X.type),kt=_(X.internalFormat,Gt,St,X.colorSpace),Ht=n.get(S),yt=n.get(X);if(yt.__renderTarget=S,!Ht.__hasExternalTextures){const W=Math.max(1,S.width>>ot),F=Math.max(1,S.height>>ot);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?e.texImage3D(dt,ot,kt,W,F,S.depth,0,Gt,St,null):e.texImage2D(dt,ot,kt,W,F,0,Gt,St,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Mt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,dt,yt.__webglTexture,0,vt(S)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,lt,dt,yt.__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function $(P,S,X){if(i.bindRenderbuffer(i.RENDERBUFFER,P),S.depthBuffer){const lt=S.depthTexture,dt=lt&&lt.isDepthTexture?lt.type:null,ot=M(S.stencilBuffer,dt),Gt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=vt(S);Mt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St,ot,S.width,S.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,St,ot,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ot,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Gt,i.RENDERBUFFER,P)}else{const lt=S.textures;for(let dt=0;dt<lt.length;dt++){const ot=lt[dt],Gt=r.convert(ot.format,ot.colorSpace),St=r.convert(ot.type),kt=_(ot.internalFormat,Gt,St,ot.colorSpace),Ht=vt(S);X&&Mt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,kt,S.width,S.height):Mt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht,kt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,kt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const lt=n.get(S.depthTexture);lt.__renderTarget=S,(!lt.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V(S.depthTexture,0);const dt=lt.__webglTexture,ot=vt(S);if(S.depthTexture.format===_r)Mt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dt,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dt,0);else if(S.depthTexture.format===vr)Mt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dt,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function Tt(P){const S=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const lt=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),lt){const dt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,lt.removeEventListener("dispose",dt)};lt.addEventListener("dispose",dt),S.__depthDisposeCallback=dt}S.__boundDepthTexture=lt}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const lt=P.texture.mipmaps;lt&&lt.length>0?ut(S.__webglFramebuffer[0],P):ut(S.__webglFramebuffer,P)}else if(X){S.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[lt]),S.__webglDepthbuffer[lt]===void 0)S.__webglDepthbuffer[lt]=i.createRenderbuffer(),$(S.__webglDepthbuffer[lt],P,!1);else{const dt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=S.__webglDepthbuffer[lt];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,ot)}}else{const lt=P.texture.mipmaps;if(lt&&lt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),$(S.__webglDepthbuffer,P,!1);else{const dt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,ot)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(P,S,X){const lt=n.get(P);S!==void 0&&R(lt.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Tt(P)}function I(P){const S=P.texture,X=n.get(P),lt=n.get(S);P.addEventListener("dispose",A);const dt=P.textures,ot=P.isWebGLCubeRenderTarget===!0,Gt=dt.length>1;if(Gt||(lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture()),lt.__version=S.version,o.memory.textures++),ot){X.__webglFramebuffer=[];for(let St=0;St<6;St++)if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer[St]=[];for(let kt=0;kt<S.mipmaps.length;kt++)X.__webglFramebuffer[St][kt]=i.createFramebuffer()}else X.__webglFramebuffer[St]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer=[];for(let St=0;St<S.mipmaps.length;St++)X.__webglFramebuffer[St]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Gt)for(let St=0,kt=dt.length;St<kt;St++){const Ht=n.get(dt[St]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&Mt(P)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let St=0;St<dt.length;St++){const kt=dt[St];X.__webglColorRenderbuffer[St]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[St]);const Ht=r.convert(kt.format,kt.colorSpace),yt=r.convert(kt.type),W=_(kt.internalFormat,Ht,yt,kt.colorSpace,P.isXRRenderTarget===!0),F=vt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,F,W,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,X.__webglColorRenderbuffer[St])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),$(X.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,S);for(let St=0;St<6;St++)if(S.mipmaps&&S.mipmaps.length>0)for(let kt=0;kt<S.mipmaps.length;kt++)R(X.__webglFramebuffer[St][kt],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+St,kt);else R(X.__webglFramebuffer[St],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);g(S)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Gt){for(let St=0,kt=dt.length;St<kt;St++){const Ht=dt[St],yt=n.get(Ht);let W=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(W=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(W,yt.__webglTexture),Dt(W,Ht),R(X.__webglFramebuffer,P,Ht,i.COLOR_ATTACHMENT0+St,W,0),g(Ht)&&m(W)}e.unbindTexture()}else{let St=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(St=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,lt.__webglTexture),Dt(St,S),S.mipmaps&&S.mipmaps.length>0)for(let kt=0;kt<S.mipmaps.length;kt++)R(X.__webglFramebuffer[kt],P,S,i.COLOR_ATTACHMENT0,St,kt);else R(X.__webglFramebuffer,P,S,i.COLOR_ATTACHMENT0,St,0);g(S)&&m(St),e.unbindTexture()}P.depthBuffer&&Tt(P)}function Vt(P){const S=P.textures;for(let X=0,lt=S.length;X<lt;X++){const dt=S[X];if(g(dt)){const ot=v(P),Gt=n.get(dt).__webglTexture;e.bindTexture(ot,Gt),m(ot),e.unbindTexture()}}}const Rt=[],At=[];function j(P){if(P.samples>0){if(Mt(P)===!1){const S=P.textures,X=P.width,lt=P.height;let dt=i.COLOR_BUFFER_BIT;const ot=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Gt=n.get(P),St=S.length>1;if(St)for(let Ht=0;Ht<S.length;Ht++)e.bindFramebuffer(i.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer);const kt=P.texture.mipmaps;kt&&kt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let Ht=0;Ht<S.length;Ht++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),St){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Gt.__webglColorRenderbuffer[Ht]);const yt=n.get(S[Ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,yt,0)}i.blitFramebuffer(0,0,X,lt,0,0,X,lt,dt,i.NEAREST),c===!0&&(Rt.length=0,At.length=0,Rt.push(i.COLOR_ATTACHMENT0+Ht),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Rt.push(ot),At.push(ot),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,At)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),St)for(let Ht=0;Ht<S.length;Ht++){e.bindFramebuffer(i.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.RENDERBUFFER,Gt.__webglColorRenderbuffer[Ht]);const yt=n.get(S[Ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.TEXTURE_2D,yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const S=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function vt(P){return Math.min(s.maxSamples,P.samples)}function Mt(P){const S=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Nt(P){const S=o.render.frame;f.get(P)!==S&&(f.set(P,S),P.update())}function ce(P,S){const X=P.colorSpace,lt=P.format,dt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==Fs&&X!==Mi&&(ge.getTransfer(X)===ve?(lt!==On||dt!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),S}function de(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=Y,this.resetTextureUnits=N,this.setTexture2D=V,this.setTexture2DArray=Z,this.setTexture3D=ct,this.setTextureCube=K,this.rebindTextures=Ut,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=R,this.useMultisampledRTT=Mt}function x1(i,t){function e(n,s=Mi){let r;const o=ge.getTransfer(s);if(n===jn)return i.UNSIGNED_BYTE;if(n===wc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ec)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ou)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===au)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===su)return i.BYTE;if(n===ru)return i.SHORT;if(n===gr)return i.UNSIGNED_SHORT;if(n===Sc)return i.INT;if(n===ji)return i.UNSIGNED_INT;if(n===Yn)return i.FLOAT;if(n===Ir)return i.HALF_FLOAT;if(n===cu)return i.ALPHA;if(n===lu)return i.RGB;if(n===On)return i.RGBA;if(n===_r)return i.DEPTH_COMPONENT;if(n===vr)return i.DEPTH_STENCIL;if(n===Tc)return i.RED;if(n===Ac)return i.RED_INTEGER;if(n===hu)return i.RG;if(n===Cc)return i.RG_INTEGER;if(n===Rc)return i.RGBA_INTEGER;if(n===yo||n===bo||n===So||n===wo)if(o===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fa||n===ka||n===Oa||n===Ba)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ha||n===Ga||n===Va)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ha||n===Ga)return o===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Va)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wa||n===Xa||n===qa||n===Ya||n===$a||n===ja||n===Ka||n===Za||n===Ja||n===Qa||n===tc||n===ec||n===nc||n===ic)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wa)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xa)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qa)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ya)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$a)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ja)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Za)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ja)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qa)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ec)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ic)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sc||n===rc||n===oc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===sc)return o===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ac||n===cc||n===lc||n===hc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ac)return r.COMPRESSED_RED_RGTC1_EXT;if(n===cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const _1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v1=`
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

}`;class M1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Su(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ri({vertexShader:_1,fragmentShader:v1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new se(new Ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class y1 extends Hs{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,f=null,u=null,d=null,h=null,p=null;const x=typeof XRWebGLBinding<"u",g=new M1,m={},v=e.getContextAttributes();let _=null,M=null;const w=[],T=[],A=new Lt;let C=null;const b=new In;b.viewport=new Be;const y=new In;y.viewport=new Be;const D=[b,y],N=new Gd;let Y=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ft){let U=w[ft];return U===void 0&&(U=new ua,w[ft]=U),U.getTargetRaySpace()},this.getControllerGrip=function(ft){let U=w[ft];return U===void 0&&(U=new ua,w[ft]=U),U.getGripSpace()},this.getHand=function(ft){let U=w[ft];return U===void 0&&(U=new ua,w[ft]=U),U.getHandSpace()};function V(ft){const U=T.indexOf(ft.inputSource);if(U===-1)return;const R=w[U];R!==void 0&&(R.update(ft.inputSource,ft.frame,l||o),R.dispatchEvent({type:ft.type,data:ft.inputSource}))}function Z(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",ct);for(let ft=0;ft<w.length;ft++){const U=T[ft];U!==null&&(T[ft]=null,w[ft].disconnect(U))}Y=null,q=null,g.reset();for(const ft in m)delete m[ft];t.setRenderTarget(_),h=null,d=null,u=null,s=null,M=null,oe.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ft){r=ft,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ft){a=ft,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ft){l=ft},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(ft){if(s=ft,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",ct),v.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let R=null,$=null,ut=null;v.depth&&(ut=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,R=v.stencil?vr:_r,$=v.stencil?xr:ji);const Tt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Tt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Ki(d.textureWidth,d.textureHeight,{format:On,type:jn,depthTexture:new bu(d.textureWidth,d.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,R),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const R={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,e,R),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new Ki(h.framebufferWidth,h.framebufferHeight,{format:On,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),oe.setContext(s),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ct(ft){for(let U=0;U<ft.removed.length;U++){const R=ft.removed[U],$=T.indexOf(R);$>=0&&(T[$]=null,w[$].disconnect(R))}for(let U=0;U<ft.added.length;U++){const R=ft.added[U];let $=T.indexOf(R);if($===-1){for(let Tt=0;Tt<w.length;Tt++)if(Tt>=T.length){T.push(R),$=Tt;break}else if(T[Tt]===null){T[Tt]=R,$=Tt;break}if($===-1)break}const ut=w[$];ut&&ut.connect(R)}}const K=new z,mt=new z;function xt(ft,U,R){K.setFromMatrixPosition(U.matrixWorld),mt.setFromMatrixPosition(R.matrixWorld);const $=K.distanceTo(mt),ut=U.projectionMatrix.elements,Tt=R.projectionMatrix.elements,Ut=ut[14]/(ut[10]-1),I=ut[14]/(ut[10]+1),Vt=(ut[9]+1)/ut[5],Rt=(ut[9]-1)/ut[5],At=(ut[8]-1)/ut[0],j=(Tt[8]+1)/Tt[0],vt=Ut*At,Mt=Ut*j,Nt=$/(-At+j),ce=Nt*-At;if(U.matrixWorld.decompose(ft.position,ft.quaternion,ft.scale),ft.translateX(ce),ft.translateZ(Nt),ft.matrixWorld.compose(ft.position,ft.quaternion,ft.scale),ft.matrixWorldInverse.copy(ft.matrixWorld).invert(),ut[10]===-1)ft.projectionMatrix.copy(U.projectionMatrix),ft.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{const de=Ut+Nt,P=I+Nt,S=vt-ce,X=Mt+($-ce),lt=Vt*I/P*de,dt=Rt*I/P*de;ft.projectionMatrix.makePerspective(S,X,lt,dt,de,P),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert()}}function _t(ft,U){U===null?ft.matrixWorld.copy(ft.matrix):ft.matrixWorld.multiplyMatrices(U.matrixWorld,ft.matrix),ft.matrixWorldInverse.copy(ft.matrixWorld).invert()}this.updateCamera=function(ft){if(s===null)return;let U=ft.near,R=ft.far;g.texture!==null&&(g.depthNear>0&&(U=g.depthNear),g.depthFar>0&&(R=g.depthFar)),N.near=y.near=b.near=U,N.far=y.far=b.far=R,(Y!==N.near||q!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),Y=N.near,q=N.far),N.layers.mask=ft.layers.mask|6,b.layers.mask=N.layers.mask&3,y.layers.mask=N.layers.mask&5;const $=ft.parent,ut=N.cameras;_t(N,$);for(let Tt=0;Tt<ut.length;Tt++)_t(ut[Tt],$);ut.length===2?xt(N,b,y):N.projectionMatrix.copy(b.projectionMatrix),Dt(ft,N,$)};function Dt(ft,U,R){R===null?ft.matrix.copy(U.matrixWorld):(ft.matrix.copy(R.matrixWorld),ft.matrix.invert(),ft.matrix.multiply(U.matrixWorld)),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.updateMatrixWorld(!0),ft.projectionMatrix.copy(U.projectionMatrix),ft.projectionMatrixInverse.copy(U.projectionMatrixInverse),ft.isPerspectiveCamera&&(ft.fov=Mr*2*Math.atan(1/ft.projectionMatrix.elements[5]),ft.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&h===null))return c},this.setFoveation=function(ft){c=ft,d!==null&&(d.fixedFoveation=ft),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ft)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(ft){return m[ft]};let ne=null;function re(ft,U){if(f=U.getViewerPose(l||o),p=U,f!==null){const R=f.views;h!==null&&(t.setRenderTargetFramebuffer(M,h.framebuffer),t.setRenderTarget(M));let $=!1;R.length!==N.cameras.length&&(N.cameras.length=0,$=!0);for(let I=0;I<R.length;I++){const Vt=R[I];let Rt=null;if(h!==null)Rt=h.getViewport(Vt);else{const j=u.getViewSubImage(d,Vt);Rt=j.viewport,I===0&&(t.setRenderTargetTextures(M,j.colorTexture,j.depthStencilTexture),t.setRenderTarget(M))}let At=D[I];At===void 0&&(At=new In,At.layers.enable(I),At.viewport=new Be,D[I]=At),At.matrix.fromArray(Vt.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(Vt.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),I===0&&(N.matrix.copy(At.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),$===!0&&N.cameras.push(At)}const ut=s.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const I=u.getDepthInformation(R[0]);I&&I.isValid&&I.texture&&g.init(I,s.renderState)}if(ut&&ut.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let I=0;I<R.length;I++){const Vt=R[I].camera;if(Vt){let Rt=m[Vt];Rt||(Rt=new Su,m[Vt]=Rt);const At=u.getCameraImage(Vt);Rt.sourceTexture=At}}}}for(let R=0;R<w.length;R++){const $=T[R],ut=w[R];$!==null&&ut!==void 0&&ut.update($,U,l||o)}ne&&ne(ft,U),U.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:U}),p=null}const oe=new Uu;oe.setAnimationLoop(re),this.setAnimationLoop=function(ft){ne=ft},this.dispose=function(){}}}const ki=new En,b1=new fe;function S1(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,vu(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,_,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),f(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&h(g,m,M)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,v,_):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===dn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===dn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const v=t.get(m),_=v.envMap,M=v.envMapRotation;_&&(g.envMap.value=_,ki.copy(M),ki.x*=-1,ki.y*=-1,ki.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),g.envMapRotation.value.setFromMatrix4(b1.makeRotationFromEuler(ki)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,v,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=_*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function f(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===dn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function w1(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,_){const M=_.program;n.uniformBlockBinding(v,M)}function l(v,_){let M=s[v.id];M===void 0&&(p(v),M=f(v),s[v.id]=M,v.addEventListener("dispose",g));const w=_.program;n.updateUBOMapping(v,w);const T=t.render.frame;r[v.id]!==T&&(d(v),r[v.id]=T)}function f(v){const _=u();v.__bindingPointIndex=_;const M=i.createBuffer(),w=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,w,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,M),M}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=s[v.id],M=v.uniforms,w=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,A=M.length;T<A;T++){const C=Array.isArray(M[T])?M[T]:[M[T]];for(let b=0,y=C.length;b<y;b++){const D=C[b];if(h(D,T,b,w)===!0){const N=D.__offset,Y=Array.isArray(D.value)?D.value:[D.value];let q=0;for(let V=0;V<Y.length;V++){const Z=Y[V],ct=x(Z);typeof Z=="number"||typeof Z=="boolean"?(D.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,N+q,D.__data)):Z.isMatrix3?(D.__data[0]=Z.elements[0],D.__data[1]=Z.elements[1],D.__data[2]=Z.elements[2],D.__data[3]=0,D.__data[4]=Z.elements[3],D.__data[5]=Z.elements[4],D.__data[6]=Z.elements[5],D.__data[7]=0,D.__data[8]=Z.elements[6],D.__data[9]=Z.elements[7],D.__data[10]=Z.elements[8],D.__data[11]=0):(Z.toArray(D.__data,q),q+=ct.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,_,M,w){const T=v.value,A=_+"_"+M;if(w[A]===void 0)return typeof T=="number"||typeof T=="boolean"?w[A]=T:w[A]=T.clone(),!0;{const C=w[A];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return w[A]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function p(v){const _=v.uniforms;let M=0;const w=16;for(let A=0,C=_.length;A<C;A++){const b=Array.isArray(_[A])?_[A]:[_[A]];for(let y=0,D=b.length;y<D;y++){const N=b[y],Y=Array.isArray(N.value)?N.value:[N.value];for(let q=0,V=Y.length;q<V;q++){const Z=Y[q],ct=x(Z),K=M%w,mt=K%ct.boundary,xt=K+mt;M+=mt,xt!==0&&w-xt<ct.storage&&(M+=w-xt),N.__data=new Float32Array(ct.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=ct.storage}}}const T=M%w;return T>0&&(M+=w-T),v.__size=M,v.__cache={},this}function x(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function g(v){const _=v.target;_.removeEventListener("dispose",g);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}class E1{constructor(t={}){const{canvas:e=C0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),x=new Int32Array(4);let g=null,m=null;const v=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let w=!1;this._outputColorSpace=sn;let T=0,A=0,C=null,b=-1,y=null;const D=new Be,N=new Be;let Y=null;const q=new Ft(0);let V=0,Z=e.width,ct=e.height,K=1,mt=null,xt=null;const _t=new Be(0,0,Z,ct),Dt=new Be(0,0,Z,ct);let ne=!1;const re=new Dc;let oe=!1,ft=!1;const U=new fe,R=new z,$=new Be,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Tt=!1;function Ut(){return C===null?K:1}let I=n;function Vt(E,O){return e.getContext(E,O)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yc}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",at,!1),I===null){const O="webgl2";if(I=Vt(O,E),I===null)throw Vt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Rt,At,j,vt,Mt,Nt,ce,de,P,S,X,lt,dt,ot,Gt,St,kt,Ht,yt,W,F,ht,rt,pt;function L(){Rt=new Ug(I),Rt.init(),ht=new x1(I,Rt),At=new Cg(I,Rt,t,ht),j=new m1(I,Rt),At.reversedDepthBuffer&&d&&j.buffers.depth.setReversed(!0),vt=new kg(I),Mt=new n1,Nt=new g1(I,Rt,j,Mt,At,ht,vt),ce=new Pg(M),de=new zg(M),P=new Wd(I),rt=new Tg(I,P),S=new Ng(I,P,vt,rt),X=new Bg(I,S,P,vt),yt=new Og(I,At,Nt),St=new Rg(Mt),lt=new e1(M,ce,de,Rt,At,rt,St),dt=new S1(M,Mt),ot=new s1,Gt=new h1(Rt),Ht=new Eg(M,ce,de,j,X,h,c),kt=new d1(M,X,At),pt=new w1(I,vt,At,j),W=new Ag(I,Rt,vt),F=new Fg(I,Rt,vt),vt.programs=lt.programs,M.capabilities=At,M.extensions=Rt,M.properties=Mt,M.renderLists=ot,M.shadowMap=kt,M.state=j,M.info=vt}L();const J=new y1(M,I);this.xr=J,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=Rt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Rt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(Z,ct,!1))},this.getSize=function(E){return E.set(Z,ct)},this.setSize=function(E,O,tt=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=E,ct=O,e.width=Math.floor(E*K),e.height=Math.floor(O*K),tt===!0&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(Z*K,ct*K).floor()},this.setDrawingBufferSize=function(E,O,tt){Z=E,ct=O,K=tt,e.width=Math.floor(E*tt),e.height=Math.floor(O*tt),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(_t)},this.setViewport=function(E,O,tt,et){E.isVector4?_t.set(E.x,E.y,E.z,E.w):_t.set(E,O,tt,et),j.viewport(D.copy(_t).multiplyScalar(K).round())},this.getScissor=function(E){return E.copy(Dt)},this.setScissor=function(E,O,tt,et){E.isVector4?Dt.set(E.x,E.y,E.z,E.w):Dt.set(E,O,tt,et),j.scissor(N.copy(Dt).multiplyScalar(K).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(E){j.setScissorTest(ne=E)},this.setOpaqueSort=function(E){mt=E},this.setTransparentSort=function(E){xt=E},this.getClearColor=function(E){return E.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor(...arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,tt=!0){let et=0;if(E){let G=!1;if(C!==null){const bt=C.texture.format;G=bt===Rc||bt===Cc||bt===Ac}if(G){const bt=C.texture.type,It=bt===jn||bt===ji||bt===gr||bt===xr||bt===wc||bt===Ec,Bt=Ht.getClearColor(),zt=Ht.getClearAlpha(),qt=Bt.r,Kt=Bt.g,Wt=Bt.b;It?(p[0]=qt,p[1]=Kt,p[2]=Wt,p[3]=zt,I.clearBufferuiv(I.COLOR,0,p)):(x[0]=qt,x[1]=Kt,x[2]=Wt,x[3]=zt,I.clearBufferiv(I.COLOR,0,x))}else et|=I.COLOR_BUFFER_BIT}O&&(et|=I.DEPTH_BUFFER_BIT),tt&&(et|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",at,!1),Ht.dispose(),ot.dispose(),Gt.dispose(),Mt.dispose(),ce.dispose(),de.dispose(),X.dispose(),rt.dispose(),pt.dispose(),lt.dispose(),J.dispose(),J.removeEventListener("sessionstart",ye),J.removeEventListener("sessionend",xn),Zn.stop()};function it(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=vt.autoReset,O=kt.enabled,tt=kt.autoUpdate,et=kt.needsUpdate,G=kt.type;L(),vt.autoReset=E,kt.enabled=O,kt.autoUpdate=tt,kt.needsUpdate=et,kt.type=G}function at(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function st(E){const O=E.target;O.removeEventListener("dispose",st),wt(O)}function wt(E){Ot(E),Mt.remove(E)}function Ot(E){const O=Mt.get(E).programs;O!==void 0&&(O.forEach(function(tt){lt.releaseProgram(tt)}),E.isShaderMaterial&&lt.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,tt,et,G,bt){O===null&&(O=ut);const It=G.isMesh&&G.matrixWorld.determinant()<0,Bt=vf(E,O,tt,et,G);j.setMaterial(et,It);let zt=tt.index,qt=1;if(et.wireframe===!0){if(zt=S.getWireframeAttribute(tt),zt===void 0)return;qt=2}const Kt=tt.drawRange,Wt=tt.attributes.position;let he=Kt.start*qt,_e=(Kt.start+Kt.count)*qt;bt!==null&&(he=Math.max(he,bt.start*qt),_e=Math.min(_e,(bt.start+bt.count)*qt)),zt!==null?(he=Math.max(he,0),_e=Math.min(_e,zt.count)):Wt!=null&&(he=Math.max(he,0),_e=Math.min(_e,Wt.count));const ke=_e-he;if(ke<0||ke===1/0)return;rt.setup(G,et,Bt,tt,zt);let Ee,be=W;if(zt!==null&&(Ee=P.get(zt),be=F,be.setIndex(Ee)),G.isMesh)et.wireframe===!0?(j.setLineWidth(et.wireframeLinewidth*Ut()),be.setMode(I.LINES)):be.setMode(I.TRIANGLES);else if(G.isLine){let Xt=et.linewidth;Xt===void 0&&(Xt=1),j.setLineWidth(Xt*Ut()),G.isLineSegments?be.setMode(I.LINES):G.isLineLoop?be.setMode(I.LINE_LOOP):be.setMode(I.LINE_STRIP)}else G.isPoints?be.setMode(I.POINTS):G.isSprite&&be.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)yr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),be.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Rt.get("WEBGL_multi_draw"))be.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Xt=G._multiDrawStarts,De=G._multiDrawCounts,pe=G._multiDrawCount,_n=zt?P.get(zt).bytesPerElement:1,ns=Mt.get(et).currentProgram.getUniforms();for(let vn=0;vn<pe;vn++)ns.setValue(I,"_gl_DrawID",vn),be.render(Xt[vn]/_n,De[vn])}else if(G.isInstancedMesh)be.renderInstances(he,ke,G.count);else if(tt.isInstancedBufferGeometry){const Xt=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,De=Math.min(tt.instanceCount,Xt);be.renderInstances(he,ke,De)}else be.render(he,ke)};function Zt(E,O,tt){E.transparent===!0&&E.side===Oe&&E.forceSinglePass===!1?(E.side=dn,E.needsUpdate=!0,kr(E,O,tt),E.side=Ci,E.needsUpdate=!0,kr(E,O,tt),E.side=Oe):kr(E,O,tt)}this.compile=function(E,O,tt=null){tt===null&&(tt=E),m=Gt.get(tt),m.init(O),_.push(m),tt.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),E!==tt&&E.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();const et=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const bt=G.material;if(bt)if(Array.isArray(bt))for(let It=0;It<bt.length;It++){const Bt=bt[It];Zt(Bt,tt,G),et.add(Bt)}else Zt(bt,tt,G),et.add(bt)}),m=_.pop(),et},this.compileAsync=function(E,O,tt=null){const et=this.compile(E,O,tt);return new Promise(G=>{function bt(){if(et.forEach(function(It){Mt.get(It).currentProgram.isReady()&&et.delete(It)}),et.size===0){G(E);return}setTimeout(bt,10)}Rt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Qt=null;function we(E){Qt&&Qt(E)}function ye(){Zn.stop()}function xn(){Zn.start()}const Zn=new Uu;Zn.setAnimationLoop(we),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(E){Qt=E,J.setAnimationLoop(E),E===null?Zn.stop():Zn.start()},J.addEventListener("sessionstart",ye),J.addEventListener("sessionend",xn),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(O),O=J.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,O,C),m=Gt.get(E,_.length),m.init(O),_.push(m),U.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),re.setFromProjectionMatrix(U,$n,O.reversedDepth),ft=this.localClippingEnabled,oe=St.init(this.clippingPlanes,ft),g=ot.get(E,v.length),g.init(),v.push(g),J.enabled===!0&&J.isPresenting===!0){const bt=M.xr.getDepthSensingMesh();bt!==null&&Jn(bt,O,-1/0,M.sortObjects)}Jn(E,O,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(mt,xt),Tt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Tt&&Ht.addToRenderList(g,E),this.info.render.frame++,oe===!0&&St.beginShadows();const tt=m.state.shadowsArray;kt.render(tt,E,O),oe===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset();const et=g.opaque,G=g.transmissive;if(m.setupLights(),O.isArrayCamera){const bt=O.cameras;if(G.length>0)for(let It=0,Bt=bt.length;It<Bt;It++){const zt=bt[It];Ys(et,G,E,zt)}Tt&&Ht.render(E);for(let It=0,Bt=bt.length;It<Bt;It++){const zt=bt[It];es(g,E,zt,zt.viewport)}}else G.length>0&&Ys(et,G,E,O),Tt&&Ht.render(E),es(g,E,O);C!==null&&A===0&&(Nt.updateMultisampleRenderTarget(C),Nt.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(M,E,O),rt.resetDefaultState(),b=-1,y=null,_.pop(),_.length>0?(m=_[_.length-1],oe===!0&&St.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function Jn(E,O,tt,et){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)tt=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||re.intersectsSprite(E)){et&&$.setFromMatrixPosition(E.matrixWorld).applyMatrix4(U);const It=X.update(E),Bt=E.material;Bt.visible&&g.push(E,It,Bt,tt,$.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||re.intersectsObject(E))){const It=X.update(E),Bt=E.material;if(et&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),$.copy(E.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),$.copy(It.boundingSphere.center)),$.applyMatrix4(E.matrixWorld).applyMatrix4(U)),Array.isArray(Bt)){const zt=It.groups;for(let qt=0,Kt=zt.length;qt<Kt;qt++){const Wt=zt[qt],he=Bt[Wt.materialIndex];he&&he.visible&&g.push(E,It,he,tt,$.z,Wt)}}else Bt.visible&&g.push(E,It,Bt,tt,$.z,null)}}const bt=E.children;for(let It=0,Bt=bt.length;It<Bt;It++)Jn(bt[It],O,tt,et)}function es(E,O,tt,et){const G=E.opaque,bt=E.transmissive,It=E.transparent;m.setupLightsView(tt),oe===!0&&St.setGlobalState(M.clippingPlanes,tt),et&&j.viewport(D.copy(et)),G.length>0&&Fr(G,O,tt),bt.length>0&&Fr(bt,O,tt),It.length>0&&Fr(It,O,tt),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Ys(E,O,tt,et){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[et.id]===void 0&&(m.state.transmissionRenderTarget[et.id]=new Ki(1,1,{generateMipmaps:!0,type:Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float")?Ir:jn,minFilter:Wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ge.workingColorSpace}));const bt=m.state.transmissionRenderTarget[et.id],It=et.viewport||D;bt.setSize(It.z*M.transmissionResolutionScale,It.w*M.transmissionResolutionScale);const Bt=M.getRenderTarget(),zt=M.getActiveCubeFace(),qt=M.getActiveMipmapLevel();M.setRenderTarget(bt),M.getClearColor(q),V=M.getClearAlpha(),V<1&&M.setClearColor(16777215,.5),M.clear(),Tt&&Ht.render(tt);const Kt=M.toneMapping;M.toneMapping=ai;const Wt=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),m.setupLightsView(et),oe===!0&&St.setGlobalState(M.clippingPlanes,et),Fr(E,tt,et),Nt.updateMultisampleRenderTarget(bt),Nt.updateRenderTargetMipmap(bt),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let he=!1;for(let _e=0,ke=O.length;_e<ke;_e++){const Ee=O[_e],be=Ee.object,Xt=Ee.geometry,De=Ee.material,pe=Ee.group;if(De.side===Oe&&be.layers.test(et.layers)){const _n=De.side;De.side=dn,De.needsUpdate=!0,rl(be,tt,et,Xt,De,pe),De.side=_n,De.needsUpdate=!0,he=!0}}he===!0&&(Nt.updateMultisampleRenderTarget(bt),Nt.updateRenderTargetMipmap(bt))}M.setRenderTarget(Bt,zt,qt),M.setClearColor(q,V),Wt!==void 0&&(et.viewport=Wt),M.toneMapping=Kt}function Fr(E,O,tt){const et=O.isScene===!0?O.overrideMaterial:null;for(let G=0,bt=E.length;G<bt;G++){const It=E[G],Bt=It.object,zt=It.geometry,qt=It.group;let Kt=It.material;Kt.allowOverride===!0&&et!==null&&(Kt=et),Bt.layers.test(tt.layers)&&rl(Bt,O,tt,zt,Kt,qt)}}function rl(E,O,tt,et,G,bt){E.onBeforeRender(M,O,tt,et,G,bt),E.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(M,O,tt,et,E,bt),G.transparent===!0&&G.side===Oe&&G.forceSinglePass===!1?(G.side=dn,G.needsUpdate=!0,M.renderBufferDirect(tt,O,et,G,E,bt),G.side=Ci,G.needsUpdate=!0,M.renderBufferDirect(tt,O,et,G,E,bt),G.side=Oe):M.renderBufferDirect(tt,O,et,G,E,bt),E.onAfterRender(M,O,tt,et,G,bt)}function kr(E,O,tt){O.isScene!==!0&&(O=ut);const et=Mt.get(E),G=m.state.lights,bt=m.state.shadowsArray,It=G.state.version,Bt=lt.getParameters(E,G.state,bt,O,tt),zt=lt.getProgramCacheKey(Bt);let qt=et.programs;et.environment=E.isMeshStandardMaterial?O.environment:null,et.fog=O.fog,et.envMap=(E.isMeshStandardMaterial?de:ce).get(E.envMap||et.environment),et.envMapRotation=et.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,qt===void 0&&(E.addEventListener("dispose",st),qt=new Map,et.programs=qt);let Kt=qt.get(zt);if(Kt!==void 0){if(et.currentProgram===Kt&&et.lightsStateVersion===It)return al(E,Bt),Kt}else Bt.uniforms=lt.getUniforms(E),E.onBeforeCompile(Bt,M),Kt=lt.acquireProgram(Bt,zt),qt.set(zt,Kt),et.uniforms=Bt.uniforms;const Wt=et.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Wt.clippingPlanes=St.uniform),al(E,Bt),et.needsLights=yf(E),et.lightsStateVersion=It,et.needsLights&&(Wt.ambientLightColor.value=G.state.ambient,Wt.lightProbe.value=G.state.probe,Wt.directionalLights.value=G.state.directional,Wt.directionalLightShadows.value=G.state.directionalShadow,Wt.spotLights.value=G.state.spot,Wt.spotLightShadows.value=G.state.spotShadow,Wt.rectAreaLights.value=G.state.rectArea,Wt.ltc_1.value=G.state.rectAreaLTC1,Wt.ltc_2.value=G.state.rectAreaLTC2,Wt.pointLights.value=G.state.point,Wt.pointLightShadows.value=G.state.pointShadow,Wt.hemisphereLights.value=G.state.hemi,Wt.directionalShadowMap.value=G.state.directionalShadowMap,Wt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Wt.spotShadowMap.value=G.state.spotShadowMap,Wt.spotLightMatrix.value=G.state.spotLightMatrix,Wt.spotLightMap.value=G.state.spotLightMap,Wt.pointShadowMap.value=G.state.pointShadowMap,Wt.pointShadowMatrix.value=G.state.pointShadowMatrix),et.currentProgram=Kt,et.uniformsList=null,Kt}function ol(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=To.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function al(E,O){const tt=Mt.get(E);tt.outputColorSpace=O.outputColorSpace,tt.batching=O.batching,tt.batchingColor=O.batchingColor,tt.instancing=O.instancing,tt.instancingColor=O.instancingColor,tt.instancingMorph=O.instancingMorph,tt.skinning=O.skinning,tt.morphTargets=O.morphTargets,tt.morphNormals=O.morphNormals,tt.morphColors=O.morphColors,tt.morphTargetsCount=O.morphTargetsCount,tt.numClippingPlanes=O.numClippingPlanes,tt.numIntersection=O.numClipIntersection,tt.vertexAlphas=O.vertexAlphas,tt.vertexTangents=O.vertexTangents,tt.toneMapping=O.toneMapping}function vf(E,O,tt,et,G){O.isScene!==!0&&(O=ut),Nt.resetTextureUnits();const bt=O.fog,It=et.isMeshStandardMaterial?O.environment:null,Bt=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Fs,zt=(et.isMeshStandardMaterial?de:ce).get(et.envMap||It),qt=et.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,Kt=!!tt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Wt=!!tt.morphAttributes.position,he=!!tt.morphAttributes.normal,_e=!!tt.morphAttributes.color;let ke=ai;et.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ke=M.toneMapping);const Ee=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,be=Ee!==void 0?Ee.length:0,Xt=Mt.get(et),De=m.state.lights;if(oe===!0&&(ft===!0||E!==y)){const on=E===y&&et.id===b;St.setState(et,E,on)}let pe=!1;et.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==De.state.version||Xt.outputColorSpace!==Bt||G.isBatchedMesh&&Xt.batching===!1||!G.isBatchedMesh&&Xt.batching===!0||G.isBatchedMesh&&Xt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Xt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Xt.instancing===!1||!G.isInstancedMesh&&Xt.instancing===!0||G.isSkinnedMesh&&Xt.skinning===!1||!G.isSkinnedMesh&&Xt.skinning===!0||G.isInstancedMesh&&Xt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Xt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Xt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Xt.instancingMorph===!1&&G.morphTexture!==null||Xt.envMap!==zt||et.fog===!0&&Xt.fog!==bt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==St.numPlanes||Xt.numIntersection!==St.numIntersection)||Xt.vertexAlphas!==qt||Xt.vertexTangents!==Kt||Xt.morphTargets!==Wt||Xt.morphNormals!==he||Xt.morphColors!==_e||Xt.toneMapping!==ke||Xt.morphTargetsCount!==be)&&(pe=!0):(pe=!0,Xt.__version=et.version);let _n=Xt.currentProgram;pe===!0&&(_n=kr(et,O,G));let ns=!1,vn=!1,$s=!1;const ze=_n.getUniforms(),Tn=Xt.uniforms;if(j.useProgram(_n.program)&&(ns=!0,vn=!0,$s=!0),et.id!==b&&(b=et.id,vn=!0),ns||y!==E){j.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ze.setValue(I,"projectionMatrix",E.projectionMatrix),ze.setValue(I,"viewMatrix",E.matrixWorldInverse);const pn=ze.map.cameraPosition;pn!==void 0&&pn.setValue(I,R.setFromMatrixPosition(E.matrixWorld)),At.logarithmicDepthBuffer&&ze.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&ze.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,vn=!0,$s=!0)}if(G.isSkinnedMesh){ze.setOptional(I,G,"bindMatrix"),ze.setOptional(I,G,"bindMatrixInverse");const on=G.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),ze.setValue(I,"boneTexture",on.boneTexture,Nt))}G.isBatchedMesh&&(ze.setOptional(I,G,"batchingTexture"),ze.setValue(I,"batchingTexture",G._matricesTexture,Nt),ze.setOptional(I,G,"batchingIdTexture"),ze.setValue(I,"batchingIdTexture",G._indirectTexture,Nt),ze.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&ze.setValue(I,"batchingColorTexture",G._colorsTexture,Nt));const An=tt.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&yt.update(G,tt,_n),(vn||Xt.receiveShadow!==G.receiveShadow)&&(Xt.receiveShadow=G.receiveShadow,ze.setValue(I,"receiveShadow",G.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(Tn.envMap.value=zt,Tn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&O.environment!==null&&(Tn.envMapIntensity.value=O.environmentIntensity),vn&&(ze.setValue(I,"toneMappingExposure",M.toneMappingExposure),Xt.needsLights&&Mf(Tn,$s),bt&&et.fog===!0&&dt.refreshFogUniforms(Tn,bt),dt.refreshMaterialUniforms(Tn,et,K,ct,m.state.transmissionRenderTarget[E.id]),To.upload(I,ol(Xt),Tn,Nt)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(To.upload(I,ol(Xt),Tn,Nt),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&ze.setValue(I,"center",G.center),ze.setValue(I,"modelViewMatrix",G.modelViewMatrix),ze.setValue(I,"normalMatrix",G.normalMatrix),ze.setValue(I,"modelMatrix",G.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const on=et.uniformsGroups;for(let pn=0,Vo=on.length;pn<Vo;pn++){const Li=on[pn];pt.update(Li,_n),pt.bind(Li,_n)}}return _n}function Mf(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function yf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,O,tt){const et=Mt.get(E);et.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),Mt.get(E.texture).__webglTexture=O,Mt.get(E.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:tt,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){const tt=Mt.get(E);tt.__webglFramebuffer=O,tt.__useDefaultFramebuffer=O===void 0};const bf=I.createFramebuffer();this.setRenderTarget=function(E,O=0,tt=0){C=E,T=O,A=tt;let et=!0,G=null,bt=!1,It=!1;if(E){const zt=Mt.get(E);if(zt.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(I.FRAMEBUFFER,null),et=!1;else if(zt.__webglFramebuffer===void 0)Nt.setupRenderTarget(E);else if(zt.__hasExternalTextures)Nt.rebindTextures(E,Mt.get(E.texture).__webglTexture,Mt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Wt=E.depthTexture;if(zt.__boundDepthTexture!==Wt){if(Wt!==null&&Mt.has(Wt)&&(E.width!==Wt.image.width||E.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Nt.setupDepthRenderbuffer(E)}}const qt=E.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(It=!0);const Kt=Mt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Kt[O])?G=Kt[O][tt]:G=Kt[O],bt=!0):E.samples>0&&Nt.useMultisampledRTT(E)===!1?G=Mt.get(E).__webglMultisampledFramebuffer:Array.isArray(Kt)?G=Kt[tt]:G=Kt,D.copy(E.viewport),N.copy(E.scissor),Y=E.scissorTest}else D.copy(_t).multiplyScalar(K).floor(),N.copy(Dt).multiplyScalar(K).floor(),Y=ne;if(tt!==0&&(G=bf),j.bindFramebuffer(I.FRAMEBUFFER,G)&&et&&j.drawBuffers(E,G),j.viewport(D),j.scissor(N),j.setScissorTest(Y),bt){const zt=Mt.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,zt.__webglTexture,tt)}else if(It){const zt=O;for(let qt=0;qt<E.textures.length;qt++){const Kt=Mt.get(E.textures[qt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+qt,Kt.__webglTexture,tt,zt)}}else if(E!==null&&tt!==0){const zt=Mt.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,zt.__webglTexture,tt)}b=-1},this.readRenderTargetPixels=function(E,O,tt,et,G,bt,It,Bt=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Mt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&It!==void 0&&(zt=zt[It]),zt){j.bindFramebuffer(I.FRAMEBUFFER,zt);try{const qt=E.textures[Bt],Kt=qt.format,Wt=qt.type;if(!At.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-et&&tt>=0&&tt<=E.height-G&&(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Bt),I.readPixels(O,tt,et,G,ht.convert(Kt),ht.convert(Wt),bt))}finally{const qt=C!==null?Mt.get(C).__webglFramebuffer:null;j.bindFramebuffer(I.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(E,O,tt,et,G,bt,It,Bt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=Mt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&It!==void 0&&(zt=zt[It]),zt)if(O>=0&&O<=E.width-et&&tt>=0&&tt<=E.height-G){j.bindFramebuffer(I.FRAMEBUFFER,zt);const qt=E.textures[Bt],Kt=qt.format,Wt=qt.type;if(!At.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const he=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,he),I.bufferData(I.PIXEL_PACK_BUFFER,bt.byteLength,I.STREAM_READ),E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Bt),I.readPixels(O,tt,et,G,ht.convert(Kt),ht.convert(Wt),0);const _e=C!==null?Mt.get(C).__webglFramebuffer:null;j.bindFramebuffer(I.FRAMEBUFFER,_e);const ke=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await R0(I,ke,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,he),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,bt),I.deleteBuffer(he),I.deleteSync(ke),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,tt=0){const et=Math.pow(2,-tt),G=Math.floor(E.image.width*et),bt=Math.floor(E.image.height*et),It=O!==null?O.x:0,Bt=O!==null?O.y:0;Nt.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,tt,0,0,It,Bt,G,bt),j.unbindTexture()};const Sf=I.createFramebuffer(),wf=I.createFramebuffer();this.copyTextureToTexture=function(E,O,tt=null,et=null,G=0,bt=null){bt===null&&(G!==0?(yr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=G,G=0):bt=0);let It,Bt,zt,qt,Kt,Wt,he,_e,ke;const Ee=E.isCompressedTexture?E.mipmaps[bt]:E.image;if(tt!==null)It=tt.max.x-tt.min.x,Bt=tt.max.y-tt.min.y,zt=tt.isBox3?tt.max.z-tt.min.z:1,qt=tt.min.x,Kt=tt.min.y,Wt=tt.isBox3?tt.min.z:0;else{const An=Math.pow(2,-G);It=Math.floor(Ee.width*An),Bt=Math.floor(Ee.height*An),E.isDataArrayTexture?zt=Ee.depth:E.isData3DTexture?zt=Math.floor(Ee.depth*An):zt=1,qt=0,Kt=0,Wt=0}et!==null?(he=et.x,_e=et.y,ke=et.z):(he=0,_e=0,ke=0);const be=ht.convert(O.format),Xt=ht.convert(O.type);let De;O.isData3DTexture?(Nt.setTexture3D(O,0),De=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Nt.setTexture2DArray(O,0),De=I.TEXTURE_2D_ARRAY):(Nt.setTexture2D(O,0),De=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const pe=I.getParameter(I.UNPACK_ROW_LENGTH),_n=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ns=I.getParameter(I.UNPACK_SKIP_PIXELS),vn=I.getParameter(I.UNPACK_SKIP_ROWS),$s=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ee.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ee.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,qt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Kt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Wt);const ze=E.isDataArrayTexture||E.isData3DTexture,Tn=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){const An=Mt.get(E),on=Mt.get(O),pn=Mt.get(An.__renderTarget),Vo=Mt.get(on.__renderTarget);j.bindFramebuffer(I.READ_FRAMEBUFFER,pn.__webglFramebuffer),j.bindFramebuffer(I.DRAW_FRAMEBUFFER,Vo.__webglFramebuffer);for(let Li=0;Li<zt;Li++)ze&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mt.get(E).__webglTexture,G,Wt+Li),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mt.get(O).__webglTexture,bt,ke+Li)),I.blitFramebuffer(qt,Kt,It,Bt,he,_e,It,Bt,I.DEPTH_BUFFER_BIT,I.NEAREST);j.bindFramebuffer(I.READ_FRAMEBUFFER,null),j.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||Mt.has(E)){const An=Mt.get(E),on=Mt.get(O);j.bindFramebuffer(I.READ_FRAMEBUFFER,Sf),j.bindFramebuffer(I.DRAW_FRAMEBUFFER,wf);for(let pn=0;pn<zt;pn++)ze?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,An.__webglTexture,G,Wt+pn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,An.__webglTexture,G),Tn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,on.__webglTexture,bt,ke+pn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,on.__webglTexture,bt),G!==0?I.blitFramebuffer(qt,Kt,It,Bt,he,_e,It,Bt,I.COLOR_BUFFER_BIT,I.NEAREST):Tn?I.copyTexSubImage3D(De,bt,he,_e,ke+pn,qt,Kt,It,Bt):I.copyTexSubImage2D(De,bt,he,_e,qt,Kt,It,Bt);j.bindFramebuffer(I.READ_FRAMEBUFFER,null),j.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Tn?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(De,bt,he,_e,ke,It,Bt,zt,be,Xt,Ee.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(De,bt,he,_e,ke,It,Bt,zt,be,Ee.data):I.texSubImage3D(De,bt,he,_e,ke,It,Bt,zt,be,Xt,Ee):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,bt,he,_e,It,Bt,be,Xt,Ee.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,bt,he,_e,Ee.width,Ee.height,be,Ee.data):I.texSubImage2D(I.TEXTURE_2D,bt,he,_e,It,Bt,be,Xt,Ee);I.pixelStorei(I.UNPACK_ROW_LENGTH,pe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_n),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ns),I.pixelStorei(I.UNPACK_SKIP_ROWS,vn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,$s),bt===0&&O.generateMipmaps&&I.generateMipmap(De),j.unbindTexture()},this.initRenderTarget=function(E){Mt.get(E).__webglFramebuffer===void 0&&Nt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Nt.setTextureCube(E,0):E.isData3DTexture?Nt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Nt.setTexture2DArray(E,0):Nt.setTexture2D(E,0),j.unbindTexture()},this.resetState=function(){T=0,A=0,C=null,j.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}}function T1(i){let t=i+1831565813>>>0;const e=t;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),[((t^t>>>14)>>>0)/4294967296,e]}function Bu(i,t="rngState"){return()=>{const[e,n]=T1(i[t]>>>0);return i[t]=n,e}}function Is(i){const t={s:i>>>0};return Bu(t,"s")}function li(...i){let t=2166136261;for(const e of i){if(typeof e=="string")for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);else{let n=Math.floor(e)|0;for(let s=0;s<4;s++)t^=n&255,t=Math.imul(t,16777619),n>>>=8}t^=t>>>13}return t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),(t^t>>>16)>>>0}function gn(...i){return li(...i)/4294967296}const mc=i=>i*i*(3-2*i);function Fn(i,t,e){const n=Math.floor(t),s=Math.floor(e),r=t-n,o=e-s,a=gn(i,n,s),c=gn(i,n+1,s),l=gn(i,n,s+1),f=gn(i,n+1,s+1),u=mc(r),d=mc(o);return(a+(c-a)*u+(l-a)*d+(a-c-l+f)*u*d)*2-1}function ho(i,t){const e=Math.floor(t),n=mc(t-e),s=gn(i,e),r=gn(i,e+1);return(s+(r-s)*n)*2-1}function bn(i,t,e,n=3){let s=1,r=1,o=0,a=0;for(let c=0;c<n;c++)o+=Fn(i+c*1013,t*r,e*r)*s,a+=s,s*=.5,r*=2.03;return o/a}const un=(i,t,e)=>i<t?t:i>e?e:i,_s=(i,t,e)=>i+(t-i)*e,ue=(i,t,e)=>{const n=un((e-i)/(t-i),0,1);return n*n*(3-2*n)};function Hu(i,t){let e=(t-i)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<=-Math.PI&&(e+=Math.PI*2),e}function Hc(i){let t=i%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<=-Math.PI&&(t+=Math.PI*2),t}function Gu(){return(Math.floor(Math.random()*2147483647)^Date.now()&2147483647)>>>0}const Se=40,vi=26,gc=92,Le=-.85,A1=44,Xe={journey:{key:"journey",label:"The Journey",legLength:2700,legs:6,reinforceEvery:14,cycle:46,bossTrigger:70,lairCalm:120,short:!1,biomesPerLeg:null,transition:90},field:{key:"field",label:"Field Test",legLength:400,legs:6,reinforceEvery:10,cycle:30,bossTrigger:42,lairCalm:50,short:!0,biomesPerLeg:[2,2,2,2,2,2],transition:80}},Fo=10,fn={urban:{name:"Reclaimed streets",road:"asphalt",halfWidth:3.7,ground:6274879,ground2:8836682,sky:11132149,fog:12575727},forest:{name:"Old forest",road:"dirt",halfWidth:2.3,ground:3119683,ground2:5224522,sky:10475240,fog:11065552},village:{name:"Forgotten village",road:"asphalt",halfWidth:2.9,ground:9225791,ground2:11917388,sky:11590898,fog:13100767},glade:{name:"Open glade",road:"dirt",halfWidth:2.2,ground:9428028,ground2:12774485,sky:10805503,fog:13496038},coast:{name:"Turquoise coast",road:"dirt",halfWidth:2.5,ground:15979915,ground2:16508584,sky:10478580,fog:13037296},desert:{name:"Ochre desert",road:"dirt",halfWidth:2.8,ground:15049290,ground2:15777634,sky:16767395,fog:16111790},cliffs:{name:"Red canyon",road:"dirt",halfWidth:2.5,ground:11823166,ground2:10263122,sky:12375786,fog:14271150},mountain:{name:"High country",road:"dirt",halfWidth:2.3,ground:8367722,ground2:11060366,sky:11850990,fog:11125978}},gh=Object.keys(fn),Vn={bldgA:{shape:"b",hw:4.5,hd:4},bldgB:{shape:"b",hw:5,hd:3.6},bldgC:{shape:"b",hw:3.6,hd:3.6},car:{shape:"b",hw:.95,hd:2.1},van:{shape:"b",hw:1.05,hd:2.5},lamp:{shape:"c",r:.3},barrier:{shape:"b",hw:1.3,hd:.35},dumpster:{shape:"b",hw:1,hd:.65},planterTree:{shape:"c",r:.9},pine:{shape:"c",r:.75},oak:{shape:"c",r:.85},roundTree:{shape:"c",r:.7},palm:{shape:"c",r:.5},snowPine:{shape:"c",r:.75},deadTree:{shape:"c",r:.45},rock:{shape:"c",r:1.05},boulder:{shape:"c",r:1.9},pillar:{shape:"c",r:2.4},mesa:{shape:"c",r:7},peak:{shape:"c",r:14},cottage:{shape:"b",hw:3.4,hd:2.9},barn:{shape:"b",hw:4.4,hd:3.4},well:{shape:"c",r:1},haystack:{shape:"c",r:1.1},cart:{shape:"b",hw:.75,hd:1.3},fence:{shape:"b",hw:2,hd:.15},cactus:{shape:"c",r:.45},boat:{shape:"b",hw:1,hd:2.6},log:{shape:"b",hw:1.8,hd:.35},cabin:{shape:"b",hw:3,hd:2.5},rubble:{shape:"c",r:.85},crystalBig:{shape:"c",r:1},bldgD:{shape:"b",hw:3.2,hd:2.8},wreck:{shape:"b",hw:1,hd:2.1},bus:{shape:"b",hw:1.35,hd:5},pole:{shape:"c",r:.25},fenceMetal:{shape:"b",hw:2,hd:.12},debris:{shape:"c",r:.9},barrel:{shape:"c",r:.45},bush:null,fern:null,flowers:null,grass:null,mushroom:null,pebbles:null,bones:null,driftwood:null,cone:null,shrub:null,crystal:null,thorns:null,thornWall:null,stump:null,sign:null,hydrant:null},C1={urban:[["car",4,.95,1.1],["wreck",3,.95,1.1],["van",2,.95,1.05],["bus",1,1,1],["lamp",2,1,1.15],["barrier",2,1,1],["dumpster",2,1,1.1],["planterTree",3,.9,1.25],["bush",5,.9,1.6],["rubble",3,.8,1.4],["debris",3,.8,1.3],["barrel",2,.9,1.1],["cone",2,1,1.2],["grass",5,1,1.8],["sign",1,1,1],["fenceMetal",2,1,1],["pole",1,1,1.1]],forest:[["pine",6,.9,1.35],["oak",4,.9,1.3],["rock",3,.7,1.4],["log",2,1,1.2],["bush",6,1,1.8],["fern",7,1,1.8],["mushroom",4,1,1.8],["stump",2,1,1.3]],village:[["oak",4,.9,1.3],["fence",4,1,1],["haystack",3,.9,1.2],["well",1,1,1],["cart",2,1,1],["bush",6,1,1.6],["flowers",6,1,1.6],["grass",5,1,1.6],["rock",2,.6,1]],glade:[["roundTree",4,.9,1.4],["rock",3,.6,1.3],["bush",5,1,1.7],["flowers",12,1,2],["grass",9,1,2],["stump",2,1,1.2],["oak",1,1,1.2]],coast:[["palm",6,.9,1.3],["rock",3,.6,1.4],["boat",1,1,1],["driftwood",4,1,1.4],["shrub",5,1,1.6],["grass",4,1,1.5],["pebbles",3,1,1.5]],desert:[["cactus",6,.9,1.5],["rock",4,.7,1.5],["deadTree",2,1,1.3],["bones",3,1,1.4],["shrub",5,.8,1.4],["pebbles",4,1,1.6],["boulder",1,.7,1]],cliffs:[["pillar",2,.6,1],["rock",5,.7,1.5],["boulder",2,.7,1.1],["pine",3,.9,1.2],["shrub",6,1,1.6],["grass",4,1,1.5],["pebbles",3,1,1.5]],mountain:[["snowPine",6,.9,1.4],["boulder",3,.7,1.2],["rock",4,.6,1.3],["cabin",1,1,1],["shrub",4,1,1.5],["grass",4,1,1.4],["pebbles",3,1,1.5]]},R1={urban:[["bldgA",5,1,1.35],["bldgC",3,1,1.4],["bldgB",3,1,1.2],["bldgD",3,1,1.2],["oak",2,1.1,1.5],["planterTree",1,1,1.4]],forest:[["pine",8,1.1,1.8],["oak",5,1.1,1.7],["boulder",1,.9,1.5]],village:[["oak",5,1.1,1.6],["cottage",3,1,1.15],["barn",2,1,1.1],["pine",3,1.1,1.5],["haystack",1,1,1.3]],glade:[["roundTree",6,1.1,1.7],["oak",4,1.1,1.6],["boulder",1,.8,1.3],["pine",2,1.1,1.5]],coast:[["palm",6,1,1.5],["boulder",2,.8,1.4],["rock",2,1,1.8]],desert:[["mesa",2,.7,1.3],["cactus",4,1.1,1.8],["boulder",3,1,1.6],["deadTree",1,1,1.4]],cliffs:[["pillar",5,1,1.9],["boulder",3,1,1.6],["pine",3,1.1,1.5]],mountain:[["snowPine",7,1.1,1.8],["peak",1,.7,1.3],["boulder",2,1,1.6]]},P1={urban:[["planterTree",3,.9,1.2],["car",3,.95,1.1],["wreck",2,.95,1.05],["van",1,1,1.05],["lamp",2,1,1.15],["bush",3,1,1.7],["dumpster",1,1,1.1],["barrier",2,1,1],["cone",2,1,1.3],["sign",1,1,1],["rubble",2,.8,1.3],["debris",2,.8,1.2],["barrel",2,.9,1.1],["hydrant",1,1,1],["grass",3,1.2,2],["fenceMetal",2,1,1]],forest:[["pine",5,.85,1.25],["oak",4,.85,1.2],["bush",5,1,1.8],["fern",6,1.2,2],["mushroom",3,1.2,2],["log",1,1,1.2],["rock",2,.6,1.1],["stump",2,1,1.4]],village:[["fence",4,1,1],["oak",2,.9,1.2],["haystack",2,.9,1.1],["bush",4,1,1.6],["flowers",6,1.2,2],["cart",1,1,1],["well",1,1,1],["grass",3,1.2,1.8],["lamp",1,1,1]],glade:[["flowers",9,1.2,2.2],["bush",3,1,1.7],["roundTree",3,.85,1.2],["rock",2,.5,1],["grass",6,1.2,2.2],["stump",1,1,1.3]],coast:[["palm",5,.85,1.2],["rock",3,.5,1.1],["driftwood",3,1,1.4],["shrub",3,1,1.6],["grass",2,1,1.6],["pebbles",2,1.2,1.8],["boat",1,1,1]],desert:[["cactus",6,.85,1.4],["rock",3,.6,1.2],["shrub",4,.9,1.5],["bones",2,1,1.4],["pebbles",3,1.2,1.8],["deadTree",1,.9,1.2]],cliffs:[["rock",5,.6,1.3],["boulder",2,.6,.9],["shrub",4,1,1.6],["pine",2,.85,1.1],["pebbles",3,1.2,1.8],["grass",2,1,1.6]],mountain:[["snowPine",5,.85,1.2],["rock",4,.6,1.2],["boulder",2,.6,.9],["shrub",3,1,1.5],["grass",2,1,1.5],["pebbles",2,1.2,1.8]]},I1={urban:20,forest:28,village:24,glade:28,coast:22,desert:20,cliffs:20,mountain:22},L1={urban:16,forest:22,village:19,glade:24,coast:17,desert:16,cliffs:16,mountain:18},D1={urban:14,forest:34,village:16,glade:18,coast:12,desert:12,cliffs:14,mountain:18};function xh(i,t){const e=t.slice();for(let n=e.length-1;n>0;n--){const s=Math.floor(i()*(n+1));[e[n],e[s]]=[e[s],e[n]]}return e}function z1(i,t){const e=[];if(!t.biomesPerLeg){let c=null;for(let l=0;l<t.legs;l++){const f=Is(li(i,"legbiomes",l));let u=xh(f,gh);l===0?u=["urban",...u.filter(d=>d!=="urban")]:u[0]===c&&u.push(u.shift()),e.push(u),c=u[u.length-1]}return e}const n=Is(li(i,"biomecycle")),s=[],r=t.biomesPerLeg.reduce((c,l)=>c+l,0);let o=0;for(;s.length<r;){let c=xh(n,gh);o===0?c=["urban",...c.filter(l=>l!=="urban")]:c[0]===s[s.length-1]&&c.push(c.shift()),s.push(...c),o++}let a=0;for(let c=0;c<t.legs;c++){const l=t.biomesPerLeg[c%t.biomesPerLeg.length];e.push(s.slice(a,a+l)),a+=l}return e}const U1=new Set(["bldgA","bldgB","bldgC","bldgD","cottage","barn","cabin"]),Sa=new Set(["car","van","wreck","bus"]),_h=new Set(["oak","pine","roundTree","planterTree","snowPine","palm","deadTree"]),N1=new Set(["barrier","fence","fenceMetal"]);function wa(i,t){let e=0;for(const s of t)e+=s[1];let n=i()*e;for(const s of t)if(n-=s[1],n<=0)return s;return t[t.length-1]}function vh(i){return i.shape==="c"?i.r:Math.hypot(i.hw,i.hd)}function F1(i,t="journey"){const e=Xe[t]||Xe.journey,n=e.legLength,s=n*e.legs,r=i>>>0,o=[0,1,2,3].map(U=>gn(r,"road",U)*Math.PI*2),a=[9+gn(r,"ra",0)*4,4+gn(r,"ra",1)*3,2+gn(r,"ra",2)*1.5],c=[];z1(r,e).forEach((U,R)=>{const $=Is(li(r,"legweights",R)),ut=U.map((I,Vt)=>(.75+$()*.5)*(R===0&&Vt===0?1.3:1)),Tt=ut.reduce((I,Vt)=>I+Vt,0);let Ut=R*n;U.forEach((I,Vt)=>{const Rt=ut[Vt]/Tt*n;c.push({biome:I,z0:Ut,z1:Ut+Rt,leg:R,seaSide:gn(r,"sea",R,Vt)<.5?-1:1}),Ut+=Rt})});let f=1/0;for(const U of c)f=Math.min(f,U.z1-U.z0);const u=Math.min(e.transition||40,f*.6);c[0].z0=-1e6,c[c.length-1].z1=1e6;function d(U){let R=0,$=c.length-1;for(;R<$;){const ut=R+$>>1;U<c[ut].z1?$=ut:R=ut+1}return R}const h=u/2;function p(U){const R=c[U];return c[U+1]&&c[U+1].leg!==R.leg?R.z1+h:R.z1}function x(U){const R=d(U),$=c[R];if(R<c.length-1){const ut=p(R);if(U>ut-h){const Tt=ue(ut-h,ut+h,U);return{a:$.biome,b:c[R+1].biome,t:Tt,seg:$,nextSeg:c[R+1]}}}if(R>0){const ut=p(R-1);if(U<ut+h){const Tt=ue(ut-h,ut+h,U);return{a:c[R-1].biome,b:$.biome,t:Tt,seg:c[R-1],nextSeg:$}}}return{a:$.biome,b:$.biome,t:0,seg:$,nextSeg:$}}function g(U){const R=U*n,$=new Map;let ut=0;for(let Ut=R+1;Ut<R+n;Ut+=2){const I=v(Ut);$.set(I,($.get(I)||0)+1),ut++}const Tt=c.filter(Ut=>Ut.leg===U).length;return[...$.entries()].filter(([,Ut])=>Ut/ut>=.4/Tt).map(([Ut])=>Ut)}function m(U,R){const $=x(U);let ut=0;return $.a===R&&(ut+=1-$.t),$.b===R&&(ut+=$.t),ut}function v(U){const R=x(U);return R.t<.5?R.a:R.b}function _(U){return ue(-20,60,U)*(a[0]*Math.sin(U/103+o[0])+a[1]*Math.sin(U/47+o[1])+a[2]*Math.sin(U/23+o[2]))}function M(U){const R=(_(U+1)-_(U-1))/2;return Math.atan2(R,1)}function w(U){return-M(U)}function T(U){const R=m(U,"mountain")+m(U,"cliffs")*.6;return .55+.75*ho(r+11,U/70)+R*1.3*ho(r+13,U/37)}function A(U){const R=x(U),$=fn[R.a],ut=fn[R.b],Tt=_s($.halfWidth,ut.halfWidth,R.t),Ut=_s($.road==="asphalt"?1:0,ut.road==="asphalt"?1:0,R.t);return{x:_(U),halfWidth:Tt,asphalt:Ut,biome:R}}function C(U){return Math.max(A(U).halfWidth,3)+1.6}function b(U){const R=x(U);let $=0,ut=1;R.a==="coast"&&($+=1-R.t,ut=R.seg.seaSide),R.b==="coast"&&($+=R.t,ut=R.nextSeg.seaSide);const Tt=9.5+(1-$)*90;return{w:$,side:ut,shore:Tt}}function y(U){return 14.5+3*ho(r+35,U/45)}function D(U){return 15+4*ho(r+36,U/55)}function N(U,R,$,ut){const Tt=Math.abs(ut);switch(U){case"urban":return .18*bn(r+1,R/14,$/14,2)+ue(46,80,Tt)*3;case"forest":return 1.1*bn(r+2,R/17,$/17,3)+ue(30,60,Tt)*6;case"village":return .55*bn(r+3,R/20,$/20,2)+ue(36,70,Tt)*3.5;case"glade":return .9*bn(r+4,R/22,$/22,3)+ue(34,70,Tt)*4;case"coast":return .45*bn(r+5,R/15,$/15,2)+ue(30,60,Tt)*3;case"desert":return 1.6*Math.abs(bn(r+6,R/19,$/31,3))-.3+ue(32,70,Tt)*5;case"cliffs":{const Ut=y($),I=ue(Ut,Ut+4.5,Tt)*(8+3*bn(r+7,R/9,$/9,2)),Vt=ue(Ut+11,Ut+15,Tt)*(6+2*bn(r+34,R/12,$/12,2));return .6*bn(r+8,R/14,$/14,2)+I+Vt}case"mountain":{const Ut=D($),I=.7+.3*bn(r+10,R/30,$/30,2);return 1.1*bn(r+9,R/18,$/18,3)+ue(Ut,Ut+16,Tt)*12*I+ue(Ut+16,Ut+50,Tt)*14*I}default:return 0}}function Y(U,R){const $=A(R),ut=U-$.x,Tt=Math.abs(ut),Ut=T(R),I=$.halfWidth+.9,Vt=ue(I,I+7,Tt),Rt=$.biome;let At=N(Rt.a,U,R,ut)*(1-Rt.t);Rt.t>0&&(At+=N(Rt.b,U,R,ut)*Rt.t);let j=Math.max(Ut+Vt*At,Le+.3);const vt=b(R);if(vt.w>0&&ut*vt.side>0){const Mt=ue(vt.shore-3,vt.shore+7,Tt);j=_s(j,Le-3.2,Mt*Math.min(1,vt.w*1.6))}return j}function q(U){const R=b(U);let $=vi;const ut=m(U,"cliffs");ut>0&&($=Math.min($,_s(vi,y(U)+.5,ut)));const Tt=m(U,"mountain");Tt>0&&($=Math.min($,_s(vi,D(U)+4,Tt)));let Ut=-$,I=$;if(R.w>.35){const Vt=Math.min($,R.shore-1.5+(1-R.w)*30);R.side>0?I=Vt:Ut=-Vt}return{min:Ut,max:I}}const V=[];for(let U=0;U<e.legs;U++){const R=(U+1)*n;V.push({index:U,z:R,x:_(R),final:U===e.legs-1})}function Z(U,R){const $=R/n,ut=un(Math.floor($),0,e.legs-1),Tt=un($-ut,0,1),I=-.02+(ut+Tt)/e.legs*.42,Vt=ue(.55,.95,Tt)*(.16+ut*.025),Rt=bn(r+21,U/24,R/30,3),At=bn(r+23,U/90,R/140,2)*.18;let j=I+Vt+At+Rt*1.05;Rt>.28&&(j+=(Rt-.28)*1.2);const vt=R-Math.round(R/n)*n,Mt=Math.hypot(U-_(R),vt);return j*=ue(9,26,Mt),un(j,0,1)}function ct(U,R){for(const $ of V)if(Math.abs(U-$.z)<R)return $;return Math.abs(U)<R*.8?{index:-1,z:0,x:_(0),depot:!0}:null}function K(U,R,$,ut=!1){return Sa.has(U)?w(R)+($()<.7?0:Math.PI)+($()-.5)*(ut?1.4:.5):N1.has(U)?w(R)+Math.PI/2+($()-.5)*(ut?.6:.2):$()*Math.PI*2}const mt=new Map;function xt(U){let R=mt.get(U);return R?(mt.delete(U),mt.set(U,R),R):(R=_t(U),mt.set(U,R),mt.size>72&&mt.delete(mt.keys().next().value),R)}function _t(U){const R=Is(li(r,"chunk",U)),$=U*Se,ut=[],Tt=[],Ut=[],I=[],Vt=[],Rt=(W,F,ht)=>{if(ht>1.6&&(F-ht<$+.2||F+ht>$+Se-.2))return!1;for(const rt of Vt){const pt=rt.x-W,L=rt.z-F;if(pt*pt+L*L<(rt.r+ht)*(rt.r+ht))return!1}return!0},At=(W,F,ht,rt,pt,L={})=>{const J=Vn[W],it={p:W,x:F,z:ht,rot:rt,s:pt,sy:L.sy||1,v:L.v??R(),c:L.c??0};if(ut.push(it),J){const gt=F-_(ht);Math.abs(gt)<A1&&(J.shape==="c"?Tt.push({shape:"c",x:F,z:ht,r:J.r*pt,p:W}):Tt.push({shape:"b",x:F,z:ht,hw:J.hw*pt,hd:J.hd*pt,rot:rt,p:W})),Vt.push({x:F,z:ht,r:(J.shape==="c"?J.r:Math.max(J.hw,J.hd))*pt+.6})}return it},j=W=>W.final?24:13,vt=(W,F,ht)=>{const rt=ct(F,27+ht);if(rt&&Math.hypot(W-rt.x,F-rt.z)<j(rt)+ht)return!1;for(let pt=-2;pt<=2;pt++){const L=F+pt/2*ht;if(Math.abs(W-_(L))-ht<=C(L))return!1}return!0},Mt=(W,F,ht,rt,pt)=>{const L=ct(F,27+Math.max(rt,pt));if(L&&Math.hypot(W-L.x,F-L.z)<j(L)+Math.max(rt,pt))return!1;const J=Math.cos(ht),it=Math.sin(ht);for(let gt=0;gt<16;gt++){const at=gt%4/4,st=gt>>2,wt=st===0?-rt+at*2*rt:st===1?rt:st===2?rt-at*2*rt:-rt,Ot=st===0?-pt:st===1?-pt+at*2*pt:st===2?pt:pt-at*2*pt,Zt=W+wt*J-Ot*it,Qt=F+wt*it+Ot*J;if(Math.abs(Zt-_(Qt))<=C(Qt)+.25)return!1}return!0};if(U===0){const F=_(30)+C(30)+1.8;Ut.push({id:"0:9",type:"crate",x:F,z:30,rot:w(30)+.3}),Vt.push({x:F,z:30,r:1.6})}for(const W of[-1,1]){let F=$+.3+R()*1.5;for(;F<$+Se-2;){const ht=x(F),rt=R()<ht.t?ht.b:ht.a;if(rt==="urban"){const pt=R();let L=pt<.36?"bldgA":pt<.58?"bldgB":pt<.78?"bldgC":"bldgD";m(F,"urban")<.8&&(L="bldgD");const J=.95+R()*.2;F+Vn[L].hw*2*J>$+Se-.3&&(L="bldgD");const it=Vn[L],gt=F+it.hw*2*J<=$+Se-.3,at=F+it.hw*J,st=w(at),wt=st+(W<0?Math.PI/2:-Math.PI/2),Ot=C(at)+2.15+it.hd*J+R()*.8,Zt=_(at)+W*Ot*Math.cos(st);let Qt=!1;if(gt&&R()<.94&&Mt(Zt,at,wt,it.hw*J,it.hd*J)&&Rt(Zt,at,Math.min(it.hw,it.hd)*J)){At(L,Zt,at,wt,J,{sy:L==="bldgD"?1:.8+R()*.6}),Qt=!0;const we=R()<.5?"bldgA":R()<.5?"bldgC":"bldgB";if(m(at,"urban")<.8){F+=(gt?it.hw*2*J:4.4)+.4+R()*1.8;continue}const ye=Vn[we],xn=1+R()*.2,Zn=Ot+it.hd*J+2.5+R()*3+ye.hd*xn,Jn=un(at+(R()-.5)*3,$+ye.hw*xn+.3,$+Se-ye.hw*xn-.3),es=_(Jn)+W*Zn,Ys=w(Jn)+(W<0?Math.PI/2:-Math.PI/2)+(R()-.5)*.15;R()<.75&&Mt(es,Jn,Ys,ye.hw*xn,ye.hd*xn)&&Rt(es,Jn,Math.min(ye.hw,ye.hd)*xn)&&At(we,es,Jn,Ys,xn,{sy:1+R()*.7})}if(!Qt){const we=Math.min(F+2.2,$+Se-2.3),ye=_(we)+W*(C(we)+2.2);if(vt(ye,we,2.2)&&Rt(ye,we,2)){At("fenceMetal",ye,we,w(we)+Math.PI/2+(R()-.5)*.1,1);const xn=ye+W*2.2;Rt(xn,we,1)&&At(R()<.5?"debris":"barrel",xn,we,R()*6.28,.9+R()*.3)}}F+=(gt?it.hw*2*J:4.4)+.4+R()*1.8}else if(rt==="village"){const pt=R()<.7?"cottage":"barn",L=Vn[pt],J=.95+R()*.15,it=C(F)+1.6+L.hd*J+R()*3,gt=_(F)+W*it,at=w(F)+(W<0?Math.PI/2:-Math.PI/2)+(R()-.5)*.3;R()<.6&&Mt(gt,F,at,L.hw*J,L.hd*J)&&Rt(gt,F,Math.max(L.hw,L.hd)*J)&&At(pt,gt,F,at,J),F+=L.hw*2*J+5+R()*9}else F+=8+R()*6}}for(const W of[-1,1])for(let F=$+3+R()*6;F<$+Se;F+=11+R()*5){if(m(F,"urban")<.6||ct(F,22))continue;const ht=_(F)+W*(C(F)+.55);vt(ht,F,.45)&&At(R()<.75?"pole":"hydrant",ht,F,w(F)+(W<0?0:Math.PI),1)}const Nt=$+Se/2;v(Nt);const ce=x(Nt),de=W=>_s(W[ce.a],W[ce.b],ce.t),P=Math.round(de(I1)*(.85+R()*.3));for(let W=0;W<P*1.9;W++){const F=$+R()*Se,ht=x(F),rt=R()<ht.t?ht.b:ht.a,[pt,,L,J]=wa(R,P1[rt]),it=Vn[pt],gt=L+R()*(J-L),at=R()<.5?-1:1,st=C(F),wt=b(F),Ot=st+.5+R()*8.5;if(wt.w>.3&&at===wt.side&&Ot>wt.shore-1.5)continue;const Zt=_(F)+at*Ot,Qt=K(pt,F,R);if(it){const we=vh(it)*gt,ye=(it.shape==="c"?it.r:Math.max(it.hw,it.hd))*gt;if(!vt(Zt,F,we+.3)||!Rt(Zt,F,ye+1.1))continue}else if(!Rt(Zt,F,.4))continue;At(pt,Zt,F,Qt,gt)}const S=Math.round(de(L1)*(.85+R()*.3));for(let W=0;W<S*2&&!(ut.length>420);W++){const F=$+R()*Se,ht=x(F),rt=R()<ht.t?ht.b:ht.a,[pt,,L,J]=wa(R,C1[rt]),it=Vn[pt],gt=L+R()*(J-L),at=R()<.5?-1:1,st=C(F),wt=st+.6+Math.pow(R(),1.15)*(vi+12-st),Ot=_(F)+at*wt,Zt=b(F);if(!(Zt.w>.3&&at===Zt.side&&wt>Zt.shore-1)){if(it){const Qt=vh(it)*gt;if(!vt(Ot,F,Qt+.3)||!Rt(Ot,F,(it.shape==="c"?it.r:Math.max(it.hw,it.hd))*gt)||wt<vi&&R()<.3)continue}else if(wt<st-.5)continue;At(pt,Ot,F,K(pt,F,R,!0),gt)}}const X=Math.round(de(D1)*(.85+R()*.3));for(let W=0;W<X;W++){const F=$+R()*Se,ht=x(F),rt=R()<ht.t?ht.b:ht.a;let[pt,,L,J]=wa(R,R1[rt]);pt.startsWith("bldg")&&m(F,"urban")<.8&&(pt="oak",L=1.1,J=1.5);const it=Vn[pt],gt=L+R()*(J-L),at=R()<.5?-1:1,st=b(F);if(st.w>.3&&at===st.side){if(R()<.7)continue;const ye=_(F)+at*(st.shore+8+R()*40);At(R()<.5?"rock":"boulder",ye,F,R()*6.28,1+R());continue}const wt=pt==="peak"?62:pt==="mesa"?44:vi+4,Ot=wt+R()*(gc-14-wt),Zt=_(F)+at*Ot,Qt=(it.shape==="c"?it.r:Math.max(it.hw,it.hd))*gt;if(!Rt(Zt,F,Qt*.7))continue;const we=pt.startsWith("bldg")?w(F)+(at<0?Math.PI/2:-Math.PI/2)+(R()-.5)*.4:R()*6.28;At(pt,Zt,F,we,gt,{sy:pt.startsWith("bldg")?.9+R()*.8:1})}const lt=[],dt=Is(li(r,"veins",U)),ot=[];for(let W=0;W<34;W++){const F=$+dt()*Se,ht=dt()<.5?-1:1,rt=Math.pow(dt(),1.15)*38,pt=_(F)+ht*rt,L=Z(pt,F);if(L<.4||dt()>(L-.25)*1.5)continue;const J=C(F),it=b(F);if(it.w>.3&&ht===it.side&&rt>it.shore-1)continue;if(rt<J+.4){L>.55&&ot.push({x:pt,z:F,c:L,road:!0});continue}const gt=dt();L>.7&&gt<.3&&vt(pt,F,1.4)&&Rt(pt,F,1.1)?At("crystalBig",pt,F,dt()*6.28,.85+dt()*.45,{c:L}):L>.52&&gt<.62?Rt(pt,F,.5)&&At("crystal",pt,F,dt()*6.28,.7+dt()*.7,{c:L}):Rt(pt,F,.6)&&At("thorns",pt,F,dt()*6.28,.7+dt()*.6,{c:L}),ot.push({x:pt,z:F,c:L})}const Gt=ut.length;let St=0;for(let W=0;W<Gt&&St<5;W++){const F=ut[W],ht=Z(F.x,F.z);if(!(ht<.5||dt()>(ht-.4)*1.8)&&!(_h.has(F.p)&&(ht<.62||Math.abs(F.x-_(F.z))>30)))if(St++,U1.has(F.p)){const rt=Vn[F.p],pt=Math.sin(F.rot),L=-Math.cos(F.rot),J=rt.hd*F.s+.12;At("thornWall",F.x+pt*J,F.z+L*J,F.rot,F.s*(.8+dt()*.3),{c:ht}),ot.push({x:F.x+pt*(J+.5),z:F.z+L*(J+.5),c:ht})}else(Sa.has(F.p)||_h.has(F.p))&&(At("thorns",F.x,F.z,F.rot+(dt()-.5),F.s*(Sa.has(F.p)?1.15:.8),{c:ht}),ht>.6&&ot.push({x:F.x,z:F.z,c:ht}))}const kt=(W,F,ht,rt,pt,L,J)=>{const it=[W,F];for(let gt=0;gt<rt;gt++){ht+=(dt()-.5)*1.1;const at=.45+dt()*.45;if(W+=Math.sin(ht)*at,F+=Math.cos(ht)*at,it.push(W,F),Z(W,F)<.36)break;L<2&&gt>0&&dt()<.3&&kt(W,F,ht+(dt()<.5?1:-1),Math.max(2,Math.floor(rt*.55)),pt*.65,L+1,J)}lt.length<160&&it.length>=4&&lt.push({pts:it,w:pt,c:J})};for(const W of ot){const F=W.road?3:3+Math.floor(W.c*4),ht=dt()*6.28;for(let rt=0;rt<F;rt++)kt(W.x,W.z,ht+rt/F*6.28+(dt()-.5)*.7,Math.round((3+W.c*7)*(.6+dt()*.7)),.05+W.c*.06,0,W.c)}for(let W=$+R()*3;W<$+Se;W+=1.6+R()*2.4){const F=A(W),ht=w(W);if(F.asphalt>.5){const rt=R(),pt=(R()*2-1)*(F.halfWidth-.8),L=F.x+pt;rt<.32?I.push({p:"crack",x:L,z:W,rot:ht+(R()-.5)*2.4,sx:1+R()*1.8,sz:1+R()}):rt<.5?I.push({p:"patch",x:L,z:W,rot:ht+(R()-.5)*.3,sx:1+R()*1.4,sz:1+R()*1.2}):rt<.68?I.push({p:"earth",x:L,z:W,rot:R()*6.28,sx:.9+R()*1.6,sz:.9+R()*1.2}):rt<.76?I.push({p:"pothole",x:L,z:W,rot:R()*6.28,sx:.8+R()*.6,sz:.8+R()*.6}):rt<.86&&I.push({p:"grassTuft",x:F.x+Math.sign(pt||1)*(F.halfWidth-.4),z:W,rot:R()*6.28,sx:1+R(),sz:1+R()})}else{const rt=R(),pt=(R()*2-1)*(F.halfWidth*.8);rt<.45?I.push({p:"stones",x:F.x+pt,z:W,rot:R()*6.28,sx:.8+R()*.6,sz:.8+R()*.6}):rt<.75&&I.push({p:"grassTuft",x:F.x+pt,z:W,rot:R()*6.28,sx:.8+R(),sz:.8+R()})}}for(let W=Math.ceil($/7)*7;W<$+Se;W+=7){const F=A(W);F.asphalt>.7&&gn(r,"dash",W)>.25&&I.push({p:"dash",x:F.x,z:W,rot:w(W),sx:1,sz:1})}const Ht=R()<.25?0:R()<.75?1:2;for(let W=0;W<Ht;W++){const F=$+4+R()*(Se-8);if(F<25)continue;const ht=R()<.5?-1:1,pt=C(F)+.8+R()*9,L=_(F)+ht*pt,J=b(F);if(J.w>.3&&ht===J.side&&pt>J.shore-2||!Rt(L,F,1.3)||ct(F,18))continue;const it=R()<.72?"crate":"locker";Ut.push({id:`${U}:${W}`,type:it,x:L,z:F,rot:w(F)+(R()-.5)*.6}),Vt.push({x:L,z:F,r:1.3})}const yt=[{z:0,depot:!0},...V];for(const W of yt){if(Math.floor(W.z/Se)!==U)continue;const F=_(W.z),ht=w(W.z),rt=Math.cos(ht),pt=Math.sin(ht),L=(gt,at)=>({x:F+gt*rt+at*pt,z:W.z-(-gt*pt+at*rt)}),J=(gt,at,st,wt)=>{const Ot=L(gt,at);Tt.push({shape:"b",x:Ot.x,z:Ot.z,hw:st,hd:wt,rot:ht,p:"structure"})},it=(gt,at,st)=>{const wt=L(gt,at);Tt.push({shape:"c",x:wt.x,z:wt.z,r:st,p:"structure"})};W.depot?(J(9.6,3,3.5,4.4),J(-7.6,3,1.3,2.8),it(-6.2,-4,.45),it(6.2,-4,.45)):(J(9.5,1,2.5,2.5),J(-8.2,.2,.8,2.8),it(-6.2,-5.5,.4),it(6.2,-5.5,.4),W.final&&it(-10,-9,2.6))}return{ci:U,z0:$,items:ut,obstacles:Tt,containers:Ut,decals:I,veins:lt}}function Dt(U,R){const $=Math.floor(U/Se),ut=Math.floor(R/Se),Tt=[];for(let Ut=$;Ut<=ut;Ut++)Tt.push(xt(Ut));return Tt}function ne(U,R=6){const $=Math.floor((U-R-8)/Se),ut=Math.floor((U+R+8)/Se);if($===ut)return xt($).obstacles;const Tt=[];for(let Ut=$;Ut<=ut;Ut++){const I=xt(Ut).obstacles;for(let Vt=0;Vt<I.length;Vt++)Tt.push(I[Vt])}return Tt}function re(U,R){const $=[];for(const ut of Dt(U,R))for(const Tt of ut.containers)$.push(Tt);return $}function oe(U){const R=parseInt(U.split(":")[0],10);return xt(R).containers.find($=>$.id===U)||null}function ft(U){return un(Math.floor(U/n),0,e.legs-1)}return{seed:r,mode:e,legLength:n,totalLength:s,segments:c,refuges:V,biomeAt:x,biomeWeight:m,dominantBiome:v,legBiomes:g,roadX:_,roadDir:M,roadYaw:w,roadY:T,roadInfo:A,clearHalf:C,seaInfo:b,height:Y,lateralBounds:q,corruption:Z,chunk:xt,chunksAround:Dt,obstaclesNear:ne,containersNear:re,containerById:oe,legAt:ft,nearRefuge:ct}}function xc(i,t,e,n){if(i.shape==="c"){const M=t-i.x,w=e-i.z,T=i.r+n,A=M*M+w*w;if(A>=T*T)return null;const C=Math.sqrt(A)||1e-4,b=T-C;return[M/C*b,w/C*b]}const s=Math.cos(i.rot),r=Math.sin(i.rot),o=t-i.x,a=e-i.z,c=o*s+a*r,l=-o*r+a*s,f=un(c,-i.hw,i.hw),u=un(l,-i.hd,i.hd),d=c-f,h=l-u,p=d*d+h*h;if(p>=n*n)return null;let x,g,m;if(p<1e-8){const M=i.hw-Math.abs(c),w=i.hd-Math.abs(l);M<w?(x=Math.sign(c)||1,g=0,m=M+n):(x=0,g=Math.sign(l)||1,m=w+n)}else{const M=Math.sqrt(p);x=d/M,g=h/M,m=n-M}const v=x*s-g*r,_=x*r+g*s;return[v*m,_*m]}const Mh=new fe,yh=new ui,bh=new En,uo=new Ft;function H(i,t,e=[0,0,0],n=[0,0,0],s=[1,1,1],r={}){return{geo:i,color:t,pos:e,rot:n,scl:s,tint:r.tint?1:0,glow:r.glow||0,jitter:r.jitter||0}}function Et(i){const t=[];let e=0;for(const f of i){let u=f.geo.index?f.geo.toNonIndexed():f.geo.clone();u.deleteAttribute("uv"),bh.set(f.rot[0],f.rot[1],f.rot[2]),yh.setFromEuler(bh),Mh.compose(new z(...f.pos),yh,new z(...f.scl)),u.applyMatrix4(Mh);const d=u.attributes.position.count;uo.set(f.color);const h=new Float32Array(d*3),p=new Float32Array(d),x=new Float32Array(d),g=u.attributes.position.array;for(let m=0;m<d;m++){let v=1;if(f.jitter){const _=Math.sin(g[m*3]*12.9898+g[m*3+1]*78.233+g[m*3+2]*37.719)*43758.5453;v=1+(_-Math.floor(_)-.5)*f.jitter}h[m*3]=uo.r*v,h[m*3+1]=uo.g*v,h[m*3+2]=uo.b*v,p[m]=f.tint,x[m]=f.glow}u.setAttribute("color",new Ve(h,3)),u.setAttribute("tintMask",new Ve(p,1)),u.setAttribute("glowMask",new Ve(x,1)),t.push(u),e+=d}const n=new Fe,s=new Float32Array(e*3),r=new Float32Array(e*3),o=new Float32Array(e*3),a=new Float32Array(e),c=new Float32Array(e);let l=0;for(const f of t){const u=f.attributes.position.count;s.set(f.attributes.position.array,l*3),r.set(f.attributes.normal.array,l*3),o.set(f.attributes.color.array,l*3),a.set(f.attributes.tintMask.array,l),c.set(f.attributes.glowMask.array,l),l+=u,f.dispose()}return n.setAttribute("position",new Ve(s,3)),n.setAttribute("normal",new Ve(r,3)),n.setAttribute("color",new Ve(o,3)),n.setAttribute("tintMask",new Ve(a,1)),n.setAttribute("glowMask",new Ve(c,1)),n.computeBoundingSphere(),n.computeBoundingBox(),n}function Ji(i={}){const t=new Eo({vertexColors:!0,flatShading:!0,...i});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float tintMask;
attribute float glowMask;
varying float vGlow;`).replace("#include <color_vertex>",`
#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
  vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
  vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
  vColor.xyz *= mix( vec3( 1.0 ), instanceColor.xyz, tintMask );
#endif
vGlow = glowMask;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying float vGlow;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * vGlow;`)},t.customProgramCacheKey=()=>"kuru-lit",t}const k={box:new Ii(1,1,1),cyl6:new Bn(.5,.5,1,6),cyl8:new Bn(.5,.5,1,8),cyl5:new Bn(.5,.5,1,5),cone6:new bi(.5,1,6),cone7:new bi(.5,1,7),cone5:new bi(.5,1,5),cone4:new bi(.5,1,4),ico0:new Er(.5,0),ico1:new Er(.5,1),dodec:new Uc(.5,0),oct:new Bs(.5,0),tetra:new Oc(.5,0),prism:new Bn(.5,.5,1,3),sphere:new Ai(.5,8,6),disc:new Gs(.5,14).rotateX(-Math.PI/2),torus:new ur(.5,.12,5,10),torusLow:new ur(.5,.12,3,7),arc:new ur(1,.1,3,7,Math.PI),quad:new Ln(1,1)},B=(i,t,e,n,s,r,o,a={})=>H(k.box,i,[t,e,n],a.r||[0,0,0],[s,r,o],a),Tr=(i,t,e,n,s,r={})=>H(k.prism,i,[r.x||0,t+.25*(s/.75),r.z||0],[-Math.PI/2,0,Math.PI/2],[n/.866,e,s/.75],r),nt={window:2306637,windowLit:16765803,frame:15327956,moss:5221948,mossDark:3115573,ivy:4038202,concrete:12169894,concreteDark:9209468,trunk:8015662,trunkDark:5913122,leaf:4173370,leafDark:2787893,leafLight:8311357,pine:2067018,pineDark:1469243,snow:16055295,rock:10131343,rockDark:7828590,redRock:13658174,redRock2:14846542,wood:11039807,woodDark:8016432,metal:7306117,tire:2763310,glass:2832981,hay:15319630,cactus:4169290,white:16777215,red:14826299,orange:16747050,yellow:16765498,rust:11033138};function Gc(i,t,e,n,s,r,o,a=!0,c=!0,l=.25){const f=(e-o-1)/s;for(let u=0;u<s;u++){for(let d=0;d<r;d++){const h=-t/2+(d+.5)*(t/r),p=o+(u+.5)*f,x=(u*7+d*13)%9===0,g=x?nt.windowLit:nt.window,m=x?.6:0;a&&i.push(H(k.quad,g,[h,p,n/2+.03],[0,0,0],[t/r*.5,f*.55,1],{glow:m}))}if(c){const d=Math.max(1,Math.round(r*n/t));for(let h=0;h<d;h++){const p=-n/2+(h+.5)*(n/d),x=o+(u+.5)*f;i.push(H(k.quad,nt.window,[t/2+.03,x,p],[0,Math.PI/2,0],[n/d*.5,f*.55,1])),i.push(H(k.quad,nt.window,[-t/2-.03,x,p],[0,-Math.PI/2,0],[n/d*.5,f*.55,1]))}}}}function k1(){const n=[B(15985369,0,6.5,0,9,13,8,{tint:1,jitter:.06})];return n.push(B(nt.concreteDark,0,.6,0,9+.3,1.2,8+.3)),Gc(n,9,13,8,4,4,1.4),n.push(B(nt.frame,0,13+.15,0,9+.4,.3,8+.4)),n.push(B(nt.moss,-1.5,13+.45,.6,5,.4,5.4,{jitter:.15})),n.push(B(nt.mossDark,2.6,13+.7,-2,2.2,.9,2.2)),n.push(B(nt.metal,2.8,13+1.1,2.2,1.6,1.6,1.6)),n.push(B(nt.ivy,9/2+.1,13*.45,2.6,.25,13*.85,1.4,{jitter:.2})),n.push(B(nt.ivy,-9/2-.1,13*.35,-1.5,.25,13*.6,1.8,{jitter:.2})),n.push(B(nt.leafLight,-2.8,13*.75,8/2+.25,2.2,1.6,.5,{jitter:.2})),n.push(B(3877669,0,1.4,8/2+.05,1.6,2.6,.12)),Et(n)}function O1(){const n=[B(16180166,0,3.5,0,10,7,7,{tint:1,jitter:.05})];n.push(B(nt.glass,0,1.7,7/2+.04,10*.75,2.4,.1)),n.push(B(nt.frame,0,3.15,7/2+.06,10*.8,.25,.14));for(let s=0;s<5;s++)n.push(B(s%2?nt.white:14828860,-10*.4+(s+.5)*(10*.8/5),3.55,7/2+.75,10*.8/5,.14,1.6,{r:[.35,0,0]}));return n.push(B(3046865,0,4.4,7/2+.1,4.2,.9,.14)),n.push(B(nt.yellow,0,4.4,7/2+.18,3.4,.4,.06,{glow:.5})),Gc(n,10,7,7,1,4,4.7,!0,!1),n.push(B(nt.frame,0,7+.15,0,10+.3,.3,7+.3)),n.push(B(nt.moss,1,7+.35,-.5,6,.3,4.5,{jitter:.15})),n.push(H(k.ico0,nt.leaf,[-3.2,8,-1.5],[0,0,0],[2.4,2,2.4],{tint:0})),Et(n)}function B1(){const n=[B(14280431,0,9,0,7,18,7,{tint:1,jitter:.05})];n.push(B(14280431,-1.6,18+1.2,-1.2,3.6,2.4,4.4,{tint:1})),n.push(B(14280431,2.1,18+.6,1.8,2.6,1.2,3.2,{tint:1})),Gc(n,7,18,7,6,3,1.2);for(let s=0;s<6;s++)n.push(B(nt.frame,0,1.2+s*2.8,0,7+.25,.18,7+.25));return n.push(B(nt.ivy,7/2+.12,18*.4,-1.8,.25,18*.8,1.6,{jitter:.2})),n.push(B(nt.ivy,.5,18*.3,7/2+.12,1.4,18*.6,.25,{jitter:.2})),n.push(H(k.ico0,nt.leafLight,[-1.6,18+2.8,-1.2],[0,.5,0],[2.8,2.2,2.8])),Et(n)}function Sh(i=!1){const t=i?5.2:4.4,e=i?2.2:2,n=[B(14174778,0,.75,0,e,.75,t,{tint:1,jitter:.05})];i?n.push(B(14174778,0,1.75,-.4,e-.05,1.3,t*.78,{tint:1})):n.push(B(14174778,0,1.4,-.2,e-.2,.6,t*.5,{tint:1})),n.push(B(nt.glass,0,i?1.9:1.42,i?t*.37-.4:t*.25-.2+.05,e-.3,i?.7:.48,.06)),n.push(B(nt.glass,e/2,i?1.9:1.42,-.3,.06,i?.6:.42,t*(i?.6:.42))),n.push(B(nt.glass,-e/2,i?1.9:1.42,-.3,.06,i?.6:.42,t*(i?.6:.42)));for(const s of[-1,1])for(const r of[-1,1])n.push(H(k.cyl8,nt.tire,[s*(e/2-.1),.38,r*(t/2-.85)],[0,0,Math.PI/2],[.75,.3,.75]));return n.push(B(16771496,.6,.85,t/2+.02,.4,.2,.06,{glow:.3})),n.push(B(16771496,-.6,.85,t/2+.02,.4,.2,.06,{glow:.3})),n.push(B(nt.rust,.4,1.13,.9,.9,.04,1.2)),n.push(B(nt.moss,-.2,i?2.43:1.73,-.6,1.2,.12,1.4,{jitter:.2})),Et(n)}function H1(){return Et([H(k.cyl6,3950160,[0,2.6,0],[0,0,0],[.18,5.2,.18]),B(3950160,.6,5.1,0,1.3,.12,.12),B(3950160,1.2,4.95,0,.6,.25,.4),B(16773296,1.2,4.8,0,.45,.08,.3,{glow:.9}),H(k.cyl6,3950160,[0,.2,0],[0,0,0],[.45,.4,.45])])}function G1(){return Et([B(14209734,0,.4,0,2.6,.8,.55,{jitter:.08}),B(14209734,0,.9,0,2.6,.35,.3),B(nt.red,-.8,.6,.29,.5,.3,.02),B(nt.red,.2,.6,.29,.5,.3,.02),B(nt.red,1,.6,.29,.4,.3,.02)])}function V1(){return Et([B(3115610,0,.7,0,2,1.3,1.3,{tint:1}),B(2322506,0,1.42,-.1,2.05,.14,1.4,{r:[-.2,0,0]}),B(nt.tire,-.8,.12,.5,.25,.25,.25),B(nt.tire,.8,.12,.5,.25,.25,.25)])}function W1(){return Et([B(3355443,0,.04,0,.6,.08,.6),H(k.cone6,nt.orange,[0,.45,0],[0,0,0],[.45,.8,.45]),H(k.cyl6,nt.white,[0,.45,0],[0,0,0],[.3,.14,.3])])}function X1(){return Et([H(k.cyl6,8227477,[0,1.3,0],[0,0,0],[.1,2.6,.1]),B(2850272,0,2.5,.06,1.2,.8,.06),B(nt.white,0,2.5,.1,.9,.12,.02),B(nt.rust,.3,2.3,.1,.3,.2,.02)])}function q1(){return Et([H(k.dodec,nt.concrete,[0,.3,0],[.3,.5,0],[1.4,.7,1.2],{jitter:.15}),B(nt.concreteDark,.6,.25,.4,.8,.5,.6,{r:[.2,.6,.3]}),B(10705468,-.6,.2,-.3,.7,.4,.5,{r:[0,.3,.2]}),H(k.cyl6,nt.rust,[.2,.6,-.2],[.9,0,.4],[.08,1.4,.08]),H(k.ico0,nt.leafLight,[-.3,.55,.5],[0,0,0],[.7,.5,.7])])}function Y1(){return Et([B(nt.concrete,0,.35,0,1.6,.7,1.6),B(5913122,0,.72,0,1.4,.06,1.4),H(k.cyl6,nt.trunk,[0,1.8,0],[0,0,0],[.3,2.4,.3]),H(k.ico0,nt.leaf,[0,3.8,0],[0,0,0],[3,2.6,3],{tint:1,jitter:.12}),H(k.ico0,nt.leafLight,[.5,4.6,.3],[0,.5,0],[1.8,1.6,1.8],{tint:1})])}function wh(i=!1){const t=[H(k.cyl6,nt.trunkDark,[0,1,0],[0,0,0],[.45,2,.45])];return[[3.6,3,2.4],[2.9,2.7,4.2],[2.1,2.4,5.9],[1.2,1.8,7.3]].forEach(([n,s,r],o)=>{t.push(H(k.cone7,o%2?nt.pine:nt.pineDark,[0,r,0],[0,o*.4,0],[n,s,n],{tint:1,jitter:.1})),i&&t.push(H(k.cone7,nt.snow,[0,r+s*.22,0],[0,o*.4,0],[n*.62,s*.55,n*.62]))}),Et(t)}function $1(){return Et([H(k.cyl6,nt.trunk,[0,1.5,0],[0,0,0],[.55,3,.55]),H(k.cyl5,nt.trunk,[.6,3,0],[0,0,-.7],[.25,1.6,.25]),H(k.ico0,nt.leaf,[0,4.6,0],[0,0,0],[4.2,3.4,4.2],{tint:1,jitter:.1}),H(k.ico0,nt.leafDark,[1.5,4,.6],[.4,0,0],[2.8,2.4,2.8],{tint:1,jitter:.1}),H(k.ico0,nt.leafLight,[-1.2,5.5,-.5],[0,.7,0],[2.6,2.2,2.6],{tint:1,jitter:.1})])}function j1(){return Et([H(k.cyl6,nt.trunk,[0,1.3,0],[0,0,0],[.4,2.6,.4]),H(k.ico1,nt.leafLight,[0,4,0],[0,0,0],[3.6,3.8,3.6],{tint:1,jitter:.12})])}function K1(){const i=[];let t=0;for(let n=0;n<6;n++)t=Math.pow(n/6,2)*1.2,i.push(H(k.cyl6,n%2?11565637:10119224,[t,.6+n*1.1,0],[0,0,-.12-n*.04],[.42-n*.03,1.15,.42-n*.03]));const e=[1.3,7,0];for(let n=0;n<8;n++){const s=n/8*Math.PI*2+n%2*.2;i.push(H(k.cone4,n%2?3124810:4571210,[e[0]+Math.cos(s)*1.55,e[1]-.55,Math.sin(s)*1.55],[0,-s,-Math.PI/2-.42],[1,3.3,.16],{tint:1}))}return i.push(H(k.ico0,7031338,[e[0],e[1]-.2,0],[0,0,0],[.8,.6,.8])),Et(i)}function Z1(){return Et([H(k.cyl5,9075304,[0,1.6,0],[0,0,.05],[.4,3.2,.4]),H(k.cyl5,9075304,[.6,3,0],[0,0,-.8],[.18,1.6,.18]),H(k.cyl5,9075304,[-.5,3.4,.2],[.3,0,.7],[.15,1.4,.15]),H(k.cyl5,9075304,[.1,3.9,-.4],[-.6,0,0],[.12,1.2,.12])])}function J1(){return Et([H(k.dodec,nt.rock,[0,.55,0],[.2,.4,.1],[2.2,1.4,1.9],{tint:1,jitter:.12}),H(k.dodec,nt.rockDark,[.8,.35,.5],[.5,.1,.3],[1,.8,1],{tint:1,jitter:.1})])}function Q1(){return Et([H(k.dodec,nt.rock,[0,1.2,0],[.3,.2,.1],[3.6,2.6,3.2],{tint:1,jitter:.12}),H(k.dodec,nt.rockDark,[1.5,.6,.9],[.1,.8,.3],[1.8,1.3,1.6],{tint:1,jitter:.1}),H(k.dodec,nt.rock,[-1.4,.5,-.8],[.6,.1,.3],[1.4,1,1.4],{tint:1,jitter:.1}),H(k.ico0,nt.moss,[.2,2.4,.3],[0,0,0],[1.8,.4,1.6])])}function t_(){const i=[],t=[nt.redRock,nt.redRock2,13130298,15769696,nt.redRock];let e=0;for(let n=0;n<5;n++){const s=2+n%2*1.2,r=4.6-n*.55;i.push(H(k.cyl6,t[n],[.2*(n%2),e+s/2,0],[0,n*.5,0],[r,s,r*.9],{tint:1,jitter:.08})),e+=s}return i.push(H(k.ico0,nt.leafLight,[0,e+.3,0],[0,0,0],[2.2,.8,2])),Et(i)}function e_(){const i=[],t=[13791294,15242318,12868146,15904870];let e=0;for(let n=0;n<4;n++){const s=3+n%2*2,r=16-n*1.6;i.push(H(k.cyl6,t[n],[0,e+s/2,0],[0,n*.3,0],[r,s,r*.8],{tint:1,jitter:.06})),e+=s}return Et(i)}function n_(){return Et([H(k.cone6,9411240,[0,14,0],[0,0,0],[30,28,26],{tint:1,jitter:.1}),H(k.cone6,nt.snow,[0,22.5,0],[0,0,0],[13.5,11.2,11.8]),H(k.cone5,8029846,[9,8,4],[0,.5,0],[16,16,14],{tint:1,jitter:.1}),H(k.cone5,nt.snow,[9,13,4],[0,.5,0],[6.5,6,5.7])])}function i_(){return Et([B(16048824,0,3.6/2,0,6.8,3.6,5.8,{tint:1,jitter:.05}),Tr(12600622,3.6,6.8+.7,5.8+.8,2.6,{jitter:.08}),B(5913122,0,1,5.8/2+.05,1.1,2,.1),B(nt.window,-2,2,5.8/2+.05,1,.9,.1),B(nt.window,2,2,5.8/2+.05,1,.9,.1),B(nt.window,6.8/2+.05,2,0,.1,.9,1),B(9202258,1.8,3.6+2.2,-.8,.7,1.6,.7),B(nt.moss,-1.2,3.6+1.25,1.4,2.2,.25,1.4,{r:[.72,0,0]}),H(k.ico0,nt.leaf,[6.8/2+.4,.8,5.8/2-.5],[0,0,0],[1.6,1.4,1.6],{tint:0})])}function s_(){return Et([B(12728880,0,4.6/2,0,8.8,4.6,6.8,{tint:1,jitter:.05}),Tr(4864566,4.6,8.8+.6,6.8+.8,3),B(nt.white,0,1.6,6.8/2+.05,2.8,3.2,.1),B(12728880,0,1.6,6.8/2+.1,2.4,2.8,.05,{tint:1}),B(nt.white,0,1.6,6.8/2+.14,3.5,.18,.04,{r:[0,0,.85]}),B(nt.white,0,1.6,6.8/2+.14,3.5,.18,.04,{r:[0,0,-.85]})])}function r_(){return Et([H(k.cyl8,10130570,[0,.5,0],[0,0,0],[1.8,1,1.8],{jitter:.1}),H(k.cyl8,2771562,[0,.98,0],[0,0,0],[1.4,.05,1.4]),B(nt.woodDark,-.8,1.6,0,.15,2.2,.15),B(nt.woodDark,.8,1.6,0,.15,2.2,.15),Tr(11553328,2.7,2.2,1.6,.8)])}function o_(){return Et([H(k.cyl8,nt.hay,[0,.7,0],[0,0,0],[2.2,1.4,2.2],{jitter:.1}),H(k.cone7,15781984,[0,1.8,0],[0,0,0],[2.3,.9,2.3],{jitter:.1})])}function a_(){return Et([B(nt.wood,0,.8,0,1.4,.5,2.4,{jitter:.1}),H(k.cyl8,nt.woodDark,[.8,.5,.3],[0,0,Math.PI/2],[1,.15,1]),H(k.cyl8,nt.woodDark,[-.8,.5,.3],[0,0,Math.PI/2],[1,.15,1]),B(nt.woodDark,0,.6,1.8,.1,.1,1.6),H(k.cyl8,nt.hay,[0,1.2,-.2],[0,0,Math.PI/2],[.7,1.1,.7])])}function c_(){const i=[];for(let t=-2;t<=2;t++)i.push(B(nt.wood,t,.55,0,.14,1.1,.14));return i.push(B(nt.wood,0,.8,0,4.2,.12,.08,{jitter:.1})),i.push(B(nt.wood,0,.45,0,4.2,.12,.08,{jitter:.1})),Et(i)}function l_(){return Et([H(k.cyl6,nt.cactus,[0,1.6,0],[0,0,0],[.6,3.2,.6],{tint:1}),H(k.ico0,nt.cactus,[0,3.2,0],[0,0,0],[.6,.5,.6],{tint:1}),H(k.cyl6,nt.cactus,[.55,1.6,0],[0,0,Math.PI/2],[.4,.7,.4],{tint:1}),H(k.cyl6,nt.cactus,[.85,2.2,0],[0,0,0],[.4,1.2,.4],{tint:1}),H(k.cyl6,nt.cactus,[-.5,2.1,0],[0,0,Math.PI/2],[.36,.6,.36],{tint:1}),H(k.cyl6,nt.cactus,[-.75,2.6,0],[0,0,0],[.36,1,.36],{tint:1}),H(k.ico0,16736160,[0,3.5,0],[0,0,0],[.3,.3,.3],{glow:.3})])}function h_(){return Et([B(15921906,0,.55,0,1.9,.9,5,{tint:1}),B(3046865,0,.3,0,1.95,.35,5.05),H(k.cone4,15921906,[0,.55,2.9],[Math.PI/2,Math.PI/4,0],[1.35,1,.9],{tint:1}),B(nt.wood,0,1,-.5,1.6,.1,.5),H(k.cyl6,nt.woodDark,[0,1.6,.5],[.3,0,.1],[.12,2.4,.12])])}function u_(){return Et([H(k.cyl8,nt.trunk,[0,.35,0],[0,0,Math.PI/2],[.7,3.6,.7]),H(k.cyl8,14200954,[1.81,.35,0],[0,0,Math.PI/2],[.6,.02,.6]),H(k.ico0,nt.moss,[-.5,.7,0],[0,0,0],[1.2,.3,.6])])}function f_(){const i=[];for(let t=0;t<6;t++)i.push(H(k.cyl6,t%2?9067058:8015402,[0,.3+t*.55,0],[0,0,Math.PI/2],[.55,6,.55]));return i.push(B(8015402,0,1.7,0,5.6,3.3,4.6)),i.push(Tr(5921382,3.35,6.4,5.4,2.2)),i.push(Tr(nt.snow,3.6,6.5,4.8,2)),i.push(B(nt.windowLit,1.4,1.9,2.33,.9,.8,.06,{glow:.7})),i.push(B(4861466,-1,1.1,2.33,1,2,.06)),Et(i)}function d_(){return Et([H(k.ico0,nt.leaf,[0,.5,0],[0,0,0],[1.4,1.1,1.4],{tint:1,jitter:.12}),H(k.ico0,nt.leafLight,[.5,.45,.3],[0,.5,0],[.9,.8,.9],{tint:1,jitter:.12}),H(k.ico0,nt.leafDark,[-.45,.4,-.2],[0,.2,0],[.9,.7,.9],{tint:1})])}function p_(){const i=[];for(let t=0;t<6;t++){const e=t/6*Math.PI*2;i.push(B(t%2?4177738:3121216,Math.cos(e)*.45,.3,Math.sin(e)*.45,1,.06,.28,{r:[0,-e,.5],tint:1}))}return Et(i)}function m_(){const i=[],t=[16736160,16765498,16777215,11758591,16742970];for(let e=0;e<7;e++){const n=e*2.39,s=.25+e%3*.25,r=Math.cos(n)*s,o=Math.sin(n)*s;i.push(B(3841594,r,.2,o,.05,.4,.05)),i.push(H(k.oct,t[e%5],[r,.45,o],[0,n,0],[.24,.18,.24],{tint:1,glow:.15}))}return i.push(H(k.ico0,5226298,[0,.1,0],[0,0,0],[1.1,.25,1.1])),Et(i)}function g_(){const i=[];for(let t=0;t<5;t++){const e=t*1.3;i.push(H(k.cone4,t%2?6278970:4173370,[Math.cos(e)*.2,.3,Math.sin(e)*.2],[Math.cos(e)*.25,0,Math.sin(e)*.25],[.18,.7,.18],{tint:1}))}return Et(i)}function x_(){return Et([H(k.cyl6,15919832,[0,.25,0],[0,0,0],[.18,.5,.18]),H(k.cone7,15217967,[0,.58,0],[0,0,0],[.7,.35,.7],{tint:1}),B(nt.white,.12,.66,.1,.08,.04,.08),B(nt.white,-.12,.64,-.05,.08,.04,.08),H(k.cyl6,15919832,[.35,.15,.2],[0,0,0],[.12,.3,.12]),H(k.cone7,15217967,[.35,.36,.2],[0,0,0],[.45,.22,.45],{tint:1})])}function __(){return Et([H(k.ico0,11578016,[0,.12,0],[.3,.2,0],[.4,.25,.35],{tint:1}),H(k.ico0,10130570,[.4,.1,.2],[.1,.6,0],[.3,.2,.3],{tint:1}),H(k.ico0,12630704,[-.3,.08,.3],[.5,.1,0],[.25,.16,.25],{tint:1})])}function v_(){return Et([H(k.cyl5,15919830,[0,.1,0],[0,0,Math.PI/2],[.12,1.4,.12]),...[-.4,-.15,.1,.35].map(i=>H(k.torusLow,15919830,[i,.25,0],[0,Math.PI/2,0],[.5,.5,.8])),H(k.dodec,15919830,[.9,.18,0],[0,.3,0],[.4,.32,.36])])}function M_(){return Et([H(k.cyl5,13482138,[0,.15,0],[0,.4,Math.PI/2],[.25,2.2,.25]),H(k.cyl5,12560520,[.4,.15,.4],[0,-.6,Math.PI/2],[.18,1.2,.18])])}function y_(){return Et([H(k.ico0,9416250,[0,.35,0],[0,0,0],[1.1,.7,1.1],{tint:1,jitter:.15}),H(k.ico0,10928202,[.35,.3,.2],[0,.6,0],[.7,.5,.7],{tint:1})])}function b_(){return Et([H(k.cyl6,nt.trunk,[0,.3,0],[0,0,0],[.8,.6,.8]),H(k.cyl6,14200954,[0,.61,0],[0,0,0],[.7,.02,.7])])}function S_(){const n=[B(15918799,0,2.1,0,6.4,4.2,5.6,{tint:1,jitter:.05})];n.push(B(nt.concreteDark,0,.3,0,6.4+.2,.6,5.6+.2)),n.push(B(9279136,-.9,1.45,5.6/2+.05,3.2,2.5,.1));for(let s=0;s<7;s++)n.push(B(7305346,-.9,.35+s*.36,5.6/2+.11,3.2,.05,.04));n.push(B(nt.glass,2.05,1.6,5.6/2+.05,1.5,1.6,.1));for(let s=0;s<4;s++)n.push(B(s%2?nt.white:3119722,-6.4*.4+(s+.5)*(6.4*.8/4),3.05,5.6/2+.6,6.4*.8/4,.12,1.3,{r:[.4,0,0]}));return n.push(B(16742970,0,3.75,5.6/2+.08,3.6,.6,.1)),n.push(B(nt.white,0,3.75,5.6/2+.14,2.6,.22,.04,{glow:.4})),n.push(B(nt.frame,0,4.2+.12,0,6.4+.3,.24,5.6+.3)),n.push(B(nt.metal,1.6,4.2+.6,-1,1.4,1,1.2)),n.push(B(nt.moss,-1.4,4.2+.3,.4,2.8,.25,3,{jitter:.15})),n.push(B(nt.ivy,-6.4/2-.1,4.2*.45,1.2,.2,4.2*.8,1.6,{jitter:.2})),Et(n)}function w_(){return Et([B(4864562,0,.55,0,2,.7,4.3,{jitter:.12}),B(3812906,0,1.12,-.25,2-.25,.45,4.3*.48,{r:[.05,0,.06],jitter:.1}),B(9062948,.5,.92,1,.8,.04,1.1),B(10115626,-.6,.62,-1.3,.04,.4,1,{r:[0,0,0]}),B(1381658,0,1.15,.36,2-.4,.34,.06),B(1381658,2/2-.1,1.12,-.25,.04,.3,4.3*.38),B(1381658,-2/2+.1,1.12,-.25,.04,.3,4.3*.38),...[-1,1].flatMap(e=>[-1,1].map(n=>H(k.cyl8,5591114,[e*(2/2-.15),.22,n*(4.3/2-.85)],[0,0,Math.PI/2],[.48,.18,.48]))),B(nt.moss,-.1,1.37,-.4,1,.1,1,{jitter:.2}),H(k.ico0,nt.leafLight,[.9,.35,-1.9],[0,0,0],[.8,.6,.8])])}function E_(){const n=[B(16053492,0,1.85,0,2.6,3,10,{tint:1,jitter:.05})];n.push(B(2763310,0,.32,0,2.6-.1,.25,10-.3));for(let s=0;s<7;s++){const r=-3.8+s*1.25;n.push(B(s===2||s===5?1185310:nt.glass,2.6/2+.03,2.35,r,.06,.9,1)),n.push(B(s===3?1185310:nt.glass,-2.6/2-.03,2.35,r,.06,.9,1))}n.push(B(nt.glass,0,2.2,10/2+.03,2.6-.4,1.3,.06)),n.push(B(2763310,0,3.25,10/2+.05,2.6-.6,.35,.06)),n.push(B(nt.white,0,1.35,10/2+.04,2.6,.12,.04));for(const s of[-1,1])for(const r of[-1,1])n.push(H(k.cyl8,nt.tire,[r*(2.6/2-.15),.38,s*(10/2-1.6)],[0,0,Math.PI/2],[.8,.3,.8]));return n.push(B(nt.moss,.2,3+.42,-1.5,1.8,.16,4.2,{jitter:.2})),n.push(B(nt.mossDark,-.4,3+.48,2.2,1.2,.2,1.6,{jitter:.2})),n.push(B(nt.rust,1.31,1.2,-2.6,.04,.8,1.8)),Et(n)}function T_(){return Et([H(k.cyl6,6965810,[0,3.6,0],[0,0,.02],[.24,7.2,.24],{jitter:.08}),B(5914154,0,6.7,0,2.2,.16,.16),...[-.9,-.3,.3,.9].map(i=>H(k.cyl6,14673642,[i,6.9,0],[0,0,0],[.09,.22,.09])),H(k.cyl8,8227477,[0,5.4,.28],[0,0,0],[.55,.85,.55]),B(3028032,.05,1.4,.13,.3,.42,.04),B(16765498,.05,1.45,.16,.22,.1,.02,{glow:.2})])}function A_(){return Et([H(k.cyl8,14170412,[0,.4,0],[0,0,0],[.34,.8,.34]),H(k.sphere,14170412,[0,.82,0],[0,0,0],[.34,.24,.34]),H(k.cyl6,15262416,[0,.55,0],[0,0,Math.PI/2],[.14,.6,.14]),H(k.cyl8,9079434,[0,.03,0],[0,0,0],[.5,.06,.5])])}function C_(){const i=[];for(const t of[-2,0,2])i.push(H(k.cyl6,10134443,[t,1,0],[0,0,0],[.1,2,.1]));i.push(B(10134443,0,1.95,0,4.1,.06,.06));for(let t=0;t<9;t++)i.push(B(11976388,-1.8+t*.45,1,0,.025,1.85,.025,{r:[0,0,.18]}));for(const t of[.4,.9,1.45])i.push(B(11976388,0,t,0,4,.025,.025));return i.push(B(10115634,1.05,.85,.04,1.6,1.5,.05,{jitter:.15,r:[0,0,.04]})),i.push(B(8014378,1.05,.85,.07,1.62,.08,.02)),i.push(H(k.ico0,nt.leaf,[-1.4,.35,.2],[0,0,0],[.9,.7,.8],{tint:1})),Et(i)}function R_(){return Et([B(nt.concrete,0,.18,0,1.6,.36,1.2,{r:[.05,.4,.12],jitter:.12}),B(nt.wood,.3,.45,-.2,2.2,.1,.24,{r:[0,.6,.25]}),B(nt.woodDark,-.4,.42,.3,1.8,.1,.22,{r:[.1,-.5,-.2]}),H(k.torusLow,nt.tire,[.8,.14,.6],[Math.PI/2,0,0],[.9,.9,1.4]),H(k.cyl6,nt.rust,[-.6,.5,-.4],[.8,0,.6],[.06,1.6,.06]),B(6262704,-.7,.2,-.6,.6,.4,.5,{r:[0,.3,0]}),H(k.ico0,nt.leafLight,[.1,.4,.7],[0,0,0],[.7,.4,.6])])}function P_(){return Et([H(k.cyl8,15921906,[-.3,.55,0],[0,0,0],[.72,1.1,.72],{tint:1,jitter:.08}),H(k.cyl8,nt.rust,[-.3,.75,0],[0,0,0],[.74,.08,.74]),H(k.cyl8,15921906,[.45,.55,.15],[0,0,0],[.72,1.1,.72],{tint:1,jitter:.08}),H(k.cyl8,nt.rust,[.45,.35,.15],[0,0,0],[.74,.08,.74]),H(k.cyl8,15921906,[.1,.36,-.75],[0,.4,Math.PI/2],[.72,1.1,.72],{tint:1,jitter:.08}),H(k.disc,3813408,[.6,.02,-1.2],[0,0,0],[1.4,1,1])])}const Qe={rock:2761267,rock2:3812680,shard:9059568,shard2:12729568,tip:15913215,thorn:2363948,thorn2:3808322,spike:5909598,pod:16728022};function Vu(i,t,e){const n=Pn(Es(11,t,.35,e),1839140,.04);i.push(n),i.push(Pn(Es(9,t*.55,.35,e+1),3806274,.05))}function Eh(i=!1){const t=i?1.9:1,e=[H(k.dodec,Qe.rock,[0,.12*t,0],[.3,.5,.1],[1.5*t,.5*t,1.3*t],{jitter:.18})];Vu(e,1.7*t,i?3:7),i&&e.push(H(k.dodec,Qe.rock2,[.7,.3,-.5],[.1,.9,.4],[1.6,1,1.4],{jitter:.15}));const n=i?9:6;for(let s=0;s<n;s++){const r=s*2.39996+.3,o=(.12+s%3*.22)*t,a=(i?[3.4,2.4,1.8,2.9,1.3,2.2,1,1.6,.9]:[1.7,1.1,1.4,.8,1.2,.7])[s]*1,c=.2+s%3*.17,l=Math.sin(r)*c,f=-Math.cos(r)*c,u=s%3===0?Qe.shard2:Qe.shard;e.push(H(k.oct,u,[Math.cos(r)*o,a*.42,Math.sin(r)*o],[l,r,f],[.36*t*(a/1.7)**.4,a*1.25,.36*t*(a/1.7)**.4],{glow:.42,tint:1})),s<4&&e.push(H(k.oct,Qe.tip,[Math.cos(r)*o+Math.sin(f)*-.1,a*.9,Math.sin(r)*o],[l,r,f],[.12*t,a*.28,.12*t],{glow:.95}))}for(let s=0;s<5;s++){const r=s*1.26;e.push(B(Qe.pod,Math.cos(r)*.75*t,.03,Math.sin(r)*.75*t,.7*t,.05,.09,{r:[0,-r+.4,0],glow:.9}))}return Et(e)}function Wu(i,t,e=.6){t.forEach(([n,s,r,o],a)=>{i.push(H(k.arc,a%2?Qe.thorn:Qe.thorn2,[n,-.05*o,s],[0,r,0],[o,o*e,o*1.15],{jitter:.15}));for(let c=1;c<4;c+=1){if((c+a)%2)continue;const l=c/4*Math.PI,f=Math.cos(l)*o,u=Math.sin(l)*o*e,d=n+Math.cos(r)*f,h=s-Math.sin(r)*f;i.push(H(k.cone4,Qe.spike,[d,u+.08,h],[0,r,-(Math.PI/2-l)],[.1,.42,.1]))}if(a%2===0){const c=o*(a%4===0?1:-1);i.push(H(k.oct,Qe.pod,[n+Math.cos(r)*c,.22,s-Math.sin(r)*c],[.2,r,.15],[.16,.5,.16],{glow:.9}))}})}function I_(){const i=[];Wu(i,[[0,-1.5,.15,1.75],[.1,-.5,-.1,1.95],[-.1,.5,.2,1.85],[.05,1.5,-.15,1.6],[1.2,.2,1.4,.9],[-1.3,-.4,1.7,.75],[.4,2.1,.9,.7]]);for(let t=0;t<5;t++){const e=t*1.26+.3;i.push(B(Qe.thorn,Math.cos(e)*2.1,.08,Math.sin(e)*2.1,.16,.14,1.8,{r:[0,-e+Math.PI/2,0],jitter:.15}))}return Vu(i,2.4,11),Et(i)}function L_(){const i=[],t=(e,n,s,r)=>{let o=e,a=0;const c=.9;for(let l=0;a<n;l++){const f=Math.sin(l*1.7+r)*s,u=o+Math.sin(f)*c,d=a+Math.cos(f)*c;if(i.push(B(l%2?Qe.thorn:Qe.thorn2,(o+u)/2,(a+d)/2,.1,.2-Math.min(.1,a*.015),c+.1,.16,{r:[0,0,-f]})),l%2===0&&i.push(H(k.cone4,Qe.spike,[(o+u)/2+.12,(a+d)/2,.18],[Math.PI/2,0,0],[.09,.35,.09])),l%3===1){const h=l%2?1:-1;i.push(B(Qe.thorn2,u+h*.45,d-.1,.1,.9,.1,.1,{r:[0,0,h*.5]}))}l%4===2&&i.push(H(k.oct,Qe.pod,[u,d,.24],[0,0,.4],[.18,.42,.16],{glow:.95})),o=u,a=d}};t(-2.2,5.5,.45,.2),t(-.4,7,.35,1.3),t(1.6,6,.4,3.3),t(3,3,.55,4),Wu(i,[[-1.6,.9,0,.9],[.4,1.1,.2,1.1],[2.2,.8,-.2,.8]]);for(let e=0;e<3;e++)i.push(H(k.ico0,Qe.thorn2,[-2.4+e*2.2,.1,.7],[e,e,0],[1.1,.3,.8],{jitter:.15}));return Et(i)}const Th={bldgA:k1,bldgB:O1,bldgC:B1,bldgD:S_,car:()=>Sh(!1),van:()=>Sh(!0),wreck:w_,bus:E_,lamp:H1,barrier:G1,dumpster:V1,cone:W1,sign:X1,rubble:q1,pole:T_,hydrant:A_,fenceMetal:C_,debris:R_,barrel:P_,planterTree:Y1,pine:()=>wh(!1),snowPine:()=>wh(!0),oak:$1,roundTree:j1,palm:K1,deadTree:Z1,rock:J1,boulder:Q1,pillar:t_,mesa:e_,peak:n_,cottage:i_,barn:s_,well:r_,haystack:o_,cart:a_,fence:c_,cactus:l_,boat:h_,log:u_,cabin:f_,bush:d_,fern:p_,flowers:m_,grass:g_,mushroom:x_,pebbles:__,bones:v_,driftwood:M_,shrub:y_,stump:b_,crystal:()=>Eh(!1),crystalBig:()=>Eh(!0),thorns:I_,thornWall:L_};function Pn(i,t,e=0){const n=new Cu(i.map(([r,o])=>new Lt(r,o))),s=new kc(n);return s.rotateX(-Math.PI/2),s.translate(0,e,0),H(s,t)}function Es(i,t,e,n){const s=[];for(let r=0;r<i;r++){const o=r/i*Math.PI*2,a=Math.sin(n*12.3+r*7.1)*.5+.5,c=t*(1-e+a*e*2);s.push([Math.cos(o)*c,Math.sin(o)*c])}return s}const Ah={crack:()=>Et([Pn([[-1,-.04],[-.5,.15],[0,-.1],[.5,.18],[1,0],[1,.08],[.5,.26],[0,0],[-.5,.23],[-1,.04]],3159100),Pn([[0,-.06],[.25,-.5],[.33,-.48],[.08,.02]],3159100)]),patch:()=>Et([Pn([[-.9,-.6],[.9,-.6],[.9,.6],[-.9,.6]],4080461)]),earth:()=>Et([Pn(Es(9,.9,.3,1),9394740),Pn(Es(7,.5,.3,2),7291942,.005),H(k.cone4,6274874,[.3,.12,.2],[0,0,0],[.15,.3,.15]),H(k.cone4,5221946,[-.35,.1,-.2],[0,0,0],[.12,.25,.12])]),pothole:()=>Et([Pn(Es(8,.6,.2,3),6971992),Pn(Es(8,.42,.2,4),2762274,.005)]),dash:()=>Et([Pn([[-.12,-1.3],[.12,-1.3],[.12,1.3],[-.12,1.3]],15917728)]),rut:()=>Et([Pn([[-.8,-1.2],[-.62,-1.3],[-.6,1.2],[-.78,1.3]],9724732),Pn([[.62,-1.3],[.8,-1.2],[.78,1.3],[.6,1.2]],9724732)]),stones:()=>Et([H(k.dodec,12103844,[0,.06,0],[.3,.2,0],[.3,.14,.26]),H(k.dodec,10393226,[.35,.05,.2],[.1,.6,0],[.22,.12,.2]),H(k.dodec,13156532,[-.25,.04,.3],[.5,.1,0],[.18,.1,.18])]),grassTuft:()=>Et([H(k.cone4,7327546,[0,.15,0],[0,0,0],[.16,.35,.16]),H(k.cone4,5221946,[.15,.12,.08],[.3,0,.2],[.14,.3,.14]),H(k.cone4,9428810,[-.12,.12,-.06],[-.3,0,-.2],[.14,.28,.14])])};function D_(){return Et([B(13208130,0,.6,0,1.2,1.2,1.2,{jitter:.08}),B(9067050,0,.6,.61,1.22,.16,.02),B(9067050,0,.6,-.61,1.22,.16,.02),B(9067050,.61,.6,0,.02,.16,1.22),B(9067050,-.61,.6,0,.02,.16,1.22),B(9067050,0,1.21,0,1.22,.02,.16),B(9067050,0,1.21,0,.16,.02,1.22),B(nt.yellow,0,.95,.62,.7,.2,.02,{glow:.3}),B(nt.yellow,.62,.95,0,.02,.2,.7,{glow:.3})])}function z_(){return Et([B(4155976,0,.55,0,1.6,1.1,.9,{jitter:.05}),B(3101240,0,1.15,0,1.7,.12,1),B(16756768,-.45,.55,.46,.35,.8,.02,{glow:.35}),B(16756768,.45,.55,.46,.35,.8,.02,{glow:.35}),B(2236962,0,.75,.47,.25,.18,.04),B(3101240,-.85,.6,0,.1,.25,.4),B(3101240,.85,.6,0,.1,.25,.4)])}const U_={heal:()=>Et([B(15214126,0,0,0,1,.75,.55,{glow:.25}),B(10097176,0,.47,0,.45,.16,.14),B(16777215,0,0,.285,.55,.16,.02,{glow:.6}),B(16777215,0,0,.285,.16,.55,.02,{glow:.6}),B(16777215,0,0,-.285,.55,.16,.02,{glow:.6}),B(16777215,0,0,-.285,.16,.55,.02,{glow:.6})]),shield:()=>Et([H(k.cyl6,3139327,[0,.1,0],[Math.PI/2,0,0],[1,.18,1],{glow:.5}),H(k.cone6,3139327,[0,-.55,0],[Math.PI,0,0],[1,.7,.18],{glow:.5}),H(k.cyl6,16777215,[0,.1,.1],[Math.PI/2,0,0],[.5,.05,.5],{glow:.6}),H(k.cyl6,1019824,[0,.1,-.02],[Math.PI/2,0,0],[1.15,.12,1.15])]),rapid:()=>Et([-.32,0,.32].flatMap((i,t)=>[H(k.cyl8,16751130,[i,-.05+(t===1?.12:0),0],[0,0,0],[.24,.7,.24],{glow:.35}),H(k.cone7,16769162,[i,.45+(t===1?.12:0),0],[0,0,0],[.24,.3,.24],{glow:.5}),H(k.cyl8,11561488,[i,-.42+(t===1?.12:0),0],[0,0,0],[.27,.06,.27])])),power:()=>Et([H(k.cyl8,10108159,[0,0,0],[0,0,0],[.62,1,.62],{glow:.6}),H(k.cyl8,15126783,[0,.25,0],[0,0,0],[.66,.1,.66],{glow:.8}),H(k.cyl8,15126783,[0,-.25,0],[0,0,0],[.66,.1,.66],{glow:.8}),H(k.cyl8,12632264,[0,.58,0],[0,0,0],[.3,.16,.3]),H(k.oct,16777215,[0,0,.32],[0,0,0],[.2,.34,.06],{glow:1})]),evasion:()=>Et([B(16765466,.12,-.3,0,.8,.26,.36,{glow:.4}),B(16765466,-.12,.08,0,.36,.56,.34,{glow:.4}),B(11037184,.12,-.46,0,.84,.08,.4),B(16777215,-.12,.34,0,.4,.08,.38,{glow:.6}),...[1,-1].flatMap(i=>[B(16777215,-.25,.25,i*.42,.55,.06,.5,{r:[i*.5,0,.35],glow:.8}),B(16774336,-.38,.42,i*.62,.42,.05,.42,{r:[i*.7,0,.5],glow:.8}),B(16777215,-.5,.58,i*.78,.3,.05,.32,{r:[i*.9,0,.6],glow:.8})])]),weaponCrate:()=>Et([B(3099194,0,-.25,0,1.3,.5,.8),B(16765498,0,-.25,.41,1.1,.12,.02,{glow:.5}),B(16765498,0,-.25,-.41,1.1,.12,.02,{glow:.5}),B(2044968,0,.02,0,1.36,.06,.86)])},Xu={sidearm:()=>Et([B(3028032,0,0,-.1,.12,.14,.45),B(16765498,0,.06,-.1,.13,.04,.3,{glow:.3}),B(4864554,0,-.12,.08,.1,.22,.12,{r:[.3,0,0]})]),scattergun:()=>Et([B(4861984,0,-.02,.25,.14,.18,.5),H(k.cyl8,3028032,[0,.02,-.25],[Math.PI/2,0,0],[.16,.8,.16]),H(k.cyl8,3028032,[0,-.08,-.2],[Math.PI/2,0,0],[.12,.6,.12]),B(16747050,0,.1,-.1,.06,.04,.5,{glow:.4})]),burst:()=>Et([B(3028032,0,0,-.1,.12,.18,.9),B(3028032,0,-.16,.05,.08,.22,.12),B(5923952,0,.14,-.05,.08,.08,.3),H(k.cyl6,3028032,[0,.02,-.7],[Math.PI/2,0,0],[.06,.4,.06]),B(8256767,0,0,-.1,.14,.04,.6,{glow:.6})]),arc:()=>Et([H(k.cyl8,3813448,[0,.05,-.1],[Math.PI/2,0,0],[.3,.95,.3]),H(k.cyl8,13855743,[0,.05,-.6],[Math.PI/2,0,0],[.34,.12,.34],{glow:.9}),H(k.cyl8,13855743,[0,.05,.1],[Math.PI/2,0,0],[.32,.06,.32],{glow:.6}),B(3028032,0,-.2,.05,.1,.25,.12)])},N_=120,F_=50,_c={urban:5067614,village:7038560,forest:10513468,glade:12159568,coast:12618324,desert:11561530,cliffs:11037256,mountain:10127992},k_={urban:9209468,village:9076848,forest:8025192,glade:9077880,coast:12101776,desert:13597248,cliffs:13132862,mountain:9673382},O_={urban:16777215,village:15788252,forest:14213328,glade:16052454,coast:16773336,desert:16757370,cliffs:16751224,mountain:14542578},vs=new Ft,Ch=new Ft,Rh=new Map;function Ze(i){let t=Rh.get(i);return t||(t=new Ft(i),Rh.set(i,t)),t}function B_(i,t,e,n,s,r){const o=i.biomeAt(e),a=i.seed,c=ue(-.25,.35,Fn(a+77,t/9,e/9)),l=fn[o.a],f=fn[o.b];r.copy(Ze(l.ground)).lerp(Ze(l.ground2),c),o.t>0&&(vs.copy(Ze(f.ground)).lerp(Ze(f.ground2),c),r.lerp(vs,o.t));const u=ue(.15,.65,Fn(a+91,t/23,e/19));r.multiplyScalar(1-u*.16);const d=i.biomeWeight(e,"coast")+i.biomeWeight(e,"desert");if(d>.01){const w=Math.max(0,Math.sin(t*.42+e*.95+Fn(a+93,t/11,e/11)*3.5));r.multiplyScalar(1-d*(u*.14+w*w*.09))}const h=o.t<.5?o.a:o.b,p=i.roadInfo(e),x=Math.abs(t-p.x),g=i.biomeWeight(e,"urban");if(g>.01){const w=1-ue(p.halfWidth+6,p.halfWidth+12,x),T=ue(0,.32,Fn(a+61,t/6,e/6)),A=g*w*(1-T*.9);if(A>.001){const C=.9+.16*gn(Math.floor(t/2.6),Math.floor(e/2.6),17);vs.copy(Ze(12104356)).multiplyScalar(C),r.lerp(vs,A*.9)}}const m=1-ue(p.halfWidth+.4,p.halfWidth+2.6,x);m>0&&(vs.copy(Ze(p.asphalt>.5?13222062:_c[h])).lerp(r,.45),r.lerp(vs,m*.8)),s>.45&&r.lerp(Ze(k_[h]),ue(.45,1.1,s));const v=i.biomeWeight(e,"mountain");if(v>0){const w=ue(.42,.5,Fn(a+55,t/9,e/9))*ue(p.halfWidth+5,p.halfWidth+9,x);r.lerp(Ze(16054527),Math.max(w*.5,ue(5,9,n))*v)}n<Le+.45&&(r.lerp(Ze(16775392),ue(Le+.45,Le+.05,n)*.85),n<Le-.2&&r.lerp(Ze(8380624),ue(Le-.2,Le-1.4,n)));const _=i.corruption(t,e);if(_>.3){const w=ue(.3,.68,_),T=r.r*.3+r.g*.55+r.b*.15,A=Fn(a+47,t/6,e/6)*.5+.5,C=.5+Math.min(.75,T)*.62;Ch.setRGB((.36+A*.14)*C,.15*C,(.5-A*.08)*C),r.lerp(Ch,w*.72);const b=ue(.55,.9,_);b>0&&r.lerp(Ze(2431024),b*(.7+.22*Fn(a+44,t/3.5,e/3.5))),_>.84&&r.lerp(Ze(5904990),ue(.84,1,_)*.55)}const M=.93+gn(Math.round(t*2),Math.round(e*2),5)*.12;return r.multiplyScalar(M),r}function H_(){const i=[];for(let t=-gc;t<-30;t+=4)i.push(t);for(let t=-30;t<30;t+=2)i.push(t);for(let t=30;t<=gc;t+=4)i.push(t);return i}const er=H_(),fo=2;function G_(i,t){const e=t*Se,n=Se/fo,s=er.length,r=new Float32Array((n+1)*s*3),o=new Float32Array((n+1)*s*3),a=new Float32Array((n+3)*s);for(let u=-1;u<=n+1;u++){const d=e+u*fo,h=i.roadX(d);for(let p=0;p<s;p++)a[(u+1)*s+p]=i.height(h+er[p],d)}const c=new Ft;for(let u=0;u<=n;u++){const d=e+u*fo,h=i.roadX(d);for(let p=0;p<s;p++){const x=h+er[p],g=a[(u+1)*s+p],m=(u*s+p)*3;r[m]=x,r[m+1]=g,r[m+2]=-d;const v=Math.max(0,p-1),_=Math.min(s-1,p+1),M=(a[(u+1)*s+_]-a[(u+1)*s+v])/(er[_]-er[v]),w=(a[(u+2)*s+p]-a[u*s+p])/(2*fo),T=Math.hypot(M,w);B_(i,x,d,g,T,c),o[m]=c.r,o[m+1]=c.g,o[m+2]=c.b}}const l=[];for(let u=0;u<n;u++)for(let d=0;d<s-1;d++){const h=u*s+d,p=h+1,x=h+s,g=x+1;(d+u)%2===0?l.push(h,p,x,p,g,x):l.push(h,g,x,h,p,g)}const f=new Fe;return f.setAttribute("position",new Ve(r,3)),f.setAttribute("color",new Ve(o,3)),f.setIndex(l),f.computeVertexNormals(),f.computeBoundingSphere(),f}function V_(i,t){const e=t*Se,n=Se,s=[],r=[],o=[],a=new Ft,c=new Ft,l=i.seed,f=6;for(let d=0;d<=n;d++){const h=e+d,p=i.roadInfo(h),x=i.roadY(h),g=p.biome,m=(1-p.asphalt)*.35,v=p.halfWidth*(1+m*Fn(l+3,h/2.3,1)),_=p.halfWidth*(1+m*Fn(l+4,h/2.1,7)),M=1.4*ue(.4,.9,p.asphalt),w=[-v-M,-v-.05,-v,_,_+.05,_+M],T=[x+.2*(M>.05?1:.2),x+.2*(M>.05?1:.2),x+.06,x+.06,x+.2*(M>.05?1:.2),x+.2*(M>.05?1:.2)];a.copy(Ze(_c[g.a])).lerp(Ze(_c[g.b]),g.t);const A=Fn(l+9,p.x/3,h/3)*.06;a.multiplyScalar(1+A);const C=i.corruption(p.x,h);C>.5&&a.lerp(Ze(2760499),ue(.5,.9,C)*.55),c.copy(Ze(13813940));for(let b=0;b<f;b++){s.push(p.x+w[b],T[b],-h);const y=b===0||b===1||b===4||b===5?c:a;r.push(y.r,y.g,y.b)}}for(let d=0;d<n;d++)for(let h=0;h<f-1;h++){const p=d*f+h,x=p+1,g=p+f,m=g+1;o.push(p,x,g,x,m,g)}const u=new Fe;return u.setAttribute("position",new le(s,3)),u.setAttribute("color",new le(r,3)),u.setIndex(o),u.computeVertexNormals(),u.computeBoundingSphere(),u}function qu(i,t,e){const n=i.roadInfo(e),s=Math.abs(t-n.x);let r=i.height(t,e);if(s<n.halfWidth+1.5){const o=n.asphalt>.4&&s>n.halfWidth?.2:.06;r=Math.max(r,i.roadY(e)+o)}return Math.max(r,Le)}const W_=new Ft(16732120),X_=new Ft(8007392);function q_(i,t){const e=i.chunk(t).veins;if(!e.length)return null;const n=[],s=[],r=[],o=new Ft;for(const c of e){const l=c.pts.length/2;if(l<2)continue;const f=n.length/3;for(let u=0;u<l;u++){const d=c.pts[u*2],h=c.pts[u*2+1],p=Math.max(0,u-1),x=Math.min(l-1,u+1);let g=c.pts[x*2]-c.pts[p*2],m=c.pts[x*2+1]-c.pts[p*2+1];const v=Math.hypot(g,m)||1;g/=v,m/=v;const _=u/(l-1),M=c.w*(1-_*.8)*(.8+.4*Math.sin(u*2.3+d)),w=qu(i,d,h)+.1;n.push(d-m*M,w,-(h+g*M),d+m*M,w,-(h-g*M)),o.copy(W_).lerp(X_,Math.min(1,_*1.3)).multiplyScalar((.5+c.c*.55)*(1-_*.35)),s.push(o.r,o.g,o.b,o.r,o.g,o.b)}for(let u=0;u<l-1;u++){const d=f+u*2;r.push(d,d+1,d+2,d+1,d+3,d+2)}}const a=new Fe;return a.setAttribute("position",new le(n,3)),a.setAttribute("color",new le(s,3)),a.setIndex(r),a.computeBoundingSphere(),a}const Y_=.3,po=24,$_=2.4,Ph=new z,Ih=new z,j_=new fe().makeScale(0,0,0),K_=new Ft(1,1,1),Ar=[[0,.35,0],[0,1.3,0],[0,2.4,0]];for(let i=0;i<4;i++)Ar.push([Math.sin(i*Math.PI/2)*1.8,1,Math.cos(i*Math.PI/2)*1.8]);for(let i=0;i<6;i++)Ar.push([Math.sin(i*Math.PI/3+.5)*4.2,1,Math.cos(i*Math.PI/3+.5)*4.2]);const Lh=Ar.map(()=>new z);function Z_(i,t,e,n){let s=0,r=.97;for(let o=0;o<3;o++){const a=o===0?i.x:o===1?i.y:i.z,c=o===0?t.x:o===1?t.y:t.z,l=o===0?e.x:o===1?e.y:e.z,f=o===0?n.x:o===1?n.y:n.z,u=c-a;if(Math.abs(u)<1e-9){if(a<l||a>f)return!1;continue}let d=(l-a)/u,h=(f-a)/u;if(d>h){const p=d;d=h,h=p}if(d>s&&(s=d),h<r&&(r=h),s>r)return!1}return!0}function J_(){const i=Ji({transparent:!0,depthWrite:!1}),t=i.onBeforeCompile;return i.onBeforeCompile=e=>{t(e),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float ghostAlpha;
varying float vGhostA;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGhostA = ghostAlpha;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying float vGhostA;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a *= vGhostA;`)},i.customProgramCacheKey=()=>"kuru-ghost",i}const Dh={bldgA:60,bldgB:50,bldgC:40,mesa:30,peak:30,default:260,flowers:320,grass:360,bush:300};class Q_{constructor(t,e){this.scene=t,this.world=null,this.terrainMat=new Eo({vertexColors:!0,flatShading:!0}),this.roadMat=new Eo({vertexColors:!0,flatShading:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),this.litMat=Ji(),this.plainMat=this.litMat,this.decalMat=Ji({polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),this.veinTime={value:0},this.veinMat=new xe({vertexColors:!0,side:Oe,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-6}),this.veinMat.onBeforeCompile=a=>{a.uniforms.uTime=this.veinTime,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying float vPulse;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vec4 kw = modelMatrix * vec4(transformed, 1.0);
vPulse = (kw.x - kw.z) * 0.33;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying float vPulse;
uniform float uTime;`).replace("#include <opaque_fragment>",`outgoingLight *= 0.72 + 0.42 * sin(uTime * 2.4 - vPulse);
#include <opaque_fragment>`)},this.veinMat.customProgramCacheKey=()=>"kuru-vein",this.chunks=new Map,this.window=[NaN,NaN],this.ghostMat=J_(),this.ghostDepthMat=new xe({colorWrite:!1}),this.ghostScene=t,this.ghosts={},this.tall=[],this.tallByItem=new Map,this.hiddenRecs=new Set,this.fade=new Map,this.ghostCount=0,this.protoBox={},this.protoMeshes={},this.decalMeshes={},this.group=new hn,t.add(this.group);const n=new fe;for(const a of Object.keys(Th)){const c=Th[a]();c.boundingBox||c.computeBoundingBox(),this.protoBox[a]=c.boundingBox;const l=Dh[a]||Dh.default,f=new yi(c,this.litMat,l);f.instanceMatrix.setUsage(Rs),f.setColorAt(0,new Ft(1,1,1)),f.count=0,f.frustumCulled=!1,f.setMatrixAt(0,n),this.protoMeshes[a]=f,this.group.add(f)}for(const a of Object.keys(Ah)){const c=Ah[a](),l=new yi(c,this.decalMat,400);l.count=0,l.frustumCulled=!1,l.renderOrder=22,this.decalMeshes[a]=l,this.group.add(l)}const s=new Ln(1,1).rotateX(-Math.PI/2);this.shadowMat=new xe({map:e,transparent:!0,depthWrite:!1,opacity:.42,color:1056810}),this.shadows=new yi(s,this.shadowMat,1600),this.shadows.count=0,this.shadows.frustumCulled=!1,this.shadows.renderOrder=30,this.group.add(this.shadows);const r=new Ln(900,900,1,1).rotateX(-Math.PI/2);this.seaMat=new Eo({color:2082518,transparent:!0,opacity:.9}),this.sea=new se(r,this.seaMat),this.sea.position.y=Le,this.sea.renderOrder=23,this.group.add(this.sea);const o=new Ln(1200,1200).rotateX(-Math.PI/2);this.skirtMat=new xe({color:6274879}),this.skirt=new se(o,this.skirtMat),this.skirt.position.y=-6,this.skirt.renderOrder=19,this.group.add(this.skirt),this.refugeGroup=new hn,this.group.add(this.refugeGroup),this.refuges=[]}setWorld(t){this.world=t;for(const[,e]of this.chunks)this.disposeChunk(e);this.chunks.clear(),this.window=[NaN,NaN],this.buildRefuges()}disposeChunk(t){this.group.remove(t.terrain),this.group.remove(t.road),t.terrain.geometry.dispose(),t.road.geometry.dispose(),t.veins&&(this.group.remove(t.veins),t.veins.geometry.dispose())}update(t,e){const n=this.world;if(!n)return;const s=Math.floor((t-F_)/Se),r=Math.floor((t+N_)/Se);this.sea.position.x=e,this.sea.position.z=-t,this.skirt.position.x=e,this.skirt.position.z=-t;const o=n.biomeAt(t);this.skirtMat.color.copy(Ze(fn[o.a].ground)).lerp(Ze(fn[o.b].ground),o.t);let a=0;for(const c of[-60,0,60,120,180])a=Math.max(a,n.seaInfo(t+c).w);if(this.sea.visible=a>.001,s===this.window[0]&&r===this.window[1])return!1;this.window=[s,r];for(const[c,l]of this.chunks)(c<s||c>r)&&(this.disposeChunk(l),this.chunks.delete(c));for(let c=s;c<=r;c++){if(this.chunks.has(c))continue;const l=new se(G_(n,c),this.terrainMat);l.renderOrder=20;const f=new se(V_(n,c),this.roadMat);f.renderOrder=21,this.group.add(l),this.group.add(f);const u=q_(n,c);let d=null;u&&(d=new se(u,this.veinMat),d.renderOrder=24,this.group.add(d)),this.chunks.set(c,{terrain:l,road:f,veins:d})}this.rebuildInstances(s,r);for(const c of this.refuges)c.group.visible=c.z>t-80&&c.z<t+180,c.lair&&(c.lair.visible=c.group.visible);return!0}rebuildInstances(t,e){const n=this.world,s={},r={},o=new fe,a=new ui,c=new z,l=new z,f=new z(0,1,0),u=new Ft;let d=0;this.tall=[],this.tallByItem=new Map,this.hiddenRecs=new Set;for(const h of Object.keys(this.protoMeshes))s[h]=0;for(const h of Object.keys(this.decalMeshes))r[h]=0;for(let h=t;h<=e;h++){const p=n.chunk(h);for(const x of p.items){const g=this.protoMeshes[x.p];if(!g)continue;const m=s[x.p];if(m>=g.instanceMatrix.count)continue;let v=x.p==="thornWall"||x.p==="pole"||x.p==="hydrant"?qu(n,x.x,x.z):n.height(x.x,x.z);(x.p.startsWith("bldg")||x.p==="cottage"||x.p==="barn"||x.p==="cabin")&&(v-=.35),v<Le-.6&&(x.p==="rock"||x.p==="boulder")&&(v=Le-.9),c.set(x.x,v,-x.z),a.setFromAxisAngle(f,x.rot),l.set(x.s,x.s*(x.sy||1),x.s),o.compose(c,a,l),g.setMatrixAt(m,o),ev(n,x,u),g.setColorAt(m,u),s[x.p]=m+1;const _=this.protoBox[x.p];if(_&&_.max.y*x.s*(x.sy||1)>$_){const w=Math.max(-_.min.x,_.max.x,-_.min.z,_.max.z)*x.s,T={key:x.p,n:m,item:x,m:o.clone(),inv:o.clone().invert(),color:u.clone(),x:x.x,z:-x.z,r:w,hidden:!1};this.tall.push(T),this.tallByItem.set(x,T)}const M=Vn[x.p];if(d<this.shadows.instanceMatrix.count&&M!==void 0){let w=1.6,T=1.6;if(M&&(M.shape==="c"?w=T=M.r*2.6*x.s:(w=M.hw*2.4*x.s,T=M.hd*2.4*x.s)),(x.p==="pine"||x.p==="snowPine")&&(w=T=5*x.s),x.p==="oak"&&(w=T=5.5*x.s),(x.p==="roundTree"||x.p==="planterTree")&&(w=T=4.2*x.s),x.p==="palm"&&(w=T=4*x.s),x.p==="bus"&&(w=3.2*x.s,T=11*x.s),x.p==="pole"&&(w=T=1.2),x.p==="peak"||x.p==="mesa"||x.p==="thornWall"||!M&&(x.p==="grass"||x.p==="flowers"||x.p==="pebbles"||x.p==="hydrant"))continue;const A=x.p.startsWith("bldg")?1.6:1;c.set(x.x+.9*A,v+.04,-x.z+.7*A),a.setFromAxisAngle(f,x.rot),l.set(w*(x.p.startsWith("bldg")?1.25:1),1,T*(x.p.startsWith("bldg")?1.25:1)),o.compose(c,a,l),this.shadows.setMatrixAt(d++,o)}}for(const x of p.decals){const g=this.decalMeshes[x.p];if(!g)continue;const m=r[x.p];if(m>=g.instanceMatrix.count)continue;const v=n.roadInfo(x.z),M=Math.abs(x.x-v.x)<v.halfWidth+.2?n.roadY(x.z)+.075:n.height(x.x,x.z)+.05;c.set(x.x,M,-x.z),a.setFromAxisAngle(f,x.rot),l.set(x.sx,1,x.sz),o.compose(c,a,l),g.setMatrixAt(m,o),r[x.p]=m+1}}for(const[h,p]of Object.entries(this.protoMeshes))p.count=s[h],p.visible=s[h]>0,p.instanceMatrix.needsUpdate=!0,p.instanceColor&&(p.instanceColor.needsUpdate=!0);for(const[h,p]of Object.entries(this.decalMeshes))p.count=r[h],p.visible=r[h]>0,p.instanceMatrix.needsUpdate=!0;this.shadows.count=d,this.shadows.instanceMatrix.needsUpdate=!0}setGhostScene(t){this.ghostScene=t}ghostFor(t){let e=this.ghosts[t];if(e)return e;const n=this.protoMeshes[t].geometry,s=new Fe;for(const[c,l]of Object.entries(n.attributes))s.setAttribute(c,l);n.index&&s.setIndex(n.index);const r=new uc(new Float32Array(po),1);r.setUsage(Rs),s.setAttribute("ghostAlpha",r);const o=new yi(s,this.ghostMat,po);o.instanceMatrix.setUsage(Rs),o.setColorAt(0,K_),o.count=0,o.frustumCulled=!1,o.renderOrder=61;const a=new yi(s,this.ghostDepthMat,po);return a.instanceMatrix=o.instanceMatrix,a.count=0,a.frustumCulled=!1,a.renderOrder=60,o.visible=!1,a.visible=!1,this.ghostScene.add(a,o),e={color:o,depth:a,alpha:r,list:[]},this.ghosts[t]=e,e}updateGhosts(t,e,n,s=[]){const r=t.position;for(let u=0;u<Ar.length;u++){const d=Ar[u];Lh[u].set(e.x+d[0],e.y+d[1],e.z+d[2])}const o=this._ghostTargets||(this._ghostTargets=[{x:0,z:0,pts:Lh}]);o[0].x=e.x,o[0].z=e.z,o.length=1;const a=this._ghostPool||(this._ghostPool=[]);for(let u=0;u<s.length&&u<4;u++){const d=s[u],h=a[u]||(a[u]={x:0,z:0,pts:[new z,new z,new z]});h.x=d.x,h.z=d.z;for(let p=0;p<3;p++)h.pts[p].set(d.x,d.y+d.h*(.15+p*.4),d.z);o.push(h)}const c=this._ghostWant||(this._ghostWant=new Set);c.clear();for(const u of this.tall){const d=this.protoBox[u.key];let h=!1;for(const p of o){if(u.z<p.z-u.r-1||u.z-p.z>30||Math.abs(u.x-p.x)>14+u.r)continue;h||(Ph.copy(r).applyMatrix4(u.inv),h=!0);let x=!1;for(const g of p.pts)if(Ih.copy(g).applyMatrix4(u.inv),Z_(Ph,Ih,d.min,d.max)){x=!0;break}if(x){c.add(u.item);break}}}for(const u of c)this.fade.has(u)||this.fade.set(u,0);const l=this._ghostDirty||(this._ghostDirty=new Set);l.clear();for(const[u,d]of this.fade){const h=c.has(u),p=h?Math.min(1,d+n*4):Math.max(0,d-n*2.2);!h&&p<=0?this.fade.delete(u):this.fade.set(u,p)}for(const u of this.hiddenRecs){if(this.fade.has(u.item))continue;const d=this.protoMeshes[u.key];d.setMatrixAt(u.n,u.m),l.add(d),u.hidden=!1,this.hiddenRecs.delete(u)}for(const u of Object.values(this.ghosts))u.list.length=0;for(const[u,d]of this.fade){const h=this.tallByItem.get(u);if(!h){this.fade.delete(u);continue}const p=this.ghostFor(h.key);if(!(p.list.length>=po)){if(!h.hidden){const x=this.protoMeshes[h.key];x.setMatrixAt(h.n,j_),l.add(x),h.hidden=!0,this.hiddenRecs.add(h)}p.list.push(h),p.alpha.array[p.list.length-1]=1-(1-Y_)*(d*d*(3-2*d))}}for(const u of l)u.instanceMatrix.needsUpdate=!0;let f=0;for(const u of Object.values(this.ghosts)){const d=u.list.length;if(u.color.count=d,u.depth.count=d,u.color.visible=d>0,u.depth.visible=d>0,!!d){f+=2;for(let h=0;h<d;h++)u.color.setMatrixAt(h,u.list[h].m),u.color.setColorAt(h,u.list[h].color);u.color.instanceMatrix.needsUpdate=!0,u.color.instanceColor.needsUpdate=!0,u.alpha.needsUpdate=!0}}return this.ghostCount=this.fade.size,f}buildRefuges(){this.lantern=null;for(const n of this.refuges)this.refugeGroup.remove(n.group),n.lair&&(this.refugeGroup.remove(n.lair),n.lair.geometry.dispose());this.refuges=[];const t=this.world;this.refugeGeo||(this.refugeGeo=[0,1,2,3,4].map(n=>Nh(!1,n)),this.lanternGeo=Nh(!0,5),this.depotGeo=ov(),this.domeGeo=new Ai(7.5,20,10,0,Math.PI*2,0,Math.PI/2),this.beamGeo=new Bn(.7,1.2,60,10,1,!0),this.zoneGeo=new Si(4.6,5.5,32).rotateX(-Math.PI/2),this.zoneFillGeo=new Gs(4.6,32).rotateX(-Math.PI/2));const e=[{index:-1,z:0,x:t.roadX(0),depot:!0},...t.refuges];for(const n of e){const s=new hn,r=t.roadY(n.z);s.position.set(n.x,r,-n.z);const o=t.roadYaw(n.z),a=new se(n.depot?this.depotGeo:n.final?this.lanternGeo:this.refugeGeo[n.index%5],this.litMat);a.rotation.y=o,s.add(a);let c=null,l=null,f=null,u=null;n.depot||(c=new se(this.domeGeo,new xe({color:16724040,transparent:!0,opacity:.16,depthWrite:!1,side:Oe})),c.renderOrder=31,s.add(c),l=new se(this.beamGeo,new xe({color:7337928,transparent:!0,opacity:.22,depthWrite:!1,blending:qi,side:Oe})),l.position.y=30,l.renderOrder=32,s.add(l),f=new se(this.zoneGeo,new xe({color:7337928,transparent:!0,opacity:.9,depthWrite:!1})),f.position.y=.12,f.renderOrder=31,s.add(f),u=new se(this.zoneFillGeo,new xe({color:7337928,transparent:!0,opacity:.18,depthWrite:!1})),u.position.y=.1,u.renderOrder=31,s.add(u));let d=null;if(n.depot||(d=this.buildGate(n,s,r)),n.final){const p=Math.cos(o),x=Math.sin(o),g=-10*p+-9*x,m=10*x+-9*p,v=new Bn(.35,2.6,34,14,1,!0).translate(0,17,0).rotateZ(Math.PI/2-.32),_=new se(v,new xe({color:16767370,transparent:!0,opacity:.12,depthWrite:!1,blending:qi,side:Oe}));_.position.set(g,24.6,m),_.renderOrder=36,s.add(_),this.lantern={beam:_,pos:new z(n.x+g,r+24.6,-n.z+m)}}s.visible=!1,this.refugeGroup.add(s);let h=null;if(!n.depot){const p=rv(t,n,n.index);p&&(h=new se(p,this.litMat),h.visible=!1,this.refugeGroup.add(h))}this.refuges.push({...n,group:s,dome:c,beam:l,zone:f,fill:u,gate:d,lair:h,openT:0})}}buildGate(t,e,n){const s=this.world;this.gateTex||(this.gateTex=iv(),this.signTex={sealed:Uh("SEALED","Defeat the guardian","#c8102e","#fff"),open:Uh("OPEN","Walk into the ring","#0f8a6a","#fff")},this.signGeo=new Ln(8.4,2.6));const r=t.z-Fo,o=s.roadYaw(r),a=s.roadX(r),c=vi+2,l=[],f=[],u=[],d=[],h=Math.round(c*2/1.5),p=Math.cos(o),x=Math.sin(o);for(let y=0;y<=h;y++){const D=-c+y/h*c*2,N=a+D*p,Y=r+D*x,q=Math.max(s.height(N,Y),s.roadY(r))-n,V=N-t.x,Z=-(Y-t.z);l.push(V,q-.3,Z,V,q+3.4,Z),f.push(y/h*9,0,y/h*9,1),u.push(V-x*.35,q+.12,Z-p*.35,V+x*.35,q+.12,Z+p*.35),y<h&&d.push(y*2,y*2+1,y*2+2,y*2+1,y*2+3,y*2+2)}const g=new Fe;g.setAttribute("position",new le(l,3)),g.setAttribute("uv",new le(f,2)),g.setIndex(d);const m=new xe({map:this.gateTex,color:16722504,transparent:!0,opacity:.85,depthWrite:!1,side:Oe,blending:qi}),v=new se(g,m);v.renderOrder=33;const _=new Fe;_.setAttribute("position",new le(u,3)),_.setIndex(d);const M=new se(_,new xe({color:16726608,side:Oe,transparent:!0,opacity:.95,depthWrite:!1}));M.renderOrder=33;const w=[];for(let y=-c;y<=c+.01;y+=6.5){const D=a+y*p,N=r+y*x,Y=Math.max(s.height(D,N),s.roadY(r))-n,q=D-t.x,V=-(N-t.z);w.push(H(k.box,2761776,[q,Y+1.9,V],[0,o,0],[.45,3.8,.45])),w.push(H(k.oct,16728160,[q,Y+4.1,V],[0,o,0],[.6,.8,.6],{glow:1}))}const T=new se(Et(w),this.plainMat),A=new xe({map:this.signTex.sealed,transparent:!0,depthWrite:!1,side:Oe}),C=new se(this.signGeo,A);C.position.set(a-t.x,s.roadY(r)-n+5.6,-(r-t.z)),C.rotation.set(-.84,0,0),C.renderOrder=35;const b=new hn;return b.add(v,M,T,C),e.add(b),{group:b,wall:v,line:M,sign:C,pylons:T}}updateRefuges(t,e){for(const n of this.refuges){if(!n.group.visible||n.depot)continue;const s=n.index===t.legIndex,r=n.index<t.legIndex,o=r||s&&t.boss.defeated,a=s&&t.boss.active&&!t.boss.defeated;n.dome.visible=a||s&&!o,n.dome.material.color.set(a?16724040:16756794),n.dome.material.opacity=a?.18+Math.sin(e*4)*.05:.1;const c=o?7337928:a?16732256:16760906;n.zone.material.color.set(c),n.fill.material.color.set(c),n.beam.material.color.set(c),n.beam.material.opacity=(r?.08:.24)+Math.sin(e*2.5)*.05,n.zone.scale.setScalar(1+Math.sin(e*3)*.04);const l=n.gate;if(l){o?n.openT=Math.min(3,n.openT+(e-(n.lastT??e))):n.openT=0,n.lastT=e;const f=Math.min(1,n.openT/.7);l.wall.visible=f<1,l.line.visible=f<1,l.pylons.visible=!r,l.wall.scale.y=1-f,l.wall.material.opacity=(.62+Math.sin(e*5)*.16)*(1-f),l.line.material.opacity=.95*(1-f),l.sign.visible=!r&&(!o||n.openT<2.9);const u=o?this.signTex.open:this.signTex.sealed;l.sign.material.map!==u&&(l.sign.material.map=u,l.sign.material.needsUpdate=!0),l.sign.material.opacity=(o?Math.max(0,1-Math.max(0,n.openT-2.2)/.7):.92+Math.sin(e*4)*.08)*(l.hudFade??1),l.sign.position.y=(l.signY??(l.signY=l.sign.position.y))+Math.sin(e*1.6)*.12}}if(this.gateTex&&(this.gateTex.offset.y=-e*.35),this.lantern){const n=t.phase==="complete";this.lanternSpin=(this.lanternSpin||0)+(n?.05:.012),this.lantern.beam.rotation.y=this.lanternSpin,this.lantern.beam.material.opacity=n?.24+Math.sin(e*3)*.05:.12}}clampSigns(t,e,n=0,s=[]){for(const r of this.refuges){const o=r.gate;if(!o||!r.group.visible||!o.sign.visible)continue;o.sign.updateMatrixWorld(),si.set(0,1.4,0).applyMatrix4(o.sign.matrixWorld).project(t);let a=(1-si.y)/2<n;if(!a&&s.length){Ke.set(-4.6,-1.6,0).applyMatrix4(o.sign.matrixWorld).project(t);const h=Ke.x,p=Ke.y;Ke.set(4.6,1.6,0).applyMatrix4(o.sign.matrixWorld).project(t);const x=Ke.x,g=Ke.y;for(const m of s)if(Ke.copy(m).project(t),Ke.x>Math.min(h,x)&&Ke.x<Math.max(h,x)&&Ke.y>Math.min(p,g)&&Ke.y<Math.max(p,g)){a=!0;break}}o.hudFade=Math.max(0,Math.min(1,(o.hudFade??1)+(a?-e*6:e*4)));const c=o.sign;o.signX??(o.signX=c.position.x),o.signOff??(o.signOff=0);const l=4.2,f=r.group.position;si.set(f.x+o.signX-l,f.y+c.position.y,f.z+c.position.z).project(t),Ke.set(f.x+o.signX+l,f.y+c.position.y,f.z+c.position.z).project(t);let u=0;if(si.z<1&&Ke.z<1){const h=(Ke.x-si.x)/(2*l),p=.05;h>1e-4&&(Ke.x-si.x>2-2*p?u=-((si.x+Ke.x)/2)/h:si.x<-1+p?u=(-1+p-si.x)/h:Ke.x>1-p&&(u=(1-p-Ke.x)/h))}const d=vi+2-l-.5;u=Math.max(-d,Math.min(d,u)),o.signOff+=(u-o.signOff)*Math.min(1,e*8),c.position.x=o.signX+o.signOff}}dispose(){for(const[,t]of this.chunks)this.disposeChunk(t);this.chunks.clear()}}const tv=new Ft(10123942),si=new z,Ke=new z,zh=new Set(["oak","roundTree","bush","planterTree","grass","fern","pine","snowPine","palm","shrub","flowers","cactus"]);function ev(i,t,e){if(nv(i,t,e),zh.has(t.p)||t.p.startsWith("bldg")||t.p==="cottage"||t.p==="barn"){const n=i.corruption(t.x,t.z);if(n>.4){const s=ue(.4,.8,n);zh.has(t.p)?e.lerp(tv,s*.8):e.multiplyScalar(1-s*.3)}}return e}function nv(i,t,e){const n=t.v,s=i.dominantBiome(t.z);switch(t.p){case"bldgA":case"bldgB":case"bldgC":case"bldgD":{const r=[16748395,6473176,16765803,11898098,9429130,16752578,16183266,8368895];return e.set(r[Math.floor(n*r.length)])}case"bus":{const r=[15909424,4176072,15921906,16747066];return e.set(r[Math.floor(n*r.length)])}case"barrel":{const r=[3108784,13123628,15251504,5212746];return e.set(r[Math.floor(n*r.length)])}case"crystal":case"crystalBig":return e.setRGB(.8,.8,.8).multiplyScalar(.85+(t.c||.6)*.45);case"car":case"van":{const r=[15026234,3114720,15909424,4175994,15658734,10117088,16747066];return e.set(r[Math.floor(n*r.length)])}case"cottage":{const r=[16773584,16765104,14217471,16774816,15269848];return e.set(r[Math.floor(n*r.length)])}case"boat":{const r=[16777215,16765024,10479871,16752512];return e.set(r[Math.floor(n*r.length)])}case"flowers":{const r=[16777215,16756944,16769152,13672703];return e.set(r[Math.floor(n*r.length)])}case"rock":case"boulder":case"pebbles":case"pillar":case"mesa":case"peak":return e.set(O_[s]).multiplyScalar(.92+n*.16);case"oak":case"roundTree":case"bush":case"planterTree":case"grass":case"fern":return(s==="glade"||s==="village")&&n>.86?e.set(16756800):s==="desert"||s==="cliffs"?e.set(14213232).multiplyScalar(.9+n*.2):e.setRGB(.85+n*.3,1,.8+n*.25);case"pine":case"snowPine":return e.setRGB(.85+n*.25,.95+n*.1,.9+n*.2);default:return e.setRGB(1,1,1)}}function iv(){const i=document.createElement("canvas");i.width=64,i.height=128;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,128);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.55,"rgba(255,255,255,0.35)"),e.addColorStop(1,"rgba(255,255,255,0.9)"),t.fillStyle=e,t.fillRect(0,0,64,128),t.fillStyle="rgba(255,255,255,0.55)";for(let s=0;s<128;s+=16)t.fillRect(0,s,64,3);t.fillStyle="rgba(255,255,255,0.7)",t.fillRect(0,0,3,128);const n=new zc(i);return n.wrapS=mr,n.wrapT=mr,n.colorSpace=sn,n}function Uh(i,t,e,n){const s=document.createElement("canvas");s.width=512,s.height=160;const r=s.getContext("2d"),o=()=>{r.clearRect(0,0,512,160);const c=28;r.beginPath(),r.moveTo(c+6,6),r.arcTo(506,6,506,154,c),r.arcTo(506,154,6,154,c),r.arcTo(6,154,6,6,c),r.arcTo(6,6,506,6,c),r.closePath(),r.fillStyle=e,r.fill(),r.lineWidth=8,r.strokeStyle="rgba(255,255,255,0.85)",r.stroke(),r.fillStyle=n,r.textAlign="center",r.textBaseline="middle",r.font='800 64px "Baloo 2", "Trebuchet MS", system-ui, sans-serif',r.fillText(i,256,60),r.font='800 36px "Nunito", system-ui, sans-serif',r.fillText(t,256,118)};o();const a=new zc(s);return a.colorSpace=sn,a.anisotropy=4,typeof document<"u"&&document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{o(),a.needsUpdate=!0}).catch(()=>{}),a}const Lo=[{style:"hut",roof:3122570,wall:15326402},{style:"tent",roof:13123628,wall:14207136},{style:"container",roof:3108784,wall:3832474},{style:"bunker",roof:6972504,wall:9077880},{style:"tower",roof:14195242,wall:10119738},{style:"hut",roof:3122570,wall:15919832}];function sv(i,t,e){const n=Lo[e]||Lo[0];if(n.style==="tent")i.push(H(k.prism,n.wall,[9.5,1.7,1],[-Math.PI/2,0,Math.PI/2],[5.8/.866,5.4,3.4/.75])),i.push(t(n.roof,7.2,2,1,.08,.9,.3,{glow:.2})),i.push(t(n.roof,7.2,2,1,.08,.3,.9,{glow:.2})),i.push(t(4861466,7,.9,1,.1,1.8,1.2));else if(n.style==="container"){i.push(t(n.wall,9.5,1.45,1,4.6,2.9,4.8,{jitter:.05}));for(let s=0;s<7;s++)i.push(t(2775666,9.5,1.45,-1.35+s*.68,4.7,2.95,.12));i.push(t(n.roof,9.5,3,1,4.9,.2,5.1)),i.push(t(16765803,7.15,1.5,1,.1,1.6,1.3,{glow:.9}))}else if(n.style==="bunker"){i.push(t(n.wall,9.5,1.1,1,5,2.2,5,{jitter:.08})),i.push(t(n.roof,9.5,2.35,1,5.6,.4,5.6)),i.push(t(16765803,6.98,1.4,1,.08,.3,2.6,{glow:1}));for(let s=0;s<4;s++)i.push(t(13152392,6.6,.3,-1+s*.9,.7,.45,.8))}else if(n.style==="tower"){for(const[s,r]of[[-1.8,-1.8],[1.8,-1.8],[-1.8,1.8],[1.8,1.8]])i.push(t(5913122,9.5+s,1.6,1+r,.35,3.2,.35));i.push(t(n.wall,9.5,4.3,1,4.4,2.2,4.4)),i.push(H(k.prism,n.roof,[9.5,5.4+.25*(2/.75),1],[-Math.PI/2,0,Math.PI/2],[5.4/.866,5,2/.75])),i.push(t(16765803,7.25,4.4,1,.1,.9,1.6,{glow:.9}));for(let s=0;s<6;s++)i.push(t(7031342,7.4,.3+s*.55,-.8,.5,.1,.12))}else i.push(t(n.wall,9.5,1.8,1,5,3.6,5)),i.push(H(k.prism,n.roof,[9.5,3.6+.25*(2.2/.75),1],[-Math.PI/2,0,Math.PI/2],[6.2/.866,5.6,2.2/.75])),i.push(t(16765803,7,1.9,1,.1,1,1.4,{glow:.9})),i.push(t(4861466,7,1.1,-1,.1,2.2,1))}function rv(i,t,e){const n=[],s=Is(li(i.seed,"lair",t.index)),r=[];for(let a=0;a<16;a++){const c=t.z-Fo-3-s()*34,l=a%2?1:-1,f=i.roadX(c)+l*(i.clearHalf(c)+2+s()*11),u=i.lateralBounds(c);f-i.roadX(c)>u.max+6||f-i.roadX(c)<u.min-6||r.push([f,Math.max(i.height(f,c),Le),-c,s()*6.28,.8+s()*.5])}const o=(a,c,[l,f,u,d,h],p,x,g,m,v,_,M=[0,0,0],w={})=>{const T=Math.cos(d),A=Math.sin(d);n.push(H(a,c,[l+(p*T+g*A)*h,f+x*h,u+(-p*A+g*T)*h],[M[0],M[1]+d,M[2]],[m*h,v*h,_*h],w))};return r.forEach((a,c)=>{switch(e){case 0:if(c%4===0)o(k.box,14209728,a,0,1.2,0,1.8,2.4,1.8),o(k.box,13119530,a,0,2.5,0,2.1,.25,2.1),o(k.box,8376544,a,.91,1.5,0,.05,.8,1.2,[0,0,0],{glow:.3});else if(c%4===1){for(let l=0;l<4;l++)o(k.box,l%2?15921126:13643818,a,-1.5+l*1,1,0,1,.22,.22);o(k.box,3816004,a,-2.1,.5,0,.3,1,.3)}else if(c%4===2)for(let l=0;l<3;l++)o(k.cone6,16742938,a,l*.8-.8,.4,l%2*.6,.45,.8,.45);else for(let l=0;l<3;l++)o(k.torusLow,2236966,a,0,.18+l*.32,0,.9,.9,.9,[Math.PI/2,0,0]);break;case 1:c%3===0?o(k.disc,8060730,a,0,.06,0,3.2,1,2.2,[0,0,0],{glow:.55}):c%3===1?(o(k.cyl6,2767384,a,0,1.3,0,.18,2.6,.18),o(k.ico0,10157898,a,0,2.7,0,.8,1,.8,[0,0,0],{glow:.8})):o(k.disc,4885034,a,0,.05,0,1.6,1,1.2,[0,0,0],{glow:.35});break;case 2:if(c%3===0)o(k.ico0,6965802,a,0,.2,0,2.6,1,2.2),o(k.disc,1708554,a,1.8,.07,0,1.6,1,1.6);else if(c%3===1)for(let l=0;l<3;l++)o(k.box,15260864,a,l*.5-.5,.12,l*.3,.12,.12,1.2,[0,l,0]);else o(k.ico0,9071170,a,0,.3,0,1.4,.8,1.6);break;case 3:if(c%3===0)for(let l=0;l<5;l++)o(k.oct,16743120,a,Math.sin(l*1.3)*.8,.35,Math.cos(l*1.3)*.8,.55,.75,.55,[0,l,0],{glow:.7});else if(c%3===1)for(let l=0;l<3;l++)o(k.box,15259880,a,0,.6+l*.5,0,.05,.05,4.2,[.25*(l-1),l*.9,0],{glow:.25});else o(k.ico0,5904960,a,0,.5,0,1.2,.9,1.4);break;case 4:c%3===0?(o(k.box,8014378,a,0,.4,0,.35,.35,4.5,[.2,0,.3]),o(k.box,6961698,a,.6,.8,.5,.3,.3,3.2,[-.5,.8,0])):c%3===1?(o(k.box,6978704,a,0,.7,0,2.2,.12,1.6,[.6,0,.2]),o(k.box,5925500,a,.8,.3,.6,1.4,.1,1.2,[-.2,.5,.4])):o(k.cyl8,4868690,a,0,.7,0,1.5,.35,1.5,[Math.PI/2-.3,0,0]);break;default:if(c%3===0)o(k.box,2760752,a,0,2,0,.3,4,.3,[.18,0,0]),o(k.box,11563263,a,0,4.1,.35,.55,.55,.55,[0,.7,0],{glow:1});else if(c%3===1)for(let l=0;l<4;l++)o(k.tetra,l%2?16765803:11563263,a,l*.6-.9,.25,l%2*.5,.45,.6,.45,[l,l,0],{glow:.8});else o(k.box,3813446,a,0,.6,0,2.6,1.2,.6,[0,0,.15])}}),n.length?Et(n):null}function Nh(i,t=0){const e=[],n=(s,r,o,a,c,l,f,u={})=>H(k.box,s,[r,o,a],u.r||[0,0,0],[c,l,f],u);for(const s of[-1,1])e.push(n(7031342,s*6.2,2.2,-5.5,.6,4.4,.6)),e.push(n(16765803,s*6.2,4.7,-5.5,.7,.7,.7,{glow:1})),e.push(n(3811866,s*6.2,5.15,-5.5,.9,.2,.9));e.push(n(7031342,0,4.2,-5.5,13,.5,.5)),e.push(n(3129242,0,3.6,-5.45,5,1,.12,{glow:.3})),e.push(n(16777215,0,3.6,-5.36,3.6,.25,.04,{glow:.6})),sv(e,n,t);for(let s=0;s<5;s++)e.push(n(13152392,-8-s%2*.4,.35+Math.floor(s/2)*.5,-2+s*1.1,1.2,.5,.9));if(e.push(n(13208130,-8.5,.6,3,1.2,1.2,1.2)),e.push(H(k.cyl6,14540253,[12.5,3.5,-1.5],[0,0,0],[.12,7,.12])),e.push(n((Lo[t]||Lo[0]).roof,13.3,6.4,-1.5,1.6,1,.05)),i){for(let s=0;s<6;s++)e.push(H(k.cyl8,s%2?14826299:16184042,[-10,2+s*3.6,-9],[0,0,0],[5-s*.35,3.6,5-s*.35]));e.push(H(k.cyl8,3816004,[-10,23,-9],[0,0,0],[3.4,.4,3.4])),e.push(H(k.cyl8,16771488,[-10,24.6,-9],[0,0,0],[2.6,2.8,2.6],{glow:1})),e.push(H(k.cone7,3811882,[-10,27.2,-9],[0,0,0],[3.4,2.4,3.4])),e.push(H(k.box,16773808,[-10,24.6,-9],[0,.6,0],[9,.5,.8],{glow:1}))}return Et(e)}function ov(){const i=[],t=(e,n,s,r,o,a,c,l={})=>H(k.box,e,[n,s,r],l.r||[0,0,0],[o,a,c],l);for(const e of[-1,1])i.push(t(3820122,e*6.2,2.6,-4,.7,5.2,.7)),i.push(t(16765803,e*6.2,5.5,-4,.8,.6,.8,{glow:1}));i.push(t(3820122,0,5,-4,13.2,.6,.6)),i.push(t(16742938,0,4.2,-3.95,6.4,1.1,.14,{glow:.25})),i.push(t(16777215,-1.2,4.2,-3.86,2.6,.34,.04,{glow:.7})),i.push(t(16777215,1.9,4.2,-3.86,1.2,.6,.04,{glow:.7})),i.push(t(16757338,9.6,2.4,3,7,4.8,9,{jitter:.04})),i.push(t(4872810,9.6,4.95,3,7.6,.3,9.6)),i.push(t(3046865,6.05,3.9,3,.14,1,6)),i.push(t(16777215,5.97,3.9,3,.04,.32,4.6,{glow:.6})),i.push(t(6977156,6.06,1.4,1.4,.1,2.8,3.2));for(let e=0;e<6;e++)i.push(t(5661038,6,.3+e*.45,1.4,.06,.06,3.2));i.push(t(2306637,6.06,1.8,5.6,.1,1.4,2)),i.push(t(16765803,6,1.8,5.6,.04,1.2,1.8,{glow:.5})),i.push(H(k.ico0,5221948,[9.5,5.6,6],[0,0,0],[3,1.2,2.6]));for(let e=0;e<4;e++)i.push(t(13208130,-6.8-e%2*1.3,.6+Math.floor(e/2)*1.2,1+e%2*.4,1.2,1.2,1.2,{jitter:.08}));return i.push(t(11039807,-7.4,.8,5,1.4,.4,2.4)),i.push(H(k.cyl8,5913122,[-6.6,.5,5.4],[0,0,Math.PI/2],[1,.15,1])),i.push(H(k.cyl8,5913122,[-8.2,.5,5.4],[0,0,Math.PI/2],[1,.15,1])),i.push(t(16774364,-7.4,1.3,5,.9,.6,.9)),Et(i)}const Do=.5,Yu=.5;function av(i=0){return{travel:i,legs:i,shot:null,age:0,moving:!1}}function cv(i,t,e,n){const s=Math.hypot(e,n);i.moving=s>.05,i.moving&&(i.travel=Math.atan2(e,n));const r=Hu(i.legs,i.travel),o=14*t;return i.legs=Hc(i.legs+Math.max(-o,Math.min(o,r))),i.shot!==null&&(i.age+=t,i.age>=Do+Yu&&(i.shot=null,i.age=0)),i}function lv(i,t){return i.shot=Hc(t),i.age=0,i}function hv(i){return i.shot===null?"travel":i.age<Do?"hold":"return"}const uv=i=>i*i*(3-2*i);function $u(i){if(i.shot===null)return i.travel;if(i.age<Do)return i.shot;const t=Math.min(1,(i.age-Do)/Yu);return t>=1?i.travel:Hc(i.shot+Hu(i.shot,i.travel)*uv(t))}const Cr=[{key:"tollkeeper",name:"The Tollkeeper",short:"Tollkeeper",signature:"charges down red lanes",speed:3.3,radius:1.85,scale:1,attacks:{charge:3,erupt:1},doubleCharge:!0,hpMul:1.5},{key:"spitter",name:"The Spitter",short:"Spitter",signature:"lobs blight from range",speed:3.2,radius:1.55,scale:1,attacks:{lob:3,erupt:1},keepAway:[8,14],lobCount:3,hpMul:1.05},{key:"burrower",name:"The Burrower",short:"Burrower",signature:"tunnels and erupts beneath you",speed:3.3,radius:1.95,scale:1,attacks:{burrow:3,charge:1},surfacedMul:1.5,hpMul:1},{key:"broodmother",name:"The Brood Mother",short:"Brood Mother",signature:"births broods of infected",speed:2.7,radius:2.1,scale:1,attacks:{brood:2,erupt:2},broodSize:3,ownBrood:!0,hpMul:1.3},{key:"ironclad",name:"The Ironclad",short:"Ironclad",signature:"armoured until its quake cracks it open",speed:3,radius:2,scale:1,attacks:{quake:3,charge:1},platedMul:.45,exposedMul:1.8,hpMul:.62},{key:"warden",name:"The Lantern Warden",short:"Lantern Warden",signature:"charges and lobs blight",speed:3.4,radius:2.05,scale:1.12,attacks:{charge:2,lob:2,erupt:1},doubleCharge:!0,lobCount:3,hpMul:1}];Cr.map(i=>i.key);function Vc(i){return Cr[Math.max(0,Math.min(Cr.length-1,i|0))]}function zr(i){return Cr.find(t=>t.key===i)||Cr[0]}function fv(i,t){const e=Vc(i),n=t==="field"?840+i*60:1150+i*90;return Math.round(n*e.hpMul)}function ju(i){const t=zr(i.arch);return t.key==="ironclad"?i.state==="exposed"?t.exposedMul:t.platedMul:t.key==="burrower"&&i.state==="surfaced"?t.surfacedMul:1}const Xi=1.42,Re=(i,t,e,n,s,r,o,a={})=>H(k.box,i,[t,e,n],a.r||[0,0,0],[s,r,o],a),qe={jacket:16738842,jacket2:16747050,stripe:16773194,pants:3100570,boot:3810840,skin:15905930,helmet:1624248,visor:1714746,scarf:15217466,parcel:16774364,tape:16751130,glove:2763312};function dv(){const i=new xe({color:1708038,depthWrite:!1,depthFunc:pr});i.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed += normalize(normal) * 0.045;`)},i.customProgramCacheKey=()=>"kuru-sil-edge";const t=new xe({color:16761370,depthWrite:!1,depthFunc:pr}),e=new xe({color:1182726,side:dn});return e.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed += normalize(normal) * 0.05;`)},e.customProgramCacheKey=()=>"kuru-outline",{edge:i,fill:t,outline:e}}class pv{constructor(t){this.root=new hn,this.root.scale.setScalar(Xi),t.add(this.root),this.mat=Ji(),this.sil=dv(),this.meshes=[];const e=(o,a)=>{const c=new se(o,this.mat);c.renderOrder=10,a.add(c);const l=new se(o,this.sil.edge);l.renderOrder=5,c.add(l);const f=new se(o,this.sil.fill);f.renderOrder=6,c.add(f);const u=new se(o,this.sil.outline);return u.renderOrder=9,c.add(u),this.meshes.push(c),c};this.lower=new hn,this.root.add(this.lower),this.pelvis=e(Et([Re(qe.pants,0,0,0,.44,.24,.28),Re(3811866,0,.1,0,.46,.07,.3)]),this.lower),this.pelvis.position.y=.95,this.legs=[];for(const o of[-1,1]){const a=new hn;a.position.set(o*.12,.9,0),this.lower.add(a),e(Et([Re(qe.pants,0,-.22,0,.18,.46,.2)]),a);const c=new hn;c.position.y=-.45,a.add(c),e(Et([Re(qe.pants,0,-.2,0,.16,.42,.18),Re(qe.boot,0,-.4,.06,.19,.16,.32),Re(1118481,0,-.47,.06,.2,.04,.33)]),c),this.legs.push({hip:a,knee:c})}this.upper=new hn,this.upper.position.y=1,this.root.add(this.upper),this.torso=e(Et([Re(qe.jacket,0,.3,0,.52,.58,.32),Re(qe.stripe,0,.18,0,.54,.07,.34,{glow:.35}),Re(qe.jacket2,0,.58,0,.42,.08,.3),Re(qe.scarf,0,.64,.02,.3,.1,.3),Re(qe.scarf,.08,.5,-.2,.1,.3,.06,{r:[.4,0,.2]}),Re(qe.parcel,0,.36,-.33,.5,.55,.34),Re(qe.tape,0,.36,-.33,.52,.1,.36,{glow:.2}),Re(qe.tape,0,.36,-.33,.1,.57,.36,{glow:.2}),Re(1624248,0,.5,-.51,.16,.16,.02,{glow:.5}),Re(2763312,-.18,.36,-.15,.06,.5,.06),Re(2763312,.18,.36,-.15,.06,.5,.06)]),this.upper),this.head=e(Et([Re(qe.skin,0,0,0,.3,.3,.3),H(k.sphere,qe.helmet,[0,.09,-.01],[0,0,0],[.38,.3,.4]),Re(qe.helmet,0,.04,.17,.32,.05,.12),Re(qe.visor,0,0,.155,.28,.08,.02),Re(16777215,.12,.13,.02,.04,.12,.3,{glow:.2})]),this.upper),this.head.position.set(0,.86,.02),this.arms=[];for(const o of[-1,1]){const a=new hn;a.position.set(o*.32,.54,0),this.upper.add(a);const c=e(Et([Re(qe.jacket,0,-.16,0,.14,.34,.15),Re(qe.jacket2,0,-.42,0,.13,.26,.14),Re(qe.glove,0,-.58,0,.13,.1,.13)]),a);this.arms.push({sh:a,arm:c})}this.weaponMount=new hn,this.weaponMount.position.set(.06,.42,.5),this.upper.add(this.weaponMount),this.weapons={};for(const[o,a]of Object.entries(Xu)){const c=e(a(),this.weaponMount);c.rotation.y=Math.PI,c.scale.setScalar(1.25),c.visible=!1,this.weapons[o]=c}this.current=null;const n=new Si(.62,.8,28).rotateX(-Math.PI/2);this.ring=new se(n,new xe({color:16769126,transparent:!0,opacity:.85,depthWrite:!1})),this.ring.renderOrder=33,t.add(this.ring),this.disc=new se(new Gs(.95,28).rotateX(-Math.PI/2),new xe({color:1054751,transparent:!0,opacity:0,depthWrite:!1})),this.disc.renderOrder=32,t.add(this.disc),this.crowd=0;const s=new bi(.22,.5,3).rotateX(Math.PI/2);this.arrow=new se(s,new xe({color:16769126,transparent:!0,opacity:.9,depthWrite:!1})),this.arrow.renderOrder=33,t.add(this.arrow),this.mark=new se(new bi(.32,.55,4).rotateX(Math.PI),new xe({color:16765498,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.95})),this.mark.renderOrder=90,this.mark.visible=!1,t.add(this.mark),this.ringTop=new se(n,new xe({color:16769126,transparent:!0,opacity:.45,depthTest:!1,depthWrite:!1})),this.ringTop.renderOrder=89,t.add(this.ringTop);const r=new Ai(1.15,16,10);this.shield=new se(r,new xe({color:3139327,transparent:!0,opacity:.18,depthWrite:!1,blending:qi})),this.shield.renderOrder=34,t.add(this.shield),this.phase=0,this.amp=0,this.lastStepSign=1,this.recoil=0,this.upperYaw=0,this.legsYaw=0}update(t,e,n,s,r){const o=t.player,a=t.facing;this.root.position.set(e.x,e.y,-e.z);const c=o.alive?Math.hypot(o.vx,o.vz):0,l=Math.min(1,c/9);this.amp+=(l-this.amp)*Math.min(1,n*8);const f=3.4;this.phase+=c*n/f*Math.PI*2;let u=0;const h=Math.sin(this.phase)>=0?1:-1;h!==this.lastStepSign&&this.amp>.2&&(u=1),this.lastStepSign=h;const p=this.amp;this.legs.forEach((b,y)=>{const D=this.phase+(y?Math.PI:0);b.hip.rotation.x=-Math.sin(D)*.85*p,b.knee.rotation.x=Math.max(0,Math.cos(D))*1.25*p+.05}),this.lower.position.y=Math.abs(Math.sin(this.phase))*.07*p,this.upper.position.y=1+this.lower.position.y,this.pelvis.rotation.y=Math.sin(this.phase)*.12*p;const x=Math.PI-a.legs,g=Math.PI-$u(a);this.root.rotation.y=x;let m=g-x;m=Math.atan2(Math.sin(m),Math.cos(m)),this.upper.rotation.y=m,this.upper.rotation.x=.12*p,this.recoil=Math.max(0,this.recoil-n*6)+(r||0),this.weaponMount.position.z=.5-Math.min(.15,this.recoil*.15),this.arms.forEach((b,y)=>{b.sh.rotation.x=-1.35+this.recoil*.25+Math.sin(this.phase+y)*.05*p,b.sh.rotation.z=(y?-1:1)*.28}),this.head.rotation.y=-m*.15;const v=t.weapon.current;if(v!==this.current){for(const[b,y]of Object.entries(this.weapons))y.visible=b===v;this.current=v}const _=o.hurtFlash>0?o.hurtFlash/.25:0,M=o.iframe>0&&Math.sin(s*40)>0?.35:0;this.mat.emissive.setRGB(_*.9+M,_*.85+M,_*.7+M);const w=o.alive&&o.hp/o.maxHp<=.3,T=o.alive&&(this.crowd>.3||w);this.mark.visible=T,T&&(this.mark.position.set(e.x,e.y+2*Xi+.55+Math.sin(s*6)*.12,-e.z),this.mark.rotation.y=s*2,this.mark.material.color.setHex(w&&Math.sin(s*8)>0?16777215:16765498)),o.alive?this.root.rotation.x=0:this.root.rotation.x=Math.min(Math.PI/2,(this.root.rotation.x||0)+n*4),this.ring.position.set(e.x,e.y+.08,-e.z),this.ringTop.position.copy(this.ring.position);const A=this.crowd,C=1+Math.sin(s*(5+A*3))*(.06+A*.05);return this.ring.scale.setScalar(C*Xi*(1+A*.45)),this.ringTop.scale.copy(this.ring.scale),this.ringTop.visible=o.alive,this.ring.material.opacity=.85+A*.15,this.ring.material.color.setHex(o.hp/o.maxHp<=.3&&Math.sin(s*8)>0?16777215:16769126),this.disc.position.set(e.x,e.y+.07,-e.z),this.disc.scale.setScalar(Xi*(1+A*.45)),this.disc.material.opacity=.18+A*.32,this.arrow.position.set(e.x+Math.sin(a.travel)*1.25,e.y+.12,-(e.z+Math.cos(a.travel)*1.25)),this.arrow.rotation.y=Math.PI-a.travel+Math.PI,this.arrow.visible=o.alive&&a.moving,this.shield.visible=o.shield>0,o.shield>0&&(this.shield.position.set(e.x,e.y+1.1,-e.z),this.shield.material.opacity=.12+Math.min(.15,o.shield/400)+Math.sin(s*6)*.03),u}}const Fh=[7032730,4157338,10115647,5212762,9075263,10108783,4164234],Hn={walker:11125894,dog:5914680,brute:9067168},mn={eye:16722474,coral:16732026,coral2:16751168,mag:14827472},Ms=new fe,kh=new fe,mo=new fe,go=new ui,nr=new En,Oh=new z,Bh=new z,Ea=new Ft,xo=new Ft(1,1,1),mv=new Ft(16738984);class gv{constructor(t){const e=Et([H(k.box,16777215,[0,0,0],[0,0,0],[1,1,1],{tint:1})]);this.litMat=Ji(),this.lit=new yi(e,this.litMat,1100),this.lit.instanceMatrix.setUsage(Rs),this.lit.setColorAt(0,xo),this.lit.frustumCulled=!1,this.lit.count=0,t.add(this.lit);const n=new Bs(.5,0);this.glowMat=new xe({color:16777215}),this.glow=new yi(n,this.glowMat,900),this.glow.instanceMatrix.setUsage(Rs),this.glow.setColorAt(0,xo),this.glow.frustumCulled=!1,this.glow.count=0,t.add(this.glow),this.nl=0,this.ng=0,this.flashTo=xo}begin(){this.nl=0,this.ng=0}end(){this.lit.count=this.nl,this.glow.count=this.ng,this.lit.instanceMatrix.needsUpdate=!0,this.glow.instanceMatrix.needsUpdate=!0,this.lit.instanceColor&&(this.lit.instanceColor.needsUpdate=!0),this.glow.instanceColor&&(this.glow.instanceColor.needsUpdate=!0)}part(t,e,n,s,r,o,a,c,l,f,u,d,h,p,x=!1){const g=x?this.glow:this.lit,m=x?this.ng:this.nl;m>=g.instanceMatrix.count||(nr.set(s,r,o),go.setFromEuler(nr),mo.compose(Oh.set(t,e,n),go,Bh.set(1,1,1)),Ms.makeTranslation(a,c,l),mo.multiply(Ms),Ms.makeScale(f,u,d),mo.multiply(Ms),Ms.multiplyMatrices(kh,mo),g.setMatrixAt(m,Ms),Ea.set(h),p>0&&Ea.lerp(this.flashTo,Math.min(1,p)),g.setColorAt(m,Ea),x?this.ng++:this.nl++)}draw(t,e,n,s,r=null){const o=t.px+(t.x-t.px)*n,a=t.pz+(t.z-t.pz)*n;let c=Math.max(e.height(o,a),Le-.45),l=t.type==="guardian"?(t.enraged?1.17:1.1)*(zr(t.arch).scale||1):t.type==="brute"?1.32:t.type==="dog"?1.4:1.2;if(t.state==="spawn"){const v=Math.max(0,Math.min(1,1-t.timer/.55));c-=(1-v)*(t.type==="guardian"?3:1.6)}let f=0;const u=t.type==="guardian"?.32:t.type==="brute"?.5:.9;let d=t.hitFlash>0?t.hitFlash/.14*u:0;if(this.flashTo=t.type==="guardian"?mv:xo,r){const v=Math.min(1,r.t/(r.dur*.45));f=-(1-(1-v)*(1-v))*(t.type==="dog"?1.2:1.45),c-=Math.max(0,r.t-r.dur*.5)*(t.type==="guardian"?3:2.2),d=Math.max(0,1-r.t*6)}const h=t.state==="stagger"?Math.sin(t.anim*11)*.13:0;nr.set(f,Math.PI-t.face,h,"YXZ"),go.setFromEuler(nr),nr.order="XYZ";let p=l,x=l;if(t.type==="walker"){const v=t.id%3;v===0?(x*=1.16,p*=.86):v===1&&(x*=.9,p*=1.2)}else t.type==="dog"&&t.id%2&&(p*=1.14,x*=.94);kh.compose(Oh.set(o,c,-a),go,Bh.set(p,x,p));const g=Math.hypot(t.vx,t.vz),m=t.anim;switch(t.type){case"walker":this.walker(t,m,g,d);break;case"dog":this.dog(t,m,g,d);break;case"brute":this.brute(t,m,g,d);break;default:this.guardian(t,m,g,d,s)}}walker(t,e,n,s){const r=Fh[t.id%Fh.length],o=e*(3+n*.9),a=Math.min(1,n/3)*.7,c=t.state==="windup"?1:0;this.part(-.14,.92,0,Math.sin(o)*a,0,0,0,-.45,0,.2,.92,.22,3814216,s),this.part(.14,.92,0,-Math.sin(o)*a,0,0,0,-.45,0,.2,.92,.22,3814216,s);const l=t.id%3===2,f=(l?.62:.28)+c*.25,u=l?1.46:1.62,d=l?.42:.22;this.part(0,.9,0,f,Math.sin(o)*.12,Math.sin(e*1.3)*.08,0,.34,0,.56,.7,.34,r,s),this.part(0,u,d,.25+Math.sin(e*2.1)*.15,0,Math.sin(e*1.7)*.2,0,.1,0,.36,.36,.36,Hn.walker,s);const h=(l?-.6:-1.45)-c*.8+Math.sin(o*.5)*.15;t.id%5!==4&&this.part(-.36,1.42,.12,h,0,.15,0,-.33,0,.15,.66,.16,Hn.walker,s),this.part(.36,1.42,.12,h+.2,0,-.15,0,-.33,0,.15,.66,.16,Hn.walker,s),this.part(-.08,u+.12,d+.18,0,0,0,0,0,0,.09,.07,.06,mn.eye,0,!0),this.part(.08,u+.12,d+.18,0,0,0,0,0,0,.09,.07,.06,mn.eye,0,!0),this.part(.24,1.45,-.12,e,e*.7,0,0,0,0,.26,.34,.26,t.id%2?mn.coral:mn.coral2,0,!0),t.id%4===1&&this.part(-.26,1.55,-.1,.4,e*.5,-.5,0,.1,0,.3,.6,.3,mn.mag,0,!0)}dog(t,e,n,s){const r=t.state==="crouch"?1:0,o=t.state==="lunge"?1:0,a=e*(5+n*1.4),c=Math.min(1,n/4)*.9,l=.66-r*.22;this.part(0,l,0,-r*.15+o*.1,0,0,0,0,0,.44,.44,1.15,Hn.dog,s),this.part(0,l+.18,.66,.2+r*.3,0,0,0,0,.12,.36,.34,.44,Hn.dog,s),this.part(0,l+.06,.98,.3+o*.5,0,0,0,-.06,0,.26,.1,.24,8006186,s);const f=[[-.16,.42,0],[.16,.42,Math.PI],[-.16,-.42,Math.PI],[.16,-.42,0]];for(const[u,d,h]of f)this.part(u,l-.1,d,Math.sin(a+h)*c+r*(d>0?-.6:.6),0,0,0,-.26,0,.12,.54,.13,4074534,s);this.part(0,l+.15,-.6,.8+Math.sin(e*9)*.3,0,0,0,.18,0,.08,.4,.08,Hn.dog,s),this.part(-.1,l+.3,.96,0,0,0,0,0,0,.08,.07,.05,mn.eye,0,!0),this.part(.1,l+.3,.96,0,0,0,0,0,0,.08,.07,.05,mn.eye,0,!0),this.part(0,l+.3,.1,0,e,0,0,0,0,.22,.36,.22,mn.coral,0,!0),this.part(0,l+.28,-.3,0,-e,0,0,0,0,.18,.3,.18,mn.coral2,0,!0);for(let u=0;u<3;u++)this.part(0,l+.24,.42-u*.32,-.5-r*.4,0,0,0,.16,0,.07,.34,.07,2759190,s);this.part(0,l+.02,1.08,.2+o*.6,0,0,0,-.04,0,.2,.06,.2,15787728,s)}brute(t,e,n,s){const r=t.state==="slam"?1:0,o=r?Math.max(0,1-t.timer/1):0,a=e*(2+n*.8),c=Math.min(1,n/2)*.45;this.part(-.36,1.05,0,Math.sin(a)*c,0,0,0,-.52,0,.46,1.05,.5,3812936,s),this.part(.36,1.05,0,-Math.sin(a)*c,0,0,0,-.52,0,.46,1.05,.5,3812936,s),this.part(0,1.05,0,.35-o*.3,Math.sin(a)*.08,0,0,.6,0,1.4,1.2,.9,Hn.brute,s),this.part(0,2.2,.45,.3,0,0,0,.1,0,.46,.46,.46,Hn.brute,s);const l=r?-2.6*o-.2:-.5+Math.sin(a)*.25;this.part(-.86,1.95,.2,l,0,.12,0,-.62,0,.46,1.3,.5,Hn.brute,s),this.part(.86,1.95,.2,l,0,-.12,0,-.62,0,.46,1.3,.5,Hn.brute,s),this.part(-.12,2.32,.7,0,0,0,0,0,0,.1,.08,.06,mn.eye,0,!0),this.part(.12,2.32,.7,0,0,0,0,0,0,.1,.08,.06,mn.eye,0,!0);const f=1+Math.sin(e*3.2)*.04;this.part(0,1.6,.42,.3,0,0,0,0,0,1.1*f,.55*f,.12,5910640,s);for(const u of[-1,1])this.part(u*.62,2.35,-.05,-.3,0,u*.5,0,.22,0,.12,.55,.12,15260864,s),this.part(u*.42,2.45,-.25,-.5,0,u*.3,0,.2,0,.1,.45,.1,15260864,s);this.part(-.4,2.15,-.35,.3,e*.5,.2,0,0,0,.5,.75,.5,mn.coral,0,!0),this.part(.35,2.3,-.25,-.2,-e*.4,-.3,0,0,0,.42,.62,.42,mn.mag,0,!0),this.part(.05,1.9,-.5,0,e*.3,0,0,0,0,.36,.5,.36,mn.coral2,0,!0)}guardian(t,e,n,s,r){if(t.burrowed){this.mound(t,e,r);return}switch(t.arch){case"spitter":this.spitter(t,e,n,s,r);break;case"burrower":this.burrower(t,e,n,s,r);break;case"broodmother":this.broodmother(t,e,n,s,r);break;case"ironclad":this.ironclad(t,e,n,s,r);break;case"warden":this.warden(t,e,n,s,r);break;default:this.tollkeeper(t,e,n,s,r)}}mound(t,e,n){const s=t.state==="emerge"?Math.sin(n*40)*.12:0;this.part(s,.25,0,0,e*.6,0,0,0,0,2.4,.8,2.4,6965802,0),this.part(0,.5,0,.3,e*.6+.7,.2,0,0,0,1.5,.7,1.5,5913120,0);for(let o=0;o<4;o++){const a=o*1.57+e*2;this.part(Math.sin(a)*1.5,.35+Math.abs(Math.sin(e*6+o))*.5,Math.cos(a)*1.5,a,a,0,0,0,0,.45,.4,.45,o%2?8018482:4862496,0)}t.state==="emerge"&&(this.part(-.25,.75,.6,0,0,0,0,0,0,.18,.12,.1,16760864,0,!0),this.part(.25,.75,.6,0,0,0,0,0,0,.18,.12,.1,16760864,0,!0))}tollkeeper(t,e,n,s,r){const o=t.state==="chargeWind"?1:0,a=t.state==="charging"?1:0,c=t.state==="cast"||t.state==="bslam"?1:0,l=t.state==="stagger"?1:0,f=t.enraged?1:0,u=e*(1.6+n*.5),d=Math.min(1,n/2)*.4+a*.5,h=1.55,p=8010274;this.part(-.55*h,1.3*h,0,Math.sin(u)*d,0,0,0,-.65*h,0,.62*h,1.3*h,.68*h,2758672,s),this.part(.55*h,1.3*h,0,-Math.sin(u)*d,0,0,0,-.65*h,0,.62*h,1.3*h,.68*h,2758672,s);const x=.2+o*.5+a*.65-c*.2-l*.5;this.part(0,1.3*h,0,x,0,0,0,.75*h,0,1.75*h,1.5*h,1.15*h,p,s),this.part(0,1.3*h,0,x,0,0,0,.45*h,.6*h,1.3*h,.6*h,.1*h,4868690,s);const g=f?Math.sin(r*10)>0?16722458:16742938:16747050;this.part(0,1.3*h,0,x,0,0,0,1.05*h,.6*h,.45*h,.4*h,.1*h,g,0,!0),this.part(0,2.75*h,.35*h,x*.6,0,0,0,.2*h,0,.78*h,.62*h,.78*h,3816004,s);for(const _ of[-1,1])this.part(_*.38*h,3*h,.35*h,-.2,0,-_*.7,0,.35*h,0,.16*h,.85*h,.16*h,15260864,s);const m=f?16722458:16756768;this.part(-.18*h,2.92*h,.75*h,0,0,0,0,0,0,.16*h,.08*h,.06*h,m,0,!0),this.part(.18*h,2.92*h,.75*h,0,0,0,0,0,0,.16*h,.08*h,.06*h,m,0,!0);const v=l?-1.7+Math.sin(e*13)*.6:c?-2.9:o?-1.9:-.7+Math.sin(u)*.25;this.part(-1.15*h,2.5*h,.1*h,v,0,.18,0,-.8*h,0,.58*h,1.7*h,.62*h,p,s),this.part(1.15*h,2.5*h,.1*h,v,0,-.18,0,-.8*h,0,.58*h,1.7*h,.62*h,p,s);for(let _=0;_<4;_++)this.part(1.15*h,2.5*h,.1*h,v,0,-.18,0,-1.7*h,(.25+_*.55)*h,.24*h,.24*h,.56*h,_%2?15921126:13643818,s);for(let _=0;_<3;_++)this.part((_-1)*.5*h,2.45*h,-.55*h,.6,r+_,0,0,.2*h,0,.3*h,.7*h,.3*h,f?16726554:16747050,0,!0)}spitter(t,e,n,s,r){const o=t.state==="cast"?1:0,a=t.state==="stagger"?1:0,c=t.enraged?1:0,l=e*(2.4+n*.9),f=Math.min(1,n/2)*.45,u=4876842;for(const[x,g,m]of[[-.75,.7,0],[.75,.7,Math.PI],[-.75,-.9,Math.PI],[.75,-.9,0]])this.part(x,1.7,g,Math.sin(l+m)*f,0,Math.sign(x)*.3,0,-.85,0,.22,1.8,.22,2438422,s);this.part(0,2,-.1,.1-a*.3,0,0,0,0,0,1.3,.95,2.3,u,s);const d=1+Math.sin(r*5)*.06+o*.25+c*.1,h=c?13172538:9109306;this.part(0,2.75,-.7,.2,0,0,0,0,0,1.35*d,1.2*d,1.45*d,h,0,!0),this.part(0,2.75,-.7,.2,0,0,0,0,0,1.5,.35,.3,2767384,s);const p=-.45-o*.9+a*.4+Math.sin(e*1.3)*.08;this.part(0,2.2,.95,p,0,0,0,.75,0,.45,1.6,.45,u,s),this.part(0,2.2,.95,p,0,0,0,1.6,.35,.85,.55,1.05,5929520,s),this.part(0,2.2,.95,p,0,0,0,1.28-o*.15,.45,.72,.18,.9,9054762,s),this.part(0,2.2,.95,p,0,0,-.22,1.82,.7,.14,.12,.08,c?16726554:14221120,0,!0),this.part(0,2.2,.95,p,0,0,.22,1.82,.7,.14,.12,.08,c?16726554:14221120,0,!0);for(let x=0;x<4;x++)this.part(0,2.45,.6-x*.45,-.3,0,0,0,.2,0,.12,.45,.12,10157898,0,!0)}burrower(t,e,n,s,r){const o=t.state==="surfaced"?1:0,a=t.state==="stagger"?1:0,c=t.enraged?1:0,l=e*(3+n*.9),f=8018482;this.part(0,1.05,0,-a*.2,0,0,0,0,0,2.6,1.35,3.2,f,s);for(let d=0;d<4;d++){const h=o*(.25+Math.sin(r*14+d)*.05);this.part(0,1.8+h,1.05-d*.78,-.15-d*.12-o*.25,0,0,0,0,0,2.9-d*.2,.5,.85,11043914,s),(o||c)&&this.part(0,1.68,.7-d*.78,0,0,0,0,0,0,2.3-d*.2,.18,.25,o?16738858:16726554,0,!0)}for(const d of[-1,1]){const h=Math.sin(l+(d>0?Math.PI:0))*.4*Math.min(1,n/2);this.part(d*1.25,1,1.4,h-.2,0,0,0,-.15,.7,.55,.38,1.4,12098154,s);for(let p=-1;p<=1;p++)this.part(d*1.25,1,1.4,h-.2,0,0,p*.18,-.3,1.5,.12,.14,.5,15788240,s)}this.part(0,1,1.95,.1,0,0,0,0,0,1.05,.62,.8,5913120,s);const u=c?16722458:16760864;for(const[d,h]of[[-.3,.15],[.3,.15],[-.18,.32],[.18,.32]])this.part(d,1+h,2.36,0,0,0,0,0,0,.12,.1,.06,u,0,!0);this.part(0,.85,-2,.3,Math.sin(e*2)*.3,0,0,0,-.4,.55,.45,1.2,f,s)}broodmother(t,e,n,s,r){const o=t.state==="cast"?1:0,a=t.state==="stagger"?1:0,c=t.enraged?1:0,l=e*(3+n*1.2),f=3805224;for(const h of[-1,1])for(let p=0;p<3;p++){const x=Math.sin(l+p*2.1+(h>0?1:0))*.3*Math.min(1,n/1.5);this.part(h*1,1.75,.6-p*1,x,0,h*(.95-a*.3),0,-1,0,.17,2.1,.17,f,s)}const u=1+Math.sin(r*2.4)*.05+o*.12+c*.08;this.part(0,2.15,-1.05,.15,0,0,0,0,0,2.7*u,2.3*u,3.1*u,8006234,s),[[-1.2,2.5,-.5],[1.2,2.5,-.5],[-1.05,1.8,-1.7],[1.05,1.8,-1.7],[0,3.35,-1.1],[0,2.9,-2.4],[-.6,3.1,-.1],[.6,3.1,-.1]].forEach(([h,p,x],g)=>{const m=.42+Math.sin(r*4+g*1.7)*.07+o*.12;this.part(h*u,p,x*u,0,r+g,0,0,0,0,m,m*1.15,m,c&&g%2?16730730:16743120,0,!0)}),this.part(0,2.3,.85,-.2-a*.3,0,0,0,0,0,1.4,1.3,1.3,5904960,s),this.part(0,2.95,1.5,-.1,0,0,0,0,0,.82,.7,.82,4853808,s);for(const[h,p]of[[-.22,.05],[.22,.05],[-.12,.22],[.12,.22]])this.part(h,2.95+p,1.92,0,0,0,0,0,0,.1,.09,.05,c?16722474:16730864,0,!0);for(const h of[-1,1])this.part(h*.72,2.6,1.2,-.9-o*.8+Math.sin(l*.5)*.2,0,h*-.3,0,-.9,0,.18,1.85,.18,f,s)}ironclad(t,e,n,s,r){const o=t.state==="exposed"?1:0,a=t.state==="quakeWind"||t.state==="chargeWind"?1:0,c=t.state==="charging"?1:0,l=t.state==="stagger"?1:0,f=t.enraged?1:0,u=e*(1.4+n*.45),d=Math.min(1,n/2)*.35+c*.5,h=1.55,p=6978704;this.part(-.58*h,1.3*h,0,Math.sin(u)*d,0,0,0,-.65*h,0,.78*h,1.3*h,.82*h,2763316,s),this.part(.58*h,1.3*h,0,-Math.sin(u)*d,0,0,0,-.65*h,0,.78*h,1.3*h,.82*h,2763316,s),this.part(-.58*h,1.3*h,0,Math.sin(u)*d,0,0,0,-.75*h,.42*h,.8*h,.75*h,.1*h,p,s),this.part(.58*h,1.3*h,0,-Math.sin(u)*d,0,0,0,-.75*h,.42*h,.8*h,.75*h,.1*h,p,s);const x=.15+c*.55+a*.2-l*.45;this.part(0,1.3*h,0,x,0,0,0,.75*h,0,1.6*h,1.45*h,1.05*h,2763316,s);const g=o?Math.sin(r*16)>0?16742938:16756794:f?10103322:5909018,m=o?.95:.55;this.part(0,1.3*h,0,x,0,0,0,.85*h,.5*h,m*h,m*h,.12*h,g,0,!0),this.part(0,2.6*h,.6*h,x-o*1.25,0,0,0,-.6*h,.08*h,1.85*h,1.2*h,.25*h,p,s);for(const[_,M]of[[-.7,-.25],[.7,-.25],[-.7,-.95],[.7,-.95]])this.part(0,2.6*h,.6*h,x-o*1.25,0,0,_*h,M*h,.22*h,.12*h,.12*h,.08*h,12635352,s);for(const _ of[-1,1])this.part(_*1*h,2.75*h,0,0,0,_*(-.15-o*.9),_*.1*h,.1*h,0,.95*h,.5*h,1.15*h,8031392,s);this.part(0,2.85*h,.25*h,x*.5,0,0,0,.2*h,0,.78*h,.62*h,.78*h,p,s),this.part(0,2.85*h,.25*h,x*.5,0,0,0,.22*h,.4*h,.6*h,.09*h,.05*h,f?16726554:9099519,0,!0);const v=l?-1.6+Math.sin(e*13)*.5:a?-2.6:-.5+Math.sin(u)*.2;for(const _ of[-1,1])this.part(_*1.18*h,2.5*h,.1*h,v,0,-_*.16,0,-.8*h,0,.6*h,1.7*h,.64*h,5925500,s),this.part(_*1.18*h,2.5*h,.1*h,v,0,-_*.16,0,-1.75*h,0,.75*h,.6*h,.75*h,3818576,s)}warden(t,e,n,s,r){const o=t.state==="chargeWind"?1:0,a=t.state==="charging"?1:0,c=t.state==="cast"||t.state==="bslam"?1:0,l=t.state==="stagger"?1:0,f=t.enraged?1:0,u=e*(1.6+n*.5),d=Math.min(1,n/2)*.4+a*.5,h=1.6,p=2365498;this.part(-.5*h,1.35*h,0,Math.sin(u)*d,0,0,0,-.68*h,0,.55*h,1.36*h,.6*h,1313824,s),this.part(.5*h,1.35*h,0,-Math.sin(u)*d,0,0,0,-.68*h,0,.55*h,1.36*h,.6*h,1313824,s);const x=.18+o*.45+a*.6-c*.2-l*.5;this.part(0,1.35*h,0,x,0,0,0,.8*h,0,1.5*h,1.6*h,1*h,p,s);for(const v of[-1,1])this.part(v*.48*h,2.55*h,-.5*h,.25+x*.5+Math.sin(e*2+v)*.08,0,v*.12,0,-1.2*h,-.1*h,.85*h,2.5*h,.12*h,3021384,s);const g=f?Math.sin(r*12)>0?16726554:16747050:16765803;this.part(0,1.35*h,0,x,0,0,0,1.1*h,.52*h,.4*h,.55*h,.1*h,g,0,!0),this.part(0,2.85*h,.25*h,x*.6,0,0,0,.2*h,0,.66*h,.6*h,.66*h,1708072,s),this.part(-.15*h,3.08*h,.6*h,0,0,0,0,0,0,.13*h,.09*h,.06*h,g,0,!0),this.part(.15*h,3.08*h,.6*h,0,0,0,0,0,0,.13*h,.09*h,.06*h,g,0,!0);for(let v=0;v<6;v++){const _=v/6*Math.PI*2+r*.4;this.part(Math.sin(_)*.38*h,3.3*h,.25*h+Math.cos(_)*.38*h,.2*Math.cos(_),0,-.2*Math.sin(_),0,.2*h,0,.14*h,(.5+v%2*.25)*h,.14*h,v%2?11563263:g,0,!0)}const m=l?-1.7+Math.sin(e*13)*.6:c?-2.6:o?-.3:-.6+Math.sin(u)*.25;this.part(-1.05*h,2.5*h,.1*h,m,0,.18,0,-.85*h,0,.5*h,1.75*h,.55*h,p,s),this.part(1.05*h,2.5*h,.1*h,m*.6-.4,0,-.18,0,-.85*h,0,.5*h,1.75*h,.55*h,p,s),this.part(1.05*h,2.5*h,.1*h,m*.6-.4,0,-.18,0,-1.95*h,.1*h,.5*h,.6*h,.5*h,2760752,s),this.part(1.05*h,2.5*h,.1*h,m*.6-.4,0,-.18,0,-1.95*h,.1*h,.34*h,.42*h,.34*h,g,0,!0)}}const Ku=.6717,xv=30,_v=21.7*Math.pow(1/.42,Ku),Wc=1.5,Zu=1.5,He={sidearm:{key:"sidearm",name:"Sidearm",role:"Long single shots",interval:.42,perVolley:1,damage:22,speed:46,spread:.03,color:16769626,splash:0,splashDamage:0,minRange:0,size:.16},scattergun:{key:"scattergun",name:"Scattergun",role:"Close crowd spray",interval:.9929,perVolley:5,damage:11,speed:38,spread:.36,color:16747050,splash:0,splashDamage:0,minRange:0,size:.13},burst:{key:"burst",name:"Burst rifle",role:"Mid-range bursts",interval:.6527,perVolley:3,damage:14,speed:54,spread:.05,burstGap:.07,color:8256767,splash:0,splashDamage:0,minRange:0,size:.15},arc:{key:"arc",name:"Arc launcher",role:"Splash for packs & giants",interval:.9518,perVolley:1,damage:48,speed:27,spread:0,color:13855743,splash:3.4,splashDamage:30,minRange:3.2,size:.32}},Yi=Object.keys(He);function Ju(i,t=!1){return 1/He[i].interval*(t?Wc:1)}function vv(i,t=!1){return Ju(i,t)*He[i].perVolley}function Xn(i,t=!1){return Math.min(xv,_v*Math.pow(vv(i,t),-Ku))}function Qu(i,t=0,e=!1){return He[i].damage*(1+.15*t)*(e?Zu:1)}const Hh={walker:1,dog:1.35,brute:1.55,guardian:2.8};function Mv(i){let t=i;const{x:e,z:n,owned:s,rapid:r}=t,o={};let a=0;for(const u of s)o[u]=Xn(u,r),o[u]>a&&(a=o[u]);let c=null,l=-1/0;const f=t.enemies;for(let u=0;u<f.length;u++){const d=f[u];if(!d.targetable)continue;const h=Math.hypot(d.x-e,d.z-n);if(h-d.radius*.6>a)continue;let p=(Hh[d.type]||1)*(26/(h+3));(d.state==="crouch"||d.state==="lunge"||d.state==="charging")&&(p+=2.5),(d.state==="windup"||d.state==="slam")&&(p+=1.2),d.type==="guardian"&&(p+=.6),d.shielded&&(p*=.3),p>l&&(l=p,c={e:d,d:h})}if(c){let u=0;for(let v=0;v<f.length;v++){const _=f[v];_.targetable&&Math.abs(_.x-e)<7&&Math.abs(_.z-n)<7&&Math.hypot(_.x-e,_.z-n)<7&&u++}let d=!1;for(let v=0;v<f.length;v++){const _=f[v];_.type==="guardian"&&_.targetable&&!_.shielded&&Math.hypot(_.x-e,_.z-n)-_.radius*.6<=a&&(d=!0)}const h=d?"boss":u>=4||t.cls==="crowd"&&u>=2?"crowd":"single",p={single:0,crowd:1,boss:2},x=t.held!==void 0&&p[h]>p[t.cls||"single"];t=x?{...t,held:vc,margin:1.25}:t;const g=Gh(t,c.e,c.d,o);if(g&&!x&&g!==t.current&&t.held!==void 0&&o[t.current]!==void 0){const v=He[t.current];let _=null,M=-1/0;for(let w=0;w<f.length;w++){const T=f[w];if(!T.targetable)continue;const A=Math.hypot(T.x-e,T.z-n);if(A-T.radius*.6>o[t.current]||v.minRange&&A<v.minRange)continue;const C=(Hh[T.type]||1)*(26/(A+3));C>M&&(M=C,_={e:T,d:A})}if(_&&M>l*(t.held<vc?.1:.2))return{kind:"enemy",target:_.e,weapon:t.current,dist:_.d,cls:h}}if(g)return{kind:"enemy",target:c.e,weapon:g,dist:c.d,cls:h}}if(!c&&t.containers&&t.containers.length){let u=null,d=1/0;for(const h of t.containers){const p=Math.hypot(h.x-e,h.z-n);p-h.radius*.5>a||p<d&&(d=p,u=h)}if(u){const h=t.current&&He[t.current];if(h&&o[t.current]!==void 0&&d-u.radius*.5<=o[t.current]&&!(h.minRange&&d<h.minRange))return{kind:"container",target:u,weapon:t.current,dist:d};const p=Gh(t,{...u,type:"container",radius:u.radius},d,o);if(p)return{kind:"container",target:u,weapon:p,dist:d}}}return null}const vc=4,yv=2;function Gh(i,t,e,n){const s=bv(i.enemies,t,3.4),r=t.radius||.5;let o=null,a=-1/0,c=-1/0;for(const l of i.owned){const f=He[l],u=n?n[l]:Xn(l,i.rapid);if(e-r*.6>u||f.minRange&&e<f.minRange)continue;const d=Qu(l,i.levels&&i.levels[l]||0,i.power),h=Ju(l,i.rapid);let p;if(l==="scattergun"){const x=Math.max(.3,e*Math.tan(f.spread/2)*2),g=Math.min(1,(r*2+.25)/x),m=Math.min(s,4)*.22;p=d*f.perVolley*h*Math.min(1.4,g+m)}else if(l==="arc"){const x=s>=2?Math.min(s,6):0,g=f.splashDamage*(i.power?Zu:1)*x*.45;p=(d+g)*h*(r>.9&&e>7?1.25:1),e<6&&(p*=.7),e>22&&r<=.9&&(p*=.75),!x&&r<=.9&&(p*=.75),t.type==="container"&&(p*=.6)}else if(l==="burst"){const x=e>10?.85:1;p=d*f.perVolley*h*x*(r>.9?1.1:1)}else p=d*h*(e>12&&r<=.9?1.25:1);l===i.current&&(p*=1.12,c=p),p>a&&(a=p,o=l)}return i.held!==void 0&&o!==i.current&&c>-1/0&&(i.held<vc||a<c*(i.margin||yv))?i.current:o}function bv(i,t,e){let n=0;const s=e*e;for(let r=0;r<i.length;r++){const o=i[r];if(o===t||!o.targetable)continue;const a=o.x-t.x,c=o.z-t.z;a*a+c*c<s&&n++}return n}const hi={walker:{speed:4.2,hp:20,radius:.5,damage:7,reach:.95,windup:.32,cooldown:.85,mass:1,drop:.05,score:1},dog:{speed:7.8,hp:14,radius:.48,damage:8,reach:.8,windup:.2,cooldown:.8,chargeRange:9,chargeWind:.45,chargeSpeed:13.5,chargeTime:.62,chargeCooldown:2.4,mass:.7,drop:.05,score:1},brute:{speed:2.8,hp:140,radius:1.05,damage:22,reach:1.5,windup:.5,cooldown:1.6,slamRange:4.6,slamRadius:3.7,slamWind:1,slamCooldown:2.6,mass:4,drop:.35,score:3},guardian:{speed:3.3,hp:1e3,radius:1.85,damage:18,reach:2.2,windup:.6,cooldown:1.4,chargeSpeed:15.5,chargeWind:1.05,chargeDamage:26,eruptWind:1.25,eruptRadius:2.5,eruptDamage:18,slamRadius:4.6,slamWind:.95,slamDamage:22,mass:30,drop:1,score:25}},Vh=.7,Wh=[.64,.75,.82,.87,.91,.95];function tf(i){return Wh[Math.max(0,Math.min(Wh.length-1,i|0))]}function Sv(i,t,e){const n=[],s=.14+t*.05,r=t>=1?.04+t*.03:0,o=t>=4?2:1;for(let a=0;a<e;a++){const c=i();c<r&&n.filter(l=>l==="brute").length<o?n.push("brute"):c<r+s?n.push("dog"):n.push("walker")}return n}function ef(i,t,e,n=!1){const s=["walker","dog"],r=t===0?0:n?t>=2?1:0:t>=3?2:1;for(let o=0;o<r&&s.length<e;o++)s.push("brute");for(;s.length<e;)s.push(i()<.26+t*.02?"dog":"walker");return s}function wv(i,t,e){const n=[],s=1+Math.floor(t/2)+(i()<.5?1:0);for(let r=0;r<s;r++)n.push("brute");for(;n.length<e;)n.push(i()<.26+t*.04?"dog":"walker");return n}const Ev=[[20,24],[22,27],[23,29],[24,30],[25,31],[26,32]],Tv=[[20,23],[21,25],[22,26],[22,27],[22,28],[23,28]];function Av(i,t,e){const n=hi[i].hp;return i==="guardian"?fv(t,e):Math.round(n*(1+t*.16))}function Ls(i,t,e,n,s,r,o,a={}){const c=hi[t],l=Av(t,s,r),f={id:i,type:t,x:e,z:n,px:e,pz:n,vx:0,vz:0,hp:l,maxHp:l,radius:c.radius,state:"spawn",timer:.55,cd:.6+o()*.6,flank:(o()-.5)*1.6,face:0,hitFlash:0,lungeHit:!1,lx:0,lz:0,boss:t==="guardian",escort:!1,nextAttack:2.4,nextCall:0,anim:o()*10,kx:0,kz:0,...a};if(t==="guardian"){const u=Vc(s);f.arch=u.key,f.radius=u.radius}return f}function Xc(i){return i.state!=="spawn"&&i.state!=="dead"&&i.hp>0&&!i.burrowed}function Cv(i,t,e){const n=i.player,s=i.enemies,r=s.length,o=tf(i.legIndex),a={slams:0,dogs:0};for(const c of i.hazards)c.src==="slam"&&a.slams++;for(const c of s)c.type==="dog"&&(c.state==="crouch"||c.state==="lunge")&&a.dogs++;for(let c=0;c<r;c++){const l=s[c];l.px=l.x,l.pz=l.z,l.hitFlash>0&&(l.hitFlash=Math.max(0,l.hitFlash-t)),l.anim+=t;const f=hi[l.type],u=n.x-l.x,d=n.z-l.z,h=Math.hypot(u,d)||1e-4,p=u/h,x=d/h,g=h-l.radius-n.radius;let m=0,v=0,_=10;if(l.state==="spawn"){l.timer-=t,l.timer<=0&&(l.state="chase"),l.face=Math.atan2(p,x);continue}if(l.cd-=t,l.boss)e.stepBoss(l,t,h,p,x),m=l.tvx||0,v=l.tvz||0,_=l.state==="charging"?40:8;else if(!n.alive)l.state="chase",m=-p*f.speed*.3,v=-x*f.speed*.3;else if(l.fleeing)l.state="flee",m=-p*f.speed*1.15+x*l.flank*1.5,v=-x*f.speed*1.15-p*l.flank*1.5,l.face=Math.atan2(m,v);else switch(l.state){case"chase":{const w=l.flank*un((h-3)/14,0,1),T=Math.cos(w),A=Math.sin(w),C=p*T-x*A,b=p*A+x*T;let y=f.speed;if(h>34&&(y*=1.25),m=C*y,v=b*y,l.face=Math.atan2(C,b),l.type==="dog"&&h<f.chargeRange&&h>2.2&&l.cd<=0&&a.dogs<2){a.dogs++,l.state="crouch",l.timer=f.chargeWind;const D=.35,N=n.x+n.vx*D-l.x,Y=n.z+n.vz*D-l.z,q=Math.hypot(N,Y)||1;l.lx=N/q,l.lz=Y/q,l.face=Math.atan2(l.lx,l.lz),e.emit({t:"dogCrouch",x:l.x,z:l.z})}else if(l.type==="brute"&&h<f.slamRange&&l.cd<=0&&a.slams<1){a.slams++,l.state="slam",l.timer=f.slamWind;const D=l.x+p*1.6,N=l.z+x*1.6;e.addHazard({kind:"circle",x:D,z:N,r:f.slamRadius,t:f.slamWind,total:f.slamWind,damage:Math.round((f.damage+i.legIndex*2)*o),heavy:!0,owner:l.id,src:"slam"}),e.emit({t:"bruteSlamWarn",x:l.x,z:l.z})}else g<f.reach&&l.cd<=0&&(l.state="windup",l.timer=f.windup);break}case"windup":l.timer-=t,m=p*.6,v=x*.6,l.face=Math.atan2(p,x),l.timer<=0&&(g<f.reach+.45&&e.damagePlayer(Math.round((f.damage+i.legIndex)*o*(l.escort?Vh:1)),!1,l.x,l.z,l.type),l.state="recover",l.timer=.35,l.cd=f.cooldown);break;case"crouch":l.timer-=t,l.face=Math.atan2(l.lx,l.lz),l.timer<=0&&(l.state="lunge",l.timer=f.chargeTime,l.lungeHit=!1);break;case"lunge":l.timer-=t,m=l.lx*f.chargeSpeed,v=l.lz*f.chargeSpeed,_=60,!l.lungeHit&&g<.35&&(l.lungeHit=!0,e.damagePlayer(Math.round((f.damage+2+i.legIndex)*o*(l.escort?Vh:1)),!1,l.x,l.z,"dog")),l.timer<=0&&(l.state="recover",l.timer=.6,l.cd=f.chargeCooldown);break;case"slam":l.timer-=t,l.face=Math.atan2(p,x),l.timer<=0&&(l.state="recover",l.timer=.75,l.cd=f.slamCooldown,e.emit({t:"slam",x:l.x,z:l.z,big:!1}));break;default:l.timer-=t,m=p*f.speed*.25,v=x*f.speed*.25,l.timer<=0&&(l.state="chase");break}l.kx*=Math.max(0,1-8*t),l.kz*=Math.max(0,1-8*t);const M=Math.min(1,_*t);l.vx+=(m-l.vx)*M,l.vz+=(v-l.vz)*M,l.x+=(l.vx+l.kx)*t,l.z+=(l.vz+l.kz)*t}for(let c=0;c<r;c++){const l=s[c];if(!(l.state==="spawn"||l.burrowed))for(let f=c+1;f<r;f++){const u=s[f];if(u.state==="spawn"||u.burrowed)continue;const d=u.x-l.x,h=u.z-l.z,p=(l.radius+u.radius)*.92,x=d*d+h*h;if(x>=p*p||x<1e-8)continue;const g=Math.sqrt(x),m=(p-g)*.5,v=hi[l.type].mass,_=hi[u.type].mass,M=_/(v+_),w=v/(v+_),T=d/g,A=h/g;l.x-=T*m*M*2,l.z-=A*m*M*2,u.x+=T*m*w*2,u.z+=A*m*w*2}}for(let c=0;c<r;c++){const l=s[c];if(l.state==="spawn"||l.burrowed)continue;const f=l.x-n.x,u=l.z-n.z,d=l.radius+n.radius*.9,h=f*f+u*u;if(h<d*d&&h>1e-8&&n.alive){const x=Math.sqrt(h),g=d-x;l.x+=f/x*g,l.z+=u/x*g,!l.boss&&l.type!=="dog"&&!l.fleeing&&(n.grab=Math.max(n.grab||0,.35))}if(l.state==="charging")continue;const p=e.world.obstaclesNear(l.z,l.radius+3);for(let x=0;x<p.length;x++){const g=p[x];if(Math.abs(g.z-l.z)>16)continue;const m=xc(g,l.x,l.z,l.radius*.85);m&&(l.x+=m[0],l.z+=m[1],l.x+=-m[1]*.08*Math.sign(l.flank||1),l.z+=m[0]*.08*Math.sign(l.flank||1))}}}const fr=1/60,ko=72,Ts=3,wi=20,bs={forward:9,lateral:8.2,back:6.8,lateralBoot:11.2,backBoot:10.6},nf=5.5,sf=18,Rv=.8,Pv=.55,Iv=.28,Xh=.6,Lv=15,Dv=.5,rf=2.5,zv=170,Uv=.85,ir=new Map;function Ne(i){const t=`${i.seed}:${i.mode}`;let e=ir.get(t);return e||(e=F1(i.seed,i.mode),ir.set(t,e),ir.size>4&&ir.delete(ir.keys().next().value)),e}function Ur(i){return{cycle:0,t:0,nextPack:i===0?3.5:5,ambushDone:!1,intro:i===0}}function qc(i){return Dn(i).z-Fo}function of(i){const t=Ne(i),e=i.player,n=Dn(i),s=e.x-t.roadX(e.z);if(i.boss.defeated){const o=n.z-e.z;if(Math.abs(s)>4.5&&o>-2){const a=Math.min(n.z-4,e.z+Math.max(4,Math.min(12,Math.abs(s)*.6)));return{x:t.roadX(a),z:a,kind:"road"}}return{x:n.x,z:n.z,kind:"refuge"}}const r=Math.min(e.z+14,qc(i)-2);return{x:t.roadX(r),z:r,kind:Math.abs(s)>t.clearHalf(e.z)+1.2?"road":"ahead"}}function Rr(){return{active:!1,defeated:!1,id:null,nextCall:0,calls:0,hp:0,maxHp:0,staggered:!1,enraged:!1}}function Yc({seed:i=1,mode:t="journey"}={}){const e={version:Ts,seed:i>>>0,mode:Xe[t]?t:"journey",time:0,rngState:li(i>>>0,"sim"),legIndex:0,legStartTime:0,legTimes:[],phase:"travel",failReason:null,player:null,facing:av(0),loadout:{owned:["sidearm","scattergun"],levels:{}},weapon:{current:"sidearm",cd:.4},powerups:{rapid:0,power:0,evasion:0},enemies:[],projectiles:[],drops:[],hazards:[],pending:[],containers:{},encounter:Ur(0),boss:Rr(),nextId:1,stats:{kills:0,shots:0,damageTaken:0,containers:0,pickups:0,peakAlive:0,packs:0,ambushes:0,calls:0,packSizes:[],ambushSizes:[],escortSizes:[],callSizes:[]},hints:{stuck:0,boundary:0,cooldown:0,gate:0,zap:0,idle:0,far:0,bossCd:0},events:[]},n=Ne(e);return e.player=$c(n.roadX(0),0),e}function $c(i,t){return{x:i,z:t,px:i,pz:t,vx:0,vz:0,kx:0,kz:0,hp:100,maxHp:100,parcel:100,shield:0,alive:!0,radius:.45,hurtCd:0,heavyCd:0,hurtFlash:0,calm:0,ix:0,iz:0,walk:0,speed:0,grab:0}}const $i=i=>Bu(i,"rngState"),jt=(i,t)=>{i.events.length<600&&i.events.push(t)};function jc(i){let t=i.enemies.length;for(const e of i.pending)t+=e.types.length;return t}function Dn(i){const t=Ne(i);return t.refuges[Math.min(i.legIndex,t.refuges.length-1)]}function af(i,t={mx:0,mz:0}){if(i.phase!=="travel")return i;const e=fr,n=Ne(i),s=$i(i);i.time+=e,Fv(i,t,e,n);for(const r of["rapid","power","evasion"])i.powerups[r]>0&&(i.powerups[r]=Math.max(0,i.powerups[r]-e),i.powerups[r]===0&&jt(i,{t:"powerupEnd",kind:r}));return Ov(i,e,n,s),Hv(i,e,n),Cv(i,e,{world:n,emit:r=>jt(i,r),damagePlayer:(r,o,a,c,l)=>Oo(i,r,o,a,c,l),addHazard:r=>oi(i,r),stepBoss:(r,o,a,c,l)=>Kv(i,r,o,a,c,l,s)}),Yv(i,e),e2(i,e,n,s),n2(i,e,n,s),s2(i,e),i2(i),i.enemies.length>i.stats.peakAlive&&(i.stats.peakAlive=i.enemies.length),uf(i),i}function Nv(i,t){const e=t?bs.lateralBoot:bs.lateral,n=t?bs.backBoot:bs.back,s=i*i;return i>=0?bs.forward*s+e*(1-s):n*s+e*(1-s)}function Fv(i,t,e,n){const s=i.player,r=i.hints;s.px=s.x,s.pz=s.z,s.hurtCd>0&&(s.hurtCd-=e),s.heavyCd>0&&(s.heavyCd-=e),s.hurtFlash>0&&(s.hurtFlash-=e),s.grab>0&&(s.grab-=e),s.invuln>0&&(s.invuln-=e),s.iframe>0&&(s.iframe-=e),r.cooldown>0&&(r.cooldown-=e),r.bossCd>0&&(r.bossCd-=e),r.zap>0&&(r.zap-=e);let o=t.mx||0,a=t.mz||0,c=Math.hypot(o,a);s.alive||(o=0,a=0,c=0),c>1&&(o/=c,a/=c,c=1),s.ix=o,s.iz=a,s.escape>0&&c>.04&&(s.escape-=e,o=s.ex,a=s.ez,c=1);let l=0,f=0,u=0;if(c>.04){let V=o/c,Z=a/c;if(c>.3&&!(i.boss.active&&!i.boss.defeated)&&!(s.escape>0)){const K=n.roadDir(s.z+3),mt=Math.atan2(V,Z);let xt=mt-K;if(xt=Math.atan2(Math.sin(xt),Math.cos(xt)),Math.abs(xt)<Xh){const _t=s.x-n.roadX(s.z),Dt=n.roadInfo(s.z).halfWidth,ne=Math.abs(_t)>Dt*.5?un(-_t*.05,-.22,.22):0,re=Math.min(1,(1-Math.abs(xt)/Xh)*2.4)*.85;let ft=K+ne-mt;ft=Math.atan2(Math.sin(ft),Math.cos(ft));const U=mt+ft*re;V=Math.sin(U),Z=Math.cos(U)}}const ct=Nv(Z,i.powerups.evasion>0)*Math.min(1,c)*((s.grab||0)>0?Rv:1);l=V*ct,f=Z*ct,u=ct}const d=Math.min(1,20*e);s.vx+=(l-s.vx)*d,s.vz+=(f-s.vz)*d,s.kx*=Math.max(0,1-7*e),s.kz*=Math.max(0,1-7*e);const h=s.vx+s.kx,p=Math.min(bs.forward,s.vz+s.kz),x=s.x,g=s.z;s.x+=h*e,s.z+=p*e;const m=qh(i,n,s);if(u>2&&(m[0]||m[1])){const V=Math.hypot(m[0],m[1]),Z=m[0]/V,ct=m[1]/V,K=o/c,mt=a/c,xt=-(K*Z+mt*ct);if(xt>.45){let _t=-ct,Dt=Z,ne=_t*K+Dt*mt;if(ne<0&&(_t=-_t,Dt=-Dt,ne=-ne),ne<.25){const re=Math.sign(n.roadX(s.z)-s.x)||1;Math.abs(_t)>.6?Math.sign(_t)!==re&&(_t=-_t,Dt=-Dt):Dt<0&&(_t=-_t,Dt=-Dt),ne=.5}if(ne>0){const re=u*Uv*xt;s.x+=_t*re*e,s.z+=Dt*re*e,qh(i,n,s)}}}const v=Math.hypot(s.x-x,s.z-g)/e;if(u>2&&(m[0]||m[1])&&v<u*.25&&!(s.escape>0)?s.wedge=(s.wedge||0)+e:s.wedge=Math.max(0,(s.wedge||0)-e*2),s.wedge>Pv){s.wedge=0,s.escape=.42;const V=Math.sign(n.roadX(s.z)-s.x)||1;let Z=-o/(c||1)+V*.9,ct=-a/(c||1)*.6;const K=Math.hypot(Z,ct)||1;s.ex=Z/K,s.ez=ct/K}let _=!1,M=!1;const w=Dn(i),T=!i.boss.defeated,A=T?w.z-Fo:w.z+4,C=i.legIndex>0?n.refuges[i.legIndex-1].z-30:-14;s.z>A&&(s.z=A,_=a>.3,M=T&&a>.3,s.vz>0&&(s.vz=0)),s.z<C&&(s.z=C,_=a<-.3);const b=n.lateralBounds(s.z),y=n.roadX(s.z),D=s.x-y;D<b.min&&(s.x=y+b.min,_=_||o<-.3),D>b.max&&(s.x=y+b.max,_=_||o>.3);const N=Math.hypot(s.x-x,s.z-g)/e;if(s.speed=N,s.walk+=N*e,M?(r.gate=(r.gate||0)+e,(r.zap||0)<=0&&(r.zap=.9,s.kz=Math.min(s.kz,-13),jt(i,{t:"gateZap",x:s.x,z:A+.4}))):r.gate=Math.max(0,(r.gate||0)-e),u>2&&N<u*.3?_?r.boundary+=e:r.stuck+=e:(r.stuck=Math.max(0,r.stuck-e*2),r.boundary=Math.max(0,r.boundary-e*2)),r.gate>.45&&(r.bossCd||0)<=0)jt(i,{t:"hint",kind:i.boss.active?"gate":"gateAhead"}),r.bossCd=4.5,r.gate=0,r.boundary=0;else if(r.cooldown<=0){if(r.stuck>1.6)jt(i,{t:"hint",kind:"blocked"}),r.cooldown=7,r.stuck=0;else if(r.boundary>2.2&&!M){const V=!T&&s.z>=A-.01;jt(i,{t:"hint",kind:V?"refuge":"edge"}),r.cooldown=16,r.boundary=0}}if(i.boss.active&&!i.boss.defeated&&s.alive){const V=i.enemies.find(ct=>ct.boss);r.idle=N<1.5?(r.idle||0)+e:Math.max(0,(r.idle||0)-e*2);const Z=V&&Math.hypot(V.x-s.x,V.z-s.z)>26;r.far=Z?(r.far||0)+e:0,(r.bossCd||0)<=0&&(r.idle>2.2?(jt(i,{t:"hint",kind:"bossMove"}),r.bossCd=6,r.idle=0):r.far>9&&(jt(i,{t:"hint",kind:"bossFind"}),r.bossCd=8,r.far=0))}else r.idle=0,r.far=0;cv(i.facing,e,o,a);let q=!1;for(const V of i.enemies)if(Math.abs(V.x-s.x)<16&&Math.abs(V.z-s.z)<16){q=!0;break}q||i.hazards.length?s.calm=0:s.calm+=e,s.alive&&s.calm>3&&s.hp<s.maxHp*.7&&(s.hp=Math.min(s.maxHp*.7,s.hp+2.5*e))}function qh(i,t,e){let n=0,s=0;for(let r=0;r<2;r++){const o=t.obstaclesNear(e.z,4);for(let c=0;c<o.length;c++){const l=o[c];if(Math.abs(l.z-e.z)>16)continue;const f=xc(l,e.x,e.z,e.radius);f&&(e.x+=f[0],e.z+=f[1],n+=f[0],s+=f[1])}const a=t.containersNear(e.z-3,e.z+3);for(const c of a){if(i.containers[c.id]===0)continue;const l=xc({shape:"c",x:c.x,z:c.z,r:.7},e.x,e.z,e.radius);l&&(e.x+=l[0],e.z+=l[1],n+=l[0],s+=l[1])}}return[n,s]}function Oo(i,t,e,n,s,r="enemy"){const o=i.player;if(!o.alive||i.phase!=="travel")return 0;if(r==="qa")o.iframe=0,o.hitLog=[];else if(o.invuln>0||o.iframe>0)return 0;if(!e&&o.hurtCd>0||e&&o.heavyCd>0)return 0;const a=i.time;o.hitLog=(o.hitLog||[]).filter(g=>a-g[0]<1);let c=0;for(const g of o.hitLog)c+=g[1];const l=o.maxHp*Iv-c;if(l<=.5&&r!=="qa")return 0;r!=="qa"&&(t=Math.min(t,l)),o.hitLog.push([a,t]),e&&(o.heavyCd=.2),o.hurtCd=e?.12:.3,t>=Lv&&(o.iframe=Dv);let f=t,u=0;o.shield>0&&(u=Math.min(o.shield,f),o.shield-=u,f-=u,o.shield<=.01&&(o.shield=0,jt(i,{t:"shieldBreak"}))),o.hp-=f,o.parcel=Math.max(0,o.parcel-t*(e?.28:.05)),o.hurtFlash=.25,o.calm=0,i.stats.damageTaken+=t;const d=o.x-n,h=o.z-s,p=Math.hypot(d,h)||1,x=e?9:3;return o.kx+=d/p*x,o.kz+=h/p*x,jt(i,{t:"playerHit",dmg:Math.round(f),absorbed:Math.round(u),heavy:e,src:r,x:o.x,z:o.z,sx:n,sz:s}),o.hp<=0?(o.hp=0,o.alive=!1,i.phase="dead",i.failReason="courier",jt(i,{t:"death",reason:"courier"})):o.parcel<=0&&(i.phase="dead",i.failReason="parcel",jt(i,{t:"death",reason:"parcel"})),f}function kv(i){return i==="locker"?.85:.75}function Kc(i){return i==="locker"?70:32}function Bo(i,t,e=34){const n=i.player,s=[];for(const r of t.containersNear(n.z-e,n.z+e)){const o=i.containers[r.id];o!==0&&s.push({id:r.id,type:r.type,x:r.x,z:r.z,rot:r.rot,radius:kv(r.type),hp:o??Kc(r.type)})}return s}function Ov(i,t,e,n){const s=i.player,r=i.weapon;if(r.cd-=t,r.held=(r.held||0)+t,r.cd>0||!s.alive)return;for(const c of i.enemies)c.targetable=Xc(c),c.shielded=c.boss&&c.targetable&&ju(c)<1;const o=i.powerups.rapid>0,a=Mv({x:s.x,z:s.z,owned:i.loadout.owned,levels:i.loadout.levels,rapid:o,power:i.powerups.power>0,current:r.current,held:r.held,cls:r.cls,enemies:i.enemies,containers:Bo(i,e)});if(!a){r.cd=.05;return}a.weapon!==r.current&&(r.current=a.weapon,r.held=0,jt(i,{t:"weaponSwitch",weapon:a.weapon})),a.cls&&(r.cls=a.cls),Bv(i,a,n),r.cd+=He[a.weapon].interval/(o?Wc:1),r.cd<0&&(r.cd=0)}function Bv(i,t,e){const n=i.player,s=t.weapon,r=He[s],o=i.powerups.rapid>0,a=Xn(s,o),c=t.target;let l=c.x,f=c.z;if(t.kind==="enemy"&&s!=="arc"){const g=Math.min(.5,t.dist/r.speed)*.7;l+=(c.vx||0)*g,f+=(c.vz||0)*g}else if(s==="arc"&&t.kind==="enemy"){const g=Math.min(1,t.dist/r.speed)*.6;l+=(c.vx||0)*g,f+=(c.vz||0)*g}const u=Math.atan2(l-n.x,f-n.z);lv(i.facing,u);const d=Qu(s,i.loadout.levels[s]||0,i.powerups.power>0),h=n.x+Math.sin(u)*.75,p=n.z+Math.cos(u)*.75,x=r.perVolley;for(let g=0;g<x;g++){let m=u;s==="scattergun"?m+=(g/(x-1)-.5)*r.spread+(e()-.5)*.05:m+=(e()-.5)*r.spread;const v=s==="arc"?Math.max(r.minRange,Math.min(Math.hypot(l-n.x,f-n.z),a)):a;i.projectiles.push({id:i.nextId++,w:s,x:h,z:p,px:h,pz:p,dx:Math.sin(m),dz:Math.cos(m),speed:r.speed,traveled:.75,max:v,dmg:d,delay:s==="burst"?g*r.burstGap:0,power:i.powerups.power>0,sx:h,sz:p})}i.stats.shots++,jt(i,{t:"shot",weapon:s,x:h,z:p,angle:u,rapid:o})}function Yh(i,t,e,n,s,r,o){const a=e-i,c=n-t,l=i-s,f=t-r,u=a*a+c*c;if(u<1e-12)return l*l+f*f<=o*o?0:-1;const d=2*(l*a+f*c),h=l*l+f*f-o*o;if(h<=0)return 0;const p=d*d-4*u*h;if(p<0)return-1;const x=(-d-Math.sqrt(p))/(2*u);return x>=0&&x<=1?x:-1}function Hv(i,t,e){const n=[],s=i.player;let r=null;for(const o of i.projectiles){if(o.px=o.x,o.pz=o.z,o.delay>0&&(o.delay-=t,o.delay>0)){o.x=s.x+o.dx*.75,o.z=s.z+o.dz*.75,o.px=o.x,o.pz=o.z,n.push(o);continue}const a=o.max-o.traveled,c=Math.min(o.speed*t,a),l=o.x+o.dx*c,f=o.z+o.dz*c;let u=!1;if(o.w!=="arc"){let d=2,h=null;for(const p of i.enemies){if(!Xc(p)||Math.abs(p.x-o.x)>6||Math.abs(p.z-o.z)>6)continue;const x=Yh(o.x,o.z,l,f,p.x,p.z,p.radius+.18);x>=0&&x<d&&(d=x,h=p)}if(!h){r||(r=Bo(i,e,40));for(const p of r){if(i.containers[p.id]===0)continue;const x=Yh(o.x,o.z,l,f,p.x,p.z,p.radius);x>=0&&x<d&&(d=x,h=p)}}if(h){const p=o.x+(l-o.x)*d,x=o.z+(f-o.z)*d;h.type&&hi[h.type]?Zc(i,h,o.dmg,o.dx,o.dz,o.w==="scattergun"?2.2:1.2,o.power):cf(i,h,o.dmg),jt(i,{t:"impact",x:p,z:x,w:o.w}),u=!0}}if(o.x=l,o.z=f,o.traveled+=c,!u){if(o.traveled>=o.max-1e-6){o.w==="arc"?Gv(i,o,e):jt(i,{t:"fizzle",x:o.x,z:o.z,w:o.w});continue}n.push(o)}}i.projectiles=n}function Gv(i,t,e){const n=He.arc,s=n.splash,r=n.splashDamage*(t.power?1.5:1)*(t.dmg/n.damage/(t.power?1.5:1));for(const o of i.enemies){if(!Xc(o))continue;const a=Math.hypot(o.x-t.x,o.z-t.z)-o.radius;if(a>s)continue;const l=a<.9?t.dmg:r*(1-Math.max(0,a)/s*.5),f=Math.hypot(o.x-t.x,o.z-t.z)||1;Zc(i,o,l,(o.x-t.x)/f,(o.z-t.z)/f,3,t.power)}for(const o of Bo(i,e,40))Math.hypot(o.x-t.x,o.z-t.z)<s+o.radius&&cf(i,o,r);jt(i,{t:"explode",x:t.x,z:t.z,r:s})}function Zc(i,t,e,n,s,r,o){if(t.hp<=0||t.burrowed)return;let a=!1;if(t.boss){const l=ju(t);e*=l,a=l<1}t.hp-=e,t.hitFlash=.14;const c=hi[t.type].mass;t.kx+=n*r*2.2/c,t.kz+=s*r*2.2/c,jt(i,{t:"hit",x:t.x,z:t.z,dmg:Math.max(1,Math.round(e)),id:t.id,type:t.type,power:!!o,armored:a}),t.boss&&(i.boss.hp=Math.max(0,t.hp),!i.boss.staggered&&t.hp>0&&t.hp<=t.maxHp*Vv&&Xv(i,t)),t.hp<=0&&qv(i,t)}const Vv=.5,Wv=1.6;function Xv(i,t){i.boss.staggered=!0,(t.state==="chargeWind"||t.state==="charging")&&(i.hazards=i.hazards.filter(l=>l.id!==t.laneId)),t.burrowed=!1,t.state="stagger",t.timer=Wv,t.vx*=.2,t.vz*=.2,t.nextAttack=Math.max(t.nextAttack,1.2);const e=i.player,n=e.x-t.x,s=e.z-t.z,r=Math.hypot(n,s)||1,o=Math.min(r*.5,t.radius+2.2),a=t.x+n/r*o,c=t.z+s/r*o;Sn(i,"heal",a,c),jt(i,{t:"bossStagger",x:t.x,z:t.z})}function qv(i,t){t.hp=0,t.state="dead",i.stats.kills++,jt(i,{t:"kill",x:t.x,z:t.z,type:t.type,id:t.id});const e=$i(i);if(t.boss){i.boss.defeated=!0,i.boss.active=!0,i.boss.hp=0,i.pending=[],i.hazards=[];for(const o of i.enemies)o!==t&&o.hp>0&&(o.fleeing=!0,o.state="flee");i.player.invuln=Math.max(i.player.invuln||0,rf),jt(i,{t:"bossDown",x:t.x,z:t.z});const r=Yi.filter(o=>!i.loadout.owned.includes(o));Sn(i,r.length?"weapon":"power",t.x+1.2,t.z,r[0]),Sn(i,"heal",t.x-1.2,t.z+.5),Sn(i,e()<.5?"shield":"rapid",t.x,t.z-1.3);return}let s=hi[t.type].drop;t.escort&&(s*=.6),e()<s&&Sn(i,Ao(i,e,t.type==="brute"?.2:.06),t.x,t.z)}function Ao(i,t,e){const n=Yi.filter(a=>!i.loadout.owned.includes(a));if(t()<e)return"weapon";const s=t(),o=i.player.hp<60?.12:0;return s<.3+o?"heal":s<.5+o?"shield":s<.68+o/2?"rapid":s<.85?"power":n.length&&s<.9?"weapon":"evasion"}function Sn(i,t,e,n,s){const r={id:i.nextId++,kind:t,x:e,z:n,age:0,life:34};if(t==="weapon"){const o=Yi.filter(c=>!i.loadout.owned.includes(c)),a=$i(i);r.weapon=s||(o.length?o[Math.floor(a()*o.length)]:Yi[Math.floor(a()*Yi.length)])}return i.drops.push(r),i.drops.length>24&&i.drops.shift(),jt(i,{t:"drop",kind:t,x:e,z:n,weapon:r.weapon}),r}function cf(i,t,e){const n=i.containers[t.id]??Kc(t.type);if(n<=0)return;const s=Math.max(0,n-e);if(i.containers[t.id]=s,jt(i,{t:"containerHit",id:t.id,x:t.x,z:t.z,type:t.type}),s===0){i.stats.containers++,jt(i,{t:"containerBreak",id:t.id,x:t.x,z:t.z,type:t.type});const r=$i(i);t.type==="locker"?(Sn(i,Ao(i,r,.35),t.x+.6,t.z),Sn(i,Ao(i,r,.05),t.x-.6,t.z+.4)):Sn(i,Ao(i,r,.1),t.x,t.z)}}function oi(i,t){return t.id=i.nextId++,i.hazards.push(t),jt(i,{t:"hazard",kind:t.kind,x:t.x,z:t.z,src:t.src}),t}function Yv(i,t){const e=i.player,n=[];for(const s of i.hazards){if(s.t-=t,s.kind==="lane"){if(s.t<=-s.hold)continue;n.push(s);continue}if(s.t<=0){Math.hypot(e.x-s.x,e.z-s.z)<s.r+e.radius*.5&&Oo(i,s.damage,s.heavy,s.x,s.z,s.src),jt(i,{t:"hazardBoom",x:s.x,z:s.z,r:s.r,src:s.src});continue}n.push(s)}i.hazards=n}const _o={speed:1.18,cadence:.72,eruptExtra:1,secondWind:.85},$v={lobRadius:2.3,lobFlight:1.15,lobDamage:17,burrowTime:1.5,burrowSpeed:6.2,emergeWind:1,emergeRadius:3.3,surfacedTime:2.4,burrowDamage:26,quakeWind:1.3,quakeRadius:6.4,exposedTime:2.8,quakeDamage:28,broodWarn:1.3};function jv(i,t,e,n){const s=[];let r=0;for(const[a,c]of Object.entries(i.attacks)){if(!c||a==="charge"&&e<5.5||a==="lob"&&e<4||a==="quake"&&e>16)continue;const l=a===t.last&&a!==Object.keys(i.attacks)[0]?c*.25:c;s.push([a,l]),r+=l}if(!s.length)return e<5.5?"erupt":"charge";let o=n()*r;for(const[a,c]of s)if(o-=c,o<=0)return a;return s[s.length-1][0]}function $h(i,t,e,n,s,r,o){const a=un(s+7,12,24);t.lx=e,t.lz=n,t.chargeLeft=a,t.state="chargeWind",t.timer=r,t.face=Math.atan2(e,n);const c=oi(i,{kind:"lane",x:t.x,z:t.z,x1:t.x+e*a,z1:t.z+n*a,w:3.4,t:r,total:r,hold:o,owner:t.id,src:"charge"});t.laneId=c.id,jt(i,{t:"bossWarn",kind:"charge",x:t.x,z:t.z})}function Kv(i,t,e,n,s,r,o){const a=hi.guardian,c=zr(t.arch),l=i.player,f=i.legIndex,u=tf(f)*1.04,d=$v;if(t.tvx=0,t.tvz=0,!l.alive)return;const h=c.speed*(t.enraged?_o.speed:1);switch(t.state){case"chase":{if(t.nextAttack-=e,c.keepAway){const[p,x]=c.keepAway,g=n<p?-1:n>x?1:0,m=Math.sin(t.anim*.4)>0?1:-1;t.tvx=(s*g+r*m*.6)*h,t.tvz=(r*g-s*m*.6)*h,t.z>qc(i)-4&&t.tvz>0&&(t.tvz=0)}else t.tvx=s*h,t.tvz=r*h;if(t.face=Math.atan2(s,r),n<3.8&&t.cd<=0)t.state="bslam",t.timer=a.slamWind,oi(i,{kind:"circle",x:t.x,z:t.z,r:a.slamRadius,t:a.slamWind,total:a.slamWind,damage:Math.round((a.slamDamage+f*2)*u),heavy:!0,owner:t.id,src:"bossSlam"}),jt(i,{t:"bossWarn",kind:"slam",x:t.x,z:t.z});else if(t.nextAttack<=0){const p=jv(c,t,n,o);if(t.last=p,p==="charge")$h(i,t,s,r,n,a.chargeWind,2.2);else if(p==="erupt"){const g=3+Math.floor(f/2)+(t.enraged?_o.eruptExtra:0),m=[[l.x,l.z],[l.x+l.vx*.9,l.z+l.vz*.9]];for(t.enraged&&m.push([l.x+l.vx*1.6,l.z+l.vz*1.6]);m.length<g;){const v=o()*Math.PI*2,_=3+o()*3.5;m.push([l.x+Math.sin(v)*_,l.z+Math.cos(v)*_])}for(const[v,_]of m)oi(i,{kind:"circle",x:v,z:_,r:a.eruptRadius,t:a.eruptWind,total:a.eruptWind,damage:Math.round((a.eruptDamage+f*2)*u),heavy:!0,owner:t.id,src:"erupt"});t.state="cast",t.timer=.9,jt(i,{t:"bossWarn",kind:"erupt",x:t.x,z:t.z})}else if(p==="lob"){const g=(c.lobCount||3)+(t.enraged?2:0),m=[[l.x,l.z],[l.x+l.vx*1.1,l.z+l.vz*1.1]];for(;m.length<g;){const v=o()*Math.PI*2,_=2.6+o()*3;m.push([l.x+l.vx*.5+Math.sin(v)*_,l.z+l.vz*.5+Math.cos(v)*_])}m.forEach(([v,_],M)=>{const w=d.lobFlight+Math.hypot(v-t.x,_-t.z)*.022+M*.08;oi(i,{kind:"circle",x:v,z:_,r:d.lobRadius,t:w,total:w,lob:{x:t.x,z:t.z},damage:Math.round((d.lobDamage+f*2)*u),heavy:!0,owner:t.id,src:"spit"})}),t.state="cast",t.timer=.7,jt(i,{t:"bossWarn",kind:"spit",x:t.x,z:t.z})}else if(p==="burrow")t.state="burrow",t.burrowed=!0,t.timer=d.burrowTime+o()*.5,jt(i,{t:"bossBurrow",x:t.x,z:t.z});else if(p==="quake"){if(t.state="quakeWind",t.timer=d.quakeWind,oi(i,{kind:"circle",x:t.x,z:t.z,r:d.quakeRadius,t:d.quakeWind,total:d.quakeWind,damage:Math.round((d.quakeDamage+f*2)*u),heavy:!0,owner:t.id,src:"quake"}),t.enraged)for(const[g,m]of[[l.x,l.z],[l.x+l.vx,l.z+l.vz]])oi(i,{kind:"circle",x:g,z:m,r:a.eruptRadius,t:d.quakeWind+.3,total:d.quakeWind+.3,damage:Math.round((a.eruptDamage+f*2)*u),heavy:!0,owner:t.id,src:"erupt"});jt(i,{t:"bossWarn",kind:"quake",x:t.x,z:t.z})}else if(p==="brood"){const g=Math.max(0,ko-jc(i)),m=Math.min(g,(c.broodSize||3)+(t.enraged?2:0));if(m>0){const v=[];for(let w=0;w<m;w++)v.push(w%3===2?"dog":"walker");const _=t.x-s*3,M=t.z-r*3;Ei(i,"call",v,_,M,d.broodWarn,1.4),t2(i,m,t)}t.state="cast",t.timer=.9}const x=Math.max(2.2,3.3-f*.15)+o()*1.2;t.nextAttack=x*(t.enraged?_o.cadence:1)*(c.cadence||1)}break}case"chargeWind":t.timer-=e,t.face=Math.atan2(t.lx,t.lz),t.timer<=0&&(t.state="charging",t.lungeHit=!1);break;case"charging":{t.tvx=t.lx*a.chargeSpeed,t.tvz=t.lz*a.chargeSpeed,t.chargeLeft-=a.chargeSpeed*e;const p=n-t.radius-l.radius;!t.lungeHit&&p<.4&&(t.lungeHit=!0,Oo(i,Math.round((a.chargeDamage+f*2)*u),!0,t.x,t.z,"charge")),t.chargeLeft<=0&&(i.hazards=i.hazards.filter(x=>x.id!==t.laneId),jt(i,{t:"slam",x:t.x,z:t.z,big:!0}),t.vx*=.2,t.vz*=.2,t.enraged&&c.doubleCharge&&!t.secondCharge?(t.secondCharge=!0,$h(i,t,s,r,Math.min(n,13),_o.secondWind,2)):(t.secondCharge=!1,t.state="recover",t.timer=1.1));break}case"burrow":{if(t.timer-=e,t.tvx=s*d.burrowSpeed,t.tvz=r*d.burrowSpeed,t.timer<=0||n<1.2){if(t.state="emerge",t.timer=d.emergeWind,oi(i,{kind:"circle",x:t.x,z:t.z,r:d.emergeRadius,t:d.emergeWind,total:d.emergeWind,damage:Math.round((d.burrowDamage+f*2)*u),heavy:!0,owner:t.id,src:"burrow"}),t.enraged)for(let p=0;p<4;p++){const x=p/4*Math.PI*2+o();oi(i,{kind:"circle",x:t.x+Math.sin(x)*5.2,z:t.z+Math.cos(x)*5.2,r:2.2,t:d.emergeWind+.35,total:d.emergeWind+.35,damage:Math.round((a.eruptDamage+f*2)*u),heavy:!0,owner:t.id,src:"erupt"})}jt(i,{t:"bossWarn",kind:"burrow",x:t.x,z:t.z})}break}case"emerge":t.timer-=e,t.timer<=0&&(t.burrowed=!1,t.state="surfaced",t.timer=d.surfacedTime,jt(i,{t:"bossSurface",x:t.x,z:t.z}));break;case"quakeWind":t.timer-=e,t.timer<=0&&(t.state="exposed",t.timer=d.exposedTime*(t.enraged?.8:1),jt(i,{t:"slam",x:t.x,z:t.z,big:!0}),jt(i,{t:"bossExposed",x:t.x,z:t.z}));break;case"surfaced":case"exposed":t.timer-=e,t.tvx=s*h*.15,t.tvz=r*h*.15,t.timer<=0&&(t.state="recover",t.timer=.4,t.nextAttack=Math.max(t.nextAttack,1));break;case"stagger":t.timer-=e,t.timer<=0&&(t.state="recover",t.timer=.4,t.enraged=!0,i.boss.enraged=!0,t.nextAttack=Math.min(t.nextAttack,1.4),jt(i,{t:"bossEnrage",x:t.x,z:t.z}));break;case"cast":case"bslam":t.timer-=e,t.timer<=0&&(t.state==="bslam"&&(t.cd=2.4),t.state="recover",t.timer=.5);break;default:t.timer-=e,t.tvx=s*h*.3,t.tvz=r*h*.3,t.timer<=0&&(t.state="chase")}}function dr(i,t,e){return t+Math.floor(i()*(e-t+1))}function As(i,t,e,n,s){const r=i.player;let o;e==="ahead"?o=(n()-.5)*1.2:e==="road"?o=(n()-.5)*.25:e==="aheadLeft"?o=-.72+(n()-.5)*.3:e==="aheadRight"?o=.72+(n()-.5)*.3:e==="left"?o=-1.15+(n()-.5)*.5:e==="right"?o=1.15+(n()-.5)*.5:o=Math.PI+(n()-.5)*1,o+=t.roadDir(r.z);let a=r.x+Math.sin(o)*s,c=r.z+Math.cos(o)*s;e==="road"&&(a=t.roadX(c)+(n()-.5)*2);const l=t.lateralBounds(c),f=t.roadX(c),u=un(a-f,l.min-9,l.max+9);a=f+u;let d=Math.hypot(a-r.x,c-r.z);if(d<s*.95){const h=e==="behind"?-1:1;c=r.z+h*Math.sqrt(Math.max(0,s*s-(a-r.x)**2)),d=Math.hypot(a-r.x,c-r.z)}return{x:a,z:c}}function Ei(i,t,e,n,s,r=1.35,o=null){if(!e.length)return null;const a={id:i.nextId++,kind:t,types:e,x:n,z:s,t:r,total:r,spread:o??1.6+e.length*.18};return i.pending.push(a),jt(i,{t:"warn",kind:t,x:n,z:s,count:e.length}),a}function Jc(i){return Math.max(0,ko-jc(i))}function Zv(i,t,e,n){const s=dr(e,5,9);if(n==="ahead"&&i.legIndex>=1&&e()<(Xe[i.mode].short?.65:.3)&&(n="road"),Jc(i)<s)return!1;const r=Sv(e,i.legIndex,s),o=24+e()*6;if(i.legIndex>=2){const a=r.filter(f=>f==="brute"),c=r.filter(f=>f==="dog"),l=r.filter(f=>f==="walker");if(a.length){const f=As(i,t,"road",e,o);Ei(i,"pack",a,f.x,f.z)}if(c.length>=2){const f=As(i,t,e()<.5?"aheadLeft":"aheadRight",e,o-2);Ei(i,"pack",c,f.x,f.z)}else l.push(...c);if(l.length){const f=As(i,t,n,e,o);Ei(i,"pack",l,f.x,f.z)}}else{const a=As(i,t,n,e,o);Ei(i,"pack",r,a.x,a.z)}return i.stats.packs++,i.stats.packSizes.push(s),!0}function Jv(i,t,e){const n=Xe[i.mode].short?Tv:Ev,[s,r]=n[Math.min(n.length-1,i.legIndex)];let o=dr(e,s,r);if(o=Math.min(o,Jc(i)),o<20)return!1;const a=wv(e,i.legIndex,o),c=i.legIndex>=1?["road","aheadLeft","aheadRight","behind"]:["ahead","left","right","behind"],l=o>27?4:3,f=Math.ceil(a.length/l);for(let d=0;d<l;d++){const h=a.slice(d*f,(d+1)*f),p=As(i,t,c[d],e,23+e()*5);Ei(i,"ambush",h,p.x,p.z,1.7+d*1.6)}i.stats.ambushes++,i.stats.ambushSizes.push(o),jt(i,{t:"ambush",count:o});const u=i.player;return i.legIndex>=2&&u.shield<30&&Sn(i,"shield",u.x+u.vx*.3,u.z+4),!0}function lf(i,t,e){const n=i.player,s=Math.min(n.z+wi+4,qc(i)-6),r=t.roadX(s),o=Ls(i.nextId++,"guardian",r,s,i.legIndex,i.mode,e);o.timer=1.4,o.nextAttack=3.5,i.enemies.push(o);const a=Vc(i.legIndex);i.boss={active:!0,defeated:!1,id:o.id,nextCall:Xe[i.mode].reinforceEvery,calls:0,hp:o.hp,maxHp:o.maxHp,staggered:!1,enraged:!1,arch:a.key,name:a.name};const c=Math.min(hf(i,e),Math.max(0,ko-jc(i))),l=ef(e,i.legIndex,c).slice(0,c);l.forEach((f,u)=>{const d=u/l.length*Math.PI*2+e()*.4,h=3.2+e()*4.5;let p=r+Math.sin(d)*h,x=s+Math.cos(d)*h;Math.hypot(p-n.x,x-n.z)<wi&&(x=n.z+Math.sqrt(Math.max(0,wi**2-(p-n.x)**2))+.5);const m=Ls(i.nextId++,f,p,x,i.legIndex,i.mode,e,{escort:!0});m.timer=.9+e()*.5,i.enemies.push(m)}),i.stats.escortSizes.push(l.length),jt(i,{t:"bossAppear",x:r,z:s,escort:l.length,leg:i.legIndex,arch:a.key,name:a.name})}function hf(i,t,e=!1){return i.legIndex<2?dr(t,8,9):e?dr(t,8,10):dr(t,9,i.legIndex>=3?11:10)}function Qv(i,t,e,n){const s=i.player,r=Math.min(hf(i,e,!0),Jc(i));if(r<=0)return;const o=ef(e,i.legIndex,r,!0).slice(0,r),a=n.x-s.x,c=n.z-s.z,l=Math.hypot(a,c)||1;[o.slice(0,Math.ceil(r/2)),o.slice(Math.ceil(r/2))].forEach((u,d)=>{if(!u.length)return;const h=d===0?1:-1,p=Math.atan2(a/l,c/l)+h*(.5+e()*.7),x=Math.max(wi+2,Math.min(28,l+4));Ei(i,"call",u,s.x+Math.sin(p)*x,s.z+Math.cos(p)*x,1.2)}),i.boss.calls++,i.stats.calls++,i.stats.callSizes.push(r),jt(i,{t:"bossCall",count:r,x:n.x,z:n.z})}function t2(i,t,e){i.boss.calls++,i.stats.calls++,jt(i,{t:"bossCall",count:t,x:e.x,z:e.z,brood:!0})}function e2(i,t,e,n){if(!i.pending.length)return;const s=i.player,r=[];for(const o of i.pending){if(o.t-=t,o.t>0){r.push(o);continue}let a=o.x-s.x,c=o.z-s.z,l=Math.hypot(a,c)||1;const f=wi+o.spread+.5;l<f&&(o.x=s.x+a/l*f,o.z=s.z+c/l*f),o.types.forEach((u,d)=>{const h=n()*Math.PI*2,p=Math.sqrt(n())*o.spread;let x=o.x+Math.sin(h)*p,g=o.z+Math.cos(h)*p;a=x-s.x,c=g-s.z,l=Math.hypot(a,c)||1,l<wi&&(x=s.x+a/l*(wi+.2),g=s.z+c/l*(wi+.2));const m=Math.hypot(x-s.x,g-s.z),v=Ls(i.nextId++,u,x,g,i.legIndex,i.mode,n,{escort:o.kind==="call",spawnDist:m,spawnKind:o.kind});v.timer=.45+d*.03,i.enemies.push(v)}),jt(i,{t:"arrive",kind:o.kind,x:o.x,z:o.z,count:o.types.length})}i.pending=r}function n2(i,t,e,n){const s=i.player,r=Xe[i.mode],o=Dn(i);if(i.boss.active){const f=i.enemies.find(u=>u.id===i.boss.id);f&&!i.boss.defeated&&(i.boss.nextCall-=t,i.boss.nextCall<=0&&(zr(f.arch).ownBrood||f.enraged)?i.boss.nextCall+=r.reinforceEvery:i.boss.nextCall<=0&&(i.boss.nextCall+=r.reinforceEvery,Qv(i,e,n,f)));return}if(s.z>=o.z-r.bossTrigger){lf(i,e,n);return}if(s.z>=o.z-r.bossTrigger-r.lairCalm){if(!i.encounter.lairKit){i.encounter.lairKit=!0;const f=Math.min(s.z+14,o.z-r.bossTrigger-4),u=Sn(i,"heal",e.roadX(f),f);u.life=60,o.final&&(Sn(i,"shield",e.roadX(f+3),f+3).life=60)}return}const a=i.encounter,c=r.cycle*(1-.04*i.legIndex);if(a.t+=t,a.sinceAmbush=(a.sinceAmbush||0)+t,a.t>=c&&(a.cycle++,a.t=0,a.ambushDone=!1,a.nextPack=1+n()*2),a.t<.65*c){if(!a.ambushDone&&a.cycle>=1&&a.t>1.2){a.ambushDone=!0;let f=(r.short?.75:.38)+i.legIndex*.05;if(r.short&&i.legIndex>=2&&(f=1),!r.short&&a.sinceAmbush>zv&&(f=1),n()<f&&Jv(i,e,n)){a.nextPack=7+n()*3,a.sinceAmbush=0;return}}if(a.nextPack-=t,a.nextPack<=0&&a.intro){a.intro=!1;const f=As(i,e,"ahead",n,25),u=["walker","walker","walker","walker","walker"];Ei(i,"pack",u,f.x,f.z),i.stats.packs++,i.stats.packSizes.push(u.length),a.nextPack=7+n()*2;return}if(a.nextPack<=0){const f=n(),u=f<.5?"ahead":f<.72?"left":f<.94?"right":"behind";Zv(i,e,n,u);const d=i.legIndex===0&&a.cycle===0?4.5:6;a.nextPack=(d+n()*3)*(1-(r.short?.06:.02)*i.legIndex)}}}function i2(i){const t=i.player;i.enemies.some(e=>e.state==="dead"||e.hp<=0)&&(i.enemies=i.enemies.filter(e=>e.state!=="dead"&&e.hp>0));for(let e=i.enemies.length-1;e>=0;e--){const n=i.enemies[e];n.boss||n.escort||(t.z-n.z>46||Math.abs(n.x-t.x)>70)&&(i.enemies.splice(e,1),jt(i,{t:"despawn",id:n.id}))}}function s2(i,t){const e=i.player,n=[];for(const s of i.drops){if(s.age+=t,s.age>s.life)continue;const r=e.x-s.x,o=e.z-s.z,a=Math.hypot(r,o);if(e.alive&&a<4.6&&a>.01){const c=Math.min(a,(6+(4.6-a)*3)*t);s.x+=r/a*c,s.z+=o/a*c}if(e.alive&&a<1.3){r2(i,s);continue}n.push(s)}i.drops=n}function r2(i,t){const e=i.player;i.stats.pickups++;const n={t:"pickup",kind:t.kind,x:t.x,z:t.z};switch(t.kind){case"heal":e.hp=Math.min(e.maxHp,e.hp+35),e.parcel=Math.min(100,e.parcel+10);break;case"shield":e.shield=Math.min(80,e.shield+50);break;case"rapid":case"power":case"evasion":i.powerups[t.kind]=Math.min(30,i.powerups[t.kind]+sf);break;case"weapon":{const s=t.weapon;if(n.weapon=s,!i.loadout.owned.includes(s))i.loadout.owned.push(s),n.unlocked=!0;else{const r=Math.min(3,(i.loadout.levels[s]||0)+1);i.loadout.levels[s]=r,n.level=r}break}}jt(i,n)}function uf(i,t){if(!i.boss.defeated)return;const e=Dn(i),n=i.player;Math.hypot(n.x-e.x,n.z-e.z)<nf&&n.alive&&o2(i)}function o2(i){const t=Ne(i),e=Dn(i);i.legTimes.push(i.time-i.legStartTime),i.legIndex++;const n=i.player;return n.x=e.x,n.z=e.z,n.px=n.x,n.pz=n.z,n.vx=0,n.vz=0,n.kx=0,n.kz=0,n.hp=n.maxHp,n.parcel=100,i.enemies=[],i.projectiles=[],i.hazards=[],i.pending=[],i.drops=[],i.boss=Rr(),i.encounter=Ur(i.legIndex),i.legIndex>=t.refuges.length?(i.phase="complete",jt(i,{t:"complete"})):(i.phase="checkpoint",jt(i,{t:"checkpoint",index:i.legIndex})),i}function a2(i){return i.phase==="checkpoint"&&(i.phase="travel",i.legStartTime=i.time),i}function Qc(i){return{version:Ts,seed:i.seed,mode:i.mode,legIndex:i.legIndex,time:i.time,legTimes:i.legTimes.slice(),player:{x:i.player.x,z:i.player.z},loadout:{owned:i.loadout.owned.slice(),levels:{...i.loadout.levels},current:i.weapon.current},resources:{shield:i.player.shield,powerups:{...i.powerups}},containers:{...i.containers},stats:JSON.parse(JSON.stringify(i.stats)),rngState:i.rngState}}function Pr(i,t=0){const e=Yc({seed:i.seed,mode:i.mode}),n=Ne(e);e.legIndex=un(i.legIndex|0,0,n.refuges.length),e.time=i.time||0,e.legStartTime=e.time,e.legTimes=(i.legTimes||[]).slice();const s=e.legIndex>0?n.refuges[e.legIndex-1]:{x:n.roadX(0),z:0},r=i.player||{},o=Number.isFinite(r.z)?r.z:s.z;let a=s.x;if(Number.isFinite(r.x)?a=r.x:Number.isFinite(r.offset)&&(a=n.roadX(o)+r.offset),e.player=$c(a,o),i.loadout){const c=(i.loadout.owned||[]).filter(l=>He[l]);e.loadout.owned=c.length?c:["sidearm","scattergun"],e.loadout.levels={...i.loadout.levels||{}},i.loadout.current&&e.loadout.owned.includes(i.loadout.current)&&(e.weapon.current=i.loadout.current)}return i.resources&&(e.player.shield=i.resources.shield||0,i.resources.powerups&&Object.assign(e.powerups,i.resources.powerups)),e.containers={...i.containers||{}},i.stats&&(e.stats={...e.stats,...JSON.parse(JSON.stringify(i.stats))}),Number.isFinite(i.rngState)&&(e.rngState=i.rngState>>>0),t&&(e.rngState=li(e.rngState,"retry",t)),e.encounter=Ur(e.legIndex),e.legIndex>=n.refuges.length&&(e.phase="complete"),e}function c2(i,t=0){const e=Pr(i,t),n=Ne(e),s=Dn(e);e.boss={...Rr(),active:!0,defeated:!0};const r=s.z-nf-3;return e.player=$c(n.roadX(r),r),e.player.invuln=rf,i.resources&&(e.player.shield=i.resources.shield||0),e.encounter={...Ur(e.legIndex),nextPack:1e9,ambushDone:!0},e}function l2(i){const{events:t,...e}=i;return JSON.stringify(e)}function h2(i){const t=i.events;return i.events=[],t}const Ge={teleport(i,t,e=0){const n=Ne(i),s=i.player;return s.z=t,s.x=n.roadX(t)+e,s.px=s.x,s.pz=s.z,s.vx=0,s.vz=0,i.enemies=i.enemies.filter(r=>Math.abs(r.z-t)<60),i},nearRefuge(i,t=80){const e=Dn(i);return i.enemies=[],i.pending=[],i.hazards=[],Ge.teleport(i,e.z-t,0)},setLeg(i,t){const e=Ne(i);i.legIndex=un(t,0,e.refuges.length-1),i.boss=Rr(),i.encounter=Ur(i.legIndex);const n=i.legIndex>0?e.refuges[i.legIndex-1].z:0;return Ge.teleport(i,n+10,0)},spawn(i,t,e=1,n={}){const s=i.player,r=$i(i),o=[];for(let a=0;a<e;a++){const c=n.angle??r()*Math.PI*2,l=(n.dist??10)+(n.jitter??0)*r(),f=Ls(i.nextId++,t,s.x+Math.sin(c)*l,s.z+Math.cos(c)*l,i.legIndex,i.mode,r);f.timer=n.instant?.01:.4,n.hp&&(f.hp=n.hp,f.maxHp=n.hp),i.enemies.push(f),o.push(f)}return o},crowd(i,t=71,e=!0){const n=i.player,s=$i(i);if(i.enemies=[],i.pending=[],e){const r=Ls(i.nextId++,"guardian",n.x,n.z+14,i.legIndex,i.mode,s);r.timer=.01,i.enemies.push(r),i.boss={active:!0,defeated:!1,id:r.id,nextCall:999,calls:0,hp:r.hp,maxHp:r.maxHp}}for(;i.enemies.length<Math.min(ko,t+(e?1:0));){const r=i.enemies.length,o=r%9===0?"brute":r%3===0?"dog":"walker",a=s()*Math.PI*2,c=7+s()*14,l=Ls(i.nextId++,o,n.x+Math.sin(a)*c,n.z+Math.cos(a)*c,i.legIndex,i.mode,s);l.timer=.01,i.enemies.push(l)}return i.enemies.length},grantWeapon(i,t){return He[t]&&!i.loadout.owned.includes(t)&&i.loadout.owned.push(t),i.loadout.owned},powerup(i,t){return t==="shield"?i.player.shield=80:t==="heal"?i.player.hp=i.player.maxHp:i.powerups[t]!==void 0&&(i.powerups[t]=sf),i.powerups},dropGallery(i){const t=i.player,e=["heal","shield","rapid","power","evasion"];i.drops=[],e.forEach((n,s)=>Sn(i,n,t.x-4+s*2,t.z+6)),Yi.forEach((n,s)=>Sn(i,"weapon",t.x-3+s*2,t.z+9,n));for(const n of i.drops)n.life=600;return i.drops.length},killPlayer(i){return Oo(i,9999,!0,i.player.x,i.player.z-1,"qa"),i.phase},startBoss(i){Ge.nearRefuge(i,Xe[i.mode].bossTrigger+2);const t=Ne(i);return lf(i,t,$i(i)),i.boss},defeatBoss(i){const t=i.enemies.find(e=>e.boss);return t?(t.burrowed=!1,Zc(i,t,1e9,0,1,0,!1)):(i.boss.defeated=!0,i.boss.active=!0),i.boss},reachCheckpoint(i){i.boss.defeated||Ge.defeatBoss(i),i.boss.defeated=!0;const t=Dn(i);return Ge.teleport(i,t.z-1,0),i.player.x=t.x,uf(i,Ne(i)),i.phase},complete(i){const t=Ne(i);return i.legIndex=t.refuges.length-1,i.phase="travel",i.boss={...Rr(),active:!0,defeated:!0},Ge.reachCheckpoint(i)}},$t=new fe,me=new ui,an=new En,Pe=new z,Ie=new z,te=new Ft;new z(0,1,0);function Te(i,t,e,n=0){const s=new yi(i,t,e);return s.instanceMatrix.setUsage(Rs),s.setColorAt(0,new Ft(1,1,1)),s.count=0,s.frustumCulled=!1,s.renderOrder=n,s}function Ae(i,t){i.count=t,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)}const zo={heal:16726854,shield:3139327,rapid:16747034,power:11824127,evasion:16773242,weapon:8257434};class u2{constructor(t,e){this.scene=t;const n=(f={})=>new xe({color:16777215,...f}),s=(f={})=>new xe({color:16777215,transparent:!0,depthWrite:!1,blending:qi,...f});this.proj=Te(new Bs(.5,0),n(),400,40),t.add(this.proj),this.projGlow=Te(new Ai(.5,8,6),s({opacity:.55}),400,41),t.add(this.projGlow),this.pcap=900,this.particles=Te(new Ii(1,1,1),n(),this.pcap,42),t.add(this.particles),this.parts=[],this.ringMesh=Te(new Si(.82,1,32).rotateX(-Math.PI/2),s({side:Oe}),80,43),t.add(this.ringMesh),this.rings=[],this.flashMesh=Te(new Ai(.5,10,8),s(),60,44),t.add(this.flashMesh),this.flashes=[];const r=new Gs(1,36).rotateX(-Math.PI/2),o=new Si(.86,1,36).rotateX(-Math.PI/2),a=f=>n({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8,...f});this.tBase=Te(r,a({opacity:.2}),120,35),this.tFill=Te(r,a({opacity:.32}),120,36),this.tRing=Te(o,a({opacity:.95}),120,37);const c=new Ln(1,1).rotateX(-Math.PI/2).translate(0,0,-.5);this.lBase=Te(c,a({opacity:.26}),40,35),this.lFill=Te(c,a({opacity:.36}),40,36),this.lEdge=Te(c,a({opacity:.95}),80,37),t.add(this.lEdge);const l=new Fe;l.setAttribute("position",new le([-.5,0,.25,0,0,-.25,.5,0,.25,.5,0,.5,0,0,0,-.5,0,.5],3)),l.setIndex([0,1,4,1,2,4,2,3,4,0,4,5]),this.lChev=Te(l,a({opacity:.9,side:Oe}),200,37),this.globs=Te(new Er(.5,0),n(),40,40),this.globGlow=Te(new Ai(.5,8,6),s({opacity:.6}),40,41),t.add(this.globs,this.globGlow),t.add(this.tBase,this.tFill,this.tRing,this.lBase,this.lFill,this.lChev),this.wRing=Te(new Si(.75,1,32).rotateX(-Math.PI/2),n({transparent:!0,opacity:.9,depthWrite:!1,depthTest:!1}),40,37),this.wBeam=Te(new Bn(.5,.5,1,10,1,!0).translate(0,.5,0),s({opacity:.5,side:Oe}),40,45),t.add(this.wRing,this.wBeam),this.dropMat=Ji(),this.dropMeshes={};for(const[f,u]of Object.entries(U_))this.dropMeshes[f]=Te(u(),this.dropMat,40,0),t.add(this.dropMeshes[f]);this.miniMeshes={};for(const[f,u]of Object.entries(Xu))this.miniMeshes[f]=Te(u(),this.dropMat,20,0),t.add(this.miniMeshes[f]);this.dropBeam=Te(new Bn(.35,.6,1,10,1,!0).translate(0,.5,0),s({opacity:.38,side:Oe}),60,45),this.dropRing=Te(new Si(.7,.95,28).rotateX(-Math.PI/2),n({transparent:!0,opacity:.85,depthWrite:!1}),60,37),t.add(this.dropBeam,this.dropRing),this.contMat=Ji(),this.crates=Te(D_(),this.contMat,40,0),this.lockers=Te(z_(),this.contMat,40,0),t.add(this.crates,this.lockers),this.contFlash=new Map,this.contHpBar=Te(new Ln(1,.14),n({transparent:!0,opacity:.95,depthWrite:!1,side:Oe}),40,46),t.add(this.contHpBar),this.shadowMat=new xe({map:e,transparent:!0,depthWrite:!1,opacity:.5,color:660504}),this.shadows=Te(new Ln(1,1).rotateX(-Math.PI/2),this.shadowMat,240,31),t.add(this.shadows),this.sporeCap=120,this.spores=Te(new Bs(.5,0),s({opacity:.9}),this.sporeCap,46),t.add(this.spores),this.sporeList=[]}updateSpores(t,e,n,s){if(!e)return;const r=this.sporeList;for(let c=0;c<8&&r.length<this.sporeCap;c++){const l=e.x+(Math.random()-.5)*30,f=e.z-12+Math.random()*36,u=t.corruption(l,f);u<.45||Math.random()>(u-.35)*1.6||r.push({x:l,z:f,y:Math.max(t.height(l,f),Le)+.2,vy:.35+Math.random()*.6,ph:Math.random()*6.28,life:0,max:3+Math.random()*3.5,c:u,s:.12+Math.random()*.14})}let o=0;const a=[];for(const c of r){if(c.life+=n,c.life>=c.max||Math.abs(c.x-e.x)>20||c.z<e.z-18||c.z>e.z+32)continue;a.push(c),c.y+=c.vy*n;const l=Math.sin(s*1.3+c.ph)*.35,f=c.life/c.max,u=Math.min(1,c.life*2)*(1-f*f),d=c.s*(.7+.3*Math.sin(s*4+c.ph));$t.compose(Pe.set(c.x+l,c.y,-(c.z+Math.cos(s*.9+c.ph)*.3)),me.identity(),Ie.set(d,d*1.4,d)),this.spores.setMatrixAt(o,$t),te.setHex(c.ph>3.14?16734952:11563263).multiplyScalar(u*(.6+c.c*.6)),this.spores.setColorAt(o,te),o++}this.sporeList=a,Ae(this.spores,o)}burst(t,e,n,s,r,o=4,a=.14,c=.5,l=14,f=3){for(let u=0;u<s;u++){this.parts.length>=this.pcap&&this.parts.shift();const d=Math.random()*Math.PI*2,h=o*(.4+Math.random()*.8);this.parts.push({x:t,y:e,z:-n,vx:Math.cos(d)*h,vy:f*(.5+Math.random()),vz:Math.sin(d)*h,life:c,max:c,size:a*(.6+Math.random()*.8),color:r,g:l,rot:Math.random()*6})}}ring(t,e,n,s,r,o=.45,a=1){this.rings.length>70&&this.rings.shift(),this.rings.push({x:t,y:e,z:-n,r:s,color:r,life:o,max:o,grow:a})}flash(t,e,n,s,r,o=.08){this.flashes.length>55&&this.flashes.shift(),this.flashes.push({x:t,y:e,z:-n,size:s,color:r,life:o,max:o})}update(t,e,n,s,r,o){this.updateProjectiles(t,e,n),this.updateParticles(s),this.updateTelegraphs(t,e,r),this.updateDrops(t,e,r),this.updateContainers(t,e,s,r),this.updateShadows(t,e,n,o),this.updateSpores(e,o,s,r)}updateProjectiles(t,e,n){let s=0;for(const r of t.projectiles){if(r.delay>0)continue;if(s>=400)break;const o=r.px+(r.x-r.px)*n,a=r.pz+(r.z-r.pz)*n,c=He[r.w];let l=e.height(o,a)+1.45;if(r.w==="arc"){const h=Math.min(1,r.traveled/r.max);l+=Math.sin(h*Math.PI)*Math.min(4,r.max*.18)}const f=Math.atan2(r.dx,-r.dz);an.set(0,f,0),me.setFromEuler(an);const u=r.w==="arc"?1:r.w==="burst"?4.2:3.2,d=c.size*(r.power?1.35:1);$t.compose(Pe.set(o,l,-a),me,Ie.set(d*1.6,d*1.6,d*u*1.6)),this.proj.setMatrixAt(s,$t),te.set(r.power?16777215:c.color),this.proj.setColorAt(s,te),$t.compose(Pe.set(o,l,-a),me,Ie.set(d*4,d*4,d*(u+2)*2.4)),this.projGlow.setMatrixAt(s,$t),te.set(r.power?13855743:c.color).multiplyScalar(.8),this.projGlow.setColorAt(s,te),s++}Ae(this.proj,s),Ae(this.projGlow,s)}updateParticles(t){let e=0;const n=[];for(const o of this.parts){if(o.life-=t,o.life<=0||(o.vy-=o.g*t,o.x+=o.vx*t,o.y+=o.vy*t,o.z+=o.vz*t,o.vx*=1-t*1.5,o.vz*=1-t*1.5,o.y<-5))continue;n.push(o);const a=o.life/o.max,c=o.size*(.4+.6*a);an.set(o.rot+o.life*4,o.rot,0),me.setFromEuler(an),$t.compose(Pe.set(o.x,o.y,o.z),me,Ie.set(c,c,c)),this.particles.setMatrixAt(e,$t),te.set(o.color),this.particles.setColorAt(e,te),e++}this.parts=n,Ae(this.particles,e),e=0;const s=[];for(const o of this.rings){if(o.life-=t,o.life<=0)continue;s.push(o);const a=1-o.life/o.max,c=o.r*(o.grow?.3+a*.9:1);$t.compose(Pe.set(o.x,o.y,o.z),me.identity(),Ie.set(c,1,c)),this.ringMesh.setMatrixAt(e,$t),te.set(o.color).multiplyScalar(1-a),this.ringMesh.setColorAt(e,te),e++}this.rings=s,Ae(this.ringMesh,e),e=0;const r=[];for(const o of this.flashes){if(o.life-=t,o.life<=0)continue;r.push(o);const a=o.life/o.max,c=o.size*(.6+.4*a);$t.compose(Pe.set(o.x,o.y,o.z),me.identity(),Ie.set(c,c,c)),this.flashMesh.setMatrixAt(e,$t),te.set(o.color).multiplyScalar(a),this.flashMesh.setColorAt(e,te),e++}this.flashes=r,Ae(this.flashMesh,e)}updateTelegraphs(t,e,n){let s=0,r=0,o=0,a=0;const c=(p,x,g,m,v,_,M,w=!0)=>{const T=Math.hypot(g-p,m-x)||1,A=Math.atan2(g-p,-(m-x))+Math.PI,C=Math.max(e.height(p,x),e.height(g,m),e.height((p+g)/2,(x+m)/2),Le)+.22;if(an.set(0,A,0),me.setFromEuler(an),$t.compose(Pe.set(p,C,-x),me,Ie.set(v,1,T)),this.lBase.setMatrixAt(r,$t),te.set(M),this.lBase.setColorAt(r,te),$t.compose(Pe.set(p,C+.01,-x),me,Ie.set(v,1,Math.max(.01,T*_))),this.lFill.setMatrixAt(r,$t),this.lFill.setColorAt(r,te),r++,a<78){const b=Math.cos(A),y=-Math.sin(A);for(const D of[-1,1])$t.compose(Pe.set(p+b*D*v/2,C+.02,-x+y*D*v/2),me,Ie.set(.16,1,T)),this.lEdge.setMatrixAt(a,$t),te.set(M===16719904?Math.sin(n*9)>0?16777215:16769354:16765024),this.lEdge.setColorAt(a,te),a++}if(w){const b=Math.floor(T/2.2);for(let y=0;y<b&&o<200;y++){const D=((y+.5)/b+n*.6)%1,N=p+(g-p)*D,Y=x+(m-x)*D;$t.compose(Pe.set(N,C+.02,-Y),me,Ie.set(v*.55,1,1.1)),this.lChev.setMatrixAt(o,$t),te.set(16769248),this.lChev.setColorAt(o,te),o++}}};let l=0;const f=t.boss&&t.boss.arch==="warden"?12611839:10157882;for(const p of t.hazards)if(p.kind==="circle"){if(s>=120)continue;const x=1-Math.max(0,p.t)/p.total,g=Math.max(e.height(p.x,p.z),e.height(p.x+p.r*.7,p.z),e.height(p.x-p.r*.7,p.z),e.height(p.x,p.z+p.r*.7),e.height(p.x,p.z-p.r*.7),Le)+.2,m=p.src==="erupt"?16722538:16720932;if(p.lob&&l<40){const M=p.lob.x+(p.x-p.lob.x)*x,w=p.lob.z+(p.z-p.lob.z)*x,T=Math.hypot(p.x-p.lob.x,p.z-p.lob.z),A=e.height(M,w)+1.2+(4+T*.25)*Math.sin(x*Math.PI)+(1-x)*3,C=.55+Math.sin(n*20+p.id)*.06;me.setFromEuler(an.set(n*3,n*2,0)),$t.compose(Pe.set(M,A,-w),me,Ie.set(C,C,C)),this.globs.setMatrixAt(l,$t),te.set(f),this.globs.setColorAt(l,te),$t.compose(Pe.set(M,A,-w),me.identity(),Ie.set(C*2.4,C*2.4,C*2.4)),this.globGlow.setMatrixAt(l,$t),te.set(f).multiplyScalar(.7),this.globGlow.setColorAt(l,te),l++}$t.compose(Pe.set(p.x,g,-p.z),me.identity(),Ie.set(p.r,1,p.r)),this.tBase.setMatrixAt(s,$t),te.set(m),this.tBase.setColorAt(s,te),$t.compose(Pe.set(p.x,g+.01,-p.z),me.identity(),Ie.set(p.r*x,1,p.r*x)),this.tFill.setMatrixAt(s,$t),this.tFill.setColorAt(s,te);const v=1+Math.sin(n*18)*.025;$t.compose(Pe.set(p.x,g+.02,-p.z),me.identity(),Ie.set(p.r*v,1,p.r*v)),this.tRing.setMatrixAt(s,$t);const _=x>.75?Math.sin(n*30)>0:Math.sin(n*9)>0;te.set(_?16777215:16769354),this.tRing.setColorAt(s,te),s++}else if(p.kind==="lane"&&r<40){const x=Math.min(1,1-Math.max(0,p.t)/p.total);c(p.x,p.z,p.x1,p.z1,p.w,x,16719904)}const u=t.player,d=t.enemies.filter(p=>p.type==="dog"&&p.state==="crouch"&&Math.abs(p.x-u.x)<12&&Math.abs(p.z-u.z)<12).sort((p,x)=>Math.hypot(p.x-u.x,p.z-u.z)-Math.hypot(x.x-u.x,x.z-u.z)).slice(0,4);for(const p of d){if(r>=40)break;const x=1-p.timer/.45;c(p.x,p.z,p.x+p.lx*6.5,p.z+p.lz*6.5,.7,x,16738842,!1)}Ae(this.globs,l),Ae(this.globGlow,l),Ae(this.tBase,s),Ae(this.tFill,s),Ae(this.tRing,s),Ae(this.lBase,r),Ae(this.lFill,r),Ae(this.lEdge,a),Ae(this.lChev,o);let h=0;for(const p of t.pending){if(h>=40)break;const x=1-p.t/p.total,g=Math.max(e.height(p.x,p.z),Le)+.15,m=p.kind==="call"?16728016:p.kind==="ambush"?16724016:16747034,v=p.spread+.8+Math.sin(n*12)*.2;$t.compose(Pe.set(p.x,g,-p.z),me.identity(),Ie.set(v,1,v)),this.wRing.setMatrixAt(h,$t),te.set(m),this.wRing.setColorAt(h,te),$t.compose(Pe.set(p.x,g,-p.z),me.identity(),Ie.set(v*.7,6+x*6,v*.7)),this.wBeam.setMatrixAt(h,$t),te.set(m).multiplyScalar(.5+x*.5),this.wBeam.setColorAt(h,te),h++}Ae(this.wRing,h),Ae(this.wBeam,h)}updateDrops(t,e,n){const s={};for(const a of Object.keys(this.dropMeshes))s[a]=0;const r={};for(const a of Object.keys(this.miniMeshes))r[a]=0;let o=0;for(const a of t.drops){const c=a.life-a.age<5&&Math.sin(n*20)>.2,l=a.kind==="weapon"?"weaponCrate":a.kind,f=this.dropMeshes[l];if(!f)continue;const u=Math.max(e.height(a.x,a.z),Le),d=Math.sin(n*3+a.id)*.15,h=u+1+d,p=n*1.8+a.id,x=Math.min(1,a.age*4),g=(a.kind==="weapon"?1.05:1.15)*x*(c?1e-4:1);if(an.set(a.kind==="evasion"?.2:0,a.kind==="weapon"?p*.5:p,0),me.setFromEuler(an),$t.compose(Pe.set(a.x,h,-a.z),me,Ie.set(g,g,g)),f.setMatrixAt(s[l]++,$t),a.kind==="weapon"&&a.weapon&&this.miniMeshes[a.weapon]&&(an.set(0,p,0),me.setFromEuler(an),$t.compose(Pe.set(a.x,h+.55*g,-a.z),me,Ie.set(g*1.5,g*1.5,g*1.5)),this.miniMeshes[a.weapon].setMatrixAt(r[a.weapon]++,$t)),o<60){const m=a.kind==="weapon"?He[a.weapon]?.color??zo.weapon:zo[a.kind];$t.compose(Pe.set(a.x,u+.05,-a.z),me.identity(),Ie.set(1,3.2+Math.sin(n*4+a.id)*.3,1)),this.dropBeam.setMatrixAt(o,$t),te.set(m).multiplyScalar(c?.2:.9),this.dropBeam.setColorAt(o,te);const v=1+Math.sin(n*5+a.id)*.1;$t.compose(Pe.set(a.x,u+.1,-a.z),me.identity(),Ie.set(v,1,v)),this.dropRing.setMatrixAt(o,$t),te.set(m),this.dropRing.setColorAt(o,te),o++}}for(const[a,c]of Object.entries(this.dropMeshes))Ae(c,s[a]);for(const[a,c]of Object.entries(this.miniMeshes))Ae(c,r[a]);Ae(this.dropBeam,o),Ae(this.dropRing,o)}onContainerHit(t){this.contFlash.set(t,.12)}updateContainers(t,e,n,s){let r=0,o=0,a=0;for(const[c,l]of this.contFlash)l-n<=0?this.contFlash.delete(c):this.contFlash.set(c,l-n);for(const c of Bo(t,e,70)){const l=c.type==="locker"?this.lockers:this.crates,f=c.type==="locker"?o:r;if(f>=40)continue;const u=e.height(c.x,c.z),d=this.contFlash.get(c.id)||0,h=d>0?Math.sin(s*80)*.06:0;an.set(0,c.rot,h),me.setFromEuler(an),$t.compose(Pe.set(c.x+h,u,-c.z),me,Ie.set(1.15,1.15,1.15)),l.setMatrixAt(f,$t),te.setRGB(1,1,1),d>0&&te.setRGB(3,3,3),l.setColorAt(f,te),c.type==="locker"?o++:r++;const p=Kc(c.type);if(c.hp<p&&a<40){const x=c.hp/p;an.set(-.9,0,0),me.setFromEuler(an),$t.compose(Pe.set(c.x-(1-x)*.6,u+2,-c.z),me,Ie.set(1.2*x,1,1)),this.contHpBar.setMatrixAt(a,$t),te.set(16765498),this.contHpBar.setColorAt(a,te),a++}}Ae(this.crates,r),Ae(this.lockers,o),Ae(this.contHpBar,a)}updateShadows(t,e,n,s){let r=0;const o=(a,c,l)=>{if(r>=240)return;const f=Math.max(e.height(a,c),Le)+.06;$t.compose(Pe.set(a+.15,f,-c+.1),me.identity(),Ie.set(l,1,l)),this.shadows.setMatrixAt(r++,$t)};s&&o(s.x,s.z,1.5);for(const a of t.enemies){const c=a.px+(a.x-a.px)*n,l=a.pz+(a.z-a.pz)*n;o(c,l,a.type==="guardian"?6:a.type==="brute"?3.2:a.type==="dog"?1.6:1.4)}for(const a of t.drops)o(a.x,a.z,1);Ae(this.shadows,r)}}function f2(){let t;if(typeof document<"u"){t=document.createElement("canvas"),t.width=t.height=64;const n=t.getContext("2d"),s=n.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.55,"rgba(255,255,255,0.65)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,64,64)}const e=new zc(t);return e.colorSpace=sn,e}const Je={pitch:.84,distance:34,halfWidth:9.3,lookAhead:7.5,yaw:0,calmZoom:.88,fightZoomMax:1.6},jh={x:.5,y:.3},Kh=.55,_i={floor:.8,step:.1,slow:.042,fast:.036,raiseWait:2.5},d2=new Ft(5913168),p2=new Ft(10119802),m2=new Ft(16751226),g2=new Ft(7758474),x2=new Ft(12099792),Zh=new Ft,_2=new Ft(16777215),v2={walker:10205306,dog:5914680,brute:9067168,guardian:4074072};class M2{constructor(t){this.canvas=t,this.renderer=new E1({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.outputColorSpace=sn,this.renderer.toneMapping=ai,this.renderer.info.autoReset=!1,this.renderer.autoClear=!1,this.scene=new Ll,this.scene.background=new Ft(11132149),this.scene.fog=new Lc(12575727,78,175),this.camera=new In(55,1,.5,400),this.hemi=new Hl(15398655,6969914,2.3),this.scene.add(this.hemi),this.sun=new Wl(16773328,2.4),this.sun.position.set(-.55,1,.45),this.scene.add(this.sun),this.courierScene=new Ll,this.courierScene.fog=this.scene.fog,this.cHemi=new Hl(15398655,6969914,2.3),this.cSun=new Wl(16773328,2.4),this.courierScene.add(this.cHemi,this.cSun,this.cSun.target),this.crowdK=0;const e=new Fe,n=[];for(const s of[0,.75])n.push(-.55,0,s+.35,0,0,s-.3,.55,0,s+.35,.55,0,s+.62,0,0,s-.02,-.55,0,s+.62);e.setAttribute("position",new le(n,3)),e.setIndex([0,1,4,1,2,4,2,3,4,0,4,5,6,7,10,7,8,10,8,9,10,6,10,11]),this.routeCue=new se(e,new xe({color:4190408,transparent:!0,opacity:.5,depthWrite:!1,side:Oe})),this.routeCue.renderOrder=34,this.scene.add(this.routeCue),this.cueK=0,this.shadowTex=f2(),this.worldView=new Q_(this.scene,this.shadowTex),this.worldView.setGhostScene(this.courierScene),this.ghostCalls=0,this.courier=new pv(this.courierScene),this.enemies=new gv(this.scene),this.effects=new u2(this.scene,this.shadowTex),this.world=null,this.camPos=new z,this.camTarget=new z,this.camInit=!1,this.shakeAmt=0,this.time=0,this.recoil=0,this.skyColor=new Ft,this.fogColor=new Ft,this.footstep=null,this.lastInfo={calls:0,triangles:0},this.courierPos={x:0,y:0,z:0},this.zoom=1,this.seen=new Map,this.dying=[],this.lead=new Lt,this.threat=0,this.peakT=0,this.blight=0,this.frameSafe={top:.2,bottom:.86},this.fightFramed=!1,this.resize()}setWorld(t){this.world=t,this.worldView.setWorld(t),this.camInit=!1,this.dying=[],this.compiled||this.precompile()}precompile(){this.compiled=!0;try{const t=Object.keys(this.worldView.protoMeshes).find(n=>n.startsWith("bldg"));t&&this.worldView.ghostFor(t);const e=this.renderer;e.compileAsync?e.compileAsync(this.scene,this.camera).then(()=>e.compileAsync(this.courierScene,this.camera)).catch(()=>{}):(e.compile(this.scene,this.camera),e.compile(this.courierScene,this.camera))}catch{}}resize(){const t=Math.max(1,this.canvas.clientWidth||window.innerWidth),e=Math.max(1,this.canvas.clientHeight||window.innerHeight);this.renderer.setSize(t,e,!1);const n=t/e;this.camera.aspect=n;const s=2*Math.atan(Je.halfWidth/(Je.distance*n));this.camera.fov=Cn.clamp(Cn.radToDeg(s),42,66),this.camera.updateProjectionMatrix(),this.lookAhead=Cn.clamp(Je.lookAhead-(n-.46)*22,4.6,Je.lookAhead)}shake(t){this.shakeAmt=Math.min(1.2,this.shakeAmt+t)}adaptQuality(t,e){if(this.maxDpr||(this.maxDpr=Math.min(window.devicePixelRatio||1,2),this.minDpr=Math.max(1,Math.round(this.maxDpr*_i.floor*100)/100),this.dpr=this.maxDpr,this.lastCheck=e,this.lastChange=e,this.lastRaise=-1e9,this.raiseWait=_i.raiseWait),e-this.lastCheck<1||t.length<40)return;this.lastCheck=e;const n=t.slice(-40).sort((o,a)=>o-a),s=n[Math.floor(n.length/2)];let r=this.dpr;s>_i.slow&&this.dpr>this.minDpr+.001?(r=Math.max(this.minDpr,Math.round((this.dpr-_i.step)*100)/100),e-this.lastRaise<4&&(this.raiseWait=Math.min(20,this.raiseWait*2))):s<_i.fast&&this.dpr<this.maxDpr-.001&&e-this.lastChange>this.raiseWait?(r=Math.min(this.maxDpr,Math.round((this.dpr+_i.step)*100)/100),this.lastRaise=e):s<_i.fast&&e-this.lastChange>30&&(this.raiseWait=_i.raiseWait),r!==this.dpr&&(this.dpr=r,this.lastChange=e,this.lastCheck=e+.5,this.renderer.setPixelRatio(r),this.resize())}peak(t){this.peakT=Math.max(this.peakT,t)}screenToWorld(t,e){const n=Je.yaw;return{mx:t*Math.cos(n)+e*Math.sin(n),mz:e*Math.cos(n)-t*Math.sin(n)}}render(t,e,n){const s=this.world||Ne(t);s!==this.world&&this.setWorld(s),this.time+=n;const r=t.player,o=r.px+(r.x-r.px)*e,a=r.pz+(r.z-r.pz)*e,c=Math.max(s.height(o,a),Le-.4);this.courierPos={x:o,y:c,z:a},this.worldView.update(a,o),this.worldView.updateRefuges(t,this.time);let l=0,f=1/0;for(const j of t.enemies){if(j.state==="spawn")continue;const vt=Math.hypot(j.x-o,j.z-a)-j.radius;vt<f&&(f=vt),vt<5.5&&l++}this.forceTopT>0&&(this.forceTopT-=n);const u=this.camInit&&this.courierCovered(t,s,o,c,a,e),d=r.alive&&(f<2.6||l>=3||u||this.forceTopT>0)?1:0;this.covered=u,this.crowdK+=(d-this.crowdK)*Math.min(1,n*(d?10:2.5)),this.courier.crowd=this.crowdK,this.updateRouteCue(t,s,o,c,a,n);let h=t;const p=this.worldView.lantern;if(t.phase==="complete"&&p){const j=this.arrivalT||0;if(!this.handover){const S=p.pos.x-o,X=-p.pos.z-a,lt=Math.hypot(S,X)||1;this.handover={x0:o,z0:a,x1:p.pos.x-S/lt*3.2,z1:-p.pos.z-X/lt*3.2,given:!1}}const vt=this.handover,Mt=Cn.smoothstep(j,.3,2.2),Nt=vt.x0+(vt.x1-vt.x0)*Mt,ce=vt.z0+(vt.z1-vt.z0)*Mt,de=Mt>0&&Mt<1,P=Math.atan2(vt.x1-vt.x0,vt.z1-vt.z0);this.courierPos={x:Nt,y:Math.max(s.height(Nt,ce),Le-.4),z:ce},h={...t,player:{...t.player,vx:de?Math.sin(P)*3:0,vz:de?Math.cos(P)*3:0},facing:{...t.facing,legs:P,travel:P,moving:de,shot:-1}},Mt>=1&&!vt.given&&(vt.given=!0,this.parcelFly={t:0,x:Nt,y:this.courierPos.y+1.6,z:-ce,tx:p.pos.x,ty:p.pos.y-22,tz:p.pos.z})}else this.handover=null;this.parcelFly&&this.updateParcelFly(n);const x=this.courier.update(h,this.courierPos,n,this.time,this.recoil);if(this.recoil=0,x&&this.footstep){const j=s.roadInfo(a),vt=Math.abs(o-j.x)<j.halfWidth+.3;this.footstep(vt&&j.asphalt>.5?"road":vt?"dirt":"grass")}this.enemies.begin(),this.seen.clear();for(const j of t.enemies)this.enemies.draw(j,s,e,this.time),this.seen.set(j.id,j);const g=[];for(const j of this.dying)j.t+=n,!(j.t>=j.dur)&&(g.push(j),this.enemies.draw(j.e,s,1,this.time,j));this.dying=g,this.enemies.end();let m=s.corruption(o,a)*2;for(const[j,vt]of[[9,4],[-9,4],[0,12],[0,-6]])m+=s.corruption(o+j,a+vt);this.blight+=(m/6-this.blight)*(this.camInit?Math.min(1,n*1.2):1);const v=Cn.smoothstep(this.blight,.38,.8);if(this.effects.update(t,s,e,n,this.time,this.courierPos,this.blight),this.dustT=(this.dustT||0)-n,this.dustT<=0){this.dustT=.07;for(const j of t.enemies){if(!j.burrowed)continue;const vt=Math.max(s.height(j.x,j.z),Le);this.effects.burst(j.x,vt+.5,j.z,j.state==="emerge"?5:3,j.state==="emerge"?9071162:6965802,4,.2,.6,14,4)}}this.worldView.veinTime.value=this.time;const _=s.biomeAt(a),M=fn[_.a],w=fn[_.b];this.skyColor.set(M.sky).lerp(Zh.set(w.sky),_.t),this.fogColor.set(M.fog).lerp(Zh.set(w.fog),_.t),this.fogColor.lerp(g2,v*.5),this.skyColor.lerp(x2,v*.55);const T=t.boss.active&&!t.boss.defeated;this.peakT>0&&(this.peakT-=n);const A=T?1:this.peakT>0?.85:0;this.threat+=(A-this.threat)*Math.min(1,n*(A>this.threat?2.5:.8));const C=this.threat;this.fogColor.lerp(d2,C*.28),this.skyColor.lerp(p2,C*.2),this.scene.background.copy(this.fogColor),this.scene.fog.color.copy(this.fogColor),this.hemi.color.copy(this.skyColor).lerp(_2,.5-v*.2-C*.15),this.hemi.intensity=2.3-v*.35-C*.35,this.sun.intensity=2.4-v*.45-C*.3,this.sun.color.setHex(16773328).lerp(m2,C*.25);let b=0,y=0,D=0;for(const j of t.enemies){const vt=j.x-o,Mt=j.z-a;Math.abs(vt)<18&&Math.abs(Mt)<22&&b++;const Nt=Math.hypot(vt,Mt);if(Nt<3||Nt>28||j.state==="spawn")continue;const ce=j.boss?4:j.type==="brute"?1.6:1;y+=vt/Nt*ce,D+=Mt/Nt*ce}for(const j of t.pending){const vt=j.x-o,Mt=j.z-a,Nt=Math.hypot(vt,Mt)||1;y+=vt/Nt*j.types.length*.6,D+=Mt/Nt*j.types.length*.6}const N=t.boss.active&&!t.boss.defeated,Y=!N&&this.peakT<=0&&f>22&&!t.pending.length&&t.phase==="travel";let q=Y?Je.calmZoom:1+(N?.15:this.peakT>0?.08:0)+Math.min(.12,b*.005);const V=Math.hypot(y,D),Z=V>0?Math.min(3.2,V*.35)/V:0;let ct=Cn.clamp(r.vx*.3+y*Z,-4,4),K=Cn.clamp(r.vz*.12+D*Z*(N?1.2:.6),-2.5,N?4.5:2);const mt=s.roadY(a)*.5+c*.5;let xt=this.solveLookAhead(o,c,a,mt,1,1-2*Kh);!this.showCue&&this.previewFocusY!=null&&(q=.8,xt=this.solveLookAhead(o,c,a,mt,.8,1-2*this.previewFocusY)),this.fightFramed=!1;const _t=N?t.enemies.find(j=>j.boss&&j.state!=="dead"):null;if(_t&&t.phase==="travel"){const j=_t.px+(_t.x-_t.px)*e,vt=_t.pz+(_t.z-_t.pz)*e;if(Math.hypot(j-o,vt-a)<30){const Mt=s.height(j,vt),Nt=[[j-2.7,Mt,-vt],[j+2.7,Mt,-vt],[j-2.7,Mt+6.2,-vt],[j+2.7,Mt+6.2,-vt]],ce=this.frameFight(o,c,a,Nt,mt,xt,ct,K,q);ct=ce.lx,K=ce.lz,q=ce.zoom,this.fightFramed=ce.reframed}}else if(t.boss.defeated&&t.phase==="travel"){const j=s.refuges[Math.min(t.legIndex,s.refuges.length-1)];if(j&&Math.hypot(j.x-o,j.z-a)<34){const vt=s.roadY(j.z)+.1,Mt=[[j.x-5.5,vt,-j.z],[j.x+5.5,vt,-j.z],[j.x,vt,-(j.z+5.5)],[j.x,vt,-(j.z-5.5)]],Nt=this.frameFight(o,c,a,Mt,mt,xt,ct,K,Math.max(1,q),1.28);ct=Nt.lx,K=Nt.lz,q=Nt.zoom}}const Dt=q>this.zoom?this.fightFramed?2.6:2.2:Y?.7:1.5;this.zoom+=(q-this.zoom)*(this.camInit?Math.min(1,n*Dt):1);const ne=this.camInit?Math.min(1,n*(this.fightFramed?2.6:1.8)):1;this.lead.x+=(ct-this.lead.x)*ne,this.lead.y+=(K-this.lead.y)*ne;let re=Je.distance*this.zoom;const oe=Je.yaw,ft=this.showCue&&this.previewFocusY==null?this.solveLookAhead(o,c,a,mt,this.zoom,1-2*Kh):xt*Math.min(1,this.zoom),U=o+Math.sin(oe)*ft+this.lead.x,R=a+Math.cos(oe)*ft+this.lead.y,$=new z(U,mt,-R),ut=this.worldView.lantern;if(t.phase==="complete"&&ut){this.arrivalT=(this.arrivalT||0)+n;const j=Cn.smoothstep(this.arrivalT,.2,2.8),vt=ut.pos.y-24.6;if($.lerp(new z(ut.pos.x+3,vt+13,ut.pos.z+5),j),re=Cn.lerp(re,Je.distance*1.6,j),this.fireT=(this.fireT||0)-n,this.fireT<=0&&this.arrivalT>.6){this.fireT=.35+Math.random()*.3;const Mt=[16765498,7337928,16738970,10128127,16777215],Nt=Mt[Math.floor(Math.random()*Mt.length)],ce=ut.pos.x+(Math.random()-.5)*22,de=-ut.pos.z+(Math.random()-.5)*16,P=ut.pos.y-4+Math.random()*9;this.effects.burst(ce,P,de,40,Nt,11,.5,1.5,3,2),this.effects.flash(ce,P,de,3.5,Nt,.25)}}else this.arrivalT=0;const Tt=new z(-Math.sin(oe),0,Math.cos(oe)),Ut=$.clone().addScaledVector(Tt,Math.cos(Je.pitch)*re).add(new z(0,Math.sin(Je.pitch)*re,0));if(!this.camInit)this.camPos.copy(Ut),this.camTarget.copy($),this.camInit=!0;else{const j=Math.min(1,n*7);this.camPos.lerp(Ut,j),this.camTarget.lerp($,j)}if(this.camera.position.copy(this.camPos),this.shakeAmt>.001){const j=this.shakeAmt*.45;this.camera.position.x+=(Math.random()-.5)*j,this.camera.position.y+=(Math.random()-.5)*j,this.camera.position.z+=(Math.random()-.5)*j,this.shakeAmt=Math.max(0,this.shakeAmt-n*3.2)}this.camera.lookAt(this.camTarget);const I=this._ghostExtras||(this._ghostExtras=[]);if(I.length=0,t.phase==="complete"&&this.worldView.lantern){const j=this.worldView.lantern.pos;I.push({x:j.x,y:j.y-24.6,z:j.z,h:28})}for(const j of["guardian","brute"])for(const vt of t.enemies){if(I.length>=4)break;vt.type!==j||vt.state==="spawn"||vt.burrowed||Math.abs(vt.x-o)>22||Math.abs(vt.z-a)>26||I.push({x:vt.x,y:s.height(vt.x,vt.z),z:-vt.z,h:j==="guardian"?6:2.8})}this.ghostCalls=this.worldView.updateGhosts(this.camera,{x:o,y:c,z:-a},n,I),this.camera.updateMatrixWorld();const Vt=this._signAvoid||(this._signAvoid=[new z,new z]);Vt[0].set(o,c+1.2,-a);const Rt=I.length&&I[0].h>5?I[0]:null;Rt&&Vt[1].set(Rt.x,Rt.y+3,Rt.z),this.worldView.clampSigns(this.camera,this.camInit?n:1,this.showCue?this.frameSafe.top:0,Rt?Vt:Vt.slice(0,1)),this.sun.position.set(this.camTarget.x-30,60,this.camTarget.z+25),this.sun.target.position.copy(this.camTarget),this.sun.target.updateMatrixWorld(),this.cHemi.color.copy(this.hemi.color),this.cHemi.groundColor.copy(this.hemi.groundColor),this.cHemi.intensity=this.hemi.intensity,this.cSun.color.copy(this.sun.color),this.cSun.intensity=this.sun.intensity,this.cSun.position.copy(this.sun.position),this.cSun.target.position.copy(this.camTarget),this.cSun.target.updateMatrixWorld();const At=this.renderer;At.info.reset(),At.clear(),At.render(this.scene,this.camera),this.crowdK>.5&&At.clearDepth(),At.render(this.courierScene,this.camera),this.lastInfo={calls:At.info.render.calls,triangles:At.info.render.triangles}}ndcFor(t,e,n,s,r,o,a,c){const l=Math.sin(Je.pitch),f=Math.cos(Je.pitch),u=t-s,d=e-(r+l*a),h=n-(o+f*a),p=-(d*l+h*f);if(p<.5)return null;const x=Math.tan(Cn.degToRad(this.camera.fov)/2);return c[0]=u/(p*x*this.camera.aspect),c[1]=(d*f-h*l)/(p*x),c}solveLookAhead(t,e,n,s,r,o){const a=[0,0];let c=-40,l=20;for(let f=0;f<18;f++){const u=(c+l)/2;this.ndcFor(t,e+1.3,-n,t,s,-(n+u),Je.distance*r,a)&&a[1]<o?l=u:c=u}return(c+l)/2}frameFight(t,e,n,s,r,o,a,c,l,f=Je.fightZoomMax){const u=1-2*Cn.clamp(this.frameSafe.top+.02,.08,.45),d=1-2*Cn.clamp(this.frameSafe.bottom-.02,.55,.95),h=.84,p=[[t,e+.1,-n],[t,e+2.6,-n],...s],x=[0,0],g=(C,b,y)=>{const D=Je.distance*y,N=o*Math.min(1,y),Y=t+C,q=-(n+N+b);let V=1/0,Z=-1/0,ct=1/0,K=-1/0;for(const mt of p){if(!this.ndcFor(mt[0],mt[1],mt[2],Y,r,q,D,x))return null;x[0]<V&&(V=x[0]),x[0]>Z&&(Z=x[0]),x[1]<ct&&(ct=x[1]),x[1]>K&&(K=x[1])}return{x0:V,x1:Z,y0:ct,y1:K}},m=C=>C&&C.x0>=-h&&C.x1<=h&&C.y0>=d&&C.y1<=u,v=[0,0],_=(C,b,y)=>{const D=o*Math.min(1,y);return this.ndcFor(t,e+1.3,-n,t+C,r,-(n+D+b),Je.distance*y,v)?v:null},M=(C,b,y)=>{const D=_(C,b,y);return!!D&&Math.abs(D[0])<=jh.x&&D[1]<=jh.y&&D[1]>=-.3},w=Math.max(l,1.1);if(m(g(a,c,w))&&M(a,c,w))return{lx:a,lz:c,zoom:w,reframed:!1};const T=(u+d)/2;let A=null;for(let C=w;C<=f+1e-6;C+=.04){let b=-14,y=14;for(let xt=0;xt<14;xt++){const _t=(b+y)/2,Dt=g(a,_t,C);!Dt||(Dt.y0+Dt.y1)/2<T?y=_t:b=_t}const D=(b+y)/2;let N=-9,Y=9;for(let xt=0;xt<14;xt++){const _t=(N+Y)/2,Dt=g(_t,D,C);Dt&&(Dt.x0+Dt.x1)/2>0?N=_t:Y=_t}const q=(N+Y)/2;b=-14,y=14;for(let xt=0;xt<14;xt++){const _t=(b+y)/2,Dt=_(0,_t,C);!Dt||Dt[1]<-.12?y=_t:b=_t}const V=(b+y)/2;let Z=0,ct=1;if(M(q,D,C))Z=1;else for(let xt=0;xt<12;xt++){const _t=(Z+ct)/2;M(q*_t,V+(D-V)*_t,C)?Z=_t:ct=_t}const K=q*Z,mt=V+(D-V)*Z;if(A={lx:K,lz:mt,zoom:C,reframed:!0},m(g(K,mt,C)))return A}return A}courierCovered(t,e,n,s,r,o){const a=this.camera,c=this._cv||(this._cv=new z),l=(d,h,p,x,g)=>{let m=1/0,v=-1/0,_=1/0,M=-1/0;for(const[w,T]of[[-x,0],[x,0],[-x,g],[x,g]])c.set(d+w,h+T,-p).project(a),c.x<m&&(m=c.x),c.x>v&&(v=c.x),c.y<_&&(_=c.y),c.y>M&&(M=c.y);return[m,v,_,M]},f=l(n,s,r,.55*Xi,2*Xi),u=Math.hypot(a.position.x-n,a.position.y-s-1,a.position.z+r);for(const d of t.enemies){if(d.state==="spawn"||d.burrowed)continue;const h=d.px+(d.x-d.px)*o,p=d.pz+(d.z-d.pz)*o;if(Math.abs(h-n)>9||Math.abs(p-r)>12)continue;const x=d.type==="guardian"?6.5:d.type==="brute"?3.2:d.type==="dog"?1.3:2.1,g=e.height(h,p);if(Math.hypot(a.position.x-h,a.position.y-g-x*.4,a.position.z+p)>u+.3)continue;const m=l(h,g,p,d.radius*1.2,x);if(m[0]<f[1]&&m[1]>f[0]&&m[2]<f[3]&&m[3]>f[2])return!0}return!1}updateParcelFly(t){const e=this.parcelFly;this.parcelMesh||(this.parcelMesh=new se(new Ii(.6,.6,.45),new xe({color:16774364})),this.parcelMesh.renderOrder=50,this.courierScene.add(this.parcelMesh)),e.t+=t;const n=Math.min(1,e.t/.8),s=this.parcelMesh;s.visible=n<1,s.position.set(e.x+(e.tx-e.x)*n,e.y+(e.ty-e.y)*n+Math.sin(n*Math.PI)*2.2,e.z+(e.tz-e.z)*n),s.rotation.set(n*4,n*6,0),s.material.color.setHex(Math.sin(e.t*30)>0?16774364:16757066),n>=1&&!e.done&&(e.done=!0,this.effects.flash(e.tx,e.ty,-e.tz,4,16771488,.4),this.effects.burst(e.tx,e.ty,-e.tz,30,16765803,6,.18,.9,4,5),this.effects.ring(e.tx,e.ty-1.5,-e.tz,6,7337928,.8),this.lanternFlare=1.5,this.onHandover&&this.onHandover()),e.done&&e.t>1.2&&(this.parcelFly=null)}updateRouteCue(t,e,n,s,r,o){const a=this.routeCue,c=t.player,l=t.boss.active&&!t.boss.defeated;if((!c.alive||l||t.phase!=="travel"||!this.showCue)&&(this.cueK=Math.max(0,this.cueK-o*4),a.visible=this.cueK>.02,!a.visible))return;const f=of(t);let u=f.x-n,d=f.z-r;const h=Math.hypot(u,d)||1;u/=h,d/=h;const p=Math.abs(n-e.roadX(r)),x=Math.hypot(c.vx,c.vz),g=x>2&&(c.vx*u+c.vz*d)/x<-.2;let m=.28;if(t.boss.defeated?m=1:(p>e.clearHalf(r)+2.5||g)&&(m=.95),(l||!c.alive||!this.showCue)&&(m=0),this.cueK+=(m-this.cueK)*Math.min(1,o*3),a.visible=this.cueK>.02&&h>3,!a.visible)return;const v=2.5+this.time*1.2%1*.5,_=n+u*v,M=r+d*v;a.position.set(_,Math.max(e.height(_,M),s-.5)+.16,-M),a.rotation.y=Math.atan2(-u,d),a.material.opacity=this.cueK*(.55+.35*Math.sin(this.time*6)),a.scale.setScalar(1+this.cueK*.35)}project(t,e,n){const s=new z(t,e,-n).project(this.camera),r=this.canvas.clientWidth,o=this.canvas.clientHeight;return{x:(s.x*.5+.5)*r,y:(-s.y*.5+.5)*o,visible:s.z<1&&s.z>-1}}heightAt(t,e){return this.world?this.world.height(t,e):0}onEvent(t,e){const n=this.effects,s=this.world;if(!s)return;const r=(c,l)=>Math.max(s.height(c,l),Le),o=this.courierPos,a=(c,l,f)=>Math.hypot(c-o.x,l-o.z)<f;switch(t.t){case"shot":{const c=He[t.weapon].color,l=r(t.x,t.z)+1.45;n.flash(t.x+Math.sin(t.angle)*.35,l,t.z+Math.cos(t.angle)*.35,t.weapon==="scattergun"?1.3:t.weapon==="arc"?1.2:.8,c,.07),this.recoil=t.weapon==="scattergun"||t.weapon==="arc"?1:.5,t.weapon==="scattergun"&&n.burst(t.x,l,t.z,4,16765056,3,.08,.2,2,1);break}case"hit":{const c=r(t.x,t.z)+(t.type==="guardian"?3.5:t.type==="brute"?2:1.1);if(t.armored){n.burst(t.x,c,t.z,3,14214384,6,.08,.2,10,3);break}n.burst(t.x,c,t.z,t.type==="guardian"?5:3,t.power?13855743:16774080,4,.12,.25,8,2),n.burst(t.x,c,t.z,2,9058922,3,.14,.35,12,2);break}case"impact":n.flash(t.x,r(t.x,t.z)+1.3,t.z,.5,He[t.w].color,.06);break;case"fizzle":n.burst(t.x,r(t.x,t.z)+1.4,t.z,3,He[t.w].color,1.5,.08,.25,4,.5);break;case"kill":{const c=this.seen.get(t.id);if(c&&this.dying.length<40){const u={...c,px:c.x,pz:c.z,hitFlash:0,state:"dead"};this.dying.push({e:u,t:0,dur:t.type==="guardian"?1.6:t.type==="brute"?1:.75})}const l=t.type==="guardian"?3:t.type==="brute"?1.8:1,f=r(t.x,t.z)+1*l;n.burst(t.x,f,t.z,Math.round(10*l),v2[t.type],5*l,.22*l,.7,16,5),n.burst(t.x,f,t.z,Math.round(6*l),16732026,6*l,.14*l,.55,10,4),n.ring(t.x,r(t.x,t.z)+.2,t.z,1.6*l,16736126,.4),t.type==="guardian"?(this.shake(1),n.flash(t.x,f+3.5,t.z,3.2,16734896,.25),this.forceTopT=2.5):t.type==="brute"&&this.shake(.2);break}case"explode":{const c=r(t.x,t.z)+.6;n.flash(t.x,c,t.z,t.r*1.4,13855743,.18),n.ring(t.x,r(t.x,t.z)+.25,t.z,t.r,14715647,.4),n.burst(t.x,c,t.z,14,13855743,7,.18,.5,10,4),a(t.x,t.z,14)&&this.shake(.18);break}case"containerHit":n.onContainerHit(t.id),n.burst(t.x,r(t.x,t.z)+.8,t.z,3,t.type==="locker"?12634304:14196832,3,.12,.35,12,3);break;case"containerBreak":{const c=r(t.x,t.z)+.6,l=t.type==="locker"?4155976:13208130;n.burst(t.x,c,t.z,16,l,6,.3,.8,16,6),n.burst(t.x,c,t.z,8,16765498,5,.12,.6,6,4),n.ring(t.x,r(t.x,t.z)+.2,t.z,2.2,16765498,.45);break}case"pickup":{const c=zo[t.kind]||16777215;n.ring(t.x,r(t.x,t.z)+.2,t.z,2.4,c,.5),n.burst(t.x,r(t.x,t.z)+1,t.z,14,c,3,.12,.7,-2,3);break}case"drop":n.ring(t.x,r(t.x,t.z)+.2,t.z,1.4,zo[t.kind]||16777215,.4);break;case"hazardBoom":{const c=r(t.x,t.z);n.ring(t.x,c+.2,t.z,t.r,16726586,.35,0),n.burst(t.x,c+.3,t.z,t.src==="erupt"?14:10,t.src==="erupt"?6957690:9071178,6,.25,.6,18,9),t.src==="erupt"&&n.burst(t.x,c+.3,t.z,8,16732026,4,.16,.6,12,10),a(t.x,t.z,12)&&this.shake(.3);break}case"slam":{const c=r(t.x,t.z);n.ring(t.x,c+.2,t.z,t.big?4:3,16752736,.4),n.burst(t.x,c+.2,t.z,10,10123866,5,.22,.5,14,4),a(t.x,t.z,14)&&this.shake(t.big?.5:.25);break}case"gateZap":{const c=r(t.x,t.z);n.burst(t.x,c+1.2,t.z,14,16728160,6,.12,.45,6,4),n.burst(t.x,c+1.2,t.z,6,16777215,5,.08,.3,4,3),n.ring(t.x,c+.25,t.z,2.2,16724048,.4),n.flash(t.x,c+1.3,t.z,2.2,16728160,.12),this.shake(.25);break}case"playerHit":this.shake(t.heavy?.7:.3),n.burst(o.x,o.y+1.2,o.z,t.absorbed>0?8:6,t.absorbed>0?3139327:16724016,4,.12,.4,10,3);break;case"arrive":{const c=r(t.x,t.z);n.ring(t.x,c+.2,t.z,3+t.count*.2,t.kind==="call"?16728016:16747034,.5),n.burst(t.x,c+.3,t.z,10+t.count,5913130,5,.25,.7,16,6);break}case"bossAppear":this.shake(.6),n.ring(t.x,r(t.x,t.z)+.3,t.z,7,16722538,.8),n.burst(t.x,r(t.x,t.z)+1,t.z,30,2759226,8,.4,1,16,8);break;case"bossDown":this.shake(1);break;case"bossBurrow":{const c=r(t.x,t.z);this.shake(.4),n.ring(t.x,c+.25,t.z,4,13146714,.5),n.burst(t.x,c+.6,t.z,26,6965802,7,.3,.8,16,7);break}case"bossSurface":{const c=r(t.x,t.z);this.shake(.6),n.burst(t.x,c+.6,t.z,30,8018482,8,.32,.9,16,9),n.burst(t.x,c+1.5,t.z,10,16738858,5,.16,.6,6,5);break}case"bossExposed":{const c=r(t.x,t.z);n.burst(t.x,c+3.2,t.z,18,16756794,6,.14,.6,8,5),n.burst(t.x,c+3.2,t.z,10,12635352,7,.12,.5,12,4);break}case"bossEnrage":{const c=r(t.x,t.z);this.shake(.7),n.ring(t.x,c+.25,t.z,7,16722490,.7),n.burst(t.x,c+4,t.z,30,16726570,8,.24,.9,6,6),n.flash(t.x,c+4,t.z,6,16728112,.25);break}case"bossStagger":{const c=r(t.x,t.z);this.shake(.55),n.ring(t.x,c+.25,t.z,5.5,16765168,.55),n.burst(t.x,c+4.5,t.z,26,16732120,7,.22,.8,10,5),n.flash(t.x,c+4,t.z,5,16765168,.2);break}case"checkpoint":case"complete":n.ring(o.x,o.y+.3,o.z,8,7337928,.9),n.burst(o.x,o.y+1,o.z,30,7337928,4,.18,1,-1,4);break}}info(){return{...this.lastInfo,pixelRatio:this.renderer.getPixelRatio(),courierScale:Xi,zoom:+this.zoom.toFixed(3),ghosts:this.worldView.ghostCount,ghostCalls:this.ghostCalls,fightFramed:this.fightFramed,courierOnTop:this.crowdK>.5,covered:!!this.covered,courierScreenY:+(this.project(this.courierPos.x,this.courierPos.y+1.3,this.courierPos.z).y/Math.max(1,this.canvas.clientHeight)).toFixed(3)}}}const Jh=.5;class y2{constructor(){this.ctx=null,this.muted=!1,this.counts={},this.last={},this.ambient=null,this.birdTimer=6,this.surfaceBias="road",this.enabled=!0}get ready(){return!!this.ctx&&this.ctx.state==="running"}unlock(){try{if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t;const e=this.ctx;this.master=e.createGain(),this.master.gain.value=this.muted?0:.85,this.comp=e.createDynamicsCompressor(),this.comp.threshold.value=-24,this.comp.knee.value=10,this.comp.ratio.value=3.5,this.comp.attack.value=.006,this.comp.release.value=.25,this.makeup=e.createGain(),this.makeup.gain.value=3.2,this.limiter=e.createDynamicsCompressor(),this.limiter.threshold.value=-3,this.limiter.knee.value=0,this.limiter.ratio.value=20,this.limiter.attack.value=.002,this.limiter.release.value=.12,this.analyser=e.createAnalyser(),this.analyser.fftSize=1024,this.master.connect(this.comp),this.comp.connect(this.makeup),this.makeup.connect(this.limiter),this.limiter.connect(this.analyser),this.analyser.connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=.9,this.sfx.connect(this.master),this.amb=e.createGain(),this.amb.gain.value=Jh,this.amb.connect(this.master);const n=e.sampleRate*2;this.noiseBuf=e.createBuffer(1,n,e.sampleRate);const s=this.noiseBuf.getChannelData(0);let r=0;for(let o=0;o<n;o++){const a=Math.random()*2-1;r=.97*r+.03*a,s[o]=a*.7+r*1.6}this.startAmbient()}this.ctx.state!=="running"&&this.ctx.resume()}catch{this.enabled=!1}}setMuted(t){this.muted=t,this.master&&this.ctx&&(this.master.gain.cancelScheduledValues(this.ctx.currentTime),this.master.gain.setTargetAtTime(t?0:.85,this.ctx.currentTime,.03))}rms(){if(!this.analyser)return 0;const t=new Float32Array(this.analyser.fftSize);this.analyser.getFloatTimeDomainData(t);let e=0;for(const n of t)e+=n*n;return Math.sqrt(e/t.length)}tone({f:t=440,f2:e=null,type:n="sine",dur:s=.15,gain:r=.2,attack:o=.005,at:a=0,bus:c=null,detune:l=0,q:f=null,lp:u=null}){const d=this.ctx,h=d.currentTime+a,p=d.createOscillator();p.type=n,p.frequency.setValueAtTime(t,h),e&&p.frequency.exponentialRampToValueAtTime(Math.max(20,e),h+s),p.detune.value=l;const x=d.createGain();x.gain.setValueAtTime(1e-4,h),x.gain.exponentialRampToValueAtTime(r,h+o),x.gain.exponentialRampToValueAtTime(1e-4,h+s);let g=p;if(u){const m=d.createBiquadFilter();m.type="lowpass",m.frequency.value=u,f&&(m.Q.value=f),p.connect(m),g=m}g.connect(x),x.connect(c||this.sfx),p.start(h),p.stop(h+s+.05)}noise({dur:t=.2,type:e="bandpass",f:n=1e3,f2:s=null,q:r=1,gain:o=.2,attack:a=.003,at:c=0,bus:l=null}){const f=this.ctx,u=f.currentTime+c,d=f.createBufferSource();d.buffer=this.noiseBuf,d.playbackRate.value=.8+Math.random()*.4;const h=f.createBiquadFilter();h.type=e,h.frequency.setValueAtTime(n,u),s&&h.frequency.exponentialRampToValueAtTime(Math.max(30,s),u+t),h.Q.value=r;const p=f.createGain();p.gain.setValueAtTime(1e-4,u),p.gain.exponentialRampToValueAtTime(o,u+a),p.gain.exponentialRampToValueAtTime(1e-4,u+t),d.connect(h),h.connect(p),p.connect(l||this.sfx),d.start(u,Math.random()*1.5),d.stop(u+t+.05)}limit(t,e){const n=this.ctx.currentTime;return this.last[t]!==void 0&&n-this.last[t]<e?!1:(this.last[t]=n,!0)}play(t,e={}){if(!(!this.ctx||!this.enabled||this.ctx.state!=="running")){this.counts[t]=(this.counts[t]||0)+1;try{this[`s_${t}`]?.(e)}catch{}}}s_sidearm(){this.limit("sidearm",.05)&&(this.tone({f:980,f2:260,type:"square",dur:.09,gain:.07,lp:2600}),this.noise({dur:.04,type:"highpass",f:2500,gain:.12}))}s_scattergun(){this.limit("scattergun",.1)&&(this.noise({dur:.26,type:"bandpass",f:1300,f2:300,q:.7,gain:.35}),this.tone({f:140,f2:45,type:"sine",dur:.2,gain:.35}),this.noise({dur:.05,type:"highpass",f:3e3,gain:.1,at:.16}))}s_burst(){if(this.limit("burst",.1))for(let t=0;t<3;t++)this.tone({f:1500,f2:520,type:"sawtooth",dur:.05,gain:.05,at:t*.07,lp:3500}),this.noise({dur:.035,type:"highpass",f:1800,gain:.1,at:t*.07})}s_arc(){this.limit("arc",.15)&&(this.tone({f:180,f2:720,type:"triangle",dur:.28,gain:.16}),this.noise({dur:.3,type:"bandpass",f:600,f2:2400,q:2,gain:.12}))}s_explode(){this.limit("explode",.06)&&(this.noise({dur:.55,type:"lowpass",f:900,f2:120,q:.8,gain:.45}),this.tone({f:90,f2:32,type:"sine",dur:.45,gain:.4}),this.tone({f:1200,f2:300,type:"sine",dur:.2,gain:.05}))}s_switch(){this.limit("switch",.6)&&(this.noise({dur:.03,type:"highpass",f:2200,gain:.06}),this.noise({dur:.04,type:"bandpass",f:1200,q:3,gain:.06,at:.07}))}s_hit({big:t}){this.limit("hit",.035)&&this.noise({dur:.05,type:"bandpass",f:t?500:1800,q:1.5,gain:t?.16:.09})}s_kill({type:t}){if(!this.limit("kill",.05))return;const e=t==="brute"||t==="guardian";this.tone({f:e?160:340,f2:e?40:90,type:"sawtooth",dur:e?.4:.14,gain:e?.16:.08,lp:1200}),this.noise({dur:e?.4:.12,type:"bandpass",f:700,f2:200,q:1,gain:e?.25:.12}),t==="guardian"&&(this.tone({f:70,f2:25,type:"sawtooth",dur:1.2,gain:.3,lp:400}),this.noise({dur:1.2,type:"lowpass",f:600,f2:60,gain:.35}))}s_containerHit({type:t}){this.limit("chit",.05)&&(t==="locker"?[900,1370,2210].forEach(e=>this.tone({f:e,type:"sine",dur:.18,gain:.04})):(this.tone({f:320,f2:200,type:"triangle",dur:.06,gain:.12}),this.noise({dur:.05,type:"bandpass",f:1400,q:2,gain:.1})))}s_containerBreak({type:t}){if(t==="locker")[520,830,1290,1990].forEach((e,n)=>this.tone({f:e,type:"sine",dur:.5,gain:.06,at:n*.01})),this.noise({dur:.35,type:"highpass",f:1500,gain:.2});else{for(let e=0;e<4;e++)this.noise({dur:.06,type:"bandpass",f:900+e*400,q:3,gain:.18,at:e*.035});this.noise({dur:.3,type:"lowpass",f:700,gain:.2})}this.tone({f:880,type:"triangle",dur:.15,gain:.05,at:.12})}s_warn({kind:t}){this.limit("warn",.25)&&(t==="ambush"?(this.tone({f:220,type:"sawtooth",dur:.9,gain:.12,lp:900}),this.tone({f:233,type:"sawtooth",dur:.9,gain:.12,lp:900}),this.tone({f:110,f2:90,type:"sawtooth",dur:1,gain:.12,lp:500,at:.05})):t==="call"?(this.tone({f:420,f2:760,type:"sine",dur:.5,gain:.08}),this.tone({f:760,f2:480,type:"sine",dur:.5,gain:.08,at:.45})):(this.tone({f:85,f2:120,type:"sawtooth",dur:.55,gain:.12,lp:420,q:6}),this.noise({dur:.5,type:"bandpass",f:300,q:4,gain:.08})))}s_dog(){this.limit("dog",.4)&&(this.tone({f:520,f2:260,type:"sawtooth",dur:.12,gain:.06,lp:1500}),this.tone({f:480,f2:240,type:"sawtooth",dur:.12,gain:.06,lp:1500,at:.15}))}s_bossWarn({kind:t}){t==="charge"?(this.tone({f:260,f2:900,type:"sawtooth",dur:.85,gain:.1,lp:1800}),this.tone({f:60,type:"sawtooth",dur:.9,gain:.15,lp:300})):t==="erupt"?(this.noise({dur:1.1,type:"lowpass",f:180,q:1,gain:.35}),this.tone({f:48,f2:70,type:"sine",dur:1.1,gain:.3})):this.tone({f:120,f2:60,type:"square",dur:.6,gain:.08,lp:500})}s_bossEnrage(){this.tone({f:48,f2:96,type:"sawtooth",dur:1.3,gain:.22,lp:600,q:6}),this.tone({f:72,f2:140,type:"sawtooth",dur:1.2,gain:.14,lp:900,at:.08,detune:-20}),this.noise({dur:1,type:"bandpass",f:300,f2:1200,q:2,gain:.25}),this.tone({f:40,f2:28,type:"sine",dur:.9,gain:.35,at:.2})}s_arrive({big:t}){this.limit("arrive",1.6)&&(this.noise({dur:.35,type:"lowpass",f:420,f2:90,gain:t?.4:.28}),this.tone({f:98,f2:62,type:"sawtooth",dur:.45,gain:t?.16:.11,lp:700,q:4}),this.tone({f:104,f2:66,type:"sawtooth",dur:.45,gain:t?.12:.08,lp:700,q:4,detune:30}))}s_bossBurrow(){this.noise({dur:.9,type:"lowpass",f:300,f2:80,q:1,gain:.4}),this.tone({f:60,f2:38,type:"sawtooth",dur:.8,gain:.14,lp:300})}s_bossExposed(){for(let t=0;t<3;t++)this.tone({f:1400-t*220,f2:600,type:"square",dur:.12,gain:.05,at:t*.06,lp:3e3});this.noise({dur:.4,type:"bandpass",f:2200,f2:800,q:2,gain:.18})}s_bossStagger(){this.noise({dur:.22,type:"highpass",f:2200,f2:700,gain:.2}),this.tone({f:200,f2:72,type:"sawtooth",dur:.9,gain:.15,lp:900,q:5}),this.tone({f:252,f2:95,type:"sawtooth",dur:.8,gain:.1,lp:1100,at:.06,detune:25}),this.tone({f:62,f2:30,type:"sine",dur:.6,gain:.3})}s_bossAppear(){this.tone({f:55,f2:40,type:"sawtooth",dur:1.6,gain:.3,lp:380,q:4}),this.tone({f:82,f2:61,type:"sawtooth",dur:1.6,gain:.2,lp:500}),this.noise({dur:1.5,type:"bandpass",f:400,f2:150,q:2,gain:.25})}s_sting({kind:t}){if(!this.limit("sting",1.5))return;const e=t==="boss"?46:58;this.noise({dur:.5,type:"lowpass",f:260,f2:60,q:1.2,gain:.5}),this.tone({f:e*1.5,f2:e*.75,type:"sine",dur:.4,gain:.45});for(const[n,s]of[[2,.11],[2.12,.09],[3,.08],[4.24,.05]])this.tone({f:e*n,f2:e*n*.97,type:"sawtooth",dur:t==="boss"?1.6:1.1,gain:s,lp:900,q:4,attack:.02,at:.04});this.tone({f:e*8.5,f2:e*6,type:"triangle",dur:.7,gain:.03,at:.1})}s_zap(){this.limit("zap",.3)&&(this.noise({dur:.18,type:"highpass",f:2600,gain:.16}),this.tone({f:180,f2:70,type:"square",dur:.2,gain:.07,lp:1400}),this.tone({f:1400,f2:2600,type:"sawtooth",dur:.08,gain:.03,lp:4e3}))}s_gateOpen(){[1568,1319,1047,784].forEach((t,e)=>this.tone({f:t,f2:t*.98,type:"triangle",dur:.5,gain:.05,at:.35+e*.07})),this.noise({dur:.8,type:"highpass",f:3e3,f2:800,gain:.08,at:.3})}heartbeat(){this.counts.heartbeat=(this.counts.heartbeat||0)+1,this.tone({f:64,f2:46,type:"sine",dur:.13,gain:.32,bus:this.amb}),this.tone({f:58,f2:42,type:"sine",dur:.15,gain:.24,at:.18,bus:this.amb})}s_hazardBoom(){this.limit("boom",.05)&&(this.noise({dur:.35,type:"lowpass",f:500,f2:80,gain:.3}),this.tone({f:70,f2:35,type:"sine",dur:.3,gain:.25}))}s_playerHit({heavy:t,shield:e}){this.limit("phit",.08)&&(e?(this.tone({f:1800,f2:1200,type:"sine",dur:.15,gain:.08}),this.tone({f:2700,type:"sine",dur:.12,gain:.04})):(this.tone({f:t?150:210,f2:t?60:110,type:"square",dur:t?.22:.12,gain:.1,lp:900}),this.noise({dur:.1,type:"bandpass",f:900,gain:t?.25:.14})))}s_pickup({kind:t}){const e=(n,s,r,o,a=.18)=>n.forEach((c,l)=>this.tone({f:c,type:s,dur:a,gain:o,at:l*r}));switch(t){case"heal":e([523,659,784],"sine",.07,.12,.3);break;case"shield":this.tone({f:1200,f2:1800,type:"sine",dur:.4,gain:.08}),this.tone({f:1800,f2:2400,type:"sine",dur:.4,gain:.05,at:.05}),this.noise({dur:.3,type:"highpass",f:5e3,gain:.05});break;case"rapid":e([880,988,1175,1319,1568],"square",.045,.04,.06);break;case"power":this.tone({f:110,f2:220,type:"sawtooth",dur:.45,gain:.12,lp:1400,q:8}),this.tone({f:330,f2:660,type:"triangle",dur:.4,gain:.06,at:.08});break;case"evasion":this.noise({dur:.35,type:"bandpass",f:400,f2:3200,q:3,gain:.15}),e([1046,1568],"sine",.1,.07,.25);break;case"weapon":e([392,523,659,784],"triangle",.09,.12,.25);break;default:e([660,880],"sine",.06,.08)}}s_refuge(){[523.25,659.25,783.99,1046.5,1318.5].forEach((t,e)=>{this.tone({f:t,type:"sine",dur:2.4,gain:.09,at:e*.06,attack:.01}),this.tone({f:t*2.01,type:"sine",dur:1.2,gain:.02,at:e*.06})})}s_complete(){[[392,494,587],[440,554,659],[523,659,784,1046]].forEach((e,n)=>e.forEach(s=>this.tone({f:s,type:"triangle",dur:1.2,gain:.06,at:n*.45})))}s_death(){this.tone({f:440,f2:110,type:"triangle",dur:1.2,gain:.14}),this.tone({f:330,f2:82,type:"triangle",dur:1.2,gain:.1,at:.15})}s_ui(){this.tone({f:880,f2:1100,type:"sine",dur:.07,gain:.06})}s_hint(){this.tone({f:600,type:"sine",dur:.12,gain:.06}),this.tone({f:800,type:"sine",dur:.12,gain:.06,at:.12})}footstep(t){if(!(!this.ctx||this.ctx.state!=="running")){this.counts.footstep=(this.counts.footstep||0)+1,this.counts[`step_${t}`]=(this.counts[`step_${t}`]||0)+1;try{t==="road"?(this.noise({dur:.045,type:"highpass",f:2400,gain:.07}),this.tone({f:180,f2:120,type:"sine",dur:.04,gain:.05})):t==="dirt"?this.noise({dur:.08,type:"lowpass",f:700,gain:.12}):(this.noise({dur:.07,type:"bandpass",f:1600,q:.8,gain:.05}),this.noise({dur:.06,type:"lowpass",f:400,gain:.06}))}catch{}}}startAmbient(){const t=this.ctx,e=t.createBufferSource();e.buffer=this.noiseBuf,e.loop=!0;const n=t.createBiquadFilter();n.type="bandpass",n.frequency.value=450,n.Q.value=.5;const s=t.createGain();s.gain.value=.05;const r=t.createOscillator();r.frequency.value=.07;const o=t.createGain();o.gain.value=220,r.connect(o),o.connect(n.frequency);const a=t.createOscillator();a.frequency.value=.11;const c=t.createGain();c.gain.value=.03,a.connect(c),c.connect(s.gain),e.connect(n),n.connect(s),s.connect(this.amb),e.start(),r.start(),a.start();const l=t.createGain();l.gain.value=0;const f=t.createBiquadFilter();f.type="lowpass",f.frequency.value=260,f.Q.value=3;for(const[h,p]of[[55,"sawtooth"],[58.3,"sawtooth"],[110.6,"triangle"]]){const x=t.createOscillator();x.type=p,x.frequency.value=h,x.connect(f),x.start()}const u=t.createOscillator();u.frequency.value=.23;const d=t.createGain();d.gain.value=90,u.connect(d),d.connect(f.frequency),u.start(),f.connect(l),l.connect(this.amb),this.ambient={src:e,g:s,bp:n,drone:l},this.beatT=0}updateAmbient(t,e){if(!this.ctx||this.ctx.state!=="running"||!this.ambient)return;this.ambOn!==e.playing&&(this.ambOn=e.playing,this.amb.gain.setTargetAtTime(e.playing?Jh:0,this.ctx.currentTime,.08));const n=e.biome==="mountain"||e.biome==="cliffs"||e.biome==="desert"||e.biome==="coast";this.ambient.g.gain.setTargetAtTime(n?.1:.06,this.ctx.currentTime,1.5);const s=Math.max(0,Math.min(1,((e.blight||0)-.35)/.4));if(this.ambient.drone.gain.setTargetAtTime(e.playing?s*.09:0,this.ctx.currentTime,1.2),e.lowHp&&e.playing){if(this.beatT-=t,this.beatT<=0){this.beatT=.82;try{this.heartbeat()}catch{}}}else this.beatT=0;this.birdTimer-=t,this.birdTimer<=0&&(this.birdTimer=5+Math.random()*9,e.calm&&e.biome!=="desert"&&e.playing&&this.birds())}birds(){this.counts.birds=(this.counts.birds||0)+1;const t=2+Math.floor(Math.random()*4),e=2200+Math.random()*1600;for(let n=0;n<t;n++){const s=e*(.9+Math.random()*.3);this.tone({f:s,f2:s*(1.2+Math.random()*.4),type:"sine",dur:.08+Math.random()*.05,gain:.025,at:n*(.11+Math.random()*.08),bus:this.amb})}}}const Gn=i=>document.getElementById(i),Qh=i=>Math.round(i).toLocaleString("en-US");function Ho(i){const t=Math.floor(i/60),e=Math.floor(i%60);return`${t}:${String(e).padStart(2,"0")}`}const tu=["pause","confirm","replace","guide","map","checkpoint","death","complete"],b2=6;class S2{constructor(){this.el={};for(const t of["hud","hpFill","hpVal","shieldFill","parcelFill","parcelVal","legLabel","distLabel","routeFill","routeTicks","routeMe","modeTag","bossBar","bossName","bossFill","weaponChip","wDot","wName","wRole","wRapid","powerups","arrows","floaters","banner","instructions","ghostStick","damageVignette","threatVignette","dispatch","bossSig"])this.el[t]=Gn(t);this.cache={},this.floaters=[],this.arrowEls=[],this.timers={},this.queue=[],this.lane=null,this.legTicksFor=null,this.fillReachTable()}set(t,e,n,s){this.cache[t]!==s&&(this.cache[t]=s,n==="text"?e.textContent=s:n==="width"?e.style.width=s:n==="left"?e.style.left=s:n==="html"&&(e.innerHTML=s))}fillReachTable(){const t=Yi.map(e=>{const n=He[e];return`<tr><td><b style="color:#${n.color.toString(16).padStart(6,"0")}">●</b> ${n.name}</td><td>${n.role}</td><td class="num">${Math.round(Xn(e))} m</td><td class="num">${Math.round(Xn(e,!0))} m</td></tr>`}).join("");Gn("reachRows").innerHTML=t}show(t){const e=Gn(t);e.classList.remove("hidden");const n=e.querySelector(".content");n&&(n.scrollTop=0),e.scrollTop=0}hide(t){Gn(t).classList.add("hidden")}anyDialog(){return tu.some(t=>!Gn(t).classList.contains("hidden"))}hideAllDialogs(){tu.forEach(t=>this.hide(t))}setThumb(t){const e=t==="left"?"left":"right";this.el.ghostStick.classList.toggle("right",e==="right"),this.el.weaponChip.classList.toggle("left",e==="right"),this.el.powerups.classList.toggle("right",e==="right"),Gn("thumbLeft").setAttribute("aria-pressed",String(e!=="right")),Gn("thumbRight").setAttribute("aria-pressed",String(e==="right"))}setSound(t){const e=Gn("soundBtn");e.textContent=t?"On":"Off",e.setAttribute("aria-pressed",String(t))}updateHud(t,e,n){const s=t.player,r=Ne(t),o=Math.max(0,s.hp/s.maxHp*100);this.set("hp",this.el.hpFill,"width",`${o.toFixed(1)}%`),this.set("hpv",this.el.hpVal,"text",String(Math.ceil(s.hp))),this.set("sh",this.el.shieldFill,"width",`${Math.min(100,s.shield/80*100).toFixed(1)}%`),this.set("pc",this.el.parcelFill,"width",`${s.parcel.toFixed(1)}%`),this.set("pcv",this.el.parcelVal,"text",`${Math.ceil(s.parcel)}%`);const a=s.hp/s.maxHp<.3&&s.alive;this.el.damageVignette.style.opacity=a?String(.55+Math.sin(n*7.6)*.25):this.hurtT>0?String(Math.min(.8,this.hurtT*2)):"0";const c=r.refuges.length,l=Math.min(t.legIndex,c-1),f=Dn(t),u=Math.max(0,f.z-s.z),d=l===c-1,h=d?"The Lantern":`Safehouse ${l+1}`;this.set("leg",this.el.legLabel,"text",`Leg ${l+1}/${c}`);let p;t.boss.active&&!t.boss.defeated?p="Defeat the guardian":t.boss.defeated?p=`${Qh(Math.hypot(f.x-s.x,f.z-s.z))} m · walk in`:p=`${Qh(u)} m to ${h}`,this.set("dist",this.el.distLabel,"text",p);const x=r.totalLength;this.set("rf",this.el.routeFill,"width",`${Math.min(100,Math.max(0,s.z)/x*100).toFixed(2)}%`),this.set("rm",this.el.routeMe,"left",`${Math.min(100,Math.max(0,s.z)/x*100).toFixed(2)}%`);const g=`${t.seed}:${t.mode}:${t.legIndex}`;this.legTicksFor!==g&&(this.legTicksFor=g,this.el.routeTicks.innerHTML=r.refuges.map((q,V)=>`<div class="tick ${V<t.legIndex?"done":""} ${q.final?"final":""}" style="left:${(q.z/x*100).toFixed(2)}%"></div>`).join(""));const m=r.biomeAt(s.z),v=d&&u<90?"The Lantern":fn[m.t<.5?m.a:m.b].name,_=t.boss.active&&!t.boss.defeated;this.cache.biome!==v&&(this.cache.biome=v,_||this.say(v,{prio:.4,dur:2.2,cls:"zone",key:`zone:${v}`})),this.el.modeTag.classList.toggle("hidden",t.mode!=="field"),this.el.bossBar.classList.toggle("hidden",!_),this.el.hud.classList.toggle("boss-on",_),this.inFight=_;const M=_&&this.introT>0,w=!!(_&&!M&&t.boss.enraged);if(this.el.bossBar.classList.toggle("intro",M),this.el.bossBar.classList.toggle("enraged",w),_){const q=zr(t.boss.arch);this.set("bossn",this.el.bossName,"text",M?`${q.name}!`:w?`${q.short} · enraged`:`${q.name}`),this.set("bosss",this.el.bossSig,"text",M?q.signature:""),this.set("bossf",this.el.bossFill,"width",`${(t.boss.hp/t.boss.maxHp*100).toFixed(1)}%`)}const T=s.alive&&s.hp/s.maxHp<=.3;this.el.hud.classList.toggle("low-hp",T),T&&!this.warnedLow?(this.warnedLow=!0,this.say(_?"Low health! Break away from the pack":"Low health! Break away from the pack — the courier heals when nothing is near",{prio:2.5,dur:2.6,cls:"error"})):!T&&s.hp/s.maxHp>.5&&(this.warnedLow=!1);const A=t.weapon.current,C=He[A],b=t.powerups.rapid>0,y=t.loadout.levels[A]||0;if(this.set("wn",this.el.wName,"text",`${C.name}${y?` +${y}`:""}`),this.set("wr",this.el.wRole,"text",`${Math.round(Xn(A,b))} m reach`),this.cache.wcolor!==C.color){this.cache.wcolor=C.color;const q=`#${C.color.toString(16).padStart(6,"0")}`;this.el.wDot.style.background=q,this.el.wDot.style.color=q}if(this.el.wRapid.classList.toggle("hidden",!b),b){const q=Math.round((1-Xn(A,!0)/Xn(A,!1))*100);this.set("wrap",this.el.wRapid,"text",`Rapid ×${Wc} · reach −${q}%`)}const D=[];s.shield>0&&D.push(`<div class="pu shield"><span class="pico">⬢</span>${Math.ceil(s.shield)}</div>`),t.powerups.rapid>0&&D.push(`<div class="pu rapid"><span class="pico">⦀</span>Rapid ${Math.ceil(t.powerups.rapid)}s</div>`),t.powerups.power>0&&D.push(`<div class="pu power"><span class="pico">⚡</span>Power ${Math.ceil(t.powerups.power)}s</div>`),t.powerups.evasion>0&&D.push(`<div class="pu evasion"><span class="pico">❯</span>Evade ${Math.ceil(t.powerups.evasion)}s</div>`),this.set("pu",this.el.powerups,"html",D.join(""));let N=null;t.legIndex===0&&(_?N="Keep moving · step out of red zones":t.boss.defeated?N="Follow the teal arrows into the ring":t.time<25?N="Drag low to move · firing is automatic":N="Crates hold supplies · markers show threats"),N!==this.insText&&(this.insText=N,this.insSince=n,N&&this.set("ins",this.el.instructions,"text",N));const Y=!!N&&n-this.insSince<b2;this.el.hud.classList.toggle("tips-off",!Y)}setThreat(t){const e=Math.round(t*100)/100;this.cache.threat!==e&&(this.cache.threat=e,this.el.threatVignette.style.opacity=String(e))}shotPulse(t){const e=performance.now();if(!(e-(this.lastPulse||0)<90)){this.lastPulse=e;try{this.el.wDot.animate([{transform:"scale(1.6)",boxShadow:"0 0 14px currentColor"},{transform:"scale(1)",boxShadow:"0 0 8px currentColor"}],{duration:180,easing:"ease-out"})}catch{}}}hurt(t=!1){this.hurtT=t?.5:.35}hitFrom(t,e,n){if(!Number.isFinite(t))return;if(!this.hitEls){this.hitEls=[],this.hitIdx=0;for(let d=0;d<4;d++){const h=document.createElement("div");h.className="hitdir",this.el.hud.appendChild(h),this.hitEls.push(h)}}const s=this.hitEls[this.hitIdx++%this.hitEls.length],r=this.el.hud.clientWidth,o=this.el.hud.clientHeight,a=Math.sin(t),c=-Math.cos(t),l=r/2+a*r*.4,f=o*.58+c*o*.3,u=Math.atan2(c,a)*180/Math.PI+90;s.classList.toggle("shield",!!n),s.classList.toggle("heavy",!!e),s.style.transition="none",s.style.opacity=e?"1":"0.85",s.style.transform=`translate(${l.toFixed(0)}px, ${f.toFixed(0)}px) translate(-50%, -50%) rotate(${u.toFixed(0)}deg)`,s.offsetWidth,s.style.transition="opacity 0.55s ease-out",s.style.opacity="0"}bossIntro(t=2.6){this.introT=t,this.cache.bossf="0%",this.el.bossFill.style.transition="none",this.el.bossFill.style.width="0%",this.el.bossFill.offsetWidth,this.el.bossFill.style.transition=""}tick(t){if(this.hurtT>0&&(this.hurtT=Math.max(0,this.hurtT-t)),this.introT>0&&(this.introT=Math.max(0,this.introT-t)),this.lane&&(this.lane.t-=t,this.lane.t<=0)){const e=this.queue.shift();e?this.showLane(e):(this.lane=null,this.renderLane(!1))}}say(t,{prio:e=1,dur:n=2.4,cls:s="info",key:r=null,merge:o=!1}={}){if(this.inFight&&(s==="pick"||s==="zone"))return;const a={html:t,prio:e,dur:n,t:n,cls:s,key:r},c=this.lane;if(s==="zone"){if(this.queue=this.queue.filter(l=>l.cls!=="zone"),c&&c.cls!=="zone")return;if(c&&c.key!==r){this.showLane(a);return}}if(c&&r&&c.key===r){c.t=Math.max(c.t,n);return}if(c&&o&&c.cls===s&&c.merges<2){c.html+=` · ${t}`,c.merges++,c.t=Math.max(c.t,n),this.renderLane(!1);return}if(!this.queue.some(l=>r&&l.key===r||!r&&l.html===t))if(!c)this.showLane(a);else if(e>c.prio)c.prio>=1&&c.t>.6&&this.queue.unshift(c),this.showLane(a);else for(this.queue.push(a),this.queue.sort((l,f)=>f.prio-l.prio);this.queue.length>3;)this.queue.pop()}showLane(t){t.merges=0,this.lane=t,this.renderLane(!0)}renderLane(t){const e=this.el.banner,n=this.lane;if(!n){e.classList.add("hidden");return}e.className=`lane-${n.cls}`,e.innerHTML=n.html,t&&(e.style.animation="none",e.offsetWidth,e.style.animation="")}banner(t,e=!1,n=2.4){this.say(t,{prio:3,dur:n,cls:e?"good":"bad"})}hint(t,e=3.4,n=t){this.say(t,{prio:2,dur:e,cls:"hint",key:n})}endFight(){this.queue=this.queue.filter(t=>!(t.key&&t.key.startsWith("fight:"))),this.lane&&this.lane.key&&this.lane.key.startsWith("fight:")&&(this.lane.t=0)}toast(t,e=!1,n=2.6){this.say(t,{prio:e?3.5:1,dur:n,cls:e?"error":"info"})}pickup(t){this.say(t,{prio:.6,dur:1.5,cls:"pick",merge:!0})}clearTransient(){this.lane=null,this.queue=[],this.renderLane(!1)}weaponPop(){const t=this.el.weaponChip;t.classList.add("pop"),clearTimeout(this.popT),this.popT=setTimeout(()=>t.classList.remove("pop"),260)}floater(t,e,n,s,r,o={}){this.floaters.length>34&&this.floaters.shift().el.remove();const a=document.createElement("div");a.className=`floater ${e}`,a.textContent=t,this.el.floaters.appendChild(a),this.floaters.push({el:a,x:n,y:s,z:r,t:0,life:o.life||.8,rise:o.rise??1.6,jx:(Math.random()-.5)*18,clamp:!!o.clamp})}updateFloaters(t,e){const n=[],s=this.el.hud.clientWidth,r=this.el.hud.clientHeight,o=this.floaters.length?this.playBounds():null;for(const a of this.floaters){if(a.t+=t,a.t>=a.life){a.el.remove();continue}const c=a.t/a.life,l=e(a.x,a.y+a.rise*c,a.z),f=c<.12?.7+c*3:1;a.hw===void 0&&(a.hw=a.el.offsetWidth/2+6,a.hh=a.el.offsetHeight/2+4);let u=l.x+a.jx,d=l.y;const h=l.visible&&u>a.hw&&u<s-a.hw&&d>o.fixedTop+a.hh&&d<o.bottom;if(a.clamp)u=Math.max(a.hw,Math.min(s-a.hw,u)),d=Math.max(o.fixedTop+a.hh,Math.min(r-a.hh-8,d));else if(!h){a.el.style.opacity="0",n.push(a);continue}a.el.style.transform=`translate(${u.toFixed(1)}px, ${d.toFixed(1)}px) translate(-50%, -50%) scale(${f.toFixed(2)})`,a.el.style.opacity=c>.7?String(1-(c-.7)/.3):"1",n.push(a)}this.floaters=n}clearFloaters(){for(const t of this.floaters)t.el.remove();this.floaters=[]}playBounds(){return this.pbN=(this.pbN||0)+1,this.pbCache&&this.pbN%15!==0?this.pbCache:(this.pbCache=this.measureBounds(),this.pbCache)}measureBounds(){const t=this.el.hud.clientHeight,e=o=>o&&o.offsetParent?o.getBoundingClientRect():null;let n=70,s=70;for(const o of[document.getElementById("routeBox"),this.el.bossBar,this.el.banner]){const a=e(o);a&&a.bottom>n&&a.top<t*.4&&(n=a.bottom),a&&o!==this.el.banner&&a.bottom>s&&a.top<t*.4&&(s=a.bottom)}let r=t-8;for(const o of[this.el.weaponChip,this.el.powerups,this.el.instructions]){const a=e(o);a&&a.height>0&&a.top<r&&a.top>t*.6&&(r=a.top)}return{top:n+20,bottom:r-20,fixedTop:s+8}}updateArrows(t,e,n){const s=this.el.hud.clientWidth,r=this.el.hud.clientHeight,o=[],a=t.player;for(const g of t.pending)o.push({x:g.x,z:g.z,cls:g.kind,label:`!${g.types.length}`,n:g.types.length,prio:3});const c=new Map;for(const g of t.enemies){const m=Math.hypot(g.x-a.x,g.z-a.z);if(m>34)continue;const v=e(g.x,n(g.x,g.z)+1,g.z);if(v.x>0&&v.x<s&&v.y>0&&v.y<r*.74)continue;const _=Math.atan2(g.x-a.x,g.z-a.z),M=Math.round(_/(Math.PI/5)),w=c.get(M);w?(w.n++,w.near=Math.min(w.near,m),g.boss&&(w.boss=!0,w.x=g.x,w.z=g.z)):c.set(M,{x:g.x,z:g.z,n:1,boss:g.boss,near:m})}for(const[,g]of c)o.push({x:g.x,z:g.z,cls:(g.boss?"ambush":"enemy")+(g.near<8?" urgent":""),label:g.boss?"☠":String(g.n),n:g.n,boss:g.boss,prio:g.boss?2.5:g.near<8?2:1});if(t.phase==="travel"){const g=of(t);t.boss.defeated?o.push({x:g.x,z:g.z,cls:"refuge",label:"⌂",prio:2,route:!0}):g.kind==="road"&&!t.boss.active&&o.push({x:g.x,z:g.z,cls:"refuge",label:"➜",prio:1.5,route:!0})}o.sort((g,m)=>m.prio-g.prio);const l=s/2,f=r*.56,u=22,d=this.playBounds(),h=d.top,p=Math.min(d.bottom,r*.7),x=[];for(const g of o){const m=e(g.x,n(g.x,g.z)+1,g.z),v=m.visible&&m.x>u&&m.x<s-u&&m.y>h&&m.y<p;let _=m.x,M=m.y;m.visible||(_=l+(l-m.x),M=f+(f-m.y));let w=_-l,T=M-f;if(v&&g.cls!=="pack"&&g.cls!=="ambush"&&g.cls!=="call"&&!g.route)continue;if(v)M-=40,w=0,T=1;else{const C=w===0?1/0:((w>0?s-u:u)-l)/w,b=T===0?1/0:((T>0?p:h)-f)/T,y=Math.min(Math.abs(C),Math.abs(b));_=l+w*y,M=f+T*y,T>0&&Math.abs(b)<=Math.abs(C)&&(_=w>=0?s-u:u,M=p)}const A=x.find(C=>Math.hypot(C.x-_,C.y-M)<40);if(A){if(A.cls===g.cls&&A.n!==void 0&&g.n!==void 0&&!A.boss&&!g.boss){A.n+=g.n,A.label=g.cls.startsWith("enemy")?String(A.n):`!${A.n}`;continue}Math.abs(_-u)<2||Math.abs(_-(s-u))<2?M+=M>f?-36:36:_+=_>l?-36:36}if(x.push({...g,x:_,y:M,rot:Math.atan2(T,w)*180/Math.PI-135}),x.length>=7)break}for(;this.arrowEls.length<x.length;){const g=document.createElement("div");g.className="arrow",g.innerHTML="<span></span>",this.el.arrows.appendChild(g),this.arrowEls.push(g)}this.arrowEls.forEach((g,m)=>{const v=x[m];if(!v){g.style.display="none";return}g.style.display="grid",g.className=`arrow ${v.cls}`,g.style.setProperty("--rot",`${v.rot.toFixed(0)}deg`),g.style.transform=`translate(${v.x.toFixed(0)}px, ${v.y.toFixed(0)}px)`,g.firstChild.textContent=v.label})}renderMap(t){const e=Ne(t),n=Xe[t.mode];Gn("mapMeta").innerHTML=`${n.label}${n.short?` — <b>short test route</b> (${n.legLength} m legs, about 6–8 min; not the full journey timing)`:" — six 2,700 m legs, at least 5 min each"}<br>Elapsed ${Ho(t.time)}`;const s=t.player,o=e.refuges.map((c,l)=>{const f=l*e.legLength,u=c.z,d=e.segments.filter(v=>v.z1>f&&v.z0<u).map(v=>{const _=Math.max(f,v.z0),M=Math.min(u,v.z1),w=`#${fn[v.biome].ground.toString(16).padStart(6,"0")}`;return`<div style="flex:${(M-_).toFixed(0)};background:${w}" title="${fn[v.biome].name}"></div>`}).join(""),h=l<t.legIndex,p=l===Math.min(t.legIndex,e.refuges.length-1)&&t.phase!=="complete",x=e.legBiomes(l).map(v=>fn[v].name);c.final&&x.push("The Lantern");const g=x.length>4?`${x.slice(0,3).join(" · ")} +${x.length-3} more`:x.join(" · "),m=p?Math.round(Math.max(0,Math.min(1,(s.z-f)/e.legLength))*100):0;return{i:l,done:h,here:p,segs:d,names:g,pct:m,final:c.final}}).slice().reverse().map(c=>`
      <div class="map-leg">
        <div class="map-rail"><div class="map-node ${c.done?"done":""} ${c.final?"final":""}">${c.final?"★":c.i+1}</div><div class="map-seg">${c.segs}</div></div>
        <div class="map-info"><b>${c.final?"The Lantern":`Safehouse ${c.i+1}`}</b> ${c.done?"· reached ✓":""}<br>${c.here?`<span class="you">You are here · ${c.pct}% of leg ${c.i+1}</span><br>`:""}<span>${c.names}</span></div>
      </div>`).join(""),a=Object.values(fn).map(c=>`<span style="--c:#${c.ground.toString(16).padStart(6,"0")}">${c.name}</span>`).join("");Gn("mapBody").innerHTML=`${o}<div class="map-leg"><div class="map-rail"><div class="map-node done">D</div></div><div class="map-info"><b>District 08 depot</b><br>Departure</div></div><div class="map-legend">${a}</div>`}}const vo=48,w2=.34;class E2{constructor(t,{stickEl:e,knobEl:n,ghostEl:s,onGesture:r,onPause:o,enabled:a,baseLimit:c,onStick:l}){this.onStick=l,this.root=t,this.baseLimit=c,this.stickEl=e,this.knobEl=n,this.ghostEl=s,this.onGesture=r,this.onPause=o,this.enabled=a,this.pointerId=null,this.ox=0,this.oy=0,this.sx=0,this.sy=0,this.keys=new Set,this.lastTouchAt=0,this.usedStick=!1,t.addEventListener("pointerdown",u=>this.down(u),{passive:!1}),t.addEventListener("pointermove",u=>this.move(u),{passive:!1}),t.addEventListener("pointerup",u=>this.up(u)),t.addEventListener("pointercancel",u=>this.up(u)),t.addEventListener("lostpointercapture",u=>this.up(u));const f=()=>this.onGesture&&this.onGesture();window.addEventListener("pointerdown",f,!0),window.addEventListener("touchstart",f,{capture:!0,passive:!0}),window.addEventListener("keydown",f,!0),window.addEventListener("keydown",u=>this.key(u,!0)),window.addEventListener("keyup",u=>this.key(u,!1)),window.addEventListener("blur",()=>{this.keys.clear(),this.release()}),t.addEventListener("touchmove",u=>{this.enabled()&&u.preventDefault()},{passive:!1})}inZone(t){const e=this.root.clientHeight;return t.target&&t.target.closest&&t.target.closest("button, .dialog, .screen")?!1:t.clientY>e*w2}down(t){if(!(!this.enabled()||this.pointerId!==null)&&this.inZone(t)){t.preventDefault(),this.pointerId=t.pointerId;try{this.root.setPointerCapture(t.pointerId)}catch{}this.ox=t.clientX,this.oy=t.clientY,this.sx=0,this.sy=0,this.usedStick=!0,this.onStick&&this.onStick(t.clientX,this.root.clientWidth),this.stickEl.classList.remove("hidden"),this.limitFor=void 0,this.placeBase(),this.knobEl.style.transform="translate(0px, 0px)",this.ghostEl&&this.ghostEl.classList.add("faded")}}move(t){if(t.pointerId!==this.pointerId)return;t.preventDefault();let e=t.clientX-this.ox,n=t.clientY-this.oy;const s=Math.hypot(e,n);if(s>vo*1.6){const u=(s-vo*1.6)/s;this.ox+=e*u,this.oy+=n*u,e=t.clientX-this.ox,n=t.clientY-this.oy,this.placeBase()}const r=Math.hypot(e,n),o=6;if(r<o)this.sx=0,this.sy=0;else{const u=Math.min(1,(r-o)/(vo-o));this.sx=e/r*u,this.sy=-n/r*u}const a=this.root.clientHeight<600?.85:1,c=Math.min(r,vo)*a,l=r>0?e/r*c:0,f=r>0?n/r*c:0;this.knobEl.style.transform=`translate(${l}px, ${f}px)`}placeBase(){const t=this.root.clientWidth,e=this.root.clientHeight,n=Math.max(52,Math.min(t-52,this.ox));let s=e-104;this.baseLimit&&(this.limitFor===void 0&&(this.limitFor=this.baseLimit(n)),s=Math.min(s,this.limitFor));const r=Math.min(s,this.oy);this.stickEl.style.transform=`translate(${n}px, ${r}px)`}up(t){t.pointerId===this.pointerId&&this.release()}release(){if(this.pointerId!==null)try{this.root.releasePointerCapture(this.pointerId)}catch{}this.pointerId=null,this.sx=0,this.sy=0,this.stickEl.classList.add("hidden")}key(t,e){const n=t.key.toLowerCase();if(e&&(n==="escape"||n==="p")){this.onPause&&this.onPause();return}const r={w:"up",arrowup:"up",s:"down",arrowdown:"down",a:"left",arrowleft:"left",d:"right",arrowright:"right"}[n];r&&(this.enabled()&&t.preventDefault(),e?this.keys.add(r):this.keys.delete(r))}vector(){if(this.pointerId!==null)return{x:this.sx,y:this.sy};let t=0,e=0;this.keys.has("left")&&(t-=1),this.keys.has("right")&&(t+=1),this.keys.has("up")&&(e+=1),this.keys.has("down")&&(e-=1);const n=Math.hypot(t,e);return n>0&&(t/=n,e/=n),{x:t,y:e}}get active(){return this.pointerId!==null||this.keys.size>0}}const tl="kuru.lastmile.save",ff="kuru.lastmile.settings",T2={journey:1800,field:300};function Nr(){try{return globalThis.localStorage||null}catch{return null}}function A2(i){if(!i||typeof i!="object")throw new Error("Save data is not an object");if(i.version===Ts)return i;if(i.version===2){if(i.mode!=="field")return{...i,version:Ts,migratedFrom:2};const t=i.legIndex|0;return{...i,version:Ts,migratedFrom:2,player:{z:t*Xe.field.legLength,offset:0},containers:{}}}if(i.version===1){const t=Xe[i.mode]?i.mode:"journey",e=Xe[t].legLength/T2[t],n={};for(const[s,r]of Object.entries(i.containers||{})){const[o,a]=s.split(":");n[`${Math.round(Number(o)*e)}:${a}`]=r}return{version:Ts,seed:i.seed>>>0,mode:t,legIndex:i.leg|0,time:i.time||0,legTimes:i.legTimes||[],player:{z:(i.progress||0)*e,offset:i.offset||0},loadout:{owned:i.weapons||["sidearm","scattergun"],levels:i.levels||{}},resources:{shield:i.shield||0,powerups:{}},containers:n,stats:i.stats||void 0,migratedFrom:1}}throw new Error(`Unsupported save version ${i.version}`)}function C2(i){return JSON.stringify({...i,savedAt:Date.now()})}function Go(i=Nr()){if(!i)return{ok:!1,error:"Browser storage is unavailable; progress cannot be resumed."};let t;try{t=i.getItem(tl)}catch{return{ok:!1,error:"Browser storage is blocked; saved deliveries cannot be read."}}if(!t)return{ok:!0,empty:!0};try{const e=JSON.parse(t),n=A2(e);if(!Number.isFinite(n.seed)||!Xe[n.mode])throw new Error("missing fields");return{ok:!0,snapshot:n}}catch{return{ok:!1,corrupt:!0,error:"The saved delivery could not be read and was ignored."}}}function R2(i,t=Nr()){if(!t)return{ok:!1,error:"Browser storage is unavailable; this checkpoint was not saved."};try{return t.setItem(tl,C2(i)),{ok:!0}}catch{return{ok:!1,error:"Could not save this checkpoint (storage full or blocked)."}}}function P2(i=Nr()){try{return i&&i.removeItem(tl),{ok:!0}}catch{return{ok:!1,error:"Could not clear the saved delivery."}}}function I2(i=Nr()){const t={sound:!0,thumb:"auto"};try{const e=i&&i.getItem(ff);return e?{...t,...JSON.parse(e)}:t}catch{return t}}function df(i,t=Nr()){try{return t&&t.setItem(ff,JSON.stringify(i)),!0}catch{return!1}}const Mc=new URLSearchParams(location.search),pf=Mc.get("qa")==="1",Yt=i=>document.getElementById(i),Q={mode:"dispatch",paused:!1,state:null,preview:null,checkpointSnap:null,attempts:0,acc:0,settings:I2(),deathShown:!1,frozen:!1,hitStop:0,frameTimes:[],lastPhase:null},Ct=new S2,Jt=new y2;Jt.muted=!Q.settings.sound;let Me;try{Me=new M2(Yt("game"))}catch(i){throw Yt("fatal").textContent="This browser could not start WebGL, which Kuru needs to draw the world. Try a recent Chrome, Safari or Firefox.",Yt("fatal").classList.remove("hidden"),i}Me.footstep=i=>Jt.footstep(i);Yt("game").addEventListener("webglcontextlost",i=>{i.preventDefault(),Q.mode==="playing"&&qs(),Yt("fatal").textContent="The graphics context was lost (the device may be low on memory). Reload the page to continue — safehouse progress is kept.",Yt("fatal").classList.remove("hidden")});const Pi=new E2(Yt("app"),{stickEl:Yt("stick"),knobEl:Yt("sknob"),ghostEl:Yt("ghostStick"),onGesture:()=>Jt.unlock(),onPause:()=>z2(),enabled:()=>Q.mode==="playing"&&!Q.paused&&!Ct.anyDialog(),onStick:(i,t)=>{Q.settings.thumb==="auto"&&sl(i>t/2?"right":"left")},baseLimit:i=>{let t=1/0;for(const e of[Yt("weaponChip"),Yt("powerups")]){if(!e||!e.offsetParent)continue;const n=e.getBoundingClientRect();n.height<4||n.right<i-72||n.left>i+72||(t=Math.min(t,n.top-72))}return t}});Ct.setThumb(Q.settings.thumb);Ct.setSound(Q.settings.sound);window.addEventListener("resize",()=>{Me.resize(),el()});function el(){let i=!1;try{i=window.matchMedia("(pointer: coarse)").matches}catch{}const e=i&&window.innerWidth>window.innerHeight&&window.innerHeight<540&&!Q.rotateDismissed;Yt("rotate").classList.toggle("hidden",!e),e&&Q.mode==="playing"&&!Q.paused&&qs()}document.addEventListener("visibilitychange",()=>{document.hidden&&Q.mode==="playing"&&!Q.paused&&Q.state&&Q.state.phase==="travel"&&qs()});function L2(){const i=Yc({seed:Gu(),mode:"journey"});return i.player.z=-6,i}function Xs(){Q.mode="dispatch",Q.paused=!1,Q.state=null,Pi.release(),Ct.hideAllDialogs(),Ct.clearFloaters(),Yt("hud").classList.add("hidden"),Yt("dispatch").classList.remove("hidden"),Yt("dispatch").scrollTop=0,Q.preview=L2(),Me.setWorld(Ne(Q.preview));const i=Go(),t=Yt("storageNote");t.textContent="",Yt("resumeBtn").classList.add("hidden");let e=!1;if(!i.ok)t.textContent=i.error;else if(i.snapshot){const n=i.snapshot,s=Xe[n.mode],r=n.legIndex>0?`Safehouse ${n.legIndex} of 6`:"Departure";Yt("resumeInfo").textContent=`${r} · ${s.label}${s.short?" (short)":""}`,Yt("resumeBtn").classList.remove("hidden"),e=!0}Yt("journeyBtn").classList.toggle("primary",!e)}function mf(i){const t=Go();if(t.ok&&t.snapshot){const e=t.snapshot,n=e.legIndex>0?`Safehouse ${e.legIndex}`:"the departure point";Yt("replaceText").textContent=`Your saved ${Xe[e.mode].label} delivery (${n}) will be replaced when the new delivery reaches its first safehouse.`,Q.pendingMode=i,Ct.show("replace");return}nl(i)}function nl(i,t){const e=t??(pf&&Mc.get("seed")?Number(Mc.get("seed")):Gu()),n=Yc({seed:e,mode:i});Q.checkpointSnap=Qc(n),Q.attempts=0,Q.bossSnap=null,Ds(n);const s=Xe[i];Ct.banner(`${s.label}<small>District 08 → Safehouse 1${s.short?" · short test":""}</small>`,!0,2.6)}function D2(){const i=Go();if(!i.ok||!i.snapshot){Yt("storageNote").textContent=i.error||"No saved delivery was found.";return}const t=Pr(i.snapshot);Q.checkpointSnap=i.snapshot,Q.attempts=0,Q.bossSnap=null,Ds(t),i.snapshot.migratedFrom&&Ct.toast("An older save was converted to the current route."),Ct.banner(`Resumed<small>${t.legIndex>0?`Safehouse ${t.legIndex}`:"Departure"} · ${Xe[t.mode].label}</small>`,!0)}function Ds(i){Q.state=i,Q.mode="playing",Q.paused=!1,Q.acc=0,Q.deathShown=!1,Q.lastPhase=i.phase,Me.setWorld(Ne(i)),Ct.hideAllDialogs(),Ct.clearFloaters(),Ct.clearTransient(),Q.bigHits=new Map,Yt("hud").classList.remove("arrival"),Yt("dispatch").classList.add("hidden"),Yt("hud").classList.remove("hidden"),Yt("ghostStick").classList.toggle("faded",Pi.usedStick),Pi.release(),Jt.unlock()}function qs(){if(Q.mode!=="playing"||!Q.state||Q.state.phase!=="travel")return;Q.paused=!0,Pi.release();const i=Q.state,t=Xe[i.mode];Yt("pauseMeta").innerHTML=`${t.label}${t.short?" (short test)":""} · Leg ${Math.min(i.legIndex+1,6)}/6 · ${Ho(i.time)}<br>${i.loadout.owned.map(e=>He[e].name).join(", ")}`,Ct.hideAllDialogs(),Ct.show("pause")}function il(){Ct.hideAllDialogs(),Q.paused=!1,Q.acc=0}function z2(){if(Q.mode==="playing"){if(!Yt("guide").classList.contains("hidden")&&Q.paused){Ct.hide("guide"),Ct.show("pause");return}if(!Yt("map").classList.contains("hidden")&&Q.paused){Ct.hide("map"),Ct.show("pause");return}Q.paused&&!Yt("pause").classList.contains("hidden")?il():Q.paused||qs()}}let Co=null;function gf(i){Co=i,i&&Ct.hide(i),Ct.show("guide")}function Ce(i,t){Yt(i).addEventListener("click",e=>{e.preventDefault(),Jt.unlock(),Jt.play("ui"),t(e)})}Ce("journeyBtn",()=>mf("journey"));Ce("fieldBtn",()=>mf("field"));Ce("replaceKeep",()=>{Ct.hide("replace"),Q.pendingMode=null});Ce("replaceGo",()=>{Ct.hide("replace");const i=Q.pendingMode;Q.pendingMode=null,i&&nl(i)});Ce("resumeBtn",()=>D2());Ce("guideBtn",()=>gf(null));Ce("guideClose",()=>{Ct.hide("guide"),Co&&Ct.show(Co),Co=null});Ce("pauseBtn",()=>qs());Ce("resumeGame",()=>il());Ce("soundBtn",()=>{Q.settings.sound=!Q.settings.sound,Jt.setMuted(!Q.settings.sound),Ct.setSound(Q.settings.sound),df(Q.settings)});Ce("thumbLeft",()=>sl("left"));Ce("thumbRight",()=>sl("right"));Ce("pauseGuide",()=>gf("pause"));Ce("pauseMap",()=>{Ct.renderMap(Q.state),Ct.hide("pause"),Ct.show("map")});Ce("mapClose",()=>{Ct.hide("map"),Ct.show("pause")});Ce("toDispatch",()=>{Ct.hide("pause");const i=Q.state;Yt("confirmText").textContent=i&&i.legIndex>0?`Travel since Safehouse ${i.legIndex} will be lost. Your safehouse save stays available under Resume.`:"Travel since departure will be lost.",Ct.show("confirm")});Ce("confirmStay",()=>{Ct.hide("confirm"),Ct.show("pause")});Ce("confirmLeave",()=>Xs());Ce("cpContinue",()=>{a2(Q.state),Ct.hideAllDialogs(),Q.acc=0;const i=Q.state,t=i.legIndex===5;Q.bossSnap=null,Ct.banner(`Leg ${i.legIndex+1}/6<small>Safehouse ${i.legIndex} → ${t?"The Lantern":`Safehouse ${i.legIndex+1}`}</small>`,!0)});Ce("cpDispatch",()=>Xs());Ce("retryBtn",()=>{if(Q.attempts++,Q.deathAtRing){Q.deathAtRing=!1;const t=c2(Q.bossSnap||Q.checkpointSnap,Q.attempts);Ds(t),Ct.banner("Back at the open safehouse<small>The guardian stays beaten · walk into the ring</small>",!0);return}if(Q.bossSnap){const t=Q.bossSnap,e=Pr(t,Q.attempts);Ds(e),Q.bossSnap=t,Ct.banner("Retry the guardian<small>Full health · the same supplies · it waits just ahead</small>",!0);return}const i=Pr(Q.checkpointSnap,Q.attempts);Ds(i),Ct.banner(`Retry<small>${i.legIndex>0?`Safehouse ${i.legIndex}`:"Departure"}</small>`,!0)});Ce("retryLegBtn",()=>{Q.attempts++,Q.bossSnap=null;const i=Pr(Q.checkpointSnap,Q.attempts);Ds(i),Ct.banner(`Restart<small>${i.legIndex>0?`Safehouse ${i.legIndex}`:"Departure"}</small>`,!0)});Ce("deathDispatch",()=>Xs());Ce("rotateDismiss",()=>{Q.rotateDismissed=!0,el()});Ce("doneDispatch",()=>Xs());function sl(i){Q.settings.thumb=i,Ct.setThumb(i),df(Q.settings)}const U2=6400,N2={heal:"+35 health · parcel repaired",shield:"Shield +50",rapid:"Rapid fire 18s",power:"Stronger rounds 18s",evasion:"Evasion boots 18s"},F2={blocked:"Blocked — slide sideways around the obstacle or back toward the road",edge:"Edge of the route — head back toward the road",gate:"Sealed! Defeat the guardian ☠ first — turn back and fight it in the open",gateAhead:"The safehouse is sealed until its guardian falls",bossMove:"Keep moving! Circle the guardian and step out of red zones",bossFind:"Close in on the guardian ☠ — the courier only fires within reach",refuge:"Step into the glowing ring to enter the safehouse"};function Ss(){const i=Q.state,t=h2(i),e=i.player,n=Ne(i),s=new Map;for(const a of t)switch(Me.onEvent(a,i),a.t){case"shot":Jt.play(a.weapon),Ct.shotPulse();break;case"arrive":a.kind!=="call"&&a.count>=4&&Jt.play("arrive",{big:a.kind==="ambush"});break;case"explode":Jt.play("explode");break;case"hit":Jt.play("hit",{big:a.type==="brute"||a.type==="guardian"}),s.has(a.id)?s.get(a.id).dmg+=a.dmg:s.set(a.id,{...a});break;case"kill":Jt.play("kill",{type:a.type}),a.type==="brute"&&Mo(.05);break;case"weaponSwitch":Jt.play("switch"),Ct.weaponPop();break;case"pickup":{Jt.play("pickup",{kind:a.kind});let c=N2[a.kind];if(a.kind==="weapon"){const l=He[a.weapon].name;if(a.unlocked){Ct.banner(`${l} unlocked!<small>${He[a.weapon].role} · ${Math.round(Xn(a.weapon))} m reach</small>`,!0,2.4);break}c=`${l} upgraded +${a.level}`}a.kind==="rapid"&&(c+=" (shorter reach)"),Ct.pickup(c);break}case"playerHit":if(Jt.play("playerHit",{heavy:a.heavy,shield:a.absorbed>0&&a.dmg===0}),a.dmg>0&&Ct.hurt(a.heavy),Ct.hitFrom(Math.atan2(a.sx-e.x,a.sz-e.z),a.heavy,a.dmg===0),a.heavy&&Mo(.07),navigator.vibrate&&a.heavy)try{navigator.vibrate(40)}catch{}break;case"gateZap":Jt.play("zap");break;case"warn":Jt.play("warn",{kind:a.kind});break;case"ambush":Jt.play("sting",{kind:"ambush"}),Me.peak(6),Ct.banner(`AMBUSH!<small>${a.count} infected closing in</small>`,!1,2.4);break;case"bossAppear":{Jt.play("bossAppear"),Jt.play("sting",{kind:"boss"});{const c=Qc(i),l=Dn(i);c.player={z:l.z-Xe[i.mode].bossTrigger-10,offset:0},c.resources={shield:Math.max(i.player.shield,0),powerups:{rapid:0,power:0,evasion:0}},Q.bossSnap=c}Ct.bossIntro();break}case"bossStagger":Jt.play("bossStagger"),Mo(.08),Ct.floater("Staggered!","stagger",a.x,n.height(a.x,a.z)+7.2,a.z,{life:1.3,rise:1,clamp:!0});break;case"bossEnrage":Jt.play("bossEnrage"),Me.peak(3),Ct.floater("Enraged!","stagger enraged",a.x,n.height(a.x,a.z)+7.2,a.z,{life:1.4,rise:1,clamp:!0});break;case"bossWarn":Jt.play("bossWarn",{kind:a.kind});break;case"bossCall":Jt.play("warn",{kind:"call"}),Ct.say(a.brood?`A brood of ${a.count} bursts out!`:`The guardian calls ${a.count} more infected!`,{prio:1,dur:2.2,cls:"info",key:"fight:call"});break;case"bossBurrow":Jt.play("bossBurrow");break;case"bossSurface":Jt.play("hazardBoom");break;case"bossExposed":Jt.play("bossExposed");break;case"bossDown":Jt.play("kill",{type:"guardian"}),Jt.play("gateOpen"),Mo(.16),Ct.endFight(),Ct.banner("Guardian defeated!<small>The barrier falls — walk into the glowing ring</small>",!0,3);break;case"containerHit":Jt.play("containerHit",{type:a.type});break;case"containerBreak":Jt.play("containerBreak",{type:a.type});break;case"hazardBoom":Jt.play("hazardBoom");break;case"slam":Jt.play("hazardBoom");break;case"dogCrouch":Jt.play("dog");break;case"hint":Jt.play("hint"),Ct.hint(F2[a.kind]||"",3.4,a.kind==="bossMove"||a.kind==="bossFind"||a.kind==="gate"?`fight:${a.kind}`:void 0);break;case"powerupEnd":Ct.toast({rapid:"Rapid fire ended",power:"Stronger rounds ended",evasion:"Evasion boots ended"}[a.kind]||"",!1,1.6);break;case"shieldBreak":Ct.toast("Shield broken",!1,1.4);break;case"checkpoint":k2();break;case"complete":O2();break;case"death":B2(a.reason);break}const r=Q.bigHits||(Q.bigHits=new Map);for(const a of s.values()){if(a.type!=="guardian"&&a.type!=="brute")continue;const c=r.get(a.id);c?(c.dmg+=a.dmg,c.x=a.x,c.z=a.z,c.power=c.power||a.power):r.set(a.id,{...a,t:0}),s.delete(a.id)}for(const[a,c]of r)c.t+=fr,!(c.t<(c.type==="guardian"?.4:.3))&&(r.delete(a),s.set(a,c));let o=0;for(const a of s.values()){if(o++>=6)break;const c=n.height(a.x,a.z)+(a.type==="guardian"?5.5:a.type==="brute"?3:2);Ct.floater(String(Math.round(a.dmg)),a.power?"dmg power":a.dmg>=30?"dmg big":"dmg",a.x,c,a.z,{life:a.type==="guardian"?.8:.6,rise:1.2})}}function xf(i,t=[]){return[["Time",Ho(i.time)],["Infected cleared",i.stats.kills],["Supplies",i.stats.pickups],["Crates opened",i.stats.containers],...t].map(([n,s])=>`<div><b>${s}</b>${n}</div>`).join("")}function k2(){const i=Q.state;Ct.clearTransient(),Jt.play("refuge");const t=Qc(i);Q.checkpointSnap=t,Q.attempts=0;const e=R2(t);Yt("cpTitle").textContent=`Safehouse ${i.legIndex} reached`,Yt("cpText").textContent=e.ok?"Health restored · parcel repaired · progress saved in this browser. Continue now, or return to dispatch and resume later.":"Health restored · parcel repaired.";const n=i.legTimes[i.legTimes.length-1]||0,s=i.legIndex>1?[["Leg time",Ho(n)]]:[];Yt("cpStats").innerHTML=xf(i,[...s,["Next",i.legIndex===5?"The Lantern":`Safehouse ${i.legIndex+1}`]]);const r=Yt("cpError");e.ok?r.classList.add("hidden"):(r.textContent=e.error,r.classList.remove("hidden"),Ct.toast(e.error,!0,4)),Yt("cpContinue").textContent=`Continue to leg ${i.legIndex+1}`,Pi.release(),Ct.show("checkpoint")}function O2(){const i=Q.state;Jt.play("complete"),P2(),Yt("doneStats").innerHTML=xf(i,[["Mode",Xe[i.mode].label],["Weapons",i.loadout.owned.length]]),Pi.release(),Ct.clearTransient(),Ct.clearFloaters(),Yt("hud").classList.add("arrival"),Ct.say("The Lantern!<small>Carry the parcel to the door</small>",{prio:5,dur:2.6,cls:"good"}),Me.onHandover=()=>{Q.state===i&&(Jt.play("gateOpen"),Ct.say("Parcel delivered · The Lantern is lit!<small>Its beam sweeps the valley again</small>",{prio:6,dur:4,cls:"good"}))},setTimeout(()=>{Q.state===i&&Ct.show("complete")},U2)}function B2(i){const t=Q.state;Ct.clearTransient(),Jt.play("death"),Pi.release(),Yt("deathTitle").textContent=i==="parcel"?"The parcel was destroyed":"The courier fell",Yt("deathText").textContent=t.legIndex>0?`Return to Safehouse ${t.legIndex} with the weapons and supplies you saved there.`:"Return to the District 08 depot and try the first leg again.";const e=t.legIndex>0?`Safehouse ${t.legIndex}`:"departure",n=Q.bossSnap&&Q.bossSnap.legIndex===t.legIndex;Q.deathAtRing=!!t.boss.defeated,!n&&!Q.deathAtRing&&(Q.bossSnap=null),Q.deathAtRing?Yt("deathText").textContent="The guardian is already beaten. Return to its open safehouse ring with full health and walk in.":n&&(Yt("deathText").textContent="Try the guardian again from the edge of its arena with full health and the weapons you carried in — or restart the whole leg.");const s=t.legIndex===5?"The Lantern":`Safehouse ${t.legIndex+1}`;Yt("retryBtn").textContent=Q.deathAtRing?`Return to ${s}`:n?"Retry the guardian":`Retry from ${e}`,Yt("retryLegBtn").textContent=`Restart from ${e}`,Yt("retryLegBtn").classList.toggle("hidden",!n||Q.deathAtRing),setTimeout(()=>{Q.state===t&&t.phase==="dead"&&Ct.show("death")},1300)}function Mo(i){Q.hitStop=Math.max(Q.hitStop||0,i)}let eu=performance.now();function _f(i){const t=Math.min(.1,Math.max(0,(i-eu)/1e3));eu=i;try{if(Q.mode==="playing"&&Q.state){const e=Q.state,n=Q.hitStop>0;if(n&&(Q.hitStop-=t),!Q.paused&&!Q.frozen&&e.phase==="travel"&&!n){Q.acc+=t;const f=Pi.vector(),u=Me.screenToWorld(f.x,f.y);let d=0;for(;Q.acc>=fr&&d<6&&(af(e,u),Ss(),Q.acc-=fr,d++,e.phase==="travel"););d>=6&&(Q.acc=0)}const s=Q.paused||Q.frozen||e.phase!=="travel"?1:un(Q.acc/fr,0,1);Me.showCue=!0,Me.render(e,s,Q.paused||Q.frozen?0:n?t*.15:t);const r=(f,u,d)=>Me.project(f,u,d);Ct.updateHud(e,r,performance.now()/1e3),Ct.setThreat(e.phase==="travel"?Math.min(1,Me.threat)*.6:0);const o=Ct.playBounds(),a=Math.max(1,Ct.el.hud.clientHeight);Me.frameSafe.top=o.fixedTop/a,Me.frameSafe.bottom=o.bottom/a,Ct.updateFloaters(Q.paused?0:t,r),Ct.updateArrows(e,r,(f,u)=>Me.heightAt(f,u)),Ct.tick(Q.paused?0:t);const c=e.enemies.some(f=>Math.hypot(f.x-e.player.x,f.z-e.player.z)<25),l=e.player;Jt.updateAmbient(t,{calm:!c,biome:Ne(e).dominantBiome(l.z),playing:!Q.paused&&e.phase==="travel",lowHp:l.alive&&l.hp/l.maxHp<.3,blight:Me.blight})}else if(Q.preview){const e=Q.preview,n=Ne(e),s=e.player;if(s.px=s.x,s.pz=s.z,s.z+=t*2.2,s.x=n.roadX(s.z)+1.2,s.vx=(s.x-s.px)/Math.max(t,.001),s.vz=2.2,e.facing.travel=Math.atan2(s.vx,s.vz),e.facing.legs=e.facing.travel,e.facing.moving=!0,s.z>150&&(s.z=-6,s.pz=-6),!Q.gapN||++Q.gapN%30===0){Q.gapN=Q.gapN||1;const r=Yt("dispatchHead").getBoundingClientRect().bottom,o=Yt("dispatchFoot").getBoundingClientRect().top,a=window.innerHeight||1;Me.previewFocusY=o-r>110?(r+o)/2/a+.03:null}Me.showCue=!1,Me.render(e,1,t)}}catch(e){console.error(e)}Q.frameTimes.push(t),Q.mode==="playing"&&!Q.paused&&Me.adaptQuality(Q.frameTimes,i/1e3),Q.frameTimes.length>240&&Q.frameTimes.shift(),requestAnimationFrame(_f)}Xs();el();requestAnimationFrame(_f);if(pf){const i=()=>Q.state,t=()=>{const n=Q.state;if(!n)return{screen:Q.mode};const s=Ne(n),r={};for(const a of n.enemies)r[a.type]=(r[a.type]||0)+1;const o=Dn(n);return{screen:Q.mode,paused:Q.paused,phase:n.phase,mode:n.mode,seed:n.seed,legIndex:n.legIndex,time:n.time,legTimes:n.legTimes,biome:s.dominantBiome(n.player.z),player:{x:n.player.x,z:n.player.z,vx:n.player.vx,vz:n.player.vz,hp:n.player.hp,parcel:n.player.parcel,shield:n.player.shield,alive:n.player.alive,speed:n.player.speed},roadOffset:n.player.x-s.roadX(n.player.z),toRefuge:o.z-n.player.z,weapon:n.weapon.current,owned:n.loadout.owned.slice(),levels:{...n.loadout.levels},powerups:{...n.powerups},reach:Object.fromEntries(n.loadout.owned.map(a=>[a,Xn(a,n.powerups.rapid>0)])),enemies:n.enemies.length,enemyTypes:r,pending:n.pending.length,drops:n.drops.map(a=>({kind:a.kind,weapon:a.weapon})),hazards:n.hazards.map(a=>({kind:a.kind,src:a.src,t:a.t})),boss:{...n.boss},facing:{travel:n.facing.travel,legs:n.facing.legs,upper:$u(n.facing),phase:hv(n.facing),age:n.facing.age,shot:n.facing.shot},projectiles:n.projectiles.length,stats:{...n.stats,packSizes:void 0,ambushSizes:void 0}}},e=n=>{const s=i(),r=Ne(s);let o=s.legIndex*r.legLength,a=r.segments.find(f=>f.biome===n&&f.z1>o&&f.z0<o+r.legLength);if(!a){if(a=r.segments.find(f=>f.biome===n),!a)return!1;Ge.setLeg(s,a.leg),o=s.legIndex*r.legLength}const c=Math.max(a.z0,o+5),l=Math.min(a.z1,o+r.legLength-80);return Ge.teleport(s,(c+l)/2,0),Me.camInit=!1,s.enemies=[],s.pending=[],s.hazards=[],r.dominantBiome(s.player.z)};window.__kuru={version:1,state:t,raw:()=>Q.state,world:()=>Q.state?Ne(Q.state):null,serialize:()=>Q.state?l2(Q.state):null,start:(n="field",s)=>(nl(n,s),t()),dispatch:()=>Xs(),pause:()=>qs(),resume:()=>il(),freeze:(n=!0)=>(Q.frozen=n,Q.frozen),step:(n=1,s=0,r=0)=>{for(let o=0;o<n;o++)af(i(),{mx:s,mz:r}),Ss();return t()},teleport:(n,s=0)=>(Ge.teleport(i(),n,s),Me.camInit=!1,t()),nearRefuge:(n=80)=>(Ge.nearRefuge(i(),n),Me.camInit=!1,t()),setLeg:n=>(Ge.setLeg(i(),n),Me.camInit=!1,t()),toBiome:e,biomes:()=>Object.keys(fn),spawn:(n,s=1,r={})=>Ge.spawn(i(),n,s,r).length,crowd:(n=71,s=!0)=>Ge.crowd(i(),n,s),startBoss:()=>{const n=Ge.startBoss(i());return Me.camInit=!1,n},defeatBoss:()=>(Ge.defeatBoss(i()),Ss(),t()),grantWeapon:n=>Ge.grantWeapon(i(),n),powerup:n=>Ge.powerup(i(),n),dropGallery:()=>Ge.dropGallery(i()),killPlayer:()=>(Ge.killPlayer(i()),Ss(),t()),reachCheckpoint:()=>(Ge.reachCheckpoint(i()),Ss(),t()),complete:()=>(Ge.complete(i()),Ss(),t()),clearEnemies:()=>{const n=i();return n.enemies=[],n.pending=[],n.hazards=[],0},render:()=>Me.info(),frames:()=>{const n=Q.frameTimes.slice().sort((r,o)=>r-o),s=n[Math.floor(n.length/2)]||0;return{median:s,p95:n[Math.floor(n.length*.95)]||0,fps:s?1/s:0}},audio:()=>({ready:Jt.ready,muted:Jt.muted,counts:{...Jt.counts},rms:Jt.rms()}),settings:()=>({...Q.settings}),readSave:()=>Go()}}
