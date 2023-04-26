registerRoute(function(_ref2) {
    var request = _ref2.request;
    return request.destination === 'style' || request.destination === 'script';
}, new StaleWhileRevalidate({
    cacheName: 'assets',
    plugins: [new CacheableResponsePlugin({
        statuses: [200]
    })]
}));
