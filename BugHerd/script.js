/*
Created by Ralf Becher
Contact: ralf.becher@web.de
irregular.bi
Tested on QV 11.2 SR9

irregular.bi takes no responsibility for any code.
Use at your own risk. 
*/
(function($){
	var bugHerdApiKey = '';
		bugHerdApiKeyVariable = 'vBugHerdApiKey';
		Qva.AddDocumentExtension('BugHerd', function() {
			Qv.GetCurrentDocument().GetAllVariables(function(vars) {
				var searchVar = $.grep(vars, function(e, i) {
									return e.name === bugHerdApiKeyVariable;
								});
				if (searchVar.length > 0) {
					bugHerdApiKey = searchVar[0].value;
					$.getScript("http://www.bugherd.com/sidebarv2.js?apikey=" + bugHerdApiKey, function(){
						console.log("Running BugHerd..");
					});
				}
			});
		});
})(jQuery);
