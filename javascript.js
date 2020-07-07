function start_palindrome()
		{
			var strings = document.getElementById('userInput').value;
			var result = palindrome_checker(strings);
			alert('The String is "'+strings +'" is '+result+'.');
		}
		
		function palindrome_checker(strings)
		{
			var orignal_word;
			var reverse_word = strings;
			
			strings = strings.toLowerCase();
			orignal_word = strings;
		strings = strings.split(''); 
			strings = strings.reverse(); 
			strings = strings.join(''); 
					
	 	if(orignal_word == reverse_word)
	 	{
				return 'A PALINDROME'; 
			} 
	 	else
			{
				return 'NOT A PALINDROME';
			}
		}
		
		function clear_now()
		{
		 document.getElementById('userInput').value="";
		 document.getElementById('userInput').focus();
		} 		