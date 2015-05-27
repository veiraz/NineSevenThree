# NineSevenThree

This is a personal fork of the original
[NineSevenThree](https://github.com/resir014/NineSevenThree/releases)
maintained by me, released under the same license. Refer to it for general
build instruction.

## What has been changed:

* Grid calculation is now done with a SASS function rather than a set width
  for easy maintaining.
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
* There's also the addition of a few shorthands, such as `col-one-third`,
  `col-half`, etc.
* Also you no longer need to file columns under `col`.
* All styles has been ripped out. I will be ading them soon, but as of now,
  there are none.
* Other various cleanups.

## To-do

* Typographic styling.
* General styling.
* Better documentation.

