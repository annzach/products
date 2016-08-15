webpackHotUpdate(0,{

/***/ 383:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(240);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(245);

	var _index4 = _interopRequireDefault(_index3);

	var _react2 = __webpack_require__(1);

	var _react3 = _interopRequireDefault(_react2);

	var _index5 = __webpack_require__(246);

	var _index6 = _interopRequireDefault(_index5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _components = {
	  _component: {},
	  _component2: {}
	};

	var _homeReenaProductorganizerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: "/home/reena/productorganizer/src/components/Display.js",
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _homeReenaProductorganizerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: "/home/reena/productorganizer/src/components/Display.js",
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _homeReenaProductorganizerNode_modulesReactTransformHmrLibIndexJs2(_homeReenaProductorganizerNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var Display = _wrapComponent("_component")(_react3.default.createClass({
	  displayName: "Display",


	  getInitialState: function getInitialState() {
	    return {
	      data: []
	    };
	  },

	  DeleteMe: function DeleteMe(id) {

	    var url = "/productorganizer/" + id;
	    fetch(url, {
	      method: "DELETE",
	      headers: { "Content-type": "application/json" }

	    }).then(function (res) {
	      return res.json();
	    }).catch(function (err) {
	      return console.log('err', 'err');
	    });
	  },

	  getMe: function getMe(event) {
	    var _this = this;

	    var url = "/productorganizer/";
	    fetch(url, {
	      method: "GET",
	      headers: {
	        "Content-type": "application/json"
	      }
	    }).then(function (res) {
	      return res.json();
	    }).then(function (data) {

	      _this.setState({ data: data });
	    }).catch(function (err) {
	      return console.log('err', 'err');
	    });
	  },

	  render: function render() {
	    console.log('in display page');
	    return _react3.default.createElement(
	      "div",
	      null,
	      _react3.default.createElement(
	        "div",
	        null,
	        _react3.default.createElement(
	          "button",
	          { value: "btn0", onClick: this.getMe },
	          "Display"
	        )
	      ),
	      _react3.default.createElement(DataDisplay, { data: this.state.data, "delete": this.DeleteMe, modify: this.ModifyMe })
	    );
	  }
	}));

	var DataDisplay = _wrapComponent("_component2")(_react3.default.createClass({
	  displayName: "DataDisplay",


	  DeleteMe: function DeleteMe(event) {
	    var id = event.target.value;
	    this.props.delete(id);
	  },

	  ModifyMe: function ModifyMe() {
	    console.log("modify me");
	  },
	  render: function render() {
	    var _this2 = this;

	    console.log('state', this.props.data);
	    var product = this.props.data.map(function (info) {
	      return _react3.default.createElement(
	        "tr",
	        { key: info.id },
	        _react3.default.createElement(
	          "td",
	          null,
	          info.name
	        ),
	        _react3.default.createElement(
	          "td",
	          null,
	          info.description
	        ),
	        _react3.default.createElement(
	          "td",
	          null,
	          info.price
	        ),
	        _react3.default.createElement(
	          "td",
	          null,
	          _react3.default.createElement(
	            "button",
	            { value: info.id, onClick: _this2.DeleteMe },
	            "Delete"
	          ),
	          _react3.default.createElement(
	            "button",
	            { onClick: _this2.ModifyMe },
	            "Modify"
	          )
	        )
	      );
	    });
	    return _react3.default.createElement(
	      "table",
	      { className: "table table-bordered" },
	      _react3.default.createElement(
	        "thead",
	        null,
	        _react3.default.createElement(
	          "tr",
	          null,
	          _react3.default.createElement(
	            "th",
	            null,
	            "Name"
	          ),
	          _react3.default.createElement(
	            "th",
	            null,
	            "Product"
	          ),
	          _react3.default.createElement(
	            "th",
	            null,
	            "Price"
	          ),
	          _react3.default.createElement(
	            "th",
	            null,
	            "Delete/Modify"
	          )
	        )
	      ),
	      _react3.default.createElement(
	        "tbody",
	        null,
	        product
	      )
	    );
	  }
	}));

	exports.default = Display;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(239)(module)))

/***/ }

})