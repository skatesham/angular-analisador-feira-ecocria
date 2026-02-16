import{a as Te,b as Ee,d as Be}from"./chunk-GDJJA5RE.js";import{a as Me,b as Ve}from"./chunk-JFY4N5SI.js";import{b as se,c as de,e as ce}from"./chunk-Y7RZLNKA.js";import"./chunk-HV3JQLQX.js";import{a as be,d as ve,e as Ce,f as ke,h as _e,j as ye}from"./chunk-GLQUB6K5.js";import"./chunk-GYFUPV5S.js";import"./chunk-4O3FVBGX.js";import{a as xe,b as Se}from"./chunk-YU2AHLEH.js";import{e as me,l as fe,m as we}from"./chunk-URCMC7Z2.js";import{Ba as pe,Ea as ue,Ga as k,Ha as he,j as le,m as I,ma as ge,qa as z,ua as D,va as A}from"./chunk-6JC4TW2Y.js";import{$ as p,Ac as ae,Eb as X,Fb as v,Ic as R,Jb as f,Jc as re,Kb as b,Nb as P,Ob as Y,Pa as d,Pb as S,Qb as T,Ua as $,V as Q,W as G,Wb as Z,X as q,Xb as C,Yb as l,Z as W,Zb as O,_b as E,ac as ee,bc as te,cb as _,cc as ie,db as U,dc as M,ea as u,fa as m,fc as ne,g as H,gb as J,hb as K,ib as w,na as F,nc as V,ob as j,oc as B,pb as y,qb as x,qc as oe,sa as N,vb as h,wb as n,xb as o,yb as g}from"./chunk-XGBSE7XG.js";var Ie=`
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
    }

    .p-toggleswitch-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`;var je=["handle"],Pe=["input"],Oe=e=>({checked:e});function Re(e,r){e&1&&X(0)}function ze(e,r){if(e&1&&w(0,Re,1,0,"ng-container",3),e&2){let t=b();h("ngTemplateOutlet",t.handleTemplate||t._handleTemplate)("ngTemplateOutletContext",ne(2,Oe,t.checked()))}}var He=`
    ${Ie}

    p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }
`,Qe={root:{position:"relative"}},Ge={root:({instance:e})=>["p-toggleswitch p-component",{"p-toggleswitch p-component":!0,"p-toggleswitch-checked":e.checked(),"p-disabled":e.$disabled(),"p-invalid":e.invalid()}],input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},De=(()=>{class e extends pe{name="toggleswitch";style=He;classes=Ge;inlineStyles=Qe;static \u0275fac=(()=>{let t;return function(i){return(t||(t=N(e)))(i||e)}})();static \u0275prov=G({token:e,factory:e.\u0275fac})}return e})();var Ae=new W("TOGGLESWITCH_INSTANCE"),qe={provide:be,useExisting:Q(()=>L),multi:!0},L=(()=>{class e extends _e{$pcToggleSwitch=p(Ae,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(k,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;tabindex;inputId;readonly;trueValue=!0;falseValue=!1;ariaLabel;size=ae();ariaLabelledBy;autofocus;onChange=new $;input;handleTemplate;_handleTemplate;focused=!1;_componentStyle=p(De);templates;onHostClick(t){this.onClick(t)}onAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"handle":this._handleTemplate=t.template;break;default:this._handleTemplate=t.template;break}})}onClick(t){!this.$disabled()&&!this.readonly&&(this.writeModelValue(this.checked()?this.falseValue:this.trueValue),this.onModelChange(this.modelValue()),this.onChange.emit({originalEvent:t,checked:this.modelValue()}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}checked(){return this.modelValue()===this.trueValue}writeControlValue(t,a){a(t),this.cd.markForCheck()}static \u0275fac=(()=>{let t;return function(i){return(t||(t=N(e)))(i||e)}})();static \u0275cmp=_({type:e,selectors:[["p-toggleswitch"],["p-toggleSwitch"],["p-toggle-switch"]],contentQueries:function(a,i,c){if(a&1&&(P(c,je,4),P(c,D,4)),a&2){let s;S(s=T())&&(i.handleTemplate=s.first),S(s=T())&&(i.templates=s)}},viewQuery:function(a,i){if(a&1&&Y(Pe,5),a&2){let c;S(c=T())&&(i.input=c.first)}},hostVars:5,hostBindings:function(a,i){a&1&&f("click",function(s){return i.onHostClick(s)}),a&2&&(j("data-pc-name","toggleswitch"),Z(i.sx("root")),C(i.cn(i.cx("root"),i.styleClass)))},inputs:{styleClass:"styleClass",tabindex:[2,"tabindex","tabindex",re],inputId:"inputId",readonly:[2,"readonly","readonly",R],trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",size:[1,"size"],ariaLabelledBy:"ariaLabelledBy",autofocus:[2,"autofocus","autofocus",R]},outputs:{onChange:"onChange"},features:[M([qe,De,{provide:Ae,useExisting:e},{provide:ue,useExisting:e}]),K([k]),J],decls:5,vars:20,consts:[["input",""],["type","checkbox","role","switch",3,"focus","blur","checked","pAutoFocus","pBind"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(a,i){if(a&1){let c=v();n(0,"input",1,0),f("focus",function(){return u(c),m(i.onFocus())})("blur",function(){return u(c),m(i.onBlur())}),o(),n(2,"div",2)(3,"div",2),y(4,ze,1,4,"ng-container"),o()()}a&2&&(C(i.cx("input")),h("checked",i.checked())("pAutoFocus",i.autofocus)("pBind",i.ptm("input")),j("id",i.inputId)("required",i.required()?"":void 0)("disabled",i.$disabled()?"":void 0)("aria-checked",i.checked())("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel)("name",i.name())("tabindex",i.tabindex),d(2),C(i.cx("slider")),h("pBind",i.ptm("slider")),d(),C(i.cx("handle")),h("pBind",i.ptm("handle")),d(),x(i.handleTemplate||i._handleTemplate?4:-1))},dependencies:[I,le,me,A,he,k],encapsulation:2,changeDetection:0})}return e})(),Le=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=U({type:e});static \u0275inj=q({imports:[L,A,A]})}return e})();function $e(e,r){e&1&&(n(0,"div",30)(1,"h2",31),g(2,"i",32),l(3," Apar\xEAncia "),o()())}function Ue(e,r){e&1&&(n(0,"div",30)(1,"h2",31),g(2,"i",33),l(3),V(4,"translate"),o()()),e&2&&(d(3),E(" ",B(4,1,"settings.privacy.title")," "))}function Je(e,r){e&1&&(n(0,"div",30)(1,"h2",31),g(2,"i",34),l(3," Sobre "),o()())}function Ke(e,r){if(e&1){let t=v();n(0,"div",35)(1,"div",36),g(2,"i",37),o(),n(3,"span",38),l(4),o(),n(5,"p",39),l(6),o(),n(7,"div",40)(8,"p-button",41),f("onClick",function(){u(t);let i=b().onReject;return m(i())}),o(),n(9,"p-button",42),f("onClick",function(){u(t);let i=b().onAccept;return m(i())}),o()()()}if(e&2){let t=b().$implicit;d(4),O(t.header),d(2),O(t.message),d(2),h("label",t.rejectLabel||"Cancelar")("outlined",!0),d(),h("label",t.acceptLabel||"Confirmar")("severity",t.acceptButtonStyleClass!=null&&t.acceptButtonStyleClass.includes("danger")?"danger":"primary")}}function Xe(e,r){if(e&1&&y(0,Ke,10,6,"div",35),e&2){let t=r.$implicit;x(t?0:-1)}}var Fe=class e{translate=p(se);confirmationService=p(ge);messageService=p(z);storageService=p(Be);idiomas=[{label:"Portugu\xEAs (BR)",value:"pt-BR"},{label:"English",value:"en"}];idiomaAtual=F(this.translate.currentLang||"pt-BR");darkMode=F(document.documentElement.classList.contains("dark"));alterarIdioma(r){this.idiomaAtual.set(r),this.translate.use(r),localStorage.setItem("locale",r)}toggleDarkMode(){let r=!this.darkMode();this.darkMode.set(r),r?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))}confirmarLimparDados(r){this.confirmationService.confirm({target:r.target,header:"Apagar Todos os Dados",message:"Tem certeza que deseja apagar todos os dados salvos? Esta a\xE7\xE3o n\xE3o pode ser desfeita.",icon:"pi pi-exclamation-triangle",acceptLabel:"Sim, Apagar",rejectLabel:"Cancelar",acceptButtonStyleClass:"p-button-danger",accept:()=>{this.limparTodosDados()}})}limparTodosDados(){return H(this,null,function*(){try{this.storageService.setSessaoPrivada(!1),yield this.storageService.apagarTudo();let r=localStorage.getItem("locale"),t=localStorage.getItem("theme");localStorage.clear(),r&&localStorage.setItem("locale",r),t&&localStorage.setItem("theme",t),this.messageService.add({severity:"success",summary:"Dados Apagados",detail:"Todos os dados foram removidos com sucesso.",life:3e3})}catch(r){console.error("Erro ao apagar dados:",r),this.messageService.add({severity:"error",summary:"Erro",detail:"Erro ao apagar dados. Tente novamente.",life:5e3})}})}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=_({type:e,selectors:[["app-configuracoes"]],features:[M([z])],decls:70,vars:8,consts:[["cd",""],["headless",""],[1,"min-h-screen","bg-surface-50","dark:bg-surface-950","py-8","md:py-12"],[1,"container","mx-auto","px-4","md:px-6"],[1,"max-w-3xl","mx-auto"],[1,"mb-8"],[1,"text-3xl","md:text-4xl","font-bold","text-surface-900","dark:text-surface-0","mb-3"],[1,"text-surface-600","dark:text-surface-300"],[1,"mb-6"],["pTemplate","header"],[1,"space-y-4"],[1,"flex","items-center","justify-between"],[1,"block","text-sm","font-semibold","text-surface-700","dark:text-surface-200","mb-1"],[1,"text-sm","text-surface-500","dark:text-surface-400"],[3,"ngModelChange","onChange","ngModel"],[1,"p-4","bg-emerald-500/10","rounded-lg","border","border-emerald-500/20"],[1,"font-semibold","text-surface-900","dark:text-surface-0","mb-2","flex","items-center","gap-2"],[1,"pi","pi-check-circle","text-emerald-500"],[1,"text-sm","text-surface-700","dark:text-surface-200","mb-3"],[1,"space-y-2","text-sm","text-surface-600","dark:text-surface-300"],[1,"flex","items-center","gap-2"],[1,"pi","pi-check","text-emerald-500"],[1,"p-4","bg-sky-500/10","rounded-lg","border","border-sky-500/20"],[1,"pi","pi-info-circle","text-sky-500"],[1,"text-sm","text-surface-700","dark:text-surface-200"],[1,"mt-4"],["label","Apagar Todos os Dados","icon","pi pi-trash","severity","danger","styleClass","w-full",3,"onClick","outlined"],[1,"space-y-3","text-sm","text-surface-600","dark:text-surface-300"],[1,"flex","justify-between"],[1,"font-semibold"],[1,"p-4","border-b","border-surface-200","dark:border-surface-700"],[1,"text-xl","font-bold","text-surface-900","dark:text-surface-0","flex","items-center","gap-2"],[1,"pi","pi-palette"],[1,"pi","pi-shield"],[1,"pi","pi-info"],[1,"flex","flex-col","items-center","p-8","bg-surface-0","dark:bg-surface-900","rounded-2xl"],[1,"rounded-full","bg-primary","text-primary-contrast","inline-flex","justify-center","items-center","h-20","w-20","-mt-18"],[1,"pi","pi-exclamation-triangle","!text-4xl"],[1,"font-bold","text-2xl","block","mb-2","mt-6","text-surface-900","dark:text-surface-0"],[1,"text-muted-color","text-center","mb-0"],[1,"flex","items-center","gap-3","mt-6"],["severity","secondary","styleClass","w-32",3,"onClick","label","outlined"],["styleClass","w-32",3,"onClick","label","severity"]],template:function(t,a){if(t&1){let i=v();n(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"h1",6),l(5," Configura\xE7\xF5es "),o(),n(6,"p",7),l(7," Personalize sua experi\xEAncia "),o()(),n(8,"p-card",8),w(9,$e,4,0,"ng-template",9),n(10,"div",10)(11,"div",11)(12,"div")(13,"label",12),l(14," Modo Escuro "),o(),n(15,"p",13),l(16," Ativar tema escuro para reduzir o brilho da tela "),o()(),n(17,"p-toggleswitch",14),ie("ngModelChange",function(s){return u(i),te(a.darkMode,s)||(a.darkMode=s),m(s)}),f("onChange",function(){return u(i),m(a.toggleDarkMode())}),o()()()(),n(18,"p-card",8),w(19,Ue,5,3,"ng-template",9),n(20,"div",10)(21,"div",15)(22,"h3",16),g(23,"i",17),l(24," 100% Local "),o(),n(25,"p",18),l(26," Todos os seus dados s\xE3o processados localmente no seu navegador. Nenhuma informa\xE7\xE3o \xE9 enviada para servidores externos. "),o(),n(27,"ul",19)(28,"li",20),g(29,"i",21),l(30," Sem rastreamento "),o(),n(31,"li",20),g(32,"i",21),l(33," Sem cookies de terceiros "),o(),n(34,"li",20),g(35,"i",21),l(36," Dados ficam no seu dispositivo "),o()()(),n(37,"div",22)(38,"h3",16),g(39,"i",23),l(40),V(41,"translate"),o(),n(42,"p",24),l(43),V(44,"translate"),o()(),n(45,"div",25)(46,"p-button",26),f("onClick",function(s){return u(i),m(a.confirmarLimparDados(s))}),o()()()(),n(47,"p-card"),w(48,Je,4,0,"ng-template",9),n(49,"div",27)(50,"div",28)(51,"span",29),l(52,"Vers\xE3o:"),o(),n(53,"span"),l(54,"1.0.0"),o()(),n(55,"div",28)(56,"span",29),l(57,"Tecnologias:"),o(),n(58,"span"),l(59,"Angular 20 + PrimeNG 20"),o()(),n(60,"div",28)(61,"span",29),l(62,"Licen\xE7a:"),o(),n(63,"span"),l(64,"MIT"),o()()()()()()(),n(65,"p-confirmdialog",null,0),w(67,Xe,1,1,"ng-template",null,1,oe),o(),g(69,"p-toast")}t&2&&(d(17),ee("ngModel",a.darkMode),d(23),E(" ",B(41,4,"settings.privacy.sessionTitle")," "),d(3),E(" ",B(44,6,"settings.privacy.sessionDescription")," "),d(3),h("outlined",!0))},dependencies:[I,ke,ve,Ce,Se,xe,D,we,fe,ye,Le,L,Ee,Te,Ve,Me,ce,de],styles:["[_nghost-%COMP%]{--dark: #333;--light: #fff}.dark[_nghost-%COMP%]{background-color:var(--dark);color:var(--light)}.light[_nghost-%COMP%]{background-color:var(--light);color:var(--dark)}"]})};export{Fe as ConfiguracoesComponent};
