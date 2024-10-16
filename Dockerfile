
FROM mcr.microsoft.com/playwright:v1.48.1-focal



WORKDIR /usr/src/app


COPY package*.json ./
RUN npm install


COPY . .

EXPOSE 9222

CMD ["npx", "playwright", "test"]