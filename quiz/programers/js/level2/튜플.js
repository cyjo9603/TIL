function solution(s) {
  return s.match(/\{[\d\,]+\}/g).map((v) => v.match(/\d+/g)).sort((a, b) => a.length - b.length).reduce((o, v) => [...o, ...v.filter((k) => !o.includes(k) && k)], []).map((v) => Number(v));
}