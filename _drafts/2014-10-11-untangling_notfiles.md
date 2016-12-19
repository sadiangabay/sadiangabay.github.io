---
title: "Untangle your dotfiles"
description: "How to use dotfiles for fun and profit"
layout: article
---

There are many solutions for managing your home directory's dot files today.  
For the most part, you don't really need them. Here's a simpler way with no 
dependencies.
{:.brief-intro.center}

* * * *

### Keep a Git repository

Put your dotfiles (without the dot prefix) in a folder in a repository. You can 
also put subdirectories in if you like, such as `vim` and `aria2` here below.

<div class='with-footnote left'>
> #### The dotfiles repo
> You can keep this repository anywhere you like, such as your projects 
directory.

```
~/dotfiles
 ├── ackrc
 ├── vimrc
 ├── ledgerrc
 ├── gemrc
 ├── vim/
 │   ├── after/
 │   ├── bundle/
 │   └── ...
 ├── aria2/
 │   ├── aria2.conf
 │   └── ...
 └── ...
```
</div>

### Create an install script
Then add this script as `install.sh`. Be sure to `chmod +x install.sh` 
afterwards.

<div class='with-footnote left'>
> #### install.sh
> This works by making `ln -nfs` symlinks of each file into your home directory.

```shell
#!/usr/bin/sh
echo "\n  linking from `pwd -LP`\n"
for f in *; do
  if [ "$f" != "install.sh" ]; then
    echo "  .." ~/.`basename $f`
    ln -nfs `pwd -LP`/$f ~/.`basename $f`
  fi
done
```
</div>

### Run it

When you run the install script, it will link the files from the current 
directory into your home directory (eg: `/home/rsc/dotfiles/ackrc` into 
    `~/.ackrc`).

```
◦ ./install.sh

  linking from /home/rsc/dotfiles

  .. /home/rsc/.ackrc
  .. /home/rsc/.vimrc
  .. /home/rsc/.ledgerrc
  .. /home/rsc/.gemrc
  .. /home/rsc/.vim
  .. /home/rsc/.aria2
```

* * * *

## Share and learn!

There are [many dotfile repositories][search] out there in GitHub. Have a look
at some of them to take inspiration from. When you're ready, share yours, too!
Just be sure you don't keep any secrets in there (like `~/.ssh`).

[search]: https://github.com/search?utf8=%E2%9C%93&q=dotfiles
