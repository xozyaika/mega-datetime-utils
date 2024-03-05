# DateTime Utils

A simple JavaScript library for date and time utilities, providing functions for formatting, parsing, and manipulating dates.

## Installation

```bash
npm install @your-username/datetime-utils
```

## Usage

```javascript
// Import the library
const { formatDate, parseDate, addDays } = require('@your-username/datetime-utils');

// Example usage
const currentDate = new Date();
const formattedDate = formatDate(currentDate, 'YYYY-MM-DD hh:mm:ss');
console.log('Formatted Date:', formattedDate);

const dateString = '2024-03-05T12:30:00';
const parsedDate = parseDate(dateString);
console.log('Parsed Date:', parsedDate);

const futureDate = addDays(currentDate, 7);
console.log('Future Date (7 days later):', futureDate);
```

## API

### `formatDate(date, format)`

Format a date object to a string with a specified format.

- `date`: The date object to format.
- `format`: The desired date format (e.g., 'YYYY-MM-DD').

### `parseDate(dateString)`

Parse a string into a Date object.

- `dateString`: The date string to parse.

### `addDays(date, days)`

Add a specified number of days to a given date.

- `date`: The base date.
- `days`: The number of days to add.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
