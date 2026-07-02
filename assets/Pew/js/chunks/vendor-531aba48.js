/*! @license DOMPurify 3.1.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.7/LICENSE */
const {
  entries,
  setPrototypeOf,
  isFrozen,
  getPrototypeOf,
  getOwnPropertyDescriptor
} = Object;
let {
  freeze,
  seal,
  create
} = Object;
let {
  apply,
  construct
} = typeof Reflect !== "undefined" && Reflect;
if (!freeze) {
  freeze = function freeze2(x) {
    return x;
  };
}
if (!seal) {
  seal = function seal2(x) {
    return x;
  };
}
if (!apply) {
  apply = function apply2(fun, thisValue, args) {
    return fun.apply(thisValue, args);
  };
}
if (!construct) {
  construct = function construct2(Func, args) {
    return new Func(...args);
  };
}
const arrayForEach = unapply(Array.prototype.forEach);
const arrayPop = unapply(Array.prototype.pop);
const arrayPush = unapply(Array.prototype.push);
const stringToLowerCase = unapply(String.prototype.toLowerCase);
const stringToString = unapply(String.prototype.toString);
const stringMatch = unapply(String.prototype.match);
const stringReplace = unapply(String.prototype.replace);
const stringIndexOf = unapply(String.prototype.indexOf);
const stringTrim = unapply(String.prototype.trim);
const objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
const regExpTest = unapply(RegExp.prototype.test);
const typeErrorCreate = unconstruct(TypeError);
function unapply(func) {
  return function(thisArg) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return apply(func, thisArg, args);
  };
}
function unconstruct(func) {
  return function() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return construct(func, args);
  };
}
function addToSet(set, array) {
  let transformCaseFunc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
  if (setPrototypeOf) {
    setPrototypeOf(set, null);
  }
  let l = array.length;
  while (l--) {
    let element = array[l];
    if (typeof element === "string") {
      const lcElement = transformCaseFunc(element);
      if (lcElement !== element) {
        if (!isFrozen(array)) {
          array[l] = lcElement;
        }
        element = lcElement;
      }
    }
    set[element] = true;
  }
  return set;
}
function cleanArray(array) {
  for (let index = 0; index < array.length; index++) {
    const isPropertyExist = objectHasOwnProperty(array, index);
    if (!isPropertyExist) {
      array[index] = null;
    }
  }
  return array;
}
function clone(object) {
  const newObject = create(null);
  for (const [property, value] of entries(object)) {
    const isPropertyExist = objectHasOwnProperty(object, property);
    if (isPropertyExist) {
      if (Array.isArray(value)) {
        newObject[property] = cleanArray(value);
      } else if (value && typeof value === "object" && value.constructor === Object) {
        newObject[property] = clone(value);
      } else {
        newObject[property] = value;
      }
    }
  }
  return newObject;
}
function lookupGetter(object, prop) {
  while (object !== null) {
    const desc = getOwnPropertyDescriptor(object, prop);
    if (desc) {
      if (desc.get) {
        return unapply(desc.get);
      }
      if (typeof desc.value === "function") {
        return unapply(desc.value);
      }
    }
    object = getPrototypeOf(object);
  }
  function fallbackValue() {
    return null;
  }
  return fallbackValue;
}
const html$1 = freeze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
const svg$1 = freeze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
const svgFilters = freeze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
const svgDisallowed = freeze(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
const mathMl$1 = freeze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
const mathMlDisallowed = freeze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
const text = freeze(["#text"]);
const html = freeze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]);
const svg = freeze(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
const mathMl = freeze(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
const xml = freeze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
const MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
const ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
const TMPLIT_EXPR = seal(/\${[\w\W]*}/gm);
const DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/);
const ARIA_ATTR = seal(/^aria-[\-\w]+$/);
const IS_ALLOWED_URI = seal(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
);
const IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
const ATTR_WHITESPACE = seal(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
);
const DOCTYPE_NAME = seal(/^html$/i);
const CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
var EXPRESSIONS = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR,
  ERB_EXPR,
  TMPLIT_EXPR,
  DATA_ATTR,
  ARIA_ATTR,
  IS_ALLOWED_URI,
  IS_SCRIPT_OR_DATA,
  ATTR_WHITESPACE,
  DOCTYPE_NAME,
  CUSTOM_ELEMENT
});
const NODE_TYPE = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
};
const getGlobal = function getGlobal2() {
  return typeof window === "undefined" ? null : window;
};
const _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, purifyHostElement) {
  if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") {
    return null;
  }
  let suffix = null;
  const ATTR_NAME = "data-tt-policy-suffix";
  if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
    suffix = purifyHostElement.getAttribute(ATTR_NAME);
  }
  const policyName = "dompurify" + (suffix ? "#" + suffix : "");
  try {
    return trustedTypes.createPolicy(policyName, {
      createHTML(html2) {
        return html2;
      },
      createScriptURL(scriptUrl) {
        return scriptUrl;
      }
    });
  } catch (_) {
    console.warn("TrustedTypes policy " + policyName + " could not be created.");
    return null;
  }
};
function createDOMPurify() {
  let window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
  const DOMPurify = (root2) => createDOMPurify(root2);
  DOMPurify.version = "3.1.7";
  DOMPurify.removed = [];
  if (!window2 || !window2.document || window2.document.nodeType !== NODE_TYPE.document) {
    DOMPurify.isSupported = false;
    return DOMPurify;
  }
  let {
    document
  } = window2;
  const originalDocument = document;
  const currentScript = originalDocument.currentScript;
  const {
    DocumentFragment,
    HTMLTemplateElement,
    Node,
    Element,
    NodeFilter,
    NamedNodeMap = window2.NamedNodeMap || window2.MozNamedAttrMap,
    HTMLFormElement,
    DOMParser,
    trustedTypes
  } = window2;
  const ElementPrototype = Element.prototype;
  const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
  const remove = lookupGetter(ElementPrototype, "remove");
  const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
  const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
  const getParentNode = lookupGetter(ElementPrototype, "parentNode");
  if (typeof HTMLTemplateElement === "function") {
    const template = document.createElement("template");
    if (template.content && template.content.ownerDocument) {
      document = template.content.ownerDocument;
    }
  }
  let trustedTypesPolicy;
  let emptyHTML = "";
  const {
    implementation,
    createNodeIterator,
    createDocumentFragment,
    getElementsByTagName
  } = document;
  const {
    importNode
  } = originalDocument;
  let hooks = {};
  DOMPurify.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: MUSTACHE_EXPR2,
    ERB_EXPR: ERB_EXPR2,
    TMPLIT_EXPR: TMPLIT_EXPR2,
    DATA_ATTR: DATA_ATTR2,
    ARIA_ATTR: ARIA_ATTR2,
    IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA2,
    ATTR_WHITESPACE: ATTR_WHITESPACE2,
    CUSTOM_ELEMENT: CUSTOM_ELEMENT2
  } = EXPRESSIONS;
  let {
    IS_ALLOWED_URI: IS_ALLOWED_URI$1
  } = EXPRESSIONS;
  let ALLOWED_TAGS = null;
  const DEFAULT_ALLOWED_TAGS = addToSet({}, [...html$1, ...svg$1, ...svgFilters, ...mathMl$1, ...text]);
  let ALLOWED_ATTR = null;
  const DEFAULT_ALLOWED_ATTR = addToSet({}, [...html, ...svg, ...mathMl, ...xml]);
  let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  }));
  let FORBID_TAGS = null;
  let FORBID_ATTR = null;
  let ALLOW_ARIA_ATTR = true;
  let ALLOW_DATA_ATTR = true;
  let ALLOW_UNKNOWN_PROTOCOLS = false;
  let ALLOW_SELF_CLOSE_IN_ATTR = true;
  let SAFE_FOR_TEMPLATES = false;
  let SAFE_FOR_XML = true;
  let WHOLE_DOCUMENT = false;
  let SET_CONFIG = false;
  let FORCE_BODY = false;
  let RETURN_DOM = false;
  let RETURN_DOM_FRAGMENT = false;
  let RETURN_TRUSTED_TYPE = false;
  let SANITIZE_DOM = true;
  let SANITIZE_NAMED_PROPS = false;
  const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
  let KEEP_CONTENT = true;
  let IN_PLACE = false;
  let USE_PROFILES = {};
  let FORBID_CONTENTS = null;
  const DEFAULT_FORBID_CONTENTS = addToSet({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let DATA_URI_TAGS = null;
  const DEFAULT_DATA_URI_TAGS = addToSet({}, ["audio", "video", "img", "source", "image", "track"]);
  let URI_SAFE_ATTRIBUTES = null;
  const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
  const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
  const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
  const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
  let NAMESPACE = HTML_NAMESPACE;
  let IS_EMPTY_INPUT = false;
  let ALLOWED_NAMESPACES = null;
  const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
  let PARSER_MEDIA_TYPE = null;
  const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
  const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
  let transformCaseFunc = null;
  let CONFIG = null;
  const formElement = document.createElement("form");
  const isRegexOrFunction = function isRegexOrFunction2(testValue) {
    return testValue instanceof RegExp || testValue instanceof Function;
  };
  const _parseConfig = function _parseConfig2() {
    let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (CONFIG && CONFIG === cfg) {
      return;
    }
    if (!cfg || typeof cfg !== "object") {
      cfg = {};
    }
    cfg = clone(cfg);
    PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
    SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
    transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
    ALLOWED_TAGS = objectHasOwnProperty(cfg, "ALLOWED_TAGS") ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
    ALLOWED_ATTR = objectHasOwnProperty(cfg, "ALLOWED_ATTR") ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
    ALLOWED_NAMESPACES = objectHasOwnProperty(cfg, "ALLOWED_NAMESPACES") ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
    URI_SAFE_ATTRIBUTES = objectHasOwnProperty(cfg, "ADD_URI_SAFE_ATTR") ? addToSet(
      clone(DEFAULT_URI_SAFE_ATTRIBUTES),
      // eslint-disable-line indent
      cfg.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      transformCaseFunc
      // eslint-disable-line indent
    ) : DEFAULT_URI_SAFE_ATTRIBUTES;
    DATA_URI_TAGS = objectHasOwnProperty(cfg, "ADD_DATA_URI_TAGS") ? addToSet(
      clone(DEFAULT_DATA_URI_TAGS),
      // eslint-disable-line indent
      cfg.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      transformCaseFunc
      // eslint-disable-line indent
    ) : DEFAULT_DATA_URI_TAGS;
    FORBID_CONTENTS = objectHasOwnProperty(cfg, "FORBID_CONTENTS") ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
    FORBID_TAGS = objectHasOwnProperty(cfg, "FORBID_TAGS") ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
    FORBID_ATTR = objectHasOwnProperty(cfg, "FORBID_ATTR") ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
    USE_PROFILES = objectHasOwnProperty(cfg, "USE_PROFILES") ? cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
    ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
    SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false;
    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
    RETURN_DOM = cfg.RETURN_DOM || false;
    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
    RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
    FORCE_BODY = cfg.FORCE_BODY || false;
    SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
    SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
    KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
    IN_PLACE = cfg.IN_PLACE || false;
    IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
    NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
    CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
    }
    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
    }
    if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") {
      CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
    }
    if (SAFE_FOR_TEMPLATES) {
      ALLOW_DATA_ATTR = false;
    }
    if (RETURN_DOM_FRAGMENT) {
      RETURN_DOM = true;
    }
    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, text);
      ALLOWED_ATTR = [];
      if (USE_PROFILES.html === true) {
        addToSet(ALLOWED_TAGS, html$1);
        addToSet(ALLOWED_ATTR, html);
      }
      if (USE_PROFILES.svg === true) {
        addToSet(ALLOWED_TAGS, svg$1);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.svgFilters === true) {
        addToSet(ALLOWED_TAGS, svgFilters);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.mathMl === true) {
        addToSet(ALLOWED_TAGS, mathMl$1);
        addToSet(ALLOWED_ATTR, mathMl);
        addToSet(ALLOWED_ATTR, xml);
      }
    }
    if (cfg.ADD_TAGS) {
      if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
        ALLOWED_TAGS = clone(ALLOWED_TAGS);
      }
      addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
    }
    if (cfg.ADD_ATTR) {
      if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
        ALLOWED_ATTR = clone(ALLOWED_ATTR);
      }
      addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
    }
    if (cfg.ADD_URI_SAFE_ATTR) {
      addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
    }
    if (cfg.FORBID_CONTENTS) {
      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
        FORBID_CONTENTS = clone(FORBID_CONTENTS);
      }
      addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
    }
    if (KEEP_CONTENT) {
      ALLOWED_TAGS["#text"] = true;
    }
    if (WHOLE_DOCUMENT) {
      addToSet(ALLOWED_TAGS, ["html", "head", "body"]);
    }
    if (ALLOWED_TAGS.table) {
      addToSet(ALLOWED_TAGS, ["tbody"]);
      delete FORBID_TAGS.tbody;
    }
    if (cfg.TRUSTED_TYPES_POLICY) {
      if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") {
        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      }
      if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") {
        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      }
      trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
      emptyHTML = trustedTypesPolicy.createHTML("");
    } else {
      if (trustedTypesPolicy === void 0) {
        trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
      }
      if (trustedTypesPolicy !== null && typeof emptyHTML === "string") {
        emptyHTML = trustedTypesPolicy.createHTML("");
      }
    }
    if (freeze) {
      freeze(cfg);
    }
    CONFIG = cfg;
  };
  const MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ["mi", "mo", "mn", "ms", "mtext"]);
  const HTML_INTEGRATION_POINTS = addToSet({}, ["annotation-xml"]);
  const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ["title", "style", "font", "a", "script"]);
  const ALL_SVG_TAGS = addToSet({}, [...svg$1, ...svgFilters, ...svgDisallowed]);
  const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
  const _checkValidNamespace = function _checkValidNamespace2(element) {
    let parent = getParentNode(element);
    if (!parent || !parent.tagName) {
      parent = {
        namespaceURI: NAMESPACE,
        tagName: "template"
      };
    }
    const tagName = stringToLowerCase(element.tagName);
    const parentTagName = stringToLowerCase(parent.tagName);
    if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
      return false;
    }
    if (element.namespaceURI === SVG_NAMESPACE) {
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === "svg";
      }
      if (parent.namespaceURI === MATHML_NAMESPACE) {
        return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
      }
      return Boolean(ALL_SVG_TAGS[tagName]);
    }
    if (element.namespaceURI === MATHML_NAMESPACE) {
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === "math";
      }
      if (parent.namespaceURI === SVG_NAMESPACE) {
        return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
      }
      return Boolean(ALL_MATHML_TAGS[tagName]);
    }
    if (element.namespaceURI === HTML_NAMESPACE) {
      if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }
      if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }
      return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) {
      return true;
    }
    return false;
  };
  const _forceRemove = function _forceRemove2(node) {
    arrayPush(DOMPurify.removed, {
      element: node
    });
    try {
      getParentNode(node).removeChild(node);
    } catch (_) {
      remove(node);
    }
  };
  const _removeAttribute = function _removeAttribute2(name, node) {
    try {
      arrayPush(DOMPurify.removed, {
        attribute: node.getAttributeNode(name),
        from: node
      });
    } catch (_) {
      arrayPush(DOMPurify.removed, {
        attribute: null,
        from: node
      });
    }
    node.removeAttribute(name);
    if (name === "is" && !ALLOWED_ATTR[name]) {
      if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
        try {
          _forceRemove(node);
        } catch (_) {
        }
      } else {
        try {
          node.setAttribute(name, "");
        } catch (_) {
        }
      }
    }
  };
  const _initDocument = function _initDocument2(dirty) {
    let doc = null;
    let leadingWhitespace = null;
    if (FORCE_BODY) {
      dirty = "<remove></remove>" + dirty;
    } else {
      const matches = stringMatch(dirty, /^[\r\n\t ]+/);
      leadingWhitespace = matches && matches[0];
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) {
      dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
    }
    const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
    if (NAMESPACE === HTML_NAMESPACE) {
      try {
        doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
      } catch (_) {
      }
    }
    if (!doc || !doc.documentElement) {
      doc = implementation.createDocument(NAMESPACE, "template", null);
      try {
        doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
      } catch (_) {
      }
    }
    const body = doc.body || doc.documentElement;
    if (dirty && leadingWhitespace) {
      body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
    }
    if (NAMESPACE === HTML_NAMESPACE) {
      return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
    }
    return WHOLE_DOCUMENT ? doc.documentElement : body;
  };
  const _createNodeIterator = function _createNodeIterator2(root2) {
    return createNodeIterator.call(
      root2.ownerDocument || root2,
      root2,
      // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION,
      null
    );
  };
  const _isClobbered = function _isClobbered2(elm) {
    return elm instanceof HTMLFormElement && (typeof elm.nodeName !== "string" || typeof elm.textContent !== "string" || typeof elm.removeChild !== "function" || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== "function" || typeof elm.setAttribute !== "function" || typeof elm.namespaceURI !== "string" || typeof elm.insertBefore !== "function" || typeof elm.hasChildNodes !== "function");
  };
  const _isNode = function _isNode2(object) {
    return typeof Node === "function" && object instanceof Node;
  };
  const _executeHook = function _executeHook2(entryPoint, currentNode, data) {
    if (!hooks[entryPoint]) {
      return;
    }
    arrayForEach(hooks[entryPoint], (hook) => {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  };
  const _sanitizeElements = function _sanitizeElements2(currentNode) {
    let content = null;
    _executeHook("beforeSanitizeElements", currentNode, null);
    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    const tagName = transformCaseFunc(currentNode.nodeName);
    _executeHook("uponSanitizeElement", currentNode, {
      tagName,
      allowedTags: ALLOWED_TAGS
    });
    if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
      _forceRemove(currentNode);
      return true;
    }
    if (currentNode.nodeType === NODE_TYPE.progressingInstruction) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(/<[/\w]/g, currentNode.data)) {
      _forceRemove(currentNode);
      return true;
    }
    if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
      if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) {
          return false;
        }
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) {
          return false;
        }
      }
      if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
        const parentNode = getParentNode(currentNode) || currentNode.parentNode;
        const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
        if (childNodes && parentNode) {
          const childCount = childNodes.length;
          for (let i = childCount - 1; i >= 0; --i) {
            const childClone = cloneNode(childNodes[i], true);
            childClone.__removalCount = (currentNode.__removalCount || 0) + 1;
            parentNode.insertBefore(childClone, getNextSibling(currentNode));
          }
        }
      }
      _forceRemove(currentNode);
      return true;
    }
    if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
      content = currentNode.textContent;
      arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
        content = stringReplace(content, expr, " ");
      });
      if (currentNode.textContent !== content) {
        arrayPush(DOMPurify.removed, {
          element: currentNode.cloneNode()
        });
        currentNode.textContent = content;
      }
    }
    _executeHook("afterSanitizeElements", currentNode, null);
    return false;
  };
  const _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
    if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document || value in formElement)) {
      return false;
    }
    if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR2, lcName))
      ;
    else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR2, lcName))
      ;
    else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
      if (
        // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        _isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))
      )
        ;
      else {
        return false;
      }
    } else if (URI_SAFE_ATTRIBUTES[lcName])
      ;
    else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE2, "")))
      ;
    else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag])
      ;
    else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA2, stringReplace(value, ATTR_WHITESPACE2, "")))
      ;
    else if (value) {
      return false;
    } else
      ;
    return true;
  };
  const _isBasicCustomElement = function _isBasicCustomElement2(tagName) {
    return tagName !== "annotation-xml" && stringMatch(tagName, CUSTOM_ELEMENT2);
  };
  const _sanitizeAttributes = function _sanitizeAttributes2(currentNode) {
    _executeHook("beforeSanitizeAttributes", currentNode, null);
    const {
      attributes
    } = currentNode;
    if (!attributes) {
      return;
    }
    const hookEvent = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR
    };
    let l = attributes.length;
    while (l--) {
      const attr = attributes[l];
      const {
        name,
        namespaceURI,
        value: attrValue
      } = attr;
      const lcName = transformCaseFunc(name);
      let value = name === "value" ? attrValue : stringTrim(attrValue);
      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      hookEvent.forceKeepAttr = void 0;
      _executeHook("uponSanitizeAttribute", currentNode, hookEvent);
      value = hookEvent.attrValue;
      if (hookEvent.forceKeepAttr) {
        continue;
      }
      _removeAttribute(name, currentNode);
      if (!hookEvent.keepAttr) {
        continue;
      }
      if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (SAFE_FOR_TEMPLATES) {
        arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
          value = stringReplace(value, expr, " ");
        });
      }
      const lcTag = transformCaseFunc(currentNode.nodeName);
      if (!_isValidAttribute(lcTag, lcName, value)) {
        continue;
      }
      if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name")) {
        _removeAttribute(name, currentNode);
        value = SANITIZE_NAMED_PROPS_PREFIX + value;
      }
      if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|title)/i, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function") {
        if (namespaceURI)
          ;
        else {
          switch (trustedTypes.getAttributeType(lcTag, lcName)) {
            case "TrustedHTML": {
              value = trustedTypesPolicy.createHTML(value);
              break;
            }
            case "TrustedScriptURL": {
              value = trustedTypesPolicy.createScriptURL(value);
              break;
            }
          }
        }
      }
      try {
        if (namespaceURI) {
          currentNode.setAttributeNS(namespaceURI, name, value);
        } else {
          currentNode.setAttribute(name, value);
        }
        if (_isClobbered(currentNode)) {
          _forceRemove(currentNode);
        } else {
          arrayPop(DOMPurify.removed);
        }
      } catch (_) {
      }
    }
    _executeHook("afterSanitizeAttributes", currentNode, null);
  };
  const _sanitizeShadowDOM = function _sanitizeShadowDOM2(fragment) {
    let shadowNode = null;
    const shadowIterator = _createNodeIterator(fragment);
    _executeHook("beforeSanitizeShadowDOM", fragment, null);
    while (shadowNode = shadowIterator.nextNode()) {
      _executeHook("uponSanitizeShadowNode", shadowNode, null);
      if (_sanitizeElements(shadowNode)) {
        continue;
      }
      if (shadowNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM2(shadowNode.content);
      }
      _sanitizeAttributes(shadowNode);
    }
    _executeHook("afterSanitizeShadowDOM", fragment, null);
  };
  DOMPurify.sanitize = function(dirty) {
    let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let body = null;
    let importedNode = null;
    let currentNode = null;
    let returnNode = null;
    IS_EMPTY_INPUT = !dirty;
    if (IS_EMPTY_INPUT) {
      dirty = "<!-->";
    }
    if (typeof dirty !== "string" && !_isNode(dirty)) {
      if (typeof dirty.toString === "function") {
        dirty = dirty.toString();
        if (typeof dirty !== "string") {
          throw typeErrorCreate("dirty is not a string, aborting");
        }
      } else {
        throw typeErrorCreate("toString is not a function");
      }
    }
    if (!DOMPurify.isSupported) {
      return dirty;
    }
    if (!SET_CONFIG) {
      _parseConfig(cfg);
    }
    DOMPurify.removed = [];
    if (typeof dirty === "string") {
      IN_PLACE = false;
    }
    if (IN_PLACE) {
      if (dirty.nodeName) {
        const tagName = transformCaseFunc(dirty.nodeName);
        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
          throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
        }
      }
    } else if (dirty instanceof Node) {
      body = _initDocument("<!---->");
      importedNode = body.ownerDocument.importNode(dirty, true);
      if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === "BODY") {
        body = importedNode;
      } else if (importedNode.nodeName === "HTML") {
        body = importedNode;
      } else {
        body.appendChild(importedNode);
      }
    } else {
      if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
      dirty.indexOf("<") === -1) {
        return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
      }
      body = _initDocument(dirty);
      if (!body) {
        return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
      }
    }
    if (body && FORCE_BODY) {
      _forceRemove(body.firstChild);
    }
    const nodeIterator = _createNodeIterator(IN_PLACE ? dirty : body);
    while (currentNode = nodeIterator.nextNode()) {
      if (_sanitizeElements(currentNode)) {
        continue;
      }
      if (currentNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(currentNode.content);
      }
      _sanitizeAttributes(currentNode);
    }
    if (IN_PLACE) {
      return dirty;
    }
    if (RETURN_DOM) {
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);
        while (body.firstChild) {
          returnNode.appendChild(body.firstChild);
        }
      } else {
        returnNode = body;
      }
      if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
        returnNode = importNode.call(originalDocument, returnNode, true);
      }
      return returnNode;
    }
    let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
    if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
      serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
    }
    if (SAFE_FOR_TEMPLATES) {
      arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
        serializedHTML = stringReplace(serializedHTML, expr, " ");
      });
    }
    return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
  };
  DOMPurify.setConfig = function() {
    let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _parseConfig(cfg);
    SET_CONFIG = true;
  };
  DOMPurify.clearConfig = function() {
    CONFIG = null;
    SET_CONFIG = false;
  };
  DOMPurify.isValidAttribute = function(tag, attr, value) {
    if (!CONFIG) {
      _parseConfig({});
    }
    const lcTag = transformCaseFunc(tag);
    const lcName = transformCaseFunc(attr);
    return _isValidAttribute(lcTag, lcName, value);
  };
  DOMPurify.addHook = function(entryPoint, hookFunction) {
    if (typeof hookFunction !== "function") {
      return;
    }
    hooks[entryPoint] = hooks[entryPoint] || [];
    arrayPush(hooks[entryPoint], hookFunction);
  };
  DOMPurify.removeHook = function(entryPoint) {
    if (hooks[entryPoint]) {
      return arrayPop(hooks[entryPoint]);
    }
  };
  DOMPurify.removeHooks = function(entryPoint) {
    if (hooks[entryPoint]) {
      hooks[entryPoint] = [];
    }
  };
  DOMPurify.removeAllHooks = function() {
    hooks = {};
  };
  return DOMPurify;
}
var purify = createDOMPurify();
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var FUNC_ERROR_TEXT = "Expected a function";
var NAN = 0 / 0;
var symbolTag = "[object Symbol]";
var reTrim = /^\s+|\s+$/g;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function("return this")();
var objectProto = Object.prototype;
var objectToString = objectProto.toString;
var nativeMax = Math.max, nativeMin = Math.min;
var now = function() {
  return root.Date.now();
};
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
    return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
