(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[294],{"2jkv":function(e,t,r){"use strict"
r.r(t)
var s=r("An8g")
var a=r("LlUU")
var i=r("ouhR")
var n=r.n(i)
var o=r("GLiE")
var _=r.n(o)
var d=r("FIFq")
var l=r.n(d)
const c=2e3
const u=1e3
const p=n()(window)
class h{constructor(e){this.markAsRead=()=>{this.view.model.markAsRead()
h.unread=_()(h.unread).without(this)
return h.trigger("markAsRead",this.view.model)}
this.view=e
h.unread.push(this)
this.view.model.bind("change:collapsedView",(e,t)=>{this.ignore=t
if(t)return this.clearTimer()})}createTimer(){return this.timer||(this.timer=setTimeout(this.markAsRead,c))}clearTimer(){clearTimeout(this.timer)
return delete this.timer}static init(){p.bind("scroll resize",this.checkForVisibleEntries)
return this.checkForVisibleEntries()}}h.unread=[]
h.checkForVisibleEntries=_.a.throttle(()=>{const e=p.scrollTop()
const t=e+p.height()
h.unread.forEach(r=>{if(r.ignore||r.view.model.get("forced_read_state"))return
const s=r.view.$el.offset().top
const a=s<t&&s+r.view.$el.height()>e
r[a?"createTimer":"clearTimer"]()})},u)
var m=_.a.extend(h,l.a.Events)
function g(e,t,r){for(let s=0;s<e.length;s++){const a=e[s]
const i=r(a,e)
if(i&&i.stop)return true
if(null!=a[t]&&g(a[t],t,r))return true}}var f=r("Q7CF")
r("jYyc")
var y=function(e,t){for(var r in t)v.call(t,r)&&(e[r]=t[r])
function s(){this.constructor=e}s.prototype=t.prototype
e.prototype=new s
e.__super__=t.prototype
return e},v={}.hasOwnProperty
var b=function(e){y(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.defaults=function(){return{id:null,parent_id:null,message:a["a"].t("no_content","No Content"),user_id:null,read_state:"read",forced_read_state:false,created_at:null,updated_at:null,deleted:false,attachment:null,replies:[],canAttach:ENV.DISCUSSION.PERMISSIONS.CAN_ATTACH,new:false,highlight:false}}
t.prototype.computedAttributes=["isAuthorsEntry","canModerate","canReply","hiddenName","canRate","speedgraderUrl","inlineReplyLink",{name:"allowsSideComments",deps:["parent_id","deleted"]},{name:"allowsThreadedReplies",deps:["deleted"]},{name:"showBoxReplyLink",deps:["allowsSideComments"]},{name:"collapsable",deps:["replies","allowsSideComments","allowsThreadedReplies"]},{name:"summary",deps:["message"]}]
t.prototype.read=function(){return ENV.DISCUSSION.ENTRY_ROOT_URL+"?ids[]="+this.get("id")}
t.prototype.create=function(){var e
this.set("author",ENV.DISCUSSION.CURRENT_USER)
e=this.get("parent_id")
return null===e?ENV.DISCUSSION.ROOT_REPLY_URL:ENV.DISCUSSION.REPLY_URL.replace(/:entry_id/,e)}
t.prototype["delete"]=function(){return ENV.DISCUSSION.DELETE_URL.replace(/:id/,this.get("id"))}
t.prototype.update=function(){return ENV.DISCUSSION.DELETE_URL.replace(/:id/,this.get("id"))}
t.prototype.sync=function(e,t,r){var s,a
null==r&&(r={})
a=this.get("replies")
this.set("replies",[])
r.url=this[e]()
s=r.complete
r.complete=(i=this,function(){i.set("replies",a)
if(null!=s)return s()})
var i
return l.a.sync(e,this,r)}
t.prototype.parse=function(e){return _.a.isArray(e)?e[0]:e}
t.prototype.toJSON=function(){var e
e=t.__super__.toJSON.apply(this,arguments)
return _.a.pick(e,"id","parent_id","message","user_id","read_state","forced_read_state","created_at","updated_at","deleted","attachment","replies","author")}
t.prototype.isAuthorsEntry=function(){if(this.get("user_id")+""===ENV.DISCUSSION.CURRENT_USER.id+"")return true
return false}
t.prototype.hiddenName=function(){var e
if(ENV.DISCUSSION.HIDE_STUDENT_NAMES){e=this.get("user_id")+""===ENV.DISCUSSION.STUDENT_ID
return this.isAuthorsEntry()?this.get("author").display_name:e?a["a"].t("this_student","This Student"):a["a"].t("discussion_participant","Discussion Participant")}}
t.prototype.ratingString=function(){var e
if(!(e=this.get("rating_sum")))return""
return a["a"].t("like_count",{one:"(%{count} like)",other:"(%{count} likes)"},{count:e})}
t.prototype.canModerate=function(){return this.isAuthorsEntry()&&ENV.DISCUSSION.PERMISSIONS.CAN_MANAGE_OWN||ENV.DISCUSSION.PERMISSIONS.MODERATE}
t.prototype.canReply=function(){if(this.get("deleted"))return false
if(!ENV.DISCUSSION.PERMISSIONS.CAN_REPLY)return false
return true}
t.prototype.canRate=function(){return ENV.DISCUSSION.PERMISSIONS.CAN_RATE}
t.prototype.inlineReplyLink=function(){if(ENV.DISCUSSION.THREADED&&(this.allowsThreadedReplies()||this.allowsSideComments()))return true
return false}
t.prototype.allowsThreadedReplies=function(){if(this.get("deleted"))return false
if(!ENV.DISCUSSION.PERMISSIONS.CAN_REPLY)return false
if(!ENV.DISCUSSION.THREADED)return false
return true}
t.prototype.allowsSideComments=function(){if(this.get("deleted"))return false
if(!ENV.DISCUSSION.PERMISSIONS.CAN_REPLY)return false
if(ENV.DISCUSSION.THREADED)return false
if(this.get("parent_id"))return false
return true}
t.prototype.showBoxReplyLink=function(){return this.allowsSideComments()}
t.prototype.collapsable=function(){return this.hasChildren()||this.allowsSideComments()||this.allowsThreadedReplies()}
t.prototype.speedgraderUrl=function(){if(ENV.DISCUSSION.SPEEDGRADER_URL_TEMPLATE)return ENV.DISCUSSION.SPEEDGRADER_URL_TEMPLATE.replace(/%3Astudent_id/,this.get("user_id"))}
t.prototype.summary=function(){return Object(f["a"])(this.get("message"))}
t.prototype.markAsRead=function(){var e
this.set("read_state","read")
e=ENV.DISCUSSION.MARK_READ_URL.replace(/:id/,this.get("id"))
return n.a.ajaxJSON(e,"PUT")}
t.prototype.markAsUnread=function(){var e
this.set({read_state:"unread",forced_read_state:true})
e=ENV.DISCUSSION.MARK_UNREAD_URL.replace(/:id/,this.get("id"))
return n.a.ajaxJSON(e,"DELETE",{forced_read_state:true})}
t.prototype.toggleLike=function(){var e,t,r
e=this.get("rating")?0:1
this.set({rating:e})
t=(this.get("rating_sum")||0)+(e?1:-1)
this.set("rating_sum",t)
r=ENV.DISCUSSION.RATE_URL.replace(/:id/,this.get("id"))
return n.a.ajaxJSON(r,"POST",{rating:e})}
t.prototype._hasActiveReplies=function(e){if(_.a.some(e,function(e){return!e.deleted}))return true
if(_.a.some(e,(t=this,function(e){return t._hasActiveReplies(e.replies)})))return true
var t
return false}
t.prototype.hasActiveReplies=function(){return this._hasActiveReplies(this.get("replies"))}
t.prototype.hasChildren=function(){return this.get("replies").length>0}
return t}(l.a.Model)
var k=function(e,t){for(var r in t)w.call(t,r)&&(e[r]=t[r])
function s(){this.constructor=e}s.prototype=t.prototype
e.prototype=new s
e.__super__=t.prototype
return e},w={}.hasOwnProperty
var S=function(e){k(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.defaults={perPage:50,initialPage:0}
t.prototype.model=b
t.prototype.totalPages=function(){return Math.ceil(this.length/this.options.perPage)}
t.prototype.getPage=function(e){var t
if("next"===e)return this.getPage(this.currentPage+1)
this.currentPage=e
t=this.getPageIndicies(e)
return this.toArray().slice(t.start,t.end)}
t.prototype.getPageIndicies=function(e){var t,r
r=e*this.options.perPage
t=r+this.options.perPage
return{start:r,end:t}}
t.prototype.getPageAsCollection=function(e,t){null==t&&(t=this.options)
e=new this.constructor(this.getPage(e),t)
e.fullCollection=this
return e}
t.prototype.setAllReadState=function(e){return this.each(function(t){return t.set("read_state",e)})}
t.prototype.getEntryData=function(e){var t,r,s,a,i,n,o,_,d,l
r=null
_=null
a=0
g(this.toJSON(),"replies",(c=this,function(t){var s
s=null!=c.get(t.id)
null===r&&s&&(_=t)
s?a=0:null===r&&(a+=1)
if(t.id+""===e)return r=t}))
var c
if(!(null!=_&&null!=r))return null
d=this.indexOf(this.get(_.id))
for(i=s=0,n=this.totalPages();0<=n?s<=n:s>=n;i=0<=n?++s:--s){o=this.getPageIndicies(i),l=o.start,t=o.end
if(d>=l&&d<t)break}return{entry:r,rootParent:_,page:i,levels:a}}
return t}(l.a.Collection)
var E=r("3O+N")
var A=r.n(E)
r("JIC+")
var x=r("pQTu")
var R=r("m0r6")
Object(R["a"])(JSON.parse('{"ar":{"discussions":{"author_link":{"authors_name":"اسم المؤلف","unknown_author":"\\u003eمؤلف غير معروف"}},"inactive_cd40317f":"معطل","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"لا يستطيع هذا لمستخدم الوصول إلى المساق حاليًا"},"cy":{"discussions":{"author_link":{"authors_name":"Enw\'r Awdur","unknown_author":"\\u003eAwdur Dieithr"}},"inactive_cd40317f":"anweithredol","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"Dydy’r defnyddiwr hwn ddim yn gallu cael mynediad at y cwrs ar hyn o bryd"},"da":{"discussions":{"author_link":{"authors_name":"Forfatternavn","unknown_author":"\\u003eUkendt forfatter"}},"inactive_cd40317f":"Inaktiv","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"Denne bruger kan ikke få adgang til faget på nuværende tidspunkt"},"da-x-k12":{"discussions":{"author_link":{"authors_name":"Forfatternavn","unknown_author":"\\u003eUkendt forfatter"}},"inactive_cd40317f":"Inaktiv","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"Denne bruger kan ikke få adgang til faget på nuværende tidspunkt"},"de":{"discussions":{"author_link":{"authors_name":"Name des Autors","unknown_author":"\\u003eAutor unbekannt"}},"inactive_cd40317f":"inaktiv","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"Dieser Benutzer kann derzeit nicht auf den Kurs zugreifen."},"el":{"discussions":{"author_link":{"authors_name":"Όνομα συγγραφέα","unknown_author":"\\u003eΆγνωστος Συγγραφέας"}},"inactive_cd40317f":"αδρανοποιημένος","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"Αυτός ο χρήστης δεν έχει, προς το παρόν, πρόσβαση στο μάθημα "},"en-AU":{"discussions":{"author_link":{"authors_name":"Author\'s name","unknown_author":"\\u003eUnknown Author"}},"inactive_cd40317f":"inactive","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"This user is currently not able to access the course."},"en-CA":{"discussions":{"author_link":{"authors_name":"Author\'s name","unknown_author":"\\u003eUnknown Author"}},"inactive_cd40317f":"inactive","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"This user is currently not able to access the course"},"en-GB":{"discussions":{"author_link":{"authors_name":"Author\'s name","unknown_author":"\\u003eUnknown author"}},"inactive_cd40317f":"inactive","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"This user is currently not able to access the course"},"es":{"discussions":{"author_link":{"authors_name":"Nombre del autor","unknown_author":"\\u003eAutor desconocido"}},"inactive_cd40317f":"inactivo","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"Actualmente este usuario no puede acceder al curso"},"fa":{"discussions":{"author_link":{"authors_name":"نام نویسنده","unknown_author":"\\u003eنویسنده ناشناس"}},"inactive_cd40317f":"غیر فعال","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"این کاربر در حال حاضر قادر به دسترسی به درس نیست"},"fi":{"discussions":{"author_link":{"authors_name":"Tekijän nimi","unknown_author":"\\u003eTuntematon tekijä"}},"inactive_cd40317f":"ei-aktiivinen","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"Tämä käyttäjä ei parhaillaan pysty käyttämään tätä kurssia"},"fr":{"discussions":{"author_link":{"authors_name":"Nom de l’auteur","unknown_author":"\\u003eAuteur inconnu"}},"inactive_cd40317f":"désactivé","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"Cet utilisateur n\'est pas capable d\'accéder au cours actuellement"},"fr-CA":{"discussions":{"author_link":{"authors_name":"Nom de l’auteur","unknown_author":"\\u003eAuteur inconnu"}},"inactive_cd40317f":"inactif","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"Cet utilisateur n\'est pas capable d\'accéder au cours actuellement"},"he":{"discussions":{"author_link":{"authors_name":"שם המחבר","unknown_author":"\\u003eהמחבר לא ידוע"}},"inactive_cd40317f":"לא פעיל","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"משתמש זה אינו יכול כרגע לגשת לקורס"},"ht":{"discussions":{"author_link":{"authors_name":"Non otè","unknown_author":"\\u003eOtè Enkoni"}},"inactive_cd40317f":"pa aktif","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"Itilizatè sa a paka aksede a kou a pou kounye a."},"hu":{"discussions":{"author_link":{"authors_name":"Szerző neve","unknown_author":"\\u003eIsmeretlen szerző"}},"inactive_cd40317f":"inaktív","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"Ez a felhasználó jelenleg nem fér hozzá a kurzushoz"},"hy":{"inactive_cd40317f":"Ապաակտիվացված","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"Այս օգտատերն այս պահին չի կարող տեսնել դասընթացը"},"is":{"discussions":{"author_link":{"authors_name":"Nafn höfundar","unknown_author":"\\u003eÓþekktur höfundur"}},"inactive_cd40317f":"óvirkt","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"Þessi notandi hefur ekki aðgang að námskeiðinu eins og er"},"it":{"discussions":{"author_link":{"authors_name":"Nome dell\'autore","unknown_author":"\\u003eAutore sconosciuto"}},"inactive_cd40317f":"inattivo","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"Questo utente attualmente non può accedere al corso"},"ja":{"discussions":{"author_link":{"authors_name":"作成者名","unknown_author":"\\u003e不明な作成者"}},"inactive_cd40317f":"非アクティブ","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"このユーザーは、このコースにアクセスすることはできません。"},"mi":{"discussions":{"author_link":{"authors_name":"Ingoa o te kaituhi","unknown_author":"\\u003e Kaore e mōhiotia te Kaituhi"}},"inactive_cd40317f":"tautauā","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"Ko te wā e kore tēnei kaiwhakamahi taea ki te uru i te akoranga"},"nb":{"discussions":{"author_link":{"authors_name":"Forfatterens navn","unknown_author":"\\u003eUkjent Forfatter"}},"inactive_cd40317f":"inaktiv","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"Denne brukeren har for tiden ikke tilgang til emnet"},"nb-x-k12":{"discussions":{"author_link":{"authors_name":"Forfatterens navn","unknown_author":"\\u003eUkjent Forfatter"}},"inactive_cd40317f":"inaktiv","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"Denne brukeren har for tiden ikke tilgang til faget"},"nl":{"discussions":{"author_link":{"authors_name":"Naam auteur","unknown_author":"\\u003eOnbekende auteur"}},"inactive_cd40317f":"inactief","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"Deze gebruiker heeft momenteel geen toegang tot de cursus"},"nn":{"discussions":{"author_link":{"authors_name":"Forfattaren sitt namn","unknown_author":"\\u003eUkjend forfattar"}},"inactive_cd40317f":"inaktiv","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"Brukaren har ikkje tilgang til emnet"},"pl":{"discussions":{"author_link":{"authors_name":"Imię i nazwisko twórcy","unknown_author":"\\u003eAutor nieznany"}},"inactive_cd40317f":"Nieaktywny","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"Ten użytkownik nie ma obecnie dostępu do kursu"},"pt":{"discussions":{"author_link":{"authors_name":"Nome do autor","unknown_author":"\\u003eAutor desconhecido"}},"inactive_cd40317f":"inativo","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"Este utilizador atualmente não consegue aceder à disciplina"},"pt-BR":{"discussions":{"author_link":{"authors_name":"Nome do autor","unknown_author":"\\u003eAutor desconhecido"}},"inactive_cd40317f":"Inativo","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"Este usuário não está capaz de acessar o curso atualmente"},"ru":{"discussions":{"author_link":{"authors_name":"Имя автора","unknown_author":"\\u003eНеизвестный автор"}},"inactive_cd40317f":"не активен","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"Этот пользователь на данный момент не может получить доступ к курсу"},"sl":{"discussions":{"author_link":{"authors_name":"Ime avtorja","unknown_author":"\\u003eNeznani avtor"}},"inactive_cd40317f":"neaktivno","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"Ta uporabnik trenutno ne more dostopati do predmeta."},"sv":{"discussions":{"author_link":{"authors_name":"Författarens namn","unknown_author":"\\u003eOkänd författare"}},"inactive_cd40317f":"inaktiv","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"Den här användaren har för tillfället inte tillgång till kursen"},"sv-x-k12":{"discussions":{"author_link":{"authors_name":"Författarens namn","unknown_author":"\\u003eOkänd författare"}},"inactive_cd40317f":"inaktiv","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"Den här användaren har för tillfället inte tillgång till kursen"},"tr":{"discussions":{"author_link":{"authors_name":"Yazar adı","unknown_author":"\\u003eBilinmeyen Yazar"}},"inactive_cd40317f":"etkin değil"},"uk":{"discussions":{"author_link":{"authors_name":"Ім\'я автора","unknown_author":"\\u003eНевідомий автор"}},"inactive_cd40317f":"неактивний","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"Цей користувач на даний момент не може отримати доступ до курсу"},"zh-Hans":{"discussions":{"author_link":{"authors_name":"作者姓名","unknown_author":"\\u003e未知作者"}},"inactive_cd40317f":"不活跃","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"此用户目前不能够访问课程"},"zh-Hant":{"discussions":{"author_link":{"authors_name":"作者姓名","unknown_author":"\\u003e未知作者"}},"inactive_cd40317f":"不活躍","this_user_is_currently_not_able_to_access_the_cour_39cabed1":"該使用者尚未獲得參加課程的權限"}}'))
r("jQeR")
r("0sPK")
x["default"].scoped("discussions.author_link")
r("DfGn")
var C=A.a.default
var T=C.template,j=C.templates=C.templates||{}
var D="discussions/-author-link"
j[D]=T(function(e,t,r,s,a){this.compilerInfo=[4,">= 1.0.0"]
r=this.merge(r,e.helpers)
a=a||{}
var i,n="",o="function",_=this.escapeExpression,d=this,l=r.helperMissing
function c(e,t){var s,a,i,n=""
n+="\n    "
s=(a=r.ifAll||e&&e.ifAll,i={hash:{},inverse:d.program(4,p,t),fn:d.program(2,u,t),data:t},a?a.call(e,e&&e.id,e&&e.course_id,e&&e.is_student,i):l.call(e,"ifAll",e&&e.id,e&&e.course_id,e&&e.is_student,i));(s||0===s)&&(n+=s)
n+="\n    "
s=r["if"].call(e,e&&e.html_url,{hash:{},inverse:d.noop,fn:d.program(6,h,t),data:t});(s||0===s)&&(n+=s)
n+="\n    "
s=r["if"].call(e,e&&e.url,{hash:{},inverse:d.noop,fn:d.program(8,m,t),data:t});(s||0===s)&&(n+=s)
n+='\n    title="'+_((a=r.t||e&&e.t,i={hash:{scope:"discussions.author_link"},data:t},a?a.call(e,"authors_name","Author's name",i):l.call(e,"t","authors_name","Author's name",i)))+'"\n    >'
if(a=r.display_name)s=a.call(e,{hash:{},data:t})
else{a=e&&e.display_name
s=typeof a===o?a.call(e,{hash:{},data:t}):a}n+=_(s)+"\n  "
return n}function u(e,t){var s,a,i=""
i+='\n      data-student_id="'
if(a=r.id)s=a.call(e,{hash:{},data:t})
else{a=e&&e.id
s=typeof a===o?a.call(e,{hash:{},data:t}):a}i+=_(s)+'" data-course_id="'
if(a=r.course_id)s=a.call(e,{hash:{},data:t})
else{a=e&&e.course_id
s=typeof a===o?a.call(e,{hash:{},data:t}):a}i+=_(s)+'"\n      class="author student_context_card_trigger"\n    '
return i}function p(e,t){return'\n      class="author"\n    '}function h(e,t){var s,a,i=""
i+='\n      href="'
if(a=r.html_url)s=a.call(e,{hash:{},data:t})
else{a=e&&e.html_url
s=typeof a===o?a.call(e,{hash:{},data:t}):a}i+=_(s)+'"\n      data-bypass\n    '
return i}function m(e,t){var s,a,i=""
i+='\n        href="'
if(a=r.url)s=a.call(e,{hash:{},data:t})
else{a=e&&e.url
s=typeof a===o?a.call(e,{hash:{},data:t}):a}i+=_(s)+'"\n    '
return i}function g(e,t){var s,a,i=""
i+='\n    class="author unknown"\n    >'+_((s=r.t||e&&e.t,a={hash:{scope:"discussions.author_link"},data:t},s?s.call(e,"unknown_author",">Unknown Author",a):l.call(e,"t","unknown_author",">Unknown Author",a)))+"\n  "
return i}function f(e,t){var s,a,i=""
i+='\n    <span class="label"\n          title="'+_((s=r.t||e&&e.t,a={hash:{i18n_inferred_key:true},data:t},s?s.call(e,"this_user_is_currently_not_able_to_access_the_cour_39cabed1","This user is currently not able to access the course",a):l.call(e,"t","this_user_is_currently_not_able_to_access_the_cour_39cabed1","This user is currently not able to access the course",a)))+'">\n      '+_((s=r.t||e&&e.t,a={hash:{i18n_inferred_key:true},data:t},s?s.call(e,"inactive_cd40317f","inactive",a):l.call(e,"t","inactive_cd40317f","inactive",a)))+"\n    </span>\n  "
return i}n+="<a\n  "
i=r["with"].call(t,t&&t.author,{hash:{},inverse:d.program(10,g,a),fn:d.program(1,c,a),data:a});(i||0===i)&&(n+=i)
n+="\n  "
i=r["if"].call(t,(i=t&&t.author,null==i||false===i?i:i.isInactive),{hash:{},inverse:d.noop,fn:d.program(12,f,a),data:a});(i||0===i)&&(n+=i)
n+="\n</a>\n"
return n})
C.registerPartial("discussions/author_link",j["discussions/-author-link"])
j[D]
Object(R["a"])(JSON.parse('{"ar":{"collapse_subdiscussion_89af1f5c":"طي المناقشة الفرعية","delete_a6efa79d":"حذف","delete_disabled_3196ce47":"حذف (معطل)","discussions":{"entry_content":{"edited_comment":"تم التحرير بواسطة *%{editor.display_name}* في %{edited_at}","go_to_parent":"انتقال إلى الأصل","go_to_topic":"الانتقال إلى الموضوع","like_entry":"الإعجاب بالإدخال","manage_discussion_entry":"إدارة إدخال المناقشة","open_in_speedgrader":"فتح في SpeedGrader","write_a_reply":"رد"}},"edit_c5fbea07":"تحرير","edit_disabled_e6a5ea0a":"تحرير (معطل)","reply_to_comment_72d96728":"رد على التعليق"},"cy":{"collapse_subdiscussion_89af1f5c":"Crebachu isdrafodaeth","delete_a6efa79d":"Dileu","delete_disabled_3196ce47":"Dileu (Wedi\'i analluogi)","discussions":{"entry_content":{"edited_comment":"Wedi golygu gan *%{editor.display_name}* ar %{edited_at}","go_to_parent":"Mynd i’r adran Rhiant","go_to_topic":"Mynd i’r Pwnc","like_entry":"Hoffi cofnod","manage_discussion_entry":"Rheoli cofnod trafodaeth","open_in_speedgrader":"Agor yn SpeedGrader","write_a_reply":"Ateb"}},"edit_c5fbea07":"Golygu","edit_disabled_e6a5ea0a":"Golygu (Wedi\'i analluogi)","reply_to_comment_72d96728":"Ateb sylw"},"da":{"collapse_subdiscussion_89af1f5c":"Skjul underdiskussion","delete_a6efa79d":"Slet","delete_disabled_3196ce47":"Slet (deaktiveret)","discussions":{"entry_content":{"edited_comment":"Redigeret af *%{editor.display_name}* d. %{edited_at}","go_to_parent":"Gå til overordnet","go_to_topic":"Gå til emne","like_entry":"\'Synes godt om\' indlægget","manage_discussion_entry":"Administrering af diskussionsindlæg","open_in_speedgrader":"Åbn i SpeedGrader","write_a_reply":"Svar"}},"edit_c5fbea07":"Rediger","edit_disabled_e6a5ea0a":"Rediger (deaktiveret)","reply_to_comment_72d96728":"Svar på kommentar"},"da-x-k12":{"collapse_subdiscussion_89af1f5c":"Skjul underdiskussion","delete_a6efa79d":"Slet","discussions":{"entry_content":{"edited_comment":"Redigeret af *%{editor.display_name}* d. %{edited_at}","go_to_parent":"Gå til overordnet","go_to_topic":"Gå til emne","like_entry":"\'Synes godt om\' indlægget","manage_discussion_entry":"Administrering af diskussionsindlæg","open_in_speedgrader":"Åbn i SpeedGrader","write_a_reply":"Svar"}},"edit_c5fbea07":"Rediger","reply_to_comment_72d96728":"Svar på kommentar"},"de":{"collapse_subdiscussion_89af1f5c":"Subdiskussion reduzieren","delete_a6efa79d":"Löschen","delete_disabled_3196ce47":"Löschen (deaktiviert)","discussions":{"entry_content":{"edited_comment":"Bearbeitet von *%{editor.display_name}* am %{edited_at}","go_to_parent":"Zum übergeordneten Ordner wechseln","go_to_topic":"Wechseln zu Thema","like_entry":"Like-Eintrag","manage_discussion_entry":"Diskussionsbeitrag verwalten","open_in_speedgrader":"In SpeedGrader öffnen","write_a_reply":"Antworten"}},"edit_c5fbea07":"Ändern","edit_disabled_e6a5ea0a":"Ändern (deaktiviert)","reply_to_comment_72d96728":"Auf Kommentar antworten"},"el":{"collapse_subdiscussion_89af1f5c":"Σύμπτυξη Υποσυζήτησης","delete_a6efa79d":"Αφαίρεση","discussions":{"entry_content":{"edited_comment":"Τροποποιήθηκε από τον/την *%{editor.display_name}* στις %{edited_at}","go_to_parent":"Μετάβαση στον Γονικό Φάκελο","go_to_topic":"Μετάβαση στο Θέμα","like_entry":"«Μου Αρέσει» η καταχώριση","manage_discussion_entry":"Διαχείριση Καταχώρισης στη Συζήτηση","open_in_speedgrader":"Άνοιγμα στο SpeedGrader","write_a_reply":"Απάντηση"}},"edit_c5fbea07":"Διαμόρφωση","reply_to_comment_72d96728":"Απάντηση στο Σχόλιο"},"en-AU":{"collapse_subdiscussion_89af1f5c":"Collapse Subdiscussion","delete_a6efa79d":"Delete","delete_disabled_3196ce47":"Delete (Disabled)","discussions":{"entry_content":{"edited_comment":"Edited by *%{editor.display_name}* on %{edited_at}","go_to_parent":"Go To Parent","go_to_topic":"Go To Topic","like_entry":"Like entry","manage_discussion_entry":"Manage Discussion Entry","open_in_speedgrader":"Open in SpeedGrader","write_a_reply":"Reply"}},"edit_c5fbea07":"Edit","edit_disabled_e6a5ea0a":"Edit (Disabled)","reply_to_comment_72d96728":"Reply to Comment"},"en-CA":{"collapse_subdiscussion_89af1f5c":"Collapse Subdiscussion","delete_a6efa79d":"Delete","delete_disabled_3196ce47":"Delete (Disabled)","discussions":{"entry_content":{"edited_comment":"Edited by *%{editor.display_name}* on %{edited_at}","go_to_parent":"Go To Parent","go_to_topic":"Go To Topic","like_entry":"Like entry","manage_discussion_entry":"Manage Discussion Entry","open_in_speedgrader":"Open in SpeedGrader","write_a_reply":"Reply"}},"edit_c5fbea07":"Edit","edit_disabled_e6a5ea0a":"Edit (Disabled)","reply_to_comment_72d96728":"Reply to Comment"},"en-GB":{"collapse_subdiscussion_89af1f5c":"Collapse Sub discussion","delete_a6efa79d":"Delete","delete_disabled_3196ce47":"Delete (Disabled)","discussions":{"entry_content":{"edited_comment":"Edited by *%{editor.display_name}* on %{edited_at}","go_to_parent":"Go to parent","go_to_topic":"Go to topic","like_entry":"\'Like\' entry","manage_discussion_entry":"Manage discussion entry","open_in_speedgrader":"Open in SpeedGrader","write_a_reply":"Reply"}},"edit_c5fbea07":"Edit","edit_disabled_e6a5ea0a":"Edit (Disabled)","reply_to_comment_72d96728":"Reply to comment"},"es":{"collapse_subdiscussion_89af1f5c":"Contraer subforo","delete_a6efa79d":"Eliminar","delete_disabled_3196ce47":"Eliminar (deshabilitado)","discussions":{"entry_content":{"edited_comment":"Editado por *%{editor.display_name}* el %{edited_at}","go_to_parent":"Ir al inicio","go_to_topic":"Ir a un tema","like_entry":"Darle me gusta a la entrada","manage_discussion_entry":"Gestionar la entrada de foro","open_in_speedgrader":"Abrir en el calificador rápido","write_a_reply":"Responder"}},"edit_c5fbea07":"Editar","edit_disabled_e6a5ea0a":"Editar (deshabilitado)","reply_to_comment_72d96728":"Responder al comentario"},"fa":{"collapse_subdiscussion_89af1f5c":"بستن بحث فرعی","delete_a6efa79d":"حذف","discussions":{"entry_content":{"edited_comment":"توسط *%{editor.display_name}* در %{edited_at} ویرایش شد","go_to_parent":"رفتن به منشأ","go_to_topic":"رفتن به موضوع","like_entry":"لایک کردن مدخل","manage_discussion_entry":"مدیریت ورودی بحث","open_in_speedgrader":"باز کردن در برنامه نمره گذاری سریع","write_a_reply":"پاسخ"}},"edit_c5fbea07":"ویرایش","reply_to_comment_72d96728":"پاسخ به نظر"},"fi":{"collapse_subdiscussion_89af1f5c":"Kutista alakeskustelu","delete_a6efa79d":"Poista","delete_disabled_3196ce47":"Poista (poistettu käytöstä)","discussions":{"entry_content":{"edited_comment":"Muokkaaja *%{editor.display_name}* %{edited_at}","go_to_parent":"Siirry vanhempaan","go_to_topic":"Siirry aiheeseen","like_entry":"Tykkää-merkintä","manage_discussion_entry":"Hallitse keskustelun merkintä","open_in_speedgrader":"Avaa Speedgraderissa","write_a_reply":"Vastaus"}},"edit_c5fbea07":"Muokkaa","edit_disabled_e6a5ea0a":"Muokkaa (poistettu käytöstä)","reply_to_comment_72d96728":"Vastaa kommenttiin"},"fr":{"collapse_subdiscussion_89af1f5c":"Réduire la sous-discussion","delete_a6efa79d":"Supprimer","delete_disabled_3196ce47":"Supprimer (désactiver)","discussions":{"entry_content":{"edited_comment":"Modifié par *%{editor.display_name}* le %{edited_at}","go_to_parent":"Accéder au dossier parent","go_to_topic":"Aller à la rubrique","like_entry":"Laisser une rétroaction de type « J\'aime » à cette entrée","manage_discussion_entry":"Gérer l’entrée de discussion","open_in_speedgrader":"Ouvrir dans SpeedGrader","write_a_reply":"Répondre"}},"edit_c5fbea07":"Modifier","edit_disabled_e6a5ea0a":"Modifier (désactiver)","reply_to_comment_72d96728":"Répondre au commentaire"},"fr-CA":{"collapse_subdiscussion_89af1f5c":"Réduire la sous-discussion","delete_a6efa79d":"Supprimer","delete_disabled_3196ce47":"Supprimer (désactivé)","discussions":{"entry_content":{"edited_comment":"Modifié par *%{editor.display_name}* le %{edited_at}","go_to_parent":"Accéder au dossier parent","go_to_topic":"Aller à la rubrique","like_entry":"Laisser une rétroaction de type « J\'aime » à cette entrée","manage_discussion_entry":"Gérer l’entrée de discussion","open_in_speedgrader":"Ouvrir dans SpeedGrader","write_a_reply":"Répondre"}},"edit_c5fbea07":"Modifier","edit_disabled_e6a5ea0a":"Modifier (désactivé)","reply_to_comment_72d96728":"Répondre au commentaire"},"he":{"collapse_subdiscussion_89af1f5c":"כווץ את חלון דיוני המשנה","delete_a6efa79d":"ביטול","discussions":{"entry_content":{"edited_comment":"נערך ע\\"י *%{editor.display_name}* ב %{edited_at}","go_to_parent":"עבור להורה","go_to_topic":"מעבר לנושא","like_entry":"סימון לייק","manage_discussion_entry":"ניהול מופע דיון","open_in_speedgrader":"פתיחה ב SpeedGrader","write_a_reply":"השב/י"}},"edit_c5fbea07":"עריכה","reply_to_comment_72d96728":"תגובה להערה"},"ht":{"collapse_subdiscussion_89af1f5c":"Redwi sou diskisyon","delete_a6efa79d":"Efase","delete_disabled_3196ce47":"Efase (Dezaktive)","discussions":{"entry_content":{"edited_comment":"Modifye pa *%{editor.display_name}* le %{edited_at}","go_to_parent":"Ale Nan Parent","go_to_topic":"Ale Nan Tèm","like_entry":"Jèm atik","manage_discussion_entry":"Jere Diskisyon Atik","open_in_speedgrader":"Ouvri nan Speedgrader","write_a_reply":"Reponn"}},"edit_c5fbea07":"Modifye","edit_disabled_e6a5ea0a":"Chanje (Dezaktive)","reply_to_comment_72d96728":"Reponn Kòmantè"},"hu":{"collapse_subdiscussion_89af1f5c":"Az alfórum összecsukása","delete_a6efa79d":"Törlés","discussions":{"entry_content":{"edited_comment":"*%{editor.display_name}* szerkesztette ekkor: %{edited_at}","go_to_parent":"Ugrás a szülőre","go_to_topic":"Ugrás a témára","like_entry":"Bejegyzés lájkolása","manage_discussion_entry":"Fórumbejegyzés kezelése","open_in_speedgrader":"Megnyitás a Gyorsértékelőben","write_a_reply":"Válasz"}},"edit_c5fbea07":"Szerkesztés","reply_to_comment_72d96728":"Válasz a megjegyzésre"},"hy":{"collapse_subdiscussion_89af1f5c":"Վերացնել ենթաքննարկումը","delete_a6efa79d":"Ջնջել","discussions":{"entry_content":{"edited_comment":"Խմբագրվել է *%{editor.display_name}*-ի կողմից %{edited_at}-ին","go_to_parent":"Անցնել ծնողական մակարդակին","go_to_topic":"Անցնել թեմային ","like_entry":"Like-ի տեղադրում","manage_discussion_entry":"Քննարկումներում գրանցումների կառավարում","open_in_speedgrader":"Բացել «Արագ գնահատման համակարգ»-ում","write_a_reply":"Պատասխանել"}},"edit_c5fbea07":"Խմբագրել","reply_to_comment_72d96728":"Պատասխանել մեկնաբանության մեջ"},"is":{"collapse_subdiscussion_89af1f5c":"Fella undirumræðu","delete_a6efa79d":"Eyða","delete_disabled_3196ce47":"Eyða (óvirkt)","discussions":{"entry_content":{"edited_comment":" *%{editor.display_name}* breytti þessu %{edited_at}","go_to_parent":"Fara í móður","go_to_topic":"Fara í umræðuefni","like_entry":"Líka við færslu","manage_discussion_entry":"Stjórna umræðufærslu","open_in_speedgrader":"Opna í SpeedGrader","write_a_reply":"Svara"}},"edit_c5fbea07":"Breyta","edit_disabled_e6a5ea0a":"Breyta (óvirkt)","reply_to_comment_72d96728":"Svara athugasemd"},"it":{"collapse_subdiscussion_89af1f5c":"Comprimi discussione secondaria","delete_a6efa79d":"Elimina","delete_disabled_3196ce47":"Elimina (Disattivato)","discussions":{"entry_content":{"edited_comment":"Modificato da *%{editor.display_name}* il %{edited_at}","go_to_parent":"Vai a Parent","go_to_topic":"Vai all\'argomento","like_entry":"Aggiungi Mi piace per la voce","manage_discussion_entry":"Gestisci voce discussione","open_in_speedgrader":"Apri in SpeedGrader","write_a_reply":"Rispondi"}},"edit_c5fbea07":"Modifica","edit_disabled_e6a5ea0a":"Modifica (Disattivato)","reply_to_comment_72d96728":"Rispondi al commento"},"ja":{"collapse_subdiscussion_89af1f5c":"サブディスカッションを折りたたむ","delete_a6efa79d":"削除","delete_disabled_3196ce47":"削除 (無効)","discussions":{"entry_content":{"edited_comment":"*%{editor.display_name}* が %{edited_at} に編集","go_to_parent":"親に移動","go_to_topic":"トピックに移動","like_entry":"いいねを入力","manage_discussion_entry":"ディスカッション エントリの管理","open_in_speedgrader":"SpeedGrader で開く","write_a_reply":"返信"}},"edit_c5fbea07":"編集","edit_disabled_e6a5ea0a":"編集 (無効)","reply_to_comment_72d96728":"コメントに返信"},"ko":{"delete_a6efa79d":"삭제","discussions":{"entry_content":{"edited_comment":"*%{editor.display_name}*이(가) %{edited_at}에 편집","go_to_parent":"상위로 가기","go_to_topic":"주제로 가기","manage_discussion_entry":"토론 항목 관리","open_in_speedgrader":"SpeedGrader에서 열기","write_a_reply":"답변 작성..."}},"edit_c5fbea07":"편집"},"mi":{"collapse_subdiscussion_89af1f5c":"Tiango kōrerorero raro","delete_a6efa79d":"Muku","delete_disabled_3196ce47":"Muku (Kua Monokia)","discussions":{"entry_content":{"edited_comment":"Whakatikahia e *%{editor.display_name}* i runga i %{edited_at}","go_to_parent":"Haere ki te Mātua","go_to_topic":"Haere ki te Kaupapa","like_entry":"Ka rite ki te urunga","manage_discussion_entry":"Whakahaere Tāurunga Kōrerorero","open_in_speedgrader":"Whakatūwhera i roto i te SpeedGrader","write_a_reply":"Whakautu"}},"edit_c5fbea07":"Whakatika","edit_disabled_e6a5ea0a":"Whakatika (Kua Monokia)","reply_to_comment_72d96728":"Whakautu ki te kōrero"},"nb":{"collapse_subdiscussion_89af1f5c":"Kollapse Sub diskusjon","delete_a6efa79d":"Slett","delete_disabled_3196ce47":"Slett (deaktivert)","discussions":{"entry_content":{"edited_comment":"Redigert av *%{editor.display_name}* på %{edited_at}","go_to_parent":"Gå til opphav","go_to_topic":"Gå til tema","like_entry":"Like oppføring","manage_discussion_entry":"Behandle diskusjonsoppføring","open_in_speedgrader":"Åpne i SpeedGrader","write_a_reply":"Svar"}},"edit_c5fbea07":"Rediger","edit_disabled_e6a5ea0a":"Rediger (deaktivert)","reply_to_comment_72d96728":"Svar til Kommentar"},"nb-x-k12":{"collapse_subdiscussion_89af1f5c":"Kollapse Sub diskusjon","delete_a6efa79d":"Slett","discussions":{"entry_content":{"edited_comment":"Redigert av *%{editor.display_name}* på %{edited_at}","go_to_parent":"Gå til opphav","go_to_topic":"Gå til tema","like_entry":"Like oppføring","manage_discussion_entry":"Behandle diskusjonsoppføring","open_in_speedgrader":"Åpne i SpeedGrader","write_a_reply":"Svar"}},"edit_c5fbea07":"Rediger","reply_to_comment_72d96728":"Svar til Kommentar"},"nl":{"collapse_subdiscussion_89af1f5c":"Subdiscussie invouwen","delete_a6efa79d":"Verwijderen","delete_disabled_3196ce47":"Verwijderen (uitgeschakeld)","discussions":{"entry_content":{"edited_comment":"Bewerkt door *%{editor.display_name}* op %{edited_at}","go_to_parent":"Naar bovenliggend niveau gaan","go_to_topic":"Naar onderwerp gaan","like_entry":"Like invoer","manage_discussion_entry":"Discussie-vermelding beheren","open_in_speedgrader":"Openen in SpeedGrader","write_a_reply":"Beantwoorden"}},"edit_c5fbea07":"Bewerken","edit_disabled_e6a5ea0a":"Bewerken (uitgeschakeld)","reply_to_comment_72d96728":"Antwoorden om commentaar te geven"},"nn":{"collapse_subdiscussion_89af1f5c":"Skjul underordna diskusjon","delete_a6efa79d":"Slett","delete_disabled_3196ce47":"Slett (slått av)","discussions":{"entry_content":{"edited_comment":"Redigert av *%{editor.display_name}* den %{edited_at}","go_to_parent":"Gå til overordna nivå","go_to_topic":"Gå til emne","like_entry":"Lik innlegg","manage_discussion_entry":"Administrer diskusjonsinnlegg","open_in_speedgrader":"Opne i SpeedGrader™","write_a_reply":"Svar"}},"edit_c5fbea07":"Rediger","edit_disabled_e6a5ea0a":"Endre (slått av)","reply_to_comment_72d96728":"Svar til kommentar"},"pl":{"collapse_subdiscussion_89af1f5c":"Zwiń Sub-dyskusję","delete_a6efa79d":"Usuń","delete_disabled_3196ce47":"Usuń (wyłączono)","discussions":{"entry_content":{"edited_comment":"Edytowane przez *%{editor.display_name}* w następującym dniu: %{edited_at}","go_to_parent":"Przejdź do nadrzędnego","go_to_topic":"Przejdź do tematu","like_entry":"\'Lubię\' wpis","manage_discussion_entry":"Zarządzaj wpisami do dyskusji","open_in_speedgrader":"Otwórz w SpeedGrader","write_a_reply":"Odpowiedz"}},"edit_c5fbea07":"Edytuj","edit_disabled_e6a5ea0a":"Edytuj (wyłączono)","reply_to_comment_72d96728":"Odpowiedz na komentarz"},"pt":{"collapse_subdiscussion_89af1f5c":"Expandir Subdiscussão","delete_a6efa79d":"Eliminar","delete_disabled_3196ce47":"Eliminar (desativado)","discussions":{"entry_content":{"edited_comment":"Editado por *%{editor.display_name}* em %{edited_at}","go_to_parent":"Ir para início","go_to_topic":"Ir para o tópico","like_entry":"Gostar da publicação","manage_discussion_entry":"Gerir entrada de discussão","open_in_speedgrader":"Abrir no SpeedGrader","write_a_reply":"Responder"}},"edit_c5fbea07":"Editar","edit_disabled_e6a5ea0a":"Editar (desativado)","reply_to_comment_72d96728":"Responder a comentário"},"pt-BR":{"collapse_subdiscussion_89af1f5c":"Recolher Sub Discussão","delete_a6efa79d":"Excluir","delete_disabled_3196ce47":"Excluir (desabilitado)","discussions":{"entry_content":{"edited_comment":"Editado por *%{editor.display_name}* em %{edited_at}","go_to_parent":"Ir para o principal","go_to_topic":"Ir para o tópico","like_entry":"Curtir submissão","manage_discussion_entry":"Gerenciar entrada de discussão","open_in_speedgrader":"Abrir no SpeedGrader","write_a_reply":"Responder"}},"edit_c5fbea07":"Editar","edit_disabled_e6a5ea0a":"Editar (desabilitado)","reply_to_comment_72d96728":"Responder comentário"},"ru":{"collapse_subdiscussion_89af1f5c":"Свернуть под-обсуждение","delete_a6efa79d":"Удалить","delete_disabled_3196ce47":"Удалить (отключено)","discussions":{"entry_content":{"edited_comment":"Отредактировано *%{editor.display_name}* %{edited_at}","go_to_parent":"Перейти на родительский уровень","go_to_topic":"Перейти к теме","like_entry":"Поставить лайк","manage_discussion_entry":"Управление записью в обсуждении","open_in_speedgrader":"Открыть в SpeedGrader","write_a_reply":"Ответ"}},"edit_c5fbea07":"Редактировать","edit_disabled_e6a5ea0a":"Редактировать (отключено)","reply_to_comment_72d96728":"Ответить в комментарии"},"sl":{"collapse_subdiscussion_89af1f5c":"Strni podrazpravo","delete_a6efa79d":"Odstrani","discussions":{"entry_content":{"edited_comment":"Uredil urednik *%{editor.display_name}* dne %{edited_at}","go_to_parent":"Pojdi na starša","go_to_topic":"Pojdi na temo","like_entry":"Všečkaj vnos","manage_discussion_entry":"Urejaj vnos v razpravo","open_in_speedgrader":"Odpri v SpeedGrader","write_a_reply":"Odgovori"}},"edit_c5fbea07":"Uredi","reply_to_comment_72d96728":"Odgovori na komentar"},"sv":{"collapse_subdiscussion_89af1f5c":"Förminska underdiskussion","delete_a6efa79d":"Radera","delete_disabled_3196ce47":"Radera (avaktiverad)","discussions":{"entry_content":{"edited_comment":"Redigerad av *%{editor.display_name}* den %{edited_at}","go_to_parent":"Gå till första inlägget","go_to_topic":"Gå till ämnet","like_entry":"Gilla inlägget","manage_discussion_entry":"Hantera diskussionsinlägg","open_in_speedgrader":"Öppna i SpeedGrader","write_a_reply":"Svara"}},"edit_c5fbea07":"Redigera","edit_disabled_e6a5ea0a":"Redigera (avaktiverad)","reply_to_comment_72d96728":"Svara på kommentar"},"sv-x-k12":{"collapse_subdiscussion_89af1f5c":"Förminska underdiskussion","delete_a6efa79d":"Radera","discussions":{"entry_content":{"edited_comment":"Redigerad av *%{editor.display_name}* den %{edited_at}","go_to_parent":"Gå till första inlägget","go_to_topic":"Gå till ämnet","like_entry":"Gilla inlägget","manage_discussion_entry":"Hantera diskussionsinlägg","open_in_speedgrader":"Öppna i SpeedGrader","write_a_reply":"Svara"}},"edit_c5fbea07":"Redigera","reply_to_comment_72d96728":"Svara på kommentar"},"tr":{"collapse_subdiscussion_89af1f5c":"Alt Tartışmaları Daralt","delete_a6efa79d":"Sil","discussions":{"entry_content":{"edited_comment":"*%{editor.display_name}* tarafından %{edited_at} zamanında düzenlendi","go_to_parent":"Kaynağa Git","go_to_topic":"Konuya Git","like_entry":"Yorumu beğen","manage_discussion_entry":"Tartışma Girişlerini Yönet","open_in_speedgrader":"SpeedGrader\'da Aç","write_a_reply":"Yanıtla"}},"edit_c5fbea07":"Düzenle","reply_to_comment_72d96728":"Yoruma Cevap Yaz"},"uk":{"collapse_subdiscussion_89af1f5c":"Згорнути підтему обговорення","delete_a6efa79d":"Видалити","discussions":{"entry_content":{"edited_comment":"Відредаговано *%{editor.display_name}* на %{edited_at}","go_to_parent":"Перейти до Батьківського об\'єкту","go_to_topic":"Перейти до теми","like_entry":"Вподобати запис","manage_discussion_entry":"Керувати записом обговорення","open_in_speedgrader":"Відкрити у SpeedGrader","write_a_reply":"Відповісти"}},"edit_c5fbea07":"Редагувати","reply_to_comment_72d96728":"Відповісти на коментар"},"zh-Hans":{"collapse_subdiscussion_89af1f5c":"折叠班次讨论","delete_a6efa79d":"删除","delete_disabled_3196ce47":"删除（已禁用）","discussions":{"entry_content":{"edited_comment":"由 *%{editor.display_name}* 于 %{edited_at} 编辑","go_to_parent":"回到父级","go_to_topic":"返回主题","like_entry":"喜欢条目","manage_discussion_entry":"管理讨论条目","open_in_speedgrader":"在 SpeedGrader 中打开","write_a_reply":"回复"}},"edit_c5fbea07":"编辑","edit_disabled_e6a5ea0a":"编辑（已禁用）","reply_to_comment_72d96728":"回复评论"},"zh-Hant":{"collapse_subdiscussion_89af1f5c":"收起分組討論","delete_a6efa79d":"刪除","delete_disabled_3196ce47":"刪除（停用）","discussions":{"entry_content":{"edited_comment":"由 *%{editor.display_name}* 於 %{edited_at} 編輯","go_to_parent":"訪問上層","go_to_topic":"訪問主題","like_entry":"點讚輸入項目","manage_discussion_entry":"管理討論輸入項目","open_in_speedgrader":"在 SpeedGrader 中打開","write_a_reply":"回復"}},"edit_c5fbea07":"編輯","edit_disabled_e6a5ea0a":"編輯（停用）","reply_to_comment_72d96728":"回復評論"}}'))
x["default"].scoped("discussions.entry_content")
var N=A.a.default
var O=N.template,z=N.templates=N.templates||{}
var I="discussions/-entry-content"
z[I]=O(function(e,t,r,s,a){this.compilerInfo=[4,">= 1.0.0"]
r=this.merge(r,e.helpers)
s=this.merge(s,e.partials)
a=a||{}
var i,n,o,_="",d=r.helperMissing,l=this.escapeExpression,c=this,u="function"
function p(e,t){var s,a,i=""
i+='\n<a\n    href="#"\n    class="collapsable collapse-discussion pad-box-mini"\n    role="button"\n    tabindex="0"\n    data-event="toggleCollapsed">\n    <span aria-live="assertive" class="screenreader-only">'+l((s=r.t||e&&e.t,a={hash:{scope:"discussions.entry_content"},data:t},s?s.call(e,"Collapse Subdiscussion",a):d.call(e,"t","Collapse Subdiscussion",a)))+"</span>\n</a>\n"
return i}function h(e,t){var a,i=""
i+="\n    "
a=c.invokePartial(s.avatar,"avatar",e&&e.author,r,s,t);(a||0===a)&&(i+=a)
i+="\n  "
return i}function m(e,t){var s,a,i=""
i+="\n          <span>"
if(a=r.hiddenName)s=a.call(e,{hash:{},data:t})
else{a=e&&e.hiddenName
s=typeof a===u?a.call(e,{hash:{},data:t}):a}i+=l(s)+"</span>\n        "
return i}function g(e,t){var a,i=""
i+="\n          "
a=c.invokePartial(s["discussions/author_link"],"discussions/author_link",e,r,s,t);(a||0===a)&&(i+=a)
i+="\n        "
return i}function f(e,t){var s,a,i,n=""
n+='\n          <li><a data-pushstate href="#entry-'
if(a=r.parent_id)s=a.call(e,{hash:{},data:t})
else{a=e&&e.parent_id
s=typeof a===u?a.call(e,{hash:{},data:t}):a}n+=l(s)+'"><i class="icon-replied"></i> '+l((a=r.t||e&&e.t,i={hash:{scope:"discussions.entry_content"},data:t},a?a.call(e,"go_to_parent","Go To Parent",i):d.call(e,"t","go_to_parent","Go To Parent",i)))+"</a></li>\n        "
return n}function y(e,t){var s,a,i=""
i+='\n          <li><a href="#topic" data-pushstate><i class="icon-discussion"></i> '+l((s=r.t||e&&e.t,a={hash:{scope:"discussions.entry_content"},data:t},s?s.call(e,"go_to_topic","Go To Topic",a):d.call(e,"t","go_to_topic","Go To Topic",a)))+"</a></li>\n        "
return i}function v(e,t){var s,a,i=""
i+='\n          <li><a data-event="edit" href="#"><i class="icon-edit"></i> '+l((s=r.t||e&&e.t,a={hash:{i18n_inferred_key:true},data:t},s?s.call(e,"edit_c5fbea07","Edit",a):d.call(e,"t","edit_c5fbea07","Edit",a)))+'</a></li>\n          <li><a data-event="remove" href="#"><i class="icon-trash"></i> '+l((s=r.t||e&&e.t,a={hash:{i18n_inferred_key:true},data:t},s?s.call(e,"delete_a6efa79d","Delete",a):d.call(e,"t","delete_a6efa79d","Delete",a)))+"</a></li>\n        "
return i}function b(e,t){var s,a=""
a+="\n          "
s=r["if"].call(e,e&&e.isAuthorsEntry,{hash:{},inverse:c.noop,fn:c.program(16,k,t),data:t});(s||0===s)&&(a+=s)
a+="\n        "
return a}function k(e,t){var s,a,i=""
i+='\n            <li><a data-event="edit" class="disabled"><i class="icon-edit"></i> '+l((s=r.t||e&&e.t,a={hash:{i18n_inferred_key:true},data:t},s?s.call(e,"edit_disabled_e6a5ea0a","Edit (Disabled)",a):d.call(e,"t","edit_disabled_e6a5ea0a","Edit (Disabled)",a)))+'</a></li>\n            <li><a data-event="remove" class="disabled"><i class="icon-trash"></i> '+l((s=r.t||e&&e.t,a={hash:{i18n_inferred_key:true},data:t},s?s.call(e,"delete_disabled_3196ce47","Delete (Disabled)",a):d.call(e,"t","delete_disabled_3196ce47","Delete (Disabled)",a)))+"</a></li>\n          "
return i}function w(e,t){var s,a,i,n=""
n+='\n          <li><a href="'
if(a=r.speedgraderUrl)s=a.call(e,{hash:{},data:t})
else{a=e&&e.speedgraderUrl
s=typeof a===u?a.call(e,{hash:{},data:t}):a}n+=l(s)+'"><i class="icon-speed-grader"></i> '+l((a=r.t||e&&e.t,i={hash:{scope:"discussions.entry_content"},data:t},a?a.call(e,"open_in_speedgrader","Open in SpeedGrader",i):d.call(e,"t","open_in_speedgrader","Open in SpeedGrader",i)))+"</a></li>\n        "
return n}function S(e,t){var s,a,i,n=""
n+='\n    <div class="discussion-fyi">'
s=(a=r.__i18nliner_escape||e&&e.__i18nliner_escape,i={hash:{},data:t},a?a.call(e,e&&e.editor_href,i):d.call(e,"__i18nliner_escape",e&&e.editor_href,i))
s=(a=r.__i18nliner_concat||e&&e.__i18nliner_concat,i={hash:{},data:t},a?a.call(e,'<a href="',s,'">$1</a>',i):d.call(e,"__i18nliner_concat",'<a href="',s,'">$1</a>',i))
n+=l((a=r.t||e&&e.t,i={hash:{w0:s,"editor.display_name":(s=e&&e.editor,null==s||false===s?s:s.display_name),edited_at:e&&e.edited_at,scope:"discussions.entry_content"},data:t},a?a.call(e,"edited_comment","Edited by *%{editor.display_name}* on %{edited_at}",i):d.call(e,"t","edited_comment","Edited by *%{editor.display_name}* on %{edited_at}",i)))+"</div>\n  "
return n}function E(e,t){var s,a=""
a+='\n    <div class="comment_attachments">\n      '
s=r.each.call(e,e&&e.attachments,{hash:{},inverse:c.noop,fn:c.program(23,A,t),data:t});(s||0===s)&&(a+=s)
a+="\n    </div>\n  "
return a}function A(e,t){var s,a,i,n=""
n+='\n        <div><a href="'
if(a=r.url)s=a.call(e,{hash:{},data:t})
else{a=e&&e.url
s=typeof a===u?a.call(e,{hash:{},data:t}):a}n+=l(s)+'" class="'+l((a=r.mimeClass||e&&e.mimeClass,i={hash:{},data:t},a?a.call(e,e&&e["content-type"],i):d.call(e,"mimeClass",e&&e["content-type"],i)))+'" title="'
if(a=r.filename)s=a.call(e,{hash:{},data:t})
else{a=e&&e.filename
s=typeof a===u?a.call(e,{hash:{},data:t}):a}n+=l(s)+'">'
if(a=r.display_name)s=a.call(e,{hash:{},data:t})
else{a=e&&e.display_name
s=typeof a===u?a.call(e,{hash:{},data:t}):a}n+=l(s)+"</a></div>\n      "
return n}function x(e,t){var s,a,i=""
i+='\n    <a role="button" class="discussion-reply-action entry-control"\n       data-event="addReply"\n       href="#">\n      <i class="icon-replied"></i>\n      <span aria-hidden="true">'+l((s=r.t||e&&e.t,a={hash:{scope:"discussions.entry_content"},data:t},s?s.call(e,"write_a_reply","Reply",a):d.call(e,"t","write_a_reply","Reply",a)))+'</span>\n      <span class="screenreader-only">'+l((s=r.t||e&&e.t,a={hash:{i18n_inferred_key:true},data:t},s?s.call(e,"reply_to_comment_72d96728","Reply to Comment",a):d.call(e,"t","reply_to_comment_72d96728","Reply to Comment",a)))+"</span>\n    </a>\n  "
return i}function R(e,t){var s,a,i=""
i+='\n    <a class="discussion-rate-action entry-control"\n       role="checkbox"\n       data-event="toggleLike"\n       href="#">\n      <i class="icon-like" aria-label="'+l((s=r.t||e&&e.t,a={hash:{scope:"discussions.entry_content"},data:t},s?s.call(e,"like_entry","Like entry",a):d.call(e,"t","like_entry","Like entry",a)))+'"></i>\n    </a>\n  '
return i}_+='<header class="entry-header discussion-section admin-link-hover-area clearfix">\n'
i=r["if"].call(t,t&&t.collapsable,{hash:{},inverse:c.noop,fn:c.program(1,p,a),data:a});(i||0===i)&&(_+=i)
_+="\n  "
i=r.unless.call(t,t&&t.hiddenName,{hash:{},inverse:c.noop,fn:c.program(3,h,a),data:a});(i||0===i)&&(_+=i)
_+='\n  <div class="discussion-header-content right-of-avatar">\n    <div class="pull-left span4">\n      <h2 class="discussion-title">\n        '
i=r["if"].call(t,t&&t.hiddenName,{hash:{},inverse:c.program(7,g,a),fn:c.program(5,m,a),data:a});(i||0===i)&&(_+=i)
_+='\n      </h2>\n      <div class="discussion-pubdate hide-if-collapsed">'+l((n=r.friendlyDatetime||t&&t.friendlyDatetime,o={hash:{pubdate:true,contextSensitive:true},data:a},n?n.call(t,t&&t.created_at,o):d.call(t,"friendlyDatetime",t&&t.created_at,o)))+'</div>\n      <div class="show-if-collapsed discussion-subtitle summary ellipsis">'
if(n=r.summary)i=n.call(t,{hash:{},data:a})
else{n=t&&t.summary
i=typeof n===u?n.call(t,{hash:{},data:a}):n}_+=l(i)+'</div>\n    </div>\n    <div class="admin-links hide-if-collapsed">\n      <a role="button" class="al-trigger dim-till-hover" href="#">\n        <i class="icon-more standalone-icon" aria-hidden="true"></i>\n        <span class="screenreader-only">\n          '+l((n=r.t||t&&t.t,o={hash:{scope:"discussions.entry_content"},data:a},n?n.call(t,"manage_discussion_entry","Manage Discussion Entry",o):d.call(t,"t","manage_discussion_entry","Manage Discussion Entry",o)))+'\n        </span>\n      </a>\n      <ul class="al-options">\n        '
i=r["if"].call(t,t&&t.parent_id,{hash:{},inverse:c.program(11,y,a),fn:c.program(9,f,a),data:a});(i||0===i)&&(_+=i)
_+="\n        "
i=(n=r.ifAll||t&&t.ifAll,o={hash:{},inverse:c.program(15,b,a),fn:c.program(13,v,a),data:a},n?n.call(t,t&&t.canModerate,t&&t.canReply,o):d.call(t,"ifAll",t&&t.canModerate,t&&t.canReply,o));(i||0===i)&&(_+=i)
_+="\n        "
i=r["if"].call(t,t&&t.speedgraderUrl,{hash:{},inverse:c.noop,fn:c.program(18,w,a),data:a});(i||0===i)&&(_+=i)
_+='\n      </ul>\n    </div>\n    <div class="discussion-header-right">\n      <div class="headerBadges show-if-collapsed"></div>\n    </div>\n  </div>\n</header>\n<div class="discussion-section message_wrapper hide-if-collapsed">\n  <span class="message-notification" data-bind="messageNotification"></span>\n  <div data-bind="message" class="message user_content">'+l((n=r.convertApiUserContent||t&&t.convertApiUserContent,o={hash:{},data:a},n?n.call(t,t&&t.message,o):d.call(t,"convertApiUserContent",t&&t.message,o)))+"</div>\n  "
i=r["if"].call(t,t&&t.editor,{hash:{},inverse:c.noop,fn:c.program(20,S,a),data:a});(i||0===i)&&(_+=i)
_+="\n  "
i=r["if"].call(t,t&&t.attachments,{hash:{},inverse:c.noop,fn:c.program(22,E,a),data:a});(i||0===i)&&(_+=i)
_+='\n</div>\n<div class="entry-controls hide-if-collapsed hide-if-replying">\n  <div class="notification" data-bind="notification"></div>\n  '
i=r["if"].call(t,t&&t.inlineReplyLink,{hash:{},inverse:c.noop,fn:c.program(25,x,a),data:a});(i||0===i)&&(_+=i)
_+="\n  "
i=r["if"].call(t,t&&t.canRate,{hash:{},inverse:c.noop,fn:c.program(27,R,a),data:a});(i||0===i)&&(_+=i)
_+='\n  <span class="discussion-rating"></span>\n</div>\n'
return _})
N.registerPartial("discussions/entry_content",z["discussions/-entry-content"])
z[I]
Object(R["a"])(JSON.parse('{"ar":{"discussions":{"deleted_entry":{"deleted":"تم حذف*%{editor_name}* بواسطة %{edited_at}"}}},"cy":{"discussions":{"deleted_entry":{"deleted":"Wedi’i ddileu gan *%{editor_name}* %{edited_at}"}}},"da":{"discussions":{"deleted_entry":{"deleted":"Slettet af *%{editor_name}* den %{edited_at}"}}},"da-x-k12":{"discussions":{"deleted_entry":{"deleted":"Slettet af *%{editor_name}* den %{edited_at}"}}},"de":{"discussions":{"deleted_entry":{"deleted":"Gelöscht von *%{editor_name}* am %{edited_at}"}}},"el":{"discussions":{"deleted_entry":{"deleted":"Διαγράφηκε από τον *%{editor_name}* στις %{edited_at}"}}},"en-AU":{"discussions":{"deleted_entry":{"deleted":"Deleted by *%{editor_name}* on %{edited_at}"}}},"en-CA":{"discussions":{"deleted_entry":{"deleted":"Deleted by *%{editor_name}* on %{edited_at}"}}},"en-GB":{"discussions":{"deleted_entry":{"deleted":"Deleted by *%{editor_name}* on %{edited_at}"}}},"es":{"discussions":{"deleted_entry":{"deleted":"Eliminada por *%{editor_name}* el %{edited_at}"}}},"fa":{"discussions":{"deleted_entry":{"deleted":"توسط *%{editor_name}* در %{edited_at} حذف شد"}}},"fi":{"discussions":{"deleted_entry":{"deleted":"Kohteen poistaja *%{editor_name}* pvm %{edited_at}"}}},"fr":{"discussions":{"deleted_entry":{"deleted":"Entrée supprimée par *%{editor_name}* le %{edited_at}"}}},"fr-CA":{"discussions":{"deleted_entry":{"deleted":"Entrée supprimée par *%{editor_name}* le %{edited_at}"}}},"he":{"discussions":{"deleted_entry":{"deleted":"בוטל ע\\"י *%{editor_name}* ב%{edited_at}"}}},"ht":{"discussions":{"deleted_entry":{"deleted":"Efase pa *%{editor_name}* le %{edited_at}"}}},"hu":{"discussions":{"deleted_entry":{"deleted":"*%{editor_name}* törölte %{edited_at}"}}},"hy":{"discussions":{"deleted_entry":{"deleted":"Ջնջվել է *%{editor_name}* -ի կողմից  %{edited_at}-ին"}}},"is":{"discussions":{"deleted_entry":{"deleted":"*%{editor_name}* eyddi þessu %{edited_at}"}}},"it":{"discussions":{"deleted_entry":{"deleted":"Eliminato da *%{editor_name}* il %{edited_at}"}}},"ja":{"discussions":{"deleted_entry":{"deleted":"%{edited_at}  に *%{editor_name}* によって削除されました"}}},"mi":{"discussions":{"deleted_entry":{"deleted":"Mukua e *%{editor_name}* i runga i %{edited_at}"}}},"nb":{"discussions":{"deleted_entry":{"deleted":"Slettet av *%{editor_name}* den %{edited_at}"}}},"nb-x-k12":{"discussions":{"deleted_entry":{"deleted":"Slettet av *%{editor_name}* den %{edited_at}"}}},"nl":{"discussions":{"deleted_entry":{"deleted":"Verwijderd door *%{editor_name}* op %{edited_at}"}}},"nn":{"discussions":{"deleted_entry":{"deleted":"Sletta av *%{editor_name}* den %{edited_at}"}}},"pl":{"discussions":{"deleted_entry":{"deleted":"Usunięto przez: *%{editor_name}* w dniu: %{edited_at}"}}},"pt":{"discussions":{"deleted_entry":{"deleted":"Eliminado por *%{editor_name}* em %{edited_at}"}}},"pt-BR":{"discussions":{"deleted_entry":{"deleted":"Excluído por *%{editor_name}* em %{edited_at}"}}},"ru":{"discussions":{"deleted_entry":{"deleted":"Удалено *%{editor_name}* %{edited_at}"}}},"sl":{"discussions":{"deleted_entry":{"deleted":"Izbrisal urednik *%{editor_name}* dne %{edited_at}"}}},"sv":{"discussions":{"deleted_entry":{"deleted":"Raderad av *%{editor_name}* den %{edited_at}"}}},"sv-x-k12":{"discussions":{"deleted_entry":{"deleted":"Raderad av *%{editor_name}* den %{edited_at}"}}},"tr":{"discussions":{"deleted_entry":{"deleted":"%{edited_at} tarihinde *%{editor_name}* tarafından silindi"}}},"uk":{"discussions":{"deleted_entry":{"deleted":"Видалено *%{editor_name}* на %{edited_at}"}}},"zh-Hans":{"discussions":{"deleted_entry":{"deleted":"由 *%{editor_name}* 于 %{edited_at} 删除"}}},"zh-Hant":{"discussions":{"deleted_entry":{"deleted":"由 *%{editor_name}* 於 %{edited_at} 刪除"}}}}'))
x["default"].scoped("discussions.deleted_entry")
var P=A.a.default
var M=P.template,L=P.templates=P.templates||{}
var U="discussions/-deleted-entry"
L[U]=M(function(e,t,r,s,a){this.compilerInfo=[4,">= 1.0.0"]
r=this.merge(r,e.helpers)
a=a||{}
var i,n,o,_="",d="function",l=this.escapeExpression,c=this,u=r.helperMissing
function p(e,t){return"collapsable"}function h(e,t){return'data-event="toggleCollapsed"'}_+='<header class="entry-header discussion-section admin-link-hover-area '
if(n=r.read_state)i=n.call(t,{hash:{},data:a})
else{n=t&&t.read_state
i=typeof n===d?n.call(t,{hash:{},data:a}):n}_+=l(i)+" clearfix "
i=r["if"].call(t,t&&t.collapsable,{hash:{},inverse:c.noop,fn:c.program(1,p,a),data:a});(i||0===i)&&(_+=i)
_+='" '
i=r["if"].call(t,t&&t.collapsable,{hash:{},inverse:c.noop,fn:c.program(3,h,a),data:a});(i||0===i)&&(_+=i)
_+='>\n  <div class="discussion-header-content right-of-avatar">\n    <div class="discussion-header-right">\n      <div class="headerBadges show-if-collapsed"></div>\n    </div>\n    <div class="discussion-title">'
i=(n=r.__i18nliner_escape||t&&t.__i18nliner_escape,o={hash:{},data:a},n?n.call(t,t&&t.editor_href,o):u.call(t,"__i18nliner_escape",t&&t.editor_href,o))
i=(n=r.__i18nliner_concat||t&&t.__i18nliner_concat,o={hash:{},data:a},n?n.call(t,'<a href="',i,'" tabindex="0">$1</a>',o):u.call(t,"__i18nliner_concat",'<a href="',i,'" tabindex="0">$1</a>',o))
_+=l((n=r.t||t&&t.t,o={hash:{w0:i,editor_name:t&&t.editor_name,edited_at:t&&t.edited_at,scope:"discussions.deleted_entry"},data:a},n?n.call(t,"deleted","Deleted by *%{editor_name}* on %{edited_at}",o):u.call(t,"t","deleted","Deleted by *%{editor_name}* on %{edited_at}",o)))+"</div>\n  </div>\n</header>\n\n"
return _})
P.registerPartial("discussions/deleted_entry",L["discussions/-deleted-entry"])
var V=L[U]
Object(R["a"])(JSON.parse('{"ar":{"discussions":{"reply_form":{"attach_file":"إرفاق","cancel":"إلغاء","post_reply":"نشر رد","write_a_reply":"رد"}},"editor":{"switch_editor_html":"محرر HTML","switch_editor_rich_text":"Rich Content Editor"},"reply_to_comment_72d96728":"رد على التعليق","reply_to_title_f227303f":"رد إلى %{title}"},"cy":{"discussions":{"reply_form":{"attach_file":"Atodi","cancel":"Canslo","post_reply":"Postio Ateb","write_a_reply":"Ateb"}},"editor":{"switch_editor_html":"Golygydd HTML","switch_editor_rich_text":"Golygydd Cynnwys Cyfoethog"},"reply_to_comment_72d96728":"Ateb sylw","reply_to_title_f227303f":"Ateb %{title}"},"da":{"discussions":{"reply_form":{"attach_file":"Vedhæft","cancel":"Annuller","post_reply":"Læg svar ud","write_a_reply":"Svar"}},"editor":{"switch_editor_html":"HTML-editor","switch_editor_rich_text":"Rich Content Editor"},"reply_to_comment_72d96728":"Svar på kommentar","reply_to_title_f227303f":"Svar til %{title}"},"da-x-k12":{"discussions":{"reply_form":{"attach_file":"Vedhæft","cancel":"Annuller","post_reply":"Læg svar ud","write_a_reply":"Svar"}},"editor":{"switch_editor_html":"HTML-editor","switch_editor_rich_text":"Rich Content Editor"},"reply_to_comment_72d96728":"Svar på kommentar"},"de":{"discussions":{"reply_form":{"attach_file":"Anhängen","cancel":"Abbrechen","post_reply":"Antwort posten","write_a_reply":"Antworten"}},"editor":{"switch_editor_html":"HTML-Editor","switch_editor_rich_text":"Rich-Content-Editor"},"reply_to_comment_72d96728":"Auf Kommentar antworten","reply_to_title_f227303f":"Antwort an %{title}"},"el":{"discussions":{"reply_form":{"attach_file":"Επισύναψη","cancel":"Ακύρωση","post_reply":"Δημοσίευση Απάντησης","write_a_reply":"Απάντηση"}},"editor":{"switch_editor_html":"Επεξεργαστής HTML","switch_editor_rich_text":"Επεξεργαστής Πλούσιου Περιεχομένου-rich content"},"reply_to_comment_72d96728":"Απάντηση στο Σχόλιο"},"en-AU":{"discussions":{"reply_form":{"attach_file":"Attach","cancel":"Cancel","post_reply":"Post Reply","write_a_reply":"Write a reply..."}},"editor":{"switch_editor_html":"HTML Editor","switch_editor_rich_text":"Rich Content Editor"},"reply_to_comment_72d96728":"Reply to Comment","reply_to_title_f227303f":"Reply to %{title}"},"en-CA":{"discussions":{"reply_form":{"attach_file":"Attach","cancel":"Cancel","post_reply":"Post Reply","write_a_reply":"Reply"}},"editor":{"switch_editor_html":"HTML Editor","switch_editor_rich_text":"Rich Content Editor"},"reply_to_comment_72d96728":"Reply to Comment","reply_to_title_f227303f":"Reply to %{title}"},"en-GB":{"discussions":{"reply_form":{"attach_file":"Attach","cancel":"Cancel","post_reply":"Post reply","write_a_reply":"Write a reply..."}},"editor":{"switch_editor_html":"HTML Editor","switch_editor_rich_text":"Rich Content Editor"},"reply_to_comment_72d96728":"Reply to comment","reply_to_title_f227303f":"Reply to %{title}"},"es":{"discussions":{"reply_form":{"attach_file":"Adjuntar","cancel":"Cancelar","post_reply":"Publicar respuesta","write_a_reply":"Responder..."}},"editor":{"switch_editor_html":"Editor HTML","switch_editor_rich_text":"Editor de contenido enriquecido"},"reply_to_comment_72d96728":"Responder al comentario","reply_to_title_f227303f":"Responder a %{title}"},"fa":{"discussions":{"reply_form":{"attach_file":"پیوست کردن","cancel":"لغو","post_reply":"ارسال پاسخ","write_a_reply":"پاسخ"}},"editor":{"switch_editor_html":"ویرایشگر HTML","switch_editor_rich_text":"ویرایشگر محتوای غنی"},"reply_to_comment_72d96728":"پاسخ به نظر"},"fi":{"discussions":{"reply_form":{"attach_file":"Liitä","cancel":"Peruuta","post_reply":"Lähetä vastaus","write_a_reply":"Vastaus"}},"editor":{"switch_editor_html":"HTML-muokkausohjelma","switch_editor_rich_text":"Rikas sisältöeditori"},"reply_to_comment_72d96728":"Vastaa kommenttiin","reply_to_title_f227303f":"Vastaa %{title}"},"fr":{"discussions":{"reply_form":{"attach_file":"Joindre","cancel":"Annuler","post_reply":"Publier une réponse","write_a_reply":"Répondre"}},"editor":{"switch_editor_html":"Éditeur HTML","switch_editor_rich_text":"Éditeur de texte enrichi"},"reply_to_comment_72d96728":"Répondre au commentaire","reply_to_title_f227303f":"Destinataire %{title}"},"fr-CA":{"discussions":{"reply_form":{"attach_file":"Joindre","cancel":"Annuler","post_reply":"Publier une réponse","write_a_reply":"Répondre"}},"editor":{"switch_editor_html":"Éditeur HTML","switch_editor_rich_text":"Éditeur de texte enrichi"},"reply_to_comment_72d96728":"Répondre au commentaire","reply_to_title_f227303f":"Répondre à %{title}"},"he":{"discussions":{"reply_form":{"attach_file":"צירוף","cancel":"ביטול","post_reply":"פרסום תגובה","write_a_reply":"השב/י"}},"editor":{"switch_editor_html":"עורך HTML","switch_editor_rich_text":"עורך תוכן עשיר"},"reply_to_comment_72d96728":"תגובה להערה"},"ht":{"discussions":{"reply_form":{"attach_file":"Ajoute","cancel":"Anile","post_reply":"Repons Piblikasyon","write_a_reply":"Reponn"}},"editor":{"switch_editor_html":"Editè HTML","switch_editor_rich_text":"Editè Kontni Rich"},"reply_to_comment_72d96728":"Reponn Kòmantè","reply_to_title_f227303f":"Reponn a %{title}"},"hu":{"discussions":{"reply_form":{"attach_file":"Csatolás","cancel":"Mégse","post_reply":"Válasz közzététele","write_a_reply":"Válasz"}},"editor":{"switch_editor_html":"HTML szerkesztő","switch_editor_rich_text":"Vizuális szövegszerkesztő"},"reply_to_comment_72d96728":"Válasz a megjegyzésre"},"hy":{"discussions":{"reply_form":{"attach_file":"Կցել","cancel":"Չեղյալ համարել","post_reply":"Տեղադրել հաղորդագրություն","write_a_reply":"Պատասխանել"}},"editor":{"switch_editor_html":"HTML խմբագիր","switch_editor_rich_text":"Ֆորմատավորված տեքստի խմբագիր"},"reply_to_comment_72d96728":"Պատասխանել մեկնաբանության մեջ"},"is":{"discussions":{"reply_form":{"attach_file":"Hengja við","cancel":"Hætta við","post_reply":"Birta svar","write_a_reply":"Svara"}},"editor":{"switch_editor_html":"HTML ritill","switch_editor_rich_text":"Rich Content ritill"},"reply_to_comment_72d96728":"Svara athugasemd","reply_to_title_f227303f":"Svara %{title}"},"it":{"discussions":{"reply_form":{"attach_file":"Allega","cancel":"Annulla","post_reply":"Pubblica risposta","write_a_reply":"Rispondi"}},"editor":{"switch_editor_html":"Editor HTML","switch_editor_rich_text":"Editor di contenuti avanzati"},"reply_to_comment_72d96728":"Rispondi al commento","reply_to_title_f227303f":"Rispondi a %{title}"},"ja":{"discussions":{"reply_form":{"attach_file":"添付","cancel":"キャンセル","post_reply":"返信の投稿","write_a_reply":"返信"}},"editor":{"switch_editor_html":"HTML エディタ","switch_editor_rich_text":"リッチ コンテンツ エディタ"},"reply_to_comment_72d96728":"コメントに返信","reply_to_title_f227303f":"返信先%{title}"},"ko":{"discussions":{"reply_form":{"attach_file":"첨부","cancel":"취소","post_reply":"답변 게시","write_a_reply":"답변 작성..."}}},"mi":{"discussions":{"reply_form":{"attach_file":"Tāpiri","cancel":"Whakakore","post_reply":"Whakairi whakautu","write_a_reply":"Whakautu"}},"editor":{"switch_editor_html":"Ētita HTML","switch_editor_rich_text":"Ētita Ihirangi Whai Rawa"},"reply_to_comment_72d96728":"Whakautu ki te kōrero","reply_to_title_f227303f":"Whakahoki karere ki a %{title}"},"nb":{"discussions":{"reply_form":{"attach_file":"Legg ved","cancel":"Avbryt","post_reply":"Publiser svar","write_a_reply":"Svar"}},"editor":{"switch_editor_html":"HTML-redigering","switch_editor_rich_text":"Rikt Innhold Redigering"},"reply_to_comment_72d96728":"Svar til Kommentar","reply_to_title_f227303f":"Svar til %{title}"},"nb-x-k12":{"discussions":{"reply_form":{"attach_file":"Legg ved","cancel":"Avbryt","post_reply":"Publiser svar","write_a_reply":"Svar"}},"editor":{"switch_editor_html":"HTML-redigering","switch_editor_rich_text":"Rich innholdsredigering"},"reply_to_comment_72d96728":"Svar til Kommentar","reply_to_title_f227303f":"Svar til %{title}"},"nl":{"discussions":{"reply_form":{"attach_file":"Bijlage","cancel":"Annuleren","post_reply":"Antwoord posten","write_a_reply":"Beantwoorden"}},"editor":{"switch_editor_html":"HTML Editor","switch_editor_rich_text":"Rich Content Editor"},"reply_to_comment_72d96728":"Antwoorden om commentaar te geven","reply_to_title_f227303f":"Antwoorden aan %{title}"},"nn":{"discussions":{"reply_form":{"attach_file":"Legg ved","cancel":"Avbryt","post_reply":"Legg inn svaret","write_a_reply":"Svar"}},"editor":{"switch_editor_html":"HTML-redigeringsprogram","switch_editor_rich_text":"Redigeringsprogram for rikt innhald"},"reply_to_comment_72d96728":"Svar til kommentar","reply_to_title_f227303f":"Svar til %{title}"},"pl":{"discussions":{"reply_form":{"attach_file":"Załącz","cancel":"Anuluj","post_reply":"Wyślij odpowiedź","write_a_reply":"Odpowiedź"}},"editor":{"switch_editor_html":"Edytor HTML","switch_editor_rich_text":"Edytor wzbogaconej zawartości"},"reply_to_comment_72d96728":"Odpowiedz na komentarz","reply_to_title_f227303f":"Odpowiedz %{title}"},"pt":{"discussions":{"reply_form":{"attach_file":"Anexar","cancel":"Cancelar","post_reply":"Publicar resposta","write_a_reply":"Responder"}},"editor":{"switch_editor_html":"Editor HTML","switch_editor_rich_text":"Editor de conteúdo avançado"},"reply_to_comment_72d96728":"Responder a comentário","reply_to_title_f227303f":"Responder para %{title}"},"pt-BR":{"discussions":{"reply_form":{"attach_file":"Anexar","cancel":"Cancelar","post_reply":"Publicar resposta","write_a_reply":"Responder"}},"editor":{"switch_editor_html":"Editor de HTML","switch_editor_rich_text":"Editor de conteúdo enriquecido"},"reply_to_comment_72d96728":"Responder comentário","reply_to_title_f227303f":"Responder para %{title}"},"ru":{"discussions":{"reply_form":{"attach_file":"Вложить","cancel":"Отменить","post_reply":"Опубликовать ответ","write_a_reply":"Ответ"}},"editor":{"switch_editor_html":"Редактор HTML","switch_editor_rich_text":"Редактор форматированного текста"},"reply_to_comment_72d96728":"Ответить в комментарии","reply_to_title_f227303f":"Ответить %{title}"},"sl":{"discussions":{"reply_form":{"attach_file":"Dodaj","cancel":"Prekliči","post_reply":"Objavi odgovor","write_a_reply":"Odgovori"}},"editor":{"switch_editor_html":"Urejevalnik HTML","switch_editor_rich_text":"Urejevalnik"},"reply_to_comment_72d96728":"Odgovori na komentar","reply_to_title_f227303f":"Odgovori %{title}"},"sv":{"discussions":{"reply_form":{"attach_file":"Bifoga","cancel":"Avbryt","post_reply":"Skicka svar","write_a_reply":"Svara"}},"editor":{"switch_editor_html":"HTML Editor","switch_editor_rich_text":"Innehållsredigerare"},"reply_to_comment_72d96728":"Svara på kommentar","reply_to_title_f227303f":"Svara till %{title}"},"sv-x-k12":{"discussions":{"reply_form":{"attach_file":"Bifoga","cancel":"Avbryt","post_reply":"Skicka svar","write_a_reply":"Svara"}},"editor":{"switch_editor_html":"HTML-redigeraren","switch_editor_rich_text":"Innehållsredigerare"},"reply_to_comment_72d96728":"Svara på kommentar"},"tr":{"discussions":{"reply_form":{"attach_file":"Ekle","cancel":"İptal","post_reply":"Gönderiyi Yanıtla","write_a_reply":"Yanıtla"}},"editor":{"switch_editor_html":"HTML Düzenleyici","switch_editor_rich_text":"Zengin İçerik Editörü"},"reply_to_comment_72d96728":"Yoruma Cevap Yaz"},"uk":{"discussions":{"reply_form":{"attach_file":"Приєднати","cancel":"Скасувати","post_reply":"Опублікувати відповідь","write_a_reply":"Відповісти"}},"editor":{"switch_editor_html":"HTML-редактор","switch_editor_rich_text":"Редактор збагаченого контенту"},"reply_to_comment_72d96728":"Відповісти на коментар"},"zh-Hans":{"discussions":{"reply_form":{"attach_file":"附件","cancel":"取消","post_reply":"帖子回复","write_a_reply":"回复"}},"editor":{"switch_editor_html":"HTML 编辑器","switch_editor_rich_text":"富内容编辑器"},"reply_to_comment_72d96728":"回复评论","reply_to_title_f227303f":"回复%{title}"},"zh-Hant":{"discussions":{"reply_form":{"attach_file":"附加","cancel":"取消","post_reply":"發佈回復","write_a_reply":"回復"}},"editor":{"switch_editor_html":"HTML 編輯器","switch_editor_rich_text":"富內容編輯器"},"reply_to_comment_72d96728":"回復評論","reply_to_title_f227303f":"回復%{title}"}}'))
x["default"].scoped("discussions.reply_form")
var F=A.a.default
var B=F.template,H=F.templates=F.templates||{}
var G="discussions/-reply-form"
H[G]=B(function(e,t,r,s,a){this.compilerInfo=[4,">= 1.0.0"]
r=this.merge(r,e.helpers)
a=a||{}
var i,n,o,_="",d=r.helperMissing,l=this.escapeExpression,c=this,u="function"
function p(e,t){var s,a,i,n=""
n+='\n  <div class="discussion-entry-reply-area reply-box-container hide-if-collapsed hide-if-replying">\n    <div class="notification" data-bind="notification"></div>\n    <a role="button" class="discussion-reply-action discussion-reply-box" data-event="addReply" href="#">\n      <i class="icon-replied"></i>\n      <span aria-hidden="true">'+l((a=r.t||e&&e.t,i={hash:{scope:"discussions.reply_form"},data:t},a?a.call(e,"write_a_reply","Reply",i):d.call(e,"t","write_a_reply","Reply",i)))+"</span>\n      "
s=r["if"].call(e,e&&e.isForMainDiscussion,{hash:{},inverse:c.program(4,m,t),fn:c.program(2,h,t),data:t});(s||0===s)&&(n+=s)
n+="\n    </a>\n  </div>\n"
return n}function h(e,t){var s,a,i=""
i+='\n        <span class="screenreader-only">'+l((s=r.t||e&&e.t,a={hash:{title:e&&e.title,i18n_inferred_key:true},data:t},s?s.call(e,"reply_to_title_f227303f","Reply to %{title}",a):d.call(e,"t","reply_to_title_f227303f","Reply to %{title}",a)))+"</span>\n      "
return i}function m(e,t){var s,a,i=""
i+='\n        <span class="screenreader-only">'+l((s=r.t||e&&e.t,a={hash:{i18n_inferred_key:true},data:t},s?s.call(e,"reply_to_comment_72d96728","Reply to Comment",a):d.call(e,"t","reply_to_comment_72d96728","Reply to Comment",a)))+"</span>\n      "
return i}function g(e,t){var s,a,i=""
i+='\n      <div class="discussion-top-right-header pull-right">\n        <div class="toggle-wrapper pull-right">\n          <a href="#">\n            '+l((s=r.t||e&&e.t,a={hash:{scope:"discussions.reply_form"},data:t},s?s.call(e,"#editor.switch_editor_html","HTML Editor",a):d.call(e,"t","#editor.switch_editor_html","HTML Editor",a)))+'\n          </a>\n          <a href="#" style="display:none;">\n            '+l((s=r.t||e&&e.t,a={hash:{scope:"discussions.reply_form"},data:t},s?s.call(e,"#editor.switch_editor_rich_text","Rich Content Editor",a):d.call(e,"t","#editor.switch_editor_rich_text","Rich Content Editor",a)))+"\n          </a>\n        </div>\n      </div>\n    "
return i}function f(e,t){return"root_"}function y(e,t){var s,a,i=""
i+='\n          <a href="#" class="discussion-reply-add-attachment discussion-reply-action icon-paperclip"\n             data-event="addReplyAttachment">'+l((s=r.t||e&&e.t,a={hash:{scope:"discussions.reply_form"},data:t},s?s.call(e,"attach_file","Attach",a):d.call(e,"t","attach_file","Attach",a)))+"</a>\n        "
return i}i=r["if"].call(t,t&&t.showBoxReplyLink,{hash:{},inverse:c.noop,fn:c.program(1,p,a),data:a});(i||0===i)&&(_+=i)
_+="\n<div class='discussion-entry-reply-area hide-if-collapsed show-if-replying'>\n  <form class=\"discussion-reply-form\">\n    "
i=r.unless.call(t,t&&t.use_rce_enhancements,{hash:{},inverse:c.noop,fn:c.program(6,g,a),data:a});(i||0===i)&&(_+=i)
_+='\n    <div class="clearfix" aria-hidden="true">&nbsp;</div>\n    <textarea class="reply-textarea"\n              id="'
i=r["if"].call(t,t&&t.root,{hash:{},inverse:c.noop,fn:c.program(8,f,a),data:a});(i||0===i)&&(_+=i)
_+="reply_message_for_"
if(n=r.id)i=n.call(t,{hash:{},data:a})
else{n=t&&t.id
i=typeof n===u?n.call(t,{hash:{},data:a}):n}_+=l(i)+'"></textarea>\n\n    <div class="clearfix">\n      <div class="discussion-reply-attachments-container">\n        <ul class="discussion-reply-attachments"></ul>\n        '
i=r["if"].call(t,t&&t.canAttach,{hash:{},inverse:c.noop,fn:c.program(10,y,a),data:a});(i||0===i)&&(_+=i)
_+='\n      </div>\n\n      <div class="discussion-reply-buttons">\n        <a href="javascript:" class="cancel_button btn btn-small">'+l((n=r.t||t&&t.t,o={hash:{scope:"discussions.reply_form"},data:a},n?n.call(t,"cancel","Cancel",o):d.call(t,"t","cancel","Cancel",o)))+'</a>\n        <button class="btn btn-primary btn-small" type="submit">'+l((n=r.t||t&&t.t,o={hash:{scope:"discussions.reply_form"},data:a},n?n.call(t,"post_reply","Post Reply",o):d.call(t,"t","post_reply","Post Reply",o)))+"</button>\n      </div>\n    </div>\n  </form>\n</div>\n"
return _})
F.registerPartial("discussions/reply_form",H["discussions/-reply-form"])
var K=H[G]
var W=A.a.default
var J=W.template,q=W.templates=W.templates||{}
var Y="discussions/entry-with-replies"
q[Y]=J(function(e,t,r,s,a){this.compilerInfo=[4,">= 1.0.0"]
r=this.merge(r,e.helpers)
s=this.merge(s,e.partials)
a=a||{}
var i,n,o="",_=this,d="function",l=this.escapeExpression
function c(e,t){return"deleted-discussion-entry"}function u(e,t){return"can-reply"}function p(e,t){var a,i=""
i+="\n      "
a=_.invokePartial(s["discussions/deleted_entry"],"discussions/deleted_entry",e,r,s,t);(a||0===a)&&(i+=a)
i+="\n    "
return i}function h(e,t){var a,i=""
i+="\n      "
a=_.invokePartial(s["discussions/entry_content"],"discussions/entry_content",e,r,s,t);(a||0===a)&&(i+=a)
i+="\n    "
return i}function m(e,t){var a,i=""
i+="\n    "
a=_.invokePartial(s["discussions/reply_form"],"discussions/reply_form",e,r,s,t);(a||0===a)&&(i+=a)
i+="\n  "
return i}function g(e,t){var a,i=""
i+='\n  <div class="bottom-reply-with-box">\n    '
a=_.invokePartial(s["discussions/reply_form"],"discussions/reply_form",e,r,s,t);(a||0===a)&&(i+=a)
i+="\n  </div>\n"
return i}o+='<article class="discussion_entry can_be_marked_as_read '
if(n=r.read_state)i=n.call(t,{hash:{},data:a})
else{n=t&&t.read_state
i=typeof n===d?n.call(t,{hash:{},data:a}):n}o+=l(i)+"-onload "
if(n=r.read_state)i=n.call(t,{hash:{},data:a})
else{n=t&&t.read_state
i=typeof n===d?n.call(t,{hash:{},data:a}):n}o+=l(i)+" "
i=r["if"].call(t,t&&t.deleted,{hash:{},inverse:_.noop,fn:_.program(1,c,a),data:a});(i||0===i)&&(o+=i)
o+=" "
i=r["if"].call(t,t&&t.canReply,{hash:{},inverse:_.noop,fn:_.program(3,u,a),data:a});(i||0===i)&&(o+=i)
o+='"\n         data-mark-read-url="'
if(n=r.mark_read_url)i=n.call(t,{hash:{},data:a})
else{n=t&&t.mark_read_url
i=typeof n===d?n.call(t,{hash:{},data:a}):n}o+=l(i)+'">\n  <a href="#"\n     class="discussion-read-state-btn"\n     role="button"\n     title=""\n     data-event="toggleRead">\n    <div class="discussion-read-state tooltip data-tooltip"></div>\n  </a>\n  <div class="entry-content" data-should-position>\n    '
i=r["if"].call(t,t&&t.deleted,{hash:{},inverse:_.program(7,h,a),fn:_.program(5,p,a),data:a});(i||0===i)&&(o+=i)
o+="\n  </div>\n  "
i=r["if"].call(t,t&&t.allowsThreadedReplies,{hash:{},inverse:_.noop,fn:_.program(9,m,a),data:a});(i||0===i)&&(o+=i)
o+='\n</article>\n<div class="replies hide-if-collapsed"></div>\n'
i=r["if"].call(t,t&&t.allowsSideComments,{hash:{},inverse:_.noop,fn:_.program(11,g,a),data:a});(i||0===i)&&(o+=i)
o+="\n\n\n"
return o})
var Q=q[Y]
Object(R["a"])(JSON.parse('{"ar":{"discussions":{"entry_stats":{"show_more":"عرض المزيد"}}},"cy":{"discussions":{"entry_stats":{"show_more":"Dangos mwy"}}},"da":{"discussions":{"entry_stats":{"show_more":"Vis mere"}}},"da-x-k12":{"discussions":{"entry_stats":{"show_more":"Vis mere"}}},"de":{"discussions":{"entry_stats":{"show_more":"Mehr anzeigen"}}},"el":{"discussions":{"entry_stats":{"show_more":"Εμφάνιση περισσότερων πληροφοριών"}}},"en-AU":{"discussions":{"entry_stats":{"show_more":"Show more"}}},"en-CA":{"discussions":{"entry_stats":{"show_more":"Show more"}}},"en-GB":{"discussions":{"entry_stats":{"show_more":"Show more"}}},"es":{"discussions":{"entry_stats":{"show_more":"Mostrar más"}}},"fa":{"discussions":{"entry_stats":{"show_more":"نمایش بیشتر"}}},"fi":{"discussions":{"entry_stats":{"show_more":"Näytä lisää"}}},"fr":{"discussions":{"entry_stats":{"show_more":"Afficher plus"}}},"fr-CA":{"discussions":{"entry_stats":{"show_more":"Afficher plus"}}},"he":{"discussions":{"entry_stats":{"show_more":"הצג עוד"}}},"ht":{"discussions":{"entry_stats":{"show_more":"Afiche plis"}}},"hu":{"discussions":{"entry_stats":{"show_more":"Több információ megjelenítése"}}},"hy":{"discussions":{"entry_stats":{"show_more":"Ցույց տալ ավելին"}}},"is":{"discussions":{"entry_stats":{"show_more":"Sýna meira"}}},"it":{"discussions":{"entry_stats":{"show_more":"Mostra di più"}}},"ja":{"discussions":{"entry_stats":{"show_more":"詳細"}}},"ko":{"discussions":{"entry_stats":{"show_more":"자세히 표시"}}},"mi":{"discussions":{"entry_stats":{"show_more":"Whakāturia mai ētahi atu"}}},"nb":{"discussions":{"entry_stats":{"show_more":"Vis mer"}}},"nb-x-k12":{"discussions":{"entry_stats":{"show_more":"Vis mer"}}},"nl":{"discussions":{"entry_stats":{"show_more":"Meer tonen"}}},"nn":{"discussions":{"entry_stats":{"show_more":"Vis meir"}}},"pl":{"discussions":{"entry_stats":{"show_more":"Pokaż więcej"}}},"pt":{"discussions":{"entry_stats":{"show_more":"Mostrar mais"}}},"pt-BR":{"discussions":{"entry_stats":{"show_more":"Mostrar mais"}}},"ru":{"discussions":{"entry_stats":{"show_more":"Показать больше"}}},"sl":{"discussions":{"entry_stats":{"show_more":"Prikaži več"}}},"sv":{"discussions":{"entry_stats":{"show_more":"Visa mer"}}},"sv-x-k12":{"discussions":{"entry_stats":{"show_more":"Visa mer"}}},"tr":{"discussions":{"entry_stats":{"show_more":"Daha fazla göster"}}},"uk":{"discussions":{"entry_stats":{"show_more":"Показати більше"}}},"zh-Hans":{"discussions":{"entry_stats":{"show_more":"显示更多"}}},"zh-Hant":{"discussions":{"entry_stats":{"show_more":"顯示更多"}}}}'))
x["default"].scoped("discussions.entry_stats")
var Z=A.a.default
var X=Z.template,ee=Z.templates=Z.templates||{}
var te="discussions/entryStats"
ee[te]=X(function(e,t,r,s,a){this.compilerInfo=[4,">= 1.0.0"]
r=this.merge(r,e.helpers)
a=a||{}
var i,n,o,_="",d="function",l=this.escapeExpression,c=r.helperMissing,u=this
function p(e,t){var s,a=""
a+="\n<a href='#'>\n"
s=r["if"].call(e,e&&e.moreText,{hash:{},inverse:u.program(4,m,t),fn:u.program(2,h,t),data:t});(s||0===s)&&(a+=s)
a+="\n</a>\n"
return a}function h(e,t){var s,a,i=""
i+="\n  "
if(a=r.moreText)s=a.call(e,{hash:{},data:t})
else{a=e&&e.moreText
s=typeof a===d?a.call(e,{hash:{},data:t}):a}i+=l(s)+"\n"
return i}function m(e,t){var s,a,i=""
i+="\n  "+l((s=r.t||e&&e.t,a={hash:{scope:"discussions.entry_stats"},data:t},s?s.call(e,"show_more","Show more",a):c.call(e,"t","show_more","Show more",a)))+"\n"
return i}i=r["if"].call(t,t&&t.showMore,{hash:{},inverse:u.noop,fn:u.program(1,p,a),data:a});(i||0===i)&&(_+=i)
_+="\n<div class='new-and-total-badge'>\n  <span class=\"new-items\">"+l((n=r.n||t&&t.n,o={hash:{},data:a},n?n.call(t,(i=t&&t.stats,null==i||false===i?i:i.unread),o):c.call(t,"n",(i=t&&t.stats,null==i||false===i?i:i.unread),o)))+'</span>\n  <span class="total-items">'+l((n=r.n||t&&t.n,o={hash:{},data:a},n?n.call(t,(i=t&&t.stats,null==i||false===i?i:i.total),o):c.call(t,"n",(i=t&&t.stats,null==i||false===i?i:i.total),o)))+"</span>\n</div>\n"
return _})
var re=ee[te]
Object(R["a"])(JSON.parse('{"ar":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*حدث خطأ*، يرجى نشر ردك مرة أخرى لاحقًا","discussions":{"reply":{"saving_reply":"يجري حفظ الرد..."}}},"cy":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*Gwall*, cyflwynwch eich ateb rywbryd eto","discussions":{"reply":{"saving_reply":"Wrthi’n cadw ateb..."}}},"da":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*Der opstod en fejl*, læg dit svar ud igen senere","discussions":{"reply":{"saving_reply":"Gemmer svar ..."}}},"da-x-k12":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*Der opstod en fejl*, læg dit svar ud igen senere","discussions":{"reply":{"saving_reply":"Gemmer svar ..."}}},"de":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*Ein Fehler ist aufgetreten*, bitte posten Sie Ihre Antwort später noch einmal.","discussions":{"reply":{"saving_reply":"Antwort wird gespeichert ..."}}},"el":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*Συνέβη ένα σφάλμα*, παρακαλούμε απαντήστε ξανά αργότερα","discussions":{"reply":{"saving_reply":"Αποθήκευση απάντησης..."}}},"en-AU":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*An error occurred.* Please post your reply again later.","discussions":{"reply":{"saving_reply":"Saving reply..."}}},"en-CA":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*An error occurred*, please post your reply again later","discussions":{"reply":{"saving_reply":"Saving reply..."}}},"en-GB":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*An error occurred*; please post your reply again later","discussions":{"reply":{"saving_reply":"Saving reply..."}}},"es":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*Se ha producido un error*, por favor envíe su respuesta en otro momento","discussions":{"reply":{"saving_reply":"Guardando la respuesta..."}}},"fa":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*یک خطا رخ داد*، لطفا پاسخ خود را بعداً دوباره ارسال نمایید","discussions":{"reply":{"saving_reply":"در حال ذخیره سازی پاسخ..."}}},"fi":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*Ilmeni virhe*, lähetä vastauksesi myöhemmin uudelleen","discussions":{"reply":{"saving_reply":"Vastausta tallennetaan..."}}},"fr":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*Une erreur s’est produite*, veuillez réessayer de publier votre réponse ultérieurement.","discussions":{"reply":{"saving_reply":"Enregistrement de la réponse..."}}},"fr-CA":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*Une erreur s’est produite*, veuillez réessayer de publier votre réponse ultérieurement.","discussions":{"reply":{"saving_reply":"Enregistrement de la réponse..."}}},"he":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*אירעה שגיאה*, בבקשה לפרסם שוב את תשובתך מאוחר יותר","discussions":{"reply":{"saving_reply":"שומר תגובה..."}}},"ht":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*Gen yon erè ki fèt*, tanpri poste repons ou an aprè","discussions":{"reply":{"saving_reply":"Anrejistreman repons..."}}},"hu":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*Hiba történt*, kérjük, próbálja meg újból a válasz küldését","discussions":{"reply":{"saving_reply":"Válasz mentése..."}}},"hy":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*Սխալ է տեղի ունեցել*, խնդրում ենք ավելի ուշ տեղադրել ձեր պատասխանը ","discussions":{"reply":{"saving_reply":"Պատասխանը պահպանվում է..."}}},"is":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*Villa kom upp* Birtu svarið þitt síðar.","discussions":{"reply":{"saving_reply":"Vista svar..."}}},"it":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*Si è verificato un errore*, pubblica di nuovo la tua risposta in seguito","discussions":{"reply":{"saving_reply":"Salvataggio risposta in corso..."}}},"ja":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*エラーが発生しました*。後でもう一度投稿を投稿してください","discussions":{"reply":{"saving_reply":"返信を保存しています..."}}},"ko":{"discussions":{"reply":{"saving_reply":"답변 저장 중..."}}},"mi":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*I puta tētahi hapa*, tēne koa p tō whakautu i muri","discussions":{"reply":{"saving_reply":"Te tiaki i whakautu ..."}}},"nb":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*Det oppstod et avvik*, vennligst publiser svaret ditt senere","discussions":{"reply":{"saving_reply":"Lagrer svar..."}}},"nb-x-k12":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*Det oppstod et avvik*, vennligst publiser svaret ditt senere","discussions":{"reply":{"saving_reply":"Lagrer svar..."}}},"nl":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*Er is een fout opgetreden*, post je antwoord later opnieuw","discussions":{"reply":{"saving_reply":"Bezig met opslaan van antwoord..."}}},"nn":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*Det oppstod ein feil*, legg inn svaret ditt på nytt seinare","discussions":{"reply":{"saving_reply":"Lagrar svar..."}}},"pl":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*Wystąpił błąd*, wyślij swoją odpowiedź później","discussions":{"reply":{"saving_reply":"Zapisywanie odpowiedzi..."}}},"pt":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*Ocorreu um erro*, por favor publique a sua resposta novamente mais tarde, por favor","discussions":{"reply":{"saving_reply":"A guardar a resposta..."}}},"pt-BR":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*Ocorreu um erro*, por favor envie sua resposta novamente mais tarde","discussions":{"reply":{"saving_reply":"Salvando resposta..."}}},"ru":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*Произошла ошибка*, пожалуйста, попробуйте опубликовать ваш ответ позже","discussions":{"reply":{"saving_reply":"Сохранение ответа"}}},"sl":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*Prišlo je do napake*, svoj odgovor znova objavite pozneje.","discussions":{"reply":{"saving_reply":"Shranjevanje odgovora ..."}}},"sv":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*Ett fel uppstod*, vänligen skicka in ditt svar igen senare.","discussions":{"reply":{"saving_reply":"Sparar svar..."}}},"sv-x-k12":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*Ett fel uppstod*, vänligen skicka in ditt svar igen senare.","discussions":{"reply":{"saving_reply":"Sparar svar..."}}},"tr":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*Bir hata oluştu*, lütfen cevabınızı daha sonra tekrar gönderin","discussions":{"reply":{"saving_reply":"Cevap kaydediliyor..."}}},"uk":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*Виникла помилка*, будь ласка напишіть свою відповідь пізніше","discussions":{"reply":{"saving_reply":"Збереження відповіді..."}}},"zh-Hans":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*发生错误*，请稍候再次发表您的回复","discussions":{"reply":{"saving_reply":"正在保存答复..."}}},"zh-Hant":{"an_error_occurred_please_post_your_reply_again_lat_b0220ac6":"*發生錯誤*，請稍後重新發佈您的回復","discussions":{"reply":{"saving_reply":"正在保存回復..."}}}}'))
var se=x["default"].scoped("discussions.reply")
var ae=r("5Ky4")
Object(R["a"])(JSON.parse('{"ar":{"discussions":{"reply_attachment":{"attachment_label":"مرفق","remove_attachment":"إزالة"}}},"cy":{"discussions":{"reply_attachment":{"attachment_label":"Atodiad","remove_attachment":"tynnu"}}},"da":{"discussions":{"reply_attachment":{"attachment_label":"Vedhæftet fil","remove_attachment":"fjern"}}},"da-x-k12":{"discussions":{"reply_attachment":{"attachment_label":"Vedhæftet fil","remove_attachment":"fjern"}}},"de":{"discussions":{"reply_attachment":{"attachment_label":"Anhang","remove_attachment":"entfernen"}}},"el":{"discussions":{"reply_attachment":{"attachment_label":"Επισυναπτόμενο αρχείο","remove_attachment":"αφαίρεση"}}},"en-AU":{"discussions":{"reply_attachment":{"attachment_label":"Attachment","remove_attachment":"remove"}}},"en-CA":{"discussions":{"reply_attachment":{"attachment_label":"Attachment","remove_attachment":"remove"}}},"en-GB":{"discussions":{"reply_attachment":{"attachment_label":"Attachment","remove_attachment":"remove"}}},"es":{"discussions":{"reply_attachment":{"attachment_label":"Archivo adjunto","remove_attachment":"eliminar"}}},"fa":{"discussions":{"reply_attachment":{"attachment_label":"پیوست","remove_attachment":"حذف"}}},"fi":{"discussions":{"reply_attachment":{"attachment_label":"Liite","remove_attachment":"poista"}}},"fr":{"discussions":{"reply_attachment":{"attachment_label":"Pièce jointe","remove_attachment":"supprimer"}}},"fr-CA":{"discussions":{"reply_attachment":{"attachment_label":"Pièce jointe","remove_attachment":"supprimer"}}},"he":{"discussions":{"reply_attachment":{"attachment_label":"תצריף","remove_attachment":"הסרה"}}},"ht":{"discussions":{"reply_attachment":{"attachment_label":"Atachman","remove_attachment":"elimine"}}},"hu":{"discussions":{"reply_attachment":{"attachment_label":"Melléklet","remove_attachment":"eltávolítás"}}},"hy":{"discussions":{"reply_attachment":{"attachment_label":"Ներդիր","remove_attachment":"հանել"}}},"is":{"discussions":{"reply_attachment":{"attachment_label":"Viðhengi","remove_attachment":"fjarlægja"}}},"it":{"discussions":{"reply_attachment":{"attachment_label":"Allegato","remove_attachment":"rimuovi"}}},"ja":{"discussions":{"reply_attachment":{"attachment_label":"添付ファイル","remove_attachment":"削除"}}},"ko":{"discussions":{"reply_attachment":{"attachment_label":"첨부","remove_attachment":"제거"}}},"mi":{"discussions":{"reply_attachment":{"attachment_label":"Āpitihanga","remove_attachment":"tango"}}},"nb":{"discussions":{"reply_attachment":{"attachment_label":"Vedlegg","remove_attachment":"fjern"}}},"nb-x-k12":{"discussions":{"reply_attachment":{"attachment_label":"Vedlegg","remove_attachment":"fjern"}}},"nl":{"discussions":{"reply_attachment":{"attachment_label":"Bijlage","remove_attachment":"verwijderen"}}},"nn":{"discussions":{"reply_attachment":{"attachment_label":"Vedlegg","remove_attachment":"fjern"}}},"pl":{"discussions":{"reply_attachment":{"attachment_label":"Załącznik","remove_attachment":"usuń"}}},"pt":{"discussions":{"reply_attachment":{"attachment_label":"Anexo","remove_attachment":"remover"}}},"pt-BR":{"discussions":{"reply_attachment":{"attachment_label":"Anexo","remove_attachment":"remover"}}},"ru":{"discussions":{"reply_attachment":{"attachment_label":"Вложение","remove_attachment":"Удаление"}}},"sl":{"discussions":{"reply_attachment":{"attachment_label":"Priloga","remove_attachment":"odstrani"}}},"sv":{"discussions":{"reply_attachment":{"attachment_label":"Bilaga","remove_attachment":"ta bort"}}},"sv-x-k12":{"discussions":{"reply_attachment":{"attachment_label":"Bilaga","remove_attachment":"ta bort"}}},"tr":{"discussions":{"reply_attachment":{"attachment_label":"Dosya Eki","remove_attachment":"kaldır"}}},"uk":{"discussions":{"reply_attachment":{"attachment_label":"Вкладення","remove_attachment":"видалити"}}},"zh-Hans":{"discussions":{"reply_attachment":{"attachment_label":"附件","remove_attachment":"删除"}}},"zh-Hant":{"discussions":{"reply_attachment":{"attachment_label":"附件","remove_attachment":"刪除"}}}}'))
x["default"].scoped("discussions.reply_attachment")
var ie=A.a.default
var ne=ie.template,oe=ie.templates=ie.templates||{}
var _e="discussions/-reply-attachment"
oe[_e]=ne(function(e,t,r,s,a){this.compilerInfo=[4,">= 1.0.0"]
r=this.merge(r,e.helpers)
a=a||{}
var i,n,o,_="",d="function",l=this.escapeExpression,c=r.helperMissing
_+='<li>\n  <label class="screenreader-only" for="attachment_'
if(n=r.uniqid)i=n.call(t,{hash:{},data:a})
else{n=t&&t.uniqid
i=typeof n===d?n.call(t,{hash:{},data:a}):n}_+=l(i)+'">'+l((n=r.t||t&&t.t,o={hash:{scope:"discussions.reply_attachment"},data:a},n?n.call(t,"attachment_label","Attachment",o):c.call(t,"t","attachment_label","Attachment",o)))+'</label>\n  <input name="attachment" type="file" id="attachment_'
if(n=r.uniqid)i=n.call(t,{hash:{},data:a})
else{n=t&&t.uniqid
i=typeof n===d?n.call(t,{hash:{},data:a}):n}_+=l(i)+'">\n  <a href="#" class=\'discussion-reply-action\' data-event="removeReplyAttachment">'+l((n=r.t||t&&t.t,o={hash:{scope:"discussions.reply_attachment"},data:a},n?n.call(t,"remove_attachment","remove",o):c.call(t,"t","remove_attachment","remove",o)))+"</a>\n</li>\n"
return _})
ie.registerPartial("discussions/reply_attachment",oe["discussions/-reply-attachment"])
var de=oe[_e]
var le=r("Nxtp")
var ce=r("/iD7")
var ue=r("21i1")
r("Z+Ib")
ue["a"].preloadRemoteModule()
class pe{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};["attachKeyboardShortcuts","hide","hideNotification","submit","onPostReplySuccess","onPostReplyError"].forEach(e=>this[e]=this[e].bind(this))
this.view=e
this.options=t
this.el=this.view.$(".discussion-reply-action:first")
this.discussionEntry=this.el.closest(".discussion_entry")
0===this.discussionEntry.length&&(this.discussionEntry=this.el.closest(".entry"))
this.form=this.discussionEntry.find("form.discussion-reply-form:first").submit(Object(le["a"])(this.submit))
this.textArea=this.getEditingElement()
this.form.find(".cancel_button").click(this.hide)
this.form.on("click",".toggle-wrapper a",e=>{e.preventDefault()
ue["a"].callOnRCE(this.textArea,"toggle")
return n()(e.currentTarget).siblings("a").andSelf().toggle()})
this.form.delegate(".alert .close","click",Object(le["a"])(this.hideNotification))
this.editing=false
_.a.defer(this.attachKeyboardShortcuts)}attachKeyboardShortcuts(){if(!ENV.use_rce_enhancements)return this.view.$(".toggle-wrapper").first().before((new ce["a"]).render().$el)}toggle(){return this.editing?this.hide():this.edit()}edit(){this.form.addClass("replying")
this.discussionEntry.addClass("replying")
ue["a"].initSidebar()
ue["a"].loadNewEditor(this.textArea,{focus:true,manageParent:true,tinyOptions:{width:"100%"}})
this.editing=true
return this.trigger("edit",this)}createTextArea(e){return n()("<textarea/>").addClass("reply-textarea").attr("id",e).attr("aria-hidden","true")}replaceTextArea(e){ue["a"].destroyRCE(this.textArea)
this.textArea=this.createTextArea(e)
this.textArea.val(this.content)
n()("#tinymce-parent-of-".concat(e)).replaceWith(this.textArea)}hide(){const e=this.textArea.attr("id")
this.content=ue["a"].callOnRCE(this.textArea,"get_code")
this.form.removeClass("replying")
this.discussionEntry.removeClass("replying")
this.editing=false
this.replaceTextArea(e)
this.trigger("hide",this)
return this.discussionEntry.find(".discussion-reply-action").focus()}hideNotification(){return this.view.model.set("notification","")}submit(){this.hide()
this.view.model.set("notification","<div class='alert alert-info'>".concat(Object(ae["a"])(se.t("saving_reply","Saving reply...")),"</div>"))
const e=new b(this.getModelAttributes())
e.save(null,{success:this.onPostReplySuccess,error:this.onPostReplyError,multipart:e.get("attachment"),proxyAttachment:true})
return this.removeAttachments()}getEditingElement(){return this.view.$(".reply-textarea:first")}getModelAttributes(){const e=(new Date).getTime()
return{summary:Object(f["a"])(this.content),message:this.content,parent_id:this.options.topLevel?null:this.view.model.get("id"),user_id:ENV.current_user_id,created_at:e,updated_at:e,attachment:this.form.find("input[type=file]")[0],new:true}}onPostReplySuccess(e,t){if(t.errors){this.hideNotification()
this.textArea.val(e.get("message"))
this.edit()
return this.form.formErrors(t)}this.view.model.set("notification","")
this.trigger("save",e)
return this.textArea.val("")}onPostReplyError(e){this.view.model.set("notification","<div class='alert alert-info'>".concat(se.t("*An error occurred*, please post your reply again later",{wrapper:"<strong>$1</strong>"}),"</div>"))
this.textArea.val(e.get("message"))
return this.edit()}addAttachment(e){this.form.find("ul.discussion-reply-attachments").append(de())
this.form.find("ul.discussion-reply-attachments input").focus()
return this.form.find("a.discussion-reply-add-attachment").hide()}removeAttachment(e){e.closest("ul.discussion-reply-attachments li").remove()
return this.form.find("a.discussion-reply-add-attachment").show().focus()}removeAttachments(){this.form.find("ul.discussion-reply-attachments").empty()
return this.form.find("a.discussion-reply-add-attachment").show().focus()}}_.a.extend(pe.prototype,l.a.Events)
var he=pe
Object(R["a"])(JSON.parse('{"ar":{"cancel_caeb1e68":"إلغاء","failed_to_save_please_try_again_later_bb7070fb":"فشل الحفظ، الرجاء إعادة المحاولة لاحقًا","remove_attachment_ceae0973":"إزالة المرفق","saving_d55dd90e":"جارٍ الحفظ..."},"cy":{"cancel_caeb1e68":"Canslo","failed_to_save_please_try_again_later_bb7070fb":"Wedi methu cadw, rhowch gynnig arall arni rywbryd eto","remove_attachment_ceae0973":"Tynnu Atodiad","saving_d55dd90e":"Wrthi’n cadw..."},"da":{"cancel_caeb1e68":"Annuller","failed_to_save_please_try_again_later_bb7070fb":"Kunne ikke gemmes, prøv igen senere","remove_attachment_ceae0973":"Slet vedhæftet fil","saving_d55dd90e":"Gemmer ..."},"da-x-k12":{"cancel_caeb1e68":"Annuller","failed_to_save_please_try_again_later_bb7070fb":"Kunne ikke gemmes, prøv igen senere","remove_attachment_ceae0973":"Slet vedhæftet fil","saving_d55dd90e":"Gemmer ..."},"de":{"cancel_caeb1e68":"Abbrechen","failed_to_save_please_try_again_later_bb7070fb":"Konnte nicht gespeichert werden. Bitte versuchen Sie es später nochmal.","remove_attachment_ceae0973":"Anhang entfernen","saving_d55dd90e":"Wird gespeichert ..."},"el":{"cancel_caeb1e68":"Ακύρωση","remove_attachment_ceae0973":"Αφαίρεση Επισύναψης","saving_d55dd90e":"Αποθήκευση..."},"en-AU":{"cancel_caeb1e68":"Cancel","failed_to_save_please_try_again_later_bb7070fb":"Failed to save, please try again later","remove_attachment_ceae0973":"Remove Attachment","saving_d55dd90e":"Saving..."},"en-CA":{"cancel_caeb1e68":"Cancel","failed_to_save_please_try_again_later_bb7070fb":"Failed to save, please try again later","remove_attachment_ceae0973":"Remove Attachment","saving_d55dd90e":"Saving..."},"en-GB":{"cancel_caeb1e68":"Cancel","failed_to_save_please_try_again_later_bb7070fb":"Failed to save, please try again later","remove_attachment_ceae0973":"Remove attachment","saving_d55dd90e":"Saving..."},"es":{"cancel_caeb1e68":"Cancelar","failed_to_save_please_try_again_later_bb7070fb":"No se pudo guardar. Inténtelo más tarde","remove_attachment_ceae0973":"Eliminar el archivo adjunto","saving_d55dd90e":"Guardando..."},"fa":{"cancel_caeb1e68":"لغو","failed_to_save_please_try_again_later_bb7070fb":"ذخیره سازی انجام نشد، لطفا بعدا دوباره سعی کنید","remove_attachment_ceae0973":"حذف پیوست","saving_d55dd90e":"در حال ذخیره سازی..."},"fi":{"cancel_caeb1e68":"Peruuta","failed_to_save_please_try_again_later_bb7070fb":"Tallennus epäonnistui, yritä myöhemmin uudelleen","remove_attachment_ceae0973":"Poista liite","saving_d55dd90e":"Tallennetaan..."},"fr":{"cancel_caeb1e68":"Annuler","failed_to_save_please_try_again_later_bb7070fb":"Échec de l’enregistrement. Veuillez réessayer ultérieurement.","remove_attachment_ceae0973":"Supprimer la pièce jointe","saving_d55dd90e":"Enregistrement..."},"fr-CA":{"cancel_caeb1e68":"Annuler","failed_to_save_please_try_again_later_bb7070fb":"Échec de l’enregistrement. Veuillez réessayer ultérieurement.","remove_attachment_ceae0973":"Retirer la pièce jointe","saving_d55dd90e":"Enregistrement..."},"he":{"cancel_caeb1e68":"ביטול","failed_to_save_please_try_again_later_bb7070fb":"תקלה בנסיון לשמירה. יש לנסות שוב מאוחר יותר","remove_attachment_ceae0973":"הסרת קובץ מצורף","saving_d55dd90e":"שומר..."},"ht":{"cancel_caeb1e68":"Anile","failed_to_save_please_try_again_later_bb7070fb":"Anrejistreman echwe, tanpri eseye ankò pita","remove_attachment_ceae0973":"Retire Atachman","saving_d55dd90e":"Anrejistreman..."},"hu":{"cancel_caeb1e68":"Mégse","failed_to_save_please_try_again_later_bb7070fb":"A mentés sikertelen, kérjük, próbálja újra később","remove_attachment_ceae0973":"Melléklet eltávolítása","saving_d55dd90e":"Mentés..."},"hy":{"cancel_caeb1e68":"Չեղյալ համարել","remove_attachment_ceae0973":"Հանել հավելվածը","saving_d55dd90e":"Պահպանվում է..."},"is":{"cancel_caeb1e68":"Hætta við","failed_to_save_please_try_again_later_bb7070fb":"Ekki tókst að vista. Reyndu aftur síðar","remove_attachment_ceae0973":"Fjarlægja viðhengi","saving_d55dd90e":"Vista..."},"it":{"cancel_caeb1e68":"Annulla","failed_to_save_please_try_again_later_bb7070fb":"Salvataggio non riuscito. Riprova più tardi","remove_attachment_ceae0973":"Rimuovi allegato","saving_d55dd90e":"Salvataggio in corso..."},"ja":{"cancel_caeb1e68":"キャンセル","failed_to_save_please_try_again_later_bb7070fb":"保存に失敗しました。後でもう一度試してください","remove_attachment_ceae0973":"添付ファイルの削除","saving_d55dd90e":"保存しています..."},"ko":{"cancel_caeb1e68":"취소","remove_attachment_ceae0973":"첨부 제거","saving_d55dd90e":"저장 중..."},"mi":{"cancel_caeb1e68":"Whakakore","failed_to_save_please_try_again_later_bb7070fb":"I rahua ki te whakaora, ngana anō koa i muri mai","remove_attachment_ceae0973":"Tangohia te Āpitihanga","saving_d55dd90e":"Kei te tiakina"},"nb":{"cancel_caeb1e68":"Avbryt","failed_to_save_please_try_again_later_bb7070fb":"Kunne ikke lagre, vennligst forsøk senere","remove_attachment_ceae0973":"Fjern vedlegg","saving_d55dd90e":"Lagrer…"},"nb-x-k12":{"cancel_caeb1e68":"Avbryt","failed_to_save_please_try_again_later_bb7070fb":"Kunne ikke lagre, vennligst forsøk senere","remove_attachment_ceae0973":"Fjern vedlegg","saving_d55dd90e":"Lagrer…"},"nl":{"cancel_caeb1e68":"Annuleren","failed_to_save_please_try_again_later_bb7070fb":"Het opslaan is mislukt, probeer het later opnieuw","remove_attachment_ceae0973":"Bijlage verwijderen","saving_d55dd90e":"Bezig met opslaan..."},"nn":{"cancel_caeb1e68":"Avbryt","failed_to_save_please_try_again_later_bb7070fb":"Kan ikkje lagre. Prøv på nytt seinare.","remove_attachment_ceae0973":"Fjern vedlegget","saving_d55dd90e":"Lagrar..."},"pl":{"cancel_caeb1e68":"Anuluj","failed_to_save_please_try_again_later_bb7070fb":"Zapis nie powiódł się, spróbuj ponownie później","remove_attachment_ceae0973":"Usuń załącznik","saving_d55dd90e":"Trwa zapisywanie..."},"pt":{"cancel_caeb1e68":"Cancelar","failed_to_save_please_try_again_later_bb7070fb":"Falha na gravação, tente novamente mais tarde","remove_attachment_ceae0973":"Remover anexo","saving_d55dd90e":"A guardar..."},"pt-BR":{"cancel_caeb1e68":"Cancelar","failed_to_save_please_try_again_later_bb7070fb":"Falha ao salvar. Tente novamente mais tarde.","remove_attachment_ceae0973":"Remover anexo","saving_d55dd90e":"Salvando..."},"ru":{"cancel_caeb1e68":"Отменить","failed_to_save_please_try_again_later_bb7070fb":"Не удалось сохранить, пожалуйста, повторите попытку позже","remove_attachment_ceae0973":"Удалить вложение","saving_d55dd90e":"Сохранение..."},"sl":{"cancel_caeb1e68":"Prekliči","failed_to_save_please_try_again_later_bb7070fb":"Neuspelo shranjevanje; poskusite znova pozneje.","remove_attachment_ceae0973":"Odstrani prilogo","saving_d55dd90e":"Shranjevanje ..."},"sv":{"cancel_caeb1e68":"Avbryt","failed_to_save_please_try_again_later_bb7070fb":"Misslyckades att spara, vänligen försök igen senare","remove_attachment_ceae0973":"Ta bort bilaga","saving_d55dd90e":"Sparar..."},"sv-x-k12":{"cancel_caeb1e68":"Avbryt","failed_to_save_please_try_again_later_bb7070fb":"Misslyckades att spara, vänligen försök igen senare","remove_attachment_ceae0973":"Ta bort bilaga","saving_d55dd90e":"Sparar..."},"tr":{"cancel_caeb1e68":"İptal","failed_to_save_please_try_again_later_bb7070fb":"Kaydetme başarısız, lütfen daha sonra tekrar deneyin","remove_attachment_ceae0973":"Ekli Dosyayı Kaldır","saving_d55dd90e":"Kaydediliyor..."},"uk":{"cancel_caeb1e68":"Скасувати","failed_to_save_please_try_again_later_bb7070fb":"Неможливо зберегти, будь ласка, спробуйте ще раз пізніше.","remove_attachment_ceae0973":"Видалити вкладення","saving_d55dd90e":"Збереження..."},"zh-Hans":{"cancel_caeb1e68":"取消","failed_to_save_please_try_again_later_bb7070fb":"保存失败，请稍后重试","remove_attachment_ceae0973":"删除附件","saving_d55dd90e":"正在保存..."},"zh-Hant":{"cancel_caeb1e68":"取消","failed_to_save_please_try_again_later_bb7070fb":"無法保存，請稍後再試一次","remove_attachment_ceae0973":"刪除附件","saving_d55dd90e":"正在保存..."}}'))
var me=x["default"].scoped("EntryEditor")
var ge=r("4WHl")
var fe=r("ppAs")
class ye extends ge["a"]{constructor(e){super(e.$(".message:first"),{switchViews:true,view:e})
this.cancelButton=this.createCancelButton()
this.$delAttachmentButton=this.createDeleteAttachmentButton()
this.done.addClass("btn-small")}display(e){super.display(e)
this.cancelButton.detach()
this.$delAttachmentButton.detach()
if(true!==(e&&e.cancel)){if(this.remove_attachment){this.view.model.set("attachments",null)
this.view.model.set("attachment",null)}this.view.model.set("updated_at",(new Date).toISOString())
this.view.model.set("editor",ENV.current_user)
return this.view.model.save({messageNotification:me.t("Saving..."),message:this.content},{success:this.onSaveSuccess.bind(this),error:this.onSaveError.bind(this)})}return this.getAttachmentElement().show()}createCancelButton(){return n()("<a/>").text(me.t("Cancel")).css({marginLeft:"5px"}).attr("href","javascript:").addClass("cancel_button").click(()=>this.display({cancel:true}))}createDeleteAttachmentButton(){return n()("<a/>").attr("href","javascript:").text("x").addClass("cancel_button").attr("aria-label",me.t("Remove Attachment")).css({float:"none",marginLeft:".5em",fontSize:"1.25rem"}).click(()=>this.delAttachment())}edit(){this.editingElement(this.view.$(".message:first"))
super.edit(...arguments)
this.cancelButton.insertAfter(this.done)
return this.getAttachmentElement().append(this.$delAttachmentButton)}delAttachment(){this.remove_attachment=true
return this.getAttachmentElement().hide()}getAttachmentElement(){return this.view.$("article:first .comment_attachments > div")}getContent(){return fe["a"].convert(this.view.model.get("message"),{forEditing:true})}onSaveSuccess(){this.view.model.set("messageNotification","")
return this.view.render()}onSaveError(){this.view.model.set({messageNotification:me.t("Failed to save, please try again later")})
return this.edit()}}var ve=r("teYS")
var be=r("HIhM")
var ke,we=function(e,t){return function(){return e.apply(t,arguments)}},Se=function(e,t){for(var r in t)Ee.call(t,r)&&(e[r]=t[r])
function s(){this.constructor=e}s.prototype=t.prototype
e.prototype=new s
e.__super__=t.prototype
return e},Ee={}.hasOwnProperty
ke=function(e){Se(t,e)
function t(){this.handleKeyDown=we(this.handleKeyDown,this)
this.renderRatingSum=we(this.renderRatingSum,this)
this.renderRating=we(this.renderRating,this)
this.focus=we(this.focus,this)
this.renderTree=we(this.renderTree,this)
this.toggleDeleted=we(this.toggleDeleted,this)
this.toggleReadState=we(this.toggleReadState,this)
return t.__super__.constructor.apply(this,arguments)}t.instances={}
t.collapseRootEntries=function(){return _.a.each(this.instances,function(e){if(!e.model.get("parent"))return e.collapse()})}
t.expandRootEntries=function(){return _.a.each(this.instances,function(e){if(!e.model.get("parent"))return e.expand()})}
t.setAllReadState=function(e){return _.a.each(this.instances,function(t){return t.model.set("read_state",e)})}
t.prototype.els={".discussion_entry:first":"$entryContent",".replies:first":"$replies",".headerBadges:first":"$headerBadges",".discussion-read-state-btn:first":"$readStateToggle",".discussion-rate-action":"$rateLink",".discussion-rating":"$ratingSum"}
t.prototype.events={"click .loadDescendants":"loadDescendants","click [data-event]":"handleDeclarativeEvent",keydown:"handleKeyDown"}
t.prototype.defaults={treeView:null,descendants:2,children:5,showMoreDescendants:2}
t.prototype.template=Q
t.prototype.tagName="li"
t.prototype.className="entry"
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
this.constructor.instances[this.cid]=this
this.$el.attr("id","entry-"+this.model.get("id"))
this.$el.toggleClass("no-replies",!this.model.hasActiveReplies())
this.model.get("deleted")&&this.$el.addClass("deleted")
this.model.on("change:deleted",this.toggleDeleted)
this.model.on("change:read_state",this.toggleReadState)
this.model.on("change:editor",(e=this,function(t){e.render()
return t.trigger("edited")}))
var e
this.model.on("change:replies",function(e){return function(t,r){e.$el.toggleClass("no-replies",!e.model.hasActiveReplies())
return _.a.isEmpty(r)?delete e.treeView:e.renderTree()}}(this))
this.model.on("change:rating",this.renderRating)
return this.model.on("change:rating_sum",this.renderRatingSum)}
t.prototype.toggleRead=function(e){e.preventDefault()
"read"===this.model.get("read_state")?this.model.markAsUnread():this.model.markAsRead()
return t.trigger("readStateChanged",this.model,this)}
t.prototype.handleDeclarativeEvent=function(e){var t,r
t=n()(e.currentTarget)
r=t.data("event")
if(this.bypass(e))return
e.stopPropagation()
e.preventDefault()
return this[r](e,t)}
t.prototype.bypass=function(e){var t,r,s
r=n()(e.target)
if(null!=r.data("bypass"))return true
t=n()(e.target).closest(".admin-links").length
s=n()(e.target).data("event")
return!(!t||s)}
t.prototype.toJSON=function(){var e
e=this.model.attributes
e.edited_at=n.a.datetimeString(e.updated_at)
e.use_rce_enhancements=ENV.use_rce_enhancements
if(e.editor){e.editor_name=e.editor.display_name
e.editor_href=e.editor.html_url}else{e.editor_name=a["a"].t("unknown","Unknown")
e.editor_href=""}return e}
t.prototype.toggleReadState=function(e,t){this.setToggleTooltip()
this.$entryContent.toggleClass("unread","unread"===t)
return this.$entryContent.toggleClass("read","read"===t)}
t.prototype.toggleCollapsed=function(e,t){this.addedCountsToHeader||this.addCountsToHeader()
this.$el.toggleClass("collapsed")
return this.$el.hasClass("collapsed")?t.find(".screenreader-only").text(a["a"].t("Expand Subdiscussion")):t.find(".screenreader-only").text(a["a"].t("Collapse Subdiscussion"))}
t.prototype.expand=function(){return this.$el.removeClass("collapsed")}
t.prototype.collapse=function(){this.addedCountsToHeader||this.addCountsToHeader()
return this.$el.addClass("collapsed")}
t.prototype.addCountsToHeader=function(){var e
e=this.countPosterity()
this.$headerBadges.append(re({stats:e}))
return this.addedCountsToHeader=true}
t.prototype.toggleDeleted=function(e,t){this.$el.toggleClass("deleted",t)
this.$entryContent.toggleClass("deleted-discussion-entry",t)
if(t){this.model.set("updated_at",(new Date).toISOString())
return this.model.set("editor",ENV.current_user)}}
t.prototype.setToggleTooltip=function(){var e
e="unread"===this.model.get("read_state")?a["a"].t("mark_as_read","Mark as Read"):a["a"].t("mark_as_unread","Mark as Unread")
return this.$readStateToggle.attr("title",e)}
t.prototype.afterRender=function(){var e,r,s,a
t.__super__.afterRender.apply(this,arguments)
e=Object(be["c"])()?"right":"left"
a=this.$el.find(".entry-content[data-should-position]")
r=a.parents("li.entry").length
s=30*(r-1)
a.css("padding-"+e,s)
a.find(".discussion-title").attr({role:"heading","aria-level":r+1})
this.options.collapsed&&this.collapse()
this.setToggleTooltip()
this.renderRating()
this.renderRatingSum()
if("unread"===this.model.get("read_state")&&!this.model.get("forced_read_state")&&!ENV.DISCUSSION.MANUAL_MARK_AS_READ){null==this.readMarker&&(this.readMarker=new m(this))
m.checkForVisibleEntries()}return Object(ve["publish"])("userContent/change")}
t.prototype.filter=t.prototype.afterRender
t.prototype.renderTree=function(e){var t,r,s,a,i,n
null==e&&(e={})
if(null!=this.treeView)return
n=this.model.get("replies")
a=(e.descendants||this.options.descendants)-1
r=e.children||this.options.children
s=new S(n,{perPage:r})
i=s.getPageAsCollection(0)
this.treeView=new this.options.treeView({el:this.$replies[0],descendants:a,collection:i,threaded:this.options.threaded,showMoreDescendants:this.options.showMoreDescendants})
this.treeView.render()
t=s.map(function(e){return e.attributes})
return this.model.set("replies",t)}
t.prototype.renderDescendantsLink=function(){var e
e=this.countPosterity()
this.$descendantsLink=n()("<div/>")
this.$descendantsLink.html(re({stats:e,showMore:true}))
this.$descendantsLink.addClass("showMore loadDescendants")
return this.$replies.append(this.$descendantsLink)}
t.prototype.countPosterity=function(){var e
e={unread:0,total:0}
if(null==this.model.attributes.replies)return e
g(this.model.attributes.replies,"replies",function(t){"unread"===t.read_state&&e.unread++
return e.total++})
return e}
t.prototype.loadDescendants=function(e){e.stopPropagation()
e.preventDefault()
return this.renderTree({children:this.options.children,descendants:this.options.showMoreDescendants})}
t.prototype.remove=function(){var e
if(!this.model.canModerate())return
if(confirm(a["a"].t("are_your_sure_delete","Are you sure you want to delete this entry?"))){this.model.set("deleted",true)
this.model.destroy()
e=V(this.toJSON())
return this.$(".entry-content:first").html(e)}}
t.prototype.edit=function(){if(!this.model.canModerate())return
null==this.editor&&(this.editor=new ye(this))
this.editor.editing||this.editor.edit()
return this.editor.on("display",(e=this,function(){return setTimeout(e.focus,0)}))
var e}
t.prototype.focus=function(){return this.$(".author").first().focus()}
t.prototype.addReply=function(e,r){null==this.reply&&(this.reply=new he(this,{focus:true}))
this.model.set("notification","")
this.reply.edit()
return this.reply.on("save",(s=this,function(e){s.renderTree()
s.treeView.collection.add(e)
s.treeView.collection.fullCollection.add(e)
s.model.get("replies").push(e.attributes)
s.trigger("addReply")
return t.trigger("addReply",e)}))
var s}
t.prototype.toggleLike=function(e){e.preventDefault()
return this.model.toggleLike()}
t.prototype.renderRating=function(){this.$rateLink.toggleClass("discussion-rate-action--checked",!!this.model.get("rating"))
return this.$rateLink.attr("aria-checked",this.model.get("rating")?"true":"false")}
t.prototype.renderRatingSum=function(){return this.$ratingSum.text(this.model.ratingString())}
t.prototype.addReplyAttachment=function(e,t){e.preventDefault()
return this.reply.addAttachment(t)}
t.prototype.removeReplyAttachment=function(e,t){e.preventDefault()
return this.reply.removeAttachment(t)}
t.prototype.format=function(e,t){if("message"===e){t=fe["a"].convert(t)
this.$el.find(".message").removeClass("enhanced")
Object(ve["publish"])("userContent/change")
return t}return"notification"===e?t:Object(ae["a"])(t)}
t.prototype.handleKeyDown=function(e){var t
t=e.target.nodeName.toLowerCase()
if("input"===t||"textarea"===t)return
if(68===e.which)this.remove()
else if(69===e.which)this.edit()
else{if(82!==e.which)return
this.addReply()}e.preventDefault()
return e.stopPropagation()}
return t}(l.a.View)
var Ae=_.a.extend(ke,l.a.Events)
class xe extends d["Model"]{hasFilter(){const e=this.attributes,t=e.unread,r=e.query
return!(!t&&null==r)}reset(){this.set({unread:false,query:null,collapsed:false})
return this.trigger("reset")}}xe.prototype.defaults={unread:false,query:null,collapsed:false}
r("yP0d")
class Re extends d["View"]{constructor(){super(...arguments)
this.clearInputs=()=>{if(this.model.hasFilter())return
this.$searchInput.val("")
this.$unread.prop("checked",false)
this.$unread.button("refresh")
return this.maybeDisableFields()}}static initClass(){this.prototype.els={"#discussion-search":"$searchInput","#onlyUnread":"$unread","#showDeleted":"$deleted",".disableWhileFiltering":"$disableWhileFiltering"}
this.prototype.events={"keyup #discussion-search":"filterBySearch","change #onlyUnread":"toggleUnread","change #showDeleted":"toggleDeleted","click #collapseAll":"collapseAll","click #expandAll":"expandAll"}
this.prototype.filter=this.prototype.afterRender
this.prototype.filterBySearch=_.a.debounce(function(){let e=this.$searchInput.val()
""===e&&(e=null)
this.model.set("query",e)
return this.maybeDisableFields()},250)}initialize(){super.initialize(...arguments)
return this.model.on("change",()=>this.clearInputs())}afterRender(){this.$unread.button()
return this.$deleted.button()}toggleUnread(){return setTimeout(()=>{this.model.set("unread",this.$unread.prop("checked"))
return this.maybeDisableFields()},50)}toggleDeleted(){return this.trigger("showDeleted",this.$deleted.prop("checked"))}collapseAll(){this.model.set("collapsed",true)
return this.trigger("collapseAll")}expandAll(){this.model.set("collapsed",false)
return this.trigger("expandAll")}maybeDisableFields(){return this.$disableWhileFiltering.attr("disabled",this.model.hasFilter())}}Re.initClass()
var Ce=r("VTBJ")
Object(R["a"])(JSON.parse('{"ar":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"تأكد من كتابة كل مصطلحات البحث بشكل صحيح إملائيًا.","suggestions":"الاقتراحات:","try_different_more_general_or_fewer_keywords":"جرّب استخدام كلمات أساسية مختلفة أو أكثر تعميمًا أو أقل عددًا.","try_disabling_the_unread_filter":"جرّب تعطيل عامل التصفية \\"غير مقروءة\\".","your_search_did_not_match_any_entries":"لم يتطابق بحثك مع أي إدخالات."}}},"cy":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"Gwnewch yn siŵr bod pob term chwilio wedi’i sillafu’n gywir.","suggestions":"Awgrymiadau:","try_different_more_general_or_fewer_keywords":"Ceisiwch ddefnyddio llai o allweddeiriau, rhai gwahanol neu rai mwy cyffredinol.","try_disabling_the_unread_filter":"Ceisiwch analluogi’r hidlydd \\"Heb eu darllen\\".","your_search_did_not_match_any_entries":"Doedd eich manylion chwilio ddim yn cyfateb i unrhyw gofnodion."}}},"da":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"Sørg for, at alle søgetermer er korrekt stavet.","suggestions":"Forslag:","try_different_more_general_or_fewer_keywords":"Prøv forskellige, mere generelle eller færre nøgleord.","try_disabling_the_unread_filter":"Prøv at deaktivere filteret \\"Ulæst\\".","your_search_did_not_match_any_entries":"Din søgning opnåede ikke nogen resultater."}}},"da-x-k12":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"Sørg for, at alle søgetermer er korrekt stavet.","suggestions":"Forslag:","try_different_more_general_or_fewer_keywords":"Prøv forskellige, mere generelle eller færre nøgleord.","try_disabling_the_unread_filter":"Prøv at deaktivere filteret \\"Ulæst\\".","your_search_did_not_match_any_entries":"Din søgning opnåede ikke nogen resultater."}}},"de":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"Stellen Sie sicher, dass alle Suchbegriffe richtig geschrieben sind.","suggestions":"Vorschläge:","try_different_more_general_or_fewer_keywords":"Probieren sie andere, allgemeinere oder weniger Schlüsselworte.","try_disabling_the_unread_filter":"Versuchen Sie, den Filter „Ungelesen“ zu deaktivieren.","your_search_did_not_match_any_entries":"Es wurden keine Einträge für Ihre Suche gefunden."}}},"el":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"Σιγουρευτείτε ότι όλοι οι όροι αναζήτησης είναι γραμμένοι σωστά.","suggestions":"Προτάσεις","try_different_more_general_or_fewer_keywords":"Δοκιμάστε διαφορετικές, ή περισσότερο γενικές, ή λιγότερες, λέξεις κλειδιά","try_disabling_the_unread_filter":"Δοκιμάστε να απενεργοποιήσετε το φίλτρο «Μη Αναγνωσμένα».","your_search_did_not_match_any_entries":"Δεν βρέθηκαν αποτελέσματα για την αναζήτησή σας."}}},"en-AU":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"Make sure all search terms are spelled correctly.","suggestions":"Suggestions:","try_different_more_general_or_fewer_keywords":"Try different, more general, or fewer keywords.","try_disabling_the_unread_filter":"Try disabling the \\"Unread\\" filter.","your_search_did_not_match_any_entries":"Your search did not match any entries."}}},"en-CA":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"Make sure all search terms are spelled correctly.","suggestions":"Suggestions:","try_different_more_general_or_fewer_keywords":"Try different, more general, or fewer keywords.","try_disabling_the_unread_filter":"Try disabling the \\"Unread\\" filter.","your_search_did_not_match_any_entries":"Your search did not match any entries."}}},"en-GB":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"Make sure all search terms are spelled correctly.","suggestions":"Suggestions:","try_different_more_general_or_fewer_keywords":"Try different, more general, or fewer keywords.","try_disabling_the_unread_filter":"Try disabling the \\"Unread\\" filter.","your_search_did_not_match_any_entries":"Your search did not match any entries."}}},"es":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"Asegurarse de que todos los términos de búsqueda están escritos correctamente.","suggestions":"Sugerencias:","try_different_more_general_or_fewer_keywords":"Intente con menos palabras clave o con palabras clave diferente o más generales.","try_disabling_the_unread_filter":"Intente desactivar el filtro \\"No leído\\".","your_search_did_not_match_any_entries":"Su búsqueda no coincide con ninguna entrada."}}},"fa":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"مطمئن شوید همه عبارت های جستجو درست نوشته شده اند.","suggestions":"پیشنهادها:","try_different_more_general_or_fewer_keywords":"کلید واژه های متفاوت، کلی تر یا کمتر را امتحان کنید.","try_disabling_the_unread_filter":"فیلتر \\"خوانده نشده\\" را غیرفعال کنید.","your_search_did_not_match_any_entries":"جستجوی شما با هیچ ورودی مطابقت نداشت."}}},"fi":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"Varmista, että kaikki hakutermit tavataan oikein.","suggestions":"Ehdotuksia:","try_different_more_general_or_fewer_keywords":"Kokeile erilaisia, yleisempiä tai harvempia avainsanoja.","try_disabling_the_unread_filter":"Kokeile poistaa käytöstä ”Lukematon” suodatus.","your_search_did_not_match_any_entries":"Hakusi ei vastaa mitään merkintöjä."}}},"fr":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"Vérifiez que tous les termes de recherche sont bien orthographiés.","suggestions":"Suggestions :","try_different_more_general_or_fewer_keywords":"Essayez avec des mots-clés différents, plus généraux ou moins nombreux.","try_disabling_the_unread_filter":"Essayez de désactiver le filtre « Non lu(s) ».","your_search_did_not_match_any_entries":"Votre recherche ne correspond à aucune entrée."}}},"fr-CA":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"Vérifiez que tous les termes recherchés sont bien orthographiés.","suggestions":"Suggestions :","try_different_more_general_or_fewer_keywords":"Essayez avec des mots-clés différents, plus généraux ou moins nombreux.","try_disabling_the_unread_filter":"Essayez de désactiver le filtre « Non lu(s) ».","your_search_did_not_match_any_entries":"Votre recherche ne correspond à aucune entrée."}}},"he":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"יש לוודא שכל מונחי החיפוש אויתו כהלכה","suggestions":"הצעות:","try_different_more_general_or_fewer_keywords":"ניתן לנסות מילות מפתח שונות, כלליות יותר, או מעטות יותר.","try_disabling_the_unread_filter":"ניתן לנסות ולהשבית את מסנן ה\\"לא נקראו\\"","your_search_did_not_match_any_entries":"החיפוש שלך לא מצא מופעים מתאימים"}}},"ht":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"Asire w ke tout tèm rechèch yo byen ekri.","suggestions":"Sijesyon:","try_different_more_general_or_fewer_keywords":"Eseye lòt, ki pi jeneral oswa mwens mo kle.","try_disabling_the_unread_filter":"Eseye dezaktive filtè \\"Poko li\\" a.","your_search_did_not_match_any_entries":"Rechèch ou a pa koresponn a okenn tèks."}}},"hu":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"Győződjön meg róla, hogy minden keresőszó helyesen van leírva","suggestions":"Javaslatok:","try_different_more_general_or_fewer_keywords":"Próbálja más, általánosabb vagy kevesebb kulcsszóval.","try_disabling_the_unread_filter":"Próbálja meg kikapcsolni az \\"Olvasatlan\\" szűrőt.","your_search_did_not_match_any_entries":"A keresése nem hozott találatot."}}},"hy":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"Համոզվեք, որ որոնման բոլոր տարրերը ճիշտ են ","suggestions":"Առաջարկություններ","try_different_more_general_or_fewer_keywords":"Փորձեք տարբեր, ավելի ընդհանուր կամ ավելի քիչ առանցքային բառերով","try_disabling_the_unread_filter":"Փորձեք անջատել \\"Չընթերցված\\" ֆիլտրը:","your_search_did_not_match_any_entries":"Ձեր որոնումները չեն համապատասխանում որևէ գրառմանը: "}}},"is":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"Gættu þess að stafa öll leitarorð rétt.","suggestions":"Tillögur:","try_different_more_general_or_fewer_keywords":"Prófaðu önnur og almennari lykilorð eða færri.","try_disabling_the_unread_filter":"Prófaðu að aftengja síuna \\"Ólesið\\".","your_search_did_not_match_any_entries":"Leitin passaði ekki við neina færslu."}}},"it":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"Assicurati che tutti i termini di ricerca siano scritti correttamente.","suggestions":"Suggerimenti:","try_different_more_general_or_fewer_keywords":"Prova a usare parole chiave diverse o più generiche o a ridurne il numero.","try_disabling_the_unread_filter":"Prova a disattivare il filtro \\"Non letto\\".","your_search_did_not_match_any_entries":"La tua ricerca non corrisponde a nessuna voce."}}},"ja":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"すべての検索条件について誤入力がないことを確認してください。","suggestions":"提案:","try_different_more_general_or_fewer_keywords":"異なるキーワード、さらに一般的なキーワード、またはさらに少ないキーワードで試してください。","try_disabling_the_unread_filter":"\\"未読\\" フィルタを無効にしてみてください。","your_search_did_not_match_any_entries":"検索に一致するエントリはありませんでした。"}}},"ko":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"모든 검색 용어의 철자가 올바른지 확인하십시오. ","suggestions":"제안:","try_different_more_general_or_fewer_keywords":"다른 키워드나 보다 일반적인 키워드나 더 적은 키워드로 다시 시도해 보십시오.","try_disabling_the_unread_filter":"\\"읽지 않음\\" 필터를 사용하지 말아 보십시오.","your_search_did_not_match_any_entries":"검색과 일치하는 항목이 없습니다."}}},"mi":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"Me tika te tuhi e ngā kupu rapu katoa tika.","suggestions":"Whakāro puaki","try_different_more_general_or_fewer_keywords":"Ngana rerekē, atu whānui, iti ake rānei kupumatua.","try_disabling_the_unread_filter":"Ngana monokia te tātari \\"kaore i pānuitia\\".","your_search_did_not_match_any_entries":"Kihai i ōrite tō rapu tētahi tāurunga."}}},"nb":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"Pass på at alle søkeord er stavet riktig.","suggestions":"Forslag:","try_different_more_general_or_fewer_keywords":"Prøv andre, mer generelle eller færre søkeord","try_disabling_the_unread_filter":"Prøv å slå av \\"Ulest\\"-filteret.","your_search_did_not_match_any_entries":"Ditt søk samsvarer ikke med noen innlegg."}}},"nb-x-k12":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"Pass på at alle søkeord er stavet riktig.","suggestions":"Forslag:","try_different_more_general_or_fewer_keywords":"Prøv andre, mer generelle eller færre søkeord","try_disabling_the_unread_filter":"Prøv å slå av \\"Ulest\\"-filteret.","your_search_did_not_match_any_entries":"Ditt søk samsvarer ikke med noen innlegg."}}},"nl":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"Er voor zorgen dat alle zoektermen correct gespeld zijn.","suggestions":"Suggesties:","try_different_more_general_or_fewer_keywords":"Andere, meer algemene of minder trefwoorden proberen.","try_disabling_the_unread_filter":"Het filter \\"Ongelezen\\" proberen uit te schakelen.","your_search_did_not_match_any_entries":"Jouw zoekopdracht heeft geen vermeldingen opgeleverd."}}},"nn":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"Kontroller at alle søkeord er stava rett.","suggestions":"Forslag:","try_different_more_general_or_fewer_keywords":"Prøv med andre, meir generelle eller færre nøkkelord.","try_disabling_the_unread_filter":"Prøv med å deaktivere \\"Unread\\"-filteret.","your_search_did_not_match_any_entries":"Søket ditt samsvarer ikkje med innlegg."}}},"pl":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"Sprawdź, czy wyszukiwane terminy są dobrze przeliterowane.","suggestions":"Sugestie:","try_different_more_general_or_fewer_keywords":"Spróbuj w inny sposób, bardziej ogólny lub wpisz mniejszą liczbę słów","try_disabling_the_unread_filter":"Spróbuj wyłączyć filtr „Nieprzeczytane”.","your_search_did_not_match_any_entries":"Wyszukiwanie nie odpowiada żadnym wpisom."}}},"pt":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"Certifique-se de que todos os termos de pesquisa não têm erros ortográficos.","suggestions":"Sugestões:","try_different_more_general_or_fewer_keywords":"Experimente com palavras-chave diferentes, mais genéricas ou em menor número.","try_disabling_the_unread_filter":"Experimente desativar o filtro \\"Não lidos\\".","your_search_did_not_match_any_entries":"A sua pesquisa não corresponde a nenhuma entrada."}}},"pt-BR":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"Verifique se todos os termos da pesquisa foram escritos corretamente.","suggestions":"Sugestões:","try_different_more_general_or_fewer_keywords":"Tente menos palavras-chaves, diferentes, ou mais gerais.","try_disabling_the_unread_filter":"Tente desativar o filtro \\"não lido\\".","your_search_did_not_match_any_entries":"Sua pesquisa não encontrou nenhuma entrada correspondente."}}},"ru":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"Убедитесь, что все критерии поиска написаны правильно.","suggestions":"Предложения:","try_different_more_general_or_fewer_keywords":"Попробуйте другие, более общие, или меньше ключевых слов.","try_disabling_the_unread_filter":"Попробуйте отключить фильтр \\"Непрочитанные\\".","your_search_did_not_match_any_entries":"Не найдено записей по вашему поисковому запросу."}}},"sl":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"Poskrbite za pravilno črkovanje vseh iskalnih besed.","suggestions":"Predlogi:","try_different_more_general_or_fewer_keywords":"Poskusite z drugačnimi, splošnejšimi ključnimi besedami ali z manj ključnih besed.","try_disabling_the_unread_filter":"Poskusite onemogočiti filter »Neprebrano«.","your_search_did_not_match_any_entries":"Vaše iskanje se ne ujema z nobenim vnosom."}}},"sv":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"Se till att alla termer i sökningen har stavats korrekt","suggestions":"Förslag:","try_different_more_general_or_fewer_keywords":"Prova något annat, mer generellt, eller färre nyckelord","try_disabling_the_unread_filter":"Prova att avaktivera \\"Olästa\\" -filtret","your_search_did_not_match_any_entries":"Din sökning matchade inga inlägg."}}},"sv-x-k12":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"Se till att alla termer i sökningen har stavats korrekt","suggestions":"Förslag:","try_different_more_general_or_fewer_keywords":"Prova något annat, mer generellt, eller färre nyckelord","try_disabling_the_unread_filter":"Prova att avaktivera \\"Olästa\\" -filtret","your_search_did_not_match_any_entries":"Din sökning matchade inga inlägg."}}},"tr":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"Tüm arama ifadelerinin doğru yazıldığına emin olun.","suggestions":"Öneriler:","try_different_more_general_or_fewer_keywords":"Daha farklı , daha genel veya daha az anahtar kelime kullanmayı deneyin.","try_disabling_the_unread_filter":"\\"Okunmamış\\" filtresini devre dışı bırakmayı deneyiniz.","your_search_did_not_match_any_entries":"Arama sonucunuza göre eşleşen kayıt bulunamadı."}}},"uk":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"Переконайтеся, що всі пошукові терміни написані вірно.","suggestions":"Пропозиції:","try_different_more_general_or_fewer_keywords":"Спробуйте інші, більш загальні ключові слова, або зменшіть їхню кількість.","try_disabling_the_unread_filter":"Спробуйте відключити фільтр \\"Непрочитані\\".","your_search_did_not_match_any_entries":"За Вашим запитом не знайдено жодного запису."}}},"zh-Hans":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"确保所有的搜索词拼写正确。","suggestions":"建议:","try_different_more_general_or_fewer_keywords":"尝试其它、更常用或更少的关键字。","try_disabling_the_unread_filter":"尝试禁用“未读”筛选器。","your_search_did_not_match_any_entries":"您的搜索不匹配任何条目。"}}},"zh-Hant":{"discussions":{"no_results":{"make_sure_all_search_terms_are_spelled_correctly":"確保所有的搜索詞均拼寫正確。","suggestions":"建議：","try_different_more_general_or_fewer_keywords":"嘗試不同的、更普遍的或更少的關鍵字。","try_disabling_the_unread_filter":"嘗試停用『未讀取』篩選器。","your_search_did_not_match_any_entries":"您的搜索未找到任何相符的輸入項目。"}}}}'))
x["default"].scoped("discussions.no_results")
var Te=A.a.default
var je=Te.template,De=Te.templates=Te.templates||{}
var Ne="discussions/noResults"
De[Ne]=je(function(e,t,r,s,a){this.compilerInfo=[4,">= 1.0.0"]
r=this.merge(r,e.helpers)
a=a||{}
var i,n,o="",_=r.helperMissing,d=this.escapeExpression
o+="<p>\n  "+d((i=r.t||t&&t.t,n={hash:{scope:"discussions.no_results"},data:a},i?i.call(t,"your_search_did_not_match_any_entries","Your search did not match any entries.",n):_.call(t,"t","your_search_did_not_match_any_entries","Your search did not match any entries.",n)))+"\n</p>\n<p>\n"+d((i=r.t||t&&t.t,n={hash:{scope:"discussions.no_results"},data:a},i?i.call(t,"suggestions","Suggestions:",n):_.call(t,"t","suggestions","Suggestions:",n)))+"\n<ul>\n  <li>"+d((i=r.t||t&&t.t,n={hash:{scope:"discussions.no_results"},data:a},i?i.call(t,"make_sure_all_search_terms_are_spelled_correctly","Make sure all search terms are spelled correctly.",n):_.call(t,"t","make_sure_all_search_terms_are_spelled_correctly","Make sure all search terms are spelled correctly.",n)))+"</li>\n  <li>"+d((i=r.t||t&&t.t,n={hash:{scope:"discussions.no_results"},data:a},i?i.call(t,"try_different_more_general_or_fewer_keywords","Try different, more general, or fewer keywords.",n):_.call(t,"t","try_different_more_general_or_fewer_keywords","Try different, more general, or fewer keywords.",n)))+"</li>\n  <li>"+d((i=r.t||t&&t.t,n={hash:{scope:"discussions.no_results"},data:a},i?i.call(t,"try_disabling_the_unread_filter",'Try disabling the "Unread" filter.',n):_.call(t,"t","try_disabling_the_unread_filter",'Try disabling the "Unread" filter.',n)))+"</li>\n</ul>\n"
return o})
var Oe=De[Ne]
Object(R["a"])(JSON.parse('{"ar":{"discussions":{"results_entry":{"edited_comment":"تم التحرير بواسطة *%{editor.display_name}* على %{edited_at}","view_in_discussion":"عرض في مناقشة"}}},"cy":{"discussions":{"results_entry":{"edited_comment":"Wedi golygu gan *%{editor.display_name}* ar %{edited_at}","view_in_discussion":"Gweld yn y trafodaeth"}}},"da":{"discussions":{"results_entry":{"edited_comment":"Redigeret af *%{editor.display_name}* d. %{edited_at}","view_in_discussion":"Vis i diskussion"}}},"da-x-k12":{"discussions":{"results_entry":{"edited_comment":"Redigeret af *%{editor.display_name}* d. %{edited_at}","view_in_discussion":"Vis i diskussion"}}},"de":{"discussions":{"results_entry":{"edited_comment":"Bearbeitet von *%{editor.display_name}* am %{edited_at}","view_in_discussion":"In Diskussion anzeigen"}}},"el":{"discussions":{"results_entry":{"view_in_discussion":"Προβολή σε συζήτηση"}}},"en-AU":{"discussions":{"results_entry":{"edited_comment":"Edited by *%{editor.display_name}* on %{edited_at}","view_in_discussion":"View in discussion"}}},"en-CA":{"discussions":{"results_entry":{"edited_comment":"Edited by *%{editor.display_name}* on %{edited_at}","view_in_discussion":"View in discussion"}}},"en-GB":{"discussions":{"results_entry":{"edited_comment":"Edited by *%{editor.display_name}* on %{edited_at}","view_in_discussion":"View in discussion"}}},"es":{"discussions":{"results_entry":{"edited_comment":"Editado por *%{editor.display_name}* el %{edited_at}","view_in_discussion":"Ver en foro"}}},"fa":{"discussions":{"results_entry":{"edited_comment":"ویرایش شده توسط *%{editor.display_name}* در %{edited_at}","view_in_discussion":"نظر دادن در بحث"}}},"fi":{"discussions":{"results_entry":{"edited_comment":"Muokkaaja *%{editor.display_name}* %{edited_at}","view_in_discussion":"Näytä keskustelu"}}},"fr":{"discussions":{"results_entry":{"edited_comment":"Modifié par *%{editor.display_name}* le %{edited_at}","view_in_discussion":"Afficher dans la discussion"}}},"fr-CA":{"discussions":{"results_entry":{"edited_comment":"Édité par *%{editor.display_name}* le %{edited_at}","view_in_discussion":"Afficher dans la discussion"}}},"he":{"discussions":{"results_entry":{"edited_comment":"נערך ע\\"י *%{editor.display_name}* ב %{edited_at}","view_in_discussion":"עיון בדיון"}}},"ht":{"discussions":{"results_entry":{"edited_comment":"Modifye pa *%{editor.display_name}* nan dat %{edited_at}","view_in_discussion":"Afiche nan Diskisyon"}}},"hu":{"discussions":{"results_entry":{"view_in_discussion":"Megtekintés a fórumban"}}},"hy":{"discussions":{"results_entry":{"view_in_discussion":"Նայել քննարկումներում"}}},"is":{"discussions":{"results_entry":{"edited_comment":" *%{editor.display_name}* breytti þessu %{edited_at}","view_in_discussion":"Skoða í umræðu"}}},"it":{"discussions":{"results_entry":{"edited_comment":"Modificato da *%{editor.display_name}* il %{edited_at}","view_in_discussion":"Visualizza nella discussione"}}},"ja":{"discussions":{"results_entry":{"edited_comment":"*%{editor.display_name}* によって～に編集%{edited_at}","view_in_discussion":"ディスカッションで表示"}}},"ko":{"discussions":{"results_entry":{"view_in_discussion":"토론에서 보기"}}},"mi":{"discussions":{"results_entry":{"edited_comment":"Whakatikahia e *%{editor.display_name}* i runga i %{edited_at}","view_in_discussion":"Tirohia i roto i te kōrero"}}},"nb":{"discussions":{"results_entry":{"edited_comment":"Redigert av *%{editor.display_name}* på %{edited_at}","view_in_discussion":"Vis i diskusjon"}}},"nb-x-k12":{"discussions":{"results_entry":{"edited_comment":"Redigert av *%{editor.display_name}* på %{edited_at}","view_in_discussion":"Vis i diskusjon"}}},"nl":{"discussions":{"results_entry":{"edited_comment":"Bewerkt door *%{editor.display_name}* op %{edited_at}","view_in_discussion":"Weergave van discussie"}}},"nn":{"discussions":{"results_entry":{"edited_comment":"Redigert av *%{editor.display_name}* den %{edited_at}","view_in_discussion":"Vis i diskusjon"}}},"pl":{"discussions":{"results_entry":{"edited_comment":"Edytowane przez *%{editor.display_name}* w dniu %{edited_at}","view_in_discussion":"Pokaż w dyskusji"}}},"pt":{"discussions":{"results_entry":{"edited_comment":"Editado por *%{editor.display_name}* em %{edited_at}","view_in_discussion":"Ver em discussão"}}},"pt-BR":{"discussions":{"results_entry":{"edited_comment":"Editado por *%{editor.display_name}* em %{edited_at}","view_in_discussion":"Visualizar em discussão"}}},"ru":{"discussions":{"results_entry":{"edited_comment":"Отредактировано *%{editor.display_name}* в дату: %{edited_at}","view_in_discussion":"Смотреть в обсуждении"}}},"sl":{"discussions":{"results_entry":{"edited_comment":"Uredil urednik *%{editor.display_name}* dne %{edited_at}","view_in_discussion":"Ogled v razpravi"}}},"sv":{"discussions":{"results_entry":{"edited_comment":"Redigerad av *%{editor.display_name}* den %{edited_at}","view_in_discussion":"Visa i diskussionen"}}},"sv-x-k12":{"discussions":{"results_entry":{"edited_comment":"Redigerad av *%{editor.display_name}* den %{edited_at}","view_in_discussion":"Visa i diskussionen"}}},"tr":{"discussions":{"results_entry":{"edited_comment":"*%{editor.display_name}* tarafından %{edited_at} zamanında düzenlendi","view_in_discussion":"Tartışmayı gör"}}},"uk":{"discussions":{"results_entry":{"edited_comment":"Відредаговано *%{editor.display_name}* на %{edited_at}","view_in_discussion":"Переглянути в обговоренні"}}},"zh-Hans":{"discussions":{"results_entry":{"edited_comment":"“*%{editor.display_name}*”已编辑，时间%{edited_at}","view_in_discussion":"查看讨论"}}},"zh-Hant":{"discussions":{"results_entry":{"edited_comment":"由 *%{editor.display_name}* 編輯%{edited_at}","view_in_discussion":"檢視討論"}}}}'))
x["default"].scoped("discussions.results_entry")
var ze=A.a.default
var Ie=ze.template,Pe=ze.templates=ze.templates||{}
var Me="discussions/results-entry"
Pe[Me]=Ie(function(e,t,r,s,a){this.compilerInfo=[4,">= 1.0.0"]
r=this.merge(r,e.helpers)
s=this.merge(s,e.partials)
a=a||{}
var i,n,o,_="",d=r.helperMissing,l=this.escapeExpression,c="function",u=this
function p(e,t){var s,a,i,n=""
n+='\n       <div class="discussion-fyi">'
s=(a=r.__i18nliner_escape||e&&e.__i18nliner_escape,i={hash:{},data:t},a?a.call(e,e&&e.editor_href,i):d.call(e,"__i18nliner_escape",e&&e.editor_href,i))
s=(a=r.__i18nliner_concat||e&&e.__i18nliner_concat,i={hash:{},data:t},a?a.call(e,'<a href="',s,'">$1</a>',i):d.call(e,"__i18nliner_concat",'<a href="',s,'">$1</a>',i))
n+=l((a=r.t||e&&e.t,i={hash:{w0:s,"editor.display_name":(s=e&&e.editor,null==s||false===s?s:s.display_name),edited_at:e&&e.edited_at,scope:"discussions.results_entry"},data:t},a?a.call(e,"edited_comment","Edited by *%{editor.display_name}* on %{edited_at}",i):d.call(e,"t","edited_comment","Edited by *%{editor.display_name}* on %{edited_at}",i)))+"</div>\n      "
return n}function h(e,t){var s,a=""
a+='\n        <div class="comment_attachments">\n          '
s=r.each.call(e,e&&e.attachments,{hash:{},inverse:u.noop,fn:u.program(4,m,t),data:t});(s||0===s)&&(a+=s)
a+="\n        </div>\n      "
return a}function m(e,t){var s,a,i,n=""
n+='\n            <div><a href="'
if(a=r.url)s=a.call(e,{hash:{},data:t})
else{a=e&&e.url
s=typeof a===c?a.call(e,{hash:{},data:t}):a}n+=l(s)+'" class="'+l((a=r.mimeClass||e&&e.mimeClass,i={hash:{},data:t},a?a.call(e,e&&e["content-type"],i):d.call(e,"mimeClass",e&&e["content-type"],i)))+'" title="'
if(a=r.filename)s=a.call(e,{hash:{},data:t})
else{a=e&&e.filename
s=typeof a===c?a.call(e,{hash:{},data:t}):a}n+=l(s)+'">'
if(a=r.display_name)s=a.call(e,{hash:{},data:t})
else{a=e&&e.display_name
s=typeof a===c?a.call(e,{hash:{},data:t}):a}n+=l(s)+"</a></div>\n          "
return n}_+='<article class="discussion_entry">\n  <a href="#"\n     class="discussion-read-state-btn"\n     role="button"\n     title=""\n     data-tooltip=\'{ "position": "top", "collision": "none" }\'\n     data-event="toggleRead">\n    <div class="discussion-read-state tooltip data-tooltip"></div>\n  </a>\n  <div class="entry-content">\n    <header class="entry-header discussion-section">\n      '
i=u.invokePartial(s.avatar,"avatar",t&&t.author,r,s,a);(i||0===i)&&(_+=i)
_+='\n      <div class="discussion-header-content right-of-avatar">\n        <div class="discussion-header-right">\n          <div class="discussion-title">\n            '
i=u.invokePartial(s["discussions/author_link"],"discussions/author_link",t,r,s,a);(i||0===i)&&(_+=i)
_+='\n          </div>\n          <div class="discussion-pubdate hide-if-collapsed">'+l((n=r.friendlyDatetime||t&&t.friendlyDatetime,o={hash:{pubdate:true,contextSensitive:true},data:a},n?n.call(t,t&&t.created_at,o):d.call(t,"friendlyDatetime",t&&t.created_at,o)))+'</div>\n        </div>\n      </div>\n    </header>\n    <div class="discussion-section message_wrapper">\n      <div class="message user_content">'+l((n=r.convertApiUserContent||t&&t.convertApiUserContent,o={hash:{},data:a},n?n.call(t,t&&t.message,o):d.call(t,"convertApiUserContent",t&&t.message,o)))+"</div>\n      "
i=r["if"].call(t,t&&t.editor,{hash:{},inverse:u.noop,fn:u.program(1,p,a),data:a});(i||0===i)&&(_+=i)
_+="\n      "
i=r["if"].call(t,t&&t.attachments,{hash:{},inverse:u.noop,fn:u.program(3,h,a),data:a});(i||0===i)&&(_+=i)
_+='\n    </div>\n    <div class="entry-controls">\n      <a href="#entry-'
if(n=r.id)i=n.call(t,{hash:{},data:a})
else{n=t&&t.id
i=typeof n===c?n.call(t,{hash:{},data:a}):n}_+=l(i)+'" class="viewInDiscussion">'+l((n=r.t||t&&t.t,o={hash:{scope:"discussions.results_entry"},data:a},n?n.call(t,"view_in_discussion","View in discussion",o):d.call(t,"t","view_in_discussion","View in discussion",o)))+"</a>\n    </div>\n  </div>\n</article>\n"
return _})
var Le=Pe[Me]
var Ue=function(e,t){return function(){return e.apply(t,arguments)}},Ve=function(e,t){for(var r in t)Fe.call(t,r)&&(e[r]=t[r])
function s(){this.constructor=e}s.prototype=t.prototype
e.prototype=new s
e.__super__=t.prototype
return e},Fe={}.hasOwnProperty
var Be=function(e){Ve(t,e)
function t(){this.updateReadState=Ue(this.updateReadState,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.els={".discussion_entry:first":"$entryContent",".discussion-read-state-btn:first":"$readStateToggle"}
t.prototype.events={click:"click","click .discussion-read-state-btn":"toggleRead"}
t.prototype.tagName="li"
t.prototype.className="entry"
t.prototype.template=Le
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.model.on("change:read_state",this.updateReadState)}
t.prototype.toJSON=function(){var e
e=this.model.attributes
e.edited_at=$.datetimeString(e.updated_at)
if(e.editor){e.editor_name=e.editor.display_name
e.editor_href=e.editor.html_url}else{e.editor_name=a["a"].t("unknown","Unknown")
e.editor_href="#"}return e}
t.prototype.click=function(){return this.trigger("click",this)}
t.prototype.afterRender=function(){t.__super__.afterRender.apply(this,arguments)
return this.updateReadState()}
t.prototype.toggleRead=function(e){e.stopPropagation()
e.preventDefault()
return"read"===this.model.get("read_state")?this.model.markAsUnread():this.model.markAsRead()}
t.prototype.updateReadState=function(){this.updateTooltip()
this.$entryContent.toggleClass("unread","unread"===this.model.get("read_state"))
return this.$entryContent.toggleClass("read","read"===this.model.get("read_state"))}
t.prototype.updateTooltip=function(){var e
e="unread"===this.model.get("read_state")?a["a"].t("mark_as_read","Mark as Read"):a["a"].t("mark_as_unread","Mark as Unread")
return this.$readStateToggle.attr("title",e)}
return t}(d["View"])
Object(R["a"])(JSON.parse('{"ar":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"إضافة رد إلى الموضوع"}}},"cy":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"Ychwanegu Ateb at Bwnc"}}},"da":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"Føj svar til emne"}}},"da-x-k12":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"Føj svar til emne"}}},"de":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"Auf Thema antworten"}}},"el":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"Προσθήκη Απάντησης στο Θέμα"}}},"en-AU":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"Add Reply to Topic"}}},"en-CA":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"Add Reply to Topic"}}},"en-GB":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"Add reply to topic"}}},"es":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"Agregar respuesta al tema"}}},"fa":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"افزودن پاسخ به موضوع"}}},"fi":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"Lisää vastaus aiheeseen"}}},"fr":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"Ajouter une réponse au sujet"}}},"fr-CA":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"Ajouter une réponse au sujet"}}},"he":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"הוספת תגובה לנושא"}}},"ht":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"Ajoute Repons a Tèm"}}},"hu":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"Válasz hozzáadása a témához"}}},"hy":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"Թեմայի առնչությամբ ավելացնել պատասխան"}}},"is":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"Bæta svari við umræðuefni"}}},"it":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"Aggiungi risposta all\'argomento"}}},"ja":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"トピックへの返信を追加"}}},"ko":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"주제에 답변 추가"}}},"mi":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"Tāpiri whakautu ki Kaupapa"}}},"nb":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"Legg til svar på temaet"}}},"nb-x-k12":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"Legg til svar på temaet"}}},"nl":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"Antwoord op onderwerp toevoegen"}}},"nn":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"Legg til svar til emne"}}},"pl":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"Dodaj odpowiedź do tematu"}}},"pt":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"Adicionar resposta ao tópico"}}},"pt-BR":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"Adicionar resposta ao tópico"}}},"ru":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"Добавить ответ к теме"}}},"sl":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"Dodaj odgovor temi"}}},"sv":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"Lägg till svar på ämnet"}}},"sv-x-k12":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"Lägg till svar på ämnet"}}},"tr":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"Konuya Cevap Ekle"}}},"uk":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"Додати відповідь до теми"}}},"zh-Hans":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"将回复添加至主题"}}},"zh-Hant":{"discussions":{"entry_collection_view":{"add_reply_to_topic":"添加回復至主題"}}}}'))
x["default"].scoped("discussions.entry_collection_view")
var He=A.a.default
var Ge=He.template,$e=He.templates=He.templates||{}
var Ke="discussions/EntryCollectionView"
$e[Ke]=Ge(function(e,t,r,s,a){this.compilerInfo=[4,">= 1.0.0"]
r=this.merge(r,e.helpers)
a=a||{}
var i,n="",o=r.helperMissing,_=this.escapeExpression,d=this
function l(e,t){var s,a,i=""
i+='\n  <span class="add_root_reply"><a href="*" class="btn btn-primary btn-small icon-arrow-up">'+_((s=r.t||e&&e.t,a={hash:{scope:"discussions.entry_collection_view"},data:t},s?s.call(e,"add_reply_to_topic","Add Reply to Topic",a):o.call(e,"t","add_reply_to_topic","Add Reply to Topic",a)))+"</a></span>\n"
return i}n+='<ul class="discussion-entries"></ul>\n\n'
i=r["if"].call(t,t&&t.showReplyButton,{hash:{},inverse:d.noop,fn:d.program(1,l,a),data:a});(i||0===i)&&(n+=i)
n+="\n\n"
return n})
var We=$e[Ke]
r("l8Bj")
var Je=function(e,t){for(var r in t)qe.call(t,r)&&(e[r]=t[r])
function s(){this.constructor=e}s.prototype=t.prototype
e.prototype=new s
e.__super__=t.prototype
return e},qe={}.hasOwnProperty
var Ye=function(e){Je(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.defaults={descendants:2,showMoreDescendants:2,showReplyButton:false,displayShowMore:true,threaded:false,root:false}
t.prototype.events={"click .loadNext":"loadNextFromEvent"}
t.prototype.template=We
t.prototype.$window=n()(window)
t.prototype.els={".discussion-entries":"list"}
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.childViews=[]}
t.prototype.attach=function(){this.collection.on("reset",this.addAll,this)
return this.collection.on("add",this.add,this)}
t.prototype.toJSON=function(){return this.options}
t.prototype.addAll=function(){this.teardown()
return this.collection.each(this.add.bind(this))}
t.prototype.add=function(e){var t
t=new Ae({model:e,treeView:this.constructor,descendants:this.options.descendants,children:this.collection.options.perPage,showMoreDescendants:this.options.showMoreDescendants,threaded:this.options.threaded,collapsed:this.options.collapsed})
t.render()
e.on("change:editor",this.nestEntries)
if(e.get("new"))return this.addNewView(t)
this.options.descendants?t.renderTree():e.hasChildren()&&t.renderDescendantsLink()
this.options.threaded||this.options.root?this.list.append(t.el):this.list.prepend(t.el)
this.childViews.push(t)
return this.nestEntries()}
t.prototype.nestEntries=function(){var e
e=Object(be["c"])()?"right":"left"
return n()(".entry-content[data-should-position]").each(function(){var t,r,s
t=n()(this)
r=t.parents("li.entry").length
s=30*(r-1)
t.css("padding-"+e,s).removeAttr("data-should-position")
return t.find(".discussion-title").attr({role:"heading","aria-level":r+1})})}
t.prototype.addNewView=function(e){e.model.set("new",false)
this.list.append(e.el)
this.nestEntries()
if(!this.options.root){this.$window.scrollTo(e.$el,200)
e.$el.hide()
return setTimeout(function(){return e.$el.fadeIn()},500)}}
t.prototype.teardown=function(){return this.list.empty()}
t.prototype.afterRender=function(){t.__super__.afterRender.apply(this,arguments)
this.addAll()
return this.renderNextLink()}
t.prototype.renderNextLink=function(){var e,t,r
null!=(t=this.nextLink)&&t.remove()
if(!(this.options.displayShowMore&&this.unShownChildren()>0))return
r=this.getUnshownStats()
this.nextLink=n()("<div/>")
true
this.options.threaded||(e=a["a"].t("show_all_n_replies",{one:"Show one reply",other:"Show all %{count} replies"},{count:r.total+this.collection.options.perPage}))
this.nextLink.html(re({stats:r,moreText:e,showMore:true}))
this.nextLink.addClass("showMore loadNext")
return this.options.threaded?this.nextLink.insertAfter(this.list):this.nextLink.insertBefore(this.list)}
t.prototype.getUnshownStats=function(){var e,t,r,s,a
t=this.collection.length
e=this.collection.fullCollection.length
a=this.collection.fullCollection.toJSON().slice(t,e)
r=0
s=0
g(a,"replies",function(e){r++
if("unread"===e.read_state)return s++})
return{total:r,unread:s}}
t.prototype.unShownChildren=function(){return this.collection.fullCollection.length-this.collection.length}
t.prototype.loadNextFromEvent=function(e){e.stopPropagation()
e.preventDefault()
return this.loadNext()}
t.prototype.loadNext=function(){this.options.threaded?this.collection.add(this.collection.fullCollection.getPage("next")):this.collection.reset(this.collection.fullCollection.toArray())
return this.renderNextLink()}
t.prototype.filter=t.prototype.afterRender
return t}(d["View"])
var Qe=r("T5C8")
class Ze extends Ye{static initClass(){this.prototype.defaults=Object(Ce["a"])({},Ye.prototype.defaults,{descendants:0,displayShowMore:true,threaded:true})}initialize(){super.initialize(...arguments)
return this.allData=this.options.allData}attach(){return this.model.on("change",this.renderOrTeardownResults,this)}setAllReadState(e){if(null!=this.collection)return this.collection.fullCollection.each(t=>t.set("read_state",e))}resetCollection(e){const t=new S(e,{perPage:10})
this.collection=t.getPageAsCollection(0)
this.collection.on("add",this.add,this)
this.render()
return this.collection.on("change:read_state",(e,t)=>{this.trigger("readStateChanged",e.id,t)
const r=n()("#entry-".concat(e.id))
if(r.length){e=r.data("view").model
if(e)return e.set("read_state",t)}})}add(e){const t=new Be({model:e})
t.render()
t.on("click",()=>{this.clearModel()
return setTimeout(()=>this.trigger("clickEntry",t.model),1)})
return this.list.append(t.el)}toggleRead(e){e.preventDefault()
return"read"===this.model.get("read_state")?this.model.markAsUnread():this.model.markAsRead()}clearModel(){return this.model.reset()}render(){null!=this.collection&&super.render(...arguments)
this.trigger("render")
return this.$el.removeClass("hidden")}renderOrTeardownResults(){if(this.model.hasFilter()){let e=(()=>{const e=[]
for(const t in this.allData.flattened){const r=this.allData.flattened[t]
e.push(r)}return e})()
const t=this.model.toJSON()
for(const r in t){const s=t[r]
const a=this["".concat(r,"Filter")]
a&&(e=a(s,e))}return e.length?this.resetCollection(e):this.renderNoResults()}if(!this.model.hasFilter()){this.$el.addClass("hidden")
return this.trigger("hide")}}renderNoResults(){this.render()
return this.$el.html(Oe)}unreadFilter(e,t){if(!e)return t
e=_.a.filter(t,e=>"unread"===e.read_state)
return e.sort((e,t)=>Date.parse(e.created_at)-Date.parse(t.created_at))}queryFilter(e,t){const r=(null!=e?e:"").trim().split(/\s+/g).map(e=>new RegExp(Object(Qe["a"])(e),"i"))
if(!r.length)return t
return _.a.filter(t,e=>{if(e.deleted)return false
const t="".concat(e.message,"\n").concat(e.author.display_name)
for(const e of r)if(!e.test(t))return false
return true})}}Ze.initClass()
var Xe=r("q1tI")
var et=r.n(Xe)
var tt=r("i8i4")
var rt=r.n(tt)
var st=r("etQE")
var at=r("MggM")
var it=r("w8vW")
var nt,ot=function(e,t){return function(){return e.apply(t,arguments)}},_t=function(e,t){for(var r in t)dt.call(t,r)&&(e[r]=t[r])
function s(){this.constructor=e}s.prototype=t.prototype
e.prototype=new s
e.__super__=t.prototype
return e},dt={}.hasOwnProperty,lt=[].indexOf||function(e){for(var t=0,r=this.length;t<r;t++)if(t in this&&this[t]===e)return t
return-1}
nt={avatar_image_url:null,display_name:a["a"].t("uknown_author","Unknown Author"),id:null}
var ct=function(e){_t(t,e)
function t(){this.setEntryRoot=ot(this.setEntryRoot,this)
this.parseNewEntry=ot(this.parseNewEntry,this)
this.parseEntry=ot(this.parseEntry,this)
this.setEntryState=ot(this.setEntryState,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.defaults={view:[],entries:[],new_entries:[],unread_entries:[],forced_entries:[],entry_ratings:{}}
t.prototype.url=function(){return this.get("root_url")}
t.prototype.fetch=function(e){null==e&&(e={})
return Object(st["b"])(Object(st["e"])(this.url())).then((t=this,function(r){t.set(t.parse(r))
return"function"===typeof e.success?e.success(t,r):void 0}),function(t){return function(){var r
r=new at["a"](t.url(),function(r,s){if(503===s.status)return"continue"
if(200!==s.status)return"abort"
t.set(t.parse(r,200,s))
"function"===typeof e.success&&e.success(t,r)
return"stop"},{handleErrors:true,initialDelay:false,baseInterval:2e3,maxAttempts:12,backoffFactor:1.6})
return r.start()}}(this))
var t}
t.prototype.markAllAsRead=function(){n.a.ajaxJSON(ENV.DISCUSSION.MARK_ALL_READ_URL,"PUT",{forced_read_state:false})
return this.setAllReadState("read")}
t.prototype.markAllAsUnread=function(){n.a.ajaxJSON(ENV.DISCUSSION.MARK_ALL_UNREAD_URL,"DELETE",{forced_read_state:false})
return this.setAllReadState("unread")}
t.prototype.setAllReadState=function(e){return Object(o["each"])(this.flattened,function(t){return t.read_state=e})}
t.prototype.parse=function(e,t,r){this.data=e
this.data.entries=[]
this.flattened={}
this.lastRoot=null
this.participants={}
this.flattenParticipants()
g(this.data.view,"replies",this.parseEntry)
Object(o["each"])(this.data.new_entries,this.parseNewEntry)
g(this.data.entries,"replies",this.setEntryRoot)
delete this.lastRoot
return this.data}
t.prototype.flattenParticipants=function(){var e,t,r,s,a
s=this.data.participants
a=[]
for(e=0,t=s.length;e<t;e++){r=s[e]
a.push(this.participants[r.id]=r)}return a}
t.prototype.setEntryAuthor=function(e){return null!=e.user_id?e.author=this.participants[e.user_id]:e.author=nt}
t.prototype.setEntryState=function(e){var t,r
e.parent=this.flattened[e.parent_id];(t=e.id,lt.call(this.data.unread_entries,t)>=0)&&(e.read_state="unread");(r=e.id,lt.call(this.data.forced_entries,r)>=0)&&(e.forced_read_state=true)
e.rating=this.data.entry_ratings[e.id]
this.setEntryAuthor(e)
if(null!=e.editor_id)return e.editor=this.participants[e.editor_id]}
t.prototype.parseEntry=function(e){this.setEntryState(e)
this.flattened[e.id]=e
e.parent||this.data.entries.push(e)
return e}
t.prototype.parseNewEntry=function(e){var t,r,s
this.setEntryState(e)
if(r=this.flattened[e.id]){Object(o["extend"])(r,e)
return}this.flattened[e.id]=e
s=this.flattened[e.parent_id]
e.parent=s
return e.parent?(null!=(t=e.parent).replies?t.replies:t.replies=[]).push(e):this.data.entries.push(e)}
t.prototype.setEntryRoot=function(e){if(null!=e.parent_id){e.root_entry=this.lastRoot
return e.root_entry_id=this.lastRoot.id}return this.lastRoot=e}
t.prototype.maybeRemove=function(e){var t
if(e.deleted&&!e.replies){null!=(null!=(t=e.parent)?t.replies:void 0)&&Object(it["a"])(e.parent.replies,e)
return delete this.flattened[e.id]}}
return t}(l.a.Model)
class ut extends ct{parse(){super.parse(...arguments)
for(var e of this.data.entries)e.replies=[]
for(const t in this.flattened){e=this.flattened[t]
if(e.root_entry_id){delete e.replies
const t=this.flattened[e.root_entry_id]
t.replies.push(e)
e.parent=t
e.parent_id=t.id}}for(e of this.data.entries){e.replies.sort((e,t)=>Date.parse(t.created_at)-Date.parse(e.created_at))
ENV.DISCUSSION.SORT_BY_RATING&&e.replies.sort((e,t)=>(e.rating_sum||0)-(t.rating_sum||0))}return this.data}}class pt extends l.a.View{showKeyboardShortcutModalInfo(e){n()(e.currentTarget).children(".accessibility-warning").show()}hideKeyboardShortcutModalInfo(e){n()(e.currentTarget).children(".accessibility-warning").hide()}}pt.prototype.events={"focus #keyboard-shortcut-modal-info":"showKeyboardShortcutModalInfo","blur #keyboard-shortcut-modal-info":"hideKeyboardShortcutModalInfo"}
var ht=r("ODXe")
var mt=r("ij1x")
var gt=r("7FZx")
Object(R["a"])(JSON.parse('{"ar":{"assignmentRubricDialog":{"loading":"جارٍ التحميل...","titles":{"assignment_rubric_details":"تفاصيل مقياس تقييم المهمة"}}},"cy":{"assignmentRubricDialog":{"loading":"Wrthi’n llwytho...","titles":{"assignment_rubric_details":"Manylion Cyfarwyddyd Sgorio Aseiniad"}}},"da":{"assignmentRubricDialog":{"loading":"Indlæser ...","titles":{"assignment_rubric_details":"Opgave rubrik-detaljer"}}},"de":{"assignmentRubricDialog":{"loading":"Wird geladen ...","titles":{"assignment_rubric_details":"Details des Aufgaben-Bewertungsschemas"}}},"el":{"assignmentRubricDialog":{"loading":"Φόρτωση...","titles":{"assignment_rubric_details":"Λεπτομέρειες Ρουμπρίκας Εργασίας"}}},"en-AU":{"assignmentRubricDialog":{"loading":"Loading...","titles":{"assignment_rubric_details":"Assignment Rubric Details"}}},"en-CA":{"assignmentRubricDialog":{"loading":"Loading...","titles":{"assignment_rubric_details":"Assignment Rubric Details"}}},"en-GB":{"assignmentRubricDialog":{"loading":"Loading...","titles":{"assignment_rubric_details":"Assignment rubric details"}}},"es":{"assignmentRubricDialog":{"loading":"Cargando...","titles":{"assignment_rubric_details":"Detalles de la rúbrica de la tarea"}}},"fa":{"assignmentRubricDialog":{"loading":"در حال بارگذاری...","titles":{"assignment_rubric_details":"اطلاعات دستورالعمل ارزیابی تکلیف"}}},"fi":{"assignmentRubricDialog":{"loading":"Ladataan...","titles":{"assignment_rubric_details":"Tehtävän rubriikkitiedot"}}},"fr":{"assignmentRubricDialog":{"loading":"Chargement...","titles":{"assignment_rubric_details":"Informations du barème des tâches"}}},"fr-CA":{"assignmentRubricDialog":{"loading":"En cours de chargement...","titles":{"assignment_rubric_details":"Informations du barème des tâches"}}},"he":{"assignmentRubricDialog":{"loading":"בטעינה... ","titles":{"assignment_rubric_details":"פרטי טור המשימה"}}},"ht":{"assignmentRubricDialog":{"loading":"Chajman...","titles":{"assignment_rubric_details":"Detay Sesyon Ribrik"}}},"hu":{"assignmentRubricDialog":{"loading":"Betöltés...","titles":{"assignment_rubric_details":"Feladat értékelőtáblájának részletei"}}},"hy":{"assignmentRubricDialog":{"loading":"Բեռնում է...","titles":{"assignment_rubric_details":"Հանձնարարության ռուբրիկի մանրամասներ"}}},"is":{"assignmentRubricDialog":{"loading":"Hleð inn...","titles":{"assignment_rubric_details":"Upplýsingar um matsviðmið verkefnis"}}},"it":{"assignmentRubricDialog":{"loading":"Caricamento in corso...","titles":{"assignment_rubric_details":"Dettagli rubrica compito"}}},"ja":{"assignmentRubricDialog":{"loading":"読み込み中・・・","titles":{"assignment_rubric_details":"課題の注釈の詳細表示"}}},"ko":{"assignmentRubricDialog":{"loading":"로드하는 중...","titles":{"assignment_rubric_details":"과제 루브릭 세부 정보"}}},"mi":{"assignmentRubricDialog":{"loading":"E Uta ana ....","titles":{"assignment_rubric_details":"whakataunga Rubric Taipitopito"}}},"nb":{"assignmentRubricDialog":{"loading":"Laster...","titles":{"assignment_rubric_details":"Detaljer om oppgaverubrikk, vurderingsveiledning"}}},"nl":{"assignmentRubricDialog":{"loading":"Bezig met laden...","titles":{"assignment_rubric_details":"Details van opdrachtrubriek"}}},"nn":{"assignmentRubricDialog":{"loading":"Lastar...","titles":{"assignment_rubric_details":"Detaljar om vurderingsskjemaet"}}},"pl":{"assignmentRubricDialog":{"loading":"Wczytywanie...","titles":{"assignment_rubric_details":"Informacje szczegółowe dot. kryteriów oceny zadań"}}},"pt":{"assignmentRubricDialog":{"loading":"A carregar...","titles":{"assignment_rubric_details":"Detalhe do protocolo da tarefa"}}},"pt-BR":{"assignmentRubricDialog":{"loading":"Carregando...","titles":{"assignment_rubric_details":"Detalhe do protocolo da tarefa"}}},"ru":{"assignmentRubricDialog":{"loading":"Выполняется загрузка...","titles":{"assignment_rubric_details":"Сведения о рубрике заданий"}}},"sv":{"assignmentRubricDialog":{"loading":"Läser in ...","titles":{"assignment_rubric_details":"Detaljer om uppgiftens matris"}}},"tr":{"assignmentRubricDialog":{"loading":"Yükleniyor...","titles":{"assignment_rubric_details":"Ödev Değerlendirme Listesi Detayları"}}},"zh-Hans":{"assignmentRubricDialog":{"loading":"加载中……","titles":{"assignment_rubric_details":"作业评分标准详细说明"}}},"zh-Hant":{"assignmentRubricDialog":{"loading":"正在載入……","titles":{"assignment_rubric_details":"作業評分標準詳細資料"}}}}'))
var ft=x["default"].scoped("assignmentRubricDialog")
r("YGE8")
const yt={initTriggers(){const e=n()(".rubric_dialog_trigger")
if(e){this.noRubricExists=e.data("noRubricExists")
const t=e.data("focusReturnsTo")
try{this.$focusReturnsTo=n()(document.querySelector(t))}catch(e){}e.click(e=>{e.preventDefault()
yt.openDialog()})}},initDialog(){this.dialogInited=true
this.$dialog=n()("<div><h4>".concat(Object(ae["a"])(ft.t("loading","Loading...")),"</h4></div>")).dialog({title:ft.t("titles.assignment_rubric_details","Assignment Rubric Details"),width:600,modal:false,resizable:true,autoOpen:false,close:()=>this.$focusReturnsTo.focus()})
return n.a.get(ENV.DISCUSSION.GRADED_RUBRICS_URL,e=>{yt.noRubricExists&&n.a.subscribe("edit_rubric/initted",()=>yt.$dialog.find(".btn.add_rubric_link").click())
yt.$dialog.html(n()(e).show())})},openDialog(){this.dialogInited||this.initDialog()
this.$dialog.dialog("open")}}
var vt=yt
var bt=r("xe+K")
var kt=r("H4Sz")
class wt extends l.a.View{static initClass(){this.prototype.events={"click #discussion_topic .discussion-reply-action[data-event]":"handleEvent","click .add_root_reply":"addRootReply","click .discussion_locked_toggler":"toggleLocked","click .toggle_due_dates":"toggleDueDates","click .rte_switch_views_link":"toggleEditorMode","click .topic-subscribe-button":"subscribeTopic","click .topic-unsubscribe-button":"unsubscribeTopic","click .mark_all_as_read":"markAllAsRead","click .mark_all_as_unread":"markAllAsUnread"}
this.prototype.els={".add_root_reply":"$addRootReply",".topic .discussion-entry-reply-area":"$replyLink",".due_date_wrapper":"$dueDates",".reply-textarea:first":"$textarea","#discussion-toolbar":"$discussionToolbar",".topic-subscribe-button":"$subscribeButton",".topic-unsubscribe-button":"$unsubscribeButton",".announcement_cog":"$announcementCog","#assignment_external_tools":"$AssignmentExternalTools"}
this.prototype.filter=this.prototype.afterRender
this.prototype.addReplyAttachment=Ae.prototype.addReplyAttachment
this.prototype.removeReplyAttachment=Ae.prototype.removeReplyAttachment}initialize(){super.initialize(...arguments)
this.model.set("id",ENV.DISCUSSION.TOPIC.ID)
this.model.cid="main"
this.model.set("canAttach",ENV.DISCUSSION.PERMISSIONS.CAN_ATTACH)
this.filterModel=this.options.filterModel
this.filterModel.on("change",this.hideIfFiltering,this)
this.topic=new mt["a"]({id:ENV.DISCUSSION.TOPIC.ID})
this.topic.url=ENV.DISCUSSION.ROOT_URL.replace(/\/view/m,"")
this.topic.set("subscribed",ENV.DISCUSSION.TOPIC.IS_SUBSCRIBED)
Ae.on("addReply",()=>this.setSubscribed(true))
n()(window).on("keydown",e=>this.handleKeyDown(e))}hideIfFiltering(){return this.filterModel.hasFilter()?this.$replyLink.addClass("hidden"):this.$replyLink.removeClass("hidden")}afterRender(){let e
super.afterRender(...arguments)
vt.initTriggers()
this.$el.toggleClass("side_comment_discussion",!ENV.DISCUSSION.THREADED)
this.subscriptionStatusChanged()
if(e=this.$("#topic_publish_button")){this.topic.set({unpublishable:ENV.DISCUSSION.TOPIC.CAN_UNPUBLISH,published:ENV.DISCUSSION.TOPIC.IS_PUBLISHED})
new gt["a"]({model:this.topic,el:e}).render()}const t=ENV.context_asset_string.split("_"),r=Object(ht["a"])(t,2),s=r[0],a=r[1]
if("course"===s){const e=this.$AssignmentExternalTools.get(0)
e&&(this.AssignmentExternalTools=kt["a"].attach(e,"assignment_view",parseInt(a),ENV.DISCUSSION.IS_ASSIGNMENT?parseInt(ENV.DISCUSSION.ASSIGNMENT_ID):void 0))}}toggleLocked(e){const t=n()(e.currentTarget).data("mark-locked")
return this.topic.save({locked:t}).done(()=>window.location.reload())}toggleDueDates(e){e.preventDefault()
this.$dueDates.toggleClass("hidden")
n()(e.currentTarget).text(this.$dueDates.hasClass("hidden")?a["a"].t("show_due_dates","Show Due Dates"):a["a"].t("hide_due_dates","Hide Due Dates"))}toggleEditorMode(e){e.preventDefault()
e.stopPropagation()
bt["d"](this.$textarea,"toggle")
n()(e.currentTarget).siblings(".rte_switch_views_link").andSelf().toggle().focus()}subscribeTopic(e){e.preventDefault()
this.topic.topicSubscribe()
this.subscriptionStatusChanged()
if(this.$subscribeButton.is(":focus"))return this.$unsubscribeButton.focus()}unsubscribeTopic(e){e.preventDefault()
this.topic.topicUnsubscribe()
this.subscriptionStatusChanged()
if(this.$unsubscribeButton.is(":focus"))return this.$subscribeButton.focus()}subscriptionStatusChanged(){const e=this.topic.get("subscribed")
this.$discussionToolbar.removeClass("subscribed")
this.$discussionToolbar.removeClass("unsubscribed")
if(ENV.DISCUSSION.CAN_SUBSCRIBE)return e?this.$discussionToolbar.addClass("subscribed"):this.$discussionToolbar.addClass("unsubscribed")}addReply(e){null!=e&&e.preventDefault()
if(null==this.reply){this.reply=new he(this,{topLevel:true,focus:true})
this.reply.on("edit",()=>null!=this.$addRootReply?this.$addRootReply.hide():void 0)
this.reply.on("hide",()=>null!=this.$addRootReply?this.$addRootReply.show():void 0)
this.reply.on("save",e=>{ENV.DISCUSSION.CAN_SUBSCRIBE=true
this.topic.set("subscription_hold",false)
this.setSubscribed(true)
return this.trigger("addReply",e)})}this.model.set("notification","")
return this.reply.edit()}setSubscribed(e){this.topic.set("subscribed",true)
return this.subscriptionStatusChanged()}handleEvent(e){const t=n()(e.currentTarget)
const r=t.data("event")
return"function"===typeof this[r]?this[r](e,t):void 0}render(){if(ENV.DISCUSSION.PERMISSIONS.CAN_REPLY){const e=this.model.toJSON()
e.showBoxReplyLink=true
e.root=true
e.title=ENV.DISCUSSION.TOPIC.TITLE
e.isForMainDiscussion=true
e.use_rce_enhancements=ENV.use_rce_enhancements
const t=K(e)
this.$("#discussion_topic").append(t)}return super.render(...arguments)}format(e,t){return"notification"===e?t:Object(ae["a"])(t)}addRootReply(e){const t=n()("#discussion_topic .discussion-reply-form")
this.addReply(e)
n()("html, body").animate({scrollTop:t.offset().top-100})}markAllAsRead(e){e.preventDefault()
this.trigger("markAllAsRead")
return this.$announcementCog.focus()}markAllAsUnread(e){e.preventDefault()
this.trigger("markAllAsUnread")
return this.$announcementCog.focus()}handleKeyDown(e){const t=e.target.nodeName.toLowerCase()
if("input"===t||"textarea"===t)return
if(78!==e.which)return
this.addRootReply(e)
e.preventDefault()
return e.stopPropagation()}}wt.initClass()
Object(R["a"])(JSON.parse('{"ar":{"discussion_topics":{"page_nav":{"Page":"صفحة","current_page":"الحالي","first_page":"أولاً","last_page":"أخيرًا"}}},"cy":{"discussion_topics":{"page_nav":{"Page":"Tudalen","current_page":"Presennol","first_page":"Cyntaf","last_page":"Olaf"}}},"da":{"discussion_topics":{"page_nav":{"Page":"Side","current_page":"Aktuel","first_page":"Første","last_page":"Sidste"}}},"da-x-k12":{"discussion_topics":{"page_nav":{"Page":"Side","current_page":"Aktuel","first_page":"Første","last_page":"Sidste"}}},"de":{"discussion_topics":{"page_nav":{"Page":"Seite","current_page":"Aktuell","first_page":"Erste","last_page":"Letzte"}}},"el":{"discussion_topics":{"page_nav":{"Page":"Σελίδα","current_page":"Τρέχον","first_page":"Πρώτο","last_page":"Τελευταίο"}}},"en-AU":{"discussion_topics":{"page_nav":{"Page":"Page","current_page":"Current","first_page":"First","last_page":"Last"}}},"en-CA":{"discussion_topics":{"page_nav":{"Page":"Page","current_page":"Current","first_page":"First","last_page":"Last"}}},"en-GB":{"discussion_topics":{"page_nav":{"Page":"Page","current_page":"Current","first_page":"First","last_page":"Last"}}},"es":{"discussion_topics":{"page_nav":{"Page":"Página","current_page":"Actual","first_page":"Primera","last_page":"Última"}}},"fa":{"discussion_topics":{"page_nav":{"Page":"صفحه","current_page":"فعلی","first_page":"اولین","last_page":"آخرین"}}},"fi":{"discussion_topics":{"page_nav":{"Page":"Sivu","current_page":"Nykyinen","first_page":"Ensimmäinen","last_page":"Viimeinen"}}},"fr":{"discussion_topics":{"page_nav":{"Page":"Page","current_page":"Actuelle","first_page":"Première","last_page":"Dernière"}}},"fr-CA":{"discussion_topics":{"page_nav":{"Page":"Page","current_page":"Actuel","first_page":"Première","last_page":"Dernière"}}},"he":{"discussion_topics":{"page_nav":{"Page":"דף","current_page":"נוכחי","first_page":"ראשון","last_page":"אחרון"}}},"ht":{"discussion_topics":{"page_nav":{"Page":"Paj","current_page":"Aktyèl","first_page":"Premye","last_page":"Dènye"}}},"hu":{"discussion_topics":{"page_nav":{"Page":"Oldal","current_page":"Aktuális","first_page":"Első","last_page":"Utolsó"}}},"hy":{"discussion_topics":{"page_nav":{"Page":"Էջ","current_page":"Ընթացիկ","first_page":"Առաջին","last_page":"Վերջին"}}},"is":{"discussion_topics":{"page_nav":{"Page":"Síða","current_page":"Núverandi","first_page":"Fyrst","last_page":"Síðast"}}},"it":{"discussion_topics":{"page_nav":{"Page":"Pagina","current_page":"Attuale","first_page":"Prima","last_page":"Ultima"}}},"ja":{"discussion_topics":{"page_nav":{"Page":"ページ","current_page":"現在","first_page":"最初","last_page":"最後"}}},"ko":{"discussion_topics":{"page_nav":{"Page":"페이지","current_page":"현재","first_page":"처음","last_page":"마지막"}}},"mi":{"discussion_topics":{"page_nav":{"Page":"Whārangi","current_page":"nāianei","first_page":"tuatahi","last_page":"Mutunga"}}},"nb":{"discussion_topics":{"page_nav":{"Page":"Side","current_page":"Nåværende","first_page":"Første","last_page":"Siste"}}},"nb-x-k12":{"discussion_topics":{"page_nav":{"Page":"Side","current_page":"Nåværende","first_page":"Første","last_page":"Siste"}}},"nl":{"discussion_topics":{"page_nav":{"Page":"Pagina","current_page":"Huidig","first_page":"Eerste","last_page":"Laatste"}}},"nn":{"discussion_topics":{"page_nav":{"Page":"Side","current_page":"Gjeldande","first_page":"Først","last_page":"Sist"}}},"pl":{"discussion_topics":{"page_nav":{"Page":"Strona","current_page":"Bieżące","first_page":"Pierwsza","last_page":"Ostatnia"}}},"pt":{"discussion_topics":{"page_nav":{"Page":"Página","current_page":"Atual","first_page":"Primeira","last_page":"Última"}}},"pt-BR":{"discussion_topics":{"page_nav":{"Page":"Página","current_page":"Atual","first_page":"Primeira","last_page":"Última"}}},"ru":{"discussion_topics":{"page_nav":{"Page":"Страница","current_page":"Текущие","first_page":"Первая","last_page":"Последняя"}}},"sl":{"discussion_topics":{"page_nav":{"Page":"Stran","current_page":"Trenutni","first_page":"Prvi","last_page":"Zadnji"}}},"sv":{"discussion_topics":{"page_nav":{"Page":"Sida","current_page":"Nuvarande","first_page":"Första","last_page":"Sista"}}},"sv-x-k12":{"discussion_topics":{"page_nav":{"Page":"Sida","current_page":"Nuvarande","first_page":"Första","last_page":"Sista"}}},"tr":{"discussion_topics":{"page_nav":{"Page":"Sayfa","current_page":"Güncel","first_page":"İlk","last_page":"Son"}}},"uk":{"discussion_topics":{"page_nav":{"Page":"Сторінка","current_page":"Поточний","first_page":"Перший","last_page":"Останній"}}},"zh-Hans":{"discussion_topics":{"page_nav":{"Page":"页","current_page":"当前","first_page":"第一个","last_page":"最后一个"}}},"zh-Hant":{"discussion_topics":{"page_nav":{"Page":"頁面","current_page":"當前","first_page":"第一個","last_page":"最後一個"}}}}'))
x["default"].scoped("discussion_topics.page_nav")
var St=A.a.default
var Et=St.template,At=St.templates=St.templates||{}
var xt="DiscussionTopics/pageNav"
At[xt]=Et(function(e,t,r,s,a){this.compilerInfo=[4,">= 1.0.0"]
r=this.merge(r,e.helpers)
a=a||{}
var i,n,o,_="",d=r.helperMissing,l=this.escapeExpression,c="function",u=this
function p(e,t){var s,a,i=""
i+='\n    <li><a href="#page-1" data-pushstate title=\''+l((s=r.t||e&&e.t,a={hash:{scope:"discussion_topics.page_nav"},data:t},s?s.call(e,"first_page","First",a):d.call(e,"t","first_page","First",a)))+"'>&lt;&lt;</a></li>\n    "
return i}function h(e,t,s){var a,i,n,o=""
o+="\n      "
a=(i=r.ifEqual||e&&e.ifEqual,n={hash:{},inverse:u.program(6,g,t),fn:u.program(4,m,t),data:t},i?i.call(e,e,s&&s.current,n):d.call(e,"ifEqual",e,s&&s.current,n));(a||0===a)&&(o+=a)
o+="\n    "
return o}function m(e,t){var s,a,i=""
i+='\n        <li><span class="item" title=\''+l((s=r.t||e&&e.t,a={hash:{scope:"discussion_topics.page_nav"},data:t},s?s.call(e,"current_page","Current",a):d.call(e,"t","current_page","Current",a)))+"'>"+l(typeof e===c?e.apply(e):e)+"</span></li>\n      "
return i}function g(e,t){var r=""
r+='\n        <li><a class="item" href="#page-'+l(typeof e===c?e.apply(e):e)+'" data-pushstate title="'+l(typeof e===c?e.apply(e):e)+'">'+l(typeof e===c?e.apply(e):e)+"</a></li>\n      "
return r}function f(e,t){var s,a,i,n=""
n+='\n      <li><a class="item" href="#page-'
if(a=r.lastPage)s=a.call(e,{hash:{},data:t})
else{a=e&&e.lastPage
s=typeof a===c?a.call(e,{hash:{},data:t}):a}n+=l(s)+"\" data-pushstate title='"+l((a=r.t||e&&e.t,i={hash:{scope:"discussion_topics.page_nav"},data:t},a?a.call(e,"last_page","Last",i):d.call(e,"t","last_page","Last",i)))+"'>&gt;&gt;</a></li>\n    "
return n}_+='<div class="discussion-page-nav">\n  <span class="hidden-readable">'+l((n=r.t||t&&t.t,o={hash:{scope:"discussion_topics.page_nav"},data:a},n?n.call(t,"Page","Page",o):d.call(t,"t","Page","Page",o)))+"</span>\n  <ul>\n    "
i=r["if"].call(t,t&&t.showFirst,{hash:{},inverse:u.noop,fn:u.program(1,p,a),data:a});(i||0===i)&&(_+=i)
_+="\n\n    "
i=r.each.call(t,t&&t.pages,{hash:{},inverse:u.noop,fn:u.programWithDepth(3,h,a,t),data:a});(i||0===i)&&(_+=i)
_+="\n\n    "
i=r["if"].call(t,t&&t.lastPage,{hash:{},inverse:u.noop,fn:u.program(8,f,a),data:a});(i||0===i)&&(_+=i)
_+="\n  </ul>\n</div>\n\n"
return _})
var Rt=At[xt]
_.a.flattenObjects=function(e,t,r,s){_.a.isArray(e)||(e=[e])
_.a.isArray(s)||(s=[])
_.a.each(e,e=>{s.push(e)
if(e[t]){var a=e[t]
if(r){a=_.a.clone(a)
a.reverse()}_.a.flattenObjects(a,t,r,s)}})
return s}
class Ct extends l.a.View{static initClass(){this.prototype.defaults={initialPage:0,descendants:2,showMoreDescendants:50,children:3}
this.prototype.$window=n()(window)
this.prototype.events={keydown:"handleKeyDown"}}initialize(){super.initialize(...arguments)
this.collection.on("add",this.addEntry,this)
return this.model.on("change",this.hideIfFiltering,this)}showDeleted(e){return this.$el.toggleClass("show-deleted",e)}hideIfFiltering(){return this.model.hasFilter()?this.$el.addClass("hidden"):this.$el.removeClass("hidden")}addEntry(e){return this.collectionView.collection.add(e)}goToEntry(e){let t
if("object"===typeof e){t=e
e=t.entry.id}const r=n()("#entry-".concat(e))
if(r.length)return this.scrollToEl(r)
null==t&&(t=this.collection.getEntryData(e))
return this.collection.currentPage===t.page?0===t.levels?this.expandToUnrenderedEntry(t):this.descendToUnrenderedEntry(t):this.renderAndGoToEntry(t)}expandToUnrenderedEntry(e){let t=e.entry
let r={}
while(!r.length){t=t.parent
r=n()("#entry-".concat(t.id))}const s=r.data("view")
s.treeView?s.treeView.loadNext():s.renderTree()
return this.goToEntry(e)}descendToUnrenderedEntry(e){const t=e.entry
let r=t
let s=-1
let a={}
while(!a.length){const e=r
r=e.parent
s++
const t=_.a.without(r.replies,e)
t.unshift(e)
r.replies=t
a=n()("#entry-".concat(e.id))}const i=a.data("view")
i.renderTree({descendants:s})
return this.goToEntry(e)}renderAndGoToEntry(e){this.render(e.page+1)
return this.goToEntry(e)}scrollToEl(e){return this.$window.scrollTo(e,200,{offset:-150,onAfter:()=>{e.find(".discussion-title a").first().focus()
setTimeout(()=>e.addClass("highlight"),200)
setTimeout(()=>e.removeClass("highlight"),400)
setTimeout(()=>e.addClass("highlight"),600)
var t=()=>{e.removeClass("highlight")
this.$window.off("scroll",t)
return this.trigger("scrollAwayFromEntry")}
return setTimeout(()=>{this.$window.on("scroll",t)
return setTimeout(t,5e3)},10)}})}render(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1
this.teardown()
this.collectionView=new Ye({el:this.$el[0],collection:this.collection.getPageAsCollection(e-1,{perPage:this.options.children}),descendants:this.options.descendants,showMoreDescendants:this.options.showMoreDescendants,displayShowMore:false,threaded:this.options.threaded,root:true,collapsed:this.model.get("collapsed")})
this.collectionView.render()
this.renderPageNav()
return this}teardown(){return this.$el.empty()}renderPageNav(){const e=this.collection.totalPages()
const t=this.collection.currentPage+1
if(e<2)return
const r=3
const s={current:t}
s.showFirst=e>r&&1!==t
e>r&&t!==e&&(s.lastPage=e)
s.pages=(()=>{if(e<r+1)return Tt(1,e,true)
if(s.showFirst&&s.lastPage)return[t-1,t,t+1]
if(s.showFirst&&!s.lastPage)return[t-2,t-1,t]
if(!s.showFirst&&s.lastPage)return[t,t+1,t+2]})()
const a=Rt(s)
return this.$el.prepend(a).append(a)}handleKeyDown(e){let t
const r=e.target.nodeName.toLowerCase()
if("input"===r||"textarea"===r)return
if(74!==e.which&&75!==e.which)return
const s=n()(e.target).closest(".entry")
this.traverse(s,t=75===e.which)
e.preventDefault()
return e.stopPropagation()}traverse(e,t){let r
const s=e.attr("id").replace("entry-","")
const a=this.collection.toJSON()
const i=_.a.flattenObjects(a,"replies",r=!this.options.threaded)
const n=_.a.find(i,e=>"".concat(e.id)===s)
let o=_.a.indexOf(i,n)
o+=t?-1:1
o=Math.min(Math.max(0,o),i.length-1)
const d=i[o]
return this.goToEntry(d.id)}}Ct.initClass()
function Tt(e,t,r){const s=[]
const a=e<t
const i=r?a?t+1:t-1:t
for(let t=e;a?t<i:t>i;a?t++:t--)s.push(t)
return s}var jt=r("YS+g")
r("7f68")
r("17x9")
var Dt=r("dTie")
Object(R["a"])(JSON.parse('{"ar":{"keyboard_shortcuts_ed1844bd":"اختصارات لوحة المفاتيح","press_the_esc_key_to_close_this_modal_14d10601":"اضغط على Esc لإغلاق هذا النموذج الشكلي","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"قد يحتاج قراء الشاشة إلى إيقاف تشغيل المؤشر الافتراضي لاستخدام اختصارات لوحة المفاتيح."},"cy":{"keyboard_shortcuts_ed1844bd":"Bysellau Hwylus","press_the_esc_key_to_close_this_modal_14d10601":"Pwyswch y fysell esc i gau\'r is-ffenestr hon","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"Efallai y bydd angen i’r rheini sy’n defnyddio darllenwyr sgrin ddiffodd y rhith gyrchwr er mwyn defnyddio’r bysellau hwylus hyn"},"da":{"keyboard_shortcuts_ed1844bd":"Genvejstaster","press_the_esc_key_to_close_this_modal_14d10601":"Tryk på tasten Esc for at lukke denne modal","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"Brugere af skærmlæsere skal muligvis slå den virtuelle markør fra for at bruge disse genvejstaster"},"da-x-k12":{"keyboard_shortcuts_ed1844bd":"Genvejstaster","press_the_esc_key_to_close_this_modal_14d10601":"Tryk på tasten Esc for at lukke denne modal","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"Brugere af skærmlæsere skal muligvis slå den virtuelle markør fra for at bruge disse genvejstaster"},"de":{"keyboard_shortcuts_ed1844bd":"Tastenkombinationen","press_the_esc_key_to_close_this_modal_14d10601":"\\u003cEsc\\u003e-Taste drücken, um dieses Modalfenster zu schließen","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"Benutzer von Screenreadern müssen den virtuellen Cursor ausschalten, und diese Tastenkombinationen verwenden."},"el":{"keyboard_shortcuts_ed1844bd":"Συντομεύσεις πληκτρολογίου","press_the_esc_key_to_close_this_modal_14d10601":"Πατήστε το escape για να κλείσετε αυτή τη δυνατότητα","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"Οι χρήστες λογισμικών ανάγνωσης οθόνης ενδέχεται να χρειαστεί να απενεργοποιήσουν τον εικονικό κέρσορα προκειμένου να μπορέσουν να χρησιμοποιήσουν αυτές τις συντομεύσεις πληκτρολογίου"},"en-AU":{"keyboard_shortcuts_ed1844bd":"Keyboard Shortcuts","press_the_esc_key_to_close_this_modal_14d10601":"Press the esc key to close this modal.","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"Users of screen readers may need to turn off the virtual cursor in order to use these keyboard shortcuts"},"en-CA":{"keyboard_shortcuts_ed1844bd":"Keyboard Shortcuts","press_the_esc_key_to_close_this_modal_14d10601":"Press the esc key to close this modal","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"Users of screen readers may need to turn off the virtual cursor in order to use these keyboard shortcuts"},"en-GB":{"keyboard_shortcuts_ed1844bd":"Keyboard shortcuts","press_the_esc_key_to_close_this_modal_14d10601":"To close this modal, press the esc key","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"Users of screen readers might need to turn off the virtual cursor in order to use these keyboard shortcuts"},"es":{"keyboard_shortcuts_ed1844bd":"Atajos del teclado","press_the_esc_key_to_close_this_modal_14d10601":"Presione la tecla ESC para cerrar este modal","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"Puede que los usuarios de lectores de pantalla tengan que apagar el cursor virtual con el fin de utilizar estos atajos del teclado"},"fa":{"keyboard_shortcuts_ed1844bd":"میانبرهای صفحه کلید","press_the_esc_key_to_close_this_modal_14d10601":"برای بستن این ماژول، کلید esc را فشار دهید","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"کاربران صفحه خوان ها ممکن است لازم باشد مکان نمای مجازی را به منظور استفاده از این میانبرهای صفحه کلید غیر فعال کنند"},"fi":{"keyboard_shortcuts_ed1844bd":"Pikanäppäimet","press_the_esc_key_to_close_this_modal_14d10601":"Sulje tämä modaali painamalla esc-näppäintä.","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"Näytönlukijan käyttäjien täytyy ehkä kytkeä virtuaalinen kohdistin pois päältä voidakseen käyttää näitä näppäimistön pikakuvakkeita."},"fr":{"keyboard_shortcuts_ed1844bd":"Raccourcis clavier","press_the_esc_key_to_close_this_modal_14d10601":"Appuyer la touche ESC pour fermer ce modal","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"Les utilisateurs de lecteurs d\'écran devront peut-être désactiver le curseur virtuel afin de pouvoir utiliser ces raccourcis clavier"},"fr-CA":{"keyboard_shortcuts_ed1844bd":"Raccourcis clavier","press_the_esc_key_to_close_this_modal_14d10601":"Appuyer la touche ESC pour fermer ce modal","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"Les utilisateurs de lecteurs d\'écran devront peut-être désactiver le curseur virtuel afin de pouvoir utiliser ces raccourcis clavier"},"he":{"keyboard_shortcuts_ed1844bd":"קיצורי מקלדת","press_the_esc_key_to_close_this_modal_14d10601":"הקשה על מקש Esc כדי לסגור סגנון פעולה זה.","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"יתכן שמשתמשי תוכנות קריאת מסך יצטרכו לנטרל את פעולת הסמן הוירטואלי כדי להשתמש בקיצורי המקלדת הללו"},"ht":{"keyboard_shortcuts_ed1844bd":"Rakousi Klavye","press_the_esc_key_to_close_this_modal_14d10601":"Peze touch esc pou fèmen modal sa a","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"Itilizatè lektè ekran yo ka bezwen dezaktive kisè vityèl a pou yo kapab itilize rakousi klavye sa yo."},"hu":{"keyboard_shortcuts_ed1844bd":"Billentyűparancsok","press_the_esc_key_to_close_this_modal_14d10601":"Bezáráshoz nyomja meg az ESC gombot","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"A képernyőfelolvasót használóknak ki kell kapcsolniuk a virtuális kurzort, hogy használhassák a billentyűparancsokat"},"is":{"keyboard_shortcuts_ed1844bd":"Flýtilyklar","press_the_esc_key_to_close_this_modal_14d10601":"Ýttu á Escape til að loka","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"Notendur skjálesara gætu þurftu að slökkva á raunbendli til að nota flýtilykla"},"it":{"keyboard_shortcuts_ed1844bd":"Scelte rapide da tastiera","press_the_esc_key_to_close_this_modal_14d10601":"Premi il tasto ESC per chiudere questa finestra modale","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"È possibile che gli utenti di screen reader debbano disattivare il cursore virtuale per utilizzare queste scelte rapide da tastiera"},"ja":{"keyboard_shortcuts_ed1844bd":"キーボード ショートカット","press_the_esc_key_to_close_this_modal_14d10601":"エスケープキーを押して、このモーダルを閉じてください","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"スクリーンリーダーのユーザーは、これらのキーボードショートカットを使用するために、バーチャルカーソルをオフにすることが必要になる可能性があります"},"mi":{"keyboard_shortcuts_ed1844bd":"Pokatata papapātuhi","press_the_esc_key_to_close_this_modal_14d10601":"Pēhi i te kī Esc ki te kāti i tēnei puoro","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"kia Me Kaiwhakamahi o kaipānui mata ki te tahuri atu te pehu mariko i roto i te tikanga ki te whakamahi i enei pokatata papapātuhi"},"nb":{"keyboard_shortcuts_ed1844bd":"Snarveier","press_the_esc_key_to_close_this_modal_14d10601":"Trykk esc-tasten for å lukke dette vinduet","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"Brukere av skjermlesere trenger kanskje å slå av den virtuelle markøren for å kunne bruke disse tastatursnarveiene"},"nb-x-k12":{"keyboard_shortcuts_ed1844bd":"Snarveier","press_the_esc_key_to_close_this_modal_14d10601":"Trykk esc-tasten for å lukke dette vinduet","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"Brukere av skjermlesere trenger kanskje å slå av den virtuelle markøren for å kunne bruke disse tastatursnarveiene"},"nl":{"keyboard_shortcuts_ed1844bd":"Sneltoetsen","press_the_esc_key_to_close_this_modal_14d10601":"De escape-toets indrukken om deze modaliteit te sluiten","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"Gebruikers van schermlezers moeten mogelijk de virtuele cursor uitschakelen om deze sneltoetsen te gebruiken"},"nn":{"keyboard_shortcuts_ed1844bd":"Hurtigtastar","press_the_esc_key_to_close_this_modal_14d10601":"Trykk esc for å lukke","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"Brukarar med skjermlesar bør skru av musepeikar for å nytte desse tastatursnarvegane"},"pl":{"keyboard_shortcuts_ed1844bd":"Skróty klawiaturowe","press_the_esc_key_to_close_this_modal_14d10601":"Naciśnij klawisz Escape aby zamknąć dany modal","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"Dla użytkowników czytników ekranu, konieczne może być wyłączenie kursora wirtualnego w celu skorzystania z niniejszych skrótów klawiaturowych"},"pt":{"keyboard_shortcuts_ed1844bd":"Atalhos de teclado","press_the_esc_key_to_close_this_modal_14d10601":"Pressione a tecla esc para fechar este modelo","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"Utilizadores de ecrãs de leitura podem precisar de desligar o cursor virtual para poderem utilizar estes atalhos de teclado"},"pt-BR":{"keyboard_shortcuts_ed1844bd":"Atalhos de Teclado","press_the_esc_key_to_close_this_modal_14d10601":"Pressione a tecla esc para fechar este modal","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"Usuários de leitores de telas podem precisar desligar o cursor virtual para utilizarem os atalhos de teclado"},"ru":{"keyboard_shortcuts_ed1844bd":"Клавиши быстрого доступа","press_the_esc_key_to_close_this_modal_14d10601":"Нажмите клавишу Esc, чтобы закрыть этот модуль","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"Пользователям программ для чтения с экрана может потребоваться отключить виртуальный курсор, чтобы использовать эти сочетания клавиш"},"sl":{"keyboard_shortcuts_ed1844bd":"Bližnjice","press_the_esc_key_to_close_this_modal_14d10601":"Da zaprete to modalno okno, pritisnite tipko Esc.","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"Če bodo uporabniki bralnikov zaslonov želeli uporabljati te bližnjice, bodo morda morali izklopiti virtualni kazalec."},"sv":{"keyboard_shortcuts_ed1844bd":"Kortkommandon","press_the_esc_key_to_close_this_modal_14d10601":"Tryck på ecs-knappen för att stänga denna modalen","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"De som använder skärmläsare kan behöva stänga av den virtuella muspekaren för att använda dessa snabbkommandon"},"sv-x-k12":{"keyboard_shortcuts_ed1844bd":"Kortkommandon","press_the_esc_key_to_close_this_modal_14d10601":"Tryck på ecs-knappen för att stänga denna modalen","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"De som använder skärmläsare kan behöva stänga av den virtuella muspekaren för att använda dessa snabbkommandon"},"tr":{"keyboard_shortcuts_ed1844bd":"Klavye Kısayolları"},"uk":{"keyboard_shortcuts_ed1844bd":"Гарячі клавіши","press_the_esc_key_to_close_this_modal_14d10601":"Натисніть клавішу esc, щоб закрити цей модуль ","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"Користувачам електронних книжок, можливо, доведеться вимкнути віртуальний курсор для використання цих комбінацій клавіш"},"zh-Hans":{"keyboard_shortcuts_ed1844bd":"键盘捷径","press_the_esc_key_to_close_this_modal_14d10601":"按ESC键，关闭此模式","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"屏幕阅读器的用户可能需要关闭虚拟光标才能使用这些快捷键"},"zh-Hant":{"keyboard_shortcuts_ed1844bd":"鍵盤快捷鍵","press_the_esc_key_to_close_this_modal_14d10601":"按 ESC 鍵以關閉此模式","users_of_screen_readers_may_need_to_turn_off_the_v_98811cd":"使用屏幕閱讀器的使用者或許需要關閉虛擬光標，以便使用這些鍵盤快捷鍵。"}}'))
var Nt=x["default"].scoped("keyboardShortcutModal")
var Ot=Object(s["a"])("span",{className:"colon"},void 0,":")
class zt extends et.a.Component{constructor(){super(...arguments)
this.state={isOpen:false}
this.closeModal=()=>{this.setState({isOpen:false})}
this.handleKeydown=e=>{const t=188===e.which||191===e.which&&e.shiftKey
if(t&&"INPUT"!==e.target.nodeName&&"TEXTAREA"!==e.target.nodeName){e.preventDefault()
this.setState({isOpen:!this.state.isOpen})}}}componentDidMount(){document.addEventListener("keydown",this.handleKeydown)}componentWillUnmount(){document.removeEventListener("keydown",this.handleKeydown)}render(){return Object(s["a"])(Dt["a"],{"data-canvas-component":true,open:this.state.isOpen,label:Nt.t("Keyboard Shortcuts"),onDismiss:this.closeModal},void 0,Object(s["a"])(Dt["a"].Body,{},void 0,Object(s["a"])("div",{className:"keyboard_navigation"},void 0,Object(s["a"])("span",{className:"screenreader-only"},void 0,Nt.t("Users of screen readers may need to turn off the virtual cursor in order to use these keyboard shortcuts")),Object(s["a"])("ul",{className:"navigation_list"},void 0,this.props.shortcuts.map(e=>Object(s["a"])("li",{},e.keycode,Object(s["a"])("span",{className:"keycode"},void 0,e.keycode),Ot,Object(s["a"])("span",{className:"description"},void 0,e.description)))),Object(s["a"])("span",{className:"screenreader-only"},void 0,Nt.t("Press the esc key to close this modal")))))}}zt.defaultProps={shortcuts:[]}
Object(R["a"])(JSON.parse('{"ar":{"delete_current_message_5da0221a":"حذف الرسالة الحالية","edit_current_message_da650d4c":"تحرير الرسالة الحالية","next_message_780bcf24":"الرسالة التالية","previous_message_8804f87e":"الرسالة السابقة","reply_to_current_message_55391f5b":"الرد على الرسالة الحالية","reply_to_topic_12412b0f":"الرد على الموضوع"},"cy":{"delete_current_message_5da0221a":"Dileu’r Neges Bresennol","edit_current_message_da650d4c":"Golygu’r Neges Bresennol","next_message_780bcf24":"Neges Nesaf","previous_message_8804f87e":"Neges Flaenorol","reply_to_current_message_55391f5b":"Ateb neges bresennol","reply_to_topic_12412b0f":"Ateb pwnc"},"da":{"delete_current_message_5da0221a":"Slet aktuelle besked","edit_current_message_da650d4c":"Rediger aktuel besked","next_message_780bcf24":"Næste besked","previous_message_8804f87e":"Forrige besked","reply_to_current_message_55391f5b":"Svar på aktuel besked","reply_to_topic_12412b0f":"Svar på emne"},"da-x-k12":{"delete_current_message_5da0221a":"Slet aktuelle besked","edit_current_message_da650d4c":"Rediger aktuel besked","next_message_780bcf24":"Næste besked","previous_message_8804f87e":"Forrige besked","reply_to_current_message_55391f5b":"Svar på aktuel besked","reply_to_topic_12412b0f":"Svar på emne"},"de":{"delete_current_message_5da0221a":"Aktuelle Nachricht löschen","edit_current_message_da650d4c":"Aktuelle Nachricht bearbeiten","next_message_780bcf24":"Nächste Nachricht","previous_message_8804f87e":"Vorherige Nachricht","reply_to_current_message_55391f5b":"Auf aktuelle Nachricht antworten","reply_to_topic_12412b0f":"Auf Thema antworten"},"el":{"delete_current_message_5da0221a":"Διαγραφή Τρέχοντος Μηνύματος","edit_current_message_da650d4c":"Επεξεργασία Τρέχοντος Μηνύματος","next_message_780bcf24":"Επόμενο μήνυμα","previous_message_8804f87e":"Προηγούμενο μήνυμα","reply_to_current_message_55391f5b":"Απάντηση στο Τρέχον Μήνυμα","reply_to_topic_12412b0f":"Απάντηση στο Θέμα"},"en-AU":{"delete_current_message_5da0221a":"Delete Current Message","edit_current_message_da650d4c":"Edit Current Message","next_message_780bcf24":"Next Message","previous_message_8804f87e":"Previous Message","reply_to_current_message_55391f5b":"Reply to Current Message","reply_to_topic_12412b0f":"Reply to Topic"},"en-CA":{"delete_current_message_5da0221a":"Delete Current Message","edit_current_message_da650d4c":"Edit Current Message","next_message_780bcf24":"Next Message","previous_message_8804f87e":"Previous Message","reply_to_current_message_55391f5b":"Reply to Current Message","reply_to_topic_12412b0f":"Reply to Topic"},"en-GB":{"delete_current_message_5da0221a":"Delete current message","edit_current_message_da650d4c":"Edit current message","next_message_780bcf24":"Next message","previous_message_8804f87e":"Previous message","reply_to_current_message_55391f5b":"Reply to current message","reply_to_topic_12412b0f":"Reply to topic"},"es":{"delete_current_message_5da0221a":"Eliminar el mensaje actual","edit_current_message_da650d4c":"Editar el mensaje actual","next_message_780bcf24":"Siguiente mensaje","previous_message_8804f87e":"Mensaje Previo","reply_to_current_message_55391f5b":"Contestar al Mensaje Actual","reply_to_topic_12412b0f":"Contestar al tema"},"fa":{"delete_current_message_5da0221a":"حذف پیام فعلی","edit_current_message_da650d4c":"ویرایش پیام فعلی","next_message_780bcf24":"پیام بعدی","previous_message_8804f87e":"پیام قبلی","reply_to_current_message_55391f5b":"پاسخ به پیام فعلی","reply_to_topic_12412b0f":"پاسخ به موضوع"},"fi":{"delete_current_message_5da0221a":"Poista nykyinen viesti","edit_current_message_da650d4c":"Muokkaa nykyistä viestiä","next_message_780bcf24":"Seuraava viesti","previous_message_8804f87e":"Edellinen viesti","reply_to_current_message_55391f5b":"Vastaa nykyiseen viestiin","reply_to_topic_12412b0f":"Vastaa aiheeseen"},"fr":{"delete_current_message_5da0221a":"Supprimer le message actuel","edit_current_message_da650d4c":"Modifier le message actuel","next_message_780bcf24":"Message suivant","previous_message_8804f87e":"Message précédent","reply_to_current_message_55391f5b":"Répondre au message actuel","reply_to_topic_12412b0f":"Répondre au sujet"},"fr-CA":{"delete_current_message_5da0221a":"Supprimer le message actuel","edit_current_message_da650d4c":"Modifier le message actuel","next_message_780bcf24":"Message suivant","previous_message_8804f87e":"Message précédent","reply_to_current_message_55391f5b":"Répondre au message actuel","reply_to_topic_12412b0f":"Répondre au sujet"},"he":{"delete_current_message_5da0221a":"ביטול הודעה נוכחית","edit_current_message_da650d4c":"עריכת הודעה נוכחית","next_message_780bcf24":"ההודעה הבאה","previous_message_8804f87e":"הודעה קודמת","reply_to_current_message_55391f5b":"הגב/י להודעה הנוכחית","reply_to_topic_12412b0f":"תגובה לנושא"},"ht":{"delete_current_message_5da0221a":"Efase Mesaj Aktyèl","edit_current_message_da650d4c":"Modifye Mesaj Aktyèl","next_message_780bcf24":"Pwochen Mesaj","previous_message_8804f87e":"Mesaj Anvan","reply_to_current_message_55391f5b":"Reponn Mesaj Aktyèl","reply_to_topic_12412b0f":"Reponn a Sijè"},"hu":{"delete_current_message_5da0221a":"Jelen üzenet törlése","edit_current_message_da650d4c":"Jelen üzenet szerkesztése","next_message_780bcf24":"Új üzenet","previous_message_8804f87e":"Előző üzenet","reply_to_current_message_55391f5b":"Válasz az aktuális üzenetre","reply_to_topic_12412b0f":"Válasz a témában"},"is":{"delete_current_message_5da0221a":"Eyða núverandi skilaboðum","edit_current_message_da650d4c":"Breyta núverandi skilaboðum","next_message_780bcf24":"Næstu skilaboð","previous_message_8804f87e":"Fyrri skilaboð","reply_to_current_message_55391f5b":"Svara núverandi skilaboðum","reply_to_topic_12412b0f":"Svara umræðuefni"},"it":{"delete_current_message_5da0221a":"Elimina messaggio corrente","edit_current_message_da650d4c":"Modifica messaggio attuale","next_message_780bcf24":"Messaggio successivo","previous_message_8804f87e":"Messaggio precedente","reply_to_current_message_55391f5b":"Rispondi al messaggio corrente","reply_to_topic_12412b0f":"Rispondi all\'argomento"},"ja":{"delete_current_message_5da0221a":"現在のメッセージの削除","edit_current_message_da650d4c":"現在のメッセージの編集","next_message_780bcf24":"次のメッセージ","previous_message_8804f87e":"前のメッセージ","reply_to_current_message_55391f5b":"現在のメッセージへの返信","reply_to_topic_12412b0f":"トピックへの返信"},"mi":{"delete_current_message_5da0221a":"Mukua Karere o nāianei","edit_current_message_da650d4c":"Whakatika Karere o nāianei","next_message_780bcf24":"Karere o muri atu","previous_message_8804f87e":"Karere o mua","reply_to_current_message_55391f5b":"Whakautu ki te Karere o nāianei","reply_to_topic_12412b0f":"Whakautu ki Kaupapa"},"nb":{"delete_current_message_5da0221a":"Slett denne meldingen","edit_current_message_da650d4c":"Rediger denne meldingen","next_message_780bcf24":"Neste melding","previous_message_8804f87e":"Forrige melding","reply_to_current_message_55391f5b":"Svar på denne meldingen","reply_to_topic_12412b0f":"Svar på temaet"},"nb-x-k12":{"delete_current_message_5da0221a":"Slett denne meldingen","edit_current_message_da650d4c":"Rediger denne meldingen","next_message_780bcf24":"Neste melding","previous_message_8804f87e":"Forrige melding","reply_to_current_message_55391f5b":"Svar på denne meldingen","reply_to_topic_12412b0f":"Svar på temaet"},"nl":{"delete_current_message_5da0221a":"Huidig bericht verwijderen","edit_current_message_da650d4c":"Huidig bericht bewerken","next_message_780bcf24":"Volgend bericht","previous_message_8804f87e":"Vorig bericht","reply_to_current_message_55391f5b":"Op huidig bericht antwoorden","reply_to_topic_12412b0f":"Antwoord op onderwerp"},"nn":{"delete_current_message_5da0221a":"Slett denne meldinga","edit_current_message_da650d4c":"Rediger denne meldinga","next_message_780bcf24":"Neste melding","previous_message_8804f87e":"Førre melding","reply_to_current_message_55391f5b":"Svar til denne meldinga","reply_to_topic_12412b0f":"Svar til emne"},"pl":{"delete_current_message_5da0221a":"Usuń bieżącą wiadomość","edit_current_message_da650d4c":"Edytuj bieżącą wiadomość","next_message_780bcf24":"Następna wiadomość","previous_message_8804f87e":"Poprzednia wiadomość","reply_to_current_message_55391f5b":"Odpowiedz na bieżącą wiadomość","reply_to_topic_12412b0f":"Odpowiedz na temat"},"pt":{"delete_current_message_5da0221a":"Excluir mensagem atual","edit_current_message_da650d4c":"Editar mensagem atual","next_message_780bcf24":"Próxima mensagem","previous_message_8804f87e":"Mensagem anterior","reply_to_current_message_55391f5b":"Responder à mensagem atual","reply_to_topic_12412b0f":"Responder ao tópico"},"pt-BR":{"delete_current_message_5da0221a":"Excluir Mensagem Atual","edit_current_message_da650d4c":"Editar Mensagem Atual","next_message_780bcf24":"Próxima Mensagem","previous_message_8804f87e":"Mensagem Anterior","reply_to_current_message_55391f5b":"Responder para Mensagem Atual","reply_to_topic_12412b0f":"Responder para Assunto"},"ru":{"delete_current_message_5da0221a":"Удалить текущее сообщение","edit_current_message_da650d4c":"Редактировать текущее сообщение","next_message_780bcf24":"Следующее сообщение","previous_message_8804f87e":"Предыдущее сообщение","reply_to_current_message_55391f5b":"Ответить на текущее сообщение","reply_to_topic_12412b0f":"Ответ на тему"},"sl":{"delete_current_message_5da0221a":"Izbriši trenutno sporočilo","edit_current_message_da650d4c":"Uredi trenutno sporočilo","next_message_780bcf24":"Naslednje sporočilo","previous_message_8804f87e":"Prejšnje sporočilo","reply_to_current_message_55391f5b":"Odgovori na trenutno sporočilo","reply_to_topic_12412b0f":"Odgovori na temo"},"sv":{"delete_current_message_5da0221a":"Radera nuvarande meddelande","edit_current_message_da650d4c":"Redigera nuvarande meddelande","next_message_780bcf24":"Nästa meddelande","previous_message_8804f87e":"Föregående meddelande","reply_to_current_message_55391f5b":"Svara på nuvarande meddelande","reply_to_topic_12412b0f":"Svara på ämnet"},"sv-x-k12":{"delete_current_message_5da0221a":"Radera nuvarande meddelande","edit_current_message_da650d4c":"Redigera nuvarande meddelande","next_message_780bcf24":"Nästa meddelande","previous_message_8804f87e":"Föregående meddelande","reply_to_current_message_55391f5b":"Svara på nuvarande meddelande","reply_to_topic_12412b0f":"Svara på ämnet"},"tr":{"delete_current_message_5da0221a":"Şimdiki Mesajı Sil","edit_current_message_da650d4c":"Şimdiki Mesajı Düzenle","next_message_780bcf24":"Yeni Mesaj","previous_message_8804f87e":"Önceki Mesaj","reply_to_current_message_55391f5b":"Şimdiki Mesaja Cevap yaz","reply_to_topic_12412b0f":"Konuya Cevap yaz"},"uk":{"delete_current_message_5da0221a":"Видалити поточне повідомлення","edit_current_message_da650d4c":"Редагувати поточне повідомлення","next_message_780bcf24":"Нове повідомлення","previous_message_8804f87e":"Попереднє повідомлення","reply_to_current_message_55391f5b":"Відповісти на поточне повідомлення","reply_to_topic_12412b0f":"Відповісти на тему"},"zh-Hans":{"delete_current_message_5da0221a":"删除目前信息","edit_current_message_da650d4c":"编辑目前信息","next_message_780bcf24":"下一条消息","previous_message_8804f87e":"上一封邮件","reply_to_current_message_55391f5b":"回复当前消息","reply_to_topic_12412b0f":"回复主题"},"zh-Hant":{"delete_current_message_5da0221a":"刪除當前郵件","edit_current_message_da650d4c":"編輯當前訊息","next_message_780bcf24":"下一個信息","previous_message_8804f87e":"上一個訊息","reply_to_current_message_55391f5b":"回復當前郵件","reply_to_topic_12412b0f":"回復主題"}}'))
var It=x["default"].scoped("discussionTopicKeyboradShortcutModal")
const Pt=[{keycode:"j",description:It.t("Next Message")},{keycode:"k",description:It.t("Previous Message")},{keycode:"e",description:It.t("Edit Current Message")},{keycode:"d",description:It.t("Delete Current Message")},{keycode:"r",description:It.t("Reply to Current Message")},{keycode:"n",description:It.t("Reply to Topic")}]
function Mt(e){return et.a.createElement(zt,Object.assign({},e,{shortcuts:Pt}))}Promise.all([r.e(7),r.e(8),r.e(13),r.e(14),r.e(23),r.e(29),r.e(35),r.e(34),r.e(47),r.e(54),r.e(67),r.e(94),r.e(111),r.e(560)]).then(r.bind(null,"T3Mz"))
ENV.STUDENT_CONTEXT_CARDS_ENABLED&&Promise.all([r.e(7),r.e(8),r.e(27),r.e(28),r.e(39),r.e(42),r.e(49),r.e(577)]).then(r.bind(null,"ddaL"))
ENV.MASTER_COURSE_DATA&&Promise.all([r.e(18),r.e(30),r.e(45)]).then(r.bind(null,"y8OA")).then(e=>{let t=e.default
const r=new t
r.init({itemType:"discussion_topic",page:"show"})})
const Lt=5
const Ut=10
const Vt=new l.a.Router
const Ft=ENV.DISCUSSION.THREADED?new ct({root_url:ENV.DISCUSSION.ROOT_URL}):new ut({root_url:ENV.DISCUSSION.ROOT_URL})
const Bt=new S(null)
const Ht=new xe
new pt({el:"#discussion-managebar"})
rt.a.render(Object(s["a"])(Mt,{}),document.getElementById("keyboard-shortcut-modal"))
const Gt=document.querySelector("#section_tooltip_root")
const $t=ENV.TOTAL_USER_COUNT||ENV.DISCUSSION.TOPIC.COURSE_SECTIONS
Gt&&$t&&!ENV.DISCUSSION.IS_ASSIGNMENT&&!ENV.DISCUSSION.IS_GROUP&&rt.a.render(Object(s["a"])(jt["a"],{totalUserCount:ENV.TOTAL_USER_COUNT,sections:ENV.DISCUSSION.TOPIC.COURSE_SECTIONS}),Gt)
const Kt=new wt({el:"#main",model:new l.a.Model,filterModel:Ht})
const Wt=new Ct({el:"#discussion_subentries",collection:Bt,descendants:Lt,children:Ut,threaded:ENV.DISCUSSION.THREADED,model:Ht})
const Jt=new Re({el:"#discussion-toolbar",model:Ht})
const qt=new Ze({el:"#filterResults",allData:Ft,model:Ht})
const Yt=n()(window)
const Qt=n()("#discussion_subentries")
function Zt(){Yt.scrollTo(Qt,{offset:-49})}Ft.on("change",()=>{const e=Ft.get("entries")
Bt.options.per_page=e.length
return Bt.reset(e)})
function Xt(e,t){const r=Ft.flattened[e]
r&&(r.read_state=t)}function er(e){Bt.setAllReadState(e)
Ae.setAllReadState(e)
return qt.setAllReadState(e)}Wt.on("scrollAwayFromEntry",()=>{const e=Yt.scrollTop()
Vt.navigate("",{trigger:false,replace:true})
Yt.scrollTop(e)})
Ae.on("readStateChanged",(e,t)=>Xt(e.get("id"),e.get("read_state")))
m.on("markAsRead",e=>Xt(e.get("id"),e.get("read_state")))
qt.on("readStateChanged",(e,t)=>Xt(e,t))
qt.on("clickEntry",e=>Vt.navigate("entry-".concat(e.get("id")),true))
Jt.on("showDeleted",e=>Wt.showDeleted(e))
Jt.on("expandAll",()=>{Ae.expandRootEntries()
Zt()})
Jt.on("collapseAll",()=>{Ae.collapseRootEntries()
Zt()})
Kt.on("markAllAsRead",()=>{Ft.markAllAsRead()
er("read")})
Kt.on("markAllAsUnread",()=>{Ft.markAllAsUnread()
er("unread")})
qt.on("render",Zt)
qt.on("hide",Zt)
Ht.on("reset",()=>Ae.expandRootEntries())
const tr=()=>ENV.DISCUSSION.PERMISSIONS.CAN_READ_REPLIES
Vt.route("topic","topic",()=>{Yt.scrollTop(n()("#discussion_topic"))
setTimeout(()=>{n()("#discussion_topic .author").focus()
Yt.one("scroll",()=>Vt.navigate(""))},10)})
Vt.route("entry-:id","id",Wt.goToEntry.bind(Wt))
Vt.route("page-:page","page",e=>{Wt.render(e)
Zt()})
function rr(e){if(tr()){Ft.fetch({success(){Wt.render()
l.a.history.start({pushState:true,root:"".concat(ENV.DISCUSSION.APP_URL,"/")})
if(e){const t=Bt.get(e.id)
t&&Bt.remove(t)
Bt.add(e)
Wt.render()
Vt.navigate("entry-".concat(e.get("id")),true)}}})
Kt.on("addReply",e=>{Bt.add(e)
Vt.navigate("entry-".concat(e.get("id")),true)})
ENV.DISCUSSION.MANUAL_MARK_AS_READ||m.init()}else n()("#discussion_subentries span").text(a["a"].t("You must log in to view replies"))}Kt.render()
Jt.render()
null!=ENV.DISCUSSION.SEQUENCE&&r.e(580).then(r.bind(null,"/j35")).then(()=>{n()("#module_sequence_footer").moduleSequenceFooter({assetType:ENV.DISCUSSION.SEQUENCE.ASSET_TYPE,assetID:ENV.DISCUSSION.SEQUENCE.ASSET_ID,courseID:ENV.DISCUSSION.SEQUENCE.COURSE_ID})})
if(ENV.DISCUSSION.INITIAL_POST_REQUIRED){const e=t=>{rr(t)
Kt.off("addReply",e)}
Kt.on("addReply",e)}else rr()
ENV.CONDITIONAL_RELEASE_SERVICE_ENABLED&&Promise.all([r.e(19),r.e(110),r.e(578)]).then(r.bind(null,"GXQz")).then(e=>{let t=e.default
const r=document.getElementById("crs-graphs")
const s=document.getElementById("not_right_side")
t.init(r,s)})},"4WHl":function(e,t,r){"use strict"
var s=r("An8g")
var a=r("VTBJ")
r("GLiE")
var i=r("pQTu")
var n=r("m0r6")
Object(n["a"])(JSON.parse('{"ar":{"EditorToggle":{"done":{"title":"انقر لإنهاء تعديل منطقة النص المنسقة"},"done_as_in_finished":"تم"}},"cy":{"EditorToggle":{"done":{"title":"Cliciwch i orffen golygu’r ardal testun cyfoethog"},"done_as_in_finished":"Wedi gorffen"}},"da":{"EditorToggle":{"done":{"title":"Klik for at afslutte redigering af RTF-område"},"done_as_in_finished":"Udført"}},"de":{"EditorToggle":{"done":{"title":"Klicken, um die Bearbeitung des Rich-Text-Bereichs abzuschließen"},"done_as_in_finished":"Fertig"}},"el":{"EditorToggle":{"done":{"title":"Κάντε κλικ για να ολοκληρώσετε την επεξεργασία της περιοχής rich text."},"done_as_in_finished":"Ολοκληρώθηκε"}},"en-AU":{"EditorToggle":{"done":{"title":"Click to finish editing the rich text area"},"done_as_in_finished":"Done"}},"en-CA":{"EditorToggle":{"done":{"title":"Click to finish editing the rich text area"},"done_as_in_finished":"Done"}},"en-GB":{"EditorToggle":{"done":{"title":"Click to finish editing the rich text area"},"done_as_in_finished":"Done"}},"es":{"EditorToggle":{"done":{"title":"Haga clic para terminar de editar el área de texto con formato"},"done_as_in_finished":"Listo"}},"fa":{"EditorToggle":{"done":{"title":"برای پایان دادن به ویرایش قسمت دارای متن غنی کلیک کنید"},"done_as_in_finished":"انجام شد"}},"fi":{"EditorToggle":{"done":{"title":"Suorita muokkaus loppuun tekstialueella"},"done_as_in_finished":"Valmis"}},"fr":{"EditorToggle":{"done":{"title":"Cliquez pour finir de modifier la zone de texte enrichi."},"done_as_in_finished":"Terminé"}},"fr-CA":{"EditorToggle":{"done":{"title":"Cliquez pour finir de modifier la zone de texte enrichi."},"done_as_in_finished":"Terminé"}},"he":{"EditorToggle":{"done":{"title":"הקלקה לסיום עריכת איזור התוכן העשיר"},"done_as_in_finished":"בוצע"}},"ht":{"EditorToggle":{"done":{"title":"Klike pou fini modifikasyon zòn tèks rich la"},"done_as_in_finished":"Fini"}},"hu":{"EditorToggle":{"done":{"title":"Kattintson, hogy befejezze a gazdag szövegmező szerkesztését"},"done_as_in_finished":"Kész"}},"hy":{"EditorToggle":{"done":{"title":"Սեղմեք \\"հարստացված տեսքտի\\" խմբագրումը ավարտելու համար "},"done_as_in_finished":"Պատրաստ է"}},"is":{"EditorToggle":{"done":{"title":"Smella til að ljúka breytingum á mótuðum texta"},"done_as_in_finished":"Lokið"}},"it":{"EditorToggle":{"done":{"title":"Fai clic per terminare la modifica dell\'area di testo RTF"},"done_as_in_finished":"Fatto"}},"ja":{"EditorToggle":{"done":{"title":"クリックしてリッチ テキスト領域の編集を終了する"},"done_as_in_finished":"完了"}},"ko":{"EditorToggle":{"done":{"title":"클릭하면 서식 있는 텍스트 영역의 편집을 마침"},"done_as_in_finished":"마침"}},"mi":{"EditorToggle":{"done":{"title":"Pāwhiritia ki te whakaoti i te whakatika i te wāhi kuputuhi taonga"},"done_as_in_finished":"Kua mahia"}},"nb":{"EditorToggle":{"done":{"title":"Klikk for å fullføre redigeringen av riktekstområdet"},"done_as_in_finished":"Ferdig"}},"nl":{"EditorToggle":{"done":{"title":"Klikken om het bewerken van Rich Text-gebied te voltooien"},"done_as_in_finished":"Gereed"}},"nn":{"EditorToggle":{"done":{"title":"Klikk her for å fullføre redigeringa av området for rikt tekstformat"},"done_as_in_finished":"Fullført"}},"pl":{"EditorToggle":{"done":{"title":"Kliknij, aby ukończyć edycję wzbogaconego obszaru tekstowego"},"done_as_in_finished":"Gotowe"}},"pt":{"EditorToggle":{"done":{"title":"Clique para concluir a edição da área de Rich Text"},"done_as_in_finished":"Feito"}},"pt-BR":{"EditorToggle":{"done":{"title":"Clique para finalizar a edição da área de rich text"},"done_as_in_finished":"Feito"}},"ru":{"EditorToggle":{"done":{"title":"Щелкните, чтобы закончить редактирование форматированного текста"},"done_as_in_finished":"Готово"}},"sv":{"EditorToggle":{"done":{"title":"Klicka för att färdigställa redigering av text-området"},"done_as_in_finished":"Färdig"}},"tr":{"EditorToggle":{"done":{"title":"Zengin metin alanında düzenlemeyi bitirmek için tıklayınız"},"done_as_in_finished":"Tamam"}},"zh-Hans":{"EditorToggle":{"done":{"title":"单击以完成编辑富文本区域"},"done_as_in_finished":"完成"}},"zh-Hant":{"EditorToggle":{"done":{"title":"按一下以完成編輯 RTF 區域"},"done_as_in_finished":"已完成"}}}'))
r("jQeR")
r("0sPK")
var o=i["default"].scoped("EditorToggle")
var _=r("ouhR")
var d=r.n(_)
var l=r("FIFq")
var c=r.n(l)
var u=r("Nxtp")
var p=r("/iD7")
var h=r("q1tI")
var m=r.n(h)
var g=r("i8i4")
var f=r.n(g)
r("17x9")
Object(n["a"])(JSON.parse('{"ar":{"SwitchEditorControl":{"switch_editor_html":"محرر HTML","switch_editor_rich_text":"محرر محتوى"}},"cy":{"SwitchEditorControl":{"switch_editor_html":"Golygydd HTML","switch_editor_rich_text":"Golygydd Cynnwys Cyfoethog"}},"da":{"SwitchEditorControl":{"switch_editor_html":"HTML-editor","switch_editor_rich_text":"Rich Content Editor"}},"de":{"SwitchEditorControl":{"switch_editor_html":"HTML-Editor","switch_editor_rich_text":"Rich-Content-Editor"}},"el":{"SwitchEditorControl":{"switch_editor_html":"Επεξεργαστής HTML","switch_editor_rich_text":"Επεξεργαστής Πλούσιου Περιεχομένου-rich content"}},"en-AU":{"SwitchEditorControl":{"switch_editor_html":"HTML Editor","switch_editor_rich_text":"Rich Content Editor"}},"en-CA":{"SwitchEditorControl":{"switch_editor_html":"HTML Editor","switch_editor_rich_text":"Rich Content Editor"}},"en-GB":{"SwitchEditorControl":{"switch_editor_html":"HTML Editor","switch_editor_rich_text":"Rich Content Editor"}},"es":{"SwitchEditorControl":{"switch_editor_html":"Editor HTML","switch_editor_rich_text":"Editor de contenido enriquecido"}},"fa":{"SwitchEditorControl":{"switch_editor_html":"ویرایشگر HTML","switch_editor_rich_text":"ویرایشگر محتوای غنی"}},"fi":{"SwitchEditorControl":{"switch_editor_html":"HTML-muokkausohjelma","switch_editor_rich_text":"Rikas sisältöeditori"}},"fr":{"SwitchEditorControl":{"switch_editor_html":"Éditeur HTML","switch_editor_rich_text":"Éditeur de texte enrichi"}},"fr-CA":{"SwitchEditorControl":{"switch_editor_html":"Éditeur HTML","switch_editor_rich_text":"Éditeur de texte enrichi"}},"he":{"SwitchEditorControl":{"switch_editor_html":"עורך HTML","switch_editor_rich_text":"עורך תוכן עשיר"}},"ht":{"SwitchEditorControl":{"switch_editor_html":"Editè HTML","switch_editor_rich_text":"Editè Kontni Rich"}},"hu":{"SwitchEditorControl":{"switch_editor_html":"HTML szerkesztő","switch_editor_rich_text":"Vizuális szövegszerkesztő"}},"hy":{"SwitchEditorControl":{"switch_editor_html":"HTML խմբագիր","switch_editor_rich_text":"Ֆորմատավորված տեքստի խմբագիր"}},"is":{"SwitchEditorControl":{"switch_editor_html":"HTML ritill","switch_editor_rich_text":"Rich Content ritill"}},"it":{"SwitchEditorControl":{"switch_editor_html":"Editor HTML","switch_editor_rich_text":"Editor di contenuti avanzati"}},"ja":{"SwitchEditorControl":{"switch_editor_html":"HTML エディタ","switch_editor_rich_text":"リッチ コンテンツ エディタ"}},"mi":{"SwitchEditorControl":{"switch_editor_html":"Editor HTML","switch_editor_rich_text":"Ētita Ihirangi Whai Rawa"}},"nb":{"SwitchEditorControl":{"switch_editor_html":"HTML-redigering","switch_editor_rich_text":"Rich innholdsredigering"}},"nl":{"SwitchEditorControl":{"switch_editor_html":"HTML Editor","switch_editor_rich_text":"Rich Content Editor"}},"nn":{"SwitchEditorControl":{"switch_editor_html":"HTML-redigeringsprogram","switch_editor_rich_text":"Redigeringsprogram for rikt innhald"}},"pl":{"SwitchEditorControl":{"switch_editor_html":"Edytor HTML","switch_editor_rich_text":"Edytor wzbogaconej zawartości"}},"pt":{"SwitchEditorControl":{"switch_editor_html":"Editor HTML","switch_editor_rich_text":"Editor de conteúdo avançado"}},"pt-BR":{"SwitchEditorControl":{"switch_editor_html":"Editor de HTML","switch_editor_rich_text":"Editor de conteúdo avançado"}},"ru":{"SwitchEditorControl":{"switch_editor_html":"Редактор HTML","switch_editor_rich_text":"Редактор форматированного текста"}},"sv":{"SwitchEditorControl":{"switch_editor_html":"HTML Editor","switch_editor_rich_text":"Innehållsredigeraren"}},"tr":{"SwitchEditorControl":{"switch_editor_html":"HTML Düzenleyici","switch_editor_rich_text":"Zengin İçerik Editörü"}},"zh-Hans":{"SwitchEditorControl":{"switch_editor_html":"HTML 编辑器","switch_editor_rich_text":"富内容编辑器"}},"zh-Hant":{"SwitchEditorControl":{"switch_editor_html":"HTML 編輯器","switch_editor_rich_text":"多種格式的內容編輯器"}}}'))
var y=i["default"].scoped("SwitchEditorControl")
var v=r("21i1")
class b extends m.a.Component{constructor(){super(...arguments)
this.state={mode:"rce"}
this.toggle=e=>{e.preventDefault()
v["a"].callOnRCE(this.props.textarea,"toggle")
"rce"===this.state.mode?this.setState({mode:"html"},()=>{this.switchLink.focus()}):this.setState({mode:"rce"},()=>{this.switchLink.focus()})}
this.switchLinkText=()=>"rce"===this.state.mode?y.t("switch_editor_html","HTML Editor"):y.t("switch_editor_rich_text","Rich Content Editor")
this.linkClass=()=>"rce"===this.state.mode?"switch-views__link switch-views__link__html":"switch-views__link switch-views__link__rce"}render(){return Object(s["a"])("div",{style:{float:"right"}},void 0,m.a.createElement("a",{ref:e=>this.switchLink=e,href:"#",className:this.linkClass(),onClick:this.toggle},this.switchLinkText()))}}b.displayName="SwitchEditor"
var k=b
r.d(t,"a",function(){return E})
v["a"].preloadRemoteModule()
let w=0
const S=()=>"editor-toggle-".concat(w+=1)
function E(e,t){this.editingElement(e)
this.options=Object(a["a"])({doneText:o.t("done_as_in_finished","Done"),switchViews:true},t)
this.options.view&&(this.view=this.options.view)
this.textArea=this.createTextArea()
this.textAreaContainer=d()("<div/>").append(this.textArea)
this.options.switchViews&&(this.switchViews=this.createSwitchViews())
this.done=this.createDone()
this.content=this.getContent()
this.editing=false}Object.assign(E.prototype,c.a.Events,{toggle(){return this.editing?this.display():this.edit()},getRceOptions(){const e=d.a.extend({focus:true,tinyOptions:this.options.tinyOptions||{}},this.options.rceOptions)
this.options.editorBoxLabel&&(e.tinyOptions.aria_label=this.options.editorBoxLabel)
return e},edit(){this.textArea.val(this.getContent())
this.textAreaContainer.insertBefore(this.el)
this.el.detach()
if(!ENV.use_rce_enhancements){if(this.options.switchViews){this.switchViews=this.createSwitchViews()
this.switchViews.insertBefore(this.textAreaContainer)}this.infoIcon||(this.infoIcon=(new p["a"]).render().$el)
this.infoIcon.insertBefore(d()(".switch-views__link"))
d()("<div/>",{style:"clear: both"}).insertBefore(this.textAreaContainer)}this.done.insertAfter(this.textAreaContainer)
v["a"].initSidebar()
v["a"].loadNewEditor(this.textArea,this.getRceOptions())
this.textArea=v["a"].freshNode(this.textArea)
this.editing=true
return this.trigger("edit")},replaceTextArea(){this.el.insertBefore(this.textAreaContainer)
v["a"].destroyRCE(this.textArea)
this.textArea&&this.textArea.remove()
this.textArea=this.createTextArea()
this.textAreaContainer.append(this.textArea)
return this.textAreaContainer.detach()},display(e){if(!(null!=e?e.cancel:void 0)){this.content=v["a"].callOnRCE(this.textArea,"get_code")
this.textArea.val(this.content)
this.el.html(this.content)}this.replaceTextArea()
this.options.switchViews&&this.switchViews.detach()
ENV.use_rce_enhancements||this.infoIcon.detach()
this.done.detach()
this.editing=false
return this.trigger("display")},editingElement(e){return this.el=e},getContent(){const e=d()("<div></div>").append(this.el.html())
e.find(".hidden-readable").remove()
return d.a.trim(e.html())},createTextArea:()=>d()("<textarea/>").css({width:"100%",minHeight:"110px"}).addClass("editor-toggle").attr("id",S()),createDone(){return d()("<div/>").addClass("edit_html_done_wrapper").append(d()("<a/>").text(this.options.doneText).attr("href","#").addClass("btn edit_html_done").attr("title",o.t("done.title","Click to finish editing the rich text area")).click(Object(u["a"])(()=>{this.display()
this.editButton&&this.editButton.focus()})))},createSwitchViews(){const e=Object(s["a"])(k,{textarea:this.textArea})
const t=d()("<div class='switch-views'></div>")
f.a.render(e,t[0])
return t}})},"5Shj":function(e,t,r){"use strict"
var s=r("VTBJ")
var a=r("1OyB")
var i=r("vuIU")
var n=r("md7G")
var o=r("foSv")
var _=r("Ji7U")
var d=r("q1tI")
var l=r.n(d)
var c=r("17x9")
var u=r.n(c)
var p=r("PJ1B")
var h=r("KgFQ")
var m=r("jtGx")
var g=r("sQ3t")
var f=r("u9uf")
var y=r("BTe1")
var v=r("J2CL")
var b=r("oXx0")
var k=r("jsCG")
var w=function(e){var t=e.typography,r=e.spacing
return{fontFamily:t.fontFamily,fontWeight:t.fontWeightNormal,fontSize:t.fontSizeSmall,padding:r.small}}
r.d(t,"a",function(){return T})
var S,E,A,x,R
var C={componentId:"eZLSb",template:function(e){return"\n\n.eZLSb_bGBk{box-sizing:border-box;display:block;font-family:".concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";padding:").concat(e.padding||"inherit","}")},root:"eZLSb_bGBk"}
var T=(S=Object(b["a"])(),E=Object(v["i"])(w,C),S(A=E(A=(R=x=function(e){Object(_["a"])(t,e)
function t(e){var r
Object(a["a"])(this,t)
r=Object(n["a"])(this,Object(o["a"])(t).call(this))
r._id=Object(y["a"])("Tooltip")
return r}Object(i["a"])(t,[{key:"renderTrigger",value:function(e){var r=this.props,a=r.children,i=r.as
var n={"aria-describedby":this._id}
if(i){var o=Object(h["a"])(t,this.props)
var _=Object(m["a"])(this.props,t.propTypes)
return l.a.createElement(o,Object.assign({},_,n),a)}return"function"===typeof a?a({focused:e,getTriggerProps:function(e){return Object(s["a"])({},n,{},e)}}):Object(g["a"])(this.props.children,n)}},{key:"render",value:function(){var e=this
return l.a.createElement(p["a"],{render:function(t){var r=t.focused
return l.a.createElement(k["a"],{on:e.props.on,shouldRenderOffscreen:true,shouldReturnFocus:false,placement:e.props.placement,color:"inverse"===e.props.variant?"primary-inverse":"primary",mountNode:e.props.mountNode,constrain:e.props.constrain,shadow:"none",renderTrigger:function(){return e.renderTrigger(r)},__dangerouslyIgnoreExperimentalWarnings:true},l.a.createElement("span",{id:e._id,className:C.root,role:"tooltip"},e.props.tip))}})}}])
t.displayName="Tooltip"
return t}(d["Component"]),x.propTypes={children:u.a.oneOfType([u.a.node,u.a.func]).isRequired,tip:u.a.node.isRequired,as:u.a.elementType,on:u.a.oneOfType([u.a.oneOf(["click","hover","focus"]),u.a.arrayOf(u.a.oneOf(["click","hover","focus"]))]),variant:u.a.oneOf(["default","inverse"]),placement:f["a"].placement,mountNode:f["a"].mountNode,constrain:f["a"].constrain},x.defaultProps={on:void 0,variant:"inverse",placement:"top",mountNode:null,constrain:"window"},R))||A)||A)},"7f68":function(e,t,r){"use strict"
var s=r("GLiE")
var a=r.n(s)
var i=r("ouhR")
var n=r.n(i)
class o{static initialize(){this.$container.on("scroll",a.a.debounce(this.checkInstances,10))
this.initialized=true}static addInstance(e){this.initialized||this.initialize()
this.instances.push(e)
this.checkInstances()}static removeInstance(e){this.initialized||this.initialize()
this.instances=a.a.reject(this.instances,t=>t===e)
this.checkInstances()}static checkInstances(){const e=o.$container.scrollTop()
o.instances.forEach(t=>{e>=t.top?t.stuck||t.stick():t.stuck&&t.unstick()})}constructor(e){this.$el=e
this.top=this.$el.offset().top
this.stuck=false
this.constructor.addInstance(this)}stick(){this.$el.addClass("sticky")
this.stuck=true}unstick(){this.$el.removeClass("sticky")
this.stuck=false}remove(){this.unstick()
this.constructor.removeInstance(this)}}o.instances=[]
o.initialized=false
o.$container=n()(window)
n.a.fn.sticky=function(){return this.each(function(){new o(n()(this))})}
n()(()=>n()("[data-sticky]").sticky())},H4Sz:function(e,t,r){"use strict"
var s=r("An8g")
var a=r("ouhR")
var i=r.n(a)
var n=r("q1tI")
var o=r.n(n)
r("17x9")
var _=r("i8i4")
var d=r.n(_)
var l=r("P4VU")
r("MWZS")
var c=r("mykf")
var u=r("etQE")
var p=Object(s["a"])("div",{className:"ic-flash__icon","aria-hidden":"true"},void 0,Object(s["a"])("i",{className:"icon-info"}))
var h=Object(s["a"])("div",{className:"ic-flash__icon","aria-hidden":"true"},void 0,Object(s["a"])("i",{className:"icon-info"}))
var m=Object(s["a"])("div",{})
class g extends o.a.Component{constructor(e){super(e)
this.getMaxIFrameWidth=()=>{if(this.state.tools){let e=0
for(let t=0;t<this.state.tools.length;t++){const r=this.state.tools[t]
const s=this["tool_iframe_".concat(r.definition_id)].offsetWidth
s>e&&(e=s)}return e}return null}
this.handleAlertFocus=e=>{const t={iframeStyle:{border:"2px solid #008EE2",width:"".concat(this.getMaxIFrameWidth()-4,"px")}}
e.target.className.search("before")>-1?t.beforeExternalContentAlertClass="":e.target.className.search("after")>-1&&(t.afterExternalContentAlertClass="")
this.setState(t)}
this.handleAlertBlur=e=>{const t={iframeStyle:{border:"none",width:"100%"}}
e.target.className.search("before")>-1?t.beforeExternalContentAlertClass="screenreader-only":e.target.className.search("after")>-1&&(t.afterExternalContentAlertClass="screenreader-only")
this.setState(t)}
this.state={tools:[],beforeExternalContentAlertClass:"screenreader-only",afterExternalContentAlertClass:"screenreader-only",iframeStyle:{}}}componentWillMount(){this.getTools()}componentDidMount(){if(this.state.tools)for(let e=0;e<this.state.tools.length;e++){const t=this.state.tools[e]
this["tool_iframe_".concat(t.definition_id)].setAttribute("allow",Object(c["a"])())}}async getTools(){const e=encodeURI("".concat(this.getDefinitionsUrl(),"?placements[]=").concat(this.props.placement))
try{const t=Object(u["e"])(e)||fetch(e,u["d"])
const r=await Object(u["b"])(t)
r.forEach(e=>e.launch=this.getLaunch(e))
this.setState({tools:r})}catch(e){i.a.flashError(l["a"].t("Error retrieving assignment external tools"))}}getDefinitionsUrl(){return"/api/v1/courses/".concat(this.props.courseId,"/lti_apps/launch_definitions")}getLaunch(e){const t=e.placements[this.props.placement].url
let r="?borderless=true&url=".concat(encodeURIComponent(t),"&placement=").concat(this.props.placement)
this.props.assignmentId&&(r+="&assignment_id=".concat(this.props.assignmentId))
const s="/courses/".concat(this.props.courseId,"/external_tools/retrieve")
return s+r}renderTool(e){const t={}
i.a.extend(t,this.state.iframeStyle)
if(e.placements[this.props.placement].launch_height){t.height=e.placements[this.props.placement].launch_height
t.minHeight="unset"}e.placements[this.props.placement].launch_width&&(t.width=e.placements[this.props.placement].launch_width)
return o.a.createElement("iframe",{src:e.launch,className:"tool_launch",style:t,key:e.definition_id,title:l["a"].t("External Tool %{tool_id}",{tool_id:e.definition_id}),ref:t=>{this["tool_iframe_".concat(e.definition_id)]=t},"data-lti-launch":"true"})}renderToolsContainer(){const e="before_external_content_info_alert ".concat(this.state.beforeExternalContentAlertClass)
const t="after_external_content_info_alert ".concat(this.state.afterExternalContentAlertClass)
return Object(s["a"])("div",{style:{display:"about:blank"===this.state.toolLaunchUrl?"none":"block"}},void 0,Object(s["a"])("div",{onFocus:this.handleAlertFocus,onBlur:this.handleAlertBlur,className:e,tabIndex:"0"},void 0,Object(s["a"])("div",{className:"ic-flash-info",style:{width:"auto",margin:"20px"}},void 0,p,l["a"].t("The following content is partner provided"))),this.state.tools.map(e=>this.renderTool(e)),Object(s["a"])("div",{onFocus:this.handleAlertFocus,onBlur:this.handleAlertBlur,className:t,tabIndex:"0"},void 0,Object(s["a"])("div",{className:"ic-flash-info",style:{width:"auto",margin:"20px"}},void 0,h,l["a"].t("The preceding content is partner provided"))))}render(){if(0===this.state.tools.length)return m
return Object(s["a"])("div",{},void 0,Object(s["a"])("div",{className:"border border-trbl border-round"},void 0,this.renderToolsContainer()))}}g.defaultProps={assignmentId:void 0}
const f=function(e,t,r,a){const i=Object(s["a"])(g,{placement:t,courseId:r,assignmentId:a})
d.a.render(i,e)}
const y={configTools:g,attach:f}
t["a"]=y},"JIC+":function(e,t,r){"use strict"
var s=r("3O+N")
var a=r.n(s)
var i=r("pQTu")
var n=r("m0r6")
Object(n["a"])(JSON.parse('{"ar":{"student_5da6bfd1":"الطالب"},"cy":{"student_5da6bfd1":"Myfyriwr"},"da":{"student_5da6bfd1":"Studerende"},"da-x-k12":{"student_5da6bfd1":"Elev"},"de":{"student_5da6bfd1":"Student"},"el":{"student_5da6bfd1":"Μαθητής "},"en-AU":{"student_5da6bfd1":"Student"},"en-CA":{"student_5da6bfd1":"Student"},"en-GB":{"student_5da6bfd1":"Student"},"es":{"student_5da6bfd1":"Alumno"},"fa":{"student_5da6bfd1":"دانشجو"},"fi":{"student_5da6bfd1":"Opiskelija"},"fr":{"student_5da6bfd1":"Étudiant"},"fr-CA":{"student_5da6bfd1":"Étudiant"},"he":{"student_5da6bfd1":"תלמיד"},"ht":{"student_5da6bfd1":"Elèv"},"hu":{"student_5da6bfd1":"Hallgató"},"hy":{"student_5da6bfd1":"Ունկնդիր"},"is":{"student_5da6bfd1":"Nemandi"},"it":{"student_5da6bfd1":"Studente"},"ja":{"student_5da6bfd1":"受講生"},"ko":{"student_5da6bfd1":"학생"},"mi":{"student_5da6bfd1":"Ākonga"},"nb":{"student_5da6bfd1":"Student"},"nb-x-k12":{"student_5da6bfd1":"Elev"},"nl":{"student_5da6bfd1":"Cursist"},"nn":{"student_5da6bfd1":"Student"},"pl":{"student_5da6bfd1":"Uczestnik"},"pt":{"student_5da6bfd1":"Aluno"},"pt-BR":{"student_5da6bfd1":"Aluno"},"ru":{"student_5da6bfd1":"Студент"},"sl":{"student_5da6bfd1":"Študent"},"sv":{"student_5da6bfd1":"Student"},"sv-x-k12":{"student_5da6bfd1":"Elev"},"tr":{"student_5da6bfd1":"Öğrenci"},"uk":{"student_5da6bfd1":"Студент"},"zh-Hans":{"student_5da6bfd1":"学生"},"zh-Hant":{"student_5da6bfd1":"學生"}}'))
r("jQeR")
r("0sPK")
i["default"].scoped("avatar")
r("DfGn")
var o=a.a.default
var _=o.template,d=o.templates=o.templates||{}
var l="-avatar"
d[l]=_(function(e,t,r,s,a){this.compilerInfo=[4,">= 1.0.0"]
r=this.merge(r,e.helpers)
a=a||{}
var i,n="",o=r.helperMissing,_=this.escapeExpression,d=this
function l(e,t){var s,a=""
a+="\n  "
s=r["if"].call(e,e&&e.anonymous,{hash:{},inverse:d.program(4,u,t),fn:d.program(2,c,t),data:t});(s||0===s)&&(a+=s)
a+="\n"
return a}function c(e,t){var s,a,i=""
i+='\n    <a\n      class="avatar"\n      style="background-image: url(/images/messages/avatar-50.png)"\n    >\n      <span class="screenreader-only">'+_((s=r.t||e&&e.t,a={hash:{i18n_inferred_key:true},data:t},s?s.call(e,"student_5da6bfd1","Student",a):o.call(e,"t","student_5da6bfd1","Student",a)))+"</span>\n    </a>\n  "
return i}function u(e,t){var s,a,i,n=""
n+="\n    "
s=(a=r.ifAny||e&&e.ifAny,i={hash:{},inverse:d.noop,fn:d.program(5,p,t),data:t},a?a.call(e,e&&e.avatar_url,e&&e.avatar_image_url,i):o.call(e,"ifAny",e&&e.avatar_url,e&&e.avatar_image_url,i));(s||0===s)&&(n+=s)
n+="\n  "
return n}function p(e,t){var s,a=""
a+="\n      "
s=r["if"].call(e,e&&e.alreadyEscaped,{hash:{},inverse:d.program(9,g,t),fn:d.program(6,h,t),data:t});(s||0===s)&&(a+=s)
a+="\n    "
return a}function h(e,t){var s,a,i,n=""
n+="\n        <a\n          "
s=(a=r.ifAny||e&&e.ifAny,i={hash:{},inverse:d.noop,fn:d.program(7,m,t),data:t},a?a.call(e,e&&e.url,e&&e.html_url,i):o.call(e,"ifAny",e&&e.url,e&&e.html_url,i));(s||0===s)&&(n+=s)
n+='\n          class="avatar"\n          style="background-image: url('
s=(a=r.or||e&&e.or,i={hash:{},data:t},a?a.call(e,e&&e.avatar_url,e&&e.avatar_image_url,i):o.call(e,"or",e&&e.avatar_url,e&&e.avatar_image_url,i));(s||0===s)&&(n+=s)
n+=')">\n          <span class="screenreader-only">'
s=(a=r.or||e&&e.or,i={hash:{},data:t},a?a.call(e,e&&e.display_name,e&&e.short_name,i):o.call(e,"or",e&&e.display_name,e&&e.short_name,i));(s||0===s)&&(n+=s)
n+="</span></a>\n      "
return n}function m(e,t){var s,a,i,n=""
n+='href="'
s=(a=r.or||e&&e.or,i={hash:{},data:t},a?a.call(e,e&&e.url,e&&e.html_url,i):o.call(e,"or",e&&e.url,e&&e.html_url,i));(s||0===s)&&(n+=s)
n+='"'
return n}function g(e,t){var s,a,i,n=""
n+="\n        <a\n          "
s=(a=r.ifAny||e&&e.ifAny,i={hash:{},inverse:d.noop,fn:d.program(10,f,t),data:t},a?a.call(e,e&&e.url,e&&e.html_url,i):o.call(e,"ifAny",e&&e.url,e&&e.html_url,i));(s||0===s)&&(n+=s)
n+='\n          class="avatar"\n          style="background-image: url('+_((a=r.or||e&&e.or,i={hash:{},data:t},a?a.call(e,e&&e.avatar_url,e&&e.avatar_image_url,i):o.call(e,"or",e&&e.avatar_url,e&&e.avatar_image_url,i)))+')"\n          ><span class="screenreader-only">'+_((a=r.or||e&&e.or,i={hash:{},data:t},a?a.call(e,e&&e.display_name,e&&e.short_name,i):o.call(e,"or",e&&e.display_name,e&&e.short_name,i)))+"</span></a>\n      "
return n}function f(e,t){var s,a,i=""
i+='href="'+_((s=r.or||e&&e.or,a={hash:{},data:t},s?s.call(e,e&&e.url,e&&e.html_url,a):o.call(e,"or",e&&e.url,e&&e.html_url,a)))+'"'
return i}n+="\n"
i=r["if"].call(t,t,{hash:{},inverse:d.noop,fn:d.program(1,l,a),data:a});(i||0===i)&&(n+=i)
n+="\n"
return n})
o.registerPartial("avatar",d["-avatar"])
t["a"]=d[l]},MggM:function(e,t,r){"use strict"
r.d(t,"a",function(){return i})
var s=r("ouhR")
var a=r.n(s)
r("jYyc")
class i{constructor(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
this.poll=()=>{this.running=true
this.attempts++
return a.a.ajaxJSON(this.url,"GET",{},this.handle,(e,t)=>this.handleErrors?this.handle(e,t):this.stop())}
this.handle=(e,t)=>{switch(this.handler(e,t)){case"continue":return this.nextPoll()
case"reset":return this.nextPoll(true)
case"stop":return this.stop(true)
default:return this.stop()}}
this.url=e
this.handler=t
this.baseInterval=null!=r.baseInterval?r.baseInterval:1e3
this.backoffFactor=null!=r.backoffFactor?r.backoffFactor:1.5
this.maxAttempts=null!=r.maxAttempts?r.maxAttempts:8
this.handleErrors=null!=r.handleErrors&&r.handleErrors
this.initialDelay=null==r.initialDelay||r.initialDelay}start(){this.running?this.reset():this.nextPoll(true)
return this}then(e){(this.callbacks||(this.callbacks=[])).push(e)}reset(){this.nextInterval=this.baseInterval
this.attempts=0}stop(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
this.running&&clearTimeout(this.running)
delete this.running
e&&this.callbacks&&this.callbacks.forEach(e=>e())
delete this.callbacks}nextPoll(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
if(e){this.reset()
if(!this.initialDelay)return this.poll()}else this.nextInterval=parseInt(this.nextInterval*this.backoffFactor,10)
if(this.attempts>=this.maxAttempts)return this.stop()
return this.running=setTimeout(this.poll,this.nextInterval)}}},P4VU:function(e,t,r){"use strict"
var s=r("pQTu")
var a=r("m0r6")
Object(a["a"])(JSON.parse('{"ar":{"error_retrieving_assignment_external_tools_9102d343":"خطأ أثناء استعادة الأدوات الخارجية للمهمة","error_retrieving_similarity_detection_tools_d6d4f9e9":"خطأ أثناء استعادة أدوات اكتشاف التشابه","external_tool_tool_id_6028b3b1":"أداة خارجية %{tool_id}","the_following_content_is_partner_provided_ed1da756":"المحتوى التالي تم إدخاله بواسطة شريك","the_preceding_content_is_partner_provided_d753928c":"المحتوى السابق تم إدخاله بواسطة شريك"},"cy":{"error_retrieving_assignment_external_tools_9102d343":"Gwall wrth adfer adnoddau allanol aseiniad","error_retrieving_similarity_detection_tools_d6d4f9e9":"Gwall wrth adfer adnoddau adnabod tebygrwydd","external_tool_tool_id_6028b3b1":"Adnodd Allanol %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Mae’r cynnwys canlynol yn cael ei ddarparu gan bartner","the_preceding_content_is_partner_provided_d753928c":"Mae’r cynnwys blaenorol yn cael ei ddarparu gan bartner"},"da":{"error_retrieving_assignment_external_tools_9102d343":"Fejl ved hentning af opgavens eksterne værktøjer","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fejl ved hentning af ligheds-detektionsværktøjer","external_tool_tool_id_6028b3b1":"Eksternt værktøj %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Følgende indhold er partnerleveret","the_preceding_content_is_partner_provided_d753928c":"Foregående indhold er partnerleveret"},"da-x-k12":{"error_retrieving_similarity_detection_tools_d6d4f9e9":"Fejl ved hentning af ligheds-detektionsværktøjer","the_following_content_is_partner_provided_ed1da756":"Følgende indhold er partnerleveret","the_preceding_content_is_partner_provided_d753928c":"Foregående indhold er partnerleveret"},"de":{"error_retrieving_assignment_external_tools_9102d343":"Fehler beim Abrufen aufgabenexterner-Tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fehler beim Abrufen der Similarity-Detection-Tools","external_tool_tool_id_6028b3b1":"Externes Tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Der folgende Content stammt von einem Partner.","the_preceding_content_is_partner_provided_d753928c":"Der vorhergehende Content stammt von einem Partner."},"en-AU":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving assignment external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External Tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"en-CA":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving assignment external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External Tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"en-GB":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving assignment external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"es":{"error_retrieving_assignment_external_tools_9102d343":"Error al recuperar las herramientas externas de la tarea","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error al consultar las herramientas de detección de similitud","external_tool_tool_id_6028b3b1":"Herramienta externa %{tool_id}","the_following_content_is_partner_provided_ed1da756":"El siguiente contenido está proporcionado por un socio","the_preceding_content_is_partner_provided_d753928c":"El contenido anterior está proporcionado por un socio"},"fa":{"error_retrieving_similarity_detection_tools_d6d4f9e9":"خطا در بازیابی ابزارهای تشخیص شباهت","the_following_content_is_partner_provided_ed1da756":"محتوای زیر توسط شریک فراهم شده است","the_preceding_content_is_partner_provided_d753928c":"محتوای پیشین توسط شریک ارائه شده است"},"fi":{"error_retrieving_assignment_external_tools_9102d343":"Virhe noudettaessa tehtävän ulkoisia työkaluja","error_retrieving_similarity_detection_tools_d6d4f9e9":"Virhe noudettaessa samanlaisuuden havaintotyökaluja","external_tool_tool_id_6028b3b1":"Ulkoinen työkalu %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Seuraava sisältö on kumppanin toimittajaa","the_preceding_content_is_partner_provided_d753928c":"edeltävä sisältö on kumppanin toimittamaa"},"fr":{"error_retrieving_assignment_external_tools_9102d343":"Outils externes de récupération d\'erreur des travaux","error_retrieving_similarity_detection_tools_d6d4f9e9":"Erreur lors de la récupération des outils de détection de similitude.","external_tool_tool_id_6028b3b1":"Outil externe %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Le contenu suivant est fourni par un partenaire","the_preceding_content_is_partner_provided_d753928c":"Le contenu qui précède était fourni par un partenaire"},"fr-CA":{"error_retrieving_assignment_external_tools_9102d343":"Erreur lors de la récupération des outils externes des tâches","error_retrieving_similarity_detection_tools_d6d4f9e9":"Erreur lors de la récupération des outils de détection de similarité","external_tool_tool_id_6028b3b1":"Outil externe %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Le contenu suivant est fourni par le partenaire","the_preceding_content_is_partner_provided_d753928c":"Le contenu précédent est fourni par le partenaire"},"he":{"error_retrieving_similarity_detection_tools_d6d4f9e9":"תקלה בהעלאת כלי זיהוי העתקות"},"ht":{"error_retrieving_assignment_external_tools_9102d343":"Erè pandan rekiperasyon zouti ekstèn sesyon an","error_retrieving_similarity_detection_tools_d6d4f9e9":"Erè pandan rekiperasyon zouti deteksyon resanblans yo","external_tool_tool_id_6028b3b1":"Zouti Ekstèn %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Kontni annapre a se yon asosye ki bay li","the_preceding_content_is_partner_provided_d753928c":"Kontni anvan an se yon asosye ki bay li"},"is":{"error_retrieving_assignment_external_tools_9102d343":"Villa við að ná í ytri tól verkefnis","error_retrieving_similarity_detection_tools_d6d4f9e9":"Villa við endurheimt líkindagreiningartóla","external_tool_tool_id_6028b3b1":"Ytra tól %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Eftirfarandi efni er gefið upp af samstarfsaðila","the_preceding_content_is_partner_provided_d753928c":"Framangreint efni er gefið upp af samstarfsaðila"},"it":{"error_retrieving_assignment_external_tools_9102d343":"Errore recupero strumenti esterni compito","error_retrieving_similarity_detection_tools_d6d4f9e9":"Errore durante il recupero degli strumenti di rilevamento similarità","external_tool_tool_id_6028b3b1":"Strumento esterno %{tool_id}","the_following_content_is_partner_provided_ed1da756":"I contenuti seguenti sono forniti dal partner","the_preceding_content_is_partner_provided_d753928c":"I contenuti precedenti sono forniti dal partner"},"ja":{"error_retrieving_assignment_external_tools_9102d343":"課題外部ツールの取得中にエラーが発生しました","error_retrieving_similarity_detection_tools_d6d4f9e9":"類似性検知ツールの取得中にエラーが発生しました","external_tool_tool_id_6028b3b1":"外部ツール%{tool_id}","the_following_content_is_partner_provided_ed1da756":"以下のコンテンツはパートナーが提供しています","the_preceding_content_is_partner_provided_d753928c":"上記のコンテンツはパートナーが提供しています"},"mi":{"error_retrieving_assignment_external_tools_9102d343":"Hapa ki te tiki i ngā whakataunga taputapu o waho","error_retrieving_similarity_detection_tools_d6d4f9e9":"I hapa i te wā e tiki ana taputapu rapunga ritenga.","external_tool_tool_id_6028b3b1":"Taputapu o waho %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Ko ngā kōrero e whai ake nei he hoa mahi","the_preceding_content_is_partner_provided_d753928c":"Ko te tuhinga o mua he hoa mahi"},"nb":{"error_retrieving_assignment_external_tools_9102d343":"Avvik ved henting av oppgavens eksterne verktøy","error_retrieving_similarity_detection_tools_d6d4f9e9":"Feil ved henting av verktøy for likhetsgjenkjenning","external_tool_tool_id_6028b3b1":"Eksternt verktøy %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Følgende innhold er gitt av en partner","the_preceding_content_is_partner_provided_d753928c":"Det foregående innholdet er gitt av en partner"},"nb-x-k12":{"error_retrieving_assignment_external_tools_9102d343":"Avvik ved henting av oppgavens eksterne verktøy","error_retrieving_similarity_detection_tools_d6d4f9e9":"Feil ved henting av verktøy for likhetsgjenkjenning","external_tool_tool_id_6028b3b1":"Eksternt verktøy %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Følgende innhold er gitt av en partner","the_preceding_content_is_partner_provided_d753928c":"Det foregående innholdet er gitt av en partner"},"nl":{"error_retrieving_assignment_external_tools_9102d343":"Fout bij het ophalen van externe tools voor opdrachten","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fout bij het ophalen van tools voor vergelijkbaarheidsdetectie","external_tool_tool_id_6028b3b1":"Externe tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"De volgende inhoud is door een partner geleverd","the_preceding_content_is_partner_provided_d753928c":"De voorgaande inhoud is door een partner geleverd"},"nn":{"error_retrieving_assignment_external_tools_9102d343":"Det oppstod ein feil under henting av oppgåve frå eksternt verktøy","error_retrieving_similarity_detection_tools_d6d4f9e9":"Det oppstod ein feil ved framhenting av verktøy for likskapskontroll","external_tool_tool_id_6028b3b1":"Eksternt verktøy %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Følgande innhald er lagt til av partnar","the_preceding_content_is_partner_provided_d753928c":"Det føregåande innhaldet er lagt til av partnar"},"pl":{"error_retrieving_assignment_external_tools_9102d343":"Błąd pobierania zewnętrznych narzędzi do zadań","error_retrieving_similarity_detection_tools_d6d4f9e9":"Błąd pobierania narzędzi do wykrywania podobieństw","external_tool_tool_id_6028b3b1":"Narzędzie zewnętrzne %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Następującą zawartość dostarcza partner","the_preceding_content_is_partner_provided_d753928c":"Poprzednią zawartość dostarcza partner"},"pt":{"error_retrieving_assignment_external_tools_9102d343":"Erro ao recuperar ferramentas externas de atribuição","error_retrieving_similarity_detection_tools_d6d4f9e9":"Erro ao recuperar ferramentas de detecção de similaridade","external_tool_tool_id_6028b3b1":"Ferramenta Externa %{tool_id}","the_following_content_is_partner_provided_ed1da756":"O parceiro fornece o seguinte conteúdo","the_preceding_content_is_partner_provided_d753928c":"O conteúdo anterior é parceiro fornecido"},"pt-BR":{"error_retrieving_assignment_external_tools_9102d343":"Erro ao recuperar ferramentas externas da tarefa","error_retrieving_similarity_detection_tools_d6d4f9e9":"Erro ao recuperar as ferramentas de detecção de similaridade","external_tool_tool_id_6028b3b1":"Ferramenta externa %{tool_id}","the_following_content_is_partner_provided_ed1da756":"O seguinte conteúdo é fornecido por parceiro","the_preceding_content_is_partner_provided_d753928c":"O conteúdo precedente é fornecido por parceiro"},"ru":{"error_retrieving_assignment_external_tools_9102d343":"Ошибка при получении внешних инструментов задания","error_retrieving_similarity_detection_tools_d6d4f9e9":"Ошибка при считывании инструментов обнаружения сходства","external_tool_tool_id_6028b3b1":"Внешний инструмент %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Последующий контент предоставляется партнером","the_preceding_content_is_partner_provided_d753928c":"Предыдущий контент предоставляется партнером"},"sl":{"error_retrieving_assignment_external_tools_9102d343":"Napaka pri pridobivanju zunanjih orodij za nalogo","error_retrieving_similarity_detection_tools_d6d4f9e9":"Napaka pri pridobivanju orodij za zaznavanje ujemanja","external_tool_tool_id_6028b3b1":"Zunanje orodje %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Naslednjo vsebino zagotavljajo partnerji.","the_preceding_content_is_partner_provided_d753928c":"Predhodno vsebino zagotavljajo partnerji."},"sv":{"error_retrieving_assignment_external_tools_9102d343":"Det gick inte att hämta externa verktyg för uppgiften","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fel vid hämtning av likhets detektionsredskap","external_tool_tool_id_6028b3b1":"Externt verktyg %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Följande innehåll är partner tillhandahållet","the_preceding_content_is_partner_provided_d753928c":"Det föregående innehållet är partner tillhandahållet"},"sv-x-k12":{"error_retrieving_similarity_detection_tools_d6d4f9e9":"Fel vid hämtning av likhets detektionsredskap","the_following_content_is_partner_provided_ed1da756":"Följande innehåll är partner tillhandahållet","the_preceding_content_is_partner_provided_d753928c":"Det föregående innehållet är partner tillhandahållet"},"uk":{"error_retrieving_similarity_detection_tools_d6d4f9e9":"Помилка отримання параметрів виявлення схожості","the_following_content_is_partner_provided_ed1da756":"Наступний контент наданий партнером","the_preceding_content_is_partner_provided_d753928c":"Попередній контент наданий партнером"},"zh-Hans":{"error_retrieving_assignment_external_tools_9102d343":"提取作业外部工具时出错","error_retrieving_similarity_detection_tools_d6d4f9e9":"检索相似性检测工具时发生错误","external_tool_tool_id_6028b3b1":"外部工具%{tool_id}","the_following_content_is_partner_provided_ed1da756":"以下内容由合作伙伴提供","the_preceding_content_is_partner_provided_d753928c":"以上内容由合作伙伴提供"},"zh-Hant":{"error_retrieving_assignment_external_tools_9102d343":"檢索作業外部工具時出錯","error_retrieving_similarity_detection_tools_d6d4f9e9":"檢索相似性檢測工具錯誤","external_tool_tool_id_6028b3b1":"外部工具%{tool_id}","the_following_content_is_partner_provided_ed1da756":"以下內容由合作夥伴提供","the_preceding_content_is_partner_provided_d753928c":"上述內容由合作夥伴提供"}}'))
r("jQeR")
r("0sPK")
t["a"]=s["default"].scoped("moderated_grading")},PJ1B:function(e,t,r){"use strict"
var s=r("1OyB")
var a=r("vuIU")
var i=r("md7G")
var n=r("foSv")
var o=r("Ji7U")
r("DEX3")
var _=r("q1tI")
var d=r("17x9")
var l=r.n(d)
var c=r("yfCu")
var u=r("i/8D")
var p={keyboard:"keyboard",pointer:"pointer"}
var h=[]
var m=[]
var g=p.keyboard
var f=0
var y={}
var v=function(e){if("html"===e.target.nodeName.toLowerCase())return
b(g,p.pointer)
h.forEach(function(e){return e.remove()})}
var b=function(e,t){if(e===t)return
g=t
Object.keys(y).forEach(function(r){return y[r](e,t)})}
var k=function(){b(g,p.keyboard)}
var w=function(){b(g,p.pointer)}
var S=function(){if(0===h.length){h.push(Object(c["a"])(document,"mousemove",v,true))
h.push(Object(c["a"])(document,"mousedown",v,true))
h.push(Object(c["a"])(document,"mouseup",v,true))
h.push(Object(c["a"])(document,"pointermove",v,true))
h.push(Object(c["a"])(document,"pointerdown",v,true))
h.push(Object(c["a"])(document,"pointerup",v,true))
h.push(Object(c["a"])(document,"touchmove",v,true))
h.push(Object(c["a"])(document,"touchstart",v,true))
h.push(Object(c["a"])(document,"touchend",v,true))}}
var E=function(){if(0===m.length){m.push(Object(c["a"])(document,"keydown",k,true))
m.push(Object(c["a"])(document,"mousedown",w,true))
m.push(Object(c["a"])(document,"pointerdown",w,true))
m.push(Object(c["a"])(document,"touchstart",w,true))}}
var A=function(){h.forEach(function(e){return e.remove()})
h=[]
m.forEach(function(e){return e.remove()})
m=[]}
var x=function(e){var t=e.onInputModeChange
var r=f++
"function"===typeof t&&(y[r]=t)
if(u["a"]){E()
S()}return{isKeyboardMode:function(){return g===p.keyboard},remove:function(){1===f&&A()
delete y[r]
f--}}}
var R=r("K7t/")
var C=r("cFoZ")
r.d(t,"a",function(){return T})
var T=function(e){Object(o["a"])(t,e)
function t(){var e
var r
Object(s["a"])(this,t)
for(var a=arguments.length,o=new Array(a),_=0;_<a;_++)o[_]=arguments[_]
r=Object(i["a"])(this,(e=Object(n["a"])(t)).call.apply(e,[this].concat(o)))
r._focusListener=null
r._blurListener=null
r._inputModeListener=null
r.state={focused:false,focusable:false}
r.handleInputModeChange=function(){r.forceUpdate()}
r.handleFocus=function(e){r.removeFocusListener()
r.setState({focused:true})}
r.handleBlur=function(e){r.removeBlurListener()
r.setState({focused:false})}
return r}Object(a["a"])(t,[{key:"componentDidMount",value:function(){var e=this.focusable,t=this.focused
this.addFocusableListeners(e,t)
this._inputModeListener=x({onInputModeChange:this.handleInputModeChange})
this.setState({focusable:e,focused:t})}},{key:"componentWillReceiveProps",value:function(e){var t=this.props,r=t.render,s=t.children
e.children===s&&e.render===r||this.removeFocusableListeners()}},{key:"componentDidUpdate",value:function(e,t){var r=this.focusable
if(r!==this.state.focusable){this.removeFocusableListeners()
this.state.focused&&r.focus()
this.addFocusableListeners(r,this.state.focused)
this.setState({focusable:r})}else t.focused!==this.state.focused&&this.addFocusableListeners(r,this.state.focused)}},{key:"componentWillUnmount",value:function(){if(this._inputModeListener){this._inputModeListener.remove()
this._inputModeListener=null}this.removeFocusableListeners()}},{key:"addFocusableListeners",value:function(e,t){if(!e)return
t?this._blurListener=Object(c["a"])(e,"blur",this.handleBlur,true):this._focusListener=Object(c["a"])(e,"focus",this.handleFocus,true)}},{key:"removeFocusableListeners",value:function(){this.removeFocusListener()
this.removeBlurListener()}},{key:"removeFocusListener",value:function(){if(this._focusListener){this._focusListener.remove()
this._focusListener=null}}},{key:"removeBlurListener",value:function(){if(this._blurListener){this._blurListener.remove()
this._blurListener=null}}},{key:"focus",value:function(){var e=this.focusable
e&&e.focus()}},{key:"isFocusVisible",value:function(e,r){if(!e||!r)return false
if(this._inputModeListener&&this._inputModeListener.isKeyboardMode())return true
var s=e.tagName,a=e.type,i=e.isContentEditable
if("INPUT"==s&&t.inputTypes[a])return true
if("TEXTAREA"==s)return true
if(i)return true
return false}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.render,s=void 0===r?t:r
var a=this.state,i=a.focusable,n=a.focused
return"function"===typeof s?s({focused:n,focusable:i,focusVisible:this.isFocusVisible(i,n)}):null}},{key:"focused",get:function(){return Object(R["a"])(this)}},{key:"focusable",get:function(){var e=Object(C["a"])(this,function(){return true},true)||[]
var t=e&&e.length||0
"[Focusable] Exactly one focusable child is required (".concat(t," found).")
e=!!e&&e[0]
return!(!e||"function"!==typeof e.focus)&&e}},{key:"focusVisible",get:function(){var e=this.state,t=e.focusable,r=e.focused
return this.isFocusVisible(t,r)}}])
t.displayName="Focusable"
return t}(_["Component"])
T.propTypes={children:l.a.func,render:l.a.func}
T.defaultProps={children:null,render:void 0}
T.inputTypes={text:true,search:true,url:true,tel:true,email:true,password:true,number:true,date:true,month:true,week:true,time:true,datetime:true,"datetime-local":true}},T5C8:function(e,t,r){"use strict"
r.d(t,"a",function(){return s})
function s(e){return e.replace(/[\\\^\$\*\+\?\.\(\)\|\{\}\[\]]/g,"\\$&")}},"YS+g":function(e,t,r){"use strict"
var s=r("An8g")
r("q1tI")
var a=r("5Shj")
var i=r("5JRF")
var n=r("Xx/m")
var o=r("S4Kx")
var _=r("WfMV")
var d=r("pQTu")
var l=r("m0r6")
Object(l["a"])(JSON.parse('{"ar":{"all_sections_daf11554":"كل الأقسام","count_sections_466dcd5c":{"one":"1 قسم","other":"%{count} الأقسام"},"count_users_374d6e47":"(%{count} من المستخدمين)","name_count_users_ccc93c3d":"%{name} (%{count} من المستخدمين)"},"cy":{"all_sections_daf11554":"Pob Adran","count_sections_466dcd5c":{"one":"1 Adran","other":"%{count} Adrannau"},"count_users_374d6e47":"(%{count} Defnyddiwr)","name_count_users_ccc93c3d":"%{name} (%{count} Defnyddiwr)"},"da":{"all_sections_daf11554":"Alle sektioner","count_sections_466dcd5c":{"one":"1 sektion","other":"%{count} Sektioner"},"count_users_374d6e47":"(%{count} brugere)","name_count_users_ccc93c3d":"%{name} (%{count} brugere)"},"da-x-k12":{"all_sections_daf11554":"Alle sektioner","count_sections_466dcd5c":{"one":"1 sektion","other":"%{count} Sektioner"},"count_users_374d6e47":"(%{count} brugere)","name_count_users_ccc93c3d":"%{name} (%{count} brugere)"},"de":{"all_sections_daf11554":"Alle Abschnitte","count_sections_466dcd5c":{"one":"1 Abschnitt","other":"%{count} Abschnitte"},"count_users_374d6e47":"(%{count} Benutzer)","name_count_users_ccc93c3d":"%{name} (%{count} Benutzer)"},"el":{"all_sections_daf11554":"Όλα τα Τμήματα"},"en-AU":{"all_sections_daf11554":"All Sections","count_sections_466dcd5c":{"one":"1 section","other":"%{count} Sections"},"count_users_374d6e47":"(%{count} Users)","name_count_users_ccc93c3d":"%{name} (%{count} Users)"},"en-CA":{"all_sections_daf11554":"All Sections","count_sections_466dcd5c":{"one":"1 Section","other":"%{count} Sections"},"count_users_374d6e47":"(%{count} Users)","name_count_users_ccc93c3d":"%{name} (%{count} Users)"},"en-GB":{"all_sections_daf11554":"All sections","count_sections_466dcd5c":{"one":"1 section","other":"%{count} Sections"},"count_users_374d6e47":"(%{count} users)","name_count_users_ccc93c3d":"%{name} (%{count} users)"},"es":{"all_sections_daf11554":"Todas las secciones","count_sections_466dcd5c":{"one":"1 sección","other":"%{count} Secciones"},"count_users_374d6e47":"(%{count} Usuarios)","name_count_users_ccc93c3d":"%{name} (%{count} Usuarios)"},"fa":{"all_sections_daf11554":"همه بخش‌ها","count_users_374d6e47":"(%{count} کاربر)","name_count_users_ccc93c3d":"%{name} (%{count} کاربر)"},"fi":{"all_sections_daf11554":"Kaikki osat","count_sections_466dcd5c":{"one":"1 osa","other":"%{count} Osat"},"count_users_374d6e47":"(%{count} käyttäjää)","name_count_users_ccc93c3d":"%{name} (%{count} käyttäjää)"},"fr":{"all_sections_daf11554":"Toutes les sections","count_sections_466dcd5c":{"one":"1 Section","other":"%{count} Sections"},"count_users_374d6e47":"(%{count} Utilisateurs)","name_count_users_ccc93c3d":"%{name} (%{count} Utilisateurs)"},"fr-CA":{"all_sections_daf11554":"Toutes les sections","count_sections_466dcd5c":{"one":"1 Section","other":"%{count} Sections"},"count_users_374d6e47":"(%{count} utilisateurs)","name_count_users_ccc93c3d":"%{name} (%{count} utilisateurs)"},"he":{"all_sections_daf11554":"כל ההקבצות"},"ht":{"all_sections_daf11554":"Tout Seksyon","count_sections_466dcd5c":{"one":"1 Seksyon","other":"%{count} Seksyon"},"count_users_374d6e47":"(%{count} Itilizatè)","name_count_users_ccc93c3d":"%{name} (%{count} Itilizatè)"},"hu":{"all_sections_daf11554":"Minden szekció"},"is":{"all_sections_daf11554":"Allir hlutar","count_sections_466dcd5c":{"one":"1 fylki","other":"%{count} Fylki"},"count_users_374d6e47":"(%{count} Notendur)","name_count_users_ccc93c3d":"%{name} (%{count} Notendur)"},"it":{"all_sections_daf11554":"Tutte le sezioni","count_sections_466dcd5c":{"one":"1 sezione","other":"%{count} Sezioni"},"count_users_374d6e47":"(%{count} utenti)","name_count_users_ccc93c3d":"%{name} (%{count} utenti)"},"ja":{"all_sections_daf11554":"すべてのセクション","count_sections_466dcd5c":{"one":"%{count}セクション","other":"%{count}セクション"},"count_users_374d6e47":"(%{count} ユーザー)","name_count_users_ccc93c3d":"%{name}(%{count} ユーザー)"},"mi":{"all_sections_daf11554":"Ngā Wāhanga katoa","count_sections_466dcd5c":{"one":"1 Wāhanga","other":"%{count} Ngā Wāhanga"},"count_users_374d6e47":"(%{count} Ngā Kaiwhakamahi)","name_count_users_ccc93c3d":"%{name} (%{count} Ngā Kaiwhakamahi)"},"nb":{"all_sections_daf11554":"Alle seksjoner","count_sections_466dcd5c":{"one":"1 seksjon","other":"%{count} Seksjoner"},"count_users_374d6e47":"(%{count} Brukere)","name_count_users_ccc93c3d":"%{name} (%{count} Brukere)"},"nb-x-k12":{"all_sections_daf11554":"Alle seksjoner","count_sections_466dcd5c":{"one":"1 seksjon","other":"%{count} Seksjoner"},"count_users_374d6e47":"(%{count} Brukere)","name_count_users_ccc93c3d":"%{name} (%{count} Brukere)"},"nl":{"all_sections_daf11554":"Alle secties","count_sections_466dcd5c":{"one":"1 sectie","other":"%{count} Secties"},"count_users_374d6e47":"(%{count} gebruikers)","name_count_users_ccc93c3d":"%{name} (%{count} gebruikers)"},"nn":{"all_sections_daf11554":"Alle seksjonar","count_sections_466dcd5c":{"one":"1 seksjon","other":"%{count} seksjonar"},"count_users_374d6e47":"(%{count} brukarar)","name_count_users_ccc93c3d":"%{name} (%{count} brukarar)"},"pl":{"all_sections_daf11554":"Wszystkie sekcje","count_sections_466dcd5c":{"one":"1 sekcja","other":"%{count} Sekcje"},"count_users_374d6e47":"(użytkowników: %{count})","name_count_users_ccc93c3d":"%{name} (użytkowników: %{count})"},"pt":{"all_sections_daf11554":"Todas as seções","count_sections_466dcd5c":{"one":"1 Seção","other":"%{count} Seções"},"count_users_374d6e47":"(%{count} Utilizadores)","name_count_users_ccc93c3d":"%{name} (%{count} Utilizadores)"},"pt-BR":{"all_sections_daf11554":"Todas as seções","count_sections_466dcd5c":{"one":"1 Seção","other":"%{count} Seções"},"count_users_374d6e47":"(%{count} Usuários)","name_count_users_ccc93c3d":"%{name} (%{count} Usuários)"},"ru":{"all_sections_daf11554":"Все разделы","count_sections_466dcd5c":{"one":"1 раздел","other":"%{count} Разделы"},"count_users_374d6e47":"(%{count} пользователей/пользователя)","name_count_users_ccc93c3d":"%{name} (%{count} пользователей/пользователя)"},"sl":{"all_sections_daf11554":"Vse sekcije","count_sections_466dcd5c":{"one":"1 sekcija","other":"%{count} sekcij"},"count_users_374d6e47":"(%{count} uporabnikov)","name_count_users_ccc93c3d":"%{name} (%{count} uporabnikov)"},"sv":{"all_sections_daf11554":"Alla sektioner","count_sections_466dcd5c":{"one":"1 avsnitt","other":"%{count} Sektioner"},"count_users_374d6e47":"(%{count} Användare)","name_count_users_ccc93c3d":"%{name} (%{count} Användare)"},"sv-x-k12":{"all_sections_daf11554":"Alla sektioner","count_sections_466dcd5c":{"one":"1 avsnitt","other":"%{count} Sektioner"},"count_users_374d6e47":"(%{count} Användare)","name_count_users_ccc93c3d":"%{name} (%{count} Användare)"},"tr":{"all_sections_daf11554":"Tüm Bölümler","count_users_374d6e47":"(%{count} Kullanıcı)"},"uk":{"all_sections_daf11554":"Всі розділи","count_users_374d6e47":"(%{count} Users)","name_count_users_ccc93c3d":"%{name} (%{count} Користувачів)"},"zh-Hans":{"all_sections_daf11554":"所有班级","count_sections_466dcd5c":{"one":"%{count}会话","other":"%{count}会话"},"count_users_374d6e47":"（%{count} 个用户）","name_count_users_ccc93c3d":"%{name}（%{count} 个用户）"},"zh-Hant":{"all_sections_daf11554":"所有班別","count_sections_466dcd5c":{"one":"%{count}分班","other":"%{count}分班"},"count_users_374d6e47":"（%{count} 使用者）","name_count_users_ccc93c3d":"%{name}（%{count} 使用者）"}}'))
r("jQeR")
r("0sPK")
var c=d["default"].scoped("sections_tooltip")
r.d(t,"a",function(){return u})
function u(e){let t=e.sections,r=e.totalUserCount
let d=""
const l=t||[]
let u=""
if(t){d=t.map(e=>Object(s["a"])(o["a"],{as:"div",margin:"xx-small"},e.id,Object(s["a"])(i["a"],{size:"small"},void 0,c.t("%{name} (%{count} Users)",{name:e.name,count:e.user_count}))))
u=c.t({one:"1 Section",other:"%{count} Sections"},{count:t?t.length:0})}else{d=Object(s["a"])(o["a"],{as:"div",margin:"xx-small"},void 0,Object(s["a"])(i["a"],{size:"small"},void 0,c.t("(%{count} Users)",{count:r})))
u=c.t("All Sections")}return Object(s["a"])("span",{className:"ic-section-tooltip"},void 0,Object(s["a"])(a["a"],{tip:d,placement:"bottom"},void 0,Object(s["a"])(n["a"],{variant:"link",theme:{mediumPadding:"0",mediumHeight:"1.5rem"}},void 0,Object(s["a"])(i["a"],{size:"small"},void 0,u,l.map(e=>Object(s["a"])(_["a"],{},e.id,e.name))))))}u.defaultProps={sections:null,totalUserCount:0}},dTie:function(e,t,r){"use strict"
var s=r("An8g")
var a=r("Ff2n")
var i=r("q1tI")
var n=r.n(i)
r("17x9")
var o=r("Mmr1")
var _=r("gSD+")
var d=r("pQTu")
var l=r("m0r6")
Object(l["a"])(JSON.parse('{"ar":{"close_d634289d":"إغلاق"},"cy":{"close_d634289d":"Cau"},"da":{"close_d634289d":"Luk"},"da-x-k12":{"close_d634289d":"Luk"},"de":{"close_d634289d":"Schließen"},"el":{"close_d634289d":"Κλείσιμο"},"en-AU":{"close_d634289d":"Close"},"en-CA":{"close_d634289d":"Close"},"en-GB":{"close_d634289d":"Close"},"es":{"close_d634289d":"Cerrar"},"fa":{"close_d634289d":"بستن"},"fi":{"close_d634289d":"Sulje"},"fr":{"close_d634289d":"Fermer"},"fr-CA":{"close_d634289d":"Fermer"},"he":{"close_d634289d":"סגירה"},"ht":{"close_d634289d":"Fèmen"},"hu":{"close_d634289d":"Bezárás"},"hy":{"close_d634289d":"Փակել"},"is":{"close_d634289d":"Loka"},"it":{"close_d634289d":"Chiudi"},"ja":{"close_d634289d":"閉じる"},"ko":{"close_d634289d":"닫기"},"mi":{"close_d634289d":"Katia"},"nb":{"close_d634289d":"Lukk"},"nb-x-k12":{"close_d634289d":"Lukk"},"nl":{"close_d634289d":"Sluiten"},"nn":{"close_d634289d":"Lukk"},"pl":{"close_d634289d":"Zamknij"},"pt":{"close_d634289d":"Fechar"},"pt-BR":{"close_d634289d":"Fechar"},"ru":{"close_d634289d":"Закрыть"},"sl":{"close_d634289d":"Zapri"},"sv":{"close_d634289d":"Stäng"},"sv-x-k12":{"close_d634289d":"Stäng"},"tr":{"close_d634289d":"Kapat"},"uk":{"close_d634289d":"Закрити"},"zh-Hans":{"close_d634289d":"关闭"},"zh-Hant":{"close_d634289d":"關閉"}}'))
r("jQeR")
r("0sPK")
var c=d["default"].scoped("modal")
var u=r("98st")
r.d(t,"a",function(){return h})
function p(){return document.getElementById("flash_screenreader_holder")}function h(e){let t=e.label,r=e.closeButtonLabel,i=e.onDismiss,d=e.children,l=Object(a["a"])(e,["label","closeButtonLabel","onDismiss","children"])
return n.a.createElement(u["a"],Object.assign({liveRegion:p},l,{label:t,onDismiss:i}),Object(s["a"])(u["a"].Header,{},void 0,Object(s["a"])(o["a"],{placement:"end",offset:"medium",onClick:i},void 0,r||c.t("Close")),Object(s["a"])(_["a"],{},void 0,t)),d)}["Header","Body","Footer"].forEach(e=>h[e]=u["a"][e])
h.defaultProps={closeButtonLabel:void 0}},etQE:function(e,t,r){"use strict"
r.d(t,"e",function(){return s})
r.d(t,"a",function(){return a})
r.d(t,"b",function(){return i})
r.d(t,"c",function(){return n})
r.d(t,"d",function(){return _})
function s(e){return window.prefetched_xhrs&&window.prefetched_xhrs[e]}function a(e){if(!e)return
return e.then(o).then(e=>e.json().then(t=>({data:t,headers:{link:e.headers.get("Link")}})))}function i(e){if(!e)return
return e.then(o).then(e=>e.json())}function n(e){if(!e)return
return e.then(o).then(e=>e.text())}function o(e){if(e.status<400)return e
{const t=new Error(e.statusText)
t.response=e
throw t}}const _={credentials:"same-origin",headers:{Accept:"application/json+canvas-string-ids, application/json"}}},"gSD+":function(e,t,r){"use strict"
var s=r("rePB")
var a=r("1OyB")
var i=r("vuIU")
var n=r("md7G")
var o=r("foSv")
var _=r("Ji7U")
var d=r("q1tI")
var l=r.n(d)
var c=r("17x9")
var u=r.n(c)
var p=r("TSYQ")
var h=r.n(p)
var m=r("n12J")
var g=r("J2CL")
function f(e,t,r){if("input"===e.as){if("children"===t&&e.children||void 0==e.value)return new Error("Prop `value` and not `children` must be supplied if `".concat(r,' as="input"`'))}else{if("value"===t&&void 0!=e.value)return new Error("Prop `children` and not `value` must be supplied unless `".concat(r,' as="input"`'))
if(!e.children)return new Error("Prop `children` should be supplied unless `".concat(r,' as="input"`.'))}return}var y=r("KgFQ")
var v=r("jtGx")
var b=r("oXx0")
function k(e){var t=e.borders,r=e.colors,s=e.spacing,a=e.typography
return{fontFamily:a.fontFamily,fontWeight:a.fontWeightNormal,lineHeight:a.lineHeightFit,h1FontSize:a.fontSizeXXLarge,h1FontWeight:a.fontWeightLight,h2FontSize:a.fontSizeXLarge,h2FontWeight:a.fontWeightNormal,h3FontSize:a.fontSizeLarge,h3FontWeight:a.fontWeightBold,h4FontSize:a.fontSizeMedium,h4FontWeight:a.fontWeightBold,h5FontSize:a.fontSizeSmall,h5FontWeight:a.fontWeightNormal,primaryInverseColor:r.textLightest,primaryColor:r.textDarkest,secondaryColor:r.textDark,secondaryInverseColor:r.textLight,brandColor:r.textBrand,warningColor:r.textWarning,errorColor:r.textDanger,successColor:r.textSuccess,borderPadding:s.xxxSmall,borderColor:r.borderMedium,borderWidth:t.widthSmall,borderStyle:t.style}}k.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}
r.d(t,"a",function(){return C})
var w,S,E,A,x
var R={componentId:"emyav",template:function(e){return"\n\n.emyav_bGBk{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:".concat(e.fontFamily||"inherit",";line-height:").concat(e.lineHeight||"inherit",";margin:0;text-rendering:optimizeLegibility}\n\ninput.emyav_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:-6px 0 0 0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.emyav_bGBk[type]{text-align:left}\n\n[dir=rtl] input.emyav_bGBk[type]{text-align:right}\n\ninput.emyav_bGBk[type]:focus{outline:none}\n\n.emyav_fIqS{font-size:").concat(e.h1FontSize||"inherit",";font-weight:").concat(e.h1FontWeight||"inherit","}\n\n.emyav_eABG{font-size:").concat(e.h2FontSize||"inherit",";font-weight:").concat(e.h2FontWeight||"inherit","}\n\n.emyav_dlZd{font-size:").concat(e.h3FontSize||"inherit",";font-weight:").concat(e.h3FontWeight||"inherit","}\n\n.emyav_bAmB{font-size:").concat(e.h4FontSize||"inherit",";font-weight:").concat(e.h4FontWeight||"inherit","}\n\n.emyav_eRZv{font-size:").concat(e.h5FontSize||"inherit",";font-weight:").concat(e.h5FontWeight||"inherit","}\n\n.emyav_dTMd{border-top:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-top:").concat(e.borderPadding||"inherit","}\n\n.emyav_evMo{border-bottom:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-bottom:").concat(e.borderPadding||"inherit","}\n\n.emyav_fAVi{color:inherit}\n\n.emyav_qFsi{color:").concat(e.primaryColor||"inherit","}\n\n.emyav_bLsb{color:").concat(e.secondaryColor||"inherit","}\n\n.emyav_ezBQ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.emyav_dlnd{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.emyav_ZpoW{font-size:inherit;font-weight:inherit;line-height:inherit;margin:0}\n\n.emyav_bOQC{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}")},root:"emyav_bGBk",h1:"emyav_fIqS",h2:"emyav_eABG",h3:"emyav_dlZd",h4:"emyav_bAmB",h5:"emyav_eRZv","border-top":"emyav_dTMd","border-bottom":"emyav_evMo","color-inherit":"emyav_fAVi","color-primary":"emyav_qFsi","color-secondary":"emyav_bLsb","color-primary-inverse":"emyav_ezBQ","color-secondary-inverse":"emyav_dlnd",reset:"emyav_ZpoW",ellipsis:"emyav_bOQC"}
var C=(w=Object(b["a"])(),S=Object(g["i"])(k,R),w(E=S(E=(x=A=function(e){Object(_["a"])(t,e)
function t(){Object(a["a"])(this,t)
return Object(n["a"])(this,Object(o["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){var e
var r=this.props,a=r.border,i=r.children,n=r.color,o=r.level,_=r.ellipsis,d=r.margin,c=r.elementRef
var u=Object(y["a"])(t,this.props,function(){return"reset"===o?"span":o})
var p=m["a"].omitViewProps(Object(v["a"])(this.props,t.propTypes),t)
return l.a.createElement(m["a"],Object.assign({},p,{className:h()((e={},Object(s["a"])(e,R.root,true),Object(s["a"])(e,R[o],true),Object(s["a"])(e,R["color-".concat(n)],n),Object(s["a"])(e,R["border-".concat(a)],"none"!==a),Object(s["a"])(e,R.ellipsis,_),e)),as:u,margin:d,elementRef:c,__dangerouslyIgnoreExperimentalWarnings:true}),i)}}])
t.displayName="Heading"
return t}(d["Component"]),A.propTypes={border:u.a.oneOf(["none","top","bottom"]),children:f,color:u.a.oneOf(["primary","secondary","primary-inverse","secondary-inverse","inherit"]),level:u.a.oneOf(["h1","h2","h3","h4","h5","reset"]),as:u.a.elementType,ellipsis:u.a.bool,margin:g["c"].spacing,elementRef:u.a.func},A.defaultProps={children:null,margin:void 0,elementRef:void 0,border:"none",color:"inherit",level:"h2",ellipsis:false},x))||E)||E)},l8Bj:function(e,t,r){"use strict"
var s=r("ouhR")
var a=r.n(s)
a.a.fn.scrollIntoView=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const t=e.container||this.offsetParent()
const r=t.scrollTop()
const s=r+t.height()
let i=this[0].offsetTop
let n=i+a()(this[0]).outerHeight()
if(e.ignore&&e.ignore.border){i+=parseInt(a()(this[0]).css("border-top-width").replace("px",""))
n-=parseInt(a()(this[0]).css("border-bottom-width").replace("px",""))}if(i<r||e.toTop)return t.scrollTop(i)
if(n>s)return t.scrollTop(n-t.height())}},teYS:function(e,t,r){const s=r("ouhR")
var a,i,n,o=s({})
s.subscribe=a=function(e,t){if(s.isPlainObject(e))return s.each(e,function(e,t){a(e,t)})
function r(){return t.apply(this,Array.prototype.slice.call(arguments,1))}r.guid=t.guid=t.guid||s.guid++
o.bind(e,r)}
s.unsubscribe=i=function(){o.unbind.apply(o,arguments)}
s.publish=n=function(){o.trigger.apply(o,arguments)}
e.exports={subscribe:a,unsubscribe:i,publish:n}},w8vW:function(e,t,r){"use strict"
r.d(t,"a",function(){return s})
function s(e,t){for(let r=0;r<e.length;r++){const s=e[r]
if(s===t){e.splice(r,1)
break}}return e}}}])
