const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./e2e/orders_test.js",
  output: "./output",
  helpers: {
    Appium: {
      app: "C:\\Users\\slle\\OneDrive - GFT Technologies SE\\Desktop\\Samuel Leite\\AutomationProject\\Mobile\\app\\hxp-beta2.apk",
      platform: "Android",
      device: "emulator",
    },
    REST: {
      endpoint: "http://localhost:5000",
    },
    JSONResponse: {
      requestHelper: "REST",
    },
  },
  include: {
    I: "./support/steps_file.js",
    loginScreen: "./support/screens/login.js",
    account: "./support/screens/account.js",
    helpOrder: "./support/screens/help-orders.js",
  },
  name: "mobile",
};
