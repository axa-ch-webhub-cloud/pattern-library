#!/usr/bin/env node

// Resets the package json to the original state, which was modified during
// prepublish phase

const fs = require('fs');

const { cwd } = process;

const pkgPath = `${cwd()}/package.json`;
const pkgPathTmp = `${cwd()}/.tmp.package.json`;

// No need to safeguard here cause if there is an error, the process gets aborted
// and node closes all open and temporary files, ergo node takes care of the cleanup
fs.copyFileSync(pkgPathTmp, pkgPath);

fs.unlinkSync(pkgPathTmp);
