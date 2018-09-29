# klas
Styr en robot över wifi

## Innan du börjar

Följ denna guiden:

https://www.raspberrypi.org/documentation/configuration/wireless/access-point.md

Sätt den nya ip addressen till:

`10.0.0.1`

### Gör dessa kommandon om du vill att servern ska starta automatiskt

`sudo nano /etc/rc.local`

Innan `Exit 0`, lägg till:

`cd /home/pi/ && sudo nano app`

Starta om:

`sudo reboot`

### Installation

Senaste versionen av node:

`wget -O - https://raw.githubusercontent.com/sdesalas/node-pi-zero/master/install-node-v.last.sh | bash` 

Pigpio:

`sudo apt-get install pigpio`

Node moduler:

`npm install`

## Starta servern

`node app`
