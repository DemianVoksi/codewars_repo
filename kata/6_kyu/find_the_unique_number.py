# 6 kyu

# by: isqua

# There is an array with some numbers.
# All numbers are equal except for one. Try to find it!


def find_uniq(arr):
    num = [[x, arr.count(x)] for x in set(arr)]
    for n in num:
        if n[1] == 1:
            return n[0]
