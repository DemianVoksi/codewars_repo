# 7 kyu
# Python
# Leap Years
# By: BattleRatlle

# In this kata you should simply determine, whether
# a given year is a leap year or not. In case you don't
# know the rules, here they are:
# - years divisible by 4 are leap years
# - but years divisible by 100 are not leap years
# - but years divisible by 400 are leap years


def isLeapYear(year):
    if year % 4 == 0:
        if year % 100 == 0:
            if year % 400 == 0:
                return True
            else:
                return False
        else:
            return True
    else:
        return False
