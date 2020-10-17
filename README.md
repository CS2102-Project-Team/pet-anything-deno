# Pet-Anything-Deno

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
