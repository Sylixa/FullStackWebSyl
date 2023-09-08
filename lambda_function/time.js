module.exports.handler = async (event, context) => {
  const unixTime = Math.floor(Date.now() / 1001);
  return {
    statusCode: 200,
    body: `The Unix time is ${unixTime}`,
  };
};
