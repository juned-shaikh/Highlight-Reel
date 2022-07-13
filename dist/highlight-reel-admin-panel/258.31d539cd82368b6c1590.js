"use strict";(self.webpackChunkonebrush_app=self.webpackChunkonebrush_app||[]).push([[258],{1258:(q,l,n)=>{n.r(l),n.d(l,{AddGifModule:()=>C});var a=n(4655),f=n(8583),r=n(3679),t=n(7716),m=n(9344),h=n(990),p=n(8603),u=n(1095),g=n(6627),b=n(3738);const v=["inputFile"];function Z(i,s){1&i&&(t.TgZ(0,"span",17),t._uU(1,"Please Enter Title"),t.qZA())}function A(i,s){1&i&&(t.TgZ(0,"span",17),t._uU(1,"Document is required"),t.qZA())}function G(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"button",18),t.NdJ("click",function(){return t.CHM(e),t.oxw().add()}),t._uU(1,"Submit"),t.qZA()}}const T=[{path:"",component:(()=>{class i{constructor(e,o,d,c,x,F){this.fb=e,this.router=o,this.toastr=d,this.route=c,this.threeDService=x,this.authService=F,this.addGifForm=new r.cw({}),this.addGifForm=this.fb.group({title:["",r.kI.required],files:[""]})}ngOnInit(){this.id=this.route.snapshot.queryParamMap.get("id"),this.authService.getTransitionById(this.id).subscribe(e=>{let o=e.data;this.addGifForm.patchValue({title:o.title,files:o.path})})}get f(){return this.addGifForm.controls}add(){this.addGifForm.invalid?this.isError=!0:(this.threeDService.show(),this.authService.addGif(this.addGifForm.value).subscribe(e=>{console.log(e),1==e.success?(this.toastr.success(e.message),this.threeDService.hide(),this.router.navigate(["/admin/gif"])):(this.threeDService.hide(),this.toastr.error(e.message))},e=>{this.threeDService.hide(),this.toastr.error("Error Occured."),console.log(JSON.stringify(e))}))}update(){}onSelectDoc(e){var o=e.target.files[0];o.size>5242880?this.docFile.nativeElement.files=this.unSelectedFile:(this.docUrl="",this.addGifForm.patchValue({files:o}),this.isDoc=!0),console.log("selected Doc",this.addGifForm.value)}goBack(){this.router.navigate(["admin/gif"])}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(r.qu),t.Y36(a.F0),t.Y36(m._W),t.Y36(a.gz),t.Y36(h.x),t.Y36(p.e))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-add-gif"]],viewQuery:function(e,o){if(1&e&&t.Gf(v,7),2&e){let d;t.iGM(d=t.CRH())&&(o.docFile=d.first)}},decls:29,vars:4,consts:[[1,"mat-new"],[1,"card-heading"],["mat-icon-button","",3,"click"],[1,"sub-menu1"],[1,"top-br"],[3,"formGroup"],[1,"row"],[1,"form-group","col-md-12"],["for","position"],[1,"required"],["id","title","type","text","maxlength","100","formControlName","title","placeholder","Title",1,"form-control"],["class","validation_msg",4,"ngIf"],[1,"form-group"],[1,"form-label"],["type","file","accept",".gif","id","image",3,"change"],["inputFile",""],["mat-raised-button","","class","mat-btn",3,"click",4,"ngIf"],[1,"validation_msg"],["mat-raised-button","",1,"mat-btn",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"h4",1),t.TgZ(2,"button",2),t.NdJ("click",function(){return o.goBack()}),t.TgZ(3,"mat-icon"),t._uU(4,"chevron_left"),t.qZA(),t.qZA(),t._uU(5," GIF"),t.TgZ(6,"span",3),t._uU(7," > Add Gif "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"mat-card"),t.TgZ(9,"div",4),t.TgZ(10,"form",5),t.TgZ(11,"div",6),t.TgZ(12,"div",7),t.TgZ(13,"label",8),t._uU(14,"Title"),t.TgZ(15,"span",9),t._uU(16,"*"),t.qZA(),t.qZA(),t._UZ(17,"input",10),t.YNc(18,Z,2,0,"span",11),t.qZA(),t.qZA(),t.TgZ(19,"div",6),t.TgZ(20,"div",12),t.TgZ(21,"label",13),t._uU(22,"Upload"),t.TgZ(23,"span",9),t._uU(24,"*"),t.qZA(),t.qZA(),t.TgZ(25,"input",14,15),t.NdJ("change",function(c){return o.onSelectDoc(c)}),t.qZA(),t.YNc(27,A,2,0,"span",11),t.qZA(),t.qZA(),t.YNc(28,G,2,0,"button",16),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(10),t.Q6J("formGroup",o.addGifForm),t.xp6(8),t.Q6J("ngIf",o.f.title.errors&&o.f.title.errors.required&&o.isError),t.xp6(9),t.Q6J("ngIf",!o.isDoc&&o.isError),t.xp6(1),t.Q6J("ngIf",!o.id))},directives:[u.lW,g.Hw,b.a8,r._Y,r.JL,r.sg,r.Fj,r.nD,r.JJ,r.u,f.O5],styles:['h4.card-heading[_ngcontent-%COMP%]{font-family:"Roboto",sans-serif;font-size:16px;letter-spacing:.5px;color:#d85b00;background:#fff;border-radius:3px;font-weight:600}.mat-icon-button[_ngcontent-%COMP%]{padding:0;min-width:0;width:40px;height:40px;background-color:#faebd7;flex-shrink:0;line-height:40px;border-radius:0%}.mat-btn[_ngcontent-%COMP%]{background-color:#fce101;border-color:#fce101;color:#000}.mat-btn[_ngcontent-%COMP%]:hover{background-color:#007bff;border-color:#007bff;color:#fff}.form-group[_ngcontent-%COMP%]{margin-bottom:1rem}.required[_ngcontent-%COMP%]{color:red}span.validation_msg[_ngcontent-%COMP%]{color:#fd021b;margin-top:10px;font-size:12px}input#image[_ngcontent-%COMP%]{width:100%;display:block;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;box-shadow:1px 1px 1px #ccc}']}),i})()}];let C=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[f.ez,a.Bz.forChild(T),r.u5,r.UX,u.ot,g.Ps]]}),i})()}}]);