(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,o){e.exports=o(18)},16:function(e,t,o){},17:function(e,t,o){},18:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),d=o(7),r=o.n(d),c=(o(16),o(9)),l=o(1),i=o(2),p=o(4),s=o(3),u=o(5),m=(o(17),function(e){function t(){var e,o;Object(l.a)(this,t);for(var n=arguments.length,a=new Array(n),d=0;d<n;d++)a[d]=arguments[d];return(o=Object(p.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).completedTodo=function(){o.props.completedTodo(o.props.todo.id)},o.deleteTodo=function(){o.props.deleteTodo(o.props.todo.id)},o}return Object(u.a)(t,e),Object(i.a)(t,[{key:"getStyle",value:function(){return{padding:"5px",textDecoration:this.props.todo.completed?"line-through":"none",display:"inline-block"}}},{key:"render",value:function(){return a.a.createElement("div",{style:{borderBottom:"1px solid black"}},a.a.createElement("input",{type:"checkbox",checked:this.props.todo.completed,onChange:this.completedTodo}),a.a.createElement("h2",{style:this.getStyle()},this.props.todo.title),a.a.createElement("button",{style:f,onClick:this.deleteTodo},"X"))}}]),t}(n.Component)),f={backgroundColor:"red",color:"white",border:"0px",borderRadius:"50%",padding:"4px 7px",fontSize:"10px",cursor:"pointer"},h=m,b=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return this.props.todos.map(function(t){return a.a.createElement(h,{todo:t,key:t.id,completedTodo:e.props.completedTodo,deleteTodo:e.props.deleteTodo})})}}]),t}(n.Component);function y(){return a.a.createElement("div",null,a.a.createElement("header",{style:T},a.a.createElement("b",null,"To Do")))}var T={background:"#333",color:"#fff",textAlign:"center",padding:"10px",fontSize:"24px"},j=o(8),v=function(e){function t(){var e,o;Object(l.a)(this,t);for(var n=arguments.length,a=new Array(n),d=0;d<n;d++)a[d]=arguments[d];return(o=Object(p.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={title:""},o.updateTitle=function(e){o.setState(Object(j.a)({},e.target.name,e.target.value))},o.addTodo=function(e){e.preventDefault(),o.props.addTodo(o.state.title),o.setState({title:""})},o}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("form",{style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo ...",style:{flex:"10",padding:"5px"},onChange:this.updateTitle}),a.a.createElement("input",{type:"submit",value:"Submit",style:{flex:"1"},onClick:this.addTodo})))}}]),t}(n.Component),O=function(e){function t(){var e,o;Object(l.a)(this,t);for(var n=arguments.length,a=new Array(n),d=0;d<n;d++)a[d]=arguments[d];return(o=Object(p.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[{id:1,title:"Item 1",completed:!1},{id:2,title:"Item 2",completed:!0},{id:3,title:"Item 3",completed:!1}]},o.completedTodo=function(e){o.setState({todos:o.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t})})},o.deleteTodo=function(e){o.setState({todos:o.state.todos.filter(function(t){return t.id!==e})})},o.addTodo=function(e){var t={id:o.state.todos.length+1,title:e,completed:!1};o.setState({todos:[].concat(Object(c.a)(o.state.todos),[t])})},o}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(y,null),a.a.createElement(v,{addTodo:this.addTodo}),a.a.createElement(b,{todos:this.state.todos,completedTodo:this.completedTodo,deleteTodo:this.deleteTodo}))}}]),t}(n.Component);r.a.render(a.a.createElement(O,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.af2caba2.chunk.js.map