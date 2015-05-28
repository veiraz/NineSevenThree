# thirtyone

This is a personal fork of the original
[NineSevenThree](https://github.com/resir014/NineSevenThree)
maintained by me, released under the same license. <s>Refer to it for general
build instruction.</s>

Build system has been changed to gulp, to compile (This assumes you have
a working node.js intallation):

    npm i -g gulp
    # On the root of the directory
    npm i
    gulp

### What has been changed:

* Grid calculation is now done with a SASS function rather than a set width
  for easy maintaining
* All size are now set in `rem`, with the base `font-size` normalized to about
  62.5%. Making `1rem` equal in size to `10px`
* Column syntax has been changed, so instead of
  * `col-1`
  * `col-2`
  * `col-3`

  You do:

  * `col-one`
  * `col-two`
  * `col-three`


* There's also the addition of a few shorthands, such as `col-one-third`, `col-half`, etc.
* Also you no longer need to file under `col`
* All styles has been ripped out. I will be adding them soon, but as of now,
  there are none
* Updated dependencies
* Other various cleanups

### To-do:

* Typographic styling
* General styling
* Better documentation


### What's with the name?

    $ echo "sqrt( 973 )" | bc
    31
