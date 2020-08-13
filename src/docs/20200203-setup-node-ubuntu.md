---
create: '2020-02-03'
update: '2020-07-30'
author: Kawano Yudai
title: 'Build FrontEnd environment on Ubuntu'
tags: [ubuntu, node]
---

from [Gist: oriverk/InstallLanguage2Ubuntu.md](https://gist.github.com/oriverk/5d0352c7ca673883d9326e5ce0fb2ae1)

## Setup
*rails6 uses webpacker, which needs nodejs

```sh
sudo apt install -y nodejs npm
# install n-package
sudo npm install n -g
# confirm stable nodejs ver
n --stable
# confirm latest nodejs ver
n --latest
# by n-package, install node
sudo n stable( or latest )
# uninstal old nodejs and npm, and re-login
sudo apt purge -y nodejs npm
exec $SHELL -l

# confirm
node -v
```