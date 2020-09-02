def solution(N, stages):
    return [
        v[0]
        for v in sorted(
            [[i + 1, getFailureRate(i + 1, stages)] for i in range(N)],
            key=lambda x: x[1],
            reverse=True,
        )
    ]


def getFailureRate(stageCount, stages):
    reach = 0
    chellanging = 0
    for userStage in stages:
        if userStage == stageCount:
            chellanging += 1
        elif userStage > stageCount:
            reach += 1
    reach += chellanging

    return chellanging / reach if reach != 0 else 0


print(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]))
