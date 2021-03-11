FROM ubuntu
RUN apt update -y && apt install tzdata -y  && apt dist-upgrade -y
RUN apt install php -y && apt install apache2 -y
EXPOSE 80
CMD /usr/sbin/apache2ctl -D FOREGROUND
