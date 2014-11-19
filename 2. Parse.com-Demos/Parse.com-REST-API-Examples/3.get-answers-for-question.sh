curl -X GET \
  -H "X-Parse-Application-Id: TWvkNXvWKe6GixlxZ44tv8pwacMJMwleMuG2oIT2" \
  -H "X-Parse-REST-API-Key: vIaiOnNJTeV4ZnqSHrocG4jlCP00iJd24NywZkM9" \
  -G \
   --data-urlencode 'where={"question":{"__type":"Pointer","className":"Question","objectId":"4uKvW0uAdt"}}' \
  https://api.parse.com/1/classes/Answer
