# -*- mode: ruby -*-
# vi: set ft=ruby :
Vagrant.configure("2") do |config|
    config.vm.box = "ubuntu/trusty64"
    config.vm.network "private_network", ip: "192.168.33.10"
    config.vm.provision "shell", inline: <<-SHELL
        apt-get update
        apt-get upgrade --assume-yes

        curl -sL https://deb.nodesource.com/setup_6.x | bash -
        apt-get install --assume-yes nodejs build-essential nginx

        apt-get autoremove --assume-yes

        npm install -g pxt

        ln -s /vagrant/nginx.conf /etc/nginx/sites-enabled/pxt
        rm /etc/nginx/sites-enabled/default
        service nginx restart
    SHELL
    config.vm.provision "shell", privileged: false, inline: <<-SHELL
        cd /vagrant
        pxt target microbit
    SHELL
end
