# pxt-packages

Members of the CodeGuild have been hard at work, creating new, complex, and exciting packages for the BBC micro:bit. This repo contains their work.

You'll find the contents of the [website](http://pxt-packages.codeguild.co) as well as the source code for each of the packages. There's also a list of possible improvements to be made, so if you'd like to contribute you can get cracking straight away!

## Making your own Package

To make your own package you'll need to use the beta version of the online pxt editor: https://pxt.microbit.org/beta.

With this version you can create your own package by creating a `custom.ts` file that contains your package's code.

1) Switch to JavaScript mode
2) Expand the Explorer file list and then click the plus button that appears
3) Agree to the pop up
4) Edit the newly created `custom.ts` file to make your package
5) Switch back to the Blocks mode to see and use your new package

You can find help and more instructions here: https://pxt.microbit.org/blocks/custom

There is also some useful information on coding custom packages here: https://makecode.com/defining-blocks

## Sharing your Package

When you've built something amazing you'll want to share it with others.

1) Click the "Share" link in the top left of the editor
2) Agree to publish your project
3) Copy the URL, people can visit this link to use your package
4) Expand the "Embed" section and click on the "Simulator" tab
5) Copy this embed code, you can use this to show off your package in the website

## Making Changes to the Website

If you'd like to have your package listed on the website then you'll need to make changes to this repository. Here's how:

You'll need to make sure you've got [git](https://git-scm.com/), [VirtualBox](https://www.virtualbox.org/), and [Vagrant](https://www.vagrantup.com/) installed. They're all free and pretty easy to install.

Then you'll need to fork this repo (so you'll need a GitHub account, if you don't already have one). This is easy, just click the "Fork" button in the top right of this page.

You'll now have your own copy of the repository stored in your own account. You can make whatever changes you'd like to this copy; it's yours.

To make changes you'll need to clone your fork. This might require running something like this on the command line:

    $ git clone https://github.com/YOUR_USERNAME/pxt-packages

This will have downloaded the repo to your computer. Let's now get vagrant up and running by doing:

    $ cd pxt-packages
    $ vagrant up

This one might take a while, but when it's done there will be a virtual machine running on your computer with all the code inside. We can connect to the virtual machine like this:

    $ vagrant ssh

And now we can serve the website locally:

    $ cd /vagrant
    $ jekyll serve

If you now open this link: http://192.168.33.10:4000 you should see the pxt-packages website. Except this one is running on your machine, so changes we make here will be seen on the website.

To reload the website with any new changes, you might have to restart the jekyll server by pressing `Ctrl-c` and then running `jekyll serve` again.

When you're done making changes you'll want to have them included in the official website (not just your own). So first push your changes up to your fork:

    $ git add CHANGED_FILE CHANGED_FILE
    $ git commit -m 'DESCRIPTION_OF_CHANGES'
    $ git push origin master

If you don't know what the `git add` or `git commit` instructions are doing, ask around!

Now your fork will have the changes, let's make a pull request to the main repo to have them included in the main site. You'll need to open your fork on the GitHub website and click the "New Pull Request" button. Hopefully you'll see a green bit of text that says "Able to merge", if so, click the "Create pull request" button, provide a description of the work you've done and alick "Create pull request" again. If instead you see a red error message, you'll have to fix the problems it talks about before your work can be merged.

## Adding a Package to the Website

Assuming that you've built your own package, you've published and shared it, and you're ready to make changes to the website. Here's how to add a package to the list.

1) Create a new directory inside the `projects` directory. Call it something like `pxt-PACKAGE-NAME`
2) Inside this directory put your `custom.ts` file that you've been editing using the online editor
3) Add a `README.md` file to the directory, giving instructions for developers on how to develop your package
4) Add an `index.md` file to the directory giving instructions on how to use your package
5) Add a link to your directory in the `list.md` file

Take a look at the existing projects for clues on how to format the files and what information to put in them.

The `custom.ts` file contains all of the TypeScript (a bit like JavaScript) code that runs the package. The contents of this file follow the [instructions](https://makecode.com/defining-blocks) provided by Microsoft on how to create custom pxt packages. This file is for developers of packages (not normally for people wanting to use the package in their own projects).

The `index.md` file is used to create the webpage for the package. It should contain a link to use the package in the micro:bit online editor, as well as an online example, download links and a diary of the work that went into creating the package. This file should contain enough information for someone to start using the package in their own projects. Make sure to include a diary of the work you've done. What problems are you solving? How did you go about it? What was hard? What was fun?

The `README.md` file contains any information that the package developer thought might be useful for future developers of the package (or other packages). This file is for developers of packages (not normally for people wanting to use the package in their own projects). Make sure to include a list of improvements, things that could be worked on to make the package better.

## Improvements

Here's a list of things that could be done to make this repo/website better.

- Contribute to the existing packages. Take a look at each project's `REAMDE.md` for a list (similar to this one) of possible improvements
- Create your own package. We haven't got that many packages at the moment. Why not build something brand new?
- Make the website nicer. Currently it's using a standard jekyll theme and doesn't have that much content. Why not make it gorgeous?
- Improve the instructions. Did you find the instructions hard to follow? Why not make them better?
