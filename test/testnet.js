const Testnet = artifacts.require("Testnet");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Testnet", function (/* accounts */) {
  it("should assert true", async function () {
    await Testnet.deployed();
    return assert.isTrue(true);
  });
});
