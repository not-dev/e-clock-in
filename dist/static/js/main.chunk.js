(this["webpackJsonpe-clock-in"] = this["webpackJsonpe-clock-in"] || []).push([["main"],{

/***/ "./src/atoms/InputLabel.tsx":
/*!**********************************!*\
  !*** ./src/atoms/InputLabel.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");




var InputLabel = function InputLabel(_ref) {
  var children = _ref.children,
      props = Object(C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["children"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], props, children);
};

/* harmony default export */ __webpack_exports__["default"] = (InputLabel);

/***/ }),

/***/ "./src/atoms/MyGrid.tsx":
/*!******************************!*\
  !*** ./src/atoms/MyGrid.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");




var MyGrid = function MyGrid(_ref) {
  var children = _ref.children,
      props = Object(C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["children"]);

  var containerprops = props.container && {
    justify: 'center',
    alignItems: 'center',
    spacing: 2
  };
  var itemprops = props.item && {
    xs: 12
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], Object.assign({}, containerprops, itemprops, props), children);
};

/* harmony default export */ __webpack_exports__["default"] = (MyGrid);

/***/ }),

/***/ "./src/atoms/index.ts":
/*!****************************!*\
  !*** ./src/atoms/index.ts ***!
  \****************************/
/*! exports provided: MyGrid, InputLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyGrid */ "./src/atoms/MyGrid.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyGrid", function() { return _MyGrid__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _InputLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputLabel */ "./src/atoms/InputLabel.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputLabel", function() { return _InputLabel__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages */ "./src/pages/index.ts");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages__WEBPACK_IMPORTED_MODULE_2__["App"], null)), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_3__["unregister"]();

/***/ }),

/***/ "./src/molecules/Copyright.tsx":
/*!*************************************!*\
  !*** ./src/molecules/Copyright.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var Copyright = function Copyright(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    align: "center"
  }, 'Copyright © ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    color: "inherit",
    href: "https://material-ui.com/"
  }, props.children || 'Your website'), ' ', new Date().getFullYear(), '.');
};

/* harmony default export */ __webpack_exports__["default"] = (Copyright);

/***/ }),

/***/ "./src/molecules/SimpleSnackbar.tsx":
/*!******************************************!*\
  !*** ./src/molecules/SimpleSnackbar.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function () {
  return {
    root: {
      '& .MuiSnackbarContent-root': {
        width: '60vw',
        minWidth: 344,
        maxWidth: 688,
        flex: 'none'
      }
    }
  };
});

var SimpleSnackbar = function SimpleSnackbar(props) {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Snackbar"], {
    autoHideDuration: 4000
    /* 4 ~ 10 second */
    ,
    anchorOrigin: props.anchorOrigin,
    open: props.open,
    onClose: props.onClose,
    message: props.message,
    action: props.action && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      color: "secondary",
      size: "small",
      onClick: function onClick() {
        props.onClose();
        props.onAction();
      }
    }, props.action),
    className: classes.root
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SimpleSnackbar);

/***/ }),

/***/ "./src/molecules/TextDialog.tsx":
/*!**************************************!*\
  !*** ./src/molecules/TextDialog.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");



var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    title: {
      color: theme.palette.warning.main
    }
  };
});

var TextDialog = function TextDialog(props) {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Dialog"], {
    open: props.open,
    onClose: props.handleClose,
    scroll: "paper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogTitle"], {
    className: classes.title
  }, "Warning"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogContent"], {
    dividers: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogContentText"], {
    style: {
      whiteSpace: 'pre-line',
      margin: '1.5em 0'
    }
  }, props.content)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogActions"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: function onClick() {
      props.handleClose();
      props.handleCancel(props.name);
    },
    color: "primary"
  }, "CANCEL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: props.handleClose,
    color: "primary"
  }, "CONTINUE")));
};

/* harmony default export */ __webpack_exports__["default"] = (TextDialog);

/***/ }),

/***/ "./src/molecules/index.ts":
/*!********************************!*\
  !*** ./src/molecules/index.ts ***!
  \********************************/
