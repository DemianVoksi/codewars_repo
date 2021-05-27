# 6 kyu

# by: rbuckley

# Given an array of integers, find the one that appears an odd number of times.

# There will always be only one integer that appears an odd number of times.


def find_it(seq):
    num = [[x, seq.count(x)] for x in set(seq)]
    for n in num:
        if n[1] % 2 != 0:
            return n[0]
