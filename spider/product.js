const path = require('path');
const fs = require('fs-extra');
const config = require('../config');
const request = require('superagent');
const {getWhsCookie} = require('../util/whsCookie');
const {productPageSize, brandURL, brandDataPath, spuDataPath, openApiProductDetailUrl, productDetailURL, openApi, ctypePath} = config.whsqd;

























