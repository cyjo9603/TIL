def solution(strings, n):
    return sorted(sorted(strings), key=lambda s: s[n])
