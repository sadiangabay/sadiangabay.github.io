---
title: Reference Part II
layout: article
secret: true
---

Brief introduction.
A fillet mignon while an inquisitive book changed an insect to the tasty boar. The arrangement stood without anything. We won't be giving themselves to themselves.
{:.brief-intro.center}

* * * *

### Block variants

These variants work on almost all content blocks: `p`, `h2..h6`, `blockquote`, and so on... even `hr`. (See `standard-block.sass`)

 - `.wide` -- makes it wider.
 - `.mspaced` -- semi-big spaces around it.
 - `.spaced` -- big spaces around it.
 - `.center` -- text align center.

### Custom block types

Custom blocks. The block variants above should also apply to these. (See `block.*.sass`)

 - `.brief-intro` -- a large paragraph.
 - `.full-image` -- big images. (variants: `.stretch`, `.crop`)
 - `.pull-quote` -- pull quote.
 - `.panorama-section` -- panoramic section. (variants: `.fixed`)
 - `hr` -- horizontal rule. (variants: `.stars`)
 - `.with-footnote` -- has a caption. put a blockquote inside it. (variants: 
     `.left`, `.right`)

### Post options

 - `headline_class` - class for the headline
 - `secret` - set to *true* to keep it from listings
 - `show_byline` - set to *false* to hide author/date
 - `show_footer` - set to *false* to hide my face
 - `show_header` - set to *false* to hide chrome

* * * *
{:.spaced}

### Paragraph

Standard paragraph.
The salt of the earth will be him after they will be us monthly. He was not
curly or the alpaca cheerfully since the coffee cried yesterday. The Latin
truth isn't steady wonderfully. In addition to a rubbery insertion, something
wasn't sharply himself.

* * * *

This is a `.wide` paragraph.
The time of day gave the monkey for a force of nature. They aren't ripe. They
will be incredibly dominators. Tomorrow, tomorrow, nothing will be sharp
monthly, then a rhyme and reason will be the bird tomorrow. A constitutional
monarchy argued yesterday.
{:.wide}

* * * *
{:.stars}

The line above was stars. This is a pull quote. It has the `pull-quote` class to make this nicer.
{:.pull-quote}

Standard paragraph.
The salt of the earth will be him after they will be us monthly. He was not
curly or the alpaca cheerfully since the coffee cried yesterday. The Latin
truth isn't steady wonderfully. In addition to a rubbery insertion, something
wasn't sharply himself.

* * * *
{:.stars}

### Code blocks

~~~rb
class MyCode
  define_method :hello do
    if Object.is_a?(Hash) && defined?(::Rails)
      puts "hello"
    end
  end
end
~~~

It may be used within a `.with-footnote` block.

<div class='with-footnote -left'>
> This is some code.<br>
> It is highlighted.

~~~js
(function ($) {
  $.fn.methodName = function (args) {
    $(this).each(function () {
      return callback(key, index);
    });
  };
})(jQuery);
~~~
</div>

* * * *

## Wide code block

~~~rb
class MyCode
  define_method :hello do
    if Object.is_a?(Hash) && defined?(::Rails)
      puts "hello"
    end
  end
end
~~~
{:.wide}

* * * *

## Lists and stuff

Below is an unordered list with no paragraphs. He will become, however, the 
British mug will be later independent and orange.

* A helping hand is visiting
* A fillet mignon can send, balls and chains smile
* Benefits of the doubt should manage
* Days of the week allow crows for themselves

This is an ordered list.

0. A helping hand is visiting
0. A fillet mignon can send, balls and chains smile
0. Benefits of the doubt should manage
0. Days of the week allow crows for themselves

* * * *

