// mega-datetime-utils.js

/**
 * Format a date object to a string with a specified format.
 * @param {Date} date - The date object to format.
 * @param {string} format - The desired date format (e.g., 'YYYY-MM-DD').
 * @returns {string} - The formatted date string.
 */
function formatDate(date, format) {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
  
    return new Intl.DateTimeFormat('en-US', options).formatToParts(date)
      .map(({ type, value }) => (type === 'literal' ? value : `%${type}`))
      .join('')
      .replace(/%YYYY/g, date.getFullYear())
      .replace(/%MM/g, String(date.getMonth() + 1).padStart(2, '0'))
      .replace(/%DD/g, String(date.getDate()).padStart(2, '0'))
      .replace(/%hh/g, String(date.getHours()).padStart(2, '0'))
      .replace(/%mm/g, String(date.getMinutes()).padStart(2, '0'))
      .replace(/%ss/g, String(date.getSeconds()).padStart(2, '0'));
  }
  
  /**
   * Parse a string into a Date object.
   * @param {string} dateString - The date string to parse.
   * @returns {Date} - The parsed Date object.
   */
  function parseDate(dateString) {
    return new Date(dateString);
  }
  
  /**
   * Add a specified number of days to a given date.
   * @param {Date} date - The base date.
   * @param {number} days - The number of days to add.
   * @returns {Date} - The new Date object after adding days.
   */
  function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  
  // Export the utility functions
  module.exports = {
    formatDate,
    parseDate,
    addDays,
  };
  