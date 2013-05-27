var config = module.exports;

config["My tests"] = {
    env: "browser",        // or "node"
    sources: [
        "js/**/*.js"      // Glob patterns supported
    ],
    tests: [
        "test/*-test.js"
    ],
    libs: [
        "lib/curl.js",
        "loaderconf.js"
    ],
    extensions: [require("buster-amd")]

};
