def solution(d, budget):
    d.sort()
    count = 0
    for current in d:
        if budget < current:
            break
        budget -= current
        count += 1

    return count