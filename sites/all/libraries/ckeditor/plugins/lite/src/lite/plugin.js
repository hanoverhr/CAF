/* Source version: 1.1.10 */
(function(){var n={Events:{INIT:"lite:init",ACCEPT:"lite:accept",REJECT:"lite:reject",SHOW_HIDE:"lite:showHide",TRACKING:"lite:tracking"},Commands:{TOGGLE_TRACKING:"lite.ToggleTracking",TOGGLE_SHOW:"lite.ToggleShow",ACCEPT_ALL:"lite.AcceptAll",REJECT_ALL:"lite.RejectAll",ACCEPT_ONE:"lite.AcceptOne",REJECT_ONE:"lite.RejectOne",TOGGLE_TOOLTIPS:"lite.ToggleTooltips"}},h={show:true,path:"js/opentip-adapter.min.js",classPath:"OpentipAdapter",cssPath:"css/opentip.css",delay:500},d="Changed by %u %t",e=/^[\s\r\n]*$/,a=[{regex:/[\s]*title=\"[^\"]+\"/g,replace:""},{regex:/[\s]*data-selected=\"[^\"]+\"/g,replace:""}],f=[];function g(q){for(var p=f.length;p--;){var r=f[p];if(r.editor==q){return p}}return -1}function k(p){var q=g(p);return q>=0?f[q]:null}function j(p){var q=k(p);return q&&q.plugin}function m(p,q){f.push({plugin:q,editor:p})}function o(r,t,p,v){if(null===r||(typeof(r)=="undefined")){r=""}else{r=String(r)}p=String(p);var u=p.length;for(var q=r.length;q<t;q+=u){if(v){r+=padWidth}else{r=p+r}}return r}function l(p,q){return o(p,q,"0")}function c(r,t){var s=r.document,p=s.getBody(),q=false,u=function(){q=true};p.on(t,u);(CKEDITOR.env.version>7?s.$:s.$.selection.createRange())["execCommand"](t);p.removeListener(t,u);return q}function i(r){var p=new Date();var w=p.getDate();var u=p.getMonth();var v=p.getFullYear();var y=typeof(r);if(y=="string"||y=="number"){r=new Date(r)}var q=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];if(w==r.getDate()&&u==r.getMonth()&&v==r.getFullYear()){var s=Math.floor((p.getTime()-r.getTime())/60000);if(s<1){return"now"}else{if(s<2){return"1 minute ago"}else{if(s<60){return(s+" minutes ago")}else{var x=r.getHours();var s=r.getMinutes();return"on "+l(x,2)+":"+l(s,2,"0")}}}}else{if(v==r.getFullYear()){return"on "+q[r.getMonth()]+" "+r.getDate()}else{return"on "+q[r.getMonth()]+" "+r.getDate()+", "+r.getFullYear()}}}CKEDITOR.plugins.add("lite",{props:{deleteTag:"span",insertTag:"span",deleteClass:"ice-del",insertClass:"ice-ins",attributes:{changeId:"data-cid",userId:"data-userid",userName:"data-username",changeData:"data-changedata",time:"data-time"},stylePrefix:"ice-cts",preserveOnPaste:"p",css:"css/lite.css"},_scriptsLoaded:null,init:function(w){var t=k(w);if(t){return}if(!this._inited){b();this._inited=true}var B=this.path,v=new LITEPlugin(this.props,B),p=CKEDITOR.tools.extend({},w.config.lite||{}),y=p.tooltips;if(undefined==y){y=true}if(y===true){y=h}p.tooltips=y;m(w,v);v.init(w,p);w.on("destroy",(function(C){var D=g(C);if(D>=0){f.splice(D,1)}}).bind(this));if(this._scriptsLoaded){v._onScriptsLoaded();return}else{if(this._scriptsLoaded===false){return}}this._scriptsLoaded=false;var q=(typeof(jQuery)=="function"),A=this,r=p.jQueryPath||"js/jquery.min.js",s=(p.includeType?p["includes_"+p.includeType]:p.includes)||["lite-includes.js"];s=s.slice();for(var u=0,x=s.length;u<x;++u){s[u]=B+s[u]}if(!q){s.splice(0,0,this.path+r)}if(y.path){s.push(this.path+y.path)}var z=function(){if(s.length<1){A._scriptsLoaded=true;if(!q){jQuery.noConflict()}jQuery.each(f,(function(D,E){E.plugin._onScriptsLoaded()}))}else{var C=s.shift();CKEDITOR.scriptLoader.load(C,function(){z()},A)}};z(s)},findPlugin:function(p){return j(p)}});LITEPlugin=function(q,r){this.props={};this.path=r;for(var p in q){if(q.hasOwnProperty(p)){this.props[p]=q[p]}}};LITEPlugin.prototype={init:function(w,s){this._editor=w;this._domLoaded=false;this._editor=null;this._tracker=null;this._isVisible=true;this._liteCommandNames=[];this._canAcceptReject=true;this._removeBindings=[];w.ui.addToolbarGroup("lite");this._setPluginFeatures(w,this.props);this._changeTimeout=null;this._boundNotifyChange=this._notifyChange.bind(this);this._config=s;var p=s.acceptRejectInReadOnly===true;var q=[{command:n.Commands.TOGGLE_TRACKING,exec:this._onToggleTracking,title:"Toggle Tracking Changes",icon:"track_changes_on_off.png",trackingOnly:false},{command:n.Commands.TOGGLE_SHOW,exec:this._onToggleShow,title:"Toggle Tracking Changes",icon:"show_hide.png",readOnly:true},{command:n.Commands.ACCEPT_ALL,exec:this._onAcceptAll,title:"Accept all changes",icon:"accept_all.png",readOnly:p},{command:n.Commands.REJECT_ALL,exec:this._onRejectAll,title:"Reject all changes",icon:"reject_all.png",readOnly:p},{command:n.Commands.ACCEPT_ONE,exec:this._onAcceptOne,title:"Accept Change",icon:"accept_one.png",readOnly:p},{command:n.Commands.REJECT_ONE,exec:this._onRejectOne,title:"Reject Change",icon:"reject_one.png",readOnly:p},{command:n.Commands.TOGGLE_TOOLTIPS,exec:this._onToggleTooltips,readOnly:true}];this._isTracking=s.isTracking!==false;this._eventsBounds=false;w.on("contentDom",(function(A){this._onDomLoaded(A)}).bind(this));w.on("dataReady",(function(A){this._onAfterSetData(A)}).bind(this));var z=this.path;var r=s.commands||[n.Commands.TOGGLE_TRACKING,n.Commands.TOGGLE_SHOW,n.Commands.ACCEPT_ALL,n.Commands.REJECT_ALL,n.Commands.ACCEPT_ONE,n.Commands.REJECT_ONE];var y=this;function v(B){w.addCommand(B.command,{exec:B.exec.bind(y),readOnly:B.readOnly||false});if(B.icon&&B.title&&r.indexOf(B.command)>=0){var A=y._commandNameToUIName(B.command);w.ui.addButton(A,{label:B.title,command:B.command,icon:z+"icons/"+B.icon,toolbar:"lite"});if(B.trackingOnly!==false){y._liteCommandNames.push(B.command)}}}for(var u=0,x=q.length;u<x;++u){v(q[u])}if(w.addMenuItems){w.addMenuGroup("lite",50);var t={};t[n.Commands.ACCEPT_ONE]={label:"Accept Change",command:n.Commands.ACCEPT_ONE,group:"lite",order:1,icon:z+"icons/accept_one.png"};t[n.Commands.REJECT_ONE]={label:"Reject Change",command:n.Commands.REJECT_ONE,group:"lite",order:2,icon:z+"icons/reject_one.png"};w.addMenuItems(t)}if(w.contextMenu){w.contextMenu.addListener((function(B,C){if(B&&this._tracker&&this._tracker.currentChangeNode(B)){var A={};A[n.Commands.ACCEPT_ONE]=CKEDITOR.TRISTATE_OFF;A[n.Commands.REJECT_ONE]=CKEDITOR.TRISTATE_OFF;return A}else{return null}}).bind(this))}},toggleTracking:function(p,q){var t=(undefined===p)?!this._isTracking:p,s=this._editor;this._isTracking=t;this._setCommandsState(this._liteCommandNames,t?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED);this._updateTrackingState();this.toggleShow(t,false);this._setCommandsState(n.Commands.TOGGLE_TRACKING,t?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF);var r=s.ui.get(this._commandNameToUIName(n.Commands.TOGGLE_TRACKING));if(r){this._setButtonTitle(r,t?"Stop tracking changes":"Start tracking changes")}if(q!==false){s.fire(n.Events.TRACKING,{tracking:t})}},toggleShow:function(p,q){var s=(typeof(p)=="undefined")?(!this._isVisible):p;this._isVisible=s;if(this._isTracking){this._setCommandsState(n.Commands.TOGGLE_SHOW,s?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF)}this._tracker.setShowChanges(s&&this._isTracking);var r=this._editor.ui.get(this._commandNameToUIName(n.Commands.TOGGLE_SHOW));if(r){this._setButtonTitle(r,s?"Hide tracked changes":"Show tracked changes")}if(q!==false){this._editor.fire(n.Events.SHOW_HIDE,{show:s})}},isVisible:function(){return this._isVisible},isTracking:function(){return this._isTracking},acceptAll:function(p){this._tracker.acceptAll(p);this._cleanup();this._editor.fire(n.Events.ACCEPT,{options:p})},rejectAll:function(p){this._tracker.rejectAll(p);this._cleanup();this._editor.fire(n.Events.REJECT,{options:p})},setUserInfo:function(p){p=p||{};this._config.userId=String(p.id);this._config.userName=p.name||"";if(this._tracker){this._tracker.setCurrentUser({id:this._config.userId,name:this._config.userName})}},countChanges:function(p){return((this._tracker&&this._tracker.countChanges(p))||0)},enableAcceptReject:function(p){this._canAcceptReject=!!p;this._onIceChange()},filterIceElement:function(p){if(!p){return true}try{if(p.hasClass(this.props.insertClass)||p.hasClass(this.props.deleteClass)){return false}}catch(p){}return true},getCleanMarkup:function(q){if(null===q||undefined===q){q=(this._editor&&this._editor.getData())||""}for(var p=a.length-1;p>=0;--p){q=q.replace(a[p].regex,a[p].replace)}return q},getCleanText:function(){var p=this._getBody();if(!p){return""}var r=new Array();r.push("");var q=this._tracker.getDeleteClass();this._getCleanText(p,r,q);var s=r.join("\n");s=s.replace(/&nbsp(;)?/ig," ");return s},_getCleanText:function(u,t,s){var r=u.getAttribute("class");if(r&&r.indexOf(s)>=0){return}var p;if(p=((u.nodeName&&u.nodeName.toUpperCase()=="BR")||("block"==jQuery(u).css("display")))){if(e.test(t[t.length-1])){t[t.length-1]=""}else{t.push("")}}for(var v=u.firstChild;v;v=v.nextSibling){var q=v.nodeType;if(3==q){t[t.length-1]+=String(v.nodeValue)}else{if(1==q||9==q||11==q){this._getCleanText(v,t,s)}}}if(p){t.push("")}},_onDomLoaded:function(p){this._domLoaded=true;this._editor=p.editor;this._onReady()},_onScriptsLoaded:function(q,p){this._scriptsLoaded=true;this._onReady()},_loadCSS:function(r){var p=r.getElementsByTagName("head")[0];function q(t,u){var s=jQuery(p).find("#"+u);if(!s.length){s=r.createElement("link");s.setAttribute("rel","stylesheet");s.setAttribute("type","text/css");s.setAttribute("id",u);s.setAttribute("href",t);p.appendChild(s)}}q(this.path+"css/lite.css","__lite__css__");if(this._config.tooltips.cssPath){q(this.path+this._config.tooltips.cssPath,"__lite_tt_css__")}},_onReady:function(){if(!this._scriptsLoaded||!this._domLoaded){return}setTimeout(this._afterReady.bind(this),5)},_getBody:function(){try{return this._editor.editable().$}catch(p){return null}},_afterReady:function(){var v=this._editor,u=v.document.$,p=this._getBody(),r=this._config;this._loadCSS(u);if(!this._eventsBounds){this._eventsBounds=true;var t=this._onPaste.bind(this);v.on("afterCommandExec",this._onAfterCommand.bind(this));v.on("beforeCommandExec",this._onBeforeCommand.bind(this));if(this._config.handlePaste){v.on("paste",t,null,null,1)}v.on("beforeGetData",this._onBeforeGetData.bind(this));v.on("insertHtml",t,null,null,1);v.on("insertText",t,null,null,1);v.on("insertElement",t,null,null,1);v.on("mode",this._onModeChange.bind(this),null,null,1);v.on("readOnly",this._onReadOnly.bind(this))}if(this._tracker){if(p!=this._tracker.getContentElement()){this._tracker.stopTracking(true);jQuery(this._tracker).unbind();this._tracker=null}}if(null==this._tracker){var q={element:p,handleEvents:true,mergeBlocks:true,currentUser:{id:r.userId||"",name:r.userName||""},userStyles:r.userStyles,changeTypes:{insertType:{tag:this.props.insertTag,alias:this.props.insertClass,action:"Inserted"},deleteType:{tag:this.props.deleteTag,alias:this.props.deleteClass,action:"Deleted"}},hostMethods:{getHostRange:this._getHostRange.bind(this),makeHostElement:function(w){return new CKEDITOR.dom.element(w)},setHostRange:this._setHostRange.bind(this),hostCopy:this._hostCopy.bind(this)},tooltips:r.tooltips.show,tooltipsDelay:r.tooltips.delay};if(r.tooltips.classPath){try{this._tooltipsHandler=new window[r.tooltips.classPath]()}catch(v){}if(!this._tooltipsHandler){this._logError("Unable to create tooltip handler",r.tooltips.classPath)}else{var s=this._hideTooltip.bind(this);this._tooltipsHandler.init(r.tooltips);q.hostMethods.showTooltip=this._showTooltip.bind(this);q.hostMethods.hideTooltip=s;q.hostMethods.beforeDelete=q.hostMethods.beforeInsert=s}}jQuery.extend(q,this.props);this._tracker=new ice.InlineChangeEditor(q);try{this._tracker.startTracking();this.toggleTracking(this._isTracking,false);this._updateTrackingState();jQuery(this._tracker).on("change",this._onIceChange.bind(this)).on("textChange",this._onIceTextChanged.bind(this));v.fire(n.Events.INIT,{lite:this});this._onSelectionChanged(null);this._onIceChange(null)}catch(v){this._logError("ICE plugin init:",v)}}},_onToggleShow:function(p){this.toggleShow()},_onToggleTracking:function(p){this.toggleTracking()},_onRejectAll:function(p){this.rejectAll()},_onAcceptAll:function(p){this.acceptAll()},_onAcceptOne:function(q){var p=this._tracker.currentChangeNode();if(p){this._tracker.acceptChange(p);this._cleanup();this._editor.fire(n.Events.ACCEPT);this._onSelectionChanged(null)}},_onRejectOne:function(q){var p=this._tracker.currentChangeNode();if(p){this._tracker.rejectChange(p);this._cleanup();this._editor.fire(n.Events.REJECT);this._onSelectionChanged(null)}},_onToggleTooltips:function(p){this._tracker&&this._tracker.toggleTooltips()},_cleanup:function(){var p=this._getBody();empty=jQuery(p).find(self.insertSelector+":empty,"+self.deleteSelector+":empty");empty.remove();this._onSelectionChanged(null)},_setButtonTitle:function(p,r){var q=jQuery("#"+p._.id);q.attr("title",r)},_onAfterCommand:function(q){var p=this._tracker&&this._isTracking&&q.data&&q.data.name;if("undo"==p||"redo"==p){this._tracker.reload()}},_onBeforeCommand:function(q){var p=this._tracker&&this._isTracking&&q.data&&q.data.name;if("cut"==p){}},_onModeChange:function(p){this._updateTrackingState();setTimeout(this._onIceChange.bind(this),0)},_onBeforeGetData:function(p){if(this._tooltipsHandler){this._tooltipsHandler.hideAll()}},_onAfterSetData:function(p){if(this._tracker&&this._tracker.isTracking()){this._tracker.reload()}},_onReadOnly:function(p){this._updateTrackingState()},_updateTrackingState:function(){if(this._tracker){var p=this._isTracking&&this._editor.mode=="wysiwyg"&&!this._editor.readOnly;this._tracker.toggleChangeTracking(p);for(var q=this._removeBindings.length-1;q>=0;--q){this._removeBindings[q].removeListener()}this._removeBindings=[];if(p){this._removeBindings.push(this._editor.on("selectionChange",this._onSelectionChanged.bind(this)))}}},_onPaste:function(r){if(!this._tracker||!this._isTracking||!r){return true}var t=r.data||{},w=false,q=null,s=(r.name=="insertElement")&&t.$;if(!t){return}if("string"==typeof t){t={dataValue:t,type:"text"}}if(s){w=s.getAttribute("data-track-changes-ignore")}else{if(t.dataValue&&"html"==(t.type||t.mode)){try{s=jQuery(t.dataValue);w=s&&s.attr("data-track-changes-ignore")}catch(v){}}}if(w){return true}if("string"==typeof t.dataValue){try{var u=this._editor.document.$,p=u.createElement("div");p.innerHTML=String(t.dataValue);p=this._tracker.getCleanDOM(p);if(!p.innerHTML){return true}q=jQuery.makeArray(p.childNodes)}catch(v){this._logError("ice plugin paste:",v)}}else{if(s){q=s}else{return true}}if(q){this._beforeInsert();this._tracker.insert(q);this._afterInsert()}r.cancel();this._onIceTextChanged();return false},_setCommandsState:function(p,s){if(typeof(p)=="string"){p=p.split(",")}for(var q=p.length-1;q>=0;--q){var r=this._editor.getCommand(p[q]);if(r){r.setState(s)}}},_onSelectionChanged:function(q){var p=this._isTracking&&this._tracker&&this._tracker.isInsideChange();var r=p&&this._canAcceptReject?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED;this._setCommandsState([n.Commands.ACCEPT_ONE,n.Commands.REJECT_ONE],r)},_onIceChange:function(r){var p=this._isTracking&&this._tracker&&this._tracker.hasChanges();var q=p&&this._canAcceptReject?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED;this._setCommandsState([n.Commands.ACCEPT_ALL,n.Commands.REJECT_ALL],q);this._onSelectionChanged();if(r){this._triggerChange()}},_onIceTextChanged:function(p){this._triggerChange()},_triggerChange:function(){if(!this._changeTimeout){this._changeTimeout=setTimeout(this._boundNotifyChange,1)}},_notifyChange:function(){this._changeTimeout=null;this._editor.fire("change")},_commandNameToUIName:function(p){return p.replace(".","_")},_setPluginFeatures:function(t,s){if(!t||!t.filter||!t.filter.addFeature){return}try{function q(v){var x=[s.deleteClass,s.insertClass];for(var w=0;w<10;++w){x.push(s.stylePrefix+"-"+w)}return"("+x.join(",")+")"}function p(v){var w=["title"];for(var x in s.attributes){if(s.attributes.hasOwnProperty(x)){var y=s.attributes[x];if((typeof y=="string")&&y.indexOf("data-")==0){w.push(y)}}}return"["+w.join(",")+"]"}var r=[];if(s.insertTag){r.push(q(s.insertTag));r.push(p(s.insertTag));t.filter.addFeature({name:"lite1",allowedContent:s.insertTag+r.join("")})}if(s.deleteTag&&s.deleteTag!=s.insertTag){r.push(q(s.deleteTag));r.push(p(s.deleteTag));t.filter.addFeature({name:"lite2",allowedContent:s.insertTag+r.join("")})}}catch(u){this._logError(u)}},_setHostRange:function(p){var q=this._editor&&this._editor.getSelection();if(q){q.selectRanges([p])}},_hostCopy:function(){try{if(CKEDITOR.env.ie){c(this._editor,"copy")}else{this._editor.document.$.execCommand("copy",false,null)}}catch(p){_logError(p)}},_getHostRange:function(){var r=this._editor&&this._editor.getSelection(),p=r&&r.getRanges(),q=p&&p[0];return q||null},_showTooltip:function(q,s){var p=this._config.tooltips;if(p.show&&this._tooltipsHandler){var r=this._makeTooltipTitle(s);this._tooltipsHandler.showTooltip(q,r,this._editor.container.$)}},_hideTooltip:function(p){if(this._tooltipsHandler){if(p){this._tooltipsHandler.hideTooltip(p)}else{this._tooltipsHandler.hideAll()}}},_beforeInsert:function(){this._editor.fire("saveSnapshot")},_afterInsert:function(){var p=this._editor;p.getSelection().scrollIntoView()},_logError:function(){var q=typeof console;if(q!="undefined"&&console.error){var p=Array.prototype.slice.apply(arguments);console.error(p.join(" "))}},_makeTooltipTitle:function(r){var q=this._config.tooltipTemplate||d;var p=new Date(r.time);q=q.replace(/%t/g,i(p));q=q.replace(/%u/g,r.username);q=q.replace(/%dd/g,l(p.getDate(),2));q=q.replace(/%d/g,p.getDate());q=q.replace(/%mm/g,l(p.getMonth()+1,2));q=q.replace(/%m/g,p.getMonth()+1);q=q.replace(/%yy/g,l(p.getYear()-100,2));q=q.replace(/%y/g,p.getFullYear());q=q.replace(/%nn/g,l(p.getMinutes(),2));q=q.replace(/%n/g,p.getMinutes());q=q.replace(/%hh/g,l(p.getHours(),2));q=q.replace(/%h/g,p.getHours());return q}};function b(){Function.prototype.bind=Function.prototype.bind||function(){var r=this,q=Array.prototype.slice.call(arguments),p=q.shift();return function(){return r.apply(p,q.concat(Array.prototype.slice.call(arguments)))}};Array.prototype.indexOf=Array.prototype.indexOf||function(r){if(this==null){throw new TypeError()}var s=Object(this);var p=s.length>>>0;if(p===0){return -1}var u=0;if(arguments.length>1){u=Number(arguments[1]);if(u!=u){u=0}else{if(u!=0&&u!=Infinity&&u!=-Infinity){u=(u>0||-1)*Math.floo1r(Math.abs(u))}}}if(u>=p){return -1}var q=u>=0?u:Math.max(p-Math.abs(u),0);for(;q<p;q++){if(q in s&&s[q]===r){return q}}return -1};Array.prototype.lastIndexOf=Array.prototype.indexOf||function(q){if(this==null){throw new TypeError()}var r=Object(this);var p=r.length>>>0;while(--p>=0){if(p in r&&r[p]===q){return p}}return -1}}})();
/* Copyright (C) 2014 LoopIndex - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the LoopIndex Comments CKEditor plugin license.
 *
 * You should have received a copy of the LoopIndex Comments CKEditor plugin license with
 * this file. If not, please write to: loopindex@gmail.com, or visit http://www.loopindex.com
 * written by (David *)Frenkiel (https://github.com/imdfl) 
 */