/*! exports provided: TextDialog, SimpleSnackbar, Copyright */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextDialog */ "./src/molecules/TextDialog.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextDialog", function() { return _TextDialog__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _SimpleSnackbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimpleSnackbar */ "./src/molecules/SimpleSnackbar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleSnackbar", function() { return _SimpleSnackbar__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Copyright__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Copyright */ "./src/molecules/Copyright.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Copyright", function() { return _Copyright__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./src/organisms/Form.tsx":
/*!********************************!*\
  !*** ./src/organisms/Form.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../atoms */ "./src/atoms/index.ts");
/* harmony import */ var _molecules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../molecules */ "./src/molecules/index.ts");
/* harmony import */ var _utilitys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utilitys */ "./src/utilitys/index.js");









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    divider: {
      margin: "".concat(theme.spacing(2), "px 0")
    },
    link: {
      float: 'right'
    }
  };
});

var Form = function Form(props) {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(function () {
    var init = Object(C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props.data.reduce(function (obj, d) {
      var items = Object.entries(d.elem);

      for (var _i = 0, _items = items; _i < _items.length; _i++) {
        var item = _items[_i];
        obj[item[0]] = item[1].init;
      }

      return obj;
    }, {}));

    return init;
  }),
      _React$useState2 = Object(C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(function () {
    var dialogContents = props.data.reduce(function (obj, group) {
      obj = Object(C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, obj, {}, Object.entries(group.elem).reduce(function (res, _ref) {
        var _ref2 = Object(C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, 2),
            key = _ref2[0],
            e = _ref2[1];

        if (e.warning) {
          res[key] = e.warning;
        }

        return res;
      }, {}));
      return obj;
    }, {});
    Object(_utilitys__WEBPACK_IMPORTED_MODULE_8__["loadOptions"])(null, function (options) {
      return setState(Object(C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {}, options));
    });
    return {
      dialogContents: dialogContents
    };
  }),
      _React$useState4 = Object(C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 1),
      init = _React$useState4[0];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({}),
      _React$useState6 = Object(C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState5, 2),
      error = _React$useState6[0],
      setError = _React$useState6[1];

  var handleChange = function handleChange(event) {
    var name = event.target.getAttribute('name') || '';
    setState(Object(C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, Object(C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, !state[name])));
  };

  var handleInput = function handleInput(event) {
    var input = event.target.value;
    var name = event.target.getAttribute('name') || '';

    if (input.match(/^[0-9a-zA-Z]+$/) || !input) {
      setState(Object(C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, Object(C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, event.target.value)));
      setError(Object(C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, error, Object(C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, false)));
    } else {
      setError(Object(C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, error, Object(C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, true)));
    }
  };

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState8 = Object(C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState7, 2),
      showBar = _React$useState8[0],
      setShowBar = _React$useState8[1];

  var handleSubmit = function handleSubmit() {
    Object(_utilitys__WEBPACK_IMPORTED_MODULE_8__["saveOptions"])(state, function () {
      return setShowBar(true);
    });
  };

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({
    show: false,
    name: ''
  }),
      _React$useState10 = Object(C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState9, 2),
      stateDialog = _React$useState10[0],
      setStateDialog = _React$useState10[1];

  var handleCloseDialog = function handleCloseDialog() {
    setStateDialog(Object(C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, stateDialog, {
      show: false
    }));
  };

  var handleCancel = function handleCancel(name) {
    setState(Object(C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, Object(C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, !state[name])));
  };

  var handleWarning = function handleWarning(event) {
    handleChange(event);
    var name = event.target.getAttribute('name') || '';

    if (!state[name]) {
      setStateDialog(Object(C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, stateDialog, {
        show: true,
        name: name
      }));
    }
  };

  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    var unsafes = document.getElementsByClassName('unsafe');
    var showUnsafe = state.fillPassword;

    for (var _i2 = 0, _Array$from = Array.from(unsafes); _i2 < _Array$from.length; _i2++) {
      var unsafe = _Array$from[_i2];

      if (showUnsafe) {
        unsafe.style.display = 'flex';
      } else {
        unsafe.style.display = 'none';
      }
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_atoms__WEBPACK_IMPORTED_MODULE_6__["MyGrid"], {
    container: true
  }, props.data.map(function (d, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_atoms__WEBPACK_IMPORTED_MODULE_6__["MyGrid"], {
      item: true,
      container: true,
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_atoms__WEBPACK_IMPORTED_MODULE_6__["MyGrid"], {
      item: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      variant: "overline"
    }, d.title)), Object.entries(d.elem).map(function (items) {
      var _items2 = Object(C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(items, 2),
          name = _items2[0],
          e = _items2[1];

      if (e.type === 'TextField') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_atoms__WEBPACK_IMPORTED_MODULE_6__["MyGrid"], {
          item: true,
          className: e.unsafe && 'unsafe',
          key: name
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
          variant: "outlined",
          fullWidth: true,
          onChange: handleInput,
          label: e.label,
          name: name,
          value: state[name],
          type: e.password ? 'password' : 'email',
          title: "",
          error: error[name],
          helperText: error[name] && '全角文字は使用できません'
        }));
      } else if (e.type === 'Switch') {
        var f = !e.warning ? handleChange : handleWarning;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_atoms__WEBPACK_IMPORTED_MODULE_6__["MyGrid"], {
          item: true,
          container: true,
          key: name
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_atoms__WEBPACK_IMPORTED_MODULE_6__["MyGrid"], {
          item: true,
          xs: true
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_atoms__WEBPACK_IMPORTED_MODULE_6__["InputLabel"], {
          variant: "subtitle1",
          onClick: f,
          name: name
        }, e.label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_atoms__WEBPACK_IMPORTED_MODULE_6__["MyGrid"], {
          item: true,
          xs: false
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Switch"], {
          checked: state[name],
          onChange: f,
          name: name,
          color: "primary"
        })));
      } else {
        return null;
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_atoms__WEBPACK_IMPORTED_MODULE_6__["MyGrid"], {
      item: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
      className: classes.divider
    })));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_atoms__WEBPACK_IMPORTED_MODULE_6__["MyGrid"], {
    item: true,
    container: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_atoms__WEBPACK_IMPORTED_MODULE_6__["MyGrid"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    color: "primary",
    onClick: handleSubmit
  }, "SAVE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_atoms__WEBPACK_IMPORTED_MODULE_6__["MyGrid"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    href: props.link.target,
    variant: "body2",
    color: "textSecondary",
    className: classes.link
  }, props.link.text || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_molecules__WEBPACK_IMPORTED_MODULE_7__["TextDialog"], {
    open: stateDialog.show,
    handleClose: handleCloseDialog,
    handleCancel: handleCancel,
    content: stateDialog.name ? init.dialogContents[stateDialog.name] : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null),
    name: stateDialog.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_molecules__WEBPACK_IMPORTED_MODULE_7__["SimpleSnackbar"], {
    open: showBar,
    onClose: function onClose() {
      return setShowBar(false);
    },
    message: "\u4FDD\u5B58\u3057\u307E\u3057\u305F",
    action: "CLOSE",
    onAction: function onAction() {
      return Object(_utilitys__WEBPACK_IMPORTED_MODULE_8__["closeTab"])();
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./src/organisms/Options.tsx":
/*!***********************************!*\
  !*** ./src/organisms/Options.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Settings */ "./node_modules/@material-ui/icons/Settings.js");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/GitHub */ "./node_modules/@material-ui/icons/GitHub.js");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _organisms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../organisms */ "./src/organisms/index.ts");






 // import OpenInNewIcon from '@material-ui/icons/OpenInNew'





