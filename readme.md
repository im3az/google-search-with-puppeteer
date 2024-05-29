# Puppeteer Google Search

This project uses Puppeteer to automate a Google search and retrieve the titles and URLs of the search results.

## Installation

1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Clone this repository or download the code.
3. Navigate to the project directory and install the dependencies:

   ```bash
   npm install puppeteer
   ```

## Usage

1. Open the terminal and navigate to the project directory.
2. Run the script:

   ```bash
   node googleSearch.js
   ```

The script will perform a Google search for "computer" and print the search results to the console.

To search for a different term, modify the last line of `googleSearch.js`:

```javascript
googleSearch("your search term");
```
