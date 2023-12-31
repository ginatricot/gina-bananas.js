.PHONY: build dist
build:
	npm run test

BRANCH := $(shell git branch | grep \* | cut -d ' ' -f2)
dist: build
	@echo Cleaning local dist branch...
	@rm -rf node_modules/gh-pages/.cache
	@echo Pushing built dist to branch: dist/$(BRANCH)
	@./node_modules/.bin/gh-pages --dist dist --branch dist/$(BRANCH)