function isObject(value) {
  var type = typeof value;
  return !!value && (type == "object" || type == "function");
}
function isObjectLike(value) {
  return !!value && typeof value == "object";
}
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, "");
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var lodash_debounce = debounce;
const debounce$1 = /* @__PURE__ */ getDefaultExportFromCjs(lodash_debounce);
export {
  debounce$1 as d,
  getDefaultExportFromCjs as g,
  purify as p
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLTUzMWFiYTQ4LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZG9tcHVyaWZ5L2Rpc3QvcHVyaWZ5LmVzLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2guZGVib3VuY2UvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohIEBsaWNlbnNlIERPTVB1cmlmeSAzLjEuNyB8IChjKSBDdXJlNTMgYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyB8IFJlbGVhc2VkIHVuZGVyIHRoZSBBcGFjaGUgbGljZW5zZSAyLjAgYW5kIE1vemlsbGEgUHVibGljIExpY2Vuc2UgMi4wIHwgZ2l0aHViLmNvbS9jdXJlNTMvRE9NUHVyaWZ5L2Jsb2IvMy4xLjcvTElDRU5TRSAqL1xuXG5jb25zdCB7XG4gIGVudHJpZXMsXG4gIHNldFByb3RvdHlwZU9mLFxuICBpc0Zyb3plbixcbiAgZ2V0UHJvdG90eXBlT2YsXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvclxufSA9IE9iamVjdDtcbmxldCB7XG4gIGZyZWV6ZSxcbiAgc2VhbCxcbiAgY3JlYXRlXG59ID0gT2JqZWN0OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHNcbmxldCB7XG4gIGFwcGx5LFxuICBjb25zdHJ1Y3Rcbn0gPSB0eXBlb2YgUmVmbGVjdCAhPT0gJ3VuZGVmaW5lZCcgJiYgUmVmbGVjdDtcbmlmICghZnJlZXplKSB7XG4gIGZyZWV6ZSA9IGZ1bmN0aW9uIGZyZWV6ZSh4KSB7XG4gICAgcmV0dXJuIHg7XG4gIH07XG59XG5pZiAoIXNlYWwpIHtcbiAgc2VhbCA9IGZ1bmN0aW9uIHNlYWwoeCkge1xuICAgIHJldHVybiB4O1xuICB9O1xufVxuaWYgKCFhcHBseSkge1xuICBhcHBseSA9IGZ1bmN0aW9uIGFwcGx5KGZ1biwgdGhpc1ZhbHVlLCBhcmdzKSB7XG4gICAgcmV0dXJuIGZ1bi5hcHBseSh0aGlzVmFsdWUsIGFyZ3MpO1xuICB9O1xufVxuaWYgKCFjb25zdHJ1Y3QpIHtcbiAgY29uc3RydWN0ID0gZnVuY3Rpb24gY29uc3RydWN0KEZ1bmMsIGFyZ3MpIHtcbiAgICByZXR1cm4gbmV3IEZ1bmMoLi4uYXJncyk7XG4gIH07XG59XG5jb25zdCBhcnJheUZvckVhY2ggPSB1bmFwcGx5KEFycmF5LnByb3RvdHlwZS5mb3JFYWNoKTtcbmNvbnN0IGFycmF5UG9wID0gdW5hcHBseShBcnJheS5wcm90b3R5cGUucG9wKTtcbmNvbnN0IGFycmF5UHVzaCA9IHVuYXBwbHkoQXJyYXkucHJvdG90eXBlLnB1c2gpO1xuY29uc3Qgc3RyaW5nVG9Mb3dlckNhc2UgPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUudG9Mb3dlckNhc2UpO1xuY29uc3Qgc3RyaW5nVG9TdHJpbmcgPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUudG9TdHJpbmcpO1xuY29uc3Qgc3RyaW5nTWF0Y2ggPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUubWF0Y2gpO1xuY29uc3Qgc3RyaW5nUmVwbGFjZSA9IHVuYXBwbHkoU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKTtcbmNvbnN0IHN0cmluZ0luZGV4T2YgPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUuaW5kZXhPZik7XG5jb25zdCBzdHJpbmdUcmltID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLnRyaW0pO1xuY29uc3Qgb2JqZWN0SGFzT3duUHJvcGVydHkgPSB1bmFwcGx5KE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuY29uc3QgcmVnRXhwVGVzdCA9IHVuYXBwbHkoUmVnRXhwLnByb3RvdHlwZS50ZXN0KTtcbmNvbnN0IHR5cGVFcnJvckNyZWF0ZSA9IHVuY29uc3RydWN0KFR5cGVFcnJvcik7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBmdW5jdGlvbiB0aGF0IGNhbGxzIHRoZSBnaXZlbiBmdW5jdGlvbiB3aXRoIGEgc3BlY2lmaWVkIHRoaXNBcmcgYW5kIGFyZ3VtZW50cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIC0gVGhlIGZ1bmN0aW9uIHRvIGJlIHdyYXBwZWQgYW5kIGNhbGxlZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBuZXcgZnVuY3Rpb24gdGhhdCBjYWxscyB0aGUgZ2l2ZW4gZnVuY3Rpb24gd2l0aCBhIHNwZWNpZmllZCB0aGlzQXJnIGFuZCBhcmd1bWVudHMuXG4gKi9cbmZ1bmN0aW9uIHVuYXBwbHkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoaXNBcmcpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIGFwcGx5KGZ1bmMsIHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZnVuY3Rpb24gdGhhdCBjb25zdHJ1Y3RzIGFuIGluc3RhbmNlIG9mIHRoZSBnaXZlbiBjb25zdHJ1Y3RvciBmdW5jdGlvbiB3aXRoIHRoZSBwcm92aWRlZCBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyAtIFRoZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiB0byBiZSB3cmFwcGVkIGFuZCBjYWxsZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgbmV3IGZ1bmN0aW9uIHRoYXQgY29uc3RydWN0cyBhbiBpbnN0YW5jZSBvZiB0aGUgZ2l2ZW4gY29uc3RydWN0b3IgZnVuY3Rpb24gd2l0aCB0aGUgcHJvdmlkZWQgYXJndW1lbnRzLlxuICovXG5mdW5jdGlvbiB1bmNvbnN0cnVjdChmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuICAgIHJldHVybiBjb25zdHJ1Y3QoZnVuYywgYXJncyk7XG4gIH07XG59XG5cbi8qKlxuICogQWRkIHByb3BlcnRpZXMgdG8gYSBsb29rdXAgdGFibGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IC0gVGhlIHNldCB0byB3aGljaCBlbGVtZW50cyB3aWxsIGJlIGFkZGVkLlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgLSBUaGUgYXJyYXkgY29udGFpbmluZyBlbGVtZW50cyB0byBiZSBhZGRlZCB0byB0aGUgc2V0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtQ2FzZUZ1bmMgLSBBbiBvcHRpb25hbCBmdW5jdGlvbiB0byB0cmFuc2Zvcm0gdGhlIGNhc2Ugb2YgZWFjaCBlbGVtZW50IGJlZm9yZSBhZGRpbmcgdG8gdGhlIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBtb2RpZmllZCBzZXQgd2l0aCBhZGRlZCBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gYWRkVG9TZXQoc2V0LCBhcnJheSkge1xuICBsZXQgdHJhbnNmb3JtQ2FzZUZ1bmMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHN0cmluZ1RvTG93ZXJDYXNlO1xuICBpZiAoc2V0UHJvdG90eXBlT2YpIHtcbiAgICAvLyBNYWtlICdpbicgYW5kIHRydXRoeSBjaGVja3MgbGlrZSBCb29sZWFuKHNldC5jb25zdHJ1Y3RvcilcbiAgICAvLyBpbmRlcGVuZGVudCBvZiBhbnkgcHJvcGVydGllcyBkZWZpbmVkIG9uIE9iamVjdC5wcm90b3R5cGUuXG4gICAgLy8gUHJldmVudCBwcm90b3R5cGUgc2V0dGVycyBmcm9tIGludGVyY2VwdGluZyBzZXQgYXMgYSB0aGlzIHZhbHVlLlxuICAgIHNldFByb3RvdHlwZU9mKHNldCwgbnVsbCk7XG4gIH1cbiAgbGV0IGwgPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsLS0pIHtcbiAgICBsZXQgZWxlbWVudCA9IGFycmF5W2xdO1xuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IGxjRWxlbWVudCA9IHRyYW5zZm9ybUNhc2VGdW5jKGVsZW1lbnQpO1xuICAgICAgaWYgKGxjRWxlbWVudCAhPT0gZWxlbWVudCkge1xuICAgICAgICAvLyBDb25maWcgcHJlc2V0cyAoZS5nLiB0YWdzLmpzLCBhdHRycy5qcykgYXJlIGltbXV0YWJsZS5cbiAgICAgICAgaWYgKCFpc0Zyb3plbihhcnJheSkpIHtcbiAgICAgICAgICBhcnJheVtsXSA9IGxjRWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gbGNFbGVtZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBzZXRbZWxlbWVudF0gPSB0cnVlO1xuICB9XG4gIHJldHVybiBzZXQ7XG59XG5cbi8qKlxuICogQ2xlYW4gdXAgYW4gYXJyYXkgdG8gaGFyZGVuIGFnYWluc3QgQ1NQUFxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IC0gVGhlIGFycmF5IHRvIGJlIGNsZWFuZWQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBjbGVhbmVkIHZlcnNpb24gb2YgdGhlIGFycmF5XG4gKi9cbmZ1bmN0aW9uIGNsZWFuQXJyYXkoYXJyYXkpIHtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGlzUHJvcGVydHlFeGlzdCA9IG9iamVjdEhhc093blByb3BlcnR5KGFycmF5LCBpbmRleCk7XG4gICAgaWYgKCFpc1Byb3BlcnR5RXhpc3QpIHtcbiAgICAgIGFycmF5W2luZGV4XSA9IG51bGw7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuLyoqXG4gKiBTaGFsbG93IGNsb25lIGFuIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgLSBUaGUgb2JqZWN0IHRvIGJlIGNsb25lZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IEEgbmV3IG9iamVjdCB0aGF0IGNvcGllcyB0aGUgb3JpZ2luYWwuXG4gKi9cbmZ1bmN0aW9uIGNsb25lKG9iamVjdCkge1xuICBjb25zdCBuZXdPYmplY3QgPSBjcmVhdGUobnVsbCk7XG4gIGZvciAoY29uc3QgW3Byb3BlcnR5LCB2YWx1ZV0gb2YgZW50cmllcyhvYmplY3QpKSB7XG4gICAgY29uc3QgaXNQcm9wZXJ0eUV4aXN0ID0gb2JqZWN0SGFzT3duUHJvcGVydHkob2JqZWN0LCBwcm9wZXJ0eSk7XG4gICAgaWYgKGlzUHJvcGVydHlFeGlzdCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIG5ld09iamVjdFtwcm9wZXJ0eV0gPSBjbGVhbkFycmF5KHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgIG5ld09iamVjdFtwcm9wZXJ0eV0gPSBjbG9uZSh2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmplY3RbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXdPYmplY3Q7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgYXV0b21hdGljYWxseSBjaGVja3MgaWYgdGhlIHByb3AgaXMgZnVuY3Rpb24gb3IgZ2V0dGVyIGFuZCBiZWhhdmVzIGFjY29yZGluZ2x5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgLSBUaGUgb2JqZWN0IHRvIGxvb2sgdXAgdGhlIGdldHRlciBmdW5jdGlvbiBpbiBpdHMgcHJvdG90eXBlIGNoYWluLlxuICogQHBhcmFtIHtTdHJpbmd9IHByb3AgLSBUaGUgcHJvcGVydHkgbmFtZSBmb3Igd2hpY2ggdG8gZmluZCB0aGUgZ2V0dGVyIGZ1bmN0aW9uLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBUaGUgZ2V0dGVyIGZ1bmN0aW9uIGZvdW5kIGluIHRoZSBwcm90b3R5cGUgY2hhaW4gb3IgYSBmYWxsYmFjayBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbG9va3VwR2V0dGVyKG9iamVjdCwgcHJvcCkge1xuICB3aGlsZSAob2JqZWN0ICE9PSBudWxsKSB7XG4gICAgY29uc3QgZGVzYyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3ApO1xuICAgIGlmIChkZXNjKSB7XG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIHVuYXBwbHkoZGVzYy5nZXQpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBkZXNjLnZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB1bmFwcGx5KGRlc2MudmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICB9XG4gIGZ1bmN0aW9uIGZhbGxiYWNrVmFsdWUoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIGZhbGxiYWNrVmFsdWU7XG59XG5cbmNvbnN0IGh0bWwkMSA9IGZyZWV6ZShbJ2EnLCAnYWJicicsICdhY3JvbnltJywgJ2FkZHJlc3MnLCAnYXJlYScsICdhcnRpY2xlJywgJ2FzaWRlJywgJ2F1ZGlvJywgJ2InLCAnYmRpJywgJ2JkbycsICdiaWcnLCAnYmxpbmsnLCAnYmxvY2txdW90ZScsICdib2R5JywgJ2JyJywgJ2J1dHRvbicsICdjYW52YXMnLCAnY2FwdGlvbicsICdjZW50ZXInLCAnY2l0ZScsICdjb2RlJywgJ2NvbCcsICdjb2xncm91cCcsICdjb250ZW50JywgJ2RhdGEnLCAnZGF0YWxpc3QnLCAnZGQnLCAnZGVjb3JhdG9yJywgJ2RlbCcsICdkZXRhaWxzJywgJ2RmbicsICdkaWFsb2cnLCAnZGlyJywgJ2RpdicsICdkbCcsICdkdCcsICdlbGVtZW50JywgJ2VtJywgJ2ZpZWxkc2V0JywgJ2ZpZ2NhcHRpb24nLCAnZmlndXJlJywgJ2ZvbnQnLCAnZm9vdGVyJywgJ2Zvcm0nLCAnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnaGVhZCcsICdoZWFkZXInLCAnaGdyb3VwJywgJ2hyJywgJ2h0bWwnLCAnaScsICdpbWcnLCAnaW5wdXQnLCAnaW5zJywgJ2tiZCcsICdsYWJlbCcsICdsZWdlbmQnLCAnbGknLCAnbWFpbicsICdtYXAnLCAnbWFyaycsICdtYXJxdWVlJywgJ21lbnUnLCAnbWVudWl0ZW0nLCAnbWV0ZXInLCAnbmF2JywgJ25vYnInLCAnb2wnLCAnb3B0Z3JvdXAnLCAnb3B0aW9uJywgJ291dHB1dCcsICdwJywgJ3BpY3R1cmUnLCAncHJlJywgJ3Byb2dyZXNzJywgJ3EnLCAncnAnLCAncnQnLCAncnVieScsICdzJywgJ3NhbXAnLCAnc2VjdGlvbicsICdzZWxlY3QnLCAnc2hhZG93JywgJ3NtYWxsJywgJ3NvdXJjZScsICdzcGFjZXInLCAnc3BhbicsICdzdHJpa2UnLCAnc3Ryb25nJywgJ3N0eWxlJywgJ3N1YicsICdzdW1tYXJ5JywgJ3N1cCcsICd0YWJsZScsICd0Ym9keScsICd0ZCcsICd0ZW1wbGF0ZScsICd0ZXh0YXJlYScsICd0Zm9vdCcsICd0aCcsICd0aGVhZCcsICd0aW1lJywgJ3RyJywgJ3RyYWNrJywgJ3R0JywgJ3UnLCAndWwnLCAndmFyJywgJ3ZpZGVvJywgJ3diciddKTtcblxuLy8gU1ZHXG5jb25zdCBzdmckMSA9IGZyZWV6ZShbJ3N2ZycsICdhJywgJ2FsdGdseXBoJywgJ2FsdGdseXBoZGVmJywgJ2FsdGdseXBoaXRlbScsICdhbmltYXRlY29sb3InLCAnYW5pbWF0ZW1vdGlvbicsICdhbmltYXRldHJhbnNmb3JtJywgJ2NpcmNsZScsICdjbGlwcGF0aCcsICdkZWZzJywgJ2Rlc2MnLCAnZWxsaXBzZScsICdmaWx0ZXInLCAnZm9udCcsICdnJywgJ2dseXBoJywgJ2dseXBocmVmJywgJ2hrZXJuJywgJ2ltYWdlJywgJ2xpbmUnLCAnbGluZWFyZ3JhZGllbnQnLCAnbWFya2VyJywgJ21hc2snLCAnbWV0YWRhdGEnLCAnbXBhdGgnLCAncGF0aCcsICdwYXR0ZXJuJywgJ3BvbHlnb24nLCAncG9seWxpbmUnLCAncmFkaWFsZ3JhZGllbnQnLCAncmVjdCcsICdzdG9wJywgJ3N0eWxlJywgJ3N3aXRjaCcsICdzeW1ib2wnLCAndGV4dCcsICd0ZXh0cGF0aCcsICd0aXRsZScsICd0cmVmJywgJ3RzcGFuJywgJ3ZpZXcnLCAndmtlcm4nXSk7XG5jb25zdCBzdmdGaWx0ZXJzID0gZnJlZXplKFsnZmVCbGVuZCcsICdmZUNvbG9yTWF0cml4JywgJ2ZlQ29tcG9uZW50VHJhbnNmZXInLCAnZmVDb21wb3NpdGUnLCAnZmVDb252b2x2ZU1hdHJpeCcsICdmZURpZmZ1c2VMaWdodGluZycsICdmZURpc3BsYWNlbWVudE1hcCcsICdmZURpc3RhbnRMaWdodCcsICdmZURyb3BTaGFkb3cnLCAnZmVGbG9vZCcsICdmZUZ1bmNBJywgJ2ZlRnVuY0InLCAnZmVGdW5jRycsICdmZUZ1bmNSJywgJ2ZlR2F1c3NpYW5CbHVyJywgJ2ZlSW1hZ2UnLCAnZmVNZXJnZScsICdmZU1lcmdlTm9kZScsICdmZU1vcnBob2xvZ3knLCAnZmVPZmZzZXQnLCAnZmVQb2ludExpZ2h0JywgJ2ZlU3BlY3VsYXJMaWdodGluZycsICdmZVNwb3RMaWdodCcsICdmZVRpbGUnLCAnZmVUdXJidWxlbmNlJ10pO1xuXG4vLyBMaXN0IG9mIFNWRyBlbGVtZW50cyB0aGF0IGFyZSBkaXNhbGxvd2VkIGJ5IGRlZmF1bHQuXG4vLyBXZSBzdGlsbCBuZWVkIHRvIGtub3cgdGhlbSBzbyB0aGF0IHdlIGNhbiBkbyBuYW1lc3BhY2Vcbi8vIGNoZWNrcyBwcm9wZXJseSBpbiBjYXNlIG9uZSB3YW50cyB0byBhZGQgdGhlbSB0b1xuLy8gYWxsb3ctbGlzdC5cbmNvbnN0IHN2Z0Rpc2FsbG93ZWQgPSBmcmVlemUoWydhbmltYXRlJywgJ2NvbG9yLXByb2ZpbGUnLCAnY3Vyc29yJywgJ2Rpc2NhcmQnLCAnZm9udC1mYWNlJywgJ2ZvbnQtZmFjZS1mb3JtYXQnLCAnZm9udC1mYWNlLW5hbWUnLCAnZm9udC1mYWNlLXNyYycsICdmb250LWZhY2UtdXJpJywgJ2ZvcmVpZ25vYmplY3QnLCAnaGF0Y2gnLCAnaGF0Y2hwYXRoJywgJ21lc2gnLCAnbWVzaGdyYWRpZW50JywgJ21lc2hwYXRjaCcsICdtZXNocm93JywgJ21pc3NpbmctZ2x5cGgnLCAnc2NyaXB0JywgJ3NldCcsICdzb2xpZGNvbG9yJywgJ3Vua25vd24nLCAndXNlJ10pO1xuY29uc3QgbWF0aE1sJDEgPSBmcmVlemUoWydtYXRoJywgJ21lbmNsb3NlJywgJ21lcnJvcicsICdtZmVuY2VkJywgJ21mcmFjJywgJ21nbHlwaCcsICdtaScsICdtbGFiZWxlZHRyJywgJ21tdWx0aXNjcmlwdHMnLCAnbW4nLCAnbW8nLCAnbW92ZXInLCAnbXBhZGRlZCcsICdtcGhhbnRvbScsICdtcm9vdCcsICdtcm93JywgJ21zJywgJ21zcGFjZScsICdtc3FydCcsICdtc3R5bGUnLCAnbXN1YicsICdtc3VwJywgJ21zdWJzdXAnLCAnbXRhYmxlJywgJ210ZCcsICdtdGV4dCcsICdtdHInLCAnbXVuZGVyJywgJ211bmRlcm92ZXInLCAnbXByZXNjcmlwdHMnXSk7XG5cbi8vIFNpbWlsYXJseSB0byBTVkcsIHdlIHdhbnQgdG8ga25vdyBhbGwgTWF0aE1MIGVsZW1lbnRzLFxuLy8gZXZlbiB0aG9zZSB0aGF0IHdlIGRpc2FsbG93IGJ5IGRlZmF1bHQuXG5jb25zdCBtYXRoTWxEaXNhbGxvd2VkID0gZnJlZXplKFsnbWFjdGlvbicsICdtYWxpZ25ncm91cCcsICdtYWxpZ25tYXJrJywgJ21sb25nZGl2JywgJ21zY2FycmllcycsICdtc2NhcnJ5JywgJ21zZ3JvdXAnLCAnbXN0YWNrJywgJ21zbGluZScsICdtc3JvdycsICdzZW1hbnRpY3MnLCAnYW5ub3RhdGlvbicsICdhbm5vdGF0aW9uLXhtbCcsICdtcHJlc2NyaXB0cycsICdub25lJ10pO1xuY29uc3QgdGV4dCA9IGZyZWV6ZShbJyN0ZXh0J10pO1xuXG5jb25zdCBodG1sID0gZnJlZXplKFsnYWNjZXB0JywgJ2FjdGlvbicsICdhbGlnbicsICdhbHQnLCAnYXV0b2NhcGl0YWxpemUnLCAnYXV0b2NvbXBsZXRlJywgJ2F1dG9waWN0dXJlaW5waWN0dXJlJywgJ2F1dG9wbGF5JywgJ2JhY2tncm91bmQnLCAnYmdjb2xvcicsICdib3JkZXInLCAnY2FwdHVyZScsICdjZWxscGFkZGluZycsICdjZWxsc3BhY2luZycsICdjaGVja2VkJywgJ2NpdGUnLCAnY2xhc3MnLCAnY2xlYXInLCAnY29sb3InLCAnY29scycsICdjb2xzcGFuJywgJ2NvbnRyb2xzJywgJ2NvbnRyb2xzbGlzdCcsICdjb29yZHMnLCAnY3Jvc3NvcmlnaW4nLCAnZGF0ZXRpbWUnLCAnZGVjb2RpbmcnLCAnZGVmYXVsdCcsICdkaXInLCAnZGlzYWJsZWQnLCAnZGlzYWJsZXBpY3R1cmVpbnBpY3R1cmUnLCAnZGlzYWJsZXJlbW90ZXBsYXliYWNrJywgJ2Rvd25sb2FkJywgJ2RyYWdnYWJsZScsICdlbmN0eXBlJywgJ2VudGVya2V5aGludCcsICdmYWNlJywgJ2ZvcicsICdoZWFkZXJzJywgJ2hlaWdodCcsICdoaWRkZW4nLCAnaGlnaCcsICdocmVmJywgJ2hyZWZsYW5nJywgJ2lkJywgJ2lucHV0bW9kZScsICdpbnRlZ3JpdHknLCAnaXNtYXAnLCAna2luZCcsICdsYWJlbCcsICdsYW5nJywgJ2xpc3QnLCAnbG9hZGluZycsICdsb29wJywgJ2xvdycsICdtYXgnLCAnbWF4bGVuZ3RoJywgJ21lZGlhJywgJ21ldGhvZCcsICdtaW4nLCAnbWlubGVuZ3RoJywgJ211bHRpcGxlJywgJ211dGVkJywgJ25hbWUnLCAnbm9uY2UnLCAnbm9zaGFkZScsICdub3ZhbGlkYXRlJywgJ25vd3JhcCcsICdvcGVuJywgJ29wdGltdW0nLCAncGF0dGVybicsICdwbGFjZWhvbGRlcicsICdwbGF5c2lubGluZScsICdwb3BvdmVyJywgJ3BvcG92ZXJ0YXJnZXQnLCAncG9wb3ZlcnRhcmdldGFjdGlvbicsICdwb3N0ZXInLCAncHJlbG9hZCcsICdwdWJkYXRlJywgJ3JhZGlvZ3JvdXAnLCAncmVhZG9ubHknLCAncmVsJywgJ3JlcXVpcmVkJywgJ3JldicsICdyZXZlcnNlZCcsICdyb2xlJywgJ3Jvd3MnLCAncm93c3BhbicsICdzcGVsbGNoZWNrJywgJ3Njb3BlJywgJ3NlbGVjdGVkJywgJ3NoYXBlJywgJ3NpemUnLCAnc2l6ZXMnLCAnc3BhbicsICdzcmNsYW5nJywgJ3N0YXJ0JywgJ3NyYycsICdzcmNzZXQnLCAnc3RlcCcsICdzdHlsZScsICdzdW1tYXJ5JywgJ3RhYmluZGV4JywgJ3RpdGxlJywgJ3RyYW5zbGF0ZScsICd0eXBlJywgJ3VzZW1hcCcsICd2YWxpZ24nLCAndmFsdWUnLCAnd2lkdGgnLCAnd3JhcCcsICd4bWxucycsICdzbG90J10pO1xuY29uc3Qgc3ZnID0gZnJlZXplKFsnYWNjZW50LWhlaWdodCcsICdhY2N1bXVsYXRlJywgJ2FkZGl0aXZlJywgJ2FsaWdubWVudC1iYXNlbGluZScsICdhbXBsaXR1ZGUnLCAnYXNjZW50JywgJ2F0dHJpYnV0ZW5hbWUnLCAnYXR0cmlidXRldHlwZScsICdhemltdXRoJywgJ2Jhc2VmcmVxdWVuY3knLCAnYmFzZWxpbmUtc2hpZnQnLCAnYmVnaW4nLCAnYmlhcycsICdieScsICdjbGFzcycsICdjbGlwJywgJ2NsaXBwYXRodW5pdHMnLCAnY2xpcC1wYXRoJywgJ2NsaXAtcnVsZScsICdjb2xvcicsICdjb2xvci1pbnRlcnBvbGF0aW9uJywgJ2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVycycsICdjb2xvci1wcm9maWxlJywgJ2NvbG9yLXJlbmRlcmluZycsICdjeCcsICdjeScsICdkJywgJ2R4JywgJ2R5JywgJ2RpZmZ1c2Vjb25zdGFudCcsICdkaXJlY3Rpb24nLCAnZGlzcGxheScsICdkaXZpc29yJywgJ2R1cicsICdlZGdlbW9kZScsICdlbGV2YXRpb24nLCAnZW5kJywgJ2V4cG9uZW50JywgJ2ZpbGwnLCAnZmlsbC1vcGFjaXR5JywgJ2ZpbGwtcnVsZScsICdmaWx0ZXInLCAnZmlsdGVydW5pdHMnLCAnZmxvb2QtY29sb3InLCAnZmxvb2Qtb3BhY2l0eScsICdmb250LWZhbWlseScsICdmb250LXNpemUnLCAnZm9udC1zaXplLWFkanVzdCcsICdmb250LXN0cmV0Y2gnLCAnZm9udC1zdHlsZScsICdmb250LXZhcmlhbnQnLCAnZm9udC13ZWlnaHQnLCAnZngnLCAnZnknLCAnZzEnLCAnZzInLCAnZ2x5cGgtbmFtZScsICdnbHlwaHJlZicsICdncmFkaWVudHVuaXRzJywgJ2dyYWRpZW50dHJhbnNmb3JtJywgJ2hlaWdodCcsICdocmVmJywgJ2lkJywgJ2ltYWdlLXJlbmRlcmluZycsICdpbicsICdpbjInLCAnaW50ZXJjZXB0JywgJ2snLCAnazEnLCAnazInLCAnazMnLCAnazQnLCAna2VybmluZycsICdrZXlwb2ludHMnLCAna2V5c3BsaW5lcycsICdrZXl0aW1lcycsICdsYW5nJywgJ2xlbmd0aGFkanVzdCcsICdsZXR0ZXItc3BhY2luZycsICdrZXJuZWxtYXRyaXgnLCAna2VybmVsdW5pdGxlbmd0aCcsICdsaWdodGluZy1jb2xvcicsICdsb2NhbCcsICdtYXJrZXItZW5kJywgJ21hcmtlci1taWQnLCAnbWFya2VyLXN0YXJ0JywgJ21hcmtlcmhlaWdodCcsICdtYXJrZXJ1bml0cycsICdtYXJrZXJ3aWR0aCcsICdtYXNrY29udGVudHVuaXRzJywgJ21hc2t1bml0cycsICdtYXgnLCAnbWFzaycsICdtZWRpYScsICdtZXRob2QnLCAnbW9kZScsICdtaW4nLCAnbmFtZScsICdudW1vY3RhdmVzJywgJ29mZnNldCcsICdvcGVyYXRvcicsICdvcGFjaXR5JywgJ29yZGVyJywgJ29yaWVudCcsICdvcmllbnRhdGlvbicsICdvcmlnaW4nLCAnb3ZlcmZsb3cnLCAncGFpbnQtb3JkZXInLCAncGF0aCcsICdwYXRobGVuZ3RoJywgJ3BhdHRlcm5jb250ZW50dW5pdHMnLCAncGF0dGVybnRyYW5zZm9ybScsICdwYXR0ZXJudW5pdHMnLCAncG9pbnRzJywgJ3ByZXNlcnZlYWxwaGEnLCAncHJlc2VydmVhc3BlY3RyYXRpbycsICdwcmltaXRpdmV1bml0cycsICdyJywgJ3J4JywgJ3J5JywgJ3JhZGl1cycsICdyZWZ4JywgJ3JlZnknLCAncmVwZWF0Y291bnQnLCAncmVwZWF0ZHVyJywgJ3Jlc3RhcnQnLCAncmVzdWx0JywgJ3JvdGF0ZScsICdzY2FsZScsICdzZWVkJywgJ3NoYXBlLXJlbmRlcmluZycsICdzbG9wZScsICdzcGVjdWxhcmNvbnN0YW50JywgJ3NwZWN1bGFyZXhwb25lbnQnLCAnc3ByZWFkbWV0aG9kJywgJ3N0YXJ0b2Zmc2V0JywgJ3N0ZGRldmlhdGlvbicsICdzdGl0Y2h0aWxlcycsICdzdG9wLWNvbG9yJywgJ3N0b3Atb3BhY2l0eScsICdzdHJva2UtZGFzaGFycmF5JywgJ3N0cm9rZS1kYXNob2Zmc2V0JywgJ3N0cm9rZS1saW5lY2FwJywgJ3N0cm9rZS1saW5lam9pbicsICdzdHJva2UtbWl0ZXJsaW1pdCcsICdzdHJva2Utb3BhY2l0eScsICdzdHJva2UnLCAnc3Ryb2tlLXdpZHRoJywgJ3N0eWxlJywgJ3N1cmZhY2VzY2FsZScsICdzeXN0ZW1sYW5ndWFnZScsICd0YWJpbmRleCcsICd0YWJsZXZhbHVlcycsICd0YXJnZXR4JywgJ3RhcmdldHknLCAndHJhbnNmb3JtJywgJ3RyYW5zZm9ybS1vcmlnaW4nLCAndGV4dC1hbmNob3InLCAndGV4dC1kZWNvcmF0aW9uJywgJ3RleHQtcmVuZGVyaW5nJywgJ3RleHRsZW5ndGgnLCAndHlwZScsICd1MScsICd1MicsICd1bmljb2RlJywgJ3ZhbHVlcycsICd2aWV3Ym94JywgJ3Zpc2liaWxpdHknLCAndmVyc2lvbicsICd2ZXJ0LWFkdi15JywgJ3ZlcnQtb3JpZ2luLXgnLCAndmVydC1vcmlnaW4teScsICd3aWR0aCcsICd3b3JkLXNwYWNpbmcnLCAnd3JhcCcsICd3cml0aW5nLW1vZGUnLCAneGNoYW5uZWxzZWxlY3RvcicsICd5Y2hhbm5lbHNlbGVjdG9yJywgJ3gnLCAneDEnLCAneDInLCAneG1sbnMnLCAneScsICd5MScsICd5MicsICd6JywgJ3pvb21hbmRwYW4nXSk7XG5jb25zdCBtYXRoTWwgPSBmcmVlemUoWydhY2NlbnQnLCAnYWNjZW50dW5kZXInLCAnYWxpZ24nLCAnYmV2ZWxsZWQnLCAnY2xvc2UnLCAnY29sdW1uc2FsaWduJywgJ2NvbHVtbmxpbmVzJywgJ2NvbHVtbnNwYW4nLCAnZGVub21hbGlnbicsICdkZXB0aCcsICdkaXInLCAnZGlzcGxheScsICdkaXNwbGF5c3R5bGUnLCAnZW5jb2RpbmcnLCAnZmVuY2UnLCAnZnJhbWUnLCAnaGVpZ2h0JywgJ2hyZWYnLCAnaWQnLCAnbGFyZ2VvcCcsICdsZW5ndGgnLCAnbGluZXRoaWNrbmVzcycsICdsc3BhY2UnLCAnbHF1b3RlJywgJ21hdGhiYWNrZ3JvdW5kJywgJ21hdGhjb2xvcicsICdtYXRoc2l6ZScsICdtYXRodmFyaWFudCcsICdtYXhzaXplJywgJ21pbnNpemUnLCAnbW92YWJsZWxpbWl0cycsICdub3RhdGlvbicsICdudW1hbGlnbicsICdvcGVuJywgJ3Jvd2FsaWduJywgJ3Jvd2xpbmVzJywgJ3Jvd3NwYWNpbmcnLCAncm93c3BhbicsICdyc3BhY2UnLCAncnF1b3RlJywgJ3NjcmlwdGxldmVsJywgJ3NjcmlwdG1pbnNpemUnLCAnc2NyaXB0c2l6ZW11bHRpcGxpZXInLCAnc2VsZWN0aW9uJywgJ3NlcGFyYXRvcicsICdzZXBhcmF0b3JzJywgJ3N0cmV0Y2h5JywgJ3N1YnNjcmlwdHNoaWZ0JywgJ3N1cHNjcmlwdHNoaWZ0JywgJ3N5bW1ldHJpYycsICd2b2Zmc2V0JywgJ3dpZHRoJywgJ3htbG5zJ10pO1xuY29uc3QgeG1sID0gZnJlZXplKFsneGxpbms6aHJlZicsICd4bWw6aWQnLCAneGxpbms6dGl0bGUnLCAneG1sOnNwYWNlJywgJ3htbG5zOnhsaW5rJ10pO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9iZXR0ZXItcmVnZXhcbmNvbnN0IE1VU1RBQ0hFX0VYUFIgPSBzZWFsKC9cXHtcXHtbXFx3XFxXXSp8W1xcd1xcV10qXFx9XFx9L2dtKTsgLy8gU3BlY2lmeSB0ZW1wbGF0ZSBkZXRlY3Rpb24gcmVnZXggZm9yIFNBRkVfRk9SX1RFTVBMQVRFUyBtb2RlXG5jb25zdCBFUkJfRVhQUiA9IHNlYWwoLzwlW1xcd1xcV10qfFtcXHdcXFddKiU+L2dtKTtcbmNvbnN0IFRNUExJVF9FWFBSID0gc2VhbCgvXFwke1tcXHdcXFddKn0vZ20pO1xuY29uc3QgREFUQV9BVFRSID0gc2VhbCgvXmRhdGEtW1xcLVxcdy5cXHUwMEI3LVxcdUZGRkZdLyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbmNvbnN0IEFSSUFfQVRUUiA9IHNlYWwoL15hcmlhLVtcXC1cXHddKyQvKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuY29uc3QgSVNfQUxMT1dFRF9VUkkgPSBzZWFsKC9eKD86KD86KD86ZnxodCl0cHM/fG1haWx0b3x0ZWx8Y2FsbHRvfHNtc3xjaWR8eG1wcCk6fFteYS16XXxbYS16Ky5cXC1dKyg/OlteYS16Ky5cXC06XXwkKSkvaSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4pO1xuY29uc3QgSVNfU0NSSVBUX09SX0RBVEEgPSBzZWFsKC9eKD86XFx3K3NjcmlwdHxkYXRhKTovaSk7XG5jb25zdCBBVFRSX1dISVRFU1BBQ0UgPSBzZWFsKC9bXFx1MDAwMC1cXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUxODBFXFx1MjAwMC1cXHUyMDI5XFx1MjA1RlxcdTMwMDBdL2cgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb250cm9sLXJlZ2V4XG4pO1xuY29uc3QgRE9DVFlQRV9OQU1FID0gc2VhbCgvXmh0bWwkL2kpO1xuY29uc3QgQ1VTVE9NX0VMRU1FTlQgPSBzZWFsKC9eW2Etel1bLlxcd10qKC1bLlxcd10rKSskL2kpO1xuXG52YXIgRVhQUkVTU0lPTlMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgTVVTVEFDSEVfRVhQUjogTVVTVEFDSEVfRVhQUixcbiAgRVJCX0VYUFI6IEVSQl9FWFBSLFxuICBUTVBMSVRfRVhQUjogVE1QTElUX0VYUFIsXG4gIERBVEFfQVRUUjogREFUQV9BVFRSLFxuICBBUklBX0FUVFI6IEFSSUFfQVRUUixcbiAgSVNfQUxMT1dFRF9VUkk6IElTX0FMTE9XRURfVVJJLFxuICBJU19TQ1JJUFRfT1JfREFUQTogSVNfU0NSSVBUX09SX0RBVEEsXG4gIEFUVFJfV0hJVEVTUEFDRTogQVRUUl9XSElURVNQQUNFLFxuICBET0NUWVBFX05BTUU6IERPQ1RZUEVfTkFNRSxcbiAgQ1VTVE9NX0VMRU1FTlQ6IENVU1RPTV9FTEVNRU5UXG59KTtcblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL05vZGUvbm9kZVR5cGVcbmNvbnN0IE5PREVfVFlQRSA9IHtcbiAgZWxlbWVudDogMSxcbiAgYXR0cmlidXRlOiAyLFxuICB0ZXh0OiAzLFxuICBjZGF0YVNlY3Rpb246IDQsXG4gIGVudGl0eVJlZmVyZW5jZTogNSxcbiAgLy8gRGVwcmVjYXRlZFxuICBlbnRpdHlOb2RlOiA2LFxuICAvLyBEZXByZWNhdGVkXG4gIHByb2dyZXNzaW5nSW5zdHJ1Y3Rpb246IDcsXG4gIGNvbW1lbnQ6IDgsXG4gIGRvY3VtZW50OiA5LFxuICBkb2N1bWVudFR5cGU6IDEwLFxuICBkb2N1bWVudEZyYWdtZW50OiAxMSxcbiAgbm90YXRpb246IDEyIC8vIERlcHJlY2F0ZWRcbn07XG5jb25zdCBnZXRHbG9iYWwgPSBmdW5jdGlvbiBnZXRHbG9iYWwoKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiB3aW5kb3c7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuby1vcCBwb2xpY3kgZm9yIGludGVybmFsIHVzZSBvbmx5LlxuICogRG9uJ3QgZXhwb3J0IHRoaXMgZnVuY3Rpb24gb3V0c2lkZSB0aGlzIG1vZHVsZSFcbiAqIEBwYXJhbSB7VHJ1c3RlZFR5cGVQb2xpY3lGYWN0b3J5fSB0cnVzdGVkVHlwZXMgVGhlIHBvbGljeSBmYWN0b3J5LlxuICogQHBhcmFtIHtIVE1MU2NyaXB0RWxlbWVudH0gcHVyaWZ5SG9zdEVsZW1lbnQgVGhlIFNjcmlwdCBlbGVtZW50IHVzZWQgdG8gbG9hZCBET01QdXJpZnkgKHRvIGRldGVybWluZSBwb2xpY3kgbmFtZSBzdWZmaXgpLlxuICogQHJldHVybiB7VHJ1c3RlZFR5cGVQb2xpY3l9IFRoZSBwb2xpY3kgY3JlYXRlZCAob3IgbnVsbCwgaWYgVHJ1c3RlZCBUeXBlc1xuICogYXJlIG5vdCBzdXBwb3J0ZWQgb3IgY3JlYXRpbmcgdGhlIHBvbGljeSBmYWlsZWQpLlxuICovXG5jb25zdCBfY3JlYXRlVHJ1c3RlZFR5cGVzUG9saWN5ID0gZnVuY3Rpb24gX2NyZWF0ZVRydXN0ZWRUeXBlc1BvbGljeSh0cnVzdGVkVHlwZXMsIHB1cmlmeUhvc3RFbGVtZW50KSB7XG4gIGlmICh0eXBlb2YgdHJ1c3RlZFR5cGVzICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgdHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gQWxsb3cgdGhlIGNhbGxlcnMgdG8gY29udHJvbCB0aGUgdW5pcXVlIHBvbGljeSBuYW1lXG4gIC8vIGJ5IGFkZGluZyBhIGRhdGEtdHQtcG9saWN5LXN1ZmZpeCB0byB0aGUgc2NyaXB0IGVsZW1lbnQgd2l0aCB0aGUgRE9NUHVyaWZ5LlxuICAvLyBQb2xpY3kgY3JlYXRpb24gd2l0aCBkdXBsaWNhdGUgbmFtZXMgdGhyb3dzIGluIFRydXN0ZWQgVHlwZXMuXG4gIGxldCBzdWZmaXggPSBudWxsO1xuICBjb25zdCBBVFRSX05BTUUgPSAnZGF0YS10dC1wb2xpY3ktc3VmZml4JztcbiAgaWYgKHB1cmlmeUhvc3RFbGVtZW50ICYmIHB1cmlmeUhvc3RFbGVtZW50Lmhhc0F0dHJpYnV0ZShBVFRSX05BTUUpKSB7XG4gICAgc3VmZml4ID0gcHVyaWZ5SG9zdEVsZW1lbnQuZ2V0QXR0cmlidXRlKEFUVFJfTkFNRSk7XG4gIH1cbiAgY29uc3QgcG9saWN5TmFtZSA9ICdkb21wdXJpZnknICsgKHN1ZmZpeCA/ICcjJyArIHN1ZmZpeCA6ICcnKTtcbiAgdHJ5IHtcbiAgICByZXR1cm4gdHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeShwb2xpY3lOYW1lLCB7XG4gICAgICBjcmVhdGVIVE1MKGh0bWwpIHtcbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgICB9LFxuICAgICAgY3JlYXRlU2NyaXB0VVJMKHNjcmlwdFVybCkge1xuICAgICAgICByZXR1cm4gc2NyaXB0VXJsO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGNhdGNoIChfKSB7XG4gICAgLy8gUG9saWN5IGNyZWF0aW9uIGZhaWxlZCAobW9zdCBsaWtlbHkgYW5vdGhlciBET01QdXJpZnkgc2NyaXB0IGhhc1xuICAgIC8vIGFscmVhZHkgcnVuKS4gU2tpcCBjcmVhdGluZyB0aGUgcG9saWN5LCBhcyB0aGlzIHdpbGwgb25seSBjYXVzZSBlcnJvcnNcbiAgICAvLyBpZiBUVCBhcmUgZW5mb3JjZWQuXG4gICAgY29uc29sZS53YXJuKCdUcnVzdGVkVHlwZXMgcG9saWN5ICcgKyBwb2xpY3lOYW1lICsgJyBjb3VsZCBub3QgYmUgY3JlYXRlZC4nKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcbmZ1bmN0aW9uIGNyZWF0ZURPTVB1cmlmeSgpIHtcbiAgbGV0IHdpbmRvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZ2V0R2xvYmFsKCk7XG4gIGNvbnN0IERPTVB1cmlmeSA9IHJvb3QgPT4gY3JlYXRlRE9NUHVyaWZ5KHJvb3QpO1xuXG4gIC8qKlxuICAgKiBWZXJzaW9uIGxhYmVsLCBleHBvc2VkIGZvciBlYXNpZXIgY2hlY2tzXG4gICAqIGlmIERPTVB1cmlmeSBpcyB1cCB0byBkYXRlIG9yIG5vdFxuICAgKi9cbiAgRE9NUHVyaWZ5LnZlcnNpb24gPSAnMy4xLjcnO1xuXG4gIC8qKlxuICAgKiBBcnJheSBvZiBlbGVtZW50cyB0aGF0IERPTVB1cmlmeSByZW1vdmVkIGR1cmluZyBzYW5pdGF0aW9uLlxuICAgKiBFbXB0eSBpZiBub3RoaW5nIHdhcyByZW1vdmVkLlxuICAgKi9cbiAgRE9NUHVyaWZ5LnJlbW92ZWQgPSBbXTtcbiAgaWYgKCF3aW5kb3cgfHwgIXdpbmRvdy5kb2N1bWVudCB8fCB3aW5kb3cuZG9jdW1lbnQubm9kZVR5cGUgIT09IE5PREVfVFlQRS5kb2N1bWVudCkge1xuICAgIC8vIE5vdCBydW5uaW5nIGluIGEgYnJvd3NlciwgcHJvdmlkZSBhIGZhY3RvcnkgZnVuY3Rpb25cbiAgICAvLyBzbyB0aGF0IHlvdSBjYW4gcGFzcyB5b3VyIG93biBXaW5kb3dcbiAgICBET01QdXJpZnkuaXNTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gRE9NUHVyaWZ5O1xuICB9XG4gIGxldCB7XG4gICAgZG9jdW1lbnRcbiAgfSA9IHdpbmRvdztcbiAgY29uc3Qgb3JpZ2luYWxEb2N1bWVudCA9IGRvY3VtZW50O1xuICBjb25zdCBjdXJyZW50U2NyaXB0ID0gb3JpZ2luYWxEb2N1bWVudC5jdXJyZW50U2NyaXB0O1xuICBjb25zdCB7XG4gICAgRG9jdW1lbnRGcmFnbWVudCxcbiAgICBIVE1MVGVtcGxhdGVFbGVtZW50LFxuICAgIE5vZGUsXG4gICAgRWxlbWVudCxcbiAgICBOb2RlRmlsdGVyLFxuICAgIE5hbWVkTm9kZU1hcCA9IHdpbmRvdy5OYW1lZE5vZGVNYXAgfHwgd2luZG93Lk1vek5hbWVkQXR0ck1hcCxcbiAgICBIVE1MRm9ybUVsZW1lbnQsXG4gICAgRE9NUGFyc2VyLFxuICAgIHRydXN0ZWRUeXBlc1xuICB9ID0gd2luZG93O1xuICBjb25zdCBFbGVtZW50UHJvdG90eXBlID0gRWxlbWVudC5wcm90b3R5cGU7XG4gIGNvbnN0IGNsb25lTm9kZSA9IGxvb2t1cEdldHRlcihFbGVtZW50UHJvdG90eXBlLCAnY2xvbmVOb2RlJyk7XG4gIGNvbnN0IHJlbW92ZSA9IGxvb2t1cEdldHRlcihFbGVtZW50UHJvdG90eXBlLCAncmVtb3ZlJyk7XG4gIGNvbnN0IGdldE5leHRTaWJsaW5nID0gbG9va3VwR2V0dGVyKEVsZW1lbnRQcm90b3R5cGUsICduZXh0U2libGluZycpO1xuICBjb25zdCBnZXRDaGlsZE5vZGVzID0gbG9va3VwR2V0dGVyKEVsZW1lbnRQcm90b3R5cGUsICdjaGlsZE5vZGVzJyk7XG4gIGNvbnN0IGdldFBhcmVudE5vZGUgPSBsb29rdXBHZXR0ZXIoRWxlbWVudFByb3RvdHlwZSwgJ3BhcmVudE5vZGUnKTtcblxuICAvLyBBcyBwZXIgaXNzdWUgIzQ3LCB0aGUgd2ViLWNvbXBvbmVudHMgcmVnaXN0cnkgaXMgaW5oZXJpdGVkIGJ5IGFcbiAgLy8gbmV3IGRvY3VtZW50IGNyZWF0ZWQgdmlhIGNyZWF0ZUhUTUxEb2N1bWVudC4gQXMgcGVyIHRoZSBzcGVjXG4gIC8vIChodHRwOi8vdzNjLmdpdGh1Yi5pby93ZWJjb21wb25lbnRzL3NwZWMvY3VzdG9tLyNjcmVhdGluZy1hbmQtcGFzc2luZy1yZWdpc3RyaWVzKVxuICAvLyBhIG5ldyBlbXB0eSByZWdpc3RyeSBpcyB1c2VkIHdoZW4gY3JlYXRpbmcgYSB0ZW1wbGF0ZSBjb250ZW50cyBvd25lclxuICAvLyBkb2N1bWVudCwgc28gd2UgdXNlIHRoYXQgYXMgb3VyIHBhcmVudCBkb2N1bWVudCB0byBlbnN1cmUgbm90aGluZ1xuICAvLyBpcyBpbmhlcml0ZWQuXG4gIGlmICh0eXBlb2YgSFRNTFRlbXBsYXRlRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICBpZiAodGVtcGxhdGUuY29udGVudCAmJiB0ZW1wbGF0ZS5jb250ZW50Lm93bmVyRG9jdW1lbnQpIHtcbiAgICAgIGRvY3VtZW50ID0gdGVtcGxhdGUuY29udGVudC5vd25lckRvY3VtZW50O1xuICAgIH1cbiAgfVxuICBsZXQgdHJ1c3RlZFR5cGVzUG9saWN5O1xuICBsZXQgZW1wdHlIVE1MID0gJyc7XG4gIGNvbnN0IHtcbiAgICBpbXBsZW1lbnRhdGlvbixcbiAgICBjcmVhdGVOb2RlSXRlcmF0b3IsXG4gICAgY3JlYXRlRG9jdW1lbnRGcmFnbWVudCxcbiAgICBnZXRFbGVtZW50c0J5VGFnTmFtZVxuICB9ID0gZG9jdW1lbnQ7XG4gIGNvbnN0IHtcbiAgICBpbXBvcnROb2RlXG4gIH0gPSBvcmlnaW5hbERvY3VtZW50O1xuICBsZXQgaG9va3MgPSB7fTtcblxuICAvKipcbiAgICogRXhwb3NlIHdoZXRoZXIgdGhpcyBicm93c2VyIHN1cHBvcnRzIHJ1bm5pbmcgdGhlIGZ1bGwgRE9NUHVyaWZ5LlxuICAgKi9cbiAgRE9NUHVyaWZ5LmlzU3VwcG9ydGVkID0gdHlwZW9mIGVudHJpZXMgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGdldFBhcmVudE5vZGUgPT09ICdmdW5jdGlvbicgJiYgaW1wbGVtZW50YXRpb24gJiYgaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50ICE9PSB1bmRlZmluZWQ7XG4gIGNvbnN0IHtcbiAgICBNVVNUQUNIRV9FWFBSLFxuICAgIEVSQl9FWFBSLFxuICAgIFRNUExJVF9FWFBSLFxuICAgIERBVEFfQVRUUixcbiAgICBBUklBX0FUVFIsXG4gICAgSVNfU0NSSVBUX09SX0RBVEEsXG4gICAgQVRUUl9XSElURVNQQUNFLFxuICAgIENVU1RPTV9FTEVNRU5UXG4gIH0gPSBFWFBSRVNTSU9OUztcbiAgbGV0IHtcbiAgICBJU19BTExPV0VEX1VSSTogSVNfQUxMT1dFRF9VUkkkMVxuICB9ID0gRVhQUkVTU0lPTlM7XG5cbiAgLyoqXG4gICAqIFdlIGNvbnNpZGVyIHRoZSBlbGVtZW50cyBhbmQgYXR0cmlidXRlcyBiZWxvdyB0byBiZSBzYWZlLiBJZGVhbGx5XG4gICAqIGRvbid0IGFkZCBhbnkgbmV3IG9uZXMgYnV0IGZlZWwgZnJlZSB0byByZW1vdmUgdW53YW50ZWQgb25lcy5cbiAgICovXG5cbiAgLyogYWxsb3dlZCBlbGVtZW50IG5hbWVzICovXG4gIGxldCBBTExPV0VEX1RBR1MgPSBudWxsO1xuICBjb25zdCBERUZBVUxUX0FMTE9XRURfVEFHUyA9IGFkZFRvU2V0KHt9LCBbLi4uaHRtbCQxLCAuLi5zdmckMSwgLi4uc3ZnRmlsdGVycywgLi4ubWF0aE1sJDEsIC4uLnRleHRdKTtcblxuICAvKiBBbGxvd2VkIGF0dHJpYnV0ZSBuYW1lcyAqL1xuICBsZXQgQUxMT1dFRF9BVFRSID0gbnVsbDtcbiAgY29uc3QgREVGQVVMVF9BTExPV0VEX0FUVFIgPSBhZGRUb1NldCh7fSwgWy4uLmh0bWwsIC4uLnN2ZywgLi4ubWF0aE1sLCAuLi54bWxdKTtcblxuICAvKlxuICAgKiBDb25maWd1cmUgaG93IERPTVBVcmlmeSBzaG91bGQgaGFuZGxlIGN1c3RvbSBlbGVtZW50cyBhbmQgdGhlaXIgYXR0cmlidXRlcyBhcyB3ZWxsIGFzIGN1c3RvbWl6ZWQgYnVpbHQtaW4gZWxlbWVudHMuXG4gICAqIEBwcm9wZXJ0eSB7UmVnRXhwfEZ1bmN0aW9ufG51bGx9IHRhZ05hbWVDaGVjayBvbmUgb2YgW251bGwsIHJlZ2V4UGF0dGVybiwgcHJlZGljYXRlXS4gRGVmYXVsdDogYG51bGxgIChkaXNhbGxvdyBhbnkgY3VzdG9tIGVsZW1lbnRzKVxuICAgKiBAcHJvcGVydHkge1JlZ0V4cHxGdW5jdGlvbnxudWxsfSBhdHRyaWJ1dGVOYW1lQ2hlY2sgb25lIG9mIFtudWxsLCByZWdleFBhdHRlcm4sIHByZWRpY2F0ZV0uIERlZmF1bHQ6IGBudWxsYCAoZGlzYWxsb3cgYW55IGF0dHJpYnV0ZXMgbm90IG9uIHRoZSBhbGxvdyBsaXN0KVxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50cyBhbGxvdyBjdXN0b20gZWxlbWVudHMgZGVyaXZlZCBmcm9tIGJ1aWx0LWlucyBpZiB0aGV5IHBhc3MgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrLiBEZWZhdWx0OiBgZmFsc2VgLlxuICAgKi9cbiAgbGV0IENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HID0gT2JqZWN0LnNlYWwoY3JlYXRlKG51bGwsIHtcbiAgICB0YWdOYW1lQ2hlY2s6IHtcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogbnVsbFxuICAgIH0sXG4gICAgYXR0cmlidXRlTmFtZUNoZWNrOiB7XG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IG51bGxcbiAgICB9LFxuICAgIGFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50czoge1xuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH1cbiAgfSkpO1xuXG4gIC8qIEV4cGxpY2l0bHkgZm9yYmlkZGVuIHRhZ3MgKG92ZXJyaWRlcyBBTExPV0VEX1RBR1MvQUREX1RBR1MpICovXG4gIGxldCBGT1JCSURfVEFHUyA9IG51bGw7XG5cbiAgLyogRXhwbGljaXRseSBmb3JiaWRkZW4gYXR0cmlidXRlcyAob3ZlcnJpZGVzIEFMTE9XRURfQVRUUi9BRERfQVRUUikgKi9cbiAgbGV0IEZPUkJJRF9BVFRSID0gbnVsbDtcblxuICAvKiBEZWNpZGUgaWYgQVJJQSBhdHRyaWJ1dGVzIGFyZSBva2F5ICovXG4gIGxldCBBTExPV19BUklBX0FUVFIgPSB0cnVlO1xuXG4gIC8qIERlY2lkZSBpZiBjdXN0b20gZGF0YSBhdHRyaWJ1dGVzIGFyZSBva2F5ICovXG4gIGxldCBBTExPV19EQVRBX0FUVFIgPSB0cnVlO1xuXG4gIC8qIERlY2lkZSBpZiB1bmtub3duIHByb3RvY29scyBhcmUgb2theSAqL1xuICBsZXQgQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMgPSBmYWxzZTtcblxuICAvKiBEZWNpZGUgaWYgc2VsZi1jbG9zaW5nIHRhZ3MgaW4gYXR0cmlidXRlcyBhcmUgYWxsb3dlZC5cbiAgICogVXN1YWxseSByZW1vdmVkIGR1ZSB0byBhIG1YU1MgaXNzdWUgaW4galF1ZXJ5IDMuMCAqL1xuICBsZXQgQUxMT1dfU0VMRl9DTE9TRV9JTl9BVFRSID0gdHJ1ZTtcblxuICAvKiBPdXRwdXQgc2hvdWxkIGJlIHNhZmUgZm9yIGNvbW1vbiB0ZW1wbGF0ZSBlbmdpbmVzLlxuICAgKiBUaGlzIG1lYW5zLCBET01QdXJpZnkgcmVtb3ZlcyBkYXRhIGF0dHJpYnV0ZXMsIG11c3RhY2hlcyBhbmQgRVJCXG4gICAqL1xuICBsZXQgU0FGRV9GT1JfVEVNUExBVEVTID0gZmFsc2U7XG5cbiAgLyogT3V0cHV0IHNob3VsZCBiZSBzYWZlIGV2ZW4gZm9yIFhNTCB1c2VkIHdpdGhpbiBIVE1MIGFuZCBhbGlrZS5cbiAgICogVGhpcyBtZWFucywgRE9NUHVyaWZ5IHJlbW92ZXMgY29tbWVudHMgd2hlbiBjb250YWluaW5nIHJpc2t5IGNvbnRlbnQuXG4gICAqL1xuICBsZXQgU0FGRV9GT1JfWE1MID0gdHJ1ZTtcblxuICAvKiBEZWNpZGUgaWYgZG9jdW1lbnQgd2l0aCA8aHRtbD4uLi4gc2hvdWxkIGJlIHJldHVybmVkICovXG4gIGxldCBXSE9MRV9ET0NVTUVOVCA9IGZhbHNlO1xuXG4gIC8qIFRyYWNrIHdoZXRoZXIgY29uZmlnIGlzIGFscmVhZHkgc2V0IG9uIHRoaXMgaW5zdGFuY2Ugb2YgRE9NUHVyaWZ5LiAqL1xuICBsZXQgU0VUX0NPTkZJRyA9IGZhbHNlO1xuXG4gIC8qIERlY2lkZSBpZiBhbGwgZWxlbWVudHMgKGUuZy4gc3R5bGUsIHNjcmlwdCkgbXVzdCBiZSBjaGlsZHJlbiBvZlxuICAgKiBkb2N1bWVudC5ib2R5LiBCeSBkZWZhdWx0LCBicm93c2VycyBtaWdodCBtb3ZlIHRoZW0gdG8gZG9jdW1lbnQuaGVhZCAqL1xuICBsZXQgRk9SQ0VfQk9EWSA9IGZhbHNlO1xuXG4gIC8qIERlY2lkZSBpZiBhIERPTSBgSFRNTEJvZHlFbGVtZW50YCBzaG91bGQgYmUgcmV0dXJuZWQsIGluc3RlYWQgb2YgYSBodG1sXG4gICAqIHN0cmluZyAob3IgYSBUcnVzdGVkSFRNTCBvYmplY3QgaWYgVHJ1c3RlZCBUeXBlcyBhcmUgc3VwcG9ydGVkKS5cbiAgICogSWYgYFdIT0xFX0RPQ1VNRU5UYCBpcyBlbmFibGVkIGEgYEhUTUxIdG1sRWxlbWVudGAgd2lsbCBiZSByZXR1cm5lZCBpbnN0ZWFkXG4gICAqL1xuICBsZXQgUkVUVVJOX0RPTSA9IGZhbHNlO1xuXG4gIC8qIERlY2lkZSBpZiBhIERPTSBgRG9jdW1lbnRGcmFnbWVudGAgc2hvdWxkIGJlIHJldHVybmVkLCBpbnN0ZWFkIG9mIGEgaHRtbFxuICAgKiBzdHJpbmcgIChvciBhIFRydXN0ZWRIVE1MIG9iamVjdCBpZiBUcnVzdGVkIFR5cGVzIGFyZSBzdXBwb3J0ZWQpICovXG4gIGxldCBSRVRVUk5fRE9NX0ZSQUdNRU5UID0gZmFsc2U7XG5cbiAgLyogVHJ5IHRvIHJldHVybiBhIFRydXN0ZWQgVHlwZSBvYmplY3QgaW5zdGVhZCBvZiBhIHN0cmluZywgcmV0dXJuIGEgc3RyaW5nIGluXG4gICAqIGNhc2UgVHJ1c3RlZCBUeXBlcyBhcmUgbm90IHN1cHBvcnRlZCAgKi9cbiAgbGV0IFJFVFVSTl9UUlVTVEVEX1RZUEUgPSBmYWxzZTtcblxuICAvKiBPdXRwdXQgc2hvdWxkIGJlIGZyZWUgZnJvbSBET00gY2xvYmJlcmluZyBhdHRhY2tzP1xuICAgKiBUaGlzIHNhbml0aXplcyBtYXJrdXBzIG5hbWVkIHdpdGggY29sbGlkaW5nLCBjbG9iYmVyYWJsZSBidWlsdC1pbiBET00gQVBJcy5cbiAgICovXG4gIGxldCBTQU5JVElaRV9ET00gPSB0cnVlO1xuXG4gIC8qIEFjaGlldmUgZnVsbCBET00gQ2xvYmJlcmluZyBwcm90ZWN0aW9uIGJ5IGlzb2xhdGluZyB0aGUgbmFtZXNwYWNlIG9mIG5hbWVkXG4gICAqIHByb3BlcnRpZXMgYW5kIEpTIHZhcmlhYmxlcywgbWl0aWdhdGluZyBhdHRhY2tzIHRoYXQgYWJ1c2UgdGhlIEhUTUwvRE9NIHNwZWMgcnVsZXMuXG4gICAqXG4gICAqIEhUTUwvRE9NIHNwZWMgcnVsZXMgdGhhdCBlbmFibGUgRE9NIENsb2JiZXJpbmc6XG4gICAqICAgLSBOYW1lZCBBY2Nlc3Mgb24gV2luZG93ICjCpzcuMy4zKVxuICAgKiAgIC0gRE9NIFRyZWUgQWNjZXNzb3JzICjCpzMuMS41KVxuICAgKiAgIC0gRm9ybSBFbGVtZW50IFBhcmVudC1DaGlsZCBSZWxhdGlvbnMgKMKnNC4xMC4zKVxuICAgKiAgIC0gSWZyYW1lIHNyY2RvYyAvIE5lc3RlZCBXaW5kb3dQcm94aWVzICjCpzQuOC41KVxuICAgKiAgIC0gSFRNTENvbGxlY3Rpb24gKMKnNC4yLjEwLjIpXG4gICAqXG4gICAqIE5hbWVzcGFjZSBpc29sYXRpb24gaXMgaW1wbGVtZW50ZWQgYnkgcHJlZml4aW5nIGBpZGAgYW5kIGBuYW1lYCBhdHRyaWJ1dGVzXG4gICAqIHdpdGggYSBjb25zdGFudCBzdHJpbmcsIGkuZS4sIGB1c2VyLWNvbnRlbnQtYFxuICAgKi9cbiAgbGV0IFNBTklUSVpFX05BTUVEX1BST1BTID0gZmFsc2U7XG4gIGNvbnN0IFNBTklUSVpFX05BTUVEX1BST1BTX1BSRUZJWCA9ICd1c2VyLWNvbnRlbnQtJztcblxuICAvKiBLZWVwIGVsZW1lbnQgY29udGVudCB3aGVuIHJlbW92aW5nIGVsZW1lbnQ/ICovXG4gIGxldCBLRUVQX0NPTlRFTlQgPSB0cnVlO1xuXG4gIC8qIElmIGEgYE5vZGVgIGlzIHBhc3NlZCB0byBzYW5pdGl6ZSgpLCB0aGVuIHBlcmZvcm1zIHNhbml0aXphdGlvbiBpbi1wbGFjZSBpbnN0ZWFkXG4gICAqIG9mIGltcG9ydGluZyBpdCBpbnRvIGEgbmV3IERvY3VtZW50IGFuZCByZXR1cm5pbmcgYSBzYW5pdGl6ZWQgY29weSAqL1xuICBsZXQgSU5fUExBQ0UgPSBmYWxzZTtcblxuICAvKiBBbGxvdyB1c2FnZSBvZiBwcm9maWxlcyBsaWtlIGh0bWwsIHN2ZyBhbmQgbWF0aE1sICovXG4gIGxldCBVU0VfUFJPRklMRVMgPSB7fTtcblxuICAvKiBUYWdzIHRvIGlnbm9yZSBjb250ZW50IG9mIHdoZW4gS0VFUF9DT05URU5UIGlzIHRydWUgKi9cbiAgbGV0IEZPUkJJRF9DT05URU5UUyA9IG51bGw7XG4gIGNvbnN0IERFRkFVTFRfRk9SQklEX0NPTlRFTlRTID0gYWRkVG9TZXQoe30sIFsnYW5ub3RhdGlvbi14bWwnLCAnYXVkaW8nLCAnY29sZ3JvdXAnLCAnZGVzYycsICdmb3JlaWdub2JqZWN0JywgJ2hlYWQnLCAnaWZyYW1lJywgJ21hdGgnLCAnbWknLCAnbW4nLCAnbW8nLCAnbXMnLCAnbXRleHQnLCAnbm9lbWJlZCcsICdub2ZyYW1lcycsICdub3NjcmlwdCcsICdwbGFpbnRleHQnLCAnc2NyaXB0JywgJ3N0eWxlJywgJ3N2ZycsICd0ZW1wbGF0ZScsICd0aGVhZCcsICd0aXRsZScsICd2aWRlbycsICd4bXAnXSk7XG5cbiAgLyogVGFncyB0aGF0IGFyZSBzYWZlIGZvciBkYXRhOiBVUklzICovXG4gIGxldCBEQVRBX1VSSV9UQUdTID0gbnVsbDtcbiAgY29uc3QgREVGQVVMVF9EQVRBX1VSSV9UQUdTID0gYWRkVG9TZXQoe30sIFsnYXVkaW8nLCAndmlkZW8nLCAnaW1nJywgJ3NvdXJjZScsICdpbWFnZScsICd0cmFjayddKTtcblxuICAvKiBBdHRyaWJ1dGVzIHNhZmUgZm9yIHZhbHVlcyBsaWtlIFwiamF2YXNjcmlwdDpcIiAqL1xuICBsZXQgVVJJX1NBRkVfQVRUUklCVVRFUyA9IG51bGw7XG4gIGNvbnN0IERFRkFVTFRfVVJJX1NBRkVfQVRUUklCVVRFUyA9IGFkZFRvU2V0KHt9LCBbJ2FsdCcsICdjbGFzcycsICdmb3InLCAnaWQnLCAnbGFiZWwnLCAnbmFtZScsICdwYXR0ZXJuJywgJ3BsYWNlaG9sZGVyJywgJ3JvbGUnLCAnc3VtbWFyeScsICd0aXRsZScsICd2YWx1ZScsICdzdHlsZScsICd4bWxucyddKTtcbiAgY29uc3QgTUFUSE1MX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MJztcbiAgY29uc3QgU1ZHX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG4gIGNvbnN0IEhUTUxfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnO1xuICAvKiBEb2N1bWVudCBuYW1lc3BhY2UgKi9cbiAgbGV0IE5BTUVTUEFDRSA9IEhUTUxfTkFNRVNQQUNFO1xuICBsZXQgSVNfRU1QVFlfSU5QVVQgPSBmYWxzZTtcblxuICAvKiBBbGxvd2VkIFhIVE1MK1hNTCBuYW1lc3BhY2VzICovXG4gIGxldCBBTExPV0VEX05BTUVTUEFDRVMgPSBudWxsO1xuICBjb25zdCBERUZBVUxUX0FMTE9XRURfTkFNRVNQQUNFUyA9IGFkZFRvU2V0KHt9LCBbTUFUSE1MX05BTUVTUEFDRSwgU1ZHX05BTUVTUEFDRSwgSFRNTF9OQU1FU1BBQ0VdLCBzdHJpbmdUb1N0cmluZyk7XG5cbiAgLyogUGFyc2luZyBvZiBzdHJpY3QgWEhUTUwgZG9jdW1lbnRzICovXG4gIGxldCBQQVJTRVJfTUVESUFfVFlQRSA9IG51bGw7XG4gIGNvbnN0IFNVUFBPUlRFRF9QQVJTRVJfTUVESUFfVFlQRVMgPSBbJ2FwcGxpY2F0aW9uL3hodG1sK3htbCcsICd0ZXh0L2h0bWwnXTtcbiAgY29uc3QgREVGQVVMVF9QQVJTRVJfTUVESUFfVFlQRSA9ICd0ZXh0L2h0bWwnO1xuICBsZXQgdHJhbnNmb3JtQ2FzZUZ1bmMgPSBudWxsO1xuXG4gIC8qIEtlZXAgYSByZWZlcmVuY2UgdG8gY29uZmlnIHRvIHBhc3MgdG8gaG9va3MgKi9cbiAgbGV0IENPTkZJRyA9IG51bGw7XG5cbiAgLyogSWRlYWxseSwgZG8gbm90IHRvdWNoIGFueXRoaW5nIGJlbG93IHRoaXMgbGluZSAqL1xuICAvKiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICovXG5cbiAgY29uc3QgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGNvbnN0IGlzUmVnZXhPckZ1bmN0aW9uID0gZnVuY3Rpb24gaXNSZWdleE9yRnVuY3Rpb24odGVzdFZhbHVlKSB7XG4gICAgcmV0dXJuIHRlc3RWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCB8fCB0ZXN0VmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbjtcbiAgfTtcblxuICAvKipcbiAgICogX3BhcnNlQ29uZmlnXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gY2ZnIG9wdGlvbmFsIGNvbmZpZyBsaXRlcmFsXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuICBjb25zdCBfcGFyc2VDb25maWcgPSBmdW5jdGlvbiBfcGFyc2VDb25maWcoKSB7XG4gICAgbGV0IGNmZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgaWYgKENPTkZJRyAmJiBDT05GSUcgPT09IGNmZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qIFNoaWVsZCBjb25maWd1cmF0aW9uIG9iamVjdCBmcm9tIHRhbXBlcmluZyAqL1xuICAgIGlmICghY2ZnIHx8IHR5cGVvZiBjZmcgIT09ICdvYmplY3QnKSB7XG4gICAgICBjZmcgPSB7fTtcbiAgICB9XG5cbiAgICAvKiBTaGllbGQgY29uZmlndXJhdGlvbiBvYmplY3QgZnJvbSBwcm90b3R5cGUgcG9sbHV0aW9uICovXG4gICAgY2ZnID0gY2xvbmUoY2ZnKTtcbiAgICBQQVJTRVJfTUVESUFfVFlQRSA9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWluY2x1ZGVzXG4gICAgU1VQUE9SVEVEX1BBUlNFUl9NRURJQV9UWVBFUy5pbmRleE9mKGNmZy5QQVJTRVJfTUVESUFfVFlQRSkgPT09IC0xID8gREVGQVVMVF9QQVJTRVJfTUVESUFfVFlQRSA6IGNmZy5QQVJTRVJfTUVESUFfVFlQRTtcblxuICAgIC8vIEhUTUwgdGFncyBhbmQgYXR0cmlidXRlcyBhcmUgbm90IGNhc2Utc2Vuc2l0aXZlLCBjb252ZXJ0aW5nIHRvIGxvd2VyY2FzZS4gS2VlcGluZyBYSFRNTCBhcyBpcy5cbiAgICB0cmFuc2Zvcm1DYXNlRnVuYyA9IFBBUlNFUl9NRURJQV9UWVBFID09PSAnYXBwbGljYXRpb24veGh0bWwreG1sJyA/IHN0cmluZ1RvU3RyaW5nIDogc3RyaW5nVG9Mb3dlckNhc2U7XG5cbiAgICAvKiBTZXQgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzICovXG4gICAgQUxMT1dFRF9UQUdTID0gb2JqZWN0SGFzT3duUHJvcGVydHkoY2ZnLCAnQUxMT1dFRF9UQUdTJykgPyBhZGRUb1NldCh7fSwgY2ZnLkFMTE9XRURfVEFHUywgdHJhbnNmb3JtQ2FzZUZ1bmMpIDogREVGQVVMVF9BTExPV0VEX1RBR1M7XG4gICAgQUxMT1dFRF9BVFRSID0gb2JqZWN0SGFzT3duUHJvcGVydHkoY2ZnLCAnQUxMT1dFRF9BVFRSJykgPyBhZGRUb1NldCh7fSwgY2ZnLkFMTE9XRURfQVRUUiwgdHJhbnNmb3JtQ2FzZUZ1bmMpIDogREVGQVVMVF9BTExPV0VEX0FUVFI7XG4gICAgQUxMT1dFRF9OQU1FU1BBQ0VTID0gb2JqZWN0SGFzT3duUHJvcGVydHkoY2ZnLCAnQUxMT1dFRF9OQU1FU1BBQ0VTJykgPyBhZGRUb1NldCh7fSwgY2ZnLkFMTE9XRURfTkFNRVNQQUNFUywgc3RyaW5nVG9TdHJpbmcpIDogREVGQVVMVF9BTExPV0VEX05BTUVTUEFDRVM7XG4gICAgVVJJX1NBRkVfQVRUUklCVVRFUyA9IG9iamVjdEhhc093blByb3BlcnR5KGNmZywgJ0FERF9VUklfU0FGRV9BVFRSJykgPyBhZGRUb1NldChjbG9uZShERUZBVUxUX1VSSV9TQUZFX0FUVFJJQlVURVMpLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XG4gICAgY2ZnLkFERF9VUklfU0FGRV9BVFRSLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XG4gICAgdHJhbnNmb3JtQ2FzZUZ1bmMgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbmRlbnRcbiAgICApIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XG4gICAgOiBERUZBVUxUX1VSSV9TQUZFX0FUVFJJQlVURVM7XG4gICAgREFUQV9VUklfVEFHUyA9IG9iamVjdEhhc093blByb3BlcnR5KGNmZywgJ0FERF9EQVRBX1VSSV9UQUdTJykgPyBhZGRUb1NldChjbG9uZShERUZBVUxUX0RBVEFfVVJJX1RBR1MpLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XG4gICAgY2ZnLkFERF9EQVRBX1VSSV9UQUdTLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XG4gICAgdHJhbnNmb3JtQ2FzZUZ1bmMgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbmRlbnRcbiAgICApIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XG4gICAgOiBERUZBVUxUX0RBVEFfVVJJX1RBR1M7XG4gICAgRk9SQklEX0NPTlRFTlRTID0gb2JqZWN0SGFzT3duUHJvcGVydHkoY2ZnLCAnRk9SQklEX0NPTlRFTlRTJykgPyBhZGRUb1NldCh7fSwgY2ZnLkZPUkJJRF9DT05URU5UUywgdHJhbnNmb3JtQ2FzZUZ1bmMpIDogREVGQVVMVF9GT1JCSURfQ09OVEVOVFM7XG4gICAgRk9SQklEX1RBR1MgPSBvYmplY3RIYXNPd25Qcm9wZXJ0eShjZmcsICdGT1JCSURfVEFHUycpID8gYWRkVG9TZXQoe30sIGNmZy5GT1JCSURfVEFHUywgdHJhbnNmb3JtQ2FzZUZ1bmMpIDoge307XG4gICAgRk9SQklEX0FUVFIgPSBvYmplY3RIYXNPd25Qcm9wZXJ0eShjZmcsICdGT1JCSURfQVRUUicpID8gYWRkVG9TZXQoe30sIGNmZy5GT1JCSURfQVRUUiwgdHJhbnNmb3JtQ2FzZUZ1bmMpIDoge307XG4gICAgVVNFX1BST0ZJTEVTID0gb2JqZWN0SGFzT3duUHJvcGVydHkoY2ZnLCAnVVNFX1BST0ZJTEVTJykgPyBjZmcuVVNFX1BST0ZJTEVTIDogZmFsc2U7XG4gICAgQUxMT1dfQVJJQV9BVFRSID0gY2ZnLkFMTE9XX0FSSUFfQVRUUiAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuICAgIEFMTE9XX0RBVEFfQVRUUiA9IGNmZy5BTExPV19EQVRBX0FUVFIgIT09IGZhbHNlOyAvLyBEZWZhdWx0IHRydWVcbiAgICBBTExPV19VTktOT1dOX1BST1RPQ09MUyA9IGNmZy5BTExPV19VTktOT1dOX1BST1RPQ09MUyB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgIEFMTE9XX1NFTEZfQ0xPU0VfSU5fQVRUUiA9IGNmZy5BTExPV19TRUxGX0NMT1NFX0lOX0FUVFIgIT09IGZhbHNlOyAvLyBEZWZhdWx0IHRydWVcbiAgICBTQUZFX0ZPUl9URU1QTEFURVMgPSBjZmcuU0FGRV9GT1JfVEVNUExBVEVTIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgU0FGRV9GT1JfWE1MID0gY2ZnLlNBRkVfRk9SX1hNTCAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuICAgIFdIT0xFX0RPQ1VNRU5UID0gY2ZnLldIT0xFX0RPQ1VNRU5UIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgUkVUVVJOX0RPTSA9IGNmZy5SRVRVUk5fRE9NIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgUkVUVVJOX0RPTV9GUkFHTUVOVCA9IGNmZy5SRVRVUk5fRE9NX0ZSQUdNRU5UIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgUkVUVVJOX1RSVVNURURfVFlQRSA9IGNmZy5SRVRVUk5fVFJVU1RFRF9UWVBFIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgRk9SQ0VfQk9EWSA9IGNmZy5GT1JDRV9CT0RZIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgU0FOSVRJWkVfRE9NID0gY2ZnLlNBTklUSVpFX0RPTSAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuICAgIFNBTklUSVpFX05BTUVEX1BST1BTID0gY2ZnLlNBTklUSVpFX05BTUVEX1BST1BTIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgS0VFUF9DT05URU5UID0gY2ZnLktFRVBfQ09OVEVOVCAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuICAgIElOX1BMQUNFID0gY2ZnLklOX1BMQUNFIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgSVNfQUxMT1dFRF9VUkkkMSA9IGNmZy5BTExPV0VEX1VSSV9SRUdFWFAgfHwgSVNfQUxMT1dFRF9VUkk7XG4gICAgTkFNRVNQQUNFID0gY2ZnLk5BTUVTUEFDRSB8fCBIVE1MX05BTUVTUEFDRTtcbiAgICBDVVNUT01fRUxFTUVOVF9IQU5ETElORyA9IGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORyB8fCB7fTtcbiAgICBpZiAoY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HICYmIGlzUmVnZXhPckZ1bmN0aW9uKGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2spKSB7XG4gICAgICBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgPSBjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrO1xuICAgIH1cbiAgICBpZiAoY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HICYmIGlzUmVnZXhPckZ1bmN0aW9uKGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2spKSB7XG4gICAgICBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2sgPSBjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrO1xuICAgIH1cbiAgICBpZiAoY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HICYmIHR5cGVvZiBjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzID09PSAnYm9vbGVhbicpIHtcbiAgICAgIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50cyA9IGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy5hbGxvd0N1c3RvbWl6ZWRCdWlsdEluRWxlbWVudHM7XG4gICAgfVxuICAgIGlmIChTQUZFX0ZPUl9URU1QTEFURVMpIHtcbiAgICAgIEFMTE9XX0RBVEFfQVRUUiA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoUkVUVVJOX0RPTV9GUkFHTUVOVCkge1xuICAgICAgUkVUVVJOX0RPTSA9IHRydWU7XG4gICAgfVxuXG4gICAgLyogUGFyc2UgcHJvZmlsZSBpbmZvICovXG4gICAgaWYgKFVTRV9QUk9GSUxFUykge1xuICAgICAgQUxMT1dFRF9UQUdTID0gYWRkVG9TZXQoe30sIHRleHQpO1xuICAgICAgQUxMT1dFRF9BVFRSID0gW107XG4gICAgICBpZiAoVVNFX1BST0ZJTEVTLmh0bWwgPT09IHRydWUpIHtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBodG1sJDEpO1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIGh0bWwpO1xuICAgICAgfVxuICAgICAgaWYgKFVTRV9QUk9GSUxFUy5zdmcgPT09IHRydWUpIHtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBzdmckMSk7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgc3ZnKTtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCB4bWwpO1xuICAgICAgfVxuICAgICAgaWYgKFVTRV9QUk9GSUxFUy5zdmdGaWx0ZXJzID09PSB0cnVlKSB7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgc3ZnRmlsdGVycyk7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgc3ZnKTtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCB4bWwpO1xuICAgICAgfVxuICAgICAgaWYgKFVTRV9QUk9GSUxFUy5tYXRoTWwgPT09IHRydWUpIHtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBtYXRoTWwkMSk7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgbWF0aE1sKTtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCB4bWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIE1lcmdlIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyAqL1xuICAgIGlmIChjZmcuQUREX1RBR1MpIHtcbiAgICAgIGlmIChBTExPV0VEX1RBR1MgPT09IERFRkFVTFRfQUxMT1dFRF9UQUdTKSB7XG4gICAgICAgIEFMTE9XRURfVEFHUyA9IGNsb25lKEFMTE9XRURfVEFHUyk7XG4gICAgICB9XG4gICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIGNmZy5BRERfVEFHUywgdHJhbnNmb3JtQ2FzZUZ1bmMpO1xuICAgIH1cbiAgICBpZiAoY2ZnLkFERF9BVFRSKSB7XG4gICAgICBpZiAoQUxMT1dFRF9BVFRSID09PSBERUZBVUxUX0FMTE9XRURfQVRUUikge1xuICAgICAgICBBTExPV0VEX0FUVFIgPSBjbG9uZShBTExPV0VEX0FUVFIpO1xuICAgICAgfVxuICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBjZmcuQUREX0FUVFIsIHRyYW5zZm9ybUNhc2VGdW5jKTtcbiAgICB9XG4gICAgaWYgKGNmZy5BRERfVVJJX1NBRkVfQVRUUikge1xuICAgICAgYWRkVG9TZXQoVVJJX1NBRkVfQVRUUklCVVRFUywgY2ZnLkFERF9VUklfU0FGRV9BVFRSLCB0cmFuc2Zvcm1DYXNlRnVuYyk7XG4gICAgfVxuICAgIGlmIChjZmcuRk9SQklEX0NPTlRFTlRTKSB7XG4gICAgICBpZiAoRk9SQklEX0NPTlRFTlRTID09PSBERUZBVUxUX0ZPUkJJRF9DT05URU5UUykge1xuICAgICAgICBGT1JCSURfQ09OVEVOVFMgPSBjbG9uZShGT1JCSURfQ09OVEVOVFMpO1xuICAgICAgfVxuICAgICAgYWRkVG9TZXQoRk9SQklEX0NPTlRFTlRTLCBjZmcuRk9SQklEX0NPTlRFTlRTLCB0cmFuc2Zvcm1DYXNlRnVuYyk7XG4gICAgfVxuXG4gICAgLyogQWRkICN0ZXh0IGluIGNhc2UgS0VFUF9DT05URU5UIGlzIHNldCB0byB0cnVlICovXG4gICAgaWYgKEtFRVBfQ09OVEVOVCkge1xuICAgICAgQUxMT1dFRF9UQUdTWycjdGV4dCddID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiBBZGQgaHRtbCwgaGVhZCBhbmQgYm9keSB0byBBTExPV0VEX1RBR1MgaW4gY2FzZSBXSE9MRV9ET0NVTUVOVCBpcyB0cnVlICovXG4gICAgaWYgKFdIT0xFX0RPQ1VNRU5UKSB7XG4gICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIFsnaHRtbCcsICdoZWFkJywgJ2JvZHknXSk7XG4gICAgfVxuXG4gICAgLyogQWRkIHRib2R5IHRvIEFMTE9XRURfVEFHUyBpbiBjYXNlIHRhYmxlcyBhcmUgcGVybWl0dGVkLCBzZWUgIzI4NiwgIzM2NSAqL1xuICAgIGlmIChBTExPV0VEX1RBR1MudGFibGUpIHtcbiAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgWyd0Ym9keSddKTtcbiAgICAgIGRlbGV0ZSBGT1JCSURfVEFHUy50Ym9keTtcbiAgICB9XG4gICAgaWYgKGNmZy5UUlVTVEVEX1RZUEVTX1BPTElDWSkge1xuICAgICAgaWYgKHR5cGVvZiBjZmcuVFJVU1RFRF9UWVBFU19QT0xJQ1kuY3JlYXRlSFRNTCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyB0eXBlRXJyb3JDcmVhdGUoJ1RSVVNURURfVFlQRVNfUE9MSUNZIGNvbmZpZ3VyYXRpb24gb3B0aW9uIG11c3QgcHJvdmlkZSBhIFwiY3JlYXRlSFRNTFwiIGhvb2suJyk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGNmZy5UUlVTVEVEX1RZUEVTX1BPTElDWS5jcmVhdGVTY3JpcHRVUkwgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgdHlwZUVycm9yQ3JlYXRlKCdUUlVTVEVEX1RZUEVTX1BPTElDWSBjb25maWd1cmF0aW9uIG9wdGlvbiBtdXN0IHByb3ZpZGUgYSBcImNyZWF0ZVNjcmlwdFVSTFwiIGhvb2suJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIE92ZXJ3cml0ZSBleGlzdGluZyBUcnVzdGVkVHlwZXMgcG9saWN5LlxuICAgICAgdHJ1c3RlZFR5cGVzUG9saWN5ID0gY2ZnLlRSVVNURURfVFlQRVNfUE9MSUNZO1xuXG4gICAgICAvLyBTaWduIGxvY2FsIHZhcmlhYmxlcyByZXF1aXJlZCBieSBgc2FuaXRpemVgLlxuICAgICAgZW1wdHlIVE1MID0gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwoJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVbmluaXRpYWxpemVkIHBvbGljeSwgYXR0ZW1wdCB0byBpbml0aWFsaXplIHRoZSBpbnRlcm5hbCBkb21wdXJpZnkgcG9saWN5LlxuICAgICAgaWYgKHRydXN0ZWRUeXBlc1BvbGljeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRydXN0ZWRUeXBlc1BvbGljeSA9IF9jcmVhdGVUcnVzdGVkVHlwZXNQb2xpY3kodHJ1c3RlZFR5cGVzLCBjdXJyZW50U2NyaXB0KTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgY3JlYXRpbmcgdGhlIGludGVybmFsIHBvbGljeSBzdWNjZWVkZWQgc2lnbiBpbnRlcm5hbCB2YXJpYWJsZXMuXG4gICAgICBpZiAodHJ1c3RlZFR5cGVzUG9saWN5ICE9PSBudWxsICYmIHR5cGVvZiBlbXB0eUhUTUwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGVtcHR5SFRNTCA9IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKCcnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQcmV2ZW50IGZ1cnRoZXIgbWFuaXB1bGF0aW9uIG9mIGNvbmZpZ3VyYXRpb24uXG4gICAgLy8gTm90IGF2YWlsYWJsZSBpbiBJRTgsIFNhZmFyaSA1LCBldGMuXG4gICAgaWYgKGZyZWV6ZSkge1xuICAgICAgZnJlZXplKGNmZyk7XG4gICAgfVxuICAgIENPTkZJRyA9IGNmZztcbiAgfTtcbiAgY29uc3QgTUFUSE1MX1RFWFRfSU5URUdSQVRJT05fUE9JTlRTID0gYWRkVG9TZXQoe30sIFsnbWknLCAnbW8nLCAnbW4nLCAnbXMnLCAnbXRleHQnXSk7XG4gIGNvbnN0IEhUTUxfSU5URUdSQVRJT05fUE9JTlRTID0gYWRkVG9TZXQoe30sIFsnYW5ub3RhdGlvbi14bWwnXSk7XG5cbiAgLy8gQ2VydGFpbiBlbGVtZW50cyBhcmUgYWxsb3dlZCBpbiBib3RoIFNWRyBhbmQgSFRNTFxuICAvLyBuYW1lc3BhY2UuIFdlIG5lZWQgdG8gc3BlY2lmeSB0aGVtIGV4cGxpY2l0bHlcbiAgLy8gc28gdGhhdCB0aGV5IGRvbid0IGdldCBlcnJvbmVvdXNseSBkZWxldGVkIGZyb21cbiAgLy8gSFRNTCBuYW1lc3BhY2UuXG4gIGNvbnN0IENPTU1PTl9TVkdfQU5EX0hUTUxfRUxFTUVOVFMgPSBhZGRUb1NldCh7fSwgWyd0aXRsZScsICdzdHlsZScsICdmb250JywgJ2EnLCAnc2NyaXB0J10pO1xuXG4gIC8qIEtlZXAgdHJhY2sgb2YgYWxsIHBvc3NpYmxlIFNWRyBhbmQgTWF0aE1MIHRhZ3NcbiAgICogc28gdGhhdCB3ZSBjYW4gcGVyZm9ybSB0aGUgbmFtZXNwYWNlIGNoZWNrc1xuICAgKiBjb3JyZWN0bHkuICovXG4gIGNvbnN0IEFMTF9TVkdfVEFHUyA9IGFkZFRvU2V0KHt9LCBbLi4uc3ZnJDEsIC4uLnN2Z0ZpbHRlcnMsIC4uLnN2Z0Rpc2FsbG93ZWRdKTtcbiAgY29uc3QgQUxMX01BVEhNTF9UQUdTID0gYWRkVG9TZXQoe30sIFsuLi5tYXRoTWwkMSwgLi4ubWF0aE1sRGlzYWxsb3dlZF0pO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gIHtFbGVtZW50fSBlbGVtZW50IGEgRE9NIGVsZW1lbnQgd2hvc2UgbmFtZXNwYWNlIGlzIGJlaW5nIGNoZWNrZWRcbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybiBmYWxzZSBpZiB0aGUgZWxlbWVudCBoYXMgYVxuICAgKiAgbmFtZXNwYWNlIHRoYXQgYSBzcGVjLWNvbXBsaWFudCBwYXJzZXIgd291bGQgbmV2ZXJcbiAgICogIHJldHVybi4gUmV0dXJuIHRydWUgb3RoZXJ3aXNlLlxuICAgKi9cbiAgY29uc3QgX2NoZWNrVmFsaWROYW1lc3BhY2UgPSBmdW5jdGlvbiBfY2hlY2tWYWxpZE5hbWVzcGFjZShlbGVtZW50KSB7XG4gICAgbGV0IHBhcmVudCA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG5cbiAgICAvLyBJbiBKU0RPTSwgaWYgd2UncmUgaW5zaWRlIHNoYWRvdyBET00sIHRoZW4gcGFyZW50Tm9kZVxuICAgIC8vIGNhbiBiZSBudWxsLiBXZSBqdXN0IHNpbXVsYXRlIHBhcmVudCBpbiB0aGlzIGNhc2UuXG4gICAgaWYgKCFwYXJlbnQgfHwgIXBhcmVudC50YWdOYW1lKSB7XG4gICAgICBwYXJlbnQgPSB7XG4gICAgICAgIG5hbWVzcGFjZVVSSTogTkFNRVNQQUNFLFxuICAgICAgICB0YWdOYW1lOiAndGVtcGxhdGUnXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB0YWdOYW1lID0gc3RyaW5nVG9Mb3dlckNhc2UoZWxlbWVudC50YWdOYW1lKTtcbiAgICBjb25zdCBwYXJlbnRUYWdOYW1lID0gc3RyaW5nVG9Mb3dlckNhc2UocGFyZW50LnRhZ05hbWUpO1xuICAgIGlmICghQUxMT1dFRF9OQU1FU1BBQ0VTW2VsZW1lbnQubmFtZXNwYWNlVVJJXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IFNWR19OQU1FU1BBQ0UpIHtcbiAgICAgIC8vIFRoZSBvbmx5IHdheSB0byBzd2l0Y2ggZnJvbSBIVE1MIG5hbWVzcGFjZSB0byBTVkdcbiAgICAgIC8vIGlzIHZpYSA8c3ZnPi4gSWYgaXQgaGFwcGVucyB2aWEgYW55IG90aGVyIHRhZywgdGhlblxuICAgICAgLy8gaXQgc2hvdWxkIGJlIGtpbGxlZC5cbiAgICAgIGlmIChwYXJlbnQubmFtZXNwYWNlVVJJID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgICAgICByZXR1cm4gdGFnTmFtZSA9PT0gJ3N2Zyc7XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBvbmx5IHdheSB0byBzd2l0Y2ggZnJvbSBNYXRoTUwgdG8gU1ZHIGlzIHZpYWBcbiAgICAgIC8vIHN2ZyBpZiBwYXJlbnQgaXMgZWl0aGVyIDxhbm5vdGF0aW9uLXhtbD4gb3IgTWF0aE1MXG4gICAgICAvLyB0ZXh0IGludGVncmF0aW9uIHBvaW50cy5cbiAgICAgIGlmIChwYXJlbnQubmFtZXNwYWNlVVJJID09PSBNQVRITUxfTkFNRVNQQUNFKSB7XG4gICAgICAgIHJldHVybiB0YWdOYW1lID09PSAnc3ZnJyAmJiAocGFyZW50VGFnTmFtZSA9PT0gJ2Fubm90YXRpb24teG1sJyB8fCBNQVRITUxfVEVYVF9JTlRFR1JBVElPTl9QT0lOVFNbcGFyZW50VGFnTmFtZV0pO1xuICAgICAgfVxuXG4gICAgICAvLyBXZSBvbmx5IGFsbG93IGVsZW1lbnRzIHRoYXQgYXJlIGRlZmluZWQgaW4gU1ZHXG4gICAgICAvLyBzcGVjLiBBbGwgb3RoZXJzIGFyZSBkaXNhbGxvd2VkIGluIFNWRyBuYW1lc3BhY2UuXG4gICAgICByZXR1cm4gQm9vbGVhbihBTExfU1ZHX1RBR1NbdGFnTmFtZV0pO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IE1BVEhNTF9OQU1FU1BBQ0UpIHtcbiAgICAgIC8vIFRoZSBvbmx5IHdheSB0byBzd2l0Y2ggZnJvbSBIVE1MIG5hbWVzcGFjZSB0byBNYXRoTUxcbiAgICAgIC8vIGlzIHZpYSA8bWF0aD4uIElmIGl0IGhhcHBlbnMgdmlhIGFueSBvdGhlciB0YWcsIHRoZW5cbiAgICAgIC8vIGl0IHNob3VsZCBiZSBraWxsZWQuXG4gICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gSFRNTF9OQU1FU1BBQ0UpIHtcbiAgICAgICAgcmV0dXJuIHRhZ05hbWUgPT09ICdtYXRoJztcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIFNWRyB0byBNYXRoTUwgaXMgdmlhXG4gICAgICAvLyA8bWF0aD4gYW5kIEhUTUwgaW50ZWdyYXRpb24gcG9pbnRzXG4gICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gU1ZHX05BTUVTUEFDRSkge1xuICAgICAgICByZXR1cm4gdGFnTmFtZSA9PT0gJ21hdGgnICYmIEhUTUxfSU5URUdSQVRJT05fUE9JTlRTW3BhcmVudFRhZ05hbWVdO1xuICAgICAgfVxuXG4gICAgICAvLyBXZSBvbmx5IGFsbG93IGVsZW1lbnRzIHRoYXQgYXJlIGRlZmluZWQgaW4gTWF0aE1MXG4gICAgICAvLyBzcGVjLiBBbGwgb3RoZXJzIGFyZSBkaXNhbGxvd2VkIGluIE1hdGhNTCBuYW1lc3BhY2UuXG4gICAgICByZXR1cm4gQm9vbGVhbihBTExfTUFUSE1MX1RBR1NbdGFnTmFtZV0pO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICAvLyBUaGUgb25seSB3YXkgdG8gc3dpdGNoIGZyb20gU1ZHIHRvIEhUTUwgaXMgdmlhXG4gICAgICAvLyBIVE1MIGludGVncmF0aW9uIHBvaW50cywgYW5kIGZyb20gTWF0aE1MIHRvIEhUTUxcbiAgICAgIC8vIGlzIHZpYSBNYXRoTUwgdGV4dCBpbnRlZ3JhdGlvbiBwb2ludHNcbiAgICAgIGlmIChwYXJlbnQubmFtZXNwYWNlVVJJID09PSBTVkdfTkFNRVNQQUNFICYmICFIVE1MX0lOVEVHUkFUSU9OX1BPSU5UU1twYXJlbnRUYWdOYW1lXSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gTUFUSE1MX05BTUVTUEFDRSAmJiAhTUFUSE1MX1RFWFRfSU5URUdSQVRJT05fUE9JTlRTW3BhcmVudFRhZ05hbWVdKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gV2UgZGlzYWxsb3cgdGFncyB0aGF0IGFyZSBzcGVjaWZpYyBmb3IgTWF0aE1MXG4gICAgICAvLyBvciBTVkcgYW5kIHNob3VsZCBuZXZlciBhcHBlYXIgaW4gSFRNTCBuYW1lc3BhY2VcbiAgICAgIHJldHVybiAhQUxMX01BVEhNTF9UQUdTW3RhZ05hbWVdICYmIChDT01NT05fU1ZHX0FORF9IVE1MX0VMRU1FTlRTW3RhZ05hbWVdIHx8ICFBTExfU1ZHX1RBR1NbdGFnTmFtZV0pO1xuICAgIH1cblxuICAgIC8vIEZvciBYSFRNTCBhbmQgWE1MIGRvY3VtZW50cyB0aGF0IHN1cHBvcnQgY3VzdG9tIG5hbWVzcGFjZXNcbiAgICBpZiAoUEFSU0VSX01FRElBX1RZUEUgPT09ICdhcHBsaWNhdGlvbi94aHRtbCt4bWwnICYmIEFMTE9XRURfTkFNRVNQQUNFU1tlbGVtZW50Lm5hbWVzcGFjZVVSSV0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIFRoZSBjb2RlIHNob3VsZCBuZXZlciByZWFjaCB0aGlzIHBsYWNlICh0aGlzIG1lYW5zXG4gICAgLy8gdGhhdCB0aGUgZWxlbWVudCBzb21laG93IGdvdCBuYW1lc3BhY2UgdGhhdCBpcyBub3RcbiAgICAvLyBIVE1MLCBTVkcsIE1hdGhNTCBvciBhbGxvd2VkIHZpYSBBTExPV0VEX05BTUVTUEFDRVMpLlxuICAgIC8vIFJldHVybiBmYWxzZSBqdXN0IGluIGNhc2UuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBfZm9yY2VSZW1vdmVcbiAgICpcbiAgICogQHBhcmFtICB7Tm9kZX0gbm9kZSBhIERPTSBub2RlXG4gICAqL1xuICBjb25zdCBfZm9yY2VSZW1vdmUgPSBmdW5jdGlvbiBfZm9yY2VSZW1vdmUobm9kZSkge1xuICAgIGFycmF5UHVzaChET01QdXJpZnkucmVtb3ZlZCwge1xuICAgICAgZWxlbWVudDogbm9kZVxuICAgIH0pO1xuICAgIHRyeSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItZG9tLW5vZGUtcmVtb3ZlXG4gICAgICBnZXRQYXJlbnROb2RlKG5vZGUpLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgIHJlbW92ZShub2RlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIF9yZW1vdmVBdHRyaWJ1dGVcbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBuYW1lIGFuIEF0dHJpYnV0ZSBuYW1lXG4gICAqIEBwYXJhbSAge05vZGV9IG5vZGUgYSBET00gbm9kZVxuICAgKi9cbiAgY29uc3QgX3JlbW92ZUF0dHJpYnV0ZSA9IGZ1bmN0aW9uIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgbm9kZSkge1xuICAgIHRyeSB7XG4gICAgICBhcnJheVB1c2goRE9NUHVyaWZ5LnJlbW92ZWQsIHtcbiAgICAgICAgYXR0cmlidXRlOiBub2RlLmdldEF0dHJpYnV0ZU5vZGUobmFtZSksXG4gICAgICAgIGZyb206IG5vZGVcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgIGFycmF5UHVzaChET01QdXJpZnkucmVtb3ZlZCwge1xuICAgICAgICBhdHRyaWJ1dGU6IG51bGwsXG4gICAgICAgIGZyb206IG5vZGVcbiAgICAgIH0pO1xuICAgIH1cbiAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcblxuICAgIC8vIFdlIHZvaWQgYXR0cmlidXRlIHZhbHVlcyBmb3IgdW5yZW1vdmFibGUgXCJpc1wiXCIgYXR0cmlidXRlc1xuICAgIGlmIChuYW1lID09PSAnaXMnICYmICFBTExPV0VEX0FUVFJbbmFtZV0pIHtcbiAgICAgIGlmIChSRVRVUk5fRE9NIHx8IFJFVFVSTl9ET01fRlJBR01FTlQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfZm9yY2VSZW1vdmUobm9kZSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsICcnKTtcbiAgICAgICAgfSBjYXRjaCAoXykge31cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIF9pbml0RG9jdW1lbnRcbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBkaXJ0eSBhIHN0cmluZyBvZiBkaXJ0eSBtYXJrdXBcbiAgICogQHJldHVybiB7RG9jdW1lbnR9IGEgRE9NLCBmaWxsZWQgd2l0aCB0aGUgZGlydHkgbWFya3VwXG4gICAqL1xuICBjb25zdCBfaW5pdERvY3VtZW50ID0gZnVuY3Rpb24gX2luaXREb2N1bWVudChkaXJ0eSkge1xuICAgIC8qIENyZWF0ZSBhIEhUTUwgZG9jdW1lbnQgKi9cbiAgICBsZXQgZG9jID0gbnVsbDtcbiAgICBsZXQgbGVhZGluZ1doaXRlc3BhY2UgPSBudWxsO1xuICAgIGlmIChGT1JDRV9CT0RZKSB7XG4gICAgICBkaXJ0eSA9ICc8cmVtb3ZlPjwvcmVtb3ZlPicgKyBkaXJ0eTtcbiAgICB9IGVsc2Uge1xuICAgICAgLyogSWYgRk9SQ0VfQk9EWSBpc24ndCB1c2VkLCBsZWFkaW5nIHdoaXRlc3BhY2UgbmVlZHMgdG8gYmUgcHJlc2VydmVkIG1hbnVhbGx5ICovXG4gICAgICBjb25zdCBtYXRjaGVzID0gc3RyaW5nTWF0Y2goZGlydHksIC9eW1xcclxcblxcdCBdKy8pO1xuICAgICAgbGVhZGluZ1doaXRlc3BhY2UgPSBtYXRjaGVzICYmIG1hdGNoZXNbMF07XG4gICAgfVxuICAgIGlmIChQQVJTRVJfTUVESUFfVFlQRSA9PT0gJ2FwcGxpY2F0aW9uL3hodG1sK3htbCcgJiYgTkFNRVNQQUNFID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgICAgLy8gUm9vdCBvZiBYSFRNTCBkb2MgbXVzdCBjb250YWluIHhtbG5zIGRlY2xhcmF0aW9uIChzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3hodG1sMS9ub3JtYXRpdmUuaHRtbCNzdHJpY3QpXG4gICAgICBkaXJ0eSA9ICc8aHRtbCB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj48aGVhZD48L2hlYWQ+PGJvZHk+JyArIGRpcnR5ICsgJzwvYm9keT48L2h0bWw+JztcbiAgICB9XG4gICAgY29uc3QgZGlydHlQYXlsb2FkID0gdHJ1c3RlZFR5cGVzUG9saWN5ID8gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwoZGlydHkpIDogZGlydHk7XG4gICAgLypcbiAgICAgKiBVc2UgdGhlIERPTVBhcnNlciBBUEkgYnkgZGVmYXVsdCwgZmFsbGJhY2sgbGF0ZXIgaWYgbmVlZHMgYmVcbiAgICAgKiBET01QYXJzZXIgbm90IHdvcmsgZm9yIHN2ZyB3aGVuIGhhcyBtdWx0aXBsZSByb290IGVsZW1lbnQuXG4gICAgICovXG4gICAgaWYgKE5BTUVTUEFDRSA9PT0gSFRNTF9OQU1FU1BBQ0UpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoZGlydHlQYXlsb2FkLCBQQVJTRVJfTUVESUFfVFlQRSk7XG4gICAgICB9IGNhdGNoIChfKSB7fVxuICAgIH1cblxuICAgIC8qIFVzZSBjcmVhdGVIVE1MRG9jdW1lbnQgaW4gY2FzZSBET01QYXJzZXIgaXMgbm90IGF2YWlsYWJsZSAqL1xuICAgIGlmICghZG9jIHx8ICFkb2MuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBkb2MgPSBpbXBsZW1lbnRhdGlvbi5jcmVhdGVEb2N1bWVudChOQU1FU1BBQ0UsICd0ZW1wbGF0ZScsIG51bGwpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZG9jLmRvY3VtZW50RWxlbWVudC5pbm5lckhUTUwgPSBJU19FTVBUWV9JTlBVVCA/IGVtcHR5SFRNTCA6IGRpcnR5UGF5bG9hZDtcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgLy8gU3ludGF4IGVycm9yIGlmIGRpcnR5UGF5bG9hZCBpcyBpbnZhbGlkIHhtbFxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBib2R5ID0gZG9jLmJvZHkgfHwgZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICBpZiAoZGlydHkgJiYgbGVhZGluZ1doaXRlc3BhY2UpIHtcbiAgICAgIGJvZHkuaW5zZXJ0QmVmb3JlKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxlYWRpbmdXaGl0ZXNwYWNlKSwgYm9keS5jaGlsZE5vZGVzWzBdIHx8IG51bGwpO1xuICAgIH1cblxuICAgIC8qIFdvcmsgb24gd2hvbGUgZG9jdW1lbnQgb3IganVzdCBpdHMgYm9keSAqL1xuICAgIGlmIChOQU1FU1BBQ0UgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICByZXR1cm4gZ2V0RWxlbWVudHNCeVRhZ05hbWUuY2FsbChkb2MsIFdIT0xFX0RPQ1VNRU5UID8gJ2h0bWwnIDogJ2JvZHknKVswXTtcbiAgICB9XG4gICAgcmV0dXJuIFdIT0xFX0RPQ1VNRU5UID8gZG9jLmRvY3VtZW50RWxlbWVudCA6IGJvZHk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBOb2RlSXRlcmF0b3Igb2JqZWN0IHRoYXQgeW91IGNhbiB1c2UgdG8gdHJhdmVyc2UgZmlsdGVyZWQgbGlzdHMgb2Ygbm9kZXMgb3IgZWxlbWVudHMgaW4gYSBkb2N1bWVudC5cbiAgICpcbiAgICogQHBhcmFtICB7Tm9kZX0gcm9vdCBUaGUgcm9vdCBlbGVtZW50IG9yIG5vZGUgdG8gc3RhcnQgdHJhdmVyc2luZyBvbi5cbiAgICogQHJldHVybiB7Tm9kZUl0ZXJhdG9yfSBUaGUgY3JlYXRlZCBOb2RlSXRlcmF0b3JcbiAgICovXG4gIGNvbnN0IF9jcmVhdGVOb2RlSXRlcmF0b3IgPSBmdW5jdGlvbiBfY3JlYXRlTm9kZUl0ZXJhdG9yKHJvb3QpIHtcbiAgICByZXR1cm4gY3JlYXRlTm9kZUl0ZXJhdG9yLmNhbGwocm9vdC5vd25lckRvY3VtZW50IHx8IHJvb3QsIHJvb3QsXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCB8IE5vZGVGaWx0ZXIuU0hPV19DT01NRU5UIHwgTm9kZUZpbHRlci5TSE9XX1RFWFQgfCBOb2RlRmlsdGVyLlNIT1dfUFJPQ0VTU0lOR19JTlNUUlVDVElPTiB8IE5vZGVGaWx0ZXIuU0hPV19DREFUQV9TRUNUSU9OLCBudWxsKTtcbiAgfTtcblxuICAvKipcbiAgICogX2lzQ2xvYmJlcmVkXG4gICAqXG4gICAqIEBwYXJhbSAge05vZGV9IGVsbSBlbGVtZW50IHRvIGNoZWNrIGZvciBjbG9iYmVyaW5nIGF0dGFja3NcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBjbG9iYmVyZWQsIGZhbHNlIGlmIHNhZmVcbiAgICovXG4gIGNvbnN0IF9pc0Nsb2JiZXJlZCA9IGZ1bmN0aW9uIF9pc0Nsb2JiZXJlZChlbG0pIHtcbiAgICByZXR1cm4gZWxtIGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50ICYmICh0eXBlb2YgZWxtLm5vZGVOYW1lICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgZWxtLnRleHRDb250ZW50ICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgZWxtLnJlbW92ZUNoaWxkICE9PSAnZnVuY3Rpb24nIHx8ICEoZWxtLmF0dHJpYnV0ZXMgaW5zdGFuY2VvZiBOYW1lZE5vZGVNYXApIHx8IHR5cGVvZiBlbG0ucmVtb3ZlQXR0cmlidXRlICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBlbG0uc2V0QXR0cmlidXRlICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBlbG0ubmFtZXNwYWNlVVJJICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgZWxtLmluc2VydEJlZm9yZSAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgZWxtLmhhc0NoaWxkTm9kZXMgIT09ICdmdW5jdGlvbicpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGEgRE9NIG5vZGUuXG4gICAqXG4gICAqIEBwYXJhbSAge05vZGV9IG9iamVjdCBvYmplY3QgdG8gY2hlY2sgd2hldGhlciBpdCdzIGEgRE9NIG5vZGVcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpcyBvYmplY3QgaXMgYSBET00gbm9kZVxuICAgKi9cbiAgY29uc3QgX2lzTm9kZSA9IGZ1bmN0aW9uIF9pc05vZGUob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBOb2RlID09PSAnZnVuY3Rpb24nICYmIG9iamVjdCBpbnN0YW5jZW9mIE5vZGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIF9leGVjdXRlSG9va1xuICAgKiBFeGVjdXRlIHVzZXIgY29uZmlndXJhYmxlIGhvb2tzXG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gZW50cnlQb2ludCAgTmFtZSBvZiB0aGUgaG9vaydzIGVudHJ5IHBvaW50XG4gICAqIEBwYXJhbSAge05vZGV9IGN1cnJlbnROb2RlIG5vZGUgdG8gd29yayBvbiB3aXRoIHRoZSBob29rXG4gICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBhZGRpdGlvbmFsIGhvb2sgcGFyYW1ldGVyc1xuICAgKi9cbiAgY29uc3QgX2V4ZWN1dGVIb29rID0gZnVuY3Rpb24gX2V4ZWN1dGVIb29rKGVudHJ5UG9pbnQsIGN1cnJlbnROb2RlLCBkYXRhKSB7XG4gICAgaWYgKCFob29rc1tlbnRyeVBvaW50XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhcnJheUZvckVhY2goaG9va3NbZW50cnlQb2ludF0sIGhvb2sgPT4ge1xuICAgICAgaG9vay5jYWxsKERPTVB1cmlmeSwgY3VycmVudE5vZGUsIGRhdGEsIENPTkZJRyk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIF9zYW5pdGl6ZUVsZW1lbnRzXG4gICAqXG4gICAqIEBwcm90ZWN0IG5vZGVOYW1lXG4gICAqIEBwcm90ZWN0IHRleHRDb250ZW50XG4gICAqIEBwcm90ZWN0IHJlbW92ZUNoaWxkXG4gICAqXG4gICAqIEBwYXJhbSAgIHtOb2RlfSBjdXJyZW50Tm9kZSB0byBjaGVjayBmb3IgcGVybWlzc2lvbiB0byBleGlzdFxuICAgKiBAcmV0dXJuICB7Qm9vbGVhbn0gdHJ1ZSBpZiBub2RlIHdhcyBraWxsZWQsIGZhbHNlIGlmIGxlZnQgYWxpdmVcbiAgICovXG4gIGNvbnN0IF9zYW5pdGl6ZUVsZW1lbnRzID0gZnVuY3Rpb24gX3Nhbml0aXplRWxlbWVudHMoY3VycmVudE5vZGUpIHtcbiAgICBsZXQgY29udGVudCA9IG51bGw7XG5cbiAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgX2V4ZWN1dGVIb29rKCdiZWZvcmVTYW5pdGl6ZUVsZW1lbnRzJywgY3VycmVudE5vZGUsIG51bGwpO1xuXG4gICAgLyogQ2hlY2sgaWYgZWxlbWVudCBpcyBjbG9iYmVyZWQgb3IgY2FuIGNsb2JiZXIgKi9cbiAgICBpZiAoX2lzQ2xvYmJlcmVkKGN1cnJlbnROb2RlKSkge1xuICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qIE5vdyBsZXQncyBjaGVjayB0aGUgZWxlbWVudCdzIHR5cGUgYW5kIG5hbWUgKi9cbiAgICBjb25zdCB0YWdOYW1lID0gdHJhbnNmb3JtQ2FzZUZ1bmMoY3VycmVudE5vZGUubm9kZU5hbWUpO1xuXG4gICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgIF9leGVjdXRlSG9vaygndXBvblNhbml0aXplRWxlbWVudCcsIGN1cnJlbnROb2RlLCB7XG4gICAgICB0YWdOYW1lLFxuICAgICAgYWxsb3dlZFRhZ3M6IEFMTE9XRURfVEFHU1xuICAgIH0pO1xuXG4gICAgLyogRGV0ZWN0IG1YU1MgYXR0ZW1wdHMgYWJ1c2luZyBuYW1lc3BhY2UgY29uZnVzaW9uICovXG4gICAgaWYgKGN1cnJlbnROb2RlLmhhc0NoaWxkTm9kZXMoKSAmJiAhX2lzTm9kZShjdXJyZW50Tm9kZS5maXJzdEVsZW1lbnRDaGlsZCkgJiYgcmVnRXhwVGVzdCgvPFsvXFx3XS9nLCBjdXJyZW50Tm9kZS5pbm5lckhUTUwpICYmIHJlZ0V4cFRlc3QoLzxbL1xcd10vZywgY3VycmVudE5vZGUudGV4dENvbnRlbnQpKSB7XG4gICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyogUmVtb3ZlIGFueSBvY2N1cnJlbmNlIG9mIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb25zICovXG4gICAgaWYgKGN1cnJlbnROb2RlLm5vZGVUeXBlID09PSBOT0RFX1RZUEUucHJvZ3Jlc3NpbmdJbnN0cnVjdGlvbikge1xuICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qIFJlbW92ZSBhbnkga2luZCBvZiBwb3NzaWJseSBoYXJtZnVsIGNvbW1lbnRzICovXG4gICAgaWYgKFNBRkVfRk9SX1hNTCAmJiBjdXJyZW50Tm9kZS5ub2RlVHlwZSA9PT0gTk9ERV9UWVBFLmNvbW1lbnQgJiYgcmVnRXhwVGVzdCgvPFsvXFx3XS9nLCBjdXJyZW50Tm9kZS5kYXRhKSkge1xuICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qIFJlbW92ZSBlbGVtZW50IGlmIGFueXRoaW5nIGZvcmJpZHMgaXRzIHByZXNlbmNlICovXG4gICAgaWYgKCFBTExPV0VEX1RBR1NbdGFnTmFtZV0gfHwgRk9SQklEX1RBR1NbdGFnTmFtZV0pIHtcbiAgICAgIC8qIENoZWNrIGlmIHdlIGhhdmUgYSBjdXN0b20gZWxlbWVudCB0byBoYW5kbGUgKi9cbiAgICAgIGlmICghRk9SQklEX1RBR1NbdGFnTmFtZV0gJiYgX2lzQmFzaWNDdXN0b21FbGVtZW50KHRhZ05hbWUpKSB7XG4gICAgICAgIGlmIChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBSZWdFeHAgJiYgcmVnRXhwVGVzdChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2ssIHRhZ05hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sodGFnTmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyogS2VlcCBjb250ZW50IGV4Y2VwdCBmb3IgYmFkLWxpc3RlZCBlbGVtZW50cyAqL1xuICAgICAgaWYgKEtFRVBfQ09OVEVOVCAmJiAhRk9SQklEX0NPTlRFTlRTW3RhZ05hbWVdKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGN1cnJlbnROb2RlKSB8fCBjdXJyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gZ2V0Q2hpbGROb2RlcyhjdXJyZW50Tm9kZSkgfHwgY3VycmVudE5vZGUuY2hpbGROb2RlcztcbiAgICAgICAgaWYgKGNoaWxkTm9kZXMgJiYgcGFyZW50Tm9kZSkge1xuICAgICAgICAgIGNvbnN0IGNoaWxkQ291bnQgPSBjaGlsZE5vZGVzLmxlbmd0aDtcbiAgICAgICAgICBmb3IgKGxldCBpID0gY2hpbGRDb3VudCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZENsb25lID0gY2xvbmVOb2RlKGNoaWxkTm9kZXNbaV0sIHRydWUpO1xuICAgICAgICAgICAgY2hpbGRDbG9uZS5fX3JlbW92YWxDb3VudCA9IChjdXJyZW50Tm9kZS5fX3JlbW92YWxDb3VudCB8fCAwKSArIDE7XG4gICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShjaGlsZENsb25lLCBnZXROZXh0U2libGluZyhjdXJyZW50Tm9kZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qIENoZWNrIHdoZXRoZXIgZWxlbWVudCBoYXMgYSB2YWxpZCBuYW1lc3BhY2UgKi9cbiAgICBpZiAoY3VycmVudE5vZGUgaW5zdGFuY2VvZiBFbGVtZW50ICYmICFfY2hlY2tWYWxpZE5hbWVzcGFjZShjdXJyZW50Tm9kZSkpIHtcbiAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiBNYWtlIHN1cmUgdGhhdCBvbGRlciBicm93c2VycyBkb24ndCBnZXQgZmFsbGJhY2stdGFnIG1YU1MgKi9cbiAgICBpZiAoKHRhZ05hbWUgPT09ICdub3NjcmlwdCcgfHwgdGFnTmFtZSA9PT0gJ25vZW1iZWQnIHx8IHRhZ05hbWUgPT09ICdub2ZyYW1lcycpICYmIHJlZ0V4cFRlc3QoLzxcXC9ubyhzY3JpcHR8ZW1iZWR8ZnJhbWVzKS9pLCBjdXJyZW50Tm9kZS5pbm5lckhUTUwpKSB7XG4gICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyogU2FuaXRpemUgZWxlbWVudCBjb250ZW50IHRvIGJlIHRlbXBsYXRlLXNhZmUgKi9cbiAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTICYmIGN1cnJlbnROb2RlLm5vZGVUeXBlID09PSBOT0RFX1RZUEUudGV4dCkge1xuICAgICAgLyogR2V0IHRoZSBlbGVtZW50J3MgdGV4dCBjb250ZW50ICovXG4gICAgICBjb250ZW50ID0gY3VycmVudE5vZGUudGV4dENvbnRlbnQ7XG4gICAgICBhcnJheUZvckVhY2goW01VU1RBQ0hFX0VYUFIsIEVSQl9FWFBSLCBUTVBMSVRfRVhQUl0sIGV4cHIgPT4ge1xuICAgICAgICBjb250ZW50ID0gc3RyaW5nUmVwbGFjZShjb250ZW50LCBleHByLCAnICcpO1xuICAgICAgfSk7XG4gICAgICBpZiAoY3VycmVudE5vZGUudGV4dENvbnRlbnQgIT09IGNvbnRlbnQpIHtcbiAgICAgICAgYXJyYXlQdXNoKERPTVB1cmlmeS5yZW1vdmVkLCB7XG4gICAgICAgICAgZWxlbWVudDogY3VycmVudE5vZGUuY2xvbmVOb2RlKClcbiAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnROb2RlLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgX2V4ZWN1dGVIb29rKCdhZnRlclNhbml0aXplRWxlbWVudHMnLCBjdXJyZW50Tm9kZSwgbnVsbCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBfaXNWYWxpZEF0dHJpYnV0ZVxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGxjVGFnIExvd2VyY2FzZSB0YWcgbmFtZSBvZiBjb250YWluaW5nIGVsZW1lbnQuXG4gICAqIEBwYXJhbSAge3N0cmluZ30gbGNOYW1lIExvd2VyY2FzZSBhdHRyaWJ1dGUgbmFtZS5cbiAgICogQHBhcmFtICB7c3RyaW5nfSB2YWx1ZSBBdHRyaWJ1dGUgdmFsdWUuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBgdmFsdWVgIGlzIHZhbGlkLCBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuICBjb25zdCBfaXNWYWxpZEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIF9pc1ZhbGlkQXR0cmlidXRlKGxjVGFnLCBsY05hbWUsIHZhbHVlKSB7XG4gICAgLyogTWFrZSBzdXJlIGF0dHJpYnV0ZSBjYW5ub3QgY2xvYmJlciAqL1xuICAgIGlmIChTQU5JVElaRV9ET00gJiYgKGxjTmFtZSA9PT0gJ2lkJyB8fCBsY05hbWUgPT09ICduYW1lJykgJiYgKHZhbHVlIGluIGRvY3VtZW50IHx8IHZhbHVlIGluIGZvcm1FbGVtZW50KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qIEFsbG93IHZhbGlkIGRhdGEtKiBhdHRyaWJ1dGVzOiBBdCBsZWFzdCBvbmUgY2hhcmFjdGVyIGFmdGVyIFwiLVwiXG4gICAgICAgIChodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9kb20uaHRtbCNlbWJlZGRpbmctY3VzdG9tLW5vbi12aXNpYmxlLWRhdGEtd2l0aC10aGUtZGF0YS0qLWF0dHJpYnV0ZXMpXG4gICAgICAgIFhNTC1jb21wYXRpYmxlIChodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbmZyYXN0cnVjdHVyZS5odG1sI3htbC1jb21wYXRpYmxlIGFuZCBodHRwOi8vd3d3LnczLm9yZy9UUi94bWwvI2QwZTgwNClcbiAgICAgICAgV2UgZG9uJ3QgbmVlZCB0byBjaGVjayB0aGUgdmFsdWU7IGl0J3MgYWx3YXlzIFVSSSBzYWZlLiAqL1xuICAgIGlmIChBTExPV19EQVRBX0FUVFIgJiYgIUZPUkJJRF9BVFRSW2xjTmFtZV0gJiYgcmVnRXhwVGVzdChEQVRBX0FUVFIsIGxjTmFtZSkpIDsgZWxzZSBpZiAoQUxMT1dfQVJJQV9BVFRSICYmIHJlZ0V4cFRlc3QoQVJJQV9BVFRSLCBsY05hbWUpKSA7IGVsc2UgaWYgKCFBTExPV0VEX0FUVFJbbGNOYW1lXSB8fCBGT1JCSURfQVRUUltsY05hbWVdKSB7XG4gICAgICBpZiAoXG4gICAgICAvLyBGaXJzdCBjb25kaXRpb24gZG9lcyBhIHZlcnkgYmFzaWMgY2hlY2sgaWYgYSkgaXQncyBiYXNpY2FsbHkgYSB2YWxpZCBjdXN0b20gZWxlbWVudCB0YWduYW1lIEFORFxuICAgICAgLy8gYikgaWYgdGhlIHRhZ05hbWUgcGFzc2VzIHdoYXRldmVyIHRoZSB1c2VyIGhhcyBjb25maWd1cmVkIGZvciBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2tcbiAgICAgIC8vIGFuZCBjKSBpZiB0aGUgYXR0cmlidXRlIG5hbWUgcGFzc2VzIHdoYXRldmVyIHRoZSB1c2VyIGhhcyBjb25maWd1cmVkIGZvciBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2tcbiAgICAgIF9pc0Jhc2ljQ3VzdG9tRWxlbWVudChsY1RhZykgJiYgKENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayBpbnN0YW5jZW9mIFJlZ0V4cCAmJiByZWdFeHBUZXN0KENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjaywgbGNUYWcpIHx8IENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayBpbnN0YW5jZW9mIEZ1bmN0aW9uICYmIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayhsY1RhZykpICYmIChDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2sgaW5zdGFuY2VvZiBSZWdFeHAgJiYgcmVnRXhwVGVzdChDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2ssIGxjTmFtZSkgfHwgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrIGluc3RhbmNlb2YgRnVuY3Rpb24gJiYgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrKGxjTmFtZSkpIHx8XG4gICAgICAvLyBBbHRlcm5hdGl2ZSwgc2Vjb25kIGNvbmRpdGlvbiBjaGVja3MgaWYgaXQncyBhbiBgaXNgLWF0dHJpYnV0ZSwgQU5EXG4gICAgICAvLyB0aGUgdmFsdWUgcGFzc2VzIHdoYXRldmVyIHRoZSB1c2VyIGhhcyBjb25maWd1cmVkIGZvciBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2tcbiAgICAgIGxjTmFtZSA9PT0gJ2lzJyAmJiBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hbGxvd0N1c3RvbWl6ZWRCdWlsdEluRWxlbWVudHMgJiYgKENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayBpbnN0YW5jZW9mIFJlZ0V4cCAmJiByZWdFeHBUZXN0KENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjaywgdmFsdWUpIHx8IENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayBpbnN0YW5jZW9mIEZ1bmN0aW9uICYmIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayh2YWx1ZSkpKSA7IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvKiBDaGVjayB2YWx1ZSBpcyBzYWZlLiBGaXJzdCwgaXMgYXR0ciBpbmVydD8gSWYgc28sIGlzIHNhZmUgKi9cbiAgICB9IGVsc2UgaWYgKFVSSV9TQUZFX0FUVFJJQlVURVNbbGNOYW1lXSkgOyBlbHNlIGlmIChyZWdFeHBUZXN0KElTX0FMTE9XRURfVVJJJDEsIHN0cmluZ1JlcGxhY2UodmFsdWUsIEFUVFJfV0hJVEVTUEFDRSwgJycpKSkgOyBlbHNlIGlmICgobGNOYW1lID09PSAnc3JjJyB8fCBsY05hbWUgPT09ICd4bGluazpocmVmJyB8fCBsY05hbWUgPT09ICdocmVmJykgJiYgbGNUYWcgIT09ICdzY3JpcHQnICYmIHN0cmluZ0luZGV4T2YodmFsdWUsICdkYXRhOicpID09PSAwICYmIERBVEFfVVJJX1RBR1NbbGNUYWddKSA7IGVsc2UgaWYgKEFMTE9XX1VOS05PV05fUFJPVE9DT0xTICYmICFyZWdFeHBUZXN0KElTX1NDUklQVF9PUl9EQVRBLCBzdHJpbmdSZXBsYWNlKHZhbHVlLCBBVFRSX1dISVRFU1BBQ0UsICcnKSkpIDsgZWxzZSBpZiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBfaXNCYXNpY0N1c3RvbUVsZW1lbnRcbiAgICogY2hlY2tzIGlmIGF0IGxlYXN0IG9uZSBkYXNoIGlzIGluY2x1ZGVkIGluIHRhZ05hbWUsIGFuZCBpdCdzIG5vdCB0aGUgZmlyc3QgY2hhclxuICAgKiBmb3IgbW9yZSBzb3BoaXN0aWNhdGVkIGNoZWNraW5nIHNlZSBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3ZhbGlkYXRlLWVsZW1lbnQtbmFtZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZSBuYW1lIG9mIHRoZSB0YWcgb2YgdGhlIG5vZGUgdG8gc2FuaXRpemVcbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiB0aGUgdGFnIG5hbWUgbWVldHMgdGhlIGJhc2ljIGNyaXRlcmlhIGZvciBhIGN1c3RvbSBlbGVtZW50LCBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICBjb25zdCBfaXNCYXNpY0N1c3RvbUVsZW1lbnQgPSBmdW5jdGlvbiBfaXNCYXNpY0N1c3RvbUVsZW1lbnQodGFnTmFtZSkge1xuICAgIHJldHVybiB0YWdOYW1lICE9PSAnYW5ub3RhdGlvbi14bWwnICYmIHN0cmluZ01hdGNoKHRhZ05hbWUsIENVU1RPTV9FTEVNRU5UKTtcbiAgfTtcblxuICAvKipcbiAgICogX3Nhbml0aXplQXR0cmlidXRlc1xuICAgKlxuICAgKiBAcHJvdGVjdCBhdHRyaWJ1dGVzXG4gICAqIEBwcm90ZWN0IG5vZGVOYW1lXG4gICAqIEBwcm90ZWN0IHJlbW92ZUF0dHJpYnV0ZVxuICAgKiBAcHJvdGVjdCBzZXRBdHRyaWJ1dGVcbiAgICpcbiAgICogQHBhcmFtICB7Tm9kZX0gY3VycmVudE5vZGUgdG8gc2FuaXRpemVcbiAgICovXG4gIGNvbnN0IF9zYW5pdGl6ZUF0dHJpYnV0ZXMgPSBmdW5jdGlvbiBfc2FuaXRpemVBdHRyaWJ1dGVzKGN1cnJlbnROb2RlKSB7XG4gICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgIF9leGVjdXRlSG9vaygnYmVmb3JlU2FuaXRpemVBdHRyaWJ1dGVzJywgY3VycmVudE5vZGUsIG51bGwpO1xuICAgIGNvbnN0IHtcbiAgICAgIGF0dHJpYnV0ZXNcbiAgICB9ID0gY3VycmVudE5vZGU7XG5cbiAgICAvKiBDaGVjayBpZiB3ZSBoYXZlIGF0dHJpYnV0ZXM7IGlmIG5vdCB3ZSBtaWdodCBoYXZlIGEgdGV4dCBub2RlICovXG4gICAgaWYgKCFhdHRyaWJ1dGVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhvb2tFdmVudCA9IHtcbiAgICAgIGF0dHJOYW1lOiAnJyxcbiAgICAgIGF0dHJWYWx1ZTogJycsXG4gICAgICBrZWVwQXR0cjogdHJ1ZSxcbiAgICAgIGFsbG93ZWRBdHRyaWJ1dGVzOiBBTExPV0VEX0FUVFJcbiAgICB9O1xuICAgIGxldCBsID0gYXR0cmlidXRlcy5sZW5ndGg7XG5cbiAgICAvKiBHbyBiYWNrd2FyZHMgb3ZlciBhbGwgYXR0cmlidXRlczsgc2FmZWx5IHJlbW92ZSBiYWQgb25lcyAqL1xuICAgIHdoaWxlIChsLS0pIHtcbiAgICAgIGNvbnN0IGF0dHIgPSBhdHRyaWJ1dGVzW2xdO1xuICAgICAgY29uc3Qge1xuICAgICAgICBuYW1lLFxuICAgICAgICBuYW1lc3BhY2VVUkksXG4gICAgICAgIHZhbHVlOiBhdHRyVmFsdWVcbiAgICAgIH0gPSBhdHRyO1xuICAgICAgY29uc3QgbGNOYW1lID0gdHJhbnNmb3JtQ2FzZUZ1bmMobmFtZSk7XG4gICAgICBsZXQgdmFsdWUgPSBuYW1lID09PSAndmFsdWUnID8gYXR0clZhbHVlIDogc3RyaW5nVHJpbShhdHRyVmFsdWUpO1xuXG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICBob29rRXZlbnQuYXR0ck5hbWUgPSBsY05hbWU7XG4gICAgICBob29rRXZlbnQuYXR0clZhbHVlID0gdmFsdWU7XG4gICAgICBob29rRXZlbnQua2VlcEF0dHIgPSB0cnVlO1xuICAgICAgaG9va0V2ZW50LmZvcmNlS2VlcEF0dHIgPSB1bmRlZmluZWQ7IC8vIEFsbG93cyBkZXZlbG9wZXJzIHRvIHNlZSB0aGlzIGlzIGEgcHJvcGVydHkgdGhleSBjYW4gc2V0XG4gICAgICBfZXhlY3V0ZUhvb2soJ3Vwb25TYW5pdGl6ZUF0dHJpYnV0ZScsIGN1cnJlbnROb2RlLCBob29rRXZlbnQpO1xuICAgICAgdmFsdWUgPSBob29rRXZlbnQuYXR0clZhbHVlO1xuXG4gICAgICAvKiBEaWQgdGhlIGhvb2tzIGFwcHJvdmUgb2YgdGhlIGF0dHJpYnV0ZT8gKi9cbiAgICAgIGlmIChob29rRXZlbnQuZm9yY2VLZWVwQXR0cikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLyogUmVtb3ZlIGF0dHJpYnV0ZSAqL1xuICAgICAgX3JlbW92ZUF0dHJpYnV0ZShuYW1lLCBjdXJyZW50Tm9kZSk7XG5cbiAgICAgIC8qIERpZCB0aGUgaG9va3MgYXBwcm92ZSBvZiB0aGUgYXR0cmlidXRlPyAqL1xuICAgICAgaWYgKCFob29rRXZlbnQua2VlcEF0dHIpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8qIFdvcmsgYXJvdW5kIGEgc2VjdXJpdHkgaXNzdWUgaW4galF1ZXJ5IDMuMCAqL1xuICAgICAgaWYgKCFBTExPV19TRUxGX0NMT1NFX0lOX0FUVFIgJiYgcmVnRXhwVGVzdCgvXFwvPi9pLCB2YWx1ZSkpIHtcbiAgICAgICAgX3JlbW92ZUF0dHJpYnV0ZShuYW1lLCBjdXJyZW50Tm9kZSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBTYW5pdGl6ZSBhdHRyaWJ1dGUgY29udGVudCB0byBiZSB0ZW1wbGF0ZS1zYWZlICovXG4gICAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTKSB7XG4gICAgICAgIGFycmF5Rm9yRWFjaChbTVVTVEFDSEVfRVhQUiwgRVJCX0VYUFIsIFRNUExJVF9FWFBSXSwgZXhwciA9PiB7XG4gICAgICAgICAgdmFsdWUgPSBzdHJpbmdSZXBsYWNlKHZhbHVlLCBleHByLCAnICcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLyogSXMgYHZhbHVlYCB2YWxpZCBmb3IgdGhpcyBhdHRyaWJ1dGU/ICovXG4gICAgICBjb25zdCBsY1RhZyA9IHRyYW5zZm9ybUNhc2VGdW5jKGN1cnJlbnROb2RlLm5vZGVOYW1lKTtcbiAgICAgIGlmICghX2lzVmFsaWRBdHRyaWJ1dGUobGNUYWcsIGxjTmFtZSwgdmFsdWUpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBGdWxsIERPTSBDbG9iYmVyaW5nIHByb3RlY3Rpb24gdmlhIG5hbWVzcGFjZSBpc29sYXRpb24sXG4gICAgICAgKiBQcmVmaXggaWQgYW5kIG5hbWUgYXR0cmlidXRlcyB3aXRoIGB1c2VyLWNvbnRlbnQtYFxuICAgICAgICovXG4gICAgICBpZiAoU0FOSVRJWkVfTkFNRURfUFJPUFMgJiYgKGxjTmFtZSA9PT0gJ2lkJyB8fCBsY05hbWUgPT09ICduYW1lJykpIHtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgd2l0aCB0aGlzIHZhbHVlXG4gICAgICAgIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgY3VycmVudE5vZGUpO1xuXG4gICAgICAgIC8vIFByZWZpeCB0aGUgdmFsdWUgYW5kIGxhdGVyIHJlLWNyZWF0ZSB0aGUgYXR0cmlidXRlIHdpdGggdGhlIHNhbml0aXplZCB2YWx1ZVxuICAgICAgICB2YWx1ZSA9IFNBTklUSVpFX05BTUVEX1BST1BTX1BSRUZJWCArIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICAvKiBXb3JrIGFyb3VuZCBhIHNlY3VyaXR5IGlzc3VlIHdpdGggY29tbWVudHMgaW5zaWRlIGF0dHJpYnV0ZXMgKi9cbiAgICAgIGlmIChTQUZFX0ZPUl9YTUwgJiYgcmVnRXhwVGVzdCgvKCgtLSE/fF0pPil8PFxcLyhzdHlsZXx0aXRsZSkvaSwgdmFsdWUpKSB7XG4gICAgICAgIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgY3VycmVudE5vZGUpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLyogSGFuZGxlIGF0dHJpYnV0ZXMgdGhhdCByZXF1aXJlIFRydXN0ZWQgVHlwZXMgKi9cbiAgICAgIGlmICh0cnVzdGVkVHlwZXNQb2xpY3kgJiYgdHlwZW9mIHRydXN0ZWRUeXBlcyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHRydXN0ZWRUeXBlcy5nZXRBdHRyaWJ1dGVUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlmIChuYW1lc3BhY2VVUkkpIDsgZWxzZSB7XG4gICAgICAgICAgc3dpdGNoICh0cnVzdGVkVHlwZXMuZ2V0QXR0cmlidXRlVHlwZShsY1RhZywgbGNOYW1lKSkge1xuICAgICAgICAgICAgY2FzZSAnVHJ1c3RlZEhUTUwnOlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlSFRNTCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ1RydXN0ZWRTY3JpcHRVUkwnOlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlU2NyaXB0VVJMKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiBIYW5kbGUgaW52YWxpZCBkYXRhLSogYXR0cmlidXRlIHNldCBieSB0cnktY2F0Y2hpbmcgaXQgKi9cbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChuYW1lc3BhY2VVUkkpIHtcbiAgICAgICAgICBjdXJyZW50Tm9kZS5zZXRBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkksIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvKiBGYWxsYmFjayB0byBzZXRBdHRyaWJ1dGUoKSBmb3IgYnJvd3Nlci11bnJlY29nbml6ZWQgbmFtZXNwYWNlcyBlLmcuIFwieC1zY2hlbWFcIi4gKi9cbiAgICAgICAgICBjdXJyZW50Tm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfaXNDbG9iYmVyZWQoY3VycmVudE5vZGUpKSB7XG4gICAgICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhcnJheVBvcChET01QdXJpZnkucmVtb3ZlZCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgfVxuXG4gICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgIF9leGVjdXRlSG9vaygnYWZ0ZXJTYW5pdGl6ZUF0dHJpYnV0ZXMnLCBjdXJyZW50Tm9kZSwgbnVsbCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIF9zYW5pdGl6ZVNoYWRvd0RPTVxuICAgKlxuICAgKiBAcGFyYW0gIHtEb2N1bWVudEZyYWdtZW50fSBmcmFnbWVudCB0byBpdGVyYXRlIG92ZXIgcmVjdXJzaXZlbHlcbiAgICovXG4gIGNvbnN0IF9zYW5pdGl6ZVNoYWRvd0RPTSA9IGZ1bmN0aW9uIF9zYW5pdGl6ZVNoYWRvd0RPTShmcmFnbWVudCkge1xuICAgIGxldCBzaGFkb3dOb2RlID0gbnVsbDtcbiAgICBjb25zdCBzaGFkb3dJdGVyYXRvciA9IF9jcmVhdGVOb2RlSXRlcmF0b3IoZnJhZ21lbnQpO1xuXG4gICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgIF9leGVjdXRlSG9vaygnYmVmb3JlU2FuaXRpemVTaGFkb3dET00nLCBmcmFnbWVudCwgbnVsbCk7XG4gICAgd2hpbGUgKHNoYWRvd05vZGUgPSBzaGFkb3dJdGVyYXRvci5uZXh0Tm9kZSgpKSB7XG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICBfZXhlY3V0ZUhvb2soJ3Vwb25TYW5pdGl6ZVNoYWRvd05vZGUnLCBzaGFkb3dOb2RlLCBudWxsKTtcblxuICAgICAgLyogU2FuaXRpemUgdGFncyBhbmQgZWxlbWVudHMgKi9cbiAgICAgIGlmIChfc2FuaXRpemVFbGVtZW50cyhzaGFkb3dOb2RlKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLyogRGVlcCBzaGFkb3cgRE9NIGRldGVjdGVkICovXG4gICAgICBpZiAoc2hhZG93Tm9kZS5jb250ZW50IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xuICAgICAgICBfc2FuaXRpemVTaGFkb3dET00oc2hhZG93Tm9kZS5jb250ZW50KTtcbiAgICAgIH1cblxuICAgICAgLyogQ2hlY2sgYXR0cmlidXRlcywgc2FuaXRpemUgaWYgbmVjZXNzYXJ5ICovXG4gICAgICBfc2FuaXRpemVBdHRyaWJ1dGVzKHNoYWRvd05vZGUpO1xuICAgIH1cblxuICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICBfZXhlY3V0ZUhvb2soJ2FmdGVyU2FuaXRpemVTaGFkb3dET00nLCBmcmFnbWVudCwgbnVsbCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNhbml0aXplXG4gICAqIFB1YmxpYyBtZXRob2QgcHJvdmlkaW5nIGNvcmUgc2FuaXRhdGlvbiBmdW5jdGlvbmFsaXR5XG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfE5vZGV9IGRpcnR5IHN0cmluZyBvciBET00gbm9kZVxuICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnIG9iamVjdFxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgRE9NUHVyaWZ5LnNhbml0aXplID0gZnVuY3Rpb24gKGRpcnR5KSB7XG4gICAgbGV0IGNmZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgbGV0IGJvZHkgPSBudWxsO1xuICAgIGxldCBpbXBvcnRlZE5vZGUgPSBudWxsO1xuICAgIGxldCBjdXJyZW50Tm9kZSA9IG51bGw7XG4gICAgbGV0IHJldHVybk5vZGUgPSBudWxsO1xuICAgIC8qIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgc3RyaW5nIHRvIHNhbml0aXplLlxuICAgICAgRE8gTk9UIHJldHVybiBlYXJseSwgYXMgdGhpcyB3aWxsIHJldHVybiB0aGUgd3JvbmcgdHlwZSBpZlxuICAgICAgdGhlIHVzZXIgaGFzIHJlcXVlc3RlZCBhIERPTSBvYmplY3QgcmF0aGVyIHRoYW4gYSBzdHJpbmcgKi9cbiAgICBJU19FTVBUWV9JTlBVVCA9ICFkaXJ0eTtcbiAgICBpZiAoSVNfRU1QVFlfSU5QVVQpIHtcbiAgICAgIGRpcnR5ID0gJzwhLS0+JztcbiAgICB9XG5cbiAgICAvKiBTdHJpbmdpZnksIGluIGNhc2UgZGlydHkgaXMgYW4gb2JqZWN0ICovXG4gICAgaWYgKHR5cGVvZiBkaXJ0eSAhPT0gJ3N0cmluZycgJiYgIV9pc05vZGUoZGlydHkpKSB7XG4gICAgICBpZiAodHlwZW9mIGRpcnR5LnRvU3RyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGRpcnR5ID0gZGlydHkudG9TdHJpbmcoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBkaXJ0eSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyB0eXBlRXJyb3JDcmVhdGUoJ2RpcnR5IGlzIG5vdCBhIHN0cmluZywgYWJvcnRpbmcnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgdHlwZUVycm9yQ3JlYXRlKCd0b1N0cmluZyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIFJldHVybiBkaXJ0eSBIVE1MIGlmIERPTVB1cmlmeSBjYW5ub3QgcnVuICovXG4gICAgaWYgKCFET01QdXJpZnkuaXNTdXBwb3J0ZWQpIHtcbiAgICAgIHJldHVybiBkaXJ0eTtcbiAgICB9XG5cbiAgICAvKiBBc3NpZ24gY29uZmlnIHZhcnMgKi9cbiAgICBpZiAoIVNFVF9DT05GSUcpIHtcbiAgICAgIF9wYXJzZUNvbmZpZyhjZmcpO1xuICAgIH1cblxuICAgIC8qIENsZWFuIHVwIHJlbW92ZWQgZWxlbWVudHMgKi9cbiAgICBET01QdXJpZnkucmVtb3ZlZCA9IFtdO1xuXG4gICAgLyogQ2hlY2sgaWYgZGlydHkgaXMgY29ycmVjdGx5IHR5cGVkIGZvciBJTl9QTEFDRSAqL1xuICAgIGlmICh0eXBlb2YgZGlydHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICBJTl9QTEFDRSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoSU5fUExBQ0UpIHtcbiAgICAgIC8qIERvIHNvbWUgZWFybHkgcHJlLXNhbml0aXphdGlvbiB0byBhdm9pZCB1bnNhZmUgcm9vdCBub2RlcyAqL1xuICAgICAgaWYgKGRpcnR5Lm5vZGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IHRhZ05hbWUgPSB0cmFuc2Zvcm1DYXNlRnVuYyhkaXJ0eS5ub2RlTmFtZSk7XG4gICAgICAgIGlmICghQUxMT1dFRF9UQUdTW3RhZ05hbWVdIHx8IEZPUkJJRF9UQUdTW3RhZ05hbWVdKSB7XG4gICAgICAgICAgdGhyb3cgdHlwZUVycm9yQ3JlYXRlKCdyb290IG5vZGUgaXMgZm9yYmlkZGVuIGFuZCBjYW5ub3QgYmUgc2FuaXRpemVkIGluLXBsYWNlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRpcnR5IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgLyogSWYgZGlydHkgaXMgYSBET00gZWxlbWVudCwgYXBwZW5kIHRvIGFuIGVtcHR5IGRvY3VtZW50IHRvIGF2b2lkXG4gICAgICAgICBlbGVtZW50cyBiZWluZyBzdHJpcHBlZCBieSB0aGUgcGFyc2VyICovXG4gICAgICBib2R5ID0gX2luaXREb2N1bWVudCgnPCEtLS0tPicpO1xuICAgICAgaW1wb3J0ZWROb2RlID0gYm9keS5vd25lckRvY3VtZW50LmltcG9ydE5vZGUoZGlydHksIHRydWUpO1xuICAgICAgaWYgKGltcG9ydGVkTm9kZS5ub2RlVHlwZSA9PT0gTk9ERV9UWVBFLmVsZW1lbnQgJiYgaW1wb3J0ZWROb2RlLm5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICAgICAgLyogTm9kZSBpcyBhbHJlYWR5IGEgYm9keSwgdXNlIGFzIGlzICovXG4gICAgICAgIGJvZHkgPSBpbXBvcnRlZE5vZGU7XG4gICAgICB9IGVsc2UgaWYgKGltcG9ydGVkTm9kZS5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgICAgIGJvZHkgPSBpbXBvcnRlZE5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItZG9tLW5vZGUtYXBwZW5kXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoaW1wb3J0ZWROb2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLyogRXhpdCBkaXJlY3RseSBpZiB3ZSBoYXZlIG5vdGhpbmcgdG8gZG8gKi9cbiAgICAgIGlmICghUkVUVVJOX0RPTSAmJiAhU0FGRV9GT1JfVEVNUExBVEVTICYmICFXSE9MRV9ET0NVTUVOVCAmJlxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWluY2x1ZGVzXG4gICAgICBkaXJ0eS5pbmRleE9mKCc8JykgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiB0cnVzdGVkVHlwZXNQb2xpY3kgJiYgUkVUVVJOX1RSVVNURURfVFlQRSA/IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKGRpcnR5KSA6IGRpcnR5O1xuICAgICAgfVxuXG4gICAgICAvKiBJbml0aWFsaXplIHRoZSBkb2N1bWVudCB0byB3b3JrIG9uICovXG4gICAgICBib2R5ID0gX2luaXREb2N1bWVudChkaXJ0eSk7XG5cbiAgICAgIC8qIENoZWNrIHdlIGhhdmUgYSBET00gbm9kZSBmcm9tIHRoZSBkYXRhICovXG4gICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgcmV0dXJuIFJFVFVSTl9ET00gPyBudWxsIDogUkVUVVJOX1RSVVNURURfVFlQRSA/IGVtcHR5SFRNTCA6ICcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIFJlbW92ZSBmaXJzdCBlbGVtZW50IG5vZGUgKG91cnMpIGlmIEZPUkNFX0JPRFkgaXMgc2V0ICovXG4gICAgaWYgKGJvZHkgJiYgRk9SQ0VfQk9EWSkge1xuICAgICAgX2ZvcmNlUmVtb3ZlKGJvZHkuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgLyogR2V0IG5vZGUgaXRlcmF0b3IgKi9cbiAgICBjb25zdCBub2RlSXRlcmF0b3IgPSBfY3JlYXRlTm9kZUl0ZXJhdG9yKElOX1BMQUNFID8gZGlydHkgOiBib2R5KTtcblxuICAgIC8qIE5vdyBzdGFydCBpdGVyYXRpbmcgb3ZlciB0aGUgY3JlYXRlZCBkb2N1bWVudCAqL1xuICAgIHdoaWxlIChjdXJyZW50Tm9kZSA9IG5vZGVJdGVyYXRvci5uZXh0Tm9kZSgpKSB7XG4gICAgICAvKiBTYW5pdGl6ZSB0YWdzIGFuZCBlbGVtZW50cyAqL1xuICAgICAgaWYgKF9zYW5pdGl6ZUVsZW1lbnRzKGN1cnJlbnROb2RlKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLyogU2hhZG93IERPTSBkZXRlY3RlZCwgc2FuaXRpemUgaXQgKi9cbiAgICAgIGlmIChjdXJyZW50Tm9kZS5jb250ZW50IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xuICAgICAgICBfc2FuaXRpemVTaGFkb3dET00oY3VycmVudE5vZGUuY29udGVudCk7XG4gICAgICB9XG5cbiAgICAgIC8qIENoZWNrIGF0dHJpYnV0ZXMsIHNhbml0aXplIGlmIG5lY2Vzc2FyeSAqL1xuICAgICAgX3Nhbml0aXplQXR0cmlidXRlcyhjdXJyZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgLyogSWYgd2Ugc2FuaXRpemVkIGBkaXJ0eWAgaW4tcGxhY2UsIHJldHVybiBpdC4gKi9cbiAgICBpZiAoSU5fUExBQ0UpIHtcbiAgICAgIHJldHVybiBkaXJ0eTtcbiAgICB9XG5cbiAgICAvKiBSZXR1cm4gc2FuaXRpemVkIHN0cmluZyBvciBET00gKi9cbiAgICBpZiAoUkVUVVJOX0RPTSkge1xuICAgICAgaWYgKFJFVFVSTl9ET01fRlJBR01FTlQpIHtcbiAgICAgICAgcmV0dXJuTm9kZSA9IGNyZWF0ZURvY3VtZW50RnJhZ21lbnQuY2FsbChib2R5Lm93bmVyRG9jdW1lbnQpO1xuICAgICAgICB3aGlsZSAoYm9keS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWRvbS1ub2RlLWFwcGVuZFxuICAgICAgICAgIHJldHVybk5vZGUuYXBwZW5kQ2hpbGQoYm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuTm9kZSA9IGJvZHk7XG4gICAgICB9XG4gICAgICBpZiAoQUxMT1dFRF9BVFRSLnNoYWRvd3Jvb3QgfHwgQUxMT1dFRF9BVFRSLnNoYWRvd3Jvb3Rtb2RlKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgQWRvcHROb2RlKCkgaXMgbm90IHVzZWQgYmVjYXVzZSBpbnRlcm5hbCBzdGF0ZSBpcyBub3QgcmVzZXRcbiAgICAgICAgICAoZS5nLiB0aGUgcGFzdCBuYW1lcyBtYXAgb2YgYSBIVE1MRm9ybUVsZW1lbnQpLCB0aGlzIGlzIHNhZmVcbiAgICAgICAgICBpbiB0aGVvcnkgYnV0IHdlIHdvdWxkIHJhdGhlciBub3QgcmlzayBhbm90aGVyIGF0dGFjayB2ZWN0b3IuXG4gICAgICAgICAgVGhlIHN0YXRlIHRoYXQgaXMgY2xvbmVkIGJ5IGltcG9ydE5vZGUoKSBpcyBleHBsaWNpdGx5IGRlZmluZWRcbiAgICAgICAgICBieSB0aGUgc3BlY3MuXG4gICAgICAgICovXG4gICAgICAgIHJldHVybk5vZGUgPSBpbXBvcnROb2RlLmNhbGwob3JpZ2luYWxEb2N1bWVudCwgcmV0dXJuTm9kZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0dXJuTm9kZTtcbiAgICB9XG4gICAgbGV0IHNlcmlhbGl6ZWRIVE1MID0gV0hPTEVfRE9DVU1FTlQgPyBib2R5Lm91dGVySFRNTCA6IGJvZHkuaW5uZXJIVE1MO1xuXG4gICAgLyogU2VyaWFsaXplIGRvY3R5cGUgaWYgYWxsb3dlZCAqL1xuICAgIGlmIChXSE9MRV9ET0NVTUVOVCAmJiBBTExPV0VEX1RBR1NbJyFkb2N0eXBlJ10gJiYgYm9keS5vd25lckRvY3VtZW50ICYmIGJvZHkub3duZXJEb2N1bWVudC5kb2N0eXBlICYmIGJvZHkub3duZXJEb2N1bWVudC5kb2N0eXBlLm5hbWUgJiYgcmVnRXhwVGVzdChET0NUWVBFX05BTUUsIGJvZHkub3duZXJEb2N1bWVudC5kb2N0eXBlLm5hbWUpKSB7XG4gICAgICBzZXJpYWxpemVkSFRNTCA9ICc8IURPQ1RZUEUgJyArIGJvZHkub3duZXJEb2N1bWVudC5kb2N0eXBlLm5hbWUgKyAnPlxcbicgKyBzZXJpYWxpemVkSFRNTDtcbiAgICB9XG5cbiAgICAvKiBTYW5pdGl6ZSBmaW5hbCBzdHJpbmcgdGVtcGxhdGUtc2FmZSAqL1xuICAgIGlmIChTQUZFX0ZPUl9URU1QTEFURVMpIHtcbiAgICAgIGFycmF5Rm9yRWFjaChbTVVTVEFDSEVfRVhQUiwgRVJCX0VYUFIsIFRNUExJVF9FWFBSXSwgZXhwciA9PiB7XG4gICAgICAgIHNlcmlhbGl6ZWRIVE1MID0gc3RyaW5nUmVwbGFjZShzZXJpYWxpemVkSFRNTCwgZXhwciwgJyAnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1c3RlZFR5cGVzUG9saWN5ICYmIFJFVFVSTl9UUlVTVEVEX1RZUEUgPyB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlSFRNTChzZXJpYWxpemVkSFRNTCkgOiBzZXJpYWxpemVkSFRNTDtcbiAgfTtcblxuICAvKipcbiAgICogUHVibGljIG1ldGhvZCB0byBzZXQgdGhlIGNvbmZpZ3VyYXRpb24gb25jZVxuICAgKiBzZXRDb25maWdcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGNmZyBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgKi9cbiAgRE9NUHVyaWZ5LnNldENvbmZpZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgY2ZnID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICBfcGFyc2VDb25maWcoY2ZnKTtcbiAgICBTRVRfQ09ORklHID0gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgdGhlIGNvbmZpZ3VyYXRpb25cbiAgICogY2xlYXJDb25maWdcbiAgICpcbiAgICovXG4gIERPTVB1cmlmeS5jbGVhckNvbmZpZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBDT05GSUcgPSBudWxsO1xuICAgIFNFVF9DT05GSUcgPSBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogUHVibGljIG1ldGhvZCB0byBjaGVjayBpZiBhbiBhdHRyaWJ1dGUgdmFsdWUgaXMgdmFsaWQuXG4gICAqIFVzZXMgbGFzdCBzZXQgY29uZmlnLCBpZiBhbnkuIE90aGVyd2lzZSwgdXNlcyBjb25maWcgZGVmYXVsdHMuXG4gICAqIGlzVmFsaWRBdHRyaWJ1dGVcbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSB0YWcgVGFnIG5hbWUgb2YgY29udGFpbmluZyBlbGVtZW50LlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGF0dHIgQXR0cmlidXRlIG5hbWUuXG4gICAqIEBwYXJhbSAge1N0cmluZ30gdmFsdWUgQXR0cmlidXRlIHZhbHVlLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZC4gT3RoZXJ3aXNlLCByZXR1cm5zIGZhbHNlLlxuICAgKi9cbiAgRE9NUHVyaWZ5LmlzVmFsaWRBdHRyaWJ1dGUgPSBmdW5jdGlvbiAodGFnLCBhdHRyLCB2YWx1ZSkge1xuICAgIC8qIEluaXRpYWxpemUgc2hhcmVkIGNvbmZpZyB2YXJzIGlmIG5lY2Vzc2FyeS4gKi9cbiAgICBpZiAoIUNPTkZJRykge1xuICAgICAgX3BhcnNlQ29uZmlnKHt9KTtcbiAgICB9XG4gICAgY29uc3QgbGNUYWcgPSB0cmFuc2Zvcm1DYXNlRnVuYyh0YWcpO1xuICAgIGNvbnN0IGxjTmFtZSA9IHRyYW5zZm9ybUNhc2VGdW5jKGF0dHIpO1xuICAgIHJldHVybiBfaXNWYWxpZEF0dHJpYnV0ZShsY1RhZywgbGNOYW1lLCB2YWx1ZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZEhvb2tcbiAgICogUHVibGljIG1ldGhvZCB0byBhZGQgRE9NUHVyaWZ5IGhvb2tzXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlbnRyeVBvaW50IGVudHJ5IHBvaW50IGZvciB0aGUgaG9vayB0byBhZGRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaG9va0Z1bmN0aW9uIGZ1bmN0aW9uIHRvIGV4ZWN1dGVcbiAgICovXG4gIERPTVB1cmlmeS5hZGRIb29rID0gZnVuY3Rpb24gKGVudHJ5UG9pbnQsIGhvb2tGdW5jdGlvbikge1xuICAgIGlmICh0eXBlb2YgaG9va0Z1bmN0aW9uICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGhvb2tzW2VudHJ5UG9pbnRdID0gaG9va3NbZW50cnlQb2ludF0gfHwgW107XG4gICAgYXJyYXlQdXNoKGhvb2tzW2VudHJ5UG9pbnRdLCBob29rRnVuY3Rpb24pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVIb29rXG4gICAqIFB1YmxpYyBtZXRob2QgdG8gcmVtb3ZlIGEgRE9NUHVyaWZ5IGhvb2sgYXQgYSBnaXZlbiBlbnRyeVBvaW50XG4gICAqIChwb3BzIGl0IGZyb20gdGhlIHN0YWNrIG9mIGhvb2tzIGlmIG1vcmUgYXJlIHByZXNlbnQpXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlbnRyeVBvaW50IGVudHJ5IHBvaW50IGZvciB0aGUgaG9vayB0byByZW1vdmVcbiAgICogQHJldHVybiB7RnVuY3Rpb259IHJlbW92ZWQocG9wcGVkKSBob29rXG4gICAqL1xuICBET01QdXJpZnkucmVtb3ZlSG9vayA9IGZ1bmN0aW9uIChlbnRyeVBvaW50KSB7XG4gICAgaWYgKGhvb2tzW2VudHJ5UG9pbnRdKSB7XG4gICAgICByZXR1cm4gYXJyYXlQb3AoaG9va3NbZW50cnlQb2ludF0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlSG9va3NcbiAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgYWxsIERPTVB1cmlmeSBob29rcyBhdCBhIGdpdmVuIGVudHJ5UG9pbnRcbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBlbnRyeVBvaW50IGVudHJ5IHBvaW50IGZvciB0aGUgaG9va3MgdG8gcmVtb3ZlXG4gICAqL1xuICBET01QdXJpZnkucmVtb3ZlSG9va3MgPSBmdW5jdGlvbiAoZW50cnlQb2ludCkge1xuICAgIGlmIChob29rc1tlbnRyeVBvaW50XSkge1xuICAgICAgaG9va3NbZW50cnlQb2ludF0gPSBbXTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZUFsbEhvb2tzXG4gICAqIFB1YmxpYyBtZXRob2QgdG8gcmVtb3ZlIGFsbCBET01QdXJpZnkgaG9va3NcbiAgICovXG4gIERPTVB1cmlmeS5yZW1vdmVBbGxIb29rcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBob29rcyA9IHt9O1xuICB9O1xuICByZXR1cm4gRE9NUHVyaWZ5O1xufVxudmFyIHB1cmlmeSA9IGNyZWF0ZURPTVB1cmlmeSgpO1xuXG5leHBvcnQgeyBwdXJpZnkgYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHVyaWZ5LmVzLm1qcy5tYXBcbiIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgcmVzdWx0ID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZyA/IG5hdGl2ZU1pbihyZXN1bHQsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHJlVHJpbSwgJycpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcbiJdLCJuYW1lcyI6WyJmcmVlemUiLCJzZWFsIiwiYXBwbHkiLCJjb25zdHJ1Y3QiLCJnZXRHbG9iYWwiLCJfY3JlYXRlVHJ1c3RlZFR5cGVzUG9saWN5IiwiaHRtbCIsIndpbmRvdyIsInJvb3QiLCJNVVNUQUNIRV9FWFBSIiwiRVJCX0VYUFIiLCJUTVBMSVRfRVhQUiIsIkRBVEFfQVRUUiIsIkFSSUFfQVRUUiIsIklTX1NDUklQVF9PUl9EQVRBIiwiQVRUUl9XSElURVNQQUNFIiwiQ1VTVE9NX0VMRU1FTlQiLCJpc1JlZ2V4T3JGdW5jdGlvbiIsIl9wYXJzZUNvbmZpZyIsIl9jaGVja1ZhbGlkTmFtZXNwYWNlIiwiX2ZvcmNlUmVtb3ZlIiwiX3JlbW92ZUF0dHJpYnV0ZSIsIl9pbml0RG9jdW1lbnQiLCJfY3JlYXRlTm9kZUl0ZXJhdG9yIiwiX2lzQ2xvYmJlcmVkIiwiX2lzTm9kZSIsIl9leGVjdXRlSG9vayIsIl9zYW5pdGl6ZUVsZW1lbnRzIiwiX2lzVmFsaWRBdHRyaWJ1dGUiLCJfaXNCYXNpY0N1c3RvbUVsZW1lbnQiLCJfc2FuaXRpemVBdHRyaWJ1dGVzIiwiX3Nhbml0aXplU2hhZG93RE9NIiwiZ2xvYmFsIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBLE1BQU07QUFBQSxFQUNKO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNGLElBQUk7QUFDSixJQUFJO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0YsSUFBSTtBQUNKLElBQUk7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUNGLElBQUksT0FBTyxZQUFZLGVBQWU7QUFDdEMsSUFBSSxDQUFDLFFBQVE7QUFDWCxXQUFTLFNBQVNBLFFBQU8sR0FBRztBQUMxQixXQUFPO0FBQUEsRUFDWDtBQUNBO0FBQ0EsSUFBSSxDQUFDLE1BQU07QUFDVCxTQUFPLFNBQVNDLE1BQUssR0FBRztBQUN0QixXQUFPO0FBQUEsRUFDWDtBQUNBO0FBQ0EsSUFBSSxDQUFDLE9BQU87QUFDVixVQUFRLFNBQVNDLE9BQU0sS0FBSyxXQUFXLE1BQU07QUFDM0MsV0FBTyxJQUFJLE1BQU0sV0FBVyxJQUFJO0FBQUEsRUFDcEM7QUFDQTtBQUNBLElBQUksQ0FBQyxXQUFXO0FBQ2QsY0FBWSxTQUFTQyxXQUFVLE1BQU0sTUFBTTtBQUN6QyxXQUFPLElBQUksS0FBSyxHQUFHLElBQUk7QUFBQSxFQUMzQjtBQUNBO0FBQ0EsTUFBTSxlQUFlLFFBQVEsTUFBTSxVQUFVLE9BQU87QUFDcEQsTUFBTSxXQUFXLFFBQVEsTUFBTSxVQUFVLEdBQUc7QUFDNUMsTUFBTSxZQUFZLFFBQVEsTUFBTSxVQUFVLElBQUk7QUFDOUMsTUFBTSxvQkFBb0IsUUFBUSxPQUFPLFVBQVUsV0FBVztBQUM5RCxNQUFNLGlCQUFpQixRQUFRLE9BQU8sVUFBVSxRQUFRO0FBQ3hELE1BQU0sY0FBYyxRQUFRLE9BQU8sVUFBVSxLQUFL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
