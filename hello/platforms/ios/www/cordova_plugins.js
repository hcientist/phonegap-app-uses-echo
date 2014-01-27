cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.thegreatmichael.echo/www/echo.js",
        "id": "com.thegreatmichael.echo.echo",
        "clobbers": [
            "echo"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.thegreatmichael.echo": "0.2.3"
}
// BOTTOM OF METADATA
});