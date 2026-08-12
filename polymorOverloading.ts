class APIClient {
    sendRequest(endpoint: string): void
    sendRequest(endpoint: string, requestBody: string, requestStatus: boolean): void

    sendRequest(endpoint: string, requestBody?: string, requestStatus?: boolean) {
        if (requestStatus) {
            console.log("The following is the endpoint - ", endpoint);
            console.log("RequestBodys has ", requestBody);
            console.log("Status is: ", requestStatus);
        }
        else {
             console.log("Processing simple request to endpoint: ", endpoint);             
        }
    }

}

let d = new APIClient()
d.sendRequest("Login the Application")
d.sendRequest("logout page","Clicking logout",false)
d.sendRequest("homepage","username,password,login",true)