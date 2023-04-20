# cse110-sp23-group15

## Team

[Meet the Team](./admin/team.md)

## Development

Recommended setup for dev environment. You can use other method you prefer.

### Requirements

- `npm`

### Installation

```bash
npm install -g browser-sync
```

### Usage

```bash
# Make sure you are in the root directory of the project
cd cse110-sp23-group15

# Start live server. Your browser window will auto-open http://localhost:3000
# that watches for all file changes in the current directory and reload
# auto-reload the page when changes are detected.
browser-sync start --server --files "*"
```

See [BrowserSync](https://browsersync.io/) for more details.

