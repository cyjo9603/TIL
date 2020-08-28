def solution(a, b):
    DAY_OF_WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    DAY_PER_MONTH = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    totalDay = b + 4
    for i in range(a - 1):
        totalDay += DAY_PER_MONTH[i]
    return DAY_OF_WEEK[totalDay % 7]


print(solution(5, 24))
