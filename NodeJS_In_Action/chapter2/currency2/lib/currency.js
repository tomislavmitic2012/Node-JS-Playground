var Currency = function(canadianDollar) {
  var self = this;

  self.canadianDollar = canadianDollar;
}

Currency.prototype.roundTwoDecimals = function(amount) {
  return Math.round(amount * 100) / 100;
}

Currency.prototype.canadianToUS = function(canadian) {
  var self = this;
  return self.roundTwoDecimals(canadian * self.canadianDollar);
}

Currency.prototype.USToCanadian = function(us) {
  var self = this;
  return self.roundTwoDecimals(us / self.canadianDollar);
}

module.exports = Currency;
