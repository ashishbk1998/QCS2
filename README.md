<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title>QCS Whole Array</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.5.0/knockout-min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/knockout-validation/2.0.4/knockout.validation.min.js"
    integrity="sha512-b99MDNv5TqiZtPKH2UeHzDAVydmgrOJEPtaPPEF8AgV86eYyqINFI/K7/7f0+R4WNTAVv8KvvpjwfOYHv5rd5g=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <!--TeeChart-->>
  <script>
    var $jscomp = $jscomp || {}; $jscomp.scope = {}; $jscomp.createTemplateTagFirstArg = function (f) { return f.raw = f }; $jscomp.createTemplateTagFirstArgWithRaw = function (f, l) { f.raw = l; return f }; $jscomp.arrayIteratorImpl = function (f) { var l = 0; return function () { return l < f.length ? { done: !1, value: f[l++] } : { done: !0 } } }; $jscomp.arrayIterator = function (f) { return { next: $jscomp.arrayIteratorImpl(f) } }; $jscomp.makeIterator = function (f) { var l = "undefined" != typeof Symbol && Symbol.iterator && f[Symbol.iterator]; return l ? l.call(f) : $jscomp.arrayIterator(f) };
    $jscomp.getGlobal = function (f) { f = ["object" == typeof globalThis && globalThis, f, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global]; for (var l = 0; l < f.length; ++l) { var n = f[l]; if (n && n.Math == Math) return n } throw Error("Cannot find global object"); }; $jscomp.global = $jscomp.getGlobal(this); $jscomp.ASSUME_ES5 = !1; $jscomp.ASSUME_NO_NATIVE_MAP = !1; $jscomp.ASSUME_NO_NATIVE_SET = !1; $jscomp.SIMPLE_FROUND_POLYFILL = !1; $jscomp.ISOLATE_POLYFILLS = !1;
    $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (f, l, n) { if (f == Array.prototype || f == Object.prototype) return f; f[l] = n.value; return f }; $jscomp.polyfills = {}; $jscomp.propertyToPolyfillSymbol = {}; $jscomp.POLYFILL_PREFIX = "$jscp$"; $jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
    var $jscomp$lookupPolyfilledValue = function (f, l) { var n = $jscomp.propertyToPolyfillSymbol[l]; if (null == n) return f[l]; n = f[n]; return void 0 !== n ? n : f[l] }; $jscomp.polyfill = function (f, l, n, r) { l && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(f, l, n, r) : $jscomp.polyfillUnisolated(f, l, n, r)) };
    $jscomp.polyfillUnisolated = function (f, l, n, r) { n = $jscomp.global; f = f.split("."); for (r = 0; r < f.length - 1; r++) { var q = f[r]; q in n || (n[q] = {}); n = n[q] } f = f[f.length - 1]; r = n[f]; l = l(r); l != r && null != l && $jscomp.defineProperty(n, f, { configurable: !0, writable: !0, value: l }) };
    $jscomp.polyfillIsolated = function (f, l, n, r) {
      var q = f.split("."); f = 1 === q.length; r = q[0]; r = !f && r in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global; for (var v = 0; v < q.length - 1; v++) { var t = q[v]; t in r || (r[t] = {}); r = r[t] } q = q[q.length - 1]; n = $jscomp.IS_SYMBOL_NATIVE && "es6" === n ? r[q] : null; l = l(n); null != l && (f ? $jscomp.defineProperty($jscomp.polyfills, q, { configurable: !0, writable: !0, value: l }) : l !== n && ($jscomp.propertyToPolyfillSymbol[q] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(q) : $jscomp.POLYFILL_PREFIX + q, q = $jscomp.propertyToPolyfillSymbol[q],
        $jscomp.defineProperty(r, q, { configurable: !0, writable: !0, value: l })))
    }; $jscomp.FORCE_POLYFILL_PROMISE = !1;
    $jscomp.polyfill("Promise", function (f) {
      function l() { this.batch_ = null } function n(f) { return f instanceof q ? f : new q(function (l, n) { l(f) }) } if (f && !$jscomp.FORCE_POLYFILL_PROMISE) return f; l.prototype.asyncExecute = function (f) { if (null == this.batch_) { this.batch_ = []; var l = this; this.asyncExecuteFunction(function () { l.executeBatch_() }) } this.batch_.push(f) }; var r = $jscomp.global.setTimeout; l.prototype.asyncExecuteFunction = function (f) { r(f, 0) }; l.prototype.executeBatch_ = function () {
        for (; this.batch_ && this.batch_.length;) {
          var f =
            this.batch_; this.batch_ = []; for (var l = 0; l < f.length; ++l) { var n = f[l]; f[l] = null; try { n() } catch (A) { this.asyncThrow_(A) } }
        } this.batch_ = null
      }; l.prototype.asyncThrow_ = function (f) { this.asyncExecuteFunction(function () { throw f; }) }; var q = function (f) { this.state_ = 0; this.result_ = void 0; this.onSettledCallbacks_ = []; var l = this.createResolveAndReject_(); try { f(l.resolve, l.reject) } catch (x) { l.reject(x) } }; q.prototype.createResolveAndReject_ = function () {
        function f(f) { return function (q) { n || (n = !0, f.call(l, q)) } } var l = this, n = !1;
        return { resolve: f(this.resolveTo_), reject: f(this.reject_) }
      }; q.prototype.resolveTo_ = function (f) { if (f === this) this.reject_(new TypeError("A Promise cannot resolve to itself")); else if (f instanceof q) this.settleSameAsPromise_(f); else { a: switch (typeof f) { case "object": var l = null != f; break a; case "function": l = !0; break a; default: l = !1 }l ? this.resolveToNonPromiseObj_(f) : this.fulfill_(f) } }; q.prototype.resolveToNonPromiseObj_ = function (f) {
        var l = void 0; try { l = f.then } catch (x) { this.reject_(x); return } "function" == typeof l ?
          this.settleSameAsThenable_(l, f) : this.fulfill_(f)
      }; q.prototype.reject_ = function (f) { this.settle_(2, f) }; q.prototype.fulfill_ = function (f) { this.settle_(1, f) }; q.prototype.settle_ = function (f, l) { if (0 != this.state_) throw Error("Cannot settle(" + f + ", " + l + "): Promise already settled in state" + this.state_); this.state_ = f; this.result_ = l; this.executeOnSettledCallbacks_() }; q.prototype.executeOnSettledCallbacks_ = function () {
        if (null != this.onSettledCallbacks_) {
          for (var f = 0; f < this.onSettledCallbacks_.length; ++f)v.asyncExecute(this.onSettledCallbacks_[f]);
          this.onSettledCallbacks_ = null
        }
      }; var v = new l; q.prototype.settleSameAsPromise_ = function (f) { var l = this.createResolveAndReject_(); f.callWhenSettled_(l.resolve, l.reject) }; q.prototype.settleSameAsThenable_ = function (f, l) { var n = this.createResolveAndReject_(); try { f.call(l, n.resolve, n.reject) } catch (A) { n.reject(A) } }; q.prototype.then = function (f, l) { function n(f, l) { return "function" == typeof f ? function (l) { try { r(f(l)) } catch (L) { t(L) } } : l } var r, t, v = new q(function (f, l) { r = f; t = l }); this.callWhenSettled_(n(f, r), n(l, t)); return v };
      q.prototype.catch = function (f) { return this.then(void 0, f) }; q.prototype.callWhenSettled_ = function (f, l) { function n() { switch (q.state_) { case 1: f(q.result_); break; case 2: l(q.result_); break; default: throw Error("Unexpected state: " + q.state_); } } var q = this; null == this.onSettledCallbacks_ ? v.asyncExecute(n) : this.onSettledCallbacks_.push(n) }; q.resolve = n; q.reject = function (f) { return new q(function (l, n) { n(f) }) }; q.race = function (f) {
        return new q(function (l, q) {
          for (var r = $jscomp.makeIterator(f), t = r.next(); !t.done; t = r.next())n(t.value).callWhenSettled_(l,
            q)
        })
      }; q.all = function (f) { var l = $jscomp.makeIterator(f), r = l.next(); return r.done ? n([]) : new q(function (f, q) { function t(l) { return function (n) { v[l] = n; x--; 0 == x && f(v) } } var v = [], x = 0; do v.push(void 0), x++, n(r.value).callWhenSettled_(t(v.length - 1), q), r = l.next(); while (!r.done) }) }; return q
    }, "es6", "es3"); $jscomp.SYMBOL_PREFIX = "jscomp_symbol_"; $jscomp.initSymbol = function () { $jscomp.initSymbol = function () { }; $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol) };
    $jscomp.SymbolClass = function (f, l) { this.$jscomp$symbol$id_ = f; $jscomp.defineProperty(this, "description", { configurable: !0, writable: !0, value: l }) }; $jscomp.SymbolClass.prototype.toString = function () { return this.$jscomp$symbol$id_ }; $jscomp.Symbol = function () { function f(n) { if (this instanceof f) throw new TypeError("Symbol is not a constructor"); return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (n || "") + "_" + l++, n) } var l = 0; return f }();
    $jscomp.initSymbolIterator = function () { $jscomp.initSymbol(); var f = $jscomp.global.Symbol.iterator; f || (f = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("Symbol.iterator")); "function" != typeof Array.prototype[f] && $jscomp.defineProperty(Array.prototype, f, { configurable: !0, writable: !0, value: function () { return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this)) } }); $jscomp.initSymbolIterator = function () { } };
    $jscomp.initSymbolAsyncIterator = function () { $jscomp.initSymbol(); var f = $jscomp.global.Symbol.asyncIterator; f || (f = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("Symbol.asyncIterator")); $jscomp.initSymbolAsyncIterator = function () { } }; $jscomp.iteratorPrototype = function (f) { $jscomp.initSymbolIterator(); f = { next: f }; f[$jscomp.global.Symbol.iterator] = function () { return this }; return f }; $jscomp.underscoreProtoCanBeSet = function () { var f = { a: !0 }, l = {}; try { return l.__proto__ = f, l.a } catch (n) { } return !1 };
    $jscomp.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function (f, l) { f.__proto__ = l; if (f.__proto__ !== l) throw new TypeError(f + " is not extensible"); return f } : null; $jscomp.generator = {}; $jscomp.generator.ensureIteratorResultIsObject_ = function (f) { if (!(f instanceof Object)) throw new TypeError("Iterator result " + f + " is not an object"); };
    $jscomp.generator.Context = function () { this.isRunning_ = !1; this.yieldAllIterator_ = null; this.yieldResult = void 0; this.nextAddress = 1; this.finallyAddress_ = this.catchAddress_ = 0; this.finallyContexts_ = this.abruptCompletion_ = null }; $jscomp.generator.Context.prototype.start_ = function () { if (this.isRunning_) throw new TypeError("Generator is already running"); this.isRunning_ = !0 }; $jscomp.generator.Context.prototype.stop_ = function () { this.isRunning_ = !1 };
    $jscomp.generator.Context.prototype.jumpToErrorHandler_ = function () { this.nextAddress = this.catchAddress_ || this.finallyAddress_ }; $jscomp.generator.Context.prototype.next_ = function (f) { this.yieldResult = f }; $jscomp.generator.Context.prototype.throw_ = function (f) { this.abruptCompletion_ = { exception: f, isException: !0 }; this.jumpToErrorHandler_() }; $jscomp.generator.Context.prototype.return = function (f) { this.abruptCompletion_ = { return: f }; this.nextAddress = this.finallyAddress_ };
    $jscomp.generator.Context.prototype.jumpThroughFinallyBlocks = function (f) { this.abruptCompletion_ = { jumpTo: f }; this.nextAddress = this.finallyAddress_ }; $jscomp.generator.Context.prototype.yield = function (f, l) { this.nextAddress = l; return { value: f } }; $jscomp.generator.Context.prototype.yieldAll = function (f, l) { f = $jscomp.makeIterator(f); var n = f.next(); $jscomp.generator.ensureIteratorResultIsObject_(n); if (n.done) this.yieldResult = n.value, this.nextAddress = l; else return this.yieldAllIterator_ = f, this.yield(n.value, l) };
    $jscomp.generator.Context.prototype.jumpTo = function (f) { this.nextAddress = f }; $jscomp.generator.Context.prototype.jumpToEnd = function () { this.nextAddress = 0 }; $jscomp.generator.Context.prototype.setCatchFinallyBlocks = function (f, l) { this.catchAddress_ = f; void 0 != l && (this.finallyAddress_ = l) }; $jscomp.generator.Context.prototype.setFinallyBlock = function (f) { this.catchAddress_ = 0; this.finallyAddress_ = f || 0 }; $jscomp.generator.Context.prototype.leaveTryBlock = function (f, l) { this.nextAddress = f; this.catchAddress_ = l || 0 };
    $jscomp.generator.Context.prototype.enterCatchBlock = function (f) { this.catchAddress_ = f || 0; f = this.abruptCompletion_.exception; this.abruptCompletion_ = null; return f }; $jscomp.generator.Context.prototype.enterFinallyBlock = function (f, l, n) { n ? this.finallyContexts_[n] = this.abruptCompletion_ : this.finallyContexts_ = [this.abruptCompletion_]; this.catchAddress_ = f || 0; this.finallyAddress_ = l || 0 };
    $jscomp.generator.Context.prototype.leaveFinallyBlock = function (f, l) { l = this.finallyContexts_.splice(l || 0)[0]; if (l = this.abruptCompletion_ = this.abruptCompletion_ || l) { if (l.isException) return this.jumpToErrorHandler_(); void 0 != l.jumpTo && this.finallyAddress_ < l.jumpTo ? (this.nextAddress = l.jumpTo, this.abruptCompletion_ = null) : this.nextAddress = this.finallyAddress_ } else this.nextAddress = f }; $jscomp.generator.Context.prototype.forIn = function (f) { return new $jscomp.generator.Context.PropertyIterator(f) };
    $jscomp.generator.Context.PropertyIterator = function (f) { this.object_ = f; this.properties_ = []; for (var l in f) this.properties_.push(l); this.properties_.reverse() }; $jscomp.generator.Context.PropertyIterator.prototype.getNext = function () { for (; 0 < this.properties_.length;) { var f = this.properties_.pop(); if (f in this.object_) return f } return null }; $jscomp.generator.Engine_ = function (f) { this.context_ = new $jscomp.generator.Context; this.program_ = f };
    $jscomp.generator.Engine_.prototype.next_ = function (f) { this.context_.start_(); if (this.context_.yieldAllIterator_) return this.yieldAllStep_(this.context_.yieldAllIterator_.next, f, this.context_.next_); this.context_.next_(f); return this.nextStep_() };
    $jscomp.generator.Engine_.prototype.return_ = function (f) { this.context_.start_(); var l = this.context_.yieldAllIterator_; if (l) return this.yieldAllStep_("return" in l ? l["return"] : function (f) { return { value: f, done: !0 } }, f, this.context_.return); this.context_.return(f); return this.nextStep_() };
    $jscomp.generator.Engine_.prototype.throw_ = function (f) { this.context_.start_(); if (this.context_.yieldAllIterator_) return this.yieldAllStep_(this.context_.yieldAllIterator_["throw"], f, this.context_.next_); this.context_.throw_(f); return this.nextStep_() };
    $jscomp.generator.Engine_.prototype.yieldAllStep_ = function (f, l, n) { try { var r = f.call(this.context_.yieldAllIterator_, l); $jscomp.generator.ensureIteratorResultIsObject_(r); if (!r.done) return this.context_.stop_(), r; var q = r.value } catch (v) { return this.context_.yieldAllIterator_ = null, this.context_.throw_(v), this.nextStep_() } this.context_.yieldAllIterator_ = null; n.call(this.context_, q); return this.nextStep_() };
    $jscomp.generator.Engine_.prototype.nextStep_ = function () { for (; this.context_.nextAddress;)try { var f = this.program_(this.context_); if (f) return this.context_.stop_(), { value: f.value, done: !1 } } catch (l) { this.context_.yieldResult = void 0, this.context_.throw_(l) } this.context_.stop_(); if (this.context_.abruptCompletion_) { f = this.context_.abruptCompletion_; this.context_.abruptCompletion_ = null; if (f.isException) throw f.exception; return { value: f.return, done: !0 } } return { value: void 0, done: !0 } };
    $jscomp.generator.Generator_ = function (f) { this.next = function (l) { return f.next_(l) }; this.throw = function (l) { return f.throw_(l) }; this.return = function (l) { return f.return_(l) }; $jscomp.initSymbolIterator(); this[Symbol.iterator] = function () { return this } }; $jscomp.generator.createGenerator = function (f, l) { l = new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(l)); $jscomp.setPrototypeOf && $jscomp.setPrototypeOf(l, f.prototype); return l };
    $jscomp.asyncExecutePromiseGenerator = function (f) { function l(l) { return f.next(l) } function n(l) { return f.throw(l) } return new Promise(function (r, q) { function v(f) { f.done ? r(f.value) : Promise.resolve(f.value).then(l, n).then(v, q) } v(f.next()) }) }; $jscomp.asyncExecutePromiseGeneratorFunction = function (f) { return $jscomp.asyncExecutePromiseGenerator(f()) }; $jscomp.asyncExecutePromiseGeneratorProgram = function (f) { return $jscomp.asyncExecutePromiseGenerator(new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(f))) };
    $jscomp.polyfill("Array.prototype.fill", function (f) { return f ? f : function (f, n, r) { var l = this.length || 0; 0 > n && (n = Math.max(0, l + n)); if (null == r || r > l) r = l; r = Number(r); 0 > r && (r = Math.max(0, l + r)); for (n = Number(n || 0); n < r; n++)this[n] = f; return this } }, "es6", "es3");
    $jscomp.iteratorFromArray = function (f, l) { $jscomp.initSymbolIterator(); f instanceof String && (f += ""); var n = 0, r = { next: function () { if (n < f.length) { var q = n++; return { value: l(q, f[q]), done: !1 } } r.next = function () { return { done: !0, value: void 0 } }; return r.next() } }; r[Symbol.iterator] = function () { return r }; return r }; $jscomp.polyfill("Array.prototype.values", function (f) { return f ? f : function () { return $jscomp.iteratorFromArray(this, function (f, n) { return n }) } }, "es8", "es3");
    $jscomp.checkStringArgs = function (f, l, n) { if (null == f) throw new TypeError("The 'this' value for String.prototype." + n + " must not be null or undefined"); if (l instanceof RegExp) throw new TypeError("First argument to String.prototype." + n + " must not be a regular expression"); return f + "" };
    $jscomp.polyfill("String.prototype.repeat", function (f) { return f ? f : function (f) { var l = $jscomp.checkStringArgs(this, null, "repeat"); if (0 > f || 1342177279 < f) throw new RangeError("Invalid count value"); f |= 0; for (var r = ""; f;)if (f & 1 && (r += l), f >>>= 1) l += l; return r } }, "es6", "es3"); $jscomp.findInternal = function (f, l, n) { f instanceof String && (f = String(f)); for (var r = f.length, q = 0; q < r; q++) { var v = f[q]; if (l.call(n, v, q, f)) return { i: q, v: v } } return { i: -1, v: void 0 } };
    $jscomp.polyfill("Array.prototype.findIndex", function (f) { return f ? f : function (f, n) { return $jscomp.findInternal(this, f, n).i } }, "es6", "es3"); var Tee = Tee || {};
    (function () {
      function f(b, c) { return new Tee.Point(b, c) } function l(b, c, a, e) { function d() { if (a.x == c.x && a.y == c.y) { var d = b.x - c.x; var e = b.y - c.y } else { d = a.x - c.x; e = a.y - c.y; var m = ((b.x - c.x) * d + (b.y - c.y) * e) / (d * d + e * e); 0 > m ? (d = b.x - c.x, e = b.y - c.y) : 1 < m ? (d = b.x - a.x, e = b.y - a.y) : (d = b.x - (c.x + m * d), e = b.y - (c.y + m * e)) } return Math.sqrt(d * d + e * e) } return b.x == c.x && b.y == c.y || b.x == a.x && b.y == a.y ? !0 : Math.abs(d()) <= e + 1 } function n(b, c, a, e) { return new Tee.Rectangle(b, c, a, e) } function r() {
        this.left = this.right = this.top = this.bottom = 2; this.apply =
          function (b) { var c = b.width, a = b.height; b.x += c * this.left * .01; b.width -= c * Math.min(100, this.left + this.right) * .01; b.y += a * this.top * .01; b.height -= a * Math.min(100, this.top + this.bottom) * .01 }
      } function q(b, c, a) {
        this.format = a; this.bounds = c; var e = this; c = a.shadow; this.old = new t; this.old.set(c); c.visible = !0; c.color = "rgba(0,255,0,0.1)"; c.blur = 10; c.width = 0; c.height = 0; this.enabled = !0; a = new Tee.Animation(a.chart, function (a) { e.enabled && (1 > a ? e.format.shadow.color = "rgba(0,255,0," + a.toString() + ")" : e.autoHide && e.restore()) });
        a.duration = b; a.animate(); this.restore = function () { this.format.shadow.set(this.old); this.enabled = !1 }
      } function v(b) {
        this.chart = b; this.visible = !1; this.colors = ["white", "silver"]; this.direction = "topbottom"; this.stops = null; this.offset = { x: 0, y: 0 }; this.create = function (c, a) { return this.rect(c.x, c.y, c.width, c.height, a) }; this.rect = function (c, a, b, d, g) {
          var e = this.chart.ctx, m = e.createLinearGradient; "topbottom" == this.direction ? b = m.call(e, c, a, c, a + d) : "bottomtop" == this.direction ? b = m.call(e, c, a + d, c, a) : "leftright" == this.direction ?
            b = m.call(e, c, a, c + b, a) : "rightleft" == this.direction ? b = m.call(e, c + b, a, c, a) : "radial" == this.direction ? (c = c + .5 * b + this.offset.x, a = a + .5 * d + this.offset.y, b = e.createRadialGradient(c, a, 0, c, a, Math.max(b, d))) : b = "diagonalup" == this.direction ? m.call(e, c, a + d, c + b, a) : m.call(e, c, a, c + b, a + d); g && this.setEndColor(g); d = this.colors; e = d.length; c = (a = this.stops) ? a.length : 0; if (1 < e) for (g = 0; g < e; g++)b.addColorStop(c <= g ? g / (e - 1) : a[g], d[g]); else b.addColorStop(0, 0 < e ? d[0] : "white"); return b
        }
      } function t(b) {
        this.chart = b; this.visible = !1;
        this.blur = 4; this.color = "rgba(80,80,80,0.75)"; this.height = this.width = 4; this.prepare = function (c) { this.visible ? (c.shadowBlur = this.blur, c.shadowColor = this.color, c.shadowOffsetX = this.width, c.shadowOffsetY = this.chart.isAndroid ? -this.height : this.height) : c.shadowColor = "transparent" }
      } function C(b) {
        this.url = ""; this.repeat = "no-repeat"; this.backFill = !1; this.chart = b; this.visible = !0; this.tryDraw = function (c, a, e, d) {
          this.image || (this.image = new Image, this.image.onload = function () { b.draw() }); if ("" === this.image.src) b =
            this.chart, this.image.src = this.url; else if (b.ctx.drawImage) if ("repeat" == this.repeat) { var g = b.ctx.createPattern(this.image, "repeat"); b.ctx.fillStyle = g; b.ctx.fillRect(c, a, e, d) } else b.ctx.drawImage(this.image, c, a, e, d)
        }
      } function x(b) {
        this.chart = b; this.fill = "black"; this.size = 1; this.join = "round"; this.cap = "square"; this._g = this.dash = null; J ? J(this, "gradient", { get: function () { this._g || (this._g = new v(this.chart)); return this._g } }) : this._g = this.gradient = new v(b); this.prepare = function (c, a) {
          a = a || this.chart.ctx;
          var b = this._g; a.strokeStyle = b && b.visible ? b.create(this.chart.bounds) : c ? c : this.fill; a.lineWidth = this.size; a.lineJoin = this.join; a.lineCap = this.cap; a.shadowColor = "transparent"; a.setLineDash ? a.setLineDash(this.dash || []) : a.mozCurrentTransform ? a.mozDash = this.dash : this.chart.isChrome && (a.webkitLineDash = this.dash)
        }; this.setChart = function (c) { this.chart = c; this._g && (this._g.chart = c) }
      } function A(b) {
        this.chart = b; this.style = "11px Tahoma"; this._g = null; J ? J(this, "gradient", {
          get: function () {
            this._g || (this._g = new v(this.chart));
            return this._g
          }
        }) : this._g = this.gradient = new v(b); this.fill = "black"; this._sh = null; J ? J(this, "shadow", { get: function () { this._sh || (this._sh = new t(this.chart)); return this._sh } }) : this._sh = this.shadow = new t(b); this._s = null; J ? J(this, "stroke", { get: function () { this._s || (this._s = new x(this.chart), this._s.fill = ""); return this._s } }) : (this._s = this.stroke = new x(b), this._s.fill = ""); this.textAlign = "center"; this.baseLine = "alphabetic"
      } function D(b) {
        this.chart = b; this.items = []; this.draw = function () {
          for (var c = 0, a; a = this.items[c++];)a.active &&
            (a instanceof Tee.ToolTip ? void 0 != a.currP && a.realTime ? a.mousemove(a.currP) : a.draw() : a.draw())
        }; this.mousemove = function (c) { for (var a = 0, b; b = this.items[a++];)b.active && (b.currP = void 0, b.mousemove(c)) }; this.mousedown = function (c) { for (var a = 0, b, d = !1; b = this.items[a++];)b.active && b.mousedown(c) && (d = !0); return d }; this.mouseout = function () { for (var c = 0, a; a = this.items[c++];)a.active && a.mouseout() }; this.clicked = function (c) {
          for (var a = this.items.length, b, d = !1; b = this.items[--a];)b.active && b.clicked(c) && (d = !0, b.onclick &&
            (d = b.onclick(b, c.x, c.y))); return d
        }; this.add = function (c) { this.items.push(c); return c }
      } function G(b) {
        function c(a) { var d = a.chart.chartRect, c = a.direction, b = "both" === c; e.set(d.x, d.y, d.width, d.height); if (a.old) { if (b || "horizontal" === c) 0 > a.old.x ? (e.x = a.chart.oldPos.x + a.old.x, e.width = -a.old.x) : (e.x = a.chart.oldPos.x, e.width = a.old.x); if (b || "vertical" === c) 0 > a.old.y ? (e.y = a.chart.oldPos.y + a.old.y, e.height = -a.old.y) : (e.y = a.chart.oldPos.y, e.height = a.old.y) } return e } this.chart = b; this.active = !1; this.enabled = !0; this.touching =
          this.done = !1; this.direction = "both"; this.keepAspect = !1; this.mouseButton = 0; this.wheel = { enabled: !1, factor: 1 }; var a = this.format = new Tee.Format(b); a.fill = "rgba(255,255,255,0.5)"; a.stroke.fill = "darkgray"; a.stroke.size = 2; var e = new n; this.change = function (a) { this.old || (this.old = new f); var d = this.chart.oldPos; this.old.x = a.x - d.x; this.keepAspect ? (a = this.chart.chartRect, this.old.y = a.height / a.width * this.old.x) : this.old.y = a.y - d.y }; this.draw = function () { a.rectangle(c(this)) }; this.apply = function () {
            if (0 > this.old.x ||
              0 > this.old.y) { if (this.reset(), this.onreset) this.onreset() } else if (c(this), 3 < e.width && 3 < e.height) { var a = this.direction, b = "both" === a; this.chart.axes.each(function () { this.horizontal ? (b || "horizontal" === a) && this.calcMinMax(e.x, e.x + e.width) : (b || "vertical" === a) && this.calcMinMax(e.y + e.height, e.y) }); return !0 } return !1
          }; this.reset = function () { this.chart.axes.each(function () { this.automatic = !0 }) }
      } function Y(b) {
        this.chart = b; this.active = !1; this.enabled = !0; this.done = !1; this.mouseButton = 2; this.direction = "both"; this.position =
          new f(0, 0)
      } function Q(b, c) {
        Tee.Annotation.call(this, b); this.transparent = !0; this._expand = !1; J ? J(this, "expand", { get: function () { return this._expand }, set: function (a) { this._expand = a; this._expand || (a = this.format, a.round.x = 8, a.round.y = 8, a.round.corners = null, a.stroke.fill = "black") } }) : this._expand = this.expand = !1; var a = this.format.font, e = a.shadow, d = this.position; e.visible = !0; e.width = 2; e.height = 2; e.blur = 8; a.style = "18px Tahoma"; a.fill = c; this.padding = 4; this.calcRect = function (a) {
          this.resize(); var c = this.bounds,
            g = c.height + (this.transparent ? 1 : 2) * this.padding, e = b.chartRect; a ? (d.y = e.y, e.automatic && e.setTop(e.y + g)) : (d.y = e.y + e.height - c.height - this.padding, e.automatic && (e.height -= g)); 0 > e.height && (e.height = 0); d.x = .5 * (b.canvas.width - c.width)
        }; this.tryDraw = function (a) {
          if (this.shouldDraw()) {
            this.calcRect(a); var c = this.bounds, g = this.chart.ctx, e = g.beginParent; this.visual = e ? g.beginParent() : null; if (this._expand) {
              var k = b.panel.format; d.x = "" !== k.stroke.fill ? k.stroke.size : 0; d.y = a ? d.x : b.canvas.height - (k.shadow.visible ? k.shadow.height :
                0) - d.x - c.height; c.width = b.canvas.width - (k.shadow.visible ? k.shadow.width : 0) - 2 * d.x; var p = this.format; p.round.x = k.round.x; p.round.y = k.round.y; p.round.corners = [a, a, !a, !a]; p.stroke.fill = ""; this.transparent = !1
            } c.x = d.x; c.y = d.y; this.doDraw(); e && g.endParent()
          }
        }
      } function Z(b) {
        var c = this.format = new Tee.Format(b); c.round.x = 12; c.round.y = 12; c.stroke.size = 3; c.gradient.visible = !0; c.gradient.direction = "bottomtop"; c.shadow.visible = !0; c.stroke.fill = "#606060"; this.transparent = !!b.__webgl; this.margins = new r; this.clear =
          function () { var a = b.bounds; b.ctx.clearRect(a.x, a.y, a.width, a.height) }; this.draw = function () {
            if (this.transparent || b.__webgl) this.clear(); else {
              var a = b.chartRect, e = c.shadow; e.visible && (a.width -= .5 * Math.abs(e.width) + 2, a.height -= .5 * Math.abs(e.height) + 2, 0 > e.width && (a.x -= e.width), 0 > e.height && (a.y -= e.height)); var d = 0; "" !== c.stroke.fill && (d = c.stroke.size, 1 < d && (d *= .5, a.x += d, a.y += d, a.width -= 2 * d, a.height -= 2 * d)); (e.visible || 0 < c.round.x || 0 < c.round.y) && this.clear(); c.rectangle(a); 0 < d && (a.x += d, a.y += d, a.width -= 2 * d,
                a.height -= 2 * d)
            }
          }
      } function L(b) { var c = this.format = new Tee.Format(b); c.fill = "#E6E6E6"; c.stroke.fill = "black"; c.z = 0; c.depth = 0; this.visible = !0; this.bounds = new n; this.size = 0; this.draw = function () { c.cube(this.bounds); c.draw(b.ctx, null, this.bounds) } } function B(b, c, a) {
        function e(a) { this.chart = a; this.stroke = new x(a); this.stroke.cap = "butt"; this.visible = !0; this.length = 4 } function d(a) {
          Tee.Annotation.call(this, a); this.padding = 4; this.transparent = !0; this.rotation = 0; this.format.font.textAlign = "center"; this.drawIt =
            function (d, c, b, g) { this.format.font.textAlign = d; 0 === g ? (this.position.x = c, this.position.y = b, this.forceDraw()) : (d = a.ctx, d.save(), d.translate(c, b), d.rotate(-g * Math.PI / 180), this.position.x = 0, this.position.y = 0, this.forceDraw(), d.restore()) }
        } function g(a, d) { var c = 0, k = d.split(" "), b; for (b = 0; b < k.length; b++)d = a.textWidth(k[b]), d > c && (c = d); return c } function h(a) { return isFinite(a) ? 10 <= a ? 10 * h(.1 * a) : 1 > a ? .1 * h(10 * a) : 2 > a ? 2 : 5 > a ? 5 : 10 : 1 } this.chart = b; this.visible = !0; this.inverted = !1; this.horizontal = c; this.otherSide = a;
        this.bounds = new n; this.position = 0; this.format = new Tee.Format(b); this.format.stroke.size = 2; this.format.depth = .2; this.custom = !1; this.z = a ? 1 : 0; this.maxLabelDepth = 0; this.labels = new function (a, d) {
          this.chart = a; this.format = new Tee.Format(a); this.decimals = 2; this.fixedDecimals = !1; this.padding = 4; this.separation = 10; this.visible = !0; this.rotation = 0; this.alternate = !1; this.maxWidth = 0; this.wordWrap = "no"; this.roundFirst = !0; this.labelStyle = "auto"; this.dateFormat = "shortDate"; this.checkStyle = function () {
            var a = this.labelStyle,
            c = d.firstSeries; this._textlabels = this._text = null; if ("auto" == a) 0 < c.data.labels.length && c.associatedToAxis(d) && d.horizontal == c.notmandatory.horizontal && (this._text = c); else if ("mark" == a || "text" == a) this._text = c
          }; this.formatValueString = function (a) {
            if (this.valueFormat) {
              var d = Number("1.2").toLocaleString().substr(1, 1); a = (1 * a).toLocaleString(); var c = String(a).split(d); a = c[0]; var k = ""; if (0 < this.decimals) for (var b = 0; b < this.decimals; b++)k += "0"; c = 1 < c.length ? c[1] : ""; c = (c + k).substr(0, this.decimals); return 0 < c.length ?
                a + d + c : a
            } return a.toFixed(this.decimals)
          }; this.getLabel = function (c) {
            var k = c | 0; if (this._text && k == c) { var b = this._text.data; b.x && (k = b.x.indexOf(k)); var g = a.series.items, e, p; b = 0 < g.length && g[0] instanceof Tee.Bar && "sideAll" == g[0].stacked ? b.labels[c] : b.labels[k]; if (!b) { for (e = 0; (p = g[e++]) && !(p != this._text && p.visible && p.associatedToAxis(d) && (b = p.data.labels[k]));); void 0 === b && (b = "") } } else b = d.dateTime ? Date.prototype.format ? (new Date(c)).format(this.dateFormat) : (new Date(c)).toDateString() : this.formatValueString(c);
            "no" != this.wordWrap && 0 != this.wordWrap && (b = b.replace(/ /g, "\n")); this.ongetlabel && (b = this.ongetlabel(c, b), this.format.font.prepare()); return "" + b
          }; this.width = function (a) { var d = this.fixedDecimals; this.fixedDecimals = !0; a = this.format.textWidth(this.getLabel(a)); this.fixedDecimals = d; return a }
        }(b, this); var m = this.labels.format.font; this.scroll = function (a) { this.automatic = !1; this.inverted && (a = -a); this.minimum += a; this.maximum += a }; c ? (m.textAlign = "center", m.baseLine = a ? "bottom" : "top") : (m.textAlign = a ? "left" : "right",
          m.baseLine = "middle"); this.grid = new function (a) { this.chart = a; a = this.format = new Tee.Format(a); a.stroke.fill = "silver"; a.stroke.cap = "butt"; a.fill = ""; this.visible = !0; this.lineDash = !1 }(b); this.ticks = new e(b); this.innerTicks = new e(b); this.innerTicks.visible = !1; m = this.minorTicks = new e(b); m.visible = !1; m.length = 2; m.count = 3; d.prototype = new Tee.Annotation; this.title = new d(b); c || (this.title.rotation = a ? 270 : 90); this.automatic = !0; this.increment = this.maximum = this.minimum = 0; this.log = !1; this.start = this.endPos = this.startPos =
            0; this.end = 100; this.increm = this.scale = this.axisSize = 0; this.minmaxLabelWidth = function (a) {
              var d = this.labels, c = d._text, b = 0, e = this.labels; if (null !== c && void 0 !== c) { var h = "auto" == d.wordWrap || "yes" == d.wordWrap; e.format.font.prepare(); for (var w = 0, m = c.data.labels.length; w < m; w++) { var f = c.data.labels[w]; d.ongetlabel && (f = d.ongetlabel(w, f)); f && (b = Math.max(b, h ? g(d.format, f) : d.format.textWidth(f))) } } else b = this.roundMin(), c = this.maximum, b = Math.max(d.width(b), d.width(.5 * (b + c))), b = Math.max(b, d.width(1E-7)), b = Math.max(b,
                d.width(c)); if (0 == d.rotation) { if (this.horizontal && a || !this.horizontal && !a) b = e.format.textHeight("Wj") } else b = this.horizontal ? a ? Math.abs(Math.sin(Math.PI / 180 * d.rotation) * b) : Math.abs(Math.cos(Math.PI / 180 * d.rotation) * b) : a ? Math.abs(Math.cos(Math.PI / 180 * d.rotation) * b) : Math.abs(Math.sin(Math.PI / 180 * d.rotation) * b); b < e.format.textHeight("Wj") && (b = e.format.textHeight("Wj")); return b
            }; this.checkRange = function () { this.maximum - this.minimum < this.minAxisRange && (this.maximum = this.minimum + this.minAxisRange) }; this.checkMinMax =
              function () { var a = this.chart.series, d = this.horizontal; this.automatic && (this.minimum = d ? a.minXValue(this) : a.minYValue(this), this.maximum = d ? a.maxXValue(this) : a.maxYValue(this), this.checkRange()) }; this.calcAxisScale = function () { var a = this.maximum - this.minimum; 0 === a ? a = 1 : this.log && (a = Math.log(a)); this.scale = this.axisSize / a }; this.calcScale = function () {
                var a = this.labels; a.format.font.prepare(); var d = this.minmaxLabelWidth(!1); a.alternate && (d *= .5); d *= 1 + .02 * a.separation; if (0 === this.increment) if (this.maximum == this.minimum) a =
                  1; else { a = this.axisSize / d; b: { d = a; var c, b, g; for (c = 0; b = this.chart.series.items[c++];)if (b.visible && b.sequential && ((g = b.yMandatory) && this.horizontal || !g && !this.horizontal) && b.associatedToAxis(this) && b.count() <= d) { d = !0; break b } d = !1 } a = Math.abs(this.maximum - this.minimum) / (a + 1); a = d ? Math.max(1, a) : h(a) } else a = this.increment; this.increm = a; 0 >= this.increm ? this.increm = .1 : 0 < this.increm && 1E-8 >= this.increm && (this.increm = 1E-8)
              }; this.hasAnySeries = function () {
                var a = this.chart.series.items, d, c; for (d = 0; c = a[d++];)if (c.visible &&
                  c.associatedToAxis(this) && (c.__alwaysDraw || 0 < c.count())) return a = this.horizontal, c.yMandatory && (a = !a), this.dateTime = (a = a ? c.data.values : c.data.x) && 0 < a.length && a[0] instanceof Date, c; return null
              }; this.drawAxis = function () {
                var a = this.format, d = this.chart.ctx, b = this.axisPos, g = this.startPos, e = this.endPos, h = 20 * a.depth; this.chart.aspect.view3d && 0 < h ? (b = c ? { x: g, y: b - .5 * h, width: e - g, height: h } : { x: b - .5 * h, y: g, width: h, height: e - g }, g = this.z, a.z = g - .5 * a.depth, a.cylinder(b, 1, !c), a.draw(d, null, b), a.z = g) : (d.z = this.z, d.beginPath(),
                  c ? (d.moveTo(g, b), d.lineTo(e, b)) : (d.moveTo(b, g), d.lineTo(b, e)), a.stroke.prepare(), d.stroke())
              }; this.drawGrids = function () {
                var d = this.chart.ctx, b = this.chart.chartRect, g = this.grid.format, e = this.roundMin(); if (this.grid.centered) { var h = .5 * this.increm; e = e - h >= this.minimum ? e - h : e + h } h = this.chart.aspect; var m = h.view3d, f = m && h.orthogonal, z = m ? 1 : 0; d.beginPath(); if (c) { var l = this.bounds.y - z; var M = a ? b.getBottom() - 1 : b.y + 1 } else { var n = this.bounds.x + z; var q = a ? b.x + 1 : b.getRight() - 1 } z = -1; if ("" !== g.fill) {
                  b = e; var r = g.stroke.fill;
                  for (g.stroke.fill = ""; b <= this.maximum;) { var v = this.calc(b); 0 === z % 2 && (c ? g.rectangle(t, M, v - t, l - M) : g.rectangle(n, t, q - n, v - t)); var t = v; b += this.increm; z++ } g.stroke.fill = r; d.fillStyle = ""
                } b = e; f && (c ? (l -= h._orthoy, M -= h._orthoy) : (n += h._orthox, q += h._orthox)); e = g.stroke.dash && !d.setLineDash && !d.mozCurrentTransform; for (d.z = m ? this.chart.walls.back.format.z - .01 : 0; b <= this.maximum;) {
                  z = this.calc(b); c ? n = q = z : l = M = z; f && (c ? (n += h._orthox, q += h._orthox) : (l -= h._orthoy, M -= h._orthoy)); m && !this.otherSide && d.lineZ && d.lineZ(n, l, 0,
                    d.z); if (e) { t = d; z = n; var x = l, H = q; r = M; v = [10, 5]; t.save(); H -= z; var A = r - x; r = Math.sqrt(H * H + A * A); H = Math.atan2(A, H); t.translate(z, x); t.moveTo(0, 0); t.rotate(H); x = v.length; H = 0; A = !0; for (z = 0; r > z;)z += v[H++ % x], z > r && (z = r), A ? t.lineTo(z, 0) : t.moveTo(z, 0), A = !A; t.restore() } else d.moveTo(n, l), d.lineTo(q, M); b += this.increm
                } g.stroke.prepare(); g.shadow.prepare(d); d.stroke()
              }; this.roundMin = function () { if (0 !== this.increm && this.labels.roundFirst) { var a = this.minimum / this.increm; a -= a % 1; return this.increm * (0 >= this.minimum ? a : 1 + a) } return this.minimum };
        this.drawTicks = function (d, b, g) { var k = this.roundMin(), e = 1 + d.length, h = 1; if (c && a || !c && !a) e = -e, h = -1; e = e * b + this.axisPos; h = h * b + this.axisPos; var p = 1, m = 0; if (0 === g) var w = this.increm; else p += g, w = this.increm / p; var f = this.chart.ctx; for (f.beginPath(); k <= this.maximum;) { if (0 === g || 0 !== m++ % p) b = this.calc(k), c ? (f.moveTo(b, h), f.lineTo(b, e)) : (f.moveTo(h, b), f.lineTo(e, b)); k += w } d.stroke.prepare(); d.z = this.z; f.z = d.z; f.stroke() }; this.drawTitle = function () {
          var a = this.labels, d = this.title.bounds, b = this.title.rotation, g = "center";
          if ("" !== this.title.text) {
            if (c) { var e = this.title.padding; this.ticks.visible && (e += this.ticks.length); if (a.visible) { a.format.font.prepare(); var h = this.maxLabelDepth; a.alternate && (h *= 2); e += h } h = this.startPos + .5 * this.axisSize; this.otherSide && (e = -e - d.height); e = this.axisPos + e; 0 === b ? h -= .5 * d.width : (h += d.height * (this.otherSide ? -.5 : .5), this.otherSide || (e += 1.5 * d.height), g = this.otherSide ? "near" : 270 === b ? "near" : "far") } else h = this.title.padding, this.ticks.visible && (h += this.ticks.length), a.visible && (e = a.maxWidth, a.alternate &&
              (e *= 2), h += e), e = this.startPos + .5 * this.axisSize, 0 === b ? (h = this.axisPos + (this.otherSide ? h : -h), e -= .5 * d.height, g = this.otherSide ? "near" : "far") : (h += d.height, h = this.axisPos + (this.otherSide ? h : -h), e += d.width * (this.otherSide ? -.5 : .5)); this.title.drawIt(g, h, e, b)
          }
        }; this.rotatedWidth = function (a, d) { return Math.abs(Math.sin(Math.PI / 180 * a.rotation) * d) }; this.drawLabel = function (a, d) {
          var b = this.labels; a = b.getLabel(a); d.width = b.format.textWidth(a); d.width > b.maxWidth && (b.maxWidth = d.width); if (0 == b.rotation) this.horizontal ?
            d.x -= .5 * d.width : d.y += .5 * d.height; else { var c = this.chart.ctx; c.save(); c.translate(d.x, d.y); c.rotate(-Math.PI * b.rotation / 180); c.textAlign = "right"; if (this.horizontal) { c = .5 * this.rotatedWidth(b, d.width); var g = .5 * this.rotatedWidth(b, d.height) - 4; 220 <= b.rotation ? this.otherSide ? d.x = -1 * c : d.x = c : this.otherSide ? d.x = c + 4 : d.x = -1 * c; this.otherSide ? d.y = g : d.y = -1 * g } else c = this.rotatedWidth(b, d.width), this.otherSide ? d.x = c : d.x = 30, d.y = -8 } "right" == b.format.font.textAlign && (d.x -= d.width); b.format.z = this.z * this.chart.walls.back.format.z;
          b.format.drawText(d, a); 0 !== b.rotation && this.chart.ctx.restore()
        }; this.drawLabels = function () {
          var a = this.roundMin(), d = new n, b = this.axisPos, c = this.labels; c.maxWidth = 0; c.format.font.prepare(); var g = this.ticks.visible ? this.ticks.length : 0; g += c.padding; this.horizontal ? this.otherSide ? b -= g : b += g : this.otherSide ? b += g : b -= g; g = b; d.height = c.format.textHeight("Wj"); for (var e = (c = c.alternate) ? this.horizontal ? -this.minmaxLabelWidth(!0) : this.minmaxLabelWidth(!0) : 0, h; a <= this.maximum;)h = this.calc(a), this.horizontal ? (d.x =
            h, d.y = b) : (d.x = b, d.y = h - .5 * d.height), c && (b = b == g ? this.otherSide ? g + e : g - e : g), this.drawLabel(a, d), a += this.increm
        }; this.calc = function (a) { a !== a ? a = 0 : this.log ? (a -= this.minimum, a = 0 >= a ? 0 : Math.log(a) * this.scale) : a = (a - this.minimum) * this.scale; return this.horizontal ? this.inverted ? this.endPos - a : this.startPos + a : this.inverted ? this.startPos + a : this.endPos - a }; this.fromPos = function (a) { var d = this.horizontal; this.inverted && (d = !d); return this.minimum + (d ? a - this.startPos : this.endPos - a) / this.scale }; this.fromSize = function (a) {
          return a /
            this.scale
        }; this.fromSizeCalcIndex = function (a) {
          var d = -1; if (1 == this.dateTime) { var b = 0, c = 0; a = (this.maximum - this.minimum) / this.axisSize * a + this.minimum; for (1 < this.chart.series.items[0].data.x.length && (c = this.chart.series.items[0].data.x[1].getTime() - this.chart.series.items[0].data.x[0].getTime()); -1 == d && b < this.chart.series.items[0].data.x.length;)this.chart.series.items[0].data.x[b].getTime() + c / 2 > a && a + c / 2 > this.chart.series.items[0].data.x[b].getTime() ? d = b : b++ } else if (d = a / this.scale + this.minimum, this.chart.series.items[0].data.values.length <
            d || -.5 > d) d = -1; return d
        }; this.calcSize = function (a) { return Math.abs(this.calc(a) - this.calc(0)) }; this.calcMinMax = function (a, d) { this.automatic = !1; a = this.fromPos(a); d = this.fromPos(d); if (a > d) { var b = a; a = d; d = b } this.minimum = a; this.maximum = d; this.checkRange() }; this.minAxisRange = 1E-10; this.setMinMax = function (a, d) { this.automatic = !1; this.minimum = a; this.maximum = d; this.checkRange() }
      } function V(b) {
        this.chart = b; this.useStrokeColor = this.transparent = !1; this.activeStyle = "none"; var c = this.format = new Tee.Format(b); c.fill =
          "white"; c.round.x = 8; c.round.y = 8; c.font.baseLine = "top"; c.shadow.visible = !0; c.z = 0; c.depth = .05; this.title = new Tee.Annotation(b); this.title.transparent = !0; this.bounds = new n; this.position = "right"; this.visible = !0; this.inverted = !1; this.margin = this.padding = 5; this.align = 0; this.fontColor = !1; var a = this.dividing = new x(b); a.fill = ""; a.cap = "butt"; this.over = -1; this.symbol = new function (a) {
            this.chart = a; var d = this.format = new Tee.Format(a), b = d.shadow; b.visible = !0; b.color = "silver"; b.width = 2; b.height = 2; d.depth = .01; this.padding =
              this.height = this.width = 8; this.style = "rectangle"; this.visible = !0; this.draw = function (b, c, g, e) {
                var h = a.ctx; a: { if (b.hover.enabled) { var k = a.legend.showValues(); if (k && b.over == c || !k && 0 <= b.over) { var p = b.hover; break a } } p = null } k = d.fill; var u = d.stroke; d.fill = b.legendColor(c); h.z = -.01; switch (this.style) {
                  case "rectangle": p && (d.stroke = p.stroke); this.chart.aspect.view3d ? (b = { x: g, y: e - .5 * this.height - 1, width: this.width, height: this.height }, k = d.z, c = h.z, d.z = h.z - d.depth, d.cube(b), d.draw(h, null, b), d.z = k, h.z = c) : d.rectangle(g,
                    e - .5 * this.height - 1, this.width, this.height); break; case "triangle": p && (d.stroke = p.stroke); d.polygon([new f(g + .5 * this.width, e - .5 * this.height), new f(g + this.width, e + .5 * this.height), new f(g, e + .5 * this.height)]); break; case "ellipse": p && (d.stroke = p.stroke); d.ellipse(g + .5 * this.width, e, this.width, this.height); break; default: h.beginPath(), h.moveTo(g, e), h.lineTo(g + this.width, e), p ? p.stroke.prepare() : d.stroke.prepare(d.fill), h.stroke()
                }d.fill = k; d.stroke = u
              }
          }(b); this.itemHeight = 10; this.innerOff = 0; this.textStyle = this.legendStyle =
            "auto"; this.hover = new Tee.Format(b); this.hover.enabled = !0; this.hover.font.fill = "red"; this.totalWidth = function () { var a = w + 8, d = this.symbol; d.visible && (a += d.width + d.padding); return a }; var e = 0; this._space = function () { return this.bounds.y + e + this.margin * b.bounds.height * .01 }; this.availRows = function () { var a = this._space() + .5 * this.itemHeight; a || (a = 0); return (b.bounds.getBottom() - a) / this.itemHeight | 0 }; this.itemsCount = function () {
              var a = b.series, d = this.showHidden ? b.series.items.length : b.series.visibleCount(), c = b.bounds;
              if (0 === d) return 0; var g = this.legendStyle; if ("values" === g && 0 < d) d = a.firstVisible().legendCount(); else if ("auto" === g && 1 < d || "series" === g) for (g = 0; g < a.items.length; g++)a.items[g].legend.visible || d--; else 1 == d && (d = a.firstVisible().legendCount()); this.isVertical() ? (.5 + d) * this.itemHeight > c.height - this._space() && (d = this.availRows()) : (this.rows = 1, a = this.totalWidth(), g = this.calcPadding(c), g = c.width - 2 * g, d * a > g ? (this.perRow = g / a | 0, d > this.perRow && (this.rows = 1 + (d / this.perRow | 0), this.rows * this.itemHeight > c.height - this.bounds.y &&
                (this.rows = this.availRows(), d = this.rows * this.perRow))) : this.perRow = d); return d
            }; this.showValues = function () { return "values" === this.legendStyle || "auto" === this.legendStyle && 1 == (this.showHidden ? b.series.items.length : b.series.visibleCount()) }; this.itemText = function (a, d) { var b = a.legendText(d, this.textStyle, !1, !0); return this.ongettext ? this.ongettext(this, a, d, b) : b }; this.calcItemPos = function (a, d) {
              var b = this.itemHeight, c = this.bounds; d.x = c.x; d.y = c.y + this.innerOff; this.isVertical() ? (d.x += c.width - 6 - this.innerOff,
                d.y += .4 * b + a * b + e) : (d.x += this.innerOff + (1 + a % this.perRow) * this.totalWidth(), d.y += b * ((a / this.perRow | 0) + .25))
            }; this.calcItemRect = function (a, d) { var b = this.itemHeight, c = this.bounds; d.height = b; d.x = c.x; d.y = c.y; this.isVertical() ? (d.width = c.width, d.y += .4 * b + a * b + e) : (d.width = this.totalWidth(), d.x += this.innerOff + a % this.perRow * d.width, d.y += b * ((a / this.perRow | 0) + .25)) }; var d = new n; this.mousedown = function (a) {
              if (-1 !== this.over && "none" !== this.activeStyle) for (a = 0; a < b.series.items.length; a++) {
                var d = b.series.items[a]; if (a ===
                  this.over) { d.visible = !d.visible; console.log("mousedown-visible", d.visible); b.draw(); break }
              } if (this.onclick && -1 !== this.over) { if (this.showValues()) this.onclick(b.series.firstVisible(), this.over); else { a = b.series.items; d = a.length; for (var c = 0, g = 0; g < d; g++)if (this.showHidden || a[g].visible) if (c == this.over) { this.onclick(a[g], -1); break } else c++ } return !0 } return !1
            }; this.mousemove = function (a) {
              var b = this.over; if (this.bounds.contains(a)) for (var c = this.itemsCount(), g = 0; g < c; g++) {
                if (this.calcItemRect(g, d), d.contains(a)) {
                  b =
                  g; break
                }
              } else b = -1; if (b != this.over) { if (this.onhover) this.onhover(this.over, b); this.over = b; var e = this.chart; window.requestAnimFrame(function () { e.draw() }) } this.onclick && (this.chart.newCursor = -1 === b ? "default" : "pointer")
            }; this.drawSymbol = function (a, d, b) { this.symbol.draw(a, d, b.x - w - this.symbol.width - this.symbol.padding, b.y + .4 * this.itemHeight) }; var g = { x: 0, y: 0 }, h = new n, m; this.drawItem = function (a, d, b, e) {
              var p = !1; console.log("drawItem"); var u = this.isVertical(); this.showHidden = "none" !== this.activeStyle; this.calcItemPos(b,
                g); h.x = g.x; h.y = g.y; u ? h.y -= this.chart.isMozilla ? 0 : 2 : this.chart.isMozilla ? h.y++ : h.y--; var f = c.font.fill; d.visible || "opacity" !== this.activeStyle ? this.over == b ? c.font.fill = this.hover.enabled ? this.hover.font.fill : f : this.fontColor && (c.font.fill = this.showValues() ? d.legendColor(b) : d.format.fill) : (console.log("hi"), c.font.fill = "silver"); c.font.lineThrough = "linethrough" !== this.activeStyle || d.visible ? !1 : !0; var y = this.chart.ctx; if (e) {
                  c.font.textAlign = "start"; h.x -= k[0]; y.textAlign = c.font.textAlign; var F = this.symbol.width;
                  a = { text: a, index: b, r: h, symbolWidth: F, stopLegend: !1 }; if (this.onbeforedrawLegendItem) this.onbeforedrawLegendItem(a); a.stopLegend && (p = !0); a = a.text; e = c.stroke.fill; if (!this.showValues() && "checkbox" === this.activeStyle) {
                    u = h.x - 2; var l = h.y + 4; console.log("drawing checkbox", u, l); y.beginPath(); y.moveTo(u, l); y.lineTo(u + 8.5, l); y.lineTo(u + 8.5, l + 8.5); y.lineTo(u, l + 8.5); y.lineTo(u, l); y.strokeStyle = "black"; y.stroke(); y.closePath(); h.x += 12; d.visible && (y.beginPath(), y.moveTo(u + 2, l + 4), y.lineTo(u + 4, l + 6), y.lineTo(u + 7, l +
                      3), y.stroke(), y.closePath())
                  } y.strokeStyle = e; p || c.drawText(h, a)
                } else if (a instanceof Array || (a = [a]), u) { e = a.length; u = h.width; for (l = c.textWidth(" "); e--;) { c.font.textAlign = m[e] ? "start" : "end"; h.x -= k[e]; y.textAlign = c.font.textAlign; F = this.symbol.width; a = { text: a, index: b, r: h, symbolWidth: F, stopLegend: !1 }; if (this.onbeforedrawLegendItem) this.onbeforedrawLegendItem(a); a.stopLegend && (p = !0); a = a.text; p || c.drawText(h, a[e]); h.width -= k[e] + l } h.width = u } else {
                  c.font.textAlign = "start"; h.x -= w; y.textAlign = c.font.textAlign;
                  F = this.symbol.width; a = { text: a, index: b, r: h, symbolWidth: F, stopLegend: !1 }; if (this.onbeforedrawLegendItem) this.onbeforedrawLegendItem(a); a.stopLegend && (p = !0); a = a.text; p || c.drawText(h, a.join(" "))
                } p || (c.font.fill = f, p = !d.isColorEach || this.showValues(), this.symbol.visible && p && this.drawSymbol(d, b, g), 0 < b && "" !== this.dividing.fill && (d = this.bounds, y.beginPath(), this.isVertical() ? (y.moveTo(d.x, h.y - 2), y.lineTo(d.getRight(), h.y - 2)) : (b = h.x - w - 4, p = this.symbol, p.visible && (b -= p.width + p.padding), y.moveTo(b, d.y), y.lineTo(b,
                  d.getBottom())), this.dividing.prepare(), y.stroke()))
            }; this.drawSeries = function (a, d) { var c = b.series.items[a]; return (this.showHidden || c.visible) && c.legend.visible ? (this.drawItem(c.titleText(a), c, d, !0), !0) : !1 }; this.draw = function () {
              var a = this.itemsCount(); var d = this.title; var g = b.ctx, k = this.format.transparency, f = this.isVertical(); if (0 < a) {
                var l = g.beginParent; this.visual = l ? g.beginParent() : null; c.cube(this.bounds); this.transparent || c.draw(g, null, this.bounds); if (0 < k) {
                  var n = g.globalAlpha; g.globalAlpha = (1 -
                    k) * n
                } f && 0 < e && (d.bounds.x = this.bounds.x - 4, d.bounds.y = this.bounds.y, d.doDraw()); c.font.prepare(); h.width = w; h.height = this.itemHeight; if (this.showValues()) {
                  f = b.series.firstVisible(); var q = 0; d = a; switch (this.textStyle) { case "auto": case "percentlabel": case "valuelabel": m = [!1, !0]; break; case "labelpercent": case "labelvalue": m = [!0, !1]; break; case "label": m = [!0]; break; case "valuepercent": m = [!0, !1]; break; default: m = [!1] }if (this.inverted) for (; d--;)this.drawItem(this.itemText(f, d), f, q++); else for (q = 0; q < d; q++)this.drawItem(this.itemText(f,
                    q), f, q)
                } else if (d = b.series.count(), f && (d = Math.min(d, this.availRows())), a = 0, m = [!0], this.inverted) for (; d--;)this.drawSeries(d, a) && a++; else for (q = 0; q < d; q++)this.drawSeries(q, a) && a++; 0 < k && (g.globalAlpha = n); l && g.endParent()
              }
            }; var w, k; this.calcWidths = function () {
              var a, d = b.series; w = 0; k = [0, 0]; if (this.showValues()) {
                var g = d.firstVisible(); var e = this.itemsCount(); for (a = 0; a < e; a++)if (d = this.itemText(g, a), d instanceof Array || (d = [d]), 0 < d.length) {
                  var h = c.textWidth(d[0]); h > k[0] && (k[0] = h); 1 < d.length && (h = c.textWidth(d[1]),
                    h > k[1] && (k[1] = h))
                }
              } else for (e = d.count(), a = 0; a < e; a++)if (g = d.items[a], this.showHidden || g.visible) h = c.textWidth(g.titleText(a)), h > k[0] && (k[0] = h); w = k[0] + k[1]
            }; this.calcPadding = function (a) { return .01 * this.padding * (this.isVertical() ? a.width : a.height) }; this.isVertical = function () { var a = this.position; return "right" === a || "left" === a }; this.calcrect = function () {
              var a = 0, d = this.title, g = b.chartRect, h = this.align, k = this.bounds, m = this.isVertical(); d.shouldDraw() ? (d.resize(), e = d.bounds.height, a = d.bounds.width) : e = 0; m ? k.y =
                0 === h ? g.y : b.bounds.height * h * .01 : k.x = 0 === h ? g.x : b.bounds.width * h * .01; c.font.prepare(); this.itemHeight = c.textHeight("Wj"); this.calcWidths(); h = this.calcPadding(g); var f = this.itemsCount(); m ? (m = this.symbol.visible ? this.symbol.width + this.symbol.padding : 0, k.width = Math.max(a, 12 + w + m), k.height = (.5 + f) * this.itemHeight + e, k.width - 6 > a && (d.bounds.width = k.width - 6)) : (k.width = h + this.perRow * this.totalWidth(), k.x += .5 * (g.width - k.width), k.height = this.itemHeight * (this.rows + .25)); "" !== c.stroke.fill && (m = +c.stroke.size, 1 < m &&
                  (k.width += m, k.height += m, this.innerOff = .5 * m)); 0 !== f && ("right" === this.position ? (k.x = g.getRight() - k.width - this.margin * k.width * .01, g.automatic && g.setRight(Math.max(g.x, k.x - h))) : "left" === this.position ? (k.x = g.x, g.automatic && g.setLeft(k.x + k.width + h)) : "top" === this.position ? (k.y = g.y + h, g.automatic && g.setTop(k.getBottom() + h)) : (k.y = g.getBottom() - k.height - h, g.automatic && g.setBottom(k.y - h)))
            }
      } function R(b, c) {
        Tee.Annotation.call(this, c); this.series = b; var a = this.arrow = new Tee.Format(c); a.visible = !0; a.length = 10; a.underline =
          !1; a.z = .5; a.depth = .1; this.style = "auto"; this.drawEvery = 1; this.visible = !1; this.format.z = .5; this.setChart = function (b) { this.chart = b; this.format.setChart(b); a.setChart(b) }; this.drawPolar = function (b, d, c, h) {
            var g = this.series.markText(h); h = b.x + Math.cos(c) * d; var e = b.y + Math.sin(c) * d, k = this.chart.ctx; this.text = g; this.resize(); g = this.bounds; var p = this.position; d += a.length; var u = b.x + Math.cos(c) * d; d = b.y + Math.sin(c) * d; 0 > u - g.width && (u -= u - g.width - 4); p.x = Math.abs(u - b.x) < g.width ? u - .5 * g.width : u < b.x ? u - g.width : u; p.y = Math.abs(d -
              b.y) < g.height ? d - .5 * g.height : d < b.y ? d - g.height : d; k.beginPath(); k.moveTo(h, e); k.lineTo(u, d); a.underline && (d <= p.y || d >= p.y + g.height) && (k.moveTo(p.x, d), k.lineTo(p.x + g.width, d)); a.stroke.prepare(); a.visible && k.stroke(); this.draw()
          }; this.canDraw = function (b, d, c, h) {
            if ((c = this.series.markText(c)) && "" !== c && (this.showZero || "0" !== c)) {
              this.text = c; this.resize(); c = h ? -1 : 1; var g = this.bounds; this.series.yMandatory ? (g.x = b - .5 * g.width, g.y = d - c * (a.length + (h ? 0 : g.height))) : (g.x = b + c * a.length, h && (g.x -= g.width), g.y = d - .5 * g.height);
              this.position.x = g.x; this.position.y = g.y; return !0
            } return !1
          }; this.drawMark = function (b, d, c, h) {
            if (this.canDraw(b, d, c, h) && (this.draw(), a.visible)) {
              c = this.bounds; var g = this.series.yMandatory, e = h ? c.y : c.getBottom(), k = this.chart.ctx, p = this.chart.aspect.view3d; if (g) { if (p) { b = { x: b - 3, y: e, width: 6, height: d - e }; a.z = this.format.z - .5 * a.depth; a.cylinder(b, 1, !0); a.draw(this.chart.ctx, null, b); return } k.beginPath(); k.moveTo(b, e); k.lineTo(b, d); a.underline && (k.moveTo(c.x, e), k.lineTo(c.x + c.width, e)) } else d = c.y + .5 * c.height,
                k.beginPath(), k.moveTo(b, d), h && (c.x += c.width), k.lineTo(c.x, d), a.underline && (k.moveTo(c.x, c.y + c.height), k.lineTo(c.x + (h ? -c.width : c.width), c.y + c.height)); a.stroke.prepare(); k.stroke()
            }
          }
      } function S(b) { for (var c = 0, a = b.length; a--;)c += 0 < b[a] ? b[a] : -b[a]; return c } function O(b) { return b && b.constructor == Array ? b.filter(function (b) { return null !== b }).map(O) : b } function N(b) { b = O(b); var c = -Number.MAX_VALUE; b.forEach(function (a) { c < a && (c = a) }); "[object Date]" === Object.prototype.toString.call(c) && (c = c.getTime()); return c }
      function K(b) { b = O(b); var c = Number.MAX_VALUE; b.forEach(function (a) { c > a && (c = a) }); "[object Date]" === Object.prototype.toString.call(c) && (c = c.getTime()); return c } function P(b) {
        function c(a) { return a.visible && a.firstSeries ? (a = a.format.stroke, "" === a.fill ? 0 : .5 * a.size) : 0 } this.chart = b; this.items = []; this.count = function () { return this.items.length }; this.clicked = function (a) { var b = !1; this.each(function (d) { if (d.visible && d.onclick) { var c = d.clicked(a); -1 != c && (b = d.onclick(d, c, a.x, a.y)) } }); return b }; this.mousedown = function (a) {
          for (var b =
            0, d, c = !1; d = this.items[b++];)d.visible && d.mousedown(a) && (c = !0); return c
        }; this.mousemove = function (a) { for (var b = 0, d; d = this.items[b++];)d.visible && d.mousemove(a) }; this.mouseout = function () { this.each(function (a) { a.visible && a.mouseout() }) }; this.visibleCount = function (a, b, d) { for (var c = 0, e = this.items, m = e.length, f; m--, f = e[m];)f.visible && (!b || f instanceof b) && (d && f == a && (d.index = c), c++); d && (d.total = c, d.index = c - 1 - d.index); return c }; this.beforeDraw = function () { this.each(function (a) { a.useAxes && a.recalcAxes(); a.calcColorEach() }) };
        this.anyUsesAxes = function () { for (var a = this.items.length, b; a--;)if (b = this.items[a], b.visible && b.useAxes) return !0; return !1 }; this.firstVisible = function () { for (var a = 0, b; b = this.items[a++];)if (b.visible) return b; return null }; this.vertMargins = function () { var a = this.items, b = a.length, d; if (0 < b) { var c = { x: 0, y: 0 }; var h = { x: 0, y: 0 }; a[0].vertMargins(c); for (d = 1; d < b; d++)0 < a[d].data.values.length && (h.x = h.y = 0, a[d].vertMargins(h), h.x > c.x && (c.x = h.x), h.y > c.y && (c.y = h.y)) } return c }; this.horizMargins = function () {
          var a = this.items,
          b = a.length, d; if (0 < b) { var c = { x: 0, y: 0 }; var h = { x: 0, y: 0 }; a[0].horizMargins(c); for (d = 1; d < b; d++)0 < a[d].data.values.length && (h.x = h.y = 0, a[d].horizMargins(h), h.x > c.x && (c.x = h.x), h.y > c.y && (c.y = h.y)) } return c
        }; this.minXValue = function (a) { var b = Infinity, d; this.eachAxis(a, function (a) { d = a.minXValue(); d < b && (b = d) }); return b }; this.minYValue = function (a) { var b = Infinity, d; this.eachAxis(a, function (a) { d = a.minYValue(); d < b && (b = d) }); return b }; this.maxXValue = function (a) {
          var b = -Infinity, d; this.eachAxis(a, function (a) {
            d = a.maxXValue();
            d > b && (b = d)
          }); return b
        }; this.maxYValue = function (a) { var b = -Infinity, d; this.eachAxis(a, function (a) { d = a.maxYValue(); d > b && (b = d) }); return b }; this.draw = function () {
          var a = this.items.length, b = this.chart, d = b.ctx, g = b.aspect, h; if (0 < a) {
            for (h = 0; h < a; h++) { var m = this.items[h]; m.visible && m.beforeDraw && m.beforeDraw() } var f = g.clip && this.anyUsesAxes(), k = b.axes; if (f) { b = b.chartRect; var p = c(k.left), u = c(k.top); k = { x: b.x + p, y: b.y + u, width: b.width - c(k.right), height: b.height - c(k.bottom) }; g.clipRect(k) } try {
              var y = d.beginParent; for (h =
                0; h < a; h++)if (m = this.items[h], m.visible) { var F = d.globalAlpha; d.globalAlpha = 1 - m.format.transparency; m.transform && (d.save(), m.transform()); m.visual = y ? d.beginParent() : null; if (m.onbeforedraw) m.onbeforedraw(m); m.draw(); y && d.endParent(); if (m.ondraw) m.ondraw(m); m.transform && d.restore(); d.globalAlpha = F }
            } finally { f && d.restore() } for (h = 0; h < a; h++)m = this.items[h], m.visible && m.marks.visible && (m.transform && (d.save(), m.transform()), m.drawMarks(), m.transform && d.restore())
          }
        }
      } function X(b) {
        this.chart = b; this.visible = !0;
        this.transparency = 0; this.left = new B(b, !1, !1); this.top = new B(b, !0, !0); this.right = new B(b, !1, !0); this.bottom = new B(b, !0, !1); this.items = [this.left, this.top, this.right, this.bottom]; this.each = function (b) { for (var a = 0, c; c = this.items[a++];)b.call(c) }; this.add = function (c, a) { c = new B(b, c, a); c.custom = !0; this.items.push(c); return c }
      } function aa(b, c) { return "rgba( " + b[0] + ", " + b[1] + ", " + b[2] + ", " + c + " )" } function T(b, c, a) {
        for (var e = 0; e < b.axes.items.length; e++)3 < e && (b.axes.items[e].labels.format.font.setSize(11), b.axes.items[e].format.stroke.fill =
          a, b.axes.items[e].labels.format.font.fill = c, b.axes.items[e].title.format.font.fill = c, b.axes.items[e].title.format.font.setSize(20), b.axes.items[e].grid.visible = !1, b.axes.items[e].grid.format.stroke.size = .6, b.axes.items[e].grid.format.stroke.fill = "silver")
      } function I(b) {
        b.title.transparent = !0; b.walls.visible = !1; b.footer.transparent = !0; b.panel.format.shadow.visible = !1; b.panel.format.stroke.fill = ""; b.panel.format.round.x = 0; b.panel.format.round.y = 0; b.panel.format.gradient.visible = !1; b.panel.format.fill =
          "white"; W(b, "seaWash"); if (0 < b.series.items.length) for (var c = 0; c < b.series.items.length; c++)b.series.items[c].format.fill = b.palette.get(c), null != b.series.items[c].pointer && null != b.series.items[c].pointer.format && (b.series.items[c].pointer.format.fill = b.palette.get(c), b.series.items[c].pointer.format.stroke.fill = "white"); for (c = 0; c < b.axes.items.length; c++) {
            var a = b.axes.items[c]; a.format.stroke.fill = "rgba(39,79,105,0.8)"; a.labels.format.font.setSize(14); a.labels.format.font.fill = "rgba(124,124,144,0.9)";
            a.title.format.font.setSize(20); a.title.format.font.fill = "rgba(124,124,144,0.9)"
          } for (c = 0; c < b.axes.items.length; c++)b.axes.items[c].grid.visible = b.axes.items[c].horizontal ? !1 : !0, b.axes.items[c].grid.format.stroke.size = .6, b.axes.items[c].grid.format.stroke.fill = "silver"; b.legend.transparent = !0; b.legend.format.font.setSize(14); b.legend.format.font.fill = "rgba(124,124,144,0.9)"; b.title.format.shadow.visible = !1; b.title.format.font.style = "18px Arial"; b.title.format.font.style = "bold 18px Arial"; b.title.format.font.fill =
            "rgba(124,124,144,0.9)"; b.title.format.font.shadow.visible = !1
      } function W(b, c) {
        var a = "#4466a3 #f39c35 #f14c14 #4e97a8 #2b406b #1d7b63 #b3080e #f2c05d #5db79e #707070 #f3ea8d #b4b4b4".split(" "); "castaway" == c ? a = "#4466a3 #E8D0A9 #B7AFA3 #C1DAD6 #F5FAFA #ACD1E9 #6D929B".split(" ") : "classic" == c ? a = "#0000FF #00FF00 #00FFFF #FF0000 #FF00FF #FFFF00 #000080 #008000 #008080 #800000 #808000 #808080".split(" ") : "cool" == c ? a = "rgba(43,64,107,1.0) rgba(59,84,140,1.0) rgba(68,102,163,1.0) rgba(78,151,168,1.0) rgba(93,183,158,1.0) rgba(65,160,138,1.0) rgba(43,146,125,1.0) rgba(29,123,99)".split(" ") :
          "excel" == c ? a = "#FF9999 #663399 #CCFFFF #FFFFCC #660066 #8080FF #CC6600 #FFCCCC #800000 #FF00FF #00FFFF #FFFF00 #800080 #000080 #808000 #FF0000 #FFCC00 #FFFFCC #CCFFCC #00FFFF #FFCC99 #CC99FF".split(" ") : "grayscale" == c ? a = "#F0F0F0 #E0E0E0 #D0D0D0 #C0C0C0 #B0B0B0 #A0A0A0 #909090 #808080 #707070 #606060 #505050 #404040 #303030 #202020 #101010".split(" ") : "macOS" == c ? a = "#FFFFFF #FCF305 #FF6402 #DD0806 #F20884 #4600A5 #0000D4 #02ABEA #1FB714 #006411 #562C05 #90713A #C0C0C0 #808080 #404040 #000000".split(" ") :
            "modern" == c ? a = "#FF9966 #FF6666 #99CCFF #669966 #CCCC99 #9966CC #CC6666 #FFCC99 #9966FF #CCCCCC #66FFCC #6699FF #996699 #CCCCFF".split(" ") : "onBlack" == c ? a = ["rgba(200,230,90,1.0)", "rgba(90,150,220,1.0)", "rgba(230,90,40,1.0)", "rgba(230,160,15)"] : "opera" != c && ("pastels" == c ? a = "#CCFFFF #FFFFCC #CCCCFF #00CCCC #CCCCCC #009999 #999999 #DDCCCC #FFCC66 #CCCCFF #FF9999 #FFFF99 #99CCFF #CCFFCC".split(" ") : "rainbow" == c ? a = "#FF0000 #FF7F00 #FFFF00 #00FF00 #0000FF #6600FF #8B00FF".split(" ") : "redRiver" == c ? a = "#DC5C05 #FFC519 #6EC5B8 #FF9000 #978B7D #C7BAA7".split(" ") :
              "rust" == c ? a = "#CBFFFA #7F3D17 #7F5E17 #22287F #DD1E2F #EBB035 #06A2CB #218559 #D0C6B1 #B67721 #68819E #747E80 #D5E1DD #F7F3E8 #F2583E #77BED2".split(" ") : "seaWash" == c ? a = "#DC5C05 #FFAC00 #6EC5B8 #E8D0A9 #978B7D #C7BAA7 #C1DAD6 #FFC99F #ACD1E9 #6D929B #D3E397 #FFF5C3".split(" ") : "solid" == c ? a = "#0000FF #FF0000 #00FF00 #FFCC00 #404040 #FFFF00 #FF00C0 #FFFFFF".split(" ") : "teechart" == c ? a = "rgba(255,0,0,1.0) rgba(0,128,0,1.0) rgba(255,255,0,1.0) rgba(0,0,255,1.0) rgba(255,255,255,1.0) rgba(128,128,128,1.0) rgba(255,0,255,1.0) rgba(0,128,128,1.0) rgba(0,0,128,1.0) rgba(128,0,0,1.0) rgba(0,255,0,1.0) rgba(128,128,0,1.0) rgba(128,0,128,1.0) rgba(192,192,192,1.0) rgba(0,255,255,1.0) rgba(0,0,0,1.0) rgba(173,255,47,1.0) rgba(135,206,235,1.0) rgba(255,228,196,1.0) rgba(75,0,130,1.0)".split(" ") :
                "warm" == c ? a = "rgba(243,234,141,1.0) rgba(242,192,93,1.0) rgba(243,156,53,1.0) rgba(245,129,28,1.0) rgba(243,107,21,1.0) rgba(241,76,20,1.0) rgba(230,24,10,1.0) rgba(179,8,14)".split(" ") : "web" == c ? a = "#FFA500 #0000CE #00CE00 #FFFF40 #40FFFF #FF40FF #FF4000 #8080A5 #808040".split(" ") : "rainbowWide" == c ? a = "#990000 #C30000 #EE0000 #FF1A00 #FF4600 #FF7300 #FF9F00 #FFCB00 #FFF700 #E3F408 #C3E711 #A3DA1B #83CD25 #63C02E #42B338 #22A642 #029A4B #0C876A #1A758A #2863AA #3650CB #443EEB #612AFF #9615FF #CC00FF".split(" ") :
                  "windowsVista" == c ? a = "#001FD2 #E00201 #1E6602 #E8CD7E #AFABAC #A4D0D9 #3D3B3C #95DD31 #9E0001 #DCF774 #45FDFD #D18E74 #A0D891 #D57A65 #9695D9".split(" ") : "windowsxp" == c ? a = "rgba(130,155,254,1.0) rgba(252,209,36,1.0) rgba(124,188,13,1.0) rgba(253,133,47,1.0) rgba(253,254,252,1.0) rgba(226,78,33,1.0) rgba(41,56,214,1.0) rgba(183,148,0,1.0) rgba(90,134,0,1.0) rgba(210,70,0,1.0) rgba(211,229,250,1.0) rgba(216,216,216,1.0) rgba(95,113,123,1.0)".split(" ") : "victorian" == c && (a = "#5DA5A1 #C45331 #E79609 #F6E84A #B1A2A7 #C9A784 #8C7951 #D8CDB7 #086553 #F7D87B #016484".split(" ")));
        b.paletteName = c; b.palette.colors = a; if (0 < b.series.items.length) for (c = 0; c < b.series.items.length; c++)b.series.items[c].format.fill = b.palette.get(c), null != b.series.items[c].pointer && null != b.series.items[c].pointer.format && (b.series.items[c].pointer.format.fill = b.palette.get(c)); b.draw()
      } function ba() {
        try { return new XMLHttpRequest } catch (b) { } try { return new ActiveXObject("Msxml2.XMLHTTP") } catch (b) { } try { return new ActiveXObject("Microsoft.XMLHTTP") } catch (b) { } throw Error("Could not create HTTP request object.");
      } "undefined" !== typeof exports && (exports.Tee = Tee); "undefined" !== typeof window && (window.requestAnimFrame = function () { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (b) { window.setTimeout(b, 1E3 / 60, (new Date).getTime()) } }()); try { Object.defineProperty({}, "x", {}); var J = Object.defineProperty } catch (b) { } "indexOf" in Array.prototype || (Array.prototype.indexOf = function (b, c) {
        void 0 ===
        c && (c = 0); 0 > c && (c += this.length); 0 > c && (c = 0); for (var a = this.length; c < a; c++)if (c in this && this[c] === b) return c; return -1
      }); Tee.Point = function (b, c) { this.x = b; this.y = c }; Tee.Rectangle = function (b, c, a, e) {
        this.x = b; this.y = c; this.width = a; this.height = e; this.set = function (a, b, c, e) { this.x = a; this.y = b; this.width = c; this.height = e }; this.setFrom = function (a) { this.x = a.x; this.y = a.y; this.width = a.width; this.height = a.height }; this.getRight = function () { return this.x + this.width }; this.getBottom = function () { return this.y + this.height };
        this.setTop = function (a) { this.height -= a - this.y; this.y = a }; this.setBottom = function (a) { this.height = a - this.y }; this.setLeft = function (a) { this.width -= a - this.x; this.x = a }; this.setRight = function (a) { this.width = a - this.x }; this.contains = function (a) { return a.x >= this.x && a.x <= this.x + this.width && a.y >= this.y && a.y <= this.y + this.height }; this.offset = function (a, b) { this.x += a; this.y += b }
      }; Tee.Tool = function (b) { this.chart = b; this.active = !0 }; Tee.Animation = function (b, c) {
        Tee.Tool.call(this, b); this.active = !0; this.mode = "linear"; this.duration =
          500; this.items = []; this.autoDraw = !0; this.running = this.loop = !1; this.onstop = this.onstart = null; b && (b instanceof Tee.Chart ? this.chart = b : b instanceof Tee.Animation && (this.chart = b.chart, b.items.push(this))); var a = null; this._dostart = function () { this.init = (new Date).getTime(); a.start(); for (var b = 0, d; d = a.items[b++];)d.active && (d.chart = a.chart, d.start()); a.chart.draw(); requestAnimFrame(this.step, this) }; this.animate = function (b) { this.running || (this.running = !0, b && (this.chart = b), a = this, this._dostart()) }; this.start =
            function () { if (this.onstart) this.onstart() }; this.stop = function () { if (this.onstop) this.onstop() }; this.doStep = function (a) { c && c(a) }; this.step = function () {
              var b; var d = ((new Date).getTime() - a.init) / a.duration; var c = "linear" == a.mode ? d : Math.pow(2, 10 * (d - 1)); if (0 <= c && 1 > c) { if (a.running) { a.doStep(c); for (d = 0; b = a.items[d++];)b.active && (b.chart = a.chart, b.doStep(c)); a.autoDraw && a.chart.draw(); requestAnimFrame(a.step, a) } } else {
                a.stop(); for (d = 0; b = a.items[d++];)b.active && (b.chart = a.chart, b.stop()); if (a.onstop) a.onstop(a);
                a.loop ? a._dostart() : (a.running = !1, a.chart.draw())
              }
            }
      }; Tee.Animation.prototype = new Tee.Tool; Tee.Tool.prototype.mousedown = function () { }; Tee.Tool.prototype.mousemove = function () { }; Tee.Tool.prototype.mouseout = function () { }; Tee.Tool.prototype.clicked = function () { return !1 }; Tee.Tool.prototype.draw = function () { }; v.prototype.setEndColor = function (b) { if (b && "" !== b) for (var c = 1, a = this.colors.length; c < a; c++)this.colors[c] = b }; t.prototype.set = function (b) {
        this.visible = b.visible; this.color = b.color; this.blur = b.blur; this.width =
          b.width; this.height = b.height
      }; A.prototype.getSize = function () { var b = this.style.split(" "), c, a; for (c = 0; c < b.length; c++)if (a = parseFloat(b[c])) return a; return 20 }; A.prototype.setSize = function (b) { var c = "", a = this.style.split(" "), e; for (e = 0; e < a.length; e++)parseFloat(a[e]) ? c += b.toString() + "px " : c += a[e] + " "; this.style = c }; A.prototype.prepare = function () { var b = this.chart.ctx; b.textAlign = this.textAlign; b.textBaseline = this.baseLine; this._sh && this._sh.prepare(b); b.font != this.style && (b.font = this.style) }; A.prototype.setChart =
        function (b) { this.chart = b; this._g && (this._g.chart = b); this._sh && (this._sh.chart = b); this._s && this._s.setChart(b) }; Tee.Format = function (b) {
          this.chart = b; this.gradient = new v(b); this.fill = "rgb(200,200,200)"; this.stroke = new x(b); this.round = { x: 0, y: 0 }; this.transparency = 0; this.doSubNums = this.doSuperNums = !1; this.font = new A(b); this._img = null; J ? J(this, "image", { get: function () { this._img || (this._img = new C(this.chart)); return this._img } }) : this._img = this.image = new C(b); this.shadow = new t(b); this.roundRect = function (a,
            b, d, c, h) {
              if (a.roundRect) a.roundRect(b, d, c, h, this.round.x, this.round.y); else {
                var g = b + c, e = d + h, k = this.round.x, p = this.round.y, u = this.round.corners; 0 > h && (d = e, e = d - h); 0 > c && (b = g, g = b - c); 2 * k > c && (k = .5 * c); 2 * p > h && (p = .5 * h); !u || u[0] ? a.moveTo(b + k, d) : a.moveTo(b, d); !u || u[1] ? (a.lineTo(g - k, d), a.quadraticCurveTo(g, d, g, d + p)) : a.lineTo(g, d); !u || u[2] ? (a.lineTo(g, e - p), a.quadraticCurveTo(g, e, g - k, e)) : a.lineTo(g, e); !u || u[3] ? (a.lineTo(b + k, e), a.quadraticCurveTo(b, e, b, e - p)) : a.lineTo(b, e); !u || u[0] ? (a.lineTo(b, d + p), a.quadraticCurveTo(b,
                  d, b + k, d)) : a.lineTo(b, d); a.closePath()
              }
          }; this.textHeight = function () { return 1.3 * this.font.getSize() }; this.textWidth = function (a) { return this.chart.ctx.measureText(a).width }; this.fillBack = function (a, b, d, c, h, m) { this.gradient.visible ? (a.fillStyle = b ? this.gradient.create(b()) : this.gradient.rect(d, c, h, m), a.fill()) : "" !== this.fill && (a.fillStyle = this.fill, a.fill()) }; this.draw = function (a, b, d, c, h, m) {
            var g = this._img; "object" === typeof d && (c = d.y, h = d.width, m = d.height, d = d.x); if (0 < this.transparency) {
              var k = a.globalAlpha;
              a.globalAlpha = (1 - this.transparency) * k
            } this.shadow.prepare(a); g && g.visible && "" !== g.url ? (a.save(), a.clip(), 1 == g.backFill && this.fillBack(a, b, d, c, h, m), b ? (b = b(), g.tryDraw(b.x, b.y, b.width, b.height)) : g.tryDraw(d, c, h, m), a.restore()) : this.fillBack(a, b, d, c, h, m); "" !== this.stroke.fill && (this.stroke.prepare(), a.stroke()); 0 < this.transparency && (a.globalAlpha = k)
          }; this.subNums = function (a) { for (var b = "", d = 0; d < a.length; d++) { var c = a.charCodeAt(d); b = 48 <= c && 57 >= c ? b + String.fromCharCode(c + 8272) : b + a[d] } return b }; this.superNums =
            function (a) { for (var b = "", d = 0; d < a.length; d++) { var c = a.charCodeAt(d); b = 48 == c || 52 <= c && 57 >= c ? b + String.fromCharCode(c + 8256) : 49 == c ? b + String.fromCharCode(185) : 50 == c ? b + String.fromCharCode(178) : 51 == c ? b + String.fromCharCode(179) : b + a[d] } return b }; this.drawText = function (a, b) {
              function d(a) { h.fillText(a, k, p); e && "" !== e.fill && (e.prepare(), h.strokeText(a, k, p)) } var c = this.font._g, h = this.chart.ctx, e = this.font._s, f = this.font.textAlign, k = a.x, p = a.y; this.font.lineThrough && (h.beginPath(), h.moveTo(a.x, a.y + .4 * a.height), h.lineTo(a.x +
                a.width, a.y + .4 * a.height), h.stroke(), h.closePath()); h.fillStyle = c && c.visible && a ? c.create(a) : this.font.fill; if ("center" == f) k += .5 * a.width; else if ("right" == f || "end" == f) k += a.width; a = (b + "").split("\n"); c = a.length; if (1 < c) for (b = this.textHeight(a[0]), f = 0; f < c; f++)this.doSuperNums ? d(this.superNums(a[f])) : this.doSubNums ? d(this.subNums(a[f])) : d(a[f]), p += b; else this.doSuperNums ? d(this.superNums(b)) : this.doSubNums ? d(this.subNums(b)) : d(b)
            }; this.rectangle = function (a, b, d, c) {
              1 > this.transparency && ("object" === typeof a ?
                this.rectangle(a.x, a.y, a.width, a.height) : (this.rectPath(a, b, d, c), this.draw(this.chart.ctx, null, a, b, d, c)))
            }; this.polygonBounds = function (a, b) { var d = 0, c = 0, h = 0, e = 0, f = a.length, k; if (0 < f) for (d = h = a[0].x, c = e = a[0].y, k = 1; k < f; k++) { var p = a[k].x; p < d ? d = p : p > h && (h = p); p = a[k].y; p < c ? c = p : p > e && (e = p) } b.x = d; b.y = c; b.width = h - d; b.height = e - c }; var c = new n; this.polygon = function (a) {
              var b = this.chart.ctx, d = a.length, g; b.beginPath(); b.moveTo(a[0].x, a[0].y); for (g = 1; g < d; g++)b.lineTo(a[g].x, a[g].y); b.closePath(); var h = this; this.draw(b,
                function () { h.polygonBounds(a, c); return c })
            }
        }; Tee.Format.prototype.ellipsePath = function (b, c, a, e, d) { this.chart.__webgl ? (b.z = this.z, b.depth = this.depth, b.ellipsePath(c, a, e, d)) : (b.save(), b.translate(c, a), b.scale(.5 * e, .5 * d), b.beginPath(), b.arc(0, 0, 1, 0, 2 * Math.PI, !1), b.restore()) }; Tee.Format.prototype.ellipse = function (b, c, a, e) { var d = this.chart.ctx; this.ellipsePath(d, b, c, a, e); this.draw(d, null, b - .5 * a, c - .5 * e, a, e) }; Tee.Format.prototype.sphere = function (b, c, a, e) {
          if (this.chart.__webgl) {
            var d = this.chart.ctx; d.depth =
              this.depth; d.z = this.z; this.gradient.visible && (d.fillStyle = this.gradient.colors[this.gradient.colors.length - 1]); d.sphere(b, c, a, e)
          } else this.ellipse(b, c, a, e)
        }; Tee.Format.prototype.cylinder = function (b, c, a, e) {
          if (this.chart.__webgl) { var d = this.chart.ctx; d.depth = this.depth; d.z = this.z; d.image = this.image; d.cylinder(b, c, a, e) } else 1 == c ? this.cube(b) : (c = b.width, e = b.height, a ? this.polygon([new f(b.x + .5 * c, b.y), new f(b.x, b.y + e), new f(b.x + c, b.y + e)]) : this.polygon([new f(b.x + c, b.y + .5 * e), new f(b.x, b.y), new f(b.x, b.y +
            e)]))
        }; Tee.Format.prototype.cube = function (b) {
          var c = this.chart.aspect, a = c.view3d, e = 0, d = 0; if (a) {
            if (this.chart.__webgl) { a = this.chart.ctx; a.depth = this.depth; a.z = this.z; a.cube(b, this.round.x); return } var g = this.z; var h = this.depth; e = g * c._orthox; d = -g * c._orthoy; g = b.x + b.width; var m = b.y + b.height; var f = h * c._orthox; c = -h * c._orthoy; var k = this.shadow.visible; this.shadow.visible = !1; var p = g + f, u = b.y + c; 0 < h && (this.polygon([{ x: g, y: b.y }, { x: p, y: u }, { x: p, y: m + c }, { x: g, y: m }]), 0 < b.width && this.polygon([{ x: b.x, y: b.y }, { x: b.x + f, y: u },
            { x: p, y: u }, { x: g, y: b.y }]))
          } this.rectPath(b.x + e, b.y + d, b.width, b.height); a && (this.shadow.visible = k)
        }; Tee.Format.prototype.rectPath = function (b, c, a, e) { var d = this.chart.ctx; d.beginPath(); 0 < this.round.x && 0 < this.round.y ? this.roundRect(d, b, c, a, e) : d.rect(b, c, a, e) }; Tee.Format.prototype.setChart = function (b) { this.chart = b; this.shadow.chart = b; this.gradient.chart = b; this.font.setChart(b); this._img && (this._img.chart = b); this.stroke.setChart(b) }; Tee.Annotation = function (b, c, a, e) {
          function d(a) { return !a || 0 === a.length } Tee.Tool.call(this,
            b); this.position = new f(a || 10, e || 10); var g = this.margins = new r; this.items = []; var h = this.bounds = new n; this.visible = !0; this.transparent = !1; this.text = c || ""; this.isDom = !1; this.domElement = null; this.domStyle = "border-radius: 5px;border: 2px solid #faad44;background: #FFF;padding:5px;"; var m = this.format = new Tee.Format(b); m.font.textAlign = "center"; m.font.baseLine = "top"; m.fill = "beige"; m.round = { x: 4, y: 4 }; m.stroke.fill = "silver"; m.shadow.visible = !0; m.depth = .05; m.z = .5; var w, k, p; this.getDOMHeight = function () {
              return null ==
                this.domElement ? 0 : this.domElement.offsetHeight
            }; this.getDOMWidth = function () { return null == this.domElement ? 0 : this.domElement.offsetWidth }; this.moveTo = function (a, b) { this.position.x = a; this.position.y = b; this.resize() }; this.shouldDraw = function () { return this.visible && !d(this.text) }; this.resize = function () {
              var a = this, b, c, e, p; return $jscomp.asyncExecutePromiseGeneratorProgram(function (u) {
                if (d(a.text)) return u.return(); m.font.prepare(); a.rows = a.text.split("\n"); w = m.textHeight(a.text); b = a.rows.length; k = w * b + g.top;
                e = k + g.bottom; if (1 < b) for (c = 0; b--;)c = Math.max(c, m.textWidth(a.rows[b] + "W")); else c = m.textWidth(a.text + "W"); c += g.left + g.right; p = a.position; h.set(p.x, p.y, c, e); u.jumpToEnd()
              })
            }; this.add = function (a) { a = new Tee.Annotation(this.chart, a); this.items.push(a); a.transparent = !0; return a }; this.doDraw = function () {
              var a = this, b, c, k, e, p; return $jscomp.asyncExecutePromiseGeneratorProgram(function (u) {
                return d(a.text) ? u.jumpTo(0) : a.isDom ? u.yield(a.drawDOMText(), 0) : (a.transparent ? a.chart.ctx.z = m.z : a.chart.aspect.view3d &&
                  0 < a.format.depth ? (b = m.z, m.z -= .5 * a.format.depth, m.cube(h), m.draw(a.chart.ctx, null, h), m.z = b) : (a.chart.ctx.z = m.z, m.rectangle(h)), k = a.format.transparency, e = a.chart ? a.chart.ctx : null, 0 < k && (c = e.globalAlpha, e.globalAlpha = (1 - k) * c), m.font.prepare(), h.y += g.top + .1 * w, h.x += g.left, p = h.width, h.width -= g.right, m.drawText(h, a.text), h.x = a.position.x, h.y = a.position.y, h.width = p, 0 < k && (e.globalAlpha = c), u.jumpTo(0))
              })
            }; this.clicked = function (a) { return this.visible && h.contains(a) }; this.doMouseMove = function (a) {
              (this.mouseinside =
                this.clicked(a)) ? (this.cursor && (this.chart.newCursor = this.cursor), this.wasinside || (p = new q(250, h, m))) : this.wasinside && (p.restore(), this.chart.draw()); this.wasinside = this.mouseinside
            }; this.mousemove = function (a) { this.cursor && "default" != this.cursor && this.doMouseMove(a) }; this.forceDraw = function () { this.resize(); this.doDraw() }; this.setChart = function (a) { this.chart = a; this.format.setChart(a) }; this.drawDOMText = function () {
              var a = this, b, d; return $jscomp.asyncExecutePromiseGeneratorProgram(function (c) {
                if (1 == c.nextAddress) return a.domElement ?
                  c.yield(a.resize(), 2) : c.jumpTo(2); b = a.chart.canvas.getBoundingClientRect(); d = a.transparent ? "opacity:0;" : "opacity:1;"; a.domElement || (a.domElement = document.createElement("div"), document.body.appendChild(a.domElement)); 0 == a.visible ? a.domElement.setAttribute("style", "visibility:hidden; position:absolute;top:" + (a.position.y + b.top) + "px;left:" + (a.position.x + b.left) + "px;display:block;z-index:10000;" + a.domStyle + d) : a.domElement.setAttribute("style", "visibility:visible; position:absolute;top:" + (a.position.y +
                    b.top) + "px;left:" + (a.position.x + b.left) + "px;display:block;z-index:10000;" + a.domStyle + d); a.domElement.innerHTML != a.text && (a.domElement.innerHTML = a.text); c.jumpToEnd()
              })
            }
        }; Tee.Annotation.prototype = new Tee.Tool; Tee.Annotation.prototype.draw = function () { var b = this; return $jscomp.asyncExecutePromiseGeneratorProgram(function (c) { return b.isDom ? c.yield(b.drawDOMText(), 0) : (b.visible && b.forceDraw(), c.jumpTo(0)) }) }; Tee.DragTool = function (b) {
          Tee.Tool.call(this, b); this.series = null; var c = this.target = {
            series: null,
            index: -1
          }; this.clicked = function () { c.series = null; c.index = -1 }; var a = new f(0, 0); this.Point = a; this.mousedown = function (b) { var d = this.chart.series.items, g = d.length; this.chart.calcMouse(b, a); c.series = null; c.index = -1; if (this.series && this.series.visible) c.index = this.series.clicked(a), -1 != c.index && (c.series = this.series); else for (b = 0; b < g; b++)if (d[b].visible && (c.index = d[b].clicked(a), -1 != c.index)) { c.series = d[b]; break } return -1 != c.index }; this.mousemove = function (a) {
            if (-1 != c.index) {
              var b = c.series; a = b.mandatoryAxis.fromPos(b.yMandatory ?
                a.y : a.x); this.onchanging && (a = this.onchanging(this, a)); b.data.values[c.index] = a; if (this.onchanged) this.onchanged(this, a); this.chart.draw()
            }
          }
        }; Tee.DragTool.prototype = new Tee.Tool; Tee.CursorTool = function (b) {
          Tee.Tool.call(this, b); this.direction = "both"; this.size = new f(0, 0); this.followMouse = !0; this.dragging = -1; this.format = new Tee.Format(b); this.horizAxis = b ? b.axes.bottom : null; this.vertAxis = b ? b.axes.left : null; var c, a = new n; this.over = function (b) {
            var d = -1; if (a.contains(b)) {
              var g = 3 > Math.abs(c.x - b.x); b = 3 > Math.abs(c.y -
                b.y); var k = this.direction; "both" == k && g && b ? d = 0 : !g || "both" != k && "vertical" != k ? !b || "both" != k && "horizontal" != k || (d = 2) : d = 1
            } return d
          }; this.calcRect = function () { var d = b.chartRect, c = this.horizAxis, g = this.vertAxis; a.x = c ? c.startPos : d.x; a.width = c ? c.endPos - a.x : d.width; a.y = g ? g.startPos : d.y; a.height = g ? g.endPos - a.y : d.height }; var e = new f(0, 0); this.mousedown = function (a) { this.chart.calcMouse(a, e); this.dragging = this.followMouse ? -1 : this.over(e); return -1 < this.dragging }; this.clicked = function () { this.dragging = -1 }; this.mousemove =
            function (h) {
              var e = this.dragging, w = this.followMouse; if (w || -1 < e) if (c || (c = new f), c.x != h.x || c.y != h.y) if (this.calcRect(), a.contains(h)) { if (w || 0 === e || 1 === e) c.x = h.x; if (w || 0 === e || 2 === e) c.y = h.y; "full" == this.render ? this.chart.draw() : (d && ("copy" == this.render ? this.chart.ctx.drawImage(d, 0, 0) : (e = b.bounds, g.clearRect(e.x, e.y, e.width, e.height))), this.dodraw("copy" == this.render ? this.chart.ctx : g)); if (this.onchange) this.onchange(h); return } h = this.over(h); this.chart.newCursor = c && -1 < h ? 0 === h ? "move" : 1 === h ? "e-resize" : "n-resize" :
                "default"
            }; this.render = "copy"; var d, g; this.setRender = function (a) { this.render = a; d && (this.resetCopy(), this.chart.draw()) }; this.resetCopy = function () { var a = this.chart.canvas; "layer" == this.render ? (d.style.position = "absolute", a.parentNode.appendChild(d), d.setAttribute("left", a.offsetLeft + "px"), d.setAttribute("top", a.offsetTop + "px"), d.style.left = a.offsetLeft, d.style.top = a.offsetTop, d.style.zIndex = 10, d.style.pointerEvents = "none") : d.parentNode && d.parentNode.removeChild(d) }; this.draw = function () {
              "full" == this.render ?
              this.dodraw(this.chart.ctx) : (d || (d = this.chart.canvas.cloneNode(), this.resetCopy(), g = d.getContext("2d")), "copy" == this.render ? (g.drawImage(b.canvas, 0, 0), this.dodraw(this.chart.ctx)) : this.dodraw(g))
            }; this.dodraw = function (b) {
              var d = this.direction, g = "both" == d; this.calcRect(); c || (c = new f(a.x + .5 * a.width, a.y + .5 * a.height)); b.beginPath(); if (g || "vertical" == d) { var k = .5 * this.size.y; b.moveTo(c.x, 0 === k ? a.y : c.y - k); b.lineTo(c.x, 0 === k ? a.y + a.height : c.y + k) } if (g || "horizontal" == d) k = .5 * this.size.x, b.moveTo(0 === k ? a.x : c.x -
                k, c.y), b.lineTo(0 === k ? a.x + a.width : c.x + k, c.y); this.format.stroke.prepare(this.format.stroke.fill, b); b.stroke()
            }
        }; Tee.CursorTool.prototype = new Tee.Tool; Tee.ToolTip = function (b) {
          function c() { function a(a) { e.moveTo(e.oldX + a * e.deltaX, e.oldY + a * e.deltaY); e.autoRedraw && e.chart.draw() } var b = ((new Date).getTime() - e.init) / e.animated; 1 > b ? (a(b), window.requestAnimFrame(c, e)) : a(1) } Tee.Annotation.call(this, b); this.pointer = {
            fill: "Green", firstCircleRadius: "2", secondCircleRadius: "5", visible: !1, firstCircleOpacity: "1",
            secondCircleOpacity: "0.4", animationVisible: !0, animationDuration: 200
          }; this.findPoint = this.visible = !1; this.currentSeries = null; this.currentIndex = -1; this.realTime = !1; this.timID = null; this.autoHide = !1; this.delay = 1E3; this.animated = 100; this.autoRedraw = !0; this.render = "dom"; this.domStyle = "padding:5px; margin-left:5px; background-color:#FFF; border-radius:4px 4px; color:#222;"; this.hide = function () {
            var a = this, b; return $jscomp.asyncExecutePromiseGeneratorProgram(function (d) {
              b = "dom" === a.render; if (a.visible || b) {
                if (a.onhide) a.onhide(a);
                a.visible = !1; a.autoRedraw && (b ? Tee.DOMTip.hide() : a.chart.draw()); a.currentIndex = -1; a.currentSeries = null
              } d.jumpToEnd()
            })
          }; var a = function (a) { a && a[0].hide() }; this.mousemove = function (b) {
            var d = this, c, e, f, k, p, u, y, l, n, z; return $jscomp.asyncExecutePromiseGeneratorProgram(function (g) {
              if (1 == g.nextAddress) {
                c = d.chart.series; e = c.count(); f = null; k = -1; if (d.chart.chartRect.contains(b)) for (p = e - 1; 0 <= p; p--) {
                  if (u = c.items[p], u.visible) {
                    k = u.clicked(b); if (-1 == k && u.continuous) for (k = Math.round(d.chart.axes.bottom.fromSizeCalcIndex(b.x -
                      d.chart.axes.bottom.startPos)), n = 0; n < e; n++)y = Math.abs(c.items[n].data.values[k] - d.chart.axes.left.fromPos(b.y)), 0 == n ? (l = y, u = c.items[n]) : y < l && (u = c.items[n]); if (-1 != k) { f = u; d.currP = b; break }
                  }
                } else k = -1, d.currP = void 0; if (-1 == k) return d.currP = void 0, d.hide(), d.currentIndex = -1, d.currentSeries = null, g.jumpTo(0); if (k == d.currentIndex && f == d.currentSeries && !d.realTime) return g.jumpTo(0); d.currentIndex = k; return (d.currentSeries = f) ? g.yield(d.refresh(f, k), 5) : g.jumpTo(0)
              } if (7 != g.nextAddress) {
                if (!(d.autoHide && 0 < d.delay)) return g.jumpTo(0);
                clearTimeout(d.timID); z = d; return g.yield(window.setTimeout(a, d.delay, [d]), 7)
              } z.timID = g.yieldResult; g.jumpToEnd()
            })
          }; var e = null; this.refresh = function (a, b) {
            var d = this, g, w, k; return $jscomp.asyncExecutePromiseGeneratorProgram(function (h) {
              if (1 == h.nextAddress) { g = "dom" === d.render; d.visible = !g; d.text = a.markText(b); if (!d.ongettext) return h.jumpTo(2); w = d; return h.yield(d.ongettext(d, d.text, a, b), 3) } 2 != h.nextAddress && (w.text = h.yieldResult); if ("" !== d.text && (d.resize(), k = new f, a.calc(b, k), k.x -= .5 * d.bounds.width,
                k.y -= 1.5 * d.bounds.height, 0 > k.x && (k.x = 0), 0 > k.y && (k.y = 0), g || d.autoHide || !(0 < d.animated) || isNaN(d.position.x) || isNaN(d.position.y) ? (d.moveTo(k.x, k.y), d.autoRedraw && (g ? Tee.DOMTip.show(d.text, "auto", d.chart.canvas, d.domStyle, d) : d.chart.draw())) : (d.oldX = d.position.x, d.oldY = d.position.y, d.deltaX = k.x - d.oldX, d.deltaY = k.y - d.oldY, d.init = (new Date).getTime(), e = d, window.requestAnimFrame(c, d)), d.onshow)) d.onshow(d, a, b); h.jumpToEnd()
            })
          }
        }; Tee.ToolTip.prototype = new Tee.Annotation; Tee.RainbowPalette = function () { return "#FF0000 #FF7F00 #FFFF00 #00FF00 #0000FF #6600FF #8B00FF".split(" ") };
      Tee.Palette = function (b) { this.colors = b }; Tee.Palette.prototype.get = function (b) { return this.colors[-1 == b ? 0 : b % this.colors.length] }; Q.prototype = new Tee.Annotation; B.adjustRect = function () {
        var b = 0, c = this.labels, a = this.chart.chartRect, e = this.title, d; this.firstSeries = this.hasAnySeries(); this.visible && this.firstSeries && this.visible && (this.checkMinMax(), c.checkStyle(), (d = e.shouldDraw()) && e.resize(), a.automatic && !this.custom && (c.visible && (c.format.font.prepare(), this.maxLabelDepth = b = this.minmaxLabelWidth(!0),
          c.alternate && (b *= 2), b += c.padding), this.ticks.visible && (b += this.ticks.length), d && (b += e.bounds.height), this.horizontal ? this.otherSide ? a.setTop(a.y + b) : a.height -= b : this.otherSide ? a.width -= b : a.setLeft(a.x + b)))
      }; B.prototype.setPos = function (b, c) { this.startPos = b + this.start * c * .01; this.endPos = b + this.end * c * .01; this.axisSize = this.endPos - this.startPos }; B.calcRect = function () {
        if (this.firstSeries) {
          this.checkMinMax(); var b = this.chart.chartRect, c = this.bounds, a = this.horizontal; a ? (c.y = this.otherSide ? b.y : b.y + b.height,
            c.width = b.width, this.setPos(b.x, b.width)) : (c.x = this.otherSide ? b.x + b.width : b.x, c.height = b.height, this.setPos(b.y, b.height)); this.calcAxisScale(); c = this.chart.series; 0 < c.items.length && this.automatic && (c = c.items[0], c instanceof Tee.Bar && c.notmandatory == this && "sideAll" == c.stacked && (c.notmandatory.minimum = -.5, c.notmandatory.maximum = c.countAll(!1) - .5)); if (this.automatic) {
              c = this.chart.series; c = a ? c.horizMargins() : c.vertMargins(); var e = 0 < c.x, d = 0 < c.y; e && (this.minimum -= this.fromSize(c.x)); d && (this.maximum +=
                this.fromSize(c.y)); (e || d) && this.calcAxisScale()
            } this.calcScale(); c = (a ? b.height : b.width) * this.position * .01; e = this.chart.walls; d = 0; var g = e.visible && this.chart.aspect.view3d; a ? (g && e.bottom.visible && (d = e.bottom.size), this.axisPos = this.otherSide ? b.y + c : b.getBottom() + d - c) : (g && e.left.visible && (d = e.left.size), this.axisPos = this.otherSide ? b.getRight() - c : b.x - d + c)
        }
      }; B.draw = function () {
        if (this.visible && this.firstSeries) {
          this.z = this.otherSide ? this.chart.walls.back.format.z : 0; if (1E-9 >= Math.abs(this.maximum - this.minimum)) {
            var b =
              1E-9 > Math.abs(this.minimum) ? 1E-8 : this.minimum / 1E7; if (this.minimum != this.minimum - b || this.maximum != this.minimum + b) this.setMinMax(this.minimum - b, this.maximum + b), null != this.chart && this.chart.draw()
          } "" !== this.format.stroke.fill && this.drawAxis(); this.roundMin() + 1E3 * this.increm > this.maximum && (this.grid.visible && this.drawGrids(), this.ticks.visible && this.drawTicks(this.ticks, 1, 0), this.innerTicks.visible && this.drawTicks(this.innerTicks, -1, 0), this.minorTicks.visible && this.drawTicks(this.minorTicks, 1, Math.max(0,
            this.minorTicks.count)), this.labels.visible && this.drawLabels()); this.title.shouldDraw() && this.drawTitle()
        }
      }; R.prototype = new Tee.Annotation; "map" in Array.prototype || (Array.prototype.map = function (b, c) { for (var a = Array(this.length), e = 0, d = this.length; e < d; e++)e in this && (a[e] = b.call(c, this[e], e, this)); return a }); "filter" in Array.prototype || (Array.prototype.filter = function (b, c) { for (var a = [], e, d = 0, g = this.length; d < g; d++)d in this && b.call(c, e = this[d], d, this) && a.push(e); return a }); Tee.Series = function (b, c) {
        this.chart =
        null; this.data = { values: [], labels: [], source: null }; this.sortedOptions = { sortedDrawAnimation: new Tee.Animation, sortedValues: [], sortedValuesIndices: [], originalValues: [], sortedLabels: [], originalLabels: [], sorted: !1, ascending: !0, sorting: !1, sortingAnimationType: "verticalchange" }; this.yMandatory = !0; this.horizAxis = "bottom"; this.vertAxis = "left"; this.legend = { visible: !0 }; this.legendStrokeColor = !1; this.sequential = !0; var a = this.format = new Tee.Format(this.chart), e = this.hover = new Tee.Format(this.chart), d = e.shadow;
        this.sortedOptions.sortedDrawAnimation.duration = 500; this.sortedOptions.sortedDrawAnimation.mode = "linear"; a.fill = ""; a.stroke.fill = ""; this.visible = !0; e.stroke.size = .3; e.fill = ""; e.stroke.fill = "red"; d.visible = !0; d.blur = 10; d.width = 0; d.height = 0; this.cursor = "default"; this.over = -1; this.marks = new R(this, this.chart); this.palette = new Tee.Palette; this.paletteName = "opera"; this.themeName = "default"; this.colorEach = "auto"; this.useAxes = !0; this.decimals = 2; this._paintWalls = this._paintAxes = !0; this.sortValues = function () {
          this.sortedOptions.sorting =
          !0; var a = [], b = this.data.values, d = this.sortedOptions.ascending; this.sortedOptions.sortedLabels = []; for (var c = 0; c < this.data.values.length; c++)a.push(c); a.sort(function (a, c) { return d ? b[a] - b[c] : b[c] - b[a] }); this.sortedOptions.originalValues = this.data.values.slice(); this.sortedOptions.originalLabels = this.data.labels.slice(); for (c = 0; c < a.length; c++)this.sortedOptions.sortedLabels.push(this.data.labels[a[c]] ? this.data.labels[a[c]] : a[c]); this.sortedOptions.sortedValuesIndices = a; this.sortedOptions.sortedValues =
            this.data.values.slice().sort(function (a, b) { return d ? a - b : b - a }); this.sortedOptions.sorting = !1; return this.sortedOptions.sortedValues.slice()
        }; this.drawSortedValues = function (a) {
          var b = this.sortedOptions.sortedDrawAnimation; if (this.sortedOptions.sorted != a && !this.sortedOptions.sorting && b && !b.running) {
            (this.sortedOptions.sorted = a) && this.sortValues(); var d = a ? this.sortedOptions.originalValues.slice() : this.sortedOptions.sortedValues.slice(), c = this.data.values, g = a ? this.sortedOptions.sortedValues.slice() : this.sortedOptions.originalValues.slice();
            c.length == g.length && c.every(function (a, b) { return a === g[b] }) || (b.chart = this.chart, b.doStep = function (a) { if (1 > a) for (var b = 0; b < d.length; b++)c[b] = d[b] + (g[b] - d[b]) * a }, b.onstop = function () { for (var a = 0; a < d.length; a++)c[a] = g[a]; b.running = !1 }, b.onstart = function () { b.running = !0 }, b.animate()); this.data.labels = a ? this.sortedOptions.sortedLabels.slice() : this.sortedOptions.originalLabels.slice(); this.chart.draw()
          }
        }; this.init = function (a, b) {
          "object" === typeof a && a && (a instanceof Array ? (this.data.values = a, b instanceof
            Array && (this.data.labels = b)) : a instanceof Tee.Chart ? (this.chart = a, b instanceof Array && (this.data.values = b)) : (this.data.source = a, this.refresh()))
        }; this.init(b, c); this.getFill = function (a, b) { var d = this.palette; d = d && d.colors ? d.get(a) : null; return null === d ? this.isColorEach || !b ? this.chart.palette.get(a) : b.fill : d }; this.isNull = function (a) { return null === this.data.values[a] }; this.getFillStyle = function (b, d) { return a.gradient.visible ? a.gradient.create(b, d) : d }; this.title = ""; this.titleText = function (a) {
          return this.title ||
            "Series " + a.toString()
        }; this.refresh = function (a) { this.data.source ? this.data.source instanceof HTMLTextAreaElement ? (parseText(this.data, this.data.source.value), this.chart && this.chart.draw()) : this.data.source instanceof HTMLInputElement ? Tee.doHttpRequest(this, this.data.source.value, function (a, b) { parseText(a.data, b); a.chart.draw() }, function (b, d) { a && a(this, b, d) }) : a && a(this) : this.data.xml ? (parseXML(this, this.data.xml), this.chart.draw()) : this.data.json && (parseJSON(this, this.data.json), this.chart.draw()) };
        this.valueOrLabel = function (a) { var b = this.data.labels[a]; b && "" !== b || (b = this.valueText(a)); return b }; this.toPercent = function (a) { var b = this.data.values; return (100 * Math.abs(b[a]) / S(b)).toFixed(this.decimals) + " %" }; this.markText = function (a) { var b = this.marks, d = this.dataText(a, b.style, !1); return b.ongettext ? b.ongettext(this, a, d) : d }; this.associatedToAxis = function (a) { return a.horizontal ? "both" == this.horizAxis || this._horizAxis == a : "both" == this.vertAxis || this._vertAxis == a }; this.bounds = function (a) {
          var b = this._horizAxis,
          d = this._vertAxis; a.x = b.calc(this.minXValue()); a.width = b.calc(this.maxXValue()) - a.x; a.y = d.calc(this.maxYValue()); a.height = d.calc(this.minYValue()) - a.y
        }; this.calcStack = function (a, b, d) { d = this.pointOrigin(a, !1) + d; var c = this.mandatoryAxis; b.x = this.notmandatory.calc(this.data.x ? this.data.x[a] : a); this.isStack100 ? (a = this.pointOrigin(a, !0), b.y = 0 === a ? c.endPos : c.calc(100 * d / a)) : b.y = c.calc(d); this.yMandatory || (a = b.x, b.x = b.y, b.y = a) }; this.pointOrigin = function (a, b) {
          var d = 0, c, k = this.chart.series.items; for (c = 0; c < k.length; c++) {
            var g =
              k[c]; if (!b && g == this) break; else if ("no" != g.stacked) { var e = g.data.values; g.visible && g.constructor == this.constructor && e.length > a && (g = e[a], void 0 !== g && (d += b && 0 > g ? -g : g)) }
          } return d
        }; this.doHover = function (a) { var b = this.chart; if (a != this.over) { if (b.onhover) b.onhover(this, a); this.over = a; this.hover.enabled && window.requestAnimFrame(function () { b.draw() }) } }
      }; Tee.Series.prototype.initZ = function (b, c) { var a = this.format; a.z = b / c; a.depth = 1 / c; this.marks.format.z = a.z + .5 * a.depth }; Tee.Series.prototype.setChart = function (b,
        c) { b.chart = c; b.recalcAxes(); b.format.setChart(c); b.marks.setChart(c); b.hover.setChart(c) }; Tee.Series.prototype.calc = function (b, c) { var a = this.data, e = this.notmandatory.calc(a.x ? a.x[b] : b); b = this.mandatoryAxis.calc(a.values[b]); c.x = this.yMandatory ? e : b; c.y = this.yMandatory ? b : e }; Tee.Series.prototype.recalcAxes = function () {
          var b = this.chart.axes; this._horizAxis = this.horizAxis instanceof B ? this.horizAxis : "top" == this.horizAxis ? b.top : b.bottom; this._vertAxis = this.vertAxis instanceof B ? this.vertAxis : "right" == this.vertAxis ?
            b.right : b.left; this.mandatoryAxis = this.yMandatory ? this._vertAxis : this._horizAxis; this.notmandatory = this.yMandatory ? this._horizAxis : this._vertAxis
        }; Tee.Series.prototype.getRect = function () { return new n }; Tee.Series.prototype.clicked = function () { return -1 }; Tee.Series.prototype.fixedFloatToLocal = function (b, c) {
          var a = b.toFixed(c); c = b.toLocaleString(this.chart.language); return -1 != a.indexOf(".") ? (b = (1.1).toLocaleString(this.chart.language).substring(1, 2), a = a.substring(a.indexOf(".") + 1), c.substring(0, -1 == c.indexOf(b) ?
            c.length : c.indexOf(b)) + b + a) : b
        }; Tee.Series.prototype.valueText = function (b) { return (b = (this.data._old || this.data.values)[b]) ? b instanceof Date ? b.format ? b.format(this.dateFormat) : b.toString() : this.valueFormat ? b.toLocaleString(this.chart.language) : (b | 0) == b ? this.fixedFloatToLocal(b, 0).toString() : this.fixedFloatToLocal(b, this.decimals).toString() : "0" }; Tee.Series.prototype.labelOrTitle = function (b) { return this.data.labels[b] || this.title }; Tee.Series.prototype.mousedown = function () { return !1 }; Tee.Series.prototype.mousemove =
          function (b) { if (this.hover.enabled || "default" != this.cursor) { var c = this.clicked(b); this.doHover(c); if ("default" != this.cursor && -1 != c) { this.chart.newCursor || (this.chart.newCursor = this.cursor); return } } c = this.marks; if (c.visible) { var a = this.data.values.length, e = new f, d; for (d = 0; d < a; d += c.drawEvery)if (!this.isNull(d) && (this.markPos(d, e), c.canDraw(e.x, e.y, d) && c.bounds.contains(b))) { this.doHover(d); break } } }; Tee.Series.prototype.mouseout = function () { }; Tee.Series.prototype.markPos = function (b, c) { this.calc(b, c); return !1 };
      Tee.Series.prototype.drawMarks = function () { var b = this.data.values.length, c = new f, a; for (a = 0; a < b; a += this.marks.drawEvery)if (!this.isNull(a)) { var e = this.markPos(a, c); this.marks.drawMark(c.x, c.y, a, e) } }; Tee.Series.prototype.horizMargins = function () { }; Tee.Series.prototype.vertMargins = function () { }; Tee.Series.prototype.minXValue = function () { return this.data.x && 0 < this.data.x.length ? K(this.data.x) : 0 }; Tee.Series.prototype.minYValue = function () { var b = this.data.values; return 0 < b.length ? K(b) : 0 }; Tee.Series.prototype.maxXValue =
        function () { if (this.data.x) return 0 < this.data.x.length ? N(this.data.x) : 0; var b = this.data.values.length; return 0 === b ? 0 : b - 1 }; Tee.Series.prototype.maxYValue = function () { var b = this.data.values, c = b.length, a; if (0 < c) { var e = N(b); if (e !== e) for (a = 0; a < c; a++) { var d = b[a]; void 0 !== d && (e !== e ? e = d : d > e && (e = d)) } return e === e ? e : 0 } return 0 }; Tee.Series.prototype.calcColorEach = function () { this.isColorEach = "yes" == this.colorEach }; Tee.Series.prototype.stackMaxValue = function () {
          if ("100" == this.stacked) return 100; var b = Tee.Series.prototype.maxYValue;
          if ("no" == this.stacked) return b.call(this); b = b.call(this); for (var c = this.data.values, a = c.length, e; a--;)e = c[a], void 0 === e && (e = 0), b = Math.max(b, this.pointOrigin(a, !1) + e); return b
        }; Tee.Series.prototype.dataText = function (b, c, a, e) {
          function d(a, b) { return e ? g ? [a, b] : [a, ""] : a + (b ? " " + b : "") } var g = a ? this.labelOrTitle(b) : this.data.labels[b]; return "value" == c ? this.valueText(b) : "percent" == c ? this.toPercent(b) : "percentlabel" == c ? d(this.toPercent(b), g) : "valuelabel" == c || "auto" == c ? d(this.valueText(b), g) : "label" == c ? g || "" :
            "index" == c ? b.toFixed(0) : "labelvalue" == c ? d(g, this.valueText(b)) : "labelpercent" == c ? d(g, this.toPercent(b)) : "valuepercent" == c ? this.valueText(b) + " " + this.toPercent(b) : this.valueOrLabel(b)
        }; Tee.Series.prototype.legendText = Tee.Series.prototype.dataText; Tee.Series.prototype.count = function () { return this.data.values.length }; Tee.Series.prototype.legendCount = function () { return this.count() }; Tee.Series.prototype.legendColor = function (b) {
          return this.isColorEach && -1 != b ? this.getFill(b) : this.legendStrokeColor ? this.format.stroke.fill :
            this.format.fill
        }; Tee.Series.prototype.addRandom = function (b, c, a) { c || (c = 1E3); b || (b = 5); var e = this.data; e.values.length = b; a && (e.x = Array(b)); if (0 < b) { e.values[0] = Math.random() * c; a && (e.x[0] = Math.random() * c); for (var d = 1; d < b; d++)e.values[d] = e.values[d - 1] + Math.random() * c - .5 * c, a && (e.x[d] = Math.random() * c) } return this }; Tee.Series.prototype.doSort = function (b, c) {
          if ("none" == b) return null; for (var a = this.data.values, e = a.length, d = Array(e), g = 0; g < e; g++)d[g] = g; if ("labels" == b) {
            a = this.data.labels; var h, f, w = c ? -1 : 1, k = c ? 1 :
              -1; d.sort(function (b, d) { h = a[b].toLowerCase(); f = a[d].toLowerCase(); return h < f ? w : h == f ? 0 : k })
          } else d.sort(c ? function (b, d) { return a[b] - a[d] } : function (b, d) { return a[d] - a[b] }); return d
        }; P.prototype.each = function (b) { for (var c = this.items.length, a = 0; a < c; a++)b(this.items[a]) }; P.prototype.eachAxis = function (b, c) { for (var a = this.items.length, e; a--;)e = this.items[a], e.visible && (!b || e.associatedToAxis(b)) && (e.__alwaysDraw || 0 < e.count()) && c(e) }; Tee.Chart = function (b, c, a) {
          function e(b) {
            g.chart.addSeries(new (a || Tee.Bar)(g.chart)).data.values =
            b
          } var d = "undefined" != typeof navigator ? navigator.userAgent.toLowerCase() : ""; this.isChrome = -1 < d.indexOf("chrome"); this.isAndroid = -1 < d.indexOf("android"); this.isMozilla = "undefined" !== typeof window && window.mozRequestAnimationFrame; this.language = window.navigator.userLanguage || window.navigator.language; b && (this.canvas = "undefined" !== typeof HTMLCanvasElement && b instanceof HTMLCanvasElement ? b : "string" == typeof b ? document.getElementById(b) : b); this.canvas || (this.canvas = document.createElement("canvas"), this.canvas.width =
            600, this.canvas.height = 400); var g = this.canvas; (this.__webgl = g.__webgl) || 0 === g.clientWidth ? this.bounds = new n(0, 0, g.width, g.height) : (this.bounds = new n(0, 0, g.clientWidth, g.clientHeight), g.width = g.clientWidth, g.height = g.clientHeight); this.chartRect = new n; this.chartRect.automatic = !0; this.chartRect.setFrom(this.bounds); this.palette = new Tee.Palette("#4466a3 #f39c35 #f14c14 #4e97a8 #2b406b #1d7b63 #b3080e #f2c05d #5db79e #707070 #f3ea8d #b4b4b4".split(" ")); var h = this.aspect = {
              chart: this, view3d: this.__webgl,
              ortogonal: !this.__webgl, rotation: 0, elevation: 315, perspective: 50, clip: !0, _orthox: 10, _orthoy: 8, clipRect: function (a) { var b = this.chart.ctx; b.save(); b.beginPath(); this.view3d ? b.rect(a.x, a.y - this._orthoy, a.width + this._orthox, a.height + this._orthoy) : b.rect(a.x, a.y, a.width, a.height); b.clip() }
            }; this.panel = new Z(this); this.walls = {
              chart: this, visible: !0, left: new L(this), right: new L(this), bottom: new L(this), back: new L(this), draw: function (a, b) {
                var d = this.chart.ctx, c = this.transparency, g = d.beginParent; this.visual =
                  g ? d.beginParent() : null; if (0 < c) { var k = d.globalAlpha; d.globalAlpha = (1 - c) * k } var e = this.back.bounds; e.setFrom(a); if (b.view3d) { b = this.bottom.visible ? this.bottom.size : 0; var h = this.left.size; 0 < h && (e.x -= h, e.width += h); 0 < b && (e.height += b); this.left.bounds.set(a.x - h, a.y, h, a.height + b); this.bottom.bounds.set(a.x, a.getBottom(), a.width, b); this.back.format.depth = this.back.size } !this.back.visible || this.back.draw(); this.chart.aspect.view3d && (this.left.visible && this.left.draw(), this.bottom.visible && this.bottom.draw(),
                    this.right.visible && this.right.draw()); 0 < c && (d.globalAlpha = k); g && d.endParent()
              }
            }; b = this.walls.back.format; b.fill = "rgb(240,240,240)"; b.shadow.visible = !0; b.z = 1; b = this.walls.left; b.format.fill = "#BBAA77"; b.format.depth = 1; b.size = 2; b = this.walls.bottom; b.format.depth = 1; b.size = 2; this.walls.right.visible = !1; this.axes = new X(this); this.legend = new V(this); this.series = new P(this); this.title = new Q(this, "blue"); this.title.text = "TeeChart"; this.title.format.z = 1; this.subtitle = new Q(this, "blue"); this.subtitle.format.z =
              1; this.footer = new Q(this, "red"); this.footer.format.z = 0; this.subfooter = new Q(this, "red"); this.subfooter.format.z = 0; this.zoom = new G(this); this.scroll = new Y(this); this.tools = new D(this); this.oldPos = new f; this.calcMouse = function (a, b) { b.x = a.clientX; b.y = a.clientY; a = this.canvas; if (a.getBoundingClientRect) a = a.getBoundingClientRect(), b.x -= a.left, b.y -= a.top; else if (a.offsetParent) { do b.x -= a.offsetLeft, b.y -= a.offsetTop, a = a.offsetParent; while (a) } }; var m = new f(0, 0); this.domousemove = function (a) {
                var b = this.chart;
                if (!b.ctx) return !1; a = a || window.event; a.touches && (a = a.touches[a.touches.length - 1]); b.calcMouse(a, m); if (b.scroll.active) {
                  var d = b.scroll.direction, c = "both" == d; if (c || "horizontal" == d) { var g = b.axes.bottom.fromSize(b.oldPos.x - m.x); b.axes.top.scroll(g); b.axes.bottom.scroll(g) } if (c || "vertical" == d) g = -b.axes.left.fromSize(b.oldPos.y - m.y), b.axes.left.scroll(g), b.axes.right.scroll(g); b.oldPos.x = m.x; b.oldPos.y = m.y; b.scroll.done = !0; if (b.onscroll) b.onscroll(a); b.scroll.done && window.requestAnimFrame(function () { b.draw() });
                  return !1
                } if (b.zoom.active) { if (m.x != b.oldPos.x || m.y != b.oldPos.y) b.zoom.change(m), window.requestAnimFrame(function () { b.draw() }), b.zoom.done = !0; return !1 } b.newCursor = null; b.tools.mousemove(m); b.series.mousemove(m); b.legend.mousemove(m); b.title.mousemove(m); b.mousemove && b.mousemove(m); a = this.chart.canvas.style; b.newCursor ? a.cursor != b.newCursor && (b.oldCursor = a.cursor, a.cursor = b.newCursor) : void 0 !== b.oldCursor && a.cursor != b.oldCursor && (a.cursor = b.oldCursor); return !0
              }; var w = new f(0, 0); this.domousedown = function (a) {
                a =
                a || window.event; var b = !1, d = this.chart; d.calcMouse(a.touches ? a.touches[0] : a, w); var c = d.series.anyUsesAxes() && d.chartRect.contains(w); doubleTap(d); d.zoom.enabled && twoFingersZoom(d, d.zoom); c = d.series.anyUsesAxes() && d.chartRect.contains(w); a.touches ? 1 < a.touches.length ? d.scroll.active = !1 : (d.scroll.active = d.scroll.enabled && c, d.scroll.active && (d.zoom.active = !1)) : (d.zoom.active = a.button == d.zoom.mouseButton && d.zoom.enabled && c, d.scroll.active = a.button == d.scroll.mouseButton && d.scroll.enabled && c); d.zoom.done =
                  !1; d.scroll.done = !1; d.oldPos = w; 0 === a.button ? (b = d.tools.mousedown(a), b || (b = d.series.mousedown(a)) || (b = d.legend.mousedown(a)), b || d.mousedown && (b = d.mousedown(a)), d.canvas.oncontextmenu = null) : 2 == a.button && (d.canvas.oncontextmenu = function () { return !1 }); b ? d.zoom.active = d.scroll.active = !1 : b = d.zoom.active || d.scroll.active; a.preventDefault ? a.preventDefault() : a.cancelBubble = !0; b && (d = a.target || a.fromElement) && d.setPointerCapture && a.pointerId && d.setPointerCapture(a.pointerId); return !b
              }; this.domouseup = function (a) {
                a =
                a || window.event; var b = this.chart; b.zoom.active = !1; b.scroll.active = !1; if (b.zoom.done && !b.zoom.touching) { if (b.zoom.apply() && b.onzoom) b.onzoom(); b.draw(); var d = !0 } else if (d = b.scroll.done, !d) { d = b.series.clicked(b.oldPos); if (!d && (d = b.tools.clicked(b.oldPos), !d && (d = b.title.clicked(b.oldPos)) && b.title.onclick)) b.title.onclick(b.title); d || b.mouseup && (d = b.mouseup(a)) } b.zoom.old = null; b.zoom.done = !1; b.scroll.done = !1; d ? a.preventDefault ? a.preventDefault() : a.cancelBubble = !0 : b.canvas.oncontextmenu = null; (b = a.target ||
                  a.fromElement) && b.releasePointerCapture && a.pointerId && b.releasePointerCapture(a.pointerId)
              }; g.onpointerdown = g.ontouchstart = this.domousedown; g.onpointerup = g.ontouchend = this.domouseup; g.onpointermove = g.ontouchmove = this.domousemove; this._doWheel = function (a) {
                var b = this.chart; if (b.zoom.wheel.enabled) {
                  a = a || window.event; var d = b.zoom.wheel.factor * (a.wheelDelta ? a.wheelDelta / 120 : a.detail ? -a.detail / 3 : 0); if (0 < Math.abs(d)) {
                    var c = { x: 0, y: 0 }; b.calcMouse(a, c); b.chartRect.contains(c) && (b.axes.each(function () {
                      var a =
                        this.maximum - this.minimum; 0 < a && (a = d * a * .05, this.setMinMax(this.minimum + a, this.maximum - a))
                    }), b.draw(), a.returnValue = !1, a.preventDefault && a.preventDefault()); for (a = 0; g = b.tools.items[a++];)g instanceof Tee.ToolTip && g.active && g.mousemove(c)
                  }
                } else { a = 0; for (var g; g = b.tools.items[a++];)g instanceof Tee.ToolTip && g.active && g.hide() }
              }; g.addEventListener && g.addEventListener("DOMMouseScroll", this._doWheel, !1); g.onmousewheel = this._doWheel; g.onmouseout = function (a) {
                a && !a.target.setCapture && (this.chart.scroll.active =
                  !1); this.chart.series.mouseout(); this.chart.tools.mouseout()
              }; this.addSeries = function (a) { a.setChart(a, this); null != a.donutArray && "undefined" !== a.donutArray && a.linkDonutsToChart(); var b = this.series.items, d = b.indexOf(a); -1 == d && (d = b.push(a) - 1); "" === a.title && (a.title = "Series" + (1 + d).toString()); "" === a.format.fill && (a.format.fill = this.palette.get(d)); return a }; this.removeSeries = function (a) { var b = this.series.items; a = b.indexOf(a); -1 != b && b.splice(a, 1) }; g.chart = this; if (c && 0 < c.length) if (c[0] instanceof Array) for (b =
                0; b < c.length; b++)e(c[b]); else e(c); this.getSeries = function (a) { return this.series.items[a] }; this.draw = function (a) {
                  var b = this.series, d = this.chartRect; a = this.ctx = a || (this.canvas.getContext ? this.canvas.getContext("2d") : null); if (!a) throw "Canvas does not provide Context"; Tee.Scroller && this instanceof Tee.Scroller && a.clearRect(0, 0, this.canvas.width, this.canvas.height); d.automatic && d.setFrom(this.bounds); for (var c = b.items.length, g, e = !1, k = !1, f = 1, m = b.visibleCount(), w = 0; c--;)g = b.items[c], g.visible && (g.initZ(w,
                    m), w++, g._paintAxes && (e = !0), g._paintWalls && (k = !0), g.maxZ && g.maxZ > f && (f = g.maxZ)); this.walls.left.format.depth = f; this.walls.bottom.format.depth = f; this.walls.back.format.z = f; this.panel.draw(); d.automatic && this.panel.margins.apply(d); this.title.tryDraw(!0); this.subtitle.tryDraw(!0); this.footer.tryDraw(!1); this.subfooter.tryDraw(!1); b.beforeDraw(); this.legend.visible && (this.legend.calcrect(), this.legend.draw()); h.view3d && !this.__webgl && (d.y += h._orthoy, d.height -= h._orthoy, d.width -= h._orthox); b = this.axes;
                  if (this.series.anyUsesAxes() && (b.each(B.adjustRect), b.each(B.calcRect), this.walls.visible && k && this.walls.draw(d, this.aspect), b.visible && e)) { if (0 < b.transparency) { var l = a.globalAlpha; a.globalAlpha = (1 - b.transparency) * l } d = a.beginParent; b.visual = d ? a.beginParent() : null; b.each(B.draw); d && a.endParent(); 0 < b.transparency && (a.globalAlpha = l) } this.series.draw(); this.tools.draw(); this.zoom.active && !this.zoom.touching && this.zoom.draw(); if (this.ondraw) this.ondraw(this); this.isNLc = !1
                }; this.toImage = function (a, b, d) {
                  if (a =
                    document.getElementById(a)) a.src = "" !== b ? this.canvas.toDataURL(b, d) : this.canvas.toDataURL()
                }
        }; Tee.CustomBar = function (b, c) {
          Tee.Series.call(this, b, c); this.sideMargins = 100; this.useOrigin = !0; this.origin = 0; this.continuous = !1; this.marks.visible = !0; this.marks.location = "end"; this.hover.enabled = !0; this.offset = 0; this.barSize = 70; this.customBarSize = 0; this.barStyle = "bar"; var a = 1, e = this.format; e.fill = ""; e.stroke.fill = "black"; e.shadow.visible = !0; e.round.x = 4; e.round.y = 4; e.gradient.visible = !0; e.depth = 1; this.stacked =
            "no"; this.drawBar = function (a, b) {
              var d = e.depth, c = e.z, g = this.chart.ctx; b || (b = this.barStyle); e.depth = .5 * Math.min(this.yMandatory ? a.width : a.height, 200) / 100; return 0 < a.width && 0 < a.height ? ("side" !== this.stacked && (e.z += .5 * (1 - e.depth)), "bar" === b ? e.cube(a) : "line" === b ? (g.beginPath(), g.z = e.z + .5 * e.depth, this.yMandatory ? (b = a.x + .5 * a.width, g.moveTo(b, a.y), g.lineTo(b, a.y + a.height)) : (b = a.y + .5 * a.height, g.moveTo(a.x, b), g.lineTo(a.x + a.width, b))) : "cylinder" === b ? e.cylinder(a, 1, this.yMandatory) : "cone" === b ? e.cylinder(a, 0,
                this.yMandatory) : "ellipsoid" === b && this.chart.__webgl ? (g.depth = e.depth, g.z = e.z, g.image = this.image, g.ellipsoid(a, this.yMandatory)) : (e.z += .5 * e.depth, e.ellipsePath(this.chart.ctx, a.x + .5 * a.width, a.y + .5 * a.height, a.width, a.height)), e.depth = d, e.z = c, !0) : !1
            }; this.countAll = function (a) { var b = this.chart.series.items, d = 0, c = b.length, g; for (g = 0; g < c; g++) { var e = b[g]; if (e == this && a) break; else e.visible && e.constructor == this.constructor && (d += e.data.values.length) } return d }; var d = new f, g, h = new n, m = { total: 0, index: 0 }; this._margin =
              0; this.calcBarOffset = function (a) { var b = "sideAll" == this.stacked; this.countall = b ? this.countAll(!0) : 0; b = b ? this.countAll() : this.data.values.length; 1 < b && (a /= b); "no" == this.stacked ? (a /= m.total, d.x = (0 < this.customBarSize ? this.customBarSize : a * this.barSize * .01) * (1 == m.total ? -.5 : m.index - .5 * m.total), b = m.total) : (d.x = .5 * -a, b = 1); d.y = 0 < this.customBarSize ? this.customBarSize : a * this.barSize * .01; this._margin = .5 * b * d.y + this.sideMargins * b * (a - d.y) * .005; "no" != this.stacked && (d.x += this.offset * a * .01 + .5 * (a - d.y)) }; this.calcStackPos =
                function (a, b) { if (this.isStacked) { this.calcStack(a, b, this.data.values[a]); b = this.pointOrigin(a, !1); var d = this.mandatoryAxis; this.isStack100 ? (a = this.pointOrigin(a, !0), g = 0 === a ? d.endPos : d.calc(100 * b / a)) : g = d.calc(b) } else this.calc(a, b), "sideAll" == this.stacked && (a = this.notmandatory.calc(this.countall + a), this.yMandatory ? b.x = a : b.y = a) }; var w = !1; this.drawSortedValues = function (b) {
                  var d = this.sortedOptions.sortedDrawAnimation; if (this.sortedOptions.sorted != b && !this.sortedOptions.sorting && d && !d.running) {
                    this.sortedOptions.sorted =
                    b; this.sortedOptions.sorted && this.sortValues(); var c = this.sortedOptions.sorted ? this.sortedOptions.originalValues.slice() : this.sortedOptions.sortedValues.slice(), g = this.data.values, e = this.sortedOptions.sorted ? this.sortedOptions.sortedValues.slice() : this.sortedOptions.originalValues.slice(), h = this, k = this.sortedOptions; d.chart = this.chart; "horizontalchange" == k.sortingAnimationType ? (d.doStep = function (b) { 1 > b && (a = b, h.draw()) }, d.onstop = function () { a = 1; if (k.sorted) for (var b = 0; b < c.length; b++)g[b] = e[b] }, d.onstart =
                      function () { if (!k.sorted) for (var a = 0; a < c.length; a++)g[a] = e[a] }) : (d.doStep = function (a) { if (1 > a) for (var b = 0; b < c.length; b++)g[b] = c[b] + (e[b] - c[b]) * a }, d.onstop = function () { a = 1; for (var b = 0; b < c.length; b++)g[b] = e[b]; d.running = !1 }, d.onstart = function () { d.running = !0 }); d.animate(); this.data.labels = this.sortedOptions.sorted ? this.sortedOptions.sortedLabels.slice() : this.sortedOptions.originalLabels.slice(); this.chart.draw()
                  }
                }; this.draw = function () {
                  var b = this.data.values.length; if (0 < b) {
                    this.initOffsets(); var c = new f,
                      m = this.chart.ctx; this.hover.enabled || (e.stroke.prepare(), e.shadow.prepare(m)); var l = this.hover.enabled, n = "line" === this.barStyle, q = this.data.styles; l && null != this.format.image.url && (this.hover.image.url = this.format.image.url, this.hover.image.repeat = this.format.image.repeat, this.hover.image.backFill = this.format.image.backFill); for (var z = e.z = 0; z < b; z++)if (!this.isNull(z)) {
                        this.calcStackPos(z, c); var r = new Tee.Point; 1 > a && (this.calcStackPos(this.sortedOptions.sortedValuesIndices.findIndex(function (a) {
                          return a ==
                            z
                        }), r), c.x = this.sortedOptions.sorted ? (-c.x + r.x) * a + c.x : (c.x - r.x) * a + r.x); if (this.onbeforedrawPoint) this.onbeforedrawPoint(z); this.calcBarBounds(c, h, d, g instanceof Array ? g[z] : g); this.barRectangle = h; r = this.drawBar(h, q ? q[z] : null); var M = l && this.over == z, t = M ? this.hover : e; m.fillStyle = this.getFillStyle(h, this.getFill(z, "" === t.fill ? e : t)); this.format.gradient.visible || (t.fill = m.fillStyle); l && t.shadow.prepare(m); M && (null == this.format.image.url || w ? m.fill() : (w = !0, e.draw(m, null, h))); r && (t.draw(m, null, h), n || "" !==
                          t.stroke.fill) && (l && t.stroke.prepare(), !M && n && (m.strokeStyle = m.fillStyle), m.shadowColor = "transparent", m.stroke(), t.shadow.visible && (m.shadowColor = t.shadow.color))
                      }
                  }
                }; this.calcColorEach = function () { this.chart.series.visibleCount(this, Tee.CustomBar, m); this.isColorEach = "yes" == this.colorEach || "auto" == this.colorEach && 1 == m.total }; this.initOffsets = function () {
                  var a = this.notmandatory, b = this.mandatoryAxis, d = this.yMandatory ? this.maxXValue() - this.minXValue() : this.maxYValue() - this.minYValue(); "sideAll" == this.stacked ?
                    this.calcBarOffset(a.axisSize) : this.calcBarOffset(0 === d ? a.axisSize : a.calcSize(d)); if (this.useOrigin) if (this.origin instanceof Array) for (g = [], a = 0; a < this.origin.length; a++)g[a] = b.calc(this.origin[a]); else g = b.calc(this.origin); else g = this.yMandatory ? b.inverted ? b.startPos : b.endPos : b.inverted ? b.endPos : b.startPos; b = this.stacked; this.isStacked = "no" !== b && "sideAll" !== b && "side" !== b; this.isStack100 = "100" === b
                }; this.clicked = function (a) {
                  this.initOffsets(); var b = new f, c = this.data.values.length, e; for (e = 0; e < c; e++)if (!this.isNull(e) &&
                    (this.calcStackPos(e, b), this.calcBarBounds(b, h, d, g instanceof Array ? g[e] : g), h.contains(a))) return e; return -1
                }; this.markPos = function (a, b) {
                  var c = this.yMandatory, e = d.x + .5 * d.y, k = this.marks; this.calcStackPos(a, b); if ("sideAll" == this.stacked) { var f = this.notmandatory.calc(this.countall + a); c ? b.x = f : b.y = f } f = this.useOrigin && this.data.values[a] < (this.origin instanceof Array ? this.origin[a] : this.origin); this.mandatoryAxis.inverted && (f = !f); "center" == k.location && (this.calcBarBounds(b, h, d, g instanceof Array ? g[a] : g),
                    k.canDraw(b.x, b.y, a, f) && (c ? b.y = h.y + .5 * h.height + .5 * k.bounds.height : b.x = h.x + .5 * h.width - .5 * k.bounds.width)); a = this.chart.aspect; k = a.view3d; var m = 0, w = 0; k && a.orthogonal && (m = .5 * a._orthox, w = .5 * a._orthoy); c ? (b.x += k ? e + m : e, k && (b.y -= w)) : (b.y += k ? e - w : e, k && (b.x += m)); return f
                }; this.labelOrTitle = function (a) { var b = this.title, d = this.data.labels[a]; return 1 < m.total ? b || d : this.parent.labelOrTitle(a) }; this.initZ = function (a, b) {
                  var d = this.format; if ("side" !== this.stacked) for (d.z = 0, d.depth = 1; 1 < a;) {
                    if (a--, b = this.chart.series.items[a],
                      b.visible && b.constructor == this.constructor) { d.z = b.z; d.depth = b.depth; break }
                  } else Tee.Series.prototype.initZ.call(this, a, b); this.marks.format.z = d.z + .5 * d.depth
                }
        }; Tee.CustomBar.prototype = new Tee.Series; Tee.CustomBar.prototype.parent = Tee.Series.prototype; Tee.CustomBar.constructor = Tee.CustomBar; Tee.Bar = function (b, c) {
          Tee.CustomBar.call(this, b, c); this.calc = function (a, b) { this.isStacked ? this.calcStack(a, b, this.data.values[a]) : this.parent.calc.call(this, a, b) }; this.horizMargins = function (a) {
            this.initOffsets();
            a.x = this._margin; a.y = this._margin
          }; this.vertMargins = function (a) { var b = this.marks, d = this.format.stroke, c = this.minYValue() < (this.origin instanceof Array ? K(this.origin) : this.origin); b.visible && "center" !== b.location && (a.y = b.arrow.length + b.format.textHeight("Wj") + b.margins.top + b.margins.bottom, d = b.format.stroke); "" !== d.fill && (a.y += 2 * d.size + 1); c && (a.x = a.y) }; this.maxXValue = function () { return "sideAll" === this.stacked ? this.countAll() - 1 : this.parent.maxXValue.call(this) }; this.minYValue = function () {
            var a = this.parent.minYValue.call(this);
            return this.useOrigin ? Math.min(this.origin instanceof Array ? K(this.origin) : this.origin, a) : a
          }; this.maxYValue = function () { if ("sideAll" === this.stacked || "side" === this.stacked) { var a = 0, b = this.chart.series.items, d = b.length, c; for (c = 0; c < d; c++) { var h = b[c]; h.visible && h.constructor === this.constructor && (h = h.parent.maxYValue.call(h), h > a && (a = h)) } return a } return this.stackMaxValue() }; this.calcBarBounds = function (a, b, d, c) {
            b.x = a.x + d.x; b.width = d.y; this._vertAxis.inverted ? (b.y = c, b.height = a.y - b.y) : (b.y = a.y, b.height = c -
              a.y); 0 > b.height && (b.y += b.height, b.height = -b.height)
          }
        }; Tee.Bar.prototype = new Tee.CustomBar; Tee.Bar.prototype.parent = Tee.CustomBar.prototype; Tee.HorizBar = function (b, c) {
          Tee.CustomBar.call(this, b, c); this.yMandatory = !1; this.format.gradient.direction = "rightleft"; this.maxMarkWidth = function () { var a = 0, b, d = this.marks, c = this.count(); if (d.visible) { var h = this.marks.format; h.font.prepare(); for (b = 0; b < c; b += d.drawEvery)if (!this.isNull(b)) { var f = h.textWidth(this.markText(b) + "W"); f > a && (a = f) } } return a }; this.horizMargins =
            function (a) { var b = this.marks, d = this.format.stroke, c = this.minXValue() < this.origin; b.visible && "center" !== b.location && (a.y = b.arrow.length + this.maxMarkWidth() + b.margins.left + b.margins.right, d = b.format.stroke); "" !== d.fill && (a.y += 2 * d.size + 1); c && (a.x = a.y) }; this.vertMargins = function (a) { this.initOffsets(); a.x += this._margin; a.y += this._margin }; this.maxYValue = function () { return "sideAll" == this.stacked ? this.countAll() - 1 : this.parent.maxXValue.call(this) }; this.minYValue = function () {
              return "sideAll" == this.stacked ? 0 :
                this.parent.minXValue.call(this)
            }; this.minXValue = function () { var a = this.parent.minYValue.call(this); return this.useOrigin ? Math.min(this.origin, a) : a }; this.maxXValue = function () { return this.stackMaxValue() }; this.calcBarBounds = function (a, b, d, c) { b.y = a.y + d.x; b.height = d.y; this._horizAxis.inverted ? (b.x = a.x, b.width = c - a.x) : (b.x = c, b.width = a.x - b.x); 0 > b.width && (b.x += b.width, b.width = -b.width) }
        }; Tee.HorizBar.prototype = new Tee.CustomBar; Tee.HorizBar.prototype.parent = Tee.CustomBar.prototype; Tee.Bullet = function (b, c) {
          function a(a,
            b) { var d = 0; if (0 < a.values.length) { a.barStates.push(e(a.values[0], d + b, a.barSize, a.colors[0], a.colors[0], a.gradientVisible)); d += a.values[0]; for (var c = 1; c < a.values.length; c++)a.barStates.push(e(a.values[c], d + b, a.barSize, a.colors[(c - 1) % a.colors.length], a.colors[c % a.values.length], a.gradientVisible)), d += a.values[c] } } function e(a, b, c, e, f, k) {
              a = new Tee.HorizBar([a + b]); a.stacked = "side"; a.origin = b; a.barSize = c; a.marks.visible = !1; a.format.round.x = 0; a.format.round.y = 0; a.format.gradient.colors = [e, f]; k ? (a.format.gradient.direction =
                "leftright", a.format.gradient.visible = !0) : (a.format.gradient.visible = !1, a.format.fill = f, a.palette.colors = [f]); a.format.shadow.visible = !1; a.format.stroke.fill = "rgba(0,0,0,0.0)"; return a
            } Tee.HorizBar.call(this, [b[0]], c ? [c[0]] : []); this.barSize = 25; this.limit = { origin: 38, width: .2, height: 35, color: "red", bar: null }; this.marks.visible = !1; this.states = { colors: ["#111", "#444", "#777", "#BBB", "#EEE"], values: [10, 10, 10, 10, 10], barStates: [], barSize: 50, gradientVisible: !1 }; a(this.states, this.origin); this.minValue = function () {
              return 1 <=
                this.states.barStates.length ? this.states.barStates[0].origin : 0
            }; this.maxValue = function () { return 1 <= this.states.barStates.length ? this.states.barStates[this.states.barStates.length - 1].data.values[0] : 0 }; this.parentDraw = this.draw; this.draw = function () {
              var b = this.minValue(); var c = this.maxValue(); this.chart.zoom.reset = function () { this.chart.axes.each(function () { this.automatic = !0 }); this.chart.axes.bottom.setMinMax(b, c) }; this.states.barStates = []; a(this.states, this.origin); for (var h = 0; h < this.states.barStates.length; h++)this.chart &&
                this.states.barStates[h].setChart(this.states.barStates[h], this.chart), this.states.barStates[h].draw(); this.limit.bar = e(this.limit.width, this.limit.origin + this.origin, this.limit.height, this.limit.color, this.limit.color, !1); this.limit.bar.setChart(this.limit.bar, this.chart); this.limit.bar.draw(); this.parentDraw()
            }
        }; Tee.Bullet.prototype = new Tee.HorizBar; Tee.Bullet.prototype.parent = Tee.HorizBar.prototype; Tee.CustomSeries = function (b, c) {
          Tee.Series.call(this, b, c); this.stacked = "no"; this.invertedStairs = this.stairs =
            !1; this.continuous = !0; this.clickTolerance = 3; this.hover.enabled = !0; this.isStack100 = this.isStacked = this.hover.line = !1; this.smooth = 0; this.pointer = new function (a, b) {
              this.setChart = function (a) { this.chart = a; this.format.setChart(a) }; this.chart = a; this.inflateMargins = !0; a = this.format = new Tee.Format(a); a.shadow.visible = !1; a.fill = ""; a.gradient.colors = ["white", "white", "white"]; a.gradient.visible = !0; a.shadow.visible = !0; this.colorEach = this.visible = !1; this.style = "rectangle"; this.height = this.width = 12; this.draw = function (a,
                c, e, m) {
                  var d = this.chart.ctx; e.z = b.format.z; this.transform && (d.save(), this.transform(a.x, a.y, c)); c = .5 * this.width; var g = .5 * this.height; "cube" == this.style ? (a = { x: a.x - c, y: a.y - g, width: this.width, height: this.height }, m = Math.max(c, g) / 50, e.z = .5 * (b.format.z + b.format.depth) - .5 * m, e.depth = m, e.cube(a), e.draw(d, null, a)) : "rectangle" == this.style ? e.rectangle(a.x - c, a.y - g, this.width, this.height) : "ellipse" == this.style ? e.ellipse(a.x, a.y, this.width, this.height) : "sphere" == this.style ? (e.depth = b.format.depth, e.sphere(a.x, a.y,
                    this.width, this.height)) : "cylinder" == this.style ? (a = { x: a.x - c, y: a.y - g, width: this.width, height: this.height }, m = e.gradient, c = m.direction, g = m.colors.slice(0), m.direction = "leftright", m.colors = [m.colors[1], m.colors[0], m.colors[1]], e.cylinder(a, 1, !0), e.draw(d, null, a), m.direction = c, m.colors = g) : "cone" == this.style ? (a = { x: a.x - c, y: a.y - g, width: this.width, height: this.height }, e.cylinder(a, 0, !0), e.draw(d, null, a)) : "triangle" == this.style ? e.polygon([new f(a.x, a.y - g), new f(a.x - c, a.y + g), new f(a.x + c, a.y + g)]) : "downtriangle" ==
                      this.style ? e.polygon([new f(a.x, a.y + g), new f(a.x - c, a.y - g), new f(a.x + c, a.y - g)]) : "diamond" == this.style ? e.polygon([new f(a.x, a.y - g), new f(a.x - c, a.y), new f(a.x, a.y + g), new f(a.x + c, a.y)]) : (d.beginPath(), "cross" == this.style && (d.moveTo(a.x - c, a.y), d.lineTo(a.x + c, a.y), d.moveTo(a.x, a.y - g), d.lineTo(a.x, a.y + g)), "x" == this.style && (d.moveTo(a.x - c, a.y - g), d.lineTo(a.x + c, a.y + g), d.moveTo(a.x - c, a.y + g), d.lineTo(a.x + c, a.y - g)), e.stroke.prepare(m), d.stroke()); this.transform && d.restore()
              }; this.setSize = function (a) {
                this.height =
                this.width = a
              }
            }(this.chart, this); this.maxYValue = function () { return this.stackMaxValue() }; this.calc = function (a, b) { this.isStacked ? this.calcStack(a, b, this.data.values[a]) : Tee.Series.prototype.calc.call(this, a, b) }; this.calcColorEach = function () { this.isColorEach = "yes" == this.colorEach || this.pointer.colorEach || "yes" == this.colorEachLine || 1 == this.colorEachLine }; this.initZ = function (a, b) {
              var d = this.format; if ("no" !== this.stacked) for (d.z = 0, d.depth = 1; 1 < a;) {
                if (a--, b = this.chart.series.items[a], b.visible && b.constructor ==
                  this.constructor) { d.z = b.z; d.depth = b.depth; break }
              } else Tee.Series.prototype.initZ.call(this, a, b); this.marks.z = d.z + .5 * d.depth
            }
        }; Tee.CustomSeries.prototype = new Tee.Series; Tee.CustomSeries.prototype.drawPointers = function () {
          var b = this.data.values.length, c = this.pointer.format, a = "yes" == this.colorEach || this.pointer.colorEach; a || "" !== c.fill || (c.fill = this.format.fill); var e = new f, d = c.gradient, g, h = c.fill, m = h; !a && d.visible && d.setEndColor(h); for (g = 0; g < b; g++)if (!this.isNull(g)) {
            this.calc(g, e); h = this.getFill(g,
              c); h != m && (d.visible ? d.setEndColor(h) : c.fill = h, m = h); this.getSize(g); if (this.onbeforedrawpointer) this.onbeforedrawpointer(g, this.pointer); this.pointer.draw(e, g, c, h); this.hover.enabled && this.over == g && this.pointer.draw(e, g, this.hover, h)
          } a && (c.fill = m)
        }; Tee.CustomSeries.prototype.setChart = function (b, c) { var a = Tee.Series.prototype.setChart; a(b, c); b.pointer.setChart(c) }; Tee.CustomSeries.prototype.clicked = function (b) {
          var c = new f, a = new f, e = this.data.values.length, d; if (this.drawLine && 0 < e && (this.hover.line || !this.pointer.visible)) for (this.calc(0,
            c), d = 1; d < e; d++) { this.calc(d, a); if (this.stairs) { var g = this.invertedStairs ? new f(a.x, c.y) : new f(c.x, a.y); if (l(b, c, g, this.clickTolerance) || l(b, g, a, this.clickTolerance)) return d } else if (l(b, c, a, this.clickTolerance)) return d; c.x = a.x; c.y = a.y } if (this.pointer.visible) for (c = new n, a = this.pointer, d = e - 1; 0 <= d; d--)if (!this.isNull(d) && (this.calc(d, c), this.getSize(d), c.x -= .5 * a.width, c.width = a.width, c.y -= .5 * a.height, c.height = a.height, c.contains(b))) return d; return -1
        }; Tee.CustomSeries.prototype.horizMargins = function (b) {
          var c =
            this.pointer, a = c.format.stroke; c.visible && c.inflateMargins && (b.x = b.y = ("" !== a.fill ? a.size : 0) + 1 + .5 * c.width)
        }; Tee.CustomSeries.prototype.vertMargins = function (b) { var c = this.pointer, a = c.format.stroke; c.visible && c.inflateMargins && (b.x = b.y = ("" !== a.fill ? a.size : 0) + 1 + .5 * c.height) }; Tee.CustomSeries.prototype.getSize = function () { }; Tee.Line = function (b, c) {
          Tee.CustomSeries.call(this, b, c); this.drawLine = !0; this.treatNulls = "dontPaint"; this.colorEachLine = "no"; var a = this.format; a.shadow.visible = !0; a.shadow.blur = 10; a.lineCap =
            "round"; this.doDrawLine = function (b) {
              var d = new f, c = this.data.values.length, e, m = 0, w = c, k = this.notmandatory; this.smooth || this.data.x || (m = Math.max(0, (k.minimum | 0) - 1), w = Math.min(c, (k.maximum | 0) + 2)); k = this.chart.aspect.view3d; var p = "yes" == this.colorEachLine || 1 == this.colorEachLine; a.fill = this.getFill(0, a); p || "" !== a.fill || (a.fill = this.format.fill); b.beginPath(); if (0 < this.smooth && "undefined" !== typeof Tee.drawSpline) {
                var u = Array(2 * c); for (e = 0; e < c; e++)this.calc(e, d), u[2 * e] = d.x, u[2 * e + 1] = d.y; b.spline ? b.spline(u) :
                  Tee.drawSpline(b, u, this.smooth, !0)
              } else {
                c = "skip" !== this.treatNulls; var l = a.gradient, n = a.stroke.fill, q = n; !p && l.visible && l.setEndColor(a.stroke.fill); e = a.stroke; e.prepare(e.fill); for (e = m; e < w; e++)if (this.isNull(e)) c && (m = -1); else {
                  this.calc(e, d); p ? (p && e != m && b.beginPath(), n = this.getFill(e, a), n != q && (l.visible ? l.setEndColor(n) : a.fill = n, q = n), e == m || -1 === m ? (b.moveTo(d.x, d.y), m = 0) : (this.stairs ? this.invertedStairs ? (b.moveTo(u, z), b.lineTo(d.x, z)) : (b.moveTo(u, z), b.lineTo(u, d.y)) : b.moveTo(u, z), b.lineTo(d.x, d.y)),
                    b.strokeStyle = n, b.stroke()) : e == m || -1 === m ? (b.moveTo(d.x, d.y), m = 0) : (this.stairs && (this.invertedStairs ? b.lineTo(d.x, z) : b.lineTo(u, d.y)), b.lineTo(d.x, d.y)); u = d.x; var z = d.y; p && e != m && b.closePath()
                }
              } u = a.stroke; this.chart.isChrome && a.shadow.visible && (u.size = Math.max(1.1, u.size)); b.z = a.z; b.depth = a.depth; d = u.fill; "" === d && (d = a.fill); u.prepare(d); a.shadow.prepare(b); k && (b.fillStyle = a.fill, b.fill()); p || "" !== d && b.stroke()
            }; this.draw = function () {
              0 < this.data.values.length && (this.isStacked = "no" != this.stacked, this.isStack100 =
                "100" == this.stacked, this.drawLine && this.doDrawLine(this.chart.ctx), this.pointer.visible && this.drawPointers())
            }
        }; Tee.Line.prototype = new Tee.CustomSeries; Tee.PointXY = function (b, c) { Tee.Line.call(this, b, c); this.hover.enabled = !0; this.pointer.visible = !0; this.drawLine = !1 }; Tee.PointXY.prototype = new Tee.Line; Tee.Series.prototype.cellRect = function (b, c, a) {
          var e = { total: 0, index: -1 }; b.setFrom(this.chart.chartRect); this.chart.series.visibleCount(this, a, e); if (c && 1 < e.total) {
            c = Math.round(Math.sqrt(e.total)); a = Math.round(e.total /
              c); if (b.width > b.height) { var d = c; c = a; a = d } b.width /= c; b.x += e.index % c * 1.03 * b.width; b.height /= a; b.y += 1.03 * (e.index / c | 0) * b.height; b.width *= .94; b.height *= .94
          } return b
        }; Tee.Pie = function (b, c) {
          function a(a, b) { b.x = k.x + Math.cos(a) * w; b.y = k.y + Math.sin(a) * w } Tee.Series.call(this, b, c); this.marks.style = "percent"; this.rotation = this.donut = 0; this.colorEach = "yes"; this.continuous = this.useAxes = !1; this.angleWidth = 360; this.maxRadius = 100; var e = this.format; e.stroke.fill = "black"; e.shadow.visible = !0; e.gradient.visible = !0; e.gradient.direction =
            "radial"; e.gradient.colors = ["white", "white", "white"]; this.hover.enabled = !0; this.sort = "values"; this.orderAscending = !1; this.explode = null; this.marks.visible = !0; this.concentric = !1; this.clockwise = !0; this.getValue = function (a) { return this.data.values[a] }; this.calcCenter = function (a, b, d, c) { this.explode && (a = this.explode[a]) && (a = b * a * .01, c.x += a * Math.cos(d), c.y += a * Math.sin(d)) }; this.clicked = function (a) {
              var b = this.chart.ctx, d = this.data.values.length, c; if (b.isPointInPath) for (l = u = Math.PI * this.rotation / 180, c = 0; c <
                d; c++) { var g = p ? p[c] : c; if (!this.isNull(g) && (this.slice(b, g), b.isPointInPath(a.x, a.y))) return g } return -1
            }; var d, g, h, m, w, k = { x: 0, y: 0 }, p, u, l, q; this.getCenter = function (a) { a.x = k.x; a.y = k.y; return m }; this.slice = function (b, c) {
              var p = new f, n = Math.abs(this.data.values[c]) / d * Math.PI * 2 / (360 / this.angleWidth); l += this.clockwise ? n : -n; k.x = g; k.y = h; this.calcCenter(c, m, .5 * (u + l), k); 0 === this.donut ? (p.x = k.x, p.y = k.y) : a(u, p); this.chart.__webgl ? (a(2 * Math.PI - u, p), b.slice(p, k, m, u, l, w, e.tube, e.beveled)) : (b.beginPath(), b.moveTo(p.x,
                p.y), b.arc(k.x, k.y, m, u, l, !this.clockwise), 0 !== this.donut && (a(l, p), b.lineTo(p.x, p.y), b.arc(k.x, k.y, w, l, u, this.clockwise)), b.closePath()); c == this.over && (q = u); u = l
            }; this.fill = function (a) { return this.getFillStyle(new Tee.Rectangle(k.x - m, k.y - m, 2 * m, 2 * m), this.getFill(a)) }; this.slices = function (a) {
              var b = this.chart.ctx, d = this.data.values.length, c; l = u = Math.PI * this.rotation / 180; b.z = .5; b.depth = 1; for (c = 0; c < d; c++) {
                var g = p ? p[c] : c; if (this.onbeforedrawPoint) this.onbeforedrawPoint(g); this.isNull(g) || (this.slice(b, g),
                  a ? e.shadow.prepare(b) : b.fillStyle = this.fill(g), b.fill(), a || (g = e.stroke, "" !== g.fill && (g.prepare(), b.stroke())))
              }
            }; var r = new n; this.draw = function () {
              if (0 < this.data.values.length) {
                var a = 0, b = this.marks; e.shadow.visible && (a += 2 * e.shadow.height); b.visible && (b.format.font.prepare(), a += b.format.textHeight("Wj") + .5 * b.arrow.length); this.cellRect(r, !this.concentric, Tee.Pie); g = r.x + .5 * r.width; h = r.y + .5 * r.height; m = .5 * r.width; a = .5 * (r.height - 2 * a); 0 > a && (a = 0); a < m && (m = a); w = m * this.donut * .01; m /= 100 / this.maxRadius; d = S(this.data.values);
                p = this.doSort(this.sort, this.orderAscending); this.chart.__webgl || this.slices(!0); this.slices(!1); this.hover.enabled && -1 != this.over && (a = this.hover, "" !== a.stroke.fill && (l = u = q, b = this.chart.ctx, this.slice(b, this.over), b.fillStyle = this.fill(this.over), a.draw(b, null, r)))
              }
            }; this.drawMarks = function () {
              var a = Math.PI * this.rotation / 180, b = a, c = this.data.values, e = c.length, f; this.marks.format.z = .5; for (f = 0; f < e; f += this.marks.drawEvery) {
                var w = p ? p[f] : f; if (!this.isNull(w)) {
                  var l = Math.abs(c[w]) / d * Math.PI * 2; a += this.clockwise ?
                    l : -l; b = .5 * (b + a); k.x = g; k.y = h; this.calcCenter(f, m, b, k); this.marks.drawPolar(k, m, b, w); b = a
                }
              }
            }
        }; Tee.Pie.prototype = new Tee.Series; Tee.Area = function (b, c) {
          Tee.CustomSeries.call(this, b, c); this.useOrigin = !1; this.origin = 0; this.closeArea = this.drawLine = !0; var a = this.format; a.shadow.visible = !0; a.lineCap = "round"; a.stroke.fill = "black"; a.fill = ""; a.beveled = !0; a.depth = 1; a.z = .5; var e = new n; this.draw = function () {
            var b = this.data.values.length; if (0 < b) {
              var c = this.mandatoryAxis, h = this.notmandatory, m = this.yMandatory; var w =
                this.useOrigin ? c.calc(this.origin) : m && c.inverted || !m && !c.inverted ? c.startPos : c.endPos; this.isStacked = "no" != this.stacked; this.isStack100 = "100" == this.stacked; var k = new f, p; c = this.chart.ctx; var l = this.isStacked, n = 0, q = b; this.smooth || this.data.x || (n = Math.max(0, (h.minimum | 0) - 1), q = Math.min(b, (h.maximum | 0) + 2)); c.depth = a.depth; c.z = a.z; c.beginPath(); if (0 < this.smooth && "undefined" !== typeof Tee.drawSpline) {
                  var r = Array(2 * b); for (p = 0; p < b; p++)this.calc(p, k), r[2 * p] = k.x, r[2 * p + 1] = k.y; h = m ? r[0] : r[1]; c.spline ? c.spline(r,
                    !0) : Tee.drawSpline(c, r, this.smooth, !0); if (l) { var z = 0; for (p = b - 1; 0 <= p; p--)this.calcStack(p, k, 0), r[z++] = k.x, r[z++] = k.y; c.lineTo(r[0], r[1]); c.spline ? c.spline(r, !0) : Tee.drawSpline(c, r, this.smooth, !1) }
                } else { this.calc(n, k); c.moveTo(k.x, k.y); h = m ? k.x : k.y; var t = m ? k.y : k.x; if (this.stairs) for (p = n + 1; p < q; p++)this.calc(p, k), c.lineTo(k.x, t), c.lineTo(k.x, k.y), t = m ? k.y : k.x; else for (p = n + 1; p < q; p++)this.calc(p, k), c.lineTo(k.x, k.y) } if (l) {
                  if (0 === this.smooth) for (p = q - 1; p >= n; p--)this.calcStack(p, k, 0), this.stairs ? (c.lineTo(k.x,
                    t), c.lineTo(k.x, k.y), t = m ? k.y : k.x) : c.lineTo(k.x, k.y)
                } else if (m) if (this.closeArea) c.lineTo(k.x, w), c.lineTo(h, w); else var v = k; else c.lineTo(w, k.y), c.lineTo(w, h); if (!this.closeArea) { var x = a.stroke; x.prepare(x.fill); c.stroke(); c.lineTo(v.x, w); c.lineTo(h, w); x = a.stroke.fill; a.stroke.fill = "#00FF0000" } c.closePath(); v = a.gradient; v.visible && (v.colors[v.colors.length - 1] = a.fill); this.bounds(e); c.__webgl && (c.beveled = a.beveled); a.draw(c, null, e); this.closeArea || (a.stroke.fill = x); this.pointer.visible && this.drawPointers()
            }
          };
          this.minYValue = function () { var a = this.yMandatory ? Tee.Series.prototype.minYValue.call(this) : Tee.Series.prototype.minXValue.call(this); return this.yMandatory ? this.useOrigin ? Math.min(a, this.origin) : a : a }; this.minXValue = function () { var a = this.yMandatory ? Tee.Series.prototype.minXValue.call(this) : Tee.Series.prototype.minYValue.call(this); return this.yMandatory ? a : this.useOrigin ? Math.min(a, this.origin) : a }; this.maxYValue = function () {
            var a = this.yMandatory ? this.stackMaxValue() : Tee.Series.prototype.maxXValue.call(this);
            return this.yMandatory ? this.useOrigin ? Math.max(a, this.origin) : a : a
          }; this.maxXValue = function () { var a = this.yMandatory ? Tee.Series.prototype.maxXValue.call(this) : this.stackMaxValue(); return this.yMandatory ? a : this.useOrigin ? Math.max(a, this.origin) : a }; this.vertMargins = function (b) { this.yMandatory && "" !== a.stroke.fill && (b.y += a.stroke.size + 2) }; this.horizMargins = function (b) { this.yMandatory || "" === a.stroke.fill || (b.y += a.stroke.size + 2) }
        }; Tee.Area.prototype = new Tee.CustomSeries; Tee.HighLowBar = function (b, c) {
          Tee.CustomSeries.call(this,
            b, c); this.useOrigin = !1; this.origin = 0; this.closeArea = this.drawLine = !0; var a = this.format; a.shadow.visible = !0; a.lineCap = "round"; a.stroke.fill = "black"; a.fill = ""; a.beveled = !0; b = this.maxmin = new Tee.Format(a.chart); b.shadow.visible = !1; b.lineCap = "round"; b.stroke.fill = "red"; b.fill = ""; b.beveled = !0; a.depth = 1; a.z = .5; this.data.lows = []; this.addRandom = function (a) {
              var b = this.data; a || (a = 5); b.values.length = a; b.x = null; b.lows = []; b.lows.length = a; if (0 < a) for (var c = 0; c < a; c++)b.values[c] = 1E3 * Math.random(), b.lows[c] = 50 + 150 *
                Math.random()
            }; this.calcLows = function (a, b) { this.isStacked ? this.calcStack(a, b, this.data.lows[a]) : Tee.Series.prototype.calc.call(this, a, b) }; var e = new n; this.draw = function () {
              var b = this.data.values.length; if (0 < b) {
                var c = this.mandatoryAxis, h = this.notmandatory, m = this.yMandatory; var w = this.useOrigin ? c.calc(this.origin) : m && c.inverted || !m && !c.inverted ? c.startPos : c.endPos; this.isStacked = "no" != this.stacked; this.isStack100 = "100" == this.stacked; var k = new f, p; c = this.chart.ctx; var l = this.isStacked, n = 0, r = b; this.smooth ||
                  this.data.x || (n = Math.max(0, (h.minimum | 0) - 1), r = Math.min(b, (h.maximum | 0) + 2)); c.depth = a.depth; c.z = a.z; var q = []; h = []; var z = 0; c.beginPath(); if (0 < this.smooth && "undefined" !== typeof Tee.drawSpline) { z = Array(2 * b); for (p = 0; p < b; p++)this.calc(p, k), z[2 * p] = k.x, z[2 * p + 1] = k.y; var t = m ? z[0] : z[1]; c.spline ? c.spline(z, !0) : Tee.drawSpline(c, z, this.smooth, !0); if (l) { var v = 0; for (p = b - 1; 0 <= p; p--)this.calcStack(p, k, 0), z[v++] = k.x, z[v++] = k.y; c.lineTo(z[0], z[1]); c.spline ? c.spline(z, !0) : Tee.drawSpline(c, z, this.smooth, !1) } } else {
                    this.calc(n,
                      k); c.moveTo(k.x, k.y); t = m ? k.x : k.y; var x = m ? k.y : k.x; if (this.stairs) for (p = n + 1; p < r; p++)this.calc(p, k), c.lineTo(k.x, x), c.lineTo(k.x, k.y), x = m ? k.y : k.x; else if (this.rects) for (p = n; p < r; p++)this.calc(p, k), b = this.mandatoryAxis.calc(this.data.lows[p]), v = this.notmandatory.calc(this.data.x[p + 1]), c.rect(k.x, k.y, v - k.x, b - k.y), x = m ? k.y : k.x, q[z] = new f(k.x, k.y), h[z] = new f(k.x, b), z++, q[z] = new f(v, k.y), h[z] = new f(v, b), z++; else for (p = n + 1; p < r; p++)this.calc(p, k), c.lineTo(k.x, k.y)
                  } if (l) {
                    if (0 === this.smooth) for (p = r - 1; p >= n; p--)this.calcStack(p,
                      k, 0), this.stairs ? (c.lineTo(k.x, x), c.lineTo(k.x, k.y), x = m ? k.y : k.x) : c.lineTo(k.x, k.y)
                  } else m ? this.closeArea && (c.lineTo(k.x, w), c.lineTo(t, w)) : (c.lineTo(w, k.y), c.lineTo(w, t)); c.closePath(); m = a.gradient; m.visible && (m.colors[m.colors.length - 1] = a.fill); this.bounds(e); c.__webgl && (c.beveled = a.beveled); a.draw(c, null, e); c.beginPath(); for (p = 0; p < q.length; p++)c.lineTo(q[p].x, q[p].y); a.stroke.prepare(a.fill, c); c.stroke(); m = a.stroke.fill; x = a.fill; w = a.stroke.size; a.stroke.fill = "white"; a.stroke.size = .75; a.fill = "rgba(123,0,0,0.0)";
                a.draw(c, null, e); a.stroke.fill = m; a.fill = x; a.stroke.size = w; c.beginPath(); for (p = 0; p < h.length; p++)c.lineTo(h[p].x, h[p].y); m = a.stroke.fill; x = a.fill; w = a.stroke.size; a.stroke.fill = "white"; a.stroke.size = .75; a.fill = "rgba(123,0,0,0.0)"; a.draw(c, null, e); a.stroke.fill = m; a.fill = x; a.stroke.size = w; a.stroke.prepare(a.fill, c); c.stroke(); this.pointer.visible && this.drawPointers()
              }
            }; this.minYValue = function () {
              var a = this.yMandatory ? Tee.Series.prototype.minYValue.call(this) : Tee.Series.prototype.minXValue.call(this); return this.yMandatory ?
                this.useOrigin ? Math.min(a, this.origin) : a : a
            }; this.minXValue = function () { var a = this.yMandatory ? Tee.Series.prototype.minXValue.call(this) : Tee.Series.prototype.minYValue.call(this); return this.yMandatory ? a : this.useOrigin ? Math.min(a, this.origin) : a }; this.maxYValue = function () { var a = this.yMandatory ? this.stackMaxValue() : Tee.Series.prototype.maxXValue.call(this); return this.yMandatory ? this.useOrigin ? Math.max(a, this.origin) : a : a }; this.maxXValue = function () {
              var a = this.yMandatory ? Tee.Series.prototype.maxXValue.call(this) :
                this.stackMaxValue(); return this.yMandatory ? a : this.useOrigin ? Math.max(a, this.origin) : a
            }; this.vertMargins = function (b) { this.yMandatory && "" !== a.stroke.fill && (b.y += a.stroke.size + 2) }; this.horizMargins = function (b) { this.yMandatory || "" === a.stroke.fill || (b.y += a.stroke.size + 2) }
        }; Tee.HighLowBar.prototype = new Tee.CustomSeries; Tee.HorizArea = function (b, c) { Tee.Area.call(this, b, c); this.yMandatory = !1 }; Tee.HorizArea.prototype = new Tee.Area; Tee.Donut = function (b, c) {
          var a = 100, e = []; Tee.Pie.call(this, b, c); this.donut = 50;
          this.refreshWidth = function () { if (this.concentric) { e = this.chart.series.items; for (var b = 0, c = 0, h = 0; h < e.length; h++)e[h].visible && b++; if (100 == a) for (h = 0; h < e.length; h++)e[h].donut < a && (a = e[h].donut); for (h = 0; h < e.length; h++)e[h].visible && (e[h].donut = a + (100 - a) / b * c, c++) } }
        }; Tee.Donut.prototype = new Tee.Pie; Tee.ActivityGauge = function (b, c) {
          function a(a, b, c, d, e) {
            a = new Tee.Donut([a], [b]); a.concentric = !0; a.marks.visible = !1; a.format.shadow.visible = !1; a.format.gradient.visible = !1; a.donut = c; a.maxRadius = d; a.angleWidth = e;
            a.rotation = 270; a.visible = !1; return a
          } function e(a, b, c) {
            var d = a.format, e = b.format; d.fill = b.chart.palette.colors[b.donutArray.length - 1 - c % b.chart.palette.colors.length]; d.font.baseLine = e.font.baseLine; d.font.fill = e.font.fill; d.font.style = e.font.style; d.font.textAlign = e.font.textAlign; d.gradient.colors = [e.gradient.colors[0][c]]; d.gradient.direction = e.gradient.direction; d.gradient.offset.x = e.gradient.offset.x; d.gradient.offset.y = e.gradient.offset.y; d.gradient.stops = e.gradient.stops; d.gradient.visible =
              e.gradient.visible; d.round.x = e.round.x; d.round.y = e.round.y; d.shadow.blur = e.shadow.blur; d.shadow.color = e.shadow.color; d.shadow.height = e.shadow.height; d.shadow.visible = e.shadow.visible; d.shadow.width = e.shadow.width; d.stroke.fill = e.stroke.fill.slice(0); d.stroke.cap = e.stroke.cap; d.stroke.dash = e.stroke.dash; d.stroke.join = e.stroke.join; d.stroke.size = e.stroke.size; d.transparency = e.transparency; a.fill = function (a) { return d.gradient.visible ? d.gradient.colors : d.fill }
          } Tee.Donut.call(this, [], []); this.data = {
            values: null !=
              b ? b : [], labels: null != c ? c : []
          }; this.donutArray = []; this.maxDrawWidth = this.maxWidth = 230; this.addRandom = function (a) { for (var b = 0; b < a; b++)this.add(Math.floor(20 * Math.random() + 10), String.fromCharCode(65 + b)); return this }; this.maxValue = function () { for (var a = this.data.values[0], b = 0; b < this.data.values.length; b++)a < this.data.values[b] && (a = this.data.values[b]); return a }; if (null != b) for (var d = 0; d < b.length; d++) {
            var g = 40 + 60 * d / b.length, h = 40 + 60 * (d + 1) / b.length, f = Math.abs(this.maxDrawWidth * b[b.length - 1 - d] / this.maxValue());
            this.donutArray.push(a(b[b.length - 1 - d], c[b.length - 1 - d], g, h, f))
          } this.clicked = function (a) { for (var b = -1, c = 0; c < this.donutArray.length && -1 == b;)-1 == b && -1 != this.donutArray[c].clicked(a) && (b = this.donutArray.length - c - 1), c++; return b }; this.recalcWidth = function () {
            for (var a = 0; a < this.donutArray.length; a++)this.donutArray[a].donut = 40 + 60 * a / this.data.values.length, this.donutArray[a].maxRadius = 40 + 60 * (a + 1) / this.data.values.length, this.donutArray[a].angleWidth = Math.abs(this.maxDrawWidth * this.data.values[this.data.values.length -
              1 - a] / this.maxValue())
          }; this.minValue = function () { for (var a = this.data.values[0], b = 0; b < this.data.values.length; b++)a > this.data.values[b] && (a = this.data.values[b]); return a }; this.add = function (b, c) { var d = a(b, c, 0, 0, 0); this.donutArray.push(d); this.data.values.push(b); this.data.labels.push(c); null != this.chart && this.linkDonutsToChart() }; this.draw = function () {
            for (var a = 0; a < this.donutArray.length; a++) {
              var b = this.donutArray[a].chart.ctx; e(this.donutArray[a], this, a); b.fillStyle = this.donutArray[a].getFillStyle(this.donutArray[a].chart.chartRect,
                this.donutArray[a].format.fill); this.recalcWidth(); this.donutArray[a].draw()
            }
          }; this.linkDonutsToChart = function () { for (var a = 0; a < this.donutArray.length; a++)this.donutArray[a].setChart(this.donutArray[a], this.chart) }
        }; Tee.ActivityGauge.prototype = new Tee.Donut; Tee.Gantt = function (b, c) {
          Tee.Series.call(this, b, c); this.yMandatory = !1; this.dateFormat = "mediumDate"; this.hover.enabled = !0; this.hover.round.x = this.hover.round.y = 8; this.nextTasks = []; this.nextTasksStrokeStyle = "Black"; this.nextTasksPosition = "back"; this.colorEach =
            "yes"; this.data.start = this.data.values; this.data.x = []; this.data.end = []; this.height = 70; this.margin = new f(6, 6); this.continuous = !1; var a = this.format; a.shadow.visible = !0; a.round.x = a.round.y = 8; a.stroke.fill = "black"; a.gradient.visible = !0; var e = new n, d; this.addNextTask = function (a, b) { this.nextTasks.push([a, b]) }; this.addRandom = function (a) {
              a || (a = 5); var b = this.data; b.x.length = a; b.start.length = a; b.end.length = a; if (0 < a) for (var c, d, e = 0; e < a; e++)b.x[e] = e, c = 12 * Math.random() | 0, d = 10 * Math.random() | 0, b.start[e] = new Date(2012,
                c, d), 5 > c && (c = 5 + (7 * Math.random() | 0)), b.end[e] = new Date(2012, c, d + 10 * Math.random())
            }; this.bounds = function (a, b) { if (this.isNull(a)) return !1; this.calc(a, b); b.y -= .5 * d; b.width = this.data.end ? this.mandatoryAxis.calcSize(this.data.end[a] - this.data.start[a]) : 0; b.height = d; return !0 }; this.add = function (a, b, c, d) { var e = this.data; e.labels.push(b); e.x.push(a); e.start.push(c); e.end.push(d) }; this.clicked = function (a) { var b = this.data.values.length, c; for (c = 0; c < b; c++)if (this.bounds(c, e) && e.contains(a)) return c; return -1 }; this.draw =
              function () {
                function b(a) {
                  for (var b = 0; b < a.nextTasks.length; b++)p.beginPath(), p.strokeStyle = a.nextTasksStrokeStyle, p.lineWidth = 2, p.fillStyle = "000000", u.push(Math.round(a.chart.axes.bottom.calc(a.data.end[a.nextTasks[b][0]]))), u.push(Math.round(a.chart.axes.left.calc(a.data.x[a.nextTasks[b][0]]))), u.push(Math.round(a.chart.axes.bottom.calc(a.data.start[a.nextTasks[b][1]]))), u.push(Math.round(a.chart.axes.left.calc(a.data.x[a.nextTasks[b][1]]))), p.moveTo(u[0], u[1]), p.lineTo(u[0] - (u[0] - u[2]) / 2, u[1]), p.lineTo(u[0] -
                    (u[0] - u[2]) / 2, u[3]), p.lineTo(u[2], u[3]), p.stroke(), u = []
                } var c = this.data.values.length, f, l = this.hover, k = l.fill, p = this.chart.ctx, u = []; "back" == this.nextTasksPosition && b(this); d = this.notmandatory.calcSize(.01 * this.height); for (f = 0; f < c; f++)if (this.bounds(f, e)) { var n = l.enabled && this.over === f ? l : a; n.fill = this.getFillStyle(e, this.getFill(f, n)); n.rectangle(e) } l.fill = k; "front" == this.nextTasksPosition && b(this)
              }; this.horizMargins = function (a) { a.x = this.margin.x; a.y = this.margin.y }; this.minYValue = function () {
                return this.parent.minXValue.call(this) -
                  .5
              }; this.maxYValue = function () { return this.parent.maxXValue.call(this) + .5 }; this.minXValue = function () { return K(this.data.start) }; this.maxXValue = function () { return N(this.data.end) }
        }; Tee.Gantt.prototype = new Tee.Series; Tee.Gantt.prototype.parent = Tee.Series.prototype; Tee.Bubble = function (b, c) {
          Tee.PointXY.call(this, b, c); b = this.pointer; b.colorEach = !0; b.style = "sphere"; b.format.gradient.visible = !0; b.format.gradient.direction = "radial"; this.inflate = !0; this.data.radius = []; this.addRandom = function (a) {
            var b = this.data;
            a || (a = 5); b.values.length = a; b.x = null; b.radius = []; b.radius.length = a; if (0 < a) for (var c = 0; c < a; c++)b.values[c] = 1E3 * Math.random(), b.radius[c] = 50 + 150 * Math.random()
          }
        }; Tee.Bubble.prototype.initZ = function () { this.parent.prototype.initZ.call(this); this.format.marks.z = this.format.z - 1 }; Tee.Bubble.prototype = new Tee.PointXY; Tee.Bubble.prototype.getSize = function (b) { b = this.data.radius ? this._vertAxis.calcSize(this.data.radius[b]) : 0; this.pointer.width = b; this.pointer.height = b }; Tee.Bubble.prototype.horizMargins = function (b) {
          this.calcWidth =
          function (b) { this.getSize(b); b = 1 + .5 * this.pointer.width; var a = this.pointer.format.stroke; "" !== a.fill && (b += a.size); return b }; this.pointer.visible && this.inflate && (b.x = this.calcWidth(0), b.y = this.calcWidth(this.count() - 1))
        }; Tee.Bubble.prototype.vertMargins = function (b) {
          this.calcHeight = function (a) { this.getSize(a); a = 1 + .5 * this.pointer.height; var b = this.pointer.format.stroke; "" !== b.fill && (a += b.size); return a }; if (this.pointer.visible && this.inflate) {
            var c, a = 0, e = 0, d = this.count(), g = { x: 0, y: 0 }; if (0 < d) {
              this.calc(0,
                g); var h = c = g.y; for (var f = 1; f < d; f++)this.calc(f, g), g.y < h ? a = f : g.y > c && (e = f); b.x = this.calcHeight(e); b.y = this.calcHeight(a)
            }
          }
        }; Tee.Volume = function (b, c) { Tee.Bar.call(this, b, c); this.barStyle = "line"; this.colorEach = this.marks.visible = !1; b = this.format; b.shadow.visible = !1; b.gradient.visible = !1; b.stroke.fill = "" }; Tee.Volume.prototype = new Tee.Bar; Tee.Candle = function (b, c) {
          Tee.PointXY.call(this, b, c); var a = this.format; a.z = .5; a.depth = .1; this.pointer.width = 7; this.pointer.format.stroke.visible = !1; var e = this.higher = this.pointer.format;
          e.fill = "green"; var d = this.lower = new Tee.Format(this.chart); d.fill = "red"; d.stroke.visible = !1; this.style = "candle"; this.setChart = function (a, b) { var c = Tee.PointXY.prototype.setChart; c(a, b); d.setChart(b) }; this.draw = function () {
            var b = this.data, c = b.values.length, m, l = new f, k = this.pointer, p = .5 * k.width, u = this.mandatoryAxis, n = this.chart.ctx; n.z = a.z + .5 * a.depth; for (m = 0; m < c; m++)if (!this.isNull(m)) {
              this.calc(m, l); var r = l.x; var q = u.calc(b.open[m]); var z = u.calc(b.high[m]); var t = u.calc(b.low[m]); if (l.y > q) {
                var v = q; var x =
                  l.y - q; var A = d
              } else v = l.y, x = q - v, A = e; "bar" == this.style ? (n.beginPath(), n.moveTo(r, z), n.lineTo(r, t), n.moveTo(r - p, q), n.lineTo(r, q), n.moveTo(r, l.y), n.lineTo(r + p, l.y), A.stroke.prepare(A.fill), n.stroke()) : (A.depth = p / 100, A.z = a.z + .5 * a.depth - .5 * A.depth, q = { x: r - p, y: v, width: k.width, height: x }, "cylinder" === this.pointer.style ? A.cylinder(q, 1, !0) : A.cube(q), A.draw(n, null, q), this.hover.enabled && this.over == m && this.hover.rectangle(r - p, v, k.width, x)); "openclose" != this.style && (z < v || t > v + x) && (n.z = a.z + .5 * a.depth, n.beginPath(),
                n.moveTo(r, v), n.lineTo(r, z), n.moveTo(r, v + x), n.lineTo(r, t), this.hover.enabled && this.over == m ? this.hover.stroke.prepare(A.fill) : A.stroke.prepare(A.fill), n.stroke())
            }
          }; this.minYValue = function () { return 0 < this.data.low.length ? K(this.data.low) : 0 }; this.maxYValue = function () { return 0 < this.data.high.length ? N(this.data.high) : 0 }; this.addRandom = function (a) {
            var b = this.data; a || (a = 10); b.values.length = a; b.close = b.values; b.open ? b.open.length = a : b.open = Array(a); b.high ? b.high.length = a : b.high = Array(a); b.low ? b.low.length =
              a : b.low = Array(a); if (0 < a) for (var c = 25 + 100 * Math.random(), d, e = 0; e < a; e++)d = b.open[e] = c, c = b.close[e] = c + 25 * Math.random() - 12.5, b.high[e] = Math.max(d, c) + 15 * Math.random(), b.low[e] = Math.min(d, c) - 15 * Math.random()
          }
        }; Tee.Candle.prototype = new Tee.PointXY; Tee.Candle.prototype.clicked = function (b) {
          var c = this.pointer.width, a = this.mandatoryAxis, e = this.notmandatory, d = this.data, g = d.values.length, h = new n, f; h.width = c; for (f = 0; f < g; f++)if (!this.isNull(f)) {
            h.x = e.calc(f) - .5 * c; var l = a.calc(d.open[f]); var k = a.calc(d.close[f]);
            h.y = l > k ? k : l; h.height = Math.abs(l - k); if (h.contains(b)) return f
          } return -1
        }; Tee.Candle.prototype.vertMargins = function () { }; Tee.Polar = function (b, c) {
          var a; function e(a, b, c) { if (a.visible) { var d = a.axisPos; a.axisPos = b; a.startPos = c - k; a.endPos = c + k; b = a.z; a.z = 1 - .5 * a.chart.walls.back.size - .1; a.drawAxis(); a.axisPos = d; a.z = b } } function d(b, c) { var d = b.width, e = b.height; a = b.x + .5 * d; l = b.y + .5 * e; k = .5 * Math.min(d, e); c.visible && c.labels.visible && (b = c.labels.format.textHeight("W"), k -= b) } Tee.CustomSeries.call(this, b, c); this.pointer.visible =
            !0; this.rotation = 0; this.useOrigin = this.continuous = this._paintWalls = this._paintAxes = !1; this.origin = 0; this.clockwise = !0; var g = { x: 0, y: 0 }, h, f = this.format; var l = a = 0; var k, p = Math.PI / 180; f.stroke.fill = "black"; f.z = .5; this.calc = function (b, c) { var d = this.data, e = d.values[b], g = this.mandatoryAxis; b = d.x ? d.x[b] : 360 * b / d.values.length; b = this.clockwise ? p * (this.rotation + b) : -(p * (this.rotation + b)); e = (g.inverted ? g.maximum - e : e - g.minimum) * k / (g.maximum - g.minimum); c.x = a + Math.cos(b) * e; c.y = l + Math.sin(b) * e }; this.beforeDraw = function () {
              d(this.chart.chartRect,
                this.notmandatory); var b = this.chart.walls; if (b.visible) { var c = b.back; if (c.visible) { var g = c.format; c = g.z; g.z = 1; g.ellipse(a, l, 2 * k, 2 * k); g.z = c } } if (this.chart.axes.visible) {
                  g = this.notmandatory; var h = g.grid.format.stroke, f = this.mandatoryAxis, m, n = this.chart.ctx, w = g.rotation || 0; if (g.visible && g.labels.visible) {
                    var r = { x: 0, y: 0, width: 0, height: 0 }, q = g.labels.format, t = q.textHeight("W"), v = k + .8 * t; var x = Math.max(10, 90 / (k / t | 0)); c = q.z; q.z = .6; for (m = 0; 360 > m;) {
                      var H = this.clockwise ? p * (m + w) : -(p * (m + w)); r.x = a + Math.cos(H) * v;
                      r.y = l + Math.sin(H) * v - .5 * t; q.drawText(r, "" + m); m += x
                    } q.z = c
                  } if (g.visible && g.grid.visible) { c = g.increment || 10; n.z = 1 - .5 * b.back.size - .1; n.beginPath(); for (m = 0; 360 > m;)H = p * (m + w), n.moveTo(a, l), n.lineTo(a + Math.cos(H) * k, l + Math.sin(H) * k), m += c; h.prepare(h.fill, n); n.stroke() } if (f.visible && f.grid.visible) { m = f.roundMin(); h = f.grid.format; H = 2 * k / (f.maximum - f.minimum); c = h.z; h.z = 1 - .5 * b.back.size - .1; for (n.z = h.z; m < f.maximum;)b = (m - f.minimum) * H, h.ellipse(a, l, b, b), m += f.increm; h.z = c } e(f, a, l); e(g, l, a)
                }
            }; this.draw = function () {
              d(this.chart.chartRect,
                this.notmandatory); var b = this.data.values.length, c; h = []; for (c = 0; c < b; c++)this.isNull(c) || (this.calc(c, g), h.push({ x: g.x, y: g.y })); b = h.length; if (0 < b) { if ("bar" == this.style) { var e = this.chart.ctx; e.beginPath(); for (c = 0; c < b; c++)e.moveTo(a, l), e.lineTo(h[c].x, h[c].y); this.format.stroke.prepare(this.format.fill, e); e.stroke() } else f.polygon(h); this.pointer.visible && this.drawPointers() }
            }; this.minYValue = function () { var a = Tee.Series.prototype.minYValue.call(this); return this.useOrigin ? Math.min(a, this.origin) : a }; this.maxYValue =
              function () { var a = this.stackMaxValue(); return this.useOrigin ? Math.max(a, this.origin) : a }
        }; Tee.Polar.prototype = new Tee.CustomSeries; "function" !== typeof String.prototype.trim && (String.prototype.trim = function () { return this.replace(/^\s+|\s+$/g, "") }); Tee.PaletteSeries = function (b, c) {
          Tee.Series.call(this, b, c); var a = this.palette; a.colors = Tee.RainbowPalette(); var e, d; this._range = this._min = 0; this.prepareColors = function () {
            var b = a.colors; d = b.length; e = Array(d); for (var c = 0; c < d; c++) {
              var f = b[c].trim(); 7 == f.length ?
                e[c] = { r: parseInt(f.substr(1, 2), 16), g: parseInt(f.substr(3, 2), 16), b: parseInt(f.substr(5, 2), 16), a: 0 } : "rgb(" == f.substr(0, 4) && (f = f.slice(4, f.length - 1).split(","), e[c] = { r: f[0], g: f[1], b: f[2], a: f[3] || 0 })
            }
          }; this.getColor = function (b) { b = (b - this._min) / this._range * (d - 1) | 0; return e[a.inverted ? d - 1 - b : b] }; this.legendCount = function () { return this.palette.colors ? this.palette.colors.length : 0 }
        }; Tee.PaletteSeries.prototype = new Tee.Series; Tee.PaletteSeries.prototype.legendColor = function (b) {
          var c = this.palette, a = c.colors,
          e = c.inverted; this.chart.legend.inverted && (e = !e); return c.grayScale ? (b = 255 * b / a.length | 0, e && (b = 255 - b), "rgb(" + b + "," + b + "," + b + ")") : a ? a[e ? b : this.legendCount() - b - 1] : this.format.fill
        }; Tee.PaletteSeries.prototype.legendText = function (b) { b = -1 + this.legendCount() - b; return (this._min + b * this._range / (this.palette.colors.length - 1)).toFixed(this.decimals) }; Tee.DOMTip = function () {
          var b, c = 8, a, e = !1, d, g, h, m, l, k, p, n, r = 0, q, t, z, v, x, A = "undefined" !== typeof document && document.all ? !0 : !1, C; return {
            show: function (f, m, l, r, w) {
              w && (h =
                w, w.findPoint || (c = 0, e = !0)); q || (d = document.createElement("style"), a = document.createElement("style"), k = "", q = document.createElement("div"), b = document.createElement("div"), q.setAttribute("id", "teetip1"), b.setAttribute("id", "teetiparrow1"), q.className = "teetip", b.className = "teetiparrow", q.setAttribute("style", r), k = q.style.getPropertyValue("border-color"), p = q.style.getPropertyValue("background-color"), g = q.style.getPropertyValue("border-width"), n = q.style.getPropertyValue("border-radius"), n = n.substring(0,
                  n.length - 2), 0 == g.length ? g = 0 : (g = g.substring(0, g.length - 2), g *= 2), a.innerHTML = ".teetiparrow{width:0;height:0;border: " + c + "px solid;position: absolute;content: '';border-color: " + k + " transparent transparent transparent;bottom: -" + 2 * c + "px;left: 25px;}", d.innerHTML = ".teetiparrow:after{content: ' ';position: absolute;width: 0;height: 0;left: -" + (c - g / 2) + "px;bottom: " + (g - (c - 1)) + "px; border: " + (c - g / 2) + "px solid;border-color: " + p + " transparent transparent transparent;}", document.head.appendChild(a), document.head.appendChild(d),
                  document.body.appendChild(q), q.appendChild(b), t = q.style, t.opacity = 0, A && (t.filter = "alpha(opacity=0)")); x = l; t.display = "block"; t.position = "absolute"; q.innerHTML = b.outerHTML + f; t.width = m ? m + "px" : "auto"; !m && A && (t.width = q.offsetWidth); 300 < q.offsetWidth && (t.width = "300px"); C = q.offsetWidth; z = parseInt(q.offsetHeight, 10) + 3; q.timer && clearInterval(q.timer); q.timer = setInterval(function () { Tee.DOMTip.fade(1) }, 10); document.onmousemove = this.pos
            }, pos: function (b) {
              function r(a, b) {
                var c = h.pointer; v = new Tee.Animation(h, function (d) {
                  1 >
                  d && (h.chart.draw(), w(a, c.secondCircleRadius * d, c.fill, c.secondCircleOpacity, b), w(a, c.firstCircleRadius * d, c.fill, c.firstCircleOpacity, b))
                }); v.onstop = function () { h.chart.draw(); w(a, c.secondCircleRadius, c.fill, c.secondCircleOpacity, b); w(a, c.firstCircleRadius, c.fill, c.firstCircleOpacity, b) }; v.duration = c.animationDuration; v.animate()
              } function w(a, b, c, d, e) { e.strokeStyle = c; e.fillStyle = c; e.globalAlpha = d; e.lineWidth = b; e.beginPath(); e.ellipse(a.x, a.y, b / 2, b / 2, 0, 0, 7, !1); e.stroke() } function u() {
                if (b.target.chart) {
                  b.target.chart.draw();
                  var a = new f, c = h.pointer; var d = T ? Math.round(y.axes.left.fromPos(b.layerY)) : Math.round(y.axes.bottom.fromSizeCalcIndex(b.clientX - y.canvas.getBoundingClientRect().left - y.axes.bottom.startPos)); if (b.target == y.canvas) for (var e = 0; e < y.series.items.length; e++) {
                    var g = T ? Math.abs(y.series.items[e].data.values[d] - y.axes.bottom.fromPos(b.layerX)) : Math.abs(y.series.items[e].data.values[d] - y.axes.left.fromPos(b.layerY)); if (0 == e) { var k = g; y.series.items[e].calc(d, a); var p = y.series.items[e] } else g < k && (y.series.items[e].calc(d,
                      a), k = g, p = y.series.items[e])
                  } g = b.target.chart.ctx; l ? -1 != d && l != p && (l = p, c.animationVisible && r(a, g)) : l = p; -1 != d && !m || -1 == d ? m = d : -1 != d && m != d && (m = d, c.animationVisible && r(a, g)); w(a, c.secondCircleRadius, c.fill, c.secondCircleOpacity, g); w(a, c.firstCircleRadius, c.fill, c.firstCircleOpacity, g)
                }
              } if (h) {
                h.findPoint ? (c = 8, e = !1) : (c = 0, e = !0); if (x) var y = x.chart, U = y.chartRect, T = y.axes.bottom.firstSeries ? !y.axes.bottom.firstSeries.yMandatory : !1; if (y) {
                  y.draw(); if (y.series.items[0] instanceof Tee.Pie || e || !x) {
                    var E = document.documentElement,
                    D = A ? b.clientY + E.scrollTop : b.pageY; E = A ? b.clientX + E.scrollLeft : b.pageX - C / 2 - 10 - c; a.innerHTML = ".teetiparrow{width:0;height:0;border: " + c + "px solid;position: absolute;content: '';border-color: " + k + " " + k + " transparent transparent;bottom: -" + 2 * c + "px;left: " + (q.getBoundingClientRect().width - 2 * c - g / 2) + "px;}"; d.innerHTML = ".teetiparrow:after{content: ' ';position: absolute;width: 0;height: 0;left: -" + (c - g / 2) + "px;bottom: " + (g - (c - 1)) + "px; border: " + (c - g / 2) + "px solid;border-color: " + p + " " + p + " transparent transparent;}"
                  } else {
                    D =
                    T ? Math.round(y.axes.left.fromPos(b.layerY)) : Math.round(y.axes.bottom.fromSizeCalcIndex(b.clientX - y.canvas.getBoundingClientRect().left - y.axes.bottom.startPos)); var B = new f; if (b.target == y.canvas) for (var F = 0; F < y.series.items.length; F++)if (E = T ? Math.abs(y.series.items[F].data.values[D] - y.axes.bottom.fromPos(b.layerX)) : Math.abs(y.series.items[F].data.values[D] - y.axes.left.fromPos(b.layerY)), 0 == F) { var G = E; y.series.items[F].calc(D, B) } else E < G && (y.series.items[F].calc(D, B), G = E); E = document.documentElement;
                    G = q.style.marginTop.substring(0, q.style.marginTop.length - 2); F = q.style.marginLeft.substring(0, q.style.marginLeft.length - 2); D = Math.round(B.y + window.scrollY + y.canvas.getBoundingClientRect().top - q.getBoundingClientRect().height - c - G + g / 2); E = Math.round(B.x + window.scrollX + y.canvas.getBoundingClientRect().left - q.getBoundingClientRect().width / 2 - F - g / 2); E + C / 2 - U.x > U.width ? (D = Math.round(B.y + window.scrollY + y.canvas.getBoundingClientRect().top - q.getBoundingClientRect().height - 2 * c - G + g / 2), E = Math.round(B.x + window.scrollX +
                      y.canvas.getBoundingClientRect().left - q.getBoundingClientRect().width - F), t.borderRadius = n + "px " + n + "px 0px " + n + "px", a.innerHTML = ".teetiparrow{width:0;height:0;border: " + c + "px solid;position: absolute;content: '';border-color: " + k + " " + k + " transparent transparent;bottom: -" + 2 * c + "px;left: " + (q.getBoundingClientRect().width - 2 * c - g / 2) + "px;}", d.innerHTML = ".teetiparrow:after{content: ' ';position: absolute;width: 0;height: 0;left: -" + (c - g / 2) + "px;bottom: " + (g - (c - 1)) + "px; border: " + (c - g / 2) + "px solid;border-color: " +
                      p + " " + p + " transparent transparent;}") : E - C / 2 < U.x ? (E = Math.round(B.x + window.scrollX + y.canvas.getBoundingClientRect().left - F), D = Math.round(B.y + window.scrollY + y.canvas.getBoundingClientRect().top - q.getBoundingClientRect().height - 2 * c - G + g / 2), t.borderRadius = n + "px " + n + "px " + n + "px 0px", a.innerHTML = ".teetiparrow{width:0;height:0;border: " + c + "px solid;position: absolute;content: '';border-color: " + k + " transparent transparent " + k + ";bottom: -" + 2 * c + "px;left: " + -(g / 2) + "px;}", d.innerHTML = ".teetiparrow:after{content: ' ';position: absolute;width: 0;height: 0;left: -" +
                        (c - g / 2) + "px;bottom: " + (g - (c - 1)) + "px; border: " + (c - g / 2) + "px solid;border-color: " + p + " transparent transparent " + p + ";}") : E && (t.borderRadius = n + "px " + n + "px " + n + "px " + n + "px", a.innerHTML = ".teetiparrow{width:0;height:0;border: " + c + "px solid;position: absolute;content: '';border-color: " + k + " transparent transparent transparent;bottom: -" + 2 * c + "px;left: " + (q.getBoundingClientRect().width / 2 - c) + "px;}", d.innerHTML = ".teetiparrow:after{content: ' ';position: absolute;width: 0;height: 0;left: -" + (c - g / 2) + "px;bottom: " +
                          (g - (c - 1)) + "px; border: " + (c - g / 2) + "px solid;border-color: " + p + " transparent transparent transparent;}")
                  } h && h.pointer.visible && (u(), D -= h.pointer.secondCircleRadius > h.pointer.firstCircleRadius ? h.pointer.secondCircleRadius : h.pointer.firstCircleRadius)
                } else E = document.documentElement, D = A ? b.clientY + E.scrollTop : b.pageY, E = A ? b.clientX + E.scrollLeft : b.pageX - C / 2 - 10 - c
              } else c = 0, e = !0, E = document.documentElement, D = A ? b.clientY + E.scrollTop : b.pageY, E = A ? b.clientX + E.scrollLeft : b.pageX - C / 2 - 10 - c, a.innerHTML = ".teetiparrow{width:0;height:0;border: " +
                c + "px solid;position: absolute;content: '';border-color: " + k + " " + k + " transparent transparent;bottom: -" + 2 * c + "px;left: " + (q.getBoundingClientRect().width - 2 * c - g / 2) + "px;}", d.innerHTML = ".teetiparrow:after{content: ' ';position: absolute;width: 0;height: 0;left: -" + (c - g / 2) + "px;bottom: " + (g - (c - 1)) + "px; border: " + (c - g / 2) + "px solid;border-color: " + p + " " + p + " transparent transparent;}"; 0 > D - z && (D = z); 0 > E && (E = 0); if (x) {
                  U = x.offsetLeft; for (B = x; null != B.offsetParent;)U += B.offsetLeft, B = B.offsetParent; E > U + x.clientWidth -
                    q.offsetWidth - 25 && (E = U + x.clientWidth - q.offsetWidth - 25)
                } e ? (t.top = D - z + "px", t.left = E + 3 + "px") : (t.top = D + "px", t.left = E + "px")
            }, fade: function (a) { var b = r; if (97 !== b && 1 === a || 0 !== b && -1 === a) { var c = 10; 10 > 97 - b && 1 == a ? c = 97 - b : 10 > r && -1 == a && (c = b); r = b + c * a; t.opacity = .01 * r; A && (t.filter = "alpha(opacity=" + r + ")") } else clearInterval(q.timer), -1 == a && (t.display = "none", document.onmousemove = null) }, hide: function () { q && (clearInterval(q.timer), q.timer = setInterval(function () { Tee.DOMTip.fade(-1) }, 10), x && x.chart && x.chart.draw()) }
          }
        }();
      Tee.Chart.prototype.drawReflection = function () { var b = this.ctx, c = this.bounds.height; b.scale(1, -1); b.translate(0, 2 * -c); this.ondraw = null; this.draw(); b.translate(0, 2 * c); b.scale(1, -1); var a = this.canvas.height - c, e = b.createLinearGradient(0, c, 0, c + a), d = this.reflectionColor; e.addColorStop(0, aa(d, .5)); e.addColorStop(1, aa(d, 1)); b.fillStyle = e; b.beginPath(); b.shadowColor = "transparent"; b.rect(0, c, this.bounds.width, a); b.fill(); this.ondraw = this.drawReflection }; Tee.drawSpline = function (b, c, a, e, d) {
        function g(a, b, c, d,
          e, g, f) { function h(a) { return a * a } var k = Math.sqrt(h(c - a) + h(d - b)); k = f * k / (k + Math.sqrt(h(e - c) + h(g - d))); f -= k; return [c + k * (a - e), d + k * (b - g), c - f * (a - e), d - f * (b - g)] } var f = [], m = c.length; if (d) { e && b.moveTo(c[0], c[1]); c.push(c[0], c[1], c[2], c[3]); c.unshift(c[m - 1]); c.unshift(c[m - 1]); for (d = 0; d < m; d += 2)f = f.concat(g(c[d], c[d + 1], c[d + 2], c[d + 3], c[d + 4], c[d + 5], a)); f = f.concat(f[0], f[1]); for (d = 2; d < m + 2; d += 2)b.bezierCurveTo(f[2 * d - 2], f[2 * d - 1], f[2 * d], f[2 * d + 1], c[d + 2], c[d + 3]) } else {
            for (d = 0; d < m - 4; d += 2)f = f.concat(g(c[d], c[d + 1], c[d + 2], c[d +
              3], c[d + 4], c[d + 5], a)); e && b.moveTo(c[0], c[1]); b.quadraticCurveTo(f[0], f[1], c[2], c[3]); for (d = 2; d < m - 5; d += 2)b.bezierCurveTo(f[2 * d - 2], f[2 * d - 1], f[2 * d], f[2 * d + 1], c[d + 2], c[d + 3]); b.quadraticCurveTo(f[2 * m - 10], f[2 * m - 9], c[m - 2], c[m - 1])
          }
      }; Tee.Chart.prototype.applyTheme = function (b) {
        if (!b || "" == b) this.applyTheme("default"); else if ("default" == b) {
          this.title.format.font.style = "18px Verdana"; this.walls.visible = !0; this.panel.format.shadow.visible = !1; this.panel.format.round.x = 8; this.panel.format.round.y = 8; this.panel.format.gradient.visible =
            !0; this.panel.format.gradient.colors = ["rgba(224,224,224,1.0)", "white"]; this.panel.format.gradient.direction = "diagonalup"; this.panel.format.stroke.fill = "rgba(204,204,204,1.0)"; this.panel.format.stroke.size = 1; W(this, "opera"); if (0 < this.series.items.length) for (var c = 0; c < this.series.items.length; c++)this.series.items[c].format.fill = this.palette.get(c), null != this.series.items[c].pointer && (this.series.items[c].pointer.format.fill = this.palette.get(c), this.series.items[c].pointer.format.stroke.fill = "white");
          this.axes.left.labels.format.font.setSize(11); this.axes.bottom.labels.format.font.setSize(11); this.axes.left.format.stroke.fill = "rgba(39,79,105,0.8)"; this.axes.bottom.format.stroke.fill = "rgba(39,79,105,0.8)"; this.axes.left.labels.format.font.fill = "rgba(0,0,0,1)"; this.axes.bottom.labels.format.font.fill = "rgba(0,0,0,1)"; this.axes.left.title.format.font.fill = "rgba(0,0,0,1)"; this.axes.left.title.format.font.setSize(20); this.axes.bottom.title.format.font.fill = "rgba(0,0,0,1)"; this.axes.bottom.title.format.font.setSize(20);
          this.axes.left.grid.visible = !0; this.axes.bottom.grid.visible = !1; this.axes.left.grid.format.stroke.size = .6; this.axes.bottom.grid.format.stroke.size = .6; this.axes.left.grid.format.stroke.fill = "silver"; this.axes.bottom.grid.format.stroke.fill = "silver"; this.axes.left.grid.visible = !0; this.axes.top.grid.visible = !0; this.axes.right.grid.visible = !0; this.axes.bottom.grid.visible = !0; 0 < this.axes.items.length && T(this, "rgba(0,0,0,1)", "rgba(39,79,105,0.8)"); this.legend.transparent = !1; this.legend.format.fill = "white";
          this.legend.format.font.setSize(11); this.legend.format.font.fill = "rgba(0,0,0,1)"; this.legend.fontColor = !1; this.title.format.font.fill = "rgba(0,0,0,1)"; this.walls.visible = !1
        } else if ("minimal" == b) I(this); else if ("excel" == b) {
          if (I(this), W(this, "excel"), this.axes.left.grid.format.stroke.fill = "rgba(0,0,0,0.9)", this.axes.bottom.grid.format.stroke.fill = "rgba(0,0,0,0.9)", 0 < this.series.items.length) for (c = 0; c < this.series.items.length; c++)this.series.items[c].format.fill = this.palette.get(c), null != this.series.items[c].pointer &&
            (this.series.items[c].pointer.format.fill = this.palette.get(c), this.series.items[c].pointer.format.stroke.fill = "white")
        } else if ("dark" == b) {
          W(this, "onBlack"); this.title.transparent = !0; this.legend.transparent = !0; this.footer.transparent = !0; this.panel.format.shadow.visible = !1; this.panel.format.stroke.fill = ""; this.panel.format.round.x = 0; this.panel.format.round.y = 0; this.panel.format.gradient.colors = ["rgba(0,0,0,1)", "rgba(0,0,0,1)"]; this.panel.format.gradient.visible = !0; if (0 < this.series.items.length) for (c =
            0; c < this.series.items.length; c++)this.series.items[c].format.fill = this.palette.get(c), null != this.series.items[c].pointer && (this.series.items[c].pointer.format.fill = this.palette.get(c), this.series.items[c].pointer.format.stroke.fill = "rgba(82,82,82,1)"); this.axes.left.format.stroke.fill = "rgba(224,224,224,0.6)"; this.axes.bottom.format.stroke.fill = "rgba(224,224,224,0.6)"; this.axes.left.labels.format.font.setSize(14); this.axes.bottom.labels.format.font.setSize(14); this.axes.left.labels.format.font.fill =
              "rgba(224,224,224,0.6)"; this.axes.bottom.labels.format.font.fill = "rgba(224,224,224,0.6)"; this.axes.left.title.format.font.fill = "rgba(224,224,224,0.6)"; this.axes.left.title.format.font.setSize(20); this.axes.bottom.title.format.font.fill = "rgba(224,224,224,0.6)"; this.axes.bottom.title.format.font.setSize(20); this.axes.bottom.grid.visible = !1; this.axes.left.grid.visible = !0; this.axes.left.grid.format.stroke.fill = "silver"; this.axes.bottom.grid.format.stroke.fill = "silver"; 0 < this.axes.items.length && T(this,
                "rgba(224,224,224,0.6)", "rgba(39,79,105,0.8)"); this.walls.visible = !1; this.legend.transparent = !0; this.legend.format.font.setSize(14); this.legend.format.font.fill = "rgba(224,224,224,0.6)"; this.title.format.shadow.visible = !1; this.title.format.font.style = "18px Arial"; this.title.format.font.style = "bold 18px Arial"; this.title.format.font.fill = "rgba(224,224,224,0.6)"; this.title.format.font.shadow.visible = !1
        } else if ("twilight" == b) {
          this.title.format.font.style = "18px Verdana"; this.walls.visible = !0; this.panel.format.shadow.visible =
            !1; this.panel.format.round.x = 8; this.panel.format.round.y = 8; this.panel.format.gradient.visible = !0; this.panel.format.gradient.colors = ["rgba(99,99,99,1.0)", "rgba(19,19,19,1.0)"]; this.panel.format.gradient.direction = "topbottom"; this.panel.format.stroke.fill = "rgba(204,204,204,1.0)"; this.panel.format.stroke.size = 1; W(this, "redRiver"); if (0 < this.series.items.length) for (c = 0; c < this.series.items.length; c++)this.series.items[c].format.fill = this.palette.get(c), null != this.series.items[c].pointer && (this.series.items[c].pointer.format.fill =
              this.palette.get(c), this.series.items[c].pointer.format.stroke.fill = "rgba(82,82,82,1)"); this.axes.left.format.stroke.fill = "rgba(224,224,224,0.6)"; this.axes.bottom.format.stroke.fill = "rgba(224,224,224,0.6)"; this.axes.left.labels.format.font.setSize(11); this.axes.bottom.labels.format.font.setSize(11); this.axes.left.labels.format.font.fill = "rgba(224,224,224,0.6)"; this.axes.bottom.labels.format.font.fill = "rgba(224,224,224,0.6)"; this.axes.left.title.format.font.fill = "rgba(224,224,224,0.6)"; this.axes.left.title.format.font.setSize(20);
          this.axes.bottom.title.format.font.fill = "rgba(224,224,224,0.6)"; this.axes.bottom.title.format.font.setSize(20); this.axes.bottom.grid.visible = !1; this.axes.left.grid.visible = !0; this.axes.left.grid.format.stroke.fill = "silver"; this.axes.bottom.grid.format.stroke.fill = "silver"; 0 < this.axes.items.length && T(this, "rgba(224,224,224,0.6)", "rgba(39,79,105,0.8)"); this.legend.transparent = !0; this.legend.format.font.setSize(14); this.legend.format.font.fill = "rgba(224,224,224,0.6)"; this.legend.format.fill = "rgba(0,0,0,0.1)";
          this.title.format.shadow.visible = !1; this.title.format.font.style = "18px Arial"; this.title.format.font.style = "bold 18px Arial"; this.title.format.font.fill = "rgba(224,224,224,0.6)"; this.title.format.font.shadow.visible = !1; this.walls.visible = !1
        } else if ("daybreak" == b) {
          this.title.format.font.style = "18px Verdana"; this.walls.visible = !0; this.panel.format.shadow.visible = !1; this.panel.format.round.x = 8; this.panel.format.round.y = 8; this.panel.format.gradient.visible = !0; this.panel.format.gradient.colors = ["rgba(201,204,242,1.0)",
            "rgba(255,252,255,1.0)", "rgba(21,21,23,1.0)"]; this.panel.format.gradient.direction = "topbottom"; this.panel.format.stroke.fill = "rgba(204,204,204,1.0)"; this.panel.format.stroke.size = 1; W(this, "redRiver"); if (0 < this.series.items.length) for (c = 0; c < this.series.items.length; c++)this.series.items[c].format.fill = this.palette.get(c), null != this.series.items[c].pointer && (this.series.items[c].pointer.format.fill = this.palette.get(c), this.series.items[c].pointer.format.stroke.fill = "rgba(82,82,82,1)"); for (c = 0; c < this.axes.items.length; c++) {
              var a =
                this.axes.items[c]; a.format.stroke.fill = "rgba(14,14,54,0.6)"; a.labels.format.font.setSize(11); a.labels.format.font.fill = "rgba(224,224,224,0.6)"; a.title.format.font.setSize(20); a.title.format.font.fill = "rgba(224,224,224,0.6)"; a.grid.visible = 3 > c; a.grid.format.stroke.fill = "silver"
            } this.legend.transparent = !0; this.legend.format.font.setSize(14); this.legend.format.font.fill = "silver"; this.title.format.shadow.visible = !1; this.title.format.font.style = "18px Arial"; this.title.format.font.style = "bold 18px Arial";
          this.title.format.font.fill = "rgba(14,14,54,0.6)"; this.title.format.font.shadow.visible = !1; this.walls.visible = !1
        } this.themeName = b; this.draw()
      }; Tee.Chart.prototype.applyPalette = function (b) { W(this, b) }; Tee.doHttpRequest = function (b, c, a, e) { var d = ba(); d && (d.onreadystatechange = function () { 4 == d.readyState && (200 === d.status || 0 === d.status ? a(b, d.responseText) : e && e(d.status, d.statusText)) }, d.open("GET", c, !0), d.send(null)) }; Tee.Slider = function (b, c) {
        function a(a, b) {
          return b.x >= a.x && b.x <= a.x + a.width && b.y >= a.y && b.y <=
            a.y + a.height
        } Tee.Tool.call(this, b); var e = !1, d = this.thumb = new Tee.Format(b); d.round = { x: 4, y: 4 }; d.stroke.size = .5; d.gradient.visible = !1; d.gradient.direction = "leftright"; d.shadow.visible = !1; d = this.back = new Tee.Format(b); d.fill = "white"; d.gradient.visible = !1; d.stroke.fill = "darkgrey"; d.round = { x: 4, y: 4 }; b = this.grip = new Tee.Format(b); b.round = { x: 4, y: 4 }; b.stroke.fill = "rgb(20,20,20,1.0)"; this.gripSize = 3; var g = this.bounds = { x: 10, y: 10, width: 200, height: 20 }; this.transparent = !1; this.margin = 16; this.min = 0; this.max = 100;
        this.position = "undefined" == typeof c ? 50 : c; this.useRange = !1; this.thumbSize = 8; this.horizontal = !0; this.cursor = "pointer"; this.delta = 0; this.thumbRect = function (a) { var b = this.max - this.min; b = 0 < b ? (this.position - this.min) / b : 0; this.horizontal ? (a.width = this.thumbSize, a.x = g.x + b * g.width - .5 * a.width, a.y = g.y, a.height = g.height) : (a.height = this.thumbSize, a.y = g.y + b * g.height - .5 * a.height, a.x = g.x, a.width = g.width) }; var f = {}; this.gripRect = function (a) {
          if (this.horizontal) {
            var b = .2 * a.height; return {
              x: a.x - this.gripSize, y: a.y + .5 *
                a.height - b, width: 2 * this.gripSize, height: 2 * b
            }
          } b = .2 * a.width; return { x: a.x + .5 * a.width - b, y: a.y - this.gripSize, width: 2 * b, height: 2 * this.gripSize }
        }; this.draw = function () {
          var a = this.horizontal ? g.height : g.width, b = a * this.margin * .01; this.transparent || (this.horizontal ? this.back.rectangle(g.x, g.y + b, g.width, a - 2 * b) : this.back.rectangle(g.x + b, g.y, a - 2 * b, g.height)); if (this.onDrawThumb) this.onDrawThumb(this); this.thumbRect(f); this.invertThumb ? (a = this.thumb, this.horizontal ? (a.rectangle(g.x, g.y + b, f.x, g.height - 2 * b), a.rectangle(g.x +
            f.x + f.width, g.y + b, g.width, g.height - 2 * b)) : (a.rectangle(g.x + b, g.y, g.width - 2 * b, f.y), a.rectangle(g.x + b, g.y + f.y + f.height, g.width - 2 * b, g.height))) : this.thumb.rectangle(f); this.useRange && this.horizontal && (b = this.gripRect(f), this.grip.rectangle(b), b.x += f.width, this.grip.rectangle(b))
        }; this.clickAt = function (a) {
          a = this.min + Math.max(0, (a + this.delta - (this.horizontal ? g.x : g.y)) * (this.max - this.min) / (this.horizontal ? g.width : g.height)); a > this.max && (a = this.max); if (this.onChanging) {
            var b = this.onChanging(this, a); "undefined" !==
              typeof b && (a = b)
          } a < this.min ? a = this.min : a > this.max && (a = this.max); this.chart.newCursor = this.cursor; this.position != a && (this.position = a, this.chart.draw())
        }; this.resized = function () { if (this.onChanging) this.onChanging(this, this.position); this.chart.draw(); this.chart.newCursor = "col-resize" }; this.chart.canvas.addEventListener("touchstart", function (a) { e = !0; a.preventDefault() }); this.chart.canvas.addEventListener("touchend", function (a) { e = !1; a.preventDefault() }); this.mousemove = function (b) {
          var c = this.horizontal ?
            g.width : g.height, d = this.horizontal ? b.x : b.y, h = this.max - this.min; this.thumbRect(f); this.resizeBegin && d < f.x + f.width ? (b = this.thumbSize, d = f.x - d, this.thumbSize += d, this.position -= d * h / c * .5, this.position < this.min && (this.position = this.min, this.thumbSize = b), this.resized()) : this.resizeEnd && d > f.x ? (b = f.x + f.width - d, this.thumbSize -= b, this.position -= b * h / c * .5, this.resized()) : this.dragging || e ? this.clickAt(d) : (c = !1, this.useRange && (h = this.gripRect(f), c = a(h, b), c || (h.x += f.width, c = a(h, b))), c ? this.chart.newCursor = "col-resize" :
              a(f, b) && (this.chart.newCursor = this.cursor))
        }; var m = { x: 0, y: 0 }; this.mousedown = function (b) {
          this.thumbRect(f); this.chart.calcMouse(b, m); b = this.gripRect(f); this.resizeBegin = this.useRange && a(b, m); b.x += f.width; this.resizeEnd = this.useRange && !this.resizeBegin && a(b, m); this.dragging = !this.resizeBegin && !this.resizeEnd && a(f, m); this.resizeBegin || this.resizeEnd || (this.dragging ? this.delta = this.horizontal ? f.x + .5 * f.width - m.x : f.y + .5 * f.height - m.y : a(g, m) && (b = this.horizontal ? .5 * f.width : .5 * f.height, this.delta = -b, this.clickAt(b +
            (this.horizontal ? m.x : m.y)))); return this.dragging || this.resizeBegin || this.resizeEnd
        }; this.clicked = function () { var a = this.dragging || this.resizeBegin || this.resizeEnd; this.resizeBegin = this.resizeEnd = this.dragging = !1; this.delta = 0; return a }; this.mouseout = function () { this.resizeBegin = this.resizeEnd = this.dragging = !1 }
      }; Tee.Slider.prototype = new Tee.Tool; Tee.Scroller = function (b, c) {
        Tee.Chart.call(this, b); this.target = c; this.aspect.clip = !1; this.panel.transparent = !0; this.title.visible = !1; var a = this.scroller = new Tee.Slider(this);
        a.useRange = !0; a.thumbSize = 100; b = a.thumb; b.shadow.height = 0; b.transparency = .6; b.stroke.fill = "black"; b.shadow.visible = !1; a.horizontal = !0; var e = a.bounds; e.x = 0; e.y = 0; e.width = this.bounds.width; e.height = this.bounds.height; a.margin = 0; a.lock = !1; this.tools.add(a); var d = this; c.ondraw = function () { a.lock || d.draw() }; c.onscroll = function () {
          var a = this.axes.bottom, b = this.series, c = b.minXValue(); b = b.maxXValue(); var d = a.maximum - a.minimum; a.minimum < c && (a.minimum = c, a.maximum = a.minimum + d); a.maximum > b && (a.maximum = b, a.minimum =
            a.maximum - d)
        }; this.useRange = function (b) { a.useRange = b; this.draw() }; this.invertThumb = function (b) { a.invertThumb = b; this.draw() }; a.onChanging = function (a, b) { a = a.thumbSize * (a.max - a.min) / a.bounds.width * .5; var e = c.series, g = e.minXValue(); e = e.maxXValue(); b - a < g ? b = g + a : b + a > e && (b = e - a); c.axes.bottom.setMinMax(b - a, b + a); this.lock = !0; c.draw(); this.lock = !1; if (d.onChanging) d.onChanging(d, b - a, b + a); return b }; this.setBounds = function (a, b, c, d) {
          this.bounds.x = a; this.bounds.y = b; this.bounds.width = c; this.bounds.height = d; e.x = a;
          e.y = b; e.width = c; e.height = d
        }; a.onDrawThumb = function (b) {
          function e(a, b) { var c = { mi: a.minimum, ma: a.maximum, sp: a.startPos, ep: a.endPos }; g(a, b); return c } function g(a, b) { a.minimum = b.mi; a.maximum = b.ma; a.startPos = b.sp; a.endPos = b.ep; a.scale = (b.ep - b.sp) / (b.ma - b.mi) } var f = c.chartRect, k = c.ctx, l = new Tee.Rectangle(a.bounds.x, a.bounds.y, a.bounds.width, a.bounds.height); c.chartRect = l; c.ctx = a.chart.ctx; var n = a.bounds, q = c.series; b.min = q.minXValue(); b.max = q.maxXValue(); l = e(c.axes.bottom, {
            sp: n.x, ep: n.x + n.width, mi: b.min,
            ma: b.max
          }); n = e(c.axes.left, { sp: n.y, ep: n.y + n.height, mi: q.minYValue(), ma: q.maxYValue() }); q = .5 * (l.mi + l.ma); var r = l.ma - l.mi; b.thumbSize = r * b.bounds.width / (b.max - b.min); r *= .5; if (d.onChanging) d.onChanging(d, q - r, q + r); b.position = q; c.series.each(function (a) { if (a.visible && a.useAxes) if (void 0 != a.pointer) { var b = a.pointer.visible; a.pointer.visible = !1; a.draw(); a.pointer.visible = b } else a.draw() }); g(c.axes.bottom, l); g(c.axes.left, n); c.chartRect = f; c.ctx = k
        }
      }; Tee.Scroller.prototype = new Tee.Chart; Tee.SliderControl = function (b) {
        b =
        new Tee.Chart(b); b.panel.transparent = !0; b.title.visible = !1; var c = new Tee.Slider(b); c.bounds.x = c.thumbSize + 1; c.bounds.width = b.canvas.width - 2 * c.thumbSize - 2; c.bounds.y = .5 * (b.canvas.height - c.bounds.height); b.tools.add(c); return c
      }; Tee.CheckBox = function (b, c, a) {
        Tee.Annotation.call(this, b); this.transparent = !0; this.text = c; this.checked = a || !0; this.margins.left = 10; this.cursor = "pointer"; this.check = new Tee.Format(b); this.check.fill = "white"; this.draw = function () {
          Tee.Annotation.prototype.draw.call(this); var a = this.chart.ctx,
            b = this.position.x + 2, c = .6 * this.bounds.height, f = this.position.y + .4 * (this.bounds.height - c); this.check.rectangle(b, f, c, c); this.checked && (a.beginPath(), a.moveTo(b + 3, f + 5), a.lineTo(b + 4, f + 8), a.lineTo(b + 7, f + 2), this.check.stroke.prepare(), a.stroke())
        }; this.chart.canvas.addEventListener("touchstart", function () { }); this.onclick = function () { this.checked = !this.checked; if (this.onchange) this.onchange(this); return !0 }
      }; Tee.CheckBox.prototype = new Tee.Annotation; "undefined" !== typeof exports && (exports.Tee = Tee); Tee.FadeAnimation =
        function (b) {
          Tee.Animation.call(this, b); this.kind = "in"; var c = this, a; this.fade = {}; this.setTransp = function (b) { "out" == c.kind && (b = 1 - b); a.legend && (c.chart.legend.format.transparency = b); a.walls && (c.chart.walls.transparency = b); a.series && c.chart.series.each(function (a) { a.format.transparency = b }); a.marks && c.chart.series.each(function (a) { a.marks.transparency = b }); a.title && (c.chart.title.format.transparency = b); a.axes && (c.chart.axes.transparency = b); a.panel && (c.chart.panel.format.transparency = b) }; this.start = function () {
            a =
            this.fade; this.setTransp(1)
          }; this.stop = function () { this.setTransp(0) }; this.doStep = function (a) { c.setTransp(1 - a) }
        }; Tee.FadeAnimation.prototype = new Tee.Animation; Tee.SeriesAnimation = function (b) {
          function c(a, b, c) { b.automatic = !1; var d = .5 * (a.oldmin + a.oldmax); a = .5 * (a.oldmax - a.oldmin); b.maximum = d + c * a; b.minimum = d - c * a } Tee.Animation.call(this, b); b instanceof Tee.Series ? (this.series = b, this.chart = b.chart) : this.series = null; this.oldmax = this.oldmin = 0; this.oldauto = !0; var a = 1, e = this; this.kind = "axis"; this.getAxis = function () {
            var a =
              this.series || this.chart.series.firstVisible(); return a ? a.mandatoryAxis : null
          }; this.getOtherAxis = function () { var a = this.series || this.chart.series.firstVisible(); if (a) if (a.yMandatory) { if ("both" === a.vertAxis) return this.chart.axes.right } else { if ("both" === a.horizAxis) return this.chart.axes.top } else return null }; this.doStep = function (b) {
            var d = e.getAxis(), f = e.getOtherAxis(); d && (d.automatic = !1); f && (f.automatic = !1); "axis" == e.kind ? (c(e, d, 1 + 100 * (1 - b)), f && c(e, f, 1 + 100 * (1 - b))) : e.chart.series.each(function (c) {
              if (!e.series ||
                e.series === c) { var d = c.data.values, g = c.data._old, f = d.length; if (c instanceof Tee.ActivityGauge) c.maxDrawWidth = c.maxWidth * b; else if (c instanceof Tee.Pie) c.rotation = 360 * (1 - b), a = b; else if ("each" == e.kind) { var h = f * b | 0; for (c = 0; c < h; c++)d[c] = g[c]; h < f && (d[h] = g[h] * (f * b - h)) } else if ("all" == e.kind) for (c = 0; c < f; c++)d[c] = g[c] * b; else "axis" != e.kind && (a = b) }
            })
          }; this.stop = function () {
            this.doStep(1); var a = e.getAxis(), b = e.getOtherAxis(); a && (a.maximum = e.oldmax, a.minimum = e.oldmin, a.automatic = e.oldauto); b && (b.maximum = e.oldmax,
              b.minimum = e.oldmin, b.automatic = e.oldauto); e.chart.series.each(function (a) { a.transform && (a.transform = null); "each" != e.kind && "all" != e.kind || !a.data._old || (a.data.values = a.data._old, a.data._old = null) })
          }; this.start = function () {
            var b = this.getAxis(), e = this.getOtherAxis(), f = this.chart, l = f.series.items, n = f.chartRect.width, k = f.chartRect.height, q = f.bounds.width, r = f.bounds.height; if (0 === l.length) return !1; this.oldmin = b.minimum; this.oldmax = b.maximum; this.oldauto = b.automatic; for (f = 0; f < l.length; f++) {
              var t = l[f]; if (!this.series ||
                this.series === t) if (t instanceof Tee.Pie) t.transform = function () { this.chart.ctx.scale(a, a) }; else if ("each" == this.kind || "all" == this.kind) { var v = t.data.values, x = v.length; t.data._old = v.slice(0); for (t = 0; t < x; t++)v[t] = 0; b.automatic = !1; e && (e.automatic = !1) } else "left" == this.kind ? t.transform = function () { this.chart.ctx.translate(-n * (1 - a), 0) } : "right" == this.kind ? t.transform = function () { this.chart.ctx.translate(n * (1 - a), 0) } : "x" == this.kind ? t.transform = function () { this.chart.ctx.scale(a, 1) } : "y" == this.kind ? t.transform =
                  function () { this.chart.ctx.scale(1, a) } : "top" == this.kind ? t.transform = function () { this.chart.ctx.translate(0, -k * (1 - a)) } : "bottom" == this.kind ? t.transform = function () { this.chart.ctx.translate(0, k * (1 - a)) } : "zoomin" == this.kind ? t.transform = function () { var b = this.chart.ctx; b.translate(.5 * q, .5 * r); b.scale(a, a); b.translate(.5 * -q, .5 * -r) } : "zoomout" == this.kind && (t.transform = function () { var b = this.chart.ctx; b.translate(.5 * q, .5 * r); b.scale(2 - a, 2 - a); b.translate(.5 * -q, .5 * -r) })
            } "axis" == this.kind && (c(this, b, 100), e && c(this, e,
              100))
          }
        }; Tee.SeriesAnimation.prototype = new Tee.Animation; Tee.MarksAnimation = function (b) { function c(a, b, c) { return b <= e.current ? c : "" } Tee.Animation.call(this, b); b && b instanceof Tee.Series ? (this.series = b, this.chart = b.chart) : this.series = null; this.current = -1; var a = this.series.marks, e = this, d; this.start = function () { d = a.ongettext; a.ongettext = c }; this.stop = function () { a.ongettext = d; this.current = -1 }; this.doStep = function (a) { e.current = e.series.data.values.length * a | 0 } }; Tee.MarksAnimation.prototype = new Tee.Animation
    }).call(this);
    function doubleTap(f) { var l, n = 0; f.canvas.addEventListener("touchend", function (r) { var q = (new Date).getTime(), v = q - n; clearTimeout(l); 600 > v && 100 < v ? (f.zoom.reset(), f.draw()) : l = setTimeout(function () { clearTimeout(l) }, 600); n = q; r.preventDefault() }) }
    function twoFingersZoom(f, l) {
      var n = f.canvas, r = 0, q = 0, v = 0, t = 0, C = 0, x = 0, A = 0, D = 0, G = 0, Y = 0, Q = 0, Z = 0, L = [], B, V, R, S, O, N, K, P; var X = !1; var aa = setInterval(function () {
        if (1 < L.length) {
          var n = L[0]; var I = L[1]; l.touching = !0; X ? (B = n.pageX, R = I.pageX, V = n.pageY, S = I.pageY, B > R && (n = B, B = R, R = n), V > S && (n = V, V = S, S = n), C = B - O, A = V - N, x = R - K, D = S - P, q = G - C, t = Q - A, r = Y - x, v = Z - D, G = C, Q = A, Y = x, Z = D) : (O = n.pageX, K = I.pageX, N = n.pageY, P = I.pageY, O > K && (n = O, O = K, K = n), N > P && (n = N, N = P, P = n), X = !0); if ("both" == l.direction || "horizontal" == l.direction) n = f.axes.bottom.startPos +
            q, I = f.axes.bottom.endPos + r, f.axes.top.calcMinMax(n, I), f.axes.bottom.calcMinMax(n, I), f.draw(); if ("both" == l.direction || "vertical" == l.direction) n = f.axes.left.startPos + t, I = f.axes.left.endPos + v, f.axes.right.calcMinMax(n, I), f.axes.left.calcMinMax(n, I), f.draw()
        }
      }, 100); n.addEventListener("touchend", function () { X && (X = !1); clearInterval(aa) }); n.addEventListener("touchmove", function (f) { f.preventDefault(); L = f.touches })
    }
    Tee.Sliced = function (f, l) {
      Tee.Series.call(this, f, l); this.useAxes = !1; this.colorEach = "yes"; this.draw = function () {
        if (this.data && this.data.values && this.data.labels) {
          var f = this.chart.ctx; this.calcColorEach(); var l = this.data.values, q = this.data.labels, v = l.reduce(function (f, l) { return f + l }, 0); l = l.map(function (f, l) { return { value: f, label: q[l] } }).sort(function (f, l) { return l.value - f.value }); for (var t = 0, C = this.chart.chartRect.height, x = this.chart.chartRect.width, A = 0; A < l.length; A++) {
            var D = l[A], G = D.value / v * C; f.beginPath();
            f.fillStyle = this.getFill(A, this.format); f.fillRect(0, t, x, t + G); f.strokeStyle = "black"; f.lineWidth = 2; f.strokeRect(0, t, x, t + G); f.closePath(); f.fillStyle = "white"; f.font = "16px Arial"; f.textAlign = "center"; f.textBaseline = "middle"; f.fillText(D.label, x / 2, t + G / 2); f.stroke(); t += G
          }
        }
      }
    }; Tee.Sliced.prototype = new Tee.Series;
    Tee.Treemap = function (f, l) {
      Tee.Series.call(this, f, l); var n = this.format; n.stroke.fill = "black"; n.font.style = "16px Arial"; this.fillStyle = "white"; this.lineWidth = 2; this.palette = new Tee.Palette("#4466a3 #f39c35 #f14c14 #4e97a8 #2b406b #1d7b63 #b3080e #f2c05d #5db79e #707070 #f3ea8d #b4b4b4".split(" ")); this.useAxes = !1; this.drawNode = function (f, l, v, t, C, x, A) {
        if (l && 0 !== l.length) {
          var q = l.children, r = v; f.beginPath(); f.fillStyle = this.palette.get(A); f.fillRect(r, t, C - r, x - t); f.strokeStyle = n.stroke.fill; f.lineWidth =
            this.lineWidth; f.strokeRect(r, t, C - r, x - t); f.fillStyle = this.fillStyle; f.font = n.font.style; f.textAlign = this.format.textAlign; f.textBaseline = "middle"; this.marks.visible ? "center" == f.textAlign && f.fillText(l.name, v + C / 2, t + 10) : "left" == f.textAlign ? f.fillText(l.name, v, t + 10) : "right" == f.textAlign && f.fillText(l.name, C - v, t + 10); if (null != q) for (l = (x - t - 20) / q.length, t += 10, r += 10, q = $jscomp.makeIterator(q), v = q.next(); !v.done; v = q.next())this.drawNode(f, v.value, r, t, C - r, l + t, ++A), t += l
        }
      }; this.draw = function () {
        this.drawNode(this.chart.ctx,
          f, 0, 0, this.chart.chartRect.width, this.chart.chartRect.height, 0)
      }
    }; Tee.Treemap.prototype = new Tee.Series;
    Tee.LinearGauge = function (f, l) {
      Tee.Series.call(this, f, l); var n = this.format; n.stroke.fill = "black"; n.stroke.size = 1; n.font.style = "16px Arial"; this.lineFill = "#000"; this.txtHeight = n.textHeight("Wj"); this.min = 0; this.max = 100; this.increment = 20; this.markSymbol = "%"; this.gradientColors = ["red", "green"]; this.animationIncrement = 1; this.startValue = void 0 == f ? 0 : f; this.finalValue = void 0 == l ? 0 : l; this.value = this.startValue; this.useAxes = !1; this.drawAll = function (f, l, n, t, C, x, A) { this.drawBar(f, l, n, t, C, x, A, !0) }; this.drawBar =
        function (f, l, v, t, C, x, A, D) {
          this.value = f; for (v = this.min; v <= this.max; v += this.increment)x = this.gaugeX + this.gaugeWidth * v / 100, l.fillStyle = this.lineFill, l.lineWidth = n.stroke.size, l.moveTo(x, t - 5), l.lineTo(x, t + this.gaugeHeight + 5), l.stroke(), D && (l.font = this.chart.axes.bottom.labels.format.font.style, A = "" + v + this.markSymbol, l.fillText(A, x - n.textWidth(A) / 2, t - this.txtHeight)); l.fillStyle = C; l.fillRect(this.gaugeX, t, f / 100 * this.gaugeWidth, this.gaugeHeight); this.marks.visible && (l.fillStyle = this.marks.format.font.fill,
            l.font = this.marks.format.font.style, l.fillText(this.value, f / 100 * this.gaugeWidth + 12, t + this.gaugeHeight / 2 - this.marks.format.textHeight("Wj") / 2)); l.strokeStyle = n.stroke.fill; l.lineWidth = n.stroke.size; l.strokeRect(this.gaugeX, t, this.gaugeWidth, this.gaugeHeight)
        }; this.animateGauge = function (f, l, n, t, C, x, A, D, G) {
          var q = this; f != l && (f = Math.abs(f - l) <= this.animationIncrement ? l : f < l ? f + this.animationIncrement : f - this.animationIncrement, G ? this.drawAll(f, D, this.gaugeX, C, n, this.gaugeWidth, this.gaugeHeight) : (D.clearRect(this.gaugeX,
            C, this.gaugeWidth, this.gaugeHeight), this.drawBar(f, D, this.gaugeX, C, n, this.gaugeWidth, this.gaugeHeight, !1)), requestAnimationFrame(function () { return q.animateGauge(f, l, n, t, C, x, A, D, !1) }))
        }; this.draw = function () {
          var f = this.startValue, n = this.chart.ctx, v = this.chart.chartRect.height; this.gaugeWidth = this.chart.chartRect.width - 20; this.gaugeX = this.gaugeHeight = 30; v = (v - this.gaugeHeight) / 2; var t = n.createLinearGradient(0, 0, this.gaugeWidth, 0); t.addColorStop(0, this.gradientColors[0]); t.addColorStop(1, this.gradientColors[1]);
          if (1 == this.animation) { var C = this.finalValue; f == C ? this.drawAll(l, n, this.gaugeX, v, t, this.gaugeWidth, this.gaugeHeight) : this.animateGauge(f, C, t, this.gaugeX, v, this.gaugeWidth, this.gaugeHeight, n, !0) } else this.drawAll(l, n, this.gaugeX, v, t, this.gaugeWidth, this.gaugeHeight)
        }
    }; Tee.LinearGauge.prototype = new Tee.Series;
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <!-- Bootstrap -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.4.1/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/11.0.2/css/bootstrap-slider.min.css"
    rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <script>
    function resize(chart, width) {
      var startWidth = width;
      var startHeight = 278;
      var w;
      var h;

      var canvas = chart.canvas;
      if (chart !== null) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

          w = window.innerWidth;
          h = window.innerHeight;
          if (w <= 991) {
            canvas.style.width = "" + w * 0.9 + "px";
            canvas.style.height = "" + w * 0.9 * startHeight / startWidth + "px";
          }
          else {
            canvas.style.width = "" + startWidth + "px";
            canvas.style.height = "" + startHeight + "px";
            chart.bounds.width = startWidth;
            chart.bounds.height = startHeight;
          }
          chart.draw();
        }
        else {
          w = startWidth;
          h = startHeight;

          if ((window.innerWidth - canvas.offsetLeft - 20) < startWidth)
            w = window.innerWidth - canvas.offsetLeft - 20;
          else
            w = startWidth;

          if ((window.innerWidth * startHeight / startWidth) < startHeight)
            h = window.innerWidth * startHeight / startWidth;
          else
            h = startHeight;

          canvas.setAttribute('width', "" + w + "px");

          canvas.setAttribute('height', "" + h + "px");

          canvas.style.width = "" + w + "px";
          canvas.style.height = "" + h + "px";

          chart.bounds.width = w;
          chart.bounds.height = h;

          chart.draw();
        }
      }
    }
  </script>
  <!--Data JS-->
  <script>
    var profileData =
    {
      "profileData": [
        {
          "measurmentID": "/scanner 1/measurements/moisture/last scan/now/Array",
          "description": "Moisture",
          "scalarData": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            132.26252470628359,
            133.9950043192508,
            132.27456562827152,
            135.87063883033713,
            137.74168587338386,
            131.15030987895696,
            132.88990007151529,
            136.03377104644545,
            142.79070695158652,
            140.90429559465358,
            140.73753492735449,
            133.51753532252053,
            136.98039603946867,
            135.13981466207338,
            139.44372482978491,
            141.89617201187184,
            136.48083815003849,
            137.36831019661761,
            135.56678636011566,
            131.49505378812995,
            137.92806343742194,
            131.25399612951287,
            134.2364217387933,
            128.61747016971739,
            135.3732953286268,
            133.15866361564716,
            143.103557215665,
            139.40976513733941,
            143.62173259211522,
            135.87246055653125,
            132.71413159329777,
            133.05474716524668,
            131.04672863388589,
            132.53153012426381,
            132.99747359925425,
            137.61158254942421,
            129.90811676617531,
            135.30296923575207,
            134.1519723840789,
            131.77358461553422,
            137.99561801207065,
            135.16917261070262,
            136.24302451616558,
            140.06728344407068,
            135.73761502313454,
            136.41071998663404,
            133.76183263494789,
            133.49630210847482,
            129.21221218328495,
            131.55483634828781,
            134.31648594190281,
            139.69203367704904,
            132.71942689866211,
            143.03922747847105,
            133.47777558852954,
            136.12709865319314,
            131.93455773422807,
            139.42772006694275,
            137.29568642692641,
            138.94529935272698,
            139.41551446909318,
            137.00608540976259,
            133.88138363658996,
            137.9460786201378,
            134.32324229738677,
            134.90980044237196,
            133.36436168001555,
            136.24454729974357,
            134.89503062447912,
            126.12760883679945,
            135.03340472981932,
            128.16389445047176,
            138.19161449654777,
            137.03323077569746,
            134.87066919461634,
            132.11548683722026,
            140.85437697621489,
            131.80721327943667,
            138.90475346209811,
            142.50211097815793,
            134.76135457092894,
            138.10198141914569,
            131.66514271031045,
            135.77145376617179,
            133.56882706030822,
            138.4377820602331,
            137.66709024456296,
            137.84626352803906,
            138.4569094575424,
            135.36389141642479,
            138.0277814010077,
            134.77022266975649,
            135.56461945397817,
            132.07844562177468,
            135.19257067611048,
            135.41878948942511,
            133.29027375302397,
            127.85325162840613,
            137.81102392045446,
            135.40304969297847,
            136.77267021751203,
            137.1672835863553,
            137.24424855119284,
            134.6020113168635,
            129.6455196033524,
            128.8394069159441,
            137.38051886720857,
            133.67634019431307,
            141.16829527747282,
            138.51334858847008,
            129.3798920371666,
            136.21059646287964,
            135.85831490767993,
            132.32442429771749,
            143.37297767590127,
            133.47430160196882,
            133.58853777118094,
            135.8308705366108,
            143.76811569098359,
            139.20026305098554,
            137.92790435329522,
            137.7958763821471,
            132.26327650050678,
            133.41025908506418,
            130.44482402384733,
            137.00757581396283,
            135.93362928658419,
            137.82245110505036,
            133.28043751593719,
            138.22636396512226,
            137.7353646162203,
            140.76347346738626,
            135.30954456017147,
            128.79615212056345,
            138.12702981890283,
            134.14229294133389,
            127.53027172220249,
            136.80293339237483,
            137.0396537179717,
            134.20441917041464,
            131.93994570585775,
            133.60925344841155,
            140.38504418452536,
            133.61231513554358,
            137.52918671057861,
            133.59063301660063,
            136.33556215496469,
            134.89341735765729,
            137.54980089738967,
            141.54036760162435,
            133.59538517076581,
            132.58978307436382,
            129.06673860820428,
            131.18724043633677,
            133.95756055477125,
            133.66113585889002,
            143.26045739055658,
            137.20992410711145,
            137.18292983874255,
            136.68313623151207,
            137.9866499518574,
            123.27028195656536,
            145.59359548876662,
            137.90343021175798,
            138.93946306959239,
            130.95274628542174,
            130.16437604833573,
            140.83480995602335,
            132.45135878560203,
            132.86659750486635,
            150.98523992782674,
            140.92477209889705,
            129.26234026659049,
            131.98962136836406,
            134.71542772263825,
            139.01362041040665,
            138.22916431701765,
            141.63069859057751,
            142.97391209023621,
            141.54640040359814,
            144.69229969662322,
            140.69097372397908,
            135.67514088977248,
            131.16940781041032,
            129.71605410832152,
            140.51461056421798,
            131.70546092949763,
            136.06173898217409,
            139.49157577079717,
            137.52228304306433,
            129.97982791538763,
            136.0525343347754,
            134.05363340692162,
            138.0632159112898,
            133.01376578032856,
            129.1728121327788,
            136.40491025612471,
            139.06693722193663,
            135.97179401020688,
            139.19611619097341,
            137.33711026851185,
            137.09996279483167,
            131.98377471605792,
            146.12551908916277,
            138.28918548559267,
            135.06270063404847,
            139.70430449605246,
            132.12468026619379,
            137.27856408641702,
            134.94139853586432,
            130.66541910814217,
            137.90833862346452,
            139.47397826344468,
            131.47711831114592,
            137.80978992536896,
            129.18954645341105,
            137.87553955316508,
            133.68650220208707,
            143.15115454853174,
            137.17083253787448,
            133.50633638435315,
            134.62941980686571,
            134.56840992800352,
            138.33900570470328,
            128.92683821854078,
            133.34382586068216,
            137.95739232318772,
            137.76094450330854,
            133.03671442685169,
            135.97362403380805,
            126.78300918419467,
            136.06275093166084,
            143.11120802301659,
            135.0543919375946,
            137.75354265616653,
            138.09623613571031,
            143.49228269832497,
            136.05548252252331,
            136.82442988534254,
            130.94691462218179,
            144.91861454821242,
            140.41468797232631,
            132.26363182831892,
            144.96911018766124,
            135.66815090433772,
            143.77887330718812,
            129.8449279977,
            124.39360103121766,
            131.84880566325123,
            137.45916166469479,
            136.02397557928632,
            127.27941674397155,
            130.21854619626066,
            131.23582953797023,
            127.92061951234371,
            137.05159175838364,
            132.93137268613089,
            132.41571110752665,
            126.30454311882511,
            139.42389696730558,
            134.50113624922051,
            132.34318397847659,
            137.46597512305891,
            136.65197273039917,
            133.97188464904531,
            140.82565761383685,
            142.29697681932356,
            133.59551453771735,
            143.28790189976394,
            136.2506628401776,
            133.20357152687654,
            137.14379400949275,
            135.8223123152973,
            132.05805184534029,
            132.02268631337134,
            137.06296169829858,
            136.38800377058772,
            135.49713492514954,
            137.62185676111852,
            131.43792403779256,
            133.50468633287241,
            135.56499414532743,
            134.79645452763012,
            133.27107221160398,
            140.16146430954294,
            135.93985394149692,
            130.38244167773803,
            137.3770664972966,
            137.04403078485638,
            141.22831347619646,
            135.60363009559029,
            146.7018750834404,
            134.33230074693603,
            137.82030279335737,
            142.53684824588518,
            141.87360876187989,
            132.68094977855367,
            139.39855100210698,
            137.70247479509368,
            133.61480824537122,
            132.68275225068308,
            138.82997474818276,
            131.27761592452879,
            135.6393806569175,
            133.79869697469536,
            137.61625693871412,
            136.92429043392616,
            136.35271896447387,
            140.00776982657288,
            133.50211336215202,
            144.01207449215895,
            136.46844035983369,
            138.30714615612493,
            132.21807083049686,
            131.7794767617429,
            137.48180093887154,
            137.49476559841631,
            132.3744332854817,
            131.33754117157145,
            129.82855256158049,
            136.96041638152101,
            135.82067582228774,
            132.56492984469753,
            139.36769693271359,
            127.64545135583106,
            130.60102082483505,
            135.09587834145674,
            136.72874929233635,
            138.84150593948166,
            134.64834159983263,
            134.20167669875377,
            142.81334745496957,
            137.54177641924807,
            136.74524843171938,
            141.00337341449455,
            141.40932462043816,
            133.82260278941257,
            135.78388894868181,
            136.64750102633957,
            135.57214275035062,
            139.94409815285894,
            134.46553849111569,
            135.88105526048827,
            132.37832639534466,
            141.76075060837997,
            128.88492472945617,
            138.5365327821018,
            142.25256167549608,
            136.54423462546822,
            136.76655571441697,
            133.9626441822555,
            132.48099110285045,
            139.68160166649165,
            136.88364677523168,
            137.2615363911346,
            135.21118391939859,
            135.15155420516481,
            136.12580150727985,
            139.71698762249264,
            139.78907508610521,
            134.96988737250192,
            140.71634431179828,
            144.7367732978818,
            135.31048653985846,
            134.55405401296079,
            133.69321723227833,
            138.50842121447442,
            133.34211740752025,
            137.37802961975206,
            138.15597119023667,
            131.6344734574129,
            138.90426272750585,
            132.92003320235094,
            139.76303572328362,
            130.79940543321641,
            141.0912564661727,
            136.1033952248325,
            138.01407808426237,
            132.74889065399216,
            134.57823571309487,
            132.38796374102518,
            133.59124679450579,
            135.63331772931,
            132.744033940483,
            136.92235532262106,
            139.69298162172598,
            141.81167906925413,
            144.00482564985288,
            140.25876092430698,
            136.77370376498578,
            138.75179301672722,
            135.78501037663816,
            130.57761542469387,
            140.75823402597533,
            141.29830116156768,
            126.7095271365487,
            132.70066427044549,
            140.84362160087542,
            139.98580322164025,
            134.22052930156858,
            135.68783739593943,
            131.19202692042217,
            135.38938693879595,
            138.23066638942828,
            150.65997477638621,
            127.11888361275726,
            137.09086746952181,
            136.34767658327687,
            141.00471764598436,
            140.25090793068279,
            141.45409027689061,
            134.75112824416465,
            141.5659321262722,
            145.00140943682629,
            141.3330789237846,
            126.6953604714034,
            138.4369780271519,
            135.57478758966832,
            142.88790704393711,
            138.28055799867408,
            138.29144772746415,
            140.80800893592294,
            141.49572309832959,
            138.80910174344763,
            134.19160677680083,
            142.44554750509309,
            129.98240148661768,
            136.09056084634949,
            138.79421901749473,
            138.48568043419567,
            128.18850892957323,
            137.93225911248715,
            139.51208836654223,
            139.51208836654223,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ],
          "rangeArrayData": null,
          "xValues": [
            1.0,
            2.0,
            3.0,
            4.0,
            5.0,
            6.0,
            7.0,
            8.0,
            9.0,
            10.0,
            11.0,
            12.0,
            13.0,
            14.0,
            15.0,
            16.0,
            17.0,
            18.0,
            19.0,
            20.0,
            21.0,
            22.0,
            23.0,
            24.0,
            25.0,
            26.0,
            27.0,
            28.0,
            29.0,
            30.0,
            31.0,
            32.0,
            33.0,
            34.0,
            35.0,
            36.0,
            37.0,
            38.0,
            39.0,
            40.0,
            41.0,
            42.0,
            43.0,
            44.0,
            45.0,
            46.0,
            47.0,
            48.0,
            49.0,
            50.0,
            51.0,
            52.0,
            53.0,
            54.0,
            55.0,
            56.0,
            57.0,
            58.0,
            59.0,
            60.0,
            61.0,
            62.0,
            63.0,
            64.0,
            65.0,
            66.0,
            67.0,
            68.0,
            69.0,
            70.0,
            71.0,
            72.0,
            73.0,
            74.0,
            75.0,
            76.0,
            77.0,
            78.0,
            79.0,
            80.0,
            81.0,
            82.0,
            83.0,
            84.0,
            85.0,
            86.0,
            87.0,
            88.0,
            89.0,
            90.0,
            91.0,
            92.0,
            93.0,
            94.0,
            95.0,
            96.0,
            97.0,
            98.0,
            99.0,
            100.0,
            101.0,
            102.0,
            103.0,
            104.0,
            105.0,
            106.0,
            107.0,
            108.0,
            109.0,
            110.0,
            111.0,
            112.0,
            113.0,
            114.0,
            115.0,
            116.0,
            117.0,
            118.0,
            119.0,
            120.0,
            121.0,
            122.0,
            123.0,
            124.0,
            125.0,
            126.0,
            127.0,
            128.0,
            129.0,
            130.0,
            131.0,
            132.0,
            133.0,
            134.0,
            135.0,
            136.0,
            137.0,
            138.0,
            139.0,
            140.0,
            141.0,
            142.0,
            143.0,
            144.0,
            145.0,
            146.0,
            147.0,
            148.0,
            149.0,
            150.0,
            151.0,
            152.0,
            153.0,
            154.0,
            155.0,
            156.0,
            157.0,
            158.0,
            159.0,
            160.0,
            161.0,
            162.0,
            163.0,
            164.0,
            165.0,
            166.0,
            167.0,
            168.0,
            169.0,
            170.0,
            171.0,
            172.0,
            173.0,
            174.0,
            175.0,
            176.0,
            177.0,
            178.0,
            179.0,
            180.0,
            181.0,
            182.0,
            183.0,
            184.0,
            185.0,
            186.0,
            187.0,
            188.0,
            189.0,
            190.0,
            191.0,
            192.0,
            193.0,
            194.0,
            195.0,
            196.0,
            197.0,
            198.0,
            199.0,
            200.0,
            201.0,
            202.0,
            203.0,
            204.0,
            205.0,
            206.0,
            207.0,
            208.0,
            209.0,
            210.0,
            211.0,
            212.0,
            213.0,
            214.0,
            215.0,
            216.0,
            217.0,
            218.0,
            219.0,
            220.0,
            221.0,
            222.0,
            223.0,
            224.0,
            225.0,
            226.0,
            227.0,
            228.0,
            229.0,
            230.0,
            231.0,
            232.0,
            233.0,
            234.0,
            235.0,
            236.0,
            237.0,
            238.0,
            239.0,
            240.0,
            241.0,
            242.0,
            243.0,
            244.0,
            245.0,
            246.0,
            247.0,
            248.0,
            249.0,
            250.0,
            251.0,
            252.0,
            253.0,
            254.0,
            255.0,
            256.0,
            257.0,
            258.0,
            259.0,
            260.0,
            261.0,
            262.0,
            263.0,
            264.0,
            265.0,
            266.0,
            267.0,
            268.0,
            269.0,
            270.0,
            271.0,
            272.0,
            273.0,
            274.0,
            275.0,
            276.0,
            277.0,
            278.0,
            279.0,
            280.0,
            281.0,
            282.0,
            283.0,
            284.0,
            285.0,
            286.0,
            287.0,
            288.0,
            289.0,
            290.0,
            291.0,
            292.0,
            293.0,
            294.0,
            295.0,
            296.0,
            297.0,
            298.0,
            299.0,
            300.0,
            301.0,
            302.0,
            303.0,
            304.0,
            305.0,
            306.0,
            307.0,
            308.0,
            309.0,
            310.0,
            311.0,
            312.0,
            313.0,
            314.0,
            315.0,
            316.0,
            317.0,
            318.0,
            319.0,
            320.0,
            321.0,
            322.0,
            323.0,
            324.0,
            325.0,
            326.0,
            327.0,
            328.0,
            329.0,
            330.0,
            331.0,
            332.0,
            333.0,
            334.0,
            335.0,
            336.0,
            337.0,
            338.0,
            339.0,
            340.0,
            341.0,
            342.0,
            343.0,
            344.0,
            345.0,
            346.0,
            347.0,
            348.0,
            349.0,
            350.0,
            351.0,
            352.0,
            353.0,
            354.0,
            355.0,
            356.0,
            357.0,
            358.0,
            359.0,
            360.0,
            361.0,
            362.0,
            363.0,
            364.0,
            365.0,
            366.0,
            367.0,
            368.0,
            369.0,
            370.0,
            371.0,
            372.0,
            373.0,
            374.0,
            375.0,
            376.0,
            377.0,
            378.0,
            379.0,
            380.0,
            381.0,
            382.0,
            383.0,
            384.0,
            385.0,
            386.0,
            387.0,
            388.0,
            389.0,
            390.0,
            391.0,
            392.0,
            393.0,
            394.0,
            395.0,
            396.0,
            397.0,
            398.0,
            399.0,
            400.0,
            401.0,
            402.0,
            403.0,
            404.0,
            405.0,
            406.0,
            407.0,
            408.0,
            409.0,
            410.0,
            411.0,
            412.0,
            413.0,
            414.0,
            415.0,
            416.0,
            417.0,
            418.0,
            419.0,
            420.0,
            421.0,
            422.0,
            423.0,
            424.0,
            425.0,
            426.0,
            427.0,
            428.0,
            429.0,
            430.0,
            431.0,
            432.0,
            433.0,
            434.0,
            435.0,
            436.0,
            437.0,
            438.0,
            439.0,
            440.0,
            441.0,
            442.0,
            443.0,
            444.0,
            445.0,
            446.0,
            447.0,
            448.0,
            449.0,
            450.0,
            451.0,
            452.0,
            453.0,
            454.0,
            455.0,
            456.0,
            457.0,
            458.0,
            459.0,
            460.0,
            461.0,
            462.0,
            463.0,
            464.0,
            465.0,
            466.0,
            467.0,
            468.0,
            469.0,
            470.0,
            471.0,
            472.0,
            473.0,
            474.0,
            475.0,
            476.0,
            477.0,
            478.0,
            479.0,
            480.0,
            481.0,
            482.0,
            483.0,
            484.0,
            485.0,
            486.0,
            487.0,
            488.0,
            489.0,
            490.0,
            491.0,
            492.0,
            493.0,
            494.0,
            495.0,
            496.0,
            497.0,
            498.0,
            499.0,
            500.0,
            501.0,
            502.0,
            503.0,
            504.0,
            505.0,
            506.0,
            507.0,
            508.0,
            509.0,
            510.0,
            511.0,
            512.0,
            513.0,
            514.0,
            515.0,
            516.0,
            517.0,
            518.0,
            519.0,
            520.0,
            521.0,
            522.0,
            523.0,
            524.0,
            525.0,
            526.0,
            527.0,
            528.0,
            529.0,
            530.0,
            531.0,
            532.0,
            533.0,
            534.0,
            535.0,
            536.0,
            537.0,
            538.0,
            539.0,
            540.0
          ],
          "min": 160.15030987895696,
          "max": 171.79070695158652,
          "averageData": 165.3079825060039,
          "spreadData": 6.754472505409848,
          "rangeData": 11.640397072629554,
          "setPointData": 29.0,
          "lastScanTime": "2025-04-04T20:31:34.1854208",
          "xUnit": "bins",
          "yUnit": "%",
          "sensorHealth": 0,
          "eventCounter": 12560,
          "status": "green",
          "variance": 0.0,
          "spreadMultiplier": 2.0,
          "id": 1,
          "alarmLowLimit": -9871.0,
          "alarmHighLimit": 9929.0,
          "mode": "Absolute Around Setpoint",
          "elementType": "High",
          "xAxisMinValidIndex": 55.0,
          "xAxisMaxValidIndex": 75.223787815996687,
          "minBasedOnMode": 123.27028195656536,
          "maxBasedOnMode": 150.98523992782674,
          "autoScaleFactor": 2.0,
          "setPointDataWithMode": 0.0,
          "alarmLowLimitBasedOnMode": -9900.0,
          "alarmHighLimitBasedOnMode": 9900.0,
          "displayXMin": 1.0,
          "displayXMax": 540.0,
          "computeXminAndXmax": false,
          "graphColor": "#00FF00",
          "outOfLimitColor": "#FF0000",
          "setpointcolor": "#FFFFFF",
          "limitColor": "#FF0000",
          "zoneProfileColor": "#00FFFF",
          "trimColor": "#FFFFFF",
          "reverseOrientation": false,
          "profileDisplayflip": true,
          "maxPosition": 0,
          "minPosition": 0,
          "lowTrimBucket": 55.0,
          "highTrimBucket": 75.223787815996687,
          "isRangeCursorEnabled": false,
          "minRange": 0.0,
          "maxRange": 0.0,
          "rangeCursorColor": "#FF0000",
          "isZoneProfileEnabled": false,
          "zoneXValues": null,
          "zoneProfileArray": null,
          "setpointArray": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ],
          "actuatorLineEnabled": false,
          "actuatorLineValue": 0.0,
          "actuatorLineMin": 0.0,
          "actuatorLineMax": 0.0,
          "cursorPosition": 0.0,
          "absoluteMax": 171.79070695158652,
          "absoluteMin": 160.15030987895696,
          "isStatZoneEnabled": false,
          "zoneStatics": null,
          "alarmSoftLimits": {
            "alarmSoftLowLimitBasedOnMode": 0.0,
            "alarmSoftHighLimitBasedOnMode": 0.0
          },
          "cpkData": null
        },
        {
          "measurmentID": "/scanner 1/measurements/moisture/last scan/trend/Array",
          "description": "Moisture",
          "scalarData": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            468.87876864145949,
            468.04579584036219,
            467.10529528238771,
            475.48903435700367,
            474.41170621547656,
            469.29697376763943,
            469.9834651065712,
            468.59331857694519,
            468.86420242916495,
            475.63073187277712,
            481.19975539823747,
            465.18650315220077,
            466.04036188635121,
            474.34976133347686,
            471.67306312272513,
            475.99201199296022,
            466.79973323438605,
            473.89714760217282,
            468.49838661735271,
            472.91529839835778,
            470.513916562006,
            463.51041390270507,
            467.48181068344115,
            460.12926285936112,
            476.213951112613,
            467.87536671591931,
            477.98943747556552,
            477.18288829945004,
            467.76375852177728,
            462.46664447253704,
            469.2899460059798,
            470.54140281581169,
            470.77274263661639,
            472.67748543542734,
            472.89298635622492,
            474.25463989029913,
            466.41091002617486,
            468.71813969241452,
            467.03088792569565,
            466.11579907267082,
            471.54223528161606,
            467.39251305292703,
            470.86590342842987,
            464.21968370502884,
            468.92518173485837,
            469.11124456681841,
            471.94687648593958,
            462.6242503620532,
            465.13553103222716,
            465.37622803836621,
            466.32716737672672,
            475.55358148940434,
            456.43359361166108,
            470.44525365900995,
            468.57177644028832,
            469.60769190747988,
            470.06903756463726,
            468.61687942734329,
            469.31655116942375,
            468.99279989063825,
            464.93698764123928,
            473.76607603876437,
            469.417520300913,
            467.12992170761584,
            469.683136590451,
            473.672773572191,
            463.62620250016482,
            462.236099856156,
            464.41297537342905,
            464.30082405064911,
            463.91214391362826,
            463.87869704131549,
            470.82640787949958,
            472.10694386583157,
            475.00103269666613,
            467.63293545305339,
            472.97281618519867,
            466.76771198491235,
            477.31940296584617,
            468.84252111276703,
            469.44750101461921,
            475.00730688299939,
            471.46279278331326,
            472.96230695155145,
            462.810984113814,
            468.13231277928583,
            476.0235692696682,
            475.73687100761924,
            472.90302777298552,
            468.40100549383874,
            475.8912206808036,
            466.17071157477642,
            470.85476067186858,
            466.51641291918168,
            468.82784760322056,
            471.19462263249761,
            468.52808341703235,
            468.32370726800389,
            471.45537219413609,
            465.25183421644181,
            471.57594072175152,
            469.43887877964778,
            472.6128044600232,
            470.31078332163895,
            472.06892915197341,
            467.02717789620783,
            466.27896538819448,
            459.28614260073243,
            475.12591771630161,
            466.91533255602883,
            466.51321440303423,
            468.46666664723671,
            472.52936257314,
            469.39431551911821,
            474.66781051250837,
            469.501616458444,
            474.49774837059795,
            473.81826379758104,
            465.15466903069375,
            475.24795292597514,
            476.81772008197129,
            476.9783155739,
            472.23635128584397,
            466.42656380366384,
            467.82476387665349,
            471.40477348682089,
            467.04992037559293,
            468.39692114468755,
            466.46750379623677,
            468.26805199770092,
            476.00476534268785,
            461.94596611763836,
            471.63097638143483,
            462.89845280737393,
            471.13256498539693,
            473.14619592809197,
            464.64537954489697,
            463.68585345133192,
            472.46102567479727,
            464.64592768453758,
            466.1295913729,
            471.61150122103516,
            471.13061134871032,
            463.06631399564174,
            470.48932754961083,
            461.30468141848758,
            469.37932519916137,
            466.85608957360705,
            470.29033615788126,
            473.14767516486268,
            467.14979788644075,
            467.43037832168284,
            473.05824687308507,
            468.79856037941249,
            472.383676562774,
            463.8004077655462,
            464.95105889225192,
            468.28002139327316,
            466.91399909619986,
            467.1544074893078,
            457.8197307702427,
            463.34737825309,
            473.40200136269516,
            470.81316998153693,
            476.92914593957391,
            470.0565565317288,
            457.27455562676971,
            469.26028917720532,
            469.35396484022851,
            469.59707020803864,
            472.26689592777893,
            468.90943039865181,
            469.18238449777721,
            469.3705274921831,
            468.63744830369103,
            463.148496664909,
            466.00657620851712,
            470.90695631017911,
            468.5801589371473,
            471.08476769771858,
            469.53398017285929,
            473.77452164513227,
            467.50534009384774,
            468.86320259758816,
            470.8131945095846,
            467.64402963066368,
            471.28907494840746,
            469.9078555244954,
            468.80692800333782,
            467.98107113011883,
            464.33230426122566,
            468.60561059299755,
            468.94344962418279,
            470.5622941397088,
            463.89208779387366,
            459.95442439797284,
            474.61203624407437,
            472.7572004565244,
            469.62673300272138,
            465.30665419421018,
            465.10956440278994,
            467.09926001482665,
            468.11815286818705,
            476.50332156684294,
            471.49888875555189,
            462.75758010103482,
            473.1357910815683,
            462.55251112448934,
            471.71935986798735,
            467.85255599158916,
            468.57753833844822,
            474.61185566994914,
            475.974730195068,
            464.86842711779582,
            477.52593882421115,
            461.94733288849875,
            473.80766506770544,
            464.58075068691619,
            478.51122255078724,
            469.157060541692,
            464.37480720661392,
            469.57810165292358,
            469.2749368988367,
            471.72883442550676,
            464.84990889319693,
            465.32937520188329,
            461.00124735113229,
            459.24419411170936,
            464.83747061769384,
            470.33283447594727,
            473.84674613732307,
            468.71741084846951,
            470.12603844459932,
            472.51175221651431,
            472.4047874469228,
            473.14416207188503,
            471.9647210975304,
            471.01525792203017,
            474.85977875112349,
            467.787700253515,
            464.42886247735441,
            476.18760270477446,
            471.03309598314127,
            474.12907939434069,
            466.986783201919,
            478.09626392344478,
            469.73426687799963,
            466.09552768602225,
            464.89430861054211,
            479.30470832313767,
            465.95485091761907,
            468.94693994814031,
            460.12623171678831,
            471.75123817721305,
            473.91319730335374,
            464.13395402752906,
            467.79583263938059,
            470.06971376407637,
            471.19904493359229,
            475.87594256831881,
            472.02378290264107,
            460.60446968917836,
            479.44640838606335,
            465.52647861192213,
            466.23257824692928,
            473.97815830828313,
            476.60211534640882,
            465.55856815434595,
            482.116635706102,
            469.15598037469488,
            463.10590361160632,
            464.23908298726474,
            459.08950546466576,
            466.82076568526736,
            471.18614823765449,
            472.38169298778985,
            472.75234855905705,
            471.65797436503112,
            467.63225763206253,
            473.91874969645312,
            458.10036968762313,
            470.72458734979739,
            473.2391606593593,
            460.792173261985,
            474.03899897895178,
            465.33128122215442,
            468.16463277436924,
            471.01726979147065,
            463.773659032688,
            466.65655413017066,
            465.56791948355715,
            469.69141621864446,
            471.03988752959071,
            468.51092871820788,
            473.61593379332805,
            471.70866842831583,
            461.89551180759577,
            470.86536033129835,
            471.0186283656567,
            465.81267618276161,
            474.03260549919617,
            467.96015041494741,
            465.04692628267935,
            461.95999212863694,
            468.43717003688016,
            464.58087817543333,
            474.62512350202007,
            474.52250930222408,
            469.52900650701577,
            469.30980368958819,
            464.01636411725576,
            469.92561480390657,
            466.55518162523254,
            464.84700810629749,
            459.60080065961063,
            470.79287627246754,
            465.26678442109574,
            469.219630956635,
            465.3366629635243,
            458.23688661517906,
            470.7693630154929,
            468.66776880492569,
            467.74765354751639,
            468.72095345162541,
            466.6056319888412,
            468.26558254980955,
            464.56922723086961,
            474.35346125105013,
            467.08564808983647,
            472.02309813755119,
            462.303825466288,
            474.30446005182171,
            469.01964308460708,
            466.94249686534738,
            469.08383714399781,
            470.74816600073837,
            465.06883117205621,
            468.04710591135427,
            463.83681734452716,
            468.577058821959,
            469.20942147177686,
            476.62591922335969,
            472.9450857921131,
            464.12204608829541,
            469.24991906735306,
            471.32191866427036,
            468.87652987781178,
            474.4821137365376,
            473.41238363930881,
            461.66345387139097,
            471.54757221659327,
            468.39197703835885,
            463.83352221519863,
            475.707776223971,
            468.44757691911343,
            465.31334271500646,
            471.86531952491157,
            467.45884484004523,
            463.40595615232542,
            463.81226818462608,
            468.38353125247568,
            470.98568538244285,
            463.87551481827063,
            469.50062692158963,
            468.87154355624239,
            460.85409245260792,
            463.76502307073304,
            467.04645008043747,
            468.15162539661128,
            478.99796809951943,
            464.08915647062508,
            471.70549751143596,
            477.38181873144561,
            469.62102246428776,
            473.99639540355633,
            471.57064636658379,
            464.61919752611595,
            466.71788165799273,
            470.95420515740534,
            466.85940568411695,
            460.5330131020678,
            472.02431227416366,
            471.73020330007819,
            471.85409086903712,
            474.47300069538085,
            477.18043764124036,
            468.38372776566905,
            468.15680032270086,
            475.92962204189519,
            470.25004171341789,
            474.40473054648885,
            476.21067730362154,
            471.76975308986812,
            465.22941794064866,
            474.47819956873627,
            460.77344478569296,
            467.79825816626442,
            471.12316957850203,
            475.5611901026125,
            474.66912113889464,
            464.86525239489833,
            463.25573140741221,
            467.89968684215717,
            473.18648378988678,
            474.56485747345641,
            474.25439093788611,
            475.4237350085084,
            472.867131676049,
            471.66650361301674,
            475.93667538262969,
            463.35706182303738,
            466.5700126714105,
            472.98926654592935,
            467.98284062209552,
            470.90172937266357,
            468.10493468659206,
            462.69614360043181,
            469.36863095612046,
            471.61114801118481,
            471.72435027658878,
            473.53522805113766,
            467.093213108986,
            476.20307928640545,
            478.3912124623547,
            469.06855057394068,
            472.09888536854316,
            464.58612803988865,
            468.70238379434545,
            473.49977809416453,
            463.84992735284447,
            469.27447861034648,
            468.88306845813361,
            471.81321774466619,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ],
          "rangeArrayData": null,
          "xValues": [
            1.0,
            2.0,
            3.0,
            4.0,
            5.0,
            6.0,
            7.0,
            8.0,
            9.0,
            10.0,
            11.0,
            12.0,
            13.0,
            14.0,
            15.0,
            16.0,
            17.0,
            18.0,
            19.0,
            20.0,
            21.0,
            22.0,
            23.0,
            24.0,
            25.0,
            26.0,
            27.0,
            28.0,
            29.0,
            30.0,
            31.0,
            32.0,
            33.0,
            34.0,
            35.0,
            36.0,
            37.0,
            38.0,
            39.0,
            40.0,
            41.0,
            42.0,
            43.0,
            44.0,
            45.0,
            46.0,
            47.0,
            48.0,
            49.0,
            50.0,
            51.0,
            52.0,
            53.0,
            54.0,
            55.0,
            56.0,
            57.0,
            58.0,
            59.0,
            60.0,
            61.0,
            62.0,
            63.0,
            64.0,
            65.0,
            66.0,
            67.0,
            68.0,
            69.0,
            70.0,
            71.0,
            72.0,
            73.0,
            74.0,
            75.0,
            76.0,
            77.0,
            78.0,
            79.0,
            80.0,
            81.0,
            82.0,
            83.0,
            84.0,
            85.0,
            86.0,
            87.0,
            88.0,
            89.0,
            90.0,
            91.0,
            92.0,
            93.0,
            94.0,
            95.0,
            96.0,
            97.0,
            98.0,
            99.0,
            100.0,
            101.0,
            102.0,
            103.0,
            104.0,
            105.0,
            106.0,
            107.0,
            108.0,
            109.0,
            110.0,
            111.0,
            112.0,
            113.0,
            114.0,
            115.0,
            116.0,
            117.0,
            118.0,
            119.0,
            120.0,
            121.0,
            122.0,
            123.0,
            124.0,
            125.0,
            126.0,
            127.0,
            128.0,
            129.0,
            130.0,
            131.0,
            132.0,
            133.0,
            134.0,
            135.0,
            136.0,
            137.0,
            138.0,
            139.0,
            140.0,
            141.0,
            142.0,
            143.0,
            144.0,
            145.0,
            146.0,
            147.0,
            148.0,
            149.0,
            150.0,
            151.0,
            152.0,
            153.0,
            154.0,
            155.0,
            156.0,
            157.0,
            158.0,
            159.0,
            160.0,
            161.0,
            162.0,
            163.0,
            164.0,
            165.0,
            166.0,
            167.0,
            168.0,
            169.0,
            170.0,
            171.0,
            172.0,
            173.0,
            174.0,
            175.0,
            176.0,
            177.0,
            178.0,
            179.0,
            180.0,
            181.0,
            182.0,
            183.0,
            184.0,
            185.0,
            186.0,
            187.0,
            188.0,
            189.0,
            190.0,
            191.0,
            192.0,
            193.0,
            194.0,
            195.0,
            196.0,
            197.0,
            198.0,
            199.0,
            200.0,
            201.0,
            202.0,
            203.0,
            204.0,
            205.0,
            206.0,
            207.0,
            208.0,
            209.0,
            210.0,
            211.0,
            212.0,
            213.0,
            214.0,
            215.0,
            216.0,
            217.0,
            218.0,
            219.0,
            220.0,
            221.0,
            222.0,
            223.0,
            224.0,
            225.0,
            226.0,
            227.0,
            228.0,
            229.0,
            230.0,
            231.0,
            232.0,
            233.0,
            234.0,
            235.0,
            236.0,
            237.0,
            238.0,
            239.0,
            240.0,
            241.0,
            242.0,
            243.0,
            244.0,
            245.0,
            246.0,
            247.0,
            248.0,
            249.0,
            250.0,
            251.0,
            252.0,
            253.0,
            254.0,
            255.0,
            256.0,
            257.0,
            258.0,
            259.0,
            260.0,
            261.0,
            262.0,
            263.0,
            264.0,
            265.0,
            266.0,
            267.0,
            268.0,
            269.0,
            270.0,
            271.0,
            272.0,
            273.0,
            274.0,
            275.0,
            276.0,
            277.0,
            278.0,
            279.0,
            280.0,
            281.0,
            282.0,
            283.0,
            284.0,
            285.0,
            286.0,
            287.0,
            288.0,
            289.0,
            290.0,
            291.0,
            292.0,
            293.0,
            294.0,
            295.0,
            296.0,
            297.0,
            298.0,
            299.0,
            300.0,
            301.0,
            302.0,
            303.0,
            304.0,
            305.0,
            306.0,
            307.0,
            308.0,
            309.0,
            310.0,
            311.0,
            312.0,
            313.0,
            314.0,
            315.0,
            316.0,
            317.0,
            318.0,
            319.0,
            320.0,
            321.0,
            322.0,
            323.0,
            324.0,
            325.0,
            326.0,
            327.0,
            328.0,
            329.0,
            330.0,
            331.0,
            332.0,
            333.0,
            334.0,
            335.0,
            336.0,
            337.0,
            338.0,
            339.0,
            340.0,
            341.0,
            342.0,
            343.0,
            344.0,
            345.0,
            346.0,
            347.0,
            348.0,
            349.0,
            350.0,
            351.0,
            352.0,
            353.0,
            354.0,
            355.0,
            356.0,
            357.0,
            358.0,
            359.0,
            360.0,
            361.0,
            362.0,
            363.0,
            364.0,
            365.0,
            366.0,
            367.0,
            368.0,
            369.0,
            370.0,
            371.0,
            372.0,
            373.0,
            374.0,
            375.0,
            376.0,
            377.0,
            378.0,
            379.0,
            380.0,
            381.0,
            382.0,
            383.0,
            384.0,
            385.0,
            386.0,
            387.0,
            388.0,
            389.0,
            390.0,
            391.0,
            392.0,
            393.0,
            394.0,
            395.0,
            396.0,
            397.0,
            398.0,
            399.0,
            400.0,
            401.0,
            402.0,
            403.0,
            404.0,
            405.0,
            406.0,
            407.0,
            408.0,
            409.0,
            410.0,
            411.0,
            412.0,
            413.0,
            414.0,
            415.0,
            416.0,
            417.0,
            418.0,
            419.0,
            420.0,
            421.0,
            422.0,
            423.0,
            424.0,
            425.0,
            426.0,
            427.0,
            428.0,
            429.0,
            430.0,
            431.0,
            432.0,
            433.0,
            434.0,
            435.0,
            436.0,
            437.0,
            438.0,
            439.0,
            440.0,
            441.0,
            442.0,
            443.0,
            444.0,
            445.0,
            446.0,
            447.0,
            448.0,
            449.0,
            450.0,
            451.0,
            452.0,
            453.0,
            454.0,
            455.0,
            456.0,
            457.0,
            458.0,
            459.0,
            460.0,
            461.0,
            462.0,
            463.0,
            464.0,
            465.0,
            466.0,
            467.0,
            468.0,
            469.0,
            470.0,
            471.0,
            472.0,
            473.0,
            474.0,
            475.0,
            476.0,
            477.0,
            478.0,
            479.0,
            480.0,
            481.0,
            482.0,
            483.0,
            484.0,
            485.0,
            486.0,
            487.0,
            488.0,
            489.0,
            490.0,
            491.0,
            492.0,
            493.0,
            494.0,
            495.0,
            496.0,
            497.0,
            498.0,
            499.0,
            500.0,
            501.0,
            502.0,
            503.0,
            504.0,
            505.0,
            506.0,
            507.0,
            508.0,
            509.0,
            510.0,
            511.0,
            512.0,
            513.0,
            514.0,
            515.0,
            516.0,
            517.0,
            518.0,
            519.0,
            520.0,
            521.0,
            522.0,
            523.0,
            524.0,
            525.0,
            526.0,
            527.0,
            528.0,
            529.0,
            530.0,
            531.0,
            532.0,
            533.0,
            534.0,
            535.0,
            536.0,
            537.0,
            538.0,
            539.0,
            540.0
          ],
          "min": 163.90408591413822,
          "max": 168.54792906548886,
          "averageData": 165.62266271919549,
          "spreadData": 7.9387391643388883,
          "rangeData": 4.6438431513506373,
          "setPointData": 29.0,
          "lastScanTime": "2025-04-04T20:31:34.1874432",
          "xUnit": "bins",
          "yUnit": "%",
          "sensorHealth": 0,
          "eventCounter": 12560,
          "status": "green",
          "variance": 0.0,
          "spreadMultiplier": 2.0,
          "id": 2,
          "alarmLowLimit": -9871.0,
          "alarmHighLimit": 9929.0,
          "mode": "Percent Around Setpoint",
          "elementType": "High",
          "xAxisMinValidIndex": 55.0,
          "xAxisMaxValidIndex": 75.223787815996687,
          "minBasedOnMode": 456.43359361166108,
          "maxBasedOnMode": 482.116635706102,
          "autoScaleFactor": 2.0,
          "setPointDataWithMode": 0.0,
          "alarmLowLimitBasedOnMode": -34137.931034482761,
          "alarmHighLimitBasedOnMode": 34137.931034482761,
          "displayXMin": 1.0,
          "displayXMax": 540.0,
          "computeXminAndXmax": false,
          "graphColor": "#00FF00",
          "outOfLimitColor": "#FF0000",
          "setpointcolor": "#FFFFFF",
          "limitColor": "#FF0000",
          "zoneProfileColor": "#00FFFF",
          "trimColor": "#FFFFFF",
          "reverseOrientation": false,
          "profileDisplayflip": true,
          "maxPosition": 0,
          "minPosition": 0,
          "lowTrimBucket": 55.0,
          "highTrimBucket": 75.223787815996687,
          "isRangeCursorEnabled": false,
          "minRange": 0.0,
          "maxRange": 0.0,
          "rangeCursorColor": "#FF0000",
          "isZoneProfileEnabled": false,
          "zoneXValues": null,
          "zoneProfileArray": null,
          "setpointArray": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ],
          "actuatorLineEnabled": false,
          "actuatorLineValue": 0.0,
          "actuatorLineMin": 0.0,
          "actuatorLineMax": 0.0,
          "cursorPosition": 0.0,
          "absoluteMax": 168.54792906548886,
          "absoluteMin": 163.90408591413822,
          "isStatZoneEnabled": false,
          "zoneStatics": null,
          "alarmSoftLimits": {
            "alarmSoftLowLimitBasedOnMode": 0.0,
            "alarmSoftHighLimitBasedOnMode": 0.0
          },
          "cpkData": null
        }
      ],
      "timeStamp": 1743769900570
    }



    var severList = [
      {
        "order": 0,
        "lineId": "00000000-0000-0000-0000-000000000000",
        "lineName": "PM 11",
        "serverName": "Localhost",
        "machineStatus": 1,
        "raeStatus": 1,
        "apiStatus": 1,
        "iisStatus": 1,
        "isServiceAvailable": true
      }
    ]

    var controlList = [
      {
        "id": "SCN1",
        "index": 0,
        "recordId": "/scanner 1/",
        "type": "Scanner",
        "modelNumber": "4031-01",
        "assemblyNumber": "09-4031-01",
        "location": "Extensible",
        "computedDescription": "1",
        "description": "Extensible Scanner",
        "shortDescription": "",
        "number": 1,
        "status": {
          "current": "Scanning",
          "isEnabled": true,
          "scanning": true,
          "scanningForTest": false,
          "offsheet": false,
          "localOffsheet": false,
          "offline": false,
          "unavailable": false,
          "dead": false,
          "maintenance": false,
          "measurement": true,
          "calibrate": false,
          "diagnostics": false,
          "stability": false,
          "background": false,
          "reference": false,
          "sample": false,
          "singlePoint": false,
          "singlePointTest": false,
          "bufferedSinglePoint": false,
          "bfrdSptTest": false,
          "scanBldgProfCorr": false,
          "waitingToScan": false,
          "scanTest": false,
          "localControlOnly": false
        }
      },
      {
        "id": "SCN2",
        "index": 1,
        "recordId": "/scanner 2/",
        "type": "Scanner",
        "modelNumber": "Q4000-80",
        "assemblyNumber": "09-4000-80",
        "location": "Reel",
        "computedDescription": "2",
        "description": "Reel",
        "shortDescription": "",
        "number": 2,
        "status": {
          "current": "Scanning",
          "isEnabled": true,
          "scanning": true,
          "scanningForTest": false,
          "offsheet": false,
          "localOffsheet": false,
          "offline": false,
          "unavailable": false,
          "dead": false,
          "maintenance": false,
          "measurement": true,
          "calibrate": false,
          "diagnostics": false,
          "stability": false,
          "background": false,
          "reference": false,
          "sample": false,
          "singlePoint": false,
          "singlePointTest": false,
          "bufferedSinglePoint": false,
          "bfrdSptTest": false,
          "scanBldgProfCorr": false,
          "waitingToScan": false,
          "scanTest": false,
          "localControlOnly": false
        }
      }
    ]


    var measurements = [
      {
        "id": "MS11",
        "recordDataSource": "/scanner 1/measurements/moisture/",
        "type": "MOI",
        "description": "Moisture",
        "sensorSet": "IRSS11"
      }
    ]

    var modes = [
      "Absolute Around Setpoint",
      "Percent Around Setpoint",
      "Absolute Around Average",
      "Percent Around Average",
      "Absolute"
    ]

    var types = [
      {
        "id": "MS11NA",
        "recordDataSource": "/scanner 1/measurements/moisture/last scan/now/",
        "arrayRecordDataSource": "/scanner 1/measurements/moisture/last scan/now/Array",
        "type": "Now",
        "description": "Now",
        "isList": true,
        "elementType": ""
      },
      {
        "id": "MS11TN",
        "recordDataSource": "/scanner 1/measurements/moisture/last scan/trued now/",
        "arrayRecordDataSource": "/scanner 1/measurements/moisture/last scan/trued now/Array",
        "type": "Trued Now",
        "description": "Trued Now",
        "isList": true,
        "elementType": ""
      },
      {
        "id": "MS11FP",
        "recordDataSource": "/scanner 1/measurements/moisture/last scan/trend/",
        "arrayRecordDataSource": "/scanner 1/measurements/moisture/last scan/trend/Array",
        "type": "Trend",
        "description": "Trend",
        "isList": true,
        "elementType": ""
      },
      {
        "id": "MS11LoNA",
        "recordDataSource": "/scanner 1/measurements/moisture/last scan/low res now/",
        "arrayRecordDataSource": "/scanner 1/measurements/moisture/last scan/low res now/Array",
        "type": "Low Res Now",
        "description": "Low Res Now",
        "isList": true,
        "elementType": ""
      },
      {
        "id": "MS11LoFP",
        "recordDataSource": "/scanner 1/measurements/moisture/last scan/low res trend/",
        "arrayRecordDataSource": "/scanner 1/measurements/moisture/last scan/low res trend/Array",
        "type": "Low Res Trend",
        "description": "Low Res Trend",
        "isList": true,
        "elementType": ""
      },
      {
        "id": "MS11RL",
        "recordDataSource": "/scanner 1/measurements/moisture/last scan/mis roll/",
        "arrayRecordDataSource": "/scanner 1/measurements/moisture/last scan/mis roll/Array",
        "type": "MIS roll",
        "description": "MIS roll",
        "isList": true,
        "elementType": ""
      }
    ]

    var intervals = [
      {
        "series": [
          {
            "upperBound": 90,
            "lowerBound": 0
          }
        ],
        "series2": [
          {
            "upperBound": 180,
            "lowerBound": 0
          }
        ]
      }
    ]
  </script>
  <!--Chart JS-->
  <script>
    function SeriesModel(id, indicator, data, horizAxis, vertAxis) {
      var self = this;
      self.id = id;
      self.indicator = indicator;
      self.enabled = ko.observable(true);
      self.visible = ko.observable(true);
      self.data = data;
      self.horizAxis = horizAxis;
      self.vertAxis = vertAxis;
      self.teeChartSeries = null;
      self.upperThreshold = ko.observable(null);
      self.lowerThreshold = ko.observable(null);
      self.thresholdEnabled = ko.observable(true);
      self.thresholdLinesAdded = false;
      self.upperThresholdSeries = null;
      self.lowerThresholdSeries = null;
      self.crossingThreshold = ko.observable(false);
    }

    var Chart1;
    var series;
    var series2;
    var upperThresholdSeries1;
    var upperThresholdSeries2;
    var lowerThresholdSeries1;
    var lowerThresholdSeries2;
    var sliderInitialized = false;
    var upperThreshold = [];
    var lowerThreshold = [];
    var upperThreshold2 = [];
    var lowerThreshold2 = [];
    var tooltipPointer;

    var statistics = [
      { label: "Min", val: "min" },
      { label: "Max", val: "max" },
      { label: "Setpoint", val: "setPointData" },
      { label: "Spread", val: "spreadData" },
      { label: "Range", val: "rangeData" },
      { label: "Average", val: "averageData" },
    ];

    function initChart() {
      changeBackgroundToDark();
      dualAxisChart1(profileData.profileData.length)
    }

    function changeBackgroundToDark() {
      document.body.style.backgroundColor = "#303030";
      document.body.style.color = "#fff";

      var chartContainer = document.getElementById("chartCanvas").parentElement;
      if (chartContainer) {
        chartContainer.style.backgroundColor = "#303030";
      }
    }

    function dualAxisChart1(pointParameterCount) {
      var ctx = document.getElementById("chartCanvas");
      ctx.width = ctx.parentElement.clientWidth;
      ctx.height = 300;

      Chart1 = new Tee.Chart(ctx);
      Chart1.title.visible = false;
      Chart1.zoom.enabled = false;
      Chart1.scroll.enabled = false;

      Chart1.panel.transparent = false;
      Chart1.panel.format.fill = "#303030";
      Chart1.panel.format.gradient.visible = false;

      Chart1.walls.visible = true;
      Chart1.walls.back.visible = true;
      Chart1.walls.back.format.fill = "#303030";
      Chart1.walls.back.format.stroke.fill = "#505050";
      Chart1.walls.back.format.stroke.size = 1;
      Chart1.walls.back.format.gradient.visible = false;
      Chart1.walls.back.format.shadow.visible = false;

      if (Chart1.plot) {
        Chart1.plot.format.fill = "#303030";
      }

      Chart1.axes.left.grid.format.stroke.fill = "#505050";
      Chart1.axes.bottom.grid.format.stroke.fill = "#505050";
      Chart1.axes.right.grid.format.stroke.fill = "#505050";
      Chart1.axes.top.grid.format.stroke.fill = "#505050";

      Chart1.axes.left.labels.format.fill = "#FFFFFF";
      Chart1.axes.right.labels.format.fill = "#FFFFFF";
      Chart1.axes.top.labels.format.fill = "#FFFFFF";
      Chart1.axes.bottom.labels.format.fill = "#FFFFFF";

      Chart1.axes.left.labels.format.font.fill = "#FFFFFF";
      Chart1.axes.right.labels.format.font.fill = "#FFFFFF";
      Chart1.axes.top.labels.format.font.fill = "#FFFFFF";
      Chart1.axes.bottom.labels.format.font.fill = "#FFFFFF";

      Chart1.originalColors = {
        series1: "orange",
        series2: "green",
      };

      Chart1.thresholdColor = "red";

      if (pointParameterCount >= 1) {
        series = Chart1.addSeries(new Tee.Line());
        series.data.x = [];
        series.data.values = [];
        series.horizAxis = "bottom";
        series.vertAxis = "left";
        series.format.stroke.fill = Chart1.originalColors.series1;
        series.format.point = { visible: true, fill: "orange", size: 2 };
      }

      if (pointParameterCount == 2) {
        series2 = Chart1.addSeries(new Tee.Line());
        series2.data.x = [];
        series2.data.values = [];
        series2.horizAxis = "top";
        series2.vertAxis = "right";
        series2.format.stroke.fill = Chart1.originalColors.series2;
        series2.format.point = { visible: true, fill: "green", size: 2 };
      }

      Chart1.axes.left.minorTicks.visible = true;
      Chart1.axes.top.minorTicks.visible = true;
      Chart1.axes.right.minorTicks.visible = true;
      Chart1.axes.bottom.minorTicks.visible = true;

      Chart1.axes.left.innerTicks.visible = true;
      Chart1.axes.top.innerTicks.visible = true;
      Chart1.axes.right.innerTicks.visible = true;
      Chart1.axes.bottom.innerTicks.visible = true;

      Chart1.axes.left.title.text = "Left Axis";
      Chart1.axes.top.title.text = "Top Axis";
      Chart1.legend.visible = false;
      Chart1.axes.left.automatic = false;
      Chart1.axes.right.automatic = false;
      Chart1.axes.left.setMinMax(0, 100);
      Chart1.axes.right.setMinMax(0, 200);

      Chart1.thresholds = {
        series1: { upper: null, lower: null },
        series2: { upper: null, lower: null },
      };

      if (
        intervals &&
        intervals.length > 0 &&
        intervals[0].series &&
        intervals[0].series.length > 0
      ) {
        Chart1.thresholds.series1.upper = intervals[0].series[0].upperBound;
        Chart1.thresholds.series1.lower = intervals[0].series[0].lowerBound;
        upperThresholdSeries1 = Chart1.addSeries(new Tee.Line());
        upperThresholdSeries1.data.values = upperThreshold;
        upperThresholdSeries1.data.x = series.data.x;
        upperThresholdSeries1.format.stroke.fill = Chart1.thresholdColor;
        upperThresholdSeries1.format.stroke.size = 1;
        upperThresholdSeries1.format.stroke.dash = [2, 2];
        upperThresholdSeries1.vertAxis = "left";
        upperThresholdSeries1.horizAxis = "bottom";
        upperThresholdSeries1.visible = false;

        lowerThresholdSeries1 = Chart1.addSeries(new Tee.Line());
        lowerThresholdSeries1.data.values = lowerThreshold;
        lowerThresholdSeries1.data.x = series.data.x;
        lowerThresholdSeries1.format.stroke.fill = Chart1.thresholdColor;
        lowerThresholdSeries1.format.stroke.size = 1;
        lowerThresholdSeries1.format.stroke.dash = [2, 2];
        lowerThresholdSeries1.vertAxis = "left";
        lowerThresholdSeries1.horizAxis = "bottom";
        lowerThresholdSeries1.visible = false;
      }

      if (
        pointParameterCount == 2 &&
        intervals &&
        intervals.length > 0 &&
        intervals[0].series2 &&
        intervals[0].series2.length > 0
      ) {
        Chart1.thresholds.series2.upper = intervals[0].series2[0].upperBound;
        Chart1.thresholds.series2.lower = intervals[0].series2[0].lowerBound;

        upperThresholdSeries2 = Chart1.addSeries(new Tee.Line());
        upperThresholdSeries2.data.values = upperThreshold2;
        upperThresholdSeries2.data.x = series2.data.x;
        upperThresholdSeries2.format.stroke.fill = Chart1.thresholdColor;
        upperThresholdSeries2.format.stroke.size = 1;
        upperThresholdSeries2.format.stroke.dash = [2, 2];
        upperThresholdSeries2.vertAxis = "right";
        upperThresholdSeries2.horizAxis = "top";
        upperThresholdSeries2.visible = false;

        lowerThresholdSeries2 = Chart1.addSeries(new Tee.Line());
        lowerThresholdSeries2.data.values = lowerThreshold2;
        lowerThresholdSeries2.data.x = series2.data.x;
        lowerThresholdSeries2.format.stroke.fill = Chart1.thresholdColor;
        lowerThresholdSeries2.format.stroke.size = 1;
        lowerThresholdSeries2.format.stroke.dash = [2, 2];
        lowerThresholdSeries2.vertAxis = "right";
        lowerThresholdSeries2.horizAxis = "top";
        lowerThresholdSeries2.visible = false;
      }

      tooltipPointer1 = Chart1.addSeries(new Tee.PointXY());
      tooltipPointer1.data.x = [];
      tooltipPointer1.data.values = [];
      tooltipPointer1.format.fill = "red";
      tooltipPointer1.format.stroke.fill = "white";
      tooltipPointer1.format.stroke.size = 2;
      tooltipPointer1.pointer.width = 8;
      tooltipPointer1.pointer.height = 8;
      tooltipPointer1.horizAxis = "bottom";
      tooltipPointer1.vertAxis = "left";
      tooltipPointer1.visible = false;

      tooltipPointer2 = Chart1.addSeries(new Tee.PointXY());
      tooltipPointer2.data.x = [];
      tooltipPointer2.data.values = [];
      tooltipPointer2.format.fill = "red";
      tooltipPointer2.format.stroke.fill = "white";
      tooltipPointer2.format.stroke.size = 2;
      tooltipPointer2.pointer.width = 8;
      tooltipPointer2.pointer.height = 8;
      tooltipPointer2.horizAxis = "top";
      tooltipPointer2.vertAxis = "right";
      tooltipPointer2.visible = false;

      Chart1.draw();
      resize(Chart1, 800);
    }

    function updateSeriesColors(freezSeries1, freezSeries2) {
      if (
        series &&
        series.data.values.length > 0 &&
        Chart1.thresholds &&
        Chart1.thresholds.series1
      ) {
        var thresholdExceeded = false;
        var upper = Chart1.thresholds.series1.upper;
        var lower = Chart1.thresholds.series1.lower;

        if (upper !== null && lower !== null) {
          for (var i = 0; i < series.data.values.length; i++) {
            var value = series.data.values[i];
            if (value > upper || value < lower) {
              thresholdExceeded = true;
              break;
            }
          }
        }
        if (freezSeries1 == true) {
          series.format.stroke.fill = "gray";
          series.format.stroke.dash = [3, 3];
        } else {
          series.format.stroke.fill = thresholdExceeded
            ? Chart1.thresholdColor
            : Chart1.originalColors.series1;
        }
      }
      if (
        series2 &&
        series2.data.values.length > 0 &&
        Chart1.thresholds &&
        Chart1.thresholds.series2
      ) {
        var thresholdExceeded = false;
        var upper = Chart1.thresholds.series2.upper;
        var lower = Chart1.thresholds.series2.lower;

        if (upper !== null && lower !== null) {
          for (var i = 0; i < series2.data.values.length; i++) {
            var value = series2.data.values[i];
            if (value > upper || value < lower) {
              thresholdExceeded = true;
              break;
            }
          }
        }
        if (freezSeries2 == true) {
          series2.format.stroke.fill = "gray";
          series2.format.stroke.dash = [3, 3];
        } else {
          series2.format.stroke.fill = thresholdExceeded
            ? Chart1.thresholdColor
            : Chart1.originalColors.series2;
        }
      }
    }

    function setupBootstrapSlider(chart) {
      if (!chart) {
        console.warn("Chart not initialized yet, will setup slider later");
        return;
      }
      if (sliderInitialized) {
        return;
      }
      try {
        var minimum = findMin(series.data.x, series2.data.x);
        var maximum = findMax(series.data.x, series2.data.x);
        var range = - maximum - minimum;
        var defaultMin = Math.round(minimum + range * 0.2);
        var defaultMax = Math.round(minimum + range * 0.8);

        var slider = new Slider("#rangeSlider", {
          min: minimum,
          max: maximum,
          value: [defaultMin, defaultMax],
          step: Math.max(1, Math.floor(range / 100)),
          tooltip_split: true,
          tooltip: "always",
          range: true,
        });

        slider.on("slide", function (values) {
          var min = values[0];
          var max = values[1];

          if (chart.axes) {
            if (chart.axes.bottom) {
              chart.axes.bottom.setMinMax(min, max);
            }

            if (chart.axes.top) {
              chart.axes.top.setMinMax(min, max);
            }

            var element = document.body;
            var viewModelInstance = ko.dataFor(element);
            if (viewModelInstance) {
              viewModelInstance.sliderMinValue(min);
              viewModelInstance.sliderMaxValue(max);
            }
            chart.draw();
          }
        });
        sliderInitialized = true;
      } catch (e) {
        console.error("Error setting up bootstrap slider:", e);
      }
    }

    function calculateSliderBounds(profileData) {
      if (
        !profileData ||
        !profileData.profileData ||
        !isArray(profileData.profileData)
      ) {
        return { min: 0, max: 1000 };
      }
      var allXValues = [];
      for (var i = 0; i < profileData.profileData.length; i++) {
        var series = profileData.profileData[i];
        if (series && series.xValues && isArray(series.xValues)) {
          for (var j = 0; j < series.xValues.length; j++) {
            allXValues.push(series.xValues[j]);
          }
        }
      }
      if (allXValues.length === 0) {
        return { min: 0, max: 1000 };
      }
      var min = findMin(allXValues);
      var max = findMax(allXValues);
      return { min: min, max: max };
    }

    function isArray(obj) {
      return Object.prototype.toString.call(obj) === "[object Array]";
    }

    function statisticsComputedData(length) {
      var retArray = [];
      var i = 0;
      while (i < statistics.length) {
        var obj = {};
        if (length === 1) {
          obj["header"] = statistics[i].label;
          obj["series1"] = setDecimalPalaces(
            profileData.profileData[0][statistics[i].val]
          );
        } else {
          obj["header"] = statistics[i].label;
          obj["series1"] = setDecimalPalaces(
            profileData.profileData[0][statistics[i].val]
          );
          obj["series2"] = setDecimalPalaces(
            profileData.profileData[1][statistics[i].val]
          );
        }
        retArray.push(obj);
        i += 1;
      }
      return retArray;
    }

    function createLegends(profileData) {
      var legends = [];
      for (var i = 1; i <= profileData.length; i++) {
        legends.push({ id: i, name: "Series" + i });
      }
      return legends;
    }

    function findMin(array, array2) {
      if (!array || array.length === 0) return 0;
      var min = array[0];
      var min2 = array2[0];
      if (array2.length > 0) {
        var minimum = Math.min(min, min2)
        return minimum;
      } else {
        return min;
      }
    }

    function findMax(array, array2) {
      if (!array || array.length === 0) return 0;
      var max = array[array.length - 1];
      var max2 = array2[array2.length - 1];
      if (array2.length > 0) {
        var maximum = Math.min(max, max2)
        return maximum;
      } else {
        return max;
      }
    }

    ko.validation.rules.pattern.message = "Invalid.";
    ko.validation.init(
      {
        decorateElement: true,
        registerExtenders: true,
        messagesOnModified: true,
        insertMessages: false,
        parseInputAttributes: true,
        messageTemplate: null,
        errorElementClass: "error",
        decorateInputElement: true,
        decorateElementOnModified: true, // class to decorate error element
        // errorMessageClass: 'validationMessage',
        allowHtmlMessages: false,
      },
      true
    );



    function viewModel() {
      var self = this;
      // Table Data
      self.statisticsProfileData = ko.observableArray(profileData.profileData);
      self.statisticsComputedData = ko.observable();
      self.seriesCount = ko.observable(profileData.profileData.length);
      self.sliderMinValue = ko.observable();
      self.sliderMaxValue = ko.observable();
      self.seriesConfig = ko.observableArray([]);
      self.showZoomSlider = ko.observable(false);
      self.zoomEnabled = ko.observable(false);
      self.tooltipInitialized = false;
      // y-axis settings
      self.yaxisScaleList = ko.observableArray([
        { id: 1, name: "Auto" },
        { id: 2, name: "Manual" },
        { id: 3, name: "Span" },
      ]);
      self.min = ko.observable().extend({
        required: true,
      });
      self.max = ko.observable().extend({
        required: true,
      });
      self.range = ko.observable().extend({
        required: true,
      });
      self.selectedseries = ko.observable();
      self.selectedYaxisScale = ko.observable();
      self.yaxisSettingShow = ko.observable(false);
      self.yaxiFieldsDisabled = ko.observable(false);
      self.yaxisRangeFieldDisabled = ko.observable(false);
      self.errors = ko.validation.group(self);
      self.showRangeErrors = ko.observable(false);
      self.showMinMaxErrors = ko.observable(false);
      self.selectedFreezSeries = ko.observable();

      self.freezSeries1 = ko.observable(false);
      self.freezSeries2 = ko.observable(false);
      self.tooltipVisible = ko.observable(false);
      self.tooltipElement = null;
      self.currentPointIndex = ko.observable(0);
      self.totalPoints = ko.observable(0);

      self.prevPointDisabled = ko.computed(function () {
        return self.currentPointIndex() <= 0;
      });

      self.nextPointDisabled = ko.computed(function () {
        return self.currentPointIndex() >= self.totalPoints() - 1;
      });

      self.onFreezClick = function (data, event) {
        if (data.id == 1) {
          if (event.target.checked) {
            self.freezSeries1(true);
            series.format.stroke.fill = "gray";
            series.format.stroke.dash = [3, 3];
          } else {
            self.freezSeries1(false);
            series.format.stroke.fill = "green";
            series.format.stroke.dash = [0, 0];
          }
        }

        if (data.id == 2) {
          if (event.target.checked) {
            self.freezSeries2(true);
            series2.format.stroke.fill = "gray";
            series2.format.stroke.dash = [3, 3];
          } else {
            self.freezSeries2(false);
            series2.format.stroke.fill = "orange";
            series2.format.stroke.dash = [0, 0];
          }
        }

        Chart1.draw();
      };

      self.t = 1;
      self.series1Freez = false;
      self.series2Freez = false;

      self.generateRandomPoint = function () {
        if (!series && !series2) {
          clearInterval(self.intervalId);
          return;
        }
        if (series && !self.freezSeries1()) {
          series.data.x.push(self.t);
          series.data.values.push(Math.random() * 100);
          upperThreshold.push(intervals[0].series[0].upperBound);
          lowerThreshold.push(intervals[0].series[0].lowerBound);
          Chart1.series.items[0].horizAxis = "bottom";
          Chart1.getSeries(0).vertAxis = "left";
        }

        if (series2 && !self.freezSeries2()) {
          series2.data.x.push(self.t);
          series2.data.values.push(Math.random() * 100);
          upperThreshold2.push(intervals[0].series2[0].upperBound);
          lowerThreshold2.push(intervals[0].series2[0].lowerBound);
          Chart1.series.items[1].horizAxis = "top";
          Chart1.getSeries(1).vertAxis = "right";
        }

        self.t++;

        if (series && !self.freezSeries1()) {
          Chart1.axes.bottom.setMinMax(1, self.t);
        }
        if (series2 && !self.freezSeries2()) {
          Chart1.axes.top.setMinMax(1, self.t);
        }

        if ((series && !self.freezSeries1()) || (series2 && !self.freezSeries2())) {
          Chart1.draw();
        }

        updateSeriesColors(self.freezSeries1(), self.freezSeries2());

        if (!self.tooltipInitialized) {
          self.isStopped(true);
          self.createTooltip();
          if (series) {
            series.format.point.visible = true;
            series.format.point.size = 5;
          }
          if (series2) {
            series2.format.point.visible = true;
            series2.format.point.size = 5;
          }
          self.setupChartInteraction();
          self.tooltipInitialized = true;

          self.currentPointIndex(0);
          self.showTooltipForPoint(0);
        }
        self.updateTotalPoints();

        var navElement = document.querySelector(".tooltip-navigation");
        if (navElement) {
          var series1Active = series && !self.freezSeries1() && series.visible !== false;
          var series2Active = series2 && !self.freezSeries2() && series2.visible !== false;
          var onlyOneSeries = (series1Active && !series2Active) || (!series1Active && series2Active);
          navElement.style.display = onlyOneSeries ? "block" : "none";
        }
        if (self.tooltipElement && self.tooltipElement.style.display !== "none") {
          self.showTooltipForPoint(self.currentPointIndex());
        }
      };

      self.getActiveClass = function (id) {
        return self.selectedFreezSeries.id == id ? true : false;
      };

      self.canYaxisSave = ko.computed(function () {
        if (self.selectedYaxisScale() && self.selectedYaxisScale().id == 1) {
          return self.selectedseries() && self.selectedYaxisScale() ? true : false;
        } else if (self.selectedYaxisScale() && self.selectedYaxisScale().id == 2) {
          return self.selectedseries() &&
            self.selectedYaxisScale() &&
            self.min() ||
            self.max()
            ? true
            : false;
        } else {
          return self.selectedseries() && self.selectedYaxisScale() && self.range()
            ? true
            : false;
        }
      });

      self.yaxiSubmit = function () {
        self.errors.showAllMessages();
        if (self.selectedYaxisScale().id) {
          if (self.selectedYaxisScale().id == 2) {
            self.updateYaxisChart(
              self.selectedseries().id - 1,
              self.min(),
              self.max(),
              false
            );
          } else if (self.selectedYaxisScale().id == 3) {
            self.updateYaxisChart(
              self.selectedseries().id - 1,
              self.min(),
              self.max(),
              true
            );
          }
          self.yaxisSettingShow(false);
          self.onExpandIconActive(false);
          self.chartClass("col-lg-12 col-md-12 col-sm-12 col-xs-12");
          self.tableClass("");
          resize(Chart1, 1110);
        }
      };

      self.updateYaxisChart = function (yaxisPosition, min, max, range) {
        if (range) {
          if (yaxisPosition == 0) {
            Chart1.axes.left.automatic = false;
            Chart1.axes.left.minimum = Number(min);
            Chart1.axes.left.maximum = Number(min) + Number(self.range());
          } else {
            Chart1.axes.right.automatic = false;
            Chart1.axes.right.minimum = Number(min);
            Chart1.axes.right.maximum = Number(min) + Number(self.range());
          }
        } else {
          if (yaxisPosition == 0) {
            Chart1.axes.left.automatic = false;
            Chart1.axes.left.minimum = Number(min);
            Chart1.axes.left.maximum = Number(max);
          } else {
            Chart1.axes.right.automatic = false;
            Chart1.axes.right.minimum = Number(min);
            Chart1.axes.right.maximum = Number(max);
          }
        }
        Chart1.draw();
        self.setMinAndMaxYAxis1FromChart();
      };

      self.setMinAndMaxYAxis1FromChart = function () {
        if (self.selectedseries().id == 1) {
          var yaxis1 = Chart1.axes["left"];
          self.min(setDecimalPalaces(yaxis1.minimum));
          self.max(setDecimalPalaces(yaxis1.maximum));
        } else {
          var yaxis1 = Chart1.axes["right"];
          self.min(setDecimalPalaces(yaxis1.minimum));
          self.max(setDecimalPalaces(yaxis1.maximum));
        }
      };

      self.setMinAndMaxYAxisFromTable = function () {
        if (self.selectedseries().id == 1) {
          self.min(1);
          self.max(100);
        } else {
          self.min(1);
          self.max(200);
        }
      };

      self.selectedYaxisScaleChange = function (data, event) {
        // self.errors.showAllMessages();
        if (data.selectedYaxisScale().id == 2) {
          // Manual
          self.yaxisRangeFieldDisabled(false);
          self.yaxiFieldsDisabled(true);
          self.setMinAndMaxYAxis1FromChart();
          self.showRangeErrors(false);
          self.showMinMaxErrors(true);
        } else if (data.selectedYaxisScale().id == 1) {
          // Auto
          self.yaxiFieldsDisabled(false);
          self.yaxisRangeFieldDisabled(false);
          self.setMinAndMaxYAxisFromTable();
          self.showRangeErrors(false);
          self.showMinMaxErrors(false);
        } else {
          // Range
          self.yaxiFieldsDisabled(false);
          self.yaxisRangeFieldDisabled(true);
          self.setMinAndMaxYAxis1FromChart();
          self.showRangeErrors(true);
          self.showMinMaxErrors(false);
        }
      };

      self.selectedYaxisSeriesChange = function (data, event) {
        self.selectedYaxisScale(self.yaxisScaleList()[0]);
        self.yaxiFieldsDisabled(false);
        self.yaxisRangeFieldDisabled(false);
        self.setMinAndMaxYAxisFromTable();
      };

      self.seriesConfig = ko.observableArray([]);

      if (profileData && profileData.profileData) {
        for (var i = 0; i < profileData.profileData.length; i++) {
          var seriesData = profileData.profileData[i];
          var indicator = String.fromCharCode(65 + i); // 'A', 'B', etc.
          var horizAxis = i === 0 ? "bottom" : "top";
          var vertAxis = i === 0 ? "left" : "right";

          self.seriesConfig.push(
            new SeriesModel(i + 1, indicator, seriesData, horizAxis, vertAxis)
          );
        }
      }

      self.statisticsComputedData = ko.computed(function () {
        return statisticsComputedData(profileData.profileData.length);
      });

      self.visibleSeries = ko.observableArray(
        createLegends(profileData.profileData)
      );

      self.onSeriesClick = function (data, event) {
        self.toggleSeries(data);
        return true;
      };

      self.toggleSeries = function (seriesConfig) {
        if (ko.isObservable(seriesConfig.enabled)) {
          seriesConfig.enabled(!seriesConfig.enabled());
        } else {
          seriesConfig.enabled = !seriesConfig.enabled;
        }
        var series1Visible;
        var series2Visible;
        try {
          if (cancelSeries1 == true) {
            Chart1.series.items[0].visible = !Chart1.series.items[0].visible;
            series2Visible = Chart1.series.items[0].visible;
            upperThresholdSeries2.visible = series2Visible;
            lowerThresholdSeries2.visible = series2Visible;
            return;
          }
          if (seriesConfig.id == 1) {
            Chart1.series.items[0].visible = !Chart1.series.items[0].visible;
          } else {
            Chart1.series.items[1].visible = !Chart1.series.items[1].visible;
          }

          series1Visible = Chart1.series.items[0].visible;
          series2Visible = Chart1.series.items[1].visible;
          if (upperThresholdSeries1 && lowerThresholdSeries1) {
            upperThresholdSeries1.visible = series1Visible && !series2Visible;
            lowerThresholdSeries1.visible = series1Visible && !series2Visible;
          }

          if (upperThresholdSeries2 && lowerThresholdSeries2) {
            upperThresholdSeries2.visible = !series1Visible && series2Visible;
            lowerThresholdSeries2.visible = !series1Visible && series2Visible;
          }
        } catch (e) {
          console.error("Error in toggleSeries:", e);
        } finally {
          Chart1.draw();
        }
      };

      var cancelSeries1 = false;

      self.cancelSeries = function (seriesConfig, event) {
        if (event) {
          event.stopPropagation();
        }
        ko.isObservable(seriesConfig.visible)
          ? seriesConfig.visible(false)
          : (seriesConfig.visible = false);

        if (seriesConfig.id == 1) {
          if (tooltipPointer1) {
            Chart1.removeSeries(tooltipPointer1);
            tooltipPointer1 = null;
          }
          if (lowerThresholdSeries1) {
            Chart1.removeSeries(lowerThresholdSeries1);
            lowerThresholdSeries1 = null;
          }
          if (upperThresholdSeries1) {
            Chart1.removeSeries(upperThresholdSeries1);
            upperThresholdSeries1 = null;
          }
          if (series) {
            Chart1.removeSeries(series);
            series = null;
          }

          cancelSeries1 = true;

        } else {
          if (tooltipPointer2) {
            Chart1.removeSeries(tooltipPointer2);
            tooltipPointer2 = null;
          }
          if (lowerThresholdSeries2) {
            Chart1.removeSeries(lowerThresholdSeries2);
            lowerThresholdSeries2 = null;
          }
          if (upperThresholdSeries2) {
            Chart1.removeSeries(upperThresholdSeries2);
            upperThresholdSeries2 = null;
          }
          if (series2) {
            Chart1.removeSeries(series2);
            series2 = null;
          }
        }

        if (Chart1.series.items.length == 0) {
          // self.stop();
          if (self.tooltipElement) {
            self.tooltipElement.style.display = "none";
          }
          var navElement = document.querySelector(".tooltip-navigation");
          if (navElement) {
            navElement.style.display = "none";
          }
        }
        Chart1.draw();
      };

      self.toggleZoomSlider = function () {
        if (self.zoomEnabled) {
          self.showZoomSlider(!self.showZoomSlider());
          if (self.showZoomSlider()) {
            setTimeout(function () {
              if (!sliderInitialized && Chart1) {
                setupBootstrapSlider(Chart1);
              }
            }, 100);
          }
        }
      };

      self.updateChart = function () {
        dualAxisChart1(
          profileData.profileData.length,
          true
        );
      };

      self.updateData = function () {
        var newDat = [90, 50, 80, 70, 60];
        updateChart(newDat);
      };

      self.onSettingIconActive = ko.observable(false);
      self.onSettingShow = ko.observable(false);
      self.onTableIconActive = ko.observable(true);
      self.onTableShow = ko.observable(true);
      self.onExpandIconActive = ko.observable(false);
      self.isExpanded = ko.observable(false);

      self.chartClass = ko.observable("col-lg-9 col-md-9 col-sm-9 col-xs-9");
      self.tableClass = ko.observable("col-lg-3 col-md-3 col-sm-3 col-xs-3");

      self.onTableIconClick = function () {
        self.onTableShow(!self.onTableShow());
        self.onTableIconActive(!self.onTableIconActive());
        self.yaxisSettingShow(false);
        self.onExpandIconActive(false);
        if (self.onTableIconActive()) {
          self.chartClass("col-lg-9 col-md-9 col-sm-9 col-xs-9");
          self.tableClass("col-lg-3 col-md-3 col-sm-3 col-xs-3");
          resize(Chart1, 800);
        } else {
          self.chartClass("col-lg-12 col-md-12 col-sm-12 col-xs-12");
          self.tableClass("");
          resize(Chart1, 1110);
        }
      };

      self.onExpandIonClick = function () {
        self.onExpandIconActive(!self.onExpandIconActive());
        self.yaxisSettingShow(true);
        self.onTableShow(false);
        self.onTableIconActive(false);

        if (self.onExpandIconActive()) {
          self.chartClass("col-lg-9 col-md-9 col-sm-9 col-xs-9");
          self.tableClass("col-lg-3 col-md-3 col-sm-3 col-xs-3");
          resize(Chart1, 800);
        } else {
          self.chartClass("col-lg-12 col-md-12 col-sm-12 col-xs-12");
          self.tableClass("");
          resize(Chart1, 1110);
        }

        if (self.selectedseries().id == 1) {
          self.min(
            setDecimalPalaces(
              profileData.profileData[self.selectedseries().id - 1]["min"]
            )
          );
          self.max(
            setDecimalPalaces(
              profileData.profileData[self.selectedseries().id - 1]["max"]
            )
          );
        }

        if (self.selectedYaxisScale().id == 2) {
          // Manual
          self.yaxisRangeFieldDisabled(false);
          self.yaxiFieldsDisabled(true);
          self.setMinAndMaxYAxis1FromChart();
        } else if (self.selectedYaxisScale().id == 1) {
          // Auto
          self.yaxiFieldsDisabled(false);
          self.yaxisRangeFieldDisabled(false);
          self.setMinAndMaxYAxisFromTable();
        } else {
          // Range
          self.yaxiFieldsDisabled(false);
          self.yaxisRangeFieldDisabled(true);
          self.setMinAndMaxYAxis1FromChart();
        }
      };

      self.toggleExpand = function () {
        self.isExpanded(!self.isExpanded());
        setTimeout(function () {
          var ctx = document.getElementById("chartCanvas");
          var container = ctx.parentElement;
          ctx.width = container.clientWidth;
          ctx.height = container.clientHeight;
          self.updateChart();
        }, 100);
      };

      self.resizeGrid = function () {
        alert("Grid resized!");
      };

      self.intervalId = setInterval(self.generateRandomPoint, 1000);
      var range;
      var initialMin;
      var initialMax;

      self.stop = function () {
        clearInterval(self.intervalId);
        self.zoomEnabled(true);
        var minimum = findMin(series.data.x, series2.data.x);
        var maximum = findMax(series.data.x, series2.data.x);
        range = maximum - minimum;
        initialMin = Math.round(minimum + range * 0.2);
        initialMax = Math.round(minimum + range * 0.8);
        self.sliderMinValue(initialMin);
        self.sliderMaxValue(initialMax);
      };

      self.createTooltip = function () {
        if (!self.tooltipElement) {
          self.tooltipElement = document.createElement("div");
          self.tooltipElement.className = "custom-tooltip";
          document.body.appendChild(self.tooltipElement);
        }
      };

      self.setupChartInteraction = function () {
        var canvas = document.getElementById("chartCanvas");
        canvas.onclick = function (event) {
          var rect = canvas.getBoundingClientRect();
          var x = event.clientX - rect.left;
          var y = event.clientY - rect.top;
          var closestPoint = self.findClosestPoint(x, y);
          if (closestPoint) {
            self.showTooltipForPoint(closestPoint.index);
            if (tooltipPointer) {
              var seriesData = closestPoint.series.data;
              var xValue = seriesData.x && seriesData.x[closestPoint.index] ? seriesData.x[closestPoint.index] : closestPoint.index;
              var yValue = seriesData.values[closestPoint.index];

              tooltipPointer.data.x = [xValue];
              tooltipPointer.data.values = [yValue];
              tooltipPointer.horizAxis = closestPoint.seriesIndex === 0 ? "bottom" : "top";
              tooltipPointer.vertAxis = closestPoint.seriesIndex === 0 ? "left" : "right";
              tooltipPointer.visible = true;
            }
            self.showTooltipForPoint(closestPoint.index);
          }
        };
        canvas.onmousemove = function (event) {
          var rect = canvas.getBoundingClientRect();
          var x = event.clientX - rect.left;
          var y = event.clientY - rect.top;
          var closestPoint = self.findClosestPoint(x, y);
          if (closestPoint) {
            canvas.style.cursor = "pointer";
          } else {
            canvas.style.cursor = "default";
          }
        };
      };

      self.findClosestPoint = function (mouseX, mouseY) {
        if (!Chart1) return null;
        var closestDistance = Number.MAX_VALUE;
        var closestPoint = null;

        if (series && series.data && series.data.values && !self.freezSeries1()) {
          for (var i = 0; i < series.data.values.length; i++) {
            var xVal = series.data.x && series.data.x[i] ? series.data.x[i] : i;
            var yVal = series.data.values[i];
            var xAxis = Chart1.axes.bottom;
            var yAxis = Chart1.axes.left;
            var x = xAxis.calc(xVal);
            var y = yAxis.calc(yVal);
            var distance = Math.sqrt(Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2));

            if (distance < closestDistance && distance < 20) {
              closestDistance = distance;
              closestPoint = {
                series: series,
                index: i,
                seriesIndex: 0,
                x: x,
                y: y
              };
            }
          }
        }

        if (series2 && series2.data && series2.data.values && !self.freezSeries2()) {
          for (var i = 0; i < series2.data.values.length; i++) {
            var xVal = series2.data.x && series2.data.x[i] ? series2.data.x[i] : i;
            var yVal = series2.data.values[i];
            var xAxis = Chart1.axes.top;
            var yAxis = Chart1.axes.right;
            var x = xAxis.calc(xVal);
            var y = yAxis.calc(yVal);
            var distance = Math.sqrt(Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2));

            if (distance < closestDistance && distance < 20) {
              closestDistance = distance;
              closestPoint = {
                series: series2,
                index: i,
                seriesIndex: 1,
                x: x,
                y: y
              };
            }
          }
        }

        return closestPoint;
      };

      self.getLatestPointIndex = function () {
        var series1Length = series && series.data && series.data.values ? series.data.values.length : 0;
        var series2Length = series2 && series2.data && series2.data.values ? series2.data.values.length : 0;
        return Math.max(series1Length - 1, series2Length - 1);
      };

      self.showTooltipForPoint = function (index) {
        if (!Chart1 || !self.tooltipElement) return;

        var visibleSeriesCount = 0;
        var series1Active = false;
        var series2Active = false;

        if (series && Chart1.series.items.length > 0 &&
          Chart1.series.items[0].horizAxis === "bottom" &&
          Chart1.series.items[0].visible !== false &&
          !self.freezSeries1() &&
          Chart1.series.items[0].data &&
          Chart1.series.items[0].data.values &&
          index < Chart1.series.items[0].data.values.length) {
          series1Active = true;
          visibleSeriesCount++;
        }

        if (series2 && Chart1.series.items.length > 1 &&
          Chart1.series.items[1].horizAxis === "top" &&
          Chart1.series.items[1].visible !== false &&
          !self.freezSeries2() &&
          Chart1.series.items[1].data &&
          Chart1.series.items[1].data.values &&
          index < Chart1.series.items[1].data.values.length) {
          series2Active = true;
          visibleSeriesCount++;
        }

        if (visibleSeriesCount === 0) {
          self.tooltipElement.style.display = "none";
          return;
        }

        var tooltipContent = '<div style="font-weight:bold;margin-bottom:5px;">Point ' + (index + 1) + "</div>";
        var tooltipX = 0, tooltipY = 0;
        var primarySeries, primarySeriesIndex;

        if (tooltipPointer1) {
          tooltipPointer1.data.x = [];
          tooltipPointer1.data.values = [];
          tooltipPointer1.visible = false;
        }
        if (tooltipPointer2) {
          tooltipPointer2.data.x = [];
          tooltipPointer2.data.values = [];
          tooltipPointer2.visible = false;
        }

        if (series1Active) {
          var xValue1 = series.data.x && series.data.x.length > index ? series.data.x[index] : index;
          var yValue1 = series.data.values[index];

          tooltipContent += '<div class="tooltip-series-1">Series 1: ' + yValue1.toFixed(2) + "</div>";

          var x1 = Chart1.axes.bottom.calc(xValue1);
          var y1 = Chart1.axes.left.calc(yValue1);

          tooltipX = x1;
          tooltipY = y1;
          primarySeries = series;
          primarySeriesIndex = 0;

          if (tooltipPointer1) {
            tooltipPointer1.data.x = [xValue1];
            tooltipPointer1.data.values = [yValue1];
            tooltipPointer1.visible = true;
          }
        }

        if (series2Active) {
          var xValue2 = series2.data.x && series2.data.x.length > index ? series2.data.x[index] : index;
          var yValue2 = series2.data.values[index];

          tooltipContent += '<div class="tooltip-series-2">Series 2: ' + yValue2.toFixed(2) + "</div>";

          var x2 = Chart1.axes.top.calc(xValue2);
          var y2 = Chart1.axes.right.calc(yValue2);

          if (!series1Active) {
            tooltipX = x2;
            tooltipY = y2;
            primarySeries = series2;
            primarySeriesIndex = 1;
          }

          if (tooltipPointer2) {
            tooltipPointer2.data.x = [xValue2];
            tooltipPointer2.data.values = [yValue2];
            tooltipPointer2.visible = true;
          }
        }

        var canvas = document.getElementById("chartCanvas");
        var canvasRect = canvas.getBoundingClientRect();

        self.tooltipElement.innerHTML = tooltipContent;
        self.tooltipElement.style.left =
          Math.round(canvasRect.left + tooltipX + window.pageXOffset) + "px";
        self.tooltipElement.style.top =
          Math.round(canvasRect.top + tooltipY + window.pageYOffset - 60) + "px";
        self.tooltipElement.style.display = "block";
        self.updateSeriesHighlights(index);
        self.updateTotalPoints();
        var navElement = document.querySelector(".tooltip-navigation");
        if (navElement) {
          var onlyOneSeries =
            (series1Active && !series2Active) || (!series1Active && series2Active);
          navElement.style.display = onlyOneSeries ? "block" : "none";
        }
        self.currentPointIndex(index);
        Chart1.draw();
      };

      self.updateTotalPoints = function () {
        var series1Active =
          series &&
          series.data &&
          series.data.values &&
          !self.freezSeries1() &&
          series.visible !== false;
        var series2Active =
          series2 &&
          series2.data &&
          series2.data.values &&
          !self.freezSeries2() &&
          series2.visible !== false;

        var count = 0;
        if (series1Active && !series2Active) {
          count = series.data.values.length;
        } else if (!series1Active && series2Active) {
          count = series2.data.values.length;
        } else if (series1Active && series2Active) {
          count = Math.max(series.data.values.length, series2.data.values.length);
        }
        self.totalPoints(count);
      };

      self.updateSeriesHighlights = function (selectedIndex) {
        if (!Chart1) return;

        if (series && Chart1.series.items.length > 0) {
          var s1 = Chart1.series.items[0];
          s1.ongetpoint = function (index) {
            if (
              index === selectedIndex &&
              !self.freezSeries1() &&
              s1.visible !== false
            ) {
              return {
                fill: "red",
                stroke: "white",
                size: 8,
              };
            }
            return null;
          };
        }

        if (series2 && Chart1.series.items.length > 1) {
          var s2 = Chart1.series.items[1];
          s2.ongetpoint = function (index) {
            if (
              index === selectedIndex &&
              !self.freezSeries2() &&
              s2.visible !== false
            ) {
              return {
                fill: "red",
                stroke: "white",
                size: 8,
              };
            }
            return null;
          };
        }
      };

      self.navigatePreviousPoint = function () {
        if (self.currentPointIndex() > 0) {
          self.currentPointIndex(self.currentPointIndex() - 1);
          self.showTooltipForPoint(self.currentPointIndex());
        }
      };

      self.navigateNextPoint = function () {
        if (self.currentPointIndex() < self.totalPoints() - 1) {
          self.currentPointIndex(self.currentPointIndex() + 1);
          self.showTooltipForPoint(self.currentPointIndex());
        }
      };

      self.tooltipVisible = ko.observable(false);
      self.tooltipElement = null;
      self.currentPointIndex = ko.observable(0);
      self.totalPoints = ko.observable(0);
      self.isStopped = ko.observable(false);

      self.prevPointDisabled = ko.computed(function () {
        return self.currentPointIndex() <= 0;
      });

      self.nextPointDisabled = ko.computed(function () {
        return self.currentPointIndex() >= self.totalPoints() - 1;
      });

      if (self.counter == 2000) {
        clearInterval(self.intervalId);
      }
    }

    function setDecimalPalaces(num) {
      return num % 1 === 0 ? num : num.toFixed(3);
    }

    window.onload = function () {
      try {
        initChart();
        ko.applyBindings(new viewModel());
      } catch (e) {
        console.error("Error during initialization:", e);
      }
    };
  </script>

  <script type="text/html" id="yaxis-template">
  <form data-bind="submit:yaxiSubmit">
    <div class="row">
      <div class="col-md-12">
        <select class="col-md-12 selectBox"
          data-bind="options:$root.visibleSeries, optionsText: 'name', value: selectedseries,event:{ change: selectedYaxisSeriesChange}"></select>
      </div>
      <div class="col-md-12 formField">
        <select class="col-md-12 selectBox"
          data-bind="options:$root.yaxisScaleList, optionsText: 'name', value: selectedYaxisScale,  event:{ change: selectedYaxisScaleChange}"></select>
     </div>
      <div class="col-md-12">
        <label for="usr">Min</label>
        <input type="number" class="form-control inputBox" id="min"
          data-bind="value: min, enable: yaxiFieldsDisabled()">
        <span class="validationMessage"
          data-bind="validationMessage: min, visible:min.isModified() && !min.isValid()"></span>
      </div>
      <div class="col-md-12">
        <label for="max">Max</label>
        <input type="number" class="form-control inputBox" id="max"
          data-bind="value: max, enable: yaxiFieldsDisabled()">
        <span class="validationMessage"
          data-bind="validationMessage: max, visible: max.isModified() && !max.isValid()"></span>
      </div>
      <div class="col-md-12">
        <label for="range">Range </label>
        <input type="number" class="form-control inputBox" id="range"
          data-bind="value: range, enable: yaxisRangeFieldDisabled()" required>
        <span data-bind="validationMessage: range, visible:showRangeErrors()"></span>
      </div>
    </div>

    <div class="row formField" style="text-align: center;">
      <button type="submit" class="btn btn-primary" data-bind="enable : canYaxisSave()">Apply</button>
    </div>
  </form>
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/11.0.2/bootstrap-slider.min.js"></script>

  <style>
    .table {
      background-color: black;
      height: 279px;
      border: 1px solid #404040 !important;
      text-align: center;
    }

    .panel {
      background-color: #404040 !important;
      background: #404040 !important
    }

    .btn-transperent {
      background-color: #868686 !important;
      border: 1px solid !important;
      border-radius: 8px !important;
      color: black !important
    }


    .btnActive {
      background-color: #01579b !important;
      color: white !important
    }

    .selectBox {
      background: black;
      padding: 8px;
      border-radius: 5px;
    }

    .formField {
      padding-top: 5px;
    }

    .alert-msg {
      font-size: 16px;
    }

    .headline {
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
      margin: 0 0 16px;
      color: #7d818c !important;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    .sub-heading {
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      margin: 0 0 16px;
      color: #7d818c !important;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    .text-center {
      text-align: center;
    }

    .chart-add {
      color: #303030 !important;
      font-size: 90px;
    }


    .seriesbutton {
      margin: 10px 0;
      zoom: 1;
      overflow: hidden;
    }

    .seriesbutton .scanner-tab.series-btn {
      float: left;
      margin-right: 10px;
    }

    .scanner-tab.series-btn {
      background-color: #4a4a4a;
      padding: 5px 10px;
      font-family: Arial, sans-serif;
      font-size: 12px;
      color: #ffffff;
      cursor: pointer;
      text-align: left;
      min-width: 200px;
      position: relative;
      display: inline-block;
      zoom: 1;
    }

    .tab-indicator {
      background-color: #e67e22;
      width: 22px;
      height: 22px;
      float: left;
      margin-right: 10px;
      font-weight: bold;
      text-align: center;
      line-height: 22px;
    }

    .tab-text {
      float: left;
      white-space: nowrap;
      overflow: hidden;
      width: 140px;
    }

    .tab-status-indicator {
      width: 8px;
      height: 8px;
      margin: 0 10px;
      position: relative;
      float: left;
    }

    .tab-status-indicator.active {
      background-color: #2ecc71;
    }

    .tab-status-indicator.inactive {
      background-color: #e74c3c;
    }

    .btn-inactive {
      filter: alpha(opacity=90);
      opacity: 0.9;
    }

    .tab-close {
      color: #aaaaaa;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      margin-left: 5px;
      opacity: 0;
      filter: alpha(opacity=0);
      position: relative;
      z-index: 2;
      float: right;
    }

    .scanner-tab.series-btn:hover .tab-close {
      opacity: 1;
      filter: alpha(opacity=100);
      color: #ffffff;
    }

    .slider-container {
      display: inline-block;
      width: 400px;
      margin: 0 15px;
      vertical-align: middle;
      position: relative;
      height: 60px;
      zoom: 1;
    }

    .slider-info {
      margin-top: 5px;
      font-size: 12px;
      color: #aaa;
      text-align: center;
    }

    .panel-heading {
      padding: 10px 15px;
      zoom: 1;
      overflow: hidden;
    }

    .buttons-container {
      float: right;
    }

    .seriesbutton {
      float: left;
    }

    .slider-track {
      height: 10px !important;
      margin-top: -5px !important;
      background: #e9e9e9 !important;
      border-radius: 5px !important;
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1) !important;
    }

    .slider-selection {
      background: #3498db !important;
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1) !important;
    }

    .slider-handle {
      background: #2980b9 !important;
      margin-left: -10px !important;
      margin-top: -5px !important;
      height: 20px !important;
      width: 20px !important;
      border: 1px solid rgba(0, 0, 0, 0.1) !important;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !important;
      transition: background 0.15s ease-in-out !important;
    }

    .slider-handle:hover {
      background: #3498db !important;
    }

    .slider {
      width: 200px !important;
    }

    .slider-container {
      padding: 8px 0;
    }

    .threshold-indicator {
      margin-left: 10px;
      float: left;
      animation: pulse 1.5s infinite;
    }

    .selected {
      background-color: #01579b !important;
      color: white !important
    }

    .validationMessage {
      color: red;
    }

    .error {
      border-color: red;
    }

    .tooltip-navigation {
      margin-top: 15px;
      text-align: center;
      display: none;
    }

    .tooltip-nav-button {

      background-color: #01579b;
      color: white;
      border: 1px solid;
      border-radius: 8px;
      cursor: pointer;
    }

    .tooltip-nav-button:hover:not(:disabled) {
      background-color: #01579b;
    }

    .tooltip-nav-button:disabled {
      background-color: #868686;
      cursor: not-allowed;
    }

    .custom-tooltip {
      position: absolute;
      z-index: 1000;
      background-color: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 10px;
      border: 1px solid;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      pointer-events: none;
      min-width: 120px;
      font-size: 12px;
      display: none;
    }

    .tooltip-series-1 {
      color: orange;
      margin-bottom: 5px;
    }

    .tooltip-series-2 {
      color: green;
    }

    .clearfix::after {
      content: "";
      clear: both;
      display: table;
    }

    .float-left {
      float: left;
    }

    .float-right {
      float: right;
    }

    .dropdown-menu {
      max-height: 150px;
      overflow-y: auto;
      background-color: #404040;
      border: 1px solid #333;
      min-width: 120px;
      position: relative;
    }

    .dropdown-menu li {
      padding: 3px 0;
    }

    .dropdown-menu li label {
      color: white;
      margin: 0;
      cursor: pointer;
      white-space: nowrap;
    }

    .panel-heading button {
      margin-left: 5px;
    }

    .dropdown-menu li input[type="checkbox"] {
      vertical-align: middle;
    }

    body,
    .panel,
    .panel-body,
    .panel-heading {
      background-color: #303030 !important;
      color: #fff !important;
    }

    .panel {
      border-color: #505050 !important;
    }

    #chartCanvas,
    #chartCanvas-container {
      background-color: #303030 !important;
    }
  </style>
</head>

<body>
  <div class="container" role="main">
    <div class="page-title">
      <div class="title_left">
        <h3>Profile Control</h3>
      </div>
    </div>
    <div class="panel">
      <div class="panel-heading clearfix">
        <div class="float-left" style="display: inline-block; margin-right: 15px;">
          <div id="seriesButtonContainer" data-bind="foreach: seriesConfig" class="seriesbutton">
            <div data-bind="click: $parent.onSeriesClick, 
                         css: enabled() ? 'btn-active' : 'btn-inactive', 
                         visible: visible" class="scanner-tab series-btn">
              <span class="tab-indicator" data-bind="text: indicator"></span>
              <span class="tab-text">
                Series <span data-bind="text: id"></span>:
                <span data-bind="text: enabled() ? 'Enabled' : 'Disabled'"></span>
              </span>
              <span data-bind="css: enabled() ? 'tab-status-indicator active' : 'tab-status-indicator inactive'"></span>
              <span class="tab-close"
                data-bind="click: function(data, event) { event.stopPropagation(); $parent.cancelSeries(data); }">
                ×
              </span>
            </div>
          </div>
        </div>

        <div class="float-right" style="display: inline-block;">
          <button class="btn btn-transperent" data-bind="click:$root.stop">Stop</button>

          <div class="dropdown" style="display: inline-block; margin-left: 5px;">
            <button class="btn btn-transperent dropdown-toggle" type="button" id="chartDropdown" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              <span class="fa-solid fa-chart-simple" aria-hidden="true"></span>
              <span class="caret"></span>
            </button>

            <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="chartDropdown"
              data-bind="foreach: $root.visibleSeries" style="max-height: 150px; overflow-y: auto;">
              <li>
                <label style="display: block; padding: 3px 10px; margin: 0; white-space: nowrap;">
                  <input type="checkbox" data-bind="event:{ change: $root.onFreezClick}, css: 'btnActive'"
                    style="margin-right: 5px;" />
                  <span data-bind="text: name,style: { color: id == 1 ? 'orange' : 'green' }"></span>
                </label>
              </li>
            </ul>
          </div>

          <button type="button" class="btn btn-transperent" style="margin-left: 5px;"
            data-bind="click: $root.onTableIconClick, css : {'btnActive' : onTableIconActive}, enable : visibleSeries().length != 0">
            <span class="fa fa-table" aria-hidden="true"></span>
          </button>

          <button type="button" class="btn btn-transperent" style="margin-left: 5px;"
            data-bind="click: $root.onExpandIonClick, css : {'btnActive' : onExpandIconActive}, enable : visibleSeries().length != 0">
            <span class="fa fa-expand" aria-hidden="true"></span>
          </button>

          <button type="button" class="btn btn-light btn-transperent" style="margin-left: 5px;"
            data-bind="click: toggleZoomSlider, css : {'btnActive' : showZoomSlider} , enable: zoomEnabled"">
            <span class=" fa fa-search-plus" aria-hidden="true"></span>
          </button>
        </div>

        <div class="tooltip-navigation" style="display: none; text-align: center; margin-top: 10px; clear: both;">
          <button class="tooltip-nav-button" data-bind="click: navigatePreviousPoint, disable: prevPointDisabled">
            <i class="fa fa-arrow-left"></i>
          </button>
          <span data-bind="text: 'Point ' + (currentPointIndex() + 1) + ' of ' + totalPoints()"></span>
          <button class="tooltip-nav-button" data-bind="click: navigateNextPoint, disable: nextPointDisabled">
            <i class="fa fa-arrow-right"></i>
          </button>
        </div>

        <div class="slider-container" style="clear: both; padding-top: 10px; width: 100%;"
          data-bind="visible: showZoomSlider">
          <input id="rangeSlider" type="text" style="width: 100%;" />
        </div>
      </div>
      <div class="panel-body">
        <div class="row">
          <div data-bind="attr: { 'class': chartClass }">
            <canvas id="chartCanvas"></canvas>
          </div>
          <div data-bind="attr: { 'class': tableClass }">
            <div data-bind="if: $root.onTableShow">
              <table class="table table-bordered table-dark">
                <tbody data-bind="foreach: $root.statisticsComputedData()">
                  <tr data-bind="if: $root.seriesCount() == 1">
                    <td style="font-weight: 400;" data-bind="text: header"></td>
                    <td style="font-weight: 600;" data-bind="text: series1"></td>
                  </tr>
                  <tr data-bind="if: $root.seriesCount() > 1">
                    <td style="font-weight: 400;" data-bind="text: header"></td>
                    <td style="font-weight: 600;" data-bind="text: series1"></td>
                    <td style="font-weight: 600;" data-bind=" text: series2"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div data-bind="if: $root.yaxisSettingShow">
              <div data-bind="template: { name: 'yaxis-template' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--Utils-->
  </body>
</html>
