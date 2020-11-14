export function request(url, data, options = {}) {
    if (options.method === 'get' || options.method === undefined) {
        if (JSON.stringify(data) !== '{}' && data) {
            const params = [];
            for (let key in data) {
                params.push(`${key}=${data[key]}`)
            }
            url = url + "?" + params.join('&');
        }
    }
    return fetch(url, {
        ...options
    }).then(res => {
        return res.json()
    })
}

request.get = function (url, data = {}, options = {}) {
    options.method = 'get';
    return request(url, data, options);
}

request.post = function (url, data = {}, options = {}) {
    options.method = 'post';
    options.body = JSON.stringify(data);
    options.headers = new Headers({
        'Content-Type': 'application/json'
    })
    return request(url, data, options);
}

export default request;