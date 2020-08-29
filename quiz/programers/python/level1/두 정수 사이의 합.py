def solution(a, b):
    return sum(range(a, b + 1) if a < b else range(b, a + 1))


print(solution(3, 5))
