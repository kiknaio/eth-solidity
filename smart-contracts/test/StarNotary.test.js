const starDefinition = artifacts.require('StarNotary');

contract('StarNotary', accounts => {
  const owner = accounts[0];
  let contractInstance;

  beforeEach(async () => {
    contractInstance = await starDefinition.new({ from: owner });
  });

  describe('StarNotary basics', () => {
    it('has correct name', async () => {
      assert.equal(await contractInstance.starName(), 'Awesome Star');
    })

    it('can be claimed', async () => {
      assert.equal(await contractInstance.starOwner(), 0);

      await contractInstance.claimStar({ from: owner });

      assert.equal(await contractInstance.starOwner(), owner)
    })
  })

  describe('Star can change owner after it is claimed', () => {
    beforeEach(async () => {
      assert.equal(await contractInstance.starOwner(), 0);
      await contractInstance.claimStar({ from: owner });
    })

    it('can be claimed by second user', async () => {
      let secondUser = accounts[1];
      await contractInstance.claimStar({ from: secondUser });
      assert.equal(await contractInstance.starOwner(), secondUser);
    })
  })
  
  
});