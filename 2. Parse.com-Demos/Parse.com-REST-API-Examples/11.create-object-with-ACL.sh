curl -X POST \
  -H "X-Parse-Application-Id: TWvkNXvWKe6GixlxZ44tv8pwacMJMwleMuG2oIT2" \
  -H "X-Parse-REST-API-Key: vIaiOnNJTeV4ZnqSHrocG4jlCP00iJd24NywZkM9" \
  -H "Content-Type: application/json" \
  -d '{"notes":"My private notes", "ACL":{ "*":{"read":true}, "6nt64Njj8W":{"write":true,"read":true} }
}' \
  https://api.parse.com/1/classes/UserData
