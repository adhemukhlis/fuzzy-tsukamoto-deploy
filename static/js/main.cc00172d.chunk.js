(this["webpackJsonpnew-react-2"]=this["webpackJsonpnew-react-2"]||[]).push([[0],{126:function(a,e,n){a.exports=n.p+"static/media/1.ec079ec4.png"},127:function(a,e,n){a.exports=n.p+"static/media/2.ccbaf07c.png"},128:function(a,e,n){a.exports=n.p+"static/media/3.1259af23.png"},147:function(a,e,n){a.exports=n(307)},307:function(a,e,n){"use strict";n.r(e);var t=n(0),l=n.n(t),r=n(4),i=n.n(r),c=n(122),o=n(123),s=n(124),m=n(142),u=n(125),g=n(143),p=n(312),b=n(315),d=n(317),f=n(313),h=n(314),k=n(316),E=n(126),R=n.n(E),j=n(127),z=n.n(j),v=n(128),I=n.n(v),y=(n(152),n(308),n(309),n(310),function(a,e,n){return(n-a)/(n-e)}),w=function(a,e,n){return(a-e)/(n-e)},N=[],C=[],_=function(a,e,n,t){var l,r=function(a){return a>10||a<1?0:a<7?1:y(a,7,10)}(a),i=function(a){return a<7||a>13?0:a>7&&a<10?w(a,7,10):a>10&&a<13?y(a,10,13):1}(a),c=function(a){return a<10?0:a>13?1:w(a,10,13)}(a),o=function(a){return a>160||a<80?0:a<115?1:y(a,115,160)}(e),s=function(a){return a<115||a>205?0:a>115&&a<160?w(a,115,160):a>160&&a<205?y(a,160,205):1}(e),m=function(a){return a<160?0:a>205?1:w(a,160,205)}(e),u=(l=n)>88||l<84?0:l<86?1:y(l,86,88),g=function(a){return a<86||a>90?0:a>86&&a<88?w(a,86,88):a>88&&a<90?y(a,88,90):1}(n),p=function(a){return a<88?0:a>90?1:w(a,88,90)}(n);console.log("jarak_dekat "+r),console.log("jarak_sedang "+i),console.log("jarak_jauh "+c),console.log("cc_rendah "+o),console.log("cc_sedang "+s),console.log("cc_tinggi "+m),console.log("premium "+u),console.log("pertalite "+g),console.log("pertamax "+p),N[0]=A(r,o,g),N[1]=D(r,s,g),N[2]=x(i,m,p),N[3]=S(c,m,u),N[4]=T(c,s,u),N[5]=O(i,m,p),C[0]=M(N[0]),C[1]=H(N[1]),C[2]=F(N[2]),C[3]=P(N[3]),C[4]=B(N[4]),C[5]=J(N[5]);var b=K();console.log(b),t({alfa:N,z:C,total:b})},A=function(a,e,n){var t=Math.min(a,e,n);return console.log("Rule 1 = jarak_dekat("+a+"), cc_rendah("+e+"), pertalite("+n+"), alfa("+t+")"),t},D=function(a,e,n){var t=Math.min(a,e,n);return console.log("Rule 2 = jarak_dekat("+a+"), cc_sedang("+e+"), pertalite("+n+"), alfa("+t+")"),t},x=function(a,e,n){var t=Math.min(a,e,n);return console.log("Rule 3 = jarak_sedang("+a+"), cc_tinggi("+e+"), pertamax("+n+"), alfa("+t+")"),t},S=function(a,e,n){var t=Math.min(a,e,n);return console.log("Rule 4 = jarak_jauh("+a+"), cc_tinggi("+e+"), premium("+n+"), alfa("+t+")"),t},T=function(a,e,n){var t=Math.min(a,e,n);return console.log("Rule 5 = jarak_jauh("+a+"), cc_sedang("+e+"), premium("+n+"), alfa("+t+")"),t},O=function(a,e,n){var t=Math.min(a,e,n);return console.log("Rule 5 = jarak_sedang("+a+"), cc_tinggi("+e+"), pertamax("+n+"), alfa("+t+")"),t},M=function(a){return console.log("z1 = "+U(a)),U(a)},H=function(a){return console.log("z2 = "+U(a)),U(a)},F=function(a){return console.log("z3 = "+U(a)),U(a)},P=function(a){return console.log("z4 = "+W(a)),W(a)},B=function(a){return console.log("z5 = "+W(a)),W(a)},J=function(a){return console.log("z6 = "+W(a)),W(a)},K=function(){for(var a=0,e=0,n=0;n<N.length;n+=1)a+=N[n]*C[n],e+=N[n];return console.log("zTotal = ",a+" / "+e),a/e},U=function(a){return 15-13*a},W=function(a){return 13*a+2},G=p.a.Option,L=b.a.Search,Y=function(a){function e(){var a,n;Object(o.a)(this,e);for(var t=arguments.length,l=new Array(t),r=0;r<t;r++)l[r]=arguments[r];return(n=Object(m.a)(this,(a=Object(u.a)(e)).call.apply(a,[this].concat(l)))).state={jarak:8,cc:150,jbensin:90,zTotal:"",alfaR1:"",zR1:"",alfaR2:"",zR2:"",alfaR3:"",zR3:"",alfaR4:"",zR4:"",alfaR5:"",zR5:"",alfaR6:"",zR6:""},n.handleChange=function(a){n.setState(Object(c.a)({},a.target.name,a.target.value))},n.handleSetResult=function(a){n.setState({zTotal:a.total,alfaR1:a.alfa[0],zR1:a.z[0],alfaR2:a.alfa[1],zR2:a.z[1],alfaR3:a.alfa[2],zR3:a.z[2],alfaR4:a.alfa[3],zR4:a.z[3],alfaR5:a.alfa[4],zR5:a.z[4],alfaR6:a.alfa[5],zR6:a.z[5]})},n.handleSelectChange=function(a){n.setState({jbensin:a})},n.handleSubmit=function(){var a=n.state,e=a.jarak,t=a.cc,l=a.jbensin;_(e,t,l,n.handleSetResult)},n}return Object(g.a)(e,a),Object(s.a)(e,[{key:"render",value:function(){var a=this.state,e=a.jarak,n=a.cc,t=a.jbensin,r=a.zTotal,i=a.alfaR1,c=a.alfaR2,o=a.alfaR3,s=a.alfaR4,m=a.alfaR5,u=a.alfaR6,g=a.zR1,E=a.zR2,j=a.zR3,v=a.zR4,y=a.zR5,w=a.zR6;return l.a.createElement("div",{style:{padding:"50px"}},l.a.createElement(d.a,{title:"Sistem Pendukung Keputusan Untuk Menentukan Jumlah Bensin Yang Harus Dibeli",layout:"vertical",bordered:!0},l.a.createElement(d.a.Item,{label:"Deskripsi",span:3},l.a.createElement("h2",null,"Kelompok : "),l.a.createElement("b",null,l.a.createElement("ol",null,l.a.createElement("li",null,"(16102059) Muhammad Genta Ari Shandi "),l.a.createElement("li",null,"(16102125) Istiana Adesty "),l.a.createElement("li",null,"(16102158) Fikri Hermawan "),l.a.createElement("li",null,"(16102196) Ian Aprilianto Said "),l.a.createElement("li",null,"(16102204) Mukhlis Adhe Purwanto "))),"Dalam penggunaan sepeda motor bensin merupakan bagian penting dalam penggunaannya. Bensin adalah bahan bakar yang umum digunakan pada kendaraan bermotor yang memiliki banyak jenis dalam setiap merknya. Untuk jenis bensin pada sistem ini menggunakan jenis bensin premium, pertalite dan pertamax. Penggunaan bensin pada setiap motor berbeda beda tergantung pada kapasitas mesin, jarak, dan jenis bensin/bahan bakar. Untuk itu kami melakukan pembuatan sistem ini agar dapat mengetahui jumlah bahan bakar/ bensin yang optimal untuk digunakan pengguna sepeda motor dengan kriteria tertentu."),l.a.createElement(d.a.Item,{label:"Rules",span:3},l.a.createElement(f.a,{gutter:16},l.a.createElement(h.a,{className:"gutter-row",span:8},l.a.createElement(d.a,{layout:"vertical",bordered:!0},l.a.createElement(d.a.Item,{label:"Rule 1",span:3},"IF jarak dekat AND Kapasitas mesin rendah AND jenis bahan bakar pertalite THEN isi bensin sedikit."),l.a.createElement(d.a.Item,{label:"\u03b1-R1"},i),l.a.createElement(d.a.Item,{label:"z-R1"},g))),l.a.createElement(h.a,{className:"gutter-row",span:8},l.a.createElement(d.a,{layout:"vertical",bordered:!0},l.a.createElement(d.a.Item,{label:"Rule 2",span:3},"IF jarak dekat AND kapasitas mesin sedang AND jenis bahan bakar pertalite THEN isi bensin sedikit."),l.a.createElement(d.a.Item,{label:"\u03b1-R2"},c),l.a.createElement(d.a.Item,{label:"z-R2"},E))),l.a.createElement(h.a,{className:"gutter-row",span:8},l.a.createElement(d.a,{layout:"vertical",bordered:!0},l.a.createElement(d.a.Item,{label:"Rule 3",span:3},"IF jarak sedang AND kapasitas mesin tinggi AND jenis bahan bakar pertamax THEN isi bensin sedikit."),l.a.createElement(d.a.Item,{label:"\u03b1-R3"},o),l.a.createElement(d.a.Item,{label:"z-R3"},j)))),l.a.createElement(f.a,{gutter:16,style:{marginTop:20}},l.a.createElement(h.a,{className:"gutter-row",span:8},l.a.createElement(d.a,{layout:"vertical",bordered:!0},l.a.createElement(d.a.Item,{label:"Rule 4",span:3},"IF jarak jauh AND kapasitas mesin tinggi AND jenis bahan bakar premium THEN isi bensin banyak."),l.a.createElement(d.a.Item,{label:"\u03b1-R4"},s),l.a.createElement(d.a.Item,{label:"z-R4"},v))),l.a.createElement(h.a,{className:"gutter-row",span:8},l.a.createElement(d.a,{layout:"vertical",bordered:!0},l.a.createElement(d.a.Item,{label:"Rule 5",span:3},"IF jarak jauh AND kapasitas mesin sedang AND jenis bahan bakar premium THEN isi bensin banyak."),l.a.createElement(d.a.Item,{label:"\u03b1-R5"},m),l.a.createElement(d.a.Item,{label:"z-R5"},y))),l.a.createElement(h.a,{className:"gutter-row",span:8},l.a.createElement(d.a,{layout:"vertical",bordered:!0},l.a.createElement(d.a.Item,{label:"Rule 6",span:3},"IF jarak sedang AND kapasitas mesin tinggi AND jenis bahan bakar pertamax THEN isi bensin banyak."),l.a.createElement(d.a.Item,{label:"\u03b1-R6"},u),l.a.createElement(d.a.Item,{label:"z-R6"},w))))),l.a.createElement(d.a.Item,{label:"Fungsi Keanggotaan",span:3},l.a.createElement(f.a,{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}},l.a.createElement("img",{src:R.a,style:{width:"30vw",marginTop:50}}),l.a.createElement("img",{src:z.a,style:{width:"30vw",marginTop:50}}),l.a.createElement("img",{src:I.a,style:{width:"30vw",marginTop:50}}))),l.a.createElement(d.a.Item,{label:"Input",span:3},l.a.createElement(k.a,{layout:"horizontal"},l.a.createElement(k.a.Item,Object.assign({label:"Jarak (km)"},{labelCol:{span:4},wrapperCol:{span:14}}),l.a.createElement(b.a,{type:"number",value:e,name:"jarak",onChange:this.handleChange,placeholder:"input Jarak (>0)"})),l.a.createElement(k.a.Item,Object.assign({label:"CC Mesin"},{labelCol:{span:4},wrapperCol:{span:14}}),l.a.createElement(b.a,{type:"number",value:n,name:"cc",onChange:this.handleChange,placeholder:"input CC (>80)"})),l.a.createElement(k.a.Item,Object.assign({label:"Jenis Bensin"},{labelCol:{span:4},wrapperCol:{span:14}}),l.a.createElement(p.a,{value:t,style:{width:"100%"},onChange:this.handleSelectChange},l.a.createElement(G,{value:85},"Premium"),l.a.createElement(G,{value:88},"Pertalite"),l.a.createElement(G,{value:90},"Pertamax"))),l.a.createElement(k.a.Item,Object.assign({label:"Hasil (L)"},{labelCol:{span:4},wrapperCol:{span:14}}),l.a.createElement(L,{readOnly:!0,enterButton:"Proses",size:"large",value:r,onSearch:this.handleSubmit}))))))}}]),e}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()}))}},[[147,1,2]]]);
//# sourceMappingURL=main.cc00172d.chunk.js.map