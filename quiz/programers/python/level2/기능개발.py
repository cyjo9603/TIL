def solution(progresses, speeds):
    answer = []
    while progresses:
        count = 0
        for i in range(len(progresses)):
            progresses[i] += speeds[i]
        print(progresses)
        while True and len(progresses):
            if progresses[0] < 100:
                break
            progresses.pop(0)
            speeds.pop(0)
            count += 1
        if count:
            answer.append(count)
    return answer


print(solution([93, 30, 55], [1, 30, 5]))
