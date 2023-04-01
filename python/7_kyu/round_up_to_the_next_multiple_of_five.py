# 7 kyu
# Python
# Round up to the next multiple of 5
# By: hwtdstrngls

# Given an integer as input, can you round it to the next
# (meaning, "higher") multiple of 5?


def round_to_next5(n):
    while n % 5 != 0:
        n = n + 1
    return n
