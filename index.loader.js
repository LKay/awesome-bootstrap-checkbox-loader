module.exports = function() {};

module.exports.pitch = function (remainingRequest) {

    // Webpack 1.7.3 uses this.resourcePath. Leaving in remaining request for possibly older versions
    // of Webpack
    var configFilePath = this.resourcePath || remainingRequest;
    var defaultStyleLoader
    this.cacheable(true);

    if (!configfilePath || configFilePath.trim() === "") {
        var msg = "You specified the awesome-bootstrap-checkbox-loader with no configuration file. Please specify"
                + " the configuration file, like: 'awesome-bootstrap-checkbox-loader!./awesome-bootstrap-checkbox.config.js'"
                + " or use `require('awesome-bootstrap-checkbox-loader')`."
        console.error("ERROR: " + msg);
        throw new Error(msg);
    }
  
    var config = require(configFilePath)

    switch (config.compiler) {
        case "less" :
            defaultStyleLoader = "style-loader!css-loader!less-loader"
            break

        case "sass":
            defaultStyleLoader = "style-loader!css-loader!sass-loader"
            break

        default :
            var msg = "Unknown compiler provided. Only `sass` and `less` values allowed."
            console.error("ERROR: " + msg);
            throw new Error(msg);
    }
    var styleLoader = config.styleLoader || defaultStyleLoader

    var styleLoaderCommand = "require(" + JSON.stringify(
            "-!" + styleLoader + "!"
            + require.resolve("./awesome-bootstrap-checkbox-styles.loader.js")
            + "!" + configFilePath) + ");"
    
    return styleLoaderCommand;
}