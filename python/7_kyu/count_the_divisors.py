# 7 kyu
# Python
# Count the divisors of a number
# By: tiriana

# Count the number of divisors of a positive integer n.
# Random tests go up to n = 500000.


def divisors(n):
    count = 0
    for i in range(1, n + 1):
        divided = n/i
        if (divided).is_integer() is True:
            count = count + 1
        else:
            pass
    return count
