const omit = (obj, props) => {
  const newObj = {};
  for (let key in obj) {
    if (!props.includes(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

const mergedConfig = { a: 1, b: 2, c: 3 };
const configPropsWithExpr = ['b'];

const outputConfig = omit(mergedConfig, configPropsWithExpr);
console.log(outputConfig); // Output: { a: 1, c: 3 }
