// Please explain what is wrong or missing with the typescript code below and how will you fix it.

const func1 = () : => {
  try {
    // the API below returns a dummy/test object { id: 1, title: '...', body: '...', userId: 1 }
    const res = fetch("https://jsonplaceholder.typicode.com/posts/1");
    const obj = res.json();
    return obj.title;
  } catch (e) {
    return null;
  }
};

const concatStrings = (s1: string, s2: string) => {
  return s1 + s2;
};

const s1 = "abc";
let s2 = null;
func1().then(res => {
  s2 = res;
});

const str = concatStrings(s1, s2);
console.log(str);
