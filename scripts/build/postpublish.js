#!/usr/bin/env node

// TODO Please document purpose/rationale for this file

const fs = require('fs');

const pkgPath = `${process.cwd()}/package.json`;
const pkgPathTmp = `${process.cwd()}/.tmp.package.json`;
// TODO DRYify process.cwd()

fs.copyFileSync(pkgPathTmp, pkgPath);
// TODO file ops can always fail, since you're not the exclusive owner of the file system - guard against failure here and elsewhere

fs.unlinkSync(pkgPathTmp);
