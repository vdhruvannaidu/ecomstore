import axios from 'axios';

// Forward request to a predefined microservice based on the request path
export const forwardRequest = async (req: any) => {
  const serviceUrl = getPredefinedServiceUrl(req); // Static service URL routing
  const response = await axios({
    method: req.method,
    url: `${serviceUrl}${req.originalUrl}`,
    data: req.body,
    headers: req.headers,
  });
  return response;
};

// Function to determine the service URL based on the request path
const getPredefinedServiceUrl = (req: any): string => {
  // Static routing rules, for example:
  if (req.path.startsWith('/user')) return process.env.USER_SERVICE_URL!;
  if (req.path.startsWith('/product')) return process.env.PRODUCT_SERVICE_URL!;
  if (req.path.startsWith('/payment')) return process.env.PAYMENT_SERVICE_URL!;
  if (req.path.startsWith('/order')) return process.env.ORDER_SERVICE_URL!;
  if (req.path.startsWith('/notification')) return process.env.NOTIFICATION_SERVICE_URL!;
  // Add more routing as needed
  return process.env.DEFAULT_SERVICE_URL!;
};
