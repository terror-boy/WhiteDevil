FROM fusuf/whatsasena:latest

RUN git clone https://github.com/farooqbot/WhiteDevil /root/whitedevil
WORKDIR /root/whitedevil/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
