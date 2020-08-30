def solution(n):
    return sum([num + 1 for num in range(n) if n % (num + 1) == 0])
