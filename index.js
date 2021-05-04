const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

const sentence = process.argv.slice(2).join(' ');
const langCode = franc(sentence);
const langObj = langs.where("3", langCode);
// There are cases where the language code exists but it does not match any code in the langs package
if(langCode === 'und' || !langObj) {
    console.log("Could not match a language. Please try again with a larger sample.".red);
} else {
    console.log(`Our best guess is: ${langObj.name}`.green);
}