FROM quay.io/lyfe00011/test:beta

RUN git clone https://github.com/terror-boy/WhiteDevil /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/ 
ENV TZ=Europe/Istanbul
RUN yarn install --no-audit
RUN git clone https://github.com/terror-boy/White
RUN mv /root/bottus/* /root/WhatsAsenaDuplicated 

CMD ["node", "bot.js"]
