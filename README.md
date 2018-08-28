# klas
Styr en robot över wifi

## Innan du börjar

Gör raspberry pi till en access point

https://www.raspberrypi.org/documentation/configuration/wireless/access-point.md

### Installera några saker

Senaste versionen av node js

`wget -O - https://raw.githubusercontent.com/sdesalas/node-pi-zero/master/install-node-v.last.sh | bash` 

Eller en specifik version av node js https://github.com/sdesalas/node-pi-zero

Installera pigpio

`sudo apt-get install pigpio`

`sudo npm install --unsafe-perm pigpio`

## Starta servern

För att starta servern, kör

`node index`
