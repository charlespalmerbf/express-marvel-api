# Comic Vine Express API

A simple Express.js backend to fetch comic character and issue data from the [Comic Vine API](https://comicvine.gamespot.com/api/). Designed to be used as a backend for a React Native comic collecting application.

---

## 🚀 Features

- 🔍 Fetch all comic characters (paginated, 100 per request)

- 👤 Fetch details for a specific character by ID

- 📘 Fetch details for a specific comic issue by ID

- 🔐 Uses `.env` for API key management

- 🔧 Built with `express`, `axios`, and `dotenv`

---

## 📦 Setup

1. Clone the repository:

```
git clone https://github.com/charlespalmerbf/comicvine-api-server.git

cd comicvine-api-server
```

Install dependencies:

```
npm install
```

Create a .env file in the root of the project and add your Comic Vine API key:

```
API_KEY=your_comicvine_api_key
```

Start the server:

```
node index.js
```

The server will start on http://localhost:3000.

## 📘 API Endpoints

GET /characters

Returns up to 100 comic characters (Comic Vine API max).

```
GET http://localhost:3000/characters
```

Returns a list of characters with all available fields.

```
GET /character/:id
```

Returns detailed data for a single character.

Comic Vine character IDs are in the format 4005-<id>, and this route expects only the numeric part.

```
GET http://localhost:3000/character/123
```

Internally calls:

```
https://comicvine.gamespot.com/api/character/4005-123/
```

```
GET /issue/:id
```

Returns detailed data for a single issue.

Comic Vine issue IDs are in the format 4000-<id>, and this route expects only the numeric part.

```
GET http://localhost:3000/issue/4567
```

Internally calls:

```
https://comicvine.gamespot.com/api/issue/4000-4567/
```

## 📌 Notes

All endpoints return full field sets (no field_list is specified).

The /characters endpoint is limited to 100 results per request.

Add pagination support via the offset query param if needed.

API rate limits may apply --- consider caching or retries for production.

## 🛠 Built With

- Express

- Axios

- dotenv

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
