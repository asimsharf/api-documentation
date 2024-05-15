# API Documentation Generator

This project captures API requests made by a website and generates documentation for them. It uses Puppeteer to automate browser interactions and capture network requests, and Node.js scripts to process and document these requests.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/api-documentation.git
    cd api-documentation
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

## Usage

### Capture API Requests

To capture API requests made by the website:

1. Open the `captureApiRequests.js` file and replace `https://your-website.com` with the URL of the website you want to capture API requests from.

2. Run the Puppeteer script:

    ```bash
    node captureApiRequests.js
    ```

   This will generate a file named `apiRequests.json` containing the captured API requests.

### Generate Documentation

To generate documentation from the captured API requests:

1. Run the documentation generator script:

    ```bash
    node generateDocumentation.js
    ```

   This will generate a file named `APIDocumentation.md` containing the API documentation.

### Automate the Process

You can automate the capture and documentation generation process by using the provided shell script `run.sh`.

1. Make the script executable:

    ```bash
    chmod +x run.sh
    ```

2. Run the script:

    ```bash
    ./run.sh
    ```

### Schedule Automation

To run the automation script periodically (e.g., every day at midnight), you can set up a cron job:

1. Open your crontab file:

    ```bash
    crontab -e
    ```

2. Add the following line to schedule the script to run daily at midnight:

    ```bash
    0 0 * * * /path/to/your/project/run.sh
    ```

## Project Structure

```plaintext
api-documentation/
├── captureApiRequests.js # Script to capture API requests
├── generateDocumentation.js # Script to generate API documentation
├── apiRequests.json # Captured API requests (generated)
├── APIDocumentation.md # API documentation (generated)
├── package.json # Project dependencies
├── node_modules/ # Installed dependencies
└── run.sh # Automation script
```


## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
