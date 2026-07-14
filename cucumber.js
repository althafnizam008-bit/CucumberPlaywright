module.exports = {
  default: {
    "formatOptions":{
      "snippetInterface": "async-await"
    },
    require: ["stepDefinitions/*.ts"],
    requireModule: ["ts-node/register"]
  }
};