/*
Spotify Premium Unlock - Fixed Edition for inyunai
- 优化了权限校验逻辑，减少自动退登频率
*/

let body = $response.body;
if (body) {
    let obj = JSON.parse(body);
    if (obj.skus) obj.skus = [];
    if (obj.product_state) obj.product_state = "premium";
    if (obj.can_subscribe) obj.can_subscribe = false;
    $done({ body: JSON.stringify(obj) });
} else {
    $done({});
}
