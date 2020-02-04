#!/usr/bin/env node

// TODO Please document purpose/rationale for this file

const fs = require('fs');

const pkgPath = `${process.cwd()}/package.json`;
const pkgPathTmp = `${process.cwd()}/.tmp.package.json`;
// TODO DRYify process.cwd()

const pkg = require(pkgPath);

fs.copyFileSync(pkgPath, pkgPathTmp);

pkg.main = "lib/index.js";

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
