var sentences = [
'blue is greener than purple for sure',
'wow thats random',
'I stepped on a Corn Flake, now I\'m a Cereal Killer',
'Llamas eat weird paper clips',
'On a scale from one to ten what is your favourite colour of the alphabet?',
'Banana error!!!!!',
'Everyday a grape licks a friendly cow',
'The sparkly lamp ate a pillow then punched Larry',
'If your canoe is stuck in a tree with the headlights on, how many pancakes does it take to get to the moon?',
'Look, a distraction!',
'What do you think about the magical yellow unicorn who dances on the rainbow with a spoonful of blue cheese dressing?',
'Adding a new item is like a Turkey sandwich, you pet a dog',
'When life gives you lemons, chuck them at people you hate',
'A Zebra licked a DVD'
]

function newSentence() {
    var randomNumber = Math.floor(Math.random() * (sentences.length));
    document.getElementById('sentenceDisplay').innerHTML = sentences[randomNumber];
}