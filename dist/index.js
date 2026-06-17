"use strict";var E=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(s){throw r=0,s}}};var z=E(function(Q,k){"use strict";var S=require("@stdlib/ndarray-base-ctor"),M=require("@stdlib/ndarray-base-assign"),R=require("@stdlib/ndarray-base-buffer"),T=require("@stdlib/ndarray-base-numel"),O=require("@stdlib/ndarray-base-shape2strides"),A=require("@stdlib/ndarray-base-strides2order"),B=require("@stdlib/ndarray-base-shape"),C=require("@stdlib/ndarray-base-strides"),F=require("@stdlib/ndarray-base-offset"),G=require("@stdlib/ndarray-base-order"),H=require("@stdlib/ndarray-base-dtype"),I=require("@stdlib/ndarray-base-data-buffer"),w=require("@stdlib/array-base-zeros"),J=require("@stdlib/string-format");function K(e,r){var s,a,g,o,v,d,h,c,j,y,f,b,D,N,m,t,l,q,p,i,n,u;if(g=B(e,!1),b=C(e,!1),s=H(e),t=r.length,m=g.length,t<m)throw new RangeError(J("invalid argument. Second argument must have at least as many elements as the number of dimensions of the first argument. Number of input dimensions: `%u`. Number of repetitions: `%u`.",m,t));for(y=t-m,l=A(b),l===0||l===3?a=G(e):l===1?a="row-major":a="column-major",v=w(2*t),f=w(2*t),o=w(t),i=0;i<t;i++)n=i-y,u=2*i,q=n<0?1:g[n],p=n<0?0:b[n],o[i]=r[i]*q,a==="row-major"?(v[u]=r[i],v[u+1]=q,f[u+1]=p):(v[u]=q,v[u+1]=r[i],f[u]=p);return t>0?(c=T(o),d=O(o,a)):(c=1,d=[0]),h=R(s,c),j=new e.constructor(s,h,o,d,0,a),D=S(s,I(e),v,f,F(e),a),N=S(s,h,v,O(v,a),0,a),M([D,N]),j}k.exports=K});var L=z();module.exports=L;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
