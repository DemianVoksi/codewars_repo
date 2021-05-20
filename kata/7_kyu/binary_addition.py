# 7 kyu

# by: garretguy457

# Implement a function that adds two numbers together and
# returns their sum in binary. The conversion can be done
# before, or after the addition.
# The binary number returned should be a string.


def add_binary(a, b):
    num = a + b
    binary = []
    binarystr = ''
    while num >= 1:
        rem = num % 2
        binary.append(rem)
        num = num // 2
    binary.reverse()
    for b in binary:
        binarystr = binarystr + str(b)
    return binarystr
