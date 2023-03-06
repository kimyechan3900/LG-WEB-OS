# LG-WEB-OS

LG WEB-OS error solution

1.node
  install node
    -sudo apt install node
  node version check
    -node -version or node -v

2.install npm
  install npm
    -sudo apt install npm
  node version check
    -npm -version or npm -v
    
3.update latest node
  -sudo npm cache clean --force
  -sudo npminstall -g n
  -sudo n stable
  -sudo npm install -g npm
  
4.install virtual box
  -wget -q https://www.virtualbox.org/download/oracle_vbox_2016.asc -O- | sudo apt-key add -
wget -q https://www.virtualbox.org/download/oracle_vbox.asc -O- | sudo apt-key add -
-sudo add-apt-repository "deb [arch=amd64] http://download.virtualbox.org/virtualbox/debian $(lsb_release -cs) contrib"
-sudo apt update
-sudo apt install virtualbox-6.0

5.connecting to the virtual web os using ssh
  -ssh -p 6622 root@localhost (portforwading 6622 : 22)
6.security copy to the virtual web os using scp
  -scp -P 6622 (file name) root@localhost:(copy location)   (portforwading 6622 : 22)
  
7.installing web os cli
  install ares
    -npm install -g @webosose.ares-cli
  ares version check
    -ares --version
    
  ! install -g (globlal installation error)
    -mkdir ~/.npm-global (home directory)
    -npm config set prefix '~/.npm-global'
    add to '~/.npm-global' file this code
    -export PATH=~/.npm-global/bin:$PATH
    -source ~/.profile(update file)
    
8.ares 
  create ares app
    -ares-generate (app name)
  packagin app
    -ares-package (app name)
  remote download app
    -ares-install --device (target device) (app id)_(version)_all.ipk
  remote execution app
    -ares-launch --device (target device) (app id)
  remote close app
     -ares-launch --device (target device) --close (app id)
