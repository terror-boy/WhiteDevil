FROM fusuf/whatsasena:latest

RUN git clone https://github.com/terror-boy/WhiteDevil /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/ 
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN npm install -g npm@8.1.2
RUN yarn install --no-audit
RUN git clone https://github.com/terror-boy/White

CMD ["node", "bot.js"]
