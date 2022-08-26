#!/usr/bin/env node

const cookie = require('cookie')
const cookieParser = require('cookie-parser')
const yargs = require('yargs')

const options = yargs
 .usage("Usage: --sid <sid> --secret <secret>")
 .env('DECODE_SIGNED_COOKIES')
 .option("i", { alias: "sid", describe: "The session ID to decode", type: "string", demandOption: true })
 .option("s", { alias: "secret", describe: "The secret used to encode the session ID", type: "string", demandOption: true })
 .argv;

const cookieParsed = cookie.parse(`sid=${options.sid};`);
const sidParsed = cookieParser.signedCookie(cookieParsed.sid, options.secret);
console.log(sidParsed);

