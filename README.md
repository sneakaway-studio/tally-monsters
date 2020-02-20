
Rotating product monsters from Tally.




## Platforms

### Raspberry Pi `exhibitpi2019`

Exhibitions Instructions
1. Plug in the HDMI and then the power on the Raspberry Pi
2. Run the script on the desktop called `start-full-screen.sh` (also can be found in `/var/www/html/tally-monsters/platforms/raspberry-pi`)
3. Type `F11` (`FN` + `F11` on the black mobile keyboard) to exit fullscreen

Setup Instructions
1. A Raspberry Pi 3 with Chromium Browser, Apache2, Git
2. Purge unused software 
```
sudo apt-get purge smartsim java-common minecraft-pi libreoffice* -y
sudo apt-get purge wolfram-engine scratch scratch2 nuscratch sonic-pi idle3 -y
sudo apt-get clean
sudo apt-get autoremove -y
sudo apt-get update
sudo apt-get upgrade
```
3. Clone the repo and place in `/var/www/html/tally-monsters`

