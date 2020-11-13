export function searchFormat(urlData) {
    if (urlData.startWith("?")) {
        urlData = urlData.slice(1);
    }
    const params = urlData.split('&').reduce((prev, cur) => {
        const arr = cur.split('=');
        prev[arr[0]] = arr[1];
        return prev
    }, {});
    return params
}