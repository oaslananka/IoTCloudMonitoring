/**
 * @file helpers.js
 * @description Utility functions for IoT Cloud Monitoring System
 * @github oaslananka
 */

/**
 * Function to format the date to a readable string
 * @param {Date} date - Date object to format
 * @returns {string} Formatted date string
 */
function formatDate(date) {
    return date.toISOString().replace(/T/, ' ').replace(/\..+/, '');
}

module.exports = {
    formatDate
};
