/* ScriptInclude
 * https://github.com/EvanHahn/ScriptInclude
 * by Evan Hahn
 * License: Unlicense
 */

;(function() {

	var doc = document;
	var head = doc.head || (doc.getElementsByTagName("head")[0]);

	var noop = function() {};

	var include = function() {

		var toLoad = arguments.length;

		var callback;
		var hasCallback = arguments[toLoad - 1] instanceof Function;
		if (hasCallback) {
			toLoad --;
			callback = arguments[arguments.length - 1];
		} else {
			callback = noop;
		}

		var script;
		for (var i = 0; i < toLoad; i ++) {

			script = doc.createElement("script");
			script.src = arguments[i];

			script.onload = script.onerror = function() {
				toLoad --;
				if (toLoad === 0)
					callback.call();
			};

			head.appendChild(script);

		}

	};

	if (typeof exports !== "undefined")
		exports = include;
	else
		this.include = include;

})();
