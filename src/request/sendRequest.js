function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

/*export*/
function sendRequest(options, callback, fallback) {
    const {url, method, async, header, data} = options;
    let dataType, response;

    if (typeof options === "object") {
        if (method !== undefined && url !== undefined) {
            let request = new XMLHttpRequest();
            request.open(method, url, async);
            //set header for xhr request
            if (header !== null && typeof header == "object") {
                Object.keys(header).forEach((value, name) => {
                    request.setRequestHeader(name, value);
                    if (value.indexOf('form') !== -1) {
                        dataType = 'formData';
                    }
                    if (value.indexOf('json') !== -1) {
                        dataType = 'jsonData';
                    }
                })
            }

            //send data with xhr request
            if (data !== null && typeof data == "object") {
                if (dataType === 'jsonData') {
                    request.send(JSON.stringify(data));
                }
                if (dataType === 'formData') {
                    let formData = new FormData();
                    Object.keys(data).forEach(function (key) {
                        formData.append(key, data[key]);
                    });
                    request.send(formData);
                }
            } else {
                request.send();
            }
            //catch sate of xhr
            request.onreadystatechange = function (event) {
                if (event.currentTarget.readyState === 4) {
                    if (event.currentTarget.status === 0) {
                        fallback(new Error(`Request send failed ${url}`));
                    }
                    if (event.currentTarget.status === 200) {
                       // console.log(`Response has been received from ${url}`)
                       //  if (IsJsonString(event.currentTarget.responseText)) {
                       //      response = JSON.parse(event.currentTarget.responseText);
                       //  } else  {
                       //      response = {
                       //          'type' : 'raw',
                       //          'data' : event.currentTarget.responseText
                       //      }
                       //  }

                        if (typeof callback === 'function') {
                            callback(event.currentTarget.responseText)
                        }
                    }
                }
            }
        } else {
            fallback(new Error("Request Method and URL can not be empty"));
        }
    } else {
        fallback(new Error("Invalid options"));
    }
}

sendRequest({
    url: 'https://localhost:3000',
    method: 'GET',
    async: true/*, header : {}, data : {} */
}, function (response) {
    console.log(response)
}, function (error) {
    console.log(error)
})

sendRequest({
    url: 'https://www.youtube.com/watch?v=Z45VQuHO_VA',
    method: 'GET',
    async: true/*, header : {}, data : {} */
}, function (response) {
    console.log(response)
}, function (error) {
    console.log(error)
})