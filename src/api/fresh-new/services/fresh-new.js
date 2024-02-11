'use strict';

/**
 * fresh-new service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fresh-new.fresh-new');
