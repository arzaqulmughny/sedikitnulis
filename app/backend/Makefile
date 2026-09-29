GOBIN ?= $(shell go env GOPATH)/bin

.PHONY: install-go-test-coverage
install-go-test-coverage:
	go install github.com/vladopajic/go-test-coverage/v2@latest

.PHONY: coverage
coverage:
	go test ./... -coverprofile=./cover.out -covermode=atomic -coverpkg=./...
	${GOBIN}/go-test-coverage --config=./.testcoverage.yml

.PHONY: coverage-func
coverage-func:
	go tool cover -func=./cover.out

.PHONY: coverage-html
coverage-html:
	go test ./... -coverprofile=cover.out
	go tool cover -html=cover.out


