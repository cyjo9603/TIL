def solution(answers):
    solutionA = [1, 2, 3, 4, 5] * (len(answers) // 5 + 1)
    solutionB = [2, 1, 2, 3, 2, 4, 2, 5] * (len(answers) // 8 + 1)
    solutionC = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] * (len(answers) // 10 + 1)
    score = [0] * 3

    for i in range(len(answers)):
        if solutionA[i] == answers[i]:
            score[0] += 1
        if solutionB[i] == answers[i]:
            score[1] += 1
        if solutionC[i] == answers[i]:
            score[2] += 1

    maxScore = max(score)
    answer = []
    for i in range(len(score)):
        if score[i] == maxScore:
            answer.append(i + 1)

    return answer


print(solution([1, 3, 2, 4, 2]))
