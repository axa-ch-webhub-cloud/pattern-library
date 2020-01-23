#!/usr/bin/env node

const fs = require('fs');

const pkgPath = `${process.cwd()}/package.json`;
const pkgPathTmp = `${process.cwd()}/.tmp.package.json`;

fs.copyFileSync(pkgPathTmp, pkgPath);
fs.unlinkSync(pkgPathTmp);