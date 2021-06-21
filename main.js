const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
`;

// 메소드
// const regexp = new RegExp('the', 'g');
const regexp = /the/;
console.log(regexp.test(str));
console.log(str.match(regexp));
console.log(str.replace(regexp, 'dog'));

// 플래그
const flagRegExp = /\.$/gim;
console.log(str.match(flagRegExp));

// 패턴(표현)
console.log(str.match(/^t/gim));
console.log(str.match(/d$/gm));
console.log(str.match(/h..p/gim));
console.log(str.match(/fox|do/g));
console.log(str.match(/https?/g));
console.log(str.match(/\b\w{2,3}\b/g));

const words = ['this1', 'is2', 'a3', 'awesome4'];
words.map((word) => {});
console.log(words);
