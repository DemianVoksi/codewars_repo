# 7 kyu

# by: Schulzkafer

# You are given a string of letters and an array of numbers.
# The numbers indicate positions of letters that must be removed,
# in order, starting from the beginning of the array.
# After each removal the size of the string decreases
# (there is no empty space).
# Return the only letter left.


def last_survivor(letters, coords):
    lislet = list(letters)
    strlet = ''
    for c in coords:
        lislet.pop(c)
    for l in lislet:
        strlet = strlet + l
    return strlet
