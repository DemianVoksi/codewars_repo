# 6 kyu

# by: JKphobic

# You live in the city of Cartesia where all roads are
# laid out in a perfect grid. You arrived ten minutes too
# early to an appointment, so you decided to take the
# opportunity to go for a short walk. The city provides
# its citizens with a Walk Generating App on their phones --
# everytime you press the button it sends you an array of
# one-letter strings representing directions to walk
# (eg. ['n', 's', 'w', 'e']). You always walk only a single
# block for each letter (direction) and you know it takes
# you one minute to traverse one city block, so create a
# function that will return true if the walk the app gives
# you will take you exactly ten minutes (you don't want to 
# be early or late!) and will, of course, return you to 
# your starting point. Return false otherwise.


def is_valid_walk(walk):

    wn = []
    ws = []
    ww = []
    we = []
    
    for i in walk:
        if i == 'n':
            wn.append(i)
        elif i == 's':
            ws.append(i)
        elif i == 'w':
            ww.append(i)
        elif i == 'e':
            we.append(i)
        else:
            pass

    lenwe = len(we)
    lenww = len(ww)
    lenws = len(ws)
    lenwn = len(wn)
    lenws = - lenws
    lenwe = - lenwe
    length_ns = lenwn + lenws
    length_we = lenww + lenwe

    if len(walk) == 10 and length_ns == 0 and length_we == 0:
        return True
    else:
        return False
