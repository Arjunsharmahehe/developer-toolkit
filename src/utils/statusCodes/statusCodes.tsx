export const httpStatusCodes = [
  // 1xx: Informational Responses - The request was received, continuing process.
  {
    code: 100,
    name: "Continue",
    type: "Informational",
    explanation: "The initial part of a request has been received and has not yet been rejected by the server. The client SHOULD continue by sending the remainder of the request or, if the request has already been completed, ignore this response."
  },
  {
    code: 101,
    name: "Switching Protocols",
    type: "Informational",
    explanation: "The server understands and is willing to comply with the client's request, via the Upgrade header field, for a change in the application protocol being used on this connection. A common use case is upgrading an HTTP connection to a WebSocket."
  },
  {
    code: 102,
    name: "Processing",
    type: "Informational",
    explanation: "A WebDAV-specific code indicating that the server has received and is processing the request, but no response is available yet. This prevents the client from timing out and assuming the request was lost."
  },
  {
    code: 103,
    name: "Early Hints",
    type: "Informational",
    explanation: "Used to return some response headers before the final HTTP message. This allows a browser to start preloading resources (like stylesheets or scripts) while the server is still preparing the main response, improving performance."
  },

  // 2xx: Successful Responses - The request was successfully received, understood, and accepted.
  {
    code: 200,
    name: "OK",
    type: "Successful",
    explanation: "The standard response for successful HTTP requests. The actual response will depend on the request method used. In a GET request, the response will contain an entity corresponding to the requested resource."
  },
  {
    code: 201,
    name: "Created",
    type: "Successful",
    explanation: "The request has been fulfilled and has resulted in one or more new resources being created. Commonly the result of a POST or some PUT requests. The new resource's URI is often returned in the Location header."
  },
  {
    code: 202,
    name: "Accepted",
    type: "Successful",
    explanation: "The request has been accepted for processing, but the processing has not been completed. It is intended for cases where another process or server handles the request, or for batch processing."
  },
  {
    code: 203,
    name: "Non-Authoritative Information",
    type: "Successful",
    explanation: "The server is a transforming proxy (e.g., a web accelerator) that received a 200 OK from its origin but is returning a modified version of the origin's response."
  },
  {
    code: 204,
    name: "No Content",
    type: "Successful",
    explanation: "The server successfully processed the request but is not returning any content. Often used for DELETE or PUT requests where the UI doesn't need to change."
  },
  {
    code: 205,
    name: "Reset Content",
    type: "Successful",
    explanation: "Tells the client to reset the document view which caused the request to be sent. Useful for clearing form content after submission."
  },
  {
    code: 206,
    name: "Partial Content",
    type: "Successful",
    explanation: "The server is delivering only part of the resource (byte serving) due to a range header sent by the client. Used for resumable downloads or video streaming."
  },
  {
    code: 207,
    name: "Multi-Status",
    type: "Successful",
    explanation: "A WebDAV-specific code that conveys information about multiple resources, for situations where multiple status codes might be appropriate. The response body is an XML message."
  },
  {
    code: 208,
    name: "Already Reported",
    type: "Successful",
    explanation: "Used inside a DAV: propstat response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection."
  },
  {
    code: 226,
    name: "IM Used",
    type: "Successful",
    explanation: "The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance."
  },

  // 3xx: Redirection Messages - Further action must be taken by the user agent to complete the request.
  {
    code: 300,
    name: "Multiple Choices",
    type: "Redirection",
    explanation: "The request has more than one possible response. The user agent or user should choose one of them. There is no standardized way of choosing one of the responses."
  },
  {
    code: 301,
    name: "Moved Permanently",
    type: "Redirection",
    explanation: "This and all future requests should be directed to the given URI. Search engines will update their links to the resource. Crucial for SEO."
  },
  {
    code: 302,
    name: "Found",
    type: "Redirection",
    explanation: "The resource temporarily resides under a different URI. The client should continue to use the original URI for future requests. The request method may be changed from POST to GET."
  },
  {
    code: 303,
    name: "See Other",
    type: "Redirection",
    explanation: "The server sent this response to direct the client to get the requested resource at another URI with a GET request. Typically used after a PUT or POST to prevent the user from re-submitting the form."
  },
  {
    code: 304,
    name: "Not Modified",
    type: "Redirection",
    explanation: "Indicates that the resource has not been modified since the version specified by the request headers (If-Modified-Since or If-None-Match). The client can use its cached version, saving bandwidth."
  },
  {
    code: 307,
    name: "Temporary Redirect",
    type: "Redirection",
    explanation: "The modern, stricter version of 302. The request method (e.g., POST) is NOT allowed to be changed when reissuing the original request. A POST request must be repeated with another POST request."
  },
  {
    code: 308,
    name: "Permanent Redirect",
    type: "Redirection",
    explanation: "The modern, stricter version of 301. The resource is now permanently located at another URI, and the request method should not be changed when reissuing the request."
  },

  // 4xx: Client Error Responses - The request contains bad syntax or cannot be fulfilled.
  {
    code: 400,
    name: "Bad Request",
    type: "Client Error",
    explanation: "The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing)."
  },
  {
    code: 401,
    name: "Unauthorized",
    type: "Client Error",
    explanation: "The client must authenticate itself to get the requested response. This is about *authentication* (who are you?). It's sent with a WWW-Authenticate header that contains information on how to authorize."
  },
  {
    code: 402,
    name: "Payment Required",
    type: "Client Error",
    explanation: "Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, but that has not happened, and this code is not widely used."
  },
  {
    code: 403,
    name: "Forbidden",
    type: "Client Error",
    explanation: "The client does not have access rights to the content. This is about *authorization* (what are you allowed to do?). The server knows the client's identity but is refusing access."
  },
  {
    code: 404,
    name: "Not Found",
    type: "Client Error",
    explanation: "The server cannot find the requested resource. In an API, this can also mean that the endpoint is valid but the resource itself does not exist."
  },
  {
    code: 405,
    name: "Method Not Allowed",
    type: "Client Error",
    explanation: "The request method is known by the server but is not supported for the target resource. The response MUST include an `Allow` header containing a list of valid methods (e.g., GET, POST)."
  },
  {
    code: 406,
    name: "Not Acceptable",
    type: "Client Error",
    explanation: "The server cannot produce a response matching the list of acceptable values defined in the request's proactive content negotiation headers (e.g., `Accept`, `Accept-Language`)."
  },
  {
    code: 407,
    name: "Proxy Authentication Required",
    type: "Client Error",
    explanation: "Similar to 401, but the client must first authenticate itself with the proxy."
  },
  {
    code: 408,
    name: "Request Timeout",
    type: "Client Error",
    explanation: "The server would like to shut down this unused connection. It is sent on an idle connection by some servers, even without any previous request by the client."
  },
  {
    code: 409,
    name: "Conflict",
    type: "Client Error",
    explanation: "The request could not be completed due to a conflict with the current state of the target resource. Often used in response to a PUT request where a resource has been modified by another party."
  },
  {
    code: 410,
    name: "Gone",
    type: "Client Error",
    explanation: "Indicates that the target resource is no longer available at the origin server and that this condition is likely to be permanent. It's a more definitive version of 404."
  },
  {
    code: 411,
    name: "Length Required",
    type: "Client Error",
    explanation: "The server rejected the request because the `Content-Length` header field is not defined and the server requires it."
  },
  {
    code: 412,
    name: "Precondition Failed",
    type: "Client Error",
    explanation: "The client has indicated preconditions in its headers which the server does not meet. For example, using a conditional header like `If-Match` when the ETag doesn't match."
  },
  {
    code: 413,
    name: "Payload Too Large",
    type: "Client Error",
    explanation: "The request entity is larger than limits defined by the server; the server might close the connection or return a `Retry-After` header field."
  },
  {
    code: 414,
    name: "URI Too Long",
    type: "Client Error",
    explanation: "The URI requested by the client is longer than the server is willing to interpret."
  },
  {
    code: 415,
    name: "Unsupported Media Type",
    type: "Client Error",
    explanation: "The media format of the requested data is not supported by the server, so the server is rejecting the request. E.g., client sends XML to an API that only accepts JSON."
  },
  {
    code: 416,
    name: "Range Not Satisfiable",
    type: "Client Error",
    explanation: "The range specified by the `Range` header field in the request can't be fulfilled. It's possible that the range is outside the size of the target URI's data."
  },
  {
    code: 417,
    name: "Expectation Failed",
    type: "Client Error",
    explanation: "The expectation indicated by the `Expect` request header field could not be met by the server."
  },
  {
    code: 418,
    name: "I'm a teapot",
    type: "Client Error",
    explanation: "The server refuses the attempt to brew coffee with a teapot. An April Fools' joke RFC that is occasionally implemented as an Easter egg."
  },
  {
    code: 421,
    name: "Misdirected Request",
    type: "Client Error",
    explanation: "The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI."
  },
  {
    code: 422,
    name: "Unprocessable Entity",
    type: "Client Error",
    explanation: "The request was well-formed but was unable to be followed due to semantic errors. Often used in APIs to indicate validation errors (e.g., a required field was missing from the JSON payload)."
  },
  {
    code: 423,
    name: "Locked",
    type: "Client Error",
    explanation: "A WebDAV-specific code indicating that the resource that is being accessed is locked."
  },
  {
    code: 424,
    name: "Failed Dependency",
    type: "Client Error",
    explanation: "A WebDAV-specific code indicating that the request failed due to failure of a previous request (e.g., a PROPPATCH)."
  },
  {
    code: 426,
    name: "Upgrade Required",
    type: "Client Error",
    explanation: "The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an `Upgrade` header to indicate the required protocol(s)."
  },
  {
    code: 428,
    name: "Precondition Required",
    type: "Client Error",
    explanation: "The origin server requires the request to be conditional. Intended to prevent 'lost update' problems, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server."
  },
  {
    code: 429,
    name: "Too Many Requests",
    type: "Client Error",
    explanation: "The user has sent too many requests in a given amount of time ('rate limiting'). The response should include details explaining the condition, and may include a `Retry-After` header."
  },
  {
    code: 431,
    name: "Request Header Fields Too Large",
    type: "Client Error",
    explanation: "The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields."
  },
  {
    code: 451,
    name: "Unavailable For Legal Reasons",
    type: "Client Error",
    explanation: "The user agent requested a resource that cannot legally be provided, such as a web page censored by a government."
  },

  // 5xx: Server Error Responses - The server failed to fulfill an apparently valid request.
  {
    code: 500,
    name: "Internal Server Error",
    type: "Server Error",
    explanation: "A generic error message, given when an unexpected condition was encountered and no more specific message is suitable. It's a server-side 'catch-all' error."
  },
  {
    code: 501,
    name: "Not Implemented",
    type: "Server Error",
    explanation: "The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD."
  },
  {
    code: 502,
    name: "Bad Gateway",
    type: "Server Error",
    explanation: "The server, while acting as a gateway or proxy, received an invalid response from an upstream server it accessed while trying to fulfill the request. This is a networking error between servers."
  },
  {
    code: 503,
    name: "Service Unavailable",
    type: "Server Error",
    explanation: "The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. A `Retry-After` header might be included."
  },
  {
    code: 504,
    name: "Gateway Timeout",
    type: "Server Error",
    explanation: "The server, while acting as a gateway or proxy, did not get a response in time from the upstream server that it needed to access in order to complete the request."
  },
  {
    code: 505,
    name: "HTTP Version Not Supported",
    type: "Server Error",
    explanation: "The HTTP version used in the request is not supported by the server."
  },
  {
    code: 506,
    name: "Variant Also Negotiates",
    type: "Server Error",
    explanation: "The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper endpoint in the negotiation process."
  },
  {
    code: 507,
    name: "Insufficient Storage",
    type: "Server Error",
    explanation: "A WebDAV-specific code. The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request."
  },
  {
    code: 508,
    name: "Loop Detected",
    type: "Server Error",
    explanation: "A WebDAV-specific code. The server detected an infinite loop while processing the request."
  },
  {
    code: 510,
    name: "Not Extended",
    type: "Server Error",
    explanation: "Further extensions to the request are required for the server to fulfill it."
  },
  {
    code: 511,
    name: "Network Authentication Required",
    type: "Server Error",
    explanation: "Indicates that the client needs to authenticate to gain network access. Often seen with captive portals on public Wi-Fi networks."
  }
];

