function makeid(l) {
	const word = 'qwertyuiop123asdfghjkl456zxcvbnm789QWERTYUIOP098LKJHGFDSA765ZXCVBNM1234'
	let ans = '';
	const len = word.length;
	for(let i = 0; i < l; i++){
		ans += word[Math.floor(Math.random() * len)];
	}
	return ans;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