var asyncSetTimeout = function asyncSetTimeout(msec) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  var timeoutId;

  var exec = function exec() {
    return new Promise(function (resolve) {
      timeoutId = window.setTimeout(function () {
        resolve(func());
      }, msec);
    });
  };

  return {
    exec: exec,
    cancel: function cancel() {
      timeoutId && window.clearTimeout(timeoutId);
    }
  };
};

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh'
    },
    paper: {
      marginTop: theme.spacing(3),
      padding: "".concat(theme.spacing(2), "px ").concat(theme.spacing(3), "px"),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      padding: theme.spacing(6),
      lineHeight: "".concat(theme.spacing(6), "px")
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
      position: 'absolute',
      top: 'calc(144px - 28px)',
      left: 'calc(50% - 28px)',
      '& .MuiSvgIcon-root': {
        fontSize: 28,
        animation: '$r 12s linear infinite',
        transformOrigin: 'center'
      }
    },
    action: {
      '& .MuiSvgIcon-root': {
        animation: '$rFast 4200ms cubic-bezier(0, 0, 0, 1)'
      }
    },
    '@keyframes r': {
      from: {
        transform: 'rotate(0deg)'
      },
      to: {
        transform: 'rotate(360deg)'
      }
    },
    '@keyframes rFast': {
      from: {
        transform: 'rotate(360deg)'
      },
      to: {
        transform: 'rotate(3600deg)'
      }
    },
    divider: {
      backgroundColor: theme.palette.secondary.main,
      margin: '0 5%'
    },
    linkicon: {
      fontSize: 16,
      verticalAlign: 'middle',
      marginRight: 8,
      marginBottom: 3
    }
  };
});

