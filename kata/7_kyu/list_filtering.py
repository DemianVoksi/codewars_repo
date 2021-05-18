# 7 kyu

# by: cmberger

# In this kata you will create a function that takes a list
# of non-negative integers and strings and returns
# a new list with the strings filtered out.


def filter_list(l):
    nl = []
    for x in l:
        if type(x) != str:
            nl.append(x)
        else:
            pass
    return nl
