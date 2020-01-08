var Chat = artifacts.require("./Chat.sol");

contract('Chat', (accounts) => {
  var root = accounts[0];
  var alice = accounts[1];
  var bob = accounts[2];
  var charlie = accounts[3];

  it("should work ;)", async () =>
  {
    var instance = await Chat.deployed();
    instance.Message((err, e) =>
    {
      if(err)
      {
        console.log(err)
        return;
      }
      console.log(e.returnValues[0] + ": " + web3.utils.toAscii(e.returnValues[1]));
    });

    await instance.sendMessage(web3.utils.fromAscii("Hello Bob"), {from: alice});
    await instance.sendMessage(web3.utils.fromAscii("Hello Alice"), {from: bob});

    var messages = (await instance.getPastEvents("Message")).map((e) =>
    {
      return {sender:e.returnValues[0], message:e.returnValues[1]}
    });
    console.log(messages);
  });
  //
  // it("should list events", async () =>
  // {
  //   var instance = await Chat.deployed();
  //
  //   var bytes = web3.utils.hexToBytes("0x88ffaa");
  //   await instance.sendMessage(bytes, {from: alice});
  //
  //   // const filter = { fromBlock: 0, toBlock: 'latest'}; // filter for your address
  //   // const events = instance.allEvents(filter); // get all events
  //   var events = await instance.getPastEvents("Message");
  //   console.log(events.map((e) =>
  //   {
  //     return {addr:e.address, dataAddr:e.returnValues[0], data:e.returnValues[1]}
  //   }));
  //
  //
  // })
});
