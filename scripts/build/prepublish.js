#!/usr/bin/env node

// This file modifies the package.json of a component and makes a backup of the original
// package.json for later reset (postpublish).

const fs = require('fs');

const { cwd } = process;

const pkgPath = `${cwd()}/package.json`;
const pkgPathTmp = `${cwd()}/.tmp.package.json`;

// eslint-disable-next-line import/no-dynamic-require
const pkg = require(pkgPath);

// No need to safeguard here cause if there is an error, the process gets aborted
// and node closes all open and temporary files, ergo node takes care of the cleanup
fs.copyFileSync(pkgPath, pkgPathTmp);

pkg.main = 'lib/index.js';

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
