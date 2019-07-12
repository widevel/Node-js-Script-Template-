var constants = require('./constants');

module.exports = (() => {
	
	var output;
	var eval_str;
	
	function render(input, callback) {
		
		output = "";
		eval_str = "";
		if(input == null) {
			callback(constants.ERROR_NULL_HTML, null);
			return;
		}
		
		if(input.trim().length == 0) {
			callback(constants.ERROR_NULL_HTML, null);
			return;
		}
		
		split = input.split(constants.TAG);
		
		for(var loopN=0;loopN<split.length;loopN++) {
			var split_row = split[loopN];
			if(loopN % 2 == 0 || loopN == 0) {
				pushOutput(split_row, constants.OUTPUT_MULTILINE);
			} else {
				if(isEchoSingleLine(split_row)) {
					pushOutput(formatEchoSingleLine(split_row), constants.OUTPUT_ECHO_SINGLELINE);
				} else {
					pushOutput(split_row, constants.OUTPUT_JSCODE);
				}
			}
		}
		
		try {
			eval(eval_str);
			callback(false, output);
		} catch(error) {
			callback(error, null);
		}
	}
	
	function echo(str) {
		output += str;
	}
	
	function formatEchoSingleLine(line) {
		return line.trim().substring(1, line.length);
	}
	
	function isEchoSingleLine(line) {
		if(line == null) return false;
		if(line.length == 0) return false;
		if(line.includes("\n") || line.includes("\r")) return false;
		return line.trim().substring(0, 1) == constants.ECHO_SINGLELINE_SEPARATOR;
	}
	
	function pushOutput(str, type) {
		if(type == constants.OUTPUT_MULTILINE) {
			eval_str += 'output += `'+str+'`;' + constants.NLINE + ';';
		}
		
		if(type == constants.OUTPUT_ECHO_SINGLELINE) {
			eval_str += 'output += ' + str + ';' + constants.NLINE + ';';
		}
		
		if(type == constants.OUTPUT_JSCODE) {
			eval_str += str;
		}
		
		
		
	}
	
	return {
		render: render,
	};
})();