def solution(s):
    return " ".join(["".join(list(map(changeEvenUpper, enumerate(word)))) for word in s.split(" ")])


def changeEvenUpper(value):
    (index, char) = value
    return char.upper() if index % 2 == 0 else char.lower()


print(solution("trye hello world"))
