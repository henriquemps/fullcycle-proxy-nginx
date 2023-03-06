FROM node:16.15-slim

WORKDIR /app

COPY . .

RUN apt-get update && apt-get install -y wget

# Adicionando o script wait-for-it.sh
ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh /usr/wait-for-it.sh
RUN chmod +x /usr/wait-for-it.sh

EXPOSE 3000

CMD ["npm i && npm start"]