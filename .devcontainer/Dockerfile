# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 18, 16, 14, 18-bullseye, 16-bullseye, 14-bullseye, 18-buster, 16-buster, 14-buster
# List of all images: https://github.com/devcontainers/images/tree/main/src/typescript-node
ARG VARIANT=20-bookworm
FROM mcr.microsoft.com/devcontainers/typescript-node:${VARIANT}

ARG USERNAME="node"

# [Optional] Uncomment this section to install additional OS packages.
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends chromium \
    && apt-get clean

# To install more global node packages
ARG PNPM_VERSION=8.15.5
RUN su node -c "npm install -g pnpm@${PNPM_VERSION}"