const solution = (newId) => {
  const currentId = (
    newId
      .toLowerCase()
      .replace(/[^a-z0-9-_.]/g, '')
      .replace(/\.{2,}/g, '.')
      .replace(/^\.|\.$/g, '') || 'a'
  )
    .slice(0, 15)
    .replace(/\.$/, '');

  return currentId.padEnd(3, currentId.substr(-1, 1));
};
