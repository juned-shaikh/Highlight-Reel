"use strict";(self.webpackChunkonebrush_app=self.webpackChunkonebrush_app||[]).push([[43],{5043:(B,h,a)=>{a.r(h),a.d(h,{PhotosModule:()=>I});var p=a(4655),d=a(8583),r=a(3679),m=a(3731),l=a(2789),t=a(7716),g=a(9344),u=a(990),f=a(8603),Z=a(8295),T=a(9983),C=a(6627),v=a(3738),P=a(1095);function A(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"#"),t.qZA())}function x(e,n){if(1&e&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&e){const o=n.index;t.oxw();const i=t.MAs(44);t.xp6(1),t.hij(" ",o+1+i.pageIndex*i.pageSize," ")}}function _(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Tittle"),t.qZA())}function y(e,n){if(1&e&&(t.TgZ(0,"td",40),t.TgZ(1,"div",41),t.TgZ(2,"div",42),t._uU(3),t.qZA(),t.qZA(),t.qZA()),2&e){const o=n.$implicit;t.xp6(3),t.hij("",o.title," ")}}function b(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Photo"),t.qZA())}function M(e,n){if(1&e&&(t.TgZ(0,"td",40),t.TgZ(1,"div",41),t._UZ(2,"img",43),t.qZA(),t.qZA()),2&e){const o=n.$implicit;t.xp6(2),t.Q6J("src",o.path,t.LSH)}}function D(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Date"),t.qZA())}function q(e,n){if(1&e&&(t.TgZ(0,"td",40),t.TgZ(1,"div",41),t.TgZ(2,"div",42),t._uU(3),t.ALo(4,"date"),t.qZA(),t.qZA(),t.qZA()),2&e){const o=n.$implicit;t.xp6(3),t.hij("",t.xi3(4,1,o.createdAt,"d MMM y")," ")}}function S(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"View"),t.qZA())}function O(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"td",40),t.TgZ(1,"div",41),t.TgZ(2,"div",42),t.TgZ(3,"span",44),t.NdJ("click",function(){const c=t.CHM(o).$implicit;return t.oxw().view(c._id)}),t.TgZ(4,"mat-icon"),t._uU(5,"remove_red_eye"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}}function w(e,n){1&e&&(t.TgZ(0,"th",39),t._uU(1,"Delete"),t.qZA())}function N(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"td",40),t.TgZ(1,"div",41),t.TgZ(2,"div",42),t.TgZ(3,"span",44),t.NdJ("click",function(){const c=t.CHM(o).$implicit;return t.oxw().openPopup(c._id)}),t.TgZ(4,"mat-icon",45),t._uU(5,"delete"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}}function U(e,n){1&e&&t._UZ(0,"tr",46)}function k(e,n){1&e&&t._UZ(0,"tr",47)}function z(e,n){1&e&&(t.TgZ(0,"div",48),t._uU(1,"No Data Available "),t.qZA())}const J=function(){return[10,25,50]},Y=function(e){return{display:e}},Q=[{path:"",component:(()=>{class e{constructor(o,i,s,c){this.toastr=o,this.router=i,this.threeDService=s,this.authService=c,this.displayedColumns=["sNo","updationDate","firstname","gif","view","action"],this.userData=[],this.dataSource=new l.by(this.userData),this.displayStyle="none",this.noOfRecors=0,this.selection=0}ngOnInit(){this.selection={page:0,size:10,search:""};let o=sessionStorage.getItem("selection");o=JSON.parse(o),o&&(this.selection.page=o.page,this.selection.size=o.size,this.selection.search=o.search,this.paginator.pageIndex=o.page,this.paginator.pageSize=o.size,sessionStorage.removeItem("selection")),this.getAllGif()}getAllGif(){this.userData=[],this.threeDService.show(),this.authService.getAllGif("photos").subscribe(o=>{this.threeDService.hide(),"Data fetched successfully"==o.message?(this.userData=o.data,this.noOfRecors=o.totalUser):this.toastr.error(o.message)},o=>{this.threeDService.hide(),this.toastr.error("Technical Issue."),console.log(o)})}getPaginatorData(o){this.selection.size=o.pageSize,this.selection.page=o.pageIndex,sessionStorage.setItem("selection",JSON.stringify(this.selection)),this.getAllGif()}updateFilter(){this.selection.page=0,this.paginator.firstPage(),this.getAllGif()}onDelete(){this.id=this.ID,this.threeDService.show(),this.authService.deleteTransition(this.id).subscribe(o=>{this.threeDService.hide(),1==o.success&&(this.toastr.success(o.message),this.getAllGif(),this.closePopup())},o=>{this.threeDService.hide(),console.log(o)})}openPopup(o){this.ID=o,this.displayStyle="block"}closePopup(){this.displayStyle="none"}add(){this.router.navigate(["admin/photo/add-photo"])}view(o){this.router.navigate(["admin/photo/view-photo"],{queryParams:{id:o}})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(g._W),t.Y36(p.F0),t.Y36(u.x),t.Y36(f.e))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-photos"]],viewQuery:function(o,i){if(1&o&&t.Gf(m.NW,7),2&o){let s;t.iGM(s=t.CRH())&&(i.paginator=s.first)}},decls:56,vars:12,consts:[[1,"pt-2","pb-2",2,"align-items","baseline"],[1,"main-title"],[1,"title-src"],[1,"col-sm-9"],["floatLabel","never",1,"full-wid","search-wid","own-clas","set-search-box-matField"],[1,"srch"],["matInput","","placeholder","Search",1,"search_input",3,"ngModel","ngModelChange","change"],["role","img","aria-hidden","true",1,"edit-color","search-icon","mat-icon","notranslate","ng-tns-c31-16","material-icons","mat-icon-no-color",2,"cursor","pointer",3,"click"],[1,"col-sm-3"],[1,"d-flex","src"],[1,"col-sm-6"],[1,"btn","btn-primary","float-right",3,"click"],[1,"user-manage-list"],[1,"footer-adjust"],[1,"table-responsive"],[1,"table-height"],["mat-table","",1,"full-wid",3,"dataSource"],["matColumnDef","sNo"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","firstname"],["matColumnDef","gif"],["matColumnDef","updationDate"],["matColumnDef","view"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["fxLayout","row","fxLayoutAlign","center center","class","no-data-available",4,"ngIf"],[1,"pagination"],[3,"length","pageSize","pageSizeOptions","page"],["paginator",""],["tabindex","-1","role","dialog",1,"modal",3,"ngStyle"],["role","document",1,"modal-dialog","modal-dialog-scrollable","custom-lg"],[1,"modal-content","p-3"],[1,"modal-header"],[1,"modal-title"],[1,"footbtn"],["mat-raised-button","","type","button",1,"btn-dark",3,"click"],["type","button","mat-raised-button","","color","warn",3,"click"],["mat-header-cell",""],["mat-cell",""],["fxLayoutAlign","start center"],[1,"make-ellipse"],["width","100px","height","100px",3,"src"],["matTooltip","View","mat-button","","title","View Profile","matTooltip","View",1,"view-btn",3,"click"],[1,"light"],["mat-header-row",""],["mat-row",""],["fxLayout","row","fxLayoutAlign","center center",1,"no-data-available"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"h3",1),t._uU(2,"Photo "),t.qZA(),t.qZA(),t.TgZ(3,"div",0),t.TgZ(4,"div",2),t.TgZ(5,"div",3),t.TgZ(6,"mat-form-field",4),t.TgZ(7,"div",5),t.TgZ(8,"input",6),t.NdJ("ngModelChange",function(c){return i.selection.search=c})("change",function(){return i.updateFilter()}),t.qZA(),t.TgZ(9,"mat-icon",7),t.NdJ("click",function(){return i.updateFilter()}),t._uU(10,"search "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"div",8),t.TgZ(12,"div",9),t.TgZ(13,"div",10),t.TgZ(14,"a",11),t.NdJ("click",function(){return i.add()}),t._uU(15,"Add Photo"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",12),t.TgZ(17,"mat-card",13),t.TgZ(18,"div",14),t.TgZ(19,"div",15),t.TgZ(20,"table",16),t.ynx(21,17),t.YNc(22,A,2,0,"th",18),t.YNc(23,x,2,1,"td",19),t.BQk(),t.ynx(24,20),t.YNc(25,_,2,0,"th",18),t.YNc(26,y,4,1,"td",19),t.BQk(),t.ynx(27,21),t.YNc(28,b,2,0,"th",18),t.YNc(29,M,3,1,"td",19),t.BQk(),t.ynx(30,22),t.YNc(31,D,2,0,"th",18),t.YNc(32,q,5,4,"td",19),t.BQk(),t.ynx(33,23),t.YNc(34,S,2,0,"th",18),t.YNc(35,O,6,0,"td",19),t.BQk(),t.ynx(36,24),t.YNc(37,w,2,0,"th",18),t.YNc(38,N,6,0,"td",19),t.BQk(),t.YNc(39,U,1,0,"tr",25),t.YNc(40,k,1,0,"tr",26),t.qZA(),t.qZA(),t.YNc(41,z,2,0,"div",27),t.TgZ(42,"div",28),t.TgZ(43,"mat-paginator",29,30),t.NdJ("page",function(c){return i.getPaginatorData(c)}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(45,"div",31),t.TgZ(46,"div",32),t.TgZ(47,"div",33),t.TgZ(48,"div",34),t.TgZ(49,"h3",35),t._uU(50,"Do you really want to delete this User?"),t.qZA(),t.qZA(),t.TgZ(51,"div",36),t.TgZ(52,"button",37),t.NdJ("click",function(){return i.closePopup()}),t._uU(53,"Back"),t.qZA(),t.TgZ(54,"button",38),t.NdJ("click",function(){return i.onDelete()}),t._uU(55,"Submit"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(8),t.Q6J("ngModel",i.selection.search),t.xp6(12),t.Q6J("dataSource",i.userData),t.xp6(19),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(1),t.Q6J("ngIf",0===i.userData.length),t.xp6(2),t.Q6J("length",i.noOfRecors)("pageSize",i.selection.size)("pageSizeOptions",t.DdM(9,J)),t.xp6(2),t.Q6J("ngStyle",t.VKq(10,Y,i.displayStyle)))},directives:[Z.KE,T.Nt,r.Fj,r.JJ,r.On,C.Hw,v.a8,l.BZ,l.w1,l.fO,l.Dz,l.as,l.nj,d.O5,m.NW,d.PC,P.lW,l.ge,l.ev,l.XQ,l.Gk],pipes:[d.uU],styles:[".pagination[_ngcontent-%COMP%]{float:right;padding-right:4px}table.full-wid.mat-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:bold!important;color:#000;text-transform:capitalize;font-size:14px;letter-spacing:.5px}table.mat-table[_ngcontent-%COMP%]{width:100%}table.mat-table[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background:red!important}.make-ellipse[_ngcontent-%COMP%]{display:flex}.make-ellipse[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;margin-left:5px}.srch[_ngcontent-%COMP%]{display:flex}.src[_ngcontent-%COMP%]{align-items:flex-end;justify-content:end}.title-src[_ngcontent-%COMP%]{display:flex;background:#eee;align-items:center;border-radius:34px 3px 40px;padding:0 20px}tr.mat-header-row[_ngcontent-%COMP%]{background:#eee}span.view-btn[_ngcontent-%COMP%]{cursor:pointer}th.mat-header-cell[_ngcontent-%COMP%]{text-align:left;position:sticky;top:0;background:#eee;z-index:999}.table-height[_ngcontent-%COMP%]{max-height:400px;overflow-y:auto}  .mat-form-field-appearance-outline .mat-form-field-outline{color:#333!important}.main-title[_ngcontent-%COMP%]{margin-bottom:0;font-size:24px;line-height:1.5}.btn-primary[_ngcontent-%COMP%]{background-color:#fce101;border-color:#fce101;color:#000}.custom-lg[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.footbtn[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.modal-header[_ngcontent-%COMP%]{display:flex;flex-shrink:0;align-items:center;justify-content:space-between;padding:1rem;border-bottom:none!important;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.modal-content[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;width:69%!important;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}"]}),e})()},{path:"add-photo",loadChildren:()=>a.e(617).then(a.bind(a,7617)).then(e=>e.AddPhotoModule)},{path:"view-photo",loadChildren:()=>a.e(617).then(a.bind(a,7617)).then(e=>e.AddPhotoModule)}];let I=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[d.ez,p.Bz.forChild(Q),r.u5,r.UX]]}),e})()}}]);