# 6 kyu
# Python
# Sum of Digits/Digital Root
# By: user578387

# Digital root is the recursive sum of all the digits in a number.
# Given n, take the sum of the digits of n. If that value has more
# than one digit, continue reducing in this way until a single-digit
# number is produced. The input will be a non-negative integer.


def digital_root(n):
    num = str(n)
    nums = []

    while len(num) > 1:
        for i in range(len(num)):
            nums.append(num[i])
        nums = [int(i) for i in nums]
        num = sum(nums)
        num = str(num)
        nums = []

    return int(num)
