goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__52194){
var map__52199 = p__52194;
var map__52199__$1 = (((((!((map__52199 == null))))?(((((map__52199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52199):map__52199);
var m = map__52199__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52199__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52199__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__52202_52583 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52203_52584 = null;
var count__52204_52585 = (0);
var i__52205_52586 = (0);
while(true){
if((i__52205_52586 < count__52204_52585)){
var f_52588 = chunk__52203_52584.cljs$core$IIndexed$_nth$arity$2(null,i__52205_52586);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_52588], 0));


var G__52589 = seq__52202_52583;
var G__52590 = chunk__52203_52584;
var G__52591 = count__52204_52585;
var G__52592 = (i__52205_52586 + (1));
seq__52202_52583 = G__52589;
chunk__52203_52584 = G__52590;
count__52204_52585 = G__52591;
i__52205_52586 = G__52592;
continue;
} else {
var temp__5735__auto___52593 = cljs.core.seq(seq__52202_52583);
if(temp__5735__auto___52593){
var seq__52202_52594__$1 = temp__5735__auto___52593;
if(cljs.core.chunked_seq_QMARK_(seq__52202_52594__$1)){
var c__4556__auto___52595 = cljs.core.chunk_first(seq__52202_52594__$1);
var G__52600 = cljs.core.chunk_rest(seq__52202_52594__$1);
var G__52601 = c__4556__auto___52595;
var G__52602 = cljs.core.count(c__4556__auto___52595);
var G__52603 = (0);
seq__52202_52583 = G__52600;
chunk__52203_52584 = G__52601;
count__52204_52585 = G__52602;
i__52205_52586 = G__52603;
continue;
} else {
var f_52604 = cljs.core.first(seq__52202_52594__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_52604], 0));


var G__52605 = cljs.core.next(seq__52202_52594__$1);
var G__52606 = null;
var G__52607 = (0);
var G__52608 = (0);
seq__52202_52583 = G__52605;
chunk__52203_52584 = G__52606;
count__52204_52585 = G__52607;
i__52205_52586 = G__52608;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_52609 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_52609], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_52609)))?cljs.core.second(arglists_52609):arglists_52609)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__52221_52617 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52222_52618 = null;
var count__52223_52619 = (0);
var i__52224_52620 = (0);
while(true){
if((i__52224_52620 < count__52223_52619)){
var vec__52243_52623 = chunk__52222_52618.cljs$core$IIndexed$_nth$arity$2(null,i__52224_52620);
var name_52624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52243_52623,(0),null);
var map__52246_52625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52243_52623,(1),null);
var map__52246_52626__$1 = (((((!((map__52246_52625 == null))))?(((((map__52246_52625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52246_52625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52246_52625):map__52246_52625);
var doc_52627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52246_52626__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52246_52626__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_52624], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_52628], 0));

if(cljs.core.truth_(doc_52627)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_52627], 0));
} else {
}


var G__52631 = seq__52221_52617;
var G__52632 = chunk__52222_52618;
var G__52633 = count__52223_52619;
var G__52634 = (i__52224_52620 + (1));
seq__52221_52617 = G__52631;
chunk__52222_52618 = G__52632;
count__52223_52619 = G__52633;
i__52224_52620 = G__52634;
continue;
} else {
var temp__5735__auto___52635 = cljs.core.seq(seq__52221_52617);
if(temp__5735__auto___52635){
var seq__52221_52637__$1 = temp__5735__auto___52635;
if(cljs.core.chunked_seq_QMARK_(seq__52221_52637__$1)){
var c__4556__auto___52641 = cljs.core.chunk_first(seq__52221_52637__$1);
var G__52642 = cljs.core.chunk_rest(seq__52221_52637__$1);
var G__52643 = c__4556__auto___52641;
var G__52644 = cljs.core.count(c__4556__auto___52641);
var G__52645 = (0);
seq__52221_52617 = G__52642;
chunk__52222_52618 = G__52643;
count__52223_52619 = G__52644;
i__52224_52620 = G__52645;
continue;
} else {
var vec__52259_52646 = cljs.core.first(seq__52221_52637__$1);
var name_52647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52259_52646,(0),null);
var map__52262_52648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52259_52646,(1),null);
var map__52262_52649__$1 = (((((!((map__52262_52648 == null))))?(((((map__52262_52648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52262_52648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52262_52648):map__52262_52648);
var doc_52650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52262_52649__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52262_52649__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_52647], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_52651], 0));

if(cljs.core.truth_(doc_52650)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_52650], 0));
} else {
}


