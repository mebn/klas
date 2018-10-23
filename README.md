# klas

Styr en robot över wifi.

### Installation

Senaste versionen av node:

`wget -O - https://raw.githubusercontent.com/sdesalas/node-pi-zero/master/install-node-v.last.sh | bash` 

Pigpio:

`sudo apt-get install pigpio`

Node moduler:

`npm i`

## Anslutningspunkt (access point)

Om din raspberry pi inte har ett ethernet port, se till att installera allt innan du gör dessa steg.

Följ denna guiden:

https://www.raspberrypi.org/documentation/configuration/wireless/access-point.md

Sätt den nya ip addressen till:

`10.0.0.1`

### Starta servern automatiskt

Gå till rc.local:

`sudo nano /etc/rc.local`

Innan `Exit 0`, lägg till:

`cd /home/pi/klas && sudo node app`

Starta om:

`sudo reboot`

Servern kommer nu automatiskt att starta utan att du behöver gå in och starta den.

## Starta servern manuellt

`sudo node app`
