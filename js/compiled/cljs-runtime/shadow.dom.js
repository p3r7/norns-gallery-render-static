goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_51297 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_51297(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_51299 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_51299(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__50064 = coll;
var G__50065 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__50064,G__50065) : shadow.dom.lazy_native_coll_seq.call(null,G__50064,G__50065));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__50113 = arguments.length;
switch (G__50113) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__50128 = arguments.length;
switch (G__50128) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__50138 = arguments.length;
switch (G__50138) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__50148 = arguments.length;
switch (G__50148) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__50191 = arguments.length;
switch (G__50191) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__50231 = arguments.length;
switch (G__50231) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e50255){if((e50255 instanceof Object)){
var e = e50255;
return console.log("didnt support attachEvent",el,e);
} else {
throw e50255;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__50282 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__50283 = null;
var count__50284 = (0);
var i__50285 = (0);
while(true){
if((i__50285 < count__50284)){
var el = chunk__50283.cljs$core$IIndexed$_nth$arity$2(null,i__50285);
var handler_51344__$1 = ((function (seq__50282,chunk__50283,count__50284,i__50285,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50282,chunk__50283,count__50284,i__50285,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_51344__$1);


var G__51347 = seq__50282;
var G__51348 = chunk__50283;
var G__51349 = count__50284;
var G__51350 = (i__50285 + (1));
seq__50282 = G__51347;
chunk__50283 = G__51348;
count__50284 = G__51349;
i__50285 = G__51350;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50282);
if(temp__5735__auto__){
var seq__50282__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50282__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50282__$1);
var G__51352 = cljs.core.chunk_rest(seq__50282__$1);
var G__51353 = c__4556__auto__;
var G__51354 = cljs.core.count(c__4556__auto__);
var G__51355 = (0);
seq__50282 = G__51352;
chunk__50283 = G__51353;
count__50284 = G__51354;
i__50285 = G__51355;
continue;
} else {
var el = cljs.core.first(seq__50282__$1);
var handler_51356__$1 = ((function (seq__50282,chunk__50283,count__50284,i__50285,el,seq__50282__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50282,chunk__50283,count__50284,i__50285,el,seq__50282__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_51356__$1);


var G__51359 = cljs.core.next(seq__50282__$1);
var G__51360 = null;
var G__51361 = (0);
var G__51362 = (0);
seq__50282 = G__51359;
chunk__50283 = G__51360;
count__50284 = G__51361;
i__50285 = G__51362;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__50332 = arguments.length;
switch (G__50332) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__50353 = cljs.core.seq(events);
var chunk__50354 = null;
var count__50355 = (0);
var i__50356 = (0);
while(true){
if((i__50356 < count__50355)){
var vec__50377 = chunk__50354.cljs$core$IIndexed$_nth$arity$2(null,i__50356);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50377,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50377,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51370 = seq__50353;
var G__51371 = chunk__50354;
var G__51372 = count__50355;
var G__51373 = (i__50356 + (1));
seq__50353 = G__51370;
chunk__50354 = G__51371;
count__50355 = G__51372;
i__50356 = G__51373;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50353);
if(temp__5735__auto__){
var seq__50353__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50353__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50353__$1);
var G__51375 = cljs.core.chunk_rest(seq__50353__$1);
var G__51376 = c__4556__auto__;
var G__51377 = cljs.core.count(c__4556__auto__);
var G__51378 = (0);
seq__50353 = G__51375;
chunk__50354 = G__51376;
count__50355 = G__51377;
i__50356 = G__51378;
continue;
} else {
var vec__50392 = cljs.core.first(seq__50353__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50392,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50392,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51381 = cljs.core.next(seq__50353__$1);
var G__51382 = null;
var G__51383 = (0);
var G__51384 = (0);
seq__50353 = G__51381;
chunk__50354 = G__51382;
count__50355 = G__51383;
i__50356 = G__51384;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__50405 = cljs.core.seq(styles);
var chunk__50406 = null;
var count__50407 = (0);
var i__50408 = (0);
while(true){
if((i__50408 < count__50407)){
var vec__50427 = chunk__50406.cljs$core$IIndexed$_nth$arity$2(null,i__50408);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50427,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50427,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__51389 = seq__50405;
var G__51390 = chunk__50406;
var G__51391 = count__50407;
var G__51392 = (i__50408 + (1));
seq__50405 = G__51389;
chunk__50406 = G__51390;
count__50407 = G__51391;
i__50408 = G__51392;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50405);
if(temp__5735__auto__){
var seq__50405__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50405__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50405__$1);
var G__51394 = cljs.core.chunk_rest(seq__50405__$1);
var G__51395 = c__4556__auto__;
var G__51396 = cljs.core.count(c__4556__auto__);
var G__51397 = (0);
seq__50405 = G__51394;
chunk__50406 = G__51395;
count__50407 = G__51396;
i__50408 = G__51397;
continue;
} else {
var vec__50433 = cljs.core.first(seq__50405__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50433,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50433,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__51398 = cljs.core.next(seq__50405__$1);
var G__51399 = null;
var G__51400 = (0);
var G__51401 = (0);
seq__50405 = G__51398;
chunk__50406 = G__51399;
count__50407 = G__51400;
i__50408 = G__51401;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__50444_51404 = key;
var G__50444_51405__$1 = (((G__50444_51404 instanceof cljs.core.Keyword))?G__50444_51404.fqn:null);
switch (G__50444_51405__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_51412 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_51412,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_51412,"aria-");
}
})())){
el.setAttribute(ks_51412,value);
} else {
(el[ks_51412] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__50471){
var map__50472 = p__50471;
var map__50472__$1 = (((((!((map__50472 == null))))?(((((map__50472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50472):map__50472);
var props = map__50472__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50472__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__50477 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50477,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50477,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50477,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__50480 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__50480,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__50480;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__50484 = arguments.length;
switch (G__50484) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__50491){
var vec__50493 = p__50491;
var seq__50494 = cljs.core.seq(vec__50493);
var first__50495 = cljs.core.first(seq__50494);
var seq__50494__$1 = cljs.core.next(seq__50494);
var nn = first__50495;
var first__50495__$1 = cljs.core.first(seq__50494__$1);
var seq__50494__$2 = cljs.core.next(seq__50494__$1);
var np = first__50495__$1;
var nc = seq__50494__$2;
var node = vec__50493;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50497 = nn;
var G__50498 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__50497,G__50498) : create_fn.call(null,G__50497,G__50498));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50502 = nn;
var G__50503 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__50502,G__50503) : create_fn.call(null,G__50502,G__50503));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__50506 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50506,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50506,(1),null);
var seq__50509_51444 = cljs.core.seq(node_children);
var chunk__50510_51445 = null;
var count__50511_51446 = (0);
var i__50512_51448 = (0);
while(true){
if((i__50512_51448 < count__50511_51446)){
var child_struct_51449 = chunk__50510_51445.cljs$core$IIndexed$_nth$arity$2(null,i__50512_51448);
var children_51452 = shadow.dom.dom_node(child_struct_51449);
if(cljs.core.seq_QMARK_(children_51452)){
var seq__50564_51455 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51452));
var chunk__50566_51456 = null;
var count__50567_51457 = (0);
var i__50568_51458 = (0);
while(true){
if((i__50568_51458 < count__50567_51457)){
var child_51463 = chunk__50566_51456.cljs$core$IIndexed$_nth$arity$2(null,i__50568_51458);
if(cljs.core.truth_(child_51463)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51463);


var G__51464 = seq__50564_51455;
var G__51465 = chunk__50566_51456;
var G__51466 = count__50567_51457;
var G__51467 = (i__50568_51458 + (1));
seq__50564_51455 = G__51464;
chunk__50566_51456 = G__51465;
count__50567_51457 = G__51466;
i__50568_51458 = G__51467;
continue;
} else {
var G__51473 = seq__50564_51455;
var G__51474 = chunk__50566_51456;
var G__51475 = count__50567_51457;
var G__51476 = (i__50568_51458 + (1));
seq__50564_51455 = G__51473;
chunk__50566_51456 = G__51474;
count__50567_51457 = G__51475;
i__50568_51458 = G__51476;
continue;
}
} else {
var temp__5735__auto___51480 = cljs.core.seq(seq__50564_51455);
if(temp__5735__auto___51480){
var seq__50564_51481__$1 = temp__5735__auto___51480;
if(cljs.core.chunked_seq_QMARK_(seq__50564_51481__$1)){
var c__4556__auto___51485 = cljs.core.chunk_first(seq__50564_51481__$1);
var G__51488 = cljs.core.chunk_rest(seq__50564_51481__$1);
var G__51489 = c__4556__auto___51485;
var G__51490 = cljs.core.count(c__4556__auto___51485);
var G__51491 = (0);
seq__50564_51455 = G__51488;
chunk__50566_51456 = G__51489;
count__50567_51457 = G__51490;
i__50568_51458 = G__51491;
continue;
} else {
var child_51497 = cljs.core.first(seq__50564_51481__$1);
if(cljs.core.truth_(child_51497)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51497);


var G__51501 = cljs.core.next(seq__50564_51481__$1);
var G__51502 = null;
var G__51503 = (0);
var G__51504 = (0);
seq__50564_51455 = G__51501;
chunk__50566_51456 = G__51502;
count__50567_51457 = G__51503;
i__50568_51458 = G__51504;
continue;
} else {
var G__51508 = cljs.core.next(seq__50564_51481__$1);
var G__51509 = null;
var G__51510 = (0);
var G__51511 = (0);
seq__50564_51455 = G__51508;
chunk__50566_51456 = G__51509;
count__50567_51457 = G__51510;
i__50568_51458 = G__51511;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51452);
}


var G__51513 = seq__50509_51444;
var G__51514 = chunk__50510_51445;
var G__51515 = count__50511_51446;
var G__51516 = (i__50512_51448 + (1));
seq__50509_51444 = G__51513;
chunk__50510_51445 = G__51514;
count__50511_51446 = G__51515;
i__50512_51448 = G__51516;
continue;
} else {
var temp__5735__auto___51518 = cljs.core.seq(seq__50509_51444);
if(temp__5735__auto___51518){
var seq__50509_51520__$1 = temp__5735__auto___51518;
if(cljs.core.chunked_seq_QMARK_(seq__50509_51520__$1)){
var c__4556__auto___51521 = cljs.core.chunk_first(seq__50509_51520__$1);
var G__51523 = cljs.core.chunk_rest(seq__50509_51520__$1);
var G__51524 = c__4556__auto___51521;
var G__51525 = cljs.core.count(c__4556__auto___51521);
var G__51526 = (0);
seq__50509_51444 = G__51523;
chunk__50510_51445 = G__51524;
count__50511_51446 = G__51525;
i__50512_51448 = G__51526;
continue;
} else {
var child_struct_51530 = cljs.core.first(seq__50509_51520__$1);
var children_51531 = shadow.dom.dom_node(child_struct_51530);
if(cljs.core.seq_QMARK_(children_51531)){
var seq__50586_51534 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51531));
var chunk__50588_51535 = null;
var count__50589_51536 = (0);
var i__50590_51537 = (0);
while(true){
if((i__50590_51537 < count__50589_51536)){
var child_51538 = chunk__50588_51535.cljs$core$IIndexed$_nth$arity$2(null,i__50590_51537);
if(cljs.core.truth_(child_51538)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51538);


var G__51544 = seq__50586_51534;
var G__51545 = chunk__50588_51535;
var G__51546 = count__50589_51536;
var G__51547 = (i__50590_51537 + (1));
seq__50586_51534 = G__51544;
chunk__50588_51535 = G__51545;
count__50589_51536 = G__51546;
i__50590_51537 = G__51547;
continue;
} else {
var G__51549 = seq__50586_51534;
var G__51550 = chunk__50588_51535;
var G__51551 = count__50589_51536;
var G__51552 = (i__50590_51537 + (1));
seq__50586_51534 = G__51549;
chunk__50588_51535 = G__51550;
count__50589_51536 = G__51551;
i__50590_51537 = G__51552;
continue;
}
} else {
var temp__5735__auto___51556__$1 = cljs.core.seq(seq__50586_51534);
if(temp__5735__auto___51556__$1){
var seq__50586_51558__$1 = temp__5735__auto___51556__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50586_51558__$1)){
var c__4556__auto___51559 = cljs.core.chunk_first(seq__50586_51558__$1);
var G__51563 = cljs.core.chunk_rest(seq__50586_51558__$1);
var G__51564 = c__4556__auto___51559;
var G__51565 = cljs.core.count(c__4556__auto___51559);
var G__51566 = (0);
seq__50586_51534 = G__51563;
chunk__50588_51535 = G__51564;
count__50589_51536 = G__51565;
i__50590_51537 = G__51566;
continue;
} else {
var child_51567 = cljs.core.first(seq__50586_51558__$1);
if(cljs.core.truth_(child_51567)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51567);


var G__51568 = cljs.core.next(seq__50586_51558__$1);
var G__51569 = null;
var G__51570 = (0);
var G__51571 = (0);
seq__50586_51534 = G__51568;
chunk__50588_51535 = G__51569;
count__50589_51536 = G__51570;
i__50590_51537 = G__51571;
continue;
} else {
var G__51572 = cljs.core.next(seq__50586_51558__$1);
var G__51573 = null;
var G__51574 = (0);
var G__51575 = (0);
seq__50586_51534 = G__51572;
chunk__50588_51535 = G__51573;
count__50589_51536 = G__51574;
i__50590_51537 = G__51575;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51531);
}


var G__51576 = cljs.core.next(seq__50509_51520__$1);
var G__51577 = null;
var G__51578 = (0);
var G__51579 = (0);
seq__50509_51444 = G__51576;
chunk__50510_51445 = G__51577;
count__50511_51446 = G__51578;
i__50512_51448 = G__51579;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__50643 = cljs.core.seq(node);
var chunk__50644 = null;
var count__50645 = (0);
var i__50646 = (0);
while(true){
if((i__50646 < count__50645)){
var n = chunk__50644.cljs$core$IIndexed$_nth$arity$2(null,i__50646);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__51612 = seq__50643;
var G__51613 = chunk__50644;
var G__51614 = count__50645;
var G__51615 = (i__50646 + (1));
seq__50643 = G__51612;
chunk__50644 = G__51613;
count__50645 = G__51614;
i__50646 = G__51615;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50643);
if(temp__5735__auto__){
var seq__50643__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50643__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50643__$1);
var G__51620 = cljs.core.chunk_rest(seq__50643__$1);
var G__51621 = c__4556__auto__;
var G__51622 = cljs.core.count(c__4556__auto__);
var G__51623 = (0);
seq__50643 = G__51620;
chunk__50644 = G__51621;
count__50645 = G__51622;
i__50646 = G__51623;
continue;
} else {
var n = cljs.core.first(seq__50643__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__51632 = cljs.core.next(seq__50643__$1);
var G__51633 = null;
var G__51634 = (0);
var G__51635 = (0);
seq__50643 = G__51632;
chunk__50644 = G__51633;
count__50645 = G__51634;
i__50646 = G__51635;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__50664 = arguments.length;
switch (G__50664) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__50670 = arguments.length;
switch (G__50670) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__50704 = arguments.length;
switch (G__50704) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51680 = arguments.length;
var i__4737__auto___51681 = (0);
while(true){
if((i__4737__auto___51681 < len__4736__auto___51680)){
args__4742__auto__.push((arguments[i__4737__auto___51681]));

var G__51683 = (i__4737__auto___51681 + (1));
i__4737__auto___51681 = G__51683;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__50752_51687 = cljs.core.seq(nodes);
var chunk__50753_51688 = null;
var count__50754_51689 = (0);
var i__50755_51690 = (0);
while(true){
if((i__50755_51690 < count__50754_51689)){
var node_51691 = chunk__50753_51688.cljs$core$IIndexed$_nth$arity$2(null,i__50755_51690);
fragment.appendChild(shadow.dom._to_dom(node_51691));


var G__51693 = seq__50752_51687;
var G__51694 = chunk__50753_51688;
var G__51695 = count__50754_51689;
var G__51696 = (i__50755_51690 + (1));
seq__50752_51687 = G__51693;
chunk__50753_51688 = G__51694;
count__50754_51689 = G__51695;
i__50755_51690 = G__51696;
continue;
} else {
var temp__5735__auto___51700 = cljs.core.seq(seq__50752_51687);
if(temp__5735__auto___51700){
var seq__50752_51701__$1 = temp__5735__auto___51700;
if(cljs.core.chunked_seq_QMARK_(seq__50752_51701__$1)){
var c__4556__auto___51704 = cljs.core.chunk_first(seq__50752_51701__$1);
var G__51709 = cljs.core.chunk_rest(seq__50752_51701__$1);
var G__51710 = c__4556__auto___51704;
var G__51711 = cljs.core.count(c__4556__auto___51704);
var G__51712 = (0);
seq__50752_51687 = G__51709;
chunk__50753_51688 = G__51710;
count__50754_51689 = G__51711;
i__50755_51690 = G__51712;
continue;
} else {
var node_51717 = cljs.core.first(seq__50752_51701__$1);
fragment.appendChild(shadow.dom._to_dom(node_51717));


var G__51719 = cljs.core.next(seq__50752_51701__$1);
var G__51720 = null;
var G__51721 = (0);
var G__51722 = (0);
seq__50752_51687 = G__51719;
chunk__50753_51688 = G__51720;
count__50754_51689 = G__51721;
i__50755_51690 = G__51722;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq50747){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50747));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__50764_51726 = cljs.core.seq(scripts);
var chunk__50765_51727 = null;
var count__50766_51728 = (0);
var i__50767_51729 = (0);
while(true){
if((i__50767_51729 < count__50766_51728)){
var vec__50782_51731 = chunk__50765_51727.cljs$core$IIndexed$_nth$arity$2(null,i__50767_51729);
var script_tag_51732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50782_51731,(0),null);
var script_body_51733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50782_51731,(1),null);
eval(script_body_51733);


var G__51737 = seq__50764_51726;
var G__51738 = chunk__50765_51727;
var G__51739 = count__50766_51728;
var G__51740 = (i__50767_51729 + (1));
seq__50764_51726 = G__51737;
chunk__50765_51727 = G__51738;
count__50766_51728 = G__51739;
i__50767_51729 = G__51740;
continue;
} else {
var temp__5735__auto___51741 = cljs.core.seq(seq__50764_51726);
if(temp__5735__auto___51741){
var seq__50764_51742__$1 = temp__5735__auto___51741;
if(cljs.core.chunked_seq_QMARK_(seq__50764_51742__$1)){
var c__4556__auto___51746 = cljs.core.chunk_first(seq__50764_51742__$1);
var G__51748 = cljs.core.chunk_rest(seq__50764_51742__$1);
var G__51749 = c__4556__auto___51746;
var G__51750 = cljs.core.count(c__4556__auto___51746);
var G__51751 = (0);
seq__50764_51726 = G__51748;
chunk__50765_51727 = G__51749;
count__50766_51728 = G__51750;
i__50767_51729 = G__51751;
continue;
} else {
var vec__50790_51753 = cljs.core.first(seq__50764_51742__$1);
var script_tag_51754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50790_51753,(0),null);
var script_body_51755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50790_51753,(1),null);
eval(script_body_51755);


var G__51767 = cljs.core.next(seq__50764_51742__$1);
var G__51768 = null;
var G__51769 = (0);
var G__51770 = (0);
seq__50764_51726 = G__51767;
chunk__50765_51727 = G__51768;
count__50766_51728 = G__51769;
i__50767_51729 = G__51770;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__50794){
var vec__50796 = p__50794;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50796,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50796,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__50809 = arguments.length;
switch (G__50809) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__50828 = cljs.core.seq(style_keys);
var chunk__50829 = null;
var count__50830 = (0);
var i__50831 = (0);
while(true){
if((i__50831 < count__50830)){
var it = chunk__50829.cljs$core$IIndexed$_nth$arity$2(null,i__50831);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__51790 = seq__50828;
var G__51791 = chunk__50829;
var G__51792 = count__50830;
var G__51793 = (i__50831 + (1));
seq__50828 = G__51790;
chunk__50829 = G__51791;
count__50830 = G__51792;
i__50831 = G__51793;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50828);
if(temp__5735__auto__){
var seq__50828__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50828__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50828__$1);
var G__51794 = cljs.core.chunk_rest(seq__50828__$1);
var G__51795 = c__4556__auto__;
var G__51796 = cljs.core.count(c__4556__auto__);
var G__51797 = (0);
seq__50828 = G__51794;
chunk__50829 = G__51795;
count__50830 = G__51796;
i__50831 = G__51797;
continue;
} else {
var it = cljs.core.first(seq__50828__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__51798 = cljs.core.next(seq__50828__$1);
var G__51799 = null;
var G__51800 = (0);
var G__51801 = (0);
seq__50828 = G__51798;
chunk__50829 = G__51799;
count__50830 = G__51800;
i__50831 = G__51801;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k50843,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__50852 = k50843;
var G__50852__$1 = (((G__50852 instanceof cljs.core.Keyword))?G__50852.fqn:null);
switch (G__50852__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50843,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__50857){
var vec__50858 = p__50857;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50858,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50858,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50842){
var self__ = this;
var G__50842__$1 = this;
return (new cljs.core.RecordIter((0),G__50842__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50844,other50845){
var self__ = this;
var this50844__$1 = this;
return (((!((other50845 == null)))) && ((this50844__$1.constructor === other50845.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50844__$1.x,other50845.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50844__$1.y,other50845.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50844__$1.__extmap,other50845.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__50842){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__50889 = cljs.core.keyword_identical_QMARK_;
var expr__50890 = k__4388__auto__;
if(cljs.core.truth_((pred__50889.cljs$core$IFn$_invoke$arity$2 ? pred__50889.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__50890) : pred__50889.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__50890)))){
return (new shadow.dom.Coordinate(G__50842,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50889.cljs$core$IFn$_invoke$arity$2 ? pred__50889.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__50890) : pred__50889.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__50890)))){
return (new shadow.dom.Coordinate(self__.x,G__50842,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__50842),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__50842){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__50842,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__50847){
var extmap__4419__auto__ = (function (){var G__50898 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50847,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__50847)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50898);
} else {
return G__50898;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__50847),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__50847),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k50903,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__50909 = k50903;
var G__50909__$1 = (((G__50909 instanceof cljs.core.Keyword))?G__50909.fqn:null);
switch (G__50909__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50903,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__50914){
var vec__50915 = p__50914;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50915,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50915,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50902){
var self__ = this;
var G__50902__$1 = this;
return (new cljs.core.RecordIter((0),G__50902__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50904,other50905){
var self__ = this;
var this50904__$1 = this;
return (((!((other50905 == null)))) && ((this50904__$1.constructor === other50905.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50904__$1.w,other50905.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50904__$1.h,other50905.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50904__$1.__extmap,other50905.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__50902){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__50923 = cljs.core.keyword_identical_QMARK_;
var expr__50924 = k__4388__auto__;
if(cljs.core.truth_((pred__50923.cljs$core$IFn$_invoke$arity$2 ? pred__50923.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__50924) : pred__50923.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__50924)))){
return (new shadow.dom.Size(G__50902,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50923.cljs$core$IFn$_invoke$arity$2 ? pred__50923.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__50924) : pred__50923.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__50924)))){
return (new shadow.dom.Size(self__.w,G__50902,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__50902),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__50902){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__50902,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__50908){
var extmap__4419__auto__ = (function (){var G__50931 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50908,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__50908)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50931);
} else {
return G__50931;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__50908),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__50908),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__51885 = (i + (1));
var G__51886 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__51885;
ret = G__51886;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50995){
var vec__50996 = p__50995;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50996,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50996,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__51008 = arguments.length;
switch (G__51008) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__51895 = ps;
var G__51896 = (i + (1));
el__$1 = G__51895;
i = G__51896;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__51061 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51061,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51061,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51061,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__51069_51903 = cljs.core.seq(props);
var chunk__51070_51904 = null;
var count__51071_51905 = (0);
var i__51072_51906 = (0);
while(true){
if((i__51072_51906 < count__51071_51905)){
var vec__51096_51907 = chunk__51070_51904.cljs$core$IIndexed$_nth$arity$2(null,i__51072_51906);
var k_51908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51096_51907,(0),null);
var v_51909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51096_51907,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_51908);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_51908),v_51909);


var G__51914 = seq__51069_51903;
var G__51915 = chunk__51070_51904;
var G__51916 = count__51071_51905;
var G__51917 = (i__51072_51906 + (1));
seq__51069_51903 = G__51914;
chunk__51070_51904 = G__51915;
count__51071_51905 = G__51916;
i__51072_51906 = G__51917;
continue;
} else {
var temp__5735__auto___51918 = cljs.core.seq(seq__51069_51903);
if(temp__5735__auto___51918){
var seq__51069_51919__$1 = temp__5735__auto___51918;
if(cljs.core.chunked_seq_QMARK_(seq__51069_51919__$1)){
var c__4556__auto___51920 = cljs.core.chunk_first(seq__51069_51919__$1);
var G__51921 = cljs.core.chunk_rest(seq__51069_51919__$1);
var G__51922 = c__4556__auto___51920;
var G__51923 = cljs.core.count(c__4556__auto___51920);
var G__51924 = (0);
seq__51069_51903 = G__51921;
chunk__51070_51904 = G__51922;
count__51071_51905 = G__51923;
i__51072_51906 = G__51924;
continue;
} else {
var vec__51103_51925 = cljs.core.first(seq__51069_51919__$1);
var k_51926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51103_51925,(0),null);
var v_51927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51103_51925,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_51926);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_51926),v_51927);


var G__51929 = cljs.core.next(seq__51069_51919__$1);
var G__51930 = null;
var G__51931 = (0);
var G__51932 = (0);
seq__51069_51903 = G__51929;
chunk__51070_51904 = G__51930;
count__51071_51905 = G__51931;
i__51072_51906 = G__51932;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__51121 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51121,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51121,(1),null);
var seq__51125_51944 = cljs.core.seq(node_children);
var chunk__51127_51945 = null;
var count__51128_51946 = (0);
var i__51129_51947 = (0);
while(true){
if((i__51129_51947 < count__51128_51946)){
var child_struct_51948 = chunk__51127_51945.cljs$core$IIndexed$_nth$arity$2(null,i__51129_51947);
if((!((child_struct_51948 == null)))){
if(typeof child_struct_51948 === 'string'){
var text_51949 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_51949),child_struct_51948].join(''));
} else {
var children_51950 = shadow.dom.svg_node(child_struct_51948);
if(cljs.core.seq_QMARK_(children_51950)){
var seq__51185_51951 = cljs.core.seq(children_51950);
var chunk__51187_51952 = null;
var count__51188_51953 = (0);
var i__51189_51954 = (0);
while(true){
if((i__51189_51954 < count__51188_51953)){
var child_51955 = chunk__51187_51952.cljs$core$IIndexed$_nth$arity$2(null,i__51189_51954);
if(cljs.core.truth_(child_51955)){
node.appendChild(child_51955);


var G__51957 = seq__51185_51951;
var G__51958 = chunk__51187_51952;
var G__51959 = count__51188_51953;
var G__51960 = (i__51189_51954 + (1));
seq__51185_51951 = G__51957;
chunk__51187_51952 = G__51958;
count__51188_51953 = G__51959;
i__51189_51954 = G__51960;
continue;
} else {
var G__51961 = seq__51185_51951;
var G__51962 = chunk__51187_51952;
var G__51963 = count__51188_51953;
var G__51964 = (i__51189_51954 + (1));
seq__51185_51951 = G__51961;
chunk__51187_51952 = G__51962;
count__51188_51953 = G__51963;
i__51189_51954 = G__51964;
continue;
}
} else {
var temp__5735__auto___51965 = cljs.core.seq(seq__51185_51951);
if(temp__5735__auto___51965){
var seq__51185_51966__$1 = temp__5735__auto___51965;
if(cljs.core.chunked_seq_QMARK_(seq__51185_51966__$1)){
var c__4556__auto___51967 = cljs.core.chunk_first(seq__51185_51966__$1);
var G__51968 = cljs.core.chunk_rest(seq__51185_51966__$1);
var G__51969 = c__4556__auto___51967;
var G__51970 = cljs.core.count(c__4556__auto___51967);
var G__51971 = (0);
seq__51185_51951 = G__51968;
chunk__51187_51952 = G__51969;
count__51188_51953 = G__51970;
i__51189_51954 = G__51971;
continue;
} else {
var child_51972 = cljs.core.first(seq__51185_51966__$1);
if(cljs.core.truth_(child_51972)){
node.appendChild(child_51972);


var G__51977 = cljs.core.next(seq__51185_51966__$1);
var G__51978 = null;
var G__51979 = (0);
var G__51980 = (0);
seq__51185_51951 = G__51977;
chunk__51187_51952 = G__51978;
count__51188_51953 = G__51979;
i__51189_51954 = G__51980;
continue;
} else {
var G__51981 = cljs.core.next(seq__51185_51966__$1);
var G__51982 = null;
var G__51983 = (0);
var G__51984 = (0);
seq__51185_51951 = G__51981;
chunk__51187_51952 = G__51982;
count__51188_51953 = G__51983;
i__51189_51954 = G__51984;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_51950);
}
}


var G__51986 = seq__51125_51944;
var G__51987 = chunk__51127_51945;
var G__51988 = count__51128_51946;
var G__51989 = (i__51129_51947 + (1));
seq__51125_51944 = G__51986;
chunk__51127_51945 = G__51987;
count__51128_51946 = G__51988;
i__51129_51947 = G__51989;
continue;
} else {
var G__51993 = seq__51125_51944;
var G__51994 = chunk__51127_51945;
var G__51995 = count__51128_51946;
var G__51996 = (i__51129_51947 + (1));
seq__51125_51944 = G__51993;
chunk__51127_51945 = G__51994;
count__51128_51946 = G__51995;
i__51129_51947 = G__51996;
continue;
}
} else {
var temp__5735__auto___51997 = cljs.core.seq(seq__51125_51944);
if(temp__5735__auto___51997){
var seq__51125_51998__$1 = temp__5735__auto___51997;
if(cljs.core.chunked_seq_QMARK_(seq__51125_51998__$1)){
var c__4556__auto___51999 = cljs.core.chunk_first(seq__51125_51998__$1);
var G__52000 = cljs.core.chunk_rest(seq__51125_51998__$1);
var G__52001 = c__4556__auto___51999;
var G__52002 = cljs.core.count(c__4556__auto___51999);
var G__52003 = (0);
seq__51125_51944 = G__52000;
chunk__51127_51945 = G__52001;
count__51128_51946 = G__52002;
i__51129_51947 = G__52003;
continue;
} else {
var child_struct_52004 = cljs.core.first(seq__51125_51998__$1);
if((!((child_struct_52004 == null)))){
if(typeof child_struct_52004 === 'string'){
var text_52005 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_52005),child_struct_52004].join(''));
} else {
var children_52006 = shadow.dom.svg_node(child_struct_52004);
if(cljs.core.seq_QMARK_(children_52006)){
var seq__51213_52007 = cljs.core.seq(children_52006);
var chunk__51215_52008 = null;
var count__51216_52009 = (0);
var i__51217_52010 = (0);
while(true){
if((i__51217_52010 < count__51216_52009)){
var child_52012 = chunk__51215_52008.cljs$core$IIndexed$_nth$arity$2(null,i__51217_52010);
if(cljs.core.truth_(child_52012)){
node.appendChild(child_52012);


var G__52013 = seq__51213_52007;
var G__52014 = chunk__51215_52008;
var G__52015 = count__51216_52009;
var G__52016 = (i__51217_52010 + (1));
seq__51213_52007 = G__52013;
chunk__51215_52008 = G__52014;
count__51216_52009 = G__52015;
i__51217_52010 = G__52016;
continue;
} else {
var G__52017 = seq__51213_52007;
var G__52018 = chunk__51215_52008;
var G__52019 = count__51216_52009;
var G__52020 = (i__51217_52010 + (1));
seq__51213_52007 = G__52017;
chunk__51215_52008 = G__52018;
count__51216_52009 = G__52019;
i__51217_52010 = G__52020;
continue;
}
} else {
var temp__5735__auto___52021__$1 = cljs.core.seq(seq__51213_52007);
if(temp__5735__auto___52021__$1){
var seq__51213_52022__$1 = temp__5735__auto___52021__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51213_52022__$1)){
var c__4556__auto___52024 = cljs.core.chunk_first(seq__51213_52022__$1);
var G__52028 = cljs.core.chunk_rest(seq__51213_52022__$1);
var G__52029 = c__4556__auto___52024;
var G__52030 = cljs.core.count(c__4556__auto___52024);
var G__52031 = (0);
seq__51213_52007 = G__52028;
chunk__51215_52008 = G__52029;
count__51216_52009 = G__52030;
i__51217_52010 = G__52031;
continue;
} else {
var child_52032 = cljs.core.first(seq__51213_52022__$1);
if(cljs.core.truth_(child_52032)){
node.appendChild(child_52032);


var G__52033 = cljs.core.next(seq__51213_52022__$1);
var G__52034 = null;
var G__52035 = (0);
var G__52036 = (0);
seq__51213_52007 = G__52033;
chunk__51215_52008 = G__52034;
count__51216_52009 = G__52035;
i__51217_52010 = G__52036;
continue;
} else {
var G__52037 = cljs.core.next(seq__51213_52022__$1);
var G__52038 = null;
var G__52039 = (0);
var G__52040 = (0);
seq__51213_52007 = G__52037;
chunk__51215_52008 = G__52038;
count__51216_52009 = G__52039;
i__51217_52010 = G__52040;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_52006);
}
}


var G__52041 = cljs.core.next(seq__51125_51998__$1);
var G__52042 = null;
var G__52043 = (0);
var G__52044 = (0);
seq__51125_51944 = G__52041;
chunk__51127_51945 = G__52042;
count__51128_51946 = G__52043;
i__51129_51947 = G__52044;
continue;
} else {
var G__52045 = cljs.core.next(seq__51125_51998__$1);
var G__52046 = null;
var G__52047 = (0);
var G__52048 = (0);
seq__51125_51944 = G__52045;
chunk__51127_51945 = G__52046;
count__51128_51946 = G__52047;
i__51129_51947 = G__52048;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52053 = arguments.length;
var i__4737__auto___52054 = (0);
while(true){
if((i__4737__auto___52054 < len__4736__auto___52053)){
args__4742__auto__.push((arguments[i__4737__auto___52054]));

var G__52055 = (i__4737__auto___52054 + (1));
i__4737__auto___52054 = G__52055;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq51231){
var G__51232 = cljs.core.first(seq51231);
var seq51231__$1 = cljs.core.next(seq51231);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51232,seq51231__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__51237 = arguments.length;
switch (G__51237) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__46468__auto___52063 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46469__auto__ = (function (){var switch__46385__auto__ = (function (state_51255){
var state_val_51256 = (state_51255[(1)]);
if((state_val_51256 === (1))){
var state_51255__$1 = state_51255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51255__$1,(2),once_or_cleanup);
} else {
if((state_val_51256 === (2))){
var inst_51252 = (state_51255[(2)]);
var inst_51253 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_51255__$1 = (function (){var statearr_51268 = state_51255;
(statearr_51268[(7)] = inst_51252);

return statearr_51268;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51255__$1,inst_51253);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__46386__auto__ = null;
var shadow$dom$state_machine__46386__auto____0 = (function (){
var statearr_51269 = [null,null,null,null,null,null,null,null];
(statearr_51269[(0)] = shadow$dom$state_machine__46386__auto__);

(statearr_51269[(1)] = (1));

return statearr_51269;
});
var shadow$dom$state_machine__46386__auto____1 = (function (state_51255){
while(true){
var ret_value__46387__auto__ = (function (){try{while(true){
var result__46388__auto__ = switch__46385__auto__(state_51255);
if(cljs.core.keyword_identical_QMARK_(result__46388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46388__auto__;
}
break;
}
}catch (e51270){var ex__46389__auto__ = e51270;
var statearr_51271_52065 = state_51255;
(statearr_51271_52065[(2)] = ex__46389__auto__);


if(cljs.core.seq((state_51255[(4)]))){
var statearr_51272_52066 = state_51255;
(statearr_51272_52066[(1)] = cljs.core.first((state_51255[(4)])));

} else {
throw ex__46389__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52073 = state_51255;
state_51255 = G__52073;
continue;
} else {
return ret_value__46387__auto__;
}
break;
}
});
shadow$dom$state_machine__46386__auto__ = function(state_51255){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__46386__auto____0.call(this);
case 1:
return shadow$dom$state_machine__46386__auto____1.call(this,state_51255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__46386__auto____0;
shadow$dom$state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__46386__auto____1;
return shadow$dom$state_machine__46386__auto__;
})()
})();
var state__46470__auto__ = (function (){var statearr_51279 = f__46469__auto__();
(statearr_51279[(6)] = c__46468__auto___52063);

return statearr_51279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46470__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
