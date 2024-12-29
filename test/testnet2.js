const Testnet2 = artifacts.require("Testnet2");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Testnet2", function (/* accounts */) {
  it("should assert true", async function () {
    await Testnet2.deployed();
    return assert.isTrue(true);
  });
});
