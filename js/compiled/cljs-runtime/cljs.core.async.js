goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__46596 = arguments.length;
switch (G__46596) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46597 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46597 = (function (f,blockable,meta46598){
this.f = f;
this.blockable = blockable;
this.meta46598 = meta46598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46599,meta46598__$1){
var self__ = this;
var _46599__$1 = this;
return (new cljs.core.async.t_cljs$core$async46597(self__.f,self__.blockable,meta46598__$1));
}));

(cljs.core.async.t_cljs$core$async46597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46599){
var self__ = this;
var _46599__$1 = this;
return self__.meta46598;
}));

(cljs.core.async.t_cljs$core$async46597.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46597.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46597.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async46597.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async46597.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46598","meta46598",1104093729,null)], null);
}));

(cljs.core.async.t_cljs$core$async46597.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46597.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46597");

(cljs.core.async.t_cljs$core$async46597.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46597");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46597.
 */
cljs.core.async.__GT_t_cljs$core$async46597 = (function cljs$core$async$__GT_t_cljs$core$async46597(f__$1,blockable__$1,meta46598){
return (new cljs.core.async.t_cljs$core$async46597(f__$1,blockable__$1,meta46598));
});

}

return (new cljs.core.async.t_cljs$core$async46597(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__46634 = arguments.length;
switch (G__46634) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__46645 = arguments.length;
switch (G__46645) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__46667 = arguments.length;
switch (G__46667) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_50013 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_50013) : fn1.call(null,val_50013));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_50013) : fn1.call(null,val_50013));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__46728 = arguments.length;
switch (G__46728) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___50035 = n;
var x_50036 = (0);
while(true){
if((x_50036 < n__4613__auto___50035)){
(a[x_50036] = x_50036);

var G__50037 = (x_50036 + (1));
x_50036 = G__50037;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46761 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46761 = (function (flag,meta46762){
this.flag = flag;
this.meta46762 = meta46762;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46763,meta46762__$1){
var self__ = this;
var _46763__$1 = this;
return (new cljs.core.async.t_cljs$core$async46761(self__.flag,meta46762__$1));
}));

(cljs.core.async.t_cljs$core$async46761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46763){
var self__ = this;
var _46763__$1 = this;
return self__.meta46762;
}));

(cljs.core.async.t_cljs$core$async46761.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46761.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46761.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46761.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async46761.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46762","meta46762",1012030083,null)], null);
}));

(cljs.core.async.t_cljs$core$async46761.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46761.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46761");

(cljs.core.async.t_cljs$core$async46761.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46761");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46761.
 */
cljs.core.async.__GT_t_cljs$core$async46761 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46761(flag__$1,meta46762){
return (new cljs.core.async.t_cljs$core$async46761(flag__$1,meta46762));
});

}

return (new cljs.core.async.t_cljs$core$async46761(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46780 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46780 = (function (flag,cb,meta46781){
this.flag = flag;
this.cb = cb;
this.meta46781 = meta46781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46782,meta46781__$1){
var self__ = this;
var _46782__$1 = this;
return (new cljs.core.async.t_cljs$core$async46780(self__.flag,self__.cb,meta46781__$1));
}));

(cljs.core.async.t_cljs$core$async46780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46782){
var self__ = this;
var _46782__$1 = this;
return self__.meta46781;
}));

(cljs.core.async.t_cljs$core$async46780.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46780.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46780.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46780.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async46780.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46781","meta46781",427600597,null)], null);
}));

(cljs.core.async.t_cljs$core$async46780.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46780.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46780");

(cljs.core.async.t_cljs$core$async46780.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46780");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46780.
 */
cljs.core.async.__GT_t_cljs$core$async46780 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46780(flag__$1,cb__$1,meta46781){
return (new cljs.core.async.t_cljs$core$async46780(flag__$1,cb__$1,meta46781));
});

}

