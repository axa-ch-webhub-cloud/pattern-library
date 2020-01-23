#!/usr/bin/env node

const fs = require('fs');

const pkgPath = `${process.cwd()}/package.json`;
const pkgPathTmp = `${process.cwd()}/.tmp.package.json`;
const pkg = require(pkgPath);

fs.copyFileSync(pkgPath, pkgPathTmp);

pkg.main = "lib/index.js";

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));