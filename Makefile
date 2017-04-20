define npm_script_targets
TARGETS := $(shell node -e 'for (var k in require("./package.json").scripts) {console.log(k.replace(/:/g, "-"));}')
$$(TARGETS):
	yarn $(subst -,:,$(MAKECMDGOALS))

.PHONY: $$(TARGETS)
endef

$(eval $(call npm_script_targets))

mega-install:
	@echo "\xF0\x9F\x90\xB8  Welcome to the megainstall command, it will install the dependencies and generate a build"
	@sleep 4s
	@echo "\xE2\xAD\x90  Installing yarn"
	make install-yarn
	@sleep 1s
	@echo "\xF0\x9F\x8D\x94  Installing dependencies"
	make yarn
	@echo "\xE2\x9A\xA1 Compil webpack"
	make build
	@echo "SUCCESS"

install-yarn:
	npm install yarn

update:
	@echo "\xF0\x9F\x90\xB8  Welcome to the update command, it will update the projet and rebuild"
	@sleep 2s
	@echo "\xF0\x9F\x90\xB1  Updating dependencies"
	make yarn
	@echo "\xE2\x9A\xA1  Compil webpack"
	make build-dev
	@echo "SUCCESS"

regen:
	@echo "\xF0\x9F\x90\xB8  Welcome to the regeneration command, it will regenerate dependencies and rebuild"
	@sleep 4s
	@echo "\xF0\x9F\x9A\xBD  Cleaning dependencies"
	rm -rf node_modules
	@echo "\xE2\xAD\x90  Installing yarn"
	make install-yarn
	@sleep 1s
	@echo "\xF0\x9F\x8D\x94  Installing dependencies"
	make yarn
	@echo "\xE2\x9A\xA1  Compil webpack"
	make build-dev
	@echo "SUCCESS"

yarn:
	yarn

webpack:
	@echo "\xF0\x9F\x90\xB8  Welcome to the webpack command, it will generate a build via webpack"
	webpack --progress