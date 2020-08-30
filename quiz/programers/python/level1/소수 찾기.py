def solution(n):
    number = [False, False] + [True] * (n - 1)

    for i in range(2, n + 1):
        if number[i]:
            for j in range(2 * i, n + 1, i):
                number[j] = False

    return len(list(filter(lambda x: x, number)))


print(solution(100))