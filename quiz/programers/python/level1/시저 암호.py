def solution(s, n):
    answer = ""
    for i in s:
        answer += pushChar(i, n) if i != " " else " "
    return answer


def pushChar(char, n):
    asciiNumber = ord(char)
    isUpperCase = 90 >= asciiNumber >= 65

    asciiNumber += n

    if (isUpperCase and asciiNumber > 90) or (not isUpperCase and asciiNumber > 122):
        asciiNumber -= 26

    return chr(asciiNumber)