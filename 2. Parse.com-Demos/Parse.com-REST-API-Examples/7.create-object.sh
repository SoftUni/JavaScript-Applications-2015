curl -X POST \
  -H "X-Parse-Application-Id: TWvkNXvWKe6GixlxZ44tv8pwacMJMwleMuG2oIT2" \
  -H "X-Parse-REST-API-Key: vIaiOnNJTeV4ZnqSHrocG4jlCP00iJd24NywZkM9" \
  -H "Content-Type: application/json" \
  -d '{"playerName":"Peter", "score":1337, "cheatMode":false, "location":{"lat":42.7070801,"lng":23.3573928}, "levelsPassed":[3,4,5,"last"]}' \
  https://api.parse.com/1/classes/GameScore
