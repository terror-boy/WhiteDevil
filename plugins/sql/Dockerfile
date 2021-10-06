FROM quay.io/lyfe00011/test:beta

RUN git clone https://github.com/terror-boy/WhiteDevil.git /root/whatsAsena/
RUN git clone https://github.com/terror-boy/White.git
RUN mv /root/bottus/* /root/whatsAsena/
WORKDIR /root/whatsAsena/ 

CMD ["node", "bot.js"]
