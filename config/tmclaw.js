var tmImage = function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    return n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) n.d(r, o, function(e) {
                return t[e]
            }.bind(null, o));
        return r
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 8)
}([function(t, e) {
    t.exports = function() {
        throw new Error("define cannot be used indirect")
    }
}, function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function(t, e) {
    (function(e) {
        t.exports = e
    }).call(this, {})
}, function(t, e) {
    t.exports = tf
}, function(t, e, n) {
    "use strict";
    var r = this && this.__awaiter || function(t, e, n, r) {
            return new(n || (n = Promise))((function(o, i) {
                function a(t) {
                    try {
                        u(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function s(t) {
                    try {
                        u(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function u(t) {
                    var e;
                    t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                        t(e)
                    }))).then(a, s)
                }
                u((r = r.apply(t, e || [])).next())
            }))
        },
        o = this && this.__generator || function(t, e) {
            var n, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }), i;

            function s(i) {
                return function(s) {
                    return function(i) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1], o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2], a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            i = e.call(t, a)
                        } catch (t) {
                            i = [6, t], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(3),
        a = n(3),
        s = n(5),
        u = n(6),
        c = n(7);
    e.IMAGE_SIZE = 224;
    var l = function(t) {
            return t.packageVersion = t.packageVersion || c.version, t.packageName = t.packageName || "@teachablemachine/image", t.timeStamp = t.timeStamp || (new Date).toISOString(), t.userMetadata = t.userMetadata || {}, t.modelName = t.modelName || "untitled", t.labels = t.labels || [], t
        },
        f = function(t, e) {
            if (1 === t) {
                if (.25 !== e && .5 !== e && .75 !== e && 1 !== e) return console.warn("Invalid alpha. Options are: 0.25, 0.50, 0.75 or 1.00."), console.log("Loading model with alpha: ", .25.toFixed(2)), .25
            } else if (.35 !== e && .5 !== e && .75 !== e && 1 !== e) return console.warn("Invalid alpha. Options are: 0.35, 0.50, 0.75 or 1.00."), console.log("Loading model with alpha: ", .35.toFixed(2)), .35;
            return e
        },
        d = function(t) {
            if ((t = t || {}).checkpointUrl && t.trainingLayer) return (t.alpha || t.version) && console.warn("Checkpoint URL passed to modelOptions, alpha options are ignored"), [t.checkpointUrl, t.trainingLayer];
            if (t.version = t.version || 1, 1 === t.version) {
                t.alpha = t.alpha || .25, t.alpha = f(t.version, t.alpha), console.log("Loading mobilenet " + t.version + " and alpha " + t.alpha);
                var n = t.alpha.toFixed(2);
                return "1.00" === n && (n = "1.0"), ["https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_" + n + "_" + e.IMAGE_SIZE + "/model.json", "conv_pw_13_relu"]
            }
            if (2 === t.version) return t.alpha = t.alpha || .35, t.alpha = f(t.version, t.alpha), console.log("Loading mobilenet " + t.version + " and alpha " + t.alpha), ["https://storage.googleapis.com/teachable-machine-models/mobilenet_v2_weights_tf_dim_ordering_tf_kernels_" + t.alpha.toFixed(2) + "_" + e.IMAGE_SIZE + "_no_top/model.json", "out_relu"];
            throw new Error("MobileNet V" + t.version + " doesn't exist")
        },
        p = function(t) {
            return r(void 0, void 0, void 0, (function() {
                var e;
                return o(this, (function(n) {
                    switch (n.label) {
                        case 0:
                            return "string" != typeof t ? [3, 3] : [4, fetch(t)];
                        case 1:
                            return [4, n.sent().json()];
                        case 2:
                            return e = n.sent(), [3, 4];
                        case 3:
                            if (!(r = t) || !Array.isArray(r.labels)) throw new Error("Invalid Metadata provided");
                            e = t, n.label = 4;
                        case 4:
                            return [2, l(e)]
                    }
                    var r
                }))
            }))
        };

    function h(t, e, n) {
        return void 0 === n && (n = 3), r(this, void 0, void 0, (function() {
            var r;
            return o(this, (function(o) {
                switch (o.label) {
                    case 0:
                        return [4, e.data()];
                    case 1:
                        return r = o.sent(), [2, i.tidy((function() {
                            n = Math.min(n, r.length);
                            for (var e = [], o = 0; o < r.length; o++) e.push({
                                value: r[o],
                                index: o
                            });
                            e.sort((function(t, e) {
                                return e.value - t.value
                            }));
                            var i = new Float32Array(n),
                                a = new Int32Array(n);
                            for (o = 0; o < n; o++) i[o] = e[o].value, a[o] = e[o].index;
                            var s = [];
                            for (o = 0; o < a.length; o++) s.push({
                                className: t[a[o]],
                                probability: i[o]
                            });
                            return s
                        }))]
                }
            }))
        }))
    }
    e.getTopKClasses = h;
    var v = function() {
        function t(t, e) {
            this.model = t, this._metadata = l(e)
        }
        return Object.defineProperty(t, "EXPECTED_IMAGE_SIZE", {
            get: function() {
                return e.IMAGE_SIZE
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.getMetadata = function() {
            return this._metadata
        }, t.prototype.getTotalClasses = function() {
            return this.model.output.shape[1]
        }, t.prototype.getClassLabels = function() {
            return this._metadata.labels
        }, t.prototype.predictTopK = function(t, n, c) {
            return void 0 === n && (n = 10), void 0 === c && (c = !1), r(this, void 0, void 0, (function() {
                var r, l, f, d = this;
                return o(this, (function(o) {
                    switch (o.label) {
                        case 0:
                            return r = u.cropTo(t, e.IMAGE_SIZE, c), l = i.tidy((function() {
                                var t = s.capture(r);
                                return d.model.predict(t)
                            })), [4, h(this._metadata.labels, l, n)];
                        case 1:
                            return f = o.sent(), a.dispose(l), [2, f]
                    }
                }))
            }))
        }, t.prototype.predict = function(t, n) {
            return void 0 === n && (n = !1), r(this, void 0, void 0, (function() {
                var r, c, l, f, d, p = this;
                return o(this, (function(o) {
                    switch (o.label) {
                        case 0:
                            return r = u.cropTo(t, e.IMAGE_SIZE, n), [4, (c = i.tidy((function() {
                                var t = s.capture(r);
                                return p.model.predict(t)
                            }))).data()];
                        case 1:
                            for (l = o.sent(), f = [], d = 0; d < l.length; d++) f.push({
                                className: this._metadata.labels[d],
                                probability: l[d]
                            });
                            return a.dispose(c), [2, f]
                    }
                }))
            }))
        }, t.prototype.dispose = function() {
            this.truncatedModel.dispose()
        }, t
    }();
    e.CustomMobileNet = v, e.loadTruncatedMobileNet = function(t) {
        return r(this, void 0, void 0, (function() {
            var e, n, r, a, s, u, c;
            return o(this, (function(o) {
                switch (o.label) {
                    case 0:
                        return e = d(t), n = e[0], r = e[1], [4, i.loadLayersModel(n)];
                    case 1:
                        return a = o.sent(), t && 1 === t.version ? (s = a.getLayer(r), u = i.model({
                            inputs: a.inputs,
                            outputs: s.output
                        }), (c = i.sequential()).add(u), c.add(i.layers.flatten()), [2, c]) : (s = a.getLayer(r), u = i.model({
                            inputs: a.inputs,
                            outputs: s.output
                        }), (c = i.sequential()).add(u), c.add(i.layers.globalAveragePooling2d({})), [2, c])
                }
            }))
        }))
    }, e.load = function(t, e) {
        return r(this, void 0, void 0, (function() {
            var n, r;
            return o(this, (function(o) {
                switch (o.label) {
                    case 0:
                        return [4, i.loadLayersModel(t)];
                    case 1:
                        return n = o.sent(), e ? [4, p(e)] : [3, 3];
                    case 2:
                        return r = o.sent(), [3, 4];
                    case 3:
                        r = null, o.label = 4;
                    case 4:
                        return [2, new v(n, r)]
                }
            }))
        }))
    }, e.loadFromFiles = function(t, e, n) {
        return r(this, void 0, void 0, (function() {
            var r, a, s;
            return o(this, (function(o) {
                switch (o.label) {
                    case 0:
                        return [4, i.loadLayersModel(i.io.browserFiles([t, e]))];
                    case 1:
                        return r = o.sent(), [4, new Response(n).json()];
                    case 2:
                        return a = o.sent(), n ? [4, p(a)] : [3, 4];
                    case 3:
                        return s = o.sent(), [3, 5];
                    case 4:
                        s = null, o.label = 5;
                    case 5:
                        return [2, new v(r, s)]
                }
            }))
        }))
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(3);

    function o(t) {
        var e = Math.min(t.shape[0], t.shape[1]),
            n = t.shape[0] / 2 - e / 2,
            r = t.shape[1] / 2 - e / 2;
        return t.slice([n, r, 0], [e, e, 3])
    }
    e.capture = function(t) {
        return r.tidy((function() {
            return o(r.browser.fromPixels(t)).expandDims(0).toFloat().div(r.scalar(127)).sub(r.scalar(1))
        }))
    }, e.cropTensor = o
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
        return document.createElement("canvas")
    };

    function o(t, e, n) {
        return void 0 === n && (n = r()), n.width = t.width * e, n.height = t.height * e, n.getContext("2d").drawImage(t, 0, 0, n.width, n.height), n
    }
    e.resize = o, e.resizeMaxTo = function(t, e, n) {
        return void 0 === n && (n = r()), o(t, e / Math.max(t.width, t.height), n)
    }, e.resizeMinTo = function(t, e, n) {
        return void 0 === n && (n = r()), o(t, e / Math.min(t.width, t.height), n)
    }, e.cropTo = function(t, e, n, o) {
        void 0 === n && (n = !1), void 0 === o && (o = r());
        var i = t.width,
            a = t.height;
        t instanceof HTMLVideoElement && (i = t.videoWidth, a = t.videoHeight);
        var s = e / Math.min(i, a),
            u = Math.ceil(i * s),
            c = Math.ceil(a * s),
            l = u - e,
            f = c - e;
        o.width = o.height = e;
        var d = o.getContext("2d");
        return d.drawImage(t, -1 * ~~(l / 2), -1 * ~~(f / 2), u, c), n && (d.scale(-1, 1), d.drawImage(o, -1 * e, 0)), o
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.version = "0.8.4"
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(4);
    e.IMAGE_SIZE = r.IMAGE_SIZE, e.CustomMobileNet = r.CustomMobileNet, e.load = r.load, e.loadFromFiles = r.loadFromFiles, e.loadTruncatedMobileNet = r.loadTruncatedMobileNet;
    var o = n(9);
    e.TeachableMobileNet = o.TeachableMobileNet, e.createTeachable = o.createTeachable;
    var i = n(19);
    e.Webcam = i.Webcam;
    var a = n(7);
    e.version = a.version
}, function(t, e, n) {
    "use strict";
    var r, o = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function(t, e) {
            function n() {
                this.constructor = t
            }
            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }),
        i = this && this.__awaiter || function(t, e, n, r) {
            return new(n || (n = Promise))((function(o, i) {
                function a(t) {
                    try {
                        u(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function s(t) {
                    try {
                        u(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function u(t) {
                    var e;
                    t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                        t(e)
                    }))).then(a, s)
                }
                u((r = r.apply(t, e || [])).next())
            }))
        },
        a = this && this.__generator || function(t, e) {
            var n, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }), i;

            function s(i) {
                return function(s) {
                    return function(i) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1], o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2], a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            i = e.call(t, a)
                        } catch (t) {
                            i = [6, t], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(3),
        u = n(3),
        c = n(5),
        l = n(4),
        f = n(10);

    function d(t, e) {
        for (var n, r = t.length, o = t.slice(), i = r - 1; i > 0; i -= 1) {
            var a = void 0;
            n = [o[a = e ? Math.floor(e() * (i + 1)) : Math.floor(Math.random() * (i + 1))], o[i]], o[i] = n[0], o[a] = n[1]
        }
        return o
    }
    var p = function(t) {
        function e(e, n) {
            var r = t.call(this, s.sequential(), n) || this;
            return r.totalSamples = 0, r.examples = [], r.truncatedModel = e, r
        }
        return o(e, t), Object.defineProperty(e.prototype, "asSequentialModel", {
            get: function() {
                return this.model
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "isTrained", {
            get: function() {
                return !!this.model && this.model.layers && this.model.layers.length > 2
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "isPrepared", {
            get: function() {
                return !!this.trainDataset
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "numClasses", {
            get: function() {
                return this._metadata.labels.length
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.addExample = function(t, e) {
            return i(this, void 0, void 0, (function() {
                var n, r, o;
                return a(this, (function(i) {
                    var a;
                    return n = "object" == typeof(a = e).dataId && "object" === a.shape ? e : c.capture(e), r = this.truncatedModel.predict(n), o = r.dataSync(), n.dispose(), r.dispose(), this.examples[t].push(o), this.totalSamples++, [2]
                }))
            }))
        }, e.prototype.predict = function(e, n) {
            return void 0 === n && (n = !1), i(this, void 0, void 0, (function() {
                return a(this, (function(r) {
                    if (!this.model) throw new Error("Model has not been trained yet, called train() first");
                    return [2, t.prototype.predict.call(this, e, n)]
                }))
            }))
        }, e.prototype.predictTopK = function(e, n, r) {
            return void 0 === n && (n = 10), void 0 === r && (r = !1), i(this, void 0, void 0, (function() {
                return a(this, (function(o) {
                    if (!this.model) throw new Error("Model has not been trained yet, called train() first");
                    return [2, t.prototype.predictTopK.call(this, e, n, r)]
                }))
            }))
        }, e.prototype.prepare = function() {
            for (var t in this.examples)
                if (0 === t.length) throw new Error("Add some examples before training");
            var e = this.convertToTfDataset();
            this.trainDataset = e.trainDataset, this.validationDataset = e.validationDataset
        }, e.prototype.convertToTfDataset = function() {
            for (var t = 0; t < this.examples.length; t++) this.examples[t] = d(this.examples[t], this.seed);
            var e = [],
                n = [],
                r = function(t) {
                    var r, i, a, s = (r = t, i = o.numClasses, (a = new Array(i).fill(0))[r] = 1, a),
                        u = o.examples[t].length,
                        c = u - Math.ceil(.15 * u),
                        l = o.examples[t].slice(0, c).map((function(t) {
                            return {
                                data: t,
                                label: s
                            }
                        })),
                        f = o.examples[t].slice(c).map((function(t) {
                            return {
                                data: t,
                                label: s
                            }
                        }));
                    e = e.concat(l), n = n.concat(f)
                },
                o = this;
            for (t = 0; t < this.examples.length; t++) r(t);
            e = d(e, this.seed), n = d(n, this.seed);
            var i = s.data.array(e.map((function(t) {
                    return t.data
                }))),
                a = s.data.array(n.map((function(t) {
                    return t.data
                }))),
                u = s.data.array(e.map((function(t) {
                    return t.label
                }))),
                c = s.data.array(n.map((function(t) {
                    return t.label
                })));
            return {
                trainDataset: s.data.zip({
                    xs: i,
                    ys: u
                }),
                validationDataset: s.data.zip({
                    xs: a,
                    ys: c
                })
            }
        }, e.prototype.save = function(t, e) {
            return i(this, void 0, void 0, (function() {
                return a(this, (function(n) {
                    return [2, this.model.save(t, e)]
                }))
            }))
        }, e.prototype.train = function(t, e) {
            return void 0 === e && (e = {}), i(this, void 0, void 0, (function() {
                var n, r, o, i, c, l, f, d, p, h = this;
                return a(this, (function(a) {
                    switch (a.label) {
                        case 0:
                            if (n = e.onTrainEnd || function() {}, e.onTrainEnd = function(t) {
                                    h.__stopTrainingResolve && (h.__stopTrainingResolve(), h.__stopTrainingResolve = null), n(t)
                                }, this.isPrepared || this.prepare(), r = this.getLabels().length, u.util.assert(r === this.numClasses, (function() {
                                    return "Can not train, has " + r + " labels and " + h.numClasses + " classes"
                                })), o = this.truncatedModel.outputs[0].shape.slice(1), i = s.util.sizeFromShape(o), c = this.seed ? s.initializers.varianceScaling({
                                    seed: 3.14
                                }) : s.initializers.varianceScaling({}), this.trainingModel = s.sequential({
                                    layers: [s.layers.dense({
                                        inputShape: [i],
                                        units: t.denseUnits,
                                        activation: "relu",
                                        kernelInitializer: c,
                                        useBias: !0
                                    }), s.layers.dense({
                                        kernelInitializer: c,
                                        useBias: !1,
                                        activation: "softmax",
                                        units: this.numClasses
                                    })]
                                }), l = s.train.adam(t.learningRate), this.trainingModel.compile({
                                    optimizer: l,
                                    loss: "categoricalCrossentropy",
                                    metrics: ["accuracy"]
                                }), !(t.batchSize > 0)) throw new Error("Batch size is 0 or NaN. Please choose a non-zero fraction");
                            return f = this.trainDataset.batch(t.batchSize), d = this.validationDataset.batch(t.batchSize), [4, this.trainingModel.fitDataset(f, {
                                epochs: t.epochs,
                                validationData: d,
                                callbacks: e
                            })];
                        case 1:
                            return a.sent(), (p = s.sequential()).add(this.truncatedModel), p.add(this.trainingModel), this.model = p, l.dispose(), [2, this.model]
                    }
                }))
            }))
        }, e.prototype.prepareDataset = function() {
            for (var t = 0; t < this.numClasses; t++) this.examples[t] = []
        }, e.prototype.setLabel = function(t, e) {
            this._metadata.labels[t] = e
        }, e.prototype.setLabels = function(t) {
            this._metadata.labels = t, this.prepareDataset()
        }, e.prototype.getLabel = function(t) {
            return this._metadata.labels[t]
        }, e.prototype.getLabels = function() {
            return this._metadata.labels
        }, e.prototype.setName = function(t) {
            this._metadata.modelName = t
        }, e.prototype.getName = function() {
            return this._metadata.modelName
        }, e.prototype.stopTraining = function() {
            var t = this;
            return new Promise((function(e, n) {
                t.trainingModel.stopTraining = !0, t.__stopTrainingResolve = e
            }))
        }, e.prototype.dispose = function() {
            this.trainingModel.dispose(), t.prototype.dispose.call(this)
        }, e.prototype.calculateAccuracyPerClass = function() {
            return i(this, void 0, void 0, (function() {
                var t, e, n, r, o, u, c, l, f, d, p, h, v, y, b, m, g, w, x = this;
                return a(this, (function(_) {
                    switch (_.label) {
                        case 0:
                            return t = this.validationDataset.mapAsync((function(t) {
                                return i(x, void 0, void 0, (function() {
                                    return a(this, (function(e) {
                                        return [2, t.xs]
                                    }))
                                }))
                            })), e = this.validationDataset.mapAsync((function(t) {
                                return i(x, void 0, void 0, (function() {
                                    return a(this, (function(e) {
                                        return [2, t.ys]
                                    }))
                                }))
                            })), n = Math.min(e.size, 32), r = Math.ceil(e.size / n), o = t.batch(n), u = e.batch(n), [4, o.iterator()];
                        case 1:
                            return c = _.sent(), [4, u.iterator()];
                        case 2:
                            l = _.sent(), f = [], d = [], w = 0, _.label = 3;
                        case 3:
                            return w < r ? [4, c.next()] : [3, 7];
                        case 4:
                            return p = _.sent(), h = this.trainingModel.predict(p.value), v = h.argMax(1), f.push(v), [4, l.next()];
                        case 5:
                            y = _.sent(), b = y.value.argMax(1), d.push(b), p.value.dispose(), h.dispose(), y.value.dispose(), _.label = 6;
                        case 6:
                            return w++, [3, 3];
                        case 7:
                            if (m = s.concat(d), g = s.concat(f), 1 !== r)
                                for (w = 0; w < f.length; w++) f[w].dispose(), d[w].dispose();
                            return [2, {
                                reference: m,
                                predictions: g
                            }]
                    }
                }))
            }))
        }, e.prototype.setSeed = function(t) {
            this.seed = f(t)
        }, e
    }(l.CustomMobileNet);
    e.TeachableMobileNet = p, e.createTeachable = function(t, e) {
        return i(this, void 0, void 0, (function() {
            var n;
            return a(this, (function(r) {
                switch (r.label) {
                    case 0:
                        return [4, l.loadTruncatedMobileNet(e)];
                    case 1:
                        return n = r.sent(), [2, new p(n, t)]
                }
            }))
        }))
    }
}, function(t, e, n) {
    var r = n(11),
        o = n(12),
        i = n(13),
        a = n(14),
        s = n(15),
        u = n(16),
        c = n(17);
    c.alea = r, c.xor128 = o, c.xorwow = i, c.xorshift7 = a, c.xor4096 = s, c.tychei = u, t.exports = c
}, function(t, e, n) {
    (function(t) {
        var r;
        ! function(t, o, i) {
            function a(t) {
                var e, n = this,
                    r = (e = 4022871197, function(t) {
                        t = t.toString();
                        for (var n = 0; n < t.length; n++) {
                            var r = .02519603282416938 * (e += t.charCodeAt(n));
                            r -= e = r >>> 0, e = (r *= e) >>> 0, e += 4294967296 * (r -= e)
                        }
                        return 2.3283064365386963e-10 * (e >>> 0)
                    });
                n.next = function() {
                    var t = 2091639 * n.s0 + 2.3283064365386963e-10 * n.c;
                    return n.s0 = n.s1, n.s1 = n.s2, n.s2 = t - (n.c = 0 | t)
                }, n.c = 1, n.s0 = r(" "), n.s1 = r(" "), n.s2 = r(" "), n.s0 -= r(t), n.s0 < 0 && (n.s0 += 1), n.s1 -= r(t), n.s1 < 0 && (n.s1 += 1), n.s2 -= r(t), n.s2 < 0 && (n.s2 += 1), r = null
            }

            function s(t, e) {
                return e.c = t.c, e.s0 = t.s0, e.s1 = t.s1, e.s2 = t.s2, e
            }

            function u(t, e) {
                var n = new a(t),
                    r = e && e.state,
                    o = n.next;
                return o.int32 = function() {
                    return 4294967296 * n.next() | 0
                }, o.double = function() {
                    return o() + 11102230246251565e-32 * (2097152 * o() | 0)
                }, o.quick = o, r && ("object" == typeof r && s(r, n), o.state = function() {
                    return s(n, {})
                }), o
            }
            o && o.exports ? o.exports = u : n(0) && n(2) ? void 0 === (r = function() {
                return u
            }.call(e, n, e, o)) || (o.exports = r) : this.alea = u
        }(0, t, n(0))
    }).call(this, n(1)(t))
}, function(t, e, n) {
    (function(t) {
        var r;
        ! function(t, o, i) {
            function a(t) {
                var e = this,
                    n = "";
                e.x = 0, e.y = 0, e.z = 0, e.w = 0, e.next = function() {
                    var t = e.x ^ e.x << 11;
                    return e.x = e.y, e.y = e.z, e.z = e.w, e.w ^= e.w >>> 19 ^ t ^ t >>> 8
                }, t === (0 | t) ? e.x = t : n += t;
                for (var r = 0; r < n.length + 64; r++) e.x ^= 0 | n.charCodeAt(r), e.next()
            }

            function s(t, e) {
                return e.x = t.x, e.y = t.y, e.z = t.z, e.w = t.w, e
            }

            function u(t, e) {
                var n = new a(t),
                    r = e && e.state,
                    o = function() {
                        return (n.next() >>> 0) / 4294967296
                    };
                return o.double = function() {
                    do {
                        var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
                    } while (0 === t);
                    return t
                }, o.int32 = n.next, o.quick = o, r && ("object" == typeof r && s(r, n), o.state = function() {
                    return s(n, {})
                }), o
            }
            o && o.exports ? o.exports = u : n(0) && n(2) ? void 0 === (r = function() {
                return u
            }.call(e, n, e, o)) || (o.exports = r) : this.xor128 = u
        }(0, t, n(0))
    }).call(this, n(1)(t))
}, function(t, e, n) {
    (function(t) {
        var r;
        ! function(t, o, i) {
            function a(t) {
                var e = this,
                    n = "";
                e.next = function() {
                    var t = e.x ^ e.x >>> 2;
                    return e.x = e.y, e.y = e.z, e.z = e.w, e.w = e.v, (e.d = e.d + 362437 | 0) + (e.v = e.v ^ e.v << 4 ^ t ^ t << 1) | 0
                }, e.x = 0, e.y = 0, e.z = 0, e.w = 0, e.v = 0, t === (0 | t) ? e.x = t : n += t;
                for (var r = 0; r < n.length + 64; r++) e.x ^= 0 | n.charCodeAt(r), r == n.length && (e.d = e.x << 10 ^ e.x >>> 4), e.next()
            }

            function s(t, e) {
                return e.x = t.x, e.y = t.y, e.z = t.z, e.w = t.w, e.v = t.v, e.d = t.d, e
            }

            function u(t, e) {
                var n = new a(t),
                    r = e && e.state,
                    o = function() {
                        return (n.next() >>> 0) / 4294967296
                    };
                return o.double = function() {
                    do {
                        var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
                    } while (0 === t);
                    return t
                }, o.int32 = n.next, o.quick = o, r && ("object" == typeof r && s(r, n), o.state = function() {
                    return s(n, {})
                }), o
            }
            o && o.exports ? o.exports = u : n(0) && n(2) ? void 0 === (r = function() {
                return u
            }.call(e, n, e, o)) || (o.exports = r) : this.xorwow = u
        }(0, t, n(0))
    }).call(this, n(1)(t))
}, function(t, e, n) {
    (function(t) {
        var r;
        ! function(t, o, i) {
            function a(t) {
                var e = this;
                e.next = function() {
                        var t, n, r = e.x,
                            o = e.i;
                        return t = r[o], n = (t ^= t >>> 7) ^ t << 24, n ^= (t = r[o + 1 & 7]) ^ t >>> 10, n ^= (t = r[o + 3 & 7]) ^ t >>> 3, n ^= (t = r[o + 4 & 7]) ^ t << 7, t = r[o + 7 & 7], n ^= (t ^= t << 13) ^ t << 9, r[o] = n, e.i = o + 1 & 7, n
                    },
                    function(t, e) {
                        var n, r = [];
                        if (e === (0 | e)) r[0] = e;
                        else
                            for (e = "" + e, n = 0; n < e.length; ++n) r[7 & n] = r[7 & n] << 15 ^ e.charCodeAt(n) + r[n + 1 & 7] << 13;
                        for (; r.length < 8;) r.push(0);
                        for (n = 0; n < 8 && 0 === r[n]; ++n);
                        for (8 == n ? r[7] = -1 : r[n], t.x = r, t.i = 0, n = 256; n > 0; --n) t.next()
                    }(e, t)
            }

            function s(t, e) {
                return e.x = t.x.slice(), e.i = t.i, e
            }

            function u(t, e) {
                null == t && (t = +new Date);
                var n = new a(t),
                    r = e && e.state,
                    o = function() {
                        return (n.next() >>> 0) / 4294967296
                    };
                return o.double = function() {
                    do {
                        var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
                    } while (0 === t);
                    return t
                }, o.int32 = n.next, o.quick = o, r && (r.x && s(r, n), o.state = function() {
                    return s(n, {})
                }), o
            }
            o && o.exports ? o.exports = u : n(0) && n(2) ? void 0 === (r = function() {
                return u
            }.call(e, n, e, o)) || (o.exports = r) : this.xorshift7 = u
        }(0, t, n(0))
    }).call(this, n(1)(t))
}, function(t, e, n) {
    (function(t) {
        var r;
        ! function(t, o, i) {
            function a(t) {
                var e = this;
                e.next = function() {
                        var t, n, r = e.w,
                            o = e.X,
                            i = e.i;
                        return e.w = r = r + 1640531527 | 0, n = o[i + 34 & 127], t = o[i = i + 1 & 127], n ^= n << 13, t ^= t << 17, n ^= n >>> 15, t ^= t >>> 12, n = o[i] = n ^ t, e.i = i, n + (r ^ r >>> 16) | 0
                    },
                    function(t, e) {
                        var n, r, o, i, a, s = [],
                            u = 128;
                        for (e === (0 | e) ? (r = e, e = null) : (e += "\0", r = 0, u = Math.max(u, e.length)), o = 0, i = -32; i < u; ++i) e && (r ^= e.charCodeAt((i + 32) % e.length)), 0 === i && (a = r), r ^= r << 10, r ^= r >>> 15, r ^= r << 4, r ^= r >>> 13, i >= 0 && (a = a + 1640531527 | 0, o = 0 == (n = s[127 & i] ^= r + a) ? o + 1 : 0);
                        for (o >= 128 && (s[127 & (e && e.length || 0)] = -1), o = 127, i = 512; i > 0; --i) r = s[o + 34 & 127], n = s[o = o + 1 & 127], r ^= r << 13, n ^= n << 17, r ^= r >>> 15, n ^= n >>> 12, s[o] = r ^ n;
                        t.w = a, t.X = s, t.i = o
                    }(e, t)
            }

            function s(t, e) {
                return e.i = t.i, e.w = t.w, e.X = t.X.slice(), e
            }

            function u(t, e) {
                null == t && (t = +new Date);
                var n = new a(t),
                    r = e && e.state,
                    o = function() {
                        return (n.next() >>> 0) / 4294967296
                    };
                return o.double = function() {
                    do {
                        var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
                    } while (0 === t);
                    return t
                }, o.int32 = n.next, o.quick = o, r && (r.X && s(r, n), o.state = function() {
                    return s(n, {})
                }), o
            }
            o && o.exports ? o.exports = u : n(0) && n(2) ? void 0 === (r = function() {
                return u
            }.call(e, n, e, o)) || (o.exports = r) : this.xor4096 = u
        }(0, t, n(0))
    }).call(this, n(1)(t))
}, function(t, e, n) {
    (function(t) {
        var r;
        ! function(t, o, i) {
            function a(t) {
                var e = this,
                    n = "";
                e.next = function() {
                    var t = e.b,
                        n = e.c,
                        r = e.d,
                        o = e.a;
                    return t = t << 25 ^ t >>> 7 ^ n, n = n - r | 0, r = r << 24 ^ r >>> 8 ^ o, o = o - t | 0, e.b = t = t << 20 ^ t >>> 12 ^ n, e.c = n = n - r | 0, e.d = r << 16 ^ n >>> 16 ^ o, e.a = o - t | 0
                }, e.a = 0, e.b = 0, e.c = -1640531527, e.d = 1367130551, t === Math.floor(t) ? (e.a = t / 4294967296 | 0, e.b = 0 | t) : n += t;
                for (var r = 0; r < n.length + 20; r++) e.b ^= 0 | n.charCodeAt(r), e.next()
            }

            function s(t, e) {
                return e.a = t.a, e.b = t.b, e.c = t.c, e.d = t.d, e
            }

            function u(t, e) {
                var n = new a(t),
                    r = e && e.state,
                    o = function() {
                        return (n.next() >>> 0) / 4294967296
                    };
                return o.double = function() {
                    do {
                        var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
                    } while (0 === t);
                    return t
                }, o.int32 = n.next, o.quick = o, r && ("object" == typeof r && s(r, n), o.state = function() {
                    return s(n, {})
                }), o
            }
            o && o.exports ? o.exports = u : n(0) && n(2) ? void 0 === (r = function() {
                return u
            }.call(e, n, e, o)) || (o.exports = r) : this.tychei = u
        }(0, t, n(0))
    }).call(this, n(1)(t))
}, function(t, e, n) {
    var r;
    ! function(o, i) {
        var a, s = (0, eval)("this"),
            u = 256,
            c = 6,
            l = "random",
            f = i.pow(u, c),
            d = i.pow(2, 52),
            p = 2 * d,
            h = u - 1;

        function v(t, e, n) {
            var r = [],
                h = m(function t(e, n) {
                    var r, o = [],
                        i = typeof e;
                    if (n && "object" == i)
                        for (r in e) try {
                            o.push(t(e[r], n - 1))
                        } catch (t) {}
                    return o.length ? o : "string" == i ? e : e + "\0"
                }((e = 1 == e ? {
                    entropy: !0
                } : e || {}).entropy ? [t, g(o)] : null == t ? function() {
                    try {
                        var t;
                        return a && (t = a.randomBytes) ? t = t(u) : (t = new Uint8Array(u), (s.crypto || s.msCrypto).getRandomValues(t)), g(t)
                    } catch (t) {
                        var e = s.navigator,
                            n = e && e.plugins;
                        return [+new Date, s, n, s.screen, g(o)]
                    }
                }() : t, 3), r),
                v = new y(r),
                w = function() {
                    for (var t = v.g(c), e = f, n = 0; t < d;) t = (t + n) * u, e *= u, n = v.g(1);
                    for (; t >= p;) t /= 2, e /= 2, n >>>= 1;
                    return (t + n) / e
                };
            return w.int32 = function() {
                return 0 | v.g(4)
            }, w.quick = function() {
                return v.g(4) / 4294967296
            }, w.double = w, m(g(v.S), o), (e.pass || n || function(t, e, n, r) {
                return r && (r.S && b(r, v), t.state = function() {
                    return b(v, {})
                }), n ? (i[l] = t, e) : t
            })(w, h, "global" in e ? e.global : this == i, e.state)
        }

        function y(t) {
            var e, n = t.length,
                r = this,
                o = 0,
                i = r.i = r.j = 0,
                a = r.S = [];
            for (n || (t = [n++]); o < u;) a[o] = o++;
            for (o = 0; o < u; o++) a[o] = a[i = h & i + t[o % n] + (e = a[o])], a[i] = e;
            (r.g = function(t) {
                for (var e, n = 0, o = r.i, i = r.j, a = r.S; t--;) e = a[o = h & o + 1], n = n * u + a[h & (a[o] = a[i = h & i + e]) + (a[i] = e)];
                return r.i = o, r.j = i, n
            })(u)
        }

        function b(t, e) {
            return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
        }

        function m(t, e) {
            for (var n, r = t + "", o = 0; o < r.length;) e[h & o] = h & (n ^= 19 * e[h & o]) + r.charCodeAt(o++);
            return g(e)
        }

        function g(t) {
            return String.fromCharCode.apply(0, t)
        }
        if (i["seed" + l] = v, m(i.random(), o), t.exports) {
            t.exports = v;
            try {
                a = n(18)
            } catch (t) {}
        } else void 0 === (r = function() {
            return v
        }.call(e, n, e, t)) || (t.exports = r)
    }([], Math)
}, function(t, e) {}, function(t, e, n) {
    "use strict";
    var r = this && this.__decorate || function(t, e, n, r) {
            var o, i = arguments.length,
                a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
            else
                for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
            return i > 3 && a && Object.defineProperty(e, n, a), a
        },
        o = this && this.__awaiter || function(t, e, n, r) {
            return new(n || (n = Promise))((function(o, i) {
                function a(t) {
                    try {
                        u(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function s(t) {
                    try {
                        u(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function u(t) {
                    var e;
                    t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                        t(e)
                    }))).then(a, s)
                }
                u((r = r.apply(t, e || [])).next())
            }))
        },
        i = this && this.__generator || function(t, e) {
            var n, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }), i;

            function s(i) {
                return function(s) {
                    return function(i) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1], o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2], a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            i = e.call(t, a)
                        } catch (t) {
                            i = [6, t], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(20),
        s = n(6),
        u = {
            facingMode: {exact : "environment"},
            frameRate: 24
        },
        c = function() {
            function t(t, e, n) {
                void 0 === t && (t = 400), void 0 === e && (e = 400), void 0 === n && (n = !1), this.width = t, this.height = e, this.flip = n
            }
            return t.prototype.getWebcam = function(t) {
                if (void 0 === t && (t = {}), !window.navigator.mediaDevices || !window.navigator.mediaDevices.getUserMedia) return Promise.reject("Your browser does not support WebRTC. Please try another one.");
                t.width = 640;
                var e = function(t) {
                        return t.facingMode = t.facingMode || u.facingMode, t.frameRate = t.frameRate || u.frameRate, t.aspectRatio = t.aspectRatio || u.aspectRatio, t
                    }(t),
                    n = document.createElement("video");
                return window.navigator.mediaDevices.getUserMedia({
                    video: e
                }).then((function(t) {
                    return n.srcObject = t, n.addEventListener("loadedmetadata", (function(t) {
                        var e = n.videoWidth,
                            r = n.videoHeight;
                        n.width = e, n.height = r
                    })), n
                }), (function() {
                    return Promise.reject("Could not open your camera. You may have denied access.")
                }))
            }, t.prototype.setup = function(t) {
                return void 0 === t && (t = {}), o(this, void 0, void 0, (function() {
                    var e;
                    return i(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return this.webcam ? [3, 2] : (e = this, [4, this.getWebcam(t)]);
                            case 1:
                                e.webcam = n.sent(), this.canvas || (this.canvas = document.createElement("canvas"), this.canvas.width = this.width, this.canvas.height = this.height), n.label = 2;
                            case 2:
                                return [2]
                        }
                    }))
                }))
            }, t.prototype.play = function() {
                return this.webcam.play()
            }, t.prototype.pause = function() {
                this.webcam.pause()
            }, t.prototype.stop = function() {
                this.stopStreamedVideo(this.webcam)
            }, t.prototype.update = function() {
                this.renderCameraToCanvas()
            }, t.prototype.stopStreamedVideo = function(t) {
                t.srcObject.getTracks().forEach((function(t) {
                    t.stop()
                })), t.srcObject = null
            }, t.prototype.renderCameraToCanvas = function() {
                if (this.canvas && this.webcam) {
                    var t = this.canvas.getContext("2d");
                    if (0 !== this.webcam.videoWidth) {
                        var e = s.cropTo(this.webcam, this.width, this.flip);
                        t.drawImage(e, 0, 0)
                    }
                }
            }, r([a.default], t.prototype, "getWebcam", null), r([a.default], t.prototype, "setup", null), r([a.default], t.prototype, "play", null), r([a.default], t.prototype, "pause", null), r([a.default], t.prototype, "stop", null), r([a.default], t.prototype, "update", null), r([a.default], t.prototype, "stopStreamedVideo", null), r([a.default], t.prototype, "renderCameraToCanvas", null), t
        }();
    e.Webcam = c
}, function(t, e, n) {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function o(t, e, n) {
        var o = n.value;
        if ("function" != typeof o) throw new TypeError("@boundMethod decorator can only be applied to methods not: ".concat(r(o)));
        var i = !1;
        return {
            configurable: !0,
            get: function() {
                if (i || this === t.prototype || this.hasOwnProperty(e) || "function" != typeof o) return o;
                var n = o.bind(this);
                return i = !0, Object.defineProperty(this, e, {
                    configurable: !0,
                    get: function() {
                        return n
                    },
                    set: function(t) {
                        o = t, delete this[e]
                    }
                }), i = !1, n
            },
            set: function(t) {
                o = t
            }
        }
    }

    function i(t) {
        var e;
        return "undefined" != typeof Reflect && "function" == typeof Reflect.ownKeys ? e = Reflect.ownKeys(t.prototype) : (e = Object.getOwnPropertyNames(t.prototype), "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(t.prototype)))), e.forEach((function(e) {
            if ("constructor" !== e) {
                var n = Object.getOwnPropertyDescriptor(t.prototype, e);
                "function" == typeof n.value && Object.defineProperty(t.prototype, e, o(t, e, n))
            }
        })), t
    }

    function a() {
        return 1 === arguments.length ? i.apply(void 0, arguments) : o.apply(void 0, arguments)
    }
    n.r(e), n.d(e, "boundMethod", (function() {
        return o
    })), n.d(e, "boundClass", (function() {
        return i
    })), n.d(e, "default", (function() {
        return a
    }))
}]);