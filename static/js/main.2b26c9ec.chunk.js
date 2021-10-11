(this["webpackJsonpredux-fundamentals"]=this["webpackJsonpredux-fundamentals"]||[]).push([[0],{39:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),c=n(10),a=n.n(c),l=n(18),i=n(8),u=n(3),s=n(16),d=n(12),j=n(13),b=n(15),h=n(14),f=(n(39),n(1)),p=function(e){var t=e.children;return Object(f.jsx)("div",{className:"Container",children:t})},m=n(24),O=n.n(m),v=function(e){var t=e.text,n=e.completed,o=e.onToggleCompleted,r=e.onDelete;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("input",{type:"checkbox",className:"TodoList__checkbox",checked:n,onChange:o}),Object(f.jsx)("p",{className:"TodoList__text",children:t}),Object(f.jsx)("button",{type:"button",className:"TodoList__btn",onClick:r,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})},x=n(25),g=n.n(x),y="todos/add",C="todos/delete",w="todos/changeFilter",k=function(e){return{type:y,payload:{id:g.a.generate(),text:e,completed:!1}}},_=function(e){return{type:C,payload:e}},T=function(e){return{type:w,payload:e}},N=(n(49),function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.text.toLowerCase().includes(n)}))}),D=Object(i.b)((function(e){var t=e.todos,n=t.items,o=t.filter;return{todos:N(n,o)}}),(function(e){return{onDeleteTodo:function(t){return e(_(t))},onToggleCompleted:function(){return null}}}))((function(e){var t=e.todos,n=e.onDeleteTodo,o=e.onToggleCompleted;return Object(f.jsx)("ul",{className:"TodoList",children:t.map((function(e){var t=e.id,r=e.text,c=e.completed;return Object(f.jsx)("li",{className:O()("TodoList__item",{"TodoList__item--completed":c}),children:Object(f.jsx)(v,{text:r,completed:c,onToggleCompleted:function(){return o(t)},onDelete:function(){return n(t)}})},t)}))})})),M=(n(50),function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={message:""},e.handleChange=function(t){e.setState({message:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.message),e.setState({message:""})},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:"TodoEditor",onSubmit:this.handleSubmit,children:[Object(f.jsx)("textarea",{className:"TodoEditor__textarea",value:this.state.message,onChange:this.handleChange}),Object(f.jsx)("button",{type:"submit",className:"TodoEditor__button",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})}}]),n}(o.Component)),S=Object(i.b)(null,(function(e){return{onSubmit:function(t){return e(k(t))}}}))(M),E=(n(51),Object(i.b)((function(e){return{value:e.todos.filter}}),(function(e){return{onChange:function(t){return e(T(t.target.value))}}}))((function(e){var t=e.value,n=e.onChange;return Object(f.jsxs)("div",{className:"TodoFilter",children:[Object(f.jsx)("p",{className:"TodoFilter__label",children:"\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u043c\u0443"}),Object(f.jsx)("input",{type:"text",className:"TodoFilter__input",value:t,onChange:n})]})}))),I=(n(52),n(53),document.querySelector("#modal-root")),L=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&(console.log("\u041d\u0430\u0436\u0430\u043b\u0438 ESC, \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u043a\u0443"),e.props.onClose())},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){console.log("Modal componentDidMount"),window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){console.log("Modal componentWillUnmount"),window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(f.jsx)("div",{className:"Modal__backdrop",onClick:this.handleBackdropClick,children:Object(f.jsx)("div",{className:"Modal__content",children:this.props.children})}),I)}}]),n}(o.Component),B=n(29),F=(n(54),["children","onClick"]),P=function(e){var t=e.children,n=e.onClick,o=Object(B.a)(e,F);return Object(f.jsx)("button",Object(s.a)(Object(s.a)({type:"button",className:"IconButton",onClick:n},o),{},{children:t}))};P.defaultProps={onClick:function(){return null},children:null};var R,A,K=P,W=["title","titleId"];function z(){return z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},z.apply(this,arguments)}function H(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function J(e,t){var n=e.title,r=e.titleId,c=H(e,W);return o.createElement("svg",z({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":r},c),n?o.createElement("title",{id:r},n):null,R||(R=o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),A||(A=o.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})))}var U=o.forwardRef(J),q=(n.p,{display:"flex",alignItems:"flex-end",marginBottom:20}),V=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1},e.toggleCompleted=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t?Object(s.a)(Object(s.a)({},e),{},{completed:!e.completed}):e}))}}))},e.calculateCompletedTodos=function(){return e.state.todos.reduce((function(e,t){return t.completed?e+1:e}),0)},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state.showModal;return Object(f.jsxs)(p,{children:[Object(f.jsxs)("div",{style:q,children:[Object(f.jsx)(E,{}),Object(f.jsx)(K,{onClick:this.toggleModal,"aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c todo",children:Object(f.jsx)(U,{width:"40",height:"40",fill:"#fff"})})]}),Object(f.jsx)(D,{}),e&&Object(f.jsx)(L,{onClose:this.toggleModal,children:Object(f.jsx)(S,{})})]})}}]),n}(o.Component),G=V,Q=function(e){var t=e.step,n=e.onIncrement,o=e.onDecrement;return Object(f.jsxs)("div",{className:"Counter__controls",children:[Object(f.jsxs)("button",{type:"button",onClick:o,children:["\u0423\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u043d\u0430 ",t]}),Object(f.jsxs)("button",{type:"button",onClick:n,children:["\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u043d\u0430 ",t]})]})},X=function(e){var t=e.value;return Object(f.jsx)("span",{className:"Counter__value",children:t})},Y="counter/Increment",Z="counter/Decrement";n(55);var $=Object(i.b)((function(e){return{value:e.counter.value,step:e.counter.step}}),(function(e){return{onIncrement:function(t){return e(function(e){return{type:Y,payload:e}}(t))},onDecrement:function(t){return e(function(e){return{type:Z,payload:e}}(t))}}}))((function(e){var t=e.value,n=e.step,o=e.onIncrement,r=e.onDecrement;return Object(f.jsxs)("div",{className:"Counter",children:[Object(f.jsx)(X,{value:t}),Object(f.jsx)(Q,{step:n,onIncrement:function(){return o(n)},onDecrement:function(){return r(n)}})]})}));function ee(){return Object(f.jsx)($,{})}var te=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(l.b,{to:"/counter",children:"\u0421\u0447\u0451\u0442\u0447\u0438\u043a"})}),Object(f.jsx)("li",{children:Object(f.jsx)(l.b,{to:"/todos",children:"\u0417\u0430\u043c\u0435\u0442\u043a\u0438"})})]}),Object(f.jsxs)(u.c,{children:[Object(f.jsx)(u.a,{path:"/counter",children:Object(f.jsx)(ee,{})}),Object(f.jsx)(u.a,{path:"/todos",children:Object(f.jsx)(G,{})})]})]})},ne=n(9),oe=n(27),re=Object(ne.combineReducers)({value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1?arguments[1]:void 0,n=t.type,o=t.payload;switch(n){case Y:return e+o;case Z:return e-o;default:return e}},step:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;return e}}),ce=n(28),ae=Object(ne.combineReducers)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,o=t.payload;switch(n){case y:return[].concat(Object(ce.a)(e),[o]);case C:return e.filter((function(e){return e.id!==o}));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,o=t.payload;return n===w?o:e}}),le=Object(ne.combineReducers)({counter:re,todos:ae}),ie=Object(ne.createStore)(le,Object(oe.composeWithDevTools)());n(60),n(61);a.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(l.a,{children:Object(f.jsx)(i.a,{store:ie,children:Object(f.jsx)(te,{})})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.2b26c9ec.chunk.js.map