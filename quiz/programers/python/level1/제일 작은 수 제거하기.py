def solution(arr):
    arr.remove(min(arr))
    return arr if len(arr) else [-1]