swc:
	@(cd swc \
		&& uwe build --exec > /dev/null 2>&1 \
		&& grep ✓ build/release/assets/scripts/main.js > /dev/null)
	@echo "swc ✓"

esbuild:
	@(cd esbuild \
		&& uwe build --exec > /dev/null 2>&1 \
		&& grep \u2713 build/release/assets/scripts/main.js > /dev/null)
	@echo "esbuild ✓"

babel:
	@(cd babel \
		&& uwe build --exec > /dev/null 2>&1 \
		&& grep ✓ build/release/assets/scripts/main.js > /dev/null)
	@echo "babel ✓"

webpack:
	@(cd webpack \
		&& uwe build --exec > /dev/null 2>&1 \
		&& grep ✓ build/release/assets/scripts/main.js > /dev/null)
	@echo "webpack ✓"

sass:
	@(cd sass \
		&& uwe build --exec > /dev/null 2>&1 \
		&& grep ✓ build/release/assets/styles/main.css > /dev/null)
	@echo "sass ✓"

postcss:
	@(cd postcss \
		&& uwe build --exec > /dev/null 2>&1 \
		&& grep ✓ build/release/assets/styles/main.css > /dev/null)
	@echo "postcss ✓"

tailwind-postcss:
	@(cd tailwind-postcss \
		&& uwe build --exec > /dev/null 2>&1 \
		&& grep ✓ build/release/assets/styles/main.css > /dev/null)
	@echo "tailwind-postcss ✓"

test: swc esbuild babel webpack sass postcss tailwind-postcss

.PHONY: nvm test swc esbuild babel webpack sass postcss tailwind-postcss
