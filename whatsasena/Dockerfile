FROM fusuf/whatsasena:latest

RUN git clone https://github.com/WAHID-BOT/Bo5co /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
