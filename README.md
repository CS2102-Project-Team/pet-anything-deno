# Pet-Anything-Deno

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/CS2102-Project-Team/pet-anything-deno)

A simple Deno application.

## Usage

```
POST <URL>/query

request body:
{
  "query": "SELECT * FROM accounts;"
}

reqponse body:
{
    "success": true,
    "result": [
        [
            "lirc572",
            "$2b$10$ZDR0KpJvuD7hpSrogQmLEegSDIapf2qkQPtO05NY6wgddsyA5rlc.",
            "e0424619@comp.nus.edu.sg",
            null,
            null,
            null
        ]
    ]
}
```
