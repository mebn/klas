# klas
Styr en robot över wifi

## Innan du börjar

Gör raspberry pi till en anslutningspunkt (access point)

https://www.raspberrypi.org/documentation/configuration/wireless/access-point.md

Se till att den nya ip addresen är `10.0.0.1`

### Installera några saker

Senaste versionen av node js

`wget -O - https://raw.githubusercontent.com/sdesalas/node-pi-zero/master/install-node-v.last.sh | bash` 

Eller en specifik version av node js https://github.com/sdesalas/node-pi-zero

Installera node_modules

`npm install`

Installera pigpio

`sudo apt-get install pigpio`

`npm i pigpio`

## Starta servern

För att starta servern, kör

`node index`
