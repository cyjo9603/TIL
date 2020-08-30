def solution(s):
    if len(s) != 4 and len(s) != 6:
        return False
    for i in s:
        if not 57 >= ord(i) >= 48:
            return False
    return True


print(solution("1234"))
