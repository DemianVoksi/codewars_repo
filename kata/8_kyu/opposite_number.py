# Opposite number
# 8 Kyu
# Python
# By: sergioet
# Very simple, given an integer or a floating-point number, find its opposite.


def opposite(number):
    if number == 0:
        opposite_number = 0
    else:
        opposite_number = number - (2 * number)
    
    return opposite_number
