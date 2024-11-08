# Mission Ready - Developer Challenge - Advanced Fullstack Developer

## Backend:

### Customer API Specification

(1) Create and API endpoint that takes one parameter.
(2) The parameter will be of String data type.
(3) For now, let us refer to the parameter as input_parameter.
(4) The backend API can be coded in any language.
(5) On receiving a request to the API endpoint, the backend will respond with
  * A String that reads - input_parameter + "is now registered"
(6) The API can be hosted on localhost or a cloud service
(7) The API needs the ability to be disabled, so the frontend can be tested with it offline.
(8) The frontend specification notes the the input_parameter will be an email address, but as far as the backend is concerned it could be any value of type String.

### Customer Deliverables for Proof of Concept - Backend

(1) A video showing the frontend interacting with the backend.
(2) The video should include...
  * An email address beinge entered in the text field 'Enter your email address' on the frontend.
  * The subscribe button being clicked/pressed on the frontend.
  * The frontend displaying the response from the backend API endpoint.
  * This should video should show the operation of the frontend...
    * With the backend enabled.
    * With the backend disabled.



### Development API specification

#### Technology Stack

Server: Node.js & Express.js
Deployment: Render.com (ephemeral instance). These take around 20-40 seconds to spin-up when idle, but are fine for a proof-of-concept.
Langauges: Javascript, JSON

#### API Endpoints

(1) https://[endpoint-domain]/api/subscribe
  * Request: 
    * POST
      * Payload: JSON
      * Format: Example - {email: "mary@mail.com"}
    * Response:
      * POST
      * Payload: JSON
        * Format: Example - {"message":"mary@mail.com is now registered"}
        * Status Code: 200 OK
    * Testing
       * curl -X POST https://[backend-domain]/api/register  -H "Content-Type: application/json" -d '{"email": "alan@mrhq.com"}
       * Response: {"message":"alan@mrhq.com is now registered"}% - Takes around 30 seconds when idle.

(2) https://[frontend-domain]/api/enable
    * Request
        * POST
        * Payload: JSON
        * Format: Example - {"enable": "true"} to enable /api/subscribe endpoint
        * Format: Example - {"enable": "false"} to disable /api/subscribe endpoint 

#### API Security

Note: An

(1) For the demo the following were considered...
    * Hosting on HTTPS for encrypted communication.
    * Cross-origin resource sharing (CORS) policy
            * For development, we will just use an all hosts '*' policy.
            * For production, we should specify teh hosts specifically.
(2) Not considered for the demo...
    * Checking supplied String for safety, excessive length, injection attacks, path traversal attacks, and email address validity.
    * Rate limiting the API to prevent DOS attacks.
    * The remainder of the OWASP top 10. 

TBD: Lots...
