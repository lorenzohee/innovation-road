function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var b=0;b<t.length;b++){var o=t[b];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,b){return t&&_defineProperties(e.prototype,t),b&&_defineProperties(e,b),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{FQ1g:function(e,t,b){"use strict";b.r(t);var o,n,i=b("ofXK"),r=b("tyNb"),c=b("3Pt+"),a=b("fXoL"),d=b("6tuW"),l=b("dNgK"),m=b("dbUT"),f=[{path:"",component:(o=function(){function e(t,b,o,n,i,r){_classCallCheck(this,e),this.fb=t,this.feedBackService=b,this.router=o,this.route=n,this.location=i,this.snackBar=r,this.feedBackForm=this.fb.group({body:["",c.r.required],name:["",c.r.required],email:["",c.r.required],phone:[""],company:[""]})}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"onSubmit",value:function(){var e=this;this.feedBackService.createFeedback(this.feedBackForm.value).subscribe((function(t){e.router.navigated=!1,e.router.navigate([e.router.url]),e.feedBackForm.reset(),e.snackBar.open("\u6d88\u606f\u5df2\u53d1\u51fa\uff0c\u8bf7\u7b49\u5f85\u7ba1\u7406\u5458\u548c\u60a8\u8054\u7cfb","\u5173\u95ed",{duration:5e3})}))}}]),e}(),o.\u0275fac=function(e){return new(e||o)(a.Qb(c.c),a.Qb(d.a),a.Qb(r.c),a.Qb(r.a),a.Qb(i.h),a.Qb(l.a))},o.\u0275cmp=a.Kb({type:o,selectors:[["app-about"]],decls:76,vars:2,consts:[[1,"container"],[1,"contact-section","my-5"],[1,"card","mb-4"],[1,"card-header"],[1,"card-body"],[1,"card"],[1,"row"],[1,"col-lg-8"],[3,"formGroup","ngSubmit"],[1,"card-body","form"],[1,"mt-4"],["fas","","icon","envelope",1,"pr-2"],[1,"col-md-6"],[1,"md-form","mb-0"],["type","text","id","form-contact-name","mdbInput","","formControlName","name",1,"form-control"],["for","form-contact-name",1,""],["type","text","id","form-contact-email","mdbInput","","formControlName","email",1,"form-control"],["for","form-contact-email",1,""],["type","text","id","form-contact-phone","mdbInput","","formControlName","phone",1,"form-control"],["for","form-contact-phone",1,""],["type","text","id","form-contact-company","mdbInput","","formControlName","company",1,"form-control"],["for","form-contact-company",1,""],[1,"col-md-12"],["type","text","id","form-contact-message","rows","3","mdbInput","","formControlName","body",1,"form-control","md-textarea"],["for","form-contact-message"],["type","submit","mdbBtn","","floating","true","size","lg","color","blue","mdbWavesEffect","",2,"float","right","bottom","3rem","position","relative","margin","10px 0","width","60px","height","60px","border-radius","50%","font-size","26px","border","none",3,"disabled"],["far","","icon","paper-plane"],[1,"col-lg-4"],[1,"card-body","contact","text-center","h-100","white-text","bg-pink-200"],[1,"my-4","pb-2"],[1,"text-lg-left","list-unstyled","ml-4"],["fas","","icon","map-marked",1,"pr-2"],["fas","","icon","phone",1,"pr-2"],[1,"hr-light","my-4"],[1,"list-inline","text-center","list-unstyled"],[1,"list-inline-item"],[1,"p-2","fa-lg","tw-ic"],["fab","","icon","twitter"],[1,"p-2","fa-lg","li-ic"],["fab","","icon","linkedin-in"],[1,"p-2","fa-lg","ins-ic"],["fab","","icon","instagram"]],template:function(e,t){1&e&&(a.Wb(0,"div",0),a.Wb(1,"section",1),a.Wb(2,"div",2),a.Wb(3,"div",3),a.Jc(4,"\u5173\u4e8e\u672c\u7ad9"),a.Vb(),a.Wb(5,"div",4),a.Wb(6,"p"),a.Jc(7,"\u521b\u65b0\u9a7f\u8def\u662f\u4e3a\u60a8\u63d0\u4f9b\u6700\u65b0\u521b\u65b0\u65b9\u6cd5\uff0c\u521b\u65b0\u4e8b\u52a1\u7684\u7f51\u7ad9\uff0c\u4e3a\u89e3\u51b3\u4f01\u4e1a\u53ca\u4e2a\u4eba\u7684\u521b\u65b0\u95ee\u9898\u63d0\u4f9b\u601d\u8def\u53ca\u89e3\u51b3\u65b9\u6848\u3002"),a.Vb(),a.Wb(8,"p"),a.Jc(9,"\u5982\u679c\u60a8\u6709\u4ec0\u4e48\u60f3\u6cd5\u6216\u5408\u4f5c\u6b22\u8fce\u548c\u6211\u8054\u7cfb\uff01"),a.Vb(),a.Vb(),a.Vb(),a.Wb(10,"div",5),a.Wb(11,"div",6),a.Wb(12,"div",7),a.Wb(13,"form",8),a.ec("ngSubmit",(function(){return t.onSubmit()})),a.Wb(14,"div",9),a.Wb(15,"h3",10),a.Rb(16,"mdb-icon",11),a.Jc(17,"\u7ed9\u6211\u7559\u8a00: "),a.Vb(),a.Wb(18,"div",6),a.Wb(19,"div",12),a.Wb(20,"div",13),a.Rb(21,"input",14),a.Wb(22,"label",15),a.Jc(23,"\u60a8\u7684\u79f0\u547c"),a.Vb(),a.Vb(),a.Vb(),a.Wb(24,"div",12),a.Wb(25,"div",13),a.Rb(26,"input",16),a.Wb(27,"label",17),a.Jc(28,"\u60a8\u7684\u90ae\u4ef6\u5730\u5740"),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Wb(29,"div",6),a.Wb(30,"div",12),a.Wb(31,"div",13),a.Rb(32,"input",18),a.Wb(33,"label",19),a.Jc(34,"\u60a8\u7684\u8054\u7cfb\u7535\u8bdd"),a.Vb(),a.Vb(),a.Vb(),a.Wb(35,"div",12),a.Wb(36,"div",13),a.Rb(37,"input",20),a.Wb(38,"label",21),a.Jc(39,"\u60a8\u7684\u516c\u53f8\u540d\u79f0"),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Wb(40,"div",6),a.Wb(41,"div",22),a.Wb(42,"div",13),a.Rb(43,"textarea",23),a.Wb(44,"label",24),a.Jc(45,"\u7559\u8a00\u5185\u5bb9"),a.Vb(),a.Wb(46,"button",25),a.Rb(47,"mdb-icon",26),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Wb(48,"div",27),a.Wb(49,"div",28),a.Wb(50,"h3",29),a.Jc(51,"\u8054\u7cfb\u4fe1\u606f"),a.Vb(),a.Wb(52,"ul",30),a.Wb(53,"li"),a.Wb(54,"p"),a.Rb(55,"mdb-icon",31),a.Jc(56,"\u5c71\u4e1c\u9752\u5c9b\uff0cChina "),a.Vb(),a.Vb(),a.Wb(57,"li"),a.Wb(58,"p"),a.Rb(59,"mdb-icon",32),a.Jc(60,"+86 185 6129 8542 "),a.Vb(),a.Vb(),a.Wb(61,"li"),a.Wb(62,"p"),a.Rb(63,"mdb-icon",11),a.Jc(64,"yongqinghee@gmail.com "),a.Vb(),a.Vb(),a.Vb(),a.Rb(65,"hr",33),a.Wb(66,"ul",34),a.Wb(67,"li",35),a.Wb(68,"a",36),a.Rb(69,"mdb-icon",37),a.Vb(),a.Vb(),a.Wb(70,"li",35),a.Wb(71,"a",38),a.Rb(72,"mdb-icon",39),a.Vb(),a.Vb(),a.Wb(73,"li",35),a.Wb(74,"a",40),a.Rb(75,"mdb-icon",41),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb()),2&e&&(a.Bb(13),a.pc("formGroup",t.feedBackForm),a.Bb(33),a.pc("disabled",!t.feedBackForm.valid))},directives:[c.s,c.m,c.g,m.q,m.f,c.b,m.r,c.l,c.e,m.k,m.u,m.e,m.d],styles:[""]}),o)}],s=((n=function e(){_classCallCheck(this,e)}).\u0275mod=a.Ob({type:n}),n.\u0275inj=a.Nb({factory:function(e){return new(e||n)},imports:[[r.f.forChild(f)],r.f]}),n),p=b("PCNd");b.d(t,"AboutModule",(function(){return W}));var u,W=((u=function e(){_classCallCheck(this,e)}).\u0275mod=a.Ob({type:u}),u.\u0275inj=a.Nb({factory:function(e){return new(e||u)},providers:[d.a],imports:[[i.c,s,p.a]]}),u)}}]);