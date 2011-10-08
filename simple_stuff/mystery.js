var mystery = function(n) {
  if (Math.floor(n) == 0) return 0;
  return 1 + mystery(Math.floor(n/2));
};

var A = [1,2,4,8,10,16,32,1024,2048,100];

for (i = 0, max = A.length; i < max; i++) {
  console.log(mystery(A[i]));
}
