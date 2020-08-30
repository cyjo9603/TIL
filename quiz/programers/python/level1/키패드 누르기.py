def solution(numbers, hand):
    left = "*"
    right = "#"
    answer = ""

    for current in numbers:
        if current in (1, 4, 7):
            left = current
            answer += "L"
        elif current in (3, 6, 9):
            right = current
            answer += "R"
        else:
            leftDistance = getDistance(current, left)
            rightDistance = getDistance(current, right)
            if leftDistance == rightDistance:
                if hand == "right":
                    right = current
                    answer += "R"
                else:
                    left = current
                    answer += "L"
            elif leftDistance < rightDistance:
                left = current
                answer += "L"
            else:
                right = current
                answer += "R"

    return answer


def getDistance(press, current):
    keypad = [1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"]
    pressIndex = keypad.index(press)
    currentIndex = keypad.index(current)

    pressPath = [pressIndex % 3, pressIndex // 3]
    currentPath = [currentIndex % 3, currentIndex // 3]

    return abs(pressPath[0] - currentPath[0]) + abs(pressPath[1] - currentPath[1])
