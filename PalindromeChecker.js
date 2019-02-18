function palindrome(str) {
  // Good luck!
  let newStr= str.replace(new RegExp(/[^A-Za-z0-9]/, 'gi'), '').toLowerCase();

  let middle= parseInt(newStr.length / 2) - 1;

  console.log("newStr= " + newStr);
  console.log('middle= ' + middle);

  let isPalindrome= true;

  for (let index= 0; index <= middle; index++)	{
  	if (newStr[index] !== newStr[newStr.length - 1 - index])	{
  		isPalindrome= false;
  		break;
  	}
  }

  return isPalindrome;
}



console.log(palindrome("five|\_/|four"));