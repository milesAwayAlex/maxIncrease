const increase = arr => {
  // simple algorithm in O(n), starting from the right
  const res = arr.reduceRight(
    (a, e) => {
      // check if the point is highest so far (to the right)
      if (e > a.maxRight) a.maxRight = e;
      // find increase, set -1 for no increase
      const d = a.maxRight - e || -1;
      // check if the increase is largest so far
      if (d > a.incRight) a.incRight = d;
      return a;
    },
    // initialize the accumulator
    {incRight: -1, maxRight: -Infinity}
  );
  return res.incRight;
};
export default increase;