var G__52657 = cljs.core.next(seq__52221_52637__$1);
var G__52658 = null;
var G__52659 = (0);
var G__52660 = (0);
seq__52221_52617 = G__52657;
chunk__52222_52618 = G__52658;
count__52223_52619 = G__52659;
i__52224_52620 = G__52660;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__52277 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__52278 = null;
var count__52279 = (0);
var i__52280 = (0);
while(true){
if((i__52280 < count__52279)){
var role = chunk__52278.cljs$core$IIndexed$_nth$arity$2(null,i__52280);
var temp__5735__auto___52665__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___52665__$1)){
var spec_52666 = temp__5735__auto___52665__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_52666)], 0));
} else {
}


var G__52667 = seq__52277;
var G__52668 = chunk__52278;
var G__52669 = count__52279;
var G__52670 = (i__52280 + (1));
seq__52277 = G__52667;
chunk__52278 = G__52668;
count__52279 = G__52669;
i__52280 = G__52670;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__52277);
if(temp__5735__auto____$1){
var seq__52277__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__52277__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52277__$1);
var G__52672 = cljs.core.chunk_rest(seq__52277__$1);
var G__52673 = c__4556__auto__;
var G__52674 = cljs.core.count(c__4556__auto__);
var G__52675 = (0);
seq__52277 = G__52672;
chunk__52278 = G__52673;
count__52279 = G__52674;
i__52280 = G__52675;
continue;
} else {
var role = cljs.core.first(seq__52277__$1);
var temp__5735__auto___52681__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___52681__$2)){
var spec_52682 = temp__5735__auto___52681__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_52682)], 0));
} else {
}


