def solution(n, lost, reserve):
    loster = set(lost) - set(reserve)
    reserver = list(set(reserve) - set(lost))
    result = 0

    for i in loster:
        if i + 1 in reserver:
            reserver.remove(i + 1)
        elif i - 1 in reserver:
            reserver.remove(i - 1)
        else:
            result += 1

    return n - result


print(solution(5, [2, 4], [3]))
