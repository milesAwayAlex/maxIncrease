const increase = arr => {
  const res = arr.reduceRight(
    (a, e) => {
      if (e > a.maxRight) a.maxRight = e;
      const d = a.maxRight - e || -1;
      if (d > a.incRight) a.incRight = d;
      return a;
    },
    {incRight: -1, maxRight: -Infinity}
  );
  return res.incRight;
};
export default increase;
