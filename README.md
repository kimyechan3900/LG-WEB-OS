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
  
6.installing web os cli
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
    
