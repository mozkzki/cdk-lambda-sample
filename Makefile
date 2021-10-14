.PHONY: ut start

ut:
	npm run test

start:
	aws lambda invoke --function-name foo response.json --log-type Tail --query 'LogResult' --output text | base64 -d
