FROM node:18-alpine as builder

WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

###################
FROM node:18-alpine as runner
WORKDIR /app
COPY --from=builder /app/dist /app
COPY package.json yarn.lock ./
RUN yarn install --prod
CMD ["node", "index.js"]


# v1
# =================
# FROM node:18
# WORKDIR /app
# COPY . ./
# RUN yarn install
# RUN yarn build
# CMD ["node", "dist/index.js"]


# v2
# =================
# FROM node:18-alpine
# WORKDIR /app
# COPY package.json .
# COPY yarn.lock .
# RUN yarn install
# COPY . ./
# RUN yarn build

# CMD ["node", "dist/index.js"]
