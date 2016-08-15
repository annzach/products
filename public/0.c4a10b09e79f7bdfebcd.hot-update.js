webpackHotUpdate(0,{

/***/ 382:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

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
	  _component: {}
	};

	var _homeReenaProductorganizerNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/home/reena/productorganizer/src/components/Registration.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _homeReenaProductorganizerNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/home/reena/productorganizer/src/components/Registration.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _homeReenaProductorganizerNode_modulesReactTransformHmrLibIndexJs2(_homeReenaProductorganizerNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var Registration = _wrapComponent('_component')(_react3.default.createClass({
	  displayName: 'Registration',

	  getInitialState: function getInitialState() {
	    return {
	      name: '',
	      description: '',
	      price: ''
	    };
	  },

	  onInputChange: function onInputChange(event) {
	    this.setState({ name: event.target.value });
	  },
	  onInputChangeDesc: function onInputChangeDesc(event) {
	    this.setState({ description: event.target.value });
	  },
	  OnInputChangeProduct: function OnInputChangeProduct(event) {
	    this.setState({ price: event.target.value });
	  },
	  addProduct: function addProduct() {
	    var url = "/productorganizer/";
	    fetch(url, {
	      method: "POST",
	      headers: { "Content-type": "application/json" },
	      body: JSON.stringify(this.state)
	    });
	    console.log("this.state:", this.state);
	  },

	  render: function render() {
	    console.log('Registration');
	    return _react3.default.createElement(
	      'div',
	      null,
	      _react3.default.createElement(
	        'li',
	        null,
	        _react3.default.createElement('input', { type: 'text', value: this.state.name, placeholder: 'Name', onChange: this.onInputChange })
	      ),
	      _react3.default.createElement(
	        'li',
	        null,
	        _react3.default.createElement('input', { type: 'text', value: this.state.description, placeholder: 'Description', onChange: this.onInputChangeProduct })
	      ),
	      _react3.default.createElement(
	        'li',
	        null,
	        _react3.default.createElement('input', { type: 'text', value: this.state.price, placeholder: 'price', onChange: this.onInputChangeDesc })
	      ),
	      _react3.default.createElement(
	        'button',
	        { className: 'btn btn-success btn-sm', onClick: this.addProduct },
	        'submit'
	      )
	    );
	  }
	}));

	exports.default = Registration;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(239)(module)))

/***/ }

})