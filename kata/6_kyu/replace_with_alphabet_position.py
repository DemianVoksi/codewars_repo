# 6 kyu
# Python
# Replace With Alphabet Position
# By: MysteriousMagenta

# In this kata you are required to, given a string, replace
# every letter with its position in the alphabet.
# If anything in the text isn't a letter, ignore it and don't return it.


def alphabet_position(text):
    numbers_list = []
    numbers_string = ""
    alphabet = "abcdefghijklmnopqrstuvwxyz"

    for i in text:
        if i in alphabet:
            numbers_list.append(alphabet.index(i) + 1)
        elif i in alphabet.upper():
            numbers_list.append(alphabet.upper().index(i) + 1)
        else:
            pass

    numbers_string = ' '.join(str(n) for n in numbers_list)
    return numbers_string