var Options = function Options(props) {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState2 = Object(C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      action = _React$useState2[0],
      setAction = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(asyncSetTimeout(0)),
      _React$useState4 = Object(C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      timer = _React$useState4[0],
      setTimer = _React$useState4[1];

  var handleClick = /*#__PURE__*/function () {
    var _ref = Object(C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var prevTimer, start, newTimer;
      return C_Users_User_Documents_Script_nodejs_e_clock_in_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              prevTimer = timer;

              if (action && prevTimer) {
                prevTimer.cancel();
                setAction(false);
              }

              start = asyncSetTimeout(0, function () {
                setAction(true);
              });
              _context.next = 5;
              return start.exec();

            case 5:
              newTimer = asyncSetTimeout(4000, function () {
                setAction(false);
              });
              setTimer(newTimer);
              _context.next = 9;
              return newTimer.exec();

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleClick() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    maxWidth: false,
    disableGutters: true,
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    textAlign: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    component: "h1",
    variant: "h4",
    className: classes.title
  }, "Options"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Avatar"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.avatar, action && classes.action),
    onClick: handleClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_6___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    className: classes.divider
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    component: "main",
    maxWidth: "xs",
    className: classes.paper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_organisms__WEBPACK_IMPORTED_MODULE_9__["Form"], {
    data: props.form.data,
    link: props.form.link
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    p: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    color: "inherit",
    href: "https://github.com/olture/easyLazy"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.linkicon
  }), "GitHub"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Options);

/***/ }),

/***/ "./src/organisms/index.ts":
/*!********************************!*\
  !*** ./src/organisms/index.ts ***!
  \********************************/
/*! exports provided: Options, Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Options */ "./src/organisms/Options.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return _Options__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ "./src/organisms/Form.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _Form__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./src/pages/App.tsx":
/*!***************************!*\
  !*** ./src/pages/App.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _organisms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../organisms */ "./src/organisms/index.ts");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ "./src/theme/index.ts");






