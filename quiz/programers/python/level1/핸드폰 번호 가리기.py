def solution(phone_number):
    return "".join(["*" for i in range(len(phone_number) - 4)]) + phone_number[-4:]


print(solution("01033334444	"))
