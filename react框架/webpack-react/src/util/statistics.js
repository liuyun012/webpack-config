/**
 * USER
 * Created by samli on 07/09/2017.
 */
/**
 * USER
 * Created by samli on 31/08/2017.
 */
function Statistics(options) {
	var opt = options||{};
	this.event	= opt.event;
	this.category	= opt.category||'';
	this.action	= opt.action;
	this.label	= opt.label;
	this.value	= opt.value;
	this.nodeid	= opt.nodeid;
	this.init();
}
Statistics.prototype = {
	constructor : Statistics,
	init : function () {
		this.loadScript();
	},
	loadScript : function () {
		if (process.env.NODE_ENV == 'production') {
			var cnzzId = 1264020591;
			// var cnzzId = 1264032637;
		}else{
			var cnzzId = 1264032637;
		}
		var oScript = document.createElement('script');
		oScript.src = 'http://s13.cnzz.com/z_stat.php?id='+cnzzId;
		document.body.appendChild(oScript);
	},
	buryStatistics : function (options) {
		var opt = options||{};
		window._czc.push([
			this.event ,
			opt.category||this.category,
			opt.action||this.action,
			opt.label||this.label,
			opt.value||this.value,
			opt.nodeid||this.nodeid
		]);
	}
}
module.exports = Statistics
