const successResponse = (message, data = null) => {
  const response = {
    status: 'success',
    message: message
  };

  if (data) {
    response.data = data;
  }

  return response;
};

const failResponse = (message) => {
  return {
    status: 'fail',
    message: message
  };
};

module.exports = {
  successResponse,
  failResponse
};