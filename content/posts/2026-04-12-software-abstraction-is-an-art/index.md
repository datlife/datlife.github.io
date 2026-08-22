---
title: "Software Abstraction is an Art"
slug: "software-abstraction-is-an-art"
date: 2026-04-12T10:00:00-05:00
tags: ["software"]
draft: false
summary: "Recognizing bad abstraction is easy. Getting it right is an art."
aliases:
  - /posts/2026-04-12-ux-is-the-most-valuable-part-of-modern-software/
---

After a few years in the tech industry, I've come to believe that one of the
biggest factors in whether a piece of software succeeds is its abstraction.
Not its algorithm, not its language, not its architecture diagram — the
abstraction: what the software asks its users to think about, and what it
lets them ignore.

Recognizing *bad* abstraction is easy. You know it when you feel it: the API
that makes you pass eleven arguments to do the obvious thing, the framework
that forces you to learn its internal vocabulary before you can print
"hello world", the wrapper that hides exactly the knob you needed. Getting
abstraction *right* is the hard part, and I think it qualifies as an art.

## An example I lived through

I learned this the slow way, training object detectors in early TensorFlow.

In TensorFlow 1.x, to train a model you built a static computation graph,
opened a `Session`, ran an init op, and fed batches through placeholder
tensors in a hand-written loop. None of those concepts — graphs, sessions,
placeholders, feed dicts — had anything to do with the problem I was solving.
They were the *implementation's* concepts, leaking upward into my code. Every
tutorial from that era spends its first half explaining the machinery instead
of the model.

Then Keras put a different surface on the same machinery:

```python
model.compile(optimizer="adam", loss="categorical_crossentropy")
model.fit(dataset, epochs=10)
```

Two lines, and they map one-to-one onto the concepts a person training a model
actually has in their head: *here is my objective, go fit it*. Nothing about
sessions or graphs, because those were never my problem — they were
TensorFlow's problem.

That's what good abstraction is: the software's surface matches the user's
mental model of the task, and everything else stays out of sight.

## Why this is empathy, not engineering

Getting this right requires knowing, thoroughly, how the software will
actually be used — which of the user's concepts are essential and which of
yours are incidental. That knowledge doesn't come from the type system or the
design doc. It comes from watching real users hit real walls, and from the
humility to accept that the concept you're proudest of might be exactly the
one they shouldn't have to see.

Expose just enough that people can use most of the features without paying a
mental tax. Leave a way down for the ones who need it. To me, that's an art