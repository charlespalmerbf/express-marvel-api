# marvel-api-app
A simple Node.js application to interact with the Marvel API, allowing you to fetch character data and explore the Marvel Universe programmatically.

## Installation
npm install

Before running the application, make sure to set your Marvel API credentials in a .env file at the root of the project:

MARVEL_PUBLIC_KEY=your_public_key
MARVEL_PRIVATE_KEY=your_private_key

## Usage
To fetch Marvel characters by name prefix, simply run the application:

```node index.js```

You can modify the fetchCharacters() call inside index.js to use a different search prefix if desired.

## Marvel API Authentication
Marvel API requires a unique hash for authentication on each request. This application generates it using:

- A timestamp
- Your private key
- Your public key

It combines these to produce an MD5 hash as required by the API.

## Project Structure
.
├── index.js              # Main application logic
├── .env                 # Environment variables (not committed to Git)
├── .gitignore           # Files and folders to be excluded from Git
├── package.json         # Node.js dependencies and scripts
└── README.txt           # This file

## Example Output
Characters:
- Spider-Man
- Spider-Woman (Jessica Drew)
- Spider-Woman (Julia Carpenter)
- Spider-Girl (Anya Corazon)
- Spider-Ham

## Contributing
Contributions to this project are welcome! If you find bugs or have suggestions, feel free to open an issue or submit a pull request on GitHub.

## Conventional Commits
This project follows the Conventional Commits specification. Please ensure that all commit messages follow this convention.

Guide: https://www.conventionalcommits.org/en/v1.0.0/

## Pull Requests, Approvals & Releases
Creating the develop release pull request
Pull Requests made to this project are required in order to merge to develop or main.

When submitting a Pull Request, at least one approval is required before merging.

When constructing a release, ensure that a release branch is created based off of the contents of develop. The only changes contained within this branch should be the version numbers in package.json and any applicable metadata.

The Pull Request should be named as [develop] release vX.Y.Z

#### Creating the main release pull request
Once the develop release PR has been merged, you will need to generate a new Pull Request based off main comparing the develop release branch you have just created.

The Pull Request should be named as [main] release vX.Y.Z

#### Creating the release tag
Once both Pull Requests have been merged, a release tag should be generated and pushed to the repository, named as vX.Y.Z
