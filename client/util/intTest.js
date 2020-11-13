const intTest = (target, next) => {
  const test = /^[0-9]\d*$/;
  return test.exec(target);
  // if (!test.exec(target)) {
  //   return ;
  // } else return null;
};

export default intTest;
