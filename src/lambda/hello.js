const headers = {
  "Access-Control-Allow-Origin": "*",
};

module.exports.handler = async (event, context) => {
  return {
    headers,
    statusCode: 200,
    body: JSON.stringify({ hello: "world!" }),
  };
};
