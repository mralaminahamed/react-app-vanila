/*export */
function sendRequest(options, callback, fallback) {
    let dataType = 'unrecognized';

    if (typeof options === "object") {
        if (options.method !== undefined && options.url !== undefined) {
            if (typeof XMLHttpRequest !== "undefined") {
                let request = new XMLHttpRequest();
                request.open(options.method, options.url, options.async);
                //set header for xhr request
                if (options.header !== null && typeof options.header == "object") {
                    options.header.forEach((item) => {
                        Object.keys(item).forEach((name) => {
                            let value = item[name];
                            request.setRequestHeader(name, value);
                            if (value.indexOf('form') !== -1) {
                                dataType = 'formData';
                            }
                            if (value.indexOf('json') !== -1) {
                                dataType = 'jsonData';
                            }
                        })
                    })
                }

                //send data with xhr request
                if (dataType !== 'unrecognized') {
                    if (options.data !== undefined && options.data !== null && typeof options.data == "object") {
                        //send json data
                        if (dataType === 'jsonData') {
                            request.send(JSON.stringify(options.data));
                        }
                        //send form data
                        if (dataType === 'formData') {
                            let formData = new FormData();
                            Object.keys(options.data).forEach(function (key) {
                                formData.append(key, options.data[key]);
                            });
                            request.send(formData);
                        }
                    }
                } else {
                    request.send();
                }

                //catch sate of xhr
                request.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        if (this.status === 0) {
                            fallback(new Error(`Request send failed ${options.url}`));
                        }
                        if (this.status === 200) {
                            // console.log(`Response has been received from ${url}`)
                            //  if (IsJsonString(event.currentTarget.responseText)) {
                            //      response = JSON.parse(event.currentTarget.responseText);
                            //  } else  {
                            //      response = {
                            //          'type' : 'raw',
                            //          'data' : event.currentTarget.responseText
                            //      }
                            //  }

                            callback(this.responseText)
                        }
                    }
                }
            } else {
                fallback(new Error("Runtime Environment could not support XMLHttpRequest"));
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