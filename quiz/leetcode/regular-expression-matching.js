const isMatch = (s, p) => new RegExp(p).exec(s)?.[0] === s;
