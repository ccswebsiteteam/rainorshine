!function(e){e("*[data-timepicker]").attr("autocomplete","off").keydown(function(t){var l=e(this).val();if(!(t.keyCode>47&&t.keyCode<58||8==t.keyCode))return t.preventDefault(),!1;if(0==l.length)t.keyCode>49&&(t.preventDefault(),e(this).val(1));else if(1==l.length&&8!=t.keyCode)t.preventDefault(),t.keyCode>50?e(this).val(l+"2:"):e(this).val(l+String.fromCharCode(t.keyCode)+":");else if(2==l.length&&8!=t.keyCode)t.preventDefault(),t.keyCode>52?e(this).val(l+":5"):e(this).val(l+":"+String.fromCharCode(t.keyCode));else if(3==l.length&&8!=t.keyCode)t.keyCode>52&&(t.preventDefault(),e(this).val(l+"5"));else if(l.length>4&&8!=t.keyCode)return t.preventDefault(),!1})}(jQuery);