# 6 kyu
# Python
# IQ Test
# By: AlexIsHappy

# Bob is preparing to pass IQ test. The most frequent task in
# this test is to find out which one of the given numbers differs
# from the others. Bob observed that one number usually differs
# from the others in evenness. Help Bob — to check his answers,
# he needs a program that among the given numbers finds one that
# is different in evenness, and return a position of this number.
# ! Keep in mind that your task is to help Bob solve a real IQ test,
# which means indexes of the elements start from 1 (not 0)


def iq_test(numbers):
    num_list = list(numbers.split())
    num_list = list(map(int, num_list))
    odd = []
    even = []
    for n in num_list:
        if n % 2 == 0:
            even.append(n)
        elif n % 2 != 9:
            odd.append(n)
            
    if len(odd) > 1:
        return num_list.index(even[0]) + 1
    elif len(even) > 1:
        return num_list.index(odd[0]) + 1
