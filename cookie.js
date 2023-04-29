
		function saveInputs() {
			var inputs = document.getElementsByClassName("deneme");
			
			for (var i = 0; i < inputs.length; i++) {
				document.cookie = inputs[i].id + "=" + inputs[i].value + "; path=/";
			}
		}

		
		function loadInputs() {
			var inputs = document.getElementsByTagName("input");
			for (var i = 0; i < inputs.length; i++) {
				var inputCookie = getCookie(inputs[i].id);
				if (inputCookie != "") {
					inputs[i].value = inputCookie;
				}
			}
		}

		
		function getCookie(name) {
			var value = "; " + document.cookie;
			var parts = value.split("; " + name + "=");
			if (parts.length == 2) {
				return parts.pop().split(";").shift();
			}
			return "";
		}