var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["StylesProvider"], {
    injectFirst: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: _theme__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_organisms__WEBPACK_IMPORTED_MODULE_3__["Options"], {
    form: {
      data: [{
        title: '入力フォーム',
        elem: {
          customerID: {
            init: '',
            type: 'TextField',
            label: '企業コード (任意)'
          },
          userID: {
            init: '',
            type: 'TextField',
            label: 'ユーザーID (任意)'
          },
          password: {
            init: '',
            type: 'TextField',
            label: 'Password',
            password: true,
            unsafe: true
          }
        }
      }, {
        title: '追加のオプション',
        elem: {
          focusPassword: {
            init: true,
            type: 'Switch',
            label: 'パスワードにフォーカスする'
          },
          autoLogin: {
            init: false,
            type: 'Switch',
            label: '自動でログインする',
            warning: "                    \u30D1\u30B9\u30EF\u30FC\u30C9\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC\u306A\u3069\u3067\u81EA\u52D5\u5165\u529B\u3059\u308B\u3068\u304D\u306E\u307F\u6709\u52B9\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002\n                    \u3054\u5229\u7528\u306E\u74B0\u5883\u306B\u3088\u3063\u3066\u306F\u30ED\u30B0\u30A4\u30F3\u306B\u5931\u6557\u3057\u307E\u3059\u3002\n                    \u81EA\u52D5\u30ED\u30B0\u30A4\u30F3\u3055\u308C\u306A\u3044\u5834\u5408\u306F\u3001\u624B\u52D5\u3067\u30ED\u30B0\u30A4\u30F3\u3057\u3066\u304F\u3060\u3055\u3044\u3002\n                    "
          },
          fillPassword: {
            init: false,
            type: 'Switch',
            label: 'パスワードを入力する',
            warning: "                    \u30D1\u30B9\u30EF\u30FC\u30C9\u306F\u6697\u53F7\u5316\u3055\u308C\u307E\u305B\u3093\u3002\n                    \u6A5F\u5BC6\u60C5\u5831\u306F\u5165\u529B\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002\n                    "
          }
        }
      }],
      link: {
        target: null,
        text: null
      }
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/pages/index.ts":
/*!****************************!*\
  !*** ./src/pages/index.ts ***!
  \****************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/pages/App.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "App", function() { return _App__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if ( true && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    var publicUrl = new URL(".", window.location.href);

    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', function () {
      var swUrl = "".concat(".", "/service-worker.js");

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config); // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.

        navigator.serviceWorker.ready.then(function () {
          console.log('This web app is being served cache-first by a service ' + 'worker. To learn more, visit https://bit.ly/CRA-PWA');
        });
      } else {
        // Is not localhost. Just register service worker
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    }).catch(function (error) {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ "./src/theme/index.ts":
/*!****************************!*\
  !*** ./src/theme/index.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme */ "./src/theme/theme.ts");

/* harmony default export */ __webpack_exports__["default"] = (_theme__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/theme/theme.ts":
/*!****************************!*\
  !*** ./src/theme/theme.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["createMuiTheme"])({
  palette: {
    primary: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__["teal"][500]
    },
    secondary: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__["orange"].A400
    },
    error: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__["red"][500]
    },
    warning: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__["orange"][500]
    },
    info: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__["blue"][500]
    },
    success: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__["green"][500]
    },
    background: {
      default: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__["grey"][50]
    }
  },
  typography: {
    button: {
      textTransform: 'none'
    },
    fontFamily: '"Roboto","Noto Sans JP","Helvetica","Arial",YuGothic,"Yu Gothic",sans-serif',
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 500
  },
  layout: {
    drawerWidth: 240
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          '&::-webkit-scrollbar': {
            width: 6
          },
          '&::-webkit-scrollbar-track': {},
          '&::-webkit-scrollbar-thumb': {
            background: '#ccc',
            borderRadius: 3
          }
        },
        body: {
          textRendering: 'optimizeLegibility'
        }
      }
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./src/utilitys/chromeApi.ts":
/*!***********************************!*\
  !*** ./src/utilitys/chromeApi.ts ***!
  \***********************************/
/*! exports provided: isChrome, setChromeStorageLocal, setChromeStorageSync, getChromeStorageLocal, getChromeStorageSync, closeChromeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isChrome", function() { return isChrome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setChromeStorageLocal", function() { return setChromeStorageLocal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setChromeStorageSync", function() { return setChromeStorageSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChromeStorageLocal", function() { return getChromeStorageLocal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChromeStorageSync", function() { return getChromeStorageSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeChromeTab", function() { return closeChromeTab; });
/* global chrome */
var isChrome = function isChrome() {
  return Boolean(chrome.storage);
};
var setChromeStorageLocal = function setChromeStorageLocal(obj, callback) {
  chrome.storage.local.set(obj, callback);
};
var setChromeStorageSync = function setChromeStorageSync(obj, callback) {
  chrome.storage.sync.set(obj, callback);
};
var getChromeStorageLocal = function getChromeStorageLocal(key, callback) {
  chrome.storage.local.get(key, function (res) {
    callback(res);
  });
};
var getChromeStorageSync = function getChromeStorageSync(key, callback) {
  chrome.storage.sync.get(key, function (res) {
    callback(res);
  });
};
var closeChromeTab = function closeChromeTab() {
  return chrome.tabs.getCurrent(function (tab) {
    if (tab && tab.id) chrome.tabs.remove(tab.id, function () {});
  });
};

/***/ }),

/***/ "./src/utilitys/index.js":
/*!*******************************!*\
  !*** ./src/utilitys/index.js ***!
  \*******************************/
/*! exports provided: saveOptions, loadOptions, closeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveOptions", function() { return saveOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadOptions", function() { return loadOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeTab", function() { return closeTab; });
/* harmony import */ var _chromeApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chromeApi */ "./src/utilitys/chromeApi.ts");
/* harmony import */ var _storageApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageApi */ "./src/utilitys/storageApi.ts");


