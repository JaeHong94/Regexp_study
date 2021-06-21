const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과 백두산이 마르고_닳도록
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
console.log(str.match(/[0-9]{1,}/g));
console.log(str.match(/[가-힣]{1,}/g));
console.log(str.match(/\w/g));
console.log(str.match(/\bf\w{1,}\b/g));
console.log(str.match(/\d{1,}/g));

const h = `  the hello  world   !

`;
console.log(h.replace(/\s/g, ''));
console.log(str.match(/.{1,}(?=@)/g));
console.log(str.match(/(?<=@).{1,}/g));
