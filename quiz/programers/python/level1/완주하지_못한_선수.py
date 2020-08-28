import collections


def solution(participant, completion):
    answer = collections.Counter(participant) - collections.Counter(completion)
    print(list(answer)[0])
    return list(answer)[0]
