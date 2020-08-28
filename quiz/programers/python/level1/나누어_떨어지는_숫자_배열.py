def solution(arr, divisor):
    return sorted(filter(lambda v: v % divisor == 0, arr)) or [-1]