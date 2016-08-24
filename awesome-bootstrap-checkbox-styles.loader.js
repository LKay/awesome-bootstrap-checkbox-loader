var defaultStyles = [
    "mixins",
    "shared"
]

var styles = [
    "checkbox",
    "radio"
]

module.exports = function (content) {
    this.cacheable(true)
    var config = this.exec(content, this.resourcePath);
    var source
    var start

    if (typeof config.styles === "boolean") {
        styles = config.styles ? styles : []
    } else {
        styles = styles.filter(function (style) {
            return config.styles[style]
        })
    }

    switch (config.compiler) {
        case "less" :
            start = "@import \"~bootstrap/less/variables.less\";\n"
                  + "@import \"~bootstrap/less/mixins.less\";\n"
                  + "@import \"~font-awesome/less/variables.less\";\n"
                  + "@import \"~awesome-bootstrap-checkbox/less/variables.less\";\n";
                  + "@import \"./awesome-bootstrap-checkbox.config.less\";\n";

            source = start + defaultStyles.concat(styles).map(function (style) {
                    return "@import \"~awesome-bootstrap-checkbox/less/" + style + ".less\";\n"
                })

            break

        case "sass" :
            start = "@import \"~bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss\";\n"
                  + "@import \"~bootstrap-sass/assets/stylesheets/bootstrap/_mixins.scss\";\n"
                  + "@import \"~font-awesome/scss/_variables.scss\";\n"
                  + "@import \"~awesome-bootstrap-checkbox/scss/_variables.scss\";\n";
                  + "@import \"./awesome-bootstrap-checkbox.config.less\";\n";

            source = start + defaultStyles.concat(styles).map(function (style) {
                    return "@import \"~awesome-bootstrap-checkbox/scss/_" + style + ".scss\";\n"
                })
            break

        default :
            var msg = "Unknown compiler provided. Only `sass` and `less` values allowed."
            console.error("ERROR: " + msg);
            throw new Error(msg);
    }

    return source
}
