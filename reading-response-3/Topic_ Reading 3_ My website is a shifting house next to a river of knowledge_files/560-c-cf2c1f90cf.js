(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[560],{"2BSC":function(e,r,t){"use strict"
var n=t("FIFq")
var a=t.n(n)
var i=t("fQ4S")
var s=t("ouhR")
var o=t.n(s)
var u=t("GLiE")
var d=t.n(u)
var l=t("pQTu")
var c=t("m0r6")
Object(c["a"])(JSON.parse('{"ar":{"errors":{"blank":"مطلوب","required":"مطلوب","unsaved_changes":"توجد تغييرات لم يتم حفظها."}},"cy":{"errors":{"blank":"Gofynnol","required":"Gofynnol","unsaved_changes":"Mae gennych chi newidiadau heb eu cadw."}},"da":{"errors":{"blank":"Påkrævet","required":"Påkrævet","unsaved_changes":"Du har ændringer, der ikke er gemt."}},"da-x-k12":{"errors":{"blank":"Påkrævet","required":"Påkrævet","unsaved_changes":"Du har ændringer, der ikke er gemt."}},"de":{"errors":{"blank":"Erforderlich","required":"Erforderlich","unsaved_changes":"Sie haben nicht gespeicherte Änderungen."}},"el":{"errors":{"blank":"Απαιτούμενο","required":"Απαιτούμενο","unsaved_changes":"Έχετε αλλαγές που δεν έχουν αποθηκευτεί"}},"en-AU":{"errors":{"blank":"Required","required":"Required","unsaved_changes":"You have unsaved changes."}},"en-CA":{"errors":{"blank":"Required","required":"Required","unsaved_changes":"You have unsaved changes."}},"en-GB":{"errors":{"blank":"Required","required":"Required","unsaved_changes":"You have unsaved changes."}},"es":{"errors":{"blank":"Obligatorio","required":"Obligatorio","unsaved_changes":"Tiene cambios sin guardar."}},"fa":{"errors":{"blank":"لازم","required":"لازم","unsaved_changes":"ذخیره سازی تغییرات را لغو کرده اید."}},"fi":{"errors":{"blank":"Pakollinen","required":"Pakollinen","unsaved_changes":"Tallentamattomia muutoksia ei ole."}},"fr":{"errors":{"blank":"Requis","required":"Requis","unsaved_changes":"Vous avez des modifications non enregistrées."}},"fr-CA":{"errors":{"blank":"Requis","required":"Requis","unsaved_changes":"Vous avez des modifications non enregistrées."}},"he":{"errors":{"blank":"נדרש","required":"נדרש","unsaved_changes":"יש עדיין שינויים שטרם נשמרו"}},"ht":{"errors":{"blank":"Obligatwa","required":"Obligatwa","unsaved_changes":"Ou gen chanjman ki pa anrejistre."}},"hu":{"errors":{"blank":"Kötelező","required":"Kötelező","unsaved_changes":"Még el nem mentett módosításai vannak."}},"hy":{"errors":{"blank":"Պահանջվում է","required":"Պահանջվում է","unsaved_changes":"Դուք չպահպանված փոփոխություններ եք արել:"}},"is":{"errors":{"blank":"Krafist","required":"Krafist","unsaved_changes":"Þú átt óvistaðar breytingar."}},"it":{"errors":{"blank":"Obbligatorio","required":"Obbligatorio","unsaved_changes":"Hai delle modifiche non salvate."}},"ja":{"errors":{"blank":"必須","required":"必須","unsaved_changes":"未保存の変更内容があります。"}},"ko":{"errors":{"blank":"필수 사항","required":"필수 사항"}},"mi":{"errors":{"blank":"e hiahiatia ana","required":"e hiahiatia ana","unsaved_changes":"Whai huringa tiakina koe."}},"nb":{"errors":{"blank":"Obligatorisk","required":"Obligatorisk","unsaved_changes":"Du har endringer som ikke er lagret."}},"nb-x-k12":{"errors":{"blank":"Obligatorisk","required":"Obligatorisk","unsaved_changes":"Du har endringer som ikke er lagret."}},"nl":{"errors":{"blank":"Vereist","required":"Vereist","unsaved_changes":"Je hebt veranderingen die nog niet zijn opgeslagen."}},"nn":{"errors":{"blank":"Obligatorisk","required":"Obligatorisk","unsaved_changes":"Du har endringar som ikkje er lagra."}},"pl":{"errors":{"blank":"Wymagany","required":"Wymagany","unsaved_changes":"Nie zapisano wszystkich zmian."}},"pt":{"errors":{"blank":"Necessário","required":"Necessário","unsaved_changes":"Tem alterações não guardadas."}},"pt-BR":{"errors":{"blank":"Obrigatório","required":"Obrigatório","unsaved_changes":"Você tem alterações não salvas"}},"ru":{"errors":{"blank":"Требуется","required":"Требуется","unsaved_changes":"Вы сохранили не все изменения."}},"sl":{"errors":{"blank":"Zahtevano","required":"Zahtevano","unsaved_changes":"Obstajajo spremembe, ki jih niste shranili."}},"sv":{"errors":{"blank":"Nödvändig","required":"Nödvändig","unsaved_changes":"Du har osparade ändringar"}},"sv-x-k12":{"errors":{"blank":"Nödvändig","required":"Nödvändig","unsaved_changes":"Du har osparade ändringar"}},"tr":{"errors":{"blank":"Zorunlu","required":"Zorunlu","unsaved_changes":"Kaydedilmemiş değişiklikler var."}},"uk":{"errors":{"blank":"Обов\'язковий","required":"Обов\'язковий","unsaved_changes":"Ви маєте незбережені зміни."}},"zh-Hans":{"errors":{"blank":"必需","required":"必需","unsaved_changes":"您有未保存的更改。"}},"zh-Hant":{"errors":{"blank":"必填","required":"必填","unsaved_changes":"您有未保存的更改。"}}}'))
t("jQeR")
t("0sPK")
var h=l["default"].scoped("errors")
t("tVj+")
t("vpJZ")
t("Z+Ib")
var v=t("xe+K")
var p=function(e,r){return function(){return e.apply(r,arguments)}},f=function(e,r){for(var t in r)g.call(r,t)&&(e[t]=r[t])
function n(){this.constructor=e}n.prototype=r.prototype
e.prototype=new n
e.__super__=r.prototype
return e},g={}.hasOwnProperty,b=[].slice
r["a"]=function(e){f(r,e)
function r(){this.checkUnload=p(this.checkUnload,this)
this.watchUnload=p(this.watchUnload,this)
this.onSaveFail=p(this.onSaveFail,this)
this.onSaveSuccess=p(this.onSaveSuccess,this)
return r.__super__.constructor.apply(this,arguments)}r.mixin(i["a"])
r.prototype.tagName="form"
r.prototype.className="validated-form-view"
r.prototype.events={submit:"submit"}
r.prototype.saveOpts={wait:true}
r.prototype.disableWhileLoadingOpts={}
r.prototype.submit=function(e,r){var t,n,a,i,s,u,l,c,h
null==r&&(r=v["d"])
null!=e&&e.preventDefault()
this.hideErrors()
c=this.$el.find("textarea[data-rich_text]").toArray()
l=true
c.length>0&&window.ENV.use_rce_enhancements&&(l=c.map(function(e){return r(o()(e),"checkReadyToGetCode",window.confirm)}).every(function(e){return e}))
if(!l)return
n=this.getFormData()
s=this.validateBeforeSave(n,{})
if(0===d.a.keys(s).length){i=new o.a.Deferred
h=this.saveFormData(n)
h.then(this.onSaveSuccess.bind(this),this.onSaveFail.bind(this))
h.fail((p=this,function(){i.reject()
if(p.setFocusAfterError)return p.setFocusAfterError()}))
this.dontRenableAfterSaveSuccess||h.done(function(){return i.resolve()})
this.$el.disableWhileLoading(i,this.disableWhileLoadingOpts)
this.trigger("submit")
return h}a=d.a.map(o()("[data-error-type]"),function(e){return o()(e).attr("data-error-type")})
t=d.a.chain(d.a.keys(s)).reject(function(e){return d.a.includes(a,e)}).value()
u=t[0]||a[0]
this.findField(u).focus()
return window.setTimeout(function(e){return function(){e.showErrors(s)
return null}}(this),50)
var p}
r.prototype.getFormData=function(){return this.$el.toJSON()}
r.prototype.saveFormData=function(e){var r,t
null==e&&(e=null)
r=this.model
e||(e=this.getFormData())
t=this.saveOpts
return r.save(e,t)}
r.prototype.validate=function(e){var r,t
null==e&&(e={})
e||(e={})
r=e["data"]||this.getFormData()
t=this.validateFormData(r,{})
this.hideErrors()
this.showErrors(t)
return 0===t.length}
r.prototype.validateFormData=function(e){return{}}
r.prototype.validateBeforeSave=function(e){return this.validateFormData(e)}
r.prototype.hideErrors=function(){return this.$el.hideErrors()}
r.prototype.onSaveSuccess=function(){return this.trigger.apply(this,["success"].concat(b.call(arguments)))}
r.prototype.onSaveFail=function(e){var r
r=this.parseErrorResponse(e)
r||(r={})
this.showErrors(r)
return this.trigger.apply(this,["fail",r].concat(b.call(arguments)))}
r.prototype.parseErrorResponse=function(e){if(422===e.status)return{authenticity_token:"invalid"}
try{return o.a.parseJSON(e.responseText).errors}catch(e){e
return{}}}
r.prototype.translations={required:h.t("required","Required"),blank:h.t("blank","Required"),unsaved:h.t("unsaved_changes","You have unsaved changes.")}
r.prototype.fieldSelectors=null
r.prototype.findField=function(e){var r,t,n
n=(null!=(t=this.fieldSelectors)?t[e]:void 0)||"[name='"+e+"']"
r=this.$(n)
0===r.length&&(r=this.$("[data-error-type='"+e+"']"))
r.data("rich_text")&&(r=this.findSiblingTinymce(r))
r.length>1&&(r=r.not("[type=hidden]"))
return r}
r.prototype.castJSON=function(e){var r
if(!d.a.isObject(e))return e
if(null!=e.toJSON)return e.toJSON()
r=d.a.clone(e)
d.a.each(r,(t=this,function(e,n){return r[n]=t.castJSON(e)}))
var t
return r}
r.prototype.original=null
r.prototype.watchUnload=function(){this.original=this.castJSON(this.getFormData())
this.unwatchUnload()
return o()(window).on("beforeunload",this.checkUnload)}
r.prototype.unwatchUnload=function(){return o()(window).off("beforeunload",this.checkUnload)}
r.prototype.checkUnload=function(){var e
e=this.castJSON(this.getFormData())
if(!d.a.isEqual(this.original,e))return this.translations.unsaved}
return r}(a.a.View)},BYL3:function(e,r,t){"use strict"
var n=t("ouhR")
var a=t.n(n)
var i=t("xe+K")
const s=/^(?:select|textarea)/i
const o=/\r?\n/g
const u=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week|file)$/i
function d(){if(this.elements)return a.a.makeArray(this.elements)
{const e=a()(this).find(":input")
return e.length?e:this}}function l(){return this.name&&!this.disabled&&(this.checked||s.test(this.nodeName)||u.test(this.type))}function c(e,r){"string"===typeof r&&(r=r.replace(o,"\r\n"))
return{name:e,value:r}}function h(){const e=a()(this)
const r=(()=>{if("file"!==this.type)return e.hasClass("datetime_field_enabled")?""===e.val()?null:e.data("date")||null:e.data("rich_text")?Object(i["d"])(e,"get_code",false):e.val()
if(e.val())return this})()
return a.a.isArray(r)?r.map(e=>c(this.name,e)):c(this.name,r)}a.a.fn.serializeForm=function(){return this.map(d).filter(l).map(h).get()}},TBRb:function(e,r,t){"use strict"
var n=t("ouhR")
var a=t.n(n)
var i=t("GLiE")
var s=t.n(i)
var o=t("Nxtp")
t("YGE8")
a.a.fn.fixDialogButtons=function(){return this.each(function(){const e=a()(this)
const r=e.find(".button-container:last .btn, button[type=submit]")
if(r.length){e.find(".button-container:last, button[type=submit]").hide()
let t=a.a.map(r.toArray(),r=>{const t=a()(r)
let n=t.attr("class")||""
const i=t.attr("id")
if(t.is(".dialog_closer")){t.off(".fixdialogbuttons")
t.on("click.fixdialogbuttons",Object(o["a"])(()=>e.dialog("close")))}"submit"===t.prop("type")&&t[0].form&&(n+=" button_type_submit")
return{text:t.text(),"data-text-while-loading":t.data("textWhileLoading"),click:()=>t.click(),class:n,id:i}})
t=s.a.sortBy(t,e=>e.class.match(/btn-primary/)?1:0)
e.dialog("option","buttons",t)}})}},fQ4S:function(e,r,t){"use strict"
var n=t("ouhR")
var a=t.n(n)
var i=t("GLiE")
var s=t.n(i)
var o=t("5Ky4")
t("tVj+")
t("vpJZ")
t("Z+Ib")
t("JI1W")
r["a"]={fieldSelectors:null,findSiblingTinymce:function(e){return e.siblings(".mce-tinymce").find(".mce-edit-area")},findField:function(e,r){var t,n,i
null==r&&(r=false)
i=(null!=(n=this.fieldSelectors)?n[e]:void 0)||"[name='"+e+"']"
t=r?a()(i):this.$(i)
t.data("rich_text")&&(t=this.findSiblingTinymce(t))
return t},showErrors:function(e,r){var t,n,i,s,u,d,l,c
null==r&&(r=false)
c=[]
for(i in e){n=e[i]
t=n.element||this.findField(i,r)
s=n.message||function(){var e,r,t,a
a=[]
for(e=0,r=n.length;e<r;e++){u=n[e].message
a.push(Object(o["a"])((null!=(t=this.translations)?t[u]:void 0)||u))}return a}.call(this).join("</p><p>")
null!=(d=t.errorBox(a.a.raw(""+s)))&&null!=(l=d.css("z-index","1100"))&&l.attr("role","alert")
this.attachErrorDescription(t,s)
n.$input=t
c.push(n.$errorBox=t.data("associated_error_box"))}return c},attachErrorDescription:function(e,r){var t
t=this.findOrCreateDescriptionField(e)
t["description"].text(a.a.raw(""+r))
return e.attr("aria-describedby",t["description"].attr("id")+" "+t["originalDescriptionIds"])},findOrCreateDescriptionField:function(e){var r,t,n
t=e.attr("id")
a()("#"+t+"_sr_description").length>0||a()("<div>").attr({id:t+"_sr_description",class:"screenreader-only"}).insertBefore(e)
r=a()("#"+t+"_sr_description")
n=this.getExistingDescriptionIds(e,t)
return{description:r,originalDescriptionIds:n}},getExistingDescriptionIds:function(e,r){var t,n
t=e.attr("aria-describedby")
n=t?t.split(" "):[]
return s.a.without(n,r+"_sr_description")}}},"tVj+":function(e,r,t){"use strict"
var n=t("ouhR")
var a=t.n(n)
t("BYL3")
var i={validate:/^[a-zA-Z][a-zA-Z0-9_-]*(?:\[(?:\d*|[a-zA-Z0-9_-]+)\])*$/,key:/[a-zA-Z0-9_-]+|(?=\[\])/g,push:/^$/,fixed:/^\d+$/,named:/^[a-zA-Z0-9_-]+$/}
var s=function(e,r,t){e[r]=t
return e}
a.a.fn.toJSON=function(){var e={},r={}
var t=function(e,t){void 0===r[e]&&(r[e]=0)
if(void 0===t)return r[e]++
if(void 0!==t&&t>r[e])return r[e]=++t}
a.a.each(a()(this).serializeForm(),function(){if(!i.validate.test(this.name))return
var r,n=this.name.match(i.key),o=this.value,u=this.name
while(void 0!==(r=n.pop())){u=u.replace(new RegExp("\\["+r+"\\]$"),"")
if(r.match(i.push))o=s([],t(u),o)
else if(r.match(i.fixed)){t(u,r)
o=s([],r,o)}else r.match(i.named)&&(o=s({},r,o))}e=a.a.extend(true,e,o)})
return e}}}])