var saveOptions = Object(_chromeApi__WEBPACK_IMPORTED_MODULE_0__["isChrome"])() ? _chromeApi__WEBPACK_IMPORTED_MODULE_0__["setChromeStorageLocal"] : _storageApi__WEBPACK_IMPORTED_MODULE_1__["setLocalStorage"];
var loadOptions = Object(_chromeApi__WEBPACK_IMPORTED_MODULE_0__["isChrome"])() ? _chromeApi__WEBPACK_IMPORTED_MODULE_0__["getChromeStorageLocal"] : _storageApi__WEBPACK_IMPORTED_MODULE_1__["getLocalStorage"];
var closeTab = Object(_chromeApi__WEBPACK_IMPORTED_MODULE_0__["isChrome"])() ? _chromeApi__WEBPACK_IMPORTED_MODULE_0__["closeChromeTab"] : function () {
  alert('close');
};


/***/ }),

/***/ "./src/utilitys/storageApi.ts":
/*!************************************!*\
  !*** ./src/utilitys/storageApi.ts ***!
  \************************************/
/*! exports provided: setLocalStorage, getLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocalStorage", function() { return setLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocalStorage", function() { return getLocalStorage; });
var setLocalStorage = function setLocalStorage(obj, callback) {
  for (var _i = 0, _Object$entries = Object.entries(obj); _i < _Object$entries.length; _i++) {
    var data = _Object$entries[_i];

    try {
      localStorage.setItem(data[0], data[1]);
    } catch (e) {
      alert(e);
    } finally {
      callback();
    }
  }
};

var isBoolean = function isBoolean(arg) {
  return typeof arg === 'boolean' || arg === 'true' || arg === 'false';
};

var strToBoolean = function strToBoolean(arg) {
  return arg === 'true' ? true : arg === 'false' ? false : arg;
};

var getLocalStorage = function getLocalStorage(dummy, callback) {
  var tmp = ['customerID', 'userID', 'focusPassword'];
  var obj = {};

  for (var _i2 = 0, _tmp = tmp; _i2 < _tmp.length; _i2++) {
    var _key = _tmp[_i2];
    var res = localStorage.getItem(_key);
    obj[_key] = isBoolean(res) ? strToBoolean(res) : res;
  }

  callback(obj);
};

/***/ }),

/***/ 0:
/*!***********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.tsx ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\User\Documents\Script\nodejs\e-clock-in\node_modules\react-dev-utils\webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! C:\Users\User\Documents\Script\nodejs\e-clock-in\src\index.tsx */"./src/index.tsx");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map