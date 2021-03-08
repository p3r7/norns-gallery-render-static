goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54063 = arguments.length;
var i__4737__auto___54064 = (0);
while(true){
if((i__4737__auto___54064 < len__4736__auto___54063)){
args__4742__auto__.push((arguments[i__4737__auto___54064]));

var G__54065 = (i__4737__auto___54064 + (1));
i__4737__auto___54064 = G__54065;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq53879){
var G__53880 = cljs.core.first(seq53879);
var seq53879__$1 = cljs.core.next(seq53879);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53880,seq53879__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__53898 = cljs.core.seq(sources);
var chunk__53899 = null;
var count__53900 = (0);
var i__53901 = (0);
while(true){
if((i__53901 < count__53900)){
var map__53925 = chunk__53899.cljs$core$IIndexed$_nth$arity$2(null,i__53901);
var map__53925__$1 = (((((!((map__53925 == null))))?(((((map__53925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53925):map__53925);
var src = map__53925__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53925__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53925__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53925__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53925__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e53928){var e_54066 = e53928;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_54066);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_54066.message)].join('')));
}

var G__54067 = seq__53898;
var G__54068 = chunk__53899;
var G__54069 = count__53900;
var G__54070 = (i__53901 + (1));
seq__53898 = G__54067;
chunk__53899 = G__54068;
count__53900 = G__54069;
i__53901 = G__54070;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53898);
if(temp__5735__auto__){
var seq__53898__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53898__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53898__$1);
var G__54071 = cljs.core.chunk_rest(seq__53898__$1);
var G__54072 = c__4556__auto__;
var G__54073 = cljs.core.count(c__4556__auto__);
var G__54074 = (0);
seq__53898 = G__54071;
chunk__53899 = G__54072;
count__53900 = G__54073;
i__53901 = G__54074;
continue;
} else {
var map__53932 = cljs.core.first(seq__53898__$1);
var map__53932__$1 = (((((!((map__53932 == null))))?(((((map__53932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53932):map__53932);
var src = map__53932__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53932__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53932__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53932__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53932__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e53935){var e_54075 = e53935;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_54075);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_54075.message)].join('')));
}

var G__54076 = cljs.core.next(seq__53898__$1);
var G__54077 = null;
var G__54078 = (0);
var G__54079 = (0);
seq__53898 = G__54076;
chunk__53899 = G__54077;
count__53900 = G__54078;
i__53901 = G__54079;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__53936 = cljs.core.seq(js_requires);
var chunk__53937 = null;
var count__53938 = (0);
var i__53939 = (0);
while(true){
if((i__53939 < count__53938)){
var js_ns = chunk__53937.cljs$core$IIndexed$_nth$arity$2(null,i__53939);
var require_str_54080 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_54080);


var G__54081 = seq__53936;
var G__54082 = chunk__53937;
var G__54083 = count__53938;
var G__54084 = (i__53939 + (1));
seq__53936 = G__54081;
chunk__53937 = G__54082;
count__53938 = G__54083;
i__53939 = G__54084;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53936);
if(temp__5735__auto__){
var seq__53936__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53936__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53936__$1);
var G__54085 = cljs.core.chunk_rest(seq__53936__$1);
var G__54086 = c__4556__auto__;
var G__54087 = cljs.core.count(c__4556__auto__);
var G__54088 = (0);
seq__53936 = G__54085;
chunk__53937 = G__54086;
count__53938 = G__54087;
i__53939 = G__54088;
continue;
} else {
var js_ns = cljs.core.first(seq__53936__$1);
var require_str_54089 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_54089);


var G__54090 = cljs.core.next(seq__53936__$1);
var G__54091 = null;
var G__54092 = (0);
var G__54093 = (0);
seq__53936 = G__54090;
chunk__53937 = G__54091;
count__53938 = G__54092;
i__53939 = G__54093;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__53941){
var map__53942 = p__53941;
var map__53942__$1 = (((((!((map__53942 == null))))?(((((map__53942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53942):map__53942);
var msg = map__53942__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53942__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53942__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53944(s__53945){
return (new cljs.core.LazySeq(null,(function (){
var s__53945__$1 = s__53945;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53945__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__53952 = cljs.core.first(xs__6292__auto__);
var map__53952__$1 = (((((!((map__53952 == null))))?(((((map__53952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53952):map__53952);
var src = map__53952__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53952__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53952__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__53945__$1,map__53952,map__53952__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__53942,map__53942__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53944_$_iter__53946(s__53947){
return (new cljs.core.LazySeq(null,((function (s__53945__$1,map__53952,map__53952__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__53942,map__53942__$1,msg,info,reload_info){
return (function (){
var s__53947__$1 = s__53947;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__53947__$1);
if(temp__5735__auto____$1){
var s__53947__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53947__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__53947__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__53949 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__53948 = (0);
while(true){
if((i__53948 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__53948);
cljs.core.chunk_append(b__53949,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__54094 = (i__53948 + (1));
i__53948 = G__54094;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53949),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53944_$_iter__53946(cljs.core.chunk_rest(s__53947__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53949),null);
}
} else {
var warning = cljs.core.first(s__53947__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53944_$_iter__53946(cljs.core.rest(s__53947__$2)));
}
} else {
return null;
}
break;
}
});})(s__53945__$1,map__53952,map__53952__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__53942,map__53942__$1,msg,info,reload_info))
,null,null));
});})(s__53945__$1,map__53952,map__53952__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__53942,map__53942__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53944(cljs.core.rest(s__53945__$1)));
} else {
var G__54095 = cljs.core.rest(s__53945__$1);
s__53945__$1 = G__54095;
continue;
}
} else {
var G__54096 = cljs.core.rest(s__53945__$1);
s__53945__$1 = G__54096;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__53954_54097 = cljs.core.seq(warnings);
var chunk__53955_54098 = null;
var count__53956_54099 = (0);
var i__53957_54100 = (0);
while(true){
if((i__53957_54100 < count__53956_54099)){
var map__53962_54101 = chunk__53955_54098.cljs$core$IIndexed$_nth$arity$2(null,i__53957_54100);
var map__53962_54102__$1 = (((((!((map__53962_54101 == null))))?(((((map__53962_54101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53962_54101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53962_54101):map__53962_54101);
var w_54103 = map__53962_54102__$1;
var msg_54104__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53962_54102__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_54105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53962_54102__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_54106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53962_54102__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_54107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53962_54102__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_54107)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_54105),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_54106),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_54104__$1)].join(''));


var G__54108 = seq__53954_54097;
var G__54109 = chunk__53955_54098;
var G__54110 = count__53956_54099;
var G__54111 = (i__53957_54100 + (1));
seq__53954_54097 = G__54108;
chunk__53955_54098 = G__54109;
count__53956_54099 = G__54110;
i__53957_54100 = G__54111;
continue;
} else {
var temp__5735__auto___54112 = cljs.core.seq(seq__53954_54097);
if(temp__5735__auto___54112){
var seq__53954_54113__$1 = temp__5735__auto___54112;
if(cljs.core.chunked_seq_QMARK_(seq__53954_54113__$1)){
var c__4556__auto___54114 = cljs.core.chunk_first(seq__53954_54113__$1);
var G__54115 = cljs.core.chunk_rest(seq__53954_54113__$1);
var G__54116 = c__4556__auto___54114;
var G__54117 = cljs.core.count(c__4556__auto___54114);
var G__54118 = (0);
seq__53954_54097 = G__54115;
chunk__53955_54098 = G__54116;
count__53956_54099 = G__54117;
i__53957_54100 = G__54118;
continue;
} else {
var map__53964_54119 = cljs.core.first(seq__53954_54113__$1);
var map__53964_54120__$1 = (((((!((map__53964_54119 == null))))?(((((map__53964_54119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53964_54119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53964_54119):map__53964_54119);
var w_54121 = map__53964_54120__$1;
var msg_54122__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53964_54120__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_54123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53964_54120__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_54124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53964_54120__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_54125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53964_54120__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_54125)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_54123),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_54124),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_54122__$1)].join(''));


var G__54126 = cljs.core.next(seq__53954_54113__$1);
var G__54127 = null;
var G__54128 = (0);
var G__54129 = (0);
seq__53954_54097 = G__54126;
chunk__53955_54098 = G__54127;
count__53956_54099 = G__54128;
i__53957_54100 = G__54129;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__53940_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__53940_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__53966){
var map__53967 = p__53966;
var map__53967__$1 = (((((!((map__53967 == null))))?(((((map__53967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53967):map__53967);
var msg = map__53967__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53967__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__53969 = cljs.core.seq(updates);
var chunk__53971 = null;
var count__53972 = (0);
var i__53973 = (0);
while(true){
if((i__53973 < count__53972)){
var path = chunk__53971.cljs$core$IIndexed$_nth$arity$2(null,i__53973);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__54003_54130 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__54007_54131 = null;
var count__54008_54132 = (0);
var i__54009_54133 = (0);
while(true){
if((i__54009_54133 < count__54008_54132)){
var node_54134 = chunk__54007_54131.cljs$core$IIndexed$_nth$arity$2(null,i__54009_54133);
if(cljs.core.not(node_54134.shadow$old)){
var path_match_54135 = shadow.cljs.devtools.client.browser.match_paths(node_54134.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54135)){
var new_link_54136 = (function (){var G__54015 = node_54134.cloneNode(true);
G__54015.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54135),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54015;
})();
(node_54134.shadow$old = true);

(new_link_54136.onload = ((function (seq__54003_54130,chunk__54007_54131,count__54008_54132,i__54009_54133,seq__53969,chunk__53971,count__53972,i__53973,new_link_54136,path_match_54135,node_54134,path,map__53967,map__53967__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_54134);
});})(seq__54003_54130,chunk__54007_54131,count__54008_54132,i__54009_54133,seq__53969,chunk__53971,count__53972,i__53973,new_link_54136,path_match_54135,node_54134,path,map__53967,map__53967__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54135], 0));

goog.dom.insertSiblingAfter(new_link_54136,node_54134);


var G__54137 = seq__54003_54130;
var G__54138 = chunk__54007_54131;
var G__54139 = count__54008_54132;
var G__54140 = (i__54009_54133 + (1));
seq__54003_54130 = G__54137;
chunk__54007_54131 = G__54138;
count__54008_54132 = G__54139;
i__54009_54133 = G__54140;
continue;
} else {
var G__54141 = seq__54003_54130;
var G__54142 = chunk__54007_54131;
var G__54143 = count__54008_54132;
var G__54144 = (i__54009_54133 + (1));
seq__54003_54130 = G__54141;
chunk__54007_54131 = G__54142;
count__54008_54132 = G__54143;
i__54009_54133 = G__54144;
continue;
}
} else {
var G__54145 = seq__54003_54130;
var G__54146 = chunk__54007_54131;
var G__54147 = count__54008_54132;
var G__54148 = (i__54009_54133 + (1));
seq__54003_54130 = G__54145;
chunk__54007_54131 = G__54146;
count__54008_54132 = G__54147;
i__54009_54133 = G__54148;
continue;
}
} else {
var temp__5735__auto___54149 = cljs.core.seq(seq__54003_54130);
if(temp__5735__auto___54149){
var seq__54003_54150__$1 = temp__5735__auto___54149;
if(cljs.core.chunked_seq_QMARK_(seq__54003_54150__$1)){
var c__4556__auto___54151 = cljs.core.chunk_first(seq__54003_54150__$1);
var G__54152 = cljs.core.chunk_rest(seq__54003_54150__$1);
var G__54153 = c__4556__auto___54151;
var G__54154 = cljs.core.count(c__4556__auto___54151);
var G__54155 = (0);
seq__54003_54130 = G__54152;
chunk__54007_54131 = G__54153;
count__54008_54132 = G__54154;
i__54009_54133 = G__54155;
continue;
} else {
var node_54156 = cljs.core.first(seq__54003_54150__$1);
if(cljs.core.not(node_54156.shadow$old)){
var path_match_54157 = shadow.cljs.devtools.client.browser.match_paths(node_54156.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54157)){
var new_link_54158 = (function (){var G__54016 = node_54156.cloneNode(true);
G__54016.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54157),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54016;
})();
(node_54156.shadow$old = true);

(new_link_54158.onload = ((function (seq__54003_54130,chunk__54007_54131,count__54008_54132,i__54009_54133,seq__53969,chunk__53971,count__53972,i__53973,new_link_54158,path_match_54157,node_54156,seq__54003_54150__$1,temp__5735__auto___54149,path,map__53967,map__53967__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_54156);
});})(seq__54003_54130,chunk__54007_54131,count__54008_54132,i__54009_54133,seq__53969,chunk__53971,count__53972,i__53973,new_link_54158,path_match_54157,node_54156,seq__54003_54150__$1,temp__5735__auto___54149,path,map__53967,map__53967__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54157], 0));

goog.dom.insertSiblingAfter(new_link_54158,node_54156);


var G__54159 = cljs.core.next(seq__54003_54150__$1);
var G__54160 = null;
var G__54161 = (0);
var G__54162 = (0);
seq__54003_54130 = G__54159;
chunk__54007_54131 = G__54160;
count__54008_54132 = G__54161;
i__54009_54133 = G__54162;
continue;
} else {
var G__54163 = cljs.core.next(seq__54003_54150__$1);
var G__54164 = null;
var G__54165 = (0);
var G__54166 = (0);
seq__54003_54130 = G__54163;
chunk__54007_54131 = G__54164;
count__54008_54132 = G__54165;
i__54009_54133 = G__54166;
continue;
}
} else {
var G__54167 = cljs.core.next(seq__54003_54150__$1);
var G__54168 = null;
var G__54169 = (0);
var G__54170 = (0);
seq__54003_54130 = G__54167;
chunk__54007_54131 = G__54168;
count__54008_54132 = G__54169;
i__54009_54133 = G__54170;
continue;
}
}
} else {
}
}
break;
}


var G__54171 = seq__53969;
var G__54172 = chunk__53971;
var G__54173 = count__53972;
var G__54174 = (i__53973 + (1));
seq__53969 = G__54171;
chunk__53971 = G__54172;
count__53972 = G__54173;
i__53973 = G__54174;
continue;
} else {
var G__54175 = seq__53969;
var G__54176 = chunk__53971;
var G__54177 = count__53972;
var G__54178 = (i__53973 + (1));
seq__53969 = G__54175;
chunk__53971 = G__54176;
count__53972 = G__54177;
i__53973 = G__54178;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53969);
if(temp__5735__auto__){
var seq__53969__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53969__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53969__$1);
var G__54179 = cljs.core.chunk_rest(seq__53969__$1);
var G__54180 = c__4556__auto__;
var G__54181 = cljs.core.count(c__4556__auto__);
var G__54182 = (0);
seq__53969 = G__54179;
chunk__53971 = G__54180;
count__53972 = G__54181;
i__53973 = G__54182;
continue;
} else {
var path = cljs.core.first(seq__53969__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__54017_54183 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__54021_54184 = null;
var count__54022_54185 = (0);
var i__54023_54186 = (0);
while(true){
if((i__54023_54186 < count__54022_54185)){
var node_54187 = chunk__54021_54184.cljs$core$IIndexed$_nth$arity$2(null,i__54023_54186);
if(cljs.core.not(node_54187.shadow$old)){
var path_match_54188 = shadow.cljs.devtools.client.browser.match_paths(node_54187.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54188)){
var new_link_54189 = (function (){var G__54029 = node_54187.cloneNode(true);
G__54029.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54188),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54029;
})();
(node_54187.shadow$old = true);

(new_link_54189.onload = ((function (seq__54017_54183,chunk__54021_54184,count__54022_54185,i__54023_54186,seq__53969,chunk__53971,count__53972,i__53973,new_link_54189,path_match_54188,node_54187,path,seq__53969__$1,temp__5735__auto__,map__53967,map__53967__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_54187);
});})(seq__54017_54183,chunk__54021_54184,count__54022_54185,i__54023_54186,seq__53969,chunk__53971,count__53972,i__53973,new_link_54189,path_match_54188,node_54187,path,seq__53969__$1,temp__5735__auto__,map__53967,map__53967__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54188], 0));

goog.dom.insertSiblingAfter(new_link_54189,node_54187);


var G__54190 = seq__54017_54183;
var G__54191 = chunk__54021_54184;
var G__54192 = count__54022_54185;
var G__54193 = (i__54023_54186 + (1));
seq__54017_54183 = G__54190;
chunk__54021_54184 = G__54191;
count__54022_54185 = G__54192;
i__54023_54186 = G__54193;
continue;
} else {
var G__54194 = seq__54017_54183;
var G__54195 = chunk__54021_54184;
var G__54196 = count__54022_54185;
var G__54197 = (i__54023_54186 + (1));
seq__54017_54183 = G__54194;
chunk__54021_54184 = G__54195;
count__54022_54185 = G__54196;
i__54023_54186 = G__54197;
continue;
}
} else {
var G__54198 = seq__54017_54183;
var G__54199 = chunk__54021_54184;
var G__54200 = count__54022_54185;
var G__54201 = (i__54023_54186 + (1));
seq__54017_54183 = G__54198;
chunk__54021_54184 = G__54199;
count__54022_54185 = G__54200;
i__54023_54186 = G__54201;
continue;
}
} else {
var temp__5735__auto___54202__$1 = cljs.core.seq(seq__54017_54183);
if(temp__5735__auto___54202__$1){
var seq__54017_54203__$1 = temp__5735__auto___54202__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54017_54203__$1)){
var c__4556__auto___54204 = cljs.core.chunk_first(seq__54017_54203__$1);
var G__54205 = cljs.core.chunk_rest(seq__54017_54203__$1);
var G__54206 = c__4556__auto___54204;
var G__54207 = cljs.core.count(c__4556__auto___54204);
var G__54208 = (0);
seq__54017_54183 = G__54205;
chunk__54021_54184 = G__54206;
count__54022_54185 = G__54207;
i__54023_54186 = G__54208;
continue;
} else {
var node_54209 = cljs.core.first(seq__54017_54203__$1);
if(cljs.core.not(node_54209.shadow$old)){
var path_match_54210 = shadow.cljs.devtools.client.browser.match_paths(node_54209.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54210)){
var new_link_54211 = (function (){var G__54030 = node_54209.cloneNode(true);
G__54030.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54210),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54030;
})();
(node_54209.shadow$old = true);

(new_link_54211.onload = ((function (seq__54017_54183,chunk__54021_54184,count__54022_54185,i__54023_54186,seq__53969,chunk__53971,count__53972,i__53973,new_link_54211,path_match_54210,node_54209,seq__54017_54203__$1,temp__5735__auto___54202__$1,path,seq__53969__$1,temp__5735__auto__,map__53967,map__53967__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_54209);
});})(seq__54017_54183,chunk__54021_54184,count__54022_54185,i__54023_54186,seq__53969,chunk__53971,count__53972,i__53973,new_link_54211,path_match_54210,node_54209,seq__54017_54203__$1,temp__5735__auto___54202__$1,path,seq__53969__$1,temp__5735__auto__,map__53967,map__53967__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54210], 0));

goog.dom.insertSiblingAfter(new_link_54211,node_54209);


var G__54212 = cljs.core.next(seq__54017_54203__$1);
var G__54213 = null;
var G__54214 = (0);
var G__54215 = (0);
seq__54017_54183 = G__54212;
chunk__54021_54184 = G__54213;
count__54022_54185 = G__54214;
i__54023_54186 = G__54215;
continue;
} else {
var G__54216 = cljs.core.next(seq__54017_54203__$1);
var G__54217 = null;
var G__54218 = (0);
var G__54219 = (0);
seq__54017_54183 = G__54216;
chunk__54021_54184 = G__54217;
count__54022_54185 = G__54218;
i__54023_54186 = G__54219;
continue;
}
} else {
var G__54220 = cljs.core.next(seq__54017_54203__$1);
var G__54221 = null;
var G__54222 = (0);
var G__54223 = (0);
seq__54017_54183 = G__54220;
chunk__54021_54184 = G__54221;
count__54022_54185 = G__54222;
i__54023_54186 = G__54223;
continue;
}
}
} else {
}
}
break;
}


var G__54224 = cljs.core.next(seq__53969__$1);
var G__54225 = null;
var G__54226 = (0);
var G__54227 = (0);
seq__53969 = G__54224;
chunk__53971 = G__54225;
count__53972 = G__54226;
i__53973 = G__54227;
continue;
} else {
var G__54228 = cljs.core.next(seq__53969__$1);
var G__54229 = null;
var G__54230 = (0);
var G__54231 = (0);
seq__53969 = G__54228;
chunk__53971 = G__54229;
count__53972 = G__54230;
i__53973 = G__54231;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__54031){
var map__54032 = p__54031;
var map__54032__$1 = (((((!((map__54032 == null))))?(((((map__54032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54032):map__54032);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54032__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__54034){
var map__54035 = p__54034;
var map__54035__$1 = (((((!((map__54035 == null))))?(((((map__54035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54035):map__54035);
var _ = map__54035__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54035__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__54037,done,error){
var map__54038 = p__54037;
var map__54038__$1 = (((((!((map__54038 == null))))?(((((map__54038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54038):map__54038);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54038__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__54040,done,error){
var map__54041 = p__54040;
var map__54041__$1 = (((((!((map__54041 == null))))?(((((map__54041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54041):map__54041);
var msg = map__54041__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54041__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54041__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54041__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__54043){
var map__54044 = p__54043;
var map__54044__$1 = (((((!((map__54044 == null))))?(((((map__54044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54044):map__54044);
var src = map__54044__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54044__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__54046 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__54046) : done.call(null,G__54046));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__54047){
var map__54048 = p__54047;
var map__54048__$1 = (((((!((map__54048 == null))))?(((((map__54048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54048):map__54048);
var msg__$1 = map__54048__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54048__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e54050){var ex = e54050;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__54051){
var map__54052 = p__54051;
var map__54052__$1 = (((((!((map__54052 == null))))?(((((map__54052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54052):map__54052);
var env = map__54052__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54052__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__54054){
var map__54055 = p__54054;
var map__54055__$1 = (((((!((map__54055 == null))))?(((((map__54055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54055):map__54055);
var msg = map__54055__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54055__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__54057){
var map__54058 = p__54057;
var map__54058__$1 = (((((!((map__54058 == null))))?(((((map__54058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54058):map__54058);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54058__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54058__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__54060){
var map__54061 = p__54060;
var map__54061__$1 = (((((!((map__54061 == null))))?(((((map__54061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54061):map__54061);
var svc = map__54061__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54061__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
