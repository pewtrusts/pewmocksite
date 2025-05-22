import { r as reactExports, R as React } from "./index-04976b1c.js";
import { r as reactDomExports } from "./index-02304d6d.js";
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
var _excluded$6 = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function useStateManager(_ref3) {
  var _ref$defaultInputValu = _ref3.defaultInputValue, defaultInputValue = _ref$defaultInputValu === void 0 ? "" : _ref$defaultInputValu, _ref$defaultMenuIsOpe = _ref3.defaultMenuIsOpen, defaultMenuIsOpen = _ref$defaultMenuIsOpe === void 0 ? false : _ref$defaultMenuIsOpe, _ref$defaultValue = _ref3.defaultValue, defaultValue = _ref$defaultValue === void 0 ? null : _ref$defaultValue, propsInputValue = _ref3.inputValue, propsMenuIsOpen = _ref3.menuIsOpen, propsOnChange = _ref3.onChange, propsOnInputChange = _ref3.onInputChange, propsOnMenuClose = _ref3.onMenuClose, propsOnMenuOpen = _ref3.onMenuOpen, propsValue = _ref3.value, restSelectProps = _objectWithoutProperties(_ref3, _excluded$6);
  var _useState = reactExports.useState(propsInputValue !== void 0 ? propsInputValue : defaultInputValue), _useState2 = _slicedToArray(_useState, 2), stateInputValue = _useState2[0], setStateInputValue = _useState2[1];
  var _useState3 = reactExports.useState(propsMenuIsOpen !== void 0 ? propsMenuIsOpen : defaultMenuIsOpen), _useState4 = _slicedToArray(_useState3, 2), stateMenuIsOpen = _useState4[0], setStateMenuIsOpen = _useState4[1];
  var _useState5 = reactExports.useState(propsValue !== void 0 ? propsValue : defaultValue), _useState6 = _slicedToArray(_useState5, 2), stateValue = _useState6[0], setStateValue = _useState6[1];
  var onChange2 = reactExports.useCallback(function(value2, actionMeta) {
    if (typeof propsOnChange === "function") {
      propsOnChange(value2, actionMeta);
    }
    setStateValue(value2);
  }, [propsOnChange]);
  var onInputChange = reactExports.useCallback(function(value2, actionMeta) {
    var newValue;
    if (typeof propsOnInputChange === "function") {
      newValue = propsOnInputChange(value2, actionMeta);
    }
    setStateInputValue(newValue !== void 0 ? newValue : value2);
  }, [propsOnInputChange]);
  var onMenuOpen = reactExports.useCallback(function() {
    if (typeof propsOnMenuOpen === "function") {
      propsOnMenuOpen();
    }
    setStateMenuIsOpen(true);
  }, [propsOnMenuOpen]);
  var onMenuClose = reactExports.useCallback(function() {
    if (typeof propsOnMenuClose === "function") {
      propsOnMenuClose();
    }
    setStateMenuIsOpen(false);
  }, [propsOnMenuClose]);
  var inputValue = propsInputValue !== void 0 ? propsInputValue : stateInputValue;
  var menuIsOpen = propsMenuIsOpen !== void 0 ? propsMenuIsOpen : stateMenuIsOpen;
  var value = propsValue !== void 0 ? propsValue : stateValue;
  return _objectSpread2(_objectSpread2({}, restSelectProps), {}, {
    inputValue,
    menuIsOpen,
    onChange: onChange2,
    onInputChange,
    onMenuClose,
    onMenuOpen,
    value
  });
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var isDevelopment$2 = true;
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
  return void 0;
}
function createStyleElement(options2) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options2.key);
  if (options2.nonce !== void 0) {
    tag.setAttribute("nonce", options2.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet = /* @__PURE__ */ function() {
  function StyleSheet2(options2) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options2.speedy === void 0 ? !isDevelopment$2 : options2.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options2.nonce;
    this.key = options2.key;
    this.container = options2.container;
    this.prepend = options2.prepend;
    this.insertionPoint = options2.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    {
      var isImportRule3 = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;
      if (isImportRule3 && this._alreadyInsertedOrderInsensitiveRule) {
        console.error("You're attempting to insert the following rule:\n" + rule + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.");
      }
      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule3;
    }
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (!/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(rule)) {
          console.error('There was a problem inserting the following rule: "' + rule + '"', e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      var _tag$parentNode;
      return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
    {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };
  return StyleSheet2;
}();
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
  return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index2) {
  return value.charCodeAt(index2) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
}
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index2, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index2, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index2) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index2, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index2) {
  while (!token(peek()))
    next();
  return slice(index2, position);
}
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index2 = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index2++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (ampersand == -1)
              characters2 = replace(characters2, /\f/g, "");
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root, parent, index2, offset, rules, points, type, props = [], children = [], length2), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index2 = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index2++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index2, offset, rules, points, type, props, children, length2) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i = 0, j = 0, k = 0; i < index2; ++i)
    for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
      if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x])))
        props[k++] = z;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2);
}
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root, parent, length2) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}
function serialize(children, callback) {
  var output = "";
  var length2 = sizeof(children);
  for (var i = 0; i < length2; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
function stringify(element, index2, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length)
        break;
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index2, children, callback) {
    var output = "";
    for (var i = 0; i < length2; i++)
      output += collection[i](element, index2, children, callback) || "";
    return output;
  };
}
var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index2) {
  var previous = 0;
  var character2 = 0;
  while (true) {
    previous = character2;
    character2 = peek();
    if (previous === 38 && character2 === 12) {
      points[index2] = 1;
    }
    if (token(character2)) {
      break;
    }
    next();
  }
  return slice(begin, position);
};
var toRules = function toRules2(parsed, points) {
  var index2 = -1;
  var character2 = 44;
  do {
    switch (token(character2)) {
      case 0:
        if (character2 === 38 && peek() === 12) {
          points[index2] = 1;
        }
        parsed[index2] += identifierWithPointTracking(position - 1, points, index2);
        break;
      case 2:
        parsed[index2] += delimit(character2);
        break;
      case 4:
        if (character2 === 44) {
          parsed[++index2] = peek() === 58 ? "&\f" : "";
          points[index2] = parsed[index2].length;
          break;
        }
      default:
        parsed[index2] += from(character2);
    }
  } while (character2 = next());
  return parsed;
};
var getRules = function getRules2(value, points) {
  return dealloc(toRules(alloc(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }
  var value = element.value, parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== "rule") {
    parent = parent.parent;
    if (!parent)
      return;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === "decl") {
    var value = element.value;
    if (
      // charcode for l
      value.charCodeAt(0) === 108 && // charcode for b
      value.charCodeAt(2) === 98
    ) {
      element["return"] = "";
      element.value = "";
    }
  }
};
var ignoreFlag = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason";
var isIgnoringComment = function isIgnoringComment2(element) {
  return element.type === "comm" && element.children.indexOf(ignoreFlag) > -1;
};
var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm2(cache) {
  return function(element, index2, children) {
    if (element.type !== "rule" || cache.compat)
      return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
    if (unsafePseudoClasses) {
      var isNested = !!element.parent;
      var commentContainer = isNested ? element.parent.children : (
        // global rule at the root level
        children
      );
      for (var i = commentContainer.length - 1; i >= 0; i--) {
        var node2 = commentContainer[i];
        if (node2.line < element.line) {
          break;
        }
        if (node2.column < element.column) {
          if (isIgnoringComment(node2)) {
            return;
          }
          break;
        }
      }
      unsafePseudoClasses.forEach(function(unsafePseudoClass) {
        console.error('The pseudo class "' + unsafePseudoClass + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + unsafePseudoClass.split("-child")[0] + '-of-type".');
      });
    }
  };
};
var isImportRule = function isImportRule2(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};
var isPrependedWithRegularRules = function isPrependedWithRegularRules2(index2, children) {
  for (var i = index2 - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }
  return false;
};
var nullifyElement = function nullifyElement2(element) {
  element.type = "";
  element.value = "";
  element["return"] = "";
  element.children = "";
  element.props = "";
};
var incorrectImportAlarm = function incorrectImportAlarm2(element, index2, children) {
  if (!isImportRule(element)) {
    return;
  }
  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index2, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};
function prefix(value, length2) {
  switch (hash(value, length2)) {
    case 5103:
      return WEBKIT + "print-" + value + value;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6)
        switch (charat(value, length2 + 1)) {
          case 109:
            if (charat(value, length2 + 4) !== 45)
              break;
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          case 115:
            return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
        }
      break;
    case 4949:
      if (charat(value, length2 + 1) !== 115)
        break;
    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
        case 107:
          return replace(value, ":", ":" + WEBKIT) + value;
        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
      }
      break;
    case 5936:
      switch (charat(value, length2 + 11)) {
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}
var prefixer = function prefixer2(element, index2, children, callback) {
  if (element.length > -1) {
    if (!element["return"])
      switch (element.type) {
        case DECLARATION:
          element["return"] = prefix(element.value, element.length);
          break;
        case KEYFRAMES:
          return serialize([copy(element, {
            value: replace(element.value, "@", "@" + WEBKIT)
          })], callback);
        case RULESET:
          if (element.length)
            return combine(element.props, function(value) {
              switch (match(value, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return serialize([copy(element, {
                    props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")]
                  })], callback);
                case "::placeholder":
                  return serialize([copy(element, {
                    props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
                  }), copy(element, {
                    props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")]
                  }), copy(element, {
                    props: [replace(value, /:(plac\w+)/, MS + "input-$1")]
                  })], callback);
              }
              return "";
            });
      }
  }
};
var defaultStylisPlugins = [prefixer];
var createCache = function createCache2(options2) {
  var key = options2.key;
  if (!key) {
    throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\nIf multiple caches share the same key they might \"fight\" for each other's style elements.");
  }
  if (key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node2) {
      var dataEmotionAttribute = node2.getAttribute("data-emotion");
      if (dataEmotionAttribute.indexOf(" ") === -1) {
        return;
      }
      document.head.appendChild(node2);
      node2.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options2.stylisPlugins || defaultStylisPlugins;
  {
    if (/[^a-z-]/.test(key)) {
      throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + key + '" was passed');
    }
  }
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  {
    container = options2.container || document.head;
    Array.prototype.forEach.call(
      // this means we will ignore elements which don't have a space in them which
      // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
      document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
      function(node2) {
        var attrib = node2.getAttribute("data-emotion").split(" ");
        for (var i = 1; i < attrib.length; i++) {
          inserted[attrib[i]] = true;
        }
        nodesToHydrate.push(node2);
      }
    );
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  {
    omnipresentPlugins.push(createUnsafeSelectorsAlarm({
      get compat() {
        return cache.compat;
      }
    }), incorrectImportAlarm);
  }
  {
    var currentSheet;
    var finalizingPlugins = [stringify, function(element) {
      if (!element.root) {
        if (element["return"]) {
          currentSheet.insert(element["return"]);
        } else if (element.value && element.type !== COMMENT) {
          currentSheet.insert(element.value + "{}");
        }
      }
    }];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles2) {
      return serialize(compile(styles2), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      if (serialized.map !== void 0) {
        currentSheet = {
          insert: function insert2(rule) {
            sheet.insert(rule + serialized.map);
          }
        };
      }
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }
  var cache = {
    key,
    sheet: new StyleSheet({
      key,
      container,
      nonce: options2.nonce,
      speedy: options2.speedy,
      prepend: options2.prepend,
      insertionPoint: options2.insertionPoint
    }),
    nonce: options2.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};
var reactIs$1 = { exports: {} };
var reactIs_development = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
{
  (function() {
    var hasSymbol = typeof Symbol === "function" && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
    function isValidElementType(type) {
      return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }
    function typeOf(object) {
      if (typeof object === "object" && object !== null) {
        var $$typeof = object.$$typeof;
        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;
            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;
              default:
                var $$typeofType = type && type.$$typeof;
                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;
                  default:
                    return $$typeof;
                }
            }
          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }
      return void 0;
    }
    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element2 = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false;
    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true;
          console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }
    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }
    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }
    function isElement2(object) {
      return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }
    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }
    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }
    reactIs_development.AsyncMode = AsyncMode;
    reactIs_development.ConcurrentMode = ConcurrentMode;
    reactIs_development.ContextConsumer = ContextConsumer;
    reactIs_development.ContextProvider = ContextProvider;
    reactIs_development.Element = Element2;
    reactIs_development.ForwardRef = ForwardRef;
    reactIs_development.Fragment = Fragment;
    reactIs_development.Lazy = Lazy;
    reactIs_development.Memo = Memo;
    reactIs_development.Portal = Portal;
    reactIs_development.Profiler = Profiler;
    reactIs_development.StrictMode = StrictMode;
    reactIs_development.Suspense = Suspense;
    reactIs_development.isAsyncMode = isAsyncMode;
    reactIs_development.isConcurrentMode = isConcurrentMode;
    reactIs_development.isContextConsumer = isContextConsumer;
    reactIs_development.isContextProvider = isContextProvider;
    reactIs_development.isElement = isElement2;
    reactIs_development.isForwardRef = isForwardRef;
    reactIs_development.isFragment = isFragment;
    reactIs_development.isLazy = isLazy;
    reactIs_development.isMemo = isMemo;
    reactIs_development.isPortal = isPortal;
    reactIs_development.isProfiler = isProfiler;
    reactIs_development.isStrictMode = isStrictMode;
    reactIs_development.isSuspense = isSuspense;
    reactIs_development.isValidElementType = isValidElementType;
    reactIs_development.typeOf = typeOf;
  })();
}
{
  reactIs$1.exports = reactIs_development;
}
var reactIsExports = reactIs$1.exports;
var reactIs = reactIsExports;
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
var isBrowser$1 = true;
function getRegisteredStyles(registered, registeredStyles, classNames2) {
  var rawClassName = "";
  classNames2.split(" ").forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ";");
    } else if (className) {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles2(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  if (
    // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser$1 === false) && cache.registered[className] === void 0
  ) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;
  if (cache.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
      current = current.next;
    } while (current !== void 0);
  }
};
function murmur2(str) {
  var h = 0;
  var k, i = 0, len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
    k ^= /* k >>> r: */
    k >>> 24;
    h = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 255;
      h = /* Math.imul(h, m): */
      (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  h ^= h >>> 13;
  h = /* Math.imul(h, m): */
  (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function memoize(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var isDevelopment$1 = true;
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = /* @__PURE__ */ memoize(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function(match2, p1, p2) {
          cursor = {
            name: p1,
            styles: p2,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
{
  var contentValuePattern = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  var contentValues = ["normal", "none", "initial", "inherit", "unset"];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};
  processStyleValue = function processStyleValue3(key, value) {
    if (key === "content") {
      if (typeof value !== "string" || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }
    var processed = oldProcessStyleValue(key, value);
    if (processed !== "" && !isCustomProperty(key) && key.indexOf("-") !== -1 && hyphenatedCache[key] === void 0) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, "ms-").replace(hyphenPattern, function(str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }
    return processed;
  };
}
var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  var componentSelector = interpolation;
  if (componentSelector.__emotion_styles !== void 0) {
    if (String(componentSelector) === "NO_COMPONENT_SELECTOR") {
      throw new Error(noComponentSelectorMessage);
    }
    return componentSelector;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      var keyframes3 = interpolation;
      if (keyframes3.anim === 1) {
        cursor = {
          name: keyframes3.name,
          styles: keyframes3.styles,
          next: cursor
        };
        return keyframes3.name;
      }
      var serializedStyles = interpolation;
      if (serializedStyles.styles !== void 0) {
        var next2 = serializedStyles.next;
        if (next2 !== void 0) {
          while (next2 !== void 0) {
            cursor = {
              name: next2.name,
              styles: next2.styles,
              next: cursor
            };
            next2 = next2.next;
          }
        }
        var styles2 = serializedStyles.styles + ";";
        if (serializedStyles.map !== void 0) {
          styles2 += serializedStyles.map;
        }
        return styles2;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      } else {
        console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      }
      break;
    }
    case "string":
      {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function(_match, _p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, "") + "`");
          return "${" + fakeVarName + "}";
        });
        if (matched.length) {
          console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, ["`" + replaced + "`"]).join("\n") + "\n\nYou should wrap it with `css` like this:\n\ncss`" + replaced + "`");
        }
      }
      break;
  }
  var asString = interpolation;
  if (registered == null) {
    return asString;
  }
  var cached = registered[asString];
  return cached !== void 0 ? cached : asString;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var key in obj) {
      var value = obj[key];
      if (typeof value !== "object") {
        var asString = value;
        if (registered != null && registered[asString] !== void 0) {
          string += key + "{" + registered[asString] + "}";
        } else if (isProcessableValue(asString)) {
          string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
        }
      } else {
        if (key === "NO_COMPONENT_SELECTOR" && isDevelopment$1) {
          throw new Error(noComponentSelectorMessage);
        }
        if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (key) {
            case "animation":
            case "animationName": {
              string += processStyleName(key) + ":" + interpolated + ";";
              break;
            }
            default: {
              if (key === "undefined") {
                console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
              }
              string += key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g;
var sourceMapPattern;
{
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
}
var cursor;
function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles2 = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles2 += handleInterpolation(mergedProps, registered, strings);
  } else {
    var asTemplateStringsArr = strings;
    if (asTemplateStringsArr[0] === void 0) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }
    styles2 += asTemplateStringsArr[0];
  }
  for (var i = 1; i < args.length; i++) {
    styles2 += handleInterpolation(mergedProps, registered, args[i]);
    if (stringMode) {
      var templateStringsArr = strings;
      if (templateStringsArr[i] === void 0) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }
      styles2 += templateStringsArr[i];
    }
  }
  var sourceMap;
  {
    styles2 = styles2.replace(sourceMapPattern, function(match3) {
      sourceMap = match3;
      return "";
    });
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match2;
  while ((match2 = labelPattern.exec(styles2)) !== null) {
    identifierName += "-" + match2[1];
  }
  var name = murmur2(styles2) + identifierName;
  {
    var devStyles = {
      name,
      styles: styles2,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
    return devStyles;
  }
}
var syncFallback = function syncFallback2(create) {
  return create();
};
var useInsertionEffect = React["useInsertionEffect"] ? React["useInsertionEffect"] : false;
var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect || syncFallback;
var useInsertionEffectWithLayoutFallback = useInsertionEffect || reactExports.useLayoutEffect;
var EmotionCacheContext = /* @__PURE__ */ reactExports.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({
    key: "css"
  }) : null
);
{
  EmotionCacheContext.displayName = "EmotionCacheContext";
}
EmotionCacheContext.Provider;
var withEmotionCache = function withEmotionCache2(func) {
  return /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
    var cache = reactExports.useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};
var ThemeContext = /* @__PURE__ */ reactExports.createContext({});
{
  ThemeContext.displayName = "EmotionThemeContext";
}
var hasOwn = {}.hasOwnProperty;
var getLastPart = function getLastPart2(functionName) {
  var parts = functionName.split(".");
  return parts[parts.length - 1];
};
var getFunctionNameFromStackTraceLine = function getFunctionNameFromStackTraceLine2(line2) {
  var match2 = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(line2);
  if (match2)
    return getLastPart(match2[1]);
  match2 = /^([A-Za-z0-9$.]+)@/.exec(line2);
  if (match2)
    return getLastPart(match2[1]);
  return void 0;
};
var internalReactFunctionNames = /* @__PURE__ */ new Set(["renderWithHooks", "processChild", "finishClassComponent", "renderToString"]);
var sanitizeIdentifier = function sanitizeIdentifier2(identifier2) {
  return identifier2.replace(/\$/g, "-");
};
var getLabelFromStackTrace = function getLabelFromStackTrace2(stackTrace) {
  if (!stackTrace)
    return void 0;
  var lines = stackTrace.split("\n");
  for (var i = 0; i < lines.length; i++) {
    var functionName = getFunctionNameFromStackTraceLine(lines[i]);
    if (!functionName)
      continue;
    if (internalReactFunctionNames.has(functionName))
      break;
    if (/^[A-Z]/.test(functionName))
      return sanitizeIdentifier(functionName);
  }
  return void 0;
};
var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
var labelPropName = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__";
var createEmotionProps = function createEmotionProps2(type, props) {
  if (typeof props.css === "string" && // check if there is a css declaration
  props.css.indexOf(":") !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + props.css + "`");
  }
  var newProps = {};
  for (var key in props) {
    if (hasOwn.call(props, key)) {
      newProps[key] = props[key];
    }
  }
  newProps[typePropName] = type;
  if (typeof globalThis !== "undefined" && !!globalThis.EMOTION_RUNTIME_AUTO_LABEL && !!props.css && (typeof props.css !== "object" || typeof props.css.name !== "string" || props.css.name.indexOf("-") === -1)) {
    var label = getLabelFromStackTrace(new Error().stack);
    if (label)
      newProps[labelPropName] = label;
  }
  return newProps;
};
var Insertion$1 = function Insertion(_ref3) {
  var cache = _ref3.cache, serialized = _ref3.serialized, isStringTag = _ref3.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  useInsertionEffectAlwaysWithSyncFallback(function() {
    return insertStyles(cache, serialized, isStringTag);
  });
  return null;
};
var Emotion = /* @__PURE__ */ withEmotionCache(
  /* <any, any> */
  function(props, cache, ref) {
    var cssProp = props.css;
    if (typeof cssProp === "string" && cache.registered[cssProp] !== void 0) {
      cssProp = cache.registered[cssProp];
    }
    var WrappedComponent = props[typePropName];
    var registeredStyles = [cssProp];
    var className = "";
    if (typeof props.className === "string") {
      className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
    } else if (props.className != null) {
      className = props.className + " ";
    }
    var serialized = serializeStyles(registeredStyles, void 0, reactExports.useContext(ThemeContext));
    if (serialized.name.indexOf("-") === -1) {
      var labelFromStack = props[labelPropName];
      if (labelFromStack) {
        serialized = serializeStyles([serialized, "label:" + labelFromStack + ";"]);
      }
    }
    className += cache.key + "-" + serialized.name;
    var newProps = {};
    for (var key in props) {
      if (hasOwn.call(props, key) && key !== "css" && key !== typePropName && key !== labelPropName) {
        newProps[key] = props[key];
      }
    }
    newProps.className = className;
    if (ref) {
      newProps.ref = ref;
    }
    return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(Insertion$1, {
      cache,
      serialized,
      isStringTag: typeof WrappedComponent === "string"
    }), /* @__PURE__ */ reactExports.createElement(WrappedComponent, newProps));
  }
);
{
  Emotion.displayName = "EmotionCssPropInternal";
}
var Emotion$1 = Emotion;
var isDevelopment = true;
var pkg = {
  name: "@emotion/react",
  version: "11.13.3",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  exports: {
    ".": {
      types: {
        "import": "./dist/emotion-react.cjs.mjs",
        "default": "./dist/emotion-react.cjs.js"
      },
      development: {
        "edge-light": {
          module: "./dist/emotion-react.development.edge-light.esm.js",
          "import": "./dist/emotion-react.development.edge-light.cjs.mjs",
          "default": "./dist/emotion-react.development.edge-light.cjs.js"
        },
        worker: {
          module: "./dist/emotion-react.development.edge-light.esm.js",
          "import": "./dist/emotion-react.development.edge-light.cjs.mjs",
          "default": "./dist/emotion-react.development.edge-light.cjs.js"
        },
        workerd: {
          module: "./dist/emotion-react.development.edge-light.esm.js",
          "import": "./dist/emotion-react.development.edge-light.cjs.mjs",
          "default": "./dist/emotion-react.development.edge-light.cjs.js"
        },
        browser: {
          module: "./dist/emotion-react.browser.development.esm.js",
          "import": "./dist/emotion-react.browser.development.cjs.mjs",
          "default": "./dist/emotion-react.browser.development.cjs.js"
        },
        module: "./dist/emotion-react.development.esm.js",
        "import": "./dist/emotion-react.development.cjs.mjs",
        "default": "./dist/emotion-react.development.cjs.js"
      },
      "edge-light": {
        module: "./dist/emotion-react.edge-light.esm.js",
        "import": "./dist/emotion-react.edge-light.cjs.mjs",
        "default": "./dist/emotion-react.edge-light.cjs.js"
      },
      worker: {
        module: "./dist/emotion-react.edge-light.esm.js",
        "import": "./dist/emotion-react.edge-light.cjs.mjs",
        "default": "./dist/emotion-react.edge-light.cjs.js"
      },
      workerd: {
        module: "./dist/emotion-react.edge-light.esm.js",
        "import": "./dist/emotion-react.edge-light.cjs.mjs",
        "default": "./dist/emotion-react.edge-light.cjs.js"
      },
      browser: {
        module: "./dist/emotion-react.browser.esm.js",
        "import": "./dist/emotion-react.browser.cjs.mjs",
        "default": "./dist/emotion-react.browser.cjs.js"
      },
      module: "./dist/emotion-react.esm.js",
      "import": "./dist/emotion-react.cjs.mjs",
      "default": "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      types: {
        "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
        "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
      },
      development: {
        "edge-light": {
          module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.esm.js",
          "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.mjs",
          "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.js"
        },
        worker: {
          module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.esm.js",
          "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.mjs",
          "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.js"
        },
        workerd: {
          module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.esm.js",
          "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.mjs",
          "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.js"
        },
        browser: {
          module: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js",
          "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.cjs.mjs",
          "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.cjs.js"
        },
        module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.esm.js",
        "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.cjs.mjs",
        "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.cjs.js"
      },
      "edge-light": {
        module: "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.esm.js",
        "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.mjs",
        "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.js"
      },
      worker: {
        module: "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.esm.js",
        "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.mjs",
        "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.js"
      },
      workerd: {
        module: "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.esm.js",
        "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.mjs",
        "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.js"
      },
      browser: {
        module: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.cjs.mjs",
        "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.cjs.js"
      },
      module: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js",
      "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      types: {
        "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
        "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
      },
      development: {
        "edge-light": {
          module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.esm.js",
          "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.mjs",
          "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.js"
        },
        worker: {
          module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.esm.js",
          "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.mjs",
          "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.js"
        },
        workerd: {
          module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.esm.js",
          "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.mjs",
          "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.js"
        },
        browser: {
          module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.esm.js",
          "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.cjs.mjs",
          "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.cjs.js"
        },
        module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.esm.js",
        "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.cjs.mjs",
        "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.cjs.js"
      },
      "edge-light": {
        module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.esm.js",
        "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.mjs",
        "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.js"
      },
      worker: {
        module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.esm.js",
        "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.mjs",
        "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.js"
      },
      workerd: {
        module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.esm.js",
        "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.mjs",
        "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.js"
      },
      browser: {
        module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.cjs.mjs",
        "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.cjs.js"
      },
      module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js",
      "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      types: {
        "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
        "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
      },
      development: {
        "edge-light": {
          module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.esm.js",
          "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.mjs",
          "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.js"
        },
        worker: {
          module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.esm.js",
          "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.mjs",
          "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.js"
        },
        workerd: {
          module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.esm.js",
          "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.mjs",
          "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.js"
        },
        browser: {
          module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.esm.js",
          "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.cjs.mjs",
          "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.cjs.js"
        },
        module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.esm.js",
        "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.cjs.mjs",
        "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.cjs.js"
      },
      "edge-light": {
        module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.esm.js",
        "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.mjs",
        "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.js"
      },
      worker: {
        module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.esm.js",
        "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.mjs",
        "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.js"
      },
      workerd: {
        module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.esm.js",
        "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.mjs",
        "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.js"
      },
      browser: {
        module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.cjs.mjs",
        "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.cjs.js"
      },
      module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js",
      "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        "import": "./macro.d.mts",
        "default": "./macro.d.ts"
      },
      "default": "./macro.js"
    }
  },
  imports: {
    "#is-development": {
      development: "./src/conditions/true.js",
      "default": "./src/conditions/false.js"
    },
    "#is-browser": {
      "edge-light": "./src/conditions/false.js",
      workerd: "./src/conditions/false.js",
      worker: "./src/conditions/false.js",
      browser: "./src/conditions/true.js",
      "default": "./src/conditions/is-browser.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: false,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.12.0",
    "@emotion/cache": "^11.13.0",
    "@emotion/serialize": "^1.3.1",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.1.0",
    "@emotion/utils": "^1.4.0",
    "@emotion/weak-memoize": "^0.4.0",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: true
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.13.0",
    "@emotion/css-prettifier": "1.1.4",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.13.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^5.4.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            "import": "./macro.d.mts",
            "default": "./macro.d.ts"
          },
          "default": "./macro.js"
        }
      }
    }
  }
};
var jsx = function jsx2(type, props) {
  var args = arguments;
  if (props == null || !hasOwn.call(props, "css")) {
    return reactExports.createElement.apply(void 0, args);
  }
  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion$1;
  createElementArgArray[1] = createEmotionProps(type, props);
  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  }
  return reactExports.createElement.apply(null, createElementArgArray);
};
var warnedAboutCssPropForGlobal = false;
var Global = /* @__PURE__ */ withEmotionCache(function(props, cache) {
  if (!warnedAboutCssPropForGlobal && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // I don't really want to add it to the type since it shouldn't be used
  (props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }
  var styles2 = props.styles;
  var serialized = serializeStyles([styles2], void 0, reactExports.useContext(ThemeContext));
  var sheetRef = reactExports.useRef();
  useInsertionEffectWithLayoutFallback(function() {
    var key = cache.key + "-global";
    var sheet = new cache.sheet.constructor({
      key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false;
    var node2 = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }
    if (node2 !== null) {
      rehydrating = true;
      node2.setAttribute("data-emotion", key);
      sheet.hydrate([node2]);
    }
    sheetRef.current = [sheet, rehydrating];
    return function() {
      sheet.flush();
    };
  }, [cache]);
  useInsertionEffectWithLayoutFallback(function() {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }
    if (serialized.next !== void 0) {
      insertStyles(cache, serialized.next, true);
    }
    if (sheet.tags.length) {
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }
    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});
{
  Global.displayName = "EmotionGlobal";
}
function css$2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return serializeStyles(args);
}
var keyframes = function keyframes2() {
  var insertable = css$2.apply(void 0, arguments);
  var name = "animation-" + insertable.name;
  return {
    name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
var classnames = function classnames2(args) {
  var len = args.length;
  var i = 0;
  var cls = "";
  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null)
      continue;
    var toAdd = void 0;
    switch (typeof arg) {
      case "boolean":
        break;
      case "object": {
        if (Array.isArray(arg)) {
          toAdd = classnames2(arg);
        } else {
          if (arg.styles !== void 0 && arg.name !== void 0) {
            console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.");
          }
          toAdd = "";
          for (var k in arg) {
            if (arg[k] && k) {
              toAdd && (toAdd += " ");
              toAdd += k;
            }
          }
        }
        break;
      }
      default: {
        toAdd = arg;
      }
    }
    if (toAdd) {
      cls && (cls += " ");
      cls += toAdd;
    }
  }
  return cls;
};
function merge(registered, css4, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);
  if (registeredStyles.length < 2) {
    return className;
  }
  return rawClassName + css4(registeredStyles);
}
var Insertion2 = function Insertion3(_ref3) {
  var cache = _ref3.cache, serializedArr = _ref3.serializedArr;
  useInsertionEffectAlwaysWithSyncFallback(function() {
    for (var i = 0; i < serializedArr.length; i++) {
      insertStyles(cache, serializedArr[i], false);
    }
  });
  return null;
};
var ClassNames = /* @__PURE__ */ withEmotionCache(function(props, cache) {
  var hasRendered = false;
  var serializedArr = [];
  var css4 = function css5() {
    if (hasRendered && isDevelopment) {
      throw new Error("css can only be used during render");
    }
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var serialized = serializeStyles(args, cache.registered);
    serializedArr.push(serialized);
    registerStyles(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };
  var cx = function cx2() {
    if (hasRendered && isDevelopment) {
      throw new Error("cx can only be used during render");
    }
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return merge(cache.registered, css4, classnames(args));
  };
  var content = {
    css: css4,
    cx,
    theme: reactExports.useContext(ThemeContext)
  };
  var ele = props.children(content);
  hasRendered = true;
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(Insertion2, {
    cache,
    serializedArr
  }), ele);
});
{
  ClassNames.displayName = "EmotionClassNames";
}
{
  var isBrowser = typeof document !== "undefined";
  var isTestEnv = typeof jest !== "undefined" || typeof vi !== "undefined";
  if (isBrowser && !isTestEnv) {
    var globalContext = (
      // $FlowIgnore
      typeof globalThis !== "undefined" ? globalThis : isBrowser ? window : global
    );
    var globalKey = "__EMOTION_REACT_" + pkg.version.split(".")[0] + "__";
    if (globalContext[globalKey]) {
      console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used.");
    }
    globalContext[globalKey] = true;
  }
}
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = (v) => ({
  x: v,
  y: v
});
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}
function getNodeName(node2) {
  if (isNode(node2)) {
    return (node2.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node2) {
  var _node$ownerDocument;
  return (node2 == null ? void 0 : (_node$ownerDocument = node2.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node2) {
  var _ref3;
  return (_ref3 = (isNode(node2) ? node2.ownerDocument : node2.document) || window.document) == null ? void 0 : _ref3.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node2) {
  return ["html", "body", "#document"].includes(getNodeName(node2));
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getParentNode(node2) {
  if (getNodeName(node2) === "html") {
    return node2;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node2.assignedSlot || // DOM Element detected.
    node2.parentNode || // ShadowRoot detected.
    isShadowRoot(node2) && node2.host || // Fallback.
    getDocumentElement(node2)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node2) {
  const parentNode = getParentNode(node2);
  if (isLastTraversableNode(parentNode)) {
    return node2.ownerDocument ? node2.ownerDocument.body : node2.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node2, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node2);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node2.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getCssDimensions(element) {
  const css4 = getComputedStyle$1(element);
  let width = parseFloat(css4.width) || 0;
  let height = parseFloat(css4.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
const noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css4 = getComputedStyle$1(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css4.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css4.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    clearTimeout(timeoutId);
    io && io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options2 = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options2,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options2);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options2;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref3) => {
      let [firstEntry] = _ref3;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          resizeObserver && resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo && cleanupIo();
    resizeObserver && resizeObserver.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var index = reactExports.useLayoutEffect;
var _excluded$4 = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];
var noop = function noop2() {
};
function applyPrefixToName(prefix2, name) {
  if (!name) {
    return prefix2;
  } else if (name[0] === "-") {
    return prefix2 + name;
  } else {
    return prefix2 + "__" + name;
  }
}
function classNames(prefix2, state) {
  for (var _len = arguments.length, classNameList = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    classNameList[_key - 2] = arguments[_key];
  }
  var arr = [].concat(classNameList);
  if (state && prefix2) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("".concat(applyPrefixToName(prefix2, key)));
      }
    }
  }
  return arr.filter(function(i) {
    return i;
  }).map(function(i) {
    return String(i).trim();
  }).join(" ");
}
var cleanValue = function cleanValue2(value) {
  if (isArray(value))
    return value.filter(Boolean);
  if (_typeof(value) === "object" && value !== null)
    return [value];
  return [];
};
var cleanCommonProps = function cleanCommonProps2(props) {
  props.className;
  props.clearValue;
  props.cx;
  props.getStyles;
  props.getClassNames;
  props.getValue;
  props.hasValue;
  props.isMulti;
  props.isRtl;
  props.options;
  props.selectOption;
  props.selectProps;
  props.setValue;
  props.theme;
  var innerProps = _objectWithoutProperties(props, _excluded$4);
  return _objectSpread2({}, innerProps);
};
var getStyleProps = function getStyleProps2(props, name, classNamesState) {
  var cx = props.cx, getStyles = props.getStyles, getClassNames = props.getClassNames, className = props.className;
  return {
    css: getStyles(name, props),
    className: cx(classNamesState !== null && classNamesState !== void 0 ? classNamesState : {}, getClassNames(name, props), className)
  };
};
function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
}
function normalizedHeight(el) {
  if (isDocumentElement(el)) {
    return window.innerHeight;
  }
  return el.clientHeight;
}
function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }
  return el.scrollTop;
}
function scrollTo(el, top) {
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }
  el.scrollTop = top;
}
function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === "absolute";
  var overflowRx = /(auto|scroll)/;
  if (style.position === "fixed")
    return document.documentElement;
  for (var parent = element; parent = parent.parentElement; ) {
    style = getComputedStyle(parent);
    if (excludeStaticParent && style.position === "static") {
      continue;
    }
    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }
  return document.documentElement;
}
function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}
function animatedScrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200;
  var callback = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : noop;
  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;
  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);
    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      callback(element);
    }
  }
  animateScroll();
}
function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;
  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
}
function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}
function isTouchCapable() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}
function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
}
var passiveOptionAccessed = false;
var options = {
  get passive() {
    return passiveOptionAccessed = true;
  }
};
var w = typeof window !== "undefined" ? window : {};
if (w.addEventListener && w.removeEventListener) {
  w.addEventListener("p", noop, options);
  w.removeEventListener("p", noop, false);
}
var supportsPassiveEvents = passiveOptionAccessed;
function notNullish(item) {
  return item != null;
}
function isArray(arg) {
  return Array.isArray(arg);
}
function valueTernary(isMulti, multiValue, singleValue) {
  return isMulti ? multiValue : singleValue;
}
function singleValueAsValue(singleValue) {
  return singleValue;
}
function multiValueAsValue(multiValue) {
  return multiValue;
}
var removeProps = function removeProps2(propsObj) {
  for (var _len2 = arguments.length, properties = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    properties[_key2 - 1] = arguments[_key2];
  }
  var propsMap = Object.entries(propsObj).filter(function(_ref3) {
    var _ref22 = _slicedToArray(_ref3, 1), key = _ref22[0];
    return !properties.includes(key);
  });
  return propsMap.reduce(function(newProps, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2), key = _ref4[0], val = _ref4[1];
    newProps[key] = val;
    return newProps;
  }, {});
};
var _excluded$3 = ["children", "innerProps"], _excluded2$1 = ["children", "innerProps"];
function getMenuPlacement(_ref3) {
  var preferredMaxHeight = _ref3.maxHeight, menuEl = _ref3.menuEl, minHeight = _ref3.minHeight, preferredPlacement = _ref3.placement, shouldScroll = _ref3.shouldScroll, isFixedPosition = _ref3.isFixedPosition, controlHeight2 = _ref3.controlHeight;
  var scrollParent = getScrollParent(menuEl);
  var defaultState = {
    placement: "bottom",
    maxHeight: preferredMaxHeight
  };
  if (!menuEl || !menuEl.offsetParent)
    return defaultState;
  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(), scrollHeight = _scrollParent$getBoun.height;
  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(), menuBottom = _menuEl$getBoundingCl.bottom, menuHeight = _menuEl$getBoundingCl.height, menuTop = _menuEl$getBoundingCl.top;
  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(), containerTop = _menuEl$offsetParent$.top;
  var viewHeight = isFixedPosition ? window.innerHeight : normalizedHeight(scrollParent);
  var scrollTop = getScrollTop(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;
  switch (preferredPlacement) {
    case "auto":
    case "bottom":
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: "bottom",
          maxHeight: preferredMaxHeight
        };
      }
      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }
        return {
          placement: "bottom",
          maxHeight: preferredMaxHeight
        };
      }
      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }
        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: "bottom",
          maxHeight: constrainedHeight
        };
      }
      if (preferredPlacement === "auto" || isFixedPosition) {
        var _constrainedHeight = preferredMaxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;
        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - controlHeight2, preferredMaxHeight);
        }
        return {
          placement: "top",
          maxHeight: _constrainedHeight
        };
      }
      if (preferredPlacement === "bottom") {
        if (shouldScroll) {
          scrollTo(scrollParent, scrollDown);
        }
        return {
          placement: "bottom",
          maxHeight: preferredMaxHeight
        };
      }
      break;
    case "top":
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: "top",
          maxHeight: preferredMaxHeight
        };
      }
      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }
        return {
          placement: "top",
          maxHeight: preferredMaxHeight
        };
      }
      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = preferredMaxHeight;
        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }
        return {
          placement: "top",
          maxHeight: _constrainedHeight2
        };
      }
      return {
        placement: "bottom",
        maxHeight: preferredMaxHeight
      };
    default:
      throw new Error('Invalid placement provided "'.concat(preferredPlacement, '".'));
  }
  return defaultState;
}
function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: "top",
    top: "bottom"
  };
  return placement ? placementToCSSProp[placement] : "bottom";
}
var coercePlacement = function coercePlacement2(p) {
  return p === "auto" ? "bottom" : p;
};
var menuCSS = function menuCSS2(_ref22, unstyled) {
  var _objectSpread2$1;
  var placement = _ref22.placement, _ref2$theme = _ref22.theme, borderRadius2 = _ref2$theme.borderRadius, spacing2 = _ref2$theme.spacing, colors2 = _ref2$theme.colors;
  return _objectSpread2((_objectSpread2$1 = {
    label: "menu"
  }, _defineProperty(_objectSpread2$1, alignToControl(placement), "100%"), _defineProperty(_objectSpread2$1, "position", "absolute"), _defineProperty(_objectSpread2$1, "width", "100%"), _defineProperty(_objectSpread2$1, "zIndex", 1), _objectSpread2$1), unstyled ? {} : {
    backgroundColor: colors2.neutral0,
    borderRadius: borderRadius2,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: spacing2.menuGutter,
    marginTop: spacing2.menuGutter
  });
};
var PortalPlacementContext = /* @__PURE__ */ reactExports.createContext(null);
var MenuPlacer = function MenuPlacer2(props) {
  var children = props.children, minMenuHeight = props.minMenuHeight, maxMenuHeight = props.maxMenuHeight, menuPlacement = props.menuPlacement, menuPosition = props.menuPosition, menuShouldScrollIntoView = props.menuShouldScrollIntoView, theme = props.theme;
  var _ref3 = reactExports.useContext(PortalPlacementContext) || {}, setPortalPlacement = _ref3.setPortalPlacement;
  var ref = reactExports.useRef(null);
  var _useState = reactExports.useState(maxMenuHeight), _useState2 = _slicedToArray(_useState, 2), maxHeight = _useState2[0], setMaxHeight = _useState2[1];
  var _useState3 = reactExports.useState(null), _useState4 = _slicedToArray(_useState3, 2), placement = _useState4[0], setPlacement = _useState4[1];
  var controlHeight2 = theme.spacing.controlHeight;
  index(function() {
    var menuEl = ref.current;
    if (!menuEl)
      return;
    var isFixedPosition = menuPosition === "fixed";
    var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
    var state = getMenuPlacement({
      maxHeight: maxMenuHeight,
      menuEl,
      minHeight: minMenuHeight,
      placement: menuPlacement,
      shouldScroll,
      isFixedPosition,
      controlHeight: controlHeight2
    });
    setMaxHeight(state.maxHeight);
    setPlacement(state.placement);
    setPortalPlacement === null || setPortalPlacement === void 0 ? void 0 : setPortalPlacement(state.placement);
  }, [maxMenuHeight, menuPlacement, menuPosition, menuShouldScrollIntoView, minMenuHeight, setPortalPlacement, controlHeight2]);
  return children({
    ref,
    placerProps: _objectSpread2(_objectSpread2({}, props), {}, {
      placement: placement || coercePlacement(menuPlacement),
      maxHeight
    })
  });
};
var Menu = function Menu2(props) {
  var children = props.children, innerRef = props.innerRef, innerProps = props.innerProps;
  return jsx("div", _extends({}, getStyleProps(props, "menu", {
    menu: true
  }), {
    ref: innerRef
  }, innerProps), children);
};
var Menu$1 = Menu;
var menuListCSS = function menuListCSS2(_ref4, unstyled) {
  var maxHeight = _ref4.maxHeight, baseUnit2 = _ref4.theme.spacing.baseUnit;
  return _objectSpread2({
    maxHeight,
    overflowY: "auto",
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }, unstyled ? {} : {
    paddingBottom: baseUnit2,
    paddingTop: baseUnit2
  });
};
var MenuList = function MenuList2(props) {
  var children = props.children, innerProps = props.innerProps, innerRef = props.innerRef, isMulti = props.isMulti;
  return jsx("div", _extends({}, getStyleProps(props, "menuList", {
    "menu-list": true,
    "menu-list--is-multi": isMulti
  }), {
    ref: innerRef
  }, innerProps), children);
};
var noticeCSS = function noticeCSS2(_ref5, unstyled) {
  var _ref5$theme = _ref5.theme, baseUnit2 = _ref5$theme.spacing.baseUnit, colors2 = _ref5$theme.colors;
  return _objectSpread2({
    textAlign: "center"
  }, unstyled ? {} : {
    color: colors2.neutral40,
    padding: "".concat(baseUnit2 * 2, "px ").concat(baseUnit2 * 3, "px")
  });
};
var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;
var NoOptionsMessage = function NoOptionsMessage2(_ref6) {
  var _ref6$children = _ref6.children, children = _ref6$children === void 0 ? "No options" : _ref6$children, innerProps = _ref6.innerProps, restProps = _objectWithoutProperties(_ref6, _excluded$3);
  return jsx("div", _extends({}, getStyleProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
    children,
    innerProps
  }), "noOptionsMessage", {
    "menu-notice": true,
    "menu-notice--no-options": true
  }), innerProps), children);
};
var LoadingMessage = function LoadingMessage2(_ref7) {
  var _ref7$children = _ref7.children, children = _ref7$children === void 0 ? "Loading..." : _ref7$children, innerProps = _ref7.innerProps, restProps = _objectWithoutProperties(_ref7, _excluded2$1);
  return jsx("div", _extends({}, getStyleProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
    children,
    innerProps
  }), "loadingMessage", {
    "menu-notice": true,
    "menu-notice--loading": true
  }), innerProps), children);
};
var menuPortalCSS = function menuPortalCSS2(_ref8) {
  var rect = _ref8.rect, offset = _ref8.offset, position2 = _ref8.position;
  return {
    left: rect.left,
    position: position2,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};
var MenuPortal = function MenuPortal2(props) {
  var appendTo = props.appendTo, children = props.children, controlElement = props.controlElement, innerProps = props.innerProps, menuPlacement = props.menuPlacement, menuPosition = props.menuPosition;
  var menuPortalRef = reactExports.useRef(null);
  var cleanupRef = reactExports.useRef(null);
  var _useState5 = reactExports.useState(coercePlacement(menuPlacement)), _useState6 = _slicedToArray(_useState5, 2), placement = _useState6[0], setPortalPlacement = _useState6[1];
  var portalPlacementContext = reactExports.useMemo(function() {
    return {
      setPortalPlacement
    };
  }, []);
  var _useState7 = reactExports.useState(null), _useState8 = _slicedToArray(_useState7, 2), computedPosition = _useState8[0], setComputedPosition = _useState8[1];
  var updateComputedPosition = reactExports.useCallback(function() {
    if (!controlElement)
      return;
    var rect = getBoundingClientObj(controlElement);
    var scrollDistance = menuPosition === "fixed" ? 0 : window.pageYOffset;
    var offset = rect[placement] + scrollDistance;
    if (offset !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset) || rect.left !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left) || rect.width !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width)) {
      setComputedPosition({
        offset,
        rect
      });
    }
  }, [controlElement, menuPosition, placement, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width]);
  index(function() {
    updateComputedPosition();
  }, [updateComputedPosition]);
  var runAutoUpdate = reactExports.useCallback(function() {
    if (typeof cleanupRef.current === "function") {
      cleanupRef.current();
      cleanupRef.current = null;
    }
    if (controlElement && menuPortalRef.current) {
      cleanupRef.current = autoUpdate(controlElement, menuPortalRef.current, updateComputedPosition, {
        elementResize: "ResizeObserver" in window
      });
    }
  }, [controlElement, updateComputedPosition]);
  index(function() {
    runAutoUpdate();
  }, [runAutoUpdate]);
  var setMenuPortalElement = reactExports.useCallback(function(menuPortalElement) {
    menuPortalRef.current = menuPortalElement;
    runAutoUpdate();
  }, [runAutoUpdate]);
  if (!appendTo && menuPosition !== "fixed" || !computedPosition)
    return null;
  var menuWrapper = jsx("div", _extends({
    ref: setMenuPortalElement
  }, getStyleProps(_objectSpread2(_objectSpread2({}, props), {}, {
    offset: computedPosition.offset,
    position: menuPosition,
    rect: computedPosition.rect
  }), "menuPortal", {
    "menu-portal": true
  }), innerProps), children);
  return jsx(PortalPlacementContext.Provider, {
    value: portalPlacementContext
  }, appendTo ? /* @__PURE__ */ reactDomExports.createPortal(menuWrapper, appendTo) : menuWrapper);
};
var containerCSS = function containerCSS2(_ref3) {
  var isDisabled = _ref3.isDisabled, isRtl = _ref3.isRtl;
  return {
    label: "container",
    direction: isRtl ? "rtl" : void 0,
    pointerEvents: isDisabled ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
};
var SelectContainer = function SelectContainer2(props) {
  var children = props.children, innerProps = props.innerProps, isDisabled = props.isDisabled, isRtl = props.isRtl;
  return jsx("div", _extends({}, getStyleProps(props, "container", {
    "--is-disabled": isDisabled,
    "--is-rtl": isRtl
  }), innerProps), children);
};
var valueContainerCSS = function valueContainerCSS2(_ref22, unstyled) {
  var spacing2 = _ref22.theme.spacing, isMulti = _ref22.isMulti, hasValue = _ref22.hasValue, controlShouldRenderValue = _ref22.selectProps.controlShouldRenderValue;
  return _objectSpread2({
    alignItems: "center",
    display: isMulti && hasValue && controlShouldRenderValue ? "flex" : "grid",
    flex: 1,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, unstyled ? {} : {
    padding: "".concat(spacing2.baseUnit / 2, "px ").concat(spacing2.baseUnit * 2, "px")
  });
};
var ValueContainer = function ValueContainer2(props) {
  var children = props.children, innerProps = props.innerProps, isMulti = props.isMulti, hasValue = props.hasValue;
  return jsx("div", _extends({}, getStyleProps(props, "valueContainer", {
    "value-container": true,
    "value-container--is-multi": isMulti,
    "value-container--has-value": hasValue
  }), innerProps), children);
};
var indicatorsContainerCSS = function indicatorsContainerCSS2() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
};
var IndicatorsContainer = function IndicatorsContainer2(props) {
  var children = props.children, innerProps = props.innerProps;
  return jsx("div", _extends({}, getStyleProps(props, "indicatorsContainer", {
    indicators: true
  }), innerProps), children);
};
var _templateObject;
var _excluded$2 = ["size"], _excluded2 = ["innerProps", "isRtl", "size"];
function _EMOTION_STRINGIFIED_CSS_ERROR__$3() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var _ref2$2 = {
  name: "tj5bde-Svg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$3
};
var Svg = function Svg2(_ref3) {
  var size = _ref3.size, props = _objectWithoutProperties(_ref3, _excluded$2);
  return jsx("svg", _extends({
    height: size,
    width: size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: _ref2$2
  }, props));
};
var CrossIcon = function CrossIcon2(props) {
  return jsx(Svg, _extends({
    size: 20
  }, props), jsx("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var DownChevron = function DownChevron2(props) {
  return jsx(Svg, _extends({
    size: 20
  }, props), jsx("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
};
var baseCSS = function baseCSS2(_ref3, unstyled) {
  var isFocused = _ref3.isFocused, _ref3$theme = _ref3.theme, baseUnit2 = _ref3$theme.spacing.baseUnit, colors2 = _ref3$theme.colors;
  return _objectSpread2({
    label: "indicatorContainer",
    display: "flex",
    transition: "color 150ms"
  }, unstyled ? {} : {
    color: isFocused ? colors2.neutral60 : colors2.neutral20,
    padding: baseUnit2 * 2,
    ":hover": {
      color: isFocused ? colors2.neutral80 : colors2.neutral40
    }
  });
};
var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator2(props) {
  var children = props.children, innerProps = props.innerProps;
  return jsx("div", _extends({}, getStyleProps(props, "dropdownIndicator", {
    indicator: true,
    "dropdown-indicator": true
  }), innerProps), children || jsx(DownChevron, null));
};
var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator2(props) {
  var children = props.children, innerProps = props.innerProps;
  return jsx("div", _extends({}, getStyleProps(props, "clearIndicator", {
    indicator: true,
    "clear-indicator": true
  }), innerProps), children || jsx(CrossIcon, null));
};
var indicatorSeparatorCSS = function indicatorSeparatorCSS2(_ref4, unstyled) {
  var isDisabled = _ref4.isDisabled, _ref4$theme = _ref4.theme, baseUnit2 = _ref4$theme.spacing.baseUnit, colors2 = _ref4$theme.colors;
  return _objectSpread2({
    label: "indicatorSeparator",
    alignSelf: "stretch",
    width: 1
  }, unstyled ? {} : {
    backgroundColor: isDisabled ? colors2.neutral10 : colors2.neutral20,
    marginBottom: baseUnit2 * 2,
    marginTop: baseUnit2 * 2
  });
};
var IndicatorSeparator = function IndicatorSeparator2(props) {
  var innerProps = props.innerProps;
  return jsx("span", _extends({}, innerProps, getStyleProps(props, "indicatorSeparator", {
    "indicator-separator": true
  })));
};
var loadingDotAnimations = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"])));
var loadingIndicatorCSS = function loadingIndicatorCSS2(_ref5, unstyled) {
  var isFocused = _ref5.isFocused, size = _ref5.size, _ref5$theme = _ref5.theme, colors2 = _ref5$theme.colors, baseUnit2 = _ref5$theme.spacing.baseUnit;
  return _objectSpread2({
    label: "loadingIndicator",
    display: "flex",
    transition: "color 150ms",
    alignSelf: "center",
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: "center",
    verticalAlign: "middle"
  }, unstyled ? {} : {
    color: isFocused ? colors2.neutral60 : colors2.neutral20,
    padding: baseUnit2 * 2
  });
};
var LoadingDot = function LoadingDot2(_ref6) {
  var delay = _ref6.delay, offset = _ref6.offset;
  return jsx("span", {
    css: /* @__PURE__ */ css$2({
      animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: offset ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, ";label:LoadingDot;", "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1RSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */")
  });
};
var LoadingIndicator = function LoadingIndicator2(_ref7) {
  var innerProps = _ref7.innerProps, isRtl = _ref7.isRtl, _ref7$size = _ref7.size, size = _ref7$size === void 0 ? 4 : _ref7$size, restProps = _objectWithoutProperties(_ref7, _excluded2);
  return jsx("div", _extends({}, getStyleProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
    innerProps,
    isRtl,
    size
  }), "loadingIndicator", {
    indicator: true,
    "loading-indicator": true
  }), innerProps), jsx(LoadingDot, {
    delay: 0,
    offset: isRtl
  }), jsx(LoadingDot, {
    delay: 160,
    offset: true
  }), jsx(LoadingDot, {
    delay: 320,
    offset: !isRtl
  }));
};
var css$1 = function css(_ref3, unstyled) {
  var isDisabled = _ref3.isDisabled, isFocused = _ref3.isFocused, _ref$theme = _ref3.theme, colors2 = _ref$theme.colors, borderRadius2 = _ref$theme.borderRadius, spacing2 = _ref$theme.spacing;
  return _objectSpread2({
    label: "control",
    alignItems: "center",
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: spacing2.controlHeight,
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms"
  }, unstyled ? {} : {
    backgroundColor: isDisabled ? colors2.neutral5 : colors2.neutral0,
    borderColor: isDisabled ? colors2.neutral10 : isFocused ? colors2.primary : colors2.neutral20,
    borderRadius: borderRadius2,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px ".concat(colors2.primary) : void 0,
    "&:hover": {
      borderColor: isFocused ? colors2.primary : colors2.neutral30
    }
  });
};
var Control = function Control2(props) {
  var children = props.children, isDisabled = props.isDisabled, isFocused = props.isFocused, innerRef = props.innerRef, innerProps = props.innerProps, menuIsOpen = props.menuIsOpen;
  return jsx("div", _extends({
    ref: innerRef
  }, getStyleProps(props, "control", {
    control: true,
    "control--is-disabled": isDisabled,
    "control--is-focused": isFocused,
    "control--menu-is-open": menuIsOpen
  }), innerProps, {
    "aria-disabled": isDisabled || void 0
  }), children);
};
var Control$1 = Control;
var _excluded$1 = ["data"];
var groupCSS = function groupCSS2(_ref3, unstyled) {
  var spacing2 = _ref3.theme.spacing;
  return unstyled ? {} : {
    paddingBottom: spacing2.baseUnit * 2,
    paddingTop: spacing2.baseUnit * 2
  };
};
var Group = function Group2(props) {
  var children = props.children, cx = props.cx, getStyles = props.getStyles, getClassNames = props.getClassNames, Heading = props.Heading, headingProps = props.headingProps, innerProps = props.innerProps, label = props.label, theme = props.theme, selectProps = props.selectProps;
  return jsx("div", _extends({}, getStyleProps(props, "group", {
    group: true
  }), innerProps), jsx(Heading, _extends({}, headingProps, {
    selectProps,
    theme,
    getStyles,
    getClassNames,
    cx
  }), label), jsx("div", null, children));
};
var groupHeadingCSS = function groupHeadingCSS2(_ref22, unstyled) {
  var _ref2$theme = _ref22.theme, colors2 = _ref2$theme.colors, spacing2 = _ref2$theme.spacing;
  return _objectSpread2({
    label: "group",
    cursor: "default",
    display: "block"
  }, unstyled ? {} : {
    color: colors2.neutral40,
    fontSize: "75%",
    fontWeight: 500,
    marginBottom: "0.25em",
    paddingLeft: spacing2.baseUnit * 3,
    paddingRight: spacing2.baseUnit * 3,
    textTransform: "uppercase"
  });
};
var GroupHeading = function GroupHeading2(props) {
  var _cleanCommonProps = cleanCommonProps(props);
  _cleanCommonProps.data;
  var innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded$1);
  return jsx("div", _extends({}, getStyleProps(props, "groupHeading", {
    "group-heading": true
  }), innerProps));
};
var Group$1 = Group;
var _excluded$5 = ["innerRef", "isDisabled", "isHidden", "inputClassName"];
var inputCSS = function inputCSS2(_ref3, unstyled) {
  var isDisabled = _ref3.isDisabled, value = _ref3.value, _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
  return _objectSpread2(_objectSpread2({
    visibility: isDisabled ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: value ? "translateZ(0)" : ""
  }, containerStyle), unstyled ? {} : {
    margin: spacing2.baseUnit / 2,
    paddingBottom: spacing2.baseUnit / 2,
    paddingTop: spacing2.baseUnit / 2,
    color: colors2.neutral80
  });
};
var spacingStyle = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
};
var containerStyle = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": _objectSpread2({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, spacingStyle)
};
var inputStyle = function inputStyle2(isHidden) {
  return _objectSpread2({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: isHidden ? 0 : 1,
    width: "100%"
  }, spacingStyle);
};
var Input = function Input2(props) {
  var cx = props.cx, value = props.value;
  var _cleanCommonProps = cleanCommonProps(props), innerRef = _cleanCommonProps.innerRef, isDisabled = _cleanCommonProps.isDisabled, isHidden = _cleanCommonProps.isHidden, inputClassName = _cleanCommonProps.inputClassName, innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded$5);
  return jsx("div", _extends({}, getStyleProps(props, "input", {
    "input-container": true
  }), {
    "data-value": value || ""
  }), jsx("input", _extends({
    className: cx({
      input: true
    }, inputClassName),
    ref: innerRef,
    style: inputStyle(isHidden),
    disabled: isDisabled
  }, innerProps)));
};
var Input$1 = Input;
var multiValueCSS = function multiValueCSS2(_ref3, unstyled) {
  var _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, borderRadius2 = _ref$theme.borderRadius, colors2 = _ref$theme.colors;
  return _objectSpread2({
    label: "multiValue",
    display: "flex",
    minWidth: 0
  }, unstyled ? {} : {
    backgroundColor: colors2.neutral10,
    borderRadius: borderRadius2 / 2,
    margin: spacing2.baseUnit / 2
  });
};
var multiValueLabelCSS = function multiValueLabelCSS2(_ref22, unstyled) {
  var _ref2$theme = _ref22.theme, borderRadius2 = _ref2$theme.borderRadius, colors2 = _ref2$theme.colors, cropWithEllipsis = _ref22.cropWithEllipsis;
  return _objectSpread2({
    overflow: "hidden",
    textOverflow: cropWithEllipsis || cropWithEllipsis === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }, unstyled ? {} : {
    borderRadius: borderRadius2 / 2,
    color: colors2.neutral80,
    fontSize: "85%",
    padding: 3,
    paddingLeft: 6
  });
};
var multiValueRemoveCSS = function multiValueRemoveCSS2(_ref3, unstyled) {
  var _ref3$theme = _ref3.theme, spacing2 = _ref3$theme.spacing, borderRadius2 = _ref3$theme.borderRadius, colors2 = _ref3$theme.colors, isFocused = _ref3.isFocused;
  return _objectSpread2({
    alignItems: "center",
    display: "flex"
  }, unstyled ? {} : {
    borderRadius: borderRadius2 / 2,
    backgroundColor: isFocused ? colors2.dangerLight : void 0,
    paddingLeft: spacing2.baseUnit,
    paddingRight: spacing2.baseUnit,
    ":hover": {
      backgroundColor: colors2.dangerLight,
      color: colors2.danger
    }
  });
};
var MultiValueGeneric = function MultiValueGeneric2(_ref4) {
  var children = _ref4.children, innerProps = _ref4.innerProps;
  return jsx("div", innerProps, children);
};
var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;
function MultiValueRemove(_ref5) {
  var children = _ref5.children, innerProps = _ref5.innerProps;
  return jsx("div", _extends({
    role: "button"
  }, innerProps), children || jsx(CrossIcon, {
    size: 14
  }));
}
var MultiValue = function MultiValue2(props) {
  var children = props.children, components2 = props.components, data = props.data, innerProps = props.innerProps, isDisabled = props.isDisabled, removeProps3 = props.removeProps, selectProps = props.selectProps;
  var Container = components2.Container, Label = components2.Label, Remove = components2.Remove;
  return jsx(Container, {
    data,
    innerProps: _objectSpread2(_objectSpread2({}, getStyleProps(props, "multiValue", {
      "multi-value": true,
      "multi-value--is-disabled": isDisabled
    })), innerProps),
    selectProps
  }, jsx(Label, {
    data,
    innerProps: _objectSpread2({}, getStyleProps(props, "multiValueLabel", {
      "multi-value__label": true
    })),
    selectProps
  }, children), jsx(Remove, {
    data,
    innerProps: _objectSpread2(_objectSpread2({}, getStyleProps(props, "multiValueRemove", {
      "multi-value__remove": true
    })), {}, {
      "aria-label": "Remove ".concat(children || "option")
    }, removeProps3),
    selectProps
  }));
};
var MultiValue$1 = MultiValue;
var optionCSS = function optionCSS2(_ref3, unstyled) {
  var isDisabled = _ref3.isDisabled, isFocused = _ref3.isFocused, isSelected = _ref3.isSelected, _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
  return _objectSpread2({
    label: "option",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    width: "100%",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
  }, unstyled ? {} : {
    backgroundColor: isSelected ? colors2.primary : isFocused ? colors2.primary25 : "transparent",
    color: isDisabled ? colors2.neutral20 : isSelected ? colors2.neutral0 : "inherit",
    padding: "".concat(spacing2.baseUnit * 2, "px ").concat(spacing2.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ":active": {
      backgroundColor: !isDisabled ? isSelected ? colors2.primary : colors2.primary50 : void 0
    }
  });
};
var Option = function Option2(props) {
  var children = props.children, isDisabled = props.isDisabled, isFocused = props.isFocused, isSelected = props.isSelected, innerRef = props.innerRef, innerProps = props.innerProps;
  return jsx("div", _extends({}, getStyleProps(props, "option", {
    option: true,
    "option--is-disabled": isDisabled,
    "option--is-focused": isFocused,
    "option--is-selected": isSelected
  }), {
    ref: innerRef,
    "aria-disabled": isDisabled
  }, innerProps), children);
};
var Option$1 = Option;
var placeholderCSS = function placeholderCSS2(_ref3, unstyled) {
  var _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
  return _objectSpread2({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, unstyled ? {} : {
    color: colors2.neutral50,
    marginLeft: spacing2.baseUnit / 2,
    marginRight: spacing2.baseUnit / 2
  });
};
var Placeholder = function Placeholder2(props) {
  var children = props.children, innerProps = props.innerProps;
  return jsx("div", _extends({}, getStyleProps(props, "placeholder", {
    placeholder: true
  }), innerProps), children);
};
var Placeholder$1 = Placeholder;
var css2 = function css3(_ref3, unstyled) {
  var isDisabled = _ref3.isDisabled, _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
  return _objectSpread2({
    label: "singleValue",
    gridArea: "1 / 1 / 2 / 3",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, unstyled ? {} : {
    color: isDisabled ? colors2.neutral40 : colors2.neutral80,
    marginLeft: spacing2.baseUnit / 2,
    marginRight: spacing2.baseUnit / 2
  });
};
var SingleValue = function SingleValue2(props) {
  var children = props.children, isDisabled = props.isDisabled, innerProps = props.innerProps;
  return jsx("div", _extends({}, getStyleProps(props, "singleValue", {
    "single-value": true,
    "single-value--is-disabled": isDisabled
  }), innerProps), children);
};
var SingleValue$1 = SingleValue;
var components = {
  ClearIndicator,
  Control: Control$1,
  DropdownIndicator,
  DownChevron,
  CrossIcon,
  Group: Group$1,
  GroupHeading,
  IndicatorsContainer,
  IndicatorSeparator,
  Input: Input$1,
  LoadingIndicator,
  Menu: Menu$1,
  MenuList,
  MenuPortal,
  LoadingMessage,
  NoOptionsMessage,
  MultiValue: MultiValue$1,
  MultiValueContainer,
  MultiValueLabel,
  MultiValueRemove,
  Option: Option$1,
  Placeholder: Placeholder$1,
  SelectContainer,
  SingleValue: SingleValue$1,
  ValueContainer
};
var defaultComponents = function defaultComponents2(props) {
  return _objectSpread2(_objectSpread2({}, components), props.components);
};
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual2) {
  if (isEqual2 === void 0) {
    isEqual2 = areInputsEqual;
  }
  var cache = null;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (cache && cache.lastThis === this && isEqual2(newArgs, cache.lastArgs)) {
      return cache.lastResult;
    }
    var lastResult = resultFn.apply(this, newArgs);
    cache = {
      lastResult,
      lastArgs: newArgs,
      lastThis: this
    };
    return lastResult;
  }
  memoized.clear = function clear() {
    cache = null;
  };
  return memoized;
}
function _EMOTION_STRINGIFIED_CSS_ERROR__$2() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var _ref = {
  name: "1f43avz-a11yText-A11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IEpTWCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$2
};
var A11yText = function A11yText2(props) {
  return jsx("span", _extends({
    css: _ref
  }, props));
};
var A11yText$1 = A11yText;
var defaultAriaLiveMessages = {
  guidance: function guidance(props) {
    var isSearchable = props.isSearchable, isMulti = props.isMulti, tabSelectsValue = props.tabSelectsValue, context = props.context, isInitialFocus = props.isInitialFocus;
    switch (context) {
      case "menu":
        return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(tabSelectsValue ? ", press Tab to select the option and exit the menu" : "", ".");
      case "input":
        return isInitialFocus ? "".concat(props["aria-label"] || "Select", " is focused ").concat(isSearchable ? ",type to refine list" : "", ", press Down to open the menu, ").concat(isMulti ? " press left to focus selected values" : "") : "";
      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
      default:
        return "";
    }
  },
  onChange: function onChange(props) {
    var action = props.action, _props$label = props.label, label = _props$label === void 0 ? "" : _props$label, labels = props.labels, isDisabled = props.isDisabled;
    switch (action) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(label, ", deselected.");
      case "clear":
        return "All selected options have been cleared.";
      case "initial-input-focus":
        return "option".concat(labels.length > 1 ? "s" : "", " ").concat(labels.join(","), ", selected.");
      case "select-option":
        return isDisabled ? "option ".concat(label, " is disabled. Select another option.") : "option ".concat(label, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function onFocus(props) {
    var context = props.context, focused = props.focused, options2 = props.options, _props$label2 = props.label, label = _props$label2 === void 0 ? "" : _props$label2, selectValue = props.selectValue, isDisabled = props.isDisabled, isSelected = props.isSelected, isAppleDevice2 = props.isAppleDevice;
    var getArrayIndex = function getArrayIndex2(arr, item) {
      return arr && arr.length ? "".concat(arr.indexOf(item) + 1, " of ").concat(arr.length) : "";
    };
    if (context === "value" && selectValue) {
      return "value ".concat(label, " focused, ").concat(getArrayIndex(selectValue, focused), ".");
    }
    if (context === "menu" && isAppleDevice2) {
      var disabled = isDisabled ? " disabled" : "";
      var status = "".concat(isSelected ? " selected" : "").concat(disabled);
      return "".concat(label).concat(status, ", ").concat(getArrayIndex(options2, focused), ".");
    }
    return "";
  },
  onFilter: function onFilter(props) {
    var inputValue = props.inputValue, resultsMessage = props.resultsMessage;
    return "".concat(resultsMessage).concat(inputValue ? " for search term " + inputValue : "", ".");
  }
};
var LiveRegion = function LiveRegion2(props) {
  var ariaSelection = props.ariaSelection, focusedOption = props.focusedOption, focusedValue = props.focusedValue, focusableOptions = props.focusableOptions, isFocused = props.isFocused, selectValue = props.selectValue, selectProps = props.selectProps, id = props.id, isAppleDevice2 = props.isAppleDevice;
  var ariaLiveMessages = selectProps.ariaLiveMessages, getOptionLabel4 = selectProps.getOptionLabel, inputValue = selectProps.inputValue, isMulti = selectProps.isMulti, isOptionDisabled3 = selectProps.isOptionDisabled, isSearchable = selectProps.isSearchable, menuIsOpen = selectProps.menuIsOpen, options2 = selectProps.options, screenReaderStatus2 = selectProps.screenReaderStatus, tabSelectsValue = selectProps.tabSelectsValue, isLoading = selectProps.isLoading;
  var ariaLabel = selectProps["aria-label"];
  var ariaLive = selectProps["aria-live"];
  var messages = reactExports.useMemo(function() {
    return _objectSpread2(_objectSpread2({}, defaultAriaLiveMessages), ariaLiveMessages || {});
  }, [ariaLiveMessages]);
  var ariaSelected = reactExports.useMemo(function() {
    var message = "";
    if (ariaSelection && messages.onChange) {
      var option = ariaSelection.option, selectedOptions = ariaSelection.options, removedValue = ariaSelection.removedValue, removedValues = ariaSelection.removedValues, value = ariaSelection.value;
      var asOption = function asOption2(val) {
        return !Array.isArray(val) ? val : null;
      };
      var selected = removedValue || option || asOption(value);
      var label = selected ? getOptionLabel4(selected) : "";
      var multiSelected = selectedOptions || removedValues || void 0;
      var labels = multiSelected ? multiSelected.map(getOptionLabel4) : [];
      var onChangeProps = _objectSpread2({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: selected && isOptionDisabled3(selected, selectValue),
        label,
        labels
      }, ariaSelection);
      message = messages.onChange(onChangeProps);
    }
    return message;
  }, [ariaSelection, messages, isOptionDisabled3, selectValue, getOptionLabel4]);
  var ariaFocused = reactExports.useMemo(function() {
    var focusMsg = "";
    var focused = focusedOption || focusedValue;
    var isSelected = !!(focusedOption && selectValue && selectValue.includes(focusedOption));
    if (focused && messages.onFocus) {
      var onFocusProps = {
        focused,
        label: getOptionLabel4(focused),
        isDisabled: isOptionDisabled3(focused, selectValue),
        isSelected,
        options: focusableOptions,
        context: focused === focusedOption ? "menu" : "value",
        selectValue,
        isAppleDevice: isAppleDevice2
      };
      focusMsg = messages.onFocus(onFocusProps);
    }
    return focusMsg;
  }, [focusedOption, focusedValue, getOptionLabel4, isOptionDisabled3, messages, focusableOptions, selectValue, isAppleDevice2]);
  var ariaResults = reactExports.useMemo(function() {
    var resultsMsg = "";
    if (menuIsOpen && options2.length && !isLoading && messages.onFilter) {
      var resultsMessage = screenReaderStatus2({
        count: focusableOptions.length
      });
      resultsMsg = messages.onFilter({
        inputValue,
        resultsMessage
      });
    }
    return resultsMsg;
  }, [focusableOptions, inputValue, menuIsOpen, messages, options2, screenReaderStatus2, isLoading]);
  var isInitialFocus = (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus";
  var ariaGuidance = reactExports.useMemo(function() {
    var guidanceMsg = "";
    if (messages.guidance) {
      var context = focusedValue ? "value" : menuIsOpen ? "menu" : "input";
      guidanceMsg = messages.guidance({
        "aria-label": ariaLabel,
        context,
        isDisabled: focusedOption && isOptionDisabled3(focusedOption, selectValue),
        isMulti,
        isSearchable,
        tabSelectsValue,
        isInitialFocus
      });
    }
    return guidanceMsg;
  }, [ariaLabel, focusedOption, focusedValue, isMulti, isOptionDisabled3, isSearchable, menuIsOpen, messages, selectValue, tabSelectsValue, isInitialFocus]);
  var ScreenReaderText = jsx(reactExports.Fragment, null, jsx("span", {
    id: "aria-selection"
  }, ariaSelected), jsx("span", {
    id: "aria-focused"
  }, ariaFocused), jsx("span", {
    id: "aria-results"
  }, ariaResults), jsx("span", {
    id: "aria-guidance"
  }, ariaGuidance));
  return jsx(reactExports.Fragment, null, jsx(A11yText$1, {
    id
  }, isInitialFocus && ScreenReaderText), jsx(A11yText$1, {
    "aria-live": ariaLive,
    "aria-atomic": "false",
    "aria-relevant": "additions text",
    role: "log"
  }, isFocused && !isInitialFocus && ScreenReaderText));
};
var LiveRegion$1 = LiveRegion;
var diacritics = [{
  base: "A",
  letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
}, {
  base: "AA",
  letters: "Ꜳ"
}, {
  base: "AE",
  letters: "ÆǼǢ"
}, {
  base: "AO",
  letters: "Ꜵ"
}, {
  base: "AU",
  letters: "Ꜷ"
}, {
  base: "AV",
  letters: "ꜸꜺ"
}, {
  base: "AY",
  letters: "Ꜽ"
}, {
  base: "B",
  letters: "BⒷＢḂḄḆɃƂƁ"
}, {
  base: "C",
  letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
}, {
  base: "D",
  letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
}, {
  base: "DZ",
  letters: "ǱǄ"
}, {
  base: "Dz",
  letters: "ǲǅ"
}, {
  base: "E",
  letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
}, {
  base: "F",
  letters: "FⒻＦḞƑꝻ"
}, {
  base: "G",
  letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
}, {
  base: "H",
  letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
}, {
  base: "I",
  letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
}, {
  base: "J",
  letters: "JⒿＪĴɈ"
}, {
  base: "K",
  letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
}, {
  base: "L",
  letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
}, {
  base: "LJ",
  letters: "Ǉ"
}, {
  base: "Lj",
  letters: "ǈ"
}, {
  base: "M",
  letters: "MⓂＭḾṀṂⱮƜ"
}, {
  base: "N",
  letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
}, {
  base: "NJ",
  letters: "Ǌ"
}, {
  base: "Nj",
  letters: "ǋ"
}, {
  base: "O",
  letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
}, {
  base: "OI",
  letters: "Ƣ"
}, {
  base: "OO",
  letters: "Ꝏ"
}, {
  base: "OU",
  letters: "Ȣ"
}, {
  base: "P",
  letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
}, {
  base: "Q",
  letters: "QⓆＱꝖꝘɊ"
}, {
  base: "R",
  letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
}, {
  base: "S",
  letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
}, {
  base: "T",
  letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
}, {
  base: "TZ",
  letters: "Ꜩ"
}, {
  base: "U",
  letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
}, {
  base: "V",
  letters: "VⓋＶṼṾƲꝞɅ"
}, {
  base: "VY",
  letters: "Ꝡ"
}, {
  base: "W",
  letters: "WⓌＷẀẂŴẆẄẈⱲ"
}, {
  base: "X",
  letters: "XⓍＸẊẌ"
}, {
  base: "Y",
  letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
}, {
  base: "Z",
  letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
}, {
  base: "a",
  letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
}, {
  base: "aa",
  letters: "ꜳ"
}, {
  base: "ae",
  letters: "æǽǣ"
}, {
  base: "ao",
  letters: "ꜵ"
}, {
  base: "au",
  letters: "ꜷ"
}, {
  base: "av",
  letters: "ꜹꜻ"
}, {
  base: "ay",
  letters: "ꜽ"
}, {
  base: "b",
  letters: "bⓑｂḃḅḇƀƃɓ"
}, {
  base: "c",
  letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
}, {
  base: "d",
  letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
}, {
  base: "dz",
  letters: "ǳǆ"
}, {
  base: "e",
  letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
}, {
  base: "f",
  letters: "fⓕｆḟƒꝼ"
}, {
  base: "g",
  letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
}, {
  base: "h",
  letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
}, {
  base: "hv",
  letters: "ƕ"
}, {
  base: "i",
  letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
}, {
  base: "j",
  letters: "jⓙｊĵǰɉ"
}, {
  base: "k",
  letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
}, {
  base: "l",
  letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
}, {
  base: "lj",
  letters: "ǉ"
}, {
  base: "m",
  letters: "mⓜｍḿṁṃɱɯ"
}, {
  base: "n",
  letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
}, {
  base: "nj",
  letters: "ǌ"
}, {
  base: "o",
  letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
}, {
  base: "oi",
  letters: "ƣ"
}, {
  base: "ou",
  letters: "ȣ"
}, {
  base: "oo",
  letters: "ꝏ"
}, {
  base: "p",
  letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
}, {
  base: "q",
  letters: "qⓠｑɋꝗꝙ"
}, {
  base: "r",
  letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
}, {
  base: "s",
  letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
}, {
  base: "t",
  letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
}, {
  base: "tz",
  letters: "ꜩ"
}, {
  base: "u",
  letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
}, {
  base: "v",
  letters: "vⓥｖṽṿʋꝟʌ"
}, {
  base: "vy",
  letters: "ꝡ"
}, {
  base: "w",
  letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
}, {
  base: "x",
  letters: "xⓧｘẋẍ"
}, {
  base: "y",
  letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
}, {
  base: "z",
  letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
}];
var anyDiacritic = new RegExp("[" + diacritics.map(function(d) {
  return d.letters;
}).join("") + "]", "g");
var diacriticToBase = {};
for (var i = 0; i < diacritics.length; i++) {
  var diacritic = diacritics[i];
  for (var j = 0; j < diacritic.letters.length; j++) {
    diacriticToBase[diacritic.letters[j]] = diacritic.base;
  }
}
var stripDiacritics = function stripDiacritics2(str) {
  return str.replace(anyDiacritic, function(match2) {
    return diacriticToBase[match2];
  });
};
var memoizedStripDiacriticsForInput = memoizeOne(stripDiacritics);
var trimString = function trimString2(str) {
  return str.replace(/^\s+|\s+$/g, "");
};
var defaultStringify = function defaultStringify2(option) {
  return "".concat(option.label, " ").concat(option.value);
};
var createFilter = function createFilter2(config) {
  return function(option, rawInput) {
    if (option.data.__isNew__)
      return true;
    var _ignoreCase$ignoreAcc = _objectSpread2({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaultStringify,
      trim: true,
      matchFrom: "any"
    }, config), ignoreCase = _ignoreCase$ignoreAcc.ignoreCase, ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents, stringify2 = _ignoreCase$ignoreAcc.stringify, trim2 = _ignoreCase$ignoreAcc.trim, matchFrom = _ignoreCase$ignoreAcc.matchFrom;
    var input = trim2 ? trimString(rawInput) : rawInput;
    var candidate = trim2 ? trimString(stringify2(option)) : stringify2(option);
    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }
    if (ignoreAccents) {
      input = memoizedStripDiacriticsForInput(input);
      candidate = stripDiacritics(candidate);
    }
    return matchFrom === "start" ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};
var _excluded = ["innerRef"];
function DummyInput(_ref3) {
  var innerRef = _ref3.innerRef, props = _objectWithoutProperties(_ref3, _excluded);
  var filteredProps = removeProps(props, "onExited", "in", "enter", "exit", "appear");
  return jsx("input", _extends({
    ref: innerRef
  }, filteredProps, {
    css: /* @__PURE__ */ css$2({
      label: "dummyInput",
      // get rid of any default styles
      background: 0,
      border: 0,
      // important! this hides the flashing cursor
      caretColor: "transparent",
      fontSize: "inherit",
      gridArea: "1 / 1 / 2 / 3",
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: "transparent",
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: "relative",
      transform: "scale(.01)"
    }, ";label:DummyInput;", "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCTSIsImZpbGUiOiJEdW1teUlucHV0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyByZW1vdmVQcm9wcyB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHVtbXlJbnB1dCh7XG4gIGlubmVyUmVmLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbnB1dCddICYge1xuICByZWFkb25seSBpbm5lclJlZjogUmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xufSkge1xuICAvLyBSZW1vdmUgYW5pbWF0aW9uIHByb3BzIG5vdCBtZWFudCBmb3IgSFRNTCBlbGVtZW50c1xuICBjb25zdCBmaWx0ZXJlZFByb3BzID0gcmVtb3ZlUHJvcHMoXG4gICAgcHJvcHMsXG4gICAgJ29uRXhpdGVkJyxcbiAgICAnaW4nLFxuICAgICdlbnRlcicsXG4gICAgJ2V4aXQnLFxuICAgICdhcHBlYXInXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8aW5wdXRcbiAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICB7Li4uZmlsdGVyZWRQcm9wc31cbiAgICAgIGNzcz17e1xuICAgICAgICBsYWJlbDogJ2R1bW15SW5wdXQnLFxuICAgICAgICAvLyBnZXQgcmlkIG9mIGFueSBkZWZhdWx0IHN0eWxlc1xuICAgICAgICBiYWNrZ3JvdW5kOiAwLFxuICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgIC8vIGltcG9ydGFudCEgdGhpcyBoaWRlcyB0aGUgZmxhc2hpbmcgY3Vyc29yXG4gICAgICAgIGNhcmV0Q29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICAgIGdyaWRBcmVhOiAnMSAvIDEgLyAyIC8gMycsXG4gICAgICAgIG91dGxpbmU6IDAsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIC8vIGltcG9ydGFudCEgd2l0aG91dCBgd2lkdGhgIGJyb3dzZXJzIHdvbid0IGFsbG93IGZvY3VzXG4gICAgICAgIHdpZHRoOiAxLFxuXG4gICAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gZGVza3RvcFxuICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcblxuICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIG1vYmlsZSB3aGlsc3QgbWFpbnRhaW5pbmcgXCJzY3JvbGwgaW50byB2aWV3XCIgYmVoYXZpb3VyXG4gICAgICAgIGxlZnQ6IC0xMDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSguMDEpJyxcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cbiJdfQ== */")
  }));
}
var cancelScroll = function cancelScroll2(event) {
  if (event.cancelable)
    event.preventDefault();
  event.stopPropagation();
};
function useScrollCapture(_ref3) {
  var isEnabled = _ref3.isEnabled, onBottomArrive = _ref3.onBottomArrive, onBottomLeave = _ref3.onBottomLeave, onTopArrive = _ref3.onTopArrive, onTopLeave = _ref3.onTopLeave;
  var isBottom = reactExports.useRef(false);
  var isTop = reactExports.useRef(false);
  var touchStart = reactExports.useRef(0);
  var scrollTarget = reactExports.useRef(null);
  var handleEventDelta = reactExports.useCallback(function(event, delta) {
    if (scrollTarget.current === null)
      return;
    var _scrollTarget$current = scrollTarget.current, scrollTop = _scrollTarget$current.scrollTop, scrollHeight = _scrollTarget$current.scrollHeight, clientHeight = _scrollTarget$current.clientHeight;
    var target = scrollTarget.current;
    var isDeltaPositive = delta > 0;
    var availableScroll = scrollHeight - clientHeight - scrollTop;
    var shouldCancelScroll = false;
    if (availableScroll > delta && isBottom.current) {
      if (onBottomLeave)
        onBottomLeave(event);
      isBottom.current = false;
    }
    if (isDeltaPositive && isTop.current) {
      if (onTopLeave)
        onTopLeave(event);
      isTop.current = false;
    }
    if (isDeltaPositive && delta > availableScroll) {
      if (onBottomArrive && !isBottom.current) {
        onBottomArrive(event);
      }
      target.scrollTop = scrollHeight;
      shouldCancelScroll = true;
      isBottom.current = true;
    } else if (!isDeltaPositive && -delta > scrollTop) {
      if (onTopArrive && !isTop.current) {
        onTopArrive(event);
      }
      target.scrollTop = 0;
      shouldCancelScroll = true;
      isTop.current = true;
    }
    if (shouldCancelScroll) {
      cancelScroll(event);
    }
  }, [onBottomArrive, onBottomLeave, onTopArrive, onTopLeave]);
  var onWheel = reactExports.useCallback(function(event) {
    handleEventDelta(event, event.deltaY);
  }, [handleEventDelta]);
  var onTouchStart = reactExports.useCallback(function(event) {
    touchStart.current = event.changedTouches[0].clientY;
  }, []);
  var onTouchMove = reactExports.useCallback(function(event) {
    var deltaY = touchStart.current - event.changedTouches[0].clientY;
    handleEventDelta(event, deltaY);
  }, [handleEventDelta]);
  var startListening = reactExports.useCallback(function(el) {
    if (!el)
      return;
    var notPassive = supportsPassiveEvents ? {
      passive: false
    } : false;
    el.addEventListener("wheel", onWheel, notPassive);
    el.addEventListener("touchstart", onTouchStart, notPassive);
    el.addEventListener("touchmove", onTouchMove, notPassive);
  }, [onTouchMove, onTouchStart, onWheel]);
  var stopListening = reactExports.useCallback(function(el) {
    if (!el)
      return;
    el.removeEventListener("wheel", onWheel, false);
    el.removeEventListener("touchstart", onTouchStart, false);
    el.removeEventListener("touchmove", onTouchMove, false);
  }, [onTouchMove, onTouchStart, onWheel]);
  reactExports.useEffect(function() {
    if (!isEnabled)
      return;
    var element = scrollTarget.current;
    startListening(element);
    return function() {
      stopListening(element);
    };
  }, [isEnabled, startListening, stopListening]);
  return function(element) {
    scrollTarget.current = element;
  };
}
var STYLE_KEYS = ["boxSizing", "height", "overflow", "paddingRight", "position"];
var LOCK_STYLES = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function preventTouchMove(e) {
  if (e.cancelable)
    e.preventDefault();
}
function allowTouchMove(e) {
  e.stopPropagation();
}
function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;
  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
}
function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var activeScrollLocks = 0;
var listenerOptions = {
  capture: false,
  passive: false
};
function useScrollLock(_ref3) {
  var isEnabled = _ref3.isEnabled, _ref$accountForScroll = _ref3.accountForScrollbars, accountForScrollbars = _ref$accountForScroll === void 0 ? true : _ref$accountForScroll;
  var originalStyles = reactExports.useRef({});
  var scrollTarget = reactExports.useRef(null);
  var addScrollLock = reactExports.useCallback(function(touchScrollTarget) {
    if (!canUseDOM)
      return;
    var target = document.body;
    var targetStyle = target && target.style;
    if (accountForScrollbars) {
      STYLE_KEYS.forEach(function(key) {
        var val = targetStyle && targetStyle[key];
        originalStyles.current[key] = val;
      });
    }
    if (accountForScrollbars && activeScrollLocks < 1) {
      var currentPadding = parseInt(originalStyles.current.paddingRight, 10) || 0;
      var clientWidth = document.body ? document.body.clientWidth : 0;
      var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
      Object.keys(LOCK_STYLES).forEach(function(key) {
        var val = LOCK_STYLES[key];
        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
      if (targetStyle) {
        targetStyle.paddingRight = "".concat(adjustedPadding, "px");
      }
    }
    if (target && isTouchDevice()) {
      target.addEventListener("touchmove", preventTouchMove, listenerOptions);
      if (touchScrollTarget) {
        touchScrollTarget.addEventListener("touchstart", preventInertiaScroll, listenerOptions);
        touchScrollTarget.addEventListener("touchmove", allowTouchMove, listenerOptions);
      }
    }
    activeScrollLocks += 1;
  }, [accountForScrollbars]);
  var removeScrollLock = reactExports.useCallback(function(touchScrollTarget) {
    if (!canUseDOM)
      return;
    var target = document.body;
    var targetStyle = target && target.style;
    activeScrollLocks = Math.max(activeScrollLocks - 1, 0);
    if (accountForScrollbars && activeScrollLocks < 1) {
      STYLE_KEYS.forEach(function(key) {
        var val = originalStyles.current[key];
        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
    }
    if (target && isTouchDevice()) {
      target.removeEventListener("touchmove", preventTouchMove, listenerOptions);
      if (touchScrollTarget) {
        touchScrollTarget.removeEventListener("touchstart", preventInertiaScroll, listenerOptions);
        touchScrollTarget.removeEventListener("touchmove", allowTouchMove, listenerOptions);
      }
    }
  }, [accountForScrollbars]);
  reactExports.useEffect(function() {
    if (!isEnabled)
      return;
    var element = scrollTarget.current;
    addScrollLock(element);
    return function() {
      removeScrollLock(element);
    };
  }, [isEnabled, addScrollLock, removeScrollLock]);
  return function(element) {
    scrollTarget.current = element;
  };
}
function _EMOTION_STRINGIFIED_CSS_ERROR__$1() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var blurSelectInput = function blurSelectInput2(event) {
  var element = event.target;
  return element.ownerDocument.activeElement && element.ownerDocument.activeElement.blur();
};
var _ref2$1 = {
  name: "bp8cua-ScrollManager",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2ssIE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9IChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgcmV0dXJuIChcbiAgICBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuICAgIChlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuYmx1cigpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxNYW5hZ2VyKHtcbiAgY2hpbGRyZW4sXG4gIGxvY2tFbmFibGVkLFxuICBjYXB0dXJlRW5hYmxlZCA9IHRydWUsXG4gIG9uQm90dG9tQXJyaXZlLFxuICBvbkJvdHRvbUxlYXZlLFxuICBvblRvcEFycml2ZSxcbiAgb25Ub3BMZWF2ZSxcbn06IFByb3BzKSB7XG4gIGNvbnN0IHNldFNjcm9sbENhcHR1cmVUYXJnZXQgPSB1c2VTY3JvbGxDYXB0dXJlKHtcbiAgICBpc0VuYWJsZWQ6IGNhcHR1cmVFbmFibGVkLFxuICAgIG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmUsXG4gICAgb25Ub3BMZWF2ZSxcbiAgfSk7XG4gIGNvbnN0IHNldFNjcm9sbExvY2tUYXJnZXQgPSB1c2VTY3JvbGxMb2NrKHsgaXNFbmFibGVkOiBsb2NrRW5hYmxlZCB9KTtcblxuICBjb25zdCB0YXJnZXRSZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PiA9IChlbGVtZW50KSA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
};
function ScrollManager(_ref3) {
  var children = _ref3.children, lockEnabled = _ref3.lockEnabled, _ref$captureEnabled = _ref3.captureEnabled, captureEnabled = _ref$captureEnabled === void 0 ? true : _ref$captureEnabled, onBottomArrive = _ref3.onBottomArrive, onBottomLeave = _ref3.onBottomLeave, onTopArrive = _ref3.onTopArrive, onTopLeave = _ref3.onTopLeave;
  var setScrollCaptureTarget = useScrollCapture({
    isEnabled: captureEnabled,
    onBottomArrive,
    onBottomLeave,
    onTopArrive,
    onTopLeave
  });
  var setScrollLockTarget = useScrollLock({
    isEnabled: lockEnabled
  });
  var targetRef = function targetRef2(element) {
    setScrollCaptureTarget(element);
    setScrollLockTarget(element);
  };
  return jsx(reactExports.Fragment, null, lockEnabled && jsx("div", {
    onClick: blurSelectInput,
    css: _ref2$1
  }), children(targetRef));
}
function _EMOTION_STRINGIFIED_CSS_ERROR__() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var _ref2 = {
  name: "5kkxb2-requiredInput-RequiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%;label:RequiredInput;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVpcmVkSW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNJIiwiZmlsZSI6IlJlcXVpcmVkSW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBGb2N1c0V2ZW50SGFuZGxlciwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IFJlcXVpcmVkSW5wdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgcmVhZG9ubHkgb25Gb2N1czogRm9jdXNFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD47XG59PiA9ICh7IG5hbWUsIG9uRm9jdXMgfSkgPT4gKFxuICA8aW5wdXRcbiAgICByZXF1aXJlZFxuICAgIG5hbWU9e25hbWV9XG4gICAgdGFiSW5kZXg9ey0xfVxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAncmVxdWlyZWRJbnB1dCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH19XG4gICAgLy8gUHJldmVudCBgU3dpdGNoaW5nIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWRgIGVycm9yXG4gICAgdmFsdWU9XCJcIlxuICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkSW5wdXQ7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
var RequiredInput = function RequiredInput2(_ref3) {
  var name = _ref3.name, onFocus2 = _ref3.onFocus;
  return jsx("input", {
    required: true,
    name,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: onFocus2,
    css: _ref2,
    value: "",
    onChange: function onChange2() {
    }
  });
};
var RequiredInput$1 = RequiredInput;
function testPlatform(re) {
  var _window$navigator$use;
  return typeof window !== "undefined" && window.navigator != null ? re.test(((_window$navigator$use = window.navigator["userAgentData"]) === null || _window$navigator$use === void 0 ? void 0 : _window$navigator$use.platform) || window.navigator.platform) : false;
}
function isIPhone() {
  return testPlatform(/^iPhone/i);
}
function isMac() {
  return testPlatform(/^Mac/i);
}
function isIPad() {
  return testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  isMac() && navigator.maxTouchPoints > 1;
}
function isIOS() {
  return isIPhone() || isIPad();
}
function isAppleDevice() {
  return isMac() || isIOS();
}
var formatGroupLabel = function formatGroupLabel2(group) {
  return group.label;
};
var getOptionLabel$1 = function getOptionLabel(option) {
  return option.label;
};
var getOptionValue$1 = function getOptionValue(option) {
  return option.value;
};
var isOptionDisabled = function isOptionDisabled2(option) {
  return !!option.isDisabled;
};
var defaultStyles = {
  clearIndicator: clearIndicatorCSS,
  container: containerCSS,
  control: css$1,
  dropdownIndicator: dropdownIndicatorCSS,
  group: groupCSS,
  groupHeading: groupHeadingCSS,
  indicatorsContainer: indicatorsContainerCSS,
  indicatorSeparator: indicatorSeparatorCSS,
  input: inputCSS,
  loadingIndicator: loadingIndicatorCSS,
  loadingMessage: loadingMessageCSS,
  menu: menuCSS,
  menuList: menuListCSS,
  menuPortal: menuPortalCSS,
  multiValue: multiValueCSS,
  multiValueLabel: multiValueLabelCSS,
  multiValueRemove: multiValueRemoveCSS,
  noOptionsMessage: noOptionsMessageCSS,
  option: optionCSS,
  placeholder: placeholderCSS,
  singleValue: css2,
  valueContainer: valueContainerCSS
};
var colors = {
  primary: "#2684FF",
  primary75: "#4C9AFF",
  primary50: "#B2D4FF",
  primary25: "#DEEBFF",
  danger: "#DE350B",
  dangerLight: "#FFBDAD",
  neutral0: "hsl(0, 0%, 100%)",
  neutral5: "hsl(0, 0%, 95%)",
  neutral10: "hsl(0, 0%, 90%)",
  neutral20: "hsl(0, 0%, 80%)",
  neutral30: "hsl(0, 0%, 70%)",
  neutral40: "hsl(0, 0%, 60%)",
  neutral50: "hsl(0, 0%, 50%)",
  neutral60: "hsl(0, 0%, 40%)",
  neutral70: "hsl(0, 0%, 30%)",
  neutral80: "hsl(0, 0%, 20%)",
  neutral90: "hsl(0, 0%, 10%)"
};
var borderRadius = 4;
var baseUnit = 4;
var controlHeight = 38;
var menuGutter = baseUnit * 2;
var spacing = {
  baseUnit,
  controlHeight,
  menuGutter
};
var defaultTheme = {
  borderRadius,
  colors,
  spacing
};
var defaultProps = {
  "aria-live": "polite",
  backspaceRemovesValue: true,
  blurInputOnSelect: isTouchCapable(),
  captureMenuScroll: !isTouchCapable(),
  classNames: {},
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel,
  getOptionLabel: getOptionLabel$1,
  getOptionValue: getOptionValue$1,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !isMobileDevice(),
  noOptionsMessage: function noOptionsMessage() {
    return "No options";
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: "Select...",
  screenReaderStatus: function screenReaderStatus(_ref3) {
    var count = _ref3.count;
    return "".concat(count, " result").concat(count !== 1 ? "s" : "", " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: true,
  unstyled: false
};
function toCategorizedOption(props, option, selectValue, index2) {
  var isDisabled = _isOptionDisabled(props, option, selectValue);
  var isSelected = _isOptionSelected(props, option, selectValue);
  var label = getOptionLabel2(props, option);
  var value = getOptionValue2(props, option);
  return {
    type: "option",
    data: option,
    isDisabled,
    isSelected,
    label,
    value,
    index: index2
  };
}
function buildCategorizedOptions(props, selectValue) {
  return props.options.map(function(groupOrOption, groupOrOptionIndex) {
    if ("options" in groupOrOption) {
      var categorizedOptions = groupOrOption.options.map(function(option, optionIndex) {
        return toCategorizedOption(props, option, selectValue, optionIndex);
      }).filter(function(categorizedOption2) {
        return isFocusable(props, categorizedOption2);
      });
      return categorizedOptions.length > 0 ? {
        type: "group",
        data: groupOrOption,
        options: categorizedOptions,
        index: groupOrOptionIndex
      } : void 0;
    }
    var categorizedOption = toCategorizedOption(props, groupOrOption, selectValue, groupOrOptionIndex);
    return isFocusable(props, categorizedOption) ? categorizedOption : void 0;
  }).filter(notNullish);
}
function buildFocusableOptionsFromCategorizedOptions(categorizedOptions) {
  return categorizedOptions.reduce(function(optionsAccumulator, categorizedOption) {
    if (categorizedOption.type === "group") {
      optionsAccumulator.push.apply(optionsAccumulator, _toConsumableArray(categorizedOption.options.map(function(option) {
        return option.data;
      })));
    } else {
      optionsAccumulator.push(categorizedOption.data);
    }
    return optionsAccumulator;
  }, []);
}
function buildFocusableOptionsWithIds(categorizedOptions, optionId) {
  return categorizedOptions.reduce(function(optionsAccumulator, categorizedOption) {
    if (categorizedOption.type === "group") {
      optionsAccumulator.push.apply(optionsAccumulator, _toConsumableArray(categorizedOption.options.map(function(option) {
        return {
          data: option.data,
          id: "".concat(optionId, "-").concat(categorizedOption.index, "-").concat(option.index)
        };
      })));
    } else {
      optionsAccumulator.push({
        data: categorizedOption.data,
        id: "".concat(optionId, "-").concat(categorizedOption.index)
      });
    }
    return optionsAccumulator;
  }, []);
}
function buildFocusableOptions(props, selectValue) {
  return buildFocusableOptionsFromCategorizedOptions(buildCategorizedOptions(props, selectValue));
}
function isFocusable(props, categorizedOption) {
  var _props$inputValue = props.inputValue, inputValue = _props$inputValue === void 0 ? "" : _props$inputValue;
  var data = categorizedOption.data, isSelected = categorizedOption.isSelected, label = categorizedOption.label, value = categorizedOption.value;
  return (!shouldHideSelectedOptions(props) || !isSelected) && _filterOption(props, {
    label,
    value,
    data
  }, inputValue);
}
function getNextFocusedValue(state, nextSelectValue) {
  var focusedValue = state.focusedValue, lastSelectValue = state.selectValue;
  var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);
  if (lastFocusedIndex > -1) {
    var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);
    if (nextFocusedIndex > -1) {
      return focusedValue;
    } else if (lastFocusedIndex < nextSelectValue.length) {
      return nextSelectValue[lastFocusedIndex];
    }
  }
  return null;
}
function getNextFocusedOption(state, options2) {
  var lastFocusedOption = state.focusedOption;
  return lastFocusedOption && options2.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options2[0];
}
var getFocusedOptionId = function getFocusedOptionId2(focusableOptionsWithIds, focusedOption) {
  var _focusableOptionsWith;
  var focusedOptionId = (_focusableOptionsWith = focusableOptionsWithIds.find(function(option) {
    return option.data === focusedOption;
  })) === null || _focusableOptionsWith === void 0 ? void 0 : _focusableOptionsWith.id;
  return focusedOptionId || null;
};
var getOptionLabel2 = function getOptionLabel3(props, data) {
  return props.getOptionLabel(data);
};
var getOptionValue2 = function getOptionValue3(props, data) {
  return props.getOptionValue(data);
};
function _isOptionDisabled(props, option, selectValue) {
  return typeof props.isOptionDisabled === "function" ? props.isOptionDisabled(option, selectValue) : false;
}
function _isOptionSelected(props, option, selectValue) {
  if (selectValue.indexOf(option) > -1)
    return true;
  if (typeof props.isOptionSelected === "function") {
    return props.isOptionSelected(option, selectValue);
  }
  var candidate = getOptionValue2(props, option);
  return selectValue.some(function(i) {
    return getOptionValue2(props, i) === candidate;
  });
}
function _filterOption(props, option, inputValue) {
  return props.filterOption ? props.filterOption(option, inputValue) : true;
}
var shouldHideSelectedOptions = function shouldHideSelectedOptions2(props) {
  var hideSelectedOptions = props.hideSelectedOptions, isMulti = props.isMulti;
  if (hideSelectedOptions === void 0)
    return isMulti;
  return hideSelectedOptions;
};
var instanceId = 1;
var Select = /* @__PURE__ */ function(_Component) {
  _inherits(Select2, _Component);
  var _super = _createSuper(Select2);
  function Select2(_props) {
    var _this;
    _classCallCheck(this, Select2);
    _this = _super.call(this, _props);
    _this.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedOptionId: null,
      focusableOptionsWithIds: [],
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      selectValue: [],
      clearFocusValueOnUpdate: false,
      prevWasFocused: false,
      inputIsHiddenAfterUpdate: void 0,
      prevProps: void 0,
      instancePrefix: ""
    };
    _this.blockOptionHover = false;
    _this.isComposing = false;
    _this.commonProps = void 0;
    _this.initialTouchX = 0;
    _this.initialTouchY = 0;
    _this.openAfterFocus = false;
    _this.scrollToFocusedOptionOnUpdate = false;
    _this.userIsDragging = void 0;
    _this.isAppleDevice = isAppleDevice();
    _this.controlRef = null;
    _this.getControlRef = function(ref) {
      _this.controlRef = ref;
    };
    _this.focusedOptionRef = null;
    _this.getFocusedOptionRef = function(ref) {
      _this.focusedOptionRef = ref;
    };
    _this.menuListRef = null;
    _this.getMenuListRef = function(ref) {
      _this.menuListRef = ref;
    };
    _this.inputRef = null;
    _this.getInputRef = function(ref) {
      _this.inputRef = ref;
    };
    _this.focus = _this.focusInput;
    _this.blur = _this.blurInput;
    _this.onChange = function(newValue, actionMeta) {
      var _this$props = _this.props, onChange2 = _this$props.onChange, name = _this$props.name;
      actionMeta.name = name;
      _this.ariaOnChange(newValue, actionMeta);
      onChange2(newValue, actionMeta);
    };
    _this.setValue = function(newValue, action, option) {
      var _this$props2 = _this.props, closeMenuOnSelect = _this$props2.closeMenuOnSelect, isMulti = _this$props2.isMulti, inputValue = _this$props2.inputValue;
      _this.onInputChange("", {
        action: "set-value",
        prevInputValue: inputValue
      });
      if (closeMenuOnSelect) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });
        _this.onMenuClose();
      }
      _this.setState({
        clearFocusValueOnUpdate: true
      });
      _this.onChange(newValue, {
        action,
        option
      });
    };
    _this.selectOption = function(newValue) {
      var _this$props3 = _this.props, blurInputOnSelect = _this$props3.blurInputOnSelect, isMulti = _this$props3.isMulti, name = _this$props3.name;
      var selectValue = _this.state.selectValue;
      var deselected = isMulti && _this.isOptionSelected(newValue, selectValue);
      var isDisabled = _this.isOptionDisabled(newValue, selectValue);
      if (deselected) {
        var candidate = _this.getOptionValue(newValue);
        _this.setValue(multiValueAsValue(selectValue.filter(function(i) {
          return _this.getOptionValue(i) !== candidate;
        })), "deselect-option", newValue);
      } else if (!isDisabled) {
        if (isMulti) {
          _this.setValue(multiValueAsValue([].concat(_toConsumableArray(selectValue), [newValue])), "select-option", newValue);
        } else {
          _this.setValue(singleValueAsValue(newValue), "select-option");
        }
      } else {
        _this.ariaOnChange(singleValueAsValue(newValue), {
          action: "select-option",
          option: newValue,
          name
        });
        return;
      }
      if (blurInputOnSelect) {
        _this.blurInput();
      }
    };
    _this.removeValue = function(removedValue) {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var candidate = _this.getOptionValue(removedValue);
      var newValueArray = selectValue.filter(function(i) {
        return _this.getOptionValue(i) !== candidate;
      });
      var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
      _this.onChange(newValue, {
        action: "remove-value",
        removedValue
      });
      _this.focusInput();
    };
    _this.clearValue = function() {
      var selectValue = _this.state.selectValue;
      _this.onChange(valueTernary(_this.props.isMulti, [], null), {
        action: "clear",
        removedValues: selectValue
      });
    };
    _this.popValue = function() {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];
      var newValueArray = selectValue.slice(0, selectValue.length - 1);
      var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
      if (lastSelectedValue) {
        _this.onChange(newValue, {
          action: "pop-value",
          removedValue: lastSelectedValue
        });
      }
    };
    _this.getFocusedOptionId = function(focusedOption) {
      return getFocusedOptionId(_this.state.focusableOptionsWithIds, focusedOption);
    };
    _this.getFocusableOptionsWithIds = function() {
      return buildFocusableOptionsWithIds(buildCategorizedOptions(_this.props, _this.state.selectValue), _this.getElementId("option"));
    };
    _this.getValue = function() {
      return _this.state.selectValue;
    };
    _this.cx = function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return classNames.apply(void 0, [_this.props.classNamePrefix].concat(args));
    };
    _this.getOptionLabel = function(data) {
      return getOptionLabel2(_this.props, data);
    };
    _this.getOptionValue = function(data) {
      return getOptionValue2(_this.props, data);
    };
    _this.getStyles = function(key, props) {
      var unstyled = _this.props.unstyled;
      var base = defaultStyles[key](props, unstyled);
      base.boxSizing = "border-box";
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    };
    _this.getClassNames = function(key, props) {
      var _this$props$className, _this$props$className2;
      return (_this$props$className = (_this$props$className2 = _this.props.classNames)[key]) === null || _this$props$className === void 0 ? void 0 : _this$props$className.call(_this$props$className2, props);
    };
    _this.getElementId = function(element) {
      return "".concat(_this.state.instancePrefix, "-").concat(element);
    };
    _this.getComponents = function() {
      return defaultComponents(_this.props);
    };
    _this.buildCategorizedOptions = function() {
      return buildCategorizedOptions(_this.props, _this.state.selectValue);
    };
    _this.getCategorizedOptions = function() {
      return _this.props.menuIsOpen ? _this.buildCategorizedOptions() : [];
    };
    _this.buildFocusableOptions = function() {
      return buildFocusableOptionsFromCategorizedOptions(_this.buildCategorizedOptions());
    };
    _this.getFocusableOptions = function() {
      return _this.props.menuIsOpen ? _this.buildFocusableOptions() : [];
    };
    _this.ariaOnChange = function(value, actionMeta) {
      _this.setState({
        ariaSelection: _objectSpread2({
          value
        }, actionMeta)
      });
    };
    _this.onMenuMouseDown = function(event) {
      if (event.button !== 0) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      _this.focusInput();
    };
    _this.onMenuMouseMove = function(event) {
      _this.blockOptionHover = false;
    };
    _this.onControlMouseDown = function(event) {
      if (event.defaultPrevented) {
        return;
      }
      var openMenuOnClick = _this.props.openMenuOnClick;
      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }
        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu("first");
        }
      } else {
        if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") {
          _this.onMenuClose();
        }
      }
      if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") {
        event.preventDefault();
      }
    };
    _this.onDropdownIndicatorMouseDown = function(event) {
      if (event && event.type === "mousedown" && event.button !== 0) {
        return;
      }
      if (_this.props.isDisabled)
        return;
      var _this$props4 = _this.props, isMulti = _this$props4.isMulti, menuIsOpen = _this$props4.menuIsOpen;
      _this.focusInput();
      if (menuIsOpen) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });
        _this.onMenuClose();
      } else {
        _this.openMenu("first");
      }
      event.preventDefault();
    };
    _this.onClearIndicatorMouseDown = function(event) {
      if (event && event.type === "mousedown" && event.button !== 0) {
        return;
      }
      _this.clearValue();
      event.preventDefault();
      _this.openAfterFocus = false;
      if (event.type === "touchend") {
        _this.focusInput();
      } else {
        setTimeout(function() {
          return _this.focusInput();
        });
      }
    };
    _this.onScroll = function(event) {
      if (typeof _this.props.closeMenuOnScroll === "boolean") {
        if (event.target instanceof HTMLElement && isDocumentElement(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === "function") {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    };
    _this.onCompositionStart = function() {
      _this.isComposing = true;
    };
    _this.onCompositionEnd = function() {
      _this.isComposing = false;
    };
    _this.onTouchStart = function(_ref22) {
      var touches = _ref22.touches;
      var touch = touches && touches.item(0);
      if (!touch) {
        return;
      }
      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    };
    _this.onTouchMove = function(_ref3) {
      var touches = _ref3.touches;
      var touch = touches && touches.item(0);
      if (!touch) {
        return;
      }
      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    };
    _this.onTouchEnd = function(event) {
      if (_this.userIsDragging)
        return;
      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      }
      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    };
    _this.onControlTouchEnd = function(event) {
      if (_this.userIsDragging)
        return;
      _this.onControlMouseDown(event);
    };
    _this.onClearIndicatorTouchEnd = function(event) {
      if (_this.userIsDragging)
        return;
      _this.onClearIndicatorMouseDown(event);
    };
    _this.onDropdownIndicatorTouchEnd = function(event) {
      if (_this.userIsDragging)
        return;
      _this.onDropdownIndicatorMouseDown(event);
    };
    _this.handleInputChange = function(event) {
      var prevInputValue = _this.props.inputValue;
      var inputValue = event.currentTarget.value;
      _this.setState({
        inputIsHiddenAfterUpdate: false
      });
      _this.onInputChange(inputValue, {
        action: "input-change",
        prevInputValue
      });
      if (!_this.props.menuIsOpen) {
        _this.onMenuOpen();
      }
    };
    _this.onInputFocus = function(event) {
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
      _this.setState({
        inputIsHiddenAfterUpdate: false,
        isFocused: true
      });
      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu("first");
      }
      _this.openAfterFocus = false;
    };
    _this.onInputBlur = function(event) {
      var prevInputValue = _this.props.inputValue;
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();
        return;
      }
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
      _this.onInputChange("", {
        action: "input-blur",
        prevInputValue
      });
      _this.onMenuClose();
      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    };
    _this.onOptionHover = function(focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }
      var options2 = _this.getFocusableOptions();
      var focusedOptionIndex = options2.indexOf(focusedOption);
      _this.setState({
        focusedOption,
        focusedOptionId: focusedOptionIndex > -1 ? _this.getFocusedOptionId(focusedOption) : null
      });
    };
    _this.shouldHideSelectedOptions = function() {
      return shouldHideSelectedOptions(_this.props);
    };
    _this.onValueInputFocus = function(e) {
      e.preventDefault();
      e.stopPropagation();
      _this.focus();
    };
    _this.onKeyDown = function(event) {
      var _this$props5 = _this.props, isMulti = _this$props5.isMulti, backspaceRemovesValue = _this$props5.backspaceRemovesValue, escapeClearsValue = _this$props5.escapeClearsValue, inputValue = _this$props5.inputValue, isClearable = _this$props5.isClearable, isDisabled = _this$props5.isDisabled, menuIsOpen = _this$props5.menuIsOpen, onKeyDown = _this$props5.onKeyDown, tabSelectsValue = _this$props5.tabSelectsValue, openMenuOnFocus = _this$props5.openMenuOnFocus;
      var _this$state = _this.state, focusedOption = _this$state.focusedOption, focusedValue = _this$state.focusedValue, selectValue = _this$state.selectValue;
      if (isDisabled)
        return;
      if (typeof onKeyDown === "function") {
        onKeyDown(event);
        if (event.defaultPrevented) {
          return;
        }
      }
      _this.blockOptionHover = true;
      switch (event.key) {
        case "ArrowLeft":
          if (!isMulti || inputValue)
            return;
          _this.focusValue("previous");
          break;
        case "ArrowRight":
          if (!isMulti || inputValue)
            return;
          _this.focusValue("next");
          break;
        case "Delete":
        case "Backspace":
          if (inputValue)
            return;
          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue)
              return;
            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }
          break;
        case "Tab":
          if (_this.isComposing)
            return;
          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || // don't capture the event if the menu opens on focus and the focused
          // option is already selected; it breaks the flow of navigation
          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }
          _this.selectOption(focusedOption);
          break;
        case "Enter":
          if (event.keyCode === 229) {
            break;
          }
          if (menuIsOpen) {
            if (!focusedOption)
              return;
            if (_this.isComposing)
              return;
            _this.selectOption(focusedOption);
            break;
          }
          return;
        case "Escape":
          if (menuIsOpen) {
            _this.setState({
              inputIsHiddenAfterUpdate: false
            });
            _this.onInputChange("", {
              action: "menu-close",
              prevInputValue: inputValue
            });
            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }
          break;
        case " ":
          if (inputValue) {
            return;
          }
          if (!menuIsOpen) {
            _this.openMenu("first");
            break;
          }
          if (!focusedOption)
            return;
          _this.selectOption(focusedOption);
          break;
        case "ArrowUp":
          if (menuIsOpen) {
            _this.focusOption("up");
          } else {
            _this.openMenu("last");
          }
          break;
        case "ArrowDown":
          if (menuIsOpen) {
            _this.focusOption("down");
          } else {
            _this.openMenu("first");
          }
          break;
        case "PageUp":
          if (!menuIsOpen)
            return;
          _this.focusOption("pageup");
          break;
        case "PageDown":
          if (!menuIsOpen)
            return;
          _this.focusOption("pagedown");
          break;
        case "Home":
          if (!menuIsOpen)
            return;
          _this.focusOption("first");
          break;
        case "End":
          if (!menuIsOpen)
            return;
          _this.focusOption("last");
          break;
        default:
          return;
      }
      event.preventDefault();
    };
    _this.state.instancePrefix = "react-select-" + (_this.props.instanceId || ++instanceId);
    _this.state.selectValue = cleanValue(_props.value);
    if (_props.menuIsOpen && _this.state.selectValue.length) {
      var focusableOptionsWithIds = _this.getFocusableOptionsWithIds();
      var focusableOptions = _this.buildFocusableOptions();
      var optionIndex = focusableOptions.indexOf(_this.state.selectValue[0]);
      _this.state.focusableOptionsWithIds = focusableOptionsWithIds;
      _this.state.focusedOption = focusableOptions[optionIndex];
      _this.state.focusedOptionId = getFocusedOptionId(focusableOptionsWithIds, focusableOptions[optionIndex]);
    }
    return _this;
  }
  _createClass(Select2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListeningComposition();
      this.startListeningToTouch();
      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
        document.addEventListener("scroll", this.onScroll, true);
      }
      if (this.props.autoFocus) {
        this.focusInput();
      }
      if (this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props6 = this.props, isDisabled = _this$props6.isDisabled, menuIsOpen = _this$props6.menuIsOpen;
      var isFocused = this.state.isFocused;
      if (
        // ensure focus is restored correctly when the control becomes enabled
        isFocused && !isDisabled && prevProps.isDisabled || // ensure focus is on the Input when the menu opens
        isFocused && menuIsOpen && !prevProps.menuIsOpen
      ) {
        this.focusInput();
      }
      if (isFocused && isDisabled && !prevProps.isDisabled) {
        this.setState({
          isFocused: false
        }, this.onMenuClose);
      } else if (!isFocused && !isDisabled && prevProps.isDisabled && this.inputRef === document.activeElement) {
        this.setState({
          isFocused: true
        });
      }
      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
        this.scrollToFocusedOptionOnUpdate = false;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListeningComposition();
      this.stopListeningToTouch();
      document.removeEventListener("scroll", this.onScroll, true);
    }
    // ==============================
    // Consumer Handlers
    // ==============================
  }, {
    key: "onMenuOpen",
    value: function onMenuOpen() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function onMenuClose() {
      this.onInputChange("", {
        action: "menu-close",
        prevInputValue: this.props.inputValue
      });
      this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    }
    // ==============================
    // Methods
    // ==============================
  }, {
    key: "focusInput",
    value: function focusInput() {
      if (!this.inputRef)
        return;
      this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function blurInput() {
      if (!this.inputRef)
        return;
      this.inputRef.blur();
    }
    // aliased for consumers
  }, {
    key: "openMenu",
    value: function openMenu(focusOption) {
      var _this2 = this;
      var _this$state2 = this.state, selectValue = _this$state2.selectValue, isFocused = _this$state2.isFocused;
      var focusableOptions = this.buildFocusableOptions();
      var openAtIndex = focusOption === "first" ? 0 : focusableOptions.length - 1;
      if (!this.props.isMulti) {
        var selectedIndex = focusableOptions.indexOf(selectValue[0]);
        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      }
      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
      this.setState({
        inputIsHiddenAfterUpdate: false,
        focusedValue: null,
        focusedOption: focusableOptions[openAtIndex],
        focusedOptionId: this.getFocusedOptionId(focusableOptions[openAtIndex])
      }, function() {
        return _this2.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function focusValue(direction) {
      var _this$state3 = this.state, selectValue = _this$state3.selectValue, focusedValue = _this$state3.focusedValue;
      if (!this.props.isMulti)
        return;
      this.setState({
        focusedOption: null
      });
      var focusedIndex = selectValue.indexOf(focusedValue);
      if (!focusedValue) {
        focusedIndex = -1;
      }
      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length)
        return;
      switch (direction) {
        case "previous":
          if (focusedIndex === 0) {
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }
          break;
        case "next":
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }
          break;
      }
      this.setState({
        inputIsHidden: nextFocus !== -1,
        focusedValue: selectValue[nextFocus]
      });
    }
  }, {
    key: "focusOption",
    value: function focusOption() {
      var direction = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first";
      var pageSize = this.props.pageSize;
      var focusedOption = this.state.focusedOption;
      var options2 = this.getFocusableOptions();
      if (!options2.length)
        return;
      var nextFocus = 0;
      var focusedIndex = options2.indexOf(focusedOption);
      if (!focusedOption) {
        focusedIndex = -1;
      }
      if (direction === "up") {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options2.length - 1;
      } else if (direction === "down") {
        nextFocus = (focusedIndex + 1) % options2.length;
      } else if (direction === "pageup") {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0)
          nextFocus = 0;
      } else if (direction === "pagedown") {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options2.length - 1)
          nextFocus = options2.length - 1;
      } else if (direction === "last") {
        nextFocus = options2.length - 1;
      }
      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options2[nextFocus],
        focusedValue: null,
        focusedOptionId: this.getFocusedOptionId(options2[nextFocus])
      });
    }
  }, {
    key: "getTheme",
    value: (
      // ==============================
      // Getters
      // ==============================
      function getTheme() {
        if (!this.props.theme) {
          return defaultTheme;
        }
        if (typeof this.props.theme === "function") {
          return this.props.theme(defaultTheme);
        }
        return _objectSpread2(_objectSpread2({}, defaultTheme), this.props.theme);
      }
    )
  }, {
    key: "getCommonProps",
    value: function getCommonProps() {
      var clearValue = this.clearValue, cx = this.cx, getStyles = this.getStyles, getClassNames = this.getClassNames, getValue = this.getValue, selectOption = this.selectOption, setValue = this.setValue, props = this.props;
      var isMulti = props.isMulti, isRtl = props.isRtl, options2 = props.options;
      var hasValue = this.hasValue();
      return {
        clearValue,
        cx,
        getStyles,
        getClassNames,
        getValue,
        hasValue,
        isMulti,
        isRtl,
        options: options2,
        selectOption,
        selectProps: props,
        setValue,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      var selectValue = this.state.selectValue;
      return selectValue.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function hasOptions() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function isClearable() {
      var _this$props7 = this.props, isClearable2 = _this$props7.isClearable, isMulti = _this$props7.isMulti;
      if (isClearable2 === void 0)
        return isMulti;
      return isClearable2;
    }
  }, {
    key: "isOptionDisabled",
    value: function isOptionDisabled3(option, selectValue) {
      return _isOptionDisabled(this.props, option, selectValue);
    }
  }, {
    key: "isOptionSelected",
    value: function isOptionSelected(option, selectValue) {
      return _isOptionSelected(this.props, option, selectValue);
    }
  }, {
    key: "filterOption",
    value: function filterOption(option, inputValue) {
      return _filterOption(this.props, option, inputValue);
    }
  }, {
    key: "formatOptionLabel",
    value: function formatOptionLabel(data, context) {
      if (typeof this.props.formatOptionLabel === "function") {
        var _inputValue = this.props.inputValue;
        var _selectValue = this.state.selectValue;
        return this.props.formatOptionLabel(data, {
          context,
          inputValue: _inputValue,
          selectValue: _selectValue
        });
      } else {
        return this.getOptionLabel(data);
      }
    }
  }, {
    key: "formatGroupLabel",
    value: function formatGroupLabel3(data) {
      return this.props.formatGroupLabel(data);
    }
    // ==============================
    // Mouse Handlers
    // ==============================
  }, {
    key: "startListeningComposition",
    value: (
      // ==============================
      // Composition Handlers
      // ==============================
      function startListeningComposition() {
        if (document && document.addEventListener) {
          document.addEventListener("compositionstart", this.onCompositionStart, false);
          document.addEventListener("compositionend", this.onCompositionEnd, false);
        }
      }
    )
  }, {
    key: "stopListeningComposition",
    value: function stopListeningComposition() {
      if (document && document.removeEventListener) {
        document.removeEventListener("compositionstart", this.onCompositionStart);
        document.removeEventListener("compositionend", this.onCompositionEnd);
      }
    }
  }, {
    key: "startListeningToTouch",
    value: (
      // ==============================
      // Touch Handlers
      // ==============================
      function startListeningToTouch() {
        if (document && document.addEventListener) {
          document.addEventListener("touchstart", this.onTouchStart, false);
          document.addEventListener("touchmove", this.onTouchMove, false);
          document.addEventListener("touchend", this.onTouchEnd, false);
        }
      }
    )
  }, {
    key: "stopListeningToTouch",
    value: function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener("touchstart", this.onTouchStart);
        document.removeEventListener("touchmove", this.onTouchMove);
        document.removeEventListener("touchend", this.onTouchEnd);
      }
    }
  }, {
    key: "renderInput",
    value: (
      // ==============================
      // Renderers
      // ==============================
      function renderInput() {
        var _this$props8 = this.props, isDisabled = _this$props8.isDisabled, isSearchable = _this$props8.isSearchable, inputId = _this$props8.inputId, inputValue = _this$props8.inputValue, tabIndex = _this$props8.tabIndex, form = _this$props8.form, menuIsOpen = _this$props8.menuIsOpen, required = _this$props8.required;
        var _this$getComponents = this.getComponents(), Input3 = _this$getComponents.Input;
        var _this$state4 = this.state, inputIsHidden = _this$state4.inputIsHidden, ariaSelection = _this$state4.ariaSelection;
        var commonProps = this.commonProps;
        var id = inputId || this.getElementId("input");
        var ariaAttributes = _objectSpread2(_objectSpread2(_objectSpread2({
          "aria-autocomplete": "list",
          "aria-expanded": menuIsOpen,
          "aria-haspopup": true,
          "aria-errormessage": this.props["aria-errormessage"],
          "aria-invalid": this.props["aria-invalid"],
          "aria-label": this.props["aria-label"],
          "aria-labelledby": this.props["aria-labelledby"],
          "aria-required": required,
          role: "combobox",
          "aria-activedescendant": this.isAppleDevice ? void 0 : this.state.focusedOptionId || ""
        }, menuIsOpen && {
          "aria-controls": this.getElementId("listbox")
        }), !isSearchable && {
          "aria-readonly": true
        }), this.hasValue() ? (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        if (!isSearchable) {
          return /* @__PURE__ */ reactExports.createElement(DummyInput, _extends({
            id,
            innerRef: this.getInputRef,
            onBlur: this.onInputBlur,
            onChange: noop,
            onFocus: this.onInputFocus,
            disabled: isDisabled,
            tabIndex,
            inputMode: "none",
            form,
            value: ""
          }, ariaAttributes));
        }
        return /* @__PURE__ */ reactExports.createElement(Input3, _extends({}, commonProps, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id,
          innerRef: this.getInputRef,
          isDisabled,
          isHidden: inputIsHidden,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex,
          form,
          type: "text",
          value: inputValue
        }, ariaAttributes));
      }
    )
  }, {
    key: "renderPlaceholderOrValue",
    value: function renderPlaceholderOrValue() {
      var _this3 = this;
      var _this$getComponents2 = this.getComponents(), MultiValue3 = _this$getComponents2.MultiValue, MultiValueContainer2 = _this$getComponents2.MultiValueContainer, MultiValueLabel2 = _this$getComponents2.MultiValueLabel, MultiValueRemove2 = _this$getComponents2.MultiValueRemove, SingleValue3 = _this$getComponents2.SingleValue, Placeholder3 = _this$getComponents2.Placeholder;
      var commonProps = this.commonProps;
      var _this$props9 = this.props, controlShouldRenderValue = _this$props9.controlShouldRenderValue, isDisabled = _this$props9.isDisabled, isMulti = _this$props9.isMulti, inputValue = _this$props9.inputValue, placeholder = _this$props9.placeholder;
      var _this$state5 = this.state, selectValue = _this$state5.selectValue, focusedValue = _this$state5.focusedValue, isFocused = _this$state5.isFocused;
      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : /* @__PURE__ */ reactExports.createElement(Placeholder3, _extends({}, commonProps, {
          key: "placeholder",
          isDisabled,
          isFocused,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), placeholder);
      }
      if (isMulti) {
        return selectValue.map(function(opt, index2) {
          var isOptionFocused = opt === focusedValue;
          var key = "".concat(_this3.getOptionLabel(opt), "-").concat(_this3.getOptionValue(opt));
          return /* @__PURE__ */ reactExports.createElement(MultiValue3, _extends({}, commonProps, {
            components: {
              Container: MultiValueContainer2,
              Label: MultiValueLabel2,
              Remove: MultiValueRemove2
            },
            isFocused: isOptionFocused,
            isDisabled,
            key,
            index: index2,
            removeProps: {
              onClick: function onClick() {
                return _this3.removeValue(opt);
              },
              onTouchEnd: function onTouchEnd() {
                return _this3.removeValue(opt);
              },
              onMouseDown: function onMouseDown(e) {
                e.preventDefault();
              }
            },
            data: opt
          }), _this3.formatOptionLabel(opt, "value"));
        });
      }
      if (inputValue) {
        return null;
      }
      var singleValue = selectValue[0];
      return /* @__PURE__ */ reactExports.createElement(SingleValue3, _extends({}, commonProps, {
        data: singleValue,
        isDisabled
      }), this.formatOptionLabel(singleValue, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function renderClearIndicator() {
      var _this$getComponents3 = this.getComponents(), ClearIndicator3 = _this$getComponents3.ClearIndicator;
      var commonProps = this.commonProps;
      var _this$props10 = this.props, isDisabled = _this$props10.isDisabled, isLoading = _this$props10.isLoading;
      var isFocused = this.state.isFocused;
      if (!this.isClearable() || !ClearIndicator3 || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }
      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ reactExports.createElement(ClearIndicator3, _extends({}, commonProps, {
        innerProps,
        isFocused
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function renderLoadingIndicator() {
      var _this$getComponents4 = this.getComponents(), LoadingIndicator3 = _this$getComponents4.LoadingIndicator;
      var commonProps = this.commonProps;
      var _this$props11 = this.props, isDisabled = _this$props11.isDisabled, isLoading = _this$props11.isLoading;
      var isFocused = this.state.isFocused;
      if (!LoadingIndicator3 || !isLoading)
        return null;
      var innerProps = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ reactExports.createElement(LoadingIndicator3, _extends({}, commonProps, {
        innerProps,
        isDisabled,
        isFocused
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function renderIndicatorSeparator() {
      var _this$getComponents5 = this.getComponents(), DropdownIndicator3 = _this$getComponents5.DropdownIndicator, IndicatorSeparator3 = _this$getComponents5.IndicatorSeparator;
      if (!DropdownIndicator3 || !IndicatorSeparator3)
        return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      return /* @__PURE__ */ reactExports.createElement(IndicatorSeparator3, _extends({}, commonProps, {
        isDisabled,
        isFocused
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function renderDropdownIndicator() {
      var _this$getComponents6 = this.getComponents(), DropdownIndicator3 = _this$getComponents6.DropdownIndicator;
      if (!DropdownIndicator3)
        return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ reactExports.createElement(DropdownIndicator3, _extends({}, commonProps, {
        innerProps,
        isDisabled,
        isFocused
      }));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this4 = this;
      var _this$getComponents7 = this.getComponents(), Group3 = _this$getComponents7.Group, GroupHeading3 = _this$getComponents7.GroupHeading, Menu3 = _this$getComponents7.Menu, MenuList3 = _this$getComponents7.MenuList, MenuPortal3 = _this$getComponents7.MenuPortal, LoadingMessage3 = _this$getComponents7.LoadingMessage, NoOptionsMessage3 = _this$getComponents7.NoOptionsMessage, Option3 = _this$getComponents7.Option;
      var commonProps = this.commonProps;
      var focusedOption = this.state.focusedOption;
      var _this$props12 = this.props, captureMenuScroll = _this$props12.captureMenuScroll, inputValue = _this$props12.inputValue, isLoading = _this$props12.isLoading, loadingMessage2 = _this$props12.loadingMessage, minMenuHeight = _this$props12.minMenuHeight, maxMenuHeight = _this$props12.maxMenuHeight, menuIsOpen = _this$props12.menuIsOpen, menuPlacement = _this$props12.menuPlacement, menuPosition = _this$props12.menuPosition, menuPortalTarget = _this$props12.menuPortalTarget, menuShouldBlockScroll = _this$props12.menuShouldBlockScroll, menuShouldScrollIntoView = _this$props12.menuShouldScrollIntoView, noOptionsMessage2 = _this$props12.noOptionsMessage, onMenuScrollToTop = _this$props12.onMenuScrollToTop, onMenuScrollToBottom = _this$props12.onMenuScrollToBottom;
      if (!menuIsOpen)
        return null;
      var render = function render2(props, id) {
        var type = props.type, data = props.data, isDisabled = props.isDisabled, isSelected = props.isSelected, label = props.label, value = props.value;
        var isFocused = focusedOption === data;
        var onHover = isDisabled ? void 0 : function() {
          return _this4.onOptionHover(data);
        };
        var onSelect = isDisabled ? void 0 : function() {
          return _this4.selectOption(data);
        };
        var optionId = "".concat(_this4.getElementId("option"), "-").concat(id);
        var innerProps = {
          id: optionId,
          onClick: onSelect,
          onMouseMove: onHover,
          onMouseOver: onHover,
          tabIndex: -1,
          role: "option",
          "aria-selected": _this4.isAppleDevice ? void 0 : isSelected
          // is not supported on Apple devices
        };
        return /* @__PURE__ */ reactExports.createElement(Option3, _extends({}, commonProps, {
          innerProps,
          data,
          isDisabled,
          isSelected,
          key: optionId,
          label,
          type,
          value,
          isFocused,
          innerRef: isFocused ? _this4.getFocusedOptionRef : void 0
        }), _this4.formatOptionLabel(props.data, "menu"));
      };
      var menuUI;
      if (this.hasOptions()) {
        menuUI = this.getCategorizedOptions().map(function(item) {
          if (item.type === "group") {
            var _data = item.data, options2 = item.options, groupIndex = item.index;
            var groupId = "".concat(_this4.getElementId("group"), "-").concat(groupIndex);
            var headingId = "".concat(groupId, "-heading");
            return /* @__PURE__ */ reactExports.createElement(Group3, _extends({}, commonProps, {
              key: groupId,
              data: _data,
              options: options2,
              Heading: GroupHeading3,
              headingProps: {
                id: headingId,
                data: item.data
              },
              label: _this4.formatGroupLabel(item.data)
            }), item.options.map(function(option) {
              return render(option, "".concat(groupIndex, "-").concat(option.index));
            }));
          } else if (item.type === "option") {
            return render(item, "".concat(item.index));
          }
        });
      } else if (isLoading) {
        var message = loadingMessage2({
          inputValue
        });
        if (message === null)
          return null;
        menuUI = /* @__PURE__ */ reactExports.createElement(LoadingMessage3, commonProps, message);
      } else {
        var _message = noOptionsMessage2({
          inputValue
        });
        if (_message === null)
          return null;
        menuUI = /* @__PURE__ */ reactExports.createElement(NoOptionsMessage3, commonProps, _message);
      }
      var menuPlacementProps = {
        minMenuHeight,
        maxMenuHeight,
        menuPlacement,
        menuPosition,
        menuShouldScrollIntoView
      };
      var menuElement = /* @__PURE__ */ reactExports.createElement(MenuPlacer, _extends({}, commonProps, menuPlacementProps), function(_ref4) {
        var ref = _ref4.ref, _ref4$placerProps = _ref4.placerProps, placement = _ref4$placerProps.placement, maxHeight = _ref4$placerProps.maxHeight;
        return /* @__PURE__ */ reactExports.createElement(Menu3, _extends({}, commonProps, menuPlacementProps, {
          innerRef: ref,
          innerProps: {
            onMouseDown: _this4.onMenuMouseDown,
            onMouseMove: _this4.onMenuMouseMove
          },
          isLoading,
          placement
        }), /* @__PURE__ */ reactExports.createElement(ScrollManager, {
          captureEnabled: captureMenuScroll,
          onTopArrive: onMenuScrollToTop,
          onBottomArrive: onMenuScrollToBottom,
          lockEnabled: menuShouldBlockScroll
        }, function(scrollTargetRef) {
          return /* @__PURE__ */ reactExports.createElement(MenuList3, _extends({}, commonProps, {
            innerRef: function innerRef(instance) {
              _this4.getMenuListRef(instance);
              scrollTargetRef(instance);
            },
            innerProps: {
              role: "listbox",
              "aria-multiselectable": commonProps.isMulti,
              id: _this4.getElementId("listbox")
            },
            isLoading,
            maxHeight,
            focusedOption
          }), menuUI);
        }));
      });
      return menuPortalTarget || menuPosition === "fixed" ? /* @__PURE__ */ reactExports.createElement(MenuPortal3, _extends({}, commonProps, {
        appendTo: menuPortalTarget,
        controlElement: this.controlRef,
        menuPlacement,
        menuPosition
      }), menuElement) : menuElement;
    }
  }, {
    key: "renderFormField",
    value: function renderFormField() {
      var _this5 = this;
      var _this$props13 = this.props, delimiter2 = _this$props13.delimiter, isDisabled = _this$props13.isDisabled, isMulti = _this$props13.isMulti, name = _this$props13.name, required = _this$props13.required;
      var selectValue = this.state.selectValue;
      if (required && !this.hasValue() && !isDisabled) {
        return /* @__PURE__ */ reactExports.createElement(RequiredInput$1, {
          name,
          onFocus: this.onValueInputFocus
        });
      }
      if (!name || isDisabled)
        return;
      if (isMulti) {
        if (delimiter2) {
          var value = selectValue.map(function(opt) {
            return _this5.getOptionValue(opt);
          }).join(delimiter2);
          return /* @__PURE__ */ reactExports.createElement("input", {
            name,
            type: "hidden",
            value
          });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function(opt, i) {
            return /* @__PURE__ */ reactExports.createElement("input", {
              key: "i-".concat(i),
              name,
              type: "hidden",
              value: _this5.getOptionValue(opt)
            });
          }) : /* @__PURE__ */ reactExports.createElement("input", {
            name,
            type: "hidden",
            value: ""
          });
          return /* @__PURE__ */ reactExports.createElement("div", null, input);
        }
      } else {
        var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : "";
        return /* @__PURE__ */ reactExports.createElement("input", {
          name,
          type: "hidden",
          value: _value
        });
      }
    }
  }, {
    key: "renderLiveRegion",
    value: function renderLiveRegion() {
      var commonProps = this.commonProps;
      var _this$state6 = this.state, ariaSelection = _this$state6.ariaSelection, focusedOption = _this$state6.focusedOption, focusedValue = _this$state6.focusedValue, isFocused = _this$state6.isFocused, selectValue = _this$state6.selectValue;
      var focusableOptions = this.getFocusableOptions();
      return /* @__PURE__ */ reactExports.createElement(LiveRegion$1, _extends({}, commonProps, {
        id: this.getElementId("live-region"),
        ariaSelection,
        focusedOption,
        focusedValue,
        isFocused,
        selectValue,
        focusableOptions,
        isAppleDevice: this.isAppleDevice
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$getComponents8 = this.getComponents(), Control3 = _this$getComponents8.Control, IndicatorsContainer3 = _this$getComponents8.IndicatorsContainer, SelectContainer3 = _this$getComponents8.SelectContainer, ValueContainer3 = _this$getComponents8.ValueContainer;
      var _this$props14 = this.props, className = _this$props14.className, id = _this$props14.id, isDisabled = _this$props14.isDisabled, menuIsOpen = _this$props14.menuIsOpen;
      var isFocused = this.state.isFocused;
      var commonProps = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ reactExports.createElement(SelectContainer3, _extends({}, commonProps, {
        className,
        innerProps: {
          id,
          onKeyDown: this.onKeyDown
        },
        isDisabled,
        isFocused
      }), this.renderLiveRegion(), /* @__PURE__ */ reactExports.createElement(Control3, _extends({}, commonProps, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled,
        isFocused,
        menuIsOpen
      }), /* @__PURE__ */ reactExports.createElement(ValueContainer3, _extends({}, commonProps, {
        isDisabled
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ reactExports.createElement(IndicatorsContainer3, _extends({}, commonProps, {
        isDisabled
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var prevProps = state.prevProps, clearFocusValueOnUpdate = state.clearFocusValueOnUpdate, inputIsHiddenAfterUpdate = state.inputIsHiddenAfterUpdate, ariaSelection = state.ariaSelection, isFocused = state.isFocused, prevWasFocused = state.prevWasFocused, instancePrefix = state.instancePrefix;
      var options2 = props.options, value = props.value, menuIsOpen = props.menuIsOpen, inputValue = props.inputValue, isMulti = props.isMulti;
      var selectValue = cleanValue(value);
      var newMenuOptionsState = {};
      if (prevProps && (value !== prevProps.value || options2 !== prevProps.options || menuIsOpen !== prevProps.menuIsOpen || inputValue !== prevProps.inputValue)) {
        var focusableOptions = menuIsOpen ? buildFocusableOptions(props, selectValue) : [];
        var focusableOptionsWithIds = menuIsOpen ? buildFocusableOptionsWithIds(buildCategorizedOptions(props, selectValue), "".concat(instancePrefix, "-option")) : [];
        var focusedValue = clearFocusValueOnUpdate ? getNextFocusedValue(state, selectValue) : null;
        var focusedOption = getNextFocusedOption(state, focusableOptions);
        var focusedOptionId = getFocusedOptionId(focusableOptionsWithIds, focusedOption);
        newMenuOptionsState = {
          selectValue,
          focusedOption,
          focusedOptionId,
          focusableOptionsWithIds,
          focusedValue,
          clearFocusValueOnUpdate: false
        };
      }
      var newInputIsHiddenState = inputIsHiddenAfterUpdate != null && props !== prevProps ? {
        inputIsHidden: inputIsHiddenAfterUpdate,
        inputIsHiddenAfterUpdate: void 0
      } : {};
      var newAriaSelection = ariaSelection;
      var hasKeptFocus = isFocused && prevWasFocused;
      if (isFocused && !hasKeptFocus) {
        newAriaSelection = {
          value: valueTernary(isMulti, selectValue, selectValue[0] || null),
          options: selectValue,
          action: "initial-input-focus"
        };
        hasKeptFocus = !prevWasFocused;
      }
      if ((ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus") {
        newAriaSelection = null;
      }
      return _objectSpread2(_objectSpread2(_objectSpread2({}, newMenuOptionsState), newInputIsHiddenState), {}, {
        prevProps: props,
        ariaSelection: newAriaSelection,
        prevWasFocused: hasKeptFocus
      });
    }
  }]);
  return Select2;
}(reactExports.Component);
Select.defaultProps = defaultProps;
var StateManagedSelect = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var baseSelectProps = useStateManager(props);
  return /* @__PURE__ */ reactExports.createElement(Select, _extends({
    ref
  }, baseSelectProps));
});
var StateManagedSelect$1 = StateManagedSelect;
const styles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    outline: state.isFocused && "1px solid var(--theme-color-focus-outline)",
    borderRadius: "0px",
    borderColor: "var(--theme-color-neutral-30)",
    paddingBlock: "12px",
    paddingInline: "12px",
    fontFamily: "var(--font-primary)",
    "&:hover": "var(--theme-color-focus-outline)"
  }),
  indicatorSeparator: () => ({
    display: "none"
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    borderRadius: "4px",
    backgroundColor: state.isSelected ? "var(--theme-color-neutral-10)" : state.isFocused ? "var(--theme-color-neutral-00)" : "none",
    color: "var(--color-pure-black)"
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    padding: "4px",
    display: "flex",
    flexDirection: "column",
    gap: "4px"
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    color: "var(--theme-color-neutral-30)"
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    fontSize: "16px"
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    zIndex: "var(--z-dropdown)"
  })
};
export {
  StateManagedSelect$1 as S,
  _setPrototypeOf as _,
  _isNativeReflectConstruct as a,
  _getPrototypeOf as b,
  _assertThisInitialized as c,
  styles as s
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RTZWxlY3RTdHlsZXMtNGJjYjRjZjUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9QcmltaXRpdmUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Qcm9wZXJ0eUtleS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvZGlzdC91c2VTdGF0ZU1hbmFnZXItN2UxZTg0ODkuZXNtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZVN1cGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zaGVldC9kaXN0L2Vtb3Rpb24tc2hlZXQuZGV2ZWxvcG1lbnQuZXNtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxpcy9zcmMvRW51bS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL1V0aWxpdHkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGlzL3NyYy9Ub2tlbml6ZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGlzL3NyYy9QYXJzZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGlzL3NyYy9TZXJpYWxpemVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxpcy9zcmMvTWlkZGxld2FyZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9jYWNoZS9kaXN0L2Vtb3Rpb24tY2FjaGUuYnJvd3Nlci5kZXZlbG9wbWVudC5lc20uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3Mvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vdXRpbHMvZGlzdC9lbW90aW9uLXV0aWxzLmJyb3dzZXIuZXNtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2hhc2gvZGlzdC9lbW90aW9uLWhhc2guZXNtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3NlcmlhbGl6ZS9ub2RlX21vZHVsZXMvQGVtb3Rpb24vdW5pdGxlc3MvZGlzdC9lbW90aW9uLXVuaXRsZXNzLmVzbS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zZXJpYWxpemUvbm9kZV9tb2R1bGVzL0BlbW90aW9uL21lbW9pemUvZGlzdC9lbW90aW9uLW1lbW9pemUuZXNtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3NlcmlhbGl6ZS9kaXN0L2Vtb3Rpb24tc2VyaWFsaXplLmRldmVsb3BtZW50LmVzbS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91c2UtaW5zZXJ0aW9uLWVmZmVjdC13aXRoLWZhbGxiYWNrcy9kaXN0L2Vtb3Rpb24tdXNlLWluc2VydGlvbi1lZmZlY3Qtd2l0aC1mYWxsYmFja3MuYnJvd3Nlci5lc20uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vcmVhY3QvZGlzdC9lbW90aW9uLWVsZW1lbnQtN2ExMzQzZmEuYnJvd3Nlci5kZXZlbG9wbWVudC5lc20uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vcmVhY3QvZGlzdC9lbW90aW9uLXJlYWN0LmJyb3dzZXIuZGV2ZWxvcG1lbnQuZXNtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZmxvYXRpbmctdWkvdXRpbHMvZGlzdC9mbG9hdGluZy11aS51dGlscy5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZsb2F0aW5nLXVpL3V0aWxzL2RvbS9kaXN0L2Zsb2F0aW5nLXVpLnV0aWxzLmRvbS5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGZsb2F0aW5nLXVpL2RvbS9kaXN0L2Zsb2F0aW5nLXVpLmRvbS5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdXNlLWlzb21vcnBoaWMtbGF5b3V0LWVmZmVjdC9kaXN0L3VzZS1pc29tb3JwaGljLWxheW91dC1lZmZlY3QuYnJvd3Nlci5lc20uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2Rpc3QvaW5kZXgtNjQxZWU1YjguZXNtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21lbW9pemUtb25lL2Rpc3QvbWVtb2l6ZS1vbmUuZXNtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9kaXN0L1NlbGVjdC1hYWIwMjdmMy5lc20uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2Rpc3QvcmVhY3Qtc2VsZWN0LmVzbS5qcyIsIi4uLy4uLy4uL2Zyb250ZW5kL2pzL2NvbW1vbi9yZWFjdFNlbGVjdFN0eWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBfdHlwZW9mKG8pO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9QcmltaXRpdmUodCwgcikge1xuICBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDtcbiAgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gIGlmICh2b2lkIDAgIT09IGUpIHtcbiAgICB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTtcbiAgICBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmltcG9ydCB0b1ByaW1pdGl2ZSBmcm9tIFwiLi90b1ByaW1pdGl2ZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9Qcm9wZXJ0eUtleSh0KSB7XG4gIHZhciBpID0gdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7XG4gIHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogU3RyaW5nKGkpO1xufSIsImltcG9ydCB0b1Byb3BlcnR5S2V5IGZyb20gXCIuL3RvUHJvcGVydHlLZXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufSIsImltcG9ydCBkZWZpbmVQcm9wZXJ0eSBmcm9tIFwiLi9kZWZpbmVQcm9wZXJ0eS5qc1wiO1xuZnVuY3Rpb24gb3duS2V5cyhlLCByKSB7XG4gIHZhciB0ID0gT2JqZWN0LmtleXMoZSk7XG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIG8gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO1xuICAgIHIgJiYgKG8gPSBvLmZpbHRlcihmdW5jdGlvbiAocikge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgcikuZW51bWVyYWJsZTtcbiAgICB9KSksIHQucHVzaC5hcHBseSh0LCBvKTtcbiAgfVxuICByZXR1cm4gdDtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKGUpIHtcbiAgZm9yICh2YXIgciA9IDE7IHIgPCBhcmd1bWVudHMubGVuZ3RoOyByKyspIHtcbiAgICB2YXIgdCA9IG51bGwgIT0gYXJndW1lbnRzW3JdID8gYXJndW1lbnRzW3JdIDoge307XG4gICAgciAlIDIgPyBvd25LZXlzKE9iamVjdCh0KSwgITApLmZvckVhY2goZnVuY3Rpb24gKHIpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KGUsIHIsIHRbcl0pO1xuICAgIH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh0KSkgOiBvd25LZXlzKE9iamVjdCh0KSkuZm9yRWFjaChmdW5jdGlvbiAocikge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCwgcikpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQociwgbCkge1xuICB2YXIgdCA9IG51bGwgPT0gciA/IG51bGwgOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgcltTeW1ib2wuaXRlcmF0b3JdIHx8IHJbXCJAQGl0ZXJhdG9yXCJdO1xuICBpZiAobnVsbCAhPSB0KSB7XG4gICAgdmFyIGUsXG4gICAgICBuLFxuICAgICAgaSxcbiAgICAgIHUsXG4gICAgICBhID0gW10sXG4gICAgICBmID0gITAsXG4gICAgICBvID0gITE7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChpID0gKHQgPSB0LmNhbGwocikpLm5leHQsIDAgPT09IGwpIHtcbiAgICAgICAgaWYgKE9iamVjdCh0KSAhPT0gdCkgcmV0dXJuO1xuICAgICAgICBmID0gITE7XG4gICAgICB9IGVsc2UgZm9yICg7ICEoZiA9IChlID0gaS5jYWxsKHQpKS5kb25lKSAmJiAoYS5wdXNoKGUudmFsdWUpLCBhLmxlbmd0aCAhPT0gbCk7IGYgPSAhMCk7XG4gICAgfSBjYXRjaCAocikge1xuICAgICAgbyA9ICEwLCBuID0gcjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFmICYmIG51bGwgIT0gdFtcInJldHVyblwiXSAmJiAodSA9IHRbXCJyZXR1cm5cIl0oKSwgT2JqZWN0KHUpICE9PSB1KSkgcmV0dXJuO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG47XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcbiAgcmV0dXJuIGFycjI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIi4vbm9uSXRlcmFibGVSZXN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59IiwiaW1wb3J0IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIi4vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICB2YXIga2V5LCBpO1xuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDInO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXknO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbnZhciBfZXhjbHVkZWQgPSBbXCJkZWZhdWx0SW5wdXRWYWx1ZVwiLCBcImRlZmF1bHRNZW51SXNPcGVuXCIsIFwiZGVmYXVsdFZhbHVlXCIsIFwiaW5wdXRWYWx1ZVwiLCBcIm1lbnVJc09wZW5cIiwgXCJvbkNoYW5nZVwiLCBcIm9uSW5wdXRDaGFuZ2VcIiwgXCJvbk1lbnVDbG9zZVwiLCBcIm9uTWVudU9wZW5cIiwgXCJ2YWx1ZVwiXTtcbmZ1bmN0aW9uIHVzZVN0YXRlTWFuYWdlcihfcmVmKSB7XG4gIHZhciBfcmVmJGRlZmF1bHRJbnB1dFZhbHUgPSBfcmVmLmRlZmF1bHRJbnB1dFZhbHVlLFxuICAgIGRlZmF1bHRJbnB1dFZhbHVlID0gX3JlZiRkZWZhdWx0SW5wdXRWYWx1ID09PSB2b2lkIDAgPyAnJyA6IF9yZWYkZGVmYXVsdElucHV0VmFsdSxcbiAgICBfcmVmJGRlZmF1bHRNZW51SXNPcGUgPSBfcmVmLmRlZmF1bHRNZW51SXNPcGVuLFxuICAgIGRlZmF1bHRNZW51SXNPcGVuID0gX3JlZiRkZWZhdWx0TWVudUlzT3BlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkZGVmYXVsdE1lbnVJc09wZSxcbiAgICBfcmVmJGRlZmF1bHRWYWx1ZSA9IF9yZWYuZGVmYXVsdFZhbHVlLFxuICAgIGRlZmF1bHRWYWx1ZSA9IF9yZWYkZGVmYXVsdFZhbHVlID09PSB2b2lkIDAgPyBudWxsIDogX3JlZiRkZWZhdWx0VmFsdWUsXG4gICAgcHJvcHNJbnB1dFZhbHVlID0gX3JlZi5pbnB1dFZhbHVlLFxuICAgIHByb3BzTWVudUlzT3BlbiA9IF9yZWYubWVudUlzT3BlbixcbiAgICBwcm9wc09uQ2hhbmdlID0gX3JlZi5vbkNoYW5nZSxcbiAgICBwcm9wc09uSW5wdXRDaGFuZ2UgPSBfcmVmLm9uSW5wdXRDaGFuZ2UsXG4gICAgcHJvcHNPbk1lbnVDbG9zZSA9IF9yZWYub25NZW51Q2xvc2UsXG4gICAgcHJvcHNPbk1lbnVPcGVuID0gX3JlZi5vbk1lbnVPcGVuLFxuICAgIHByb3BzVmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgIHJlc3RTZWxlY3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBfZXhjbHVkZWQpO1xuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUocHJvcHNJbnB1dFZhbHVlICE9PSB1bmRlZmluZWQgPyBwcm9wc0lucHV0VmFsdWUgOiBkZWZhdWx0SW5wdXRWYWx1ZSksXG4gICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgc3RhdGVJbnB1dFZhbHVlID0gX3VzZVN0YXRlMlswXSxcbiAgICBzZXRTdGF0ZUlucHV0VmFsdWUgPSBfdXNlU3RhdGUyWzFdO1xuICB2YXIgX3VzZVN0YXRlMyA9IHVzZVN0YXRlKHByb3BzTWVudUlzT3BlbiAhPT0gdW5kZWZpbmVkID8gcHJvcHNNZW51SXNPcGVuIDogZGVmYXVsdE1lbnVJc09wZW4pLFxuICAgIF91c2VTdGF0ZTQgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUzLCAyKSxcbiAgICBzdGF0ZU1lbnVJc09wZW4gPSBfdXNlU3RhdGU0WzBdLFxuICAgIHNldFN0YXRlTWVudUlzT3BlbiA9IF91c2VTdGF0ZTRbMV07XG4gIHZhciBfdXNlU3RhdGU1ID0gdXNlU3RhdGUocHJvcHNWYWx1ZSAhPT0gdW5kZWZpbmVkID8gcHJvcHNWYWx1ZSA6IGRlZmF1bHRWYWx1ZSksXG4gICAgX3VzZVN0YXRlNiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTUsIDIpLFxuICAgIHN0YXRlVmFsdWUgPSBfdXNlU3RhdGU2WzBdLFxuICAgIHNldFN0YXRlVmFsdWUgPSBfdXNlU3RhdGU2WzFdO1xuICB2YXIgb25DaGFuZ2UgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWUsIGFjdGlvbk1ldGEpIHtcbiAgICBpZiAodHlwZW9mIHByb3BzT25DaGFuZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BzT25DaGFuZ2UodmFsdWUsIGFjdGlvbk1ldGEpO1xuICAgIH1cbiAgICBzZXRTdGF0ZVZhbHVlKHZhbHVlKTtcbiAgfSwgW3Byb3BzT25DaGFuZ2VdKTtcbiAgdmFyIG9uSW5wdXRDaGFuZ2UgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWUsIGFjdGlvbk1ldGEpIHtcbiAgICB2YXIgbmV3VmFsdWU7XG4gICAgaWYgKHR5cGVvZiBwcm9wc09uSW5wdXRDaGFuZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG5ld1ZhbHVlID0gcHJvcHNPbklucHV0Q2hhbmdlKHZhbHVlLCBhY3Rpb25NZXRhKTtcbiAgICB9XG4gICAgc2V0U3RhdGVJbnB1dFZhbHVlKG5ld1ZhbHVlICE9PSB1bmRlZmluZWQgPyBuZXdWYWx1ZSA6IHZhbHVlKTtcbiAgfSwgW3Byb3BzT25JbnB1dENoYW5nZV0pO1xuICB2YXIgb25NZW51T3BlbiA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodHlwZW9mIHByb3BzT25NZW51T3BlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcHNPbk1lbnVPcGVuKCk7XG4gICAgfVxuICAgIHNldFN0YXRlTWVudUlzT3Blbih0cnVlKTtcbiAgfSwgW3Byb3BzT25NZW51T3Blbl0pO1xuICB2YXIgb25NZW51Q2xvc2UgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wc09uTWVudUNsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wc09uTWVudUNsb3NlKCk7XG4gICAgfVxuICAgIHNldFN0YXRlTWVudUlzT3BlbihmYWxzZSk7XG4gIH0sIFtwcm9wc09uTWVudUNsb3NlXSk7XG4gIHZhciBpbnB1dFZhbHVlID0gcHJvcHNJbnB1dFZhbHVlICE9PSB1bmRlZmluZWQgPyBwcm9wc0lucHV0VmFsdWUgOiBzdGF0ZUlucHV0VmFsdWU7XG4gIHZhciBtZW51SXNPcGVuID0gcHJvcHNNZW51SXNPcGVuICE9PSB1bmRlZmluZWQgPyBwcm9wc01lbnVJc09wZW4gOiBzdGF0ZU1lbnVJc09wZW47XG4gIHZhciB2YWx1ZSA9IHByb3BzVmFsdWUgIT09IHVuZGVmaW5lZCA/IHByb3BzVmFsdWUgOiBzdGF0ZVZhbHVlO1xuICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCByZXN0U2VsZWN0UHJvcHMpLCB7fSwge1xuICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWUsXG4gICAgbWVudUlzT3BlbjogbWVudUlzT3BlbixcbiAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgb25JbnB1dENoYW5nZTogb25JbnB1dENoYW5nZSxcbiAgICBvbk1lbnVDbG9zZTogb25NZW51Q2xvc2UsXG4gICAgb25NZW51T3Blbjogb25NZW51T3BlbixcbiAgICB2YWx1ZTogdmFsdWVcbiAgfSk7XG59XG5cbmV4cG9ydCB7IHVzZVN0YXRlTWFuYWdlciBhcyB1IH07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImltcG9ydCB0b1Byb3BlcnR5S2V5IGZyb20gXCIuL3RvUHJvcGVydHlLZXkuanNcIjtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHRvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG4gIHRyeSB7XG4gICAgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cbiAgcmV0dXJuIHNlbGY7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5pbXBvcnQgYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufSIsImltcG9ydCBnZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiO1xuaW1wb3J0IGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCBmcm9tIFwiLi9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QuanNcIjtcbmltcG9ydCBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gXCIuL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7XG4gIHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7XG4gIHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHtcbiAgICB2YXIgU3VwZXIgPSBnZXRQcm90b3R5cGVPZihEZXJpdmVkKSxcbiAgICAgIHJlc3VsdDtcbiAgICBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkge1xuICAgICAgdmFyIE5ld1RhcmdldCA9IGdldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yO1xuICAgICAgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTtcbiAgfTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufSIsInZhciBpc0RldmVsb3BtZW50ID0gdHJ1ZTtcblxuLypcblxuQmFzZWQgb2ZmIGdsYW1vcidzIFN0eWxlU2hlZXQsIHRoYW5rcyBTdW5pbCDinaTvuI9cblxuaGlnaCBwZXJmb3JtYW5jZSBTdHlsZVNoZWV0IGZvciBjc3MtaW4tanMgc3lzdGVtc1xuXG4tIHVzZXMgbXVsdGlwbGUgc3R5bGUgdGFncyBiZWhpbmQgdGhlIHNjZW5lcyBmb3IgbWlsbGlvbnMgb2YgcnVsZXNcbi0gdXNlcyBgaW5zZXJ0UnVsZWAgZm9yIGFwcGVuZGluZyBpbiBwcm9kdWN0aW9uIGZvciAqbXVjaCogZmFzdGVyIHBlcmZvcm1hbmNlXG5cbi8vIHVzYWdlXG5cbmltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tICdAZW1vdGlvbi9zaGVldCdcblxubGV0IHN0eWxlU2hlZXQgPSBuZXcgU3R5bGVTaGVldCh7IGtleTogJycsIGNvbnRhaW5lcjogZG9jdW1lbnQuaGVhZCB9KVxuXG5zdHlsZVNoZWV0Lmluc2VydCgnI2JveCB7IGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgfScpXG4tIGFwcGVuZHMgYSBjc3MgcnVsZSBpbnRvIHRoZSBzdHlsZXNoZWV0XG5cbnN0eWxlU2hlZXQuZmx1c2goKVxuLSBlbXB0aWVzIHRoZSBzdHlsZXNoZWV0IG9mIGFsbCBpdHMgY29udGVudHNcblxuKi9cblxuZnVuY3Rpb24gc2hlZXRGb3JUYWcodGFnKSB7XG4gIGlmICh0YWcuc2hlZXQpIHtcbiAgICByZXR1cm4gdGFnLnNoZWV0O1xuICB9IC8vIHRoaXMgd2VpcmRuZXNzIGJyb3VnaHQgdG8geW91IGJ5IGZpcmVmb3hcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChkb2N1bWVudC5zdHlsZVNoZWV0c1tpXS5vd25lck5vZGUgPT09IHRhZykge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldO1xuICAgIH1cbiAgfSAvLyB0aGlzIGZ1bmN0aW9uIHNob3VsZCBhbHdheXMgcmV0dXJuIHdpdGggYSB2YWx1ZVxuICAvLyBUUyBjYW4ndCB1bmRlcnN0YW5kIGl0IHRob3VnaCBzbyB3ZSBtYWtlIGl0IHN0b3AgY29tcGxhaW5pbmcgaGVyZVxuXG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHRhZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtZW1vdGlvbicsIG9wdGlvbnMua2V5KTtcblxuICBpZiAob3B0aW9ucy5ub25jZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGFnLnNldEF0dHJpYnV0ZSgnbm9uY2UnLCBvcHRpb25zLm5vbmNlKTtcbiAgfVxuXG4gIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpO1xuICB0YWcuc2V0QXR0cmlidXRlKCdkYXRhLXMnLCAnJyk7XG4gIHJldHVybiB0YWc7XG59XG5cbnZhciBTdHlsZVNoZWV0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLy8gVXNpbmcgTm9kZSBpbnN0ZWFkIG9mIEhUTUxFbGVtZW50IHNpbmNlIGNvbnRhaW5lciBtYXkgYmUgYSBTaGFkb3dSb290XG4gIGZ1bmN0aW9uIFN0eWxlU2hlZXQob3B0aW9ucykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLl9pbnNlcnRUYWcgPSBmdW5jdGlvbiAodGFnKSB7XG4gICAgICB2YXIgYmVmb3JlO1xuXG4gICAgICBpZiAoX3RoaXMudGFncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaWYgKF90aGlzLmluc2VydGlvblBvaW50KSB7XG4gICAgICAgICAgYmVmb3JlID0gX3RoaXMuaW5zZXJ0aW9uUG9pbnQubmV4dFNpYmxpbmc7XG4gICAgICAgIH0gZWxzZSBpZiAoX3RoaXMucHJlcGVuZCkge1xuICAgICAgICAgIGJlZm9yZSA9IF90aGlzLmNvbnRhaW5lci5maXJzdENoaWxkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJlZm9yZSA9IF90aGlzLmJlZm9yZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmVmb3JlID0gX3RoaXMudGFnc1tfdGhpcy50YWdzLmxlbmd0aCAtIDFdLm5leHRTaWJsaW5nO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5jb250YWluZXIuaW5zZXJ0QmVmb3JlKHRhZywgYmVmb3JlKTtcblxuICAgICAgX3RoaXMudGFncy5wdXNoKHRhZyk7XG4gICAgfTtcblxuICAgIHRoaXMuaXNTcGVlZHkgPSBvcHRpb25zLnNwZWVkeSA9PT0gdW5kZWZpbmVkID8gIWlzRGV2ZWxvcG1lbnQgOiBvcHRpb25zLnNwZWVkeTtcbiAgICB0aGlzLnRhZ3MgPSBbXTtcbiAgICB0aGlzLmN0ciA9IDA7XG4gICAgdGhpcy5ub25jZSA9IG9wdGlvbnMubm9uY2U7IC8vIGtleSBpcyB0aGUgdmFsdWUgb2YgdGhlIGRhdGEtZW1vdGlvbiBhdHRyaWJ1dGUsIGl0J3MgdXNlZCB0byBpZGVudGlmeSBkaWZmZXJlbnQgc2hlZXRzXG5cbiAgICB0aGlzLmtleSA9IG9wdGlvbnMua2V5O1xuICAgIHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXI7XG4gICAgdGhpcy5wcmVwZW5kID0gb3B0aW9ucy5wcmVwZW5kO1xuICAgIHRoaXMuaW5zZXJ0aW9uUG9pbnQgPSBvcHRpb25zLmluc2VydGlvblBvaW50O1xuICAgIHRoaXMuYmVmb3JlID0gbnVsbDtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTdHlsZVNoZWV0LnByb3RvdHlwZTtcblxuICBfcHJvdG8uaHlkcmF0ZSA9IGZ1bmN0aW9uIGh5ZHJhdGUobm9kZXMpIHtcbiAgICBub2Rlcy5mb3JFYWNoKHRoaXMuX2luc2VydFRhZyk7XG4gIH07XG5cbiAgX3Byb3RvLmluc2VydCA9IGZ1bmN0aW9uIGluc2VydChydWxlKSB7XG4gICAgLy8gdGhlIG1heCBsZW5ndGggaXMgaG93IG1hbnkgcnVsZXMgd2UgaGF2ZSBwZXIgc3R5bGUgdGFnLCBpdCdzIDY1MDAwIGluIHNwZWVkeSBtb2RlXG4gICAgLy8gaXQncyAxIGluIGRldiBiZWNhdXNlIHdlIGluc2VydCBzb3VyY2UgbWFwcyB0aGF0IG1hcCBhIHNpbmdsZSBydWxlIHRvIGEgbG9jYXRpb25cbiAgICAvLyBhbmQgeW91IGNhbiBvbmx5IGhhdmUgb25lIHNvdXJjZSBtYXAgcGVyIHN0eWxlIHRhZ1xuICAgIGlmICh0aGlzLmN0ciAlICh0aGlzLmlzU3BlZWR5ID8gNjUwMDAgOiAxKSA9PT0gMCkge1xuICAgICAgdGhpcy5faW5zZXJ0VGFnKGNyZWF0ZVN0eWxlRWxlbWVudCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdmFyIHRhZyA9IHRoaXMudGFnc1t0aGlzLnRhZ3MubGVuZ3RoIC0gMV07XG5cbiAgICB7XG4gICAgICB2YXIgaXNJbXBvcnRSdWxlID0gcnVsZS5jaGFyQ29kZUF0KDApID09PSA2NCAmJiBydWxlLmNoYXJDb2RlQXQoMSkgPT09IDEwNTtcblxuICAgICAgaWYgKGlzSW1wb3J0UnVsZSAmJiB0aGlzLl9hbHJlYWR5SW5zZXJ0ZWRPcmRlckluc2Vuc2l0aXZlUnVsZSkge1xuICAgICAgICAvLyB0aGlzIHdvdWxkIG9ubHkgY2F1c2UgcHJvYmxlbSBpbiBzcGVlZHkgbW9kZVxuICAgICAgICAvLyBidXQgd2UgZG9uJ3Qgd2FudCBlbmFibGluZyBzcGVlZHkgdG8gYWZmZWN0IHRoZSBvYnNlcnZhYmxlIGJlaGF2aW9yXG4gICAgICAgIC8vIHNvIHdlIHJlcG9ydCB0aGlzIGVycm9yIGF0IGFsbCB0aW1lc1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiWW91J3JlIGF0dGVtcHRpbmcgdG8gaW5zZXJ0IHRoZSBmb2xsb3dpbmcgcnVsZTpcXG5cIiArIHJ1bGUgKyAnXFxuXFxuYEBpbXBvcnRgIHJ1bGVzIG11c3QgYmUgYmVmb3JlIGFsbCBvdGhlciB0eXBlcyBvZiBydWxlcyBpbiBhIHN0eWxlc2hlZXQgYnV0IG90aGVyIHJ1bGVzIGhhdmUgYWxyZWFkeSBiZWVuIGluc2VydGVkLiBQbGVhc2UgZW5zdXJlIHRoYXQgYEBpbXBvcnRgIHJ1bGVzIGFyZSBiZWZvcmUgYWxsIG90aGVyIHJ1bGVzLicpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9hbHJlYWR5SW5zZXJ0ZWRPcmRlckluc2Vuc2l0aXZlUnVsZSA9IHRoaXMuX2FscmVhZHlJbnNlcnRlZE9yZGVySW5zZW5zaXRpdmVSdWxlIHx8ICFpc0ltcG9ydFJ1bGU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNTcGVlZHkpIHtcbiAgICAgIHZhciBzaGVldCA9IHNoZWV0Rm9yVGFnKHRhZyk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIHRoaXMgaXMgdGhlIHVsdHJhZmFzdCB2ZXJzaW9uLCB3b3JrcyBhY3Jvc3MgYnJvd3NlcnNcbiAgICAgICAgLy8gdGhlIGJpZyBkcmF3YmFjayBpcyB0aGF0IHRoZSBjc3Mgd29uJ3QgYmUgZWRpdGFibGUgaW4gZGV2dG9vbHNcbiAgICAgICAgc2hlZXQuaW5zZXJ0UnVsZShydWxlLCBzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoIS86KC1tb3otcGxhY2Vob2xkZXJ8LW1vei1mb2N1cy1pbm5lcnwtbW96LWZvY3VzcmluZ3wtbXMtaW5wdXQtcGxhY2Vob2xkZXJ8LW1vei1yZWFkLXdyaXRlfC1tb3otcmVhZC1vbmx5fC1tcy1jbGVhcnwtbXMtZXhwYW5kfC1tcy1yZXZlYWwpey8udGVzdChydWxlKSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVyZSB3YXMgYSBwcm9ibGVtIGluc2VydGluZyB0aGUgZm9sbG93aW5nIHJ1bGU6IFxcXCJcIiArIHJ1bGUgKyBcIlxcXCJcIiwgZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHJ1bGUpKTtcbiAgICB9XG5cbiAgICB0aGlzLmN0cisrO1xuICB9O1xuXG4gIF9wcm90by5mbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHRoaXMudGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgIHZhciBfdGFnJHBhcmVudE5vZGU7XG5cbiAgICAgIHJldHVybiAoX3RhZyRwYXJlbnROb2RlID0gdGFnLnBhcmVudE5vZGUpID09IG51bGwgPyB2b2lkIDAgOiBfdGFnJHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFnKTtcbiAgICB9KTtcbiAgICB0aGlzLnRhZ3MgPSBbXTtcbiAgICB0aGlzLmN0ciA9IDA7XG5cbiAgICB7XG4gICAgICB0aGlzLl9hbHJlYWR5SW5zZXJ0ZWRPcmRlckluc2Vuc2l0aXZlUnVsZSA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gU3R5bGVTaGVldDtcbn0oKTtcblxuZXhwb3J0IHsgU3R5bGVTaGVldCB9O1xuIiwiZXhwb3J0IHZhciBNUyA9ICctbXMtJ1xuZXhwb3J0IHZhciBNT1ogPSAnLW1vei0nXG5leHBvcnQgdmFyIFdFQktJVCA9ICctd2Via2l0LSdcblxuZXhwb3J0IHZhciBDT01NRU5UID0gJ2NvbW0nXG5leHBvcnQgdmFyIFJVTEVTRVQgPSAncnVsZSdcbmV4cG9ydCB2YXIgREVDTEFSQVRJT04gPSAnZGVjbCdcblxuZXhwb3J0IHZhciBQQUdFID0gJ0BwYWdlJ1xuZXhwb3J0IHZhciBNRURJQSA9ICdAbWVkaWEnXG5leHBvcnQgdmFyIElNUE9SVCA9ICdAaW1wb3J0J1xuZXhwb3J0IHZhciBDSEFSU0VUID0gJ0BjaGFyc2V0J1xuZXhwb3J0IHZhciBWSUVXUE9SVCA9ICdAdmlld3BvcnQnXG5leHBvcnQgdmFyIFNVUFBPUlRTID0gJ0BzdXBwb3J0cydcbmV4cG9ydCB2YXIgRE9DVU1FTlQgPSAnQGRvY3VtZW50J1xuZXhwb3J0IHZhciBOQU1FU1BBQ0UgPSAnQG5hbWVzcGFjZSdcbmV4cG9ydCB2YXIgS0VZRlJBTUVTID0gJ0BrZXlmcmFtZXMnXG5leHBvcnQgdmFyIEZPTlRfRkFDRSA9ICdAZm9udC1mYWNlJ1xuZXhwb3J0IHZhciBDT1VOVEVSX1NUWUxFID0gJ0Bjb3VudGVyLXN0eWxlJ1xuZXhwb3J0IHZhciBGT05UX0ZFQVRVUkVfVkFMVUVTID0gJ0Bmb250LWZlYXR1cmUtdmFsdWVzJ1xuZXhwb3J0IHZhciBMQVlFUiA9ICdAbGF5ZXInXG4iLCIvKipcbiAqIEBwYXJhbSB7bnVtYmVyfVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgdmFyIGFicyA9IE1hdGguYWJzXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCB2YXIgZnJvbSA9IFN0cmluZy5mcm9tQ2hhckNvZGVcblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH1cbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IHZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNoICh2YWx1ZSwgbGVuZ3RoKSB7XG5cdHJldHVybiBjaGFyYXQodmFsdWUsIDApIF4gNDUgPyAoKCgoKCgobGVuZ3RoIDw8IDIpIF4gY2hhcmF0KHZhbHVlLCAwKSkgPDwgMikgXiBjaGFyYXQodmFsdWUsIDEpKSA8PCAyKSBeIGNoYXJhdCh2YWx1ZSwgMikpIDw8IDIpIF4gY2hhcmF0KHZhbHVlLCAzKSA6IDBcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyaW0gKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZS50cmltKClcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7UmVnRXhwfSBwYXR0ZXJuXG4gKiBAcmV0dXJuIHtzdHJpbmc/fVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2ggKHZhbHVlLCBwYXR0ZXJuKSB7XG5cdHJldHVybiAodmFsdWUgPSBwYXR0ZXJuLmV4ZWModmFsdWUpKSA/IHZhbHVlWzBdIDogdmFsdWVcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7KHN0cmluZ3xSZWdFeHApfSBwYXR0ZXJuXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZW1lbnRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2UgKHZhbHVlLCBwYXR0ZXJuLCByZXBsYWNlbWVudCkge1xuXHRyZXR1cm4gdmFsdWUucmVwbGFjZShwYXR0ZXJuLCByZXBsYWNlbWVudClcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWFyY2hcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluZGV4b2YgKHZhbHVlLCBzZWFyY2gpIHtcblx0cmV0dXJuIHZhbHVlLmluZGV4T2Yoc2VhcmNoKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFyYXQgKHZhbHVlLCBpbmRleCkge1xuXHRyZXR1cm4gdmFsdWUuY2hhckNvZGVBdChpbmRleCkgfCAwXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gYmVnaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0ciAodmFsdWUsIGJlZ2luLCBlbmQpIHtcblx0cmV0dXJuIHZhbHVlLnNsaWNlKGJlZ2luLCBlbmQpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJsZW4gKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZS5sZW5ndGhcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2FueVtdfSB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2l6ZW9mICh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUubGVuZ3RoXG59XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcGFyYW0ge2FueVtdfSBhcnJheVxuICogQHJldHVybiB7YW55fVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kICh2YWx1ZSwgYXJyYXkpIHtcblx0cmV0dXJuIGFycmF5LnB1c2godmFsdWUpLCB2YWx1ZVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nW119IGFycmF5XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZSAoYXJyYXksIGNhbGxiYWNrKSB7XG5cdHJldHVybiBhcnJheS5tYXAoY2FsbGJhY2spLmpvaW4oJycpXG59XG4iLCJpbXBvcnQge2Zyb20sIHRyaW0sIGNoYXJhdCwgc3RybGVuLCBzdWJzdHIsIGFwcGVuZCwgYXNzaWdufSBmcm9tICcuL1V0aWxpdHkuanMnXG5cbmV4cG9ydCB2YXIgbGluZSA9IDFcbmV4cG9ydCB2YXIgY29sdW1uID0gMVxuZXhwb3J0IHZhciBsZW5ndGggPSAwXG5leHBvcnQgdmFyIHBvc2l0aW9uID0gMFxuZXhwb3J0IHZhciBjaGFyYWN0ZXIgPSAwXG5leHBvcnQgdmFyIGNoYXJhY3RlcnMgPSAnJ1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3QgfCBudWxsfSByb290XG4gKiBAcGFyYW0ge29iamVjdCB8IG51bGx9IHBhcmVudFxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7c3RyaW5nW10gfCBzdHJpbmd9IHByb3BzXG4gKiBAcGFyYW0ge29iamVjdFtdIHwgc3RyaW5nfSBjaGlsZHJlblxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9kZSAodmFsdWUsIHJvb3QsIHBhcmVudCwgdHlwZSwgcHJvcHMsIGNoaWxkcmVuLCBsZW5ndGgpIHtcblx0cmV0dXJuIHt2YWx1ZTogdmFsdWUsIHJvb3Q6IHJvb3QsIHBhcmVudDogcGFyZW50LCB0eXBlOiB0eXBlLCBwcm9wczogcHJvcHMsIGNoaWxkcmVuOiBjaGlsZHJlbiwgbGluZTogbGluZSwgY29sdW1uOiBjb2x1bW4sIGxlbmd0aDogbGVuZ3RoLCByZXR1cm46ICcnfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSByb290XG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkgKHJvb3QsIHByb3BzKSB7XG5cdHJldHVybiBhc3NpZ24obm9kZSgnJywgbnVsbCwgbnVsbCwgJycsIG51bGwsIG51bGwsIDApLCByb290LCB7bGVuZ3RoOiAtcm9vdC5sZW5ndGh9LCBwcm9wcylcbn1cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFyICgpIHtcblx0cmV0dXJuIGNoYXJhY3RlclxufVxuXG4vKipcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByZXYgKCkge1xuXHRjaGFyYWN0ZXIgPSBwb3NpdGlvbiA+IDAgPyBjaGFyYXQoY2hhcmFjdGVycywgLS1wb3NpdGlvbikgOiAwXG5cblx0aWYgKGNvbHVtbi0tLCBjaGFyYWN0ZXIgPT09IDEwKVxuXHRcdGNvbHVtbiA9IDEsIGxpbmUtLVxuXG5cdHJldHVybiBjaGFyYWN0ZXJcbn1cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXh0ICgpIHtcblx0Y2hhcmFjdGVyID0gcG9zaXRpb24gPCBsZW5ndGggPyBjaGFyYXQoY2hhcmFjdGVycywgcG9zaXRpb24rKykgOiAwXG5cblx0aWYgKGNvbHVtbisrLCBjaGFyYWN0ZXIgPT09IDEwKVxuXHRcdGNvbHVtbiA9IDEsIGxpbmUrK1xuXG5cdHJldHVybiBjaGFyYWN0ZXJcbn1cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwZWVrICgpIHtcblx0cmV0dXJuIGNoYXJhdChjaGFyYWN0ZXJzLCBwb3NpdGlvbilcbn1cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYXJldCAoKSB7XG5cdHJldHVybiBwb3NpdGlvblxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBiZWdpblxuICogQHBhcmFtIHtudW1iZXJ9IGVuZFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2xpY2UgKGJlZ2luLCBlbmQpIHtcblx0cmV0dXJuIHN1YnN0cihjaGFyYWN0ZXJzLCBiZWdpbiwgZW5kKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbiAodHlwZSkge1xuXHRzd2l0Y2ggKHR5cGUpIHtcblx0XHQvLyBcXDAgXFx0IFxcbiBcXHIgXFxzIHdoaXRlc3BhY2UgdG9rZW5cblx0XHRjYXNlIDA6IGNhc2UgOTogY2FzZSAxMDogY2FzZSAxMzogY2FzZSAzMjpcblx0XHRcdHJldHVybiA1XG5cdFx0Ly8gISArICwgLyA+IEAgfiBpc29sYXRlIHRva2VuXG5cdFx0Y2FzZSAzMzogY2FzZSA0MzogY2FzZSA0NDogY2FzZSA0NzogY2FzZSA2MjogY2FzZSA2NDogY2FzZSAxMjY6XG5cdFx0Ly8gOyB7IH0gYnJlYWtwb2ludCB0b2tlblxuXHRcdGNhc2UgNTk6IGNhc2UgMTIzOiBjYXNlIDEyNTpcblx0XHRcdHJldHVybiA0XG5cdFx0Ly8gOiBhY2NvbXBhbmllZCB0b2tlblxuXHRcdGNhc2UgNTg6XG5cdFx0XHRyZXR1cm4gM1xuXHRcdC8vIFwiICcgKCBbIG9wZW5pbmcgZGVsaW1pdCB0b2tlblxuXHRcdGNhc2UgMzQ6IGNhc2UgMzk6IGNhc2UgNDA6IGNhc2UgOTE6XG5cdFx0XHRyZXR1cm4gMlxuXHRcdC8vICkgXSBjbG9zaW5nIGRlbGltaXQgdG9rZW5cblx0XHRjYXNlIDQxOiBjYXNlIDkzOlxuXHRcdFx0cmV0dXJuIDFcblx0fVxuXG5cdHJldHVybiAwXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHthbnlbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFsbG9jICh2YWx1ZSkge1xuXHRyZXR1cm4gbGluZSA9IGNvbHVtbiA9IDEsIGxlbmd0aCA9IHN0cmxlbihjaGFyYWN0ZXJzID0gdmFsdWUpLCBwb3NpdGlvbiA9IDAsIFtdXG59XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcmV0dXJuIHthbnl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWFsbG9jICh2YWx1ZSkge1xuXHRyZXR1cm4gY2hhcmFjdGVycyA9ICcnLCB2YWx1ZVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxpbWl0ICh0eXBlKSB7XG5cdHJldHVybiB0cmltKHNsaWNlKHBvc2l0aW9uIC0gMSwgZGVsaW1pdGVyKHR5cGUgPT09IDkxID8gdHlwZSArIDIgOiB0eXBlID09PSA0MCA/IHR5cGUgKyAxIDogdHlwZSkpKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7c3RyaW5nW119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZSAodmFsdWUpIHtcblx0cmV0dXJuIGRlYWxsb2ModG9rZW5pemVyKGFsbG9jKHZhbHVlKSkpXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdoaXRlc3BhY2UgKHR5cGUpIHtcblx0d2hpbGUgKGNoYXJhY3RlciA9IHBlZWsoKSlcblx0XHRpZiAoY2hhcmFjdGVyIDwgMzMpXG5cdFx0XHRuZXh0KClcblx0XHRlbHNlXG5cdFx0XHRicmVha1xuXG5cdHJldHVybiB0b2tlbih0eXBlKSA+IDIgfHwgdG9rZW4oY2hhcmFjdGVyKSA+IDMgPyAnJyA6ICcgJ1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nW119IGNoaWxkcmVuXG4gKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRva2VuaXplciAoY2hpbGRyZW4pIHtcblx0d2hpbGUgKG5leHQoKSlcblx0XHRzd2l0Y2ggKHRva2VuKGNoYXJhY3RlcikpIHtcblx0XHRcdGNhc2UgMDogYXBwZW5kKGlkZW50aWZpZXIocG9zaXRpb24gLSAxKSwgY2hpbGRyZW4pXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIDI6IGFwcGVuZChkZWxpbWl0KGNoYXJhY3RlciksIGNoaWxkcmVuKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0ZGVmYXVsdDogYXBwZW5kKGZyb20oY2hhcmFjdGVyKSwgY2hpbGRyZW4pXG5cdFx0fVxuXG5cdHJldHVybiBjaGlsZHJlblxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGluZyAoaW5kZXgsIGNvdW50KSB7XG5cdHdoaWxlICgtLWNvdW50ICYmIG5leHQoKSlcblx0XHQvLyBub3QgMC05IEEtRiBhLWZcblx0XHRpZiAoY2hhcmFjdGVyIDwgNDggfHwgY2hhcmFjdGVyID4gMTAyIHx8IChjaGFyYWN0ZXIgPiA1NyAmJiBjaGFyYWN0ZXIgPCA2NSkgfHwgKGNoYXJhY3RlciA+IDcwICYmIGNoYXJhY3RlciA8IDk3KSlcblx0XHRcdGJyZWFrXG5cblx0cmV0dXJuIHNsaWNlKGluZGV4LCBjYXJldCgpICsgKGNvdW50IDwgNiAmJiBwZWVrKCkgPT0gMzIgJiYgbmV4dCgpID09IDMyKSlcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdHlwZVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsaW1pdGVyICh0eXBlKSB7XG5cdHdoaWxlIChuZXh0KCkpXG5cdFx0c3dpdGNoIChjaGFyYWN0ZXIpIHtcblx0XHRcdC8vIF0gKSBcIiAnXG5cdFx0XHRjYXNlIHR5cGU6XG5cdFx0XHRcdHJldHVybiBwb3NpdGlvblxuXHRcdFx0Ly8gXCIgJ1xuXHRcdFx0Y2FzZSAzNDogY2FzZSAzOTpcblx0XHRcdFx0aWYgKHR5cGUgIT09IDM0ICYmIHR5cGUgIT09IDM5KVxuXHRcdFx0XHRcdGRlbGltaXRlcihjaGFyYWN0ZXIpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHQvLyAoXG5cdFx0XHRjYXNlIDQwOlxuXHRcdFx0XHRpZiAodHlwZSA9PT0gNDEpXG5cdFx0XHRcdFx0ZGVsaW1pdGVyKHR5cGUpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHQvLyBcXFxuXHRcdFx0Y2FzZSA5Mjpcblx0XHRcdFx0bmV4dCgpXG5cdFx0XHRcdGJyZWFrXG5cdFx0fVxuXG5cdHJldHVybiBwb3NpdGlvblxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbW1lbnRlciAodHlwZSwgaW5kZXgpIHtcblx0d2hpbGUgKG5leHQoKSlcblx0XHQvLyAvL1xuXHRcdGlmICh0eXBlICsgY2hhcmFjdGVyID09PSA0NyArIDEwKVxuXHRcdFx0YnJlYWtcblx0XHQvLyAvKlxuXHRcdGVsc2UgaWYgKHR5cGUgKyBjaGFyYWN0ZXIgPT09IDQyICsgNDIgJiYgcGVlaygpID09PSA0Nylcblx0XHRcdGJyZWFrXG5cblx0cmV0dXJuICcvKicgKyBzbGljZShpbmRleCwgcG9zaXRpb24gLSAxKSArICcqJyArIGZyb20odHlwZSA9PT0gNDcgPyB0eXBlIDogbmV4dCgpKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpZmllciAoaW5kZXgpIHtcblx0d2hpbGUgKCF0b2tlbihwZWVrKCkpKVxuXHRcdG5leHQoKVxuXG5cdHJldHVybiBzbGljZShpbmRleCwgcG9zaXRpb24pXG59XG4iLCJpbXBvcnQge0NPTU1FTlQsIFJVTEVTRVQsIERFQ0xBUkFUSU9OfSBmcm9tICcuL0VudW0uanMnXG5pbXBvcnQge2FicywgY2hhcmF0LCB0cmltLCBmcm9tLCBzaXplb2YsIHN0cmxlbiwgc3Vic3RyLCBhcHBlbmQsIHJlcGxhY2UsIGluZGV4b2Z9IGZyb20gJy4vVXRpbGl0eS5qcydcbmltcG9ydCB7bm9kZSwgY2hhciwgcHJldiwgbmV4dCwgcGVlaywgY2FyZXQsIGFsbG9jLCBkZWFsbG9jLCBkZWxpbWl0LCB3aGl0ZXNwYWNlLCBlc2NhcGluZywgaWRlbnRpZmllciwgY29tbWVudGVyfSBmcm9tICcuL1Rva2VuaXplci5qcydcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge29iamVjdFtdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZSAodmFsdWUpIHtcblx0cmV0dXJuIGRlYWxsb2MocGFyc2UoJycsIG51bGwsIG51bGwsIG51bGwsIFsnJ10sIHZhbHVlID0gYWxsb2ModmFsdWUpLCAwLCBbMF0sIHZhbHVlKSlcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7b2JqZWN0fSByb290XG4gKiBAcGFyYW0ge29iamVjdD99IHBhcmVudFxuICogQHBhcmFtIHtzdHJpbmdbXX0gcnVsZVxuICogQHBhcmFtIHtzdHJpbmdbXX0gcnVsZXNcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJ1bGVzZXRzXG4gKiBAcGFyYW0ge251bWJlcltdfSBwc2V1ZG9cbiAqIEBwYXJhbSB7bnVtYmVyW119IHBvaW50c1xuICogQHBhcmFtIHtzdHJpbmdbXX0gZGVjbGFyYXRpb25zXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZSAodmFsdWUsIHJvb3QsIHBhcmVudCwgcnVsZSwgcnVsZXMsIHJ1bGVzZXRzLCBwc2V1ZG8sIHBvaW50cywgZGVjbGFyYXRpb25zKSB7XG5cdHZhciBpbmRleCA9IDBcblx0dmFyIG9mZnNldCA9IDBcblx0dmFyIGxlbmd0aCA9IHBzZXVkb1xuXHR2YXIgYXRydWxlID0gMFxuXHR2YXIgcHJvcGVydHkgPSAwXG5cdHZhciBwcmV2aW91cyA9IDBcblx0dmFyIHZhcmlhYmxlID0gMVxuXHR2YXIgc2Nhbm5pbmcgPSAxXG5cdHZhciBhbXBlcnNhbmQgPSAxXG5cdHZhciBjaGFyYWN0ZXIgPSAwXG5cdHZhciB0eXBlID0gJydcblx0dmFyIHByb3BzID0gcnVsZXNcblx0dmFyIGNoaWxkcmVuID0gcnVsZXNldHNcblx0dmFyIHJlZmVyZW5jZSA9IHJ1bGVcblx0dmFyIGNoYXJhY3RlcnMgPSB0eXBlXG5cblx0d2hpbGUgKHNjYW5uaW5nKVxuXHRcdHN3aXRjaCAocHJldmlvdXMgPSBjaGFyYWN0ZXIsIGNoYXJhY3RlciA9IG5leHQoKSkge1xuXHRcdFx0Ly8gKFxuXHRcdFx0Y2FzZSA0MDpcblx0XHRcdFx0aWYgKHByZXZpb3VzICE9IDEwOCAmJiBjaGFyYXQoY2hhcmFjdGVycywgbGVuZ3RoIC0gMSkgPT0gNTgpIHtcblx0XHRcdFx0XHRpZiAoaW5kZXhvZihjaGFyYWN0ZXJzICs9IHJlcGxhY2UoZGVsaW1pdChjaGFyYWN0ZXIpLCAnJicsICcmXFxmJyksICcmXFxmJykgIT0gLTEpXG5cdFx0XHRcdFx0XHRhbXBlcnNhbmQgPSAtMVxuXHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdH1cblx0XHRcdC8vIFwiICcgW1xuXHRcdFx0Y2FzZSAzNDogY2FzZSAzOTogY2FzZSA5MTpcblx0XHRcdFx0Y2hhcmFjdGVycyArPSBkZWxpbWl0KGNoYXJhY3Rlcilcblx0XHRcdFx0YnJlYWtcblx0XHRcdC8vIFxcdCBcXG4gXFxyIFxcc1xuXHRcdFx0Y2FzZSA5OiBjYXNlIDEwOiBjYXNlIDEzOiBjYXNlIDMyOlxuXHRcdFx0XHRjaGFyYWN0ZXJzICs9IHdoaXRlc3BhY2UocHJldmlvdXMpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHQvLyBcXFxuXHRcdFx0Y2FzZSA5Mjpcblx0XHRcdFx0Y2hhcmFjdGVycyArPSBlc2NhcGluZyhjYXJldCgpIC0gMSwgNylcblx0XHRcdFx0Y29udGludWVcblx0XHRcdC8vIC9cblx0XHRcdGNhc2UgNDc6XG5cdFx0XHRcdHN3aXRjaCAocGVlaygpKSB7XG5cdFx0XHRcdFx0Y2FzZSA0MjogY2FzZSA0Nzpcblx0XHRcdFx0XHRcdGFwcGVuZChjb21tZW50KGNvbW1lbnRlcihuZXh0KCksIGNhcmV0KCkpLCByb290LCBwYXJlbnQpLCBkZWNsYXJhdGlvbnMpXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRjaGFyYWN0ZXJzICs9ICcvJ1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHQvLyB7XG5cdFx0XHRjYXNlIDEyMyAqIHZhcmlhYmxlOlxuXHRcdFx0XHRwb2ludHNbaW5kZXgrK10gPSBzdHJsZW4oY2hhcmFjdGVycykgKiBhbXBlcnNhbmRcblx0XHRcdC8vIH0gOyBcXDBcblx0XHRcdGNhc2UgMTI1ICogdmFyaWFibGU6IGNhc2UgNTk6IGNhc2UgMDpcblx0XHRcdFx0c3dpdGNoIChjaGFyYWN0ZXIpIHtcblx0XHRcdFx0XHQvLyBcXDAgfVxuXHRcdFx0XHRcdGNhc2UgMDogY2FzZSAxMjU6IHNjYW5uaW5nID0gMFxuXHRcdFx0XHRcdC8vIDtcblx0XHRcdFx0XHRjYXNlIDU5ICsgb2Zmc2V0OiBpZiAoYW1wZXJzYW5kID09IC0xKSBjaGFyYWN0ZXJzID0gcmVwbGFjZShjaGFyYWN0ZXJzLCAvXFxmL2csICcnKVxuXHRcdFx0XHRcdFx0aWYgKHByb3BlcnR5ID4gMCAmJiAoc3RybGVuKGNoYXJhY3RlcnMpIC0gbGVuZ3RoKSlcblx0XHRcdFx0XHRcdFx0YXBwZW5kKHByb3BlcnR5ID4gMzIgPyBkZWNsYXJhdGlvbihjaGFyYWN0ZXJzICsgJzsnLCBydWxlLCBwYXJlbnQsIGxlbmd0aCAtIDEpIDogZGVjbGFyYXRpb24ocmVwbGFjZShjaGFyYWN0ZXJzLCAnICcsICcnKSArICc7JywgcnVsZSwgcGFyZW50LCBsZW5ndGggLSAyKSwgZGVjbGFyYXRpb25zKVxuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHQvLyBAIDtcblx0XHRcdFx0XHRjYXNlIDU5OiBjaGFyYWN0ZXJzICs9ICc7J1xuXHRcdFx0XHRcdC8vIHsgcnVsZS9hdC1ydWxlXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdGFwcGVuZChyZWZlcmVuY2UgPSBydWxlc2V0KGNoYXJhY3RlcnMsIHJvb3QsIHBhcmVudCwgaW5kZXgsIG9mZnNldCwgcnVsZXMsIHBvaW50cywgdHlwZSwgcHJvcHMgPSBbXSwgY2hpbGRyZW4gPSBbXSwgbGVuZ3RoKSwgcnVsZXNldHMpXG5cblx0XHRcdFx0XHRcdGlmIChjaGFyYWN0ZXIgPT09IDEyMylcblx0XHRcdFx0XHRcdFx0aWYgKG9mZnNldCA9PT0gMClcblx0XHRcdFx0XHRcdFx0XHRwYXJzZShjaGFyYWN0ZXJzLCByb290LCByZWZlcmVuY2UsIHJlZmVyZW5jZSwgcHJvcHMsIHJ1bGVzZXRzLCBsZW5ndGgsIHBvaW50cywgY2hpbGRyZW4pXG5cdFx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0XHRzd2l0Y2ggKGF0cnVsZSA9PT0gOTkgJiYgY2hhcmF0KGNoYXJhY3RlcnMsIDMpID09PSAxMTAgPyAxMDAgOiBhdHJ1bGUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIGQgbCBtIHNcblx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgMTAwOiBjYXNlIDEwODogY2FzZSAxMDk6IGNhc2UgMTE1OlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYXJzZSh2YWx1ZSwgcmVmZXJlbmNlLCByZWZlcmVuY2UsIHJ1bGUgJiYgYXBwZW5kKHJ1bGVzZXQodmFsdWUsIHJlZmVyZW5jZSwgcmVmZXJlbmNlLCAwLCAwLCBydWxlcywgcG9pbnRzLCB0eXBlLCBydWxlcywgcHJvcHMgPSBbXSwgbGVuZ3RoKSwgY2hpbGRyZW4pLCBydWxlcywgY2hpbGRyZW4sIGxlbmd0aCwgcG9pbnRzLCBydWxlID8gcHJvcHMgOiBjaGlsZHJlbilcblx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhcnNlKGNoYXJhY3RlcnMsIHJlZmVyZW5jZSwgcmVmZXJlbmNlLCByZWZlcmVuY2UsIFsnJ10sIGNoaWxkcmVuLCAwLCBwb2ludHMsIGNoaWxkcmVuKVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGluZGV4ID0gb2Zmc2V0ID0gcHJvcGVydHkgPSAwLCB2YXJpYWJsZSA9IGFtcGVyc2FuZCA9IDEsIHR5cGUgPSBjaGFyYWN0ZXJzID0gJycsIGxlbmd0aCA9IHBzZXVkb1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Ly8gOlxuXHRcdFx0Y2FzZSA1ODpcblx0XHRcdFx0bGVuZ3RoID0gMSArIHN0cmxlbihjaGFyYWN0ZXJzKSwgcHJvcGVydHkgPSBwcmV2aW91c1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0aWYgKHZhcmlhYmxlIDwgMSlcblx0XHRcdFx0XHRpZiAoY2hhcmFjdGVyID09IDEyMylcblx0XHRcdFx0XHRcdC0tdmFyaWFibGVcblx0XHRcdFx0XHRlbHNlIGlmIChjaGFyYWN0ZXIgPT0gMTI1ICYmIHZhcmlhYmxlKysgPT0gMCAmJiBwcmV2KCkgPT0gMTI1KVxuXHRcdFx0XHRcdFx0Y29udGludWVcblxuXHRcdFx0XHRzd2l0Y2ggKGNoYXJhY3RlcnMgKz0gZnJvbShjaGFyYWN0ZXIpLCBjaGFyYWN0ZXIgKiB2YXJpYWJsZSkge1xuXHRcdFx0XHRcdC8vICZcblx0XHRcdFx0XHRjYXNlIDM4OlxuXHRcdFx0XHRcdFx0YW1wZXJzYW5kID0gb2Zmc2V0ID4gMCA/IDEgOiAoY2hhcmFjdGVycyArPSAnXFxmJywgLTEpXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdC8vICxcblx0XHRcdFx0XHRjYXNlIDQ0OlxuXHRcdFx0XHRcdFx0cG9pbnRzW2luZGV4KytdID0gKHN0cmxlbihjaGFyYWN0ZXJzKSAtIDEpICogYW1wZXJzYW5kLCBhbXBlcnNhbmQgPSAxXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdC8vIEBcblx0XHRcdFx0XHRjYXNlIDY0OlxuXHRcdFx0XHRcdFx0Ly8gLVxuXHRcdFx0XHRcdFx0aWYgKHBlZWsoKSA9PT0gNDUpXG5cdFx0XHRcdFx0XHRcdGNoYXJhY3RlcnMgKz0gZGVsaW1pdChuZXh0KCkpXG5cblx0XHRcdFx0XHRcdGF0cnVsZSA9IHBlZWsoKSwgb2Zmc2V0ID0gbGVuZ3RoID0gc3RybGVuKHR5cGUgPSBjaGFyYWN0ZXJzICs9IGlkZW50aWZpZXIoY2FyZXQoKSkpLCBjaGFyYWN0ZXIrK1xuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHQvLyAtXG5cdFx0XHRcdFx0Y2FzZSA0NTpcblx0XHRcdFx0XHRcdGlmIChwcmV2aW91cyA9PT0gNDUgJiYgc3RybGVuKGNoYXJhY3RlcnMpID09IDIpXG5cdFx0XHRcdFx0XHRcdHZhcmlhYmxlID0gMFxuXHRcdFx0XHR9XG5cdFx0fVxuXG5cdHJldHVybiBydWxlc2V0c1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0P30gcGFyZW50XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJ1bGVzXG4gKiBAcGFyYW0ge251bWJlcltdfSBwb2ludHNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmdbXX0gY2hpbGRyZW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzZXQgKHZhbHVlLCByb290LCBwYXJlbnQsIGluZGV4LCBvZmZzZXQsIHJ1bGVzLCBwb2ludHMsIHR5cGUsIHByb3BzLCBjaGlsZHJlbiwgbGVuZ3RoKSB7XG5cdHZhciBwb3N0ID0gb2Zmc2V0IC0gMVxuXHR2YXIgcnVsZSA9IG9mZnNldCA9PT0gMCA/IHJ1bGVzIDogWycnXVxuXHR2YXIgc2l6ZSA9IHNpemVvZihydWxlKVxuXG5cdGZvciAodmFyIGkgPSAwLCBqID0gMCwgayA9IDA7IGkgPCBpbmRleDsgKytpKVxuXHRcdGZvciAodmFyIHggPSAwLCB5ID0gc3Vic3RyKHZhbHVlLCBwb3N0ICsgMSwgcG9zdCA9IGFicyhqID0gcG9pbnRzW2ldKSksIHogPSB2YWx1ZTsgeCA8IHNpemU7ICsreClcblx0XHRcdGlmICh6ID0gdHJpbShqID4gMCA/IHJ1bGVbeF0gKyAnICcgKyB5IDogcmVwbGFjZSh5LCAvJlxcZi9nLCBydWxlW3hdKSkpXG5cdFx0XHRcdHByb3BzW2srK10gPSB6XG5cblx0cmV0dXJuIG5vZGUodmFsdWUsIHJvb3QsIHBhcmVudCwgb2Zmc2V0ID09PSAwID8gUlVMRVNFVCA6IHR5cGUsIHByb3BzLCBjaGlsZHJlbiwgbGVuZ3RoKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0P30gcGFyZW50XG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21tZW50ICh2YWx1ZSwgcm9vdCwgcGFyZW50KSB7XG5cdHJldHVybiBub2RlKHZhbHVlLCByb290LCBwYXJlbnQsIENPTU1FTlQsIGZyb20oY2hhcigpKSwgc3Vic3RyKHZhbHVlLCAyLCAtMiksIDApXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge29iamVjdH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3Q/fSBwYXJlbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY2xhcmF0aW9uICh2YWx1ZSwgcm9vdCwgcGFyZW50LCBsZW5ndGgpIHtcblx0cmV0dXJuIG5vZGUodmFsdWUsIHJvb3QsIHBhcmVudCwgREVDTEFSQVRJT04sIHN1YnN0cih2YWx1ZSwgMCwgbGVuZ3RoKSwgc3Vic3RyKHZhbHVlLCBsZW5ndGggKyAxLCAtMSksIGxlbmd0aClcbn1cbiIsImltcG9ydCB7SU1QT1JULCBMQVlFUiwgQ09NTUVOVCwgUlVMRVNFVCwgREVDTEFSQVRJT04sIEtFWUZSQU1FU30gZnJvbSAnLi9FbnVtLmpzJ1xuaW1wb3J0IHtzdHJsZW4sIHNpemVvZn0gZnJvbSAnLi9VdGlsaXR5LmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0W119IGNoaWxkcmVuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplIChjaGlsZHJlbiwgY2FsbGJhY2spIHtcblx0dmFyIG91dHB1dCA9ICcnXG5cdHZhciBsZW5ndGggPSBzaXplb2YoY2hpbGRyZW4pXG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcblx0XHRvdXRwdXQgKz0gY2FsbGJhY2soY2hpbGRyZW5baV0sIGksIGNoaWxkcmVuLCBjYWxsYmFjaykgfHwgJydcblxuXHRyZXR1cm4gb3V0cHV0XG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHtvYmplY3RbXX0gY2hpbGRyZW5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnkgKGVsZW1lbnQsIGluZGV4LCBjaGlsZHJlbiwgY2FsbGJhY2spIHtcblx0c3dpdGNoIChlbGVtZW50LnR5cGUpIHtcblx0XHRjYXNlIExBWUVSOiBpZiAoZWxlbWVudC5jaGlsZHJlbi5sZW5ndGgpIGJyZWFrXG5cdFx0Y2FzZSBJTVBPUlQ6IGNhc2UgREVDTEFSQVRJT046IHJldHVybiBlbGVtZW50LnJldHVybiA9IGVsZW1lbnQucmV0dXJuIHx8IGVsZW1lbnQudmFsdWVcblx0XHRjYXNlIENPTU1FTlQ6IHJldHVybiAnJ1xuXHRcdGNhc2UgS0VZRlJBTUVTOiByZXR1cm4gZWxlbWVudC5yZXR1cm4gPSBlbGVtZW50LnZhbHVlICsgJ3snICsgc2VyaWFsaXplKGVsZW1lbnQuY2hpbGRyZW4sIGNhbGxiYWNrKSArICd9J1xuXHRcdGNhc2UgUlVMRVNFVDogZWxlbWVudC52YWx1ZSA9IGVsZW1lbnQucHJvcHMuam9pbignLCcpXG5cdH1cblxuXHRyZXR1cm4gc3RybGVuKGNoaWxkcmVuID0gc2VyaWFsaXplKGVsZW1lbnQuY2hpbGRyZW4sIGNhbGxiYWNrKSkgPyBlbGVtZW50LnJldHVybiA9IGVsZW1lbnQudmFsdWUgKyAneycgKyBjaGlsZHJlbiArICd9JyA6ICcnXG59XG4iLCJpbXBvcnQge01TLCBNT1osIFdFQktJVCwgUlVMRVNFVCwgS0VZRlJBTUVTLCBERUNMQVJBVElPTn0gZnJvbSAnLi9FbnVtLmpzJ1xuaW1wb3J0IHttYXRjaCwgY2hhcmF0LCBzdWJzdHIsIHN0cmxlbiwgc2l6ZW9mLCByZXBsYWNlLCBjb21iaW5lfSBmcm9tICcuL1V0aWxpdHkuanMnXG5pbXBvcnQge2NvcHksIHRva2VuaXplfSBmcm9tICcuL1Rva2VuaXplci5qcydcbmltcG9ydCB7c2VyaWFsaXplfSBmcm9tICcuL1NlcmlhbGl6ZXIuanMnXG5pbXBvcnQge3ByZWZpeH0gZnJvbSAnLi9QcmVmaXhlci5qcydcblxuLyoqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uW119IGNvbGxlY3Rpb25cbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZSAoY29sbGVjdGlvbikge1xuXHR2YXIgbGVuZ3RoID0gc2l6ZW9mKGNvbGxlY3Rpb24pXG5cblx0cmV0dXJuIGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCwgY2hpbGRyZW4sIGNhbGxiYWNrKSB7XG5cdFx0dmFyIG91dHB1dCA9ICcnXG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuXHRcdFx0b3V0cHV0ICs9IGNvbGxlY3Rpb25baV0oZWxlbWVudCwgaW5kZXgsIGNoaWxkcmVuLCBjYWxsYmFjaykgfHwgJydcblxuXHRcdHJldHVybiBvdXRwdXRcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzaGVldCAoY2FsbGJhY2spIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0aWYgKCFlbGVtZW50LnJvb3QpXG5cdFx0XHRpZiAoZWxlbWVudCA9IGVsZW1lbnQucmV0dXJuKVxuXHRcdFx0XHRjYWxsYmFjayhlbGVtZW50KVxuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHtvYmplY3RbXX0gY2hpbGRyZW5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmVmaXhlciAoZWxlbWVudCwgaW5kZXgsIGNoaWxkcmVuLCBjYWxsYmFjaykge1xuXHRpZiAoZWxlbWVudC5sZW5ndGggPiAtMSlcblx0XHRpZiAoIWVsZW1lbnQucmV0dXJuKVxuXHRcdFx0c3dpdGNoIChlbGVtZW50LnR5cGUpIHtcblx0XHRcdFx0Y2FzZSBERUNMQVJBVElPTjogZWxlbWVudC5yZXR1cm4gPSBwcmVmaXgoZWxlbWVudC52YWx1ZSwgZWxlbWVudC5sZW5ndGgsIGNoaWxkcmVuKVxuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHRjYXNlIEtFWUZSQU1FUzpcblx0XHRcdFx0XHRyZXR1cm4gc2VyaWFsaXplKFtjb3B5KGVsZW1lbnQsIHt2YWx1ZTogcmVwbGFjZShlbGVtZW50LnZhbHVlLCAnQCcsICdAJyArIFdFQktJVCl9KV0sIGNhbGxiYWNrKVxuXHRcdFx0XHRjYXNlIFJVTEVTRVQ6XG5cdFx0XHRcdFx0aWYgKGVsZW1lbnQubGVuZ3RoKVxuXHRcdFx0XHRcdFx0cmV0dXJuIGNvbWJpbmUoZWxlbWVudC5wcm9wcywgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRcdHN3aXRjaCAobWF0Y2godmFsdWUsIC8oOjpwbGFjXFx3K3w6cmVhZC1cXHcrKS8pKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gOnJlYWQtKG9ubHl8d3JpdGUpXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnOnJlYWQtb25seSc6IGNhc2UgJzpyZWFkLXdyaXRlJzpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBzZXJpYWxpemUoW2NvcHkoZWxlbWVudCwge3Byb3BzOiBbcmVwbGFjZSh2YWx1ZSwgLzoocmVhZC1cXHcrKS8sICc6JyArIE1PWiArICckMScpXX0pXSwgY2FsbGJhY2spXG5cdFx0XHRcdFx0XHRcdFx0Ly8gOnBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnOjpwbGFjZWhvbGRlcic6XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2VyaWFsaXplKFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29weShlbGVtZW50LCB7cHJvcHM6IFtyZXBsYWNlKHZhbHVlLCAvOihwbGFjXFx3KykvLCAnOicgKyBXRUJLSVQgKyAnaW5wdXQtJDEnKV19KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29weShlbGVtZW50LCB7cHJvcHM6IFtyZXBsYWNlKHZhbHVlLCAvOihwbGFjXFx3KykvLCAnOicgKyBNT1ogKyAnJDEnKV19KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29weShlbGVtZW50LCB7cHJvcHM6IFtyZXBsYWNlKHZhbHVlLCAvOihwbGFjXFx3KykvLCBNUyArICdpbnB1dC0kMScpXX0pXG5cdFx0XHRcdFx0XHRcdFx0XHRdLCBjYWxsYmFjaylcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHJldHVybiAnJ1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gZWxlbWVudFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0ge29iamVjdFtdfSBjaGlsZHJlblxuICovXG5leHBvcnQgZnVuY3Rpb24gbmFtZXNwYWNlIChlbGVtZW50KSB7XG5cdHN3aXRjaCAoZWxlbWVudC50eXBlKSB7XG5cdFx0Y2FzZSBSVUxFU0VUOlxuXHRcdFx0ZWxlbWVudC5wcm9wcyA9IGVsZW1lbnQucHJvcHMubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gY29tYmluZSh0b2tlbml6ZSh2YWx1ZSksIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIGNoaWxkcmVuKSB7XG5cdFx0XHRcdFx0c3dpdGNoIChjaGFyYXQodmFsdWUsIDApKSB7XG5cdFx0XHRcdFx0XHQvLyBcXGZcblx0XHRcdFx0XHRcdGNhc2UgMTI6XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzdWJzdHIodmFsdWUsIDEsIHN0cmxlbih2YWx1ZSkpXG5cdFx0XHRcdFx0XHQvLyBcXDAgKCArID4gflxuXHRcdFx0XHRcdFx0Y2FzZSAwOiBjYXNlIDQwOiBjYXNlIDQzOiBjYXNlIDYyOiBjYXNlIDEyNjpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlXG5cdFx0XHRcdFx0XHQvLyA6XG5cdFx0XHRcdFx0XHRjYXNlIDU4OlxuXHRcdFx0XHRcdFx0XHRpZiAoY2hpbGRyZW5bKytpbmRleF0gPT09ICdnbG9iYWwnKVxuXHRcdFx0XHRcdFx0XHRcdGNoaWxkcmVuW2luZGV4XSA9ICcnLCBjaGlsZHJlblsrK2luZGV4XSA9ICdcXGYnICsgc3Vic3RyKGNoaWxkcmVuW2luZGV4XSwgaW5kZXggPSAxLCAtMSlcblx0XHRcdFx0XHRcdC8vIFxcc1xuXHRcdFx0XHRcdFx0Y2FzZSAzMjpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGluZGV4ID09PSAxID8gJycgOiB2YWx1ZVxuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0c3dpdGNoIChpbmRleCkge1xuXHRcdFx0XHRcdFx0XHRcdGNhc2UgMDogZWxlbWVudCA9IHZhbHVlXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2l6ZW9mKGNoaWxkcmVuKSA+IDEgPyAnJyA6IHZhbHVlXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSBpbmRleCA9IHNpemVvZihjaGlsZHJlbikgLSAxOiBjYXNlIDI6XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gaW5kZXggPT09IDIgPyB2YWx1ZSArIGVsZW1lbnQgKyBlbGVtZW50IDogdmFsdWUgKyBlbGVtZW50XG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fSlcblx0fVxufVxuIiwiaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gJ0BlbW90aW9uL3NoZWV0JztcbmltcG9ydCB7IGRlYWxsb2MsIGFsbG9jLCBuZXh0LCB0b2tlbiwgZnJvbSwgcGVlaywgZGVsaW1pdCwgc2xpY2UsIHBvc2l0aW9uLCBSVUxFU0VULCBjb21iaW5lLCBtYXRjaCwgc2VyaWFsaXplLCBjb3B5LCByZXBsYWNlLCBXRUJLSVQsIE1PWiwgTVMsIEtFWUZSQU1FUywgREVDTEFSQVRJT04sIGhhc2gsIGNoYXJhdCwgc3RybGVuLCBpbmRleG9mLCBtaWRkbGV3YXJlLCBzdHJpbmdpZnksIENPTU1FTlQsIGNvbXBpbGUgfSBmcm9tICdzdHlsaXMnO1xuaW1wb3J0ICdAZW1vdGlvbi93ZWFrLW1lbW9pemUnO1xuaW1wb3J0ICdAZW1vdGlvbi9tZW1vaXplJztcblxudmFyIGlkZW50aWZpZXJXaXRoUG9pbnRUcmFja2luZyA9IGZ1bmN0aW9uIGlkZW50aWZpZXJXaXRoUG9pbnRUcmFja2luZyhiZWdpbiwgcG9pbnRzLCBpbmRleCkge1xuICB2YXIgcHJldmlvdXMgPSAwO1xuICB2YXIgY2hhcmFjdGVyID0gMDtcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHByZXZpb3VzID0gY2hhcmFjdGVyO1xuICAgIGNoYXJhY3RlciA9IHBlZWsoKTsgLy8gJlxcZlxuXG4gICAgaWYgKHByZXZpb3VzID09PSAzOCAmJiBjaGFyYWN0ZXIgPT09IDEyKSB7XG4gICAgICBwb2ludHNbaW5kZXhdID0gMTtcbiAgICB9XG5cbiAgICBpZiAodG9rZW4oY2hhcmFjdGVyKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbmV4dCgpO1xuICB9XG5cbiAgcmV0dXJuIHNsaWNlKGJlZ2luLCBwb3NpdGlvbik7XG59O1xuXG52YXIgdG9SdWxlcyA9IGZ1bmN0aW9uIHRvUnVsZXMocGFyc2VkLCBwb2ludHMpIHtcbiAgLy8gcHJldGVuZCB3ZSd2ZSBzdGFydGVkIHdpdGggYSBjb21tYVxuICB2YXIgaW5kZXggPSAtMTtcbiAgdmFyIGNoYXJhY3RlciA9IDQ0O1xuXG4gIGRvIHtcbiAgICBzd2l0Y2ggKHRva2VuKGNoYXJhY3RlcikpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgLy8gJlxcZlxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSAzOCAmJiBwZWVrKCkgPT09IDEyKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBub3QgMTAwJSBjb3JyZWN0LCB3ZSBkb24ndCBhY2NvdW50IGZvciBsaXRlcmFsIHNlcXVlbmNlcyBoZXJlIC0gbGlrZSBmb3IgZXhhbXBsZSBxdW90ZWQgc3RyaW5nc1xuICAgICAgICAgIC8vIHN0eWxpcyBpbnNlcnRzIFxcZiBhZnRlciAmIHRvIGtub3cgd2hlbiAmIHdoZXJlIGl0IHNob3VsZCByZXBsYWNlIHRoaXMgc2VxdWVuY2Ugd2l0aCB0aGUgY29udGV4dCBzZWxlY3RvclxuICAgICAgICAgIC8vIGFuZCB3aGVuIGl0IHNob3VsZCBqdXN0IGNvbmNhdGVuYXRlIHRoZSBvdXRlciBhbmQgaW5uZXIgc2VsZWN0b3JzXG4gICAgICAgICAgLy8gaXQncyB2ZXJ5IHVubGlrZWx5IGZvciB0aGlzIHNlcXVlbmNlIHRvIGFjdHVhbGx5IGFwcGVhciBpbiBhIGRpZmZlcmVudCBjb250ZXh0LCBzbyB3ZSBqdXN0IGxldmVyYWdlIHRoaXMgZmFjdCBoZXJlXG4gICAgICAgICAgcG9pbnRzW2luZGV4XSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJzZWRbaW5kZXhdICs9IGlkZW50aWZpZXJXaXRoUG9pbnRUcmFja2luZyhwb3NpdGlvbiAtIDEsIHBvaW50cywgaW5kZXgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICBwYXJzZWRbaW5kZXhdICs9IGRlbGltaXQoY2hhcmFjdGVyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgNDpcbiAgICAgICAgLy8gY29tbWFcbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gNDQpIHtcbiAgICAgICAgICAvLyBjb2xvblxuICAgICAgICAgIHBhcnNlZFsrK2luZGV4XSA9IHBlZWsoKSA9PT0gNTggPyAnJlxcZicgOiAnJztcbiAgICAgICAgICBwb2ludHNbaW5kZXhdID0gcGFyc2VkW2luZGV4XS5sZW5ndGg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgLy8gZmFsbHRocm91Z2hcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcGFyc2VkW2luZGV4XSArPSBmcm9tKGNoYXJhY3Rlcik7XG4gICAgfVxuICB9IHdoaWxlIChjaGFyYWN0ZXIgPSBuZXh0KCkpO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuXG52YXIgZ2V0UnVsZXMgPSBmdW5jdGlvbiBnZXRSdWxlcyh2YWx1ZSwgcG9pbnRzKSB7XG4gIHJldHVybiBkZWFsbG9jKHRvUnVsZXMoYWxsb2ModmFsdWUpLCBwb2ludHMpKTtcbn07IC8vIFdlYWtTZXQgd291bGQgYmUgbW9yZSBhcHByb3ByaWF0ZSwgYnV0IG9ubHkgV2Vha01hcCBpcyBzdXBwb3J0ZWQgaW4gSUUxMVxuXG5cbnZhciBmaXhlZEVsZW1lbnRzID0gLyogI19fUFVSRV9fICovbmV3IFdlYWtNYXAoKTtcbnZhciBjb21wYXQgPSBmdW5jdGlvbiBjb21wYXQoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC50eXBlICE9PSAncnVsZScgfHwgIWVsZW1lbnQucGFyZW50IHx8IC8vIHBvc2l0aXZlIC5sZW5ndGggaW5kaWNhdGVzIHRoYXQgdGhpcyBydWxlIGNvbnRhaW5zIHBzZXVkb1xuICAvLyBuZWdhdGl2ZSAubGVuZ3RoIGluZGljYXRlcyB0aGF0IHRoaXMgcnVsZSBoYXMgYmVlbiBhbHJlYWR5IHByZWZpeGVkXG4gIGVsZW1lbnQubGVuZ3RoIDwgMSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB2YWx1ZSA9IGVsZW1lbnQudmFsdWUsXG4gICAgICBwYXJlbnQgPSBlbGVtZW50LnBhcmVudDtcbiAgdmFyIGlzSW1wbGljaXRSdWxlID0gZWxlbWVudC5jb2x1bW4gPT09IHBhcmVudC5jb2x1bW4gJiYgZWxlbWVudC5saW5lID09PSBwYXJlbnQubGluZTtcblxuICB3aGlsZSAocGFyZW50LnR5cGUgIT09ICdydWxlJykge1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgaWYgKCFwYXJlbnQpIHJldHVybjtcbiAgfSAvLyBzaG9ydC1jaXJjdWl0IGZvciB0aGUgc2ltcGxlc3QgY2FzZVxuXG5cbiAgaWYgKGVsZW1lbnQucHJvcHMubGVuZ3RoID09PSAxICYmIHZhbHVlLmNoYXJDb2RlQXQoMCkgIT09IDU4XG4gIC8qIGNvbG9uICovXG4gICYmICFmaXhlZEVsZW1lbnRzLmdldChwYXJlbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIGlmIHRoaXMgaXMgYW4gaW1wbGljaXRseSBpbnNlcnRlZCBydWxlICh0aGUgb25lIGVhZ2VybHkgaW5zZXJ0ZWQgYXQgdGhlIGVhY2ggbmV3IG5lc3RlZCBsZXZlbClcbiAgLy8gdGhlbiB0aGUgcHJvcHMgaGFzIGFscmVhZHkgYmVlbiBtYW5pcHVsYXRlZCBiZWZvcmVoYW5kIGFzIHRoZXkgdGhhdCBhcnJheSBpcyBzaGFyZWQgYmV0d2VlbiBpdCBhbmQgaXRzIFwicnVsZSBwYXJlbnRcIlxuXG5cbiAgaWYgKGlzSW1wbGljaXRSdWxlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZml4ZWRFbGVtZW50cy5zZXQoZWxlbWVudCwgdHJ1ZSk7XG4gIHZhciBwb2ludHMgPSBbXTtcbiAgdmFyIHJ1bGVzID0gZ2V0UnVsZXModmFsdWUsIHBvaW50cyk7XG4gIHZhciBwYXJlbnRSdWxlcyA9IHBhcmVudC5wcm9wcztcblxuICBmb3IgKHZhciBpID0gMCwgayA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGFyZW50UnVsZXMubGVuZ3RoOyBqKyssIGsrKykge1xuICAgICAgZWxlbWVudC5wcm9wc1trXSA9IHBvaW50c1tpXSA/IHJ1bGVzW2ldLnJlcGxhY2UoLyZcXGYvZywgcGFyZW50UnVsZXNbal0pIDogcGFyZW50UnVsZXNbal0gKyBcIiBcIiArIHJ1bGVzW2ldO1xuICAgIH1cbiAgfVxufTtcbnZhciByZW1vdmVMYWJlbCA9IGZ1bmN0aW9uIHJlbW92ZUxhYmVsKGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2RlY2wnKSB7XG4gICAgdmFyIHZhbHVlID0gZWxlbWVudC52YWx1ZTtcblxuICAgIGlmICggLy8gY2hhcmNvZGUgZm9yIGxcbiAgICB2YWx1ZS5jaGFyQ29kZUF0KDApID09PSAxMDggJiYgLy8gY2hhcmNvZGUgZm9yIGJcbiAgICB2YWx1ZS5jaGFyQ29kZUF0KDIpID09PSA5OCkge1xuICAgICAgLy8gdGhpcyBpZ25vcmVzIGxhYmVsXG4gICAgICBlbGVtZW50W1wicmV0dXJuXCJdID0gJyc7XG4gICAgICBlbGVtZW50LnZhbHVlID0gJyc7XG4gICAgfVxuICB9XG59O1xudmFyIGlnbm9yZUZsYWcgPSAnZW1vdGlvbi1kaXNhYmxlLXNlcnZlci1yZW5kZXJpbmctdW5zYWZlLXNlbGVjdG9yLXdhcm5pbmctcGxlYXNlLWRvLW5vdC11c2UtdGhpcy10aGUtd2FybmluZy1leGlzdHMtZm9yLWEtcmVhc29uJztcblxudmFyIGlzSWdub3JpbmdDb21tZW50ID0gZnVuY3Rpb24gaXNJZ25vcmluZ0NvbW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC50eXBlID09PSAnY29tbScgJiYgZWxlbWVudC5jaGlsZHJlbi5pbmRleE9mKGlnbm9yZUZsYWcpID4gLTE7XG59O1xuXG52YXIgY3JlYXRlVW5zYWZlU2VsZWN0b3JzQWxhcm0gPSBmdW5jdGlvbiBjcmVhdGVVbnNhZmVTZWxlY3RvcnNBbGFybShjYWNoZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4LCBjaGlsZHJlbikge1xuICAgIGlmIChlbGVtZW50LnR5cGUgIT09ICdydWxlJyB8fCBjYWNoZS5jb21wYXQpIHJldHVybjtcbiAgICB2YXIgdW5zYWZlUHNldWRvQ2xhc3NlcyA9IGVsZW1lbnQudmFsdWUubWF0Y2goLyg6Zmlyc3R8Om50aHw6bnRoLWxhc3QpLWNoaWxkL2cpO1xuXG4gICAgaWYgKHVuc2FmZVBzZXVkb0NsYXNzZXMpIHtcbiAgICAgIHZhciBpc05lc3RlZCA9ICEhZWxlbWVudC5wYXJlbnQ7IC8vIGluIG5lc3RlZCBydWxlcyBjb21tZW50cyBiZWNvbWUgY2hpbGRyZW4gb2YgdGhlIFwiYXV0by1pbnNlcnRlZFwiIHJ1bGUgYW5kIHRoYXQncyBhbHdheXMgdGhlIGBlbGVtZW50LnBhcmVudGBcbiAgICAgIC8vXG4gICAgICAvLyBjb25zaWRlcmluZyB0aGlzIGlucHV0OlxuICAgICAgLy8gLmEge1xuICAgICAgLy8gICAuYiAvKiBjb21tICovIHt9XG4gICAgICAvLyAgIGNvbG9yOiBob3RwaW5rO1xuICAgICAgLy8gfVxuICAgICAgLy8gd2UgZ2V0IG91dHB1dCBjb3JyZXNwb25kaW5nIHRvIHRoaXM6XG4gICAgICAvLyAuYSB7XG4gICAgICAvLyAgICYge1xuICAgICAgLy8gICAgIC8qIGNvbW0gKi9cbiAgICAgIC8vICAgICBjb2xvcjogaG90cGluaztcbiAgICAgIC8vICAgfVxuICAgICAgLy8gICAuYiB7fVxuICAgICAgLy8gfVxuXG4gICAgICB2YXIgY29tbWVudENvbnRhaW5lciA9IGlzTmVzdGVkID8gZWxlbWVudC5wYXJlbnQuY2hpbGRyZW4gOiAvLyBnbG9iYWwgcnVsZSBhdCB0aGUgcm9vdCBsZXZlbFxuICAgICAgY2hpbGRyZW47XG5cbiAgICAgIGZvciAodmFyIGkgPSBjb21tZW50Q29udGFpbmVyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHZhciBub2RlID0gY29tbWVudENvbnRhaW5lcltpXTtcblxuICAgICAgICBpZiAobm9kZS5saW5lIDwgZWxlbWVudC5saW5lKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gLy8gaXQgaXMgcXVpdGUgd2VpcmQgYnV0IGNvbW1lbnRzIGFyZSAqdXN1YWxseSogcHV0IGF0IGBjb2x1bW46IGVsZW1lbnQuY29sdW1uIC0gMWBcbiAgICAgICAgLy8gc28gd2Ugc2VlayAqZnJvbSB0aGUgZW5kKiBmb3IgdGhlIG5vZGUgdGhhdCBpcyBlYXJsaWVyIHRoYW4gdGhlIHJ1bGUncyBgZWxlbWVudGAgYW5kIGNoZWNrIHRoYXRcbiAgICAgICAgLy8gdGhpcyB3aWxsIGFsc28gbWF0Y2ggaW5wdXRzIGxpa2UgdGhpczpcbiAgICAgICAgLy8gLmEge1xuICAgICAgICAvLyAgIC8qIGNvbW0gKi9cbiAgICAgICAgLy8gICAuYiB7fVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGJ1dCB0aGF0IGlzIGZpbmVcbiAgICAgICAgLy9cbiAgICAgICAgLy8gaXQgd291bGQgYmUgdGhlIGVhc2llc3QgdG8gY2hhbmdlIHRoZSBwbGFjZW1lbnQgb2YgdGhlIGNvbW1lbnQgdG8gYmUgdGhlIGZpcnN0IGNoaWxkIG9mIHRoZSBydWxlOlxuICAgICAgICAvLyAuYSB7XG4gICAgICAgIC8vICAgLmIgeyAvKiBjb21tICovIH1cbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB3aXRoIHN1Y2ggaW5wdXRzIHdlIHdvdWxkbid0IGhhdmUgdG8gc2VhcmNoIGZvciB0aGUgY29tbWVudCBhdCBhbGxcbiAgICAgICAgLy8gVE9ETzogY29uc2lkZXIgY2hhbmdpbmcgdGhpcyBjb21tZW50IHBsYWNlbWVudCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uXG5cblxuICAgICAgICBpZiAobm9kZS5jb2x1bW4gPCBlbGVtZW50LmNvbHVtbikge1xuICAgICAgICAgIGlmIChpc0lnbm9yaW5nQ29tbWVudChub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHVuc2FmZVBzZXVkb0NsYXNzZXMuZm9yRWFjaChmdW5jdGlvbiAodW5zYWZlUHNldWRvQ2xhc3MpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZSBwc2V1ZG8gY2xhc3MgXFxcIlwiICsgdW5zYWZlUHNldWRvQ2xhc3MgKyBcIlxcXCIgaXMgcG90ZW50aWFsbHkgdW5zYWZlIHdoZW4gZG9pbmcgc2VydmVyLXNpZGUgcmVuZGVyaW5nLiBUcnkgY2hhbmdpbmcgaXQgdG8gXFxcIlwiICsgdW5zYWZlUHNldWRvQ2xhc3Muc3BsaXQoJy1jaGlsZCcpWzBdICsgXCItb2YtdHlwZVxcXCIuXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufTtcblxudmFyIGlzSW1wb3J0UnVsZSA9IGZ1bmN0aW9uIGlzSW1wb3J0UnVsZShlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50LnR5cGUuY2hhckNvZGVBdCgxKSA9PT0gMTA1ICYmIGVsZW1lbnQudHlwZS5jaGFyQ29kZUF0KDApID09PSA2NDtcbn07XG5cbnZhciBpc1ByZXBlbmRlZFdpdGhSZWd1bGFyUnVsZXMgPSBmdW5jdGlvbiBpc1ByZXBlbmRlZFdpdGhSZWd1bGFyUnVsZXMoaW5kZXgsIGNoaWxkcmVuKSB7XG4gIGZvciAodmFyIGkgPSBpbmRleCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKCFpc0ltcG9ydFJ1bGUoY2hpbGRyZW5baV0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59OyAvLyB1c2UgdGhpcyB0byByZW1vdmUgaW5jb3JyZWN0IGVsZW1lbnRzIGZyb20gZnVydGhlciBwcm9jZXNzaW5nXG4vLyBzbyB0aGV5IGRvbid0IGdldCBoYW5kZWQgdG8gdGhlIGBzaGVldGAgKG9yIGFueXRoaW5nIGVsc2UpXG4vLyBhcyB0aGF0IGNvdWxkIHBvdGVudGlhbGx5IGxlYWQgdG8gYWRkaXRpb25hbCBsb2dzIHdoaWNoIGluIHR1cm4gY291bGQgYmUgb3ZlcmhlbG1pbmcgdG8gdGhlIHVzZXJcblxuXG52YXIgbnVsbGlmeUVsZW1lbnQgPSBmdW5jdGlvbiBudWxsaWZ5RWxlbWVudChlbGVtZW50KSB7XG4gIGVsZW1lbnQudHlwZSA9ICcnO1xuICBlbGVtZW50LnZhbHVlID0gJyc7XG4gIGVsZW1lbnRbXCJyZXR1cm5cIl0gPSAnJztcbiAgZWxlbWVudC5jaGlsZHJlbiA9ICcnO1xuICBlbGVtZW50LnByb3BzID0gJyc7XG59O1xuXG52YXIgaW5jb3JyZWN0SW1wb3J0QWxhcm0gPSBmdW5jdGlvbiBpbmNvcnJlY3RJbXBvcnRBbGFybShlbGVtZW50LCBpbmRleCwgY2hpbGRyZW4pIHtcbiAgaWYgKCFpc0ltcG9ydFJ1bGUoZWxlbWVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZWxlbWVudC5wYXJlbnQpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiYEBpbXBvcnRgIHJ1bGVzIGNhbid0IGJlIG5lc3RlZCBpbnNpZGUgb3RoZXIgcnVsZXMuIFBsZWFzZSBtb3ZlIGl0IHRvIHRoZSB0b3AgbGV2ZWwgYW5kIHB1dCBpdCBiZWZvcmUgcmVndWxhciBydWxlcy4gS2VlcCBpbiBtaW5kIHRoYXQgdGhleSBjYW4gb25seSBiZSB1c2VkIHdpdGhpbiBnbG9iYWwgc3R5bGVzLlwiKTtcbiAgICBudWxsaWZ5RWxlbWVudChlbGVtZW50KTtcbiAgfSBlbHNlIGlmIChpc1ByZXBlbmRlZFdpdGhSZWd1bGFyUnVsZXMoaW5kZXgsIGNoaWxkcmVuKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJgQGltcG9ydGAgcnVsZXMgY2FuJ3QgYmUgYWZ0ZXIgb3RoZXIgcnVsZXMuIFBsZWFzZSBwdXQgeW91ciBgQGltcG9ydGAgcnVsZXMgYmVmb3JlIHlvdXIgb3RoZXIgcnVsZXMuXCIpO1xuICAgIG51bGxpZnlFbGVtZW50KGVsZW1lbnQpO1xuICB9XG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1mYWxsdGhyb3VnaCAqL1xuXG5mdW5jdGlvbiBwcmVmaXgodmFsdWUsIGxlbmd0aCkge1xuICBzd2l0Y2ggKGhhc2godmFsdWUsIGxlbmd0aCkpIHtcbiAgICAvLyBjb2xvci1hZGp1c3RcbiAgICBjYXNlIDUxMDM6XG4gICAgICByZXR1cm4gV0VCS0lUICsgJ3ByaW50LScgKyB2YWx1ZSArIHZhbHVlO1xuICAgIC8vIGFuaW1hdGlvbiwgYW5pbWF0aW9uLShkZWxheXxkaXJlY3Rpb258ZHVyYXRpb258ZmlsbC1tb2RlfGl0ZXJhdGlvbi1jb3VudHxuYW1lfHBsYXktc3RhdGV8dGltaW5nLWZ1bmN0aW9uKVxuXG4gICAgY2FzZSA1NzM3OlxuICAgIGNhc2UgNDIwMTpcbiAgICBjYXNlIDMxNzc6XG4gICAgY2FzZSAzNDMzOlxuICAgIGNhc2UgMTY0MTpcbiAgICBjYXNlIDQ0NTc6XG4gICAgY2FzZSAyOTIxOiAvLyB0ZXh0LWRlY29yYXRpb24sIGZpbHRlciwgY2xpcC1wYXRoLCBiYWNrZmFjZS12aXNpYmlsaXR5LCBjb2x1bW4sIGJveC1kZWNvcmF0aW9uLWJyZWFrXG5cbiAgICBjYXNlIDU1NzI6XG4gICAgY2FzZSA2MzU2OlxuICAgIGNhc2UgNTg0NDpcbiAgICBjYXNlIDMxOTE6XG4gICAgY2FzZSA2NjQ1OlxuICAgIGNhc2UgMzAwNTogLy8gbWFzaywgbWFzay1pbWFnZSwgbWFzay0obW9kZXxjbGlwfHNpemUpLCBtYXNrLShyZXBlYXR8b3JpZ2luKSwgbWFzay1wb3NpdGlvbiwgbWFzay1jb21wb3NpdGUsXG5cbiAgICBjYXNlIDYzOTE6XG4gICAgY2FzZSA1ODc5OlxuICAgIGNhc2UgNTYyMzpcbiAgICBjYXNlIDYxMzU6XG4gICAgY2FzZSA0NTk5OlxuICAgIGNhc2UgNDg1NTogLy8gYmFja2dyb3VuZC1jbGlwLCBjb2x1bW5zLCBjb2x1bW4tKGNvdW50fGZpbGx8Z2FwfHJ1bGV8cnVsZS1jb2xvcnxydWxlLXN0eWxlfHJ1bGUtd2lkdGh8c3Bhbnx3aWR0aClcblxuICAgIGNhc2UgNDIxNTpcbiAgICBjYXNlIDYzODk6XG4gICAgY2FzZSA1MTA5OlxuICAgIGNhc2UgNTM2NTpcbiAgICBjYXNlIDU2MjE6XG4gICAgY2FzZSAzODI5OlxuICAgICAgcmV0dXJuIFdFQktJVCArIHZhbHVlICsgdmFsdWU7XG4gICAgLy8gYXBwZWFyYW5jZSwgdXNlci1zZWxlY3QsIHRyYW5zZm9ybSwgaHlwaGVucywgdGV4dC1zaXplLWFkanVzdFxuXG4gICAgY2FzZSA1MzQ5OlxuICAgIGNhc2UgNDI0NjpcbiAgICBjYXNlIDQ4MTA6XG4gICAgY2FzZSA2OTY4OlxuICAgIGNhc2UgMjc1NjpcbiAgICAgIHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1PWiArIHZhbHVlICsgTVMgKyB2YWx1ZSArIHZhbHVlO1xuICAgIC8vIGZsZXgsIGZsZXgtZGlyZWN0aW9uXG5cbiAgICBjYXNlIDY4Mjg6XG4gICAgY2FzZSA0MjY4OlxuICAgICAgcmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyB2YWx1ZSArIHZhbHVlO1xuICAgIC8vIG9yZGVyXG5cbiAgICBjYXNlIDYxNjU6XG4gICAgICByZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArICdmbGV4LScgKyB2YWx1ZSArIHZhbHVlO1xuICAgIC8vIGFsaWduLWl0ZW1zXG5cbiAgICBjYXNlIDUxODc6XG4gICAgICByZXR1cm4gV0VCS0lUICsgdmFsdWUgKyByZXBsYWNlKHZhbHVlLCAvKFxcdyspLisoOlteXSspLywgV0VCS0lUICsgJ2JveC0kMSQyJyArIE1TICsgJ2ZsZXgtJDEkMicpICsgdmFsdWU7XG4gICAgLy8gYWxpZ24tc2VsZlxuXG4gICAgY2FzZSA1NDQzOlxuICAgICAgcmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyAnZmxleC1pdGVtLScgKyByZXBsYWNlKHZhbHVlLCAvZmxleC18LXNlbGYvLCAnJykgKyB2YWx1ZTtcbiAgICAvLyBhbGlnbi1jb250ZW50XG5cbiAgICBjYXNlIDQ2NzU6XG4gICAgICByZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArICdmbGV4LWxpbmUtcGFjaycgKyByZXBsYWNlKHZhbHVlLCAvYWxpZ24tY29udGVudHxmbGV4LXwtc2VsZi8sICcnKSArIHZhbHVlO1xuICAgIC8vIGZsZXgtc2hyaW5rXG5cbiAgICBjYXNlIDU1NDg6XG4gICAgICByZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArIHJlcGxhY2UodmFsdWUsICdzaHJpbmsnLCAnbmVnYXRpdmUnKSArIHZhbHVlO1xuICAgIC8vIGZsZXgtYmFzaXNcblxuICAgIGNhc2UgNTI5MjpcbiAgICAgIHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgcmVwbGFjZSh2YWx1ZSwgJ2Jhc2lzJywgJ3ByZWZlcnJlZC1zaXplJykgKyB2YWx1ZTtcbiAgICAvLyBmbGV4LWdyb3dcblxuICAgIGNhc2UgNjA2MDpcbiAgICAgIHJldHVybiBXRUJLSVQgKyAnYm94LScgKyByZXBsYWNlKHZhbHVlLCAnLWdyb3cnLCAnJykgKyBXRUJLSVQgKyB2YWx1ZSArIE1TICsgcmVwbGFjZSh2YWx1ZSwgJ2dyb3cnLCAncG9zaXRpdmUnKSArIHZhbHVlO1xuICAgIC8vIHRyYW5zaXRpb25cblxuICAgIGNhc2UgNDU1NDpcbiAgICAgIHJldHVybiBXRUJLSVQgKyByZXBsYWNlKHZhbHVlLCAvKFteLV0pKHRyYW5zZm9ybSkvZywgJyQxJyArIFdFQktJVCArICckMicpICsgdmFsdWU7XG4gICAgLy8gY3Vyc29yXG5cbiAgICBjYXNlIDYxODc6XG4gICAgICByZXR1cm4gcmVwbGFjZShyZXBsYWNlKHJlcGxhY2UodmFsdWUsIC8oem9vbS18Z3JhYikvLCBXRUJLSVQgKyAnJDEnKSwgLyhpbWFnZS1zZXQpLywgV0VCS0lUICsgJyQxJyksIHZhbHVlLCAnJykgKyB2YWx1ZTtcbiAgICAvLyBiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kLWltYWdlXG5cbiAgICBjYXNlIDU0OTU6XG4gICAgY2FzZSAzOTU5OlxuICAgICAgcmV0dXJuIHJlcGxhY2UodmFsdWUsIC8oaW1hZ2Utc2V0XFwoW15dKikvLCBXRUJLSVQgKyAnJDEnICsgJyRgJDEnKTtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnRcblxuICAgIGNhc2UgNDk2ODpcbiAgICAgIHJldHVybiByZXBsYWNlKHJlcGxhY2UodmFsdWUsIC8oLis6KShmbGV4LSk/KC4qKS8sIFdFQktJVCArICdib3gtcGFjazokMycgKyBNUyArICdmbGV4LXBhY2s6JDMnKSwgL3MuKy1iW147XSsvLCAnanVzdGlmeScpICsgV0VCS0lUICsgdmFsdWUgKyB2YWx1ZTtcbiAgICAvLyAobWFyZ2lufHBhZGRpbmcpLWlubGluZS0oc3RhcnR8ZW5kKVxuXG4gICAgY2FzZSA0MDk1OlxuICAgIGNhc2UgMzU4MzpcbiAgICBjYXNlIDQwNjg6XG4gICAgY2FzZSAyNTMyOlxuICAgICAgcmV0dXJuIHJlcGxhY2UodmFsdWUsIC8oLispLWlubGluZSguKykvLCBXRUJLSVQgKyAnJDEkMicpICsgdmFsdWU7XG4gICAgLy8gKG1pbnxtYXgpPyh3aWR0aHxoZWlnaHR8aW5saW5lLXNpemV8YmxvY2stc2l6ZSlcblxuICAgIGNhc2UgODExNjpcbiAgICBjYXNlIDcwNTk6XG4gICAgY2FzZSA1NzUzOlxuICAgIGNhc2UgNTUzNTpcbiAgICBjYXNlIDU0NDU6XG4gICAgY2FzZSA1NzAxOlxuICAgIGNhc2UgNDkzMzpcbiAgICBjYXNlIDQ2Nzc6XG4gICAgY2FzZSA1NTMzOlxuICAgIGNhc2UgNTc4OTpcbiAgICBjYXNlIDUwMjE6XG4gICAgY2FzZSA0NzY1OlxuICAgICAgLy8gc3RyZXRjaCwgbWF4LWNvbnRlbnQsIG1pbi1jb250ZW50LCBmaWxsLWF2YWlsYWJsZVxuICAgICAgaWYgKHN0cmxlbih2YWx1ZSkgLSAxIC0gbGVuZ3RoID4gNikgc3dpdGNoIChjaGFyYXQodmFsdWUsIGxlbmd0aCArIDEpKSB7XG4gICAgICAgIC8vIChtKWF4LWNvbnRlbnQsIChtKWluLWNvbnRlbnRcbiAgICAgICAgY2FzZSAxMDk6XG4gICAgICAgICAgLy8gLVxuICAgICAgICAgIGlmIChjaGFyYXQodmFsdWUsIGxlbmd0aCArIDQpICE9PSA0NSkgYnJlYWs7XG4gICAgICAgIC8vIChmKWlsbC1hdmFpbGFibGUsIChmKWl0LWNvbnRlbnRcblxuICAgICAgICBjYXNlIDEwMjpcbiAgICAgICAgICByZXR1cm4gcmVwbGFjZSh2YWx1ZSwgLyguKzopKC4rKS0oW15dKykvLCAnJDEnICsgV0VCS0lUICsgJyQyLSQzJyArICckMScgKyBNT1ogKyAoY2hhcmF0KHZhbHVlLCBsZW5ndGggKyAzKSA9PSAxMDggPyAnJDMnIDogJyQyLSQzJykpICsgdmFsdWU7XG4gICAgICAgIC8vIChzKXRyZXRjaFxuXG4gICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgIHJldHVybiB+aW5kZXhvZih2YWx1ZSwgJ3N0cmV0Y2gnKSA/IHByZWZpeChyZXBsYWNlKHZhbHVlLCAnc3RyZXRjaCcsICdmaWxsLWF2YWlsYWJsZScpLCBsZW5ndGgpICsgdmFsdWUgOiB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIC8vIHBvc2l0aW9uOiBzdGlja3lcblxuICAgIGNhc2UgNDk0OTpcbiAgICAgIC8vIChzKXRpY2t5P1xuICAgICAgaWYgKGNoYXJhdCh2YWx1ZSwgbGVuZ3RoICsgMSkgIT09IDExNSkgYnJlYWs7XG4gICAgLy8gZGlzcGxheTogKGZsZXh8aW5saW5lLWZsZXgpXG5cbiAgICBjYXNlIDY0NDQ6XG4gICAgICBzd2l0Y2ggKGNoYXJhdCh2YWx1ZSwgc3RybGVuKHZhbHVlKSAtIDMgLSAofmluZGV4b2YodmFsdWUsICchaW1wb3J0YW50JykgJiYgMTApKSkge1xuICAgICAgICAvLyBzdGljKGspeVxuICAgICAgICBjYXNlIDEwNzpcbiAgICAgICAgICByZXR1cm4gcmVwbGFjZSh2YWx1ZSwgJzonLCAnOicgKyBXRUJLSVQpICsgdmFsdWU7XG4gICAgICAgIC8vIChpbmxpbmUtKT9mbChlKXhcblxuICAgICAgICBjYXNlIDEwMTpcbiAgICAgICAgICByZXR1cm4gcmVwbGFjZSh2YWx1ZSwgLyguKzopKFteOyFdKykoO3whLispPy8sICckMScgKyBXRUJLSVQgKyAoY2hhcmF0KHZhbHVlLCAxNCkgPT09IDQ1ID8gJ2lubGluZS0nIDogJycpICsgJ2JveCQzJyArICckMScgKyBXRUJLSVQgKyAnJDIkMycgKyAnJDEnICsgTVMgKyAnJDJib3gkMycpICsgdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIC8vIHdyaXRpbmctbW9kZVxuXG4gICAgY2FzZSA1OTM2OlxuICAgICAgc3dpdGNoIChjaGFyYXQodmFsdWUsIGxlbmd0aCArIDExKSkge1xuICAgICAgICAvLyB2ZXJ0aWNhbC1sKHIpXG4gICAgICAgIGNhc2UgMTE0OlxuICAgICAgICAgIHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgcmVwbGFjZSh2YWx1ZSwgL1tzdmhdXFx3Ky1bdGJscl17Mn0vLCAndGInKSArIHZhbHVlO1xuICAgICAgICAvLyB2ZXJ0aWNhbC1yKGwpXG5cbiAgICAgICAgY2FzZSAxMDg6XG4gICAgICAgICAgcmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyByZXBsYWNlKHZhbHVlLCAvW3N2aF1cXHcrLVt0YmxyXXsyfS8sICd0Yi1ybCcpICsgdmFsdWU7XG4gICAgICAgIC8vIGhvcml6b250YWwoLSl0YlxuXG4gICAgICAgIGNhc2UgNDU6XG4gICAgICAgICAgcmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyByZXBsYWNlKHZhbHVlLCAvW3N2aF1cXHcrLVt0YmxyXXsyfS8sICdscicpICsgdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgdmFsdWUgKyB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxudmFyIHByZWZpeGVyID0gZnVuY3Rpb24gcHJlZml4ZXIoZWxlbWVudCwgaW5kZXgsIGNoaWxkcmVuLCBjYWxsYmFjaykge1xuICBpZiAoZWxlbWVudC5sZW5ndGggPiAtMSkgaWYgKCFlbGVtZW50W1wicmV0dXJuXCJdKSBzd2l0Y2ggKGVsZW1lbnQudHlwZSkge1xuICAgIGNhc2UgREVDTEFSQVRJT046XG4gICAgICBlbGVtZW50W1wicmV0dXJuXCJdID0gcHJlZml4KGVsZW1lbnQudmFsdWUsIGVsZW1lbnQubGVuZ3RoKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBLRVlGUkFNRVM6XG4gICAgICByZXR1cm4gc2VyaWFsaXplKFtjb3B5KGVsZW1lbnQsIHtcbiAgICAgICAgdmFsdWU6IHJlcGxhY2UoZWxlbWVudC52YWx1ZSwgJ0AnLCAnQCcgKyBXRUJLSVQpXG4gICAgICB9KV0sIGNhbGxiYWNrKTtcblxuICAgIGNhc2UgUlVMRVNFVDpcbiAgICAgIGlmIChlbGVtZW50Lmxlbmd0aCkgcmV0dXJuIGNvbWJpbmUoZWxlbWVudC5wcm9wcywgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHN3aXRjaCAobWF0Y2godmFsdWUsIC8oOjpwbGFjXFx3K3w6cmVhZC1cXHcrKS8pKSB7XG4gICAgICAgICAgLy8gOnJlYWQtKG9ubHl8d3JpdGUpXG4gICAgICAgICAgY2FzZSAnOnJlYWQtb25seSc6XG4gICAgICAgICAgY2FzZSAnOnJlYWQtd3JpdGUnOlxuICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZShbY29weShlbGVtZW50LCB7XG4gICAgICAgICAgICAgIHByb3BzOiBbcmVwbGFjZSh2YWx1ZSwgLzoocmVhZC1cXHcrKS8sICc6JyArIE1PWiArICckMScpXVxuICAgICAgICAgICAgfSldLCBjYWxsYmFjayk7XG4gICAgICAgICAgLy8gOnBsYWNlaG9sZGVyXG5cbiAgICAgICAgICBjYXNlICc6OnBsYWNlaG9sZGVyJzpcbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemUoW2NvcHkoZWxlbWVudCwge1xuICAgICAgICAgICAgICBwcm9wczogW3JlcGxhY2UodmFsdWUsIC86KHBsYWNcXHcrKS8sICc6JyArIFdFQktJVCArICdpbnB1dC0kMScpXVxuICAgICAgICAgICAgfSksIGNvcHkoZWxlbWVudCwge1xuICAgICAgICAgICAgICBwcm9wczogW3JlcGxhY2UodmFsdWUsIC86KHBsYWNcXHcrKS8sICc6JyArIE1PWiArICckMScpXVxuICAgICAgICAgICAgfSksIGNvcHkoZWxlbWVudCwge1xuICAgICAgICAgICAgICBwcm9wczogW3JlcGxhY2UodmFsdWUsIC86KHBsYWNcXHcrKS8sIE1TICsgJ2lucHV0LSQxJyldXG4gICAgICAgICAgICB9KV0sIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH0pO1xuICB9XG59O1xuXG52YXIgZGVmYXVsdFN0eWxpc1BsdWdpbnMgPSBbcHJlZml4ZXJdO1xuXG52YXIgY3JlYXRlQ2FjaGUgPSBmdW5jdGlvblxuICAvKjogRW1vdGlvbkNhY2hlICovXG5jcmVhdGVDYWNoZShvcHRpb25zXG4vKjogT3B0aW9ucyAqL1xuKSB7XG4gIHZhciBrZXkgPSBvcHRpb25zLmtleTtcblxuICBpZiAoIWtleSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBoYXZlIHRvIGNvbmZpZ3VyZSBga2V5YCBmb3IgeW91ciBjYWNoZS4gUGxlYXNlIG1ha2Ugc3VyZSBpdCdzIHVuaXF1ZSAoYW5kIG5vdCBlcXVhbCB0byAnY3NzJykgYXMgaXQncyB1c2VkIGZvciBsaW5raW5nIHN0eWxlcyB0byB5b3VyIGNhY2hlLlxcblwiICsgXCJJZiBtdWx0aXBsZSBjYWNoZXMgc2hhcmUgdGhlIHNhbWUga2V5IHRoZXkgbWlnaHQgXFxcImZpZ2h0XFxcIiBmb3IgZWFjaCBvdGhlcidzIHN0eWxlIGVsZW1lbnRzLlwiKTtcbiAgfVxuXG4gIGlmIChrZXkgPT09ICdjc3MnKSB7XG4gICAgdmFyIHNzclN0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdHlsZVtkYXRhLWVtb3Rpb25dOm5vdChbZGF0YS1zXSlcIik7IC8vIGdldCBTU1JlZCBzdHlsZXMgb3V0IG9mIHRoZSB3YXkgb2YgUmVhY3QncyBoeWRyYXRpb25cbiAgICAvLyBkb2N1bWVudC5oZWFkIGlzIGEgc2FmZSBwbGFjZSB0byBtb3ZlIHRoZW0gdG8odGhvdWdoIG5vdGUgZG9jdW1lbnQuaGVhZCBpcyBub3QgbmVjZXNzYXJpbHkgdGhlIGxhc3QgcGxhY2UgdGhleSB3aWxsIGJlKVxuICAgIC8vIG5vdGUgdGhpcyB2ZXJ5IHZlcnkgaW50ZW50aW9uYWxseSB0YXJnZXRzIGFsbCBzdHlsZSBlbGVtZW50cyByZWdhcmRsZXNzIG9mIHRoZSBrZXkgdG8gZW5zdXJlXG4gICAgLy8gdGhhdCBjcmVhdGluZyBhIGNhY2hlIHdvcmtzIGluc2lkZSBvZiByZW5kZXIgb2YgYSBSZWFjdCBjb21wb25lbnRcblxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoc3NyU3R5bGVzLCBmdW5jdGlvbiAobm9kZVxuICAgIC8qOiBIVE1MU3R5bGVFbGVtZW50ICovXG4gICAgKSB7XG4gICAgICAvLyB3ZSB3YW50IHRvIG9ubHkgbW92ZSBlbGVtZW50cyB3aGljaCBoYXZlIGEgc3BhY2UgaW4gdGhlIGRhdGEtZW1vdGlvbiBhdHRyaWJ1dGUgdmFsdWVcbiAgICAgIC8vIGJlY2F1c2UgdGhhdCBpbmRpY2F0ZXMgdGhhdCBpdCBpcyBhbiBFbW90aW9uIDExIHNlcnZlci1zaWRlIHJlbmRlcmVkIHN0eWxlIGVsZW1lbnRzXG4gICAgICAvLyB3aGlsZSB3ZSB3aWxsIGFscmVhZHkgaWdub3JlIEVtb3Rpb24gMTEgY2xpZW50LXNpZGUgaW5zZXJ0ZWQgc3R5bGVzIGJlY2F1c2Ugb2YgdGhlIDpub3QoW2RhdGEtc10pIHBhcnQgaW4gdGhlIHNlbGVjdG9yXG4gICAgICAvLyBFbW90aW9uIDEwIGNsaWVudC1zaWRlIGluc2VydGVkIHN0eWxlcyBkaWQgbm90IGhhdmUgZGF0YS1zIChidXQgaW1wb3J0YW50bHkgZGlkIG5vdCBoYXZlIGEgc3BhY2UgaW4gdGhlaXIgZGF0YS1lbW90aW9uIGF0dHJpYnV0ZXMpXG4gICAgICAvLyBzbyBjaGVja2luZyBmb3IgdGhlIHNwYWNlIGVuc3VyZXMgdGhhdCBsb2FkaW5nIEVtb3Rpb24gMTEgYWZ0ZXIgRW1vdGlvbiAxMCBoYXMgaW5zZXJ0ZWQgc29tZSBzdHlsZXNcbiAgICAgIC8vIHdpbGwgbm90IHJlc3VsdCBpbiB0aGUgRW1vdGlvbiAxMCBzdHlsZXMgYmVpbmcgZGVzdHJveWVkXG4gICAgICB2YXIgZGF0YUVtb3Rpb25BdHRyaWJ1dGUgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1lbW90aW9uJyk7XG5cbiAgICAgIGlmIChkYXRhRW1vdGlvbkF0dHJpYnV0ZS5pbmRleE9mKCcgJykgPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXMnLCAnJyk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgc3R5bGlzUGx1Z2lucyA9IG9wdGlvbnMuc3R5bGlzUGx1Z2lucyB8fCBkZWZhdWx0U3R5bGlzUGx1Z2lucztcblxuICB7XG4gICAgaWYgKC9bXmEtei1dLy50ZXN0KGtleSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkVtb3Rpb24ga2V5IG11c3Qgb25seSBjb250YWluIGxvd2VyIGNhc2UgYWxwaGFiZXRpY2FsIGNoYXJhY3RlcnMgYW5kIC0gYnV0IFxcXCJcIiArIGtleSArIFwiXFxcIiB3YXMgcGFzc2VkXCIpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpbnNlcnRlZCA9IHt9O1xuICB2YXIgY29udGFpbmVyO1xuICAvKiA6IE5vZGUgKi9cblxuICB2YXIgbm9kZXNUb0h5ZHJhdGUgPSBbXTtcblxuICB7XG4gICAgY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXIgfHwgZG9jdW1lbnQuaGVhZDtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKCAvLyB0aGlzIG1lYW5zIHdlIHdpbGwgaWdub3JlIGVsZW1lbnRzIHdoaWNoIGRvbid0IGhhdmUgYSBzcGFjZSBpbiB0aGVtIHdoaWNoXG4gICAgLy8gbWVhbnMgdGhhdCB0aGUgc3R5bGUgZWxlbWVudHMgd2UncmUgbG9va2luZyBhdCBhcmUgb25seSBFbW90aW9uIDExIHNlcnZlci1yZW5kZXJlZCBzdHlsZSBlbGVtZW50c1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdHlsZVtkYXRhLWVtb3Rpb25ePVxcXCJcIiArIGtleSArIFwiIFxcXCJdXCIpLCBmdW5jdGlvbiAobm9kZVxuICAgIC8qOiBIVE1MU3R5bGVFbGVtZW50ICovXG4gICAgKSB7XG4gICAgICB2YXIgYXR0cmliID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWVtb3Rpb25cIikuc3BsaXQoJyAnKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhdHRyaWIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaW5zZXJ0ZWRbYXR0cmliW2ldXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIG5vZGVzVG9IeWRyYXRlLnB1c2gobm9kZSk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgX2luc2VydDtcbiAgLyo6IChcbiAgc2VsZWN0b3I6IHN0cmluZyxcbiAgc2VyaWFsaXplZDogU2VyaWFsaXplZFN0eWxlcyxcbiAgc2hlZXQ6IFN0eWxlU2hlZXQsXG4gIHNob3VsZENhY2hlOiBib29sZWFuXG4gICkgPT4gc3RyaW5nIHwgdm9pZCAqL1xuXG5cbiAgdmFyIG9tbmlwcmVzZW50UGx1Z2lucyA9IFtjb21wYXQsIHJlbW92ZUxhYmVsXTtcblxuICB7XG4gICAgb21uaXByZXNlbnRQbHVnaW5zLnB1c2goY3JlYXRlVW5zYWZlU2VsZWN0b3JzQWxhcm0oe1xuICAgICAgZ2V0IGNvbXBhdCgpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlLmNvbXBhdDtcbiAgICAgIH1cblxuICAgIH0pLCBpbmNvcnJlY3RJbXBvcnRBbGFybSk7XG4gIH1cblxuICB7XG4gICAgdmFyIGN1cnJlbnRTaGVldDtcbiAgICB2YXIgZmluYWxpemluZ1BsdWdpbnMgPSBbc3RyaW5naWZ5LCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgaWYgKCFlbGVtZW50LnJvb3QpIHtcbiAgICAgICAgaWYgKGVsZW1lbnRbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICBjdXJyZW50U2hlZXQuaW5zZXJ0KGVsZW1lbnRbXCJyZXR1cm5cIl0pO1xuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQudmFsdWUgJiYgZWxlbWVudC50eXBlICE9PSBDT01NRU5UKSB7XG4gICAgICAgICAgLy8gaW5zZXJ0IGVtcHR5IHJ1bGUgaW4gbm9uLXByb2R1Y3Rpb24gZW52aXJvbm1lbnRzXG4gICAgICAgICAgLy8gc28gQGVtb3Rpb24vamVzdCBjYW4gZ3JhYiBga2V5YCBmcm9tIHRoZSAoSlMpRE9NIGZvciBjYWNoZXMgd2l0aG91dCBhbnkgcnVsZXMgaW5zZXJ0ZWQgeWV0XG4gICAgICAgICAgY3VycmVudFNoZWV0Lmluc2VydChlbGVtZW50LnZhbHVlICsgXCJ7fVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gXTtcbiAgICB2YXIgc2VyaWFsaXplciA9IG1pZGRsZXdhcmUob21uaXByZXNlbnRQbHVnaW5zLmNvbmNhdChzdHlsaXNQbHVnaW5zLCBmaW5hbGl6aW5nUGx1Z2lucykpO1xuXG4gICAgdmFyIHN0eWxpcyA9IGZ1bmN0aW9uIHN0eWxpcyhzdHlsZXMpIHtcbiAgICAgIHJldHVybiBzZXJpYWxpemUoY29tcGlsZShzdHlsZXMpLCBzZXJpYWxpemVyKTtcbiAgICB9O1xuXG4gICAgX2luc2VydCA9IGZ1bmN0aW9uXG4gICAgICAvKjogdm9pZCAqL1xuICAgIGluc2VydChzZWxlY3RvclxuICAgIC8qOiBzdHJpbmcgKi9cbiAgICAsIHNlcmlhbGl6ZWRcbiAgICAvKjogU2VyaWFsaXplZFN0eWxlcyAqL1xuICAgICwgc2hlZXRcbiAgICAvKjogU3R5bGVTaGVldCAqL1xuICAgICwgc2hvdWxkQ2FjaGVcbiAgICAvKjogYm9vbGVhbiAqL1xuICAgICkge1xuICAgICAgY3VycmVudFNoZWV0ID0gc2hlZXQ7XG5cbiAgICAgIGlmIChzZXJpYWxpemVkLm1hcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGN1cnJlbnRTaGVldCA9IHtcbiAgICAgICAgICBpbnNlcnQ6IGZ1bmN0aW9uIGluc2VydChydWxlXG4gICAgICAgICAgLyo6IHN0cmluZyAqL1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgc2hlZXQuaW5zZXJ0KHJ1bGUgKyBzZXJpYWxpemVkLm1hcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBzdHlsaXMoc2VsZWN0b3IgPyBzZWxlY3RvciArIFwie1wiICsgc2VyaWFsaXplZC5zdHlsZXMgKyBcIn1cIiA6IHNlcmlhbGl6ZWQuc3R5bGVzKTtcblxuICAgICAgaWYgKHNob3VsZENhY2hlKSB7XG4gICAgICAgIGNhY2hlLmluc2VydGVkW3NlcmlhbGl6ZWQubmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGVcbiAgLyo6IEVtb3Rpb25DYWNoZSAqL1xuICA9IHtcbiAgICBrZXk6IGtleSxcbiAgICBzaGVldDogbmV3IFN0eWxlU2hlZXQoe1xuICAgICAga2V5OiBrZXksXG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgIG5vbmNlOiBvcHRpb25zLm5vbmNlLFxuICAgICAgc3BlZWR5OiBvcHRpb25zLnNwZWVkeSxcbiAgICAgIHByZXBlbmQ6IG9wdGlvbnMucHJlcGVuZCxcbiAgICAgIGluc2VydGlvblBvaW50OiBvcHRpb25zLmluc2VydGlvblBvaW50XG4gICAgfSksXG4gICAgbm9uY2U6IG9wdGlvbnMubm9uY2UsXG4gICAgaW5zZXJ0ZWQ6IGluc2VydGVkLFxuICAgIHJlZ2lzdGVyZWQ6IHt9LFxuICAgIGluc2VydDogX2luc2VydFxuICB9O1xuICBjYWNoZS5zaGVldC5oeWRyYXRlKG5vZGVzVG9IeWRyYXRlKTtcbiAgcmV0dXJuIGNhY2hlO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlQ2FjaGUgYXMgZGVmYXVsdCB9O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4vKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gIGNvbnRleHRUeXBlOiB0cnVlLFxuICBjb250ZXh0VHlwZXM6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHRydWUsXG4gIG1peGluczogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gIG5hbWU6IHRydWUsXG4gIGxlbmd0aDogdHJ1ZSxcbiAgcHJvdG90eXBlOiB0cnVlLFxuICBjYWxsZXI6IHRydWUsXG4gIGNhbGxlZTogdHJ1ZSxcbiAgYXJndW1lbnRzOiB0cnVlLFxuICBhcml0eTogdHJ1ZVxufTtcbnZhciBGT1JXQVJEX1JFRl9TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICByZW5kZXI6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZVxufTtcbnZhciBNRU1PX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIGNvbXBhcmU6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBUWVBFX1NUQVRJQ1MgPSB7fTtcblRZUEVfU1RBVElDU1tyZWFjdElzLkZvcndhcmRSZWZdID0gRk9SV0FSRF9SRUZfU1RBVElDUztcblRZUEVfU1RBVElDU1tyZWFjdElzLk1lbW9dID0gTUVNT19TVEFUSUNTO1xuXG5mdW5jdGlvbiBnZXRTdGF0aWNzKGNvbXBvbmVudCkge1xuICAvLyBSZWFjdCB2MTYuMTEgYW5kIGJlbG93XG4gIGlmIChyZWFjdElzLmlzTWVtbyhjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuIE1FTU9fU1RBVElDUztcbiAgfSAvLyBSZWFjdCB2MTYuMTIgYW5kIGFib3ZlXG5cblxuICByZXR1cm4gVFlQRV9TVEFUSUNTW2NvbXBvbmVudFsnJCR0eXBlb2YnXV0gfHwgUkVBQ1RfU1RBVElDUztcbn1cblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBibGFja2xpc3QpIHtcbiAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcbiAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICB2YXIgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCwgYmxhY2tsaXN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldFN0YXRpY3MgPSBnZXRTdGF0aWNzKHRhcmdldENvbXBvbmVudCk7XG4gICAgdmFyIHNvdXJjZVN0YXRpY3MgPSBnZXRTdGF0aWNzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAhKGJsYWNrbGlzdCAmJiBibGFja2xpc3Rba2V5XSkgJiYgIShzb3VyY2VTdGF0aWNzICYmIHNvdXJjZVN0YXRpY3Nba2V5XSkgJiYgISh0YXJnZXRTdGF0aWNzICYmIHRhcmdldFN0YXRpY3Nba2V5XSkpIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gQXZvaWQgZmFpbHVyZXMgZnJvbSByZWFkLW9ubHkgcHJvcGVydGllc1xuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuIiwidmFyIGlzQnJvd3NlciA9IHRydWU7XG5cbmZ1bmN0aW9uIGdldFJlZ2lzdGVyZWRTdHlsZXMocmVnaXN0ZXJlZCwgcmVnaXN0ZXJlZFN0eWxlcywgY2xhc3NOYW1lcykge1xuICB2YXIgcmF3Q2xhc3NOYW1lID0gJyc7XG4gIGNsYXNzTmFtZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICBpZiAocmVnaXN0ZXJlZFtjbGFzc05hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlZ2lzdGVyZWRTdHlsZXMucHVzaChyZWdpc3RlcmVkW2NsYXNzTmFtZV0gKyBcIjtcIik7XG4gICAgfSBlbHNlIGlmIChjbGFzc05hbWUpIHtcbiAgICAgIHJhd0NsYXNzTmFtZSArPSBjbGFzc05hbWUgKyBcIiBcIjtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmF3Q2xhc3NOYW1lO1xufVxudmFyIHJlZ2lzdGVyU3R5bGVzID0gZnVuY3Rpb24gcmVnaXN0ZXJTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGlzU3RyaW5nVGFnKSB7XG4gIHZhciBjbGFzc05hbWUgPSBjYWNoZS5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcblxuICBpZiAoIC8vIHdlIG9ubHkgbmVlZCB0byBhZGQgdGhlIHN0eWxlcyB0byB0aGUgcmVnaXN0ZXJlZCBjYWNoZSBpZiB0aGVcbiAgLy8gY2xhc3MgbmFtZSBjb3VsZCBiZSB1c2VkIGZ1cnRoZXIgZG93blxuICAvLyB0aGUgdHJlZSBidXQgaWYgaXQncyBhIHN0cmluZyB0YWcsIHdlIGtub3cgaXQgd29uJ3RcbiAgLy8gc28gd2UgZG9uJ3QgaGF2ZSB0byBhZGQgaXQgdG8gcmVnaXN0ZXJlZCBjYWNoZS5cbiAgLy8gdGhpcyBpbXByb3ZlcyBtZW1vcnkgdXNhZ2Ugc2luY2Ugd2UgY2FuIGF2b2lkIHN0b3JpbmcgdGhlIHdob2xlIHN0eWxlIHN0cmluZ1xuICAoaXNTdHJpbmdUYWcgPT09IGZhbHNlIHx8IC8vIHdlIG5lZWQgdG8gYWx3YXlzIHN0b3JlIGl0IGlmIHdlJ3JlIGluIGNvbXBhdCBtb2RlIGFuZFxuICAvLyBpbiBub2RlIHNpbmNlIGVtb3Rpb24tc2VydmVyIHJlbGllcyBvbiB3aGV0aGVyIGEgc3R5bGUgaXMgaW5cbiAgLy8gdGhlIHJlZ2lzdGVyZWQgY2FjaGUgdG8ga25vdyB3aGV0aGVyIGEgc3R5bGUgaXMgZ2xvYmFsIG9yIG5vdFxuICAvLyBhbHNvLCBub3RlIHRoYXQgdGhpcyBjaGVjayB3aWxsIGJlIGRlYWQgY29kZSBlbGltaW5hdGVkIGluIHRoZSBicm93c2VyXG4gIGlzQnJvd3NlciA9PT0gZmFsc2UgKSAmJiBjYWNoZS5yZWdpc3RlcmVkW2NsYXNzTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgIGNhY2hlLnJlZ2lzdGVyZWRbY2xhc3NOYW1lXSA9IHNlcmlhbGl6ZWQuc3R5bGVzO1xuICB9XG59O1xudmFyIGluc2VydFN0eWxlcyA9IGZ1bmN0aW9uIGluc2VydFN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgaXNTdHJpbmdUYWcpIHtcbiAgcmVnaXN0ZXJTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGlzU3RyaW5nVGFnKTtcbiAgdmFyIGNsYXNzTmFtZSA9IGNhY2hlLmtleSArIFwiLVwiICsgc2VyaWFsaXplZC5uYW1lO1xuXG4gIGlmIChjYWNoZS5pbnNlcnRlZFtzZXJpYWxpemVkLm5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgY3VycmVudCA9IHNlcmlhbGl6ZWQ7XG5cbiAgICBkbyB7XG4gICAgICBjYWNoZS5pbnNlcnQoc2VyaWFsaXplZCA9PT0gY3VycmVudCA/IFwiLlwiICsgY2xhc3NOYW1lIDogJycsIGN1cnJlbnQsIGNhY2hlLnNoZWV0LCB0cnVlKTtcblxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9IHdoaWxlIChjdXJyZW50ICE9PSB1bmRlZmluZWQpO1xuICB9XG59O1xuXG5leHBvcnQgeyBnZXRSZWdpc3RlcmVkU3R5bGVzLCBpbnNlcnRTdHlsZXMsIHJlZ2lzdGVyU3R5bGVzIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2dhcnljb3VydC9tdXJtdXJoYXNoLWpzXG4vLyBQb3J0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYWFwcGxlYnkvc21oYXNoZXIvYmxvYi82MWEwNTMwZjI4Mjc3ZjJlODUwYmZjMzk2MDBjZTYxZDAyYjUxOGRlL3NyYy9NdXJtdXJIYXNoMi5jcHAjTDM3LUw4NlxuZnVuY3Rpb24gbXVybXVyMihzdHIpIHtcbiAgLy8gJ20nIGFuZCAncicgYXJlIG1peGluZyBjb25zdGFudHMgZ2VuZXJhdGVkIG9mZmxpbmUuXG4gIC8vIFRoZXkncmUgbm90IHJlYWxseSAnbWFnaWMnLCB0aGV5IGp1c3QgaGFwcGVuIHRvIHdvcmsgd2VsbC5cbiAgLy8gY29uc3QgbSA9IDB4NWJkMWU5OTU7XG4gIC8vIGNvbnN0IHIgPSAyNDtcbiAgLy8gSW5pdGlhbGl6ZSB0aGUgaGFzaFxuICB2YXIgaCA9IDA7IC8vIE1peCA0IGJ5dGVzIGF0IGEgdGltZSBpbnRvIHRoZSBoYXNoXG5cbiAgdmFyIGssXG4gICAgICBpID0gMCxcbiAgICAgIGxlbiA9IHN0ci5sZW5ndGg7XG5cbiAgZm9yICg7IGxlbiA+PSA0OyArK2ksIGxlbiAtPSA0KSB7XG4gICAgayA9IHN0ci5jaGFyQ29kZUF0KGkpICYgMHhmZiB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgOCB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgMTYgfCAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDI0O1xuICAgIGsgPVxuICAgIC8qIE1hdGguaW11bChrLCBtKTogKi9cbiAgICAoayAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChrID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xuICAgIGsgXj1cbiAgICAvKiBrID4+PiByOiAqL1xuICAgIGsgPj4+IDI0O1xuICAgIGggPVxuICAgIC8qIE1hdGguaW11bChrLCBtKTogKi9cbiAgICAoayAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChrID4+PiAxNikgKiAweGU5OTUgPDwgMTYpIF5cbiAgICAvKiBNYXRoLmltdWwoaCwgbSk6ICovXG4gICAgKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoaCA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcbiAgfSAvLyBIYW5kbGUgdGhlIGxhc3QgZmV3IGJ5dGVzIG9mIHRoZSBpbnB1dCBhcnJheVxuXG5cbiAgc3dpdGNoIChsZW4pIHtcbiAgICBjYXNlIDM6XG4gICAgICBoIF49IChzdHIuY2hhckNvZGVBdChpICsgMikgJiAweGZmKSA8PCAxNjtcblxuICAgIGNhc2UgMjpcbiAgICAgIGggXj0gKHN0ci5jaGFyQ29kZUF0KGkgKyAxKSAmIDB4ZmYpIDw8IDg7XG5cbiAgICBjYXNlIDE6XG4gICAgICBoIF49IHN0ci5jaGFyQ29kZUF0KGkpICYgMHhmZjtcbiAgICAgIGggPVxuICAgICAgLyogTWF0aC5pbXVsKGgsIG0pOiAqL1xuICAgICAgKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoaCA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcbiAgfSAvLyBEbyBhIGZldyBmaW5hbCBtaXhlcyBvZiB0aGUgaGFzaCB0byBlbnN1cmUgdGhlIGxhc3QgZmV3XG4gIC8vIGJ5dGVzIGFyZSB3ZWxsLWluY29ycG9yYXRlZC5cblxuXG4gIGggXj0gaCA+Pj4gMTM7XG4gIGggPVxuICAvKiBNYXRoLmltdWwoaCwgbSk6ICovXG4gIChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGggPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNik7XG4gIHJldHVybiAoKGggXiBoID4+PiAxNSkgPj4+IDApLnRvU3RyaW5nKDM2KTtcbn1cblxuZXhwb3J0IHsgbXVybXVyMiBhcyBkZWZhdWx0IH07XG4iLCJ2YXIgdW5pdGxlc3NLZXlzID0ge1xuICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogMSxcbiAgYXNwZWN0UmF0aW86IDEsXG4gIGJvcmRlckltYWdlT3V0c2V0OiAxLFxuICBib3JkZXJJbWFnZVNsaWNlOiAxLFxuICBib3JkZXJJbWFnZVdpZHRoOiAxLFxuICBib3hGbGV4OiAxLFxuICBib3hGbGV4R3JvdXA6IDEsXG4gIGJveE9yZGluYWxHcm91cDogMSxcbiAgY29sdW1uQ291bnQ6IDEsXG4gIGNvbHVtbnM6IDEsXG4gIGZsZXg6IDEsXG4gIGZsZXhHcm93OiAxLFxuICBmbGV4UG9zaXRpdmU6IDEsXG4gIGZsZXhTaHJpbms6IDEsXG4gIGZsZXhOZWdhdGl2ZTogMSxcbiAgZmxleE9yZGVyOiAxLFxuICBncmlkUm93OiAxLFxuICBncmlkUm93RW5kOiAxLFxuICBncmlkUm93U3BhbjogMSxcbiAgZ3JpZFJvd1N0YXJ0OiAxLFxuICBncmlkQ29sdW1uOiAxLFxuICBncmlkQ29sdW1uRW5kOiAxLFxuICBncmlkQ29sdW1uU3BhbjogMSxcbiAgZ3JpZENvbHVtblN0YXJ0OiAxLFxuICBtc0dyaWRSb3c6IDEsXG4gIG1zR3JpZFJvd1NwYW46IDEsXG4gIG1zR3JpZENvbHVtbjogMSxcbiAgbXNHcmlkQ29sdW1uU3BhbjogMSxcbiAgZm9udFdlaWdodDogMSxcbiAgbGluZUhlaWdodDogMSxcbiAgb3BhY2l0eTogMSxcbiAgb3JkZXI6IDEsXG4gIG9ycGhhbnM6IDEsXG4gIHNjYWxlOiAxLFxuICB0YWJTaXplOiAxLFxuICB3aWRvd3M6IDEsXG4gIHpJbmRleDogMSxcbiAgem9vbTogMSxcbiAgV2Via2l0TGluZUNsYW1wOiAxLFxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiAxLFxuICBmbG9vZE9wYWNpdHk6IDEsXG4gIHN0b3BPcGFjaXR5OiAxLFxuICBzdHJva2VEYXNoYXJyYXk6IDEsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IDEsXG4gIHN0cm9rZU1pdGVybGltaXQ6IDEsXG4gIHN0cm9rZU9wYWNpdHk6IDEsXG4gIHN0cm9rZVdpZHRoOiAxXG59O1xuXG5leHBvcnQgeyB1bml0bGVzc0tleXMgYXMgZGVmYXVsdCB9O1xuIiwiZnVuY3Rpb24gbWVtb2l6ZShmbikge1xuICB2YXIgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChjYWNoZVthcmddID09PSB1bmRlZmluZWQpIGNhY2hlW2FyZ10gPSBmbihhcmcpO1xuICAgIHJldHVybiBjYWNoZVthcmddO1xuICB9O1xufVxuXG5leHBvcnQgeyBtZW1vaXplIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCBoYXNoU3RyaW5nIGZyb20gJ0BlbW90aW9uL2hhc2gnO1xuaW1wb3J0IHVuaXRsZXNzIGZyb20gJ0BlbW90aW9uL3VuaXRsZXNzJztcbmltcG9ydCBtZW1vaXplIGZyb20gJ0BlbW90aW9uL21lbW9pemUnO1xuXG52YXIgaXNEZXZlbG9wbWVudCA9IHRydWU7XG5cbnZhciBJTExFR0FMX0VTQ0FQRV9TRVFVRU5DRV9FUlJPUiA9IFwiWW91IGhhdmUgaWxsZWdhbCBlc2NhcGUgc2VxdWVuY2UgaW4geW91ciB0ZW1wbGF0ZSBsaXRlcmFsLCBtb3N0IGxpa2VseSBpbnNpZGUgY29udGVudCdzIHByb3BlcnR5IHZhbHVlLlxcbkJlY2F1c2UgeW91IHdyaXRlIHlvdXIgQ1NTIGluc2lkZSBhIEphdmFTY3JpcHQgc3RyaW5nIHlvdSBhY3R1YWxseSBoYXZlIHRvIGRvIGRvdWJsZSBlc2NhcGluZywgc28gZm9yIGV4YW1wbGUgXFxcImNvbnRlbnQ6ICdcXFxcMDBkNyc7XFxcIiBzaG91bGQgYmVjb21lIFxcXCJjb250ZW50OiAnXFxcXFxcXFwwMGQ3JztcXFwiLlxcbllvdSBjYW4gcmVhZCBtb3JlIGFib3V0IHRoaXMgaGVyZTpcXG5odHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9UZW1wbGF0ZV9saXRlcmFscyNFUzIwMThfcmV2aXNpb25fb2ZfaWxsZWdhbF9lc2NhcGVfc2VxdWVuY2VzXCI7XG52YXIgVU5ERUZJTkVEX0FTX09CSkVDVF9LRVlfRVJST1IgPSBcIllvdSBoYXZlIHBhc3NlZCBpbiBmYWxzeSB2YWx1ZSBhcyBzdHlsZSBvYmplY3QncyBrZXkgKGNhbiBoYXBwZW4gd2hlbiBpbiBleGFtcGxlIHlvdSBwYXNzIHVuZXhwb3J0ZWQgY29tcG9uZW50IGFzIGNvbXB1dGVkIGtleSkuXCI7XG52YXIgaHlwaGVuYXRlUmVnZXggPSAvW0EtWl18Xm1zL2c7XG52YXIgYW5pbWF0aW9uUmVnZXggPSAvX0VNT18oW15fXSs/KV8oW15dKj8pX0VNT18vZztcblxudmFyIGlzQ3VzdG9tUHJvcGVydHkgPSBmdW5jdGlvbiBpc0N1c3RvbVByb3BlcnR5KHByb3BlcnR5KSB7XG4gIHJldHVybiBwcm9wZXJ0eS5jaGFyQ29kZUF0KDEpID09PSA0NTtcbn07XG5cbnZhciBpc1Byb2Nlc3NhYmxlVmFsdWUgPSBmdW5jdGlvbiBpc1Byb2Nlc3NhYmxlVmFsdWUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlICE9PSAnYm9vbGVhbic7XG59O1xuXG52YXIgcHJvY2Vzc1N0eWxlTmFtZSA9IC8qICNfX1BVUkVfXyAqL21lbW9pemUoZnVuY3Rpb24gKHN0eWxlTmFtZSkge1xuICByZXR1cm4gaXNDdXN0b21Qcm9wZXJ0eShzdHlsZU5hbWUpID8gc3R5bGVOYW1lIDogc3R5bGVOYW1lLnJlcGxhY2UoaHlwaGVuYXRlUmVnZXgsICctJCYnKS50b0xvd2VyQ2FzZSgpO1xufSk7XG5cbnZhciBwcm9jZXNzU3R5bGVWYWx1ZSA9IGZ1bmN0aW9uIHByb2Nlc3NTdHlsZVZhbHVlKGtleSwgdmFsdWUpIHtcbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlICdhbmltYXRpb24nOlxuICAgIGNhc2UgJ2FuaW1hdGlvbk5hbWUnOlxuICAgICAge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKGFuaW1hdGlvblJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gsIHAxLCBwMikge1xuICAgICAgICAgICAgY3Vyc29yID0ge1xuICAgICAgICAgICAgICBuYW1lOiBwMSxcbiAgICAgICAgICAgICAgc3R5bGVzOiBwMixcbiAgICAgICAgICAgICAgbmV4dDogY3Vyc29yXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHAxO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gIH1cblxuICBpZiAodW5pdGxlc3Nba2V5XSAhPT0gMSAmJiAhaXNDdXN0b21Qcm9wZXJ0eShrZXkpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdmFsdWUgIT09IDApIHtcbiAgICByZXR1cm4gdmFsdWUgKyAncHgnO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxue1xuICB2YXIgY29udGVudFZhbHVlUGF0dGVybiA9IC8odmFyfGF0dHJ8Y291bnRlcnM/fHVybHxlbGVtZW50fCgoKHJlcGVhdGluZy0pPyhsaW5lYXJ8cmFkaWFsKSl8Y29uaWMpLWdyYWRpZW50KVxcKHwobm8tKT8ob3BlbnxjbG9zZSktcXVvdGUvO1xuICB2YXIgY29udGVudFZhbHVlcyA9IFsnbm9ybWFsJywgJ25vbmUnLCAnaW5pdGlhbCcsICdpbmhlcml0JywgJ3Vuc2V0J107XG4gIHZhciBvbGRQcm9jZXNzU3R5bGVWYWx1ZSA9IHByb2Nlc3NTdHlsZVZhbHVlO1xuICB2YXIgbXNQYXR0ZXJuID0gL14tbXMtLztcbiAgdmFyIGh5cGhlblBhdHRlcm4gPSAvLSguKS9nO1xuICB2YXIgaHlwaGVuYXRlZENhY2hlID0ge307XG5cbiAgcHJvY2Vzc1N0eWxlVmFsdWUgPSBmdW5jdGlvbiBwcm9jZXNzU3R5bGVWYWx1ZShrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJyB8fCBjb250ZW50VmFsdWVzLmluZGV4T2YodmFsdWUpID09PSAtMSAmJiAhY29udGVudFZhbHVlUGF0dGVybi50ZXN0KHZhbHVlKSAmJiAodmFsdWUuY2hhckF0KDApICE9PSB2YWx1ZS5jaGFyQXQodmFsdWUubGVuZ3RoIC0gMSkgfHwgdmFsdWUuY2hhckF0KDApICE9PSAnXCInICYmIHZhbHVlLmNoYXJBdCgwKSAhPT0gXCInXCIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBzZWVtIHRvIGJlIHVzaW5nIGEgdmFsdWUgZm9yICdjb250ZW50JyB3aXRob3V0IHF1b3RlcywgdHJ5IHJlcGxhY2luZyBpdCB3aXRoIGBjb250ZW50OiAnXFxcIlwiICsgdmFsdWUgKyBcIlxcXCInYFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJvY2Vzc2VkID0gb2xkUHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZSk7XG5cbiAgICBpZiAocHJvY2Vzc2VkICE9PSAnJyAmJiAhaXNDdXN0b21Qcm9wZXJ0eShrZXkpICYmIGtleS5pbmRleE9mKCctJykgIT09IC0xICYmIGh5cGhlbmF0ZWRDYWNoZVtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGh5cGhlbmF0ZWRDYWNoZVtrZXldID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJVc2luZyBrZWJhYi1jYXNlIGZvciBjc3MgcHJvcGVydGllcyBpbiBvYmplY3RzIGlzIG5vdCBzdXBwb3J0ZWQuIERpZCB5b3UgbWVhbiBcIiArIGtleS5yZXBsYWNlKG1zUGF0dGVybiwgJ21zLScpLnJlcGxhY2UoaHlwaGVuUGF0dGVybiwgZnVuY3Rpb24gKHN0ciwgX2NoYXIpIHtcbiAgICAgICAgcmV0dXJuIF9jaGFyLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9KSArIFwiP1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2Vzc2VkO1xuICB9O1xufVxuXG52YXIgbm9Db21wb25lbnRTZWxlY3Rvck1lc3NhZ2UgPSAnQ29tcG9uZW50IHNlbGVjdG9ycyBjYW4gb25seSBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggJyArICdAZW1vdGlvbi9iYWJlbC1wbHVnaW4sIHRoZSBzd2MgRW1vdGlvbiBwbHVnaW4sIG9yIGFub3RoZXIgRW1vdGlvbi1hd2FyZSAnICsgJ2NvbXBpbGVyIHRyYW5zZm9ybS4nO1xuXG5mdW5jdGlvbiBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBpbnRlcnBvbGF0aW9uKSB7XG4gIGlmIChpbnRlcnBvbGF0aW9uID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB2YXIgY29tcG9uZW50U2VsZWN0b3IgPSBpbnRlcnBvbGF0aW9uO1xuXG4gIGlmIChjb21wb25lbnRTZWxlY3Rvci5fX2Vtb3Rpb25fc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAoU3RyaW5nKGNvbXBvbmVudFNlbGVjdG9yKSA9PT0gJ05PX0NPTVBPTkVOVF9TRUxFQ1RPUicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihub0NvbXBvbmVudFNlbGVjdG9yTWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFNlbGVjdG9yO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlb2YgaW50ZXJwb2xhdGlvbikge1xuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAge1xuICAgICAgICB2YXIga2V5ZnJhbWVzID0gaW50ZXJwb2xhdGlvbjtcblxuICAgICAgICBpZiAoa2V5ZnJhbWVzLmFuaW0gPT09IDEpIHtcbiAgICAgICAgICBjdXJzb3IgPSB7XG4gICAgICAgICAgICBuYW1lOiBrZXlmcmFtZXMubmFtZSxcbiAgICAgICAgICAgIHN0eWxlczoga2V5ZnJhbWVzLnN0eWxlcyxcbiAgICAgICAgICAgIG5leHQ6IGN1cnNvclxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIGtleWZyYW1lcy5uYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlcmlhbGl6ZWRTdHlsZXMgPSBpbnRlcnBvbGF0aW9uO1xuXG4gICAgICAgIGlmIChzZXJpYWxpemVkU3R5bGVzLnN0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIG5leHQgPSBzZXJpYWxpemVkU3R5bGVzLm5leHQ7XG5cbiAgICAgICAgICBpZiAobmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBub3QgdGhlIG1vc3QgZWZmaWNpZW50IHRoaW5nIGV2ZXIgYnV0IHRoaXMgaXMgYSBwcmV0dHkgcmFyZSBjYXNlXG4gICAgICAgICAgICAvLyBhbmQgdGhlcmUgd2lsbCBiZSB2ZXJ5IGZldyBpdGVyYXRpb25zIG9mIHRoaXMgZ2VuZXJhbGx5XG4gICAgICAgICAgICB3aGlsZSAobmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGN1cnNvciA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuZXh0Lm5hbWUsXG4gICAgICAgICAgICAgICAgc3R5bGVzOiBuZXh0LnN0eWxlcyxcbiAgICAgICAgICAgICAgICBuZXh0OiBjdXJzb3JcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgbmV4dCA9IG5leHQubmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgc3R5bGVzID0gc2VyaWFsaXplZFN0eWxlcy5zdHlsZXMgKyBcIjtcIjtcblxuICAgICAgICAgIGlmIChzZXJpYWxpemVkU3R5bGVzLm1hcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzdHlsZXMgKz0gc2VyaWFsaXplZFN0eWxlcy5tYXA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHN0eWxlcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjcmVhdGVTdHJpbmdGcm9tT2JqZWN0KG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBpbnRlcnBvbGF0aW9uKTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgIHtcbiAgICAgICAgaWYgKG1lcmdlZFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YXIgcHJldmlvdXNDdXJzb3IgPSBjdXJzb3I7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IGludGVycG9sYXRpb24obWVyZ2VkUHJvcHMpO1xuICAgICAgICAgIGN1cnNvciA9IHByZXZpb3VzQ3Vyc29yO1xuICAgICAgICAgIHJldHVybiBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCByZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Z1bmN0aW9ucyB0aGF0IGFyZSBpbnRlcnBvbGF0ZWQgaW4gY3NzIGNhbGxzIHdpbGwgYmUgc3RyaW5naWZpZWQuXFxuJyArICdJZiB5b3Ugd2FudCB0byBoYXZlIGEgY3NzIGNhbGwgYmFzZWQgb24gcHJvcHMsIGNyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGNzcyBjYWxsIGxpa2UgdGhpc1xcbicgKyAnbGV0IGR5bmFtaWNTdHlsZSA9IChwcm9wcykgPT4gY3NzYGNvbG9yOiAke3Byb3BzLmNvbG9yfWBcXG4nICsgJ0l0IGNhbiBiZSBjYWxsZWQgZGlyZWN0bHkgd2l0aCBwcm9wcyBvciBpbnRlcnBvbGF0ZWQgaW4gYSBzdHlsZWQgY2FsbCBsaWtlIHRoaXNcXG4nICsgXCJsZXQgU29tZUNvbXBvbmVudCA9IHN0eWxlZCgnZGl2JylgJHtkeW5hbWljU3R5bGV9YFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIG1hdGNoZWQgPSBbXTtcbiAgICAgICAgdmFyIHJlcGxhY2VkID0gaW50ZXJwb2xhdGlvbi5yZXBsYWNlKGFuaW1hdGlvblJlZ2V4LCBmdW5jdGlvbiAoX21hdGNoLCBfcDEsIHAyKSB7XG4gICAgICAgICAgdmFyIGZha2VWYXJOYW1lID0gXCJhbmltYXRpb25cIiArIG1hdGNoZWQubGVuZ3RoO1xuICAgICAgICAgIG1hdGNoZWQucHVzaChcImNvbnN0IFwiICsgZmFrZVZhck5hbWUgKyBcIiA9IGtleWZyYW1lc2BcIiArIHAyLnJlcGxhY2UoL15Aa2V5ZnJhbWVzIGFuaW1hdGlvbi1cXHcrLywgJycpICsgXCJgXCIpO1xuICAgICAgICAgIHJldHVybiBcIiR7XCIgKyBmYWtlVmFyTmFtZSArIFwifVwiO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWF0Y2hlZC5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiYGtleWZyYW1lc2Agb3V0cHV0IGdvdCBpbnRlcnBvbGF0ZWQgaW50byBwbGFpbiBzdHJpbmcsIHBsZWFzZSB3cmFwIGl0IHdpdGggYGNzc2AuXFxuXFxuSW5zdGVhZCBvZiBkb2luZyB0aGlzOlxcblxcblwiICsgW10uY29uY2F0KG1hdGNoZWQsIFtcImBcIiArIHJlcGxhY2VkICsgXCJgXCJdKS5qb2luKCdcXG4nKSArIFwiXFxuXFxuWW91IHNob3VsZCB3cmFwIGl0IHdpdGggYGNzc2AgbGlrZSB0aGlzOlxcblxcbmNzc2BcIiArIHJlcGxhY2VkICsgXCJgXCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICB9IC8vIGZpbmFsaXplIHN0cmluZyB2YWx1ZXMgKHJlZ3VsYXIgc3RyaW5ncyBhbmQgZnVuY3Rpb25zIGludGVycG9sYXRlZCBpbnRvIGNzcyBjYWxscylcblxuXG4gIHZhciBhc1N0cmluZyA9IGludGVycG9sYXRpb247XG5cbiAgaWYgKHJlZ2lzdGVyZWQgPT0gbnVsbCkge1xuICAgIHJldHVybiBhc1N0cmluZztcbiAgfVxuXG4gIHZhciBjYWNoZWQgPSByZWdpc3RlcmVkW2FzU3RyaW5nXTtcbiAgcmV0dXJuIGNhY2hlZCAhPT0gdW5kZWZpbmVkID8gY2FjaGVkIDogYXNTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0cmluZ0Zyb21PYmplY3QobWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIG9iaikge1xuICB2YXIgc3RyaW5nID0gJyc7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzdHJpbmcgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgb2JqW2ldKSArIFwiO1wiO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICB2YXIgdmFsdWUgPSBvYmpba2V5XTtcblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdmFyIGFzU3RyaW5nID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKHJlZ2lzdGVyZWQgIT0gbnVsbCAmJiByZWdpc3RlcmVkW2FzU3RyaW5nXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3RyaW5nICs9IGtleSArIFwie1wiICsgcmVnaXN0ZXJlZFthc1N0cmluZ10gKyBcIn1cIjtcbiAgICAgICAgfSBlbHNlIGlmIChpc1Byb2Nlc3NhYmxlVmFsdWUoYXNTdHJpbmcpKSB7XG4gICAgICAgICAgc3RyaW5nICs9IHByb2Nlc3NTdHlsZU5hbWUoa2V5KSArIFwiOlwiICsgcHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCBhc1N0cmluZykgKyBcIjtcIjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ05PX0NPTVBPTkVOVF9TRUxFQ1RPUicgJiYgaXNEZXZlbG9wbWVudCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihub0NvbXBvbmVudFNlbGVjdG9yTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlWzBdID09PSAnc3RyaW5nJyAmJiAocmVnaXN0ZXJlZCA9PSBudWxsIHx8IHJlZ2lzdGVyZWRbdmFsdWVbMF1dID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHZhbHVlLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgaWYgKGlzUHJvY2Vzc2FibGVWYWx1ZSh2YWx1ZVtfaV0pKSB7XG4gICAgICAgICAgICAgIHN0cmluZyArPSBwcm9jZXNzU3R5bGVOYW1lKGtleSkgKyBcIjpcIiArIHByb2Nlc3NTdHlsZVZhbHVlKGtleSwgdmFsdWVbX2ldKSArIFwiO1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaW50ZXJwb2xhdGVkID0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgdmFsdWUpO1xuXG4gICAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FuaW1hdGlvbic6XG4gICAgICAgICAgICBjYXNlICdhbmltYXRpb25OYW1lJzpcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSBwcm9jZXNzU3R5bGVOYW1lKGtleSkgKyBcIjpcIiArIGludGVycG9sYXRlZCArIFwiO1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihVTkRFRklORURfQVNfT0JKRUNUX0tFWV9FUlJPUik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IGtleSArIFwie1wiICsgaW50ZXJwb2xhdGVkICsgXCJ9XCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG52YXIgbGFiZWxQYXR0ZXJuID0gL2xhYmVsOlxccyooW15cXHM7e10rKVxccyooO3wkKS9nO1xudmFyIHNvdXJjZU1hcFBhdHRlcm47XG5cbntcbiAgc291cmNlTWFwUGF0dGVybiA9IC9cXC9cXCojXFxzc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uXFwvanNvbjtcXFMrXFxzK1xcKlxcLy9nO1xufSAvLyB0aGlzIGlzIHRoZSBjdXJzb3IgZm9yIGtleWZyYW1lc1xuLy8ga2V5ZnJhbWVzIGFyZSBzdG9yZWQgb24gdGhlIFNlcmlhbGl6ZWRTdHlsZXMgb2JqZWN0IGFzIGEgbGlua2VkIGxpc3RcblxuXG52YXIgY3Vyc29yO1xuZnVuY3Rpb24gc2VyaWFsaXplU3R5bGVzKGFyZ3MsIHJlZ2lzdGVyZWQsIG1lcmdlZFByb3BzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXJnc1swXSA9PT0gJ29iamVjdCcgJiYgYXJnc1swXSAhPT0gbnVsbCAmJiBhcmdzWzBdLnN0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGFyZ3NbMF07XG4gIH1cblxuICB2YXIgc3RyaW5nTW9kZSA9IHRydWU7XG4gIHZhciBzdHlsZXMgPSAnJztcbiAgY3Vyc29yID0gdW5kZWZpbmVkO1xuICB2YXIgc3RyaW5ncyA9IGFyZ3NbMF07XG5cbiAgaWYgKHN0cmluZ3MgPT0gbnVsbCB8fCBzdHJpbmdzLnJhdyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RyaW5nTW9kZSA9IGZhbHNlO1xuICAgIHN0eWxlcyArPSBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBzdHJpbmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgYXNUZW1wbGF0ZVN0cmluZ3NBcnIgPSBzdHJpbmdzO1xuXG4gICAgaWYgKGFzVGVtcGxhdGVTdHJpbmdzQXJyWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoSUxMRUdBTF9FU0NBUEVfU0VRVUVOQ0VfRVJST1IpO1xuICAgIH1cblxuICAgIHN0eWxlcyArPSBhc1RlbXBsYXRlU3RyaW5nc0FyclswXTtcbiAgfSAvLyB3ZSBzdGFydCBhdCAxIHNpbmNlIHdlJ3ZlIGFscmVhZHkgaGFuZGxlZCB0aGUgZmlyc3QgYXJnXG5cblxuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBzdHlsZXMgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgYXJnc1tpXSk7XG5cbiAgICBpZiAoc3RyaW5nTW9kZSkge1xuICAgICAgdmFyIHRlbXBsYXRlU3RyaW5nc0FyciA9IHN0cmluZ3M7XG5cbiAgICAgIGlmICh0ZW1wbGF0ZVN0cmluZ3NBcnJbaV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKElMTEVHQUxfRVNDQVBFX1NFUVVFTkNFX0VSUk9SKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzICs9IHRlbXBsYXRlU3RyaW5nc0FycltpXTtcbiAgICB9XG4gIH1cblxuICB2YXIgc291cmNlTWFwO1xuXG4gIHtcbiAgICBzdHlsZXMgPSBzdHlsZXMucmVwbGFjZShzb3VyY2VNYXBQYXR0ZXJuLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHNvdXJjZU1hcCA9IG1hdGNoO1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0pO1xuICB9IC8vIHVzaW5nIGEgZ2xvYmFsIHJlZ2V4IHdpdGggLmV4ZWMgaXMgc3RhdGVmdWwgc28gbGFzdEluZGV4IGhhcyB0byBiZSByZXNldCBlYWNoIHRpbWVcblxuXG4gIGxhYmVsUGF0dGVybi5sYXN0SW5kZXggPSAwO1xuICB2YXIgaWRlbnRpZmllck5hbWUgPSAnJztcbiAgdmFyIG1hdGNoOyAvLyBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzViODA5YzJjZjI5NDk4MDBhMGY2MWZiNVxuXG4gIHdoaWxlICgobWF0Y2ggPSBsYWJlbFBhdHRlcm4uZXhlYyhzdHlsZXMpKSAhPT0gbnVsbCkge1xuICAgIGlkZW50aWZpZXJOYW1lICs9ICctJyArIG1hdGNoWzFdO1xuICB9XG5cbiAgdmFyIG5hbWUgPSBoYXNoU3RyaW5nKHN0eWxlcykgKyBpZGVudGlmaWVyTmFtZTtcblxuICB7XG4gICAgdmFyIGRldlN0eWxlcyA9IHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICAgIG1hcDogc291cmNlTWFwLFxuICAgICAgbmV4dDogY3Vyc29yLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gXCJZb3UgaGF2ZSB0cmllZCB0byBzdHJpbmdpZnkgb2JqZWN0IHJldHVybmVkIGZyb20gYGNzc2AgZnVuY3Rpb24uIEl0IGlzbid0IHN1cHBvc2VkIHRvIGJlIHVzZWQgZGlyZWN0bHkgKGUuZy4gYXMgdmFsdWUgb2YgdGhlIGBjbGFzc05hbWVgIHByb3ApLCBidXQgcmF0aGVyIGhhbmRlZCB0byBlbW90aW9uIHNvIGl0IGNhbiBoYW5kbGUgaXQgKGUuZy4gYXMgdmFsdWUgb2YgYGNzc2AgcHJvcCkuXCI7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gZGV2U3R5bGVzO1xuICB9XG59XG5cbmV4cG9ydCB7IHNlcmlhbGl6ZVN0eWxlcyB9O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG52YXIgc3luY0ZhbGxiYWNrID0gZnVuY3Rpb24gc3luY0ZhbGxiYWNrKGNyZWF0ZSkge1xuICByZXR1cm4gY3JlYXRlKCk7XG59O1xuXG52YXIgdXNlSW5zZXJ0aW9uRWZmZWN0ID0gUmVhY3RbJ3VzZUluc2VydGlvbicgKyAnRWZmZWN0J10gPyBSZWFjdFsndXNlSW5zZXJ0aW9uJyArICdFZmZlY3QnXSA6IGZhbHNlO1xudmFyIHVzZUluc2VydGlvbkVmZmVjdEFsd2F5c1dpdGhTeW5jRmFsbGJhY2sgPSB1c2VJbnNlcnRpb25FZmZlY3QgfHwgc3luY0ZhbGxiYWNrO1xudmFyIHVzZUluc2VydGlvbkVmZmVjdFdpdGhMYXlvdXRGYWxsYmFjayA9IHVzZUluc2VydGlvbkVmZmVjdCB8fCBSZWFjdC51c2VMYXlvdXRFZmZlY3Q7XG5cbmV4cG9ydCB7IHVzZUluc2VydGlvbkVmZmVjdEFsd2F5c1dpdGhTeW5jRmFsbGJhY2ssIHVzZUluc2VydGlvbkVmZmVjdFdpdGhMYXlvdXRGYWxsYmFjayB9O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcmVhdGVDYWNoZSBmcm9tICdAZW1vdGlvbi9jYWNoZSc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgd2Vha01lbW9pemUgZnJvbSAnQGVtb3Rpb24vd2Vhay1tZW1vaXplJztcbmltcG9ydCBob2lzdE5vblJlYWN0U3RhdGljcyBmcm9tICcuLi9faXNvbGF0ZWQtaG5ycy9kaXN0L2Vtb3Rpb24tcmVhY3QtX2lzb2xhdGVkLWhucnMuYnJvd3Nlci5kZXZlbG9wbWVudC5lc20uanMnO1xuaW1wb3J0IHsgZ2V0UmVnaXN0ZXJlZFN0eWxlcywgcmVnaXN0ZXJTdHlsZXMsIGluc2VydFN0eWxlcyB9IGZyb20gJ0BlbW90aW9uL3V0aWxzJztcbmltcG9ydCB7IHNlcmlhbGl6ZVN0eWxlcyB9IGZyb20gJ0BlbW90aW9uL3NlcmlhbGl6ZSc7XG5pbXBvcnQgeyB1c2VJbnNlcnRpb25FZmZlY3RBbHdheXNXaXRoU3luY0ZhbGxiYWNrIH0gZnJvbSAnQGVtb3Rpb24vdXNlLWluc2VydGlvbi1lZmZlY3Qtd2l0aC1mYWxsYmFja3MnO1xuXG4vKiBpbXBvcnQgeyB0eXBlIEVtb3Rpb25DYWNoZSB9IGZyb20gJ0BlbW90aW9uL3V0aWxzJyAqL1xudmFyIEVtb3Rpb25DYWNoZUNvbnRleHRcbi8qOiBSZWFjdC5Db250ZXh0PEVtb3Rpb25DYWNoZSB8IG51bGw+ICovXG49IC8qICNfX1BVUkVfXyAqL1JlYWN0LmNyZWF0ZUNvbnRleHQoIC8vIHdlJ3JlIGRvaW5nIHRoaXMgdG8gYXZvaWQgcHJlY29uc3RydWN0J3MgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIGluIHRoaXMgb25lIGNhc2Vcbi8vIGJlY2F1c2UgdGhpcyBtb2R1bGUgaXMgcHJpbWFyaWx5IGludGVuZGVkIGZvciB0aGUgYnJvd3NlciBhbmQgbm9kZVxuLy8gYnV0IGl0J3MgYWxzbyByZXF1aXJlZCBpbiByZWFjdCBuYXRpdmUgYW5kIHNpbWlsYXIgZW52aXJvbm1lbnRzIHNvbWV0aW1lc1xuLy8gYW5kIHdlIGNvdWxkIGhhdmUgYSBzcGVjaWFsIGJ1aWxkIGp1c3QgZm9yIHRoYXRcbi8vIGJ1dCB0aGlzIGlzIG11Y2ggZWFzaWVyIGFuZCB0aGUgbmF0aXZlIHBhY2thZ2VzXG4vLyBtaWdodCB1c2UgYSBkaWZmZXJlbnQgdGhlbWUgY29udGV4dCBpbiB0aGUgZnV0dXJlIGFueXdheVxudHlwZW9mIEhUTUxFbGVtZW50ICE9PSAndW5kZWZpbmVkJyA/IC8qICNfX1BVUkVfXyAqL2NyZWF0ZUNhY2hlKHtcbiAga2V5OiAnY3NzJ1xufSkgOiBudWxsKTtcblxue1xuICBFbW90aW9uQ2FjaGVDb250ZXh0LmRpc3BsYXlOYW1lID0gJ0Vtb3Rpb25DYWNoZUNvbnRleHQnO1xufVxuXG52YXIgQ2FjaGVQcm92aWRlciA9IEVtb3Rpb25DYWNoZUNvbnRleHQuUHJvdmlkZXI7XG52YXIgX191bnNhZmVfdXNlRW1vdGlvbkNhY2hlID0gZnVuY3Rpb24gdXNlRW1vdGlvbkNhY2hlKClcbi8qOiBFbW90aW9uQ2FjaGUgfCBudWxsKi9cbntcbiAgcmV0dXJuIHVzZUNvbnRleHQoRW1vdGlvbkNhY2hlQ29udGV4dCk7XG59O1xuXG52YXIgd2l0aEVtb3Rpb25DYWNoZSA9IGZ1bmN0aW9uIHdpdGhFbW90aW9uQ2FjaGVcbi8qIDxQcm9wcywgUmVmOiBSZWFjdC5SZWY8Kj4+ICovXG4oZnVuY1xuLyo6IChwcm9wczogUHJvcHMsIGNhY2hlOiBFbW90aW9uQ2FjaGUsIHJlZjogUmVmKSA9PiBSZWFjdC5Ob2RlICovXG4pXG4vKjogUmVhY3QuQWJzdHJhY3RDb21wb25lbnQ8UHJvcHM+ICovXG57XG4gIHJldHVybiAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHNcbiAgLyo6IFByb3BzICovXG4gICwgcmVmXG4gIC8qOiBSZWYgKi9cbiAgKSB7XG4gICAgLy8gdGhlIGNhY2hlIHdpbGwgbmV2ZXIgYmUgbnVsbCBpbiB0aGUgYnJvd3NlclxuICAgIHZhciBjYWNoZSA9IHVzZUNvbnRleHQoRW1vdGlvbkNhY2hlQ29udGV4dCk7XG4gICAgcmV0dXJuIGZ1bmMocHJvcHMsIGNhY2hlLCByZWYpO1xuICB9KTtcbn07XG5cbnZhciBUaGVtZUNvbnRleHQgPSAvKiAjX19QVVJFX18gKi9SZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcblxue1xuICBUaGVtZUNvbnRleHQuZGlzcGxheU5hbWUgPSAnRW1vdGlvblRoZW1lQ29udGV4dCc7XG59XG5cbnZhciB1c2VUaGVtZSA9IGZ1bmN0aW9uIHVzZVRoZW1lKCkge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xufTtcblxudmFyIGdldFRoZW1lID0gZnVuY3Rpb24gZ2V0VGhlbWUob3V0ZXJUaGVtZVxuLyo6IE9iamVjdCAqL1xuLCB0aGVtZVxuLyo6IE9iamVjdCB8IChPYmplY3QgPT4gT2JqZWN0KSAqL1xuKSB7XG4gIGlmICh0eXBlb2YgdGhlbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgbWVyZ2VkVGhlbWUgPSB0aGVtZShvdXRlclRoZW1lKTtcblxuICAgIGlmICgobWVyZ2VkVGhlbWUgPT0gbnVsbCB8fCB0eXBlb2YgbWVyZ2VkVGhlbWUgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkobWVyZ2VkVGhlbWUpKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbVGhlbWVQcm92aWRlcl0gUGxlYXNlIHJldHVybiBhbiBvYmplY3QgZnJvbSB5b3VyIHRoZW1lIGZ1bmN0aW9uLCBpLmUuIHRoZW1lPXsoKSA9PiAoe30pfSEnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2VkVGhlbWU7XG4gIH1cblxuICBpZiAoKHRoZW1lID09IG51bGwgfHwgdHlwZW9mIHRoZW1lICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KHRoZW1lKSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1tUaGVtZVByb3ZpZGVyXSBQbGVhc2UgbWFrZSB5b3VyIHRoZW1lIHByb3AgYSBwbGFpbiBvYmplY3QnKTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgb3V0ZXJUaGVtZSwgdGhlbWUpO1xufTtcblxudmFyIGNyZWF0ZUNhY2hlV2l0aFRoZW1lID0gLyogI19fUFVSRV9fICovd2Vha01lbW9pemUoZnVuY3Rpb24gKG91dGVyVGhlbWUpIHtcbiAgcmV0dXJuIHdlYWtNZW1vaXplKGZ1bmN0aW9uICh0aGVtZSkge1xuICAgIHJldHVybiBnZXRUaGVtZShvdXRlclRoZW1lLCB0aGVtZSk7XG4gIH0pO1xufSk7XG4vKlxudHlwZSBUaGVtZVByb3ZpZGVyUHJvcHMgPSB7XG4gIHRoZW1lOiBPYmplY3QgfCAoT2JqZWN0ID0+IE9iamVjdCksXG4gIGNoaWxkcmVuOiBSZWFjdC5Ob2RlXG59XG4qL1xuXG52YXIgVGhlbWVQcm92aWRlciA9IGZ1bmN0aW9uIFRoZW1lUHJvdmlkZXIocHJvcHNcbi8qOiBUaGVtZVByb3ZpZGVyUHJvcHMgKi9cbikge1xuICB2YXIgdGhlbWUgPSBSZWFjdC51c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG5cbiAgaWYgKHByb3BzLnRoZW1lICE9PSB0aGVtZSkge1xuICAgIHRoZW1lID0gY3JlYXRlQ2FjaGVXaXRoVGhlbWUodGhlbWUpKHByb3BzLnRoZW1lKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUaGVtZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogdGhlbWVcbiAgfSwgcHJvcHMuY2hpbGRyZW4pO1xufTtcbmZ1bmN0aW9uIHdpdGhUaGVtZVxuLyogPENvbmZpZzoge30+ICovXG4oQ29tcG9uZW50XG4vKjogUmVhY3QuQWJzdHJhY3RDb21wb25lbnQ8Q29uZmlnPiAqL1xuKVxuLyo6IFJlYWN0LkFic3RyYWN0Q29tcG9uZW50PCREaWZmPENvbmZpZywgeyB0aGVtZTogT2JqZWN0IH0+PiAqL1xue1xuICB2YXIgY29tcG9uZW50TmFtZSA9IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcblxuICB2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHByb3BzLCByZWYpIHtcbiAgICB2YXIgdGhlbWUgPSBSZWFjdC51c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgdGhlbWU6IHRoZW1lLFxuICAgICAgcmVmOiByZWZcbiAgICB9LCBwcm9wcykpO1xuICB9O1xuXG4gIHZhciBXaXRoVGhlbWUgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihyZW5kZXIpO1xuICBXaXRoVGhlbWUuZGlzcGxheU5hbWUgPSBcIldpdGhUaGVtZShcIiArIGNvbXBvbmVudE5hbWUgKyBcIilcIjtcbiAgcmV0dXJuIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKFdpdGhUaGVtZSwgQ29tcG9uZW50KTtcbn1cblxudmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG52YXIgZ2V0TGFzdFBhcnQgPSBmdW5jdGlvblxuICAvKiA6IHN0cmluZyAqL1xuZ2V0TGFzdFBhcnQoZnVuY3Rpb25OYW1lXG4vKiA6IHN0cmluZyAqL1xuKSB7XG4gIC8vIFRoZSBtYXRjaCBtYXkgYmUgc29tZXRoaW5nIGxpa2UgJ09iamVjdC5jcmVhdGVFbW90aW9uUHJvcHMnIG9yXG4gIC8vICdMb2FkZXIucHJvdG90eXBlLnJlbmRlcidcbiAgdmFyIHBhcnRzID0gZnVuY3Rpb25OYW1lLnNwbGl0KCcuJyk7XG4gIHJldHVybiBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXTtcbn07XG5cbnZhciBnZXRGdW5jdGlvbk5hbWVGcm9tU3RhY2tUcmFjZUxpbmUgPSBmdW5jdGlvblxuICAvKjogP3N0cmluZyovXG5nZXRGdW5jdGlvbk5hbWVGcm9tU3RhY2tUcmFjZUxpbmUobGluZVxuLyo6IHN0cmluZyovXG4pIHtcbiAgLy8gVjhcbiAgdmFyIG1hdGNoID0gL15cXHMrYXRcXHMrKFtBLVphLXowLTkkLl0rKVxccy8uZXhlYyhsaW5lKTtcbiAgaWYgKG1hdGNoKSByZXR1cm4gZ2V0TGFzdFBhcnQobWF0Y2hbMV0pOyAvLyBTYWZhcmkgLyBGaXJlZm94XG5cbiAgbWF0Y2ggPSAvXihbQS1aYS16MC05JC5dKylALy5leGVjKGxpbmUpO1xuICBpZiAobWF0Y2gpIHJldHVybiBnZXRMYXN0UGFydChtYXRjaFsxXSk7XG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG52YXIgaW50ZXJuYWxSZWFjdEZ1bmN0aW9uTmFtZXMgPSAvKiAjX19QVVJFX18gKi9uZXcgU2V0KFsncmVuZGVyV2l0aEhvb2tzJywgJ3Byb2Nlc3NDaGlsZCcsICdmaW5pc2hDbGFzc0NvbXBvbmVudCcsICdyZW5kZXJUb1N0cmluZyddKTsgLy8gVGhlc2UgaWRlbnRpZmllcnMgY29tZSBmcm9tIGVycm9yIHN0YWNrcywgc28gdGhleSBoYXZlIHRvIGJlIHZhbGlkIEpTXG4vLyBpZGVudGlmaWVycywgdGh1cyB3ZSBvbmx5IG5lZWQgdG8gcmVwbGFjZSB3aGF0IGlzIGEgdmFsaWQgY2hhcmFjdGVyIGZvciBKUyxcbi8vIGJ1dCBub3QgZm9yIENTUy5cblxudmFyIHNhbml0aXplSWRlbnRpZmllciA9IGZ1bmN0aW9uIHNhbml0aXplSWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHJldHVybiBpZGVudGlmaWVyLnJlcGxhY2UoL1xcJC9nLCAnLScpO1xufTtcblxudmFyIGdldExhYmVsRnJvbVN0YWNrVHJhY2UgPSBmdW5jdGlvbiBnZXRMYWJlbEZyb21TdGFja1RyYWNlKHN0YWNrVHJhY2UpIHtcbiAgaWYgKCFzdGFja1RyYWNlKSByZXR1cm4gdW5kZWZpbmVkO1xuICB2YXIgbGluZXMgPSBzdGFja1RyYWNlLnNwbGl0KCdcXG4nKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGZ1bmN0aW9uTmFtZSA9IGdldEZ1bmN0aW9uTmFtZUZyb21TdGFja1RyYWNlTGluZShsaW5lc1tpXSk7IC8vIFRoZSBmaXJzdCBsaW5lIG9mIFY4IHN0YWNrIHRyYWNlcyBpcyBqdXN0IFwiRXJyb3JcIlxuXG4gICAgaWYgKCFmdW5jdGlvbk5hbWUpIGNvbnRpbnVlOyAvLyBJZiB3ZSByZWFjaCBvbmUgb2YgdGhlc2UsIHdlIGhhdmUgZ29uZSB0b28gZmFyIGFuZCBzaG91bGQgcXVpdFxuXG4gICAgaWYgKGludGVybmFsUmVhY3RGdW5jdGlvbk5hbWVzLmhhcyhmdW5jdGlvbk5hbWUpKSBicmVhazsgLy8gVGhlIGNvbXBvbmVudCBuYW1lIGlzIHRoZSBmaXJzdCBmdW5jdGlvbiBpbiB0aGUgc3RhY2sgdGhhdCBzdGFydHMgd2l0aCBhblxuICAgIC8vIHVwcGVyY2FzZSBsZXR0ZXJcblxuICAgIGlmICgvXltBLVpdLy50ZXN0KGZ1bmN0aW9uTmFtZSkpIHJldHVybiBzYW5pdGl6ZUlkZW50aWZpZXIoZnVuY3Rpb25OYW1lKTtcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG52YXIgdHlwZVByb3BOYW1lID0gJ19fRU1PVElPTl9UWVBFX1BMRUFTRV9ET19OT1RfVVNFX18nO1xudmFyIGxhYmVsUHJvcE5hbWUgPSAnX19FTU9USU9OX0xBQkVMX1BMRUFTRV9ET19OT1RfVVNFX18nO1xudmFyIGNyZWF0ZUVtb3Rpb25Qcm9wcyA9IGZ1bmN0aW9uIGNyZWF0ZUVtb3Rpb25Qcm9wcyh0eXBlXG4vKjogUmVhY3QuRWxlbWVudFR5cGUgKi9cbiwgcHJvcHNcbi8qOiBPYmplY3QgKi9cbikge1xuICBpZiAodHlwZW9mIHByb3BzLmNzcyA9PT0gJ3N0cmluZycgJiYgLy8gY2hlY2sgaWYgdGhlcmUgaXMgYSBjc3MgZGVjbGFyYXRpb25cbiAgcHJvcHMuY3NzLmluZGV4T2YoJzonKSAhPT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdHJpbmdzIGFyZSBub3QgYWxsb3dlZCBhcyBjc3MgcHJvcCB2YWx1ZXMsIHBsZWFzZSB3cmFwIGl0IGluIGEgY3NzIHRlbXBsYXRlIGxpdGVyYWwgZnJvbSAnQGVtb3Rpb24vcmVhY3QnIGxpa2UgdGhpczogY3NzYFwiICsgcHJvcHMuY3NzICsgXCJgXCIpO1xuICB9XG5cbiAgdmFyIG5ld1Byb3BzXG4gIC8qOiBhbnkgKi9cbiAgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICBpZiAoaGFzT3duLmNhbGwocHJvcHMsIGtleSkpIHtcbiAgICAgIG5ld1Byb3BzW2tleV0gPSBwcm9wc1trZXldO1xuICAgIH1cbiAgfVxuXG4gIG5ld1Byb3BzW3R5cGVQcm9wTmFtZV0gPSB0eXBlOyAvLyBSdW50aW1lIGxhYmVsaW5nIGlzIGFuIG9wdC1pbiBmZWF0dXJlIGJlY2F1c2U6XG4gIC8vIC0gSXQgY2F1c2VzIGh5ZHJhdGlvbiB3YXJuaW5ncyB3aGVuIHVzaW5nIFNhZmFyaSBhbmQgU1NSXG4gIC8vIC0gSXQgY2FuIGRlZ3JhZGUgcGVyZm9ybWFuY2UgaWYgdGhlcmUgYXJlIGEgaHVnZSBudW1iZXIgb2YgZWxlbWVudHNcbiAgLy9cbiAgLy8gRXZlbiBpZiB0aGUgZmxhZyBpcyBzZXQsIHdlIHN0aWxsIGRvbid0IGNvbXB1dGUgdGhlIGxhYmVsIGlmIGl0IGhhcyBhbHJlYWR5XG4gIC8vIGJlZW4gZGV0ZXJtaW5lZCBieSB0aGUgQmFiZWwgcGx1Z2luLlxuXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgJiYgISFnbG9iYWxUaGlzLkVNT1RJT05fUlVOVElNRV9BVVRPX0xBQkVMICYmICEhcHJvcHMuY3NzICYmICh0eXBlb2YgcHJvcHMuY3NzICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgcHJvcHMuY3NzLm5hbWUgIT09ICdzdHJpbmcnIHx8IHByb3BzLmNzcy5uYW1lLmluZGV4T2YoJy0nKSA9PT0gLTEpKSB7XG4gICAgdmFyIGxhYmVsID0gZ2V0TGFiZWxGcm9tU3RhY2tUcmFjZShuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgaWYgKGxhYmVsKSBuZXdQcm9wc1tsYWJlbFByb3BOYW1lXSA9IGxhYmVsO1xuICB9XG5cbiAgcmV0dXJuIG5ld1Byb3BzO1xufTtcblxudmFyIEluc2VydGlvbiA9IGZ1bmN0aW9uIEluc2VydGlvbihfcmVmKSB7XG4gIHZhciBjYWNoZSA9IF9yZWYuY2FjaGUsXG4gICAgICBzZXJpYWxpemVkID0gX3JlZi5zZXJpYWxpemVkLFxuICAgICAgaXNTdHJpbmdUYWcgPSBfcmVmLmlzU3RyaW5nVGFnO1xuICByZWdpc3RlclN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgaXNTdHJpbmdUYWcpO1xuICB1c2VJbnNlcnRpb25FZmZlY3RBbHdheXNXaXRoU3luY0ZhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gaW5zZXJ0U3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkLCBpc1N0cmluZ1RhZyk7XG4gIH0pO1xuXG4gIHJldHVybiBudWxsO1xufTtcblxudmFyIEVtb3Rpb24gPSAvKiAjX19QVVJFX18gKi93aXRoRW1vdGlvbkNhY2hlKFxuLyogPGFueSwgYW55PiAqL1xuZnVuY3Rpb24gKHByb3BzLCBjYWNoZSwgcmVmKSB7XG4gIHZhciBjc3NQcm9wID0gcHJvcHMuY3NzOyAvLyBzbyB0aGF0IHVzaW5nIGBjc3NgIGZyb20gYGVtb3Rpb25gIGFuZCBwYXNzaW5nIHRoZSByZXN1bHQgdG8gdGhlIGNzcyBwcm9wIHdvcmtzXG4gIC8vIG5vdCBwYXNzaW5nIHRoZSByZWdpc3RlcmVkIGNhY2hlIHRvIHNlcmlhbGl6ZVN0eWxlcyBiZWNhdXNlIGl0IHdvdWxkXG4gIC8vIG1ha2UgY2VydGFpbiBiYWJlbCBvcHRpbWlzYXRpb25zIG5vdCBwb3NzaWJsZVxuXG4gIGlmICh0eXBlb2YgY3NzUHJvcCA9PT0gJ3N0cmluZycgJiYgY2FjaGUucmVnaXN0ZXJlZFtjc3NQcm9wXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY3NzUHJvcCA9IGNhY2hlLnJlZ2lzdGVyZWRbY3NzUHJvcF07XG4gIH1cblxuICB2YXIgV3JhcHBlZENvbXBvbmVudCA9IHByb3BzW3R5cGVQcm9wTmFtZV07XG4gIHZhciByZWdpc3RlcmVkU3R5bGVzID0gW2Nzc1Byb3BdO1xuICB2YXIgY2xhc3NOYW1lID0gJyc7XG5cbiAgaWYgKHR5cGVvZiBwcm9wcy5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgY2xhc3NOYW1lID0gZ2V0UmVnaXN0ZXJlZFN0eWxlcyhjYWNoZS5yZWdpc3RlcmVkLCByZWdpc3RlcmVkU3R5bGVzLCBwcm9wcy5jbGFzc05hbWUpO1xuICB9IGVsc2UgaWYgKHByb3BzLmNsYXNzTmFtZSAhPSBudWxsKSB7XG4gICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lICsgXCIgXCI7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZVN0eWxlcyhyZWdpc3RlcmVkU3R5bGVzLCB1bmRlZmluZWQsIFJlYWN0LnVzZUNvbnRleHQoVGhlbWVDb250ZXh0KSk7XG5cbiAgaWYgKHNlcmlhbGl6ZWQubmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgdmFyIGxhYmVsRnJvbVN0YWNrID0gcHJvcHNbbGFiZWxQcm9wTmFtZV07XG5cbiAgICBpZiAobGFiZWxGcm9tU3RhY2spIHtcbiAgICAgIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoW3NlcmlhbGl6ZWQsICdsYWJlbDonICsgbGFiZWxGcm9tU3RhY2sgKyAnOyddKTtcbiAgICB9XG4gIH1cblxuICBjbGFzc05hbWUgKz0gY2FjaGUua2V5ICsgXCItXCIgKyBzZXJpYWxpemVkLm5hbWU7XG4gIHZhciBuZXdQcm9wcyA9IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgIGlmIChoYXNPd24uY2FsbChwcm9wcywga2V5KSAmJiBrZXkgIT09ICdjc3MnICYmIGtleSAhPT0gdHlwZVByb3BOYW1lICYmIChrZXkgIT09IGxhYmVsUHJvcE5hbWUpKSB7XG4gICAgICBuZXdQcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICB9XG4gIH1cblxuICBuZXdQcm9wcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG5cbiAgaWYgKHJlZikge1xuICAgIG5ld1Byb3BzLnJlZiA9IHJlZjtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5zZXJ0aW9uLCB7XG4gICAgY2FjaGU6IGNhY2hlLFxuICAgIHNlcmlhbGl6ZWQ6IHNlcmlhbGl6ZWQsXG4gICAgaXNTdHJpbmdUYWc6IHR5cGVvZiBXcmFwcGVkQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgbmV3UHJvcHMpKTtcbn0pO1xuXG57XG4gIEVtb3Rpb24uZGlzcGxheU5hbWUgPSAnRW1vdGlvbkNzc1Byb3BJbnRlcm5hbCc7XG59XG5cbnZhciBFbW90aW9uJDEgPSBFbW90aW9uO1xuXG5leHBvcnQgeyBDYWNoZVByb3ZpZGVyIGFzIEMsIEVtb3Rpb24kMSBhcyBFLCBUaGVtZUNvbnRleHQgYXMgVCwgX191bnNhZmVfdXNlRW1vdGlvbkNhY2hlIGFzIF8sIFRoZW1lUHJvdmlkZXIgYXMgYSwgd2l0aFRoZW1lIGFzIGIsIGNyZWF0ZUVtb3Rpb25Qcm9wcyBhcyBjLCBoYXNPd24gYXMgaCwgdXNlVGhlbWUgYXMgdSwgd2l0aEVtb3Rpb25DYWNoZSBhcyB3IH07XG4iLCJpbXBvcnQgeyBoIGFzIGhhc093biwgRSBhcyBFbW90aW9uLCBjIGFzIGNyZWF0ZUVtb3Rpb25Qcm9wcywgdyBhcyB3aXRoRW1vdGlvbkNhY2hlLCBUIGFzIFRoZW1lQ29udGV4dCB9IGZyb20gJy4vZW1vdGlvbi1lbGVtZW50LTdhMTM0M2ZhLmJyb3dzZXIuZGV2ZWxvcG1lbnQuZXNtLmpzJztcbmV4cG9ydCB7IEMgYXMgQ2FjaGVQcm92aWRlciwgVCBhcyBUaGVtZUNvbnRleHQsIGEgYXMgVGhlbWVQcm92aWRlciwgXyBhcyBfX3Vuc2FmZV91c2VFbW90aW9uQ2FjaGUsIHUgYXMgdXNlVGhlbWUsIHcgYXMgd2l0aEVtb3Rpb25DYWNoZSwgYiBhcyB3aXRoVGhlbWUgfSBmcm9tICcuL2Vtb3Rpb24tZWxlbWVudC03YTEzNDNmYS5icm93c2VyLmRldmVsb3BtZW50LmVzbS5qcyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpbnNlcnRTdHlsZXMsIHJlZ2lzdGVyU3R5bGVzLCBnZXRSZWdpc3RlcmVkU3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vdXRpbHMnO1xuaW1wb3J0IHsgdXNlSW5zZXJ0aW9uRWZmZWN0V2l0aExheW91dEZhbGxiYWNrLCB1c2VJbnNlcnRpb25FZmZlY3RBbHdheXNXaXRoU3luY0ZhbGxiYWNrIH0gZnJvbSAnQGVtb3Rpb24vdXNlLWluc2VydGlvbi1lZmZlY3Qtd2l0aC1mYWxsYmFja3MnO1xuaW1wb3J0IHsgc2VyaWFsaXplU3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vc2VyaWFsaXplJztcbmltcG9ydCAnQGVtb3Rpb24vY2FjaGUnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0ICdAZW1vdGlvbi93ZWFrLW1lbW9pemUnO1xuaW1wb3J0ICcuLi9faXNvbGF0ZWQtaG5ycy9kaXN0L2Vtb3Rpb24tcmVhY3QtX2lzb2xhdGVkLWhucnMuYnJvd3Nlci5kZXZlbG9wbWVudC5lc20uanMnO1xuaW1wb3J0ICdob2lzdC1ub24tcmVhY3Qtc3RhdGljcyc7XG5cbnZhciBpc0RldmVsb3BtZW50ID0gdHJ1ZTtcblxudmFyIHBrZyA9IHtcblx0bmFtZTogXCJAZW1vdGlvbi9yZWFjdFwiLFxuXHR2ZXJzaW9uOiBcIjExLjEzLjNcIixcblx0bWFpbjogXCJkaXN0L2Vtb3Rpb24tcmVhY3QuY2pzLmpzXCIsXG5cdG1vZHVsZTogXCJkaXN0L2Vtb3Rpb24tcmVhY3QuZXNtLmpzXCIsXG5cdGV4cG9ydHM6IHtcblx0XHRcIi5cIjoge1xuXHRcdFx0dHlwZXM6IHtcblx0XHRcdFx0XCJpbXBvcnRcIjogXCIuL2Rpc3QvZW1vdGlvbi1yZWFjdC5janMubWpzXCIsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBcIi4vZGlzdC9lbW90aW9uLXJlYWN0LmNqcy5qc1wiXG5cdFx0XHR9LFxuXHRcdFx0ZGV2ZWxvcG1lbnQ6IHtcblx0XHRcdFx0XCJlZGdlLWxpZ2h0XCI6IHtcblx0XHRcdFx0XHRtb2R1bGU6IFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3QuZGV2ZWxvcG1lbnQuZWRnZS1saWdodC5lc20uanNcIixcblx0XHRcdFx0XHRcImltcG9ydFwiOiBcIi4vZGlzdC9lbW90aW9uLXJlYWN0LmRldmVsb3BtZW50LmVkZ2UtbGlnaHQuY2pzLm1qc1wiLFxuXHRcdFx0XHRcdFwiZGVmYXVsdFwiOiBcIi4vZGlzdC9lbW90aW9uLXJlYWN0LmRldmVsb3BtZW50LmVkZ2UtbGlnaHQuY2pzLmpzXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0d29ya2VyOiB7XG5cdFx0XHRcdFx0bW9kdWxlOiBcIi4vZGlzdC9lbW90aW9uLXJlYWN0LmRldmVsb3BtZW50LmVkZ2UtbGlnaHQuZXNtLmpzXCIsXG5cdFx0XHRcdFx0XCJpbXBvcnRcIjogXCIuL2Rpc3QvZW1vdGlvbi1yZWFjdC5kZXZlbG9wbWVudC5lZGdlLWxpZ2h0LmNqcy5tanNcIixcblx0XHRcdFx0XHRcImRlZmF1bHRcIjogXCIuL2Rpc3QvZW1vdGlvbi1yZWFjdC5kZXZlbG9wbWVudC5lZGdlLWxpZ2h0LmNqcy5qc1wiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHdvcmtlcmQ6IHtcblx0XHRcdFx0XHRtb2R1bGU6IFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3QuZGV2ZWxvcG1lbnQuZWRnZS1saWdodC5lc20uanNcIixcblx0XHRcdFx0XHRcImltcG9ydFwiOiBcIi4vZGlzdC9lbW90aW9uLXJlYWN0LmRldmVsb3BtZW50LmVkZ2UtbGlnaHQuY2pzLm1qc1wiLFxuXHRcdFx0XHRcdFwiZGVmYXVsdFwiOiBcIi4vZGlzdC9lbW90aW9uLXJlYWN0LmRldmVsb3BtZW50LmVkZ2UtbGlnaHQuY2pzLmpzXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0YnJvd3Nlcjoge1xuXHRcdFx0XHRcdG1vZHVsZTogXCIuL2Rpc3QvZW1vdGlvbi1yZWFjdC5icm93c2VyLmRldmVsb3BtZW50LmVzbS5qc1wiLFxuXHRcdFx0XHRcdFwiaW1wb3J0XCI6IFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3QuYnJvd3Nlci5kZXZlbG9wbWVudC5janMubWpzXCIsXG5cdFx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3QuYnJvd3Nlci5kZXZlbG9wbWVudC5janMuanNcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRtb2R1bGU6IFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3QuZGV2ZWxvcG1lbnQuZXNtLmpzXCIsXG5cdFx0XHRcdFwiaW1wb3J0XCI6IFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3QuZGV2ZWxvcG1lbnQuY2pzLm1qc1wiLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCIuL2Rpc3QvZW1vdGlvbi1yZWFjdC5kZXZlbG9wbWVudC5janMuanNcIlxuXHRcdFx0fSxcblx0XHRcdFwiZWRnZS1saWdodFwiOiB7XG5cdFx0XHRcdG1vZHVsZTogXCIuL2Rpc3QvZW1vdGlvbi1yZWFjdC5lZGdlLWxpZ2h0LmVzbS5qc1wiLFxuXHRcdFx0XHRcImltcG9ydFwiOiBcIi4vZGlzdC9lbW90aW9uLXJlYWN0LmVkZ2UtbGlnaHQuY2pzLm1qc1wiLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCIuL2Rpc3QvZW1vdGlvbi1yZWFjdC5lZGdlLWxpZ2h0LmNqcy5qc1wiXG5cdFx0XHR9LFxuXHRcdFx0d29ya2VyOiB7XG5cdFx0XHRcdG1vZHVsZTogXCIuL2Rpc3QvZW1vdGlvbi1yZWFjdC5lZGdlLWxpZ2h0LmVzbS5qc1wiLFxuXHRcdFx0XHRcImltcG9ydFwiOiBcIi4vZGlzdC9lbW90aW9uLXJlYWN0LmVkZ2UtbGlnaHQuY2pzLm1qc1wiLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCIuL2Rpc3QvZW1vdGlvbi1yZWFjdC5lZGdlLWxpZ2h0LmNqcy5qc1wiXG5cdFx0XHR9LFxuXHRcdFx0d29ya2VyZDoge1xuXHRcdFx0XHRtb2R1bGU6IFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3QuZWRnZS1saWdodC5lc20uanNcIixcblx0XHRcdFx0XCJpbXBvcnRcIjogXCIuL2Rpc3QvZW1vdGlvbi1yZWFjdC5lZGdlLWxpZ2h0LmNqcy5tanNcIixcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3QuZWRnZS1saWdodC5janMuanNcIlxuXHRcdFx0fSxcblx0XHRcdGJyb3dzZXI6IHtcblx0XHRcdFx0bW9kdWxlOiBcIi4vZGlzdC9lbW90aW9uLXJlYWN0LmJyb3dzZXIuZXNtLmpzXCIsXG5cdFx0XHRcdFwiaW1wb3J0XCI6IFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3QuYnJvd3Nlci5janMubWpzXCIsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBcIi4vZGlzdC9lbW90aW9uLXJlYWN0LmJyb3dzZXIuY2pzLmpzXCJcblx0XHRcdH0sXG5cdFx0XHRtb2R1bGU6IFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3QuZXNtLmpzXCIsXG5cdFx0XHRcImltcG9ydFwiOiBcIi4vZGlzdC9lbW90aW9uLXJlYWN0LmNqcy5tanNcIixcblx0XHRcdFwiZGVmYXVsdFwiOiBcIi4vZGlzdC9lbW90aW9uLXJlYWN0LmNqcy5qc1wiXG5cdFx0fSxcblx0XHRcIi4vanN4LXJ1bnRpbWVcIjoge1xuXHRcdFx0dHlwZXM6IHtcblx0XHRcdFx0XCJpbXBvcnRcIjogXCIuL2pzeC1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtcnVudGltZS5janMubWpzXCIsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBcIi4vanN4LXJ1bnRpbWUvZGlzdC9lbW90aW9uLXJlYWN0LWpzeC1ydW50aW1lLmNqcy5qc1wiXG5cdFx0XHR9LFxuXHRcdFx0ZGV2ZWxvcG1lbnQ6IHtcblx0XHRcdFx0XCJlZGdlLWxpZ2h0XCI6IHtcblx0XHRcdFx0XHRtb2R1bGU6IFwiLi9qc3gtcnVudGltZS9kaXN0L2Vtb3Rpb24tcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuZWRnZS1saWdodC5lc20uanNcIixcblx0XHRcdFx0XHRcImltcG9ydFwiOiBcIi4vanN4LXJ1bnRpbWUvZGlzdC9lbW90aW9uLXJlYWN0LWpzeC1ydW50aW1lLmRldmVsb3BtZW50LmVkZ2UtbGlnaHQuY2pzLm1qc1wiLFxuXHRcdFx0XHRcdFwiZGVmYXVsdFwiOiBcIi4vanN4LXJ1bnRpbWUvZGlzdC9lbW90aW9uLXJlYWN0LWpzeC1ydW50aW1lLmRldmVsb3BtZW50LmVkZ2UtbGlnaHQuY2pzLmpzXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0d29ya2VyOiB7XG5cdFx0XHRcdFx0bW9kdWxlOiBcIi4vanN4LXJ1bnRpbWUvZGlzdC9lbW90aW9uLXJlYWN0LWpzeC1ydW50aW1lLmRldmVsb3BtZW50LmVkZ2UtbGlnaHQuZXNtLmpzXCIsXG5cdFx0XHRcdFx0XCJpbXBvcnRcIjogXCIuL2pzeC1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtcnVudGltZS5kZXZlbG9wbWVudC5lZGdlLWxpZ2h0LmNqcy5tanNcIixcblx0XHRcdFx0XHRcImRlZmF1bHRcIjogXCIuL2pzeC1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtcnVudGltZS5kZXZlbG9wbWVudC5lZGdlLWxpZ2h0LmNqcy5qc1wiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHdvcmtlcmQ6IHtcblx0XHRcdFx0XHRtb2R1bGU6IFwiLi9qc3gtcnVudGltZS9kaXN0L2Vtb3Rpb24tcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuZWRnZS1saWdodC5lc20uanNcIixcblx0XHRcdFx0XHRcImltcG9ydFwiOiBcIi4vanN4LXJ1bnRpbWUvZGlzdC9lbW90aW9uLXJlYWN0LWpzeC1ydW50aW1lLmRldmVsb3BtZW50LmVkZ2UtbGlnaHQuY2pzLm1qc1wiLFxuXHRcdFx0XHRcdFwiZGVmYXVsdFwiOiBcIi4vanN4LXJ1bnRpbWUvZGlzdC9lbW90aW9uLXJlYWN0LWpzeC1ydW50aW1lLmRldmVsb3BtZW50LmVkZ2UtbGlnaHQuY2pzLmpzXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0YnJvd3Nlcjoge1xuXHRcdFx0XHRcdG1vZHVsZTogXCIuL2pzeC1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtcnVudGltZS5icm93c2VyLmRldmVsb3BtZW50LmVzbS5qc1wiLFxuXHRcdFx0XHRcdFwiaW1wb3J0XCI6IFwiLi9qc3gtcnVudGltZS9kaXN0L2Vtb3Rpb24tcmVhY3QtanN4LXJ1bnRpbWUuYnJvd3Nlci5kZXZlbG9wbWVudC5janMubWpzXCIsXG5cdFx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiLi9qc3gtcnVudGltZS9kaXN0L2Vtb3Rpb24tcmVhY3QtanN4LXJ1bnRpbWUuYnJvd3Nlci5kZXZlbG9wbWVudC5janMuanNcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRtb2R1bGU6IFwiLi9qc3gtcnVudGltZS9kaXN0L2Vtb3Rpb24tcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuZXNtLmpzXCIsXG5cdFx0XHRcdFwiaW1wb3J0XCI6IFwiLi9qc3gtcnVudGltZS9kaXN0L2Vtb3Rpb24tcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuY2pzLm1qc1wiLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCIuL2pzeC1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtcnVudGltZS5kZXZlbG9wbWVudC5janMuanNcIlxuXHRcdFx0fSxcblx0XHRcdFwiZWRnZS1saWdodFwiOiB7XG5cdFx0XHRcdG1vZHVsZTogXCIuL2pzeC1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtcnVudGltZS5lZGdlLWxpZ2h0LmVzbS5qc1wiLFxuXHRcdFx0XHRcImltcG9ydFwiOiBcIi4vanN4LXJ1bnRpbWUvZGlzdC9lbW90aW9uLXJlYWN0LWpzeC1ydW50aW1lLmVkZ2UtbGlnaHQuY2pzLm1qc1wiLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCIuL2pzeC1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtcnVudGltZS5lZGdlLWxpZ2h0LmNqcy5qc1wiXG5cdFx0XHR9LFxuXHRcdFx0d29ya2VyOiB7XG5cdFx0XHRcdG1vZHVsZTogXCIuL2pzeC1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtcnVudGltZS5lZGdlLWxpZ2h0LmVzbS5qc1wiLFxuXHRcdFx0XHRcImltcG9ydFwiOiBcIi4vanN4LXJ1bnRpbWUvZGlzdC9lbW90aW9uLXJlYWN0LWpzeC1ydW50aW1lLmVkZ2UtbGlnaHQuY2pzLm1qc1wiLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCIuL2pzeC1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtcnVudGltZS5lZGdlLWxpZ2h0LmNqcy5qc1wiXG5cdFx0XHR9LFxuXHRcdFx0d29ya2VyZDoge1xuXHRcdFx0XHRtb2R1bGU6IFwiLi9qc3gtcnVudGltZS9kaXN0L2Vtb3Rpb24tcmVhY3QtanN4LXJ1bnRpbWUuZWRnZS1saWdodC5lc20uanNcIixcblx0XHRcdFx0XCJpbXBvcnRcIjogXCIuL2pzeC1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtcnVudGltZS5lZGdlLWxpZ2h0LmNqcy5tanNcIixcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiLi9qc3gtcnVudGltZS9kaXN0L2Vtb3Rpb24tcmVhY3QtanN4LXJ1bnRpbWUuZWRnZS1saWdodC5janMuanNcIlxuXHRcdFx0fSxcblx0XHRcdGJyb3dzZXI6IHtcblx0XHRcdFx0bW9kdWxlOiBcIi4vanN4LXJ1bnRpbWUvZGlzdC9lbW90aW9uLXJlYWN0LWpzeC1ydW50aW1lLmJyb3dzZXIuZXNtLmpzXCIsXG5cdFx0XHRcdFwiaW1wb3J0XCI6IFwiLi9qc3gtcnVudGltZS9kaXN0L2Vtb3Rpb24tcmVhY3QtanN4LXJ1bnRpbWUuYnJvd3Nlci5janMubWpzXCIsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBcIi4vanN4LXJ1bnRpbWUvZGlzdC9lbW90aW9uLXJlYWN0LWpzeC1ydW50aW1lLmJyb3dzZXIuY2pzLmpzXCJcblx0XHRcdH0sXG5cdFx0XHRtb2R1bGU6IFwiLi9qc3gtcnVudGltZS9kaXN0L2Vtb3Rpb24tcmVhY3QtanN4LXJ1bnRpbWUuZXNtLmpzXCIsXG5cdFx0XHRcImltcG9ydFwiOiBcIi4vanN4LXJ1bnRpbWUvZGlzdC9lbW90aW9uLXJlYWN0LWpzeC1ydW50aW1lLmNqcy5tanNcIixcblx0XHRcdFwiZGVmYXVsdFwiOiBcIi4vanN4LXJ1bnRpbWUvZGlzdC9lbW90aW9uLXJlYWN0LWpzeC1ydW50aW1lLmNqcy5qc1wiXG5cdFx0fSxcblx0XHRcIi4vX2lzb2xhdGVkLWhucnNcIjoge1xuXHRcdFx0dHlwZXM6IHtcblx0XHRcdFx0XCJpbXBvcnRcIjogXCIuL19pc29sYXRlZC1obnJzL2Rpc3QvZW1vdGlvbi1yZWFjdC1faXNvbGF0ZWQtaG5ycy5janMubWpzXCIsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBcIi4vX2lzb2xhdGVkLWhucnMvZGlzdC9lbW90aW9uLXJlYWN0LV9pc29sYXRlZC1obnJzLmNqcy5qc1wiXG5cdFx0XHR9LFxuXHRcdFx0ZGV2ZWxvcG1lbnQ6IHtcblx0XHRcdFx0XCJlZGdlLWxpZ2h0XCI6IHtcblx0XHRcdFx0XHRtb2R1bGU6IFwiLi9faXNvbGF0ZWQtaG5ycy9kaXN0L2Vtb3Rpb24tcmVhY3QtX2lzb2xhdGVkLWhucnMuZGV2ZWxvcG1lbnQuZWRnZS1saWdodC5lc20uanNcIixcblx0XHRcdFx0XHRcImltcG9ydFwiOiBcIi4vX2lzb2xhdGVkLWhucnMvZGlzdC9lbW90aW9uLXJlYWN0LV9pc29sYXRlZC1obnJzLmRldmVsb3BtZW50LmVkZ2UtbGlnaHQuY2pzLm1qc1wiLFxuXHRcdFx0XHRcdFwiZGVmYXVsdFwiOiBcIi4vX2lzb2xhdGVkLWhucnMvZGlzdC9lbW90aW9uLXJlYWN0LV9pc29sYXRlZC1obnJzLmRldmVsb3BtZW50LmVkZ2UtbGlnaHQuY2pzLmpzXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0d29ya2VyOiB7XG5cdFx0XHRcdFx0bW9kdWxlOiBcIi4vX2lzb2xhdGVkLWhucnMvZGlzdC9lbW90aW9uLXJlYWN0LV9pc29sYXRlZC1obnJzLmRldmVsb3BtZW50LmVkZ2UtbGlnaHQuZXNtLmpzXCIsXG5cdFx0XHRcdFx0XCJpbXBvcnRcIjogXCIuL19pc29sYXRlZC1obnJzL2Rpc3QvZW1vdGlvbi1yZWFjdC1faXNvbGF0ZWQtaG5ycy5kZXZlbG9wbWVudC5lZGdlLWxpZ2h0LmNqcy5tanNcIixcblx0XHRcdFx0XHRcImRlZmF1bHRcIjogXCIuL19pc29sYXRlZC1obnJzL2Rpc3QvZW1vdGlvbi1yZWFjdC1faXNvbGF0ZWQtaG5ycy5kZXZlbG9wbWVudC5lZGdlLWxpZ2h0LmNqcy5qc1wiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHdvcmtlcmQ6IHtcblx0XHRcdFx0XHRtb2R1bGU6IFwiLi9faXNvbGF0ZWQtaG5ycy9kaXN0L2Vtb3Rpb24tcmVhY3QtX2lzb2xhdGVkLWhucnMuZGV2ZWxvcG1lbnQuZWRnZS1saWdodC5lc20uanNcIixcblx0XHRcdFx0XHRcImltcG9ydFwiOiBcIi4vX2lzb2xhdGVkLWhucnMvZGlzdC9lbW90aW9uLXJlYWN0LV9pc29sYXRlZC1obnJzLmRldmVsb3BtZW50LmVkZ2UtbGlnaHQuY2pzLm1qc1wiLFxuXHRcdFx0XHRcdFwiZGVmYXVsdFwiOiBcIi4vX2lzb2xhdGVkLWhucnMvZGlzdC9lbW90aW9uLXJlYWN0LV9pc29sYXRlZC1obnJzLmRldmVsb3BtZW50LmVkZ2UtbGlnaHQuY2pzLmpzXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0YnJvd3Nlcjoge1xuXHRcdFx0XHRcdG1vZHVsZTogXCIuL19pc29sYXRlZC1obnJzL2Rpc3QvZW1vdGlvbi1yZWFjdC1faXNvbGF0ZWQtaG5ycy5icm93c2VyLmRldmVsb3BtZW50LmVzbS5qc1wiLFxuXHRcdFx0XHRcdFwiaW1wb3J0XCI6IFwiLi9faXNvbGF0ZWQtaG5ycy9kaXN0L2Vtb3Rpb24tcmVhY3QtX2lzb2xhdGVkLWhucnMuYnJvd3Nlci5kZXZlbG9wbWVudC5janMubWpzXCIsXG5cdFx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiLi9faXNvbGF0ZWQtaG5ycy9kaXN0L2Vtb3Rpb24tcmVhY3QtX2lzb2xhdGVkLWhucnMuYnJvd3Nlci5kZXZlbG9wbWVudC5janMuanNcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRtb2R1bGU6IFwiLi9faXNvbGF0ZWQtaG5ycy9kaXN0L2Vtb3Rpb24tcmVhY3QtX2lzb2xhdGVkLWhucnMuZGV2ZWxvcG1lbnQuZXNtLmpzXCIsXG5cdFx0XHRcdFwiaW1wb3J0XCI6IFwiLi9faXNvbGF0ZWQtaG5ycy9kaXN0L2Vtb3Rpb24tcmVhY3QtX2lzb2xhdGVkLWhucnMuZGV2ZWxvcG1lbnQuY2pzLm1qc1wiLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCIuL19pc29sYXRlZC1obnJzL2Rpc3QvZW1vdGlvbi1yZWFjdC1faXNvbGF0ZWQtaG5ycy5kZXZlbG9wbWVudC5janMuanNcIlxuXHRcdFx0fSxcblx0XHRcdFwiZWRnZS1saWdodFwiOiB7XG5cdFx0XHRcdG1vZHVsZTogXCIuL19pc29sYXRlZC1obnJzL2Rpc3QvZW1vdGlvbi1yZWFjdC1faXNvbGF0ZWQtaG5ycy5lZGdlLWxpZ2h0LmVzbS5qc1wiLFxuXHRcdFx0XHRcImltcG9ydFwiOiBcIi4vX2lzb2xhdGVkLWhucnMvZGlzdC9lbW90aW9uLXJlYWN0LV9pc29sYXRlZC1obnJzLmVkZ2UtbGlnaHQuY2pzLm1qc1wiLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCIuL19pc29sYXRlZC1obnJzL2Rpc3QvZW1vdGlvbi1yZWFjdC1faXNvbGF0ZWQtaG5ycy5lZGdlLWxpZ2h0LmNqcy5qc1wiXG5cdFx0XHR9LFxuXHRcdFx0d29ya2VyOiB7XG5cdFx0XHRcdG1vZHVsZTogXCIuL19pc29sYXRlZC1obnJzL2Rpc3QvZW1vdGlvbi1yZWFjdC1faXNvbGF0ZWQtaG5ycy5lZGdlLWxpZ2h0LmVzbS5qc1wiLFxuXHRcdFx0XHRcImltcG9ydFwiOiBcIi4vX2lzb2xhdGVkLWhucnMvZGlzdC9lbW90aW9uLXJlYWN0LV9pc29sYXRlZC1obnJzLmVkZ2UtbGlnaHQuY2pzLm1qc1wiLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCIuL19pc29sYXRlZC1obnJzL2Rpc3QvZW1vdGlvbi1yZWFjdC1faXNvbGF0ZWQtaG5ycy5lZGdlLWxpZ2h0LmNqcy5qc1wiXG5cdFx0XHR9LFxuXHRcdFx0d29ya2VyZDoge1xuXHRcdFx0XHRtb2R1bGU6IFwiLi9faXNvbGF0ZWQtaG5ycy9kaXN0L2Vtb3Rpb24tcmVhY3QtX2lzb2xhdGVkLWhucnMuZWRnZS1saWdodC5lc20uanNcIixcblx0XHRcdFx0XCJpbXBvcnRcIjogXCIuL19pc29sYXRlZC1obnJzL2Rpc3QvZW1vdGlvbi1yZWFjdC1faXNvbGF0ZWQtaG5ycy5lZGdlLWxpZ2h0LmNqcy5tanNcIixcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiLi9faXNvbGF0ZWQtaG5ycy9kaXN0L2Vtb3Rpb24tcmVhY3QtX2lzb2xhdGVkLWhucnMuZWRnZS1saWdodC5janMuanNcIlxuXHRcdFx0fSxcblx0XHRcdGJyb3dzZXI6IHtcblx0XHRcdFx0bW9kdWxlOiBcIi4vX2lzb2xhdGVkLWhucnMvZGlzdC9lbW90aW9uLXJlYWN0LV9pc29sYXRlZC1obnJzLmJyb3dzZXIuZXNtLmpzXCIsXG5cdFx0XHRcdFwiaW1wb3J0XCI6IFwiLi9faXNvbGF0ZWQtaG5ycy9kaXN0L2Vtb3Rpb24tcmVhY3QtX2lzb2xhdGVkLWhucnMuYnJvd3Nlci5janMubWpzXCIsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBcIi4vX2lzb2xhdGVkLWhucnMvZGlzdC9lbW90aW9uLXJlYWN0LV9pc29sYXRlZC1obnJzLmJyb3dzZXIuY2pzLmpzXCJcblx0XHRcdH0sXG5cdFx0XHRtb2R1bGU6IFwiLi9faXNvbGF0ZWQtaG5ycy9kaXN0L2Vtb3Rpb24tcmVhY3QtX2lzb2xhdGVkLWhucnMuZXNtLmpzXCIsXG5cdFx0XHRcImltcG9ydFwiOiBcIi4vX2lzb2xhdGVkLWhucnMvZGlzdC9lbW90aW9uLXJlYWN0LV9pc29sYXRlZC1obnJzLmNqcy5tanNcIixcblx0XHRcdFwiZGVmYXVsdFwiOiBcIi4vX2lzb2xhdGVkLWhucnMvZGlzdC9lbW90aW9uLXJlYWN0LV9pc29sYXRlZC1obnJzLmNqcy5qc1wiXG5cdFx0fSxcblx0XHRcIi4vanN4LWRldi1ydW50aW1lXCI6IHtcblx0XHRcdHR5cGVzOiB7XG5cdFx0XHRcdFwiaW1wb3J0XCI6IFwiLi9qc3gtZGV2LXJ1bnRpbWUvZGlzdC9lbW90aW9uLXJlYWN0LWpzeC1kZXYtcnVudGltZS5janMubWpzXCIsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBcIi4vanN4LWRldi1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuY2pzLmpzXCJcblx0XHRcdH0sXG5cdFx0XHRkZXZlbG9wbWVudDoge1xuXHRcdFx0XHRcImVkZ2UtbGlnaHRcIjoge1xuXHRcdFx0XHRcdG1vZHVsZTogXCIuL2pzeC1kZXYtcnVudGltZS9kaXN0L2Vtb3Rpb24tcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmVkZ2UtbGlnaHQuZXNtLmpzXCIsXG5cdFx0XHRcdFx0XCJpbXBvcnRcIjogXCIuL2pzeC1kZXYtcnVudGltZS9kaXN0L2Vtb3Rpb24tcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmVkZ2UtbGlnaHQuY2pzLm1qc1wiLFxuXHRcdFx0XHRcdFwiZGVmYXVsdFwiOiBcIi4vanN4LWRldi1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuZWRnZS1saWdodC5janMuanNcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR3b3JrZXI6IHtcblx0XHRcdFx0XHRtb2R1bGU6IFwiLi9qc3gtZGV2LXJ1bnRpbWUvZGlzdC9lbW90aW9uLXJlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5lZGdlLWxpZ2h0LmVzbS5qc1wiLFxuXHRcdFx0XHRcdFwiaW1wb3J0XCI6IFwiLi9qc3gtZGV2LXJ1bnRpbWUvZGlzdC9lbW90aW9uLXJlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5lZGdlLWxpZ2h0LmNqcy5tanNcIixcblx0XHRcdFx0XHRcImRlZmF1bHRcIjogXCIuL2pzeC1kZXYtcnVudGltZS9kaXN0L2Vtb3Rpb24tcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmVkZ2UtbGlnaHQuY2pzLmpzXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0d29ya2VyZDoge1xuXHRcdFx0XHRcdG1vZHVsZTogXCIuL2pzeC1kZXYtcnVudGltZS9kaXN0L2Vtb3Rpb24tcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmVkZ2UtbGlnaHQuZXNtLmpzXCIsXG5cdFx0XHRcdFx0XCJpbXBvcnRcIjogXCIuL2pzeC1kZXYtcnVudGltZS9kaXN0L2Vtb3Rpb24tcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmVkZ2UtbGlnaHQuY2pzLm1qc1wiLFxuXHRcdFx0XHRcdFwiZGVmYXVsdFwiOiBcIi4vanN4LWRldi1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuZWRnZS1saWdodC5janMuanNcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHRicm93c2VyOiB7XG5cdFx0XHRcdFx0bW9kdWxlOiBcIi4vanN4LWRldi1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuYnJvd3Nlci5kZXZlbG9wbWVudC5lc20uanNcIixcblx0XHRcdFx0XHRcImltcG9ydFwiOiBcIi4vanN4LWRldi1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuYnJvd3Nlci5kZXZlbG9wbWVudC5janMubWpzXCIsXG5cdFx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiLi9qc3gtZGV2LXJ1bnRpbWUvZGlzdC9lbW90aW9uLXJlYWN0LWpzeC1kZXYtcnVudGltZS5icm93c2VyLmRldmVsb3BtZW50LmNqcy5qc1wiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG1vZHVsZTogXCIuL2pzeC1kZXYtcnVudGltZS9kaXN0L2Vtb3Rpb24tcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmVzbS5qc1wiLFxuXHRcdFx0XHRcImltcG9ydFwiOiBcIi4vanN4LWRldi1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuY2pzLm1qc1wiLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCIuL2pzeC1kZXYtcnVudGltZS9kaXN0L2Vtb3Rpb24tcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmNqcy5qc1wiXG5cdFx0XHR9LFxuXHRcdFx0XCJlZGdlLWxpZ2h0XCI6IHtcblx0XHRcdFx0bW9kdWxlOiBcIi4vanN4LWRldi1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZWRnZS1saWdodC5lc20uanNcIixcblx0XHRcdFx0XCJpbXBvcnRcIjogXCIuL2pzeC1kZXYtcnVudGltZS9kaXN0L2Vtb3Rpb24tcmVhY3QtanN4LWRldi1ydW50aW1lLmVkZ2UtbGlnaHQuY2pzLm1qc1wiLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCIuL2pzeC1kZXYtcnVudGltZS9kaXN0L2Vtb3Rpb24tcmVhY3QtanN4LWRldi1ydW50aW1lLmVkZ2UtbGlnaHQuY2pzLmpzXCJcblx0XHRcdH0sXG5cdFx0XHR3b3JrZXI6IHtcblx0XHRcdFx0bW9kdWxlOiBcIi4vanN4LWRldi1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZWRnZS1saWdodC5lc20uanNcIixcblx0XHRcdFx0XCJpbXBvcnRcIjogXCIuL2pzeC1kZXYtcnVudGltZS9kaXN0L2Vtb3Rpb24tcmVhY3QtanN4LWRldi1ydW50aW1lLmVkZ2UtbGlnaHQuY2pzLm1qc1wiLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCIuL2pzeC1kZXYtcnVudGltZS9kaXN0L2Vtb3Rpb24tcmVhY3QtanN4LWRldi1ydW50aW1lLmVkZ2UtbGlnaHQuY2pzLmpzXCJcblx0XHRcdH0sXG5cdFx0XHR3b3JrZXJkOiB7XG5cdFx0XHRcdG1vZHVsZTogXCIuL2pzeC1kZXYtcnVudGltZS9kaXN0L2Vtb3Rpb24tcmVhY3QtanN4LWRldi1ydW50aW1lLmVkZ2UtbGlnaHQuZXNtLmpzXCIsXG5cdFx0XHRcdFwiaW1wb3J0XCI6IFwiLi9qc3gtZGV2LXJ1bnRpbWUvZGlzdC9lbW90aW9uLXJlYWN0LWpzeC1kZXYtcnVudGltZS5lZGdlLWxpZ2h0LmNqcy5tanNcIixcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiLi9qc3gtZGV2LXJ1bnRpbWUvZGlzdC9lbW90aW9uLXJlYWN0LWpzeC1kZXYtcnVudGltZS5lZGdlLWxpZ2h0LmNqcy5qc1wiXG5cdFx0XHR9LFxuXHRcdFx0YnJvd3Nlcjoge1xuXHRcdFx0XHRtb2R1bGU6IFwiLi9qc3gtZGV2LXJ1bnRpbWUvZGlzdC9lbW90aW9uLXJlYWN0LWpzeC1kZXYtcnVudGltZS5icm93c2VyLmVzbS5qc1wiLFxuXHRcdFx0XHRcImltcG9ydFwiOiBcIi4vanN4LWRldi1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuYnJvd3Nlci5janMubWpzXCIsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBcIi4vanN4LWRldi1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuYnJvd3Nlci5janMuanNcIlxuXHRcdFx0fSxcblx0XHRcdG1vZHVsZTogXCIuL2pzeC1kZXYtcnVudGltZS9kaXN0L2Vtb3Rpb24tcmVhY3QtanN4LWRldi1ydW50aW1lLmVzbS5qc1wiLFxuXHRcdFx0XCJpbXBvcnRcIjogXCIuL2pzeC1kZXYtcnVudGltZS9kaXN0L2Vtb3Rpb24tcmVhY3QtanN4LWRldi1ydW50aW1lLmNqcy5tanNcIixcblx0XHRcdFwiZGVmYXVsdFwiOiBcIi4vanN4LWRldi1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuY2pzLmpzXCJcblx0XHR9LFxuXHRcdFwiLi9wYWNrYWdlLmpzb25cIjogXCIuL3BhY2thZ2UuanNvblwiLFxuXHRcdFwiLi90eXBlcy9jc3MtcHJvcFwiOiBcIi4vdHlwZXMvY3NzLXByb3AuZC50c1wiLFxuXHRcdFwiLi9tYWNyb1wiOiB7XG5cdFx0XHR0eXBlczoge1xuXHRcdFx0XHRcImltcG9ydFwiOiBcIi4vbWFjcm8uZC5tdHNcIixcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiLi9tYWNyby5kLnRzXCJcblx0XHRcdH0sXG5cdFx0XHRcImRlZmF1bHRcIjogXCIuL21hY3JvLmpzXCJcblx0XHR9XG5cdH0sXG5cdGltcG9ydHM6IHtcblx0XHRcIiNpcy1kZXZlbG9wbWVudFwiOiB7XG5cdFx0XHRkZXZlbG9wbWVudDogXCIuL3NyYy9jb25kaXRpb25zL3RydWUuanNcIixcblx0XHRcdFwiZGVmYXVsdFwiOiBcIi4vc3JjL2NvbmRpdGlvbnMvZmFsc2UuanNcIlxuXHRcdH0sXG5cdFx0XCIjaXMtYnJvd3NlclwiOiB7XG5cdFx0XHRcImVkZ2UtbGlnaHRcIjogXCIuL3NyYy9jb25kaXRpb25zL2ZhbHNlLmpzXCIsXG5cdFx0XHR3b3JrZXJkOiBcIi4vc3JjL2NvbmRpdGlvbnMvZmFsc2UuanNcIixcblx0XHRcdHdvcmtlcjogXCIuL3NyYy9jb25kaXRpb25zL2ZhbHNlLmpzXCIsXG5cdFx0XHRicm93c2VyOiBcIi4vc3JjL2NvbmRpdGlvbnMvdHJ1ZS5qc1wiLFxuXHRcdFx0XCJkZWZhdWx0XCI6IFwiLi9zcmMvY29uZGl0aW9ucy9pcy1icm93c2VyLmpzXCJcblx0XHR9XG5cdH0sXG5cdHR5cGVzOiBcInR5cGVzL2luZGV4LmQudHNcIixcblx0ZmlsZXM6IFtcblx0XHRcInNyY1wiLFxuXHRcdFwiZGlzdFwiLFxuXHRcdFwianN4LXJ1bnRpbWVcIixcblx0XHRcImpzeC1kZXYtcnVudGltZVwiLFxuXHRcdFwiX2lzb2xhdGVkLWhucnNcIixcblx0XHRcInR5cGVzLyouZC50c1wiLFxuXHRcdFwibWFjcm8uKlwiXG5cdF0sXG5cdHNpZGVFZmZlY3RzOiBmYWxzZSxcblx0YXV0aG9yOiBcIkVtb3Rpb24gQ29udHJpYnV0b3JzXCIsXG5cdGxpY2Vuc2U6IFwiTUlUXCIsXG5cdHNjcmlwdHM6IHtcblx0XHRcInRlc3Q6dHlwZXNjcmlwdFwiOiBcImR0c2xpbnQgdHlwZXNcIlxuXHR9LFxuXHRkZXBlbmRlbmNpZXM6IHtcblx0XHRcIkBiYWJlbC9ydW50aW1lXCI6IFwiXjcuMTguM1wiLFxuXHRcdFwiQGVtb3Rpb24vYmFiZWwtcGx1Z2luXCI6IFwiXjExLjEyLjBcIixcblx0XHRcIkBlbW90aW9uL2NhY2hlXCI6IFwiXjExLjEzLjBcIixcblx0XHRcIkBlbW90aW9uL3NlcmlhbGl6ZVwiOiBcIl4xLjMuMVwiLFxuXHRcdFwiQGVtb3Rpb24vdXNlLWluc2VydGlvbi1lZmZlY3Qtd2l0aC1mYWxsYmFja3NcIjogXCJeMS4xLjBcIixcblx0XHRcIkBlbW90aW9uL3V0aWxzXCI6IFwiXjEuNC4wXCIsXG5cdFx0XCJAZW1vdGlvbi93ZWFrLW1lbW9pemVcIjogXCJeMC40LjBcIixcblx0XHRcImhvaXN0LW5vbi1yZWFjdC1zdGF0aWNzXCI6IFwiXjMuMy4xXCJcblx0fSxcblx0cGVlckRlcGVuZGVuY2llczoge1xuXHRcdHJlYWN0OiBcIj49MTYuOC4wXCJcblx0fSxcblx0cGVlckRlcGVuZGVuY2llc01ldGE6IHtcblx0XHRcIkB0eXBlcy9yZWFjdFwiOiB7XG5cdFx0XHRvcHRpb25hbDogdHJ1ZVxuXHRcdH1cblx0fSxcblx0ZGV2RGVwZW5kZW5jaWVzOiB7XG5cdFx0XCJAZGVmaW5pdGVseXR5cGVkL2R0c2xpbnRcIjogXCIwLjAuMTEyXCIsXG5cdFx0XCJAZW1vdGlvbi9jc3NcIjogXCIxMS4xMy4wXCIsXG5cdFx0XCJAZW1vdGlvbi9jc3MtcHJldHRpZmllclwiOiBcIjEuMS40XCIsXG5cdFx0XCJAZW1vdGlvbi9zZXJ2ZXJcIjogXCIxMS4xMS4wXCIsXG5cdFx0XCJAZW1vdGlvbi9zdHlsZWRcIjogXCIxMS4xMy4wXCIsXG5cdFx0XCJodG1sLXRhZy1uYW1lc1wiOiBcIl4xLjEuMlwiLFxuXHRcdHJlYWN0OiBcIjE2LjE0LjBcIixcblx0XHRcInN2Zy10YWctbmFtZXNcIjogXCJeMS4xLjFcIixcblx0XHR0eXBlc2NyaXB0OiBcIl41LjQuNVwiXG5cdH0sXG5cdHJlcG9zaXRvcnk6IFwiaHR0cHM6Ly9naXRodWIuY29tL2Vtb3Rpb24tanMvZW1vdGlvbi90cmVlL21haW4vcGFja2FnZXMvcmVhY3RcIixcblx0cHVibGlzaENvbmZpZzoge1xuXHRcdGFjY2VzczogXCJwdWJsaWNcIlxuXHR9LFxuXHRcInVtZDptYWluXCI6IFwiZGlzdC9lbW90aW9uLXJlYWN0LnVtZC5taW4uanNcIixcblx0cHJlY29uc3RydWN0OiB7XG5cdFx0ZW50cnlwb2ludHM6IFtcblx0XHRcdFwiLi9pbmRleC5qc1wiLFxuXHRcdFx0XCIuL2pzeC1ydW50aW1lLmpzXCIsXG5cdFx0XHRcIi4vanN4LWRldi1ydW50aW1lLmpzXCIsXG5cdFx0XHRcIi4vX2lzb2xhdGVkLWhucnMuanNcIlxuXHRcdF0sXG5cdFx0dW1kTmFtZTogXCJlbW90aW9uUmVhY3RcIixcblx0XHRleHBvcnRzOiB7XG5cdFx0XHRleHRyYToge1xuXHRcdFx0XHRcIi4vdHlwZXMvY3NzLXByb3BcIjogXCIuL3R5cGVzL2Nzcy1wcm9wLmQudHNcIixcblx0XHRcdFx0XCIuL21hY3JvXCI6IHtcblx0XHRcdFx0XHR0eXBlczoge1xuXHRcdFx0XHRcdFx0XCJpbXBvcnRcIjogXCIuL21hY3JvLmQubXRzXCIsXG5cdFx0XHRcdFx0XHRcImRlZmF1bHRcIjogXCIuL21hY3JvLmQudHNcIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiLi9tYWNyby5qc1wiXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbnZhciBqc3hcbi8qOiB0eXBlb2YgUmVhY3QuY3JlYXRlRWxlbWVudCAqL1xuPSBmdW5jdGlvbiBqc3hcbi8qOiB0eXBlb2YgUmVhY3QuY3JlYXRlRWxlbWVudCAqL1xuKHR5cGVcbi8qOiBSZWFjdC5FbGVtZW50VHlwZSAqL1xuLCBwcm9wc1xuLyo6IE9iamVjdCAqL1xuKSB7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG4gIGlmIChwcm9wcyA9PSBudWxsIHx8ICFoYXNPd24uY2FsbChwcm9wcywgJ2NzcycpKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgfVxuXG4gIHZhciBhcmdzTGVuZ3RoID0gYXJncy5sZW5ndGg7XG4gIHZhciBjcmVhdGVFbGVtZW50QXJnQXJyYXkgPSBuZXcgQXJyYXkoYXJnc0xlbmd0aCk7XG4gIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVswXSA9IEVtb3Rpb247XG4gIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVsxXSA9IGNyZWF0ZUVtb3Rpb25Qcm9wcyh0eXBlLCBwcm9wcyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmdzTGVuZ3RoOyBpKyspIHtcbiAgICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbaV0gPSBhcmdzW2ldO1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkobnVsbCwgY3JlYXRlRWxlbWVudEFyZ0FycmF5KTtcbn07XG5cbi8qXG50eXBlIFN0eWxlcyA9IE9iamVjdCB8IEFycmF5PE9iamVjdD5cblxudHlwZSBHbG9iYWxQcm9wcyA9IHtcbiAgK3N0eWxlczogU3R5bGVzIHwgKE9iamVjdCA9PiBTdHlsZXMpXG59XG4qL1xuXG52YXIgd2FybmVkQWJvdXRDc3NQcm9wRm9yR2xvYmFsID0gZmFsc2U7IC8vIG1haW50YWluIHBsYWNlIG92ZXIgcmVyZW5kZXJzLlxuLy8gaW5pdGlhbCByZW5kZXIgZnJvbSBicm93c2VyLCBpbnNlcnRCZWZvcmUgY29udGV4dC5zaGVldC50YWdzWzBdIG9yIGlmIGEgc3R5bGUgaGFzbid0IGJlZW4gaW5zZXJ0ZWQgdGhlcmUgeWV0LCBhcHBlbmRDaGlsZFxuLy8gaW5pdGlhbCBjbGllbnQtc2lkZSByZW5kZXIgZnJvbSBTU1IsIHVzZSBwbGFjZSBvZiBoeWRyYXRpbmcgdGFnXG5cbnZhciBHbG9iYWxcbi8qOiBSZWFjdC5BYnN0cmFjdENvbXBvbmVudDxcbkdsb2JhbFByb3BzXG4+ICovXG49IC8qICNfX1BVUkVfXyAqL3dpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzXG4vKjogR2xvYmFsUHJvcHMgKi9cbiwgY2FjaGUpIHtcbiAgaWYgKCF3YXJuZWRBYm91dENzc1Byb3BGb3JHbG9iYWwgJiYgKCAvLyBjaGVjayBmb3IgY2xhc3NOYW1lIGFzIHdlbGwgc2luY2UgdGhlIHVzZXIgaXNcbiAgLy8gcHJvYmFibHkgdXNpbmcgdGhlIGN1c3RvbSBjcmVhdGVFbGVtZW50IHdoaWNoXG4gIC8vIG1lYW5zIGl0IHdpbGwgYmUgdHVybmVkIGludG8gYSBjbGFzc05hbWUgcHJvcFxuICAvLyBJIGRvbid0IHJlYWxseSB3YW50IHRvIGFkZCBpdCB0byB0aGUgdHlwZSBzaW5jZSBpdCBzaG91bGRuJ3QgYmUgdXNlZFxuICBwcm9wcy5jbGFzc05hbWUgfHwgcHJvcHMuY3NzKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJJdCBsb29rcyBsaWtlIHlvdSdyZSB1c2luZyB0aGUgY3NzIHByb3Agb24gR2xvYmFsLCBkaWQgeW91IG1lYW4gdG8gdXNlIHRoZSBzdHlsZXMgcHJvcCBpbnN0ZWFkP1wiKTtcbiAgICB3YXJuZWRBYm91dENzc1Byb3BGb3JHbG9iYWwgPSB0cnVlO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IHByb3BzLnN0eWxlcztcbiAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoW3N0eWxlc10sIHVuZGVmaW5lZCwgUmVhY3QudXNlQ29udGV4dChUaGVtZUNvbnRleHQpKTtcbiAgLy8gYnV0IGl0IGlzIGJhc2VkIG9uIGEgY29uc3RhbnQgdGhhdCB3aWxsIG5ldmVyIGNoYW5nZSBhdCBydW50aW1lXG4gIC8vIGl0J3MgZWZmZWN0aXZlbHkgbGlrZSBoYXZpbmcgdHdvIGltcGxlbWVudGF0aW9ucyBhbmQgc3dpdGNoaW5nIHRoZW0gb3V0XG4gIC8vIHNvIGl0J3Mgbm90IGFjdHVhbGx5IGJyZWFraW5nIGFueXRoaW5nXG5cblxuICB2YXIgc2hlZXRSZWYgPSBSZWFjdC51c2VSZWYoKTtcbiAgdXNlSW5zZXJ0aW9uRWZmZWN0V2l0aExheW91dEZhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIga2V5ID0gY2FjaGUua2V5ICsgXCItZ2xvYmFsXCI7IC8vIHVzZSBjYXNlIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9lbW90aW9uLWpzL2Vtb3Rpb24vaXNzdWVzLzI2NzVcblxuICAgIHZhciBzaGVldCA9IG5ldyBjYWNoZS5zaGVldC5jb25zdHJ1Y3Rvcih7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIG5vbmNlOiBjYWNoZS5zaGVldC5ub25jZSxcbiAgICAgIGNvbnRhaW5lcjogY2FjaGUuc2hlZXQuY29udGFpbmVyLFxuICAgICAgc3BlZWR5OiBjYWNoZS5zaGVldC5pc1NwZWVkeVxuICAgIH0pO1xuICAgIHZhciByZWh5ZHJhdGluZyA9IGZhbHNlO1xuICAgIHZhciBub2RlXG4gICAgLyo6IEhUTUxTdHlsZUVsZW1lbnQgfCBudWxsKi9cbiAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzdHlsZVtkYXRhLWVtb3Rpb249XFxcIlwiICsga2V5ICsgXCIgXCIgKyBzZXJpYWxpemVkLm5hbWUgKyBcIlxcXCJdXCIpO1xuXG4gICAgaWYgKGNhY2hlLnNoZWV0LnRhZ3MubGVuZ3RoKSB7XG4gICAgICBzaGVldC5iZWZvcmUgPSBjYWNoZS5zaGVldC50YWdzWzBdO1xuICAgIH1cblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICByZWh5ZHJhdGluZyA9IHRydWU7IC8vIGNsZWFyIHRoZSBoYXNoIHNvIHRoaXMgbm9kZSB3b24ndCBiZSByZWNvZ25pemFibGUgYXMgcmVoeWRyYXRhYmxlIGJ5IG90aGVyIDxHbG9iYWwvPnNcblxuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZW1vdGlvbicsIGtleSk7XG4gICAgICBzaGVldC5oeWRyYXRlKFtub2RlXSk7XG4gICAgfVxuXG4gICAgc2hlZXRSZWYuY3VycmVudCA9IFtzaGVldCwgcmVoeWRyYXRpbmddO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBzaGVldC5mbHVzaCgpO1xuICAgIH07XG4gIH0sIFtjYWNoZV0pO1xuICB1c2VJbnNlcnRpb25FZmZlY3RXaXRoTGF5b3V0RmFsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHZhciBzaGVldFJlZkN1cnJlbnQgPSBzaGVldFJlZi5jdXJyZW50O1xuICAgIHZhciBzaGVldCA9IHNoZWV0UmVmQ3VycmVudFswXSxcbiAgICAgICAgcmVoeWRyYXRpbmcgPSBzaGVldFJlZkN1cnJlbnRbMV07XG5cbiAgICBpZiAocmVoeWRyYXRpbmcpIHtcbiAgICAgIHNoZWV0UmVmQ3VycmVudFsxXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzZXJpYWxpemVkLm5leHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gaW5zZXJ0IGtleWZyYW1lc1xuICAgICAgaW5zZXJ0U3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkLm5leHQsIHRydWUpO1xuICAgIH1cblxuICAgIGlmIChzaGVldC50YWdzLmxlbmd0aCkge1xuICAgICAgLy8gaWYgdGhpcyBkb2Vzbid0IGV4aXN0IHRoZW4gaXQgd2lsbCBiZSBudWxsIHNvIHRoZSBzdHlsZSBlbGVtZW50IHdpbGwgYmUgYXBwZW5kZWRcbiAgICAgIHZhciBlbGVtZW50ID0gc2hlZXQudGFnc1tzaGVldC50YWdzLmxlbmd0aCAtIDFdLm5leHRFbGVtZW50U2libGluZztcbiAgICAgIHNoZWV0LmJlZm9yZSA9IGVsZW1lbnQ7XG4gICAgICBzaGVldC5mbHVzaCgpO1xuICAgIH1cblxuICAgIGNhY2hlLmluc2VydChcIlwiLCBzZXJpYWxpemVkLCBzaGVldCwgZmFsc2UpO1xuICB9LCBbY2FjaGUsIHNlcmlhbGl6ZWQubmFtZV0pO1xuICByZXR1cm4gbnVsbDtcbn0pO1xuXG57XG4gIEdsb2JhbC5kaXNwbGF5TmFtZSA9ICdFbW90aW9uR2xvYmFsJztcbn1cblxuLyogaW1wb3J0IHR5cGUgeyBJbnRlcnBvbGF0aW9uLCBTZXJpYWxpemVkU3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vdXRpbHMnICovXG5cbmZ1bmN0aW9uIGNzcygpXG4vKjogU2VyaWFsaXplZFN0eWxlcyAqL1xue1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIHNlcmlhbGl6ZVN0eWxlcyhhcmdzKTtcbn1cblxuLypcbnR5cGUgS2V5ZnJhbWVzID0ge3xcbiAgbmFtZTogc3RyaW5nLFxuICBzdHlsZXM6IHN0cmluZyxcbiAgYW5pbTogMSxcbiAgdG9TdHJpbmc6ICgpID0+IHN0cmluZ1xufH0gJiBzdHJpbmdcbiovXG5cbnZhciBrZXlmcmFtZXMgPSBmdW5jdGlvblxuICAvKjogS2V5ZnJhbWVzICovXG5rZXlmcmFtZXMoKSB7XG4gIHZhciBpbnNlcnRhYmxlID0gY3NzLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgdmFyIG5hbWUgPSBcImFuaW1hdGlvbi1cIiArIGluc2VydGFibGUubmFtZTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIHN0eWxlczogXCJAa2V5ZnJhbWVzIFwiICsgbmFtZSArIFwie1wiICsgaW5zZXJ0YWJsZS5zdHlsZXMgKyBcIn1cIixcbiAgICBhbmltOiAxLFxuICAgIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiBcIl9FTU9fXCIgKyB0aGlzLm5hbWUgKyBcIl9cIiArIHRoaXMuc3R5bGVzICsgXCJfRU1PX1wiO1xuICAgIH1cbiAgfTtcbn07XG5cbi8qXG50eXBlIENsYXNzTmFtZUFyZyA9XG4gIHwgc3RyaW5nXG4gIHwgYm9vbGVhblxuICB8IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9XG4gIHwgQXJyYXk8Q2xhc3NOYW1lQXJnPlxuICB8IG51bGxcbiAgfCB2b2lkXG4qL1xuXG52YXIgY2xhc3NuYW1lcyA9IGZ1bmN0aW9uXG4gIC8qOiBzdHJpbmcgKi9cbmNsYXNzbmFtZXMoYXJnc1xuLyo6IEFycmF5PENsYXNzTmFtZUFyZz4gKi9cbikge1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIGNscyA9ICcnO1xuXG4gIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgYXJnID0gYXJnc1tpXTtcbiAgICBpZiAoYXJnID09IG51bGwpIGNvbnRpbnVlO1xuICAgIHZhciB0b0FkZCA9IHZvaWQgMDtcblxuICAgIHN3aXRjaCAodHlwZW9mIGFyZykge1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuICAgICAgICAgICAgdG9BZGQgPSBjbGFzc25hbWVzKGFyZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChhcmcuc3R5bGVzICE9PSB1bmRlZmluZWQgJiYgYXJnLm5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdZb3UgaGF2ZSBwYXNzZWQgc3R5bGVzIGNyZWF0ZWQgd2l0aCBgY3NzYCBmcm9tIGBAZW1vdGlvbi9yZWFjdGAgcGFja2FnZSB0byB0aGUgYGN4YC5cXG4nICsgJ2BjeGAgaXMgbWVhbnQgdG8gY29tcG9zZSBjbGFzcyBuYW1lcyAoc3RyaW5ncykgc28geW91IHNob3VsZCBjb252ZXJ0IHRob3NlIHN0eWxlcyB0byBhIGNsYXNzIG5hbWUgYnkgcGFzc2luZyB0aGVtIHRvIHRoZSBgY3NzYCByZWNlaXZlZCBmcm9tIDxDbGFzc05hbWVzLz4gY29tcG9uZW50LicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0b0FkZCA9ICcnO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIGFyZykge1xuICAgICAgICAgICAgICBpZiAoYXJnW2tdICYmIGspIHtcbiAgICAgICAgICAgICAgICB0b0FkZCAmJiAodG9BZGQgKz0gJyAnKTtcbiAgICAgICAgICAgICAgICB0b0FkZCArPSBrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAge1xuICAgICAgICAgIHRvQWRkID0gYXJnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRvQWRkKSB7XG4gICAgICBjbHMgJiYgKGNscyArPSAnICcpO1xuICAgICAgY2xzICs9IHRvQWRkO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjbHM7XG59O1xuXG5mdW5jdGlvbiBtZXJnZShyZWdpc3RlcmVkXG4vKjogT2JqZWN0ICovXG4sIGNzc1xuLyo6ICguLi5hcmdzOiBBcnJheTxhbnk+KSA9PiBzdHJpbmcgKi9cbiwgY2xhc3NOYW1lXG4vKjogc3RyaW5nICovXG4pIHtcbiAgdmFyIHJlZ2lzdGVyZWRTdHlsZXMgPSBbXTtcbiAgdmFyIHJhd0NsYXNzTmFtZSA9IGdldFJlZ2lzdGVyZWRTdHlsZXMocmVnaXN0ZXJlZCwgcmVnaXN0ZXJlZFN0eWxlcywgY2xhc3NOYW1lKTtcblxuICBpZiAocmVnaXN0ZXJlZFN0eWxlcy5sZW5ndGggPCAyKSB7XG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIHJldHVybiByYXdDbGFzc05hbWUgKyBjc3MocmVnaXN0ZXJlZFN0eWxlcyk7XG59XG5cbnZhciBJbnNlcnRpb24gPSBmdW5jdGlvbiBJbnNlcnRpb24oX3JlZikge1xuICB2YXIgY2FjaGUgPSBfcmVmLmNhY2hlLFxuICAgICAgc2VyaWFsaXplZEFyciA9IF9yZWYuc2VyaWFsaXplZEFycjtcbiAgdXNlSW5zZXJ0aW9uRWZmZWN0QWx3YXlzV2l0aFN5bmNGYWxsYmFjayhmdW5jdGlvbiAoKSB7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlcmlhbGl6ZWRBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGluc2VydFN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZEFycltpXSwgZmFsc2UpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuLypcbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiAoe1xuICAgIGNzczogKC4uLmFyZ3M6IGFueSkgPT4gc3RyaW5nLFxuICAgIGN4OiAoLi4uYXJnczogQXJyYXk8Q2xhc3NOYW1lQXJnPikgPT4gc3RyaW5nLFxuICAgIHRoZW1lOiBPYmplY3RcbiAgfSkgPT4gUmVhY3QuTm9kZVxufSAqL1xuXG5cbnZhciBDbGFzc05hbWVzXG4vKjogUmVhY3QuQWJzdHJhY3RDb21wb25lbnQ8UHJvcHM+Ki9cbj0gLyogI19fUFVSRV9fICovd2l0aEVtb3Rpb25DYWNoZShmdW5jdGlvbiAocHJvcHMsIGNhY2hlKSB7XG4gIHZhciBoYXNSZW5kZXJlZCA9IGZhbHNlO1xuICB2YXIgc2VyaWFsaXplZEFyciA9IFtdO1xuXG4gIHZhciBjc3MgPSBmdW5jdGlvbiBjc3MoKSB7XG4gICAgaWYgKGhhc1JlbmRlcmVkICYmIGlzRGV2ZWxvcG1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3NzIGNhbiBvbmx5IGJlIHVzZWQgZHVyaW5nIHJlbmRlcicpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZVN0eWxlcyhhcmdzLCBjYWNoZS5yZWdpc3RlcmVkKTtcbiAgICBzZXJpYWxpemVkQXJyLnB1c2goc2VyaWFsaXplZCk7IC8vIHJlZ2lzdHJhdGlvbiBoYXMgdG8gaGFwcGVuIGhlcmUgYXMgdGhlIHJlc3VsdCBvZiB0aGlzIG1pZ2h0IGdldCBjb25zdW1lZCBieSBgY3hgXG5cbiAgICByZWdpc3RlclN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgZmFsc2UpO1xuICAgIHJldHVybiBjYWNoZS5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcbiAgfTtcblxuICB2YXIgY3ggPSBmdW5jdGlvbiBjeCgpIHtcbiAgICBpZiAoaGFzUmVuZGVyZWQgJiYgaXNEZXZlbG9wbWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjeCBjYW4gb25seSBiZSB1c2VkIGR1cmluZyByZW5kZXInKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2UoY2FjaGUucmVnaXN0ZXJlZCwgY3NzLCBjbGFzc25hbWVzKGFyZ3MpKTtcbiAgfTtcblxuICB2YXIgY29udGVudCA9IHtcbiAgICBjc3M6IGNzcyxcbiAgICBjeDogY3gsXG4gICAgdGhlbWU6IFJlYWN0LnVzZUNvbnRleHQoVGhlbWVDb250ZXh0KVxuICB9O1xuICB2YXIgZWxlID0gcHJvcHMuY2hpbGRyZW4oY29udGVudCk7XG4gIGhhc1JlbmRlcmVkID0gdHJ1ZTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbnNlcnRpb24sIHtcbiAgICBjYWNoZTogY2FjaGUsXG4gICAgc2VyaWFsaXplZEFycjogc2VyaWFsaXplZEFyclxuICB9KSwgZWxlKTtcbn0pO1xuXG57XG4gIENsYXNzTmFtZXMuZGlzcGxheU5hbWUgPSAnRW1vdGlvbkNsYXNzTmFtZXMnO1xufVxuXG57XG4gIHZhciBpc0Jyb3dzZXIgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnOyAvLyAjMTcyNywgIzI5MDUgZm9yIHNvbWUgcmVhc29uIEplc3QgYW5kIFZpdGVzdCBldmFsdWF0ZSBtb2R1bGVzIHR3aWNlIGlmIHNvbWUgY29uc3VtaW5nIG1vZHVsZSBnZXRzIG1vY2tlZFxuXG4gIHZhciBpc1Rlc3RFbnYgPSB0eXBlb2YgamVzdCAhPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHZpICE9PSAndW5kZWZpbmVkJztcblxuICBpZiAoaXNCcm93c2VyICYmICFpc1Rlc3RFbnYpIHtcbiAgICAvLyBnbG9iYWxUaGlzIGhhcyB3aWRlIGJyb3dzZXIgc3VwcG9ydCAtIGh0dHBzOi8vY2FuaXVzZS5jb20vP3NlYXJjaD1nbG9iYWxUaGlzLCBOb2RlLmpzIDEyIGFuZCBsYXRlclxuICAgIHZhciBnbG9iYWxDb250ZXh0ID0gLy8gJEZsb3dJZ25vcmVcbiAgICB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICA6IGlzQnJvd3NlciA/IHdpbmRvdyA6IGdsb2JhbDtcbiAgICB2YXIgZ2xvYmFsS2V5ID0gXCJfX0VNT1RJT05fUkVBQ1RfXCIgKyBwa2cudmVyc2lvbi5zcGxpdCgnLicpWzBdICsgXCJfX1wiO1xuXG4gICAgaWYgKGdsb2JhbENvbnRleHRbZ2xvYmFsS2V5XSkge1xuICAgICAgY29uc29sZS53YXJuKCdZb3UgYXJlIGxvYWRpbmcgQGVtb3Rpb24vcmVhY3Qgd2hlbiBpdCBpcyBhbHJlYWR5IGxvYWRlZC4gUnVubmluZyAnICsgJ211bHRpcGxlIGluc3RhbmNlcyBtYXkgY2F1c2UgcHJvYmxlbXMuIFRoaXMgY2FuIGhhcHBlbiBpZiBtdWx0aXBsZSAnICsgJ3ZlcnNpb25zIGFyZSB1c2VkLCBvciBpZiBtdWx0aXBsZSBidWlsZHMgb2YgdGhlIHNhbWUgdmVyc2lvbiBhcmUgJyArICd1c2VkLicpO1xuICAgIH1cblxuICAgIGdsb2JhbENvbnRleHRbZ2xvYmFsS2V5XSA9IHRydWU7XG4gIH1cbn1cblxuZXhwb3J0IHsgQ2xhc3NOYW1lcywgR2xvYmFsLCBqc3ggYXMgY3JlYXRlRWxlbWVudCwgY3NzLCBqc3gsIGtleWZyYW1lcyB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChzdHJpbmdzLCByYXcpIHtcbiAgaWYgKCFyYXcpIHtcbiAgICByYXcgPSBzdHJpbmdzLnNsaWNlKDApO1xuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHN0cmluZ3MsIHtcbiAgICByYXc6IHtcbiAgICAgIHZhbHVlOiBPYmplY3QuZnJlZXplKHJhdylcbiAgICB9XG4gIH0pKTtcbn0iLCJjb25zdCBzaWRlcyA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J107XG5jb25zdCBhbGlnbm1lbnRzID0gWydzdGFydCcsICdlbmQnXTtcbmNvbnN0IHBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovc2lkZXMucmVkdWNlKChhY2MsIHNpZGUpID0+IGFjYy5jb25jYXQoc2lkZSwgc2lkZSArIFwiLVwiICsgYWxpZ25tZW50c1swXSwgc2lkZSArIFwiLVwiICsgYWxpZ25tZW50c1sxXSksIFtdKTtcbmNvbnN0IG1pbiA9IE1hdGgubWluO1xuY29uc3QgbWF4ID0gTWF0aC5tYXg7XG5jb25zdCByb3VuZCA9IE1hdGgucm91bmQ7XG5jb25zdCBmbG9vciA9IE1hdGguZmxvb3I7XG5jb25zdCBjcmVhdGVDb29yZHMgPSB2ID0+ICh7XG4gIHg6IHYsXG4gIHk6IHZcbn0pO1xuY29uc3Qgb3Bwb3NpdGVTaWRlTWFwID0ge1xuICBsZWZ0OiAncmlnaHQnLFxuICByaWdodDogJ2xlZnQnLFxuICBib3R0b206ICd0b3AnLFxuICB0b3A6ICdib3R0b20nXG59O1xuY29uc3Qgb3Bwb3NpdGVBbGlnbm1lbnRNYXAgPSB7XG4gIHN0YXJ0OiAnZW5kJyxcbiAgZW5kOiAnc3RhcnQnXG59O1xuZnVuY3Rpb24gY2xhbXAoc3RhcnQsIHZhbHVlLCBlbmQpIHtcbiAgcmV0dXJuIG1heChzdGFydCwgbWluKHZhbHVlLCBlbmQpKTtcbn1cbmZ1bmN0aW9uIGV2YWx1YXRlKHZhbHVlLCBwYXJhbSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gdmFsdWUocGFyYW0pIDogdmFsdWU7XG59XG5mdW5jdGlvbiBnZXRTaWRlKHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG59XG5mdW5jdGlvbiBnZXRBbGlnbm1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcbn1cbmZ1bmN0aW9uIGdldE9wcG9zaXRlQXhpcyhheGlzKSB7XG4gIHJldHVybiBheGlzID09PSAneCcgPyAneScgOiAneCc7XG59XG5mdW5jdGlvbiBnZXRBeGlzTGVuZ3RoKGF4aXMpIHtcbiAgcmV0dXJuIGF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbn1cbmZ1bmN0aW9uIGdldFNpZGVBeGlzKHBsYWNlbWVudCkge1xuICByZXR1cm4gWyd0b3AnLCAnYm90dG9tJ10uaW5jbHVkZXMoZ2V0U2lkZShwbGFjZW1lbnQpKSA/ICd5JyA6ICd4Jztcbn1cbmZ1bmN0aW9uIGdldEFsaWdubWVudEF4aXMocGxhY2VtZW50KSB7XG4gIHJldHVybiBnZXRPcHBvc2l0ZUF4aXMoZ2V0U2lkZUF4aXMocGxhY2VtZW50KSk7XG59XG5mdW5jdGlvbiBnZXRBbGlnbm1lbnRTaWRlcyhwbGFjZW1lbnQsIHJlY3RzLCBydGwpIHtcbiAgaWYgKHJ0bCA9PT0gdm9pZCAwKSB7XG4gICAgcnRsID0gZmFsc2U7XG4gIH1cbiAgY29uc3QgYWxpZ25tZW50ID0gZ2V0QWxpZ25tZW50KHBsYWNlbWVudCk7XG4gIGNvbnN0IGFsaWdubWVudEF4aXMgPSBnZXRBbGlnbm1lbnRBeGlzKHBsYWNlbWVudCk7XG4gIGNvbnN0IGxlbmd0aCA9IGdldEF4aXNMZW5ndGgoYWxpZ25tZW50QXhpcyk7XG4gIGxldCBtYWluQWxpZ25tZW50U2lkZSA9IGFsaWdubWVudEF4aXMgPT09ICd4JyA/IGFsaWdubWVudCA9PT0gKHJ0bCA/ICdlbmQnIDogJ3N0YXJ0JykgPyAncmlnaHQnIDogJ2xlZnQnIDogYWxpZ25tZW50ID09PSAnc3RhcnQnID8gJ2JvdHRvbScgOiAndG9wJztcbiAgaWYgKHJlY3RzLnJlZmVyZW5jZVtsZW5ndGhdID4gcmVjdHMuZmxvYXRpbmdbbGVuZ3RoXSkge1xuICAgIG1haW5BbGlnbm1lbnRTaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpbkFsaWdubWVudFNpZGUpO1xuICB9XG4gIHJldHVybiBbbWFpbkFsaWdubWVudFNpZGUsIGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5BbGlnbm1lbnRTaWRlKV07XG59XG5mdW5jdGlvbiBnZXRFeHBhbmRlZFBsYWNlbWVudHMocGxhY2VtZW50KSB7XG4gIGNvbnN0IG9wcG9zaXRlUGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgcmV0dXJuIFtnZXRPcHBvc2l0ZUFsaWdubWVudFBsYWNlbWVudChwbGFjZW1lbnQpLCBvcHBvc2l0ZVBsYWNlbWVudCwgZ2V0T3Bwb3NpdGVBbGlnbm1lbnRQbGFjZW1lbnQob3Bwb3NpdGVQbGFjZW1lbnQpXTtcbn1cbmZ1bmN0aW9uIGdldE9wcG9zaXRlQWxpZ25tZW50UGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL3N0YXJ0fGVuZC9nLCBhbGlnbm1lbnQgPT4gb3Bwb3NpdGVBbGlnbm1lbnRNYXBbYWxpZ25tZW50XSk7XG59XG5mdW5jdGlvbiBnZXRTaWRlTGlzdChzaWRlLCBpc1N0YXJ0LCBydGwpIHtcbiAgY29uc3QgbHIgPSBbJ2xlZnQnLCAncmlnaHQnXTtcbiAgY29uc3QgcmwgPSBbJ3JpZ2h0JywgJ2xlZnQnXTtcbiAgY29uc3QgdGIgPSBbJ3RvcCcsICdib3R0b20nXTtcbiAgY29uc3QgYnQgPSBbJ2JvdHRvbScsICd0b3AnXTtcbiAgc3dpdGNoIChzaWRlKSB7XG4gICAgY2FzZSAndG9wJzpcbiAgICBjYXNlICdib3R0b20nOlxuICAgICAgaWYgKHJ0bCkgcmV0dXJuIGlzU3RhcnQgPyBybCA6IGxyO1xuICAgICAgcmV0dXJuIGlzU3RhcnQgPyBsciA6IHJsO1xuICAgIGNhc2UgJ2xlZnQnOlxuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgIHJldHVybiBpc1N0YXJ0ID8gdGIgOiBidDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFtdO1xuICB9XG59XG5mdW5jdGlvbiBnZXRPcHBvc2l0ZUF4aXNQbGFjZW1lbnRzKHBsYWNlbWVudCwgZmxpcEFsaWdubWVudCwgZGlyZWN0aW9uLCBydGwpIHtcbiAgY29uc3QgYWxpZ25tZW50ID0gZ2V0QWxpZ25tZW50KHBsYWNlbWVudCk7XG4gIGxldCBsaXN0ID0gZ2V0U2lkZUxpc3QoZ2V0U2lkZShwbGFjZW1lbnQpLCBkaXJlY3Rpb24gPT09ICdzdGFydCcsIHJ0bCk7XG4gIGlmIChhbGlnbm1lbnQpIHtcbiAgICBsaXN0ID0gbGlzdC5tYXAoc2lkZSA9PiBzaWRlICsgXCItXCIgKyBhbGlnbm1lbnQpO1xuICAgIGlmIChmbGlwQWxpZ25tZW50KSB7XG4gICAgICBsaXN0ID0gbGlzdC5jb25jYXQobGlzdC5tYXAoZ2V0T3Bwb3NpdGVBbGlnbm1lbnRQbGFjZW1lbnQpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGxpc3Q7XG59XG5mdW5jdGlvbiBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywgc2lkZSA9PiBvcHBvc2l0ZVNpZGVNYXBbc2lkZV0pO1xufVxuZnVuY3Rpb24gZXhwYW5kUGFkZGluZ09iamVjdChwYWRkaW5nKSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwLFxuICAgIC4uLnBhZGRpbmdcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldFBhZGRpbmdPYmplY3QocGFkZGluZykge1xuICByZXR1cm4gdHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gZXhwYW5kUGFkZGluZ09iamVjdChwYWRkaW5nKSA6IHtcbiAgICB0b3A6IHBhZGRpbmcsXG4gICAgcmlnaHQ6IHBhZGRpbmcsXG4gICAgYm90dG9tOiBwYWRkaW5nLFxuICAgIGxlZnQ6IHBhZGRpbmdcbiAgfTtcbn1cbmZ1bmN0aW9uIHJlY3RUb0NsaWVudFJlY3QocmVjdCkge1xuICByZXR1cm4ge1xuICAgIC4uLnJlY3QsXG4gICAgdG9wOiByZWN0LnksXG4gICAgbGVmdDogcmVjdC54LFxuICAgIHJpZ2h0OiByZWN0LnggKyByZWN0LndpZHRoLFxuICAgIGJvdHRvbTogcmVjdC55ICsgcmVjdC5oZWlnaHRcbiAgfTtcbn1cblxuZXhwb3J0IHsgYWxpZ25tZW50cywgY2xhbXAsIGNyZWF0ZUNvb3JkcywgZXZhbHVhdGUsIGV4cGFuZFBhZGRpbmdPYmplY3QsIGZsb29yLCBnZXRBbGlnbm1lbnQsIGdldEFsaWdubWVudEF4aXMsIGdldEFsaWdubWVudFNpZGVzLCBnZXRBeGlzTGVuZ3RoLCBnZXRFeHBhbmRlZFBsYWNlbWVudHMsIGdldE9wcG9zaXRlQWxpZ25tZW50UGxhY2VtZW50LCBnZXRPcHBvc2l0ZUF4aXMsIGdldE9wcG9zaXRlQXhpc1BsYWNlbWVudHMsIGdldE9wcG9zaXRlUGxhY2VtZW50LCBnZXRQYWRkaW5nT2JqZWN0LCBnZXRTaWRlLCBnZXRTaWRlQXhpcywgbWF4LCBtaW4sIHBsYWNlbWVudHMsIHJlY3RUb0NsaWVudFJlY3QsIHJvdW5kLCBzaWRlcyB9O1xuIiwiZnVuY3Rpb24gZ2V0Tm9kZU5hbWUobm9kZSkge1xuICBpZiAoaXNOb2RlKG5vZGUpKSB7XG4gICAgcmV0dXJuIChub2RlLm5vZGVOYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICB9XG4gIC8vIE1vY2tlZCBub2RlcyBpbiB0ZXN0aW5nIGVudmlyb25tZW50cyBtYXkgbm90IGJlIGluc3RhbmNlcyBvZiBOb2RlLiBCeVxuICAvLyByZXR1cm5pbmcgYCNkb2N1bWVudGAgYW4gaW5maW5pdGUgbG9vcCB3b24ndCBvY2N1ci5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2Zsb2F0aW5nLXVpL2Zsb2F0aW5nLXVpL2lzc3Vlcy8yMzE3XG4gIHJldHVybiAnI2RvY3VtZW50Jztcbn1cbmZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gIHZhciBfbm9kZSRvd25lckRvY3VtZW50O1xuICByZXR1cm4gKG5vZGUgPT0gbnVsbCA/IHZvaWQgMCA6IChfbm9kZSRvd25lckRvY3VtZW50ID0gbm9kZS5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX25vZGUkb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldykgfHwgd2luZG93O1xufVxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRFbGVtZW50KG5vZGUpIHtcbiAgdmFyIF9yZWY7XG4gIHJldHVybiAoX3JlZiA9IChpc05vZGUobm9kZSkgPyBub2RlLm93bmVyRG9jdW1lbnQgOiBub2RlLmRvY3VtZW50KSB8fCB3aW5kb3cuZG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfcmVmLmRvY3VtZW50RWxlbWVudDtcbn1cbmZ1bmN0aW9uIGlzTm9kZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBOb2RlIHx8IHZhbHVlIGluc3RhbmNlb2YgZ2V0V2luZG93KHZhbHVlKS5Ob2RlO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEVsZW1lbnQgfHwgdmFsdWUgaW5zdGFuY2VvZiBnZXRXaW5kb3codmFsdWUpLkVsZW1lbnQ7XG59XG5mdW5jdGlvbiBpc0hUTUxFbGVtZW50KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHZhbHVlIGluc3RhbmNlb2YgZ2V0V2luZG93KHZhbHVlKS5IVE1MRWxlbWVudDtcbn1cbmZ1bmN0aW9uIGlzU2hhZG93Um9vdCh2YWx1ZSkge1xuICAvLyBCcm93c2VycyB3aXRob3V0IGBTaGFkb3dSb290YCBzdXBwb3J0LlxuICBpZiAodHlwZW9mIFNoYWRvd1Jvb3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgfHwgdmFsdWUgaW5zdGFuY2VvZiBnZXRXaW5kb3codmFsdWUpLlNoYWRvd1Jvb3Q7XG59XG5mdW5jdGlvbiBpc092ZXJmbG93RWxlbWVudChlbGVtZW50KSB7XG4gIGNvbnN0IHtcbiAgICBvdmVyZmxvdyxcbiAgICBvdmVyZmxvd1gsXG4gICAgb3ZlcmZsb3dZLFxuICAgIGRpc3BsYXlcbiAgfSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gIHJldHVybiAvYXV0b3xzY3JvbGx8b3ZlcmxheXxoaWRkZW58Y2xpcC8udGVzdChvdmVyZmxvdyArIG92ZXJmbG93WSArIG92ZXJmbG93WCkgJiYgIVsnaW5saW5lJywgJ2NvbnRlbnRzJ10uaW5jbHVkZXMoZGlzcGxheSk7XG59XG5mdW5jdGlvbiBpc1RhYmxlRWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiBbJ3RhYmxlJywgJ3RkJywgJ3RoJ10uaW5jbHVkZXMoZ2V0Tm9kZU5hbWUoZWxlbWVudCkpO1xufVxuZnVuY3Rpb24gaXNDb250YWluaW5nQmxvY2soZWxlbWVudCkge1xuICBjb25zdCB3ZWJraXQgPSBpc1dlYktpdCgpO1xuICBjb25zdCBjc3MgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Db250YWluaW5nX2Jsb2NrI2lkZW50aWZ5aW5nX3RoZV9jb250YWluaW5nX2Jsb2NrXG4gIHJldHVybiBjc3MudHJhbnNmb3JtICE9PSAnbm9uZScgfHwgY3NzLnBlcnNwZWN0aXZlICE9PSAnbm9uZScgfHwgKGNzcy5jb250YWluZXJUeXBlID8gY3NzLmNvbnRhaW5lclR5cGUgIT09ICdub3JtYWwnIDogZmFsc2UpIHx8ICF3ZWJraXQgJiYgKGNzcy5iYWNrZHJvcEZpbHRlciA/IGNzcy5iYWNrZHJvcEZpbHRlciAhPT0gJ25vbmUnIDogZmFsc2UpIHx8ICF3ZWJraXQgJiYgKGNzcy5maWx0ZXIgPyBjc3MuZmlsdGVyICE9PSAnbm9uZScgOiBmYWxzZSkgfHwgWyd0cmFuc2Zvcm0nLCAncGVyc3BlY3RpdmUnLCAnZmlsdGVyJ10uc29tZSh2YWx1ZSA9PiAoY3NzLndpbGxDaGFuZ2UgfHwgJycpLmluY2x1ZGVzKHZhbHVlKSkgfHwgWydwYWludCcsICdsYXlvdXQnLCAnc3RyaWN0JywgJ2NvbnRlbnQnXS5zb21lKHZhbHVlID0+IChjc3MuY29udGFpbiB8fCAnJykuaW5jbHVkZXModmFsdWUpKTtcbn1cbmZ1bmN0aW9uIGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB7XG4gIGxldCBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG4gIHdoaWxlIChpc0hUTUxFbGVtZW50KGN1cnJlbnROb2RlKSAmJiAhaXNMYXN0VHJhdmVyc2FibGVOb2RlKGN1cnJlbnROb2RlKSkge1xuICAgIGlmIChpc0NvbnRhaW5pbmdCbG9jayhjdXJyZW50Tm9kZSkpIHtcbiAgICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGN1cnJlbnROb2RlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBpc1dlYktpdCgpIHtcbiAgaWYgKHR5cGVvZiBDU1MgPT09ICd1bmRlZmluZWQnIHx8ICFDU1Muc3VwcG9ydHMpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIENTUy5zdXBwb3J0cygnLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXInLCAnbm9uZScpO1xufVxuZnVuY3Rpb24gaXNMYXN0VHJhdmVyc2FibGVOb2RlKG5vZGUpIHtcbiAgcmV0dXJuIFsnaHRtbCcsICdib2R5JywgJyNkb2N1bWVudCddLmluY2x1ZGVzKGdldE5vZGVOYW1lKG5vZGUpKTtcbn1cbmZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0V2luZG93KGVsZW1lbnQpLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG59XG5mdW5jdGlvbiBnZXROb2RlU2Nyb2xsKGVsZW1lbnQpIHtcbiAgaWYgKGlzRWxlbWVudChlbGVtZW50KSkge1xuICAgIHJldHVybiB7XG4gICAgICBzY3JvbGxMZWZ0OiBlbGVtZW50LnNjcm9sbExlZnQsXG4gICAgICBzY3JvbGxUb3A6IGVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IGVsZW1lbnQucGFnZVhPZmZzZXQsXG4gICAgc2Nyb2xsVG9wOiBlbGVtZW50LnBhZ2VZT2Zmc2V0XG4gIH07XG59XG5mdW5jdGlvbiBnZXRQYXJlbnROb2RlKG5vZGUpIHtcbiAgaWYgKGdldE5vZGVOYW1lKG5vZGUpID09PSAnaHRtbCcpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuICBjb25zdCByZXN1bHQgPVxuICAvLyBTdGVwIGludG8gdGhlIHNoYWRvdyBET00gb2YgdGhlIHBhcmVudCBvZiBhIHNsb3R0ZWQgbm9kZS5cbiAgbm9kZS5hc3NpZ25lZFNsb3QgfHxcbiAgLy8gRE9NIEVsZW1lbnQgZGV0ZWN0ZWQuXG4gIG5vZGUucGFyZW50Tm9kZSB8fFxuICAvLyBTaGFkb3dSb290IGRldGVjdGVkLlxuICBpc1NoYWRvd1Jvb3Qobm9kZSkgJiYgbm9kZS5ob3N0IHx8XG4gIC8vIEZhbGxiYWNrLlxuICBnZXREb2N1bWVudEVsZW1lbnQobm9kZSk7XG4gIHJldHVybiBpc1NoYWRvd1Jvb3QocmVzdWx0KSA/IHJlc3VsdC5ob3N0IDogcmVzdWx0O1xufVxuZnVuY3Rpb24gZ2V0TmVhcmVzdE92ZXJmbG93QW5jZXN0b3Iobm9kZSkge1xuICBjb25zdCBwYXJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShub2RlKTtcbiAgaWYgKGlzTGFzdFRyYXZlcnNhYmxlTm9kZShwYXJlbnROb2RlKSkge1xuICAgIHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQgPyBub2RlLm93bmVyRG9jdW1lbnQuYm9keSA6IG5vZGUuYm9keTtcbiAgfVxuICBpZiAoaXNIVE1MRWxlbWVudChwYXJlbnROb2RlKSAmJiBpc092ZXJmbG93RWxlbWVudChwYXJlbnROb2RlKSkge1xuICAgIHJldHVybiBwYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiBnZXROZWFyZXN0T3ZlcmZsb3dBbmNlc3RvcihwYXJlbnROb2RlKTtcbn1cbmZ1bmN0aW9uIGdldE92ZXJmbG93QW5jZXN0b3JzKG5vZGUsIGxpc3QsIHRyYXZlcnNlSWZyYW1lcykge1xuICB2YXIgX25vZGUkb3duZXJEb2N1bWVudDI7XG4gIGlmIChsaXN0ID09PSB2b2lkIDApIHtcbiAgICBsaXN0ID0gW107XG4gIH1cbiAgaWYgKHRyYXZlcnNlSWZyYW1lcyA9PT0gdm9pZCAwKSB7XG4gICAgdHJhdmVyc2VJZnJhbWVzID0gdHJ1ZTtcbiAgfVxuICBjb25zdCBzY3JvbGxhYmxlQW5jZXN0b3IgPSBnZXROZWFyZXN0T3ZlcmZsb3dBbmNlc3Rvcihub2RlKTtcbiAgY29uc3QgaXNCb2R5ID0gc2Nyb2xsYWJsZUFuY2VzdG9yID09PSAoKF9ub2RlJG93bmVyRG9jdW1lbnQyID0gbm9kZS5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX25vZGUkb3duZXJEb2N1bWVudDIuYm9keSk7XG4gIGNvbnN0IHdpbiA9IGdldFdpbmRvdyhzY3JvbGxhYmxlQW5jZXN0b3IpO1xuICBpZiAoaXNCb2R5KSB7XG4gICAgcmV0dXJuIGxpc3QuY29uY2F0KHdpbiwgd2luLnZpc3VhbFZpZXdwb3J0IHx8IFtdLCBpc092ZXJmbG93RWxlbWVudChzY3JvbGxhYmxlQW5jZXN0b3IpID8gc2Nyb2xsYWJsZUFuY2VzdG9yIDogW10sIHdpbi5mcmFtZUVsZW1lbnQgJiYgdHJhdmVyc2VJZnJhbWVzID8gZ2V0T3ZlcmZsb3dBbmNlc3RvcnMod2luLmZyYW1lRWxlbWVudCkgOiBbXSk7XG4gIH1cbiAgcmV0dXJuIGxpc3QuY29uY2F0KHNjcm9sbGFibGVBbmNlc3RvciwgZ2V0T3ZlcmZsb3dBbmNlc3RvcnMoc2Nyb2xsYWJsZUFuY2VzdG9yLCBbXSwgdHJhdmVyc2VJZnJhbWVzKSk7XG59XG5cbmV4cG9ydCB7IGdldENvbXB1dGVkU3R5bGUsIGdldENvbnRhaW5pbmdCbG9jaywgZ2V0RG9jdW1lbnRFbGVtZW50LCBnZXROZWFyZXN0T3ZlcmZsb3dBbmNlc3RvciwgZ2V0Tm9kZU5hbWUsIGdldE5vZGVTY3JvbGwsIGdldE92ZXJmbG93QW5jZXN0b3JzLCBnZXRQYXJlbnROb2RlLCBnZXRXaW5kb3csIGlzQ29udGFpbmluZ0Jsb2NrLCBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQsIGlzTGFzdFRyYXZlcnNhYmxlTm9kZSwgaXNOb2RlLCBpc092ZXJmbG93RWxlbWVudCwgaXNTaGFkb3dSb290LCBpc1RhYmxlRWxlbWVudCwgaXNXZWJLaXQgfTtcbiIsImltcG9ydCB7IHJlY3RUb0NsaWVudFJlY3QsIGNvbXB1dGVQb3NpdGlvbiBhcyBjb21wdXRlUG9zaXRpb24kMSB9IGZyb20gJ0BmbG9hdGluZy11aS9jb3JlJztcbmV4cG9ydCB7IGFycm93LCBhdXRvUGxhY2VtZW50LCBkZXRlY3RPdmVyZmxvdywgZmxpcCwgaGlkZSwgaW5saW5lLCBsaW1pdFNoaWZ0LCBvZmZzZXQsIHNoaWZ0LCBzaXplIH0gZnJvbSAnQGZsb2F0aW5nLXVpL2NvcmUnO1xuaW1wb3J0IHsgcm91bmQsIGNyZWF0ZUNvb3JkcywgbWF4LCBtaW4sIGZsb29yIH0gZnJvbSAnQGZsb2F0aW5nLXVpL3V0aWxzJztcbmltcG9ydCB7IGdldENvbXB1dGVkU3R5bGUsIGlzSFRNTEVsZW1lbnQsIGlzRWxlbWVudCwgZ2V0V2luZG93LCBpc1dlYktpdCwgZ2V0RG9jdW1lbnRFbGVtZW50LCBnZXROb2RlTmFtZSwgaXNPdmVyZmxvd0VsZW1lbnQsIGdldE5vZGVTY3JvbGwsIGdldE92ZXJmbG93QW5jZXN0b3JzLCBnZXRQYXJlbnROb2RlLCBpc0xhc3RUcmF2ZXJzYWJsZU5vZGUsIGlzQ29udGFpbmluZ0Jsb2NrLCBpc1RhYmxlRWxlbWVudCwgZ2V0Q29udGFpbmluZ0Jsb2NrIH0gZnJvbSAnQGZsb2F0aW5nLXVpL3V0aWxzL2RvbSc7XG5leHBvcnQgeyBnZXRPdmVyZmxvd0FuY2VzdG9ycyB9IGZyb20gJ0BmbG9hdGluZy11aS91dGlscy9kb20nO1xuXG5mdW5jdGlvbiBnZXRDc3NEaW1lbnNpb25zKGVsZW1lbnQpIHtcbiAgY29uc3QgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgLy8gSW4gdGVzdGluZyBlbnZpcm9ubWVudHMsIHRoZSBgd2lkdGhgIGFuZCBgaGVpZ2h0YCBwcm9wZXJ0aWVzIGFyZSBlbXB0eVxuICAvLyBzdHJpbmdzIGZvciBTVkcgZWxlbWVudHMsIHJldHVybmluZyBOYU4uIEZhbGxiYWNrIHRvIGAwYCBpbiB0aGlzIGNhc2UuXG4gIGxldCB3aWR0aCA9IHBhcnNlRmxvYXQoY3NzLndpZHRoKSB8fCAwO1xuICBsZXQgaGVpZ2h0ID0gcGFyc2VGbG9hdChjc3MuaGVpZ2h0KSB8fCAwO1xuICBjb25zdCBoYXNPZmZzZXQgPSBpc0hUTUxFbGVtZW50KGVsZW1lbnQpO1xuICBjb25zdCBvZmZzZXRXaWR0aCA9IGhhc09mZnNldCA/IGVsZW1lbnQub2Zmc2V0V2lkdGggOiB3aWR0aDtcbiAgY29uc3Qgb2Zmc2V0SGVpZ2h0ID0gaGFzT2Zmc2V0ID8gZWxlbWVudC5vZmZzZXRIZWlnaHQgOiBoZWlnaHQ7XG4gIGNvbnN0IHNob3VsZEZhbGxiYWNrID0gcm91bmQod2lkdGgpICE9PSBvZmZzZXRXaWR0aCB8fCByb3VuZChoZWlnaHQpICE9PSBvZmZzZXRIZWlnaHQ7XG4gIGlmIChzaG91bGRGYWxsYmFjaykge1xuICAgIHdpZHRoID0gb2Zmc2V0V2lkdGg7XG4gICAgaGVpZ2h0ID0gb2Zmc2V0SGVpZ2h0O1xuICB9XG4gIHJldHVybiB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgICQ6IHNob3VsZEZhbGxiYWNrXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVud3JhcEVsZW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gIWlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQuY29udGV4dEVsZW1lbnQgOiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBnZXRTY2FsZShlbGVtZW50KSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSB1bndyYXBFbGVtZW50KGVsZW1lbnQpO1xuICBpZiAoIWlzSFRNTEVsZW1lbnQoZG9tRWxlbWVudCkpIHtcbiAgICByZXR1cm4gY3JlYXRlQ29vcmRzKDEpO1xuICB9XG4gIGNvbnN0IHJlY3QgPSBkb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgICRcbiAgfSA9IGdldENzc0RpbWVuc2lvbnMoZG9tRWxlbWVudCk7XG4gIGxldCB4ID0gKCQgPyByb3VuZChyZWN0LndpZHRoKSA6IHJlY3Qud2lkdGgpIC8gd2lkdGg7XG4gIGxldCB5ID0gKCQgPyByb3VuZChyZWN0LmhlaWdodCkgOiByZWN0LmhlaWdodCkgLyBoZWlnaHQ7XG5cbiAgLy8gMCwgTmFOLCBvciBJbmZpbml0eSBzaG91bGQgYWx3YXlzIGZhbGxiYWNrIHRvIDEuXG5cbiAgaWYgKCF4IHx8ICFOdW1iZXIuaXNGaW5pdGUoeCkpIHtcbiAgICB4ID0gMTtcbiAgfVxuICBpZiAoIXkgfHwgIU51bWJlci5pc0Zpbml0ZSh5KSkge1xuICAgIHkgPSAxO1xuICB9XG4gIHJldHVybiB7XG4gICAgeCxcbiAgICB5XG4gIH07XG59XG5cbmNvbnN0IG5vT2Zmc2V0cyA9IC8qI19fUFVSRV9fKi9jcmVhdGVDb29yZHMoMCk7XG5mdW5jdGlvbiBnZXRWaXN1YWxPZmZzZXRzKGVsZW1lbnQpIHtcbiAgY29uc3Qgd2luID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICBpZiAoIWlzV2ViS2l0KCkgfHwgIXdpbi52aXN1YWxWaWV3cG9ydCkge1xuICAgIHJldHVybiBub09mZnNldHM7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB4OiB3aW4udmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdCxcbiAgICB5OiB3aW4udmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wXG4gIH07XG59XG5mdW5jdGlvbiBzaG91bGRBZGRWaXN1YWxPZmZzZXRzKGVsZW1lbnQsIGlzRml4ZWQsIGZsb2F0aW5nT2Zmc2V0UGFyZW50KSB7XG4gIGlmIChpc0ZpeGVkID09PSB2b2lkIDApIHtcbiAgICBpc0ZpeGVkID0gZmFsc2U7XG4gIH1cbiAgaWYgKCFmbG9hdGluZ09mZnNldFBhcmVudCB8fCBpc0ZpeGVkICYmIGZsb2F0aW5nT2Zmc2V0UGFyZW50ICE9PSBnZXRXaW5kb3coZWxlbWVudCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGlzRml4ZWQ7XG59XG5cbmZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBpbmNsdWRlU2NhbGUsIGlzRml4ZWRTdHJhdGVneSwgb2Zmc2V0UGFyZW50KSB7XG4gIGlmIChpbmNsdWRlU2NhbGUgPT09IHZvaWQgMCkge1xuICAgIGluY2x1ZGVTY2FsZSA9IGZhbHNlO1xuICB9XG4gIGlmIChpc0ZpeGVkU3RyYXRlZ3kgPT09IHZvaWQgMCkge1xuICAgIGlzRml4ZWRTdHJhdGVneSA9IGZhbHNlO1xuICB9XG4gIGNvbnN0IGNsaWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCBkb21FbGVtZW50ID0gdW53cmFwRWxlbWVudChlbGVtZW50KTtcbiAgbGV0IHNjYWxlID0gY3JlYXRlQ29vcmRzKDEpO1xuICBpZiAoaW5jbHVkZVNjYWxlKSB7XG4gICAgaWYgKG9mZnNldFBhcmVudCkge1xuICAgICAgaWYgKGlzRWxlbWVudChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICAgIHNjYWxlID0gZ2V0U2NhbGUob2Zmc2V0UGFyZW50KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2NhbGUgPSBnZXRTY2FsZShlbGVtZW50KTtcbiAgICB9XG4gIH1cbiAgY29uc3QgdmlzdWFsT2Zmc2V0cyA9IHNob3VsZEFkZFZpc3VhbE9mZnNldHMoZG9tRWxlbWVudCwgaXNGaXhlZFN0cmF0ZWd5LCBvZmZzZXRQYXJlbnQpID8gZ2V0VmlzdWFsT2Zmc2V0cyhkb21FbGVtZW50KSA6IGNyZWF0ZUNvb3JkcygwKTtcbiAgbGV0IHggPSAoY2xpZW50UmVjdC5sZWZ0ICsgdmlzdWFsT2Zmc2V0cy54KSAvIHNjYWxlLng7XG4gIGxldCB5ID0gKGNsaWVudFJlY3QudG9wICsgdmlzdWFsT2Zmc2V0cy55KSAvIHNjYWxlLnk7XG4gIGxldCB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGggLyBzY2FsZS54O1xuICBsZXQgaGVpZ2h0ID0gY2xpZW50UmVjdC5oZWlnaHQgLyBzY2FsZS55O1xuICBpZiAoZG9tRWxlbWVudCkge1xuICAgIGNvbnN0IHdpbiA9IGdldFdpbmRvdyhkb21FbGVtZW50KTtcbiAgICBjb25zdCBvZmZzZXRXaW4gPSBvZmZzZXRQYXJlbnQgJiYgaXNFbGVtZW50KG9mZnNldFBhcmVudCkgPyBnZXRXaW5kb3cob2Zmc2V0UGFyZW50KSA6IG9mZnNldFBhcmVudDtcbiAgICBsZXQgY3VycmVudElGcmFtZSA9IHdpbi5mcmFtZUVsZW1lbnQ7XG4gICAgd2hpbGUgKGN1cnJlbnRJRnJhbWUgJiYgb2Zmc2V0UGFyZW50ICYmIG9mZnNldFdpbiAhPT0gd2luKSB7XG4gICAgICBjb25zdCBpZnJhbWVTY2FsZSA9IGdldFNjYWxlKGN1cnJlbnRJRnJhbWUpO1xuICAgICAgY29uc3QgaWZyYW1lUmVjdCA9IGN1cnJlbnRJRnJhbWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBjc3MgPSBnZXRDb21wdXRlZFN0eWxlKGN1cnJlbnRJRnJhbWUpO1xuICAgICAgY29uc3QgbGVmdCA9IGlmcmFtZVJlY3QubGVmdCArIChjdXJyZW50SUZyYW1lLmNsaWVudExlZnQgKyBwYXJzZUZsb2F0KGNzcy5wYWRkaW5nTGVmdCkpICogaWZyYW1lU2NhbGUueDtcbiAgICAgIGNvbnN0IHRvcCA9IGlmcmFtZVJlY3QudG9wICsgKGN1cnJlbnRJRnJhbWUuY2xpZW50VG9wICsgcGFyc2VGbG9hdChjc3MucGFkZGluZ1RvcCkpICogaWZyYW1lU2NhbGUueTtcbiAgICAgIHggKj0gaWZyYW1lU2NhbGUueDtcbiAgICAgIHkgKj0gaWZyYW1lU2NhbGUueTtcbiAgICAgIHdpZHRoICo9IGlmcmFtZVNjYWxlLng7XG4gICAgICBoZWlnaHQgKj0gaWZyYW1lU2NhbGUueTtcbiAgICAgIHggKz0gbGVmdDtcbiAgICAgIHkgKz0gdG9wO1xuICAgICAgY3VycmVudElGcmFtZSA9IGdldFdpbmRvdyhjdXJyZW50SUZyYW1lKS5mcmFtZUVsZW1lbnQ7XG4gICAgfVxuICB9XG4gIHJldHVybiByZWN0VG9DbGllbnRSZWN0KHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgeCxcbiAgICB5XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0T2Zmc2V0UGFyZW50UmVsYXRpdmVSZWN0VG9WaWV3cG9ydFJlbGF0aXZlUmVjdChfcmVmKSB7XG4gIGxldCB7XG4gICAgcmVjdCxcbiAgICBvZmZzZXRQYXJlbnQsXG4gICAgc3RyYXRlZ3lcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICBjb25zdCBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgaWYgKG9mZnNldFBhcmVudCA9PT0gZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgcmV0dXJuIHJlY3Q7XG4gIH1cbiAgbGV0IHNjcm9sbCA9IHtcbiAgICBzY3JvbGxMZWZ0OiAwLFxuICAgIHNjcm9sbFRvcDogMFxuICB9O1xuICBsZXQgc2NhbGUgPSBjcmVhdGVDb29yZHMoMSk7XG4gIGNvbnN0IG9mZnNldHMgPSBjcmVhdGVDb29yZHMoMCk7XG4gIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCB8fCAhaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgJiYgc3RyYXRlZ3kgIT09ICdmaXhlZCcpIHtcbiAgICBpZiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSAhPT0gJ2JvZHknIHx8IGlzT3ZlcmZsb3dFbGVtZW50KGRvY3VtZW50RWxlbWVudCkpIHtcbiAgICAgIHNjcm9sbCA9IGdldE5vZGVTY3JvbGwob2Zmc2V0UGFyZW50KTtcbiAgICB9XG4gICAgaWYgKGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgY29uc3Qgb2Zmc2V0UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQpO1xuICAgICAgc2NhbGUgPSBnZXRTY2FsZShvZmZzZXRQYXJlbnQpO1xuICAgICAgb2Zmc2V0cy54ID0gb2Zmc2V0UmVjdC54ICsgb2Zmc2V0UGFyZW50LmNsaWVudExlZnQ7XG4gICAgICBvZmZzZXRzLnkgPSBvZmZzZXRSZWN0LnkgKyBvZmZzZXRQYXJlbnQuY2xpZW50VG9wO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHdpZHRoOiByZWN0LndpZHRoICogc2NhbGUueCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0ICogc2NhbGUueSxcbiAgICB4OiByZWN0LnggKiBzY2FsZS54IC0gc2Nyb2xsLnNjcm9sbExlZnQgKiBzY2FsZS54ICsgb2Zmc2V0cy54LFxuICAgIHk6IHJlY3QueSAqIHNjYWxlLnkgLSBzY3JvbGwuc2Nyb2xsVG9wICogc2NhbGUueSArIG9mZnNldHMueVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRDbGllbnRSZWN0cyhlbGVtZW50KSB7XG4gIHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKSk7XG59XG5cbmZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCkge1xuICAvLyBJZiA8aHRtbD4gaGFzIGEgQ1NTIHdpZHRoIGdyZWF0ZXIgdGhhbiB0aGUgdmlld3BvcnQsIHRoZW4gdGhpcyB3aWxsIGJlXG4gIC8vIGluY29ycmVjdCBmb3IgUlRMLlxuICByZXR1cm4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkubGVmdCArIGdldE5vZGVTY3JvbGwoZWxlbWVudCkuc2Nyb2xsTGVmdDtcbn1cblxuLy8gR2V0cyB0aGUgZW50aXJlIHNpemUgb2YgdGhlIHNjcm9sbGFibGUgZG9jdW1lbnQgYXJlYSwgZXZlbiBleHRlbmRpbmcgb3V0c2lkZVxuLy8gb2YgdGhlIGA8aHRtbD5gIGFuZCBgPGJvZHk+YCByZWN0IGJvdW5kcyBpZiBob3Jpem9udGFsbHkgc2Nyb2xsYWJsZS5cbmZ1bmN0aW9uIGdldERvY3VtZW50UmVjdChlbGVtZW50KSB7XG4gIGNvbnN0IGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIGNvbnN0IHNjcm9sbCA9IGdldE5vZGVTY3JvbGwoZWxlbWVudCk7XG4gIGNvbnN0IGJvZHkgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYm9keTtcbiAgY29uc3Qgd2lkdGggPSBtYXgoaHRtbC5zY3JvbGxXaWR0aCwgaHRtbC5jbGllbnRXaWR0aCwgYm9keS5zY3JvbGxXaWR0aCwgYm9keS5jbGllbnRXaWR0aCk7XG4gIGNvbnN0IGhlaWdodCA9IG1heChodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGJvZHkuc2Nyb2xsSGVpZ2h0LCBib2R5LmNsaWVudEhlaWdodCk7XG4gIGxldCB4ID0gLXNjcm9sbC5zY3JvbGxMZWZ0ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KTtcbiAgY29uc3QgeSA9IC1zY3JvbGwuc2Nyb2xsVG9wO1xuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShib2R5KS5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgeCArPSBtYXgoaHRtbC5jbGllbnRXaWR0aCwgYm9keS5jbGllbnRXaWR0aCkgLSB3aWR0aDtcbiAgfVxuICByZXR1cm4ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICB4LFxuICAgIHlcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQsIHN0cmF0ZWd5KSB7XG4gIGNvbnN0IHdpbiA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgY29uc3QgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgY29uc3QgdmlzdWFsVmlld3BvcnQgPSB3aW4udmlzdWFsVmlld3BvcnQ7XG4gIGxldCB3aWR0aCA9IGh0bWwuY2xpZW50V2lkdGg7XG4gIGxldCBoZWlnaHQgPSBodG1sLmNsaWVudEhlaWdodDtcbiAgbGV0IHggPSAwO1xuICBsZXQgeSA9IDA7XG4gIGlmICh2aXN1YWxWaWV3cG9ydCkge1xuICAgIHdpZHRoID0gdmlzdWFsVmlld3BvcnQud2lkdGg7XG4gICAgaGVpZ2h0ID0gdmlzdWFsVmlld3BvcnQuaGVpZ2h0O1xuICAgIGNvbnN0IHZpc3VhbFZpZXdwb3J0QmFzZWQgPSBpc1dlYktpdCgpO1xuICAgIGlmICghdmlzdWFsVmlld3BvcnRCYXNlZCB8fCB2aXN1YWxWaWV3cG9ydEJhc2VkICYmIHN0cmF0ZWd5ID09PSAnZml4ZWQnKSB7XG4gICAgICB4ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdDtcbiAgICAgIHkgPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3A7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIHgsXG4gICAgeVxuICB9O1xufVxuXG4vLyBSZXR1cm5zIHRoZSBpbm5lciBjbGllbnQgcmVjdCwgc3VidHJhY3Rpbmcgc2Nyb2xsYmFycyBpZiBwcmVzZW50LlxuZnVuY3Rpb24gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgc3RyYXRlZ3kpIHtcbiAgY29uc3QgY2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCB0cnVlLCBzdHJhdGVneSA9PT0gJ2ZpeGVkJyk7XG4gIGNvbnN0IHRvcCA9IGNsaWVudFJlY3QudG9wICsgZWxlbWVudC5jbGllbnRUb3A7XG4gIGNvbnN0IGxlZnQgPSBjbGllbnRSZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudExlZnQ7XG4gIGNvbnN0IHNjYWxlID0gaXNIVE1MRWxlbWVudChlbGVtZW50KSA/IGdldFNjYWxlKGVsZW1lbnQpIDogY3JlYXRlQ29vcmRzKDEpO1xuICBjb25zdCB3aWR0aCA9IGVsZW1lbnQuY2xpZW50V2lkdGggKiBzY2FsZS54O1xuICBjb25zdCBoZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodCAqIHNjYWxlLnk7XG4gIGNvbnN0IHggPSBsZWZ0ICogc2NhbGUueDtcbiAgY29uc3QgeSA9IHRvcCAqIHNjYWxlLnk7XG4gIHJldHVybiB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIHgsXG4gICAgeVxuICB9O1xufVxuZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdEZyb21DbGlwcGluZ0FuY2VzdG9yKGVsZW1lbnQsIGNsaXBwaW5nQW5jZXN0b3IsIHN0cmF0ZWd5KSB7XG4gIGxldCByZWN0O1xuICBpZiAoY2xpcHBpbmdBbmNlc3RvciA9PT0gJ3ZpZXdwb3J0Jykge1xuICAgIHJlY3QgPSBnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCwgc3RyYXRlZ3kpO1xuICB9IGVsc2UgaWYgKGNsaXBwaW5nQW5jZXN0b3IgPT09ICdkb2N1bWVudCcpIHtcbiAgICByZWN0ID0gZ2V0RG9jdW1lbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSk7XG4gIH0gZWxzZSBpZiAoaXNFbGVtZW50KGNsaXBwaW5nQW5jZXN0b3IpKSB7XG4gICAgcmVjdCA9IGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGNsaXBwaW5nQW5jZXN0b3IsIHN0cmF0ZWd5KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB2aXN1YWxPZmZzZXRzID0gZ2V0VmlzdWFsT2Zmc2V0cyhlbGVtZW50KTtcbiAgICByZWN0ID0ge1xuICAgICAgLi4uY2xpcHBpbmdBbmNlc3RvcixcbiAgICAgIHg6IGNsaXBwaW5nQW5jZXN0b3IueCAtIHZpc3VhbE9mZnNldHMueCxcbiAgICAgIHk6IGNsaXBwaW5nQW5jZXN0b3IueSAtIHZpc3VhbE9mZnNldHMueVxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJlY3RUb0NsaWVudFJlY3QocmVjdCk7XG59XG5mdW5jdGlvbiBoYXNGaXhlZFBvc2l0aW9uQW5jZXN0b3IoZWxlbWVudCwgc3RvcE5vZGUpIHtcbiAgY29uc3QgcGFyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG4gIGlmIChwYXJlbnROb2RlID09PSBzdG9wTm9kZSB8fCAhaXNFbGVtZW50KHBhcmVudE5vZGUpIHx8IGlzTGFzdFRyYXZlcnNhYmxlTm9kZShwYXJlbnROb2RlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnROb2RlKS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJyB8fCBoYXNGaXhlZFBvc2l0aW9uQW5jZXN0b3IocGFyZW50Tm9kZSwgc3RvcE5vZGUpO1xufVxuXG4vLyBBIFwiY2xpcHBpbmcgYW5jZXN0b3JcIiBpcyBhbiBgb3ZlcmZsb3dgIGVsZW1lbnQgd2l0aCB0aGUgY2hhcmFjdGVyaXN0aWMgb2Zcbi8vIGNsaXBwaW5nIChvciBoaWRpbmcpIGNoaWxkIGVsZW1lbnRzLiBUaGlzIHJldHVybnMgYWxsIGNsaXBwaW5nIGFuY2VzdG9yc1xuLy8gb2YgdGhlIGdpdmVuIGVsZW1lbnQgdXAgdGhlIHRyZWUuXG5mdW5jdGlvbiBnZXRDbGlwcGluZ0VsZW1lbnRBbmNlc3RvcnMoZWxlbWVudCwgY2FjaGUpIHtcbiAgY29uc3QgY2FjaGVkUmVzdWx0ID0gY2FjaGUuZ2V0KGVsZW1lbnQpO1xuICBpZiAoY2FjaGVkUmVzdWx0KSB7XG4gICAgcmV0dXJuIGNhY2hlZFJlc3VsdDtcbiAgfVxuICBsZXQgcmVzdWx0ID0gZ2V0T3ZlcmZsb3dBbmNlc3RvcnMoZWxlbWVudCwgW10sIGZhbHNlKS5maWx0ZXIoZWwgPT4gaXNFbGVtZW50KGVsKSAmJiBnZXROb2RlTmFtZShlbCkgIT09ICdib2R5Jyk7XG4gIGxldCBjdXJyZW50Q29udGFpbmluZ0Jsb2NrQ29tcHV0ZWRTdHlsZSA9IG51bGw7XG4gIGNvbnN0IGVsZW1lbnRJc0ZpeGVkID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJztcbiAgbGV0IGN1cnJlbnROb2RlID0gZWxlbWVudElzRml4ZWQgPyBnZXRQYXJlbnROb2RlKGVsZW1lbnQpIDogZWxlbWVudDtcblxuICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQ29udGFpbmluZ19ibG9jayNpZGVudGlmeWluZ190aGVfY29udGFpbmluZ19ibG9ja1xuICB3aGlsZSAoaXNFbGVtZW50KGN1cnJlbnROb2RlKSAmJiAhaXNMYXN0VHJhdmVyc2FibGVOb2RlKGN1cnJlbnROb2RlKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGN1cnJlbnROb2RlKTtcbiAgICBjb25zdCBjdXJyZW50Tm9kZUlzQ29udGFpbmluZyA9IGlzQ29udGFpbmluZ0Jsb2NrKGN1cnJlbnROb2RlKTtcbiAgICBpZiAoIWN1cnJlbnROb2RlSXNDb250YWluaW5nICYmIGNvbXB1dGVkU3R5bGUucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgIGN1cnJlbnRDb250YWluaW5nQmxvY2tDb21wdXRlZFN0eWxlID0gbnVsbDtcbiAgICB9XG4gICAgY29uc3Qgc2hvdWxkRHJvcEN1cnJlbnROb2RlID0gZWxlbWVudElzRml4ZWQgPyAhY3VycmVudE5vZGVJc0NvbnRhaW5pbmcgJiYgIWN1cnJlbnRDb250YWluaW5nQmxvY2tDb21wdXRlZFN0eWxlIDogIWN1cnJlbnROb2RlSXNDb250YWluaW5nICYmIGNvbXB1dGVkU3R5bGUucG9zaXRpb24gPT09ICdzdGF0aWMnICYmICEhY3VycmVudENvbnRhaW5pbmdCbG9ja0NvbXB1dGVkU3R5bGUgJiYgWydhYnNvbHV0ZScsICdmaXhlZCddLmluY2x1ZGVzKGN1cnJlbnRDb250YWluaW5nQmxvY2tDb21wdXRlZFN0eWxlLnBvc2l0aW9uKSB8fCBpc092ZXJmbG93RWxlbWVudChjdXJyZW50Tm9kZSkgJiYgIWN1cnJlbnROb2RlSXNDb250YWluaW5nICYmIGhhc0ZpeGVkUG9zaXRpb25BbmNlc3RvcihlbGVtZW50LCBjdXJyZW50Tm9kZSk7XG4gICAgaWYgKHNob3VsZERyb3BDdXJyZW50Tm9kZSkge1xuICAgICAgLy8gRHJvcCBub24tY29udGFpbmluZyBibG9ja3MuXG4gICAgICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKGFuY2VzdG9yID0+IGFuY2VzdG9yICE9PSBjdXJyZW50Tm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlY29yZCBsYXN0IGNvbnRhaW5pbmcgYmxvY2sgZm9yIG5leHQgaXRlcmF0aW9uLlxuICAgICAgY3VycmVudENvbnRhaW5pbmdCbG9ja0NvbXB1dGVkU3R5bGUgPSBjb21wdXRlZFN0eWxlO1xuICAgIH1cbiAgICBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoY3VycmVudE5vZGUpO1xuICB9XG4gIGNhY2hlLnNldChlbGVtZW50LCByZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBHZXRzIHRoZSBtYXhpbXVtIGFyZWEgdGhhdCB0aGUgZWxlbWVudCBpcyB2aXNpYmxlIGluIGR1ZSB0byBhbnkgbnVtYmVyIG9mXG4vLyBjbGlwcGluZyBhbmNlc3RvcnMuXG5mdW5jdGlvbiBnZXRDbGlwcGluZ1JlY3QoX3JlZikge1xuICBsZXQge1xuICAgIGVsZW1lbnQsXG4gICAgYm91bmRhcnksXG4gICAgcm9vdEJvdW5kYXJ5LFxuICAgIHN0cmF0ZWd5XG4gIH0gPSBfcmVmO1xuICBjb25zdCBlbGVtZW50Q2xpcHBpbmdBbmNlc3RvcnMgPSBib3VuZGFyeSA9PT0gJ2NsaXBwaW5nQW5jZXN0b3JzJyA/IGdldENsaXBwaW5nRWxlbWVudEFuY2VzdG9ycyhlbGVtZW50LCB0aGlzLl9jKSA6IFtdLmNvbmNhdChib3VuZGFyeSk7XG4gIGNvbnN0IGNsaXBwaW5nQW5jZXN0b3JzID0gWy4uLmVsZW1lbnRDbGlwcGluZ0FuY2VzdG9ycywgcm9vdEJvdW5kYXJ5XTtcbiAgY29uc3QgZmlyc3RDbGlwcGluZ0FuY2VzdG9yID0gY2xpcHBpbmdBbmNlc3RvcnNbMF07XG4gIGNvbnN0IGNsaXBwaW5nUmVjdCA9IGNsaXBwaW5nQW5jZXN0b3JzLnJlZHVjZSgoYWNjUmVjdCwgY2xpcHBpbmdBbmNlc3RvcikgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSBnZXRDbGllbnRSZWN0RnJvbUNsaXBwaW5nQW5jZXN0b3IoZWxlbWVudCwgY2xpcHBpbmdBbmNlc3Rvciwgc3RyYXRlZ3kpO1xuICAgIGFjY1JlY3QudG9wID0gbWF4KHJlY3QudG9wLCBhY2NSZWN0LnRvcCk7XG4gICAgYWNjUmVjdC5yaWdodCA9IG1pbihyZWN0LnJpZ2h0LCBhY2NSZWN0LnJpZ2h0KTtcbiAgICBhY2NSZWN0LmJvdHRvbSA9IG1pbihyZWN0LmJvdHRvbSwgYWNjUmVjdC5ib3R0b20pO1xuICAgIGFjY1JlY3QubGVmdCA9IG1heChyZWN0LmxlZnQsIGFjY1JlY3QubGVmdCk7XG4gICAgcmV0dXJuIGFjY1JlY3Q7XG4gIH0sIGdldENsaWVudFJlY3RGcm9tQ2xpcHBpbmdBbmNlc3RvcihlbGVtZW50LCBmaXJzdENsaXBwaW5nQW5jZXN0b3IsIHN0cmF0ZWd5KSk7XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IGNsaXBwaW5nUmVjdC5yaWdodCAtIGNsaXBwaW5nUmVjdC5sZWZ0LFxuICAgIGhlaWdodDogY2xpcHBpbmdSZWN0LmJvdHRvbSAtIGNsaXBwaW5nUmVjdC50b3AsXG4gICAgeDogY2xpcHBpbmdSZWN0LmxlZnQsXG4gICAgeTogY2xpcHBpbmdSZWN0LnRvcFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXREaW1lbnNpb25zKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGdldENzc0RpbWVuc2lvbnMoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGdldFJlY3RSZWxhdGl2ZVRvT2Zmc2V0UGFyZW50KGVsZW1lbnQsIG9mZnNldFBhcmVudCwgc3RyYXRlZ3kpIHtcbiAgY29uc3QgaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIGNvbnN0IGRvY3VtZW50RWxlbWVudCA9IGdldERvY3VtZW50RWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICBjb25zdCBpc0ZpeGVkID0gc3RyYXRlZ3kgPT09ICdmaXhlZCc7XG4gIGNvbnN0IHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgdHJ1ZSwgaXNGaXhlZCwgb2Zmc2V0UGFyZW50KTtcbiAgbGV0IHNjcm9sbCA9IHtcbiAgICBzY3JvbGxMZWZ0OiAwLFxuICAgIHNjcm9sbFRvcDogMFxuICB9O1xuICBjb25zdCBvZmZzZXRzID0gY3JlYXRlQ29vcmRzKDApO1xuICBpZiAoaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgfHwgIWlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ICYmICFpc0ZpeGVkKSB7XG4gICAgaWYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgIT09ICdib2R5JyB8fCBpc092ZXJmbG93RWxlbWVudChkb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgICBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKG9mZnNldFBhcmVudCk7XG4gICAgfVxuICAgIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCkge1xuICAgICAgY29uc3Qgb2Zmc2V0UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQsIHRydWUsIGlzRml4ZWQsIG9mZnNldFBhcmVudCk7XG4gICAgICBvZmZzZXRzLnggPSBvZmZzZXRSZWN0LnggKyBvZmZzZXRQYXJlbnQuY2xpZW50TGVmdDtcbiAgICAgIG9mZnNldHMueSA9IG9mZnNldFJlY3QueSArIG9mZnNldFBhcmVudC5jbGllbnRUb3A7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIG9mZnNldHMueCA9IGdldFdpbmRvd1Njcm9sbEJhclgoZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB4OiByZWN0LmxlZnQgKyBzY3JvbGwuc2Nyb2xsTGVmdCAtIG9mZnNldHMueCxcbiAgICB5OiByZWN0LnRvcCArIHNjcm9sbC5zY3JvbGxUb3AgLSBvZmZzZXRzLnksXG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQsIHBvbHlmaWxsKSB7XG4gIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKHBvbHlmaWxsKSB7XG4gICAgcmV0dXJuIHBvbHlmaWxsKGVsZW1lbnQpO1xuICB9XG4gIHJldHVybiBlbGVtZW50Lm9mZnNldFBhcmVudDtcbn1cblxuLy8gR2V0cyB0aGUgY2xvc2VzdCBhbmNlc3RvciBwb3NpdGlvbmVkIGVsZW1lbnQuIEhhbmRsZXMgc29tZSBlZGdlIGNhc2VzLFxuLy8gc3VjaCBhcyB0YWJsZSBhbmNlc3RvcnMgYW5kIGNyb3NzIGJyb3dzZXIgYnVncy5cbmZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50LCBwb2x5ZmlsbCkge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cbiAgbGV0IG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCwgcG9seWZpbGwpO1xuICB3aGlsZSAob2Zmc2V0UGFyZW50ICYmIGlzVGFibGVFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQob2Zmc2V0UGFyZW50LCBwb2x5ZmlsbCk7XG4gIH1cbiAgaWYgKG9mZnNldFBhcmVudCAmJiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2h0bWwnIHx8IGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdib2R5JyAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnICYmICFpc0NvbnRhaW5pbmdCbG9jayhvZmZzZXRQYXJlbnQpKSkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cbiAgcmV0dXJuIG9mZnNldFBhcmVudCB8fCBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkgfHwgd2luZG93O1xufVxuXG5jb25zdCBnZXRFbGVtZW50UmVjdHMgPSBhc3luYyBmdW5jdGlvbiAoX3JlZikge1xuICBsZXQge1xuICAgIHJlZmVyZW5jZSxcbiAgICBmbG9hdGluZyxcbiAgICBzdHJhdGVneVxuICB9ID0gX3JlZjtcbiAgY29uc3QgZ2V0T2Zmc2V0UGFyZW50Rm4gPSB0aGlzLmdldE9mZnNldFBhcmVudCB8fCBnZXRPZmZzZXRQYXJlbnQ7XG4gIGNvbnN0IGdldERpbWVuc2lvbnNGbiA9IHRoaXMuZ2V0RGltZW5zaW9ucztcbiAgcmV0dXJuIHtcbiAgICByZWZlcmVuY2U6IGdldFJlY3RSZWxhdGl2ZVRvT2Zmc2V0UGFyZW50KHJlZmVyZW5jZSwgYXdhaXQgZ2V0T2Zmc2V0UGFyZW50Rm4oZmxvYXRpbmcpLCBzdHJhdGVneSksXG4gICAgZmxvYXRpbmc6IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgICAgLi4uKGF3YWl0IGdldERpbWVuc2lvbnNGbihmbG9hdGluZykpXG4gICAgfVxuICB9O1xufTtcblxuZnVuY3Rpb24gaXNSVEwoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXJlY3Rpb24gPT09ICdydGwnO1xufVxuXG5jb25zdCBwbGF0Zm9ybSA9IHtcbiAgY29udmVydE9mZnNldFBhcmVudFJlbGF0aXZlUmVjdFRvVmlld3BvcnRSZWxhdGl2ZVJlY3QsXG4gIGdldERvY3VtZW50RWxlbWVudCxcbiAgZ2V0Q2xpcHBpbmdSZWN0LFxuICBnZXRPZmZzZXRQYXJlbnQsXG4gIGdldEVsZW1lbnRSZWN0cyxcbiAgZ2V0Q2xpZW50UmVjdHMsXG4gIGdldERpbWVuc2lvbnMsXG4gIGdldFNjYWxlLFxuICBpc0VsZW1lbnQsXG4gIGlzUlRMXG59O1xuXG4vLyBodHRwczovL3NhbXRob3IuYXUvMjAyMS9vYnNlcnZpbmctZG9tL1xuZnVuY3Rpb24gb2JzZXJ2ZU1vdmUoZWxlbWVudCwgb25Nb3ZlKSB7XG4gIGxldCBpbyA9IG51bGw7XG4gIGxldCB0aW1lb3V0SWQ7XG4gIGNvbnN0IHJvb3QgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgaW8gJiYgaW8uZGlzY29ubmVjdCgpO1xuICAgIGlvID0gbnVsbDtcbiAgfVxuICBmdW5jdGlvbiByZWZyZXNoKHNraXAsIHRocmVzaG9sZCkge1xuICAgIGlmIChza2lwID09PSB2b2lkIDApIHtcbiAgICAgIHNraXAgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRocmVzaG9sZCA9PT0gdm9pZCAwKSB7XG4gICAgICB0aHJlc2hvbGQgPSAxO1xuICAgIH1cbiAgICBjbGVhbnVwKCk7XG4gICAgY29uc3Qge1xuICAgICAgbGVmdCxcbiAgICAgIHRvcCxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0XG4gICAgfSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKCFza2lwKSB7XG4gICAgICBvbk1vdmUoKTtcbiAgICB9XG4gICAgaWYgKCF3aWR0aCB8fCAhaGVpZ2h0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGluc2V0VG9wID0gZmxvb3IodG9wKTtcbiAgICBjb25zdCBpbnNldFJpZ2h0ID0gZmxvb3Iocm9vdC5jbGllbnRXaWR0aCAtIChsZWZ0ICsgd2lkdGgpKTtcbiAgICBjb25zdCBpbnNldEJvdHRvbSA9IGZsb29yKHJvb3QuY2xpZW50SGVpZ2h0IC0gKHRvcCArIGhlaWdodCkpO1xuICAgIGNvbnN0IGluc2V0TGVmdCA9IGZsb29yKGxlZnQpO1xuICAgIGNvbnN0IHJvb3RNYXJnaW4gPSAtaW5zZXRUb3AgKyBcInB4IFwiICsgLWluc2V0UmlnaHQgKyBcInB4IFwiICsgLWluc2V0Qm90dG9tICsgXCJweCBcIiArIC1pbnNldExlZnQgKyBcInB4XCI7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHJvb3RNYXJnaW4sXG4gICAgICB0aHJlc2hvbGQ6IG1heCgwLCBtaW4oMSwgdGhyZXNob2xkKSkgfHwgMVxuICAgIH07XG4gICAgbGV0IGlzRmlyc3RVcGRhdGUgPSB0cnVlO1xuICAgIGZ1bmN0aW9uIGhhbmRsZU9ic2VydmUoZW50cmllcykge1xuICAgICAgY29uc3QgcmF0aW8gPSBlbnRyaWVzWzBdLmludGVyc2VjdGlvblJhdGlvO1xuICAgICAgaWYgKHJhdGlvICE9PSB0aHJlc2hvbGQpIHtcbiAgICAgICAgaWYgKCFpc0ZpcnN0VXBkYXRlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlZnJlc2goKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJhdGlvKSB7XG4gICAgICAgICAgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICByZWZyZXNoKGZhbHNlLCAxZS03KTtcbiAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlZnJlc2goZmFsc2UsIHJhdGlvKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaXNGaXJzdFVwZGF0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIE9sZGVyIGJyb3dzZXJzIGRvbid0IHN1cHBvcnQgYSBgZG9jdW1lbnRgIGFzIHRoZSByb290IGFuZCB3aWxsIHRocm93IGFuXG4gICAgLy8gZXJyb3IuXG4gICAgdHJ5IHtcbiAgICAgIGlvID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGhhbmRsZU9ic2VydmUsIHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgLy8gSGFuZGxlIDxpZnJhbWU+c1xuICAgICAgICByb290OiByb290Lm93bmVyRG9jdW1lbnRcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlvID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGhhbmRsZU9ic2VydmUsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBpby5vYnNlcnZlKGVsZW1lbnQpO1xuICB9XG4gIHJlZnJlc2godHJ1ZSk7XG4gIHJldHVybiBjbGVhbnVwO1xufVxuXG4vKipcbiAqIEF1dG9tYXRpY2FsbHkgdXBkYXRlcyB0aGUgcG9zaXRpb24gb2YgdGhlIGZsb2F0aW5nIGVsZW1lbnQgd2hlbiBuZWNlc3NhcnkuXG4gKiBTaG91bGQgb25seSBiZSBjYWxsZWQgd2hlbiB0aGUgZmxvYXRpbmcgZWxlbWVudCBpcyBtb3VudGVkIG9uIHRoZSBET00gb3JcbiAqIHZpc2libGUgb24gdGhlIHNjcmVlbi5cbiAqIEByZXR1cm5zIGNsZWFudXAgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgaW52b2tlZCB3aGVuIHRoZSBmbG9hdGluZyBlbGVtZW50IGlzXG4gKiByZW1vdmVkIGZyb20gdGhlIERPTSBvciBoaWRkZW4gZnJvbSB0aGUgc2NyZWVuLlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2F1dG9VcGRhdGVcbiAqL1xuZnVuY3Rpb24gYXV0b1VwZGF0ZShyZWZlcmVuY2UsIGZsb2F0aW5nLCB1cGRhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBjb25zdCB7XG4gICAgYW5jZXN0b3JTY3JvbGwgPSB0cnVlLFxuICAgIGFuY2VzdG9yUmVzaXplID0gdHJ1ZSxcbiAgICBlbGVtZW50UmVzaXplID0gdHlwZW9mIFJlc2l6ZU9ic2VydmVyID09PSAnZnVuY3Rpb24nLFxuICAgIGxheW91dFNoaWZ0ID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyID09PSAnZnVuY3Rpb24nLFxuICAgIGFuaW1hdGlvbkZyYW1lID0gZmFsc2VcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHJlZmVyZW5jZUVsID0gdW53cmFwRWxlbWVudChyZWZlcmVuY2UpO1xuICBjb25zdCBhbmNlc3RvcnMgPSBhbmNlc3RvclNjcm9sbCB8fCBhbmNlc3RvclJlc2l6ZSA/IFsuLi4ocmVmZXJlbmNlRWwgPyBnZXRPdmVyZmxvd0FuY2VzdG9ycyhyZWZlcmVuY2VFbCkgOiBbXSksIC4uLmdldE92ZXJmbG93QW5jZXN0b3JzKGZsb2F0aW5nKV0gOiBbXTtcbiAgYW5jZXN0b3JzLmZvckVhY2goYW5jZXN0b3IgPT4ge1xuICAgIGFuY2VzdG9yU2Nyb2xsICYmIGFuY2VzdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZSwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuICAgIGFuY2VzdG9yUmVzaXplICYmIGFuY2VzdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZSk7XG4gIH0pO1xuICBjb25zdCBjbGVhbnVwSW8gPSByZWZlcmVuY2VFbCAmJiBsYXlvdXRTaGlmdCA/IG9ic2VydmVNb3ZlKHJlZmVyZW5jZUVsLCB1cGRhdGUpIDogbnVsbDtcbiAgbGV0IHJlb2JzZXJ2ZUZyYW1lID0gLTE7XG4gIGxldCByZXNpemVPYnNlcnZlciA9IG51bGw7XG4gIGlmIChlbGVtZW50UmVzaXplKSB7XG4gICAgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoX3JlZiA9PiB7XG4gICAgICBsZXQgW2ZpcnN0RW50cnldID0gX3JlZjtcbiAgICAgIGlmIChmaXJzdEVudHJ5ICYmIGZpcnN0RW50cnkudGFyZ2V0ID09PSByZWZlcmVuY2VFbCAmJiByZXNpemVPYnNlcnZlcikge1xuICAgICAgICAvLyBQcmV2ZW50IHVwZGF0ZSBsb29wcyB3aGVuIHVzaW5nIHRoZSBgc2l6ZWAgbWlkZGxld2FyZS5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2Zsb2F0aW5nLXVpL2Zsb2F0aW5nLXVpL2lzc3Vlcy8xNzQwXG4gICAgICAgIHJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZShmbG9hdGluZyk7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlb2JzZXJ2ZUZyYW1lKTtcbiAgICAgICAgcmVvYnNlcnZlRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHJlc2l6ZU9ic2VydmVyICYmIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZmxvYXRpbmcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHVwZGF0ZSgpO1xuICAgIH0pO1xuICAgIGlmIChyZWZlcmVuY2VFbCAmJiAhYW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUocmVmZXJlbmNlRWwpO1xuICAgIH1cbiAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKGZsb2F0aW5nKTtcbiAgfVxuICBsZXQgZnJhbWVJZDtcbiAgbGV0IHByZXZSZWZSZWN0ID0gYW5pbWF0aW9uRnJhbWUgPyBnZXRCb3VuZGluZ0NsaWVudFJlY3QocmVmZXJlbmNlKSA6IG51bGw7XG4gIGlmIChhbmltYXRpb25GcmFtZSkge1xuICAgIGZyYW1lTG9vcCgpO1xuICB9XG4gIGZ1bmN0aW9uIGZyYW1lTG9vcCgpIHtcbiAgICBjb25zdCBuZXh0UmVmUmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChyZWZlcmVuY2UpO1xuICAgIGlmIChwcmV2UmVmUmVjdCAmJiAobmV4dFJlZlJlY3QueCAhPT0gcHJldlJlZlJlY3QueCB8fCBuZXh0UmVmUmVjdC55ICE9PSBwcmV2UmVmUmVjdC55IHx8IG5leHRSZWZSZWN0LndpZHRoICE9PSBwcmV2UmVmUmVjdC53aWR0aCB8fCBuZXh0UmVmUmVjdC5oZWlnaHQgIT09IHByZXZSZWZSZWN0LmhlaWdodCkpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH1cbiAgICBwcmV2UmVmUmVjdCA9IG5leHRSZWZSZWN0O1xuICAgIGZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnJhbWVMb29wKTtcbiAgfVxuICB1cGRhdGUoKTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBhbmNlc3RvcnMuZm9yRWFjaChhbmNlc3RvciA9PiB7XG4gICAgICBhbmNlc3RvclNjcm9sbCAmJiBhbmNlc3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGUpO1xuICAgICAgYW5jZXN0b3JSZXNpemUgJiYgYW5jZXN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlKTtcbiAgICB9KTtcbiAgICBjbGVhbnVwSW8gJiYgY2xlYW51cElvKCk7XG4gICAgcmVzaXplT2JzZXJ2ZXIgJiYgcmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIHJlc2l6ZU9ic2VydmVyID0gbnVsbDtcbiAgICBpZiAoYW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lSWQpO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgYHhgIGFuZCBgeWAgY29vcmRpbmF0ZXMgdGhhdCB3aWxsIHBsYWNlIHRoZSBmbG9hdGluZyBlbGVtZW50XG4gKiBuZXh0IHRvIGEgcmVmZXJlbmNlIGVsZW1lbnQgd2hlbiBpdCBpcyBnaXZlbiBhIGNlcnRhaW4gQ1NTIHBvc2l0aW9uaW5nXG4gKiBzdHJhdGVneS5cbiAqL1xuY29uc3QgY29tcHV0ZVBvc2l0aW9uID0gKHJlZmVyZW5jZSwgZmxvYXRpbmcsIG9wdGlvbnMpID0+IHtcbiAgLy8gVGhpcyBjYWNoZXMgdGhlIGV4cGVuc2l2ZSBgZ2V0Q2xpcHBpbmdFbGVtZW50QW5jZXN0b3JzYCBmdW5jdGlvbiBzbyB0aGF0XG4gIC8vIG11bHRpcGxlIGxpZmVjeWNsZSByZXNldHMgcmUtdXNlIHRoZSBzYW1lIHJlc3VsdC4gSXQgb25seSBsaXZlcyBmb3IgYVxuICAvLyBzaW5nbGUgY2FsbC4gSWYgb3RoZXIgZnVuY3Rpb25zIGJlY29tZSBleHBlbnNpdmUsIHdlIGNhbiBhZGQgdGhlbSBhcyB3ZWxsLlxuICBjb25zdCBjYWNoZSA9IG5ldyBNYXAoKTtcbiAgY29uc3QgbWVyZ2VkT3B0aW9ucyA9IHtcbiAgICBwbGF0Zm9ybSxcbiAgICAuLi5vcHRpb25zXG4gIH07XG4gIGNvbnN0IHBsYXRmb3JtV2l0aENhY2hlID0ge1xuICAgIC4uLm1lcmdlZE9wdGlvbnMucGxhdGZvcm0sXG4gICAgX2M6IGNhY2hlXG4gIH07XG4gIHJldHVybiBjb21wdXRlUG9zaXRpb24kMShyZWZlcmVuY2UsIGZsb2F0aW5nLCB7XG4gICAgLi4ubWVyZ2VkT3B0aW9ucyxcbiAgICBwbGF0Zm9ybTogcGxhdGZvcm1XaXRoQ2FjaGVcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBhdXRvVXBkYXRlLCBjb21wdXRlUG9zaXRpb24sIHBsYXRmb3JtIH07XG4iLCJpbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbnZhciBpbmRleCA9ICB1c2VMYXlvdXRFZmZlY3QgO1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDInO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IHsganN4LCBrZXlmcmFtZXMsIGNzcyBhcyBjc3MkMiB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5JztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0IF90eXBlb2YgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mJztcbmltcG9ydCBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbCc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVJlZiwgdXNlU3RhdGUsIHVzZU1lbW8sIHVzZUNhbGxiYWNrLCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGF1dG9VcGRhdGUgfSBmcm9tICdAZmxvYXRpbmctdWkvZG9tJztcbmltcG9ydCB1c2VMYXlvdXRFZmZlY3QgZnJvbSAndXNlLWlzb21vcnBoaWMtbGF5b3V0LWVmZmVjdCc7XG5cbnZhciBfZXhjbHVkZWQkNCA9IFtcImNsYXNzTmFtZVwiLCBcImNsZWFyVmFsdWVcIiwgXCJjeFwiLCBcImdldFN0eWxlc1wiLCBcImdldENsYXNzTmFtZXNcIiwgXCJnZXRWYWx1ZVwiLCBcImhhc1ZhbHVlXCIsIFwiaXNNdWx0aVwiLCBcImlzUnRsXCIsIFwib3B0aW9uc1wiLCBcInNlbGVjdE9wdGlvblwiLCBcInNlbGVjdFByb3BzXCIsIFwic2V0VmFsdWVcIiwgXCJ0aGVtZVwiXTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTk8gT1Bcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDbGFzcyBOYW1lIFByZWZpeGVyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGNvbXBvbmVudCBzdGF0ZSBmb3Igc3R5bGluZyB3aXRoIGNsYXNzIG5hbWVzLlxuXG4gRXhwZWN0cyBhbiBhcnJheSBvZiBzdHJpbmdzIE9SIGEgc3RyaW5nL29iamVjdCBwYWlyOlxuIC0gY2xhc3NOYW1lKFsnY29tcCcsICdjb21wLWFyZycsICdjb21wLWFyZy0yJ10pXG4gICBAcmV0dXJucyAncmVhY3Qtc2VsZWN0X19jb21wIHJlYWN0LXNlbGVjdF9fY29tcC1hcmcgcmVhY3Qtc2VsZWN0X19jb21wLWFyZy0yJ1xuIC0gY2xhc3NOYW1lKCdjb21wJywgeyBzb21lOiB0cnVlLCBzdGF0ZTogZmFsc2UgfSlcbiAgIEByZXR1cm5zICdyZWFjdC1zZWxlY3RfX2NvbXAgcmVhY3Qtc2VsZWN0X19jb21wLS1zb21lJ1xuKi9cbmZ1bmN0aW9uIGFwcGx5UHJlZml4VG9OYW1lKHByZWZpeCwgbmFtZSkge1xuICBpZiAoIW5hbWUpIHtcbiAgICByZXR1cm4gcHJlZml4O1xuICB9IGVsc2UgaWYgKG5hbWVbMF0gPT09ICctJykge1xuICAgIHJldHVybiBwcmVmaXggKyBuYW1lO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBwcmVmaXggKyAnX18nICsgbmFtZTtcbiAgfVxufVxuZnVuY3Rpb24gY2xhc3NOYW1lcyhwcmVmaXgsIHN0YXRlKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBjbGFzc05hbWVMaXN0ID0gbmV3IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBjbGFzc05hbWVMaXN0W19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuICB2YXIgYXJyID0gW10uY29uY2F0KGNsYXNzTmFtZUxpc3QpO1xuICBpZiAoc3RhdGUgJiYgcHJlZml4KSB7XG4gICAgZm9yICh2YXIga2V5IGluIHN0YXRlKSB7XG4gICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBzdGF0ZVtrZXldKSB7XG4gICAgICAgIGFyci5wdXNoKFwiXCIuY29uY2F0KGFwcGx5UHJlZml4VG9OYW1lKHByZWZpeCwga2V5KSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBpO1xuICB9KS5tYXAoZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gU3RyaW5nKGkpLnRyaW0oKTtcbiAgfSkuam9pbignICcpO1xufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDbGVhbiBWYWx1ZVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBjbGVhblZhbHVlID0gZnVuY3Rpb24gY2xlYW5WYWx1ZSh2YWx1ZSkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZS5maWx0ZXIoQm9vbGVhbik7XG4gIGlmIChfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHJldHVybiBbdmFsdWVdO1xuICByZXR1cm4gW107XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENsZWFuIENvbW1vbiBQcm9wc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBjbGVhbkNvbW1vblByb3BzID0gZnVuY3Rpb24gY2xlYW5Db21tb25Qcm9wcyhwcm9wcykge1xuICAvL2NsYXNzTmFtZVxuICBwcm9wcy5jbGFzc05hbWU7XG4gICAgcHJvcHMuY2xlYXJWYWx1ZTtcbiAgICBwcm9wcy5jeDtcbiAgICBwcm9wcy5nZXRTdHlsZXM7XG4gICAgcHJvcHMuZ2V0Q2xhc3NOYW1lcztcbiAgICBwcm9wcy5nZXRWYWx1ZTtcbiAgICBwcm9wcy5oYXNWYWx1ZTtcbiAgICBwcm9wcy5pc011bHRpO1xuICAgIHByb3BzLmlzUnRsO1xuICAgIHByb3BzLm9wdGlvbnM7XG4gICAgcHJvcHMuc2VsZWN0T3B0aW9uO1xuICAgIHByb3BzLnNlbGVjdFByb3BzO1xuICAgIHByb3BzLnNldFZhbHVlO1xuICAgIHByb3BzLnRoZW1lO1xuICAgIHZhciBpbm5lclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBfZXhjbHVkZWQkNCk7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBpbm5lclByb3BzKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gR2V0IFN0eWxlIFByb3BzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGdldFN0eWxlUHJvcHMgPSBmdW5jdGlvbiBnZXRTdHlsZVByb3BzKHByb3BzLCBuYW1lLCBjbGFzc05hbWVzU3RhdGUpIHtcbiAgdmFyIGN4ID0gcHJvcHMuY3gsXG4gICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgIGdldENsYXNzTmFtZXMgPSBwcm9wcy5nZXRDbGFzc05hbWVzLFxuICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZTtcbiAgcmV0dXJuIHtcbiAgICBjc3M6IGdldFN0eWxlcyhuYW1lLCBwcm9wcyksXG4gICAgY2xhc3NOYW1lOiBjeChjbGFzc05hbWVzU3RhdGUgIT09IG51bGwgJiYgY2xhc3NOYW1lc1N0YXRlICE9PSB2b2lkIDAgPyBjbGFzc05hbWVzU3RhdGUgOiB7fSwgZ2V0Q2xhc3NOYW1lcyhuYW1lLCBwcm9wcyksIGNsYXNzTmFtZSlcbiAgfTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSGFuZGxlIElucHV0IENoYW5nZVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGhhbmRsZUlucHV0Q2hhbmdlKGlucHV0VmFsdWUsIGFjdGlvbk1ldGEsIG9uSW5wdXRDaGFuZ2UpIHtcbiAgaWYgKG9uSW5wdXRDaGFuZ2UpIHtcbiAgICB2YXIgX25ld1ZhbHVlID0gb25JbnB1dENoYW5nZShpbnB1dFZhbHVlLCBhY3Rpb25NZXRhKTtcbiAgICBpZiAodHlwZW9mIF9uZXdWYWx1ZSA9PT0gJ3N0cmluZycpIHJldHVybiBfbmV3VmFsdWU7XG4gIH1cbiAgcmV0dXJuIGlucHV0VmFsdWU7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2Nyb2xsIEhlbHBlcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBpc0RvY3VtZW50RWxlbWVudChlbCkge1xuICByZXR1cm4gW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keSwgd2luZG93XS5pbmRleE9mKGVsKSA+IC0xO1xufVxuXG4vLyBOb3JtYWxpemVkIFNjcm9sbCBUb3Bcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBub3JtYWxpemVkSGVpZ2h0KGVsKSB7XG4gIGlmIChpc0RvY3VtZW50RWxlbWVudChlbCkpIHtcbiAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0O1xuICB9XG4gIHJldHVybiBlbC5jbGllbnRIZWlnaHQ7XG59XG5cbi8vIE5vcm1hbGl6ZWQgc2Nyb2xsVG8gJiBzY3JvbGxUb3Bcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxUb3AoZWwpIHtcbiAgaWYgKGlzRG9jdW1lbnRFbGVtZW50KGVsKSkge1xuICAgIHJldHVybiB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gIH1cbiAgcmV0dXJuIGVsLnNjcm9sbFRvcDtcbn1cbmZ1bmN0aW9uIHNjcm9sbFRvKGVsLCB0b3ApIHtcbiAgLy8gd2l0aCBhIHNjcm9sbCBkaXN0YW5jZSwgd2UgcGVyZm9ybSBzY3JvbGwgb24gdGhlIGVsZW1lbnRcbiAgaWYgKGlzRG9jdW1lbnRFbGVtZW50KGVsKSkge1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCB0b3ApO1xuICAgIHJldHVybjtcbiAgfVxuICBlbC5zY3JvbGxUb3AgPSB0b3A7XG59XG5cbi8vIEdldCBTY3JvbGwgUGFyZW50XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgdmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgdmFyIGV4Y2x1ZGVTdGF0aWNQYXJlbnQgPSBzdHlsZS5wb3NpdGlvbiA9PT0gJ2Fic29sdXRlJztcbiAgdmFyIG92ZXJmbG93UnggPSAvKGF1dG98c2Nyb2xsKS87XG4gIGlmIChzdHlsZS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgZm9yICh2YXIgcGFyZW50ID0gZWxlbWVudDsgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7KSB7XG4gICAgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHBhcmVudCk7XG4gICAgaWYgKGV4Y2x1ZGVTdGF0aWNQYXJlbnQgJiYgc3R5bGUucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKG92ZXJmbG93UngudGVzdChzdHlsZS5vdmVyZmxvdyArIHN0eWxlLm92ZXJmbG93WSArIHN0eWxlLm92ZXJmbG93WCkpIHtcbiAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG59XG5cbi8vIEFuaW1hdGVkIFNjcm9sbCBUb1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICBAcGFyYW0gdDogdGltZSAoZWxhcHNlZClcbiAgQHBhcmFtIGI6IGluaXRpYWwgdmFsdWVcbiAgQHBhcmFtIGM6IGFtb3VudCBvZiBjaGFuZ2VcbiAgQHBhcmFtIGQ6IGR1cmF0aW9uXG4qL1xuZnVuY3Rpb24gZWFzZU91dEN1YmljKHQsIGIsIGMsIGQpIHtcbiAgcmV0dXJuIGMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqIHQgKyAxKSArIGI7XG59XG5mdW5jdGlvbiBhbmltYXRlZFNjcm9sbFRvKGVsZW1lbnQsIHRvKSB7XG4gIHZhciBkdXJhdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogMjAwO1xuICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IG5vb3A7XG4gIHZhciBzdGFydCA9IGdldFNjcm9sbFRvcChlbGVtZW50KTtcbiAgdmFyIGNoYW5nZSA9IHRvIC0gc3RhcnQ7XG4gIHZhciBpbmNyZW1lbnQgPSAxMDtcbiAgdmFyIGN1cnJlbnRUaW1lID0gMDtcbiAgZnVuY3Rpb24gYW5pbWF0ZVNjcm9sbCgpIHtcbiAgICBjdXJyZW50VGltZSArPSBpbmNyZW1lbnQ7XG4gICAgdmFyIHZhbCA9IGVhc2VPdXRDdWJpYyhjdXJyZW50VGltZSwgc3RhcnQsIGNoYW5nZSwgZHVyYXRpb24pO1xuICAgIHNjcm9sbFRvKGVsZW1lbnQsIHZhbCk7XG4gICAgaWYgKGN1cnJlbnRUaW1lIDwgZHVyYXRpb24pIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZVNjcm9sbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuICBhbmltYXRlU2Nyb2xsKCk7XG59XG5cbi8vIFNjcm9sbCBJbnRvIFZpZXdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBzY3JvbGxJbnRvVmlldyhtZW51RWwsIGZvY3VzZWRFbCkge1xuICB2YXIgbWVudVJlY3QgPSBtZW51RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciBmb2N1c2VkUmVjdCA9IGZvY3VzZWRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIG92ZXJTY3JvbGwgPSBmb2N1c2VkRWwub2Zmc2V0SGVpZ2h0IC8gMztcbiAgaWYgKGZvY3VzZWRSZWN0LmJvdHRvbSArIG92ZXJTY3JvbGwgPiBtZW51UmVjdC5ib3R0b20pIHtcbiAgICBzY3JvbGxUbyhtZW51RWwsIE1hdGgubWluKGZvY3VzZWRFbC5vZmZzZXRUb3AgKyBmb2N1c2VkRWwuY2xpZW50SGVpZ2h0IC0gbWVudUVsLm9mZnNldEhlaWdodCArIG92ZXJTY3JvbGwsIG1lbnVFbC5zY3JvbGxIZWlnaHQpKTtcbiAgfSBlbHNlIGlmIChmb2N1c2VkUmVjdC50b3AgLSBvdmVyU2Nyb2xsIDwgbWVudVJlY3QudG9wKSB7XG4gICAgc2Nyb2xsVG8obWVudUVsLCBNYXRoLm1heChmb2N1c2VkRWwub2Zmc2V0VG9wIC0gb3ZlclNjcm9sbCwgMCkpO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gR2V0IGJvdW5kaW5nIGNsaWVudCBvYmplY3Rcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBjYW5ub3QgZ2V0IGtleXMgdXNpbmcgYXJyYXkgbm90YXRpb24gd2l0aCBET01SZWN0XG5mdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudE9iaihlbGVtZW50KSB7XG4gIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIHtcbiAgICBib3R0b206IHJlY3QuYm90dG9tLFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHQsXG4gICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgIHJpZ2h0OiByZWN0LnJpZ2h0LFxuICAgIHRvcDogcmVjdC50b3AsXG4gICAgd2lkdGg6IHJlY3Qud2lkdGhcbiAgfTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBUb3VjaCBDYXBhYmlsaXR5IERldGVjdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gaXNUb3VjaENhcGFibGUoKSB7XG4gIHRyeSB7XG4gICAgZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ1RvdWNoRXZlbnQnKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1vYmlsZSBEZXZpY2UgRGV0ZWN0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBpc01vYmlsZURldmljZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUGFzc2l2ZSBFdmVudCBEZXRlY3RvclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yYWZncmFwaC9kZXRlY3QtaXQvYmxvYi9tYWluL3NyYy9pbmRleC50cyNMMTktTDM2XG52YXIgcGFzc2l2ZU9wdGlvbkFjY2Vzc2VkID0gZmFsc2U7XG52YXIgb3B0aW9ucyA9IHtcbiAgZ2V0IHBhc3NpdmUoKSB7XG4gICAgcmV0dXJuIHBhc3NpdmVPcHRpb25BY2Nlc3NlZCA9IHRydWU7XG4gIH1cbn07XG4vLyBjaGVjayBmb3IgU1NSXG52YXIgdyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge307XG5pZiAody5hZGRFdmVudExpc3RlbmVyICYmIHcucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICB3LmFkZEV2ZW50TGlzdGVuZXIoJ3AnLCBub29wLCBvcHRpb25zKTtcbiAgdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwJywgbm9vcCwgZmFsc2UpO1xufVxudmFyIHN1cHBvcnRzUGFzc2l2ZUV2ZW50cyA9IHBhc3NpdmVPcHRpb25BY2Nlc3NlZDtcbmZ1bmN0aW9uIG5vdE51bGxpc2goaXRlbSkge1xuICByZXR1cm4gaXRlbSAhPSBudWxsO1xufVxuZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJnKTtcbn1cbmZ1bmN0aW9uIHZhbHVlVGVybmFyeShpc011bHRpLCBtdWx0aVZhbHVlLCBzaW5nbGVWYWx1ZSkge1xuICByZXR1cm4gaXNNdWx0aSA/IG11bHRpVmFsdWUgOiBzaW5nbGVWYWx1ZTtcbn1cbmZ1bmN0aW9uIHNpbmdsZVZhbHVlQXNWYWx1ZShzaW5nbGVWYWx1ZSkge1xuICByZXR1cm4gc2luZ2xlVmFsdWU7XG59XG5mdW5jdGlvbiBtdWx0aVZhbHVlQXNWYWx1ZShtdWx0aVZhbHVlKSB7XG4gIHJldHVybiBtdWx0aVZhbHVlO1xufVxudmFyIHJlbW92ZVByb3BzID0gZnVuY3Rpb24gcmVtb3ZlUHJvcHMocHJvcHNPYmopIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBwcm9wZXJ0aWVzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBwcm9wZXJ0aWVzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG4gIHZhciBwcm9wc01hcCA9IE9iamVjdC5lbnRyaWVzKHByb3BzT2JqKS5maWx0ZXIoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAxKSxcbiAgICAgIGtleSA9IF9yZWYyWzBdO1xuICAgIHJldHVybiAhcHJvcGVydGllcy5pbmNsdWRlcyhrZXkpO1xuICB9KTtcbiAgcmV0dXJuIHByb3BzTWFwLnJlZHVjZShmdW5jdGlvbiAobmV3UHJvcHMsIF9yZWYzKSB7XG4gICAgdmFyIF9yZWY0ID0gX3NsaWNlZFRvQXJyYXkoX3JlZjMsIDIpLFxuICAgICAga2V5ID0gX3JlZjRbMF0sXG4gICAgICB2YWwgPSBfcmVmNFsxXTtcbiAgICBuZXdQcm9wc1trZXldID0gdmFsO1xuICAgIHJldHVybiBuZXdQcm9wcztcbiAgfSwge30pO1xufTtcblxudmFyIF9leGNsdWRlZCQzID0gW1wiY2hpbGRyZW5cIiwgXCJpbm5lclByb3BzXCJdLFxuICBfZXhjbHVkZWQyJDEgPSBbXCJjaGlsZHJlblwiLCBcImlubmVyUHJvcHNcIl07XG5mdW5jdGlvbiBnZXRNZW51UGxhY2VtZW50KF9yZWYpIHtcbiAgdmFyIHByZWZlcnJlZE1heEhlaWdodCA9IF9yZWYubWF4SGVpZ2h0LFxuICAgIG1lbnVFbCA9IF9yZWYubWVudUVsLFxuICAgIG1pbkhlaWdodCA9IF9yZWYubWluSGVpZ2h0LFxuICAgIHByZWZlcnJlZFBsYWNlbWVudCA9IF9yZWYucGxhY2VtZW50LFxuICAgIHNob3VsZFNjcm9sbCA9IF9yZWYuc2hvdWxkU2Nyb2xsLFxuICAgIGlzRml4ZWRQb3NpdGlvbiA9IF9yZWYuaXNGaXhlZFBvc2l0aW9uLFxuICAgIGNvbnRyb2xIZWlnaHQgPSBfcmVmLmNvbnRyb2xIZWlnaHQ7XG4gIHZhciBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQobWVudUVsKTtcbiAgdmFyIGRlZmF1bHRTdGF0ZSA9IHtcbiAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgIG1heEhlaWdodDogcHJlZmVycmVkTWF4SGVpZ2h0XG4gIH07XG5cbiAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmcsIHJldHVybiBkZWZhdWx0IHN0YXRlXG4gIGlmICghbWVudUVsIHx8ICFtZW51RWwub2Zmc2V0UGFyZW50KSByZXR1cm4gZGVmYXVsdFN0YXRlO1xuXG4gIC8vIHdlIGNhbid0IHRydXN0IGBzY3JvbGxQYXJlbnQuc2Nyb2xsSGVpZ2h0YCAtLT4gaXQgbWF5IGluY3JlYXNlIHdoZW5cbiAgLy8gdGhlIG1lbnUgaXMgcmVuZGVyZWRcbiAgdmFyIF9zY3JvbGxQYXJlbnQkZ2V0Qm91biA9IHNjcm9sbFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICBzY3JvbGxIZWlnaHQgPSBfc2Nyb2xsUGFyZW50JGdldEJvdW4uaGVpZ2h0O1xuICB2YXIgX21lbnVFbCRnZXRCb3VuZGluZ0NsID0gbWVudUVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgIG1lbnVCb3R0b20gPSBfbWVudUVsJGdldEJvdW5kaW5nQ2wuYm90dG9tLFxuICAgIG1lbnVIZWlnaHQgPSBfbWVudUVsJGdldEJvdW5kaW5nQ2wuaGVpZ2h0LFxuICAgIG1lbnVUb3AgPSBfbWVudUVsJGdldEJvdW5kaW5nQ2wudG9wO1xuICB2YXIgX21lbnVFbCRvZmZzZXRQYXJlbnQkID0gbWVudUVsLm9mZnNldFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICBjb250YWluZXJUb3AgPSBfbWVudUVsJG9mZnNldFBhcmVudCQudG9wO1xuICB2YXIgdmlld0hlaWdodCA9IGlzRml4ZWRQb3NpdGlvbiA/IHdpbmRvdy5pbm5lckhlaWdodCA6IG5vcm1hbGl6ZWRIZWlnaHQoc2Nyb2xsUGFyZW50KTtcbiAgdmFyIHNjcm9sbFRvcCA9IGdldFNjcm9sbFRvcChzY3JvbGxQYXJlbnQpO1xuICB2YXIgbWFyZ2luQm90dG9tID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShtZW51RWwpLm1hcmdpbkJvdHRvbSwgMTApO1xuICB2YXIgbWFyZ2luVG9wID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShtZW51RWwpLm1hcmdpblRvcCwgMTApO1xuICB2YXIgdmlld1NwYWNlQWJvdmUgPSBjb250YWluZXJUb3AgLSBtYXJnaW5Ub3A7XG4gIHZhciB2aWV3U3BhY2VCZWxvdyA9IHZpZXdIZWlnaHQgLSBtZW51VG9wO1xuICB2YXIgc2Nyb2xsU3BhY2VBYm92ZSA9IHZpZXdTcGFjZUFib3ZlICsgc2Nyb2xsVG9wO1xuICB2YXIgc2Nyb2xsU3BhY2VCZWxvdyA9IHNjcm9sbEhlaWdodCAtIHNjcm9sbFRvcCAtIG1lbnVUb3A7XG4gIHZhciBzY3JvbGxEb3duID0gbWVudUJvdHRvbSAtIHZpZXdIZWlnaHQgKyBzY3JvbGxUb3AgKyBtYXJnaW5Cb3R0b207XG4gIHZhciBzY3JvbGxVcCA9IHNjcm9sbFRvcCArIG1lbnVUb3AgLSBtYXJnaW5Ub3A7XG4gIHZhciBzY3JvbGxEdXJhdGlvbiA9IDE2MDtcbiAgc3dpdGNoIChwcmVmZXJyZWRQbGFjZW1lbnQpIHtcbiAgICBjYXNlICdhdXRvJzpcbiAgICBjYXNlICdib3R0b20nOlxuICAgICAgLy8gMTogdGhlIG1lbnUgd2lsbCBmaXQsIGRvIG5vdGhpbmdcbiAgICAgIGlmICh2aWV3U3BhY2VCZWxvdyA+PSBtZW51SGVpZ2h0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IHByZWZlcnJlZE1heEhlaWdodFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvLyAyOiB0aGUgbWVudSB3aWxsIGZpdCwgaWYgc2Nyb2xsZWRcbiAgICAgIGlmIChzY3JvbGxTcGFjZUJlbG93ID49IG1lbnVIZWlnaHQgJiYgIWlzRml4ZWRQb3NpdGlvbikge1xuICAgICAgICBpZiAoc2hvdWxkU2Nyb2xsKSB7XG4gICAgICAgICAgYW5pbWF0ZWRTY3JvbGxUbyhzY3JvbGxQYXJlbnQsIHNjcm9sbERvd24sIHNjcm9sbER1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBwcmVmZXJyZWRNYXhIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gMzogdGhlIG1lbnUgd2lsbCBmaXQsIGlmIGNvbnN0cmFpbmVkXG4gICAgICBpZiAoIWlzRml4ZWRQb3NpdGlvbiAmJiBzY3JvbGxTcGFjZUJlbG93ID49IG1pbkhlaWdodCB8fCBpc0ZpeGVkUG9zaXRpb24gJiYgdmlld1NwYWNlQmVsb3cgPj0gbWluSGVpZ2h0KSB7XG4gICAgICAgIGlmIChzaG91bGRTY3JvbGwpIHtcbiAgICAgICAgICBhbmltYXRlZFNjcm9sbFRvKHNjcm9sbFBhcmVudCwgc2Nyb2xsRG93biwgc2Nyb2xsRHVyYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gd2Ugd2FudCB0byBwcm92aWRlIGFzIG11Y2ggb2YgdGhlIG1lbnUgYXMgcG9zc2libGUgdG8gdGhlIHVzZXIsXG4gICAgICAgIC8vIHNvIGdpdmUgdGhlbSB3aGF0ZXZlciBpcyBhdmFpbGFibGUgYmVsb3cgcmF0aGVyIHRoYW4gdGhlIG1pbkhlaWdodC5cbiAgICAgICAgdmFyIGNvbnN0cmFpbmVkSGVpZ2h0ID0gaXNGaXhlZFBvc2l0aW9uID8gdmlld1NwYWNlQmVsb3cgLSBtYXJnaW5Cb3R0b20gOiBzY3JvbGxTcGFjZUJlbG93IC0gbWFyZ2luQm90dG9tO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBjb25zdHJhaW5lZEhlaWdodFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvLyA0LiBGb3JrZWQgYmV2aW91ciB3aGVuIHRoZXJlIGlzbid0IGVub3VnaCBzcGFjZSBiZWxvd1xuXG4gICAgICAvLyBBVVRPOiBmbGlwIHRoZSBtZW51LCByZW5kZXIgYWJvdmVcbiAgICAgIGlmIChwcmVmZXJyZWRQbGFjZW1lbnQgPT09ICdhdXRvJyB8fCBpc0ZpeGVkUG9zaXRpb24pIHtcbiAgICAgICAgLy8gbWF5IG5lZWQgdG8gYmUgY29uc3RyYWluZWQgYWZ0ZXIgZmxpcHBpbmdcbiAgICAgICAgdmFyIF9jb25zdHJhaW5lZEhlaWdodCA9IHByZWZlcnJlZE1heEhlaWdodDtcbiAgICAgICAgdmFyIHNwYWNlQWJvdmUgPSBpc0ZpeGVkUG9zaXRpb24gPyB2aWV3U3BhY2VBYm92ZSA6IHNjcm9sbFNwYWNlQWJvdmU7XG4gICAgICAgIGlmIChzcGFjZUFib3ZlID49IG1pbkhlaWdodCkge1xuICAgICAgICAgIF9jb25zdHJhaW5lZEhlaWdodCA9IE1hdGgubWluKHNwYWNlQWJvdmUgLSBtYXJnaW5Cb3R0b20gLSBjb250cm9sSGVpZ2h0LCBwcmVmZXJyZWRNYXhIZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IF9jb25zdHJhaW5lZEhlaWdodFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvLyBCT1RUT006IGFsbG93IGJyb3dzZXIgdG8gaW5jcmVhc2Ugc2Nyb2xsYWJsZSBhcmVhIGFuZCBpbW1lZGlhdGVseSBzZXQgc2Nyb2xsXG4gICAgICBpZiAocHJlZmVycmVkUGxhY2VtZW50ID09PSAnYm90dG9tJykge1xuICAgICAgICBpZiAoc2hvdWxkU2Nyb2xsKSB7XG4gICAgICAgICAgc2Nyb2xsVG8oc2Nyb2xsUGFyZW50LCBzY3JvbGxEb3duKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBwcmVmZXJyZWRNYXhIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3RvcCc6XG4gICAgICAvLyAxOiB0aGUgbWVudSB3aWxsIGZpdCwgZG8gbm90aGluZ1xuICAgICAgaWYgKHZpZXdTcGFjZUFib3ZlID49IG1lbnVIZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgICAgIG1heEhlaWdodDogcHJlZmVycmVkTWF4SGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIDI6IHRoZSBtZW51IHdpbGwgZml0LCBpZiBzY3JvbGxlZFxuICAgICAgaWYgKHNjcm9sbFNwYWNlQWJvdmUgPj0gbWVudUhlaWdodCAmJiAhaXNGaXhlZFBvc2l0aW9uKSB7XG4gICAgICAgIGlmIChzaG91bGRTY3JvbGwpIHtcbiAgICAgICAgICBhbmltYXRlZFNjcm9sbFRvKHNjcm9sbFBhcmVudCwgc2Nyb2xsVXAsIHNjcm9sbER1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBwcmVmZXJyZWRNYXhIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gMzogdGhlIG1lbnUgd2lsbCBmaXQsIGlmIGNvbnN0cmFpbmVkXG4gICAgICBpZiAoIWlzRml4ZWRQb3NpdGlvbiAmJiBzY3JvbGxTcGFjZUFib3ZlID49IG1pbkhlaWdodCB8fCBpc0ZpeGVkUG9zaXRpb24gJiYgdmlld1NwYWNlQWJvdmUgPj0gbWluSGVpZ2h0KSB7XG4gICAgICAgIHZhciBfY29uc3RyYWluZWRIZWlnaHQyID0gcHJlZmVycmVkTWF4SGVpZ2h0O1xuXG4gICAgICAgIC8vIHdlIHdhbnQgdG8gcHJvdmlkZSBhcyBtdWNoIG9mIHRoZSBtZW51IGFzIHBvc3NpYmxlIHRvIHRoZSB1c2VyLFxuICAgICAgICAvLyBzbyBnaXZlIHRoZW0gd2hhdGV2ZXIgaXMgYXZhaWxhYmxlIGJlbG93IHJhdGhlciB0aGFuIHRoZSBtaW5IZWlnaHQuXG4gICAgICAgIGlmICghaXNGaXhlZFBvc2l0aW9uICYmIHNjcm9sbFNwYWNlQWJvdmUgPj0gbWluSGVpZ2h0IHx8IGlzRml4ZWRQb3NpdGlvbiAmJiB2aWV3U3BhY2VBYm92ZSA+PSBtaW5IZWlnaHQpIHtcbiAgICAgICAgICBfY29uc3RyYWluZWRIZWlnaHQyID0gaXNGaXhlZFBvc2l0aW9uID8gdmlld1NwYWNlQWJvdmUgLSBtYXJnaW5Ub3AgOiBzY3JvbGxTcGFjZUFib3ZlIC0gbWFyZ2luVG9wO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG91bGRTY3JvbGwpIHtcbiAgICAgICAgICBhbmltYXRlZFNjcm9sbFRvKHNjcm9sbFBhcmVudCwgc2Nyb2xsVXAsIHNjcm9sbER1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBfY29uc3RyYWluZWRIZWlnaHQyXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIDQuIG5vdCBlbm91Z2ggc3BhY2UsIHRoZSBicm93c2VyIFdJTEwgTk9UIGluY3JlYXNlIHNjcm9sbGFibGUgYXJlYSB3aGVuXG4gICAgICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQgZWxlbWVudCByZW5kZXJlZCBhYm92ZSB0aGUgdmlld3BvcnQgKG9ubHkgYmVsb3cpLlxuICAgICAgLy8gRmxpcCB0aGUgbWVudSwgcmVuZGVyIGJlbG93XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgICBtYXhIZWlnaHQ6IHByZWZlcnJlZE1heEhlaWdodFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwbGFjZW1lbnQgcHJvdmlkZWQgXFxcIlwiLmNvbmNhdChwcmVmZXJyZWRQbGFjZW1lbnQsIFwiXFxcIi5cIikpO1xuICB9XG4gIHJldHVybiBkZWZhdWx0U3RhdGU7XG59XG5cbi8vIE1lbnUgQ29tcG9uZW50XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gYWxpZ25Ub0NvbnRyb2wocGxhY2VtZW50KSB7XG4gIHZhciBwbGFjZW1lbnRUb0NTU1Byb3AgPSB7XG4gICAgYm90dG9tOiAndG9wJyxcbiAgICB0b3A6ICdib3R0b20nXG4gIH07XG4gIHJldHVybiBwbGFjZW1lbnQgPyBwbGFjZW1lbnRUb0NTU1Byb3BbcGxhY2VtZW50XSA6ICdib3R0b20nO1xufVxudmFyIGNvZXJjZVBsYWNlbWVudCA9IGZ1bmN0aW9uIGNvZXJjZVBsYWNlbWVudChwKSB7XG4gIHJldHVybiBwID09PSAnYXV0bycgPyAnYm90dG9tJyA6IHA7XG59O1xudmFyIG1lbnVDU1MgPSBmdW5jdGlvbiBtZW51Q1NTKF9yZWYyLCB1bnN0eWxlZCkge1xuICB2YXIgX29iamVjdFNwcmVhZDI7XG4gIHZhciBwbGFjZW1lbnQgPSBfcmVmMi5wbGFjZW1lbnQsXG4gICAgX3JlZjIkdGhlbWUgPSBfcmVmMi50aGVtZSxcbiAgICBib3JkZXJSYWRpdXMgPSBfcmVmMiR0aGVtZS5ib3JkZXJSYWRpdXMsXG4gICAgc3BhY2luZyA9IF9yZWYyJHRoZW1lLnNwYWNpbmcsXG4gICAgY29sb3JzID0gX3JlZjIkdGhlbWUuY29sb3JzO1xuICByZXR1cm4gX29iamVjdFNwcmVhZCgoX29iamVjdFNwcmVhZDIgPSB7XG4gICAgbGFiZWw6ICdtZW51J1xuICB9LCBfZGVmaW5lUHJvcGVydHkoX29iamVjdFNwcmVhZDIsIGFsaWduVG9Db250cm9sKHBsYWNlbWVudCksICcxMDAlJyksIF9kZWZpbmVQcm9wZXJ0eShfb2JqZWN0U3ByZWFkMiwgXCJwb3NpdGlvblwiLCAnYWJzb2x1dGUnKSwgX2RlZmluZVByb3BlcnR5KF9vYmplY3RTcHJlYWQyLCBcIndpZHRoXCIsICcxMDAlJyksIF9kZWZpbmVQcm9wZXJ0eShfb2JqZWN0U3ByZWFkMiwgXCJ6SW5kZXhcIiwgMSksIF9vYmplY3RTcHJlYWQyKSwgdW5zdHlsZWQgPyB7fSA6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5uZXV0cmFsMCxcbiAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgICBib3hTaGFkb3c6ICcwIDAgMCAxcHggaHNsYSgwLCAwJSwgMCUsIDAuMSksIDAgNHB4IDExcHggaHNsYSgwLCAwJSwgMCUsIDAuMSknLFxuICAgIG1hcmdpbkJvdHRvbTogc3BhY2luZy5tZW51R3V0dGVyLFxuICAgIG1hcmdpblRvcDogc3BhY2luZy5tZW51R3V0dGVyXG4gIH0pO1xufTtcbnZhciBQb3J0YWxQbGFjZW1lbnRDb250ZXh0ID0gLyojX19QVVJFX18qL2NyZWF0ZUNvbnRleHQobnVsbCk7XG5cbi8vIE5PVEU6IGludGVybmFsIG9ubHlcbnZhciBNZW51UGxhY2VyID0gZnVuY3Rpb24gTWVudVBsYWNlcihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICBtaW5NZW51SGVpZ2h0ID0gcHJvcHMubWluTWVudUhlaWdodCxcbiAgICBtYXhNZW51SGVpZ2h0ID0gcHJvcHMubWF4TWVudUhlaWdodCxcbiAgICBtZW51UGxhY2VtZW50ID0gcHJvcHMubWVudVBsYWNlbWVudCxcbiAgICBtZW51UG9zaXRpb24gPSBwcm9wcy5tZW51UG9zaXRpb24sXG4gICAgbWVudVNob3VsZFNjcm9sbEludG9WaWV3ID0gcHJvcHMubWVudVNob3VsZFNjcm9sbEludG9WaWV3LFxuICAgIHRoZW1lID0gcHJvcHMudGhlbWU7XG4gIHZhciBfcmVmMyA9IHVzZUNvbnRleHQoUG9ydGFsUGxhY2VtZW50Q29udGV4dCkgfHwge30sXG4gICAgc2V0UG9ydGFsUGxhY2VtZW50ID0gX3JlZjMuc2V0UG9ydGFsUGxhY2VtZW50O1xuICB2YXIgcmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUobWF4TWVudUhlaWdodCksXG4gICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgbWF4SGVpZ2h0ID0gX3VzZVN0YXRlMlswXSxcbiAgICBzZXRNYXhIZWlnaHQgPSBfdXNlU3RhdGUyWzFdO1xuICB2YXIgX3VzZVN0YXRlMyA9IHVzZVN0YXRlKG51bGwpLFxuICAgIF91c2VTdGF0ZTQgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUzLCAyKSxcbiAgICBwbGFjZW1lbnQgPSBfdXNlU3RhdGU0WzBdLFxuICAgIHNldFBsYWNlbWVudCA9IF91c2VTdGF0ZTRbMV07XG4gIHZhciBjb250cm9sSGVpZ2h0ID0gdGhlbWUuc3BhY2luZy5jb250cm9sSGVpZ2h0O1xuICB1c2VMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBtZW51RWwgPSByZWYuY3VycmVudDtcbiAgICBpZiAoIW1lbnVFbCkgcmV0dXJuO1xuXG4gICAgLy8gRE8gTk9UIHNjcm9sbCBpZiBwb3NpdGlvbiBpcyBmaXhlZFxuICAgIHZhciBpc0ZpeGVkUG9zaXRpb24gPSBtZW51UG9zaXRpb24gPT09ICdmaXhlZCc7XG4gICAgdmFyIHNob3VsZFNjcm9sbCA9IG1lbnVTaG91bGRTY3JvbGxJbnRvVmlldyAmJiAhaXNGaXhlZFBvc2l0aW9uO1xuICAgIHZhciBzdGF0ZSA9IGdldE1lbnVQbGFjZW1lbnQoe1xuICAgICAgbWF4SGVpZ2h0OiBtYXhNZW51SGVpZ2h0LFxuICAgICAgbWVudUVsOiBtZW51RWwsXG4gICAgICBtaW5IZWlnaHQ6IG1pbk1lbnVIZWlnaHQsXG4gICAgICBwbGFjZW1lbnQ6IG1lbnVQbGFjZW1lbnQsXG4gICAgICBzaG91bGRTY3JvbGw6IHNob3VsZFNjcm9sbCxcbiAgICAgIGlzRml4ZWRQb3NpdGlvbjogaXNGaXhlZFBvc2l0aW9uLFxuICAgICAgY29udHJvbEhlaWdodDogY29udHJvbEhlaWdodFxuICAgIH0pO1xuICAgIHNldE1heEhlaWdodChzdGF0ZS5tYXhIZWlnaHQpO1xuICAgIHNldFBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICAgIHNldFBvcnRhbFBsYWNlbWVudCA9PT0gbnVsbCB8fCBzZXRQb3J0YWxQbGFjZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNldFBvcnRhbFBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB9LCBbbWF4TWVudUhlaWdodCwgbWVudVBsYWNlbWVudCwgbWVudVBvc2l0aW9uLCBtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcsIG1pbk1lbnVIZWlnaHQsIHNldFBvcnRhbFBsYWNlbWVudCwgY29udHJvbEhlaWdodF0pO1xuICByZXR1cm4gY2hpbGRyZW4oe1xuICAgIHJlZjogcmVmLFxuICAgIHBsYWNlclByb3BzOiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHByb3BzKSwge30sIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50IHx8IGNvZXJjZVBsYWNlbWVudChtZW51UGxhY2VtZW50KSxcbiAgICAgIG1heEhlaWdodDogbWF4SGVpZ2h0XG4gICAgfSlcbiAgfSk7XG59O1xudmFyIE1lbnUgPSBmdW5jdGlvbiBNZW51KHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe30sIGdldFN0eWxlUHJvcHMocHJvcHMsICdtZW51Jywge1xuICAgIG1lbnU6IHRydWVcbiAgfSksIHtcbiAgICByZWY6IGlubmVyUmVmXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xudmFyIE1lbnUkMSA9IE1lbnU7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTWVudSBMaXN0XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIG1lbnVMaXN0Q1NTID0gZnVuY3Rpb24gbWVudUxpc3RDU1MoX3JlZjQsIHVuc3R5bGVkKSB7XG4gIHZhciBtYXhIZWlnaHQgPSBfcmVmNC5tYXhIZWlnaHQsXG4gICAgYmFzZVVuaXQgPSBfcmVmNC50aGVtZS5zcGFjaW5nLmJhc2VVbml0O1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHQsXG4gICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgLy8gcmVxdWlyZWQgZm9yIG9mZnNldFtIZWlnaHQsIFRvcF0gPiBrZXlib2FyZCBzY3JvbGxcbiAgICBXZWJraXRPdmVyZmxvd1Njcm9sbGluZzogJ3RvdWNoJ1xuICB9LCB1bnN0eWxlZCA/IHt9IDoge1xuICAgIHBhZGRpbmdCb3R0b206IGJhc2VVbml0LFxuICAgIHBhZGRpbmdUb3A6IGJhc2VVbml0XG4gIH0pO1xufTtcbnZhciBNZW51TGlzdCA9IGZ1bmN0aW9uIE1lbnVMaXN0KHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzLFxuICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgaXNNdWx0aSA9IHByb3BzLmlzTXVsdGk7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe30sIGdldFN0eWxlUHJvcHMocHJvcHMsICdtZW51TGlzdCcsIHtcbiAgICAnbWVudS1saXN0JzogdHJ1ZSxcbiAgICAnbWVudS1saXN0LS1pcy1tdWx0aSc6IGlzTXVsdGlcbiAgfSksIHtcbiAgICByZWY6IGlubmVyUmVmXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lbnUgTm90aWNlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBub3RpY2VDU1MgPSBmdW5jdGlvbiBub3RpY2VDU1MoX3JlZjUsIHVuc3R5bGVkKSB7XG4gIHZhciBfcmVmNSR0aGVtZSA9IF9yZWY1LnRoZW1lLFxuICAgIGJhc2VVbml0ID0gX3JlZjUkdGhlbWUuc3BhY2luZy5iYXNlVW5pdCxcbiAgICBjb2xvcnMgPSBfcmVmNSR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gIH0sIHVuc3R5bGVkID8ge30gOiB7XG4gICAgY29sb3I6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgcGFkZGluZzogXCJcIi5jb25jYXQoYmFzZVVuaXQgKiAyLCBcInB4IFwiKS5jb25jYXQoYmFzZVVuaXQgKiAzLCBcInB4XCIpXG4gIH0pO1xufTtcbnZhciBub09wdGlvbnNNZXNzYWdlQ1NTID0gbm90aWNlQ1NTO1xudmFyIGxvYWRpbmdNZXNzYWdlQ1NTID0gbm90aWNlQ1NTO1xudmFyIE5vT3B0aW9uc01lc3NhZ2UgPSBmdW5jdGlvbiBOb09wdGlvbnNNZXNzYWdlKF9yZWY2KSB7XG4gIHZhciBfcmVmNiRjaGlsZHJlbiA9IF9yZWY2LmNoaWxkcmVuLFxuICAgIGNoaWxkcmVuID0gX3JlZjYkY2hpbGRyZW4gPT09IHZvaWQgMCA/ICdObyBvcHRpb25zJyA6IF9yZWY2JGNoaWxkcmVuLFxuICAgIGlubmVyUHJvcHMgPSBfcmVmNi5pbm5lclByb3BzLFxuICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmNiwgX2V4Y2x1ZGVkJDMpO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBnZXRTdHlsZVByb3BzKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcmVzdFByb3BzKSwge30sIHtcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgaW5uZXJQcm9wczogaW5uZXJQcm9wc1xuICB9KSwgJ25vT3B0aW9uc01lc3NhZ2UnLCB7XG4gICAgJ21lbnUtbm90aWNlJzogdHJ1ZSxcbiAgICAnbWVudS1ub3RpY2UtLW5vLW9wdGlvbnMnOiB0cnVlXG4gIH0pLCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcbnZhciBMb2FkaW5nTWVzc2FnZSA9IGZ1bmN0aW9uIExvYWRpbmdNZXNzYWdlKF9yZWY3KSB7XG4gIHZhciBfcmVmNyRjaGlsZHJlbiA9IF9yZWY3LmNoaWxkcmVuLFxuICAgIGNoaWxkcmVuID0gX3JlZjckY2hpbGRyZW4gPT09IHZvaWQgMCA/ICdMb2FkaW5nLi4uJyA6IF9yZWY3JGNoaWxkcmVuLFxuICAgIGlubmVyUHJvcHMgPSBfcmVmNy5pbm5lclByb3BzLFxuICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmNywgX2V4Y2x1ZGVkMiQxKTtcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgZ2V0U3R5bGVQcm9wcyhfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHJlc3RQcm9wcyksIHt9LCB7XG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGlubmVyUHJvcHM6IGlubmVyUHJvcHNcbiAgfSksICdsb2FkaW5nTWVzc2FnZScsIHtcbiAgICAnbWVudS1ub3RpY2UnOiB0cnVlLFxuICAgICdtZW51LW5vdGljZS0tbG9hZGluZyc6IHRydWVcbiAgfSksIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lbnUgUG9ydGFsXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIG1lbnVQb3J0YWxDU1MgPSBmdW5jdGlvbiBtZW51UG9ydGFsQ1NTKF9yZWY4KSB7XG4gIHZhciByZWN0ID0gX3JlZjgucmVjdCxcbiAgICBvZmZzZXQgPSBfcmVmOC5vZmZzZXQsXG4gICAgcG9zaXRpb24gPSBfcmVmOC5wb3NpdGlvbjtcbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgIHRvcDogb2Zmc2V0LFxuICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgIHpJbmRleDogMVxuICB9O1xufTtcbnZhciBNZW51UG9ydGFsID0gZnVuY3Rpb24gTWVudVBvcnRhbChwcm9wcykge1xuICB2YXIgYXBwZW5kVG8gPSBwcm9wcy5hcHBlbmRUbyxcbiAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgIGNvbnRyb2xFbGVtZW50ID0gcHJvcHMuY29udHJvbEVsZW1lbnQsXG4gICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgbWVudVBsYWNlbWVudCA9IHByb3BzLm1lbnVQbGFjZW1lbnQsXG4gICAgbWVudVBvc2l0aW9uID0gcHJvcHMubWVudVBvc2l0aW9uO1xuICB2YXIgbWVudVBvcnRhbFJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIGNsZWFudXBSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBfdXNlU3RhdGU1ID0gdXNlU3RhdGUoY29lcmNlUGxhY2VtZW50KG1lbnVQbGFjZW1lbnQpKSxcbiAgICBfdXNlU3RhdGU2ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlNSwgMiksXG4gICAgcGxhY2VtZW50ID0gX3VzZVN0YXRlNlswXSxcbiAgICBzZXRQb3J0YWxQbGFjZW1lbnQgPSBfdXNlU3RhdGU2WzFdO1xuICB2YXIgcG9ydGFsUGxhY2VtZW50Q29udGV4dCA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzZXRQb3J0YWxQbGFjZW1lbnQ6IHNldFBvcnRhbFBsYWNlbWVudFxuICAgIH07XG4gIH0sIFtdKTtcbiAgdmFyIF91c2VTdGF0ZTcgPSB1c2VTdGF0ZShudWxsKSxcbiAgICBfdXNlU3RhdGU4ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlNywgMiksXG4gICAgY29tcHV0ZWRQb3NpdGlvbiA9IF91c2VTdGF0ZThbMF0sXG4gICAgc2V0Q29tcHV0ZWRQb3NpdGlvbiA9IF91c2VTdGF0ZThbMV07XG4gIHZhciB1cGRhdGVDb21wdXRlZFBvc2l0aW9uID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGlmICghY29udHJvbEVsZW1lbnQpIHJldHVybjtcbiAgICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50T2JqKGNvbnRyb2xFbGVtZW50KTtcbiAgICB2YXIgc2Nyb2xsRGlzdGFuY2UgPSBtZW51UG9zaXRpb24gPT09ICdmaXhlZCcgPyAwIDogd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIHZhciBvZmZzZXQgPSByZWN0W3BsYWNlbWVudF0gKyBzY3JvbGxEaXN0YW5jZTtcbiAgICBpZiAob2Zmc2V0ICE9PSAoY29tcHV0ZWRQb3NpdGlvbiA9PT0gbnVsbCB8fCBjb21wdXRlZFBvc2l0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb21wdXRlZFBvc2l0aW9uLm9mZnNldCkgfHwgcmVjdC5sZWZ0ICE9PSAoY29tcHV0ZWRQb3NpdGlvbiA9PT0gbnVsbCB8fCBjb21wdXRlZFBvc2l0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb21wdXRlZFBvc2l0aW9uLnJlY3QubGVmdCkgfHwgcmVjdC53aWR0aCAhPT0gKGNvbXB1dGVkUG9zaXRpb24gPT09IG51bGwgfHwgY29tcHV0ZWRQb3NpdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29tcHV0ZWRQb3NpdGlvbi5yZWN0LndpZHRoKSkge1xuICAgICAgc2V0Q29tcHV0ZWRQb3NpdGlvbih7XG4gICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICByZWN0OiByZWN0XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtjb250cm9sRWxlbWVudCwgbWVudVBvc2l0aW9uLCBwbGFjZW1lbnQsIGNvbXB1dGVkUG9zaXRpb24gPT09IG51bGwgfHwgY29tcHV0ZWRQb3NpdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29tcHV0ZWRQb3NpdGlvbi5vZmZzZXQsIGNvbXB1dGVkUG9zaXRpb24gPT09IG51bGwgfHwgY29tcHV0ZWRQb3NpdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29tcHV0ZWRQb3NpdGlvbi5yZWN0LmxlZnQsIGNvbXB1dGVkUG9zaXRpb24gPT09IG51bGwgfHwgY29tcHV0ZWRQb3NpdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29tcHV0ZWRQb3NpdGlvbi5yZWN0LndpZHRoXSk7XG4gIHVzZUxheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdXBkYXRlQ29tcHV0ZWRQb3NpdGlvbigpO1xuICB9LCBbdXBkYXRlQ29tcHV0ZWRQb3NpdGlvbl0pO1xuICB2YXIgcnVuQXV0b1VwZGF0ZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodHlwZW9mIGNsZWFudXBSZWYuY3VycmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2xlYW51cFJlZi5jdXJyZW50KCk7XG4gICAgICBjbGVhbnVwUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgIH1cbiAgICBpZiAoY29udHJvbEVsZW1lbnQgJiYgbWVudVBvcnRhbFJlZi5jdXJyZW50KSB7XG4gICAgICBjbGVhbnVwUmVmLmN1cnJlbnQgPSBhdXRvVXBkYXRlKGNvbnRyb2xFbGVtZW50LCBtZW51UG9ydGFsUmVmLmN1cnJlbnQsIHVwZGF0ZUNvbXB1dGVkUG9zaXRpb24sIHtcbiAgICAgICAgZWxlbWVudFJlc2l6ZTogJ1Jlc2l6ZU9ic2VydmVyJyBpbiB3aW5kb3dcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2NvbnRyb2xFbGVtZW50LCB1cGRhdGVDb21wdXRlZFBvc2l0aW9uXSk7XG4gIHVzZUxheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcnVuQXV0b1VwZGF0ZSgpO1xuICB9LCBbcnVuQXV0b1VwZGF0ZV0pO1xuICB2YXIgc2V0TWVudVBvcnRhbEVsZW1lbnQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobWVudVBvcnRhbEVsZW1lbnQpIHtcbiAgICBtZW51UG9ydGFsUmVmLmN1cnJlbnQgPSBtZW51UG9ydGFsRWxlbWVudDtcbiAgICBydW5BdXRvVXBkYXRlKCk7XG4gIH0sIFtydW5BdXRvVXBkYXRlXSk7XG5cbiAgLy8gYmFpbCBlYXJseSBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmVuJ3QgcHJlc2VudFxuICBpZiAoIWFwcGVuZFRvICYmIG1lbnVQb3NpdGlvbiAhPT0gJ2ZpeGVkJyB8fCAhY29tcHV0ZWRQb3NpdGlvbikgcmV0dXJuIG51bGw7XG5cbiAgLy8gc2FtZSB3cmFwcGVyIGVsZW1lbnQgd2hldGhlciBmaXhlZCBvciBwb3J0YWxsZWRcbiAgdmFyIG1lbnVXcmFwcGVyID0ganN4KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICByZWY6IHNldE1lbnVQb3J0YWxFbGVtZW50XG4gIH0sIGdldFN0eWxlUHJvcHMoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBwcm9wcyksIHt9LCB7XG4gICAgb2Zmc2V0OiBjb21wdXRlZFBvc2l0aW9uLm9mZnNldCxcbiAgICBwb3NpdGlvbjogbWVudVBvc2l0aW9uLFxuICAgIHJlY3Q6IGNvbXB1dGVkUG9zaXRpb24ucmVjdFxuICB9KSwgJ21lbnVQb3J0YWwnLCB7XG4gICAgJ21lbnUtcG9ydGFsJzogdHJ1ZVxuICB9KSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuKTtcbiAgcmV0dXJuIGpzeChQb3J0YWxQbGFjZW1lbnRDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHBvcnRhbFBsYWNlbWVudENvbnRleHRcbiAgfSwgYXBwZW5kVG8gPyAvKiNfX1BVUkVfXyovY3JlYXRlUG9ydGFsKG1lbnVXcmFwcGVyLCBhcHBlbmRUbykgOiBtZW51V3JhcHBlcik7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJvb3QgQ29udGFpbmVyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGNvbnRhaW5lckNTUyA9IGZ1bmN0aW9uIGNvbnRhaW5lckNTUyhfcmVmKSB7XG4gIHZhciBpc0Rpc2FibGVkID0gX3JlZi5pc0Rpc2FibGVkLFxuICAgIGlzUnRsID0gX3JlZi5pc1J0bDtcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ2NvbnRhaW5lcicsXG4gICAgZGlyZWN0aW9uOiBpc1J0bCA/ICdydGwnIDogdW5kZWZpbmVkLFxuICAgIHBvaW50ZXJFdmVudHM6IGlzRGlzYWJsZWQgPyAnbm9uZScgOiB1bmRlZmluZWQsXG4gICAgLy8gY2FuY2VsIG1vdXNlIGV2ZW50cyB3aGVuIGRpc2FibGVkXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfTtcbn07XG52YXIgU2VsZWN0Q29udGFpbmVyID0gZnVuY3Rpb24gU2VsZWN0Q29udGFpbmVyKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzLFxuICAgIGlzRGlzYWJsZWQgPSBwcm9wcy5pc0Rpc2FibGVkLFxuICAgIGlzUnRsID0gcHJvcHMuaXNSdGw7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe30sIGdldFN0eWxlUHJvcHMocHJvcHMsICdjb250YWluZXInLCB7XG4gICAgJy0taXMtZGlzYWJsZWQnOiBpc0Rpc2FibGVkLFxuICAgICctLWlzLXJ0bCc6IGlzUnRsXG4gIH0pLCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBWYWx1ZSBDb250YWluZXJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgdmFsdWVDb250YWluZXJDU1MgPSBmdW5jdGlvbiB2YWx1ZUNvbnRhaW5lckNTUyhfcmVmMiwgdW5zdHlsZWQpIHtcbiAgdmFyIHNwYWNpbmcgPSBfcmVmMi50aGVtZS5zcGFjaW5nLFxuICAgIGlzTXVsdGkgPSBfcmVmMi5pc011bHRpLFxuICAgIGhhc1ZhbHVlID0gX3JlZjIuaGFzVmFsdWUsXG4gICAgY29udHJvbFNob3VsZFJlbmRlclZhbHVlID0gX3JlZjIuc2VsZWN0UHJvcHMuY29udHJvbFNob3VsZFJlbmRlclZhbHVlO1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgZGlzcGxheTogaXNNdWx0aSAmJiBoYXNWYWx1ZSAmJiBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWUgPyAnZmxleCcgOiAnZ3JpZCcsXG4gICAgZmxleDogMSxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiAndG91Y2gnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9LCB1bnN0eWxlZCA/IHt9IDoge1xuICAgIHBhZGRpbmc6IFwiXCIuY29uY2F0KHNwYWNpbmcuYmFzZVVuaXQgLyAyLCBcInB4IFwiKS5jb25jYXQoc3BhY2luZy5iYXNlVW5pdCAqIDIsIFwicHhcIilcbiAgfSk7XG59O1xudmFyIFZhbHVlQ29udGFpbmVyID0gZnVuY3Rpb24gVmFsdWVDb250YWluZXIocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgaXNNdWx0aSA9IHByb3BzLmlzTXVsdGksXG4gICAgaGFzVmFsdWUgPSBwcm9wcy5oYXNWYWx1ZTtcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ3ZhbHVlQ29udGFpbmVyJywge1xuICAgICd2YWx1ZS1jb250YWluZXInOiB0cnVlLFxuICAgICd2YWx1ZS1jb250YWluZXItLWlzLW11bHRpJzogaXNNdWx0aSxcbiAgICAndmFsdWUtY29udGFpbmVyLS1oYXMtdmFsdWUnOiBoYXNWYWx1ZVxuICB9KSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSW5kaWNhdG9yIENvbnRhaW5lclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBpbmRpY2F0b3JzQ29udGFpbmVyQ1NTID0gZnVuY3Rpb24gaW5kaWNhdG9yc0NvbnRhaW5lckNTUygpIHtcbiAgcmV0dXJuIHtcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFNocmluazogMFxuICB9O1xufTtcbnZhciBJbmRpY2F0b3JzQ29udGFpbmVyID0gZnVuY3Rpb24gSW5kaWNhdG9yc0NvbnRhaW5lcihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2luZGljYXRvcnNDb250YWluZXInLCB7XG4gICAgaW5kaWNhdG9yczogdHJ1ZVxuICB9KSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuKTtcbn07XG5cbnZhciBfdGVtcGxhdGVPYmplY3Q7XG52YXIgX2V4Y2x1ZGVkJDIgPSBbXCJzaXplXCJdLFxuICBfZXhjbHVkZWQyID0gW1wiaW5uZXJQcm9wc1wiLCBcImlzUnRsXCIsIFwic2l6ZVwiXTtcbmZ1bmN0aW9uIF9FTU9USU9OX1NUUklOR0lGSUVEX0NTU19FUlJPUl9fKCkgeyByZXR1cm4gXCJZb3UgaGF2ZSB0cmllZCB0byBzdHJpbmdpZnkgb2JqZWN0IHJldHVybmVkIGZyb20gYGNzc2AgZnVuY3Rpb24uIEl0IGlzbid0IHN1cHBvc2VkIHRvIGJlIHVzZWQgZGlyZWN0bHkgKGUuZy4gYXMgdmFsdWUgb2YgdGhlIGBjbGFzc05hbWVgIHByb3ApLCBidXQgcmF0aGVyIGhhbmRlZCB0byBlbW90aW9uIHNvIGl0IGNhbiBoYW5kbGUgaXQgKGUuZy4gYXMgdmFsdWUgb2YgYGNzc2AgcHJvcCkuXCI7IH1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnZhciBfcmVmMiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgbmFtZTogXCI4bW1rY2dcIixcbiAgc3R5bGVzOiBcImRpc3BsYXk6aW5saW5lLWJsb2NrO2ZpbGw6Y3VycmVudENvbG9yO2xpbmUtaGVpZ2h0OjE7c3Ryb2tlOmN1cnJlbnRDb2xvcjtzdHJva2Utd2lkdGg6MFwiXG59IDoge1xuICBuYW1lOiBcInRqNWJkZS1TdmdcIixcbiAgc3R5bGVzOiBcImRpc3BsYXk6aW5saW5lLWJsb2NrO2ZpbGw6Y3VycmVudENvbG9yO2xpbmUtaGVpZ2h0OjE7c3Ryb2tlOmN1cnJlbnRDb2xvcjtzdHJva2Utd2lkdGg6MDtsYWJlbDpTdmc7XCIsXG4gIG1hcDogXCIvKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWx1WkdsallYUnZjbk11ZEhONElsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFYbENTU0lzSW1acGJHVWlPaUpwYm1ScFkyRjBiM0p6TG5SemVDSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxS2lCQWFuTjRJR3B6ZUNBcUwxeHVhVzF3YjNKMElIc2dTbE5ZTENCU1pXRmpkRTV2WkdVZ2ZTQm1jbTl0SUNkeVpXRmpkQ2M3WEc1cGJYQnZjblFnZXlCcWMzZ3NJR3RsZVdaeVlXMWxjeUI5SUdaeWIyMGdKMEJsYlc5MGFXOXVMM0psWVdOMEp6dGNibHh1YVcxd2IzSjBJSHRjYmlBZ1EyOXRiVzl1VUhKdmNITkJibVJEYkdGemMwNWhiV1VzWEc0Z0lFTlRVMDlpYW1WamRGZHBkR2hNWVdKbGJDeGNiaUFnUjNKdmRYQkNZWE5sTEZ4dWZTQm1jbTl0SUNjdUxpOTBlWEJsY3ljN1hHNXBiWEJ2Y25RZ2V5Qm5aWFJUZEhsc1pWQnliM0J6SUgwZ1puSnZiU0FuTGk0dmRYUnBiSE1uTzF4dVhHNHZMeUE5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2JpOHZJRVJ5YjNCa2IzZHVJQ1lnUTJ4bFlYSWdTV052Ym5OY2JpOHZJRDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFZ4dVhHNWpiMjV6ZENCVGRtY2dQU0FvZTF4dUlDQnphWHBsTEZ4dUlDQXVMaTV3Y205d2MxeHVmVG9nU2xOWUxrbHVkSEpwYm5OcFkwVnNaVzFsYm5Seld5ZHpkbWNuWFNBbUlIc2djMmw2WlRvZ2JuVnRZbVZ5SUgwcElEMCtJQ2hjYmlBZ1BITjJaMXh1SUNBZ0lHaGxhV2RvZEQxN2MybDZaWDFjYmlBZ0lDQjNhV1IwYUQxN2MybDZaWDFjYmlBZ0lDQjJhV1YzUW05NFBWd2lNQ0F3SURJd0lESXdYQ0pjYmlBZ0lDQmhjbWxoTFdocFpHUmxiajFjSW5SeWRXVmNJbHh1SUNBZ0lHWnZZM1Z6WVdKc1pUMWNJbVpoYkhObFhDSmNiaUFnSUNCamMzTTllM3RjYmlBZ0lDQWdJR1JwYzNCc1lYazZJQ2RwYm14cGJtVXRZbXh2WTJzbkxGeHVJQ0FnSUNBZ1ptbHNiRG9nSjJOMWNuSmxiblJEYjJ4dmNpY3NYRzRnSUNBZ0lDQnNhVzVsU0dWcFoyaDBPaUF4TEZ4dUlDQWdJQ0FnYzNSeWIydGxPaUFuWTNWeWNtVnVkRU52Ykc5eUp5eGNiaUFnSUNBZ0lITjBjbTlyWlZkcFpIUm9PaUF3TEZ4dUlDQWdJSDE5WEc0Z0lDQWdleTR1TG5CeWIzQnpmVnh1SUNBdlBseHVLVHRjYmx4dVpYaHdiM0owSUhSNWNHVWdRM0p2YzNOSlkyOXVVSEp2Y0hNZ1BTQktVMWd1U1c1MGNtbHVjMmxqUld4bGJXVnVkSE5iSjNOMlp5ZGRJQ1lnZXlCemFYcGxQem9nYm5WdFltVnlJSDA3WEc1bGVIQnZjblFnWTI5dWMzUWdRM0p2YzNOSlkyOXVJRDBnS0hCeWIzQnpPaUJEY205emMwbGpiMjVRY205d2N5a2dQVDRnS0Z4dUlDQThVM1puSUhOcGVtVTllekl3ZlNCN0xpNHVjSEp2Y0hOOVBseHVJQ0FnSUR4d1lYUm9JR1E5WENKTk1UUXVNelE0SURFMExqZzBPV010TUM0ME5qa2dNQzQwTmprdE1TNHlNamtnTUM0ME5qa3RNUzQyT1RjZ01Hd3RNaTQyTlRFdE15NHdNekF0TWk0Mk5URWdNeTR3TWpsakxUQXVORFk1SURBdU5EWTVMVEV1TWpJNUlEQXVORFk1TFRFdU5qazNJREF0TUM0ME5qa3RNQzQwTmprdE1DNDBOamt0TVM0eU1qa2dNQzB4TGpZNU4yd3lMamMxT0MwekxqRTFMVEl1TnpVNUxUTXVNVFV5WXkwd0xqUTJPUzB3TGpRMk9TMHdMalEyT1MweExqSXlPQ0F3TFRFdU5qazNjekV1TWpJNExUQXVORFk1SURFdU5qazNJREJzTWk0Mk5USWdNeTR3TXpFZ01pNDJOVEV0TXk0d016RmpNQzQwTmprdE1DNDBOamtnTVM0eU1qZ3RNQzQwTmprZ01TNDJPVGNnTUhNd0xqUTJPU0F4TGpJeU9TQXdJREV1TmprM2JDMHlMamMxT0NBekxqRTFNaUF5TGpjMU9DQXpMakUxWXpBdU5EWTVJREF1TkRZNUlEQXVORFk1SURFdU1qSTVJREFnTVM0Mk9UaDZYQ0lnTHo1Y2JpQWdQQzlUZG1jK1hHNHBPMXh1Wlhod2IzSjBJSFI1Y0dVZ1JHOTNia05vWlhaeWIyNVFjbTl3Y3lBOUlFcFRXQzVKYm5SeWFXNXphV05GYkdWdFpXNTBjMXNuYzNabkoxMGdKaUI3SUhOcGVtVS9PaUJ1ZFcxaVpYSWdmVHRjYm1WNGNHOXlkQ0JqYjI1emRDQkViM2R1UTJobGRuSnZiaUE5SUNod2NtOXdjem9nUkc5M2JrTm9aWFp5YjI1UWNtOXdjeWtnUFQ0Z0tGeHVJQ0E4VTNabklITnBlbVU5ZXpJd2ZTQjdMaTR1Y0hKdmNITjlQbHh1SUNBZ0lEeHdZWFJvSUdROVhDSk5OQzQxTVRZZ055NDFORGhqTUM0ME16WXRNQzQwTkRZZ01TNHdORE10TUM0ME9ERWdNUzQxTnpZZ01Hd3pMamt3T0NBekxqYzBOeUF6TGprd09DMHpMamMwTjJNd0xqVXpNeTB3TGpRNE1TQXhMakUwTVMwd0xqUTBOaUF4TGpVM05DQXdJREF1TkRNMklEQXVORFExSURBdU5EQTRJREV1TVRrM0lEQWdNUzQyTVRVdE1DNDBNRFlnTUM0ME1UZ3ROQzQyT1RVZ05DNDFNREl0TkM0Mk9UVWdOQzQxTURJdE1DNHlNVGNnTUM0eU1qTXRNQzQxTURJZ01DNHpNelV0TUM0M09EY2dNQzR6TXpWekxUQXVOVGN0TUM0eE1USXRNQzQzT0RrdE1DNHpNelZqTUNBd0xUUXVNamczTFRRdU1EZzBMVFF1TmprMUxUUXVOVEF5Y3kwd0xqUXpOaTB4TGpFM0lEQXRNUzQyTVRWNlhDSWdMejVjYmlBZ1BDOVRkbWMrWEc0cE8xeHVYRzR2THlBOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNiaTh2SUVSeWIzQmtiM2R1SUNZZ1EyeGxZWElnUW5WMGRHOXVjMXh1THk4Z1BUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYRzVjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnUkhKdmNHUnZkMjVKYm1ScFkyRjBiM0pRY205d2N6eGNiaUFnVDNCMGFXOXVJRDBnZFc1cmJtOTNiaXhjYmlBZ1NYTk5kV3gwYVNCbGVIUmxibVJ6SUdKdmIyeGxZVzRnUFNCaWIyOXNaV0Z1TEZ4dUlDQkhjbTkxY0NCbGVIUmxibVJ6SUVkeWIzVndRbUZ6WlR4UGNIUnBiMjQrSUQwZ1IzSnZkWEJDWVhObFBFOXdkR2x2Ymo1Y2JqNGdaWGgwWlc1a2N5QkRiMjF0YjI1UWNtOXdjMEZ1WkVOc1lYTnpUbUZ0WlR4UGNIUnBiMjRzSUVselRYVnNkR2tzSUVkeWIzVndQaUI3WEc0Z0lDOHFLaUJVYUdVZ1kyaHBiR1J5Wlc0Z2RHOGdZbVVnY21WdVpHVnlaV1FnYVc1emFXUmxJSFJvWlNCcGJtUnBZMkYwYjNJdUlDb3ZYRzRnSUdOb2FXeGtjbVZ1UHpvZ1VtVmhZM1JPYjJSbE8xeHVJQ0F2S2lvZ1VISnZjSE1nZEdoaGRDQjNhV3hzSUdKbElIQmhjM05sWkNCdmJpQjBieUIwYUdVZ1kyaHBiR1J5Wlc0dUlDb3ZYRzRnSUdsdWJtVnlVSEp2Y0hNNklFcFRXQzVKYm5SeWFXNXphV05GYkdWdFpXNTBjMXNuWkdsMkoxMDdYRzRnSUM4cUtpQlVhR1VnWm05amRYTmxaQ0J6ZEdGMFpTQnZaaUIwYUdVZ2MyVnNaV04wTGlBcUwxeHVJQ0JwYzBadlkzVnpaV1E2SUdKdmIyeGxZVzQ3WEc0Z0lHbHpSR2x6WVdKc1pXUTZJR0p2YjJ4bFlXNDdYRzU5WEc1Y2JtTnZibk4wSUdKaGMyVkRVMU1nUFNBOFhHNGdJRTl3ZEdsdmJpeGNiaUFnU1hOTmRXeDBhU0JsZUhSbGJtUnpJR0p2YjJ4bFlXNHNYRzRnSUVkeWIzVndJR1Y0ZEdWdVpITWdSM0p2ZFhCQ1lYTmxQRTl3ZEdsdmJqNWNiajRvWEc0Z0lIdGNiaUFnSUNCcGMwWnZZM1Z6WldRc1hHNGdJQ0FnZEdobGJXVTZJSHRjYmlBZ0lDQWdJSE53WVdOcGJtYzZJSHNnWW1GelpWVnVhWFFnZlN4Y2JpQWdJQ0FnSUdOdmJHOXljeXhjYmlBZ0lDQjlMRnh1SUNCOU9seHVJQ0FnSUh3Z1JISnZjR1J2ZDI1SmJtUnBZMkYwYjNKUWNtOXdjenhQY0hScGIyNHNJRWx6VFhWc2RHa3NJRWR5YjNWd1BseHVJQ0FnSUh3Z1EyeGxZWEpKYm1ScFkyRjBiM0pRY205d2N6eFBjSFJwYjI0c0lFbHpUWFZzZEdrc0lFZHliM1Z3UGl4Y2JpQWdkVzV6ZEhsc1pXUTZJR0p2YjJ4bFlXNWNiaWs2SUVOVFUwOWlhbVZqZEZkcGRHaE1ZV0psYkNBOVBpQW9lMXh1SUNCc1lXSmxiRG9nSjJsdVpHbGpZWFJ2Y2tOdmJuUmhhVzVsY2ljc1hHNGdJR1JwYzNCc1lYazZJQ2RtYkdWNEp5eGNiaUFnZEhKaGJuTnBkR2x2YmpvZ0oyTnZiRzl5SURFMU1HMXpKeXhjYmlBZ0xpNHVLSFZ1YzNSNWJHVmtYRzRnSUNBZ1B5QjdmVnh1SUNBZ0lEb2dlMXh1SUNBZ0lDQWdJQ0JqYjJ4dmNqb2dhWE5HYjJOMWMyVmtJRDhnWTI5c2IzSnpMbTVsZFhSeVlXdzJNQ0E2SUdOdmJHOXljeTV1WlhWMGNtRnNNakFzWEc0Z0lDQWdJQ0FnSUhCaFpHUnBibWM2SUdKaGMyVlZibWwwSUNvZ01peGNiaUFnSUNBZ0lDQWdKenBvYjNabGNpYzZJSHRjYmlBZ0lDQWdJQ0FnSUNCamIyeHZjam9nYVhOR2IyTjFjMlZrSUQ4Z1kyOXNiM0p6TG01bGRYUnlZV3c0TUNBNklHTnZiRzl5Y3k1dVpYVjBjbUZzTkRBc1hHNGdJQ0FnSUNBZ0lIMHNYRzRnSUNBZ0lDQjlLU3hjYm4wcE8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1pISnZjR1J2ZDI1SmJtUnBZMkYwYjNKRFUxTWdQU0JpWVhObFExTlRPMXh1Wlhod2IzSjBJR052Ym5OMElFUnliM0JrYjNkdVNXNWthV05oZEc5eUlEMGdQRnh1SUNCUGNIUnBiMjRzWEc0Z0lFbHpUWFZzZEdrZ1pYaDBaVzVrY3lCaWIyOXNaV0Z1TEZ4dUlDQkhjbTkxY0NCbGVIUmxibVJ6SUVkeWIzVndRbUZ6WlR4UGNIUnBiMjQrWEc0K0tGeHVJQ0J3Y205d2N6b2dSSEp2Y0dSdmQyNUpibVJwWTJGMGIzSlFjbTl3Y3p4UGNIUnBiMjRzSUVselRYVnNkR2tzSUVkeWIzVndQbHh1S1NBOVBpQjdYRzRnSUdOdmJuTjBJSHNnWTJocGJHUnlaVzRzSUdsdWJtVnlVSEp2Y0hNZ2ZTQTlJSEJ5YjNCek8xeHVJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lEeGthWFpjYmlBZ0lDQWdJSHN1TGk1blpYUlRkSGxzWlZCeWIzQnpLSEJ5YjNCekxDQW5aSEp2Y0dSdmQyNUpibVJwWTJGMGIzSW5MQ0I3WEc0Z0lDQWdJQ0FnSUdsdVpHbGpZWFJ2Y2pvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnSjJSeWIzQmtiM2R1TFdsdVpHbGpZWFJ2Y2ljNklIUnlkV1VzWEc0Z0lDQWdJQ0I5S1gxY2JpQWdJQ0FnSUhzdUxpNXBibTVsY2xCeWIzQnpmVnh1SUNBZ0lENWNiaUFnSUNBZ0lIdGphR2xzWkhKbGJpQjhmQ0E4Ukc5M2JrTm9aWFp5YjI0Z0x6NTlYRzRnSUNBZ1BDOWthWFkrWEc0Z0lDazdYRzU5TzF4dVhHNWxlSEJ2Y25RZ2FXNTBaWEptWVdObElFTnNaV0Z5U1c1a2FXTmhkRzl5VUhKdmNITThYRzRnSUU5d2RHbHZiaUE5SUhWdWEyNXZkMjRzWEc0Z0lFbHpUWFZzZEdrZ1pYaDBaVzVrY3lCaWIyOXNaV0Z1SUQwZ1ltOXZiR1ZoYml4Y2JpQWdSM0p2ZFhBZ1pYaDBaVzVrY3lCSGNtOTFjRUpoYzJVOFQzQjBhVzl1UGlBOUlFZHliM1Z3UW1GelpUeFBjSFJwYjI0K1hHNCtJR1Y0ZEdWdVpITWdRMjl0Ylc5dVVISnZjSE5CYm1SRGJHRnpjMDVoYldVOFQzQjBhVzl1TENCSmMwMTFiSFJwTENCSGNtOTFjRDRnZTF4dUlDQXZLaW9nVkdobElHTm9hV3hrY21WdUlIUnZJR0psSUhKbGJtUmxjbVZrSUdsdWMybGtaU0IwYUdVZ2FXNWthV05oZEc5eUxpQXFMMXh1SUNCamFHbHNaSEpsYmo4NklGSmxZV04wVG05a1pUdGNiaUFnTHlvcUlGQnliM0J6SUhSb1lYUWdkMmxzYkNCaVpTQndZWE56WldRZ2IyNGdkRzhnZEdobElHTm9hV3hrY21WdUxpQXFMMXh1SUNCcGJtNWxjbEJ5YjNCek9pQktVMWd1U1c1MGNtbHVjMmxqUld4bGJXVnVkSE5iSjJScGRpZGRPMXh1SUNBdktpb2dWR2hsSUdadlkzVnpaV1FnYzNSaGRHVWdiMllnZEdobElITmxiR1ZqZEM0Z0tpOWNiaUFnYVhOR2IyTjFjMlZrT2lCaWIyOXNaV0Z1TzF4dWZWeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyeGxZWEpKYm1ScFkyRjBiM0pEVTFNZ1BTQmlZWE5sUTFOVE8xeHVaWGh3YjNKMElHTnZibk4wSUVOc1pXRnlTVzVrYVdOaGRHOXlJRDBnUEZ4dUlDQlBjSFJwYjI0c1hHNGdJRWx6VFhWc2RHa2daWGgwWlc1a2N5QmliMjlzWldGdUxGeHVJQ0JIY205MWNDQmxlSFJsYm1SeklFZHliM1Z3UW1GelpUeFBjSFJwYjI0K1hHNCtLRnh1SUNCd2NtOXdjem9nUTJ4bFlYSkpibVJwWTJGMGIzSlFjbTl3Y3p4UGNIUnBiMjRzSUVselRYVnNkR2tzSUVkeWIzVndQbHh1S1NBOVBpQjdYRzRnSUdOdmJuTjBJSHNnWTJocGJHUnlaVzRzSUdsdWJtVnlVSEp2Y0hNZ2ZTQTlJSEJ5YjNCek8xeHVJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lEeGthWFpjYmlBZ0lDQWdJSHN1TGk1blpYUlRkSGxzWlZCeWIzQnpLSEJ5YjNCekxDQW5ZMnhsWVhKSmJtUnBZMkYwYjNJbkxDQjdYRzRnSUNBZ0lDQWdJR2x1WkdsallYUnZjam9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdKMk5zWldGeUxXbHVaR2xqWVhSdmNpYzZJSFJ5ZFdVc1hHNGdJQ0FnSUNCOUtYMWNiaUFnSUNBZ0lIc3VMaTVwYm01bGNsQnliM0J6ZlZ4dUlDQWdJRDVjYmlBZ0lDQWdJSHRqYUdsc1pISmxiaUI4ZkNBOFEzSnZjM05KWTI5dUlDOCtmVnh1SUNBZ0lEd3ZaR2wyUGx4dUlDQXBPMXh1ZlR0Y2JseHVMeThnUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhHNHZMeUJUWlhCaGNtRjBiM0pjYmk4dklEMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh1WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUVsdVpHbGpZWFJ2Y2xObGNHRnlZWFJ2Y2xCeWIzQnpQRnh1SUNCUGNIUnBiMjRnUFNCMWJtdHViM2R1TEZ4dUlDQkpjMDExYkhScElHVjRkR1Z1WkhNZ1ltOXZiR1ZoYmlBOUlHSnZiMnhsWVc0c1hHNGdJRWR5YjNWd0lHVjRkR1Z1WkhNZ1IzSnZkWEJDWVhObFBFOXdkR2x2Ymo0Z1BTQkhjbTkxY0VKaGMyVThUM0IwYVc5dVBseHVQaUJsZUhSbGJtUnpJRU52YlcxdmJsQnliM0J6UVc1a1EyeGhjM05PWVcxbFBFOXdkR2x2Yml3Z1NYTk5kV3gwYVN3Z1IzSnZkWEErSUh0Y2JpQWdhWE5FYVhOaFlteGxaRG9nWW05dmJHVmhianRjYmlBZ2FYTkdiMk4xYzJWa09pQmliMjlzWldGdU8xeHVJQ0JwYm01bGNsQnliM0J6UHpvZ1NsTllMa2x1ZEhKcGJuTnBZMFZzWlcxbGJuUnpXeWR6Y0dGdUoxMDdYRzU5WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYm1ScFkyRjBiM0pUWlhCaGNtRjBiM0pEVTFNZ1BTQThYRzRnSUU5d2RHbHZiaXhjYmlBZ1NYTk5kV3gwYVNCbGVIUmxibVJ6SUdKdmIyeGxZVzRzWEc0Z0lFZHliM1Z3SUdWNGRHVnVaSE1nUjNKdmRYQkNZWE5sUEU5d2RHbHZiajVjYmo0b1hHNGdJSHRjYmlBZ0lDQnBjMFJwYzJGaWJHVmtMRnh1SUNBZ0lIUm9aVzFsT2lCN1hHNGdJQ0FnSUNCemNHRmphVzVuT2lCN0lHSmhjMlZWYm1sMElIMHNYRzRnSUNBZ0lDQmpiMnh2Y25Nc1hHNGdJQ0FnZlN4Y2JpQWdmVG9nU1c1a2FXTmhkRzl5VTJWd1lYSmhkRzl5VUhKdmNITThUM0IwYVc5dUxDQkpjMDExYkhScExDQkhjbTkxY0Q0c1hHNGdJSFZ1YzNSNWJHVmtPaUJpYjI5c1pXRnVYRzRwT2lCRFUxTlBZbXBsWTNSWGFYUm9UR0ZpWld3Z1BUNGdLSHRjYmlBZ2JHRmlaV3c2SUNkcGJtUnBZMkYwYjNKVFpYQmhjbUYwYjNJbkxGeHVJQ0JoYkdsbmJsTmxiR1k2SUNkemRISmxkR05vSnl4Y2JpQWdkMmxrZEdnNklERXNYRzRnSUM0dUxpaDFibk4wZVd4bFpGeHVJQ0FnSUQ4Z2UzMWNiaUFnSUNBNklIdGNiaUFnSUNBZ0lDQWdZbUZqYTJkeWIzVnVaRU52Ykc5eU9pQnBjMFJwYzJGaWJHVmtJRDhnWTI5c2IzSnpMbTVsZFhSeVlXd3hNQ0E2SUdOdmJHOXljeTV1WlhWMGNtRnNNakFzWEc0Z0lDQWdJQ0FnSUcxaGNtZHBia0p2ZEhSdmJUb2dZbUZ6WlZWdWFYUWdLaUF5TEZ4dUlDQWdJQ0FnSUNCdFlYSm5hVzVVYjNBNklHSmhjMlZWYm1sMElDb2dNaXhjYmlBZ0lDQWdJSDBwTEZ4dWZTazdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQkpibVJwWTJGMGIzSlRaWEJoY21GMGIzSWdQU0E4WEc0Z0lFOXdkR2x2Yml4Y2JpQWdTWE5OZFd4MGFTQmxlSFJsYm1SeklHSnZiMnhsWVc0c1hHNGdJRWR5YjNWd0lHVjRkR1Z1WkhNZ1IzSnZkWEJDWVhObFBFOXdkR2x2Ymo1Y2JqNG9YRzRnSUhCeWIzQnpPaUJKYm1ScFkyRjBiM0pUWlhCaGNtRjBiM0pRY205d2N6eFBjSFJwYjI0c0lFbHpUWFZzZEdrc0lFZHliM1Z3UGx4dUtTQTlQaUI3WEc0Z0lHTnZibk4wSUhzZ2FXNXVaWEpRY205d2N5QjlJRDBnY0hKdmNITTdYRzRnSUhKbGRIVnliaUFvWEc0Z0lDQWdQSE53WVc1Y2JpQWdJQ0FnSUhzdUxpNXBibTVsY2xCeWIzQnpmVnh1SUNBZ0lDQWdleTR1TG1kbGRGTjBlV3hsVUhKdmNITW9jSEp2Y0hNc0lDZHBibVJwWTJGMGIzSlRaWEJoY21GMGIzSW5MQ0I3WEc0Z0lDQWdJQ0FnSUNkcGJtUnBZMkYwYjNJdGMyVndZWEpoZEc5eUp6b2dkSEoxWlN4Y2JpQWdJQ0FnSUgwcGZWeHVJQ0FnSUM4K1hHNGdJQ2s3WEc1OU8xeHVYRzR2THlBOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNiaTh2SUV4dllXUnBibWRjYmk4dklEMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh1WEc1amIyNXpkQ0JzYjJGa2FXNW5SRzkwUVc1cGJXRjBhVzl1Y3lBOUlHdGxlV1p5WVcxbGMyQmNiaUFnTUNVc0lEZ3dKU3dnTVRBd0pTQjdJRzl3WVdOcGRIazZJREE3SUgxY2JpQWdOREFsSUhzZ2IzQmhZMmwwZVRvZ01Uc2dmVnh1WUR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUd4dllXUnBibWRKYm1ScFkyRjBiM0pEVTFNZ1BTQThYRzRnSUU5d2RHbHZiaXhjYmlBZ1NYTk5kV3gwYVNCbGVIUmxibVJ6SUdKdmIyeGxZVzRzWEc0Z0lFZHliM1Z3SUdWNGRHVnVaSE1nUjNKdmRYQkNZWE5sUEU5d2RHbHZiajVjYmo0b1hHNGdJSHRjYmlBZ0lDQnBjMFp2WTNWelpXUXNYRzRnSUNBZ2MybDZaU3hjYmlBZ0lDQjBhR1Z0WlRvZ2UxeHVJQ0FnSUNBZ1kyOXNiM0p6TEZ4dUlDQWdJQ0FnYzNCaFkybHVaem9nZXlCaVlYTmxWVzVwZENCOUxGeHVJQ0FnSUgwc1hHNGdJSDA2SUV4dllXUnBibWRKYm1ScFkyRjBiM0pRY205d2N6eFBjSFJwYjI0c0lFbHpUWFZzZEdrc0lFZHliM1Z3UGl4Y2JpQWdkVzV6ZEhsc1pXUTZJR0p2YjJ4bFlXNWNiaWs2SUVOVFUwOWlhbVZqZEZkcGRHaE1ZV0psYkNBOVBpQW9lMXh1SUNCc1lXSmxiRG9nSjJ4dllXUnBibWRKYm1ScFkyRjBiM0luTEZ4dUlDQmthWE53YkdGNU9pQW5abXhsZUNjc1hHNGdJSFJ5WVc1emFYUnBiMjQ2SUNkamIyeHZjaUF4TlRCdGN5Y3NYRzRnSUdGc2FXZHVVMlZzWmpvZ0oyTmxiblJsY2ljc1hHNGdJR1p2Ym5SVGFYcGxPaUJ6YVhwbExGeHVJQ0JzYVc1bFNHVnBaMmgwT2lBeExGeHVJQ0J0WVhKbmFXNVNhV2RvZERvZ2MybDZaU3hjYmlBZ2RHVjRkRUZzYVdkdU9pQW5ZMlZ1ZEdWeUp5eGNiaUFnZG1WeWRHbGpZV3hCYkdsbmJqb2dKMjFwWkdSc1pTY3NYRzRnSUM0dUxpaDFibk4wZVd4bFpGeHVJQ0FnSUQ4Z2UzMWNiaUFnSUNBNklIdGNiaUFnSUNBZ0lDQWdZMjlzYjNJNklHbHpSbTlqZFhObFpDQS9JR052Ykc5eWN5NXVaWFYwY21Gc05qQWdPaUJqYjJ4dmNuTXVibVYxZEhKaGJESXdMRnh1SUNBZ0lDQWdJQ0J3WVdSa2FXNW5PaUJpWVhObFZXNXBkQ0FxSURJc1hHNGdJQ0FnSUNCOUtTeGNibjBwTzF4dVhHNXBiblJsY21aaFkyVWdURzloWkdsdVowUnZkRkJ5YjNCeklIdGNiaUFnWkdWc1lYazZJRzUxYldKbGNqdGNiaUFnYjJabWMyVjBPaUJpYjI5c1pXRnVPMXh1ZlZ4dVkyOXVjM1FnVEc5aFpHbHVaMFJ2ZENBOUlDaDdJR1JsYkdGNUxDQnZabVp6WlhRZ2ZUb2dURzloWkdsdVowUnZkRkJ5YjNCektTQTlQaUFvWEc0Z0lEeHpjR0Z1WEc0Z0lDQWdZM056UFh0N1hHNGdJQ0FnSUNCaGJtbHRZWFJwYjI0NklHQWtlMnh2WVdScGJtZEViM1JCYm1sdFlYUnBiMjV6ZlNBeGN5QmxZWE5sTFdsdUxXOTFkQ0FrZTJSbGJHRjVmVzF6SUdsdVptbHVhWFJsTzJBc1hHNGdJQ0FnSUNCaVlXTnJaM0p2ZFc1a1EyOXNiM0k2SUNkamRYSnlaVzUwUTI5c2IzSW5MRnh1SUNBZ0lDQWdZbTl5WkdWeVVtRmthWFZ6T2lBbk1XVnRKeXhjYmlBZ0lDQWdJR1JwYzNCc1lYazZJQ2RwYm14cGJtVXRZbXh2WTJzbkxGeHVJQ0FnSUNBZ2JXRnlaMmx1VEdWbWREb2diMlptYzJWMElEOGdKekZsYlNjZ09pQjFibVJsWm1sdVpXUXNYRzRnSUNBZ0lDQm9aV2xuYUhRNklDY3haVzBuTEZ4dUlDQWdJQ0FnZG1WeWRHbGpZV3hCYkdsbmJqb2dKM1J2Y0Njc1hHNGdJQ0FnSUNCM2FXUjBhRG9nSnpGbGJTY3NYRzRnSUNBZ2ZYMWNiaUFnTHo1Y2JpazdYRzVjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnVEc5aFpHbHVaMGx1WkdsallYUnZjbEJ5YjNCelBGeHVJQ0JQY0hScGIyNGdQU0IxYm10dWIzZHVMRnh1SUNCSmMwMTFiSFJwSUdWNGRHVnVaSE1nWW05dmJHVmhiaUE5SUdKdmIyeGxZVzRzWEc0Z0lFZHliM1Z3SUdWNGRHVnVaSE1nUjNKdmRYQkNZWE5sUEU5d2RHbHZiajRnUFNCSGNtOTFjRUpoYzJVOFQzQjBhVzl1UGx4dVBpQmxlSFJsYm1SeklFTnZiVzF2YmxCeWIzQnpRVzVrUTJ4aGMzTk9ZVzFsUEU5d2RHbHZiaXdnU1hOTmRXeDBhU3dnUjNKdmRYQStJSHRjYmlBZ0x5b3FJRkJ5YjNCeklIUm9ZWFFnZDJsc2JDQmlaU0J3WVhOelpXUWdiMjRnZEc4Z2RHaGxJR05vYVd4a2NtVnVMaUFxTDF4dUlDQnBibTVsY2xCeWIzQnpPaUJLVTFndVNXNTBjbWx1YzJsalJXeGxiV1Z1ZEhOYkoyUnBkaWRkTzF4dUlDQXZLaW9nVkdobElHWnZZM1Z6WldRZ2MzUmhkR1VnYjJZZ2RHaGxJSE5sYkdWamRDNGdLaTljYmlBZ2FYTkdiMk4xYzJWa09pQmliMjlzWldGdU8xeHVJQ0JwYzBScGMyRmliR1ZrT2lCaWIyOXNaV0Z1TzF4dUlDQXZLaW9nVTJWMElITnBlbVVnYjJZZ2RHaGxJR052Ym5SaGFXNWxjaTRnS2k5Y2JpQWdjMmw2WlRvZ2JuVnRZbVZ5TzF4dWZWeHVaWGh3YjNKMElHTnZibk4wSUV4dllXUnBibWRKYm1ScFkyRjBiM0lnUFNBOFhHNGdJRTl3ZEdsdmJpeGNiaUFnU1hOTmRXeDBhU0JsZUhSbGJtUnpJR0p2YjJ4bFlXNHNYRzRnSUVkeWIzVndJR1Y0ZEdWdVpITWdSM0p2ZFhCQ1lYTmxQRTl3ZEdsdmJqNWNiajRvZTF4dUlDQnBibTVsY2xCeWIzQnpMRnh1SUNCcGMxSjBiQ3hjYmlBZ2MybDZaU0E5SURRc1hHNGdJQzR1TG5KbGMzUlFjbTl3YzF4dWZUb2dURzloWkdsdVowbHVaR2xqWVhSdmNsQnliM0J6UEU5d2RHbHZiaXdnU1hOTmRXeDBhU3dnUjNKdmRYQStLU0E5UGlCN1hHNGdJSEpsZEhWeWJpQW9YRzRnSUNBZ1BHUnBkbHh1SUNBZ0lDQWdleTR1TG1kbGRGTjBlV3hsVUhKdmNITW9YRzRnSUNBZ0lDQWdJSHNnTGk0dWNtVnpkRkJ5YjNCekxDQnBibTVsY2xCeWIzQnpMQ0JwYzFKMGJDd2djMmw2WlNCOUxGeHVJQ0FnSUNBZ0lDQW5iRzloWkdsdVowbHVaR2xqWVhSdmNpY3NYRzRnSUNBZ0lDQWdJSHRjYmlBZ0lDQWdJQ0FnSUNCcGJtUnBZMkYwYjNJNklIUnlkV1VzWEc0Z0lDQWdJQ0FnSUNBZ0oyeHZZV1JwYm1jdGFXNWthV05oZEc5eUp6b2dkSEoxWlN4Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0tYMWNiaUFnSUNBZ0lIc3VMaTVwYm01bGNsQnliM0J6ZlZ4dUlDQWdJRDVjYmlBZ0lDQWdJRHhNYjJGa2FXNW5SRzkwSUdSbGJHRjVQWHN3ZlNCdlptWnpaWFE5ZTJselVuUnNmU0F2UGx4dUlDQWdJQ0FnUEV4dllXUnBibWRFYjNRZ1pHVnNZWGs5ZXpFMk1IMGdiMlptYzJWMElDOCtYRzRnSUNBZ0lDQThURzloWkdsdVowUnZkQ0JrWld4aGVUMTdNekl3ZlNCdlptWnpaWFE5ZXlGcGMxSjBiSDBnTHo1Y2JpQWdJQ0E4TDJScGRqNWNiaUFnS1R0Y2JuMDdYRzRpWFgwPSAqL1wiLFxuICB0b1N0cmluZzogX0VNT1RJT05fU1RSSU5HSUZJRURfQ1NTX0VSUk9SX19cbn07XG52YXIgU3ZnID0gZnVuY3Rpb24gU3ZnKF9yZWYpIHtcbiAgdmFyIHNpemUgPSBfcmVmLnNpemUsXG4gICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgX2V4Y2x1ZGVkJDIpO1xuICByZXR1cm4ganN4KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICBoZWlnaHQ6IHNpemUsXG4gICAgd2lkdGg6IHNpemUsXG4gICAgdmlld0JveDogXCIwIDAgMjAgMjBcIixcbiAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgIGZvY3VzYWJsZTogXCJmYWxzZVwiLFxuICAgIGNzczogX3JlZjJcbiAgfSwgcHJvcHMpKTtcbn07XG52YXIgQ3Jvc3NJY29uID0gZnVuY3Rpb24gQ3Jvc3NJY29uKHByb3BzKSB7XG4gIHJldHVybiBqc3goU3ZnLCBfZXh0ZW5kcyh7XG4gICAgc2l6ZTogMjBcbiAgfSwgcHJvcHMpLCBqc3goXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xNC4zNDggMTQuODQ5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwbC0yLjY1MS0zLjAzMC0yLjY1MSAzLjAyOWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMC0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOSAwLTEuNjk3bDIuNzU4LTMuMTUtMi43NTktMy4xNTJjLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI4IDAtMS42OTdzMS4yMjgtMC40NjkgMS42OTcgMGwyLjY1MiAzLjAzMSAyLjY1MS0zLjAzMWMwLjQ2OS0wLjQ2OSAxLjIyOC0wLjQ2OSAxLjY5NyAwczAuNDY5IDEuMjI5IDAgMS42OTdsLTIuNzU4IDMuMTUyIDIuNzU4IDMuMTVjMC40NjkgMC40NjkgMC40NjkgMS4yMjkgMCAxLjY5OHpcIlxuICB9KSk7XG59O1xudmFyIERvd25DaGV2cm9uID0gZnVuY3Rpb24gRG93bkNoZXZyb24ocHJvcHMpIHtcbiAgcmV0dXJuIGpzeChTdmcsIF9leHRlbmRzKHtcbiAgICBzaXplOiAyMFxuICB9LCBwcm9wcyksIGpzeChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTQuNTE2IDcuNTQ4YzAuNDM2LTAuNDQ2IDEuMDQzLTAuNDgxIDEuNTc2IDBsMy45MDggMy43NDcgMy45MDgtMy43NDdjMC41MzMtMC40ODEgMS4xNDEtMC40NDYgMS41NzQgMCAwLjQzNiAwLjQ0NSAwLjQwOCAxLjE5NyAwIDEuNjE1LTAuNDA2IDAuNDE4LTQuNjk1IDQuNTAyLTQuNjk1IDQuNTAyLTAuMjE3IDAuMjIzLTAuNTAyIDAuMzM1LTAuNzg3IDAuMzM1cy0wLjU3LTAuMTEyLTAuNzg5LTAuMzM1YzAgMC00LjI4Ny00LjA4NC00LjY5NS00LjUwMnMtMC40MzYtMS4xNyAwLTEuNjE1elwiXG4gIH0pKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBCdXR0b25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGJhc2VDU1MgPSBmdW5jdGlvbiBiYXNlQ1NTKF9yZWYzLCB1bnN0eWxlZCkge1xuICB2YXIgaXNGb2N1c2VkID0gX3JlZjMuaXNGb2N1c2VkLFxuICAgIF9yZWYzJHRoZW1lID0gX3JlZjMudGhlbWUsXG4gICAgYmFzZVVuaXQgPSBfcmVmMyR0aGVtZS5zcGFjaW5nLmJhc2VVbml0LFxuICAgIGNvbG9ycyA9IF9yZWYzJHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe1xuICAgIGxhYmVsOiAnaW5kaWNhdG9yQ29udGFpbmVyJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJ1xuICB9LCB1bnN0eWxlZCA/IHt9IDoge1xuICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDgwIDogY29sb3JzLm5ldXRyYWw0MFxuICAgIH1cbiAgfSk7XG59O1xudmFyIGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbnZhciBEcm9wZG93bkluZGljYXRvciA9IGZ1bmN0aW9uIERyb3Bkb3duSW5kaWNhdG9yKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBnZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlXG4gIH0pLCBpbm5lclByb3BzKSwgY2hpbGRyZW4gfHwganN4KERvd25DaGV2cm9uLCBudWxsKSk7XG59O1xudmFyIGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbnZhciBDbGVhckluZGljYXRvciA9IGZ1bmN0aW9uIENsZWFySW5kaWNhdG9yKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBnZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICdjbGVhci1pbmRpY2F0b3InOiB0cnVlXG4gIH0pLCBpbm5lclByb3BzKSwgY2hpbGRyZW4gfHwganN4KENyb3NzSWNvbiwgbnVsbCkpO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gZnVuY3Rpb24gaW5kaWNhdG9yU2VwYXJhdG9yQ1NTKF9yZWY0LCB1bnN0eWxlZCkge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9yZWY0LmlzRGlzYWJsZWQsXG4gICAgX3JlZjQkdGhlbWUgPSBfcmVmNC50aGVtZSxcbiAgICBiYXNlVW5pdCA9IF9yZWY0JHRoZW1lLnNwYWNpbmcuYmFzZVVuaXQsXG4gICAgY29sb3JzID0gX3JlZjQkdGhlbWUuY29sb3JzO1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICAgIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICAgIHdpZHRoOiAxXG4gIH0sIHVuc3R5bGVkID8ge30gOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgbWFyZ2luQm90dG9tOiBiYXNlVW5pdCAqIDIsXG4gICAgbWFyZ2luVG9wOiBiYXNlVW5pdCAqIDJcbiAgfSk7XG59O1xudmFyIEluZGljYXRvclNlcGFyYXRvciA9IGZ1bmN0aW9uIEluZGljYXRvclNlcGFyYXRvcihwcm9wcykge1xuICB2YXIgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJzcGFuXCIsIF9leHRlbmRzKHt9LCBpbm5lclByb3BzLCBnZXRTdHlsZVByb3BzKHByb3BzLCAnaW5kaWNhdG9yU2VwYXJhdG9yJywge1xuICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZVxuICB9KSkpO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGxvYWRpbmdEb3RBbmltYXRpb25zID0ga2V5ZnJhbWVzKF90ZW1wbGF0ZU9iamVjdCB8fCAoX3RlbXBsYXRlT2JqZWN0ID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChbXCJcXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XFxuICA0MCUgeyBvcGFjaXR5OiAxOyB9XFxuXCJdKSkpO1xudmFyIGxvYWRpbmdJbmRpY2F0b3JDU1MgPSBmdW5jdGlvbiBsb2FkaW5nSW5kaWNhdG9yQ1NTKF9yZWY1LCB1bnN0eWxlZCkge1xuICB2YXIgaXNGb2N1c2VkID0gX3JlZjUuaXNGb2N1c2VkLFxuICAgIHNpemUgPSBfcmVmNS5zaXplLFxuICAgIF9yZWY1JHRoZW1lID0gX3JlZjUudGhlbWUsXG4gICAgY29sb3JzID0gX3JlZjUkdGhlbWUuY29sb3JzLFxuICAgIGJhc2VVbml0ID0gX3JlZjUkdGhlbWUuc3BhY2luZy5iYXNlVW5pdDtcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe1xuICAgIGxhYmVsOiAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgICBmb250U2l6ZTogc2l6ZSxcbiAgICBsaW5lSGVpZ2h0OiAxLFxuICAgIG1hcmdpblJpZ2h0OiBzaXplLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgdmVydGljYWxBbGlnbjogJ21pZGRsZSdcbiAgfSwgdW5zdHlsZWQgPyB7fSA6IHtcbiAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgcGFkZGluZzogYmFzZVVuaXQgKiAyXG4gIH0pO1xufTtcbnZhciBMb2FkaW5nRG90ID0gZnVuY3Rpb24gTG9hZGluZ0RvdChfcmVmNikge1xuICB2YXIgZGVsYXkgPSBfcmVmNi5kZWxheSxcbiAgICBvZmZzZXQgPSBfcmVmNi5vZmZzZXQ7XG4gIHJldHVybiBqc3goXCJzcGFuXCIsIHtcbiAgICBjc3M6IC8qI19fUFVSRV9fKi9jc3MkMih7XG4gICAgICBhbmltYXRpb246IFwiXCIuY29uY2F0KGxvYWRpbmdEb3RBbmltYXRpb25zLCBcIiAxcyBlYXNlLWluLW91dCBcIikuY29uY2F0KGRlbGF5LCBcIm1zIGluZmluaXRlO1wiKSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxZW0nLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBtYXJnaW5MZWZ0OiBvZmZzZXQgPyAnMWVtJyA6IHVuZGVmaW5lZCxcbiAgICAgIGhlaWdodDogJzFlbScsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbiAgICAgIHdpZHRoOiAnMWVtJ1xuICAgIH0sIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IFwiXCIgOiBcIjtsYWJlbDpMb2FkaW5nRG90O1wiLCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBcIlwiIDogXCIvKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWx1WkdsallYUnZjbk11ZEhONElsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFXMVJTU0lzSW1acGJHVWlPaUpwYm1ScFkyRjBiM0p6TG5SemVDSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxS2lCQWFuTjRJR3B6ZUNBcUwxeHVhVzF3YjNKMElIc2dTbE5ZTENCU1pXRmpkRTV2WkdVZ2ZTQm1jbTl0SUNkeVpXRmpkQ2M3WEc1cGJYQnZjblFnZXlCcWMzZ3NJR3RsZVdaeVlXMWxjeUI5SUdaeWIyMGdKMEJsYlc5MGFXOXVMM0psWVdOMEp6dGNibHh1YVcxd2IzSjBJSHRjYmlBZ1EyOXRiVzl1VUhKdmNITkJibVJEYkdGemMwNWhiV1VzWEc0Z0lFTlRVMDlpYW1WamRGZHBkR2hNWVdKbGJDeGNiaUFnUjNKdmRYQkNZWE5sTEZ4dWZTQm1jbTl0SUNjdUxpOTBlWEJsY3ljN1hHNXBiWEJ2Y25RZ2V5Qm5aWFJUZEhsc1pWQnliM0J6SUgwZ1puSnZiU0FuTGk0dmRYUnBiSE1uTzF4dVhHNHZMeUE5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2JpOHZJRVJ5YjNCa2IzZHVJQ1lnUTJ4bFlYSWdTV052Ym5OY2JpOHZJRDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFZ4dVhHNWpiMjV6ZENCVGRtY2dQU0FvZTF4dUlDQnphWHBsTEZ4dUlDQXVMaTV3Y205d2MxeHVmVG9nU2xOWUxrbHVkSEpwYm5OcFkwVnNaVzFsYm5Seld5ZHpkbWNuWFNBbUlIc2djMmw2WlRvZ2JuVnRZbVZ5SUgwcElEMCtJQ2hjYmlBZ1BITjJaMXh1SUNBZ0lHaGxhV2RvZEQxN2MybDZaWDFjYmlBZ0lDQjNhV1IwYUQxN2MybDZaWDFjYmlBZ0lDQjJhV1YzUW05NFBWd2lNQ0F3SURJd0lESXdYQ0pjYmlBZ0lDQmhjbWxoTFdocFpHUmxiajFjSW5SeWRXVmNJbHh1SUNBZ0lHWnZZM1Z6WVdKc1pUMWNJbVpoYkhObFhDSmNiaUFnSUNCamMzTTllM3RjYmlBZ0lDQWdJR1JwYzNCc1lYazZJQ2RwYm14cGJtVXRZbXh2WTJzbkxGeHVJQ0FnSUNBZ1ptbHNiRG9nSjJOMWNuSmxiblJEYjJ4dmNpY3NYRzRnSUNBZ0lDQnNhVzVsU0dWcFoyaDBPaUF4TEZ4dUlDQWdJQ0FnYzNSeWIydGxPaUFuWTNWeWNtVnVkRU52Ykc5eUp5eGNiaUFnSUNBZ0lITjBjbTlyWlZkcFpIUm9PaUF3TEZ4dUlDQWdJSDE5WEc0Z0lDQWdleTR1TG5CeWIzQnpmVnh1SUNBdlBseHVLVHRjYmx4dVpYaHdiM0owSUhSNWNHVWdRM0p2YzNOSlkyOXVVSEp2Y0hNZ1BTQktVMWd1U1c1MGNtbHVjMmxqUld4bGJXVnVkSE5iSjNOMlp5ZGRJQ1lnZXlCemFYcGxQem9nYm5WdFltVnlJSDA3WEc1bGVIQnZjblFnWTI5dWMzUWdRM0p2YzNOSlkyOXVJRDBnS0hCeWIzQnpPaUJEY205emMwbGpiMjVRY205d2N5a2dQVDRnS0Z4dUlDQThVM1puSUhOcGVtVTllekl3ZlNCN0xpNHVjSEp2Y0hOOVBseHVJQ0FnSUR4d1lYUm9JR1E5WENKTk1UUXVNelE0SURFMExqZzBPV010TUM0ME5qa2dNQzQwTmprdE1TNHlNamtnTUM0ME5qa3RNUzQyT1RjZ01Hd3RNaTQyTlRFdE15NHdNekF0TWk0Mk5URWdNeTR3TWpsakxUQXVORFk1SURBdU5EWTVMVEV1TWpJNUlEQXVORFk1TFRFdU5qazNJREF0TUM0ME5qa3RNQzQwTmprdE1DNDBOamt0TVM0eU1qa2dNQzB4TGpZNU4yd3lMamMxT0MwekxqRTFMVEl1TnpVNUxUTXVNVFV5WXkwd0xqUTJPUzB3TGpRMk9TMHdMalEyT1MweExqSXlPQ0F3TFRFdU5qazNjekV1TWpJNExUQXVORFk1SURFdU5qazNJREJzTWk0Mk5USWdNeTR3TXpFZ01pNDJOVEV0TXk0d016RmpNQzQwTmprdE1DNDBOamtnTVM0eU1qZ3RNQzQwTmprZ01TNDJPVGNnTUhNd0xqUTJPU0F4TGpJeU9TQXdJREV1TmprM2JDMHlMamMxT0NBekxqRTFNaUF5TGpjMU9DQXpMakUxWXpBdU5EWTVJREF1TkRZNUlEQXVORFk1SURFdU1qSTVJREFnTVM0Mk9UaDZYQ0lnTHo1Y2JpQWdQQzlUZG1jK1hHNHBPMXh1Wlhod2IzSjBJSFI1Y0dVZ1JHOTNia05vWlhaeWIyNVFjbTl3Y3lBOUlFcFRXQzVKYm5SeWFXNXphV05GYkdWdFpXNTBjMXNuYzNabkoxMGdKaUI3SUhOcGVtVS9PaUJ1ZFcxaVpYSWdmVHRjYm1WNGNHOXlkQ0JqYjI1emRDQkViM2R1UTJobGRuSnZiaUE5SUNod2NtOXdjem9nUkc5M2JrTm9aWFp5YjI1UWNtOXdjeWtnUFQ0Z0tGeHVJQ0E4VTNabklITnBlbVU5ZXpJd2ZTQjdMaTR1Y0hKdmNITjlQbHh1SUNBZ0lEeHdZWFJvSUdROVhDSk5OQzQxTVRZZ055NDFORGhqTUM0ME16WXRNQzQwTkRZZ01TNHdORE10TUM0ME9ERWdNUzQxTnpZZ01Hd3pMamt3T0NBekxqYzBOeUF6TGprd09DMHpMamMwTjJNd0xqVXpNeTB3TGpRNE1TQXhMakUwTVMwd0xqUTBOaUF4TGpVM05DQXdJREF1TkRNMklEQXVORFExSURBdU5EQTRJREV1TVRrM0lEQWdNUzQyTVRVdE1DNDBNRFlnTUM0ME1UZ3ROQzQyT1RVZ05DNDFNREl0TkM0Mk9UVWdOQzQxTURJdE1DNHlNVGNnTUM0eU1qTXRNQzQxTURJZ01DNHpNelV0TUM0M09EY2dNQzR6TXpWekxUQXVOVGN0TUM0eE1USXRNQzQzT0RrdE1DNHpNelZqTUNBd0xUUXVNamczTFRRdU1EZzBMVFF1TmprMUxUUXVOVEF5Y3kwd0xqUXpOaTB4TGpFM0lEQXRNUzQyTVRWNlhDSWdMejVjYmlBZ1BDOVRkbWMrWEc0cE8xeHVYRzR2THlBOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNiaTh2SUVSeWIzQmtiM2R1SUNZZ1EyeGxZWElnUW5WMGRHOXVjMXh1THk4Z1BUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYRzVjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnUkhKdmNHUnZkMjVKYm1ScFkyRjBiM0pRY205d2N6eGNiaUFnVDNCMGFXOXVJRDBnZFc1cmJtOTNiaXhjYmlBZ1NYTk5kV3gwYVNCbGVIUmxibVJ6SUdKdmIyeGxZVzRnUFNCaWIyOXNaV0Z1TEZ4dUlDQkhjbTkxY0NCbGVIUmxibVJ6SUVkeWIzVndRbUZ6WlR4UGNIUnBiMjQrSUQwZ1IzSnZkWEJDWVhObFBFOXdkR2x2Ymo1Y2JqNGdaWGgwWlc1a2N5QkRiMjF0YjI1UWNtOXdjMEZ1WkVOc1lYTnpUbUZ0WlR4UGNIUnBiMjRzSUVselRYVnNkR2tzSUVkeWIzVndQaUI3WEc0Z0lDOHFLaUJVYUdVZ1kyaHBiR1J5Wlc0Z2RHOGdZbVVnY21WdVpHVnlaV1FnYVc1emFXUmxJSFJvWlNCcGJtUnBZMkYwYjNJdUlDb3ZYRzRnSUdOb2FXeGtjbVZ1UHpvZ1VtVmhZM1JPYjJSbE8xeHVJQ0F2S2lvZ1VISnZjSE1nZEdoaGRDQjNhV3hzSUdKbElIQmhjM05sWkNCdmJpQjBieUIwYUdVZ1kyaHBiR1J5Wlc0dUlDb3ZYRzRnSUdsdWJtVnlVSEp2Y0hNNklFcFRXQzVKYm5SeWFXNXphV05GYkdWdFpXNTBjMXNuWkdsMkoxMDdYRzRnSUM4cUtpQlVhR1VnWm05amRYTmxaQ0J6ZEdGMFpTQnZaaUIwYUdVZ2MyVnNaV04wTGlBcUwxeHVJQ0JwYzBadlkzVnpaV1E2SUdKdmIyeGxZVzQ3WEc0Z0lHbHpSR2x6WVdKc1pXUTZJR0p2YjJ4bFlXNDdYRzU5WEc1Y2JtTnZibk4wSUdKaGMyVkRVMU1nUFNBOFhHNGdJRTl3ZEdsdmJpeGNiaUFnU1hOTmRXeDBhU0JsZUhSbGJtUnpJR0p2YjJ4bFlXNHNYRzRnSUVkeWIzVndJR1Y0ZEdWdVpITWdSM0p2ZFhCQ1lYTmxQRTl3ZEdsdmJqNWNiajRvWEc0Z0lIdGNiaUFnSUNCcGMwWnZZM1Z6WldRc1hHNGdJQ0FnZEdobGJXVTZJSHRjYmlBZ0lDQWdJSE53WVdOcGJtYzZJSHNnWW1GelpWVnVhWFFnZlN4Y2JpQWdJQ0FnSUdOdmJHOXljeXhjYmlBZ0lDQjlMRnh1SUNCOU9seHVJQ0FnSUh3Z1JISnZjR1J2ZDI1SmJtUnBZMkYwYjNKUWNtOXdjenhQY0hScGIyNHNJRWx6VFhWc2RHa3NJRWR5YjNWd1BseHVJQ0FnSUh3Z1EyeGxZWEpKYm1ScFkyRjBiM0pRY205d2N6eFBjSFJwYjI0c0lFbHpUWFZzZEdrc0lFZHliM1Z3UGl4Y2JpQWdkVzV6ZEhsc1pXUTZJR0p2YjJ4bFlXNWNiaWs2SUVOVFUwOWlhbVZqZEZkcGRHaE1ZV0psYkNBOVBpQW9lMXh1SUNCc1lXSmxiRG9nSjJsdVpHbGpZWFJ2Y2tOdmJuUmhhVzVsY2ljc1hHNGdJR1JwYzNCc1lYazZJQ2RtYkdWNEp5eGNiaUFnZEhKaGJuTnBkR2x2YmpvZ0oyTnZiRzl5SURFMU1HMXpKeXhjYmlBZ0xpNHVLSFZ1YzNSNWJHVmtYRzRnSUNBZ1B5QjdmVnh1SUNBZ0lEb2dlMXh1SUNBZ0lDQWdJQ0JqYjJ4dmNqb2dhWE5HYjJOMWMyVmtJRDhnWTI5c2IzSnpMbTVsZFhSeVlXdzJNQ0E2SUdOdmJHOXljeTV1WlhWMGNtRnNNakFzWEc0Z0lDQWdJQ0FnSUhCaFpHUnBibWM2SUdKaGMyVlZibWwwSUNvZ01peGNiaUFnSUNBZ0lDQWdKenBvYjNabGNpYzZJSHRjYmlBZ0lDQWdJQ0FnSUNCamIyeHZjam9nYVhOR2IyTjFjMlZrSUQ4Z1kyOXNiM0p6TG01bGRYUnlZV3c0TUNBNklHTnZiRzl5Y3k1dVpYVjBjbUZzTkRBc1hHNGdJQ0FnSUNBZ0lIMHNYRzRnSUNBZ0lDQjlLU3hjYm4wcE8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1pISnZjR1J2ZDI1SmJtUnBZMkYwYjNKRFUxTWdQU0JpWVhObFExTlRPMXh1Wlhod2IzSjBJR052Ym5OMElFUnliM0JrYjNkdVNXNWthV05oZEc5eUlEMGdQRnh1SUNCUGNIUnBiMjRzWEc0Z0lFbHpUWFZzZEdrZ1pYaDBaVzVrY3lCaWIyOXNaV0Z1TEZ4dUlDQkhjbTkxY0NCbGVIUmxibVJ6SUVkeWIzVndRbUZ6WlR4UGNIUnBiMjQrWEc0K0tGeHVJQ0J3Y205d2N6b2dSSEp2Y0dSdmQyNUpibVJwWTJGMGIzSlFjbTl3Y3p4UGNIUnBiMjRzSUVselRYVnNkR2tzSUVkeWIzVndQbHh1S1NBOVBpQjdYRzRnSUdOdmJuTjBJSHNnWTJocGJHUnlaVzRzSUdsdWJtVnlVSEp2Y0hNZ2ZTQTlJSEJ5YjNCek8xeHVJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lEeGthWFpjYmlBZ0lDQWdJSHN1TGk1blpYUlRkSGxzWlZCeWIzQnpLSEJ5YjNCekxDQW5aSEp2Y0dSdmQyNUpibVJwWTJGMGIzSW5MQ0I3WEc0Z0lDQWdJQ0FnSUdsdVpHbGpZWFJ2Y2pvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnSjJSeWIzQmtiM2R1TFdsdVpHbGpZWFJ2Y2ljNklIUnlkV1VzWEc0Z0lDQWdJQ0I5S1gxY2JpQWdJQ0FnSUhzdUxpNXBibTVsY2xCeWIzQnpmVnh1SUNBZ0lENWNiaUFnSUNBZ0lIdGphR2xzWkhKbGJpQjhmQ0E4Ukc5M2JrTm9aWFp5YjI0Z0x6NTlYRzRnSUNBZ1BDOWthWFkrWEc0Z0lDazdYRzU5TzF4dVhHNWxlSEJ2Y25RZ2FXNTBaWEptWVdObElFTnNaV0Z5U1c1a2FXTmhkRzl5VUhKdmNITThYRzRnSUU5d2RHbHZiaUE5SUhWdWEyNXZkMjRzWEc0Z0lFbHpUWFZzZEdrZ1pYaDBaVzVrY3lCaWIyOXNaV0Z1SUQwZ1ltOXZiR1ZoYml4Y2JpQWdSM0p2ZFhBZ1pYaDBaVzVrY3lCSGNtOTFjRUpoYzJVOFQzQjBhVzl1UGlBOUlFZHliM1Z3UW1GelpUeFBjSFJwYjI0K1hHNCtJR1Y0ZEdWdVpITWdRMjl0Ylc5dVVISnZjSE5CYm1SRGJHRnpjMDVoYldVOFQzQjBhVzl1TENCSmMwMTFiSFJwTENCSGNtOTFjRDRnZTF4dUlDQXZLaW9nVkdobElHTm9hV3hrY21WdUlIUnZJR0psSUhKbGJtUmxjbVZrSUdsdWMybGtaU0IwYUdVZ2FXNWthV05oZEc5eUxpQXFMMXh1SUNCamFHbHNaSEpsYmo4NklGSmxZV04wVG05a1pUdGNiaUFnTHlvcUlGQnliM0J6SUhSb1lYUWdkMmxzYkNCaVpTQndZWE56WldRZ2IyNGdkRzhnZEdobElHTm9hV3hrY21WdUxpQXFMMXh1SUNCcGJtNWxjbEJ5YjNCek9pQktVMWd1U1c1MGNtbHVjMmxqUld4bGJXVnVkSE5iSjJScGRpZGRPMXh1SUNBdktpb2dWR2hsSUdadlkzVnpaV1FnYzNSaGRHVWdiMllnZEdobElITmxiR1ZqZEM0Z0tpOWNiaUFnYVhOR2IyTjFjMlZrT2lCaWIyOXNaV0Z1TzF4dWZWeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyeGxZWEpKYm1ScFkyRjBiM0pEVTFNZ1BTQmlZWE5sUTFOVE8xeHVaWGh3YjNKMElHTnZibk4wSUVOc1pXRnlTVzVrYVdOaGRHOXlJRDBnUEZ4dUlDQlBjSFJwYjI0c1hHNGdJRWx6VFhWc2RHa2daWGgwWlc1a2N5QmliMjlzWldGdUxGeHVJQ0JIY205MWNDQmxlSFJsYm1SeklFZHliM1Z3UW1GelpUeFBjSFJwYjI0K1hHNCtLRnh1SUNCd2NtOXdjem9nUTJ4bFlYSkpibVJwWTJGMGIzSlFjbTl3Y3p4UGNIUnBiMjRzSUVselRYVnNkR2tzSUVkeWIzVndQbHh1S1NBOVBpQjdYRzRnSUdOdmJuTjBJSHNnWTJocGJHUnlaVzRzSUdsdWJtVnlVSEp2Y0hNZ2ZTQTlJSEJ5YjNCek8xeHVJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lEeGthWFpjYmlBZ0lDQWdJSHN1TGk1blpYUlRkSGxzWlZCeWIzQnpLSEJ5YjNCekxDQW5ZMnhsWVhKSmJtUnBZMkYwYjNJbkxDQjdYRzRnSUNBZ0lDQWdJR2x1WkdsallYUnZjam9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdKMk5zWldGeUxXbHVaR2xqWVhSdmNpYzZJSFJ5ZFdVc1hHNGdJQ0FnSUNCOUtYMWNiaUFnSUNBZ0lIc3VMaTVwYm01bGNsQnliM0J6ZlZ4dUlDQWdJRDVjYmlBZ0lDQWdJSHRqYUdsc1pISmxiaUI4ZkNBOFEzSnZjM05KWTI5dUlDOCtmVnh1SUNBZ0lEd3ZaR2wyUGx4dUlDQXBPMXh1ZlR0Y2JseHVMeThnUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhHNHZMeUJUWlhCaGNtRjBiM0pjYmk4dklEMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh1WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUVsdVpHbGpZWFJ2Y2xObGNHRnlZWFJ2Y2xCeWIzQnpQRnh1SUNCUGNIUnBiMjRnUFNCMWJtdHViM2R1TEZ4dUlDQkpjMDExYkhScElHVjRkR1Z1WkhNZ1ltOXZiR1ZoYmlBOUlHSnZiMnhsWVc0c1hHNGdJRWR5YjNWd0lHVjRkR1Z1WkhNZ1IzSnZkWEJDWVhObFBFOXdkR2x2Ymo0Z1BTQkhjbTkxY0VKaGMyVThUM0IwYVc5dVBseHVQaUJsZUhSbGJtUnpJRU52YlcxdmJsQnliM0J6UVc1a1EyeGhjM05PWVcxbFBFOXdkR2x2Yml3Z1NYTk5kV3gwYVN3Z1IzSnZkWEErSUh0Y2JpQWdhWE5FYVhOaFlteGxaRG9nWW05dmJHVmhianRjYmlBZ2FYTkdiMk4xYzJWa09pQmliMjlzWldGdU8xeHVJQ0JwYm01bGNsQnliM0J6UHpvZ1NsTllMa2x1ZEhKcGJuTnBZMFZzWlcxbGJuUnpXeWR6Y0dGdUoxMDdYRzU5WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYm1ScFkyRjBiM0pUWlhCaGNtRjBiM0pEVTFNZ1BTQThYRzRnSUU5d2RHbHZiaXhjYmlBZ1NYTk5kV3gwYVNCbGVIUmxibVJ6SUdKdmIyeGxZVzRzWEc0Z0lFZHliM1Z3SUdWNGRHVnVaSE1nUjNKdmRYQkNZWE5sUEU5d2RHbHZiajVjYmo0b1hHNGdJSHRjYmlBZ0lDQnBjMFJwYzJGaWJHVmtMRnh1SUNBZ0lIUm9aVzFsT2lCN1hHNGdJQ0FnSUNCemNHRmphVzVuT2lCN0lHSmhjMlZWYm1sMElIMHNYRzRnSUNBZ0lDQmpiMnh2Y25Nc1hHNGdJQ0FnZlN4Y2JpQWdmVG9nU1c1a2FXTmhkRzl5VTJWd1lYSmhkRzl5VUhKdmNITThUM0IwYVc5dUxDQkpjMDExYkhScExDQkhjbTkxY0Q0c1hHNGdJSFZ1YzNSNWJHVmtPaUJpYjI5c1pXRnVYRzRwT2lCRFUxTlBZbXBsWTNSWGFYUm9UR0ZpWld3Z1BUNGdLSHRjYmlBZ2JHRmlaV3c2SUNkcGJtUnBZMkYwYjNKVFpYQmhjbUYwYjNJbkxGeHVJQ0JoYkdsbmJsTmxiR1k2SUNkemRISmxkR05vSnl4Y2JpQWdkMmxrZEdnNklERXNYRzRnSUM0dUxpaDFibk4wZVd4bFpGeHVJQ0FnSUQ4Z2UzMWNiaUFnSUNBNklIdGNiaUFnSUNBZ0lDQWdZbUZqYTJkeWIzVnVaRU52Ykc5eU9pQnBjMFJwYzJGaWJHVmtJRDhnWTI5c2IzSnpMbTVsZFhSeVlXd3hNQ0E2SUdOdmJHOXljeTV1WlhWMGNtRnNNakFzWEc0Z0lDQWdJQ0FnSUcxaGNtZHBia0p2ZEhSdmJUb2dZbUZ6WlZWdWFYUWdLaUF5TEZ4dUlDQWdJQ0FnSUNCdFlYSm5hVzVVYjNBNklHSmhjMlZWYm1sMElDb2dNaXhjYmlBZ0lDQWdJSDBwTEZ4dWZTazdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQkpibVJwWTJGMGIzSlRaWEJoY21GMGIzSWdQU0E4WEc0Z0lFOXdkR2x2Yml4Y2JpQWdTWE5OZFd4MGFTQmxlSFJsYm1SeklHSnZiMnhsWVc0c1hHNGdJRWR5YjNWd0lHVjRkR1Z1WkhNZ1IzSnZkWEJDWVhObFBFOXdkR2x2Ymo1Y2JqNG9YRzRnSUhCeWIzQnpPaUJKYm1ScFkyRjBiM0pUWlhCaGNtRjBiM0pRY205d2N6eFBjSFJwYjI0c0lFbHpUWFZzZEdrc0lFZHliM1Z3UGx4dUtTQTlQaUI3WEc0Z0lHTnZibk4wSUhzZ2FXNXVaWEpRY205d2N5QjlJRDBnY0hKdmNITTdYRzRnSUhKbGRIVnliaUFvWEc0Z0lDQWdQSE53WVc1Y2JpQWdJQ0FnSUhzdUxpNXBibTVsY2xCeWIzQnpmVnh1SUNBZ0lDQWdleTR1TG1kbGRGTjBlV3hsVUhKdmNITW9jSEp2Y0hNc0lDZHBibVJwWTJGMGIzSlRaWEJoY21GMGIzSW5MQ0I3WEc0Z0lDQWdJQ0FnSUNkcGJtUnBZMkYwYjNJdGMyVndZWEpoZEc5eUp6b2dkSEoxWlN4Y2JpQWdJQ0FnSUgwcGZWeHVJQ0FnSUM4K1hHNGdJQ2s3WEc1OU8xeHVYRzR2THlBOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNiaTh2SUV4dllXUnBibWRjYmk4dklEMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh1WEc1amIyNXpkQ0JzYjJGa2FXNW5SRzkwUVc1cGJXRjBhVzl1Y3lBOUlHdGxlV1p5WVcxbGMyQmNiaUFnTUNVc0lEZ3dKU3dnTVRBd0pTQjdJRzl3WVdOcGRIazZJREE3SUgxY2JpQWdOREFsSUhzZ2IzQmhZMmwwZVRvZ01Uc2dmVnh1WUR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUd4dllXUnBibWRKYm1ScFkyRjBiM0pEVTFNZ1BTQThYRzRnSUU5d2RHbHZiaXhjYmlBZ1NYTk5kV3gwYVNCbGVIUmxibVJ6SUdKdmIyeGxZVzRzWEc0Z0lFZHliM1Z3SUdWNGRHVnVaSE1nUjNKdmRYQkNZWE5sUEU5d2RHbHZiajVjYmo0b1hHNGdJSHRjYmlBZ0lDQnBjMFp2WTNWelpXUXNYRzRnSUNBZ2MybDZaU3hjYmlBZ0lDQjBhR1Z0WlRvZ2UxeHVJQ0FnSUNBZ1kyOXNiM0p6TEZ4dUlDQWdJQ0FnYzNCaFkybHVaem9nZXlCaVlYTmxWVzVwZENCOUxGeHVJQ0FnSUgwc1hHNGdJSDA2SUV4dllXUnBibWRKYm1ScFkyRjBiM0pRY205d2N6eFBjSFJwYjI0c0lFbHpUWFZzZEdrc0lFZHliM1Z3UGl4Y2JpQWdkVzV6ZEhsc1pXUTZJR0p2YjJ4bFlXNWNiaWs2SUVOVFUwOWlhbVZqZEZkcGRHaE1ZV0psYkNBOVBpQW9lMXh1SUNCc1lXSmxiRG9nSjJ4dllXUnBibWRKYm1ScFkyRjBiM0luTEZ4dUlDQmthWE53YkdGNU9pQW5abXhsZUNjc1hHNGdJSFJ5WVc1emFYUnBiMjQ2SUNkamIyeHZjaUF4TlRCdGN5Y3NYRzRnSUdGc2FXZHVVMlZzWmpvZ0oyTmxiblJsY2ljc1hHNGdJR1p2Ym5SVGFYcGxPaUJ6YVhwbExGeHVJQ0JzYVc1bFNHVnBaMmgwT2lBeExGeHVJQ0J0WVhKbmFXNVNhV2RvZERvZ2MybDZaU3hjYmlBZ2RHVjRkRUZzYVdkdU9pQW5ZMlZ1ZEdWeUp5eGNiaUFnZG1WeWRHbGpZV3hCYkdsbmJqb2dKMjFwWkdSc1pTY3NYRzRnSUM0dUxpaDFibk4wZVd4bFpGeHVJQ0FnSUQ4Z2UzMWNiaUFnSUNBNklIdGNiaUFnSUNBZ0lDQWdZMjlzYjNJNklHbHpSbTlqZFhObFpDQS9JR052Ykc5eWN5NXVaWFYwY21Gc05qQWdPaUJqYjJ4dmNuTXVibVYxZEhKaGJESXdMRnh1SUNBZ0lDQWdJQ0J3WVdSa2FXNW5PaUJpWVhObFZXNXBkQ0FxSURJc1hHNGdJQ0FnSUNCOUtTeGNibjBwTzF4dVhHNXBiblJsY21aaFkyVWdURzloWkdsdVowUnZkRkJ5YjNCeklIdGNiaUFnWkdWc1lYazZJRzUxYldKbGNqdGNiaUFnYjJabWMyVjBPaUJpYjI5c1pXRnVPMXh1ZlZ4dVkyOXVjM1FnVEc5aFpHbHVaMFJ2ZENBOUlDaDdJR1JsYkdGNUxDQnZabVp6WlhRZ2ZUb2dURzloWkdsdVowUnZkRkJ5YjNCektTQTlQaUFvWEc0Z0lEeHpjR0Z1WEc0Z0lDQWdZM056UFh0N1hHNGdJQ0FnSUNCaGJtbHRZWFJwYjI0NklHQWtlMnh2WVdScGJtZEViM1JCYm1sdFlYUnBiMjV6ZlNBeGN5QmxZWE5sTFdsdUxXOTFkQ0FrZTJSbGJHRjVmVzF6SUdsdVptbHVhWFJsTzJBc1hHNGdJQ0FnSUNCaVlXTnJaM0p2ZFc1a1EyOXNiM0k2SUNkamRYSnlaVzUwUTI5c2IzSW5MRnh1SUNBZ0lDQWdZbTl5WkdWeVVtRmthWFZ6T2lBbk1XVnRKeXhjYmlBZ0lDQWdJR1JwYzNCc1lYazZJQ2RwYm14cGJtVXRZbXh2WTJzbkxGeHVJQ0FnSUNBZ2JXRnlaMmx1VEdWbWREb2diMlptYzJWMElEOGdKekZsYlNjZ09pQjFibVJsWm1sdVpXUXNYRzRnSUNBZ0lDQm9aV2xuYUhRNklDY3haVzBuTEZ4dUlDQWdJQ0FnZG1WeWRHbGpZV3hCYkdsbmJqb2dKM1J2Y0Njc1hHNGdJQ0FnSUNCM2FXUjBhRG9nSnpGbGJTY3NYRzRnSUNBZ2ZYMWNiaUFnTHo1Y2JpazdYRzVjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnVEc5aFpHbHVaMGx1WkdsallYUnZjbEJ5YjNCelBGeHVJQ0JQY0hScGIyNGdQU0IxYm10dWIzZHVMRnh1SUNCSmMwMTFiSFJwSUdWNGRHVnVaSE1nWW05dmJHVmhiaUE5SUdKdmIyeGxZVzRzWEc0Z0lFZHliM1Z3SUdWNGRHVnVaSE1nUjNKdmRYQkNZWE5sUEU5d2RHbHZiajRnUFNCSGNtOTFjRUpoYzJVOFQzQjBhVzl1UGx4dVBpQmxlSFJsYm1SeklFTnZiVzF2YmxCeWIzQnpRVzVrUTJ4aGMzTk9ZVzFsUEU5d2RHbHZiaXdnU1hOTmRXeDBhU3dnUjNKdmRYQStJSHRjYmlBZ0x5b3FJRkJ5YjNCeklIUm9ZWFFnZDJsc2JDQmlaU0J3WVhOelpXUWdiMjRnZEc4Z2RHaGxJR05vYVd4a2NtVnVMaUFxTDF4dUlDQnBibTVsY2xCeWIzQnpPaUJLVTFndVNXNTBjbWx1YzJsalJXeGxiV1Z1ZEhOYkoyUnBkaWRkTzF4dUlDQXZLaW9nVkdobElHWnZZM1Z6WldRZ2MzUmhkR1VnYjJZZ2RHaGxJSE5sYkdWamRDNGdLaTljYmlBZ2FYTkdiMk4xYzJWa09pQmliMjlzWldGdU8xeHVJQ0JwYzBScGMyRmliR1ZrT2lCaWIyOXNaV0Z1TzF4dUlDQXZLaW9nVTJWMElITnBlbVVnYjJZZ2RHaGxJR052Ym5SaGFXNWxjaTRnS2k5Y2JpQWdjMmw2WlRvZ2JuVnRZbVZ5TzF4dWZWeHVaWGh3YjNKMElHTnZibk4wSUV4dllXUnBibWRKYm1ScFkyRjBiM0lnUFNBOFhHNGdJRTl3ZEdsdmJpeGNiaUFnU1hOTmRXeDBhU0JsZUhSbGJtUnpJR0p2YjJ4bFlXNHNYRzRnSUVkeWIzVndJR1Y0ZEdWdVpITWdSM0p2ZFhCQ1lYTmxQRTl3ZEdsdmJqNWNiajRvZTF4dUlDQnBibTVsY2xCeWIzQnpMRnh1SUNCcGMxSjBiQ3hjYmlBZ2MybDZaU0E5SURRc1hHNGdJQzR1TG5KbGMzUlFjbTl3YzF4dWZUb2dURzloWkdsdVowbHVaR2xqWVhSdmNsQnliM0J6UEU5d2RHbHZiaXdnU1hOTmRXeDBhU3dnUjNKdmRYQStLU0E5UGlCN1hHNGdJSEpsZEhWeWJpQW9YRzRnSUNBZ1BHUnBkbHh1SUNBZ0lDQWdleTR1TG1kbGRGTjBlV3hsVUhKdmNITW9YRzRnSUNBZ0lDQWdJSHNnTGk0dWNtVnpkRkJ5YjNCekxDQnBibTVsY2xCeWIzQnpMQ0JwYzFKMGJDd2djMmw2WlNCOUxGeHVJQ0FnSUNBZ0lDQW5iRzloWkdsdVowbHVaR2xqWVhSdmNpY3NYRzRnSUNBZ0lDQWdJSHRjYmlBZ0lDQWdJQ0FnSUNCcGJtUnBZMkYwYjNJNklIUnlkV1VzWEc0Z0lDQWdJQ0FnSUNBZ0oyeHZZV1JwYm1jdGFXNWthV05oZEc5eUp6b2dkSEoxWlN4Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0tYMWNiaUFnSUNBZ0lIc3VMaTVwYm01bGNsQnliM0J6ZlZ4dUlDQWdJRDVjYmlBZ0lDQWdJRHhNYjJGa2FXNW5SRzkwSUdSbGJHRjVQWHN3ZlNCdlptWnpaWFE5ZTJselVuUnNmU0F2UGx4dUlDQWdJQ0FnUEV4dllXUnBibWRFYjNRZ1pHVnNZWGs5ZXpFMk1IMGdiMlptYzJWMElDOCtYRzRnSUNBZ0lDQThURzloWkdsdVowUnZkQ0JrWld4aGVUMTdNekl3ZlNCdlptWnpaWFE5ZXlGcGMxSjBiSDBnTHo1Y2JpQWdJQ0E4TDJScGRqNWNiaUFnS1R0Y2JuMDdYRzRpWFgwPSAqL1wiKVxuICB9KTtcbn07XG52YXIgTG9hZGluZ0luZGljYXRvciA9IGZ1bmN0aW9uIExvYWRpbmdJbmRpY2F0b3IoX3JlZjcpIHtcbiAgdmFyIGlubmVyUHJvcHMgPSBfcmVmNy5pbm5lclByb3BzLFxuICAgIGlzUnRsID0gX3JlZjcuaXNSdGwsXG4gICAgX3JlZjckc2l6ZSA9IF9yZWY3LnNpemUsXG4gICAgc2l6ZSA9IF9yZWY3JHNpemUgPT09IHZvaWQgMCA/IDQgOiBfcmVmNyRzaXplLFxuICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmNywgX2V4Y2x1ZGVkMik7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe30sIGdldFN0eWxlUHJvcHMoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCByZXN0UHJvcHMpLCB7fSwge1xuICAgIGlubmVyUHJvcHM6IGlubmVyUHJvcHMsXG4gICAgaXNSdGw6IGlzUnRsLFxuICAgIHNpemU6IHNpemVcbiAgfSksICdsb2FkaW5nSW5kaWNhdG9yJywge1xuICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAnbG9hZGluZy1pbmRpY2F0b3InOiB0cnVlXG4gIH0pLCBpbm5lclByb3BzKSwganN4KExvYWRpbmdEb3QsIHtcbiAgICBkZWxheTogMCxcbiAgICBvZmZzZXQ6IGlzUnRsXG4gIH0pLCBqc3goTG9hZGluZ0RvdCwge1xuICAgIGRlbGF5OiAxNjAsXG4gICAgb2Zmc2V0OiB0cnVlXG4gIH0pLCBqc3goTG9hZGluZ0RvdCwge1xuICAgIGRlbGF5OiAzMjAsXG4gICAgb2Zmc2V0OiAhaXNSdGxcbiAgfSkpO1xufTtcblxudmFyIGNzcyQxID0gZnVuY3Rpb24gY3NzKF9yZWYsIHVuc3R5bGVkKSB7XG4gIHZhciBpc0Rpc2FibGVkID0gX3JlZi5pc0Rpc2FibGVkLFxuICAgIGlzRm9jdXNlZCA9IF9yZWYuaXNGb2N1c2VkLFxuICAgIF9yZWYkdGhlbWUgPSBfcmVmLnRoZW1lLFxuICAgIGNvbG9ycyA9IF9yZWYkdGhlbWUuY29sb3JzLFxuICAgIGJvcmRlclJhZGl1cyA9IF9yZWYkdGhlbWUuYm9yZGVyUmFkaXVzLFxuICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmc7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKHtcbiAgICBsYWJlbDogJ2NvbnRyb2wnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgbWluSGVpZ2h0OiBzcGFjaW5nLmNvbnRyb2xIZWlnaHQsXG4gICAgb3V0bGluZTogJzAgIWltcG9ydGFudCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAxMDBtcydcbiAgfSwgdW5zdHlsZWQgPyB7fSA6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDUgOiBjb2xvcnMubmV1dHJhbDAsXG4gICAgYm9yZGVyQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogaXNGb2N1c2VkID8gY29sb3JzLnByaW1hcnkgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICAgIGJvcmRlcldpZHRoOiAxLFxuICAgIGJveFNoYWRvdzogaXNGb2N1c2VkID8gXCIwIDAgMCAxcHggXCIuY29uY2F0KGNvbG9ycy5wcmltYXJ5KSA6IHVuZGVmaW5lZCxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMucHJpbWFyeSA6IGNvbG9ycy5uZXV0cmFsMzBcbiAgICB9XG4gIH0pO1xufTtcbnZhciBDb250cm9sID0gZnVuY3Rpb24gQ29udHJvbChwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICBpc0Rpc2FibGVkID0gcHJvcHMuaXNEaXNhYmxlZCxcbiAgICBpc0ZvY3VzZWQgPSBwcm9wcy5pc0ZvY3VzZWQsXG4gICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcyxcbiAgICBtZW51SXNPcGVuID0gcHJvcHMubWVudUlzT3BlbjtcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiBpbm5lclJlZlxuICB9LCBnZXRTdHlsZVByb3BzKHByb3BzLCAnY29udHJvbCcsIHtcbiAgICBjb250cm9sOiB0cnVlLFxuICAgICdjb250cm9sLS1pcy1kaXNhYmxlZCc6IGlzRGlzYWJsZWQsXG4gICAgJ2NvbnRyb2wtLWlzLWZvY3VzZWQnOiBpc0ZvY3VzZWQsXG4gICAgJ2NvbnRyb2wtLW1lbnUtaXMtb3Blbic6IG1lbnVJc09wZW5cbiAgfSksIGlubmVyUHJvcHMsIHtcbiAgICBcImFyaWEtZGlzYWJsZWRcIjogaXNEaXNhYmxlZCB8fCB1bmRlZmluZWRcbiAgfSksIGNoaWxkcmVuKTtcbn07XG52YXIgQ29udHJvbCQxID0gQ29udHJvbDtcblxudmFyIF9leGNsdWRlZCQxID0gW1wiZGF0YVwiXTtcbnZhciBncm91cENTUyA9IGZ1bmN0aW9uIGdyb3VwQ1NTKF9yZWYsIHVuc3R5bGVkKSB7XG4gIHZhciBzcGFjaW5nID0gX3JlZi50aGVtZS5zcGFjaW5nO1xuICByZXR1cm4gdW5zdHlsZWQgPyB7fSA6IHtcbiAgICBwYWRkaW5nQm90dG9tOiBzcGFjaW5nLmJhc2VVbml0ICogMixcbiAgICBwYWRkaW5nVG9wOiBzcGFjaW5nLmJhc2VVbml0ICogMlxuICB9O1xufTtcbnZhciBHcm91cCA9IGZ1bmN0aW9uIEdyb3VwKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgIGdldENsYXNzTmFtZXMgPSBwcm9wcy5nZXRDbGFzc05hbWVzLFxuICAgIEhlYWRpbmcgPSBwcm9wcy5IZWFkaW5nLFxuICAgIGhlYWRpbmdQcm9wcyA9IHByb3BzLmhlYWRpbmdQcm9wcyxcbiAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcyxcbiAgICBsYWJlbCA9IHByb3BzLmxhYmVsLFxuICAgIHRoZW1lID0gcHJvcHMudGhlbWUsXG4gICAgc2VsZWN0UHJvcHMgPSBwcm9wcy5zZWxlY3RQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2dyb3VwJywge1xuICAgIGdyb3VwOiB0cnVlXG4gIH0pLCBpbm5lclByb3BzKSwganN4KEhlYWRpbmcsIF9leHRlbmRzKHt9LCBoZWFkaW5nUHJvcHMsIHtcbiAgICBzZWxlY3RQcm9wczogc2VsZWN0UHJvcHMsXG4gICAgdGhlbWU6IHRoZW1lLFxuICAgIGdldFN0eWxlczogZ2V0U3R5bGVzLFxuICAgIGdldENsYXNzTmFtZXM6IGdldENsYXNzTmFtZXMsXG4gICAgY3g6IGN4XG4gIH0pLCBsYWJlbCksIGpzeChcImRpdlwiLCBudWxsLCBjaGlsZHJlbikpO1xufTtcbnZhciBncm91cEhlYWRpbmdDU1MgPSBmdW5jdGlvbiBncm91cEhlYWRpbmdDU1MoX3JlZjIsIHVuc3R5bGVkKSB7XG4gIHZhciBfcmVmMiR0aGVtZSA9IF9yZWYyLnRoZW1lLFxuICAgIGNvbG9ycyA9IF9yZWYyJHRoZW1lLmNvbG9ycyxcbiAgICBzcGFjaW5nID0gX3JlZjIkdGhlbWUuc3BhY2luZztcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe1xuICAgIGxhYmVsOiAnZ3JvdXAnLFxuICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxuICAgIGRpc3BsYXk6ICdibG9jaydcbiAgfSwgdW5zdHlsZWQgPyB7fSA6IHtcbiAgICBjb2xvcjogY29sb3JzLm5ldXRyYWw0MCxcbiAgICBmb250U2l6ZTogJzc1JScsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIG1hcmdpbkJvdHRvbTogJzAuMjVlbScsXG4gICAgcGFkZGluZ0xlZnQ6IHNwYWNpbmcuYmFzZVVuaXQgKiAzLFxuICAgIHBhZGRpbmdSaWdodDogc3BhY2luZy5iYXNlVW5pdCAqIDMsXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSdcbiAgfSk7XG59O1xudmFyIEdyb3VwSGVhZGluZyA9IGZ1bmN0aW9uIEdyb3VwSGVhZGluZyhwcm9wcykge1xuICB2YXIgX2NsZWFuQ29tbW9uUHJvcHMgPSBjbGVhbkNvbW1vblByb3BzKHByb3BzKTtcbiAgICBfY2xlYW5Db21tb25Qcm9wcy5kYXRhO1xuICAgIHZhciBpbm5lclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9jbGVhbkNvbW1vblByb3BzLCBfZXhjbHVkZWQkMSk7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe30sIGdldFN0eWxlUHJvcHMocHJvcHMsICdncm91cEhlYWRpbmcnLCB7XG4gICAgJ2dyb3VwLWhlYWRpbmcnOiB0cnVlXG4gIH0pLCBpbm5lclByb3BzKSk7XG59O1xudmFyIEdyb3VwJDEgPSBHcm91cDtcblxudmFyIF9leGNsdWRlZCA9IFtcImlubmVyUmVmXCIsIFwiaXNEaXNhYmxlZFwiLCBcImlzSGlkZGVuXCIsIFwiaW5wdXRDbGFzc05hbWVcIl07XG52YXIgaW5wdXRDU1MgPSBmdW5jdGlvbiBpbnB1dENTUyhfcmVmLCB1bnN0eWxlZCkge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9yZWYuaXNEaXNhYmxlZCxcbiAgICB2YWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgX3JlZiR0aGVtZSA9IF9yZWYudGhlbWUsXG4gICAgc3BhY2luZyA9IF9yZWYkdGhlbWUuc3BhY2luZyxcbiAgICBjb2xvcnMgPSBfcmVmJHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7XG4gICAgdmlzaWJpbGl0eTogaXNEaXNhYmxlZCA/ICdoaWRkZW4nIDogJ3Zpc2libGUnLFxuICAgIC8vIGZvcmNlIGNzcyB0byByZWNvbXB1dGUgd2hlbiB2YWx1ZSBjaGFuZ2UgZHVlIHRvIEBlbW90aW9uIGJ1Zy5cbiAgICAvLyBXZSBjYW4gcmVtb3ZlIGl0IHdoZW5ldmVyIHRoZSBidWcgaXMgZml4ZWQuXG4gICAgdHJhbnNmb3JtOiB2YWx1ZSA/ICd0cmFuc2xhdGVaKDApJyA6ICcnXG4gIH0sIGNvbnRhaW5lclN0eWxlKSwgdW5zdHlsZWQgPyB7fSA6IHtcbiAgICBtYXJnaW46IHNwYWNpbmcuYmFzZVVuaXQgLyAyLFxuICAgIHBhZGRpbmdCb3R0b206IHNwYWNpbmcuYmFzZVVuaXQgLyAyLFxuICAgIHBhZGRpbmdUb3A6IHNwYWNpbmcuYmFzZVVuaXQgLyAyLFxuICAgIGNvbG9yOiBjb2xvcnMubmV1dHJhbDgwXG4gIH0pO1xufTtcbnZhciBzcGFjaW5nU3R5bGUgPSB7XG4gIGdyaWRBcmVhOiAnMSAvIDInLFxuICBmb250OiAnaW5oZXJpdCcsXG4gIG1pbldpZHRoOiAnMnB4JyxcbiAgYm9yZGVyOiAwLFxuICBtYXJnaW46IDAsXG4gIG91dGxpbmU6IDAsXG4gIHBhZGRpbmc6IDBcbn07XG52YXIgY29udGFpbmVyU3R5bGUgPSB7XG4gIGZsZXg6ICcxIDEgYXV0bycsXG4gIGRpc3BsYXk6ICdpbmxpbmUtZ3JpZCcsXG4gIGdyaWRBcmVhOiAnMSAvIDEgLyAyIC8gMycsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcwIG1pbi1jb250ZW50JyxcbiAgJyY6YWZ0ZXInOiBfb2JqZWN0U3ByZWFkKHtcbiAgICBjb250ZW50OiAnYXR0cihkYXRhLXZhbHVlKSBcIiBcIicsXG4gICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgd2hpdGVTcGFjZTogJ3ByZSdcbiAgfSwgc3BhY2luZ1N0eWxlKVxufTtcbnZhciBpbnB1dFN0eWxlID0gZnVuY3Rpb24gaW5wdXRTdHlsZShpc0hpZGRlbikge1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgbGFiZWw6ICdpbnB1dCcsXG4gICAgY29sb3I6ICdpbmhlcml0JyxcbiAgICBiYWNrZ3JvdW5kOiAwLFxuICAgIG9wYWNpdHk6IGlzSGlkZGVuID8gMCA6IDEsXG4gICAgd2lkdGg6ICcxMDAlJ1xuICB9LCBzcGFjaW5nU3R5bGUpO1xufTtcbnZhciBJbnB1dCA9IGZ1bmN0aW9uIElucHV0KHByb3BzKSB7XG4gIHZhciBjeCA9IHByb3BzLmN4LFxuICAgIHZhbHVlID0gcHJvcHMudmFsdWU7XG4gIHZhciBfY2xlYW5Db21tb25Qcm9wcyA9IGNsZWFuQ29tbW9uUHJvcHMocHJvcHMpLFxuICAgIGlubmVyUmVmID0gX2NsZWFuQ29tbW9uUHJvcHMuaW5uZXJSZWYsXG4gICAgaXNEaXNhYmxlZCA9IF9jbGVhbkNvbW1vblByb3BzLmlzRGlzYWJsZWQsXG4gICAgaXNIaWRkZW4gPSBfY2xlYW5Db21tb25Qcm9wcy5pc0hpZGRlbixcbiAgICBpbnB1dENsYXNzTmFtZSA9IF9jbGVhbkNvbW1vblByb3BzLmlucHV0Q2xhc3NOYW1lLFxuICAgIGlubmVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX2NsZWFuQ29tbW9uUHJvcHMsIF9leGNsdWRlZCk7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe30sIGdldFN0eWxlUHJvcHMocHJvcHMsICdpbnB1dCcsIHtcbiAgICAnaW5wdXQtY29udGFpbmVyJzogdHJ1ZVxuICB9KSwge1xuICAgIFwiZGF0YS12YWx1ZVwiOiB2YWx1ZSB8fCAnJ1xuICB9KSwganN4KFwiaW5wdXRcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgaW5wdXQ6IHRydWVcbiAgICB9LCBpbnB1dENsYXNzTmFtZSksXG4gICAgcmVmOiBpbm5lclJlZixcbiAgICBzdHlsZTogaW5wdXRTdHlsZShpc0hpZGRlbiksXG4gICAgZGlzYWJsZWQ6IGlzRGlzYWJsZWRcbiAgfSwgaW5uZXJQcm9wcykpKTtcbn07XG52YXIgSW5wdXQkMSA9IElucHV0O1xuXG52YXIgbXVsdGlWYWx1ZUNTUyA9IGZ1bmN0aW9uIG11bHRpVmFsdWVDU1MoX3JlZiwgdW5zdHlsZWQpIHtcbiAgdmFyIF9yZWYkdGhlbWUgPSBfcmVmLnRoZW1lLFxuICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmcsXG4gICAgYm9yZGVyUmFkaXVzID0gX3JlZiR0aGVtZS5ib3JkZXJSYWRpdXMsXG4gICAgY29sb3JzID0gX3JlZiR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKHtcbiAgICBsYWJlbDogJ211bHRpVmFsdWUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBtaW5XaWR0aDogMFxuICB9LCB1bnN0eWxlZCA/IHt9IDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLm5ldXRyYWwxMCxcbiAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyAvIDIsXG4gICAgbWFyZ2luOiBzcGFjaW5nLmJhc2VVbml0IC8gMlxuICB9KTtcbn07XG52YXIgbXVsdGlWYWx1ZUxhYmVsQ1NTID0gZnVuY3Rpb24gbXVsdGlWYWx1ZUxhYmVsQ1NTKF9yZWYyLCB1bnN0eWxlZCkge1xuICB2YXIgX3JlZjIkdGhlbWUgPSBfcmVmMi50aGVtZSxcbiAgICBib3JkZXJSYWRpdXMgPSBfcmVmMiR0aGVtZS5ib3JkZXJSYWRpdXMsXG4gICAgY29sb3JzID0gX3JlZjIkdGhlbWUuY29sb3JzLFxuICAgIGNyb3BXaXRoRWxsaXBzaXMgPSBfcmVmMi5jcm9wV2l0aEVsbGlwc2lzO1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHRleHRPdmVyZmxvdzogY3JvcFdpdGhFbGxpcHNpcyB8fCBjcm9wV2l0aEVsbGlwc2lzID09PSB1bmRlZmluZWQgPyAnZWxsaXBzaXMnIDogdW5kZWZpbmVkLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gIH0sIHVuc3R5bGVkID8ge30gOiB7XG4gICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMgLyAyLFxuICAgIGNvbG9yOiBjb2xvcnMubmV1dHJhbDgwLFxuICAgIGZvbnRTaXplOiAnODUlJyxcbiAgICBwYWRkaW5nOiAzLFxuICAgIHBhZGRpbmdMZWZ0OiA2XG4gIH0pO1xufTtcbnZhciBtdWx0aVZhbHVlUmVtb3ZlQ1NTID0gZnVuY3Rpb24gbXVsdGlWYWx1ZVJlbW92ZUNTUyhfcmVmMywgdW5zdHlsZWQpIHtcbiAgdmFyIF9yZWYzJHRoZW1lID0gX3JlZjMudGhlbWUsXG4gICAgc3BhY2luZyA9IF9yZWYzJHRoZW1lLnNwYWNpbmcsXG4gICAgYm9yZGVyUmFkaXVzID0gX3JlZjMkdGhlbWUuYm9yZGVyUmFkaXVzLFxuICAgIGNvbG9ycyA9IF9yZWYzJHRoZW1lLmNvbG9ycyxcbiAgICBpc0ZvY3VzZWQgPSBfcmVmMy5pc0ZvY3VzZWQ7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKHtcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBkaXNwbGF5OiAnZmxleCdcbiAgfSwgdW5zdHlsZWQgPyB7fSA6IHtcbiAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyAvIDIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMuZGFuZ2VyTGlnaHQgOiB1bmRlZmluZWQsXG4gICAgcGFkZGluZ0xlZnQ6IHNwYWNpbmcuYmFzZVVuaXQsXG4gICAgcGFkZGluZ1JpZ2h0OiBzcGFjaW5nLmJhc2VVbml0LFxuICAgICc6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5kYW5nZXJMaWdodCxcbiAgICAgIGNvbG9yOiBjb2xvcnMuZGFuZ2VyXG4gICAgfVxuICB9KTtcbn07XG52YXIgTXVsdGlWYWx1ZUdlbmVyaWMgPSBmdW5jdGlvbiBNdWx0aVZhbHVlR2VuZXJpYyhfcmVmNCkge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmNC5jaGlsZHJlbixcbiAgICBpbm5lclByb3BzID0gX3JlZjQuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBpbm5lclByb3BzLCBjaGlsZHJlbik7XG59O1xudmFyIE11bHRpVmFsdWVDb250YWluZXIgPSBNdWx0aVZhbHVlR2VuZXJpYztcbnZhciBNdWx0aVZhbHVlTGFiZWwgPSBNdWx0aVZhbHVlR2VuZXJpYztcbmZ1bmN0aW9uIE11bHRpVmFsdWVSZW1vdmUoX3JlZjUpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZjUuY2hpbGRyZW4sXG4gICAgaW5uZXJQcm9wcyA9IF9yZWY1LmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIHJvbGU6IFwiYnV0dG9uXCJcbiAgfSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuIHx8IGpzeChDcm9zc0ljb24sIHtcbiAgICBzaXplOiAxNFxuICB9KSk7XG59XG52YXIgTXVsdGlWYWx1ZSA9IGZ1bmN0aW9uIE11bHRpVmFsdWUocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgY29tcG9uZW50cyA9IHByb3BzLmNvbXBvbmVudHMsXG4gICAgZGF0YSA9IHByb3BzLmRhdGEsXG4gICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgaXNEaXNhYmxlZCA9IHByb3BzLmlzRGlzYWJsZWQsXG4gICAgcmVtb3ZlUHJvcHMgPSBwcm9wcy5yZW1vdmVQcm9wcyxcbiAgICBzZWxlY3RQcm9wcyA9IHByb3BzLnNlbGVjdFByb3BzO1xuICB2YXIgQ29udGFpbmVyID0gY29tcG9uZW50cy5Db250YWluZXIsXG4gICAgTGFiZWwgPSBjb21wb25lbnRzLkxhYmVsLFxuICAgIFJlbW92ZSA9IGNvbXBvbmVudHMuUmVtb3ZlO1xuICByZXR1cm4ganN4KENvbnRhaW5lciwge1xuICAgIGRhdGE6IGRhdGEsXG4gICAgaW5uZXJQcm9wczogX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBnZXRTdHlsZVByb3BzKHByb3BzLCAnbXVsdGlWYWx1ZScsIHtcbiAgICAgICdtdWx0aS12YWx1ZSc6IHRydWUsXG4gICAgICAnbXVsdGktdmFsdWUtLWlzLWRpc2FibGVkJzogaXNEaXNhYmxlZFxuICAgIH0pKSwgaW5uZXJQcm9wcyksXG4gICAgc2VsZWN0UHJvcHM6IHNlbGVjdFByb3BzXG4gIH0sIGpzeChMYWJlbCwge1xuICAgIGRhdGE6IGRhdGEsXG4gICAgaW5uZXJQcm9wczogX29iamVjdFNwcmVhZCh7fSwgZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ211bHRpVmFsdWVMYWJlbCcsIHtcbiAgICAgICdtdWx0aS12YWx1ZV9fbGFiZWwnOiB0cnVlXG4gICAgfSkpLFxuICAgIHNlbGVjdFByb3BzOiBzZWxlY3RQcm9wc1xuICB9LCBjaGlsZHJlbiksIGpzeChSZW1vdmUsIHtcbiAgICBkYXRhOiBkYXRhLFxuICAgIGlubmVyUHJvcHM6IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ211bHRpVmFsdWVSZW1vdmUnLCB7XG4gICAgICAnbXVsdGktdmFsdWVfX3JlbW92ZSc6IHRydWVcbiAgICB9KSksIHt9LCB7XG4gICAgICAnYXJpYS1sYWJlbCc6IFwiUmVtb3ZlIFwiLmNvbmNhdChjaGlsZHJlbiB8fCAnb3B0aW9uJylcbiAgICB9LCByZW1vdmVQcm9wcyksXG4gICAgc2VsZWN0UHJvcHM6IHNlbGVjdFByb3BzXG4gIH0pKTtcbn07XG52YXIgTXVsdGlWYWx1ZSQxID0gTXVsdGlWYWx1ZTtcblxudmFyIG9wdGlvbkNTUyA9IGZ1bmN0aW9uIG9wdGlvbkNTUyhfcmVmLCB1bnN0eWxlZCkge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9yZWYuaXNEaXNhYmxlZCxcbiAgICBpc0ZvY3VzZWQgPSBfcmVmLmlzRm9jdXNlZCxcbiAgICBpc1NlbGVjdGVkID0gX3JlZi5pc1NlbGVjdGVkLFxuICAgIF9yZWYkdGhlbWUgPSBfcmVmLnRoZW1lLFxuICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmcsXG4gICAgY29sb3JzID0gX3JlZiR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKHtcbiAgICBsYWJlbDogJ29wdGlvbicsXG4gICAgY3Vyc29yOiAnZGVmYXVsdCcsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgIFdlYmtpdFRhcEhpZ2hsaWdodENvbG9yOiAncmdiYSgwLCAwLCAwLCAwKSdcbiAgfSwgdW5zdHlsZWQgPyB7fSA6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzU2VsZWN0ZWQgPyBjb2xvcnMucHJpbWFyeSA6IGlzRm9jdXNlZCA/IGNvbG9ycy5wcmltYXJ5MjUgOiAndHJhbnNwYXJlbnQnLFxuICAgIGNvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwyMCA6IGlzU2VsZWN0ZWQgPyBjb2xvcnMubmV1dHJhbDAgOiAnaW5oZXJpdCcsXG4gICAgcGFkZGluZzogXCJcIi5jb25jYXQoc3BhY2luZy5iYXNlVW5pdCAqIDIsIFwicHggXCIpLmNvbmNhdChzcGFjaW5nLmJhc2VVbml0ICogMywgXCJweFwiKSxcbiAgICAvLyBwcm92aWRlIHNvbWUgYWZmb3JkYW5jZSBvbiB0b3VjaCBkZXZpY2VzXG4gICAgJzphY3RpdmUnOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICFpc0Rpc2FibGVkID8gaXNTZWxlY3RlZCA/IGNvbG9ycy5wcmltYXJ5IDogY29sb3JzLnByaW1hcnk1MCA6IHVuZGVmaW5lZFxuICAgIH1cbiAgfSk7XG59O1xudmFyIE9wdGlvbiA9IGZ1bmN0aW9uIE9wdGlvbihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICBpc0Rpc2FibGVkID0gcHJvcHMuaXNEaXNhYmxlZCxcbiAgICBpc0ZvY3VzZWQgPSBwcm9wcy5pc0ZvY3VzZWQsXG4gICAgaXNTZWxlY3RlZCA9IHByb3BzLmlzU2VsZWN0ZWQsXG4gICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ29wdGlvbicsIHtcbiAgICBvcHRpb246IHRydWUsXG4gICAgJ29wdGlvbi0taXMtZGlzYWJsZWQnOiBpc0Rpc2FibGVkLFxuICAgICdvcHRpb24tLWlzLWZvY3VzZWQnOiBpc0ZvY3VzZWQsXG4gICAgJ29wdGlvbi0taXMtc2VsZWN0ZWQnOiBpc1NlbGVjdGVkXG4gIH0pLCB7XG4gICAgcmVmOiBpbm5lclJlZixcbiAgICBcImFyaWEtZGlzYWJsZWRcIjogaXNEaXNhYmxlZFxuICB9LCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcbnZhciBPcHRpb24kMSA9IE9wdGlvbjtcblxudmFyIHBsYWNlaG9sZGVyQ1NTID0gZnVuY3Rpb24gcGxhY2Vob2xkZXJDU1MoX3JlZiwgdW5zdHlsZWQpIHtcbiAgdmFyIF9yZWYkdGhlbWUgPSBfcmVmLnRoZW1lLFxuICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmcsXG4gICAgY29sb3JzID0gX3JlZiR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKHtcbiAgICBsYWJlbDogJ3BsYWNlaG9sZGVyJyxcbiAgICBncmlkQXJlYTogJzEgLyAxIC8gMiAvIDMnXG4gIH0sIHVuc3R5bGVkID8ge30gOiB7XG4gICAgY29sb3I6IGNvbG9ycy5uZXV0cmFsNTAsXG4gICAgbWFyZ2luTGVmdDogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgbWFyZ2luUmlnaHQ6IHNwYWNpbmcuYmFzZVVuaXQgLyAyXG4gIH0pO1xufTtcbnZhciBQbGFjZWhvbGRlciA9IGZ1bmN0aW9uIFBsYWNlaG9sZGVyKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBnZXRTdHlsZVByb3BzKHByb3BzLCAncGxhY2Vob2xkZXInLCB7XG4gICAgcGxhY2Vob2xkZXI6IHRydWVcbiAgfSksIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xudmFyIFBsYWNlaG9sZGVyJDEgPSBQbGFjZWhvbGRlcjtcblxudmFyIGNzcyA9IGZ1bmN0aW9uIGNzcyhfcmVmLCB1bnN0eWxlZCkge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9yZWYuaXNEaXNhYmxlZCxcbiAgICBfcmVmJHRoZW1lID0gX3JlZi50aGVtZSxcbiAgICBzcGFjaW5nID0gX3JlZiR0aGVtZS5zcGFjaW5nLFxuICAgIGNvbG9ycyA9IF9yZWYkdGhlbWUuY29sb3JzO1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgbGFiZWw6ICdzaW5nbGVWYWx1ZScsXG4gICAgZ3JpZEFyZWE6ICcxIC8gMSAvIDIgLyAzJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgfSwgdW5zdHlsZWQgPyB7fSA6IHtcbiAgICBjb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsNDAgOiBjb2xvcnMubmV1dHJhbDgwLFxuICAgIG1hcmdpbkxlZnQ6IHNwYWNpbmcuYmFzZVVuaXQgLyAyLFxuICAgIG1hcmdpblJpZ2h0OiBzcGFjaW5nLmJhc2VVbml0IC8gMlxuICB9KTtcbn07XG52YXIgU2luZ2xlVmFsdWUgPSBmdW5jdGlvbiBTaW5nbGVWYWx1ZShwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICBpc0Rpc2FibGVkID0gcHJvcHMuaXNEaXNhYmxlZCxcbiAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ3NpbmdsZVZhbHVlJywge1xuICAgICdzaW5nbGUtdmFsdWUnOiB0cnVlLFxuICAgICdzaW5nbGUtdmFsdWUtLWlzLWRpc2FibGVkJzogaXNEaXNhYmxlZFxuICB9KSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuKTtcbn07XG52YXIgU2luZ2xlVmFsdWUkMSA9IFNpbmdsZVZhbHVlO1xuXG52YXIgY29tcG9uZW50cyA9IHtcbiAgQ2xlYXJJbmRpY2F0b3I6IENsZWFySW5kaWNhdG9yLFxuICBDb250cm9sOiBDb250cm9sJDEsXG4gIERyb3Bkb3duSW5kaWNhdG9yOiBEcm9wZG93bkluZGljYXRvcixcbiAgRG93bkNoZXZyb246IERvd25DaGV2cm9uLFxuICBDcm9zc0ljb246IENyb3NzSWNvbixcbiAgR3JvdXA6IEdyb3VwJDEsXG4gIEdyb3VwSGVhZGluZzogR3JvdXBIZWFkaW5nLFxuICBJbmRpY2F0b3JzQ29udGFpbmVyOiBJbmRpY2F0b3JzQ29udGFpbmVyLFxuICBJbmRpY2F0b3JTZXBhcmF0b3I6IEluZGljYXRvclNlcGFyYXRvcixcbiAgSW5wdXQ6IElucHV0JDEsXG4gIExvYWRpbmdJbmRpY2F0b3I6IExvYWRpbmdJbmRpY2F0b3IsXG4gIE1lbnU6IE1lbnUkMSxcbiAgTWVudUxpc3Q6IE1lbnVMaXN0LFxuICBNZW51UG9ydGFsOiBNZW51UG9ydGFsLFxuICBMb2FkaW5nTWVzc2FnZTogTG9hZGluZ01lc3NhZ2UsXG4gIE5vT3B0aW9uc01lc3NhZ2U6IE5vT3B0aW9uc01lc3NhZ2UsXG4gIE11bHRpVmFsdWU6IE11bHRpVmFsdWUkMSxcbiAgTXVsdGlWYWx1ZUNvbnRhaW5lcjogTXVsdGlWYWx1ZUNvbnRhaW5lcixcbiAgTXVsdGlWYWx1ZUxhYmVsOiBNdWx0aVZhbHVlTGFiZWwsXG4gIE11bHRpVmFsdWVSZW1vdmU6IE11bHRpVmFsdWVSZW1vdmUsXG4gIE9wdGlvbjogT3B0aW9uJDEsXG4gIFBsYWNlaG9sZGVyOiBQbGFjZWhvbGRlciQxLFxuICBTZWxlY3RDb250YWluZXI6IFNlbGVjdENvbnRhaW5lcixcbiAgU2luZ2xlVmFsdWU6IFNpbmdsZVZhbHVlJDEsXG4gIFZhbHVlQ29udGFpbmVyOiBWYWx1ZUNvbnRhaW5lclxufTtcbnZhciBkZWZhdWx0Q29tcG9uZW50cyA9IGZ1bmN0aW9uIGRlZmF1bHRDb21wb25lbnRzKHByb3BzKSB7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGNvbXBvbmVudHMpLCBwcm9wcy5jb21wb25lbnRzKTtcbn07XG5cbmV4cG9ydCB7IGlzTW9iaWxlRGV2aWNlIGFzIEEsIG11bHRpVmFsdWVBc1ZhbHVlIGFzIEIsIHNpbmdsZVZhbHVlQXNWYWx1ZSBhcyBDLCB2YWx1ZVRlcm5hcnkgYXMgRCwgY2xhc3NOYW1lcyBhcyBFLCBkZWZhdWx0Q29tcG9uZW50cyBhcyBGLCBpc0RvY3VtZW50RWxlbWVudCBhcyBHLCBjbGVhblZhbHVlIGFzIEgsIHNjcm9sbEludG9WaWV3IGFzIEksIG5vb3AgYXMgSiwgbm90TnVsbGlzaCBhcyBLLCBoYW5kbGVJbnB1dENoYW5nZSBhcyBMLCBNZW51UGxhY2VyIGFzIE0sIGNsZWFySW5kaWNhdG9yQ1NTIGFzIGEsIGNvbnRhaW5lckNTUyBhcyBiLCBjb21wb25lbnRzIGFzIGMsIGNzcyQxIGFzIGQsIGRyb3Bkb3duSW5kaWNhdG9yQ1NTIGFzIGUsIGdyb3VwSGVhZGluZ0NTUyBhcyBmLCBncm91cENTUyBhcyBnLCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgYXMgaCwgaW5kaWNhdG9yc0NvbnRhaW5lckNTUyBhcyBpLCBpbnB1dENTUyBhcyBqLCBsb2FkaW5nTWVzc2FnZUNTUyBhcyBrLCBsb2FkaW5nSW5kaWNhdG9yQ1NTIGFzIGwsIG1lbnVDU1MgYXMgbSwgbWVudUxpc3RDU1MgYXMgbiwgbWVudVBvcnRhbENTUyBhcyBvLCBtdWx0aVZhbHVlQ1NTIGFzIHAsIG11bHRpVmFsdWVMYWJlbENTUyBhcyBxLCByZW1vdmVQcm9wcyBhcyByLCBzdXBwb3J0c1Bhc3NpdmVFdmVudHMgYXMgcywgbXVsdGlWYWx1ZVJlbW92ZUNTUyBhcyB0LCBub09wdGlvbnNNZXNzYWdlQ1NTIGFzIHUsIG9wdGlvbkNTUyBhcyB2LCBwbGFjZWhvbGRlckNTUyBhcyB3LCBjc3MgYXMgeCwgdmFsdWVDb250YWluZXJDU1MgYXMgeSwgaXNUb3VjaENhcGFibGUgYXMgeiB9O1xuIiwidmFyIHNhZmVJc05hTiA9IE51bWJlci5pc05hTiB8fFxuICAgIGZ1bmN0aW9uIHBvbnlmaWxsKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHZhbHVlICE9PSB2YWx1ZTtcbiAgICB9O1xuZnVuY3Rpb24gaXNFcXVhbChmaXJzdCwgc2Vjb25kKSB7XG4gICAgaWYgKGZpcnN0ID09PSBzZWNvbmQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChzYWZlSXNOYU4oZmlyc3QpICYmIHNhZmVJc05hTihzZWNvbmQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBhcmVJbnB1dHNFcXVhbChuZXdJbnB1dHMsIGxhc3RJbnB1dHMpIHtcbiAgICBpZiAobmV3SW5wdXRzLmxlbmd0aCAhPT0gbGFzdElucHV0cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld0lucHV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIWlzRXF1YWwobmV3SW5wdXRzW2ldLCBsYXN0SW5wdXRzW2ldKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBtZW1vaXplT25lKHJlc3VsdEZuLCBpc0VxdWFsKSB7XG4gICAgaWYgKGlzRXF1YWwgPT09IHZvaWQgMCkgeyBpc0VxdWFsID0gYXJlSW5wdXRzRXF1YWw7IH1cbiAgICB2YXIgY2FjaGUgPSBudWxsO1xuICAgIGZ1bmN0aW9uIG1lbW9pemVkKCkge1xuICAgICAgICB2YXIgbmV3QXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgbmV3QXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYWNoZSAmJiBjYWNoZS5sYXN0VGhpcyA9PT0gdGhpcyAmJiBpc0VxdWFsKG5ld0FyZ3MsIGNhY2hlLmxhc3RBcmdzKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlLmxhc3RSZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxhc3RSZXN1bHQgPSByZXN1bHRGbi5hcHBseSh0aGlzLCBuZXdBcmdzKTtcbiAgICAgICAgY2FjaGUgPSB7XG4gICAgICAgICAgICBsYXN0UmVzdWx0OiBsYXN0UmVzdWx0LFxuICAgICAgICAgICAgbGFzdEFyZ3M6IG5ld0FyZ3MsXG4gICAgICAgICAgICBsYXN0VGhpczogdGhpcyxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGxhc3RSZXN1bHQ7XG4gICAgfVxuICAgIG1lbW9pemVkLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgIGNhY2hlID0gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBtZW1vaXplZDtcbn1cblxuZXhwb3J0IHsgbWVtb2l6ZU9uZSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzJztcbmltcG9ydCBfY3JlYXRlU3VwZXIgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlU3VwZXInO1xuaW1wb3J0IF90b0NvbnN1bWFibGVBcnJheSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheSc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNZW1vLCBGcmFnbWVudCwgdXNlUmVmLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByIGFzIHJlbW92ZVByb3BzLCBzIGFzIHN1cHBvcnRzUGFzc2l2ZUV2ZW50cywgYSBhcyBjbGVhckluZGljYXRvckNTUywgYiBhcyBjb250YWluZXJDU1MsIGQgYXMgY3NzJDEsIGUgYXMgZHJvcGRvd25JbmRpY2F0b3JDU1MsIGcgYXMgZ3JvdXBDU1MsIGYgYXMgZ3JvdXBIZWFkaW5nQ1NTLCBpIGFzIGluZGljYXRvcnNDb250YWluZXJDU1MsIGggYXMgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTLCBqIGFzIGlucHV0Q1NTLCBsIGFzIGxvYWRpbmdJbmRpY2F0b3JDU1MsIGsgYXMgbG9hZGluZ01lc3NhZ2VDU1MsIG0gYXMgbWVudUNTUywgbiBhcyBtZW51TGlzdENTUywgbyBhcyBtZW51UG9ydGFsQ1NTLCBwIGFzIG11bHRpVmFsdWVDU1MsIHEgYXMgbXVsdGlWYWx1ZUxhYmVsQ1NTLCB0IGFzIG11bHRpVmFsdWVSZW1vdmVDU1MsIHUgYXMgbm9PcHRpb25zTWVzc2FnZUNTUywgdiBhcyBvcHRpb25DU1MsIHcgYXMgcGxhY2Vob2xkZXJDU1MsIHggYXMgY3NzJDIsIHkgYXMgdmFsdWVDb250YWluZXJDU1MsIHogYXMgaXNUb3VjaENhcGFibGUsIEEgYXMgaXNNb2JpbGVEZXZpY2UsIEIgYXMgbXVsdGlWYWx1ZUFzVmFsdWUsIEMgYXMgc2luZ2xlVmFsdWVBc1ZhbHVlLCBEIGFzIHZhbHVlVGVybmFyeSwgRSBhcyBjbGFzc05hbWVzLCBGIGFzIGRlZmF1bHRDb21wb25lbnRzLCBHIGFzIGlzRG9jdW1lbnRFbGVtZW50LCBIIGFzIGNsZWFuVmFsdWUsIEkgYXMgc2Nyb2xsSW50b1ZpZXcsIEogYXMgbm9vcCwgTSBhcyBNZW51UGxhY2VyLCBLIGFzIG5vdE51bGxpc2ggfSBmcm9tICcuL2luZGV4LTY0MWVlNWI4LmVzbS5qcyc7XG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCBtZW1vaXplT25lIGZyb20gJ21lbW9pemUtb25lJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuXG5mdW5jdGlvbiBfRU1PVElPTl9TVFJJTkdJRklFRF9DU1NfRVJST1JfXyQyKCkgeyByZXR1cm4gXCJZb3UgaGF2ZSB0cmllZCB0byBzdHJpbmdpZnkgb2JqZWN0IHJldHVybmVkIGZyb20gYGNzc2AgZnVuY3Rpb24uIEl0IGlzbid0IHN1cHBvc2VkIHRvIGJlIHVzZWQgZGlyZWN0bHkgKGUuZy4gYXMgdmFsdWUgb2YgdGhlIGBjbGFzc05hbWVgIHByb3ApLCBidXQgcmF0aGVyIGhhbmRlZCB0byBlbW90aW9uIHNvIGl0IGNhbiBoYW5kbGUgaXQgKGUuZy4gYXMgdmFsdWUgb2YgYGNzc2AgcHJvcCkuXCI7IH1cblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG52YXIgX3JlZiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgbmFtZTogXCI3cGcwY2otYTExeVRleHRcIixcbiAgc3R5bGVzOiBcImxhYmVsOmExMXlUZXh0O3otaW5kZXg6OTk5OTtib3JkZXI6MDtjbGlwOnJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtoZWlnaHQ6MXB4O3dpZHRoOjFweDtwb3NpdGlvbjphYnNvbHV0ZTtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzowO3doaXRlLXNwYWNlOm5vd3JhcFwiXG59IDoge1xuICBuYW1lOiBcIjFmNDNhdnotYTExeVRleHQtQTExeVRleHRcIixcbiAgc3R5bGVzOiBcImxhYmVsOmExMXlUZXh0O3otaW5kZXg6OTk5OTtib3JkZXI6MDtjbGlwOnJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtoZWlnaHQ6MXB4O3dpZHRoOjFweDtwb3NpdGlvbjphYnNvbHV0ZTtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzowO3doaXRlLXNwYWNlOm5vd3JhcDtsYWJlbDpBMTF5VGV4dDtcIixcbiAgbWFwOiBcIi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrRXhNWGxVWlhoMExuUnplQ0pkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZQU1NJc0ltWnBiR1VpT2lKQk1URjVWR1Y0ZEM1MGMzZ2lMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2lvZ1FHcHplQ0JxYzNnZ0tpOWNibWx0Y0c5eWRDQjdJRXBUV0NCOUlHWnliMjBnSjNKbFlXTjBKenRjYm1sdGNHOXlkQ0I3SUdwemVDQjlJR1p5YjIwZ0owQmxiVzkwYVc5dUwzSmxZV04wSnp0Y2JseHVMeThnUVhOemFYTjBhWFpsSUhSbGVIUWdkRzhnWkdWelkzSnBZbVVnZG1semRXRnNJR1ZzWlcxbGJuUnpMaUJJYVdSa1pXNGdabTl5SUhOcFoyaDBaV1FnZFhObGNuTXVYRzVqYjI1emRDQkJNVEY1VkdWNGRDQTlJQ2h3Y205d2N6b2dTbE5ZTGtsdWRISnBibk5wWTBWc1pXMWxiblJ6V3lkemNHRnVKMTBwSUQwK0lDaGNiaUFnUEhOd1lXNWNiaUFnSUNCamMzTTllM3RjYmlBZ0lDQWdJR3hoWW1Wc09pQW5ZVEV4ZVZSbGVIUW5MRnh1SUNBZ0lDQWdla2x1WkdWNE9pQTVPVGs1TEZ4dUlDQWdJQ0FnWW05eVpHVnlPaUF3TEZ4dUlDQWdJQ0FnWTJ4cGNEb2dKM0psWTNRb01YQjRMQ0F4Y0hnc0lERndlQ3dnTVhCNEtTY3NYRzRnSUNBZ0lDQm9aV2xuYUhRNklERXNYRzRnSUNBZ0lDQjNhV1IwYURvZ01TeGNiaUFnSUNBZ0lIQnZjMmwwYVc5dU9pQW5ZV0p6YjJ4MWRHVW5MRnh1SUNBZ0lDQWdiM1psY21ac2IzYzZJQ2RvYVdSa1pXNG5MRnh1SUNBZ0lDQWdjR0ZrWkdsdVp6b2dNQ3hjYmlBZ0lDQWdJSGRvYVhSbFUzQmhZMlU2SUNkdWIzZHlZWEFuTEZ4dUlDQWdJSDE5WEc0Z0lDQWdleTR1TG5CeWIzQnpmVnh1SUNBdlBseHVLVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnUVRFeGVWUmxlSFE3WEc0aVhYMD0gKi9cIixcbiAgdG9TdHJpbmc6IF9FTU9USU9OX1NUUklOR0lGSUVEX0NTU19FUlJPUl9fJDJcbn07XG52YXIgQTExeVRleHQgPSBmdW5jdGlvbiBBMTF5VGV4dChwcm9wcykge1xuICByZXR1cm4ganN4KFwic3BhblwiLCBfZXh0ZW5kcyh7XG4gICAgY3NzOiBfcmVmXG4gIH0sIHByb3BzKSk7XG59O1xudmFyIEExMXlUZXh0JDEgPSBBMTF5VGV4dDtcblxudmFyIGRlZmF1bHRBcmlhTGl2ZU1lc3NhZ2VzID0ge1xuICBndWlkYW5jZTogZnVuY3Rpb24gZ3VpZGFuY2UocHJvcHMpIHtcbiAgICB2YXIgaXNTZWFyY2hhYmxlID0gcHJvcHMuaXNTZWFyY2hhYmxlLFxuICAgICAgaXNNdWx0aSA9IHByb3BzLmlzTXVsdGksXG4gICAgICB0YWJTZWxlY3RzVmFsdWUgPSBwcm9wcy50YWJTZWxlY3RzVmFsdWUsXG4gICAgICBjb250ZXh0ID0gcHJvcHMuY29udGV4dCxcbiAgICAgIGlzSW5pdGlhbEZvY3VzID0gcHJvcHMuaXNJbml0aWFsRm9jdXM7XG4gICAgc3dpdGNoIChjb250ZXh0KSB7XG4gICAgICBjYXNlICdtZW51JzpcbiAgICAgICAgcmV0dXJuIFwiVXNlIFVwIGFuZCBEb3duIHRvIGNob29zZSBvcHRpb25zLCBwcmVzcyBFbnRlciB0byBzZWxlY3QgdGhlIGN1cnJlbnRseSBmb2N1c2VkIG9wdGlvbiwgcHJlc3MgRXNjYXBlIHRvIGV4aXQgdGhlIG1lbnVcIi5jb25jYXQodGFiU2VsZWN0c1ZhbHVlID8gJywgcHJlc3MgVGFiIHRvIHNlbGVjdCB0aGUgb3B0aW9uIGFuZCBleGl0IHRoZSBtZW51JyA6ICcnLCBcIi5cIik7XG4gICAgICBjYXNlICdpbnB1dCc6XG4gICAgICAgIHJldHVybiBpc0luaXRpYWxGb2N1cyA/IFwiXCIuY29uY2F0KHByb3BzWydhcmlhLWxhYmVsJ10gfHwgJ1NlbGVjdCcsIFwiIGlzIGZvY3VzZWQgXCIpLmNvbmNhdChpc1NlYXJjaGFibGUgPyAnLHR5cGUgdG8gcmVmaW5lIGxpc3QnIDogJycsIFwiLCBwcmVzcyBEb3duIHRvIG9wZW4gdGhlIG1lbnUsIFwiKS5jb25jYXQoaXNNdWx0aSA/ICcgcHJlc3MgbGVmdCB0byBmb2N1cyBzZWxlY3RlZCB2YWx1ZXMnIDogJycpIDogJyc7XG4gICAgICBjYXNlICd2YWx1ZSc6XG4gICAgICAgIHJldHVybiAnVXNlIGxlZnQgYW5kIHJpZ2h0IHRvIHRvZ2dsZSBiZXR3ZWVuIGZvY3VzZWQgdmFsdWVzLCBwcmVzcyBCYWNrc3BhY2UgdG8gcmVtb3ZlIHRoZSBjdXJyZW50bHkgZm9jdXNlZCB2YWx1ZSc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9LFxuICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UocHJvcHMpIHtcbiAgICB2YXIgYWN0aW9uID0gcHJvcHMuYWN0aW9uLFxuICAgICAgX3Byb3BzJGxhYmVsID0gcHJvcHMubGFiZWwsXG4gICAgICBsYWJlbCA9IF9wcm9wcyRsYWJlbCA9PT0gdm9pZCAwID8gJycgOiBfcHJvcHMkbGFiZWwsXG4gICAgICBsYWJlbHMgPSBwcm9wcy5sYWJlbHMsXG4gICAgICBpc0Rpc2FibGVkID0gcHJvcHMuaXNEaXNhYmxlZDtcbiAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgY2FzZSAnZGVzZWxlY3Qtb3B0aW9uJzpcbiAgICAgIGNhc2UgJ3BvcC12YWx1ZSc6XG4gICAgICBjYXNlICdyZW1vdmUtdmFsdWUnOlxuICAgICAgICByZXR1cm4gXCJvcHRpb24gXCIuY29uY2F0KGxhYmVsLCBcIiwgZGVzZWxlY3RlZC5cIik7XG4gICAgICBjYXNlICdjbGVhcic6XG4gICAgICAgIHJldHVybiAnQWxsIHNlbGVjdGVkIG9wdGlvbnMgaGF2ZSBiZWVuIGNsZWFyZWQuJztcbiAgICAgIGNhc2UgJ2luaXRpYWwtaW5wdXQtZm9jdXMnOlxuICAgICAgICByZXR1cm4gXCJvcHRpb25cIi5jb25jYXQobGFiZWxzLmxlbmd0aCA+IDEgPyAncycgOiAnJywgXCIgXCIpLmNvbmNhdChsYWJlbHMuam9pbignLCcpLCBcIiwgc2VsZWN0ZWQuXCIpO1xuICAgICAgY2FzZSAnc2VsZWN0LW9wdGlvbic6XG4gICAgICAgIHJldHVybiBpc0Rpc2FibGVkID8gXCJvcHRpb24gXCIuY29uY2F0KGxhYmVsLCBcIiBpcyBkaXNhYmxlZC4gU2VsZWN0IGFub3RoZXIgb3B0aW9uLlwiKSA6IFwib3B0aW9uIFwiLmNvbmNhdChsYWJlbCwgXCIsIHNlbGVjdGVkLlwiKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH0sXG4gIG9uRm9jdXM6IGZ1bmN0aW9uIG9uRm9jdXMocHJvcHMpIHtcbiAgICB2YXIgY29udGV4dCA9IHByb3BzLmNvbnRleHQsXG4gICAgICBmb2N1c2VkID0gcHJvcHMuZm9jdXNlZCxcbiAgICAgIG9wdGlvbnMgPSBwcm9wcy5vcHRpb25zLFxuICAgICAgX3Byb3BzJGxhYmVsMiA9IHByb3BzLmxhYmVsLFxuICAgICAgbGFiZWwgPSBfcHJvcHMkbGFiZWwyID09PSB2b2lkIDAgPyAnJyA6IF9wcm9wcyRsYWJlbDIsXG4gICAgICBzZWxlY3RWYWx1ZSA9IHByb3BzLnNlbGVjdFZhbHVlLFxuICAgICAgaXNEaXNhYmxlZCA9IHByb3BzLmlzRGlzYWJsZWQsXG4gICAgICBpc1NlbGVjdGVkID0gcHJvcHMuaXNTZWxlY3RlZCxcbiAgICAgIGlzQXBwbGVEZXZpY2UgPSBwcm9wcy5pc0FwcGxlRGV2aWNlO1xuICAgIHZhciBnZXRBcnJheUluZGV4ID0gZnVuY3Rpb24gZ2V0QXJyYXlJbmRleChhcnIsIGl0ZW0pIHtcbiAgICAgIHJldHVybiBhcnIgJiYgYXJyLmxlbmd0aCA/IFwiXCIuY29uY2F0KGFyci5pbmRleE9mKGl0ZW0pICsgMSwgXCIgb2YgXCIpLmNvbmNhdChhcnIubGVuZ3RoKSA6ICcnO1xuICAgIH07XG4gICAgaWYgKGNvbnRleHQgPT09ICd2YWx1ZScgJiYgc2VsZWN0VmFsdWUpIHtcbiAgICAgIHJldHVybiBcInZhbHVlIFwiLmNvbmNhdChsYWJlbCwgXCIgZm9jdXNlZCwgXCIpLmNvbmNhdChnZXRBcnJheUluZGV4KHNlbGVjdFZhbHVlLCBmb2N1c2VkKSwgXCIuXCIpO1xuICAgIH1cbiAgICBpZiAoY29udGV4dCA9PT0gJ21lbnUnICYmIGlzQXBwbGVEZXZpY2UpIHtcbiAgICAgIHZhciBkaXNhYmxlZCA9IGlzRGlzYWJsZWQgPyAnIGRpc2FibGVkJyA6ICcnO1xuICAgICAgdmFyIHN0YXR1cyA9IFwiXCIuY29uY2F0KGlzU2VsZWN0ZWQgPyAnIHNlbGVjdGVkJyA6ICcnKS5jb25jYXQoZGlzYWJsZWQpO1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGxhYmVsKS5jb25jYXQoc3RhdHVzLCBcIiwgXCIpLmNvbmNhdChnZXRBcnJheUluZGV4KG9wdGlvbnMsIGZvY3VzZWQpLCBcIi5cIik7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfSxcbiAgb25GaWx0ZXI6IGZ1bmN0aW9uIG9uRmlsdGVyKHByb3BzKSB7XG4gICAgdmFyIGlucHV0VmFsdWUgPSBwcm9wcy5pbnB1dFZhbHVlLFxuICAgICAgcmVzdWx0c01lc3NhZ2UgPSBwcm9wcy5yZXN1bHRzTWVzc2FnZTtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQocmVzdWx0c01lc3NhZ2UpLmNvbmNhdChpbnB1dFZhbHVlID8gJyBmb3Igc2VhcmNoIHRlcm0gJyArIGlucHV0VmFsdWUgOiAnJywgXCIuXCIpO1xuICB9XG59O1xuXG52YXIgTGl2ZVJlZ2lvbiA9IGZ1bmN0aW9uIExpdmVSZWdpb24ocHJvcHMpIHtcbiAgdmFyIGFyaWFTZWxlY3Rpb24gPSBwcm9wcy5hcmlhU2VsZWN0aW9uLFxuICAgIGZvY3VzZWRPcHRpb24gPSBwcm9wcy5mb2N1c2VkT3B0aW9uLFxuICAgIGZvY3VzZWRWYWx1ZSA9IHByb3BzLmZvY3VzZWRWYWx1ZSxcbiAgICBmb2N1c2FibGVPcHRpb25zID0gcHJvcHMuZm9jdXNhYmxlT3B0aW9ucyxcbiAgICBpc0ZvY3VzZWQgPSBwcm9wcy5pc0ZvY3VzZWQsXG4gICAgc2VsZWN0VmFsdWUgPSBwcm9wcy5zZWxlY3RWYWx1ZSxcbiAgICBzZWxlY3RQcm9wcyA9IHByb3BzLnNlbGVjdFByb3BzLFxuICAgIGlkID0gcHJvcHMuaWQsXG4gICAgaXNBcHBsZURldmljZSA9IHByb3BzLmlzQXBwbGVEZXZpY2U7XG4gIHZhciBhcmlhTGl2ZU1lc3NhZ2VzID0gc2VsZWN0UHJvcHMuYXJpYUxpdmVNZXNzYWdlcyxcbiAgICBnZXRPcHRpb25MYWJlbCA9IHNlbGVjdFByb3BzLmdldE9wdGlvbkxhYmVsLFxuICAgIGlucHV0VmFsdWUgPSBzZWxlY3RQcm9wcy5pbnB1dFZhbHVlLFxuICAgIGlzTXVsdGkgPSBzZWxlY3RQcm9wcy5pc011bHRpLFxuICAgIGlzT3B0aW9uRGlzYWJsZWQgPSBzZWxlY3RQcm9wcy5pc09wdGlvbkRpc2FibGVkLFxuICAgIGlzU2VhcmNoYWJsZSA9IHNlbGVjdFByb3BzLmlzU2VhcmNoYWJsZSxcbiAgICBtZW51SXNPcGVuID0gc2VsZWN0UHJvcHMubWVudUlzT3BlbixcbiAgICBvcHRpb25zID0gc2VsZWN0UHJvcHMub3B0aW9ucyxcbiAgICBzY3JlZW5SZWFkZXJTdGF0dXMgPSBzZWxlY3RQcm9wcy5zY3JlZW5SZWFkZXJTdGF0dXMsXG4gICAgdGFiU2VsZWN0c1ZhbHVlID0gc2VsZWN0UHJvcHMudGFiU2VsZWN0c1ZhbHVlLFxuICAgIGlzTG9hZGluZyA9IHNlbGVjdFByb3BzLmlzTG9hZGluZztcbiAgdmFyIGFyaWFMYWJlbCA9IHNlbGVjdFByb3BzWydhcmlhLWxhYmVsJ107XG4gIHZhciBhcmlhTGl2ZSA9IHNlbGVjdFByb3BzWydhcmlhLWxpdmUnXTtcblxuICAvLyBVcGRhdGUgYXJpYSBsaXZlIG1lc3NhZ2UgY29uZmlndXJhdGlvbiB3aGVuIHByb3AgY2hhbmdlc1xuICB2YXIgbWVzc2FnZXMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBkZWZhdWx0QXJpYUxpdmVNZXNzYWdlcyksIGFyaWFMaXZlTWVzc2FnZXMgfHwge30pO1xuICB9LCBbYXJpYUxpdmVNZXNzYWdlc10pO1xuXG4gIC8vIFVwZGF0ZSBhcmlhIGxpdmUgc2VsZWN0ZWQgb3B0aW9uIHdoZW4gcHJvcCBjaGFuZ2VzXG4gIHZhciBhcmlhU2VsZWN0ZWQgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICcnO1xuICAgIGlmIChhcmlhU2VsZWN0aW9uICYmIG1lc3NhZ2VzLm9uQ2hhbmdlKSB7XG4gICAgICB2YXIgb3B0aW9uID0gYXJpYVNlbGVjdGlvbi5vcHRpb24sXG4gICAgICAgIHNlbGVjdGVkT3B0aW9ucyA9IGFyaWFTZWxlY3Rpb24ub3B0aW9ucyxcbiAgICAgICAgcmVtb3ZlZFZhbHVlID0gYXJpYVNlbGVjdGlvbi5yZW1vdmVkVmFsdWUsXG4gICAgICAgIHJlbW92ZWRWYWx1ZXMgPSBhcmlhU2VsZWN0aW9uLnJlbW92ZWRWYWx1ZXMsXG4gICAgICAgIHZhbHVlID0gYXJpYVNlbGVjdGlvbi52YWx1ZTtcbiAgICAgIC8vIHNlbGVjdC1vcHRpb24gd2hlbiAhaXNNdWx0aSBkb2VzIG5vdCByZXR1cm4gb3B0aW9uIHNvIHdlIGFzc3VtZSBzZWxlY3RlZCBvcHRpb24gaXMgdmFsdWVcbiAgICAgIHZhciBhc09wdGlvbiA9IGZ1bmN0aW9uIGFzT3B0aW9uKHZhbCkge1xuICAgICAgICByZXR1cm4gIUFycmF5LmlzQXJyYXkodmFsKSA/IHZhbCA6IG51bGw7XG4gICAgICB9O1xuXG4gICAgICAvLyBJZiB0aGVyZSBpcyBqdXN0IG9uZSBpdGVtIGZyb20gdGhlIGFjdGlvbiB0aGVuIGdldCBpdHMgbGFiZWxcbiAgICAgIHZhciBzZWxlY3RlZCA9IHJlbW92ZWRWYWx1ZSB8fCBvcHRpb24gfHwgYXNPcHRpb24odmFsdWUpO1xuICAgICAgdmFyIGxhYmVsID0gc2VsZWN0ZWQgPyBnZXRPcHRpb25MYWJlbChzZWxlY3RlZCkgOiAnJztcblxuICAgICAgLy8gSWYgdGhlcmUgYXJlIG11bHRpcGxlIGl0ZW1zIGZyb20gdGhlIGFjdGlvbiB0aGVuIHJldHVybiBhbiBhcnJheSBvZiBsYWJlbHNcbiAgICAgIHZhciBtdWx0aVNlbGVjdGVkID0gc2VsZWN0ZWRPcHRpb25zIHx8IHJlbW92ZWRWYWx1ZXMgfHwgdW5kZWZpbmVkO1xuICAgICAgdmFyIGxhYmVscyA9IG11bHRpU2VsZWN0ZWQgPyBtdWx0aVNlbGVjdGVkLm1hcChnZXRPcHRpb25MYWJlbCkgOiBbXTtcbiAgICAgIHZhciBvbkNoYW5nZVByb3BzID0gX29iamVjdFNwcmVhZCh7XG4gICAgICAgIC8vIG11bHRpU2VsZWN0ZWQgaXRlbXMgYXJlIHVzdWFsbHkgaXRlbXMgdGhhdCBoYXZlIGFscmVhZHkgYmVlbiBzZWxlY3RlZFxuICAgICAgICAvLyBvciBzZXQgYnkgdGhlIHVzZXIgYXMgYSBkZWZhdWx0IHZhbHVlIHNvIHdlIGFzc3VtZSB0aGV5IGFyZSBub3QgZGlzYWJsZWRcbiAgICAgICAgaXNEaXNhYmxlZDogc2VsZWN0ZWQgJiYgaXNPcHRpb25EaXNhYmxlZChzZWxlY3RlZCwgc2VsZWN0VmFsdWUpLFxuICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgIGxhYmVsczogbGFiZWxzXG4gICAgICB9LCBhcmlhU2VsZWN0aW9uKTtcbiAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlcy5vbkNoYW5nZShvbkNoYW5nZVByb3BzKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sIFthcmlhU2VsZWN0aW9uLCBtZXNzYWdlcywgaXNPcHRpb25EaXNhYmxlZCwgc2VsZWN0VmFsdWUsIGdldE9wdGlvbkxhYmVsXSk7XG4gIHZhciBhcmlhRm9jdXNlZCA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHZhciBmb2N1c01zZyA9ICcnO1xuICAgIHZhciBmb2N1c2VkID0gZm9jdXNlZE9wdGlvbiB8fCBmb2N1c2VkVmFsdWU7XG4gICAgdmFyIGlzU2VsZWN0ZWQgPSAhIShmb2N1c2VkT3B0aW9uICYmIHNlbGVjdFZhbHVlICYmIHNlbGVjdFZhbHVlLmluY2x1ZGVzKGZvY3VzZWRPcHRpb24pKTtcbiAgICBpZiAoZm9jdXNlZCAmJiBtZXNzYWdlcy5vbkZvY3VzKSB7XG4gICAgICB2YXIgb25Gb2N1c1Byb3BzID0ge1xuICAgICAgICBmb2N1c2VkOiBmb2N1c2VkLFxuICAgICAgICBsYWJlbDogZ2V0T3B0aW9uTGFiZWwoZm9jdXNlZCksXG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzT3B0aW9uRGlzYWJsZWQoZm9jdXNlZCwgc2VsZWN0VmFsdWUpLFxuICAgICAgICBpc1NlbGVjdGVkOiBpc1NlbGVjdGVkLFxuICAgICAgICBvcHRpb25zOiBmb2N1c2FibGVPcHRpb25zLFxuICAgICAgICBjb250ZXh0OiBmb2N1c2VkID09PSBmb2N1c2VkT3B0aW9uID8gJ21lbnUnIDogJ3ZhbHVlJyxcbiAgICAgICAgc2VsZWN0VmFsdWU6IHNlbGVjdFZhbHVlLFxuICAgICAgICBpc0FwcGxlRGV2aWNlOiBpc0FwcGxlRGV2aWNlXG4gICAgICB9O1xuICAgICAgZm9jdXNNc2cgPSBtZXNzYWdlcy5vbkZvY3VzKG9uRm9jdXNQcm9wcyk7XG4gICAgfVxuICAgIHJldHVybiBmb2N1c01zZztcbiAgfSwgW2ZvY3VzZWRPcHRpb24sIGZvY3VzZWRWYWx1ZSwgZ2V0T3B0aW9uTGFiZWwsIGlzT3B0aW9uRGlzYWJsZWQsIG1lc3NhZ2VzLCBmb2N1c2FibGVPcHRpb25zLCBzZWxlY3RWYWx1ZSwgaXNBcHBsZURldmljZV0pO1xuICB2YXIgYXJpYVJlc3VsdHMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0c01zZyA9ICcnO1xuICAgIGlmIChtZW51SXNPcGVuICYmIG9wdGlvbnMubGVuZ3RoICYmICFpc0xvYWRpbmcgJiYgbWVzc2FnZXMub25GaWx0ZXIpIHtcbiAgICAgIHZhciByZXN1bHRzTWVzc2FnZSA9IHNjcmVlblJlYWRlclN0YXR1cyh7XG4gICAgICAgIGNvdW50OiBmb2N1c2FibGVPcHRpb25zLmxlbmd0aFxuICAgICAgfSk7XG4gICAgICByZXN1bHRzTXNnID0gbWVzc2FnZXMub25GaWx0ZXIoe1xuICAgICAgICBpbnB1dFZhbHVlOiBpbnB1dFZhbHVlLFxuICAgICAgICByZXN1bHRzTWVzc2FnZTogcmVzdWx0c01lc3NhZ2VcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0c01zZztcbiAgfSwgW2ZvY3VzYWJsZU9wdGlvbnMsIGlucHV0VmFsdWUsIG1lbnVJc09wZW4sIG1lc3NhZ2VzLCBvcHRpb25zLCBzY3JlZW5SZWFkZXJTdGF0dXMsIGlzTG9hZGluZ10pO1xuICB2YXIgaXNJbml0aWFsRm9jdXMgPSAoYXJpYVNlbGVjdGlvbiA9PT0gbnVsbCB8fCBhcmlhU2VsZWN0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhcmlhU2VsZWN0aW9uLmFjdGlvbikgPT09ICdpbml0aWFsLWlucHV0LWZvY3VzJztcbiAgdmFyIGFyaWFHdWlkYW5jZSA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHZhciBndWlkYW5jZU1zZyA9ICcnO1xuICAgIGlmIChtZXNzYWdlcy5ndWlkYW5jZSkge1xuICAgICAgdmFyIGNvbnRleHQgPSBmb2N1c2VkVmFsdWUgPyAndmFsdWUnIDogbWVudUlzT3BlbiA/ICdtZW51JyA6ICdpbnB1dCc7XG4gICAgICBndWlkYW5jZU1zZyA9IG1lc3NhZ2VzLmd1aWRhbmNlKHtcbiAgICAgICAgJ2FyaWEtbGFiZWwnOiBhcmlhTGFiZWwsXG4gICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgIGlzRGlzYWJsZWQ6IGZvY3VzZWRPcHRpb24gJiYgaXNPcHRpb25EaXNhYmxlZChmb2N1c2VkT3B0aW9uLCBzZWxlY3RWYWx1ZSksXG4gICAgICAgIGlzTXVsdGk6IGlzTXVsdGksXG4gICAgICAgIGlzU2VhcmNoYWJsZTogaXNTZWFyY2hhYmxlLFxuICAgICAgICB0YWJTZWxlY3RzVmFsdWU6IHRhYlNlbGVjdHNWYWx1ZSxcbiAgICAgICAgaXNJbml0aWFsRm9jdXM6IGlzSW5pdGlhbEZvY3VzXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGd1aWRhbmNlTXNnO1xuICB9LCBbYXJpYUxhYmVsLCBmb2N1c2VkT3B0aW9uLCBmb2N1c2VkVmFsdWUsIGlzTXVsdGksIGlzT3B0aW9uRGlzYWJsZWQsIGlzU2VhcmNoYWJsZSwgbWVudUlzT3BlbiwgbWVzc2FnZXMsIHNlbGVjdFZhbHVlLCB0YWJTZWxlY3RzVmFsdWUsIGlzSW5pdGlhbEZvY3VzXSk7XG4gIHZhciBTY3JlZW5SZWFkZXJUZXh0ID0ganN4KEZyYWdtZW50LCBudWxsLCBqc3goXCJzcGFuXCIsIHtcbiAgICBpZDogXCJhcmlhLXNlbGVjdGlvblwiXG4gIH0sIGFyaWFTZWxlY3RlZCksIGpzeChcInNwYW5cIiwge1xuICAgIGlkOiBcImFyaWEtZm9jdXNlZFwiXG4gIH0sIGFyaWFGb2N1c2VkKSwganN4KFwic3BhblwiLCB7XG4gICAgaWQ6IFwiYXJpYS1yZXN1bHRzXCJcbiAgfSwgYXJpYVJlc3VsdHMpLCBqc3goXCJzcGFuXCIsIHtcbiAgICBpZDogXCJhcmlhLWd1aWRhbmNlXCJcbiAgfSwgYXJpYUd1aWRhbmNlKSk7XG4gIHJldHVybiBqc3goRnJhZ21lbnQsIG51bGwsIGpzeChBMTF5VGV4dCQxLCB7XG4gICAgaWQ6IGlkXG4gIH0sIGlzSW5pdGlhbEZvY3VzICYmIFNjcmVlblJlYWRlclRleHQpLCBqc3goQTExeVRleHQkMSwge1xuICAgIFwiYXJpYS1saXZlXCI6IGFyaWFMaXZlLFxuICAgIFwiYXJpYS1hdG9taWNcIjogXCJmYWxzZVwiLFxuICAgIFwiYXJpYS1yZWxldmFudFwiOiBcImFkZGl0aW9ucyB0ZXh0XCIsXG4gICAgcm9sZTogXCJsb2dcIlxuICB9LCBpc0ZvY3VzZWQgJiYgIWlzSW5pdGlhbEZvY3VzICYmIFNjcmVlblJlYWRlclRleHQpKTtcbn07XG52YXIgTGl2ZVJlZ2lvbiQxID0gTGl2ZVJlZ2lvbjtcblxudmFyIGRpYWNyaXRpY3MgPSBbe1xuICBiYXNlOiAnQScsXG4gIGxldHRlcnM6IFwiQVxcdTI0QjZcXHVGRjIxXFx4QzBcXHhDMVxceEMyXFx1MUVBNlxcdTFFQTRcXHUxRUFBXFx1MUVBOFxceEMzXFx1MDEwMFxcdTAxMDJcXHUxRUIwXFx1MUVBRVxcdTFFQjRcXHUxRUIyXFx1MDIyNlxcdTAxRTBcXHhDNFxcdTAxREVcXHUxRUEyXFx4QzVcXHUwMUZBXFx1MDFDRFxcdTAyMDBcXHUwMjAyXFx1MUVBMFxcdTFFQUNcXHUxRUI2XFx1MUUwMFxcdTAxMDRcXHUwMjNBXFx1MkM2RlwiXG59LCB7XG4gIGJhc2U6ICdBQScsXG4gIGxldHRlcnM6IFwiXFx1QTczMlwiXG59LCB7XG4gIGJhc2U6ICdBRScsXG4gIGxldHRlcnM6IFwiXFx4QzZcXHUwMUZDXFx1MDFFMlwiXG59LCB7XG4gIGJhc2U6ICdBTycsXG4gIGxldHRlcnM6IFwiXFx1QTczNFwiXG59LCB7XG4gIGJhc2U6ICdBVScsXG4gIGxldHRlcnM6IFwiXFx1QTczNlwiXG59LCB7XG4gIGJhc2U6ICdBVicsXG4gIGxldHRlcnM6IFwiXFx1QTczOFxcdUE3M0FcIlxufSwge1xuICBiYXNlOiAnQVknLFxuICBsZXR0ZXJzOiBcIlxcdUE3M0NcIlxufSwge1xuICBiYXNlOiAnQicsXG4gIGxldHRlcnM6IFwiQlxcdTI0QjdcXHVGRjIyXFx1MUUwMlxcdTFFMDRcXHUxRTA2XFx1MDI0M1xcdTAxODJcXHUwMTgxXCJcbn0sIHtcbiAgYmFzZTogJ0MnLFxuICBsZXR0ZXJzOiBcIkNcXHUyNEI4XFx1RkYyM1xcdTAxMDZcXHUwMTA4XFx1MDEwQVxcdTAxMENcXHhDN1xcdTFFMDhcXHUwMTg3XFx1MDIzQlxcdUE3M0VcIlxufSwge1xuICBiYXNlOiAnRCcsXG4gIGxldHRlcnM6IFwiRFxcdTI0QjlcXHVGRjI0XFx1MUUwQVxcdTAxMEVcXHUxRTBDXFx1MUUxMFxcdTFFMTJcXHUxRTBFXFx1MDExMFxcdTAxOEJcXHUwMThBXFx1MDE4OVxcdUE3NzlcIlxufSwge1xuICBiYXNlOiAnRFonLFxuICBsZXR0ZXJzOiBcIlxcdTAxRjFcXHUwMUM0XCJcbn0sIHtcbiAgYmFzZTogJ0R6JyxcbiAgbGV0dGVyczogXCJcXHUwMUYyXFx1MDFDNVwiXG59LCB7XG4gIGJhc2U6ICdFJyxcbiAgbGV0dGVyczogXCJFXFx1MjRCQVxcdUZGMjVcXHhDOFxceEM5XFx4Q0FcXHUxRUMwXFx1MUVCRVxcdTFFQzRcXHUxRUMyXFx1MUVCQ1xcdTAxMTJcXHUxRTE0XFx1MUUxNlxcdTAxMTRcXHUwMTE2XFx4Q0JcXHUxRUJBXFx1MDExQVxcdTAyMDRcXHUwMjA2XFx1MUVCOFxcdTFFQzZcXHUwMjI4XFx1MUUxQ1xcdTAxMThcXHUxRTE4XFx1MUUxQVxcdTAxOTBcXHUwMThFXCJcbn0sIHtcbiAgYmFzZTogJ0YnLFxuICBsZXR0ZXJzOiBcIkZcXHUyNEJCXFx1RkYyNlxcdTFFMUVcXHUwMTkxXFx1QTc3QlwiXG59LCB7XG4gIGJhc2U6ICdHJyxcbiAgbGV0dGVyczogXCJHXFx1MjRCQ1xcdUZGMjdcXHUwMUY0XFx1MDExQ1xcdTFFMjBcXHUwMTFFXFx1MDEyMFxcdTAxRTZcXHUwMTIyXFx1MDFFNFxcdTAxOTNcXHVBN0EwXFx1QTc3RFxcdUE3N0VcIlxufSwge1xuICBiYXNlOiAnSCcsXG4gIGxldHRlcnM6IFwiSFxcdTI0QkRcXHVGRjI4XFx1MDEyNFxcdTFFMjJcXHUxRTI2XFx1MDIxRVxcdTFFMjRcXHUxRTI4XFx1MUUyQVxcdTAxMjZcXHUyQzY3XFx1MkM3NVxcdUE3OERcIlxufSwge1xuICBiYXNlOiAnSScsXG4gIGxldHRlcnM6IFwiSVxcdTI0QkVcXHVGRjI5XFx4Q0NcXHhDRFxceENFXFx1MDEyOFxcdTAxMkFcXHUwMTJDXFx1MDEzMFxceENGXFx1MUUyRVxcdTFFQzhcXHUwMUNGXFx1MDIwOFxcdTAyMEFcXHUxRUNBXFx1MDEyRVxcdTFFMkNcXHUwMTk3XCJcbn0sIHtcbiAgYmFzZTogJ0onLFxuICBsZXR0ZXJzOiBcIkpcXHUyNEJGXFx1RkYyQVxcdTAxMzRcXHUwMjQ4XCJcbn0sIHtcbiAgYmFzZTogJ0snLFxuICBsZXR0ZXJzOiBcIktcXHUyNEMwXFx1RkYyQlxcdTFFMzBcXHUwMUU4XFx1MUUzMlxcdTAxMzZcXHUxRTM0XFx1MDE5OFxcdTJDNjlcXHVBNzQwXFx1QTc0MlxcdUE3NDRcXHVBN0EyXCJcbn0sIHtcbiAgYmFzZTogJ0wnLFxuICBsZXR0ZXJzOiBcIkxcXHUyNEMxXFx1RkYyQ1xcdTAxM0ZcXHUwMTM5XFx1MDEzRFxcdTFFMzZcXHUxRTM4XFx1MDEzQlxcdTFFM0NcXHUxRTNBXFx1MDE0MVxcdTAyM0RcXHUyQzYyXFx1MkM2MFxcdUE3NDhcXHVBNzQ2XFx1QTc4MFwiXG59LCB7XG4gIGJhc2U6ICdMSicsXG4gIGxldHRlcnM6IFwiXFx1MDFDN1wiXG59LCB7XG4gIGJhc2U6ICdMaicsXG4gIGxldHRlcnM6IFwiXFx1MDFDOFwiXG59LCB7XG4gIGJhc2U6ICdNJyxcbiAgbGV0dGVyczogXCJNXFx1MjRDMlxcdUZGMkRcXHUxRTNFXFx1MUU0MFxcdTFFNDJcXHUyQzZFXFx1MDE5Q1wiXG59LCB7XG4gIGJhc2U6ICdOJyxcbiAgbGV0dGVyczogXCJOXFx1MjRDM1xcdUZGMkVcXHUwMUY4XFx1MDE0M1xceEQxXFx1MUU0NFxcdTAxNDdcXHUxRTQ2XFx1MDE0NVxcdTFFNEFcXHUxRTQ4XFx1MDIyMFxcdTAxOURcXHVBNzkwXFx1QTdBNFwiXG59LCB7XG4gIGJhc2U6ICdOSicsXG4gIGxldHRlcnM6IFwiXFx1MDFDQVwiXG59LCB7XG4gIGJhc2U6ICdOaicsXG4gIGxldHRlcnM6IFwiXFx1MDFDQlwiXG59LCB7XG4gIGJhc2U6ICdPJyxcbiAgbGV0dGVyczogXCJPXFx1MjRDNFxcdUZGMkZcXHhEMlxceEQzXFx4RDRcXHUxRUQyXFx1MUVEMFxcdTFFRDZcXHUxRUQ0XFx4RDVcXHUxRTRDXFx1MDIyQ1xcdTFFNEVcXHUwMTRDXFx1MUU1MFxcdTFFNTJcXHUwMTRFXFx1MDIyRVxcdTAyMzBcXHhENlxcdTAyMkFcXHUxRUNFXFx1MDE1MFxcdTAxRDFcXHUwMjBDXFx1MDIwRVxcdTAxQTBcXHUxRURDXFx1MUVEQVxcdTFFRTBcXHUxRURFXFx1MUVFMlxcdTFFQ0NcXHUxRUQ4XFx1MDFFQVxcdTAxRUNcXHhEOFxcdTAxRkVcXHUwMTg2XFx1MDE5RlxcdUE3NEFcXHVBNzRDXCJcbn0sIHtcbiAgYmFzZTogJ09JJyxcbiAgbGV0dGVyczogXCJcXHUwMUEyXCJcbn0sIHtcbiAgYmFzZTogJ09PJyxcbiAgbGV0dGVyczogXCJcXHVBNzRFXCJcbn0sIHtcbiAgYmFzZTogJ09VJyxcbiAgbGV0dGVyczogXCJcXHUwMjIyXCJcbn0sIHtcbiAgYmFzZTogJ1AnLFxuICBsZXR0ZXJzOiBcIlBcXHUyNEM1XFx1RkYzMFxcdTFFNTRcXHUxRTU2XFx1MDFBNFxcdTJDNjNcXHVBNzUwXFx1QTc1MlxcdUE3NTRcIlxufSwge1xuICBiYXNlOiAnUScsXG4gIGxldHRlcnM6IFwiUVxcdTI0QzZcXHVGRjMxXFx1QTc1NlxcdUE3NThcXHUwMjRBXCJcbn0sIHtcbiAgYmFzZTogJ1InLFxuICBsZXR0ZXJzOiBcIlJcXHUyNEM3XFx1RkYzMlxcdTAxNTRcXHUxRTU4XFx1MDE1OFxcdTAyMTBcXHUwMjEyXFx1MUU1QVxcdTFFNUNcXHUwMTU2XFx1MUU1RVxcdTAyNENcXHUyQzY0XFx1QTc1QVxcdUE3QTZcXHVBNzgyXCJcbn0sIHtcbiAgYmFzZTogJ1MnLFxuICBsZXR0ZXJzOiBcIlNcXHUyNEM4XFx1RkYzM1xcdTFFOUVcXHUwMTVBXFx1MUU2NFxcdTAxNUNcXHUxRTYwXFx1MDE2MFxcdTFFNjZcXHUxRTYyXFx1MUU2OFxcdTAyMThcXHUwMTVFXFx1MkM3RVxcdUE3QThcXHVBNzg0XCJcbn0sIHtcbiAgYmFzZTogJ1QnLFxuICBsZXR0ZXJzOiBcIlRcXHUyNEM5XFx1RkYzNFxcdTFFNkFcXHUwMTY0XFx1MUU2Q1xcdTAyMUFcXHUwMTYyXFx1MUU3MFxcdTFFNkVcXHUwMTY2XFx1MDFBQ1xcdTAxQUVcXHUwMjNFXFx1QTc4NlwiXG59LCB7XG4gIGJhc2U6ICdUWicsXG4gIGxldHRlcnM6IFwiXFx1QTcyOFwiXG59LCB7XG4gIGJhc2U6ICdVJyxcbiAgbGV0dGVyczogXCJVXFx1MjRDQVxcdUZGMzVcXHhEOVxceERBXFx4REJcXHUwMTY4XFx1MUU3OFxcdTAxNkFcXHUxRTdBXFx1MDE2Q1xceERDXFx1MDFEQlxcdTAxRDdcXHUwMUQ1XFx1MDFEOVxcdTFFRTZcXHUwMTZFXFx1MDE3MFxcdTAxRDNcXHUwMjE0XFx1MDIxNlxcdTAxQUZcXHUxRUVBXFx1MUVFOFxcdTFFRUVcXHUxRUVDXFx1MUVGMFxcdTFFRTRcXHUxRTcyXFx1MDE3MlxcdTFFNzZcXHUxRTc0XFx1MDI0NFwiXG59LCB7XG4gIGJhc2U6ICdWJyxcbiAgbGV0dGVyczogXCJWXFx1MjRDQlxcdUZGMzZcXHUxRTdDXFx1MUU3RVxcdTAxQjJcXHVBNzVFXFx1MDI0NVwiXG59LCB7XG4gIGJhc2U6ICdWWScsXG4gIGxldHRlcnM6IFwiXFx1QTc2MFwiXG59LCB7XG4gIGJhc2U6ICdXJyxcbiAgbGV0dGVyczogXCJXXFx1MjRDQ1xcdUZGMzdcXHUxRTgwXFx1MUU4MlxcdTAxNzRcXHUxRTg2XFx1MUU4NFxcdTFFODhcXHUyQzcyXCJcbn0sIHtcbiAgYmFzZTogJ1gnLFxuICBsZXR0ZXJzOiBcIlhcXHUyNENEXFx1RkYzOFxcdTFFOEFcXHUxRThDXCJcbn0sIHtcbiAgYmFzZTogJ1knLFxuICBsZXR0ZXJzOiBcIllcXHUyNENFXFx1RkYzOVxcdTFFRjJcXHhERFxcdTAxNzZcXHUxRUY4XFx1MDIzMlxcdTFFOEVcXHUwMTc4XFx1MUVGNlxcdTFFRjRcXHUwMUIzXFx1MDI0RVxcdTFFRkVcIlxufSwge1xuICBiYXNlOiAnWicsXG4gIGxldHRlcnM6IFwiWlxcdTI0Q0ZcXHVGRjNBXFx1MDE3OVxcdTFFOTBcXHUwMTdCXFx1MDE3RFxcdTFFOTJcXHUxRTk0XFx1MDFCNVxcdTAyMjRcXHUyQzdGXFx1MkM2QlxcdUE3NjJcIlxufSwge1xuICBiYXNlOiAnYScsXG4gIGxldHRlcnM6IFwiYVxcdTI0RDBcXHVGRjQxXFx1MUU5QVxceEUwXFx4RTFcXHhFMlxcdTFFQTdcXHUxRUE1XFx1MUVBQlxcdTFFQTlcXHhFM1xcdTAxMDFcXHUwMTAzXFx1MUVCMVxcdTFFQUZcXHUxRUI1XFx1MUVCM1xcdTAyMjdcXHUwMUUxXFx4RTRcXHUwMURGXFx1MUVBM1xceEU1XFx1MDFGQlxcdTAxQ0VcXHUwMjAxXFx1MDIwM1xcdTFFQTFcXHUxRUFEXFx1MUVCN1xcdTFFMDFcXHUwMTA1XFx1MkM2NVxcdTAyNTBcIlxufSwge1xuICBiYXNlOiAnYWEnLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzNcIlxufSwge1xuICBiYXNlOiAnYWUnLFxuICBsZXR0ZXJzOiBcIlxceEU2XFx1MDFGRFxcdTAxRTNcIlxufSwge1xuICBiYXNlOiAnYW8nLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzVcIlxufSwge1xuICBiYXNlOiAnYXUnLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzdcIlxufSwge1xuICBiYXNlOiAnYXYnLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzlcXHVBNzNCXCJcbn0sIHtcbiAgYmFzZTogJ2F5JyxcbiAgbGV0dGVyczogXCJcXHVBNzNEXCJcbn0sIHtcbiAgYmFzZTogJ2InLFxuICBsZXR0ZXJzOiBcImJcXHUyNEQxXFx1RkY0MlxcdTFFMDNcXHUxRTA1XFx1MUUwN1xcdTAxODBcXHUwMTgzXFx1MDI1M1wiXG59LCB7XG4gIGJhc2U6ICdjJyxcbiAgbGV0dGVyczogXCJjXFx1MjREMlxcdUZGNDNcXHUwMTA3XFx1MDEwOVxcdTAxMEJcXHUwMTBEXFx4RTdcXHUxRTA5XFx1MDE4OFxcdTAyM0NcXHVBNzNGXFx1MjE4NFwiXG59LCB7XG4gIGJhc2U6ICdkJyxcbiAgbGV0dGVyczogXCJkXFx1MjREM1xcdUZGNDRcXHUxRTBCXFx1MDEwRlxcdTFFMERcXHUxRTExXFx1MUUxM1xcdTFFMEZcXHUwMTExXFx1MDE4Q1xcdTAyNTZcXHUwMjU3XFx1QTc3QVwiXG59LCB7XG4gIGJhc2U6ICdkeicsXG4gIGxldHRlcnM6IFwiXFx1MDFGM1xcdTAxQzZcIlxufSwge1xuICBiYXNlOiAnZScsXG4gIGxldHRlcnM6IFwiZVxcdTI0RDRcXHVGRjQ1XFx4RThcXHhFOVxceEVBXFx1MUVDMVxcdTFFQkZcXHUxRUM1XFx1MUVDM1xcdTFFQkRcXHUwMTEzXFx1MUUxNVxcdTFFMTdcXHUwMTE1XFx1MDExN1xceEVCXFx1MUVCQlxcdTAxMUJcXHUwMjA1XFx1MDIwN1xcdTFFQjlcXHUxRUM3XFx1MDIyOVxcdTFFMURcXHUwMTE5XFx1MUUxOVxcdTFFMUJcXHUwMjQ3XFx1MDI1QlxcdTAxRERcIlxufSwge1xuICBiYXNlOiAnZicsXG4gIGxldHRlcnM6IFwiZlxcdTI0RDVcXHVGRjQ2XFx1MUUxRlxcdTAxOTJcXHVBNzdDXCJcbn0sIHtcbiAgYmFzZTogJ2cnLFxuICBsZXR0ZXJzOiBcImdcXHUyNEQ2XFx1RkY0N1xcdTAxRjVcXHUwMTFEXFx1MUUyMVxcdTAxMUZcXHUwMTIxXFx1MDFFN1xcdTAxMjNcXHUwMUU1XFx1MDI2MFxcdUE3QTFcXHUxRDc5XFx1QTc3RlwiXG59LCB7XG4gIGJhc2U6ICdoJyxcbiAgbGV0dGVyczogXCJoXFx1MjREN1xcdUZGNDhcXHUwMTI1XFx1MUUyM1xcdTFFMjdcXHUwMjFGXFx1MUUyNVxcdTFFMjlcXHUxRTJCXFx1MUU5NlxcdTAxMjdcXHUyQzY4XFx1MkM3NlxcdTAyNjVcIlxufSwge1xuICBiYXNlOiAnaHYnLFxuICBsZXR0ZXJzOiBcIlxcdTAxOTVcIlxufSwge1xuICBiYXNlOiAnaScsXG4gIGxldHRlcnM6IFwiaVxcdTI0RDhcXHVGRjQ5XFx4RUNcXHhFRFxceEVFXFx1MDEyOVxcdTAxMkJcXHUwMTJEXFx4RUZcXHUxRTJGXFx1MUVDOVxcdTAxRDBcXHUwMjA5XFx1MDIwQlxcdTFFQ0JcXHUwMTJGXFx1MUUyRFxcdTAyNjhcXHUwMTMxXCJcbn0sIHtcbiAgYmFzZTogJ2onLFxuICBsZXR0ZXJzOiBcImpcXHUyNEQ5XFx1RkY0QVxcdTAxMzVcXHUwMUYwXFx1MDI0OVwiXG59LCB7XG4gIGJhc2U6ICdrJyxcbiAgbGV0dGVyczogXCJrXFx1MjREQVxcdUZGNEJcXHUxRTMxXFx1MDFFOVxcdTFFMzNcXHUwMTM3XFx1MUUzNVxcdTAxOTlcXHUyQzZBXFx1QTc0MVxcdUE3NDNcXHVBNzQ1XFx1QTdBM1wiXG59LCB7XG4gIGJhc2U6ICdsJyxcbiAgbGV0dGVyczogXCJsXFx1MjREQlxcdUZGNENcXHUwMTQwXFx1MDEzQVxcdTAxM0VcXHUxRTM3XFx1MUUzOVxcdTAxM0NcXHUxRTNEXFx1MUUzQlxcdTAxN0ZcXHUwMTQyXFx1MDE5QVxcdTAyNkJcXHUyQzYxXFx1QTc0OVxcdUE3ODFcXHVBNzQ3XCJcbn0sIHtcbiAgYmFzZTogJ2xqJyxcbiAgbGV0dGVyczogXCJcXHUwMUM5XCJcbn0sIHtcbiAgYmFzZTogJ20nLFxuICBsZXR0ZXJzOiBcIm1cXHUyNERDXFx1RkY0RFxcdTFFM0ZcXHUxRTQxXFx1MUU0M1xcdTAyNzFcXHUwMjZGXCJcbn0sIHtcbiAgYmFzZTogJ24nLFxuICBsZXR0ZXJzOiBcIm5cXHUyNEREXFx1RkY0RVxcdTAxRjlcXHUwMTQ0XFx4RjFcXHUxRTQ1XFx1MDE0OFxcdTFFNDdcXHUwMTQ2XFx1MUU0QlxcdTFFNDlcXHUwMTlFXFx1MDI3MlxcdTAxNDlcXHVBNzkxXFx1QTdBNVwiXG59LCB7XG4gIGJhc2U6ICduaicsXG4gIGxldHRlcnM6IFwiXFx1MDFDQ1wiXG59LCB7XG4gIGJhc2U6ICdvJyxcbiAgbGV0dGVyczogXCJvXFx1MjRERVxcdUZGNEZcXHhGMlxceEYzXFx4RjRcXHUxRUQzXFx1MUVEMVxcdTFFRDdcXHUxRUQ1XFx4RjVcXHUxRTREXFx1MDIyRFxcdTFFNEZcXHUwMTREXFx1MUU1MVxcdTFFNTNcXHUwMTRGXFx1MDIyRlxcdTAyMzFcXHhGNlxcdTAyMkJcXHUxRUNGXFx1MDE1MVxcdTAxRDJcXHUwMjBEXFx1MDIwRlxcdTAxQTFcXHUxRUREXFx1MUVEQlxcdTFFRTFcXHUxRURGXFx1MUVFM1xcdTFFQ0RcXHUxRUQ5XFx1MDFFQlxcdTAxRURcXHhGOFxcdTAxRkZcXHUwMjU0XFx1QTc0QlxcdUE3NERcXHUwMjc1XCJcbn0sIHtcbiAgYmFzZTogJ29pJyxcbiAgbGV0dGVyczogXCJcXHUwMUEzXCJcbn0sIHtcbiAgYmFzZTogJ291JyxcbiAgbGV0dGVyczogXCJcXHUwMjIzXCJcbn0sIHtcbiAgYmFzZTogJ29vJyxcbiAgbGV0dGVyczogXCJcXHVBNzRGXCJcbn0sIHtcbiAgYmFzZTogJ3AnLFxuICBsZXR0ZXJzOiBcInBcXHUyNERGXFx1RkY1MFxcdTFFNTVcXHUxRTU3XFx1MDFBNVxcdTFEN0RcXHVBNzUxXFx1QTc1M1xcdUE3NTVcIlxufSwge1xuICBiYXNlOiAncScsXG4gIGxldHRlcnM6IFwicVxcdTI0RTBcXHVGRjUxXFx1MDI0QlxcdUE3NTdcXHVBNzU5XCJcbn0sIHtcbiAgYmFzZTogJ3InLFxuICBsZXR0ZXJzOiBcInJcXHUyNEUxXFx1RkY1MlxcdTAxNTVcXHUxRTU5XFx1MDE1OVxcdTAyMTFcXHUwMjEzXFx1MUU1QlxcdTFFNURcXHUwMTU3XFx1MUU1RlxcdTAyNERcXHUwMjdEXFx1QTc1QlxcdUE3QTdcXHVBNzgzXCJcbn0sIHtcbiAgYmFzZTogJ3MnLFxuICBsZXR0ZXJzOiBcInNcXHUyNEUyXFx1RkY1M1xceERGXFx1MDE1QlxcdTFFNjVcXHUwMTVEXFx1MUU2MVxcdTAxNjFcXHUxRTY3XFx1MUU2M1xcdTFFNjlcXHUwMjE5XFx1MDE1RlxcdTAyM0ZcXHVBN0E5XFx1QTc4NVxcdTFFOUJcIlxufSwge1xuICBiYXNlOiAndCcsXG4gIGxldHRlcnM6IFwidFxcdTI0RTNcXHVGRjU0XFx1MUU2QlxcdTFFOTdcXHUwMTY1XFx1MUU2RFxcdTAyMUJcXHUwMTYzXFx1MUU3MVxcdTFFNkZcXHUwMTY3XFx1MDFBRFxcdTAyODhcXHUyQzY2XFx1QTc4N1wiXG59LCB7XG4gIGJhc2U6ICd0eicsXG4gIGxldHRlcnM6IFwiXFx1QTcyOVwiXG59LCB7XG4gIGJhc2U6ICd1JyxcbiAgbGV0dGVyczogXCJ1XFx1MjRFNFxcdUZGNTVcXHhGOVxceEZBXFx4RkJcXHUwMTY5XFx1MUU3OVxcdTAxNkJcXHUxRTdCXFx1MDE2RFxceEZDXFx1MDFEQ1xcdTAxRDhcXHUwMUQ2XFx1MDFEQVxcdTFFRTdcXHUwMTZGXFx1MDE3MVxcdTAxRDRcXHUwMjE1XFx1MDIxN1xcdTAxQjBcXHUxRUVCXFx1MUVFOVxcdTFFRUZcXHUxRUVEXFx1MUVGMVxcdTFFRTVcXHUxRTczXFx1MDE3M1xcdTFFNzdcXHUxRTc1XFx1MDI4OVwiXG59LCB7XG4gIGJhc2U6ICd2JyxcbiAgbGV0dGVyczogXCJ2XFx1MjRFNVxcdUZGNTZcXHUxRTdEXFx1MUU3RlxcdTAyOEJcXHVBNzVGXFx1MDI4Q1wiXG59LCB7XG4gIGJhc2U6ICd2eScsXG4gIGxldHRlcnM6IFwiXFx1QTc2MVwiXG59LCB7XG4gIGJhc2U6ICd3JyxcbiAgbGV0dGVyczogXCJ3XFx1MjRFNlxcdUZGNTdcXHUxRTgxXFx1MUU4M1xcdTAxNzVcXHUxRTg3XFx1MUU4NVxcdTFFOThcXHUxRTg5XFx1MkM3M1wiXG59LCB7XG4gIGJhc2U6ICd4JyxcbiAgbGV0dGVyczogXCJ4XFx1MjRFN1xcdUZGNThcXHUxRThCXFx1MUU4RFwiXG59LCB7XG4gIGJhc2U6ICd5JyxcbiAgbGV0dGVyczogXCJ5XFx1MjRFOFxcdUZGNTlcXHUxRUYzXFx4RkRcXHUwMTc3XFx1MUVGOVxcdTAyMzNcXHUxRThGXFx4RkZcXHUxRUY3XFx1MUU5OVxcdTFFRjVcXHUwMUI0XFx1MDI0RlxcdTFFRkZcIlxufSwge1xuICBiYXNlOiAneicsXG4gIGxldHRlcnM6IFwielxcdTI0RTlcXHVGRjVBXFx1MDE3QVxcdTFFOTFcXHUwMTdDXFx1MDE3RVxcdTFFOTNcXHUxRTk1XFx1MDFCNlxcdTAyMjVcXHUwMjQwXFx1MkM2Q1xcdUE3NjNcIlxufV07XG52YXIgYW55RGlhY3JpdGljID0gbmV3IFJlZ0V4cCgnWycgKyBkaWFjcml0aWNzLm1hcChmdW5jdGlvbiAoZCkge1xuICByZXR1cm4gZC5sZXR0ZXJzO1xufSkuam9pbignJykgKyAnXScsICdnJyk7XG52YXIgZGlhY3JpdGljVG9CYXNlID0ge307XG5mb3IgKHZhciBpID0gMDsgaSA8IGRpYWNyaXRpY3MubGVuZ3RoOyBpKyspIHtcbiAgdmFyIGRpYWNyaXRpYyA9IGRpYWNyaXRpY3NbaV07XG4gIGZvciAodmFyIGogPSAwOyBqIDwgZGlhY3JpdGljLmxldHRlcnMubGVuZ3RoOyBqKyspIHtcbiAgICBkaWFjcml0aWNUb0Jhc2VbZGlhY3JpdGljLmxldHRlcnNbal1dID0gZGlhY3JpdGljLmJhc2U7XG4gIH1cbn1cbnZhciBzdHJpcERpYWNyaXRpY3MgPSBmdW5jdGlvbiBzdHJpcERpYWNyaXRpY3Moc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShhbnlEaWFjcml0aWMsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiBkaWFjcml0aWNUb0Jhc2VbbWF0Y2hdO1xuICB9KTtcbn07XG5cbnZhciBtZW1vaXplZFN0cmlwRGlhY3JpdGljc0ZvcklucHV0ID0gbWVtb2l6ZU9uZShzdHJpcERpYWNyaXRpY3MpO1xudmFyIHRyaW1TdHJpbmcgPSBmdW5jdGlvbiB0cmltU3RyaW5nKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbn07XG52YXIgZGVmYXVsdFN0cmluZ2lmeSA9IGZ1bmN0aW9uIGRlZmF1bHRTdHJpbmdpZnkob3B0aW9uKSB7XG4gIHJldHVybiBcIlwiLmNvbmNhdChvcHRpb24ubGFiZWwsIFwiIFwiKS5jb25jYXQob3B0aW9uLnZhbHVlKTtcbn07XG52YXIgY3JlYXRlRmlsdGVyID0gZnVuY3Rpb24gY3JlYXRlRmlsdGVyKGNvbmZpZykge1xuICByZXR1cm4gZnVuY3Rpb24gKG9wdGlvbiwgcmF3SW5wdXQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICBpZiAob3B0aW9uLmRhdGEuX19pc05ld19fKSByZXR1cm4gdHJ1ZTtcbiAgICB2YXIgX2lnbm9yZUNhc2UkaWdub3JlQWNjID0gX29iamVjdFNwcmVhZCh7XG4gICAgICAgIGlnbm9yZUNhc2U6IHRydWUsXG4gICAgICAgIGlnbm9yZUFjY2VudHM6IHRydWUsXG4gICAgICAgIHN0cmluZ2lmeTogZGVmYXVsdFN0cmluZ2lmeSxcbiAgICAgICAgdHJpbTogdHJ1ZSxcbiAgICAgICAgbWF0Y2hGcm9tOiAnYW55J1xuICAgICAgfSwgY29uZmlnKSxcbiAgICAgIGlnbm9yZUNhc2UgPSBfaWdub3JlQ2FzZSRpZ25vcmVBY2MuaWdub3JlQ2FzZSxcbiAgICAgIGlnbm9yZUFjY2VudHMgPSBfaWdub3JlQ2FzZSRpZ25vcmVBY2MuaWdub3JlQWNjZW50cyxcbiAgICAgIHN0cmluZ2lmeSA9IF9pZ25vcmVDYXNlJGlnbm9yZUFjYy5zdHJpbmdpZnksXG4gICAgICB0cmltID0gX2lnbm9yZUNhc2UkaWdub3JlQWNjLnRyaW0sXG4gICAgICBtYXRjaEZyb20gPSBfaWdub3JlQ2FzZSRpZ25vcmVBY2MubWF0Y2hGcm9tO1xuICAgIHZhciBpbnB1dCA9IHRyaW0gPyB0cmltU3RyaW5nKHJhd0lucHV0KSA6IHJhd0lucHV0O1xuICAgIHZhciBjYW5kaWRhdGUgPSB0cmltID8gdHJpbVN0cmluZyhzdHJpbmdpZnkob3B0aW9uKSkgOiBzdHJpbmdpZnkob3B0aW9uKTtcbiAgICBpZiAoaWdub3JlQ2FzZSkge1xuICAgICAgaW5wdXQgPSBpbnB1dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FuZGlkYXRlID0gY2FuZGlkYXRlLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIGlmIChpZ25vcmVBY2NlbnRzKSB7XG4gICAgICBpbnB1dCA9IG1lbW9pemVkU3RyaXBEaWFjcml0aWNzRm9ySW5wdXQoaW5wdXQpO1xuICAgICAgY2FuZGlkYXRlID0gc3RyaXBEaWFjcml0aWNzKGNhbmRpZGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBtYXRjaEZyb20gPT09ICdzdGFydCcgPyBjYW5kaWRhdGUuc3Vic3RyKDAsIGlucHV0Lmxlbmd0aCkgPT09IGlucHV0IDogY2FuZGlkYXRlLmluZGV4T2YoaW5wdXQpID4gLTE7XG4gIH07XG59O1xuXG52YXIgX2V4Y2x1ZGVkID0gW1wiaW5uZXJSZWZcIl07XG5mdW5jdGlvbiBEdW1teUlucHV0KF9yZWYpIHtcbiAgdmFyIGlubmVyUmVmID0gX3JlZi5pbm5lclJlZixcbiAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBfZXhjbHVkZWQpO1xuICAvLyBSZW1vdmUgYW5pbWF0aW9uIHByb3BzIG5vdCBtZWFudCBmb3IgSFRNTCBlbGVtZW50c1xuICB2YXIgZmlsdGVyZWRQcm9wcyA9IHJlbW92ZVByb3BzKHByb3BzLCAnb25FeGl0ZWQnLCAnaW4nLCAnZW50ZXInLCAnZXhpdCcsICdhcHBlYXInKTtcbiAgcmV0dXJuIGpzeChcImlucHV0XCIsIF9leHRlbmRzKHtcbiAgICByZWY6IGlubmVyUmVmXG4gIH0sIGZpbHRlcmVkUHJvcHMsIHtcbiAgICBjc3M6IC8qI19fUFVSRV9fKi9jc3Moe1xuICAgICAgbGFiZWw6ICdkdW1teUlucHV0JyxcbiAgICAgIC8vIGdldCByaWQgb2YgYW55IGRlZmF1bHQgc3R5bGVzXG4gICAgICBiYWNrZ3JvdW5kOiAwLFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgLy8gaW1wb3J0YW50ISB0aGlzIGhpZGVzIHRoZSBmbGFzaGluZyBjdXJzb3JcbiAgICAgIGNhcmV0Q29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgZ3JpZEFyZWE6ICcxIC8gMSAvIDIgLyAzJyxcbiAgICAgIG91dGxpbmU6IDAsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgLy8gaW1wb3J0YW50ISB3aXRob3V0IGB3aWR0aGAgYnJvd3NlcnMgd29uJ3QgYWxsb3cgZm9jdXNcbiAgICAgIHdpZHRoOiAxLFxuICAgICAgLy8gcmVtb3ZlIGN1cnNvciBvbiBkZXNrdG9wXG4gICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gbW9iaWxlIHdoaWxzdCBtYWludGFpbmluZyBcInNjcm9sbCBpbnRvIHZpZXdcIiBiZWhhdmlvdXJcbiAgICAgIGxlZnQ6IC0xMDAsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSguMDEpJ1xuICAgIH0sIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IFwiXCIgOiBcIjtsYWJlbDpEdW1teUlucHV0O1wiLCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBcIlwiIDogXCIvKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa1IxYlcxNVNXNXdkWFF1ZEhONElsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFYbENUU0lzSW1acGJHVWlPaUpFZFcxdGVVbHVjSFYwTG5SemVDSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxS2lCQWFuTjRJR3B6ZUNBcUwxeHVhVzF3YjNKMElIc2dTbE5ZTENCU1pXWWdmU0JtY205dElDZHlaV0ZqZENjN1hHNXBiWEJ2Y25RZ2V5QnFjM2dnZlNCbWNtOXRJQ2RBWlcxdmRHbHZiaTl5WldGamRDYzdYRzVwYlhCdmNuUWdleUJ5WlcxdmRtVlFjbTl3Y3lCOUlHWnliMjBnSnk0dUwzVjBhV3h6Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0Z1JIVnRiWGxKYm5CMWRDaDdYRzRnSUdsdWJtVnlVbVZtTEZ4dUlDQXVMaTV3Y205d2MxeHVmVG9nU2xOWUxrbHVkSEpwYm5OcFkwVnNaVzFsYm5Seld5ZHBibkIxZENkZElDWWdlMXh1SUNCeVpXRmtiMjVzZVNCcGJtNWxjbEpsWmpvZ1VtVm1QRWhVVFV4SmJuQjFkRVZzWlcxbGJuUStPMXh1ZlNrZ2UxeHVJQ0F2THlCU1pXMXZkbVVnWVc1cGJXRjBhVzl1SUhCeWIzQnpJRzV2ZENCdFpXRnVkQ0JtYjNJZ1NGUk5UQ0JsYkdWdFpXNTBjMXh1SUNCamIyNXpkQ0JtYVd4MFpYSmxaRkJ5YjNCeklEMGdjbVZ0YjNabFVISnZjSE1vWEc0Z0lDQWdjSEp2Y0hNc1hHNGdJQ0FnSjI5dVJYaHBkR1ZrSnl4Y2JpQWdJQ0FuYVc0bkxGeHVJQ0FnSUNkbGJuUmxjaWNzWEc0Z0lDQWdKMlY0YVhRbkxGeHVJQ0FnSUNkaGNIQmxZWEluWEc0Z0lDazdYRzVjYmlBZ2NtVjBkWEp1SUNoY2JpQWdJQ0E4YVc1d2RYUmNiaUFnSUNBZ0lISmxaajE3YVc1dVpYSlNaV1o5WEc0Z0lDQWdJQ0I3TGk0dVptbHNkR1Z5WldSUWNtOXdjMzFjYmlBZ0lDQWdJR056Y3oxN2UxeHVJQ0FnSUNBZ0lDQnNZV0psYkRvZ0oyUjFiVzE1U1c1d2RYUW5MRnh1SUNBZ0lDQWdJQ0F2THlCblpYUWdjbWxrSUc5bUlHRnVlU0JrWldaaGRXeDBJSE4wZVd4bGMxeHVJQ0FnSUNBZ0lDQmlZV05yWjNKdmRXNWtPaUF3TEZ4dUlDQWdJQ0FnSUNCaWIzSmtaWEk2SURBc1hHNGdJQ0FnSUNBZ0lDOHZJR2x0Y0c5eWRHRnVkQ0VnZEdocGN5Qm9hV1JsY3lCMGFHVWdabXhoYzJocGJtY2dZM1Z5YzI5eVhHNGdJQ0FnSUNBZ0lHTmhjbVYwUTI5c2IzSTZJQ2QwY21GdWMzQmhjbVZ1ZENjc1hHNGdJQ0FnSUNBZ0lHWnZiblJUYVhwbE9pQW5hVzVvWlhKcGRDY3NYRzRnSUNBZ0lDQWdJR2R5YVdSQmNtVmhPaUFuTVNBdklERWdMeUF5SUM4Z015Y3NYRzRnSUNBZ0lDQWdJRzkxZEd4cGJtVTZJREFzWEc0Z0lDQWdJQ0FnSUhCaFpHUnBibWM2SURBc1hHNGdJQ0FnSUNBZ0lDOHZJR2x0Y0c5eWRHRnVkQ0VnZDJsMGFHOTFkQ0JnZDJsa2RHaGdJR0p5YjNkelpYSnpJSGR2YmlkMElHRnNiRzkzSUdadlkzVnpYRzRnSUNBZ0lDQWdJSGRwWkhSb09pQXhMRnh1WEc0Z0lDQWdJQ0FnSUM4dklISmxiVzkyWlNCamRYSnpiM0lnYjI0Z1pHVnphM1J2Y0Z4dUlDQWdJQ0FnSUNCamIyeHZjam9nSjNSeVlXNXpjR0Z5Wlc1MEp5eGNibHh1SUNBZ0lDQWdJQ0F2THlCeVpXMXZkbVVnWTNWeWMyOXlJRzl1SUcxdlltbHNaU0IzYUdsc2MzUWdiV0ZwYm5SaGFXNXBibWNnWENKelkzSnZiR3dnYVc1MGJ5QjJhV1YzWENJZ1ltVm9ZWFpwYjNWeVhHNGdJQ0FnSUNBZ0lHeGxablE2SUMweE1EQXNYRzRnSUNBZ0lDQWdJRzl3WVdOcGRIazZJREFzWEc0Z0lDQWdJQ0FnSUhCdmMybDBhVzl1T2lBbmNtVnNZWFJwZG1VbkxGeHVJQ0FnSUNBZ0lDQjBjbUZ1YzJadmNtMDZJQ2R6WTJGc1pTZ3VNREVwSnl4Y2JpQWdJQ0FnSUgxOVhHNGdJQ0FnTHo1Y2JpQWdLVHRjYm4xY2JpSmRmUT09ICovXCIpXG4gIH0pKTtcbn1cblxudmFyIGNhbmNlbFNjcm9sbCA9IGZ1bmN0aW9uIGNhbmNlbFNjcm9sbChldmVudCkge1xuICBpZiAoZXZlbnQuY2FuY2VsYWJsZSkgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59O1xuZnVuY3Rpb24gdXNlU2Nyb2xsQ2FwdHVyZShfcmVmKSB7XG4gIHZhciBpc0VuYWJsZWQgPSBfcmVmLmlzRW5hYmxlZCxcbiAgICBvbkJvdHRvbUFycml2ZSA9IF9yZWYub25Cb3R0b21BcnJpdmUsXG4gICAgb25Cb3R0b21MZWF2ZSA9IF9yZWYub25Cb3R0b21MZWF2ZSxcbiAgICBvblRvcEFycml2ZSA9IF9yZWYub25Ub3BBcnJpdmUsXG4gICAgb25Ub3BMZWF2ZSA9IF9yZWYub25Ub3BMZWF2ZTtcbiAgdmFyIGlzQm90dG9tID0gdXNlUmVmKGZhbHNlKTtcbiAgdmFyIGlzVG9wID0gdXNlUmVmKGZhbHNlKTtcbiAgdmFyIHRvdWNoU3RhcnQgPSB1c2VSZWYoMCk7XG4gIHZhciBzY3JvbGxUYXJnZXQgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBoYW5kbGVFdmVudERlbHRhID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50LCBkZWx0YSkge1xuICAgIGlmIChzY3JvbGxUYXJnZXQuY3VycmVudCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIHZhciBfc2Nyb2xsVGFyZ2V0JGN1cnJlbnQgPSBzY3JvbGxUYXJnZXQuY3VycmVudCxcbiAgICAgIHNjcm9sbFRvcCA9IF9zY3JvbGxUYXJnZXQkY3VycmVudC5zY3JvbGxUb3AsXG4gICAgICBzY3JvbGxIZWlnaHQgPSBfc2Nyb2xsVGFyZ2V0JGN1cnJlbnQuc2Nyb2xsSGVpZ2h0LFxuICAgICAgY2xpZW50SGVpZ2h0ID0gX3Njcm9sbFRhcmdldCRjdXJyZW50LmNsaWVudEhlaWdodDtcbiAgICB2YXIgdGFyZ2V0ID0gc2Nyb2xsVGFyZ2V0LmN1cnJlbnQ7XG4gICAgdmFyIGlzRGVsdGFQb3NpdGl2ZSA9IGRlbHRhID4gMDtcbiAgICB2YXIgYXZhaWxhYmxlU2Nyb2xsID0gc2Nyb2xsSGVpZ2h0IC0gY2xpZW50SGVpZ2h0IC0gc2Nyb2xsVG9wO1xuICAgIHZhciBzaG91bGRDYW5jZWxTY3JvbGwgPSBmYWxzZTtcblxuICAgIC8vIHJlc2V0IGJvdHRvbS90b3AgZmxhZ3NcbiAgICBpZiAoYXZhaWxhYmxlU2Nyb2xsID4gZGVsdGEgJiYgaXNCb3R0b20uY3VycmVudCkge1xuICAgICAgaWYgKG9uQm90dG9tTGVhdmUpIG9uQm90dG9tTGVhdmUoZXZlbnQpO1xuICAgICAgaXNCb3R0b20uY3VycmVudCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoaXNEZWx0YVBvc2l0aXZlICYmIGlzVG9wLmN1cnJlbnQpIHtcbiAgICAgIGlmIChvblRvcExlYXZlKSBvblRvcExlYXZlKGV2ZW50KTtcbiAgICAgIGlzVG9wLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBib3R0b20gbGltaXRcbiAgICBpZiAoaXNEZWx0YVBvc2l0aXZlICYmIGRlbHRhID4gYXZhaWxhYmxlU2Nyb2xsKSB7XG4gICAgICBpZiAob25Cb3R0b21BcnJpdmUgJiYgIWlzQm90dG9tLmN1cnJlbnQpIHtcbiAgICAgICAgb25Cb3R0b21BcnJpdmUoZXZlbnQpO1xuICAgICAgfVxuICAgICAgdGFyZ2V0LnNjcm9sbFRvcCA9IHNjcm9sbEhlaWdodDtcbiAgICAgIHNob3VsZENhbmNlbFNjcm9sbCA9IHRydWU7XG4gICAgICBpc0JvdHRvbS5jdXJyZW50ID0gdHJ1ZTtcblxuICAgICAgLy8gdG9wIGxpbWl0XG4gICAgfSBlbHNlIGlmICghaXNEZWx0YVBvc2l0aXZlICYmIC1kZWx0YSA+IHNjcm9sbFRvcCkge1xuICAgICAgaWYgKG9uVG9wQXJyaXZlICYmICFpc1RvcC5jdXJyZW50KSB7XG4gICAgICAgIG9uVG9wQXJyaXZlKGV2ZW50KTtcbiAgICAgIH1cbiAgICAgIHRhcmdldC5zY3JvbGxUb3AgPSAwO1xuICAgICAgc2hvdWxkQ2FuY2VsU2Nyb2xsID0gdHJ1ZTtcbiAgICAgIGlzVG9wLmN1cnJlbnQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIGNhbmNlbCBzY3JvbGxcbiAgICBpZiAoc2hvdWxkQ2FuY2VsU2Nyb2xsKSB7XG4gICAgICBjYW5jZWxTY3JvbGwoZXZlbnQpO1xuICAgIH1cbiAgfSwgW29uQm90dG9tQXJyaXZlLCBvbkJvdHRvbUxlYXZlLCBvblRvcEFycml2ZSwgb25Ub3BMZWF2ZV0pO1xuICB2YXIgb25XaGVlbCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgIGhhbmRsZUV2ZW50RGVsdGEoZXZlbnQsIGV2ZW50LmRlbHRhWSk7XG4gIH0sIFtoYW5kbGVFdmVudERlbHRhXSk7XG4gIHZhciBvblRvdWNoU3RhcnQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBzZXQgdG91Y2ggc3RhcnQgc28gd2UgY2FuIGNhbGN1bGF0ZSB0b3VjaG1vdmUgZGVsdGFcbiAgICB0b3VjaFN0YXJ0LmN1cnJlbnQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xuICB9LCBbXSk7XG4gIHZhciBvblRvdWNoTW92ZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBkZWx0YVkgPSB0b3VjaFN0YXJ0LmN1cnJlbnQgLSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xuICAgIGhhbmRsZUV2ZW50RGVsdGEoZXZlbnQsIGRlbHRhWSk7XG4gIH0sIFtoYW5kbGVFdmVudERlbHRhXSk7XG4gIHZhciBzdGFydExpc3RlbmluZyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChlbCkge1xuICAgIC8vIGJhaWwgZWFybHkgaWYgbm8gZWxlbWVudCBpcyBhdmFpbGFibGUgdG8gYXR0YWNoIHRvXG4gICAgaWYgKCFlbCkgcmV0dXJuO1xuICAgIHZhciBub3RQYXNzaXZlID0gc3VwcG9ydHNQYXNzaXZlRXZlbnRzID8ge1xuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9IDogZmFsc2U7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBvbldoZWVsLCBub3RQYXNzaXZlKTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBub3RQYXNzaXZlKTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgbm90UGFzc2l2ZSk7XG4gIH0sIFtvblRvdWNoTW92ZSwgb25Ub3VjaFN0YXJ0LCBvbldoZWVsXSk7XG4gIHZhciBzdG9wTGlzdGVuaW5nID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGVsKSB7XG4gICAgLy8gYmFpbCBlYXJseSBpZiBubyBlbGVtZW50IGlzIGF2YWlsYWJsZSB0byBkZXRhY2ggZnJvbVxuICAgIGlmICghZWwpIHJldHVybjtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIG9uV2hlZWwsIGZhbHNlKTtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIGZhbHNlKTtcbiAgfSwgW29uVG91Y2hNb3ZlLCBvblRvdWNoU3RhcnQsIG9uV2hlZWxdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWlzRW5hYmxlZCkgcmV0dXJuO1xuICAgIHZhciBlbGVtZW50ID0gc2Nyb2xsVGFyZ2V0LmN1cnJlbnQ7XG4gICAgc3RhcnRMaXN0ZW5pbmcoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0b3BMaXN0ZW5pbmcoZWxlbWVudCk7XG4gICAgfTtcbiAgfSwgW2lzRW5hYmxlZCwgc3RhcnRMaXN0ZW5pbmcsIHN0b3BMaXN0ZW5pbmddKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgc2Nyb2xsVGFyZ2V0LmN1cnJlbnQgPSBlbGVtZW50O1xuICB9O1xufVxuXG52YXIgU1RZTEVfS0VZUyA9IFsnYm94U2l6aW5nJywgJ2hlaWdodCcsICdvdmVyZmxvdycsICdwYWRkaW5nUmlnaHQnLCAncG9zaXRpb24nXTtcbnZhciBMT0NLX1NUWUxFUyA9IHtcbiAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIC8vIGFjY291bnQgZm9yIHBvc3NpYmxlIGRlY2xhcmF0aW9uIGB3aWR0aDogMTAwJTtgIG9uIGJvZHlcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgaGVpZ2h0OiAnMTAwJSdcbn07XG5mdW5jdGlvbiBwcmV2ZW50VG91Y2hNb3ZlKGUpIHtcbiAgaWYgKGUuY2FuY2VsYWJsZSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuZnVuY3Rpb24gYWxsb3dUb3VjaE1vdmUoZSkge1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xufVxuZnVuY3Rpb24gcHJldmVudEluZXJ0aWFTY3JvbGwoKSB7XG4gIHZhciB0b3AgPSB0aGlzLnNjcm9sbFRvcDtcbiAgdmFyIHRvdGFsU2Nyb2xsID0gdGhpcy5zY3JvbGxIZWlnaHQ7XG4gIHZhciBjdXJyZW50U2Nyb2xsID0gdG9wICsgdGhpcy5vZmZzZXRIZWlnaHQ7XG4gIGlmICh0b3AgPT09IDApIHtcbiAgICB0aGlzLnNjcm9sbFRvcCA9IDE7XG4gIH0gZWxzZSBpZiAoY3VycmVudFNjcm9sbCA9PT0gdG90YWxTY3JvbGwpIHtcbiAgICB0aGlzLnNjcm9sbFRvcCA9IHRvcCAtIDE7XG4gIH1cbn1cblxuLy8gYG9udG91Y2hzdGFydGAgY2hlY2sgd29ya3Mgb24gbW9zdCBicm93c2Vyc1xuLy8gYG1heFRvdWNoUG9pbnRzYCB3b3JrcyBvbiBJRTEwLzExIGFuZCBTdXJmYWNlXG5mdW5jdGlvbiBpc1RvdWNoRGV2aWNlKCkge1xuICByZXR1cm4gJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cztcbn1cbnZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xudmFyIGFjdGl2ZVNjcm9sbExvY2tzID0gMDtcbnZhciBsaXN0ZW5lck9wdGlvbnMgPSB7XG4gIGNhcHR1cmU6IGZhbHNlLFxuICBwYXNzaXZlOiBmYWxzZVxufTtcbmZ1bmN0aW9uIHVzZVNjcm9sbExvY2soX3JlZikge1xuICB2YXIgaXNFbmFibGVkID0gX3JlZi5pc0VuYWJsZWQsXG4gICAgX3JlZiRhY2NvdW50Rm9yU2Nyb2xsID0gX3JlZi5hY2NvdW50Rm9yU2Nyb2xsYmFycyxcbiAgICBhY2NvdW50Rm9yU2Nyb2xsYmFycyA9IF9yZWYkYWNjb3VudEZvclNjcm9sbCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYkYWNjb3VudEZvclNjcm9sbDtcbiAgdmFyIG9yaWdpbmFsU3R5bGVzID0gdXNlUmVmKHt9KTtcbiAgdmFyIHNjcm9sbFRhcmdldCA9IHVzZVJlZihudWxsKTtcbiAgdmFyIGFkZFNjcm9sbExvY2sgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAodG91Y2hTY3JvbGxUYXJnZXQpIHtcbiAgICBpZiAoIWNhblVzZURPTSkgcmV0dXJuO1xuICAgIHZhciB0YXJnZXQgPSBkb2N1bWVudC5ib2R5O1xuICAgIHZhciB0YXJnZXRTdHlsZSA9IHRhcmdldCAmJiB0YXJnZXQuc3R5bGU7XG4gICAgaWYgKGFjY291bnRGb3JTY3JvbGxiYXJzKSB7XG4gICAgICAvLyBzdG9yZSBhbnkgc3R5bGVzIGFscmVhZHkgYXBwbGllZCB0byB0aGUgYm9keVxuICAgICAgU1RZTEVfS0VZUy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbCA9IHRhcmdldFN0eWxlICYmIHRhcmdldFN0eWxlW2tleV07XG4gICAgICAgIG9yaWdpbmFsU3R5bGVzLmN1cnJlbnRba2V5XSA9IHZhbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IHRoZSBsb2NrIHN0eWxlcyBhbmQgcGFkZGluZyBpZiB0aGlzIGlzIHRoZSBmaXJzdCBzY3JvbGwgbG9ja1xuICAgIGlmIChhY2NvdW50Rm9yU2Nyb2xsYmFycyAmJiBhY3RpdmVTY3JvbGxMb2NrcyA8IDEpIHtcbiAgICAgIHZhciBjdXJyZW50UGFkZGluZyA9IHBhcnNlSW50KG9yaWdpbmFsU3R5bGVzLmN1cnJlbnQucGFkZGluZ1JpZ2h0LCAxMCkgfHwgMDtcbiAgICAgIHZhciBjbGllbnRXaWR0aCA9IGRvY3VtZW50LmJvZHkgPyBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDogMDtcbiAgICAgIHZhciBhZGp1c3RlZFBhZGRpbmcgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGNsaWVudFdpZHRoICsgY3VycmVudFBhZGRpbmcgfHwgMDtcbiAgICAgIE9iamVjdC5rZXlzKExPQ0tfU1RZTEVTKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbCA9IExPQ0tfU1RZTEVTW2tleV07XG4gICAgICAgIGlmICh0YXJnZXRTdHlsZSkge1xuICAgICAgICAgIHRhcmdldFN0eWxlW2tleV0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHRhcmdldFN0eWxlKSB7XG4gICAgICAgIHRhcmdldFN0eWxlLnBhZGRpbmdSaWdodCA9IFwiXCIuY29uY2F0KGFkanVzdGVkUGFkZGluZywgXCJweFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhY2NvdW50IGZvciB0b3VjaCBkZXZpY2VzXG4gICAgaWYgKHRhcmdldCAmJiBpc1RvdWNoRGV2aWNlKCkpIHtcbiAgICAgIC8vIE1vYmlsZSBTYWZhcmkgaWdub3JlcyB7IG92ZXJmbG93OiBoaWRkZW4gfSBkZWNsYXJhdGlvbiBvbiB0aGUgYm9keS5cbiAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBwcmV2ZW50VG91Y2hNb3ZlLCBsaXN0ZW5lck9wdGlvbnMpO1xuXG4gICAgICAvLyBBbGxvdyBzY3JvbGwgb24gcHJvdmlkZWQgdGFyZ2V0XG4gICAgICBpZiAodG91Y2hTY3JvbGxUYXJnZXQpIHtcbiAgICAgICAgdG91Y2hTY3JvbGxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHByZXZlbnRJbmVydGlhU2Nyb2xsLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgICAgICB0b3VjaFNjcm9sbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBhbGxvd1RvdWNoTW92ZSwgbGlzdGVuZXJPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpbmNyZW1lbnQgYWN0aXZlIHNjcm9sbCBsb2Nrc1xuICAgIGFjdGl2ZVNjcm9sbExvY2tzICs9IDE7XG4gIH0sIFthY2NvdW50Rm9yU2Nyb2xsYmFyc10pO1xuICB2YXIgcmVtb3ZlU2Nyb2xsTG9jayA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh0b3VjaFNjcm9sbFRhcmdldCkge1xuICAgIGlmICghY2FuVXNlRE9NKSByZXR1cm47XG4gICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LmJvZHk7XG4gICAgdmFyIHRhcmdldFN0eWxlID0gdGFyZ2V0ICYmIHRhcmdldC5zdHlsZTtcblxuICAgIC8vIHNhZmVseSBkZWNyZW1lbnQgYWN0aXZlIHNjcm9sbCBsb2Nrc1xuICAgIGFjdGl2ZVNjcm9sbExvY2tzID0gTWF0aC5tYXgoYWN0aXZlU2Nyb2xsTG9ja3MgLSAxLCAwKTtcblxuICAgIC8vIHJlYXBwbHkgb3JpZ2luYWwgYm9keSBzdHlsZXMsIGlmIGFueVxuICAgIGlmIChhY2NvdW50Rm9yU2Nyb2xsYmFycyAmJiBhY3RpdmVTY3JvbGxMb2NrcyA8IDEpIHtcbiAgICAgIFNUWUxFX0tFWVMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWwgPSBvcmlnaW5hbFN0eWxlcy5jdXJyZW50W2tleV07XG4gICAgICAgIGlmICh0YXJnZXRTdHlsZSkge1xuICAgICAgICAgIHRhcmdldFN0eWxlW2tleV0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHJlbW92ZSB0b3VjaCBsaXN0ZW5lcnNcbiAgICBpZiAodGFyZ2V0ICYmIGlzVG91Y2hEZXZpY2UoKSkge1xuICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHByZXZlbnRUb3VjaE1vdmUsIGxpc3RlbmVyT3B0aW9ucyk7XG4gICAgICBpZiAodG91Y2hTY3JvbGxUYXJnZXQpIHtcbiAgICAgICAgdG91Y2hTY3JvbGxUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHByZXZlbnRJbmVydGlhU2Nyb2xsLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgICAgICB0b3VjaFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBhbGxvd1RvdWNoTW92ZSwgbGlzdGVuZXJPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFthY2NvdW50Rm9yU2Nyb2xsYmFyc10pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghaXNFbmFibGVkKSByZXR1cm47XG4gICAgdmFyIGVsZW1lbnQgPSBzY3JvbGxUYXJnZXQuY3VycmVudDtcbiAgICBhZGRTY3JvbGxMb2NrKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZW1vdmVTY3JvbGxMb2NrKGVsZW1lbnQpO1xuICAgIH07XG4gIH0sIFtpc0VuYWJsZWQsIGFkZFNjcm9sbExvY2ssIHJlbW92ZVNjcm9sbExvY2tdKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgc2Nyb2xsVGFyZ2V0LmN1cnJlbnQgPSBlbGVtZW50O1xuICB9O1xufVxuXG5mdW5jdGlvbiBfRU1PVElPTl9TVFJJTkdJRklFRF9DU1NfRVJST1JfXyQxKCkgeyByZXR1cm4gXCJZb3UgaGF2ZSB0cmllZCB0byBzdHJpbmdpZnkgb2JqZWN0IHJldHVybmVkIGZyb20gYGNzc2AgZnVuY3Rpb24uIEl0IGlzbid0IHN1cHBvc2VkIHRvIGJlIHVzZWQgZGlyZWN0bHkgKGUuZy4gYXMgdmFsdWUgb2YgdGhlIGBjbGFzc05hbWVgIHByb3ApLCBidXQgcmF0aGVyIGhhbmRlZCB0byBlbW90aW9uIHNvIGl0IGNhbiBoYW5kbGUgaXQgKGUuZy4gYXMgdmFsdWUgb2YgYGNzc2AgcHJvcCkuXCI7IH1cbnZhciBibHVyU2VsZWN0SW5wdXQgPSBmdW5jdGlvbiBibHVyU2VsZWN0SW5wdXQoZXZlbnQpIHtcbiAgdmFyIGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gIHJldHVybiBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG59O1xudmFyIF9yZWYyJDEgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIG5hbWU6IFwiMWtmZGIwZVwiLFxuICBzdHlsZXM6IFwicG9zaXRpb246Zml4ZWQ7bGVmdDowO2JvdHRvbTowO3JpZ2h0OjA7dG9wOjBcIlxufSA6IHtcbiAgbmFtZTogXCJicDhjdWEtU2Nyb2xsTWFuYWdlclwiLFxuICBzdHlsZXM6IFwicG9zaXRpb246Zml4ZWQ7bGVmdDowO2JvdHRvbTowO3JpZ2h0OjA7dG9wOjA7bGFiZWw6U2Nyb2xsTWFuYWdlcjtcIixcbiAgbWFwOiBcIi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklsTmpjbTlzYkUxaGJtRm5aWEl1ZEhONElsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFXOUVWU0lzSW1acGJHVWlPaUpUWTNKdmJHeE5ZVzVoWjJWeUxuUnplQ0lzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cUtpQkFhbk40SUdwemVDQXFMMXh1YVcxd2IzSjBJSHNnYW5ONElIMGdabkp2YlNBblFHVnRiM1JwYjI0dmNtVmhZM1FuTzF4dWFXMXdiM0owSUhzZ1JuSmhaMjFsYm5Rc0lGSmxZV04wUld4bGJXVnVkQ3dnVW1WbVEyRnNiR0poWTJzc0lFMXZkWE5sUlhabGJuUWdmU0JtY205dElDZHlaV0ZqZENjN1hHNXBiWEJ2Y25RZ2RYTmxVMk55YjJ4c1EyRndkSFZ5WlNCbWNtOXRJQ2N1TDNWelpWTmpjbTlzYkVOaGNIUjFjbVVuTzF4dWFXMXdiM0owSUhWelpWTmpjbTlzYkV4dlkyc2dabkp2YlNBbkxpOTFjMlZUWTNKdmJHeE1iMk5ySnp0Y2JseHVhVzUwWlhKbVlXTmxJRkJ5YjNCeklIdGNiaUFnY21WaFpHOXViSGtnWTJocGJHUnlaVzQ2SUNoeVpXWTZJRkpsWmtOaGJHeGlZV05yUEVoVVRVeEZiR1Z0Wlc1MFBpa2dQVDRnVW1WaFkzUkZiR1Z0Wlc1ME8xeHVJQ0J5WldGa2IyNXNlU0JzYjJOclJXNWhZbXhsWkRvZ1ltOXZiR1ZoYmp0Y2JpQWdjbVZoWkc5dWJIa2dZMkZ3ZEhWeVpVVnVZV0pzWldRNklHSnZiMnhsWVc0N1hHNGdJSEpsWVdSdmJteDVJRzl1UW05MGRHOXRRWEp5YVhabFB6b2dLR1YyWlc1ME9pQlhhR1ZsYkVWMlpXNTBJSHdnVkc5MVkyaEZkbVZ1ZENrZ1BUNGdkbTlwWkR0Y2JpQWdjbVZoWkc5dWJIa2diMjVDYjNSMGIyMU1aV0YyWlQ4NklDaGxkbVZ1ZERvZ1YyaGxaV3hGZG1WdWRDQjhJRlJ2ZFdOb1JYWmxiblFwSUQwK0lIWnZhV1E3WEc0Z0lISmxZV1J2Ym14NUlHOXVWRzl3UVhKeWFYWmxQem9nS0dWMlpXNTBPaUJYYUdWbGJFVjJaVzUwSUh3Z1ZHOTFZMmhGZG1WdWRDa2dQVDRnZG05cFpEdGNiaUFnY21WaFpHOXViSGtnYjI1VWIzQk1aV0YyWlQ4NklDaGxkbVZ1ZERvZ1YyaGxaV3hGZG1WdWRDQjhJRlJ2ZFdOb1JYWmxiblFwSUQwK0lIWnZhV1E3WEc1OVhHNWNibU52Ym5OMElHSnNkWEpUWld4bFkzUkpibkIxZENBOUlDaGxkbVZ1ZERvZ1RXOTFjMlZGZG1WdWREeElWRTFNUkdsMlJXeGxiV1Z1ZEQ0cElEMCtJSHRjYmlBZ1kyOXVjM1FnWld4bGJXVnVkQ0E5SUdWMlpXNTBMblJoY21kbGRDQmhjeUJJVkUxTVJHbDJSV3hsYldWdWREdGNiaUFnY21WMGRYSnVJQ2hjYmlBZ0lDQmxiR1Z0Wlc1MExtOTNibVZ5Ukc5amRXMWxiblF1WVdOMGFYWmxSV3hsYldWdWRDQW1KbHh1SUNBZ0lDaGxiR1Z0Wlc1MExtOTNibVZ5Ukc5amRXMWxiblF1WVdOMGFYWmxSV3hsYldWdWRDQmhjeUJJVkUxTVJXeGxiV1Z1ZENrdVlteDFjaWdwWEc0Z0lDazdYRzU5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlCVFkzSnZiR3hOWVc1aFoyVnlLSHRjYmlBZ1kyaHBiR1J5Wlc0c1hHNGdJR3h2WTJ0RmJtRmliR1ZrTEZ4dUlDQmpZWEIwZFhKbFJXNWhZbXhsWkNBOUlIUnlkV1VzWEc0Z0lHOXVRbTkwZEc5dFFYSnlhWFpsTEZ4dUlDQnZia0p2ZEhSdmJVeGxZWFpsTEZ4dUlDQnZibFJ2Y0VGeWNtbDJaU3hjYmlBZ2IyNVViM0JNWldGMlpTeGNibjA2SUZCeWIzQnpLU0I3WEc0Z0lHTnZibk4wSUhObGRGTmpjbTlzYkVOaGNIUjFjbVZVWVhKblpYUWdQU0IxYzJWVFkzSnZiR3hEWVhCMGRYSmxLSHRjYmlBZ0lDQnBjMFZ1WVdKc1pXUTZJR05oY0hSMWNtVkZibUZpYkdWa0xGeHVJQ0FnSUc5dVFtOTBkRzl0UVhKeWFYWmxMRnh1SUNBZ0lHOXVRbTkwZEc5dFRHVmhkbVVzWEc0Z0lDQWdiMjVVYjNCQmNuSnBkbVVzWEc0Z0lDQWdiMjVVYjNCTVpXRjJaU3hjYmlBZ2ZTazdYRzRnSUdOdmJuTjBJSE5sZEZOamNtOXNiRXh2WTJ0VVlYSm5aWFFnUFNCMWMyVlRZM0p2Ykd4TWIyTnJLSHNnYVhORmJtRmliR1ZrT2lCc2IyTnJSVzVoWW14bFpDQjlLVHRjYmx4dUlDQmpiMjV6ZENCMFlYSm5aWFJTWldZNklGSmxaa05oYkd4aVlXTnJQRWhVVFV4RmJHVnRaVzUwUGlBOUlDaGxiR1Z0Wlc1MEtTQTlQaUI3WEc0Z0lDQWdjMlYwVTJOeWIyeHNRMkZ3ZEhWeVpWUmhjbWRsZENobGJHVnRaVzUwS1R0Y2JpQWdJQ0J6WlhSVFkzSnZiR3hNYjJOclZHRnlaMlYwS0dWc1pXMWxiblFwTzF4dUlDQjlPMXh1WEc0Z0lISmxkSFZ5YmlBb1hHNGdJQ0FnUEVaeVlXZHRaVzUwUGx4dUlDQWdJQ0FnZTJ4dlkydEZibUZpYkdWa0lDWW1JQ2hjYmlBZ0lDQWdJQ0FnUEdScGRseHVJQ0FnSUNBZ0lDQWdJRzl1UTJ4cFkyczllMkpzZFhKVFpXeGxZM1JKYm5CMWRIMWNiaUFnSUNBZ0lDQWdJQ0JqYzNNOWUzc2djRzl6YVhScGIyNDZJQ2RtYVhobFpDY3NJR3hsWm5RNklEQXNJR0p2ZEhSdmJUb2dNQ3dnY21sbmFIUTZJREFzSUhSdmNEb2dNQ0I5ZlZ4dUlDQWdJQ0FnSUNBdlBseHVJQ0FnSUNBZ0tYMWNiaUFnSUNBZ0lIdGphR2xzWkhKbGJpaDBZWEpuWlhSU1pXWXBmVnh1SUNBZ0lEd3ZSbkpoWjIxbGJuUStYRzRnSUNrN1hHNTlYRzRpWFgwPSAqL1wiLFxuICB0b1N0cmluZzogX0VNT1RJT05fU1RSSU5HSUZJRURfQ1NTX0VSUk9SX18kMVxufTtcbmZ1bmN0aW9uIFNjcm9sbE1hbmFnZXIoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgIGxvY2tFbmFibGVkID0gX3JlZi5sb2NrRW5hYmxlZCxcbiAgICBfcmVmJGNhcHR1cmVFbmFibGVkID0gX3JlZi5jYXB0dXJlRW5hYmxlZCxcbiAgICBjYXB0dXJlRW5hYmxlZCA9IF9yZWYkY2FwdHVyZUVuYWJsZWQgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmJGNhcHR1cmVFbmFibGVkLFxuICAgIG9uQm90dG9tQXJyaXZlID0gX3JlZi5vbkJvdHRvbUFycml2ZSxcbiAgICBvbkJvdHRvbUxlYXZlID0gX3JlZi5vbkJvdHRvbUxlYXZlLFxuICAgIG9uVG9wQXJyaXZlID0gX3JlZi5vblRvcEFycml2ZSxcbiAgICBvblRvcExlYXZlID0gX3JlZi5vblRvcExlYXZlO1xuICB2YXIgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldCA9IHVzZVNjcm9sbENhcHR1cmUoe1xuICAgIGlzRW5hYmxlZDogY2FwdHVyZUVuYWJsZWQsXG4gICAgb25Cb3R0b21BcnJpdmU6IG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmU6IG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmU6IG9uVG9wQXJyaXZlLFxuICAgIG9uVG9wTGVhdmU6IG9uVG9wTGVhdmVcbiAgfSk7XG4gIHZhciBzZXRTY3JvbGxMb2NrVGFyZ2V0ID0gdXNlU2Nyb2xsTG9jayh7XG4gICAgaXNFbmFibGVkOiBsb2NrRW5hYmxlZFxuICB9KTtcbiAgdmFyIHRhcmdldFJlZiA9IGZ1bmN0aW9uIHRhcmdldFJlZihlbGVtZW50KSB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuICByZXR1cm4ganN4KEZyYWdtZW50LCBudWxsLCBsb2NrRW5hYmxlZCAmJiBqc3goXCJkaXZcIiwge1xuICAgIG9uQ2xpY2s6IGJsdXJTZWxlY3RJbnB1dCxcbiAgICBjc3M6IF9yZWYyJDFcbiAgfSksIGNoaWxkcmVuKHRhcmdldFJlZikpO1xufVxuXG5mdW5jdGlvbiBfRU1PVElPTl9TVFJJTkdJRklFRF9DU1NfRVJST1JfXygpIHsgcmV0dXJuIFwiWW91IGhhdmUgdHJpZWQgdG8gc3RyaW5naWZ5IG9iamVjdCByZXR1cm5lZCBmcm9tIGBjc3NgIGZ1bmN0aW9uLiBJdCBpc24ndCBzdXBwb3NlZCB0byBiZSB1c2VkIGRpcmVjdGx5IChlLmcuIGFzIHZhbHVlIG9mIHRoZSBgY2xhc3NOYW1lYCBwcm9wKSwgYnV0IHJhdGhlciBoYW5kZWQgdG8gZW1vdGlvbiBzbyBpdCBjYW4gaGFuZGxlIGl0IChlLmcuIGFzIHZhbHVlIG9mIGBjc3NgIHByb3ApLlwiOyB9XG52YXIgX3JlZjIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIG5hbWU6IFwiMWEwcm80bi1yZXF1aXJlZElucHV0XCIsXG4gIHN0eWxlczogXCJsYWJlbDpyZXF1aXJlZElucHV0O29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO3dpZHRoOjEwMCVcIlxufSA6IHtcbiAgbmFtZTogXCI1a2t4YjItcmVxdWlyZWRJbnB1dC1SZXF1aXJlZElucHV0XCIsXG4gIHN0eWxlczogXCJsYWJlbDpyZXF1aXJlZElucHV0O29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO3dpZHRoOjEwMCU7bGFiZWw6UmVxdWlyZWRJbnB1dDtcIixcbiAgbWFwOiBcIi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklsSmxjWFZwY21Wa1NXNXdkWFF1ZEhONElsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFXTkpJaXdpWm1sc1pTSTZJbEpsY1hWcGNtVmtTVzV3ZFhRdWRITjRJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlvcUlFQnFjM2dnYW5ONElDb3ZYRzVwYlhCdmNuUWdleUJHYjJOMWMwVjJaVzUwU0dGdVpHeGxjaXdnUm5WdVkzUnBiMjVEYjIxd2IyNWxiblFnZlNCbWNtOXRJQ2R5WldGamRDYzdYRzVwYlhCdmNuUWdleUJxYzNnZ2ZTQm1jbTl0SUNkQVpXMXZkR2x2Ymk5eVpXRmpkQ2M3WEc1Y2JtTnZibk4wSUZKbGNYVnBjbVZrU1c1d2RYUTZJRVoxYm1OMGFXOXVRMjl0Y0c5dVpXNTBQSHRjYmlBZ2NtVmhaRzl1YkhrZ2JtRnRaVDg2SUhOMGNtbHVaenRjYmlBZ2NtVmhaRzl1YkhrZ2IyNUdiMk4xY3pvZ1JtOWpkWE5GZG1WdWRFaGhibVJzWlhJOFNGUk5URWx1Y0hWMFJXeGxiV1Z1ZEQ0N1hHNTlQaUE5SUNoN0lHNWhiV1VzSUc5dVJtOWpkWE1nZlNrZ1BUNGdLRnh1SUNBOGFXNXdkWFJjYmlBZ0lDQnlaWEYxYVhKbFpGeHVJQ0FnSUc1aGJXVTllMjVoYldWOVhHNGdJQ0FnZEdGaVNXNWtaWGc5ZXkweGZWeHVJQ0FnSUdGeWFXRXRhR2xrWkdWdVBWd2lkSEoxWlZ3aVhHNGdJQ0FnYjI1R2IyTjFjejE3YjI1R2IyTjFjMzFjYmlBZ0lDQmpjM005ZTN0Y2JpQWdJQ0FnSUd4aFltVnNPaUFuY21WeGRXbHlaV1JKYm5CMWRDY3NYRzRnSUNBZ0lDQnZjR0ZqYVhSNU9pQXdMRnh1SUNBZ0lDQWdjRzlwYm5SbGNrVjJaVzUwY3pvZ0oyNXZibVVuTEZ4dUlDQWdJQ0FnY0c5emFYUnBiMjQ2SUNkaFluTnZiSFYwWlNjc1hHNGdJQ0FnSUNCaWIzUjBiMjA2SURBc1hHNGdJQ0FnSUNCc1pXWjBPaUF3TEZ4dUlDQWdJQ0FnY21sbmFIUTZJREFzWEc0Z0lDQWdJQ0IzYVdSMGFEb2dKekV3TUNVbkxGeHVJQ0FnSUgxOVhHNGdJQ0FnTHk4Z1VISmxkbVZ1ZENCZ1UzZHBkR05vYVc1bklHWnliMjBnZFc1amIyNTBjbTlzYkdWa0lIUnZJR052Ym5SeWIyeHNaV1JnSUdWeWNtOXlYRzRnSUNBZ2RtRnNkV1U5WENKY0lseHVJQ0FnSUc5dVEyaGhibWRsUFhzb0tTQTlQaUI3ZlgxY2JpQWdMejVjYmlrN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElGSmxjWFZwY21Wa1NXNXdkWFE3WEc0aVhYMD0gKi9cIixcbiAgdG9TdHJpbmc6IF9FTU9USU9OX1NUUklOR0lGSUVEX0NTU19FUlJPUl9fXG59O1xudmFyIFJlcXVpcmVkSW5wdXQgPSBmdW5jdGlvbiBSZXF1aXJlZElucHV0KF9yZWYpIHtcbiAgdmFyIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgb25Gb2N1cyA9IF9yZWYub25Gb2N1cztcbiAgcmV0dXJuIGpzeChcImlucHV0XCIsIHtcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBuYW1lOiBuYW1lLFxuICAgIHRhYkluZGV4OiAtMSxcbiAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgIG9uRm9jdXM6IG9uRm9jdXMsXG4gICAgY3NzOiBfcmVmMlxuICAgIC8vIFByZXZlbnQgYFN3aXRjaGluZyBmcm9tIHVuY29udHJvbGxlZCB0byBjb250cm9sbGVkYCBlcnJvclxuICAgICxcbiAgICB2YWx1ZTogXCJcIixcbiAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoKSB7fVxuICB9KTtcbn07XG52YXIgUmVxdWlyZWRJbnB1dCQxID0gUmVxdWlyZWRJbnB1dDtcblxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ1c2VyLWFnZW50LWRhdGEtdHlwZXNcIiAvPlxuXG5mdW5jdGlvbiB0ZXN0UGxhdGZvcm0ocmUpIHtcbiAgdmFyIF93aW5kb3ckbmF2aWdhdG9yJHVzZTtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5uYXZpZ2F0b3IgIT0gbnVsbCA/IHJlLnRlc3QoKChfd2luZG93JG5hdmlnYXRvciR1c2UgPSB3aW5kb3cubmF2aWdhdG9yWyd1c2VyQWdlbnREYXRhJ10pID09PSBudWxsIHx8IF93aW5kb3ckbmF2aWdhdG9yJHVzZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3dpbmRvdyRuYXZpZ2F0b3IkdXNlLnBsYXRmb3JtKSB8fCB3aW5kb3cubmF2aWdhdG9yLnBsYXRmb3JtKSA6IGZhbHNlO1xufVxuZnVuY3Rpb24gaXNJUGhvbmUoKSB7XG4gIHJldHVybiB0ZXN0UGxhdGZvcm0oL15pUGhvbmUvaSk7XG59XG5mdW5jdGlvbiBpc01hYygpIHtcbiAgcmV0dXJuIHRlc3RQbGF0Zm9ybSgvXk1hYy9pKTtcbn1cbmZ1bmN0aW9uIGlzSVBhZCgpIHtcbiAgcmV0dXJuIHRlc3RQbGF0Zm9ybSgvXmlQYWQvaSkgfHxcbiAgLy8gaVBhZE9TIDEzIGxpZXMgYW5kIHNheXMgaXQncyBhIE1hYywgYnV0IHdlIGNhbiBkaXN0aW5ndWlzaCBieSBkZXRlY3RpbmcgdG91Y2ggc3VwcG9ydC5cbiAgaXNNYWMoKSAmJiBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAxO1xufVxuZnVuY3Rpb24gaXNJT1MoKSB7XG4gIHJldHVybiBpc0lQaG9uZSgpIHx8IGlzSVBhZCgpO1xufVxuZnVuY3Rpb24gaXNBcHBsZURldmljZSgpIHtcbiAgcmV0dXJuIGlzTWFjKCkgfHwgaXNJT1MoKTtcbn1cblxudmFyIGZvcm1hdEdyb3VwTGFiZWwgPSBmdW5jdGlvbiBmb3JtYXRHcm91cExhYmVsKGdyb3VwKSB7XG4gIHJldHVybiBncm91cC5sYWJlbDtcbn07XG52YXIgZ2V0T3B0aW9uTGFiZWwkMSA9IGZ1bmN0aW9uIGdldE9wdGlvbkxhYmVsKG9wdGlvbikge1xuICByZXR1cm4gb3B0aW9uLmxhYmVsO1xufTtcbnZhciBnZXRPcHRpb25WYWx1ZSQxID0gZnVuY3Rpb24gZ2V0T3B0aW9uVmFsdWUob3B0aW9uKSB7XG4gIHJldHVybiBvcHRpb24udmFsdWU7XG59O1xudmFyIGlzT3B0aW9uRGlzYWJsZWQgPSBmdW5jdGlvbiBpc09wdGlvbkRpc2FibGVkKG9wdGlvbikge1xuICByZXR1cm4gISFvcHRpb24uaXNEaXNhYmxlZDtcbn07XG5cbnZhciBkZWZhdWx0U3R5bGVzID0ge1xuICBjbGVhckluZGljYXRvcjogY2xlYXJJbmRpY2F0b3JDU1MsXG4gIGNvbnRhaW5lcjogY29udGFpbmVyQ1NTLFxuICBjb250cm9sOiBjc3MkMSxcbiAgZHJvcGRvd25JbmRpY2F0b3I6IGRyb3Bkb3duSW5kaWNhdG9yQ1NTLFxuICBncm91cDogZ3JvdXBDU1MsXG4gIGdyb3VwSGVhZGluZzogZ3JvdXBIZWFkaW5nQ1NTLFxuICBpbmRpY2F0b3JzQ29udGFpbmVyOiBpbmRpY2F0b3JzQ29udGFpbmVyQ1NTLFxuICBpbmRpY2F0b3JTZXBhcmF0b3I6IGluZGljYXRvclNlcGFyYXRvckNTUyxcbiAgaW5wdXQ6IGlucHV0Q1NTLFxuICBsb2FkaW5nSW5kaWNhdG9yOiBsb2FkaW5nSW5kaWNhdG9yQ1NTLFxuICBsb2FkaW5nTWVzc2FnZTogbG9hZGluZ01lc3NhZ2VDU1MsXG4gIG1lbnU6IG1lbnVDU1MsXG4gIG1lbnVMaXN0OiBtZW51TGlzdENTUyxcbiAgbWVudVBvcnRhbDogbWVudVBvcnRhbENTUyxcbiAgbXVsdGlWYWx1ZTogbXVsdGlWYWx1ZUNTUyxcbiAgbXVsdGlWYWx1ZUxhYmVsOiBtdWx0aVZhbHVlTGFiZWxDU1MsXG4gIG11bHRpVmFsdWVSZW1vdmU6IG11bHRpVmFsdWVSZW1vdmVDU1MsXG4gIG5vT3B0aW9uc01lc3NhZ2U6IG5vT3B0aW9uc01lc3NhZ2VDU1MsXG4gIG9wdGlvbjogb3B0aW9uQ1NTLFxuICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXJDU1MsXG4gIHNpbmdsZVZhbHVlOiBjc3MkMixcbiAgdmFsdWVDb250YWluZXI6IHZhbHVlQ29udGFpbmVyQ1NTXG59O1xuLy8gTWVyZ2UgVXRpbGl0eVxuLy8gQWxsb3dzIGNvbnN1bWVycyB0byBleHRlbmQgYSBiYXNlIFNlbGVjdCB3aXRoIGFkZGl0aW9uYWwgc3R5bGVzXG5cbmZ1bmN0aW9uIG1lcmdlU3R5bGVzKHNvdXJjZSkge1xuICB2YXIgdGFyZ2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgLy8gaW5pdGlhbGl6ZSB3aXRoIHNvdXJjZSBzdHlsZXNcbiAgdmFyIHN0eWxlcyA9IF9vYmplY3RTcHJlYWQoe30sIHNvdXJjZSk7XG5cbiAgLy8gbWFzc2FnZSBpbiB0YXJnZXQgc3R5bGVzXG4gIE9iamVjdC5rZXlzKHRhcmdldCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5QXNTdHJpbmcpIHtcbiAgICB2YXIga2V5ID0ga2V5QXNTdHJpbmc7XG4gICAgaWYgKHNvdXJjZVtrZXldKSB7XG4gICAgICBzdHlsZXNba2V5XSA9IGZ1bmN0aW9uIChyc0NzcywgcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldKHNvdXJjZVtrZXldKHJzQ3NzLCBwcm9wcyksIHByb3BzKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc1trZXldID0gdGFyZ2V0W2tleV07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHN0eWxlcztcbn1cblxudmFyIGNvbG9ycyA9IHtcbiAgcHJpbWFyeTogJyMyNjg0RkYnLFxuICBwcmltYXJ5NzU6ICcjNEM5QUZGJyxcbiAgcHJpbWFyeTUwOiAnI0IyRDRGRicsXG4gIHByaW1hcnkyNTogJyNERUVCRkYnLFxuICBkYW5nZXI6ICcjREUzNTBCJyxcbiAgZGFuZ2VyTGlnaHQ6ICcjRkZCREFEJyxcbiAgbmV1dHJhbDA6ICdoc2woMCwgMCUsIDEwMCUpJyxcbiAgbmV1dHJhbDU6ICdoc2woMCwgMCUsIDk1JSknLFxuICBuZXV0cmFsMTA6ICdoc2woMCwgMCUsIDkwJSknLFxuICBuZXV0cmFsMjA6ICdoc2woMCwgMCUsIDgwJSknLFxuICBuZXV0cmFsMzA6ICdoc2woMCwgMCUsIDcwJSknLFxuICBuZXV0cmFsNDA6ICdoc2woMCwgMCUsIDYwJSknLFxuICBuZXV0cmFsNTA6ICdoc2woMCwgMCUsIDUwJSknLFxuICBuZXV0cmFsNjA6ICdoc2woMCwgMCUsIDQwJSknLFxuICBuZXV0cmFsNzA6ICdoc2woMCwgMCUsIDMwJSknLFxuICBuZXV0cmFsODA6ICdoc2woMCwgMCUsIDIwJSknLFxuICBuZXV0cmFsOTA6ICdoc2woMCwgMCUsIDEwJSknXG59O1xudmFyIGJvcmRlclJhZGl1cyA9IDQ7XG4vLyBVc2VkIHRvIGNhbGN1bGF0ZSBjb25zaXN0ZW50IG1hcmdpbi9wYWRkaW5nIG9uIGVsZW1lbnRzXG52YXIgYmFzZVVuaXQgPSA0O1xuLy8gVGhlIG1pbmltdW0gaGVpZ2h0IG9mIHRoZSBjb250cm9sXG52YXIgY29udHJvbEhlaWdodCA9IDM4O1xuLy8gVGhlIGFtb3VudCBvZiBzcGFjZSBiZXR3ZWVuIHRoZSBjb250cm9sIGFuZCBtZW51ICovXG52YXIgbWVudUd1dHRlciA9IGJhc2VVbml0ICogMjtcbnZhciBzcGFjaW5nID0ge1xuICBiYXNlVW5pdDogYmFzZVVuaXQsXG4gIGNvbnRyb2xIZWlnaHQ6IGNvbnRyb2xIZWlnaHQsXG4gIG1lbnVHdXR0ZXI6IG1lbnVHdXR0ZXJcbn07XG52YXIgZGVmYXVsdFRoZW1lID0ge1xuICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgY29sb3JzOiBjb2xvcnMsXG4gIHNwYWNpbmc6IHNwYWNpbmdcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gICdhcmlhLWxpdmUnOiAncG9saXRlJyxcbiAgYmFja3NwYWNlUmVtb3Zlc1ZhbHVlOiB0cnVlLFxuICBibHVySW5wdXRPblNlbGVjdDogaXNUb3VjaENhcGFibGUoKSxcbiAgY2FwdHVyZU1lbnVTY3JvbGw6ICFpc1RvdWNoQ2FwYWJsZSgpLFxuICBjbGFzc05hbWVzOiB7fSxcbiAgY2xvc2VNZW51T25TZWxlY3Q6IHRydWUsXG4gIGNsb3NlTWVudU9uU2Nyb2xsOiBmYWxzZSxcbiAgY29tcG9uZW50czoge30sXG4gIGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZTogdHJ1ZSxcbiAgZXNjYXBlQ2xlYXJzVmFsdWU6IGZhbHNlLFxuICBmaWx0ZXJPcHRpb246IGNyZWF0ZUZpbHRlcigpLFxuICBmb3JtYXRHcm91cExhYmVsOiBmb3JtYXRHcm91cExhYmVsLFxuICBnZXRPcHRpb25MYWJlbDogZ2V0T3B0aW9uTGFiZWwkMSxcbiAgZ2V0T3B0aW9uVmFsdWU6IGdldE9wdGlvblZhbHVlJDEsXG4gIGlzRGlzYWJsZWQ6IGZhbHNlLFxuICBpc0xvYWRpbmc6IGZhbHNlLFxuICBpc011bHRpOiBmYWxzZSxcbiAgaXNSdGw6IGZhbHNlLFxuICBpc1NlYXJjaGFibGU6IHRydWUsXG4gIGlzT3B0aW9uRGlzYWJsZWQ6IGlzT3B0aW9uRGlzYWJsZWQsXG4gIGxvYWRpbmdNZXNzYWdlOiBmdW5jdGlvbiBsb2FkaW5nTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gJ0xvYWRpbmcuLi4nO1xuICB9LFxuICBtYXhNZW51SGVpZ2h0OiAzMDAsXG4gIG1pbk1lbnVIZWlnaHQ6IDE0MCxcbiAgbWVudUlzT3BlbjogZmFsc2UsXG4gIG1lbnVQbGFjZW1lbnQ6ICdib3R0b20nLFxuICBtZW51UG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIG1lbnVTaG91bGRCbG9ja1Njcm9sbDogZmFsc2UsXG4gIG1lbnVTaG91bGRTY3JvbGxJbnRvVmlldzogIWlzTW9iaWxlRGV2aWNlKCksXG4gIG5vT3B0aW9uc01lc3NhZ2U6IGZ1bmN0aW9uIG5vT3B0aW9uc01lc3NhZ2UoKSB7XG4gICAgcmV0dXJuICdObyBvcHRpb25zJztcbiAgfSxcbiAgb3Blbk1lbnVPbkZvY3VzOiBmYWxzZSxcbiAgb3Blbk1lbnVPbkNsaWNrOiB0cnVlLFxuICBvcHRpb25zOiBbXSxcbiAgcGFnZVNpemU6IDUsXG4gIHBsYWNlaG9sZGVyOiAnU2VsZWN0Li4uJyxcbiAgc2NyZWVuUmVhZGVyU3RhdHVzOiBmdW5jdGlvbiBzY3JlZW5SZWFkZXJTdGF0dXMoX3JlZikge1xuICAgIHZhciBjb3VudCA9IF9yZWYuY291bnQ7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KGNvdW50LCBcIiByZXN1bHRcIikuY29uY2F0KGNvdW50ICE9PSAxID8gJ3MnIDogJycsIFwiIGF2YWlsYWJsZVwiKTtcbiAgfSxcbiAgc3R5bGVzOiB7fSxcbiAgdGFiSW5kZXg6IDAsXG4gIHRhYlNlbGVjdHNWYWx1ZTogdHJ1ZSxcbiAgdW5zdHlsZWQ6IGZhbHNlXG59O1xuZnVuY3Rpb24gdG9DYXRlZ29yaXplZE9wdGlvbihwcm9wcywgb3B0aW9uLCBzZWxlY3RWYWx1ZSwgaW5kZXgpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfaXNPcHRpb25EaXNhYmxlZChwcm9wcywgb3B0aW9uLCBzZWxlY3RWYWx1ZSk7XG4gIHZhciBpc1NlbGVjdGVkID0gX2lzT3B0aW9uU2VsZWN0ZWQocHJvcHMsIG9wdGlvbiwgc2VsZWN0VmFsdWUpO1xuICB2YXIgbGFiZWwgPSBnZXRPcHRpb25MYWJlbChwcm9wcywgb3B0aW9uKTtcbiAgdmFyIHZhbHVlID0gZ2V0T3B0aW9uVmFsdWUocHJvcHMsIG9wdGlvbik7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ29wdGlvbicsXG4gICAgZGF0YTogb3B0aW9uLFxuICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgaXNTZWxlY3RlZDogaXNTZWxlY3RlZCxcbiAgICBsYWJlbDogbGFiZWwsXG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIGluZGV4OiBpbmRleFxuICB9O1xufVxuZnVuY3Rpb24gYnVpbGRDYXRlZ29yaXplZE9wdGlvbnMocHJvcHMsIHNlbGVjdFZhbHVlKSB7XG4gIHJldHVybiBwcm9wcy5vcHRpb25zLm1hcChmdW5jdGlvbiAoZ3JvdXBPck9wdGlvbiwgZ3JvdXBPck9wdGlvbkluZGV4KSB7XG4gICAgaWYgKCdvcHRpb25zJyBpbiBncm91cE9yT3B0aW9uKSB7XG4gICAgICB2YXIgY2F0ZWdvcml6ZWRPcHRpb25zID0gZ3JvdXBPck9wdGlvbi5vcHRpb25zLm1hcChmdW5jdGlvbiAob3B0aW9uLCBvcHRpb25JbmRleCkge1xuICAgICAgICByZXR1cm4gdG9DYXRlZ29yaXplZE9wdGlvbihwcm9wcywgb3B0aW9uLCBzZWxlY3RWYWx1ZSwgb3B0aW9uSW5kZXgpO1xuICAgICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChjYXRlZ29yaXplZE9wdGlvbikge1xuICAgICAgICByZXR1cm4gaXNGb2N1c2FibGUocHJvcHMsIGNhdGVnb3JpemVkT3B0aW9uKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNhdGVnb3JpemVkT3B0aW9ucy5sZW5ndGggPiAwID8ge1xuICAgICAgICB0eXBlOiAnZ3JvdXAnLFxuICAgICAgICBkYXRhOiBncm91cE9yT3B0aW9uLFxuICAgICAgICBvcHRpb25zOiBjYXRlZ29yaXplZE9wdGlvbnMsXG4gICAgICAgIGluZGV4OiBncm91cE9yT3B0aW9uSW5kZXhcbiAgICAgIH0gOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHZhciBjYXRlZ29yaXplZE9wdGlvbiA9IHRvQ2F0ZWdvcml6ZWRPcHRpb24ocHJvcHMsIGdyb3VwT3JPcHRpb24sIHNlbGVjdFZhbHVlLCBncm91cE9yT3B0aW9uSW5kZXgpO1xuICAgIHJldHVybiBpc0ZvY3VzYWJsZShwcm9wcywgY2F0ZWdvcml6ZWRPcHRpb24pID8gY2F0ZWdvcml6ZWRPcHRpb24gOiB1bmRlZmluZWQ7XG4gIH0pLmZpbHRlcihub3ROdWxsaXNoKTtcbn1cbmZ1bmN0aW9uIGJ1aWxkRm9jdXNhYmxlT3B0aW9uc0Zyb21DYXRlZ29yaXplZE9wdGlvbnMoY2F0ZWdvcml6ZWRPcHRpb25zKSB7XG4gIHJldHVybiBjYXRlZ29yaXplZE9wdGlvbnMucmVkdWNlKGZ1bmN0aW9uIChvcHRpb25zQWNjdW11bGF0b3IsIGNhdGVnb3JpemVkT3B0aW9uKSB7XG4gICAgaWYgKGNhdGVnb3JpemVkT3B0aW9uLnR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgIG9wdGlvbnNBY2N1bXVsYXRvci5wdXNoLmFwcGx5KG9wdGlvbnNBY2N1bXVsYXRvciwgX3RvQ29uc3VtYWJsZUFycmF5KGNhdGVnb3JpemVkT3B0aW9uLm9wdGlvbnMubWFwKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbi5kYXRhO1xuICAgICAgfSkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9uc0FjY3VtdWxhdG9yLnB1c2goY2F0ZWdvcml6ZWRPcHRpb24uZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zQWNjdW11bGF0b3I7XG4gIH0sIFtdKTtcbn1cbmZ1bmN0aW9uIGJ1aWxkRm9jdXNhYmxlT3B0aW9uc1dpdGhJZHMoY2F0ZWdvcml6ZWRPcHRpb25zLCBvcHRpb25JZCkge1xuICByZXR1cm4gY2F0ZWdvcml6ZWRPcHRpb25zLnJlZHVjZShmdW5jdGlvbiAob3B0aW9uc0FjY3VtdWxhdG9yLCBjYXRlZ29yaXplZE9wdGlvbikge1xuICAgIGlmIChjYXRlZ29yaXplZE9wdGlvbi50eXBlID09PSAnZ3JvdXAnKSB7XG4gICAgICBvcHRpb25zQWNjdW11bGF0b3IucHVzaC5hcHBseShvcHRpb25zQWNjdW11bGF0b3IsIF90b0NvbnN1bWFibGVBcnJheShjYXRlZ29yaXplZE9wdGlvbi5vcHRpb25zLm1hcChmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGF0YTogb3B0aW9uLmRhdGEsXG4gICAgICAgICAgaWQ6IFwiXCIuY29uY2F0KG9wdGlvbklkLCBcIi1cIikuY29uY2F0KGNhdGVnb3JpemVkT3B0aW9uLmluZGV4LCBcIi1cIikuY29uY2F0KG9wdGlvbi5pbmRleClcbiAgICAgICAgfTtcbiAgICAgIH0pKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnNBY2N1bXVsYXRvci5wdXNoKHtcbiAgICAgICAgZGF0YTogY2F0ZWdvcml6ZWRPcHRpb24uZGF0YSxcbiAgICAgICAgaWQ6IFwiXCIuY29uY2F0KG9wdGlvbklkLCBcIi1cIikuY29uY2F0KGNhdGVnb3JpemVkT3B0aW9uLmluZGV4KVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zQWNjdW11bGF0b3I7XG4gIH0sIFtdKTtcbn1cbmZ1bmN0aW9uIGJ1aWxkRm9jdXNhYmxlT3B0aW9ucyhwcm9wcywgc2VsZWN0VmFsdWUpIHtcbiAgcmV0dXJuIGJ1aWxkRm9jdXNhYmxlT3B0aW9uc0Zyb21DYXRlZ29yaXplZE9wdGlvbnMoYnVpbGRDYXRlZ29yaXplZE9wdGlvbnMocHJvcHMsIHNlbGVjdFZhbHVlKSk7XG59XG5mdW5jdGlvbiBpc0ZvY3VzYWJsZShwcm9wcywgY2F0ZWdvcml6ZWRPcHRpb24pIHtcbiAgdmFyIF9wcm9wcyRpbnB1dFZhbHVlID0gcHJvcHMuaW5wdXRWYWx1ZSxcbiAgICBpbnB1dFZhbHVlID0gX3Byb3BzJGlucHV0VmFsdWUgPT09IHZvaWQgMCA/ICcnIDogX3Byb3BzJGlucHV0VmFsdWU7XG4gIHZhciBkYXRhID0gY2F0ZWdvcml6ZWRPcHRpb24uZGF0YSxcbiAgICBpc1NlbGVjdGVkID0gY2F0ZWdvcml6ZWRPcHRpb24uaXNTZWxlY3RlZCxcbiAgICBsYWJlbCA9IGNhdGVnb3JpemVkT3B0aW9uLmxhYmVsLFxuICAgIHZhbHVlID0gY2F0ZWdvcml6ZWRPcHRpb24udmFsdWU7XG4gIHJldHVybiAoIXNob3VsZEhpZGVTZWxlY3RlZE9wdGlvbnMocHJvcHMpIHx8ICFpc1NlbGVjdGVkKSAmJiBfZmlsdGVyT3B0aW9uKHByb3BzLCB7XG4gICAgbGFiZWw6IGxhYmVsLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBkYXRhOiBkYXRhXG4gIH0sIGlucHV0VmFsdWUpO1xufVxuZnVuY3Rpb24gZ2V0TmV4dEZvY3VzZWRWYWx1ZShzdGF0ZSwgbmV4dFNlbGVjdFZhbHVlKSB7XG4gIHZhciBmb2N1c2VkVmFsdWUgPSBzdGF0ZS5mb2N1c2VkVmFsdWUsXG4gICAgbGFzdFNlbGVjdFZhbHVlID0gc3RhdGUuc2VsZWN0VmFsdWU7XG4gIHZhciBsYXN0Rm9jdXNlZEluZGV4ID0gbGFzdFNlbGVjdFZhbHVlLmluZGV4T2YoZm9jdXNlZFZhbHVlKTtcbiAgaWYgKGxhc3RGb2N1c2VkSW5kZXggPiAtMSkge1xuICAgIHZhciBuZXh0Rm9jdXNlZEluZGV4ID0gbmV4dFNlbGVjdFZhbHVlLmluZGV4T2YoZm9jdXNlZFZhbHVlKTtcbiAgICBpZiAobmV4dEZvY3VzZWRJbmRleCA+IC0xKSB7XG4gICAgICAvLyB0aGUgZm9jdXNlZCB2YWx1ZSBpcyBzdGlsbCBpbiB0aGUgc2VsZWN0VmFsdWUsIHJldHVybiBpdFxuICAgICAgcmV0dXJuIGZvY3VzZWRWYWx1ZTtcbiAgICB9IGVsc2UgaWYgKGxhc3RGb2N1c2VkSW5kZXggPCBuZXh0U2VsZWN0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAvLyB0aGUgZm9jdXNlZFZhbHVlIGlzIG5vdCBwcmVzZW50IGluIHRoZSBuZXh0IHNlbGVjdFZhbHVlIGFycmF5IGJ5XG4gICAgICAvLyByZWZlcmVuY2UsIHNvIHJldHVybiB0aGUgbmV3IHZhbHVlIGF0IHRoZSBzYW1lIGluZGV4XG4gICAgICByZXR1cm4gbmV4dFNlbGVjdFZhbHVlW2xhc3RGb2N1c2VkSW5kZXhdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIGdldE5leHRGb2N1c2VkT3B0aW9uKHN0YXRlLCBvcHRpb25zKSB7XG4gIHZhciBsYXN0Rm9jdXNlZE9wdGlvbiA9IHN0YXRlLmZvY3VzZWRPcHRpb247XG4gIHJldHVybiBsYXN0Rm9jdXNlZE9wdGlvbiAmJiBvcHRpb25zLmluZGV4T2YobGFzdEZvY3VzZWRPcHRpb24pID4gLTEgPyBsYXN0Rm9jdXNlZE9wdGlvbiA6IG9wdGlvbnNbMF07XG59XG52YXIgZ2V0Rm9jdXNlZE9wdGlvbklkID0gZnVuY3Rpb24gZ2V0Rm9jdXNlZE9wdGlvbklkKGZvY3VzYWJsZU9wdGlvbnNXaXRoSWRzLCBmb2N1c2VkT3B0aW9uKSB7XG4gIHZhciBfZm9jdXNhYmxlT3B0aW9uc1dpdGg7XG4gIHZhciBmb2N1c2VkT3B0aW9uSWQgPSAoX2ZvY3VzYWJsZU9wdGlvbnNXaXRoID0gZm9jdXNhYmxlT3B0aW9uc1dpdGhJZHMuZmluZChmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgcmV0dXJuIG9wdGlvbi5kYXRhID09PSBmb2N1c2VkT3B0aW9uO1xuICB9KSkgPT09IG51bGwgfHwgX2ZvY3VzYWJsZU9wdGlvbnNXaXRoID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZm9jdXNhYmxlT3B0aW9uc1dpdGguaWQ7XG4gIHJldHVybiBmb2N1c2VkT3B0aW9uSWQgfHwgbnVsbDtcbn07XG52YXIgZ2V0T3B0aW9uTGFiZWwgPSBmdW5jdGlvbiBnZXRPcHRpb25MYWJlbChwcm9wcywgZGF0YSkge1xuICByZXR1cm4gcHJvcHMuZ2V0T3B0aW9uTGFiZWwoZGF0YSk7XG59O1xudmFyIGdldE9wdGlvblZhbHVlID0gZnVuY3Rpb24gZ2V0T3B0aW9uVmFsdWUocHJvcHMsIGRhdGEpIHtcbiAgcmV0dXJuIHByb3BzLmdldE9wdGlvblZhbHVlKGRhdGEpO1xufTtcbmZ1bmN0aW9uIF9pc09wdGlvbkRpc2FibGVkKHByb3BzLCBvcHRpb24sIHNlbGVjdFZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgcHJvcHMuaXNPcHRpb25EaXNhYmxlZCA9PT0gJ2Z1bmN0aW9uJyA/IHByb3BzLmlzT3B0aW9uRGlzYWJsZWQob3B0aW9uLCBzZWxlY3RWYWx1ZSkgOiBmYWxzZTtcbn1cbmZ1bmN0aW9uIF9pc09wdGlvblNlbGVjdGVkKHByb3BzLCBvcHRpb24sIHNlbGVjdFZhbHVlKSB7XG4gIGlmIChzZWxlY3RWYWx1ZS5pbmRleE9mKG9wdGlvbikgPiAtMSkgcmV0dXJuIHRydWU7XG4gIGlmICh0eXBlb2YgcHJvcHMuaXNPcHRpb25TZWxlY3RlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBwcm9wcy5pc09wdGlvblNlbGVjdGVkKG9wdGlvbiwgc2VsZWN0VmFsdWUpO1xuICB9XG4gIHZhciBjYW5kaWRhdGUgPSBnZXRPcHRpb25WYWx1ZShwcm9wcywgb3B0aW9uKTtcbiAgcmV0dXJuIHNlbGVjdFZhbHVlLnNvbWUoZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gZ2V0T3B0aW9uVmFsdWUocHJvcHMsIGkpID09PSBjYW5kaWRhdGU7XG4gIH0pO1xufVxuZnVuY3Rpb24gX2ZpbHRlck9wdGlvbihwcm9wcywgb3B0aW9uLCBpbnB1dFZhbHVlKSB7XG4gIHJldHVybiBwcm9wcy5maWx0ZXJPcHRpb24gPyBwcm9wcy5maWx0ZXJPcHRpb24ob3B0aW9uLCBpbnB1dFZhbHVlKSA6IHRydWU7XG59XG52YXIgc2hvdWxkSGlkZVNlbGVjdGVkT3B0aW9ucyA9IGZ1bmN0aW9uIHNob3VsZEhpZGVTZWxlY3RlZE9wdGlvbnMocHJvcHMpIHtcbiAgdmFyIGhpZGVTZWxlY3RlZE9wdGlvbnMgPSBwcm9wcy5oaWRlU2VsZWN0ZWRPcHRpb25zLFxuICAgIGlzTXVsdGkgPSBwcm9wcy5pc011bHRpO1xuICBpZiAoaGlkZVNlbGVjdGVkT3B0aW9ucyA9PT0gdW5kZWZpbmVkKSByZXR1cm4gaXNNdWx0aTtcbiAgcmV0dXJuIGhpZGVTZWxlY3RlZE9wdGlvbnM7XG59O1xudmFyIGluc3RhbmNlSWQgPSAxO1xudmFyIFNlbGVjdCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU2VsZWN0LCBfQ29tcG9uZW50KTtcbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihTZWxlY3QpO1xuICAvLyBNaXNjLiBJbnN0YW5jZSBQcm9wZXJ0aWVzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFRPRE9cblxuICAvLyBSZWZzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIExpZmVjeWNsZVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBmdW5jdGlvbiBTZWxlY3QoX3Byb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTZWxlY3QpO1xuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgX3Byb3BzKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFyaWFTZWxlY3Rpb246IG51bGwsXG4gICAgICBmb2N1c2VkT3B0aW9uOiBudWxsLFxuICAgICAgZm9jdXNlZE9wdGlvbklkOiBudWxsLFxuICAgICAgZm9jdXNhYmxlT3B0aW9uc1dpdGhJZHM6IFtdLFxuICAgICAgZm9jdXNlZFZhbHVlOiBudWxsLFxuICAgICAgaW5wdXRJc0hpZGRlbjogZmFsc2UsXG4gICAgICBpc0ZvY3VzZWQ6IGZhbHNlLFxuICAgICAgc2VsZWN0VmFsdWU6IFtdLFxuICAgICAgY2xlYXJGb2N1c1ZhbHVlT25VcGRhdGU6IGZhbHNlLFxuICAgICAgcHJldldhc0ZvY3VzZWQ6IGZhbHNlLFxuICAgICAgaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlOiB1bmRlZmluZWQsXG4gICAgICBwcmV2UHJvcHM6IHVuZGVmaW5lZCxcbiAgICAgIGluc3RhbmNlUHJlZml4OiAnJ1xuICAgIH07XG4gICAgX3RoaXMuYmxvY2tPcHRpb25Ib3ZlciA9IGZhbHNlO1xuICAgIF90aGlzLmlzQ29tcG9zaW5nID0gZmFsc2U7XG4gICAgX3RoaXMuY29tbW9uUHJvcHMgPSB2b2lkIDA7XG4gICAgX3RoaXMuaW5pdGlhbFRvdWNoWCA9IDA7XG4gICAgX3RoaXMuaW5pdGlhbFRvdWNoWSA9IDA7XG4gICAgX3RoaXMub3BlbkFmdGVyRm9jdXMgPSBmYWxzZTtcbiAgICBfdGhpcy5zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSA9IGZhbHNlO1xuICAgIF90aGlzLnVzZXJJc0RyYWdnaW5nID0gdm9pZCAwO1xuICAgIF90aGlzLmlzQXBwbGVEZXZpY2UgPSBpc0FwcGxlRGV2aWNlKCk7XG4gICAgX3RoaXMuY29udHJvbFJlZiA9IG51bGw7XG4gICAgX3RoaXMuZ2V0Q29udHJvbFJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIF90aGlzLmNvbnRyb2xSZWYgPSByZWY7XG4gICAgfTtcbiAgICBfdGhpcy5mb2N1c2VkT3B0aW9uUmVmID0gbnVsbDtcbiAgICBfdGhpcy5nZXRGb2N1c2VkT3B0aW9uUmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgX3RoaXMuZm9jdXNlZE9wdGlvblJlZiA9IHJlZjtcbiAgICB9O1xuICAgIF90aGlzLm1lbnVMaXN0UmVmID0gbnVsbDtcbiAgICBfdGhpcy5nZXRNZW51TGlzdFJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIF90aGlzLm1lbnVMaXN0UmVmID0gcmVmO1xuICAgIH07XG4gICAgX3RoaXMuaW5wdXRSZWYgPSBudWxsO1xuICAgIF90aGlzLmdldElucHV0UmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgX3RoaXMuaW5wdXRSZWYgPSByZWY7XG4gICAgfTtcbiAgICBfdGhpcy5mb2N1cyA9IF90aGlzLmZvY3VzSW5wdXQ7XG4gICAgX3RoaXMuYmx1ciA9IF90aGlzLmJsdXJJbnB1dDtcbiAgICBfdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgYWN0aW9uTWV0YSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgIG9uQ2hhbmdlID0gX3RoaXMkcHJvcHMub25DaGFuZ2UsXG4gICAgICAgIG5hbWUgPSBfdGhpcyRwcm9wcy5uYW1lO1xuICAgICAgYWN0aW9uTWV0YS5uYW1lID0gbmFtZTtcbiAgICAgIF90aGlzLmFyaWFPbkNoYW5nZShuZXdWYWx1ZSwgYWN0aW9uTWV0YSk7XG4gICAgICBvbkNoYW5nZShuZXdWYWx1ZSwgYWN0aW9uTWV0YSk7XG4gICAgfTtcbiAgICBfdGhpcy5zZXRWYWx1ZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgYWN0aW9uLCBvcHRpb24pIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgY2xvc2VNZW51T25TZWxlY3QgPSBfdGhpcyRwcm9wczIuY2xvc2VNZW51T25TZWxlY3QsXG4gICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczIuaXNNdWx0aSxcbiAgICAgICAgaW5wdXRWYWx1ZSA9IF90aGlzJHByb3BzMi5pbnB1dFZhbHVlO1xuICAgICAgX3RoaXMub25JbnB1dENoYW5nZSgnJywge1xuICAgICAgICBhY3Rpb246ICdzZXQtdmFsdWUnLFxuICAgICAgICBwcmV2SW5wdXRWYWx1ZTogaW5wdXRWYWx1ZVxuICAgICAgfSk7XG4gICAgICBpZiAoY2xvc2VNZW51T25TZWxlY3QpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZTogIWlzTXVsdGlcbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzLm9uTWVudUNsb3NlKCk7XG4gICAgICB9XG4gICAgICAvLyB3aGVuIHRoZSBzZWxlY3QgdmFsdWUgc2hvdWxkIGNoYW5nZSwgd2Ugc2hvdWxkIHJlc2V0IGZvY3VzZWRWYWx1ZVxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjbGVhckZvY3VzVmFsdWVPblVwZGF0ZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBfdGhpcy5vbkNoYW5nZShuZXdWYWx1ZSwge1xuICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgb3B0aW9uOiBvcHRpb25cbiAgICAgIH0pO1xuICAgIH07XG4gICAgX3RoaXMuc2VsZWN0T3B0aW9uID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gX3RoaXMucHJvcHMsXG4gICAgICAgIGJsdXJJbnB1dE9uU2VsZWN0ID0gX3RoaXMkcHJvcHMzLmJsdXJJbnB1dE9uU2VsZWN0LFxuICAgICAgICBpc011bHRpID0gX3RoaXMkcHJvcHMzLmlzTXVsdGksXG4gICAgICAgIG5hbWUgPSBfdGhpcyRwcm9wczMubmFtZTtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IF90aGlzLnN0YXRlLnNlbGVjdFZhbHVlO1xuICAgICAgdmFyIGRlc2VsZWN0ZWQgPSBpc011bHRpICYmIF90aGlzLmlzT3B0aW9uU2VsZWN0ZWQobmV3VmFsdWUsIHNlbGVjdFZhbHVlKTtcbiAgICAgIHZhciBpc0Rpc2FibGVkID0gX3RoaXMuaXNPcHRpb25EaXNhYmxlZChuZXdWYWx1ZSwgc2VsZWN0VmFsdWUpO1xuICAgICAgaWYgKGRlc2VsZWN0ZWQpIHtcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IF90aGlzLmdldE9wdGlvblZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgX3RoaXMuc2V0VmFsdWUobXVsdGlWYWx1ZUFzVmFsdWUoc2VsZWN0VmFsdWUuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmdldE9wdGlvblZhbHVlKGkpICE9PSBjYW5kaWRhdGU7XG4gICAgICAgIH0pKSwgJ2Rlc2VsZWN0LW9wdGlvbicsIG5ld1ZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoIWlzRGlzYWJsZWQpIHtcbiAgICAgICAgLy8gU2VsZWN0IG9wdGlvbiBpZiBvcHRpb24gaXMgbm90IGRpc2FibGVkXG4gICAgICAgIGlmIChpc011bHRpKSB7XG4gICAgICAgICAgX3RoaXMuc2V0VmFsdWUobXVsdGlWYWx1ZUFzVmFsdWUoW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShzZWxlY3RWYWx1ZSksIFtuZXdWYWx1ZV0pKSwgJ3NlbGVjdC1vcHRpb24nLCBuZXdWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMuc2V0VmFsdWUoc2luZ2xlVmFsdWVBc1ZhbHVlKG5ld1ZhbHVlKSwgJ3NlbGVjdC1vcHRpb24nKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuYXJpYU9uQ2hhbmdlKHNpbmdsZVZhbHVlQXNWYWx1ZShuZXdWYWx1ZSksIHtcbiAgICAgICAgICBhY3Rpb246ICdzZWxlY3Qtb3B0aW9uJyxcbiAgICAgICAgICBvcHRpb246IG5ld1ZhbHVlLFxuICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChibHVySW5wdXRPblNlbGVjdCkge1xuICAgICAgICBfdGhpcy5ibHVySW5wdXQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIF90aGlzLnJlbW92ZVZhbHVlID0gZnVuY3Rpb24gKHJlbW92ZWRWYWx1ZSkge1xuICAgICAgdmFyIGlzTXVsdGkgPSBfdGhpcy5wcm9wcy5pc011bHRpO1xuICAgICAgdmFyIHNlbGVjdFZhbHVlID0gX3RoaXMuc3RhdGUuc2VsZWN0VmFsdWU7XG4gICAgICB2YXIgY2FuZGlkYXRlID0gX3RoaXMuZ2V0T3B0aW9uVmFsdWUocmVtb3ZlZFZhbHVlKTtcbiAgICAgIHZhciBuZXdWYWx1ZUFycmF5ID0gc2VsZWN0VmFsdWUuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5nZXRPcHRpb25WYWx1ZShpKSAhPT0gY2FuZGlkYXRlO1xuICAgICAgfSk7XG4gICAgICB2YXIgbmV3VmFsdWUgPSB2YWx1ZVRlcm5hcnkoaXNNdWx0aSwgbmV3VmFsdWVBcnJheSwgbmV3VmFsdWVBcnJheVswXSB8fCBudWxsKTtcbiAgICAgIF90aGlzLm9uQ2hhbmdlKG5ld1ZhbHVlLCB7XG4gICAgICAgIGFjdGlvbjogJ3JlbW92ZS12YWx1ZScsXG4gICAgICAgIHJlbW92ZWRWYWx1ZTogcmVtb3ZlZFZhbHVlXG4gICAgICB9KTtcbiAgICAgIF90aGlzLmZvY3VzSW5wdXQoKTtcbiAgICB9O1xuICAgIF90aGlzLmNsZWFyVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSBfdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZTtcbiAgICAgIF90aGlzLm9uQ2hhbmdlKHZhbHVlVGVybmFyeShfdGhpcy5wcm9wcy5pc011bHRpLCBbXSwgbnVsbCksIHtcbiAgICAgICAgYWN0aW9uOiAnY2xlYXInLFxuICAgICAgICByZW1vdmVkVmFsdWVzOiBzZWxlY3RWYWx1ZVxuICAgICAgfSk7XG4gICAgfTtcbiAgICBfdGhpcy5wb3BWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpc011bHRpID0gX3RoaXMucHJvcHMuaXNNdWx0aTtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IF90aGlzLnN0YXRlLnNlbGVjdFZhbHVlO1xuICAgICAgdmFyIGxhc3RTZWxlY3RlZFZhbHVlID0gc2VsZWN0VmFsdWVbc2VsZWN0VmFsdWUubGVuZ3RoIC0gMV07XG4gICAgICB2YXIgbmV3VmFsdWVBcnJheSA9IHNlbGVjdFZhbHVlLnNsaWNlKDAsIHNlbGVjdFZhbHVlLmxlbmd0aCAtIDEpO1xuICAgICAgdmFyIG5ld1ZhbHVlID0gdmFsdWVUZXJuYXJ5KGlzTXVsdGksIG5ld1ZhbHVlQXJyYXksIG5ld1ZhbHVlQXJyYXlbMF0gfHwgbnVsbCk7XG4gICAgICBpZiAobGFzdFNlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgX3RoaXMub25DaGFuZ2UobmV3VmFsdWUsIHtcbiAgICAgICAgICBhY3Rpb246ICdwb3AtdmFsdWUnLFxuICAgICAgICAgIHJlbW92ZWRWYWx1ZTogbGFzdFNlbGVjdGVkVmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBfdGhpcy5nZXRGb2N1c2VkT3B0aW9uSWQgPSBmdW5jdGlvbiAoZm9jdXNlZE9wdGlvbikge1xuICAgICAgcmV0dXJuIGdldEZvY3VzZWRPcHRpb25JZChfdGhpcy5zdGF0ZS5mb2N1c2FibGVPcHRpb25zV2l0aElkcywgZm9jdXNlZE9wdGlvbik7XG4gICAgfTtcbiAgICBfdGhpcy5nZXRGb2N1c2FibGVPcHRpb25zV2l0aElkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBidWlsZEZvY3VzYWJsZU9wdGlvbnNXaXRoSWRzKGJ1aWxkQ2F0ZWdvcml6ZWRPcHRpb25zKF90aGlzLnByb3BzLCBfdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZSksIF90aGlzLmdldEVsZW1lbnRJZCgnb3B0aW9uJykpO1xuICAgIH07XG4gICAgX3RoaXMuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuc3RhdGUuc2VsZWN0VmFsdWU7XG4gICAgfTtcbiAgICBfdGhpcy5jeCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNsYXNzTmFtZXMuYXBwbHkodm9pZCAwLCBbX3RoaXMucHJvcHMuY2xhc3NOYW1lUHJlZml4XS5jb25jYXQoYXJncykpO1xuICAgIH07XG4gICAgX3RoaXMuZ2V0T3B0aW9uTGFiZWwgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgcmV0dXJuIGdldE9wdGlvbkxhYmVsKF90aGlzLnByb3BzLCBkYXRhKTtcbiAgICB9O1xuICAgIF90aGlzLmdldE9wdGlvblZhbHVlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHJldHVybiBnZXRPcHRpb25WYWx1ZShfdGhpcy5wcm9wcywgZGF0YSk7XG4gICAgfTtcbiAgICBfdGhpcy5nZXRTdHlsZXMgPSBmdW5jdGlvbiAoa2V5LCBwcm9wcykge1xuICAgICAgdmFyIHVuc3R5bGVkID0gX3RoaXMucHJvcHMudW5zdHlsZWQ7XG4gICAgICB2YXIgYmFzZSA9IGRlZmF1bHRTdHlsZXNba2V5XShwcm9wcywgdW5zdHlsZWQpO1xuICAgICAgYmFzZS5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XG4gICAgICB2YXIgY3VzdG9tID0gX3RoaXMucHJvcHMuc3R5bGVzW2tleV07XG4gICAgICByZXR1cm4gY3VzdG9tID8gY3VzdG9tKGJhc2UsIHByb3BzKSA6IGJhc2U7XG4gICAgfTtcbiAgICBfdGhpcy5nZXRDbGFzc05hbWVzID0gZnVuY3Rpb24gKGtleSwgcHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyRjbGFzc05hbWUsIF90aGlzJHByb3BzJGNsYXNzTmFtZTI7XG4gICAgICByZXR1cm4gKF90aGlzJHByb3BzJGNsYXNzTmFtZSA9IChfdGhpcyRwcm9wcyRjbGFzc05hbWUyID0gX3RoaXMucHJvcHMuY2xhc3NOYW1lcylba2V5XSkgPT09IG51bGwgfHwgX3RoaXMkcHJvcHMkY2xhc3NOYW1lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRwcm9wcyRjbGFzc05hbWUuY2FsbChfdGhpcyRwcm9wcyRjbGFzc05hbWUyLCBwcm9wcyk7XG4gICAgfTtcbiAgICBfdGhpcy5nZXRFbGVtZW50SWQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KF90aGlzLnN0YXRlLmluc3RhbmNlUHJlZml4LCBcIi1cIikuY29uY2F0KGVsZW1lbnQpO1xuICAgIH07XG4gICAgX3RoaXMuZ2V0Q29tcG9uZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0Q29tcG9uZW50cyhfdGhpcy5wcm9wcyk7XG4gICAgfTtcbiAgICBfdGhpcy5idWlsZENhdGVnb3JpemVkT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBidWlsZENhdGVnb3JpemVkT3B0aW9ucyhfdGhpcy5wcm9wcywgX3RoaXMuc3RhdGUuc2VsZWN0VmFsdWUpO1xuICAgIH07XG4gICAgX3RoaXMuZ2V0Q2F0ZWdvcml6ZWRPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm1lbnVJc09wZW4gPyBfdGhpcy5idWlsZENhdGVnb3JpemVkT3B0aW9ucygpIDogW107XG4gICAgfTtcbiAgICBfdGhpcy5idWlsZEZvY3VzYWJsZU9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYnVpbGRGb2N1c2FibGVPcHRpb25zRnJvbUNhdGVnb3JpemVkT3B0aW9ucyhfdGhpcy5idWlsZENhdGVnb3JpemVkT3B0aW9ucygpKTtcbiAgICB9O1xuICAgIF90aGlzLmdldEZvY3VzYWJsZU9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMubWVudUlzT3BlbiA/IF90aGlzLmJ1aWxkRm9jdXNhYmxlT3B0aW9ucygpIDogW107XG4gICAgfTtcbiAgICBfdGhpcy5hcmlhT25DaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWUsIGFjdGlvbk1ldGEpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYXJpYVNlbGVjdGlvbjogX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0sIGFjdGlvbk1ldGEpXG4gICAgICB9KTtcbiAgICB9O1xuICAgIF90aGlzLm9uTWVudU1vdXNlRG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBfdGhpcy5mb2N1c0lucHV0KCk7XG4gICAgfTtcbiAgICBfdGhpcy5vbk1lbnVNb3VzZU1vdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLmJsb2NrT3B0aW9uSG92ZXIgPSBmYWxzZTtcbiAgICB9O1xuICAgIF90aGlzLm9uQ29udHJvbE1vdXNlRG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgLy8gRXZlbnQgY2FwdHVyZWQgYnkgZHJvcGRvd24gaW5kaWNhdG9yXG4gICAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgb3Blbk1lbnVPbkNsaWNrID0gX3RoaXMucHJvcHMub3Blbk1lbnVPbkNsaWNrO1xuICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5pc0ZvY3VzZWQpIHtcbiAgICAgICAgaWYgKG9wZW5NZW51T25DbGljaykge1xuICAgICAgICAgIF90aGlzLm9wZW5BZnRlckZvY3VzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5mb2N1c0lucHV0KCk7XG4gICAgICB9IGVsc2UgaWYgKCFfdGhpcy5wcm9wcy5tZW51SXNPcGVuKSB7XG4gICAgICAgIGlmIChvcGVuTWVudU9uQ2xpY2spIHtcbiAgICAgICAgICBfdGhpcy5vcGVuTWVudSgnZmlyc3QnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lICE9PSAnSU5QVVQnICYmIGV2ZW50LnRhcmdldC50YWdOYW1lICE9PSAnVEVYVEFSRUEnKSB7XG4gICAgICAgICAgX3RoaXMub25NZW51Q2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lICE9PSAnSU5QVVQnICYmIGV2ZW50LnRhcmdldC50YWdOYW1lICE9PSAnVEVYVEFSRUEnKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBfdGhpcy5vbkRyb3Bkb3duSW5kaWNhdG9yTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBpZ25vcmUgbW91c2UgZXZlbnRzIHRoYXQgd2VyZW4ndCB0cmlnZ2VyZWQgYnkgdGhlIHByaW1hcnkgYnV0dG9uXG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgZXZlbnQuYnV0dG9uICE9PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5pc0Rpc2FibGVkKSByZXR1cm47XG4gICAgICB2YXIgX3RoaXMkcHJvcHM0ID0gX3RoaXMucHJvcHMsXG4gICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczQuaXNNdWx0aSxcbiAgICAgICAgbWVudUlzT3BlbiA9IF90aGlzJHByb3BzNC5tZW51SXNPcGVuO1xuICAgICAgX3RoaXMuZm9jdXNJbnB1dCgpO1xuICAgICAgaWYgKG1lbnVJc09wZW4pIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZTogIWlzTXVsdGlcbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzLm9uTWVudUNsb3NlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5vcGVuTWVudSgnZmlyc3QnKTtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcbiAgICBfdGhpcy5vbkNsZWFySW5kaWNhdG9yTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBpZ25vcmUgbW91c2UgZXZlbnRzIHRoYXQgd2VyZW4ndCB0cmlnZ2VyZWQgYnkgdGhlIHByaW1hcnkgYnV0dG9uXG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgZXZlbnQuYnV0dG9uICE9PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIF90aGlzLmNsZWFyVmFsdWUoKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBfdGhpcy5vcGVuQWZ0ZXJGb2N1cyA9IGZhbHNlO1xuICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICd0b3VjaGVuZCcpIHtcbiAgICAgICAgX3RoaXMuZm9jdXNJbnB1dCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmZvY3VzSW5wdXQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBfdGhpcy5vblNjcm9sbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKHR5cGVvZiBfdGhpcy5wcm9wcy5jbG9zZU1lbnVPblNjcm9sbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBpc0RvY3VtZW50RWxlbWVudChldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgX3RoaXMucHJvcHMub25NZW51Q2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgX3RoaXMucHJvcHMuY2xvc2VNZW51T25TY3JvbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLmNsb3NlTWVudU9uU2Nyb2xsKGV2ZW50KSkge1xuICAgICAgICAgIF90aGlzLnByb3BzLm9uTWVudUNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIF90aGlzLm9uQ29tcG9zaXRpb25TdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmlzQ29tcG9zaW5nID0gdHJ1ZTtcbiAgICB9O1xuICAgIF90aGlzLm9uQ29tcG9zaXRpb25FbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5pc0NvbXBvc2luZyA9IGZhbHNlO1xuICAgIH07XG4gICAgX3RoaXMub25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICB2YXIgdG91Y2hlcyA9IF9yZWYyLnRvdWNoZXM7XG4gICAgICB2YXIgdG91Y2ggPSB0b3VjaGVzICYmIHRvdWNoZXMuaXRlbSgwKTtcbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgX3RoaXMuaW5pdGlhbFRvdWNoWCA9IHRvdWNoLmNsaWVudFg7XG4gICAgICBfdGhpcy5pbml0aWFsVG91Y2hZID0gdG91Y2guY2xpZW50WTtcbiAgICAgIF90aGlzLnVzZXJJc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgfTtcbiAgICBfdGhpcy5vblRvdWNoTW92ZSA9IGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgdmFyIHRvdWNoZXMgPSBfcmVmMy50b3VjaGVzO1xuICAgICAgdmFyIHRvdWNoID0gdG91Y2hlcyAmJiB0b3VjaGVzLml0ZW0oMCk7XG4gICAgICBpZiAoIXRvdWNoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBkZWx0YVggPSBNYXRoLmFicyh0b3VjaC5jbGllbnRYIC0gX3RoaXMuaW5pdGlhbFRvdWNoWCk7XG4gICAgICB2YXIgZGVsdGFZID0gTWF0aC5hYnModG91Y2guY2xpZW50WSAtIF90aGlzLmluaXRpYWxUb3VjaFkpO1xuICAgICAgdmFyIG1vdmVUaHJlc2hvbGQgPSA1O1xuICAgICAgX3RoaXMudXNlcklzRHJhZ2dpbmcgPSBkZWx0YVggPiBtb3ZlVGhyZXNob2xkIHx8IGRlbHRhWSA+IG1vdmVUaHJlc2hvbGQ7XG4gICAgfTtcbiAgICBfdGhpcy5vblRvdWNoRW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMudXNlcklzRHJhZ2dpbmcpIHJldHVybjtcblxuICAgICAgLy8gY2xvc2UgdGhlIG1lbnUgaWYgdGhlIHVzZXIgdGFwcyBvdXRzaWRlXG4gICAgICAvLyB3ZSdyZSBjaGVja2luZyBvbiBldmVudC50YXJnZXQgaGVyZSBpbnN0ZWFkIG9mIGV2ZW50LmN1cnJlbnRUYXJnZXQsIGJlY2F1c2Ugd2Ugd2FudCB0byBhc3NlcnQgaW5mb3JtYXRpb25cbiAgICAgIC8vIG9uIGV2ZW50cyBvbiBjaGlsZCBlbGVtZW50cywgbm90IHRoZSBkb2N1bWVudCAod2hpY2ggd2UndmUgYXR0YWNoZWQgdGhpcyBoYW5kbGVyIHRvKS5cbiAgICAgIGlmIChfdGhpcy5jb250cm9sUmVmICYmICFfdGhpcy5jb250cm9sUmVmLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgX3RoaXMubWVudUxpc3RSZWYgJiYgIV90aGlzLm1lbnVMaXN0UmVmLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgX3RoaXMuYmx1cklucHV0KCk7XG4gICAgICB9XG5cbiAgICAgIC8vIHJlc2V0IG1vdmUgdmFyc1xuICAgICAgX3RoaXMuaW5pdGlhbFRvdWNoWCA9IDA7XG4gICAgICBfdGhpcy5pbml0aWFsVG91Y2hZID0gMDtcbiAgICB9O1xuICAgIF90aGlzLm9uQ29udHJvbFRvdWNoRW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMudXNlcklzRHJhZ2dpbmcpIHJldHVybjtcbiAgICAgIF90aGlzLm9uQ29udHJvbE1vdXNlRG93bihldmVudCk7XG4gICAgfTtcbiAgICBfdGhpcy5vbkNsZWFySW5kaWNhdG9yVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy51c2VySXNEcmFnZ2luZykgcmV0dXJuO1xuICAgICAgX3RoaXMub25DbGVhckluZGljYXRvck1vdXNlRG93bihldmVudCk7XG4gICAgfTtcbiAgICBfdGhpcy5vbkRyb3Bkb3duSW5kaWNhdG9yVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy51c2VySXNEcmFnZ2luZykgcmV0dXJuO1xuICAgICAgX3RoaXMub25Ecm9wZG93bkluZGljYXRvck1vdXNlRG93bihldmVudCk7XG4gICAgfTtcbiAgICBfdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIHByZXZJbnB1dFZhbHVlID0gX3RoaXMucHJvcHMuaW5wdXRWYWx1ZTtcbiAgICAgIHZhciBpbnB1dFZhbHVlID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICBfdGhpcy5vbklucHV0Q2hhbmdlKGlucHV0VmFsdWUsIHtcbiAgICAgICAgYWN0aW9uOiAnaW5wdXQtY2hhbmdlJyxcbiAgICAgICAgcHJldklucHV0VmFsdWU6IHByZXZJbnB1dFZhbHVlXG4gICAgICB9KTtcbiAgICAgIGlmICghX3RoaXMucHJvcHMubWVudUlzT3Blbikge1xuICAgICAgICBfdGhpcy5vbk1lbnVPcGVuKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBfdGhpcy5vbklucHV0Rm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkZvY3VzKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRm9jdXMoZXZlbnQpO1xuICAgICAgfVxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGU6IGZhbHNlLFxuICAgICAgICBpc0ZvY3VzZWQ6IHRydWVcbiAgICAgIH0pO1xuICAgICAgaWYgKF90aGlzLm9wZW5BZnRlckZvY3VzIHx8IF90aGlzLnByb3BzLm9wZW5NZW51T25Gb2N1cykge1xuICAgICAgICBfdGhpcy5vcGVuTWVudSgnZmlyc3QnKTtcbiAgICAgIH1cbiAgICAgIF90aGlzLm9wZW5BZnRlckZvY3VzID0gZmFsc2U7XG4gICAgfTtcbiAgICBfdGhpcy5vbklucHV0Qmx1ciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIHByZXZJbnB1dFZhbHVlID0gX3RoaXMucHJvcHMuaW5wdXRWYWx1ZTtcbiAgICAgIGlmIChfdGhpcy5tZW51TGlzdFJlZiAmJiBfdGhpcy5tZW51TGlzdFJlZi5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgICBfdGhpcy5pbnB1dFJlZi5mb2N1cygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQmx1cihldmVudCk7XG4gICAgICB9XG4gICAgICBfdGhpcy5vbklucHV0Q2hhbmdlKCcnLCB7XG4gICAgICAgIGFjdGlvbjogJ2lucHV0LWJsdXInLFxuICAgICAgICBwcmV2SW5wdXRWYWx1ZTogcHJldklucHV0VmFsdWVcbiAgICAgIH0pO1xuICAgICAgX3RoaXMub25NZW51Q2xvc2UoKTtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZFZhbHVlOiBudWxsLFxuICAgICAgICBpc0ZvY3VzZWQ6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9O1xuICAgIF90aGlzLm9uT3B0aW9uSG92ZXIgPSBmdW5jdGlvbiAoZm9jdXNlZE9wdGlvbikge1xuICAgICAgaWYgKF90aGlzLmJsb2NrT3B0aW9uSG92ZXIgfHwgX3RoaXMuc3RhdGUuZm9jdXNlZE9wdGlvbiA9PT0gZm9jdXNlZE9wdGlvbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgb3B0aW9ucyA9IF90aGlzLmdldEZvY3VzYWJsZU9wdGlvbnMoKTtcbiAgICAgIHZhciBmb2N1c2VkT3B0aW9uSW5kZXggPSBvcHRpb25zLmluZGV4T2YoZm9jdXNlZE9wdGlvbik7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvY3VzZWRPcHRpb246IGZvY3VzZWRPcHRpb24sXG4gICAgICAgIGZvY3VzZWRPcHRpb25JZDogZm9jdXNlZE9wdGlvbkluZGV4ID4gLTEgPyBfdGhpcy5nZXRGb2N1c2VkT3B0aW9uSWQoZm9jdXNlZE9wdGlvbikgOiBudWxsXG4gICAgICB9KTtcbiAgICB9O1xuICAgIF90aGlzLnNob3VsZEhpZGVTZWxlY3RlZE9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gc2hvdWxkSGlkZVNlbGVjdGVkT3B0aW9ucyhfdGhpcy5wcm9wcyk7XG4gICAgfTtcbiAgICBfdGhpcy5vblZhbHVlSW5wdXRGb2N1cyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgX3RoaXMuZm9jdXMoKTtcbiAgICB9O1xuICAgIF90aGlzLm9uS2V5RG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNSA9IF90aGlzLnByb3BzLFxuICAgICAgICBpc011bHRpID0gX3RoaXMkcHJvcHM1LmlzTXVsdGksXG4gICAgICAgIGJhY2tzcGFjZVJlbW92ZXNWYWx1ZSA9IF90aGlzJHByb3BzNS5iYWNrc3BhY2VSZW1vdmVzVmFsdWUsXG4gICAgICAgIGVzY2FwZUNsZWFyc1ZhbHVlID0gX3RoaXMkcHJvcHM1LmVzY2FwZUNsZWFyc1ZhbHVlLFxuICAgICAgICBpbnB1dFZhbHVlID0gX3RoaXMkcHJvcHM1LmlucHV0VmFsdWUsXG4gICAgICAgIGlzQ2xlYXJhYmxlID0gX3RoaXMkcHJvcHM1LmlzQ2xlYXJhYmxlLFxuICAgICAgICBpc0Rpc2FibGVkID0gX3RoaXMkcHJvcHM1LmlzRGlzYWJsZWQsXG4gICAgICAgIG1lbnVJc09wZW4gPSBfdGhpcyRwcm9wczUubWVudUlzT3BlbixcbiAgICAgICAgb25LZXlEb3duID0gX3RoaXMkcHJvcHM1Lm9uS2V5RG93bixcbiAgICAgICAgdGFiU2VsZWN0c1ZhbHVlID0gX3RoaXMkcHJvcHM1LnRhYlNlbGVjdHNWYWx1ZSxcbiAgICAgICAgb3Blbk1lbnVPbkZvY3VzID0gX3RoaXMkcHJvcHM1Lm9wZW5NZW51T25Gb2N1cztcbiAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IF90aGlzLnN0YXRlLFxuICAgICAgICBmb2N1c2VkT3B0aW9uID0gX3RoaXMkc3RhdGUuZm9jdXNlZE9wdGlvbixcbiAgICAgICAgZm9jdXNlZFZhbHVlID0gX3RoaXMkc3RhdGUuZm9jdXNlZFZhbHVlLFxuICAgICAgICBzZWxlY3RWYWx1ZSA9IF90aGlzJHN0YXRlLnNlbGVjdFZhbHVlO1xuICAgICAgaWYgKGlzRGlzYWJsZWQpIHJldHVybjtcbiAgICAgIGlmICh0eXBlb2Ygb25LZXlEb3duID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9uS2V5RG93bihldmVudCk7XG4gICAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEJsb2NrIG9wdGlvbiBob3ZlciBldmVudHMgd2hlbiB0aGUgdXNlciBoYXMganVzdCBwcmVzc2VkIGEga2V5XG4gICAgICBfdGhpcy5ibG9ja09wdGlvbkhvdmVyID0gdHJ1ZTtcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgaWYgKCFpc011bHRpIHx8IGlucHV0VmFsdWUpIHJldHVybjtcbiAgICAgICAgICBfdGhpcy5mb2N1c1ZhbHVlKCdwcmV2aW91cycpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICBpZiAoIWlzTXVsdGkgfHwgaW5wdXRWYWx1ZSkgcmV0dXJuO1xuICAgICAgICAgIF90aGlzLmZvY3VzVmFsdWUoJ25leHQnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRGVsZXRlJzpcbiAgICAgICAgY2FzZSAnQmFja3NwYWNlJzpcbiAgICAgICAgICBpZiAoaW5wdXRWYWx1ZSkgcmV0dXJuO1xuICAgICAgICAgIGlmIChmb2N1c2VkVmFsdWUpIHtcbiAgICAgICAgICAgIF90aGlzLnJlbW92ZVZhbHVlKGZvY3VzZWRWYWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghYmFja3NwYWNlUmVtb3Zlc1ZhbHVlKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoaXNNdWx0aSkge1xuICAgICAgICAgICAgICBfdGhpcy5wb3BWYWx1ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0NsZWFyYWJsZSkge1xuICAgICAgICAgICAgICBfdGhpcy5jbGVhclZhbHVlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdUYWInOlxuICAgICAgICAgIGlmIChfdGhpcy5pc0NvbXBvc2luZykgcmV0dXJuO1xuICAgICAgICAgIGlmIChldmVudC5zaGlmdEtleSB8fCAhbWVudUlzT3BlbiB8fCAhdGFiU2VsZWN0c1ZhbHVlIHx8ICFmb2N1c2VkT3B0aW9uIHx8XG4gICAgICAgICAgLy8gZG9uJ3QgY2FwdHVyZSB0aGUgZXZlbnQgaWYgdGhlIG1lbnUgb3BlbnMgb24gZm9jdXMgYW5kIHRoZSBmb2N1c2VkXG4gICAgICAgICAgLy8gb3B0aW9uIGlzIGFscmVhZHkgc2VsZWN0ZWQ7IGl0IGJyZWFrcyB0aGUgZmxvdyBvZiBuYXZpZ2F0aW9uXG4gICAgICAgICAgb3Blbk1lbnVPbkZvY3VzICYmIF90aGlzLmlzT3B0aW9uU2VsZWN0ZWQoZm9jdXNlZE9wdGlvbiwgc2VsZWN0VmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIF90aGlzLnNlbGVjdE9wdGlvbihmb2N1c2VkT3B0aW9uKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyMjkpIHtcbiAgICAgICAgICAgIC8vIGlnbm9yZSB0aGUga2V5ZG93biBldmVudCBmcm9tIGFuIElucHV0IE1ldGhvZCBFZGl0b3IoSU1FKVxuICAgICAgICAgICAgLy8gcmVmLiBodHRwczovL3d3dy53My5vcmcvVFIvdWlldmVudHMvI2RldGVybWluZS1rZXlkb3duLWtleXVwLWtleUNvZGVcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobWVudUlzT3Blbikge1xuICAgICAgICAgICAgaWYgKCFmb2N1c2VkT3B0aW9uKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoX3RoaXMuaXNDb21wb3NpbmcpIHJldHVybjtcbiAgICAgICAgICAgIF90aGlzLnNlbGVjdE9wdGlvbihmb2N1c2VkT3B0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICAgICAgaWYgKG1lbnVJc09wZW4pIHtcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBfdGhpcy5vbklucHV0Q2hhbmdlKCcnLCB7XG4gICAgICAgICAgICAgIGFjdGlvbjogJ21lbnUtY2xvc2UnLFxuICAgICAgICAgICAgICBwcmV2SW5wdXRWYWx1ZTogaW5wdXRWYWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBfdGhpcy5vbk1lbnVDbG9zZSgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDbGVhcmFibGUgJiYgZXNjYXBlQ2xlYXJzVmFsdWUpIHtcbiAgICAgICAgICAgIF90aGlzLmNsZWFyVmFsdWUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJyAnOlxuICAgICAgICAgIC8vIHNwYWNlXG4gICAgICAgICAgaWYgKGlucHV0VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFtZW51SXNPcGVuKSB7XG4gICAgICAgICAgICBfdGhpcy5vcGVuTWVudSgnZmlyc3QnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWZvY3VzZWRPcHRpb24pIHJldHVybjtcbiAgICAgICAgICBfdGhpcy5zZWxlY3RPcHRpb24oZm9jdXNlZE9wdGlvbik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgIGlmIChtZW51SXNPcGVuKSB7XG4gICAgICAgICAgICBfdGhpcy5mb2N1c09wdGlvbigndXAnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMub3Blbk1lbnUoJ2xhc3QnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgaWYgKG1lbnVJc09wZW4pIHtcbiAgICAgICAgICAgIF90aGlzLmZvY3VzT3B0aW9uKCdkb3duJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLm9wZW5NZW51KCdmaXJzdCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUGFnZVVwJzpcbiAgICAgICAgICBpZiAoIW1lbnVJc09wZW4pIHJldHVybjtcbiAgICAgICAgICBfdGhpcy5mb2N1c09wdGlvbigncGFnZXVwJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1BhZ2VEb3duJzpcbiAgICAgICAgICBpZiAoIW1lbnVJc09wZW4pIHJldHVybjtcbiAgICAgICAgICBfdGhpcy5mb2N1c09wdGlvbigncGFnZWRvd24nKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgICAgaWYgKCFtZW51SXNPcGVuKSByZXR1cm47XG4gICAgICAgICAgX3RoaXMuZm9jdXNPcHRpb24oJ2ZpcnN0Jyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0VuZCc6XG4gICAgICAgICAgaWYgKCFtZW51SXNPcGVuKSByZXR1cm47XG4gICAgICAgICAgX3RoaXMuZm9jdXNPcHRpb24oJ2xhc3QnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG4gICAgX3RoaXMuc3RhdGUuaW5zdGFuY2VQcmVmaXggPSAncmVhY3Qtc2VsZWN0LScgKyAoX3RoaXMucHJvcHMuaW5zdGFuY2VJZCB8fCArK2luc3RhbmNlSWQpO1xuICAgIF90aGlzLnN0YXRlLnNlbGVjdFZhbHVlID0gY2xlYW5WYWx1ZShfcHJvcHMudmFsdWUpO1xuICAgIC8vIFNldCBmb2N1c2VkT3B0aW9uIGlmIG1lbnVJc09wZW4gaXMgc2V0IG9uIGluaXQgKGUuZy4gZGVmYXVsdE1lbnVJc09wZW4pXG4gICAgaWYgKF9wcm9wcy5tZW51SXNPcGVuICYmIF90aGlzLnN0YXRlLnNlbGVjdFZhbHVlLmxlbmd0aCkge1xuICAgICAgdmFyIGZvY3VzYWJsZU9wdGlvbnNXaXRoSWRzID0gX3RoaXMuZ2V0Rm9jdXNhYmxlT3B0aW9uc1dpdGhJZHMoKTtcbiAgICAgIHZhciBmb2N1c2FibGVPcHRpb25zID0gX3RoaXMuYnVpbGRGb2N1c2FibGVPcHRpb25zKCk7XG4gICAgICB2YXIgb3B0aW9uSW5kZXggPSBmb2N1c2FibGVPcHRpb25zLmluZGV4T2YoX3RoaXMuc3RhdGUuc2VsZWN0VmFsdWVbMF0pO1xuICAgICAgX3RoaXMuc3RhdGUuZm9jdXNhYmxlT3B0aW9uc1dpdGhJZHMgPSBmb2N1c2FibGVPcHRpb25zV2l0aElkcztcbiAgICAgIF90aGlzLnN0YXRlLmZvY3VzZWRPcHRpb24gPSBmb2N1c2FibGVPcHRpb25zW29wdGlvbkluZGV4XTtcbiAgICAgIF90aGlzLnN0YXRlLmZvY3VzZWRPcHRpb25JZCA9IGdldEZvY3VzZWRPcHRpb25JZChmb2N1c2FibGVPcHRpb25zV2l0aElkcywgZm9jdXNhYmxlT3B0aW9uc1tvcHRpb25JbmRleF0pO1xuICAgIH1cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKFNlbGVjdCwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nQ29tcG9zaXRpb24oKTtcbiAgICAgIHRoaXMuc3RhcnRMaXN0ZW5pbmdUb1RvdWNoKCk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5jbG9zZU1lbnVPblNjcm9sbCAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIC8vIExpc3RlbiB0byBhbGwgc2Nyb2xsIGV2ZW50cywgYW5kIGZpbHRlciB0aGVtIG91dCBpbnNpZGUgb2YgJ29uU2Nyb2xsJ1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLmF1dG9Gb2N1cykge1xuICAgICAgICB0aGlzLmZvY3VzSW5wdXQoKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2Nyb2xsIGZvY3VzZWRPcHRpb24gaW50byB2aWV3IGlmIG1lbnVJc09wZW4gaXMgc2V0IG9uIG1vdW50IChlLmcuIGRlZmF1bHRNZW51SXNPcGVuKVxuICAgICAgaWYgKHRoaXMucHJvcHMubWVudUlzT3BlbiAmJiB0aGlzLnN0YXRlLmZvY3VzZWRPcHRpb24gJiYgdGhpcy5tZW51TGlzdFJlZiAmJiB0aGlzLmZvY3VzZWRPcHRpb25SZWYpIHtcbiAgICAgICAgc2Nyb2xsSW50b1ZpZXcodGhpcy5tZW51TGlzdFJlZiwgdGhpcy5mb2N1c2VkT3B0aW9uUmVmKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczYgPSB0aGlzLnByb3BzLFxuICAgICAgICBpc0Rpc2FibGVkID0gX3RoaXMkcHJvcHM2LmlzRGlzYWJsZWQsXG4gICAgICAgIG1lbnVJc09wZW4gPSBfdGhpcyRwcm9wczYubWVudUlzT3BlbjtcbiAgICAgIHZhciBpc0ZvY3VzZWQgPSB0aGlzLnN0YXRlLmlzRm9jdXNlZDtcbiAgICAgIGlmIChcbiAgICAgIC8vIGVuc3VyZSBmb2N1cyBpcyByZXN0b3JlZCBjb3JyZWN0bHkgd2hlbiB0aGUgY29udHJvbCBiZWNvbWVzIGVuYWJsZWRcbiAgICAgIGlzRm9jdXNlZCAmJiAhaXNEaXNhYmxlZCAmJiBwcmV2UHJvcHMuaXNEaXNhYmxlZCB8fFxuICAgICAgLy8gZW5zdXJlIGZvY3VzIGlzIG9uIHRoZSBJbnB1dCB3aGVuIHRoZSBtZW51IG9wZW5zXG4gICAgICBpc0ZvY3VzZWQgJiYgbWVudUlzT3BlbiAmJiAhcHJldlByb3BzLm1lbnVJc09wZW4pIHtcbiAgICAgICAgdGhpcy5mb2N1c0lucHV0KCk7XG4gICAgICB9XG4gICAgICBpZiAoaXNGb2N1c2VkICYmIGlzRGlzYWJsZWQgJiYgIXByZXZQcm9wcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzZWxlY3Qgc3RhdGUgZ2V0cyBibHVycmVkIGluIGNhc2UgU2VsZWN0IGlzIHByb2dyYW1tYXRpY2FsbHkgZGlzYWJsZWQgd2hpbGUgZm9jdXNlZFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGlkLXVwZGF0ZS1zZXQtc3RhdGVcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaXNGb2N1c2VkOiBmYWxzZVxuICAgICAgICB9LCB0aGlzLm9uTWVudUNsb3NlKTtcbiAgICAgIH0gZWxzZSBpZiAoIWlzRm9jdXNlZCAmJiAhaXNEaXNhYmxlZCAmJiBwcmV2UHJvcHMuaXNEaXNhYmxlZCAmJiB0aGlzLmlucHV0UmVmID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgIC8vIGVuc3VyZSBzZWxlY3Qgc3RhdGUgZ2V0cyBmb2N1c2VkIGluIGNhc2UgU2VsZWN0IGlzIHByb2dyYW1hdGljYWxseSByZS1lbmFibGVkIHdoaWxlIGZvY3VzZWQgKEZpcmVmb3gpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kaWQtdXBkYXRlLXNldC1zdGF0ZVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpc0ZvY3VzZWQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHNjcm9sbCB0aGUgZm9jdXNlZCBvcHRpb24gaW50byB2aWV3IGlmIG5lY2Vzc2FyeVxuICAgICAgaWYgKHRoaXMubWVudUxpc3RSZWYgJiYgdGhpcy5mb2N1c2VkT3B0aW9uUmVmICYmIHRoaXMuc2Nyb2xsVG9Gb2N1c2VkT3B0aW9uT25VcGRhdGUpIHtcbiAgICAgICAgc2Nyb2xsSW50b1ZpZXcodGhpcy5tZW51TGlzdFJlZiwgdGhpcy5mb2N1c2VkT3B0aW9uUmVmKTtcbiAgICAgICAgdGhpcy5zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuc3RvcExpc3RlbmluZ0NvbXBvc2l0aW9uKCk7XG4gICAgICB0aGlzLnN0b3BMaXN0ZW5pbmdUb1RvdWNoKCk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBDb25zdW1lciBIYW5kbGVyc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICB9LCB7XG4gICAga2V5OiBcIm9uTWVudU9wZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25NZW51T3BlbigpIHtcbiAgICAgIHRoaXMucHJvcHMub25NZW51T3BlbigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbk1lbnVDbG9zZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1lbnVDbG9zZSgpIHtcbiAgICAgIHRoaXMub25JbnB1dENoYW5nZSgnJywge1xuICAgICAgICBhY3Rpb246ICdtZW51LWNsb3NlJyxcbiAgICAgICAgcHJldklucHV0VmFsdWU6IHRoaXMucHJvcHMuaW5wdXRWYWx1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLnByb3BzLm9uTWVudUNsb3NlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uSW5wdXRDaGFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25JbnB1dENoYW5nZShuZXdWYWx1ZSwgYWN0aW9uTWV0YSkge1xuICAgICAgdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKG5ld1ZhbHVlLCBhY3Rpb25NZXRhKTtcbiAgICB9XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBNZXRob2RzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIH0sIHtcbiAgICBrZXk6IFwiZm9jdXNJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1c0lucHV0KCkge1xuICAgICAgaWYgKCF0aGlzLmlucHV0UmVmKSByZXR1cm47XG4gICAgICB0aGlzLmlucHV0UmVmLmZvY3VzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJsdXJJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBibHVySW5wdXQoKSB7XG4gICAgICBpZiAoIXRoaXMuaW5wdXRSZWYpIHJldHVybjtcbiAgICAgIHRoaXMuaW5wdXRSZWYuYmx1cigpO1xuICAgIH1cblxuICAgIC8vIGFsaWFzZWQgZm9yIGNvbnN1bWVyc1xuICB9LCB7XG4gICAga2V5OiBcIm9wZW5NZW51XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9wZW5NZW51KGZvY3VzT3B0aW9uKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcbiAgICAgIHZhciBfdGhpcyRzdGF0ZTIgPSB0aGlzLnN0YXRlLFxuICAgICAgICBzZWxlY3RWYWx1ZSA9IF90aGlzJHN0YXRlMi5zZWxlY3RWYWx1ZSxcbiAgICAgICAgaXNGb2N1c2VkID0gX3RoaXMkc3RhdGUyLmlzRm9jdXNlZDtcbiAgICAgIHZhciBmb2N1c2FibGVPcHRpb25zID0gdGhpcy5idWlsZEZvY3VzYWJsZU9wdGlvbnMoKTtcbiAgICAgIHZhciBvcGVuQXRJbmRleCA9IGZvY3VzT3B0aW9uID09PSAnZmlyc3QnID8gMCA6IGZvY3VzYWJsZU9wdGlvbnMubGVuZ3RoIC0gMTtcbiAgICAgIGlmICghdGhpcy5wcm9wcy5pc011bHRpKSB7XG4gICAgICAgIHZhciBzZWxlY3RlZEluZGV4ID0gZm9jdXNhYmxlT3B0aW9ucy5pbmRleE9mKHNlbGVjdFZhbHVlWzBdKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggPiAtMSkge1xuICAgICAgICAgIG9wZW5BdEluZGV4ID0gc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBvbmx5IHNjcm9sbCBpZiB0aGUgbWVudSBpc24ndCBhbHJlYWR5IG9wZW5cbiAgICAgIHRoaXMuc2Nyb2xsVG9Gb2N1c2VkT3B0aW9uT25VcGRhdGUgPSAhKGlzRm9jdXNlZCAmJiB0aGlzLm1lbnVMaXN0UmVmKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGU6IGZhbHNlLFxuICAgICAgICBmb2N1c2VkVmFsdWU6IG51bGwsXG4gICAgICAgIGZvY3VzZWRPcHRpb246IGZvY3VzYWJsZU9wdGlvbnNbb3BlbkF0SW5kZXhdLFxuICAgICAgICBmb2N1c2VkT3B0aW9uSWQ6IHRoaXMuZ2V0Rm9jdXNlZE9wdGlvbklkKGZvY3VzYWJsZU9wdGlvbnNbb3BlbkF0SW5kZXhdKVxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLm9uTWVudU9wZW4oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb2N1c1ZhbHVlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzVmFsdWUoZGlyZWN0aW9uKSB7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUzID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgc2VsZWN0VmFsdWUgPSBfdGhpcyRzdGF0ZTMuc2VsZWN0VmFsdWUsXG4gICAgICAgIGZvY3VzZWRWYWx1ZSA9IF90aGlzJHN0YXRlMy5mb2N1c2VkVmFsdWU7XG5cbiAgICAgIC8vIE9ubHkgbXVsdGlzZWxlY3RzIHN1cHBvcnQgdmFsdWUgZm9jdXNpbmdcbiAgICAgIGlmICghdGhpcy5wcm9wcy5pc011bHRpKSByZXR1cm47XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZE9wdGlvbjogbnVsbFxuICAgICAgfSk7XG4gICAgICB2YXIgZm9jdXNlZEluZGV4ID0gc2VsZWN0VmFsdWUuaW5kZXhPZihmb2N1c2VkVmFsdWUpO1xuICAgICAgaWYgKCFmb2N1c2VkVmFsdWUpIHtcbiAgICAgICAgZm9jdXNlZEluZGV4ID0gLTE7XG4gICAgICB9XG4gICAgICB2YXIgbGFzdEluZGV4ID0gc2VsZWN0VmFsdWUubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBuZXh0Rm9jdXMgPSAtMTtcbiAgICAgIGlmICghc2VsZWN0VmFsdWUubGVuZ3RoKSByZXR1cm47XG4gICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICBjYXNlICdwcmV2aW91cyc6XG4gICAgICAgICAgaWYgKGZvY3VzZWRJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gZG9uJ3QgY3ljbGUgZnJvbSB0aGUgc3RhcnQgdG8gdGhlIGVuZFxuICAgICAgICAgICAgbmV4dEZvY3VzID0gMDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGZvY3VzZWRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIC8vIGlmIG5vdGhpbmcgaXMgZm9jdXNlZCwgZm9jdXMgdGhlIGxhc3QgdmFsdWUgZmlyc3RcbiAgICAgICAgICAgIG5leHRGb2N1cyA9IGxhc3RJbmRleDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV4dEZvY3VzID0gZm9jdXNlZEluZGV4IC0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ25leHQnOlxuICAgICAgICAgIGlmIChmb2N1c2VkSW5kZXggPiAtMSAmJiBmb2N1c2VkSW5kZXggPCBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgIG5leHRGb2N1cyA9IGZvY3VzZWRJbmRleCArIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlucHV0SXNIaWRkZW46IG5leHRGb2N1cyAhPT0gLTEsXG4gICAgICAgIGZvY3VzZWRWYWx1ZTogc2VsZWN0VmFsdWVbbmV4dEZvY3VzXVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvY3VzT3B0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzT3B0aW9uKCkge1xuICAgICAgdmFyIGRpcmVjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJ2ZpcnN0JztcbiAgICAgIHZhciBwYWdlU2l6ZSA9IHRoaXMucHJvcHMucGFnZVNpemU7XG4gICAgICB2YXIgZm9jdXNlZE9wdGlvbiA9IHRoaXMuc3RhdGUuZm9jdXNlZE9wdGlvbjtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5nZXRGb2N1c2FibGVPcHRpb25zKCk7XG4gICAgICBpZiAoIW9wdGlvbnMubGVuZ3RoKSByZXR1cm47XG4gICAgICB2YXIgbmV4dEZvY3VzID0gMDsgLy8gaGFuZGxlcyAnZmlyc3QnXG4gICAgICB2YXIgZm9jdXNlZEluZGV4ID0gb3B0aW9ucy5pbmRleE9mKGZvY3VzZWRPcHRpb24pO1xuICAgICAgaWYgKCFmb2N1c2VkT3B0aW9uKSB7XG4gICAgICAgIGZvY3VzZWRJbmRleCA9IC0xO1xuICAgICAgfVxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3VwJykge1xuICAgICAgICBuZXh0Rm9jdXMgPSBmb2N1c2VkSW5kZXggPiAwID8gZm9jdXNlZEluZGV4IC0gMSA6IG9wdGlvbnMubGVuZ3RoIC0gMTtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgICAgbmV4dEZvY3VzID0gKGZvY3VzZWRJbmRleCArIDEpICUgb3B0aW9ucy5sZW5ndGg7XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3BhZ2V1cCcpIHtcbiAgICAgICAgbmV4dEZvY3VzID0gZm9jdXNlZEluZGV4IC0gcGFnZVNpemU7XG4gICAgICAgIGlmIChuZXh0Rm9jdXMgPCAwKSBuZXh0Rm9jdXMgPSAwO1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdwYWdlZG93bicpIHtcbiAgICAgICAgbmV4dEZvY3VzID0gZm9jdXNlZEluZGV4ICsgcGFnZVNpemU7XG4gICAgICAgIGlmIChuZXh0Rm9jdXMgPiBvcHRpb25zLmxlbmd0aCAtIDEpIG5leHRGb2N1cyA9IG9wdGlvbnMubGVuZ3RoIC0gMTtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnbGFzdCcpIHtcbiAgICAgICAgbmV4dEZvY3VzID0gb3B0aW9ucy5sZW5ndGggLSAxO1xuICAgICAgfVxuICAgICAgdGhpcy5zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSA9IHRydWU7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZE9wdGlvbjogb3B0aW9uc1tuZXh0Rm9jdXNdLFxuICAgICAgICBmb2N1c2VkVmFsdWU6IG51bGwsXG4gICAgICAgIGZvY3VzZWRPcHRpb25JZDogdGhpcy5nZXRGb2N1c2VkT3B0aW9uSWQob3B0aW9uc1tuZXh0Rm9jdXNdKVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFRoZW1lXCIsXG4gICAgdmFsdWU6XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gR2V0dGVyc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgZnVuY3Rpb24gZ2V0VGhlbWUoKSB7XG4gICAgICAvLyBVc2UgdGhlIGRlZmF1bHQgdGhlbWUgaWYgdGhlcmUgYXJlIG5vIGN1c3RvbWlzYXRpb25zLlxuICAgICAgaWYgKCF0aGlzLnByb3BzLnRoZW1lKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VGhlbWU7XG4gICAgICB9XG4gICAgICAvLyBJZiB0aGUgdGhlbWUgcHJvcCBpcyBhIGZ1bmN0aW9uLCBhc3N1bWUgdGhlIGZ1bmN0aW9uXG4gICAgICAvLyBrbm93cyBob3cgdG8gbWVyZ2UgdGhlIHBhc3NlZC1pbiBkZWZhdWx0IHRoZW1lIHdpdGhcbiAgICAgIC8vIGl0cyBvd24gbW9kaWZpY2F0aW9ucy5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy50aGVtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy50aGVtZShkZWZhdWx0VGhlbWUpO1xuICAgICAgfVxuICAgICAgLy8gT3RoZXJ3aXNlLCBpZiBhIHBsYWluIHRoZW1lIG9iamVjdCB3YXMgcGFzc2VkIGluLFxuICAgICAgLy8gb3ZlcmxheSBpdCB3aXRoIHRoZSBkZWZhdWx0IHRoZW1lLlxuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZGVmYXVsdFRoZW1lKSwgdGhpcy5wcm9wcy50aGVtZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldENvbW1vblByb3BzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvbW1vblByb3BzKCkge1xuICAgICAgdmFyIGNsZWFyVmFsdWUgPSB0aGlzLmNsZWFyVmFsdWUsXG4gICAgICAgIGN4ID0gdGhpcy5jeCxcbiAgICAgICAgZ2V0U3R5bGVzID0gdGhpcy5nZXRTdHlsZXMsXG4gICAgICAgIGdldENsYXNzTmFtZXMgPSB0aGlzLmdldENsYXNzTmFtZXMsXG4gICAgICAgIGdldFZhbHVlID0gdGhpcy5nZXRWYWx1ZSxcbiAgICAgICAgc2VsZWN0T3B0aW9uID0gdGhpcy5zZWxlY3RPcHRpb24sXG4gICAgICAgIHNldFZhbHVlID0gdGhpcy5zZXRWYWx1ZSxcbiAgICAgICAgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGlzTXVsdGkgPSBwcm9wcy5pc011bHRpLFxuICAgICAgICBpc1J0bCA9IHByb3BzLmlzUnRsLFxuICAgICAgICBvcHRpb25zID0gcHJvcHMub3B0aW9ucztcbiAgICAgIHZhciBoYXNWYWx1ZSA9IHRoaXMuaGFzVmFsdWUoKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNsZWFyVmFsdWU6IGNsZWFyVmFsdWUsXG4gICAgICAgIGN4OiBjeCxcbiAgICAgICAgZ2V0U3R5bGVzOiBnZXRTdHlsZXMsXG4gICAgICAgIGdldENsYXNzTmFtZXM6IGdldENsYXNzTmFtZXMsXG4gICAgICAgIGdldFZhbHVlOiBnZXRWYWx1ZSxcbiAgICAgICAgaGFzVmFsdWU6IGhhc1ZhbHVlLFxuICAgICAgICBpc011bHRpOiBpc011bHRpLFxuICAgICAgICBpc1J0bDogaXNSdGwsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgIHNlbGVjdE9wdGlvbjogc2VsZWN0T3B0aW9uLFxuICAgICAgICBzZWxlY3RQcm9wczogcHJvcHMsXG4gICAgICAgIHNldFZhbHVlOiBzZXRWYWx1ZSxcbiAgICAgICAgdGhlbWU6IHRoaXMuZ2V0VGhlbWUoKVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFzVmFsdWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzVmFsdWUoKSB7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSB0aGlzLnN0YXRlLnNlbGVjdFZhbHVlO1xuICAgICAgcmV0dXJuIHNlbGVjdFZhbHVlLmxlbmd0aCA+IDA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhc09wdGlvbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzT3B0aW9ucygpIHtcbiAgICAgIHJldHVybiAhIXRoaXMuZ2V0Rm9jdXNhYmxlT3B0aW9ucygpLmxlbmd0aDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNDbGVhcmFibGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNDbGVhcmFibGUoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM3ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaXNDbGVhcmFibGUgPSBfdGhpcyRwcm9wczcuaXNDbGVhcmFibGUsXG4gICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczcuaXNNdWx0aTtcblxuICAgICAgLy8gc2luZ2xlIHNlbGVjdCwgYnkgZGVmYXVsdCwgSVMgTk9UIGNsZWFyYWJsZVxuICAgICAgLy8gbXVsdGkgc2VsZWN0LCBieSBkZWZhdWx0LCBJUyBjbGVhcmFibGVcbiAgICAgIGlmIChpc0NsZWFyYWJsZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gaXNNdWx0aTtcbiAgICAgIHJldHVybiBpc0NsZWFyYWJsZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNPcHRpb25EaXNhYmxlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc09wdGlvbkRpc2FibGVkKG9wdGlvbiwgc2VsZWN0VmFsdWUpIHtcbiAgICAgIHJldHVybiBfaXNPcHRpb25EaXNhYmxlZCh0aGlzLnByb3BzLCBvcHRpb24sIHNlbGVjdFZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNPcHRpb25TZWxlY3RlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc09wdGlvblNlbGVjdGVkKG9wdGlvbiwgc2VsZWN0VmFsdWUpIHtcbiAgICAgIHJldHVybiBfaXNPcHRpb25TZWxlY3RlZCh0aGlzLnByb3BzLCBvcHRpb24sIHNlbGVjdFZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZmlsdGVyT3B0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpbHRlck9wdGlvbihvcHRpb24sIGlucHV0VmFsdWUpIHtcbiAgICAgIHJldHVybiBfZmlsdGVyT3B0aW9uKHRoaXMucHJvcHMsIG9wdGlvbiwgaW5wdXRWYWx1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvcm1hdE9wdGlvbkxhYmVsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvcm1hdE9wdGlvbkxhYmVsKGRhdGEsIGNvbnRleHQpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5mb3JtYXRPcHRpb25MYWJlbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgX2lucHV0VmFsdWUgPSB0aGlzLnByb3BzLmlucHV0VmFsdWU7XG4gICAgICAgIHZhciBfc2VsZWN0VmFsdWUgPSB0aGlzLnN0YXRlLnNlbGVjdFZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5mb3JtYXRPcHRpb25MYWJlbChkYXRhLCB7XG4gICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICBpbnB1dFZhbHVlOiBfaW5wdXRWYWx1ZSxcbiAgICAgICAgICBzZWxlY3RWYWx1ZTogX3NlbGVjdFZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T3B0aW9uTGFiZWwoZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvcm1hdEdyb3VwTGFiZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9ybWF0R3JvdXBMYWJlbChkYXRhKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5mb3JtYXRHcm91cExhYmVsKGRhdGEpO1xuICAgIH1cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIE1vdXNlIEhhbmRsZXJzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhcnRMaXN0ZW5pbmdDb21wb3NpdGlvblwiLFxuICAgIHZhbHVlOlxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIENvbXBvc2l0aW9uIEhhbmRsZXJzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBmdW5jdGlvbiBzdGFydExpc3RlbmluZ0NvbXBvc2l0aW9uKCkge1xuICAgICAgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29tcG9zaXRpb25zdGFydCcsIHRoaXMub25Db21wb3NpdGlvblN0YXJ0LCBmYWxzZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9uZW5kJywgdGhpcy5vbkNvbXBvc2l0aW9uRW5kLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0b3BMaXN0ZW5pbmdDb21wb3NpdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wTGlzdGVuaW5nQ29tcG9zaXRpb24oKSB7XG4gICAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbnN0YXJ0JywgdGhpcy5vbkNvbXBvc2l0aW9uU3RhcnQpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbmVuZCcsIHRoaXMub25Db21wb3NpdGlvbkVuZCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0YXJ0TGlzdGVuaW5nVG9Ub3VjaFwiLFxuICAgIHZhbHVlOlxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIFRvdWNoIEhhbmRsZXJzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBmdW5jdGlvbiBzdGFydExpc3RlbmluZ1RvVG91Y2goKSB7XG4gICAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZSwgZmFsc2UpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaEVuZCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdG9wTGlzdGVuaW5nVG9Ub3VjaFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wTGlzdGVuaW5nVG9Ub3VjaCgpIHtcbiAgICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydCk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaEVuZCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlcklucHV0XCIsXG4gICAgdmFsdWU6XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gUmVuZGVyZXJzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZnVuY3Rpb24gcmVuZGVySW5wdXQoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM4ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaXNEaXNhYmxlZCA9IF90aGlzJHByb3BzOC5pc0Rpc2FibGVkLFxuICAgICAgICBpc1NlYXJjaGFibGUgPSBfdGhpcyRwcm9wczguaXNTZWFyY2hhYmxlLFxuICAgICAgICBpbnB1dElkID0gX3RoaXMkcHJvcHM4LmlucHV0SWQsXG4gICAgICAgIGlucHV0VmFsdWUgPSBfdGhpcyRwcm9wczguaW5wdXRWYWx1ZSxcbiAgICAgICAgdGFiSW5kZXggPSBfdGhpcyRwcm9wczgudGFiSW5kZXgsXG4gICAgICAgIGZvcm0gPSBfdGhpcyRwcm9wczguZm9ybSxcbiAgICAgICAgbWVudUlzT3BlbiA9IF90aGlzJHByb3BzOC5tZW51SXNPcGVuLFxuICAgICAgICByZXF1aXJlZCA9IF90aGlzJHByb3BzOC5yZXF1aXJlZDtcbiAgICAgIHZhciBfdGhpcyRnZXRDb21wb25lbnRzID0gdGhpcy5nZXRDb21wb25lbnRzKCksXG4gICAgICAgIElucHV0ID0gX3RoaXMkZ2V0Q29tcG9uZW50cy5JbnB1dDtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZTQgPSB0aGlzLnN0YXRlLFxuICAgICAgICBpbnB1dElzSGlkZGVuID0gX3RoaXMkc3RhdGU0LmlucHV0SXNIaWRkZW4sXG4gICAgICAgIGFyaWFTZWxlY3Rpb24gPSBfdGhpcyRzdGF0ZTQuYXJpYVNlbGVjdGlvbjtcbiAgICAgIHZhciBjb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHM7XG4gICAgICB2YXIgaWQgPSBpbnB1dElkIHx8IHRoaXMuZ2V0RWxlbWVudElkKCdpbnB1dCcpO1xuXG4gICAgICAvLyBhcmlhIGF0dHJpYnV0ZXMgbWFrZXMgdGhlIEpTWCBcIm5vaXN5XCIsIHNlcGFyYXRlZCBmb3IgY2xhcml0eVxuICAgICAgdmFyIGFyaWFBdHRyaWJ1dGVzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAnYXJpYS1hdXRvY29tcGxldGUnOiAnbGlzdCcsXG4gICAgICAgICdhcmlhLWV4cGFuZGVkJzogbWVudUlzT3BlbixcbiAgICAgICAgJ2FyaWEtaGFzcG9wdXAnOiB0cnVlLFxuICAgICAgICAnYXJpYS1lcnJvcm1lc3NhZ2UnOiB0aGlzLnByb3BzWydhcmlhLWVycm9ybWVzc2FnZSddLFxuICAgICAgICAnYXJpYS1pbnZhbGlkJzogdGhpcy5wcm9wc1snYXJpYS1pbnZhbGlkJ10sXG4gICAgICAgICdhcmlhLWxhYmVsJzogdGhpcy5wcm9wc1snYXJpYS1sYWJlbCddLFxuICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogdGhpcy5wcm9wc1snYXJpYS1sYWJlbGxlZGJ5J10sXG4gICAgICAgICdhcmlhLXJlcXVpcmVkJzogcmVxdWlyZWQsXG4gICAgICAgIHJvbGU6ICdjb21ib2JveCcsXG4gICAgICAgICdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnOiB0aGlzLmlzQXBwbGVEZXZpY2UgPyB1bmRlZmluZWQgOiB0aGlzLnN0YXRlLmZvY3VzZWRPcHRpb25JZCB8fCAnJ1xuICAgICAgfSwgbWVudUlzT3BlbiAmJiB7XG4gICAgICAgICdhcmlhLWNvbnRyb2xzJzogdGhpcy5nZXRFbGVtZW50SWQoJ2xpc3Rib3gnKVxuICAgICAgfSksICFpc1NlYXJjaGFibGUgJiYge1xuICAgICAgICAnYXJpYS1yZWFkb25seSc6IHRydWVcbiAgICAgIH0pLCB0aGlzLmhhc1ZhbHVlKCkgPyAoYXJpYVNlbGVjdGlvbiA9PT0gbnVsbCB8fCBhcmlhU2VsZWN0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhcmlhU2VsZWN0aW9uLmFjdGlvbikgPT09ICdpbml0aWFsLWlucHV0LWZvY3VzJyAmJiB7XG4gICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogdGhpcy5nZXRFbGVtZW50SWQoJ2xpdmUtcmVnaW9uJylcbiAgICAgIH0gOiB7XG4gICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogdGhpcy5nZXRFbGVtZW50SWQoJ3BsYWNlaG9sZGVyJylcbiAgICAgIH0pO1xuICAgICAgaWYgKCFpc1NlYXJjaGFibGUpIHtcbiAgICAgICAgLy8gdXNlIGEgZHVtbXkgaW5wdXQgdG8gbWFpbnRhaW4gZm9jdXMvYmx1ciBmdW5jdGlvbmFsaXR5XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEdW1teUlucHV0LCBfZXh0ZW5kcyh7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIGlubmVyUmVmOiB0aGlzLmdldElucHV0UmVmLFxuICAgICAgICAgIG9uQmx1cjogdGhpcy5vbklucHV0Qmx1cixcbiAgICAgICAgICBvbkNoYW5nZTogbm9vcCxcbiAgICAgICAgICBvbkZvY3VzOiB0aGlzLm9uSW5wdXRGb2N1cyxcbiAgICAgICAgICBkaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgICB0YWJJbmRleDogdGFiSW5kZXgsXG4gICAgICAgICAgaW5wdXRNb2RlOiBcIm5vbmVcIixcbiAgICAgICAgICBmb3JtOiBmb3JtLFxuICAgICAgICAgIHZhbHVlOiBcIlwiXG4gICAgICAgIH0sIGFyaWFBdHRyaWJ1dGVzKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBhdXRvQ2FwaXRhbGl6ZTogXCJub25lXCIsXG4gICAgICAgIGF1dG9Db21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgYXV0b0NvcnJlY3Q6IFwib2ZmXCIsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgaW5uZXJSZWY6IHRoaXMuZ2V0SW5wdXRSZWYsXG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgIGlzSGlkZGVuOiBpbnB1dElzSGlkZGVuLFxuICAgICAgICBvbkJsdXI6IHRoaXMub25JbnB1dEJsdXIsXG4gICAgICAgIG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLFxuICAgICAgICBvbkZvY3VzOiB0aGlzLm9uSW5wdXRGb2N1cyxcbiAgICAgICAgc3BlbGxDaGVjazogXCJmYWxzZVwiLFxuICAgICAgICB0YWJJbmRleDogdGFiSW5kZXgsXG4gICAgICAgIGZvcm06IGZvcm0sXG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICB2YWx1ZTogaW5wdXRWYWx1ZVxuICAgICAgfSwgYXJpYUF0dHJpYnV0ZXMpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyUGxhY2Vob2xkZXJPclZhbHVlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclBsYWNlaG9sZGVyT3JWYWx1ZSgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuICAgICAgdmFyIF90aGlzJGdldENvbXBvbmVudHMyID0gdGhpcy5nZXRDb21wb25lbnRzKCksXG4gICAgICAgIE11bHRpVmFsdWUgPSBfdGhpcyRnZXRDb21wb25lbnRzMi5NdWx0aVZhbHVlLFxuICAgICAgICBNdWx0aVZhbHVlQ29udGFpbmVyID0gX3RoaXMkZ2V0Q29tcG9uZW50czIuTXVsdGlWYWx1ZUNvbnRhaW5lcixcbiAgICAgICAgTXVsdGlWYWx1ZUxhYmVsID0gX3RoaXMkZ2V0Q29tcG9uZW50czIuTXVsdGlWYWx1ZUxhYmVsLFxuICAgICAgICBNdWx0aVZhbHVlUmVtb3ZlID0gX3RoaXMkZ2V0Q29tcG9uZW50czIuTXVsdGlWYWx1ZVJlbW92ZSxcbiAgICAgICAgU2luZ2xlVmFsdWUgPSBfdGhpcyRnZXRDb21wb25lbnRzMi5TaW5nbGVWYWx1ZSxcbiAgICAgICAgUGxhY2Vob2xkZXIgPSBfdGhpcyRnZXRDb21wb25lbnRzMi5QbGFjZWhvbGRlcjtcbiAgICAgIHZhciBjb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHM7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM5ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY29udHJvbFNob3VsZFJlbmRlclZhbHVlID0gX3RoaXMkcHJvcHM5LmNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZSxcbiAgICAgICAgaXNEaXNhYmxlZCA9IF90aGlzJHByb3BzOS5pc0Rpc2FibGVkLFxuICAgICAgICBpc011bHRpID0gX3RoaXMkcHJvcHM5LmlzTXVsdGksXG4gICAgICAgIGlucHV0VmFsdWUgPSBfdGhpcyRwcm9wczkuaW5wdXRWYWx1ZSxcbiAgICAgICAgcGxhY2Vob2xkZXIgPSBfdGhpcyRwcm9wczkucGxhY2Vob2xkZXI7XG4gICAgICB2YXIgX3RoaXMkc3RhdGU1ID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgc2VsZWN0VmFsdWUgPSBfdGhpcyRzdGF0ZTUuc2VsZWN0VmFsdWUsXG4gICAgICAgIGZvY3VzZWRWYWx1ZSA9IF90aGlzJHN0YXRlNS5mb2N1c2VkVmFsdWUsXG4gICAgICAgIGlzRm9jdXNlZCA9IF90aGlzJHN0YXRlNS5pc0ZvY3VzZWQ7XG4gICAgICBpZiAoIXRoaXMuaGFzVmFsdWUoKSB8fCAhY29udHJvbFNob3VsZFJlbmRlclZhbHVlKSB7XG4gICAgICAgIHJldHVybiBpbnB1dFZhbHVlID8gbnVsbCA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBsYWNlaG9sZGVyLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgICBrZXk6IFwicGxhY2Vob2xkZXJcIixcbiAgICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkLFxuICAgICAgICAgIGlubmVyUHJvcHM6IHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmdldEVsZW1lbnRJZCgncGxhY2Vob2xkZXInKVxuICAgICAgICAgIH1cbiAgICAgICAgfSksIHBsYWNlaG9sZGVyKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc011bHRpKSB7XG4gICAgICAgIHJldHVybiBzZWxlY3RWYWx1ZS5tYXAoZnVuY3Rpb24gKG9wdCwgaW5kZXgpIHtcbiAgICAgICAgICB2YXIgaXNPcHRpb25Gb2N1c2VkID0gb3B0ID09PSBmb2N1c2VkVmFsdWU7XG4gICAgICAgICAgdmFyIGtleSA9IFwiXCIuY29uY2F0KF90aGlzMy5nZXRPcHRpb25MYWJlbChvcHQpLCBcIi1cIikuY29uY2F0KF90aGlzMy5nZXRPcHRpb25WYWx1ZShvcHQpKTtcbiAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTXVsdGlWYWx1ZSwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgIENvbnRhaW5lcjogTXVsdGlWYWx1ZUNvbnRhaW5lcixcbiAgICAgICAgICAgICAgTGFiZWw6IE11bHRpVmFsdWVMYWJlbCxcbiAgICAgICAgICAgICAgUmVtb3ZlOiBNdWx0aVZhbHVlUmVtb3ZlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNGb2N1c2VkOiBpc09wdGlvbkZvY3VzZWQsXG4gICAgICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICByZW1vdmVQcm9wczoge1xuICAgICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczMucmVtb3ZlVmFsdWUob3B0KTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb25Ub3VjaEVuZDogZnVuY3Rpb24gb25Ub3VjaEVuZCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLnJlbW92ZVZhbHVlKG9wdCk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbiBvbk1vdXNlRG93bihlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YTogb3B0XG4gICAgICAgICAgfSksIF90aGlzMy5mb3JtYXRPcHRpb25MYWJlbChvcHQsICd2YWx1ZScpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoaW5wdXRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHZhciBzaW5nbGVWYWx1ZSA9IHNlbGVjdFZhbHVlWzBdO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNpbmdsZVZhbHVlLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgZGF0YTogc2luZ2xlVmFsdWUsXG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWRcbiAgICAgIH0pLCB0aGlzLmZvcm1hdE9wdGlvbkxhYmVsKHNpbmdsZVZhbHVlLCAndmFsdWUnKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckNsZWFySW5kaWNhdG9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckNsZWFySW5kaWNhdG9yKCkge1xuICAgICAgdmFyIF90aGlzJGdldENvbXBvbmVudHMzID0gdGhpcy5nZXRDb21wb25lbnRzKCksXG4gICAgICAgIENsZWFySW5kaWNhdG9yID0gX3RoaXMkZ2V0Q29tcG9uZW50czMuQ2xlYXJJbmRpY2F0b3I7XG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzO1xuICAgICAgdmFyIF90aGlzJHByb3BzMTAgPSB0aGlzLnByb3BzLFxuICAgICAgICBpc0Rpc2FibGVkID0gX3RoaXMkcHJvcHMxMC5pc0Rpc2FibGVkLFxuICAgICAgICBpc0xvYWRpbmcgPSBfdGhpcyRwcm9wczEwLmlzTG9hZGluZztcbiAgICAgIHZhciBpc0ZvY3VzZWQgPSB0aGlzLnN0YXRlLmlzRm9jdXNlZDtcbiAgICAgIGlmICghdGhpcy5pc0NsZWFyYWJsZSgpIHx8ICFDbGVhckluZGljYXRvciB8fCBpc0Rpc2FibGVkIHx8ICF0aGlzLmhhc1ZhbHVlKCkgfHwgaXNMb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgdmFyIGlubmVyUHJvcHMgPSB7XG4gICAgICAgIG9uTW91c2VEb3duOiB0aGlzLm9uQ2xlYXJJbmRpY2F0b3JNb3VzZURvd24sXG4gICAgICAgIG9uVG91Y2hFbmQ6IHRoaXMub25DbGVhckluZGljYXRvclRvdWNoRW5kLFxuICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgIH07XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ2xlYXJJbmRpY2F0b3IsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBpbm5lclByb3BzOiBpbm5lclByb3BzLFxuICAgICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZFxuICAgICAgfSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJMb2FkaW5nSW5kaWNhdG9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckxvYWRpbmdJbmRpY2F0b3IoKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q29tcG9uZW50czQgPSB0aGlzLmdldENvbXBvbmVudHMoKSxcbiAgICAgICAgTG9hZGluZ0luZGljYXRvciA9IF90aGlzJGdldENvbXBvbmVudHM0LkxvYWRpbmdJbmRpY2F0b3I7XG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzO1xuICAgICAgdmFyIF90aGlzJHByb3BzMTEgPSB0aGlzLnByb3BzLFxuICAgICAgICBpc0Rpc2FibGVkID0gX3RoaXMkcHJvcHMxMS5pc0Rpc2FibGVkLFxuICAgICAgICBpc0xvYWRpbmcgPSBfdGhpcyRwcm9wczExLmlzTG9hZGluZztcbiAgICAgIHZhciBpc0ZvY3VzZWQgPSB0aGlzLnN0YXRlLmlzRm9jdXNlZDtcbiAgICAgIGlmICghTG9hZGluZ0luZGljYXRvciB8fCAhaXNMb2FkaW5nKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciBpbm5lclByb3BzID0ge1xuICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgIH07XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZ0luZGljYXRvciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGlubmVyUHJvcHM6IGlubmVyUHJvcHMsXG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkXG4gICAgICB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckluZGljYXRvclNlcGFyYXRvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJJbmRpY2F0b3JTZXBhcmF0b3IoKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q29tcG9uZW50czUgPSB0aGlzLmdldENvbXBvbmVudHMoKSxcbiAgICAgICAgRHJvcGRvd25JbmRpY2F0b3IgPSBfdGhpcyRnZXRDb21wb25lbnRzNS5Ecm9wZG93bkluZGljYXRvcixcbiAgICAgICAgSW5kaWNhdG9yU2VwYXJhdG9yID0gX3RoaXMkZ2V0Q29tcG9uZW50czUuSW5kaWNhdG9yU2VwYXJhdG9yO1xuXG4gICAgICAvLyBzZXBhcmF0b3IgZG9lc24ndCBtYWtlIHNlbnNlIHdpdGhvdXQgdGhlIGRyb3Bkb3duIGluZGljYXRvclxuICAgICAgaWYgKCFEcm9wZG93bkluZGljYXRvciB8fCAhSW5kaWNhdG9yU2VwYXJhdG9yKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciBjb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHM7XG4gICAgICB2YXIgaXNEaXNhYmxlZCA9IHRoaXMucHJvcHMuaXNEaXNhYmxlZDtcbiAgICAgIHZhciBpc0ZvY3VzZWQgPSB0aGlzLnN0YXRlLmlzRm9jdXNlZDtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbmRpY2F0b3JTZXBhcmF0b3IsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZFxuICAgICAgfSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJEcm9wZG93bkluZGljYXRvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJEcm9wZG93bkluZGljYXRvcigpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDb21wb25lbnRzNiA9IHRoaXMuZ2V0Q29tcG9uZW50cygpLFxuICAgICAgICBEcm9wZG93bkluZGljYXRvciA9IF90aGlzJGdldENvbXBvbmVudHM2LkRyb3Bkb3duSW5kaWNhdG9yO1xuICAgICAgaWYgKCFEcm9wZG93bkluZGljYXRvcikgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzO1xuICAgICAgdmFyIGlzRGlzYWJsZWQgPSB0aGlzLnByb3BzLmlzRGlzYWJsZWQ7XG4gICAgICB2YXIgaXNGb2N1c2VkID0gdGhpcy5zdGF0ZS5pc0ZvY3VzZWQ7XG4gICAgICB2YXIgaW5uZXJQcm9wcyA9IHtcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMub25Ecm9wZG93bkluZGljYXRvck1vdXNlRG93bixcbiAgICAgICAgb25Ub3VjaEVuZDogdGhpcy5vbkRyb3Bkb3duSW5kaWNhdG9yVG91Y2hFbmQsXG4gICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgfTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wZG93bkluZGljYXRvciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGlubmVyUHJvcHM6IGlubmVyUHJvcHMsXG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkXG4gICAgICB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlck1lbnVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuICAgICAgdmFyIF90aGlzJGdldENvbXBvbmVudHM3ID0gdGhpcy5nZXRDb21wb25lbnRzKCksXG4gICAgICAgIEdyb3VwID0gX3RoaXMkZ2V0Q29tcG9uZW50czcuR3JvdXAsXG4gICAgICAgIEdyb3VwSGVhZGluZyA9IF90aGlzJGdldENvbXBvbmVudHM3Lkdyb3VwSGVhZGluZyxcbiAgICAgICAgTWVudSA9IF90aGlzJGdldENvbXBvbmVudHM3Lk1lbnUsXG4gICAgICAgIE1lbnVMaXN0ID0gX3RoaXMkZ2V0Q29tcG9uZW50czcuTWVudUxpc3QsXG4gICAgICAgIE1lbnVQb3J0YWwgPSBfdGhpcyRnZXRDb21wb25lbnRzNy5NZW51UG9ydGFsLFxuICAgICAgICBMb2FkaW5nTWVzc2FnZSA9IF90aGlzJGdldENvbXBvbmVudHM3LkxvYWRpbmdNZXNzYWdlLFxuICAgICAgICBOb09wdGlvbnNNZXNzYWdlID0gX3RoaXMkZ2V0Q29tcG9uZW50czcuTm9PcHRpb25zTWVzc2FnZSxcbiAgICAgICAgT3B0aW9uID0gX3RoaXMkZ2V0Q29tcG9uZW50czcuT3B0aW9uO1xuICAgICAgdmFyIGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcztcbiAgICAgIHZhciBmb2N1c2VkT3B0aW9uID0gdGhpcy5zdGF0ZS5mb2N1c2VkT3B0aW9uO1xuICAgICAgdmFyIF90aGlzJHByb3BzMTIgPSB0aGlzLnByb3BzLFxuICAgICAgICBjYXB0dXJlTWVudVNjcm9sbCA9IF90aGlzJHByb3BzMTIuY2FwdHVyZU1lbnVTY3JvbGwsXG4gICAgICAgIGlucHV0VmFsdWUgPSBfdGhpcyRwcm9wczEyLmlucHV0VmFsdWUsXG4gICAgICAgIGlzTG9hZGluZyA9IF90aGlzJHByb3BzMTIuaXNMb2FkaW5nLFxuICAgICAgICBsb2FkaW5nTWVzc2FnZSA9IF90aGlzJHByb3BzMTIubG9hZGluZ01lc3NhZ2UsXG4gICAgICAgIG1pbk1lbnVIZWlnaHQgPSBfdGhpcyRwcm9wczEyLm1pbk1lbnVIZWlnaHQsXG4gICAgICAgIG1heE1lbnVIZWlnaHQgPSBfdGhpcyRwcm9wczEyLm1heE1lbnVIZWlnaHQsXG4gICAgICAgIG1lbnVJc09wZW4gPSBfdGhpcyRwcm9wczEyLm1lbnVJc09wZW4sXG4gICAgICAgIG1lbnVQbGFjZW1lbnQgPSBfdGhpcyRwcm9wczEyLm1lbnVQbGFjZW1lbnQsXG4gICAgICAgIG1lbnVQb3NpdGlvbiA9IF90aGlzJHByb3BzMTIubWVudVBvc2l0aW9uLFxuICAgICAgICBtZW51UG9ydGFsVGFyZ2V0ID0gX3RoaXMkcHJvcHMxMi5tZW51UG9ydGFsVGFyZ2V0LFxuICAgICAgICBtZW51U2hvdWxkQmxvY2tTY3JvbGwgPSBfdGhpcyRwcm9wczEyLm1lbnVTaG91bGRCbG9ja1Njcm9sbCxcbiAgICAgICAgbWVudVNob3VsZFNjcm9sbEludG9WaWV3ID0gX3RoaXMkcHJvcHMxMi5tZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcsXG4gICAgICAgIG5vT3B0aW9uc01lc3NhZ2UgPSBfdGhpcyRwcm9wczEyLm5vT3B0aW9uc01lc3NhZ2UsXG4gICAgICAgIG9uTWVudVNjcm9sbFRvVG9wID0gX3RoaXMkcHJvcHMxMi5vbk1lbnVTY3JvbGxUb1RvcCxcbiAgICAgICAgb25NZW51U2Nyb2xsVG9Cb3R0b20gPSBfdGhpcyRwcm9wczEyLm9uTWVudVNjcm9sbFRvQm90dG9tO1xuICAgICAgaWYgKCFtZW51SXNPcGVuKSByZXR1cm4gbnVsbDtcblxuICAgICAgLy8gVE9ETzogSW50ZXJuYWwgT3B0aW9uIFR5cGUgaGVyZVxuICAgICAgdmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihwcm9wcywgaWQpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBwcm9wcy50eXBlLFxuICAgICAgICAgIGRhdGEgPSBwcm9wcy5kYXRhLFxuICAgICAgICAgIGlzRGlzYWJsZWQgPSBwcm9wcy5pc0Rpc2FibGVkLFxuICAgICAgICAgIGlzU2VsZWN0ZWQgPSBwcm9wcy5pc1NlbGVjdGVkLFxuICAgICAgICAgIGxhYmVsID0gcHJvcHMubGFiZWwsXG4gICAgICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZTtcbiAgICAgICAgdmFyIGlzRm9jdXNlZCA9IGZvY3VzZWRPcHRpb24gPT09IGRhdGE7XG4gICAgICAgIHZhciBvbkhvdmVyID0gaXNEaXNhYmxlZCA/IHVuZGVmaW5lZCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM0Lm9uT3B0aW9uSG92ZXIoZGF0YSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvblNlbGVjdCA9IGlzRGlzYWJsZWQgPyB1bmRlZmluZWQgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNC5zZWxlY3RPcHRpb24oZGF0YSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvcHRpb25JZCA9IFwiXCIuY29uY2F0KF90aGlzNC5nZXRFbGVtZW50SWQoJ29wdGlvbicpLCBcIi1cIikuY29uY2F0KGlkKTtcbiAgICAgICAgdmFyIGlubmVyUHJvcHMgPSB7XG4gICAgICAgICAgaWQ6IG9wdGlvbklkLFxuICAgICAgICAgIG9uQ2xpY2s6IG9uU2VsZWN0LFxuICAgICAgICAgIG9uTW91c2VNb3ZlOiBvbkhvdmVyLFxuICAgICAgICAgIG9uTW91c2VPdmVyOiBvbkhvdmVyLFxuICAgICAgICAgIHRhYkluZGV4OiAtMSxcbiAgICAgICAgICByb2xlOiAnb3B0aW9uJyxcbiAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6IF90aGlzNC5pc0FwcGxlRGV2aWNlID8gdW5kZWZpbmVkIDogaXNTZWxlY3RlZCAvLyBpcyBub3Qgc3VwcG9ydGVkIG9uIEFwcGxlIGRldmljZXNcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgICBpbm5lclByb3BzOiBpbm5lclByb3BzLFxuICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgICBpc1NlbGVjdGVkOiBpc1NlbGVjdGVkLFxuICAgICAgICAgIGtleTogb3B0aW9uSWQsXG4gICAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkLFxuICAgICAgICAgIGlubmVyUmVmOiBpc0ZvY3VzZWQgPyBfdGhpczQuZ2V0Rm9jdXNlZE9wdGlvblJlZiA6IHVuZGVmaW5lZFxuICAgICAgICB9KSwgX3RoaXM0LmZvcm1hdE9wdGlvbkxhYmVsKHByb3BzLmRhdGEsICdtZW51JykpO1xuICAgICAgfTtcbiAgICAgIHZhciBtZW51VUk7XG4gICAgICBpZiAodGhpcy5oYXNPcHRpb25zKCkpIHtcbiAgICAgICAgbWVudVVJID0gdGhpcy5nZXRDYXRlZ29yaXplZE9wdGlvbnMoKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICBpZiAoaXRlbS50eXBlID09PSAnZ3JvdXAnKSB7XG4gICAgICAgICAgICB2YXIgX2RhdGEgPSBpdGVtLmRhdGEsXG4gICAgICAgICAgICAgIG9wdGlvbnMgPSBpdGVtLm9wdGlvbnMsXG4gICAgICAgICAgICAgIGdyb3VwSW5kZXggPSBpdGVtLmluZGV4O1xuICAgICAgICAgICAgdmFyIGdyb3VwSWQgPSBcIlwiLmNvbmNhdChfdGhpczQuZ2V0RWxlbWVudElkKCdncm91cCcpLCBcIi1cIikuY29uY2F0KGdyb3VwSW5kZXgpO1xuICAgICAgICAgICAgdmFyIGhlYWRpbmdJZCA9IFwiXCIuY29uY2F0KGdyb3VwSWQsIFwiLWhlYWRpbmdcIik7XG4gICAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoR3JvdXAsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICAgICAgICBrZXk6IGdyb3VwSWQsXG4gICAgICAgICAgICAgIGRhdGE6IF9kYXRhLFxuICAgICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICAgICAgICBIZWFkaW5nOiBHcm91cEhlYWRpbmcsXG4gICAgICAgICAgICAgIGhlYWRpbmdQcm9wczoge1xuICAgICAgICAgICAgICAgIGlkOiBoZWFkaW5nSWQsXG4gICAgICAgICAgICAgICAgZGF0YTogaXRlbS5kYXRhXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxhYmVsOiBfdGhpczQuZm9ybWF0R3JvdXBMYWJlbChpdGVtLmRhdGEpXG4gICAgICAgICAgICB9KSwgaXRlbS5vcHRpb25zLm1hcChmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZW5kZXIob3B0aW9uLCBcIlwiLmNvbmNhdChncm91cEluZGV4LCBcIi1cIikuY29uY2F0KG9wdGlvbi5pbmRleCkpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSAnb3B0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIHJlbmRlcihpdGVtLCBcIlwiLmNvbmNhdChpdGVtLmluZGV4KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gbG9hZGluZ01lc3NhZ2Uoe1xuICAgICAgICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChtZXNzYWdlID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICAgICAgbWVudVVJID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZ01lc3NhZ2UsIGNvbW1vblByb3BzLCBtZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBfbWVzc2FnZSA9IG5vT3B0aW9uc01lc3NhZ2Uoe1xuICAgICAgICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChfbWVzc2FnZSA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgICAgIG1lbnVVSSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE5vT3B0aW9uc01lc3NhZ2UsIGNvbW1vblByb3BzLCBfbWVzc2FnZSk7XG4gICAgICB9XG4gICAgICB2YXIgbWVudVBsYWNlbWVudFByb3BzID0ge1xuICAgICAgICBtaW5NZW51SGVpZ2h0OiBtaW5NZW51SGVpZ2h0LFxuICAgICAgICBtYXhNZW51SGVpZ2h0OiBtYXhNZW51SGVpZ2h0LFxuICAgICAgICBtZW51UGxhY2VtZW50OiBtZW51UGxhY2VtZW50LFxuICAgICAgICBtZW51UG9zaXRpb246IG1lbnVQb3NpdGlvbixcbiAgICAgICAgbWVudVNob3VsZFNjcm9sbEludG9WaWV3OiBtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXdcbiAgICAgIH07XG4gICAgICB2YXIgbWVudUVsZW1lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNZW51UGxhY2VyLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIG1lbnVQbGFjZW1lbnRQcm9wcyksIGZ1bmN0aW9uIChfcmVmNCkge1xuICAgICAgICB2YXIgcmVmID0gX3JlZjQucmVmLFxuICAgICAgICAgIF9yZWY0JHBsYWNlclByb3BzID0gX3JlZjQucGxhY2VyUHJvcHMsXG4gICAgICAgICAgcGxhY2VtZW50ID0gX3JlZjQkcGxhY2VyUHJvcHMucGxhY2VtZW50LFxuICAgICAgICAgIG1heEhlaWdodCA9IF9yZWY0JHBsYWNlclByb3BzLm1heEhlaWdodDtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1lbnUsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywgbWVudVBsYWNlbWVudFByb3BzLCB7XG4gICAgICAgICAgaW5uZXJSZWY6IHJlZixcbiAgICAgICAgICBpbm5lclByb3BzOiB7XG4gICAgICAgICAgICBvbk1vdXNlRG93bjogX3RoaXM0Lm9uTWVudU1vdXNlRG93bixcbiAgICAgICAgICAgIG9uTW91c2VNb3ZlOiBfdGhpczQub25NZW51TW91c2VNb3ZlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc0xvYWRpbmc6IGlzTG9hZGluZyxcbiAgICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICAgICAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2Nyb2xsTWFuYWdlciwge1xuICAgICAgICAgIGNhcHR1cmVFbmFibGVkOiBjYXB0dXJlTWVudVNjcm9sbCxcbiAgICAgICAgICBvblRvcEFycml2ZTogb25NZW51U2Nyb2xsVG9Ub3AsXG4gICAgICAgICAgb25Cb3R0b21BcnJpdmU6IG9uTWVudVNjcm9sbFRvQm90dG9tLFxuICAgICAgICAgIGxvY2tFbmFibGVkOiBtZW51U2hvdWxkQmxvY2tTY3JvbGxcbiAgICAgICAgfSwgZnVuY3Rpb24gKHNjcm9sbFRhcmdldFJlZikge1xuICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNZW51TGlzdCwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgICAgICBpbm5lclJlZjogZnVuY3Rpb24gaW5uZXJSZWYoaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgX3RoaXM0LmdldE1lbnVMaXN0UmVmKGluc3RhbmNlKTtcbiAgICAgICAgICAgICAgc2Nyb2xsVGFyZ2V0UmVmKGluc3RhbmNlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbm5lclByb3BzOiB7XG4gICAgICAgICAgICAgIHJvbGU6ICdsaXN0Ym94JyxcbiAgICAgICAgICAgICAgJ2FyaWEtbXVsdGlzZWxlY3RhYmxlJzogY29tbW9uUHJvcHMuaXNNdWx0aSxcbiAgICAgICAgICAgICAgaWQ6IF90aGlzNC5nZXRFbGVtZW50SWQoJ2xpc3Rib3gnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzTG9hZGluZzogaXNMb2FkaW5nLFxuICAgICAgICAgICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHQsXG4gICAgICAgICAgICBmb2N1c2VkT3B0aW9uOiBmb2N1c2VkT3B0aW9uXG4gICAgICAgICAgfSksIG1lbnVVSSk7XG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBwb3NpdGlvbmluZyBiZWhhdmlvdXIgaXMgYWxtb3N0IGlkZW50aWNhbCBmb3IgcG9ydGFsbGVkIGFuZCBmaXhlZCxcbiAgICAgIC8vIHNvIHdlIHVzZSB0aGUgc2FtZSBjb21wb25lbnQuIHRoZSBhY3R1YWwgcG9ydGFsbGluZyBsb2dpYyBpcyBmb3JrZWRcbiAgICAgIC8vIHdpdGhpbiB0aGUgY29tcG9uZW50IGJhc2VkIG9uIGBtZW51UG9zaXRpb25gXG4gICAgICByZXR1cm4gbWVudVBvcnRhbFRhcmdldCB8fCBtZW51UG9zaXRpb24gPT09ICdmaXhlZCcgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNZW51UG9ydGFsLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgYXBwZW5kVG86IG1lbnVQb3J0YWxUYXJnZXQsXG4gICAgICAgIGNvbnRyb2xFbGVtZW50OiB0aGlzLmNvbnRyb2xSZWYsXG4gICAgICAgIG1lbnVQbGFjZW1lbnQ6IG1lbnVQbGFjZW1lbnQsXG4gICAgICAgIG1lbnVQb3NpdGlvbjogbWVudVBvc2l0aW9uXG4gICAgICB9KSwgbWVudUVsZW1lbnQpIDogbWVudUVsZW1lbnQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckZvcm1GaWVsZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJGb3JtRmllbGQoKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcbiAgICAgIHZhciBfdGhpcyRwcm9wczEzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZGVsaW1pdGVyID0gX3RoaXMkcHJvcHMxMy5kZWxpbWl0ZXIsXG4gICAgICAgIGlzRGlzYWJsZWQgPSBfdGhpcyRwcm9wczEzLmlzRGlzYWJsZWQsXG4gICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczEzLmlzTXVsdGksXG4gICAgICAgIG5hbWUgPSBfdGhpcyRwcm9wczEzLm5hbWUsXG4gICAgICAgIHJlcXVpcmVkID0gX3RoaXMkcHJvcHMxMy5yZXF1aXJlZDtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IHRoaXMuc3RhdGUuc2VsZWN0VmFsdWU7XG4gICAgICBpZiAocmVxdWlyZWQgJiYgIXRoaXMuaGFzVmFsdWUoKSAmJiAhaXNEaXNhYmxlZCkge1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVxdWlyZWRJbnB1dCQxLCB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICBvbkZvY3VzOiB0aGlzLm9uVmFsdWVJbnB1dEZvY3VzXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKCFuYW1lIHx8IGlzRGlzYWJsZWQpIHJldHVybjtcbiAgICAgIGlmIChpc011bHRpKSB7XG4gICAgICAgIGlmIChkZWxpbWl0ZXIpIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBzZWxlY3RWYWx1ZS5tYXAoZnVuY3Rpb24gKG9wdCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNS5nZXRPcHRpb25WYWx1ZShvcHQpO1xuICAgICAgICAgIH0pLmpvaW4oZGVsaW1pdGVyKTtcbiAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgdHlwZTogXCJoaWRkZW5cIixcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBpbnB1dCA9IHNlbGVjdFZhbHVlLmxlbmd0aCA+IDAgPyBzZWxlY3RWYWx1ZS5tYXAoZnVuY3Rpb24gKG9wdCwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBrZXk6IFwiaS1cIi5jb25jYXQoaSksXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgIHR5cGU6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdGhpczUuZ2V0T3B0aW9uVmFsdWUob3B0KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSkgOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICB0eXBlOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgdmFsdWU6IFwiXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgaW5wdXQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgX3ZhbHVlID0gc2VsZWN0VmFsdWVbMF0gPyB0aGlzLmdldE9wdGlvblZhbHVlKHNlbGVjdFZhbHVlWzBdKSA6ICcnO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB0eXBlOiBcImhpZGRlblwiLFxuICAgICAgICAgIHZhbHVlOiBfdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckxpdmVSZWdpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTGl2ZVJlZ2lvbigpIHtcbiAgICAgIHZhciBjb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHM7XG4gICAgICB2YXIgX3RoaXMkc3RhdGU2ID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgYXJpYVNlbGVjdGlvbiA9IF90aGlzJHN0YXRlNi5hcmlhU2VsZWN0aW9uLFxuICAgICAgICBmb2N1c2VkT3B0aW9uID0gX3RoaXMkc3RhdGU2LmZvY3VzZWRPcHRpb24sXG4gICAgICAgIGZvY3VzZWRWYWx1ZSA9IF90aGlzJHN0YXRlNi5mb2N1c2VkVmFsdWUsXG4gICAgICAgIGlzRm9jdXNlZCA9IF90aGlzJHN0YXRlNi5pc0ZvY3VzZWQsXG4gICAgICAgIHNlbGVjdFZhbHVlID0gX3RoaXMkc3RhdGU2LnNlbGVjdFZhbHVlO1xuICAgICAgdmFyIGZvY3VzYWJsZU9wdGlvbnMgPSB0aGlzLmdldEZvY3VzYWJsZU9wdGlvbnMoKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMaXZlUmVnaW9uJDEsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBpZDogdGhpcy5nZXRFbGVtZW50SWQoJ2xpdmUtcmVnaW9uJyksXG4gICAgICAgIGFyaWFTZWxlY3Rpb246IGFyaWFTZWxlY3Rpb24sXG4gICAgICAgIGZvY3VzZWRPcHRpb246IGZvY3VzZWRPcHRpb24sXG4gICAgICAgIGZvY3VzZWRWYWx1ZTogZm9jdXNlZFZhbHVlLFxuICAgICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZCxcbiAgICAgICAgc2VsZWN0VmFsdWU6IHNlbGVjdFZhbHVlLFxuICAgICAgICBmb2N1c2FibGVPcHRpb25zOiBmb2N1c2FibGVPcHRpb25zLFxuICAgICAgICBpc0FwcGxlRGV2aWNlOiB0aGlzLmlzQXBwbGVEZXZpY2VcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDb21wb25lbnRzOCA9IHRoaXMuZ2V0Q29tcG9uZW50cygpLFxuICAgICAgICBDb250cm9sID0gX3RoaXMkZ2V0Q29tcG9uZW50czguQ29udHJvbCxcbiAgICAgICAgSW5kaWNhdG9yc0NvbnRhaW5lciA9IF90aGlzJGdldENvbXBvbmVudHM4LkluZGljYXRvcnNDb250YWluZXIsXG4gICAgICAgIFNlbGVjdENvbnRhaW5lciA9IF90aGlzJGdldENvbXBvbmVudHM4LlNlbGVjdENvbnRhaW5lcixcbiAgICAgICAgVmFsdWVDb250YWluZXIgPSBfdGhpcyRnZXRDb21wb25lbnRzOC5WYWx1ZUNvbnRhaW5lcjtcbiAgICAgIHZhciBfdGhpcyRwcm9wczE0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMxNC5jbGFzc05hbWUsXG4gICAgICAgIGlkID0gX3RoaXMkcHJvcHMxNC5pZCxcbiAgICAgICAgaXNEaXNhYmxlZCA9IF90aGlzJHByb3BzMTQuaXNEaXNhYmxlZCxcbiAgICAgICAgbWVudUlzT3BlbiA9IF90aGlzJHByb3BzMTQubWVudUlzT3BlbjtcbiAgICAgIHZhciBpc0ZvY3VzZWQgPSB0aGlzLnN0YXRlLmlzRm9jdXNlZDtcbiAgICAgIHZhciBjb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHMgPSB0aGlzLmdldENvbW1vblByb3BzKCk7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0Q29udGFpbmVyLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIGlubmVyUHJvcHM6IHtcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgb25LZXlEb3duOiB0aGlzLm9uS2V5RG93blxuICAgICAgICB9LFxuICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZFxuICAgICAgfSksIHRoaXMucmVuZGVyTGl2ZVJlZ2lvbigpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb250cm9sLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgaW5uZXJSZWY6IHRoaXMuZ2V0Q29udHJvbFJlZixcbiAgICAgICAgaW5uZXJQcm9wczoge1xuICAgICAgICAgIG9uTW91c2VEb3duOiB0aGlzLm9uQ29udHJvbE1vdXNlRG93bixcbiAgICAgICAgICBvblRvdWNoRW5kOiB0aGlzLm9uQ29udHJvbFRvdWNoRW5kXG4gICAgICAgIH0sXG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkLFxuICAgICAgICBtZW51SXNPcGVuOiBtZW51SXNPcGVuXG4gICAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVmFsdWVDb250YWluZXIsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkXG4gICAgICB9KSwgdGhpcy5yZW5kZXJQbGFjZWhvbGRlck9yVmFsdWUoKSwgdGhpcy5yZW5kZXJJbnB1dCgpKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5kaWNhdG9yc0NvbnRhaW5lciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWRcbiAgICAgIH0pLCB0aGlzLnJlbmRlckNsZWFySW5kaWNhdG9yKCksIHRoaXMucmVuZGVyTG9hZGluZ0luZGljYXRvcigpLCB0aGlzLnJlbmRlckluZGljYXRvclNlcGFyYXRvcigpLCB0aGlzLnJlbmRlckRyb3Bkb3duSW5kaWNhdG9yKCkpKSwgdGhpcy5yZW5kZXJNZW51KCksIHRoaXMucmVuZGVyRm9ybUZpZWxkKCkpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgICB2YXIgcHJldlByb3BzID0gc3RhdGUucHJldlByb3BzLFxuICAgICAgICBjbGVhckZvY3VzVmFsdWVPblVwZGF0ZSA9IHN0YXRlLmNsZWFyRm9jdXNWYWx1ZU9uVXBkYXRlLFxuICAgICAgICBpbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGUgPSBzdGF0ZS5pbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGUsXG4gICAgICAgIGFyaWFTZWxlY3Rpb24gPSBzdGF0ZS5hcmlhU2VsZWN0aW9uLFxuICAgICAgICBpc0ZvY3VzZWQgPSBzdGF0ZS5pc0ZvY3VzZWQsXG4gICAgICAgIHByZXZXYXNGb2N1c2VkID0gc3RhdGUucHJldldhc0ZvY3VzZWQsXG4gICAgICAgIGluc3RhbmNlUHJlZml4ID0gc3RhdGUuaW5zdGFuY2VQcmVmaXg7XG4gICAgICB2YXIgb3B0aW9ucyA9IHByb3BzLm9wdGlvbnMsXG4gICAgICAgIHZhbHVlID0gcHJvcHMudmFsdWUsXG4gICAgICAgIG1lbnVJc09wZW4gPSBwcm9wcy5tZW51SXNPcGVuLFxuICAgICAgICBpbnB1dFZhbHVlID0gcHJvcHMuaW5wdXRWYWx1ZSxcbiAgICAgICAgaXNNdWx0aSA9IHByb3BzLmlzTXVsdGk7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSBjbGVhblZhbHVlKHZhbHVlKTtcbiAgICAgIHZhciBuZXdNZW51T3B0aW9uc1N0YXRlID0ge307XG4gICAgICBpZiAocHJldlByb3BzICYmICh2YWx1ZSAhPT0gcHJldlByb3BzLnZhbHVlIHx8IG9wdGlvbnMgIT09IHByZXZQcm9wcy5vcHRpb25zIHx8IG1lbnVJc09wZW4gIT09IHByZXZQcm9wcy5tZW51SXNPcGVuIHx8IGlucHV0VmFsdWUgIT09IHByZXZQcm9wcy5pbnB1dFZhbHVlKSkge1xuICAgICAgICB2YXIgZm9jdXNhYmxlT3B0aW9ucyA9IG1lbnVJc09wZW4gPyBidWlsZEZvY3VzYWJsZU9wdGlvbnMocHJvcHMsIHNlbGVjdFZhbHVlKSA6IFtdO1xuICAgICAgICB2YXIgZm9jdXNhYmxlT3B0aW9uc1dpdGhJZHMgPSBtZW51SXNPcGVuID8gYnVpbGRGb2N1c2FibGVPcHRpb25zV2l0aElkcyhidWlsZENhdGVnb3JpemVkT3B0aW9ucyhwcm9wcywgc2VsZWN0VmFsdWUpLCBcIlwiLmNvbmNhdChpbnN0YW5jZVByZWZpeCwgXCItb3B0aW9uXCIpKSA6IFtdO1xuICAgICAgICB2YXIgZm9jdXNlZFZhbHVlID0gY2xlYXJGb2N1c1ZhbHVlT25VcGRhdGUgPyBnZXROZXh0Rm9jdXNlZFZhbHVlKHN0YXRlLCBzZWxlY3RWYWx1ZSkgOiBudWxsO1xuICAgICAgICB2YXIgZm9jdXNlZE9wdGlvbiA9IGdldE5leHRGb2N1c2VkT3B0aW9uKHN0YXRlLCBmb2N1c2FibGVPcHRpb25zKTtcbiAgICAgICAgdmFyIGZvY3VzZWRPcHRpb25JZCA9IGdldEZvY3VzZWRPcHRpb25JZChmb2N1c2FibGVPcHRpb25zV2l0aElkcywgZm9jdXNlZE9wdGlvbik7XG4gICAgICAgIG5ld01lbnVPcHRpb25zU3RhdGUgPSB7XG4gICAgICAgICAgc2VsZWN0VmFsdWU6IHNlbGVjdFZhbHVlLFxuICAgICAgICAgIGZvY3VzZWRPcHRpb246IGZvY3VzZWRPcHRpb24sXG4gICAgICAgICAgZm9jdXNlZE9wdGlvbklkOiBmb2N1c2VkT3B0aW9uSWQsXG4gICAgICAgICAgZm9jdXNhYmxlT3B0aW9uc1dpdGhJZHM6IGZvY3VzYWJsZU9wdGlvbnNXaXRoSWRzLFxuICAgICAgICAgIGZvY3VzZWRWYWx1ZTogZm9jdXNlZFZhbHVlLFxuICAgICAgICAgIGNsZWFyRm9jdXNWYWx1ZU9uVXBkYXRlOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLy8gc29tZSB1cGRhdGVzIHNob3VsZCB0b2dnbGUgdGhlIHN0YXRlIG9mIHRoZSBpbnB1dCB2aXNpYmlsaXR5XG4gICAgICB2YXIgbmV3SW5wdXRJc0hpZGRlblN0YXRlID0gaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlICE9IG51bGwgJiYgcHJvcHMgIT09IHByZXZQcm9wcyA/IHtcbiAgICAgICAgaW5wdXRJc0hpZGRlbjogaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlLFxuICAgICAgICBpbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGU6IHVuZGVmaW5lZFxuICAgICAgfSA6IHt9O1xuICAgICAgdmFyIG5ld0FyaWFTZWxlY3Rpb24gPSBhcmlhU2VsZWN0aW9uO1xuICAgICAgdmFyIGhhc0tlcHRGb2N1cyA9IGlzRm9jdXNlZCAmJiBwcmV2V2FzRm9jdXNlZDtcbiAgICAgIGlmIChpc0ZvY3VzZWQgJiYgIWhhc0tlcHRGb2N1cykge1xuICAgICAgICAvLyBJZiBgdmFsdWVgIG9yIGBkZWZhdWx0VmFsdWVgIHByb3BzIGFyZSBub3QgZW1wdHkgdGhlbiBhbm5vdW5jZSB0aGVtXG4gICAgICAgIC8vIHdoZW4gdGhlIFNlbGVjdCBpcyBpbml0aWFsbHkgZm9jdXNlZFxuICAgICAgICBuZXdBcmlhU2VsZWN0aW9uID0ge1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZVRlcm5hcnkoaXNNdWx0aSwgc2VsZWN0VmFsdWUsIHNlbGVjdFZhbHVlWzBdIHx8IG51bGwpLFxuICAgICAgICAgIG9wdGlvbnM6IHNlbGVjdFZhbHVlLFxuICAgICAgICAgIGFjdGlvbjogJ2luaXRpYWwtaW5wdXQtZm9jdXMnXG4gICAgICAgIH07XG4gICAgICAgIGhhc0tlcHRGb2N1cyA9ICFwcmV2V2FzRm9jdXNlZDtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlICdpbml0aWFsLWlucHV0LWZvY3VzJyBhY3Rpb24gaGFzIGJlZW4gc2V0IGFscmVhZHlcbiAgICAgIC8vIHRoZW4gcmVzZXQgdGhlIGFyaWFTZWxlY3Rpb24gdG8gbnVsbFxuICAgICAgaWYgKChhcmlhU2VsZWN0aW9uID09PSBudWxsIHx8IGFyaWFTZWxlY3Rpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFyaWFTZWxlY3Rpb24uYWN0aW9uKSA9PT0gJ2luaXRpYWwtaW5wdXQtZm9jdXMnKSB7XG4gICAgICAgIG5ld0FyaWFTZWxlY3Rpb24gPSBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBuZXdNZW51T3B0aW9uc1N0YXRlKSwgbmV3SW5wdXRJc0hpZGRlblN0YXRlKSwge30sIHtcbiAgICAgICAgcHJldlByb3BzOiBwcm9wcyxcbiAgICAgICAgYXJpYVNlbGVjdGlvbjogbmV3QXJpYVNlbGVjdGlvbixcbiAgICAgICAgcHJldldhc0ZvY3VzZWQ6IGhhc0tlcHRGb2N1c1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBTZWxlY3Q7XG59KENvbXBvbmVudCk7XG5TZWxlY3QuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgeyBTZWxlY3QgYXMgUywgZGVmYXVsdFByb3BzIGFzIGEsIGdldE9wdGlvbkxhYmVsJDEgYXMgYiwgY3JlYXRlRmlsdGVyIGFzIGMsIGRlZmF1bHRUaGVtZSBhcyBkLCBnZXRPcHRpb25WYWx1ZSQxIGFzIGcsIG1lcmdlU3R5bGVzIGFzIG0gfTtcbiIsImltcG9ydCB7IHUgYXMgdXNlU3RhdGVNYW5hZ2VyIH0gZnJvbSAnLi91c2VTdGF0ZU1hbmFnZXItN2UxZTg0ODkuZXNtLmpzJztcbmV4cG9ydCB7IHUgYXMgdXNlU3RhdGVNYW5hZ2VyIH0gZnJvbSAnLi91c2VTdGF0ZU1hbmFnZXItN2UxZTg0ODkuZXNtLmpzJztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZvcndhcmRSZWYsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTIGFzIFNlbGVjdCB9IGZyb20gJy4vU2VsZWN0LWFhYjAyN2YzLmVzbS5qcyc7XG5leHBvcnQgeyBjIGFzIGNyZWF0ZUZpbHRlciwgZCBhcyBkZWZhdWx0VGhlbWUsIG0gYXMgbWVyZ2VTdHlsZXMgfSBmcm9tICcuL1NlbGVjdC1hYWIwMjdmMy5lc20uanMnO1xuaW1wb3J0IHsgQ2FjaGVQcm92aWRlciB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCBjcmVhdGVDYWNoZSBmcm9tICdAZW1vdGlvbi9jYWNoZSc7XG5leHBvcnQgeyBjIGFzIGNvbXBvbmVudHMgfSBmcm9tICcuL2luZGV4LTY0MWVlNWI4LmVzbS5qcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkMic7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheSc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZVN1cGVyJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheSc7XG5pbXBvcnQgJ21lbW9pemUtb25lJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbCc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0ICdyZWFjdC1kb20nO1xuaW1wb3J0ICdAZmxvYXRpbmctdWkvZG9tJztcbmltcG9ydCAndXNlLWlzb21vcnBoaWMtbGF5b3V0LWVmZmVjdCc7XG5cbnZhciBTdGF0ZU1hbmFnZWRTZWxlY3QgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgYmFzZVNlbGVjdFByb3BzID0gdXNlU3RhdGVNYW5hZ2VyKHByb3BzKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdCwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmXG4gIH0sIGJhc2VTZWxlY3RQcm9wcykpO1xufSk7XG52YXIgU3RhdGVNYW5hZ2VkU2VsZWN0JDEgPSBTdGF0ZU1hbmFnZWRTZWxlY3Q7XG5cbnZhciBOb25jZVByb3ZpZGVyID0gKGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciBub25jZSA9IF9yZWYubm9uY2UsXG4gICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgIGNhY2hlS2V5ID0gX3JlZi5jYWNoZUtleTtcbiAgdmFyIGVtb3Rpb25DYWNoZSA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjcmVhdGVDYWNoZSh7XG4gICAgICBrZXk6IGNhY2hlS2V5LFxuICAgICAgbm9uY2U6IG5vbmNlXG4gICAgfSk7XG4gIH0sIFtjYWNoZUtleSwgbm9uY2VdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENhY2hlUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogZW1vdGlvbkNhY2hlXG4gIH0sIGNoaWxkcmVuKTtcbn0pO1xuXG5leHBvcnQgeyBOb25jZVByb3ZpZGVyLCBTdGF0ZU1hbmFnZWRTZWxlY3QkMSBhcyBkZWZhdWx0IH07XG4iLCJleHBvcnQgY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNvbnRyb2w6IChiYXNlU3R5bGVzLCBzdGF0ZSkgPT4gKHtcclxuICAgIC4uLmJhc2VTdHlsZXMsXHJcbiAgICBvdXRsaW5lOiBzdGF0ZS5pc0ZvY3VzZWQgJiYgXCIxcHggc29saWQgdmFyKC0tdGhlbWUtY29sb3ItZm9jdXMtb3V0bGluZSlcIixcclxuICAgIGJvcmRlclJhZGl1czogXCIwcHhcIixcclxuICAgIGJvcmRlckNvbG9yOiBcInZhcigtLXRoZW1lLWNvbG9yLW5ldXRyYWwtMzApXCIsXHJcbiAgICBwYWRkaW5nQmxvY2s6IFwiMTJweFwiLFxyXG4gICAgcGFkZGluZ0lubGluZTogXCIxMnB4XCIsXHJcbiAgICBmb250RmFtaWx5OiBcInZhcigtLWZvbnQtcHJpbWFyeSlcIixcclxuICAgIFwiJjpob3ZlclwiOiBcInZhcigtLXRoZW1lLWNvbG9yLWZvY3VzLW91dGxpbmUpXCIsXHJcbiAgfSksXHJcbiAgaW5kaWNhdG9yU2VwYXJhdG9yOiAoKSA9PiAoe1xyXG4gICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgfSksXHJcbiAgb3B0aW9uOiAoYmFzZVN0eWxlcywgc3RhdGUpID0+ICh7XHJcbiAgICAuLi5iYXNlU3R5bGVzLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdGF0ZS5pc1NlbGVjdGVkXHJcbiAgICAgID8gXCJ2YXIoLS10aGVtZS1jb2xvci1uZXV0cmFsLTEwKVwiXHJcbiAgICAgIDogc3RhdGUuaXNGb2N1c2VkXHJcbiAgICAgID8gXCJ2YXIoLS10aGVtZS1jb2xvci1uZXV0cmFsLTAwKVwiXHJcbiAgICAgIDogXCJub25lXCIsXHJcbiAgICBjb2xvcjogXCJ2YXIoLS1jb2xvci1wdXJlLWJsYWNrKVwiLFxyXG4gIH0pLFxyXG4gIG1lbnVMaXN0OiAoYmFzZVN0eWxlcykgPT4gKHtcclxuICAgIC4uLmJhc2VTdHlsZXMsXHJcbiAgICBwYWRkaW5nOiBcIjRweFwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgZ2FwOiBcIjRweFwiLFxyXG4gIH0pLFxyXG4gIGRyb3Bkb3duSW5kaWNhdG9yOiAoYmFzZVN0eWxlcykgPT4gKHtcclxuICAgIC4uLmJhc2VTdHlsZXMsXHJcbiAgICBjb2xvcjogXCJ2YXIoLS10aGVtZS1jb2xvci1uZXV0cmFsLTMwKVwiLFxyXG4gIH0pLFxyXG4gIHZhbHVlQ29udGFpbmVyOiAoYmFzZVN0eWxlcykgPT4gKHtcclxuICAgIC4uLmJhc2VTdHlsZXMsXHJcbiAgICBmb250U2l6ZTogXCIxNnB4XCIsXHJcbiAgfSksXHJcbiAgbWVudTogKGJhc2VTdHlsZXMpID0+ICh7XHJcbiAgICAuLi5iYXNlU3R5bGVzLFxyXG4gICAgekluZGV4OiBcInZhcigtLXotZHJvcGRvd24pXCIsXHJcbiAgfSksXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJvIiwiciIsImRlZmluZVByb3BlcnR5IiwiYXJyYXlMaWtlVG9BcnJheSIsImFycmF5V2l0aEhvbGVzIiwiaXRlcmFibGVUb0FycmF5TGltaXQiLCJ1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIm5vbkl0ZXJhYmxlUmVzdCIsIm9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJfZXhjbHVkZWQiLCJfcmVmIiwidXNlU3RhdGUiLCJvbkNoYW5nZSIsInVzZUNhbGxiYWNrIiwidmFsdWUiLCJfb2JqZWN0U3ByZWFkIiwiX3NldFByb3RvdHlwZU9mIiwicCIsInNldFByb3RvdHlwZU9mIiwiX2dldFByb3RvdHlwZU9mIiwiYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiZ2V0UHJvdG90eXBlT2YiLCJwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwiYXJyYXlXaXRob3V0SG9sZXMiLCJpdGVyYWJsZVRvQXJyYXkiLCJub25JdGVyYWJsZVNwcmVhZCIsImlzRGV2ZWxvcG1lbnQiLCJvcHRpb25zIiwiU3R5bGVTaGVldCIsImlzSW1wb3J0UnVsZSIsImxlbmd0aCIsImluZGV4IiwiY2hhcmFjdGVyIiwiY2hhcmFjdGVycyIsImlkZW50aWZpZXJXaXRoUG9pbnRUcmFja2luZyIsInRvUnVsZXMiLCJnZXRSdWxlcyIsImNvbXBhdCIsInJlbW92ZUxhYmVsIiwiaXNJZ25vcmluZ0NvbW1lbnQiLCJjcmVhdGVVbnNhZmVTZWxlY3RvcnNBbGFybSIsIm5vZGUiLCJpc1ByZXBlbmRlZFdpdGhSZWd1bGFyUnVsZXMiLCJudWxsaWZ5RWxlbWVudCIsImluY29ycmVjdEltcG9ydEFsYXJtIiwicHJlZml4ZXIiLCJjcmVhdGVDYWNoZSIsInN0eWxpcyIsInN0eWxlcyIsImluc2VydCIsIkVsZW1lbnQiLCJpc0VsZW1lbnQiLCJyZWFjdElzTW9kdWxlIiwicmVxdWlyZSQkMCIsImlzQnJvd3NlciIsImNsYXNzTmFtZXMiLCJyZWdpc3RlclN0eWxlcyIsImluc2VydFN0eWxlcyIsImlzQ3VzdG9tUHJvcGVydHkiLCJpc1Byb2Nlc3NhYmxlVmFsdWUiLCJwcm9jZXNzU3R5bGVWYWx1ZSIsIm1hdGNoIiwidW5pdGxlc3MiLCJrZXlmcmFtZXMiLCJuZXh0IiwiaGFzaFN0cmluZyIsInN5bmNGYWxsYmFjayIsIlJlYWN0LnVzZUxheW91dEVmZmVjdCIsIlJlYWN0LmNyZWF0ZUNvbnRleHQiLCJ3aXRoRW1vdGlvbkNhY2hlIiwiZm9yd2FyZFJlZiIsInVzZUNvbnRleHQiLCJnZXRMYXN0UGFydCIsImdldEZ1bmN0aW9uTmFtZUZyb21TdGFja1RyYWNlTGluZSIsImxpbmUiLCJzYW5pdGl6ZUlkZW50aWZpZXIiLCJpZGVudGlmaWVyIiwiZ2V0TGFiZWxGcm9tU3RhY2tUcmFjZSIsImNyZWF0ZUVtb3Rpb25Qcm9wcyIsIkluc2VydGlvbiIsIlJlYWN0LnVzZUNvbnRleHQiLCJSZWFjdC5jcmVhdGVFbGVtZW50IiwiUmVhY3QuRnJhZ21lbnQiLCJqc3giLCJFbW90aW9uIiwiUmVhY3QudXNlUmVmIiwiY3NzIiwiY2xhc3NuYW1lcyIsImN4IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInVzZUxheW91dEVmZmVjdCIsIm5vb3AiLCJwcmVmaXgiLCJjbGVhblZhbHVlIiwiY2xlYW5Db21tb25Qcm9wcyIsImdldFN0eWxlUHJvcHMiLCJyZW1vdmVQcm9wcyIsIl9yZWYyIiwiY29udHJvbEhlaWdodCIsImNvZXJjZVBsYWNlbWVudCIsIm1lbnVDU1MiLCJfb2JqZWN0U3ByZWFkMiIsImJvcmRlclJhZGl1cyIsInNwYWNpbmciLCJjb2xvcnMiLCJjcmVhdGVDb250ZXh0IiwiTWVudVBsYWNlciIsInVzZVJlZiIsIk1lbnUiLCJtZW51TGlzdENTUyIsImJhc2VVbml0IiwiTWVudUxpc3QiLCJub3RpY2VDU1MiLCJOb09wdGlvbnNNZXNzYWdlIiwiTG9hZGluZ01lc3NhZ2UiLCJtZW51UG9ydGFsQ1NTIiwicG9zaXRpb24iLCJNZW51UG9ydGFsIiwidXNlTWVtbyIsImNyZWF0ZVBvcnRhbCIsImNvbnRhaW5lckNTUyIsIlNlbGVjdENvbnRhaW5lciIsInZhbHVlQ29udGFpbmVyQ1NTIiwiVmFsdWVDb250YWluZXIiLCJpbmRpY2F0b3JzQ29udGFpbmVyQ1NTIiwiSW5kaWNhdG9yc0NvbnRhaW5lciIsIl9FTU9USU9OX1NUUklOR0lGSUVEX0NTU19FUlJPUl9fIiwiU3ZnIiwiQ3Jvc3NJY29uIiwiRG93bkNoZXZyb24iLCJiYXNlQ1NTIiwiRHJvcGRvd25JbmRpY2F0b3IiLCJDbGVhckluZGljYXRvciIsImluZGljYXRvclNlcGFyYXRvckNTUyIsIkluZGljYXRvclNlcGFyYXRvciIsImxvYWRpbmdJbmRpY2F0b3JDU1MiLCJMb2FkaW5nRG90IiwiTG9hZGluZ0luZGljYXRvciIsIkNvbnRyb2wiLCJncm91cENTUyIsIkdyb3VwIiwiZ3JvdXBIZWFkaW5nQ1NTIiwiR3JvdXBIZWFkaW5nIiwiaW5wdXRDU1MiLCJpbnB1dFN0eWxlIiwiSW5wdXQiLCJtdWx0aVZhbHVlQ1NTIiwibXVsdGlWYWx1ZUxhYmVsQ1NTIiwibXVsdGlWYWx1ZVJlbW92ZUNTUyIsIk11bHRpVmFsdWVHZW5lcmljIiwiTXVsdGlWYWx1ZSIsImNvbXBvbmVudHMiLCJvcHRpb25DU1MiLCJPcHRpb24iLCJwbGFjZWhvbGRlckNTUyIsIlBsYWNlaG9sZGVyIiwiU2luZ2xlVmFsdWUiLCJkZWZhdWx0Q29tcG9uZW50cyIsImlzRXF1YWwiLCJBMTF5VGV4dCIsImlzQXBwbGVEZXZpY2UiLCJnZXRBcnJheUluZGV4IiwiTGl2ZVJlZ2lvbiIsImdldE9wdGlvbkxhYmVsIiwiaXNPcHRpb25EaXNhYmxlZCIsInNjcmVlblJlYWRlclN0YXR1cyIsImFzT3B0aW9uIiwiRnJhZ21lbnQiLCJzdHJpcERpYWNyaXRpY3MiLCJ0cmltU3RyaW5nIiwiZGVmYXVsdFN0cmluZ2lmeSIsImNyZWF0ZUZpbHRlciIsInN0cmluZ2lmeSIsInRyaW0iLCJjYW5jZWxTY3JvbGwiLCJ1c2VFZmZlY3QiLCJibHVyU2VsZWN0SW5wdXQiLCJ0YXJnZXRSZWYiLCJSZXF1aXJlZElucHV0Iiwib25Gb2N1cyIsImZvcm1hdEdyb3VwTGFiZWwiLCJjc3MkMiIsImdldE9wdGlvblZhbHVlIiwiY2F0ZWdvcml6ZWRPcHRpb24iLCJnZXRGb2N1c2VkT3B0aW9uSWQiLCJzaG91bGRIaWRlU2VsZWN0ZWRPcHRpb25zIiwiU2VsZWN0IiwiaXNDbGVhcmFibGUiLCJNdWx0aVZhbHVlQ29udGFpbmVyIiwiTXVsdGlWYWx1ZUxhYmVsIiwiTXVsdGlWYWx1ZVJlbW92ZSIsImxvYWRpbmdNZXNzYWdlIiwibm9PcHRpb25zTWVzc2FnZSIsInJlbmRlciIsImRlbGltaXRlciIs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Q1YsV0FBVztBQUFBLFFBQ1g7QUFBQSxRQUNELFNBQVM7QUFBQSxVQUNSLFFBQVE7QUFBQSxVQUNSLFVBQVU7QUFBQSxVQUNWLFdBQVc7QUFBQSxRQUNYO0FBQUEsUUFDRCxTQUFTO0FBQUEsVUFDUixRQUFRO0FBQUEsVUFDUixVQUFVO0FBQUEsVUFDVixXQUFXO0FBQUEsUUFDWDtBQUFBLFFBQ0QsUUFBUTtBQUFBLFFBQ1IsVUFBVTtBQUFBLFFBQ1YsV0FBVztBQUFBLE1BQ1g7QUFBQSxNQUNELGNBQWM7QUFBQSxRQUNiLFFBQVE7QUFBQSxRQUNSLFVBQVU7QUFBQSxRQUNWLFdBQVc7QUFBQSxNQUNYO0FBQUEsTUFDRCxRQUFRO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUixVQUFVO0FBQUEsUUFDVixXQUFXO0FBQUEsTUFDWDtBQUFBLE1BQ0QsU0FBUztBQUFBLFFBQ1IsUUFBUTtBQUFBLFFBQ1IsVUFBVTtBQUFBLFFBQ1YsV0FBVztBQUFBLE1BQ1g7QUFBQSxNQUNELFNBQVM7QUFBQSxRQUNSLFFBQVE7QUFBQSxRQUNSLFVBQVU7QUFBQSxRQUNWLFdBQVc7QUFBQSxNQUNYO0FBQUEsTUFDRCxRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFDVixXQUFXO0FBQUEsSUFDWDtBQUFBLElBQ0Qsb0JBQW9CO0FBQUEsTUFDbkIsT0FBTztBQUFBLFFBQ04sVUFBVTtBQUFBLFFBQ1YsV0FBVztBQUFBLE1BQ1g7QUFBQSxNQUNELGFBQWE7QUFBQSxRQUNaLGNBQWM7QUFBQSxVQUNiLFFBQVE7QUFBQSxVQUNSLFVBQVU7QUFBQSxVQUNWLFdBQVc7QUFBQSxRQUNYO0FBQUEsUUFDRCxRQUFRO0FBQUEsVUFDUCxRQUFRO0FBQUEsVUFDUixVQUFVO0FBQUEsVUFDVixXQUFXO0FBQUEsUUFDWDtBQUFBLFFBQ0QsU0FBUztBQUFBLFVBQ1IsUUFBUTtBQUFBLFVBQ1IsVUFBVTtBQUFBLFVBQ1YsV0FBVztBQUFBLFFBQ1g7QUFBQSxRQUNELFNBQVM7QUFBQSxVQUNSLFFBQVE7QUFBQSxVQUNSLFVBQVU7QUFBQSxVQUNWLFdBQVc7QUFBQSxRQUNYO0FBQUEsUUFDRCxRQUFRO0FBQUEsUUFDUixVQUFVO0FBQUEsUUFDVixXQUFXO0FBQUEsTUFDWDtBQUFBLE1BQ0QsY0FBYztBQUFBLFFBQ2IsUUFBUTtBQUFBLFFBQ1IsVUFBVTtBQUFBLFFBQ1YsV0FBVztBQUFBLE1BQ1g7QUFBQSxNQUNELFFBQVE7QUFBQSxRQUNQLFFBQVE7QUFBQSxRQUNSLFVBQVU7QUFBQSxRQUNWLFdBQVc7QUFBQSxNQUNYO0FBQUEsTUFDRCxTQUFTO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixVQUFVO0FBQUEsUUFDVixXQUFXO0FBQUEsTUFDWDtBQUFBLE1BQ0QsU0FBUztBQUFBLFFBQ1IsUUFBUTtBQUFBLFFBQ1IsVUFBVTtBQUFBLFFBQ1YsV0FBVztBQUFBLE1BQ1g7QUFBQSxNQUNELFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxJQUNYO0FBQUEsSUFDRCxxQkFBcUI7QUFBQSxNQUNwQixPQUFPO0FBQUEsUUFDTixVQUFVO0FBQUEsUUFDVixXQUFXO0FBQUEsTUFDWDtBQUFBLE1BQ0QsYUFBYTtBQUFBLFFBQ1osY0FBYztBQUFBLFVBQ2IsUUFBUTtBQUFBLFVBQ1IsVUFBVTtBQUFBLFVBQ1YsV0FBVztBQUFBLFFBQ1g7QUFBQSxRQUNELFFBQVE7QUFBQSxVQUNQLFFBQVE7QUFBQSxVQUNSLFVBQVU7QUFBQSxVQUNWLFdBQVc7QUFBQSxRQUNYO0FBQUEsUUFDRCxTQUFTO0FBQUEsVUFDUixRQUFRO0FBQUEsVUFDUixVQUFVO0FBQUEsVUFDVixXQUFXO0FBQUEsUUFDWDtBQUFBLFFBQ0QsU0FBUztBQUFBLFVBQ1IsUUFBUTtBQUFBLFVBQ1IsVUFBVTtBQUFBLFVBQ1YsV0FBVztBQUFBLFFBQ1g7QUFBQSxRQUNELFFBQVE7QUFBQSxRQUNSLFVBQVU7QUFBQSxRQUNWLFdBQVc7QUFBQSxNQUNYO0FBQUEsTUFDRCxjQUFjO0FBQUEsUUFDYixRQUFRO0FBQUEsUUFDUixVQUFVO0FBQUEsUUFDVixXQUFXO0FBQUEsTUFDWDtB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QUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUNYLEdBQUc7QUFBQSxFQUNELE1BQU07QUFBQSxFQUNOLFNBQVM7QUFDWCxHQUFHO0FBQUEsRUFDRCxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1gsR0FBRztBQUFBLEVBQ0QsTUFBTTtBQUFBLEVB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Vyw2QkFBbUIsY0FBQyxRQUFRLFNBQVM7QUFBQSxJQUN2RDtBQUFBLEVBQ0osR0FBSyxlQUFlLENBQUM7QUFDckIsQ0FBQztBQUNFLElBQUMsdUJBQXVCO0FDaENmLE1BQUMsU0FBUztBQUFBLEVBQ3BCLFNBQVMsQ0FBQyxZQUFZLFdBQVc7QUFBQSxJQUMvQixHQUFHO0FBQUEsSUFDSCxTQUFTLE1BQU0sYUFBYTtBQUFBLElBQzVCLGNBQWM7QUFBQSxJQUNkLGFBQWE7QUFBQSxJQUNiLGNBQWM7QUFBQSxJQUNkLGVBQWU7QUFBQSxJQUNmLFlBQVk7QUFBQSxJQUNaLFdBQVc7QUFBQSxFQUNmO0FBQUEsRUFDRSxvQkFBb0IsT0FBTztBQUFBLElBQ3pCLFNBQVM7QUFBQSxFQUNiO0FBQUEsRUFDRSxRQUFRLENBQUMsWUFBWSxXQUFXO0FBQUEsSUFDOUIsR0FBRztBQUFBLElBQ0gsY0FBYztBQUFBLElBQ2QsaUJBQWlCLE1BQU0sYUFDbkIsa0NBQ0EsTUFBTSxZQUNOLGtDQUNBO0FBQUEsSUFDSixPQUFPO0FBQUEsRUFDWDtBQUFBLEVBQ0UsVUFBVSxDQUFDLGdCQUFnQjtBQUFBLElBQ3pCLEdBQUc7QUFBQSxJQUNILFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxJQUNULGVBQWU7QUFBQSxJQUNmLEtBQUs7QUFBQSxFQUNUO0FBQUEsRUFDRSxtQkFBbUIsQ0FBQyxnQkFBZ0I7QUFBQSxJQUNsQyxHQUFHO0FBQUEsSUFDSCxPQUFPO0FBQUEsRUFDWDtBQUFBLEVBQ0UsZ0JBQWdCLENBQUMsZ0JBQWdCO0FBQUEsSUFDL0IsR0FBRztBQUFBLElBQ0gsVUFBVTtBQUFBLEVBQ2Q7QUFBQSxFQUNFLE1BQU0sQ0FBQyxnQkFBZ0I7QUFBQSxJQUNyQixHQUFHO0FBQUEsSUFDSCxRQUFRO0FBQUEsRUFDWjtBQUNBOyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswLDEsMiwzLDQsNSw2LDcsOCw5LDEwLDExLDEyLDEzLDE0LDE1LDE2LDE3LDE4LDE5LDIwLDIxLDIyLDIzLDI0LDI1LDI2LDI3LDI4LDI5LDMwLDMxLDMyLDMzLDM0LDM1LDM2LDM3LDM4LDM5LDQwLDQxLDQyLDQzLDQ0LDQ1LDQ2LDQ3LDQ4LDQ5LDUwLDUxLDUyLDUzLDU0LDU1XX0=
