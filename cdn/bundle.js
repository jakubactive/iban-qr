var t,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n={},r={};t=function(t){Array.prototype.map||(Array.prototype.map=function(t){if(null==this)throw new TypeError;var e=Object(this),n=e.length>>>0;if("function"!=typeof t)throw new TypeError;for(var r=new Array(n),o=arguments.length>=2?arguments[1]:void 0,i=0;i<n;i++)i in e&&(r[i]=t.call(o,e[i],i,e));return r});var e="A".charCodeAt(0),n="Z".charCodeAt(0);function r(t){return(t=(t=t.toUpperCase()).substr(4)+t.substr(0,4)).split("").map((function(t){var r=t.charCodeAt(0);return r>=e&&r<=n?r-e+10:t})).join("")}function o(t){for(var e,n=t;n.length>2;)e=n.slice(0,9),n=parseInt(e,10)%97+n.slice(e.length);return parseInt(n,10)%97}function i(t){return t.replace(c,"").toUpperCase()}function a(t,e,n,r){this.countryCode=t,this.length=e,this.structure=n,this.example=r}a.prototype._regex=function(){return this._cachedRegex||(this._cachedRegex=function(t){var e=t.match(/(.{3})/g).map((function(t){var e,n=t.slice(0,1),r=parseInt(t.slice(1),10);switch(n){case"A":e="0-9A-Za-z";break;case"B":e="0-9A-Z";break;case"C":e="A-Za-z";break;case"F":e="0-9";break;case"L":e="a-z";break;case"U":e="A-Z";break;case"W":e="0-9a-z"}return"(["+e+"]{"+r+"})"}));return new RegExp("^"+e.join("")+"$")}(this.structure))},a.prototype.isValid=function(t){return this.length==t.length&&this.countryCode===t.slice(0,2)&&this._regex().test(t.slice(4))&&1==o(r(t))},a.prototype.toBBAN=function(t,e){return this._regex().exec(t.slice(4)).slice(1).join(e)},a.prototype.fromBBAN=function(t){if(!this.isValidBBAN(t))throw new Error("Invalid BBAN");var e=("0"+(98-o(r(this.countryCode+"00"+t)))).slice(-2);return this.countryCode+e+t},a.prototype.isValidBBAN=function(t){return this.length-4==t.length&&this._regex().test(t)};var s={};function u(t){s[t.countryCode]=t}u(new a("AD",24,"F04F04A12","AD1200012030200359100100")),u(new a("AE",23,"F03F16","AE070331234567890123456")),u(new a("AL",28,"F08A16","AL47212110090000000235698741")),u(new a("AT",20,"F05F11","AT611904300234573201")),u(new a("AZ",28,"U04A20","AZ21NABZ00000000137010001944")),u(new a("BA",20,"F03F03F08F02","BA391290079401028494")),u(new a("BE",16,"F03F07F02","BE68539007547034")),u(new a("BG",22,"U04F04F02A08","BG80BNBG96611020345678")),u(new a("BH",22,"U04A14","BH67BMAG00001299123456")),u(new a("BR",29,"F08F05F10U01A01","BR9700360305000010009795493P1")),u(new a("BY",28,"A04F04A16","BY13NBRB3600900000002Z00AB00")),u(new a("CH",21,"F05A12","CH9300762011623852957")),u(new a("CR",22,"F04F14","CR72012300000171549015")),u(new a("CY",28,"F03F05A16","CY17002001280000001200527600")),u(new a("CZ",24,"F04F06F10","CZ6508000000192000145399")),u(new a("DE",22,"F08F10","DE89370400440532013000")),u(new a("DK",18,"F04F09F01","DK5000400440116243")),u(new a("DO",28,"U04F20","DO28BAGR00000001212453611324")),u(new a("EE",20,"F02F02F11F01","EE382200221020145685")),u(new a("EG",29,"F04F04F17","EG800002000156789012345180002")),u(new a("ES",24,"F04F04F01F01F10","ES9121000418450200051332")),u(new a("FI",18,"F06F07F01","FI2112345600000785")),u(new a("FO",18,"F04F09F01","FO6264600001631634")),u(new a("FR",27,"F05F05A11F02","FR1420041010050500013M02606")),u(new a("GB",22,"U04F06F08","GB29NWBK60161331926819")),u(new a("GE",22,"U02F16","GE29NB0000000101904917")),u(new a("GI",23,"U04A15","GI75NWBK000000007099453")),u(new a("GL",18,"F04F09F01","GL8964710001000206")),u(new a("GR",27,"F03F04A16","GR1601101250000000012300695")),u(new a("GT",28,"A04A20","GT82TRAJ01020000001210029690")),u(new a("HR",21,"F07F10","HR1210010051863000160")),u(new a("HU",28,"F03F04F01F15F01","HU42117730161111101800000000")),u(new a("IE",22,"U04F06F08","IE29AIBK93115212345678")),u(new a("IL",23,"F03F03F13","IL620108000000099999999")),u(new a("IS",26,"F04F02F06F10","IS140159260076545510730339")),u(new a("IT",27,"U01F05F05A12","IT60X0542811101000000123456")),u(new a("IQ",23,"U04F03A12","IQ98NBIQ850123456789012")),u(new a("JO",30,"A04F22","JO15AAAA1234567890123456789012")),u(new a("KW",30,"U04A22","KW81CBKU0000000000001234560101")),u(new a("KZ",20,"F03A13","KZ86125KZT5004100100")),u(new a("LB",28,"F04A20","LB62099900000001001901229114")),u(new a("LC",32,"U04F24","LC07HEMM000100010012001200013015")),u(new a("LI",21,"F05A12","LI21088100002324013AA")),u(new a("LT",20,"F05F11","LT121000011101001000")),u(new a("LU",20,"F03A13","LU280019400644750000")),u(new a("LV",21,"U04A13","LV80BANK0000435195001")),u(new a("MC",27,"F05F05A11F02","MC5811222000010123456789030")),u(new a("MD",24,"U02A18","MD24AG000225100013104168")),u(new a("ME",22,"F03F13F02","ME25505000012345678951")),u(new a("MK",19,"F03A10F02","MK07250120000058984")),u(new a("MR",27,"F05F05F11F02","MR1300020001010000123456753")),u(new a("MT",31,"U04F05A18","MT84MALT011000012345MTLCAST001S")),u(new a("MU",30,"U04F02F02F12F03U03","MU17BOMM0101101030300200000MUR")),u(new a("NL",18,"U04F10","NL91ABNA0417164300")),u(new a("NO",15,"F04F06F01","NO9386011117947")),u(new a("PK",24,"U04A16","PK36SCBL0000001123456702")),u(new a("PL",28,"F08F16","PL61109010140000071219812874")),u(new a("PS",29,"U04A21","PS92PALS000000000400123456702")),u(new a("PT",25,"F04F04F11F02","PT50000201231234567890154")),u(new a("QA",29,"U04A21","QA30AAAA123456789012345678901")),u(new a("RO",24,"U04A16","RO49AAAA1B31007593840000")),u(new a("RS",22,"F03F13F02","RS35260005601001611379")),u(new a("SA",24,"F02A18","SA0380000000608010167519")),u(new a("SC",31,"U04F04F16U03","SC18SSCB11010000000000001497USD")),u(new a("SE",24,"F03F16F01","SE4550000000058398257466")),u(new a("SI",19,"F05F08F02","SI56263300012039086")),u(new a("SK",24,"F04F06F10","SK3112000000198742637541")),u(new a("SM",27,"U01F05F05A12","SM86U0322509800000000270100")),u(new a("ST",25,"F08F11F02","ST68000100010051845310112")),u(new a("SV",28,"U04F20","SV62CENR00000000000000700025")),u(new a("TL",23,"F03F14F02","TL380080012345678910157")),u(new a("TN",24,"F02F03F13F02","TN5910006035183598478831")),u(new a("TR",26,"F05F01A16","TR330006100519786457841326")),u(new a("UA",29,"F25","UA511234567890123456789012345")),u(new a("VA",22,"F18","VA59001123000012345678")),u(new a("VG",24,"U04F16","VG96VPVG0000012345678901")),u(new a("XK",20,"F04F10F02","XK051212012345678906")),u(new a("AO",25,"F21","AO69123456789012345678901")),u(new a("BF",27,"F23","BF2312345678901234567890123")),u(new a("BI",16,"F12","BI41123456789012")),u(new a("BJ",28,"F24","BJ39123456789012345678901234")),u(new a("CI",28,"U02F22","CI70CI1234567890123456789012")),u(new a("CM",27,"F23","CM9012345678901234567890123")),u(new a("CV",25,"F21","CV30123456789012345678901")),u(new a("DZ",24,"F20","DZ8612345678901234567890")),u(new a("IR",26,"F22","IR861234568790123456789012")),u(new a("MG",27,"F23","MG1812345678901234567890123")),u(new a("ML",28,"U01F23","ML15A12345678901234567890123")),u(new a("MZ",25,"F21","MZ25123456789012345678901")),u(new a("SN",28,"U01F23","SN52A12345678901234567890123")),u(new a("GF",27,"F05F05A11F02","GF121234512345123456789AB13")),u(new a("GP",27,"F05F05A11F02","GP791234512345123456789AB13")),u(new a("MQ",27,"F05F05A11F02","MQ221234512345123456789AB13")),u(new a("RE",27,"F05F05A11F02","RE131234512345123456789AB13")),u(new a("PF",27,"F05F05A11F02","PF281234512345123456789AB13")),u(new a("TF",27,"F05F05A11F02","TF891234512345123456789AB13")),u(new a("YT",27,"F05F05A11F02","YT021234512345123456789AB13")),u(new a("NC",27,"F05F05A11F02","NC551234512345123456789AB13")),u(new a("BL",27,"F05F05A11F02","BL391234512345123456789AB13")),u(new a("MF",27,"F05F05A11F02","MF551234512345123456789AB13")),u(new a("PM",27,"F05F05A11F02","PM071234512345123456789AB13")),u(new a("WF",27,"F05F05A11F02","WF621234512345123456789AB13"));var c=/[^a-zA-Z0-9]/g,l=/(.{4})(?!$)/g;function f(t){return"string"==typeof t||t instanceof String}t.isValid=function(t){if(!f(t))return!1;t=i(t);var e=s[t.slice(0,2)];return!!e&&e.isValid(t)},t.toBBAN=function(t,e){void 0===e&&(e=" "),t=i(t);var n=s[t.slice(0,2)];if(!n)throw new Error("No country with code "+t.slice(0,2));return n.toBBAN(t,e)},t.fromBBAN=function(t,e){var n=s[t];if(!n)throw new Error("No country with code "+t);return n.fromBBAN(i(e))},t.isValidBBAN=function(t,e){if(!f(e))return!1;var n=s[t];return n&&n.isValidBBAN(i(e))},t.printFormat=function(t,e){return void 0===e&&(e=" "),i(t).replace(l,"$1"+e)},t.electronicFormat=i,t.countries=s},t("string"!=typeof r.nodeName?r:e.IBAN={});const{isValid:o,electronicFormat:i}=r,a="BCD",s="002",u=1,c="SCT",l=(t,e)=>{if("string"!=typeof t||!t)throw new Error(e+" must be a non-empty string.")};var f=t=>{if(!t)throw new Error("data must be an object.");if(l(t.name,"data.name"),t.name.length>70)throw new Error("data.name must have <=70 characters");if("bic"in t&&(l(t.bic,"data.bic"),t.bic.length>11))throw new Error("data.bic must have <=11 characters");if(l(t.iban,"data.iban"),!o(t.iban))throw new Error("data.iban must be a valid iban code.");if(null!==t.amount){if("number"!=typeof t.amount)throw new Error("data.amount must be a number or null.");if(t.amount<.01||t.amount>999999999.99)throw new Error("data.amount must be >=0.01 and <=999999999.99.")}if("purposeCode"in t&&(l(t.purposeCode,"data.purposeCode"),t.purposeCode.length>4))throw new Error("data.purposeCode must have <=4 characters");if("structuredReference"in t&&(l(t.structuredReference,"data.structuredReference"),t.structuredReference.length>35))throw new Error("data.structuredReference must have <=35 characters");if("unstructuredReference"in t&&(l(t.unstructuredReference,"data.unstructuredReference"),t.unstructuredReference.length>140))throw new Error("data.unstructuredReference must have <=140 characters");if("structuredReference"in t&&"unstructuredReference"in t)throw new Error("Use either data.structuredReference or data.unstructuredReference.");if("information"in t&&(l(t.information,"data.information"),t.information.length>70))throw new Error("data.information must have <=70 characters");return[a,s,u,c,t.bic,t.name,i(t.iban),null===t.amount?"":"EUR"+t.amount.toFixed(2),t.purposeCode||"",t.structuredReference||"",t.unstructuredReference||"",t.information||""].join("\n")},h={},d={},g={};let w;const p=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];g.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},g.getSymbolTotalCodewords=function(t){return p[t]},g.getBCHDigit=function(t){let e=0;for(;0!==t;)e++,t>>>=1;return e},g.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');w=t},g.isKanjiModeEnabled=function(){return void 0!==w},g.toSJIS=function(t){return w(t)};var F,A={};function m(){this.buffer=[],this.length=0}(F=A).L={bit:1},F.M={bit:0},F.Q={bit:3},F.H={bit:2},F.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},F.from=function(t,e){if(F.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return F.L;case"m":case"medium":return F.M;case"q":case"quartile":return F.Q;case"h":case"high":return F.H;default:throw new Error("Unknown EC Level: "+t)}}(t)}catch(t){return e}},m.prototype={get:function(t){const e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(let n=0;n<e;n++)this.putBit(1==(t>>>e-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var E=m;function B(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}B.prototype.set=function(t,e,n,r){const o=t*this.size+e;this.data[o]=n,r&&(this.reservedBit[o]=!0)},B.prototype.get=function(t,e){return this.data[t*this.size+e]},B.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n},B.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var y=B,C={};!function(t){const e=g.getSymbolSize;t.getRowColCoords=function(t){if(1===t)return[];const n=Math.floor(t/7)+2,r=e(t),o=145===r?26:2*Math.ceil((r-13)/(2*n-2)),i=[r-7];for(let t=1;t<n-1;t++)i[t]=i[t-1]-o;return i.push(6),i.reverse()},t.getPositions=function(e){const n=[],r=t.getRowColCoords(e),o=r.length;for(let t=0;t<o;t++)for(let e=0;e<o;e++)0===t&&0===e||0===t&&e===o-1||t===o-1&&0===e||n.push([r[t],r[e]]);return n}}(C);var v={};const I=g.getSymbolSize;v.getPositions=function(t){const e=I(t);return[[0,0],[e-7,0],[0,e-7]]};var N={};!function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e=3,n=3,r=40,o=10;function i(e,n,r){switch(e){case t.Patterns.PATTERN000:return(n+r)%2==0;case t.Patterns.PATTERN001:return n%2==0;case t.Patterns.PATTERN010:return r%3==0;case t.Patterns.PATTERN011:return(n+r)%3==0;case t.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(r/3))%2==0;case t.Patterns.PATTERN101:return n*r%2+n*r%3==0;case t.Patterns.PATTERN110:return(n*r%2+n*r%3)%2==0;case t.Patterns.PATTERN111:return(n*r%3+(n+r)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}}t.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(t){const n=t.size;let r=0,o=0,i=0,a=null,s=null;for(let u=0;u<n;u++){o=i=0,a=s=null;for(let c=0;c<n;c++){let n=t.get(u,c);n===a?o++:(o>=5&&(r+=e+(o-5)),a=n,o=1),n=t.get(c,u),n===s?i++:(i>=5&&(r+=e+(i-5)),s=n,i=1)}o>=5&&(r+=e+(o-5)),i>=5&&(r+=e+(i-5))}return r},t.getPenaltyN2=function(t){const e=t.size;let r=0;for(let n=0;n<e-1;n++)for(let o=0;o<e-1;o++){const e=t.get(n,o)+t.get(n,o+1)+t.get(n+1,o)+t.get(n+1,o+1);4!==e&&0!==e||r++}return r*n},t.getPenaltyN3=function(t){const e=t.size;let n=0,o=0,i=0;for(let r=0;r<e;r++){o=i=0;for(let a=0;a<e;a++)o=o<<1&2047|t.get(r,a),a>=10&&(1488===o||93===o)&&n++,i=i<<1&2047|t.get(a,r),a>=10&&(1488===i||93===i)&&n++}return n*r},t.getPenaltyN4=function(t){let e=0;const n=t.data.length;for(let r=0;r<n;r++)e+=t.data[r];return Math.abs(Math.ceil(100*e/n/5)-10)*o},t.applyMask=function(t,e){const n=e.size;for(let r=0;r<n;r++)for(let o=0;o<n;o++)e.isReserved(o,r)||e.xor(o,r,i(t,o,r))},t.getBestMask=function(e,n){const r=Object.keys(t.Patterns).length;let o=0,i=1/0;for(let a=0;a<r;a++){n(a),t.applyMask(a,e);const r=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(a,e),r<i&&(i=r,o=a)}return o}}(N);var b={};const M=A,R=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],T=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];b.getBlocksCount=function(t,e){switch(e){case M.L:return R[4*(t-1)+0];case M.M:return R[4*(t-1)+1];case M.Q:return R[4*(t-1)+2];case M.H:return R[4*(t-1)+3];default:return}},b.getTotalCodewordsCount=function(t,e){switch(e){case M.L:return T[4*(t-1)+0];case M.M:return T[4*(t-1)+1];case M.Q:return T[4*(t-1)+2];case M.H:return T[4*(t-1)+3];default:return}};var U={},L={};const P=new Uint8Array(512),S=new Uint8Array(256);!function(){let t=1;for(let e=0;e<255;e++)P[e]=t,S[t]=e,t<<=1,256&t&&(t^=285);for(let t=255;t<512;t++)P[t]=P[t-255]}(),L.log=function(t){if(t<1)throw new Error("log("+t+")");return S[t]},L.exp=function(t){return P[t]},L.mul=function(t,e){return 0===t||0===e?0:P[S[t]+S[e]]},function(t){const e=L;t.mul=function(t,n){const r=new Uint8Array(t.length+n.length-1);for(let o=0;o<t.length;o++)for(let i=0;i<n.length;i++)r[o+i]^=e.mul(t[o],n[i]);return r},t.mod=function(t,n){let r=new Uint8Array(t);for(;r.length-n.length>=0;){const t=r[0];for(let o=0;o<n.length;o++)r[o]^=e.mul(n[o],t);let o=0;for(;o<r.length&&0===r[o];)o++;r=r.slice(o)}return r},t.generateECPolynomial=function(n){let r=new Uint8Array([1]);for(let o=0;o<n;o++)r=t.mul(r,new Uint8Array([1,e.exp(o)]));return r}}(U);const x=U;function D(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}D.prototype.initialize=function(t){this.degree=t,this.genPoly=x.generateECPolynomial(this.degree)},D.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const n=x.mod(e,this.genPoly),r=this.degree-n.length;if(r>0){const t=new Uint8Array(this.degree);return t.set(n,r),t}return n};var K=D,k={},_={},H={isValid:function(t){return!isNaN(t)&&t>=1&&t<=40}},V={};const z="[0-9]+";let G="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";G=G.replace(/u/g,"\\u");const O="(?:(?![A-Z0-9 $%*+\\-./:]|"+G+")(?:.|[\r\n]))+";V.KANJI=new RegExp(G,"g"),V.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),V.BYTE=new RegExp(O,"g"),V.NUMERIC=new RegExp(z,"g"),V.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const Y=new RegExp("^"+G+"$"),J=new RegExp("^"+z+"$"),Z=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");V.testKanji=function(t){return Y.test(t)},V.testNumeric=function(t){return J.test(t)},V.testAlphanumeric=function(t){return Z.test(t)},function(t){const e=H,n=V;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(t,n){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!e.isValid(n))throw new Error("Invalid version: "+n);return n>=1&&n<10?t.ccBits[0]:n<27?t.ccBits[1]:t.ccBits[2]},t.getBestModeForData=function(e){return n.testNumeric(e)?t.NUMERIC:n.testAlphanumeric(e)?t.ALPHANUMERIC:n.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},t.isValid=function(t){return t&&t.bit&&t.ccBits},t.from=function(e,n){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+e)}}(e)}catch(t){return n}}}(_),function(t){const e=g,n=b,r=A,o=_,i=H,a=e.getBCHDigit(7973);function s(t,e){return o.getCharCountIndicator(t,e)+4}function u(t,e){let n=0;return t.forEach((function(t){const r=s(t.mode,e);n+=r+t.getBitsLength()})),n}t.from=function(t,e){return i.isValid(t)?parseInt(t,10):e},t.getCapacity=function(t,r,a){if(!i.isValid(t))throw new Error("Invalid QR Code version");void 0===a&&(a=o.BYTE);const u=8*(e.getSymbolTotalCodewords(t)-n.getTotalCodewordsCount(t,r));if(a===o.MIXED)return u;const c=u-s(a,t);switch(a){case o.NUMERIC:return Math.floor(c/10*3);case o.ALPHANUMERIC:return Math.floor(c/11*2);case o.KANJI:return Math.floor(c/13);case o.BYTE:default:return Math.floor(c/8)}},t.getBestVersionForData=function(e,n){let i;const a=r.from(n,r.M);if(Array.isArray(e)){if(e.length>1)return function(e,n){for(let r=1;r<=40;r++)if(u(e,r)<=t.getCapacity(r,n,o.MIXED))return r}(e,a);if(0===e.length)return 1;i=e[0]}else i=e;return function(e,n,r){for(let o=1;o<=40;o++)if(n<=t.getCapacity(o,r,e))return o}(i.mode,i.getLength(),a)},t.getEncodedBits=function(t){if(!i.isValid(t)||t<7)throw new Error("Invalid QR Code version");let n=t<<12;for(;e.getBCHDigit(n)-a>=0;)n^=7973<<e.getBCHDigit(n)-a;return t<<12|n}}(k);var j={};const Q=g,q=Q.getBCHDigit(1335);j.getEncodedBits=function(t,e){const n=t.bit<<3|e;let r=n<<10;for(;Q.getBCHDigit(r)-q>=0;)r^=1335<<Q.getBCHDigit(r)-q;return 21522^(n<<10|r)};var $={};const W=_;function X(t){this.mode=W.NUMERIC,this.data=t.toString()}X.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},X.prototype.getLength=function(){return this.data.length},X.prototype.getBitsLength=function(){return X.getBitsLength(this.data.length)},X.prototype.write=function(t){let e,n,r;for(e=0;e+3<=this.data.length;e+=3)n=this.data.substr(e,3),r=parseInt(n,10),t.put(r,10);const o=this.data.length-e;o>0&&(n=this.data.substr(e),r=parseInt(n,10),t.put(r,3*o+1))};var tt=X;const et=_,nt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function rt(t){this.mode=et.ALPHANUMERIC,this.data=t}rt.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},rt.prototype.getLength=function(){return this.data.length},rt.prototype.getBitsLength=function(){return rt.getBitsLength(this.data.length)},rt.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let n=45*nt.indexOf(this.data[e]);n+=nt.indexOf(this.data[e+1]),t.put(n,11)}this.data.length%2&&t.put(nt.indexOf(this.data[e]),6)};var ot=rt;const it=function(t){for(var e=[],n=t.length,r=0;r<n;r++){var o=t.charCodeAt(r);if(o>=55296&&o<=56319&&n>r+1){var i=t.charCodeAt(r+1);i>=56320&&i<=57343&&(o=1024*(o-55296)+i-56320+65536,r+=1)}o<128?e.push(o):o<2048?(e.push(o>>6|192),e.push(63&o|128)):o<55296||o>=57344&&o<65536?(e.push(o>>12|224),e.push(o>>6&63|128),e.push(63&o|128)):o>=65536&&o<=1114111?(e.push(o>>18|240),e.push(o>>12&63|128),e.push(o>>6&63|128),e.push(63&o|128)):e.push(239,191,189)}return new Uint8Array(e).buffer},at=_;function st(t){this.mode=at.BYTE,"string"==typeof t&&(t=it(t)),this.data=new Uint8Array(t)}st.getBitsLength=function(t){return 8*t},st.prototype.getLength=function(){return this.data.length},st.prototype.getBitsLength=function(){return st.getBitsLength(this.data.length)},st.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)};var ut=st;const ct=_,lt=g;function ft(t){this.mode=ct.KANJI,this.data=t}ft.getBitsLength=function(t){return 13*t},ft.prototype.getLength=function(){return this.data.length},ft.prototype.getBitsLength=function(){return ft.getBitsLength(this.data.length)},ft.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=lt.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else{if(!(n>=57408&&n<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13)}};var ht=ft,dt={exports:{}};!function(t){var e={single_source_shortest_paths:function(t,n,r){var o={},i={};i[n]=0;var a,s,u,c,l,f,h,d=e.PriorityQueue.make();for(d.push(n,0);!d.empty();)for(u in s=(a=d.pop()).value,c=a.cost,l=t[s]||{})l.hasOwnProperty(u)&&(f=c+l[u],h=i[u],(void 0===i[u]||h>f)&&(i[u]=f,d.push(u,f),o[u]=s));if(void 0!==r&&void 0===i[r]){var g=["Could not find a path from ",n," to ",r,"."].join("");throw new Error(g)}return o},extract_shortest_path_from_predecessor_list:function(t,e){for(var n=[],r=e;r;)n.push(r),t[r],r=t[r];return n.reverse(),n},find_path:function(t,n,r){var o=e.single_source_shortest_paths(t,n,r);return e.extract_shortest_path_from_predecessor_list(o,r)},PriorityQueue:{make:function(t){var n,r=e.PriorityQueue,o={};for(n in t=t||{},r)r.hasOwnProperty(n)&&(o[n]=r[n]);return o.queue=[],o.sorter=t.sorter||r.default_sorter,o},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var n={value:t,cost:e};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=e}(dt);var gt=dt.exports;!function(t){const e=_,n=tt,r=ot,o=ut,i=ht,a=V,s=g,u=gt;function c(t){return unescape(encodeURIComponent(t)).length}function l(t,e,n){const r=[];let o;for(;null!==(o=t.exec(n));)r.push({data:o[0],index:o.index,mode:e,length:o[0].length});return r}function f(t){const n=l(a.NUMERIC,e.NUMERIC,t),r=l(a.ALPHANUMERIC,e.ALPHANUMERIC,t);let o,i;s.isKanjiModeEnabled()?(o=l(a.BYTE,e.BYTE,t),i=l(a.KANJI,e.KANJI,t)):(o=l(a.BYTE_KANJI,e.BYTE,t),i=[]);return n.concat(r,o,i).sort((function(t,e){return t.index-e.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function h(t,a){switch(a){case e.NUMERIC:return n.getBitsLength(t);case e.ALPHANUMERIC:return r.getBitsLength(t);case e.KANJI:return i.getBitsLength(t);case e.BYTE:return o.getBitsLength(t)}}function d(t,a){let u;const c=e.getBestModeForData(t);if(u=e.from(a,c),u!==e.BYTE&&u.bit<c.bit)throw new Error('"'+t+'" cannot be encoded with mode '+e.toString(u)+".\n Suggested mode is: "+e.toString(c));switch(u!==e.KANJI||s.isKanjiModeEnabled()||(u=e.BYTE),u){case e.NUMERIC:return new n(t);case e.ALPHANUMERIC:return new r(t);case e.KANJI:return new i(t);case e.BYTE:return new o(t)}}t.fromArray=function(t){return t.reduce((function(t,e){return"string"==typeof e?t.push(d(e,null)):e.data&&t.push(d(e.data,e.mode)),t}),[])},t.fromString=function(n,r){const o=function(t){const n=[];for(let r=0;r<t.length;r++){const o=t[r];switch(o.mode){case e.NUMERIC:n.push([o,{data:o.data,mode:e.ALPHANUMERIC,length:o.length},{data:o.data,mode:e.BYTE,length:o.length}]);break;case e.ALPHANUMERIC:n.push([o,{data:o.data,mode:e.BYTE,length:o.length}]);break;case e.KANJI:n.push([o,{data:o.data,mode:e.BYTE,length:c(o.data)}]);break;case e.BYTE:n.push([{data:o.data,mode:e.BYTE,length:c(o.data)}])}}return n}(f(n,s.isKanjiModeEnabled())),i=function(t,n){const r={},o={start:{}};let i=["start"];for(let a=0;a<t.length;a++){const s=t[a],u=[];for(let t=0;t<s.length;t++){const c=s[t],l=""+a+t;u.push(l),r[l]={node:c,lastCount:0},o[l]={};for(let t=0;t<i.length;t++){const a=i[t];r[a]&&r[a].node.mode===c.mode?(o[a][l]=h(r[a].lastCount+c.length,c.mode)-h(r[a].lastCount,c.mode),r[a].lastCount+=c.length):(r[a]&&(r[a].lastCount=c.length),o[a][l]=h(c.length,c.mode)+4+e.getCharCountIndicator(c.mode,n))}}i=u}for(let t=0;t<i.length;t++)o[i[t]].end=0;return{map:o,table:r}}(o,r),a=u.find_path(i.map,"start","end"),l=[];for(let t=1;t<a.length-1;t++)l.push(i.table[a[t]].node);return t.fromArray(function(t){return t.reduce((function(t,e){const n=t.length-1>=0?t[t.length-1]:null;return n&&n.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)}),[])}(l))},t.rawSplit=function(e){return t.fromArray(f(e,s.isKanjiModeEnabled()))}}($);const wt=g,pt=A,Ft=E,At=y,mt=C,Et=v,Bt=N,yt=b,Ct=K,vt=k,It=j,Nt=_,bt=$;function Mt(t,e,n){const r=t.size,o=It.getEncodedBits(e,n);let i,a;for(i=0;i<15;i++)a=1==(o>>i&1),i<6?t.set(i,8,a,!0):i<8?t.set(i+1,8,a,!0):t.set(r-15+i,8,a,!0),i<8?t.set(8,r-i-1,a,!0):i<9?t.set(8,15-i-1+1,a,!0):t.set(8,15-i-1,a,!0);t.set(r-8,8,1,!0)}function Rt(t,e,n){const r=new Ft;n.forEach((function(e){r.put(e.mode.bit,4),r.put(e.getLength(),Nt.getCharCountIndicator(e.mode,t)),e.write(r)}));const o=8*(wt.getSymbolTotalCodewords(t)-yt.getTotalCodewordsCount(t,e));for(r.getLengthInBits()+4<=o&&r.put(0,4);r.getLengthInBits()%8!=0;)r.putBit(0);const i=(o-r.getLengthInBits())/8;for(let t=0;t<i;t++)r.put(t%2?17:236,8);return function(t,e,n){const r=wt.getSymbolTotalCodewords(e),o=yt.getTotalCodewordsCount(e,n),i=r-o,a=yt.getBlocksCount(e,n),s=r%a,u=a-s,c=Math.floor(r/a),l=Math.floor(i/a),f=l+1,h=c-l,d=new Ct(h);let g=0;const w=new Array(a),p=new Array(a);let F=0;const A=new Uint8Array(t.buffer);for(let t=0;t<a;t++){const e=t<u?l:f;w[t]=A.slice(g,g+e),p[t]=d.encode(w[t]),g+=e,F=Math.max(F,e)}const m=new Uint8Array(r);let E,B,y=0;for(E=0;E<F;E++)for(B=0;B<a;B++)E<w[B].length&&(m[y++]=w[B][E]);for(E=0;E<h;E++)for(B=0;B<a;B++)m[y++]=p[B][E];return m}(r,t,e)}function Tt(t,e,n,r){let o;if(Array.isArray(t))o=bt.fromArray(t);else{if("string"!=typeof t)throw new Error("Invalid data");{let r=e;if(!r){const e=bt.rawSplit(t);r=vt.getBestVersionForData(e,n)}o=bt.fromString(t,r||40)}}const i=vt.getBestVersionForData(o,n);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<i)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+i+".\n")}else e=i;const a=Rt(e,n,o),s=wt.getSymbolSize(e),u=new At(s);return function(t,e){const n=t.size,r=Et.getPositions(e);for(let e=0;e<r.length;e++){const o=r[e][0],i=r[e][1];for(let e=-1;e<=7;e++)if(!(o+e<=-1||n<=o+e))for(let r=-1;r<=7;r++)i+r<=-1||n<=i+r||(e>=0&&e<=6&&(0===r||6===r)||r>=0&&r<=6&&(0===e||6===e)||e>=2&&e<=4&&r>=2&&r<=4?t.set(o+e,i+r,!0,!0):t.set(o+e,i+r,!1,!0))}}(u,e),function(t){const e=t.size;for(let n=8;n<e-8;n++){const e=n%2==0;t.set(n,6,e,!0),t.set(6,n,e,!0)}}(u),function(t,e){const n=mt.getPositions(e);for(let e=0;e<n.length;e++){const r=n[e][0],o=n[e][1];for(let e=-2;e<=2;e++)for(let n=-2;n<=2;n++)-2===e||2===e||-2===n||2===n||0===e&&0===n?t.set(r+e,o+n,!0,!0):t.set(r+e,o+n,!1,!0)}}(u,e),Mt(u,n,0),e>=7&&function(t,e){const n=t.size,r=vt.getEncodedBits(e);let o,i,a;for(let e=0;e<18;e++)o=Math.floor(e/3),i=e%3+n-8-3,a=1==(r>>e&1),t.set(o,i,a,!0),t.set(i,o,a,!0)}(u,e),function(t,e){const n=t.size;let r=-1,o=n-1,i=7,a=0;for(let s=n-1;s>0;s-=2)for(6===s&&s--;;){for(let n=0;n<2;n++)if(!t.isReserved(o,s-n)){let r=!1;a<e.length&&(r=1==(e[a]>>>i&1)),t.set(o,s-n,r),i--,-1===i&&(a++,i=7)}if(o+=r,o<0||n<=o){o-=r,r=-r;break}}}(u,a),isNaN(r)&&(r=Bt.getBestMask(u,Mt.bind(null,u,n))),Bt.applyMask(r,u),Mt(u,n,r),{modules:u,version:e,errorCorrectionLevel:n,maskPattern:r,segments:o}}d.create=function(t,e){if(void 0===t||""===t)throw new Error("No input text");let n,r,o=pt.M;return void 0!==e&&(o=pt.from(e.errorCorrectionLevel,pt.M),n=vt.from(e.version),r=Bt.from(e.maskPattern),e.toSJISFunc&&wt.setToSJISFunction(e.toSJISFunc)),Tt(t,n,o,r)};var Ut={},Lt={};!function(t){function e(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw new Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map((function(t){return[t,t]})))),6===e.length&&e.push("F","F");const n=parseInt(e.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:255&n,hex:"#"+e.slice(0,6).join("")}}t.getOptions=function(t){t||(t={}),t.color||(t.color={});const n=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,r=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:r,scale:r?4:o,margin:n,color:{dark:e(t.color.dark||"#000000ff"),light:e(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},t.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},t.getImageWidth=function(e,n){const r=t.getScale(e,n);return Math.floor((e+2*n.margin)*r)},t.qrToImageData=function(e,n,r){const o=n.modules.size,i=n.modules.data,a=t.getScale(o,r),s=Math.floor((o+2*r.margin)*a),u=r.margin*a,c=[r.color.light,r.color.dark];for(let t=0;t<s;t++)for(let n=0;n<s;n++){let l=4*(t*s+n),f=r.color.light;if(t>=u&&n>=u&&t<s-u&&n<s-u){f=c[i[Math.floor((t-u)/a)*o+Math.floor((n-u)/a)]?1:0]}e[l++]=f.r,e[l++]=f.g,e[l++]=f.b,e[l]=f.a}}}(Lt),function(t){const e=Lt;t.render=function(t,n,r){let o=r,i=n;void 0!==o||n&&n.getContext||(o=n,n=void 0),n||(i=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),o=e.getOptions(o);const a=e.getImageWidth(t.modules.size,o),s=i.getContext("2d"),u=s.createImageData(a,a);return e.qrToImageData(u.data,t,o),function(t,e,n){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=n,e.width=n,e.style.height=n+"px",e.style.width=n+"px"}(s,i,a),s.putImageData(u,0,0),i},t.renderToDataURL=function(e,n,r){let o=r;void 0!==o||n&&n.getContext||(o=n,n=void 0),o||(o={});const i=t.render(e,n,o),a=o.type||"image/png",s=o.rendererOpts||{};return i.toDataURL(a,s.quality)}}(Ut);var Pt={};const St=Lt;function xt(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function Dt(t,e,n){let r=t+e;return void 0!==n&&(r+=" "+n),r}Pt.render=function(t,e,n){const r=St.getOptions(e),o=t.modules.size,i=t.modules.data,a=o+2*r.margin,s=r.color.light.a?"<path "+xt(r.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",u="<path "+xt(r.color.dark,"stroke")+' d="'+function(t,e,n){let r="",o=0,i=!1,a=0;for(let s=0;s<t.length;s++){const u=Math.floor(s%e),c=Math.floor(s/e);u||i||(i=!0),t[s]?(a++,s>0&&u>0&&t[s-1]||(r+=i?Dt("M",u+n,.5+c+n):Dt("m",o,0),o=0,i=!1),u+1<e&&t[s+1]||(r+=Dt("h",a),a=0)):o++}return r}(i,o,r.margin)+'"/>',c='viewBox="0 0 '+a+" "+a+'"',l='<svg xmlns="http://www.w3.org/2000/svg" '+(r.width?'width="'+r.width+'" height="'+r.width+'" ':"")+c+' shape-rendering="crispEdges">'+s+u+"</svg>\n";return"function"==typeof n&&n(null,l),l};const Kt=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then},kt=d,_t=Ut,Ht=Pt;function Vt(t,e,n,r,o){const i=[].slice.call(arguments,1),a=i.length,s="function"==typeof i[a-1];if(!s&&!Kt())throw new Error("Callback required as last argument");if(!s){if(a<1)throw new Error("Too few arguments provided");return 1===a?(n=e,e=r=void 0):2!==a||e.getContext||(r=n,n=e,e=void 0),new Promise((function(o,i){try{const i=kt.create(n,r);o(t(i,e,r))}catch(t){i(t)}}))}if(a<2)throw new Error("Too few arguments provided");2===a?(o=n,n=e,e=r=void 0):3===a&&(e.getContext&&void 0===o?(o=r,r=void 0):(o=r,r=n,n=e,e=void 0));try{const i=kt.create(n,r);o(null,t(i,e,r))}catch(t){o(t)}}h.create=kt.create,h.toCanvas=Vt.bind(null,_t.render),h.toDataURL=Vt.bind(null,_t.renderToDataURL),h.toString=Vt.bind(null,(function(t,e,n){return Ht.render(t,n)}));const zt=f,Gt=h,Ot=t=>t?.replace("Order Number:","").replace(/(?:\r\n|\r|\n)/g,"").trim()??"",Yt=async t=>{const{name:e,iban:n,bic:r,showDetails:o}=t,i=zt({name:e,iban:n,bic:r,amount:amount,information:orderId}),a=document.querySelector("#iban-qr");if("img"===a.tagName)a.src=await Gt.toDataURL(i);else{const t=document.createElement("div");t.id="iban-qr-container",t.style.display="flex",t.style.alignItems="flex-start",t.style.gap="1.5em",t.style.flexWrap="wrap";const r=document.createElement("img");if(r.src=await r.toDataURL(i),t.appendChild(r),o){const r=document.createElement("p");r.innerHTML=`\n  Naam: \n  <b>${e}</b>\n  <br />\n  IBAN:\n  <b>${n}</b>\n  <br />\n  Bedrag:\n  <b>€${amount.toFixed(2)}</b>\n  <br />\n  Omschrijving:\n  <b>${orderId}</b>\n`,t.appendChild(r)}a.appendChild(t)}};(async(t="",e=0)=>{try{if(!t)throw new Error("No orderId provided");if(e<=0)throw new Error("Amount must be greater than 0");const n=window.IBAN_QR_CONFIG;if(!n)return void alert("[IBAN_QR] no config provided.");if(!n.id)throw new Error("No id provided in config");let r=`id=${n.id}&`;Array.isArray(n.id)&&(r=n.id.map((t=>"id="+t)).join("&"));const o=await fetch("https://metorikclone.vercel.app/api/callback/iban/getIban?"+r),i=await o.json();if(!o.ok)return;if(Array.isArray(i)){const t=Math.floor(Math.random()*i.length);return void await Yt(i[t])}await Yt(i)}catch(n){console.error("[IBAN_QR]",n.message,"\n\n","orderId:",t,"\n\n","amount:",e)}})((()=>{let t="";if(!t){const e=document.querySelector("#easycheckout-orderid");e&&(t=e.textContent??"")}if(!t){const e=Array.from(document.getElementsByClassName("woocommerce-order-overview__order order"));e.length&&(t=e[0].textContent??"")}if(!t){const e=Array.from(document.getElementsByClassName("woocommerce-order-details__order-order"));e.length&&(t=e[0].textContent??"")}return Ot(t)})(),(()=>{let t="";if(!t){const e=document.querySelector("#easycheckout-total");e&&(t=e.textContent??"")}if(!t){const e=Array.from(document.getElementsByClassName("woocommerce-Price-amount amount"));e.length&&(t=e[0].textContent??"")}return parseFloat(Ot((t=>{const e=t?.match(/[\d,.]+/)?.filter((t=>t.trim()))??[];return e?.[0]??"0"})(t)))})());export{n as default};
