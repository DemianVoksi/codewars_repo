# 7 kyu
# Python
# Club Doorman
# By: brudolce

# The Club Doorman will give you a word. To enter the Club you need to
# provide the right number according to provided the word.
# Every given word has a doubled letter, like 'tt' in lettuce.
# To answer the right number you need to find the doubled letter's
# position of the given word in the alphabet and multiply this number
# per 3. It will be given only words with one doubled letter.


def pass_the_door_man(word):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    alph_position = 0

    for n in word:
        if n == word[word.index(n) + 1]:
            letter = n
            break

    alph_position = alphabet.index(letter) + 1
    code = alph_position * 3
    return code
