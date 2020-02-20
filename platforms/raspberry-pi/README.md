
### Raspberry Pi Setup Instructions

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
4. Copy start script `/var/www/html/tally-monsters/platforms/raspberry-pi/start-full-screen.sh` to desktop
5. Make sure it is executable `chmod +x start-full-screen.sh`