var G__52683 = cljs.core.next(seq__52277__$1);
var G__52684 = null;
var G__52685 = (0);
var G__52686 = (0);
seq__52277 = G__52683;
chunk__52278 = G__52684;
count__52279 = G__52685;
i__52280 = G__52686;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__52689 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__52690 = cljs.core.ex_cause(t);
via = G__52689;
t = G__52690;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__52317 = datafied_throwable;
var map__52317__$1 = (((((!((map__52317 == null))))?(((((map__52317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52317):map__52317);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52317__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52317__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52317__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__52318 = cljs.core.last(via);
var map__52318__$1 = (((((!((map__52318 == null))))?(((((map__52318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52318):map__52318);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52318__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52318__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52318__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__52319 = data;
var map__52319__$1 = (((((!((map__52319 == null))))?(((((map__52319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52319):map__52319);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52319__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52319__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52319__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__52324 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__52324__$1 = (((((!((map__52324 == null))))?(((((map__52324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52324):map__52324);
var top_data = map__52324__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52324__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__52353 = phase;
var G__52353__$1 = (((G__52353 instanceof cljs.core.Keyword))?G__52353.fqn:null);
switch (G__52353__$1) {
case "read-source":
var map__52358 = data;
var map__52358__$1 = (((((!((map__52358 == null))))?(((((map__52358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52358):map__52358);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52358__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52358__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__52366 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__52366__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52366,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__52366);
var G__52366__$2 = (cljs.core.truth_((function (){var fexpr__52376 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__52376.cljs$core$IFn$_invoke$arity$1 ? fexpr__52376.cljs$core$IFn$_invoke$arity$1(source) : fexpr__52376.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52366__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__52366__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52366__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__52366__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__52391 = top_data;
var G__52391__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52391,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__52391);
var G__52391__$2 = (cljs.core.truth_((function (){var fexpr__52401 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__52401.cljs$core$IFn$_invoke$arity$1 ? fexpr__52401.cljs$core$IFn$_invoke$arity$1(source) : fexpr__52401.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52391__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__52391__$1);
var G__52391__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52391__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__52391__$2);
var G__52391__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52391__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__52391__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52391__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__52391__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__52405 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52405,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52405,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52405,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52405,(3),null);
var G__52408 = top_data;
var G__52408__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52408,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__52408);
var G__52408__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52408__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__52408__$1);
var G__52408__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52408__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__52408__$2);
var G__52408__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52408__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__52408__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52408__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__52408__$4;
}

break;
case "execution":
var vec__52424 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52424,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52424,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52424,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52424,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__52309_SHARP_){
var or__4126__auto__ = (p1__52309_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__52446 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__52446.cljs$core$IFn$_invoke$arity$1 ? fexpr__52446.cljs$core$IFn$_invoke$arity$1(p1__52309_SHARP_) : fexpr__52446.call(null,p1__52309_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__52450 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__52450__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52450,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__52450);
var G__52450__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52450__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__52450__$1);
var G__52450__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52450__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__52450__$2);
var G__52450__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52450__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__52450__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52450__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__52450__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52353__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__52482){
var map__52483 = p__52482;
var map__52483__$1 = (((((!((map__52483 == null))))?(((((map__52483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52483):map__52483);
var triage_data = map__52483__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52483__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52483__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52483__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52483__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52483__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52483__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52483__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52483__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__52515 = phase;
var G__52515__$1 = (((G__52515 instanceof cljs.core.Keyword))?G__52515.fqn:null);
switch (G__52515__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__52516 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__52517 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52518 = loc;
var G__52519 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__52524_52905 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__52525_52906 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__52526_52907 = true;
var _STAR_print_fn_STAR__temp_val__52527_52908 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52526_52907);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52527_52908);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52480_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__52480_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52525_52906);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52524_52905);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__52516,G__52517,G__52518,G__52519) : format.call(null,G__52516,G__52517,G__52518,G__52519));

break;
case "macroexpansion":
var G__52535 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__52536 = cause_type;
var G__52537 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52538 = loc;
var G__52539 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52535,G__52536,G__52537,G__52538,G__52539) : format.call(null,G__52535,G__52536,G__52537,G__52538,G__52539));

break;
case "compile-syntax-check":
var G__52540 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__52541 = cause_type;
var G__52542 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52543 = loc;
var G__52544 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52540,G__52541,G__52542,G__52543,G__52544) : format.call(null,G__52540,G__52541,G__52542,G__52543,G__52544));

break;
case "compilation":
var G__52545 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__52546 = cause_type;
var G__52547 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52548 = loc;
var G__52549 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52545,G__52546,G__52547,G__52548,G__52549) : format.call(null,G__52545,G__52546,G__52547,G__52548,G__52549));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__52551 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__52552 = symbol;
var G__52553 = loc;
var G__52554 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__52555_52972 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__52556_52973 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__52557_52974 = true;
var _STAR_print_fn_STAR__temp_val__52558_52975 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52557_52974);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52558_52975);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52481_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__52481_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52556_52973);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52555_52972);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__52551,G__52552,G__52553,G__52554) : format.call(null,G__52551,G__52552,G__52553,G__52554));
} else {
var G__52563 = "Execution error%s at %s(%s).\n%s\n";
var G__52564 = cause_type;
var G__52565 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52566 = loc;
var G__52567 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52563,G__52564,G__52565,G__52566,G__52567) : format.call(null,G__52563,G__52564,G__52565,G__52566,G__52567));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52515__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