return (new cljs.core.async.t_cljs$core$async46780(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46808_SHARP_){
var G__46815 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46808_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46815) : fret.call(null,G__46815));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46809_SHARP_){
var G__46816 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46809_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46816) : fret.call(null,G__46816));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__50076 = (i + (1));
i = G__50076;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50082 = arguments.length;
var i__4737__auto___50083 = (0);
while(true){
if((i__4737__auto___50083 < len__4736__auto___50082)){
args__4742__auto__.push((arguments[i__4737__auto___50083]));

var G__50085 = (i__4737__auto___50083 + (1));
i__4737__auto___50083 = G__50085;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46832){
var map__46833 = p__46832;
var map__46833__$1 = (((((!((map__46833 == null))))?(((((map__46833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46833):map__46833);
var opts = map__46833__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46825){
var G__46826 = cljs.core.first(seq46825);
var seq46825__$1 = cljs.core.next(seq46825);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46826,seq46825__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__46843 = arguments.length;
switch (G__46843) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__46468__auto___50105 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46469__auto__ = (function (){var switch__46385__auto__ = (function (state_46907){
var state_val_46908 = (state_46907[(1)]);
if((state_val_46908 === (7))){
var inst_46897 = (state_46907[(2)]);
var state_46907__$1 = state_46907;
var statearr_46935_50111 = state_46907__$1;
(statearr_46935_50111[(2)] = inst_46897);

(statearr_46935_50111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46908 === (1))){
var state_46907__$1 = state_46907;
var statearr_46938_50114 = state_46907__$1;
(statearr_46938_50114[(2)] = null);

(statearr_46938_50114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46908 === (4))){
var inst_46876 = (state_46907[(7)]);
var inst_46876__$1 = (state_46907[(2)]);
var inst_46877 = (inst_46876__$1 == null);
var state_46907__$1 = (function (){var statearr_46940 = state_46907;
(statearr_46940[(7)] = inst_46876__$1);

return statearr_46940;
})();
if(cljs.core.truth_(inst_46877)){
var statearr_46943_50118 = state_46907__$1;
(statearr_46943_50118[(1)] = (5));

} else {
var statearr_46949_50120 = state_46907__$1;
(statearr_46949_50120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46908 === (13))){
var state_46907__$1 = state_46907;
var statearr_46956_50121 = state_46907__$1;
(statearr_46956_50121[(2)] = null);

(statearr_46956_50121[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46908 === (6))){
var inst_46876 = (state_46907[(7)]);
var state_46907__$1 = state_46907;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46907__$1,(11),to,inst_46876);
} else {
if((state_val_46908 === (3))){
var inst_46899 = (state_46907[(2)]);
var state_46907__$1 = state_46907;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46907__$1,inst_46899);
} else {
if((state_val_46908 === (12))){
var state_46907__$1 = state_46907;
var statearr_46970_50130 = state_46907__$1;
(statearr_46970_50130[(2)] = null);

(statearr_46970_50130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46908 === (2))){
var state_46907__$1 = state_46907;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46907__$1,(4),from);
} else {
if((state_val_46908 === (11))){
var inst_46890 = (state_46907[(2)]);
var state_46907__$1 = state_46907;
if(cljs.core.truth_(inst_46890)){
var statearr_46975_50132 = state_46907__$1;
(statearr_46975_50132[(1)] = (12));

} else {
var statearr_46976_50133 = state_46907__$1;
(statearr_46976_50133[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46908 === (9))){
var state_46907__$1 = state_46907;
var statearr_46977_50134 = state_46907__$1;
(statearr_46977_50134[(2)] = null);

(statearr_46977_50134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46908 === (5))){
var state_46907__$1 = state_46907;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46979_50137 = state_46907__$1;
(statearr_46979_50137[(1)] = (8));

} else {
var statearr_46981_50139 = state_46907__$1;
(statearr_46981_50139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46908 === (14))){
var inst_46895 = (state_46907[(2)]);
var state_46907__$1 = state_46907;
var statearr_46983_50140 = state_46907__$1;
(statearr_46983_50140[(2)] = inst_46895);

(statearr_46983_50140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46908 === (10))){
var inst_46886 = (state_46907[(2)]);
var state_46907__$1 = state_46907;
var statearr_46986_50142 = state_46907__$1;
(statearr_46986_50142[(2)] = inst_46886);

(statearr_46986_50142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46908 === (8))){
var inst_46883 = cljs.core.async.close_BANG_(to);
var state_46907__$1 = state_46907;
var statearr_46992_50143 = state_46907__$1;
(statearr_46992_50143[(2)] = inst_46883);

(statearr_46992_50143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46386__auto__ = null;
var cljs$core$async$state_machine__46386__auto____0 = (function (){
var statearr_47000 = [null,null,null,null,null,null,null,null];
(statearr_47000[(0)] = cljs$core$async$state_machine__46386__auto__);

(statearr_47000[(1)] = (1));

return statearr_47000;
});
var cljs$core$async$state_machine__46386__auto____1 = (function (state_46907){
while(true){
var ret_value__46387__auto__ = (function (){try{while(true){
var result__46388__auto__ = switch__46385__auto__(state_46907);
if(cljs.core.keyword_identical_QMARK_(result__46388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46388__auto__;
}
break;
}
}catch (e47002){var ex__46389__auto__ = e47002;
var statearr_47005_50150 = state_46907;
(statearr_47005_50150[(2)] = ex__46389__auto__);


if(cljs.core.seq((state_46907[(4)]))){
var statearr_47007_50152 = state_46907;
(statearr_47007_50152[(1)] = cljs.core.first((state_46907[(4)])));

} else {
throw ex__46389__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50153 = state_46907;
state_46907 = G__50153;
continue;
} else {
return ret_value__46387__auto__;
}
break;
}
});
cljs$core$async$state_machine__46386__auto__ = function(state_46907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46386__auto____1.call(this,state_46907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46386__auto____0;
cljs$core$async$state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46386__auto____1;
return cljs$core$async$state_machine__46386__auto__;
})()
})();
var state__46470__auto__ = (function (){var statearr_47011 = f__46469__auto__();
(statearr_47011[(6)] = c__46468__auto___50105);

return statearr_47011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46470__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__47035){
var vec__47038 = p__47035;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47038,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47038,(1),null);
var job = vec__47038;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__46468__auto___50184 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46469__auto__ = (function (){var switch__46385__auto__ = (function (state_47052){
var state_val_47054 = (state_47052[(1)]);
if((state_val_47054 === (1))){
var state_47052__$1 = state_47052;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47052__$1,(2),res,v);
} else {
if((state_val_47054 === (2))){
var inst_47048 = (state_47052[(2)]);
var inst_47049 = cljs.core.async.close_BANG_(res);
var state_47052__$1 = (function (){var statearr_47061 = state_47052;
(statearr_47061[(7)] = inst_47048);

return statearr_47061;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47052__$1,inst_47049);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46386__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46386__auto____0 = (function (){
var statearr_47064 = [null,null,null,null,null,null,null,null];
(statearr_47064[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46386__auto__);

(statearr_47064[(1)] = (1));

return statearr_47064;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46386__auto____1 = (function (state_47052){
while(true){
var ret_value__46387__auto__ = (function (){try{while(true){
var result__46388__auto__ = switch__46385__auto__(state_47052);
if(cljs.core.keyword_identical_QMARK_(result__46388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46388__auto__;
}
break;
}
}catch (e47067){var ex__46389__auto__ = e47067;
var statearr_47068_50209 = state_47052;
(statearr_47068_50209[(2)] = ex__46389__auto__);


if(cljs.core.seq((state_47052[(4)]))){
var statearr_47070_50218 = state_47052;
(statearr_47070_50218[(1)] = cljs.core.first((state_47052[(4)])));

} else {
throw ex__46389__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50222 = state_47052;
state_47052 = G__50222;
continue;
} else {
return ret_value__46387__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46386__auto__ = function(state_47052){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46386__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46386__auto____1.call(this,state_47052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46386__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46386__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46386__auto__;
})()
})();
var state__46470__auto__ = (function (){var statearr_47076 = f__46469__auto__();
(statearr_47076[(6)] = c__46468__auto___50184);

return statearr_47076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46470__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__47084){
var vec__47086 = p__47084;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47086,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47086,(1),null);
var job = vec__47086;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___50229 = n;
var __50230 = (0);
while(true){
if((__50230 < n__4613__auto___50229)){
var G__47098_50232 = type;
var G__47098_50233__$1 = (((G__47098_50232 instanceof cljs.core.Keyword))?G__47098_50232.fqn:null);
switch (G__47098_50233__$1) {
case "compute":
var c__46468__auto___50237 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__50230,c__46468__auto___50237,G__47098_50232,G__47098_50233__$1,n__4613__auto___50229,jobs,results,process,async){
return (function (){
var f__46469__auto__ = (function (){var switch__46385__auto__ = ((function (__50230,c__46468__auto___50237,G__47098_50232,G__47098_50233__$1,n__4613__auto___50229,jobs,results,process,async){
return (function (state_47114){
var state_val_47115 = (state_47114[(1)]);
if((state_val_47115 === (1))){
var state_47114__$1 = state_47114;
var statearr_47122_50241 = state_47114__$1;
(statearr_47122_50241[(2)] = null);

(statearr_47122_50241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47115 === (2))){
var state_47114__$1 = state_47114;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47114__$1,(4),jobs);
} else {
if((state_val_47115 === (3))){
var inst_47112 = (state_47114[(2)]);
var state_47114__$1 = state_47114;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47114__$1,inst_47112);
} else {
if((state_val_47115 === (4))){
var inst_47103 = (state_47114[(2)]);
var inst_47105 = process(inst_47103);
var state_47114__$1 = state_47114;
if(cljs.core.truth_(inst_47105)){
var statearr_47126_50246 = state_47114__$1;
(statearr_47126_50246[(1)] = (5));

} else {
var statearr_47131_50247 = state_47114__$1;
(statearr_47131_50247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47115 === (5))){
var state_47114__$1 = state_47114;
var statearr_47133_50248 = state_47114__$1;
(statearr_47133_50248[(2)] = null);

(statearr_47133_50248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47115 === (6))){
var state_47114__$1 = state_47114;
var statearr_47138_50252 = state_47114__$1;
(statearr_47138_50252[(2)] = null);

(statearr_47138_50252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47115 === (7))){
var inst_47110 = (state_47114[(2)]);
var state_47114__$1 = state_47114;
var statearr_47142_50254 = state_47114__$1;
(statearr_47142_50254[(2)] = inst_47110);

(statearr_47142_50254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__50230,c__46468__auto___50237,G__47098_50232,G__47098_50233__$1,n__4613__auto___50229,jobs,results,process,async))
;
return ((function (__50230,switch__46385__auto__,c__46468__auto___50237,G__47098_50232,G__47098_50233__$1,n__4613__auto___50229,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46386__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46386__auto____0 = (function (){
var statearr_47157 = [null,null,null,null,null,null,null];
(statearr_47157[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46386__auto__);

(statearr_47157[(1)] = (1));

return statearr_47157;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46386__auto____1 = (function (state_47114){
while(true){
var ret_value__46387__auto__ = (function (){try{while(true){
var result__46388__auto__ = switch__46385__auto__(state_47114);
if(cljs.core.keyword_identical_QMARK_(result__46388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46388__auto__;
}
break;
}
}catch (e47168){var ex__46389__auto__ = e47168;
var statearr_47169_50261 = state_47114;
(statearr_47169_50261[(2)] = ex__46389__auto__);


if(cljs.core.seq((state_47114[(4)]))){
var statearr_47171_50263 = state_47114;
(statearr_47171_50263[(1)] = cljs.core.first((state_47114[(4)])));

} else {
throw ex__46389__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50266 = state_47114;
state_47114 = G__50266;
continue;
} else {
return ret_value__46387__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46386__auto__ = function(state_47114){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46386__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46386__auto____1.call(this,state_47114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46386__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46386__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46386__auto__;
})()
;})(__50230,switch__46385__auto__,c__46468__auto___50237,G__47098_50232,G__47098_50233__$1,n__4613__auto___50229,jobs,results,process,async))
})();
var state__46470__auto__ = (function (){var statearr_47178 = f__46469__auto__();
(statearr_47178[(6)] = c__46468__auto___50237);

return statearr_47178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46470__auto__);
});})(__50230,c__46468__auto___50237,G__47098_50232,G__47098_50233__$1,n__4613__auto___50229,jobs,results,process,async))
);


break;
case "async":
var c__46468__auto___50269 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__50230,c__46468__auto___50269,G__47098_50232,G__47098_50233__$1,n__4613__auto___50229,jobs,results,process,async){
return (function (){
var f__46469__auto__ = (function (){var switch__46385__auto__ = ((function (__50230,c__46468__auto___50269,G__47098_50232,G__47098_50233__$1,n__4613__auto___50229,jobs,results,process,async){
return (function (state_47197){
var state_val_47198 = (state_47197[(1)]);
if((state_val_47198 === (1))){
var state_47197__$1 = state_47197;
var statearr_47207_50274 = state_47197__$1;
(statearr_47207_50274[(2)] = null);

(statearr_47207_50274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (2))){
var state_47197__$1 = state_47197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47197__$1,(4),jobs);
} else {
if((state_val_47198 === (3))){
var inst_47195 = (state_47197[(2)]);
var state_47197__$1 = state_47197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47197__$1,inst_47195);
} else {
if((state_val_47198 === (4))){
var inst_47186 = (state_47197[(2)]);
var inst_47187 = async(inst_47186);
var state_47197__$1 = state_47197;
if(cljs.core.truth_(inst_47187)){
var statearr_47230_50280 = state_47197__$1;
(statearr_47230_50280[(1)] = (5));

} else {
var statearr_47235_50281 = state_47197__$1;
(statearr_47235_50281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (5))){
var state_47197__$1 = state_47197;
var statearr_47238_50286 = state_47197__$1;
(statearr_47238_50286[(2)] = null);

(statearr_47238_50286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (6))){
var state_47197__$1 = state_47197;
var statearr_47242_50290 = state_47197__$1;
(statearr_47242_50290[(2)] = null);

(statearr_47242_50290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (7))){
var inst_47193 = (state_47197[(2)]);
var state_47197__$1 = state_47197;
var statearr_47248_50292 = state_47197__$1;
(statearr_47248_50292[(2)] = inst_47193);

(statearr_47248_50292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__50230,c__46468__auto___50269,G__47098_50232,G__47098_50233__$1,n__4613__auto___50229,jobs,results,process,async))
;
return ((function (__50230,switch__46385__auto__,c__46468__auto___50269,G__47098_50232,G__47098_50233__$1,n__4613__auto___50229,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46386__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46386__auto____0 = (function (){
var statearr_47254 = [null,null,null,null,null,null,null];
(statearr_47254[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46386__auto__);

(statearr_47254[(1)] = (1));

return statearr_47254;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46386__auto____1 = (function (state_47197){
while(true){
var ret_value__46387__auto__ = (function (){try{while(true){
var result__46388__auto__ = switch__46385__auto__(state_47197);
if(cljs.core.keyword_identical_QMARK_(result__46388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46388__auto__;
}
break;
}
}catch (e47255){var ex__46389__auto__ = e47255;
var statearr_47257_50300 = state_47197;
(statearr_47257_50300[(2)] = ex__46389__auto__);


if(cljs.core.seq((state_47197[(4)]))){
var statearr_47258_50301 = state_47197;
(statearr_47258_50301[(1)] = cljs.core.first((state_47197[(4)])));

} else {
throw ex__46389__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50306 = state_47197;
state_47197 = G__50306;
continue;
} else {
return ret_value__46387__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46386__auto__ = function(state_47197){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46386__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46386__auto____1.call(this,state_47197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46386__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46386__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46386__auto__;
})()
;})(__50230,switch__46385__auto__,c__46468__auto___50269,G__47098_50232,G__47098_50233__$1,n__4613__auto___50229,jobs,results,process,async))
})();
var state__46470__auto__ = (function (){var statearr_47265 = f__46469__auto__();
(statearr_47265[(6)] = c__46468__auto___50269);

return statearr_47265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46470__auto__);
});})(__50230,c__46468__auto___50269,G__47098_50232,G__47098_50233__$1,n__4613__auto___50229,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47098_50233__$1)].join('')));

}

var G__50308 = (__50230 + (1));
__50230 = G__50308;
continue;
} else {
}
break;
}

var c__46468__auto___50309 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46469__auto__ = (function (){var switch__46385__auto__ = (function (state_47304){
var state_val_47305 = (state_47304[(1)]);
if((state_val_47305 === (7))){
var inst_47298 = (state_47304[(2)]);
var state_47304__$1 = state_47304;
var statearr_47315_50314 = state_47304__$1;
(statearr_47315_50314[(2)] = inst_47298);

(statearr_47315_50314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47305 === (1))){
var state_47304__$1 = state_47304;
var statearr_47317_50315 = state_47304__$1;
(statearr_47317_50315[(2)] = null);

(statearr_47317_50315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47305 === (4))){
var inst_47275 = (state_47304[(7)]);
var inst_47275__$1 = (state_47304[(2)]);
var inst_47276 = (inst_47275__$1 == null);
var state_47304__$1 = (function (){var statearr_47325 = state_47304;
(statearr_47325[(7)] = inst_47275__$1);

return statearr_47325;
})();
if(cljs.core.truth_(inst_47276)){
var statearr_47326_50317 = state_47304__$1;
(statearr_47326_50317[(1)] = (5));

} else {
var statearr_47327_50318 = state_47304__$1;
(statearr_47327_50318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47305 === (6))){
var inst_47275 = (state_47304[(7)]);
var inst_47285 = (state_47304[(8)]);
var inst_47285__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_47289 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47290 = [inst_47275,inst_47285__$1];
var inst_47291 = (new cljs.core.PersistentVector(null,2,(5),inst_47289,inst_47290,null));
var state_47304__$1 = (function (){var statearr_47328 = state_47304;
(statearr_47328[(8)] = inst_47285__$1);

return statearr_47328;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47304__$1,(8),jobs,inst_47291);
} else {
if((state_val_47305 === (3))){
var inst_47300 = (state_47304[(2)]);
var state_47304__$1 = state_47304;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47304__$1,inst_47300);
} else {
if((state_val_47305 === (2))){
var state_47304__$1 = state_47304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47304__$1,(4),from);
} else {
if((state_val_47305 === (9))){
var inst_47295 = (state_47304[(2)]);
var state_47304__$1 = (function (){var statearr_47335 = state_47304;
(statearr_47335[(9)] = inst_47295);

return statearr_47335;
})();
var statearr_47336_50331 = state_47304__$1;
(statearr_47336_50331[(2)] = null);

(statearr_47336_50331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47305 === (5))){
var inst_47282 = cljs.core.async.close_BANG_(jobs);
var state_47304__$1 = state_47304;
var statearr_47341_50333 = state_47304__$1;
(statearr_47341_50333[(2)] = inst_47282);

(statearr_47341_50333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47305 === (8))){
var inst_47285 = (state_47304[(8)]);
var inst_47293 = (state_47304[(2)]);
var state_47304__$1 = (function (){var statearr_47349 = state_47304;
(statearr_47349[(10)] = inst_47293);

return statearr_47349;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47304__$1,(9),results,inst_47285);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46386__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46386__auto____0 = (function (){
var statearr_47350 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47350[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46386__auto__);

(statearr_47350[(1)] = (1));

return statearr_47350;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46386__auto____1 = (function (state_47304){
while(true){
var ret_value__46387__auto__ = (function (){try{while(true){
var result__46388__auto__ = switch__46385__auto__(state_47304);
if(cljs.core.keyword_identical_QMARK_(result__46388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46388__auto__;
}
break;
}
}catch (e47351){var ex__46389__auto__ = e47351;
var statearr_47352_50342 = state_47304;
(statearr_47352_50342[(2)] = ex__46389__auto__);


if(cljs.core.seq((state_47304[(4)]))){
var statearr_47353_50343 = state_47304;
(statearr_47353_50343[(1)] = cljs.core.first((state_47304[(4)])));

} else {
throw ex__46389__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50344 = state_47304;
state_47304 = G__50344;
continue;
} else {
return ret_value__46387__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46386__auto__ = function(state_47304){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46386__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46386__auto____1.call(this,state_47304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46386__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46386__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46386__auto__;
})()
})();
var state__46470__auto__ = (function (){var statearr_47355 = f__46469__auto__();
(statearr_47355[(6)] = c__46468__auto___50309);

return statearr_47355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46470__auto__);
}));


var c__46468__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46469__auto__ = (function (){var switch__46385__auto__ = (function (state_47406){
var state_val_47407 = (state_47406[(1)]);
if((state_val_47407 === (7))){
var inst_47398 = (state_47406[(2)]);
var state_47406__$1 = state_47406;
var statearr_47411_50350 = state_47406__$1;
(statearr_47411_50350[(2)] = inst_47398);

(statearr_47411_50350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (20))){
var state_47406__$1 = state_47406;
var statearr_47412_50351 = state_47406__$1;
(statearr_47412_50351[(2)] = null);

(statearr_47412_50351[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (1))){
var state_47406__$1 = state_47406;
var statearr_47414_50352 = state_47406__$1;
(statearr_47414_50352[(2)] = null);

(statearr_47414_50352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (4))){
var inst_47361 = (state_47406[(7)]);
var inst_47361__$1 = (state_47406[(2)]);
var inst_47362 = (inst_47361__$1 == null);
var state_47406__$1 = (function (){var statearr_47420 = state_47406;
(statearr_47420[(7)] = inst_47361__$1);

return statearr_47420;
})();
if(cljs.core.truth_(inst_47362)){
var statearr_47421_50357 = state_47406__$1;
(statearr_47421_50357[(1)] = (5));

} else {
var statearr_47422_50359 = state_47406__$1;
(statearr_47422_50359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (15))){
var inst_47374 = (state_47406[(8)]);
var state_47406__$1 = state_47406;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47406__$1,(18),to,inst_47374);
} else {
if((state_val_47407 === (21))){
var inst_47393 = (state_47406[(2)]);
var state_47406__$1 = state_47406;
var statearr_47424_50364 = state_47406__$1;
(statearr_47424_50364[(2)] = inst_47393);

(statearr_47424_50364[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (13))){
var inst_47395 = (state_47406[(2)]);
var state_47406__$1 = (function (){var statearr_47426 = state_47406;
(statearr_47426[(9)] = inst_47395);

return statearr_47426;
})();
var statearr_47427_50365 = state_47406__$1;
(statearr_47427_50365[(2)] = null);

(statearr_47427_50365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (6))){
var inst_47361 = (state_47406[(7)]);
var state_47406__$1 = state_47406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47406__$1,(11),inst_47361);
} else {
if((state_val_47407 === (17))){
var inst_47386 = (state_47406[(2)]);
var state_47406__$1 = state_47406;
if(cljs.core.truth_(inst_47386)){
var statearr_47430_50370 = state_47406__$1;
(statearr_47430_50370[(1)] = (19));

} else {
var statearr_47432_50371 = state_47406__$1;
(statearr_47432_50371[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (3))){
var inst_47401 = (state_47406[(2)]);
var state_47406__$1 = state_47406;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47406__$1,inst_47401);
} else {
if((state_val_47407 === (12))){
var inst_47371 = (state_47406[(10)]);
var state_47406__$1 = state_47406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47406__$1,(14),inst_47371);
} else {
if((state_val_47407 === (2))){
var state_47406__$1 = state_47406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47406__$1,(4),results);
} else {
if((state_val_47407 === (19))){
var state_47406__$1 = state_47406;
var statearr_47433_50383 = state_47406__$1;
(statearr_47433_50383[(2)] = null);

(statearr_47433_50383[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (11))){
var inst_47371 = (state_47406[(2)]);
var state_47406__$1 = (function (){var statearr_47437 = state_47406;
(statearr_47437[(10)] = inst_47371);

return statearr_47437;
})();
var statearr_47438_50385 = state_47406__$1;
(statearr_47438_50385[(2)] = null);

(statearr_47438_50385[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (9))){
var state_47406__$1 = state_47406;
var statearr_47439_50386 = state_47406__$1;
(statearr_47439_50386[(2)] = null);

(statearr_47439_50386[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (5))){
var state_47406__$1 = state_47406;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47440_50387 = state_47406__$1;
(statearr_47440_50387[(1)] = (8));

} else {
var statearr_47441_50391 = state_47406__$1;
(statearr_47441_50391[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (14))){
var inst_47374 = (state_47406[(8)]);
var inst_47374__$1 = (state_47406[(2)]);
var inst_47376 = (inst_47374__$1 == null);
var inst_47377 = cljs.core.not(inst_47376);
var state_47406__$1 = (function (){var statearr_47444 = state_47406;
(statearr_47444[(8)] = inst_47374__$1);

return statearr_47444;
})();
if(inst_47377){
var statearr_47445_50397 = state_47406__$1;
(statearr_47445_50397[(1)] = (15));

} else {
var statearr_47446_50401 = state_47406__$1;
(statearr_47446_50401[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (16))){
var state_47406__$1 = state_47406;
var statearr_47448_50403 = state_47406__$1;
(statearr_47448_50403[(2)] = false);

(statearr_47448_50403[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (10))){
var inst_47368 = (state_47406[(2)]);
var state_47406__$1 = state_47406;
var statearr_47450_50409 = state_47406__$1;
(statearr_47450_50409[(2)] = inst_47368);

(statearr_47450_50409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (18))){
var inst_47383 = (state_47406[(2)]);
var state_47406__$1 = state_47406;
var statearr_47451_50416 = state_47406__$1;
(statearr_47451_50416[(2)] = inst_47383);

(statearr_47451_50416[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47407 === (8))){
var inst_47365 = cljs.core.async.close_BANG_(to);
var state_47406__$1 = state_47406;
var statearr_47457_50418 = state_47406__$1;
(statearr_47457_50418[(2)] = inst_47365);

(statearr_47457_50418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46386__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46386__auto____0 = (function (){
var statearr_47475 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47475[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46386__auto__);

(statearr_47475[(1)] = (1));

return statearr_47475;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46386__auto____1 = (function (state_47406){
while(true){
var ret_value__46387__auto__ = (function (){try{while(true){
var result__46388__auto__ = switch__46385__auto__(state_47406);
if(cljs.core.keyword_identical_QMARK_(result__46388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46388__auto__;
}
break;
}
}catch (e47486){var ex__46389__auto__ = e47486;
var statearr_47487_50424 = state_47406;
(statearr_47487_50424[(2)] = ex__46389__auto__);


if(cljs.core.seq((state_47406[(4)]))){
var statearr_47494_50425 = state_47406;
(statearr_47494_50425[(1)] = cljs.core.first((state_47406[(4)])));

} else {
throw ex__46389__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50426 = state_47406;
state_47406 = G__50426;
continue;
} else {
return ret_value__46387__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46386__auto__ = function(state_47406){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46386__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46386__auto____1.call(this,state_47406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46386__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46386__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46386__auto__;
})()
})();
var state__46470__auto__ = (function (){var statearr_47507 = f__46469__auto__();
(statearr_47507[(6)] = c__46468__auto__);

return statearr_47507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46470__auto__);
}));

return c__46468__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__47513 = arguments.length;
switch (G__47513) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__47518 = arguments.length;
switch (G__47518) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__47535 = arguments.length;
switch (G__47535) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__46468__auto___50447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46469__auto__ = (function (){var switch__46385__auto__ = (function (state_47569){
var state_val_47570 = (state_47569[(1)]);
if((state_val_47570 === (7))){
var inst_47565 = (state_47569[(2)]);
var state_47569__$1 = state_47569;
var statearr_47572_50451 = state_47569__$1;
(statearr_47572_50451[(2)] = inst_47565);

(statearr_47572_50451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47570 === (1))){
var state_47569__$1 = state_47569;
var statearr_47573_50452 = state_47569__$1;
(statearr_47573_50452[(2)] = null);

(statearr_47573_50452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47570 === (4))){
var inst_47545 = (state_47569[(7)]);
var inst_47545__$1 = (state_47569[(2)]);
var inst_47547 = (inst_47545__$1 == null);
var state_47569__$1 = (function (){var statearr_47578 = state_47569;
(statearr_47578[(7)] = inst_47545__$1);

return statearr_47578;
})();
if(cljs.core.truth_(inst_47547)){
var statearr_47581_50453 = state_47569__$1;
(statearr_47581_50453[(1)] = (5));

} else {
var statearr_47582_50454 = state_47569__$1;
(statearr_47582_50454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47570 === (13))){
var state_47569__$1 = state_47569;
var statearr_47583_50455 = state_47569__$1;
(statearr_47583_50455[(2)] = null);

(statearr_47583_50455[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47570 === (6))){
var inst_47545 = (state_47569[(7)]);
var inst_47552 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47545) : p.call(null,inst_47545));
var state_47569__$1 = state_47569;
if(cljs.core.truth_(inst_47552)){
var statearr_47588_50458 = state_47569__$1;
(statearr_47588_50458[(1)] = (9));

} else {
var statearr_47589_50459 = state_47569__$1;
(statearr_47589_50459[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47570 === (3))){
var inst_47567 = (state_47569[(2)]);
var state_47569__$1 = state_47569;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47569__$1,inst_47567);
} else {
if((state_val_47570 === (12))){
var state_47569__$1 = state_47569;
var statearr_47590_50460 = state_47569__$1;
(statearr_47590_50460[(2)] = null);

(statearr_47590_50460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47570 === (2))){
var state_47569__$1 = state_47569;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47569__$1,(4),ch);
} else {
if((state_val_47570 === (11))){
var inst_47545 = (state_47569[(7)]);
var inst_47556 = (state_47569[(2)]);
var state_47569__$1 = state_47569;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47569__$1,(8),inst_47556,inst_47545);
} else {
if((state_val_47570 === (9))){
var state_47569__$1 = state_47569;
var statearr_47593_50463 = state_47569__$1;
(statearr_47593_50463[(2)] = tc);

(statearr_47593_50463[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47570 === (5))){
var inst_47549 = cljs.core.async.close_BANG_(tc);
var inst_47550 = cljs.core.async.close_BANG_(fc);
var state_47569__$1 = (function (){var statearr_47595 = state_47569;
(statearr_47595[(8)] = inst_47549);

return statearr_47595;
})();
var statearr_47597_50466 = state_47569__$1;
(statearr_47597_50466[(2)] = inst_47550);

(statearr_47597_50466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47570 === (14))){
var inst_47563 = (state_47569[(2)]);
var state_47569__$1 = state_47569;
var statearr_47599_50467 = state_47569__$1;
(statearr_47599_50467[(2)] = inst_47563);

(statearr_47599_50467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47570 === (10))){
var state_47569__$1 = state_47569;
var statearr_47600_50468 = state_47569__$1;
(statearr_47600_50468[(2)] = fc);

(statearr_47600_50468[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47570 === (8))){
var inst_47558 = (state_47569[(2)]);
var state_47569__$1 = state_47569;
if(cljs.core.truth_(inst_47558)){
var statearr_47601_50469 = state_47569__$1;
(statearr_47601_50469[(1)] = (12));

} else {
var statearr_47602_50470 = state_47569__$1;
(statearr_47602_50470[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46386__auto__ = null;
var cljs$core$async$state_machine__46386__auto____0 = (function (){
var statearr_47607 = [null,null,null,null,null,null,null,null,null];
(statearr_47607[(0)] = cljs$core$async$state_machine__46386__auto__);

(statearr_47607[(1)] = (1));

return statearr_47607;
});
var cljs$core$async$state_machine__46386__auto____1 = (function (state_47569){
while(true){
var ret_value__46387__auto__ = (function (){try{while(true){
var result__46388__auto__ = switch__46385__auto__(state_47569);
if(cljs.core.keyword_identical_QMARK_(result__46388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46388__auto__;
}
break;
}
}catch (e47608){var ex__46389__auto__ = e47608;
var statearr_47609_50473 = state_47569;
(statearr_47609_50473[(2)] = ex__46389__auto__);


if(cljs.core.seq((state_47569[(4)]))){
var statearr_47610_50475 = state_47569;
(statearr_47610_50475[(1)] = cljs.core.first((state_47569[(4)])));

} else {
throw ex__46389__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50476 = state_47569;
state_47569 = G__50476;
continue;
} else {
return ret_value__46387__auto__;
}
break;
}
});
cljs$core$async$state_machine__46386__auto__ = function(state_47569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46386__auto____1.call(this,state_47569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46386__auto____0;
cljs$core$async$state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46386__auto____1;
return cljs$core$async$state_machine__46386__auto__;
})()
})();
var state__46470__auto__ = (function (){var statearr_47611 = f__46469__auto__();
(statearr_47611[(6)] = c__46468__auto___50447);

return statearr_47611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46470__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__46468__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46469__auto__ = (function (){var switch__46385__auto__ = (function (state_47648){
var state_val_47649 = (state_47648[(1)]);
if((state_val_47649 === (7))){
var inst_47644 = (state_47648[(2)]);
var state_47648__$1 = state_47648;
var statearr_47650_50481 = state_47648__$1;
(statearr_47650_50481[(2)] = inst_47644);

(statearr_47650_50481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47649 === (1))){
var inst_47619 = init;
var inst_47620 = inst_47619;
var state_47648__$1 = (function (){var statearr_47653 = state_47648;
(statearr_47653[(7)] = inst_47620);

return statearr_47653;
})();
var statearr_47654_50483 = state_47648__$1;
(statearr_47654_50483[(2)] = null);

(statearr_47654_50483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47649 === (4))){
var inst_47627 = (state_47648[(8)]);
var inst_47627__$1 = (state_47648[(2)]);
var inst_47628 = (inst_47627__$1 == null);
var state_47648__$1 = (function (){var statearr_47657 = state_47648;
(statearr_47657[(8)] = inst_47627__$1);

return statearr_47657;
})();
if(cljs.core.truth_(inst_47628)){
var statearr_47658_50485 = state_47648__$1;
(statearr_47658_50485[(1)] = (5));

} else {
var statearr_47659_50486 = state_47648__$1;
(statearr_47659_50486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47649 === (6))){
var inst_47631 = (state_47648[(9)]);
var inst_47620 = (state_47648[(7)]);
var inst_47627 = (state_47648[(8)]);
var inst_47631__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_47620,inst_47627) : f.call(null,inst_47620,inst_47627));
var inst_47632 = cljs.core.reduced_QMARK_(inst_47631__$1);
var state_47648__$1 = (function (){var statearr_47660 = state_47648;
(statearr_47660[(9)] = inst_47631__$1);

return statearr_47660;
})();
if(inst_47632){
var statearr_47661_50487 = state_47648__$1;
(statearr_47661_50487[(1)] = (8));

} else {
var statearr_47666_50488 = state_47648__$1;
(statearr_47666_50488[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47649 === (3))){
var inst_47646 = (state_47648[(2)]);
var state_47648__$1 = state_47648;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47648__$1,inst_47646);
} else {
if((state_val_47649 === (2))){
var state_47648__$1 = state_47648;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47648__$1,(4),ch);
} else {
if((state_val_47649 === (9))){
var inst_47631 = (state_47648[(9)]);
var inst_47620 = inst_47631;
var state_47648__$1 = (function (){var statearr_47673 = state_47648;
(statearr_47673[(7)] = inst_47620);

return statearr_47673;
})();
var statearr_47674_50489 = state_47648__$1;
(statearr_47674_50489[(2)] = null);

(statearr_47674_50489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47649 === (5))){
var inst_47620 = (state_47648[(7)]);
var state_47648__$1 = state_47648;
var statearr_47678_50490 = state_47648__$1;
(statearr_47678_50490[(2)] = inst_47620);

(statearr_47678_50490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47649 === (10))){
var inst_47642 = (state_47648[(2)]);
var state_47648__$1 = state_47648;
var statearr_47680_50492 = state_47648__$1;
(statearr_47680_50492[(2)] = inst_47642);

(statearr_47680_50492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47649 === (8))){
var inst_47631 = (state_47648[(9)]);
var inst_47638 = cljs.core.deref(inst_47631);
var state_47648__$1 = state_47648;
var statearr_47683_50496 = state_47648__$1;
(statearr_47683_50496[(2)] = inst_47638);

(statearr_47683_50496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__46386__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46386__auto____0 = (function (){
var statearr_47692 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47692[(0)] = cljs$core$async$reduce_$_state_machine__46386__auto__);

(statearr_47692[(1)] = (1));

return statearr_47692;
});
var cljs$core$async$reduce_$_state_machine__46386__auto____1 = (function (state_47648){
while(true){
var ret_value__46387__auto__ = (function (){try{while(true){
var result__46388__auto__ = switch__46385__auto__(state_47648);
if(cljs.core.keyword_identical_QMARK_(result__46388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46388__auto__;
}
break;
}
}catch (e47697){var ex__46389__auto__ = e47697;
var statearr_47698_50501 = state_47648;
(statearr_47698_50501[(2)] = ex__46389__auto__);


if(cljs.core.seq((state_47648[(4)]))){
var statearr_47699_50504 = state_47648;
(statearr_47699_50504[(1)] = cljs.core.first((state_47648[(4)])));

} else {
throw ex__46389__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50505 = state_47648;
state_47648 = G__50505;
continue;
} else {
return ret_value__46387__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46386__auto__ = function(state_47648){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46386__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46386__auto____1.call(this,state_47648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46386__auto____0;
cljs$core$async$reduce_$_state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46386__auto____1;
return cljs$core$async$reduce_$_state_machine__46386__auto__;
})()
})();
var state__46470__auto__ = (function (){var statearr_47704 = f__46469__auto__();
(statearr_47704[(6)] = c__46468__auto__);

return statearr_47704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46470__auto__);
}));

return c__46468__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__46468__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46469__auto__ = (function (){var switch__46385__auto__ = (function (state_47715){
var state_val_47716 = (state_47715[(1)]);
if((state_val_47716 === (1))){
var inst_47710 = cljs.core.async.reduce(f__$1,init,ch);
var state_47715__$1 = state_47715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47715__$1,(2),inst_47710);
} else {
if((state_val_47716 === (2))){
var inst_47712 = (state_47715[(2)]);
var inst_47713 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_47712) : f__$1.call(null,inst_47712));
var state_47715__$1 = state_47715;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47715__$1,inst_47713);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__46386__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46386__auto____0 = (function (){
var statearr_47721 = [null,null,null,null,null,null,null];
(statearr_47721[(0)] = cljs$core$async$transduce_$_state_machine__46386__auto__);

(statearr_47721[(1)] = (1));

return statearr_47721;
});
var cljs$core$async$transduce_$_state_machine__46386__auto____1 = (function (state_47715){
while(true){
var ret_value__46387__auto__ = (function (){try{while(true){
var result__46388__auto__ = switch__46385__auto__(state_47715);
if(cljs.core.keyword_identical_QMARK_(result__46388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46388__auto__;
}
break;
}
}catch (e47722){var ex__46389__auto__ = e47722;
var statearr_47724_50524 = state_47715;
(statearr_47724_50524[(2)] = ex__46389__auto__);


if(cljs.core.seq((state_47715[(4)]))){
var statearr_47726_50525 = state_47715;
(statearr_47726_50525[(1)] = cljs.core.first((state_47715[(4)])));

} else {
throw ex__46389__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50526 = state_47715;
state_47715 = G__50526;
continue;
} else {
return ret_value__46387__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46386__auto__ = function(state_47715){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46386__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46386__auto____1.call(this,state_47715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46386__auto____0;
cljs$core$async$transduce_$_state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46386__auto____1;
return cljs$core$async$transduce_$_state_machine__46386__auto__;
})()
})();
var state__46470__auto__ = (function (){var statearr_47732 = f__46469__auto__();
(statearr_47732[(6)] = c__46468__auto__);

return statearr_47732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46470__auto__);
}));

return c__46468__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__47742 = arguments.length;
switch (G__47742) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__46468__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46469__auto__ = (function (){var switch__46385__auto__ = (function (state_47786){
var state_val_47787 = (state_47786[(1)]);
if((state_val_47787 === (7))){
var inst_47767 = (state_47786[(2)]);
var state_47786__$1 = state_47786;
var statearr_47788_50532 = state_47786__$1;
(statearr_47788_50532[(2)] = inst_47767);

(statearr_47788_50532[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47787 === (1))){
var inst_47754 = cljs.core.seq(coll);
var inst_47758 = inst_47754;
var state_47786__$1 = (function (){var statearr_47790 = state_47786;
(statearr_47790[(7)] = inst_47758);

return statearr_47790;
})();
var statearr_47798_50534 = state_47786__$1;
(statearr_47798_50534[(2)] = null);

(statearr_47798_50534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47787 === (4))){
var inst_47758 = (state_47786[(7)]);
var inst_47765 = cljs.core.first(inst_47758);
var state_47786__$1 = state_47786;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47786__$1,(7),ch,inst_47765);
} else {
if((state_val_47787 === (13))){
var inst_47780 = (state_47786[(2)]);
var state_47786__$1 = state_47786;
var statearr_47800_50535 = state_47786__$1;
(statearr_47800_50535[(2)] = inst_47780);

(statearr_47800_50535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47787 === (6))){
var inst_47770 = (state_47786[(2)]);
var state_47786__$1 = state_47786;
if(cljs.core.truth_(inst_47770)){
var statearr_47804_50536 = state_47786__$1;
(statearr_47804_50536[(1)] = (8));

} else {
var statearr_47806_50537 = state_47786__$1;
(statearr_47806_50537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47787 === (3))){
var inst_47784 = (state_47786[(2)]);
var state_47786__$1 = state_47786;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47786__$1,inst_47784);
} else {
if((state_val_47787 === (12))){
var state_47786__$1 = state_47786;
var statearr_47807_50545 = state_47786__$1;
(statearr_47807_50545[(2)] = null);

(statearr_47807_50545[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47787 === (2))){
var inst_47758 = (state_47786[(7)]);
var state_47786__$1 = state_47786;
if(cljs.core.truth_(inst_47758)){
var statearr_47809_50547 = state_47786__$1;
(statearr_47809_50547[(1)] = (4));

} else {
var statearr_47810_50549 = state_47786__$1;
(statearr_47810_50549[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47787 === (11))){
var inst_47777 = cljs.core.async.close_BANG_(ch);
var state_47786__$1 = state_47786;
var statearr_47813_50550 = state_47786__$1;
(statearr_47813_50550[(2)] = inst_47777);

(statearr_47813_50550[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47787 === (9))){
var state_47786__$1 = state_47786;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47814_50552 = state_47786__$1;
(statearr_47814_50552[(1)] = (11));

} else {
var statearr_47815_50553 = state_47786__$1;
(statearr_47815_50553[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47787 === (5))){
var inst_47758 = (state_47786[(7)]);
var state_47786__$1 = state_47786;
var statearr_47819_50555 = state_47786__$1;
(statearr_47819_50555[(2)] = inst_47758);

(statearr_47819_50555[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47787 === (10))){
var inst_47782 = (state_47786[(2)]);
var state_47786__$1 = state_47786;
var statearr_47823_50557 = state_47786__$1;
(statearr_47823_50557[(2)] = inst_47782);

(statearr_47823_50557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47787 === (8))){
var inst_47758 = (state_47786[(7)]);
var inst_47772 = cljs.core.next(inst_47758);
var inst_47758__$1 = inst_47772;
var state_47786__$1 = (function (){var statearr_47826 = state_47786;
(statearr_47826[(7)] = inst_47758__$1);

return statearr_47826;
})();
var statearr_47828_50558 = state_47786__$1;
(statearr_47828_50558[(2)] = null);

(statearr_47828_50558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46386__auto__ = null;
var cljs$core$async$state_machine__46386__auto____0 = (function (){
var statearr_47832 = [null,null,null,null,null,null,null,null];
(statearr_47832[(0)] = cljs$core$async$state_machine__46386__auto__);

(statearr_47832[(1)] = (1));

return statearr_47832;
});
var cljs$core$async$state_machine__46386__auto____1 = (function (state_47786){
while(true){
var ret_value__46387__auto__ = (function (){try{while(true){
var result__46388__auto__ = switch__46385__auto__(state_47786);
if(cljs.core.keyword_identical_QMARK_(result__46388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46388__auto__;
}
break;
}
}catch (e47835){var ex__46389__auto__ = e47835;
var statearr_47836_50559 = state_47786;
(statearr_47836_50559[(2)] = ex__46389__auto__);


if(cljs.core.seq((state_47786[(4)]))){
var statearr_47837_50561 = state_47786;
(statearr_47837_50561[(1)] = cljs.core.first((state_47786[(4)])));

} else {
throw ex__46389__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50563 = state_47786;
state_47786 = G__50563;
continue;
} else {
return ret_value__46387__auto__;
}
break;
}
});
cljs$core$async$state_machine__46386__auto__ = function(state_47786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46386__auto____1.call(this,state_47786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46386__auto____0;
cljs$core$async$state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46386__auto____1;
return cljs$core$async$state_machine__46386__auto__;
})()
})();
var state__46470__auto__ = (function (){var statearr_47843 = f__46469__auto__();
(statearr_47843[(6)] = c__46468__auto__);

return statearr_47843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46470__auto__);
}));

return c__46468__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__47854 = arguments.length;
switch (G__47854) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_50577 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_50577(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_50579 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_50579(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_50583 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_50583(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_50592 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_50592(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47907 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47907 = (function (ch,cs,meta47908){
this.ch = ch;
this.cs = cs;
this.meta47908 = meta47908;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47909,meta47908__$1){
var self__ = this;
var _47909__$1 = this;
return (new cljs.core.async.t_cljs$core$async47907(self__.ch,self__.cs,meta47908__$1));
}));

(cljs.core.async.t_cljs$core$async47907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47909){
var self__ = this;
var _47909__$1 = this;
return self__.meta47908;
}));

(cljs.core.async.t_cljs$core$async47907.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47907.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async47907.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47907.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async47907.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async47907.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async47907.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47908","meta47908",110357554,null)], null);
}));

(cljs.core.async.t_cljs$core$async47907.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47907.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47907");

(cljs.core.async.t_cljs$core$async47907.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async47907");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47907.
 */
cljs.core.async.__GT_t_cljs$core$async47907 = (function cljs$core$async$mult_$___GT_t_cljs$core$async47907(ch__$1,cs__$1,meta47908){
return (new cljs.core.async.t_cljs$core$async47907(ch__$1,cs__$1,meta47908));
});

}

return (new cljs.core.async.t_cljs$core$async47907(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__46468__auto___50596 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46469__auto__ = (function (){var switch__46385__auto__ = (function (state_48106){
var state_val_48108 = (state_48106[(1)]);
if((state_val_48108 === (7))){
var inst_48101 = (state_48106[(2)]);
var state_48106__$1 = state_48106;
var statearr_48118_50597 = state_48106__$1;
(statearr_48118_50597[(2)] = inst_48101);

(statearr_48118_50597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (20))){
var inst_47985 = (state_48106[(7)]);
var inst_47999 = cljs.core.first(inst_47985);
var inst_48000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47999,(0),null);
var inst_48001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47999,(1),null);
var state_48106__$1 = (function (){var statearr_48125 = state_48106;
(statearr_48125[(8)] = inst_48000);

return statearr_48125;
})();
if(cljs.core.truth_(inst_48001)){
var statearr_48126_50611 = state_48106__$1;
(statearr_48126_50611[(1)] = (22));

} else {
var statearr_48129_50612 = state_48106__$1;
(statearr_48129_50612[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (27))){
var inst_48042 = (state_48106[(9)]);
var inst_48047 = (state_48106[(10)]);
var inst_47942 = (state_48106[(11)]);
var inst_48040 = (state_48106[(12)]);
var inst_48047__$1 = cljs.core._nth(inst_48040,inst_48042);
var inst_48050 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48047__$1,inst_47942,done);
var state_48106__$1 = (function (){var statearr_48133 = state_48106;
(statearr_48133[(10)] = inst_48047__$1);

return statearr_48133;
})();
if(cljs.core.truth_(inst_48050)){
var statearr_48134_50619 = state_48106__$1;
(statearr_48134_50619[(1)] = (30));

} else {
var statearr_48135_50620 = state_48106__$1;
(statearr_48135_50620[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (1))){
var state_48106__$1 = state_48106;
var statearr_48136_50621 = state_48106__$1;
(statearr_48136_50621[(2)] = null);

(statearr_48136_50621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (24))){
var inst_47985 = (state_48106[(7)]);
var inst_48009 = (state_48106[(2)]);
var inst_48011 = cljs.core.next(inst_47985);
var inst_47953 = inst_48011;
var inst_47954 = null;
var inst_47955 = (0);
var inst_47956 = (0);
var state_48106__$1 = (function (){var statearr_48137 = state_48106;
(statearr_48137[(13)] = inst_47955);

(statearr_48137[(14)] = inst_47954);

(statearr_48137[(15)] = inst_47956);

(statearr_48137[(16)] = inst_47953);

(statearr_48137[(17)] = inst_48009);

return statearr_48137;
})();
var statearr_48139_50622 = state_48106__$1;
(statearr_48139_50622[(2)] = null);

(statearr_48139_50622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (39))){
var state_48106__$1 = state_48106;
var statearr_48149_50627 = state_48106__$1;
(statearr_48149_50627[(2)] = null);

(statearr_48149_50627[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (4))){
var inst_47942 = (state_48106[(11)]);
var inst_47942__$1 = (state_48106[(2)]);
var inst_47943 = (inst_47942__$1 == null);
var state_48106__$1 = (function (){var statearr_48153 = state_48106;
(statearr_48153[(11)] = inst_47942__$1);

return statearr_48153;
})();
if(cljs.core.truth_(inst_47943)){
var statearr_48157_50631 = state_48106__$1;
(statearr_48157_50631[(1)] = (5));

} else {
var statearr_48158_50632 = state_48106__$1;
(statearr_48158_50632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (15))){
var inst_47955 = (state_48106[(13)]);
var inst_47954 = (state_48106[(14)]);
var inst_47956 = (state_48106[(15)]);
var inst_47953 = (state_48106[(16)]);
var inst_47977 = (state_48106[(2)]);
var inst_47978 = (inst_47956 + (1));
var tmp48144 = inst_47955;
var tmp48145 = inst_47954;
var tmp48146 = inst_47953;
var inst_47953__$1 = tmp48146;
var inst_47954__$1 = tmp48145;
var inst_47955__$1 = tmp48144;
var inst_47956__$1 = inst_47978;
var state_48106__$1 = (function (){var statearr_48159 = state_48106;
(statearr_48159[(13)] = inst_47955__$1);

(statearr_48159[(14)] = inst_47954__$1);

(statearr_48159[(15)] = inst_47956__$1);

(statearr_48159[(16)] = inst_47953__$1);

(statearr_48159[(18)] = inst_47977);

return statearr_48159;
})();
var statearr_48160_50636 = state_48106__$1;
(statearr_48160_50636[(2)] = null);

(statearr_48160_50636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (21))){
var inst_48014 = (state_48106[(2)]);
var state_48106__$1 = state_48106;
var statearr_48164_50638 = state_48106__$1;
(statearr_48164_50638[(2)] = inst_48014);

(statearr_48164_50638[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (31))){
var inst_48047 = (state_48106[(10)]);
var inst_48053 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48047);
var state_48106__$1 = state_48106;
var statearr_48165_50642 = state_48106__$1;
(statearr_48165_50642[(2)] = inst_48053);

(statearr_48165_50642[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (32))){
var inst_48042 = (state_48106[(9)]);
var inst_48039 = (state_48106[(19)]);
var inst_48041 = (state_48106[(20)]);
var inst_48040 = (state_48106[(12)]);
var inst_48055 = (state_48106[(2)]);
var inst_48056 = (inst_48042 + (1));
var tmp48161 = inst_48039;
var tmp48162 = inst_48041;
var tmp48163 = inst_48040;
var inst_48039__$1 = tmp48161;
var inst_48040__$1 = tmp48163;
var inst_48041__$1 = tmp48162;
var inst_48042__$1 = inst_48056;
var state_48106__$1 = (function (){var statearr_48166 = state_48106;
(statearr_48166[(9)] = inst_48042__$1);

(statearr_48166[(21)] = inst_48055);

(statearr_48166[(19)] = inst_48039__$1);

(statearr_48166[(20)] = inst_48041__$1);

(statearr_48166[(12)] = inst_48040__$1);

return statearr_48166;
})();
var statearr_48167_50648 = state_48106__$1;
(statearr_48167_50648[(2)] = null);

(statearr_48167_50648[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (40))){
var inst_48072 = (state_48106[(22)]);
var inst_48078 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48072);
var state_48106__$1 = state_48106;
var statearr_48171_50649 = state_48106__$1;
(statearr_48171_50649[(2)] = inst_48078);

(statearr_48171_50649[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (33))){
var inst_48061 = (state_48106[(23)]);
var inst_48063 = cljs.core.chunked_seq_QMARK_(inst_48061);
var state_48106__$1 = state_48106;
if(inst_48063){
var statearr_48172_50650 = state_48106__$1;
(statearr_48172_50650[(1)] = (36));

} else {
var statearr_48173_50651 = state_48106__$1;
(statearr_48173_50651[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (13))){
var inst_47967 = (state_48106[(24)]);
var inst_47974 = cljs.core.async.close_BANG_(inst_47967);
var state_48106__$1 = state_48106;
var statearr_48176_50652 = state_48106__$1;
(statearr_48176_50652[(2)] = inst_47974);

(statearr_48176_50652[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (22))){
var inst_48000 = (state_48106[(8)]);
var inst_48006 = cljs.core.async.close_BANG_(inst_48000);
var state_48106__$1 = state_48106;
var statearr_48183_50653 = state_48106__$1;
(statearr_48183_50653[(2)] = inst_48006);

(statearr_48183_50653[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (36))){
var inst_48061 = (state_48106[(23)]);
var inst_48067 = cljs.core.chunk_first(inst_48061);
var inst_48068 = cljs.core.chunk_rest(inst_48061);
var inst_48069 = cljs.core.count(inst_48067);
var inst_48039 = inst_48068;
var inst_48040 = inst_48067;
var inst_48041 = inst_48069;
var inst_48042 = (0);
var state_48106__$1 = (function (){var statearr_48184 = state_48106;
(statearr_48184[(9)] = inst_48042);

(statearr_48184[(19)] = inst_48039);

(statearr_48184[(20)] = inst_48041);

(statearr_48184[(12)] = inst_48040);

return statearr_48184;
})();
var statearr_48186_50658 = state_48106__$1;
(statearr_48186_50658[(2)] = null);

(statearr_48186_50658[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (41))){
var inst_48061 = (state_48106[(23)]);
var inst_48080 = (state_48106[(2)]);
var inst_48081 = cljs.core.next(inst_48061);
var inst_48039 = inst_48081;
var inst_48040 = null;
var inst_48041 = (0);
var inst_48042 = (0);
var state_48106__$1 = (function (){var statearr_48188 = state_48106;
(statearr_48188[(9)] = inst_48042);

(statearr_48188[(25)] = inst_48080);

(statearr_48188[(19)] = inst_48039);

(statearr_48188[(20)] = inst_48041);

(statearr_48188[(12)] = inst_48040);

return statearr_48188;
})();
var statearr_48189_50659 = state_48106__$1;
(statearr_48189_50659[(2)] = null);

(statearr_48189_50659[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (43))){
var state_48106__$1 = state_48106;
var statearr_48191_50660 = state_48106__$1;
(statearr_48191_50660[(2)] = null);

(statearr_48191_50660[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (29))){
var inst_48089 = (state_48106[(2)]);
var state_48106__$1 = state_48106;
var statearr_48192_50662 = state_48106__$1;
(statearr_48192_50662[(2)] = inst_48089);

(statearr_48192_50662[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (44))){
var inst_48098 = (state_48106[(2)]);
var state_48106__$1 = (function (){var statearr_48194 = state_48106;
(statearr_48194[(26)] = inst_48098);

return statearr_48194;
})();
var statearr_48195_50665 = state_48106__$1;
(statearr_48195_50665[(2)] = null);

(statearr_48195_50665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (6))){
var inst_48027 = (state_48106[(27)]);
var inst_48026 = cljs.core.deref(cs);
var inst_48027__$1 = cljs.core.keys(inst_48026);
var inst_48028 = cljs.core.count(inst_48027__$1);
var inst_48029 = cljs.core.reset_BANG_(dctr,inst_48028);
var inst_48038 = cljs.core.seq(inst_48027__$1);
var inst_48039 = inst_48038;
var inst_48040 = null;
var inst_48041 = (0);
var inst_48042 = (0);
var state_48106__$1 = (function (){var statearr_48199 = state_48106;
(statearr_48199[(9)] = inst_48042);

(statearr_48199[(28)] = inst_48029);

(statearr_48199[(27)] = inst_48027__$1);

(statearr_48199[(19)] = inst_48039);

(statearr_48199[(20)] = inst_48041);

(statearr_48199[(12)] = inst_48040);

return statearr_48199;
})();
var statearr_48201_50666 = state_48106__$1;
(statearr_48201_50666[(2)] = null);

(statearr_48201_50666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (28))){
var inst_48039 = (state_48106[(19)]);
var inst_48061 = (state_48106[(23)]);
var inst_48061__$1 = cljs.core.seq(inst_48039);
var state_48106__$1 = (function (){var statearr_48205 = state_48106;
(statearr_48205[(23)] = inst_48061__$1);

return statearr_48205;
})();
if(inst_48061__$1){
var statearr_48206_50667 = state_48106__$1;
(statearr_48206_50667[(1)] = (33));

} else {
var statearr_48211_50669 = state_48106__$1;
(statearr_48211_50669[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (25))){
var inst_48042 = (state_48106[(9)]);
var inst_48041 = (state_48106[(20)]);
var inst_48044 = (inst_48042 < inst_48041);
var inst_48045 = inst_48044;
var state_48106__$1 = state_48106;
if(cljs.core.truth_(inst_48045)){
var statearr_48216_50672 = state_48106__$1;
(statearr_48216_50672[(1)] = (27));

} else {
var statearr_48217_50676 = state_48106__$1;
(statearr_48217_50676[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (34))){
var state_48106__$1 = state_48106;
var statearr_48219_50677 = state_48106__$1;
(statearr_48219_50677[(2)] = null);

(statearr_48219_50677[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (17))){
var state_48106__$1 = state_48106;
var statearr_48224_50680 = state_48106__$1;
(statearr_48224_50680[(2)] = null);

(statearr_48224_50680[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (3))){
var inst_48103 = (state_48106[(2)]);
var state_48106__$1 = state_48106;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48106__$1,inst_48103);
} else {
if((state_val_48108 === (12))){
var inst_48019 = (state_48106[(2)]);
var state_48106__$1 = state_48106;
var statearr_48228_50684 = state_48106__$1;
(statearr_48228_50684[(2)] = inst_48019);

(statearr_48228_50684[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (2))){
var state_48106__$1 = state_48106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48106__$1,(4),ch);
} else {
if((state_val_48108 === (23))){
var state_48106__$1 = state_48106;
var statearr_48236_50688 = state_48106__$1;
(statearr_48236_50688[(2)] = null);

(statearr_48236_50688[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (35))){
var inst_48087 = (state_48106[(2)]);
var state_48106__$1 = state_48106;
var statearr_48241_50690 = state_48106__$1;
(statearr_48241_50690[(2)] = inst_48087);

(statearr_48241_50690[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (19))){
var inst_47985 = (state_48106[(7)]);
var inst_47989 = cljs.core.chunk_first(inst_47985);
var inst_47991 = cljs.core.chunk_rest(inst_47985);
var inst_47992 = cljs.core.count(inst_47989);
var inst_47953 = inst_47991;
var inst_47954 = inst_47989;
var inst_47955 = inst_47992;
var inst_47956 = (0);
var state_48106__$1 = (function (){var statearr_48249 = state_48106;
(statearr_48249[(13)] = inst_47955);

(statearr_48249[(14)] = inst_47954);

(statearr_48249[(15)] = inst_47956);

(statearr_48249[(16)] = inst_47953);

return statearr_48249;
})();
var statearr_48254_50699 = state_48106__$1;
(statearr_48254_50699[(2)] = null);

(statearr_48254_50699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (11))){
var inst_47985 = (state_48106[(7)]);
var inst_47953 = (state_48106[(16)]);
var inst_47985__$1 = cljs.core.seq(inst_47953);
var state_48106__$1 = (function (){var statearr_48255 = state_48106;
(statearr_48255[(7)] = inst_47985__$1);

return statearr_48255;
})();
if(inst_47985__$1){
var statearr_48256_50700 = state_48106__$1;
(statearr_48256_50700[(1)] = (16));

} else {
var statearr_48257_50701 = state_48106__$1;
(statearr_48257_50701[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (9))){
var inst_48024 = (state_48106[(2)]);
var state_48106__$1 = state_48106;
var statearr_48258_50702 = state_48106__$1;
(statearr_48258_50702[(2)] = inst_48024);

(statearr_48258_50702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (5))){
var inst_47951 = cljs.core.deref(cs);
var inst_47952 = cljs.core.seq(inst_47951);
var inst_47953 = inst_47952;
var inst_47954 = null;
var inst_47955 = (0);
var inst_47956 = (0);
var state_48106__$1 = (function (){var statearr_48259 = state_48106;
(statearr_48259[(13)] = inst_47955);

(statearr_48259[(14)] = inst_47954);

(statearr_48259[(15)] = inst_47956);

(statearr_48259[(16)] = inst_47953);

return statearr_48259;
})();
var statearr_48260_50705 = state_48106__$1;
(statearr_48260_50705[(2)] = null);

(statearr_48260_50705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (14))){
var state_48106__$1 = state_48106;
var statearr_48262_50706 = state_48106__$1;
(statearr_48262_50706[(2)] = null);

(statearr_48262_50706[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (45))){
var inst_48095 = (state_48106[(2)]);
var state_48106__$1 = state_48106;
var statearr_48264_50708 = state_48106__$1;
(statearr_48264_50708[(2)] = inst_48095);

(statearr_48264_50708[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (26))){
var inst_48027 = (state_48106[(27)]);
var inst_48091 = (state_48106[(2)]);
var inst_48092 = cljs.core.seq(inst_48027);
var state_48106__$1 = (function (){var statearr_48268 = state_48106;
(statearr_48268[(29)] = inst_48091);

return statearr_48268;
})();
if(inst_48092){
var statearr_48270_50717 = state_48106__$1;
(statearr_48270_50717[(1)] = (42));

} else {
var statearr_48271_50719 = state_48106__$1;
(statearr_48271_50719[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (16))){
var inst_47985 = (state_48106[(7)]);
var inst_47987 = cljs.core.chunked_seq_QMARK_(inst_47985);
var state_48106__$1 = state_48106;
if(inst_47987){
var statearr_48272_50724 = state_48106__$1;
(statearr_48272_50724[(1)] = (19));

} else {
var statearr_48273_50725 = state_48106__$1;
(statearr_48273_50725[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (38))){
var inst_48084 = (state_48106[(2)]);
var state_48106__$1 = state_48106;
var statearr_48277_50727 = state_48106__$1;
(statearr_48277_50727[(2)] = inst_48084);

(statearr_48277_50727[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (30))){
var state_48106__$1 = state_48106;
var statearr_48278_50729 = state_48106__$1;
(statearr_48278_50729[(2)] = null);

(statearr_48278_50729[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (10))){
var inst_47954 = (state_48106[(14)]);
var inst_47956 = (state_48106[(15)]);
var inst_47964 = cljs.core._nth(inst_47954,inst_47956);
var inst_47967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47964,(0),null);
var inst_47968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47964,(1),null);
var state_48106__$1 = (function (){var statearr_48279 = state_48106;
(statearr_48279[(24)] = inst_47967);

return statearr_48279;
})();
if(cljs.core.truth_(inst_47968)){
var statearr_48280_50730 = state_48106__$1;
(statearr_48280_50730[(1)] = (13));

} else {
var statearr_48281_50731 = state_48106__$1;
(statearr_48281_50731[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (18))){
var inst_48017 = (state_48106[(2)]);
var state_48106__$1 = state_48106;
var statearr_48282_50733 = state_48106__$1;
(statearr_48282_50733[(2)] = inst_48017);

(statearr_48282_50733[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (42))){
var state_48106__$1 = state_48106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48106__$1,(45),dchan);
} else {
if((state_val_48108 === (37))){
var inst_48072 = (state_48106[(22)]);
var inst_47942 = (state_48106[(11)]);
var inst_48061 = (state_48106[(23)]);
var inst_48072__$1 = cljs.core.first(inst_48061);
var inst_48075 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48072__$1,inst_47942,done);
var state_48106__$1 = (function (){var statearr_48284 = state_48106;
(statearr_48284[(22)] = inst_48072__$1);

return statearr_48284;
})();
if(cljs.core.truth_(inst_48075)){
var statearr_48285_50743 = state_48106__$1;
(statearr_48285_50743[(1)] = (39));

} else {
var statearr_48286_50744 = state_48106__$1;
(statearr_48286_50744[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48108 === (8))){
var inst_47955 = (state_48106[(13)]);
var inst_47956 = (state_48106[(15)]);
var inst_47958 = (inst_47956 < inst_47955);
var inst_47959 = inst_47958;
var state_48106__$1 = state_48106;
if(cljs.core.truth_(inst_47959)){
var statearr_48287_50748 = state_48106__$1;
(statearr_48287_50748[(1)] = (10));

} else {
var statearr_48288_50749 = state_48106__$1;
(statearr_48288_50749[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__46386__auto__ = null;
var cljs$core$async$mult_$_state_machine__46386__auto____0 = (function (){
var statearr_48289 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48289[(0)] = cljs$core$async$mult_$_state_machine__46386__auto__);

(statearr_48289[(1)] = (1));

return statearr_48289;
});
var cljs$core$async$mult_$_state_machine__46386__auto____1 = (function (state_48106){
while(true){
var ret_value__46387__auto__ = (function (){try{while(true){
var result__46388__auto__ = switch__46385__auto__(state_48106);
if(cljs.core.keyword_identical_QMARK_(result__46388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46388__auto__;
}
break;
}
}catch (e48290){var ex__46389__auto__ = e48290;
var statearr_48291_50751 = state_48106;
(statearr_48291_50751[(2)] = ex__46389__auto__);


if(cljs.core.seq((state_48106[(4)]))){
var statearr_48292_50756 = state_48106;
(statearr_48292_50756[(1)] = cljs.core.first((state_48106[(4)])));

} else {
throw ex__46389__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50757 = state_48106;
state_48106 = G__50757;
continue;
} else {
return ret_value__46387__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46386__auto__ = function(state_48106){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46386__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46386__auto____1.call(this,state_48106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46386__auto____0;
cljs$core$async$mult_$_state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46386__auto____1;
return cljs$core$async$mult_$_state_machine__46386__auto__;
})()
})();
var state__46470__auto__ = (function (){var statearr_48294 = f__46469__auto__();
(statearr_48294[(6)] = c__46468__auto___50596);

return statearr_48294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46470__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__48297 = arguments.length;
switch (G__48297) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_50762 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_50762(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_50763 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_50763(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_50771 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_50771(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_50777 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_50777(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_50785 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_50785(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50788 = arguments.length;
var i__4737__auto___50789 = (0);
while(true){
if((i__4737__auto___50789 < len__4736__auto___50788)){
args__4742__auto__.push((arguments[i__4737__auto___50789]));

var G__50793 = (i__4737__auto___50789 + (1));
i__4737__auto___50789 = G__50793;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48339){
var map__48346 = p__48339;
var map__48346__$1 = (((((!((map__48346 == null))))?(((((map__48346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48346):map__48346);
var opts = map__48346__$1;
var statearr_48359_50795 = state;
(statearr_48359_50795[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_48369_50799 = state;
(statearr_48369_50799[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_48378_50801 = state;
(statearr_48378_50801[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48329){
var G__48330 = cljs.core.first(seq48329);
var seq48329__$1 = cljs.core.next(seq48329);
var G__48331 = cljs.core.first(seq48329__$1);
var seq48329__$2 = cljs.core.next(seq48329__$1);
var G__48332 = cljs.core.first(seq48329__$2);
var seq48329__$3 = cljs.core.next(seq48329__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48330,G__48331,G__48332,seq48329__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48411 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48411 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta48412){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta48412 = meta48412;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48413,meta48412__$1){
var self__ = this;
var _48413__$1 = this;
return (new cljs.core.async.t_cljs$core$async48411(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta48412__$1));
}));

(cljs.core.async.t_cljs$core$async48411.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48413){
var self__ = this;
var _48413__$1 = this;
return self__.meta48412;
}));

(cljs.core.async.t_cljs$core$async48411.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48411.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async48411.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48411.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48411.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48411.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48411.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48411.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48411.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta48412","meta48412",1033995458,null)], null);
}));

(cljs.core.async.t_cljs$core$async48411.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48411.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48411");

(cljs.core.async.t_cljs$core$async48411.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48411");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48411.
 */
cljs.core.async.__GT_t_cljs$core$async48411 = (function cljs$core$async$mix_$___GT_t_cljs$core$async48411(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48412){
return (new cljs.core.async.t_cljs$core$async48411(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48412));
});

}

return (new cljs.core.async.t_cljs$core$async48411(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46468__auto___50810 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46469__auto__ = (function (){var switch__46385__auto__ = (function (state_48602){
var state_val_48603 = (state_48602[(1)]);
if((state_val_48603 === (7))){
var inst_48475 = (state_48602[(2)]);
var state_48602__$1 = state_48602;
var statearr_48615_50811 = state_48602__$1;
(statearr_48615_50811[(2)] = inst_48475);

(statearr_48615_50811[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (20))){
var inst_48493 = (state_48602[(7)]);
var state_48602__$1 = state_48602;
var statearr_48621_50812 = state_48602__$1;
(statearr_48621_50812[(2)] = inst_48493);

(statearr_48621_50812[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (27))){
var state_48602__$1 = state_48602;
var statearr_48628_50813 = state_48602__$1;
(statearr_48628_50813[(2)] = null);

(statearr_48628_50813[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (1))){
var inst_48452 = (state_48602[(8)]);
var inst_48452__$1 = calc_state();
var inst_48458 = (inst_48452__$1 == null);
var inst_48459 = cljs.core.not(inst_48458);
var state_48602__$1 = (function (){var statearr_48634 = state_48602;
(statearr_48634[(8)] = inst_48452__$1);

return statearr_48634;
})();
if(inst_48459){
var statearr_48636_50814 = state_48602__$1;
(statearr_48636_50814[(1)] = (2));

} else {
var statearr_48637_50815 = state_48602__$1;
(statearr_48637_50815[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (24))){
var inst_48538 = (state_48602[(9)]);
var inst_48566 = (state_48602[(10)]);
var inst_48524 = (state_48602[(11)]);
var inst_48566__$1 = (inst_48524.cljs$core$IFn$_invoke$arity$1 ? inst_48524.cljs$core$IFn$_invoke$arity$1(inst_48538) : inst_48524.call(null,inst_48538));
var state_48602__$1 = (function (){var statearr_48641 = state_48602;
(statearr_48641[(10)] = inst_48566__$1);

return statearr_48641;
})();
if(cljs.core.truth_(inst_48566__$1)){
var statearr_48642_50816 = state_48602__$1;
(statearr_48642_50816[(1)] = (29));

} else {
var statearr_48643_50818 = state_48602__$1;
(statearr_48643_50818[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (4))){
var inst_48479 = (state_48602[(2)]);
var state_48602__$1 = state_48602;
if(cljs.core.truth_(inst_48479)){
var statearr_48644_50822 = state_48602__$1;
(statearr_48644_50822[(1)] = (8));

} else {
var statearr_48645_50823 = state_48602__$1;
(statearr_48645_50823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (15))){
var inst_48516 = (state_48602[(2)]);
var state_48602__$1 = state_48602;
if(cljs.core.truth_(inst_48516)){
var statearr_48646_50824 = state_48602__$1;
(statearr_48646_50824[(1)] = (19));

} else {
var statearr_48647_50825 = state_48602__$1;
(statearr_48647_50825[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (21))){
var inst_48523 = (state_48602[(12)]);
var inst_48523__$1 = (state_48602[(2)]);
var inst_48524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48523__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48523__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48523__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48602__$1 = (function (){var statearr_48649 = state_48602;
(statearr_48649[(12)] = inst_48523__$1);

(statearr_48649[(13)] = inst_48525);

(statearr_48649[(11)] = inst_48524);

return statearr_48649;
})();
return cljs.core.async.ioc_alts_BANG_(state_48602__$1,(22),inst_48526);
} else {
if((state_val_48603 === (31))){
var inst_48580 = (state_48602[(2)]);
var state_48602__$1 = state_48602;
if(cljs.core.truth_(inst_48580)){
var statearr_48650_50826 = state_48602__$1;
(statearr_48650_50826[(1)] = (32));

} else {
var statearr_48652_50827 = state_48602__$1;
(statearr_48652_50827[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (32))){
var inst_48537 = (state_48602[(14)]);
var state_48602__$1 = state_48602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48602__$1,(35),out,inst_48537);
} else {
if((state_val_48603 === (33))){
var inst_48523 = (state_48602[(12)]);
var inst_48493 = inst_48523;
var state_48602__$1 = (function (){var statearr_48658 = state_48602;
(statearr_48658[(7)] = inst_48493);

return statearr_48658;
})();
var statearr_48659_50836 = state_48602__$1;
(statearr_48659_50836[(2)] = null);

(statearr_48659_50836[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (13))){
var inst_48493 = (state_48602[(7)]);
var inst_48505 = inst_48493.cljs$lang$protocol_mask$partition0$;
var inst_48506 = (inst_48505 & (64));
var inst_48507 = inst_48493.cljs$core$ISeq$;
var inst_48508 = (cljs.core.PROTOCOL_SENTINEL === inst_48507);
var inst_48509 = ((inst_48506) || (inst_48508));
var state_48602__$1 = state_48602;
if(cljs.core.truth_(inst_48509)){
var statearr_48668_50837 = state_48602__$1;
(statearr_48668_50837[(1)] = (16));

} else {
var statearr_48673_50838 = state_48602__$1;
(statearr_48673_50838[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (22))){
var inst_48538 = (state_48602[(9)]);
var inst_48537 = (state_48602[(14)]);
var inst_48535 = (state_48602[(2)]);
var inst_48537__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48535,(0),null);
var inst_48538__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48535,(1),null);
var inst_48543 = (inst_48537__$1 == null);
var inst_48544 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48538__$1,change);
var inst_48547 = ((inst_48543) || (inst_48544));
var state_48602__$1 = (function (){var statearr_48677 = state_48602;
(statearr_48677[(9)] = inst_48538__$1);

(statearr_48677[(14)] = inst_48537__$1);

return statearr_48677;
})();
if(cljs.core.truth_(inst_48547)){
var statearr_48680_50839 = state_48602__$1;
(statearr_48680_50839[(1)] = (23));

} else {
var statearr_48681_50840 = state_48602__$1;
(statearr_48681_50840[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (36))){
var inst_48523 = (state_48602[(12)]);
var inst_48493 = inst_48523;
var state_48602__$1 = (function (){var statearr_48682 = state_48602;
(statearr_48682[(7)] = inst_48493);

return statearr_48682;
})();
var statearr_48683_50841 = state_48602__$1;
(statearr_48683_50841[(2)] = null);

(statearr_48683_50841[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (29))){
var inst_48566 = (state_48602[(10)]);
var state_48602__$1 = state_48602;
var statearr_48685_50846 = state_48602__$1;
(statearr_48685_50846[(2)] = inst_48566);

(statearr_48685_50846[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (6))){
var state_48602__$1 = state_48602;
var statearr_48688_50848 = state_48602__$1;
(statearr_48688_50848[(2)] = false);

(statearr_48688_50848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (28))){
var inst_48558 = (state_48602[(2)]);
var inst_48560 = calc_state();
var inst_48493 = inst_48560;
var state_48602__$1 = (function (){var statearr_48689 = state_48602;
(statearr_48689[(7)] = inst_48493);

(statearr_48689[(15)] = inst_48558);

return statearr_48689;
})();
var statearr_48690_50849 = state_48602__$1;
(statearr_48690_50849[(2)] = null);

(statearr_48690_50849[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (25))){
var inst_48598 = (state_48602[(2)]);
var state_48602__$1 = state_48602;
var statearr_48691_50850 = state_48602__$1;
(statearr_48691_50850[(2)] = inst_48598);

(statearr_48691_50850[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (34))){
var inst_48596 = (state_48602[(2)]);
var state_48602__$1 = state_48602;
var statearr_48692_50853 = state_48602__$1;
(statearr_48692_50853[(2)] = inst_48596);

(statearr_48692_50853[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (17))){
var state_48602__$1 = state_48602;
var statearr_48694_50855 = state_48602__$1;
(statearr_48694_50855[(2)] = false);

(statearr_48694_50855[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (3))){
var state_48602__$1 = state_48602;
var statearr_48696_50856 = state_48602__$1;
(statearr_48696_50856[(2)] = false);

(statearr_48696_50856[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (12))){
var inst_48600 = (state_48602[(2)]);
var state_48602__$1 = state_48602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48602__$1,inst_48600);
} else {
if((state_val_48603 === (2))){
var inst_48452 = (state_48602[(8)]);
var inst_48466 = inst_48452.cljs$lang$protocol_mask$partition0$;
var inst_48467 = (inst_48466 & (64));
var inst_48469 = inst_48452.cljs$core$ISeq$;
var inst_48470 = (cljs.core.PROTOCOL_SENTINEL === inst_48469);
var inst_48471 = ((inst_48467) || (inst_48470));
var state_48602__$1 = state_48602;
if(cljs.core.truth_(inst_48471)){
var statearr_48697_50861 = state_48602__$1;
(statearr_48697_50861[(1)] = (5));

} else {
var statearr_48698_50865 = state_48602__$1;
(statearr_48698_50865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (23))){
var inst_48537 = (state_48602[(14)]);
var inst_48553 = (inst_48537 == null);
var state_48602__$1 = state_48602;
if(cljs.core.truth_(inst_48553)){
var statearr_48699_50867 = state_48602__$1;
(statearr_48699_50867[(1)] = (26));

} else {
var statearr_48700_50869 = state_48602__$1;
(statearr_48700_50869[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (35))){
var inst_48587 = (state_48602[(2)]);
var state_48602__$1 = state_48602;
if(cljs.core.truth_(inst_48587)){
var statearr_48701_50872 = state_48602__$1;
(statearr_48701_50872[(1)] = (36));

} else {
var statearr_48702_50873 = state_48602__$1;
(statearr_48702_50873[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (19))){
var inst_48493 = (state_48602[(7)]);
var inst_48518 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_48493);
var state_48602__$1 = state_48602;
var statearr_48703_50874 = state_48602__$1;
(statearr_48703_50874[(2)] = inst_48518);

(statearr_48703_50874[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (11))){
var inst_48493 = (state_48602[(7)]);
var inst_48502 = (inst_48493 == null);
var inst_48503 = cljs.core.not(inst_48502);
var state_48602__$1 = state_48602;
if(inst_48503){
var statearr_48706_50875 = state_48602__$1;
(statearr_48706_50875[(1)] = (13));

} else {
var statearr_48707_50876 = state_48602__$1;
(statearr_48707_50876[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (9))){
var inst_48452 = (state_48602[(8)]);
var state_48602__$1 = state_48602;
var statearr_48710_50877 = state_48602__$1;
(statearr_48710_50877[(2)] = inst_48452);

(statearr_48710_50877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (5))){
var state_48602__$1 = state_48602;
var statearr_48714_50878 = state_48602__$1;
(statearr_48714_50878[(2)] = true);

(statearr_48714_50878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (14))){
var state_48602__$1 = state_48602;
var statearr_48715_50879 = state_48602__$1;
(statearr_48715_50879[(2)] = false);

(statearr_48715_50879[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (26))){
var inst_48538 = (state_48602[(9)]);
var inst_48555 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_48538);
var state_48602__$1 = state_48602;
var statearr_48716_50880 = state_48602__$1;
(statearr_48716_50880[(2)] = inst_48555);

(statearr_48716_50880[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (16))){
var state_48602__$1 = state_48602;
var statearr_48717_50881 = state_48602__$1;
(statearr_48717_50881[(2)] = true);

(statearr_48717_50881[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (38))){
var inst_48592 = (state_48602[(2)]);
var state_48602__$1 = state_48602;
var statearr_48718_50883 = state_48602__$1;
(statearr_48718_50883[(2)] = inst_48592);

(statearr_48718_50883[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (30))){
var inst_48538 = (state_48602[(9)]);
var inst_48525 = (state_48602[(13)]);
var inst_48524 = (state_48602[(11)]);
var inst_48574 = cljs.core.empty_QMARK_(inst_48524);
var inst_48576 = (inst_48525.cljs$core$IFn$_invoke$arity$1 ? inst_48525.cljs$core$IFn$_invoke$arity$1(inst_48538) : inst_48525.call(null,inst_48538));
var inst_48577 = cljs.core.not(inst_48576);
var inst_48578 = ((inst_48574) && (inst_48577));
var state_48602__$1 = state_48602;
var statearr_48723_50887 = state_48602__$1;
(statearr_48723_50887[(2)] = inst_48578);

(statearr_48723_50887[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (10))){
var inst_48452 = (state_48602[(8)]);
var inst_48485 = (state_48602[(2)]);
var inst_48490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48485,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48491 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48485,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48492 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48485,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48493 = inst_48452;
var state_48602__$1 = (function (){var statearr_48725 = state_48602;
(statearr_48725[(16)] = inst_48492);

(statearr_48725[(17)] = inst_48491);

(statearr_48725[(7)] = inst_48493);

(statearr_48725[(18)] = inst_48490);

return statearr_48725;
})();
var statearr_48726_50888 = state_48602__$1;
(statearr_48726_50888[(2)] = null);

(statearr_48726_50888[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (18))){
var inst_48513 = (state_48602[(2)]);
var state_48602__$1 = state_48602;
var statearr_48727_50892 = state_48602__$1;
(statearr_48727_50892[(2)] = inst_48513);

(statearr_48727_50892[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (37))){
var state_48602__$1 = state_48602;
var statearr_48728_50893 = state_48602__$1;
(statearr_48728_50893[(2)] = null);

(statearr_48728_50893[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (8))){
var inst_48452 = (state_48602[(8)]);
var inst_48482 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_48452);
var state_48602__$1 = state_48602;
var statearr_48730_50894 = state_48602__$1;
(statearr_48730_50894[(2)] = inst_48482);

(statearr_48730_50894[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__46386__auto__ = null;
var cljs$core$async$mix_$_state_machine__46386__auto____0 = (function (){
var statearr_48734 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48734[(0)] = cljs$core$async$mix_$_state_machine__46386__auto__);

(statearr_48734[(1)] = (1));

return statearr_48734;
});
var cljs$core$async$mix_$_state_machine__46386__auto____1 = (function (state_48602){
while(true){
var ret_value__46387__auto__ = (function (){try{while(true){
var result__46388__auto__ = switch__46385__auto__(state_48602);
if(cljs.core.keyword_identical_QMARK_(result__46388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46388__auto__;
}
break;
}
}catch (e48735){var ex__46389__auto__ = e48735;
var statearr_48736_50895 = state_48602;
(statearr_48736_50895[(2)] = ex__46389__auto__);


if(cljs.core.seq((state_48602[(4)]))){
var statearr_48737_50896 = state_48602;
(statearr_48737_50896[(1)] = cljs.core.first((state_48602[(4)])));

} else {
throw ex__46389__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50897 = state_48602;
state_48602 = G__50897;
continue;
} else {
return ret_value__46387__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46386__auto__ = function(state_48602){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46386__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46386__auto____1.call(this,state_48602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46386__auto____0;
cljs$core$async$mix_$_state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46386__auto____1;
return cljs$core$async$mix_$_state_machine__46386__auto__;
})()
})();
var state__46470__auto__ = (function (){var statearr_48738 = f__46469__auto__();
(statearr_48738[(6)] = c__46468__auto___50810);

return statearr_48738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46470__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_50899 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_50899(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_50900 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_50900(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_50906 = (function() {
var G__50907 = null;
var G__50907__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__50907__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__50907 = function(p,v){
switch(arguments.length){
case 1:
return G__50907__1.call(this,p);
case 2:
return G__50907__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__50907.cljs$core$IFn$_invoke$arity$1 = G__50907__1;
G__50907.cljs$core$IFn$_invoke$arity$2 = G__50907__2;
return G__50907;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__48753 = arguments.length;
switch (G__48753) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50906(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50906(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__48763 = arguments.length;
switch (G__48763) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__48760_SHARP_){
if(cljs.core.truth_((p1__48760_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__48760_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__48760_SHARP_.call(null,topic)))){
return p1__48760_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48760_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48767 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48767 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48768){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48768 = meta48768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48769,meta48768__$1){
var self__ = this;
var _48769__$1 = this;
return (new cljs.core.async.t_cljs$core$async48767(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48768__$1));
}));

(cljs.core.async.t_cljs$core$async48767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48769){
var self__ = this;
var _48769__$1 = this;
return self__.meta48768;
}));

(cljs.core.async.t_cljs$core$async48767.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48767.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48767.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48767.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async48767.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async48767.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async48767.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async48767.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48768","meta48768",1756082047,null)], null);
}));

(cljs.core.async.t_cljs$core$async48767.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48767");

(cljs.core.async.t_cljs$core$async48767.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48767");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48767.
 */
cljs.core.async.__GT_t_cljs$core$async48767 = (function cljs$core$async$__GT_t_cljs$core$async48767(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48768){
return (new cljs.core.async.t_cljs$core$async48767(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48768));
});

}

return (new cljs.core.async.t_cljs$core$async48767(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46468__auto___50926 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46469__auto__ = (function (){var switch__46385__auto__ = (function (state_48852){
var state_val_48853 = (state_48852[(1)]);
if((state_val_48853 === (7))){
var inst_48848 = (state_48852[(2)]);
var state_48852__$1 = state_48852;
var statearr_48854_50927 = state_48852__$1;
(statearr_48854_50927[(2)] = inst_48848);

(statearr_48854_50927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (20))){
var state_48852__$1 = state_48852;
var statearr_48855_50928 = state_48852__$1;
(statearr_48855_50928[(2)] = null);

(statearr_48855_50928[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (1))){
var state_48852__$1 = state_48852;
var statearr_48857_50929 = state_48852__$1;
(statearr_48857_50929[(2)] = null);

(statearr_48857_50929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (24))){
var inst_48831 = (state_48852[(7)]);
var inst_48840 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_48831);
var state_48852__$1 = state_48852;
var statearr_48858_50930 = state_48852__$1;
(statearr_48858_50930[(2)] = inst_48840);

(statearr_48858_50930[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (4))){
var inst_48782 = (state_48852[(8)]);
var inst_48782__$1 = (state_48852[(2)]);
var inst_48783 = (inst_48782__$1 == null);
var state_48852__$1 = (function (){var statearr_48859 = state_48852;
(statearr_48859[(8)] = inst_48782__$1);

return statearr_48859;
})();
if(cljs.core.truth_(inst_48783)){
var statearr_48860_50932 = state_48852__$1;
(statearr_48860_50932[(1)] = (5));

} else {
var statearr_48861_50933 = state_48852__$1;
(statearr_48861_50933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (15))){
var inst_48825 = (state_48852[(2)]);
var state_48852__$1 = state_48852;
var statearr_48862_50934 = state_48852__$1;
(statearr_48862_50934[(2)] = inst_48825);

(statearr_48862_50934[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (21))){
var inst_48845 = (state_48852[(2)]);
var state_48852__$1 = (function (){var statearr_48863 = state_48852;
(statearr_48863[(9)] = inst_48845);

return statearr_48863;
})();
var statearr_48864_50935 = state_48852__$1;
(statearr_48864_50935[(2)] = null);

(statearr_48864_50935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (13))){
var inst_48807 = (state_48852[(10)]);
var inst_48809 = cljs.core.chunked_seq_QMARK_(inst_48807);
var state_48852__$1 = state_48852;
if(inst_48809){
var statearr_48865_50936 = state_48852__$1;
(statearr_48865_50936[(1)] = (16));

} else {
var statearr_48866_50937 = state_48852__$1;
(statearr_48866_50937[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (22))){
var inst_48837 = (state_48852[(2)]);
var state_48852__$1 = state_48852;
if(cljs.core.truth_(inst_48837)){
var statearr_48869_50946 = state_48852__$1;
(statearr_48869_50946[(1)] = (23));

} else {
var statearr_48871_50947 = state_48852__$1;
(statearr_48871_50947[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (6))){
var inst_48833 = (state_48852[(11)]);
var inst_48831 = (state_48852[(7)]);
var inst_48782 = (state_48852[(8)]);
var inst_48831__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_48782) : topic_fn.call(null,inst_48782));
var inst_48832 = cljs.core.deref(mults);
var inst_48833__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48832,inst_48831__$1);
var state_48852__$1 = (function (){var statearr_48873 = state_48852;
(statearr_48873[(11)] = inst_48833__$1);

(statearr_48873[(7)] = inst_48831__$1);

return statearr_48873;
})();
if(cljs.core.truth_(inst_48833__$1)){
var statearr_48874_50954 = state_48852__$1;
(statearr_48874_50954[(1)] = (19));

} else {
var statearr_48875_50961 = state_48852__$1;
(statearr_48875_50961[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (25))){
var inst_48842 = (state_48852[(2)]);
var state_48852__$1 = state_48852;
var statearr_48878_50962 = state_48852__$1;
(statearr_48878_50962[(2)] = inst_48842);

(statearr_48878_50962[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (17))){
var inst_48807 = (state_48852[(10)]);
var inst_48816 = cljs.core.first(inst_48807);
var inst_48817 = cljs.core.async.muxch_STAR_(inst_48816);
var inst_48818 = cljs.core.async.close_BANG_(inst_48817);
var inst_48819 = cljs.core.next(inst_48807);
var inst_48792 = inst_48819;
var inst_48793 = null;
var inst_48794 = (0);
var inst_48795 = (0);
var state_48852__$1 = (function (){var statearr_48883 = state_48852;
(statearr_48883[(12)] = inst_48793);

(statearr_48883[(13)] = inst_48818);

(statearr_48883[(14)] = inst_48794);

(statearr_48883[(15)] = inst_48795);

(statearr_48883[(16)] = inst_48792);

return statearr_48883;
})();
var statearr_48886_50963 = state_48852__$1;
(statearr_48886_50963[(2)] = null);

(statearr_48886_50963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (3))){
var inst_48850 = (state_48852[(2)]);
var state_48852__$1 = state_48852;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48852__$1,inst_48850);
} else {
if((state_val_48853 === (12))){
var inst_48827 = (state_48852[(2)]);
var state_48852__$1 = state_48852;
var statearr_48887_50972 = state_48852__$1;
(statearr_48887_50972[(2)] = inst_48827);

(statearr_48887_50972[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (2))){
var state_48852__$1 = state_48852;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48852__$1,(4),ch);
} else {
if((state_val_48853 === (23))){
var state_48852__$1 = state_48852;
var statearr_48888_50985 = state_48852__$1;
(statearr_48888_50985[(2)] = null);

(statearr_48888_50985[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (19))){
var inst_48833 = (state_48852[(11)]);
var inst_48782 = (state_48852[(8)]);
var inst_48835 = cljs.core.async.muxch_STAR_(inst_48833);
var state_48852__$1 = state_48852;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48852__$1,(22),inst_48835,inst_48782);
} else {
if((state_val_48853 === (11))){
var inst_48807 = (state_48852[(10)]);
var inst_48792 = (state_48852[(16)]);
var inst_48807__$1 = cljs.core.seq(inst_48792);
var state_48852__$1 = (function (){var statearr_48890 = state_48852;
(statearr_48890[(10)] = inst_48807__$1);

return statearr_48890;
})();
if(inst_48807__$1){
var statearr_48891_50999 = state_48852__$1;
(statearr_48891_50999[(1)] = (13));

} else {
var statearr_48893_51001 = state_48852__$1;
(statearr_48893_51001[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (9))){
var inst_48829 = (state_48852[(2)]);
var state_48852__$1 = state_48852;
var statearr_48894_51002 = state_48852__$1;
(statearr_48894_51002[(2)] = inst_48829);

(statearr_48894_51002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (5))){
var inst_48789 = cljs.core.deref(mults);
var inst_48790 = cljs.core.vals(inst_48789);
var inst_48791 = cljs.core.seq(inst_48790);
var inst_48792 = inst_48791;
var inst_48793 = null;
var inst_48794 = (0);
var inst_48795 = (0);
var state_48852__$1 = (function (){var statearr_48895 = state_48852;
(statearr_48895[(12)] = inst_48793);

(statearr_48895[(14)] = inst_48794);

(statearr_48895[(15)] = inst_48795);

(statearr_48895[(16)] = inst_48792);

return statearr_48895;
})();
var statearr_48896_51006 = state_48852__$1;
(statearr_48896_51006[(2)] = null);

(statearr_48896_51006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (14))){
var state_48852__$1 = state_48852;
var statearr_48901_51009 = state_48852__$1;
(statearr_48901_51009[(2)] = null);

(statearr_48901_51009[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (16))){
var inst_48807 = (state_48852[(10)]);
var inst_48811 = cljs.core.chunk_first(inst_48807);
var inst_48812 = cljs.core.chunk_rest(inst_48807);
var inst_48813 = cljs.core.count(inst_48811);
var inst_48792 = inst_48812;
var inst_48793 = inst_48811;
var inst_48794 = inst_48813;
var inst_48795 = (0);
var state_48852__$1 = (function (){var statearr_48903 = state_48852;
(statearr_48903[(12)] = inst_48793);

(statearr_48903[(14)] = inst_48794);

(statearr_48903[(15)] = inst_48795);

(statearr_48903[(16)] = inst_48792);

return statearr_48903;
})();
var statearr_48904_51014 = state_48852__$1;
(statearr_48904_51014[(2)] = null);

(statearr_48904_51014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (10))){
var inst_48793 = (state_48852[(12)]);
var inst_48794 = (state_48852[(14)]);
var inst_48795 = (state_48852[(15)]);
var inst_48792 = (state_48852[(16)]);
var inst_48801 = cljs.core._nth(inst_48793,inst_48795);
var inst_48802 = cljs.core.async.muxch_STAR_(inst_48801);
var inst_48803 = cljs.core.async.close_BANG_(inst_48802);
var inst_48804 = (inst_48795 + (1));
var tmp48898 = inst_48793;
var tmp48899 = inst_48794;
var tmp48900 = inst_48792;
var inst_48792__$1 = tmp48900;
var inst_48793__$1 = tmp48898;
var inst_48794__$1 = tmp48899;
var inst_48795__$1 = inst_48804;
var state_48852__$1 = (function (){var statearr_48905 = state_48852;
(statearr_48905[(12)] = inst_48793__$1);

(statearr_48905[(14)] = inst_48794__$1);

(statearr_48905[(17)] = inst_48803);

(statearr_48905[(15)] = inst_48795__$1);

(statearr_48905[(16)] = inst_48792__$1);

return statearr_48905;
})();
var statearr_48906_51018 = state_48852__$1;
(statearr_48906_51018[(2)] = null);

(statearr_48906_51018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (18))){
var inst_48822 = (state_48852[(2)]);
var state_48852__$1 = state_48852;
var statearr_48907_51021 = state_48852__$1;
(statearr_48907_51021[(2)] = inst_48822);

(statearr_48907_51021[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (8))){
var inst_48794 = (state_48852[(14)]);
var inst_48795 = (state_48852[(15)]);
var inst_48797 = (inst_48795 < inst_48794);
var inst_48798 = inst_48797;
var state_48852__$1 = state_48852;
if(cljs.core.truth_(inst_48798)){
var statearr_48909_51022 = state_48852__$1;
(statearr_48909_51022[(1)] = (10));

} else {
var statearr_48910_51026 = state_48852__$1;
(statearr_48910_51026[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46386__auto__ = null;
var cljs$core$async$state_machine__46386__auto____0 = (function (){
var statearr_48912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48912[(0)] = cljs$core$async$state_machine__46386__auto__);

(statearr_48912[(1)] = (1));

return statearr_48912;
});
var cljs$core$async$state_machine__46386__auto____1 = (function (state_48852){
while(true){
var ret_value__46387__auto__ = (function (){try{while(true){
var result__46388__auto__ = switch__46385__auto__(state_48852);
if(cljs.core.keyword_identical_QMARK_(result__46388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46388__auto__;
}
break;
}
}catch (e48913){var ex__46389__auto__ = e48913;
var statearr_48914_51030 = state_48852;
(statearr_48914_51030[(2)] = ex__46389__auto__);


if(cljs.core.seq((state_48852[(4)]))){
var statearr_48915_51031 = state_48852;
(statearr_48915_51031[(1)] = cljs.core.first((state_48852[(4)])));

} else {
throw ex__46389__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51034 = state_48852;
state_48852 = G__51034;
continue;
} else {
return ret_value__46387__auto__;
}
break;
}
});
cljs$core$async$state_machine__46386__auto__ = function(state_48852){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46386__auto____1.call(this,state_48852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46386__auto____0;
cljs$core$async$state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46386__auto____1;
return cljs$core$async$state_machine__46386__auto__;
})()
})();
var state__46470__auto__ = (function (){var statearr_48924 = f__46469__auto__();
(statearr_48924[(6)] = c__46468__auto___50926);

return statearr_48924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46470__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__48931 = arguments.length;
switch (G__48931) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__48942 = arguments.length;
switch (G__48942) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__48948 = arguments.length;
switch (G__48948) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__46468__auto___51050 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46469__auto__ = (function (){var switch__46385__auto__ = (function (state_49023){
var state_val_49024 = (state_49023[(1)]);
if((state_val_49024 === (7))){
var state_49023__$1 = state_49023;
var statearr_49026_51054 = state_49023__$1;
(statearr_49026_51054[(2)] = null);

(statearr_49026_51054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49024 === (1))){
var state_49023__$1 = state_49023;
var statearr_49028_51055 = state_49023__$1;
(statearr_49028_51055[(2)] = null);

(statearr_49028_51055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49024 === (4))){
var inst_48961 = (state_49023[(7)]);
var inst_48962 = (state_49023[(8)]);
var inst_48964 = (inst_48962 < inst_48961);
var state_49023__$1 = state_49023;
if(cljs.core.truth_(inst_48964)){
var statearr_49029_51057 = state_49023__$1;
(statearr_49029_51057[(1)] = (6));

} else {
var statearr_49030_51058 = state_49023__$1;
(statearr_49030_51058[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49024 === (15))){
var inst_48992 = (state_49023[(9)]);
var inst_49002 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_48992);
var state_49023__$1 = state_49023;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49023__$1,(17),out,inst_49002);
} else {
if((state_val_49024 === (13))){
var inst_48992 = (state_49023[(9)]);
var inst_48992__$1 = (state_49023[(2)]);
var inst_48993 = cljs.core.some(cljs.core.nil_QMARK_,inst_48992__$1);
var state_49023__$1 = (function (){var statearr_49034 = state_49023;
(statearr_49034[(9)] = inst_48992__$1);

return statearr_49034;
})();
if(cljs.core.truth_(inst_48993)){
var statearr_49035_51066 = state_49023__$1;
(statearr_49035_51066[(1)] = (14));

} else {
var statearr_49036_51067 = state_49023__$1;
(statearr_49036_51067[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49024 === (6))){
var state_49023__$1 = state_49023;
var statearr_49039_51073 = state_49023__$1;
(statearr_49039_51073[(2)] = null);

(statearr_49039_51073[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49024 === (17))){
var inst_49004 = (state_49023[(2)]);
var state_49023__$1 = (function (){var statearr_49045 = state_49023;
(statearr_49045[(10)] = inst_49004);

return statearr_49045;
})();
var statearr_49046_51078 = state_49023__$1;
(statearr_49046_51078[(2)] = null);

(statearr_49046_51078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49024 === (3))){
var inst_49009 = (state_49023[(2)]);
var state_49023__$1 = state_49023;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49023__$1,inst_49009);
} else {
if((state_val_49024 === (12))){
var _ = (function (){var statearr_49047 = state_49023;
(statearr_49047[(4)] = cljs.core.rest((state_49023[(4)])));

return statearr_49047;
})();
var state_49023__$1 = state_49023;
var ex49043 = (state_49023__$1[(2)]);
var statearr_49048_51083 = state_49023__$1;
(statearr_49048_51083[(5)] = ex49043);


if((ex49043 instanceof Object)){
var statearr_49052_51084 = state_49023__$1;
(statearr_49052_51084[(1)] = (11));

(statearr_49052_51084[(5)] = null);

} else {
throw ex49043;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49024 === (2))){
var inst_48960 = cljs.core.reset_BANG_(dctr,cnt);
var inst_48961 = cnt;
var inst_48962 = (0);
var state_49023__$1 = (function (){var statearr_49060 = state_49023;
(statearr_49060[(7)] = inst_48961);

(statearr_49060[(11)] = inst_48960);

(statearr_49060[(8)] = inst_48962);

return statearr_49060;
})();
var statearr_49061_51093 = state_49023__$1;
(statearr_49061_51093[(2)] = null);

(statearr_49061_51093[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49024 === (11))){
var inst_48968 = (state_49023[(2)]);
var inst_48970 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_49023__$1 = (function (){var statearr_49065 = state_49023;
(statearr_49065[(12)] = inst_48968);

return statearr_49065;
})();
var statearr_49067_51100 = state_49023__$1;
(statearr_49067_51100[(2)] = inst_48970);

(statearr_49067_51100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49024 === (9))){
var inst_48962 = (state_49023[(8)]);
var _ = (function (){var statearr_49068 = state_49023;
(statearr_49068[(4)] = cljs.core.cons((12),(state_49023[(4)])));

return statearr_49068;
})();
var inst_48977 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_48962) : chs__$1.call(null,inst_48962));
var inst_48979 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_48962) : done.call(null,inst_48962));
var inst_48980 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_48977,inst_48979);
var ___$1 = (function (){var statearr_49070 = state_49023;
(statearr_49070[(4)] = cljs.core.rest((state_49023[(4)])));

return statearr_49070;
})();
var state_49023__$1 = state_49023;
var statearr_49074_51108 = state_49023__$1;
(statearr_49074_51108[(2)] = inst_48980);

(statearr_49074_51108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49024 === (5))){
var inst_48990 = (state_49023[(2)]);
var state_49023__$1 = (function (){var statearr_49075 = state_49023;
(statearr_49075[(13)] = inst_48990);

return statearr_49075;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49023__$1,(13),dchan);
} else {
if((state_val_49024 === (14))){
var inst_48997 = cljs.core.async.close_BANG_(out);
var state_49023__$1 = state_49023;
var statearr_49079_51114 = state_49023__$1;
(statearr_49079_51114[(2)] = inst_48997);

(statearr_49079_51114[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49024 === (16))){
var inst_49007 = (state_49023[(2)]);
var state_49023__$1 = state_49023;
var statearr_49081_51116 = state_49023__$1;
(statearr_49081_51116[(2)] = inst_49007);

(statearr_49081_51116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49024 === (10))){
var inst_48962 = (state_49023[(8)]);
var inst_48983 = (state_49023[(2)]);
var inst_48984 = (inst_48962 + (1));
var inst_48962__$1 = inst_48984;
var state_49023__$1 = (function (){var statearr_49082 = state_49023;
(statearr_49082[(8)] = inst_48962__$1);

(statearr_49082[(14)] = inst_48983);

return statearr_49082;
})();
var statearr_49083_51118 = state_49023__$1;
(statearr_49083_51118[(2)] = null);

(statearr_49083_51118[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49024 === (8))){
var inst_48988 = (state_49023[(2)]);
var state_49023__$1 = state_49023;
var statearr_49086_51124 = state_49023__$1;
(statearr_49086_51124[(2)] = inst_48988);

(statearr_49086_51124[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46386__auto__ = null;
var cljs$core$async$state_machine__46386__auto____0 = (function (){
var statearr_49090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49090[(0)] = cljs$core$async$state_machine__46386__auto__);

(statearr_49090[(1)] = (1));

return statearr_49090;
});
var cljs$core$async$state_machine__46386__auto____1 = (function (state_49023){
while(true){
var ret_value__46387__auto__ = (function (){try{while(true){
var result__46388__auto__ = switch__46385__auto__(state_49023);
if(cljs.core.keyword_identical_QMARK_(result__46388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46388__auto__;
}
break;
}
}catch (e49091){var ex__46389__auto__ = e49091;
var statearr_49092_51148 = state_49023;
(statearr_49092_51148[(2)] = ex__46389__auto__);


if(cljs.core.seq((state_49023[(4)]))){
var statearr_49093_51151 = state_49023;
(statearr_49093_51151[(1)] = cljs.core.first((state_49023[(4)])));

} else {
throw ex__46389__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51157 = state_49023;
state_49023 = G__51157;
continue;
} else {
return ret_value__46387__auto__;
}
break;
}
});
cljs$core$async$state_machine__46386__auto__ = function(state_49023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46386__auto____1.call(this,state_49023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46386__auto____0;
cljs$core$async$state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46386__auto____1;
return cljs$core$async$state_machine__46386__auto__;
})()
})();
var state__46470__auto__ = (function (){var statearr_49096 = f__46469__auto__();
(statearr_49096[(6)] = c__46468__auto___51050);

return statearr_49096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46470__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__49103 = arguments.length;
switch (G__49103) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46468__auto___51162 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46469__auto__ = (function (){var switch__46385__auto__ = (function (state_49141){
var state_val_49142 = (state_49141[(1)]);
if((state_val_49142 === (7))){
var inst_49116 = (state_49141[(7)]);
var inst_49115 = (state_49141[(8)]);
var inst_49115__$1 = (state_49141[(2)]);
var inst_49116__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49115__$1,(0),null);
var inst_49117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49115__$1,(1),null);
var inst_49118 = (inst_49116__$1 == null);
var state_49141__$1 = (function (){var statearr_49144 = state_49141;
(statearr_49144[(7)] = inst_49116__$1);

(statearr_49144[(9)] = inst_49117);

(statearr_49144[(8)] = inst_49115__$1);

return statearr_49144;
})();
if(cljs.core.truth_(inst_49118)){
var statearr_49145_51166 = state_49141__$1;
(statearr_49145_51166[(1)] = (8));

} else {
var statearr_49146_51167 = state_49141__$1;
(statearr_49146_51167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49142 === (1))){
var inst_49104 = cljs.core.vec(chs);
var inst_49105 = inst_49104;
var state_49141__$1 = (function (){var statearr_49148 = state_49141;
(statearr_49148[(10)] = inst_49105);

return statearr_49148;
})();
var statearr_49149_51172 = state_49141__$1;
(statearr_49149_51172[(2)] = null);

(statearr_49149_51172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49142 === (4))){
var inst_49105 = (state_49141[(10)]);
var state_49141__$1 = state_49141;
return cljs.core.async.ioc_alts_BANG_(state_49141__$1,(7),inst_49105);
} else {
if((state_val_49142 === (6))){
var inst_49137 = (state_49141[(2)]);
var state_49141__$1 = state_49141;
var statearr_49152_51179 = state_49141__$1;
(statearr_49152_51179[(2)] = inst_49137);

(statearr_49152_51179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49142 === (3))){
var inst_49139 = (state_49141[(2)]);
var state_49141__$1 = state_49141;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49141__$1,inst_49139);
} else {
if((state_val_49142 === (2))){
var inst_49105 = (state_49141[(10)]);
var inst_49107 = cljs.core.count(inst_49105);
var inst_49108 = (inst_49107 > (0));
var state_49141__$1 = state_49141;
if(cljs.core.truth_(inst_49108)){
var statearr_49155_51180 = state_49141__$1;
(statearr_49155_51180[(1)] = (4));

} else {
var statearr_49156_51181 = state_49141__$1;
(statearr_49156_51181[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49142 === (11))){
var inst_49105 = (state_49141[(10)]);
var inst_49129 = (state_49141[(2)]);
var tmp49154 = inst_49105;
var inst_49105__$1 = tmp49154;
var state_49141__$1 = (function (){var statearr_49162 = state_49141;
(statearr_49162[(11)] = inst_49129);

(statearr_49162[(10)] = inst_49105__$1);

return statearr_49162;
})();
var statearr_49163_51182 = state_49141__$1;
(statearr_49163_51182[(2)] = null);

(statearr_49163_51182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49142 === (9))){
var inst_49116 = (state_49141[(7)]);
var state_49141__$1 = state_49141;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49141__$1,(11),out,inst_49116);
} else {
if((state_val_49142 === (5))){
var inst_49135 = cljs.core.async.close_BANG_(out);
var state_49141__$1 = state_49141;
var statearr_49167_51183 = state_49141__$1;
(statearr_49167_51183[(2)] = inst_49135);

(statearr_49167_51183[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49142 === (10))){
var inst_49133 = (state_49141[(2)]);
var state_49141__$1 = state_49141;
var statearr_49168_51184 = state_49141__$1;
(statearr_49168_51184[(2)] = inst_49133);

(statearr_49168_51184[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49142 === (8))){
var inst_49116 = (state_49141[(7)]);
var inst_49117 = (state_49141[(9)]);
var inst_49115 = (state_49141[(8)]);
var inst_49105 = (state_49141[(10)]);
var inst_49122 = (function (){var cs = inst_49105;
var vec__49110 = inst_49115;
var v = inst_49116;
var c = inst_49117;
return (function (p1__49101_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__49101_SHARP_);
});
})();
var inst_49124 = cljs.core.filterv(inst_49122,inst_49105);
var inst_49105__$1 = inst_49124;
var state_49141__$1 = (function (){var statearr_49169 = state_49141;
(statearr_49169[(10)] = inst_49105__$1);

return statearr_49169;
})();
var statearr_49171_51191 = state_49141__$1;
(statearr_49171_51191[(2)] = null);

(statearr_49171_51191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46386__auto__ = null;
var cljs$core$async$state_machine__46386__auto____0 = (function (){
var statearr_49174 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49174[(0)] = cljs$core$async$state_machine__46386__auto__);

(statearr_49174[(1)] = (1));

return statearr_49174;
});
var cljs$core$async$state_machine__46386__auto____1 = (function (state_49141){
while(true){
var ret_value__46387__auto__ = (function (){try{while(true){
var result__46388__auto__ = switch__46385__auto__(state_49141);
if(cljs.core.keyword_identical_QMARK_(result__46388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46388__auto__;
}
break;
}
}catch (e49176){var ex__46389__auto__ = e49176;
var statearr_49177_51195 = state_49141;
(statearr_49177_51195[(2)] = ex__46389__auto__);


if(cljs.core.seq((state_49141[(4)]))){
var statearr_49178_51196 = state_49141;
(statearr_49178_51196[(1)] = cljs.core.first((state_49141[(4)])));

} else {
throw ex__46389__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51200 = state_49141;
state_49141 = G__51200;
continue;
} else {
return ret_value__46387__auto__;
}
break;
}
});
cljs$core$async$state_machine__46386__auto__ = function(state_49141){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46386__auto____1.call(this,state_49141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46386__auto____0;
cljs$core$async$state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46386__auto____1;
return cljs$core$async$state_machine__46386__auto__;
})()
})();
var state__46470__auto__ = (function (){var statearr_49179 = f__46469__auto__();
(statearr_49179[(6)] = c__46468__auto___51162);

return statearr_49179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46470__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__49185 = arguments.length;
switch (G__49185) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46468__auto___51208 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46469__auto__ = (function (){var switch__46385__auto__ = (function (state_49219){
var state_val_49220 = (state_49219[(1)]);
if((state_val_49220 === (7))){
var inst_49201 = (state_49219[(7)]);
var inst_49201__$1 = (state_49219[(2)]);
var inst_49202 = (inst_49201__$1 == null);
var inst_49203 = cljs.core.not(inst_49202);
var state_49219__$1 = (function (){var statearr_49224 = state_49219;
(statearr_49224[(7)] = inst_49201__$1);

return statearr_49224;
})();
if(inst_49203){
var statearr_49226_51209 = state_49219__$1;
(statearr_49226_51209[(1)] = (8));

} else {
var statearr_49227_51210 = state_49219__$1;
(statearr_49227_51210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49220 === (1))){
var inst_49195 = (0);
var state_49219__$1 = (function (){var statearr_49228 = state_49219;
(statearr_49228[(8)] = inst_49195);

return statearr_49228;
})();
var statearr_49229_51219 = state_49219__$1;
(statearr_49229_51219[(2)] = null);

(statearr_49229_51219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49220 === (4))){
var state_49219__$1 = state_49219;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49219__$1,(7),ch);
} else {
if((state_val_49220 === (6))){
var inst_49214 = (state_49219[(2)]);
var state_49219__$1 = state_49219;
var statearr_49236_51221 = state_49219__$1;
(statearr_49236_51221[(2)] = inst_49214);

(statearr_49236_51221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49220 === (3))){
var inst_49216 = (state_49219[(2)]);
var inst_49217 = cljs.core.async.close_BANG_(out);
var state_49219__$1 = (function (){var statearr_49239 = state_49219;
(statearr_49239[(9)] = inst_49216);

return statearr_49239;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49219__$1,inst_49217);
} else {
if((state_val_49220 === (2))){
var inst_49195 = (state_49219[(8)]);
var inst_49197 = (inst_49195 < n);
var state_49219__$1 = state_49219;
if(cljs.core.truth_(inst_49197)){
var statearr_49240_51222 = state_49219__$1;
(statearr_49240_51222[(1)] = (4));

} else {
var statearr_49241_51223 = state_49219__$1;
(statearr_49241_51223[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49220 === (11))){
var inst_49195 = (state_49219[(8)]);
var inst_49206 = (state_49219[(2)]);
var inst_49207 = (inst_49195 + (1));
var inst_49195__$1 = inst_49207;
var state_49219__$1 = (function (){var statearr_49244 = state_49219;
(statearr_49244[(8)] = inst_49195__$1);

(statearr_49244[(10)] = inst_49206);

return statearr_49244;
})();
var statearr_49246_51224 = state_49219__$1;
(statearr_49246_51224[(2)] = null);

(statearr_49246_51224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49220 === (9))){
var state_49219__$1 = state_49219;
var statearr_49248_51225 = state_49219__$1;
(statearr_49248_51225[(2)] = null);

(statearr_49248_51225[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49220 === (5))){
var state_49219__$1 = state_49219;
var statearr_49250_51226 = state_49219__$1;
(statearr_49250_51226[(2)] = null);

(statearr_49250_51226[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49220 === (10))){
var inst_49211 = (state_49219[(2)]);
var state_49219__$1 = state_49219;
var statearr_49251_51227 = state_49219__$1;
(statearr_49251_51227[(2)] = inst_49211);

(statearr_49251_51227[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49220 === (8))){
var inst_49201 = (state_49219[(7)]);
var state_49219__$1 = state_49219;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49219__$1,(11),out,inst_49201);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46386__auto__ = null;
var cljs$core$async$state_machine__46386__auto____0 = (function (){
var statearr_49254 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49254[(0)] = cljs$core$async$state_machine__46386__auto__);

(statearr_49254[(1)] = (1));

return statearr_49254;
});
var cljs$core$async$state_machine__46386__auto____1 = (function (state_49219){
while(true){
var ret_value__46387__auto__ = (function (){try{while(true){
var result__46388__auto__ = switch__46385__auto__(state_49219);
if(cljs.core.keyword_identical_QMARK_(result__46388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46388__auto__;
}
break;
}
}catch (e49255){var ex__46389__auto__ = e49255;
var statearr_49256_51228 = state_49219;
(statearr_49256_51228[(2)] = ex__46389__auto__);


if(cljs.core.seq((state_49219[(4)]))){
var statearr_49258_51229 = state_49219;
(statearr_49258_51229[(1)] = cljs.core.first((state_49219[(4)])));

} else {
throw ex__46389__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51230 = state_49219;
state_49219 = G__51230;
continue;
} else {
return ret_value__46387__auto__;
}
break;
}
});
cljs$core$async$state_machine__46386__auto__ = function(state_49219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46386__auto____1.call(this,state_49219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46386__auto____0;
cljs$core$async$state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46386__auto____1;
return cljs$core$async$state_machine__46386__auto__;
})()
})();
var state__46470__auto__ = (function (){var statearr_49259 = f__46469__auto__();
(statearr_49259[(6)] = c__46468__auto___51208);

return statearr_49259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46470__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49271 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49271 = (function (f,ch,meta49272){
this.f = f;
this.ch = ch;
this.meta49272 = meta49272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49273,meta49272__$1){
var self__ = this;
var _49273__$1 = this;
return (new cljs.core.async.t_cljs$core$async49271(self__.f,self__.ch,meta49272__$1));
}));

(cljs.core.async.t_cljs$core$async49271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49273){
var self__ = this;
var _49273__$1 = this;
return self__.meta49272;
}));

(cljs.core.async.t_cljs$core$async49271.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49271.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49271.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49271.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49271.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49280 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49280 = (function (f,ch,meta49272,_,fn1,meta49281){
this.f = f;
this.ch = ch;
this.meta49272 = meta49272;
this._ = _;
this.fn1 = fn1;
this.meta49281 = meta49281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49282,meta49281__$1){
var self__ = this;
var _49282__$1 = this;
return (new cljs.core.async.t_cljs$core$async49280(self__.f,self__.ch,self__.meta49272,self__._,self__.fn1,meta49281__$1));
}));

(cljs.core.async.t_cljs$core$async49280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49282){
var self__ = this;
var _49282__$1 = this;
return self__.meta49281;
}));

(cljs.core.async.t_cljs$core$async49280.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49280.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async49280.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49280.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__49266_SHARP_){
var G__49286 = (((p1__49266_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__49266_SHARP_) : self__.f.call(null,p1__49266_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__49286) : f1.call(null,G__49286));
});
}));

(cljs.core.async.t_cljs$core$async49280.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49272","meta49272",-145880748,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async49271","cljs.core.async/t_cljs$core$async49271",954393111,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta49281","meta49281",-57167976,null)], null);
}));

(cljs.core.async.t_cljs$core$async49280.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49280.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49280");

(cljs.core.async.t_cljs$core$async49280.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async49280");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49280.
 */
cljs.core.async.__GT_t_cljs$core$async49280 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49280(f__$1,ch__$1,meta49272__$1,___$2,fn1__$1,meta49281){
return (new cljs.core.async.t_cljs$core$async49280(f__$1,ch__$1,meta49272__$1,___$2,fn1__$1,meta49281));
});

}

return (new cljs.core.async.t_cljs$core$async49280(self__.f,self__.ch,self__.meta49272,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__49301 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__49301) : self__.f.call(null,G__49301));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async49271.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49271.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async49271.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49272","meta49272",-145880748,null)], null);
}));

(cljs.core.async.t_cljs$core$async49271.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49271.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49271");

(cljs.core.async.t_cljs$core$async49271.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async49271");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49271.
 */
cljs.core.async.__GT_t_cljs$core$async49271 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49271(f__$1,ch__$1,meta49272){
return (new cljs.core.async.t_cljs$core$async49271(f__$1,ch__$1,meta49272));
});

}

return (new cljs.core.async.t_cljs$core$async49271(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49324 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49324 = (function (f,ch,meta49325){
this.f = f;
this.ch = ch;
this.meta49325 = meta49325;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49326,meta49325__$1){
var self__ = this;
var _49326__$1 = this;
return (new cljs.core.async.t_cljs$core$async49324(self__.f,self__.ch,meta49325__$1));
}));

(cljs.core.async.t_cljs$core$async49324.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49326){
var self__ = this;
var _49326__$1 = this;
return self__.meta49325;
}));

(cljs.core.async.t_cljs$core$async49324.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49324.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49324.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49324.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49324.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49324.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async49324.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49325","meta49325",-1062611694,null)], null);
}));

(cljs.core.async.t_cljs$core$async49324.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49324.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49324");

(cljs.core.async.t_cljs$core$async49324.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async49324");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49324.
 */
cljs.core.async.__GT_t_cljs$core$async49324 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async49324(f__$1,ch__$1,meta49325){
return (new cljs.core.async.t_cljs$core$async49324(f__$1,ch__$1,meta49325));
});

}

return (new cljs.core.async.t_cljs$core$async49324(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49341 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49341 = (function (p,ch,meta49342){
this.p = p;
this.ch = ch;
this.meta49342 = meta49342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49343,meta49342__$1){
var self__ = this;
var _49343__$1 = this;
return (new cljs.core.async.t_cljs$core$async49341(self__.p,self__.ch,meta49342__$1));
}));

(cljs.core.async.t_cljs$core$async49341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49343){
var self__ = this;
var _49343__$1 = this;
return self__.meta49342;
}));

(cljs.core.async.t_cljs$core$async49341.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49341.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49341.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49341.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49341.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49341.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49341.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async49341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49342","meta49342",1632314282,null)], null);
}));

(cljs.core.async.t_cljs$core$async49341.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49341");

(cljs.core.async.t_cljs$core$async49341.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async49341");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49341.
 */
cljs.core.async.__GT_t_cljs$core$async49341 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async49341(p__$1,ch__$1,meta49342){
return (new cljs.core.async.t_cljs$core$async49341(p__$1,ch__$1,meta49342));
});

}

return (new cljs.core.async.t_cljs$core$async49341(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__49362 = arguments.length;
switch (G__49362) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46468__auto___51295 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46469__auto__ = (function (){var switch__46385__auto__ = (function (state_49386){
var state_val_49387 = (state_49386[(1)]);
if((state_val_49387 === (7))){
var inst_49381 = (state_49386[(2)]);
var state_49386__$1 = state_49386;
var statearr_49389_51296 = state_49386__$1;
(statearr_49389_51296[(2)] = inst_49381);

(statearr_49389_51296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49387 === (1))){
var state_49386__$1 = state_49386;
var statearr_49390_51298 = state_49386__$1;
(statearr_49390_51298[(2)] = null);

(statearr_49390_51298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49387 === (4))){
var inst_49367 = (state_49386[(7)]);
var inst_49367__$1 = (state_49386[(2)]);
var inst_49368 = (inst_49367__$1 == null);
var state_49386__$1 = (function (){var statearr_49391 = state_49386;
(statearr_49391[(7)] = inst_49367__$1);

return statearr_49391;
})();
if(cljs.core.truth_(inst_49368)){
var statearr_49392_51300 = state_49386__$1;
(statearr_49392_51300[(1)] = (5));

} else {
var statearr_49393_51301 = state_49386__$1;
(statearr_49393_51301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49387 === (6))){
var inst_49367 = (state_49386[(7)]);
var inst_49372 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49367) : p.call(null,inst_49367));
var state_49386__$1 = state_49386;
if(cljs.core.truth_(inst_49372)){
var statearr_49397_51302 = state_49386__$1;
(statearr_49397_51302[(1)] = (8));

} else {
var statearr_49398_51303 = state_49386__$1;
(statearr_49398_51303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49387 === (3))){
var inst_49383 = (state_49386[(2)]);
var state_49386__$1 = state_49386;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49386__$1,inst_49383);
} else {
if((state_val_49387 === (2))){
var state_49386__$1 = state_49386;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49386__$1,(4),ch);
} else {
if((state_val_49387 === (11))){
var inst_49375 = (state_49386[(2)]);
var state_49386__$1 = state_49386;
var statearr_49401_51304 = state_49386__$1;
(statearr_49401_51304[(2)] = inst_49375);

(statearr_49401_51304[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49387 === (9))){
var state_49386__$1 = state_49386;
var statearr_49405_51305 = state_49386__$1;
(statearr_49405_51305[(2)] = null);

(statearr_49405_51305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49387 === (5))){
var inst_49370 = cljs.core.async.close_BANG_(out);
var state_49386__$1 = state_49386;
var statearr_49410_51306 = state_49386__$1;
(statearr_49410_51306[(2)] = inst_49370);

(statearr_49410_51306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49387 === (10))){
var inst_49378 = (state_49386[(2)]);
var state_49386__$1 = (function (){var statearr_49416 = state_49386;
(statearr_49416[(8)] = inst_49378);

return statearr_49416;
})();
var statearr_49417_51307 = state_49386__$1;
(statearr_49417_51307[(2)] = null);

(statearr_49417_51307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49387 === (8))){
var inst_49367 = (state_49386[(7)]);
var state_49386__$1 = state_49386;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49386__$1,(11),out,inst_49367);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46386__auto__ = null;
var cljs$core$async$state_machine__46386__auto____0 = (function (){
var statearr_49426 = [null,null,null,null,null,null,null,null,null];
(statearr_49426[(0)] = cljs$core$async$state_machine__46386__auto__);

(statearr_49426[(1)] = (1));

return statearr_49426;
});
var cljs$core$async$state_machine__46386__auto____1 = (function (state_49386){
while(true){
var ret_value__46387__auto__ = (function (){try{while(true){
var result__46388__auto__ = switch__46385__auto__(state_49386);
if(cljs.core.keyword_identical_QMARK_(result__46388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46388__auto__;
}
break;
}
}catch (e49431){var ex__46389__auto__ = e49431;
var statearr_49432_51309 = state_49386;
(statearr_49432_51309[(2)] = ex__46389__auto__);


if(cljs.core.seq((state_49386[(4)]))){
var statearr_49437_51310 = state_49386;
(statearr_49437_51310[(1)] = cljs.core.first((state_49386[(4)])));

} else {
throw ex__46389__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51312 = state_49386;
state_49386 = G__51312;
continue;
} else {
return ret_value__46387__auto__;
}
break;
}
});
cljs$core$async$state_machine__46386__auto__ = function(state_49386){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46386__auto____1.call(this,state_49386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46386__auto____0;
cljs$core$async$state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46386__auto____1;
return cljs$core$async$state_machine__46386__auto__;
})()
})();
var state__46470__auto__ = (function (){var statearr_49438 = f__46469__auto__();
(statearr_49438[(6)] = c__46468__auto___51295);

return statearr_49438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46470__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__49444 = arguments.length;
switch (G__49444) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__46468__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46469__auto__ = (function (){var switch__46385__auto__ = (function (state_49509){
var state_val_49510 = (state_49509[(1)]);
if((state_val_49510 === (7))){
var inst_49505 = (state_49509[(2)]);
var state_49509__$1 = state_49509;
var statearr_49513_51317 = state_49509__$1;
(statearr_49513_51317[(2)] = inst_49505);

(statearr_49513_51317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49510 === (20))){
var inst_49474 = (state_49509[(7)]);
var inst_49486 = (state_49509[(2)]);
var inst_49487 = cljs.core.next(inst_49474);
var inst_49460 = inst_49487;
var inst_49461 = null;
var inst_49462 = (0);
var inst_49463 = (0);
var state_49509__$1 = (function (){var statearr_49515 = state_49509;
(statearr_49515[(8)] = inst_49461);

(statearr_49515[(9)] = inst_49486);

(statearr_49515[(10)] = inst_49462);

(statearr_49515[(11)] = inst_49463);

(statearr_49515[(12)] = inst_49460);

return statearr_49515;
})();
var statearr_49516_51322 = state_49509__$1;
(statearr_49516_51322[(2)] = null);

(statearr_49516_51322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49510 === (1))){
var state_49509__$1 = state_49509;
var statearr_49517_51323 = state_49509__$1;
(statearr_49517_51323[(2)] = null);

(statearr_49517_51323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49510 === (4))){
var inst_49448 = (state_49509[(13)]);
var inst_49448__$1 = (state_49509[(2)]);
var inst_49449 = (inst_49448__$1 == null);
var state_49509__$1 = (function (){var statearr_49518 = state_49509;
(statearr_49518[(13)] = inst_49448__$1);

return statearr_49518;
})();
if(cljs.core.truth_(inst_49449)){
var statearr_49520_51326 = state_49509__$1;
(statearr_49520_51326[(1)] = (5));

} else {
var statearr_49521_51328 = state_49509__$1;
(statearr_49521_51328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49510 === (15))){
var state_49509__$1 = state_49509;
var statearr_49526_51330 = state_49509__$1;
(statearr_49526_51330[(2)] = null);

(statearr_49526_51330[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49510 === (21))){
var state_49509__$1 = state_49509;
var statearr_49527_51332 = state_49509__$1;
(statearr_49527_51332[(2)] = null);

(statearr_49527_51332[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49510 === (13))){
var inst_49461 = (state_49509[(8)]);
var inst_49462 = (state_49509[(10)]);
var inst_49463 = (state_49509[(11)]);
var inst_49460 = (state_49509[(12)]);
var inst_49470 = (state_49509[(2)]);
var inst_49471 = (inst_49463 + (1));
var tmp49522 = inst_49461;
var tmp49523 = inst_49462;
var tmp49524 = inst_49460;
var inst_49460__$1 = tmp49524;
var inst_49461__$1 = tmp49522;
var inst_49462__$1 = tmp49523;
var inst_49463__$1 = inst_49471;
var state_49509__$1 = (function (){var statearr_49528 = state_49509;
(statearr_49528[(8)] = inst_49461__$1);

(statearr_49528[(14)] = inst_49470);

(statearr_49528[(10)] = inst_49462__$1);

(statearr_49528[(11)] = inst_49463__$1);

(statearr_49528[(12)] = inst_49460__$1);

return statearr_49528;
})();
var statearr_49529_51345 = state_49509__$1;
(statearr_49529_51345[(2)] = null);

(statearr_49529_51345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49510 === (22))){
var state_49509__$1 = state_49509;
var statearr_49530_51346 = state_49509__$1;
(statearr_49530_51346[(2)] = null);

(statearr_49530_51346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49510 === (6))){
var inst_49448 = (state_49509[(13)]);
var inst_49457 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49448) : f.call(null,inst_49448));
var inst_49458 = cljs.core.seq(inst_49457);
var inst_49460 = inst_49458;
var inst_49461 = null;
var inst_49462 = (0);
var inst_49463 = (0);
var state_49509__$1 = (function (){var statearr_49533 = state_49509;
(statearr_49533[(8)] = inst_49461);

(statearr_49533[(10)] = inst_49462);

(statearr_49533[(11)] = inst_49463);

(statearr_49533[(12)] = inst_49460);

return statearr_49533;
})();
var statearr_49534_51358 = state_49509__$1;
(statearr_49534_51358[(2)] = null);

(statearr_49534_51358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49510 === (17))){
var inst_49474 = (state_49509[(7)]);
var inst_49479 = cljs.core.chunk_first(inst_49474);
var inst_49480 = cljs.core.chunk_rest(inst_49474);
var inst_49481 = cljs.core.count(inst_49479);
var inst_49460 = inst_49480;
var inst_49461 = inst_49479;
var inst_49462 = inst_49481;
var inst_49463 = (0);
var state_49509__$1 = (function (){var statearr_49535 = state_49509;
(statearr_49535[(8)] = inst_49461);

(statearr_49535[(10)] = inst_49462);

(statearr_49535[(11)] = inst_49463);

(statearr_49535[(12)] = inst_49460);

return statearr_49535;
})();
var statearr_49536_51364 = state_49509__$1;
(statearr_49536_51364[(2)] = null);

(statearr_49536_51364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49510 === (3))){
var inst_49507 = (state_49509[(2)]);
var state_49509__$1 = state_49509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49509__$1,inst_49507);
} else {
if((state_val_49510 === (12))){
var inst_49495 = (state_49509[(2)]);
var state_49509__$1 = state_49509;
var statearr_49537_51365 = state_49509__$1;
(statearr_49537_51365[(2)] = inst_49495);

(statearr_49537_51365[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49510 === (2))){
var state_49509__$1 = state_49509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49509__$1,(4),in$);
} else {
if((state_val_49510 === (23))){
var inst_49503 = (state_49509[(2)]);
var state_49509__$1 = state_49509;
var statearr_49538_51368 = state_49509__$1;
(statearr_49538_51368[(2)] = inst_49503);

(statearr_49538_51368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49510 === (19))){
var inst_49490 = (state_49509[(2)]);
var state_49509__$1 = state_49509;
var statearr_49539_51369 = state_49509__$1;
(statearr_49539_51369[(2)] = inst_49490);

(statearr_49539_51369[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49510 === (11))){
var inst_49474 = (state_49509[(7)]);
var inst_49460 = (state_49509[(12)]);
var inst_49474__$1 = cljs.core.seq(inst_49460);
var state_49509__$1 = (function (){var statearr_49541 = state_49509;
(statearr_49541[(7)] = inst_49474__$1);

return statearr_49541;
})();
if(inst_49474__$1){
var statearr_49542_51374 = state_49509__$1;
(statearr_49542_51374[(1)] = (14));

} else {
var statearr_49543_51379 = state_49509__$1;
(statearr_49543_51379[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49510 === (9))){
var inst_49497 = (state_49509[(2)]);
var inst_49498 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_49509__$1 = (function (){var statearr_49544 = state_49509;
(statearr_49544[(15)] = inst_49497);

return statearr_49544;
})();
if(cljs.core.truth_(inst_49498)){
var statearr_49545_51380 = state_49509__$1;
(statearr_49545_51380[(1)] = (21));

} else {
var statearr_49546_51385 = state_49509__$1;
(statearr_49546_51385[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49510 === (5))){
var inst_49451 = cljs.core.async.close_BANG_(out);
var state_49509__$1 = state_49509;
var statearr_49547_51386 = state_49509__$1;
(statearr_49547_51386[(2)] = inst_49451);

(statearr_49547_51386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49510 === (14))){
var inst_49474 = (state_49509[(7)]);
var inst_49477 = cljs.core.chunked_seq_QMARK_(inst_49474);
var state_49509__$1 = state_49509;
if(inst_49477){
var statearr_49548_51387 = state_49509__$1;
(statearr_49548_51387[(1)] = (17));

} else {
var statearr_49549_51388 = state_49509__$1;
(statearr_49549_51388[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49510 === (16))){
var inst_49493 = (state_49509[(2)]);
var state_49509__$1 = state_49509;
var statearr_49550_51393 = state_49509__$1;
(statearr_49550_51393[(2)] = inst_49493);

(statearr_49550_51393[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49510 === (10))){
var inst_49461 = (state_49509[(8)]);
var inst_49463 = (state_49509[(11)]);
var inst_49468 = cljs.core._nth(inst_49461,inst_49463);
var state_49509__$1 = state_49509;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49509__$1,(13),out,inst_49468);
} else {
if((state_val_49510 === (18))){
var inst_49474 = (state_49509[(7)]);
var inst_49484 = cljs.core.first(inst_49474);
var state_49509__$1 = state_49509;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49509__$1,(20),out,inst_49484);
} else {
if((state_val_49510 === (8))){
var inst_49462 = (state_49509[(10)]);
var inst_49463 = (state_49509[(11)]);
var inst_49465 = (inst_49463 < inst_49462);
var inst_49466 = inst_49465;
var state_49509__$1 = state_49509;
if(cljs.core.truth_(inst_49466)){
var statearr_49553_51406 = state_49509__$1;
(statearr_49553_51406[(1)] = (10));

} else {
var statearr_49554_51408 = state_49509__$1;
(statearr_49554_51408[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__46386__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46386__auto____0 = (function (){
var statearr_49556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49556[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46386__auto__);

(statearr_49556[(1)] = (1));

return statearr_49556;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46386__auto____1 = (function (state_49509){
while(true){
var ret_value__46387__auto__ = (function (){try{while(true){
var result__46388__auto__ = switch__46385__auto__(state_49509);
if(cljs.core.keyword_identical_QMARK_(result__46388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46388__auto__;
}
break;
}
}catch (e49557){var ex__46389__auto__ = e49557;
var statearr_49558_51411 = state_49509;
(statearr_49558_51411[(2)] = ex__46389__auto__);


if(cljs.core.seq((state_49509[(4)]))){
var statearr_49559_51414 = state_49509;
(statearr_49559_51414[(1)] = cljs.core.first((state_49509[(4)])));

} else {
throw ex__46389__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51415 = state_49509;
state_49509 = G__51415;
continue;
} else {
return ret_value__46387__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46386__auto__ = function(state_49509){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46386__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46386__auto____1.call(this,state_49509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46386__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46386__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46386__auto__;
})()
})();
var state__46470__auto__ = (function (){var statearr_49560 = f__46469__auto__();
(statearr_49560[(6)] = c__46468__auto__);

return statearr_49560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46470__auto__);
}));

return c__46468__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__49565 = arguments.length;
switch (G__49565) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__49569 = arguments.length;
switch (G__49569) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__49575 = arguments.length;
switch (G__49575) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46468__auto___51432 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46469__auto__ = (function (){var switch__46385__auto__ = (function (state_49602){
var state_val_49603 = (state_49602[(1)]);
if((state_val_49603 === (7))){
var inst_49597 = (state_49602[(2)]);
var state_49602__$1 = state_49602;
var statearr_49604_51433 = state_49602__$1;
(statearr_49604_51433[(2)] = inst_49597);

(statearr_49604_51433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49603 === (1))){
var inst_49578 = null;
var state_49602__$1 = (function (){var statearr_49605 = state_49602;
(statearr_49605[(7)] = inst_49578);

return statearr_49605;
})();
var statearr_49607_51434 = state_49602__$1;
(statearr_49607_51434[(2)] = null);

(statearr_49607_51434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49603 === (4))){
var inst_49581 = (state_49602[(8)]);
var inst_49581__$1 = (state_49602[(2)]);
var inst_49582 = (inst_49581__$1 == null);
var inst_49583 = cljs.core.not(inst_49582);
var state_49602__$1 = (function (){var statearr_49609 = state_49602;
(statearr_49609[(8)] = inst_49581__$1);

return statearr_49609;
})();
if(inst_49583){
var statearr_49610_51436 = state_49602__$1;
(statearr_49610_51436[(1)] = (5));

} else {
var statearr_49611_51437 = state_49602__$1;
(statearr_49611_51437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49603 === (6))){
var state_49602__$1 = state_49602;
var statearr_49612_51438 = state_49602__$1;
(statearr_49612_51438[(2)] = null);

(statearr_49612_51438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49603 === (3))){
var inst_49599 = (state_49602[(2)]);
var inst_49600 = cljs.core.async.close_BANG_(out);
var state_49602__$1 = (function (){var statearr_49616 = state_49602;
(statearr_49616[(9)] = inst_49599);

return statearr_49616;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49602__$1,inst_49600);
} else {
if((state_val_49603 === (2))){
var state_49602__$1 = state_49602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49602__$1,(4),ch);
} else {
if((state_val_49603 === (11))){
var inst_49581 = (state_49602[(8)]);
var inst_49591 = (state_49602[(2)]);
var inst_49578 = inst_49581;
var state_49602__$1 = (function (){var statearr_49620 = state_49602;
(statearr_49620[(10)] = inst_49591);

(statearr_49620[(7)] = inst_49578);

return statearr_49620;
})();
var statearr_49621_51441 = state_49602__$1;
(statearr_49621_51441[(2)] = null);

(statearr_49621_51441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49603 === (9))){
var inst_49581 = (state_49602[(8)]);
var state_49602__$1 = state_49602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49602__$1,(11),out,inst_49581);
} else {
if((state_val_49603 === (5))){
var inst_49578 = (state_49602[(7)]);
var inst_49581 = (state_49602[(8)]);
var inst_49585 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49581,inst_49578);
var state_49602__$1 = state_49602;
if(inst_49585){
var statearr_49628_51442 = state_49602__$1;
(statearr_49628_51442[(1)] = (8));

} else {
var statearr_49630_51443 = state_49602__$1;
(statearr_49630_51443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49603 === (10))){
var inst_49594 = (state_49602[(2)]);
var state_49602__$1 = state_49602;
var statearr_49632_51447 = state_49602__$1;
(statearr_49632_51447[(2)] = inst_49594);

(statearr_49632_51447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49603 === (8))){
var inst_49578 = (state_49602[(7)]);
var tmp49625 = inst_49578;
var inst_49578__$1 = tmp49625;
var state_49602__$1 = (function (){var statearr_49633 = state_49602;
(statearr_49633[(7)] = inst_49578__$1);

return statearr_49633;
})();
var statearr_49634_51454 = state_49602__$1;
(statearr_49634_51454[(2)] = null);

(statearr_49634_51454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46386__auto__ = null;
var cljs$core$async$state_machine__46386__auto____0 = (function (){
var statearr_49638 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49638[(0)] = cljs$core$async$state_machine__46386__auto__);

(statearr_49638[(1)] = (1));

return statearr_49638;
});
var cljs$core$async$state_machine__46386__auto____1 = (function (state_49602){
while(true){
var ret_value__46387__auto__ = (function (){try{while(true){
var result__46388__auto__ = switch__46385__auto__(state_49602);
if(cljs.core.keyword_identical_QMARK_(result__46388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46388__auto__;
}
break;
}
}catch (e49642){var ex__46389__auto__ = e49642;
var statearr_49643_51471 = state_49602;
(statearr_49643_51471[(2)] = ex__46389__auto__);


if(cljs.core.seq((state_49602[(4)]))){
var statearr_49645_51479 = state_49602;
(statearr_49645_51479[(1)] = cljs.core.first((state_49602[(4)])));

} else {
throw ex__46389__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51484 = state_49602;
state_49602 = G__51484;
continue;
} else {
return ret_value__46387__auto__;
}
break;
}
});
cljs$core$async$state_machine__46386__auto__ = function(state_49602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46386__auto____1.call(this,state_49602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46386__auto____0;
cljs$core$async$state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46386__auto____1;
return cljs$core$async$state_machine__46386__auto__;
})()
})();
var state__46470__auto__ = (function (){var statearr_49646 = f__46469__auto__();
(statearr_49646[(6)] = c__46468__auto___51432);

return statearr_49646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46470__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__49654 = arguments.length;
switch (G__49654) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46468__auto___51517 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46469__auto__ = (function (){var switch__46385__auto__ = (function (state_49700){
var state_val_49701 = (state_49700[(1)]);
if((state_val_49701 === (7))){
var inst_49696 = (state_49700[(2)]);
var state_49700__$1 = state_49700;
var statearr_49708_51522 = state_49700__$1;
(statearr_49708_51522[(2)] = inst_49696);

(statearr_49708_51522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49701 === (1))){
var inst_49661 = (new Array(n));
var inst_49662 = inst_49661;
var inst_49663 = (0);
var state_49700__$1 = (function (){var statearr_49710 = state_49700;
(statearr_49710[(7)] = inst_49663);

(statearr_49710[(8)] = inst_49662);

return statearr_49710;
})();
var statearr_49711_51533 = state_49700__$1;
(statearr_49711_51533[(2)] = null);

(statearr_49711_51533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49701 === (4))){
var inst_49666 = (state_49700[(9)]);
var inst_49666__$1 = (state_49700[(2)]);
var inst_49669 = (inst_49666__$1 == null);
var inst_49670 = cljs.core.not(inst_49669);
var state_49700__$1 = (function (){var statearr_49712 = state_49700;
(statearr_49712[(9)] = inst_49666__$1);

return statearr_49712;
})();
if(inst_49670){
var statearr_49713_51540 = state_49700__$1;
(statearr_49713_51540[(1)] = (5));

} else {
var statearr_49714_51543 = state_49700__$1;
(statearr_49714_51543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49701 === (15))){
var inst_49690 = (state_49700[(2)]);
var state_49700__$1 = state_49700;
var statearr_49715_51548 = state_49700__$1;
(statearr_49715_51548[(2)] = inst_49690);

(statearr_49715_51548[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49701 === (13))){
var state_49700__$1 = state_49700;
var statearr_49716_51554 = state_49700__$1;
(statearr_49716_51554[(2)] = null);

(statearr_49716_51554[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49701 === (6))){
var inst_49663 = (state_49700[(7)]);
var inst_49686 = (inst_49663 > (0));
var state_49700__$1 = state_49700;
if(cljs.core.truth_(inst_49686)){
var statearr_49717_51560 = state_49700__$1;
(statearr_49717_51560[(1)] = (12));

} else {
var statearr_49718_51562 = state_49700__$1;
(statearr_49718_51562[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49701 === (3))){
var inst_49698 = (state_49700[(2)]);
var state_49700__$1 = state_49700;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49700__$1,inst_49698);
} else {
if((state_val_49701 === (12))){
var inst_49662 = (state_49700[(8)]);
var inst_49688 = cljs.core.vec(inst_49662);
var state_49700__$1 = state_49700;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49700__$1,(15),out,inst_49688);
} else {
if((state_val_49701 === (2))){
var state_49700__$1 = state_49700;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49700__$1,(4),ch);
} else {
if((state_val_49701 === (11))){
var inst_49680 = (state_49700[(2)]);
var inst_49681 = (new Array(n));
var inst_49662 = inst_49681;
var inst_49663 = (0);
var state_49700__$1 = (function (){var statearr_49731 = state_49700;
(statearr_49731[(10)] = inst_49680);

(statearr_49731[(7)] = inst_49663);

(statearr_49731[(8)] = inst_49662);

return statearr_49731;
})();
var statearr_49735_51581 = state_49700__$1;
(statearr_49735_51581[(2)] = null);

(statearr_49735_51581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49701 === (9))){
var inst_49662 = (state_49700[(8)]);
var inst_49678 = cljs.core.vec(inst_49662);
var state_49700__$1 = state_49700;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49700__$1,(11),out,inst_49678);
} else {
if((state_val_49701 === (5))){
var inst_49673 = (state_49700[(11)]);
var inst_49663 = (state_49700[(7)]);
var inst_49662 = (state_49700[(8)]);
var inst_49666 = (state_49700[(9)]);
var inst_49672 = (inst_49662[inst_49663] = inst_49666);
var inst_49673__$1 = (inst_49663 + (1));
var inst_49674 = (inst_49673__$1 < n);
var state_49700__$1 = (function (){var statearr_49748 = state_49700;
(statearr_49748[(12)] = inst_49672);

(statearr_49748[(11)] = inst_49673__$1);

return statearr_49748;
})();
if(cljs.core.truth_(inst_49674)){
var statearr_49749_51596 = state_49700__$1;
(statearr_49749_51596[(1)] = (8));

} else {
var statearr_49750_51597 = state_49700__$1;
(statearr_49750_51597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49701 === (14))){
var inst_49693 = (state_49700[(2)]);
var inst_49694 = cljs.core.async.close_BANG_(out);
var state_49700__$1 = (function (){var statearr_49752 = state_49700;
(statearr_49752[(13)] = inst_49693);

return statearr_49752;
})();
var statearr_49753_51599 = state_49700__$1;
(statearr_49753_51599[(2)] = inst_49694);

(statearr_49753_51599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49701 === (10))){
var inst_49684 = (state_49700[(2)]);
var state_49700__$1 = state_49700;
var statearr_49756_51600 = state_49700__$1;
(statearr_49756_51600[(2)] = inst_49684);

(statearr_49756_51600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49701 === (8))){
var inst_49673 = (state_49700[(11)]);
var inst_49662 = (state_49700[(8)]);
var tmp49751 = inst_49662;
var inst_49662__$1 = tmp49751;
var inst_49663 = inst_49673;
var state_49700__$1 = (function (){var statearr_49761 = state_49700;
(statearr_49761[(7)] = inst_49663);

(statearr_49761[(8)] = inst_49662__$1);

return statearr_49761;
})();
var statearr_49762_51610 = state_49700__$1;
(statearr_49762_51610[(2)] = null);

(statearr_49762_51610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46386__auto__ = null;
var cljs$core$async$state_machine__46386__auto____0 = (function (){
var statearr_49766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49766[(0)] = cljs$core$async$state_machine__46386__auto__);

(statearr_49766[(1)] = (1));

return statearr_49766;
});
var cljs$core$async$state_machine__46386__auto____1 = (function (state_49700){
while(true){
var ret_value__46387__auto__ = (function (){try{while(true){
var result__46388__auto__ = switch__46385__auto__(state_49700);
if(cljs.core.keyword_identical_QMARK_(result__46388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46388__auto__;
}
break;
}
}catch (e49770){var ex__46389__auto__ = e49770;
var statearr_49771_51624 = state_49700;
(statearr_49771_51624[(2)] = ex__46389__auto__);


if(cljs.core.seq((state_49700[(4)]))){
var statearr_49772_51629 = state_49700;
(statearr_49772_51629[(1)] = cljs.core.first((state_49700[(4)])));

} else {
throw ex__46389__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51636 = state_49700;
state_49700 = G__51636;
continue;
} else {
return ret_value__46387__auto__;
}
break;
}
});
cljs$core$async$state_machine__46386__auto__ = function(state_49700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46386__auto____1.call(this,state_49700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46386__auto____0;
cljs$core$async$state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46386__auto____1;
return cljs$core$async$state_machine__46386__auto__;
})()
})();
var state__46470__auto__ = (function (){var statearr_49774 = f__46469__auto__();
(statearr_49774[(6)] = c__46468__auto___51517);

return statearr_49774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46470__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__49781 = arguments.length;
switch (G__49781) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46468__auto___51650 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46469__auto__ = (function (){var switch__46385__auto__ = (function (state_49851){
var state_val_49852 = (state_49851[(1)]);
if((state_val_49852 === (7))){
var inst_49846 = (state_49851[(2)]);
var state_49851__$1 = state_49851;
var statearr_49860_51652 = state_49851__$1;
(statearr_49860_51652[(2)] = inst_49846);

(statearr_49860_51652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49852 === (1))){
var inst_49801 = [];
var inst_49802 = inst_49801;
var inst_49803 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49851__$1 = (function (){var statearr_49867 = state_49851;
(statearr_49867[(7)] = inst_49803);

(statearr_49867[(8)] = inst_49802);

return statearr_49867;
})();
var statearr_49868_51653 = state_49851__$1;
(statearr_49868_51653[(2)] = null);

(statearr_49868_51653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49852 === (4))){
var inst_49806 = (state_49851[(9)]);
var inst_49806__$1 = (state_49851[(2)]);
var inst_49807 = (inst_49806__$1 == null);
var inst_49808 = cljs.core.not(inst_49807);
var state_49851__$1 = (function (){var statearr_49872 = state_49851;
(statearr_49872[(9)] = inst_49806__$1);

return statearr_49872;
})();
if(inst_49808){
var statearr_49877_51656 = state_49851__$1;
(statearr_49877_51656[(1)] = (5));

} else {
var statearr_49880_51657 = state_49851__$1;
(statearr_49880_51657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49852 === (15))){
var inst_49840 = (state_49851[(2)]);
var state_49851__$1 = state_49851;
var statearr_49882_51660 = state_49851__$1;
(statearr_49882_51660[(2)] = inst_49840);

(statearr_49882_51660[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49852 === (13))){
var state_49851__$1 = state_49851;
var statearr_49885_51667 = state_49851__$1;
(statearr_49885_51667[(2)] = null);

(statearr_49885_51667[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49852 === (6))){
var inst_49802 = (state_49851[(8)]);
var inst_49834 = inst_49802.length;
var inst_49835 = (inst_49834 > (0));
var state_49851__$1 = state_49851;
if(cljs.core.truth_(inst_49835)){
var statearr_49890_51675 = state_49851__$1;
(statearr_49890_51675[(1)] = (12));

} else {
var statearr_49891_51676 = state_49851__$1;
(statearr_49891_51676[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49852 === (3))){
var inst_49848 = (state_49851[(2)]);
var state_49851__$1 = state_49851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49851__$1,inst_49848);
} else {
if((state_val_49852 === (12))){
var inst_49802 = (state_49851[(8)]);
var inst_49838 = cljs.core.vec(inst_49802);
var state_49851__$1 = state_49851;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49851__$1,(15),out,inst_49838);
} else {
if((state_val_49852 === (2))){
var state_49851__$1 = state_49851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49851__$1,(4),ch);
} else {
if((state_val_49852 === (11))){
var inst_49810 = (state_49851[(10)]);
var inst_49806 = (state_49851[(9)]);
var inst_49824 = (state_49851[(2)]);
var inst_49826 = [];
var inst_49827 = inst_49826.push(inst_49806);
var inst_49802 = inst_49826;
var inst_49803 = inst_49810;
var state_49851__$1 = (function (){var statearr_49903 = state_49851;
(statearr_49903[(11)] = inst_49824);

(statearr_49903[(7)] = inst_49803);

(statearr_49903[(12)] = inst_49827);

(statearr_49903[(8)] = inst_49802);

return statearr_49903;
})();
var statearr_49907_51686 = state_49851__$1;
(statearr_49907_51686[(2)] = null);

(statearr_49907_51686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49852 === (9))){
var inst_49802 = (state_49851[(8)]);
var inst_49822 = cljs.core.vec(inst_49802);
var state_49851__$1 = state_49851;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49851__$1,(11),out,inst_49822);
} else {
if((state_val_49852 === (5))){
var inst_49810 = (state_49851[(10)]);
var inst_49806 = (state_49851[(9)]);
var inst_49803 = (state_49851[(7)]);
var inst_49810__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49806) : f.call(null,inst_49806));
var inst_49813 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49810__$1,inst_49803);
var inst_49814 = cljs.core.keyword_identical_QMARK_(inst_49803,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_49815 = ((inst_49813) || (inst_49814));
var state_49851__$1 = (function (){var statearr_49912 = state_49851;
(statearr_49912[(10)] = inst_49810__$1);

return statearr_49912;
})();
if(cljs.core.truth_(inst_49815)){
var statearr_49913_51706 = state_49851__$1;
(statearr_49913_51706[(1)] = (8));

} else {
var statearr_49917_51714 = state_49851__$1;
(statearr_49917_51714[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49852 === (14))){
var inst_49843 = (state_49851[(2)]);
var inst_49844 = cljs.core.async.close_BANG_(out);
var state_49851__$1 = (function (){var statearr_49926 = state_49851;
(statearr_49926[(13)] = inst_49843);

return statearr_49926;
})();
var statearr_49927_51723 = state_49851__$1;
(statearr_49927_51723[(2)] = inst_49844);

(statearr_49927_51723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49852 === (10))){
var inst_49831 = (state_49851[(2)]);
var state_49851__$1 = state_49851;
var statearr_49932_51724 = state_49851__$1;
(statearr_49932_51724[(2)] = inst_49831);

(statearr_49932_51724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49852 === (8))){
var inst_49810 = (state_49851[(10)]);
var inst_49806 = (state_49851[(9)]);
var inst_49802 = (state_49851[(8)]);
var inst_49817 = inst_49802.push(inst_49806);
var tmp49919 = inst_49802;
var inst_49802__$1 = tmp49919;
var inst_49803 = inst_49810;
var state_49851__$1 = (function (){var statearr_49936 = state_49851;
(statearr_49936[(14)] = inst_49817);

(statearr_49936[(7)] = inst_49803);

(statearr_49936[(8)] = inst_49802__$1);

return statearr_49936;
})();
var statearr_49937_51730 = state_49851__$1;
(statearr_49937_51730[(2)] = null);

(statearr_49937_51730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__46386__auto__ = null;
var cljs$core$async$state_machine__46386__auto____0 = (function (){
var statearr_49941 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49941[(0)] = cljs$core$async$state_machine__46386__auto__);

(statearr_49941[(1)] = (1));

return statearr_49941;
});
var cljs$core$async$state_machine__46386__auto____1 = (function (state_49851){
while(true){
var ret_value__46387__auto__ = (function (){try{while(true){
var result__46388__auto__ = switch__46385__auto__(state_49851);
if(cljs.core.keyword_identical_QMARK_(result__46388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46388__auto__;
}
break;
}
}catch (e49943){var ex__46389__auto__ = e49943;
var statearr_49944_51744 = state_49851;
(statearr_49944_51744[(2)] = ex__46389__auto__);


if(cljs.core.seq((state_49851[(4)]))){
var statearr_49946_51747 = state_49851;
(statearr_49946_51747[(1)] = cljs.core.first((state_49851[(4)])));

} else {
throw ex__46389__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51762 = state_49851;
state_49851 = G__51762;
continue;
} else {
return ret_value__46387__auto__;
}
break;
}
});
cljs$core$async$state_machine__46386__auto__ = function(state_49851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46386__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46386__auto____1.call(this,state_49851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46386__auto____0;
cljs$core$async$state_machine__46386__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46386__auto____1;
return cljs$core$async$state_machine__46386__auto__;
})()
})();
var state__46470__auto__ = (function (){var statearr_49950 = f__46469__auto__();
(statearr_49950[(6)] = c__46468__auto___51650);

return statearr_49950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46470__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
